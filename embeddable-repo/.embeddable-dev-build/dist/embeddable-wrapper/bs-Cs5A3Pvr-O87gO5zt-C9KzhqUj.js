import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function l(s, _) {
  for (var o = 0; o < _.length; o++) {
    const e = _[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(s, t, a.get ? a : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} }, m = n.exports, u;
function d() {
  return u || (u = 1, (function(s, _) {
    (function(o, e) {
      s.exports = e(rt());
    })(m, (function(o) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(o), a = { name: "bs", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), weekStart: 1, weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
      return t.default.locale(a, null, true), a;
    }));
  })(n)), n.exports;
}
var i = d();
const b = /* @__PURE__ */ by(i), M = /* @__PURE__ */ l({
  __proto__: null,
  default: b
}, [i]);

export { M as b };
//# sourceMappingURL=bs-Cs5A3Pvr-O87gO5zt-C9KzhqUj.js.map
//# sourceMappingURL=bs-Cs5A3Pvr-O87gO5zt-C9KzhqUj.js.map
