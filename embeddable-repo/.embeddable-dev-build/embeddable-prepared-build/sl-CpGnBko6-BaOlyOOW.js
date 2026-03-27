import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function v(s, l) {
  for (var i = 0; i < l.length; i++) {
    const o = l[i];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const m in o)
        if (m !== "default" && !(m in s)) {
          const u = Object.getOwnPropertyDescriptor(o, m);
          u && Object.defineProperty(s, m, u.get ? u : {
            enumerable: true,
            get: () => o[m]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var c = { exports: {} }, y = c.exports, p;
function b() {
  return p || (p = 1, (function(s, l) {
    (function(i, o) {
      s.exports = o(rt());
    })(y, (function(i) {
      function o(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var m = o(i);
      function u(e) {
        return e % 100 == 2;
      }
      function _(e) {
        return e % 100 == 3 || e % 100 == 4;
      }
      function n(e, r, M, t) {
        var a = e + " ";
        switch (M) {
          case "s":
            return r || t ? "nekaj sekund" : "nekaj sekundami";
          case "m":
            return r ? "ena minuta" : "eno minuto";
          case "mm":
            return u(e) ? a + (r || t ? "minuti" : "minutama") : _(e) ? a + (r || t ? "minute" : "minutami") : a + (r || t ? "minut" : "minutami");
          case "h":
            return r ? "ena ura" : "eno uro";
          case "hh":
            return u(e) ? a + (r || t ? "uri" : "urama") : _(e) ? a + (r || t ? "ure" : "urami") : a + (r || t ? "ur" : "urami");
          case "d":
            return r || t ? "en dan" : "enim dnem";
          case "dd":
            return u(e) ? a + (r || t ? "dneva" : "dnevoma") : a + (r || t ? "dni" : "dnevi");
          case "M":
            return r || t ? "en mesec" : "enim mesecem";
          case "MM":
            return u(e) ? a + (r || t ? "meseca" : "mesecema") : _(e) ? a + (r || t ? "mesece" : "meseci") : a + (r || t ? "mesecev" : "meseci");
          case "y":
            return r || t ? "eno leto" : "enim letom";
          case "yy":
            return u(e) ? a + (r || t ? "leti" : "letoma") : _(e) ? a + (r || t ? "leta" : "leti") : a + (r || t ? "let" : "leti");
        }
      }
      var d = { name: "sl", weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), weekStart: 1, weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), ordinal: function(e) {
        return e + ".";
      }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "čez %s", past: "pred %s", s: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n } };
      return m.default.locale(d, null, true), d;
    }));
  })(c)), c.exports;
}
var f = b();
const k = /* @__PURE__ */ by(f), g = /* @__PURE__ */ v({
  __proto__: null,
  default: k
}, [f]);
export {
  g as s
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2wtQ3BHbkJrbzYtQmFPbHlPT1cuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L3NsLUNwR25Ca282LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgaiB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIFkgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIHYocywgbCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGwubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvID0gbFtpXTtcbiAgICBpZiAodHlwZW9mIG8gIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShvKSkge1xuICAgICAgZm9yIChjb25zdCBtIGluIG8pXG4gICAgICAgIGlmIChtICE9PSBcImRlZmF1bHRcIiAmJiAhKG0gaW4gcykpIHtcbiAgICAgICAgICBjb25zdCB1ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLCBtKTtcbiAgICAgICAgICB1ICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCBtLCB1LmdldCA/IHUgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gb1ttXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGMgPSB7IGV4cG9ydHM6IHt9IH0sIHkgPSBjLmV4cG9ydHMsIHA7XG5mdW5jdGlvbiBiKCkge1xuICByZXR1cm4gcCB8fCAocCA9IDEsIChmdW5jdGlvbihzLCBsKSB7XG4gICAgKGZ1bmN0aW9uKGksIG8pIHtcbiAgICAgIHMuZXhwb3J0cyA9IG8oWSgpKTtcbiAgICB9KSh5LCAoZnVuY3Rpb24oaSkge1xuICAgICAgZnVuY3Rpb24gbyhlKSB7XG4gICAgICAgIHJldHVybiBlICYmIHR5cGVvZiBlID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH1cbiAgICAgIHZhciBtID0gbyhpKTtcbiAgICAgIGZ1bmN0aW9uIHUoZSkge1xuICAgICAgICByZXR1cm4gZSAlIDEwMCA9PSAyO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gXyhlKSB7XG4gICAgICAgIHJldHVybiBlICUgMTAwID09IDMgfHwgZSAlIDEwMCA9PSA0O1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbihlLCByLCBNLCB0KSB7XG4gICAgICAgIHZhciBhID0gZSArIFwiIFwiO1xuICAgICAgICBzd2l0Y2ggKE0pIHtcbiAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgcmV0dXJuIHIgfHwgdCA/IFwibmVrYWogc2VrdW5kXCIgOiBcIm5la2FqIHNla3VuZGFtaVwiO1xuICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICByZXR1cm4gciA/IFwiZW5hIG1pbnV0YVwiIDogXCJlbm8gbWludXRvXCI7XG4gICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICByZXR1cm4gdShlKSA/IGEgKyAociB8fCB0ID8gXCJtaW51dGlcIiA6IFwibWludXRhbWFcIikgOiBfKGUpID8gYSArIChyIHx8IHQgPyBcIm1pbnV0ZVwiIDogXCJtaW51dGFtaVwiKSA6IGEgKyAociB8fCB0ID8gXCJtaW51dFwiIDogXCJtaW51dGFtaVwiKTtcbiAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgcmV0dXJuIHIgPyBcImVuYSB1cmFcIiA6IFwiZW5vIHVyb1wiO1xuICAgICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgICAgcmV0dXJuIHUoZSkgPyBhICsgKHIgfHwgdCA/IFwidXJpXCIgOiBcInVyYW1hXCIpIDogXyhlKSA/IGEgKyAociB8fCB0ID8gXCJ1cmVcIiA6IFwidXJhbWlcIikgOiBhICsgKHIgfHwgdCA/IFwidXJcIiA6IFwidXJhbWlcIik7XG4gICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIHJldHVybiByIHx8IHQgPyBcImVuIGRhblwiIDogXCJlbmltIGRuZW1cIjtcbiAgICAgICAgICBjYXNlIFwiZGRcIjpcbiAgICAgICAgICAgIHJldHVybiB1KGUpID8gYSArIChyIHx8IHQgPyBcImRuZXZhXCIgOiBcImRuZXZvbWFcIikgOiBhICsgKHIgfHwgdCA/IFwiZG5pXCIgOiBcImRuZXZpXCIpO1xuICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICByZXR1cm4gciB8fCB0ID8gXCJlbiBtZXNlY1wiIDogXCJlbmltIG1lc2VjZW1cIjtcbiAgICAgICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgICAgIHJldHVybiB1KGUpID8gYSArIChyIHx8IHQgPyBcIm1lc2VjYVwiIDogXCJtZXNlY2VtYVwiKSA6IF8oZSkgPyBhICsgKHIgfHwgdCA/IFwibWVzZWNlXCIgOiBcIm1lc2VjaVwiKSA6IGEgKyAociB8fCB0ID8gXCJtZXNlY2V2XCIgOiBcIm1lc2VjaVwiKTtcbiAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgcmV0dXJuIHIgfHwgdCA/IFwiZW5vIGxldG9cIiA6IFwiZW5pbSBsZXRvbVwiO1xuICAgICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgICAgcmV0dXJuIHUoZSkgPyBhICsgKHIgfHwgdCA/IFwibGV0aVwiIDogXCJsZXRvbWFcIikgOiBfKGUpID8gYSArIChyIHx8IHQgPyBcImxldGFcIiA6IFwibGV0aVwiKSA6IGEgKyAociB8fCB0ID8gXCJsZXRcIiA6IFwibGV0aVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGQgPSB7IG5hbWU6IFwic2xcIiwgd2Vla2RheXM6IFwibmVkZWxqYV9wb25lZGVsamVrX3RvcmVrX3NyZWRhX8SNZXRydGVrX3BldGVrX3NvYm90YVwiLnNwbGl0KFwiX1wiKSwgbW9udGhzOiBcImphbnVhcl9mZWJydWFyX21hcmVjX2FwcmlsX21hal9qdW5pal9qdWxpal9hdmd1c3Rfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXJcIi5zcGxpdChcIl9cIiksIHdlZWtTdGFydDogMSwgd2Vla2RheXNTaG9ydDogXCJuZWQuX3Bvbi5fdG9yLl9zcmUuX8SNZXQuX3BldC5fc29iLlwiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwiamFuLl9mZWIuX21hci5fYXByLl9tYWouX2p1bi5fanVsLl9hdmcuX3NlcC5fb2t0Ll9ub3YuX2RlYy5cIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzTWluOiBcIm5lX3BvX3RvX3NyX8SNZV9wZV9zb1wiLnNwbGl0KFwiX1wiKSwgb3JkaW5hbDogZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gZSArIFwiLlwiO1xuICAgICAgfSwgZm9ybWF0czogeyBMVDogXCJIOm1tXCIsIExUUzogXCJIOm1tOnNzXCIsIEw6IFwiREQuTU0uWVlZWVwiLCBMTDogXCJELiBNTU1NIFlZWVlcIiwgTExMOiBcIkQuIE1NTU0gWVlZWSBIOm1tXCIsIExMTEw6IFwiZGRkZCwgRC4gTU1NTSBZWVlZIEg6bW1cIiwgbDogXCJELiBNLiBZWVlZXCIgfSwgcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogXCLEjWV6ICVzXCIsIHBhc3Q6IFwicHJlZCAlc1wiLCBzOiBuLCBtOiBuLCBtbTogbiwgaDogbiwgaGg6IG4sIGQ6IG4sIGRkOiBuLCBNOiBuLCBNTTogbiwgeTogbiwgeXk6IG4gfSB9O1xuICAgICAgcmV0dXJuIG0uZGVmYXVsdC5sb2NhbGUoZCwgbnVsbCwgITApLCBkO1xuICAgIH0pKTtcbiAgfSkoYykpLCBjLmV4cG9ydHM7XG59XG52YXIgZiA9IGIoKTtcbmNvbnN0IGsgPSAvKiBAX19QVVJFX18gKi8gaihmKSwgZyA9IC8qIEBfX1BVUkVfXyAqLyB2KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBrXG59LCBbZl0pO1xuZXhwb3J0IHtcbiAgZyBhcyBzXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2wtQ3BHbkJrbzYuanMubWFwXG4iXSwibmFtZXMiOlsiWSIsImoiXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFTO0FBQ3hDLFNBQVMsSUFBSTtBQUNYLFNBQU8sTUFBTSxJQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbEMsS0FBQyxTQUFTLEdBQUcsR0FBRztBQUNkLFFBQUUsVUFBVSxFQUFFQSxJQUFHO0FBQUEsSUFDbkIsR0FBRyxJQUFJLFNBQVMsR0FBRztBQUNqQixlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxh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
