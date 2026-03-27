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

const t$1 = (a) => {
  const n = useTheme();
  _e(n);
  const { selectedMeasure: o, measureOptions: i2, clearable: u, onChange: m } = a, { title: d, description: p, tooltip: c, placeholder: f } = We(a);
  return /* @__PURE__ */ x.jsx(y$1, { title: d, description: p, tooltip: c, children: /* @__PURE__ */ x.jsx(
    j,
    {
      selectedValue: o,
      options: i2,
      placeholder: f,
      clearable: u,
      onChange: m
    }
  ) });
}, y = {
  name: "MeasureSingleSelectFieldPro",
  label: "Measure Single Select Field",
  category: "Dropdowns - dimensions and measures",
  defaultWidth: 300,
  defaultHeight: 120,
  inputs: [
    Ne.dataset,
    Ne.title,
    Ne.description,
    Ne.tooltip,
    { ...Ne.placeholder, defaultValue: "Select value..." },
    Ne.measureOptions,
    {
      ...Ne.measure,
      name: "selectedMeasure",
      label: "Selected measure",
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
      label: "Selected measure updated",
      properties: [
        {
          name: "value",
          label: "Selected measure",
          type: "measure"
        }
      ]
    }
  ],
  variables: [
    {
      name: "measure single-select value",
      type: "measure",
      defaultValue: KIe.noFilter(),
      inputs: ["selectedMeasure"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, C = definePreview(t$1, {
  measureOptions: [B.measure, B.measureVariant],
  onChange: () => null
}), F = (a) => ({
  ...a,
  measureOptions: a.measureOptions ?? []
}), O = {
  onChange: (a) => ({
    value: a ?? KIe.noFilter()
  })
}, T = {
  Component: t$1,
  meta: y,
  preview: C,
  config: {
    props: F,
    events: O
  }
};
const r = T.preview, t = T.meta, i = defineComponent(
  T.Component,
  t,
  T.config
);

export { i as default, t as meta, r as preview };
//# sourceMappingURL=MeasureSingleSelectFieldPro-DaAu7j2D-DmlpCeat.js.map
//# sourceMappingURL=MeasureSingleSelectFieldPro-DaAu7j2D-DmlpCeat.js.map
