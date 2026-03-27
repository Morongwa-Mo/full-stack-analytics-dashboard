import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function d(i, o) {
  for (var a = 0; a < o.length; a++) {
    const t = o[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in i)) {
          const n = Object.getOwnPropertyDescriptor(t, e);
          n && Object.defineProperty(i, e, n.get ? n : {
            enumerable: true,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} }, f = _.exports, u;
function p() {
  return u || (u = 1, (function(i, o) {
    (function(a, t) {
      i.exports = t(rt());
    })(f, (function(a) {
      function t(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var e = t(a), n = { name: "mt", weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"), months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"), weekStart: 1, weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"), weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "f’ %s", past: "%s ilu", s: "ftit sekondi", m: "minuta", mm: "%d minuti", h: "siegħa", hh: "%d siegħat", d: "ġurnata", dd: "%d ġranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" } };
      return e.default.locale(n, null, true), n;
    }));
  })(_)), _.exports;
}
var s = p();
const M = /* @__PURE__ */ by(s), b = /* @__PURE__ */ d({
  __proto__: null,
  default: M
}, [s]);

export { b as m };
//# sourceMappingURL=mt-CmjQyTfP-Btsnx7e2-ClnRCXi0.js.map
//# sourceMappingURL=mt-CmjQyTfP-Btsnx7e2-ClnRCXi0.js.map
