import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

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

export { x };
//# sourceMappingURL=x-pseudo-Bpdxtjwi-Dvxwv8BH-BWIffA2p.js.map
//# sourceMappingURL=x-pseudo-Bpdxtjwi-Dvxwv8BH-BWIffA2p.js.map
