import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { x, D as DIe, q as qIe, K as KIe, e as en } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { _ as _e$1, W as We$1, y } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { G as G$1 } from './ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { F, N } from './tables.utils-o7rLEWDn-DefqD7R2-DVky_i4E.js';
import { N as Ne$1, G as Ge$1 } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import { B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './index-BS0D-ICk.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const P = 50, { getOwnPropertyNames: Ce, getOwnPropertySymbols: qe } = Object, { hasOwnProperty: Oe } = Object.prototype;
function _(t2, e) {
  return function(r, a, l) {
    return t2(r, a, l) && e(r, a, l);
  };
}
function I(t2) {
  return function(n2, r, a) {
    if (!n2 || !r || typeof n2 != "object" || typeof r != "object")
      return t2(n2, r, a);
    const { cache: l } = a, i = l.get(n2), s = l.get(r);
    if (i && s)
      return i === r && s === n2;
    l.set(n2, r), l.set(r, n2);
    const f = t2(n2, r, a);
    return l.delete(n2), l.delete(r), f;
  };
}
function W(t2) {
  return Ce(t2).concat(qe(t2));
}
const xe = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || ((t2, e) => Oe.call(t2, e))
), Re = "__v", Me = "__o", Se = "_owner", { getOwnPropertyDescriptor: $, keys: G } = Object, D = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.is || function(e, n2) {
    return e === n2 ? e !== 0 || 1 / e === 1 / n2 : e !== e && n2 !== n2;
  }
);
function Ie(t2, e) {
  return t2 === e;
}
function Le(t2, e) {
  return t2.byteLength === e.byteLength && L(new Uint8Array(t2), new Uint8Array(e));
}
function ve(t2, e, n2) {
  let r = t2.length;
  if (e.length !== r)
    return false;
  for (; r-- > 0; )
    if (!n2.equals(t2[r], e[r], r, r, t2, e, n2))
      return false;
  return true;
}
function ke(t2, e) {
  return t2.byteLength === e.byteLength && L(new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength), new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
}
function _e(t2, e) {
  return D(t2.getTime(), e.getTime());
}
function Pe(t2, e) {
  return t2.name === e.name && t2.message === e.message && t2.cause === e.cause && t2.stack === e.stack;
}
function K(t2, e, n2) {
  const r = t2.size;
  if (r !== e.size)
    return false;
  if (!r)
    return true;
  const a = new Array(r), l = t2.entries();
  let i, s, f = 0;
  for (; (i = l.next()) && !i.done; ) {
    const p = e.entries();
    let d = false, u = 0;
    for (; (s = p.next()) && !s.done; ) {
      if (a[u]) {
        u++;
        continue;
      }
      const o = i.value, c = s.value;
      if (n2.equals(o[0], c[0], f, u, t2, e, n2) && n2.equals(o[1], c[1], o[0], c[0], t2, e, n2)) {
        d = a[u] = true;
        break;
      }
      u++;
    }
    if (!d)
      return false;
    f++;
  }
  return true;
}
function Ue(t2, e, n2) {
  const r = G(t2);
  let a = r.length;
  if (G(e).length !== a)
    return false;
  for (; a-- > 0; )
    if (!X(t2, e, n2, r[a]))
      return false;
  return true;
}
function R(t2, e, n2) {
  const r = W(t2);
  let a = r.length;
  if (W(e).length !== a)
    return false;
  let l, i, s;
  for (; a-- > 0; )
    if (l = r[a], !X(t2, e, n2, l) || (i = $(t2, l), s = $(e, l), (i || s) && (!i || !s || i.configurable !== s.configurable || i.enumerable !== s.enumerable || i.writable !== s.writable)))
      return false;
  return true;
}
function Be(t2, e) {
  return D(t2.valueOf(), e.valueOf());
}
function Te(t2, e) {
  return t2.source === e.source && t2.flags === e.flags;
}
function H(t2, e, n2) {
  const r = t2.size;
  if (r !== e.size)
    return false;
  if (!r)
    return true;
  const a = new Array(r), l = t2.values();
  let i, s;
  for (; (i = l.next()) && !i.done; ) {
    const f = e.values();
    let p = false, d = 0;
    for (; (s = f.next()) && !s.done; ) {
      if (!a[d] && n2.equals(i.value, s.value, i.value, s.value, t2, e, n2)) {
        p = a[d] = true;
        break;
      }
      d++;
    }
    if (!p)
      return false;
  }
  return true;
}
function L(t2, e) {
  let n2 = t2.byteLength;
  if (e.byteLength !== n2 || t2.byteOffset !== e.byteOffset)
    return false;
  for (; n2-- > 0; )
    if (t2[n2] !== e[n2])
      return false;
  return true;
}
function Ve(t2, e) {
  return t2.hostname === e.hostname && t2.pathname === e.pathname && t2.protocol === e.protocol && t2.port === e.port && t2.hash === e.hash && t2.username === e.username && t2.password === e.password;
}
function X(t2, e, n2, r) {
  return (r === Se || r === Me || r === Re) && (t2.$$typeof || e.$$typeof) ? true : xe(e, r) && n2.equals(t2[r], e[r], r, r, t2, e, n2);
}
const Ne = Object.prototype.toString;
function Fe(t2) {
  const e = Ge(t2), { areArraysEqual: n2, areDatesEqual: r, areFunctionsEqual: a, areMapsEqual: l, areNumbersEqual: i, areObjectsEqual: s, areRegExpsEqual: f, areSetsEqual: p, getUnsupportedCustomComparator: d } = t2;
  return function(o, c, m2) {
    if (o === c)
      return true;
    if (o == null || c == null)
      return false;
    const b = typeof o;
    if (b !== typeof c)
      return false;
    if (b !== "object")
      return b === "number" || b === "bigint" ? i(o, c, m2) : b === "function" ? a(o, c, m2) : false;
    const g = o.constructor;
    if (g !== c.constructor)
      return false;
    if (g === Object)
      return s(o, c, m2);
    if (g === Array)
      return n2(o, c, m2);
    if (g === Date)
      return r(o, c, m2);
    if (g === RegExp)
      return f(o, c, m2);
    if (g === Map)
      return l(o, c, m2);
    if (g === Set)
      return p(o, c, m2);
    if (g === Promise)
      return false;
    if (Array.isArray(o))
      return n2(o, c, m2);
    const y2 = Ne.call(o), w = e[y2];
    if (w)
      return w(o, c, m2);
    const C = d && d(o, c, m2, y2);
    return C ? C(o, c, m2) : false;
  };
}
function ze({ circular: t2, createCustomConfig: e, strict: n2 }) {
  let r = {
    areArrayBuffersEqual: Le,
    areArraysEqual: n2 ? R : ve,
    areDataViewsEqual: ke,
    areDatesEqual: _e,
    areErrorsEqual: Pe,
    areFunctionsEqual: Ie,
    areMapsEqual: n2 ? _(K, R) : K,
    areNumbersEqual: D,
    areObjectsEqual: n2 ? R : Ue,
    arePrimitiveWrappersEqual: Be,
    areRegExpsEqual: Te,
    areSetsEqual: n2 ? _(H, R) : H,
    areTypedArraysEqual: n2 ? _(L, R) : L,
    areUrlsEqual: Ve,
    getUnsupportedCustomComparator: void 0
  };
  if (e && (r = Object.assign({}, r, e(r))), t2) {
    const a = I(r.areArraysEqual), l = I(r.areMapsEqual), i = I(r.areObjectsEqual), s = I(r.areSetsEqual);
    r = Object.assign({}, r, {
      areArraysEqual: a,
      areMapsEqual: l,
      areObjectsEqual: i,
      areSetsEqual: s
    });
  }
  return r;
}
function We(t2) {
  return function(e, n2, r, a, l, i, s) {
    return t2(e, n2, s);
  };
}
function $e({ circular: t2, comparator: e, createState: n2, equals: r, strict: a }) {
  if (n2)
    return function(s, f) {
      const { cache: p = t2 ? /* @__PURE__ */ new WeakMap() : void 0, meta: d } = n2();
      return e(s, f, {
        cache: p,
        equals: r,
        meta: d,
        strict: a
      });
    };
  if (t2)
    return function(s, f) {
      return e(s, f, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: r,
        meta: void 0,
        strict: a
      });
    };
  const l = {
    cache: void 0,
    equals: r,
    meta: void 0,
    strict: a
  };
  return function(s, f) {
    return e(s, f, l);
  };
}
function Ge({ areArrayBuffersEqual: t2, areArraysEqual: e, areDataViewsEqual: n2, areDatesEqual: r, areErrorsEqual: a, areFunctionsEqual: l, areMapsEqual: i, areNumbersEqual: s, areObjectsEqual: f, arePrimitiveWrappersEqual: p, areRegExpsEqual: d, areSetsEqual: u, areTypedArraysEqual: o, areUrlsEqual: c }) {
  return {
    "[object Arguments]": f,
    "[object Array]": e,
    "[object ArrayBuffer]": t2,
    "[object AsyncGeneratorFunction]": l,
    "[object BigInt]": s,
    "[object BigInt64Array]": o,
    "[object BigUint64Array]": o,
    "[object Boolean]": p,
    "[object DataView]": n2,
    "[object Date]": r,
    // If an error tag, it should be tested explicitly. Like RegExp, the properties are not
    // enumerable, and therefore will give false positives if tested like a standard object.
    "[object Error]": a,
    "[object Float16Array]": o,
    "[object Float32Array]": o,
    "[object Float64Array]": o,
    "[object Function]": l,
    "[object GeneratorFunction]": l,
    "[object Int8Array]": o,
    "[object Int16Array]": o,
    "[object Int32Array]": o,
    "[object Map]": i,
    "[object Number]": p,
    "[object Object]": (m2, b, g) => (
      // The exception for value comparison is custom `Promise`-like class instances. These should
      // be treated the same as standard `Promise` objects, which means strict equality, and if
      // it reaches this point then that strict equality comparison has already failed.
      typeof m2.then != "function" && typeof b.then != "function" && f(m2, b, g)
    ),
    // For RegExp, the properties are not enumerable, and therefore will give false positives if
    // tested like a standard object.
    "[object RegExp]": d,
    "[object Set]": u,
    "[object String]": p,
    "[object URL]": c,
    "[object Uint8Array]": o,
    "[object Uint8ClampedArray]": o,
    "[object Uint16Array]": o,
    "[object Uint32Array]": o
  };
}
const Ke = j();
j({ strict: true });
j({ circular: true });
j({
  circular: true,
  strict: true
});
j({
  createInternalComparator: () => D
});
j({
  strict: true,
  createInternalComparator: () => D
});
j({
  circular: true,
  createInternalComparator: () => D
});
j({
  circular: true,
  createInternalComparator: () => D,
  strict: true
});
function j(t2 = {}) {
  const { circular: e = false, createInternalComparator: n2, createState: r, strict: a = false } = t2, l = ze(t2), i = Fe(l), s = n2 ? n2(i) : We(i);
  return $e({ circular: e, comparator: i, createState: r, equals: s, strict: a });
}
let Z;
const U = (t2) => {
  const e = useTheme();
  _e$1(e);
  const [n2, r] = reactExports.useState(false), [a, l] = reactExports.useState([]), { title: i, description: s, tooltip: f } = We$1(t2), {
    hideMenu: p,
    dataset: d,
    results: u,
    allResults: o,
    dimensionsAndMeasures: c,
    displayNullAs: m2,
    showIndex: b,
    clickDimension: g,
    state: y$1,
    setState: w,
    onRowClicked: C
  } = t2, oe = F({ dimensionsAndMeasures: c, displayNullAs: m2 }, e), v = (u == null ? void 0 : u.data) ?? [], B2 = reactExports.useRef(null), T = reactExports.useRef(null), q = reactExports.useRef(true), V = reactExports.useRef(null);
  reactExports.useEffect(() => {
    Ke(d.variableValues, V.current) || (q.current = true, V.current = d.variableValues, w == null || w((h) => ({
      ...h,
      page: 0
    })));
  }, [d.variableValues]), reactExports.useEffect(() => {
    var h;
    if (u != null && u.data) {
      if (q.current) {
        l([...v]), q.current = false, (h = T.current) == null || h.scrollToTop("smooth");
        return;
      }
      l((A) => [...A, ...v]);
    }
  }, [v]);
  const O = reactExports.useCallback(
    (h) => {
      w == null || w((A) => ({
        ...A,
        ...h
      }));
    },
    [w]
  ), ae = (h) => {
    r(true), O({ isLoadingDownloadData: true }), Z = (A) => h({
      title: i,
      data: A,
      dimensionsAndMeasures: c,
      containerRef: B2,
      theme: e
    });
  }, se = (h) => {
    var N2;
    if (!g) return;
    const A = (N2 = a[h]) == null ? void 0 : N2[g.name];
    C == null || C(A);
  };
  reactExports.useEffect(() => {
    if (n2) {
      if (!o || o.isLoading)
        return;
      Z(o.data), r(false), O({ isLoadingDownloadData: false });
    }
  }, [n2, o, O]);
  const ie = () => {
    u.isLoading || O({ page: ((y$1 == null ? void 0 : y$1.page) ?? 0) + 1 });
  }, le = (h) => {
    q.current = true, O({ sort: h, page: 0 });
  }, ue = (u == null ? void 0 : u.data) && u.data.length === P, ce = !!(u != null && u.isLoading || o != null && o.isLoading), fe = (u == null ? void 0 : u.isLoading) && !q.current;
  return /* @__PURE__ */ x.jsx(
    G$1,
    {
      ref: B2,
      title: i,
      description: s,
      tooltip: f,
      data: {
        isLoading: ce,
        data: a
      },
      dimensionsAndMeasures: c,
      errorMessage: u == null ? void 0 : u.error,
      onCustomDownload: ae,
      hideMenu: p,
      children: /* @__PURE__ */ x.jsx(
        DIe,
        {
          ref: T,
          hasMoreData: ue,
          onRowIndexClick: se,
          headers: oe,
          rows: N({ rows: a, clickDimension: g }),
          showIndex: b,
          sort: y$1 == null ? void 0 : y$1.sort,
          isLoading: fe,
          loadingLabel: y.t("common.loading"),
          onNextPage: ie,
          onSortChange: le
        }
      )
    }
  );
}, He = {
  name: "TableScrollable",
  label: "Table Chart - Scrollable",
  category: "Table Charts",
  inputs: [
    Ne$1.dataset,
    {
      ...Ne$1.dimensionsAndMeasures,
      label: "Columns",
      inputs: [
        ...Ne$1.dimensionsAndMeasures.inputs,
        Ge$1.width,
        Ge$1.align,
        Ge$1.displayFormat,
        Ge$1.tableCellStyle
      ]
    },
    Ne$1.title,
    Ne$1.description,
    Ne$1.tooltip,
    {
      ...Ne$1.boolean,
      name: "showIndex",
      label: "Show index column",
      defaultValue: true,
      category: "Component Settings"
    },
    Ne$1.displayNullAs,
    { ...Ne$1.maxResults, label: "Max results to download" },
    {
      ...Ne$1.dimensionSimple,
      label: "Dimension to set on click",
      name: "clickDimension",
      category: "Data mapping for interactions",
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
}, Y = {
  dimensionsAndMeasures: [B.dimension, B.dimensionGroup, B.measure],
  results: B.results1Measure2Dimensions,
  dataset: B.dataset,
  hideMenu: true
}, Ze = definePreview(U, Y), J = {
  page: 0,
  sort: void 0,
  isLoadingDownloadData: false
}, ee = (t2, e, n2, r) => ({
  from: t2.dataset,
  select: r,
  offset: e * P,
  limit: P,
  orderBy: n2
}), te = (t2, e, n2, r) => qIe(ee(t2, e, n2, r)), re = (t2, e) => ({
  from: t2.dataset,
  select: t2.dimensionsAndMeasures,
  orderBy: e,
  limit: t2.maxResults
}), ne = (t2, e, n2) => {
  if (n2 != null && n2.isLoadingDownloadData)
    return qIe(re(t2, e));
}, Je = {
  onRowClicked: (t2) => ({
    rowDimensionValue: t2 !== void 0 ? t2 : KIe.noFilter()
  })
}, Qe = (t2, [e, n2]) => {
  const r = t2.dimensionsAndMeasures.find(
    (s) => {
      var f;
      return s.name === ((f = e == null ? void 0 : e.sort) == null ? void 0 : f.id);
    }
  ), a = r && (e != null && e.sort) ? [{ property: r, direction: e.sort.direction }] : [], l = t2.dimensionsAndMeasures.some(
    (s) => {
      var f;
      return s.name === ((f = t2.clickDimension) == null ? void 0 : f.name);
    }
  ), i = [
    ...t2.dimensionsAndMeasures,
    ...l ? [] : [t2.clickDimension]
  ];
  return {
    ...t2,
    state: en(J, e ?? {}),
    setState: n2,
    results: te(
      t2,
      e != null && e.page ? e.page : J.page,
      a,
      i
    ),
    allResults: ne(t2, a, e)
  };
}, it = {
  Component: U,
  meta: He,
  preview: Ze,
  config: {
    props: Qe,
    events: Je
  }
};
const m = it.preview, t = it.meta, n = defineComponent(it.Component, t, it.config);

export { n as default, t as meta, m as preview };
//# sourceMappingURL=TableScrollable-CLavWEnA-DvT-MfdY.js.map
//# sourceMappingURL=TableScrollable-CLavWEnA-DvT-MfdY.js.map
