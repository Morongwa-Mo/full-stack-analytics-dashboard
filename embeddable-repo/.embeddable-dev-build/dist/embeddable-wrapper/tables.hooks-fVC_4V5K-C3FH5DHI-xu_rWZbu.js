import { r as reactExports } from './embeddable-component-O_vB8keJ.js';

function O(e) {
  let t = 0, n = 0;
  for (let r = 0; r < e.length - 1; r++) {
    const u = e[r], s = e[r + 1];
    u == null || s == null || (u < s ? t++ : u > s && n++);
  }
  return t > n ? "asc" : n > t ? "desc" : "equal";
}
function w(e) {
  let t = 0, n = 0;
  for (let r = 0; r < e.length - 1; r++) {
    const u = e[r], s = e[r + 1];
    u == null || s == null || (u < s ? t++ : u > s && n++);
  }
  return t > 0 && n > 0;
}
const A = (e) => (t, n) => e === "asc" ? t < n ? -1 : t > n ? 1 : 0 : e === "desc" ? t > n ? -1 : t < n ? 1 : 0 : 0, M = (e) => {
  const t = e.results.data ?? [], n = t[0];
  if (!n) return [];
  const r = () => e.measures.reduce((l, o) => (l[o.name] = void 0, l), {}), u = (l, o, m, d) => {
    if (!w(o))
      return l;
    const g = O(o), f = [...o].sort(A(g)).map((c) => {
      const i = l.find(
        (a) => a[m.name] === c && a[d.name] === n[d.name]
      );
      return i || {
        ...n,
        [m.name]: c,
        ...r()
      };
    }), b = l.filter(
      (c) => !f.some(
        (i) => i[m.name] === c[m.name] && i[d.name] === c[d.name]
      )
    );
    return [...f, ...b];
  };
  let s = u(t, e.columnOrder, e.columnDimension, e.rowDimension);
  return s = u(s, e.rowOrder, e.rowDimension, e.columnDimension), s;
}, h = (e) => reactExports.useMemo(() => M(e), [e]);

export { h };
//# sourceMappingURL=tables.hooks-fVC_4V5K-C3FH5DHI-xu_rWZbu.js.map
//# sourceMappingURL=tables.hooks-fVC_4V5K-C3FH5DHI-xu_rWZbu.js.map
