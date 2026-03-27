import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function p(n, _) {
  for (var a = 0; a < _.length; a++) {
    const e = _[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const s = Object.getOwnPropertyDescriptor(e, t);
          s && Object.defineProperty(n, t, s.get ? s : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} }, d = o.exports, i;
function f() {
  return i || (i = 1, (function(n, _) {
    (function(a, e) {
      n.exports = e(rt());
    })(d, (function(a) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(a), s = { name: "ms", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH.mm", LLLL: "dddd, D MMMM YYYY HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(r) {
        return r + ".";
      } };
      return t.default.locale(s, null, true), s;
    }));
  })(o)), o.exports;
}
var m = f();
const M = /* @__PURE__ */ by(m), h = /* @__PURE__ */ p({
  __proto__: null,
  default: M
}, [m]);

export { h as m };
//# sourceMappingURL=ms-DmO1bIlb-Bj8U3kMg-CELmReIa.js.map
//# sourceMappingURL=ms-DmO1bIlb-Bj8U3kMg-CELmReIa.js.map
