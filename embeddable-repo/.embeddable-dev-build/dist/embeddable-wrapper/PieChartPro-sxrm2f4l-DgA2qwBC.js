import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { e as en, x, a2 as dRe, q as qIe, K as KIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { O, w } from './pies.utils-CjGWf1L1-kNVJbSOB-C_n3QbsV.js';
import { _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G as G$1 } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { N as Ne, G as Ge } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import { B as B$1 } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './charts.utils-c8yku90J-Chy-UZ3p-Bf2s8PEm.js';
import './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './quarterOfYear-BLO_Qaw2-CBVA3k0_-BAgvWFqb.js';
import './styles.utils-BfpH_m_W-BVwxfT0G-FCoxpF9d.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const r = (e) => {
  var m;
  const t2 = useTheme();
  _e(t2);
  const { description: P, title: f } = We(e), {
    dimension: o,
    maxLegendItems: w$1,
    measure: n2,
    results: a,
    showLegend: b,
    showTooltips: v,
    showValueLabels: V,
    onSegmentClick: l
  } = e, { hideMenu: D } = e, S = O(
    { data: a.data, dimension: o, measure: n2, maxLegendItems: w$1 },
    t2
  ), k = en(
    w(n2, t2),
    ((m = t2.charts.pieChartPro) == null ? void 0 : m.options) ?? {}
  ), x$1 = (d) => {
    var u, c;
    l && l({
      dimensionValue: d === void 0 || (c = (u = a.data) == null ? void 0 : u[d]) == null ? void 0 : c[o.name]
    });
  };
  return /* @__PURE__ */ x.jsx(
    G$1,
    {
      data: a,
      dimensionsAndMeasures: [o, n2],
      errorMessage: a.error,
      description: P,
      title: f,
      hideMenu: D,
      children: /* @__PURE__ */ x.jsx(
        dRe,
        {
          data: S,
          options: k,
          showLegend: b,
          showTooltips: v,
          showValueLabels: V,
          onSegmentClick: x$1
        }
      )
    }
  );
}, F = {
  name: "PieChartPro",
  label: "Pie Chart",
  category: "Pie Charts",
  inputs: [
    Ne.dataset,
    { ...Ne.measure, inputs: [...Ne.measure.inputs, Ge.showValueAsPercentage] },
    Ne.dimension,
    Ne.title,
    Ne.description,
    Ne.tooltip,
    Ne.showLegend,
    Ne.maxLegendItems,
    Ne.showTooltips,
    Ne.showValueLabels
  ],
  events: [
    {
      name: "onSegmentClick",
      label: "A segment is clicked",
      properties: [
        {
          name: "dimensionValue",
          label: "Clicked dimension",
          type: "string"
        }
      ]
    }
  ]
}, h = {
  dimension: B$1.dimension,
  measure: B$1.measure,
  results: B$1.results1Measure1Dimension,
  showValueLabels: false,
  hideMenu: true
}, q = definePreview(r, h), g = (e) => ({
  from: e.dataset,
  select: [e.measure, e.dimension]
}), C = (e) => qIe(g(e)), B = {
  onSegmentClick: (e) => ({
    dimensionValue: e.dimensionValue ?? KIe.noFilter()
  })
}, G = (e) => ({
  ...e,
  results: C(e)
}), Y = {
  Component: r,
  meta: F,
  preview: q,
  config: {
    props: G,
    events: B
  }
};
const n = Y.preview, t = Y.meta, p = defineComponent(Y.Component, t, Y.config);

export { p as default, t as meta, n as preview };
//# sourceMappingURL=PieChartPro-sxrm2f4l-DgA2qwBC.js.map
//# sourceMappingURL=PieChartPro-sxrm2f4l-DgA2qwBC.js.map
