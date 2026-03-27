import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function m(o, u) {
  for (var n = 0; n < u.length; n++) {
    const e = u[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const _ = Object.getOwnPropertyDescriptor(e, r);
          _ && Object.defineProperty(o, r, _.get ? _ : {
            enumerable: true,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, M = s.exports, f;
function Y() {
  return f || (f = 1, (function(o, u) {
    (function(n, e) {
      o.exports = e(rt());
    })(M, (function(n) {
      function e(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var r = e(n), _ = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" }, d = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }, i = { name: "bn", weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), preparse: function(t) {
        return t.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(a) {
          return d[a];
        }));
      }, postformat: function(t) {
        return t.replace(/\d/g, (function(a) {
          return _[a];
        }));
      }, ordinal: function(t) {
        return t;
      }, formats: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" } };
      return r.default.locale(i, null, true), i;
    }));
  })(s)), s.exports;
}
var p = Y();
const y = /* @__PURE__ */ by(p), L = /* @__PURE__ */ m({
  __proto__: null,
  default: y
}, [p]);
export {
  L as b
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm4tQW03c1E4Nm8tdjR4anhaQ2guanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2JuLUFtN3NRODZvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgYyB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGwgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIG0obywgdSkge1xuICBmb3IgKHZhciBuID0gMDsgbiA8IHUubGVuZ3RoOyBuKyspIHtcbiAgICBjb25zdCBlID0gdVtuXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCByIGluIGUpXG4gICAgICAgIGlmIChyICE9PSBcImRlZmF1bHRcIiAmJiAhKHIgaW4gbykpIHtcbiAgICAgICAgICBjb25zdCBfID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKTtcbiAgICAgICAgICBfICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCByLCBfLmdldCA/IF8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVtyXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHMgPSB7IGV4cG9ydHM6IHt9IH0sIE0gPSBzLmV4cG9ydHMsIGY7XG5mdW5jdGlvbiBZKCkge1xuICByZXR1cm4gZiB8fCAoZiA9IDEsIChmdW5jdGlvbihvLCB1KSB7XG4gICAgKGZ1bmN0aW9uKG4sIGUpIHtcbiAgICAgIG8uZXhwb3J0cyA9IGUobCgpKTtcbiAgICB9KShNLCAoZnVuY3Rpb24obikge1xuICAgICAgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHR5cGVvZiB0ID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gdCA/IHQgOiB7IGRlZmF1bHQ6IHQgfTtcbiAgICAgIH1cbiAgICAgIHZhciByID0gZShuKSwgXyA9IHsgMTogXCLgp6dcIiwgMjogXCLgp6hcIiwgMzogXCLgp6lcIiwgNDogXCLgp6pcIiwgNTogXCLgp6tcIiwgNjogXCLgp6xcIiwgNzogXCLgp61cIiwgODogXCLgp65cIiwgOTogXCLgp69cIiwgMDogXCLgp6ZcIiB9LCBkID0geyBcIuCnp1wiOiBcIjFcIiwgXCLgp6hcIjogXCIyXCIsIFwi4KepXCI6IFwiM1wiLCBcIuCnqlwiOiBcIjRcIiwgXCLgp6tcIjogXCI1XCIsIFwi4KesXCI6IFwiNlwiLCBcIuCnrVwiOiBcIjdcIiwgXCLgp65cIjogXCI4XCIsIFwi4KevXCI6IFwiOVwiLCBcIuCnplwiOiBcIjBcIiB9LCBpID0geyBuYW1lOiBcImJuXCIsIHdlZWtkYXlzOiBcIuCmsOCmrOCmv+CmrOCmvuCmsF/gprjgp4vgpq7gpqzgpr7gprBf4Kau4KaZ4KeN4KaX4Kay4Kas4Ka+4KawX+CmrOCngeCmp+CmrOCmvuCmsF/gpqzgp4Pgprngprjgp43gpqrgpqTgpr/gpqzgpr7gprBf4Ka24KeB4KaV4KeN4Kaw4Kas4Ka+4KawX+CmtuCmqOCmv+CmrOCmvuCmsFwiLnNwbGl0KFwiX1wiKSwgbW9udGhzOiBcIuCmnOCmvuCmqOCngeCnn+CmvuCmsOCmv1/gpqvgp4fgpqzgp43gprDgp4Hgp5/gpr7gprDgpr9f4Kau4Ka+4Kaw4KeN4KaaX+Cmj+CmquCnjeCmsOCmv+Cmsl/gpq7gp4df4Kac4KeB4KaoX+CmnOCngeCmsuCmvuCmh1/gpobgppfgprjgp43gpp9f4Ka44KeH4Kaq4KeN4Kaf4KeH4Kau4KeN4Kas4KawX+CmheCmleCnjeCmn+Cni+CmrOCmsF/gpqjgpq3gp4fgpq7gp43gpqzgprBf4Kah4Ka/4Ka44KeH4Kau4KeN4Kas4KawXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c1Nob3J0OiBcIuCmsOCmrOCmv1/gprjgp4vgpq5f4Kau4KaZ4KeN4KaX4KayX+CmrOCngeCmp1/gpqzgp4Pgprngprjgp43gpqrgpqTgpr9f4Ka24KeB4KaV4KeN4KawX+CmtuCmqOCmv1wiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwi4Kac4Ka+4Kao4KeBX+Cmq+Cnh+CmrOCnjeCmsOCngV/gpq7gpr7gprDgp43gpppf4KaP4Kaq4KeN4Kaw4Ka/4KayX+CmruCnh1/gppzgp4Hgpqhf4Kac4KeB4Kay4Ka+4KaHX+CmhuCml+CmuOCnjeCmn1/gprjgp4fgpqrgp43gpp9f4KaF4KaV4KeN4Kaf4KeLX+CmqOCmreCnh1/gpqHgpr/gprjgp4dcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzTWluOiBcIuCmsOCmrOCmv1/gprjgp4vgpq5f4Kau4KaZ4KeN4KaXX+CmrOCngeCmp1/gpqzgp4PgprngpoNf4Ka24KeB4KaV4KeN4KawX+CmtuCmqOCmv1wiLnNwbGl0KFwiX1wiKSwgcHJlcGFyc2U6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQucmVwbGFjZSgvW+Cnp+CnqOCnqeCnquCnq+CnrOCnreCnruCnr+Cnpl0vZywgKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICByZXR1cm4gZFthXTtcbiAgICAgICAgfSkpO1xuICAgICAgfSwgcG9zdGZvcm1hdDogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdC5yZXBsYWNlKC9cXGQvZywgKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICByZXR1cm4gX1thXTtcbiAgICAgICAgfSkpO1xuICAgICAgfSwgb3JkaW5hbDogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH0sIGZvcm1hdHM6IHsgTFQ6IFwiQSBoOm1tIOCmuOCmruCnn1wiLCBMVFM6IFwiQSBoOm1tOnNzIOCmuOCmruCnn1wiLCBMOiBcIkREL01NL1lZWVlcIiwgTEw6IFwiRCBNTU1NIFlZWVlcIiwgTExMOiBcIkQgTU1NTSBZWVlZLCBBIGg6bW0g4Ka44Kau4KefXCIsIExMTEw6IFwiZGRkZCwgRCBNTU1NIFlZWVksIEEgaDptbSDgprjgpq7gp59cIiB9LCByZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBcIiVzIOCmquCmsOCnh1wiLCBwYXN0OiBcIiVzIOCmhuCml+Cnh1wiLCBzOiBcIuCmleCnn+Cnh+CmlSDgprjgp4fgppXgp4fgpqjgp43gpqFcIiwgbTogXCLgpo/gppUg4Kau4Ka/4Kao4Ka/4KafXCIsIG1tOiBcIiVkIOCmruCmv+CmqOCmv+Cmn1wiLCBoOiBcIuCmj+CmlSDgppjgpqjgp43gpp/gpr5cIiwgaGg6IFwiJWQg4KaY4Kao4KeN4Kaf4Ka+XCIsIGQ6IFwi4KaP4KaVIOCmpuCmv+CmqFwiLCBkZDogXCIlZCDgpqbgpr/gpqhcIiwgTTogXCLgpo/gppUg4Kau4Ka+4Ka4XCIsIE1NOiBcIiVkIOCmruCmvuCmuFwiLCB5OiBcIuCmj+CmlSDgpqzgppvgprBcIiwgeXk6IFwiJWQg4Kas4Kab4KawXCIgfSB9O1xuICAgICAgcmV0dXJuIHIuZGVmYXVsdC5sb2NhbGUoaSwgbnVsbCwgITApLCBpO1xuICAgIH0pKTtcbiAgfSkocykpLCBzLmV4cG9ydHM7XG59XG52YXIgcCA9IFkoKTtcbmNvbnN0IHkgPSAvKiBAX19QVVJFX18gKi8gYyhwKSwgTCA9IC8qIEBfX1BVUkVfXyAqLyBtKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiB5XG59LCBbcF0pO1xuZXhwb3J0IHtcbiAgTCBhcyBiXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym4tQW03c1E4Nm8uanMubWFwXG4iXSwibmFtZXMiOlsibCIsImMiXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtB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
