import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { x, a3 as mRe, q as qIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { _ as _e, W as We$1, y } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { P } from './charts.fillGaps.hooks-PCeJ5uuu-BBf-qw__-DRdlHrWG.js';
import { j as j$1, B as B$1 } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { h as h$1 } from './tables.hooks-fVC_4V5K-C3FH5DHI-xu_rWZbu.js';
import { N as Ne, G as Ge } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './index-BS0D-ICk.js';
import './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './quarterOfYear-BLO_Qaw2-CBVA3k0_-BAgvWFqb.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const pe = (e, o) => {
  const n = j$1(o);
  return e.measures.map((s) => {
    var i, t2;
    return {
      key: s.name,
      label: n.dimensionOrMeasureTitle(s),
      showAsPercentage: !!((i = s.inputs) != null && i.showAsPercentage),
      percentageDecimalPlaces: ((t2 = s.inputs) == null ? void 0 : t2.decimalPlaces) ?? 1,
      accessor: (m) => m[s.name] == null ? e.displayNullAs : n.data(s, m[s.name])
    };
  });
}, h = (e, o) => {
  const n = j$1(o);
  return {
    key: e.dimension.name,
    label: n.dimensionOrMeasureTitle(e.dimension),
    formatValue: (s) => n.data(e.dimension, s)
  };
}, Re = (e) => e.filter((o) => {
  var n;
  return (n = o.inputs) == null ? void 0 : n.showColumnTotal;
}).map((o) => o.name), fe = (e) => e.filter((o) => {
  var n;
  return (n = o.inputs) == null ? void 0 : n.showRowTotal;
}).map((o) => o.name), he = (e, o, n = "asc") => [...e].sort((s, i) => s[o] < i[o] ? n === "asc" ? -1 : 1 : s[o] > i[o] ? n === "asc" ? 1 : -1 : 0), g = (e) => {
  var v, y$1;
  const o = useTheme();
  _e(o);
  const { title: n, description: s, tooltip: i } = We$1(e), {
    resultsSubRows: t2,
    measures: m,
    rowDimension: r2,
    subRowDimension: u,
    columnDimension: c,
    displayNullAs: G$1,
    columnWidth: L,
    firstColumnWidth: k,
    hideMenu: N,
    expandedRowKeys: p2,
    setExpandedRowKey: _
  } = e, I = Array.from(
    new Set((e.results.data ?? []).filter(Boolean).map((l) => l[c.name]))
  ), K = Array.from(
    new Set((e.results.data ?? []).filter(Boolean).map((l) => l[r2.name]))
  ), q = P({
    results: e.results,
    dimension: c
  }), V = P({
    results: q,
    dimension: r2
  }), z = h$1({
    results: V,
    columnOrder: I,
    rowOrder: K,
    columnDimension: c,
    rowDimension: r2,
    measures: m
  }), H = reactExports.useRef(null), J = pe({ measures: m, displayNullAs: G$1 }, o), Q = h({ dimension: r2 }, o), U = u ? h({ dimension: u }, o) : void 0, X = h({ dimension: c }, o), Y = Re(m), Z = fe(m), [$, D] = reactExports.useState(/* @__PURE__ */ new Set()), [ee, oe] = reactExports.useState(/* @__PURE__ */ new Map()), ne = (l) => {
    D((d) => new Set(d).add(l)), _(l);
  };
  reactExports.useEffect(() => {
    if (!t2 || !(t2 != null && t2.data) || p2.length === 0)
      return;
    const l = /* @__PURE__ */ new Map();
    p2.forEach((d) => {
      var S, T;
      if ((S = t2.data) == null ? void 0 : S.some(
        (w) => String(w[r2.name]) === d
      )) {
        const w = ((T = t2.data) == null ? void 0 : T.filter((R) => String(R[r2.name]) === d)) ?? [], te = u ? he(w, u.name, "asc") : w;
        l.set(d, te), D((R) => {
          const x2 = new Set(R);
          return x2.delete(d), x2;
        });
      }
    }), oe(l);
  }, [t2, p2, r2, u]);
  const se = {
    ...e.results,
    isLoading: !!((v = e.results) != null && v.isLoading || t2 != null && t2.isLoading)
  };
  return /* @__PURE__ */ x.jsx(
    G,
    {
      ref: H,
      title: n,
      description: s,
      tooltip: i,
      data: se,
      dimensionsAndMeasures: [r2, c, ...m],
      errorMessage: (y$1 = e.results) == null ? void 0 : y$1.error,
      hideMenu: N,
      children: /* @__PURE__ */ x.jsx(
        mRe,
        {
          firstColumnWidth: k,
          columnWidth: L,
          totalLabel: y.t("charts.pivotTable.total"),
          data: z,
          measures: J,
          rowDimension: Q,
          columnDimension: X,
          columnTotalsFor: Y,
          rowTotalsFor: Z,
          expandableRows: !!u,
          subRowsByRow: ee,
          loadingRows: $,
          onRowExpand: ne,
          subRowDimension: U
        }
      )
    }
  );
}, ge = {
  name: "PivotTablePro",
  label: "Pivot Table",
  category: "Table Charts",
  inputs: [
    Ne.dataset,
    {
      ...Ne.measures,
      label: "Measures to display",
      inputs: [
        ...Ne.measures.inputs,
        {
          ...Ge.boolean,
          name: "showColumnTotal",
          label: "Show column total"
        },
        {
          ...Ge.boolean,
          name: "showRowTotal",
          label: "Show row total"
        },
        {
          ...Ge.boolean,
          name: "showAsPercentage",
          label: "Show as percentage",
          description: "If turned on, other measures may be ignored",
          defaultValue: false
        }
      ]
    },
    {
      ...Ne.dimensionWithDateBounds,
      label: "Column dimension",
      name: "columnDimension"
    },
    {
      ...Ne.dimensionWithDateBounds,
      label: "Primary row dimension",
      name: "rowDimension"
    },
    {
      ...Ne.dimension,
      label: "Secondary row dimension (optional)",
      name: "subRowDimension",
      required: false,
      description: "When set, each primary row becomes expandable. Clicking a row loads a breakdown by the second dimension."
    },
    Ne.title,
    Ne.description,
    Ne.tooltip,
    Ne.displayNullAs,
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
}, B = {
  measures: [{ ...B$1.measure, inputs: { showRowTotal: true, showColumnTotal: true } }],
  rowDimension: B$1.dimension,
  columnDimension: B$1.dimensionGroup,
  results: B$1.results1Measure2Dimensions,
  hideMenu: true,
  expandedRowKeys: [],
  setExpandedRowKey: () => {
  }
}, De = definePreview(g, B), E = (e) => ({
  from: e.dataset,
  select: [e.rowDimension, e.columnDimension, ...e.measures],
  limit: e.maxResults,
  countRows: true
}), W = (e) => qIe(E(e)), j = (e, o) => ({
  from: e.dataset,
  select: [e.rowDimension, e.subRowDimension, e.columnDimension, ...e.measures],
  limit: e.maxResults,
  countRows: true,
  filters: [
    {
      property: e.rowDimension,
      operator: "equals",
      value: o
    }
  ]
}), O = (e, o) => {
  if (o.length > 0)
    return qIe(j(e, o));
}, ve = (e, [o, n]) => {
  const s = (o == null ? void 0 : o.expandedRowKeys) ?? [];
  return {
    ...e,
    state: o,
    expandedRowKeys: s,
    setExpandedRowKey: (i) => n({ expandedRowKeys: [...s, i] }),
    results: W(e),
    resultsSubRows: O(e, s)
  };
}, We = {
  Component: g,
  meta: ge,
  preview: De,
  config: {
    props: ve
  }
};
const p = We.preview, t = We.meta, r = defineComponent(We.Component, t, We.config);

export { r as default, t as meta, p as preview };
//# sourceMappingURL=PivotTablePro-CootMCSh-BZZWgizP.js.map
//# sourceMappingURL=PivotTablePro-CootMCSh-BZZWgizP.js.map
