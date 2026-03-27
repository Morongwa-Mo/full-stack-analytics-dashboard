import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function f(o, s) {
  for (var n = 0; n < s.length; n++) {
    const e = s[n];
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
var i = { exports: {} }, l = i.exports, _;
function p() {
  return _ || (_ = 1, (function(o, s) {
    (function(n, e) {
      o.exports = e(rt());
    })(l, (function(n) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(n), a = { name: "ht", weekdays: "dimanch_lendi_madi_mèkredi_jedi_vandredi_samdi".split("_"), months: "janvye_fevriye_mas_avril_me_jen_jiyè_out_septanm_oktòb_novanm_desanm".split("_"), weekdaysShort: "dim._len._mad._mèk._jed._van._sam.".split("_"), monthsShort: "jan._fev._mas_avr._me_jen_jiyè._out_sept._okt._nov._des.".split("_"), weekdaysMin: "di_le_ma_mè_je_va_sa".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "nan %s", past: "sa gen %s", s: "kèk segond", m: "yon minit", mm: "%d minit", h: "inèdtan", hh: "%d zè", d: "yon jou", dd: "%d jou", M: "yon mwa", MM: "%d mwa", y: "yon ane", yy: "%d ane" } };
      return t.default.locale(a, null, true), a;
    }));
  })(i)), i.exports;
}
var m = p();
const y = /* @__PURE__ */ by(m), j = /* @__PURE__ */ f({
  __proto__: null,
  default: y
}, [m]);
export {
  j as h
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHQtUVhGR0ZfeXotRE5PZm02YTQuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2h0LVFYRkdGX3l6LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgZCB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIHUgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGYobywgcykge1xuICBmb3IgKHZhciBuID0gMDsgbiA8IHMubGVuZ3RoOyBuKyspIHtcbiAgICBjb25zdCBlID0gc1tuXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gbykpIHtcbiAgICAgICAgICBjb25zdCBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBhICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCB0LCBhLmdldCA/IGEgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGkgPSB7IGV4cG9ydHM6IHt9IH0sIGwgPSBpLmV4cG9ydHMsIF87XG5mdW5jdGlvbiBwKCkge1xuICByZXR1cm4gXyB8fCAoXyA9IDEsIChmdW5jdGlvbihvLCBzKSB7XG4gICAgKGZ1bmN0aW9uKG4sIGUpIHtcbiAgICAgIG8uZXhwb3J0cyA9IGUodSgpKTtcbiAgICB9KShsLCAoZnVuY3Rpb24obikge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShuKSwgYSA9IHsgbmFtZTogXCJodFwiLCB3ZWVrZGF5czogXCJkaW1hbmNoX2xlbmRpX21hZGlfbcOoa3JlZGlfamVkaV92YW5kcmVkaV9zYW1kaVwiLnNwbGl0KFwiX1wiKSwgbW9udGhzOiBcImphbnZ5ZV9mZXZyaXllX21hc19hdnJpbF9tZV9qZW5faml5w6hfb3V0X3NlcHRhbm1fb2t0w7JiX25vdmFubV9kZXNhbm1cIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzU2hvcnQ6IFwiZGltLl9sZW4uX21hZC5fbcOoay5famVkLl92YW4uX3NhbS5cIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcImphbi5fZmV2Ll9tYXNfYXZyLl9tZV9qZW5faml5w6guX291dF9zZXB0Ll9va3QuX25vdi5fZGVzLlwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNNaW46IFwiZGlfbGVfbWFfbcOoX2plX3ZhX3NhXCIuc3BsaXQoXCJfXCIpLCBvcmRpbmFsOiBmdW5jdGlvbihyKSB7XG4gICAgICAgIHJldHVybiByO1xuICAgICAgfSwgZm9ybWF0czogeyBMVDogXCJISDptbVwiLCBMVFM6IFwiSEg6bW06c3NcIiwgTDogXCJERC9NTS9ZWVlZXCIsIExMOiBcIkQgTU1NTSBZWVlZXCIsIExMTDogXCJEIE1NTU0gWVlZWSBISDptbVwiLCBMTExMOiBcImRkZGQgRCBNTU1NIFlZWVkgSEg6bW1cIiB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcIm5hbiAlc1wiLCBwYXN0OiBcInNhIGdlbiAlc1wiLCBzOiBcImvDqGsgc2Vnb25kXCIsIG06IFwieW9uIG1pbml0XCIsIG1tOiBcIiVkIG1pbml0XCIsIGg6IFwiaW7DqGR0YW5cIiwgaGg6IFwiJWQgesOoXCIsIGQ6IFwieW9uIGpvdVwiLCBkZDogXCIlZCBqb3VcIiwgTTogXCJ5b24gbXdhXCIsIE1NOiBcIiVkIG13YVwiLCB5OiBcInlvbiBhbmVcIiwgeXk6IFwiJWQgYW5lXCIgfSB9O1xuICAgICAgcmV0dXJuIHQuZGVmYXVsdC5sb2NhbGUoYSwgbnVsbCwgITApLCBhO1xuICAgIH0pKTtcbiAgfSkoaSkpLCBpLmV4cG9ydHM7XG59XG52YXIgbSA9IHAoKTtcbmNvbnN0IHkgPSAvKiBAX19QVVJFX18gKi8gZChtKSwgaiA9IC8qIEBfX1BVUkVfXyAqLyBmKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiB5XG59LCBbbV0pO1xuZXhwb3J0IHtcbiAgaiBhcyBoXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHQtUVhGR0ZfeXouanMubWFwXG4iXSwibmFtZXMiOlsidSIsImQiXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSxpREFBaUQsTUFBTSxHQUFHLEdBQUcsUUFBUSx1RUFBdUUsTUFBTSxHQUFHLEdBQUcsZUFBZSxxQ0FBcUMsTUFBTSxHQUFHLEdBQUcsYUFBYSwyREFBMkQsTUFBTSxHQUFHLEdBQUcsYUFBYSx1QkFBdUIsTUFBTSxHQUFHLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDelosZUFBTztBQUFBLE1BQ1QsR0FBRyxTQUFTLEVBQUUsSUFBSSxTQUFTLEtBQUssWUFBWSxHQUFHLGNBQWMsSUFBSSxlQUFlLEtBQUsscUJBQXFCLE1BQU0sNEJBQTRCLGNBQWMsRUFBRSxRQUFRLFVBQVUsTUFBTSxhQUFhLEdBQUcsY0FBYyxHQUFHLGFBQWEsSUFBSSxZQUFZLEdBQUcsV0FBVyxJQUFJLFNBQVMsR0FBRyxXQUFXLElBQUksVUFBVSxHQUFHLFdBQVcsSUFBSSxVQUFVLEdBQUcsV0FBVyxJQUFJLFdBQVU7QUFDalcsYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
