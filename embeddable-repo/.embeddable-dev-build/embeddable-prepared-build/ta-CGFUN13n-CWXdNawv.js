import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function m(a, s) {
  for (var _ = 0; _ < s.length; _++) {
    const t = s[_];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in a)) {
          const o = Object.getOwnPropertyDescriptor(t, e);
          o && Object.defineProperty(a, e, o.get ? o : {
            enumerable: true,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} }, p = n.exports, i;
function l() {
  return i || (i = 1, (function(a, s) {
    (function(_, t) {
      a.exports = t(rt());
    })(p, (function(_) {
      function t(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var e = t(_), o = { name: "ta", weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" } };
      return e.default.locale(o, null, true), o;
    }));
  })(n)), n.exports;
}
var u = l();
const c = /* @__PURE__ */ by(u), y = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [u]);
export {
  y as t
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGEtQ0dGVU4xM24tQ1dYZE5hd3YuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L3RhLUNHRlVOMTNuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgZiB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIG0oYSwgcykge1xuICBmb3IgKHZhciBfID0gMDsgXyA8IHMubGVuZ3RoOyBfKyspIHtcbiAgICBjb25zdCB0ID0gc1tfXTtcbiAgICBpZiAodHlwZW9mIHQgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheSh0KSkge1xuICAgICAgZm9yIChjb25zdCBlIGluIHQpXG4gICAgICAgIGlmIChlICE9PSBcImRlZmF1bHRcIiAmJiAhKGUgaW4gYSkpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCBlKTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBlLCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gdFtlXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIG4gPSB7IGV4cG9ydHM6IHt9IH0sIHAgPSBuLmV4cG9ydHMsIGk7XG5mdW5jdGlvbiBsKCkge1xuICByZXR1cm4gaSB8fCAoaSA9IDEsIChmdW5jdGlvbihhLCBzKSB7XG4gICAgKGZ1bmN0aW9uKF8sIHQpIHtcbiAgICAgIGEuZXhwb3J0cyA9IHQoZCgpKTtcbiAgICB9KShwLCAoZnVuY3Rpb24oXykge1xuICAgICAgZnVuY3Rpb24gdChyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciBlID0gdChfKSwgbyA9IHsgbmFtZTogXCJ0YVwiLCB3ZWVrZGF5czogXCLgrp7grr7grq/grr/grrHgr43grrHgr4HgrpXgr43grpXgrr/grrTgrq7gr4hf4K6k4K6/4K6Z4K+N4K6V4K6f4K+N4K6V4K6/4K604K6u4K+IX+CumuCvhuCuteCvjeCuteCuvuCur+CvjeCuleCuv+CutOCuruCviF/grqrgr4HgrqTgrqngr43grpXgrr/grrTgrq7gr4hf4K614K6/4K6v4K6+4K604K6V4K+N4K6V4K6/4K604K6u4K+IX+CuteCvhuCus+CvjeCus+Cuv+CuleCvjeCuleCuv+CutOCuruCviF/grprgrqngrr/grpXgr43grpXgrr/grrTgrq7gr4hcIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCLgrpzgrqngrrXgrrDgrr9f4K6q4K6/4K6q4K+N4K6w4K614K6w4K6/X+CuruCuvuCusOCvjeCumuCvjV/gro/grqrgr43grrDgrrLgr41f4K6u4K+HX+CunOCvguCuqeCvjV/grpzgr4LgrrLgr4hf4K6G4K6V4K644K+N4K6f4K+NX+CumuCvhuCuquCvjeCun+CvhuCuruCvjeCuquCusOCvjV/groXgrpXgr43grp/gr4fgrr7grqrgrrDgr41f4K6o4K614K6u4K+N4K6q4K6w4K+NX+Cun+Cuv+CumuCuruCvjeCuquCusOCvjVwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNTaG9ydDogXCLgrp7grr7grq/grr/grrHgr4Ff4K6k4K6/4K6Z4K+N4K6V4K6z4K+NX+CumuCvhuCuteCvjeCuteCuvuCur+CvjV/grqrgr4HgrqTgrqngr41f4K614K6/4K6v4K6+4K604K6p4K+NX+CuteCvhuCus+CvjeCus+Cuv1/grprgrqngrr9cIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcIuCunOCuqeCuteCusOCuv1/grqrgrr/grqrgr43grrDgrrXgrrDgrr9f4K6u4K6+4K6w4K+N4K6a4K+NX+Cuj+CuquCvjeCusOCusuCvjV/grq7gr4df4K6c4K+C4K6p4K+NX+CunOCvguCusuCviF/grobgrpXgrrjgr43grp/gr41f4K6a4K+G4K6q4K+N4K6f4K+G4K6u4K+N4K6q4K6w4K+NX+CuheCuleCvjeCun+Cvh+CuvuCuquCusOCvjV/grqjgrrXgrq7gr43grqrgrrDgr41f4K6f4K6/4K6a4K6u4K+N4K6q4K6w4K+NXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCLgrp7grr5f4K6k4K6/X+CumuCvhl/grqrgr4Ff4K614K6/X+CuteCvhl/grppcIi5zcGxpdChcIl9cIiksIG9yZGluYWw6IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICB9LCBmb3JtYXRzOiB7IExUOiBcIkhIOm1tXCIsIExUUzogXCJISDptbTpzc1wiLCBMOiBcIkREL01NL1lZWVlcIiwgTEw6IFwiRCBNTU1NIFlZWVlcIiwgTExMOiBcIkQgTU1NTSBZWVlZLCBISDptbVwiLCBMTExMOiBcImRkZGQsIEQgTU1NTSBZWVlZLCBISDptbVwiIH0sIHJlbGF0aXZlVGltZTogeyBmdXR1cmU6IFwiJXMg4K6H4K6y4K+NXCIsIHBhc3Q6IFwiJXMg4K6u4K+B4K6p4K+NXCIsIHM6IFwi4K6S4K6w4K+BIOCumuCuv+CusiDgrrXgrr/grqjgrr7grp/grr/grpXgrrPgr41cIiwgbTogXCLgrpLgrrDgr4Eg4K6o4K6/4K6u4K6/4K6f4K6u4K+NXCIsIG1tOiBcIiVkIOCuqOCuv+CuruCuv+Cun+CumeCvjeCuleCus+CvjVwiLCBoOiBcIuCukuCusOCvgSDgrq7grqPgrr8g4K6o4K+H4K6w4K6u4K+NXCIsIGhoOiBcIiVkIOCuruCuo+CuvyDgrqjgr4fgrrDgrq7gr41cIiwgZDogXCLgrpLgrrDgr4Eg4K6o4K6+4K6z4K+NXCIsIGRkOiBcIiVkIOCuqOCuvuCun+CvjeCuleCus+CvjVwiLCBNOiBcIuCukuCusOCvgSDgrq7grr7grqTgrq7gr41cIiwgTU06IFwiJWQg4K6u4K6+4K6k4K6Z4K+N4K6V4K6z4K+NXCIsIHk6IFwi4K6S4K6w4K+BIOCuteCusOCvgeCun+CuruCvjVwiLCB5eTogXCIlZCDgrobgrqPgr43grp/gr4HgrpXgrrPgr41cIiB9IH07XG4gICAgICByZXR1cm4gZS5kZWZhdWx0LmxvY2FsZShvLCBudWxsLCAhMCksIG87XG4gICAgfSkpO1xuICB9KShuKSksIG4uZXhwb3J0cztcbn1cbnZhciB1ID0gbCgpO1xuY29uc3QgYyA9IC8qIEBfX1BVUkVfXyAqLyBmKHUpLCB5ID0gLyogQF9fUFVSRV9fICovIG0oe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGNcbn0sIFt1XSk7XG5leHBvcnQge1xuICB5IGFzIHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YS1DR0ZVTjEzbi5qcy5tYXBcbiJdLCJuYW1lcyI6WyJkIiwiZiJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFVLDhGQUE4RixNQUFNLEdBQUcsR0FBRyxRQUFRLDBGQUEwRixNQUFNLEdBQUcsR0FBRyxlQUFlLG1EQUFtRCxNQUFNLEdBQUcsR0FBRyxhQUFhLDBGQUEwRixNQUFNLEdBQUcsR0FBRyxhQUFhLHNCQUFzQixNQUFNLEdBQUcsR0FBRyxTQUFTLFNBQVMsR0FBRztBQUNyZ0IsZUFBTztBQUFBLE1BQ1QsR0FBRyxTQUFTLEVBQUUsSUFBSSxTQUFTLEtBQUssWUFBWSxHQUFHLGNBQWMsSUFBSSxlQUFlLEtBQUssc0JBQXNCLE1BQU0sOEJBQThCLGNBQWMsRUFBRSxRQUFRLFVBQVUsTUFBTSxXQUFXLEdBQUcscUJBQXFCLEdBQUcsZUFBZSxJQUFJLGlCQUFpQixHQUFHLGlCQUFpQixJQUFJLGdCQUFnQixHQUFHLFlBQVksSUFBSSxjQUFjLEdBQUcsYUFBYSxJQUFJLGVBQWUsR0FBRyxjQUFjLElBQUksZ0JBQWU7QUFDalosYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
