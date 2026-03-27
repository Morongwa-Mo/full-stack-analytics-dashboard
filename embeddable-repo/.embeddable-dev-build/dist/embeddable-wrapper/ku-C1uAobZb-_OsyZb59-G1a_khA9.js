import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function y(a, i) {
  for (var t = 0; t < i.length; t++) {
    const r = i[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const n in r)
        if (n !== "default" && !(n in a)) {
          const o = Object.getOwnPropertyDescriptor(r, n);
          o && Object.defineProperty(a, n, o.get ? o : {
            enumerable: true,
            get: () => r[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var u = { exports: {} }, Y = u.exports, l;
function g() {
  return l || (l = 1, (function(a, i) {
    (function(t, r) {
      r(i, rt());
    })(Y, (function(t, r) {
      function n(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var o = n(r), f = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, m = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, d = ["کانوونی دووەم", "شوبات", "ئادار", "نیسان", "ئایار", "حوزەیران", "تەممووز", "ئاب", "ئەیلوول", "تشرینی یەکەم", "تشرینی دووەم", "کانوونی یەکەم"], c = { name: "ku", months: d, monthsShort: d, weekdays: "یەکشەممە_دووشەممە_سێشەممە_چوارشەممە_پێنجشەممە_هەینی_شەممە".split("_"), weekdaysShort: "یەکشەم_دووشەم_سێشەم_چوارشەم_پێنجشەم_هەینی_شەممە".split("_"), weekStart: 6, weekdaysMin: "ی_د_س_چ_پ_هـ_ش".split("_"), preparse: function(e) {
        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(s) {
          return m[s];
        })).replace(/،/g, ",");
      }, postformat: function(e) {
        return e.replace(/\d/g, (function(s) {
          return f[s];
        })).replace(/,/g, "،");
      }, ordinal: function(e) {
        return e;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiem: function(e) {
        return e < 12 ? "پ.ن" : "د.ن";
      }, relativeTime: { future: "لە %s", past: "لەمەوپێش %s", s: "چەند چرکەیەک", m: "یەک خولەک", mm: "%d خولەک", h: "یەک کاتژمێر", hh: "%d کاتژمێر", d: "یەک ڕۆژ", dd: "%d ڕۆژ", M: "یەک مانگ", MM: "%d مانگ", y: "یەک ساڵ", yy: "%d ساڵ" } };
      o.default.locale(c, null, true), t.default = c, t.englishToArabicNumbersMap = f, Object.defineProperty(t, "__esModule", { value: true });
    }));
  })(u, u.exports)), u.exports;
}
var p = g();
const k = /* @__PURE__ */ by(p), h = /* @__PURE__ */ y({
  __proto__: null,
  default: k
}, [p]);

export { h as k };
//# sourceMappingURL=ku-C1uAobZb-_OsyZb59-G1a_khA9.js.map
//# sourceMappingURL=ku-C1uAobZb-_OsyZb59-G1a_khA9.js.map
