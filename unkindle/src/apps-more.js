"use strict";
/* Navegador, UnLights, Jogo da Memória, Paciência, Músicas (letras), Poesia e Piadas. */

/* ---------- Navegador: abre qualquer site aqui dentro, em modo leitura ---------- */
const KEEP = { H1: "h3", H2: "h3", H3: "h3", H4: "h4", P: "p", LI: "li", UL: "ul", OL: "ol", BLOCKQUOTE: "blockquote", PRE: "pre", TABLE: "table", TR: "tr", TD: "td", TH: "td", TBODY: "tbody", THEAD: "tbody", FIGCAPTION: "small", DT: "b", DD: "p" };
const SKIP = /^(SCRIPT|STYLE|NOSCRIPT|IFRAME|SVG|BUTTON|INPUT|SELECT|TEXTAREA|NAV|FOOTER|ASIDE|TEMPLATE|CANVAS|VIDEO|AUDIO|OBJECT|EMBED|DIALOG)$/;
function absUrl(u, base) { try { return new URL(u, base).href; } catch (e) { return ""; } }
function renderPage(html, url, onLink) {
  const d = new DOMParser().parseFromString(html, "text/html");
  const title = (d.querySelector("title") || {}).textContent || url;
  let root = null;
  for (const sel of ["article", "main", "[role=main]", "#content", "#main", ".content", "body"]) { const el = d.querySelector(sel); if (el && el.textContent.trim().length > 200) { root = el; break; } }
  root = root || d.body; let imgs = 0, nodes = 0;
  const walk = (n, out) => {
    if (nodes > 1500) return;
    if (n.nodeType === 3) { const t = n.textContent.replace(/\s+/g, " "); if (t.trim()) out.appendChild(document.createTextNode(t)); return; }
    if (n.nodeType !== 1 || SKIP.test(n.tagName)) return;
    const st = (n.getAttribute("style") || "") + " " + (n.getAttribute("class") || ""); if (/display:\s*none|hidden|sr-only|visually-hidden|cookie|banner|popup|modal/i.test(st) || n.getAttribute("aria-hidden") === "true") return;
    nodes++;
    if (n.tagName === "IMG") { const src = n.getAttribute("src") || n.getAttribute("data-src") || n.getAttribute("data-lazy-src") || ""; const a = absUrl(src, url); if (a && !/^data:/.test(src) && imgs < 25 && !/pixel|track|spacer|1x1/i.test(a)) { imgs++; out.appendChild(h("img", { src: a, alt: n.getAttribute("alt") || "", class: "bimg" })); } return; }
    if (n.tagName === "FORM") {
      const method = (n.getAttribute("method") || "get").toLowerCase(), fields = Array.prototype.slice.call(n.querySelectorAll("input,textarea"));
      const texts = fields.filter(f => /^(text|search|)$/i.test(f.getAttribute("type") || "") || f.tagName === "TEXTAREA");
      if (method !== "get" || !texts.length) { Array.prototype.forEach.call(n.childNodes, c => walk(c, out)); return; }
      const t = texts[0], box = h("input", { type: "search", placeholder: t.getAttribute("placeholder") || t.getAttribute("aria-label") || t.getAttribute("title") || "Pesquisar neste site" });
      const submit = () => { const v = box.value.trim(); if (!v) return; const act = absUrl(n.getAttribute("action") || url, url).split("#")[0], ps = [];
        fields.forEach(f => { const nm = f.getAttribute("name"); if (!nm) return; const ty = (f.getAttribute("type") || "").toLowerCase(); if (f === t) ps.push(nm + "=" + encodeURIComponent(v)); else if (ty === "hidden") ps.push(nm + "=" + encodeURIComponent(f.getAttribute("value") || "")); });
        onLink(act.split("?")[0] + "?" + ps.join("&")); };
      box.addEventListener("keydown", e => e.key === "Enter" && submit());
      out.appendChild(h("div", { class: "bar bform" }, h("span", {}, box), h("span", {}, btn("Pesquisar", submit, "solid"))));
      nodes++; return;
    }
    if (n.tagName === "HEADER") { Array.prototype.forEach.call(n.querySelectorAll("form"), f => walk(f, out)); return; }
    if (n.tagName === "A") { const href = absUrl(n.getAttribute("href") || "", url); const a = h("a", { href: "#", class: "blink", onclick: e => { e.preventDefault(); if (/^https?:/.test(href)) onLink(href); return false; } }); Array.prototype.forEach.call(n.childNodes, c => walk(c, a)); if (a.textContent.trim() || a.querySelector("img")) { out.appendChild(a); out.appendChild(document.createTextNode(" ")); } return; }
    if (n.tagName === "BR") { out.appendChild(h("br")); return; }
    const tag = KEEP[n.tagName], el = tag ? h(tag) : out;
    Array.prototype.forEach.call(n.childNodes, c => walk(c, el));
    if (tag && (el.textContent.trim() || el.querySelector("img"))) out.appendChild(el);
    else if (!tag && /^(DIV|SECTION|ARTICLE|MAIN)$/.test(n.tagName)) out.appendChild(document.createTextNode(" "));
  };
  const body = h("div", { class: "bpage" }); walk(root, body);
  if (!body.querySelector(".bform")) { const f = Array.prototype.filter.call(d.querySelectorAll("form"), fm => (fm.getAttribute("method") || "get").toLowerCase() === "get" && fm.querySelector("input[type=search],input[type=text],input:not([type])"))[0]; if (f) { const tmp = h("div"); walk(f, tmp); if (tmp.firstChild) body.insertBefore(tmp.firstChild, body.firstChild); } }
  return { title: title.trim(), body };
}
function ddgSearch(q) {
  return fetchPage("https://lite.duckduckgo.com/lite/?q=" + encodeURIComponent(q) + "&kl=br-pt").then(html => {
    const d = new DOMParser().parseFromString(html, "text/html"), out = [];
    Array.prototype.forEach.call(d.querySelectorAll("a.result-link"), a => {
      let u = a.getAttribute("href") || ""; const m = /uddg=([^&]+)/.exec(u); if (m) u = decodeURIComponent(m[1]); else u = absUrl(u, "https://duckduckgo.com/");
      let tr = a.parentNode; while (tr && tr.tagName !== "TR") tr = tr.parentNode; const sn = tr && tr.nextElementSibling ? tr.nextElementSibling.querySelector(".result-snippet") : null;
      if (/^https?:/.test(u) && !/duckduckgo\.com/.test(u) && !/^more info$/i.test(a.textContent.trim()) && !(tr && /sponsored|result-sponsored/.test(tr.className))) out.push({ t: a.textContent.trim(), u, s: sn ? sn.textContent.trim() : "" });
    });
    return out;
  });
}
const ATALHOS = [["Wikipédia", "https://pt.m.wikipedia.org/"], ["G1", "https://g1.globo.com/"], ["Hacker News", "https://news.ycombinator.com/"], ["Projeto Gutenberg", "https://www.gutenberg.org/"], ["Tempo (CPTEC)", "https://www.cptec.inpe.br/"], ["Dicio", "https://www.dicio.com.br/"]];
add("browser", "Navegador", "wiki", "Ferramentas", b => {
  const marks = X("bookmarks", []);
  const addr = inp("Endereço ou pesquisa", "search"), bar = h("div", { class: "bar" }, h("span", {}, addr), h("span", {}, btn("Ir", () => go(addr.value), "solid"))), info = h("div", { class: "binfo" }), body = h("div");
  let cur = null;
  addr.addEventListener("keydown", e => e.key === "Enter" && go(addr.value));
  const isUrl = v => /^https?:\/\//i.test(v) || /^[\w-]+(\.[\w-]+)+(\/\S*)?$/.test(v);
  const go = v => { v = String(v || "").trim(); if (!v) return; open(isUrl(v) ? (/^https?:/i.test(v) ? v : "https://" + v) : null, isUrl(v) ? null : v); };
  const searchOf = u => { const m = /^https?:\/\/(www\.)?(google\.[a-z.]+|bing\.com|duckduckgo\.com)\/(search|html|lite)?\/?\?(.*)$/i.exec(u || ""); if (!m) return null; const q = /(?:^|&)q=([^&]*)/.exec(m[4]); return q ? decodeURIComponent(q[1].replace(/\+/g, " ")) : null; };
  const open = (url, q) => { const sq = searchOf(url); if (sq) { url = null; q = sq; } else if (/^https?:\/\/(www\.)?google\.[a-z.]+\/?$/i.test(url || "")) { url = null; q = ""; } return subView(b, () => q === "" ? searchHome() : show(url, q), () => home()); };
  const searchHome = () => { addr.value = ""; info.replaceChildren(); const qi = inp("Pesquisar na web", "search"); const go2 = () => qi.value.trim() && open(null, qi.value.trim()); qi.addEventListener("keydown", e => e.key === "Enter" && go2()); body.replaceChildren(h("h2", { class: "ah" }, "Pesquisa"), h("div", { class: "bar" }, h("span", {}, qi), h("span", {}, btn("Pesquisar", go2, "solid"))), note("O Google não deixa ser aberto por outros sites; as pesquisas aqui usam o DuckDuckGo.")); };
  const show = (url, q) => {
    cur = url; addr.value = url || q; window.scrollTo(0, 0);
    body.replaceChildren(note(q ? "Pesquisando…" : "Abrindo " + host(url) + "…"));
    if (q) { info.replaceChildren(h("b", {}, "Pesquisa: " + q));
      ddgSearch(q).then(r => body.replaceChildren(r.length ? h("ul", { class: "list" }, ...r.map(x => h("li", { class: "nw", onclick: () => open(x.u) }, h("span", {}, h("b", {}, x.t), h("small", {}, host(x.u) + (x.s ? " · " + x.s : "")))))) : para("Nada encontrado.")), () => body.replaceChildren(para("Não consegui pesquisar agora. Tente de novo.")));
      return; }
    const fav = marks.some(m => m.u === url);
    info.replaceChildren(h("span", { class: "muted" }, host(url)), h("button", { class: "sbtn", onclick: () => { const i = marks.findIndex(m => m.u === url); if (i >= 0) marks.splice(i, 1); else marks.unshift({ t: (body.querySelector("h2") || {}).textContent || host(url), u: url }); save(); show(url); } }, ic("star", 16, fav), fav ? " Salvo" : " Salvar"));
    fetchPage(url).then(html => { const p = renderPage(html, url, u => open(u)); const thin = p.body.textContent.replace(/\s+/g, " ").trim().length < 200; body.replaceChildren(h("h2", { class: "ah" }, p.title), thin ? h("div", { class: "tip" }, "Este site depende de recursos que o modo leitura não executa. Mostrando o que deu para aproveitar.") : null, p.body); },
      () => body.replaceChildren(para("Não foi possível abrir esse site agora."), note("Verifique o endereço ou tente de novo em instantes.")));
  };
  const home = () => {
    cur = null; addr.value = ""; info.replaceChildren();
    body.replaceChildren(h("div", { class: "lbl2" }, "Atalhos"), h("div", { class: "chips" }, ...ATALHOS.map(a => h("button", { onclick: () => open(a[1]) }, a[0]))),
      h("div", { class: "lbl2" }, "Salvos"), marks.length ? h("ul", { class: "list" }, ...marks.map((m, i) => h("li", { class: "nw" }, h("span", { onclick: () => open(m.u) }, h("b", {}, m.t), h("small", {}, host(m.u))), h("button", { "aria-label": "Apagar", onclick: () => { marks.splice(i, 1); save(); home(); } }, ic("x", 16))))) : h("div", { class: "empty2" }, "Abra um site e toque em Salvar para guardar aqui."),
      note("Os sites abrem aqui mesmo, em modo leitura: só texto, imagens e links, leve para e-ink."));
  };
  b.append(bar, info, body);
  if (S.x.browserOpen) { const u0 = S.x.browserOpen; delete S.x.browserOpen; save(); go(u0); } else home();
});

