import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function l(s, _) {
  for (var o = 0; o < _.length; o++) {
    const e = _[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(s, t, a.get ? a : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} }, m = n.exports, u;
function d() {
  return u || (u = 1, (function(s, _) {
    (function(o, e) {
      s.exports = e(rt());
    })(m, (function(o) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(o), a = { name: "bs", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), weekStart: 1, weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
      return t.default.locale(a, null, true), a;
    }));
  })(n)), n.exports;
}
var i = d();
const b = /* @__PURE__ */ by(i), M = /* @__PURE__ */ l({
  __proto__: null,
  default: b
}, [i]);
export {
  M as b
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtQ3M1QTNQdnItTzg3Z081enQuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2JzLUNzNUEzUHZyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgcCB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGYgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGwocywgXykge1xuICBmb3IgKHZhciBvID0gMDsgbyA8IF8ubGVuZ3RoOyBvKyspIHtcbiAgICBjb25zdCBlID0gX1tvXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gcykpIHtcbiAgICAgICAgICBjb25zdCBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBhICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCB0LCBhLmdldCA/IGEgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIG4gPSB7IGV4cG9ydHM6IHt9IH0sIG0gPSBuLmV4cG9ydHMsIHU7XG5mdW5jdGlvbiBkKCkge1xuICByZXR1cm4gdSB8fCAodSA9IDEsIChmdW5jdGlvbihzLCBfKSB7XG4gICAgKGZ1bmN0aW9uKG8sIGUpIHtcbiAgICAgIHMuZXhwb3J0cyA9IGUoZigpKTtcbiAgICB9KShtLCAoZnVuY3Rpb24obykge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShvKSwgYSA9IHsgbmFtZTogXCJic1wiLCB3ZWVrZGF5czogXCJuZWRqZWxqYV9wb25lZGplbGpha191dG9yYWtfc3JpamVkYV/EjWV0dnJ0YWtfcGV0YWtfc3Vib3RhXCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwiamFudWFyX2ZlYnJ1YXJfbWFydF9hcHJpbF9tYWpfanVuaV9qdWxpX2F1Z3VzdF9zZXB0ZW1iYXJfb2t0b2Jhcl9ub3ZlbWJhcl9kZWNlbWJhclwiLnNwbGl0KFwiX1wiKSwgd2Vla1N0YXJ0OiAxLCB3ZWVrZGF5c1Nob3J0OiBcIm5lZC5fcG9uLl91dG8uX3NyaS5fxI1ldC5fcGV0Ll9zdWIuXCIuc3BsaXQoXCJfXCIpLCBtb250aHNTaG9ydDogXCJqYW4uX2ZlYi5fbWFyLl9hcHIuX21hai5fanVuLl9qdWwuX2F1Zy5fc2VwLl9va3QuX25vdi5fZGVjLlwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNNaW46IFwibmVfcG9fdXRfc3JfxI1lX3BlX3N1XCIuc3BsaXQoXCJfXCIpLCBvcmRpbmFsOiBmdW5jdGlvbihyKSB7XG4gICAgICAgIHJldHVybiByO1xuICAgICAgfSwgZm9ybWF0czogeyBMVDogXCJIOm1tXCIsIExUUzogXCJIOm1tOnNzXCIsIEw6IFwiREQuTU0uWVlZWVwiLCBMTDogXCJELiBNTU1NIFlZWVlcIiwgTExMOiBcIkQuIE1NTU0gWVlZWSBIOm1tXCIsIExMTEw6IFwiZGRkZCwgRC4gTU1NTSBZWVlZIEg6bW1cIiB9IH07XG4gICAgICByZXR1cm4gdC5kZWZhdWx0LmxvY2FsZShhLCBudWxsLCAhMCksIGE7XG4gICAgfSkpO1xuICB9KShuKSksIG4uZXhwb3J0cztcbn1cbnZhciBpID0gZCgpO1xuY29uc3QgYiA9IC8qIEBfX1BVUkVfXyAqLyBwKGkpLCBNID0gLyogQF9fUFVSRV9fICovIGwoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGJcbn0sIFtpXSk7XG5leHBvcnQge1xuICBNIGFzIGJcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icy1DczVBM1B2ci5qcy5tYXBcbiJdLCJuYW1lcyI6WyJmIiwicCJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFVLDREQUE0RCxNQUFNLEdBQUcsR0FBRyxRQUFRLHFGQUFxRixNQUFNLEdBQUcsR0FBRyxXQUFXLEdBQUcsZUFBZSxxQ0FBcUMsTUFBTSxHQUFHLEdBQUcsYUFBYSw4REFBOEQsTUFBTSxHQUFHLEdBQUcsYUFBYSx1QkFBdUIsTUFBTSxHQUFHLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDbmMsZUFBTztBQUFBLE1BQ1QsR0FBRyxTQUFTLEVBQUUsSUFBSSxRQUFRLEtBQUssV0FBVyxHQUFHLGNBQWMsSUFBSSxnQkFBZ0IsS0FBSyxxQkFBcUIsTUFBTSw0QkFBMkI7QUFDMUksYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
