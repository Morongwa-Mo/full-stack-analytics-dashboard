import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function M(s, _) {
  for (var u = 0; u < _.length; u++) {
    const r = _[u];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const a in r)
        if (a !== "default" && !(a in s)) {
          const e = Object.getOwnPropertyDescriptor(r, a);
          e && Object.defineProperty(s, a, e.get ? e : {
            enumerable: true,
            get: () => r[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} }, k = o.exports, m;
function y() {
  return m || (m = 1, (function(s, _) {
    (function(u, r) {
      s.exports = r(rt());
    })(k, (function(u) {
      function r(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var a = r(u);
      function e(t, l, n, f) {
        var i = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: ["%d minuti", "%d minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: ["%d tunni", "%d tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: ["%d kuu", "%d kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: ["%d aasta", "%d aastat"] };
        return l ? (i[n][2] ? i[n][2] : i[n][1]).replace("%d", t) : (f ? i[n][0] : i[n][1]).replace("%d", t);
      }
      var d = { name: "et", weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), ordinal: function(t) {
        return t + ".";
      }, weekStart: 1, relativeTime: { future: "%s pärast", past: "%s tagasi", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: "%d päeva", M: e, MM: e, y: e, yy: e }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
      return a.default.locale(d, null, true), d;
    }));
  })(o)), o.exports;
}
var p = y();
const h = /* @__PURE__ */ by(p), g = /* @__PURE__ */ M({
  __proto__: null,
  default: h
}, [p]);

export { g as e };
//# sourceMappingURL=et-Ch1UD_N7-Dv9G9NY8-49-nuh3i.js.map
//# sourceMappingURL=et-Ch1UD_N7-Dv9G9NY8-49-nuh3i.js.map
