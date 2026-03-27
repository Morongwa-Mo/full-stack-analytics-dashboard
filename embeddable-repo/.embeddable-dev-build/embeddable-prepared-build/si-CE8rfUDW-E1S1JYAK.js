import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function m(o, n) {
  for (var s = 0; s < n.length; s++) {
    const e = n[s];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const _ = Object.getOwnPropertyDescriptor(e, t);
          _ && Object.defineProperty(o, t, _.get ? _ : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} }, p = i.exports, a;
function l() {
  return a || (a = 1, (function(o, n) {
    (function(s, e) {
      o.exports = e(rt());
    })(p, (function(s) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(s), _ = { name: "si", weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), months: "දුරුතු_නවම්_මැදින්_බක්_වෙසක්_පොසොන්_ඇසළ_නිකිණි_බිනර_වප්_ඉල්_උඳුවප්".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), monthsShort: "දුරු_නව_මැදි_බක්_වෙස_පොසො_ඇස_නිකි_බින_වප්_ඉල්_උඳු".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "විනාඩිය", mm: "විනාඩි %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" } };
      return t.default.locale(_, null, true), _;
    }));
  })(i)), i.exports;
}
var u = l();
const c = /* @__PURE__ */ by(u), y = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [u]);
export {
  y as s
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ktQ0U4cmZVRFctRTFTMUpZQUsuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L3NpLUNFOHJmVURXLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgZiB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIG0obywgbikge1xuICBmb3IgKHZhciBzID0gMDsgcyA8IG4ubGVuZ3RoOyBzKyspIHtcbiAgICBjb25zdCBlID0gbltzXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gbykpIHtcbiAgICAgICAgICBjb25zdCBfID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBfICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCB0LCBfLmdldCA/IF8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGkgPSB7IGV4cG9ydHM6IHt9IH0sIHAgPSBpLmV4cG9ydHMsIGE7XG5mdW5jdGlvbiBsKCkge1xuICByZXR1cm4gYSB8fCAoYSA9IDEsIChmdW5jdGlvbihvLCBuKSB7XG4gICAgKGZ1bmN0aW9uKHMsIGUpIHtcbiAgICAgIG8uZXhwb3J0cyA9IGUoZCgpKTtcbiAgICB9KShwLCAoZnVuY3Rpb24ocykge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShzKSwgXyA9IHsgbmFtZTogXCJzaVwiLCB3ZWVrZGF5czogXCLgtongtrvgt5Lgtq/gt49f4LeD4Laz4LeU4Lav4LePX+C2heC2n+C3hOC2u+C3lOC3gOC3j+C2r+C3j1/gtrbgtq/gt4/gtq/gt49f4La24LeK4oCN4La74LeE4LeD4LeK4La04Lat4LeS4Lax4LeK4Lav4LePX+C3g+C3kuC2muC3lOC2u+C3j+C2r+C3j1/gt4Pgt5ngtrHgt4Pgt5Tgtrvgt4/gtq/gt49cIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCLgtq/gt5Tgtrvgt5Tgtq3gt5Rf4Lax4LeA4La44LeKX+C2uOC3kOC2r+C3kuC2seC3il/gtrbgtprgt4pf4LeA4LeZ4LeD4Laa4LeKX+C2tOC3nOC3g+C3nOC2seC3il/gtofgt4Pgt4Vf4Lax4LeS4Laa4LeS4Lar4LeSX+C2tuC3kuC2seC2u1/gt4DgtrTgt4pf4LaJ4La94LeKX+C2i+C2s+C3lOC3gOC2tOC3ilwiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNTaG9ydDogXCLgtongtrvgt5Jf4LeD4Laz4LeUX+C2heC2n1/gtrbgtq/gt49f4La24LeK4oCN4La74LeEX+C3g+C3kuC2muC3lF/gt4Pgt5ngtrFcIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcIuC2r+C3lOC2u+C3lF/gtrHgt4Bf4La44LeQ4Lav4LeSX+C2tuC2muC3il/gt4Dgt5ngt4Nf4La04Lec4LeD4LecX+C2h+C3g1/gtrHgt5Lgtprgt5Jf4La24LeS4LaxX+C3gOC2tOC3il/gtongtr3gt4pf4LaL4Laz4LeUXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c01pbjogXCLgtolf4LeDX+C2hV/gtrZf4La24LeK4oCN4La7X+C3g+C3kl/gt4Pgt5lcIi5zcGxpdChcIl9cIiksIG9yZGluYWw6IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICB9LCBmb3JtYXRzOiB7IExUOiBcImEgaDptbVwiLCBMVFM6IFwiYSBoOm1tOnNzXCIsIEw6IFwiWVlZWS9NTS9ERFwiLCBMTDogXCJZWVlZIE1NTU0gRFwiLCBMTEw6IFwiWVlZWSBNTU1NIEQsIGEgaDptbVwiLCBMTExMOiBcIllZWVkgTU1NTSBEIFvgt4Dgt5DgtrHgt5JdIGRkZGQsIGEgaDptbTpzc1wiIH0sIHJlbGF0aXZlVGltZTogeyBmdXR1cmU6IFwiJXPgtprgt5LgtrHgt4pcIiwgcGFzdDogXCIlc+C2muC2pyDgtrTgt5ngtrtcIiwgczogXCLgtq3gtq3gt4rgtrTgtrsg4Laa4LeS4LeE4LeS4La04La6XCIsIG06IFwi4LeA4LeS4Lax4LeP4Lap4LeS4La6XCIsIG1tOiBcIuC3gOC3kuC2seC3j+C2qeC3kiAlZFwiLCBoOiBcIuC2tOC3kOC2ulwiLCBoaDogXCLgtrTgt5DgtrogJWRcIiwgZDogXCLgtq/gt5LgtrHgtrpcIiwgZGQ6IFwi4Lav4LeS4LaxICVkXCIsIE06IFwi4La44LeP4LeD4La6XCIsIE1NOiBcIuC2uOC3j+C3gyAlZFwiLCB5OiBcIuC3gOC3g+C2u1wiLCB5eTogXCLgt4Dgt4PgtrsgJWRcIiB9IH07XG4gICAgICByZXR1cm4gdC5kZWZhdWx0LmxvY2FsZShfLCBudWxsLCAhMCksIF87XG4gICAgfSkpO1xuICB9KShpKSksIGkuZXhwb3J0cztcbn1cbnZhciB1ID0gbCgpO1xuY29uc3QgYyA9IC8qIEBfX1BVUkVfXyAqLyBmKHUpLCB5ID0gLyogQF9fUFVSRV9fICovIG0oe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGNcbn0sIFt1XSk7XG5leHBvcnQge1xuICB5IGFzIHNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaS1DRThyZlVEVy5qcy5tYXBcbiJdLCJuYW1lcyI6WyJkIiwiZiJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFVLGdFQUFnRSxNQUFNLEdBQUcsR0FBRyxRQUFRLHFFQUFxRSxNQUFNLEdBQUcsR0FBRyxlQUFlLGdDQUFnQyxNQUFNLEdBQUcsR0FBRyxhQUFhLG9EQUFvRCxNQUFNLEdBQUcsR0FBRyxhQUFhLHFCQUFxQixNQUFNLEdBQUcsR0FBRyxTQUFTLFNBQVMsR0FBRztBQUN4WixlQUFPO0FBQUEsTUFDVCxHQUFHLFNBQVMsRUFBRSxJQUFJLFVBQVUsS0FBSyxhQUFhLEdBQUcsY0FBYyxJQUFJLGVBQWUsS0FBSyx1QkFBdUIsTUFBTSx3Q0FBd0MsY0FBYyxFQUFFLFFBQVEsVUFBVSxNQUFNLFlBQVksR0FBRyxnQkFBZ0IsR0FBRyxXQUFXLElBQUksYUFBYSxHQUFHLE9BQU8sSUFBSSxVQUFVLEdBQUcsUUFBUSxJQUFJLFVBQVUsR0FBRyxRQUFRLElBQUksVUFBVSxHQUFHLE9BQU8sSUFBSSxXQUFVO0FBQ3BXLGFBQU8sRUFBRSxRQUFRLE9BQU8sR0FBRyxNQUFNLElBQUUsR0FBRztBQUFBLElBQ3hDLEVBQUM7QUFBQSxFQUNILEdBQUcsQ0FBQyxJQUFJLEVBQUU7QUFDWjtBQUNBLElBQUksSUFBSSxFQUFDO0FBQ0osTUFBQyxJQUFvQkMsbUJBQUUsQ0FBQyxHQUFHLElBQW9CLGtCQUFFO0FBQUEsRUFDcEQsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
