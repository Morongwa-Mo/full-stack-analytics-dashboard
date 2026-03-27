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
      var t = e(n), a = { name: "nb", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), ordinal: function(r) {
        return r + ".";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" } };
      return t.default.locale(a, null, true), a;
    }));
  })(s)), s.exports;
}
var u = p();
const b = /* @__PURE__ */ by(u), M = /* @__PURE__ */ f({
  __proto__: null,
  default: b
}, [u]);
export {
  M as n
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmItQkFQTG43LWMtQ2N2TEcwRnAuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L25iLUJBUExuNy1jLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgbSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGYobywgXykge1xuICBmb3IgKHZhciBuID0gMDsgbiA8IF8ubGVuZ3RoOyBuKyspIHtcbiAgICBjb25zdCBlID0gX1tuXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gbykpIHtcbiAgICAgICAgICBjb25zdCBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBhICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCB0LCBhLmdldCA/IGEgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHMgPSB7IGV4cG9ydHM6IHt9IH0sIGwgPSBzLmV4cG9ydHMsIGk7XG5mdW5jdGlvbiBwKCkge1xuICByZXR1cm4gaSB8fCAoaSA9IDEsIChmdW5jdGlvbihvLCBfKSB7XG4gICAgKGZ1bmN0aW9uKG4sIGUpIHtcbiAgICAgIG8uZXhwb3J0cyA9IGUoZCgpKTtcbiAgICB9KShsLCAoZnVuY3Rpb24obikge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShuKSwgYSA9IHsgbmFtZTogXCJuYlwiLCB3ZWVrZGF5czogXCJzw7huZGFnX21hbmRhZ190aXJzZGFnX29uc2RhZ190b3JzZGFnX2ZyZWRhZ19sw7hyZGFnXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c1Nob3J0OiBcInPDuC5fbWEuX3RpLl9vbi5fdG8uX2ZyLl9sw7guXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCJzw7hfbWFfdGlfb25fdG9fZnJfbMO4XCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwiamFudWFyX2ZlYnJ1YXJfbWFyc19hcHJpbF9tYWlfanVuaV9qdWxpX2F1Z3VzdF9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZXNlbWJlclwiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwiamFuLl9mZWIuX21hcnNfYXByaWxfbWFpX2p1bmlfanVsaV9hdWcuX3NlcC5fb2t0Ll9ub3YuX2Rlcy5cIi5zcGxpdChcIl9cIiksIG9yZGluYWw6IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHIgKyBcIi5cIjtcbiAgICAgIH0sIHdlZWtTdGFydDogMSwgeWVhclN0YXJ0OiA0LCBmb3JtYXRzOiB7IExUOiBcIkhIOm1tXCIsIExUUzogXCJISDptbTpzc1wiLCBMOiBcIkRELk1NLllZWVlcIiwgTEw6IFwiRC4gTU1NTSBZWVlZXCIsIExMTDogXCJELiBNTU1NIFlZWVkgW2tsLl0gSEg6bW1cIiwgTExMTDogXCJkZGRkIEQuIE1NTU0gWVlZWSBba2wuXSBISDptbVwiIH0sIHJlbGF0aXZlVGltZTogeyBmdXR1cmU6IFwib20gJXNcIiwgcGFzdDogXCIlcyBzaWRlblwiLCBzOiBcIm5vZW4gc2VrdW5kZXJcIiwgbTogXCJldHQgbWludXR0XCIsIG1tOiBcIiVkIG1pbnV0dGVyXCIsIGg6IFwiZW4gdGltZVwiLCBoaDogXCIlZCB0aW1lclwiLCBkOiBcImVuIGRhZ1wiLCBkZDogXCIlZCBkYWdlclwiLCBNOiBcImVuIG3DpW5lZFwiLCBNTTogXCIlZCBtw6VuZWRlclwiLCB5OiBcImV0dCDDpXJcIiwgeXk6IFwiJWQgw6VyXCIgfSB9O1xuICAgICAgcmV0dXJuIHQuZGVmYXVsdC5sb2NhbGUoYSwgbnVsbCwgITApLCBhO1xuICAgIH0pKTtcbiAgfSkocykpLCBzLmV4cG9ydHM7XG59XG52YXIgdSA9IHAoKTtcbmNvbnN0IGIgPSAvKiBAX19QVVJFX18gKi8gbSh1KSwgTSA9IC8qIEBfX1BVUkVfXyAqLyBmKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBiXG59LCBbdV0pO1xuZXhwb3J0IHtcbiAgTSBhcyBuXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmItQkFQTG43LWMuanMubWFwXG4iXSwibmFtZXMiOlsiZCIsIm0iXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSxxREFBcUQsTUFBTSxHQUFHLEdBQUcsZUFBZSw4QkFBOEIsTUFBTSxHQUFHLEdBQUcsYUFBYSx1QkFBdUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxxRkFBcUYsTUFBTSxHQUFHLEdBQUcsYUFBYSw4REFBOEQsTUFBTSxHQUFHLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDdmEsZUFBTyxJQUFJO0FBQUEsTUFDYixHQUFHLFdBQVcsR0FBRyxXQUFXLEdBQUcsU0FBUyxFQUFFLElBQUksU0FBUyxLQUFLLFlBQVksR0FBRyxjQUFjLElBQUksZ0JBQWdCLEtBQUssNEJBQTRCLE1BQU0sZ0NBQStCLEdBQUksY0FBYyxFQUFFLFFBQVEsU0FBUyxNQUFNLFlBQVksR0FBRyxpQkFBaUIsR0FBRyxjQUFjLElBQUksZUFBZSxHQUFHLFdBQVcsSUFBSSxZQUFZLEdBQUcsVUFBVSxJQUFJLFlBQVksR0FBRyxZQUFZLElBQUksY0FBYyxHQUFHLFVBQVUsSUFBSSxRQUFPLEVBQUU7QUFDeFosYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
