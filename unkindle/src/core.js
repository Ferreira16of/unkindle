/* Núcleo do Unkindle: dados, conta, telas, grade de apps e páginas. */

/* ---------- Dados locais ---------- */
var KEY = "unkindle.v1";
var DEFAULT = { favs: [], recents: [], hidden: [], settings: { font: 18 }, notes: [], todos: [], habits: [], reads: [], pomos: 0, x: {} };
function normalize(o) {
  var s = Object.assign({}, DEFAULT, o || {});
  s.settings = Object.assign({ font: 18 }, s.settings || {});
  s.x = s.x || {};
  return s;
}
var S = (function () { try { return normalize(JSON.parse(lsGet(KEY) || "{}")); } catch (e) { return normalize({}); } })();
var apps = [];
var X = function (k, d) { if (!(k in S.x)) S.x[k] = d; return S.x[k]; };

/* ---------- Conta e sincronização (Supabase via REST, sem biblioteca) ---------- */
var CFG = window.UNKINDLE_CONFIG || {};
var remote = !!(CFG.url && CFG.anonKey);
var session = null;
var pushTimer = null, lastSync = "";
function stamp() { var d = new Date(); lastSync = pad2(d.getHours()) + ":" + pad2(d.getMinutes()); }
try { session = JSON.parse(lsGet("unkindle.session") || "null"); } catch (e) { session = null; }
function storeSession(j) {
  session = j && j.access_token ? { access_token: j.access_token, refresh_token: j.refresh_token, expires_at: Math.floor(Date.now() / 1000) + (j.expires_in || 3600), user: { id: j.user.id, email: j.user.email, username: (j.user.user_metadata && j.user.user_metadata.username) || (session && session.user && session.user.username) || "" } } : null;
  if (session) lsSet("unkindle.session", JSON.stringify(session)); else lsDel("unkindle.session");
}
function sbHeaders(auth, extra) {
  var hd = { apikey: CFG.anonKey, "Content-Type": "application/json" };
  if (auth && session) hd.Authorization = "Bearer " + session.access_token;
  for (var k in (extra || {})) hd[k] = extra[k];
  return hd;
}
function sbCall(method, path, body, auth, extra) {
  return api(CFG.url + path, { method: method, headers: sbHeaders(auth, extra), body: body ? JSON.stringify(body) : undefined });
}
function ensureToken() {
  if (!session) return Promise.reject(new Error("sem sessão"));
  if (session.expires_at - 60 > Date.now() / 1000) return Promise.resolve();
  return sbCall("POST", "/auth/v1/token?grant_type=refresh_token", { refresh_token: session.refresh_token }, false).then(storeSession, function (e) { storeSession(null); setAuthLbl(); throw e; });
}
function pt(msg) {
  msg = String(msg || "");
  if (/anonymous|missing email|missing password|signup requires/i.test(msg)) return "Preencha e-mail e senha.";
  if (/invalid login/i.test(msg)) return "E-mail ou senha incorretos.";
  if (/already registered|already been registered/i.test(msg)) return "Esse e-mail já tem conta. Use Entrar.";
  if (/database error saving new user|duplicate key|unique/i.test(msg)) return "Esse @ já está em uso. Escolha outro.";
  if (/not confirmed/i.test(msg)) return "Este projeto ainda exige confirmação de e-mail. Desligue 'Confirm email' no painel do Supabase.";
  if (/password/i.test(msg)) return "A senha precisa de pelo menos 6 caracteres.";
  if (/rate limit/i.test(msg)) return "Muitas tentativas. Aguarde um pouco.";
  if (/rede|network|tempo/i.test(msg)) return "Sem conexão com o servidor.";
  return msg;
}
function signIn(email, password) { return sbCall("POST", "/auth/v1/token?grant_type=password", { email: email, password: password }, false).then(storeSession); }
/* Nome de usuário (@): 3 a 20 letras minúsculas, números, ponto ou _. Único (tabela unkindle_profiles). */
function cleanUser(u) { return String(u || "").replace(/^\s+|\s+$/g, "").replace(/^@+/, "").toLowerCase(); }
function userOk(u) { return /^[a-z0-9_.]{3,20}$/.test(u); }
function userFree(u) { return sbCall("POST", "/rest/v1/rpc/unkindle_username_free", { u: u }, false); }
function signUp(email, password, username) {
  return sbCall("POST", "/auth/v1/signup", { email: email, password: password, data: username ? { username: username } : {} }, false).then(function (j) { if (j && j.access_token) storeSession(j); else return signIn(email, password); });
}
function setUsername(u) {
  return ensureToken().then(function () { return sbCall("POST", "/rest/v1/rpc/unkindle_set_username", { u: u }, true); })
    .then(function () { return sbCall("PUT", "/auth/v1/user", { data: { username: u } }, true); })
    .then(function () { session.user.username = u; lsSet("unkindle.session", JSON.stringify(session)); setAuthLbl(); });
}
function signOut() { storeSession(null); setAuthLbl(); }
function push() {
  if (!remote || !session) return Promise.resolve();
  return ensureToken().then(function () {
    return sbCall("POST", "/rest/v1/unkindle_data?on_conflict=user_id", { user_id: session.user.id, data: S, updated_at: new Date().toISOString() }, true, { Prefer: "resolution=merge-duplicates,return=minimal" });
  }).then(function () { pendingPush = false; stamp(); })["catch"](function () { pendingPush = true; toast("Sem conexão: salvo neste aparelho, envio depois"); });
}
function pull() {
  if (!remote || !session) return Promise.resolve();
  return ensureToken().then(function () { return sbCall("GET", "/rest/v1/unkindle_data?select=data&user_id=eq." + session.user.id, null, true); }).then(function (rows) {
    if (rows && rows.length && rows[0].data) { S = normalize(rows[0].data); lsSet(KEY, JSON.stringify(S)); applyFont(); renderHome(); stamp(); } else return push();
  })["catch"](function () { toast("Não foi possível baixar seus dados"); });
}
function sbFeedback(msg) {
  if (!remote || !session) return Promise.resolve();
  return ensureToken().then(function () { return sbCall("POST", "/rest/v1/unkindle_feedback", { user_id: session.user.id, msg: msg }, true, { Prefer: "return=minimal" }); });
}
/* Rascunhos: o que você digitou num app volta quando você reabre (e vai junto com a conta) */
var pendingPush = false, draftApp = null;
function fieldOk(el) { return (el.tagName === "TEXTAREA" || el.tagName === "INPUT") && !/^(password|file|checkbox|radio|range|hidden|button|submit|number|date|time)$/.test(el.type || ""); }
function fieldKeys(b) {
  var all = b.querySelectorAll("input,textarea"), seen = {}, out = [];
  for (var i = 0; i < all.length; i++) { var el = all[i]; if (!fieldOk(el)) continue; var k = el.tagName + ":" + (el.getAttribute("placeholder") || ""); seen[k] = (seen[k] || 0) + 1; out.push([k + ":" + seen[k], el]); }
  return out;
}
function snapDrafts() {
  if (!draftApp) return; var b = $("#app-body"), d = {}, any = false;
  fieldKeys(b).forEach(function (p) { var v = p[1].value; if (v && v.length < 20000) { d[p[0]] = v; any = true; } });
  S.x._drafts = S.x._drafts || {}; if (any) S.x._drafts[draftApp] = d; else delete S.x._drafts[draftApp];
  lsSet(KEY, JSON.stringify(S));
}
function restoreDrafts(b, id) {
  draftApp = id; var d = S.x._drafts && S.x._drafts[id]; if (!d) return;
  setTimeout(function () { if (draftApp !== id) return; fieldKeys(b).forEach(function (p) { if (d[p[0]] != null && !p[1].value) p[1].value = d[p[0]]; }); }, 0);
}
var draftT = null;
function draftInput(e) { if (curView === "app" && e.target && fieldOk(e.target)) { clearTimeout(draftT); draftT = setTimeout(function () { snapDrafts(); save(); }, 900); } }
function flushSave() { snapDrafts(); if (remote && session && (pushTimer || pendingPush)) { clearTimeout(pushTimer); pushTimer = null; push(); } }
window.addEventListener("online", function () { if (pendingPush) push(); }, false);
document.addEventListener("visibilitychange", function () { if (document.hidden) flushSave(); }, false);
window.addEventListener("pagehide", flushSave, false);
function save() {
  lsSet(KEY, JSON.stringify(S));
  if (remote && session) { clearTimeout(pushTimer); pushTimer = setTimeout(push, 800); }
}
function handle() { return session ? (session.user.username ? "@" + session.user.username : session.user.email.split("@")[0]) : ""; }
function setAuthLbl() {
  var e = $("#auth-lbl"); if (!e) return;
  e.textContent = handle(); show($("#btn-auth"), !!session); show($("#auth-out"), !session);
}

