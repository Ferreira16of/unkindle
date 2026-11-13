// Assistente de IA do Unkindle (Groq). A chave fica só aqui no servidor (variável GROQ_API_KEY na Vercel).
// Só atende quem está logado no Unkindle (token do Supabase) e tem limite de uso por pessoa.
const SUPABASE_URL = process.env.SUPABASE_URL || "https://pyyijzrbknpdfqxmorfe.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || "sb_publishable_mAgtm-ihro2ESDN3NaDo3w_s5dItCZj";
const MODELS = ["openai/gpt-oss-120b", "openai/gpt-oss-20b"];
const LIMIT = 30, WINDOW = 10 * 60 * 1000; // 30 pedidos a cada 10 minutos por pessoa
const hits = new Map();
export const SYSTEM = "Você é o assistente do Unkindle, um app para Kindle e e-readers. Responda sempre em português do Brasil, de forma clara e direta, " +
  "em parágrafos curtos e listas simples (a tela é de tinta eletrônica, sem cores). Evite tabelas e emojis. Se não souber, diga que não sabe.";

async function userOf(token) {
  if (!token) return null;
  const r = await fetch(SUPABASE_URL + "/auth/v1/user", { headers: { apikey: SUPABASE_KEY, Authorization: "Bearer " + token }, signal: AbortSignal.timeout(8000) });
  if (!r.ok) return null;
  const u = await r.json();
  return u && u.id ? u : null;
}
function limited(id) {
  const now = Date.now(), arr = (hits.get(id) || []).filter(t => now - t < WINDOW);
  if (arr.length >= LIMIT) { hits.set(id, arr); return true; }
  arr.push(now); hits.set(id, arr); return false;
}
function clean(msgs) {
  if (!Array.isArray(msgs)) return null;
  const out = msgs.filter(m => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .slice(-20).map(m => ({ role: m.role, content: m.content.slice(0, 8000) }));
  let total = 0; for (let i = out.length - 1; i >= 0; i--) { total += out[i].content.length; if (total > 16000) return out.slice(i + 1); }
  return out.length && out[out.length - 1].role === "user" ? out : null;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });
  const key = process.env.GROQ_API_KEY;
  if (!key) return res.status(503).json({ error: "A IA ainda não foi configurada no servidor (falta GROQ_API_KEY)." });
  const token = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  let user = null;
  try { user = await userOf(token); } catch (e) { user = null; }
  if (!user) return res.status(401).json({ error: "Entre na sua conta do Unkindle para usar a IA." });
  if (limited(user.id)) return res.status(429).json({ error: "Muitas perguntas seguidas. Espere alguns minutos e tente de novo." });
  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = null; } }
  const msgs = clean(body && body.messages);
  if (!msgs) return res.status(400).json({ error: "Mensagem vazia." });
  for (const model of MODELS) {
    try {
      const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST", signal: AbortSignal.timeout(40000),
        headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
        body: JSON.stringify({ model, messages: [{ role: "system", content: SYSTEM }].concat(msgs), max_completion_tokens: 900, temperature: 0.6, reasoning_effort: "low", include_reasoning: false })
      });
      if (r.status === 429 || r.status >= 500) continue;
      const j = await r.json();
      if (!r.ok) return res.status(502).json({ error: "A IA recusou o pedido.", detail: j && j.error && j.error.message });
      const text = j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content || "";
      return res.status(200).json({ text: text.trim(), model });
    } catch (e) { /* tenta o próximo modelo */ }
  }
  return res.status(503).json({ error: "A IA está ocupada agora. Tente de novo em instantes." });
}
