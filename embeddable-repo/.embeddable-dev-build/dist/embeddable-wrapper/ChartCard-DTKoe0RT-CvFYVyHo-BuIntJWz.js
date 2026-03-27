import { I as Ie, x, Y as Ac, N as Nm, j as jm, U as Ur, $ as Ki, a0 as vRe, w as wRe, z as zIe, l as yRe, P as Pe, m as IIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { j, r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { _ as _e, y as y$1 } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';
import { o } from './IconAlertCircle-b2Z57ZbD-sufowXD2-GdhBCYPK.js';

/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A = [["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], E = Ie("outline", "dots-vertical", "DotsVertical", A), O = "_chartCard_srzbl_1", P = "_chartCardHeader_srzbl_6", U = "_hidden_srzbl_12", V = "_chartCardRightContent_srzbl_16", l = {
  chartCard: O,
  chartCardHeader: P,
  hidden: U,
  chartCardRightContent: V
}, $ = "_loading_1hx4f_7", q = {
  loading: $
}, y = () => /* @__PURE__ */ x.jsx(Ac, { className: q.loading }), B = "_list_mwshn_1", K = {
  list: B
};
function W({ src: r, className: n, ...c }) {
  const a = decodeURIComponent(r.replace(/^data:image\/svg\+xml,/, ""));
  return /* @__PURE__ */ x.jsx("div", { className: n, ...c, dangerouslySetInnerHTML: { __html: a } });
}
const X = (r) => {
  const n = useTheme();
  _e(n);
  const [c, a] = j.useState(false), e = n.defaults.chartMenuOptions ?? [];
  if (e.length === 0)
    return null;
  const i = (s) => {
    setTimeout(() => {
      Promise.resolve(s()).finally(() => a(false));
    }, 100);
  }, h = (s) => {
    if (a(true), r.onCustomDownload) {
      r.onCustomDownload((o2) => i(() => s(o2)));
      return;
    }
    i(() => s({ ...r, theme: n }));
  };
  return /* @__PURE__ */ x.jsx(
    Nm,
    {
      side: "bottom",
      align: "end",
      triggerComponent: c ? /* @__PURE__ */ x.jsx(y, {}) : /* @__PURE__ */ x.jsx(Ki, { icon: E }),
      children: /* @__PURE__ */ x.jsx(jm, { className: K.list, autoFocus: true, children: e.map((s, o2) => {
        const m = y$1.t(s.labelKey);
        return /* @__PURE__ */ x.jsx(
          Ur,
          {
            label: m,
            onClick: () => h(s.onClick),
            startIcon: s.iconSrc ? /* @__PURE__ */ x.jsx(W, { src: s.iconSrc }) : void 0
          },
          o2
        );
      }) })
    }
  );
}, G = j.forwardRef(
  ({
    tooltip: r,
    title: n,
    description: c,
    children: a,
    data: e,
    errorMessage: i,
    dimensionsAndMeasures: h = [],
    hideMenu: s = false,
    onCustomDownload: o$1
  }, m) => {
    var x$1;
    const R = useTheme();
    _e(R);
    const u = reactExports.useRef(null), g = !!(e != null && e.data && ((x$1 = e.data) == null ? void 0 : x$1.length) > 0), C = !e || (e == null ? void 0 : e.isLoading), I = () => C && !g ? /* @__PURE__ */ x.jsx(vRe, {}) : i ? /* @__PURE__ */ x.jsx(
      wRe,
      {
        variant: "error",
        icon: o,
        title: y$1.t("charts.errorTitle"),
        message: i
      }
    ) : g ? a : /* @__PURE__ */ x.jsx(
      wRe,
      {
        title: y$1.t("charts.emptyTitle"),
        message: y$1.t("charts.emptyMessage")
      }
    );
    return /* @__PURE__ */ x.jsxs(zIe, { className: l.chartCard, children: [
      s ? null : /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        /* @__PURE__ */ x.jsx("div", { className: l.chartCardHeader, children: /* @__PURE__ */ x.jsx(yRe, { title: n, subtitle: c, tooltip: r }) }),
        /* @__PURE__ */ x.jsxs("div", { className: l.chartCardRightContent, children: [
          /* @__PURE__ */ x.jsx("div", { className: Pe(!C && l.hidden), children: /* @__PURE__ */ x.jsx(y, {}) }),
          /* @__PURE__ */ x.jsx("div", { className: Pe(C && l.hidden), children: /* @__PURE__ */ x.jsx(
            X,
            {
              title: n,
              containerRef: u,
              data: e == null ? void 0 : e.data,
              dimensionsAndMeasures: h,
              onCustomDownload: o$1
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ x.jsx(IIe, { ref: o$1 ? m : u, children: I() })
    ] });
  }
);
G.displayName = "ChartCard";

export { G };
//# sourceMappingURL=ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js.map

//# sourceMappingURL=ChartCard-DTKoe0RT-CvFYVyHo-BuIntJWz.js.map