/* ---------- UnLights ---------- */
add("lights", "UnLights", "bulb", "Jogos", b => {
  const N = 5, st = X("unlights", { lvl: 1, best: {} }), tbl = h("table", { class: "ul" }), head = h("div", { class: "ulh" }), msg = h("p", { class: "score" }); let g, start, moves;
  const press = (x, y) => [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => { const a = x + dx, c = y + dy; if (a >= 0 && a < N && c >= 0 && c < N) g[c * N + a] ^= 1; });
  const make = () => { g = Array(N * N).fill(0); const k = Math.min(3 + st.lvl, 15), used = {}; let n = 0; while (n < k) { const i = rnd(N * N); if (used[i]) continue; used[i] = 1; press(i % N, Math.floor(i / N)); n++; } if (g.every(v => !v)) return make(); start = g.slice(); moves = 0; draw(); };
  const draw = () => {
    const on = g.filter(Boolean).length, won = !on;
    head.replaceChildren(h("div", {}, h("small", {}, "NÍVEL"), h("b", {}, String(st.lvl))), h("div", {}, h("small", {}, "JOGADAS"), h("b", {}, String(moves))), h("div", {}, h("small", {}, "ACESAS"), h("b", {}, String(on))), h("div", {}, h("small", {}, "RECORDE"), h("b", {}, st.best[st.lvl] != null ? String(st.best[st.lvl]) : "—")));
    const rows = []; for (let y = 0; y < N; y++) rows.push(h("tr", {}, ...Array.from({ length: N }, (_, x) => h("td", { class: g[y * N + x] ? "on" : "", onclick: () => { if (won) return; press(x, y); moves++; draw(); } }, g[y * N + x] ? ic("bulb", 32, true) : ""))));
    tbl.replaceChildren(h("tbody", {}, ...rows));
    if (won) { if (st.best[st.lvl] == null || moves < st.best[st.lvl]) st.best[st.lvl] = moves; save(); msg.textContent = "Tudo apagado em " + moves + " jogadas!"; }
    else msg.textContent = "Apague todas as luzes. Cada toque inverte a casa e as vizinhas.";
    ctr.replaceChildren(won ? btn("Próximo nível", () => { st.lvl++; save(); make(); }, "solid") : btn("Recomeçar nível", () => { g = start.slice(); moves = 0; draw(); }), st.lvl > 1 ? btn("Nível anterior", () => { st.lvl--; save(); make(); }) : null);
  };
  const ctr = h("div", { class: "row" });
  b.append(head, msg, tbl, ctr); make();
});

