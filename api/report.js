// Relatórios técnicos do aparelho (erros, apps que falharam, diagnóstico).
// Em produção vão para os logs da Vercel (Projeto → Logs). Nada do que a pessoa digita é enviado.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  let raw = "";
  try {
    raw = typeof req.body === "string" ? req.body : JSON.stringify(req.body || {});
  } catch { raw = ""; }
  console.log("RELATORIO", raw.slice(0, 4000));
  return res.status(204).end();
}
