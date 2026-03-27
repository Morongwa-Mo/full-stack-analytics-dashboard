import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { C as Cm, e as en, x, v as lRe, q as qIe, K as KIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { j, B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { I as I$1 } from './styles.utils-BfpH_m_W-BVwxfT0G-FCoxpF9d.js';
import { Z as Z0 } from './color.utils-BSg_DFOh-BjLJAtTN-CTFsLD5h.js';
import { m as m$1 } from './lines.utils-CEGfmIHB-Da4q6Hgz-CLP2ehfZ.js';
import { P } from './charts.fillGaps.hooks-PCeJ5uuu-BBf-qw__-DRdlHrWG.js';
import { S as S$1, w as w$1 } from './granularity.utils-zeE7RDIY-BVtJZ4mm-DS_02PJy.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './quarterOfYear-BLO_Qaw2-CBVA3k0_-BAgvWFqb.js';
import './GranularitySelectField-USDUQ-JX-DwuCP4xb-BFi42HgU.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const q = (e, n) => {
  const u = j(n), { data: t = [], dimension: r2, groupDimension: i, measure: l, hasMinMaxYAxisRange: g } = e, m2 = [...new Set(t.map((s) => s[r2.name]).filter((s) => s != null))].sort(), c = [...new Set(t.map((s) => s[i.name]))].filter((s) => s != null), o = Cm(), d = c.map((s, C) => {
    var x2;
    const f = I$1({
      dimensionOrMeasure: i,
      theme: n,
      color: "background",
      value: `${i.name}.${s}`,
      chartColors: o,
      index: C
    }), y = I$1({
      dimensionOrMeasure: i,
      theme: n,
      color: "border",
      value: `${i.name}.${s}`,
      chartColors: o,
      index: C
    });
    return {
      clip: g,
      label: u.data(i, s),
      rawLabel: s,
      backgroundColor: Z0(f, 0.5),
      pointBackgroundColor: f,
      fill: (x2 = l.inputs) == null ? void 0 : x2.fillUnderLine,
      borderColor: y,
      data: m2.map((L) => {
        var p2;
        const b = t.find(
          (h) => h[i.name] === s && h[r2.name] === L
        );
        return (b == null ? void 0 : b[l.name]) ?? ((p2 = l.inputs) != null && p2.connectGaps ? 0 : null);
      })
    };
  });
  return {
    labels: m2,
    datasets: d
  };
}, J = (e, n) => {
  var m2, c;
  const { dimension: u, data: t, measure: r2, onLineClicked: i } = e, l = j(n), g = {
    plugins: {
      datalabels: {
        labels: {
          value: {
            formatter: (o) => l.data(r2, o)
          }
        }
      },
      tooltip: {
        callbacks: {
          title: (o) => {
            var s;
            const d = (s = o[0]) == null ? void 0 : s.label;
            return l.data(u, d);
          },
          label: (o) => {
            const d = o.raw;
            return `${o.dataset.label}: ${l.data(r2, d)}`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          callback: (o) => {
            if (!t || !t.labels) return;
            const d = t.labels[Number(o)];
            return l.data(u, d);
          }
        }
      },
      y: {
        ticks: {
          callback: (o) => l.data(r2, o)
        }
      }
    }
  };
  return en(
    m$1({ onLineClicked: i }),
    g,
    ((c = (m2 = n.charts) == null ? void 0 : m2.lineChartGroupedPro) == null ? void 0 : c.options) || {}
  );
}, w = (e) => {
  const n = useTheme();
  _e(n);
  const { title: u, description: t, tooltip: r2, xAxisLabel: i, yAxisLabel: l } = We(e), {
    hideMenu: g,
    measure: m2,
    xAxis: c,
    groupBy: o,
    reverseXAxis: d,
    showLegend: s,
    showLogarithmicScale: C,
    showTooltips: f,
    showValueLabels: y,
    yAxisRangeMax: M,
    yAxisRangeMin: x$1,
    setGranularity: L,
    onLineClicked: b
  } = e, p2 = P({
    results: e.results,
    dimension: e.xAxis
  }), h = q(
    {
      data: p2.data,
      dimension: c,
      groupDimension: o,
      measure: m2,
      hasMinMaxYAxisRange: x$1 != null || M != null
    },
    n
  ), P$1 = J(
    { data: h, dimension: c, measure: m2, onLineClicked: b },
    n
  ), F = !u && !t && !r2;
  return /* @__PURE__ */ x.jsxs(
    G,
    {
      data: p2,
      dimensionsAndMeasures: [m2, c, o],
      errorMessage: p2.error,
      description: t,
      title: u,
      tooltip: r2,
      hideMenu: g,
      children: [
        L && /* @__PURE__ */ x.jsx(
          S$1,
          {
            hasMarginTop: F,
            dimension: c,
            onChange: L
          }
        ),
        /* @__PURE__ */ x.jsx(
          lRe,
          {
            data: h,
            reverseXAxis: d,
            showLegend: s,
            showLogarithmicScale: C,
            showTooltips: f,
            showValueLabels: y,
            xAxisLabel: i,
            yAxisLabel: l,
            yAxisRangeMax: M,
            yAxisRangeMin: x$1,
            options: P$1
          }
        )
      ]
    }
  );
}, K = {
  name: "LineChartGroupedPro",
  label: "Line Chart - Grouped",
  category: "Line Charts",
  inputs: [
    Ne.dataset,
    {
      ...Ne.measure,
      inputs: [
        ...Ne.measure.inputs,
        {
          ...Ne.boolean,
          name: "fillUnderLine",
          label: "Fill under line",
          category: "Component Settings"
        },
        {
          ...Ne.boolean,
          name: "connectGaps",
          label: "Connect gaps",
          defaultValue: true,
          category: "Component Settings"
        }
      ]
    },
    { ...Ne.dimensionWithGranularitySelectField, name: "xAxis", label: "X-axis" },
    Ne.groupBy,
    Ne.title,
    Ne.description,
    Ne.tooltip,
    Ne.maxResults,
    Ne.showLegend,
    Ne.showTooltips,
    Ne.showValueLabels,
    Ne.showLogarithmicScale,
    Ne.xAxisLabel,
    Ne.yAxisLabel,
    Ne.reverseXAxis,
    Ne.yAxisRangeMin,
    Ne.yAxisRangeMax
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
        },
        {
          name: "groupingDimensionValue",
          label: "Clicked grouping dimension value",
          type: "string"
        }
      ]
    }
  ]
}, S = {
  xAxis: B.dimension,
  groupBy: B.dimensionGroup,
  measure: B.measure,
  results: B.results1Measure2Dimensions,
  hideMenu: true
}, Q = definePreview(w, S), R = (e, n) => ({
  limit: e.maxResults,
  from: e.dataset,
  select: [n ?? e.xAxis, e.groupBy, e.measure]
}), V = (e, n) => qIe(R(e, n)), Z = {
  onLineClicked: (e) => ({
    axisDimensionValue: e.dimensionValue ?? KIe.noFilter(),
    groupingDimensionValue: e.groupingDimensionValue ?? KIe.noFilter()
  })
}, I = (e, [n, u]) => {
  const t = w$1(e.xAxis, n == null ? void 0 : n.granularity);
  return {
    ...e,
    xAxis: t,
    setGranularity: (r2) => u({ granularity: r2 }),
    results: V(e, t)
  };
}, de = {
  Component: w,
  meta: K,
  preview: Q,
  config: {
    props: I,
    events: Z
  }
};
const m = de.preview, r = de.meta, p = defineComponent(de.Component, r, de.config);

export { p as default, r as meta, m as preview };
//# sourceMappingURL=LineChartGroupedPro-Dn2g6iws-B8UlAjZX.js.map
//# sourceMappingURL=LineChartGroupedPro-Dn2g6iws-B8UlAjZX.js.map
