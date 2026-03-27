import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function L(a, u) {
  for (var n = 0; n < u.length; n++) {
    const e = u[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in a)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(a, t, o.get ? o : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, h = s.exports, f;
function x() {
  return f || (f = 1, (function(a, u) {
    (function(n, e) {
      a.exports = e(rt());
    })(h, (function(n) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(n), o = "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), c = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, d = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, m = /[١٢٣٤٥٦٧٨٩٠]/g, l = /،/g, M = /\d/g, Y = /,/g, _ = { name: "ar", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), months: o, monthsShort: o, weekStart: 6, meridiem: function(r) {
        return r > 12 ? "م" : "ص";
      }, relativeTime: { future: "بعد %s", past: "منذ %s", s: "ثانية واحدة", m: "دقيقة واحدة", mm: "%d دقائق", h: "ساعة واحدة", hh: "%d ساعات", d: "يوم واحد", dd: "%d أيام", M: "شهر واحد", MM: "%d أشهر", y: "عام واحد", yy: "%d أعوام" }, preparse: function(r) {
        return r.replace(m, (function(i) {
          return d[i];
        })).replace(l, ",");
      }, postformat: function(r) {
        return r.replace(M, (function(i) {
          return c[i];
        })).replace(Y, "،");
      }, ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } };
      return t.default.locale(_, null, true), _;
    }));
  })(s)), s.exports;
}
var p = x();
const v = /* @__PURE__ */ by(p), j = /* @__PURE__ */ L({
  __proto__: null,
  default: v
}, [p]);

export { j as a };
//# sourceMappingURL=ar-BqJT7YGT-DUzz4MIM-BEI8B9bb.js.map
//# sourceMappingURL=ar-BqJT7YGT-DUzz4MIM-BEI8B9bb.js.map
