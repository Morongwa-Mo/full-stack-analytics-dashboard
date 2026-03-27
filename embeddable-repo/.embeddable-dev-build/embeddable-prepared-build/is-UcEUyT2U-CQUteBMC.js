import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function L(a, o) {
  for (var u = 0; u < o.length; u++) {
    const t = o[u];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const n in t)
        if (n !== "default" && !(n in a)) {
          const s = Object.getOwnPropertyDescriptor(t, n);
          s && Object.defineProperty(a, n, s.get ? s : {
            enumerable: true,
            get: () => t[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} }, x = i.exports, l;
function D() {
  return l || (l = 1, (function(a, o) {
    (function(u, t) {
      a.exports = t(rt());
    })(x, (function(u) {
      function t(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var n = t(u), s = { s: ["nokkrar sekúndur", "nokkrar sekúndur", "nokkrum sekúndum"], m: ["mínúta", "mínútu", "mínútu"], mm: ["mínútur", "mínútur", "mínútum"], h: ["klukkustund", "klukkustund", "klukkustund"], hh: ["klukkustundir", "klukkustundir", "klukkustundum"], d: ["dagur", "dag", "degi"], dd: ["dagar", "daga", "dögum"], M: ["mánuður", "mánuð", "mánuði"], MM: ["mánuðir", "mánuði", "mánuðum"], y: ["ár", "ár", "ári"], yy: ["ár", "ár", "árum"] };
      function r(e, k, p, g) {
        var M = (function(m, c, y, Y) {
          var h = Y ? 0 : y ? 1 : 2, j = m.length === 2 && c % 10 == 1 ? m[0] : m, _ = s[j][h];
          return m.length === 1 ? _ : "%d " + _;
        })(p, e, g, k);
        return M.replace("%d", e);
      }
      var d = { name: "is", weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), ordinal: function(e) {
        return e;
      }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r } };
      return n.default.locale(d, null, true), d;
    }));
  })(i)), i.exports;
}
var f = D();
const S = /* @__PURE__ */ by(f), H = /* @__PURE__ */ L({
  __proto__: null,
  default: S
}, [f]);
export {
  H as i
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtVWNFVXlUMlUtQ1FVdGVCTUMuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2lzLVVjRVV5VDJVLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgdiB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGIgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIEwoYSwgbykge1xuICBmb3IgKHZhciB1ID0gMDsgdSA8IG8ubGVuZ3RoOyB1KyspIHtcbiAgICBjb25zdCB0ID0gb1t1XTtcbiAgICBpZiAodHlwZW9mIHQgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheSh0KSkge1xuICAgICAgZm9yIChjb25zdCBuIGluIHQpXG4gICAgICAgIGlmIChuICE9PSBcImRlZmF1bHRcIiAmJiAhKG4gaW4gYSkpIHtcbiAgICAgICAgICBjb25zdCBzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCBuKTtcbiAgICAgICAgICBzICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBuLCBzLmdldCA/IHMgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gdFtuXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGkgPSB7IGV4cG9ydHM6IHt9IH0sIHggPSBpLmV4cG9ydHMsIGw7XG5mdW5jdGlvbiBEKCkge1xuICByZXR1cm4gbCB8fCAobCA9IDEsIChmdW5jdGlvbihhLCBvKSB7XG4gICAgKGZ1bmN0aW9uKHUsIHQpIHtcbiAgICAgIGEuZXhwb3J0cyA9IHQoYigpKTtcbiAgICB9KSh4LCAoZnVuY3Rpb24odSkge1xuICAgICAgZnVuY3Rpb24gdChlKSB7XG4gICAgICAgIHJldHVybiBlICYmIHR5cGVvZiBlID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gdCh1KSwgcyA9IHsgczogW1wibm9ra3JhciBzZWvDum5kdXJcIiwgXCJub2trcmFyIHNla8O6bmR1clwiLCBcIm5va2tydW0gc2Vrw7puZHVtXCJdLCBtOiBbXCJtw61uw7p0YVwiLCBcIm3DrW7DunR1XCIsIFwibcOtbsO6dHVcIl0sIG1tOiBbXCJtw61uw7p0dXJcIiwgXCJtw61uw7p0dXJcIiwgXCJtw61uw7p0dW1cIl0sIGg6IFtcImtsdWtrdXN0dW5kXCIsIFwia2x1a2t1c3R1bmRcIiwgXCJrbHVra3VzdHVuZFwiXSwgaGg6IFtcImtsdWtrdXN0dW5kaXJcIiwgXCJrbHVra3VzdHVuZGlyXCIsIFwia2x1a2t1c3R1bmR1bVwiXSwgZDogW1wiZGFndXJcIiwgXCJkYWdcIiwgXCJkZWdpXCJdLCBkZDogW1wiZGFnYXJcIiwgXCJkYWdhXCIsIFwiZMO2Z3VtXCJdLCBNOiBbXCJtw6FudcOwdXJcIiwgXCJtw6FudcOwXCIsIFwibcOhbnXDsGlcIl0sIE1NOiBbXCJtw6FudcOwaXJcIiwgXCJtw6FudcOwaVwiLCBcIm3DoW51w7B1bVwiXSwgeTogW1wiw6FyXCIsIFwiw6FyXCIsIFwiw6FyaVwiXSwgeXk6IFtcIsOhclwiLCBcIsOhclwiLCBcIsOhcnVtXCJdIH07XG4gICAgICBmdW5jdGlvbiByKGUsIGssIHAsIGcpIHtcbiAgICAgICAgdmFyIE0gPSAoZnVuY3Rpb24obSwgYywgeSwgWSkge1xuICAgICAgICAgIHZhciBoID0gWSA/IDAgOiB5ID8gMSA6IDIsIGogPSBtLmxlbmd0aCA9PT0gMiAmJiBjICUgMTAgPT0gMSA/IG1bMF0gOiBtLCBfID0gc1tqXVtoXTtcbiAgICAgICAgICByZXR1cm4gbS5sZW5ndGggPT09IDEgPyBfIDogXCIlZCBcIiArIF87XG4gICAgICAgIH0pKHAsIGUsIGcsIGspO1xuICAgICAgICByZXR1cm4gTS5yZXBsYWNlKFwiJWRcIiwgZSk7XG4gICAgICB9XG4gICAgICB2YXIgZCA9IHsgbmFtZTogXCJpc1wiLCB3ZWVrZGF5czogXCJzdW5udWRhZ3VyX23DoW51ZGFndXJfw75yacOwanVkYWd1cl9tacOwdmlrdWRhZ3VyX2ZpbW10dWRhZ3VyX2bDtnN0dWRhZ3VyX2xhdWdhcmRhZ3VyXCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwiamFuw7phcl9mZWJyw7phcl9tYXJzX2FwcsOtbF9tYcOtX2rDum7DrV9qw7psw61fw6Fnw7pzdF9zZXB0ZW1iZXJfb2t0w7NiZXJfbsOzdmVtYmVyX2Rlc2VtYmVyXCIuc3BsaXQoXCJfXCIpLCB3ZWVrU3RhcnQ6IDEsIHdlZWtkYXlzU2hvcnQ6IFwic3VuX23DoW5fw75yaV9tacOwX2ZpbV9mw7ZzX2xhdVwiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwiamFuX2ZlYl9tYXJfYXByX21hw61fasO6bl9qw7psX8OhZ8O6X3NlcF9va3RfbsOzdl9kZXNcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzTWluOiBcIlN1X03DoV/DnnJfTWlfRmlfRsO2X0xhXCIuc3BsaXQoXCJfXCIpLCBvcmRpbmFsOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfSwgZm9ybWF0czogeyBMVDogXCJIOm1tXCIsIExUUzogXCJIOm1tOnNzXCIsIEw6IFwiREQuTU0uWVlZWVwiLCBMTDogXCJELiBNTU1NIFlZWVlcIiwgTExMOiBcIkQuIE1NTU0gWVlZWSBba2wuXSBIOm1tXCIsIExMTEw6IFwiZGRkZCwgRC4gTU1NTSBZWVlZIFtrbC5dIEg6bW1cIiB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcImVmdGlyICVzXCIsIHBhc3Q6IFwiZnlyaXIgJXMgc8Otw7BhblwiLCBzOiByLCBtOiByLCBtbTogciwgaDogciwgaGg6IHIsIGQ6IHIsIGRkOiByLCBNOiByLCBNTTogciwgeTogciwgeXk6IHIgfSB9O1xuICAgICAgcmV0dXJuIG4uZGVmYXVsdC5sb2NhbGUoZCwgbnVsbCwgITApLCBkO1xuICAgIH0pKTtcbiAgfSkoaSkpLCBpLmV4cG9ydHM7XG59XG52YXIgZiA9IEQoKTtcbmNvbnN0IFMgPSAvKiBAX19QVVJFX18gKi8gdihmKSwgSCA9IC8qIEBfX1BVUkVfXyAqLyBMKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBTXG59LCBbZl0pO1xuZXhwb3J0IHtcbiAgSCBhcyBpXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtVWNFVXlUMlUuanMubWFwXG4iXSwibmFtZXMiOlsiYiIsInYiXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFNBQU8sT0FBTyxPQUFPLE9BQU8sZUFBZSxHQUFHLE9BQU8sYUFBYSxFQUFFLE9BQU8sU0FBUSxDQUFFLENBQUM7QUFDeEY7QUFDQSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLElBQUksRUFBRSxTQUFT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
