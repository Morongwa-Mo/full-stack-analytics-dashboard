import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { x as x$1, K as KIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { N as Ne, e } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import { _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { y } from './EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js';
import { L } from './GranularitySelectField-USDUQ-JX-DwuCP4xb-BFi42HgU.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';

const t$1 = (r) => {
  const n = useTheme();
  _e(n);
  const { granularity: i2, granularities: o, clearable: u, primaryTimeRange: s, onChange: c } = r, { description: d, tooltip: g, placeholder: p, title: m } = We(r);
  return /* @__PURE__ */ x$1.jsx(y, { title: m, description: d, tooltip: g, children: /* @__PURE__ */ x$1.jsx(
    L,
    {
      clearable: u,
      placeholder: p,
      granularity: i2,
      granularities: o,
      primaryTimeRange: s,
      onChange: c
    }
  ) });
}, C = {
  name: "GranularitySelectFieldPro",
  label: "Granularity Select Field",
  category: "Dropdowns - dates",
  defaultWidth: 300,
  defaultHeight: 120,
  inputs: [
    Ne.title,
    Ne.description,
    Ne.tooltip,
    { ...Ne.placeholder, defaultValue: "Select a granularity" },
    {
      ...Ne.granularities,
      label: "Available granularities",
      category: "Pre-configured variables"
    },
    {
      ...Ne.granularity,
      label: "Selected granularity",
      category: "Pre-configured variables"
    },
    {
      ...Ne.timeRange,
      name: "primaryTimeRange",
      label: "Primary date-range",
      description: "Connect your primary date-range variable to enable automatic selection of the most appropriate granularity",
      category: "Pre-configured variables"
    },
    { ...Ne.clearable, defaultValue: false }
  ],
  events: [
    {
      name: "onChange",
      label: "Selected granularity updated",
      properties: [
        {
          name: "value",
          label: "Selected granularity",
          type: "granularity"
        }
      ]
    }
  ],
  variables: [
    {
      name: "granularity value",
      type: "granularity",
      defaultValue: "day",
      inputs: ["granularity"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, G = definePreview(t$1, {
  granularities: [
    e.second,
    e.minute,
    e.hour,
    e.day,
    e.week,
    e.month,
    e.quarter,
    e.year
  ],
  onChange: () => null
}), j = (r) => ({
  ...r
}), x = {
  onChange: (r) => ({
    value: r ?? KIe.noFilter()
  })
}, O = {
  Component: t$1,
  meta: C,
  preview: G,
  config: {
    props: j,
    events: x
  }
};
const i = O.preview, t = O.meta, a = defineComponent(
  O.Component,
  t,
  O.config
);

export { a as default, t as meta, i as preview };
//# sourceMappingURL=GranularitySelectFieldPro-BZQuLJm7-Cv947l1J.js.map
//# sourceMappingURL=GranularitySelectFieldPro-BZQuLJm7-Cv947l1J.js.map
