import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function l(o, a) {
  for (var _ = 0; _ < a.length; _++) {
    const e = a[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(o, t, n.get ? n : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, m = s.exports, i;
function c() {
  return i || (i = 1, (function(o, a) {
    (function(_, e) {
      o.exports = e(rt());
    })(m, (function(_) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(_), n = { name: "ne", weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मे_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), relativeTime: { future: "%s पछि", past: "%s अघि", s: "सेकेन्ड", m: "एक मिनेट", mm: "%d मिनेट", h: "घन्टा", hh: "%d घन्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक वर्ष", yy: "%d वर्ष" }, ordinal: function(r) {
        return ("" + r).replace(/\d/g, (function(f) {
          return "०१२३४५६७८९"[f];
        }));
      }, formats: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" } };
      return t.default.locale(n, null, true), n;
    }));
  })(s)), s.exports;
}
var u = c();
const M = /* @__PURE__ */ by(u), h = /* @__PURE__ */ l({
  __proto__: null,
  default: M
}, [u]);
export {
  h as n
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmUtQkxjdi1QalEtRFpFYUN1XzIuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L25lLUJMY3YtUGpRLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgZCB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIHAgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGwobywgYSkge1xuICBmb3IgKHZhciBfID0gMDsgXyA8IGEubGVuZ3RoOyBfKyspIHtcbiAgICBjb25zdCBlID0gYVtfXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gbykpIHtcbiAgICAgICAgICBjb25zdCBuID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBuICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCB0LCBuLmdldCA/IG4gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHMgPSB7IGV4cG9ydHM6IHt9IH0sIG0gPSBzLmV4cG9ydHMsIGk7XG5mdW5jdGlvbiBjKCkge1xuICByZXR1cm4gaSB8fCAoaSA9IDEsIChmdW5jdGlvbihvLCBhKSB7XG4gICAgKGZ1bmN0aW9uKF8sIGUpIHtcbiAgICAgIG8uZXhwb3J0cyA9IGUocCgpKTtcbiAgICB9KShtLCAoZnVuY3Rpb24oXykge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShfKSwgbiA9IHsgbmFtZTogXCJuZVwiLCB3ZWVrZGF5czogXCLgpIbgpIfgpKTgpKzgpL7gpLBf4KS44KWL4KSu4KSs4KS+4KSwX+CkruCkmeCljeCkl+CksuCkrOCkvuCksF/gpKzgpYHgpKfgpKzgpL7gpLBf4KSs4KS/4KS54KS/4KSs4KS+4KSwX+CktuClgeCkleCljeCksOCkrOCkvuCksF/gpLbgpKjgpL/gpKzgpL7gpLBcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzU2hvcnQ6IFwi4KSG4KSH4KSkLl/gpLjgpYvgpK4uX+CkruCkmeCljeCkl+Cksi5f4KSs4KWB4KSnLl/gpKzgpL/gpLngpL8uX+CktuClgeCkleCljeCksC5f4KS24KSo4KS/LlwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNNaW46IFwi4KSGLl/gpLjgpYsuX+CkruCkgi5f4KSs4KWBLl/gpKzgpL8uX+CktuClgS5f4KS2LlwiLnNwbGl0KFwiX1wiKSwgbW9udGhzOiBcIuCknOCkqOCkteCksOClgF/gpKvgpYfgpKzgpY3gpLDgpYHgpLXgpLDgpYBf4KSu4KS+4KSw4KWN4KSaX+CkheCkquCljeCksOCkv+Cksl/gpK7gpYdf4KSc4KWB4KSoX+CknOClgeCksuCkvuCkiF/gpIXgpJfgpLfgpY3gpJ9f4KS44KWH4KSq4KWN4KSf4KWH4KSu4KWN4KSs4KSwX+CkheCkleCljeCkn+Cli+CkrOCksF/gpKjgpYvgpK3gpYfgpK7gpY3gpKzgpLBf4KSh4KS/4KS44KWH4KSu4KWN4KSs4KSwXCIuc3BsaXQoXCJfXCIpLCBtb250aHNTaG9ydDogXCLgpJzgpKguX+Ckq+Clh+CkrOCljeCksOClgS5f4KSu4KS+4KSw4KWN4KSaX+CkheCkquCljeCksOCkvy5f4KSu4KSIX+CknOClgeCkqF/gpJzgpYHgpLLgpL7gpIguX+CkheCkly5f4KS44KWH4KSq4KWN4KSfLl/gpIXgpJXgpY3gpJ/gpYsuX+CkqOCli+CkreClhy5f4KSh4KS/4KS44KWHLlwiLnNwbGl0KFwiX1wiKSwgcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogXCIlcyDgpKrgpJvgpL9cIiwgcGFzdDogXCIlcyDgpIXgpJjgpL9cIiwgczogXCLgpLjgpYfgpJXgpYfgpKjgpY3gpKFcIiwgbTogXCLgpI/gpJUg4KSu4KS/4KSo4KWH4KSfXCIsIG1tOiBcIiVkIOCkruCkv+CkqOClh+Ckn1wiLCBoOiBcIuCkmOCkqOCljeCkn+CkvlwiLCBoaDogXCIlZCDgpJjgpKjgpY3gpJ/gpL5cIiwgZDogXCLgpI/gpJUg4KSm4KS/4KSoXCIsIGRkOiBcIiVkIOCkpuCkv+CkqFwiLCBNOiBcIuCkj+CklSDgpK7gpLngpL/gpKjgpL5cIiwgTU06IFwiJWQg4KSu4KS54KS/4KSo4KS+XCIsIHk6IFwi4KSP4KSVIOCkteCksOCljeCkt1wiLCB5eTogXCIlZCDgpLXgpLDgpY3gpLdcIiB9LCBvcmRpbmFsOiBmdW5jdGlvbihyKSB7XG4gICAgICAgIHJldHVybiAoXCJcIiArIHIpLnJlcGxhY2UoL1xcZC9nLCAoZnVuY3Rpb24oZikge1xuICAgICAgICAgIHJldHVybiBcIuClpuClp+ClqOClqeClquClq+ClrOClreClruClr1wiW2ZdO1xuICAgICAgICB9KSk7XG4gICAgICB9LCBmb3JtYXRzOiB7IExUOiBcIkHgpJXgpYsgaDptbSDgpKzgpJzgpYdcIiwgTFRTOiBcIkHgpJXgpYsgaDptbTpzcyDgpKzgpJzgpYdcIiwgTDogXCJERC9NTS9ZWVlZXCIsIExMOiBcIkQgTU1NTSBZWVlZXCIsIExMTDogXCJEIE1NTU0gWVlZWSwgQeCkleCliyBoOm1tIOCkrOCknOClh1wiLCBMTExMOiBcImRkZGQsIEQgTU1NTSBZWVlZLCBB4KSV4KWLIGg6bW0g4KSs4KSc4KWHXCIgfSB9O1xuICAgICAgcmV0dXJuIHQuZGVmYXVsdC5sb2NhbGUobiwgbnVsbCwgITApLCBuO1xuICAgIH0pKTtcbiAgfSkocykpLCBzLmV4cG9ydHM7XG59XG52YXIgdSA9IGMoKTtcbmNvbnN0IE0gPSAvKiBAX19QVVJFX18gKi8gZCh1KSwgaCA9IC8qIEBfX1BVUkVfXyAqLyBsKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBNXG59LCBbdV0pO1xuZXhwb3J0IHtcbiAgaCBhcyBuXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmUtQkxjdi1QalEuanMubWFwXG4iXSwibmFtZXMiOlsicCIsImQiXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSx3REFBd0QsTUFBTSxHQUFHLEdBQUcsZUFBZSwwQ0FBMEMsTUFBTSxHQUFHLEdBQUcsYUFBYSw0QkFBNEIsTUFBTSxHQUFHLEdBQUcsUUFBUSx1RkFBdUYsTUFBTSxHQUFHLEdBQUcsYUFBYSx1RUFBdUUsTUFBTSxHQUFHLEdBQUcsY0FBYyxFQUFFLFFBQVEsVUFBVSxNQUFNLFVBQVUsR0FBRyxXQUFXLEdBQUcsWUFBWSxJQUFJLFlBQVksR0FBRyxTQUFTLElBQUksWUFBWSxHQUFHLFVBQVUsSUFBSSxVQUFVLEdBQUcsWUFBWSxJQUFJLFlBQVksR0FBRyxXQUFXLElBQUksVUFBUyxHQUFJLFNBQVMsU0FBUyxHQUFHO0FBQzFwQixnQkFBUSxLQUFLLEdBQUcsUUFBUSxRQUFRLFNBQVMsR0FBRztBQUMxQyxpQkFBTyxhQUFhLENBQUM7QUFBQSxRQUN2QixFQUFDO0FBQUEsTUFDSCxHQUFHLFNBQVMsRUFBRSxJQUFJLGdCQUFnQixLQUFLLG1CQUFtQixHQUFHLGNBQWMsSUFBSSxlQUFlLEtBQUssNkJBQTZCLE1BQU0sb0NBQW1DO0FBQ3pLLGFBQU8sRUFBRSxRQUFRLE9BQU8sR0FBRyxNQUFNLElBQUUsR0FBRztBQUFBLElBQ3hDLEVBQUM7QUFBQSxFQUNILEdBQUcsQ0FBQyxJQUFJLEVBQUU7QUFDWjtBQUNBLElBQUksSUFBSSxFQUFDO0FBQ0osTUFBQyxJQUFvQkMsbUJBQUUsQ0FBQyxHQUFHLElBQW9CLGtCQUFFO0FBQUEsRUFDcEQsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
