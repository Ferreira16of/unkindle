"use strict";
/* IA do Unkindle: o app conversa com o próprio servidor (/__ai), que fala com a Groq. A chave nunca vem para o aparelho. */
function aiAsk(messages) {
  if (!session) return Promise.reject(userErr("Entre na sua conta para usar a IA."));
  return ensureToken().then(() => new Promise((ok, no) => {
    const x = new XMLHttpRequest();
    x.open("POST", "/__ai", true);
    x.setRequestHeader("Content-Type", "application/json");
    x.setRequestHeader("Authorization", "Bearer " + session.access_token);
    x.timeout = 60000;
    x.onload = () => { let j = null; try { j = JSON.parse(x.responseText); } catch (e) {} if (x.status === 200 && j && j.text) ok(j.text); else no(userErr((j && j.error) || "A IA não respondeu agora. Tente de novo.")); };
    x.onerror = () => no(userErr("Sem conexão com o servidor da IA."));
    x.ontimeout = () => no(userErr("A IA demorou demais. Tente de novo."));
    x.send(JSON.stringify({ messages }));
  }));
}
/* Botão "Resumir com IA" para qualquer texto (Notícias, Wikipédia, Navegador, livros) */
function aiSummaryBtn(getText, what) {
  const out = h("div", { class: "aisum" }), b0 = btn("Resumir com IA", () => {
    if (!session) { toast("Entre na sua conta para usar a IA"); return pages.auth("in"); }
    const t = String(getText() || "").replace(/\s+/g, " ").trim().slice(0, 9000); if (t.length < 80) return toast("Texto curto demais para resumir");
    b0.disabled = true; out.replaceChildren(note("Resumindo…"));
    aiAsk([{ role: "user", content: "Resuma " + (what || "este texto") + " em até 5 tópicos curtos e uma frase final com a ideia principal:\n\n" + t }])
      .then(r => { out.replaceChildren(h("div", { class: "lbl2" }, "Resumo da IA"), h("div", { class: "bpage md" }, ...mdNodes(r, location.href, () => {}))); }, e => out.replaceChildren(para(e.userMsg || NOCONN)))
      .then(() => { b0.disabled = false; });
  }, "sbtn");
  return h("div", { class: "aibox" }, b0, out);
}

const SUGEST = ["Me indique 3 livros parecidos com Dom Casmurro", "Explique o que é inflação como se eu tivesse 10 anos", "Escreva um poema curto sobre a chuva", "Me ajude a montar uma rotina de leitura de 20 minutos por dia", "Traduza para o inglês: bom dia, tudo bem?", "Me conte uma curiosidade sobre o espaço"];
add("ai", "Assistente IA", "spark", "Essenciais", b => {
  const st = X("aichat", { msgs: [] }), body = h("div");
  b.append(body);
  if (!session) return body.append(h("div", { class: "card", style: "text-align:center" }, h("div", { style: "margin:4px 0 10px" }, ic("spark", 40)), h("p", {}, h("b", {}, "Converse com a IA do Unkindle.")), h("p", { class: "muted" }, "Tire dúvidas, peça resumos, traduções, ideias e indicações de leitura. Entre na sua conta para usar."), btn("Entrar ou criar conta", () => pages.auth("in"), "solid wide")));
  const list = h("div", { class: "aichat" }), ta = h("textarea", { placeholder: "Pergunte qualquer coisa…", style: "min-height:90px" }), m = h("p", { class: "muted" }); let busy = false;
  const bubble = x => h("div", { class: "aim " + (x.role === "user" ? "me" : "ai") }, h("div", { class: "aiw" }, x.role === "user" ? "Você" : "IA"), x.role === "user" ? h("div", { class: "rtx" }, x.content) : h("div", { class: "bpage md" }, ...mdNodes(x.content, location.href, u => { S.x.browserOpen = u; save(); openApp("browser"); })));
  const paint = () => {
    list.replaceChildren(...(st.msgs.length ? st.msgs.map(bubble) : [h("div", { class: "aiempty" }, h("p", {}, "Sobre o que você quer conversar?"), h("div", { class: "chips" }, ...SUGEST.map(s => h("button", { onclick: () => { ta.value = s; send(); } }, s))))]));
    if (busy) list.appendChild(h("div", { class: "aim ai" }, h("div", { class: "aiw" }, "IA"), note("Pensando…")));
  };
  const send = () => { const v = ta.value.trim(); if (!v || busy) return;
    st.msgs.push({ role: "user", content: v.slice(0, 4000) }); st.msgs = st.msgs.slice(-40); ta.value = ""; snapDrafts(); busy = true; m.textContent = ""; save(); paint(); window.scrollTo(0, document.body.scrollHeight);
    aiAsk(st.msgs.slice(-12)).then(t => { st.msgs.push({ role: "assistant", content: t }); save(); }, e => { m.textContent = e.userMsg || NOCONN; })
      .then(() => { busy = false; paint(); const last = list.lastChild; if (last && last.scrollIntoView) last.scrollIntoView(); }); };
  ta.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { if (e.preventDefault) e.preventDefault(); send(); } }, false);
  body.append(list, ta, h("div", { class: "row" }, btn("Enviar", send, "solid"), btn("Nova conversa", () => { if (!st.msgs.length || confirm("Apagar esta conversa?")) { st.msgs = []; save(); paint(); } })), m,
    h("p", { class: "muted" }, "A IA pode errar. Não envie dados pessoais. As conversas ficam salvas na sua conta."));
  paint();
});
