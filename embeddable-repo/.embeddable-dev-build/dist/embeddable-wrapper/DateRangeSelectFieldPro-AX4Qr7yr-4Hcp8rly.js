import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { K as KIe, M as MRe, _ as _Ie, x, N as Nm, j as jm, U as Ur, d as Kx, T as TIe, f as KM, h as qM, y as yy, i as ku } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { w, L, y, j, T } from './dates.utils-BkOKKqSH-CDcz3fGq-BFa3d6fZ.js';
import { J as Je, _ as _e, W as We, y as y$2 } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { y as y$1 } from './EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { v } from './IconCalendarFilled-DaTHLPcZ-iqJYqiNt-BiLRf2yi.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './utc-OYNdM3Of-CUwwS7pr-C09mBqI5.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './index-BS0D-ICk.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const le = (e) => e.map((o) => ({
  rightLabel: w(o.getRange(), o.dateFormat),
  value: o.value,
  label: Je(o.label)
})), ie = "_dateRangePickerContent_pig22_1", ce = "_dateRangePickerContainer_pig22_5", R = {
  dateRangePickerContent: ie,
  dateRangePickerContainer: ce
}, h = (e) => {
  const o = useTheme();
  _e(o);
  const { dayjsLocaleReady: c } = L(), { onChange: r2, clearable: w$1, selectedValue: t2, showCustomRangeOptions: j$1, showTwoMonths: x$1 } = e, C = !j$1, [y$3, v$1] = reactExports.useState(C), [T$1, b] = reactExports.useState(false), [d, g] = reactExports.useState(
    y(t2)
  ), l = o.defaults.dateRangesOptions;
  if (reactExports.useEffect(() => {
    if (!c)
      return;
    const a = j(t2, l);
    MRe(a, t2) || r2(a);
  }, [t2, c, r2, l]), !c)
    return null;
  const { description: F, placeholder: S, title: O, tooltip: L$1 } = We(e), P = le(l), _ = (a) => {
    const u = j(
      { relativeTimeString: a },
      l
    );
    r2(u), g(void 0);
  }, I = (a) => {
    r2(T(a)), b(false);
  }, M = () => {
    g(void 0), r2(void 0);
  }, E = (() => {
    if (t2 != null && t2.relativeTimeString) {
      const a = P.find((u) => u.value === t2.relativeTimeString);
      if (a)
        return a.label;
    }
    return t2 != null && t2.from && (t2 != null && t2.to) ? w(t2, "MMM DD") : "";
  })(), V = o.i18n.language ?? o.formatter.locale, z = _Ie(d, t2), N = x$1 ? 2 : 1;
  return /* @__PURE__ */ x.jsx(y$1, { title: O, description: F, tooltip: L$1, children: /* @__PURE__ */ x.jsx(
    Nm,
    {
      open: T$1,
      onOpenChange: b,
      avoidCollisions: false,
      triggerComponent: /* @__PURE__ */ x.jsx(
        ku,
        {
          startIcon: v,
          "aria-label": S,
          placeholder: S,
          valueLabel: E,
          onClear: M,
          isClearable: w$1
        }
      ),
      children: /* @__PURE__ */ x.jsx(jm, { fitContent: true, className: R.dateRangePickerContent, children: y$3 ? /* @__PURE__ */ x.jsxs("div", { className: R.dateRangePickerContainer, children: [
        !C && /* @__PURE__ */ x.jsx(
          Ur,
          {
            label: y$2.t("editors.dateRangePicker.backToPresets"),
            onClick: (a) => {
              a.preventDefault(), v$1(false);
            },
            startIcon: /* @__PURE__ */ x.jsx(Kx, {})
          }
        ),
        /* @__PURE__ */ x.jsx(
          TIe,
          {
            locale: V,
            numberOfMonths: N,
            value: d,
            onChange: g
          }
        ),
        /* @__PURE__ */ x.jsx(
          KM,
          {
            size: "small",
            disabled: z,
            onClick: () => I(d),
            children: y$2.t("editors.dateRangePicker.apply")
          }
        )
      ] }) : /* @__PURE__ */ x.jsxs(qM, { children: [
        /* @__PURE__ */ x.jsx(
          Ur,
          {
            label: y$2.t("editors.dateRangePicker.custom"),
            onClick: (a) => {
              a.preventDefault(), v$1(true);
            },
            endIcon: /* @__PURE__ */ x.jsx(yy, {})
          }
        ),
        P.map((a) => /* @__PURE__ */ x.jsx(
          Ur,
          {
            ...a,
            isSelected: (t2 == null ? void 0 : t2.relativeTimeString) === a.value,
            onClick: () => _(a.value)
          },
          a.value
        ))
      ] }) })
    }
  ) });
}, de = {
  name: "DateRangeSelectFieldPro",
  label: "Date-Range Picker - Presets",
  category: "Dropdowns - dates",
  defaultWidth: 300,
  defaultHeight: 120,
  inputs: [
    Ne.title,
    Ne.description,
    Ne.tooltip,
    { ...Ne.placeholder, defaultValue: "Select a date-range" },
    {
      ...Ne.boolean,
      name: "showCustomRangeOptions",
      label: "Show custom date-range option",
      defaultValue: true,
      category: "Component Settings"
    },
    {
      ...Ne.boolean,
      name: "showTwoMonths",
      label: "Show two-month view",
      defaultValue: false,
      category: "Component Settings"
    },
    Ne.clearable,
    {
      ...Ne.timeRange,
      name: "selectedValue",
      label: "Selected value",
      category: "Pre-configured variables"
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
}, ge = definePreview(h, {
  showCustomRangeOptions: true,
  onChange: () => null
}), ue = (e) => ({
  ...e
}), pe = {
  onChange: (e) => ({
    value: e ?? KIe.noFilter(),
    fromDate: e != null && e.from ? { date: e == null ? void 0 : e.from } : KIe.noFilter(),
    toDate: e != null && e.to ? { date: e == null ? void 0 : e.to } : KIe.noFilter()
  })
}, ke = {
  Component: h,
  meta: de,
  preview: ge,
  config: {
    props: ue,
    events: pe
  }
};
const m = ke.preview, t = ke.meta, r = defineComponent(
  ke.Component,
  t,
  ke.config
);

export { r as default, t as meta, m as preview };
//# sourceMappingURL=DateRangeSelectFieldPro-AX4Qr7yr-4Hcp8rly.js.map
//# sourceMappingURL=DateRangeSelectFieldPro-AX4Qr7yr-4Hcp8rly.js.map
