import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { x, u as uRe, q as qIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G as G$1 } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { j, B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { d as d$1 } from './kpis.utils-DsZ2GzuB-Di0OaaGH-DG8vZ8Zh.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const a = (e) => {
  var n2, l;
  const o = useTheme();
  _e(o);
  const { title: f, description: h, tooltip: g, displayNullAs: i } = We(e), { measure: r2, fontSize: C, hideMenu: v, results: s } = e, b = (l = (n2 = s.data) == null ? void 0 : n2[0]) == null ? void 0 : l[r2.name], K = j(o), N = (j2) => K.data(r2, j2), S = d$1(s, r2, !!i);
  return /* @__PURE__ */ x.jsx(
    G$1,
    {
      data: S,
      dimensionsAndMeasures: [r2],
      errorMessage: s.error,
      description: h,
      title: f,
      tooltip: g,
      hideMenu: v,
      children: /* @__PURE__ */ x.jsx(
        uRe,
        {
          displayNullAs: i,
          value: b,
          valueFormatter: N,
          valueFontSize: C
        }
      )
    }
  );
}, R = {
  name: "KpiChartNumberPro",
  label: "Kpi Chart - Number",
  category: "Kpi Charts",
  inputs: [
    Ne.dataset,
    Ne.measure,
    Ne.title,
    Ne.description,
    Ne.displayNullAs,
    Ne.tooltip,
    Ne.fontSize
  ]
}, p$1 = {
  measure: { ...B.measure },
  results: B.results1Measure,
  fontSize: 100,
  hideMenu: true
}, _ = definePreview(a, p$1), d = (e) => ({
  from: e.dataset,
  select: [e.measure]
}), c = (e) => qIe(d(e)), T = (e) => ({
  ...e,
  results: c(e)
}), G = {
  Component: a,
  meta: R,
  preview: _,
  config: {
    props: T
  }
};
const n = G.preview, r = G.meta, p = defineComponent(G.Component, r, G.config);

export { p as default, r as meta, n as preview };
//# sourceMappingURL=KpiChartNumberPro-akn1u_ak-BARhOaUL.js.map
//# sourceMappingURL=KpiChartNumberPro-akn1u_ak-BARhOaUL.js.map
