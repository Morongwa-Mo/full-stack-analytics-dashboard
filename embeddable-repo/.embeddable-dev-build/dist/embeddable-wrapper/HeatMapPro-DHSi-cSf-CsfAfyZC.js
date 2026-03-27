import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { x, n as hRe, k as ke, q as qIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { j, B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { P } from './charts.fillGaps.hooks-PCeJ5uuu-BBf-qw__-DRdlHrWG.js';
import { h } from './tables.hooks-fVC_4V5K-C3FH5DHI-xu_rWZbu.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './quarterOfYear-BLO_Qaw2-CBVA3k0_-BAgvWFqb.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const f = (e, t2) => {
  const n2 = j(t2);
  return {
    key: e.measure.name,
    label: n2.dimensionOrMeasureTitle(e.measure),
    format: (a) => n2.data(e.measure, a)
  };
}, u = (e, t2) => {
  const n2 = j(t2);
  return {
    key: e.dimension.name,
    label: n2.dimensionOrMeasureTitle(e.dimension),
    format: (a) => n2.data(e.dimension, a)
  };
}, d = (e) => {
  var c;
  const t2 = useTheme();
  _e(t2);
  const { title: n2, description: a, tooltip: D } = We(e), {
    hideMenu: M,
    measure: l,
    rowDimension: s,
    columnDimension: i,
    maxColor: x$1,
    midColor: y,
    minColor: S,
    displayNullAs: v,
    columnWidth: T,
    firstColumnWidth: R,
    showValues: F,
    minThreshold: A,
    maxThreshold: H
  } = e, j2 = Array.from(
    new Set((e.results.data ?? []).filter(Boolean).map((m) => m[i.name]))
  ), O = Array.from(
    new Set((e.results.data ?? []).filter(Boolean).map((m) => m[s.name]))
  ), P$1 = P({
    results: e.results,
    dimension: i
  }), W = P({
    results: P$1,
    dimension: s
  }), G$1 = h({
    results: W,
    columnOrder: j2,
    rowOrder: O,
    columnDimension: i,
    rowDimension: s,
    measures: [l]
  }), B2 = f({ measure: l }, t2), _ = u({ dimension: s }, t2), E = u({ dimension: i }, t2);
  return /* @__PURE__ */ x.jsx(
    G,
    {
      title: n2,
      description: a,
      tooltip: D,
      data: e.results,
      dimensionsAndMeasures: [s, i, l],
      errorMessage: (c = e.results) == null ? void 0 : c.error,
      hideMenu: M,
      children: /* @__PURE__ */ x.jsx(
        hRe,
        {
          data: G$1,
          measure: B2,
          rowDimension: _,
          columnDimension: E,
          maxColor: x$1,
          midColor: y ?? ke("--em-tablechart-heatmap-color", "#FF5400"),
          minColor: S,
          showValues: F,
          minThreshold: A,
          maxThreshold: H,
          columnWidth: T,
          firstColumnWidth: R,
          displayNullAs: v
        }
      )
    }
  );
}, Q = {
  name: "HeatMapPro",
  label: "Heat Map",
  category: "Table Charts",
  inputs: [
    Ne.dataset,
    Ne.measure,
    {
      ...Ne.dimensionWithDateBounds,
      label: "Row dimension",
      name: "rowDimension"
    },
    {
      ...Ne.dimensionWithDateBounds,
      label: "Column dimension",
      name: "columnDimension"
    },
    Ne.title,
    Ne.description,
    Ne.tooltip,
    Ne.displayNullAs,
    {
      ...Ne.color,
      name: "midColor",
      label: "Mid-point color (optional)"
    },
    {
      ...Ne.color,
      name: "maxColor",
      label: "Max-point color (optional)"
    },
    {
      ...Ne.color,
      name: "minColor",
      label: "Min-point color (optional)"
    },
    {
      ...Ne.string,
      name: "minThreshold",
      label: "Max-point range lower limit",
      description: "Enter a value as either a number (e.g. 20) or a percentage (e.g. 20%)",
      category: "Component Settings"
    },
    {
      ...Ne.string,
      name: "maxThreshold",
      label: "Min-point range upper limit",
      description: "Enter a value as either a number (e.g. 20) or a percentage (e.g. 20%)",
      category: "Component Settings"
    },
    {
      ...Ne.boolean,
      name: "showValues",
      label: "Show values",
      defaultValue: true,
      category: "Component Settings"
    },
    {
      ...Ne.number,
      name: "firstColumnWidth",
      label: "First column width",
      description: "Set the width in px (e.g. 200)",
      category: "Component Settings"
    },
    {
      ...Ne.number,
      name: "columnWidth",
      label: "Column width",
      description: "Set the width in px (e.g. 200)",
      category: "Component Settings"
    },
    Ne.maxResults
  ]
}, C = {
  rowDimension: B.dimension,
  columnDimension: B.dimensionGroup,
  measure: B.measure,
  results: B.results1Measure2Dimensions,
  hideMenu: true
}, U = definePreview(d, C), b = (e) => ({
  from: e.dataset,
  select: [e.rowDimension, e.columnDimension, e.measure],
  limit: e.maxResults,
  countRows: true
}), w = (e) => qIe(b(e)), X = (e) => ({
  ...e,
  results: w(e)
}), ie = {
  Component: d,
  meta: Q,
  preview: U,
  config: {
    props: X
  }
};
const n = ie.preview, t = ie.meta, p = defineComponent(ie.Component, t, ie.config);

export { p as default, t as meta, n as preview };
//# sourceMappingURL=HeatMapPro-DHSi-cSf-CsfAfyZC.js.map
//# sourceMappingURL=HeatMapPro-DHSi-cSf-CsfAfyZC.js.map
