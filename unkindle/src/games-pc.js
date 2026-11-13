"use strict";
/* Jogos de dois com opção de jogar contra o computador (fácil, médio, difícil): Jogo da Velha, Damas e Batalha Naval. */
const MODOS = [["2p", "2 jogadores"], ["f", "PC fácil"], ["m", "PC médio"], ["d", "PC difícil"]];

/* ---------- Jogo da Velha ---------- */
add("ttt", "Jogo da Velha", "ttt", "Jogos para dois", b => {
  const st = X("velha", { mode: "m", placar: { x: 0, o: 0, e: 0 } }), W = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const top = h("div"), msg = h("p", { class: "score" }), tbl = h("table", { class: "ttt" }), pl = h("div", { class: "ulh" }); let bd, turn, over, busy = false;
  const win = (g, p) => W.some(w => w.every(k => g[k] === p));
  const mm = (g, p, depth) => { if (win(g, "O")) return 10 - depth; if (win(g, "X")) return depth - 10; if (g.every(Boolean)) return 0;
    let best = p === "O" ? -99 : 99; g.forEach((v, i) => { if (v) return; g[i] = p; const s = mm(g, p === "O" ? "X" : "O", depth + 1); g[i] = ""; best = p === "O" ? Math.max(best, s) : Math.min(best, s); }); return best; };
  const pcMove = () => { const free = bd.map((v, i) => v ? -1 : i).filter(i => i >= 0);
    if (st.mode === "f" || (st.mode === "m" && Math.random() < .35)) return pick(free);
    let best = -99, mv = free[0]; shuffle(free).forEach(i => { bd[i] = "O"; const s = mm(bd, "X", 0); bd[i] = ""; if (s > best) { best = s; mv = i; } }); return mv; };
  const end = () => { if (win(bd, turn)) { over = true; st.placar[turn === "X" ? "x" : "o"]++; save(); msg.textContent = (st.mode === "2p" ? "Jogador " + turn : turn === "X" ? "Você" : "O computador") + " venceu!"; return true; }
    if (bd.every(Boolean)) { over = true; st.placar.e++; save(); msg.textContent = "Deu velha (empate)."; return true; } return false; };
  const play = i => { if (over || bd[i] || busy) return; bd[i] = turn; if (!end()) { turn = turn === "X" ? "O" : "X"; msg.textContent = st.mode === "2p" ? "Vez de " + turn : turn === "O" ? "O computador está pensando…" : "Sua vez (X)"; } draw();
    if (!over && st.mode !== "2p" && turn === "O") { busy = true; setTimeout(() => { busy = false; bd[pcMove()] = "O"; if (!end()) { turn = "X"; msg.textContent = "Sua vez (X)"; } draw(); }, 350); } };
  const draw = () => {
    top.replaceChildren(segTabs(MODOS, st.mode, k => { st.mode = k; save(); reset(); }));
    pl.replaceChildren(h("div", {}, h("small", {}, st.mode === "2p" ? "X" : "VOCÊ"), h("b", {}, String(st.placar.x))), h("div", {}, h("small", {}, "EMPATES"), h("b", {}, String(st.placar.e))), h("div", {}, h("small", {}, st.mode === "2p" ? "O" : "PC"), h("b", {}, String(st.placar.o))));
    const rows = []; for (let r = 0; r < 3; r++) rows.push(h("tr", {}, ...[0, 1, 2].map(c => { const i = r * 3 + c; return h("td", { class: bd[i] ? "on" : "", onclick: () => play(i) }, bd[i]); })));
    tbl.replaceChildren(h("tbody", {}, ...rows));
  };
  const reset = () => { bd = Array(9).fill(""); turn = "X"; over = false; busy = false; msg.textContent = st.mode === "2p" ? "Vez de X" : "Sua vez (X). Toque numa casa."; draw(); };
  b.append(top, pl, msg, tbl, h("div", { class: "row" }, btn("Nova partida", reset, "solid"), btn("Zerar placar", () => { st.placar = { x: 0, o: 0, e: 0 }; save(); draw(); })));
  reset();
});

