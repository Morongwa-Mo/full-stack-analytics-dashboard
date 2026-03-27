import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function l(_, p) {
  for (var s = 0; s < p.length; s++) {
    const u = p[s];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const o in u)
        if (o !== "default" && !(o in _)) {
          const a = Object.getOwnPropertyDescriptor(u, o);
          a && Object.defineProperty(_, o, a.get ? a : {
            enumerable: true,
            get: () => u[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} }, h = i.exports, f;
function j() {
  return f || (f = 1, (function(_, p) {
    (function(s, u) {
      _.exports = u(rt());
    })(h, (function(s) {
      function u(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var o = u(s), a = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(e) {
        return e + ".";
      }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(e, t, n, r) {
        return "néhány másodperc" + (r || t ? "" : "e");
      }, m: function(e, t, n, r) {
        return "egy perc" + (r || t ? "" : "e");
      }, mm: function(e, t, n, r) {
        return e + " perc" + (r || t ? "" : "e");
      }, h: function(e, t, n, r) {
        return "egy " + (r || t ? "óra" : "órája");
      }, hh: function(e, t, n, r) {
        return e + " " + (r || t ? "óra" : "órája");
      }, d: function(e, t, n, r) {
        return "egy " + (r || t ? "nap" : "napja");
      }, dd: function(e, t, n, r) {
        return e + " " + (r || t ? "nap" : "napja");
      }, M: function(e, t, n, r) {
        return "egy " + (r || t ? "hónap" : "hónapja");
      }, MM: function(e, t, n, r) {
        return e + " " + (r || t ? "hónap" : "hónapja");
      }, y: function(e, t, n, r) {
        return "egy " + (r || t ? "év" : "éve");
      }, yy: function(e, t, n, r) {
        return e + " " + (r || t ? "év" : "éve");
      } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
      return o.default.locale(a, null, true), a;
    }));
  })(i)), i.exports;
}
var c = j();
const y = /* @__PURE__ */ by(c), g = /* @__PURE__ */ l({
  __proto__: null,
  default: y
}, [c]);
export {
  g as h
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHUtUW5MOGJQczMtOHp2RDdnSWsuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2h1LVFuTDhiUHMzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgbSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGwoXywgcCkge1xuICBmb3IgKHZhciBzID0gMDsgcyA8IHAubGVuZ3RoOyBzKyspIHtcbiAgICBjb25zdCB1ID0gcFtzXTtcbiAgICBpZiAodHlwZW9mIHUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheSh1KSkge1xuICAgICAgZm9yIChjb25zdCBvIGluIHUpXG4gICAgICAgIGlmIChvICE9PSBcImRlZmF1bHRcIiAmJiAhKG8gaW4gXykpIHtcbiAgICAgICAgICBjb25zdCBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih1LCBvKTtcbiAgICAgICAgICBhICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfLCBvLCBhLmdldCA/IGEgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gdVtvXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGkgPSB7IGV4cG9ydHM6IHt9IH0sIGggPSBpLmV4cG9ydHMsIGY7XG5mdW5jdGlvbiBqKCkge1xuICByZXR1cm4gZiB8fCAoZiA9IDEsIChmdW5jdGlvbihfLCBwKSB7XG4gICAgKGZ1bmN0aW9uKHMsIHUpIHtcbiAgICAgIF8uZXhwb3J0cyA9IHUoZCgpKTtcbiAgICB9KShoLCAoZnVuY3Rpb24ocykge1xuICAgICAgZnVuY3Rpb24gdShlKSB7XG4gICAgICAgIHJldHVybiBlICYmIHR5cGVvZiBlID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gdShzKSwgYSA9IHsgbmFtZTogXCJodVwiLCB3ZWVrZGF5czogXCJ2YXPDoXJuYXBfaMOpdGbFkV9rZWRkX3N6ZXJkYV9jc8O8dMO2cnTDtmtfcMOpbnRla19zem9tYmF0XCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c1Nob3J0OiBcInZhc19ow6l0X2tlZGRfc3plX2Nzw7x0X3DDqW5fc3pvXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCJ2X2hfa19zemVfY3NfcF9zem9cIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCJqYW51w6FyX2ZlYnJ1w6FyX23DoXJjaXVzX8OhcHJpbGlzX23DoWp1c19qw7puaXVzX2rDumxpdXNfYXVndXN6dHVzX3N6ZXB0ZW1iZXJfb2t0w7NiZXJfbm92ZW1iZXJfZGVjZW1iZXJcIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcImphbl9mZWJfbcOhcmNfw6Fwcl9tw6FqX2rDum5fasO6bF9hdWdfc3plcHRfb2t0X25vdl9kZWNcIi5zcGxpdChcIl9cIiksIG9yZGluYWw6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgKyBcIi5cIjtcbiAgICAgIH0sIHdlZWtTdGFydDogMSwgcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogXCIlcyBtw7psdmFcIiwgcGFzdDogXCIlc1wiLCBzOiBmdW5jdGlvbihlLCB0LCBuLCByKSB7XG4gICAgICAgIHJldHVybiBcIm7DqWjDoW55IG3DoXNvZHBlcmNcIiArIChyIHx8IHQgPyBcIlwiIDogXCJlXCIpO1xuICAgICAgfSwgbTogZnVuY3Rpb24oZSwgdCwgbiwgcikge1xuICAgICAgICByZXR1cm4gXCJlZ3kgcGVyY1wiICsgKHIgfHwgdCA/IFwiXCIgOiBcImVcIik7XG4gICAgICB9LCBtbTogZnVuY3Rpb24oZSwgdCwgbiwgcikge1xuICAgICAgICByZXR1cm4gZSArIFwiIHBlcmNcIiArIChyIHx8IHQgPyBcIlwiIDogXCJlXCIpO1xuICAgICAgfSwgaDogZnVuY3Rpb24oZSwgdCwgbiwgcikge1xuICAgICAgICByZXR1cm4gXCJlZ3kgXCIgKyAociB8fCB0ID8gXCLDs3JhXCIgOiBcIsOzcsOhamFcIik7XG4gICAgICB9LCBoaDogZnVuY3Rpb24oZSwgdCwgbiwgcikge1xuICAgICAgICByZXR1cm4gZSArIFwiIFwiICsgKHIgfHwgdCA/IFwiw7NyYVwiIDogXCLDs3LDoWphXCIpO1xuICAgICAgfSwgZDogZnVuY3Rpb24oZSwgdCwgbiwgcikge1xuICAgICAgICByZXR1cm4gXCJlZ3kgXCIgKyAociB8fCB0ID8gXCJuYXBcIiA6IFwibmFwamFcIik7XG4gICAgICB9LCBkZDogZnVuY3Rpb24oZSwgdCwgbiwgcikge1xuICAgICAgICByZXR1cm4gZSArIFwiIFwiICsgKHIgfHwgdCA/IFwibmFwXCIgOiBcIm5hcGphXCIpO1xuICAgICAgfSwgTTogZnVuY3Rpb24oZSwgdCwgbiwgcikge1xuICAgICAgICByZXR1cm4gXCJlZ3kgXCIgKyAociB8fCB0ID8gXCJow7NuYXBcIiA6IFwiaMOzbmFwamFcIik7XG4gICAgICB9LCBNTTogZnVuY3Rpb24oZSwgdCwgbiwgcikge1xuICAgICAgICByZXR1cm4gZSArIFwiIFwiICsgKHIgfHwgdCA/IFwiaMOzbmFwXCIgOiBcImjDs25hcGphXCIpO1xuICAgICAgfSwgeTogZnVuY3Rpb24oZSwgdCwgbiwgcikge1xuICAgICAgICByZXR1cm4gXCJlZ3kgXCIgKyAociB8fCB0ID8gXCLDqXZcIiA6IFwiw6l2ZVwiKTtcbiAgICAgIH0sIHl5OiBmdW5jdGlvbihlLCB0LCBuLCByKSB7XG4gICAgICAgIHJldHVybiBlICsgXCIgXCIgKyAociB8fCB0ID8gXCLDqXZcIiA6IFwiw6l2ZVwiKTtcbiAgICAgIH0gfSwgZm9ybWF0czogeyBMVDogXCJIOm1tXCIsIExUUzogXCJIOm1tOnNzXCIsIEw6IFwiWVlZWS5NTS5ERC5cIiwgTEw6IFwiWVlZWS4gTU1NTSBELlwiLCBMTEw6IFwiWVlZWS4gTU1NTSBELiBIOm1tXCIsIExMTEw6IFwiWVlZWS4gTU1NTSBELiwgZGRkZCBIOm1tXCIgfSB9O1xuICAgICAgcmV0dXJuIG8uZGVmYXVsdC5sb2NhbGUoYSwgbnVsbCwgITApLCBhO1xuICAgIH0pKTtcbiAgfSkoaSkpLCBpLmV4cG9ydHM7XG59XG52YXIgYyA9IGooKTtcbmNvbnN0IHkgPSAvKiBAX19QVVJFX18gKi8gbShjKSwgZyA9IC8qIEBfX1BVUkVfXyAqLyBsKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiB5XG59LCBbY10pO1xuZXhwb3J0IHtcbiAgZyBhcyBoXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHUtUW5MOGJQczMuanMubWFwXG4iXSwibmFtZXMiOlsiZCIsIm0iXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLFFBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQzdDLGlCQUFXLEtBQUs7QUFDZCxZQUFJLE1BQU0sYUFBYSxFQUFFLEtBQUssSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUM5QyxlQUFLLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxZQUMzQyxZQUFZO0FBQUEsWUFDWixLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFDMUIsQ0FBVztBQUFBLFFBQ0g7QUFBQSxJQUNKO0FBQUEsRUFDRjtB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
