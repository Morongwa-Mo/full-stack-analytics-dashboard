import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { K as KIe, I as Ie, x, b as bRe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { w as w$1, L as L$1, j } from './dates.utils-BkOKKqSH-CDcz3fGq-BFa3d6fZ.js';
import { J as Je, _ as _e, W as We, y as y$1 } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { y } from './EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { s, N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './index-BS0D-ICk.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _ = [["path", { d: "M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4", key: "svg-0" }], ["path", { d: "M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-1" }], ["path", { d: "M15 3v4", key: "svg-2" }], ["path", { d: "M7 3v4", key: "svg-3" }], ["path", { d: "M3 11h16", key: "svg-4" }], ["path", { d: "M18 16.496v1.504l1 1", key: "svg-5" }]], L = Ie("outline", "calendar-time", "CalendarTime", _), E = (e, a) => !e || a.some((o) => o.value === e), I = (e, a) => e.map((o) => ({
  rightLabel: a ? w$1(o.getRange(a), o.dateFormat) : "",
  value: o.value,
  label: Je(o.label)
})), l = (e) => {
  const a = useTheme();
  _e(a);
  const { description: o, placeholder: m2, title: u, tooltip: g } = We(e), { comparisonPeriod: r2, onChange: i } = e, n2 = a.defaults.comparisonPeriodsOptions, s2 = reactExports.useMemo(
    () => E(r2, n2),
    [r2, n2]
  );
  reactExports.useEffect(() => {
    s2 || i(void 0);
  }, [s2, i]);
  const { dayjsLocaleReady: v } = L$1(), f = j(
    e.primaryDateRange,
    a.defaults.dateRangesOptions
  );
  if (!v)
    return null;
  const h = I(
    n2,
    f
  );
  return /* @__PURE__ */ x.jsx(y, { title: u, description: o, tooltip: g, children: /* @__PURE__ */ x.jsx(
    bRe,
    {
      startIcon: L,
      clearable: true,
      placeholder: m2,
      value: s2 ? r2 : void 0,
      onChange: i,
      options: h,
      noOptionsMessage: y$1.t("common.noOptionsAvailable"),
      avoidCollisions: false
    }
  ) });
}, V = {
  name: "ComparisonPeriodSelectFieldPro",
  label: "Comparison Period Select Field",
  category: "Dropdowns - dates",
  defaultWidth: 300,
  defaultHeight: 120,
  inputs: [
    Ne.title,
    Ne.description,
    Ne.tooltip,
    { ...Ne.placeholder, defaultValue: "Select a date-comparison" },
    {
      ...Ne.timeRange,
      name: "primaryDateRange",
      label: "Primary date-range",
      category: "Pre-configured variables",
      description: "Pick the main time period. The comparison range is based on this selection."
    },
    {
      ...Ne.comparisonPeriod,
      label: "Selected comparison period",
      category: "Pre-configured variables"
    }
  ],
  events: [
    {
      name: "onChange",
      label: "Selected comparison-period updated",
      properties: [
        {
          name: "value",
          label: "Selected comparison-period",
          type: s
        }
      ]
    }
  ],
  variables: [
    {
      name: "comparison-period value",
      type: s,
      defaultValue: KIe.noFilter(),
      inputs: ["comparisonPeriod"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, w = definePreview(l, {
  onChange: () => null
}), A = (e) => e, z = {
  onChange: (e) => ({
    value: e || KIe.noFilter()
  })
}, Q = {
  Component: l,
  meta: V,
  preview: w,
  config: {
    props: A,
    events: z
  }
};
const m = Q.preview, r = Q.meta, n = defineComponent(
  Q.Component,
  r,
  Q.config
);

export { n as default, r as meta, m as preview };
//# sourceMappingURL=ComparisonPeriodSelectFieldPro-BcI8YXHt-Osh_XptJ.js.map

//# sourceMappingURL=ComparisonPeriodSelectFieldPro-BcI8YXHt-Osh_XptJ.js.map