"use strict";
/* Apps de web, mídia e ferramentas (parte B). */

add("maps", "UnMaps", "map", "Mundo", b => {
  const q = inp("Cidade ou endereço"), box = h("div", { style: "margin-top:8px" }), msg = h("p", { class: "muted" });
  const show = (lat, lon) => { box.replaceChildren(h("iframe", { title: "Mapa", style: "width:100%;height:420px;border:2px solid var(--line)", src: `https://www.openstreetmap.org/export/embed.html?bbox=${lon - .02},${lat - .012},${lon + .02},${lat + .012}&layer=mapnik&marker=${lat},${lon}` })); };
  const go = async () => { if (!q.value.trim()) return; msg.textContent = "Buscando…";
    try { const j = await api("https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + encodeURIComponent(q.value)); if (!j.length) throw 0; msg.textContent = j[0].display_name; show(+j[0].lat, +j[0].lon); } catch { msg.textContent = "Local não encontrado."; } };
  q.addEventListener("keydown", e => e.key === "Enter" && go()); b.append(h("div", { class: "row" }, q, btn("Buscar", go, "solid")), msg, box);
});


add("bluesky", "Bluesky", "bsky", "Notícias", b => {
  const q = inp("Usuário, ex.: bsky.app"), out = h("div");
  const go = async () => { const a = q.value.trim().replace(/^@/, ""); if (!a) return; out.textContent = "Carregando…";
    try { const j = await api("https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?limit=20&actor=" + encodeURIComponent(a));
      out.replaceChildren(h("ul", { class: "list" }, ...j.feed.map(f => h("li", { style: "display:block" }, h("p", { style: "margin:4px 0" }, f.post.record.text || "(sem texto)"))))); } catch { out.textContent = "Perfil não encontrado."; } };
  q.addEventListener("keydown", e => e.key === "Enter" && go()); b.append(h("p", { class: "muted" }, "Leitura dos posts públicos de um perfil."), h("div", { class: "row" }, q, btn("Ver", go, "solid")), out);
});






add("pixel", "Pixel", "grid", "Ferramentas", b => {
  const N = 24, S2 = 14, c = cv(N * S2, N * S2), g = c.getContext("2d"), cells = Array(N * N).fill(0); let on = 1, down = false;
  const draw = () => { g.fillStyle = "#fff"; g.fillRect(0, 0, c.width, c.height); g.fillStyle = "#000"; cells.forEach((v, i) => v && g.fillRect((i % N) * S2, Math.floor(i / N) * S2, S2, S2)); g.strokeStyle = "#ccc"; for (let i = 0; i <= N; i++) { g.beginPath(); g.moveTo(i * S2, 0); g.lineTo(i * S2, N * S2); g.moveTo(0, i * S2); g.lineTo(N * S2, i * S2); g.stroke(); } };
  const paint = e => { const [x, y] = ptr(c, e), k = Math.floor(y / S2) * N + Math.floor(x / S2); if (k >= 0 && k < N * N) { cells[k] = on; draw(); } };
  onPointer(c, e => { down = true; paint(e); }, e => { if (down) paint(e); }, () => { down = false; });
  b.append(c, h("div", { class: "row" }, btn("Pintar", () => on = 1, "solid"), btn("Apagar", () => on = 0), btn("Limpar", () => { cells.fill(0); draw(); }), galleryBtn(c, "pixel", () => { const o = cv(N * S2, N * S2), og = o.getContext("2d"); og.fillStyle = "#fff"; og.fillRect(0, 0, o.width, o.height); og.fillStyle = "#000"; cells.forEach((v, i) => v && og.fillRect((i % N) * S2, Math.floor(i / N) * S2, S2, S2)); return o; }))); draw();
});

add("quick", "ToDo Rápido", "todo", "Essenciais", b => listApp(b, "quick", [{ k: "t", ph: "Anote rápido" }], { done: true, head: i => `${i.filter(x => !x.d).length} pendentes` }));





add("sketch", "Bloco de Desenho", "pen", "Ferramentas", b => {
  const c = cv(600, 400), st = { size: 4, color: "#000" }; drawing(c, st); const g = c.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, 600, 400);
  const sz = h("input", { type: "range", min: 1, max: 30, value: 4, style: "max-width:160px", oninput: e => st.size = +e.target.value });
  b.append(c, h("div", { class: "row" }, btn("Lápis", () => st.color = "#000", "solid"), btn("Borracha", () => st.color = "#fff"), sz, btn("Limpar", () => { g.fillStyle = "#fff"; g.fillRect(0, 0, 600, 400); }), galleryBtn(c, "desenho")));
});

add("stocks", "Ações", "chart", "Finanças", b => {
  const q = inp("Código B3, ex.: PETR4", "text", { value: "PETR4" }), out = h("div");
  const go = async () => { const t = q.value.trim().toUpperCase(); if (!t) return; out.textContent = "Consultando…";
    try { const j = await api("https://brapi.dev/api/quote/" + encodeURIComponent(t)); const r = j.results[0];
      out.replaceChildren(h("h3", {}, `${r.symbol} — ${r.shortName || ""}`), h("p", { class: "big" }, "R$ " + r.regularMarketPrice), h("p", {}, `Variação no dia: ${(+r.regularMarketChangePercent).toFixed(2)}%`)); }
    catch { out.textContent = "Não foi possível consultar (alguns códigos exigem chave no serviço gratuito)."; } };
  q.addEventListener("keydown", e => e.key === "Enter" && go()); b.append(h("div", { class: "row" }, q, btn("Consultar", go, "solid")), out, h("p", { class: "muted" }, "Apenas informação. Não é recomendação de investimento."));
});

add("ideas", "Sugestões", "bulb", "Ferramentas", b => {
  const ta = h("textarea", { placeholder: "Conte sua ideia ou problema" }), list = h("ul", { class: "list" }); const items = X("feedback", []);
  const draw = () => list.replaceChildren(...items.map(i => h("li", {}, h("span", {}, i.date + " — " + i.t))));
  b.append(ta, h("div", { class: "row" }, btn("Enviar", async () => { const t = ta.value.trim(); if (!t) return; items.unshift({ t, date: today() }); ta.value = ""; save(); draw();
    sbFeedback(t)["catch"](() => {}); toast("Obrigado!"); }, "solid")), list); draw();
});

add("teleprompter", "Teleprompter", "text", "Ferramentas", b => {
  const ta = h("textarea", { placeholder: "Cole o roteiro", style: "min-height:110px" }), sp = h("input", { type: "range", min: 1, max: 10, value: 3 }), box = h("div", { style: "height:300px;overflow:hidden;border:2px solid var(--line);margin-top:8px;font-size:32px;line-height:1.5;padding:10px;white-space:pre-wrap" }); let iv = null;
  const stop = () => { clearInterval(iv); iv = null; };
  b.append(ta, h("div", { class: "row" }, "Velocidade", sp, btn("Iniciar", () => { stop(); box.textContent = ta.value; box.scrollTop = 0; iv = setInterval(() => box.scrollTop += +sp.value, 50); }, "solid"), btn("Parar", stop)), box); onClose(b, stop);
});

add("timer", "Temporizador", "pomo", "Ferramentas", b => {
  const m = inp("Minutos", "number", { value: 5 }), out = h("div", { class: "big", style: "margin:12px 0" }, "00:00"); let iv = null, left = 0, sw = false;
  const fmt = s => String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); const stop = () => { clearInterval(iv); iv = null; };
  const run = f => { stop(); iv = setInterval(f, 1000); };
  b.append(h("div", { class: "row" }, m, btn("Contagem regressiva", () => { left = Math.round(+m.value * 60); sw = false; out.textContent = fmt(left); run(() => { left--; out.textContent = fmt(Math.max(left, 0)); if (left <= 0) { stop(); toast("Tempo esgotado!"); } }); }, "solid")),
    h("div", { class: "row" }, btn("Cronômetro", () => { left = 0; out.textContent = "00:00"; run(() => { left++; out.textContent = fmt(left); }); }), btn("Parar", stop), btn("Zerar", () => { stop(); left = 0; out.textContent = "00:00"; })), out); onClose(b, stop);
});

add("translate", "Tradutor", "chat", "Mundo", b => {
  const L = { pt: "Português", en: "Inglês", es: "Espanhol", fr: "Francês", de: "Alemão", it: "Italiano" }, opt = v => h("select", {}, ...Object.entries(L).map(([k, n]) => h("option", { value: k, ...(k === v ? { selected: "" } : {}) }, n)));
  const a = opt("pt"), z = opt("en"), ta = h("textarea", { placeholder: "Texto", style: "min-height:110px" }), out = h("p", { class: "card" });
  b.append(h("div", { class: "row" }, a, z), ta, h("div", { class: "row" }, btn("Traduzir", async () => { if (!ta.value.trim()) return; out.textContent = "Traduzindo…";
    try { const j = await api(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(ta.value.slice(0, 480))}&langpair=${a.value}|${z.value}`); out.textContent = j.responseData.translatedText; } catch { out.textContent = "Falha na tradução."; } }, "solid")), out);
});


