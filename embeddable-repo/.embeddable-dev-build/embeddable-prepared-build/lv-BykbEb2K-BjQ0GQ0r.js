import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function l(n, o) {
  for (var s = 0; s < o.length; s++) {
    const e = o[s];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(n, t, a.get ? a : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} }, p = i.exports, _;
function f() {
  return _ || (_ = 1, (function(n, o) {
    (function(s, e) {
      n.exports = e(rt());
    })(p, (function(s) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(s), a = { name: "lv", weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), weekStart: 1, weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: "dažām sekundēm", m: "minūtes", mm: "%d minūtēm", h: "stundas", hh: "%d stundām", d: "dienas", dd: "%d dienām", M: "mēneša", MM: "%d mēnešiem", y: "gada", yy: "%d gadiem" } };
      return t.default.locale(a, null, true), a;
    }));
  })(i)), i.exports;
}
var d = f();
const c = /* @__PURE__ */ by(d), g = /* @__PURE__ */ l({
  __proto__: null,
  default: c
}, [d]);
export {
  g as l
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHYtQnlrYkViMkstQmpRMEdRMHIuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2x2LUJ5a2JFYjJLLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgbSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIHUgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGwobiwgbykge1xuICBmb3IgKHZhciBzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspIHtcbiAgICBjb25zdCBlID0gb1tzXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gbikpIHtcbiAgICAgICAgICBjb25zdCBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBhICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCB0LCBhLmdldCA/IGEgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGkgPSB7IGV4cG9ydHM6IHt9IH0sIHAgPSBpLmV4cG9ydHMsIF87XG5mdW5jdGlvbiBmKCkge1xuICByZXR1cm4gXyB8fCAoXyA9IDEsIChmdW5jdGlvbihuLCBvKSB7XG4gICAgKGZ1bmN0aW9uKHMsIGUpIHtcbiAgICAgIG4uZXhwb3J0cyA9IGUodSgpKTtcbiAgICB9KShwLCAoZnVuY3Rpb24ocykge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShzKSwgYSA9IHsgbmFtZTogXCJsdlwiLCB3ZWVrZGF5czogXCJzdsSTdGRpZW5hX3Bpcm1kaWVuYV9vdHJkaWVuYV90cmXFoWRpZW5hX2NldHVydGRpZW5hX3BpZWt0ZGllbmFfc2VzdGRpZW5hXCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwiamFudsSBcmlzX2ZlYnJ1xIFyaXNfbWFydHNfYXByxKtsaXNfbWFpanNfasWrbmlqc19qxatsaWpzX2F1Z3VzdHNfc2VwdGVtYnJpc19va3RvYnJpc19ub3ZlbWJyaXNfZGVjZW1icmlzXCIuc3BsaXQoXCJfXCIpLCB3ZWVrU3RhcnQ6IDEsIHdlZWtkYXlzU2hvcnQ6IFwiU3ZfUF9PX1RfQ19Qa19TXCIuc3BsaXQoXCJfXCIpLCBtb250aHNTaG9ydDogXCJqYW5fZmViX21hcl9hcHJfbWFpX2rFq25fasWrbF9hdWdfc2VwX29rdF9ub3ZfZGVjXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCJTdl9QX09fVF9DX1BrX1NcIi5zcGxpdChcIl9cIiksIG9yZGluYWw6IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICB9LCBmb3JtYXRzOiB7IExUOiBcIkhIOm1tXCIsIExUUzogXCJISDptbTpzc1wiLCBMOiBcIkRELk1NLllZWVkuXCIsIExMOiBcIllZWVkuIFtnYWRhXSBELiBNTU1NXCIsIExMTDogXCJZWVlZLiBbZ2FkYV0gRC4gTU1NTSwgSEg6bW1cIiwgTExMTDogXCJZWVlZLiBbZ2FkYV0gRC4gTU1NTSwgZGRkZCwgSEg6bW1cIiB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcInDEk2MgJXNcIiwgcGFzdDogXCJwaXJtcyAlc1wiLCBzOiBcImRhxb7EgW0gc2VrdW5kxJNtXCIsIG06IFwibWluxat0ZXNcIiwgbW06IFwiJWQgbWluxat0xJNtXCIsIGg6IFwic3R1bmRhc1wiLCBoaDogXCIlZCBzdHVuZMSBbVwiLCBkOiBcImRpZW5hc1wiLCBkZDogXCIlZCBkaWVuxIFtXCIsIE06IFwibcSTbmXFoWFcIiwgTU06IFwiJWQgbcSTbmXFoWllbVwiLCB5OiBcImdhZGFcIiwgeXk6IFwiJWQgZ2FkaWVtXCIgfSB9O1xuICAgICAgcmV0dXJuIHQuZGVmYXVsdC5sb2NhbGUoYSwgbnVsbCwgITApLCBhO1xuICAgIH0pKTtcbiAgfSkoaSkpLCBpLmV4cG9ydHM7XG59XG52YXIgZCA9IGYoKTtcbmNvbnN0IGMgPSAvKiBAX19QVVJFX18gKi8gbShkKSwgZyA9IC8qIEBfX1BVUkVfXyAqLyBsKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBjXG59LCBbZF0pO1xuZXhwb3J0IHtcbiAgZyBhcyBsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bHYtQnlrYkViMksuanMubWFwXG4iXSwibmFtZXMiOlsidSIsIm0iXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSwwRUFBMEUsTUFBTSxHQUFHLEdBQUcsUUFBUSx1R0FBdUcsTUFBTSxHQUFHLEdBQUcsV0FBVyxHQUFHLGVBQWUsa0JBQWtCLE1BQU0sR0FBRyxHQUFHLGFBQWEsa0RBQWtELE1BQU0sR0FBRyxHQUFHLGFBQWEsa0JBQWtCLE1BQU0sR0FBRyxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQy9iLGVBQU87QUFBQSxNQUNULEdBQUcsU0FBUyxFQUFFLElBQUksU0FBUyxLQUFLLFlBQVksR0FBRyxlQUFlLElBQUksd0JBQXdCLEtBQUssK0JBQStCLE1BQU0sdUNBQXVDLGNBQWMsRUFBRSxRQUFRLFVBQVUsTUFBTSxZQUFZLEdBQUcsa0JBQWtCLEdBQUcsV0FBVyxJQUFJLGNBQWMsR0FBRyxXQUFXLElBQUksY0FBYyxHQUFHLFVBQVUsSUFBSSxhQUFhLEdBQUcsVUFBVSxJQUFJLGVBQWUsR0FBRyxRQUFRLElBQUksY0FBYTtBQUM5WSxhQUFPLEVBQUUsUUFBUSxPQUFPLEdBQUcsTUFBTSxJQUFFLEdBQUc7QUFBQSxJQUN4QyxFQUFDO0FBQUEsRUFDSCxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ1o7QUFDQSxJQUFJLElBQUksRUFBQztBQUNKLE1BQUMsSUFBb0JDLG1CQUFFLENBQUMsR0FBRyxJQUFvQixrQkFBRTtBQUFBLEVBQ3BELFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
