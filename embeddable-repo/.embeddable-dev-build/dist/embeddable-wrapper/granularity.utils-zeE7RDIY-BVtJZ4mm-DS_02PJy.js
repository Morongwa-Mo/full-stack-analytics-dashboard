import { x, P as Pe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { L } from './GranularitySelectField-USDUQ-JX-DwuCP4xb-BFi42HgU.js';

const g = "_chartGranularitySelectFieldContainer_m26zn_1", G = "_marginTop_m26zn_7", o = {
  chartGranularitySelectFieldContainer: g,
  marginTop: G
}, m = ["day", "week", "month", "quarter", "year"], S = ({
  dimension: r,
  hasMarginTop: t,
  ...a
}) => {
  var e, i, l;
  if (!((e = r == null ? void 0 : r.inputs) == null ? void 0 : e.showGranularityDropdown))
    return null;
  const u = (i = r.inputs) == null ? void 0 : i.dateBounds, c = (l = r.inputs) == null ? void 0 : l.granularity;
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      className: Pe(
        o.chartGranularitySelectFieldContainer,
        t && o.marginTop
      ),
      children: /* @__PURE__ */ x.jsx(
        L,
        {
          ...a,
          primaryTimeRange: u,
          granularity: c,
          granularities: m,
          variant: "ghost",
          side: "bottom",
          align: "end"
        }
      )
    }
  );
}, w = (r, t) => {
  var n;
  const a = t ?? ((n = r.inputs) == null ? void 0 : n.granularity);
  return {
    ...r,
    inputs: {
      ...r.inputs,
      granularity: a
    }
  };
};

export { S, w };
//# sourceMappingURL=granularity.utils-zeE7RDIY-BVtJZ4mm-DS_02PJy.js.map
//# sourceMappingURL=granularity.utils-zeE7RDIY-BVtJZ4mm-DS_02PJy.js.map
