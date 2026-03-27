import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function d(a, _) {
  for (var s = 0; s < _.length; s++) {
    const r = _[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const t in r)
        if (t !== "default" && !(t in a)) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          n && Object.defineProperty(a, t, n.get ? n : {
            enumerable: true,
            get: () => r[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} }, D = o.exports, i;
function c() {
  return i || (i = 1, (function(a, _) {
    (function(s, r) {
      a.exports = r(rt());
    })(D, (function(s) {
      function r(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var t = r(s), n = { name: "ca", weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"), weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), months: "Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"), monthsShort: "Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", ll: "D MMM YYYY", lll: "D MMM YYYY, H:mm", llll: "ddd D MMM YYYY, H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinal: function(e) {
        return "" + e + (e === 1 || e === 3 ? "r" : e === 2 ? "n" : e === 4 ? "t" : "è");
      } };
      return t.default.locale(n, null, true), n;
    }));
  })(o)), o.exports;
}
var u = c();
const M = /* @__PURE__ */ by(u), p = /* @__PURE__ */ d({
  __proto__: null,
  default: M
}, [u]);

export { p as c };
//# sourceMappingURL=ca-CuZ4I6q7-B0Uc16b8-WzqTLYn4.js.map
//# sourceMappingURL=ca-CuZ4I6q7-B0Uc16b8-WzqTLYn4.js.map
