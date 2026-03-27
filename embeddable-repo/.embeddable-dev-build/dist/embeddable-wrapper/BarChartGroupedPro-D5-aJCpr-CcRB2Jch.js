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

const m$1 = (e) => {
  var h, y;
  const s = useTheme();
  _e(s);
  const {
    groupBy: i,
    measure: r2,
    reverseXAxis: n2,
    showLegend: D,
    showLogarithmicScale: B2,
    showTooltips: w2,
    showTotalLabels: G$1,
    showValueLabels: M,
    xAxis: o,
    yAxisRangeMax: v,
    yAxisRangeMin: L,
    setGranularity: d,
    onBarClicked: V
  } = e, { tooltip: c, description: x$1, title: g, xAxisLabel: P$1, yAxisLabel: R } = We(e), { hideMenu: S$2 } = e, l = P({
    results: e.results,
    dimension: e.xAxis
  }), p = E(
    {
      data: l.data,
      dimension: o,
      groupDimension: i,
      measure: r2
    },
    s
  ), j = en(
    S(
      { measures: [r2], horizontal: false, onBarClicked: V, data: p, dimension: o },
      s
    ),
    ((y = (h = s.charts) == null ? void 0 : h.barChartGroupedPro) == null ? void 0 : y.options) ?? {}
  ), k = !g && !x$1 && !c;
  return /* @__PURE__ */ x.jsxs(
    G,
    {
      data: l,
      dimensionsAndMeasures: [r2, o, i],
      errorMessage: l.error,
      description: x$1,
      title: g,
      tooltip: c,
      hideMenu: S$2,
      children: [
        d && /* @__PURE__ */ x.jsx(
          S$1,
          {
            hasMarginTop: k,
            dimension: o,
            onChange: d
          }
        ),
        /* @__PURE__ */ x.jsx(
          sRe,
          {
            data: p,
            showLegend: D,
            showTooltips: w2,
            showValueLabels: M,
            showLogarithmicScale: B2,
            xAxisLabel: P$1,
            yAxisLabel: R,
            reverseXAxis: n2,
            yAxisRangeMin: L,
            yAxisRangeMax: v,
            showTotalLabels: G$1,
            options: j
          }
        )
      ]
    }
  );
}, N = {
  name: "BarChartGroupedPro",
  label: "Bar Chart - Grouped",
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
    Ne.yAxisRangeMax
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
}, C = {
  xAxis: B.dimension,
  groupBy: B.dimensionGroup,
  measure: B.measure,
  results: B.results1Measure2Dimensions,
  hideMenu: true
}, Q = definePreview(m$1, C), b = (e, s) => ({
  limit: e.maxResults,
  from: e.dataset,
  select: [s ?? e.xAxis, e.groupBy, e.measure]
}), f = (e, s) => qIe(b(e, s)), U = {
  onBarClicked: (e) => ({
    axisDimensionValue: e.axisDimensionValue ?? KIe.noFilter(),
    groupingDimensionValue: e.groupingDimensionValue ?? KIe.noFilter()
  })
}, Y = (e, [s, i]) => {
  const r2 = w(e.xAxis, s == null ? void 0 : s.granularity);
  return {
    ...e,
    xAxis: r2,
    setGranularity: (n2) => i({ granularity: n2 }),
    results: f(e, r2)
  };
}, le = {
  Component: m$1,
  meta: N,
  preview: Q,
  config: {
    props: Y,
    events: U
  }
};
const m = le.preview, r = le.meta, n = defineComponent(le.Component, r, le.config);

export { n as default, r as meta, m as preview };
//# sourceMappingURL=BarChartGroupedPro-D5-aJCpr-CcRB2Jch.js.map
//# sourceMappingURL=BarChartGroupedPro-D5-aJCpr-CcRB2Jch.js.map
