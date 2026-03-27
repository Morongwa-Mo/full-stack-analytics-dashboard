import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function p(_, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in _)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(_, r, n.get ? n : {
            enumerable: true,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var u = { exports: {} }, M = u.exports, a;
function m() {
  return a || (a = 1, (function(_, s) {
    (function(o, e) {
      _.exports = e(rt());
    })(M, (function(o) {
      function e(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var r = e(o), n = { name: "lb", weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), weekStart: 1, weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), ordinal: function(t) {
        return t;
      }, formats: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" } };
      return r.default.locale(n, null, true), n;
    }));
  })(u)), u.exports;
}
var i = m();
const c = /* @__PURE__ */ by(i), g = /* @__PURE__ */ p({
  __proto__: null,
  default: c
}, [i]);

export { g as l };
//# sourceMappingURL=lb-C7cF6f-g-BIj82xEt-CuLC--ry.js.map
//# sourceMappingURL=lb-C7cF6f-g-BIj82xEt-CuLC--ry.js.map
