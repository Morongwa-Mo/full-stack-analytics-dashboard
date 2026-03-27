import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function f(o, _) {
  for (var a = 0; a < _.length; a++) {
    const e = _[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(o, r, n.get ? n : {
            enumerable: true,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, l = s.exports, d;
function p() {
  return d || (d = 1, (function(o, _) {
    (function(a, e) {
      o.exports = e(rt());
    })(l, (function(a) {
      function e(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var r = e(a), n = { name: "da", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn._man._tirs._ons._tors._fre._lør.".split("_"), weekdaysMin: "sø._ma._ti._on._to._fr._lø.".split("_"), months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"), weekStart: 1, yearStart: 4, ordinal: function(t) {
        return t + ".";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" } };
      return r.default.locale(n, null, true), n;
    }));
  })(s)), s.exports;
}
var i = p();
const c = /* @__PURE__ */ by(i), y = /* @__PURE__ */ f({
  __proto__: null,
  default: c
}, [i]);
export {
  y as d
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGEtRFdKU1lNVkgtQkt3VXY5OWIuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2RhLURXSlNZTVZILmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgdSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIG0gfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGYobywgXykge1xuICBmb3IgKHZhciBhID0gMDsgYSA8IF8ubGVuZ3RoOyBhKyspIHtcbiAgICBjb25zdCBlID0gX1thXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCByIGluIGUpXG4gICAgICAgIGlmIChyICE9PSBcImRlZmF1bHRcIiAmJiAhKHIgaW4gbykpIHtcbiAgICAgICAgICBjb25zdCBuID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKTtcbiAgICAgICAgICBuICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCByLCBuLmdldCA/IG4gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVtyXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHMgPSB7IGV4cG9ydHM6IHt9IH0sIGwgPSBzLmV4cG9ydHMsIGQ7XG5mdW5jdGlvbiBwKCkge1xuICByZXR1cm4gZCB8fCAoZCA9IDEsIChmdW5jdGlvbihvLCBfKSB7XG4gICAgKGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgIG8uZXhwb3J0cyA9IGUobSgpKTtcbiAgICB9KShsLCAoZnVuY3Rpb24oYSkge1xuICAgICAgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHR5cGVvZiB0ID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gdCA/IHQgOiB7IGRlZmF1bHQ6IHQgfTtcbiAgICAgIH1cbiAgICAgIHZhciByID0gZShhKSwgbiA9IHsgbmFtZTogXCJkYVwiLCB3ZWVrZGF5czogXCJzw7huZGFnX21hbmRhZ190aXJzZGFnX29uc2RhZ190b3JzZGFnX2ZyZWRhZ19sw7hyZGFnXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c1Nob3J0OiBcInPDuG4uX21hbi5fdGlycy5fb25zLl90b3JzLl9mcmUuX2zDuHIuXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCJzw7guX21hLl90aS5fb24uX3RvLl9mci5fbMO4LlwiLnNwbGl0KFwiX1wiKSwgbW9udGhzOiBcImphbnVhcl9mZWJydWFyX21hcnRzX2FwcmlsX21hal9qdW5pX2p1bGlfYXVndXN0X3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpLCBtb250aHNTaG9ydDogXCJqYW4uX2ZlYi5fbWFyLl9hcHIuX21hal9qdW5pX2p1bGlfYXVnLl9zZXB0Ll9va3QuX25vdi5fZGVjLlwiLnNwbGl0KFwiX1wiKSwgd2Vla1N0YXJ0OiAxLCB5ZWFyU3RhcnQ6IDQsIG9yZGluYWw6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBcIi5cIjtcbiAgICAgIH0sIGZvcm1hdHM6IHsgTFQ6IFwiSEg6bW1cIiwgTFRTOiBcIkhIOm1tOnNzXCIsIEw6IFwiREQuTU0uWVlZWVwiLCBMTDogXCJELiBNTU1NIFlZWVlcIiwgTExMOiBcIkQuIE1NTU0gWVlZWSBISDptbVwiLCBMTExMOiBcImRkZGQgW2QuXSBELiBNTU1NIFlZWVkgW2tsLl0gSEg6bW1cIiB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcIm9tICVzXCIsIHBhc3Q6IFwiJXMgc2lkZW5cIiwgczogXCJmw6Ugc2VrdW5kZXJcIiwgbTogXCJldCBtaW51dFwiLCBtbTogXCIlZCBtaW51dHRlclwiLCBoOiBcImVuIHRpbWVcIiwgaGg6IFwiJWQgdGltZXJcIiwgZDogXCJlbiBkYWdcIiwgZGQ6IFwiJWQgZGFnZVwiLCBNOiBcImVuIG3DpW5lZFwiLCBNTTogXCIlZCBtw6VuZWRlclwiLCB5OiBcImV0IMOlclwiLCB5eTogXCIlZCDDpXJcIiB9IH07XG4gICAgICByZXR1cm4gci5kZWZhdWx0LmxvY2FsZShuLCBudWxsLCAhMCksIG47XG4gICAgfSkpO1xuICB9KShzKSksIHMuZXhwb3J0cztcbn1cbnZhciBpID0gcCgpO1xuY29uc3QgYyA9IC8qIEBfX1BVUkVfXyAqLyB1KGkpLCB5ID0gLyogQF9fUFVSRV9fICovIGYoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGNcbn0sIFtpXSk7XG5leHBvcnQge1xuICB5IGFzIGRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYS1EV0pTWU1WSC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJtIiwidSJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFVLHFEQUFxRCxNQUFNLEdBQUcsR0FBRyxlQUFlLHVDQUF1QyxNQUFNLEdBQUcsR0FBRyxhQUFhLDhCQUE4QixNQUFNLEdBQUcsR0FBRyxRQUFRLHNGQUFzRixNQUFNLEdBQUcsR0FBRyxhQUFhLDhEQUE4RCxNQUFNLEdBQUcsR0FBRyxXQUFXLEdBQUcsV0FBVyxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQ3BkLGVBQU8sSUFBSTtBQUFBLE1BQ2IsR0FBRyxTQUFTLEVBQUUsSUFBSSxTQUFTLEtBQUssWUFBWSxHQUFHLGNBQWMsSUFBSSxnQkFBZ0IsS0FBSyxzQkFBc0IsTUFBTSx3Q0FBd0MsY0FBYyxFQUFFLFFBQVEsU0FBUyxNQUFNLFlBQVksR0FBRyxlQUFlLEdBQUcsWUFBWSxJQUFJLGVBQWUsR0FBRyxXQUFXLElBQUksWUFBWSxHQUFHLFVBQVUsSUFBSSxXQUFXLEdBQUcsWUFBWSxJQUFJLGNBQWMsR0FBRyxTQUFTLElBQUksVUFBUztBQUNyWCxhQUFPLEVBQUUsUUFBUSxPQUFPLEdBQUcsTUFBTSxJQUFFLEdBQUc7QUFBQSxJQUN4QyxFQUFDO0FBQUEsRUFDSCxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ1o7QUFDQSxJQUFJLElBQUksRUFBQztBQUNKLE1BQUMsSUFBb0JDLG1CQUFFLENBQUMsR0FBRyxJQUFvQixrQkFBRTtBQUFBLEVBQ3BELFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
