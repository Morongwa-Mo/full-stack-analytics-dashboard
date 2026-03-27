import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function m(n, u) {
  for (var _ = 0; _ < u.length; _++) {
    const e = u[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, p = s.exports, a;
function l() {
  return a || (a = 1, (function(n, u) {
    (function(_, e) {
      n.exports = e(rt());
    })(p, (function(_) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(_), o = { name: "uz", weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Якин %s ичида", past: "%s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" } };
      return t.default.locale(o, null, true), o;
    }));
  })(s)), s.exports;
}
var i = l();
const c = /* @__PURE__ */ by(i), y = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [i]);

export { y as u };
//# sourceMappingURL=uz-C0-0xpFg-BXH2rKTs-Dld-gK3V.js.map
//# sourceMappingURL=uz-C0-0xpFg-BXH2rKTs-Dld-gK3V.js.map