/* ---------- Arquivos na conta (Supabase Storage, pasta = id do usuário) ---------- */
var BUCKET = "unkindle-files";
function fileKey(name) {
  var m = { "á": "a", "à": "a", "â": "a", "ã": "a", "ä": "a", "é": "e", "ê": "e", "è": "e", "í": "i", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ú": "u", "ü": "u", "ç": "c", "ñ": "n" };
  return String(name).replace(/[^\x00-\x7f]/g, function (c) { var l = m[c.toLowerCase()]; return l ? (c === c.toLowerCase() ? l : l.toUpperCase()) : "_"; }).replace(/[^\w .()\-+,&@=;!']/g, "_").slice(0, 180) || "arquivo";
}
function relKey(rel) { return String(rel).split("/").map(fileKey).join("/"); }
function objPath(rel) { return session.user.id + "/" + relKey(rel).split("/").map(encodeURIComponent).join("/"); }
function filesList(sub) {
  return ensureToken().then(function () {
    return sbCall("POST", "/storage/v1/object/list/" + BUCKET, { prefix: session.user.id + (sub ? "/" + sub : ""), limit: 1000, offset: 0, sortBy: { column: "created_at", order: "desc" } }, true);
  }).then(function (rows) {
    return (rows || []).filter(function (r) { return r.id && r.name !== ".emptyFolderPlaceholder"; }).map(function (r) { return { name: r.name, size: (r.metadata && r.metadata.size) || 0, date: r.created_at }; });
  });
}
function fileUp(f, onProg) { return objUp(f.name, f, f.type, onProg); }
function objUp(rel, f, type, onProg) {
  return ensureToken().then(function () {
    return new Promise(function (ok, no) {
      var x = new XMLHttpRequest();
      x.open("POST", CFG.url + "/storage/v1/object/" + BUCKET + "/" + objPath(rel), true);
      var hd = sbHeaders(true, { "x-upsert": "true", "Content-Type": type || "application/octet-stream" });
      for (var k in hd) x.setRequestHeader(k, hd[k]);
      if (x.upload && onProg) x.upload.onprogress = function (e) { if (e.lengthComputable) onProg(e.loaded / e.total); };
      x.onload = function () {
        if (x.status >= 200 && x.status < 300) return ok();
        var j = null; try { j = JSON.parse(x.responseText); } catch (e) {}
        var er = new Error((j && (j.message || j.error)) || "HTTP " + x.status); er.status = x.status; no(er);
      };
      x.onerror = function () { no(new Error("rede")); };
      x.send(f);
    });
  });
}
function fileUrl(name) {
  return ensureToken().then(function () { return sbCall("POST", "/storage/v1/object/sign/" + BUCKET + "/" + objPath(name), { expiresIn: 3600 }, true); })
    .then(function (j) { return CFG.url + "/storage/v1" + j.signedURL + "&download=" + encodeURIComponent(name); });
}
function fileDel(name) {
  return ensureToken().then(function () { return sbCall("DELETE", "/storage/v1/object/" + BUCKET, { prefixes: [session.user.id + "/" + relKey(name)] }, true); });
}
function signMany(rels) {
  if (!rels.length) return Promise.resolve([]);
  return ensureToken().then(function () { return sbCall("POST", "/storage/v1/object/sign/" + BUCKET, { expiresIn: 3600, paths: rels.map(function (r) { return session.user.id + "/" + relKey(r); }) }, true); })
    .then(function (arr) { return arr.map(function (x) { return x.signedURL ? CFG.url + "/storage/v1" + x.signedURL : ""; }); });
}

/* ---------- Avisos e telas ---------- */
var noteTimer = null;
function rep(o) { try { if (window.__ukReport) window.__ukReport(o); } catch (e) {} }
function toast(m) { var t = $("#note"); t.textContent = m; show(t, true); clearTimeout(noteTimer); noteTimer = setTimeout(function () { show(t, false); }, 2500); }
var curView = "home", sheetFrom = "home";
function showView(v) {
  curView = v;
  ["home", "app", "sheet"].forEach(function (n) { show($("#view-" + n), n === v); });
  show($("#tabs"), v === "home");
  document.body.className = "v-" + v;
  window.scrollTo(0, 0);
  scheduleFix();
}
function modal() {
  var nodes = Array.prototype.slice.call(arguments);
  if (!inRoute) { var hh = here(); go((hh.indexOf("~") < 0 ? hh : hh.split("~")[0]) + "~m", true); }
  if (curView !== "sheet") { sheetFrom = curView; if (curView === "home") homeY = window.pageYOffset || document.documentElement.scrollTop || 0; }
  $("#sheet-body").replaceChildren.apply($("#sheet-body"), nodes);
  showView("sheet");
}
function closeModal() { if (curView !== "sheet") return; if (canBack()) history.back(); else go(sheetFrom === "app" && current ? current.id : ""); }
function hideSheet() { showView(sheetFrom); if (sheetFrom === "home") window.scrollTo(0, homeY); }
/* Fontes: [chave, nome, família CSS, escala do tamanho] */
var TIPOS = [["bookerly", "Bookerly", '"Bookerly", "Literata", Georgia, serif', 1.02]];
if (S.settings.famV !== 3) { S.settings.fam = "bookerly"; S.settings.famV = 3; }
function fontOf(k) { for (var i = 0; i < TIPOS.length; i++) if (TIPOS[i][0] === k) return TIPOS[i]; return TIPOS[0]; }
function applyFont() { var f = fontOf(S.settings.fam); document.body.style.fontFamily = f[2]; document.body.style.fontWeight = f[0] === "bookerly" ? "500" : ""; document.body.style.fontSize = Math.round(S.settings.font * f[3]) + "px"; }

/* ---------- Apps: registro e abertura ---------- */
var cat = 0, page = 0, editing = false, current = null;
function plain(s) { return s.toLowerCase().replace(/[áàâã]/g, "a").replace(/[éê]/g, "e").replace(/í/g, "i").replace(/[óôõ]/g, "o").replace(/ú/g, "u").replace(/ç/g, "c"); }
function inList(a, id) { return a.indexOf(id) >= 0; }
function toggle(arr, id) { var i = arr.indexOf(id); if (i < 0) arr.push(id); else arr.splice(i, 1); save(); renderHome(); }
function openApp(id) { go(id); }
function doOpenApp(id) {
  var a = null, i;
  for (i = 0; i < apps.length; i++) if (apps[i].id === id) a = apps[i];
  if (!a) return;
  current = a;
  if (curView === "home") homeY = window.pageYOffset || document.documentElement.scrollTop || 0;
  S.recents = [id].concat(S.recents.filter(function (x) { return x !== id; })).slice(0, 6); save();
  $("#app-title").replaceChildren(ic(a.i, 28), " " + a.n); favBtn();
  snapDrafts();
  var b = $("#app-body"); if (b._cleanup) { try { b._cleanup(); } catch (e0) {} } b.replaceChildren(); b._cleanup = null; b._sub = null;
  showView("app");
  try { a.r(b); restoreDrafts(b, id); } catch (e) { rep({ tipo: "app-falhou", app: id, msg: String(e && e.message), pilha: e && e.stack ? String(e.stack).slice(0, 1500) : "" }); b.replaceChildren(h("p", {}, "Este app não pôde ser aberto neste aparelho."), h("p", { "class": "muted" }, String(e && e.message))); }
}
function favBtn() { $("#app-fav").replaceChildren(ic("star", 22, inList(S.favs, current.id))); }
function closeApp() { goHome(); }
function doCloseApp() {
  snapDrafts(); draftApp = null;
  var b = $("#app-body"); if (b._cleanup) { try { b._cleanup(); } catch (e) {} } b._cleanup = null; b._sub = null;
  showView("home"); renderHome();
  window.scrollTo(0, homeY);
}

/* Roteador: "" = início, "#id" = app, "#id/v" = subtela do app, "#ajustes" etc. = páginas, "~m" = janela aberta por um app */
var PAGES = { ajustes: "settings", conta: "auth", ajuda: "help", privacidade: "privacy", novidades: "changelog", diagnostico: "diag" };
var inRoute = false, navIdx = 0, homeIdx = 0, bootIdx = 1, reopenApp = false, skipHash = null;
function here() { return (location.hash || "").replace(/^#/, ""); }
function stIdx() { try { return history.state && history.state.uk != null ? history.state.uk : null; } catch (e) { return null; } }
function canBack() { var i = stIdx(); return i != null && i > bootIdx; }
function go(hash, quiet) {
  if (here() === hash) { if (!quiet) route(); return; }
  if (quiet) skipHash = hash;
  location.hash = hash;
  if (quiet) markIdx();
}
function markIdx() { var i = stIdx(); if (i == null) { navIdx++; try { history.replaceState({ uk: navIdx }, "", location.href); } catch (e) {} } else navIdx = i; }
function goHome() { var i = stIdx(); if (i != null && homeIdx != null && homeIdx < i && i - homeIdx < 50) history.go(homeIdx - i); else go(""); }
function pushSub(b, back) { b._sub = back; go(current.id + "/v", true); }
function route() {
  if (inRoute) return;
  if (skipHash !== null && here() === skipHash) { skipHash = null; markIdx(); return; }
  markIdx();
  var hs = here(), base = hs.split("~")[0].split("/")[0], modalOpen = hs.indexOf("~m") >= 0, sub = /\/v/.test(hs);
  inRoute = true;
  try {
    if (!base) {
      homeIdx = stIdx();
      if (curView === "app") doCloseApp(); else if (curView === "sheet") { if (sheetFrom === "app") doCloseApp(); else hideSheet(); }
    } else if (PAGES[base]) {
      var arg = hs.split("/")[1];
      pagesRaw[PAGES[base]](arg);
    } else if (byId(base)) {
      if (curView === "sheet" && !modalOpen && current && current.id === base) { hideSheet(); if (reopenApp) { reopenApp = false; doOpenApp(base); } }
      else if (curView === "sheet" && !modalOpen && sheetFrom === "app" && current && current.id !== base) doOpenApp(base);
      else if (curView !== "app" || !current || current.id !== base) { if (curView !== "sheet" || !modalOpen) doOpenApp(base); }
      else { var bd = $("#app-body"); if (!sub && bd._sub) { var f = bd._sub; bd._sub = null; f(); } }
    } else if (curView !== "home") { doCloseApp(); }
  } finally { inRoute = false; }
}
window.addEventListener("hashchange", route, false);
var homeY = 0;


/* ---------- Widgets ---------- */
/* Localização por IP: consulta vários serviços e fica com o ponto mais central do grupo. */
var IPSRC = [
  ["https://ipwho.is/", function (j) { return j.success === false ? null : { lat: j.latitude, lon: j.longitude, city: j.city }; }],
  ["https://ipapi.co/json/", function (j) { return j.error ? null : { lat: j.latitude, lon: j.longitude, city: j.city }; }],
  ["https://get.geojs.io/v1/ip/geo.json", function (j) { return { lat: +j.latitude, lon: +j.longitude, city: j.city }; }],
  ["https://ipinfo.io/json", function (j) { var p = (j.loc || "").split(","); return { lat: +p[0], lon: +p[1], city: j.city }; }],
  ["https://freeipapi.com/api/json", function (j) { return { lat: j.latitude, lon: j.longitude, city: j.cityName }; }],
  ["https://api.ipapi.is/", function (j) { return j.location ? { lat: j.location.latitude, lon: j.location.longitude, city: j.location.city } : null; }]
];
function ipLocations() {
  return Promise.all(IPSRC.map(function (s) {
    return api(s[0]).then(function (j) { var p = s[1](j); return p && isFinite(p.lat) && isFinite(p.lon) && p.lat !== 0 ? p : null; }, function () { return null; });
  })).then(function (r) { return r.filter(Boolean); });
}
function medoid(pts) {
  var cost = function (p) { return pts.reduce(function (s, q) { return s + Math.sqrt(Math.pow(p.lat - q.lat, 2) + Math.pow(p.lon - q.lon, 2)); }, 0); };
  return pts.reduce(function (a, b) { return cost(a) <= cost(b) ? a : b; });
}
function locate() {
  ipLocations().then(function (pts) {
    if (!pts.length) return weather(-23.55, -46.63, "São Paulo");
    var b = medoid(pts); weather(b.lat, b.lon, b.city || "sua região");
  });
}

/* ---------- Páginas (telas de ajuda, ajustes, conta) ---------- */
var pages = {}, pagesRaw = {
  help: function () { modal(h("h2", {}, "Ajuda e FAQ"), h("p", {}, "O Unkindle é uma central de apps simples, feita para telas e-ink, celulares e computadores."),
    h("p", {}, "Favoritos: toque em Organizar e depois na estrela. Ocultar: use o ícone de olho no modo Organizar."),
    h("p", {}, "Sem conta, seus dados ficam só neste aparelho. Com conta, notas, tarefas, favoritos e arquivos ficam guardados na sua conta e aparecem em qualquer aparelho."),
    h("p", {}, "Se algum app não funcionar no seu aparelho, abra o diagnóstico abaixo e me envie o resultado."), h("button", { onclick: pages.diag }, "Diagnóstico do aparelho")); },
  privacy: function () { modal(h("h2", {}, "Privacidade"), h("p", {}, "Não vendemos nem compartilhamos seus dados. Sem conta, tudo fica no seu navegador. Com conta, seus dados e arquivos ficam salvos na sua conta, protegidos por regras que só permitem acesso ao próprio dono."), h("p", {}, "Os apps online consultam serviços públicos (BrasilAPI, IBGE, ViaCEP, Wikipédia, Open-Meteo, GitHub e outros). Ao usar um deles, o que você digitou na busca é enviado a esse serviço, e seu IP aparece para ele. O clima da tela inicial consulta serviços de localização por IP."), h("p", {}, "Relatórios técnicos: quando algo falha, a página envia ao próprio servidor que a hospeda o erro, o modelo do navegador e o tamanho da tela, para eu corrigir. Nada do que você digita é enviado.")); },
  changelog: function () { modal(h("h2", {}, "Novidades"), h("p", {}, "v0.7 – Visual retrô em pixels, cabeçalho fixo, voltar/avançar do navegador, Notícias e Wikipédia lidas aqui dentro, Dicionário PT/EN, Clima e CEP unificados, Galeria na conta, Dino, Untetris e Damas novos."), h("p", {}, "v0.6 – Apps com visual novo, Calendário refeito, Arquivos guardados na sua conta, novas telas de login e Ajustes."), h("p", {}, "v0.5 – Visual novo para e-ink: preto e branco puro, categorias com índice, grade ou lista, e a tela inicial volta para onde você estava."), h("p", {}, "v0.4 – Visual escuro novo e dezenas de apps online (notícias, Brasil, mundo, finanças e mais)."), h("p", {}, "v0.1 – Primeira versão.")); },
  settings: function () {
    var box = h("div");
    var seg = function (opts, cur, set) {
      return h("span", { "class": "seg" }, opts.map(function (o) { return h("button", { "class": o[0] === cur ? "on" : "", onclick: function () { set(o[0]); } }, o[1]); }));
    };
    var item = function (title, desc, ctrl, go) {
      return h("div", { "class": "si" + (go ? " go" : ""), onclick: go || null }, h("span", { "class": "st" }, h("b", {}, title), desc ? h("small", {}, desc) : null), h("span", { "class": "sc" }, ctrl));
    };
    var chev = function () { return ic("chev", 20); };
    var draw = function () {
      var imp = h("input", { type: "file", accept: ".json,application/json" });
      imp.onchange = function () { if (!imp.files || !imp.files[0]) return; var fr = new FileReader(); fr.onload = function () { try { S = normalize(JSON.parse(fr.result)); save(); applyFont(); renderHome(); toast("Backup importado"); draw(); } catch (e) { toast("Arquivo inválido"); } }; fr.readAsText(imp.files[0]); };
      var hid = S.hidden.length;
      box.replaceChildren(
        h("div", { "class": "lbl2", style: "margin-top:6px" }, "Aparência"),
        h("div", { "class": "set" },
          item("Tema", "Escuro é o mais confortável em e-ink à noite.", seg([["dark", "Escuro"], ["light", "Claro"]], THEME, function (t) { if (t !== THEME) { lsSet("unkindle.theme", t); location.reload(); } })),
          item("Tamanho do texto", "Vale para o Unkindle inteiro.", h("span", { "class": "seg" },
            h("button", { "aria-label": "Diminuir", onclick: function () { S.settings.font = Math.max(14, S.settings.font - 2); save(); applyFont(); draw(); } }, "A−"),
            h("span", { "class": "val" }, S.settings.font + ""),
            h("button", { "aria-label": "Aumentar", onclick: function () { S.settings.font = Math.min(30, S.settings.font + 2); save(); applyFont(); draw(); } }, "A+")))),
        h("div", { "class": "lbl2" }, "Tela inicial"),
        h("div", { "class": "set" },
          item("Exibição dos apps", null, seg([["grid", "Grade"], ["list", "Lista"]], S.settings.view === "list" ? "list" : "grid", function (v) { S.settings.view = v; save(); renderHome(); draw(); })),
          item("Apps ocultos", hid ? hid + (hid === 1 ? " app oculto" : " apps ocultos") : "Nenhum app oculto", hid ? btn("Mostrar todos", function () { S.hidden = []; save(); renderHome(); draw(); toast("Todos os apps visíveis"); }) : null),
          item("Favoritos e recentes", "Limpa as listas da tela inicial.", btn("Limpar", function () { if (confirm("Limpar favoritos e recentes?")) { S.favs = []; S.recents = []; save(); renderHome(); draw(); toast("Listas limpas"); } }))),
        h("div", { "class": "lbl2" }, "Conta"),
        h("div", { "class": "set" },
          session ? item(session.user.email, lastSync ? "Sincronizado às " + lastSync : "Seus dados sincronizam com a conta.", chev(), pages.auth)
            : item("Entrar ou criar conta", "Guarde apps, notas e arquivos na sua conta.", chev(), pages.auth)),
        h("div", { "class": "lbl2" }, "Backup"),
        h("div", { "class": "set" },
          item("Exportar", "Baixa um arquivo .json com tudo.", btn("Exportar", function () { try { h("a", { href: URL.createObjectURL(new Blob([JSON.stringify(S, null, 2)], { type: "application/json" })), download: "unkindle-backup.json" }).click(); } catch (e) { toast("Este aparelho não permite baixar arquivos"); } })),
          item("Importar", "Substitui seus dados pelos do arquivo.", h("label", { "class": "filebtn" }, "Importar", imp))),
        h("div", { "class": "lbl2" }, "Sobre"),
        h("div", { "class": "set" },
          item("Ajuda", null, chev(), pages.help), item("Novidades", null, chev(), pages.changelog),
          item("Privacidade", null, chev(), pages.privacy), item("Diagnóstico do aparelho", null, chev(), pages.diag)));
    };
    draw();
    modal(h("h2", {}, "Ajustes"), box);
  },
  auth: function (m) {
    var reopen = function () { if (sheetFrom === "app" && current) reopenApp = true; closeModal(); };
    var brand = function () { return h("div", { "class": "brand" }, "UN", h("b", {}, "KINDLE")); };
    if (!remote) return modal(h("div", { "class": "auth" }, brand(), h("h2", {}, "Conta"), h("p", { "class": "sub" }, "Modo local: seus dados ficam neste aparelho. Para ativar login e sincronização, preencha o arquivo config.js com seu projeto Supabase.")));
    if (session) {
      var stat = h("small", { "class": "muted" }, lastSync ? "Sincronizado às " + lastSync : "Sincronização automática ligada");
      return modal(h("div", { "class": "auth" }, brand(), h("h2", {}, "Sua conta"), h("p", { "class": "sub" }, "Tudo o que você faz no Unkindle fica guardado aqui e aparece em qualquer aparelho em que você entrar."),
        h("div", { "class": "who" }, h("b", {}, session.user.username ? "@" + session.user.username : session.user.email), session.user.username ? h("small", {}, session.user.email) : null, stat),
        session.user.username ? null : (function () {
          var u = h("input", { type: "text", id: "f-us", autocapitalize: "off", autocorrect: "off", placeholder: "seunome", maxlength: "20" }), em2 = h("div", { "class": "err" }); show(em2, false);
          var sv = btn("Salvar meu @", function () {
            var v = cleanUser(u.value); em2.textContent = ""; show(em2, false);
            if (!userOk(v)) { em2.textContent = "Use de 3 a 20 letras minúsculas, números, ponto ou _."; return show(em2, true); }
            sv.disabled = true; setUsername(v).then(function () { toast("Agora você é @" + v); pages.auth(); }, function (e) { sv.disabled = false; em2.textContent = pt(e.message); show(em2, true); });
          }, "wide");
          return h("div", {}, h("div", { "class": "fld" }, h("label", { "for": "f-us" }, "Escolha seu @"), h("div", { "class": "at" }, h("span", {}, "@"), u)), em2, sv);
        })(),
        btn("Sincronizar agora", function () { stat.textContent = "Sincronizando…"; pull().then(function () { stat.textContent = lastSync ? "Sincronizado às " + lastSync : "Pronto"; }); }, "solid wide"),
        btn("Abrir meus arquivos", function () { openApp("files"); }, "wide"),
        btn("Sair desta conta", function () { if (confirm("Sair da conta neste aparelho?")) { signOut(); reopen(); toast("Você saiu"); } }, "wide")));
    }
    var mode = m === "up" ? "up" : "in";
    var box = h("div", { "class": "auth" });
    var draw = function () {
      var up = mode === "up";
      var em = h("input", { type: "email", id: "f-em", autocapitalize: "off", autocorrect: "off", autocomplete: "email", placeholder: "voce@email.com" });
      var pw = h("input", { type: "password", id: "f-pw", autocomplete: up ? "new-password" : "current-password", placeholder: up ? "Mínimo de 6 caracteres" : "Sua senha" });
      var us = h("input", { type: "text", id: "f-us", autocapitalize: "off", autocorrect: "off", autocomplete: "username", placeholder: "seunome", maxlength: "20" });
      var uh = h("small", { "class": "hint" }, "3 a 20 caracteres: letras, números, ponto ou _.");
      us.addEventListener("blur", function () {
        var v = cleanUser(us.value); if (!v) return;
        if (!userOk(v)) { uh.textContent = "Use só letras minúsculas, números, ponto ou _ (3 a 20)."; return; }
        uh.textContent = "Verificando…";
        userFree(v).then(function (ok) { uh.textContent = ok ? "@" + v + " está disponível." : "@" + v + " já está em uso."; }, function () { uh.textContent = "3 a 20 caracteres: letras, números, ponto ou _."; });
      }, false);
      var msg = h("div", { "class": "err" }); show(msg, false);
      var go = h("button", { "class": "solid wide" }, up ? "Criar conta" : "Entrar");
      var say = function (t) { msg.textContent = t; show(msg, !!t); };
      var run = function () {
        var email = em.value.replace(/^\s+|\s+$/g, ""), password = pw.value, user = cleanUser(us.value);
        if (up && !userOk(user)) return say("Escolha um @ de 3 a 20 caracteres: letras minúsculas, números, ponto ou _.");
        if (!email || email.indexOf("@") < 1) return say("Digite um e-mail válido.");
        if (password.length < 6) return say("A senha precisa de pelo menos 6 caracteres.");
        say(""); go.disabled = true; go.textContent = "Aguarde…";
        var fail = function (e) { go.disabled = false; go.textContent = up ? "Criar conta" : "Entrar"; say(pt(e.message)); };
        if (up) return userFree(user).then(function (free) {
          if (!free) return fail(new Error("unique"));
          return signUp(email, password, user).then(function () { setAuthLbl(); toast("Bem-vindo, @" + user); reopen(); return pull(); }, fail);
        }, function () { return signUp(email, password, user).then(function () { setAuthLbl(); toast("Bem-vindo, @" + user); reopen(); return pull(); }, fail); });
        signIn(email, password).then(function () { setAuthLbl(); toast(up ? "Conta criada" : "Bem-vindo de volta"); reopen(); return pull(); },
          function (e) { go.disabled = false; go.textContent = up ? "Criar conta" : "Entrar"; say(pt(e.message)); });
      };
      go.onclick = run;
      var enter = function (e) { if (e.key === "Enter" || e.keyCode === 13) run(); };
      em.addEventListener("keydown", enter, false); us.addEventListener("keydown", enter, false); pw.addEventListener("keydown", enter, false);
      var eye = h("button", { "class": "lnk", onclick: function () { pw.type = pw.type === "password" ? "text" : "password"; eye.textContent = pw.type === "password" ? "Mostrar" : "Ocultar"; } }, "Mostrar");
      box.replaceChildren(brand(),
        h("h2", {}, up ? "Crie sua conta" : "Entre na sua conta"),
        h("p", { "class": "sub" }, up ? "Grátis. Escolha seu @, e-mail e senha." : "Para ver seus favoritos, notas e arquivos em qualquer aparelho."),
        up ? h("div", { "class": "fld" }, h("label", { "for": "f-us" }, "Nome de usuário"), h("div", { "class": "at" }, h("span", {}, "@"), us), uh) : null,
        h("div", { "class": "fld" }, h("label", { "for": "f-em" }, "E-mail"), em),
        h("div", { "class": "fld" }, h("label", { "for": "f-pw" }, "Senha", eye), pw),
        msg, go,
        h("p", { "class": "switch" }, up ? "Já tem conta?" : "Ainda não tem conta?", h("button", { "class": "lnk", onclick: function () { mode = up ? "in" : "up"; draw(); } }, up ? "Entrar" : "Criar conta grátis")),
        h("ul", { "class": "perks" },
          h("li", {}, ic("check", 20), "Favoritos, notas, tarefas e calendário em todos os aparelhos"),
          h("li", {}, ic("check", 20), "Seus arquivos guardados na conta"),
          h("li", {}, ic("check", 20), "Sem conta, tudo continua funcionando só neste aparelho")),
        h("p", { style: "text-align:center;margin-top:14px" }, h("button", { "class": "lnk", onclick: closeModal }, "Continuar sem conta")));
    };
    draw();
    modal(box);
  },
  diag: function () {
    var el = document.createElement("div"), t = function (f) { try { return !!f(); } catch (e) { return false; } };
    var st = document.body.style;
    var rows = [["Navegador", navigator.userAgent], ["Tela", window.innerWidth + "×" + window.innerHeight],
      ["Armazenamento local", t(function () { window.localStorage.setItem("t", "1"); window.localStorage.removeItem("t"); return 1; })], ["Canvas (jogos de desenho)", t(function () { return document.createElement("canvas").getContext("2d"); })],
      ["Ícones SVG", t(function () { var s = document.createElement("span"); s.innerHTML = '<svg width="2" height="2"><rect width="2" height="2"/></svg>'; return s.firstChild && s.firstChild.namespaceURI === "http://www.w3.org/2000/svg"; })],
      ["Toque", t(function () { return "ontouchstart" in window; })], ["Rede (fetch ou XHR)", t(function () { return window.fetch || window.XMLHttpRequest; })],
      ["Flexbox", t(function () { return "flex" in st || "webkitFlex" in st; })], ["CSS Grid", t(function () { return "grid" in st; })], ["Conta configurada", remote]];
    el.appendChild(h("table", { "class": "dg" }, rows.map(function (r) { return h("tr", {}, h("td", {}, r[0]), h("td", {}, r[1] === true ? "Sim" : r[1] === false ? "Não" : String(r[1]))); })));
    modal(h("h2", {}, "Diagnóstico"), el, h("p", { "class": "muted" }, "O Unkindle funciona mesmo com Flexbox e Grid em “Não”: ele foi feito sem depender deles."));
  }
};
(function () {
  var slugOf = {}; for (var k in PAGES) slugOf[PAGES[k]] = k;
  ["settings", "auth", "help", "privacy", "changelog", "diag"].forEach(function (n) {
    pages[n] = function (arg) { go(slugOf[n] + (typeof arg === "string" && arg ? "/" + arg : "")); };
  });
})();
