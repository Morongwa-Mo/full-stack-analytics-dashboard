import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function d(_, o) {
  for (var a = 0; a < o.length; a++) {
    const r = o[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const t in r)
        if (t !== "default" && !(t in _)) {
          const s = Object.getOwnPropertyDescriptor(r, t);
          s && Object.defineProperty(_, t, s.get ? s : {
            enumerable: true,
            get: () => r[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} }, f = i.exports, n;
function p() {
  return n || (n = 1, (function(_, o) {
    (function(a, r) {
      _.exports = r(rt());
    })(f, (function(a) {
      function r(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var t = r(a), s = { name: "tr", weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinal: function(e) {
        return e + ".";
      } };
      return t.default.locale(s, null, true), s;
    }));
  })(i)), i.exports;
}
var u = p();
const y = /* @__PURE__ */ by(u), b = /* @__PURE__ */ d({
  __proto__: null,
  default: y
}, [u]);

export { b as t };
//# sourceMappingURL=tr-BjG2Zq1u-BIfY2zex-Df-28TKE.js.map
//# sourceMappingURL=tr-BjG2Zq1u-BIfY2zex-Df-28TKE.js.map
