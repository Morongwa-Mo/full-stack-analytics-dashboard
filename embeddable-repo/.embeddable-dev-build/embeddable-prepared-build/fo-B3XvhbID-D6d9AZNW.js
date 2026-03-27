import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function d(o, s) {
  for (var a = 0; a < s.length; a++) {
    const r = s[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const e in r)
        if (e !== "default" && !(e in o)) {
          const n = Object.getOwnPropertyDescriptor(r, e);
          n && Object.defineProperty(o, e, n.get ? n : {
            enumerable: true,
            get: () => r[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var u = { exports: {} }, l = u.exports, i;
function p() {
  return i || (i = 1, (function(o, s) {
    (function(a, r) {
      o.exports = r(rt());
    })(l, (function(a) {
      function r(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var e = r(a), n = { name: "fo", weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), ordinal: function(t) {
        return t;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minuttur", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaður", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" } };
      return e.default.locale(n, null, true), n;
    }));
  })(u)), u.exports;
}
var _ = p();
const g = /* @__PURE__ */ by(_), y = /* @__PURE__ */ d({
  __proto__: null,
  default: g
}, [_]);
export {
  y as f
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm8tQjNYdmhiSUQtRDZkOUFaTlcuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2ZvLUIzWHZoYklELmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgbSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGYgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGQobywgcykge1xuICBmb3IgKHZhciBhID0gMDsgYSA8IHMubGVuZ3RoOyBhKyspIHtcbiAgICBjb25zdCByID0gc1thXTtcbiAgICBpZiAodHlwZW9mIHIgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShyKSkge1xuICAgICAgZm9yIChjb25zdCBlIGluIHIpXG4gICAgICAgIGlmIChlICE9PSBcImRlZmF1bHRcIiAmJiAhKGUgaW4gbykpIHtcbiAgICAgICAgICBjb25zdCBuID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLCBlKTtcbiAgICAgICAgICBuICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBlLCBuLmdldCA/IG4gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gcltlXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIHUgPSB7IGV4cG9ydHM6IHt9IH0sIGwgPSB1LmV4cG9ydHMsIGk7XG5mdW5jdGlvbiBwKCkge1xuICByZXR1cm4gaSB8fCAoaSA9IDEsIChmdW5jdGlvbihvLCBzKSB7XG4gICAgKGZ1bmN0aW9uKGEsIHIpIHtcbiAgICAgIG8uZXhwb3J0cyA9IHIoZigpKTtcbiAgICB9KShsLCAoZnVuY3Rpb24oYSkge1xuICAgICAgZnVuY3Rpb24gcih0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHR5cGVvZiB0ID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gdCA/IHQgOiB7IGRlZmF1bHQ6IHQgfTtcbiAgICAgIH1cbiAgICAgIHZhciBlID0gcihhKSwgbiA9IHsgbmFtZTogXCJmb1wiLCB3ZWVrZGF5czogXCJzdW5udWRhZ3VyX23DoW5hZGFndXJfdMO9c2RhZ3VyX21pa3VkYWd1cl9ow7NzZGFndXJfZnLDrWdnamFkYWd1cl9sZXlnYXJkYWd1clwiLnNwbGl0KFwiX1wiKSwgbW9udGhzOiBcImphbnVhcl9mZWJydWFyX21hcnNfYXByw61sX21haV9qdW5pX2p1bGlfYXVndXN0X3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2Rlc2VtYmVyXCIuc3BsaXQoXCJfXCIpLCB3ZWVrU3RhcnQ6IDEsIHdlZWtkYXlzU2hvcnQ6IFwic3VuX23DoW5fdMO9c19taWtfaMOzc19mcsOtX2xleVwiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwiamFuX2ZlYl9tYXJfYXByX21haV9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZXNcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzTWluOiBcInN1X23DoV90w71fbWlfaMOzX2ZyX2xlXCIuc3BsaXQoXCJfXCIpLCBvcmRpbmFsOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfSwgZm9ybWF0czogeyBMVDogXCJISDptbVwiLCBMVFM6IFwiSEg6bW06c3NcIiwgTDogXCJERC9NTS9ZWVlZXCIsIExMOiBcIkQgTU1NTSBZWVlZXCIsIExMTDogXCJEIE1NTU0gWVlZWSBISDptbVwiLCBMTExMOiBcImRkZGQgRC4gTU1NTSwgWVlZWSBISDptbVwiIH0sIHJlbGF0aXZlVGltZTogeyBmdXR1cmU6IFwidW0gJXNcIiwgcGFzdDogXCIlcyBzw63DsGFuaVwiLCBzOiBcImbDoSBzZWt1bmRcIiwgbTogXCJlaW4gbWludXR0dXJcIiwgbW06IFwiJWQgbWludXR0aXJcIiwgaDogXCJlaW4gdMOtbWlcIiwgaGg6IFwiJWQgdMOtbWFyXCIsIGQ6IFwiZWluIGRhZ3VyXCIsIGRkOiBcIiVkIGRhZ2FyXCIsIE06IFwiZWluIG3DoW5hw7B1clwiLCBNTTogXCIlZCBtw6FuYcOwaXJcIiwgeTogXCJlaXR0IMOhclwiLCB5eTogXCIlZCDDoXJcIiB9IH07XG4gICAgICByZXR1cm4gZS5kZWZhdWx0LmxvY2FsZShuLCBudWxsLCAhMCksIG47XG4gICAgfSkpO1xuICB9KSh1KSksIHUuZXhwb3J0cztcbn1cbnZhciBfID0gcCgpO1xuY29uc3QgZyA9IC8qIEBfX1BVUkVfXyAqLyBtKF8pLCB5ID0gLyogQF9fUFVSRV9fICovIGQoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGdcbn0sIFtfXSk7XG5leHBvcnQge1xuICB5IGFzIGZcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mby1CM1h2aGJJRC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJmIiwibSJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFVLDRFQUE0RSxNQUFNLEdBQUcsR0FBRyxRQUFRLHFGQUFxRixNQUFNLEdBQUcsR0FBRyxXQUFXLEdBQUcsZUFBZSw4QkFBOEIsTUFBTSxHQUFHLEdBQUcsYUFBYSxrREFBa0QsTUFBTSxHQUFHLEdBQUcsYUFBYSx1QkFBdUIsTUFBTSxHQUFHLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDaGMsZUFBTztBQUFBLE1BQ1QsR0FBRyxTQUFTLEVBQUUsSUFBSSxTQUFTLEtBQUssWUFBWSxHQUFHLGNBQWMsSUFBSSxlQUFlLEtBQUsscUJBQXFCLE1BQU0sOEJBQThCLGNBQWMsRUFBRSxRQUFRLFNBQVMsTUFBTSxhQUFhLEdBQUcsYUFBYSxHQUFHLGdCQUFnQixJQUFJLGVBQWUsR0FBRyxZQUFZLElBQUksWUFBWSxHQUFHLGFBQWEsSUFBSSxZQUFZLEdBQUcsZUFBZSxJQUFJLGNBQWMsR0FBRyxXQUFXLElBQUksVUFBUztBQUN0WCxhQUFPLEVBQUUsUUFBUSxPQUFPLEdBQUcsTUFBTSxJQUFFLEdBQUc7QUFBQSxJQUN4QyxFQUFDO0FBQUEsRUFDSCxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ1o7QUFDQSxJQUFJLElBQUksRUFBQztBQUNKLE1BQUMsSUFBb0JDLG1CQUFFLENBQUMsR0FBRyxJQUFvQixrQkFBRTtBQUFBLEVBQ3BELFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
