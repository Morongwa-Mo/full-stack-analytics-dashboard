import { d as definePreview, u as useTheme, a as defineComponent } from "./index.esm-nuP141l8.js";
import { x as x$1, K as KIe } from "./index-CnLFSN1m-CiKoWgQc.js";
import { N as Ne, e } from "./component.inputs.constants-Cs7gX1rI-ChA2Mp06.js";
import { _ as _e, W as We } from "./component.utils-CbnwaSi1-v-XPM_Ab.js";
import { y } from "./EditorCard-DhASZ5NL-mK-ulTAd.js";
import { L } from "./GranularitySelectField-USDUQ-JX-DwuCP4xb.js";
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
export {
  a as default,
  t as meta,
  i as preview
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JhbnVsYXJpdHlTZWxlY3RGaWVsZFByby1CWlF1TEptNy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL21vcm9uZ3dhL2VtYmVkZGFibGVfaHVic3BvdF9kYXNoL2VtYmVkZGFibGUtcmVwby9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3JlbWFya2FibGUtcHJvL2Rpc3QvZGVmaW5pdGlvbi1EMk8tbUhKdi5qcyIsIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L0dyYW51bGFyaXR5U2VsZWN0RmllbGRQcm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhlbWUgYXMgeSwgZGVmaW5lUHJldmlldyBhcyBmIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgaiBhcyBsLCBWIGFzIGIgfSBmcm9tIFwiLi9pbmRleC1DbkxGU04xbS5qc1wiO1xuaW1wb3J0IHsgRyBhcyBlLCBpIGFzIGEgfSBmcm9tIFwiLi9jb21wb25lbnQuaW5wdXRzLmNvbnN0YW50cy1DczdnWDFySS5qc1wiO1xuaW1wb3J0IHsgYSBhcyB2LCByIGFzIGggfSBmcm9tIFwiLi9jb21wb25lbnQudXRpbHMtQ2Jud2FTaTEuanNcIjtcbmltcG9ydCB7IEUgYXMgUyB9IGZyb20gXCIuL0VkaXRvckNhcmQtRGhBU1o1TkwuanNcIjtcbmltcG9ydCB7IEcgYXMgUCB9IGZyb20gXCIuL0dyYW51bGFyaXR5U2VsZWN0RmllbGQtVVNEVVEtSlguanNcIjtcbmNvbnN0IHQgPSAocikgPT4ge1xuICBjb25zdCBuID0geSgpO1xuICB2KG4pO1xuICBjb25zdCB7IGdyYW51bGFyaXR5OiBpLCBncmFudWxhcml0aWVzOiBvLCBjbGVhcmFibGU6IHUsIHByaW1hcnlUaW1lUmFuZ2U6IHMsIG9uQ2hhbmdlOiBjIH0gPSByLCB7IGRlc2NyaXB0aW9uOiBkLCB0b29sdGlwOiBnLCBwbGFjZWhvbGRlcjogcCwgdGl0bGU6IG0gfSA9IGgocik7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gbC5qc3goUywgeyB0aXRsZTogbSwgZGVzY3JpcHRpb246IGQsIHRvb2x0aXA6IGcsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gbC5qc3goXG4gICAgUCxcbiAgICB7XG4gICAgICBjbGVhcmFibGU6IHUsXG4gICAgICBwbGFjZWhvbGRlcjogcCxcbiAgICAgIGdyYW51bGFyaXR5OiBpLFxuICAgICAgZ3JhbnVsYXJpdGllczogbyxcbiAgICAgIHByaW1hcnlUaW1lUmFuZ2U6IHMsXG4gICAgICBvbkNoYW5nZTogY1xuICAgIH1cbiAgKSB9KTtcbn0sIEUgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiB0XG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBDID0ge1xuICBuYW1lOiBcIkdyYW51bGFyaXR5U2VsZWN0RmllbGRQcm9cIixcbiAgbGFiZWw6IFwiR3JhbnVsYXJpdHkgU2VsZWN0IEZpZWxkXCIsXG4gIGNhdGVnb3J5OiBcIkRyb3Bkb3ducyAtIGRhdGVzXCIsXG4gIGRlZmF1bHRXaWR0aDogMzAwLFxuICBkZWZhdWx0SGVpZ2h0OiAxMjAsXG4gIGlucHV0czogW1xuICAgIGEudGl0bGUsXG4gICAgYS5kZXNjcmlwdGlvbixcbiAgICBhLnRvb2x0aXAsXG4gICAgeyAuLi5hLnBsYWNlaG9sZGVyLCBkZWZhdWx0VmFsdWU6IFwiU2VsZWN0IGEgZ3JhbnVsYXJpdHlcIiB9LFxuICAgIHtcbiAgICAgIC4uLmEuZ3JhbnVsYXJpdGllcyxcbiAgICAgIGxhYmVsOiBcIkF2YWlsYWJsZSBncmFudWxhcml0aWVzXCIsXG4gICAgICBjYXRlZ29yeTogXCJQcmUtY29uZmlndXJlZCB2YXJpYWJsZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgLi4uYS5ncmFudWxhcml0eSxcbiAgICAgIGxhYmVsOiBcIlNlbGVjdGVkIGdyYW51bGFyaXR5XCIsXG4gICAgICBjYXRlZ29yeTogXCJQcmUtY29uZmlndXJlZCB2YXJpYWJsZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgLi4uYS50aW1lUmFuZ2UsXG4gICAgICBuYW1lOiBcInByaW1hcnlUaW1lUmFuZ2VcIixcbiAgICAgIGxhYmVsOiBcIlByaW1hcnkgZGF0ZS1yYW5nZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ29ubmVjdCB5b3VyIHByaW1hcnkgZGF0ZS1yYW5nZSB2YXJpYWJsZSB0byBlbmFibGUgYXV0b21hdGljIHNlbGVjdGlvbiBvZiB0aGUgbW9zdCBhcHByb3ByaWF0ZSBncmFudWxhcml0eVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiUHJlLWNvbmZpZ3VyZWQgdmFyaWFibGVzXCJcbiAgICB9LFxuICAgIHsgLi4uYS5jbGVhcmFibGUsIGRlZmF1bHRWYWx1ZTogITEgfVxuICBdLFxuICBldmVudHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIm9uQ2hhbmdlXCIsXG4gICAgICBsYWJlbDogXCJTZWxlY3RlZCBncmFudWxhcml0eSB1cGRhdGVkXCIsXG4gICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInZhbHVlXCIsXG4gICAgICAgICAgbGFiZWw6IFwiU2VsZWN0ZWQgZ3JhbnVsYXJpdHlcIixcbiAgICAgICAgICB0eXBlOiBcImdyYW51bGFyaXR5XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgdmFyaWFibGVzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJncmFudWxhcml0eSB2YWx1ZVwiLFxuICAgICAgdHlwZTogXCJncmFudWxhcml0eVwiLFxuICAgICAgZGVmYXVsdFZhbHVlOiBcImRheVwiLFxuICAgICAgaW5wdXRzOiBbXCJncmFudWxhcml0eVwiXSxcbiAgICAgIGV2ZW50czogW3sgbmFtZTogXCJvbkNoYW5nZVwiLCBwcm9wZXJ0eTogXCJ2YWx1ZVwiIH1dXG4gICAgfVxuICBdXG59LCBHID0gZih0LCB7XG4gIGdyYW51bGFyaXRpZXM6IFtcbiAgICBlLnNlY29uZCxcbiAgICBlLm1pbnV0ZSxcbiAgICBlLmhvdXIsXG4gICAgZS5kYXksXG4gICAgZS53ZWVrLFxuICAgIGUubW9udGgsXG4gICAgZS5xdWFydGVyLFxuICAgIGUueWVhclxuICBdLFxuICBvbkNoYW5nZTogKCkgPT4gbnVsbFxufSksIGogPSAocikgPT4gKHtcbiAgLi4uclxufSksIHggPSB7XG4gIG9uQ2hhbmdlOiAocikgPT4gKHtcbiAgICB2YWx1ZTogciA/PyBiLm5vRmlsdGVyKClcbiAgfSlcbn0sIE8gPSB7XG4gIENvbXBvbmVudDogdCxcbiAgbWV0YTogQyxcbiAgcHJldmlldzogRyxcbiAgY29uZmlnOiB7XG4gICAgcHJvcHM6IGosXG4gICAgZXZlbnRzOiB4XG4gIH1cbn07XG5leHBvcnQge1xuICBPIGFzIGcsXG4gIEUgYXMgaVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmluaXRpb24tRDJPLW1ISnYuanMubWFwXG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgbyB9IGZyb20gXCJAZW1iZWRkYWJsZS5jb20vcmVhY3RcIjtcbmltcG9ydCB7IGcgYXMgZSB9IGZyb20gXCIuL2RlZmluaXRpb24tRDJPLW1ISnYuanNcIjtcbmNvbnN0IGkgPSBlLnByZXZpZXcsIHQgPSBlLm1ldGEsIGEgPSBvKFxuICBlLkNvbXBvbmVudCxcbiAgdCxcbiAgZS5jb25maWdcbik7XG5leHBvcnQge1xuICBhIGFzIGRlZmF1bHQsXG4gIHQgYXMgbWV0YSxcbiAgaSBhcyBwcmV2aWV3XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R3JhbnVsYXJpdHlTZWxlY3RGaWVsZFByby5qcy5tYXBcbiJdLCJuYW1lcyI6WyJ0IiwieSIsInYiLCJpIiwiaCIs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
