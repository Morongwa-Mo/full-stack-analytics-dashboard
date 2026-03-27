import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function i(o, n) {
  for (var e = 0; e < n.length; e++) {
    const a = n[e];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in o)) {
          const j = Object.getOwnPropertyDescriptor(a, r);
          j && Object.defineProperty(o, r, j.get ? j : {
            enumerable: true,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} }, m = _.exports, l;
function c() {
  return l || (l = 1, (function(o, n) {
    (function(e, a) {
      o.exports = a(rt());
    })(m, (function(e) {
      function a(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var r = a(e), j = { name: "tlh", weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), weekStart: 1, weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), ordinal: function(t) {
        return t;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
      return r.default.locale(j, null, true), j;
    }));
  })(_)), _.exports;
}
var h = c();
const f = /* @__PURE__ */ by(h), d = /* @__PURE__ */ i({
  __proto__: null,
  default: f
}, [h]);

export { d as t };
//# sourceMappingURL=tlh-CFh0r2li-79mGGf6W-BooIRx5a.js.map
//# sourceMappingURL=tlh-CFh0r2li-79mGGf6W-BooIRx5a.js.map