/* ---------- Jogo da Memória ---------- */
const MEM_IC = ["star", "heart", "sun", "moon", "cloud", "music", "flame", "bulb", "paw", "dino", "snake", "ball8", "home", "cal", "coin", "bolt", "camera", "map"];
add("memory", "Jogo da Memória", "heart", "Jogos", b => {
  const st = X("memoria", { lv: "m", best: {} }), LV = { f: [4, 3, "Fácil"], m: [4, 4, "Médio"], d: [5, 4, "Difícil"] };
  const top = h("div"), head = h("div", { class: "ulh" }), tbl = h("table", { class: "mem" }), msg = h("p", { class: "score" }); let cards, open, done, moves, lock, t0, timer;
  const deal = () => { const [w, hh] = LV[st.lv], n = w * hh / 2; cards = shuffle(shuffle(MEM_IC).slice(0, n).reduce((a, x) => a.concat([x, x]), [])); open = []; done = {}; moves = 0; lock = false; t0 = 0; clearInterval(timer); timer = null; draw(); };
  const secs = () => t0 ? Math.floor((Date.now() - t0) / 1000) : 0;
  const draw = () => {
    const [w, hh] = LV[st.lv], pairs = Object.keys(done).length / 2, total = cards.length / 2, won = pairs === total;
    top.replaceChildren(segTabs(Object.keys(LV).map(k => [k, LV[k][2]]), st.lv, k => { st.lv = k; save(); deal(); }));
    head.replaceChildren(h("div", {}, h("small", {}, "PARES"), h("b", {}, pairs + "/" + total)), h("div", {}, h("small", {}, "JOGADAS"), h("b", {}, String(moves))), h("div", {}, h("small", {}, "TEMPO"), h("b", {}, secs() + "s")), h("div", {}, h("small", {}, "RECORDE"), h("b", {}, st.best[st.lv] ? st.best[st.lv] + " jog." : "—")));
    const rows = []; for (let y = 0; y < hh; y++) rows.push(h("tr", {}, ...Array.from({ length: w }, (_, x) => { const i = y * w + x, up = done[i] || open.indexOf(i) >= 0;
      return h("td", { class: up ? (done[i] ? "up done" : "up") : "", onclick: () => flip(i) }, up ? ic(cards[i], 32) : h("span", { class: "back" })); })));
    tbl.replaceChildren(h("tbody", {}, ...rows));
    keepPut("memoria", { lv: st.lv, cards, done, moves });
    msg.textContent = won ? "Você achou todos os pares em " + moves + " jogadas e " + secs() + "s!" : "Vire duas cartas por vez e encontre os pares.";
  };
  const flip = i => {
    if (lock || done[i] || open.indexOf(i) >= 0) return;
    if (!t0) { t0 = Date.now(); timer = setInterval(() => { const tb = head.querySelectorAll("b")[2]; if (tb) tb.textContent = secs() + "s"; }, 1000); }
    open.push(i); draw();
    if (open.length === 2) { moves++; const [a, c] = open;
      if (cards[a] === cards[c]) { done[a] = done[c] = 1; open = []; if (Object.keys(done).length === cards.length) { clearInterval(timer); if (!st.best[st.lv] || moves < st.best[st.lv]) { st.best[st.lv] = moves; save(); } } draw(); }
      else { lock = true; setTimeout(() => { open = []; lock = false; draw(); }, 900); } }
  };
  onClose(b, () => clearInterval(timer));
  b.append(top, head, tbl, msg, btn("Embaralhar de novo", deal, "solid")); const svM = keepGet("memoria"); if (svM && svM.cards && svM.lv === st.lv && Object.keys(svM.done).length < svM.cards.length) { cards = svM.cards; done = svM.done; moves = svM.moves; open = []; lock = false; t0 = 0; draw(); } else deal();
});

