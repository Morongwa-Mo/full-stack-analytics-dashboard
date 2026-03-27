import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function m(u, i) {
  for (var r = 0; r < i.length; r++) {
    const e = i[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in u)) {
          const o = Object.getOwnPropertyDescriptor(e, a);
          o && Object.defineProperty(u, a, o.get ? o : {
            enumerable: true,
            get: () => e[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} }, Y = n.exports, l;
function M() {
  return l || (l = 1, (function(u, i) {
    (function(r, e) {
      u.exports = e(rt());
    })(Y, (function(r) {
      function e(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var a = e(r), o = { name: "eu", weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), weekStart: 1, weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), ordinal: function(t) {
        return t;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" } };
      return a.default.locale(o, null, true), o;
    }));
  })(n)), n.exports;
}
var _ = M();
const f = /* @__PURE__ */ by(_), c = /* @__PURE__ */ m({
  __proto__: null,
  default: f
}, [_]);

export { c as e };
//# sourceMappingURL=eu-Bx0OOE0x-CBdwbWF4-BmGU6HQ6.js.map
//# sourceMappingURL=eu-Bx0OOE0x-CBdwbWF4-BmGU6HQ6.js.map
