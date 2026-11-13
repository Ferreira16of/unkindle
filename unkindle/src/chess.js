"use strict";
/* Xadrez completo: roque, en passant, promoção, xeque, mate, afogamento, empates; 2 jogadores ou contra o computador. */

const CHP = {
  P: ["............", ".....##.....", "....####....", "....####....", ".....##.....", "....####....", ".....##.....", ".....##.....", "....####....", "...######...", "..########..", "............"],
  R: ["............", "..##.##.##..", "..########..", "...######...", "...######...", "....####....", "....####....", "....####....", "...######...", "..########..", "..########..", "............"],
  N: ["............", "....##......", "...#####....", "..#######...", "..##.#####..", ".#########..", ".###.#####..", ".....#####..", "....######..", "...#######..", "..########..", "............"],
  B: ["............", ".....##.....", "....####....", "...##.###...", "...#.####...", "...######...", "....####....", ".....##.....", "....####....", "...######...", "..########..", "............"],
  Q: ["............", "..#..##..#..", "..##.##.##..", "..########..", "...######...", "....####....", "....####....", "...######...", "....####....", "...######...", "..########..", "............"],
  K: [".....##.....", "....####....", ".....##.....", "...######...", "..########..", "..########..", "...######...", "....####....", "....####....", "...######...", "..########..", "............"]
};
const VAL = { P: 100, N: 320, B: 330, R: 500, Q: 900, K: 0 };
const isW = p => p !== "." && p === p.toUpperCase(), sideOf = p => p === "." ? null : isW(p) ? "w" : "b";
const RC = i => [i >> 3, i & 7];
function chessStart() { return { b: "rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR".split(""), turn: "w", cs: "KQkq", ep: -1, half: 0, full: 1, last: null, cap: { w: [], b: [] }, moves: [], reps: {} }; }
function attacked(b, sq, by) {
  const [r, c] = RC(sq), at = (rr, cc) => rr >= 0 && rr < 8 && cc >= 0 && cc < 8 ? b[rr * 8 + cc] : null;
  const P = by === "w" ? "P" : "p", N = by === "w" ? "N" : "n", B = by === "w" ? "B" : "b", R = by === "w" ? "R" : "r", Q = by === "w" ? "Q" : "q", K = by === "w" ? "K" : "k";
  const pr = by === "w" ? r + 1 : r - 1; if (at(pr, c - 1) === P || at(pr, c + 1) === P) return true;
  for (const [dr, dc] of [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]]) if (at(r + dr, c + dc) === N) return true;
  for (const [dr, dc] of [[1, 1], [1, -1], [-1, 1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]]) { if (at(r + dr, c + dc) === K) return true;
    let rr = r + dr, cc = c + dc; while (rr >= 0 && rr < 8 && cc >= 0 && cc < 8) { const p = b[rr * 8 + cc]; if (p !== ".") { if (p === Q || (dr && dc ? p === B : p === R)) return true; break; } rr += dr; cc += dc; } }
  return false;
}
function kingSq(b, side) { return b.indexOf(side === "w" ? "K" : "k"); }
function inCheck(s, side) { return attacked(s.b, kingSq(s.b, side), side === "w" ? "b" : "w"); }
function pseudo(s) {
  const b = s.b, me = s.turn, out = [], add = (f, t, x) => out.push(Object.assign({ f, t }, x || {}));
  for (let i = 0; i < 64; i++) { const p = b[i]; if (sideOf(p) !== me) continue; const [r, c] = RC(i), t = p.toUpperCase();
    const free = (rr, cc) => rr >= 0 && rr < 8 && cc >= 0 && cc < 8 && b[rr * 8 + cc] === ".", foe = (rr, cc) => rr >= 0 && rr < 8 && cc >= 0 && cc < 8 && sideOf(b[rr * 8 + cc]) && sideOf(b[rr * 8 + cc]) !== me;
    if (t === "P") { const d = me === "w" ? -1 : 1, last = me === "w" ? 0 : 7, start = me === "w" ? 6 : 1, pr = (to, x) => { if ((to >> 3) === last) "QRBN".split("").forEach(q => add(i, to, Object.assign({ promo: q }, x))); else add(i, to, x); };
      if (free(r + d, c)) { pr((r + d) * 8 + c); if (r === start && free(r + 2 * d, c)) add(i, (r + 2 * d) * 8 + c, { dbl: true }); }
      for (const dc of [-1, 1]) { const rr = r + d, cc = c + dc; if (cc < 0 || cc > 7) continue; if (foe(rr, cc)) pr(rr * 8 + cc); else if (rr * 8 + cc === s.ep) add(i, rr * 8 + cc, { epc: true }); } }
    else if (t === "N" || t === "K") { const offs = t === "N" ? [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]] : [[1, 1], [1, -1], [-1, 1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]];
      offs.forEach(([dr, dc]) => { if (free(r + dr, c + dc) || foe(r + dr, c + dc)) add(i, (r + dr) * 8 + c + dc); });
      if (t === "K") { const opp = me === "w" ? "b" : "w", row = me === "w" ? 7 : 0;
        if (i === row * 8 + 4 && !attacked(b, i, opp)) {
          if (s.cs.indexOf(me === "w" ? "K" : "k") >= 0 && b[row * 8 + 5] === "." && b[row * 8 + 6] === "." && !attacked(b, row * 8 + 5, opp) && !attacked(b, row * 8 + 6, opp)) add(i, row * 8 + 6, { castle: "k" });
          if (s.cs.indexOf(me === "w" ? "Q" : "q") >= 0 && b[row * 8 + 3] === "." && b[row * 8 + 2] === "." && b[row * 8 + 1] === "." && !attacked(b, row * 8 + 3, opp) && !attacked(b, row * 8 + 2, opp)) add(i, row * 8 + 2, { castle: "q" }); } } }
    else { const dirs = t === "B" ? [[1, 1], [1, -1], [-1, 1], [-1, -1]] : t === "R" ? [[1, 0], [-1, 0], [0, 1], [0, -1]] : [[1, 1], [1, -1], [-1, 1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]];
      dirs.forEach(([dr, dc]) => { let rr = r + dr, cc = c + dc; while (rr >= 0 && rr < 8 && cc >= 0 && cc < 8) { const q = b[rr * 8 + cc]; if (q === ".") add(i, rr * 8 + cc); else { if (sideOf(q) !== me) add(i, rr * 8 + cc); break; } rr += dr; cc += dc; } }); } }
  return out;
}
function applyMove(s, m) {
  const b = s.b.slice(), p = b[m.f], me = s.turn, n = { b, turn: me === "w" ? "b" : "w", cs: s.cs, ep: -1, half: s.half + 1, full: s.full + (me === "b" ? 1 : 0), last: [m.f, m.t], cap: { w: s.cap.w.slice(), b: s.cap.b.slice() }, moves: s.moves, reps: s.reps };
  let taken = b[m.t];
  if (m.epc) { const vs = m.t + (me === "w" ? 8 : -8); taken = b[vs]; b[vs] = "."; }
  b[m.t] = m.promo ? (me === "w" ? m.promo : m.promo.toLowerCase()) : p; b[m.f] = ".";
  if (m.castle) { const row = me === "w" ? 7 : 0; if (m.castle === "k") { b[row * 8 + 5] = b[row * 8 + 7]; b[row * 8 + 7] = "."; } else { b[row * 8 + 3] = b[row * 8]; b[row * 8] = "."; } }
  if (taken !== ".") n.cap[me].push(taken);
  if (p.toUpperCase() === "P" || taken !== ".") n.half = 0;
  if (m.dbl) n.ep = (m.f + m.t) / 2;
  const kill = sq => { if (sq === 63) n.cs = n.cs.replace("K", ""); if (sq === 56) n.cs = n.cs.replace("Q", ""); if (sq === 7) n.cs = n.cs.replace("k", ""); if (sq === 0) n.cs = n.cs.replace("q", ""); };
  if (p === "K") n.cs = n.cs.replace("K", "").replace("Q", ""); if (p === "k") n.cs = n.cs.replace("k", "").replace("q", "");
  kill(m.f); kill(m.t);
  return n;
}
function legalMoves(s) { return pseudo(s).filter(m => !attacked(applyMove(s, m).b, kingSq(applyMove(s, m).b, s.turn), s.turn === "w" ? "b" : "w")); }
const FILES = "abcdefgh", sqName = i => FILES[i & 7] + (8 - (i >> 3));
const PT = { K: "R", Q: "D", R: "T", B: "B", N: "C", P: "" };
function moveName(s, m) { const p = s.b[m.f].toUpperCase(); if (m.castle) return m.castle === "k" ? "O-O" : "O-O-O"; const cap = s.b[m.t] !== "." || m.epc; return (p === "P" ? (cap ? FILES[m.f & 7] : "") : PT[p]) + (cap ? "x" : "") + sqName(m.t) + (m.promo ? "=" + PT[m.promo] : ""); }
function insufficient(b) { const ps = b.filter(p => p !== "." && p.toUpperCase() !== "K"); return !ps.length || (ps.length === 1 && /[NBnb]/.test(ps[0])); }
/* Computador: alfa-beta com material e posição simples */
const CENTER = [0, 1, 2, 3, 3, 2, 1, 0];
function evalPos(b) { let v = 0; for (let i = 0; i < 64; i++) { const p = b[i]; if (p === ".") continue; const t = p.toUpperCase(), [r, c] = RC(i); let x = VAL[t] + (t === "N" || t === "B" ? (CENTER[r] + CENTER[c]) * 4 : t === "P" ? (isW(p) ? 6 - r : r - 1) * 6 + CENTER[c] * 2 : 0); v += isW(p) ? x : -x; } return v; }
function search(s, depth, alpha, beta) {
  const ms = legalMoves(s); if (!ms.length) return inCheck(s, s.turn) ? -100000 - depth : 0;
  if (!depth) return (s.turn === "w" ? 1 : -1) * evalPos(s.b);
  ms.sort((x, y) => (s.b[y.t] !== "." ? VAL[s.b[y.t].toUpperCase()] : 0) - (s.b[x.t] !== "." ? VAL[s.b[x.t].toUpperCase()] : 0));
  for (const m of ms) { const v = -search(applyMove(s, m), depth - 1, -beta, -alpha); if (v >= beta) return beta; if (v > alpha) alpha = v; }
  return alpha;
}
function bestMove(s, lvl) {
  const ms = legalMoves(s); if (!ms.length) return null;
  if (lvl === "facil" && Math.random() < .35) return pick(ms);
  const depth = lvl === "facil" ? 1 : 2; let best = null, bv = -Infinity;
  shuffle(ms).forEach(m => { const v = -search(applyMove(s, m), depth, -Infinity, Infinity) + Math.random() * 6; if (v > bv) { bv = v; best = m; } });
  return best;
}

