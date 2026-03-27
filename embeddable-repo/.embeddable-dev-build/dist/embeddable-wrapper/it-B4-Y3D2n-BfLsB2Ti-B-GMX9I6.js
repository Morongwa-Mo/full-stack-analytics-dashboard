import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function l(i, _) {
  for (var o = 0; o < _.length; o++) {
    const e = _[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in i)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(i, t, n.get ? n : {
            enumerable: true,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} }, f = a.exports, s;
function p() {
  return s || (s = 1, (function(i, _) {
    (function(o, e) {
      i.exports = e(rt());
    })(f, (function(o) {
      function e(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var t = e(o), n = { name: "it", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "qualche secondo", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinal: function(r) {
        return r + "º";
      } };
      return t.default.locale(n, null, true), n;
    }));
  })(a)), a.exports;
}
var u = p();
const c = /* @__PURE__ */ by(u), b = /* @__PURE__ */ l({
  __proto__: null,
  default: c
}, [u]);

export { b as i };
//# sourceMappingURL=it-B4-Y3D2n-BfLsB2Ti-B-GMX9I6.js.map
//# sourceMappingURL=it-B4-Y3D2n-BfLsB2Ti-B-GMX9I6.js.map
