const M = (o) => {
  const e = (r) => r && typeof r == "object" && !Array.isArray(r) ? "{" + Object.keys(r).sort().map((s) => `"${s}":${e(r[s])}`).join(",") + "}" : Array.isArray(r) ? "[" + r.map(e).join(",") + "]" : JSON.stringify(r), n = e(o);
  let t = 2166136261;
  for (let r = 0; r < n.length; r++)
    t ^= n.charCodeAt(r), t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
  return (t >>> 0).toString(16);
}, c = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), h = "embeddable", $ = () => {
  const o = {};
  for (const [e, n] of c)
    o[e] = Object.fromEntries(n);
  sessionStorage.setItem(h, JSON.stringify(o));
}, A = () => {
  if (typeof window > "u" || typeof document > "u") return;
  const o = sessionStorage.getItem(h);
  if (!o) return;
  const e = JSON.parse(o);
  for (const n in e) {
    const t = new Map(Object.entries(e[n] ?? {}));
    c.set(n, t), m.set(n, new Set(t.values()));
  }
};
A();
const E = (o, e, n, t) => {
  if (typeof window > "u" || typeof document > "u") return "";
  c.has(o) || (c.set(o, /* @__PURE__ */ new Map()), m.set(o, /* @__PURE__ */ new Set()));
  const r = c.get(o);
  if (r.has(e)) return r.get(e);
  const s = n[t % n.length];
  if (typeof s != "string")
    throw new Error("No valid color found in palette");
  return r.set(e, s), $(), s;
}, I = ({
  dimensionOrMeasure: o,
  theme: e,
  color: n,
  value: t,
  index: r,
  chartColors: s
}) => {
  var l, b, p, g, y, C;
  const d = (l = o.inputs) == null ? void 0 : l.color;
  if (d) return d;
  const u = o.__type__ === "measure" ? "measure" : "dimensionValue", a = (p = (b = e.charts.backgroundColorMap) == null ? void 0 : b[u]) == null ? void 0 : p[t], i = (y = (g = e.charts.borderColorMap) == null ? void 0 : g[u]) == null ? void 0 : y[t];
  if (n === "background") {
    if (a) return a;
    if (i) return i;
  }
  if (n === "border") {
    if (i) return i;
    if (a) return a;
  }
  const j = M(e), f = n === "background" ? "backgroundColors" : "borderColors", w = `${j}.charts.${f}`, S = ((C = e.charts) == null ? void 0 : C[f]) ?? e.charts.backgroundColors ?? s;
  return E(w, t, S, r);
};

export { I };
//# sourceMappingURL=styles.utils-BfpH_m_W-BVwxfT0G-FCoxpF9d.js.map
//# sourceMappingURL=styles.utils-BfpH_m_W-BVwxfT0G-FCoxpF9d.js.map
