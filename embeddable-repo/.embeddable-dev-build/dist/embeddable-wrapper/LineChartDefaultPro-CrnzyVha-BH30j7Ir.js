import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { C as Cm, o as we, e as en, x, v as lRe, q as qIe, K as KIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G as G$1 } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { j, B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { I } from './styles.utils-BfpH_m_W-BVwxfT0G-FCoxpF9d.js';
import { q as q0, Z as Z0 } from './color.utils-BSg_DFOh-BjLJAtTN-CTFsLD5h.js';
import { P } from './charts.fillGaps.hooks-PCeJ5uuu-BBf-qw__-DRdlHrWG.js';
import { S, w } from './granularity.utils-zeE7RDIY-BVtJZ4mm-DS_02PJy.js';
import { N as Ne, G as Ge } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './quarterOfYear-BLO_Qaw2-CBVA3k0_-BAgvWFqb.js';
import './GranularitySelectField-USDUQ-JX-DwuCP4xb-BFi42HgU.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const q = (e, s) => {
  if (!e.data)
    return {
      labels: [],
      datasets: [{ data: [] }]
    };
  const d = j(s), l = e.data;
  return {
    labels: l.map((a2) => a2[e.dimension.name]),
    datasets: e.measures.map((a2, m2) => {
      var i, b, h, x2;
      const c = !!((i = a2.inputs) != null && i.connectGaps), p = l.map((g) => g[a2.name] ?? (c ? 0 : null)), r = (b = a2.inputs) == null ? void 0 : b.lineColor, u = Cm(), n = q0(r) ? r : I({
        dimensionOrMeasure: a2,
        theme: s,
        color: "background",
        value: a2.name,
        chartColors: u,
        index: m2
      }), o = q0(r) ? r : I({
        dimensionOrMeasure: a2,
        theme: s,
        color: "border",
        value: a2.name,
        chartColors: u,
        index: m2
      });
      return {
        clip: e.hasMinMaxYAxisRange,
        label: d.dimensionOrMeasureTitle(a2),
        data: p,
        backgroundColor: Z0(n, 0.5),
        pointBackgroundColor: n,
        borderDash: (h = a2.inputs) != null && h.dashedLine ? [
          we("--em-linechart-line-dash", "0.25rem"),
          we("--em-linechart-line-gap", "0.25rem")
        ] : void 0,
        borderColor: o,
        fill: !!((x2 = a2.inputs) != null && x2.fillUnderLine)
      };
    })
  };
}, J = (e, s) => {
  var r, u;
  const { dimension: d, data: l, measures: a2, onLineClicked: m2 } = e, c = j(s);
  return en({
    plugins: {
      datalabels: {
        labels: {
          value: {
            formatter: (n, o) => {
              const i = a2[o.datasetIndex];
              return c.data(i, n);
            }
          }
        }
      },
      tooltip: {
        callbacks: {
          title: (n) => {
            var i;
            const o = (i = n[0]) == null ? void 0 : i.label;
            return c.data(d, o);
          },
          label: (n) => {
            const o = a2[n.datasetIndex], i = n.raw;
            return `${c.data(d, n.dataset.label) || ""}: ${c.data(o, i)}`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          callback: (n) => {
            if (!l || !l.labels) return;
            const o = l.labels[Number(n)];
            return c.data(d, o);
          }
        }
      },
      y: {
        ticks: {
          callback: (n) => c.data(a2[0], n)
        }
      }
    },
    onClick: (n, o, i) => {
      if (!m2) return;
      const b = o[0], h = b ? i.data.labels[b.index] : null;
      m2({
        dimensionValue: h
      });
    }
  }, ((u = (r = s.charts) == null ? void 0 : r.lineChartDefaultPro) == null ? void 0 : u.options) || {});
}, y = (e) => {
  const s = useTheme();
  _e(s);
  const { title: d, description: l, tooltip: a2, xAxisLabel: m2, yAxisLabel: c } = We(e), {
    hideMenu: p,
    measures: r,
    xAxis: u,
    reverseXAxis: n,
    showLegend: o,
    showLogarithmicScale: i,
    showTooltips: b,
    showValueLabels: h,
    yAxisRangeMax: x$1,
    yAxisRangeMin: g,
    setGranularity: M,
    onLineClicked: P$1
  } = e, f = P({
    results: e.results,
    dimension: u
  }), D = q(
    {
      data: f.data,
      dimension: u,
      measures: r,
      hasMinMaxYAxisRange: g != null || x$1 != null
    },
    s
  ), S$1 = J(
    { data: D, dimension: u, measures: r, onLineClicked: P$1 },
    s
  ), O = !d && !l && !a2;
  return /* @__PURE__ */ x.jsxs(
    G$1,
    {
      data: f,
      dimensionsAndMeasures: [...r, u],
      errorMessage: f.error,
      description: l,
      title: d,
      tooltip: a2,
      hideMenu: p,
      children: [
        M && /* @__PURE__ */ x.jsx(
          S,
          {
            hasMarginTop: O,
            dimension: u,
            onChange: M
          }
        ),
        /* @__PURE__ */ x.jsx(
          lRe,
          {
            data: D,
            reverseXAxis: n,
            showLegend: o,
            showLogarithmicScale: i,
            showTooltips: b,
            showValueLabels: h,
            xAxisLabel: m2,
            yAxisLabel: c,
            yAxisRangeMax: x$1,
            yAxisRangeMin: g,
            options: S$1
          }
        )
      ]
    }
  );
}, K = {
  name: "LineChartDefaultPro",
  label: "Line Chart - Default",
  category: "Line Charts",
  inputs: [
    Ne.dataset,
    {
      ...Ne.measures,
      inputs: [
        ...Ne.measures.inputs,
        { ...Ge.boolean, name: "fillUnderLine", label: "Fill under line" },
        {
          ...Ge.color,
          name: "lineColor",
          label: "Line color"
        },
        {
          ...Ge.boolean,
          name: "connectGaps",
          label: "Connect gaps",
          defaultValue: true
        },
        {
          ...Ge.boolean,
          name: "dashedLine",
          label: "Dashed line",
          defaultValue: false
        }
      ]
    },
    { ...Ne.dimensionWithGranularitySelectField, label: "X-axis", name: "xAxis" },
    Ne.title,
    Ne.description,
    Ne.tooltip,
    Ne.showLegend,
    Ne.showTooltips,
    Ne.showValueLabels,
    Ne.showLogarithmicScale,
    Ne.xAxisLabel,
    Ne.yAxisLabel,
    Ne.reverseXAxis,
    Ne.yAxisRangeMin,
    Ne.yAxisRangeMax,
    Ne.maxResults
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
}, V = {
  xAxis: B.dimension,
  measures: [B.measure],
  results: B.results1Measure1Dimension,
  hideMenu: true
}, Q = definePreview(y, V), F = (e, s) => ({
  limit: e.maxResults,
  from: e.dataset,
  select: [...e.measures, s ?? e.xAxis]
}), G = (e, s) => qIe(F(e, s)), Z = {
  onLineClicked: (e) => ({
    axisDimensionValue: e.dimensionValue ?? KIe.noFilter()
  })
}, ee = (e, [s, d]) => {
  const l = w(e.xAxis, s == null ? void 0 : s.granularity);
  return {
    ...e,
    xAxis: l,
    setGranularity: (a2) => d({ granularity: a2 }),
    results: G(e, l)
  };
}, me = {
  Component: y,
  meta: K,
  preview: Q,
  config: {
    props: ee,
    events: Z
  }
};
const a = me.preview, t = me.meta, m = defineComponent(me.Component, t, me.config);

export { m as default, t as meta, a as preview };
//# sourceMappingURL=LineChartDefaultPro-CrnzyVha-BH30j7Ir.js.map
//# sourceMappingURL=LineChartDefaultPro-CrnzyVha-BH30j7Ir.js.map
