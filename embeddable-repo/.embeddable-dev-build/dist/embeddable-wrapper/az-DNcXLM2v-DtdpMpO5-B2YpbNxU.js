import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function d(o, i) {
  for (var a = 0; a < i.length; a++) {
    const r = i[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const e in r)
        if (e !== "default" && !(e in o)) {
          const n = Object.getOwnPropertyDescriptor(r, e);
          n && Object.defineProperty(o, e, n.get ? n : {
            enumerable: true,
            get: () => r[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} }, f = _.exports, s;
function y() {
  return s || (s = 1, (function(o, i) {
    (function(a, r) {
      o.exports = r(rt());
    })(f, (function(a) {
      function r(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var e = r(a), n = { name: "az", weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "bir neçə saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, ordinal: function(t) {
        return t;
      } };
      return e.default.locale(n, null, true), n;
    }));
  })(_)), _.exports;
}
var m = y();
const p = /* @__PURE__ */ by(m), M = /* @__PURE__ */ d({
  __proto__: null,
  default: p
}, [m]);

export { M as a };
//# sourceMappingURL=az-DNcXLM2v-DtdpMpO5-B2YpbNxU.js.map
//# sourceMappingURL=az-DNcXLM2v-DtdpMpO5-B2YpbNxU.js.map
