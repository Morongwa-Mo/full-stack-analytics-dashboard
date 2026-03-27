import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function d(a, s) {
  for (var _ = 0; _ < s.length; _++) {
    const t = s[_];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in a)) {
          const o = Object.getOwnPropertyDescriptor(t, e);
          o && Object.defineProperty(a, e, o.get ? o : {
            enumerable: true,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} }, p = n.exports, i;
function l() {
  return i || (i = 1, (function(a, s) {
    (function(_, t) {
      a.exports = t(rt());
    })(p, (function(_) {
      function t(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var e = t(_), o = { name: "am", weekdays: "እሑድ_ሰኞ_ማክሰኞ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysShort: "እሑድ_ሰኞ_ማክሰ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysMin: "እሑ_ሰኞ_ማክ_ረቡ_ሐሙ_አር_ቅዳ".split("_"), months: "ጃንዋሪ_ፌብሯሪ_ማርች_ኤፕሪል_ሜይ_ጁን_ጁላይ_ኦገስት_ሴፕቴምበር_ኦክቶበር_ኖቬምበር_ዲሴምበር".split("_"), monthsShort: "ጃንዋ_ፌብሯ_ማርች_ኤፕሪ_ሜይ_ጁን_ጁላይ_ኦገስ_ሴፕቴ_ኦክቶ_ኖቬም_ዲሴም".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "በ%s", past: "%s በፊት", s: "ጥቂት ሰከንዶች", m: "አንድ ደቂቃ", mm: "%d ደቂቃዎች", h: "አንድ ሰዓት", hh: "%d ሰዓታት", d: "አንድ ቀን", dd: "%d ቀናት", M: "አንድ ወር", MM: "%d ወራት", y: "አንድ ዓመት", yy: "%d ዓመታት" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM D ፣ YYYY", LLL: "MMMM D ፣ YYYY HH:mm", LLLL: "dddd ፣ MMMM D ፣ YYYY HH:mm" }, ordinal: function(r) {
        return r + "ኛ";
      } };
      return e.default.locale(o, null, true), o;
    }));
  })(n)), n.exports;
}
var m = l();
const c = /* @__PURE__ */ by(m), Y = /* @__PURE__ */ d({
  __proto__: null,
  default: c
}, [m]);

export { Y as a };
//# sourceMappingURL=am-DbXni8Na-CWIcVWyF-B2djOhJr.js.map
//# sourceMappingURL=am-DbXni8Na-CWIcVWyF-B2djOhJr.js.map
