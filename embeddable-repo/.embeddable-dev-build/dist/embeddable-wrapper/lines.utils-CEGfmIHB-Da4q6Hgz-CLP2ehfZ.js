const m = (g) => {
  const { onLineClicked: l } = g;
  return l ? {
    onClick: (o, x, e) => {
      var u;
      const r = o.native ?? o, n = e.getElementsAtEventForMode(r, "x", { intersect: false }, false);
      if (!(n != null && n.length)) {
        l({
          dimensionValue: null,
          groupingDimensionValue: null
        });
        return;
      }
      const i = n[0].index, f = ((u = e.data.labels) == null ? void 0 : u[i]) ?? null;
      let t = e.getElementsAtEventForMode(
        r,
        "nearest",
        { intersect: true },
        false
      )[0];
      (!t || t.index !== i) && (t = n.find((a) => {
        const s = e.data.datasets[a.datasetIndex], c = Array.isArray(s == null ? void 0 : s.data) ? s.data[i] : void 0;
        return c != null;
      }));
      let d;
      if (t) {
        const a = e.data.datasets[t.datasetIndex];
        d = (a == null ? void 0 : a.rawLabel) ?? null;
      }
      l({
        dimensionValue: f,
        groupingDimensionValue: d
      });
    }
  } : {};
};

export { m };
//# sourceMappingURL=lines.utils-CEGfmIHB-Da4q6Hgz-CLP2ehfZ.js.map
//# sourceMappingURL=lines.utils-CEGfmIHB-Da4q6Hgz-CLP2ehfZ.js.map
