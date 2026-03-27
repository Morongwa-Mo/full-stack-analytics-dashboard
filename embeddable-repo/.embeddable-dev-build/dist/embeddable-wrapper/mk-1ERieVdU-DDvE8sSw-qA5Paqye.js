import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function d(n, a) {
  for (var _ = 0; _ < a.length; _++) {
    const t = a[_];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in n)) {
          const o = Object.getOwnPropertyDescriptor(t, e);
          o && Object.defineProperty(n, e, o.get ? o : {
            enumerable: true,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, p = s.exports, i;
function l() {
  return i || (i = 1, (function(n, a) {
    (function(_, t) {
      n.exports = t(rt());
    })(p, (function(_) {
      function t(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var e = t(_), o = { name: "mk", weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), weekStart: 1, weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" } };
      return e.default.locale(o, null, true), o;
    }));
  })(s)), s.exports;
}
var m = l();
const M = /* @__PURE__ */ by(m), y = /* @__PURE__ */ d({
  __proto__: null,
  default: M
}, [m]);

export { y as m };
//# sourceMappingURL=mk-1ERieVdU-DDvE8sSw-qA5Paqye.js.map
//# sourceMappingURL=mk-1ERieVdU-DDvE8sSw-qA5Paqye.js.map
