import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function f(o, _) {
  for (var n = 0; n < _.length; n++) {
    const e = _[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(o, t, a.get ? a : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, l = s.exports, i;
function p() {
  return i || (i = 1, (function(o, _) {
    (function(n, e) {
      o.exports = e(rt());
    })(l, (function(n) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(n), a = { name: "nb", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), ordinal: function(r) {
        return r + ".";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" } };
      return t.default.locale(a, null, true), a;
    }));
  })(s)), s.exports;
}
var u = p();
const b = /* @__PURE__ */ by(u), M = /* @__PURE__ */ f({
  __proto__: null,
  default: b
}, [u]);

export { M as n };
//# sourceMappingURL=nb-BAPLn7-c-CcvLG0Fp-DdEHSMJJ.js.map
//# sourceMappingURL=nb-BAPLn7-c-CcvLG0Fp-DdEHSMJJ.js.map
