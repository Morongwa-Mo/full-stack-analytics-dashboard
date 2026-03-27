import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function m(n, a) {
  for (var _ = 0; _ < a.length; _++) {
    const e = a[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, p = s.exports, i;
function l() {
  return i || (i = 1, (function(n, a) {
    (function(_, e) {
      n.exports = e(rt());
    })(p, (function(_) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(_), o = { name: "te", weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" } };
      return t.default.locale(o, null, true), o;
    }));
  })(s)), s.exports;
}
var u = l();
const c = /* @__PURE__ */ by(u), y = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [u]);
export {
  y as t
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGUtQl9saEYwMC0tQnIyZVVrZDkuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L3RlLUJfbGhGMDAtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgZiB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIG0obiwgYSkge1xuICBmb3IgKHZhciBfID0gMDsgXyA8IGEubGVuZ3RoOyBfKyspIHtcbiAgICBjb25zdCBlID0gYVtfXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gbikpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCB0LCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHMgPSB7IGV4cG9ydHM6IHt9IH0sIHAgPSBzLmV4cG9ydHMsIGk7XG5mdW5jdGlvbiBsKCkge1xuICByZXR1cm4gaSB8fCAoaSA9IDEsIChmdW5jdGlvbihuLCBhKSB7XG4gICAgKGZ1bmN0aW9uKF8sIGUpIHtcbiAgICAgIG4uZXhwb3J0cyA9IGUoZCgpKTtcbiAgICB9KShwLCAoZnVuY3Rpb24oXykge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShfKSwgbyA9IHsgbmFtZTogXCJ0ZVwiLCB3ZWVrZGF5czogXCLgsIbgsKbgsL/gsLXgsL7gsLDgsIJf4LC44LGL4LCu4LC14LC+4LCw4LCCX+CwruCwguCwl+Cws+CwteCwvuCwsOCwgl/gsKzgsYHgsKfgsLXgsL7gsLDgsIJf4LCX4LGB4LCw4LGB4LC14LC+4LCw4LCCX+CwtuCxgeCwleCxjeCwsOCwteCwvuCwsOCwgl/gsLbgsKjgsL/gsLXgsL7gsLDgsIJcIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCLgsJzgsKjgsLXgsLDgsL9f4LCr4LC/4LCs4LGN4LCw4LC14LCw4LC/X+CwruCwvuCwsOCxjeCwmuCwv1/gsI/gsKrgsY3gsLDgsL/gsLLgsY1f4LCu4LGHX+CwnOCxguCwqOCxjV/gsJzgsYHgsLLgsYhf4LCG4LCX4LC44LGN4LCf4LGBX+CwuOCxhuCwquCxjeCwn+CxhuCwguCwrOCwsOCxjV/gsIXgsJXgsY3gsJ/gsYvgsKzgsLDgsY1f4LCo4LC14LCC4LCs4LCw4LGNX+CwoeCwv+CwuOCxhuCwguCwrOCwsOCxjVwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNTaG9ydDogXCLgsIbgsKbgsL9f4LC44LGL4LCuX+CwruCwguCwl+Cws1/gsKzgsYHgsKdf4LCX4LGB4LCw4LGBX+CwtuCxgeCwleCxjeCwsF/gsLbgsKjgsL9cIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcIuCwnOCwqC5f4LCr4LC/4LCs4LGN4LCwLl/gsK7gsL7gsLDgsY3gsJrgsL9f4LCP4LCq4LGN4LCw4LC/Ll/gsK7gsYdf4LCc4LGC4LCo4LGNX+CwnOCxgeCwsuCxiF/gsIbgsJcuX+CwuOCxhuCwquCxjS5f4LCF4LCV4LGN4LCf4LGLLl/gsKjgsLUuX+CwoeCwv+CwuOCxhi5cIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzTWluOiBcIuCwhl/gsLjgsYtf4LCu4LCCX+CwrOCxgV/gsJfgsYFf4LC24LGBX+CwtlwiLnNwbGl0KFwiX1wiKSwgb3JkaW5hbDogZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0sIGZvcm1hdHM6IHsgTFQ6IFwiQSBoOm1tXCIsIExUUzogXCJBIGg6bW06c3NcIiwgTDogXCJERC9NTS9ZWVlZXCIsIExMOiBcIkQgTU1NTSBZWVlZXCIsIExMTDogXCJEIE1NTU0gWVlZWSwgQSBoOm1tXCIsIExMTEw6IFwiZGRkZCwgRCBNTU1NIFlZWVksIEEgaDptbVwiIH0sIHJlbGF0aXZlVGltZTogeyBmdXR1cmU6IFwiJXMg4LCy4LGLXCIsIHBhc3Q6IFwiJXMg4LCV4LGN4LCw4LC/4LCk4LCCXCIsIHM6IFwi4LCV4LGK4LCo4LGN4LCo4LC/IOCwleCxjeCwt+Cwo+CwvuCwsuCxgVwiLCBtOiBcIuCwkuCwlSDgsKjgsL/gsK7gsL/gsLfgsIJcIiwgbW06IFwiJWQg4LCo4LC/4LCu4LC/4LC34LC+4LCy4LGBXCIsIGg6IFwi4LCS4LCVIOCwl+CwguCwn1wiLCBoaDogXCIlZCDgsJfgsILgsJ/gsLLgsYFcIiwgZDogXCLgsJLgsJUg4LCw4LGL4LCc4LGBXCIsIGRkOiBcIiVkIOCwsOCxi+CwnOCxgeCwsuCxgVwiLCBNOiBcIuCwkuCwlSDgsKjgsYbgsLJcIiwgTU06IFwiJWQg4LCo4LGG4LCy4LCy4LGBXCIsIHk6IFwi4LCS4LCVIOCwuOCwguCwteCwpOCxjeCwuOCwsOCwglwiLCB5eTogXCIlZCDgsLjgsILgsLXgsKTgsY3gsLjgsLDgsL7gsLLgsYFcIiB9IH07XG4gICAgICByZXR1cm4gdC5kZWZhdWx0LmxvY2FsZShvLCBudWxsLCAhMCksIG87XG4gICAgfSkpO1xuICB9KShzKSksIHMuZXhwb3J0cztcbn1cbnZhciB1ID0gbCgpO1xuY29uc3QgYyA9IC8qIEBfX1BVUkVfXyAqLyBmKHUpLCB5ID0gLyogQF9fUFVSRV9fICovIG0oe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGNcbn0sIFt1XSk7XG5leHBvcnQge1xuICB5IGFzIHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZS1CX2xoRjAwLS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJkIiwiZiJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFVLDhEQUE4RCxNQUFNLEdBQUcsR0FBRyxRQUFRLHdGQUF3RixNQUFNLEdBQUcsR0FBRyxlQUFlLGtDQUFrQyxNQUFNLEdBQUcsR0FBRyxhQUFhLG1FQUFtRSxNQUFNLEdBQUcsR0FBRyxhQUFhLHFCQUFxQixNQUFNLEdBQUcsR0FBRyxTQUFTLFNBQVMsR0FBRztBQUMxYixlQUFPO0FBQUEsTUFDVCxHQUFHLFNBQVMsRUFBRSxJQUFJLFVBQVUsS0FBSyxhQUFhLEdBQUcsY0FBYyxJQUFJLGVBQWUsS0FBSyx1QkFBdUIsTUFBTSwrQkFBK0IsY0FBYyxFQUFFLFFBQVEsU0FBUyxNQUFNLGFBQWEsR0FBRyxrQkFBa0IsR0FBRyxhQUFhLElBQUksZUFBZSxHQUFHLFVBQVUsSUFBSSxZQUFZLEdBQUcsV0FBVyxJQUFJLGFBQWEsR0FBRyxVQUFVLElBQUksWUFBWSxHQUFHLGVBQWUsSUFBSSxrQkFBaUI7QUFDL1gsYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
