import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function m(i, s) {
  for (var _ = 0; _ < s.length; _++) {
    const e = s[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in i)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(i, t, o.get ? o : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} }, p = n.exports, a;
function l() {
  return a || (a = 1, (function(i, s) {
    (function(_, e) {
      i.exports = e(rt());
    })(p, (function(_) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(_), o = { name: "hi", weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" } };
      return t.default.locale(o, null, true), o;
    }));
  })(n)), n.exports;
}
var u = l();
const c = /* @__PURE__ */ by(u), Y = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [u]);
export {
  Y as h
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGktRDZHbHVHbzgtQ0R2c2pnejAuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2hpLUQ2R2x1R284LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgZiB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIG0oaSwgcykge1xuICBmb3IgKHZhciBfID0gMDsgXyA8IHMubGVuZ3RoOyBfKyspIHtcbiAgICBjb25zdCBlID0gc1tfXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gaSkpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLCB0LCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIG4gPSB7IGV4cG9ydHM6IHt9IH0sIHAgPSBuLmV4cG9ydHMsIGE7XG5mdW5jdGlvbiBsKCkge1xuICByZXR1cm4gYSB8fCAoYSA9IDEsIChmdW5jdGlvbihpLCBzKSB7XG4gICAgKGZ1bmN0aW9uKF8sIGUpIHtcbiAgICAgIGkuZXhwb3J0cyA9IGUoZCgpKTtcbiAgICB9KShwLCAoZnVuY3Rpb24oXykge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShfKSwgbyA9IHsgbmFtZTogXCJoaVwiLCB3ZWVrZGF5czogXCLgpLDgpLXgpL/gpLXgpL7gpLBf4KS44KWL4KSu4KS14KS+4KSwX+CkruCkguCkl+CksuCkteCkvuCksF/gpKzgpYHgpKfgpLXgpL7gpLBf4KSX4KWB4KSw4KWC4KS14KS+4KSwX+CktuClgeCkleCljeCksOCkteCkvuCksF/gpLbgpKjgpL/gpLXgpL7gpLBcIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCLgpJzgpKjgpLXgpLDgpYBf4KSr4KS84KSw4KS14KSw4KWAX+CkruCkvuCksOCljeCkml/gpIXgpKrgpY3gpLDgpYjgpLJf4KSu4KSIX+CknOClguCkqF/gpJzgpYHgpLLgpL7gpIhf4KSF4KSX4KS44KWN4KSkX+CkuOCkv+CkpOCkruCljeCkrOCksF/gpIXgpJXgpY3gpJ/gpYLgpKzgpLBf4KSo4KS14KSu4KWN4KSs4KSwX+CkpuCkv+CkuOCkruCljeCkrOCksFwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNTaG9ydDogXCLgpLDgpLXgpL9f4KS44KWL4KSuX+CkruCkguCkl+Cksl/gpKzgpYHgpKdf4KSX4KWB4KSw4KWCX+CktuClgeCkleCljeCksF/gpLbgpKjgpL9cIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcIuCknOCkqC5f4KSr4KS84KSwLl/gpK7gpL7gpLDgpY3gpJpf4KSF4KSq4KWN4KSw4KWILl/gpK7gpIhf4KSc4KWC4KSoX+CknOClgeCksi5f4KSF4KSXLl/gpLjgpL/gpKQuX+CkheCkleCljeCkn+Clgi5f4KSo4KS1Ll/gpKbgpL/gpLguXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCLgpLBf4KS44KWLX+CkruCkgl/gpKzgpYFf4KSX4KWBX+CktuClgV/gpLZcIi5zcGxpdChcIl9cIiksIG9yZGluYWw6IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICB9LCBmb3JtYXRzOiB7IExUOiBcIkEgaDptbSDgpKzgpJzgpYdcIiwgTFRTOiBcIkEgaDptbTpzcyDgpKzgpJzgpYdcIiwgTDogXCJERC9NTS9ZWVlZXCIsIExMOiBcIkQgTU1NTSBZWVlZXCIsIExMTDogXCJEIE1NTU0gWVlZWSwgQSBoOm1tIOCkrOCknOClh1wiLCBMTExMOiBcImRkZGQsIEQgTU1NTSBZWVlZLCBBIGg6bW0g4KSs4KSc4KWHXCIgfSwgcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogXCIlcyDgpK7gpYfgpIJcIiwgcGFzdDogXCIlcyDgpKrgpLngpLLgpYdcIiwgczogXCLgpJXgpYHgpJsg4KS54KWAIOCkleCljeCkt+Cko1wiLCBtOiBcIuCkj+CklSDgpK7gpL/gpKjgpJ9cIiwgbW06IFwiJWQg4KSu4KS/4KSo4KSfXCIsIGg6IFwi4KSP4KSVIOCkmOCkguCkn+CkvlwiLCBoaDogXCIlZCDgpJjgpILgpJ/gpYdcIiwgZDogXCLgpI/gpJUg4KSm4KS/4KSoXCIsIGRkOiBcIiVkIOCkpuCkv+CkqFwiLCBNOiBcIuCkj+CklSDgpK7gpLngpYDgpKjgpYdcIiwgTU06IFwiJWQg4KSu4KS54KWA4KSo4KWHXCIsIHk6IFwi4KSP4KSVIOCkteCksOCljeCkt1wiLCB5eTogXCIlZCDgpLXgpLDgpY3gpLdcIiB9IH07XG4gICAgICByZXR1cm4gdC5kZWZhdWx0LmxvY2FsZShvLCBudWxsLCAhMCksIG87XG4gICAgfSkpO1xuICB9KShuKSksIG4uZXhwb3J0cztcbn1cbnZhciB1ID0gbCgpO1xuY29uc3QgYyA9IC8qIEBfX1BVUkVfXyAqLyBmKHUpLCBZID0gLyogQF9fUFVSRV9fICovIG0oe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGNcbn0sIFt1XSk7XG5leHBvcnQge1xuICBZIGFzIGhcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oaS1ENkdsdUdvOC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJkIiwiZiJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFVLHVEQUF1RCxNQUFNLEdBQUcsR0FBRyxRQUFRLDhFQUE4RSxNQUFNLEdBQUcsR0FBRyxlQUFlLGtDQUFrQyxNQUFNLEdBQUcsR0FBRyxhQUFhLDZEQUE2RCxNQUFNLEdBQUcsR0FBRyxhQUFhLHFCQUFxQixNQUFNLEdBQUcsR0FBRyxTQUFTLFNBQVMsR0FBRztBQUNuYSxlQUFPO0FBQUEsTUFDVCxHQUFHLFNBQVMsRUFBRSxJQUFJLGNBQWMsS0FBSyxpQkFBaUIsR0FBRyxjQUFjLElBQUksZUFBZSxLQUFLLDJCQUEyQixNQUFNLG1DQUFtQyxjQUFjLEVBQUUsUUFBUSxVQUFVLE1BQU0sV0FBVyxHQUFHLGVBQWUsR0FBRyxXQUFXLElBQUksV0FBVyxHQUFHLFdBQVcsSUFBSSxXQUFXLEdBQUcsVUFBVSxJQUFJLFVBQVUsR0FBRyxZQUFZLElBQUksWUFBWSxHQUFHLFdBQVcsSUFBSSxZQUFXO0FBQ3pYLGFBQU8sRUFBRSxRQUFRLE9BQU8sR0FBRyxNQUFNLElBQUUsR0FBRztBQUFBLElBQ3hDLEVBQUM7QUFBQSxFQUNILEdBQUcsQ0FBQyxJQUFJLEVBQUU7QUFDWjtBQUNBLElBQUksSUFBSSxFQUFDO0FBQ0osTUFBQyxJQUFvQkMsbUJBQUUsQ0FBQyxHQUFHLElBQW9CLGtCQUFFO0FBQUEsRUFDcEQsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
