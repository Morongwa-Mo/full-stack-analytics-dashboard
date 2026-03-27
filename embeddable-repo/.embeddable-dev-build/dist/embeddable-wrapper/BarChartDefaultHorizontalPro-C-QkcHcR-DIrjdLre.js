import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { e as en, x, s as sRe, q as qIe, K as KIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { I, S } from './bars.utils-DUfgYLSr-HKMARKIx-CmqG7cmX.js';
import { P } from './charts.fillGaps.hooks-PCeJ5uuu-BBf-qw__-DRdlHrWG.js';
import { S as S$1, w } from './granularity.utils-zeE7RDIY-BVtJZ4mm-DS_02PJy.js';
import { N as Ne, G as Ge } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
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

const m$1 = (a) => {
  var p, g;
  const s = useTheme();
  _e(s);
  const {
    hideMenu: o,
    dimension: r,
    measures: t,
    showValueLabels: D,
    reverseYAxis: y,
    showLegend: M,
    showLogarithmicScale: w2,
    showTooltips: v,
    xAxisRangeMax: B2,
    xAxisRangeMin: L,
    yAxisMaxItems: P$1,
    setGranularity: u,
    onBarClicked: R
  } = a, { description: c, title: d, tooltip: x$1, xAxisLabel: z, yAxisLabel: S$2 } = We(a), i = P({
    results: a.results,
    dimension: r
  }), h = I(
    { data: i.data, dimension: r, measures: t, maxItems: P$1 },
    s
  ), V = en(
    S({ measures: t, horizontal: true, onBarClicked: R, data: h, dimension: r }, s),
    // Format X axis based on first measure
    ((g = (p = s.charts) == null ? void 0 : p.barChartDefaultHorizontalPro) == null ? void 0 : g.options) ?? {}
  ), j = !d && !c && !x$1;
  return /* @__PURE__ */ x.jsxs(
    G,
    {
      data: i,
      dimensionsAndMeasures: [r, ...t],
      errorMessage: i.error,
      description: c,
      title: d,
      tooltip: x$1,
      hideMenu: o,
      children: [
        u && /* @__PURE__ */ x.jsx(
          S$1,
          {
            hasMarginTop: j,
            dimension: r,
            onChange: u
          }
        ),
        /* @__PURE__ */ x.jsx(
          sRe,
          {
            horizontal: true,
            data: h,
            options: V,
            reverseYAxis: y,
            showLegend: M,
            showLogarithmicScale: w2,
            showTooltips: v,
            showValueLabels: D,
            xAxisLabel: z,
            xAxisRangeMax: B2,
            xAxisRangeMin: L,
            yAxisLabel: S$2
          }
        )
      ]
    }
  );
}, N = {
  name: "BarChartDefaultHorizontalPro",
  label: "Bar Chart - Default Horizontal",
  category: "Bar Charts",
  inputs: [
    Ne.dataset,
    {
      ...Ne.measures,
      inputs: [...Ne.measures.inputs, Ge.color, Ge.showValueAsPercentage]
    },
    { ...Ne.dimensionWithGranularitySelectField, label: "Y-axis" },
    Ne.title,
    Ne.description,
    Ne.tooltip,
    Ne.showLegend,
    Ne.showTooltips,
    Ne.showValueLabels,
    Ne.showLogarithmicScale,
    Ne.xAxisLabel,
    Ne.yAxisLabel,
    Ne.reverseYAxis,
    Ne.xAxisRangeMin,
    Ne.xAxisRangeMax,
    Ne.yAxisMaxItems,
    Ne.maxResults
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
        }
      ]
    }
  ]
}, C = {
  dimension: B.dimension,
  measures: [B.measure],
  results: B.results1Measure1Dimension,
  hideMenu: true
}, Q = definePreview(m$1, C), b = (a, s) => ({
  from: a.dataset,
  select: [...a.measures, s ?? a.dimension],
  limit: a.maxResults
}), A = (a, s) => qIe(b(a, s)), U = {
  onBarClicked: (a) => ({
    axisDimensionValue: a.axisDimensionValue ?? KIe.noFilter()
  })
}, X = (a, [s, o]) => {
  const r = w(
    a.dimension,
    s == null ? void 0 : s.granularity
  );
  return {
    ...a,
    dimension: r,
    setGranularity: (t) => o({ granularity: t }),
    results: A(a, r)
  };
}, le = {
  Component: m$1,
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
//# sourceMappingURL=BarChartDefaultHorizontalPro-C-QkcHcR-DIrjdLre.js.map
//# sourceMappingURL=BarChartDefaultHorizontalPro-C-QkcHcR-DIrjdLre.js.map
