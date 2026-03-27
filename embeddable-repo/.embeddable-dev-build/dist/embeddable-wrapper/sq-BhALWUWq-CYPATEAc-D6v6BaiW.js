import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function M(s, a) {
  for (var n = 0; n < a.length; n++) {
    const r = a[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const t in r)
        if (t !== "default" && !(t in s)) {
          const o = Object.getOwnPropertyDescriptor(r, t);
          o && Object.defineProperty(s, t, o.get ? o : {
            enumerable: true,
            get: () => r[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} }, f = _.exports, i;
function l() {
  return i || (i = 1, (function(s, a) {
    (function(n, r) {
      s.exports = r(rt());
    })(f, (function(n) {
      function r(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var t = r(n), o = { name: "sq", weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), weekStart: 1, weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), ordinal: function(e) {
        return e;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" } };
      return t.default.locale(o, null, true), o;
    }));
  })(_)), _.exports;
}
var u = l();
const p = /* @__PURE__ */ by(u), j = /* @__PURE__ */ M({
  __proto__: null,
  default: p
}, [u]);

export { j as s };
//# sourceMappingURL=sq-BhALWUWq-CYPATEAc-D6v6BaiW.js.map
//# sourceMappingURL=sq-BhALWUWq-CYPATEAc-D6v6BaiW.js.map
