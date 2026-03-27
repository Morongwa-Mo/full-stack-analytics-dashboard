import { d as defineComponent, a as definePreview } from './index.esm-nuP141l8-DANrZun5.js';
import { k as ke, x, c as kRe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const c = "_horizontalDividerContainer_y6kms_1", d = {
  horizontalDividerContainer: c
}, o = (e) => {
  const { color: r2, thickness: n2 } = e;
  return /* @__PURE__ */ x.jsx("div", { className: d.horizontalDividerContainer, children: /* @__PURE__ */ x.jsx(kRe, { color: r2, thickness: n2 }) });
}, m$1 = {
  name: "HorizontalDividerPro",
  label: "Horizontal Divider",
  category: "Layout",
  defaultWidth: 450,
  defaultHeight: 120,
  inputs: [
    {
      ...Ne.number,
      name: "thickness",
      label: "Thickness",
      category: "Component Settings",
      description: "Thickness of the divider in pixels"
    },
    { ...Ne.color, defaultValue: ke("--em-divider-color", "#e4e4ea") }
  ]
}, p = definePreview(o, {}), v = (e) => ({
  ...e,
  color: e.color
}), D = {
  Component: o,
  meta: m$1,
  preview: p,
  config: {
    props: v
  }
};
const n = D.preview, r = D.meta, m = defineComponent(D.Component, r, D.config);

export { m as default, r as meta, n as preview };
//# sourceMappingURL=HorizontalDividerPro-C6FTFSCT-DZnPBBpS.js.map
//# sourceMappingURL=HorizontalDividerPro-C6FTFSCT-DZnPBBpS.js.map
