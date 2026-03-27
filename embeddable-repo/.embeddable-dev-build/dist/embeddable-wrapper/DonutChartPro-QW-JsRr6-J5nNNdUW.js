import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { e as en, x, A as cRe, q as qIe, K as KIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
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

const i = (e2) => {
  var m2;
  const t = useTheme();
  _e(t);
  const {
    description: f,
    dimension: a2,
    maxLegendItems: D,
    measure: n,
    results: o,
    showLegend: P,
    showTooltips: w$1,
    showValueLabels: b,
    title: v,
    onSegmentClick: l
  } = We(e2), { hideMenu: V } = e2, S = O(
    { data: o.data, dimension: a2, measure: n, maxLegendItems: D },
    t
  ), k = en(
    w(n, t),
    ((m2 = t.charts.donutChartPro) == null ? void 0 : m2.options) ?? {}
  ), x$1 = (d) => {
    var u, c;
    l && l({
      dimensionValue: d === void 0 || (c = (u = o.data) == null ? void 0 : u[d]) == null ? void 0 : c[a2.name]
    });
  };
  return /* @__PURE__ */ x.jsx(
    G$1,
    {
      data: o,
      dimensionsAndMeasures: [a2, n],
      errorMessage: o.error,
      description: f,
      title: v,
      hideMenu: V,
      children: /* @__PURE__ */ x.jsx(
        cRe,
        {
          data: S,
          options: k,
          showLegend: P,
          showTooltips: w$1,
          showValueLabels: b,
          onSegmentClick: x$1
        }
      )
    }
  );
}, F = {
  name: "DonutChartPro",
  label: "Donut Chart",
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
}, q = definePreview(i, h), g = (e2) => ({
  from: e2.dataset,
  select: [e2.measure, e2.dimension]
}), C = (e2) => qIe(g(e2)), B = {
  onSegmentClick: (e2) => ({
    dimensionValue: e2.dimensionValue ?? KIe.noFilter()
  })
}, G = (e2) => ({
  ...e2,
  results: C(e2)
}), Y = {
  Component: i,
  meta: F,
  preview: q,
  config: {
    props: G,
    events: B
  }
};
const m = Y.preview, e = Y.meta, a = defineComponent(Y.Component, e, Y.config);

export { a as default, e as meta, m as preview };
//# sourceMappingURL=DonutChartPro-QW-JsRr6-J5nNNdUW.js.map
//# sourceMappingURL=DonutChartPro-QW-JsRr6-J5nNNdUW.js.map
