import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function m(s, d) {
  for (var _ = 0; _ < d.length; _++) {
    const e = d[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(s, t, o.get ? o : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} }, p = n.exports, a;
function l() {
  return a || (a = 1, (function(s, d) {
    (function(_, e) {
      s.exports = e(rt());
    })(p, (function(_) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(_), o = { name: "sd", weekdays: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), months: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekStart: 1, weekdaysShort: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), monthsShort: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekdaysMin: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" } };
      return t.default.locale(o, null, true), o;
    }));
  })(n)), n.exports;
}
var i = l();
const c = /* @__PURE__ */ by(i), y = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [i]);
export {
  y as s
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2QtY1Z3RHJjb3ctQ2diNWtybWkuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L3NkLWNWd0RyY293LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgdSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGYgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIG0ocywgZCkge1xuICBmb3IgKHZhciBfID0gMDsgXyA8IGQubGVuZ3RoOyBfKyspIHtcbiAgICBjb25zdCBlID0gZFtfXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gcykpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCB0LCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIG4gPSB7IGV4cG9ydHM6IHt9IH0sIHAgPSBuLmV4cG9ydHMsIGE7XG5mdW5jdGlvbiBsKCkge1xuICByZXR1cm4gYSB8fCAoYSA9IDEsIChmdW5jdGlvbihzLCBkKSB7XG4gICAgKGZ1bmN0aW9uKF8sIGUpIHtcbiAgICAgIHMuZXhwb3J0cyA9IGUoZigpKTtcbiAgICB9KShwLCAoZnVuY3Rpb24oXykge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShfKSwgbyA9IHsgbmFtZTogXCJzZFwiLCB3ZWVrZGF5czogXCLYotqG2LFf2LPZiNmF2LFf2Kfasdin2LHZiF/Yp9ix2KjYuV/YrtmF2YrYs1/YrNmF2Llf2ofZhtqH2LFcIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCLYrNmG2YjYsdmKX9mB2YrYqNix2YjYsdmKX9mF2KfYsdqGX9in2b7YsdmK2YRf2YXYptmKX9is2YjZhl/YrNmI2YTYp9ih2ZBf2KLar9iz2b1f2LPZitm+2b3Zhdio2LFf2KLaqtm92YjYqNixX9mG2YjZhdio2LFf2orYs9mF2KjYsVwiLnNwbGl0KFwiX1wiKSwgd2Vla1N0YXJ0OiAxLCB3ZWVrZGF5c1Nob3J0OiBcItii2obYsV/Ys9mI2YXYsV/Yp9qx2KfYsdmIX9in2LHYqNi5X9iu2YXZitizX9is2YXYuV/ah9mG2ofYsVwiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwi2KzZhtmI2LHZil/ZgdmK2KjYsdmI2LHZil/Zhdin2LHahl/Yp9m+2LHZitmEX9mF2KbZil/YrNmI2YZf2KzZiNmE2KfYodmQX9ii2q/Ys9m9X9iz2YrZvtm92YXYqNixX9ii2qrZvdmI2KjYsV/ZhtmI2YXYqNixX9qK2LPZhdio2LFcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzTWluOiBcItii2obYsV/Ys9mI2YXYsV/Yp9qx2KfYsdmIX9in2LHYqNi5X9iu2YXZitizX9is2YXYuV/ah9mG2ofYsVwiLnNwbGl0KFwiX1wiKSwgb3JkaW5hbDogZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0sIGZvcm1hdHM6IHsgTFQ6IFwiSEg6bW1cIiwgTFRTOiBcIkhIOm1tOnNzXCIsIEw6IFwiREQvTU0vWVlZWVwiLCBMTDogXCJEIE1NTU0gWVlZWVwiLCBMTEw6IFwiRCBNTU1NIFlZWVkgSEg6bW1cIiwgTExMTDogXCJkZGRk2IwgRCBNTU1NIFlZWVkgSEg6bW1cIiB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcIiVzINm+2YjYoVwiLCBwYXN0OiBcIiVzINin2rNcIiwgczogXCLahtmG2K8g2LPZitqq2YbailwiLCBtOiBcItmH2qog2YXZhtm9XCIsIG1tOiBcIiVkINmF2YbZvVwiLCBoOiBcItmH2qog2qrZhNin2qpcIiwgaGg6IFwiJWQg2qrZhNin2qpcIiwgZDogXCLZh9qqINqP2YrZhtmH2YZcIiwgZGQ6IFwiJWQg2o/ZitmG2YfZhlwiLCBNOiBcItmH2qog2YXZh9mK2YbZiFwiLCBNTTogXCIlZCDZhdmH2YrZhtinXCIsIHk6IFwi2YfaqiDYs9in2YRcIiwgeXk6IFwiJWQg2LPYp9mEXCIgfSB9O1xuICAgICAgcmV0dXJuIHQuZGVmYXVsdC5sb2NhbGUobywgbnVsbCwgITApLCBvO1xuICAgIH0pKTtcbiAgfSkobikpLCBuLmV4cG9ydHM7XG59XG52YXIgaSA9IGwoKTtcbmNvbnN0IGMgPSAvKiBAX19QVVJFX18gKi8gdShpKSwgeSA9IC8qIEBfX1BVUkVfXyAqLyBtKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBjXG59LCBbaV0pO1xuZXhwb3J0IHtcbiAgeSBhcyBzXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2QtY1Z3RHJjb3cuanMubWFwXG4iXSwibmFtZXMiOlsiZiIsInUiXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSxvQ0FBb0MsTUFBTSxHQUFHLEdBQUcsUUFBUSwwRUFBMEUsTUFBTSxHQUFHLEdBQUcsV0FBVyxHQUFHLGVBQWUsb0NBQW9DLE1BQU0sR0FBRyxHQUFHLGFBQWEsMEVBQTBFLE1BQU0sR0FBRyxHQUFHLGFBQWEsb0NBQW9DLE1BQU0sR0FBRyxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQ3hiLGVBQU87QUFBQSxNQUNULEdBQUcsU0FBUyxFQUFFLElBQUksU0FBUyxLQUFLLFlBQVksR0FBRyxjQUFjLElBQUksZUFBZSxLQUFLLHFCQUFxQixNQUFNLDZCQUE2QixjQUFjLEVBQUUsUUFBUSxVQUFVLE1BQU0sU0FBUyxHQUFHLGFBQWEsR0FBRyxVQUFVLElBQUksVUFBVSxHQUFHLFdBQVcsSUFBSSxXQUFXLEdBQUcsWUFBWSxJQUFJLFlBQVksR0FBRyxZQUFZLElBQUksWUFBWSxHQUFHLFVBQVUsSUFBSSxXQUFVO0FBQy9WLGFBQU8sRUFBRSxRQUFRLE9BQU8sR0FBRyxNQUFNLElBQUUsR0FBRztBQUFBLElBQ3hDLEVBQUM7QUFBQSxFQUNILEdBQUcsQ0FBQyxJQUFJLEVBQUU7QUFDWjtBQUNBLElBQUksSUFBSSxFQUFDO0FBQ0osTUFBQyxJQUFvQkMsbUJBQUUsQ0FBQyxHQUFHLElBQW9CLGtCQUFFO0FBQUEsRUFDcEQsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
