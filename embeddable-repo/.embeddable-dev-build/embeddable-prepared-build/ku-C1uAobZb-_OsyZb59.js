import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
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
export {
  h as k
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3UtQzF1QW9iWmItX09zeVpiNTkuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2t1LUMxdUFvYlpiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgXyB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIE0gfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIHkoYSwgaSkge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IGkubGVuZ3RoOyB0KyspIHtcbiAgICBjb25zdCByID0gaVt0XTtcbiAgICBpZiAodHlwZW9mIHIgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShyKSkge1xuICAgICAgZm9yIChjb25zdCBuIGluIHIpXG4gICAgICAgIGlmIChuICE9PSBcImRlZmF1bHRcIiAmJiAhKG4gaW4gYSkpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLCBuKTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBuLCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gcltuXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHUgPSB7IGV4cG9ydHM6IHt9IH0sIFkgPSB1LmV4cG9ydHMsIGw7XG5mdW5jdGlvbiBnKCkge1xuICByZXR1cm4gbCB8fCAobCA9IDEsIChmdW5jdGlvbihhLCBpKSB7XG4gICAgKGZ1bmN0aW9uKHQsIHIpIHtcbiAgICAgIHIoaSwgTSgpKTtcbiAgICB9KShZLCAoZnVuY3Rpb24odCwgcikge1xuICAgICAgZnVuY3Rpb24gbihlKSB7XG4gICAgICAgIHJldHVybiBlICYmIHR5cGVvZiBlID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gbihyKSwgZiA9IHsgMTogXCLZoVwiLCAyOiBcItmiXCIsIDM6IFwi2aNcIiwgNDogXCLZpFwiLCA1OiBcItmlXCIsIDY6IFwi2aZcIiwgNzogXCLZp1wiLCA4OiBcItmoXCIsIDk6IFwi2alcIiwgMDogXCLZoFwiIH0sIG0gPSB7IFwi2aFcIjogXCIxXCIsIFwi2aJcIjogXCIyXCIsIFwi2aNcIjogXCIzXCIsIFwi2aRcIjogXCI0XCIsIFwi2aVcIjogXCI1XCIsIFwi2aZcIjogXCI2XCIsIFwi2adcIjogXCI3XCIsIFwi2ahcIjogXCI4XCIsIFwi2alcIjogXCI5XCIsIFwi2aBcIjogXCIwXCIgfSwgZCA9IFtcItqp2KfZhtmI2YjZhtuMINiv2YjZiNuV2YVcIiwgXCLYtNmI2KjYp9iqXCIsIFwi2KbYp9iv2KfYsVwiLCBcItmG24zYs9in2YZcIiwgXCLYptin24zYp9ixXCIsIFwi2K3ZiNiy25XbjNix2KfZhlwiLCBcItiq25XZhdmF2YjZiNiyXCIsIFwi2KbYp9ioXCIsIFwi2KbblduM2YTZiNmI2YRcIiwgXCLYqti02LHbjNmG24wg24zbldqp25XZhVwiLCBcItiq2LTYsduM2YbbjCDYr9mI2YjbldmFXCIsIFwi2qnYp9mG2YjZiNmG24wg24zbldqp25XZhVwiXSwgYyA9IHsgbmFtZTogXCJrdVwiLCBtb250aHM6IGQsIG1vbnRoc1Nob3J0OiBkLCB3ZWVrZGF5czogXCLbjNuV2qnYtNuV2YXZhduVX9iv2YjZiNi025XZhdmF25Vf2LPbjti025XZhdmF25Vf2obZiNin2LHYtNuV2YXZhduVX9m+247Zhtis2LTbldmF2YXblV/Zh9uV24zZhtuMX9i025XZhdmF25VcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzU2hvcnQ6IFwi24zbldqp2LTbldmFX9iv2YjZiNi025XZhV/Ys9uO2LTbldmFX9qG2YjYp9ix2LTbldmFX9m+247Zhtis2LTbldmFX9mH25XbjNmG24xf2LTbldmF2YXblVwiLnNwbGl0KFwiX1wiKSwgd2Vla1N0YXJ0OiA2LCB3ZWVrZGF5c01pbjogXCLbjF/Yr1/Ys1/ahl/Zvl/Zh9mAX9i0XCIuc3BsaXQoXCJfXCIpLCBwcmVwYXJzZTogZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gZS5yZXBsYWNlKC9b2aHZotmj2aTZpdmm2afZqNmp2aBdL2csIChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgcmV0dXJuIG1bc107XG4gICAgICAgIH0pKS5yZXBsYWNlKC/YjC9nLCBcIixcIik7XG4gICAgICB9LCBwb3N0Zm9ybWF0OiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBlLnJlcGxhY2UoL1xcZC9nLCAoZnVuY3Rpb24ocykge1xuICAgICAgICAgIHJldHVybiBmW3NdO1xuICAgICAgICB9KSkucmVwbGFjZSgvLC9nLCBcItiMXCIpO1xuICAgICAgfSwgb3JkaW5hbDogZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH0sIGZvcm1hdHM6IHsgTFQ6IFwiSEg6bW1cIiwgTFRTOiBcIkhIOm1tOnNzXCIsIEw6IFwiREQvTU0vWVlZWVwiLCBMTDogXCJEIE1NTU0gWVlZWVwiLCBMTEw6IFwiRCBNTU1NIFlZWVkgSEg6bW1cIiwgTExMTDogXCJkZGRkLCBEIE1NTU0gWVlZWSBISDptbVwiIH0sIG1lcmlkaWVtOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBlIDwgMTIgPyBcItm+LtmGXCIgOiBcItivLtmGXCI7XG4gICAgICB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcItmE25UgJXNcIiwgcGFzdDogXCLZhNuV2YXbldmI2b7bjti0ICVzXCIsIHM6IFwi2obbldmG2K8g2obYsdqp25XbjNuV2qlcIiwgbTogXCLbjNuV2qkg2K7ZiNmE25XaqVwiLCBtbTogXCIlZCDYrtmI2YTbldqpXCIsIGg6IFwi24zbldqpINqp2KfYqtqY2YXbjtixXCIsIGhoOiBcIiVkINqp2KfYqtqY2YXbjtixXCIsIGQ6IFwi24zbldqpINqV24bamFwiLCBkZDogXCIlZCDalduG2phcIiwgTTogXCLbjNuV2qkg2YXYp9mG2q9cIiwgTU06IFwiJWQg2YXYp9mG2q9cIiwgeTogXCLbjNuV2qkg2LPYp9q1XCIsIHl5OiBcIiVkINiz2KfatVwiIH0gfTtcbiAgICAgIG8uZGVmYXVsdC5sb2NhbGUoYywgbnVsbCwgITApLCB0LmRlZmF1bHQgPSBjLCB0LmVuZ2xpc2hUb0FyYWJpY051bWJlcnNNYXAgPSBmLCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO1xuICAgIH0pKTtcbiAgfSkodSwgdS5leHBvcnRzKSksIHUuZXhwb3J0cztcbn1cbnZhciBwID0gZygpO1xuY29uc3QgayA9IC8qIEBfX1BVUkVfXyAqLyBfKHApLCBoID0gLyogQF9fUFVSRV9fICovIHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGtcbn0sIFtwXSk7XG5leHBvcnQge1xuICBoIGFzIGtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rdS1DMXVBb2JaYi5qcy5tYXBcbiJdLCJuYW1lcyI6WyJNIiwiXyJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxD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
