import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { K as KIe, x, p as pRe, q as qIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { j, B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { y } from './EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js';
import { W as We, y as y$1 } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const f = 200, d = (e) => {
  var m, c;
  const a = useTheme(), o = j(a), { tooltip: s, title: b, description: y$2, placeholder: D } = We(e), { dimension: i, optionalSecondDimension: u, results: l, selectedValues: M, setSearchValue: V, onChange: r2 } = e, F = ((m = l.data) == null ? void 0 : m.map((n2) => ({
    value: u ? n2[u.name] : n2[i.name],
    label: o.data(i, n2[i.name])
  }))) ?? [], O = !l.isLoading && (((c = l.data) == null ? void 0 : c.length) ?? 0) === 0;
  return /* @__PURE__ */ x.jsx(y, { title: b, description: y$2, tooltip: s, children: /* @__PURE__ */ x.jsx(
    pRe,
    {
      isClearable: true,
      isSearchable: true,
      isLoading: l.isLoading,
      values: M ?? [],
      options: F,
      placeholder: D,
      noOptionsMessage: O ? y$1.t("common.noOptionsFound") : void 0,
      onChange: (n2) => r2 == null ? void 0 : r2(n2),
      onSearch: V,
      avoidCollisions: false
    }
  ) });
}, A = {
  name: "MultiSelectFieldPro",
  label: "Multi Select Field",
  category: "Dropdowns - values",
  defaultWidth: 300,
  defaultHeight: 120,
  inputs: [
    Ne.dataset,
    { ...Ne.dimension, label: "Dimension (to load Dropdown values)" },
    Ne.title,
    Ne.description,
    Ne.tooltip,
    { ...Ne.placeholder, defaultValue: "Select values..." },
    {
      ...Ne.number,
      name: "maxOptions",
      label: "Maximum options",
      category: "Component Settings",
      defaultValue: f
    },
    {
      ...Ne.string,
      name: "selectedValues",
      array: true,
      label: "Selected values",
      category: "Pre-configured Variables"
    },
    {
      ...Ne.dimension,
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
      label: "Selected values updated",
      properties: [
        {
          name: "value",
          label: "Selected values",
          type: "string",
          array: true
        }
      ]
    }
  ],
  variables: [
    {
      name: "multi-select values",
      type: "string",
      array: true,
      defaultValue: KIe.noFilter(),
      inputs: ["selectedValues"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, E = definePreview(d, {
  dimension: B.dimension,
  results: B.results1Measure1Dimension,
  onChange: () => null
}), h = (e, a) => {
  const o = e.dimension.nativeType === "string" ? "contains" : "equals";
  return {
    limit: e.maxOptions,
    from: e.dataset,
    select: [e.dimension, e.optionalSecondDimension].filter(Boolean),
    filters: a != null && a.searchValue ? [{ operator: o, property: e.dimension, value: a.searchValue }] : void 0
  };
}, S = (e, a) => qIe(h(e, a)), I = (e, [a, o]) => ({
  ...e,
  setSearchValue: (s) => o({ searchValue: s }),
  results: S(e, a)
}), L = {
  onChange: (e) => ({
    value: e.length ? e : KIe.noFilter()
  })
}, X = {
  Component: d,
  meta: A,
  preview: E,
  config: {
    props: I,
    events: L
  }
};
const n = X.preview, t = X.meta, r = defineComponent(X.Component, t, X.config);

export { r as default, t as meta, n as preview };
//# sourceMappingURL=MultiSelectFieldPro-Dq41zDgy-ztwH1MHs.js.map
//# sourceMappingURL=MultiSelectFieldPro-Dq41zDgy-ztwH1MHs.js.map
