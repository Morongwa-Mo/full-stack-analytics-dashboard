import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as rt } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

function c(a, s) {
  for (var n = 0; n < s.length; n++) {
    const u = s[n];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const i in u)
        if (i !== "default" && !(i in a)) {
          const t = Object.getOwnPropertyDescriptor(u, i);
          t && Object.defineProperty(a, i, t.get ? t : {
            enumerable: true,
            get: () => u[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var r = { exports: {} }, v = r.exports, m;
function j() {
  return m || (m = 1, (function(a, s) {
    (function(n, u) {
      a.exports = u(rt());
    })(v, (function(n) {
      function u(e) {
        return e && typeof e == "object" && "default" in e ? e : { default: e };
      }
      var i = u(n);
      function t(e, d, p, f) {
        var M = { s: "muutama sekunti", m: "minuutti", mm: "%d minuuttia", h: "tunti", hh: "%d tuntia", d: "päivä", dd: "%d päivää", M: "kuukausi", MM: "%d kuukautta", y: "vuosi", yy: "%d vuotta", numbers: "nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_") }, Y = { s: "muutaman sekunnin", m: "minuutin", mm: "%d minuutin", h: "tunnin", hh: "%d tunnin", d: "päivän", dd: "%d päivän", M: "kuukauden", MM: "%d kuukauden", y: "vuoden", yy: "%d vuoden", numbers: "nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_") }, _ = f && !d ? Y : M, l = _[p];
        return e < 10 ? l.replace("%d", _.numbers[e]) : l.replace("%d", e);
      }
      var o = { name: "fi", weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), ordinal: function(e) {
        return e + ".";
      }, weekStart: 1, yearStart: 4, relativeTime: { future: "%s päästä", past: "%s sitten", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM[ta] YYYY", LLL: "D. MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [klo] HH.mm", llll: "ddd, D. MMM YYYY, [klo] HH.mm" } };
      return i.default.locale(o, null, true), o;
    }));
  })(r)), r.exports;
}
var k = j();
const D = /* @__PURE__ */ by(k), b = /* @__PURE__ */ c({
  __proto__: null,
  default: D
}, [k]);

export { b as f };
//# sourceMappingURL=fi-BWJz80Be-BP5mEBhe-BMTCpCrt.js.map
//# sourceMappingURL=fi-BWJz80Be-BP5mEBhe-BMTCpCrt.js.map
