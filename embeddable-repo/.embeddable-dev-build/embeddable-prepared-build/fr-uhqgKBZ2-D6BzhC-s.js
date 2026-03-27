import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function f(a, s) {
  for (var n = 0; n < s.length; n++) {
    const e = s[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in a)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(a, t, o.get ? o : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} }, l = i.exports, u;
function c() {
  return u || (u = 1, (function(a, s) {
    (function(n, e) {
      a.exports = e(rt());
    })(l, (function(n) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(n), o = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(r) {
        return "" + r + (r === 1 ? "er" : "");
      } };
      return t.default.locale(o, null, true), o;
    }));
  })(i)), i.exports;
}
var _ = c();
const p = /* @__PURE__ */ by(_), j = /* @__PURE__ */ f({
  __proto__: null,
  default: p
}, [_]);
export {
  j as f
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnItdWhxZ0tCWjItRDZCemhDLXMuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2ZyLXVocWdLQloyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgbSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGYoYSwgcykge1xuICBmb3IgKHZhciBuID0gMDsgbiA8IHMubGVuZ3RoOyBuKyspIHtcbiAgICBjb25zdCBlID0gc1tuXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gYSkpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCB0LCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGkgPSB7IGV4cG9ydHM6IHt9IH0sIGwgPSBpLmV4cG9ydHMsIHU7XG5mdW5jdGlvbiBjKCkge1xuICByZXR1cm4gdSB8fCAodSA9IDEsIChmdW5jdGlvbihhLCBzKSB7XG4gICAgKGZ1bmN0aW9uKG4sIGUpIHtcbiAgICAgIGEuZXhwb3J0cyA9IGUoZCgpKTtcbiAgICB9KShsLCAoZnVuY3Rpb24obikge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShuKSwgbyA9IHsgbmFtZTogXCJmclwiLCB3ZWVrZGF5czogXCJkaW1hbmNoZV9sdW5kaV9tYXJkaV9tZXJjcmVkaV9qZXVkaV92ZW5kcmVkaV9zYW1lZGlcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzU2hvcnQ6IFwiZGltLl9sdW4uX21hci5fbWVyLl9qZXUuX3Zlbi5fc2FtLlwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNNaW46IFwiZGlfbHVfbWFfbWVfamVfdmVfc2FcIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCJqYW52aWVyX2bDqXZyaWVyX21hcnNfYXZyaWxfbWFpX2p1aW5fanVpbGxldF9hb8O7dF9zZXB0ZW1icmVfb2N0b2JyZV9ub3ZlbWJyZV9kw6ljZW1icmVcIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcImphbnYuX2bDqXZyLl9tYXJzX2F2ci5fbWFpX2p1aW5fanVpbC5fYW/Du3Rfc2VwdC5fb2N0Ll9ub3YuX2TDqWMuXCIuc3BsaXQoXCJfXCIpLCB3ZWVrU3RhcnQ6IDEsIHllYXJTdGFydDogNCwgZm9ybWF0czogeyBMVDogXCJISDptbVwiLCBMVFM6IFwiSEg6bW06c3NcIiwgTDogXCJERC9NTS9ZWVlZXCIsIExMOiBcIkQgTU1NTSBZWVlZXCIsIExMTDogXCJEIE1NTU0gWVlZWSBISDptbVwiLCBMTExMOiBcImRkZGQgRCBNTU1NIFlZWVkgSEg6bW1cIiB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcImRhbnMgJXNcIiwgcGFzdDogXCJpbCB5IGEgJXNcIiwgczogXCJxdWVscXVlcyBzZWNvbmRlc1wiLCBtOiBcInVuZSBtaW51dGVcIiwgbW06IFwiJWQgbWludXRlc1wiLCBoOiBcInVuZSBoZXVyZVwiLCBoaDogXCIlZCBoZXVyZXNcIiwgZDogXCJ1biBqb3VyXCIsIGRkOiBcIiVkIGpvdXJzXCIsIE06IFwidW4gbW9pc1wiLCBNTTogXCIlZCBtb2lzXCIsIHk6IFwidW4gYW5cIiwgeXk6IFwiJWQgYW5zXCIgfSwgb3JkaW5hbDogZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gXCJcIiArIHIgKyAociA9PT0gMSA/IFwiZXJcIiA6IFwiXCIpO1xuICAgICAgfSB9O1xuICAgICAgcmV0dXJuIHQuZGVmYXVsdC5sb2NhbGUobywgbnVsbCwgITApLCBvO1xuICAgIH0pKTtcbiAgfSkoaSkpLCBpLmV4cG9ydHM7XG59XG52YXIgXyA9IGMoKTtcbmNvbnN0IHAgPSAvKiBAX19QVVJFX18gKi8gbShfKSwgaiA9IC8qIEBfX1BVUkVfXyAqLyBmKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBwXG59LCBbX10pO1xuZXhwb3J0IHtcbiAgaiBhcyBmXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnItdWhxZ0tCWjIuanMubWFwXG4iXSwibmFtZXMiOlsiZCIsIm0iXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSxzREFBc0QsTUFBTSxHQUFHLEdBQUcsZUFBZSxxQ0FBcUMsTUFBTSxHQUFHLEdBQUcsYUFBYSx1QkFBdUIsTUFBTSxHQUFHLEdBQUcsUUFBUSx1RkFBdUYsTUFBTSxHQUFHLEdBQUcsYUFBYSxpRUFBaUUsTUFBTSxHQUFHLEdBQUcsV0FBVyxHQUFHLFdBQVcsR0FBRyxTQUFTLEVBQUUsSUFBSSxTQUFTLEtBQUssWUFBWSxHQUFHLGNBQWMsSUFBSSxlQUFlLEtBQUsscUJBQXFCLE1BQU0seUJBQXdCLEdBQUksY0FBYyxFQUFFLFFBQVEsV0FBVyxNQUFNLGFBQWEsR0FBRyxxQkFBcUIsR0FBRyxjQUFjLElBQUksY0FBYyxHQUFHLGFBQWEsSUFBSSxhQUFhLEdBQUcsV0FBVyxJQUFJLFlBQVksR0FBRyxXQUFXLElBQUksV0FBVyxHQUFHLFNBQVMsSUFBSSxZQUFZLFNBQVMsU0FBUyxHQUFHO0FBQ2wwQixlQUFPLEtBQUssS0FBSyxNQUFNLElBQUksT0FBTztBQUFBLE1BQ3BDLEVBQUM7QUFDRCxhQUFPLEVBQUUsUUFBUSxPQUFPLEdBQUcsTUFBTSxJQUFFLEdBQUc7QUFBQSxJQUN4QyxFQUFDO0FBQUEsRUFDSCxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ1o7QUFDQSxJQUFJLElBQUksRUFBQztBQUNKLE1BQUMsSUFBb0JDLG1CQUFFLENBQUMsR0FBRyxJQUFvQixrQkFBRTtBQUFBLEVBQ3BELFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
