import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function f(s, u) {
  for (var o = 0; o < u.length; o++) {
    const e = u[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(s, t, a.get ? a : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} }, p = n.exports, _;
function l() {
  return _ || (_ = 1, (function(s, u) {
    (function(o, e) {
      s.exports = e(rt());
    })(p, (function(o) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(o), a = { name: "pt", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(r) {
        return r + "º";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "alguns segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
      return t.default.locale(a, null, true), a;
    }));
  })(n)), n.exports;
}
var i = l();
const c = /* @__PURE__ */ by(i), y = /* @__PURE__ */ f({
  __proto__: null,
  default: c
}, [i]);
export {
  y as p
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtenROdUhadk4tRF9EUy1teWUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L3B0LXp0TnVIWnZOLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgbSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIGQgfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIGYocywgdSkge1xuICBmb3IgKHZhciBvID0gMDsgbyA8IHUubGVuZ3RoOyBvKyspIHtcbiAgICBjb25zdCBlID0gdVtvXTtcbiAgICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIGUpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gcykpIHtcbiAgICAgICAgICBjb25zdCBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KTtcbiAgICAgICAgICBhICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCB0LCBhLmdldCA/IGEgOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gZVt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIG4gPSB7IGV4cG9ydHM6IHt9IH0sIHAgPSBuLmV4cG9ydHMsIF87XG5mdW5jdGlvbiBsKCkge1xuICByZXR1cm4gXyB8fCAoXyA9IDEsIChmdW5jdGlvbihzLCB1KSB7XG4gICAgKGZ1bmN0aW9uKG8sIGUpIHtcbiAgICAgIHMuZXhwb3J0cyA9IGUoZCgpKTtcbiAgICB9KShwLCAoZnVuY3Rpb24obykge1xuICAgICAgZnVuY3Rpb24gZShyKSB7XG4gICAgICAgIHJldHVybiByICYmIHR5cGVvZiByID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gciA/IHIgOiB7IGRlZmF1bHQ6IHIgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gZShvKSwgYSA9IHsgbmFtZTogXCJwdFwiLCB3ZWVrZGF5czogXCJkb21pbmdvX3NlZ3VuZGEtZmVpcmFfdGVyw6dhLWZlaXJhX3F1YXJ0YS1mZWlyYV9xdWludGEtZmVpcmFfc2V4dGEtZmVpcmFfc8OhYmFkb1wiLnNwbGl0KFwiX1wiKSwgd2Vla2RheXNTaG9ydDogXCJkb21fc2VnX3Rlcl9xdWFfcXVpX3NleF9zYWJcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzTWluOiBcIkRvXzLCql8zwqpfNMKqXzXCql82wqpfU2FcIi5zcGxpdChcIl9cIiksIG1vbnRoczogXCJqYW5laXJvX2ZldmVyZWlyb19tYXLDp29fYWJyaWxfbWFpb19qdW5ob19qdWxob19hZ29zdG9fc2V0ZW1icm9fb3V0dWJyb19ub3ZlbWJyb19kZXplbWJyb1wiLnNwbGl0KFwiX1wiKSwgbW9udGhzU2hvcnQ6IFwiamFuX2Zldl9tYXJfYWJyX21haV9qdW5fanVsX2Fnb19zZXRfb3V0X25vdl9kZXpcIi5zcGxpdChcIl9cIiksIG9yZGluYWw6IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHIgKyBcIsK6XCI7XG4gICAgICB9LCB3ZWVrU3RhcnQ6IDEsIHllYXJTdGFydDogNCwgZm9ybWF0czogeyBMVDogXCJISDptbVwiLCBMVFM6IFwiSEg6bW06c3NcIiwgTDogXCJERC9NTS9ZWVlZXCIsIExMOiBcIkQgW2RlXSBNTU1NIFtkZV0gWVlZWVwiLCBMTEw6IFwiRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDoHNdIEhIOm1tXCIsIExMTEw6IFwiZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDoHNdIEhIOm1tXCIgfSwgcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogXCJlbSAlc1wiLCBwYXN0OiBcImjDoSAlc1wiLCBzOiBcImFsZ3VucyBzZWd1bmRvc1wiLCBtOiBcInVtIG1pbnV0b1wiLCBtbTogXCIlZCBtaW51dG9zXCIsIGg6IFwidW1hIGhvcmFcIiwgaGg6IFwiJWQgaG9yYXNcIiwgZDogXCJ1bSBkaWFcIiwgZGQ6IFwiJWQgZGlhc1wiLCBNOiBcInVtIG3DqnNcIiwgTU06IFwiJWQgbWVzZXNcIiwgeTogXCJ1bSBhbm9cIiwgeXk6IFwiJWQgYW5vc1wiIH0gfTtcbiAgICAgIHJldHVybiB0LmRlZmF1bHQubG9jYWxlKGEsIG51bGwsICEwKSwgYTtcbiAgICB9KSk7XG4gIH0pKG4pKSwgbi5leHBvcnRzO1xufVxudmFyIGkgPSBsKCk7XG5jb25zdCBjID0gLyogQF9fUFVSRV9fICovIG0oaSksIHkgPSAvKiBAX19QVVJFX18gKi8gZih7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZGVmYXVsdDogY1xufSwgW2ldKTtcbmV4cG9ydCB7XG4gIHkgYXMgcFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB0LXp0TnVIWnZOLmpzLm1hcFxuIl0sIm5hbWVzIjpbImQiLCJtIl0sIm1hcHBpbmdzIjoiOztBQUVBLFNBQVMsRUFBRSxHQUFHLEdBQUc7QUFDZixXQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxLQUFLO0FBQ2pDLFVBQU0sSUFBSSxFQUFFLENBQUM7QUFDYixRQUFJLE9BQU8sS0FBSyxZQUFZLENBQUMsTUFBTSxRQUFRLENBQUMsR0FBRztBQUM3QyxpQkFBVyxLQUFLO0FBQ2QsWUFBSSxNQUFNLGFBQWEsRUFBRSxLQUFLLElBQUk7QUFDaEMsZ0JBQU0sSUFBSSxPQUFPLHlCQUF5QixHQUFHLENBQUM7QUFDOUMsZUFBSyxPQUFPLGVBQWUsR0FBRyxHQUFHLEVBQUUsTUFBTSxJQUFJO0FBQUEsWUFDM0MsWUFBWTtBQUFBLFlBQ1osS0FBSyxNQUFNLEVBQUUsQ0FBQztBQUFBLFVBQzFCLENBQVc7QUFBQSxRQUNIO0FBQUEsSUFDSjtBQUFBLEVBQ0Y7QUFDQSxTQUFPLE9BQU8sT0FBTyxPQUFPLGVBQWUsR0FBRyxPQUFPLGFBQWEsRUFBRSxPQUFPLFNBQVEsQ0FBRSxDQUFDO0FBQ3hGO0FBQ0EsSUFBSSxJQUFJLEVBQUUsU0FBUyxDQUFBLEVBQUUsR0FBSSxJQUFJLEVBQUUsU0FBUztBQUN4QyxTQUFTLElBQUk7QUFDWCxTQUFPLE1BQU0sSUFBSSxJQUFJLFNBQVMsR0FBRyxHQUFHO0FBQ2xDLEtBQUMsU0FBUyxHQUFHLEdBQUc7QUFDZCxRQUFFLFVBQVUsRUFBRUEsSUFBRztBQUFBLElBQ25CLEdBQUcsSUFBSSxTQUFTLEdBQUc7QUFDakIsZUFBUyxFQUFFLEdBQUc7QUFDWixlQUFPLEtBQUssT0FBTyxLQUFLLFlBQVksYUFBYSxJQUFJLElBQUksRUFBRSxTQUFTLEVBQUM7QUFBQSxNQUN2RTtBQUNBLFVBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsTUFBTSxNQUFNLFVBQVUsaUZBQWlGLE1BQU0sR0FBRyxHQUFHLGVBQWUsOEJBQThCLE1BQU0sR0FBRyxHQUFHLGFBQWEsdUJBQXVCLE1BQU0sR0FBRyxHQUFHLFFBQVEsMkZBQTJGLE1BQU0sR0FBRyxHQUFHLGFBQWEsa0RBQWtELE1BQU0sR0FBRyxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQzdiLGVBQU8sSUFBSTtBQUFBLE1BQ2IsR0FBRyxXQUFXLEdBQUcsV0FBVyxHQUFHLFNBQVMsRUFBRSxJQUFJLFNBQVMsS0FBSyxZQUFZLEdBQUcsY0FBYyxJQUFJLHlCQUF5QixLQUFLLG9DQUFvQyxNQUFNLHlDQUF3QyxHQUFJLGNBQWMsRUFBRSxRQUFRLFNBQVMsTUFBTSxTQUFTLEdBQUcsbUJBQW1CLEdBQUcsYUFBYSxJQUFJLGNBQWMsR0FBRyxZQUFZLElBQUksWUFBWSxHQUFHLFVBQVUsSUFBSSxXQUFXLEdBQUcsVUFBVSxJQUFJLFlBQVksR0FBRyxVQUFVLElBQUksVUFBUyxFQUFFO0FBQzdhLGFBQU8sRUFBRSxRQUFRLE9BQU8sR0FBRyxNQUFNLElBQUUsR0FBRztBQUFBLElBQ3hDLEVBQUM7QUFBQSxFQUNILEdBQUcsQ0FBQyxJQUFJLEVBQUU7QUFDWjtBQUNBLElBQUksSUFBSSxFQUFDO0FBQ0osTUFBQyxJQUFvQkMsbUJBQUUsQ0FBQyxHQUFHLElBQW9CLGtCQUFFO0FBQUEsRUFDcEQsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
