import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function l(_, p) {
  for (var s = 0; s < p.length; s++) {
    const u = p[s];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const o in u)
        if (o !== "default" && !(o in _)) {
          const a = Object.getOwnPropertyDescriptor(u, o);
          a && Object.defineProperty(_, o, a.get ? a : {
            enumerable: true,
            get: () => u[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} }, h = i.exports, f;
function j() {
  return f || (f = 1, (function(_, p) {
    (function(s, u) {
      _.exports = u(rt());
    })(h, (function(s) {
      function u(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var o = u(s), a = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(e) {
        return e + ".";
      }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(e, t, n, r) {
        return "néhány másodperc" + (r || t ? "" : "e");
      }, m: function(e, t, n, r) {
        return "egy perc" + (r || t ? "" : "e");
      }, mm: function(e, t, n, r) {
        return e + " perc" + (r || t ? "" : "e");
      }, h: function(e, t, n, r) {
        return "egy " + (r || t ? "óra" : "órája");
      }, hh: function(e, t, n, r) {
        return e + " " + (r || t ? "óra" : "órája");
      }, d: function(e, t, n, r) {
        return "egy " + (r || t ? "nap" : "napja");
      }, dd: function(e, t, n, r) {
        return e + " " + (r || t ? "nap" : "napja");
      }, M: function(e, t, n, r) {
        return "egy " + (r || t ? "hónap" : "hónapja");
      }, MM: function(e, t, n, r) {
        return e + " " + (r || t ? "hónap" : "hónapja");
      }, y: function(e, t, n, r) {
        return "egy " + (r || t ? "év" : "éve");
      }, yy: function(e, t, n, r) {
        return e + " " + (r || t ? "év" : "éve");
      } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
      return o.default.locale(a, null, true), a;
    }));
  })(i)), i.exports;
}
var c = j();
const y = /* @__PURE__ */ by(c), g = /* @__PURE__ */ l({
  __proto__: null,
  default: y
}, [c]);

export { g as h };
//# sourceMappingURL=hu-QnL8bPs3-8zvD7gIk-DzVLH0Dc.js.map
//# sourceMappingURL=hu-QnL8bPs3-8zvD7gIk-DzVLH0Dc.js.map
