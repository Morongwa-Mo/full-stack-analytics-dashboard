import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function L(i, m) {
  for (var s = 0; s < m.length; s++) {
    const _ = m[s];
    if (typeof _ != "string" && !Array.isArray(_)) {
      for (const r in _)
        if (r !== "default" && !(r in i)) {
          const u = Object.getOwnPropertyDescriptor(_, r);
          u && Object.defineProperty(i, r, u.get ? u : {
            enumerable: true,
            get: () => _[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var f = { exports: {} }, v = f.exports, c;
function D() {
  return c || (c = 1, (function(i, m) {
    (function(s, _) {
      i.exports = _(rt());
    })(v, (function(s) {
      function _(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var r = _(s), u = "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), M = "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"), Y = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
      function e(t, o, l) {
        var n, a;
        return l === "m" ? o ? "хвилина" : "хвилину" : l === "h" ? o ? "година" : "годину" : t + " " + (n = +t, a = { ss: o ? "секунда_секунди_секунд" : "секунду_секунди_секунд", mm: o ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: o ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }[l].split("_"), n % 10 == 1 && n % 100 != 11 ? a[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? a[1] : a[2]);
      }
      var p = function(t, o) {
        return Y.test(o) ? u[t.month()] : M[t.month()];
      };
      p.s = M, p.f = u;
      var d = { name: "uk", weekdays: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), weekdaysShort: "ндл_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: p, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: e, mm: e, h: e, hh: e, d: "день", dd: e, M: "місяць", MM: e, y: "рік", yy: e }, ordinal: function(t) {
        return t;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" } };
      return r.default.locale(d, null, true), d;
    }));
  })(f)), f.exports;
}
var y = D();
const g = /* @__PURE__ */ by(y), b = /* @__PURE__ */ L({
  __proto__: null,
  default: g
}, [y]);

export { b as u };
//# sourceMappingURL=uk-1EGi3xXq-DjTdBWly-B2p5n1Hl.js.map
//# sourceMappingURL=uk-1EGi3xXq-DjTdBWly-B2p5n1Hl.js.map
