import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function l(n, s) {
  for (var t = 0; t < s.length; t++) {
    const e = s[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in n)) {
          const a = Object.getOwnPropertyDescriptor(e, o);
          a && Object.defineProperty(n, o, a.get ? a : {
            enumerable: true,
            get: () => e[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} }, f = _.exports, m;
function p() {
  return m || (m = 1, (function(n, s) {
    (function(t, e) {
      n.exports = e(rt());
    })(f, (function(t) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var o = e(t), a = { name: "eo", weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" } };
      return o.default.locale(a, null, true), a;
    }));
  })(_)), _.exports;
}
var u = p();
const j = /* @__PURE__ */ by(u), Y = /* @__PURE__ */ l({
  __proto__: null,
  default: j
}, [u]);
export {
  Y as e
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW8tQ00zYW03a1MtT3BWZ3BTdE0uanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2VvLUNNM2FtN2tTLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgZCB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGkgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGwobiwgcykge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHMubGVuZ3RoOyB0KyspIHtcbiAgICBjb25zdCBlID0gc1t0XTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCBvIGluIGUpXG4gICAgICAgIGlmIChvICE9PSBcImRlZmF1bHRcIiAmJiAhKG8gaW4gbikpIHtcbiAgICAgICAgICBjb25zdCBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCBvKTtcbiAgICAgICAgICBhICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBvLCBhLmdldCA/IGEgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVtvXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIF8gPSB7IGV4cG9ydHM6IHt9IH0sIGYgPSBfLmV4cG9ydHMsIG07XG5mdW5jdGlvbiBwKCkge1xuICByZXR1cm4gbSB8fCAobSA9IDEsIChmdW5jdGlvbihuLCBzKSB7XG4gICAgKGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgIG4uZXhwb3J0cyA9IGUoaSgpKTtcbiAgICB9KShmLCAoZnVuY3Rpb24odCkge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gZSh0KSwgYSA9IHsgbmFtZTogXCJlb1wiLCB3ZWVrZGF5czogXCJkaW1hbsSJb19sdW5kb19tYXJkb19tZXJrcmVkb1/EtWHFrWRvX3ZlbmRyZWRvX3NhYmF0b1wiLnNwbGl0KFwiX1wiKSwgbW9udGhzOiBcImphbnVhcm9fZmVicnVhcm9fbWFydG9fYXByaWxvX21ham9fanVuaW9fanVsaW9fYcWtZ3VzdG9fc2VwdGVtYnJvX29rdG9icm9fbm92ZW1icm9fZGVjZW1icm9cIi5zcGxpdChcIl9cIiksIHdlZWtTdGFydDogMSwgd2Vla2RheXNTaG9ydDogXCJkaW1fbHVuX21hcmRfbWVya1/EtWHFrV92ZW5fc2FiXCIuc3BsaXQoXCJfXCIpLCBtb250aHNTaG9ydDogXCJqYW5fZmViX21hcl9hcHJfbWFqX2p1bl9qdWxfYcWtZ19zZXBfb2t0X25vdl9kZWNcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzTWluOiBcImRpX2x1X21hX21lX8S1YV92ZV9zYVwiLnNwbGl0KFwiX1wiKSwgb3JkaW5hbDogZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0sIGZvcm1hdHM6IHsgTFQ6IFwiSEg6bW1cIiwgTFRTOiBcIkhIOm1tOnNzXCIsIEw6IFwiWVlZWS1NTS1ERFwiLCBMTDogXCJEWy1hIGRlXSBNTU1NLCBZWVlZXCIsIExMTDogXCJEWy1hIGRlXSBNTU1NLCBZWVlZIEhIOm1tXCIsIExMTEw6IFwiZGRkZCwgW2xhXSBEWy1hIGRlXSBNTU1NLCBZWVlZIEhIOm1tXCIgfSwgcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogXCJwb3N0ICVzXCIsIHBhc3Q6IFwiYW50YcWtICVzXCIsIHM6IFwic2VrdW5kb2pcIiwgbTogXCJtaW51dG9cIiwgbW06IFwiJWQgbWludXRvalwiLCBoOiBcImhvcm9cIiwgaGg6IFwiJWQgaG9yb2pcIiwgZDogXCJ0YWdvXCIsIGRkOiBcIiVkIHRhZ29qXCIsIE06IFwibW9uYXRvXCIsIE1NOiBcIiVkIG1vbmF0b2pcIiwgeTogXCJqYXJvXCIsIHl5OiBcIiVkIGphcm9qXCIgfSB9O1xuICAgICAgcmV0dXJuIG8uZGVmYXVsdC5sb2NhbGUoYSwgbnVsbCwgITApLCBhO1xuICAgIH0pKTtcbiAgfSkoXykpLCBfLmV4cG9ydHM7XG59XG52YXIgdSA9IHAoKTtcbmNvbnN0IGogPSAvKiBAX19QVVJFX18gKi8gZCh1KSwgWSA9IC8qIEBfX1BVUkVfXyAqLyBsKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBqXG59LCBbdV0pO1xuZXhwb3J0IHtcbiAgWSBhcyBlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW8tQ00zYW03a1MuanMubWFwXG4iXSwibmFtZXMiOlsiaSIsImQiXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSxxREFBcUQsTUFBTSxHQUFHLEdBQUcsUUFBUSw2RkFBNkYsTUFBTSxHQUFHLEdBQUcsV0FBVyxHQUFHLGVBQWUsZ0NBQWdDLE1BQU0sR0FBRyxHQUFHLGFBQWEsa0RBQWtELE1BQU0sR0FBRyxHQUFHLGFBQWEsdUJBQXVCLE1BQU0sR0FBRyxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQ25iLGVBQU87QUFBQSxNQUNULEdBQUcsU0FBUyxFQUFFLElBQUksU0FBUyxLQUFLLFlBQVksR0FBRyxjQUFjLElBQUksdUJBQXVCLEtBQUssNkJBQTZCLE1BQU0sMENBQTBDLGNBQWMsRUFBRSxRQUFRLFdBQVcsTUFBTSxZQUFZLEdBQUcsWUFBWSxHQUFHLFVBQVUsSUFBSSxjQUFjLEdBQUcsUUFBUSxJQUFJLFlBQVksR0FBRyxRQUFRLElBQUksWUFBWSxHQUFHLFVBQVUsSUFBSSxjQUFjLEdBQUcsUUFBUSxJQUFJLGFBQVk7QUFDN1gsYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