/* ---------- Damas ---------- */
function dmMoves(bd, p, onlyFrom) {
  const out = [];
  bd.forEach((pc, i) => { if (!pc || pc.p !== p || (onlyFrom != null && i !== onlyFrom)) return; const r = i >> 3, c = i & 7, dirs = pc.k ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] : p === 1 ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]];
    [[-1, -1], [-1, 1], [1, -1], [1, 1]].forEach(([dr, dc]) => { const r1 = r + dr, c1 = c + dc, r2 = r + 2 * dr, c2 = c + 2 * dc; if (r2 < 0 || r2 > 7 || c2 < 0 || c2 > 7) return; const t = bd[r1 * 8 + c1]; if (t && t.p !== p && !bd[r2 * 8 + c2]) out.push({ from: i, to: r2 * 8 + c2, cap: r1 * 8 + c1 }); });
    dirs.forEach(([dr, dc]) => { const r1 = r + dr, c1 = c + dc; if (r1 >= 0 && r1 < 8 && c1 >= 0 && c1 < 8 && !bd[r1 * 8 + c1]) out.push({ from: i, to: r1 * 8 + c1 }); }); });
  const caps = out.filter(m => m.cap !== undefined); return caps.length ? caps : out;
}
function dmApply(bd, m) { const n = bd.map(x => x && { p: x.p, k: x.k }); n[m.to] = n[m.from]; n[m.from] = null; if (m.cap !== undefined) n[m.cap] = null; const r = m.to >> 3; let crowned = false; if (!n[m.to].k && ((n[m.to].p === 1 && r === 0) || (n[m.to].p === 2 && r === 7))) { n[m.to].k = true; crowned = true; } return { bd: n, more: m.cap !== undefined && !crowned && dmMoves(n, n[m.to].p, m.to).some(x => x.cap !== undefined) }; }
/* sequências completas (capturas múltiplas) para o computador */
function dmTurns(bd, p) { const res = []; const go = (b0, from, seq) => { const ms = dmMoves(b0, p, from).filter(m => from == null || m.cap !== undefined); if (from != null && !ms.length) { res.push({ bd: b0, seq }); return; } ms.forEach(m => { const a = dmApply(b0, m); if (a.more) go(a.bd, m.to, seq.concat([m])); else res.push({ bd: a.bd, seq: seq.concat([m]) }); }); }; go(bd, null, []); return res; }
function dmEval(bd) { let v = 0; bd.forEach((x, i) => { if (!x) return; const r = i >> 3, val = x.k ? 3 : 1 + (x.p === 2 ? r : 7 - r) * .05; v += x.p === 2 ? val : -val; }); return v; }
function dmSearch(bd, p, depth, a, bt) { const ts = dmTurns(bd, p); if (!ts.length) return p === 2 ? -100 : 100; if (!depth) return dmEval(bd);
  if (p === 2) { let v = -999; for (const t of ts) { v = Math.max(v, dmSearch(t.bd, 1, depth - 1, a, bt)); a = Math.max(a, v); if (a >= bt) break; } return v; }
  let v = 999; for (const t of ts) { v = Math.min(v, dmSearch(t.bd, 2, depth - 1, a, bt)); bt = Math.min(bt, v); if (a >= bt) break; } return v; }
