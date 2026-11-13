"use strict";
/* Jogos solo, parte A. Todos os jogos são versões originais (mecânicas clássicas, sem personagens ou marcas). */

add("g2048", "2048", "grid", "Jogos", b => {
  let g, sc = 0; const box = h("div", { style: "max-width:360px;touch-action:none" }), info = h("p", { class: "score" });
  const spawn = () => { const e = []; g.forEach((v, i) => !v && e.push(i)); if (e.length) g[pick(e)] = Math.random() < .9 ? 2 : 4; };
  const draw = () => { const rows = []; for (let r = 0; r < 4; r++) rows.push(h("tr", {}, ...g.slice(r * 4, r * 4 + 4).map(v => h("td", { class: v ? "on" + (v >= 128 ? " hi" : "") : "" }, v || "")))); box.replaceChildren(h("table", { class: "t2048" }, h("tbody", {}, ...rows))); info.textContent = "Pontos: " + sc; keepPut("2048", { g: g.slice(), sc }); };
  const line = a => { a = a.filter(Boolean); for (let i = 0; i < a.length - 1; i++) if (a[i] === a[i + 1]) { a[i] *= 2; sc += a[i]; a.splice(i + 1, 1); } while (a.length < 4) a.push(0); return a; };
  const move = k => { if (!/^Arrow/.test(k)) return; const old = g.join(); for (let i = 0; i < 4; i++) { const idx = [0, 1, 2, 3].map(j => k === "ArrowLeft" || k === "ArrowRight" ? i * 4 + j : j * 4 + i); if (k === "ArrowRight" || k === "ArrowDown") idx.reverse(); const r = line(idx.map(x => g[x])); idx.forEach((x, j) => g[x] = r[j]); } if (g.join() !== old) spawn(); draw(); };
  const reset = () => { g = Array(16).fill(0); sc = 0; spawn(); spawn(); draw(); }; let sx, sy;
  onPointer(box, e => { sx = e.clientX; sy = e.clientY; }, null, e => { const dx = e.clientX - sx, dy = e.clientY - sy; if (Math.max(Math.abs(dx), Math.abs(dy)) < 25) return; move(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "ArrowRight" : "ArrowLeft") : (dy > 0 ? "ArrowDown" : "ArrowUp")); });
  keys(b, move); b.append(info, box, dpad(move), btn("Novo jogo", reset)); const sv = keepGet("2048"); if (sv && sv.g) { g = sv.g; sc = sv.sc; draw(); } else reset();
});

add("magic8", "Bola 8 Mágica", "ball8", "Jogos", b => {
  const a = ["Sim.", "Com certeza.", "Provavelmente.", "Tudo indica que sim.", "Pergunte de novo.", "Não dá para prever agora.", "Melhor não contar agora.", "Não conte com isso.", "Minha resposta é não.", "Muito duvidoso."], q = inp("Faça uma pergunta de sim ou não"), out = h("p", { class: "big", style: "text-align:center;padding:24px" }, "?");
  b.append(q, h("div", { class: "row" }, btn("Sacudir", () => out.textContent = pick(a), "solid")), out);
});

add("anagram", "Anagramas", "shuffle", "Jogos", b => {
  const W = ["livro", "janela", "cadeira", "estrada", "montanha", "floresta", "biblioteca", "relogio", "caderno", "bicicleta", "escola", "pintura", "musica", "viagem", "jardim", "cozinha", "tartaruga", "chocolate", "guitarra", "oceano"];
  let w, sc = 0; const out = h("p", { class: "big" }), g = inp("Sua resposta"), msg = h("p", { class: "muted" });
  const next = () => { w = pick(W); let s; do s = shuffle([...w]).join(""); while (s === w); out.textContent = s.toUpperCase(); g.value = ""; };
  const chk = () => { if (g.value.trim().toLowerCase() === w) { sc++; msg.textContent = "Certo! Pontos: " + sc; next(); } else msg.textContent = "Tente de novo."; };
  g.addEventListener("keydown", e => e.key === "Enter" && chk()); b.append(h("p", {}, "Desembaralhe a palavra (sem acentos)."), out, h("div", { class: "row" }, g, btn("Verificar", chk, "solid"), btn("Pular", next)), msg); next();
});



