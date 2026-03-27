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

const u = (a) => {
  var g, f;
  const s = useTheme();
  _e(s);
  const {
    measures: r,
    yAxisRangeMin: i,
    xAxisMaxItems: o,
    yAxisRangeMax: D,
    showLegend: M,
    showTooltips: w2,
    showLogarithmicScale: v,
    showValueLabels: B2,
    reverseXAxis: L,
    hideMenu: P$1,
    dimension: t2,
    setGranularity: c,
    onBarClicked: R
  } = a, { tooltip: d, description: x$1, title: h, xAxisLabel: S$2, yAxisLabel: V } = We(a), n2 = P({
    results: a.results,
    dimension: t2
  }), p = I(
    { data: n2.data, dimension: t2, measures: r, maxItems: o },
    s
  ), j = en(
    S({ measures: r, horizontal: false, onBarClicked: R, data: p, dimension: t2 }, s),
    // Format Y axis based on first measure
    ((f = (g = s.charts) == null ? void 0 : g.barChartDefaultPro) == null ? void 0 : f.options) ?? {}
  ), G$1 = !h && !x$1 && !d;
  return /* @__PURE__ */ x.jsxs(
    G,
    {
      data: n2,
      dimensionsAndMeasures: [t2, ...r],
      errorMessage: n2.error,
      description: x$1,
      title: h,
      tooltip: d,
      hideMenu: P$1,
      children: [
        c && /* @__PURE__ */ x.jsx(
          S$1,
          {
            hasMarginTop: G$1,
            dimension: t2,
            onChange: c
          }
        ),
        /* @__PURE__ */ x.jsx(
          sRe,
          {
            data: p,
            showLegend: M,
            showTooltips: w2,
            showValueLabels: B2,
            showLogarithmicScale: v,
            xAxisLabel: S$2,
            yAxisLabel: V,
            reverseXAxis: L,
            yAxisRangeMin: i,
            yAxisRangeMax: D,
            options: j
          }
        )
      ]
    }
  );
}, N = {
  name: "BarChartDefaultPro",
  label: "Bar Chart - Default",
  category: "Bar Charts",
  inputs: [
    Ne.dataset,
    {
      ...Ne.measures,
      inputs: [...Ne.measures.inputs, Ge.color, Ge.showValueAsPercentage]
    },
    {
      ...Ne.dimensionWithGranularitySelectField,
      label: "X-axis"
    },
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
    Ne.xAxisMaxItems,
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
}, b = {
  dimension: B.dimension,
  measures: [B.measure],
  results: B.results1Measure1Dimension,
  hideMenu: true
}, Q = definePreview(u, b), y = (a, s) => ({
  limit: a.maxResults,
  from: a.dataset,
  select: [...a.measures, s ?? a.dimension]
}), A = (a, s) => qIe(y(a, s)), U = {
  onBarClicked: (a) => ({
    axisDimensionValue: a.axisDimensionValue ?? KIe.noFilter()
  })
}, Y = (a, [s, r]) => {
  const i = w(
    a.dimension,
    s == null ? void 0 : s.granularity
  );
  return {
    ...a,
    dimension: i,
    setGranularity: (o) => r({ granularity: o }),
    results: A(a, i)
  };
}, le = {
  Component: u,
  meta: N,
  preview: Q,
  config: {
    props: Y,
    events: U
  }
};
const m = le.preview, t = le.meta, n = defineComponent(le.Component, t, le.config);

export { n as default, t as meta, m as preview };
//# sourceMappingURL=BarChartDefaultPro-C1yb_nm0-CEL4qg3g.js.map
//# sourceMappingURL=BarChartDefaultPro-C1yb_nm0-CEL4qg3g.js.map
