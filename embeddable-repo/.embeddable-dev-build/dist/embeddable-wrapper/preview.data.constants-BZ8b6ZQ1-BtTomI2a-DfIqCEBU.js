import { J as Je } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { h as h$1 } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import { Z as ZIe, V as eRe, W as JIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';

const d = (r) => {
  const n = {};
  return (s) => {
    const o = JSON.stringify(s);
    let e = n[o];
    return e || (e = r(s), n[o] = e, e);
  };
}, T = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}$/, U = (r) => !!(r && T.test(r)), c = (r, n, l) => {
  var s, o;
  return ((s = r.inputs) == null ? void 0 : s[n]) ?? ((o = r.meta) == null ? void 0 : o[l ?? n]);
}, j = (r) => {
  const n = d(
    (t) => r.formatter.numberFormatter(r, t)
  ), l = d(
    (t) => r.formatter.dataNumberFormatter(r, t)
  ), s = d(
    (t) => r.formatter.dateTimeFormatter(r, t)
  ), o = d(
    (t) => r.formatter.dataDateTimeFormatter(r, t)
  ), e = d(
    (t) => r.formatter.dataOthersFormatter(r, t)
  );
  return {
    string: (t) => r.formatter.stringFormatter().format(t),
    number: (t, a) => n(a).format(t),
    dateTime: (t, a) => s(a).format(t),
    dimensionOrMeasureTitle: (t) => {
      const a = c(t, "displayName");
      if (a)
        return a.includes("|") ? Je(a) : a;
      const i = e(t).format(t.name);
      return i === t.name ? t.title ?? t.name : i;
    },
    data: (t, a) => {
      let i = a;
      if (a == null)
        return c(t, "displayNullAs") ?? "";
      const g = c(t, "displayFormat");
      if (g === h$1.JSON)
        return JSON.stringify(a, null, 2);
      if (g === h$1.MARKDOWN)
        return a;
      if (typeof a == "object")
        return JSON.stringify(a);
      t.nativeType === "number" && (i = l(t).format(a)), t.nativeType === "time" && U(a) && (i = o(t).format(new Date(a))), (t.nativeType === "boolean" || t.nativeType === "string") && (i = e(t).format(a));
      const A = c(t, "prefix", "pretext") || "", N = c(t, "suffix", "posttext") || "", p = `${A}${i}${N}`, F = c(t, "maxCharacters");
      return F != null ? p.length <= F ? p : p.substring(0, F) + "..." : p;
    }
  };
}, f = "country", m = "count", E = "average", C = "category", O = ZIe(f, "string", { title: "Country" }), M = eRe(m, "number", { title: "Count" }), x = eRe(E, "number", { title: "Average" }), G = ZIe(C, "string", {
  title: "Category"
}), V = JIe(
  [f, m],
  [
    ["US", 120],
    ["GER", 100],
    ["UK", 80],
    ["FRA", 70],
    ["SPA", 55]
  ]
);
JIe(
  [f, C, m],
  [
    ["US", 100],
    ["GER", 90],
    ["UK", 75],
    ["FRA", 85],
    ["SPA", 60]
  ]
);
const K = JIe(
  [f, C, m],
  [
    ["US", "Cat 1", 120],
    ["US", "Cat 2", 130],
    ["GER", "Cat 1", 100],
    ["GER", "Cat 2", 110],
    ["UK", "Cat 1", 80],
    ["UK", "Cat 2", 95],
    ["FRA", "Cat 1", 70],
    ["FRA", "Cat 2", 60],
    ["SPA", "Cat 1", 55],
    ["SPA", "Cat 2", 35]
  ]
), P = JIe(
  [f, C, m],
  [
    ["US", "Cat 1", 100],
    ["US", "Cat 2", 115],
    ["GER", "Cat 1", 90],
    ["GER", "Cat 2", 125],
    ["UK", "Cat 1", 75],
    ["UK", "Cat 2", 105],
    ["FRA", "Cat 1", 85],
    ["FRA", "Cat 2", 55],
    ["SPA", "Cat 1", 60],
    ["SPA", "Cat 2", 30]
  ]
), J = JIe([m], [[120]]), $ = JIe([m], [[100]]), h = {
  embeddableId: "",
  datasetId: "",
  inputName: "",
  variableValues: {}
}, B = {
  dataset: h,
  dimension: O,
  dimensionGroup: G,
  measure: M,
  measureVariant: x,
  results1Measure: J,
  results1MeasureVariant: $,
  results1Measure1Dimension: V,
  results1Measure2Dimensions: K,
  results1Measure2DimensionsVariant: P
};

export { B, c, j };
//# sourceMappingURL=preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js.map
//# sourceMappingURL=preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js.map