/* Corredores de reflexo: um motor, quatro jogos. */
function runner(b, o) {
  const c = cv(400, 160), g = c.getContext("2d"), info = h("p"); let y, vy, obs, sc, dead, t, spd, best = X("best_" + o.id, 0);
  const reset = () => { y = 0; vy = 0; obs = []; sc = 0; dead = false; t = 0; spd = o.speed; };
  const jump = () => { if (dead) return reset(); if (y === 0) vy = o.jump; };
  onPointer(c, jump); keys(b, k => (k === " " || k === "ArrowUp") && jump()); reset();
  loop(b, () => {
    if (!dead) { t++; sc++; spd += .002; vy -= 1.2; y += vy; if (y < 0) { y = 0; vy = 0; }
      if (t % Math.max(28, o.gap - Math.floor(sc / 150)) === 0 && Math.random() < .85) obs.push({ x: 400, w: o.spike ? 20 : 12 + rnd(14), h: o.spike ? 22 : 16 + rnd(22) });
      obs.forEach(a => a.x -= spd); obs = obs.filter(a => a.x > -40);
      if (obs.some(a => a.x < 64 && a.x + a.w > 40 && y < a.h - 2)) { dead = true; if (sc > best) { best = sc; S.x["best_" + o.id] = sc; save(); } } }
    g.clearRect(0, 0, 400, 160); g.fillStyle = "#000"; g.fillRect(0, 140, 400, 2); g.fillRect(40, 140 - 24 - y, 24, 24); g.fillStyle = "#fff"; g.fillRect(54, 140 - 18 - y, 5, 5); g.fillStyle = "#000";
    obs.forEach(a => { if (o.spike) { g.beginPath(); g.moveTo(a.x, 140); g.lineTo(a.x + a.w / 2, 140 - a.h); g.lineTo(a.x + a.w, 140); g.fill(); } else g.fillRect(a.x, 140 - a.h, a.w, a.h); });
    info.textContent = `Pontos: ${Math.floor(sc / 5)}  ·  Recorde: ${Math.floor(best / 5)}` + (dead ? "  ·  Fim! Toque para reiniciar" : "");
  }, 40);
  b.append(h("p", { class: "muted" }, "Toque na tela para pular."), c, info, btn("Pular", jump, "solid"));
}

function lanes(b, o) {
  const c = cv(240, 360), g = c.getContext("2d"), info = h("p"); let p, obs, sc, dead, t, spd, best = X("best_" + o.id, 0);
  const reset = () => { p = 1; obs = []; sc = 0; dead = false; t = 0; spd = o.speed; };
  const mv = k => { if (dead && (k === "ArrowLeft" || k === "ArrowRight" || k === " ")) return reset(); if (k === "ArrowLeft") p = Math.max(0, p - 1); if (k === "ArrowRight") p = Math.min(2, p + 1); };
  onPointer(c, e => mv(ptr(c, e)[0] < 120 ? "ArrowLeft" : "ArrowRight")); keys(b, mv); reset();
  loop(b, () => {
    if (!dead) { t++; sc++; spd += .003; if (t % Math.max(18, o.gap - Math.floor(sc / 200)) === 0) obs.push({ l: rnd(3), y: -40 }); obs.forEach(a => a.y += spd); obs = obs.filter(a => a.y < 400);
      if (obs.some(a => a.l === p && a.y > 270 && a.y < 340)) { dead = true; if (sc > best) { best = sc; S.x["best_" + o.id] = sc; save(); } } }
    g.clearRect(0, 0, 240, 360); g.fillStyle = "#000"; g.fillRect(79, 0, 2, 360); g.fillRect(159, 0, 2, 360);
    g.fillRect(p * 80 + 20, 300, 40, 40); g.fillStyle = "#fff"; g.fillRect(p * 80 + 30, 310, 20, 8); g.fillStyle = "#000";
    obs.forEach(a => { if (o.wave) { g.fillRect(a.l * 80 + 10, a.y, 60, 12); g.fillRect(a.l * 80 + 22, a.y - 10, 36, 10); } else { g.strokeRect(a.l * 80 + 22, a.y, 36, 40); g.fillRect(a.l * 80 + 22, a.y + 4, 36, 6); } });
    info.textContent = `Pontos: ${Math.floor(sc / 5)}  ·  Recorde: ${Math.floor(best / 5)}` + (dead ? "  ·  Fim! Toque para reiniciar" : "");
  }, 40);
  b.append(h("p", { class: "muted" }, "Toque na metade esquerda ou direita da pista, ou use os botões."), c, info, dpad(mv));
}
add("surf", "Surfista", "wind", "Jogos", b => lanes(b, { id: "surf", speed: 5, gap: 45, wave: true }));


