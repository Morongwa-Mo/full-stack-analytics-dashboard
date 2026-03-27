import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function M(n, _) {
  for (var a = 0; a < _.length; a++) {
    const e = _[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(n, r, o.get ? o : {
            enumerable: true,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, v = s.exports, d;
function h() {
  return d || (d = 1, (function(n, _) {
    (function(a, e) {
      n.exports = e(rt());
    })(v, (function(a) {
      function e(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var r = e(a), o = "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), u = "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), j = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/, i = function(t, m) {
        return j.test(m) ? o[t.month()] : u[t.month()];
      };
      i.s = u, i.f = o;
      var p = { name: "hr", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: i, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "za %s", past: "prije %s", s: "sekunda", m: "minuta", mm: "%d minuta", h: "sat", hh: "%d sati", d: "dan", dd: "%d dana", M: "mjesec", MM: "%d mjeseci", y: "godina", yy: "%d godine" }, ordinal: function(t) {
        return t + ".";
      } };
      return r.default.locale(p, null, true), p;
    }));
  })(s)), s.exports;
}
var l = h();
const Y = /* @__PURE__ */ by(l), g = /* @__PURE__ */ M({
  __proto__: null,
  default: Y
}, [l]);
export {
  g as h
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHItQ3hxS1VhUnotQ1dBNFVIYnMuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2hyLUN4cUtVYVJ6LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgZiB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGMgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIE0obiwgXykge1xuICBmb3IgKHZhciBhID0gMDsgYSA8IF8ubGVuZ3RoOyBhKyspIHtcbiAgICBjb25zdCBlID0gX1thXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCByIGluIGUpXG4gICAgICAgIGlmIChyICE9PSBcImRlZmF1bHRcIiAmJiAhKHIgaW4gbikpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCByLCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVtyXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHMgPSB7IGV4cG9ydHM6IHt9IH0sIHYgPSBzLmV4cG9ydHMsIGQ7XG5mdW5jdGlvbiBoKCkge1xuICByZXR1cm4gZCB8fCAoZCA9IDEsIChmdW5jdGlvbihuLCBfKSB7XG4gICAgKGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgIG4uZXhwb3J0cyA9IGUoYygpKTtcbiAgICB9KSh2LCAoZnVuY3Rpb24oYSkge1xuICAgICAgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHR5cGVvZiB0ID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gdCA/IHQgOiB7IGRlZmF1bHQ6IHQgfTtcbiAgICAgIH1cbiAgICAgIHZhciByID0gZShhKSwgbyA9IFwic2lqZcSNbmphX3ZlbGphxI1lX2/FvnVqa2FfdHJhdm5qYV9zdmlibmphX2xpcG5qYV9zcnBuamFfa29sb3ZvemFfcnVqbmFfbGlzdG9wYWRhX3N0dWRlbm9nYV9wcm9zaW5jYVwiLnNwbGl0KFwiX1wiKSwgdSA9IFwic2lqZcSNYW5qX3ZlbGphxI1hX2/FvnVqYWtfdHJhdmFual9zdmliYW5qX2xpcGFual9zcnBhbmpfa29sb3Zvel9ydWphbl9saXN0b3BhZF9zdHVkZW5pX3Byb3NpbmFjXCIuc3BsaXQoXCJfXCIpLCBqID0gL0Rbb0RdPyhcXFtbXltcXF1dKlxcXXxcXHMpK01NTU0/LywgaSA9IGZ1bmN0aW9uKHQsIG0pIHtcbiAgICAgICAgcmV0dXJuIGoudGVzdChtKSA/IG9bdC5tb250aCgpXSA6IHVbdC5tb250aCgpXTtcbiAgICAgIH07XG4gICAgICBpLnMgPSB1LCBpLmYgPSBvO1xuICAgICAgdmFyIHAgPSB7IG5hbWU6IFwiaHJcIiwgd2Vla2RheXM6IFwibmVkamVsamFfcG9uZWRqZWxqYWtfdXRvcmFrX3NyaWplZGFfxI1ldHZydGFrX3BldGFrX3N1Ym90YVwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNTaG9ydDogXCJuZWQuX3Bvbi5fdXRvLl9zcmkuX8SNZXQuX3BldC5fc3ViLlwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNNaW46IFwibmVfcG9fdXRfc3JfxI1lX3BlX3N1XCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IGksIG1vbnRoc1Nob3J0OiBcInNpai5fdmVsai5fb8W+dS5fdHJhLl9zdmkuX2xpcC5fc3JwLl9rb2wuX3J1ai5fbGlzLl9zdHUuX3Byby5cIi5zcGxpdChcIl9cIiksIHdlZWtTdGFydDogMSwgZm9ybWF0czogeyBMVDogXCJIOm1tXCIsIExUUzogXCJIOm1tOnNzXCIsIEw6IFwiREQuTU0uWVlZWVwiLCBMTDogXCJELiBNTU1NIFlZWVlcIiwgTExMOiBcIkQuIE1NTU0gWVlZWSBIOm1tXCIsIExMTEw6IFwiZGRkZCwgRC4gTU1NTSBZWVlZIEg6bW1cIiB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcInphICVzXCIsIHBhc3Q6IFwicHJpamUgJXNcIiwgczogXCJzZWt1bmRhXCIsIG06IFwibWludXRhXCIsIG1tOiBcIiVkIG1pbnV0YVwiLCBoOiBcInNhdFwiLCBoaDogXCIlZCBzYXRpXCIsIGQ6IFwiZGFuXCIsIGRkOiBcIiVkIGRhbmFcIiwgTTogXCJtamVzZWNcIiwgTU06IFwiJWQgbWplc2VjaVwiLCB5OiBcImdvZGluYVwiLCB5eTogXCIlZCBnb2RpbmVcIiB9LCBvcmRpbmFsOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0ICsgXCIuXCI7XG4gICAgICB9IH07XG4gICAgICByZXR1cm4gci5kZWZhdWx0LmxvY2FsZShwLCBudWxsLCAhMCksIHA7XG4gICAgfSkpO1xuICB9KShzKSksIHMuZXhwb3J0cztcbn1cbnZhciBsID0gaCgpO1xuY29uc3QgWSA9IC8qIEBfX1BVUkVfXyAqLyBmKGwpLCBnID0gLyogQF9fUFVSRV9fICovIE0oe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IFlcbn0sIFtsXSk7XG5leHBvcnQge1xuICBnIGFzIGhcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oci1DeHFLVWFSei5qcy5tYXBcbiJdLCJuYW1lcyI6WyJjIiwiZiJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxV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
