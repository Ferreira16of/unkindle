// Unkindle Zap: conecta UMA conta de WhatsApp (como "aparelho conectado") e expõe uma API simples
// para o app do Unkindle ler conversas e responder pelo Kindle.
//
// - A sessão do WhatsApp fica no Supabase, criptografada (AES-256-GCM com ZAP_SECRET). A Render grátis
//   apaga os arquivos a cada reinício, então nada importante fica em disco.
// - Só atende quem está logado no Unkindle E está na lista ZAP_ALLOWED_EMAILS.
// - GET /health responde "ok" sem login: é o endereço que o Pulsetic chama para a Render não dormir.
import http from "node:http";
import crypto from "node:crypto";
import pino from "pino";
import makeWASocket, { Browsers, BufferJSON, DisconnectReason, initAuthCreds, proto, isJidGroup, isJidBroadcast, isJidNewsletter, isJidStatusBroadcast, jidNormalizedUser } from "@whiskeysockets/baileys";

const env = (k, d = "") => String(process.env[k] || d).trim();
const PORT = Number(env("PORT", "3000"));
const SB_URL = env("SUPABASE_URL", "https://pyyijzrbknpdfqxmorfe.supabase.co");
const SB_PUB = env("SUPABASE_PUBLISHABLE_KEY", "sb_publishable_mAgtm-ihro2ESDN3NaDo3w_s5dItCZj");
const SB_SECRET = env("SUPABASE_SECRET_KEY"); // chave secreta (service_role / sb_secret_...): SÓ aqui no servidor
const SECRET = env("ZAP_SECRET");             // senha longa para criptografar a sessão
const ALLOWED = env("ZAP_ALLOWED_EMAILS").toLowerCase().split(/[,\s]+/).filter(Boolean);
const PROXY_KEY = env("ZAP_PROXY_KEY");       // opcional: só aceita pedidos vindos do proxy da Vercel
const log = pino({ level: env("LOG_LEVEL", "warn") });
const MAX_CHATS = 200, MAX_MSGS = 40;

if (!SB_SECRET || SECRET.length < 16) {
  console.error("Faltam variáveis: SUPABASE_SECRET_KEY e ZAP_SECRET (mínimo 16 caracteres).");
}

/* ---------------- criptografia ---------------- */
const KEY = crypto.createHash("sha256").update(SECRET).digest();
function enc(obj) {
  const iv = crypto.randomBytes(12), c = crypto.createCipheriv("aes-256-gcm", KEY, iv);
  const ct = Buffer.concat([c.update(JSON.stringify(obj, BufferJSON.replacer), "utf8"), c.final()]);
  return [iv.toString("base64"), c.getAuthTag().toString("base64"), ct.toString("base64")].join(".");
}
function dec(s) {
  const [iv, tag, ct] = String(s).split(".").map(x => Buffer.from(x, "base64"));
  const d = crypto.createDecipheriv("aes-256-gcm", KEY, iv); d.setAuthTag(tag);
  return JSON.parse(Buffer.concat([d.update(ct), d.final()]).toString("utf8"), BufferJSON.reviver);
}

