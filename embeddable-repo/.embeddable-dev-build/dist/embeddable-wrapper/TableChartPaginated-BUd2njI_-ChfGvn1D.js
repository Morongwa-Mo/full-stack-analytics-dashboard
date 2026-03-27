import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { o as we$1, B as eIe, E as fRe, x, F as xIe, J as PIe, q as qIe, K as KIe, e as en } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { _ as _e, W as We, y } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G as G$1 } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { F, N as N$1 } from './tables.utils-o7rLEWDn-DefqD7R2-DVky_i4E.js';
import { N as Ne, G as Ge } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import { B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './index-BS0D-ICk.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const ge = we$1("--em-tablechart-cell-height", "2.5rem"), he = we$1("--em-tablechart-cell-height", "2.5rem"), pe = we$1("--em-tablechart-pagination-height", "3rem");
let j;
const k = (a2) => {
  const e = useTheme();
  _e(e);
  const [i, l] = reactExports.useState(false), { title: r2, description: R, tooltip: f } = We(a2), {
    hideMenu: g,
    totalResults: o,
    results: d,
    allResults: D,
    dimensionsAndMeasures: b,
    displayNullAs: q,
    showIndex: B2,
    clickDimension: C,
    state: m2,
    setState: n,
    onRowClicked: x$1
  } = a2, F$1 = F({ dimensionsAndMeasures: b, displayNullAs: q }, e), y$1 = (d == null ? void 0 : d.data) || [], U = N$1({ rows: y$1, clickDimension: C }), A = reactExports.useRef(null), { height: J } = eIe(A), u = fRe({
    availableHeight: J,
    headerHeight: ge,
    rowHeight: he,
    footerHeight: pe
  }), c = reactExports.useCallback(
    (s) => {
      n == null || n((h) => ({
        ...h,
        ...s
      }));
    },
    [n]
  ), K = (s) => {
    l(true), c({ isLoadingDownloadData: true }), j = (h) => s({
      title: r2,
      data: h,
      dimensionsAndMeasures: b,
      containerRef: A,
      theme: e
    });
  }, Q = (s) => {
    var I;
    if (!x$1 || !C) return;
    const h = (I = y$1[s]) == null ? void 0 : I[C.name];
    x$1(h);
  };
  reactExports.useEffect(() => {
    u && c({ pageSize: u });
  }, [u, c]), reactExports.useEffect(() => {
    n == null || n((s) => ({
      ...s,
      hasTotalResults: false
    }));
  }, [b, u]), reactExports.useEffect(() => {
    o != null && o.total && (n == null || n((s) => ({
      ...s,
      hasTotalResults: true
    })));
  }, [o]), reactExports.useEffect(() => {
    if (i) {
      if (!D || D.isLoading)
        return;
      j(D.data), l(false), c({ isLoadingDownloadData: false });
    }
  }, [i, D, c]);
  const W = (s) => {
    c({ sort: s });
  }, S = (m2 == null ? void 0 : m2.page) ?? 0;
  return /* @__PURE__ */ x.jsx(
    G$1,
    {
      ref: A,
      title: r2,
      description: R,
      tooltip: f,
      data: d,
      dimensionsAndMeasures: b,
      errorMessage: d == null ? void 0 : d.error,
      onCustomDownload: K,
      hideMenu: g,
      children: /* @__PURE__ */ x.jsx(
        xIe,
        {
          onRowIndexClick: Q,
          headers: F$1,
          rows: U,
          showIndex: B2,
          page: S,
          pageSize: u,
          paginationLabel: y.t("charts.tablePaginated.pagination", {
            page: S + 1,
            totalPages: PIe(o == null ? void 0 : o.total, u) ?? "?"
          }),
          total: o == null ? void 0 : o.total,
          sort: m2 == null ? void 0 : m2.sort,
          onSortChange: W,
          onPageChange: (s) => c({ page: s })
        }
      )
    }
  );
}, fe = {
  name: "TableChartPaginated",
  label: "Table Chart - Paginated",
  category: "Table Charts",
  inputs: [
    Ne.dataset,
    {
      ...Ne.dimensionsAndMeasures,
      label: "Columns",
      inputs: [
        ...Ne.dimensionsAndMeasures.inputs,
        Ge.width,
        Ge.align,
        Ge.tableCellStyle
      ]
    },
    Ne.title,
    Ne.description,
    Ne.tooltip,
    {
      ...Ne.boolean,
      name: "showIndex",
      label: "Show index column",
      defaultValue: true,
      category: "Component Settings"
    },
    Ne.displayNullAs,
    { ...Ne.maxResults, label: "Max results to download" },
    {
      ...Ne.dimensionSimple,
      label: "Dimension to set on click",
      name: "clickDimension",
      category: "Data Mapping for Interactions",
      required: false
    }
  ],
  events: [
    {
      name: "onRowClicked",
      label: "A row is clicked",
      properties: [
        {
          name: "rowDimensionValue",
          label: "Clicked row dimension value",
          type: "string"
        }
      ]
    }
  ]
}, T = 3;
var z;
const H = {
  dimensionsAndMeasures: [B.dimension, B.dimensionGroup, B.measure],
  results: {
    ...B.results1Measure2Dimensions,
    data: (z = B.results1Measure2Dimensions.data) == null ? void 0 : z.slice(0, T)
  },
  totalResults: { data: [], total: T, isLoading: false },
  state: {
    page: 0,
    pageSize: T,
    isLoadingDownloadData: false,
    hasTotalResults: true,
    hideMenu: true
  },
  hideMenu: true
}, De = definePreview(k, H), be = {
  page: 0,
  pageSize: void 0,
  sort: void 0,
  isLoadingDownloadData: false,
  hasTotalResults: true
}, V = (a2, e, i, l, r2) => ({
  from: a2.dataset,
  select: r2,
  offset: e * i,
  limit: i,
  orderBy: l
}), _ = (a2, e, i, l, r2) => qIe(V(a2, e, i, l, r2)), E = (a2, e) => ({
  from: a2.dataset,
  select: e,
  offset: 0,
  limit: 0,
  countRows: true
}), N = (a2, e) => qIe(E(a2, e)), O = (a2, e) => ({
  from: a2.dataset,
  select: a2.dimensionsAndMeasures,
  orderBy: e,
  limit: a2.maxResults
}), G = (a2, e) => qIe(O(a2, e)), we = {
  onRowClicked: (a2) => ({
    rowDimensionValue: a2 !== void 0 ? a2 : KIe.noFilter()
  })
}, Re = (a2, [e, i]) => {
  const l = a2.dimensionsAndMeasures.find(
    (g) => {
      var o;
      return g.name === ((o = e == null ? void 0 : e.sort) == null ? void 0 : o.id);
    }
  ), r2 = l && (e != null && e.sort) ? [{ property: l, direction: e.sort.direction }] : [], R = a2.dimensionsAndMeasures.some(
    (g) => {
      var o;
      return g.name === ((o = a2.clickDimension) == null ? void 0 : o.name);
    }
  ), f = [
    ...a2.dimensionsAndMeasures,
    ...R ? [] : [a2.clickDimension]
  ];
  return {
    ...a2,
    state: en(be, e ?? {}),
    setState: i,
    results: e != null && e.pageSize ? _(a2, e.page, e.pageSize, r2, f) : void 0,
    totalResults: e != null && e.hasTotalResults ? void 0 : N(a2, f),
    allResults: e != null && e.isLoadingDownloadData ? G(a2, r2) : void 0
  };
}, Se = {
  Component: k,
  meta: fe,
  preview: De,
  config: {
    props: Re,
    events: we
  }
};
const m = Se.preview, a = Se.meta, r = defineComponent(Se.Component, a, Se.config);

export { r as default, a as meta, m as preview };
//# sourceMappingURL=TableChartPaginated-BUd2njI_-ChfGvn1D.js.map
//# sourceMappingURL=TableChartPaginated-BUd2njI_-ChfGvn1D.js.map
