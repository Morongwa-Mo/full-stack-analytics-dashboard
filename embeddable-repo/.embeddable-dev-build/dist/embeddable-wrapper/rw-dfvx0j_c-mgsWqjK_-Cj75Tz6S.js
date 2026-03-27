import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function _(n, i) {
  for (var t = 0; t < i.length; t++) {
    const e = i[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const u = Object.getOwnPropertyDescriptor(e, r);
          u && Object.defineProperty(n, r, u.get ? u : {
            enumerable: true,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} }, p = o.exports, s;
function c() {
  return s || (s = 1, (function(n, i) {
    (function(t, e) {
      n.exports = e(rt());
    })(p, (function(t) {
      function e(a) {
        return a && typeof a == "object" && "default" in a ? a : { default: a };
      }
      var r = e(t), u = { name: "rw", weekdays: "Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split("_"), months: "Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split("_"), relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(a) {
        return a;
      } };
      return r.default.locale(u, null, true), u;
    }));
  })(o)), o.exports;
}
var m = c();
const l = /* @__PURE__ */ by(m), y = /* @__PURE__ */ _({
  __proto__: null,
  default: l
}, [m]);

export { y as r };
//# sourceMappingURL=rw-dfvx0j_c-mgsWqjK_-Cj75Tz6S.js.map
//# sourceMappingURL=rw-dfvx0j_c-mgsWqjK_-Cj75Tz6S.js.map
