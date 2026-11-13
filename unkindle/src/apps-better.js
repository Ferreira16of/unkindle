"use strict";
/* Apps refeitos: galeria, curiosidades, bichos, conversores, NASA e jogos (forca, dino, Untetris, damas, caça-palavras). */

/* ---------- Galeria na conta ---------- */
function canvasBlob(c) {
  const d = c.toDataURL("image/png"), bin = atob(d.split(",")[1]), u = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
  return new Blob([u], { type: "image/png" });
}
function saveToGallery(c, base) {
  if (!remote) return toast("A conta não está configurada.");
  if (!session) { toast("Entre na sua conta para salvar na galeria"); return pages.auth("in"); }
  const d = new Date(), name = "galeria/" + (base || "desenho") + "-" + d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate()) + "-" + pad2(d.getHours()) + pad2(d.getMinutes()) + pad2(d.getSeconds()) + ".png";
  toast("Salvando na galeria…");
  return objUp(name, canvasBlob(c), "image/png").then(() => toast("Salvo na sua galeria"), e => toast(/not found/i.test(e.message) ? "Ative os arquivos no Supabase (supabase.sql)" : "Não foi possível salvar"));
}
function galleryBtn(c, base, prep) { return btn("Salvar na galeria", () => { const cc = prep ? prep() : c; saveToGallery(cc, base); }, "solid"); }

add("gallery", "Galeria", "image", "Essenciais", b => {
  const body = h("div"); b.append(body);
  if (!session) return body.append(h("div", { class: "card", style: "text-align:center" }, h("p", {}, h("b", {}, "Seus desenhos ficam na sua conta.")), h("p", { class: "muted" }, "Entre para ver a galeria em qualquer aparelho."), btn("Entrar ou criar conta", () => pages.auth("in"), "solid wide")));
  const grid = h("div", { class: "gal" }), st = h("p", { class: "muted" }, "Carregando…");
  const list = () => filesList("galeria").then(all => {
    st.textContent = all.length ? all.length + (all.length === 1 ? " imagem" : " imagens") : "";
    if (!all.length) return grid.replaceChildren(h("div", { class: "empty2" }, "Nada aqui ainda. Nos apps de desenho, toque em Salvar na galeria."));
    return signMany(all.map(f => "galeria/" + f.name)).then(urls => grid.replaceChildren(...all.map((f, i) => h("div", { class: "gi", onclick: () => view(f, urls[i]) }, h("img", { src: urls[i], alt: f.name })))));
  }).catch(e => { st.textContent = /not found/i.test(e.message) ? "A galeria ainda não foi ativada no Supabase (rode o supabase.sql)." : "Erro: " + pt(e.message); });
  const view = (f, u) => subView(b, () => {
    body.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Galeria"), h("img", { class: "aimg", src: u, alt: "" }), h("p", { class: "muted" }, f.name),
      btn("Apagar", () => { if (confirm("Apagar esta imagem da sua conta?")) fileDel("galeria/" + f.name).then(() => history.back(), () => toast("Não foi possível apagar")); }));
  }, () => { body.replaceChildren(st, grid); list(); });
  body.append(st, grid); list();
});

