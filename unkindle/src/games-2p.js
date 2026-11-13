"use strict";
/* Jogos para dois (no mesmo aparelho, revezando) e contra o computador. */





add("battleship", "Battleship", "flag", "Jogos para dois", b => {
  const N = 7, SH = [3, 2, 2]; let mine, theirs, shotsMe, shotsCpu, queue, over; const A = h("div"), Bd = h("div"), msg = h("p");
  const place = () => { const g = Array(N * N).fill(0); SH.forEach(len => { for (;;) { const hz = rnd(2), x = rnd(N - (hz ? len - 1 : 0)), y = rnd(N - (hz ? 0 : len - 1)), cs = [...Array(len).keys()].map(k => (y + (hz ? 0 : k)) * N + x + (hz ? k : 0)); if (cs.every(c => !g[c])) { cs.forEach(c => g[c] = 1); break; } } }); return g; };
  const cell = (g, shots, i, show, click) => { const s = shots[i], isShip = g[i]; return h("button", { style: `min-height:0;aspect-ratio:1;padding:0;font-weight:700;${s && isShip ? "background:var(--fg);color:var(--bg)" : ""}${!s && show && isShip ? "border-style:dashed;background:#ddd" : ""}`, "aria-label": "Casa", onclick: click }, s ? (isShip ? "X" : "·") : ""); };
  const draw = () => { const wrap = (t, g) => h("div", { style: "flex:1;min-width:230px" }, h("h3", {}, t), g);
    A.replaceChildren(wrap("Seu mar", h("div", { style: `display:grid;grid-template-columns:repeat(${N},1fr);gap:2px;max-width:260px` }, ...mine.map((_, i) => cell(mine, shotsCpu, i, true, () => { })))));
    Bd.replaceChildren(wrap("Mar inimigo (toque para atirar)", h("div", { style: `display:grid;grid-template-columns:repeat(${N},1fr);gap:2px;max-width:260px` }, ...theirs.map((_, i) => cell(theirs, shotsMe, i, false, () => fire(i)))))); };
  const done = (g, s) => g.every((v, i) => !v || s[i]);
  const fire = i => { if (over || shotsMe[i]) return; shotsMe[i] = 1; if (done(theirs, shotsMe)) { over = true; msg.textContent = "Você afundou todos os navios!"; return draw(); }
    let t; while (queue.length && shotsCpu[(t = queue.shift())]) t = undefined; if (t === undefined) { do t = rnd(N * N); while (shotsCpu[t]); } shotsCpu[t] = 1; if (mine[t]) { const r = Math.floor(t / N), c = t % N; [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(([a, d]) => a >= 0 && a < N && d >= 0 && d < N && queue.push(a * N + d)); }
    msg.textContent = done(mine, shotsCpu) ? "O computador afundou todos os seus navios." : "Sua vez."; if (done(mine, shotsCpu)) over = true; draw(); };
  const reset = () => { mine = place(); theirs = place(); shotsMe = Array(N * N).fill(0); shotsCpu = Array(N * N).fill(0); queue = []; over = false; msg.textContent = "Sua vez. Há 3 navios escondidos (tamanhos 3, 2 e 2)."; draw(); };
  b.append(msg, h("div", { class: "row", style: "align-items:flex-start" }, A, Bd), btn("Novo jogo", reset)); reset();
});

