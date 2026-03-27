import { r as r$1 } from './Color.type.emb-BWbn5KAT-BPeI4kfg-C8XciuW5.js';
import { R as QIe, S as UIe } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { p as p$1 } from './Markdown.type.emb-DQYuUHBo-CXhDh8SX-CkglBcrH.js';

const h = {
  MARKDOWN: "Markdown",
  JSON: "Json"
}, g = QIe("DisplayFormat", {
  label: "Display format",
  optionLabel: (t) => t
});
UIe(g, h.MARKDOWN);
UIe(g, h.JSON);
const e = {
  second: "second",
  minute: "minute",
  hour: "hour",
  day: "day",
  week: "week",
  month: "month",
  quarter: "quarter",
  year: "year"
}, ke = [
  { value: e.second, label: "defaults.granularityOptions.second|Second" },
  { value: e.minute, label: "defaults.granularityOptions.minute|Minute" },
  { value: e.hour, label: "defaults.granularityOptions.hour|Hour" },
  { value: e.day, label: "defaults.granularityOptions.day|Day" },
  { value: e.week, label: "defaults.granularityOptions.week|Week" },
  { value: e.month, label: "defaults.granularityOptions.month|Month" },
  { value: e.quarter, label: "defaults.granularityOptions.quarter|Quarter" },
  { value: e.year, label: "defaults.granularityOptions.year|Year" }
], l = QIe("align", {
  label: "Alignment",
  optionLabel: (t) => t
});
UIe(l, "left");
UIe(l, "center");
UIe(l, "right");
const i = QIe("tableCellStyle", {
  label: "Table cell style",
  optionLabel: (t) => t
});
UIe(i, "Bold");
UIe(i, "Italic");
UIe(i, "Positive vs Negative");
const R = {
  name: "boolean",
  type: "boolean",
  label: "Boolean"
}, V = {
  name: "width",
  type: "number",
  label: "Width",
  description: "You can input a number in pixels e.g. 400"
}, P = { name: "align", type: l, label: "Align" }, r = { name: "prefix", type: "string", label: "Prefix" }, m = { name: "suffix", type: "string", label: "Suffix" }, u = {
  name: "displayName",
  type: "string",
  label: "Display name"
}, p = {
  name: "maxCharacters",
  type: "number",
  label: "Maximum characters",
  description: void 0,
  supportedTypes: ["string"]
}, y = {
  name: "decimalPlaces",
  type: "number",
  label: "Decimal places",
  supportedTypes: ["number"]
}, c = {
  name: "currency",
  type: "string",
  label: "Currency",
  description: "e.g. EUR",
  supportedTypes: ["number"]
}, d = {
  name: "abbreviateLargeNumber",
  type: "boolean",
  label: "Abbreviate large number",
  supportedTypes: ["number"]
}, b = {
  name: "dateBounds",
  type: "timeRange",
  label: "Date bounds",
  description: "Set the date range for the axis",
  supportedTypes: ["time"]
}, x = {
  name: "granularity",
  type: "granularity",
  label: "Granularity",
  supportedTypes: ["time"],
  defaultValue: e.day
}, k = {
  type: r$1,
  name: "color",
  label: "Color"
}, G = {
  type: g,
  name: "displayFormat",
  label: "Display format"
}, N = {
  type: i,
  name: "tableCellStyle",
  label: "Table cell style"
}, I = {
  name: "showValueAsPercentage",
  type: "boolean",
  label: "Show values as percentage",
  defaultValue: false
}, S = {
  type: "boolean",
  name: "showGranularityDropdown",
  label: "Show granularity dropdown",
  description: "Display a granularity selector inside the chart. The Granularity input above is used only as the default when this option is enabled.",
  supportedTypes: ["time"],
  defaultValue: false
}, n = [
  r,
  m,
  u,
  p,
  y,
  c,
  d
], F = [
  r,
  m,
  u,
  p,
  y,
  c,
  d,
  x,
  b
], B = [
  r,
  m,
  u,
  p,
  y,
  c,
  d,
  x,
  S,
  // Not required for now - defaults to day, week, month, quarter, year
  // granularities,
  {
    ...b,
    description: "Set a date range or connect your primary date-range variable to define the x-axis min and max. If “Show granularity dropdown” is enabled, this also enables auto-selection of the most appropriate granularity"
  }
], Ge = {
  boolean: R,
  width: V,
  align: P,
  color: k,
  displayFormat: G,
  tableCellStyle: N,
  showValueAsPercentage: I
}, s = QIe("comparisonPeriod", {
  label: "Comparison period",
  optionLabel: (t) => t
});
UIe(s, "Previous period");
UIe(s, "Previous week");
UIe(s, "Previous month");
UIe(s, "Previous quarter");
UIe(s, "Previous year");
const Y = {
  name: "boolean",
  type: "boolean",
  label: "Boolean"
}, $ = {
  name: "timeRange",
  type: "timeRange",
  label: "Time range"
}, W = {
  name: "number",
  type: "number",
  label: "Number"
}, A = {
  name: "string",
  type: "string",
  label: "String"
}, X = {
  name: "title",
  type: "string",
  label: "Title",
  category: "Component Header"
}, H = {
  name: "description",
  type: "string",
  label: "Description",
  category: "Component Header"
}, z = {
  name: "tooltip",
  type: "string",
  label: "Tooltip",
  category: "Component Header"
}, J = {
  name: "dataset",
  type: "dataset",
  label: "Dataset",
  required: true,
  category: "Component Data"
}, K = {
  name: "maxLegendItems",
  type: "number",
  label: "Max legend items",
  defaultValue: 10,
  category: "Component Data"
}, C = {
  name: "dimension",
  type: "dimension",
  label: "Dimension",
  config: {
    dataset: "dataset"
  },
  required: true,
  category: "Component Data",
  inputs: n
}, j = {
  ...C,
  name: "groupBy",
  label: "Group by"
}, E = {
  name: "granularity",
  type: "granularity",
  label: "Granularity"
}, Q = {
  name: "granularities",
  type: "granularity",
  label: "Granularities",
  array: true,
  // Ignore seconds and minutes
  defaultValue: [
    e.hour,
    e.day,
    e.week,
    e.month,
    e.quarter,
    e.year
  ]
}, U = {
  name: "dimensionSimple",
  type: "dimension",
  label: "Dimension",
  config: {
    dataset: "dataset",
    hideGranularity: true
  },
  required: true,
  category: "Component Data"
}, _ = {
  name: "dimensionTime",
  type: "dimension",
  label: "Dimension time",
  config: {
    dataset: "dataset",
    supportedTypes: ["time"],
    hideGranularity: true
  },
  required: true,
  category: "Component Data"
}, Z = {
  name: "dimension",
  type: "dimension",
  label: "Dimension",
  config: {
    dataset: "dataset"
  },
  required: true,
  category: "Component Data",
  inputs: F
}, ee = {
  name: "dimension",
  type: "dimension",
  label: "Dimension",
  config: {
    dataset: "dataset"
  },
  required: true,
  category: "Component Data",
  inputs: B
}, D = {
  name: "dimensions",
  type: "dimension",
  label: "Dimensions",
  config: {
    dataset: "dataset"
  },
  array: true,
  required: true,
  category: "Component Data",
  inputs: n
}, w = {
  name: "dimensionsAndMeasures",
  type: "dimensionOrMeasure",
  label: "Dimensions and measures",
  array: true,
  required: true,
  config: {
    dataset: "dataset"
  },
  category: "Component Data",
  inputs: n
}, te = {
  name: "measure",
  type: "measure",
  label: "Measure",
  config: {
    dataset: "dataset"
  },
  required: true,
  category: "Component Data",
  inputs: n
}, M = {
  name: "measures",
  type: "measure",
  label: "Measures",
  array: true,
  config: {
    dataset: "dataset"
  },
  required: true,
  category: "Component Data",
  inputs: n
}, ne = {
  ...M,
  name: "measureOptions",
  label: "Measure options"
}, se = {
  ...D,
  name: "dimensionOptions",
  label: "Dimension options"
}, oe = {
  ...w,
  name: "dimensionAndMeasureOptions",
  label: "Dimension and measure options"
}, le = {
  name: "comparisonPeriod",
  type: s,
  label: "Comparison period",
  category: "Component data"
}, ie = {
  name: "maxResults",
  type: "number",
  label: "Max results",
  category: "Component Settings",
  defaultValue: 1e3
}, re = {
  name: "placeholder",
  type: "string",
  label: "Placeholder",
  category: "Component Settings"
}, me = {
  name: "showLegend",
  type: "boolean",
  label: "Show legend",
  defaultValue: true,
  category: "Component Settings"
}, ue = {
  name: "showTooltips",
  type: "boolean",
  label: "Show tooltips",
  defaultValue: true,
  category: "Component Settings"
}, pe = {
  name: "showValueLabels",
  type: "boolean",
  label: "Show value labels",
  defaultValue: true,
  category: "Component Settings"
}, ye = {
  name: "showTotalLabels",
  type: "boolean",
  label: "Show total labels",
  defaultValue: false,
  category: "Component Settings"
}, ce = {
  name: "showLogarithmicScale",
  type: "boolean",
  label: "Show logarithmic scale",
  defaultValue: false,
  category: "Component Settings"
}, ge = {
  type: r$1,
  name: "color",
  label: "Color",
  category: "Component Settings"
}, be = {
  type: "number",
  name: "fontSize",
  label: "Font size",
  category: "Component Settings"
}, xe = {
  type: "boolean",
  name: "clearable",
  label: "Can be cleared",
  defaultValue: true,
  category: "Component Settings"
}, fe = {
  ...A,
  name: "displayNullAs",
  label: "Display null as",
  category: "Component Settings"
}, he = {
  name: "xAxisLabel",
  type: "string",
  label: "X-axis Label",
  category: "Axes Settings"
}, Se = {
  name: "yAxisLabel",
  type: "string",
  label: "Y-axis label",
  category: "Axes Settings"
}, Ae = {
  name: "reverseXAxis",
  type: "boolean",
  label: "Reverse x-axis",
  defaultValue: false,
  category: "Axes Settings"
}, Ce = {
  name: "reverseYAxis",
  type: "boolean",
  label: "Reverse y-axis",
  defaultValue: false,
  category: "Axes Settings"
}, De = {
  name: "yAxisRangeMin",
  type: "number",
  label: "Y-axis range min",
  category: "Axes Settings"
}, we = {
  name: "yAxisRangeMax",
  type: "number",
  label: "Y-axis range max",
  category: "Axes Settings"
}, Me = {
  name: "xAxisRangeMin",
  type: "number",
  label: "X-axis range min",
  category: "Axes Settings"
}, ve = {
  name: "xAxisRangeMax",
  type: "number",
  label: "X-axis range max",
  category: "Axes Settings"
}, Te = {
  name: "xAxisMaxItems",
  type: "number",
  label: "Max x-axis items",
  category: "Axes Settings"
}, Oe = {
  name: "yAxisMaxItems",
  type: "number",
  label: "Max y-axis items",
  category: "Axes Settings"
}, Re = {
  name: "markdown",
  type: p$1,
  label: "Markdown",
  description: "All markdown features are supported, including tables, images, links, etc. You can also access translations using {{translation_key|fallback value}}.",
  category: "Component Settings"
}, Ne = {
  boolean: Y,
  timeRange: $,
  number: W,
  string: A,
  title: X,
  description: H,
  tooltip: z,
  dataset: J,
  maxLegendItems: K,
  dimension: C,
  groupBy: j,
  dimensionSimple: U,
  dimensionTime: _,
  dimensionWithDateBounds: Z,
  dimensionWithGranularitySelectField: ee,
  dimensionsAndMeasures: w,
  measure: te,
  measures: M,
  measureOptions: ne,
  dimensionOptions: se,
  dimensionAndMeasureOptions: oe,
  comparisonPeriod: le,
  maxResults: ie,
  placeholder: re,
  showLegend: me,
  showTooltips: ue,
  showValueLabels: pe,
  showTotalLabels: ye,
  showLogarithmicScale: ce,
  color: ge,
  fontSize: be,
  clearable: xe,
  displayNullAs: fe,
  xAxisLabel: he,
  yAxisLabel: Se,
  reverseXAxis: Ae,
  reverseYAxis: Ce,
  yAxisRangeMin: De,
  yAxisRangeMax: we,
  xAxisRangeMin: Me,
  xAxisRangeMax: ve,
  xAxisMaxItems: Te,
  yAxisMaxItems: Oe,
  granularity: E,
  granularities: Q,
  markdown: Re
};

export { Ge as G, Ne as N, e, h, ke as k, s };
//# sourceMappingURL=component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js.map
//# sourceMappingURL=component.inputs.constants-Cs7gX1rI-ChA2Mp06-DSwMaIkQ.js.map
