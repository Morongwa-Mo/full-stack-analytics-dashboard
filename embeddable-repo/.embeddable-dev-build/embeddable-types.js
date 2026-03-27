const p = "en-US", s = (t, o = {}) => ({
  __embeddableType: "built-in",
  toString: () => t,
  typeConfig: {
    label: t,
    optionLabel: () => t,
    ...o
  }
}), l = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null, a = (t, o) => {
  if (R.includes(t))
    throw new Error(`Type ${t} is part of the nativeTypes and cannot be defined`, { cause: "sdk" });
  const r = {
    __embeddableType: "custom",
    toString: () => t,
    typeConfig: o
  }, n = l();
  globalThis.__EMBEDDABLE__ = globalThis.__EMBEDDABLE__ || {};
  const i = n ? globalThis.__EMBEDDABLE__[n] = globalThis.__EMBEDDABLE__[n] || {} : globalThis.__EMBEDDABLE__;
  return i.types = i.types || {}, i.types = {
    ...i.types,
    [t]: {
      name: t,
      ...o
    }
  }, r;
}, L = "string", A = "number", f = "boolean", y = "time", S = "timeRange", B = "granularity", M = "dataset", h = "measure", N = "dimension", I = "dimensionOrMeasure", O = [
  L,
  A,
  f,
  y,
  S,
  B
], R = [
  ...O,
  M,
  h,
  N,
  I
], U = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null, e = (t, o) => {
  var i, T, b, D;
  const r = U();
  globalThis.__EMBEDDABLE__ ?? (globalThis.__EMBEDDABLE__ = {});
  const n = r ? (i = globalThis.__EMBEDDABLE__)[r] ?? (i[r] = {}) : globalThis.__EMBEDDABLE__;
  if (typeof t == "string")
    n.nativeTypes = n.nativeTypes || {}, n.nativeTypes[t] = n.nativeTypes[t] || {}, (T = n.nativeTypes[t]).options ?? (T.options = []), n.nativeTypes[t].options.push(o);
  else {
    const E = t.toString();
    if (!((b = n == null ? void 0 : n.types) != null && b[E]))
      return;
    (D = n.types[E]).options ?? (D.options = []), n.types[E].options.push(o);
  }
};
s("string", {
  transform: (t) => t,
  optionLabel: (t) => Array.isArray(t) ? `[${t.map((o) => `"${o}"`).join(",")}]` : `"${t}"`
});
s("number", {
  transform: (t) => Array.isArray(t) ? t : t && Number(t),
  optionLabel: (t) => Array.isArray(t) ? `[${t.join(",")}]` : (t == null ? void 0 : t.toLocaleString(p)) ?? ""
});
s("boolean", {
  transform: (t) => t === "true" || t === true,
  optionLabel: (t) => t ? "true" : "false"
});
s("time", {
  transform: (t) => {
    const o = t != null && t.date ? new Date(t.date) : void 0;
    return {
      date: o && o.toString() !== "Invalid Date" ? o : void 0,
      relativeTimeString: t == null ? void 0 : t.relativeTimeString
    };
  },
  optionLabel: (t) => {
    var o;
    return t ? t != null && t.date ? ((o = t.date) == null ? void 0 : o.toLocaleDateString(p)) ?? t.date.toLocaleString() : t.relativeTimeString : "";
  }
});
s("timeRange", {
  transform: (t) => {
    if (!t)
      return;
    const [o, r] = [t == null ? void 0 : t.from, t == null ? void 0 : t.to], n = new Date(o), i = new Date(r);
    return {
      from: n.toString() !== "Invalid Date" ? n : void 0,
      to: i.toString() !== "Invalid Date" ? i : void 0,
      relativeTimeString: t == null ? void 0 : t.relativeTimeString
    };
  },
  optionLabel: (t) => {
    var o, r, n, i;
    return t ? t != null && t.from && (t != null && t.to) ? `${((o = t.from) == null ? void 0 : o.toLocaleDateString(p)) ?? ((r = t.from) == null ? void 0 : r.toLocaleString())},${((n = t.to) == null ? void 0 : n.toLocaleDateString(p)) ?? ((i = t.to) == null ? void 0 : i.toLocaleString())}` : t == null ? void 0 : t.relativeTimeString : "";
  }
});
s("granularity", {
  transform: (t) => t,
  optionLabel: (t) => t
});
s("dataset");
s("measure");
s("dimension");
s("dimensionOrMeasure");
const c = a("align", {
  label: "Alignment",
  optionLabel: (t) => t
});
e(c, "left");
e(c, "center");
e(c, "right");
const _ = a("comparisonPeriod", {
  label: "Comparison period",
  optionLabel: (t) => t
});
e(_, "Previous period");
e(_, "Previous week");
e(_, "Previous month");
e(_, "Previous quarter");
e(_, "Previous year");
const g = {
  MARKDOWN: "Markdown",
  JSON: "Json"
}, m = a("DisplayFormat", {
  label: "Display format",
  optionLabel: (t) => t
});
e(m, g.MARKDOWN);
e(m, g.JSON);
const d = a("tableCellStyle", {
  label: "Table cell style",
  optionLabel: (t) => t
});
e(d, "Bold");
e(d, "Italic");
e(d, "Positive vs Negative");
a("color", {
  label: "Color",
  optionLabel: (t) => t.toUpperCase()
});
a("markdown", {
  label: "Markdown",
  optionLabel: (t) => t.toUpperCase()
});
