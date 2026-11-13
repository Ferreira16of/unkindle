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
  const depth = lvl === "facil" ? 1 : lvl === "dificil" ? 3 : 2; let best = null, bv = -Infinity;
  shuffle(ms).forEach(m => { const v = -search(applyMove(s, m), depth, -Infinity, Infinity) + Math.random() * 6; if (v > bv) { bv = v; best = m; } });
  return best;
}

add("chess", "Xadrez", "chess", "Jogos para dois", b => {
  const Z = 64, c = cv(8 * Z, 8 * Z), g = c.getContext("2d"), st = X("xadrez", { mode: "2p", flip: false });
  const top = h("div"), msg = h("p", { class: "score" }), capW = h("div", { class: "caps" }), capB = h("div", { class: "caps" }), promoBox = h("div", { class: "row" }), list = h("div", { class: "mvlist" });
  let S0, hist, sel = null, targets = [], thinking = false, promoWait = null;
  /* Peças no estilo clássico (Staunton), desenhadas em vetor: contorno firme, base em dois degraus */
  const sprite = (key, x, y, white) => {
    const fg = white ? "#fff" : "#111", ln = "#000", det = white ? "#000" : "#fff";
    g.save(); g.translate(x, y); g.scale(Z, Z); g.lineJoin = "round"; g.lineCap = "round"; g.lineWidth = 0.04;
    const P = () => { g.fillStyle = fg; g.fill(); g.strokeStyle = ln; g.stroke(); };
    const line = (pts, w) => { g.beginPath(); g.moveTo(pts[0], pts[1]); for (let i = 2; i < pts.length; i += 2) g.lineTo(pts[i], pts[i + 1]); g.strokeStyle = det; g.lineWidth = w || 0.03; g.stroke(); g.lineWidth = 0.04; };
    const rr = (x0, y0, w, h0, r) => { g.beginPath(); g.moveTo(x0 + r, y0); g.lineTo(x0 + w - r, y0); g.quadraticCurveTo(x0 + w, y0, x0 + w, y0 + r); g.lineTo(x0 + w, y0 + h0 - r); g.quadraticCurveTo(x0 + w, y0 + h0, x0 + w - r, y0 + h0); g.lineTo(x0 + r, y0 + h0); g.quadraticCurveTo(x0, y0 + h0, x0, y0 + h0 - r); g.lineTo(x0, y0 + r); g.quadraticCurveTo(x0, y0, x0 + r, y0); g.closePath(); };
    const base = (w) => { w = w || .56; rr(.5 - w / 2, .8, w, .09, .03); P(); rr(.5 - w / 2 + .06, .74, w - .12, .07, .025); P(); };
    if (key === "P") {
      g.beginPath(); g.moveTo(.37, .75); g.bezierCurveTo(.37, .62, .43, .55, .45, .47); g.lineTo(.55, .47); g.bezierCurveTo(.57, .55, .63, .62, .63, .75); g.closePath(); P();
      g.beginPath(); g.ellipse ? g.ellipse(.5, .46, .12, .035, 0, 0, Math.PI * 2) : g.arc(.5, .46, .1, 0, Math.PI * 2); P();
      g.beginPath(); g.arc(.5, .31, .115, 0, Math.PI * 2); P();
      base(.5);
    }
    if (key === "R") {
      g.beginPath(); g.moveTo(.36, .74); g.lineTo(.38, .4); g.lineTo(.62, .4); g.lineTo(.64, .74); g.closePath(); P();
      rr(.31, .34, .38, .07, .015); P();
      g.beginPath(); g.moveTo(.3, .34); g.lineTo(.3, .17); g.lineTo(.38, .17); g.lineTo(.38, .23); g.lineTo(.46, .23); g.lineTo(.46, .17); g.lineTo(.54, .17); g.lineTo(.54, .23); g.lineTo(.62, .23); g.lineTo(.62, .17); g.lineTo(.7, .17); g.lineTo(.7, .34); g.closePath(); P();
      line([.39, .47, .61, .47]); line([.39, .66, .61, .66]);
      base(.56);
    }
    if (key === "N") {
      g.beginPath();
      g.moveTo(.3, .74);
      g.bezierCurveTo(.3, .6, .36, .52, .4, .46);
      g.bezierCurveTo(.33, .46, .25, .5, .22, .45);
      g.bezierCurveTo(.19, .4, .24, .34, .3, .3);
      g.bezierCurveTo(.36, .26, .4, .2, .42, .14);
      g.lineTo(.47, .2);
      g.lineTo(.52, .12);
      g.bezierCurveTo(.68, .16, .76, .3, .74, .5);
      g.bezierCurveTo(.73, .6, .7, .68, .7, .74);
      g.closePath(); P();
      g.beginPath(); g.arc(.43, .29, .025, 0, Math.PI * 2); g.fillStyle = det; g.fill();
      line([.25, .43, .29, .42], .025);
      line([.6, .2, .68, .32, .7, .46], .025);
      base(.56);
    }
    if (key === "B") {
      g.beginPath(); g.moveTo(.37, .74); g.bezierCurveTo(.4, .66, .44, .62, .44, .58); g.lineTo(.56, .58); g.bezierCurveTo(.56, .62, .6, .66, .63, .74); g.closePath(); P();
      rr(.37, .54, .26, .06, .02); P();
      g.beginPath(); g.moveTo(.5, .17); g.bezierCurveTo(.36, .26, .33, .38, .38, .48); g.bezierCurveTo(.4, .52, .44, .54, .5, .54); g.bezierCurveTo(.56, .54, .6, .52, .62, .48); g.bezierCurveTo(.67, .38, .64, .26, .5, .17); g.closePath(); P();
      g.beginPath(); g.arc(.5, .13, .045, 0, Math.PI * 2); P();
      line([.46, .4, .56, .29], .03); line([.47, .46, .53, .46], .025);
      base(.54);
    }
    if (key === "Q") {
      g.beginPath(); g.moveTo(.35, .74); g.bezierCurveTo(.38, .62, .43, .52, .42, .44); g.lineTo(.58, .44); g.bezierCurveTo(.57, .52, .62, .62, .65, .74); g.closePath(); P();
      g.beginPath(); g.moveTo(.33, .44); g.lineTo(.24, .22); g.lineTo(.36, .32); g.lineTo(.4, .16); g.lineTo(.5, .3); g.lineTo(.6, .16); g.lineTo(.64, .32); g.lineTo(.76, .22); g.lineTo(.67, .44); g.closePath(); P();
      [[.24, .2], [.4, .14], [.6, .14], [.76, .2]].forEach(([cx, cy]) => { g.beginPath(); g.arc(cx, cy, .04, 0, Math.PI * 2); P(); });
      g.beginPath(); g.arc(.5, .26, .045, 0, Math.PI * 2); P();
      line([.38, .5, .62, .5], .025);
      base(.58);
    }
    if (key === "K") {
      g.beginPath(); g.moveTo(.35, .74); g.bezierCurveTo(.38, .62, .43, .54, .42, .46); g.lineTo(.58, .46); g.bezierCurveTo(.57, .54, .62, .62, .65, .74); g.closePath(); P();
      g.beginPath(); g.moveTo(.32, .46); g.bezierCurveTo(.24, .38, .3, .26, .42, .3); g.bezierCurveTo(.46, .24, .54, .24, .58, .3); g.bezierCurveTo(.7, .26, .76, .38, .68, .46); g.closePath(); P();
      g.beginPath(); g.moveTo(.47, .27); g.lineTo(.47, .2); g.lineTo(.42, .2); g.lineTo(.42, .15); g.lineTo(.47, .15); g.lineTo(.47, .09); g.lineTo(.53, .09); g.lineTo(.53, .15); g.lineTo(.58, .15); g.lineTo(.58, .2); g.lineTo(.53, .2); g.lineTo(.53, .27); g.closePath(); P();
      line([.38, .52, .62, .52], .025);
      base(.58);
    }
    g.restore();
  };
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
      if (targets.indexOf(i) >= 0) { g.beginPath(); if (p !== ".") { g.arc(x + Z / 2, y + Z / 2, Z * .46, 0, Math.PI * 2); g.lineWidth = 4; g.strokeStyle = "#000"; g.stroke(); } else { g.arc(x + Z / 2, y + Z / 2, Z * .13, 0, Math.PI * 2); g.fillStyle = "#000"; g.fill(); g.lineWidth = 2; g.strokeStyle = "#fff"; g.stroke(); } } }
    g.fillStyle = "#000"; g.font = "12px Bookerly, Literata, Georgia, serif"; for (let k = 0; k < 8; k++) { const f = st.flip ? 7 - k : k; g.fillText(FILES[f], k * Z + Z - 10, 8 * Z - 4); g.fillText(String(st.flip ? k + 1 : 8 - k), 3, k * Z + 13); }
    g.strokeStyle = "#000"; g.lineWidth = 2; g.strokeRect(1, 1, 8 * Z - 2, 8 * Z - 2);
    msg.textContent = status();
    const capTxt = arr => arr.map(p => ({ P: "peão", N: "cavalo", B: "bispo", R: "torre", Q: "dama" }[p.toUpperCase()] || "")).join(", ");
    capW.textContent = "Brancas capturaram: " + (capTxt(S0.cap.w) || "—"); capB.textContent = "Pretas capturaram: " + (capTxt(S0.cap.b) || "—");
    list.replaceChildren(...S0.moves.reduce((a, mv, k) => { if (k % 2 === 0) a.push(h("span", {}, (k / 2 + 1) + ". " + mv)); else a[a.length - 1].appendChild(document.createTextNode(" " + mv)); return a; }, []));
    keepPut("chess2", { S0, hist: hist.slice(-40) });
  };
  const doMove = m => { const name = moveName(S0, m); hist.push(JSON.stringify(S0)); S0 = applyMove(S0, m); S0.moves = S0.moves.concat([name]); const key = S0.b.join("") + S0.turn; S0.reps = Object.assign({}, S0.reps, { [key]: (S0.reps[key] || 0) + 1 }); sel = null; targets = []; draw(); maybeAI(); };
  const maybeAI = () => { if (st.mode === "2p" || over()) return; const ai = st.flip ? "w" : "b"; if (S0.turn !== ai) return; thinking = true; draw();
    setTimeout(() => { const m = bestMove(S0, st.mode); thinking = false; if (m) { if (m.promo) m.promo = "Q"; doMove(m); } else draw(); }, 60); };
  const tap = k => { if (thinking || over() || promoWait) return; const i = vis(k), me = S0.turn;
    if (st.mode !== "2p" && me === (st.flip ? "w" : "b")) return;
    if (sel !== null && targets.indexOf(i) >= 0) { const ms = legalMoves(S0).filter(m => m.f === sel && m.t === i);
      if (ms.length > 1 && ms[0].promo) { promoWait = ms; promoBox.replaceChildren(h("b", {}, "Promover para: "), ...["Q", "R", "B", "N"].map(q => btn({ Q: "Dama", R: "Torre", B: "Bispo", N: "Cavalo" }[q], () => { const mm = promoWait.find(x => x.promo === q); promoWait = null; promoBox.replaceChildren(); doMove(mm); }, q === "Q" ? "solid" : ""))); return; }
      return doMove(ms[0]); }
    if (sideOf(S0.b[i]) === me) { sel = i; targets = legalMoves(S0).filter(m => m.f === i).map(m => m.t); if (!targets.length) msg.textContent = inCheck(S0, me) ? "Você está em xeque: essa peça não resolve." : "Essa peça não tem lances agora."; draw(); if (!targets.length) msg.textContent = inCheck(S0, me) ? "Você está em xeque: essa peça não resolve." : "Essa peça não tem lances agora."; }
    else { sel = null; targets = []; draw(); } };
  onPointer(c, e => { const p = ptr(c, e); tap(Math.floor(p[1] / Z) * 8 + Math.floor(p[0] / Z)); });
  const newGame = () => { S0 = chessStart(); hist = []; sel = null; targets = []; promoWait = null; promoBox.replaceChildren(); draw(); maybeAI(); };
  const drawTop = () => top.replaceChildren(segTabs([["2p", "2 jogadores"], ["facil", "PC fácil"], ["medio", "PC médio"], ["dificil", "PC difícil"]], st.mode, k => { st.mode = k; save(); drawTop(); newGame(); }));
  c.className += " smooth"; b.append(top, msg, capB, c, capW, promoBox, h("div", { class: "row" },
    btn("Desfazer", () => { if (!hist.length || thinking) return; const n = st.mode === "2p" ? 1 : Math.min(2, hist.length); for (let k = 0; k < n - 1; k++) hist.pop(); S0 = JSON.parse(hist.pop()); sel = null; targets = []; promoWait = null; promoBox.replaceChildren(); draw(); }),
    btn("Virar tabuleiro", () => { st.flip = !st.flip; save(); sel = null; targets = []; draw(); maybeAI(); }),
    btn("Novo jogo", newGame, "solid")), h("div", { class: "lbl2" }, "Lances"), list,
    h("p", { class: "muted" }, "Toque numa peça: as casas possíveis ficam marcadas (bolinha = andar, anel = capturar). Contra o PC você joga com as brancas; use Virar tabuleiro para jogar com as pretas."));
  drawTop();
  const sv = keepGet("chess2"); if (sv && sv.S0 && sv.S0.b) { S0 = sv.S0; hist = sv.hist || []; draw(); maybeAI(); } else newGame();
});