/* ---------- Diversão ---------- */
function ptBR(text) { return api("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(String(text).slice(0, 480)) + "&langpair=en|pt-br").then(j => txt(j.responseData.translatedText)); }
add("x_fato", "Fato curioso", "bulb", "Diversão", b => {
  const out = h("div", { class: "fact" });
  const go = () => { out.replaceChildren(note("Buscando um fato…"));
    api("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en").then(j => ptBR(j.text).then(t => t, () => j.text)).then(t => out.replaceChildren(h("div", { class: "qmark" }, "?"), h("p", { class: "ftx" }, t)), () => out.replaceChildren(para(NOCONN))); };
  b.append(out, btn("Outro fato", go, "solid wide")); go();
});
function petApp(id, n, getter) {
  add(id, n, "paw", "Diversão", b => {
    const pic = h("div", { class: "pet" }), cap = h("div");
    const go = () => { pic.replaceChildren(note("Buscando…")); cap.replaceChildren();
      getter().then(r => { const im = h("img", { src: r.img, alt: n }); pic.replaceChildren(im); cap.replaceChildren(r.title ? h("h2", { class: "ah" }, r.title) : null, r.text ? h("p", { class: "ftx" }, r.text) : null); }, () => pic.replaceChildren(para(NOCONN))); };
    b.append(pic, cap, btn("Outro", go, "solid wide")); go();
  });
}
petApp("x_gato", "Gatos", () => Promise.all([api("https://api.thecatapi.com/v1/images/search"), api("https://catfact.ninja/fact").then(j => ptBR(j.fact), () => "")]).then(r => ({ img: r[0][0].url, title: "Você sabia?", text: r[1] })));
const RACAS = { labrador: "Labrador", retriever: "Retriever", husky: "Husky", pug: "Pug", beagle: "Beagle", poodle: "Poodle", bulldog: "Buldogue", boxer: "Boxer", corgi: "Corgi", dachshund: "Dachshund (salsicha)", shihtzu: "Shih-tzu", chihuahua: "Chihuahua", collie: "Collie", germanshepherd: "Pastor-alemão", rottweiler: "Rottweiler", maltese: "Maltês", pomeranian: "Lulu-da-pomerânia", terrier: "Terrier", spaniel: "Spaniel", akita: "Akita", samoyed: "Samoieda", doberman: "Dobermann", dalmatian: "Dálmata", shiba: "Shiba" };
/* Cachorros: várias fontes (se uma sair do ar, tenta a próxima) */
const dogNome = n => { const k = String(n || "").toLowerCase().replace(/[^a-z]/g, ""); for (const r in RACAS) if (k.indexOf(r) >= 0) return RACAS[r]; return n ? String(n).charAt(0).toUpperCase() + String(n).slice(1) : ""; };
const dogSrc = [
  () => api("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg,png").then(j => { const d = j[0]; if (!d || !d.url) throw 0; return { img: d.url, title: d.breeds && d.breeds[0] ? "Raça: " + dogNome(d.breeds[0].name) : "" }; }),
  () => api("https://dog.ceo/api/breeds/image/random").then(j => { const m = /breeds\/([^/]+)\//.exec(j.message), k = m ? m[1].split("-")[0] : ""; return { img: j.message, title: k ? "Raça: " + dogNome(k) : "" }; }),
  () => api("https://random.dog/woof.json?filter=mp4,webm,gif").then(j => { if (!/\.(jpe?g|png)$/i.test(j.url) || j.fileSizeBytes > 3e6) throw 0; return { img: j.url, title: "" }; })
];
const dogAny = (i = 0) => i >= dogSrc.length ? Promise.reject(new Error("sem fonte")) : dogSrc[i]().catch(() => dogAny(i + 1));
petApp("x_cao", "Cachorros", () => dogAny());

/* ---------- Conversor de unidades ---------- */
const UNI = {
  Comprimento: { m: ["metro", 1], km: ["quilômetro", 1000], cm: ["centímetro", .01], mm: ["milímetro", .001], mi: ["milha", 1609.344], yd: ["jarda", .9144], ft: ["pé", .3048], in: ["polegada", .0254] },
  Peso: { kg: ["quilo", 1], g: ["grama", .001], t: ["tonelada", 1000], lb: ["libra", .45359237], oz: ["onça", .028349523] },
  Volume: { l: ["litro", 1], ml: ["mililitro", .001], m3: ["metro cúbico", 1000], gal: ["galão (EUA)", 3.785411784], xic: ["xícara", .24], cs: ["colher de sopa", .015] },
  Área: { m2: ["metro²", 1], km2: ["quilômetro²", 1e6], ha: ["hectare", 1e4], alq: ["alqueire paulista", 24200], ft2: ["pé²", .09290304], ac: ["acre", 4046.8564224] },
  Velocidade: { kmh: ["km/h", 1], ms: ["m/s", 3.6], mph: ["milha/h", 1.609344], kn: ["nó", 1.852] },
  Temperatura: { c: ["Celsius", 0], f: ["Fahrenheit", 0], k: ["Kelvin", 0] }
};
const toC = (v, u) => u === "c" ? v : u === "f" ? (v - 32) * 5 / 9 : v - 273.15, fromC = (v, u) => u === "c" ? v : u === "f" ? v * 9 / 5 + 32 : v + 273.15;
const fmt = v => isFinite(v) ? num(v, Math.abs(v) >= 100 ? 2 : Math.abs(v) >= 1 ? 3 : 6).replace(/,?0+$/, "").replace(/,$/, "") : "—";
add("conv", "Conversor", "conv", "Ferramentas", b => {
  const st = X("convapp", { cat: "Comprimento", a: "km", z: "mi", v: "1" });
  const top = h("div"), box = h("div"); b.append(top, box);
  const draw = () => {
    const U = UNI[st.cat]; if (!U[st.a] || !U[st.z]) { const k = Object.keys(U); st.a = k[0]; st.z = k[1]; }
    top.replaceChildren(segTabs(Object.keys(UNI).map(k => [k, k]), st.cat, k => { st.cat = k; save(); draw(); }));
    const opt = cur => Object.keys(U).map(k => h("option", { value: k, selected: k === cur ? "selected" : false }, U[k][0]));
    const v = inp("Valor", "number", { value: st.v }), a = h("select", {}, ...opt(st.a)), z = h("select", {}, ...opt(st.z)), res = h("div", { class: "big" }), sub = h("p", { class: "muted", style: "text-align:center" });
    const calc = () => { st.v = v.value; st.a = a.value; st.z = z.value; save(); const x = parseFloat(String(v.value).replace(",", "."));
      const r = st.cat === "Temperatura" ? fromC(toC(x, st.a), st.z) : x * U[st.a][1] / U[st.z][1];
      res.textContent = isFinite(x) ? fmt(r) + " " + U[st.z][0] : "—"; sub.textContent = isFinite(x) ? fmt(x) + " " + U[st.a][0] + " =" : "Digite um valor"; };
    v.oninput = calc; a.onchange = calc; z.onchange = calc;
    box.replaceChildren(h("div", { class: "cvbox" }, h("label", {}, "De"), h("div", { class: "bar" }, h("span", {}, v), h("span", { style: "width:45%" }, a)),
      h("div", { style: "text-align:center" }, h("button", { class: "sbtn", "aria-label": "Inverter", onclick: () => { const t = st.a; st.a = st.z; st.z = t; save(); draw(); } }, ic("up", 16), ic("down", 16))),
      h("label", {}, "Para"), h("div", { class: "bar" }, h("span", { style: "width:100%" }, z))), sub, res);
    calc();
  };
  draw();
});

/* ---------- Conversor de moedas ---------- */
const MNOME = { BRL: "Real", USD: "Dólar americano", EUR: "Euro", GBP: "Libra esterlina", ARS: "Peso argentino", JPY: "Iene", CAD: "Dólar canadense", AUD: "Dólar australiano", CHF: "Franco suíço", CNY: "Yuan", MXN: "Peso mexicano", CLP: "Peso chileno", UYU: "Peso uruguaio", PYG: "Guarani", COP: "Peso colombiano", PEN: "Sol peruano", INR: "Rúpia indiana", KRW: "Won", ZAR: "Rand", AED: "Dirham", TRY: "Lira turca", SEK: "Coroa sueca", NOK: "Coroa norueguesa", NZD: "Dólar neozelandês" };
const rateCache = {};
function rates(base) { if (rateCache[base] && Date.now() - rateCache[base].t < 36e5) return Promise.resolve(rateCache[base].r); return api("https://open.er-api.com/v6/latest/" + base).then(j => { rateCache[base] = { t: Date.now(), r: j.rates }; return j.rates; }); }
add("f_conversor", "Conversor de moedas", "coin", "Finanças", b => {
  const st = X("moedas", { a: "USD", z: "BRL", v: "100" });
  const opt = cur => Object.keys(MNOME).map(k => h("option", { value: k, selected: k === cur ? "selected" : false }, k + " · " + MNOME[k]));
  const v = inp("Valor", "number", { value: st.v }), a = h("select", {}, ...opt(st.a)), z = h("select", {}, ...opt(st.z)), res = h("div", { class: "big" }), sub = h("p", { class: "muted", style: "text-align:center" }), tbl = h("div");
  const calc = () => {
    st.v = v.value; st.a = a.value; st.z = z.value; save(); res.textContent = "…";
    rates(st.a).then(r => { const x = parseFloat(String(v.value).replace(",", ".")) || 0, k = r[st.z]; res.textContent = num(x * k, 2) + " " + st.z; sub.textContent = "1 " + st.a + " = " + num(k, 4) + " " + st.z + " · cotação de referência";
      rates("BRL").then(rb => tbl.replaceChildren(h("div", { class: "lbl2" }, "Em reais hoje"), kv(["USD", "EUR", "GBP", "ARS", "JPY"].map(c => [c + " · " + MNOME[c], "R$ " + num(1 / rb[c], c === "ARS" || c === "JPY" ? 4 : 2)])))); },
    () => { res.textContent = "—"; sub.textContent = NOCONN; });
  };
  v.oninput = calc; a.onchange = calc; z.onchange = calc;
  b.append(h("div", { class: "cvbox" }, h("label", {}, "Valor"), v, h("label", {}, "De"), a,
    h("div", { style: "text-align:center" }, h("button", { class: "sbtn", "aria-label": "Inverter", onclick: () => { const t = a.value; a.value = z.value; z.value = t; calc(); } }, ic("up", 16), ic("down", 16))),
    h("label", {}, "Para"), z), sub, res, tbl); calc();
});

/* ---------- Imagens da NASA ---------- */
const TEMAS = [["moon", "Lua"], ["mars", "Marte"], ["saturn", "Saturno"], ["jupiter", "Júpiter"], ["galaxy", "Galáxias"], ["nebula", "Nebulosas"], ["earth", "Terra"], ["astronaut", "Astronautas"], ["rocket launch", "Lançamentos"]];
add("m_nasa", "Imagens da NASA", "image", "Mundo", b => {
  const st = X("nasa", { q: "moon" });
  const top = h("div"), body = h("div"); b.append(top, body);
  const search = q => { body.replaceChildren(note("Buscando imagens…"));
    api("https://images-api.nasa.gov/search?media_type=image&q=" + encodeURIComponent(q)).then(j => {
      const it = j.collection.items.filter(x => x.links && x.links[0]).slice(0, 24);
      body.replaceChildren(it.length ? h("div", { class: "gal" }, ...it.map(x => h("div", { class: "gi", onclick: () => view(x) }, h("img", { src: x.links[0].href, alt: x.data[0].title })))) : note("Nada encontrado."));
    }, () => body.replaceChildren(para(NOCONN))); };
  const view = x => subView(b, () => {
    const d = x.data[0], desc = h("p", { class: "ftx" }, note("Traduzindo a descrição…"));
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Imagens"));
    body.replaceChildren(h("img", { class: "aimg", src: x.links[0].href.replace("~thumb", "~medium"), alt: d.title }), h("h2", { class: "ah" }, d.title), h("p", { class: "muted" }, dbr(d.date_created) + (d.center ? " · " + d.center : "")), desc);
    window.scrollTo(0, 0);
    const en = txt(d.description || "").slice(0, 480); if (en) ptBR(en).then(t => desc.replaceChildren(t), () => desc.replaceChildren(en)); else desc.replaceChildren();
  }, draw);
  const go = q => { if (!q) return; st.q = q; save(); search(q); };
  function draw() {
    const qi = inp("Buscar (ex.: cometa, eclipse)", "search");
    const typed = () => { const t = qi.value.trim(); if (!t) return; body.replaceChildren(note("Buscando…")); api("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(t) + "&langpair=pt-br|en").then(j => go(txt(j.responseData.translatedText)), () => go(t)); };
    qi.addEventListener("keydown", e => e.key === "Enter" && typed());
    top.replaceChildren(segTabs(TEMAS, st.q, go), h("div", { class: "row" }, qi, btn("Buscar", typed, "solid")));
    search(st.q);
  }
  draw();
});

/* ---------- Forca (com a forca desenhada) ---------- */
const PALAVRAS = { Animais: ["girafa", "elefante", "tartaruga", "borboleta", "jacare", "pinguim", "tamandua", "capivara", "papagaio", "golfinho"], Frutas: ["abacaxi", "melancia", "jabuticaba", "goiaba", "maracuja", "laranja", "morango", "pitanga", "acerola", "caju"], Lugares: ["biblioteca", "praia", "montanha", "floresta", "cachoeira", "deserto", "mercado", "escola", "hospital", "aeroporto"], Objetos: ["guarda-chuva", "relogio", "bicicleta", "travesseiro", "lanterna", "tesoura", "computador", "geladeira", "escada", "chaveiro"] };
add("forca", "Forca", "forca", "Jogos", b => {
  const c = cv(220, 220), g = c.getContext("2d"), word = h("div", { class: "hword" }), info = h("p", { class: "score" }), kb = h("div", { class: "keys" }); let w, cat, got, err;
  const px = (x, y, wd, ht) => g.fillRect(x, y, wd, ht);
  const pic = () => {
    g.fillStyle = "#fff"; g.fillRect(0, 0, 220, 220); g.fillStyle = "#000";
    px(20, 200, 120, 8); px(40, 20, 8, 184); px(40, 20, 110, 8); px(142, 20, 6, 30); px(48, 40, 8, 8); px(56, 32, 8, 8);
    if (err > 0) { px(130, 50, 30, 6); px(130, 74, 30, 6); px(126, 54, 6, 22); px(158, 54, 6, 22); }
    if (err > 1) px(142, 80, 6, 50);
    if (err > 2) { px(132, 90, 10, 6); px(124, 96, 8, 6); px(118, 102, 6, 12); }
    if (err > 3) { px(148, 90, 10, 6); px(158, 96, 8, 6); px(166, 102, 6, 12); }
    if (err > 4) { px(136, 130, 6, 10); px(130, 140, 6, 14); px(124, 154, 6, 8); }
    if (err > 5) { px(148, 130, 6, 10); px(154, 140, 6, 14); px(160, 154, 6, 8); px(136, 60, 6, 6); px(148, 60, 6, 6); }
  };
  const draw = () => {
    const won = w.split("").every(ch => ch === "-" || got.indexOf(ch) >= 0), lost = err >= 6;
    word.textContent = w.split("").map(ch => ch === "-" ? "-" : got.indexOf(ch) >= 0 || lost ? ch.toUpperCase() : "_").join(" ");
    info.textContent = won ? "Você ganhou!" : lost ? "Enforcado! Era: " + w.toUpperCase() : "Dica: " + cat + "  ·  Erros: " + err + "/6";
    kb.replaceChildren(..."abcdefghijklmnopqrstuvwxyz".split("").map(ch => h("button", { class: got.indexOf(ch) >= 0 ? (w.indexOf(ch) >= 0 ? "solid" : "") : "", disabled: got.indexOf(ch) >= 0 || won || lost ? "disabled" : false, onclick: () => { got.push(ch); if (w.indexOf(ch) < 0) err++; draw(); } }, ch.toUpperCase())));
    pic(); keepPut("forca", { w, cat, got, err });
  };
  const start = () => { cat = pick(Object.keys(PALAVRAS)); w = pick(PALAVRAS[cat]); got = []; err = 0; draw(); };
  b.append(h("div", { class: "hang" }, c), word, info, kb, btn("Nova palavra", start, "solid")); const svF = keepGet("forca"); if (svF && svF.w) { w = svF.w; cat = svF.cat; got = svF.got; err = svF.err; draw(); } else start();
});

/* ---------- Dino (pula os cactos) ---------- */
const DINO = ["........######..", ".......##.#####.", ".......########.", ".......########.", ".......####.....", "#......######...", "#.....#####.....", "##...#######....", "###.########....", ".##########.....", "..########......", "...######.......", "....##.##.......", "....#...#.......", "....##..##......"];
const DINO2 = DINO.slice(0, 12).concat(["....##.##.......", "....##..#.......", "........##......"]);
const CACTO = ["..##..", "..##..", "#.##..", "#.##.#", "####.#", "..####", "..##..", "..##..", "..##..", "..##.."];
function sprite(g, rows, x, y, s) { rows.forEach((r, j) => { for (let i = 0; i < r.length; i++) if (r[i] === "#") g.fillRect(x + i * s, y + j * s, s, s); }); }
add("dino", "Dino", "dino", "Jogos", b => {
  const W2 = 600, H2 = 200, GY = 170, c = cv(W2, H2), g = c.getContext("2d"), info = h("p", { class: "score" });
  let y, vy, obs, sc, dead, spd, t, started, best = X("best_dino", 0);
  const reset = () => { y = 0; vy = 0; obs = []; sc = 0; dead = false; spd = 7; t = 0; started = true; };
  const jump = () => { if (!started || dead) return reset(); if (y === 0) vy = 15; };
  onPointer(c, jump); keys(b, k => (k === " " || k === "ArrowUp") && jump());
  started = false; y = 0; obs = []; sc = 0; dead = false; spd = 7; t = 0;
  loop(b, () => {
    if (started && !dead) {
      t++; sc++; spd += .004; vy -= 1.3; y += vy; if (y < 0) { y = 0; vy = 0; }
      if (t > 30 && (!obs.length || obs[obs.length - 1].x < W2 - 180 - rnd(220)) && Math.random() < .05) obs.push({ x: W2, n: 1 + (Math.random() < .3 ? 1 : 0) });
      obs.forEach(o => o.x -= spd); obs = obs.filter(o => o.x > -40);
      if (obs.some(o => o.x < 92 && o.x + 18 * o.n > 58 && y < 36)) { dead = true; if (Math.floor(sc / 4) > best) { best = Math.floor(sc / 4); S.x.best_dino = best; save(); } }
    }
    g.fillStyle = "#fff"; g.fillRect(0, 0, W2, H2); g.fillStyle = "#000";
    g.fillRect(0, GY, W2, 2); for (let i = 0; i < 12; i++) g.fillRect(((i * 53 - t * spd) % W2 + W2) % W2, GY + 8 + (i % 3) * 5, 4 + (i % 2) * 4, 2);
    sprite(g, (started && !dead && y === 0 && Math.floor(t / 4) % 2) ? DINO2 : DINO, 40, GY - 45 - y, 3);
    obs.forEach(o => { for (let k = 0; k < o.n; k++) sprite(g, CACTO, o.x + k * 18, GY - 30, 3); });
    g.font = "bold 18px Bookerly, Literata, Georgia, serif"; g.textAlign = "right"; g.fillText("HI " + String(best).padStart(5, "0") + "  " + String(Math.floor(sc / 4)).padStart(5, "0"), W2 - 12, 28);
    g.textAlign = "center"; if (!started) g.fillText("TOQUE PARA COMEÇAR", W2 / 2, 90); if (dead) g.fillText("G A M E   O V E R", W2 / 2, 80);
    info.textContent = dead ? "Toque na tela para jogar de novo" : "Toque na tela ou no botão Pular para saltar os cactos";
  }, 33);
  b.append(c, info, btn("Pular", jump, "solid wide"));
});

/* ---------- Untetris ---------- */
add("blocks", "Untetris", "grid", "Jogos", b => {
  const W = 10, H = 20, S2 = 18, c = cv(W * S2, H * S2), g = c.getContext("2d"), nx = cv(4 * 14, 4 * 14), ng = nx.getContext("2d"), info = h("div", { class: "tstat" });
  const SH = [[[0, 1], [1, 1], [2, 1], [3, 1]], [[0, 0], [1, 0], [0, 1], [1, 1]], [[0, 1], [1, 1], [2, 1], [1, 0]], [[0, 0], [0, 1], [1, 1], [2, 1]], [[2, 0], [0, 1], [1, 1], [2, 1]], [[1, 0], [2, 0], [0, 1], [1, 1]], [[0, 0], [1, 0], [1, 1], [2, 1]]];
  let bd, p, nxt, px, py, sc, lines, lvl, dead, paused, tick = 0;
  const fits = (s, x, y) => s.every(([a, d]) => x + a >= 0 && x + a < W && y + d < H && (y + d < 0 || !bd[y + d][x + a]));
  const rot = s => { const r = s.map(([a, d]) => [-d, a]), mx = Math.min(...r.map(v => v[0])), my = Math.min(...r.map(v => v[1])); return r.map(([a, d]) => [a - mx, d - my]); };
  const spawn = () => { p = nxt || pick(SH); nxt = pick(SH); px = 3; py = -1; if (!fits(p, px, py + 1)) dead = true; };
  const lock = () => { p.forEach(([a, d]) => { if (py + d >= 0) bd[py + d][px + a] = 1; }); const keep = bd.filter(r => !r.every(Boolean)), n = H - keep.length;
    lines += n; sc += [0, 100, 300, 500, 800][n] * lvl; lvl = 1 + Math.floor(lines / 10); bd = [...Array.from({ length: n }, () => Array(W).fill(0)), ...keep]; spawn(); };
  const down = () => { if (fits(p, px, py + 1)) { py++; return true; } lock(); return false; };
  const act = k => {
    if (dead) { if (k === "rot" || k === " " || k === "ArrowUp") reset(); return; }
    if (k === "pause") { paused = !paused; draw(); return; } if (paused) return;
    if (k === "ArrowLeft" && fits(p, px - 1, py)) px--;
    if (k === "ArrowRight" && fits(p, px + 1, py)) px++;
    if (k === "ArrowDown") { if (down()) sc += 1; }
    if (k === "ArrowUp" || k === "rot") { const r = rot(p); for (const dx of [0, -1, 1, -2, 2]) if (fits(r, px + dx, py)) { p = r; px += dx; break; } }
    if (k === " " || k === "drop") { while (fits(p, px, py + 1)) { py++; sc += 2; } lock(); }
    draw();
  };
  const cell = (gg, x, y, s, ghost) => { if (ghost) { gg.strokeRect(x + 2.5, y + 2.5, s - 5, s - 5); return; } gg.fillRect(x + 1, y + 1, s - 2, s - 2); gg.fillStyle = "#fff"; gg.fillRect(x + 4, y + 4, s - 8, s - 8); gg.fillStyle = "#000"; gg.fillRect(x + 6, y + 6, s - 12, s - 12); };
  const draw = () => {
    g.fillStyle = "#fff"; g.fillRect(0, 0, W * S2, H * S2); g.fillStyle = "#000"; g.strokeStyle = "#000"; g.lineWidth = 1;
    for (let x = 1; x < W; x++) for (let y = 1; y < H; y++) g.fillRect(x * S2, y * S2, 1, 1);
    bd.forEach((r, y) => r.forEach((v, x) => v && cell(g, x * S2, y * S2, S2)));
    if (!dead) { let gy = py; while (fits(p, px, gy + 1)) gy++; p.forEach(([a, d]) => gy + d >= 0 && cell(g, (px + a) * S2, (gy + d) * S2, S2, true)); p.forEach(([a, d]) => py + d >= 0 && cell(g, (px + a) * S2, (py + d) * S2, S2)); }
    if (dead || paused) { g.fillStyle = "#fff"; g.fillRect(10, 150, W * S2 - 20, 60); g.fillStyle = "#000"; g.strokeRect(10.5, 150.5, W * S2 - 21, 59); g.font = "bold 16px Bookerly, Literata, Georgia, serif"; g.textAlign = "center"; g.fillText(dead ? "FIM DE JOGO" : "PAUSADO", W * S2 / 2, 178); g.font = "12px Bookerly, Literata, Georgia, serif"; g.fillText(dead ? "toque em Girar" : "toque em Pausa", W * S2 / 2, 198); }
    ng.fillStyle = "#fff"; ng.fillRect(0, 0, 56, 56); ng.fillStyle = "#000"; nxt.forEach(([a, d]) => cell(ng, a * 14, 14 + d * 14, 14));
    if (!dead) keepPut("tetris", { bd, p, nxt, px, py, sc, lines, lvl }); else keepDel("tetris");
    info.replaceChildren(h("div", {}, h("small", {}, "PONTOS"), h("b", {}, String(sc))), h("div", {}, h("small", {}, "LINHAS"), h("b", {}, String(lines))), h("div", {}, h("small", {}, "NÍVEL"), h("b", {}, String(lvl))), h("div", {}, h("small", {}, "PRÓXIMA")), nx);
  };
  const reset = () => { bd = Array.from({ length: H }, () => Array(W).fill(0)); sc = 0; lines = 0; lvl = 1; dead = false; paused = false; nxt = null; spawn(); draw(); };
  keys(b, k => act(k === "p" ? "pause" : k));
  loop(b, () => { if (dead || paused) return; tick++; if (tick >= Math.max(2, 12 - lvl)) { tick = 0; down(); draw(); } }, 50);
  /* toque no tabuleiro: terço esquerdo/direito move, meio gira; arrastar para baixo derruba */
  let sx = 0, sy = 0;
  onPointer(c, e => { sx = e.clientX; sy = e.clientY; }, null, e => { const dx = e.clientX - sx, dy = e.clientY - sy;
    if (dy > 50 && Math.abs(dy) > Math.abs(dx)) return act("drop");
    if (Math.abs(dx) > 30) return act(dx < 0 ? "ArrowLeft" : "ArrowRight");
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width; act(x < .33 ? "ArrowLeft" : x > .67 ? "ArrowRight" : "rot"); });
  /* botões grandes; segurar repete */
  const hold = (label, k, cls) => { let iv = null, tm = null; const stop = () => { clearTimeout(tm); clearInterval(iv); tm = iv = null; };
    const el = h("button", { class: "tb2 " + (cls || "") }, label);
    const startH = e => { if (e && e.preventDefault) e.preventDefault(); act(k); if (k === "ArrowLeft" || k === "ArrowRight" || k === "ArrowDown") tm = setTimeout(() => { iv = setInterval(() => act(k), 70); }, 220); };
    el.addEventListener("touchstart", startH, false); el.addEventListener("touchend", stop, false); el.addEventListener("mousedown", e => { if (!("ontouchstart" in window)) startH(e); }, false); el.addEventListener("mouseup", stop, false); el.addEventListener("mouseleave", stop, false);
    return el; };
  onClose(b, () => {});
  b.append(h("div", { class: "tet" }, h("div", { class: "tl2" }, c), info),
    h("table", { class: "tpad" }, h("tbody", {},
      h("tr", {}, h("td", {}, hold(ic("back", 32), "ArrowLeft")), h("td", {}, hold("GIRAR", "rot", "solid")), h("td", {}, hold(ic("fwd", 32), "ArrowRight"))),
      h("tr", {}, h("td", {}, hold("PAUSA", "pause")), h("td", {}, hold(ic("down", 32), "ArrowDown")), h("td", {}, hold("QUEDA", "drop"))))),
    h("p", { class: "muted" }, "Use os botões grandes, ou toque nas laterais do tabuleiro para mover e no meio para girar. Arrastar para baixo derruba a peça."));
  const svT = keepGet("tetris"); if (svT && svT.bd) { bd = svT.bd; p = svT.p; nxt = svT.nxt; px = svT.px; py = svT.py; sc = svT.sc; lines = svT.lines; lvl = svT.lvl; dead = false; paused = true; draw(); } else reset();
});

/* ---------- Damas (tabuleiro desenhado em canvas: funciona em qualquer navegador) ---------- */

/* ---------- Caça-palavras ---------- */
const CP = ["livro", "casa", "mesa", "gato", "pedra", "nuvem", "vento", "fogo", "terra", "flor", "chuva", "praia", "janela", "cadeira", "escola", "jardim", "lago", "ponte", "trem", "barco", "estrela", "planeta", "sorvete", "banana"];
add("wordsearch", "Caça-Palavras", "search", "Jogos", b => {
  const N = 10, tbl = h("table", { class: "ws" }), list = h("div", { class: "wsl" }), msg = h("p", { class: "score" }); let g, ws, found, a;
  const gen = () => { g = Array(N * N).fill(""); ws = []; found = {}; a = null; const D = [[1, 0], [0, 1], [1, 1], [-1, 0], [0, -1], [1, -1]];
    shuffle(CP).forEach(w0 => { if (ws.length >= 7) return; const w = w0.toUpperCase();
      for (let t = 0; t < 300; t++) { const [dx, dy] = pick(D), x = rnd(N), y = rnd(N), ex = x + dx * (w.length - 1), ey = y + dy * (w.length - 1); if (ex < 0 || ey < 0 || ex >= N || ey >= N) continue;
        let ok = true; for (let k = 0; k < w.length; k++) { const v = g[(y + dy * k) * N + x + dx * k]; if (v && v !== w[k]) { ok = false; break; } }
        if (ok) { for (let k = 0; k < w.length; k++) g[(y + dy * k) * N + x + dx * k] = w[k]; ws.push(w); break; } } });
    g = g.map(v => v || "ABCDEFGHIJLMNOPRSTUV"[rnd(20)]); msg.textContent = "Toque na primeira letra e depois na última letra da palavra."; draw(); };
  const draw = () => { const hit = {}; Object.keys(found).forEach(w => found[w].forEach(i => { hit[i] = 1; }));
    const rows = []; for (let r = 0; r < N; r++) rows.push(h("tr", {}, ...Array.from({ length: N }, (_, cc) => { const i = r * N + cc; return h("td", { class: (hit[i] ? "hit " : "") + (a === i ? "sel" : ""), onclick: () => tap(i) }, g[i]); })));
    tbl.replaceChildren(h("tbody", {}, ...rows));
    list.replaceChildren(...ws.map(w => h("span", { class: found[w] ? "got" : "" }, w)));
    if (ws.every(w => found[w])) msg.textContent = "Parabéns! Você achou todas as palavras.";
    keepPut("cacapal", { g, ws, found }); };
  const tap = i => {
    if (a === null) { a = i; msg.textContent = "Agora toque na última letra."; return draw(); }
    if (a === i) { a = null; msg.textContent = "Seleção cancelada."; return draw(); }
    const x0 = a % N, y0 = Math.floor(a / N), x1 = i % N, y1 = Math.floor(i / N), ddx = x1 - x0, ddy = y1 - y0; a = null;
    if (ddx && ddy && Math.abs(ddx) !== Math.abs(ddy)) { msg.textContent = "As letras precisam estar em linha reta."; return draw(); }
    const len = Math.max(Math.abs(ddx), Math.abs(ddy)) + 1, sx = Math.sign(ddx), sy = Math.sign(ddy), cells = Array.from({ length: len }, (_, k) => (y0 + sy * k) * N + x0 + sx * k);
    const s = cells.map(cc => g[cc]).join(""), r = s.split("").reverse().join(""), w = ws.find(x => x === s || x === r);
    if (w && !found[w]) { found[w] = cells; msg.textContent = "Achou: " + w + "!"; } else msg.textContent = w ? "Essa você já achou." : "“" + s + "” não está na lista.";
    draw();
  };
  b.append(msg, tbl, list, btn("Novo jogo", gen, "solid")); const svW = keepGet("cacapal"); if (svW && svW.g) { g = svW.g; ws = svW.ws; found = svW.found; a = null; msg.textContent = "Continuando o jogo salvo."; draw(); } else gen();
});
