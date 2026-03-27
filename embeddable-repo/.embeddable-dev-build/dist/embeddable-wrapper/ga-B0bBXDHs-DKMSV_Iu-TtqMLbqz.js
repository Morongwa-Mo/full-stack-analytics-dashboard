import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function d(n, _) {
  for (var t = 0; t < _.length; t++) {
    const e = _[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in n)) {
          const i = Object.getOwnPropertyDescriptor(e, a);
          i && Object.defineProperty(n, a, i.get ? i : {
            enumerable: true,
            get: () => e[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} }, f = o.exports, s;
function M() {
  return s || (s = 1, (function(n, _) {
    (function(t, e) {
      n.exports = e(rt());
    })(f, (function(t) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var a = e(t), i = { name: "ga", weekdays: "Dé Domhnaigh_Dé Luain_Dé Máirt_Dé Céadaoin_Déardaoin_Dé hAoine_Dé Sathairn".split("_"), months: "Eanáir_Feabhra_Márta_Aibreán_Bealtaine_Meitheamh_Iúil_Lúnasa_Meán Fómhair_Deireadh Fómhair_Samhain_Nollaig".split("_"), weekStart: 1, weekdaysShort: "Dom_Lua_Mái_Céa_Déa_Aoi_Sat".split("_"), monthsShort: "Ean_Fea_Már_Aib_Beal_Mei_Iúil_Lún_MFómh_DFómh_Samh_Noll".split("_"), weekdaysMin: "Do_Lu_Má_Cé_Dé_Ao_Sa".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "i %s", past: "%s ó shin", s: "cúpla soicind", m: "nóiméad", mm: "%d nóiméad", h: "uair an chloig", hh: "%d uair an chloig", d: "lá", dd: "%d lá", M: "mí", MM: "%d mí", y: "bliain", yy: "%d bliain" } };
      return a.default.locale(i, null, true), i;
    }));
  })(o)), o.exports;
}
var l = M();
const h = /* @__PURE__ */ by(l), D = /* @__PURE__ */ d({
  __proto__: null,
  default: h
}, [l]);

export { D as g };
//# sourceMappingURL=ga-B0bBXDHs-DKMSV_Iu-TtqMLbqz.js.map
//# sourceMappingURL=ga-B0bBXDHs-DKMSV_Iu-TtqMLbqz.js.map
