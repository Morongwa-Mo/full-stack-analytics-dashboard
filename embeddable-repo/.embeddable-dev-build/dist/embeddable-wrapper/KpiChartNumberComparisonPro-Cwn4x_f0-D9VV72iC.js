import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { x, u as uRe, q as qIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { _ as _e, W as We, y } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { j, B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { f, v } from './timeRange.utils-HfS6K7Bt-CuSa3Fdx-XWDDHBBL.js';
import { d as d$1 } from './kpis.utils-DsZ2GzuB-Di0OaaGH-DG8vZ8Zh.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './index-BS0D-ICk.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const d = (e) => {
  var f$1, D, h, y$1, P, b;
  const a = useTheme();
  _e(a);
  const { title: s, description: l, tooltip: _, displayNullAs: g } = We(e), {
    hideMenu: w,
    changeFontSize: F,
    comparisonPeriod: m,
    comparisonDateRange: K,
    displayChangeAsPercentage: M,
    fontSize: j$1,
    measure: i,
    primaryDateRange: u,
    results: r2,
    resultsComparison: t,
    reversePositiveNegativeColors: x$1,
    percentageDecimalPlaces: V,
    setComparisonDateRange: v$1
  } = e;
  reactExports.useEffect(() => {
    if (!v$1) return;
    const p2 = f(
      u,
      m,
      a
    );
    v$1(p2);
  }, [m, JSON.stringify(u), a]);
  const k = (D = (f$1 = r2.data) == null ? void 0 : f$1[0]) == null ? void 0 : D[i.name], O = K ? (y$1 = (h = t == null ? void 0 : t.data) == null ? void 0 : h[0]) == null ? void 0 : y$1[i.name] : void 0, q = j(a), B2 = (p2) => q.data(i, p2), E = `vs ${v(m, a).toLowerCase()}`, C = {
    isLoading: !!(r2.isLoading || t != null && t.isLoading),
    data: !(r2 != null && r2.data) && !(t != null && t.data) ? void 0 : [
      ...(P = r2.data) != null && P.length ? [{ label: y.t("charts.primaryPeriod"), ...r2.data[0] }] : [],
      ...(b = t == null ? void 0 : t.data) != null && b.length ? [{ label: y.t("charts.comparisonPeriod"), ...t.data[0] }] : []
    ]
  }, Y = d$1(C, i, !!g);
  return /* @__PURE__ */ x.jsx(
    G,
    {
      data: Y,
      dimensionsAndMeasures: [
        // Add a label dimension to distinguish primary and comparison periods in exports
        {
          name: "label",
          title: y.t("charts.label"),
          nativeType: "string",
          __type__: "dimension"
        },
        i
      ],
      errorMessage: r2.error,
      description: l,
      title: s,
      tooltip: _,
      hideMenu: w,
      children: /* @__PURE__ */ x.jsx(
        uRe,
        {
          displayNullAs: g,
          value: k,
          comparisonValue: C.isLoading ? void 0 : O,
          valueFormatter: B2,
          valueFontSize: j$1,
          trendFontSize: F,
          invertChangeColors: x$1,
          showChangeAsPercentage: M,
          comparisonLabel: E,
          percentageDecimalPlaces: V,
          noPreviousDataLabel: y.t("charts.kpiChart.noPreviousData"),
          equalComparisonLabel: y.t("charts.kpiChart.equalComparison")
        }
      )
    }
  );
}, ae = {
  name: "KpiChartNumberComparisonPro",
  label: "Kpi Chart - Number Comparison",
  category: "Kpi Charts",
  inputs: [
    Ne.dataset,
    Ne.measure,
    { ...Ne.dimensionTime, name: "timeProperty", label: "Time property" },
    {
      ...Ne.timeRange,
      name: "primaryDateRange",
      label: "Primary date-range",
      description: "You can also connect this to a date range selector using its variable",
      category: "Component Data"
    },
    {
      ...Ne.comparisonPeriod,
      description: "You can also connect this to a comparison period selector using its variable",
      category: "Component Data"
    },
    Ne.title,
    Ne.description,
    Ne.tooltip,
    Ne.displayNullAs,
    {
      ...Ne.boolean,
      name: "displayChangeAsPercentage",
      label: "Display change as %",
      defaultValue: false,
      category: "Component Settings"
    },
    {
      ...Ne.number,
      name: "percentageDecimalPlaces",
      label: "Percentage decimal places",
      defaultValue: 1,
      category: "Component Settings"
    },
    {
      ...Ne.boolean,
      name: "reversePositiveNegativeColors",
      label: "Reverse positive/negative colors",
      defaultValue: false,
      category: "Component Settings"
    },
    Ne.fontSize,
    {
      ...Ne.fontSize,
      name: "changeFontSize",
      label: "Trend font-size"
    }
  ]
}, z = {
  measure: { ...B.measure },
  results: B.results1Measure,
  resultsComparison: B.results1MeasureVariant,
  primaryDateRange: void 0,
  comparisonPeriod: "Previous period",
  comparisonDateRange: { relativeTimeString: "Today", from: void 0, to: void 0 },
  fontSize: 100,
  hideMenu: true
}, oe = definePreview(d, z), A = (e) => ({
  from: e.dataset,
  select: [e.measure],
  limit: 1,
  filters: e.primaryDateRange && e.timeProperty ? [
    {
      property: e.timeProperty,
      operator: "inDateRange",
      value: e.primaryDateRange
    }
  ] : void 0
}), N = (e) => qIe(A(e)), L = (e, a) => ({
  from: e.dataset,
  select: [e.measure],
  limit: 1,
  filters: [
    {
      property: e.timeProperty,
      operator: "inDateRange",
      value: a
    }
  ]
}), T = (e, a) => {
  if (e.primaryDateRange && e.timeProperty && (a != null && a.comparisonDateRange))
    return qIe(L(e, a.comparisonDateRange));
}, te = (e, [a, s]) => ({
  ...e,
  comparisonPeriod: e.comparisonPeriod,
  comparisonDateRange: a == null ? void 0 : a.comparisonDateRange,
  setComparisonDateRange: (l) => s({ comparisonDateRange: l }),
  results: N(e),
  resultsComparison: T(e, a)
}), ue = {
  Component: d,
  meta: ae,
  preview: oe,
  config: {
    props: te
  }
};
const n = ue.preview, r = ue.meta, p = defineComponent(
  ue.Component,
  r,
  ue.config
);

export { p as default, r as meta, n as preview };
//# sourceMappingURL=KpiChartNumberComparisonPro-Cwn4x_f0-D9VV72iC.js.map
//# sourceMappingURL=KpiChartNumberComparisonPro-Cwn4x_f0-D9VV72iC.js.map
