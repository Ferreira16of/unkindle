"use strict";
/* Apps unificados: Notícias, Wikipédia, Dicionário, CEP e Clima. Tudo abre aqui dentro, sem mandar para outros sites. */

/* Abas pequenas dentro de um app */
function segTabs(opts, cur, onPick) {
  return h("div", { class: "segtabs" }, ...opts.map(o => h("button", { class: o[0] === cur ? "on" : "", onclick: () => onPick(o[0]) }, o[1])));
}
/* Subtela dentro de um app: o botão Voltar do navegador volta para a lista */
function subView(b, render, back) { pushSub(b, back); render(); }

/* Texto completo de uma página de notícia (via proxy público), só parágrafos */
/* 1º o leitor do próprio servidor do Unkindle (rápido); se não houver, um proxy público (mais lento) */
const PROXIES = [u => "/__fetch?url=" + encodeURIComponent(u), u => "https://api.allorigins.win/raw?url=" + encodeURIComponent(u)];
function fetchPage(url, i = 0) { return i >= PROXIES.length ? Promise.reject(new Error("sem acesso")) : apiText(PROXIES[i](url), 30000).catch(() => fetchPage(url, i + 1)); }
function extractArticle(html) {
  const d = new DOMParser().parseFromString(html, "text/html");
  ["script", "style", "nav", "aside", "footer", "header", "form", "noscript", "iframe"].forEach(t => Array.prototype.forEach.call(d.querySelectorAll(t), e => e.parentNode && e.parentNode.removeChild(e)));
  const roots = ["[itemprop=articleBody]", ".mc-article-body", ".content-text", "article", "main", "body"];
  let ps = [];
  for (const r of roots) { const el = d.querySelector(r); if (!el) continue; ps = Array.prototype.map.call(el.querySelectorAll("p, h2"), p => ({ h: p.tagName === "H2", t: p.textContent.replace(/\s+/g, " ").trim() })).filter(p => p.h ? p.t.length > 3 && p.t.length < 140 : p.t.length > 50); if (ps.filter(p => !p.h).length >= 3) break; }
  const og = d.querySelector("meta[property='og:image']");
  return { paras: ps.slice(0, 80), img: og ? og.getAttribute("content") : "" };
}
function readerNodes(paras) { return paras.map(p => p.h ? h("h3", {}, p.t) : h("p", { class: "rp" }, p.t)); }
function when(s) { const d = new Date(String(s).replace(" ", "T")); return isNaN(d) ? String(s || "").slice(0, 16) : pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1) + " " + pad2(d.getHours()) + ":" + pad2(d.getMinutes()); }
function host(u) { const m = /^https?:\/\/([^/]+)/.exec(u || ""); return m ? m[1].replace(/^www\./, "") : ""; }