/* ---------- Paciência (Klondike), desenhada em canvas ---------- */
add("solitaire", "Paciência", "cards", "Jogos", b => {
  const CW = 70, CH = 96, GAP = 8, W2 = 7 * CW + 8 * GAP, c = cv(W2, 560), g = c.getContext("2d"), msg = h("p", { class: "score" });
  const SU = ["♠", "♥", "♦", "♣"], SO = ["♠", "♡", "♢", "♣"], red = s => s === 1 || s === 2, RK = r => ({ 1: "A", 11: "J", 12: "Q", 13: "K" }[r] || String(r));
  let T, stock, waste, F, sel, moves, hist, hits = [];
  const snap = () => JSON.stringify({ T, stock, waste, F, moves });
  const push = () => { hist.push(snap()); if (hist.length > 60) hist.shift(); };
  const deal = () => { const d = shuffle([0, 1, 2, 3].reduce((a, s) => a.concat(Array.from({ length: 13 }, (_, i) => ({ r: i + 1, s, up: false }))), [])); T = []; for (let i = 0; i < 7; i++) { const p = d.splice(0, i + 1); p[i].up = true; T.push(p); } stock = d; waste = []; F = [[], [], [], []]; sel = null; moves = 0; hist = []; draw(); };
  const canT = (cd, p) => !p.length ? cd.r === 13 : p[p.length - 1].up && red(p[p.length - 1].s) !== red(cd.s) && p[p.length - 1].r === cd.r + 1;
  const canF = (cd, f) => cd.r === F[f].length + 1 && (!F[f].length || F[f][0].s === cd.s);
  const selCards = () => !sel ? [] : sel.w ? [waste[waste.length - 1]] : sel.f != null ? [F[sel.f][F[sel.f].length - 1]] : T[sel.p].slice(sel.i);
  const take = () => sel.w ? [waste.pop()] : sel.f != null ? [F[sel.f].pop()] : T[sel.p].splice(sel.i);
  const flip = () => T.forEach(p => { if (p.length && !p[p.length - 1].up) p[p.length - 1].up = true; });
  const autoF = () => { const cs = selCards(); if (cs.length !== 1) return false; for (let f = 0; f < 4; f++) if (canF(cs[0], f)) { push(); F[f].push(take()[0]); moves++; sel = null; flip(); return true; } return false; };
  const card = (x, y, cd, hl) => {
    g.fillStyle = "#000"; g.fillRect(x, y, CW, CH); g.fillStyle = hl ? "#000" : "#fff"; g.fillRect(x + 2, y + 2, CW - 4, CH - 4);
    if (!cd.up) { g.fillStyle = "#000"; for (let i = 6; i < CW - 6; i += 6) for (let j = 6; j < CH - 6; j += 6) if ((i + j) % 12 === 0) g.fillRect(x + i, y + j, 3, 3); return; }
    g.fillStyle = hl ? "#fff" : "#000"; g.font = "bold 20px Bookerly, Literata, Georgia, serif"; g.textAlign = "left"; g.fillText(RK(cd.r), x + 6, y + 22); g.font = "20px Bookerly, Literata, Georgia, serif"; g.fillText(red(cd.s) ? SO[cd.s] : SU[cd.s], x + 6, y + 44);
    g.font = "34px Bookerly, Literata, Georgia, serif"; g.textAlign = "center"; g.fillText(red(cd.s) ? SO[cd.s] : SU[cd.s], x + CW / 2 + 8, y + CH - 16);
  };
  const slot = (x, y, label) => { g.strokeStyle = "#000"; g.lineWidth = 2; g.setLineDash ? g.setLineDash([4, 4]) : 0; g.strokeRect(x + 1, y + 1, CW - 2, CH - 2); g.setLineDash ? g.setLineDash([]) : 0; if (label) { g.fillStyle = "#777"; g.font = "28px Bookerly, Literata, Georgia, serif"; g.textAlign = "center"; g.fillText(label, x + CW / 2, y + CH / 2 + 10); } };
  const draw = () => {
    hits = [];
    const tops = T.map(p => p.reduce((y, cd, i) => y + (i ? (p[i - 1].up ? 26 : 12) : 0), 0)), hgt = Math.max(560, 130 + Math.max(...tops) + CH + 10);
    if (c.height !== hgt) c.height = hgt;
    g.fillStyle = "#fff"; g.fillRect(0, 0, W2, c.height);
    const X0 = i => GAP + i * (CW + GAP);
    if (stock.length) card(X0(0), 10, { up: false }); else slot(X0(0), 10, "↻"); hits.push({ x: X0(0), y: 10, w: CW, h: CH, t: "stock" });
    if (waste.length) card(X0(1), 10, waste[waste.length - 1], sel && sel.w); else slot(X0(1), 10); hits.push({ x: X0(1), y: 10, w: CW, h: CH, t: "waste" });
    for (let f = 0; f < 4; f++) { const x = X0(3 + f); if (F[f].length) card(x, 10, F[f][F[f].length - 1], sel && sel.f === f); else slot(x, 10, "A"); hits.push({ x, y: 10, w: CW, h: CH, t: "f", f }); }
    T.forEach((p, pi) => { const x = X0(pi); let y = 125; if (!p.length) slot(x, y, "K"); hits.push({ x, y: 125, w: CW, h: 2000, t: "col", p: pi, i: p.length });
      p.forEach((cd, i) => { card(x, y, cd, sel && sel.p === pi && i >= sel.i); hits.push({ x, y, w: CW, h: i === p.length - 1 ? CH : (cd.up ? 26 : 12), t: "card", p: pi, i }); y += cd.up ? 26 : 12; }); });
    const won = F.every(f => f.length === 13);
    if (won) keepDel("paciencia"); else keepPut("paciencia", { T, stock, waste, F, moves });
    msg.textContent = won ? "Você venceu em " + moves + " jogadas!" : "Jogadas: " + moves + "  ·  " + (sel ? "Agora toque no destino (toque de novo para mandar à fundação)." : "Toque numa carta para escolher.");
  };
  const tap = (px, py) => {
    let hit = null; for (let k = hits.length - 1; k >= 0; k--) { const o = hits[k]; if (px >= o.x && px < o.x + o.w && py >= o.y && py < o.y + o.h) { hit = o; break; } }
    if (!hit) { sel = null; return draw(); }
    if (hit.t === "stock") { push(); if (stock.length) { const cd = stock.pop(); cd.up = true; waste.push(cd); } else { stock = waste.reverse().map(cd => Object.assign({}, cd, { up: false })); waste = []; } sel = null; moves++; return draw(); }
    if (sel) {
      const same = (hit.t === "waste" && sel.w) || (hit.t === "card" && sel.p === hit.p && sel.i === hit.i) || (hit.t === "f" && sel.f === hit.f);
      if (same) { if (!autoF()) sel = null; return draw(); }
      const cs = selCards();
      if (hit.t === "f") { if (cs.length === 1 && canF(cs[0], hit.f)) { push(); F[hit.f].push(take()[0]); moves++; flip(); } sel = null; return draw(); }
      if (hit.t === "card" || hit.t === "col") { const p = T[hit.p]; if (canT(cs[0], p) && !(sel.p === hit.p)) { push(); T[hit.p] = p.concat(take()); moves++; flip(); sel = null; return draw(); } }
      sel = null;
    }
    if (hit.t === "waste" && waste.length) sel = { w: true };
    else if (hit.t === "f" && F[hit.f].length) sel = { f: hit.f };
    else if (hit.t === "card" && T[hit.p][hit.i].up) sel = { p: hit.p, i: hit.i };
    draw();
  };
  onPointer(c, e => { const p = ptr(c, e); tap(p[0], p[1]); });
  b.append(msg, c, h("div", { class: "row" },
    btn("Desfazer", () => { if (!hist.length) return; const o = JSON.parse(hist.pop()); T = o.T; stock = o.stock; waste = o.waste; F = o.F; moves = o.moves; sel = null; draw(); }),
    btn("Auto fundações", () => { let m = true; push(); while (m) { m = false; const cands = [{ w: true }].concat(T.map((p, pi) => ({ p: pi, i: p.length - 1 }))); for (const cd of cands) { sel = cd; const cs = cd.w ? (waste.length ? [waste[waste.length - 1]] : []) : (T[cd.p].length ? [T[cd.p][cd.i]] : []); if (cs.length && cs[0].up !== false) for (let f = 0; f < 4; f++) if (canF(cs[0], f)) { F[f].push(take()[0]); moves++; flip(); m = true; break; } } } sel = null; draw(); }),
    btn("Novo jogo", deal, "solid")));
  const svP = keepGet("paciencia"); if (svP && svP.T) { T = svP.T; stock = svP.stock; waste = svP.waste; F = svP.F; moves = svP.moves; sel = null; hist = []; draw(); } else deal();
});

