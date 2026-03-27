import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function d(n, i) {
  for (var o = 0; o < i.length; o++) {
    const t = i[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in n)) {
          const _ = Object.getOwnPropertyDescriptor(t, r);
          _ && Object.defineProperty(n, r, _.get ? _ : {
            enumerable: true,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, Y = s.exports, l;
function m() {
  return l || (l = 1, (function(n, i) {
    (function(o, t) {
      n.exports = t(rt());
    })(Y, (function(o) {
      function t(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var r = t(o), _ = { name: "ko", weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), ordinal: function(e) {
        return e + "일";
      }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, meridiem: function(e) {
        return e < 12 ? "오전" : "오후";
      }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" } };
      return r.default.locale(_, null, true), _;
    }));
  })(s)), s.exports;
}
var a = m();
const f = /* @__PURE__ */ by(a), h = /* @__PURE__ */ d({
  __proto__: null,
  default: f
}, [a]);

export { h as k };
//# sourceMappingURL=ko-BIjkG-X2--WBSM4N5-C5ddra0_.js.map
//# sourceMappingURL=ko-BIjkG-X2--WBSM4N5-C5ddra0_.js.map
