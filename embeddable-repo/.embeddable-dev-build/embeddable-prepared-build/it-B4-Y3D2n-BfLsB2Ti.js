import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function l(i, _) {
  for (var o = 0; o < _.length; o++) {
    const e = _[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in i)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(i, t, n.get ? n : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} }, f = a.exports, s;
function p() {
  return s || (s = 1, (function(i, _) {
    (function(o, e) {
      i.exports = e(rt());
    })(f, (function(o) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(o), n = { name: "it", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "qualche secondo", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinal: function(r) {
        return r + "º";
      } };
      return t.default.locale(n, null, true), n;
    }));
  })(a)), a.exports;
}
var u = p();
const c = /* @__PURE__ */ by(u), b = /* @__PURE__ */ l({
  __proto__: null,
  default: c
}, [u]);
export {
  b as i
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXQtQjQtWTNEMm4tQmZMc0IyVGkuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2l0LUI0LVkzRDJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgbSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGwoaSwgXykge1xuICBmb3IgKHZhciBvID0gMDsgbyA8IF8ubGVuZ3RoOyBvKyspIHtcbiAgICBjb25zdCBlID0gX1tvXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gaSkpIHtcbiAgICAgICAgICBjb25zdCBuID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBuICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLCB0LCBuLmdldCA/IG4gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGEgPSB7IGV4cG9ydHM6IHt9IH0sIGYgPSBhLmV4cG9ydHMsIHM7XG5mdW5jdGlvbiBwKCkge1xuICByZXR1cm4gcyB8fCAocyA9IDEsIChmdW5jdGlvbihpLCBfKSB7XG4gICAgKGZ1bmN0aW9uKG8sIGUpIHtcbiAgICAgIGkuZXhwb3J0cyA9IGUoZCgpKTtcbiAgICB9KShmLCAoZnVuY3Rpb24obykge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShvKSwgbiA9IHsgbmFtZTogXCJpdFwiLCB3ZWVrZGF5czogXCJkb21lbmljYV9sdW5lZMOsX21hcnRlZMOsX21lcmNvbGVkw6xfZ2lvdmVkw6xfdmVuZXJkw6xfc2FiYXRvXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c1Nob3J0OiBcImRvbV9sdW5fbWFyX21lcl9naW9fdmVuX3NhYlwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNNaW46IFwiZG9fbHVfbWFfbWVfZ2lfdmVfc2FcIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCJnZW5uYWlvX2ZlYmJyYWlvX21hcnpvX2FwcmlsZV9tYWdnaW9fZ2l1Z25vX2x1Z2xpb19hZ29zdG9fc2V0dGVtYnJlX290dG9icmVfbm92ZW1icmVfZGljZW1icmVcIi5zcGxpdChcIl9cIiksIHdlZWtTdGFydDogMSwgbW9udGhzU2hvcnQ6IFwiZ2VuX2ZlYl9tYXJfYXByX21hZ19naXVfbHVnX2Fnb19zZXRfb3R0X25vdl9kaWNcIi5zcGxpdChcIl9cIiksIGZvcm1hdHM6IHsgTFQ6IFwiSEg6bW1cIiwgTFRTOiBcIkhIOm1tOnNzXCIsIEw6IFwiREQvTU0vWVlZWVwiLCBMTDogXCJEIE1NTU0gWVlZWVwiLCBMTEw6IFwiRCBNTU1NIFlZWVkgSEg6bW1cIiwgTExMTDogXCJkZGRkIEQgTU1NTSBZWVlZIEhIOm1tXCIgfSwgcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogXCJ0cmEgJXNcIiwgcGFzdDogXCIlcyBmYVwiLCBzOiBcInF1YWxjaGUgc2Vjb25kb1wiLCBtOiBcInVuIG1pbnV0b1wiLCBtbTogXCIlZCBtaW51dGlcIiwgaDogXCJ1bidvcmFcIiwgaGg6IFwiJWQgb3JlXCIsIGQ6IFwidW4gZ2lvcm5vXCIsIGRkOiBcIiVkIGdpb3JuaVwiLCBNOiBcInVuIG1lc2VcIiwgTU06IFwiJWQgbWVzaVwiLCB5OiBcInVuIGFubm9cIiwgeXk6IFwiJWQgYW5uaVwiIH0sIG9yZGluYWw6IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHIgKyBcIsK6XCI7XG4gICAgICB9IH07XG4gICAgICByZXR1cm4gdC5kZWZhdWx0LmxvY2FsZShuLCBudWxsLCAhMCksIG47XG4gICAgfSkpO1xuICB9KShhKSksIGEuZXhwb3J0cztcbn1cbnZhciB1ID0gcCgpO1xuY29uc3QgYyA9IC8qIEBfX1BVUkVfXyAqLyBtKHUpLCBiID0gLyogQF9fUFVSRV9fICovIGwoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGNcbn0sIFt1XSk7XG5leHBvcnQge1xuICBiIGFzIGlcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pdC1CNC1ZM0Qybi5qcy5tYXBcbiJdLCJuYW1lcyI6WyJkIiwibSJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFVLDJEQUEyRCxNQUFNLEdBQUcsR0FBRyxlQUFlLDhCQUE4QixNQUFNLEdBQUcsR0FBRyxhQUFhLHVCQUF1QixNQUFNLEdBQUcsR0FBRyxRQUFRLGdHQUFnRyxNQUFNLEdBQUcsR0FBRyxXQUFXLEdBQUcsYUFBYSxrREFBa0QsTUFBTSxHQUFHLEdBQUcsU0FBUyxFQUFFLElBQUksU0FBUyxLQUFLLFlBQVksR0FBRyxjQUFjLElBQUksZUFBZSxLQUFLLHFCQUFxQixNQUFNLHlCQUF3QixHQUFJLGNBQWMsRUFBRSxRQUFRLFVBQVUsTUFBTSxTQUFTLEdBQUcsbUJBQW1CLEdBQUcsYUFBYSxJQUFJLGFBQWEsR0FBRyxVQUFVLElBQUksVUFBVSxHQUFHLGFBQWEsSUFBSSxhQUFhLEdBQUcsV0FBVyxJQUFJLFdBQVcsR0FBRyxXQUFXLElBQUksYUFBYSxTQUFTLFNBQVMsR0FBRztBQUNueUIsZUFBTyxJQUFJO0FBQUEsTUFDYixFQUFDO0FBQ0QsYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
