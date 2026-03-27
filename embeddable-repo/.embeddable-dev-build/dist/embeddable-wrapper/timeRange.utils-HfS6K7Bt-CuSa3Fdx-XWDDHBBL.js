import { J as Je } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';

const f = (o, t, s) => {
  var d;
  if (!o || !t)
    return;
  const n = o != null && o.relativeTimeString ? (d = s.defaults.dateRangesOptions.find((e) => e.value === (o == null ? void 0 : o.relativeTimeString))) == null ? void 0 : d.getRange() : o, l = s.defaults.comparisonPeriodsOptions.find(
    (e) => e.value === t
  );
  return l == null ? void 0 : l.getRange(n);
}, v = (o, t) => {
  const s = t.defaults.comparisonPeriodsOptions.find(
    (n) => n.value === o
  );
  return s ? Je(s.label) : "";
};

export { f, v };
//# sourceMappingURL=timeRange.utils-HfS6K7Bt-CuSa3Fdx-XWDDHBBL.js.map
//# sourceMappingURL=timeRange.utils-HfS6K7Bt-CuSa3Fdx-XWDDHBBL.js.map
