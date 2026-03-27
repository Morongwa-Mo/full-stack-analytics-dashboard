import { L as pIe, o as we, x, Q as kIe, H as HIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { j } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { h } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';

const w = (e) => {
  var n;
  const t = (n = e.inputs) == null ? void 0 : n.align;
  if (t) return t;
  switch (e.nativeType) {
    case "boolean":
    case "time":
    case "number":
      return pIe.RIGHT;
    default:
      return pIe.LEFT;
  }
}, A = (e) => {
  var n;
  const t = (n = e.inputs) == null ? void 0 : n.width;
  if (t) return t;
  switch (e.nativeType) {
    case "string":
      return we("--em-tablechart-min-width--string", "8.75rem");
    case "number":
      return we("--em-tablechart-min-width--number", "5.625rem");
    case "time":
      return we("--em-tablechart-min-width--time", "8.75rem");
    case "boolean":
    default:
      return we("--em-tablechart-min-width--boolean", "5.625rem");
  }
}, F = (e, t) => {
  const n = j(t);
  return e.dimensionsAndMeasures.map((r) => {
    var u;
    const a = (u = r.inputs) == null ? void 0 : u.displayFormat, y = a && (a === h.JSON || a === h.MARKDOWN);
    return {
      id: r.name,
      title: n.dimensionOrMeasureTitle(r),
      minWidth: A(r),
      align: w(r),
      accessor: (i) => {
        const s = {
          ...r,
          inputs: { ...r.inputs, displayNullAs: e.displayNullAs }
        };
        return n.data(s, i[r.name]);
      },
      cellStyle: (i) => {
        var m, b;
        const s = (m = r.inputs) == null ? void 0 : m.tableCellStyle;
        if (s) {
          const d = (b = t.defaults.tableCellStyleOptions) == null ? void 0 : b.find(
            (g) => g.value === s
          );
          if (d)
            return d.styles(i);
        }
      },
      cell: y ? ({ value: i }) => {
        let s;
        return typeof i == "string" ? s = i : i != null ? s = String(i) : s = void 0, /* @__PURE__ */ x.jsx(kIe, { value: i, children: a === h.MARKDOWN ? (
          // Markdown
          /* @__PURE__ */ x.jsx(HIe, { content: s })
        ) : (
          // JSON
          /* @__PURE__ */ x.jsx("pre", { children: s })
        ) });
      } : void 0
    };
  });
}, N = (e) => {
  var n;
  if (!e.rows || e.rows.length === 0)
    return [];
  const t = (n = e.clickDimension) == null ? void 0 : n.name;
  return !t || Object.keys(e.rows[0]).includes(t) ? e.rows : e.rows.map(({ [t]: r, ...a }) => ({
    ...a
  }));
};

export { F, N };
//# sourceMappingURL=tables.utils-o7rLEWDn-DefqD7R2-DVky_i4E.js.map
//# sourceMappingURL=tables.utils-o7rLEWDn-DefqD7R2-DVky_i4E.js.map