/* ---------- Notícias ---------- */
const FONTES = [
  ["g1", "G1", "https://g1.globo.com/rss/g1/"], ["pol", "Política", "https://g1.globo.com/rss/g1/politica/"], ["eco", "Economia", "https://g1.globo.com/rss/g1/economia/"],
  ["mun", "Mundo", "https://g1.globo.com/rss/g1/mundo/"], ["sau", "Ciência e Saúde", "https://g1.globo.com/rss/g1/ciencia-e-saude/"], ["edu", "Educação", "https://g1.globo.com/rss/g1/educacao/"],
  ["tec", "Tecnologia", "https://g1.globo.com/rss/g1/tecnologia/"], ["abr", "Agência Brasil", "https://agenciabrasil.ebc.com.br/rss/ultimasnoticias/feed.xml"],
  ["bbc", "BBC Brasil", "https://feeds.bbci.co.uk/portuguese/rss.xml"], ["uol", "UOL", "https://rss.uol.com.br/feed/noticias.xml"], ["ibge", "IBGE", ""], ["rss", "Outro feed", ""]
];
const newsCache = {};
function loadFeed(key, url) {
  if (newsCache[key] && Date.now() - newsCache[key].t < 5 * 60000) return Promise.resolve(newsCache[key].items);
  const p = key === "ibge"
    ? api("https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=25").then(j => j.items.map(i => { let img = ""; try { img = "https://agenciadenoticias.ibge.gov.br/" + JSON.parse(i.imagens).image_intro; } catch (e) {} return { t: i.titulo, d: i.data_publicacao, u: i.link, img, txt: txt(i.introducao) }; }))
    : api("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(url)).then(j => {
      if (j.status && j.status !== "ok") throw userErr("Essa fonte não está disponível agora.");
      return (j.items || []).slice(0, 30).map(i => ({ t: txt(i.title), d: i.pubDate, u: i.link, img: i.thumbnail || (i.enclosure && i.enclosure.link) || "", html: i.content || i.description || "" }));
    });
  return p.then(items => { newsCache[key] = { t: Date.now(), items }; return items; });
}
add("news", "Notícias", "list", "Notícias", b => {
  const st = X("news", { src: "g1", rss: "" });
  const top = h("div"), body = h("div");
  b.append(top, body);
  const list = () => {
    const f = FONTES.find(x => x[0] === st.src) || FONTES[0];
    top.replaceChildren(segTabs(FONTES.map(x => [x[0], x[1]]), st.src, k => { st.src = k; save(); list(); }));
    if (st.src === "rss") {
      const u = inp("Endereço do feed (https://…)", "url", { value: st.rss });
      top.append(h("div", { class: "row" }, u, btn("Ler", () => { st.rss = u.value.trim(); save(); list(); }, "solid")));
      if (!/^https?:\/\//.test(st.rss)) { body.replaceChildren(note("Cole o endereço de um feed RSS de qualquer site.")); return; }
    }
    body.replaceChildren(note("Carregando…"));
    loadFeed(st.src === "rss" ? "rss:" + st.rss : st.src, st.src === "rss" ? st.rss : f[2]).then(items => {
      body.replaceChildren(h("ul", { class: "list news" }, ...items.map(it => h("li", { class: "nw", onclick: () => article(it, f[1]) },
        it.img ? h("span", { class: "nthumb" }, h("img", { src: it.img, alt: "" })) : null,
        h("span", {}, h("b", {}, it.t), h("small", {}, (st.src === "rss" ? host(it.u) : f[1]) + " · " + when(it.d)))))));
    }, e => body.replaceChildren(para(e.userMsg || NOCONN)));
  };
  const article = (it, srcName) => {
    subView(b, () => {
      top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Notícias"));
      const text = h("div", { class: "art" });
      const first = it.html ? txt(it.html).replace(/\s+/g, " ").trim() : (it.txt || "");
      text.replaceChildren(first ? h("p", { class: "rp" }, first) : null, note("Carregando a matéria completa…"));
      body.replaceChildren(h("div", { class: "kick2" }, srcName + " · " + when(it.d)), h("h2", { class: "ah" }, it.t), it.img ? h("img", { class: "aimg", src: it.img, alt: "" }) : null, text, h("p", { class: "muted" }, "Fonte: " + host(it.u)));
      window.scrollTo(0, 0);
      if (it.u) fetchPage(it.u).then(html => { const a = extractArticle(html); if (a.paras.length >= 2) text.replaceChildren(...readerNodes(a.paras)); else text.lastChild && text.removeChild(text.lastChild); },
        () => { if (text.lastChild) text.replaceChild(note("Não foi possível carregar o texto completo agora. Acima, o resumo da matéria."), text.lastChild); });
    }, list);
  };
  list();
});

/* ---------- Wikipédia ---------- */
const WP = "https://pt.wikipedia.org";
function wpArticle(title) {
  return api(WP + "/w/api.php?action=query&prop=extracts|pageimages&explaintext=1&exsectionformat=wiki&piprop=thumbnail&pithumbsize=500&redirects=1&format=json&origin=*&titles=" + encodeURIComponent(title)).then(j => {
    const pg = j.query && j.query.pages && Object.values(j.query.pages)[0];
    if (!pg || pg.missing !== undefined || !pg.extract) throw userErr("Artigo não encontrado.");
    const paras = [];
    pg.extract.split(/\n+/).forEach(l => { l = l.trim(); if (!l) return; const m = /^(=+)\s*(.+?)\s*=+$/.exec(l); if (m) { if (!/^(Referências|Ligações externas|Ver também|Bibliografia|Notas)$/i.test(m[2])) paras.push({ h: true, t: m[2] }); else paras.push({ stop: true }); } else paras.push({ t: l }); });
    const cut = paras.findIndex(p => p.stop);
    return { title: pg.title, img: pg.thumbnail && pg.thumbnail.source, paras: (cut >= 0 ? paras.slice(0, cut) : paras).filter(p => !p.stop) };
  });
}
add("wiki", "Wikipédia", "wiki", "Cultura", b => {
  const st = X("wikiapp", { tab: "busca", q: "" });
  const top = h("div"), body = h("div"); b.append(top, body);
  const open = title => subView(b, () => {
    top.replaceChildren(h("button", { class: "sbtn", onclick: () => history.back() }, ic("back", 16), " Wikipédia"));
    body.replaceChildren(note("Abrindo “" + title + "”…")); window.scrollTo(0, 0);
    wpArticle(title).then(a => body.replaceChildren(h("h2", { class: "ah" }, a.title), a.img ? h("img", { class: "aimg", src: a.img, alt: "" }) : null, h("div", { class: "art" }, ...readerNodes(a.paras)), note("Texto da Wikipédia, licença CC BY-SA.")),
      e => body.replaceChildren(para(e.userMsg || NOCONN)));
  }, draw);
  const items = arr => h("ul", { class: "list" }, ...arr.map(x => h("li", { class: "nw", onclick: () => x.p && open(x.p) }, x.img ? h("span", { class: "nthumb" }, h("img", { src: x.img, alt: "" })) : null, h("span", {}, h("b", {}, x.t), x.s ? h("small", {}, x.s) : null))));
  const d = new Date(), md = pad2(d.getMonth() + 1) + "/" + pad2(d.getDate());
  const TABS = {
    busca: () => {
      const q = inp("O que você quer ler?", "search", { value: st.q });
      const res = h("div");
      const go = () => { st.q = q.value.trim(); save(); if (!st.q) return; res.replaceChildren(note("Buscando…"));
        api(WP + "/w/rest.php/v1/search/page?limit=15&q=" + encodeURIComponent(st.q)).then(j => res.replaceChildren((j.pages || []).length ? items(j.pages.map(p => ({ t: p.title, s: p.description || txt(p.excerpt).slice(0, 110), p: p.title, img: p.thumbnail && "https:" + p.thumbnail.url }))) : note("Nada encontrado.")), () => res.replaceChildren(para(NOCONN))); };
      q.addEventListener("keydown", e => e.key === "Enter" && go());
      body.replaceChildren(h("div", { class: "row" }, q, btn("Buscar", go, "solid")), res); if (st.q) go();
    },
    aleatorio: () => { body.replaceChildren(note("Sorteando…")); api(WP + "/api/rest_v1/page/random/summary").then(j => open(j.title), () => body.replaceChildren(para(NOCONN))); },
    lidas: () => {
      body.replaceChildren(note("Carregando…")); const y = new Date(Date.now() - 2 * 864e5);
      api("https://wikimedia.org/api/rest_v1/metrics/pageviews/top/pt.wikipedia/all-access/" + y.getUTCFullYear() + "/" + pad2(y.getUTCMonth() + 1) + "/" + pad2(y.getUTCDate())).then(j => {
        const a = j.items[0].articles.filter(x => !/^(Wikipédia:|Especial:|Página_principal|Ajuda:|Predefinição:|Ficheiro:)/.test(x.article)).slice(0, 30);
        body.replaceChildren(items(a.map((x, i) => ({ t: (i + 1) + ". " + x.article.replace(/_/g, " "), s: num(x.views) + " leituras", p: x.article.replace(/_/g, " ") }))));
      }, () => body.replaceChildren(para(NOCONN)));
    },
    dia: () => {
      body.replaceChildren(note("Carregando…"));
      api(WP + "/api/rest_v1/feed/onthisday/all/" + md).then(j => {
        const ev = (j.events || []).slice(0, 20).map(e => ({ t: e.year + " — " + e.text, p: e.pages && e.pages[0] && e.pages[0].titles && e.pages[0].titles.normalized }));
        const bi = (j.births || []).slice(0, 20).map(e => ({ t: e.text, s: "Nasceu em " + e.year + " · faria " + (d.getFullYear() - e.year) + " anos", p: e.pages && e.pages[0] && e.pages[0].titles && e.pages[0].titles.normalized }));
        body.replaceChildren(h("div", { class: "lbl2" }, "Aconteceu num " + d.getDate() + " de " + ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"][d.getMonth()]), items(ev), h("div", { class: "lbl2" }, "Aniversariantes famosos de hoje"), items(bi));
      }, () => body.replaceChildren(para(NOCONN)));
    }
  };
  function draw() { top.replaceChildren(segTabs([["busca", "Buscar"], ["aleatorio", "Aleatório"], ["lidas", "Mais lidas"], ["dia", "Hoje na história"]], st.tab, k => { st.tab = k; save(); draw(); })); TABS[st.tab](); }
  draw();
});

/* ---------- Dicionário (português e inglês) ---------- */
function wikiClean(s) {
  return s.replace(/<ref[^>]*\/>/g, "").replace(/<ref[\s\S]*?<\/ref>/g, "").replace(/<[^>]+>/g, "")
    .replace(/\{\{(?:escopo2?|escopo|Escopo2?)\|([^}|]+)(?:\|[^}]*)?\}\}/g, "($1) ")
    .replace(/\{\{[^{}]*\}\}/g, "").replace(/\{\{[^{}]*\}\}/g, "")
    .replace(/\[\[(?:[^\]|]*\|)?([^\]]+)\]\]/g, "$1").replace(/'''?/g, "").replace(/\s+/g, " ").trim();
}
function dictPT(w) {
  const tryWord = word => api("https://pt.wiktionary.org/w/api.php?action=parse&prop=wikitext&redirects=1&format=json&origin=*&page=" + encodeURIComponent(word));
  return tryWord(w).catch(() => tryWord(w.toLowerCase())).then(j => {
    if (!j.parse) throw userErr("Palavra não encontrada.");
    const wt = j.parse.wikitext["*"];
    const start = wt.search(/=\s*\{\{-pt-\}\}\s*=/); if (start < 0) throw userErr("Não há verbete em português para essa palavra.");
    const rest = wt.slice(start + 5), end = rest.search(/\n=\s*\{\{-[a-z]{2,3}-\}\}\s*=/), sec = end >= 0 ? rest.slice(0, end) : rest;
    const groups = []; let cur = null;
    sec.split("\n").forEach(l => {
      const hd = /^==+\s*(.+?)\s*==+\s*$/.exec(l);
      if (hd) { const n = wikiClean(hd[1].replace(/\{\{([^|}]+)\|?[^}]*\}\}/, "$1")).replace(/^\d+\s*/, ""); if (/^(Substantivo|Adjetivo|Verbo|Advérbio|Pronome|Preposição|Conjunção|Interjeição|Numeral|Artigo|Locução)/i.test(n)) { cur = { pos: n, defs: [] }; groups.push(cur); } else cur = /Tradução|Etimologia|Pronúncia|Ver também|Sinônimos|Antônimos|Referências|Anagramas|Expressões|Conjugação|Forma/i.test(n) ? null : cur; return; }
      if (cur && /^#[^*:#]/.test(l)) { const t = wikiClean(l.replace(/^#+/, "")); if (t.length > 1) cur.defs.push(t); }
    });
    const ok = groups.filter(g => g.defs.length); if (!ok.length) throw userErr("Encontrei a palavra, mas sem definições legíveis.");
    return { word: j.parse.title, groups: ok };
  });
}
add("dict", "Dicionário", "text", "Cultura", b => {
  const st = X("dictapp", { lang: "pt", w: "" });
  const top = h("div"), q = inp("Digite uma palavra", "search", { value: st.w }), out = h("div");
  const go = () => {
    const w = q.value.trim(); st.w = w; save(); if (!w) return; out.replaceChildren(note("Procurando…"));
    if (st.lang === "pt") dictPT(w).then(r => out.replaceChildren(h("h2", { class: "ah" }, r.word), ...r.groups.map(g => h("div", {}, h("div", { class: "lbl2" }, g.pos), h("ol", { class: "defs" }, ...g.defs.slice(0, 8).map(d => h("li", {}, d)))))), e => out.replaceChildren(para(e.userMsg || NOCONN)));
    else api("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(w.toLowerCase())).then(j => {
      const e = j[0], tr = h("p", { class: "muted" }, "Traduzindo…");
      api("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(e.word) + "&langpair=en|pt-br").then(t => { tr.textContent = "Em português: " + txt(t.responseData.translatedText); }, () => { tr.textContent = ""; });
      out.replaceChildren(h("h2", { class: "ah" }, e.word, e.phonetic ? h("small", {}, "  " + e.phonetic) : null), tr,
        ...e.meanings.map(m => h("div", {}, h("div", { class: "lbl2" }, m.partOfSpeech), h("ol", { class: "defs" }, ...m.definitions.slice(0, 4).map(d => h("li", {}, d.definition, d.example ? h("small", {}, "“" + d.example + "”") : null))))));
    }, () => out.replaceChildren(para("Palavra não encontrada no dicionário de inglês.")));
  };
  const draw = () => top.replaceChildren(segTabs([["pt", "Português"], ["en", "Inglês"]], st.lang, k => { st.lang = k; save(); draw(); go(); }));
  q.addEventListener("keydown", e => e.key === "Enter" && go());
  b.append(top, h("div", { class: "row" }, q, btn("Buscar", go, "solid")), out); draw(); if (st.w) go();
});

/* ---------- CEP (Brasil e exterior) ---------- */
const PAISES_ZIP = [["us", "Estados Unidos"], ["pt", "Portugal"], ["de", "Alemanha"], ["fr", "França"], ["es", "Espanha"], ["it", "Itália"], ["gb", "Reino Unido"], ["ca", "Canadá"], ["au", "Austrália"], ["mx", "México"], ["jp", "Japão"], ["nl", "Holanda"], ["ar", "Argentina"]];
add("cep", "CEP", "map", "Brasil", b => {
  const st = X("cepapp", { m: "br", c: "us" });
  const top = h("div"), form = h("div"), out = h("div"); b.append(top, form, out);
  const draw = () => {
    top.replaceChildren(segTabs([["br", "Brasil"], ["ex", "Outro país"]], st.m, k => { st.m = k; save(); out.replaceChildren(); draw(); }));
    const z = inp(st.m === "br" ? "CEP, ex.: 01001-000" : "Código postal", "text");
    const sel = h("select", { onchange: () => { st.c = sel.value; save(); } }, ...PAISES_ZIP.map(p => h("option", { value: p[0], selected: p[0] === st.c ? "selected" : false }, p[1])));
    const go = () => {
      out.replaceChildren(note("Buscando…"));
      if (st.m === "br") {
        const c = digits(z.value); if (c.length !== 8) return out.replaceChildren(para("Digite um CEP com 8 números."));
        api("https://brasilapi.com.br/api/cep/v2/" + c).then(j => ({ cep: j.cep, rua: j.street, bairro: j.neighborhood, cidade: j.city, uf: j.state }),
          () => api("https://viacep.com.br/ws/" + c + "/json/").then(j => { if (j.erro) throw userErr("CEP não encontrado."); return { cep: j.cep, rua: j.logradouro, bairro: j.bairro, cidade: j.localidade, uf: j.uf }; }))
          .then(r => out.replaceChildren(h("div", { class: "big" }, r.cidade + " – " + r.uf), kv([["CEP", r.cep], ["Rua", r.rua], ["Bairro", r.bairro], ["Cidade", r.cidade], ["Estado", r.uf]])), e => out.replaceChildren(para(e.userMsg || "CEP não encontrado.")));
      } else api("https://api.zippopotam.us/" + st.c + "/" + encodeURIComponent(z.value.trim())).then(j => out.replaceChildren(kv([["País", j.country], ["Código", j["post code"]]]), listOf((j.places || []).map(p => ({ t: p["place name"], s: p.state || "" })))), () => out.replaceChildren(para("Código postal não encontrado nesse país.")));
    };
    z.addEventListener("keydown", e => e.key === "Enter" && go());
    form.replaceChildren(st.m === "ex" ? h("div", { class: "row" }, sel) : null, h("div", { class: "row" }, z, btn("Buscar", go, "solid")));
  };
  draw();
});

/* ---------- Clima (agora, hora a hora e 7 dias) ---------- */
const uvTxt = v => v == null ? "" : Math.round(v) + " · " + (v < 3 ? "baixo" : v < 6 ? "moderado" : v < 8 ? "alto — use protetor" : v < 11 ? "muito alto — evite o sol do meio-dia" : "extremo — evite o sol");
const DSEM = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
add("weather", "Clima", "cloud", "Mundo", b => {
  const q = inp("Outra cidade", "search"), out = h("div");
  const show = p => {
    out.replaceChildren(note("Carregando a previsão…"));
    api("https://api.open-meteo.com/v1/forecast?latitude=" + p.lat + "&longitude=" + p.lon + "&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,uv_index_max&forecast_days=7&timezone=auto").then(j => {
      const c = j.current, w = wxInfo(c.weather_code, c.is_day !== 0), hr = j.hourly, from = Math.max(0, hr.time.indexOf(c.time.slice(0, 13) + ":00"));
      const hrs = []; for (let i = from; i < from + 12 && i < hr.time.length; i++) hrs.push(h("td", {}, h("small", {}, hr.time[i].slice(11, 13) + "h"), ic(wxInfo(hr.weather_code[i], true)[0], 16), h("b", {}, Math.round(hr.temperature_2m[i]) + "°"), h("small", {}, (hr.precipitation_probability[i] || 0) + "%")));
      const dy = j.daily;
      out.replaceChildren(
        h("div", { class: "wxnow" }, h("span", { class: "wxi" }, ic(w[0], 64)), h("span", {}, h("div", { class: "wxt2" }, Math.round(c.temperature_2m) + "°"), h("b", {}, w[1] || ""), h("small", {}, p.name))),
        kv([["Sensação", Math.round(c.apparent_temperature) + "°"], ["Umidade", c.relative_humidity_2m + "%"], ["Vento", Math.round(c.wind_speed_10m) + " km/h"], ["Hoje", Math.round(dy.temperature_2m_min[0]) + "° / " + Math.round(dy.temperature_2m_max[0]) + "°"], ["Nascer do sol", (dy.sunrise[0] || "").slice(11, 16)], ["Pôr do sol", (dy.sunset[0] || "").slice(11, 16)], ["Índice UV máximo", uvTxt(dy.uv_index_max[0])]]),
        h("div", { class: "lbl2" }, "Próximas 12 horas"), h("div", { class: "hscroll" }, h("table", { class: "hours" }, h("tbody", {}, h("tr", {}, ...hrs)))),
        h("div", { class: "lbl2" }, "Próximos 7 dias"),
        h("ul", { class: "list" }, ...dy.time.map((t, i) => { const dd = new Date(t + "T12:00"), wi = wxInfo(dy.weather_code[i], true); return h("li", {}, h("span", { class: "dd" }, i === 0 ? "Hoje" : DSEM[dd.getDay()] + " " + dd.getDate()), h("span", {}, ic(wi[0], 16), " " + (wi[1] || "") + (dy.precipitation_probability_max[i] ? " · " + dy.precipitation_probability_max[i] + "%" : "")), h("b", {}, Math.round(dy.temperature_2m_min[i]) + "° / " + Math.round(dy.temperature_2m_max[i]) + "°")); })));
    }, () => out.replaceChildren(para(NOCONN)));
  };
  const go = () => { if (!q.value.trim()) return; out.replaceChildren(note("Procurando a cidade…")); geo(q.value.trim()).then(show, e => out.replaceChildren(para(e.message === "Local não encontrado" ? "Cidade não encontrada." : NOCONN))); };
  q.addEventListener("keydown", e => e.key === "Enter" && go());
  b.append(h("div", { class: "row" }, q, btn("Ver", go, "solid")), out);
  out.replaceChildren(note("Localizando…")); myLoc().then(show);
});
