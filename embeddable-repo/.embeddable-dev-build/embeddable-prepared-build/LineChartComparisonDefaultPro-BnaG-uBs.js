import { d as definePreview, u as useTheme, a as defineComponent } from "./index.esm-nuP141l8.js";
import { x, o as lRe, e as en, C as Cm, r as we, t as yu, v as qb, K as KIe, q as qIe } from "./index-CnLFSN1m-CiKoWgQc.js";
import { _ as _e, W as We, y } from "./component.utils-CbnwaSi1-v-XPM_Ab.js";
import { G } from "./ChartCard-DTKoe0RT-CvFYVyHo.js";
import { r as reactExports } from "./embeddable-entry-point-DBGUUjol.js";
import { f } from "./timeRange.utils-HfS6K7Bt-CuSa3Fdx.js";
import { B as B$1, j } from "./preview.data.constants-BZ8b6ZQ1-BtTomI2a.js";
import { I } from "./styles.utils-BfpH_m_W-BVwxfT0G.js";
import { q as q0, Z as Z0 } from "./color.utils-BSg_DFOh-BjLJAtTN.js";
import { m as m$1 } from "./lines.utils-CEGfmIHB-Da4q6Hgz.js";
import { P as P$1 } from "./charts.fillGaps.hooks-PCeJ5uuu-BBf-qw__.js";
import { S, w } from "./granularity.utils-zeE7RDIY-BVtJZ4mm.js";
import { N as Ne$1, G as Ge } from "./component.inputs.constants-Cs7gX1rI-ChA2Mp06.js";
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
export {
  m as default,
  t as meta,
  a as preview
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluZUNoYXJ0Q29tcGFyaXNvbkRlZmF1bHRQcm8tQm5hRy11QnMuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2RlZmluaXRpb24tQlN3V3lXbkguanMiLCIvVXNlcnMvbW9yb25nd2EvZW1iZWRkYWJsZV9odWJzcG90X2Rhc2gvZW1iZWRkYWJsZS1yZXBvL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vcmVtYXJrYWJsZS1wcm8vZGlzdC9MaW5lQ2hhcnRDb21wYXJpc29uRGVmYXVsdFByby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtIGFzIEssIGcgYXMgUSwgYiBhcyBqLCB4IGFzIE8sIHkgYXMgSSwgaiBhcyBTLCBMIGFzIFosIFYgYXMgZWUsIGwgYXMgWCB9IGZyb20gXCIuL2luZGV4LUNuTEZTTjFtLmpzXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSBhcyBhZSwgZGVmaW5lUHJldmlldyBhcyBzZSB9IGZyb20gXCJAZW1iZWRkYWJsZS5jb20vcmVhY3RcIjtcbmltcG9ydCB7IGkgYXMgb2UsIGEgYXMgbmUsIHIgYXMgdGUgfSBmcm9tIFwiLi9jb21wb25lbnQudXRpbHMtQ2Jud2FTaTEuanNcIjtcbmltcG9ydCB7IEMgYXMgaWUgfSBmcm9tIFwiLi9DaGFydENhcmQtRFRLb2UwUlQuanNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCBhcyByZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZyBhcyBsZSB9IGZyb20gXCIuL3RpbWVSYW5nZS51dGlscy1IZlM2SzdCdC5qc1wiO1xuaW1wb3J0IHsgYSBhcyBGLCBwIGFzIE0gfSBmcm9tIFwiLi9wcmV2aWV3LmRhdGEuY29uc3RhbnRzLUJaOGI2WlExLmpzXCI7XG5pbXBvcnQgeyBhIGFzIG1lIH0gZnJvbSBcIi4vc3R5bGVzLnV0aWxzLUJmcEhfbV9XLmpzXCI7XG5pbXBvcnQgeyBpIGFzIGRlLCBzIGFzIGNlIH0gZnJvbSBcIi4vY29sb3IudXRpbHMtQlNnX0RGT2guanNcIjtcbmltcG9ydCB7IGcgYXMgcGUgfSBmcm9tIFwiLi9saW5lcy51dGlscy1DRUdmbUlIQi5qc1wiO1xuaW1wb3J0IHsgdSBhcyBHIH0gZnJvbSBcIi4vY2hhcnRzLmZpbGxHYXBzLmhvb2tzLVBDZUo1dXV1LmpzXCI7XG5pbXBvcnQgeyBDIGFzIHVlLCBnIGFzIGdlIH0gZnJvbSBcIi4vZ3JhbnVsYXJpdHkudXRpbHMtemVFN1JESVkuanNcIjtcbmltcG9ydCB7IGkgYXMgbSwgcyBhcyBMIH0gZnJvbSBcIi4vY29tcG9uZW50LmlucHV0cy5jb25zdGFudHMtQ3M3Z1gxckkuanNcIjtcbmNvbnN0IFAgPSBcIm1haW5BeGlzXCIsIFQgPSBcImNvbXBhcmlzb25BeGlzXCIsIF8gPSAoZSwgcykgPT4ge1xuICB2YXIgdywgaywgUiwgQTtcbiAgY29uc3QgeyBkYXRhOiBhLCBtZWFzdXJlOiBvLCBkaW1lbnNpb246IHQsIGluZGV4OiB1LCBpc1ByZXZpb3VzUGVyaW9kOiBsLCBoYXNNaW5NYXhZQXhpc1JhbmdlOiB5LCBsYWJlbHM6IG4gfSA9IGUsIGQgPSBhID09IG51bGwgPyB2b2lkIDAgOiBhLm1hcCgoZikgPT4gZlt0Lm5hbWVdKSwgaSA9ICEhKCh3ID0gby5pbnB1dHMpICE9IG51bGwgJiYgdy5jb25uZWN0R2FwcyksIGggPSBuID8gbi5tYXAoKGYpID0+IHtcbiAgICBjb25zdCBiID0gYSA9PSBudWxsID8gdm9pZCAwIDogYS5maW5kKChnKSA9PiBnW3QubmFtZV0gPT09IGYpO1xuICAgIHJldHVybiAoYiA9PSBudWxsID8gdm9pZCAwIDogYltvLm5hbWVdKSA/PyAoaSA/IDAgOiBudWxsKTtcbiAgfSkgOiBhID09IG51bGwgPyB2b2lkIDAgOiBhLm1hcCgoZikgPT4gZltvLm5hbWVdID8/IChpID8gMCA6IG51bGwpKSwgeCA9IEYocyksIHYgPSAhISgoayA9IG8uaW5wdXRzKSAhPSBudWxsICYmIGtbbCA/IFwicHJldmlvdXNMaW5lRGFzaGVkXCIgOiBcImxpbmVEYXNoZWRcIl0pLCByID0gUSgpLCBjID0gKFIgPSBvLmlucHV0cykgPT0gbnVsbCA/IHZvaWQgMCA6IFJbbCA/IFwicHJldmlvdXNMaW5lQ29sb3JcIiA6IFwibGluZUNvbG9yXCJdLCBwID0gZGUoYykgPyBjIDogbWUoe1xuICAgIGRpbWVuc2lvbk9yTWVhc3VyZTogbyxcbiAgICB0aGVtZTogcyxcbiAgICBjb2xvcjogXCJiYWNrZ3JvdW5kXCIsXG4gICAgdmFsdWU6IG8ubmFtZSxcbiAgICBjaGFydENvbG9yczogcixcbiAgICBpbmRleDogdVxuICB9KSwgQyA9IHguZGltZW5zaW9uT3JNZWFzdXJlVGl0bGUobyk7XG4gIHJldHVybiB7XG4gICAgeEF4aXNJRDogbCA/IFQgOiBQLFxuICAgIGxhYmVsczogZCxcbiAgICByYXdMYWJlbDogQyxcbiAgICBsYWJlbDogKGwgPyBgJHtvZS50KFwiY29tbW9uLmNvbXBhcmVkXCIpfSBgIDogXCJcIikgKyBDLFxuICAgIGRhdGE6IGgsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjZShwLCAwLjUpLFxuICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBwLFxuICAgIGJvcmRlckRhc2g6IHYgPyBbXG4gICAgICBqKFwiLS1lbS1saW5lY2hhcnQtbGluZS1kYXNoXCIsIFwiMC4yNXJlbVwiKSxcbiAgICAgIGooXCItLWVtLWxpbmVjaGFydC1saW5lLWdhcFwiLCBcIjAuMjVyZW1cIilcbiAgICBdIDogdm9pZCAwLFxuICAgIGJvcmRlckNvbG9yOiBwLFxuICAgIGZpbGw6IChBID0gby5pbnB1dHMpID09IG51bGwgPyB2b2lkIDAgOiBBLmZpbGxVbmRlckxpbmUsXG4gICAgY2xpcDogeVxuICB9O1xufSwgaGUgPSAoZSwgcykgPT4ge1xuICBpZiAoIWUuZGF0YSlcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWxzOiBbXSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHsgeEF4aXNJRDogUCwgZGF0YTogW10gfSxcbiAgICAgICAgeyB4QXhpc0lEOiBULCBkYXRhOiBbXSB9XG4gICAgICBdXG4gICAgfTtcbiAgY29uc3QgeyBkYXRhOiBhLCBkYXRhQ29tcGFyaXNvbjogbywgZGltZW5zaW9uOiB0LCBtZWFzdXJlczogdSwgaGFzTWluTWF4WUF4aXNSYW5nZTogbCB9ID0gZSwgbiA9IHQubmF0aXZlVHlwZSA9PT0gXCJ0aW1lXCIgPyB2b2lkIDAgOiBvID8gQXJyYXkuZnJvbShcbiAgICAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXG4gICAgICAuLi5hLm1hcCgoaCkgPT4gaFt0Lm5hbWVdKSxcbiAgICAgIC4uLihvID09IG51bGwgPyB2b2lkIDAgOiBvLm1hcCgoaCkgPT4gaFt0Lm5hbWVdKSkgPz8gW11cbiAgICBdKVxuICApIDogdm9pZCAwLCBkID0gdS5tYXAoXG4gICAgKGgsIHgpID0+IF8oXG4gICAgICB7XG4gICAgICAgIGRhdGE6IGEsXG4gICAgICAgIG1lYXN1cmU6IGgsXG4gICAgICAgIGRpbWVuc2lvbjogdCxcbiAgICAgICAgbGFiZWxzOiBuLFxuICAgICAgICBoYXNNaW5NYXhZQXhpc1JhbmdlOiBsLFxuICAgICAgICBpbmRleDogeFxuICAgICAgfSxcbiAgICAgIHNcbiAgICApXG4gICksIGkgPSB1Lm1hcChcbiAgICAoaCwgeCkgPT4gXyhcbiAgICAgIHtcbiAgICAgICAgZGF0YTogbyxcbiAgICAgICAgbWVhc3VyZTogaCxcbiAgICAgICAgZGltZW5zaW9uOiB0LFxuICAgICAgICBsYWJlbHM6IG4sXG4gICAgICAgIGhhc01pbk1heFlBeGlzUmFuZ2U6IGwsXG4gICAgICAgIGluZGV4OiB4LFxuICAgICAgICBpc1ByZXZpb3VzUGVyaW9kOiAhMFxuICAgICAgfSxcbiAgICAgIHNcbiAgICApXG4gICk7XG4gIHJldHVybiB7XG4gICAgbGFiZWxzOiBuID8/IGEubWFwKChoKSA9PiBoW3QubmFtZV0pLFxuICAgIGRhdGFzZXRzOiBbLi4uZCwgLi4uaV1cbiAgfTtcbn0sIGJlID0gKGUsIHMpID0+IHtcbiAgY29uc3QgeyBkaW1lbnNpb246IGEsIGRhdGE6IG8sIG1lYXN1cmVzOiB0LCB4QXhpc0xhYmVsOiB1IH0gPSBlLCBsID0gRihzKTtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiB7XG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgZmlsdGVyOiAobiwgZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuKSByZXR1cm4gITE7XG4gICAgICAgICAgICBjb25zdCBpID0gZC5kYXRhc2V0c1tuLmRhdGFzZXRJbmRleF07XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpLmRhdGEpICYmIGkuZGF0YS5sZW5ndGggPiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRhdGFsYWJlbHM6IHtcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKG4sIGQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaSA9IHRbZC5kYXRhc2V0SW5kZXggJSB0Lmxlbmd0aF07XG4gICAgICAgICAgICAgIHJldHVybiBsLmRhdGEoaSwgbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICB0aXRsZTogKG4pID0+IG5bMF0gPyBsLmRhdGEoYSwgblswXS5sYWJlbCkgOiBcIlwiLFxuICAgICAgICAgIGxhYmVsOiAobikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZCA9IHRbbi5kYXRhc2V0SW5kZXggJSB0Lmxlbmd0aF0sIGkgPSBuLnJhdztcbiAgICAgICAgICAgIHJldHVybiBgJHtuLmRhdGFzZXQubGFiZWx9OiAke2wuZGF0YShkLCBpKX1gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2NhbGVzOiB7XG4gICAgICB4OiB7XG4gICAgICAgIGRpc3BsYXk6ICExXG4gICAgICB9LFxuICAgICAgW1BdOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgLi4uSSgpLFxuICAgICAgICAgIHRleHQ6IHUsXG4gICAgICAgICAgZGlzcGxheTogISF1XG4gICAgICAgIH0sXG4gICAgICAgIGdyaWQ6IHsgZGlzcGxheTogITEgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAuLi5PKCksXG4gICAgICAgICAgY2FsbGJhY2sobikge1xuICAgICAgICAgICAgdmFyIGQ7XG4gICAgICAgICAgICByZXR1cm4gbC5kYXRhKGEsIChkID0gby5sYWJlbHMpID09IG51bGwgPyB2b2lkIDAgOiBkW25dKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbVF06IHtcbiAgICAgICAgZGlzcGxheTogITFcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgY2FsbGJhY2s6IChuKSA9PiBsLmRhdGEodFswXSwgbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn0sIHhlID0gKGUsIHMpID0+IHtcbiAgdmFyIHgsIHY7XG4gIGNvbnN0IHsgZGltZW5zaW9uOiBhLCBkYXRhOiBvLCBtZWFzdXJlczogdCwgeEF4aXNMYWJlbDogdSwgc2hvd0NvbXBhcmlzb25BeGlzOiBsLCBzaG93RGF0YUNvbXBhcmlzb246IHkgfSA9IGUsIG4gPSBGKHMpLCBkID0gKCh4ID0gby5kYXRhc2V0cy5maW5kKChyKSA9PiByLnhBeGlzSUQgPT09IFApKSA9PSBudWxsID8gdm9pZCAwIDogeC5sYWJlbHMpID8/IFtdLCBpID0gKCh2ID0gby5kYXRhc2V0cy5maW5kKChyKSA9PiByLnhBeGlzSUQgPT09IFQpKSA9PSBudWxsID8gdm9pZCAwIDogdi5sYWJlbHMpID8/IFtdO1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IHtcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICBmaWx0ZXI6IChyLCBjKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXIpIHJldHVybiAhMTtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBjLmRhdGFzZXRzW3IuZGF0YXNldEluZGV4XTtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHAuZGF0YSkgJiYgcC5kYXRhLmxlbmd0aCA+IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGF0YWxhYmVsczoge1xuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAociwgYykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwID0gdFtjLmRhdGFzZXRJbmRleCAlIHQubGVuZ3RoXTtcbiAgICAgICAgICAgICAgcmV0dXJuIG4uZGF0YShwLCByKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIHRpdGxlOiAocikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYyA9IHJbMF07XG4gICAgICAgICAgICBpZiAoIXkgJiYgYylcbiAgICAgICAgICAgICAgcmV0dXJuIG4uZGF0YShhLCBjLmxhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBjID09IG51bGwgPyB2b2lkIDAgOiBjLmRhdGFJbmRleDtcbiAgICAgICAgICAgIGlmIChwID09PSB2b2lkIDApIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgY29uc3QgQyA9IGRbcF0gJiYgbi5kYXRhKGEsIGRbcF0pLCBEID0gaVtwXSAmJiBuLmRhdGEoYSwgaVtwXSk7XG4gICAgICAgICAgICByZXR1cm4gYCR7QyA/PyBcIi1cIn0gdnMgJHtEID8/IFwiLVwifWA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogKHIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0W3IuZGF0YXNldEluZGV4ICUgdC5sZW5ndGhdLCBwID0gci5yYXc7XG4gICAgICAgICAgICByZXR1cm4gYCR7ci5kYXRhc2V0LmxhYmVsfTogJHtuLmRhdGEoYywgcCl9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeDogeyBkaXNwbGF5OiAhMSB9LFxuICAgICAgW1BdOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgLi4uSSgpLFxuICAgICAgICAgIHRleHQ6IHUsXG4gICAgICAgICAgZGlzcGxheTogISEoKCFsIHx8IGkubGVuZ3RoID09PSAwKSAmJiB1KVxuICAgICAgICB9LFxuICAgICAgICBncmlkOiB7IGRpc3BsYXk6ICExIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgLi4uTygpLFxuICAgICAgICAgIGNhbGxiYWNrOiAocikgPT4gbi5kYXRhKGEsIGRbTnVtYmVyKHIpXSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtUXToge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIC4uLkkoKSxcbiAgICAgICAgICB0ZXh0OiB1LFxuICAgICAgICAgIGRpc3BsYXk6ICEhdVxuICAgICAgICB9LFxuICAgICAgICBncmlkOiB7IGRpc3BsYXk6ICExIH0sXG4gICAgICAgIGRpc3BsYXk6IGwgJiYgaS5sZW5ndGggPiAwLFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIC4uLk8oKSxcbiAgICAgICAgICBjYWxsYmFjazogKHIpID0+IHtcbiAgICAgICAgICAgIGlmIChpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICBjb25zdCBjID0gaVtOdW1iZXIocildO1xuICAgICAgICAgICAgcmV0dXJuIGMgPyBuLmRhdGEoYSwgYykgOiBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBjYWxsYmFjazogKHIpID0+IG4uZGF0YSh0WzBdLCByKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufSwgeWUgPSAoZSwgcykgPT4ge1xuICB2YXIgdSwgbDtcbiAgY29uc3QgeyBvbkxpbmVDbGlja2VkOiBhLCBkaW1lbnNpb246IG8gfSA9IGUsIHQgPSBvLm5hdGl2ZVR5cGUgPT09IFwidGltZVwiID8geGUgOiBiZTtcbiAgcmV0dXJuIEsoXG4gICAgcGUoeyBvbkxpbmVDbGlja2VkOiBhIH0pLFxuICAgIHQoZSwgcyksXG4gICAgKChsID0gKHUgPSBzLmNoYXJ0cykgPT0gbnVsbCA/IHZvaWQgMCA6IHUubGluZUNoYXJ0Q29tcGFyaXNvbkRlZmF1bHRQcm8pID09IG51bGwgPyB2b2lkIDAgOiBsLm9wdGlvbnMpIHx8IHt9XG4gICk7XG59LCBCID0gKGUpID0+IHtcbiAgY29uc3QgcyA9IGFlKCk7XG4gIG5lKHMpO1xuICBjb25zdCB7IHRpdGxlOiBhLCBkZXNjcmlwdGlvbjogbywgdG9vbHRpcDogdCwgeEF4aXNMYWJlbDogdSwgeUF4aXNMYWJlbDogbCB9ID0gdGUoZSksIHtcbiAgICBoaWRlTWVudTogeSxcbiAgICBjb21wYXJpc29uUGVyaW9kOiBuLFxuICAgIG1lYXN1cmVzOiBkLFxuICAgIHhBeGlzOiBpLFxuICAgIHJldmVyc2VYQXhpczogaCxcbiAgICBzaG93TGVnZW5kOiB4LFxuICAgIHNob3dMb2dhcml0aG1pY1NjYWxlOiB2LFxuICAgIHNob3dUb29sdGlwczogcixcbiAgICBzaG93VmFsdWVMYWJlbHM6IGMsXG4gICAgeUF4aXNSYW5nZU1heDogcCxcbiAgICB5QXhpc1JhbmdlTWluOiBDLFxuICAgIHByaW1hcnlEYXRlUmFuZ2U6IEQsXG4gICAgY29tcGFyaXNvbkRhdGVSYW5nZTogdyxcbiAgICBzaG93Q29tcGFyaXNvbkF4aXM6IGssXG4gICAgc2V0R3JhbnVsYXJpdHk6IFIsXG4gICAgc2V0Q29tcGFyaXNvbkRhdGVSYW5nZTogQSxcbiAgICBvbkxpbmVDbGlja2VkOiBmXG4gIH0gPSBlO1xuICByZSgoKSA9PiB7XG4gICAgY29uc3QgSiA9IGxlKFxuICAgICAgRCxcbiAgICAgIG4sXG4gICAgICBzXG4gICAgKTtcbiAgICBBID09IG51bGwgfHwgQShKKTtcbiAgfSwgW24sIEpTT04uc3RyaW5naWZ5KEQpLCBzXSk7XG4gIGNvbnN0IGIgPSBHKHtcbiAgICByZXN1bHRzOiBlLnJlc3VsdHMsXG4gICAgZGltZW5zaW9uOiBpLFxuICAgIGV4dGVybmFsRGF0ZUJvdW5kczogRFxuICB9KSwgZyA9IEcoe1xuICAgIHJlc3VsdHM6IGUucmVzdWx0c0NvbXBhcmlzb24sXG4gICAgZGltZW5zaW9uOiBpLFxuICAgIGV4dGVybmFsRGF0ZUJvdW5kczogd1xuICB9KSwgViA9ICEhKEQgJiYgbiksIE4gPSBoZShcbiAgICB7XG4gICAgICBkYXRhOiBiLmRhdGEsXG4gICAgICBkYXRhQ29tcGFyaXNvbjogViA/IChnID09IG51bGwgPyB2b2lkIDAgOiBnLmRhdGEpID8/IFtdIDogdm9pZCAwLFxuICAgICAgZGltZW5zaW9uOiBpLFxuICAgICAgbWVhc3VyZXM6IGQsXG4gICAgICBoYXNNaW5NYXhZQXhpc1JhbmdlOiBDICE9IG51bGwgfHwgcCAhPSBudWxsXG4gICAgfSxcbiAgICBzXG4gICksIFUgPSB5ZShcbiAgICB7XG4gICAgICBkYXRhOiBOLFxuICAgICAgZGltZW5zaW9uOiBpLFxuICAgICAgbWVhc3VyZXM6IGQsXG4gICAgICB4QXhpc0xhYmVsOiB1LFxuICAgICAgc2hvd0NvbXBhcmlzb25BeGlzOiBrLFxuICAgICAgc2hvd0RhdGFDb21wYXJpc29uOiBWLFxuICAgICAgb25MaW5lQ2xpY2tlZDogZlxuICAgIH0sXG4gICAgc1xuICApLCBxID0ge1xuICAgIGlzTG9hZGluZzogISEoYi5pc0xvYWRpbmcgfHwgZyAhPSBudWxsICYmIGcuaXNMb2FkaW5nKSxcbiAgICBkYXRhOiAhKGIgIT0gbnVsbCAmJiBiLmRhdGEpICYmICEoZyAhPSBudWxsICYmIGcuZGF0YSkgPyB2b2lkIDAgOiBbLi4uYi5kYXRhID8/IFtdLCAuLi4oZyA9PSBudWxsID8gdm9pZCAwIDogZy5kYXRhKSA/PyBbXV1cbiAgfSwgSCA9ICFhICYmICFvICYmICF0O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFMuanN4cyhcbiAgICBpZSxcbiAgICB7XG4gICAgICBkYXRhOiBxLFxuICAgICAgZGltZW5zaW9uc0FuZE1lYXN1cmVzOiBbLi4uZCwgaV0sXG4gICAgICBlcnJvck1lc3NhZ2U6IGIuZXJyb3IgfHwgKGcgPT0gbnVsbCA/IHZvaWQgMCA6IGcuZXJyb3IpLFxuICAgICAgZGVzY3JpcHRpb246IG8sXG4gICAgICB0aXRsZTogYSxcbiAgICAgIGhpZGVNZW51OiB5LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgUiAmJiAvKiBAX19QVVJFX18gKi8gUy5qc3goXG4gICAgICAgICAgdWUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGFzTWFyZ2luVG9wOiBILFxuICAgICAgICAgICAgZGltZW5zaW9uOiBpLFxuICAgICAgICAgICAgb25DaGFuZ2U6IFJcbiAgICAgICAgICB9XG4gICAgICAgICksXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBTLmpzeChcbiAgICAgICAgICBaLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGE6IE4sXG4gICAgICAgICAgICByZXZlcnNlWEF4aXM6IGgsXG4gICAgICAgICAgICBzaG93TGVnZW5kOiB4LFxuICAgICAgICAgICAgc2hvd0xvZ2FyaXRobWljU2NhbGU6IHYsXG4gICAgICAgICAgICBzaG93VG9vbHRpcHM6IHIsXG4gICAgICAgICAgICBzaG93VmFsdWVMYWJlbHM6IGMsXG4gICAgICAgICAgICB4QXhpc0xhYmVsOiB1LFxuICAgICAgICAgICAgeUF4aXNMYWJlbDogbCxcbiAgICAgICAgICAgIHlBeGlzUmFuZ2VNYXg6IHAsXG4gICAgICAgICAgICB5QXhpc1JhbmdlTWluOiBDLFxuICAgICAgICAgICAgb3B0aW9uczogVVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgXVxuICAgIH1cbiAgKTtcbn0sIFZlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZGVmYXVsdDogQlxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgQ2UgPSB7XG4gIG5hbWU6IFwiTGluZUNoYXJ0Q29tcGFyaXNvbkRlZmF1bHRQcm9cIixcbiAgbGFiZWw6IFwiTGluZSBDaGFydCBDb21wYXJpc29uIC0gRGVmYXVsdFwiLFxuICBjYXRlZ29yeTogXCJMaW5lIENoYXJ0c1wiLFxuICBpbnB1dHM6IFtcbiAgICBtLmRhdGFzZXQsXG4gICAge1xuICAgICAgLi4ubS5tZWFzdXJlcyxcbiAgICAgIGlucHV0czogW1xuICAgICAgICAuLi5tLm1lYXN1cmVzLmlucHV0cyxcbiAgICAgICAgeyAuLi5MLmJvb2xlYW4sIG5hbWU6IFwiZmlsbFVuZGVyTGluZVwiLCBsYWJlbDogXCJGaWxsIHVuZGVyIGxpbmVcIiB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uTC5jb2xvcixcbiAgICAgICAgICBjYXRlZ29yeTogXCJDb21wb25lbnQgU2V0dGluZ3NcIixcbiAgICAgICAgICBuYW1lOiBcImxpbmVDb2xvclwiLFxuICAgICAgICAgIGxhYmVsOiBcIkxpbmUgY29sb3JcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uTC5jb2xvcixcbiAgICAgICAgICBjYXRlZ29yeTogXCJDb21wb25lbnQgU2V0dGluZ3NcIixcbiAgICAgICAgICBuYW1lOiBcInByZXZpb3VzTGluZUNvbG9yXCIsXG4gICAgICAgICAgbGFiZWw6IFwiUHJldmlvdXMgbGluZSBjb2xvclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5MLmJvb2xlYW4sXG4gICAgICAgICAgbmFtZTogXCJsaW5lRGFzaGVkXCIsXG4gICAgICAgICAgbGFiZWw6IFwiUHJpbWFyeSBsaW5lIGRhc2hlZFwiLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogITFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLkwuYm9vbGVhbixcbiAgICAgICAgICBuYW1lOiBcInByZXZpb3VzTGluZURhc2hlZFwiLFxuICAgICAgICAgIGxhYmVsOiBcIkNvbXBhcmVkIGxpbmUgZGFzaGVkXCIsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiAhMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uTC5ib29sZWFuLFxuICAgICAgICAgIG5hbWU6IFwiY29ubmVjdEdhcHNcIixcbiAgICAgICAgICBsYWJlbDogXCJDb25uZWN0IGdhcHNcIixcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6ICEwXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHsgLi4ubS5kaW1lbnNpb25XaXRoR3JhbnVsYXJpdHlTZWxlY3RGaWVsZCwgbGFiZWw6IFwiWC1heGlzXCIsIG5hbWU6IFwieEF4aXNcIiB9LFxuICAgIHtcbiAgICAgIC4uLm0udGltZVJhbmdlLFxuICAgICAgbmFtZTogXCJwcmltYXJ5RGF0ZVJhbmdlXCIsXG4gICAgICBsYWJlbDogXCJQcmltYXJ5IGRhdGUtcmFuZ2VcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIllvdSBjYW4gYWxzbyBjb25uZWN0IHRoaXMgdG8gYSBkYXRlIHJhbmdlIHNlbGVjdG9yIHVzaW5nIGl0cyB2YXJpYWJsZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ29tcG9uZW50IERhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgLi4ubS5jb21wYXJpc29uUGVyaW9kLFxuICAgICAgZGVzY3JpcHRpb246IFwiWW91IGNhbiBhbHNvIGNvbm5lY3QgdGhpcyB0byBhIGNvbXBhcmlzb24gcGVyaW9kIHNlbGVjdG9yIHVzaW5nIGl0cyB2YXJpYWJsZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ29tcG9uZW50IERhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgLi4ubS5kaW1lbnNpb25UaW1lLFxuICAgICAgbmFtZTogXCJ0aW1lUHJvcGVydHlGb3JOb25UaW1lRGltZW5zaW9uc1wiLFxuICAgICAgbGFiZWw6IFwiVGltZSBwcm9wZXJ0eSBmb3Igbm9uIHRpbWUgZGltZW5zaW9uc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ2hvb3NlIHRoZSB0aW1lIHByb3BlcnR5IHVzZWQgZm9yIGZpbHRlcmluZyBjb21wYXJpc29uIHJhbmdlcy4gVGhpcyB3aWxsIGJlIGlnbm9yZWQgaWYgeW91ciB4LWF4aXMgaXMgYWxyZWFkeSB0aW1lLWJhc2VkLlwiLFxuICAgICAgcmVxdWlyZWQ6ICExXG4gICAgfSxcbiAgICBtLnRpdGxlLFxuICAgIG0uZGVzY3JpcHRpb24sXG4gICAgbS50b29sdGlwLFxuICAgIG0uc2hvd0xlZ2VuZCxcbiAgICBtLnNob3dUb29sdGlwcyxcbiAgICBtLnNob3dWYWx1ZUxhYmVscyxcbiAgICBtLnNob3dMb2dhcml0aG1pY1NjYWxlLFxuICAgIG0ueEF4aXNMYWJlbCxcbiAgICBtLnlBeGlzTGFiZWwsXG4gICAgbS5yZXZlcnNlWEF4aXMsXG4gICAgbS55QXhpc1JhbmdlTWluLFxuICAgIG0ueUF4aXNSYW5nZU1heCxcbiAgICB7XG4gICAgICAuLi5tLmJvb2xlYW4sXG4gICAgICBuYW1lOiBcInNob3dDb21wYXJpc29uQXhpc1wiLFxuICAgICAgbGFiZWw6IFwiRGlzcGxheSBhIGNvbXBhcmlzb24gWC1heGlzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwLFxuICAgICAgY2F0ZWdvcnk6IFwiQ29tcG9uZW50IFNldHRpbmdzXCJcbiAgICB9LFxuICAgIG0ubWF4UmVzdWx0c1xuICBdLFxuICBldmVudHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIm9uTGluZUNsaWNrZWRcIixcbiAgICAgIGxhYmVsOiBcIkEgbGluZSBpcyBjbGlja2VkXCIsXG4gICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImF4aXNEaW1lbnNpb25WYWx1ZVwiLFxuICAgICAgICAgIGxhYmVsOiBcIkNsaWNrZWQgYXhpcyBkaW1lbnNpb24gdmFsdWVcIixcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0sICQgPSB7XG4gIHhBeGlzOiBNLmRpbWVuc2lvbixcbiAgbWVhc3VyZXM6IFtcbiAgICB7XG4gICAgICAuLi5NLm1lYXN1cmUsXG4gICAgICBpbnB1dHM6IHtcbiAgICAgICAgcHJldmlvdXNMaW5lRGFzaGVkOiAhMFxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgcmVzdWx0czogTS5yZXN1bHRzMU1lYXN1cmUyRGltZW5zaW9ucyxcbiAgcmVzdWx0c0NvbXBhcmlzb246IE0ucmVzdWx0czFNZWFzdXJlMkRpbWVuc2lvbnNWYXJpYW50LFxuICBjb21wYXJpc29uUGVyaW9kOiBcIlByZXZpb3VzIHBlcmlvZFwiLFxuICBjb21wYXJpc29uRGF0ZVJhbmdlOiB7IHJlbGF0aXZlVGltZVN0cmluZzogXCJQcmV2aW91cyBwZXJpb2RcIiwgZnJvbTogdm9pZCAwLCB0bzogdm9pZCAwIH0sXG4gIHByaW1hcnlEYXRlUmFuZ2U6IHsgcmVsYXRpdmVUaW1lU3RyaW5nOiBcIlRoaXMgd2Vla1wiLCBmcm9tOiB2b2lkIDAsIHRvOiB2b2lkIDAgfSxcbiAgaGlkZU1lbnU6ICEwXG59LCBEZSA9IHNlKEIsICQpLCBZID0gKGUsIHMpID0+IHtcbiAgY29uc3QgYSA9IHMgPz8gZS54QXhpcywgbyA9IFt7IHByb3BlcnR5OiBhLCBkaXJlY3Rpb246IFwiYXNjXCIgfV0sIHQgPSBhLm5hdGl2ZVR5cGUgPT09IFwidGltZVwiID8gYSA6IGUudGltZVByb3BlcnR5Rm9yTm9uVGltZURpbWVuc2lvbnM7XG4gIHJldHVybiB7XG4gICAgbGltaXQ6IGUubWF4UmVzdWx0cyxcbiAgICBmcm9tOiBlLmRhdGFzZXQsXG4gICAgc2VsZWN0OiBbLi4uZS5tZWFzdXJlcywgYV0sXG4gICAgb3JkZXJCeTogbyxcbiAgICBmaWx0ZXJzOiBlLnByaW1hcnlEYXRlUmFuZ2UgJiYgdCA/IFt7IHByb3BlcnR5OiB0LCBvcGVyYXRvcjogXCJpbkRhdGVSYW5nZVwiLCB2YWx1ZTogZS5wcmltYXJ5RGF0ZVJhbmdlIH1dIDogdm9pZCAwXG4gIH07XG59LCBXID0gKGUsIHMpID0+IFgoWShlLCBzKSksIHogPSAoZSwgcywgYSkgPT4ge1xuICBjb25zdCBvID0gW3sgcHJvcGVydHk6IHMsIGRpcmVjdGlvbjogXCJhc2NcIiB9XSwgdCA9IHMubmF0aXZlVHlwZSA9PT0gXCJ0aW1lXCIgPyBzIDogZS50aW1lUHJvcGVydHlGb3JOb25UaW1lRGltZW5zaW9ucztcbiAgcmV0dXJuIHtcbiAgICBsaW1pdDogZS5tYXhSZXN1bHRzLFxuICAgIGZyb206IGUuZGF0YXNldCxcbiAgICBzZWxlY3Q6IFsuLi5lLm1lYXN1cmVzLCBzXSxcbiAgICBvcmRlckJ5OiBvLFxuICAgIGZpbHRlcnM6IFt7IHByb3BlcnR5OiB0LCBvcGVyYXRvcjogXCJpbkRhdGVSYW5nZVwiLCB2YWx1ZTogYSB9XVxuICB9O1xufSwgRSA9IChlLCBzLCBhKSA9PiB7XG4gIGNvbnN0IG8gPSBzLm5hdGl2ZVR5cGUgPT09IFwidGltZVwiID8gcyA6IGUudGltZVByb3BlcnR5Rm9yTm9uVGltZURpbWVuc2lvbnM7XG4gIGlmIChlLnByaW1hcnlEYXRlUmFuZ2UgJiYgbyAmJiAoYSAhPSBudWxsICYmIGEuY29tcGFyaXNvbkRhdGVSYW5nZSkpXG4gICAgcmV0dXJuIFgoeihlLCBzLCBhLmNvbXBhcmlzb25EYXRlUmFuZ2UpKTtcbn0sIGZlID0ge1xuICBvbkxpbmVDbGlja2VkOiAoZSkgPT4gKHtcbiAgICBheGlzRGltZW5zaW9uVmFsdWU6IGUuZGltZW5zaW9uVmFsdWUgPz8gZWUubm9GaWx0ZXIoKVxuICB9KVxufSwgdmUgPSAoZSwgW3MsIGFdKSA9PiB7XG4gIGNvbnN0IG8gPSBnZShlLnhBeGlzLCBzID09IG51bGwgPyB2b2lkIDAgOiBzLmdyYW51bGFyaXR5KTtcbiAgcmV0dXJuIHtcbiAgICAuLi5lLFxuICAgIHhBeGlzOiBvLFxuICAgIHNldEdyYW51bGFyaXR5OiAodCkgPT4gYSh7IC4uLnMsIGdyYW51bGFyaXR5OiB0IH0pLFxuICAgIGNvbXBhcmlzb25EYXRlUmFuZ2U6IHMgPT0gbnVsbCA/IHZvaWQgMCA6IHMuY29tcGFyaXNvbkRhdGVSYW5nZSxcbiAgICBzZXRDb21wYXJpc29uRGF0ZVJhbmdlOiAodCkgPT4gYSh7IC4uLnMsIGNvbXBhcmlzb25EYXRlUmFuZ2U6IHQgfSksXG4gICAgcmVzdWx0czogVyhlLCBvKSxcbiAgICByZXN1bHRzQ29tcGFyaXNvbjogRShlLCBvLCBzKVxuICB9O1xufSwgTmUgPSB7XG4gIENvbXBvbmVudDogQixcbiAgbWV0YTogQ2UsXG4gIHByZXZpZXc6IERlLFxuICBwcmV2aWV3Q29uZmlnOiAkLFxuICBjb25maWc6IHtcbiAgICBwcm9wczogdmUsXG4gICAgZXZlbnRzOiBmZVxuICB9LFxuICByZXN1bHRzOiB7XG4gICAgbG9hZERhdGFBcmdzOiBZLFxuICAgIGxvYWREYXRhOiBXXG4gIH0sXG4gIHJlc3VsdHNDb21wYXJpc29uOiB7XG4gICAgbG9hZERhdGFBcmdzOiB6LFxuICAgIGxvYWREYXRhOiBFXG4gIH1cbn07XG5leHBvcnQge1xuICB5ZSBhcyBhLFxuICBoZSBhcyBnLFxuICBWZSBhcyBpLFxuICBOZSBhcyBsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmaW5pdGlvbi1CU3dXeVduSC5qcy5tYXBcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBlIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgbCBhcyBvIH0gZnJvbSBcIi4vZGVmaW5pdGlvbi1CU3dXeVduSC5qc1wiO1xuY29uc3QgYSA9IG8ucHJldmlldywgdCA9IG8ubWV0YSwgbSA9IGUoXG4gIG8uQ29tcG9uZW50LFxuICB0LFxuICBvLmNvbmZpZ1xuKTtcbmV4cG9ydCB7XG4gIG0gYXMgZGVmYXVsdCxcbiAgdCBhcyBtZXRhLFxuICBhIGFzIHByZXZpZXdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MaW5lQ2hhcnRDb21wYXJpc29uRGVmYXVsdFByby5qcy5tYXBcbiJdLCJuYW1lcyI6WyJ3IiwiYSIsInQiLCJ5IiwiZiIsIngiLCJGIiwiUSIsImRlIiwibWUiLCJvZSIsImNlIiwiaiIsIkkiLCJPIiwiSyIsInBlIiwiYWUiLCJuZSIsInRlIiwicmUiLCJsZSIsIkciLCJTIiwiaWUiLCJ1ZSIsIloiLCJtIiwiTCIsIk0iLCJzZSIsIlgiLCJlZSIsImdlIiwibyIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhSyxNQUFDLElBQUksWUFBWSxJQUFJLGtCQUFrQixJQUFJLENBQUMsR0FBRyxNQUFNO0FBQ3hELE1BQUlBLElBQUcsR0FBRyxHQUFHO0FBQ2IsUUFBTSxFQUFFLE1BQU1DLElBQUcsU0FBUyxHQUFHLFdBQVdDLElBQUcsT0FBTyxHQUFHLGtCQUFrQixHQUFHLHFCQUFxQkMsS0FBRyxRQUFRLEVBQUMsSUFBSyxHQUFHLElBQUlGLE1BQUssT0FBTyxTQUFTQSxHQUFFLElBQUksQ0FBQ0csT0FBTUEsR0FBRUYsR0FBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBR0YsS0FBSSxFQUFFLFdBQVcsUUFBUUEsR0FBRSxjQUFjLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQ0ksT0FBTTtBQUN6TyxVQUFNLElBQUlILE1BQUssT0FBTyxTQUFTQSxHQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUVDLEdBQUUsSUFBSSxNQUFNRSxFQUFDO0FBQzVELFlBQVEsS0FBSyxPQUFPLFNBQVMsRUFBRSxFQUFFLElBQUksT0FBTyxJQUFJLElB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LElBQUksQ0FBQyxHQUFHLEdBQUc5QixPQUFNO0FBQzVDLFFBQU0sSUFBSSxDQUFDLEVBQUUsVUFBVSxHQUFHLFdBQVcsTUFBSyxDQUFFLEdBQUdDLEtBQUksRUFBRSxlQUFlLFNBQVMsSUFBSSxFQUFFO0FBQ25GLFNBQU87QUFBQSxJQUNMLE9BQU8sRUFBRTtBQUFBLElBQ1QsTUFBTSxFQUFFO0FBQUEsSUFDUixRQUFRLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQztBQUFBLElBQ3pCLFNBQVM7QUFBQSxJQUNULFNBQVMsQ0FBQyxFQUFFLFVBQVVBLElBQUcsVUFBVSxlQUFlLE9BQU9ELEdBQUMsQ0FBRTtBQUFBLEVBQ2hFO0FBQ0EsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHQSxPQUFNO0FBQ2xCLFFBQU0sSUFBSSxFQUFFLGVBQWUsU0FBUyxJQUFJLEVBQUU7QUFDMUMsTUFBSSxFQUFFLG9CQUFvQixNQUFNQSxNQUFLLFFBQVFBLEdBQUU7QUFDN0MsV0FBTzhCLElBQUUsRUFBRSxHQUFHLEdBQUc5QixHQUFFLG1CQUFtQixDQUFDO0FBQzNDLEdBQUcsS0FBSztBQUFBLEVBQ04sZUFBZSxDQUFDLE9BQU87QUFBQSxJQUNyQixvQkFBb0IsRUFBRSxrQkFBa0IrQixJQUFHLFNBQVE7QUFBQSxFQUN2RDtBQUNBLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHL0IsRUFBQyxNQUFNO0FBQ3JCLFFBQU0sSUFBSWdDLEVBQUcsRUFBRSxPQUFPLEtBQUssT0FBTyxTQUFTLEVBQUUsV0FBVztBQUN4RCxTQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFDSCxPQUFPO0FBQUEsSUFDUCxnQkFBZ0IsQ0FBQy9CLE9BQU1ELEdBQUUsRUFBRSxHQUFHLEdBQUcsYUFBYUMsSUFBRztBQUFBLElBQ2pELHFCQUFxQixLQUFLLE9BQU8sU0FBUyxFQUFFO0FBQUEsSUFDNUMsd0JBQXdCLENBQUNBLE9BQU1ELEdBQUUsRUFBRSxHQUFHLEdBQUcscUJBQXFCQyxJQUFHO0FBQUEsSUFDakUsU0FBUyxFQUFFLEdBQUcsQ0FBQztBQUFBLElBQ2YsbUJBQW1CLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFBQSxFQUNoQztBQUNBLEdBQUcsS0FBSztBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLEVBRVQsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLEVBQ1o7QUFTQTtBQ3hmSyxNQUFDLElBQUlnQyxHQUFFLFNBQVMsSUFBSUEsR0FBRSxNQUFNLElBQUlDO0FBQUFBLEVBQ25DRCxHQUFFO0FBQUEsRUFDRjtBQUFBLEVBQ0FBLEdBQUU7QUFDSjsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxXX0=
