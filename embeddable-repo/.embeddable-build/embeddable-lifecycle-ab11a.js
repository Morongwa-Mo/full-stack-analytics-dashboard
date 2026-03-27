const r = (t) => {
  let o = "";
  return Object.keys(t).forEach((n) => {
    const e = t[n];
    o += `${n}: ${e};
`;
  }), o;
}, a = (t) => {
  const o = `:root {
${r(t)}}`, n = "remarkable-ui-embeddable-style";
  let e = document.getElementById(n);
  return e ? e.textContent = o : (e = document.createElement("style"), e.id = n, e.textContent = o, document.head.appendChild(e)), () => e == null ? void 0 : e.remove();
}, c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = "embeddable", m = () => {
  if (typeof window > "u" || typeof document > "u") return;
  const t = sessionStorage.getItem(d);
  if (!t) return;
  const o = JSON.parse(t);
  for (const n in o) {
    const e = new Map(Object.entries(o[n] ?? {}));
    c.set(n, e), l.set(n, new Set(e.values()));
  }
};
m();
const s = () => {
  if (typeof document > "u") return;
  const t = document.head || document.getElementsByTagName("head")[0];
  if (t && !document.querySelector("link[data-remarkable-inter]")) {
    const o = document.createElement("link");
    o.rel = "preconnect", o.href = "https://fonts.googleapis.com", t.appendChild(o);
    const n = document.createElement("link");
    n.rel = "preconnect", n.href = "https://fonts.gstatic.com", n.crossOrigin = "anonymous", t.appendChild(n);
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap", e.setAttribute("data-remarkable-inter", "1"), t.appendChild(e);
  }
};
s();
const i = {
  onThemeUpdated: (t) => (s(), a(t.styles))
};
export {
  i as default
};
