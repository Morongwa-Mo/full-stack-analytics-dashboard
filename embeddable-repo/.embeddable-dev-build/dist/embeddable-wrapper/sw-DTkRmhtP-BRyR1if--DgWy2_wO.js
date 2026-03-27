import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function p(i, n) {
  for (var r = 0; r < n.length; r++) {
    const e = n[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in i)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(i, t, o.get ? o : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, d = s.exports, m;
function f() {
  return m || (m = 1, (function(i, n) {
    (function(r, e) {
      i.exports = e(rt());
    })(d, (function(r) {
      function e(a) {
        return a && typeof a == "object" && "default" in a ? a : { default: a };
      }
      var t = e(r), o = { name: "sw", weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekStart: 1, ordinal: function(a) {
        return a;
      }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
      return t.default.locale(o, null, true), o;
    }));
  })(s)), s.exports;
}
var _ = f();
const M = /* @__PURE__ */ by(_), k = /* @__PURE__ */ p({
  __proto__: null,
  default: M
}, [_]);

export { k as s };
//# sourceMappingURL=sw-DTkRmhtP-BRyR1if--DgWy2_wO.js.map
//# sourceMappingURL=sw-DTkRmhtP-BRyR1if--DgWy2_wO.js.map
