import { j } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';

const i = ({
  dimensionsAndMeasures: r,
  searchValue: o,
  theme: a
}) => {
  const t = j(a);
  return r.filter((e) => t.dimensionOrMeasureTitle(e).toLowerCase().includes(o.toLowerCase())).map((e) => ({
    value: e.name,
    label: t.dimensionOrMeasureTitle(e)
  }));
};

export { i };
//# sourceMappingURL=dimensionsAndMeasures.utils-TtQ5NCLw-3s8jw9lH-PlDc2F4F.js.map
//# sourceMappingURL=dimensionsAndMeasures.utils-TtQ5NCLw-3s8jw9lH-PlDc2F4F.js.map
