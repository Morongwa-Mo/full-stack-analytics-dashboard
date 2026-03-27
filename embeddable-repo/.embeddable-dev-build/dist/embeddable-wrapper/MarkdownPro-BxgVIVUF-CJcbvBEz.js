import { d as defineComponent, a as definePreview, u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { x, H as HIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { J as Je, _ as _e } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { N as Ne } from './component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js';
import './index-BS0D-ICk.js';
import './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const f = "_container_im29b_1", w = {
  container: f
}, k = (n) => n.replaceAll(/\{\{([^{}]+)\}\}/g, (o, e) => Je(e)), M = (n) => n == null ? void 0 : n.replaceAll(String.raw`\n`, `
`), r = (n) => {
  const { markdown: o } = n, e = useTheme();
  _e(e);
  const a2 = reactExports.useMemo(() => {
    const t2 = M(o);
    return t2 && k(t2);
  }, [o, e]);
  return /* @__PURE__ */ x.jsx("div", { className: w.container, children: /* @__PURE__ */ x.jsx(HIe, { content: a2 }) });
}, g = {
  name: "MarkdownPro",
  label: "Markdown",
  category: "Content",
  defaultWidth: 600,
  defaultHeight: 300,
  inputs: [Ne.markdown]
}, v = definePreview(r, {
  markdown: `# Markdown editor

Write **bold**, *italic*, and \`inline code\`.

- Bullet lists
- [Links](https://example.com)`
}), _ = (n) => ({ ...n }), y = {
  Component: r,
  meta: g,
  preview: v,
  config: {
    props: _
  }
};
const t = y.preview, m = y.meta, a = defineComponent(y.Component, m, y.config);

export { a as default, m as meta, t as preview };
//# sourceMappingURL=MarkdownPro-BxgVIVUF-CJcbvBEz.js.map
//# sourceMappingURL=MarkdownPro-BxgVIVUF-CJcbvBEz.js.map
