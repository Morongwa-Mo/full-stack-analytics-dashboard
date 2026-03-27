import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function b(o, s) {
  for (var n = 0; n < s.length; n++) {
    const r = s[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const t in r)
        if (t !== "default" && !(t in o)) {
          const u = Object.getOwnPropertyDescriptor(r, t);
          u && Object.defineProperty(o, t, u.get ? u : {
            enumerable: true,
            get: () => r[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} }, v = a.exports, c;
function Y() {
  return c || (c = 1, (function(o, s) {
    (function(n, r) {
      o.exports = r(rt());
    })(v, (function(n) {
      function r(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var t = r(n);
      function u(e) {
        return e > 9 ? u(e % 10) : e;
      }
      function _(e, y, l) {
        return e + " " + (function(f, M) {
          return M === 2 ? (function(m) {
            return { m: "v", b: "v", d: "z" }[m.charAt(0)] + m.substring(1);
          })(f) : f;
        })({ mm: "munutenn", MM: "miz", dd: "devezh" }[l], e);
      }
      var i = { name: "br", weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"), months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), weekStart: 1, weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), ordinal: function(e) {
        return e;
      }, formats: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, relativeTime: { future: "a-benn %s", past: "%s ʼzo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: _, h: "un eur", hh: "%d eur", d: "un devezh", dd: _, M: "ur miz", MM: _, y: "ur bloaz", yy: function(e) {
        switch (u(e)) {
          case 1:
          case 3:
          case 4:
          case 5:
          case 9:
            return e + " bloaz";
          default:
            return e + " vloaz";
        }
      } }, meridiem: function(e) {
        return e < 12 ? "a.m." : "g.m.";
      } };
      return t.default.locale(i, null, true), i;
    }));
  })(a)), a.exports;
}
var d = Y();
const z = /* @__PURE__ */ by(d), w = /* @__PURE__ */ b({
  __proto__: null,
  default: z
}, [d]);

export { w as b };
//# sourceMappingURL=br-C_W6dR8r-Ctuaqan1-na_gRL_U.js.map
//# sourceMappingURL=br-C_W6dR8r-Ctuaqan1-na_gRL_U.js.map