/* ---------------- Supabase (tabela unkindle_zap_kv, só a chave secreta acessa) ---------------- */
function sbHeaders(extra) {
  const h = { apikey: SB_SECRET, "Content-Type": "application/json", ...extra };
  if (SB_SECRET.startsWith("eyJ")) h.Authorization = "Bearer " + SB_SECRET; // chave service_role antiga (JWT)
  return h;
}
async function sb(method, path, body, extra) {
  const r = await fetch(SB_URL + "/rest/v1/" + path, { method, headers: sbHeaders(extra), body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(15000) });
  if (!r.ok) throw new Error("Supabase " + r.status + ": " + (await r.text()).slice(0, 200));
  return r.status === 204 ? null : r.json().catch(() => null);
}
const kv = new Map();        // k -> valor já decifrado
const dirty = new Map();     // k -> true (gravar) | false (apagar)
let flushTimer = null;
function kvSet(k, v) { if (v == null) { kv.delete(k); dirty.set(k, false); } else { kv.set(k, v); dirty.set(k, true); } if (!flushTimer) flushTimer = setTimeout(flush, 1500); }
async function flush() {
  flushTimer = null; if (!dirty.size) return;
  const items = [...dirty.entries()]; dirty.clear();
  const ups = items.filter(([k, w]) => w && kv.has(k)).map(([k]) => k);
  const dels = items.filter(([k, w]) => !w && !kv.has(k)).map(([k]) => k);
  try {
    for (let i = 0; i < ups.length; i += 200) {
      await sb("POST", "unkindle_zap_kv?on_conflict=k", ups.slice(i, i + 200).map(k => ({ k, v: enc(kv.get(k)), updated_at: new Date().toISOString() })), { Prefer: "resolution=merge-duplicates,return=minimal" });
    }
    for (let i = 0; i < dels.length; i += 100) {
      await sb("DELETE", "unkindle_zap_kv?k=in.(" + dels.slice(i, i + 100).map(k => '"' + k.replace(/"/g, "") + '"').join(",") + ")");
    }
  } catch (e) {
    log.error(e, "falha ao salvar no Supabase");
    for (const [k, w] of items) if (!dirty.has(k)) dirty.set(k, w); // tenta de novo depois
    if (!flushTimer) flushTimer = setTimeout(flush, 10000);
  }
}
async function kvLoad() {
  kv.clear();
  for (let from = 0; ; from += 1000) {
    const rows = await sb("GET", "unkindle_zap_kv?select=k,v&order=k", null, { Range: from + "-" + (from + 999) });
    for (const r of rows || []) { try { kv.set(r.k, dec(r.v)); } catch (e) { log.warn("não deu para decifrar " + r.k + " (ZAP_SECRET mudou?)"); } }
    if (!rows || rows.length < 1000) break;
  }
}
async function kvWipe() {
  kv.clear(); dirty.clear();
  await sb("DELETE", "unkindle_zap_kv?k=neq.__nada__");
}

/* ---------------- sessão do WhatsApp em cima do kv ---------------- */
function authState() {
  const creds = kv.get("creds") || initAuthCreds();
  return {
    state: {
      creds,
      keys: {
        get: async (type, ids) => {
          const out = {};
          for (const id of ids) {
            let v = kv.get("k:" + type + ":" + id);
            if (type === "app-state-sync-key" && v) v = proto.Message.AppStateSyncKeyData.fromObject(v);
            out[id] = v;
          }
          return out;
        },
        set: async data => { for (const type in data) for (const id in data[type]) kvSet("k:" + type + ":" + id, data[type][id] || null); }
      }
    },
    saveCreds: async () => kvSet("creds", creds)
  };
}

/* ---------------- conversas (guardadas também no kv, como "store") ---------------- */
let store = { chats: {}, names: {} };
let storeTimer = null;
const saveStore = () => { if (!storeTimer) storeTimer = setTimeout(() => { storeTimer = null; kvSet("store", store); }, 30000); };
const skipJid = j => !j || !!isJidBroadcast(j) || !!isJidStatusBroadcast(j) || !!isJidNewsletter(j);
function chatJid(key) {
  // WhatsApp novo usa @lid; quando vier o número junto, prefere o número (fica uma conversa só)
  let j = key.remoteJid;
  if (j && j.endsWith("@lid") && key.remoteJidAlt && key.remoteJidAlt.endsWith("@s.whatsapp.net")) j = key.remoteJidAlt;
  return j ? jidNormalizedUser(j) : j;
}
function unwrap(m) {
  for (let i = 0; i < 5 && m; i++) {
    const inner = m.ephemeralMessage || m.viewOnceMessage || m.viewOnceMessageV2 || m.viewOnceMessageV2Extension || m.documentWithCaptionMessage || m.editedMessage;
    if (!inner) break; m = inner.message;
  }
  return m;
}
function textOf(msg) {
  const m = unwrap(msg && msg.message); if (!m) return null;
  const cap = x => x && x.caption ? " " + x.caption : "";
  const dur = s => s ? " " + Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0") : "";
  if (m.conversation) return m.conversation;
  if (m.extendedTextMessage) return m.extendedTextMessage.text || "";
  if (m.imageMessage) return "[foto]" + cap(m.imageMessage);
  if (m.videoMessage) return "[vídeo]" + cap(m.videoMessage);
  if (m.audioMessage) return (m.audioMessage.ptt ? "[áudio" : "[música") + dur(m.audioMessage.seconds) + "]";
  if (m.stickerMessage) return "[figurinha]";
  if (m.documentMessage) return "[documento] " + (m.documentMessage.fileName || "");
  if (m.contactMessage) return "[contato] " + (m.contactMessage.displayName || "");
  if (m.locationMessage || m.liveLocationMessage) return "[localização]";
  if (m.pollCreationMessage || m.pollCreationMessageV3) return "[enquete] " + ((m.pollCreationMessage || m.pollCreationMessageV3).name || "");
  if (m.buttonsResponseMessage) return m.buttonsResponseMessage.selectedDisplayText || "";
  if (m.listResponseMessage) return m.listResponseMessage.title || "";
  return null; // reações, avisos do sistema etc.: ignora
}
function chatOf(jid) {
  let c = store.chats[jid];
  if (!c) c = store.chats[jid] = { jid, name: "", t: 0, unread: 0, msgs: [] };
  return c;
}
function nameOf(jid) {
  const c = store.chats[jid];
  return (c && c.name) || store.names[jid] || (jid.endsWith("@s.whatsapp.net") ? "+" + jid.split("@")[0] : jid.split("@")[0]);
}
function addMsg(msg, fresh) {
  if (!msg || !msg.key) return;
  const jid = chatJid(msg.key); if (skipJid(jid)) return;
  if (msg.message && msg.message.protocolMessage) return;
  const text = textOf(msg); if (text == null) return;
  const c = chatOf(jid), t = Number(msg.messageTimestamp || 0) || Math.floor(Date.now() / 1000);
  if (c.msgs.some(x => x.id === msg.key.id)) return;
  const me = !!msg.key.fromMe;
  if (!me && msg.pushName && !isJidGroup(jid) && !store.names[jid]) store.names[jid] = msg.pushName;
  c.msgs.push({ id: msg.key.id, me, t, text: text.slice(0, 4000), who: isJidGroup(jid) && !me ? (msg.pushName || (msg.key.participant || "").split("@")[0]) : "", p: msg.key.participant || undefined, rj: msg.key.remoteJid });
  c.msgs.sort((a, b) => a.t - b.t); if (c.msgs.length > MAX_MSGS) c.msgs = c.msgs.slice(-MAX_MSGS);
  if (t >= c.t) c.t = t;
  if (fresh && !me) c.unread = (c.unread || 0) + 1;
  if (fresh && me) c.unread = 0;
  trimChats(); saveStore();
}
function trimChats() {
  const all = Object.values(store.chats);
  if (all.length <= MAX_CHATS) return;
  all.sort((a, b) => b.t - a.t).slice(MAX_CHATS).forEach(c => { delete store.chats[c.jid]; });
}

/* ---------------- conexão ---------------- */
let sock = null, state = "off", pairCode = null, me = null, lastError = "", starting = null, wantPhone = null;
async function start() {
  if (starting) return starting;
  starting = (async () => {
    const { state: auth, saveCreds } = authState();
    state = "connecting"; lastError = "";
    const s = makeWASocket({ auth, logger: log, browser: Browsers.ubuntu("Unkindle"), printQRInTerminal: false, markOnlineOnConnect: false, syncFullHistory: false, generateHighQualityLinkPreview: false });
    sock = s;
    s.ev.on("creds.update", saveCreds);
    s.ev.on("connection.update", async u => {
      if (s !== sock) return;
      if (u.qr && wantPhone && !auth.creds.registered) {
        const phone = wantPhone; wantPhone = null;
        try { pairCode = await s.requestPairingCode(phone); state = "pairing"; } catch (e) { lastError = "Não deu para gerar o código: " + e.message; state = "off"; }
      }
      if (u.connection === "open") {
        state = "open"; pairCode = null; me = s.user ? { id: s.user.id, name: s.user.name || "" } : null;
        s.groupFetchAllParticipating().then(gs => { for (const g of Object.values(gs || {})) { chatOf(g.id).name = g.subject || ""; } saveStore(); }).catch(() => {});
      }
      if (u.connection === "close") {
        const code = u.lastDisconnect && u.lastDisconnect.error && u.lastDisconnect.error.output && u.lastDisconnect.error.output.statusCode;
        sock = null;
        if (code === DisconnectReason.loggedOut) {
          state = "off"; me = null; pairCode = null; lastError = "O WhatsApp desconectou este aparelho.";
          await kvWipe().catch(() => {}); store = { chats: {}, names: {} };
        } else if (auth.creds.registered || state === "pairing" || code === DisconnectReason.restartRequired) {
          state = "connecting"; setTimeout(() => start().catch(() => {}), code === DisconnectReason.restartRequired ? 500 : 4000);
        } else { state = "off"; }
      }
    });
    s.ev.on("messaging-history.set", ({ chats, contacts, messages }) => {
      for (const c of contacts || []) if (c.id && (c.name || c.notify)) store.names[jidNormalizedUser(c.id)] = c.name || c.notify;
      for (const c of chats || []) { if (skipJid(c.id)) continue; const x = chatOf(jidNormalizedUser(c.id)); if (c.name) x.name = c.name; if (c.unreadCount) x.unread = c.unreadCount; if (c.conversationTimestamp) x.t = Math.max(x.t, Number(c.conversationTimestamp)); }
      for (const m of messages || []) addMsg(m, false);
      saveStore();
    });
    s.ev.on("contacts.upsert", cs => { for (const c of cs) if (c.id && (c.name || c.notify)) store.names[jidNormalizedUser(c.id)] = c.name || c.notify; saveStore(); });
    s.ev.on("contacts.update", cs => { for (const c of cs) if (c.id && (c.name || c.notify)) store.names[jidNormalizedUser(c.id)] = c.name || c.notify; });
    s.ev.on("chats.update", cs => { for (const c of cs) { if (!c.id || skipJid(c.id)) continue; const x = store.chats[jidNormalizedUser(c.id)]; if (x && typeof c.unreadCount === "number") x.unread = Math.max(0, c.unreadCount); if (x && c.name) x.name = c.name; } });
    s.ev.on("groups.update", gs => { for (const g of gs) if (g.id && g.subject) chatOf(g.id).name = g.subject; });
    s.ev.on("messages.upsert", ({ messages, type }) => { for (const m of messages) addMsg(m, type === "notify"); });
  })();
  try { await starting; } finally { starting = null; }
}
async function stop(wipe) {
  const s = sock; sock = null; state = "off"; pairCode = null; me = null;
  try { if (s) { if (wipe) await s.logout(); else s.end(undefined); } } catch (e) { /* já estava fechado */ }
  if (wipe) { await kvWipe().catch(() => {}); store = { chats: {}, names: {} }; }
}

/* ---------------- quem pode usar ---------------- */
const tokenCache = new Map(); // token -> { user, até }
async function userOf(token) {
  if (!token) return null;
  const hit = tokenCache.get(token); if (hit && hit.until > Date.now()) return hit.user;
  const r = await fetch(SB_URL + "/auth/v1/user", { headers: { apikey: SB_PUB, Authorization: "Bearer " + token }, signal: AbortSignal.timeout(8000) });
  if (!r.ok) return null;
  const u = await r.json(); if (!u || !u.id) return null;
  if (tokenCache.size > 200) tokenCache.clear();
  tokenCache.set(token, { user: u, until: Date.now() + 5 * 60000 });
  return u;
}
const sends = [];
function sendLimited() { const now = Date.now(); while (sends.length && now - sends[0] > 60000) sends.shift(); if (sends.length >= 12) return true; sends.push(now); return false; }

/* ---------------- API ---------------- */
function reply(res, code, obj) {
  const b = JSON.stringify(obj);
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", "Content-Length": Buffer.byteLength(b) });
  res.end(b);
}
function readBody(req) {
  return new Promise(ok => { let d = ""; req.on("data", c => { d += c; if (d.length > 20000) req.destroy(); }); req.on("end", () => { try { ok(JSON.parse(d || "{}")); } catch (e) { ok({}); } }); });
}
const statusObj = () => ({ state, code: pairCode, me, error: lastError, ready: !!SB_SECRET && SECRET.length >= 16 && ALLOWED.length > 0 });

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://x"), op = url.pathname.replace(/^\/+/, "");
  if (op === "health" || op === "") { res.writeHead(200, { "Content-Type": "text/plain", "Cache-Control": "no-store" }); return res.end("ok " + state); }
  try {
    if (PROXY_KEY && req.headers["x-zap-key"] !== PROXY_KEY) return reply(res, 403, { error: "Acesso negado." });
    const user = await userOf(String(req.headers.authorization || "").replace(/^Bearer\s+/i, ""));
    if (!user) return reply(res, 401, { error: "Entre na sua conta do Unkindle." });
    if (!ALLOWED.includes(String(user.email || "").toLowerCase())) return reply(res, 403, { error: "Sua conta não tem acesso ao WhatsApp do Unkindle." });
    const body = req.method === "POST" ? await readBody(req) : {};

    if (op === "status") return reply(res, 200, statusObj());

    if (op === "link" && req.method === "POST") {
      const phone = String(body.phone || "").replace(/\D/g, "");
      if (phone.length < 10 || phone.length > 15) return reply(res, 400, { error: "Digite o número com DDI e DDD, ex.: 5511999998888." });
      if (state === "open") return reply(res, 400, { error: "O WhatsApp já está conectado." });
      await stop(false); await kvWipe(); store = { chats: {}, names: {} };
      wantPhone = phone; pairCode = null; await start();
      for (let i = 0; i < 40 && !pairCode && !lastError; i++) await new Promise(r => setTimeout(r, 500));
      return pairCode ? reply(res, 200, statusObj()) : reply(res, 502, { error: lastError || "O WhatsApp não respondeu. Tente de novo." });
    }

    if (op === "logout" && req.method === "POST") { await stop(true); return reply(res, 200, statusObj()); }

    if (op === "chats") {
      const list = Object.values(store.chats).filter(c => c.msgs.length || c.name).sort((a, b) => b.t - a.t).slice(0, 80)
        .map(c => { const l = c.msgs[c.msgs.length - 1]; return { jid: c.jid, name: nameOf(c.jid), group: !!isJidGroup(c.jid), t: c.t, unread: c.unread || 0, last: l ? (l.me ? "Você: " : l.who ? l.who + ": " : "") + l.text.slice(0, 90) : "" }; });
      return reply(res, 200, { state, chats: list });
    }

    if (op === "messages") {
      const c = store.chats[String(url.searchParams.get("jid") || "")];
      if (!c) return reply(res, 404, { error: "Conversa não encontrada." });
      return reply(res, 200, { jid: c.jid, name: nameOf(c.jid), group: !!isJidGroup(c.jid), msgs: c.msgs.map(m => ({ id: m.id, me: m.me, t: m.t, text: m.text, who: m.who })) });
    }

    if (op === "read" && req.method === "POST") {
      const c = store.chats[String(body.jid || "")]; if (!c) return reply(res, 404, { error: "Conversa não encontrada." });
      const keys = c.msgs.filter(m => !m.me).slice(-Math.max(1, Math.min(c.unread || 0, 20))).map(m => ({ remoteJid: m.rj || c.jid, id: m.id, participant: m.p, fromMe: false }));
      c.unread = 0; saveStore();
      if (sock && state === "open" && keys.length) sock.readMessages(keys).catch(() => {});
      return reply(res, 200, { ok: true });
    }

    if (op === "send" && req.method === "POST") {
      if (!sock || state !== "open") return reply(res, 409, { error: "O WhatsApp não está conectado agora." });
      const jid = String(body.jid || ""), text = String(body.text || "").trim().slice(0, 2000);
      if (!store.chats[jid]) return reply(res, 404, { error: "Conversa não encontrada." });
      if (!text) return reply(res, 400, { error: "Mensagem vazia." });
      if (sendLimited()) return reply(res, 429, { error: "Calma: muitas mensagens em pouco tempo. Espere um minuto." });
      const sent = await sock.sendMessage(jid, { text });
      if (sent) addMsg(sent, true);
      return reply(res, 200, { ok: true });
    }
    return reply(res, 404, { error: "Rota não encontrada." });
  } catch (e) {
    log.error(e);
    return reply(res, 500, { error: "Erro no servidor do WhatsApp." });
  }
});

/* ---------------- início ---------------- */
async function boot() {
  server.listen(PORT, () => console.log("Unkindle Zap na porta " + PORT));
  if (!SB_SECRET || SECRET.length < 16) return;
  try {
    await kvLoad();
    if (kv.get("store")) store = Object.assign({ chats: {}, names: {} }, kv.get("store"));
    const creds = kv.get("creds");
    if (creds && creds.registered) await start(); // já pareado antes: reconecta sozinho
  } catch (e) { lastError = "Não deu para ler a sessão no Supabase."; log.error(e); }
}
const bye = async () => { try { if (storeTimer) { clearTimeout(storeTimer); kvSet("store", store); } await flush(); } finally { process.exit(0); } };
process.on("SIGTERM", bye); process.on("SIGINT", bye);
boot();
