/* Apps online (parte A): notícias, Brasil e finanças. Só serviços públicos testados, sem chave de API. */

/* ---------- Notícias ---------- */


/* ---------- Brasil ---------- */
W("b_feriados", "Feriados nacionais", "cal", "Brasil", {
  inputs: [{ k: "y", ph: "Ano", type: "number", def: String(new Date().getFullYear()) }],
  go: function (v) { return api("https://brasilapi.com.br/api/feriados/v1/" + digits(v.y)).then(function (j) { return listOf(j.map(function (f) { return { t: f.name, s: dbr(f.date) + " · " + wkd(f.date) }; })); }); }
});
W("m_feriados", "Feriados no mundo", "cal", "Mundo", {
  inputs: [{ k: "c", def: "PT", opts: [["BR", "Brasil"], ["PT", "Portugal"], ["US", "Estados Unidos"], ["GB", "Reino Unido"], ["DE", "Alemanha"], ["FR", "França"], ["ES", "Espanha"], ["IT", "Itália"], ["AR", "Argentina"], ["MX", "México"], ["JP", "Japão"], ["CA", "Canadá"], ["AU", "Austrália"]] }, { k: "y", ph: "Ano", type: "number", def: String(new Date().getFullYear()) }],
  go: function (v) { return api("https://date.nager.at/api/v3/PublicHolidays/" + digits(v.y) + "/" + v.c).then(function (j) { return listOf(j.map(function (f) { return { t: f.localName + (f.name !== f.localName ? " (" + f.name + ")" : ""), s: dbr(f.date) + " · " + wkd(f.date) }; })); }); }
});
var banksCache = null;
W("b_nomes", "Nomes no Censo", "users", "Brasil", {
  about: "Quantas pessoas têm um nome, segundo os Censos do IBGE.",
  inputs: [{ k: "n", ph: "Primeiro nome", def: "Maria" }],
  go: function (v) {
    return api("https://servicodados.ibge.gov.br/api/v2/censos/nomes/" + encodeURIComponent(v.n)).then(function (j) {
      if (!j.length || !j[0].res) throw userErr("Esse nome não aparece no Censo.");
      var res = j[0].res.map(function (r) { var y = (String(r.periodo).match(/\d{4}/) || [""])[0]; return { y: y, f: r.frequencia }; }), total = res.reduce(function (a, r) { return a + r.f; }, 0);
      var top = res.slice().sort(function (a, b) { return b.f - a.f; })[0];
      return [big(num(total)), note("pessoas com o nome " + j[0].nome), kv([["Década mais comum", "a partir de " + top.y]]), h("h3", {}, "Por década"), kv(res.sort(function (a, b) { return a.y - b.y; }).map(function (r) { return [r.y + "", num(r.f)]; }))];
    });
  }
});
add("b_fipe", "Tabela FIPE", "coin", "Brasil", function (b) {
  var base = "https://parallelum.com.br/fipe/api/v1/carros/marcas", sm = h("select"), sd = h("select"), sa = h("select"), out = h("div", { "class": "web" });
  var opt = function (sel, items, label) { sel.replaceChildren.apply(sel, [h("option", { value: "" }, label)].concat(items.map(function (i) { return h("option", { value: i.codigo }, i.nome); }))); };
  var fail = function () { out.replaceChildren(para(NOCONN)); };
  opt(sm, [], "Carregando marcas…"); opt(sd, [], "Modelo"); opt(sa, [], "Ano");
  api(base).then(function (j) { opt(sm, j, "Escolha a marca"); }, fail);
  sm.onchange = function () { opt(sd, [], "Modelo"); opt(sa, [], "Ano"); if (!sm.value) return; opt(sd, [], "Carregando…"); api(base + "/" + sm.value + "/modelos").then(function (j) { opt(sd, j.modelos, "Escolha o modelo"); }, fail); };
  sd.onchange = function () { opt(sa, [], "Ano"); if (!sd.value) return; opt(sa, [], "Carregando…"); api(base + "/" + sm.value + "/modelos/" + sd.value + "/anos").then(function (j) { opt(sa, j, "Escolha o ano"); }, fail); };
  sa.onchange = function () {
    if (!sa.value) return; out.replaceChildren(note("Consultando…"));
    api(base + "/" + sm.value + "/modelos/" + sd.value + "/anos/" + sa.value).then(function (j) { out.replaceChildren(big(j.Valor), kv([["Marca", j.Marca], ["Modelo", j.Modelo], ["Ano", j.AnoModelo], ["Combustível", j.Combustivel], ["Referência", j.MesReferencia], ["Código FIPE", j.CodigoFipe]])); }, fail);
  };
  b.append(note("Preço médio de carros pela Tabela FIPE."), h("div", { "class": "row" }, sm), h("div", { "class": "row" }, sd), h("div", { "class": "row" }, sa), out);
});

/* ---------- Finanças ---------- */
W("f_cotacoes", "Cotações", "coin", "Finanças", {
  about: "Valores em reais. Apenas informação, não é recomendação de investimento.",
  go: function () {
    return api("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,JPY-BRL,BTC-BRL").then(function (j) {
      var rows = Object.keys(j).map(function (k) { var c = j[k]; return [String(c.name).split("/")[0], "R$ " + num(c.bid, c.code === "JPY" || c.code === "ARS" ? 4 : 2) + "   " + (+c.pctChange > 0 ? "+" : "") + (+c.pctChange).toFixed(2).replace(".", ",") + "%"]; });
      var first = j[Object.keys(j)[0]]; return [kv(rows), note("Atualizado em " + (first && first.create_date || ""))];
    });
  }
});
W("f_cripto", "Criptomoedas", "coin", "Finanças", {
  about: "As 15 maiores por valor de mercado, em dólares. Apenas informação.",
  go: function () {
    return api("https://api.coinpaprika.com/v1/tickers?limit=15").then(function (j) {
      return listOf(j.map(function (c) { var q = c.quotes && c.quotes.USD || {}, p = q.price >= 1 ? num(q.price, 2) : Number(q.price).toFixed(4); return { t: c.rank + ". " + c.name + " (" + c.symbol + ")", s: "US$ " + p + " · " + (q.percent_change_24h > 0 ? "+" : "") + q.percent_change_24h + "% em 24h" }; }));
    });
  }
});
var MOEDAS = ["BRL", "USD", "EUR", "GBP", "ARS", "JPY", "CAD", "AUD", "CHF", "CNY", "MXN", "CLP", "UYU", "PYG", "COP", "PEN", "INR", "KRW", "ZAR", "AED", "TRY", "SEK", "NOK", "NZD"];
W("f_taxas", "Selic, CDI e IPCA", "chart", "Finanças", {
  go: function () { return api("https://brasilapi.com.br/api/taxas/v1").then(function (j) { return [kv(j.map(function (t) { return [t.nome, num(t.valor, 2) + " %"]; })), note("Taxas de referência. Apenas informação.")]; }); }
});
