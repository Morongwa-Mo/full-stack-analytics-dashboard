import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function p(o, u) {
  for (var a = 0; a < u.length; a++) {
    const e = u[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const i = Object.getOwnPropertyDescriptor(e, r);
          i && Object.defineProperty(o, r, i.get ? i : {
            enumerable: true,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} }, h = n.exports, _;
function d() {
  return _ || (_ = 1, (function(o, u) {
    (function(a, e) {
      o.exports = e(rt());
    })(h, (function(a) {
      function e(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var r = e(a), i = { name: "mi", weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), weekStart: 1, weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), ordinal: function(t) {
        return t;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" } };
      return r.default.locale(i, null, true), i;
    }));
  })(n)), n.exports;
}
var s = d();
const M = /* @__PURE__ */ by(s), c = /* @__PURE__ */ p({
  __proto__: null,
  default: M
}, [s]);

export { c as m };
//# sourceMappingURL=mi-Cc5Vvuhu-EhVA2Vlp-CiOROMd8.js.map
//# sourceMappingURL=mi-Cc5Vvuhu-EhVA2Vlp-CiOROMd8.js.map
