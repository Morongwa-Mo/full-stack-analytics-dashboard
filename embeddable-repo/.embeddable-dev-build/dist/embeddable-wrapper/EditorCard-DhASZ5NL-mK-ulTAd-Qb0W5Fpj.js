import { x, w as wRe, z as zIe, l as yRe, m as IIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { _ as _e, y as y$1 } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { o } from './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';

const f = "_editorCard_1q85m_1", h = {
  editorCard: f
}, y = ({
  title: e,
  description: s,
  tooltip: a,
  children: o$1,
  errorMessage: t,
  ...i
}) => {
  const n = useTheme();
  _e(n);
  const d = () => t ? /* @__PURE__ */ x.jsx(
    wRe,
    {
      variant: "error",
      icon: o,
      title: y$1.t("editors.errorTitle"),
      message: t
    }
  ) : o$1;
  return /* @__PURE__ */ x.jsxs(zIe, { className: h.editorCard, ...i, children: [
    /* @__PURE__ */ x.jsx(yRe, { title: e, subtitle: s, tooltip: a }),
    /* @__PURE__ */ x.jsx(IIe, { children: d() })
  ] });
};

export { y };
//# sourceMappingURL=EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js.map
//# sourceMappingURL=EditorCard-DhASZ5NL-mK-ulTAd-Qb0W5Fpj.js.map
