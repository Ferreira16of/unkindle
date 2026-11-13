/* Apps online (parte B): mundo, cultura, dev e diversão. */

/* ---------- Mundo ---------- */
W("m_iss", "ISS agora", "bolt", "Mundo", {
  about: "Onde a Estação Espacial Internacional está neste momento.",
  go: function () {
    return api("https://api.wheretheiss.at/v1/satellites/25544").then(function (j) {
      var vis = j.visibility === "daylight" ? "Em luz do dia" : j.visibility === "eclipsed" ? "Na sombra da Terra" : j.visibility;
      return [kv([["Latitude", j.latitude.toFixed(3)], ["Longitude", j.longitude.toFixed(3)], ["Altitude", num(j.altitude, 1) + " km"], ["Velocidade", num(j.velocity, 0) + " km/h"], ["Visibilidade", vis]]),
        h("iframe", { title: "Posição da ISS", style: "width:100%;height:300px;border:1px solid " + PAL.LINE + ";margin-top:8px", src: "https://www.openstreetmap.org/export/embed.html?bbox=" + (j.longitude - 20) + "," + (j.latitude - 12) + "," + (j.longitude + 20) + "," + (j.latitude + 12) + "&layer=mapnik&marker=" + j.latitude + "," + j.longitude })];
    });
  }
});
W("m_sismos", "Terremotos hoje", "bolt", "Mundo", {
  about: "Terremotos de magnitude 2,5 ou mais nas últimas 24 horas (USGS).",
  go: function () {
    return api("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson").then(function (j) {
      return [note(j.features.length + " terremotos"), listOf(j.features.slice(0, 40).map(function (f) { var d = new Date(f.properties.time); return { t: "M " + f.properties.mag + " · " + f.properties.place, s: d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }), u: f.properties.url }; }))];
    });
  }
});
W("m_ar", "Qualidade do ar", "wind", "Mundo", {
  inputs: PLACE_IN,
  go: function (v) {
    return place(v).then(function (p) {
      return api("https://air-quality-api.open-meteo.com/v1/air-quality?latitude=" + p.lat + "&longitude=" + p.lon + "&current=us_aqi,pm10,pm2_5").then(function (j) {
        var a = j.current.us_aqi, cls = a <= 50 ? "Boa" : a <= 100 ? "Moderada" : a <= 150 ? "Ruim para pessoas sensíveis" : a <= 200 ? "Ruim" : a <= 300 ? "Muito ruim" : "Perigosa";
        return [h("h3", {}, p.name), big(a), note("Índice de qualidade do ar (US AQI): " + cls), kv([["PM2,5", j.current.pm2_5 + " µg/m³"], ["PM10", j.current.pm10 + " µg/m³"]])];
      });
    });
  }
});
W("m_mar", "Ondas e mar", "wind", "Mundo", {
  inputs: [{ k: "q", ph: "Cidade litorânea", def: "Santos" }],
  go: function (v) {
    return geo(v.q || "Santos").then(function (p) {
      return api("https://marine-api.open-meteo.com/v1/marine?latitude=" + p.lat + "&longitude=" + p.lon + "&current=wave_height,wave_period,wave_direction").then(function (j) {
        var c = j.current; if (c.wave_height == null) throw userErr("Sem dados de mar para esse local. Tente uma cidade litorânea.");
        return [h("h3", {}, p.name), big(c.wave_height + " m"), note("altura das ondas"), kv([["Período", c.wave_period + " s"], ["Direção", c.wave_direction + "°"]])];
      }, function () { throw userErr("Sem dados de mar para esse local. Tente uma cidade litorânea."); });
    });
  }
});
W("m_rios", "Vazão de rios", "wind", "Mundo", {
  about: "Vazão prevista do rio mais próximo da cidade, em metros cúbicos por segundo.",
  inputs: [{ k: "q", ph: "Cidade", def: "Manaus" }],
  go: function (v) {
    return geo(v.q || "Manaus").then(function (p) {
      return api("https://flood-api.open-meteo.com/v1/flood?latitude=" + p.lat + "&longitude=" + p.lon + "&daily=river_discharge&forecast_days=7").then(function (j) {
        var d = j.daily; if (!d || d.river_discharge[0] == null) throw userErr("Sem dados de rio para esse local.");
        return [h("h3", {}, p.name), listOf(d.time.map(function (t, i) { return { t: dbr(t) + " · " + wkd(t), s: num(d.river_discharge[i], 1) + " m³/s" }; }))];
      });
    });
  }
});
var CIDADES_MUNDO = [["São Paulo", -23.55, -46.63], ["Lisboa", 38.72, -9.14], ["Londres", 51.51, -0.13], ["Paris", 48.85, 2.35], ["Nova York", 40.71, -74.0], ["Los Angeles", 34.05, -118.24], ["Dubai", 25.2, 55.27], ["Mumbai", 19.08, 72.88], ["Tóquio", 35.68, 139.69], ["Sydney", -33.87, 151.21]];
W("m_relogio", "Relógio mundial", "clock", "Mundo", {
  go: function () {
    return Promise.all(CIDADES_MUNDO.map(function (c) { return api("https://api.open-meteo.com/v1/forecast?latitude=" + c[1] + "&longitude=" + c[2] + "&current=temperature_2m&timezone=auto"); })).then(function (r) {
      return listOf(r.map(function (j, i) { return { t: CIDADES_MUNDO[i][0] + " · " + j.current.time.slice(11, 16), s: dbr(j.current.time) + " · " + wkd(j.current.time) + " · " + Math.round(j.current.temperature_2m) + "°C" }; }));
    });
  }
});
var paisesCache = null;

