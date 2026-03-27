import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function g(a, f) {
  for (var s = 0; s < f.length; s++) {
    const t = f[s];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in a)) {
          const i = Object.getOwnPropertyDescriptor(t, r);
          i && Object.defineProperty(a, r, i.get ? i : {
            enumerable: true,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var m = { exports: {} }, x = m.exports, b;
function H() {
  return b || (b = 1, (function(a, f) {
    (function(s, t) {
      a.exports = t(rt());
    })(x, (function(s) {
      function t(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var r = t(s), i = "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"), M = "студзень_лютый_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"), c = "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж.".split("_"), y = "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), h = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
      function n(e, _, d) {
        var o, u;
        return d === "m" ? _ ? "хвіліна" : "хвіліну" : d === "h" ? _ ? "гадзіна" : "гадзіну" : e + " " + (o = +e, u = { ss: _ ? "секунда_секунды_секунд" : "секунду_секунды_секунд", mm: _ ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: _ ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" }[d].split("_"), o % 10 == 1 && o % 100 != 11 ? u[0] : o % 10 >= 2 && o % 10 <= 4 && (o % 100 < 10 || o % 100 >= 20) ? u[1] : u[2]);
      }
      var p = function(e, _) {
        return h.test(_) ? i[e.month()] : M[e.month()];
      };
      p.s = M, p.f = i;
      var l = function(e, _) {
        return h.test(_) ? c[e.month()] : y[e.month()];
      };
      l.s = y, l.f = c;
      var Y = { name: "be", weekdays: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), weekdaysShort: "няд_пнд_аўт_сер_чцв_пят_суб".split("_"), weekdaysMin: "нд_пн_аў_ср_чц_пт_сб".split("_"), months: p, monthsShort: l, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: n, mm: n, h: n, hh: n, d: "дзень", dd: n, M: "месяц", MM: n, y: "год", yy: n }, ordinal: function(e) {
        return e;
      }, meridiem: function(e) {
        return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара";
      } };
      return r.default.locale(Y, null, true), Y;
    }));
  })(m)), m.exports;
}
var v = H();
const j = /* @__PURE__ */ by(v), w = /* @__PURE__ */ g({
  __proto__: null,
  default: j
}, [v]);

export { w as b };
//# sourceMappingURL=be-1gzExvdt-BA5GtRJU-DAjfZuqI.js.map
//# sourceMappingURL=be-1gzExvdt-BA5GtRJU-DAjfZuqI.js.map
