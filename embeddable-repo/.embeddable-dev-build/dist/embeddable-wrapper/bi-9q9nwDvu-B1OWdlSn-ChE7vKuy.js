import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function f(i, s) {
  for (var a = 0; a < s.length; a++) {
    const e = s[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in i)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(i, r, n.get ? n : {
            enumerable: true,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} }, p = o.exports, _;
function l() {
  return _ || (_ = 1, (function(i, s) {
    (function(a, e) {
      i.exports = e(rt());
    })(p, (function(a) {
      function e(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var r = e(a), n = { name: "bi", weekdays: "Sande_Mande_Tusde_Wenesde_Tosde_Fraede_Sarade".split("_"), months: "Januari_Februari_Maj_Eprel_Mei_Jun_Julae_Okis_Septemba_Oktoba_Novemba_Disemba".split("_"), weekStart: 1, weekdaysShort: "San_Man_Tus_Wen_Tos_Frae_Sar".split("_"), monthsShort: "Jan_Feb_Maj_Epr_Mai_Jun_Jul_Oki_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "San_Ma_Tu_We_To_Fr_Sar".split("_"), ordinal: function(t) {
        return t;
      }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "lo %s", past: "%s bifo", s: "sam seken", m: "wan minit", mm: "%d minit", h: "wan haoa", hh: "%d haoa", d: "wan dei", dd: "%d dei", M: "wan manis", MM: "%d manis", y: "wan yia", yy: "%d yia" } };
      return r.default.locale(n, null, true), n;
    }));
  })(o)), o.exports;
}
var u = l();
const M = /* @__PURE__ */ by(u), y = /* @__PURE__ */ f({
  __proto__: null,
  default: M
}, [u]);

export { y as b };
//# sourceMappingURL=bi-9q9nwDvu-B1OWdlSn-ChE7vKuy.js.map
//# sourceMappingURL=bi-9q9nwDvu-B1OWdlSn-ChE7vKuy.js.map
