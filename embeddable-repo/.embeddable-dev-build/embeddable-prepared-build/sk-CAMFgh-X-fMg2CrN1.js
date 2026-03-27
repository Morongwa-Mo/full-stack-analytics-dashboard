import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function y(m, d) {
  for (var u = 0; u < d.length; u++) {
    const a = d[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const i in a)
        if (i !== "default" && !(i in m)) {
          const o = Object.getOwnPropertyDescriptor(a, i);
          o && Object.defineProperty(m, i, o.get ? o : {
            enumerable: true,
            get: () => a[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} }, Y = _.exports, p;
function h() {
  return p || (p = 1, (function(m, d) {
    (function(u, a) {
      m.exports = a(rt());
    })(Y, (function(u) {
      function a(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var i = a(u);
      function o(e) {
        return e > 1 && e < 5 && ~~(e / 10) != 1;
      }
      function r(e, t, l, n) {
        var s = e + " ";
        switch (l) {
          case "s":
            return t || n ? "pár sekúnd" : "pár sekundami";
          case "m":
            return t ? "minúta" : n ? "minútu" : "minútou";
          case "mm":
            return t || n ? s + (o(e) ? "minúty" : "minút") : s + "minútami";
          case "h":
            return t ? "hodina" : n ? "hodinu" : "hodinou";
          case "hh":
            return t || n ? s + (o(e) ? "hodiny" : "hodín") : s + "hodinami";
          case "d":
            return t || n ? "deň" : "dňom";
          case "dd":
            return t || n ? s + (o(e) ? "dni" : "dní") : s + "dňami";
          case "M":
            return t || n ? "mesiac" : "mesiacom";
          case "MM":
            return t || n ? s + (o(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
          case "y":
            return t || n ? "rok" : "rokom";
          case "yy":
            return t || n ? s + (o(e) ? "roky" : "rokov") : s + "rokmi";
        }
      }
      var c = { name: "sk", weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), months: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) {
        return e + ".";
      }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "pred %s", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r } };
      return i.default.locale(c, null, true), c;
    }));
  })(_)), _.exports;
}
var f = h();
const j = /* @__PURE__ */ by(f), L = /* @__PURE__ */ y({
  __proto__: null,
  default: j
}, [f]);
export {
  L as s
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2stQ0FNRmdoLVgtZk1nMkNyTjEuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L3NrLUNBTUZnaC1YLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgayB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIE0gfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIHkobSwgZCkge1xuICBmb3IgKHZhciB1ID0gMDsgdSA8IGQubGVuZ3RoOyB1KyspIHtcbiAgICBjb25zdCBhID0gZFt1XTtcbiAgICBpZiAodHlwZW9mIGEgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGEpXG4gICAgICAgIGlmIChpICE9PSBcImRlZmF1bHRcIiAmJiAhKGkgaW4gbSkpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLCBpKTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtLCBpLCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gYVtpXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIF8gPSB7IGV4cG9ydHM6IHt9IH0sIFkgPSBfLmV4cG9ydHMsIHA7XG5mdW5jdGlvbiBoKCkge1xuICByZXR1cm4gcCB8fCAocCA9IDEsIChmdW5jdGlvbihtLCBkKSB7XG4gICAgKGZ1bmN0aW9uKHUsIGEpIHtcbiAgICAgIG0uZXhwb3J0cyA9IGEoTSgpKTtcbiAgICB9KShZLCAoZnVuY3Rpb24odSkge1xuICAgICAgZnVuY3Rpb24gYShlKSB7XG4gICAgICAgIHJldHVybiBlICYmIHR5cGVvZiBlID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gYSh1KTtcbiAgICAgIGZ1bmN0aW9uIG8oZSkge1xuICAgICAgICByZXR1cm4gZSA+IDEgJiYgZSA8IDUgJiYgfn4oZSAvIDEwKSAhPSAxO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcihlLCB0LCBsLCBuKSB7XG4gICAgICAgIHZhciBzID0gZSArIFwiIFwiO1xuICAgICAgICBzd2l0Y2ggKGwpIHtcbiAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgcmV0dXJuIHQgfHwgbiA/IFwicMOhciBzZWvDum5kXCIgOiBcInDDoXIgc2VrdW5kYW1pXCI7XG4gICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgIHJldHVybiB0ID8gXCJtaW7DunRhXCIgOiBuID8gXCJtaW7DunR1XCIgOiBcIm1pbsO6dG91XCI7XG4gICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICByZXR1cm4gdCB8fCBuID8gcyArIChvKGUpID8gXCJtaW7DunR5XCIgOiBcIm1pbsO6dFwiKSA6IHMgKyBcIm1pbsO6dGFtaVwiO1xuICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICByZXR1cm4gdCA/IFwiaG9kaW5hXCIgOiBuID8gXCJob2RpbnVcIiA6IFwiaG9kaW5vdVwiO1xuICAgICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgICAgcmV0dXJuIHQgfHwgbiA/IHMgKyAobyhlKSA/IFwiaG9kaW55XCIgOiBcImhvZMOtblwiKSA6IHMgKyBcImhvZGluYW1pXCI7XG4gICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIHJldHVybiB0IHx8IG4gPyBcImRlxYhcIiA6IFwiZMWIb21cIjtcbiAgICAgICAgICBjYXNlIFwiZGRcIjpcbiAgICAgICAgICAgIHJldHVybiB0IHx8IG4gPyBzICsgKG8oZSkgPyBcImRuaVwiIDogXCJkbsOtXCIpIDogcyArIFwiZMWIYW1pXCI7XG4gICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgIHJldHVybiB0IHx8IG4gPyBcIm1lc2lhY1wiIDogXCJtZXNpYWNvbVwiO1xuICAgICAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICAgICAgcmV0dXJuIHQgfHwgbiA/IHMgKyAobyhlKSA/IFwibWVzaWFjZVwiIDogXCJtZXNpYWNvdlwiKSA6IHMgKyBcIm1lc2lhY21pXCI7XG4gICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgIHJldHVybiB0IHx8IG4gPyBcInJva1wiIDogXCJyb2tvbVwiO1xuICAgICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgICAgcmV0dXJuIHQgfHwgbiA/IHMgKyAobyhlKSA/IFwicm9reVwiIDogXCJyb2tvdlwiKSA6IHMgKyBcInJva21pXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjID0geyBuYW1lOiBcInNrXCIsIHdlZWtkYXlzOiBcIm5lZGXEvmFfcG9uZGVsb2tfdXRvcm9rX3N0cmVkYV/FoXR2cnRva19waWF0b2tfc29ib3RhXCIuc3BsaXQoXCJfXCIpLCB3ZWVrZGF5c1Nob3J0OiBcIm5lX3BvX3V0X3N0X8WhdF9waV9zb1wiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNNaW46IFwibmVfcG9fdXRfc3RfxaF0X3BpX3NvXCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwiamFudcOhcl9mZWJydcOhcl9tYXJlY19hcHLDrWxfbcOhal9qw7puX2rDumxfYXVndXN0X3NlcHRlbWJlcl9va3TDs2Jlcl9ub3ZlbWJlcl9kZWNlbWJlclwiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwiamFuX2ZlYl9tYXJfYXByX23DoWpfasO6bl9qw7psX2F1Z19zZXBfb2t0X25vdl9kZWNcIi5zcGxpdChcIl9cIiksIHdlZWtTdGFydDogMSwgeWVhclN0YXJ0OiA0LCBvcmRpbmFsOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBlICsgXCIuXCI7XG4gICAgICB9LCBmb3JtYXRzOiB7IExUOiBcIkg6bW1cIiwgTFRTOiBcIkg6bW06c3NcIiwgTDogXCJERC5NTS5ZWVlZXCIsIExMOiBcIkQuIE1NTU0gWVlZWVwiLCBMTEw6IFwiRC4gTU1NTSBZWVlZIEg6bW1cIiwgTExMTDogXCJkZGRkIEQuIE1NTU0gWVlZWSBIOm1tXCIsIGw6IFwiRC4gTS4gWVlZWVwiIH0sIHJlbGF0aXZlVGltZTogeyBmdXR1cmU6IFwiemEgJXNcIiwgcGFzdDogXCJwcmVkICVzXCIsIHM6IHIsIG06IHIsIG1tOiByLCBoOiByLCBoaDogciwgZDogciwgZGQ6IHIsIE06IHIsIE1NOiByLCB5OiByLCB5eTogciB9IH07XG4gICAgICByZXR1cm4gaS5kZWZhdWx0LmxvY2FsZShjLCBudWxsLCAhMCksIGM7XG4gICAgfSkpO1xuICB9KShfKSksIF8uZXhwb3J0cztcbn1cbnZhciBmID0gaCgpO1xuY29uc3QgaiA9IC8qIEBfX1BVUkVfXyAqLyBrKGYpLCBMID0gLyogQF9fUFVSRV9fICovIHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGpcbn0sIFtmXSk7XG5leHBvcnQge1xuICBMIGFzIHNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zay1DQU1GZ2gtWC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJNIiwiayJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsUUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDN0MsaUJBQVcsS0FBSztBQUNkLFlBQUksTUFBTSxhQUFhLEVBQUUsS0FBSyxJQUFJO0FBQ2hDLGdCQUFNLElBQUksT0FBTyx5QkFBeUIsR0FBRyxDQUFDO0FBQzlDLGVBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLFlBQzNDLFlBQVk7QUFBQSxZQUNaLEtBQUssTUFBTSxFQUFFLENBQUM7QUFBQSxVQUMxQixDQUFXO0FBQUEsUUFDSDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBTyxPQUFPLE9BQU8sT0FBTyxlQUFlLEdBQUcsT0FBTyxhQUFhLEVBQUUsT0FBTyxTQUFRLENBQUUsQ0FBQztBQUN4RjtBQUNBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVM7QUFDeEMsU0FBUyxJQUFJO0FBQ1gsU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUVBLElBQUc7QUFBQSxJQUNuQixHQUFHLElBQUksU0FBUyxHQUFHO0FBQ2pCLGVBQVMsRUFBRSxHQUFHO0FBQ1osZUFBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFDO0FBQUEsTUFDdkU7QUFDQSxVQUFJLElBQUksRUFBRSxDQUFDO0FBQ1gsZUFBUyxFQUFFLEdBQUc7QUFDWixlQUFPLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksT0FBTztBQUFBLE1BQ3pDO0FBQ0EsZUFBUyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDckIsWUFBSSxJQUFJLElBQUk7QUFDWixnQkFBUSxHQUFDO0FBQUEsVUFDUCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxJQUFJLGVBQWU7QUFBQSxVQUNqQyxLQUFLO0FBQ0gsbUJBQU8sSUFBSSxXQUFXLElBQUksV0FBVztBQUFBLFVBQ3ZDLEtBQUs7QUFDSCxtQkFBTyxLQUFLLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxXQUFXLFdBQVcsSUFBSTtBQUFBLFVBQ3hELEtBQUs7QUFDSCxtQkFBTyxJQUFJLFdBQVcsSUFBSSxXQUFXO0FBQUEsVUFDdkMsS0FBSztBQUNILG1CQUFPLEtBQUssSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLFdBQVcsV0FBVyxJQUFJO0FBQUEsVUFDeEQsS0FBSztBQUNILG1CQUFPLEtBQUssSUFBSSxRQUFRO0FBQUEsVUFDMUIsS0FBSztBQUNILG1CQUFPLEtBQUssSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLFFBQVEsU0FBUyxJQUFJO0FBQUEsVUFDbkQsS0FBSztBQUNILG1CQUFPLEtBQUssSUFBSSxXQUFXO0FBQUEsVUFDN0IsS0FBSztBQUNILG1CQUFPLEtBQUssSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLFlBQVksY0FBYyxJQUFJO0FBQUEsVUFDNUQsS0FBSztBQUNILG1CQUFPLEtBQUssSUFBSSxRQUFRO0FBQUEsVUFDMUIsS0FBSztBQUNILG1CQUFPLEtBQUssSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLFNBQVMsV0FBVyxJQUFJO0FBQUEsUUFDaEU7QUFBQSxNQUNNO0FBQ0EsVUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLFVBQVUsc0RBQXNELE1BQU0sR0FBRyxHQUFHLGVBQWUsdUJBQXVCLE1BQU0sR0FBRyxHQUFHLGFBQWEsdUJBQXVCLE1BQU0sR0FBRyxHQUFHLFFBQVEsb0ZBQW9GLE1BQU0sR0FBRyxHQUFHLGFBQWEsa0RBQWtELE1BQU0sR0FBRyxHQUFHLFdBQVcsR0FBRyxXQUFXLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDdGEsZUFBTyxJQUFJO0FBQUEsTUFDYixHQUFHLFNBQVMsRUFBRSxJQUFJLFFBQVEsS0FBSyxXQUFXLEdBQUcsY0FBYyxJQUFJLGdCQUFnQixLQUFLLHFCQUFxQixNQUFNLDBCQUEwQixHQUFHLGdCQUFnQixjQUFjLEVBQUUsUUFBUSxTQUFTLE1BQU0sV0FBVyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFHO0FBQ3JSLGFBQU8sRUFBRSxRQUFRLE9BQU8sR0FBRyxNQUFNLElBQUUsR0FBRztBQUFBLElBQ3hDLEVBQUM7QUFBQSxFQUNILEdBQUcsQ0FBQyxJQUFJLEVBQUU7QUFDWjtBQUNBLElBQUksSUFBSSxFQUFDO0FBQ0osTUFBQyxJQUFvQkMsbUJBQUUsQ0FBQyxHQUFHLElBQW9CLGtCQUFFO0FBQUEsRUFDcEQsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
