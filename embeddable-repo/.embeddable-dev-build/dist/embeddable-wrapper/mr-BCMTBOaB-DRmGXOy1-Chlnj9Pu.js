import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function p(n, a) {
  for (var _ = 0; _ < a.length; _++) {
    const r = a[_];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const e in r)
        if (e !== "default" && !(e in n)) {
          const o = Object.getOwnPropertyDescriptor(r, e);
          o && Object.defineProperty(n, e, o.get ? o : {
            enumerable: true,
            get: () => r[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} }, l = s.exports, i;
function c() {
  return i || (i = 1, (function(n, a) {
    (function(_, r) {
      n.exports = r(rt());
    })(l, (function(_) {
      function r(t) {
        return t && typeof t == "object" && "default" in t ? t : { default: t };
      }
      var e = r(_), o = { name: "mr", weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), ordinal: function(t) {
        return t;
      }, formats: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता" } };
      return e.default.locale(o, null, true), o;
    }));
  })(s)), s.exports;
}
var u = c();
const d = /* @__PURE__ */ by(u), y = /* @__PURE__ */ p({
  __proto__: null,
  default: d
}, [u]);

export { y as m };
//# sourceMappingURL=mr-BCMTBOaB-DRmGXOy1-Chlnj9Pu.js.map
//# sourceMappingURL=mr-BCMTBOaB-DRmGXOy1-Chlnj9Pu.js.map
