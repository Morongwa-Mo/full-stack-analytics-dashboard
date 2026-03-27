import { b as defineEditor } from './index.esm-nuP141l8-DANrZun5.js';
import { r } from './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import { x, a5 as Od, a6 as zc, K as KIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import './index-BS0D-ICk.js';

const p = "_colorInputContainer_1o1qe_1", I = "_colorInput_1o1qe_1", s$1 = {
  colorInputContainer: p,
  colorInput: I
}, _ = ({ value: o, onChange: n }) => {
  const [e, r2] = reactExports.useState(o);
  return reactExports.useEffect(() => {
    r2(o);
  }, [o, r2]), /* @__PURE__ */ x.jsxs("div", { className: s$1.colorInputContainer, children: [
    /* @__PURE__ */ x.jsx(
      "input",
      {
        type: "color",
        className: s$1.colorInput,
        value: e ?? "#FFFFFF",
        onChange: (c) => n(c.target.value)
      }
    ),
    e && /* @__PURE__ */ x.jsx(Od, { icon: zc, onClick: () => n(void 0) })
  ] });
};
const l = {
  name: "ColorEditor",
  label: "Color editor",
  type: r
}, s = defineEditor(_, l, {
  inputs: (o, r2) => ({
    value: o,
    onChange: (t) => r2(KIe.of(t))
  })
});

export { s as default, l as meta };
//# sourceMappingURL=ColorEditor-CGZFlCKP-hTDamGzt.js.map
//# sourceMappingURL=ColorEditor-CGZFlCKP-hTDamGzt.js.map
