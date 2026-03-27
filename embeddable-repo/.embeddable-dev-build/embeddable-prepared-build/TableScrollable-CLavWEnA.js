import { d as definePreview, u as useTheme, a as defineComponent } from "./index.esm-nuP141l8.js";
import { x, D as DIe, K as KIe, e as en, q as qIe } from "./index-CnLFSN1m-CiKoWgQc.js";
import { _ as _e$1, W as We$1, y } from "./component.utils-CbnwaSi1-v-XPM_Ab.js";
import { G as G$1 } from "./ChartCard-DTKoe0RT-CvFYVyHo.js";
import { r as reactExports } from "./embeddable-entry-point-DBGUUjol.js";
import { F, N } from "./tables.utils-o7rLEWDn-DefqD7R2.js";
import { N as Ne$1, G as Ge$1 } from "./component.inputs.constants-Cs7gX1rI-ChA2Mp06.js";
import { B } from "./preview.data.constants-BZ8b6ZQ1-BtTomI2a.js";
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
export {
  n as default,
  t as meta,
  m as preview
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVTY3JvbGxhYmxlLUNMYXZXRW5BLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbW9yb25nd2EvZW1iZWRkYWJsZV9odWJzcG90X2Rhc2gvZW1iZWRkYWJsZS1yZXBvL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vcmVtYXJrYWJsZS1wcm8vZGlzdC9kZWZpbml0aW9uLUNtQkhpTndULmpzIiwiL1VzZXJzL21vcm9uZ3dhL2VtYmVkZGFibGVfaHVic3BvdF9kYXNoL2VtYmVkZGFibGUtcmVwby9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3JlbWFya2FibGUtcHJvL2Rpc3QvVGFibGVTY3JvbGxhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGogYXMgRiwgTyBhcyBkZSwgViBhcyBtZSwgbSBhcyBwZSwgbCBhcyBRIH0gZnJvbSBcIi4vaW5kZXgtQ25MRlNOMW0uanNcIjtcbmltcG9ydCB7IHVzZVRoZW1lIGFzIGdlLCBkZWZpbmVQcmV2aWV3IGFzIGhlIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgYSBhcyBiZSwgciBhcyB3ZSwgaSBhcyBFZSB9IGZyb20gXCIuL2NvbXBvbmVudC51dGlscy1DYm53YVNpMS5qc1wiO1xuaW1wb3J0IHsgQyBhcyB5ZSB9IGZyb20gXCIuL0NoYXJ0Q2FyZC1EVEtvZTBSVC5qc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgYXMgeiwgdXNlUmVmIGFzIE0sIHVzZUVmZmVjdCBhcyBrLCB1c2VDYWxsYmFjayBhcyBqZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYiBhcyBBZSwgYyBhcyBEZSB9IGZyb20gXCIuL3RhYmxlcy51dGlscy1vN3JMRVdEbi5qc1wiO1xuaW1wb3J0IHsgaSBhcyBFLCBzIGFzIFMgfSBmcm9tIFwiLi9jb21wb25lbnQuaW5wdXRzLmNvbnN0YW50cy1DczdnWDFySS5qc1wiO1xuaW1wb3J0IHsgcCBhcyB4IH0gZnJvbSBcIi4vcHJldmlldy5kYXRhLmNvbnN0YW50cy1CWjhiNlpRMS5qc1wiO1xuY29uc3QgUCA9IDUwLCB7IGdldE93blByb3BlcnR5TmFtZXM6IENlLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IHFlIH0gPSBPYmplY3QsIHsgaGFzT3duUHJvcGVydHk6IE9lIH0gPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gXyh0LCBlKSB7XG4gIHJldHVybiBmdW5jdGlvbihyLCBhLCBsKSB7XG4gICAgcmV0dXJuIHQociwgYSwgbCkgJiYgZShyLCBhLCBsKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIEkodCkge1xuICByZXR1cm4gZnVuY3Rpb24obiwgciwgYSkge1xuICAgIGlmICghbiB8fCAhciB8fCB0eXBlb2YgbiAhPSBcIm9iamVjdFwiIHx8IHR5cGVvZiByICE9IFwib2JqZWN0XCIpXG4gICAgICByZXR1cm4gdChuLCByLCBhKTtcbiAgICBjb25zdCB7IGNhY2hlOiBsIH0gPSBhLCBpID0gbC5nZXQobiksIHMgPSBsLmdldChyKTtcbiAgICBpZiAoaSAmJiBzKVxuICAgICAgcmV0dXJuIGkgPT09IHIgJiYgcyA9PT0gbjtcbiAgICBsLnNldChuLCByKSwgbC5zZXQociwgbik7XG4gICAgY29uc3QgZiA9IHQobiwgciwgYSk7XG4gICAgcmV0dXJuIGwuZGVsZXRlKG4pLCBsLmRlbGV0ZShyKSwgZjtcbiAgfTtcbn1cbmZ1bmN0aW9uIFcodCkge1xuICByZXR1cm4gQ2UodCkuY29uY2F0KHFlKHQpKTtcbn1cbmNvbnN0IHhlID0gKFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LWNvbmRpdGlvblxuICBPYmplY3QuaGFzT3duIHx8ICgodCwgZSkgPT4gT2UuY2FsbCh0LCBlKSlcbiksIFJlID0gXCJfX3ZcIiwgTWUgPSBcIl9fb1wiLCBTZSA9IFwiX293bmVyXCIsIHsgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkLCBrZXlzOiBHIH0gPSBPYmplY3QsIEQgPSAoXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5uZWNlc3NhcnktY29uZGl0aW9uXG4gIE9iamVjdC5pcyB8fCBmdW5jdGlvbihlLCBuKSB7XG4gICAgcmV0dXJuIGUgPT09IG4gPyBlICE9PSAwIHx8IDEgLyBlID09PSAxIC8gbiA6IGUgIT09IGUgJiYgbiAhPT0gbjtcbiAgfVxuKTtcbmZ1bmN0aW9uIEllKHQsIGUpIHtcbiAgcmV0dXJuIHQgPT09IGU7XG59XG5mdW5jdGlvbiBMZSh0LCBlKSB7XG4gIHJldHVybiB0LmJ5dGVMZW5ndGggPT09IGUuYnl0ZUxlbmd0aCAmJiBMKG5ldyBVaW50OEFycmF5KHQpLCBuZXcgVWludDhBcnJheShlKSk7XG59XG5mdW5jdGlvbiB2ZSh0LCBlLCBuKSB7XG4gIGxldCByID0gdC5sZW5ndGg7XG4gIGlmIChlLmxlbmd0aCAhPT0gcilcbiAgICByZXR1cm4gITE7XG4gIGZvciAoOyByLS0gPiAwOyApXG4gICAgaWYgKCFuLmVxdWFscyh0W3JdLCBlW3JdLCByLCByLCB0LCBlLCBuKSlcbiAgICAgIHJldHVybiAhMTtcbiAgcmV0dXJuICEwO1xufVxuZnVuY3Rpb24ga2UodCwgZSkge1xuICByZXR1cm4gdC5ieXRlTGVuZ3RoID09PSBlLmJ5dGVMZW5ndGggJiYgTChuZXcgVWludDhBcnJheSh0LmJ1ZmZlciwgdC5ieXRlT2Zmc2V0LCB0LmJ5dGVMZW5ndGgpLCBuZXcgVWludDhBcnJheShlLmJ1ZmZlciwgZS5ieXRlT2Zmc2V0LCBlLmJ5dGVMZW5ndGgpKTtcbn1cbmZ1bmN0aW9uIF9lKHQsIGUpIHtcbiAgcmV0dXJuIEQodC5nZXRUaW1lKCksIGUuZ2V0VGltZSgpKTtcbn1cbmZ1bmN0aW9uIFBlKHQsIGUpIHtcbiAgcmV0dXJuIHQubmFtZSA9PT0gZS5uYW1lICYmIHQubWVzc2FnZSA9PT0gZS5tZXNzYWdlICYmIHQuY2F1c2UgPT09IGUuY2F1c2UgJiYgdC5zdGFjayA9PT0gZS5zdGFjaztcbn1cbmZ1bmN0aW9uIEsodCwgZSwgbikge1xuICBjb25zdCByID0gdC5zaXplO1xuICBpZiAociAhPT0gZS5zaXplKVxuICAgIHJldHVybiAhMTtcbiAgaWYgKCFyKVxuICAgIHJldHVybiAhMDtcbiAgY29uc3QgYSA9IG5ldyBBcnJheShyKSwgbCA9IHQuZW50cmllcygpO1xuICBsZXQgaSwgcywgZiA9IDA7XG4gIGZvciAoOyAoaSA9IGwubmV4dCgpKSAmJiAhaS5kb25lOyApIHtcbiAgICBjb25zdCBwID0gZS5lbnRyaWVzKCk7XG4gICAgbGV0IGQgPSAhMSwgdSA9IDA7XG4gICAgZm9yICg7IChzID0gcC5uZXh0KCkpICYmICFzLmRvbmU7ICkge1xuICAgICAgaWYgKGFbdV0pIHtcbiAgICAgICAgdSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG8gPSBpLnZhbHVlLCBjID0gcy52YWx1ZTtcbiAgICAgIGlmIChuLmVxdWFscyhvWzBdLCBjWzBdLCBmLCB1LCB0LCBlLCBuKSAmJiBuLmVxdWFscyhvWzFdLCBjWzFdLCBvWzBdLCBjWzBdLCB0LCBlLCBuKSkge1xuICAgICAgICBkID0gYVt1XSA9ICEwO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHUrKztcbiAgICB9XG4gICAgaWYgKCFkKVxuICAgICAgcmV0dXJuICExO1xuICAgIGYrKztcbiAgfVxuICByZXR1cm4gITA7XG59XG5mdW5jdGlvbiBVZSh0LCBlLCBuKSB7XG4gIGNvbnN0IHIgPSBHKHQpO1xuICBsZXQgYSA9IHIubGVuZ3RoO1xuICBpZiAoRyhlKS5sZW5ndGggIT09IGEpXG4gICAgcmV0dXJuICExO1xuICBmb3IgKDsgYS0tID4gMDsgKVxuICAgIGlmICghWCh0LCBlLCBuLCByW2FdKSlcbiAgICAgIHJldHVybiAhMTtcbiAgcmV0dXJuICEwO1xufVxuZnVuY3Rpb24gUih0LCBlLCBuKSB7XG4gIGNvbnN0IHIgPSBXKHQpO1xuICBsZXQgYSA9IHIubGVuZ3RoO1xuICBpZiAoVyhlKS5sZW5ndGggIT09IGEpXG4gICAgcmV0dXJuICExO1xuICBsZXQgbCwgaSwgcztcbiAgZm9yICg7IGEtLSA+IDA7IClcbiAgICBpZiAobCA9IHJbYV0sICFYKHQsIGUsIG4sIGwpIHx8IChpID0gJCh0LCBsKSwgcyA9ICQoZSwgbCksIChpIHx8IHMpICYmICghaSB8fCAhcyB8fCBpLmNvbmZpZ3VyYWJsZSAhPT0gcy5jb25maWd1cmFibGUgfHwgaS5lbnVtZXJhYmxlICE9PSBzLmVudW1lcmFibGUgfHwgaS53cml0YWJsZSAhPT0gcy53cml0YWJsZSkpKVxuICAgICAgcmV0dXJuICExO1xuICByZXR1cm4gITA7XG59XG5mdW5jdGlvbiBCZSh0LCBlKSB7XG4gIHJldHVybiBEKHQudmFsdWVPZigpLCBlLnZhbHVlT2YoKSk7XG59XG5mdW5jdGlvbiBUZSh0LCBlKSB7XG4gIHJldHVybiB0LnNvdXJjZSA9PT0gZS5zb3VyY2UgJiYgdC5mbGFncyA9PT0gZS5mbGFncztcbn1cbmZ1bmN0aW9uIEgodCwgZSwgbikge1xuICBjb25zdCByID0gdC5zaXplO1xuICBpZiAociAhPT0gZS5zaXplKVxuICAgIHJldHVybiAhMTtcbiAgaWYgKCFyKVxuICAgIHJldHVybiAhMDtcbiAgY29uc3QgYSA9IG5ldyBBcnJheShyKSwgbCA9IHQudmFsdWVzKCk7XG4gIGxldCBpLCBzO1xuICBmb3IgKDsgKGkgPSBsLm5leHQoKSkgJiYgIWkuZG9uZTsgKSB7XG4gICAgY29uc3QgZiA9IGUudmFsdWVzKCk7XG4gICAgbGV0IHAgPSAhMSwgZCA9IDA7XG4gICAgZm9yICg7IChzID0gZi5uZXh0KCkpICYmICFzLmRvbmU7ICkge1xuICAgICAgaWYgKCFhW2RdICYmIG4uZXF1YWxzKGkudmFsdWUsIHMudmFsdWUsIGkudmFsdWUsIHMudmFsdWUsIHQsIGUsIG4pKSB7XG4gICAgICAgIHAgPSBhW2RdID0gITA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZCsrO1xuICAgIH1cbiAgICBpZiAoIXApXG4gICAgICByZXR1cm4gITE7XG4gIH1cbiAgcmV0dXJuICEwO1xufVxuZnVuY3Rpb24gTCh0LCBlKSB7XG4gIGxldCBuID0gdC5ieXRlTGVuZ3RoO1xuICBpZiAoZS5ieXRlTGVuZ3RoICE9PSBuIHx8IHQuYnl0ZU9mZnNldCAhPT0gZS5ieXRlT2Zmc2V0KVxuICAgIHJldHVybiAhMTtcbiAgZm9yICg7IG4tLSA+IDA7IClcbiAgICBpZiAodFtuXSAhPT0gZVtuXSlcbiAgICAgIHJldHVybiAhMTtcbiAgcmV0dXJuICEwO1xufVxuZnVuY3Rpb24gVmUodCwgZSkge1xuICByZXR1cm4gdC5ob3N0bmFtZSA9PT0gZS5ob3N0bmFtZSAmJiB0LnBhdGhuYW1lID09PSBlLnBhdGhuYW1lICYmIHQucHJvdG9jb2wgPT09IGUucHJvdG9jb2wgJiYgdC5wb3J0ID09PSBlLnBvcnQgJiYgdC5oYXNoID09PSBlLmhhc2ggJiYgdC51c2VybmFtZSA9PT0gZS51c2VybmFtZSAmJiB0LnBhc3N3b3JkID09PSBlLnBhc3N3b3JkO1xufVxuZnVuY3Rpb24gWCh0LCBlLCBuLCByKSB7XG4gIHJldHVybiAociA9PT0gU2UgfHwgciA9PT0gTWUgfHwgciA9PT0gUmUpICYmICh0LiQkdHlwZW9mIHx8IGUuJCR0eXBlb2YpID8gITAgOiB4ZShlLCByKSAmJiBuLmVxdWFscyh0W3JdLCBlW3JdLCByLCByLCB0LCBlLCBuKTtcbn1cbmNvbnN0IE5lID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIEZlKHQpIHtcbiAgY29uc3QgZSA9IEdlKHQpLCB7IGFyZUFycmF5c0VxdWFsOiBuLCBhcmVEYXRlc0VxdWFsOiByLCBhcmVGdW5jdGlvbnNFcXVhbDogYSwgYXJlTWFwc0VxdWFsOiBsLCBhcmVOdW1iZXJzRXF1YWw6IGksIGFyZU9iamVjdHNFcXVhbDogcywgYXJlUmVnRXhwc0VxdWFsOiBmLCBhcmVTZXRzRXF1YWw6IHAsIGdldFVuc3VwcG9ydGVkQ3VzdG9tQ29tcGFyYXRvcjogZCB9ID0gdDtcbiAgcmV0dXJuIGZ1bmN0aW9uKG8sIGMsIG0pIHtcbiAgICBpZiAobyA9PT0gYylcbiAgICAgIHJldHVybiAhMDtcbiAgICBpZiAobyA9PSBudWxsIHx8IGMgPT0gbnVsbClcbiAgICAgIHJldHVybiAhMTtcbiAgICBjb25zdCBiID0gdHlwZW9mIG87XG4gICAgaWYgKGIgIT09IHR5cGVvZiBjKVxuICAgICAgcmV0dXJuICExO1xuICAgIGlmIChiICE9PSBcIm9iamVjdFwiKVxuICAgICAgcmV0dXJuIGIgPT09IFwibnVtYmVyXCIgfHwgYiA9PT0gXCJiaWdpbnRcIiA/IGkobywgYywgbSkgOiBiID09PSBcImZ1bmN0aW9uXCIgPyBhKG8sIGMsIG0pIDogITE7XG4gICAgY29uc3QgZyA9IG8uY29uc3RydWN0b3I7XG4gICAgaWYgKGcgIT09IGMuY29uc3RydWN0b3IpXG4gICAgICByZXR1cm4gITE7XG4gICAgaWYgKGcgPT09IE9iamVjdClcbiAgICAgIHJldHVybiBzKG8sIGMsIG0pO1xuICAgIGlmIChnID09PSBBcnJheSlcbiAgICAgIHJldHVybiBuKG8sIGMsIG0pO1xuICAgIGlmIChnID09PSBEYXRlKVxuICAgICAgcmV0dXJuIHIobywgYywgbSk7XG4gICAgaWYgKGcgPT09IFJlZ0V4cClcbiAgICAgIHJldHVybiBmKG8sIGMsIG0pO1xuICAgIGlmIChnID09PSBNYXApXG4gICAgICByZXR1cm4gbChvLCBjLCBtKTtcbiAgICBpZiAoZyA9PT0gU2V0KVxuICAgICAgcmV0dXJuIHAobywgYywgbSk7XG4gICAgaWYgKGcgPT09IFByb21pc2UpXG4gICAgICByZXR1cm4gITE7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobykpXG4gICAgICByZXR1cm4gbihvLCBjLCBtKTtcbiAgICBjb25zdCB5ID0gTmUuY2FsbChvKSwgdyA9IGVbeV07XG4gICAgaWYgKHcpXG4gICAgICByZXR1cm4gdyhvLCBjLCBtKTtcbiAgICBjb25zdCBDID0gZCAmJiBkKG8sIGMsIG0sIHkpO1xuICAgIHJldHVybiBDID8gQyhvLCBjLCBtKSA6ICExO1xuICB9O1xufVxuZnVuY3Rpb24gemUoeyBjaXJjdWxhcjogdCwgY3JlYXRlQ3VzdG9tQ29uZmlnOiBlLCBzdHJpY3Q6IG4gfSkge1xuICBsZXQgciA9IHtcbiAgICBhcmVBcnJheUJ1ZmZlcnNFcXVhbDogTGUsXG4gICAgYXJlQXJyYXlzRXF1YWw6IG4gPyBSIDogdmUsXG4gICAgYXJlRGF0YVZpZXdzRXF1YWw6IGtlLFxuICAgIGFyZURhdGVzRXF1YWw6IF9lLFxuICAgIGFyZUVycm9yc0VxdWFsOiBQZSxcbiAgICBhcmVGdW5jdGlvbnNFcXVhbDogSWUsXG4gICAgYXJlTWFwc0VxdWFsOiBuID8gXyhLLCBSKSA6IEssXG4gICAgYXJlTnVtYmVyc0VxdWFsOiBELFxuICAgIGFyZU9iamVjdHNFcXVhbDogbiA/IFIgOiBVZSxcbiAgICBhcmVQcmltaXRpdmVXcmFwcGVyc0VxdWFsOiBCZSxcbiAgICBhcmVSZWdFeHBzRXF1YWw6IFRlLFxuICAgIGFyZVNldHNFcXVhbDogbiA/IF8oSCwgUikgOiBILFxuICAgIGFyZVR5cGVkQXJyYXlzRXF1YWw6IG4gPyBfKEwsIFIpIDogTCxcbiAgICBhcmVVcmxzRXF1YWw6IFZlLFxuICAgIGdldFVuc3VwcG9ydGVkQ3VzdG9tQ29tcGFyYXRvcjogdm9pZCAwXG4gIH07XG4gIGlmIChlICYmIChyID0gT2JqZWN0LmFzc2lnbih7fSwgciwgZShyKSkpLCB0KSB7XG4gICAgY29uc3QgYSA9IEkoci5hcmVBcnJheXNFcXVhbCksIGwgPSBJKHIuYXJlTWFwc0VxdWFsKSwgaSA9IEkoci5hcmVPYmplY3RzRXF1YWwpLCBzID0gSShyLmFyZVNldHNFcXVhbCk7XG4gICAgciA9IE9iamVjdC5hc3NpZ24oe30sIHIsIHtcbiAgICAgIGFyZUFycmF5c0VxdWFsOiBhLFxuICAgICAgYXJlTWFwc0VxdWFsOiBsLFxuICAgICAgYXJlT2JqZWN0c0VxdWFsOiBpLFxuICAgICAgYXJlU2V0c0VxdWFsOiBzXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5mdW5jdGlvbiBXZSh0KSB7XG4gIHJldHVybiBmdW5jdGlvbihlLCBuLCByLCBhLCBsLCBpLCBzKSB7XG4gICAgcmV0dXJuIHQoZSwgbiwgcyk7XG4gIH07XG59XG5mdW5jdGlvbiAkZSh7IGNpcmN1bGFyOiB0LCBjb21wYXJhdG9yOiBlLCBjcmVhdGVTdGF0ZTogbiwgZXF1YWxzOiByLCBzdHJpY3Q6IGEgfSkge1xuICBpZiAobilcbiAgICByZXR1cm4gZnVuY3Rpb24ocywgZikge1xuICAgICAgY29uc3QgeyBjYWNoZTogcCA9IHQgPyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSA6IHZvaWQgMCwgbWV0YTogZCB9ID0gbigpO1xuICAgICAgcmV0dXJuIGUocywgZiwge1xuICAgICAgICBjYWNoZTogcCxcbiAgICAgICAgZXF1YWxzOiByLFxuICAgICAgICBtZXRhOiBkLFxuICAgICAgICBzdHJpY3Q6IGFcbiAgICAgIH0pO1xuICAgIH07XG4gIGlmICh0KVxuICAgIHJldHVybiBmdW5jdGlvbihzLCBmKSB7XG4gICAgICByZXR1cm4gZShzLCBmLCB7XG4gICAgICAgIGNhY2hlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSxcbiAgICAgICAgZXF1YWxzOiByLFxuICAgICAgICBtZXRhOiB2b2lkIDAsXG4gICAgICAgIHN0cmljdDogYVxuICAgICAgfSk7XG4gICAgfTtcbiAgY29uc3QgbCA9IHtcbiAgICBjYWNoZTogdm9pZCAwLFxuICAgIGVxdWFsczogcixcbiAgICBtZXRhOiB2b2lkIDAsXG4gICAgc3RyaWN0OiBhXG4gIH07XG4gIHJldHVybiBmdW5jdGlvbihzLCBmKSB7XG4gICAgcmV0dXJuIGUocywgZiwgbCk7XG4gIH07XG59XG5mdW5jdGlvbiBHZSh7IGFyZUFycmF5QnVmZmVyc0VxdWFsOiB0LCBhcmVBcnJheXNFcXVhbDogZSwgYXJlRGF0YVZpZXdzRXF1YWw6IG4sIGFyZURhdGVzRXF1YWw6IHIsIGFyZUVycm9yc0VxdWFsOiBhLCBhcmVGdW5jdGlvbnNFcXVhbDogbCwgYXJlTWFwc0VxdWFsOiBpLCBhcmVOdW1iZXJzRXF1YWw6IHMsIGFyZU9iamVjdHNFcXVhbDogZiwgYXJlUHJpbWl0aXZlV3JhcHBlcnNFcXVhbDogcCwgYXJlUmVnRXhwc0VxdWFsOiBkLCBhcmVTZXRzRXF1YWw6IHUsIGFyZVR5cGVkQXJyYXlzRXF1YWw6IG8sIGFyZVVybHNFcXVhbDogYyB9KSB7XG4gIHJldHVybiB7XG4gICAgXCJbb2JqZWN0IEFyZ3VtZW50c11cIjogZixcbiAgICBcIltvYmplY3QgQXJyYXldXCI6IGUsXG4gICAgXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiOiB0LFxuICAgIFwiW29iamVjdCBBc3luY0dlbmVyYXRvckZ1bmN0aW9uXVwiOiBsLFxuICAgIFwiW29iamVjdCBCaWdJbnRdXCI6IHMsXG4gICAgXCJbb2JqZWN0IEJpZ0ludDY0QXJyYXldXCI6IG8sXG4gICAgXCJbb2JqZWN0IEJpZ1VpbnQ2NEFycmF5XVwiOiBvLFxuICAgIFwiW29iamVjdCBCb29sZWFuXVwiOiBwLFxuICAgIFwiW29iamVjdCBEYXRhVmlld11cIjogbixcbiAgICBcIltvYmplY3QgRGF0ZV1cIjogcixcbiAgICAvLyBJZiBhbiBlcnJvciB0YWcsIGl0IHNob3VsZCBiZSB0ZXN0ZWQgZXhwbGljaXRseS4gTGlrZSBSZWdFeHAsIHRoZSBwcm9wZXJ0aWVzIGFyZSBub3RcbiAgICAvLyBlbnVtZXJhYmxlLCBhbmQgdGhlcmVmb3JlIHdpbGwgZ2l2ZSBmYWxzZSBwb3NpdGl2ZXMgaWYgdGVzdGVkIGxpa2UgYSBzdGFuZGFyZCBvYmplY3QuXG4gICAgXCJbb2JqZWN0IEVycm9yXVwiOiBhLFxuICAgIFwiW29iamVjdCBGbG9hdDE2QXJyYXldXCI6IG8sXG4gICAgXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIjogbyxcbiAgICBcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiOiBvLFxuICAgIFwiW29iamVjdCBGdW5jdGlvbl1cIjogbCxcbiAgICBcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI6IGwsXG4gICAgXCJbb2JqZWN0IEludDhBcnJheV1cIjogbyxcbiAgICBcIltvYmplY3QgSW50MTZBcnJheV1cIjogbyxcbiAgICBcIltvYmplY3QgSW50MzJBcnJheV1cIjogbyxcbiAgICBcIltvYmplY3QgTWFwXVwiOiBpLFxuICAgIFwiW29iamVjdCBOdW1iZXJdXCI6IHAsXG4gICAgXCJbb2JqZWN0IE9iamVjdF1cIjogKG0sIGIsIGcpID0+IChcbiAgICAgIC8vIFRoZSBleGNlcHRpb24gZm9yIHZhbHVlIGNvbXBhcmlzb24gaXMgY3VzdG9tIGBQcm9taXNlYC1saWtlIGNsYXNzIGluc3RhbmNlcy4gVGhlc2Ugc2hvdWxkXG4gICAgICAvLyBiZSB0cmVhdGVkIHRoZSBzYW1lIGFzIHN0YW5kYXJkIGBQcm9taXNlYCBvYmplY3RzLCB3aGljaCBtZWFucyBzdHJpY3QgZXF1YWxpdHksIGFuZCBpZlxuICAgICAgLy8gaXQgcmVhY2hlcyB0aGlzIHBvaW50IHRoZW4gdGhhdCBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbiBoYXMgYWxyZWFkeSBmYWlsZWQuXG4gICAgICB0eXBlb2YgbS50aGVuICE9IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgYi50aGVuICE9IFwiZnVuY3Rpb25cIiAmJiBmKG0sIGIsIGcpXG4gICAgKSxcbiAgICAvLyBGb3IgUmVnRXhwLCB0aGUgcHJvcGVydGllcyBhcmUgbm90IGVudW1lcmFibGUsIGFuZCB0aGVyZWZvcmUgd2lsbCBnaXZlIGZhbHNlIHBvc2l0aXZlcyBpZlxuICAgIC8vIHRlc3RlZCBsaWtlIGEgc3RhbmRhcmQgb2JqZWN0LlxuICAgIFwiW29iamVjdCBSZWdFeHBdXCI6IGQsXG4gICAgXCJbb2JqZWN0IFNldF1cIjogdSxcbiAgICBcIltvYmplY3QgU3RyaW5nXVwiOiBwLFxuICAgIFwiW29iamVjdCBVUkxdXCI6IGMsXG4gICAgXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCI6IG8sXG4gICAgXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiOiBvLFxuICAgIFwiW29iamVjdCBVaW50MTZBcnJheV1cIjogbyxcbiAgICBcIltvYmplY3QgVWludDMyQXJyYXldXCI6IG9cbiAgfTtcbn1cbmNvbnN0IEtlID0gaigpO1xuaih7IHN0cmljdDogITAgfSk7XG5qKHsgY2lyY3VsYXI6ICEwIH0pO1xuaih7XG4gIGNpcmN1bGFyOiAhMCxcbiAgc3RyaWN0OiAhMFxufSk7XG5qKHtcbiAgY3JlYXRlSW50ZXJuYWxDb21wYXJhdG9yOiAoKSA9PiBEXG59KTtcbmooe1xuICBzdHJpY3Q6ICEwLFxuICBjcmVhdGVJbnRlcm5hbENvbXBhcmF0b3I6ICgpID0+IERcbn0pO1xuaih7XG4gIGNpcmN1bGFyOiAhMCxcbiAgY3JlYXRlSW50ZXJuYWxDb21wYXJhdG9yOiAoKSA9PiBEXG59KTtcbmooe1xuICBjaXJjdWxhcjogITAsXG4gIGNyZWF0ZUludGVybmFsQ29tcGFyYXRvcjogKCkgPT4gRCxcbiAgc3RyaWN0OiAhMFxufSk7XG5mdW5jdGlvbiBqKHQgPSB7fSkge1xuICBjb25zdCB7IGNpcmN1bGFyOiBlID0gITEsIGNyZWF0ZUludGVybmFsQ29tcGFyYXRvcjogbiwgY3JlYXRlU3RhdGU6IHIsIHN0cmljdDogYSA9ICExIH0gPSB0LCBsID0gemUodCksIGkgPSBGZShsKSwgcyA9IG4gPyBuKGkpIDogV2UoaSk7XG4gIHJldHVybiAkZSh7IGNpcmN1bGFyOiBlLCBjb21wYXJhdG9yOiBpLCBjcmVhdGVTdGF0ZTogciwgZXF1YWxzOiBzLCBzdHJpY3Q6IGEgfSk7XG59XG5sZXQgWjtcbmNvbnN0IFUgPSAodCkgPT4ge1xuICBjb25zdCBlID0gZ2UoKTtcbiAgYmUoZSk7XG4gIGNvbnN0IFtuLCByXSA9IHooITEpLCBbYSwgbF0gPSB6KFtdKSwgeyB0aXRsZTogaSwgZGVzY3JpcHRpb246IHMsIHRvb2x0aXA6IGYgfSA9IHdlKHQpLCB7XG4gICAgaGlkZU1lbnU6IHAsXG4gICAgZGF0YXNldDogZCxcbiAgICByZXN1bHRzOiB1LFxuICAgIGFsbFJlc3VsdHM6IG8sXG4gICAgZGltZW5zaW9uc0FuZE1lYXN1cmVzOiBjLFxuICAgIGRpc3BsYXlOdWxsQXM6IG0sXG4gICAgc2hvd0luZGV4OiBiLFxuICAgIGNsaWNrRGltZW5zaW9uOiBnLFxuICAgIHN0YXRlOiB5LFxuICAgIHNldFN0YXRlOiB3LFxuICAgIG9uUm93Q2xpY2tlZDogQ1xuICB9ID0gdCwgb2UgPSBBZSh7IGRpbWVuc2lvbnNBbmRNZWFzdXJlczogYywgZGlzcGxheU51bGxBczogbSB9LCBlKSwgdiA9ICh1ID09IG51bGwgPyB2b2lkIDAgOiB1LmRhdGEpID8/IFtdLCBCID0gTShudWxsKSwgVCA9IE0obnVsbCksIHEgPSBNKCEwKSwgViA9IE0obnVsbCk7XG4gIGsoKCkgPT4ge1xuICAgIEtlKGQudmFyaWFibGVWYWx1ZXMsIFYuY3VycmVudCkgfHwgKHEuY3VycmVudCA9ICEwLCBWLmN1cnJlbnQgPSBkLnZhcmlhYmxlVmFsdWVzLCB3ID09IG51bGwgfHwgdygoaCkgPT4gKHtcbiAgICAgIC4uLmgsXG4gICAgICBwYWdlOiAwXG4gICAgfSkpKTtcbiAgfSwgW2QudmFyaWFibGVWYWx1ZXNdKSwgaygoKSA9PiB7XG4gICAgdmFyIGg7XG4gICAgaWYgKHUgIT0gbnVsbCAmJiB1LmRhdGEpIHtcbiAgICAgIGlmIChxLmN1cnJlbnQpIHtcbiAgICAgICAgbChbLi4udl0pLCBxLmN1cnJlbnQgPSAhMSwgKGggPSBULmN1cnJlbnQpID09IG51bGwgfHwgaC5zY3JvbGxUb1RvcChcInNtb290aFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbCgoQSkgPT4gWy4uLkEsIC4uLnZdKTtcbiAgICB9XG4gIH0sIFt2XSk7XG4gIGNvbnN0IE8gPSBqZShcbiAgICAoaCkgPT4ge1xuICAgICAgdyA9PSBudWxsIHx8IHcoKEEpID0+ICh7XG4gICAgICAgIC4uLkEsXG4gICAgICAgIC4uLmhcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIFt3XVxuICApLCBhZSA9IChoKSA9PiB7XG4gICAgcighMCksIE8oeyBpc0xvYWRpbmdEb3dubG9hZERhdGE6ICEwIH0pLCBaID0gKEEpID0+IGgoe1xuICAgICAgdGl0bGU6IGksXG4gICAgICBkYXRhOiBBLFxuICAgICAgZGltZW5zaW9uc0FuZE1lYXN1cmVzOiBjLFxuICAgICAgY29udGFpbmVyUmVmOiBCLFxuICAgICAgdGhlbWU6IGVcbiAgICB9KTtcbiAgfSwgc2UgPSAoaCkgPT4ge1xuICAgIHZhciBOO1xuICAgIGlmICghZykgcmV0dXJuO1xuICAgIGNvbnN0IEEgPSAoTiA9IGFbaF0pID09IG51bGwgPyB2b2lkIDAgOiBOW2cubmFtZV07XG4gICAgQyA9PSBudWxsIHx8IEMoQSk7XG4gIH07XG4gIGsoKCkgPT4ge1xuICAgIGlmIChuKSB7XG4gICAgICBpZiAoIW8gfHwgby5pc0xvYWRpbmcpXG4gICAgICAgIHJldHVybjtcbiAgICAgIFooby5kYXRhKSwgcighMSksIE8oeyBpc0xvYWRpbmdEb3dubG9hZERhdGE6ICExIH0pO1xuICAgIH1cbiAgfSwgW24sIG8sIE9dKTtcbiAgY29uc3QgaWUgPSAoKSA9PiB7XG4gICAgdS5pc0xvYWRpbmcgfHwgTyh7IHBhZ2U6ICgoeSA9PSBudWxsID8gdm9pZCAwIDogeS5wYWdlKSA/PyAwKSArIDEgfSk7XG4gIH0sIGxlID0gKGgpID0+IHtcbiAgICBxLmN1cnJlbnQgPSAhMCwgTyh7IHNvcnQ6IGgsIHBhZ2U6IDAgfSk7XG4gIH0sIHVlID0gKHUgPT0gbnVsbCA/IHZvaWQgMCA6IHUuZGF0YSkgJiYgdS5kYXRhLmxlbmd0aCA9PT0gUCwgY2UgPSAhISh1ICE9IG51bGwgJiYgdS5pc0xvYWRpbmcgfHwgbyAhPSBudWxsICYmIG8uaXNMb2FkaW5nKSwgZmUgPSAodSA9PSBudWxsID8gdm9pZCAwIDogdS5pc0xvYWRpbmcpICYmICFxLmN1cnJlbnQ7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gRi5qc3goXG4gICAgeWUsXG4gICAge1xuICAgICAgcmVmOiBCLFxuICAgICAgdGl0bGU6IGksXG4gICAgICBkZXNjcmlwdGlvbjogcyxcbiAgICAgIHRvb2x0aXA6IGYsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlzTG9hZGluZzogY2UsXG4gICAgICAgIGRhdGE6IGFcbiAgICAgIH0sXG4gICAgICBkaW1lbnNpb25zQW5kTWVhc3VyZXM6IGMsXG4gICAgICBlcnJvck1lc3NhZ2U6IHUgPT0gbnVsbCA/IHZvaWQgMCA6IHUuZXJyb3IsXG4gICAgICBvbkN1c3RvbURvd25sb2FkOiBhZSxcbiAgICAgIGhpZGVNZW51OiBwLFxuICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBGLmpzeChcbiAgICAgICAgZGUsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFQsXG4gICAgICAgICAgaGFzTW9yZURhdGE6IHVlLFxuICAgICAgICAgIG9uUm93SW5kZXhDbGljazogc2UsXG4gICAgICAgICAgaGVhZGVyczogb2UsXG4gICAgICAgICAgcm93czogRGUoeyByb3dzOiBhLCBjbGlja0RpbWVuc2lvbjogZyB9KSxcbiAgICAgICAgICBzaG93SW5kZXg6IGIsXG4gICAgICAgICAgc29ydDogeSA9PSBudWxsID8gdm9pZCAwIDogeS5zb3J0LFxuICAgICAgICAgIGlzTG9hZGluZzogZmUsXG4gICAgICAgICAgbG9hZGluZ0xhYmVsOiBFZS50KFwiY29tbW9uLmxvYWRpbmdcIiksXG4gICAgICAgICAgb25OZXh0UGFnZTogaWUsXG4gICAgICAgICAgb25Tb3J0Q2hhbmdlOiBsZVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICApO1xufSwgc3QgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBVXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBIZSA9IHtcbiAgbmFtZTogXCJUYWJsZVNjcm9sbGFibGVcIixcbiAgbGFiZWw6IFwiVGFibGUgQ2hhcnQgLSBTY3JvbGxhYmxlXCIsXG4gIGNhdGVnb3J5OiBcIlRhYmxlIENoYXJ0c1wiLFxuICBpbnB1dHM6IFtcbiAgICBFLmRhdGFzZXQsXG4gICAge1xuICAgICAgLi4uRS5kaW1lbnNpb25zQW5kTWVhc3VyZXMsXG4gICAgICBsYWJlbDogXCJDb2x1bW5zXCIsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAgLi4uRS5kaW1lbnNpb25zQW5kTWVhc3VyZXMuaW5wdXRzLFxuICAgICAgICBTLndpZHRoLFxuICAgICAgICBTLmFsaWduLFxuICAgICAgICBTLmRpc3BsYXlGb3JtYXQsXG4gICAgICAgIFMudGFibGVDZWxsU3R5bGVcbiAgICAgIF1cbiAgICB9LFxuICAgIEUudGl0bGUsXG4gICAgRS5kZXNjcmlwdGlvbixcbiAgICBFLnRvb2x0aXAsXG4gICAge1xuICAgICAgLi4uRS5ib29sZWFuLFxuICAgICAgbmFtZTogXCJzaG93SW5kZXhcIixcbiAgICAgIGxhYmVsOiBcIlNob3cgaW5kZXggY29sdW1uXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwLFxuICAgICAgY2F0ZWdvcnk6IFwiQ29tcG9uZW50IFNldHRpbmdzXCJcbiAgICB9LFxuICAgIEUuZGlzcGxheU51bGxBcyxcbiAgICB7IC4uLkUubWF4UmVzdWx0cywgbGFiZWw6IFwiTWF4IHJlc3VsdHMgdG8gZG93bmxvYWRcIiB9LFxuICAgIHtcbiAgICAgIC4uLkUuZGltZW5zaW9uU2ltcGxlLFxuICAgICAgbGFiZWw6IFwiRGltZW5zaW9uIHRvIHNldCBvbiBjbGlja1wiLFxuICAgICAgbmFtZTogXCJjbGlja0RpbWVuc2lvblwiLFxuICAgICAgY2F0ZWdvcnk6IFwiRGF0YSBtYXBwaW5nIGZvciBpbnRlcmFjdGlvbnNcIixcbiAgICAgIHJlcXVpcmVkOiAhMVxuICAgIH1cbiAgXSxcbiAgZXZlbnRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJvblJvd0NsaWNrZWRcIixcbiAgICAgIGxhYmVsOiBcIkEgcm93IGlzIGNsaWNrZWRcIixcbiAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicm93RGltZW5zaW9uVmFsdWVcIixcbiAgICAgICAgICBsYWJlbDogXCJDbGlja2VkIHJvdyBkaW1lbnNpb24gdmFsdWVcIixcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0sIFkgPSB7XG4gIGRpbWVuc2lvbnNBbmRNZWFzdXJlczogW3guZGltZW5zaW9uLCB4LmRpbWVuc2lvbkdyb3VwLCB4Lm1lYXN1cmVdLFxuICByZXN1bHRzOiB4LnJlc3VsdHMxTWVhc3VyZTJEaW1lbnNpb25zLFxuICBkYXRhc2V0OiB4LmRhdGFzZXQsXG4gIGhpZGVNZW51OiAhMFxufSwgWmUgPSBoZShVLCBZKSwgSiA9IHtcbiAgcGFnZTogMCxcbiAgc29ydDogdm9pZCAwLFxuICBpc0xvYWRpbmdEb3dubG9hZERhdGE6ICExXG59LCBlZSA9ICh0LCBlLCBuLCByKSA9PiAoe1xuICBmcm9tOiB0LmRhdGFzZXQsXG4gIHNlbGVjdDogcixcbiAgb2Zmc2V0OiBlICogUCxcbiAgbGltaXQ6IFAsXG4gIG9yZGVyQnk6IG5cbn0pLCB0ZSA9ICh0LCBlLCBuLCByKSA9PiBRKGVlKHQsIGUsIG4sIHIpKSwgcmUgPSAodCwgZSkgPT4gKHtcbiAgZnJvbTogdC5kYXRhc2V0LFxuICBzZWxlY3Q6IHQuZGltZW5zaW9uc0FuZE1lYXN1cmVzLFxuICBvcmRlckJ5OiBlLFxuICBsaW1pdDogdC5tYXhSZXN1bHRzXG59KSwgbmUgPSAodCwgZSwgbikgPT4ge1xuICBpZiAobiAhPSBudWxsICYmIG4uaXNMb2FkaW5nRG93bmxvYWREYXRhKVxuICAgIHJldHVybiBRKHJlKHQsIGUpKTtcbn0sIEplID0ge1xuICBvblJvd0NsaWNrZWQ6ICh0KSA9PiAoe1xuICAgIHJvd0RpbWVuc2lvblZhbHVlOiB0ICE9PSB2b2lkIDAgPyB0IDogbWUubm9GaWx0ZXIoKVxuICB9KVxufSwgUWUgPSAodCwgW2UsIG5dKSA9PiB7XG4gIGNvbnN0IHIgPSB0LmRpbWVuc2lvbnNBbmRNZWFzdXJlcy5maW5kKFxuICAgIChzKSA9PiB7XG4gICAgICB2YXIgZjtcbiAgICAgIHJldHVybiBzLm5hbWUgPT09ICgoZiA9IGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUuc29ydCkgPT0gbnVsbCA/IHZvaWQgMCA6IGYuaWQpO1xuICAgIH1cbiAgKSwgYSA9IHIgJiYgKGUgIT0gbnVsbCAmJiBlLnNvcnQpID8gW3sgcHJvcGVydHk6IHIsIGRpcmVjdGlvbjogZS5zb3J0LmRpcmVjdGlvbiB9XSA6IFtdLCBsID0gdC5kaW1lbnNpb25zQW5kTWVhc3VyZXMuc29tZShcbiAgICAocykgPT4ge1xuICAgICAgdmFyIGY7XG4gICAgICByZXR1cm4gcy5uYW1lID09PSAoKGYgPSB0LmNsaWNrRGltZW5zaW9uKSA9PSBudWxsID8gdm9pZCAwIDogZi5uYW1lKTtcbiAgICB9XG4gICksIGkgPSBbXG4gICAgLi4udC5kaW1lbnNpb25zQW5kTWVhc3VyZXMsXG4gICAgLi4ubCA/IFtdIDogW3QuY2xpY2tEaW1lbnNpb25dXG4gIF07XG4gIHJldHVybiB7XG4gICAgLi4udCxcbiAgICBzdGF0ZTogcGUoSiwgZSA/PyB7fSksXG4gICAgc2V0U3RhdGU6IG4sXG4gICAgcmVzdWx0czogdGUoXG4gICAgICB0LFxuICAgICAgZSAhPSBudWxsICYmIGUucGFnZSA/IGUucGFnZSA6IEoucGFnZSxcbiAgICAgIGEsXG4gICAgICBpXG4gICAgKSxcbiAgICBhbGxSZXN1bHRzOiBuZSh0LCBhLCBlKVxuICB9O1xufSwgaXQgPSB7XG4gIENvbXBvbmVudDogVSxcbiAgbWV0YTogSGUsXG4gIHByZXZpZXc6IFplLFxuICBwcmV2aWV3Q29uZmlnOiBZLFxuICBjb25maWc6IHtcbiAgICBwcm9wczogUWUsXG4gICAgZXZlbnRzOiBKZVxuICB9LFxuICByZXN1bHRzOiB7XG4gICAgbG9hZERhdGFBcmdzOiBlZSxcbiAgICBsb2FkRGF0YTogdGVcbiAgfSxcbiAgYWxsUmVzdWx0czoge1xuICAgIGxvYWREYXRhQXJnczogcmUsXG4gICAgbG9hZERhdGE6IG5lXG4gIH1cbn07XG5leHBvcnQge1xuICBQIGFzIFQsXG4gIEogYXMgZCxcbiAgc3QgYXMgaSxcbiAgaXQgYXMgdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmluaXRpb24tQ21CSGlOd1QuanMubWFwXG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgbyB9IGZyb20gXCJAZW1iZWRkYWJsZS5jb20vcmVhY3RcIjtcbmltcG9ydCB7IHQgYXMgZSB9IGZyb20gXCIuL2RlZmluaXRpb24tQ21CSGlOd1QuanNcIjtcbmNvbnN0IG0gPSBlLnByZXZpZXcsIHQgPSBlLm1ldGEsIG4gPSBvKGUuQ29tcG9uZW50LCB0LCBlLmNvbmZpZyk7XG5leHBvcnQge1xuICBuIGFzIGRlZmF1bHQsXG4gIHQgYXMgbWV0YSxcbiAgbSBhcyBwcmV2aWV3XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGFibGVTY3JvbGxhYmxlLmpzLm1hcFxuIl0sIm5hbWVzIjpbInQiLCJuIiwibSIsInkiLCJnZSIsImJlIiwieiIsIndlIiwiQWUiLCJCIiwiTSIsImsiLCJqZSIsIk4iLCJGIiwieWUiLCJkZSIsIkRlIiwiRWUiLCJFIiwiUyIsIngiLCJoZSIsIlEiLCJtZSIsInBlIiwiZSIsIm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBUUEsTUFBTSxJQUFJLElBQUksRUFBRSxxQkFBcUIsSUFBSSx1QkFBdUIsT0FBTyxRQUFRLEVBQUUsZ0JBQWdCLEdBQUUsSUFBSyxPQUFPO0FBQy9HLFNBQVMsRUFBRUEsSUFBRyxHQUFHO0FBQ2YsU0FBTyxTQUFTLEdBQUcsR0FBRyxHQUFHO0FBQ3ZCLFdBQU9BLEdBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDaEM7QUFDRjtBQUNBLFNBQVMsRUFBRUEsSUFBRztBQUNaLFNBQU8sU0FBU0MsSUFBRyxHQUFHLEdBQUc7QUFDdkIsUUFBSSxDQUFDQSxNQUFLLENBQUMsS0FBSyxPQUFPQSxNQUFLLFlBQVksT0FBTyxLQUFLO0FBQ2xELGFBQU9ELEdBQUVDLElBQUcsR0FBRyxDQUFDO0FBQ2xCLFVBQU0sRUFBRSxPQUFPLE1BQU0sR0FBRyxJQUFJLEVBQUUsSUFBSUEsRUFBQyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUM7QUFDakQsUUFBSSxLQUFLO0FBQ1AsYUFBTyxNQUFNLEtBQUssTUFBTUE7QUFDMUIsTUFBRSxJQUFJQSxJQUFHLENBQUMsR0FBRyxFQUFFLElBQUksR0FBR0EsRUFBQztBQUN2QixVQUFNLElBQUlELEdBQUVDLElBQUcsR0FBRyxDQUFDO0FBQ25CLFdBQU8sRUFBRSxPQUFPQSxFQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztBQUFBLEVBQ25DO0FBQ0Y7QUFDQSxTQUFTLEVBQUVELElBQUc7QUFDWixTQUFPLEdBQUdBLEVBQUMsRUFBRSxPQUFPLEdBQUdBLEVBQUMsQ0FBQztBQUMzQjtBQUNBLE1BQU07QUFBQTtBQUFBLEVBRUosT0FBTyxXQUFXLENBQUNBLElBQUcsTUFBTSxHQUFHLEtBQUtBLElBQUcsQ0FBQztBQUFBLEdBQ3ZDLEtBQUssT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLEVBQUUsMEJBQTBCLEdBQUcsTUFBTSxFQUFDLElBQUssUUFBUTtBQUFBO0FBQUEsRUFFM0YsT0FBTyxNQUFNLFNBQVMsR0FBR0MsSUFBRztBQUMxQixXQUFPLE1BQU1BLEtBQUksTUFBTSxLQUFLLElBQUksTUFBTSxJQUFJQSxLQUFJLE1BQU0sS0FBS0EsT0FBTUE7QUFBQSxFQUNqRTtBQUFBO0FBRUYsU0FBUyxHQUFHRCxJQUFHLEdBQUc7QUFDaEIsU0FBT0EsT0FBTTtBQUNmO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUc7QUFDaEIsU0FBT0EsR0FBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLElBQUksV0FBV0EsRUFBQyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUM7QUFDaEY7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBR0MsSUFBRztBQUNuQixNQUFJLElBQUlELEdBQUU7QUFDVixNQUFJLEVBQUUsV0FBVztBQUNmLFdBQU87QUFDVCxTQUFPLE1BQU07QUFDWCxRQUFJLENBQUNDLEdBQUUsT0FBT0QsR0FBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHQSxJQUFHLEdBQUdDLEVBQUM7QUFDckMsYUFBTztBQUNYLFNBQU87QUFDVDtBQUNBLFNBQVMsR0FBR0QsSUFBRyxHQUFHO0FBQ2hCLFNBQU9BLEdBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxJQUFJLFdBQVdBLEdBQUUsUUFBUUEsR0FBRSxZQUFZQSxHQUFFLFVBQVUsR0FBRyxJQUFJLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztBQUN0SjtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHO0FBQ2hCLFNBQU8sRUFBRUEsR0FBRSxRQUFPLEdBQUksRUFBRSxRQUFPLENBQUU7QUFDbkM7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNoQixTQUFPQSxHQUFFLFNBQVMsRUFBRSxRQUFRQSxHQUFFLFlBQVksRUFBRSxXQUFXQSxHQUFFLFVBQVUsRUFBRSxTQUFTQSxHQUFFLFVBQVUsRUFBRTtBQUM5RjtBQUNBLFNBQVMsRUFBRUEsSUFBRyxHQUFHQyxJQUFHO0FBQ2xCLFFBQU0sSUFBSUQsR0FBRTtBQUNaLE1BQUksTUFBTSxFQUFFO0FBQ1YsV0FBTztBQUNULE1BQUksQ0FBQztBQUNILFdBQU87QUFDVCxRQUFNLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJQSxHQUFFLFFBQU87QUFDckMsTUFBSSxHQUFHLEdBQUcsSUFBSTtBQUNkLFVBQVEsSUFBSSxFQUFFLEtBQUksTUFBTyxDQUFDLEVBQUUsUUFBUTtBQUNsQyxVQUFNLElBQUksRUFBRSxRQUFPO0FBQ25CLFFBQUksSUFBSSxPQUFJLElBQUk7QUFDaEIsWUFBUSxJQUFJLEVBQUUsS0FBSSxNQUFPLENBQUMsRUFBRSxRQUFRO0FBQ2xDLFVBQUksRUFBRSxDQUFDLEdBQUc7QUFDUjtBQUNBO0FBQUEsTUFDRjtBQUNBLFlBQU0sSUFBSSxFQUFFLE9BQU8sSUFBSSxFQUFFO0FBQ3pCLFVBQUlDLEdBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUdELElBQUcsR0FBR0MsRUFBQyxLQUFLQSxHQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUdELElBQUcsR0FBR0MsRUFBQyxHQUFHO0FBQ3BGLFlBQUksRUFBRSxDQUFDLElBQUk7QUFDWDtBQUFBLE1BQ0Y7QUFDQTtBQUFBLElBQ0Y7QUFDQSxRQUFJLENBQUM7QUFDSCxhQUFPO0FBQ1Q7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBQ0EsU0FBUyxHQUFHRCxJQUFHLEdBQUdDLElBQUc7QUFDbkIsUUFBTSxJQUFJLEVBQUVELEVBQUM7QUFDYixNQUFJLElBQUksRUFBRTtBQUNWLE1BQUksRUFBRSxDQUFDLEVBQUUsV0FBVztBQUNsQixXQUFPO0FBQ1QsU0FBTyxNQUFNO0FBQ1gsUUFBSSxDQUFDLEVBQUVBLElBQUcsR0FBR0MsSUFBRyxFQUFFLENBQUMsQ0FBQztBQUNsQixhQUFPO0FBQ1gsU0FBTztBQUNUO0FBQ0EsU0FBUyxFQUFFRCxJQUFHLEdBQUdDLElBQUc7QUFDbEIsUUFBTSxJQUFJLEVBQUVELEVBQUM7QUFDYixNQUFJLElBQUksRUFBRTtBQUNWLE1BQUksRUFBRSxDQUFDLEVBQUUsV0FBVztBQUNsQixXQUFPO0FBQ1QsTUFBSSxHQUFHLEdBQUc7QUFDVixTQUFPLE1BQU07QUFDWCxRQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxJQUFHLEdBQUdDLElBQUcsQ0FBQyxNQUFNLElBQUksRUFBRUQsSUFBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUU7QUFDekssYUFBTztBQUNYLFNBQU87QUFDVDtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHO0FBQ2hCLFNBQU8sRUFBRUEsR0FBRSxRQUFPLEdBQUksRUFBRSxRQUFPLENBQUU7QUFDbkM7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNoQixTQUFPQSxHQUFFLFdBQVcsRUFBRSxVQUFVQSxHQUFFLFVBQVUsRUFBRTtBQUNoRDtBQUNBLFNBQVMsRUFBRUEsSUFBRyxHQUFHQyxJQUFHO0FBQ2xCLFFBQU0sSUFBSUQsR0FBRTtBQUNaLE1BQUksTUFBTSxFQUFFO0FBQ1YsV0FBTztBQUNULE1BQUksQ0FBQztBQUNILFdBQU87QUFDVCxRQUFNLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJQSxHQUFFLE9BQU07QUFDcEMsTUFBSSxHQUFHO0FBQ1AsVUFBUSxJQUFJLEVBQUUsS0FBSSxNQUFPLENBQUMsRUFBRSxRQUFRO0FBQ2xDLFVBQU0sSUFBSSxFQUFFLE9BQU07QUFDbEIsUUFBSSxJQUFJLE9BQUksSUFBSTtBQUNoQixZQUFRLElBQUksRUFBRSxLQUFJLE1BQU8sQ0FBQyxFQUFFLFFBQVE7QUFDbEMsVUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLQyxHQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPRCxJQUFHLEdBQUdDLEVBQUMsR0FBRztBQUNsRSxZQUFJLEVBQUUsQ0FBQyxJQUFJO0FBQ1g7QUFBQSxNQUNGO0FBQ0E7QUFBQSxJQUNGO0FBQ0EsUUFBSSxDQUFDO0FBQ0gsYUFBTztBQUFBLEVBQ1g7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxTQUFTLEVBQUVELElBQUcsR0FBRztBQUNmLE1BQUlDLEtBQUlELEdBQUU7QUFDVixNQUFJLEVBQUUsZUFBZUMsTUFBS0QsR0FBRSxlQUFlLEVBQUU7QUFDM0MsV0FBTztBQUNULFNBQU9DLE9BQU07QUFDWCxRQUFJRCxHQUFFQyxFQUFDLE1BQU0sRUFBRUEsRUFBQztBQUNkLGFBQU87QUFDWCxTQUFPO0FBQ1Q7QUFDQSxTQUFTLEdBQUdELElBQUcsR0FBRztBQUNoQixTQUFPQSxHQUFFLGFBQWEsRUFBRSxZQUFZQSxHQUFFLGFBQWEsRUFBRSxZQUFZQSxHQUFFLGFBQWEsRUFBRSxZQUFZQSxHQUFFLFNBQVMsRUFBRSxRQUFRQSxHQUFFLFNBQVMsRUFBRSxRQUFRQSxHQUFFLGFBQWEsRUFBRSxZQUFZQSxHQUFFLGFBQWEsRUFBRTtBQUN4TDtBQUNBLFNBQVMsRUFBRUEsSUFBRyxHQUFHQyxJQUFHLEdBQUc7QUFDckIsVUFBUSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sUUFBUUQsR0FBRSxZQUFZLEVBQUUsWUFBWSxPQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUtDLEdBQUUsT0FBT0QsR0FBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHQSxJQUFHLEdBQUdDLEVBQUM7QUFDL0g7QUFDQSxNQUFNLEtBQUssT0FBTyxVQUFVO0FBQzVCLFNBQVMsR0FBR0QsSUFBRztBQUNiLFFBQU0sSUFBSSxHQUFHQSxFQUFDLEdBQUcsRUFBRSxnQkFBZ0JDLElBQUcsZUFBZSxHQUFHLG1CQUFtQixHQUFHLGNBQWMsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsR0FBRyxjQUFjLEdBQUcsZ0NBQWdDLEVBQUMsSUFBS0Q7QUFDbE4sU0FBTyxTQUFTLEdBQUcsR0FBR0UsSUFBRztBQUN2QixRQUFJLE1BQU07QUFDUixhQUFPO0FBQ1QsUUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQixhQUFPO0FBQ1QsVUFBTSxJQUFJLE9BQU87QUFDakIsUUFBSSxNQUFNLE9BQU87QUFDZixhQUFPO0FBQ1QsUUFBSSxNQUFNO0FBQ1IsYUFBTyxNQUFNLFlBQVksTUFBTSxXQUFXLEVBQUUsR0FBRyxHQUFHQSxFQUFDLElBQUksTUFBTSxhQUFhLEVBQUUsR0FBRyxHQUFHQSxFQUFDLElBQUk7QUFDekYsVUFBTSxJQUFJLEVBQUU7QUFDWixRQUFJLE1BQU0sRUFBRTtBQUNWLGFBQU87QUFDVCxRQUFJLE1BQU07QUFDUixhQUFPLEVBQUUsR0FBRyxHQUFHQSxFQUFDO0FBQ2xCLFFBQUksTUFBTTtBQUNSLGFBQU9ELEdBQUUsR0FBRyxHQUFHQyxFQUFDO0FBQ2xCLFFBQUksTUFBTTtBQUNSLGFBQU8sRUFBRSxHQUFHLEdBQUdBLEVBQUM7QUFDbEIsUUFBSSxNQUFNO0FBQ1IsYUFBTyxFQUFFLEdBQUcsR0FBR0EsRUFBQztBQUNsQixRQUFJLE1BQU07QUFDUixhQUFPLEVBQUUsR0FBRyxHQUFHQSxFQUFDO0FBQ2xCLFFBQUksTUFBTTtBQUNSLGFBQU8sRUFBRSxHQUFHLEdBQUdBLEVBQUM7QUFDbEIsUUFBSSxNQUFNO0FBQ1IsYUFBTztBQUNULFFBQUksTUFBTSxRQUFRLENBQUM7QUFDakIsYUFBT0QsR0FBRSxHQUFHLEdBQUdDLEVBQUM7QUFDbEIsVUFBTUMsS0FBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRUEsRUFBQztBQUM3QixRQUFJO0FBQ0YsYUFBTyxFQUFFLEdBQUcsR0FBR0QsRUFBQztBQUNsQixVQUFNLElBQUksS0FBSyxFQUFFLEdBQUcsR0FBR0EsSUFBR0MsRUFBQztBQUMzQixXQUFPLElBQUksRUFBRSxHQUFHLEdBQUdELEVBQUMsSUFBSTtBQUFBLEVBQzFCO0FBQ0Y7QUFDQSxTQUFTLEdBQUcsRUFBRSxVQUFVRixJQUFHLG9CQUFvQixHQUFHLFFBQVFDLE1BQUs7QUFDN0QsTUFBSSxJQUFJO0FBQUEsSUFDTixzQkFBc0I7QUFBQSxJQUN0QixnQkFBZ0JBLEtBQUksSUFBSTtBQUFBLElBQ3hCLG1CQUFtQjtBQUFBLElBQ25CLGVBQWU7QUFBQSxJQUNmLGdCQUFnQjtBQUFBLElBQ2hCLG1CQUFtQjtBQUFBLElBQ25CLGNBQWNBLEtBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtBQUFBLElBQzVCLGlCQUFpQjtBQUFBLElBQ2pCLGlCQUFpQkEsS0FBSSxJQUFJO0FBQUEsSUFDekIsMkJBQTJCO0FBQUEsSUFDM0IsaUJBQWlCO0FBQUEsSUFDakIsY0FBY0EsS0FBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO0FBQUEsSUFDNUIscUJBQXFCQSxLQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7QUFBQSxJQUNuQyxjQUFjO0FBQUEsSUFDZCxnQ0FBZ0M7QUFBQSxFQUNwQztBQUNFLE1BQUksTUFBTSxJQUFJLE9BQU8sT0FBTyxDQUFBLEdBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJRCxJQUFHO0FBQzVDLFVBQU0sSUFBSSxFQUFFLEVBQUUsY0FBYyxHQUFHLElBQUksRUFBRSxFQUFFLFlBQVksR0FBRyxJQUFJLEVBQUUsRUFBRSxlQUFlLEdBQUcsSUFBSSxFQUFFLEVBQUUsWUFBWTtBQUNwRyxRQUFJLE9BQU8sT0FBTyxDQUFBLEdBQUksR0FBRztBQUFBLE1BQ3ZCLGdCQUFnQjtBQUFBLE1BQ2hCLGNBQWM7QUFBQSxNQUNkLGlCQUFpQjtBQUFBLE1BQ2pCLGNBQWM7QUFBQSxJQUNwQixDQUFLO0FBQUEsRUFDSDtBQUNBLFNBQU87QUFDVDtBQUNBLFNBQVMsR0FBR0EsSUFBRztBQUNiLFNBQU8sU0FBUyxHQUFHQyxJQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNuQyxXQUFPRCxHQUFFLEdBQUdDLElBQUcsQ0FBQztBQUFBLEVBQ2xCO0FBQ0Y7QUFDQSxTQUFTLEdBQUcsRUFBRSxVQUFVRCxJQUFHLFlBQVksR0FBRyxhQUFhQyxJQUFHLFFBQVEsR0FBRyxRQUFRLEVBQUMsR0FBSTtBQUNoRixNQUFJQTtBQUNGLFdBQU8sU0FBUyxHQUFHLEdBQUc7QUFDcEIsWUFBTSxFQUFFLE9BQU8sSUFBSUQsS0FBb0Isb0JBQUksWUFBWSxRQUFRLE1BQU0sRUFBQyxJQUFLQyxHQUFDO0FBQzVFLGFBQU8sRUFBRSxHQUFHLEdBQUc7QUFBQSxRQUNiLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxNQUNoQixDQUFPO0FBQUEsSUFDSDtBQUNGLE1BQUlEO0FBQ0YsV0FBTyxTQUFTLEdBQUcsR0FBRztBQUNwQixhQUFPLEVBQUUsR0FBRyxHQUFHO0FBQUEsUUFDYixPQUF1QixvQkFBSSxRQUFPO0FBQUEsUUFDbEMsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLE1BQ2hCLENBQU87QUFBQSxJQUNIO0FBQ0YsUUFBTSxJQUFJO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsRUFDWjtBQUNFLFNBQU8sU0FBUyxHQUFHLEdBQUc7QUFDcEIsV0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDbEI7QUFDRjtBQUNBLFNBQVMsR0FBRyxFQUFFLHNCQUFzQkEsSUFBRyxnQkFBZ0IsR0FBRyxtQkFBbUJDLElBQUcsZUFBZSxHQUFHLGdCQUFnQixHQUFHLG1CQUFtQixHQUFHLGNBQWMsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsR0FBRywyQkFBMkIsR0FBRyxpQkFBaUIsR0FBRyxjQUFjLEdBQUcscUJBQXFCLEdBQUcsY0FBYyxFQUFDLEdBQUk7QUFDaFQsU0FBTztBQUFBLElBQ0wsc0JBQXNCO0FBQUEsSUFDdEIsa0JBQWtCO0FBQUEsSUFDbEIsd0JBQXdCRDtBQUFBLElBQ3hCLG1DQUFtQztBQUFBLElBQ25DLG1CQUFtQjtBQUFBLElBQ25CLDBCQUEwQjtBQUFBLElBQzFCLDJCQUEyQjtBQUFBLElBQzNCLG9CQUFvQjtBQUFBLElBQ3BCLHFCQUFxQkM7QUFBQSxJQUNyQixpQkFBaUI7QUFBQTtBQUFBO0FBQUEsSUFHakIsa0JBQWtCO0FBQUEsSUFDbEIseUJBQXlCO0FBQUEsSUFDekIseUJBQXlCO0FBQUEsSUFDekIseUJBQXlCO0FBQUEsSUFDekIscUJBQXFCO0FBQUEsSUFDckIsOEJBQThCO0FBQUEsSUFDOUIsc0JBQXNCO0FBQUEsSUFDdEIsdUJBQXVCO0FBQUEsSUFDdkIsdUJBQXVCO0FBQUEsSUFDdkIsZ0JBQWdCO0FBQUEsSUFDaEIsbUJBQW1CO0FBQUEsSUFDbkIsbUJBQW1CLENBQUNDLElBQUcsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSXhCLE9BQU9BLEdBQUUsUUFBUSxjQUFjLE9BQU8sRUFBRSxRQUFRLGNBQWMsRUFBRUEsSUFBRyxHQUFHLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUl6RSxtQkFBbUI7QUFBQSxJQUNuQixnQkFBZ0I7QUFBQSxJQUNoQixtQkFBbUI7QUFBQSxJQUNuQixnQkFBZ0I7QUFBQSxJQUNoQix1QkFBdUI7QUFBQSxJQUN2Qiw4QkFBOEI7QUFBQSxJQUM5Qix3QkFBd0I7QUFBQSxJQUN4Qix3QkFBd0I7QUFBQSxFQUM1QjtBQUNBO0FBQ0EsTUFBTSxLQUFLLEVBQUM7QUFDWixFQUFFLEVBQUUsUUFBUSxNQUFJO0FBQ2hCLEVBQUUsRUFBRSxVQUFVLE1BQUk7QUFDbEIsRUFBRTtBQUFBLEVBQ0EsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUNWLENBQUM7QUFDRCxFQUFFO0FBQUEsRUFDQSwwQkFBMEIsTUFBTTtBQUNsQyxDQUFDO0FBQ0QsRUFBRTtBQUFBLEVBQ0EsUUFBUTtBQUFBLEVBQ1IsMEJBQTBCLE1BQU07QUFDbEMsQ0FBQztBQUNELEVBQUU7QUFBQSxFQUNBLFVBQVU7QUFBQSxFQUNWLDBCQUEwQixNQUFNO0FBQ2xDLENBQUM7QUFDRCxFQUFFO0FBQUEsRUFDQSxVQUFVO0FBQUEsRUFDViwwQkFBMEIsTUFBTTtBQUFBLEVBQ2hDLFFBQVE7QUFDVixDQUFDO0FBQ0QsU0FBUyxFQUFFRixLQUFJLElBQUk7QUFDakIsUUFBTSxFQUFFLFVBQVUsSUFBSSxPQUFJLDBCQUEwQkMsSUFBRyxhQUFhLEdBQUcsUUFBUSxJQUFJLE1BQUUsSUFBS0QsSUFBRyxJQUFJLEdBQUdBLEVBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUlDLEtBQUlBLEdBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQztBQUN0SSxTQUFPLEdBQUcsRUFBRSxVQUFVLEdBQUcsWUFBWSxHQUFHLGFBQWEsR0FBRyxRQUFRLEdBQUcsUUFBUSxFQUFDLENBQUU7QUFDaEY7QUFDQSxJQUFJO0FBQ0MsTUFBQyxJQUFJLENBQUNELE9BQU07QUFDZixRQUFNLElBQUlJLFNBQUU7QUFDWkMsT0FBRyxDQUFDO0FBQ0osUUFBTSxDQUFDSixJQUFHLENBQUMsSUFBSUssYUFBQUEsU0FBRSxLQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSUEsYUFBQUEsU0FBRSxDQUFBLENBQUUsR0FBRyxFQUFFLE9BQU8sR0FBRyxhQUFhLEdBQUcsU0FBUyxFQUFDLElBQUtDLEtBQUdQLEVBQUMsR0FBRztBQUFBLElBQ3RGLFVBQVU7QUFBQSxJQUNWLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLHVCQUF1QjtBQUFBLElBQ3ZCLGVBQWVFO0FBQUEsSUFDZixXQUFXO0FBQUEsSUFDWCxnQkFBZ0I7QUFBQSxJQUNoQixPQUFPQztBQUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNsQixJQUFNSCxJQUFHLEtBQUtRLEVBQUcsRUFBRSx1QkFBdUIsR0FBRyxlQUFlTixHQUFDLEdBQUksQ0FBQyxHQUFHLEtBQUssS0FBSyxPQUFPLFNBQVMsRUFBRSxTQUFTLENBQUEsR0FBSU8sS0FBSUMsYUFBQUEsT0FBRSxJQUFJLEdBQUcsSUFBSUEsYUFBQUEsT0FBRSxJQUFJLEdBQUcsSUFBSUEsYUFBQUEsT0FBRSxJQUFFLEdBQUcsSUFBSUEsYUFBQUEsT0FBRSxJQUFJO0FBQzNKQyxlQUFBQSxVQUFFLE1BQU07QUFDTixPQUFHLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxNQUFNLEVBQUUsVUFBVSxNQUFJLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixLQUFLLFFBQVEsRUFBRSxDQUFDLE9BQU87QUFBQSxNQUN2RyxHQUFHO0FBQUEsTUFDSCxNQUFNO0FBQUEsSUFDWixFQUFNO0FBQUEsRUFDSixHQUFHLENBQUMsRUFBRSxjQUFjLENBQUMsR0FBR0EsYUFBQUEsVUFBRSxNQUFNO0FBQzlCLFFBQUk7QUFDSixRQUFJLEtBQUssUUFBUSxFQUFFLE1BQU07QUFDdkIsVUFBSSxFQUFFLFNBQVM7QUFDYixVQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLFVBQVUsUUFBSyxJQUFJLEVBQUUsWUFBWSxRQUFRLEVBQUUsWUFBWSxRQUFRO0FBQzVFO0FBQUEsTUFDRjtBQUNBLFFBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQUEsSUFDdkI7QUFBQSxFQUNGLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDTixRQUFNLElBQUlDLGFBQUFBO0FBQUFBLElBQ1IsQ0FBQyxNQUFNO0FBQ0wsV0FBSyxRQUFRLEVBQUUsQ0FBQyxPQUFPO0FBQUEsUUFDckIsR0FBRztBQUFBLFFBQ0gsR0FBRztBQUFBLE1BQ1gsRUFBUTtBQUFBLElBQ0o7QUFBQSxJQUNBLENBQUMsQ0FBQztBQUFBLEVBQ04sR0FBSyxLQUFLLENBQUMsTUFBTTtBQUNiLE1BQUUsSUFBRSxHQUFHLEVBQUUsRUFBRSx1QkFBdUIsS0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUFBLE1BQ3BELE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLHVCQUF1QjtBQUFBLE1BQ3ZCLGNBQWNIO0FBQUEsTUFDZCxPQUFPO0FBQUEsSUFDYixDQUFLO0FBQUEsRUFDSCxHQUFHLEtBQUssQ0FBQyxNQUFNO0FBQ2IsUUFBSUk7QUFDSixRQUFJLENBQUMsRUFBRztBQUNSLFVBQU0sS0FBS0EsS0FBSSxFQUFFLENBQUMsTUFBTSxPQUFPLFNBQVNBLEdBQUUsRUFBRSxJQUFJO0FBQ2hELFNBQUssUUFBUSxFQUFFLENBQUM7QUFBQSxFQUNsQjtBQUNBRixlQUFBQSxVQUFFLE1BQU07QUFDTixRQUFJVixJQUFHO0FBQ0wsVUFBSSxDQUFDLEtBQUssRUFBRTtBQUNWO0FBQ0YsUUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUUsR0FBRyxFQUFFLEVBQUUsdUJBQXVCLE9BQUk7QUFBQSxJQUNuRDtBQUFBLEVBQ0YsR0FBRyxDQUFDQSxJQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ1osUUFBTSxLQUFLLE1BQU07QUFDZixNQUFFLGFBQWEsRUFBRSxFQUFFLFFBQVFFLE9BQUssT0FBTyxTQUFTQSxJQUFFLFNBQVMsS0FBSyxFQUFDLENBQUU7QUFBQSxFQUNyRSxHQUFHLEtBQUssQ0FBQyxNQUFNO0FBQ2IsTUFBRSxVQUFVLE1BQUksRUFBRSxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUc7QUFBQSxFQUN4QyxHQUFHLE1BQU0sS0FBSyxPQUFPLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxXQUFXLEdBQUcsS0FBSyxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQUUsYUFBYSxLQUFLLFFBQVEsRUFBRSxZQUFZLE1BQU0sS0FBSyxPQUFPLFNBQVMsRUFBRSxjQUFjLENBQUMsRUFBRTtBQUMzSyxTQUF1Qlcsa0JBQUU7QUFBQSxJQUN2QkM7QUFBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBS047QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxRQUNKLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxNQUNkO0FBQUEsTUFDTSx1QkFBdUI7QUFBQSxNQUN2QixjQUFjLEtBQUssT0FBTyxTQUFTLEVBQUU7QUFBQSxNQUNyQyxrQkFBa0I7QUFBQSxNQUNsQixVQUFVO0FBQUEsTUFDVixVQUEwQkssa0JBQUU7QUFBQSxRQUMxQkU7QUFBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsYUFBYTtBQUFBLFVBQ2IsaUJBQWlCO0FBQUEsVUFDakIsU0FBUztBQUFBLFVBQ1QsTUFBTUMsRUFBRyxFQUFFLE1BQU0sR0FBRyxnQkFBZ0IsR0FBRztBQUFBLFVBQ3ZDLFdBQVc7QUFBQSxVQUNYLE1BQU1kLE9BQUssT0FBTyxTQUFTQSxJQUFFO0FBQUEsVUFDN0IsV0FBVztBQUFBLFVBQ1gsY0FBY2UsRUFBRyxFQUFFLGdCQUFnQjtBQUFBLFVBQ25DLFlBQVk7QUFBQSxVQUNaLGNBQWM7QUFBQSxRQUN4QjtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUNBLEdBRzhDLEtBQUs7QUFBQSxFQUNqRCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsSUFDTkMsS0FBRTtBQUFBLElBQ0Y7QUFBQSxNQUNFLEdBQUdBLEtBQUU7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLEdBQUdBLEtBQUUsc0JBQXNCO0FBQUEsUUFDM0JDLEtBQUU7QUFBQSxRQUNGQSxLQUFFO0FBQUEsUUFDRkEsS0FBRTtBQUFBLFFBQ0ZBLEtBQUU7QUFBQSxNQUNWO0FBQUEsSUFDQTtBQUFBLElBQ0lELEtBQUU7QUFBQSxJQUNGQSxLQUFFO0FBQUEsSUFDRkEsS0FBRTtBQUFBLElBQ0Y7QUFBQSxNQUNFLEdBQUdBLEtBQUU7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0lBLEtBQUU7QUFBQSxJQUNGLEVBQUUsR0FBR0EsS0FBRSxZQUFZLE9BQU8sMEJBQXlCO0FBQUEsSUFDbkQ7QUFBQSxNQUNFLEdBQUdBLEtBQUU7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNoQjtBQUFBLEVBQ0E7QUFBQSxFQUNFLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsUUFDVjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFFBQ2hCO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQUEsRUFDTCx1QkFBdUIsQ0FBQ0UsRUFBRSxXQUFXQSxFQUFFLGdCQUFnQkEsRUFBRSxPQUFPO0FBQUEsRUFDaEUsU0FBU0EsRUFBRTtBQUFBLEVBQ1gsU0FBU0EsRUFBRTtBQUFBLEVBQ1gsVUFBVTtBQUNaLEdBQUcsS0FBS0MsY0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJO0FBQUEsRUFDcEIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sdUJBQXVCO0FBQ3pCLEdBQUcsS0FBSyxDQUFDdEIsSUFBRyxHQUFHQyxJQUFHLE9BQU87QUFBQSxFQUN2QixNQUFNRCxHQUFFO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRLElBQUk7QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLFNBQVNDO0FBQ1gsSUFBSSxLQUFLLENBQUNELElBQUcsR0FBR0MsSUFBRyxNQUFNc0IsSUFBRSxHQUFHdkIsSUFBRyxHQUFHQyxJQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQ0QsSUFBRyxPQUFPO0FBQUEsRUFDMUQsTUFBTUEsR0FBRTtBQUFBLEVBQ1IsUUFBUUEsR0FBRTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsT0FBT0EsR0FBRTtBQUNYLElBQUksS0FBSyxDQUFDQSxJQUFHLEdBQUdDLE9BQU07QUFDcEIsTUFBSUEsTUFBSyxRQUFRQSxHQUFFO0FBQ2pCLFdBQU9zQixJQUFFLEdBQUd2QixJQUFHLENBQUMsQ0FBQztBQUNyQixHQUFHLEtBQUs7QUFBQSxFQUNOLGNBQWMsQ0FBQ0EsUUFBTztBQUFBLElBQ3BCLG1CQUFtQkEsT0FBTSxTQUFTQSxLQUFJd0IsSUFBRyxTQUFRO0FBQUEsRUFDckQ7QUFDQSxHQUFHLEtBQUssQ0FBQ3hCLElBQUcsQ0FBQyxHQUFHQyxFQUFDLE1BQU07QUFDckIsUUFBTSxJQUFJRCxHQUFFLHNCQUFzQjtBQUFBLElBQ2hDLENBQUMsTUFBTTtBQUNMLFVBQUk7QUFDSixhQUFPLEVBQUUsV0FBVyxJQUFJLEtBQUssT0FBTyxTQUFTLEVBQUUsU0FBUyxPQUFPLFNBQVMsRUFBRTtBQUFBLElBQzVFO0FBQUEsRUFDSixHQUFLLElBQUksTUFBTSxLQUFLLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRSxVQUFVLEdBQUcsV0FBVyxFQUFFLEtBQUssVUFBUyxDQUFFLElBQUksQ0FBQSxHQUFJLElBQUlBLEdBQUUsc0JBQXNCO0FBQUEsSUFDbkgsQ0FBQyxNQUFNO0FBQ0wsVUFBSTtBQUNKLGFBQU8sRUFBRSxXQUFXLElBQUlBLEdBQUUsbUJBQW1CLE9BQU8sU0FBUyxFQUFFO0FBQUEsSUFDakU7QUFBQSxFQUNKLEdBQUssSUFBSTtBQUFBLElBQ0wsR0FBR0EsR0FBRTtBQUFBLElBQ0wsR0FBRyxJQUFJLENBQUEsSUFBSyxDQUFDQSxHQUFFLGNBQWM7QUFBQSxFQUNqQztBQUNFLFNBQU87QUFBQSxJQUNMLEdBQUdBO0FBQUEsSUFDSCxPQUFPeUIsR0FBRyxHQUFHLEtBQUssQ0FBQSxDQUFFO0FBQUEsSUFDcEIsVUFBVXhCO0FBQUEsSUFDVixTQUFTO0FBQUEsTUFDUEQ7QUFBQSxNQUNBLEtBQUssUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFBQSxNQUNqQztBQUFBLE1BQ0E7QUFBQSxJQUNOO0FBQUEsSUFDSSxZQUFZLEdBQUdBLElBQUcsR0FBRyxDQUFDO0FBQUEsRUFDMUI7QUFDQSxHQUFHLEtBQUs7QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxFQUVULFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxFQUNaO0FBU0E7QUN0aUJLLE1BQUMsSUFBSTBCLEdBQUUsU0FBUyxJQUFJQSxHQUFFLE1BQU0sSUFBSUMsZ0JBQUVELEdBQUUsV0FBVyxHQUFHQSxHQUFFLE1BQU07IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMV19
