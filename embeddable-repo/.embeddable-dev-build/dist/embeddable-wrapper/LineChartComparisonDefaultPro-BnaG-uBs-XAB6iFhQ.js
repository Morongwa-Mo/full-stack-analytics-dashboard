import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { C as Cm, o as we, r as yu, t as qb, e as en, x, v as lRe, q as qIe, K as KIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { y, _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { f } from './timeRange.utils-HfS6K7Bt-CuSa3Fdx-XWDDHBBL.js';
import { j, B as B$1 } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { I } from './styles.utils-BfpH_m_W-BVwxfT0G-FCoxpF9d.js';
import { q as q0, Z as Z0 } from './color.utils-BSg_DFOh-BjLJAtTN-CTFsLD5h.js';
import { m as m$1 } from './lines.utils-CEGfmIHB-Da4q6Hgz-CLP2ehfZ.js';
import { P as P$1 } from './charts.fillGaps.hooks-PCeJ5uuu-BBf-qw__-DRdlHrWG.js';
import { S, w } from './granularity.utils-zeE7RDIY-BVtJZ4mm-DS_02PJy.js';
import { N as Ne$1, G as Ge } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './index-BS0D-ICk.js';
import './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './quarterOfYear-BLO_Qaw2-CBVA3k0_-BAgvWFqb.js';
import './GranularitySelectField-USDUQ-JX-DwuCP4xb-BFi42HgU.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const P = "mainAxis", T = "comparisonAxis", _ = (e, s) => {
  var w2, k, R, A;
  const { data: a2, measure: o, dimension: t2, index: u, isPreviousPeriod: l, hasMinMaxYAxisRange: y$1, labels: n } = e, d = a2 == null ? void 0 : a2.map((f2) => f2[t2.name]), i = !!((w2 = o.inputs) != null && w2.connectGaps), h = n ? n.map((f2) => {
    const b = a2 == null ? void 0 : a2.find((g) => g[t2.name] === f2);
    return (b == null ? void 0 : b[o.name]) ?? (i ? 0 : null);
  }) : a2 == null ? void 0 : a2.map((f2) => f2[o.name] ?? (i ? 0 : null)), x2 = j(s), v = !!((k = o.inputs) != null && k[l ? "previousLineDashed" : "lineDashed"]), r = Cm(), c = (R = o.inputs) == null ? void 0 : R[l ? "previousLineColor" : "lineColor"], p = q0(c) ? c : I({
    dimensionOrMeasure: o,
    theme: s,
    color: "background",
    value: o.name,
    chartColors: r,
    index: u
  }), C = x2.dimensionOrMeasureTitle(o);
  return {
    xAxisID: l ? T : P,
    labels: d,
    rawLabel: C,
    label: (l ? `${y.t("common.compared")} ` : "") + C,
    data: h,
    backgroundColor: Z0(p, 0.5),
    pointBackgroundColor: p,
    borderDash: v ? [
      we("--em-linechart-line-dash", "0.25rem"),
      we("--em-linechart-line-gap", "0.25rem")
    ] : void 0,
    borderColor: p,
    fill: (A = o.inputs) == null ? void 0 : A.fillUnderLine,
    clip: y$1
  };
}, he = (e, s) => {
  if (!e.data)
    return {
      labels: [],
      datasets: [
        { xAxisID: P, data: [] },
        { xAxisID: T, data: [] }
      ]
    };
  const { data: a2, dataComparison: o, dimension: t2, measures: u, hasMinMaxYAxisRange: l } = e, n = t2.nativeType === "time" ? void 0 : o ? Array.from(
    /* @__PURE__ */ new Set([
      ...a2.map((h) => h[t2.name]),
      ...(o == null ? void 0 : o.map((h) => h[t2.name])) ?? []
    ])
  ) : void 0, d = u.map(
    (h, x2) => _(
      {
        data: a2,
        measure: h,
        dimension: t2,
        labels: n,
        hasMinMaxYAxisRange: l,
        index: x2
      },
      s
    )
  ), i = u.map(
    (h, x2) => _(
      {
        data: o,
        measure: h,
        dimension: t2,
        labels: n,
        hasMinMaxYAxisRange: l,
        index: x2,
        isPreviousPeriod: true
      },
      s
    )
  );
  return {
    labels: n ?? a2.map((h) => h[t2.name]),
    datasets: [...d, ...i]
  };
}, be = (e, s) => {
  const { dimension: a2, data: o, measures: t2, xAxisLabel: u } = e, l = j(s);
  return {
    plugins: {
      legend: {
        labels: {
          filter: (n, d) => {
            if (!n) return false;
            const i = d.datasets[n.datasetIndex];
            return Array.isArray(i.data) && i.data.length > 0;
          }
        }
      },
      datalabels: {
        labels: {
          value: {
            formatter: (n, d) => {
              const i = t2[d.datasetIndex % t2.length];
              return l.data(i, n);
            }
          }
        }
      },
      tooltip: {
        callbacks: {
          title: (n) => n[0] ? l.data(a2, n[0].label) : "",
          label: (n) => {
            const d = t2[n.datasetIndex % t2.length], i = n.raw;
            return `${n.dataset.label}: ${l.data(d, i)}`;
          }
        }
      }
    },
    scales: {
      x: {
        display: false
      },
      [P]: {
        title: {
          ...qb(),
          text: u,
          display: !!u
        },
        grid: { display: false },
        ticks: {
          ...yu(),
          callback(n) {
            var d;
            return l.data(a2, (d = o.labels) == null ? void 0 : d[n]);
          }
        }
      },
      [T]: {
        display: false
      },
      y: {
        ticks: {
          callback: (n) => l.data(t2[0], n)
        }
      }
    }
  };
}, xe = (e, s) => {
  var x2, v;
  const { dimension: a2, data: o, measures: t2, xAxisLabel: u, showComparisonAxis: l, showDataComparison: y2 } = e, n = j(s), d = ((x2 = o.datasets.find((r) => r.xAxisID === P)) == null ? void 0 : x2.labels) ?? [], i = ((v = o.datasets.find((r) => r.xAxisID === T)) == null ? void 0 : v.labels) ?? [];
  return {
    plugins: {
      legend: {
        labels: {
          filter: (r, c) => {
            if (!r) return false;
            const p = c.datasets[r.datasetIndex];
            return Array.isArray(p.data) && p.data.length > 0;
          }
        }
      },
      datalabels: {
        labels: {
          value: {
            formatter: (r, c) => {
              const p = t2[c.datasetIndex % t2.length];
              return n.data(p, r);
            }
          }
        }
      },
      tooltip: {
        callbacks: {
          title: (r) => {
            const c = r[0];
            if (!y2 && c)
              return n.data(a2, c.label);
            const p = c == null ? void 0 : c.dataIndex;
            if (p === void 0) return "";
            const C = d[p] && n.data(a2, d[p]), D = i[p] && n.data(a2, i[p]);
            return `${C ?? "-"} vs ${D ?? "-"}`;
          },
          label: (r) => {
            const c = t2[r.datasetIndex % t2.length], p = r.raw;
            return `${r.dataset.label}: ${n.data(c, p)}`;
          }
        }
      }
    },
    scales: {
      x: { display: false },
      [P]: {
        title: {
          ...qb(),
          text: u,
          display: !!((!l || i.length === 0) && u)
        },
        grid: { display: false },
        ticks: {
          ...yu(),
          callback: (r) => n.data(a2, d[Number(r)])
        }
      },
      [T]: {
        title: {
          ...qb(),
          text: u,
          display: !!u
        },
        grid: { display: false },
        display: l && i.length > 0,
        ticks: {
          ...yu(),
          callback: (r) => {
            if (i.length === 0)
              return "";
            const c = i[Number(r)];
            return c ? n.data(a2, c) : "";
          }
        }
      },
      y: {
        ticks: {
          callback: (r) => n.data(t2[0], r)
        }
      }
    }
  };
}, ye = (e, s) => {
  var u, l;
  const { onLineClicked: a2, dimension: o } = e, t2 = o.nativeType === "time" ? xe : be;
  return en(
    m$1({ onLineClicked: a2 }),
    t2(e, s),
    ((l = (u = s.charts) == null ? void 0 : u.lineChartComparisonDefaultPro) == null ? void 0 : l.options) || {}
  );
}, B = (e) => {
  const s = useTheme();
  _e(s);
  const { title: a2, description: o, tooltip: t2, xAxisLabel: u, yAxisLabel: l } = We(e), {
    hideMenu: y2,
    comparisonPeriod: n,
    measures: d,
    xAxis: i,
    reverseXAxis: h,
    showLegend: x$1,
    showLogarithmicScale: v,
    showTooltips: r,
    showValueLabels: c,
    yAxisRangeMax: p,
    yAxisRangeMin: C,
    primaryDateRange: D,
    comparisonDateRange: w2,
    showComparisonAxis: k,
    setGranularity: R,
    setComparisonDateRange: A,
    onLineClicked: f$1
  } = e;
  reactExports.useEffect(() => {
    const J = f(
      D,
      n,
      s
    );
    A == null || A(J);
  }, [n, JSON.stringify(D), s]);
  const b = P$1({
    results: e.results,
    dimension: i,
    externalDateBounds: D
  }), g = P$1({
    results: e.resultsComparison,
    dimension: i,
    externalDateBounds: w2
  }), V = !!(D && n), N = he(
    {
      data: b.data,
      dataComparison: V ? (g == null ? void 0 : g.data) ?? [] : void 0,
      dimension: i,
      measures: d,
      hasMinMaxYAxisRange: C != null || p != null
    },
    s
  ), U = ye(
    {
      data: N,
      dimension: i,
      measures: d,
      xAxisLabel: u,
      showComparisonAxis: k,
      showDataComparison: V,
      onLineClicked: f$1
    },
    s
  ), q = {
    isLoading: !!(b.isLoading || g != null && g.isLoading),
    data: !(b != null && b.data) && !(g != null && g.data) ? void 0 : [...b.data ?? [], ...(g == null ? void 0 : g.data) ?? []]
  }, H = !a2 && !o && !t2;
  return /* @__PURE__ */ x.jsxs(
    G,
    {
      data: q,
      dimensionsAndMeasures: [...d, i],
      errorMessage: b.error || (g == null ? void 0 : g.error),
      description: o,
      title: a2,
      hideMenu: y2,
      children: [
        R && /* @__PURE__ */ x.jsx(
          S,
          {
            hasMarginTop: H,
            dimension: i,
            onChange: R
          }
        ),
        /* @__PURE__ */ x.jsx(
          lRe,
          {
            data: N,
            reverseXAxis: h,
            showLegend: x$1,
            showLogarithmicScale: v,
            showTooltips: r,
            showValueLabels: c,
            xAxisLabel: u,
            yAxisLabel: l,
            yAxisRangeMax: p,
            yAxisRangeMin: C,
            options: U
          }
        )
      ]
    }
  );
}, Ce = {
  name: "LineChartComparisonDefaultPro",
  label: "Line Chart Comparison - Default",
  category: "Line Charts",
  inputs: [
    Ne$1.dataset,
    {
      ...Ne$1.measures,
      inputs: [
        ...Ne$1.measures.inputs,
        { ...Ge.boolean, name: "fillUnderLine", label: "Fill under line" },
        {
          ...Ge.color,
          category: "Component Settings",
          name: "lineColor",
          label: "Line color"
        },
        {
          ...Ge.color,
          category: "Component Settings",
          name: "previousLineColor",
          label: "Previous line color"
        },
        {
          ...Ge.boolean,
          name: "lineDashed",
          label: "Primary line dashed",
          defaultValue: false
        },
        {
          ...Ge.boolean,
          name: "previousLineDashed",
          label: "Compared line dashed",
          defaultValue: true
        },
        {
          ...Ge.boolean,
          name: "connectGaps",
          label: "Connect gaps",
          defaultValue: true
        }
      ]
    },
    { ...Ne$1.dimensionWithGranularitySelectField, label: "X-axis", name: "xAxis" },
    {
      ...Ne$1.timeRange,
      name: "primaryDateRange",
      label: "Primary date-range",
      description: "You can also connect this to a date range selector using its variable",
      category: "Component Data"
    },
    {
      ...Ne$1.comparisonPeriod,
      description: "You can also connect this to a comparison period selector using its variable",
      category: "Component Data"
    },
    {
      ...Ne$1.dimensionTime,
      name: "timePropertyForNonTimeDimensions",
      label: "Time property for non time dimensions",
      description: "Choose the time property used for filtering comparison ranges. This will be ignored if your x-axis is already time-based.",
      required: false
    },
    Ne$1.title,
    Ne$1.description,
    Ne$1.tooltip,
    Ne$1.showLegend,
    Ne$1.showTooltips,
    Ne$1.showValueLabels,
    Ne$1.showLogarithmicScale,
    Ne$1.xAxisLabel,
    Ne$1.yAxisLabel,
    Ne$1.reverseXAxis,
    Ne$1.yAxisRangeMin,
    Ne$1.yAxisRangeMax,
    {
      ...Ne$1.boolean,
      name: "showComparisonAxis",
      label: "Display a comparison X-axis",
      defaultValue: true,
      category: "Component Settings"
    },
    Ne$1.maxResults
  ],
  events: [
    {
      name: "onLineClicked",
      label: "A line is clicked",
      properties: [
        {
          name: "axisDimensionValue",
          label: "Clicked axis dimension value",
          type: "string"
        }
      ]
    }
  ]
}, $ = {
  xAxis: B$1.dimension,
  measures: [
    {
      ...B$1.measure,
      inputs: {
        previousLineDashed: true
      }
    }
  ],
  results: B$1.results1Measure2Dimensions,
  resultsComparison: B$1.results1Measure2DimensionsVariant,
  comparisonPeriod: "Previous period",
  comparisonDateRange: { relativeTimeString: "Previous period", from: void 0, to: void 0 },
  primaryDateRange: { relativeTimeString: "This week", from: void 0, to: void 0 },
  hideMenu: true
}, De = definePreview(B, $), Y = (e, s) => {
  const a2 = s ?? e.xAxis, o = [{ property: a2, direction: "asc" }], t2 = a2.nativeType === "time" ? a2 : e.timePropertyForNonTimeDimensions;
  return {
    limit: e.maxResults,
    from: e.dataset,
    select: [...e.measures, a2],
    orderBy: o,
    filters: e.primaryDateRange && t2 ? [{ property: t2, operator: "inDateRange", value: e.primaryDateRange }] : void 0
  };
}, W = (e, s) => qIe(Y(e, s)), z = (e, s, a2) => {
  const o = [{ property: s, direction: "asc" }], t2 = s.nativeType === "time" ? s : e.timePropertyForNonTimeDimensions;
  return {
    limit: e.maxResults,
    from: e.dataset,
    select: [...e.measures, s],
    orderBy: o,
    filters: [{ property: t2, operator: "inDateRange", value: a2 }]
  };
}, E = (e, s, a2) => {
  const o = s.nativeType === "time" ? s : e.timePropertyForNonTimeDimensions;
  if (e.primaryDateRange && o && (a2 != null && a2.comparisonDateRange))
    return qIe(z(e, s, a2.comparisonDateRange));
}, fe = {
  onLineClicked: (e) => ({
    axisDimensionValue: e.dimensionValue ?? KIe.noFilter()
  })
}, ve = (e, [s, a2]) => {
  const o = w(e.xAxis, s == null ? void 0 : s.granularity);
  return {
    ...e,
    xAxis: o,
    setGranularity: (t2) => a2({ ...s, granularity: t2 }),
    comparisonDateRange: s == null ? void 0 : s.comparisonDateRange,
    setComparisonDateRange: (t2) => a2({ ...s, comparisonDateRange: t2 }),
    results: W(e, o),
    resultsComparison: E(e, o, s)
  };
}, Ne = {
  Component: B,
  meta: Ce,
  preview: De,
  config: {
    props: ve,
    events: fe
  }
};
const a = Ne.preview, t = Ne.meta, m = defineComponent(
  Ne.Component,
  t,
  Ne.config
);

export { m as default, t as meta, a as preview };
//# sourceMappingURL=LineChartComparisonDefaultPro-BnaG-uBs-XAB6iFhQ.js.map
//# sourceMappingURL=LineChartComparisonDefaultPro-BnaG-uBs-XAB6iFhQ.js.map
