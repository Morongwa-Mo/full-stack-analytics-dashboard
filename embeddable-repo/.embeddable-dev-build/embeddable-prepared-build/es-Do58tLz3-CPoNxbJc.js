import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function l(n, u) {
  for (var o = 0; o < u.length; o++) {
    const e = u[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const s = Object.getOwnPropertyDescriptor(e, r);
          s && Object.defineProperty(n, r, s.get ? s : {
            enumerable: true,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} }, f = a.exports, _;
function p() {
  return _ || (_ = 1, (function(n, u) {
    (function(o, e) {
      n.exports = e(rt());
    })(f, (function(o) {
      function e(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var r = e(o), s = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(t) {
        return t + "º";
      } };
      return r.default.locale(s, null, true), s;
    }));
  })(a)), a.exports;
}
var i = p();
const c = /* @__PURE__ */ by(i), y = /* @__PURE__ */ l({
  __proto__: null,
  default: c
}, [i]);
export {
  y as e
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMtRG81OHRMejMtQ1BvTnhiSmMuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2VzLURvNTh0THozLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgbSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGwobiwgdSkge1xuICBmb3IgKHZhciBvID0gMDsgbyA8IHUubGVuZ3RoOyBvKyspIHtcbiAgICBjb25zdCBlID0gdVtvXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCByIGluIGUpXG4gICAgICAgIGlmIChyICE9PSBcImRlZmF1bHRcIiAmJiAhKHIgaW4gbikpIHtcbiAgICAgICAgICBjb25zdCBzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKTtcbiAgICAgICAgICBzICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCByLCBzLmdldCA/IHMgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVtyXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGEgPSB7IGV4cG9ydHM6IHt9IH0sIGYgPSBhLmV4cG9ydHMsIF87XG5mdW5jdGlvbiBwKCkge1xuICByZXR1cm4gXyB8fCAoXyA9IDEsIChmdW5jdGlvbihuLCB1KSB7XG4gICAgKGZ1bmN0aW9uKG8sIGUpIHtcbiAgICAgIG4uZXhwb3J0cyA9IGUoZCgpKTtcbiAgICB9KShmLCAoZnVuY3Rpb24obykge1xuICAgICAgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHR5cGVvZiB0ID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gdCA/IHQgOiB7IGRlZmF1bHQ6IHQgfTtcbiAgICAgIH1cbiAgICAgIHZhciByID0gZShvKSwgcyA9IHsgbmFtZTogXCJlc1wiLCBtb250aHNTaG9ydDogXCJlbmVfZmViX21hcl9hYnJfbWF5X2p1bl9qdWxfYWdvX3NlcF9vY3Rfbm92X2RpY1wiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXM6IFwiZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDqXJjb2xlc19qdWV2ZXNfdmllcm5lc19zw6FiYWRvXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c1Nob3J0OiBcImRvbS5fbHVuLl9tYXIuX21pw6kuX2p1ZS5fdmllLl9zw6FiLlwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNNaW46IFwiZG9fbHVfbWFfbWlfanVfdmlfc8OhXCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwiZW5lcm9fZmVicmVyb19tYXJ6b19hYnJpbF9tYXlvX2p1bmlvX2p1bGlvX2Fnb3N0b19zZXB0aWVtYnJlX29jdHVicmVfbm92aWVtYnJlX2RpY2llbWJyZVwiLnNwbGl0KFwiX1wiKSwgd2Vla1N0YXJ0OiAxLCBmb3JtYXRzOiB7IExUOiBcIkg6bW1cIiwgTFRTOiBcIkg6bW06c3NcIiwgTDogXCJERC9NTS9ZWVlZXCIsIExMOiBcIkQgW2RlXSBNTU1NIFtkZV0gWVlZWVwiLCBMTEw6IFwiRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW1cIiwgTExMTDogXCJkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbVwiIH0sIHJlbGF0aXZlVGltZTogeyBmdXR1cmU6IFwiZW4gJXNcIiwgcGFzdDogXCJoYWNlICVzXCIsIHM6IFwidW5vcyBzZWd1bmRvc1wiLCBtOiBcInVuIG1pbnV0b1wiLCBtbTogXCIlZCBtaW51dG9zXCIsIGg6IFwidW5hIGhvcmFcIiwgaGg6IFwiJWQgaG9yYXNcIiwgZDogXCJ1biBkw61hXCIsIGRkOiBcIiVkIGTDrWFzXCIsIE06IFwidW4gbWVzXCIsIE1NOiBcIiVkIG1lc2VzXCIsIHk6IFwidW4gYcOxb1wiLCB5eTogXCIlZCBhw7Fvc1wiIH0sIG9yZGluYWw6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBcIsK6XCI7XG4gICAgICB9IH07XG4gICAgICByZXR1cm4gci5kZWZhdWx0LmxvY2FsZShzLCBudWxsLCAhMCksIHM7XG4gICAgfSkpO1xuICB9KShhKSksIGEuZXhwb3J0cztcbn1cbnZhciBpID0gcCgpO1xuY29uc3QgYyA9IC8qIEBfX1BVUkVfXyAqLyBtKGkpLCB5ID0gLyogQF9fUFVSRV9fICovIGwoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGNcbn0sIFtpXSk7XG5leHBvcnQge1xuICB5IGFzIGVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcy1EbzU4dEx6My5qcy5tYXBcbiJdLCJuYW1lcyI6WyJkIiwibSJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxhQUFhLGtEQUFrRCxNQUFNLEdBQUcsR0FBRyxVQUFVLHVEQUF1RCxNQUFNLEdBQUcsR0FBRyxlQUFlLHFDQUFxQyxNQUFNLEdBQUcsR0FBRyxhQUFhLHVCQUF1QixNQUFNLEdBQUcsR0FBRyxRQUFRLDJGQUEyRixNQUFNLEdBQUcsR0FBRyxXQUFXLEdBQUcsU0FBUyxFQUFFLElBQUksUUFBUSxLQUFLLFdBQVcsR0FBRyxjQUFjLElBQUkseUJBQXlCLEtBQUssOEJBQThCLE1BQU0sbUNBQWtDLEdBQUksY0FBYyxFQUFFLFFBQVEsU0FBUyxNQUFNLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxhQUFhLElBQUksY0FBYyxHQUFHLFlBQVksSUFBSSxZQUFZLEdBQUcsVUFBVSxJQUFJLFdBQVcsR0FBRyxVQUFVLElBQUksWUFBWSxHQUFHLFVBQVUsSUFBSSxhQUFhLFNBQVMsU0FBUyxHQUFHO0FBQzF6QixlQUFPLElBQUk7QUFBQSxNQUNiLEVBQUM7QUFDRCxhQUFPLEVBQUUsUUFBUSxPQUFPLEdBQUcsTUFBTSxJQUFFLEdBQUc7QUFBQSxJQUN4QyxFQUFDO0FBQUEsRUFDSCxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ1o7QUFDQSxJQUFJLElBQUksRUFBQztBQUNKLE1BQUMsSUFBb0JDLG1CQUFFLENBQUMsR0FBRyxJQUFvQixrQkFBRTtBQUFBLEVBQ3BELFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
