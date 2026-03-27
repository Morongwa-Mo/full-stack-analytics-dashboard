import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { K as KIe, x, p as pRe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import { B as B$1 } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { _ as _e, W as We, y as y$1 } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { y } from './EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js';
import { i } from './dimensionsAndMeasures.utils-TtQ5NCLw-3s8jw9lH-PlDc2F4F.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';
import './index-BS0D-ICk.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';

const r$1 = (e) => {
  const l = useTheme();
  _e(l);
  const {
    selectedDimensionsAndMeasures: i$1 = [],
    dimensionAndMeasureOptions: t2 = [],
    clearable: a,
    onChange: o
  } = e, { title: p, description: f, tooltip: M, placeholder: g } = We(e), [h, S] = reactExports.useState(""), [A, v] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (a || i$1.length > 0) return;
    const s = t2[0];
    s && o([s]);
  }, [a, i$1.length, t2, o]);
  const b = i$1.map((s) => s.name), y$2 = i({
    dimensionsAndMeasures: t2,
    searchValue: h,
    theme: l
  }), C = (s) => {
    const D = new Set(s);
    o(t2.filter((O) => D.has(O.name)));
  };
  return /* @__PURE__ */ x.jsx(y, { title: p, description: f, tooltip: M, children: /* @__PURE__ */ x.jsx(
    pRe,
    {
      isClearable: a,
      disableApplyButton: !a && A.length === 0,
      isSearchable: true,
      values: b,
      options: y$2,
      placeholder: g,
      noOptionsMessage: y$1.t("common.noOptionsFound"),
      onChange: C,
      onPendingChange: v,
      onSearch: S,
      avoidCollisions: false
    }
  ) });
}, T = {
  name: "DimensionMeasureMultiSelectFieldPro",
  label: "Dimension and Measure Multi Select Field",
  category: "Dropdowns - dimensions and measures",
  defaultWidth: 300,
  defaultHeight: 120,
  inputs: [
    Ne.dataset,
    Ne.dimensionAndMeasureOptions,
    Ne.title,
    Ne.description,
    Ne.tooltip,
    { ...Ne.placeholder, defaultValue: "Select values..." },
    {
      ...Ne.dimensionsAndMeasures,
      name: "selectedDimensionsAndMeasures",
      label: "Selected dimensions and measures",
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
      label: "Selected dimensions and measures updated",
      properties: [
        {
          name: "value",
          label: "Selected values",
          type: "dimensionOrMeasure",
          array: true
        }
      ]
    }
  ],
  variables: [
    {
      name: "dimension-measure multi-select values",
      type: "dimensionOrMeasure",
      array: true,
      defaultValue: KIe.noFilter(),
      inputs: ["selectedDimensionsAndMeasures"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, q = definePreview(r$1, {
  dimensionAndMeasureOptions: [B$1.dimension, B$1.measure],
  onChange: () => null
}), z = (e) => ({
  ...e,
  dimensionAndMeasureOptions: e.dimensionAndMeasureOptions ?? [],
  selectedDimensionsAndMeasures: e.selectedDimensionsAndMeasures ?? []
}), B = {
  onChange: (e) => ({
    value: Array.isArray(e) && e.length ? e : KIe.noFilter()
  })
}, Q = {
  Component: r$1,
  meta: T,
  preview: q,
  config: {
    props: z,
    events: B
  }
};
const m = Q.preview, t = Q.meta, r = defineComponent(
  Q.Component,
  t,
  Q.config
);

export { r as default, t as meta, m as preview };
//# sourceMappingURL=DimensionMeasureMultiSelectFieldPro-BxmXHzXp-CrwiQrkN.js.map
//# sourceMappingURL=DimensionMeasureMultiSelectFieldPro-BxmXHzXp-CrwiQrkN.js.map
