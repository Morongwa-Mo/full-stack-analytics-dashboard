import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function l(s, _) {
  for (var t = 0; t < _.length; t++) {
    const e = _[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in s)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(s, r, n.get ? n : {
            enumerable: true,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} }, f = a.exports, u;
function p() {
  return u || (u = 1, (function(s, _) {
    (function(t, e) {
      s.exports = e(rt());
    })(f, (function(t) {
      function e(o) {
        return o && typeof o == "object" && "default" in o ? o : { default: o };
      }
      var r = e(t), n = { name: "gl", weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), ordinal: function(o) {
        return o + "º";
      }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "fai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" } };
      return r.default.locale(n, null, true), n;
    }));
  })(a)), a.exports;
}
var m = p();
const c = /* @__PURE__ */ by(m), x = /* @__PURE__ */ l({
  __proto__: null,
  default: c
}, [m]);
export {
  x as g
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtRXRmZGZJLVItRGlVdTh1QXkuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2dsLUV0ZmRmSS1SLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgZCB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGkgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGwocywgXykge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IF8ubGVuZ3RoOyB0KyspIHtcbiAgICBjb25zdCBlID0gX1t0XTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCByIGluIGUpXG4gICAgICAgIGlmIChyICE9PSBcImRlZmF1bHRcIiAmJiAhKHIgaW4gcykpIHtcbiAgICAgICAgICBjb25zdCBuID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKTtcbiAgICAgICAgICBuICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCByLCBuLmdldCA/IG4gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVtyXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGEgPSB7IGV4cG9ydHM6IHt9IH0sIGYgPSBhLmV4cG9ydHMsIHU7XG5mdW5jdGlvbiBwKCkge1xuICByZXR1cm4gdSB8fCAodSA9IDEsIChmdW5jdGlvbihzLCBfKSB7XG4gICAgKGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgIHMuZXhwb3J0cyA9IGUoaSgpKTtcbiAgICB9KShmLCAoZnVuY3Rpb24odCkge1xuICAgICAgZnVuY3Rpb24gZShvKSB7XG4gICAgICAgIHJldHVybiBvICYmIHR5cGVvZiBvID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gbyA/IG8gOiB7IGRlZmF1bHQ6IG8gfTtcbiAgICAgIH1cbiAgICAgIHZhciByID0gZSh0KSwgbiA9IHsgbmFtZTogXCJnbFwiLCB3ZWVrZGF5czogXCJkb21pbmdvX2x1bnNfbWFydGVzX23DqXJjb3Jlc194b3Zlc192ZW5yZXNfc8OhYmFkb1wiLnNwbGl0KFwiX1wiKSwgbW9udGhzOiBcInhhbmVpcm9fZmVicmVpcm9fbWFyem9fYWJyaWxfbWFpb194dcOxb194dWxsb19hZ29zdG9fc2V0ZW1icm9fb3V0dWJyb19ub3ZlbWJyb19kZWNlbWJyb1wiLnNwbGl0KFwiX1wiKSwgd2Vla1N0YXJ0OiAxLCB3ZWVrZGF5c1Nob3J0OiBcImRvbS5fbHVuLl9tYXIuX23DqXIuX3hvdi5fdmVuLl9zw6FiLlwiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwieGFuLl9mZWIuX21hci5fYWJyLl9tYWkuX3h1w7EuX3h1bC5fYWdvLl9zZXQuX291dC5fbm92Ll9kZWMuXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCJkb19sdV9tYV9tw6lfeG9fdmVfc8OhXCIuc3BsaXQoXCJfXCIpLCBvcmRpbmFsOiBmdW5jdGlvbihvKSB7XG4gICAgICAgIHJldHVybiBvICsgXCLCulwiO1xuICAgICAgfSwgZm9ybWF0czogeyBMVDogXCJIOm1tXCIsIExUUzogXCJIOm1tOnNzXCIsIEw6IFwiREQvTU0vWVlZWVwiLCBMTDogXCJEIFtkZV0gTU1NTSBbZGVdIFlZWVlcIiwgTExMOiBcIkQgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tXCIsIExMTEw6IFwiZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW1cIiB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcImVuICVzXCIsIHBhc3Q6IFwiZmFpICVzXCIsIHM6IFwidW5zIHNlZ3VuZG9zXCIsIG06IFwidW4gbWludXRvXCIsIG1tOiBcIiVkIG1pbnV0b3NcIiwgaDogXCJ1bmhhIGhvcmFcIiwgaGg6IFwiJWQgaG9yYXNcIiwgZDogXCJ1biBkw61hXCIsIGRkOiBcIiVkIGTDrWFzXCIsIE06IFwidW4gbWVzXCIsIE1NOiBcIiVkIG1lc2VzXCIsIHk6IFwidW4gYW5vXCIsIHl5OiBcIiVkIGFub3NcIiB9IH07XG4gICAgICByZXR1cm4gci5kZWZhdWx0LmxvY2FsZShuLCBudWxsLCAhMCksIG47XG4gICAgfSkpO1xuICB9KShhKSksIGEuZXhwb3J0cztcbn1cbnZhciBtID0gcCgpO1xuY29uc3QgYyA9IC8qIEBfX1BVUkVfXyAqLyBkKG0pLCB4ID0gLyogQF9fUFVSRV9fICovIGwoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGNcbn0sIFttXSk7XG5leHBvcnQge1xuICB4IGFzIGdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nbC1FdGZkZkktUi5qcy5tYXBcbiJdLCJuYW1lcyI6WyJpIiwiZCJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFVLG1EQUFtRCxNQUFNLEdBQUcsR0FBRyxRQUFRLHlGQUF5RixNQUFNLEdBQUcsR0FBRyxXQUFXLEdBQUcsZUFBZSxxQ0FBcUMsTUFBTSxHQUFHLEdBQUcsYUFBYSw4REFBOEQsTUFBTSxHQUFHLEdBQUcsYUFBYSx1QkFBdUIsTUFBTSxHQUFHLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDOWIsZUFBTyxJQUFJO0FBQUEsTUFDYixHQUFHLFNBQVMsRUFBRSxJQUFJLFFBQVEsS0FBSyxXQUFXLEdBQUcsY0FBYyxJQUFJLHlCQUF5QixLQUFLLDhCQUE4QixNQUFNLHNDQUFzQyxjQUFjLEVBQUUsUUFBUSxTQUFTLE1BQU0sVUFBVSxHQUFHLGdCQUFnQixHQUFHLGFBQWEsSUFBSSxjQUFjLEdBQUcsYUFBYSxJQUFJLFlBQVksR0FBRyxVQUFVLElBQUksV0FBVyxHQUFHLFVBQVUsSUFBSSxZQUFZLEdBQUcsVUFBVSxJQUFJLFlBQVc7QUFDbFksYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