add("connections", "Conexões", "puzzle", "Jogos", b => {
  const P = [[["Frutas", "maçã", "banana", "uva", "pera"], ["Cores", "azul", "verde", "roxo", "cinza"], ["Animais", "gato", "rato", "pato", "cavalo"], ["Países", "Peru", "Chile", "Cuba", "Mali"]],
    [["Planetas", "Marte", "Vênus", "Terra", "Saturno"], ["Meses", "maio", "março", "junho", "agosto"], ["Instrumentos", "flauta", "violão", "piano", "tambor"], ["Móveis", "mesa", "sofá", "cama", "estante"]],
    [["Esportes", "tênis", "vôlei", "judô", "boxe"], ["Profissões", "médico", "padeiro", "pintor", "juiz"], ["Corpo", "mão", "pé", "olho", "nariz"], ["Roupas", "meia", "saia", "boné", "luva"]]];
  let pz, sel, found, lives, words; const grid = h("div", { style: "display:grid;grid-template-columns:repeat(4,1fr);gap:6px" }), msg = h("p");
  const start = () => { pz = pick(P); words = shuffle(pz.flatMap(g => g.slice(1))); sel = []; found = []; lives = 4; draw(); };
  const draw = () => { const done = found.flatMap(g => g.slice(1));
    grid.replaceChildren(...found.map(g => h("div", { class: "card", style: "grid-column:1/5;text-align:center;background:var(--fg);color:var(--bg)" }, h("b", {}, g[0]), " — " + g.slice(1).join(", "))),
      ...words.filter(w => !done.includes(w)).map(w => h("button", { class: sel.includes(w) ? "solid" : "", style: "min-height:56px", onclick: () => { sel = sel.includes(w) ? sel.filter(x => x !== w) : sel.length < 4 ? [...sel, w] : sel; draw(); } }, w)));
    msg.textContent = found.length === 4 ? "Parabéns, você achou todos os grupos!" : lives <= 0 ? "Fim de jogo." : "Tentativas restantes: " + lives; };
  const guess = () => { if (sel.length !== 4 || lives <= 0) return; const g = pz.find(g => sel.every(w => g.includes(w))); if (g && !found.includes(g)) found.push(g); else lives--; sel = []; draw(); };
  b.append(h("p", { class: "muted" }, "Agrupe as 16 palavras em 4 grupos de 4."), grid, h("div", { class: "row" }, btn("Confirmar grupo", guess, "solid"), btn("Novo", start)), msg); start();
});

