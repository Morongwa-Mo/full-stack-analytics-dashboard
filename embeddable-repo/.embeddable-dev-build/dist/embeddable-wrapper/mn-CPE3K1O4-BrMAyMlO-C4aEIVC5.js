import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function d(o, a) {
  for (var n = 0; n < a.length; n++) {
    const e = a[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const _ = Object.getOwnPropertyDescriptor(e, t);
          _ && Object.defineProperty(o, t, _.get ? _ : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, p = s.exports, i;
function l() {
  return i || (i = 1, (function(o, a) {
    (function(n, e) {
      o.exports = e(rt());
    })(p, (function(n) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(n), _ = { name: "mn", weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"), months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"), weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"), monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"), weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY оны MMMMын D", LLL: "YYYY оны MMMMын D HH:mm", LLLL: "dddd, YYYY оны MMMMын D HH:mm" }, relativeTime: { future: "%s", past: "%s", s: "саяхан", m: "м", mm: "%dм", h: "1ц", hh: "%dц", d: "1ө", dd: "%dө", M: "1с", MM: "%dс", y: "1ж", yy: "%dж" } };
      return t.default.locale(_, null, true), _;
    }));
  })(s)), s.exports;
}
var m = l();
const M = /* @__PURE__ */ by(m), y = /* @__PURE__ */ d({
  __proto__: null,
  default: M
}, [m]);

export { y as m };
//# sourceMappingURL=mn-CPE3K1O4-BrMAyMlO-C4aEIVC5.js.map
//# sourceMappingURL=mn-CPE3K1O4-BrMAyMlO-C4aEIVC5.js.map
