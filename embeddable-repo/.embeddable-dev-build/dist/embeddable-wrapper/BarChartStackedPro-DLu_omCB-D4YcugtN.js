import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { e as en, x, s as sRe, q as qIe, K as KIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { E, S } from './bars.utils-DUfgYLSr-HKMARKIx-CmqG7cmX.js';
import { P } from './charts.fillGaps.hooks-PCeJ5uuu-BBf-qw__-DRdlHrWG.js';
import { S as S$1, w } from './granularity.utils-zeE7RDIY-BVtJZ4mm-DS_02PJy.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import { B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './charts.utils-c8yku90J-Chy-UZ3p-Bf2s8PEm.js';
import './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './quarterOfYear-BLO_Qaw2-CBVA3k0_-BAgvWFqb.js';
import './styles.utils-BfpH_m_W-BVwxfT0G-FCoxpF9d.js';
import './GranularitySelectField-USDUQ-JX-DwuCP4xb-BFi42HgU.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const d = (e) => {
  var p, h;
  const s = useTheme();
  _e(s);
  const { tooltip: r, description: i, title: o, xAxisLabel: f, yAxisLabel: D } = We(e), {
    groupBy: c,
    measure: l,
    reverseXAxis: B2,
    showLegend: w2,
    showLogarithmicScale: S$2,
    showTooltips: k,
    showTotalLabels: L,
    showValueLabels: M,
    xAxis: t2,
    yAxisRangeMax: v,
    yAxisRangeMin: V,
    setGranularity: x$1,
    onBarClicked: P$1
  } = e, { hideMenu: R } = e, m2 = P({
    results: e.results,
    dimension: e.xAxis
  }), g = E(
    {
      data: m2.data,
      dimension: t2,
      groupDimension: c,
      measure: l
    },
    s
  ), G$1 = en(
    S(
      { measures: [l], horizontal: false, onBarClicked: P$1, data: g, dimension: t2 },
      s
    ),
    ((h = (p = s.charts) == null ? void 0 : p.barChartStackedPro) == null ? void 0 : h.options) || {}
  ), T = !o && !i && !r;
  return /* @__PURE__ */ x.jsxs(
    G,
    {
      data: m2,
      dimensionsAndMeasures: [l, t2, c],
      errorMessage: m2.error,
      description: i,
      title: o,
      tooltip: r,
      hideMenu: R,
      children: [
        x$1 && /* @__PURE__ */ x.jsx(
          S$1,
          {
            hasMarginTop: T,
            dimension: t2,
            onChange: x$1
          }
        ),
        /* @__PURE__ */ x.jsx(
          sRe,
          {
            data: g,
            showLegend: w2,
            showTooltips: k,
            showValueLabels: M,
            showLogarithmicScale: S$2,
            xAxisLabel: f,
            yAxisLabel: D,
            reverseXAxis: B2,
            yAxisRangeMin: V,
            yAxisRangeMax: v,
            showTotalLabels: L,
            options: G$1,
            stacked: true
          }
        )
      ]
    }
  );
}, N = {
  name: "BarChartStackedPro",
  label: "Bar Chart - Stacked",
  category: "Bar Charts",
  inputs: [
    Ne.dataset,
    Ne.measure,
    { ...Ne.dimensionWithGranularitySelectField, name: "xAxis", label: "X-axis" },
    Ne.groupBy,
    Ne.title,
    Ne.description,
    Ne.tooltip,
    Ne.maxResults,
    Ne.showLegend,
    Ne.showTooltips,
    { ...Ne.showValueLabels, defaultValue: false },
    Ne.showLogarithmicScale,
    Ne.xAxisLabel,
    Ne.yAxisLabel,
    Ne.reverseXAxis,
    Ne.yAxisRangeMin,
    Ne.yAxisRangeMax,
    Ne.showTotalLabels
  ],
  events: [
    {
      name: "onBarClicked",
      label: "A bar is clicked",
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
}, A = {
  xAxis: B.dimension,
  groupBy: B.dimensionGroup,
  measure: B.measure,
  results: B.results1Measure2Dimensions,
  hideMenu: true
}, Q = definePreview(d, A), C = (e, s) => ({
  limit: e.maxResults,
  from: e.dataset,
  select: [s ?? e.xAxis, e.groupBy, e.measure]
}), b = (e, s) => qIe(C(e, s)), U = {
  onBarClicked: (e) => ({
    axisDimensionValue: e.axisDimensionValue ?? KIe.noFilter(),
    groupingDimensionValue: e.groupingDimensionValue ?? KIe.noFilter()
  })
}, Y = (e, [s, r]) => {
  const i = w(e.xAxis, s == null ? void 0 : s.granularity);
  return {
    ...e,
    xAxis: i,
    setGranularity: (o) => r({ granularity: o }),
    results: b(e, i)
  };
}, le = {
  Component: d,
  meta: N,
  preview: Q,
  config: {
    props: Y,
    events: U
  }
};
const m = le.preview, t = le.meta, n = defineComponent(le.Component, t, le.config);

export { n as default, t as meta, m as preview };
//# sourceMappingURL=BarChartStackedPro-DLu_omCB-D4YcugtN.js.map
//# sourceMappingURL=BarChartStackedPro-DLu_omCB-D4YcugtN.js.map
