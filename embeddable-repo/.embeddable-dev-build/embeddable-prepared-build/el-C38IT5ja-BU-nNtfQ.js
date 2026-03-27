import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function d(n, a) {
  for (var _ = 0; _ < a.length; _++) {
    const e = a[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, m = s.exports, i;
function p() {
  return i || (i = 1, (function(n, a) {
    (function(_, e) {
      n.exports = e(rt());
    })(m, (function(_) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(_), o = { name: "el", weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), months: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"), ordinal: function(r) {
        return r;
      }, weekStart: 1, relativeTime: { future: "σε %s", past: "πριν %s", s: "μερικά δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένα μήνα", MM: "%d μήνες", y: "ένα χρόνο", yy: "%d χρόνια" }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" } };
      return t.default.locale(o, null, true), o;
    }));
  })(s)), s.exports;
}
var l = p();
const c = /* @__PURE__ */ by(l), y = /* @__PURE__ */ d({
  __proto__: null,
  default: c
}, [l]);
export {
  y as e
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWwtQzM4SVQ1amEtQlUtbk50ZlEuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2VsLUMzOElUNWphLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgdSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGYgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGQobiwgYSkge1xuICBmb3IgKHZhciBfID0gMDsgXyA8IGEubGVuZ3RoOyBfKyspIHtcbiAgICBjb25zdCBlID0gYVtfXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gbikpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCB0LCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHMgPSB7IGV4cG9ydHM6IHt9IH0sIG0gPSBzLmV4cG9ydHMsIGk7XG5mdW5jdGlvbiBwKCkge1xuICByZXR1cm4gaSB8fCAoaSA9IDEsIChmdW5jdGlvbihuLCBhKSB7XG4gICAgKGZ1bmN0aW9uKF8sIGUpIHtcbiAgICAgIG4uZXhwb3J0cyA9IGUoZigpKTtcbiAgICB9KShtLCAoZnVuY3Rpb24oXykge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShfKSwgbyA9IHsgbmFtZTogXCJlbFwiLCB3ZWVrZGF5czogXCLOms+Fz4HOuc6xzrrOrl/OlM61z4XPhM6tz4HOsV/OpM+Bzq/PhM63X86kzrXPhM6sz4HPhM63X86gzq3OvM+Az4TOt1/OoM6xz4HOsc+DzrrOtc+Fzq5fzqPOrM6yzrLOsc+Ezr9cIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzU2hvcnQ6IFwizprPhc+BX86UzrXPhV/OpM+BzrlfzqTOtc+EX86gzrXOvF/OoM6xz4FfzqPOsc6yXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCLOms+FX86UzrVfzqTPgV/OpM61X86gzrVfzqDOsV/Oo86xXCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwizpnOsc69zr/Phc6sz4HOuc6/z4JfzqbOtc6yz4HOv8+FzqzPgc65zr/Pgl/OnM6sz4HPhM65zr/Pgl/Okc+Az4HOr867zrnOv8+CX86czqzOuc6/z4JfzpnOv8+Nzr3Ouc6/z4JfzpnOv8+NzrvOuc6/z4JfzpHPjc6zzr/Phc+Dz4TOv8+CX86jzrXPgM+Ezq3OvM6yz4HOuc6/z4Jfzp/Ous+Ez47Oss+BzrnOv8+CX86dzr/Orc68zrLPgc65zr/Pgl/OlM61zrrOrc68zrLPgc65zr/PglwiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwizpnOsc69X86mzrXOsl/OnM6xz4FfzpHPgM+BX86czrHOuV/Omc6/z4XOvV/Omc6/z4XOu1/Okc+FzrNfzqPOtc+Az4Rfzp/Ous+EX86dzr/OtV/OlM61zrpcIi5zcGxpdChcIl9cIiksIG9yZGluYWw6IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICB9LCB3ZWVrU3RhcnQ6IDEsIHJlbGF0aXZlVGltZTogeyBmdXR1cmU6IFwiz4POtSAlc1wiLCBwYXN0OiBcIs+Az4HOuc69ICVzXCIsIHM6IFwizrzOtc+BzrnOus6sIM60zrXPhc+EzrXPgc+MzrvOtc+Az4TOsVwiLCBtOiBcIs6tzr3OsSDOu861z4DPhM+MXCIsIG1tOiBcIiVkIM67zrXPgM+EzqxcIiwgaDogXCLOvM6vzrEgz47Pgc6xXCIsIGhoOiBcIiVkIM+Oz4HOtc+CXCIsIGQ6IFwizrzOr86xIM68zq3Pgc6xXCIsIGRkOiBcIiVkIM68zq3Pgc61z4JcIiwgTTogXCLOrc69zrEgzrzOrs69zrFcIiwgTU06IFwiJWQgzrzOrs69zrXPglwiLCB5OiBcIs6tzr3OsSDPh8+Bz4zOvc6/XCIsIHl5OiBcIiVkIM+Hz4HPjM69zrnOsVwiIH0sIGZvcm1hdHM6IHsgTFQ6IFwiaDptbSBBXCIsIExUUzogXCJoOm1tOnNzIEFcIiwgTDogXCJERC9NTS9ZWVlZXCIsIExMOiBcIkQgTU1NTSBZWVlZXCIsIExMTDogXCJEIE1NTU0gWVlZWSBoOm1tIEFcIiwgTExMTDogXCJkZGRkLCBEIE1NTU0gWVlZWSBoOm1tIEFcIiB9IH07XG4gICAgICByZXR1cm4gdC5kZWZhdWx0LmxvY2FsZShvLCBudWxsLCAhMCksIG87XG4gICAgfSkpO1xuICB9KShzKSksIHMuZXhwb3J0cztcbn1cbnZhciBsID0gcCgpO1xuY29uc3QgYyA9IC8qIEBfX1BVUkVfXyAqLyB1KGwpLCB5ID0gLyogQF9fUFVSRV9fICovIGQoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGNcbn0sIFtsXSk7XG5leHBvcnQge1xuICB5IGFzIGVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbC1DMzhJVDVqYS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJmIiwidSJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFVLHlEQUF5RCxNQUFNLEdBQUcsR0FBRyxlQUFlLDhCQUE4QixNQUFNLEdBQUcsR0FBRyxhQUFhLHVCQUF1QixNQUFNLEdBQUcsR0FBRyxRQUFRLHFIQUFxSCxNQUFNLEdBQUcsR0FBRyxhQUFhLHFEQUFxRCxNQUFNLEdBQUcsR0FBRyxTQUFTLFNBQVMsR0FBRztBQUNsYyxlQUFPO0FBQUEsTUFDVCxHQUFHLFdBQVcsR0FBRyxjQUFjLEVBQUUsUUFBUSxTQUFTLE1BQU0sV0FBVyxHQUFHLHVCQUF1QixHQUFHLGFBQWEsSUFBSSxZQUFZLEdBQUcsV0FBVyxJQUFJLFdBQVcsR0FBRyxZQUFZLElBQUksWUFBWSxHQUFHLFlBQVksSUFBSSxZQUFZLEdBQUcsYUFBYSxJQUFJLFlBQVcsR0FBSSxTQUFTLEVBQUUsSUFBSSxVQUFVLEtBQUssYUFBYSxHQUFHLGNBQWMsSUFBSSxlQUFlLEtBQUssc0JBQXNCLE1BQU0sNkJBQTRCO0FBQ3ZZLGFBQU8sRUFBRSxRQUFRLE9BQU8sR0FBRyxNQUFNLElBQUUsR0FBRztBQUFBLElBQ3hDLEVBQUM7QUFBQSxFQUNILEdBQUcsQ0FBQyxJQUFJLEVBQUU7QUFDWjtBQUNBLElBQUksSUFBSSxFQUFDO0FBQ0osTUFBQyxJQUFvQkMsbUJBQUUsQ0FBQyxHQUFHLElBQW9CLGtCQUFFO0FBQUEsRUFDcEQsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
