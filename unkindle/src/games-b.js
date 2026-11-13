"use strict";
/* Jogos solo, parte B. */




add("trail", "Travessia", "map", "Jogos", b => {
  let s; const out = h("div"), log = h("ul", { class: "list" });
  const reset = () => { s = { d: 0, f: 20, hp: 10, m: 50, over: false }; log.replaceChildren(); draw(); };
  const say = t => log.prepend(h("li", {}, t));
  const day = kind => { if (s.over) return; s.f--; if (kind === "go") { s.d++; const r = rnd(6); if (r === 0) { s.hp--; say("Tempestade: -1 saúde."); } else if (r === 1) { s.f--; say("Uma ponte quebrada atrasou a viagem: -1 comida."); } else if (r === 2) { s.f += 2; say("Você achou frutas na trilha: +2 comida."); } else say("Dia tranquilo de caminhada."); }
    if (kind === "rest") { s.hp = Math.min(10, s.hp + 2); say("Você descansou: +2 saúde."); } if (kind === "hunt") { const g = rnd(5); s.f += g; if (rnd(4) === 0) { s.hp--; say("Você se machucou na caça: -1 saúde."); } say("Caçada: +" + g + " comida."); }
    if (kind === "buy") { if (s.m >= 10) { s.m -= 10; s.f += 5; say("Comprou comida: +5 (−10 moedas)."); } else { s.f++; say("Sem moedas suficientes."); } }
    if (s.d >= 20) { s.over = true; say("Você completou a travessia!"); } else if (s.f < 0 || s.hp <= 0) { s.over = true; say("Sua jornada terminou no dia " + s.d + "."); } draw(); };
  const draw = () => out.replaceChildren(h("p", {}, `Dia ${s.d}/20 · Comida ${Math.max(s.f, 0)} · Saúde ${s.hp} · Moedas ${s.m}`), h("div", { class: "row" }, btn("Avançar", () => day("go"), "solid"), btn("Descansar", () => day("rest")), btn("Caçar", () => day("hunt")), btn("Comprar comida", () => day("buy")), btn("Reiniciar", reset)));
  b.append(h("p", { class: "muted" }, "Chegue ao fim da trilha em 20 dias, cuidando de comida e saúde."), out, log); reset();
});

add("circle", "Perfect Circle", "target", "Jogos", b => {
  const c = cv(300, 300), g = c.getContext("2d"), msg = h("p", { class: "big" }, "Desenhe um círculo"); let pts = [], d = false; X("circle_best", 0);
  const clear = () => { g.clearRect(0, 0, 300, 300); g.fillStyle = "#000"; g.beginPath(); g.arc(150, 150, 3, 0, 7); g.fill(); };
  const pdown = e => { clear(); d = true; pts = [ptr(c, e)]; }; const pmove = e => { if (!d) return; const p = ptr(c, e), q = pts[pts.length - 1]; pts.push(p); g.lineWidth = 3; g.beginPath(); g.moveTo(q[0], q[1]); g.lineTo(p[0], p[1]); g.stroke(); };
  const pup = () => { if (!d) return; d = false; if (pts.length < 25) return msg.textContent = "Desenhe um traço maior."; const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length, rs = pts.map(p => Math.hypot(p[0] - cx, p[1] - cy)), m = rs.reduce((a, v) => a + v, 0) / rs.length;
    const dev = rs.reduce((a, v) => a + Math.abs(v - m), 0) / rs.length / m, gap = Math.hypot(pts[0][0] - pts.at(-1)[0], pts[0][1] - pts.at(-1)[1]) / m, sc = m < 20 ? 0 : Math.max(0, Math.round(100 - dev * 260 - gap * 30));
    if (sc > S.x.circle_best) { S.x.circle_best = sc; save(); } msg.textContent = `${sc}%  ·  Melhor: ${S.x.circle_best}%`; }; onPointer(c, pdown, pmove, pup); clear(); b.append(c, msg);
});