function crossword(b, puzzles) {
  let pz; const area = h("div"), clues = h("div"), msg = h("p");
  const load = p => { pz = p; const R = p.g.length, C = p.g[0].length, num = {}; let n = 0; const L = (r, c) => p.g[r] && p.g[r][c] && p.g[r][c] !== "#"; const cl = [];
    for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (L(r, c)) { const a = !L(r, c - 1) && L(r, c + 1), d = !L(r - 1, c) && L(r + 1, c); if (a || d) { num[r + "," + c] = ++n; if (a) cl.push(n + "H"); if (d) cl.push(n + "V"); } }
    area.replaceChildren(h("div", { style: `display:grid;grid-template-columns:repeat(${C},1fr);max-width:${C * 62}px` }, ...p.g.flatMap((row, r) => [...row].map((ch, c) => ch === "#" ? h("div", { style: "background:var(--fg);min-height:56px" }) :
      h("div", { style: "position:relative" }, num[r + "," + c] ? h("small", { style: "position:absolute;top:2px;left:4px;font-size:.6em" }, num[r + "," + c]) : null, h("input", { maxlength: "1", "data-a": ch, style: "text-align:center;text-transform:uppercase;font-size:1.4em;min-height:56px;padding:0" }))))));
    clues.replaceChildren(h("ul", { class: "list" }, ...cl.map(k => h("li", {}, h("span", {}, `${k.replace("H", " Horizontal").replace("V", " Vertical")}: ${p.c[k] || ""}`))))); msg.textContent = ""; };
  const chk = () => { const ins = [...area.querySelectorAll("input")]; ins.forEach(i => i.style.background = i.value && i.value.toUpperCase() !== i.getAttribute("data-a") ? "#ccc" : ""); msg.textContent = ins.every(i => i.value.toUpperCase() === i.getAttribute("data-a")) ? "Completo! Muito bem!" : "Casas erradas estão em cinza."; };
  b.append(area, clues, h("div", { class: "row" }, btn("Verificar", chk, "solid"), btn("Outro", () => load(pick(puzzles.filter(x => x !== pz) .concat(puzzles.length === 1 ? puzzles : []))))), msg); load(pick(puzzles));
}
const CW = {
  casa: { g: ["CASA", "O#U#", "RUA#"], c: { "1H": "Moradia", "1V": "Tonalidade", "2V": "Pronome possessivo feminino", "3H": "Via pública" } },
  mar: { g: ["MAR", "A#I", "RIO"], c: { "1H": "Grande massa de água salgada", "1V": "Oceano, em tamanho menor", "2V": "Corre para o mar", "3H": "Curso de água doce" } },
  pia: { g: ["PIA", "A#L", "IDA"], c: { "1H": "Louça da cozinha", "1V": "Chefe da família", "2V": "Lado de um prédio", "3H": "Contrário de volta" } },
  sol: { g: ["SOL", "A#U", "LUA"], c: { "1H": "Astro que ilumina o dia", "1V": "Tempero do mar", "2V": "Satélite natural da Terra", "3H": "Astro da noite" } },
};



add("maze", "Maze", "map", "Jogos", b => {
  const N = 12, S2 = 30, c = cv(N * S2, N * S2), g = c.getContext("2d"), msg = h("p"); let W, px, py;
  const gen = () => { W = Array.from({ length: N }, () => Array.from({ length: N }, () => [1, 1, 1, 1])); const seen = new Set(["0,0"]), st = [[0, 0]], D = [[0, -1, 0, 2], [1, 0, 1, 3], [0, 1, 2, 0], [-1, 0, 3, 1]];
    while (st.length) { const [x, y] = st[st.length - 1], nb = shuffle(D).filter(([dx, dy]) => x + dx >= 0 && x + dx < N && y + dy >= 0 && y + dy < N && !seen.has(`${x + dx},${y + dy}`)); if (!nb.length) { st.pop(); continue; } const [dx, dy, a, o] = nb[0]; W[y][x][a] = 0; W[y + dy][x + dx][o] = 0; seen.add(`${x + dx},${y + dy}`); st.push([x + dx, y + dy]); } px = py = 0; };
  const draw = () => { g.clearRect(0, 0, c.width, c.height); g.lineWidth = 2; g.strokeStyle = "#000"; for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { const w = W[y][x], X0 = x * S2, Y0 = y * S2; g.beginPath(); if (w[0]) { g.moveTo(X0, Y0); g.lineTo(X0 + S2, Y0); } if (w[1]) { g.moveTo(X0 + S2, Y0); g.lineTo(X0 + S2, Y0 + S2); } if (w[2]) { g.moveTo(X0, Y0 + S2); g.lineTo(X0 + S2, Y0 + S2); } if (w[3]) { g.moveTo(X0, Y0); g.lineTo(X0, Y0 + S2); } g.stroke(); }
    g.fillStyle = "#000"; g.fillRect(px * S2 + 8, py * S2 + 8, S2 - 16, S2 - 16); g.strokeRect((N - 1) * S2 + 6, (N - 1) * S2 + 6, S2 - 12, S2 - 12); msg.textContent = px === N - 1 && py === N - 1 ? "Você saiu do labirinto!" : "Chegue ao quadrado vazio no canto inferior direito."; };
  const mv = k => { const i = { ArrowUp: 0, ArrowRight: 1, ArrowDown: 2, ArrowLeft: 3 }[k]; if (i === undefined || W[py][px][i]) return; px += [0, 1, 0, -1][i]; py += [-1, 0, 1, 0][i]; draw(); };
  keys(b, mv); b.append(c, msg, dpad(mv), btn("Novo labirinto", () => { gen(); draw(); })); gen(); draw();
});

