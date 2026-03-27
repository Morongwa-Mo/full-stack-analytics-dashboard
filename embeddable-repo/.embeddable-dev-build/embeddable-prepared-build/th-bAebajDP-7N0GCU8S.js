import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function m(n, a) {
  for (var _ = 0; _ < a.length; _++) {
    const t = a[_];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in n)) {
          const o = Object.getOwnPropertyDescriptor(t, e);
          o && Object.defineProperty(n, e, o.get ? o : {
            enumerable: true,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, p = s.exports, i;
function l() {
  return i || (i = 1, (function(n, a) {
    (function(_, t) {
      n.exports = t(rt());
    })(p, (function(_) {
      function t(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var e = t(_), o = { name: "th", weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" }, ordinal: function(r) {
        return r + ".";
      } };
      return e.default.locale(o, null, true), o;
    }));
  })(s)), s.exports;
}
var u = l();
const c = /* @__PURE__ */ by(u), Y = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [u]);
export {
  Y as t
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtYkFlYmFqRFAtN04wR0NVOFMuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L3RoLWJBZWJhakRQLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgZiB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIG0obiwgYSkge1xuICBmb3IgKHZhciBfID0gMDsgXyA8IGEubGVuZ3RoOyBfKyspIHtcbiAgICBjb25zdCB0ID0gYVtfXTtcbiAgICBpZiAodHlwZW9mIHQgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheSh0KSkge1xuICAgICAgZm9yIChjb25zdCBlIGluIHQpXG4gICAgICAgIGlmIChlICE9PSBcImRlZmF1bHRcIiAmJiAhKGUgaW4gbikpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCBlKTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBlLCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gdFtlXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHMgPSB7IGV4cG9ydHM6IHt9IH0sIHAgPSBzLmV4cG9ydHMsIGk7XG5mdW5jdGlvbiBsKCkge1xuICByZXR1cm4gaSB8fCAoaSA9IDEsIChmdW5jdGlvbihuLCBhKSB7XG4gICAgKGZ1bmN0aW9uKF8sIHQpIHtcbiAgICAgIG4uZXhwb3J0cyA9IHQoZCgpKTtcbiAgICB9KShwLCAoZnVuY3Rpb24oXykge1xuICAgICAgZnVuY3Rpb24gdChyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciBlID0gdChfKSwgbyA9IHsgbmFtZTogXCJ0aFwiLCB3ZWVrZGF5czogXCLguK3guLLguJfguLTguJXguKLguYxf4LiI4Lix4LiZ4LiX4Lij4LmMX+C4reC4seC4h+C4hOC4suC4o1/guJ7guLjguJhf4Lie4Lik4Lir4Lix4Liq4Lia4LiU4Li1X+C4qOC4uOC4geC4o+C5jF/guYDguKrguLLguKPguYxcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzU2hvcnQ6IFwi4Lit4Liy4LiX4Li04LiV4Lii4LmMX+C4iOC4seC4meC4l+C4o+C5jF/guK3guLHguIfguITguLLguKNf4Lie4Li44LiYX+C4nuC4pOC4q+C4seC4ql/guKjguLjguIHguKPguYxf4LmA4Liq4Liy4Lij4LmMXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCLguK3guLIuX+C4iC5f4LitLl/guJ4uX+C4nuC4pC5f4LioLl/guKouXCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwi4Lih4LiB4Lij4Liy4LiE4LihX+C4geC4uOC4oeC4oOC4suC4nuC4seC4meC4mOC5jF/guKHguLXguJnguLLguITguKFf4LmA4Lih4Lip4Liy4Lii4LiZX+C4nuC4pOC4qeC4oOC4suC4hOC4oV/guKHguLTguJbguLjguJnguLLguKLguJlf4LiB4Lij4LiB4LiO4Liy4LiE4LihX+C4quC4tOC4h+C4q+C4suC4hOC4oV/guIHguLHguJnguKLguLLguKLguJlf4LiV4Li44Lil4Liy4LiE4LihX+C4nuC4pOC4qOC4iOC4tOC4geC4suC4ouC4mV/guJjguLHguJnguKfguLLguITguKFcIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcIuC4oS7guIQuX+C4gS7guJ4uX+C4oeC4tS7guIQuX+C5gOC4oS7guKIuX+C4ni7guIQuX+C4oeC4tC7guKIuX+C4gS7guIQuX+C4qi7guIQuX+C4gS7guKIuX+C4lS7guIQuX+C4ni7guKIuX+C4mC7guIQuXCIuc3BsaXQoXCJfXCIpLCBmb3JtYXRzOiB7IExUOiBcIkg6bW1cIiwgTFRTOiBcIkg6bW06c3NcIiwgTDogXCJERC9NTS9ZWVlZXCIsIExMOiBcIkQgTU1NTSBZWVlZXCIsIExMTDogXCJEIE1NTU0gWVlZWSDguYDguKfguKXguLIgSDptbVwiLCBMTExMOiBcIuC4p+C4seC4mWRkZGTguJfguLXguYggRCBNTU1NIFlZWVkg4LmA4Lin4Lil4LiyIEg6bW1cIiB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcIuC4reC4teC4gSAlc1wiLCBwYXN0OiBcIiVz4LiX4Li14LmI4LmB4Lil4LmJ4LinXCIsIHM6IFwi4LmE4Lih4LmI4LiB4Li14LmI4Lin4Li04LiZ4Liy4LiX4Li1XCIsIG06IFwiMSDguJnguLLguJfguLVcIiwgbW06IFwiJWQg4LiZ4Liy4LiX4Li1XCIsIGg6IFwiMSDguIrguLHguYjguKfguYLguKHguIdcIiwgaGg6IFwiJWQg4LiK4Lix4LmI4Lin4LmC4Lih4LiHXCIsIGQ6IFwiMSDguKfguLHguJlcIiwgZGQ6IFwiJWQg4Lin4Lix4LiZXCIsIE06IFwiMSDguYDguJTguLfguK3guJlcIiwgTU06IFwiJWQg4LmA4LiU4Li34Lit4LiZXCIsIHk6IFwiMSDguJvguLVcIiwgeXk6IFwiJWQg4Lib4Li1XCIgfSwgb3JkaW5hbDogZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gciArIFwiLlwiO1xuICAgICAgfSB9O1xuICAgICAgcmV0dXJuIGUuZGVmYXVsdC5sb2NhbGUobywgbnVsbCwgITApLCBvO1xuICAgIH0pKTtcbiAgfSkocykpLCBzLmV4cG9ydHM7XG59XG52YXIgdSA9IGwoKTtcbmNvbnN0IGMgPSAvKiBAX19QVVJFX18gKi8gZih1KSwgWSA9IC8qIEBfX1BVUkVfXyAqLyBtKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBjXG59LCBbdV0pO1xuZXhwb3J0IHtcbiAgWSBhcyB0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGgtYkFlYmFqRFAuanMubWFwXG4iXSwibmFtZXMiOlsiZCIsImYiXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBQztBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSxpREFBaUQsTUFBTSxHQUFHLEdBQUcsZUFBZSw4Q0FBOEMsTUFBTSxHQUFHLEdBQUcsYUFBYSx5QkFBeUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxvR0FBb0csTUFBTSxHQUFHLEdBQUcsYUFBYSxpRUFBaUUsTUFBTSxHQUFHLEdBQUcsU0FBUyxFQUFFLElBQUksUUFBUSxLQUFLLFdBQVcsR0FBRyxjQUFjLElBQUksZUFBZSxLQUFLLHlCQUF5QixNQUFNLG1DQUFrQyxHQUFJLGNBQWMsRUFBRSxRQUFRLFVBQVUsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLEdBQUcsVUFBVSxJQUFJLFdBQVcsR0FBRyxhQUFhLElBQUksY0FBYyxHQUFHLFNBQVMsSUFBSSxVQUFVLEdBQUcsV0FBVyxJQUFJLFlBQVksR0FBRyxRQUFRLElBQUksV0FBVyxTQUFTLFNBQVMsR0FBRztBQUNwekIsZUFBTyxJQUFJO0FBQUEsTUFDYixFQUFDO0FBQ0QsYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