add("snake", "Cobra", "snake", "Jogos", b => {
  const N = 20, S2 = 15, c = cv(N * S2, N * S2), g = c.getContext("2d"), info = h("p"); let sn, dir, nd, ap, dead, sc;
  const reset = () => { sn = [[10, 10], [9, 10], [8, 10]]; dir = nd = [1, 0]; dead = false; sc = 0; food(); }; const food = () => { do ap = [rnd(N), rnd(N)]; while (sn.some(s => s[0] === ap[0] && s[1] === ap[1])); };
  const mv = k => { const m = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[k]; if (dead && m) return reset(); if (m && (m[0] + dir[0] || m[1] + dir[1])) nd = m; };
  keys(b, mv); reset();
  loop(b, () => { if (!dead) { dir = nd; const h0 = [sn[0][0] + dir[0], sn[0][1] + dir[1]]; if (h0[0] < 0 || h0[1] < 0 || h0[0] >= N || h0[1] >= N || sn.some(s => s[0] === h0[0] && s[1] === h0[1])) dead = true; else { sn.unshift(h0); if (h0[0] === ap[0] && h0[1] === ap[1]) { sc++; food(); } else sn.pop(); } }
    g.clearRect(0, 0, N * S2, N * S2); g.fillStyle = "#000"; sn.forEach((s, i) => { g.fillRect(s[0] * S2 + 1, s[1] * S2 + 1, S2 - 2, S2 - 2); if (i && i % 2) { g.fillStyle = "#fff"; g.fillRect(s[0] * S2 + 6, s[1] * S2 + 6, 3, 3); g.fillStyle = "#000"; } }); { const hx = sn[0][0] * S2, hy = sn[0][1] * S2; g.fillStyle = "#fff"; const e = dir[0] ? [[dir[0] > 0 ? 9 : 3, 3], [dir[0] > 0 ? 9 : 3, 9]] : [[3, dir[1] > 0 ? 9 : 3], [9, dir[1] > 0 ? 9 : 3]]; e.forEach(p => g.fillRect(hx + p[0], hy + p[1], 3, 3)); g.fillStyle = "#000"; g.fillRect(hx + 7 + dir[0] * 9, hy + 7 + dir[1] * 9, 2 + Math.abs(dir[1]) * 0, 2); } g.fillRect(ap[0] * S2 + 4, ap[1] * S2 + 2, S2 - 8, S2 - 4); g.fillRect(ap[0] * S2 + 2, ap[1] * S2 + 4, S2 - 4, S2 - 8); info.textContent = "Pontos: " + sc + (dead ? " · Fim! Aperte uma seta para reiniciar" : ""); }, 150);
  b.append(c, info, dpad(mv));
});


add("spelling", "Soletrando", "text", "Jogos", b => {
  const W = [["Aquilo que foge à regra", "exceção"], ["Quantidade além do necessário", "excesso"], ["Vantagem concedida a poucos", "privilégio"], ["Pelos acima dos olhos", "sobrancelha"], ["Pedir como direito", "reivindicar"], ["Auxiliar de uma autoridade", "assessor"], ["Conversa com opiniões opostas", "discussão"], ["Ideia fixa e persistente", "obsessão"], ["Que pode sofrer influência", "suscetível"], ["Ato de fazer o bem", "beneficência"], ["Parar completamente uma atividade", "paralisação"], ["Terra cercada de água", "ilha"], ["Profissional que conserta máquinas", "mecânico"], ["Fruta que dá em cacho, usada no vinho", "uva"]];
  let w, sc = 0, n = 0; const g = inp("Escreva a palavra, com acentos"), q = h("p", { class: "big" }), msg = h("p");
  const next = () => { w = pick(W); q.textContent = w[0]; g.value = ""; }; const chk = () => { n++; if (g.value.trim().toLowerCase() === w[1]) { sc++; msg.textContent = "Correto!"; } else msg.textContent = "A grafia certa é: " + w[1]; msg.textContent += `  (${sc}/${n})`; next(); };
  g.addEventListener("keydown", e => e.key === "Enter" && chk()); b.append(h("p", { class: "muted" }, "Leia a pista e escreva a palavra com a grafia correta."), q, h("div", { class: "row" }, g, btn("Verificar", chk, "solid")), msg); next();
});