/* ---------- Músicas: busca e letra ---------- */
add("c_musicas", "Músicas", "music", "Cultura", b => {
  const st = X("musicas", { q: "" }), q = inp("Música ou artista (ex.: Garota de Ipanema)", "search", { value: st.q }), top = h("div"), body = h("div");
  const list = () => {
    const v = q.value.trim(); st.q = v; save(); if (!v) { body.replaceChildren(note("Busque uma música para ver a letra.")); return; }
    body.replaceChildren(note("Buscando…"));
    api("https://lrclib.net/api/search?q=" + encodeURIComponent(v)).then(r => {
      const seen = {}, items = r.filter(x => x.plainLyrics && !x.instrumental).filter(x => { const k = (x.trackName + "|" + x.artistName).toLowerCase(); if (seen[k]) return false; seen[k] = 1; return true; }).slice(0, 25);
      body.replaceChildren(items.length ? h("ul", { class: "list" }, ...items.map(x => h("li", { class: "nw", onclick: () => lyr(x) }, h("span", {}, h("b", {}, x.trackName), h("small", {}, x.artistName + (x.albumName ? " · " + x.albumName : "")))))) : para("Nenhuma letra encontrada. Tente o nome da música e do artista."));
    }, () => body.replaceChildren(para(NOCONN)));
  };
  const lyr = x => subView(b, () => {
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Músicas"));
    body.replaceChildren(h("h2", { class: "ah" }, x.trackName), h("p", { class: "muted" }, x.artistName + (x.albumName ? " · " + x.albumName : "")), h("pre", { class: "lyr" }, x.plainLyrics), note("Letra: LRCLIB."));
    window.scrollTo(0, 0);
  }, () => { top.replaceChildren(h("div", { class: "row" }, q, btn("Buscar", list, "solid"))); list(); });
  q.addEventListener("keydown", e => e.key === "Enter" && list());
  top.replaceChildren(h("div", { class: "row" }, q, btn("Buscar", list, "solid")));
  b.append(top, body); list();
});

