// Ponte entre o app do Unkindle e o servidor do WhatsApp na Render (ZAP_URL).
// O Kindle fala só com o próprio site; quem confere login e permissão é o servidor da Render.
const OPS = new Set(["status", "link", "logout", "chats", "messages", "read", "send"]);

export const config = { maxDuration: 60 };

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const base = String(process.env.ZAP_URL || "").replace(/\/+$/, "");
  if (!base) return res.status(503).json({ error: "O WhatsApp ainda não foi configurado (falta ZAP_URL na Vercel)." });
  const op = String(req.query.op || "");
  if (!OPS.has(op)) return res.status(404).json({ error: "Rota não encontrada." });
  if (req.method !== "GET" && req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });
  const qs = req.query.jid ? "?jid=" + encodeURIComponent(String(req.query.jid)) : "";
  let body;
  if (req.method === "POST") body = typeof req.body === "string" ? req.body : JSON.stringify(req.body || {});
  try {
    // a Render grátis pode estar acordando: espera até ~55 s
    const r = await fetch(base + "/" + op + qs, {
      method: req.method, body, signal: AbortSignal.timeout(55000),
      headers: { "Content-Type": "application/json", Authorization: String(req.headers.authorization || ""), "X-Zap-Key": process.env.ZAP_PROXY_KEY || "" }
    });
    const text = await r.text();
    res.status(r.status).setHeader("Content-Type", "application/json; charset=utf-8");
    return res.send(text.charAt(0) === "{" ? text : JSON.stringify({ error: "O servidor do WhatsApp está iniciando. Tente de novo em alguns segundos." }));
  } catch (e) {
    return res.status(504).json({ error: "O servidor do WhatsApp demorou para responder (pode estar acordando). Tente de novo." });
  }
}