add("sudoku", "Sudoku", "hash", "Jogos", b => {
  let sol, pz, fixed, cur = null; const grid = h("div", { style: "display:grid;grid-template-columns:repeat(9,1fr);max-width:400px;border:3px solid var(--line)" }), msg = h("p");
  const gen = () => { const R = [0, 1, 2], rows = shuffle(R).flatMap(g => shuffle(R).map(r => g * 3 + r)), cols = shuffle(R).flatMap(g => shuffle(R).map(c => g * 3 + c)), nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    sol = rows.map(r => cols.map(c => nums[(3 * (r % 3) + Math.floor(r / 3) + c) % 9])).flat(); pz = sol.slice(); shuffle([...Array(81).keys()]).slice(0, 42).forEach(i => pz[i] = 0); fixed = pz.map(v => !!v); cur = null; msg.textContent = ""; draw(); };
  const draw = () => grid.replaceChildren(...pz.map((v, i) => { const r = Math.floor(i / 9), c = i % 9; return h("button", { style: `min-height:0;aspect-ratio:1;padding:0;border-radius:0;border-width:1px;${c % 3 === 0 && c ? "border-left:3px solid var(--line);" : ""}${r % 3 === 0 && r ? "border-top:3px solid var(--line);" : ""}${fixed[i] ? "font-weight:900;" : ""}${cur === i ? "background:var(--fg);color:var(--bg)" : ""}`, "aria-label": "Casa", onclick: () => { cur = i; draw(); } }, v || ""); }));
  const put = n => { if (cur === null || fixed[cur]) return; pz[cur] = n; draw(); keepPut("sudoku", { sol, pz, fixed }); }, chk = () => { const bad = pz.some((v, i) => v && v !== sol[i]), full = pz.every(Boolean); msg.textContent = bad ? "Há números errados." : full ? "Resolvido! Parabéns!" : "Tudo certo até agora."; };
  b.append(grid, h("div", { class: "row" }, ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => btn(n, () => put(n))), btn("Apagar", () => put(0))), h("div", { class: "row" }, btn("Verificar", chk, "solid"), btn("Novo", () => { gen(); keepPut("sudoku", { sol, pz, fixed }); })), msg); const svS = keepGet("sudoku"); if (svS && svS.pz) { sol = svS.sol; pz = svS.pz; fixed = svS.fixed; draw(); } else { gen(); keepPut("sudoku", { sol, pz, fixed }); }
});



add("trivia", "Trivia", "bulb", "Jogos", b => {
  const Q = [["Qual é a capital do Brasil?", ["Rio de Janeiro", "Brasília", "Salvador", "São Paulo"], 1], ["Qual é o maior oceano do planeta?", ["Atlântico", "Pacífico", "Índico", "Ártico"], 1], ["Quantos planetas tem o Sistema Solar?", ["7", "8", "9", "10"], 1], ["Quem escreveu Dom Casmurro?", ["José de Alencar", "Machado de Assis", "Clarice Lispector", "Graciliano Ramos"], 1],
    ["Qual é o símbolo químico do oxigênio?", ["Ox", "O", "Og", "Os"], 1], ["Quantos lados tem um hexágono?", ["5", "6", "7", "8"], 1], ["Qual é o rio mais extenso do Brasil?", ["São Francisco", "Paraná", "Amazonas", "Tocantins"], 2], ["Em que ano o Brasil declarou independência?", ["1500", "1822", "1889", "1930"], 1], ["Qual é o maior planeta do Sistema Solar?", ["Saturno", "Júpiter", "Netuno", "Terra"], 1],
    ["Quem pintou a Mona Lisa?", ["Michelangelo", "Leonardo da Vinci", "Rafael", "Donatello"], 1], ["Em que continente fica o Egito?", ["Ásia", "África", "Europa", "Oceania"], 1], ["Qual é a raiz quadrada de 81?", ["7", "8", "9", "10"], 2], ["Qual é a moeda do Japão?", ["Won", "Iene", "Yuan", "Rupia"], 1], ["Qual mamífero é capaz de voar?", ["Pinguim", "Morcego", "Avestruz", "Tartaruga"], 1],
    ["Quantos jogadores de cada time ficam em campo no futebol?", ["9", "10", "11", "12"], 2], ["Que gás as plantas absorvem na fotossíntese?", ["Oxigênio", "Nitrogênio", "Gás carbônico", "Hélio"], 2], ["Qual é a capital da França?", ["Lyon", "Paris", "Marselha", "Nice"], 1], ["Quantos meses do ano têm pelo menos 28 dias?", ["1", "2", "12", "6"], 2], ["Qual é o menor país do mundo?", ["Mônaco", "Vaticano", "Malta", "Luxemburgo"], 1], ["Qual é o osso mais longo do corpo humano?", ["Tíbia", "Fêmur", "Úmero", "Rádio"], 1]];
  let qs, i, sc; const out = h("div");
  const start = () => { qs = shuffle(Q).slice(0, 10); i = 0; sc = 0; draw(); };
  const draw = () => { if (i >= qs.length) return out.replaceChildren(h("h3", {}, `Você acertou ${sc} de ${qs.length}`), btn("Jogar de novo", start, "solid")); const [q, o, a] = qs[i];
    out.replaceChildren(h("p", { class: "muted" }, `Pergunta ${i + 1}/${qs.length}`), h("h3", {}, q), ...o.map((t, k) => h("div", { class: "row" }, btn(t, () => { if (k === a) sc++; toast(k === a ? "Certo!" : "Era: " + o[a]); i++; draw(); })))); };
  b.append(out); start();
});