add("checkers", "Damas", "grid", "Jogos para dois", b => {
  const Z = 64, c = cv(8 * Z, 8 * Z), g = c.getContext("2d"), st = X("damas2", { mode: "m" }), top = h("div"), msg = h("p", { class: "score" }); let bd, turn, sel, chain, busy = false;
  c.className += " smooth";
  const reset = () => { bd = Array(64).fill(null); for (let i = 0; i < 64; i++) { const r = i >> 3, cc = i & 7; if ((r + cc) % 2) { if (r < 3) bd[i] = { p: 2, k: false }; if (r > 4) bd[i] = { p: 1, k: false }; } } turn = 1; sel = null; chain = false; busy = false; draw(); };
  const legal = () => chain ? dmMoves(bd, turn, sel).filter(m => m.cap !== undefined) : dmMoves(bd, turn);
  const pcTurn = () => { if (st.mode === "2p" || turn !== 2) return; busy = true; draw();
    setTimeout(() => { const ts = dmTurns(bd, 2); if (!ts.length) { busy = false; return draw(); }
      let pickT; if (st.mode === "f") pickT = pick(ts); else { const depth = st.mode === "m" ? 2 : 4; let best = -1e9; shuffle(ts).forEach(t => { const v = dmSearch(t.bd, 1, depth, -1e9, 1e9) + Math.random() * .01; if (v > best) { best = v; pickT = t; } }); }
      bd = pickT.bd; turn = 1; busy = false; draw(); }, 300); };
  const click = i => { if (busy || (st.mode !== "2p" && turn === 2)) return; const ms = legal();
    if (sel !== null) { const m = ms.find(x => x.from === sel && x.to === i); if (m) { const a = dmApply(bd, m); bd = a.bd; if (a.more) { sel = m.to; chain = true; } else { sel = null; chain = false; turn = 3 - turn; } draw(); pcTurn(); return; } if (chain) return; }
    if (bd[i] && bd[i].p === turn) { if (ms.some(m => m.from === i)) sel = i; else { sel = null; msg.textContent = ms.some(m => m.cap !== undefined) ? "Capture com outra peça: a captura é obrigatória." : "Essa peça não pode se mover."; return; } } else sel = null;
    draw(); };
  const draw = () => {
    top.replaceChildren(segTabs(MODOS, st.mode, k => { st.mode = k; save(); reset(); }));
    const ms = legal(), over = !ms.length && !busy, you = st.mode !== "2p";
    msg.textContent = over ? (you ? (turn === 1 ? "O computador venceu." : "Você venceu!") : "Jogador " + (3 - turn) + " venceu!") : busy ? "O computador está pensando…" : (you ? "Sua vez (brancas)" : "Vez das " + (turn === 1 ? "brancas" : "pretas")) + (chain ? " — continue capturando" : ms.some(m => m.cap !== undefined) ? " — captura obrigatória" : "");
    const hl = sel !== null ? ms.filter(m => m.from === sel).map(m => m.to) : [];
    for (let i = 0; i < 64; i++) { const x = (i & 7) * Z, y = (i >> 3) * Z, dark = ((i >> 3) + (i & 7)) % 2;
      g.fillStyle = dark ? "#8a8a8a" : "#f2f2f2"; g.fillRect(x, y, Z, Z);
      if (i === sel) { g.lineWidth = 5; g.strokeStyle = "#000"; g.strokeRect(x + 2.5, y + 2.5, Z - 5, Z - 5); }
      const p = bd[i];
      if (p) { const cx = x + Z / 2, cy = y + Z / 2; g.beginPath(); g.arc(cx, cy + 3, Z * .36, 0, 7); g.fillStyle = "#000"; g.fill();
        g.beginPath(); g.arc(cx, cy, Z * .36, 0, 7); g.fillStyle = p.p === 1 ? "#fff" : "#111"; g.fill(); g.lineWidth = 2.5; g.strokeStyle = "#000"; g.stroke();
        g.beginPath(); g.arc(cx, cy, Z * .24, 0, 7); g.lineWidth = 2; g.strokeStyle = p.p === 1 ? "#999" : "#555"; g.stroke();
        if (p.k) { g.fillStyle = p.p === 1 ? "#000" : "#fff"; g.beginPath(); g.moveTo(cx - 13, cy + 7); g.lineTo(cx - 14, cy - 7); g.lineTo(cx - 7, cy); g.lineTo(cx, cy - 10); g.lineTo(cx + 7, cy); g.lineTo(cx + 14, cy - 7); g.lineTo(cx + 13, cy + 7); g.closePath(); g.fill(); } }
      if (hl.indexOf(i) >= 0) { g.beginPath(); g.arc(x + Z / 2, y + Z / 2, Z * .13, 0, 7); g.fillStyle = "#000"; g.fill(); g.lineWidth = 2; g.strokeStyle = "#fff"; g.stroke(); } }
    keepPut("damas2", { bd, turn });
  };
  onPointer(c, e => { const p = ptr(c, e); click(Math.floor(p[1] / Z) * 8 + Math.floor(p[0] / Z)); });
  b.append(top, msg, c, btn("Novo jogo", reset, "solid"), h("p", { class: "muted" }, "Toque numa peça e depois na bolinha para onde ela vai. A captura é obrigatória; quem chega ao outro lado vira dama (coroa)."));
  const sv = keepGet("damas2"); if (sv && sv.bd) { bd = sv.bd; turn = sv.turn; sel = null; chain = false; draw(); pcTurn(); } else reset();
});

