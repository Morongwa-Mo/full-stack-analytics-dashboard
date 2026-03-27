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
  var x$1, h;
  const s = useTheme();
  _e(s);
  const { tooltip: i, description: r, title: t, xAxisLabel: f, yAxisLabel: D } = We(e2), {
    yAxis: o,
    hideMenu: B2,
    groupBy: p,
    measure: l,
    reverseYAxis: G$1,
    showLegend: w2,
    showLogarithmicScale: M,
    showTooltips: v,
    showTotalLabels: L,
    showValueLabels: V,
    xAxisRangeMax: P$1,
    xAxisRangeMin: R,
    setGranularity: c,
    onBarClicked: S$2
  } = e2, u = P({
    results: e2.results,
    dimension: o
  }), g = E(
    {
      data: u.data,
      dimension: o,
      groupDimension: p,
      measure: l
    },
    s
  ), z = en(
    S(
      { measures: [l], horizontal: true, onBarClicked: S$2, data: g, dimension: o },
      s
    ),
    ((h = (x$1 = s.charts) == null ? void 0 : x$1.barChartGroupedHorizontalPro) == null ? void 0 : h.options) ?? {}
  ), j = !t && !r && !i;
  return /* @__PURE__ */ x.jsxs(
    G,
    {
      data: u,
      dimensionsAndMeasures: [l, o, p],
      errorMessage: u.error,
      description: r,
      title: t,
      tooltip: i,
      hideMenu: B2,
      children: [
        c && /* @__PURE__ */ x.jsx(
          S$1,
          {
            hasMarginTop: j,
            dimension: o,
            onChange: c
          }
        ),
        /* @__PURE__ */ x.jsx(
          sRe,
          {
            data: g,
            showLegend: w2,
            showTooltips: v,
            showValueLabels: V,
            showLogarithmicScale: M,
            xAxisLabel: f,
            yAxisLabel: D,
            reverseYAxis: G$1,
            xAxisRangeMin: R,
            xAxisRangeMax: P$1,
            showTotalLabels: L,
            options: z,
            horizontal: true
          }
        )
      ]
    }
  );
}, N = {
  name: "BarChartGroupedHorizontalPro",
  label: "Bar Chart - Grouped Horizontal",
  category: "Bar Charts",
  inputs: [
    Ne.dataset,
    Ne.measure,
    { ...Ne.dimensionWithGranularitySelectField, name: "yAxis", label: "Y-axis" },
    { ...Ne.dimension, name: "groupBy", label: "Group by" },
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
    Ne.xAxisRangeMax
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
}, b = {
  yAxis: B.dimension,
  groupBy: B.dimensionGroup,
  measure: B.measure,
  results: B.results1Measure2Dimensions,
  hideMenu: true
}, Q = definePreview(d, b), C = (e2, s) => ({
  limit: e2.maxResults,
  from: e2.dataset,
  select: [s ?? e2.yAxis, e2.groupBy, e2.measure]
}), A = (e2, s) => qIe(C(e2, s)), U = {
  onBarClicked: (e2) => ({
    axisDimensionValue: e2.axisDimensionValue ?? KIe.noFilter(),
    groupingDimensionValue: e2.groupingDimensionValue ?? KIe.noFilter()
  })
}, X = (e2, [s, i]) => {
  const r = w(e2.yAxis, s == null ? void 0 : s.granularity);
  return {
    ...e2,
    yAxis: r,
    setGranularity: (t) => i({ granularity: t }),
    results: A(e2, r)
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
//# sourceMappingURL=BarChartGroupedHorizontalPro-CA57wOGx-CnNPrNQa.js.map
//# sourceMappingURL=BarChartGroupedHorizontalPro-CA57wOGx-CnNPrNQa.js.map
