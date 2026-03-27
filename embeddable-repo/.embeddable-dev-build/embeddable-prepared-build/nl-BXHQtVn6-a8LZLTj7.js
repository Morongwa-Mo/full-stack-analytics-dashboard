import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function l(o, d) {
  for (var n = 0; n < d.length; n++) {
    const r = d[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const t in r)
        if (t !== "default" && !(t in o)) {
          const a = Object.getOwnPropertyDescriptor(r, t);
          a && Object.defineProperty(o, t, a.get ? a : {
            enumerable: true,
            get: () => r[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} }, f = _.exports, s;
function p() {
  return s || (s = 1, (function(o, d) {
    (function(n, r) {
      o.exports = r(rt());
    })(f, (function(n) {
      function r(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var t = r(n), a = { name: "nl", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), ordinal: function(e) {
        return "[" + e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de") + "]";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "een minuut", mm: "%d minuten", h: "een uur", hh: "%d uur", d: "een dag", dd: "%d dagen", M: "een maand", MM: "%d maanden", y: "een jaar", yy: "%d jaar" } };
      return t.default.locale(a, null, true), a;
    }));
  })(_)), _.exports;
}
var u = p();
const c = /* @__PURE__ */ by(u), j = /* @__PURE__ */ l({
  __proto__: null,
  default: c
}, [u]);
export {
  j as n
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmwtQlhIUXRWbjYtYThMWkxUajcuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L25sLUJYSFF0Vm42LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgaSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIG0gfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGwobywgZCkge1xuICBmb3IgKHZhciBuID0gMDsgbiA8IGQubGVuZ3RoOyBuKyspIHtcbiAgICBjb25zdCByID0gZFtuXTtcbiAgICBpZiAodHlwZW9mIHIgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShyKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIHIpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gbykpIHtcbiAgICAgICAgICBjb25zdCBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLCB0KTtcbiAgICAgICAgICBhICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCB0LCBhLmdldCA/IGEgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gclt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIF8gPSB7IGV4cG9ydHM6IHt9IH0sIGYgPSBfLmV4cG9ydHMsIHM7XG5mdW5jdGlvbiBwKCkge1xuICByZXR1cm4gcyB8fCAocyA9IDEsIChmdW5jdGlvbihvLCBkKSB7XG4gICAgKGZ1bmN0aW9uKG4sIHIpIHtcbiAgICAgIG8uZXhwb3J0cyA9IHIobSgpKTtcbiAgICB9KShmLCAoZnVuY3Rpb24obikge1xuICAgICAgZnVuY3Rpb24gcihlKSB7XG4gICAgICAgIHJldHVybiBlICYmIHR5cGVvZiBlID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gcihuKSwgYSA9IHsgbmFtZTogXCJubFwiLCB3ZWVrZGF5czogXCJ6b25kYWdfbWFhbmRhZ19kaW5zZGFnX3dvZW5zZGFnX2RvbmRlcmRhZ192cmlqZGFnX3phdGVyZGFnXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c1Nob3J0OiBcInpvLl9tYS5fZGkuX3dvLl9kby5fdnIuX3phLlwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNNaW46IFwiem9fbWFfZGlfd29fZG9fdnJfemFcIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCJqYW51YXJpX2ZlYnJ1YXJpX21hYXJ0X2FwcmlsX21laV9qdW5pX2p1bGlfYXVndXN0dXNfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXJcIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcImphbl9mZWJfbXJ0X2Fwcl9tZWlfanVuX2p1bF9hdWdfc2VwX29rdF9ub3ZfZGVjXCIuc3BsaXQoXCJfXCIpLCBvcmRpbmFsOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIGUgKyAoZSA9PT0gMSB8fCBlID09PSA4IHx8IGUgPj0gMjAgPyBcInN0ZVwiIDogXCJkZVwiKSArIFwiXVwiO1xuICAgICAgfSwgd2Vla1N0YXJ0OiAxLCB5ZWFyU3RhcnQ6IDQsIGZvcm1hdHM6IHsgTFQ6IFwiSEg6bW1cIiwgTFRTOiBcIkhIOm1tOnNzXCIsIEw6IFwiREQtTU0tWVlZWVwiLCBMTDogXCJEIE1NTU0gWVlZWVwiLCBMTEw6IFwiRCBNTU1NIFlZWVkgSEg6bW1cIiwgTExMTDogXCJkZGRkIEQgTU1NTSBZWVlZIEhIOm1tXCIgfSwgcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogXCJvdmVyICVzXCIsIHBhc3Q6IFwiJXMgZ2VsZWRlblwiLCBzOiBcImVlbiBwYWFyIHNlY29uZGVuXCIsIG06IFwiZWVuIG1pbnV1dFwiLCBtbTogXCIlZCBtaW51dGVuXCIsIGg6IFwiZWVuIHV1clwiLCBoaDogXCIlZCB1dXJcIiwgZDogXCJlZW4gZGFnXCIsIGRkOiBcIiVkIGRhZ2VuXCIsIE06IFwiZWVuIG1hYW5kXCIsIE1NOiBcIiVkIG1hYW5kZW5cIiwgeTogXCJlZW4gamFhclwiLCB5eTogXCIlZCBqYWFyXCIgfSB9O1xuICAgICAgcmV0dXJuIHQuZGVmYXVsdC5sb2NhbGUoYSwgbnVsbCwgITApLCBhO1xuICAgIH0pKTtcbiAgfSkoXykpLCBfLmV4cG9ydHM7XG59XG52YXIgdSA9IHAoKTtcbmNvbnN0IGMgPSAvKiBAX19QVVJFX18gKi8gaSh1KSwgaiA9IC8qIEBfX1BVUkVfXyAqLyBsKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBjXG59LCBbdV0pO1xuZXhwb3J0IHtcbiAgaiBhcyBuXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmwtQlhIUXRWbjYuanMubWFwXG4iXSwibmFtZXMiOlsibSIsImkiXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSw2REFBNkQsTUFBTSxHQUFHLEdBQUcsZUFBZSw4QkFBOEIsTUFBTSxHQUFHLEdBQUcsYUFBYSx1QkFBdUIsTUFBTSxHQUFHLEdBQUcsUUFBUSwwRkFBMEYsTUFBTSxHQUFHLEdBQUcsYUFBYSxrREFBa0QsTUFBTSxHQUFHLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDeGEsZUFBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssUUFBUSxRQUFRO0FBQUEsTUFDcEUsR0FBRyxXQUFXLEdBQUcsV0FBVyxHQUFHLFNBQVMsRUFBRSxJQUFJLFNBQVMsS0FBSyxZQUFZLEdBQUcsY0FBYyxJQUFJLGVBQWUsS0FBSyxxQkFBcUIsTUFBTSx5QkFBd0IsR0FBSSxjQUFjLEVBQUUsUUFBUSxXQUFXLE1BQU0sY0FBYyxHQUFHLHFCQUFxQixHQUFHLGNBQWMsSUFBSSxjQUFjLEdBQUcsV0FBVyxJQUFJLFVBQVUsR0FBRyxXQUFXLElBQUksWUFBWSxHQUFHLGFBQWEsSUFBSSxjQUFjLEdBQUcsWUFBWSxJQUFJLFVBQVMsRUFBRTtBQUNwWixhQUFPLEVBQUUsUUFBUSxPQUFPLEdBQUcsTUFBTSxJQUFFLEdBQUc7QUFBQSxJQUN4QyxFQUFDO0FBQUEsRUFDSCxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ1o7QUFDQSxJQUFJLElBQUksRUFBQztBQUNKLE1BQUMsSUFBb0JDLG1CQUFFLENBQUMsR0FBRyxJQUFvQixrQkFBRTtBQUFBLEVBQ3BELFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
