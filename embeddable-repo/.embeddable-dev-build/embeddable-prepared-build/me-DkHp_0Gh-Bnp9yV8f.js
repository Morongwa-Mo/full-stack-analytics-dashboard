import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function f(n, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
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
var _ = { exports: {} }, l = _.exports, u;
function d() {
  return u || (u = 1, (function(n, s) {
    (function(o, e) {
      n.exports = e(rt());
    })(l, (function(o) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(o), a = { name: "me", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), weekStart: 1, weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
      return t.default.locale(a, null, true), a;
    }));
  })(_)), _.exports;
}
var m = d();
const c = /* @__PURE__ */ by(m), Y = /* @__PURE__ */ f({
  __proto__: null,
  default: c
}, [m]);
export {
  Y as m
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUtRGtIcF8wR2gtQm5wOXlWOGYuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L21lLURrSHBfMEdoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgaSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIHAgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGYobiwgcykge1xuICBmb3IgKHZhciBvID0gMDsgbyA8IHMubGVuZ3RoOyBvKyspIHtcbiAgICBjb25zdCBlID0gc1tvXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gbikpIHtcbiAgICAgICAgICBjb25zdCBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBhICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCB0LCBhLmdldCA/IGEgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIF8gPSB7IGV4cG9ydHM6IHt9IH0sIGwgPSBfLmV4cG9ydHMsIHU7XG5mdW5jdGlvbiBkKCkge1xuICByZXR1cm4gdSB8fCAodSA9IDEsIChmdW5jdGlvbihuLCBzKSB7XG4gICAgKGZ1bmN0aW9uKG8sIGUpIHtcbiAgICAgIG4uZXhwb3J0cyA9IGUocCgpKTtcbiAgICB9KShsLCAoZnVuY3Rpb24obykge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShvKSwgYSA9IHsgbmFtZTogXCJtZVwiLCB3ZWVrZGF5czogXCJuZWRqZWxqYV9wb25lZGplbGpha191dG9yYWtfc3JpamVkYV/EjWV0dnJ0YWtfcGV0YWtfc3Vib3RhXCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwiamFudWFyX2ZlYnJ1YXJfbWFydF9hcHJpbF9tYWpfanVuX2p1bF9hdmd1c3Rfc2VwdGVtYmFyX29rdG9iYXJfbm92ZW1iYXJfZGVjZW1iYXJcIi5zcGxpdChcIl9cIiksIHdlZWtTdGFydDogMSwgd2Vla2RheXNTaG9ydDogXCJuZWQuX3Bvbi5fdXRvLl9zcmkuX8SNZXQuX3BldC5fc3ViLlwiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwiamFuLl9mZWIuX21hci5fYXByLl9tYWpfanVuX2p1bF9hdmcuX3NlcC5fb2t0Ll9ub3YuX2RlYy5cIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzTWluOiBcIm5lX3BvX3V0X3NyX8SNZV9wZV9zdVwiLnNwbGl0KFwiX1wiKSwgb3JkaW5hbDogZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0sIGZvcm1hdHM6IHsgTFQ6IFwiSDptbVwiLCBMVFM6IFwiSDptbTpzc1wiLCBMOiBcIkRELk1NLllZWVlcIiwgTEw6IFwiRC4gTU1NTSBZWVlZXCIsIExMTDogXCJELiBNTU1NIFlZWVkgSDptbVwiLCBMTExMOiBcImRkZGQsIEQuIE1NTU0gWVlZWSBIOm1tXCIgfSB9O1xuICAgICAgcmV0dXJuIHQuZGVmYXVsdC5sb2NhbGUoYSwgbnVsbCwgITApLCBhO1xuICAgIH0pKTtcbiAgfSkoXykpLCBfLmV4cG9ydHM7XG59XG52YXIgbSA9IGQoKTtcbmNvbnN0IGMgPSAvKiBAX19QVVJFX18gKi8gaShtKSwgWSA9IC8qIEBfX1BVUkVfXyAqLyBmKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBjXG59LCBbbV0pO1xuZXhwb3J0IHtcbiAgWSBhcyBtXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWUtRGtIcF8wR2guanMubWFwXG4iXSwibmFtZXMiOlsicCIsImkiXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSw0REFBNEQsTUFBTSxHQUFHLEdBQUcsUUFBUSxtRkFBbUYsTUFBTSxHQUFHLEdBQUcsV0FBVyxHQUFHLGVBQWUscUNBQXFDLE1BQU0sR0FBRyxHQUFHLGFBQWEsMkRBQTJELE1BQU0sR0FBRyxHQUFHLGFBQWEsdUJBQXVCLE1BQU0sR0FBRyxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQzliLGVBQU87QUFBQSxNQUNULEdBQUcsU0FBUyxFQUFFLElBQUksUUFBUSxLQUFLLFdBQVcsR0FBRyxjQUFjLElBQUksZ0JBQWdCLEtBQUsscUJBQXFCLE1BQU0sNEJBQTJCO0FBQzFJLGFBQU8sRUFBRSxRQUFRLE9BQU8sR0FBRyxNQUFNLElBQUUsR0FBRztBQUFBLElBQ3hDLEVBQUM7QUFBQSxFQUNILEdBQUcsQ0FBQyxJQUFJLEVBQUU7QUFDWjtBQUNBLElBQUksSUFBSSxFQUFDO0FBQ0osTUFBQyxJQUFvQkMsbUJBQUUsQ0FBQyxHQUFHLElBQW9CLGtCQUFFO0FBQUEsRUFDcEQsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
