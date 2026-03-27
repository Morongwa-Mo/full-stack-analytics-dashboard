import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function m(n, a) {
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
      var e = t(_), o = { name: "tg", weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "баъди %s", past: "%s пеш", s: "якчанд сония", m: "як дақиқа", mm: "%d дақиқа", h: "як соат", hh: "%d соат", d: "як рӯз", dd: "%d рӯз", M: "як моҳ", MM: "%d моҳ", y: "як сол", yy: "%d сол" } };
      return e.default.locale(o, null, true), o;
    }));
  })(s)), s.exports;
}
var u = l();
const c = /* @__PURE__ */ by(u), Y = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [u]);

export { Y as t };
//# sourceMappingURL=tg-CP_affLn-D9zXrUfZ-Zjk7dnGL.js.map
//# sourceMappingURL=tg-CP_affLn-D9zXrUfZ-Zjk7dnGL.js.map
