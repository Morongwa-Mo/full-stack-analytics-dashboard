import { o as ot, c as ct } from './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import { I, Q } from './quarterOfYear-BLO_Qaw2-CBVA3k0_-BAgvWFqb.js';
import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { k as ke } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';

var S = { exports: {} }, A = S.exports, G;
function C() {
  return G || (G = 1, (function(O, h) {
    (function(r, t) {
      O.exports = t();
    })(A, (function() {
      return function(r, t) {
        t.prototype.isSameOrBefore = function(u, o) {
          return this.isSame(u, o) || this.isBefore(u, o);
        };
      };
    }));
  })(S)), S.exports;
}
var L = C();
const N = /* @__PURE__ */ by(L);
ot.extend(ct);
ot.extend(I);
ot.extend(N);
ot.extend(Q);
function P(O) {
  const h = useTheme(), { results: r, dimension: t, orderDirection: u = "asc", externalDateBounds: o } = O;
  return reactExports.useMemo(() => {
    var k, q, w, I2, R, V, F;
    const f = (k = t.inputs) == null ? void 0 : k.granularity, s = t.name, a = (q = t.inputs) == null ? void 0 : q.dateBounds, $ = ke.map(
      (e) => e.value
    );
    if (!f || !$.includes(f) || !s || !r || r.isLoading || ((w = r.data) == null ? void 0 : w.length) === 0)
      return r;
    const c = a != null && a.relativeTimeString ? (I2 = h.defaults.dateRangesOptions.find((e) => e.value === (a == null ? void 0 : a.relativeTimeString))) == null ? void 0 : I2.getRange() : a;
    if (t.nativeType !== "time") return r;
    const l = [...(r == null ? void 0 : r.data) ?? []].sort((e, i) => {
      const m = e[s], p = i[s];
      return m == null ? 1 : p == null ? -1 : ot.utc(m).diff(ot.utc(p));
    }), x = ot.utc(
      (o == null ? void 0 : o.from) ?? (c == null ? void 0 : c.from) ?? ((R = l[0]) == null ? void 0 : R[s])
    ), y = ot.utc(
      (o == null ? void 0 : o.to) ?? (c == null ? void 0 : c.to) ?? ((V = l[l.length - 1]) == null ? void 0 : V[s]) ?? ((F = [...l].reverse().find((e) => (e == null ? void 0 : e[s]) != null)) == null ? void 0 : F[s])
    );
    if (!x.isValid() || !y.isValid())
      return { ...r, data: [] };
    const v = /* @__PURE__ */ new Map();
    for (const e of l) {
      const i = e[s];
      if (i == null) continue;
      const m = ot.utc(i).toISOString().split("Z")[0], p = v.get(m) ?? [];
      p.push(e), v.set(m, p);
    }
    const d = [];
    let g = x.startOf(f === "week" ? "isoWeek" : f);
    for (; g.isSameOrBefore(y); ) {
      const e = g.toISOString().split("Z")[0], i = v.get(e);
      i && i.length > 0 ? d.push(...i) : d.push({ [s]: e }), g = g.add(1, f);
    }
    return u === "desc" && d.reverse(), {
      ...r,
      data: d
    };
  }, [r, t, u, h]);
}

export { P };
//# sourceMappingURL=charts.fillGaps.hooks-PCeJ5uuu-BBf-qw__-DRdlHrWG.js.map
//# sourceMappingURL=charts.fillGaps.hooks-PCeJ5uuu-BBf-qw__-DRdlHrWG.js.map