add("chess", "Xadrez", "chess", "Jogos para dois", b => {
  const Z = 52, c = cv(8 * Z, 8 * Z), g = c.getContext("2d"), st = X("xadrez", { mode: "2p", flip: false });
  const top = h("div"), msg = h("p", { class: "score" }), capW = h("div", { class: "caps" }), capB = h("div", { class: "caps" }), promoBox = h("div", { class: "row" }), list = h("div", { class: "mvlist" });
  let S0, hist, sel = null, targets = [], thinking = false, promoWait = null;
  const sprite = (key, x, y, white) => { const rows = CHP[key], px = 4, ox = x + (Z - 12 * px) / 2, oy = y + (Z - 12 * px) / 2;
    g.fillStyle = white ? "#000" : "#fff";
    rows.forEach((r, j) => { for (let i = 0; i < 12; i++) if (r[i] === "#") [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dx, dy]) => g.fillRect(ox + (i + dx) * px, oy + (j + dy) * px, px, px)); });
    g.fillStyle = white ? "#fff" : "#000";
    rows.forEach((r, j) => { for (let i = 0; i < 12; i++) if (r[i] === "#") g.fillRect(ox + i * px, oy + j * px, px, px); }); };
  const vis = i => st.flip ? 63 - i : i;
  const status = () => { const ms = legalMoves(S0), ck = inCheck(S0, S0.turn), who = S0.turn === "w" ? "brancas" : "pretas";
    if (!ms.length) return ck ? "Xeque-mate! Vitória das " + (S0.turn === "w" ? "pretas" : "brancas") + "." : "Afogamento: empate.";
    if (S0.half >= 100) return "Empate pela regra dos 50 lances."; if (insufficient(S0.b)) return "Empate: material insuficiente."; if ((S0.reps[S0.b.join("") + S0.turn] || 0) >= 3) return "Empate por repetição.";
    return (thinking ? "O computador está pensando…" : "Vez das " + who) + (ck ? " — XEQUE!" : ""); };
  const over = () => /mate|empate|Empate|Afogamento/.test(status());
  const draw = () => {
    for (let k = 0; k < 64; k++) { const i = vis(k), x = (k & 7) * Z, y = (k >> 3) * Z, dark = ((i >> 3) + (i & 7)) % 2;
      g.fillStyle = dark ? "#9a9a9a" : "#fff"; g.fillRect(x, y, Z, Z);
      if (S0.last && S0.last.indexOf(i) >= 0) { g.fillStyle = "#000"; [[0, 0], [Z - 10, 0], [0, Z - 10], [Z - 10, Z - 10]].forEach(([a, d]) => { g.fillRect(x + a, y + d, 10, 3); g.fillRect(x + a + (a ? 7 : 0), y + d, 3, 10); }); }
      const p = S0.b[i];
      if (p !== "." && p.toUpperCase() === "K" && sideOf(p) === S0.turn && inCheck(S0, S0.turn)) { g.fillStyle = "#000"; for (let t = 0; t < Z; t += 6) { g.fillRect(x + t, y, 3, Z); } g.fillStyle = dark ? "#9a9a9a" : "#fff"; g.fillRect(x + 6, y + 6, Z - 12, Z - 12); }
      if (i === sel) { g.fillStyle = "#000"; g.fillRect(x, y, Z, 5); g.fillRect(x, y + Z - 5, Z, 5); g.fillRect(x, y, 5, Z); g.fillRect(x + Z - 5, y, 5, Z); }
      if (p !== ".") sprite(p.toUpperCase(), x, y, isW(p));
      if (targets.indexOf(i) >= 0) { g.fillStyle = "#000"; if (p !== ".") { g.fillRect(x + 2, y + 2, 12, 4); g.fillRect(x + 2, y + 2, 4, 12); g.fillRect(x + Z - 14, y + Z - 6, 12, 4); g.fillRect(x + Z - 6, y + Z - 14, 4, 12); } else { g.fillRect(x + Z / 2 - 7, y + Z / 2 - 7, 14, 14); g.fillStyle = "#fff"; g.fillRect(x + Z / 2 - 4, y + Z / 2 - 4, 8, 8); } } }
    g.fillStyle = "#000"; g.font = "10px Bookerly, Literata, Georgia, serif"; for (let k = 0; k < 8; k++) { const f = st.flip ? 7 - k : k; g.fillText(FILES[f], k * Z + Z - 9, 8 * Z - 3); g.fillText(String(st.flip ? k + 1 : 8 - k), 2, k * Z + 11); }
    g.strokeStyle = "#000"; g.lineWidth = 2; g.strokeRect(1, 1, 8 * Z - 2, 8 * Z - 2);
    msg.textContent = status();
    const capTxt = arr => arr.map(p => ({ P: "peão", N: "cavalo", B: "bispo", R: "torre", Q: "dama" }[p.toUpperCase()] || "")).join(", ");
    capW.textContent = "Brancas capturaram: " + (capTxt(S0.cap.w) || "—"); capB.textContent = "Pretas capturaram: " + (capTxt(S0.cap.b) || "—");
    list.replaceChildren(...S0.moves.reduce((a, mv, k) => { if (k % 2 === 0) a.push(h("span", {}, (k / 2 + 1) + ". " + mv)); else a[a.length - 1].appendChild(document.createTextNode(" " + mv)); return a; }, []));
    keepPut("chess2", { S0, hist: hist.slice(-40) });
  };
  const doMove = m => { const name = moveName(S0, m); hist.push(JSON.stringify(S0)); S0 = applyMove(S0, m); S0.moves = S0.moves.concat([name]); const key = S0.b.join("") + S0.turn; S0.reps = Object.assign({}, S0.reps, { [key]: (S0.reps[key] || 0) + 1 }); sel = null; targets = []; draw(); maybeAI(); };
  const maybeAI = () => { if (st.mode === "2p" || over()) return; const ai = st.flip ? "w" : "b"; if (S0.turn !== ai) return; thinking = true; draw();
    setTimeout(() => { const m = bestMove(S0, st.mode === "facil" ? "facil" : "medio"); thinking = false; if (m) { if (m.promo) m.promo = "Q"; doMove(m); } else draw(); }, 60); };
  const tap = k => { if (thinking || over() || promoWait) return; const i = vis(k), me = S0.turn;
    if (st.mode !== "2p" && me === (st.flip ? "w" : "b")) return;
    if (sel !== null && targets.indexOf(i) >= 0) { const ms = legalMoves(S0).filter(m => m.f === sel && m.t === i);
      if (ms.length > 1 && ms[0].promo) { promoWait = ms; promoBox.replaceChildren(h("b", {}, "Promover para: "), ...["Q", "R", "B", "N"].map(q => btn({ Q: "Dama", R: "Torre", B: "Bispo", N: "Cavalo" }[q], () => { const mm = promoWait.find(x => x.promo === q); promoWait = null; promoBox.replaceChildren(); doMove(mm); }, q === "Q" ? "solid" : ""))); return; }
      return doMove(ms[0]); }
    if (sideOf(S0.b[i]) === me) { sel = i; targets = legalMoves(S0).filter(m => m.f === i).map(m => m.t); if (!targets.length) msg.textContent = inCheck(S0, me) ? "Você está em xeque: essa peça não resolve." : "Essa peça não tem lances agora."; draw(); if (!targets.length) msg.textContent = inCheck(S0, me) ? "Você está em xeque: essa peça não resolve." : "Essa peça não tem lances agora."; }
    else { sel = null; targets = []; draw(); } };
  onPointer(c, e => { const p = ptr(c, e); tap(Math.floor(p[1] / Z) * 8 + Math.floor(p[0] / Z)); });
  const newGame = () => { S0 = chessStart(); hist = []; sel = null; targets = []; promoWait = null; promoBox.replaceChildren(); draw(); maybeAI(); };
  const drawTop = () => top.replaceChildren(segTabs([["2p", "2 jogadores"], ["facil", "Contra o PC: fácil"], ["medio", "Contra o PC: médio"]], st.mode, k => { st.mode = k; save(); drawTop(); newGame(); }));
  b.append(top, msg, capB, c, capW, promoBox, h("div", { class: "row" },
    btn("Desfazer", () => { if (!hist.length || thinking) return; const n = st.mode === "2p" ? 1 : Math.min(2, hist.length); for (let k = 0; k < n - 1; k++) hist.pop(); S0 = JSON.parse(hist.pop()); sel = null; targets = []; promoWait = null; promoBox.replaceChildren(); draw(); }),
    btn("Virar tabuleiro", () => { st.flip = !st.flip; save(); sel = null; targets = []; draw(); maybeAI(); }),
    btn("Novo jogo", newGame, "solid")), h("div", { class: "lbl2" }, "Lances"), list,
    h("p", { class: "muted" }, "Toque numa peça: as casas possíveis ficam marcadas (quadradinho = andar, cantos = capturar). Contra o PC você joga com as brancas; use Virar tabuleiro para jogar com as pretas."));
  drawTop();
  const sv = keepGet("chess2"); if (sv && sv.S0 && sv.S0.b) { S0 = sv.S0; hist = sv.hist || []; draw(); maybeAI(); } else newGame();
});
