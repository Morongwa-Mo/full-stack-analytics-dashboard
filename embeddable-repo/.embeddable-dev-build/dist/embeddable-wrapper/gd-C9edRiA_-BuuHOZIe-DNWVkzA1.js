import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function l(i, _) {
  for (var r = 0; r < _.length; r++) {
    const t = _[r];
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
var o = { exports: {} }, h = o.exports, s;
function c() {
  return s || (s = 1, (function(i, _) {
    (function(r, t) {
      i.exports = t(rt());
    })(h, (function(r) {
      function t(a) {
        return a && typeof a == "object" && "default" in a ? a : { default: a };
      }
      var e = t(r), n = { name: "gd", weekdays: "Didòmhnaich_Diluain_Dimàirt_Diciadain_Diardaoin_Dihaoine_Disathairne".split("_"), months: "Am Faoilleach_An Gearran_Am Màrt_An Giblean_An Cèitean_An t-Ògmhios_An t-Iuchar_An Lùnastal_An t-Sultain_An Dàmhair_An t-Samhain_An Dùbhlachd".split("_"), weekStart: 1, weekdaysShort: "Did_Dil_Dim_Dic_Dia_Dih_Dis".split("_"), monthsShort: "Faoi_Gear_Màrt_Gibl_Cèit_Ògmh_Iuch_Lùn_Sult_Dàmh_Samh_Dùbh".split("_"), weekdaysMin: "Dò_Lu_Mà_Ci_Ar_Ha_Sa".split("_"), ordinal: function(a) {
        return a;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" } };
      return e.default.locale(n, null, true), n;
    }));
  })(o)), o.exports;
}
var d = c();
const f = /* @__PURE__ */ by(d), M = /* @__PURE__ */ l({
  __proto__: null,
  default: f
}, [d]);

export { M as g };
//# sourceMappingURL=gd-C9edRiA_-BuuHOZIe-DNWVkzA1.js.map
//# sourceMappingURL=gd-C9edRiA_-BuuHOZIe-DNWVkzA1.js.map