/* ---------- Poesia: poemas em português (domínio público, via Wikisource) ---------- */
const POETAS = ["Olavo Bilac", "Gonçalves Dias", "Castro Alves", "Cruz e Sousa", "Álvares de Azevedo", "Casimiro de Abreu", "Augusto dos Anjos", "Fernando Pessoa", "Florbela Espanca", "Luís de Camões", "Bocage", "Antero de Quental", "Raimundo Correia", "Machado de Assis", "Alphonsus de Guimaraens", "Fagundes Varela"];
const WS = "https://pt.wikisource.org/w/api.php?format=json&origin=*&";
function poemsBy(a) { return api(WS + "action=query&list=search&srlimit=50&srnamespace=0&srsearch=" + encodeURIComponent('insource:"<poem>" "' + a + '"')).then(j => { const all = (j.query.search || []).map(x => x.title).filter(t => !/\/|Índice|Galeria|Autor:/.test(t)), own = all.filter(t => t.indexOf("(" + a + ")") >= 0); return own.length ? own : all; }); }
function poemText(title) {
  return api(WS + "action=parse&prop=text&redirects=1&page=" + encodeURIComponent(title)).then(j => {
    const d = new DOMParser().parseFromString(j.parse.text["*"], "text/html"), ps = d.querySelectorAll(".poem");
    if (!ps.length) throw new Error("sem poema");
    return Array.prototype.map.call(ps, p => p.textContent.replace(/ /g, " ").replace(/^\n+|\n+$/g, "")).join("\n\n").replace(/\n{3,}/g, "\n\n").slice(0, 6000);
  });
}
add("c_poesia", "Poesia", "pen", "Cultura", b => {
  const st = X("poesia", { a: "" }), top = h("div"), out = h("div");
  const show = () => {
    const a = st.a || pick(POETAS); out.replaceChildren(note("Escolhendo um poema de " + a + "…"));
    poemsBy(a).then(ts => { if (!ts.length) throw 0; const tryOne = n => { const t = pick(ts); return poemText(t).then(tx => ({ t, tx }), e => n > 0 ? tryOne(n - 1) : Promise.reject(e)); }; return tryOne(4); })
      .then(r => out.replaceChildren(h("div", { class: "poem" }, h("h2", { class: "ah" }, r.t.replace(/\s*\([^)]*\)\s*$/, "")), h("p", { class: "muted" }, a), h("pre", { class: "lyr" }, r.tx)), note("Domínio público · Wikisource")), () => out.replaceChildren(para("Não consegui carregar um poema agora. Tente de novo.")));
  };
  const draw = () => top.replaceChildren(segTabs([["", "Qualquer poeta"]].concat(POETAS.map(p => [p, p])), st.a, k => { st.a = k; save(); draw(); show(); }));
  b.append(top, out, btn("Outro poema", show, "solid wide")); draw(); show();
});