/* ---------- Batalha Naval (contra o computador) ---------- */
add("battleship", "Batalha Naval", "flag", "Jogos para dois", b => {
  const N = 8, SH = [4, 3, 3, 2], st = X("naval", { mode: "m" }), top = h("div"), msg = h("p", { class: "score" }), A = h("div"), B = h("div"); let mine, theirs, sMe, sPc, over, hunt;
  const place = () => { const g = Array(N * N).fill(0); SH.forEach((len, id) => { for (;;) { const hz = rnd(2), x = rnd(N - (hz ? len - 1 : 0)), y = rnd(N - (hz ? 0 : len - 1)), cs = Array.from({ length: len }, (_, k) => (y + (hz ? 0 : k)) * N + x + (hz ? k : 0)); if (cs.every(i => !g[i])) { cs.forEach(i => { g[i] = id + 1; }); break; } } }); return g; };
  const sunk = (g, s, id) => g.every((v, i) => v !== id || s[i]);
  const done = (g, s) => g.every((v, i) => !v || s[i]);
  const grid = (g, s, show, click) => { const rows = []; for (let r = 0; r < N; r++) rows.push(h("tr", {}, ...Array.from({ length: N }, (_, cc) => { const i = r * N + cc, hit = s[i] && g[i], miss = s[i] && !g[i];
    return h("td", { class: (hit ? "hit" : miss ? "miss" : show && g[i] ? "ship" : "") + (hit && sunk(g, s, g[i]) ? " sunk" : ""), onclick: click ? () => click(i) : null }, hit ? "×" : miss ? "•" : ""); }))); return h("table", { class: "naval" }, h("tbody", {}, ...rows)); };
  const pcShot = () => { const free = i => i >= 0 && i < N * N && !sPc[i];
    let t = -1;
    if (st.mode !== "f") { while (hunt.length && t < 0) { const c = hunt.shift(); if (free(c)) t = c; } }
    if (t < 0) { const cand = []; for (let i = 0; i < N * N; i++) if (!sPc[i] && (st.mode !== "d" || ((i >> 3) + (i & 7)) % 2 === 0)) cand.push(i); t = cand.length ? pick(cand) : (() => { let i; do i = rnd(N * N); while (sPc[i]); return i; })(); }
    sPc[t] = 1;
    if (mine[t] && st.mode !== "f") { const r = t >> 3, cc = t & 7; [[r - 1, cc], [r + 1, cc], [r, cc - 1], [r, cc + 1]].forEach(([rr, c2]) => { if (rr >= 0 && rr < N && c2 >= 0 && c2 < N) hunt.push(rr * N + c2); }); if (sunk(mine, sPc, mine[t])) hunt = []; }
    return t; };
  const fire = i => { if (over || sMe[i]) return; sMe[i] = 1; let txt = theirs[i] ? (sunk(theirs, sMe, theirs[i]) ? "Você afundou um navio!" : "Acertou!") : "Água.";
    if (done(theirs, sMe)) { over = true; msg.textContent = "Você venceu! Afundou toda a frota."; return draw(); }
    const t = pcShot(); txt += "  O computador " + (mine[t] ? (sunk(mine, sPc, mine[t]) ? "afundou um navio seu." : "acertou um navio seu.") : "errou.");
    if (done(mine, sPc)) { over = true; txt = "O computador afundou toda a sua frota."; }
    msg.textContent = txt; draw(); };
  const draw = () => { top.replaceChildren(segTabs(MODOS.slice(1), st.mode, k => { st.mode = k; save(); reset(); }));
    B.replaceChildren(h("div", { class: "lbl2" }, "Mar inimigo — toque para atirar"), grid(theirs, sMe, over, fire));
    A.replaceChildren(h("div", { class: "lbl2" }, "Sua frota"), grid(mine, sPc, true, null)); };
  const reset = () => { mine = place(); theirs = place(); sMe = Array(N * N).fill(0); sPc = Array(N * N).fill(0); over = false; hunt = []; msg.textContent = "Afunde os 4 navios inimigos (tamanhos 4, 3, 3 e 2)."; draw(); };
  b.append(top, msg, B, A, btn("Novo jogo", reset, "solid"), h("p", { class: "muted" }, "× = acerto, • = água. No difícil o computador atira de forma estratégica."));
  reset();
});
