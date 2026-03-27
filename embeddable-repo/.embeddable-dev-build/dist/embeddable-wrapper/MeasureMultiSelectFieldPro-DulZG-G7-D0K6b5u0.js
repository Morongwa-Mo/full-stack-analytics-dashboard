import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { K as KIe, x, p as pRe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { _ as _e, W as We, y as y$1 } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { y } from './EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js';
import { i as i$1 } from './dimensionsAndMeasures.utils-TtQ5NCLw-3s8jw9lH-PlDc2F4F.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import { B as B$1 } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import './index-BS0D-ICk.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const l = (e) => {
  const i2 = useTheme();
  _e(i2);
  const { selectedMeasures: n2 = [], measureOptions: s = [], clearable: r, onChange: o } = e, { title: p, description: f, tooltip: g, placeholder: h } = We(e), [M, S] = reactExports.useState(""), [v, b] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (r || n2.length > 0) return;
    const a = s[0];
    a && o([a]);
  }, [r, n2.length, s, o]);
  const y$2 = n2.map((a) => a.name), C = i$1({
    dimensionsAndMeasures: s,
    searchValue: M,
    theme: i2
  }), V = (a) => {
    const O = new Set(a);
    o(s.filter((P) => O.has(P.name)));
  };
  return /* @__PURE__ */ x.jsx(y, { title: p, description: f, tooltip: g, children: /* @__PURE__ */ x.jsx(
    pRe,
    {
      isClearable: r,
      disableApplyButton: !r && v.length === 0,
      isSearchable: true,
      values: y$2,
      options: C,
      placeholder: h,
      noOptionsMessage: y$1.t("common.noOptionsFound"),
      onChange: V,
      onPendingChange: b,
      onSearch: S,
      avoidCollisions: false
    }
  ) });
}, T = {
  name: "MeasureMultiSelectFieldPro",
  label: "Measure Multi Select Field",
  category: "Dropdowns - dimensions and measures",
  defaultWidth: 300,
  defaultHeight: 120,
  inputs: [
    Ne.dataset,
    Ne.measureOptions,
    Ne.title,
    Ne.description,
    Ne.tooltip,
    { ...Ne.placeholder, defaultValue: "Select values..." },
    {
      ...Ne.measure,
      array: true,
      name: "selectedMeasures",
      label: "Selected measures",
      category: "Pre-configured Variables",
      required: false,
      config: {
        dataset: "dataset"
      }
    },
    { ...Ne.clearable, defaultValue: false }
  ],
  events: [
    {
      name: "onChange",
      label: "Selected measures updated",
      properties: [
        {
          name: "value",
          label: "Selected values",
          type: "measure",
          array: true
        }
      ]
    }
  ],
  variables: [
    {
      name: "measure multi-select values",
      type: "measure",
      array: true,
      defaultValue: KIe.noFilter(),
      inputs: ["selectedMeasures"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, q = definePreview(l, {
  measureOptions: [B$1.measure, B$1.measureVariant],
  onChange: () => null
}), z = (e) => ({
  ...e,
  measureOptions: e.measureOptions ?? [],
  selectedMeasures: e.selectedMeasures ?? []
}), B = {
  onChange: (e) => ({
    value: Array.isArray(e) && e.length ? e : KIe.noFilter()
  })
}, Q = {
  Component: l,
  meta: T,
  preview: q,
  config: {
    props: z,
    events: B
  }
};
const i = Q.preview, t = Q.meta, n = defineComponent(
  Q.Component,
  t,
  Q.config
);

export { n as default, t as meta, i as preview };
//# sourceMappingURL=MeasureMultiSelectFieldPro-DulZG-G7-D0K6b5u0.js.map
//# sourceMappingURL=MeasureMultiSelectFieldPro-DulZG-G7-D0K6b5u0.js.map