/* ---------- Piadas em português ---------- */
const PIADAS = [
  "Por que o livro de matemática ficou triste? Porque tinha muitos problemas.",
  "O que o zero disse para o oito? Que cinto bonito!",
  "Qual é o café mais perigoso do mundo? O ex-presso.",
  "Por que a planta não responde? Porque ela é muda.",
  "O que é um pontinho amarelo no céu? Um yellowcóptero.",
  "Qual é o animal mais antigo? A zebra, porque é em preto e branco.",
  "Por que o jacaré tirou o filho da escola? Porque ele réptil de ano.",
  "O que o tomate foi fazer no banco? Tirar extrato.",
  "Qual é o rei dos queijos? O reiqueijão.",
  "O que a vaca foi fazer no espaço? Visitar a via láctea.",
  "Por que o espantalho ganhou um prêmio? Porque era excelente no seu campo.",
  "O que o pato disse para a pata? Vem quá!",
  "Qual é a cidade brasileira que não tem táxi? Uberlândia.",
  "Por que a galinha atravessou a rua? Para chegar ao outro lado, ué.",
  "O que é que a impressora disse para a folha? Essa impressão é sua.",
  "Qual o doce preferido do átomo? Pé de moléculas.",
  "Por que o computador foi ao médico? Porque estava com vírus.",
  "O que o celular disse para o carregador? Você me completa.",
  "Qual é o peixe que caiu do décimo andar? Aaaaaaatum!",
  "Como o elétron atende o telefone? Próton!",
  "O que o mar disse para a praia? Nada, só deu uma onda.",
  "Por que a vassoura chegou atrasada? Porque varreu da memória.",
  "Qual é o contrário de volátil? Vem cá, sobrinho.",
  "O que um cromossomo disse para o outro? Cromossomos bonitos!",
  "Por que a aranha é o animal mais carente? Porque é um aracnídeo.",
  "Qual é o lugar mais frio da casa? O cantinho, porque fica a 90 graus.",
  "O que o advogado do frango foi fazer na delegacia? Soltar a franga.",
  "Por que o pinheiro não se perde na floresta? Porque ele tem uma pinha.",
  "Qual é a fruta que anda de trem? O kiwiiii.",
  "O que é um vegetariano que come carne? Um ex-vegetariano.",
  "Por que o fantasma não mente? Porque dá para ver através dele.",
  "O que o pão francês disse para o pão de forma? Fica fatiado aí.",
  "Qual é o animal que não vale mais nada? O javali.",
  "Como se chama o boi que entende de tecnologia? Boi-telecom.",
  "O que a xícara disse para o pires? Você é meu suporte.",
  "Por que o músico foi preso? Porque estava sempre de dó.",
  "Qual é o cúmulo da paciência? Esperar o sinal abrir num semáforo desenhado.",
  "O que o relógio de parede disse para o de pulso? Sai do meu pé!",
  "Por que a geladeira foi ao psicólogo? Estava muito fria com as pessoas.",
  "Qual o nome do peixe que tem conta no banco? O pix-e."
];
add("x_piada", "Piadas", "chat", "Diversão", b => {
  const st = X("piadas", { seen: [] }), out = h("div", { class: "fact" });
  const next = () => { let pool = PIADAS.map((_, i) => i).filter(i => st.seen.indexOf(i) < 0); if (!pool.length) { st.seen = []; pool = PIADAS.map((_, i) => i); } const i = pick(pool); st.seen.push(i); save();
    const t = PIADAS[i], k = t.indexOf("?"), q = k > 0 ? t.slice(0, k + 1) : t, a = k > 0 ? t.slice(k + 1).trim() : "", ans = h("p", { class: "ftx", style: "display:none" }, h("b", {}, a));
    out.replaceChildren(h("p", { class: "ftx" }, q), ans, a ? btn("Ver resposta", e => { show(ans, true); e.target.style.display = "none"; }) : null); };
  b.append(out, btn("Outra piada", next, "solid wide")); next();
});
