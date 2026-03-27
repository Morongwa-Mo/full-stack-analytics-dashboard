import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function Y(_, d) {
  for (var i = 0; i < d.length; i++) {
    const o = d[i];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const a in o)
        if (a !== "default" && !(a in _)) {
          const u = Object.getOwnPropertyDescriptor(o, a);
          u && Object.defineProperty(_, a, u.get ? u : {
            enumerable: true,
            get: () => o[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var c = { exports: {} }, h = c.exports, p;
function v() {
  return p || (p = 1, (function(_, d) {
    (function(i, o) {
      _.exports = o(rt());
    })(h, (function(i) {
      function o(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var a = o(i);
      function u(e) {
        return e > 1 && e < 5 && ~~(e / 10) != 1;
      }
      function t(e, r, f, n) {
        var s = e + " ";
        switch (f) {
          case "s":
            return r || n ? "pár sekund" : "pár sekundami";
          case "m":
            return r ? "minuta" : n ? "minutu" : "minutou";
          case "mm":
            return r || n ? s + (u(e) ? "minuty" : "minut") : s + "minutami";
          case "h":
            return r ? "hodina" : n ? "hodinu" : "hodinou";
          case "hh":
            return r || n ? s + (u(e) ? "hodiny" : "hodin") : s + "hodinami";
          case "d":
            return r || n ? "den" : "dnem";
          case "dd":
            return r || n ? s + (u(e) ? "dny" : "dní") : s + "dny";
          case "M":
            return r || n ? "měsíc" : "měsícem";
          case "MM":
            return r || n ? s + (u(e) ? "měsíce" : "měsíců") : s + "měsíci";
          case "y":
            return r || n ? "rok" : "rokem";
          case "yy":
            return r || n ? s + (u(e) ? "roky" : "let") : s + "lety";
        }
      }
      var m = { name: "cs", weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), months: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) {
        return e + ".";
      }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "před %s", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t } };
      return a.default.locale(m, null, true), m;
    }));
  })(c)), c.exports;
}
var l = v();
const k = /* @__PURE__ */ by(l), g = /* @__PURE__ */ Y({
  __proto__: null,
  default: k
}, [l]);
export {
  g as c
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3MtRFNzZHdZOXQtQlc5bWxfVjcuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2NzLURTc2R3WTl0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgeSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIE0gfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIFkoXywgZCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvID0gZFtpXTtcbiAgICBpZiAodHlwZW9mIG8gIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShvKSkge1xuICAgICAgZm9yIChjb25zdCBhIGluIG8pXG4gICAgICAgIGlmIChhICE9PSBcImRlZmF1bHRcIiAmJiAhKGEgaW4gXykpIHtcbiAgICAgICAgICBjb25zdCB1ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLCBhKTtcbiAgICAgICAgICB1ICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfLCBhLCB1LmdldCA/IHUgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gb1thXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGMgPSB7IGV4cG9ydHM6IHt9IH0sIGggPSBjLmV4cG9ydHMsIHA7XG5mdW5jdGlvbiB2KCkge1xuICByZXR1cm4gcCB8fCAocCA9IDEsIChmdW5jdGlvbihfLCBkKSB7XG4gICAgKGZ1bmN0aW9uKGksIG8pIHtcbiAgICAgIF8uZXhwb3J0cyA9IG8oTSgpKTtcbiAgICB9KShoLCAoZnVuY3Rpb24oaSkge1xuICAgICAgZnVuY3Rpb24gbyhlKSB7XG4gICAgICAgIHJldHVybiBlICYmIHR5cGVvZiBlID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gbyhpKTtcbiAgICAgIGZ1bmN0aW9uIHUoZSkge1xuICAgICAgICByZXR1cm4gZSA+IDEgJiYgZSA8IDUgJiYgfn4oZSAvIDEwKSAhPSAxO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gdChlLCByLCBmLCBuKSB7XG4gICAgICAgIHZhciBzID0gZSArIFwiIFwiO1xuICAgICAgICBzd2l0Y2ggKGYpIHtcbiAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgcmV0dXJuIHIgfHwgbiA/IFwicMOhciBzZWt1bmRcIiA6IFwicMOhciBzZWt1bmRhbWlcIjtcbiAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgcmV0dXJuIHIgPyBcIm1pbnV0YVwiIDogbiA/IFwibWludXR1XCIgOiBcIm1pbnV0b3VcIjtcbiAgICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICAgIHJldHVybiByIHx8IG4gPyBzICsgKHUoZSkgPyBcIm1pbnV0eVwiIDogXCJtaW51dFwiKSA6IHMgKyBcIm1pbnV0YW1pXCI7XG4gICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgIHJldHVybiByID8gXCJob2RpbmFcIiA6IG4gPyBcImhvZGludVwiIDogXCJob2Rpbm91XCI7XG4gICAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgICByZXR1cm4gciB8fCBuID8gcyArICh1KGUpID8gXCJob2RpbnlcIiA6IFwiaG9kaW5cIikgOiBzICsgXCJob2RpbmFtaVwiO1xuICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICByZXR1cm4gciB8fCBuID8gXCJkZW5cIiA6IFwiZG5lbVwiO1xuICAgICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgICAgcmV0dXJuIHIgfHwgbiA/IHMgKyAodShlKSA/IFwiZG55XCIgOiBcImRuw61cIikgOiBzICsgXCJkbnlcIjtcbiAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgcmV0dXJuIHIgfHwgbiA/IFwibcSbc8OtY1wiIDogXCJtxJtzw61jZW1cIjtcbiAgICAgICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgICAgIHJldHVybiByIHx8IG4gPyBzICsgKHUoZSkgPyBcIm3Em3PDrWNlXCIgOiBcIm3Em3PDrWPFr1wiKSA6IHMgKyBcIm3Em3PDrWNpXCI7XG4gICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgIHJldHVybiByIHx8IG4gPyBcInJva1wiIDogXCJyb2tlbVwiO1xuICAgICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgICAgcmV0dXJuIHIgfHwgbiA/IHMgKyAodShlKSA/IFwicm9reVwiIDogXCJsZXRcIikgOiBzICsgXCJsZXR5XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBtID0geyBuYW1lOiBcImNzXCIsIHdlZWtkYXlzOiBcIm5lZMSbbGVfcG9uZMSbbMOtX8O6dGVyw71fc3TFmWVkYV/EjXR2cnRla19ww6F0ZWtfc29ib3RhXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c1Nob3J0OiBcIm5lX3BvX8O6dF9zdF/EjXRfcMOhX3NvXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCJuZV9wb1/DunRfc3RfxI10X3DDoV9zb1wiLnNwbGl0KFwiX1wiKSwgbW9udGhzOiBcImxlZGVuX8O6bm9yX2LFmWV6ZW5fZHViZW5fa3bEm3Rlbl/EjWVydmVuX8SNZXJ2ZW5lY19zcnBlbl96w6HFmcOtX8WZw61qZW5fbGlzdG9wYWRfcHJvc2luZWNcIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcImxlZF/Dum5vX2LFmWVfZHViX2t2xJtfxI12bl/EjXZjX3NycF96w6HFmV/FmcOtal9saXNfcHJvXCIuc3BsaXQoXCJfXCIpLCB3ZWVrU3RhcnQ6IDEsIHllYXJTdGFydDogNCwgb3JkaW5hbDogZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gZSArIFwiLlwiO1xuICAgICAgfSwgZm9ybWF0czogeyBMVDogXCJIOm1tXCIsIExUUzogXCJIOm1tOnNzXCIsIEw6IFwiREQuTU0uWVlZWVwiLCBMTDogXCJELiBNTU1NIFlZWVlcIiwgTExMOiBcIkQuIE1NTU0gWVlZWSBIOm1tXCIsIExMTEw6IFwiZGRkZCBELiBNTU1NIFlZWVkgSDptbVwiLCBsOiBcIkQuIE0uIFlZWVlcIiB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcInphICVzXCIsIHBhc3Q6IFwicMWZZWQgJXNcIiwgczogdCwgbTogdCwgbW06IHQsIGg6IHQsIGhoOiB0LCBkOiB0LCBkZDogdCwgTTogdCwgTU06IHQsIHk6IHQsIHl5OiB0IH0gfTtcbiAgICAgIHJldHVybiBhLmRlZmF1bHQubG9jYWxlKG0sIG51bGwsICEwKSwgbTtcbiAgICB9KSk7XG4gIH0pKGMpKSwgYy5leHBvcnRzO1xufVxudmFyIGwgPSB2KCk7XG5jb25zdCBrID0gLyogQF9fUFVSRV9fICovIHkobCksIGcgPSAvKiBAX19QVVJFX18gKi8gWSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZGVmYXVsdDoga1xufSwgW2xdKTtcbmV4cG9ydCB7XG4gIGcgYXMgY1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzLURTc2R3WTl0LmpzLm1hcFxuIl0sIm5hbWVzIjpbIk0iLCJ5Il0sIm1hcHBpbmdzIjoiOztBQUVBLFNBQVMsRUFBRSxHQUFHLEdBQUc7QUFDZixXQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxLQUFLO0FBQ2pDLFVBQU0sSUFBSSxFQUFFLENBQUM7QUFDYixRQUFJLE9BQU8sS0FBSyxZQUFZLENBQUMsTUFBTSxRQUFRLENBQUMsR0FBRztBQUM3QyxpQkFBVyxLQUFLO0FBQ2QsWUFBSSxNQUFNLGFBQWEsRUFBRSxLQUFLLElBQUk7QUFDaEMsZ0JBQU0sSUFBSSxPQUFPLHlCQUF5QixHQUFHLENBQUM7QUFDOUMsZUFBSyxPQUFPLGVBQWUsR0FBRyxHQUFHLEVBQUUsTUFBTSxJQUFJO0FBQUEsWUFDM0MsWUFBWTtBQUFBLFlBQ1osS0FBSyxNQUFNLEVBQUUsQ0FBQztBQUFBLFVBQzFCLENBQVc7QUFBQSxRQUNIO0FBQUEsSUFDSjtBQUFBLEVBQ0Y7QUFDQSxTQUFPLE9BQU8sT0FBTyxPQUFPLGVBQWUsR0FBRyxPQUFPLGFBQWEsRUFBRSxPQUFPLFNBQVEsQ0FBRSxDQUFDO0FBQ3hGO0FBQ0EsSUFBSSxJQUFJLEVBQUUsU0FBUyxDQUFBLEVBQUUsR0FBSSxJQUFJLEVBQUUsU0FBUztBQUN4QyxTQUFTLElBQUk7QUFDWCxTQUFPLE1BQU0sSUFBSSxJQUFJLFNBQVMsR0FBRyxHQUFHO0FBQ2xDLEtBQUMsU0FBUyxHQUFHLEdBQUc7QUFDZCxRQUFFLFVBQVUsRUFBRUEsSUFBRztBQUFBLElBQ25CLEdBQUcsSUFBSSxTQUFTLEdBQUc7QUFDakIsZUFBUyxFQUFFLEdBQUc7QUFDWixlQUFPLEtBQUssT0FBTyxLQUFLLFlBQVksYUFBYSxJQUFJLElBQUksRUFBRSxTQUFTLEVBQUM7QUFBQSxNQUN2RTtBQUNBLFVBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxlQUFTLEVBQUUsR0FBRztBQUNaLGVBQU8sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxPQUFPO0FBQUEsTUFDekM7QUFDQSxlQUFTLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNyQixZQUFJLElBQUksSUFBSTtBQUNaLGdCQUFRLEdBQUM7QUFBQSxVQUNQLEtBQUs7QUFDSCxtQkFBTyxLQUFLLElBQUksZUFBZTtBQUFBLFVBQ2pDLEtBQUs7QUFDSCxtQkFBTyxJQUFJLFdBQVcsSUFBSSxXQUFXO0FBQUEsVUFDdkMsS0FBSztBQUNILG1CQUFPLEtBQUssSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLFdBQVcsV0FBVyxJQUFJO0FBQUEsVUFDeEQsS0FBSztBQUNILG1CQUFPLElBQUksV0FBVyxJQUFJLFdBQVc7QUFBQSxVQUN2QyxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUksV0FBVyxXQUFXLElBQUk7QUFBQSxVQUN4RCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxJQUFJLFFBQVE7QUFBQSxVQUMxQixLQUFLO0FBQ0gsbUJBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUksUUFBUSxTQUFTLElBQUk7QUFBQSxVQUNuRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxJQUFJLFVBQVU7QUFBQSxVQUM1QixLQUFLO0FBQ0gsbUJBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUksV0FBVyxZQUFZLElBQUk7QUFBQSxVQUN6RCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxJQUFJLFFBQVE7QUFBQSxVQUMxQixLQUFLO0FBQ0gsbUJBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUksU0FBUyxTQUFTLElBQUk7QUFBQSxRQUM5RDtBQUFBLE1BQ007QUFDQSxVQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sVUFBVSxtREFBbUQsTUFBTSxHQUFHLEdBQUcsZUFBZSx1QkFBdUIsTUFBTSxHQUFHLEdBQUcsYUFBYSx1QkFBdUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxvRkFBb0YsTUFBTSxHQUFHLEdBQUcsYUFBYSxrREFBa0QsTUFBTSxHQUFHLEdBQUcsV0FBVyxHQUFHLFdBQVcsR0FBRyxTQUFTLFNBQVMsR0FBRztBQUNuYSxlQUFPLElBQUk7QUFBQSxNQUNiLEdBQUcsU0FBUyxFQUFFLElBQUksUUFBUSxLQUFLLFdBQVcsR0FBRyxjQUFjLElBQUksZ0JBQWdCLEtBQUsscUJBQXFCLE1BQU0sMEJBQTBCLEdBQUcsZ0JBQWdCLGNBQWMsRUFBRSxRQUFRLFNBQVMsTUFBTSxXQUFXLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUc7QUFDclIsYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
