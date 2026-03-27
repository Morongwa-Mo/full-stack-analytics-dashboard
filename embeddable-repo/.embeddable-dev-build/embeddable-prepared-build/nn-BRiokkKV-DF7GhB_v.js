import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function f(o, _) {
  for (var n = 0; n < _.length; n++) {
    const e = _[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(o, t, a.get ? a : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, l = s.exports, i;
function p() {
  return i || (i = 1, (function(o, _) {
    (function(n, e) {
      o.exports = e(rt());
    })(l, (function(n) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(n), a = { name: "nn", weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_la".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), ordinal: function(r) {
        return r + ".";
      }, weekStart: 1, relativeTime: { future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eitt minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månadar", y: "eitt år", yy: "%d år" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" } };
      return t.default.locale(a, null, true), a;
    }));
  })(s)), s.exports;
}
var u = p();
const c = /* @__PURE__ */ by(u), y = /* @__PURE__ */ f({
  __proto__: null,
  default: c
}, [u]);
export {
  y as n
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm4tQlJpb2trS1YtREY3R2hCX3YuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L25uLUJSaW9ra0tWLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgbSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGYobywgXykge1xuICBmb3IgKHZhciBuID0gMDsgbiA8IF8ubGVuZ3RoOyBuKyspIHtcbiAgICBjb25zdCBlID0gX1tuXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gbykpIHtcbiAgICAgICAgICBjb25zdCBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBhICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCB0LCBhLmdldCA/IGEgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHMgPSB7IGV4cG9ydHM6IHt9IH0sIGwgPSBzLmV4cG9ydHMsIGk7XG5mdW5jdGlvbiBwKCkge1xuICByZXR1cm4gaSB8fCAoaSA9IDEsIChmdW5jdGlvbihvLCBfKSB7XG4gICAgKGZ1bmN0aW9uKG4sIGUpIHtcbiAgICAgIG8uZXhwb3J0cyA9IGUoZCgpKTtcbiAgICB9KShsLCAoZnVuY3Rpb24obikge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShuKSwgYSA9IHsgbmFtZTogXCJublwiLCB3ZWVrZGF5czogXCJzdW5kYWdfbcOlbmRhZ190eXNkYWdfb25zZGFnX3RvcnNkYWdfZnJlZGFnX2xhdXJkYWdcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzU2hvcnQ6IFwic3VuX23DpW5fdHlzX29uc190b3JfZnJlX2xhdVwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNNaW46IFwic3VfbcOlX3R5X29uX3RvX2ZyX2xhXCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwiamFudWFyX2ZlYnJ1YXJfbWFyc19hcHJpbF9tYWlfanVuaV9qdWxpX2F1Z3VzdF9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZXNlbWJlclwiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwiamFuX2ZlYl9tYXJfYXByX21haV9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZXNcIi5zcGxpdChcIl9cIiksIG9yZGluYWw6IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHIgKyBcIi5cIjtcbiAgICAgIH0sIHdlZWtTdGFydDogMSwgcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogXCJvbSAlc1wiLCBwYXN0OiBcImZvciAlcyBzaWRhblwiLCBzOiBcIm5va3JlIHNla3VuZFwiLCBtOiBcImVpdHQgbWludXR0XCIsIG1tOiBcIiVkIG1pbnV0dFwiLCBoOiBcImVpbiB0aW1lXCIsIGhoOiBcIiVkIHRpbWFyXCIsIGQ6IFwiZWluIGRhZ1wiLCBkZDogXCIlZCBkYWdhclwiLCBNOiBcImVpbiBtw6VuYWRcIiwgTU06IFwiJWQgbcOlbmFkYXJcIiwgeTogXCJlaXR0IMOlclwiLCB5eTogXCIlZCDDpXJcIiB9LCBmb3JtYXRzOiB7IExUOiBcIkhIOm1tXCIsIExUUzogXCJISDptbTpzc1wiLCBMOiBcIkRELk1NLllZWVlcIiwgTEw6IFwiRC4gTU1NTSBZWVlZXCIsIExMTDogXCJELiBNTU1NIFlZWVkgW2tsLl0gSDptbVwiLCBMTExMOiBcImRkZGQgRC4gTU1NTSBZWVlZIFtrbC5dIEhIOm1tXCIgfSB9O1xuICAgICAgcmV0dXJuIHQuZGVmYXVsdC5sb2NhbGUoYSwgbnVsbCwgITApLCBhO1xuICAgIH0pKTtcbiAgfSkocykpLCBzLmV4cG9ydHM7XG59XG52YXIgdSA9IHAoKTtcbmNvbnN0IGMgPSAvKiBAX19QVVJFX18gKi8gbSh1KSwgeSA9IC8qIEBfX1BVUkVfXyAqLyBmKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBjXG59LCBbdV0pO1xuZXhwb3J0IHtcbiAgeSBhcyBuXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm4tQlJpb2trS1YuanMubWFwXG4iXSwibmFtZXMiOlsiZCIsIm0iXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSxxREFBcUQsTUFBTSxHQUFHLEdBQUcsZUFBZSw4QkFBOEIsTUFBTSxHQUFHLEdBQUcsYUFBYSx1QkFBdUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxxRkFBcUYsTUFBTSxHQUFHLEdBQUcsYUFBYSxrREFBa0QsTUFBTSxHQUFHLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDM1osZUFBTyxJQUFJO0FBQUEsTUFDYixHQUFHLFdBQVcsR0FBRyxjQUFjLEVBQUUsUUFBUSxTQUFTLE1BQU0sZ0JBQWdCLEdBQUcsZ0JBQWdCLEdBQUcsZUFBZSxJQUFJLGFBQWEsR0FBRyxZQUFZLElBQUksWUFBWSxHQUFHLFdBQVcsSUFBSSxZQUFZLEdBQUcsYUFBYSxJQUFJLGNBQWMsR0FBRyxXQUFXLElBQUksUUFBTyxHQUFJLFNBQVMsRUFBRSxJQUFJLFNBQVMsS0FBSyxZQUFZLEdBQUcsY0FBYyxJQUFJLGdCQUFnQixLQUFLLDJCQUEyQixNQUFNLGtDQUFpQztBQUMvWSxhQUFPLEVBQUUsUUFBUSxPQUFPLEdBQUcsTUFBTSxJQUFFLEdBQUc7QUFBQSxJQUN4QyxFQUFDO0FBQUEsRUFDSCxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ1o7QUFDQSxJQUFJLElBQUksRUFBQztBQUNKLE1BQUMsSUFBb0JDLG1CQUFFLENBQUMsR0FBRyxJQUFvQixrQkFBRTtBQUFBLEVBQ3BELFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
