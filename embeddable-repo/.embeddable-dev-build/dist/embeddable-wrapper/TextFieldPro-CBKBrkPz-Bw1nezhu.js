import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { K as KIe, a as bIe, x, O as Om } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { y } from './EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js';
import { _ as _e, W as We } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './index-BS0D-ICk.js';
import './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const a = (e) => {
  const i2 = useTheme();
  _e(i2);
  const { title: u, description: p, tooltip: d, placeholder: c = "" } = We(e), { value: m = "", onChange: n } = e, [o, f] = reactExports.useState(m), r2 = bIe((v) => {
    n == null || n(v);
  });
  return reactExports.useEffect(() => {
    r2(o);
  }, [o, r2]), /* @__PURE__ */ x.jsx(y, { title: u, description: p, tooltip: d, children: /* @__PURE__ */ x.jsx(
    Om,
    {
      value: o,
      placeholder: c,
      onChange: f,
      clearable: true
    }
  ) });
}, V = {
  name: "TextFieldPro",
  label: "Text Field",
  category: "Inputs",
  defaultWidth: 300,
  defaultHeight: 120,
  inputs: [
    Ne.title,
    Ne.description,
    Ne.tooltip,
    Ne.placeholder,
    {
      ...Ne.string,
      name: "value",
      label: "Value",
      category: "Pre-configured Variables"
    }
  ],
  events: [
    {
      name: "onChange",
      label: "Entered value updated",
      properties: [
        {
          name: "value",
          label: "Entered value",
          type: "string"
        }
      ]
    }
  ],
  variables: [
    {
      name: "text value",
      type: "string",
      defaultValue: KIe.noFilter(),
      inputs: ["value"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, j = definePreview(a, {
  placeholder: "Enter text...",
  onChange: () => null
}), T = (e) => ({
  ...e
}), S = {
  onChange: (e) => ({
    value: e === "" || e == null ? KIe.noFilter() : e
  })
}, M = {
  Component: a,
  meta: V,
  preview: j,
  config: {
    props: T,
    events: S
  }
};
const r = M.preview, t = M.meta, i = defineComponent(M.Component, t, M.config);

export { i as default, t as meta, r as preview };
//# sourceMappingURL=TextFieldPro-CBKBrkPz-Bw1nezhu.js.map
//# sourceMappingURL=TextFieldPro-CBKBrkPz-Bw1nezhu.js.map
