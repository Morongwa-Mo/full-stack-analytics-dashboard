import { x as x$1, b as bRe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { J as Je, _ as _e } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { k as ke } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';

const D = 1, v = 100, x = () => ke.map((e) => ({
  ...e,
  label: Je(e.label)
})), m = (e) => {
  if (e instanceof Date) return Number.isNaN(e.getTime()) ? null : e;
  if (typeof e == "string" || typeof e == "number") {
    const t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
  }
  return null;
}, s = (e) => new Date(e.getTime() + 1), u = (e, t, r) => (t.getTime() - e.getTime()) / r;
function U(e, t, r) {
  if (e > t) return 0;
  switch (r) {
    case "second":
      return u(e, s(t), 1e3);
    case "minute":
      return u(e, s(t), 60 * 1e3);
    case "hour":
      return u(e, s(t), 3600 * 1e3);
    case "day":
      return u(e, s(t), 1440 * 60 * 1e3);
    case "week":
      return u(e, s(t), 10080 * 60 * 1e3);
    case "month":
      return u(e, s(t), 672 * 60 * 60 * 1e3);
    // shortest month
    case "quarter":
      return u(e, s(t), 2160 * 60 * 60 * 1e3);
    // shortest quarter
    case "year":
      return u(e, s(t), 365 * 24 * 60 * 60 * 1e3);
  }
}
const k = (e, t, r) => {
  const o = U(e, t, r);
  return o >= D && o <= v;
}, A = (e, t) => {
  if (!e) return t;
  const r = m(e == null ? void 0 : e.from), o = m(e == null ? void 0 : e.to);
  if (!r || !o) return t;
  const a = /* @__PURE__ */ new Set();
  for (const i of t) {
    const c = i.value;
    k(r, o, c) && a.add(c);
  }
  return t.filter((i) => a.has(i.value));
}, p = (e, t) => {
  var o;
  if (!t)
    return;
  if (e.some((a) => a.value === t))
    return t;
  const r = e.length > 2 ? 1 : 0;
  return (o = e[r]) == null ? void 0 : o.value;
}, L = (e) => {
  const t = useTheme();
  _e(t);
  const {
    granularity: r,
    granularities: o,
    clearable: a,
    placeholder: i,
    primaryTimeRange: c,
    variant: S,
    side: T,
    align: y,
    onChange: f
  } = e, b = x(), l = reactExports.useMemo(() => A(
    c,
    b.filter(
      (n) => o == null ? void 0 : o.includes(n.value)
    )
  ), [c, o]);
  reactExports.useEffect(() => {
    if (r && !l.some((n) => n.value === r)) {
      const n = p(l, r);
      n && f(n);
    }
  }, [l, r, f]);
  const h = p(l, r);
  return /* @__PURE__ */ x$1.jsx(
    bRe,
    {
      variant: S,
      clearable: a,
      placeholder: i,
      value: h,
      options: l,
      onChange: (n) => f(n),
      avoidCollisions: false,
      side: T,
      align: y
    }
  );
};

export { L };
//# sourceMappingURL=GranularitySelectField-USDUQ-JX-DwuCP4xb-BFi42HgU.js.map
//# sourceMappingURL=GranularitySelectField-USDUQ-JX-DwuCP4xb-BFi42HgU.js.map
