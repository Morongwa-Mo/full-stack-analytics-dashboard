import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { K as KIe, x } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { y as y$1 } from './EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js';
import { _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { j } from './DimensionAndMeasureSingleSelectField-ZjxP2UaF-DSCBDlAZ-BqHd2OSh.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import { B } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './dimensionsAndMeasures.utils-TtQ5NCLw-3s8jw9lH-PlDc2F4F.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const i = (n2) => {
  const l = useTheme();
  _e(l);
  const { selectedDimension: a, dimensionOptions: r2, clearable: d, onChange: m2 } = n2, { title: p, description: c, tooltip: u, placeholder: f } = We(n2);
  return /* @__PURE__ */ x.jsx(y$1, { title: p, description: c, tooltip: u, children: /* @__PURE__ */ x.jsx(
    j,
    {
      selectedValue: a,
      options: r2,
      placeholder: f,
      clearable: d,
      onChange: m2
    }
  ) });
}, y = {
  name: "DimensionSingleSelectFieldPro",
  label: "Dimension Single Select Field",
  category: "Dropdowns - dimensions and measures",
  defaultWidth: 300,
  defaultHeight: 120,
  inputs: [
    Ne.dataset,
    Ne.title,
    Ne.description,
    Ne.tooltip,
    { ...Ne.placeholder, defaultValue: "Select value..." },
    Ne.dimensionOptions,
    {
      ...Ne.dimension,
      name: "selectedDimension",
      label: "Selected dimension",
      category: "Pre-configured variables",
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
      label: "Selected dimension updated",
      properties: [
        {
          name: "value",
          label: "Selected dimension",
          type: "dimension"
        }
      ]
    }
  ],
  variables: [
    {
      name: "dimension single-select value",
      type: "dimension",
      defaultValue: KIe.noFilter(),
      inputs: ["selectedDimension"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, C = definePreview(i, {
  dimensionOptions: [B.dimension, B.dimensionGroup],
  onChange: () => null
}), F = (n2) => ({
  ...n2,
  dimensionOptions: n2.dimensionOptions ?? []
}), O = {
  onChange: (n2) => ({
    value: n2 ?? KIe.noFilter()
  })
}, T = {
  Component: i,
  meta: y,
  preview: C,
  config: {
    props: F,
    events: O
  }
};
const m = T.preview, n = T.meta, r = defineComponent(
  T.Component,
  n,
  T.config
);

export { r as default, n as meta, m as preview };
//# sourceMappingURL=DimensionSingleSelectFieldPro-DDB5SQd7-DUVt-AK8.js.map
//# sourceMappingURL=DimensionSingleSelectFieldPro-DDB5SQd7-DUVt-AK8.js.map
