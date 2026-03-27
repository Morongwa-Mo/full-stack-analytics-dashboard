import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { K as KIe, x, g as gRe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { L, T, w, y as y$2 } from './dates.utils-BkOKKqSH-CDcz3fGq-BFa3d6fZ.js';
import { _ as _e, W as We, y as y$1 } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { y } from './EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js';
import { v } from './IconCalendarFilled-DaTHLPcZ-iqJYqiNt-BiLRf2yi.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const l = (e) => {
  const t2 = useTheme();
  _e(t2);
  const { dayjsLocaleReady: d } = L();
  if (!d)
    return null;
  const { description: c, placeholder: i, title: u, tooltip: p } = We(e), { onChange: m, clearable: f, selectedValue: n, showTwoMonths: g } = e, h = (y2) => {
    const C = T(y2);
    m(C);
  }, r2 = t2.defaults.dateRangesOptions, b = w(n, "MMM DD", r2), v$1 = t2.i18n.language ?? t2.formatter.locale;
  return /* @__PURE__ */ x.jsx(y, { title: u, description: c, tooltip: p, children: /* @__PURE__ */ x.jsx(
    gRe,
    {
      startIcon: v,
      locale: v$1,
      clearable: f,
      placeholder: i,
      displayValue: b,
      numberOfMonths: g ? 2 : 1,
      value: y$2(n, r2),
      onChange: h,
      submitLabel: y$1.t("editors.dateRangePicker.apply"),
      avoidCollisions: false
    }
  ) });
}, O = {
  name: "DateRangePickerCustomPro",
  label: "Date-Range Picker - Custom",
  category: "Dropdowns - dates",
  defaultWidth: 300,
  defaultHeight: 120,
  inputs: [
    Ne.title,
    Ne.description,
    Ne.tooltip,
    { ...Ne.placeholder, defaultValue: "Select a date-range" },
    Ne.clearable,
    {
      ...Ne.timeRange,
      name: "selectedValue",
      label: "Selected value",
      category: "Pre-configured variables"
    },
    {
      ...Ne.boolean,
      name: "showTwoMonths",
      label: "Show two months",
      defaultValue: false,
      category: "Component Settings"
    }
  ],
  events: [
    {
      name: "onChange",
      label: "Selected date-range updated",
      properties: [
        {
          name: "value",
          label: "Selected date-range",
          type: "timeRange"
        },
        {
          name: "fromDate",
          label: "Start date of selected range",
          type: "time"
        },
        {
          name: "toDate",
          label: "To date of selected range",
          type: "time"
        }
      ]
    }
  ],
  variables: [
    {
      name: "date-range value",
      type: "timeRange",
      defaultValue: KIe.noFilter(),
      inputs: ["selectedValue"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, I = definePreview(l, {
  onChange: () => null
}), _ = (e) => ({
  ...e
}), E = {
  onChange: (e) => ({
    value: e ?? KIe.noFilter(),
    fromDate: e != null && e.from ? { date: e == null ? void 0 : e.from } : KIe.noFilter(),
    toDate: e != null && e.to ? { date: e == null ? void 0 : e.to } : KIe.noFilter()
  })
}, K = {
  Component: l,
  meta: O,
  preview: I,
  config: {
    props: _,
    events: E
  }
};
const r = K.preview, t = K.meta, a = defineComponent(
  K.Component,
  t,
  K.config
);

export { a as default, t as meta, r as preview };
//# sourceMappingURL=DateRangePickerCustomPro-DY2jSoNt-CV7GY5Yf.js.map
//# sourceMappingURL=DateRangePickerCustomPro-DY2jSoNt-CV7GY5Yf.js.map
