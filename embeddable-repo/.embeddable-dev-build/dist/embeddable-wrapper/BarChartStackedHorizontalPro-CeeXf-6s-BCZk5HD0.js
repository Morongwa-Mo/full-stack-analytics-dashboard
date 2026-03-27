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

const d = (e2) => {
  var p, h;
  const s = useTheme();
  _e(s);
  const { tooltip: i, description: r, title: o, xAxisLabel: f, yAxisLabel: D } = We(e2), {
    hideMenu: B2,
    groupBy: c,
    measure: l,
    reverseYAxis: w2,
    showLegend: S$2,
    showLogarithmicScale: k,
    showTooltips: L,
    showTotalLabels: M,
    showValueLabels: v,
    yAxis: t,
    xAxisRangeMax: V,
    xAxisRangeMin: P$1,
    setGranularity: g,
    onBarClicked: R
  } = e2, m2 = P({
    results: e2.results,
    dimension: e2.yAxis
  }), x$1 = E(
    {
      data: m2.data,
      dimension: t,
      groupDimension: c,
      measure: l
    },
    s
  ), z = en(
    S(
      { measures: [l], horizontal: true, onBarClicked: R, data: x$1, dimension: t },
      s
    ),
    ((h = (p = s.charts) == null ? void 0 : p.barChartStackedHorizontalPro) == null ? void 0 : h.options) || {}
  ), G$1 = !o && !r && !i;
  return /* @__PURE__ */ x.jsxs(
    G,
    {
      data: m2,
      dimensionsAndMeasures: [l, t, c],
      errorMessage: m2.error,
      description: r,
      title: o,
      tooltip: i,
      hideMenu: B2,
      children: [
        g && /* @__PURE__ */ x.jsx(
          S$1,
          {
            hasMarginTop: G$1,
            dimension: t,
            onChange: g
          }
        ),
        /* @__PURE__ */ x.jsx(
          sRe,
          {
            data: x$1,
            showLegend: S$2,
            showTooltips: L,
            showValueLabels: v,
            showLogarithmicScale: k,
            xAxisLabel: f,
            yAxisLabel: D,
            reverseYAxis: w2,
            xAxisRangeMin: P$1,
            xAxisRangeMax: V,
            showTotalLabels: M,
            options: z,
            stacked: true,
            horizontal: true
          }
        )
      ]
    }
  );
}, N = {
  name: "BarChartStackedHorizontalPro",
  label: "Bar Chart - Stacked Horizontal",
  category: "Bar Charts",
  inputs: [
    Ne.dataset,
    Ne.measure,
    { ...Ne.dimensionWithGranularitySelectField, name: "yAxis", label: "Y-axis" },
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
    Ne.reverseYAxis,
    Ne.xAxisRangeMin,
    Ne.xAxisRangeMax,
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
  yAxis: B.dimension,
  groupBy: B.dimensionGroup,
  measure: B.measure,
  results: B.results1Measure2Dimensions,
  hideMenu: true
}, Q = definePreview(d, A), C = (e2, s) => ({
  limit: e2.maxResults,
  from: e2.dataset,
  select: [s ?? e2.yAxis, e2.groupBy, e2.measure]
}), b = (e2, s) => qIe(C(e2, s)), U = {
  onBarClicked: (e2) => ({
    axisDimensionValue: e2.axisDimensionValue ?? KIe.noFilter(),
    groupingDimensionValue: e2.groupingDimensionValue ?? KIe.noFilter()
  })
}, X = (e2, [s, i]) => {
  const r = w(e2.yAxis, s == null ? void 0 : s.granularity);
  return {
    ...e2,
    yAxis: r,
    setGranularity: (o) => i({ granularity: o }),
    results: b(e2, r)
  };
}, le = {
  Component: d,
  meta: N,
  preview: Q,
  config: {
    props: X,
    events: U
  }
};
const n = le.preview, e = le.meta, m = defineComponent(
  le.Component,
  e,
  le.config
);

export { m as default, e as meta, n as preview };
//# sourceMappingURL=BarChartStackedHorizontalPro-CeeXf-6s-BCZk5HD0.js.map
//# sourceMappingURL=BarChartStackedHorizontalPro-CeeXf-6s-BCZk5HD0.js.map
