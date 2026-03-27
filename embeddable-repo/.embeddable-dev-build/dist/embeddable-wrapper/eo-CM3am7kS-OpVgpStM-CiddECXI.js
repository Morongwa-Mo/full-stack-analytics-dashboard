import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function l(n, s) {
  for (var t = 0; t < s.length; t++) {
    const e = s[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in n)) {
          const a = Object.getOwnPropertyDescriptor(e, o);
          a && Object.defineProperty(n, o, a.get ? a : {
            enumerable: true,
            get: () => e[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} }, f = _.exports, m;
function p() {
  return m || (m = 1, (function(n, s) {
    (function(t, e) {
      n.exports = e(rt());
    })(f, (function(t) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var o = e(t), a = { name: "eo", weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), ordinal: function(r) {
        return r;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" } };
      return o.default.locale(a, null, true), a;
    }));
  })(_)), _.exports;
}
var u = p();
const j = /* @__PURE__ */ by(u), Y = /* @__PURE__ */ l({
  __proto__: null,
  default: j
}, [u]);

export { Y as e };
//# sourceMappingURL=eo-CM3am7kS-OpVgpStM-CiddECXI.js.map
//# sourceMappingURL=eo-CM3am7kS-OpVgpStM-CiddECXI.js.map
