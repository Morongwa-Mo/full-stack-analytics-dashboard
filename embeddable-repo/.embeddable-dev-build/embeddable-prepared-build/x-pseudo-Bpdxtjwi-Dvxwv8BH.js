import { V as by } from "./index-CnLFSN1m-CiKoWgQc.js";
import { r as rt } from "./utc-OYNdM3Of-CUwwS7pr.js";
function p(_, n) {
  for (var s = 0; s < n.length; s++) {
    const r = n[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const t in r)
        if (t !== "default" && !(t in _)) {
          const o = Object.getOwnPropertyDescriptor(r, t);
          o && Object.defineProperty(_, t, o.get ? o : {
            enumerable: true,
            get: () => r[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} }, f = d.exports, u;
function l() {
  return u || (u = 1, (function(_, n) {
    (function(s, r) {
      _.exports = r(rt());
    })(f, (function(s) {
      function r(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var t = r(s), o = { name: "x-pseudo", weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), weekStart: 1, weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), ordinal: function(e) {
        return e;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" } };
      return t.default.locale(o, null, true), o;
    }));
  })(d)), d.exports;
}
var a = l();
const c = /* @__PURE__ */ by(a), x = /* @__PURE__ */ p({
  __proto__: null,
  default: c
}, [a]);
export {
  x
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC1wc2V1ZG8tQnBkeHRqd2ktRHZ4d3Y4QkguanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L3gtcHNldWRvLUJwZHh0andpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEEgYXMgaSB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyByIGFzIG0gfSBmcm9tIFwiLi91dGMtT1lOZE0zT2YuanNcIjtcbmZ1bmN0aW9uIHAoXywgbikge1xuICBmb3IgKHZhciBzID0gMDsgcyA8IG4ubGVuZ3RoOyBzKyspIHtcbiAgICBjb25zdCByID0gbltzXTtcbiAgICBpZiAodHlwZW9mIHIgIT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShyKSkge1xuICAgICAgZm9yIChjb25zdCB0IGluIHIpXG4gICAgICAgIGlmICh0ICE9PSBcImRlZmF1bHRcIiAmJiAhKHQgaW4gXykpIHtcbiAgICAgICAgICBjb25zdCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLCB0KTtcbiAgICAgICAgICBvICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfLCB0LCBvLmdldCA/IG8gOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogKCkgPT4gclt0XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xufVxudmFyIGQgPSB7IGV4cG9ydHM6IHt9IH0sIGYgPSBkLmV4cG9ydHMsIHU7XG5mdW5jdGlvbiBsKCkge1xuICByZXR1cm4gdSB8fCAodSA9IDEsIChmdW5jdGlvbihfLCBuKSB7XG4gICAgKGZ1bmN0aW9uKHMsIHIpIHtcbiAgICAgIF8uZXhwb3J0cyA9IHIobSgpKTtcbiAgICB9KShmLCAoZnVuY3Rpb24ocykge1xuICAgICAgZnVuY3Rpb24gcihlKSB7XG4gICAgICAgIHJldHVybiBlICYmIHR5cGVvZiBlID09IFwib2JqZWN0XCIgJiYgXCJkZWZhdWx0XCIgaW4gZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gcihzKSwgbyA9IHsgbmFtZTogXCJ4LXBzZXVkb1wiLCB3ZWVrZGF5czogXCJTfsO6w7Fkw6F+w71fTcOzfsOxZMOhw71+X1TDusOpfnNkw6HDvX5fV8OpZH7DscOpc2R+w6HDvV9UfmjDunJzfmTDocO9X35GcsOtZH7DocO9X1N+w6F0w7pyfmTDocO9XCIuc3BsaXQoXCJfXCIpLCBtb250aHM6IFwiSn7DocOxw7rDoX5yw71fRn7DqWJyw7p+w6Fyw71ffk3DoXJjfmhfw4FwfnLDrWxffk3DocO9X35Kw7rDscOpfl9Kw7psfsO9X8OBw7p+Z8O6c3R+X1PDqXB+dMOpbWJ+w6lyX8OTfmN0w7NifsOpcl/DkX7Ds3bDqW1+YsOpcl9+RMOpY8Opfm1iw6lyXCIuc3BsaXQoXCJfXCIpLCB3ZWVrU3RhcnQ6IDEsIHdlZWtkYXlzU2hvcnQ6IFwiU37DusOxX35Nw7PDsV9+VMO6w6lfflfDqWRfflRow7pffkZyw61fflPDoXRcIi5zcGxpdChcIl9cIiksIG1vbnRoc1Nob3J0OiBcIkp+w6HDsV9+RsOpYl9+TcOhcl9+w4Fwcl9+TcOhw71ffkrDusOxX35Kw7psX37DgcO6Z19+U8OpcF9+w5NjdF9+w5HDs3ZffkTDqWNcIi5zcGxpdChcIl9cIiksIHdlZWtkYXlzTWluOiBcIlN+w7pfTcOzfl9Uw7pfflfDqV9UfmhfRnJ+X1PDoVwiLnNwbGl0KFwiX1wiKSwgb3JkaW5hbDogZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH0sIGZvcm1hdHM6IHsgTFQ6IFwiSEg6bW1cIiwgTFRTOiBcIkhIOm1tOnNzXCIsIEw6IFwiREQvTU0vWVlZWVwiLCBMTDogXCJEIE1NTU0gWVlZWVwiLCBMTEw6IFwiRCBNTU1NIFlZWVkgSEg6bW1cIiwgTExMTDogXCJkZGRkLCBEIE1NTU0gWVlZWSBISDptbVwiIH0sIHJlbGF0aXZlVGltZTogeyBmdXR1cmU6IFwiw61+w7EgJXNcIiwgcGFzdDogXCIlcyDDoX5nw7NcIiwgczogXCLDoSB+ZsOpdyB+c8OpY8OzfsOxZHNcIiwgbTogXCLDoSB+bcOtw7F+w7p0w6lcIiwgbW06IFwiJWQgbX7DrcOxw7p+dMOpc1wiLCBoOiBcIsOhfsOxIGjDs37DunJcIiwgaGg6IFwiJWQgaH7Ds8O6cnNcIiwgZDogXCLDoSB+ZMOhw71cIiwgZGQ6IFwiJWQgZH7DocO9c1wiLCBNOiBcIsOhIH5tw7PDsX50aFwiLCBNTTogXCIlZCBtfsOzw7F0fmhzXCIsIHk6IFwiw6EgfsO9w6nDoXJcIiwgeXk6IFwiJWQgw71+w6nDoXJzXCIgfSB9O1xuICAgICAgcmV0dXJuIHQuZGVmYXVsdC5sb2NhbGUobywgbnVsbCwgITApLCBvO1xuICAgIH0pKTtcbiAgfSkoZCkpLCBkLmV4cG9ydHM7XG59XG52YXIgYSA9IGwoKTtcbmNvbnN0IGMgPSAvKiBAX19QVVJFX18gKi8gaShhKSwgeCA9IC8qIEBfX1BVUkVfXyAqLyBwKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBjXG59LCBbYV0pO1xuZXhwb3J0IHtcbiAgeFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXgtcHNldWRvLUJwZHh0andpLmpzLm1hcFxuIl0sIm5hbWVzIjpbIm0iLCJpIl0sIm1hcHBpbmdzIjoiOztBQUVBLFNBQVMsRUFBRSxHQUFHLEdBQUc7QUFDZixXQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxLQUFLO0FBQ2pDLFVBQU0sSUFBSSxFQUFFLENBQUM7QUFDYixRQUFJLE9BQU8sS0FBSyxZQUFZLENBQUMsTUFBTSxRQUFRLENBQUMsR0FBRztBQUM3QyxpQkFBVyxLQUFLO0FBQ2QsWUFBSSxNQUFNLGFBQWEsRUFBRSxLQUFLLElBQUk7QUFDaEMsZ0JBQU0sSUFBSSxPQUFPLHlCQUF5QixHQUFHLENBQUM7QUFDOUMsZUFBSyxPQUFPLGVBQWUsR0FBRyxHQUFHLEVBQUUsTUFBTSxJQUFJO0FBQUEsWUFDM0MsWUFBWTtBQUFBLFlBQ1osS0FBSyxNQUFNLEVBQUUsQ0FBQztBQUFBLFVBQzFCLENBQVc7QUFBQSxRQUNIO0FBQUEsSUFDSjtBQUFBLEVBQ0Y7QUFDQSxTQUFPLE9BQU8sT0FBTyxPQUFPLGVBQWUsR0FBRyxPQUFPLGFBQWEsRUFBRSxPQUFPLFNBQVEsQ0FBRSxDQUFDO0FBQ3hGO0FBQ0EsSUFBSSxJQUFJLEVBQUUsU0FBUyxDQUFBLEVBQUUsR0FBSSxJQUFJLEVBQUUsU0FBUztBQUN4QyxTQUFTLElBQUk7QUFDWCxTQUFPLE1BQU0sSUFBSSxJQUFJLFNBQVMsR0FBRyxHQUFHO0FBQ2xDLEtBQUMsU0FBUyxHQUFHLEdBQUc7QUFDZCxRQUFFLFVBQVUsRUFBRUEsSUFBRztBQUFBLElBQ25CLEdBQUcsSUFBSSxTQUFTLEdBQUc7QUFDakIsZUFBUyxFQUFFLEdBQUc7QUFDWixlQUFPLEtBQUssT0FBTyxLQUFLLFlBQVksYUFBYSxJQUFJLElBQUksRUFBRSxTQUFTLEVBQUM7QUFBQSxNQUN2RTtBQUNBLFVBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsTUFBTSxZQUFZLFVBQVUseUVBQXlFLE1BQU0sR0FBRyxHQUFHLFFBQVEsNkdBQTZHLE1BQU0sR0FBRyxHQUFHLFdBQVcsR0FBRyxlQUFlLHFDQUFxQyxNQUFNLEdBQUcsR0FBRyxhQUFhLDhEQUE4RCxNQUFNLEdBQUcsR0FBRyxhQUFhLDRCQUE0QixNQUFNLEdBQUcsR0FBRyxTQUFTLFNBQVMsR0FBRztBQUNuZixlQUFPO0FBQUEsTUFDVCxHQUFHLFNBQVMsRUFBRSxJQUFJLFNBQVMsS0FBSyxZQUFZLEdBQUcsY0FBYyxJQUFJLGVBQWUsS0FBSyxxQkFBcUIsTUFBTSw2QkFBNkIsY0FBYyxFQUFFLFFBQVEsVUFBVSxNQUFNLFdBQVcsR0FBRyxvQkFBb0IsR0FBRyxjQUFjLElBQUksZ0JBQWdCLEdBQUcsYUFBYSxJQUFJLGFBQWEsR0FBRyxVQUFVLElBQUksWUFBWSxHQUFHLGFBQWEsSUFBSSxlQUFlLEdBQUcsV0FBVyxJQUFJLGNBQWE7QUFDNVgsYUFBTyxFQUFFLFFBQVEsT0FBTyxHQUFHLE1BQU0sSUFBRSxHQUFHO0FBQUEsSUFDeEMsRUFBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNaO0FBQ0EsSUFBSSxJQUFJLEVBQUM7QUFDSixNQUFDLElBQW9CQyxtQkFBRSxDQUFDLEdBQUcsSUFBb0Isa0JBQUU7QUFBQSxFQUNwRCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
