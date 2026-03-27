import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function f(r, i) {
  for (var a = 0; a < i.length; a++) {
    const e = i[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const s = Object.getOwnPropertyDescriptor(e, t);
          s && Object.defineProperty(r, t, s.get ? s : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} }, d = o.exports, _;
function L() {
  return _ || (_ = 1, (function(r, i) {
    (function(a, e) {
      r.exports = e(rt());
    })(d, (function(a) {
      function e(n) {
        return n && typeof n == "object" && "default" in n ? n : { default: n };
      }
      var t = e(a), s = { name: "ss", weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), weekStart: 1, weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), ordinal: function(n) {
        return n;
      }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" } };
      return t.default.locale(s, null, true), s;
    }));
  })(o)), o.exports;
}
var u = L();
const h = /* @__PURE__ */ by(u), g = /* @__PURE__ */ f({
  __proto__: null,
  default: h
}, [u]);
export {
  g as s
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3MtREpSN242RkUtQktlT0RnVG8uanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L3NzLURKUjduNkZFLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgbSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGwgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGYociwgaSkge1xuICBmb3IgKHZhciBhID0gMDsgYSA8IGkubGVuZ3RoOyBhKyspIHtcbiAgICBjb25zdCBlID0gaVthXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gcikpIHtcbiAgICAgICAgICBjb25zdCBzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBzICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLCB0LCBzLmdldCA/IHMgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIG8gPSB7IGV4cG9ydHM6IHt9IH0sIGQgPSBvLmV4cG9ydHMsIF87XG5mdW5jdGlvbiBMKCkge1xuICByZXR1cm4gXyB8fCAoXyA9IDEsIChmdW5jdGlvbihyLCBpKSB7XG4gICAgKGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgIHIuZXhwb3J0cyA9IGUobCgpKTtcbiAgICB9KShkLCAoZnVuY3Rpb24oYSkge1xuICAgICAgZnVuY3Rpb24gZShuKSB7XG4gICAgICAgIHJldHVybiBuICYmIHR5cGVvZiBuID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gbiA/IG4gOiB7IGRlZmF1bHQ6IG4gfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShhKSwgcyA9IHsgbmFtZTogXCJzc1wiLCB3ZWVrZGF5czogXCJMaXNvbnRmb19VbXNvbWJ1bHVrb19MZXNpYmlsaV9MZXNpdHNhdGZ1X0xlc2luZV9MZXNpaGxhbnVfVW1nY2liZWxvXCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwiQmhpbWJpZHZ3YW5lX0luZGxvdmFuYV9JbmRsb3YnbGVua2h1bHVfTWFiYXNhX0lua2h3ZWtod2V0aV9JbmhsYWJhX0tob2x3YW5lX0luZ2NpX0lueW9uaV9JbXBoYWxhX0x3ZXRpX0luZ29uZ29uaVwiLnNwbGl0KFwiX1wiKSwgd2Vla1N0YXJ0OiAxLCB3ZWVrZGF5c1Nob3J0OiBcIkxpc19VbWJfTHNiX0xlc19Mc2lfTHNoX1VtZ1wiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwiQmhpX0luYV9JbnVfTWFiX0lua19JbmhfS2hvX0lnY19JbnlfSW1wX0x3ZV9JZ29cIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzTWluOiBcIkxpX1VzX0xiX0x0X0xzX0xoX1VnXCIuc3BsaXQoXCJfXCIpLCBvcmRpbmFsOiBmdW5jdGlvbihuKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgICAgfSwgZm9ybWF0czogeyBMVDogXCJoOm1tIEFcIiwgTFRTOiBcImg6bW06c3MgQVwiLCBMOiBcIkREL01NL1lZWVlcIiwgTEw6IFwiRCBNTU1NIFlZWVlcIiwgTExMOiBcIkQgTU1NTSBZWVlZIGg6bW0gQVwiLCBMTExMOiBcImRkZGQsIEQgTU1NTSBZWVlZIGg6bW0gQVwiIH0sIHJlbGF0aXZlVGltZTogeyBmdXR1cmU6IFwibmdhICVzXCIsIHBhc3Q6IFwid2VudGVrYSBuZ2EgJXNcIiwgczogXCJlbWl6dXp3YW5hIGxvbWNhbmVcIiwgbTogXCJ1bXp1enVcIiwgbW06IFwiJWQgZW1penV6dVwiLCBoOiBcImxpaG9yYVwiLCBoaDogXCIlZCBlbWFob3JhXCIsIGQ6IFwibGlsYW5nYVwiLCBkZDogXCIlZCBlbWFsYW5nYVwiLCBNOiBcImlueWFuZ2FcIiwgTU06IFwiJWQgdGlueWFuZ2FcIiwgeTogXCJ1bW55YWthXCIsIHl5OiBcIiVkIGltaW55YWthXCIgfSB9O1xuICAgICAgcmV0dXJuIHQuZGVmYXVsdC5sb2NhbGUocywgbnVsbCwgITApLCBzO1xuICAgIH0pKTtcbiAgfSkobykpLCBvLmV4cG9ydHM7XG59XG52YXIgdSA9IEwoKTtcbmNvbnN0IGggPSAvKiBAX19QVVJFX18gKi8gbSh1KSwgZyA9IC8qIEBfX1BVUkVfXyAqLyBmKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBoXG59LCBbdV0pO1xuZXhwb3J0IHtcbiAgZyBhcyBzXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3MtREpSN242RkUuanMubWFwXG4iXSwibmFtZXMiOlsibCIsIm0iXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSxzRUFBc0UsTUFBTSxHQUFHLEdBQUcsUUFBUSxtSEFBbUgsTUFBTSxHQUFHLEdBQUcsV0FBVyxHQUFHLGVBQWUsOEJBQThCLE1BQU0sR0FBRyxHQUFHLGFBQWEsa0RBQWtELE1BQU0sR0FBRyxHQUFHLGFBQWEsdUJBQXVCLE1BQU0sR0FBRyxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQ3hkLGVBQU87QUFBQSxNQUNULEdBQUcsU0FBUyxFQUFFLElBQUksVUFBVSxLQUFLLGFBQWEsR0FBRyxjQUFjLElBQUksZUFBZSxLQUFLLHNCQUFzQixNQUFNLDhCQUE4QixjQUFjLEVBQUUsUUFBUSxVQUFVLE1BQU0sa0JBQWtCLEdBQUcsc0JBQXNCLEdBQUcsVUFBVSxJQUFJLGNBQWMsR0FBRyxVQUFVLElBQUksY0FBYyxHQUFHLFdBQVcsSUFBSSxlQUFlLEdBQUcsV0FBVyxJQUFJLGVBQWUsR0FBRyxXQUFXLElBQUksZ0JBQWU7QUFDclksYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
