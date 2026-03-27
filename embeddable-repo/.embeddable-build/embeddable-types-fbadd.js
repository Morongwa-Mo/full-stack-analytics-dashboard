const _ = "en-US", r = (e, o = {}) => ({
  __embeddableType: "built-in",
  toString: () => e,
  typeConfig: {
    label: e,
    optionLabel: () => e,
    ...o
  }
}), E = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null, s = (e, o) => {
  if (N.includes(e))
    throw new Error(`Type ${e} is part of the nativeTypes and cannot be defined`, { cause: "sdk" });
  const t = {
    __embeddableType: "custom",
    toString: () => e,
    typeConfig: o
  }, l = E();
  globalThis.__EMBEDDABLE__ = globalThis.__EMBEDDABLE__ || {};
  const i = l ? globalThis.__EMBEDDABLE__[l] = globalThis.__EMBEDDABLE__[l] || {} : globalThis.__EMBEDDABLE__;
  return i.types = i.types || {}, i.types = {
    ...i.types,
    [e]: {
      name: e,
      ...o
    }
  }, t;
}, y = "string", L = "number", c = "boolean", T = "time", B = "timeRange", S = "granularity", f = "dataset", A = "measure", h = "dimension", M = "dimensionOrMeasure", w = [
  y,
  L,
  c,
  T,
  B,
  S
], N = [
  ...w,
  f,
  A,
  h,
  M
], C = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null, n = (e, o) => {
  var t, l, i, m;
  const u = C();
  globalThis.__EMBEDDABLE__ ?? (globalThis.__EMBEDDABLE__ = {});
  const a = u ? (t = globalThis.__EMBEDDABLE__)[u] ?? (t[u] = {}) : globalThis.__EMBEDDABLE__;
  if (typeof e == "string")
    a.nativeTypes = a.nativeTypes || {}, a.nativeTypes[e] = a.nativeTypes[e] || {}, (l = a.nativeTypes[e]).options ?? (l.options = []), a.nativeTypes[e].options.push(o);
  else {
    const d = e.toString();
    if (!((i = a == null ? void 0 : a.types) != null && i[d]))
      return;
    (m = a.types[d]).options ?? (m.options = []), a.types[d].options.push(o);
  }
};
r("string", {
  transform: (e) => e,
  optionLabel: (e) => Array.isArray(e) ? `[${e.map((o) => `"${o}"`).join(",")}]` : `"${e}"`
});
r("number", {
  transform: (e) => Array.isArray(e) ? e : e && Number(e),
  optionLabel: (e) => Array.isArray(e) ? `[${e.join(",")}]` : (e == null ? void 0 : e.toLocaleString(_)) ?? ""
});
r("boolean", {
  transform: (e) => e === "true" || e === !0,
  optionLabel: (e) => e ? "true" : "false"
});
r("time", {
  transform: (e) => {
    const o = e != null && e.date ? new Date(e.date) : void 0;
    return {
      date: o && o.toString() !== "Invalid Date" ? o : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var o;
    return e ? e != null && e.date ? ((o = e.date) == null ? void 0 : o.toLocaleDateString(_)) ?? e.date.toLocaleString() : e.relativeTimeString : "";
  }
});
r("timeRange", {
  transform: (e) => {
    if (!e)
      return;
    const [o, t] = [e == null ? void 0 : e.from, e == null ? void 0 : e.to], l = new Date(o), i = new Date(t);
    return {
      from: l.toString() !== "Invalid Date" ? l : void 0,
      to: i.toString() !== "Invalid Date" ? i : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var o, t, l, i;
    return e ? e != null && e.from && e != null && e.to ? `${((o = e.from) == null ? void 0 : o.toLocaleDateString(_)) ?? ((t = e.from) == null ? void 0 : t.toLocaleString())},${((l = e.to) == null ? void 0 : l.toLocaleDateString(_)) ?? ((i = e.to) == null ? void 0 : i.toLocaleString())}` : e == null ? void 0 : e.relativeTimeString : "";
  }
});
r("granularity", {
  transform: (e) => e,
  optionLabel: (e) => e
});
r("dataset");
r("measure");
r("dimension");
r("dimensionOrMeasure");
const b = s("align", {
  label: "Alignment",
  optionLabel: (e) => e
});
n(b, "left");
n(b, "center");
n(b, "right");
const p = s("comparisonPeriod", {
  label: "Comparison period",
  optionLabel: (e) => e
});
n(p, "Previous period");
n(p, "Previous week");
n(p, "Previous month");
n(p, "Previous quarter");
n(p, "Previous year");
const v = {
  MARKDOWN: "Markdown",
  JSON: "Json"
}, D = s("DisplayFormat", {
  label: "Display format",
  optionLabel: (e) => e
});
n(D, v.MARKDOWN);
n(D, v.JSON);
const g = s("tableCellStyle", {
  label: "Table cell style",
  optionLabel: (e) => e
});
n(g, "Bold");
n(g, "Italic");
n(g, "Positive vs Negative");
s("color", {
  label: "Color",
  optionLabel: (e) => e.toUpperCase()
});
s("markdown", {
  label: "Markdown",
  optionLabel: (e) => e.toUpperCase()
});
//# sourceMappingURL=embeddable-types.js.map
