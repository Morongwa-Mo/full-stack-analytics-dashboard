import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { e as en, x, A as cRe, q as qIe, K as KIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { O, w as w$1 } from './pies.utils-CjGWf1L1-kNVJbSOB-C_n3QbsV.js';
import { j, B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { N as Ne, G as Ge } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './charts.utils-c8yku90J-Chy-UZ3p-Bf2s8PEm.js';
import './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './quarterOfYear-BLO_Qaw2-CBVA3k0_-BAgvWFqb.js';
import './styles.utils-BfpH_m_W-BVwxfT0G-FCoxpF9d.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const l = (e) => {
  var u, c, p;
  const t2 = useTheme(), x$1 = j(t2);
  _e(t2);
  const {
    description: T,
    dimension: n,
    maxLegendItems: I,
    measure: o,
    results: s,
    showLegend: M,
    showTooltips: V,
    showValueLabels: y,
    title: S,
    innerLabelMeasure: m2,
    resultsInnerLabel: r,
    innerLabelText: _,
    onSegmentClick: d
  } = We(e), { hideMenu: k } = e, A = O(
    { data: s.data, dimension: n, measure: o, maxLegendItems: I },
    t2
  ), j$1 = (b) => {
    var g, h;
    d && d({
      dimensionValue: b === void 0 || (h = (g = s.data) == null ? void 0 : g[b]) == null ? void 0 : h[n.name]
    });
  }, R = x$1.data(
    m2,
    (c = (u = r == null ? void 0 : r.data) == null ? void 0 : u[0]) == null ? void 0 : c[m2.name]
  ), F = en(
    w$1(o, t2),
    ((p = t2.charts.donutLabelChartPro) == null ? void 0 : p.options) ?? {}
  );
  return /* @__PURE__ */ x.jsx(
    G,
    {
      data: s,
      dimensionsAndMeasures: [n, o],
      errorMessage: s.error,
      description: T,
      title: S,
      hideMenu: k,
      children: /* @__PURE__ */ x.jsx(
        cRe,
        {
          label: R,
          subLabel: _,
          data: A,
          options: F,
          showLegend: M,
          showTooltips: V,
          showValueLabels: y,
          onSegmentClick: j$1
        }
      )
    }
  );
}, W = {
  name: "DonutLabelChartPro",
  label: "Donut Label Chart",
  category: "Pie Charts",
  inputs: [
    Ne.dataset,
    { ...Ne.measure, inputs: [...Ne.measure.inputs, Ge.showValueAsPercentage] },
    Ne.dimension,
    { ...Ne.measure, name: "innerLabelMeasure", label: "Inner label measure" },
    {
      ...Ne.string,
      name: "innerLabelText",
      label: "Inner label text",
      description: "Text to display inside the donut chart",
      category: "Component Data"
    },
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
}, f = {
  dimension: B.dimension,
  measure: B.measure,
  results: B.results1Measure1Dimension,
  innerLabelText: "Total",
  resultsInnerLabel: {
    isLoading: false,
    error: void 0,
    data: [{ users: 500 }]
  },
  innerLabelMeasure: {
    name: "users",
    title: "Users",
    nativeType: "number",
    __type__: "measure"
  },
  showValueLabels: false,
  hideMenu: true
}, X = definePreview(l, f), D = (e) => ({
  from: e.dataset,
  select: [e.measure, e.dimension]
}), P = (e) => qIe(D(e)), v = (e) => ({
  from: e.dataset,
  select: [e.innerLabelMeasure]
}), w = (e) => qIe(v(e)), Y = {
  onSegmentClick: (e) => ({
    dimensionValue: e.dimensionValue ?? KIe.noFilter()
  })
}, Z = (e) => ({
  ...e,
  results: P(e),
  resultsInnerLabel: w(e)
}), ie = {
  Component: l,
  meta: W,
  preview: X,
  config: {
    props: Z,
    events: Y
  }
};
const a = ie.preview, t = ie.meta, m = defineComponent(ie.Component, t, ie.config);

export { m as default, t as meta, a as preview };
//# sourceMappingURL=DonutLabelChartPro-C_2zr3sM-B_Ll-l1-.js.map
//# sourceMappingURL=DonutLabelChartPro-C_2zr3sM-B_Ll-l1-.js.map
