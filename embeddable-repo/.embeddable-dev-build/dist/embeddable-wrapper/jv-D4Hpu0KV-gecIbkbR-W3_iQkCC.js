import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function l(o, a) {
  for (var n = 0; n < a.length; n++) {
    const e = a[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const s = Object.getOwnPropertyDescriptor(e, t);
          s && Object.defineProperty(o, t, s.get ? s : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var u = { exports: {} }, d = u.exports, _;
function f() {
  return _ || (_ = 1, (function(o, a) {
    (function(n, e) {
      o.exports = e(rt());
    })(d, (function(n) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(n), s = { name: "jv", weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), weekStart: 1, weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" } };
      return t.default.locale(s, null, true), s;
    }));
  })(u)), u.exports;
}
var i = f();
const M = /* @__PURE__ */ by(i), S = /* @__PURE__ */ l({
  __proto__: null,
  default: M
}, [i]);

export { S as j };
//# sourceMappingURL=jv-D4Hpu0KV-gecIbkbR-W3_iQkCC.js.map
//# sourceMappingURL=jv-D4Hpu0KV-gecIbkbR-W3_iQkCC.js.map