/* ---------- Cultura ---------- */
W("c_series", "Séries de TV", "film", "Cultura", {
  inputs: [{ k: "q", ph: "Nome da série", def: "office" }],
  go: function (v) {
    return api("https://api.tvmaze.com/search/shows?q=" + encodeURIComponent(v.q)).then(function (j) {
      return mediaList(j.slice(0, 10).map(function (r) { var s = r.show; return { t: s.name, s: [(s.premiered || "").slice(0, 4), (s.genres || []).join("/"), s.rating && s.rating.average ? "nota " + s.rating.average : ""].filter(Boolean).join(" · "), img: s.image && s.image.medium, extra: h("div", {}, para(txt(s.summary).slice(0, 180)), s.url ? openBtn(s.url, "Mais") : null) }; }));
    });
  }
});
function recipeApp(id, n, icon, url, listKey, nameKey, thumbKey, ing, def) {
  W(id, n, icon, "Cultura", {
    about: "Receitas em inglês, com botão para traduzir.", inputs: [{ k: "q", ph: "Nome ou ingrediente", def: def }],
    go: function (v, b) {
      var out = b.querySelector(".web");
      return api(url + encodeURIComponent(v.q)).then(function (j) {
        var l = j[listKey] || []; if (!l.length) throw userErr("Nada encontrado. Tente em inglês.");
        return mediaList(l.slice(0, 12).map(function (m) {
          return { t: m[nameKey], s: [m.strCategory, m.strArea, m.strAlcoholic].filter(Boolean).join(" · "), img: m[thumbKey] + "/preview", extra: h("button", { onclick: function () {
            var rows = []; for (var i = 1; i <= 20; i++) if (m["strIngredient" + i]) rows.push([m["strIngredient" + i], m["strMeasure" + i] || ""]);
            var steps = m.strInstructions || "";
            out.replaceChildren(h("button", { onclick: function () { window.scrollTo(0, 0); out.replaceChildren(para("Faça a busca de novo para ver a lista.")); } }, "Voltar"), h("h3", {}, m[nameKey]), imgEl(m[thumbKey]), h("h3", {}, "Ingredientes"), kv(rows), h("h3", {}, "Modo de preparo"), h("pre", {}, steps), trBtn(steps));
            window.scrollTo(0, 0);
          } }, "Ver receita") };
        }));
      });
    }
  });
}
W("c_rimas", "Rimas e sinônimos", "text", "Cultura", {
  about: "Palavras relacionadas, em inglês.",
  inputs: [{ k: "w", ph: "Palavra em inglês", def: "love" }, { k: "m", def: "rel_rhy", opts: [["rel_rhy", "Rimas"], ["rel_syn", "Sinônimos"], ["rel_ant", "Antônimos"], ["ml", "Significado parecido"], ["sl", "Som parecido"]] }],
  go: function (v) { return api("https://api.datamuse.com/words?max=40&" + v.m + "=" + encodeURIComponent(v.w)).then(function (j) { return j.length ? para(j.map(function (x) { return x.word; }).join(", ")) : note("Nada encontrado."); }); }
});

/* ---------- Dev ---------- */

/* ---------- Diversão ---------- */
