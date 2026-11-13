// Leitor de páginas do Unkindle (Navegador, Notícias, Reddit, Biblioteca).
// Busca uma página pública e devolve o conteúdo para o app montar o "modo leitura".
// Proteções: só http/https, bloqueia endereços internos (anti-SSRF), limite de 3 MB e 12 s,
// e cache de 3 minutos na CDN da Vercel (menos pedidos aos sites de origem).
import { lookup } from "node:dns/promises";
import net from "node:net";

const MAX = 3 * 1024 * 1024;
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

function privateIp(ip) {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split(".").map(Number);
    return a === 10 || a === 127 || a === 0 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127) || a >= 224;
  }
  const x = ip.toLowerCase();
  return x === "::1" || x === "::" || x.startsWith("fc") || x.startsWith("fd") || x.startsWith("fe80") || x.startsWith("::ffff:127.") || x.startsWith("::ffff:10.") || x.startsWith("::ffff:192.168.");
}

async function safeUrl(raw) {
  let u;
  try { u = new URL(raw); } catch { throw new Error("endereço inválido"); }
  if (!/^https?:$/.test(u.protocol) || !u.hostname) throw new Error("endereço inválido");
  const addrs = await lookup(u.hostname, { all: true });
  if (!addrs.length || addrs.some(a => privateIp(a.address))) throw new Error("endereço interno bloqueado");
  return u;
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).send("Método não permitido");
  const raw = String(req.query.url || "");
  try {
    let url = await safeUrl(raw);
    let r, hops = 0;
    // segue redirecionamentos manualmente, validando cada destino
    for (;;) {
      r = await fetch(url, { redirect: "manual", signal: AbortSignal.timeout(12000), headers: { "User-Agent": UA, "Accept": "text/html,application/xhtml+xml,application/xml,application/atom+xml,text/plain,*/*", "Accept-Language": "pt-BR,pt;q=0.9" } });
      if (r.status >= 300 && r.status < 400 && r.headers.get("location") && hops++ < 5) { url = await safeUrl(new URL(r.headers.get("location"), url).href); continue; }
      break;
    }
    const reader = r.body.getReader(), chunks = [];
    let size = 0;
    for (;;) { const { done, value } = await reader.read(); if (done) break; size += value.length; if (size > MAX) { reader.cancel(); break; } chunks.push(value); }
    const body = Buffer.concat(chunks.map(c => Buffer.from(c)));
    res.setHeader("Content-Type", r.headers.get("content-type") || "text/html; charset=utf-8");
    res.setHeader("Cache-Control", r.ok ? "public, s-maxage=180, stale-while-revalidate=600" : "no-store");
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(r.ok ? 200 : 502).send(body);
  } catch (e) {
    res.setHeader("Cache-Control", "no-store");
    return res.status(502).send(String(e && e.message || e).slice(0, 100));
  }
}
