import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function M(n, _) {
  for (var a = 0; a < _.length; a++) {
    const e = _[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(n, r, o.get ? o : {
            enumerable: true,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, v = s.exports, d;
function h() {
  return d || (d = 1, (function(n, _) {
    (function(a, e) {
      n.exports = e(rt());
    })(v, (function(a) {
      function e(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var r = e(a), o = "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), u = "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), j = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/, i = function(t, m) {
        return j.test(m) ? o[t.month()] : u[t.month()];
      };
      i.s = u, i.f = o;
      var p = { name: "hr", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: i, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "za %s", past: "prije %s", s: "sekunda", m: "minuta", mm: "%d minuta", h: "sat", hh: "%d sati", d: "dan", dd: "%d dana", M: "mjesec", MM: "%d mjeseci", y: "godina", yy: "%d godine" }, ordinal: function(t) {
        return t + ".";
      } };
      return r.default.locale(p, null, true), p;
    }));
  })(s)), s.exports;
}
var l = h();
const Y = /* @__PURE__ */ by(l), g = /* @__PURE__ */ M({
  __proto__: null,
  default: Y
}, [l]);

export { g as h };
//# sourceMappingURL=hr-CxqKUaRz-CWA4UHbs-B2AG-EZJ.js.map
//# sourceMappingURL=hr-CxqKUaRz-CWA4UHbs-B2AG-EZJ.js.map
