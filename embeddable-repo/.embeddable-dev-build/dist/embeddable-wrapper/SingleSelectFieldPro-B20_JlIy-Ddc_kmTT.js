import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { K as KIe, x, b as bRe, q as qIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { j, B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { y } from './EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js';
import { W as We, y as y$1 } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const v = 200, c = (e) => {
  var u, p;
  const o = useTheme(), n = j(o), { title: s, description: b, dimension: i, placeholder: D, tooltip: y$2 } = We(e), { optionalSecondDimension: m2, results: l, selectedValue: O, setSearchValue: V, onChange: r2 } = e, x$1 = ((u = l.data) == null ? void 0 : u.map((t2) => ({
    value: m2 ? t2[m2.name] : t2[i.name],
    label: n.data(i, t2[i.name])
  }))) ?? [], F = !l.isLoading && (((p = l.data) == null ? void 0 : p.length) ?? 0) === 0;
  return /* @__PURE__ */ x.jsx(y, { title: s, description: b, tooltip: y$2, children: /* @__PURE__ */ x.jsx(
    bRe,
    {
      clearable: true,
      searchable: true,
      isLoading: l.isLoading,
      value: O,
      options: x$1,
      placeholder: D,
      noOptionsMessage: F ? y$1.t("common.noOptionsFound") : void 0,
      onChange: (t2) => r2 == null ? void 0 : r2(t2),
      onSearch: V,
      avoidCollisions: false
    }
  ) });
}, A = {
  name: "SingleSelectFieldPro",
  label: "Single Select Field",
  category: "Dropdowns - values",
  defaultWidth: 300,
  defaultHeight: 120,
  inputs: [
    Ne.dataset,
    { ...Ne.dimension, label: "Dimension (to load Dropdown values)" },
    Ne.title,
    Ne.description,
    Ne.tooltip,
    { ...Ne.placeholder, defaultValue: "Select value..." },
    {
      ...Ne.number,
      name: "maxOptions",
      label: "Maximum options",
      category: "Component Settings",
      defaultValue: v
    },
    {
      ...Ne.string,
      name: "selectedValue",
      label: "Selected value",
      category: "Pre-configured Variables"
    },
    {
      ...Ne.dimension,
      config: {
        dataset: "dataset"
      },
      required: false,
      name: "optionalSecondDimension",
      label: "Optional secondary dimension",
      category: "Data Mapping for Interactions",
      description: "Send a different dimension to embeddable when the user clicks. Must be unique."
    }
  ],
  events: [
    {
      name: "onChange",
      label: "Selected value updated",
      properties: [
        {
          name: "value",
          label: "Selected value",
          type: "string"
        }
      ]
    }
  ],
  variables: [
    {
      name: "single-select value",
      type: "string",
      defaultValue: KIe.noFilter(),
      inputs: ["selectedValue"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, E = definePreview(c, {
  dimension: B.dimension,
  results: B.results1Measure1Dimension,
  onChange: () => null
}), S = (e, o) => {
  const n = e.dimension.nativeType === "string" ? "contains" : "equals";
  return {
    limit: e.maxOptions,
    from: e.dataset,
    select: [e.dimension, e.optionalSecondDimension].filter(Boolean),
    filters: o != null && o.searchValue ? [{ operator: n, property: e.dimension, value: o.searchValue }] : void 0
  };
}, h = (e, o) => qIe(S(e, o)), I = (e, [o, n]) => ({
  ...e,
  maxOptions: e.maxOptions,
  setSearchValue: (s) => n({ searchValue: s }),
  results: h(e, o)
}), L = {
  onChange: (e) => e === "" ? { value: KIe.noFilter() } : {
    value: e ?? KIe.noFilter()
  }
}, X = {
  Component: c,
  meta: A,
  preview: E,
  config: {
    props: I,
    events: L
  }
};
const m = X.preview, t = X.meta, r = defineComponent(X.Component, t, X.config);

export { r as default, t as meta, m as preview };
//# sourceMappingURL=SingleSelectFieldPro-B20_JlIy-Ddc_kmTT.js.map
//# sourceMappingURL=SingleSelectFieldPro-B20_JlIy-Ddc_kmTT.js.map
