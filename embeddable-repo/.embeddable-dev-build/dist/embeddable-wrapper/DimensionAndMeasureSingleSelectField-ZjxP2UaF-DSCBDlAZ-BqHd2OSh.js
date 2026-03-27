import { x, b as bRe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { u as useTheme } from './index.esm-nuP141l8-DANrZun5.js';
import { r as reactExports } from './embeddable-component-O_vB8keJ.js';
import { i } from './dimensionsAndMeasures.utils-TtQ5NCLw-3s8jw9lH-PlDc2F4F.js';

const j = (i$1) => {
  const r = useTheme(), [c, l] = reactExports.useState(""), { selectedValue: n, options: e, clearable: t, placeholder: m, onChange: o } = i$1, u = (a) => {
    const s = e.find((f) => f.name === a);
    o(s);
  };
  return reactExports.useEffect(() => {
    if (!(!t && !n)) return;
    const s = e == null ? void 0 : e[0];
    s && o(s);
  }, [t, n, e, o]), /* @__PURE__ */ x.jsx(
    bRe,
    {
      searchable: true,
      clearable: t,
      placeholder: m,
      value: n == null ? void 0 : n.name,
      onChange: u,
      onSearch: l,
      options: i({
        dimensionsAndMeasures: e,
        searchValue: c,
        theme: r
      }),
      avoidCollisions: false
    }
  );
};

export { j };
//# sourceMappingURL=DimensionAndMeasureSingleSelectField-ZjxP2UaF-DSCBDlAZ-BqHd2OSh.js.map
//# sourceMappingURL=DimensionAndMeasureSingleSelectField-ZjxP2UaF-DSCBDlAZ-BqHd2OSh.js.map
