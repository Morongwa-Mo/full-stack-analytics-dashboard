import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function d(o, i) {
  for (var a = 0; a < i.length; a++) {
    const r = i[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const e in r)
        if (e !== "default" && !(e in o)) {
          const n = Object.getOwnPropertyDescriptor(r, e);
          n && Object.defineProperty(o, e, n.get ? n : {
            enumerable: true,
            get: () => r[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} }, f = _.exports, s;
function y() {
  return s || (s = 1, (function(o, i) {
    (function(a, r) {
      o.exports = r(rt());
    })(f, (function(a) {
      function r(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var e = r(a), n = { name: "az", weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "bir neçə saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, ordinal: function(t) {
        return t;
      } };
      return e.default.locale(n, null, true), n;
    }));
  })(_)), _.exports;
}
var m = y();
const p = /* @__PURE__ */ by(m), M = /* @__PURE__ */ d({
  __proto__: null,
  default: p
}, [m]);
export {
  M as a
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXotRE5jWExNMnYtRHRkcE1wTzUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2F6LUROY1hMTTJ2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgdSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGwgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGQobywgaSkge1xuICBmb3IgKHZhciBhID0gMDsgYSA8IGkubGVuZ3RoOyBhKyspIHtcbiAgICBjb25zdCByID0gaVthXTtcbiAgICBpZiAodHlwZW9mIHIgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShyKSkge1xuICAgICAgZm9yIChjb25zdCBlIGluIHIpXG4gICAgICAgIGlmIChlICE9PSBcImRlZmF1bHRcIiAmJiAhKGUgaW4gbykpIHtcbiAgICAgICAgICBjb25zdCBuID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLCBlKTtcbiAgICAgICAgICBuICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBlLCBuLmdldCA/IG4gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gcltlXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIF8gPSB7IGV4cG9ydHM6IHt9IH0sIGYgPSBfLmV4cG9ydHMsIHM7XG5mdW5jdGlvbiB5KCkge1xuICByZXR1cm4gcyB8fCAocyA9IDEsIChmdW5jdGlvbihvLCBpKSB7XG4gICAgKGZ1bmN0aW9uKGEsIHIpIHtcbiAgICAgIG8uZXhwb3J0cyA9IHIobCgpKTtcbiAgICB9KShmLCAoZnVuY3Rpb24oYSkge1xuICAgICAgZnVuY3Rpb24gcih0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHR5cGVvZiB0ID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gdCA/IHQgOiB7IGRlZmF1bHQ6IHQgfTtcbiAgICAgIH1cbiAgICAgIHZhciBlID0gcihhKSwgbiA9IHsgbmFtZTogXCJhelwiLCB3ZWVrZGF5czogXCJCYXphcl9CYXphciBlcnTJmXNpX8OHyZlyxZ/JmW5iyZkgYXjFn2FtxLFfw4fJmXLFn8mZbmLJmV9Dw7xtyZkgYXjFn2FtxLFfQ8O8bcmZX8WeyZluYsmZXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c1Nob3J0OiBcIkJhel9CekVfw4dBeF/Dh8mZcl9DQXhfQ8O8bV/FnsmZblwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNNaW46IFwiQnpfQkVfw4dBX8OHyZlfQ0FfQ8O8X8WeyZlcIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCJ5YW52YXJfZmV2cmFsX21hcnRfYXByZWxfbWF5X2l5dW5faXl1bF9hdnF1c3Rfc2VudHlhYnJfb2t0eWFicl9ub3lhYnJfZGVrYWJyXCIuc3BsaXQoXCJfXCIpLCBtb250aHNTaG9ydDogXCJ5YW5fZmV2X21hcl9hcHJfbWF5X2l5bl9peWxfYXZxX3Nlbl9va3Rfbm95X2Rla1wiLnNwbGl0KFwiX1wiKSwgd2Vla1N0YXJ0OiAxLCBmb3JtYXRzOiB7IExUOiBcIkg6bW1cIiwgTFRTOiBcIkg6bW06c3NcIiwgTDogXCJERC5NTS5ZWVlZXCIsIExMOiBcIkQgTU1NTSBZWVlZINCzLlwiLCBMTEw6IFwiRCBNTU1NIFlZWVkg0LMuLCBIOm1tXCIsIExMTEw6IFwiZGRkZCwgRCBNTU1NIFlZWVkg0LMuLCBIOm1tXCIgfSwgcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogXCIlcyBzb25yYVwiLCBwYXN0OiBcIiVzIMmZdnbJmWxcIiwgczogXCJiaXIgbmXDp8mZIHNhbml5yZlcIiwgbTogXCJiaXIgZMmZcWlxyZlcIiwgbW06IFwiJWQgZMmZcWlxyZlcIiwgaDogXCJiaXIgc2FhdFwiLCBoaDogXCIlZCBzYWF0XCIsIGQ6IFwiYmlyIGfDvG5cIiwgZGQ6IFwiJWQgZ8O8blwiLCBNOiBcImJpciBheVwiLCBNTTogXCIlZCBheVwiLCB5OiBcImJpciBpbFwiLCB5eTogXCIlZCBpbFwiIH0sIG9yZGluYWw6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9IH07XG4gICAgICByZXR1cm4gZS5kZWZhdWx0LmxvY2FsZShuLCBudWxsLCAhMCksIG47XG4gICAgfSkpO1xuICB9KShfKSksIF8uZXhwb3J0cztcbn1cbnZhciBtID0geSgpO1xuY29uc3QgcCA9IC8qIEBfX1BVUkVfXyAqLyB1KG0pLCBNID0gLyogQF9fUFVSRV9fICovIGQoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IHBcbn0sIFttXSk7XG5leHBvcnQge1xuICBNIGFzIGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hei1ETmNYTE0ydi5qcy5tYXBcbiJdLCJuYW1lcyI6WyJsIiwidSJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFVLHFFQUFxRSxNQUFNLEdBQUcsR0FBRyxlQUFlLDhCQUE4QixNQUFNLEdBQUcsR0FBRyxhQUFhLHVCQUF1QixNQUFNLEdBQUcsR0FBRyxRQUFRLCtFQUErRSxNQUFNLEdBQUcsR0FBRyxhQUFhLGtEQUFrRCxNQUFNLEdBQUcsR0FBRyxXQUFXLEdBQUcsU0FBUyxFQUFFLElBQUksUUFBUSxLQUFLLFdBQVcsR0FBRyxjQUFjLElBQUksa0JBQWtCLEtBQUssd0JBQXdCLE1BQU0sNkJBQTRCLEdBQUksY0FBYyxFQUFFLFFBQVEsWUFBWSxNQUFNLFlBQVksR0FBRyxtQkFBbUIsR0FBRyxjQUFjLElBQUksYUFBYSxHQUFHLFlBQVksSUFBSSxXQUFXLEdBQUcsV0FBVyxJQUFJLFVBQVUsR0FBRyxVQUFVLElBQUksU0FBUyxHQUFHLFVBQVUsSUFBSSxXQUFXLFNBQVMsU0FBUyxHQUFHO0FBQ2x5QixlQUFPO0FBQUEsTUFDVCxFQUFDO0FBQ0QsYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
