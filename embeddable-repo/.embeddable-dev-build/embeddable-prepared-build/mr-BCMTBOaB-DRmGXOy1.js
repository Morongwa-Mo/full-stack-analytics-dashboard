import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function p(n, a) {
  for (var _ = 0; _ < a.length; _++) {
    const r = a[_];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const e in r)
        if (e !== "default" && !(e in n)) {
          const o = Object.getOwnPropertyDescriptor(r, e);
          o && Object.defineProperty(n, e, o.get ? o : {
            enumerable: true,
            get: () => r[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, l = s.exports, i;
function c() {
  return i || (i = 1, (function(n, a) {
    (function(_, r) {
      n.exports = r(rt());
    })(l, (function(_) {
      function r(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var e = r(_), o = { name: "mr", weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), ordinal: function(t) {
        return t;
      }, formats: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता" } };
      return e.default.locale(o, null, true), o;
    }));
  })(s)), s.exports;
}
var u = c();
const d = /* @__PURE__ */ by(u), y = /* @__PURE__ */ p({
  __proto__: null,
  default: d
}, [u]);
export {
  y as m
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXItQkNNVEJPYUItRFJtR1hPeTEuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L21yLUJDTVRCT2FCLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgbSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGYgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIHAobiwgYSkge1xuICBmb3IgKHZhciBfID0gMDsgXyA8IGEubGVuZ3RoOyBfKyspIHtcbiAgICBjb25zdCByID0gYVtfXTtcbiAgICBpZiAodHlwZW9mIHIgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShyKSkge1xuICAgICAgZm9yIChjb25zdCBlIGluIHIpXG4gICAgICAgIGlmIChlICE9PSBcImRlZmF1bHRcIiAmJiAhKGUgaW4gbikpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLCBlKTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBlLCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gcltlXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHMgPSB7IGV4cG9ydHM6IHt9IH0sIGwgPSBzLmV4cG9ydHMsIGk7XG5mdW5jdGlvbiBjKCkge1xuICByZXR1cm4gaSB8fCAoaSA9IDEsIChmdW5jdGlvbihuLCBhKSB7XG4gICAgKGZ1bmN0aW9uKF8sIHIpIHtcbiAgICAgIG4uZXhwb3J0cyA9IHIoZigpKTtcbiAgICB9KShsLCAoZnVuY3Rpb24oXykge1xuICAgICAgZnVuY3Rpb24gcih0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHR5cGVvZiB0ID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gdCA/IHQgOiB7IGRlZmF1bHQ6IHQgfTtcbiAgICAgIH1cbiAgICAgIHZhciBlID0gcihfKSwgbyA9IHsgbmFtZTogXCJtclwiLCB3ZWVrZGF5czogXCLgpLDgpLXgpL/gpLXgpL7gpLBf4KS44KWL4KSu4KS14KS+4KSwX+CkruCkguCkl+Cks+CkteCkvuCksF/gpKzgpYHgpKfgpLXgpL7gpLBf4KSX4KWB4KSw4KWC4KS14KS+4KSwX+CktuClgeCkleCljeCksOCkteCkvuCksF/gpLbgpKjgpL/gpLXgpL7gpLBcIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCLgpJzgpL7gpKjgpYfgpLXgpL7gpLDgpYBf4KSr4KWH4KSs4KWN4KSw4KWB4KS14KS+4KSw4KWAX+CkruCkvuCksOCljeCkml/gpI/gpKrgpY3gpLDgpL/gpLJf4KSu4KWHX+CknOClguCkqF/gpJzgpYHgpLLgpYhf4KSR4KSX4KS44KWN4KSfX+CkuOCkquCljeCkn+Clh+CkguCkrOCksF/gpJHgpJXgpY3gpJ/gpYvgpKzgpLBf4KSo4KWL4KS14KWN4KS54KWH4KSC4KSs4KSwX+CkoeCkv+CkuOClh+CkguCkrOCksFwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNTaG9ydDogXCLgpLDgpLXgpL9f4KS44KWL4KSuX+CkruCkguCkl+Cks1/gpKzgpYHgpKdf4KSX4KWB4KSw4KWCX+CktuClgeCkleCljeCksF/gpLbgpKjgpL9cIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcIuCknOCkvuCkqOClhy5f4KSr4KWH4KSs4KWN4KSw4KWBLl/gpK7gpL7gpLDgpY3gpJouX+Ckj+CkquCljeCksOCkvy5f4KSu4KWHLl/gpJzgpYLgpKguX+CknOClgeCksuCliC5f4KSR4KSXLl/gpLjgpKrgpY3gpJ/gpYfgpIIuX+CkkeCkleCljeCkn+Cliy5f4KSo4KWL4KS14KWN4KS54KWH4KSCLl/gpKHgpL/gpLjgpYfgpIIuXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCLgpLBf4KS44KWLX+CkruCkgl/gpKzgpYFf4KSX4KWBX+CktuClgV/gpLZcIi5zcGxpdChcIl9cIiksIG9yZGluYWw6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9LCBmb3JtYXRzOiB7IExUOiBcIkEgaDptbSDgpLXgpL7gpJzgpKTgpL5cIiwgTFRTOiBcIkEgaDptbTpzcyDgpLXgpL7gpJzgpKTgpL5cIiwgTDogXCJERC9NTS9ZWVlZXCIsIExMOiBcIkQgTU1NTSBZWVlZXCIsIExMTDogXCJEIE1NTU0gWVlZWSwgQSBoOm1tIOCkteCkvuCknOCkpOCkvlwiLCBMTExMOiBcImRkZGQsIEQgTU1NTSBZWVlZLCBBIGg6bW0g4KS14KS+4KSc4KSk4KS+XCIgfSB9O1xuICAgICAgcmV0dXJuIGUuZGVmYXVsdC5sb2NhbGUobywgbnVsbCwgITApLCBvO1xuICAgIH0pKTtcbiAgfSkocykpLCBzLmV4cG9ydHM7XG59XG52YXIgdSA9IGMoKTtcbmNvbnN0IGQgPSAvKiBAX19QVVJFX18gKi8gbSh1KSwgeSA9IC8qIEBfX1BVUkVfXyAqLyBwKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBkXG59LCBbdV0pO1xuZXhwb3J0IHtcbiAgeSBhcyBtXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXItQkNNVEJPYUIuanMubWFwXG4iXSwibmFtZXMiOlsiZiIsIm0iXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSx1REFBdUQsTUFBTSxHQUFHLEdBQUcsUUFBUSx3RkFBd0YsTUFBTSxHQUFHLEdBQUcsZUFBZSxrQ0FBa0MsTUFBTSxHQUFHLEdBQUcsYUFBYSxnRkFBZ0YsTUFBTSxHQUFHLEdBQUcsYUFBYSxxQkFBcUIsTUFBTSxHQUFHLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDaGMsZUFBTztBQUFBLE1BQ1QsR0FBRyxTQUFTLEVBQUUsSUFBSSxnQkFBZ0IsS0FBSyxtQkFBbUIsR0FBRyxjQUFjLElBQUksZUFBZSxLQUFLLDZCQUE2QixNQUFNLG9DQUFtQztBQUN6SyxhQUFPLEVBQUUsUUFBUSxPQUFPLEdBQUcsTUFBTSxJQUFFLEdBQUc7QUFBQSxJQUN4QyxFQUFDO0FBQUEsRUFDSCxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ1o7QUFDQSxJQUFJLElBQUksRUFBQztBQUNKLE1BQUMsSUFBb0JDLG1CQUFFLENBQUMsR0FBRyxJQUFvQixrQkFBRTtBQUFBLEVBQ3BELFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
