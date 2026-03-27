const Jl = {
  translation: {
    common: {
      other: "Other",
      noOptionsFound: "No options found",
      noOptionsAvailable: "No options available",
      compared: "Compared",
      loading: "Loading..."
    },
    charts: {
      label: "Label",
      primaryPeriod: "Primary period",
      comparisonPeriod: "Comparison period",
      "menuOptions.downloadCSV": "Download CSV",
      "menuOptions.downloadPNG": "Download PNG",
      "menuOptions.downloadXLSX": "Download XLSX",
      errorTitle: "Something went wrong.",
      errorMessage: "An error occurred while loading the chart.",
      emptyTitle: "No results.",
      emptyMessage: "It's a bit empty here.",
      tablePaginated: {
        pagination: "Page {{page}} of {{totalPages}}"
      },
      pivotTable: {
        total: "Total"
      },
      kpiChart: {
        noPreviousData: "No previous data",
        equalComparison: "No change"
      }
    },
    editors: {
      errorTitle: "Something went wrong.",
      dateRangePicker: {
        custom: "Custom",
        backToPresets: "Back to presets",
        apply: "Apply",
        placeholder: "Select date range"
      }
    },
    defaults: {
      granularityOptions: {
        second: "Second",
        minute: "Minute",
        hour: "Hour",
        day: "Day",
        week: "Week",
        month: "Month",
        quarter: "Quarter",
        year: "Year"
      },
      comparisonPeriodOptions: {
        previousPeriod: "Previous period",
        previousWeek: "Previous week",
        previousMonth: "Previous month",
        previousQuarter: "Previous quarter",
        previousYear: "Previous year",
        samePeriodLastWeek: "Same period last week",
        samePeriodLastMonth: "Same period last month",
        samePeriodLastQuarter: "Same period last quarter",
        samePeriodLastYear: "Same period last year"
      }
    },
    granularity: {
      quarter: "Q{{quarter}} {{year}}"
    }
  }
}, Xl = {
  translation: {
    common: {
      other: "Andere",
      noOptionsFound: "Keine Optionen gefunden",
      noOptionsAvailable: "Keine Optionen verfügbar",
      compared: "Verglichen",
      loading: "Laden..."
    },
    dimension: {
      "customers.country.United States": "Vereinigte Staaten",
      "customers.country.Germany": "Deutschland",
      "customers.country.United Kingdom": "Vereinigtes Königreich",
      "customers.country.New Zealand": "Neuseeland",
      "customers.country.Belgium": "Belgien",
      "customers.country.Australia": "Australien",
      "customers.country.Canada": "Kanada",
      "customers.country.Iceland": "Island",
      Other: "Andere"
    },
    charts: {
      label: "Beschriftung",
      primaryPeriod: "Primärzeitraum",
      comparisonPeriod: "Vergleichszeitraum",
      "menuOptions.downloadCSV": "CSV herunterladen",
      "menuOptions.downloadPNG": "PNG herunterladen",
      "menuOptions.downloadXLSX": "XLSX herunterladen",
      errorTitle: "Etwas ist schiefgelaufen.",
      errorMessage: "Beim Laden des Diagramms ist ein Fehler aufgetreten.",
      emptyTitle: "Keine Ergebnisse.",
      emptyMessage: "Hier ist es etwas leer.",
      tablePaginated: {
        pagination: "Seite {{page}} von {{totalPages}}"
      },
      pivotTable: {
        total: "Gesamt"
      },
      kpiChart: {
        noPreviousData: "Keine vorherigen Daten",
        equalComparison: "Keine Veränderung"
      }
    },
    editors: {
      errorTitle: "Etwas ist schiefgelaufen.",
      dateRangePicker: {
        custom: "Benutzerdefiniert",
        backToPresets: "Zurück zu den Voreinstellungen",
        apply: "Anwenden",
        placeholder: "Datumsbereich auswählen"
      }
    },
    defaults: {
      granularityOptions: {
        second: "Sekunde",
        minute: "Minute",
        hour: "Stunde",
        day: "Tag",
        week: "Woche",
        month: "Monat",
        quarter: "Quartal",
        year: "Jahr"
      },
      comparisonPeriodOptions: {
        previousPeriod: "Vorheriger Zeitraum",
        previousWeek: "Vorherige Woche",
        previousMonth: "Vorheriger Monat",
        previousQuarter: "Vorheriges Quartal",
        previousYear: "Vorheriges Jahr",
        samePeriodLastWeek: "Gleicher Zeitraum letzte Woche",
        samePeriodLastMonth: "Gleicher Zeitraum letzten Monat",
        samePeriodLastQuarter: "Gleicher Zeitraum letztes Quartal",
        samePeriodLastYear: "Gleicher Zeitraum letztes Jahr"
      },
      dateRangeOptions: {
        today: "Heute",
        yesterday: "Gestern",
        thisWeek: "Diese Woche",
        lastWeek: "Letzte Woche",
        weekToDate: "Woche bis heute",
        last7Days: "Letzte 7 Tage",
        next7Days: "Nächste 7 Tage",
        last30Days: "Letzte 30 Tage",
        next30Days: "Nächste 30 Tage",
        thisMonth: "Dieser Monat",
        lastMonth: "Letzter Monat",
        nextMonth: "Nächster Monat",
        thisQuarter: "Dieses Quartal",
        lastQuarter: "Letztes Quartal",
        nextQuarter: "Nächstes Quartal",
        quarterToDate: "Quartal bis heute",
        last6Months: "Letzte 6 Monate",
        last12Months: "Letzte 12 Monate",
        thisYear: "Dieses Jahr",
        lastYear: "Letztes Jahr",
        nextYear: "Nächstes Jahr",
        yearToDate: "Jahr bis heute"
      }
    },
    granularity: {
      quarter: "{{quarter}}. Quartal {{year}}"
    }
  }
};
/*!
 * mergician
 * v2.0.2
 * https://jhildenbiddle.github.io/mergician/
 * (c) 2022-2024 John Hildenbiddle
 * MIT license
 */
function si(...e) {
  const t = {};
  return e.forEach((r) => {
    r.forEach((n) => {
      t[n] = n in t ? ++t[n] : 1;
    });
  }), t;
}
function ql(...e) {
  return e.reduce(
    (t, r) => t.filter(Set.prototype.has, new Set(r))
  );
}
function Ql(...e) {
  const t = si(...e);
  return Object.keys(t).filter((r) => t[r] > 1);
}
function Zl(...e) {
  const t = si(...e);
  return Object.keys(t).filter((r) => t[r] < e.length);
}
function ec(...e) {
  const t = si(...e);
  return Object.keys(t).filter((r) => t[r] === 1);
}
function tc(e, t = !1) {
  const r = Object.getOwnPropertyNames(e);
  if (t)
    for (const n in e)
      !r.includes(n) && r.push(n);
  return r;
}
function Ga(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Li(e) {
  if (!Ga(e))
    return !1;
  const t = ["writable", "enumerable", "configurable"].some(
    (o) => o in e
  ), r = ["get", "set"].some((o) => typeof e[o] == "function"), n = ["get", "set"].every((o) => o in e);
  let a = "value" in e && t || r && (n || t);
  if (a) {
    const o = [
      "configurable",
      "get",
      "set",
      "enumerable",
      "value",
      "writable"
    ];
    a = Object.keys(e).some((i) => !(i in o));
  }
  return a;
}
/**
 * @typedef {Object} MergicianOptions
 * @property {string[]} [onlyKeys] - Exclusive array of keys to be merged
 * (others are skipped)
 * @property {string[]} [skipKeys] - Array of keys to skip (others are
 * merged)
 * @property {boolean} [onlyCommonKeys=false] - Merge only keys found
 * in multiple objects (ignore single occurrence keys)
 * @property {boolean} [onlyUniversalKeys=false] - Merge only keys
 * found in all objects
 * @property {boolean} [skipCommonKeys=false] - Skip keys found in
 * multiple objects (merge only single occurrence keys)
 * @property {boolean} [skipUniversalKeys=false] - Skip keys found in
 * all objects (merge only common keys)
 * @property {boolean} [invokeGetters=false] - Invoke "getter" methods
 * and merge returned values
 * @property {boolean} [skipSetters=false] - Skip "setter" methods
 * during merge
 * @property {boolean} [appendArrays=false] - Merge array values at
 * the end of existing arrays
 * @property {boolean} [prependArrays=false] - Merge array values at
 * the beginning of existing arrays
 * @property {boolean} [dedupArrays=false] - Remove duplicate array
 * values in new merged object
 * @property {boolean|function} [sortArrays=false] - Sort array values
 * in new merged object
 * @property {boolean} [hoistEnumerable=false] - Merge enumerable
 * prototype properties as direct properties of merged object
 * @property {boolean} [hoistProto=false] - Merge custom prototype
 * properties as direct properties of merged object
 * @property {boolean} [skipProto=false] - Skip merging of custom
 * prototype properties
 * @property {filterCallback} [filter] - Callback used to conditionally merge
 * or skip a property. Return a "truthy" value to merge or a "falsy" value to
 * skip. Return no value to proceed according to other option values.
 * @property {beforeEachCallback} [beforeEach] - Callback used for
 * inspecting/modifying properties before merge. Return value is used as value
 * to merge.
 * @property {afterEachCallback} [afterEach] - Callback used for
 * inspecting/modifying properties after merge. Return value is used as merged
 * value.
 * @property {onCircularCallback} [onCircular] - Callback used for handling
 * circular object references during merge
 * @preserve
 */
/**
 * @callback filterCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback beforeEachCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback afterEachCallback
 * @param {afterEachCallbackData} callbackData
 * @preserve
 */
/**
 * @callback onCircularCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @typedef {Object} callbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {object} srcObj - Object containing the source value
 * @property {any} srcVal - Source object’s property value
 * @property {object} targetObj - New merged object
 * @property {any} targetVal - New merged object’s current property value
 * @preserve
 */
/**
 * @typedef {Object} afterEachCallbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {any} mergeVal - New merged value
 * @property {object} srcObj - Object containing the source value
 * @property {object} targetObj - New merged object
 * @preserve
 */
var Cr = {
  // Keys
  onlyKeys: [],
  skipKeys: [],
  onlyCommonKeys: !1,
  onlyUniversalKeys: !1,
  skipCommonKeys: !1,
  skipUniversalKeys: !1,
  // Values
  invokeGetters: !1,
  skipSetters: !1,
  // Arrays
  appendArrays: !1,
  prependArrays: !1,
  dedupArrays: !1,
  sortArrays: !1,
  // Prototype
  hoistEnumerable: !1,
  hoistProto: !1,
  skipProto: !1,
  // Callbacks
  filter: Function.prototype,
  beforeEach: Function.prototype,
  afterEach: Function.prototype,
  onCircular: Function.prototype
};
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @overload
 * @param {MergicianOptions} options
 * @returns {function} New merge function with options set as defaults
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @overload
 * @param {...object} objects
 * @returns {object} New merged object
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @param {MergicianOptions} optionsOrObject
 * @param {...object} [objects]
 * @returns {function|object} New merge function with options set as defaults
 * (single argument) or new merged object (multiple arguments)
 * @preserve
 */
function Jo(e, ...t) {
  const r = arguments.length === 1 ? arguments[0] : {}, n = { ...Cr, ...r }, a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = typeof n.sortArrays == "function" ? n.sortArrays : void 0, s = /* @__PURE__ */ new WeakMap();
  let l = 0;
  function c(d) {
    return tc(d, n.hoistEnumerable);
  }
  function f(...d) {
    let u;
    d.length > 1 && (n.onlyCommonKeys ? u = Ql(
      ...d.map((m) => c(m))
    ) : n.onlyUniversalKeys ? u = ql(...d.map((m) => c(m))) : n.skipCommonKeys ? u = ec(
      ...d.map((m) => c(m))
    ) : n.skipUniversalKeys && (u = Zl(...d.map((m) => c(m))))), !u && n.onlyKeys.length && (u = n.onlyKeys), u && u !== n.onlyKeys && n.onlyKeys.length && (u = u.filter(
      (m) => n.onlyKeys.includes(m)
    ));
    const h = d.reduce((m, p) => {
      s.set(p, m);
      let w = u || c(p);
      n.skipKeys.length && (w = w.filter((O) => n.skipKeys.indexOf(O) === -1));
      for (let O = 0; O < w.length; O++) {
        const y = w[O], B = m[y], I = {
          configurable: !0,
          enumerable: !0
        };
        if (!(y in p))
          continue;
        let G = !1, v = p[y];
        const k = Object.getOwnPropertyDescriptor(p, y);
        if (k && typeof k.set == "function" && typeof k.get != "function") {
          n.skipSetters || Object.defineProperty(m, y, k);
          continue;
        }
        if (n.filter !== Cr.filter) {
          const A = n.filter({
            depth: l,
            key: y,
            srcObj: p,
            srcVal: v,
            targetObj: m,
            targetVal: B
          });
          if (A !== void 0 && !A)
            continue;
        }
        if (n.beforeEach !== Cr.beforeEach) {
          const A = n.beforeEach({
            depth: l,
            key: y,
            srcObj: p,
            srcVal: v,
            targetObj: m,
            targetVal: B
          });
          A !== void 0 && (G = !0, v = A);
        }
        if (typeof v == "object" && v !== null && s.has(p[y])) {
          const A = n.onCircular({
            depth: l,
            key: y,
            srcObj: p,
            srcVal: p[y],
            targetObj: m,
            targetVal: B
          });
          if (A === void 0) {
            v = s.get(p[y]), m[y] = v;
            continue;
          }
          G = !0, v = A;
        }
        if (Array.isArray(v)) {
          if (v = [...v], Array.isArray(B) && (n.appendArrays ? v = [...B, ...v] : n.prependArrays && (v = [...v, ...B])), n.dedupArrays)
            if (n.afterEach !== Cr.afterEach)
              v = [...new Set(v)];
            else {
              const A = a.get(m);
              A && !A.includes(y) ? A.push(y) : a.set(m, [y]);
            }
          if (n.sortArrays)
            if (n.afterEach !== Cr.afterEach)
              v = v.sort(i);
            else {
              const A = o.get(m);
              A && !A.includes(y) ? A.push(y) : o.set(m, [y]);
            }
        } else v instanceof Date ? v = new Date(v) : Ga(v) && (!G || !Li(v)) && (l++, Ga(B) ? v = f(B, v) : v = f(v), l--);
        if (n.afterEach !== Cr.afterEach) {
          const A = n.afterEach({
            depth: l,
            key: y,
            mergeVal: v,
            srcObj: p,
            targetObj: m
          });
          A !== void 0 && (G = !0, v = A);
        }
        if (G) {
          const A = Li(v) ? v : {
            configurable: !0,
            enumerable: !0,
            value: v,
            writable: !0
          };
          Object.defineProperty(m, y, A);
          continue;
        }
        if (k) {
          const { configurable: A, enumerable: D, get: L, set: P, writable: M } = k;
          Object.assign(I, {
            configurable: A,
            enumerable: D
          }), typeof L == "function" && (n.invokeGetters ? I.value = v : I.get = L), !n.skipSetters && typeof P == "function" && !Object.hasOwnProperty.call(I, "value") && (I.set = P), !I.get && !I.set && (I.writable = !!M);
        }
        !I.get && !I.set && !("value" in I) && (I.value = v, I.writable = k && "writable" in k ? k.writable : !0), Object.defineProperty(m, y, I);
      }
      return m;
    }, {});
    for (const [m, p] of a.entries())
      for (const w of p) {
        const O = Object.getOwnPropertyDescriptor(m, w), { configurable: y, enumerable: B, writable: I } = O;
        Object.defineProperty(m, w, {
          configurable: y,
          enumerable: B,
          value: [...new Set(m[w])],
          writable: I !== void 0 ? I : !0
        });
      }
    for (const [m, p] of o.entries())
      for (const w of p)
        m[w].sort(i);
    let g = h;
    if (!n.skipProto) {
      const m = d.reduce((p, w) => {
        const O = Object.getPrototypeOf(w);
        return O && O !== Object.prototype && p.push(O), p;
      }, []);
      if (m.length) {
        const p = f(...m);
        n.hoistProto ? g = f(p, h) : g = Object.create(
          p,
          Object.getOwnPropertyDescriptors(h)
        );
      }
    }
    return g;
  }
  return arguments.length === 1 ? function(...d) {
    return arguments.length === 1 ? Jo({ ...n, ...d[0] }) : f(...d);
  } : f(...arguments);
}
const $n = "en-US", Jt = (e, t = {}) => ({
  __embeddableType: "built-in",
  toString: () => e,
  typeConfig: {
    label: e,
    optionLabel: () => e,
    ...t
  }
}), rc = "dimension", nc = (e) => (e == null ? void 0 : e.__type__) === rc, ac = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null, ic = (e, t) => {
  if (vc.includes(e))
    throw new Error(`Type ${e} is part of the nativeTypes and cannot be defined`, { cause: "sdk" });
  const r = {
    __embeddableType: "custom",
    toString: () => e,
    typeConfig: t
  }, n = ac();
  globalThis.__EMBEDDABLE__ = globalThis.__EMBEDDABLE__ || {};
  const a = n ? globalThis.__EMBEDDABLE__[n] = globalThis.__EMBEDDABLE__[n] || {} : globalThis.__EMBEDDABLE__;
  return a.types = a.types || {}, a.types = {
    ...a.types,
    [e]: {
      name: e,
      ...t
    }
  }, r;
}, oc = "string", sc = "number", lc = "boolean", cc = "time", fc = "timeRange", uc = "granularity", hc = "dataset", dc = "measure", mc = "dimension", pc = "dimensionOrMeasure", gc = [
  oc,
  sc,
  lc,
  cc,
  fc,
  uc
], vc = [
  ...gc,
  hc,
  dc,
  mc,
  pc
], bc = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null, Xo = (e, t) => {
  var r, n, a, o;
  const i = bc();
  globalThis.__EMBEDDABLE__ ?? (globalThis.__EMBEDDABLE__ = {});
  const s = i ? (r = globalThis.__EMBEDDABLE__)[i] ?? (r[i] = {}) : globalThis.__EMBEDDABLE__;
  if (typeof e == "string")
    s.nativeTypes = s.nativeTypes || {}, s.nativeTypes[e] = s.nativeTypes[e] || {}, (n = s.nativeTypes[e]).options ?? (n.options = []), s.nativeTypes[e].options.push(t);
  else {
    const l = e.toString();
    if (!((a = s == null ? void 0 : s.types) != null && a[l]))
      return;
    (o = s.types[l]).options ?? (o.options = []), s.types[l].options.push(t);
  }
};
Jt("string", {
  transform: (e) => e,
  optionLabel: (e) => Array.isArray(e) ? `[${e.map((t) => `"${t}"`).join(",")}]` : `"${e}"`
});
Jt("number", {
  transform: (e) => Array.isArray(e) ? e : e && Number(e),
  optionLabel: (e) => Array.isArray(e) ? `[${e.join(",")}]` : (e == null ? void 0 : e.toLocaleString($n)) ?? ""
});
Jt("boolean", {
  transform: (e) => e === "true" || e === !0,
  optionLabel: (e) => e ? "true" : "false"
});
Jt("time", {
  transform: (e) => {
    const t = e != null && e.date ? new Date(e.date) : void 0;
    return {
      date: t && t.toString() !== "Invalid Date" ? t : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var t;
    return e ? e != null && e.date ? ((t = e.date) == null ? void 0 : t.toLocaleDateString($n)) ?? e.date.toLocaleString() : e.relativeTimeString : "";
  }
});
Jt("timeRange", {
  transform: (e) => {
    if (!e)
      return;
    const [t, r] = [e == null ? void 0 : e.from, e == null ? void 0 : e.to], n = new Date(t), a = new Date(r);
    return {
      from: n.toString() !== "Invalid Date" ? n : void 0,
      to: a.toString() !== "Invalid Date" ? a : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var t, r, n, a;
    return e ? e != null && e.from && e != null && e.to ? `${((t = e.from) == null ? void 0 : t.toLocaleDateString($n)) ?? ((r = e.from) == null ? void 0 : r.toLocaleString())},${((n = e.to) == null ? void 0 : n.toLocaleDateString($n)) ?? ((a = e.to) == null ? void 0 : a.toLocaleString())}` : e == null ? void 0 : e.relativeTimeString : "";
  }
});
Jt("granularity", {
  transform: (e) => e,
  optionLabel: (e) => e
});
Jt("dataset");
Jt("measure");
Jt("dimension");
Jt("dimensionOrMeasure");
const wc = (e, t) => Jo(e, t), _e = (e) => typeof e == "string", Zr = () => {
  let e, t;
  const r = new Promise((n, a) => {
    e = n, t = a;
  });
  return r.resolve = e, r.reject = t, r;
}, Mi = (e) => e == null ? "" : "" + e, yc = (e, t, r) => {
  e.forEach((n) => {
    t[n] && (r[n] = t[n]);
  });
}, Tc = /###/g, Ii = (e) => e && e.indexOf("###") > -1 ? e.replace(Tc, ".") : e, Pi = (e) => !e || _e(e), nn = (e, t, r) => {
  const n = _e(t) ? t.split(".") : t;
  let a = 0;
  for (; a < n.length - 1; ) {
    if (Pi(e)) return {};
    const o = Ii(n[a]);
    !e[o] && r && (e[o] = new r()), Object.prototype.hasOwnProperty.call(e, o) ? e = e[o] : e = {}, ++a;
  }
  return Pi(e) ? {} : {
    obj: e,
    k: Ii(n[a])
  };
}, Fi = (e, t, r) => {
  const {
    obj: n,
    k: a
  } = nn(e, t, Object);
  if (n !== void 0 || t.length === 1) {
    n[a] = r;
    return;
  }
  let o = t[t.length - 1], i = t.slice(0, t.length - 1), s = nn(e, i, Object);
  for (; s.obj === void 0 && i.length; )
    o = `${i[i.length - 1]}.${o}`, i = i.slice(0, i.length - 1), s = nn(e, i, Object), s != null && s.obj && typeof s.obj[`${s.k}.${o}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${o}`] = r;
}, Ec = (e, t, r, n) => {
  const {
    obj: a,
    k: o
  } = nn(e, t, Object);
  a[o] = a[o] || [], a[o].push(r);
}, Bn = (e, t) => {
  const {
    obj: r,
    k: n
  } = nn(e, t);
  if (r && Object.prototype.hasOwnProperty.call(r, n))
    return r[n];
}, Sc = (e, t, r) => {
  const n = Bn(e, r);
  return n !== void 0 ? n : Bn(t, r);
}, qo = (e, t, r) => {
  for (const n in t)
    n !== "__proto__" && n !== "constructor" && (n in e ? _e(e[n]) || e[n] instanceof String || _e(t[n]) || t[n] instanceof String ? r && (e[n] = t[n]) : qo(e[n], t[n], r) : e[n] = t[n]);
  return e;
}, gr = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var kc = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const xc = (e) => _e(e) ? e.replace(/[&<>"'\/]/g, (t) => kc[t]) : e;
class _c {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const r = this.regExpMap.get(t);
    if (r !== void 0)
      return r;
    const n = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, n), this.regExpQueue.push(t), n;
  }
}
const Oc = [" ", ",", "?", "!", ";"], Ac = new _c(20), Cc = (e, t, r) => {
  t = t || "", r = r || "";
  const n = Oc.filter((i) => t.indexOf(i) < 0 && r.indexOf(i) < 0);
  if (n.length === 0) return !0;
  const a = Ac.getRegExp(`(${n.map((i) => i === "?" ? "\\?" : i).join("|")})`);
  let o = !a.test(e);
  if (!o) {
    const i = e.indexOf(r);
    i > 0 && !a.test(e.substring(0, i)) && (o = !0);
  }
  return o;
}, Ka = (e, t, r = ".") => {
  if (!e) return;
  if (e[t])
    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
  const n = t.split(r);
  let a = e;
  for (let o = 0; o < n.length; ) {
    if (!a || typeof a != "object")
      return;
    let i, s = "";
    for (let l = o; l < n.length; ++l)
      if (l !== o && (s += r), s += n[l], i = a[s], i !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof i) > -1 && l < n.length - 1)
          continue;
        o += l - o + 1;
        break;
      }
    a = i;
  }
  return a;
}, hn = (e) => e == null ? void 0 : e.replace(/_/g, "-"), Dc = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    var r, n;
    (n = (r = console == null ? void 0 : console[e]) == null ? void 0 : r.apply) == null || n.call(r, console, t);
  }
};
class zn {
  constructor(t, r = {}) {
    this.init(t, r);
  }
  init(t, r = {}) {
    this.prefix = r.prefix || "i18next:", this.logger = t || Dc, this.options = r, this.debug = r.debug;
  }
  log(...t) {
    return this.forward(t, "log", "", !0);
  }
  warn(...t) {
    return this.forward(t, "warn", "", !0);
  }
  error(...t) {
    return this.forward(t, "error", "");
  }
  deprecate(...t) {
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, r, n, a) {
    return a && !this.debug ? null : (_e(t[0]) && (t[0] = `${n}${this.prefix} ${t[0]}`), this.logger[r](t));
  }
  create(t) {
    return new zn(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new zn(this.logger, t);
  }
}
var Gt = new zn();
class fa {
  constructor() {
    this.observers = {};
  }
  on(t, r) {
    return t.split(" ").forEach((n) => {
      this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
      const a = this.observers[n].get(r) || 0;
      this.observers[n].set(r, a + 1);
    }), this;
  }
  off(t, r) {
    if (this.observers[t]) {
      if (!r) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(r);
    }
  }
  emit(t, ...r) {
    this.observers[t] && Array.from(this.observers[t].entries()).forEach(([n, a]) => {
      for (let o = 0; o < a; o++)
        n(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([n, a]) => {
      for (let o = 0; o < a; o++)
        n.apply(n, [t, ...r]);
    });
  }
}
class Ui extends fa {
  constructor(t, r = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = t || {}, this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const r = this.options.ns.indexOf(t);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(t, r, n, a = {}) {
    var o, i;
    const s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, l = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let c;
    t.indexOf(".") > -1 ? c = t.split(".") : (c = [t, r], n && (Array.isArray(n) ? c.push(...n) : _e(n) && s ? c.push(...n.split(s)) : c.push(n)));
    const f = Bn(this.data, c);
    return !f && !r && !n && t.indexOf(".") > -1 && (t = c[0], r = c[1], n = c.slice(2).join(".")), f || !l || !_e(n) ? f : Ka((i = (o = this.data) == null ? void 0 : o[t]) == null ? void 0 : i[r], n, s);
  }
  addResource(t, r, n, a, o = {
    silent: !1
  }) {
    const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let s = [t, r];
    n && (s = s.concat(i ? n.split(i) : n)), t.indexOf(".") > -1 && (s = t.split("."), a = r, r = s[1]), this.addNamespaces(r), Fi(this.data, s, a), o.silent || this.emit("added", t, r, n, a);
  }
  addResources(t, r, n, a = {
    silent: !1
  }) {
    for (const o in n)
      (_e(n[o]) || Array.isArray(n[o])) && this.addResource(t, r, o, n[o], {
        silent: !0
      });
    a.silent || this.emit("added", t, r, n);
  }
  addResourceBundle(t, r, n, a, o, i = {
    silent: !1,
    skipCopy: !1
  }) {
    let s = [t, r];
    t.indexOf(".") > -1 && (s = t.split("."), a = n, n = r, r = s[1]), this.addNamespaces(r);
    let l = Bn(this.data, s) || {};
    i.skipCopy || (n = JSON.parse(JSON.stringify(n))), a ? qo(l, n, o) : l = {
      ...l,
      ...n
    }, Fi(this.data, s, l), i.silent || this.emit("added", t, r, n);
  }
  removeResourceBundle(t, r) {
    this.hasResourceBundle(t, r) && delete this.data[t][r], this.removeNamespaces(r), this.emit("removed", t, r);
  }
  hasResourceBundle(t, r) {
    return this.getResource(t, r) !== void 0;
  }
  getResourceBundle(t, r) {
    return r || (r = this.options.defaultNS), this.getResource(t, r);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const r = this.getDataByLanguage(t);
    return !!(r && Object.keys(r) || []).find((n) => r[n] && Object.keys(r[n]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Qo = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, r, n, a) {
    return e.forEach((o) => {
      var i;
      t = ((i = this.processors[o]) == null ? void 0 : i.process(t, r, n, a)) ?? t;
    }), t;
  }
};
const Zo = Symbol("i18next/PATH_KEY");
function Rc() {
  const e = [], t = /* @__PURE__ */ Object.create(null);
  let r;
  return t.get = (n, a) => {
    var o;
    return (o = r == null ? void 0 : r.revoke) == null || o.call(r), a === Zo ? e : (e.push(a), r = Proxy.revocable(n, t), r.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), t).proxy;
}
function an(e, t) {
  const {
    [Zo]: r
  } = e(Rc()), n = (t == null ? void 0 : t.keySeparator) ?? ".", a = (t == null ? void 0 : t.nsSeparator) ?? ":";
  if (r.length > 1 && a) {
    const o = t == null ? void 0 : t.ns;
    if ((o ? Array.isArray(o) ? o : [o] : []).includes(r[0]))
      return `${r[0]}${a}${r.slice(1).join(n)}`;
  }
  return r.join(n);
}
const $i = {}, xa = (e) => !_e(e) && typeof e != "boolean" && typeof e != "number";
class Wn extends fa {
  constructor(t, r = {}) {
    super(), yc(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Gt.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t, r = {
    interpolation: {}
  }) {
    const n = {
      ...r
    };
    if (t == null) return !1;
    const a = this.resolve(t, n);
    if ((a == null ? void 0 : a.res) === void 0) return !1;
    const o = xa(a.res);
    return !(n.returnObjects === !1 && o);
  }
  extractFromKey(t, r) {
    let n = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const a = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let o = r.ns || this.options.defaultNS || [];
    const i = n && t.indexOf(n) > -1, s = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !Cc(t, n, a);
    if (i && !s) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: t,
          namespaces: _e(o) ? [o] : o
        };
      const c = t.split(n);
      (n !== a || n === a && this.options.ns.indexOf(c[0]) > -1) && (o = c.shift()), t = c.join(a);
    }
    return {
      key: t,
      namespaces: _e(o) ? [o] : o
    };
  }
  translate(t, r, n) {
    let a = typeof r == "object" ? {
      ...r
    } : r;
    if (typeof a != "object" && this.options.overloadTranslationOptionHandler && (a = this.options.overloadTranslationOptionHandler(arguments)), typeof a == "object" && (a = {
      ...a
    }), a || (a = {}), t == null) return "";
    typeof t == "function" && (t = an(t, {
      ...this.options,
      ...a
    })), Array.isArray(t) || (t = [String(t)]), t = t.map((M) => typeof M == "function" ? an(M, {
      ...this.options,
      ...a
    }) : String(M));
    const o = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails, i = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: l
    } = this.extractFromKey(t[t.length - 1], a), c = l[l.length - 1];
    let f = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
    f === void 0 && (f = ":");
    const d = a.lng || this.language, u = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((d == null ? void 0 : d.toLowerCase()) === "cimode")
      return u ? o ? {
        res: `${c}${f}${s}`,
        usedKey: s,
        exactUsedKey: s,
        usedLng: d,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(a)
      } : `${c}${f}${s}` : o ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: d,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(a)
      } : s;
    const h = this.resolve(t, a);
    let g = h == null ? void 0 : h.res;
    const m = (h == null ? void 0 : h.usedKey) || s, p = (h == null ? void 0 : h.exactUsedKey) || s, w = ["[object Number]", "[object Function]", "[object RegExp]"], O = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays, y = !this.i18nFormat || this.i18nFormat.handleAsObject, B = a.count !== void 0 && !_e(a.count), I = Wn.hasDefaultValue(a), G = B ? this.pluralResolver.getSuffix(d, a.count, a) : "", v = a.ordinal && B ? this.pluralResolver.getSuffix(d, a.count, {
      ordinal: !1
    }) : "", k = B && !a.ordinal && a.count === 0, A = k && a[`defaultValue${this.options.pluralSeparator}zero`] || a[`defaultValue${G}`] || a[`defaultValue${v}`] || a.defaultValue;
    let D = g;
    y && !g && I && (D = A);
    const L = xa(D), P = Object.prototype.toString.apply(D);
    if (y && D && L && w.indexOf(P) < 0 && !(_e(O) && Array.isArray(D))) {
      if (!a.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const M = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, D, {
          ...a,
          ns: l
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (h.res = M, h.usedParams = this.getUsedParamsDetails(a), h) : M;
      }
      if (i) {
        const M = Array.isArray(D), V = M ? [] : {}, F = M ? p : m;
        for (const U in D)
          if (Object.prototype.hasOwnProperty.call(D, U)) {
            const K = `${F}${i}${U}`;
            I && !g ? V[U] = this.translate(K, {
              ...a,
              defaultValue: xa(A) ? A[U] : void 0,
              joinArrays: !1,
              ns: l
            }) : V[U] = this.translate(K, {
              ...a,
              joinArrays: !1,
              ns: l
            }), V[U] === K && (V[U] = D[U]);
          }
        g = V;
      }
    } else if (y && _e(O) && Array.isArray(g))
      g = g.join(O), g && (g = this.extendTranslation(g, t, a, n));
    else {
      let M = !1, V = !1;
      !this.isValidLookup(g) && I && (M = !0, g = A), this.isValidLookup(g) || (V = !0, g = s);
      const F = (a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && V ? void 0 : g, U = I && A !== g && this.options.updateMissing;
      if (V || M || U) {
        if (this.logger.log(U ? "updateKey" : "missingKey", d, c, s, U ? A : g), i) {
          const te = this.resolve(s, {
            ...a,
            keySeparator: !1
          });
          te && te.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let K = [];
        const Z = this.languageUtils.getFallbackCodes(this.options.fallbackLng, a.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Z && Z[0])
          for (let te = 0; te < Z.length; te++)
            K.push(Z[te]);
        else this.options.saveMissingTo === "all" ? K = this.languageUtils.toResolveHierarchy(a.lng || this.language) : K.push(a.lng || this.language);
        const me = (te, ve, ne) => {
          var Q;
          const ue = I && ne !== g ? ne : F;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(te, c, ve, ue, U, a) : (Q = this.backendConnector) != null && Q.saveMissing && this.backendConnector.saveMissing(te, c, ve, ue, U, a), this.emit("missingKey", te, c, ve, g);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && B ? K.forEach((te) => {
          const ve = this.pluralResolver.getSuffixes(te, a);
          k && a[`defaultValue${this.options.pluralSeparator}zero`] && ve.indexOf(`${this.options.pluralSeparator}zero`) < 0 && ve.push(`${this.options.pluralSeparator}zero`), ve.forEach((ne) => {
            me([te], s + ne, a[`defaultValue${ne}`] || A);
          });
        }) : me(K, s, A));
      }
      g = this.extendTranslation(g, t, a, h, n), V && g === s && this.options.appendNamespaceToMissingKey && (g = `${c}${f}${s}`), (V || M) && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}${f}${s}` : s, M ? g : void 0, a));
    }
    return o ? (h.res = g, h.usedParams = this.getUsedParamsDetails(a), h) : g;
  }
  extendTranslation(t, r, n, a, o) {
    var i, s;
    if ((i = this.i18nFormat) != null && i.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...n
      }, n.lng || this.language || a.usedLng, a.usedNS, a.usedKey, {
        resolved: a
      });
    else if (!n.skipInterpolation) {
      n.interpolation && this.interpolator.init({
        ...n,
        interpolation: {
          ...this.options.interpolation,
          ...n.interpolation
        }
      });
      const f = _e(t) && (((s = n == null ? void 0 : n.interpolation) == null ? void 0 : s.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let d;
      if (f) {
        const h = t.match(this.interpolator.nestingRegexp);
        d = h && h.length;
      }
      let u = n.replace && !_e(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (u = {
        ...this.options.interpolation.defaultVariables,
        ...u
      }), t = this.interpolator.interpolate(t, u, n.lng || this.language || a.usedLng, n), f) {
        const h = t.match(this.interpolator.nestingRegexp), g = h && h.length;
        d < g && (n.nest = !1);
      }
      !n.lng && a && a.res && (n.lng = this.language || a.usedLng), n.nest !== !1 && (t = this.interpolator.nest(t, (...h) => (o == null ? void 0 : o[0]) === h[0] && !n.context ? (this.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${r[0]}`), null) : this.translate(...h, r), n)), n.interpolation && this.interpolator.reset();
    }
    const l = n.postProcess || this.options.postProcess, c = _e(l) ? [l] : l;
    return t != null && c != null && c.length && n.applyPostProcessor !== !1 && (t = Qo.handle(c, t, r, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...a,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), t;
  }
  resolve(t, r = {}) {
    let n, a, o, i, s;
    return _e(t) && (t = [t]), Array.isArray(t) && (t = t.map((l) => typeof l == "function" ? an(l, {
      ...this.options,
      ...r
    }) : l)), t.forEach((l) => {
      if (this.isValidLookup(n)) return;
      const c = this.extractFromKey(l, r), f = c.key;
      a = f;
      let d = c.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const u = r.count !== void 0 && !_e(r.count), h = u && !r.ordinal && r.count === 0, g = r.context !== void 0 && (_e(r.context) || typeof r.context == "number") && r.context !== "", m = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
      d.forEach((p) => {
        var w, O;
        this.isValidLookup(n) || (s = p, !$i[`${m[0]}-${p}`] && (w = this.utils) != null && w.hasLoadedNamespace && !((O = this.utils) != null && O.hasLoadedNamespace(s)) && ($i[`${m[0]}-${p}`] = !0, this.logger.warn(`key "${a}" for languages "${m.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((y) => {
          var B;
          if (this.isValidLookup(n)) return;
          i = y;
          const I = [f];
          if ((B = this.i18nFormat) != null && B.addLookupKeys)
            this.i18nFormat.addLookupKeys(I, f, y, p, r);
          else {
            let v;
            u && (v = this.pluralResolver.getSuffix(y, r.count, r));
            const k = `${this.options.pluralSeparator}zero`, A = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (u && (r.ordinal && v.indexOf(A) === 0 && I.push(f + v.replace(A, this.options.pluralSeparator)), I.push(f + v), h && I.push(f + k)), g) {
              const D = `${f}${this.options.contextSeparator || "_"}${r.context}`;
              I.push(D), u && (r.ordinal && v.indexOf(A) === 0 && I.push(D + v.replace(A, this.options.pluralSeparator)), I.push(D + v), h && I.push(D + k));
            }
          }
          let G;
          for (; G = I.pop(); )
            this.isValidLookup(n) || (o = G, n = this.getResource(y, p, G, r));
        }));
      });
    }), {
      res: n,
      usedKey: a,
      exactUsedKey: o,
      usedLng: i,
      usedNS: s
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, r, n, a = {}) {
    var o;
    return (o = this.i18nFormat) != null && o.getResource ? this.i18nFormat.getResource(t, r, n, a) : this.resourceStore.getResource(t, r, n, a);
  }
  getUsedParamsDetails(t = {}) {
    const r = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = t.replace && !_e(t.replace);
    let a = n ? t.replace : t;
    if (n && typeof t.count < "u" && (a.count = t.count), this.options.interpolation.defaultVariables && (a = {
      ...this.options.interpolation.defaultVariables,
      ...a
    }), !n) {
      a = {
        ...a
      };
      for (const o of r)
        delete a[o];
    }
    return a;
  }
  static hasDefaultValue(t) {
    const r = "defaultValue";
    for (const n in t)
      if (Object.prototype.hasOwnProperty.call(t, n) && r === n.substring(0, r.length) && t[n] !== void 0)
        return !0;
    return !1;
  }
}
class Bi {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Gt.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = hn(t), !t || t.indexOf("-") < 0) return null;
    const r = t.split("-");
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = hn(t), !t || t.indexOf("-") < 0) return t;
    const r = t.split("-");
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(t) {
    if (_e(t) && t.indexOf("-") > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(t)[0];
      } catch {
      }
      return r && this.options.lowerCaseLng && (r = r.toLowerCase()), r || (this.options.lowerCaseLng ? t.toLowerCase() : t);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let r;
    return t.forEach((n) => {
      if (r) return;
      const a = this.formatLanguageCode(n);
      (!this.options.supportedLngs || this.isSupportedCode(a)) && (r = a);
    }), !r && this.options.supportedLngs && t.forEach((n) => {
      if (r) return;
      const a = this.getScriptPartFromCode(n);
      if (this.isSupportedCode(a)) return r = a;
      const o = this.getLanguagePartFromCode(n);
      if (this.isSupportedCode(o)) return r = o;
      r = this.options.supportedLngs.find((i) => {
        if (i === o || !(i.indexOf("-") < 0 && o.indexOf("-") < 0) && (i.indexOf("-") > 0 && o.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === o || i.indexOf(o) === 0 && o.length > 1))
          return i;
      });
    }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r;
  }
  getFallbackCodes(t, r) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(r)), _e(t) && (t = [t]), Array.isArray(t)) return t;
    if (!r) return t.default || [];
    let n = t[r];
    return n || (n = t[this.getScriptPartFromCode(r)]), n || (n = t[this.formatLanguageCode(r)]), n || (n = t[this.getLanguagePartFromCode(r)]), n || (n = t.default), n || [];
  }
  toResolveHierarchy(t, r) {
    const n = this.getFallbackCodes((r === !1 ? [] : r) || this.options.fallbackLng || [], t), a = [], o = (i) => {
      i && (this.isSupportedCode(i) ? a.push(i) : this.logger.warn(`rejecting language code not found in supportedLngs: ${i}`));
    };
    return _e(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : _e(t) && o(this.formatLanguageCode(t)), n.forEach((i) => {
      a.indexOf(i) < 0 && o(this.formatLanguageCode(i));
    }), a;
  }
}
const zi = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Wi = {
  select: (e) => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Nc {
  constructor(t, r = {}) {
    this.languageUtils = t, this.options = r, this.logger = Gt.create("pluralResolver"), this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t, r = {}) {
    const n = hn(t === "dev" ? "en" : t), a = r.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
      cleanedCode: n,
      type: a
    });
    if (o in this.pluralRulesCache)
      return this.pluralRulesCache[o];
    let i;
    try {
      i = new Intl.PluralRules(n, {
        type: a
      });
    } catch {
      if (typeof Intl > "u")
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Wi;
      if (!t.match(/-|_/)) return Wi;
      const s = this.languageUtils.getLanguagePartFromCode(t);
      i = this.getRule(s, r);
    }
    return this.pluralRulesCache[o] = i, i;
  }
  needsPlural(t, r = {}) {
    let n = this.getRule(t, r);
    return n || (n = this.getRule("dev", r)), (n == null ? void 0 : n.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(t, r, n = {}) {
    return this.getSuffixes(t, n).map((a) => `${r}${a}`);
  }
  getSuffixes(t, r = {}) {
    let n = this.getRule(t, r);
    return n || (n = this.getRule("dev", r)), n ? n.resolvedOptions().pluralCategories.sort((a, o) => zi[a] - zi[o]).map((a) => `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${a}`) : [];
  }
  getSuffix(t, r, n = {}) {
    const a = this.getRule(t, n);
    return a ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${a.select(r)}` : (this.logger.warn(`no plural rule found for: ${t}`), this.getSuffix("dev", r, n));
  }
}
const Vi = (e, t, r, n = ".", a = !0) => {
  let o = Sc(e, t, r);
  return !o && a && _e(r) && (o = Ka(e, r, n), o === void 0 && (o = Ka(t, r, n))), o;
}, _a = (e) => e.replace(/\$/g, "$$$$");
class Hi {
  constructor(t = {}) {
    var r;
    this.logger = Gt.create("interpolator"), this.options = t, this.format = ((r = t == null ? void 0 : t.interpolation) == null ? void 0 : r.format) || ((n) => n), this.init(t);
  }
  init(t = {}) {
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: r,
      escapeValue: n,
      useRawValueToEscape: a,
      prefix: o,
      prefixEscaped: i,
      suffix: s,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: f,
      unescapePrefix: d,
      nestingPrefix: u,
      nestingPrefixEscaped: h,
      nestingSuffix: g,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: p,
      maxReplaces: w,
      alwaysFormat: O
    } = t.interpolation;
    this.escape = r !== void 0 ? r : xc, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = a !== void 0 ? a : !1, this.prefix = o ? gr(o) : i || "{{", this.suffix = s ? gr(s) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = f ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : f || "", this.nestingPrefix = u ? gr(u) : h || gr("$t("), this.nestingSuffix = g ? gr(g) : m || gr(")"), this.nestingOptionsSeparator = p || ",", this.maxReplaces = w || 1e3, this.alwaysFormat = O !== void 0 ? O : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (r, n) => (r == null ? void 0 : r.source) === n ? (r.lastIndex = 0, r) : new RegExp(n, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(t, r, n, a) {
    var o;
    let i, s, l;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, f = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const w = Vi(r, c, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(w, void 0, n, {
          ...a,
          ...r,
          interpolationkey: h
        }) : w;
      }
      const g = h.split(this.formatSeparator), m = g.shift().trim(), p = g.join(this.formatSeparator).trim();
      return this.format(Vi(r, c, m, this.options.keySeparator, this.options.ignoreJSONStructure), p, n, {
        ...a,
        ...r,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const d = (a == null ? void 0 : a.missingInterpolationHandler) || this.options.missingInterpolationHandler, u = ((o = a == null ? void 0 : a.interpolation) == null ? void 0 : o.skipOnVariables) !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => _a(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? _a(this.escape(h)) : _a(h)
    }].forEach((h) => {
      for (l = 0; i = h.regex.exec(t); ) {
        const g = i[1].trim();
        if (s = f(g), s === void 0)
          if (typeof d == "function") {
            const p = d(t, i, a);
            s = _e(p) ? p : "";
          } else if (a && Object.prototype.hasOwnProperty.call(a, g))
            s = "";
          else if (u) {
            s = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${t}`), s = "";
        else !_e(s) && !this.useRawValueToEscape && (s = Mi(s));
        const m = h.safeValue(s);
        if (t = t.replace(i[0], m), u ? (h.regex.lastIndex += s.length, h.regex.lastIndex -= i[0].length) : h.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, r, n = {}) {
    let a, o, i;
    const s = (l, c) => {
      const f = this.nestingOptionsSeparator;
      if (l.indexOf(f) < 0) return l;
      const d = l.split(new RegExp(`${gr(f)}[ ]*{`));
      let u = `{${d[1]}`;
      l = d[0], u = this.interpolate(u, i);
      const h = u.match(/'/g), g = u.match(/"/g);
      (((h == null ? void 0 : h.length) ?? 0) % 2 === 0 && !g || ((g == null ? void 0 : g.length) ?? 0) % 2 !== 0) && (u = u.replace(/'/g, '"'));
      try {
        i = JSON.parse(u), c && (i = {
          ...c,
          ...i
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${f}${u}`;
      }
      return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, l;
    };
    for (; a = this.nestingRegexp.exec(t); ) {
      let l = [];
      i = {
        ...n
      }, i = i.replace && !_e(i.replace) ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
      const c = /{.*}/.test(a[1]) ? a[1].lastIndexOf("}") + 1 : a[1].indexOf(this.formatSeparator);
      if (c !== -1 && (l = a[1].slice(c).split(this.formatSeparator).map((f) => f.trim()).filter(Boolean), a[1] = a[1].slice(0, c)), o = r(s.call(this, a[1].trim(), i), i), o && a[0] === t && !_e(o)) return o;
      _e(o) || (o = Mi(o)), o || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${t}`), o = ""), l.length && (o = l.reduce((f, d) => this.format(f, d, n.lng, {
        ...n,
        interpolationkey: a[1].trim()
      }), o.trim())), t = t.replace(a[0], o), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const Lc = (e) => {
  let t = e.toLowerCase().trim();
  const r = {};
  if (e.indexOf("(") > -1) {
    const n = e.split("(");
    t = n[0].toLowerCase().trim();
    const a = n[1].substring(0, n[1].length - 1);
    t === "currency" && a.indexOf(":") < 0 ? r.currency || (r.currency = a.trim()) : t === "relativetime" && a.indexOf(":") < 0 ? r.range || (r.range = a.trim()) : a.split(";").forEach((o) => {
      if (o) {
        const [i, ...s] = o.split(":"), l = s.join(":").trim().replace(/^'+|'+$/g, ""), c = i.trim();
        r[c] || (r[c] = l), l === "false" && (r[c] = !1), l === "true" && (r[c] = !0), isNaN(l) || (r[c] = parseInt(l, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: r
  };
}, ji = (e) => {
  const t = {};
  return (r, n, a) => {
    let o = a;
    a && a.interpolationkey && a.formatParams && a.formatParams[a.interpolationkey] && a[a.interpolationkey] && (o = {
      ...o,
      [a.interpolationkey]: void 0
    });
    const i = n + JSON.stringify(o);
    let s = t[i];
    return s || (s = e(hn(n), a), t[i] = s), s(r);
  };
}, Mc = (e) => (t, r, n) => e(hn(r), n)(t);
class Ic {
  constructor(t = {}) {
    this.logger = Gt.create("formatter"), this.options = t, this.init(t);
  }
  init(t, r = {
    interpolation: {}
  }) {
    this.formatSeparator = r.interpolation.formatSeparator || ",";
    const n = r.cacheInBuiltFormats ? ji : Mc;
    this.formats = {
      number: n((a, o) => {
        const i = new Intl.NumberFormat(a, {
          ...o
        });
        return (s) => i.format(s);
      }),
      currency: n((a, o) => {
        const i = new Intl.NumberFormat(a, {
          ...o,
          style: "currency"
        });
        return (s) => i.format(s);
      }),
      datetime: n((a, o) => {
        const i = new Intl.DateTimeFormat(a, {
          ...o
        });
        return (s) => i.format(s);
      }),
      relativetime: n((a, o) => {
        const i = new Intl.RelativeTimeFormat(a, {
          ...o
        });
        return (s) => i.format(s, o.range || "day");
      }),
      list: n((a, o) => {
        const i = new Intl.ListFormat(a, {
          ...o
        });
        return (s) => i.format(s);
      })
    };
  }
  add(t, r) {
    this.formats[t.toLowerCase().trim()] = r;
  }
  addCached(t, r) {
    this.formats[t.toLowerCase().trim()] = ji(r);
  }
  format(t, r, n, a = {}) {
    const o = r.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((i) => i.indexOf(")") > -1)) {
      const i = o.findIndex((s) => s.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, i)].join(this.formatSeparator);
    }
    return o.reduce((i, s) => {
      var l;
      const {
        formatName: c,
        formatOptions: f
      } = Lc(s);
      if (this.formats[c]) {
        let d = i;
        try {
          const u = ((l = a == null ? void 0 : a.formatParams) == null ? void 0 : l[a.interpolationkey]) || {}, h = u.locale || u.lng || a.locale || a.lng || n;
          d = this.formats[c](i, h, {
            ...f,
            ...a,
            ...u
          });
        } catch (u) {
          this.logger.warn(u);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return i;
    }, t);
  }
}
const Pc = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class Fc extends fa {
  constructor(t, r, n, a = {}) {
    var o, i;
    super(), this.backend = t, this.store = r, this.services = n, this.languageUtils = n.languageUtils, this.options = a, this.logger = Gt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], (i = (o = this.backend) == null ? void 0 : o.init) == null || i.call(o, n, a.backend, a);
  }
  queueLoad(t, r, n, a) {
    const o = {}, i = {}, s = {}, l = {};
    return t.forEach((c) => {
      let f = !0;
      r.forEach((d) => {
        const u = `${c}|${d}`;
        !n.reload && this.store.hasResourceBundle(c, d) ? this.state[u] = 2 : this.state[u] < 0 || (this.state[u] === 1 ? i[u] === void 0 && (i[u] = !0) : (this.state[u] = 1, f = !1, i[u] === void 0 && (i[u] = !0), o[u] === void 0 && (o[u] = !0), l[d] === void 0 && (l[d] = !0)));
      }), f || (s[c] = !0);
    }), (Object.keys(o).length || Object.keys(i).length) && this.queue.push({
      pending: i,
      pendingCount: Object.keys(i).length,
      loaded: {},
      errors: [],
      callback: a
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(i),
      toLoadLanguages: Object.keys(s),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(t, r, n) {
    const a = t.split("|"), o = a[0], i = a[1];
    r && this.emit("failedLoading", o, i, r), !r && n && this.store.addResourceBundle(o, i, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = r ? -1 : 2, r && n && (this.state[t] = 0);
    const s = {};
    this.queue.forEach((l) => {
      Ec(l.loaded, [o], i), Pc(l, t), r && l.errors.push(r), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        s[c] || (s[c] = {});
        const f = l.loaded[c];
        f.length && f.forEach((d) => {
          s[c][d] === void 0 && (s[c][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", s), this.queue = this.queue.filter((l) => !l.done);
  }
  read(t, r, n, a = 0, o = this.retryTimeout, i) {
    if (!t.length) return i(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: r,
        fcName: n,
        tried: a,
        wait: o,
        callback: i
      });
      return;
    }
    this.readingCalls++;
    const s = (c, f) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (c && f && a < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, r, n, a + 1, o * 2, i);
        }, o);
        return;
      }
      i(c, f);
    }, l = this.backend[n].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(t, r);
        c && typeof c.then == "function" ? c.then((f) => s(null, f)).catch(s) : s(null, c);
      } catch (c) {
        s(c);
      }
      return;
    }
    return l(t, r, s);
  }
  prepareLoading(t, r, n = {}, a) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
    _e(t) && (t = this.languageUtils.toResolveHierarchy(t)), _e(r) && (r = [r]);
    const o = this.queueLoad(t, r, n, a);
    if (!o.toLoad.length)
      return o.pending.length || a(), null;
    o.toLoad.forEach((i) => {
      this.loadOne(i);
    });
  }
  load(t, r, n) {
    this.prepareLoading(t, r, {}, n);
  }
  reload(t, r, n) {
    this.prepareLoading(t, r, {
      reload: !0
    }, n);
  }
  loadOne(t, r = "") {
    const n = t.split("|"), a = n[0], o = n[1];
    this.read(a, o, "read", void 0, void 0, (i, s) => {
      i && this.logger.warn(`${r}loading namespace ${o} for language ${a} failed`, i), !i && s && this.logger.log(`${r}loaded namespace ${o} for language ${a}`, s), this.loaded(t, i, s);
    });
  }
  saveMissing(t, r, n, a, o, i = {}, s = () => {
  }) {
    var l, c, f, d, u;
    if ((c = (l = this.services) == null ? void 0 : l.utils) != null && c.hasLoadedNamespace && !((d = (f = this.services) == null ? void 0 : f.utils) != null && d.hasLoadedNamespace(r))) {
      this.logger.warn(`did not save key "${n}" as the namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if ((u = this.backend) != null && u.create) {
        const h = {
          ...i,
          isUpdate: o
        }, g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let m;
            g.length === 5 ? m = g(t, r, n, a, h) : m = g(t, r, n, a), m && typeof m.then == "function" ? m.then((p) => s(null, p)).catch(s) : s(null, m);
          } catch (m) {
            s(m);
          }
        else
          g(t, r, n, a, s, h);
      }
      !t || !t[0] || this.store.addResource(t[0], r, n, a);
    }
  }
}
const Oa = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (e) => {
    let t = {};
    if (typeof e[1] == "object" && (t = e[1]), _e(e[1]) && (t.defaultValue = e[1]), _e(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const r = e[3] || e[2];
      Object.keys(r).forEach((n) => {
        t[n] = r[n];
      });
    }
    return t;
  },
  interpolation: {
    escapeValue: !0,
    format: (e) => e,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), Gi = (e) => {
  var t, r;
  return _e(e.ns) && (e.ns = [e.ns]), _e(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), _e(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), ((r = (t = e.supportedLngs) == null ? void 0 : t.indexOf) == null ? void 0 : r.call(t, "cimode")) < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate), e;
}, An = () => {
}, Uc = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
    typeof e[t] == "function" && (e[t] = e[t].bind(e));
  });
}, es = "__i18next_supportNoticeShown", $c = () => typeof globalThis < "u" && !!globalThis[es], Bc = () => {
  typeof globalThis < "u" && (globalThis[es] = !0);
}, zc = (e) => {
  var t, r, n, a, o, i, s, l, c, f, d, u, h;
  return !!(((n = (r = (t = e == null ? void 0 : e.modules) == null ? void 0 : t.backend) == null ? void 0 : r.name) == null ? void 0 : n.indexOf("Locize")) > 0 || ((s = (i = (o = (a = e == null ? void 0 : e.modules) == null ? void 0 : a.backend) == null ? void 0 : o.constructor) == null ? void 0 : i.name) == null ? void 0 : s.indexOf("Locize")) > 0 || (c = (l = e == null ? void 0 : e.options) == null ? void 0 : l.backend) != null && c.backends && e.options.backend.backends.some((g) => {
    var m, p, w;
    return ((m = g == null ? void 0 : g.name) == null ? void 0 : m.indexOf("Locize")) > 0 || ((w = (p = g == null ? void 0 : g.constructor) == null ? void 0 : p.name) == null ? void 0 : w.indexOf("Locize")) > 0;
  }) || (d = (f = e == null ? void 0 : e.options) == null ? void 0 : f.backend) != null && d.projectId || (h = (u = e == null ? void 0 : e.options) == null ? void 0 : u.backend) != null && h.backendOptions && e.options.backend.backendOptions.some((g) => g == null ? void 0 : g.projectId));
};
class on extends fa {
  constructor(t = {}, r) {
    if (super(), this.options = Gi(t), this.services = {}, this.logger = Gt, this.modules = {
      external: []
    }, Uc(this), r && !this.isInitialized && !t.isClone) {
      if (!this.options.initAsync)
        return this.init(t, r), this;
      setTimeout(() => {
        this.init(t, r);
      }, 0);
    }
  }
  init(t = {}, r) {
    this.isInitializing = !0, typeof t == "function" && (r = t, t = {}), t.defaultNS == null && t.ns && (_e(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const n = Oa();
    this.options = {
      ...n,
      ...this.options,
      ...Gi(t)
    }, this.options.interpolation = {
      ...n.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = n.overloadTranslationOptionHandler), this.options.showSupportNotice !== !1 && !zc(this) && !$c() && (typeof console < "u" && typeof console.info < "u" && console.info("🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"), Bc());
    const a = (s) => s ? typeof s == "function" ? new s() : s : null;
    if (!this.options.isClone) {
      this.modules.logger ? Gt.init(a(this.modules.logger), this.options) : Gt.init(null, this.options);
      let s;
      this.modules.formatter ? s = this.modules.formatter : s = Ic;
      const l = new Bi(this.options);
      this.store = new Ui(this.options.resources, this.options);
      const c = this.services;
      c.logger = Gt, c.resourceStore = this.store, c.languageUtils = l, c.pluralResolver = new Nc(l, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), s && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (c.formatter = a(s), c.formatter.init && c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new Hi(this.options), c.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, c.backendConnector = new Fc(a(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", (f, ...d) => {
        this.emit(f, ...d);
      }), this.modules.languageDetector && (c.languageDetector = a(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = a(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new Wn(this.services, this.options), this.translator.on("*", (f, ...d) => {
        this.emit(f, ...d);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = An), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      s.length > 0 && s[0] !== "dev" && (this.options.lng = s[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((s) => {
      this[s] = (...l) => this.store[s](...l);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((s) => {
      this[s] = (...l) => (this.store[s](...l), this);
    });
    const o = Zr(), i = () => {
      const s = (l, c) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(c), r(l, c);
      };
      if (this.languages && !this.isInitialized) return s(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, s);
    };
    return this.options.resources || !this.options.initAsync ? i() : setTimeout(i, 0), o;
  }
  loadResources(t, r = An) {
    var n, a;
    let o = r;
    const i = _e(t) ? t : this.language;
    if (typeof t == "function" && (o = t), !this.options.resources || this.options.partialBundledLanguages) {
      if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return o();
      const s = [], l = (c) => {
        !c || c === "cimode" || this.services.languageUtils.toResolveHierarchy(c).forEach((f) => {
          f !== "cimode" && s.indexOf(f) < 0 && s.push(f);
        });
      };
      i ? l(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => l(c)), (a = (n = this.options.preload) == null ? void 0 : n.forEach) == null || a.call(n, (c) => l(c)), this.services.backendConnector.load(s, this.options.ns, (c) => {
        !c && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), o(c);
      });
    } else
      o(null);
  }
  reloadResources(t, r, n) {
    const a = Zr();
    return typeof t == "function" && (n = t, t = void 0), typeof r == "function" && (n = r, r = void 0), t || (t = this.languages), r || (r = this.options.ns), n || (n = An), this.services.backendConnector.reload(t, r, (o) => {
      a.resolve(), n(o);
    }), a;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Qo.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) {
      for (let r = 0; r < this.languages.length; r++) {
        const n = this.languages[r];
        if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(t) < 0 && this.store.hasLanguageSomeTranslations(t) && (this.resolvedLanguage = t, this.languages.unshift(t));
    }
  }
  changeLanguage(t, r) {
    this.isLanguageChangingTo = t;
    const n = Zr();
    this.emit("languageChanging", t);
    const a = (s) => {
      this.language = s, this.languages = this.services.languageUtils.toResolveHierarchy(s), this.resolvedLanguage = void 0, this.setResolvedLanguage(s);
    }, o = (s, l) => {
      l ? this.isLanguageChangingTo === t && (a(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, n.resolve((...c) => this.t(...c)), r && r(s, (...c) => this.t(...c));
    }, i = (s) => {
      var l, c;
      !t && !s && this.services.languageDetector && (s = []);
      const f = _e(s) ? s : s && s[0], d = this.store.hasLanguageSomeTranslations(f) ? f : this.services.languageUtils.getBestMatchFromCodes(_e(s) ? [s] : s);
      d && (this.language || a(d), this.translator.language || this.translator.changeLanguage(d), (c = (l = this.services.languageDetector) == null ? void 0 : l.cacheUserLanguage) == null || c.call(l, d)), this.loadResources(d, (u) => {
        o(u, d);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? i(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(i) : this.services.languageDetector.detect(i) : i(t), n;
  }
  getFixedT(t, r, n) {
    const a = (o, i, ...s) => {
      let l;
      typeof i != "object" ? l = this.options.overloadTranslationOptionHandler([o, i].concat(s)) : l = {
        ...i
      }, l.lng = l.lng || a.lng, l.lngs = l.lngs || a.lngs, l.ns = l.ns || a.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || n || a.keyPrefix);
      const c = this.options.keySeparator || ".";
      let f;
      return l.keyPrefix && Array.isArray(o) ? f = o.map((d) => (typeof d == "function" && (d = an(d, {
        ...this.options,
        ...i
      })), `${l.keyPrefix}${c}${d}`)) : (typeof o == "function" && (o = an(o, {
        ...this.options,
        ...i
      })), f = l.keyPrefix ? `${l.keyPrefix}${c}${o}` : o), this.t(f, l);
    };
    return _e(t) ? a.lng = t : a.lngs = t, a.ns = r, a.keyPrefix = n, a;
  }
  t(...t) {
    var r;
    return (r = this.translator) == null ? void 0 : r.translate(...t);
  }
  exists(...t) {
    var r;
    return (r = this.translator) == null ? void 0 : r.exists(...t);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t, r = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const n = r.lng || this.resolvedLanguage || this.languages[0], a = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const i = (s, l) => {
      const c = this.services.backendConnector.state[`${s}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (r.precheck) {
      const s = r.precheck(this, i);
      if (s !== void 0) return s;
    }
    return !!(this.hasResourceBundle(n, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || i(n, t) && (!a || i(o, t)));
  }
  loadNamespaces(t, r) {
    const n = Zr();
    return this.options.ns ? (_e(t) && (t = [t]), t.forEach((a) => {
      this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
    }), this.loadResources((a) => {
      n.resolve(), r && r(a);
    }), n) : (r && r(), Promise.resolve());
  }
  loadLanguages(t, r) {
    const n = Zr();
    _e(t) && (t = [t]);
    const a = this.options.preload || [], o = t.filter((i) => a.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i));
    return o.length ? (this.options.preload = a.concat(o), this.loadResources((i) => {
      n.resolve(), r && r(i);
    }), n) : (r && r(), Promise.resolve());
  }
  dir(t) {
    var r, n;
    if (t || (t = this.resolvedLanguage || (((r = this.languages) == null ? void 0 : r.length) > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    try {
      const i = new Intl.Locale(t);
      if (i && i.getTextInfo) {
        const s = i.getTextInfo();
        if (s && s.direction) return s.direction;
      }
    } catch {
    }
    const a = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], o = ((n = this.services) == null ? void 0 : n.languageUtils) || new Bi(Oa());
    return t.toLowerCase().indexOf("-latn") > 1 ? "ltr" : a.indexOf(o.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(t = {}, r) {
    const n = new on(t, r);
    return n.createInstance = on.createInstance, n;
  }
  cloneInstance(t = {}, r = An) {
    const n = t.forkResourceStore;
    n && delete t.forkResourceStore;
    const a = {
      ...this.options,
      ...t,
      isClone: !0
    }, o = new on(a);
    if ((t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)), ["store", "services", "language"].forEach((i) => {
      o[i] = this[i];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, n) {
      const i = Object.keys(this.store.data).reduce((s, l) => (s[l] = {
        ...this.store.data[l]
      }, s[l] = Object.keys(s[l]).reduce((c, f) => (c[f] = {
        ...s[l][f]
      }, c), s[l]), s), {});
      o.store = new Ui(i, a), o.services.resourceStore = o.store;
    }
    if (t.interpolation) {
      const i = {
        ...Oa().interpolation,
        ...this.options.interpolation,
        ...t.interpolation
      }, s = {
        ...a,
        interpolation: i
      };
      o.services.interpolator = new Hi(s);
    }
    return o.translator = new Wn(o.services, a), o.translator.on("*", (i, ...s) => {
      o.emit(i, ...s);
    }), o.init(a, r), o.translator.options = a, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const Xe = on.createInstance();
Xe.createInstance;
Xe.dir;
Xe.init;
Xe.loadResources;
Xe.reloadResources;
Xe.use;
Xe.changeLanguage;
Xe.getFixedT;
Xe.t;
Xe.exists;
Xe.setDefaultNamespace;
Xe.hasLoadedNamespace;
Xe.loadNamespaces;
Xe.loadLanguages;
const ts = (e) => {
  var t, r;
  !((t = e == null ? void 0 : e.i18n) != null && t.language) || !((r = e == null ? void 0 : e.i18n) != null && r.translations) || Xe.language === e.i18n.language && Xe.isInitialized || Xe.init({
    lng: e.i18n.language,
    fallbackLng: "en",
    resources: e.i18n.translations,
    interpolation: {
      escapeValue: !1
    }
  });
}, en = (e) => {
  const t = {};
  return (r) => {
    const n = JSON.stringify(r);
    let a = t[n];
    return a || (a = e(r), t[n] = a, a);
  };
}, Wc = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}$/, Vc = (e) => !!(e && Wc.test(e)), Hc = (e, t) => {
  if (!e || !e.includes("|")) return Xe.t(e, t);
  const [r, n] = e.split("|", 2).map((a) => a.trim());
  return Xe.t(
    [r, n].filter((a) => !!a),
    t
  );
}, Vn = {
  MARKDOWN: "Markdown",
  JSON: "Json"
}, rs = ic("DisplayFormat", {
  label: "Display format",
  optionLabel: (e) => e
});
Xo(rs, Vn.MARKDOWN);
Xo(rs, Vn.JSON);
const Vt = (e, t, r) => {
  var n, a;
  return ((n = e.inputs) == null ? void 0 : n[t]) ?? ((a = e.meta) == null ? void 0 : a[r ?? t]);
}, jc = (e) => {
  const t = en(
    (i) => e.formatter.numberFormatter(e, i)
  ), r = en(
    (i) => e.formatter.dataNumberFormatter(e, i)
  ), n = en(
    (i) => e.formatter.dateTimeFormatter(e, i)
  ), a = en(
    (i) => e.formatter.dataDateTimeFormatter(e, i)
  ), o = en(
    (i) => e.formatter.dataOthersFormatter(e, i)
  );
  return {
    string: (i) => e.formatter.stringFormatter().format(i),
    number: (i, s) => t(s).format(i),
    dateTime: (i, s) => n(s).format(i),
    dimensionOrMeasureTitle: (i) => {
      const s = Vt(i, "displayName");
      if (s)
        return s.includes("|") ? Hc(s) : s;
      const l = o(i).format(i.name);
      return l === i.name ? i.title ?? i.name : l;
    },
    data: (i, s) => {
      let l = s;
      if (s == null)
        return Vt(i, "displayNullAs") ?? "";
      const c = Vt(i, "displayFormat");
      if (c === Vn.JSON)
        return JSON.stringify(s, null, 2);
      if (c === Vn.MARKDOWN)
        return s;
      if (typeof s == "object")
        return JSON.stringify(s);
      i.nativeType === "number" && (l = r(i).format(s)), i.nativeType === "time" && Vc(s) && (l = a(i).format(new Date(s))), (i.nativeType === "boolean" || i.nativeType === "string") && (l = o(i).format(s));
      const f = Vt(i, "prefix", "pretext") || "", d = Vt(i, "suffix", "posttext") || "", u = `${f}${l}${d}`, h = Vt(i, "maxCharacters");
      return h != null ? u.length <= h ? u : u.substring(0, h) + "..." : u;
    }
  };
}, li = (e) => {
  try {
    return new Intl.Locale(e);
  } catch {
    return new Intl.Locale("en-US");
  }
}, Gc = (e, t) => {
  try {
    return new Intl.NumberFormat(e, {
      style: "currency",
      currency: t
    }), !0;
  } catch {
    return !1;
  }
}, Kc = () => ({
  format: (e) => Xe.t(e)
}), Yc = {}, Jc = (e, t = e.formatter.defaultNumberFormatterOptions) => {
  const r = li(e.formatter.locale), n = t == null ? void 0 : t.currency;
  return n && !Gc(r, n) ? {
    format: (a) => `${n} ${Intl.NumberFormat(r, { ...t, currency: void 0, style: void 0 }).format(a)}`
  } : {
    format: Intl.NumberFormat(r, t ?? e.formatter.defaultNumberFormatterOptions).format
  };
}, Xc = (e, t) => {
  const r = Vt(t, "currency"), n = Vt(t, "decimalPlaces"), a = n ?? void 0, o = {
    style: r ? "currency" : void 0,
    currency: r || void 0,
    notation: Vt(t, "abbreviateLargeNumber") ?? !1 ? "compact" : void 0,
    minimumFractionDigits: a,
    maximumFractionDigits: a
  };
  return e.formatter.numberFormatter(e, o);
}, qc = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}, Qc = (e, t) => {
  const r = li(e.formatter.locale), { year: n, month: a, day: o, hour: i, minute: s, second: l } = t ?? e.formatter.defaultDateTimeFormatOptions;
  return new Intl.DateTimeFormat(r, { year: n, month: a, day: o, hour: i, minute: s, second: l });
}, Zc = (e, t) => {
  ts(e);
  const r = li(e.formatter.locale), n = Vt(t, "granularity"), { year: a, month: o, day: i, hour: s, minute: l, second: c } = e.formatter.defaultDateTimeFormatOptions;
  switch (n) {
    case "year":
      return new Intl.DateTimeFormat(r, { year: a });
    case "quarter":
      return {
        format: (f) => Xe.t("granularity.quarter", {
          quarter: Math.floor(f.getMonth() / 3) + 1,
          year: f.getFullYear()
        })
      };
    case "month":
      return new Intl.DateTimeFormat(r, { year: a, month: o });
    case "week":
    case "day":
      return new Intl.DateTimeFormat(r, { year: a, month: o, day: i });
    case "hour":
      return new Intl.DateTimeFormat(r, { year: a, month: o, day: i, hour: s });
    case "minute":
      return new Intl.DateTimeFormat(r, { year: a, month: o, day: i, hour: s, minute: l });
    case "second":
    default:
      return new Intl.DateTimeFormat(r, { year: a, month: o, day: i, hour: s, minute: l, second: c });
  }
}, ef = (e, t) => {
  ts(e);
  const r = t.name, n = nc(t) ? "dimension" : "measure";
  return {
    format: (a) => {
      if (a == null)
        return "";
      const o = a.toString();
      return Xe.t(
        [
          `${n}.${r}.${o}`,
          // e.g. 'Dimension.customers.country.Germany': 'Deutschland',
          `${n}.${o}`,
          // e.g. 'Dimension.Germany': 'Germany',
          o
          // e.g. 'Germany'
        ],
        {
          defaultValue: o,
          value: o,
          type: t.nativeType,
          name: r
        }
      );
    }
  };
}, tf = {
  locale: navigator.language,
  defaultNumberFormatterOptions: Yc,
  defaultDateTimeFormatOptions: qc,
  stringFormatter: Kc,
  numberFormatter: Jc,
  dateTimeFormatter: Qc,
  dataNumberFormatter: Xc,
  dataDateTimeFormatter: Zc,
  dataOthersFormatter: ef
};
var rf = {
  "--em-core-border-radius--000": "0px",
  "--em-core-border-radius--050": "2px",
  "--em-core-border-radius--100": "4px",
  "--em-core-border-radius--150": "6px",
  "--em-core-border-radius--200": "8px",
  "--em-core-border-radius--300": "12px",
  "--em-core-border-radius--400": "32px",
  "--em-core-border-radius--500": "9999px",
  "--em-core-border-width--000": "0px",
  "--em-core-border-width--025": "1px",
  "--em-core-border-width--050": "2px",
  "--em-core-border-width--100": "4px",
  "--em-core-color-gray--0000": "rgb(255 255 255)",
  "--em-core-color-gray--0050": "rgb(247 247 248)",
  "--em-core-color-gray--0100": "rgb(237 237 241)",
  "--em-core-color-gray--0200": "rgb(228 228 234)",
  "--em-core-color-gray--0300": "rgb(210 210 213)",
  "--em-core-color-gray--0400": "rgb(184 184 189)",
  "--em-core-color-gray--0500": "rgb(144 144 152)",
  "--em-core-color-gray--0600": "rgb(114 114 121)",
  "--em-core-color-gray--0700": "rgb(92 92 102)",
  "--em-core-color-gray--0800": "rgb(49 49 61)",
  "--em-core-color-gray--0900": "rgb(33 33 41)",
  "--em-core-color-gray--1000": "rgb(0 0 0)",
  "--em-core-font-family--base": "inter",
  "--em-core-font-family--code": "monospace",
  "--em-core-font-size--md": "16px",
  "--em-core-font-size--sm": "14px",
  "--em-core-font-size--xl": "20px",
  "--em-core-font-size--xs": "12px",
  "--em-core-font-size--xxl": "32px",
  "--em-core-font-weight--bold": "700",
  "--em-core-font-weight--medium": "500",
  "--em-core-font-weight--regular": "400",
  "--em-core-line-height--l": "19px",
  "--em-core-line-height--md": "16px",
  "--em-core-line-height--sm": "14px",
  "--em-core-line-height--xl": "38px",
  "--em-core-shadow-blur": "40px",
  "--em-core-shadow-color": "rgb(33 33 41 / 25%)",
  "--em-core-shadow-position-x": "0px",
  "--em-core-shadow-position-y": "1px",
  "--em-core-shadow-spread": "0px",
  "--em-core-size--0000": "0px",
  "--em-core-size--0050": "2px",
  "--em-core-size--0100": "4px",
  "--em-core-size--0150": "6px",
  "--em-core-size--0200": "8px",
  "--em-core-size--0300": "12px",
  "--em-core-size--0400": "16px",
  "--em-core-size--0500": "20px",
  "--em-core-size--0600": "24px",
  "--em-core-size--0700": "28px",
  "--em-core-size--0800": "32px",
  "--em-core-size--0900": "36px",
  "--em-core-size--1000": "40px",
  "--em-core-size--1200": "48px",
  "--em-core-size--1600": "64px",
  "--em-core-size--2000": "80px",
  "--em-core-spacing--0000": "0px",
  "--em-core-spacing--0050": "2px",
  "--em-core-spacing--0100": "4px",
  "--em-core-spacing--0150": "6px",
  "--em-core-spacing--0200": "8px",
  "--em-core-spacing--0300": "12px",
  "--em-core-spacing--0400": "16px",
  "--em-core-spacing--0500": "20px",
  "--em-core-spacing--0600": "24px",
  "--em-core-spacing--0700": "28px",
  "--em-core-spacing--0800": "32px",
  "--em-core-spacing--0900": "36px",
  "--em-core-spacing--1000": "40px",
  "--em-core-spacing--1200": "48px",
  "--em-core-spacing--1600": "64px",
  "--em-core-spacing--2000": "80px"
}, nf = {
  "--em-sem-background": "var(--em-core-color-gray--0050)",
  "--em-sem-background--inverted": "var(--em-core-color-gray--0900)",
  "--em-sem-background--light": "var(--em-core-color-gray--0100)",
  "--em-sem-background--muted": "var(--em-core-color-gray--0300)",
  "--em-sem-background--neutral": "var(--em-core-color-gray--0000)",
  "--em-sem-background--subtle": "var(--em-core-color-gray--0200)",
  "--em-sem-chart-color--1": "rgb(255 84 0)",
  "--em-sem-chart-color--10": "rgb(141 153 174)",
  "--em-sem-chart-color--2": "rgb(58 134 255)",
  "--em-sem-chart-color--3": "rgb(255 138 0)",
  "--em-sem-chart-color--4": "rgb(255 47 109)",
  "--em-sem-chart-color--5": "rgb(46 196 182)",
  "--em-sem-chart-color--6": "rgb(106 76 255)",
  "--em-sem-chart-color--7": "rgb(131 56 236)",
  "--em-sem-chart-color--8": "rgb(0 180 216)",
  "--em-sem-chart-color--9": "rgb(76 175 80)",
  "--em-sem-status-error-background": "rgb(246 226 226)",
  "--em-sem-status-error-text": "rgb(188 16 16)",
  "--em-sem-status-success-background": "rgb(225 240 233)",
  "--em-sem-status-success-text": "rgb(15 149 90)",
  "--em-sem-text": "var(--em-core-color-gray--0900)",
  "--em-sem-text--inverted": "var(--em-core-color-gray--0000)",
  "--em-sem-text--muted": "var(--em-core-color-gray--0700)",
  "--em-sem-text--neutral": "var(--em-core-color-gray--1000)",
  "--em-sem-text--subtle": "var(--em-core-color-gray--0400)"
}, af = {
  "--em-actionicon-background": "var(--em-sem-background--light)",
  "--em-actionicon-background--active": "var(--em-sem-background--muted)",
  "--em-actionicon-background--hover": "var(--em-sem-background--subtle)",
  "--em-actionicon-border-color": "rgb(255 255 255 / 0%)",
  "--em-actionicon-border-color--active": "rgb(255 255 255 / 0%)",
  "--em-actionicon-border-color--disabled": "rgb(255 255 255 / 0%)",
  "--em-actionicon-border-color--hover": "rgb(255 255 255 / 0%)",
  "--em-actionicon-border-radius": "var(--em-core-border-radius--500)",
  "--em-actionicon-border-width": "0px",
  "--em-actionicon-color": "var(--em-sem-text)",
  "--em-actionicon-color--disabled": "var(--em-sem-text--subtle)",
  "--em-actionicon-height": "var(--em-core-size--0800)",
  "--em-actionicon-icon-size": "var(--em-core-size--0400)",
  "--em-actionicon-width": "var(--em-core-size--0500)",
  "--em-barchart-border-radius": "var(--em-core-border-radius--150)",
  "--em-barchart-label-gap": "var(--em-core-spacing--0200)",
  "--em-button-background--disabled": "var(--em-sem-background--light)",
  "--em-button-background--primary": "var(--em-sem-text--muted)",
  "--em-button-background--primary--active": "var(--em-sem-text--neutral)",
  "--em-button-background--primary--hover": "var(--em-sem-text)",
  "--em-button-background--secondary": "var(--em-sem-background--light)",
  "--em-button-background--secondary--active": "var(--em-sem-background--muted)",
  "--em-button-background--secondary--hover": "var(--em-sem-background--subtle)",
  "--em-button-border-color--primary": "rgb(255 255 255 / 0%)",
  "--em-button-border-color--primary--active": "rgb(255 255 255 / 0%)",
  "--em-button-border-color--primary--disabled": "rgb(255 255 255 / 0%)",
  "--em-button-border-color--primary--hover": "rgb(255 255 255 / 0%)",
  "--em-button-border-color--secondary": "rgb(255 255 255 / 0%)",
  "--em-button-border-color--secondary--active": "rgb(255 255 255 / 0%)",
  "--em-button-border-color--secondary--disabled": "rgb(255 255 255 / 0%)",
  "--em-button-border-color--secondary--hover": "rgb(255 255 255 / 0%)",
  "--em-button-border-radius": "var(--em-core-border-radius--500)",
  "--em-button-border-width": "0px",
  "--em-button-color--disabled": "var(--em-sem-text--subtle)",
  "--em-button-color--primary": "var(--em-sem-text--inverted)",
  "--em-button-color--secondary": "var(--em-sem-text)",
  "--em-button-font-family": "var(--em-core-font-family--base)",
  "--em-button-font-size--medium": "var(--em-core-font-size--sm)",
  "--em-button-font-size--small": "var(--em-core-font-size--xs)",
  "--em-button-font-weight--medium": "var(--em-core-font-weight--bold)",
  "--em-button-font-weight--small": "var(--em-core-font-weight--medium)",
  "--em-button-height--medium": "var(--em-core-size--1000)",
  "--em-button-height--small": "var(--em-core-size--0800)",
  "--em-button-icon-size": "var(--em-core-size--0400)",
  "--em-button-label-padding": "var(--em-core-spacing--0200)",
  "--em-button-line-height--medium": "var(--em-core-line-height--md)",
  "--em-button-line-height--small": "var(--em-core-line-height--sm)",
  "--em-button-padding-left-right--medium": "var(--em-core-spacing--0300)",
  "--em-button-padding-left-right--small": "var(--em-core-spacing--0150)",
  "--em-buttonicon-background--primary": "var(--em-sem-text--muted)",
  "--em-buttonicon-background--primary--active": "var(--em-sem-text--neutral)",
  "--em-buttonicon-background--primary--disabled": "var(--em-sem-background--light)",
  "--em-buttonicon-background--primary--hover": "var(--em-sem-text)",
  "--em-buttonicon-background--secondary": "var(--em-sem-background--light)",
  "--em-buttonicon-background--secondary--active": "var(--em-sem-background--muted)",
  "--em-buttonicon-background--secondary--disabled": "var(--em-sem-background--light)",
  "--em-buttonicon-background--secondary--hover": "var(--em-sem-background--subtle)",
  "--em-buttonicon-border-color--primary": "rgb(255 255 255 / 0%)",
  "--em-buttonicon-border-color--primary--active": "rgb(255 255 255 / 0%)",
  "--em-buttonicon-border-color--primary--disabled": "rgb(255 255 255 / 0%)",
  "--em-buttonicon-border-color--primary--hover": "rgb(255 255 255 / 0%)",
  "--em-buttonicon-border-color--secondary": "rgb(255 255 255 / 0%)",
  "--em-buttonicon-border-color--secondary--active": "rgb(255 255 255 / 0%)",
  "--em-buttonicon-border-color--secondary--disabled": "rgb(255 255 255 / 0%)",
  "--em-buttonicon-border-color--secondary--hover": "rgb(255 255 255 / 0%)",
  "--em-buttonicon-border-radius": "var(--em-core-border-radius--500)",
  "--em-buttonicon-border-width": "0px",
  "--em-buttonicon-color--disabled": "var(--em-sem-text--subtle)",
  "--em-buttonicon-color--primary": "var(--em-sem-text--inverted)",
  "--em-buttonicon-color--secondary": "var(--em-sem-text)",
  "--em-buttonicon-height--medium": "var(--em-core-size--1000)",
  "--em-buttonicon-height--small": "var(--em-core-size--0800)",
  "--em-buttonicon-icon-size": "var(--em-core-size--0400)",
  "--em-buttonicon-width--medium": "var(--em-core-size--1000)",
  "--em-buttonicon-width--small": "var(--em-core-size--0800)",
  "--em-card-background": "var(--em-sem-background)",
  "--em-card-border-color": "rgb(255 255 255 / 0%)",
  "--em-card-border-radius": "var(--em-core-border-radius--400)",
  "--em-card-border-width": "0px",
  "--em-card-feedback-color--error": "var(--em-sem-status-error-text)",
  "--em-card-feedback-font-size": "var(--em-core-font-size--sm)",
  "--em-card-feedback-gap": "var(--em-core-spacing--0300)",
  "--em-card-feedback-icon-size": "var(--em-core-size--0400)",
  "--em-card-feedback-line-height": "var(--em-core-line-height--md)",
  "--em-card-feedback-padding-bottom": "var(--em-core-spacing--0800)",
  "--em-card-feedback-subtitle-color": "var(--em-sem-text--muted)",
  "--em-card-feedback-subtitle-font-weight": "var(--em-core-font-weight--regular)",
  "--em-card-feedback-title-color": "var(--em-sem-text)",
  "--em-card-feedback-title-font-weight": "var(--em-core-font-weight--medium)",
  "--em-card-font-family": "var(--em-core-font-family--base)",
  "--em-card-gap": "var(--em-core-spacing--0800)",
  "--em-card-gap--compact": "var(--em-core-spacing--0200)",
  "--em-card-header-gap": "var(--em-core-spacing--0400)",
  "--em-card-header-gap--compact": "var(--em-core-spacing--0100)",
  "--em-card-info-icon-color": "var(--em-sem-text)",
  "--em-card-info-icon-gap": "var(--em-core-spacing--0100)",
  "--em-card-info-icon-size": "var(--em-core-size--0400)",
  "--em-card-loader-background": "var(--em-sem-background--neutral)",
  "--em-card-loader-border-radius": "var(--em-core-border-radius--500)",
  "--em-card-loader-color": "var(--em-sem-text)",
  "--em-card-loader-padding": "var(--em-core-spacing--0100)",
  "--em-card-loader-size": "var(--em-core-size--0600)",
  "--em-card-padding": "var(--em-core-spacing--0800)",
  "--em-card-subtitle-color": "var(--em-sem-text--muted)",
  "--em-card-subtitle-font-size": "var(--em-core-font-size--sm)",
  "--em-card-subtitle-font-weight": "var(--em-core-font-weight--regular)",
  "--em-card-subtitle-line-height": "var(--em-core-line-height--l)",
  "--em-card-title-color": "var(--em-sem-text)",
  "--em-card-title-font-size": "var(--em-core-font-size--md)",
  "--em-card-title-font-weight": "var(--em-core-font-weight--bold)",
  "--em-card-title-line-height": "var(--em-core-line-height--l)",
  "--em-chart-category-color": "var(--em-sem-text--muted)",
  "--em-chart-category-font-family": "var(--em-core-font-family--base)",
  "--em-chart-category-font-size": "var(--em-core-font-size--xs)",
  "--em-chart-category-font-weight": "var(--em-core-font-weight--medium)",
  "--em-chart-category-gap": "var(--em-core-spacing--0100)",
  "--em-chart-category-indicator-border-radius": "var(--em-core-border-radius--500)",
  "--em-chart-category-indicator-color": "var(--em-sem-chart-color--1)",
  "--em-chart-category-line-height": "var(--em-core-line-height--sm)",
  "--em-chart-category-list-gap": "var(--em-core-spacing--0400)",
  "--em-chart-category-size": "var(--em-core-size--0300)",
  "--em-chart-grid-font-family": "var(--em-core-font-family--base)",
  "--em-chart-grid-label-color": "var(--em-sem-text)",
  "--em-chart-grid-label-color--light": "var(--em-sem-background--light)",
  "--em-chart-grid-label-color--muted": "var(--em-sem-text--muted)",
  "--em-chart-grid-label-color--subtle": "var(--em-sem-text--subtle)",
  "--em-chart-grid-label-font-size": "var(--em-core-font-size--xs)",
  "--em-chart-grid-label-font-weight": "var(--em-core-font-weight--regular)",
  "--em-chart-grid-line-color": "var(--em-sem-text)",
  "--em-chart-grid-line-color--light": "var(--em-sem-background--light)",
  "--em-chart-grid-line-color--subtle": "var(--em-sem-text--subtle)",
  "--em-chart-grid-line-width--medium": "2px",
  "--em-chart-grid-line-width--thick": "4px",
  "--em-chart-grid-line-width--thin": "1px",
  "--em-chart-grid-tick-length": "var(--em-core-size--0100)",
  "--em-chart-grid-tick-width": "1px",
  "--em-chart-grid-title-font-size": "var(--em-core-font-size--sm)",
  "--em-chart-grid-title-font-weight": "var(--em-core-font-weight--bold)",
  "--em-chart-label-background": "var(--em-sem-background--neutral)",
  "--em-chart-label-border-radius": "var(--em-core-border-radius--500)",
  "--em-chart-label-color": "var(--em-sem-text)",
  "--em-chart-label-font-family": "var(--em-core-font-family--base)",
  "--em-chart-label-font-size": "var(--em-core-font-size--xs)",
  "--em-chart-label-font-weight": "var(--em-core-font-weight--medium)",
  "--em-chart-label-line-height": "var(--em-core-line-height--sm)",
  "--em-chart-label-padding-left-right": "var(--em-core-spacing--0100)",
  "--em-chart-label-padding-top-bottom": "var(--em-core-spacing--0050)",
  "--em-chart-selectfield-padding-bottom": "var(--em-core-spacing--0400)",
  "--em-chart-tabs-border-color--hover": "var(--em-core-color-gray--0200)",
  "--em-chart-tabs-border-color--selected": "var(--em-core-color-gray--0400)",
  "--em-chart-tabs-border-radius": "var(--em-core-border-radius--300)",
  "--em-chart-tabs-border-width": "var(--em-core-border-width--025)",
  "--em-chart-tabs-color": "var(--em-sem-text--neutral)",
  "--em-chart-tabs-font-family": "var(--em-core-font-family--base)",
  "--em-chart-tabs-gap": "var(--em-core-spacing--0200)",
  "--em-chart-tabs-padding": "var(--em-core-spacing--0300)",
  "--em-chart-tabs-pagination-padding": "var(--em-core-spacing--0100)",
  "--em-chart-tabs-title-font-size": "var(--em-core-font-size--xs)",
  "--em-chart-tabs-title-font-weight": "var(--em-core-font-weight--medium)",
  "--em-chart-tabs-title-line-height": "var(--em-core-line-height--sm)",
  "--em-chart-tabs-value-font-size": "var(--em-core-font-size--xl)",
  "--em-chart-tabs-value-font-weight": "var(--em-core-font-weight--medium)",
  "--em-chart-tabs-value-line-height": "var(--em-core-line-height--l)",
  "--em-chart-tooltip-background": "var(--em-sem-background--inverted)",
  "--em-chart-tooltip-border-radius": "var(--em-core-border-radius--300)",
  "--em-chart-tooltip-family": "var(--em-core-font-family--base)",
  "--em-chart-tooltip-gap": "var(--em-core-spacing--0200)",
  "--em-chart-tooltip-padding": "var(--em-core-spacing--0400)",
  "--em-chart-tooltip-title-color": "var(--em-sem-text--inverted)",
  "--em-chart-tooltip-title-font-size": "var(--em-core-font-size--sm)",
  "--em-chart-tooltip-title-font-weight": "var(--em-core-font-weight--bold)",
  "--em-chart-tooltip-title-line-height": "var(--em-core-line-height--md)",
  "--em-daterangepicker-accent-color": "var(--em-sem-background--inverted)",
  "--em-daterangepicker-chevron--active": "var(--em-sem-background--muted)",
  "--em-daterangepicker-chevron--hover": "var(--em-sem-background--subtle)",
  "--em-daterangepicker-chevron-background": "var(--em-sem-background--light)",
  "--em-daterangepicker-chevron-border-radius": "var(--em-core-border-radius--200)",
  "--em-daterangepicker-chevron-color": "var(--em-sem-text)",
  "--em-daterangepicker-chevron-icon-size": "var(--em-core-size--0400)",
  "--em-daterangepicker-chevron-size": "var(--em-core-size--0800)",
  "--em-daterangepicker-day-color": "var(--em-sem-text)",
  "--em-daterangepicker-day-font-family": "var(--em-core-font-family--base)",
  "--em-daterangepicker-day-font-size": "var(--em-core-font-size--sm)",
  "--em-daterangepicker-day-font-weight": "var(--em-core-font-weight--medium)",
  "--em-daterangepicker-day-outside": "var(--em-sem-text--subtle)",
  "--em-daterangepicker-day-range-background": "var(--em-sem-background--light)",
  "--em-daterangepicker-day-range-limit-border-radius": "var(--em-core-border-radius--200)",
  "--em-daterangepicker-day-range-limit-color": "var(--em-sem-text--inverted)",
  "--em-daterangepicker-day-size": "var(--em-core-size--0800)",
  "--em-daterangepicker-label-color": "var(--em-sem-text)",
  "--em-daterangepicker-label-font-family": "var(--em-core-font-family--base)",
  "--em-daterangepicker-label-font-size": "var(--em-core-font-size--sm)",
  "--em-daterangepicker-label-font-weight": "var(--em-core-font-weight--medium)",
  "--em-daterangepicker-weekday-color": "var(--em-sem-text--muted)",
  "--em-daterangepicker-weekday-font-family": "var(--em-core-font-family--base)",
  "--em-daterangepicker-weekday-font-size": "var(--em-core-font-size--sm)",
  "--em-daterangepicker-weekday-font-weight": "var(--em-core-font-weight--medium)",
  "--em-divider-color": "var(--em-sem-background--subtle)",
  "--em-divider-thickness": "1px",
  "--em-field-feedback-color": "var(--em-sem-text--muted)",
  "--em-field-feedback-color--error": "var(--em-sem-status-error-text)",
  "--em-field-feedback-error-font-size": "var(--em-core-font-size--xs)",
  "--em-field-feedback-error-font-weight": "var(--em-core-font-weight--medium)",
  "--em-field-feedback-error-line-height": "var(--em-core-line-height--md)",
  "--em-field-feedback-font-size": "var(--em-core-font-size--xs)",
  "--em-field-feedback-font-weight": "var(--em-core-font-weight--regular)",
  "--em-field-feedback-line-height": "var(--em-core-line-height--sm)",
  "--em-field-feedback-padding-bottom": "var(--em-core-spacing--0200)",
  "--em-field-feedback-padding-top": "var(--em-core-spacing--0200)",
  "--em-field-font-family": "var(--em-core-font-family--base)",
  "--em-field-header-color": "var(--em-sem-text)",
  "--em-field-header-padding-bottom": "var(--em-core-spacing--0200)",
  "--em-field-header-required-font-size": "var(--em-core-font-size--xs)",
  "--em-field-header-required-font-weight": "var(--em-core-font-weight--regular)",
  "--em-field-header-required-line-height": "var(--em-core-line-height--sm)",
  "--em-field-header-title-font-size": "var(--em-core-font-size--sm)",
  "--em-field-header-title-font-weight": "var(--em-core-font-weight--medium)",
  "--em-field-header-title-line-height": "var(--em-core-line-height--md)",
  "--em-filter-background--chevron": "var(--em-sem-background--neutral)",
  "--em-filter-background--filter": "var(--em-sem-background--light)",
  "--em-filter-background--hover": "var(--em-sem-background--subtle)",
  "--em-filter-background--operator": "var(--em-core-color-gray--0050)",
  "--em-filter-background--selected": "var(--em-sem-background--muted)",
  "--em-filter-border-color": "rgb(255 255 255 / 0%)",
  "--em-filter-border-color--hover": "rgb(255 255 255 / 0%)",
  "--em-filter-border-color--operator": "rgb(255 255 255 / 0%)",
  "--em-filter-border-color--selected": "rgb(255 255 255 / 0%)",
  "--em-filter-border-radius": "var(--em-core-border-radius--100)",
  "--em-filter-border-radius--group": "var(--em-core-border-radius--400)",
  "--em-filter-border-width": "0px",
  "--em-filter-color": "var(--em-sem-text--neutral)",
  "--em-filter-color--operator": "var(--em-sem-text--muted)",
  "--em-filter-gap--external": "var(--em-core-spacing--0300)",
  "--em-filter-gap--internal": "var(--em-core-spacing--0050)",
  "--em-filter-height": "var(--em-core-size--0800)",
  "--em-filter-label-font-family": "var(--em-core-font-family--base)",
  "--em-filter-label-font-size": "var(--em-core-font-size--xs)",
  "--em-filter-label-font-weight": "var(--em-core-font-weight--medium)",
  "--em-filter-label-font-weight--operator": "var(--em-core-font-weight--regular)",
  "--em-filter-label-label-padding-left-right": "var(--em-core-spacing--0150)",
  "--em-filter-label-line-height": "var(--em-core-line-height--sm)",
  "--em-filter-padding-left-right": "var(--em-core-spacing--0300)",
  "--em-filter-padding-left-right--operator": "var(--em-core-spacing--0100)",
  "--em-ghostbutton-background--active": "var(--em-sem-background--subtle)",
  "--em-ghostbutton-background--hover": "var(--em-sem-background--light)",
  "--em-ghostbutton-border-color": "rgb(255 255 255 / 0%)",
  "--em-ghostbutton-border-color--active": "rgb(255 255 255 / 0%)",
  "--em-ghostbutton-border-color--disabled": "rgb(255 255 255 / 0%)",
  "--em-ghostbutton-border-color--hover": "rgb(255 255 255 / 0%)",
  "--em-ghostbutton-border-radius": "var(--em-core-border-radius--100)",
  "--em-ghostbutton-border-width": "0px",
  "--em-ghostbutton-color": "var(--em-sem-text)",
  "--em-ghostbutton-color--disabled": "var(--em-sem-text--subtle)",
  "--em-ghostbutton-font-family": "var(--em-core-font-family--base)",
  "--em-ghostbutton-font-size": "var(--em-core-font-size--xs)",
  "--em-ghostbutton-font-weight": "var(--em-core-font-weight--regular)",
  "--em-ghostbutton-height": "var(--em-core-size--0500)",
  "--em-ghostbutton-icon-size": "var(--em-core-size--0400)",
  "--em-ghostbutton-label-padding-left": "var(--em-core-spacing--0100)",
  "--em-ghostbutton-label-padding-right": "var(--em-core-spacing--0100)",
  "--em-ghostbutton-line-height": "var(--em-core-line-height--sm)",
  "--em-ghostbutton-padding-left-right": "var(--em-core-spacing--0050)",
  "--em-ghostbuttonicon-background--active": "var(--em-sem-background--subtle)",
  "--em-ghostbuttonicon-background--hover": "var(--em-sem-background--light)",
  "--em-ghostbuttonicon-border-color": "rgb(255 255 255 / 0%)",
  "--em-ghostbuttonicon-border-color--active": "rgb(255 255 255 / 0%)",
  "--em-ghostbuttonicon-border-color--disabled": "rgb(255 255 255 / 0%)",
  "--em-ghostbuttonicon-border-color--hover": "rgb(255 255 255 / 0%)",
  "--em-ghostbuttonicon-border-radius": "var(--em-core-border-radius--100)",
  "--em-ghostbuttonicon-border-width": "0px",
  "--em-ghostbuttonicon-color": "var(--em-sem-text)",
  "--em-ghostbuttonicon-color--disabled": "var(--em-sem-text--subtle)",
  "--em-ghostbuttonicon-height": "var(--em-core-size--0500)",
  "--em-ghostbuttonicon-icon-size": "var(--em-core-size--0400)",
  "--em-ghostbuttonicon-width": "var(--em-core-size--0500)",
  "--em-kpichart-color": "var(--em-sem-text)",
  "--em-kpichart-font-family": "var(--em-core-font-family--base)",
  "--em-kpichart-gap": "var(--em-core-spacing--0400)",
  "--em-kpichart-label-font-size": "var(--em-core-font-size--sm)",
  "--em-kpichart-label-font-weight": "var(--em-core-font-weight--regular)",
  "--em-kpichart-label-gap": "var(--em-core-spacing--0200)",
  "--em-kpichart-number-font-size": "var(--em-core-font-size--xxl)",
  "--em-kpichart-number-font-weight": "var(--em-core-font-weight--bold)",
  "--em-kpichart-number-line-height": "var(--em-core-line-height--xl)",
  "--em-kpichart-trend-background--negative": "var(--em-sem-status-error-background)",
  "--em-kpichart-trend-background--positive": "var(--em-sem-status-success-background)",
  "--em-kpichart-trend-border-radius": "var(--em-core-border-radius--150)",
  "--em-kpichart-trend-color--negative": "var(--em-sem-status-error-text)",
  "--em-kpichart-trend-color--positive": "var(--em-sem-status-success-text)",
  "--em-kpichart-trend-font-size": "var(--em-core-font-size--md)",
  "--em-kpichart-trend-font-weight": "var(--em-core-font-weight--medium)",
  "--em-kpichart-trend-height": "var(--em-core-size--0600)",
  "--em-kpichart-trend-icon-size": "var(--em-core-size--0400)",
  "--em-kpichart-trend-line-height": "var(--em-core-line-height--md)",
  "--em-kpichart-trend-padding": "var(--em-core-spacing--0100)",
  "--em-linechart-line-dash": "var(--em-core-size--0100)",
  "--em-linechart-line-gap": "var(--em-core-size--0100)",
  "--em-linechart-line-width": "2px",
  "--em-linechart-point-size": "var(--em-core-size--0200)",
  "--em-linechart-point-size--hover": "var(--em-core-size--0300)",
  "--em-markdown-background": "var(--em-sem-background--neutral)",
  "--em-markdown-code-color": "var(--em-sem-text)",
  "--em-markdown-code-font-family": "var(--em-core-font-family--code)",
  "--em-markdown-code-font-size": "var(--em-core-font-size--sm)",
  "--em-markdown-code-font-weight--regular": "var(--em-core-font-weight--regular)",
  "--em-markdown-code-font-weight--strong": "var(--em-core-font-weight--bold)",
  "--em-markdown-code-line-height": "var(--em-core-line-height--md)",
  "--em-markdown-color--placeholder": "var(--em-sem-background--muted)",
  "--em-markdown-h1-color": "var(--em-sem-text)",
  "--em-markdown-h1-font-family": "var(--em-core-font-family--base)",
  "--em-markdown-h1-font-size": "var(--em-core-font-size--xxl)",
  "--em-markdown-h1-font-weight": "var(--em-core-font-weight--bold)",
  "--em-markdown-h1-line-height": "var(--em-core-line-height--xl)",
  "--em-markdown-h2-color": "var(--em-sem-text)",
  "--em-markdown-h2-font-family": "var(--em-core-font-family--base)",
  "--em-markdown-h2-font-size": "var(--em-core-font-size--xl)",
  "--em-markdown-h2-font-weight": "var(--em-core-font-weight--bold)",
  "--em-markdown-h2-line-height": "var(--em-core-line-height--l)",
  "--em-markdown-h3-color": "var(--em-sem-text)",
  "--em-markdown-h3-font-family": "var(--em-core-font-family--base)",
  "--em-markdown-h3-font-size": "var(--em-core-font-size--md)",
  "--em-markdown-h3-font-weight": "var(--em-core-font-weight--bold)",
  "--em-markdown-h3-line-height": "var(--em-core-line-height--md)",
  "--em-markdown-hr-border-width": "1px",
  "--em-markdown-hr-color": "var(--em-sem-background--muted)",
  "--em-markdown-link-color": "var(--em-sem-text)",
  "--em-markdown-link-font-family": "var(--em-core-font-family--base)",
  "--em-markdown-link-font-size": "var(--em-core-font-size--sm)",
  "--em-markdown-link-font-weight": "var(--em-core-font-weight--medium)",
  "--em-markdown-link-line-height": "var(--em-core-line-height--md)",
  "--em-markdown-min-height": "160px",
  "--em-markdown-options-border-color": "var(--em-sem-background--muted)",
  "--em-markdown-options-border-radius": "var(--em-core-border-radius--100)",
  "--em-markdown-options-border-width": "1px",
  "--em-markdown-options-gap": "var(--em-core-spacing--0100)",
  "--em-markdown-options-padding": "var(--em-core-spacing--0100)",
  "--em-markdown-p-color": "var(--em-sem-text)",
  "--em-markdown-p-font-family": "var(--em-core-font-family--base)",
  "--em-markdown-p-font-size": "var(--em-core-font-size--sm)",
  "--em-markdown-p-font-weight--regular": "var(--em-core-font-weight--regular)",
  "--em-markdown-p-font-weight--strong": "var(--em-core-font-weight--bold)",
  "--em-markdown-p-line-height": "var(--em-core-line-height--md)",
  "--em-overlay-background": "rgb(33 33 41 / 90%)",
  "--em-piechart-donut-color": "var(--em-sem-text)",
  "--em-piechart-donut-label-font-size": "var(--em-core-font-size--md)",
  "--em-piechart-donut-label-font-weight": "var(--em-core-font-weight--medium)",
  "--em-piechart-donut-label-line-height": "var(--em-core-line-height--md)",
  "--em-piechart-donut-number-font-size": "var(--em-core-font-size--xxl)",
  "--em-piechart-donut-number-font-weight": "var(--em-core-font-weight--bold)",
  "--em-piechart-donut-number-line-height": "var(--em-core-line-height--xl)",
  "--em-piechart-font-family": "var(--em-core-font-family--base)",
  "--em-selectfield-category-background": "var(--em-sem-background--subtle)",
  "--em-selectfield-category-border-radius": "var(--em-core-border-radius--150)",
  "--em-selectfield-category-color": "var(--em-sem-text--neutral)",
  "--em-selectfield-category-font-family": "var(--em-core-font-family--base)",
  "--em-selectfield-category-font-size": "var(--em-core-font-size--xs)",
  "--em-selectfield-category-font-weight": "var(--em-core-font-weight--bold)",
  "--em-selectfield-category-line-height": "var(--em-core-line-height--sm)",
  "--em-selectfield-category-padding": "var(--em-core-spacing--0100)",
  "--em-selectfield-content-background": "var(--em-sem-background--neutral)",
  "--em-selectfield-content-border-radius": "var(--em-core-border-radius--300)",
  "--em-selectfield-content-gap": "var(--em-core-spacing--0200)",
  "--em-selectfield-content-max-height": "320px",
  "--em-selectfield-content-max-width": "400px",
  "--em-selectfield-content-opacity--loading": "0.5",
  "--em-selectfield-content-padding": "var(--em-core-spacing--0200)",
  "--em-selectfield-content-shadow-blur": "var(--em-core-shadow-blur)",
  "--em-selectfield-content-shadow-color": "rgb(33 33 41 / 25%)",
  "--em-selectfield-content-shadow-position-x": "var(--em-core-shadow-position-x)",
  "--em-selectfield-content-shadow-position-y": "var(--em-core-shadow-position-y)",
  "--em-selectfield-content-shadow-spread": "var(--em-core-shadow-spread)",
  "--em-selectfield-item-background": "var(--em-sem-background--neutral)",
  "--em-selectfield-item-background--active": "var(--em-sem-background--light)",
  "--em-selectfield-item-background--hover": "var(--em-sem-background)",
  "--em-selectfield-item-background--selected": "var(--em-sem-background--inverted)",
  "--em-selectfield-item-border-radius": "var(--em-core-border-radius--200)",
  "--em-selectfield-item-font-family": "var(--em-core-font-family--base)",
  "--em-selectfield-item-height": "var(--em-core-size--0800)",
  "--em-selectfield-item-icon-color": "var(--em-sem-text)",
  "--em-selectfield-item-icon-color--disabled": "var(--em-sem-text--subtle)",
  "--em-selectfield-item-icon-color--selected": "var(--em-sem-text--inverted)",
  "--em-selectfield-item-icon-size": "var(--em-core-size--0400)",
  "--em-selectfield-item-label-left-color": "var(--em-sem-text)",
  "--em-selectfield-item-label-left-color--disabled": "var(--em-sem-text--subtle)",
  "--em-selectfield-item-label-left-color--selected": "var(--em-sem-text--inverted)",
  "--em-selectfield-item-label-left-font-size": "var(--em-core-font-size--xs)",
  "--em-selectfield-item-label-left-font-weight": "var(--em-core-font-weight--medium)",
  "--em-selectfield-item-label-left-line-height": "var(--em-core-line-height--sm)",
  "--em-selectfield-item-label-padding-left-right": "var(--em-core-spacing--0200)",
  "--em-selectfield-item-label-right-color": "var(--em-sem-text--muted)",
  "--em-selectfield-item-label-right-color--disabled": "var(--em-sem-text--subtle)",
  "--em-selectfield-item-label-right-color--selected": "var(--em-sem-text--inverted)",
  "--em-selectfield-item-label-right-font-size": "var(--em-core-font-size--xs)",
  "--em-selectfield-item-label-right-font-weight": "var(--em-core-font-weight--regular)",
  "--em-selectfield-item-label-right-line-height": "var(--em-core-line-height--sm)",
  "--em-selectfield-item-padding": "var(--em-core-spacing--0200)",
  "--em-selectfield-trigger-background": "var(--em-sem-background--neutral)",
  "--em-selectfield-trigger-background--active": "var(--em-sem-background--light)",
  "--em-selectfield-trigger-background--filled": "var(--em-sem-background--inverted)",
  "--em-selectfield-trigger-background--hover": "var(--em-sem-background)",
  "--em-selectfield-trigger-border-color": "var(--em-sem-background--muted)",
  "--em-selectfield-trigger-border-color--error": "var(--em-sem-status-error-text)",
  "--em-selectfield-trigger-border-radius": "var(--em-core-border-radius--200)",
  "--em-selectfield-trigger-border-width": "var(--em-core-border-width--025)",
  "--em-selectfield-trigger-border-width--error": "var(--em-core-border-width--050)",
  "--em-selectfield-trigger-color": "var(--em-sem-text)",
  "--em-selectfield-trigger-color--disabled": "var(--em-sem-text--subtle)",
  "--em-selectfield-trigger-color--filled": "var(--em-sem-text--inverted)",
  "--em-selectfield-trigger-font-family": "var(--em-core-font-family--base)",
  "--em-selectfield-trigger-font-size": "var(--em-core-font-size--xs)",
  "--em-selectfield-trigger-font-weight": "var(--em-core-font-weight--medium)",
  "--em-selectfield-trigger-height": "var(--em-core-size--1000)",
  "--em-selectfield-trigger-icon-size": "var(--em-core-size--0400)",
  "--em-selectfield-trigger-label-padding-left-right": "var(--em-core-spacing--0200)",
  "--em-selectfield-trigger-line-height": "var(--em-core-line-height--sm)",
  "--em-selectfield-trigger-min-width": "64px",
  "--em-selectfield-trigger-padding": "var(--em-core-spacing--0300)",
  "--em-skeleton-border-radius": "var(--em-core-border-radius--300)",
  "--em-switch-background--disabled": "var(--em-sem-background--subtle)",
  "--em-switch-background--off": "var(--em-sem-background--subtle)",
  "--em-switch-background--on": "var(--em-sem-background--inverted)",
  "--em-switch-font-family": "var(--em-core-font-family--base)",
  "--em-switch-height": "var(--em-core-size--0400)",
  "--em-switch-label-color": "var(--em-sem-text)",
  "--em-switch-label-color--disabled": "var(--em-sem-text--subtle)",
  "--em-switch-label-color-font-size": "var(--em-core-font-size--md)",
  "--em-switch-label-color-font-weight": "var(--em-core-font-weight--medium)",
  "--em-switch-label-color-line-height": "var(--em-core-line-height--md)",
  "--em-switch-label-gap": "var(--em-core-spacing--0200)",
  "--em-switch-shadow-blur": "var(--em-core-shadow-blur)",
  "--em-switch-shadow-color": "var(--em-core-shadow-color)",
  "--em-switch-shadow-position-x": "var(--em-core-shadow-position-x)",
  "--em-switch-shadow-position-y": "var(--em-core-shadow-position-y)",
  "--em-switch-shadow-spread": "var(--em-core-shadow-spread)",
  "--em-switch-size-border-radius": "var(--em-core-border-radius--500)",
  "--em-switch-thumb-background": "var(--em-sem-background--neutral)",
  "--em-switch-thumb-background--disabled": "var(--em-sem-background--light)",
  "--em-switch-thumb-background--off": "var(--em-sem-text--muted)",
  "--em-switch-thumb-padding": "var(--em-core-spacing--0050)",
  "--em-switch-thumb-size": "var(--em-core-size--0300)",
  "--em-switch-width": "var(--em-core-size--0800)",
  "--em-tablechart-border-color": "var(--em-sem-background--light)",
  "--em-tablechart-border-radius": "var(--em-core-border-radius--300)",
  "--em-tablechart-border-width": "1px",
  "--em-tablechart-cell-background": "var(--em-sem-background--neutral)",
  "--em-tablechart-cell-background--hover": "var(--em-sem-background)",
  "--em-tablechart-cell-height": "var(--em-core-size--1000)",
  "--em-tablechart-cell-min-width": "var(--em-core-size--1200)",
  "--em-tablechart-cell-padding": "var(--em-core-spacing--0200)",
  "--em-tablechart-color": "var(--em-sem-text)",
  "--em-tablechart-color--muted": "var(--em-sem-text--muted)",
  "--em-tablechart-font-family": "var(--em-core-font-family--base)",
  "--em-tablechart-font-size": "var(--em-core-font-size--xs)",
  "--em-tablechart-font-weight": "var(--em-core-font-weight--regular)",
  "--em-tablechart-font-weight--bold": "var(--em-core-font-weight--bold)",
  "--em-tablechart-font-weight--medium": "var(--em-core-font-weight--medium)",
  "--em-tablechart-header-background": "var(--em-sem-background--neutral)",
  "--em-tablechart-header-background--hover": "var(--em-sem-background)",
  "--em-tablechart-heatmap-color": "var(--em-sem-chart-color--1)",
  "--em-tablechart-icon-size": "var(--em-core-size--0400)",
  "--em-tablechart-line-height": "var(--em-core-line-height--sm)",
  "--em-tablechart-loading-indicator-color": "var(--em-sem-text--neutral)",
  "--em-tablechart-loading-indicator-font-family": "var(--em-core-font-family--base)",
  "--em-tablechart-loading-indicator-font-size": "var(--em-core-font-size--xs)",
  "--em-tablechart-loading-indicator-font-weight": "var(--em-core-font-weight--bold)",
  "--em-tablechart-loading-indicator-padding": "var(--em-core-spacing--0300)",
  "--em-tablechart-padding-left-right": "var(--em-core-spacing--0100)",
  "--em-tablechart-pagination-button-gap": "var(--em-core-spacing--0200)",
  "--em-tablechart-pagination-height": "var(--em-core-size--1200)",
  "--em-tablechart-pagination-label-padding-left-right": "var(--em-core-spacing--0400)",
  "--em-tablechart-pivot-ident-padding": "var(--em-core-spacing--0400)",
  "--em-textfield-background": "var(--em-sem-background)",
  "--em-textfield-background--active": "var(--em-sem-background--subtle)",
  "--em-textfield-background--disabled": "var(--em-sem-background--neutral)",
  "--em-textfield-background--filled": "var(--em-sem-background--light)",
  "--em-textfield-border-color": "var(--em-sem-text--subtle)",
  "--em-textfield-border-color--error": "var(--em-sem-status-error-text)",
  "--em-textfield-border-radius": "var(--em-core-border-radius--200)",
  "--em-textfield-border-width": "var(--em-core-border-width--025)",
  "--em-textfield-border-width--error": "var(--em-core-border-width--050)",
  "--em-textfield-color": "var(--em-sem-text--muted)",
  "--em-textfield-color--disabled": "var(--em-sem-text--subtle)",
  "--em-textfield-color--filled": "var(--em-sem-text)",
  "--em-textfield-feedback-color": "var(--em-sem-text--muted)",
  "--em-textfield-feedback-color--error": "var(--em-sem-status-error-text)",
  "--em-textfield-feedback-font-family": "var(--em-core-font-family--base)",
  "--em-textfield-feedback-font-size": "var(--em-core-font-size--xs)",
  "--em-textfield-feedback-font-weight": "var(--em-core-font-weight--regular)",
  "--em-textfield-feedback-font-weight--error": "var(--em-core-font-weight--medium)",
  "--em-textfield-feedback-line-height": "var(--em-core-line-height--md)",
  "--em-textfield-font-family": "var(--em-core-font-family--base)",
  "--em-textfield-font-size": "var(--em-core-font-size--xs)",
  "--em-textfield-font-weight": "var(--em-core-font-weight--regular)",
  "--em-textfield-font-weight--filled": "var(--em-core-font-weight--medium)",
  "--em-textfield-height": "var(--em-core-size--1000)",
  "--em-textfield-icon-size": "var(--em-core-size--0400)",
  "--em-textfield-label-padding": "var(--em-core-spacing--0200)",
  "--em-textfield-line-height": "var(--em-core-line-height--md)",
  "--em-textfield-max-width": "400px",
  "--em-textfield-min-width": "160px",
  "--em-textfield-padding": "var(--em-core-spacing--0200)",
  "--em-tooltip-background": "var(--em-sem-background--inverted)",
  "--em-tooltip-border-radius": "var(--em-core-border-radius--150)",
  "--em-tooltip-color": "var(--em-sem-text--inverted)",
  "--em-tooltip-font-family": "var(--em-core-font-family--base)",
  "--em-tooltip-font-size": "var(--em-core-font-size--xs)",
  "--em-tooltip-font-weight": "var(--em-core-font-weight--regular)",
  "--em-tooltip-line-height": "var(--em-core-line-height--sm)",
  "--em-tooltip-max-width": "256px",
  "--em-tooltip-padding-left-right": "var(--em-core-spacing--0200)",
  "--em-tooltip-padding-top-bottom": "var(--em-core-spacing--0150)",
  "--em-tablechart-cell-max-width": "calc(3 * var(--em-core-size--2000))"
}, of = {
  ...rf,
  ...nf,
  ...af
};
const sf = of;
function Tn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ya = { exports: {} }, lf = Ya.exports, Ki;
function cf() {
  return Ki || (Ki = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(lf, (function() {
      var r = 1e3, n = 6e4, a = 36e5, o = "millisecond", i = "second", s = "minute", l = "hour", c = "day", f = "week", d = "month", u = "quarter", h = "year", g = "date", m = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, O = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(V) {
        var F = ["th", "st", "nd", "rd"], U = V % 100;
        return "[" + V + (F[(U - 20) % 10] || F[U] || F[0]) + "]";
      } }, y = function(V, F, U) {
        var K = String(V);
        return !K || K.length >= F ? V : "" + Array(F + 1 - K.length).join(U) + V;
      }, B = { s: y, z: function(V) {
        var F = -V.utcOffset(), U = Math.abs(F), K = Math.floor(U / 60), Z = U % 60;
        return (F <= 0 ? "+" : "-") + y(K, 2, "0") + ":" + y(Z, 2, "0");
      }, m: function V(F, U) {
        if (F.date() < U.date()) return -V(U, F);
        var K = 12 * (U.year() - F.year()) + (U.month() - F.month()), Z = F.clone().add(K, d), me = U - Z < 0, te = F.clone().add(K + (me ? -1 : 1), d);
        return +(-(K + (U - Z) / (me ? Z - te : te - Z)) || 0);
      }, a: function(V) {
        return V < 0 ? Math.ceil(V) || 0 : Math.floor(V);
      }, p: function(V) {
        return { M: d, y: h, w: f, d: c, D: g, h: l, m: s, s: i, ms: o, Q: u }[V] || String(V || "").toLowerCase().replace(/s$/, "");
      }, u: function(V) {
        return V === void 0;
      } }, I = "en", G = {};
      G[I] = O;
      var v = "$isDayjsObject", k = function(V) {
        return V instanceof P || !(!V || !V[v]);
      }, A = function V(F, U, K) {
        var Z;
        if (!F) return I;
        if (typeof F == "string") {
          var me = F.toLowerCase();
          G[me] && (Z = me), U && (G[me] = U, Z = me);
          var te = F.split("-");
          if (!Z && te.length > 1) return V(te[0]);
        } else {
          var ve = F.name;
          G[ve] = F, Z = ve;
        }
        return !K && Z && (I = Z), Z || !K && I;
      }, D = function(V, F) {
        if (k(V)) return V.clone();
        var U = typeof F == "object" ? F : {};
        return U.date = V, U.args = arguments, new P(U);
      }, L = B;
      L.l = A, L.i = k, L.w = function(V, F) {
        return D(V, { locale: F.$L, utc: F.$u, x: F.$x, $offset: F.$offset });
      };
      var P = (function() {
        function V(U) {
          this.$L = A(U.locale, null, !0), this.parse(U), this.$x = this.$x || U.x || {}, this[v] = !0;
        }
        var F = V.prototype;
        return F.parse = function(U) {
          this.$d = (function(K) {
            var Z = K.date, me = K.utc;
            if (Z === null) return /* @__PURE__ */ new Date(NaN);
            if (L.u(Z)) return /* @__PURE__ */ new Date();
            if (Z instanceof Date) return new Date(Z);
            if (typeof Z == "string" && !/Z$/i.test(Z)) {
              var te = Z.match(p);
              if (te) {
                var ve = te[2] - 1 || 0, ne = (te[7] || "0").substring(0, 3);
                return me ? new Date(Date.UTC(te[1], ve, te[3] || 1, te[4] || 0, te[5] || 0, te[6] || 0, ne)) : new Date(te[1], ve, te[3] || 1, te[4] || 0, te[5] || 0, te[6] || 0, ne);
              }
            }
            return new Date(Z);
          })(U), this.init();
        }, F.init = function() {
          var U = this.$d;
          this.$y = U.getFullYear(), this.$M = U.getMonth(), this.$D = U.getDate(), this.$W = U.getDay(), this.$H = U.getHours(), this.$m = U.getMinutes(), this.$s = U.getSeconds(), this.$ms = U.getMilliseconds();
        }, F.$utils = function() {
          return L;
        }, F.isValid = function() {
          return this.$d.toString() !== m;
        }, F.isSame = function(U, K) {
          var Z = D(U);
          return this.startOf(K) <= Z && Z <= this.endOf(K);
        }, F.isAfter = function(U, K) {
          return D(U) < this.startOf(K);
        }, F.isBefore = function(U, K) {
          return this.endOf(K) < D(U);
        }, F.$g = function(U, K, Z) {
          return L.u(U) ? this[K] : this.set(Z, U);
        }, F.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, F.valueOf = function() {
          return this.$d.getTime();
        }, F.startOf = function(U, K) {
          var Z = this, me = !!L.u(K) || K, te = L.p(U), ve = function(z, N) {
            var R = L.w(Z.$u ? Date.UTC(Z.$y, N, z) : new Date(Z.$y, N, z), Z);
            return me ? R : R.endOf(c);
          }, ne = function(z, N) {
            return L.w(Z.toDate()[z].apply(Z.toDate("s"), (me ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(N)), Z);
          }, Q = this.$W, ue = this.$M, ye = this.$D, xe = "set" + (this.$u ? "UTC" : "");
          switch (te) {
            case h:
              return me ? ve(1, 0) : ve(31, 11);
            case d:
              return me ? ve(1, ue) : ve(0, ue + 1);
            case f:
              var ke = this.$locale().weekStart || 0, S = (Q < ke ? Q + 7 : Q) - ke;
              return ve(me ? ye - S : ye + (6 - S), ue);
            case c:
            case g:
              return ne(xe + "Hours", 0);
            case l:
              return ne(xe + "Minutes", 1);
            case s:
              return ne(xe + "Seconds", 2);
            case i:
              return ne(xe + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, F.endOf = function(U) {
          return this.startOf(U, !1);
        }, F.$set = function(U, K) {
          var Z, me = L.p(U), te = "set" + (this.$u ? "UTC" : ""), ve = (Z = {}, Z[c] = te + "Date", Z[g] = te + "Date", Z[d] = te + "Month", Z[h] = te + "FullYear", Z[l] = te + "Hours", Z[s] = te + "Minutes", Z[i] = te + "Seconds", Z[o] = te + "Milliseconds", Z)[me], ne = me === c ? this.$D + (K - this.$W) : K;
          if (me === d || me === h) {
            var Q = this.clone().set(g, 1);
            Q.$d[ve](ne), Q.init(), this.$d = Q.set(g, Math.min(this.$D, Q.daysInMonth())).$d;
          } else ve && this.$d[ve](ne);
          return this.init(), this;
        }, F.set = function(U, K) {
          return this.clone().$set(U, K);
        }, F.get = function(U) {
          return this[L.p(U)]();
        }, F.add = function(U, K) {
          var Z, me = this;
          U = Number(U);
          var te = L.p(K), ve = function(ue) {
            var ye = D(me);
            return L.w(ye.date(ye.date() + Math.round(ue * U)), me);
          };
          if (te === d) return this.set(d, this.$M + U);
          if (te === h) return this.set(h, this.$y + U);
          if (te === c) return ve(1);
          if (te === f) return ve(7);
          var ne = (Z = {}, Z[s] = n, Z[l] = a, Z[i] = r, Z)[te] || 1, Q = this.$d.getTime() + U * ne;
          return L.w(Q, this);
        }, F.subtract = function(U, K) {
          return this.add(-1 * U, K);
        }, F.format = function(U) {
          var K = this, Z = this.$locale();
          if (!this.isValid()) return Z.invalidDate || m;
          var me = U || "YYYY-MM-DDTHH:mm:ssZ", te = L.z(this), ve = this.$H, ne = this.$m, Q = this.$M, ue = Z.weekdays, ye = Z.months, xe = Z.meridiem, ke = function(N, R, J, ae) {
            return N && (N[R] || N(K, me)) || J[R].slice(0, ae);
          }, S = function(N) {
            return L.s(ve % 12 || 12, N, "0");
          }, z = xe || function(N, R, J) {
            var ae = N < 12 ? "AM" : "PM";
            return J ? ae.toLowerCase() : ae;
          };
          return me.replace(w, (function(N, R) {
            return R || (function(J) {
              switch (J) {
                case "YY":
                  return String(K.$y).slice(-2);
                case "YYYY":
                  return L.s(K.$y, 4, "0");
                case "M":
                  return Q + 1;
                case "MM":
                  return L.s(Q + 1, 2, "0");
                case "MMM":
                  return ke(Z.monthsShort, Q, ye, 3);
                case "MMMM":
                  return ke(ye, Q);
                case "D":
                  return K.$D;
                case "DD":
                  return L.s(K.$D, 2, "0");
                case "d":
                  return String(K.$W);
                case "dd":
                  return ke(Z.weekdaysMin, K.$W, ue, 2);
                case "ddd":
                  return ke(Z.weekdaysShort, K.$W, ue, 3);
                case "dddd":
                  return ue[K.$W];
                case "H":
                  return String(ve);
                case "HH":
                  return L.s(ve, 2, "0");
                case "h":
                  return S(1);
                case "hh":
                  return S(2);
                case "a":
                  return z(ve, ne, !0);
                case "A":
                  return z(ve, ne, !1);
                case "m":
                  return String(ne);
                case "mm":
                  return L.s(ne, 2, "0");
                case "s":
                  return String(K.$s);
                case "ss":
                  return L.s(K.$s, 2, "0");
                case "SSS":
                  return L.s(K.$ms, 3, "0");
                case "Z":
                  return te;
              }
              return null;
            })(N) || te.replace(":", "");
          }));
        }, F.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, F.diff = function(U, K, Z) {
          var me, te = this, ve = L.p(K), ne = D(U), Q = (ne.utcOffset() - this.utcOffset()) * n, ue = this - ne, ye = function() {
            return L.m(te, ne);
          };
          switch (ve) {
            case h:
              me = ye() / 12;
              break;
            case d:
              me = ye();
              break;
            case u:
              me = ye() / 3;
              break;
            case f:
              me = (ue - Q) / 6048e5;
              break;
            case c:
              me = (ue - Q) / 864e5;
              break;
            case l:
              me = ue / a;
              break;
            case s:
              me = ue / n;
              break;
            case i:
              me = ue / r;
              break;
            default:
              me = ue;
          }
          return Z ? me : L.a(me);
        }, F.daysInMonth = function() {
          return this.endOf(d).$D;
        }, F.$locale = function() {
          return G[this.$L];
        }, F.locale = function(U, K) {
          if (!U) return this.$L;
          var Z = this.clone(), me = A(U, K, !0);
          return me && (Z.$L = me), Z;
        }, F.clone = function() {
          return L.w(this.$d, this);
        }, F.toDate = function() {
          return new Date(this.valueOf());
        }, F.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, F.toISOString = function() {
          return this.$d.toISOString();
        }, F.toString = function() {
          return this.$d.toUTCString();
        }, V;
      })(), M = P.prototype;
      return D.prototype = M, [["$ms", o], ["$s", i], ["$m", s], ["$H", l], ["$W", c], ["$M", d], ["$y", h], ["$D", g]].forEach((function(V) {
        M[V[1]] = function(F) {
          return this.$g(F, V[0], V[1]);
        };
      })), D.extend = function(V, F) {
        return V.$i || (V(F, P, D), V.$i = !0), D;
      }, D.locale = A, D.isDayjs = k, D.unix = function(V) {
        return D(1e3 * V);
      }, D.en = G[I], D.Ls = G, D.p = {}, D;
    }));
  })(Ya)), Ya.exports;
}
var ff = cf();
const Le = /* @__PURE__ */ Tn(ff);
var Ja = { exports: {} }, uf = Ja.exports, Yi;
function hf() {
  return Yi || (Yi = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(uf, (function() {
      var r = "day";
      return function(n, a, o) {
        var i = function(c) {
          return c.add(4 - c.isoWeekday(), r);
        }, s = a.prototype;
        s.isoWeekYear = function() {
          return i(this).year();
        }, s.isoWeek = function(c) {
          if (!this.$utils().u(c)) return this.add(7 * (c - this.isoWeek()), r);
          var f, d, u, h, g = i(this), m = (f = this.isoWeekYear(), d = this.$u, u = (d ? o.utc : o)().year(f).startOf("year"), h = 4 - u.isoWeekday(), u.isoWeekday() > 4 && (h += 7), u.add(h, r));
          return g.diff(m, "week") + 1;
        }, s.isoWeekday = function(c) {
          return this.$utils().u(c) ? this.day() || 7 : this.day(this.day() % 7 ? c : c - 7);
        };
        var l = s.startOf;
        s.startOf = function(c, f) {
          var d = this.$utils(), u = !!d.u(f) || f;
          return d.p(c) === "isoweek" ? u ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(c, f);
        };
      };
    }));
  })(Ja)), Ja.exports;
}
var df = hf();
const ns = /* @__PURE__ */ Tn(df);
var Xa = { exports: {} }, mf = Xa.exports, Ji;
function pf() {
  return Ji || (Ji = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(mf, (function() {
      var r = "month", n = "quarter";
      return function(a, o) {
        var i = o.prototype;
        i.quarter = function(c) {
          return this.$utils().u(c) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (c - 1));
        };
        var s = i.add;
        i.add = function(c, f) {
          return c = Number(c), this.$utils().p(f) === n ? this.add(3 * c, r) : s.bind(this)(c, f);
        };
        var l = i.startOf;
        i.startOf = function(c, f) {
          var d = this.$utils(), u = !!d.u(f) || f;
          if (d.p(c) === n) {
            var h = this.quarter() - 1;
            return u ? this.month(3 * h).startOf(r).startOf("day") : this.month(3 * h + 2).endOf(r).endOf("day");
          }
          return l.bind(this)(c, f);
        };
      };
    }));
  })(Xa)), Xa.exports;
}
var gf = pf();
const as = /* @__PURE__ */ Tn(gf);
var qa = { exports: {} }, vf = qa.exports, Xi;
function bf() {
  return Xi || (Xi = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(vf, (function() {
      var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
      return function(o, i, s) {
        var l = i.prototype;
        s.utc = function(m) {
          var p = { date: m, utc: !0, args: arguments };
          return new i(p);
        }, l.utc = function(m) {
          var p = s(this.toDate(), { locale: this.$L, utc: !0 });
          return m ? p.add(this.utcOffset(), r) : p;
        }, l.local = function() {
          return s(this.toDate(), { locale: this.$L, utc: !1 });
        };
        var c = l.parse;
        l.parse = function(m) {
          m.utc && (this.$u = !0), this.$utils().u(m.$offset) || (this.$offset = m.$offset), c.call(this, m);
        };
        var f = l.init;
        l.init = function() {
          if (this.$u) {
            var m = this.$d;
            this.$y = m.getUTCFullYear(), this.$M = m.getUTCMonth(), this.$D = m.getUTCDate(), this.$W = m.getUTCDay(), this.$H = m.getUTCHours(), this.$m = m.getUTCMinutes(), this.$s = m.getUTCSeconds(), this.$ms = m.getUTCMilliseconds();
          } else f.call(this);
        };
        var d = l.utcOffset;
        l.utcOffset = function(m, p) {
          var w = this.$utils().u;
          if (w(m)) return this.$u ? 0 : w(this.$offset) ? d.call(this) : this.$offset;
          if (typeof m == "string" && (m = (function(I) {
            I === void 0 && (I = "");
            var G = I.match(n);
            if (!G) return null;
            var v = ("" + G[0]).match(a) || ["-", 0, 0], k = v[0], A = 60 * +v[1] + +v[2];
            return A === 0 ? 0 : k === "+" ? A : -A;
          })(m), m === null)) return this;
          var O = Math.abs(m) <= 16 ? 60 * m : m;
          if (O === 0) return this.utc(p);
          var y = this.clone();
          if (p) return y.$offset = O, y.$u = !1, y;
          var B = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (y = this.local().add(O + B, r)).$offset = O, y.$x.$localOffset = B, y;
        };
        var u = l.format;
        l.format = function(m) {
          var p = m || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return u.call(this, p);
        }, l.valueOf = function() {
          var m = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * m;
        }, l.isUTC = function() {
          return !!this.$u;
        }, l.toISOString = function() {
          return this.toDate().toISOString();
        }, l.toString = function() {
          return this.toDate().toUTCString();
        };
        var h = l.toDate;
        l.toDate = function(m) {
          return m === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : h.call(this);
        };
        var g = l.diff;
        l.diff = function(m, p, w) {
          if (m && this.$u === m.$u) return g.call(this, m, p, w);
          var O = this.local(), y = s(m).local();
          return g.call(O, y, p, w);
        };
      };
    }));
  })(qa)), qa.exports;
}
var wf = bf();
const is = /* @__PURE__ */ Tn(wf);
Le.extend(is);
Le.extend(ns);
Le.extend(as);
function yf(e) {
  return Le.utc(e).startOf("day").toDate();
}
function Tf(e) {
  return Le.utc(e).endOf("day").toDate();
}
function Ef(e, t) {
  const r = new Date(e.getTime());
  return r.setUTCDate(r.getUTCDate() + 7 * t), r;
}
function os(e, t) {
  const r = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() + t, 1)), n = new Date(
    Date.UTC(r.getUTCFullYear(), r.getUTCMonth() + 1, 0)
  ).getUTCDate(), a = Math.min(e.getUTCDate(), n);
  return new Date(
    Date.UTC(
      r.getUTCFullYear(),
      r.getUTCMonth(),
      a,
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds(),
      e.getUTCMilliseconds()
    )
  );
}
const Sf = (e, t) => os(e, t * 3), kf = (e, t) => {
  const r = e.getUTCFullYear() + t, n = e.getUTCMonth(), a = new Date(Date.UTC(r, n + 1, 0)).getUTCDate(), o = Math.min(e.getUTCDate(), a);
  return new Date(
    Date.UTC(
      r,
      n,
      o,
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds(),
      e.getUTCMilliseconds()
    )
  );
}, xf = (e) => {
  const { from: t, to: r } = e;
  if (!t || !r) return;
  const n = Le.utc(t), a = Le.utc(r).diff(n, "day") + 1, o = n.subtract(1, "day");
  return {
    from: o.subtract(a - 1, "day").startOf("day").toDate(),
    to: o.endOf("day").toDate(),
    relativeTimeString: ""
  };
}, _f = (e) => {
  const { from: t } = e;
  if (!t) return;
  const r = Le.utc(t).startOf("isoWeek").subtract(1, "week"), n = r.endOf("isoWeek");
  return {
    from: r.startOf("day").toDate(),
    to: n.endOf("day").toDate(),
    relativeTimeString: ""
  };
}, Of = (e) => {
  const { from: t } = e;
  if (!t) return;
  const r = Le.utc(t).startOf("month").subtract(1, "month"), n = r.endOf("month");
  return {
    from: r.startOf("day").toDate(),
    to: n.endOf("day").toDate(),
    relativeTimeString: ""
  };
}, Af = (e) => {
  const { from: t } = e;
  if (!t) return;
  const r = Le.utc(t).startOf("quarter").subtract(1, "quarter"), n = r.endOf("quarter");
  return {
    from: r.startOf("day").toDate(),
    to: n.endOf("day").toDate(),
    relativeTimeString: ""
  };
}, Cf = (e) => {
  const { from: t } = e;
  if (!t) return;
  const r = Le.utc(t).startOf("year").subtract(1, "year"), n = r.endOf("year");
  return {
    from: r.startOf("day").toDate(),
    to: n.endOf("day").toDate(),
    relativeTimeString: ""
  };
};
function Cn(e, t, r) {
  const { from: n, to: a } = e;
  if (!n || !a) return;
  const o = n, i = a, s = (f, d) => t === "week" ? Ef(f, d) : t === "month" ? os(f, d) : t === "quarter" ? Sf(f, d) : kf(f, d), l = s(o, r), c = s(i, r);
  return { from: yf(l), to: Tf(c), relativeTimeString: "" };
}
const Df = [
  // Defaults
  {
    value: "Previous period",
    label: "defaults.comparisonPeriodOptions.previousPeriod|Previous period",
    dateFormat: "DD MMM YYYY",
    getRange: xf
  },
  {
    value: "Previous week",
    label: "defaults.comparisonPeriodOptions.previousWeek|Previous week",
    dateFormat: "MMM DD",
    getRange: _f
  },
  {
    value: "Previous month",
    label: "defaults.comparisonPeriodOptions.previousMonth|Previous month",
    dateFormat: "MMM YYYY",
    getRange: Of
  },
  {
    value: "Previous quarter",
    label: "defaults.comparisonPeriodOptions.previousQuarter|Previous quarter",
    dateFormat: "MMM YYYY",
    getRange: Af
  },
  {
    value: "Previous year",
    label: "defaults.comparisonPeriodOptions.previousYear|Previous year",
    dateFormat: "YYYY",
    getRange: Cf
  },
  // Same period last X
  {
    value: "Same period last week",
    label: "defaults.comparisonPeriodOptions.samePeriodLastWeek|Same period last week",
    dateFormat: "MMM DD",
    getRange: (e) => Cn(e, "week", -1)
  },
  {
    value: "Same period last month",
    label: "defaults.comparisonPeriodOptions.samePeriodLastMonth|Same period last month",
    dateFormat: "DD MMM",
    getRange: (e) => Cn(e, "month", -1)
  },
  {
    value: "Same period last quarter",
    label: "defaults.comparisonPeriodOptions.samePeriodLastQuarter|Same period last quarter",
    dateFormat: "DD MMM",
    getRange: (e) => Cn(e, "quarter", -1)
  },
  {
    value: "Same period last year",
    label: "defaults.comparisonPeriodOptions.samePeriodLastYear|Same period last year",
    dateFormat: "DD MMM YYYY",
    getRange: (e) => Cn(e, "year", -1)
  }
];
Le.extend(is);
Le.extend(ns);
Le.extend(as);
const qi = (e, t = 0) => {
  const r = Le.utc(e).add(t, "week"), n = r.startOf("isoWeek").toDate(), a = r.endOf("isoWeek").toDate();
  return {
    from: n,
    to: a,
    relativeTimeString: ""
  };
}, Aa = (e, t = 0) => {
  const r = Le.utc(e).add(t, "quarter"), n = r.startOf("quarter").toDate(), a = r.endOf("quarter").toDate();
  return {
    from: n,
    to: a,
    relativeTimeString: ""
  };
}, Rf = [
  {
    value: "Today",
    label: "defaults.dateRangeOptions.today|Today",
    dateFormat: "MMM DD",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.startOf("day").toDate(), r = e.endOf("day").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Yesterday",
    label: "defaults.dateRangeOptions.yesterday|Yesterday",
    dateFormat: "MMM DD",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.subtract(1, "day").startOf("day").toDate(), r = e.subtract(1, "day").endOf("day").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "This week",
    label: "defaults.dateRangeOptions.thisWeek|This week",
    dateFormat: "MMM DD",
    getRange: () => qi(/* @__PURE__ */ new Date(), 0)
  },
  {
    value: "Last week",
    label: "defaults.dateRangeOptions.lastWeek|Last week",
    dateFormat: "MMM DD",
    getRange: () => qi(/* @__PURE__ */ new Date(), -1)
  },
  {
    value: "Week to date",
    label: "defaults.dateRangeOptions.weekToDate|Week to date",
    dateFormat: "MMM DD",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.startOf("isoWeek").toDate(), r = e.endOf("day").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Last 7 days",
    label: "defaults.dateRangeOptions.last7Days|Last 7 days",
    dateFormat: "MMM DD",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.endOf("day").toDate();
      return {
        from: e.subtract(6, "day").startOf("day").toDate(),
        to: t,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Next 7 days",
    label: "defaults.dateRangeOptions.next7Days|Next 7 days",
    dateFormat: "MMM DD",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.startOf("day").toDate(), r = e.add(6, "day").endOf("day").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Last 30 days",
    label: "defaults.dateRangeOptions.last30Days|Last 30 days",
    dateFormat: "MMM DD",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.endOf("day").toDate();
      return {
        from: e.subtract(29, "day").startOf("day").toDate(),
        to: t,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Next 30 days",
    label: "defaults.dateRangeOptions.next30Days|Next 30 days",
    dateFormat: "MMM DD",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.startOf("day").toDate(), r = e.add(29, "day").endOf("day").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "This month",
    label: "defaults.dateRangeOptions.thisMonth|This month",
    dateFormat: "MMM YYYY",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.startOf("month").toDate(), r = e.endOf("month").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Last month",
    label: "defaults.dateRangeOptions.lastMonth|Last month",
    dateFormat: "MMM YYYY",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.subtract(1, "month").startOf("month").toDate(), r = e.subtract(1, "month").endOf("month").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Next month",
    label: "defaults.dateRangeOptions.nextMonth|Next month",
    dateFormat: "MMM YYYY",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.add(1, "month").startOf("month").toDate(), r = e.add(1, "month").endOf("month").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "This quarter",
    label: "defaults.dateRangeOptions.thisQuarter|This quarter",
    dateFormat: "MMM YYYY",
    getRange: () => Aa(/* @__PURE__ */ new Date(), 0)
  },
  {
    value: "Last quarter",
    label: "defaults.dateRangeOptions.lastQuarter|Last quarter",
    dateFormat: "MMM YYYY",
    getRange: () => Aa(/* @__PURE__ */ new Date(), -1)
  },
  {
    value: "Next quarter",
    label: "defaults.dateRangeOptions.nextQuarter|Next quarter",
    dateFormat: "MMM YYYY",
    getRange: () => Aa(/* @__PURE__ */ new Date(), 1)
  },
  {
    value: "Quarter to date",
    label: "defaults.dateRangeOptions.quarterToDate|Quarter to date",
    dateFormat: "MMM YYYY",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.startOf("quarter").toDate(), r = e.endOf("day").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Last 6 months",
    label: "defaults.dateRangeOptions.last6Months|Last 6 months",
    dateFormat: "MMM YYYY",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.endOf("day").toDate();
      return {
        from: e.subtract(6, "month").startOf("day").toDate(),
        to: t,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Last 12 months",
    label: "defaults.dateRangeOptions.last12Months|Last 12 months",
    dateFormat: "MMM YYYY",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.endOf("day").toDate();
      return {
        from: e.subtract(12, "month").startOf("day").toDate(),
        to: t,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "This year",
    label: "defaults.dateRangeOptions.thisYear|This year",
    dateFormat: "YYYY",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.startOf("year").toDate(), r = e.endOf("year").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Last year",
    label: "defaults.dateRangeOptions.lastYear|Last year",
    dateFormat: "YYYY",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.subtract(1, "year").startOf("year").toDate(), r = e.subtract(1, "year").endOf("year").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Next year",
    label: "defaults.dateRangeOptions.nextYear|Next year",
    dateFormat: "YYYY",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.add(1, "year").startOf("year").toDate(), r = e.add(1, "year").endOf("year").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  },
  {
    value: "Year to date",
    label: "defaults.dateRangeOptions.yearToDate|Year to date",
    dateFormat: "MMM YYYY",
    getRange: () => {
      const e = Le.utc(/* @__PURE__ */ new Date()), t = e.startOf("year").toDate(), r = e.endOf("day").toDate();
      return {
        from: t,
        to: r,
        relativeTimeString: ""
      };
    }
  }
], Qi = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-cloud-download'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M19%2018a3.5%203.5%200%200%200%200%20-7h-1a5%204.5%200%200%200%20-11%20-2a4.6%204.4%200%200%200%20-2.1%208.4'%20/%3e%3cpath%20d='M12%2013l0%209'%20/%3e%3cpath%20d='M9%2019l3%203l3%20-3'%20/%3e%3c/svg%3e", Nf = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-photo-down'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M15%208h.01'%20/%3e%3cpath%20d='M12.5%2021h-6.5a3%203%200%200%201%20-3%20-3v-12a3%203%200%200%201%203%20-3h12a3%203%200%200%201%203%203v6.5'%20/%3e%3cpath%20d='M3%2016l5%20-5c.928%20-.893%202.072%20-.893%203%200l4%204'%20/%3e%3cpath%20d='M14%2014l1%20-1c.653%20-.629%201.413%20-.815%202.13%20-.559'%20/%3e%3cpath%20d='M19%2016v6'%20/%3e%3cpath%20d='M22%2019l-3%203l-3%20-3'%20/%3e%3c/svg%3e";
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var Hn = {};
Hn.version = "0.20.3";
var er = 1200, dn = function(e) {
  er = e;
};
function Lf() {
  dn(1200);
}
var Dn = function(e) {
  return String.fromCharCode(e);
}, Zi = function(e) {
  return String.fromCharCode(e);
}, pt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function jn(e) {
  for (var t = "", r = 0, n = 0, a = 0, o = 0, i = 0, s = 0, l = 0, c = 0; c < e.length; )
    r = e.charCodeAt(c++), o = r >> 2, n = e.charCodeAt(c++), i = (r & 3) << 4 | n >> 4, a = e.charCodeAt(c++), s = (n & 15) << 2 | a >> 6, l = a & 63, isNaN(n) ? s = l = 64 : isNaN(a) && (l = 64), t += pt.charAt(o) + pt.charAt(i) + pt.charAt(s) + pt.charAt(l);
  return t;
}
function Mf(e) {
  for (var t = "", r = 0, n = 0, a = 0, o = 0, i = 0, s = 0, l = 0, c = 0; c < e.length; )
    r = e.charCodeAt(c++), r > 255 && (r = 95), o = r >> 2, n = e.charCodeAt(c++), n > 255 && (n = 95), i = (r & 3) << 4 | n >> 4, a = e.charCodeAt(c++), a > 255 && (a = 95), s = (n & 15) << 2 | a >> 6, l = a & 63, isNaN(n) ? s = l = 64 : isNaN(a) && (l = 64), t += pt.charAt(o) + pt.charAt(i) + pt.charAt(s) + pt.charAt(l);
  return t;
}
function If(e) {
  for (var t = "", r = 0, n = 0, a = 0, o = 0, i = 0, s = 0, l = 0, c = 0; c < e.length; )
    r = e[c++], o = r >> 2, n = e[c++], i = (r & 3) << 4 | n >> 4, a = e[c++], s = (n & 15) << 2 | a >> 6, l = a & 63, isNaN(n) ? s = l = 64 : isNaN(a) && (l = 64), t += pt.charAt(o) + pt.charAt(i) + pt.charAt(s) + pt.charAt(l);
  return t;
}
function cr(e) {
  var t = "", r = 0, n = 0, a = 0, o = 0, i = 0, s = 0, l = 0;
  if (e.slice(0, 5) == "data:") {
    var c = e.slice(0, 1024).indexOf(";base64,");
    c > -1 && (e = e.slice(c + 8));
  }
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var c = 0; c < e.length; )
    o = pt.indexOf(e.charAt(c++)), i = pt.indexOf(e.charAt(c++)), r = o << 2 | i >> 4, t += String.fromCharCode(r), s = pt.indexOf(e.charAt(c++)), n = (i & 15) << 4 | s >> 2, s !== 64 && (t += String.fromCharCode(n)), l = pt.indexOf(e.charAt(c++)), a = (s & 3) << 6 | l, l !== 64 && (t += String.fromCharCode(a));
  return t;
}
var Fe = /* @__PURE__ */ (function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
})(), Xt = /* @__PURE__ */ (function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e) try {
      Buffer.from("foo", "utf8");
    } catch {
      e = !0;
    }
    return e ? function(t, r) {
      return r ? new Buffer(t, r) : new Buffer(t);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
})(), Gn = /* @__PURE__ */ (function() {
  if (typeof Buffer > "u") return !1;
  var e = Xt([65, 0]);
  if (!e) return !1;
  var t = e.toString("utf16le");
  return t.length == 1;
})();
function yr(e) {
  return Fe ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function eo(e) {
  return Fe ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Dt = function(e) {
  return Fe ? Xt(e, "binary") : e.split("").map(function(t) {
    return t.charCodeAt(0) & 255;
  });
};
function ua(e) {
  if (typeof ArrayBuffer > "u") return Dt(e);
  for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n != e.length; ++n) r[n] = e.charCodeAt(n) & 255;
  return t;
}
function Tr(e) {
  if (Array.isArray(e)) return e.map(function(n) {
    return String.fromCharCode(n);
  }).join("");
  for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r]);
  return t.join("");
}
function Pf(e) {
  if (typeof Uint8Array > "u") throw new Error("Unsupported");
  return new Uint8Array(e);
}
var et = Fe ? function(e) {
  return Buffer.concat(e.map(function(t) {
    return Buffer.isBuffer(t) ? t : Xt(t);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var t = 0, r = 0;
    for (t = 0; t < e.length; ++t) r += e[t].length;
    var n = new Uint8Array(r), a = 0;
    for (t = 0, r = 0; t < e.length; r += a, ++t)
      a = e[t].length, e[t] instanceof Uint8Array ? n.set(e[t], r) : typeof e[t] == "string" ? n.set(new Uint8Array(Dt(e[t])), r) : n.set(new Uint8Array(e[t]), r);
    return n;
  }
  return [].concat.apply([], e.map(function(o) {
    return Array.isArray(o) ? o : [].slice.call(o);
  }));
};
function Ff(e) {
  for (var t = [], r = 0, n = e.length + 250, a = yr(e.length + 255), o = 0; o < e.length; ++o) {
    var i = e.charCodeAt(o);
    if (i < 128) a[r++] = i;
    else if (i < 2048)
      a[r++] = 192 | i >> 6 & 31, a[r++] = 128 | i & 63;
    else if (i >= 55296 && i < 57344) {
      i = (i & 1023) + 64;
      var s = e.charCodeAt(++o) & 1023;
      a[r++] = 240 | i >> 8 & 7, a[r++] = 128 | i >> 2 & 63, a[r++] = 128 | s >> 6 & 15 | (i & 3) << 4, a[r++] = 128 | s & 63;
    } else
      a[r++] = 224 | i >> 12 & 15, a[r++] = 128 | i >> 6 & 63, a[r++] = 128 | i & 63;
    r > n && (t.push(a.slice(0, r)), r = 0, a = yr(65535), n = 65530);
  }
  return t.push(a.slice(0, r)), et(t);
}
var sn = /\u0000/g, Rn = /[\u0001-\u0006]/g;
function Mr(e) {
  for (var t = "", r = e.length - 1; r >= 0; ) t += e.charAt(r--);
  return t;
}
function $t(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Ge("0", t - r.length) + r;
}
function ci(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Ge(" ", t - r.length) + r;
}
function Kn(e, t) {
  var r = "" + e;
  return r.length >= t ? r : r + Ge(" ", t - r.length);
}
function Uf(e, t) {
  var r = "" + Math.round(e);
  return r.length >= t ? r : Ge("0", t - r.length) + r;
}
function $f(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Ge("0", t - r.length) + r;
}
var to = /* @__PURE__ */ Math.pow(2, 32);
function Dr(e, t) {
  if (e > to || e < -to) return Uf(e, t);
  var r = Math.round(e);
  return $f(r, t);
}
function Yn(e, t) {
  return t = t || 0, e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108;
}
var ro = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], Ca = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function Bf(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e;
}
var Ve = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
}, no = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
}, zf = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function Jn(e, t, r) {
  for (var n = e < 0 ? -1 : 1, a = e * n, o = 0, i = 1, s = 0, l = 1, c = 0, f = 0, d = Math.floor(a); c < t && (d = Math.floor(a), s = d * i + o, f = d * c + l, !(a - d < 5e-8)); )
    a = 1 / (a - d), o = i, i = s, l = c, c = f;
  if (f > t && (c > t ? (f = l, s = o) : (f = c, s = i)), !r) return [0, n * s, f];
  var u = Math.floor(n * s / f);
  return [u, n * s - u * f, f];
}
function Wf(e) {
  var t = e.toPrecision(16);
  if (t.indexOf("e") > -1) {
    var r = t.slice(0, t.indexOf("e"));
    return r = r.indexOf(".") > -1 ? r.slice(0, r.slice(0, 2) == "0." ? 17 : 16) : r.slice(0, 15) + Ge("0", r.length - 15), r + t.slice(t.indexOf("e"));
  }
  var n = t.indexOf(".") > -1 ? t.slice(0, t.slice(0, 2) == "0." ? 17 : 16) : t.slice(0, 15) + Ge("0", t.length - 15);
  return Number(n);
}
function Rr(e, t, r) {
  if (e > 2958465 || e < 0) return null;
  e = Wf(e);
  var n = e | 0, a = Math.floor(86400 * (e - n)), o = 0, i = [], s = { D: n, T: a, u: 86400 * (e - n) - a, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(s.u) < 1e-6 && (s.u = 0), t && t.date1904 && (n += 1462), s.u > 0.9999 && (s.u = 0, ++a == 86400 && (s.T = a = 0, ++n, ++s.D)), n === 60)
    i = r ? [1317, 10, 29] : [1900, 2, 29], o = 3;
  else if (n === 0)
    i = r ? [1317, 8, 29] : [1900, 1, 0], o = 6;
  else {
    n > 60 && --n;
    var l = new Date(1900, 0, 1);
    l.setDate(l.getDate() + n - 1), i = [l.getFullYear(), l.getMonth() + 1, l.getDate()], o = l.getDay(), n < 60 && (o = (o + 6) % 7), r && (o = Kf(l, i));
  }
  return s.y = i[0], s.m = i[1], s.d = i[2], s.S = a % 60, a = Math.floor(a / 60), s.M = a % 60, a = Math.floor(a / 60), s.H = a, s.q = o, s;
}
function fi(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function Vf(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function Hf(e) {
  var t = e < 0 ? 12 : 11, r = fi(e.toFixed(12));
  return r.length <= t || (r = e.toPrecision(10), r.length <= t) ? r : e.toExponential(5);
}
function jf(e) {
  var t = fi(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0" ? e.toPrecision(6) : t;
}
function Gf(e) {
  if (!isFinite(e)) return isNaN(e) ? "#NUM!" : "#DIV/0!";
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return t >= -4 && t <= -1 ? r = e.toPrecision(10 + t) : Math.abs(t) <= 9 ? r = Hf(e) : t === 10 ? r = e.toFixed(10).substr(0, 12) : r = jf(e), fi(Vf(r.toUpperCase()));
}
function Qa(e, t) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : Gf(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return ar(14, ft(e, t && t.date1904), t);
  }
  throw new Error("unsupported value in General format: " + e);
}
function Kf(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function Yf(e, t, r, n) {
  var a = "", o = 0, i = 0, s = r.y, l, c = 0;
  switch (e) {
    case 98:
      s = r.y + 543;
    /* falls through */
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          l = s % 100, c = 2;
          break;
        default:
          l = s % 1e4, c = 4;
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          l = r.m, c = t.length;
          break;
        case 3:
          return Ca[r.m - 1][1];
        case 5:
          return Ca[r.m - 1][0];
        default:
          return Ca[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          l = r.d, c = t.length;
          break;
        case 3:
          return ro[r.q][0];
        default:
          return ro[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          l = 1 + (r.H + 11) % 12, c = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          l = r.H, c = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          l = r.M, c = t.length;
          break;
        default:
          throw "bad minute format: " + t;
      }
      break;
    case 115:
      if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000") throw "bad second format: " + t;
      return r.u === 0 && (t == "s" || t == "ss") ? $t(r.S, t.length) : (n >= 2 ? i = n === 3 ? 1e3 : 100 : i = n === 1 ? 10 : 1, o = Math.round(i * (r.S + r.u)), o >= 60 * i && (o = 0), t === "s" ? o === 0 ? "0" : "" + o / i : (a = $t(o, 2 + n), t === "ss" ? a.substr(0, 2) : "." + a.substr(2, t.length - 1)));
    case 90:
      switch (t) {
        case "[h]":
        case "[hh]":
          l = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          l = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          l = ((r.D * 24 + r.H) * 60 + r.M) * 60 + (n == 0 ? Math.round(r.S + r.u) : r.S);
          break;
        default:
          throw "bad abstime format: " + t;
      }
      c = t.length === 3 ? 1 : 2;
      break;
    case 101:
      l = s, c = 1;
      break;
  }
  var f = c > 0 ? $t(l, c) : "";
  return f;
}
function lr(e) {
  var t = 3;
  if (e.length <= t) return e;
  for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t) n += (n.length > 0 ? "," : "") + e.substr(r, t);
  return n;
}
var ss = /%/g;
function Jf(e, t, r) {
  var n = t.replace(ss, ""), a = t.length - n.length;
  return tr(e, n, r * Math.pow(10, 2 * a)) + Ge("%", a);
}
function Xf(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return tr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function ls(e, t) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return "0.0E+0";
    if (t < 0) return "-" + ls(e, -t);
    var a = e.indexOf(".");
    a === -1 && (a = e.indexOf("E"));
    var o = Math.floor(Math.log(t) * Math.LOG10E) % a;
    if (o < 0 && (o += a), r = (t / Math.pow(10, o)).toPrecision(n + 1 + (a + o) % a), r.indexOf("e") === -1) {
      var i = Math.floor(Math.log(t) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + o) : r += "E+" + (i - o); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, a) + "." + r.substr(2 + a), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(s, l, c, f) {
      return l + c + f.substr(0, (a + o) % a) + "." + f.substr(o) + "E";
    });
  } else r = t.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var cs = /# (\?+)( ?)\/( ?)(\d+)/;
function qf(e, t, r) {
  var n = parseInt(e[4], 10), a = Math.round(t * n), o = Math.floor(a / n), i = a - o * n, s = n;
  return r + (o === 0 ? "" : "" + o) + " " + (i === 0 ? Ge(" ", e[1].length + 1 + e[4].length) : ci(i, e[1].length) + e[2] + "/" + e[3] + $t(s, e[4].length));
}
function Qf(e, t, r) {
  return r + (t === 0 ? "" : "" + t) + Ge(" ", e[1].length + 2 + e[4].length);
}
var fs = /^#*0*\.([0#]+)/, us = /\)[^)]*[0#]/, hs = /\(###\) ###\\?-####/;
function Tt(e) {
  for (var t = "", r, n = 0; n != e.length; ++n) switch (r = e.charCodeAt(n)) {
    case 35:
      break;
    case 63:
      t += " ";
      break;
    case 48:
      t += "0";
      break;
    default:
      t += String.fromCharCode(r);
  }
  return t;
}
function ao(e, t) {
  var r = Math.pow(10, t);
  return "" + Math.round(e * r) / r;
}
function io(e, t) {
  var r = e - Math.floor(e), n = Math.pow(10, t);
  return t < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function Zf(e, t) {
  return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0;
}
function eu(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function Mt(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(us)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Mt("n", n, r) : "(" + Mt("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44) return Xf(e, t, r);
  if (t.indexOf("%") !== -1) return Jf(e, t, r);
  if (t.indexOf("E") !== -1) return ls(t, r);
  if (t.charCodeAt(0) === 36) return "$" + Mt(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var a, o, i, s, l = Math.abs(r), c = r < 0 ? "-" : "";
  if (t.match(/^00+$/)) return c + Dr(l, t.length);
  if (t.match(/^[#?]+$/))
    return a = Dr(r, 0), a === "0" && (a = ""), a.length > t.length ? a : Tt(t.substr(0, t.length - a.length)) + a;
  if (o = t.match(cs)) return qf(o, l, c);
  if (t.match(/^#+0+$/)) return c + Dr(l, t.length - t.indexOf("0"));
  if (o = t.match(fs))
    return a = ao(r, o[1].length).replace(/^([^\.]+)$/, "$1." + Tt(o[1])).replace(/\.$/, "." + Tt(o[1])).replace(/\.(\d*)$/, function(g, m) {
      return "." + m + Ge("0", Tt(
        /*::(*/
        o[1]
      ).length - m.length);
    }), t.indexOf("0.") !== -1 ? a : a.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), o = t.match(/^(0*)\.(#*)$/))
    return c + ao(l, o[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, o[1].length ? "0." : ".");
  if (o = t.match(/^#{1,3},##0(\.?)$/)) return c + lr(Dr(l, 0));
  if (o = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + Mt(e, t, -r) : lr("" + (Math.floor(r) + Zf(r, o[1].length))) + "." + $t(io(r, o[1].length), o[1].length);
  if (o = t.match(/^#,#*,#0/)) return Mt(e, t.replace(/^#,#*,/, ""), r);
  if (o = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return a = Mr(Mt(e, t.replace(/[\\-]/g, ""), r)), i = 0, Mr(Mr(t.replace(/\\/g, "")).replace(/[0#]/g, function(g) {
      return i < a.length ? a.charAt(i++) : g === "0" ? "0" : "";
    }));
  if (t.match(hs))
    return a = Mt(e, "##########", r), "(" + a.substr(0, 3) + ") " + a.substr(3, 3) + "-" + a.substr(6);
  var f = "";
  if (o = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(
      /*::String(*/
      o[4].length,
      7
    ), s = Jn(l, Math.pow(10, i) - 1, !1), a = "" + c, f = tr(
      "n",
      /*::String(*/
      o[1],
      s[1]
    ), f.charAt(f.length - 1) == " " && (f = f.substr(0, f.length - 1) + "0"), a += f + /*::String(*/
    o[2] + "/" + /*::String(*/
    o[3], f = Kn(s[2], i), f.length < o[4].length && (f = Tt(o[4].substr(o[4].length - f.length)) + f), a += f, a;
  if (o = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(Math.max(o[1].length, o[4].length), 7), s = Jn(l, Math.pow(10, i) - 1, !0), c + (s[0] || (s[1] ? "" : "0")) + " " + (s[1] ? ci(s[1], i) + o[2] + "/" + o[3] + Kn(s[2], i) : Ge(" ", 2 * i + 1 + o[2].length + o[3].length));
  if (o = t.match(/^[#0?]+$/))
    return a = Dr(r, 0), t.length <= a.length ? a : Tt(t.substr(0, t.length - a.length)) + a;
  if (o = t.match(/^([#0?]+)\.([#0]+)$/)) {
    a = "" + r.toFixed(Math.min(o[2].length, 10)).replace(/([^0])0+$/, "$1"), i = a.indexOf(".");
    var d = t.indexOf(".") - i, u = t.length - a.length - d;
    return Tt(t.substr(0, d) + a + t.substr(t.length - u));
  }
  if (o = t.match(/^00,000\.([#0]*0)$/))
    return i = io(r, o[1].length), r < 0 ? "-" + Mt(e, t, -r) : lr(eu(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(g) {
      return "00," + (g.length < 3 ? $t(0, 3 - g.length) : "") + g;
    }) + "." + $t(i, o[1].length);
  switch (t) {
    case "###,##0.00":
      return Mt(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var h = lr(Dr(l, 0));
      return h !== "0" ? c + h : "";
    case "###,###.00":
      return Mt(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return Mt(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + t + "|");
}
function tu(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return tr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function ru(e, t, r) {
  var n = t.replace(ss, ""), a = t.length - n.length;
  return tr(e, n, r * Math.pow(10, 2 * a)) + Ge("%", a);
}
function ds(e, t) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return "0.0E+0";
    if (t < 0) return "-" + ds(e, -t);
    var a = e.indexOf(".");
    a === -1 && (a = e.indexOf("E"));
    var o = Math.floor(Math.log(t) * Math.LOG10E) % a;
    if (o < 0 && (o += a), r = (t / Math.pow(10, o)).toPrecision(n + 1 + (a + o) % a), !r.match(/[Ee]/)) {
      var i = Math.floor(Math.log(t) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + o) : r += "E+" + (i - o), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(s, l, c, f) {
      return l + c + f.substr(0, (a + o) % a) + "." + f.substr(o) + "E";
    });
  } else r = t.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function zt(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(us)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? zt("n", n, r) : "(" + zt("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44) return tu(e, t, r);
  if (t.indexOf("%") !== -1) return ru(e, t, r);
  if (t.indexOf("E") !== -1) return ds(t, r);
  if (t.charCodeAt(0) === 36) return "$" + zt(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var a, o, i, s, l = Math.abs(r), c = r < 0 ? "-" : "";
  if (t.match(/^00+$/)) return c + $t(l, t.length);
  if (t.match(/^[#?]+$/))
    return a = "" + r, r === 0 && (a = ""), a.length > t.length ? a : Tt(t.substr(0, t.length - a.length)) + a;
  if (o = t.match(cs)) return Qf(o, l, c);
  if (t.match(/^#+0+$/)) return c + $t(l, t.length - t.indexOf("0"));
  if (o = t.match(fs))
    return a = ("" + r).replace(/^([^\.]+)$/, "$1." + Tt(o[1])).replace(/\.$/, "." + Tt(o[1])), a = a.replace(/\.(\d*)$/, function(g, m) {
      return "." + m + Ge("0", Tt(o[1]).length - m.length);
    }), t.indexOf("0.") !== -1 ? a : a.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), o = t.match(/^(0*)\.(#*)$/))
    return c + ("" + l).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, o[1].length ? "0." : ".");
  if (o = t.match(/^#{1,3},##0(\.?)$/)) return c + lr("" + l);
  if (o = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + zt(e, t, -r) : lr("" + r) + "." + Ge("0", o[1].length);
  if (o = t.match(/^#,#*,#0/)) return zt(e, t.replace(/^#,#*,/, ""), r);
  if (o = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return a = Mr(zt(e, t.replace(/[\\-]/g, ""), r)), i = 0, Mr(Mr(t.replace(/\\/g, "")).replace(/[0#]/g, function(g) {
      return i < a.length ? a.charAt(i++) : g === "0" ? "0" : "";
    }));
  if (t.match(hs))
    return a = zt(e, "##########", r), "(" + a.substr(0, 3) + ") " + a.substr(3, 3) + "-" + a.substr(6);
  var f = "";
  if (o = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(
      /*::String(*/
      o[4].length,
      7
    ), s = Jn(l, Math.pow(10, i) - 1, !1), a = "" + c, f = tr(
      "n",
      /*::String(*/
      o[1],
      s[1]
    ), f.charAt(f.length - 1) == " " && (f = f.substr(0, f.length - 1) + "0"), a += f + /*::String(*/
    o[2] + "/" + /*::String(*/
    o[3], f = Kn(s[2], i), f.length < o[4].length && (f = Tt(o[4].substr(o[4].length - f.length)) + f), a += f, a;
  if (o = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(Math.max(o[1].length, o[4].length), 7), s = Jn(l, Math.pow(10, i) - 1, !0), c + (s[0] || (s[1] ? "" : "0")) + " " + (s[1] ? ci(s[1], i) + o[2] + "/" + o[3] + Kn(s[2], i) : Ge(" ", 2 * i + 1 + o[2].length + o[3].length));
  if (o = t.match(/^[#0?]+$/))
    return a = "" + r, t.length <= a.length ? a : Tt(t.substr(0, t.length - a.length)) + a;
  if (o = t.match(/^([#0]+)\.([#0]+)$/)) {
    a = "" + r.toFixed(Math.min(o[2].length, 10)).replace(/([^0])0+$/, "$1"), i = a.indexOf(".");
    var d = t.indexOf(".") - i, u = t.length - a.length - d;
    return Tt(t.substr(0, d) + a + t.substr(t.length - u));
  }
  if (o = t.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + zt(e, t, -r) : lr("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(g) {
      return "00," + (g.length < 3 ? $t(0, 3 - g.length) : "") + g;
    }) + "." + $t(0, o[1].length);
  switch (t) {
    case "###,###":
    case "##,###":
    case "#,###":
      var h = lr("" + l);
      return h !== "0" ? c + h : "";
    default:
      if (t.match(/\.[0#?]*$/)) return zt(e, t.slice(0, t.lastIndexOf(".")), r) + Tt(t.slice(t.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + t + "|");
}
function tr(e, t, r) {
  return (r | 0) === r ? zt(e, t, r) : Mt(e, t, r);
}
function nu(e) {
  for (var t = [], r = !1, n = 0, a = 0; n < e.length; ++n) switch (
    /*cc=*/
    e.charCodeAt(n)
  ) {
    case 34:
      r = !r;
      break;
    case 95:
    case 42:
    case 92:
      ++n;
      break;
    case 59:
      t[t.length] = e.substr(a, n - a), a = n + 1;
  }
  if (t[t.length] = e.substr(a), r === !0) throw new Error("Format |" + e + "| unterminated string ");
  return t;
}
var ms = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Er(e) {
  for (var t = 0, r = "", n = ""; t < e.length; )
    switch (r = e.charAt(t)) {
      case "G":
        Yn(e, t) && (t += 6), t++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          e.charCodeAt(++t) !== 34 && t < e.length;
        )
          ;
        ++t;
        break;
      case "\\":
        t += 2;
        break;
      case "_":
        t += 2;
        break;
      case "@":
        ++t;
        break;
      case "B":
      case "b":
        if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2") return !0;
      /* falls through */
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      /* falls through */
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "上午/下午") return !0;
        ++t;
        break;
      case "[":
        for (n = r; e.charAt(t++) !== "]" && t < e.length; ) n += e.charAt(t);
        if (n.match(ms)) return !0;
        break;
      case ".":
      /* falls through */
      case "0":
      case "#":
        for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++t) === r; )
          ;
        break;
      case "*":
        ++t, (e.charAt(t) == " " || e.charAt(t) == "*") && ++t;
        break;
      case "(":
      case ")":
        ++t;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1; )
          ;
        break;
      case " ":
        ++t;
        break;
      default:
        ++t;
        break;
    }
  return !1;
}
function au(e, t, r, n) {
  for (var a = [], o = "", i = 0, s = "", l = "t", c, f, d, u = "H"; i < e.length; )
    switch (s = e.charAt(i)) {
      case "G":
        if (!Yn(e, i)) throw new Error("unrecognized character " + s + " in " + e);
        a[a.length] = { t: "G", v: "General" }, i += 7;
        break;
      case '"':
        for (o = ""; (d = e.charCodeAt(++i)) !== 34 && i < e.length; ) o += String.fromCharCode(d);
        a[a.length] = { t: "t", v: o }, ++i;
        break;
      case "\\":
        var h = e.charAt(++i), g = h === "(" || h === ")" ? h : "t";
        a[a.length] = { t: g, v: h }, ++i;
        break;
      case "_":
        a[a.length] = { t: "t", v: " " }, i += 2;
        break;
      case "@":
        a[a.length] = { t: "T", v: t }, ++i;
        break;
      case "B":
      case "b":
        if (e.charAt(i + 1) === "1" || e.charAt(i + 1) === "2") {
          if (c == null && (c = Rr(t, r, e.charAt(i + 1) === "2"), c == null))
            return "";
          a[a.length] = { t: "X", v: e.substr(i, 2) }, l = s, i += 2;
          break;
        }
      /* falls through */
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        s = s.toLowerCase();
      /* falls through */
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (t < 0 || c == null && (c = Rr(t, r), c == null))
          return "";
        for (o = s; ++i < e.length && e.charAt(i).toLowerCase() === s; ) o += s;
        s === "m" && l.toLowerCase() === "h" && (s = "M"), s === "h" && (s = u), a[a.length] = { t: s, v: o }, l = s;
        break;
      case "A":
      case "a":
      case "上":
        var m = { t: s, v: s };
        if (c == null && (c = Rr(t, r)), e.substr(i, 3).toUpperCase() === "A/P" ? (c != null && (m.v = c.H >= 12 ? e.charAt(i + 2) : s), m.t = "T", u = "h", i += 3) : e.substr(i, 5).toUpperCase() === "AM/PM" ? (c != null && (m.v = c.H >= 12 ? "PM" : "AM"), m.t = "T", i += 5, u = "h") : e.substr(i, 5).toUpperCase() === "上午/下午" ? (c != null && (m.v = c.H >= 12 ? "下午" : "上午"), m.t = "T", i += 5, u = "h") : (m.t = "t", ++i), c == null && m.t === "T") return "";
        a[a.length] = m, l = s;
        break;
      case "[":
        for (o = s; e.charAt(i++) !== "]" && i < e.length; ) o += e.charAt(i);
        if (o.slice(-1) !== "]") throw 'unterminated "[" block: |' + o + "|";
        if (o.match(ms)) {
          if (c == null && (c = Rr(t, r), c == null))
            return "";
          a[a.length] = { t: "Z", v: o.toLowerCase() }, l = o.charAt(1);
        } else o.indexOf("$") > -1 && (o = (o.match(/\$([^-\[\]]*)/) || [])[1] || "$", Er(e) || (a[a.length] = { t: "t", v: o }));
        break;
      /* Numbers */
      case ".":
        if (c != null) {
          for (o = s; ++i < e.length && (s = e.charAt(i)) === "0"; ) o += s;
          a[a.length] = { t: "s", v: o };
          break;
        }
      /* falls through */
      case "0":
      case "#":
        for (o = s; ++i < e.length && "0#?.,E+-%".indexOf(s = e.charAt(i)) > -1; ) o += s;
        a[a.length] = { t: "n", v: o };
        break;
      case "?":
        for (o = s; e.charAt(++i) === s; ) o += s;
        a[a.length] = { t: s, v: o }, l = s;
        break;
      case "*":
        ++i, (e.charAt(i) == " " || e.charAt(i) == "*") && ++i;
        break;
      // **
      case "(":
      case ")":
        a[a.length] = { t: n === 1 ? "t" : s, v: s }, ++i;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (o = s; i < e.length && "0123456789".indexOf(e.charAt(++i)) > -1; ) o += e.charAt(i);
        a[a.length] = { t: "D", v: o };
        break;
      case " ":
        a[a.length] = { t: s, v: s }, ++i;
        break;
      case "$":
        a[a.length] = { t: "t", v: "$" }, ++i;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(s) === -1) throw new Error("unrecognized character " + s + " in " + e);
        a[a.length] = { t: "t", v: s }, ++i;
        break;
    }
  var p = 0, w = 0, O;
  for (i = a.length - 1, l = "t"; i >= 0; --i)
    switch (a[i].t) {
      case "h":
      case "H":
        a[i].t = u, l = "h", p < 1 && (p = 1);
        break;
      case "s":
        (O = a[i].v.match(/\.0+$/)) && (w = Math.max(w, O[0].length - 1), p = 4), p < 3 && (p = 3);
      /* falls through */
      case "d":
      case "y":
      case "e":
        l = a[i].t;
        break;
      case "M":
        l = a[i].t, p < 2 && (p = 2);
        break;
      case "m":
        l === "s" && (a[i].t = "M", p < 2 && (p = 2));
        break;
      case "X":
        break;
      case "Z":
        p < 1 && a[i].v.match(/[Hh]/) && (p = 1), p < 2 && a[i].v.match(/[Mm]/) && (p = 2), p < 3 && a[i].v.match(/[Ss]/) && (p = 3);
    }
  var y;
  switch (p) {
    case 0:
      break;
    case 1:
    case 2:
    case 3:
      c.u >= 0.5 && (c.u = 0, ++c.S), c.S >= 60 && (c.S = 0, ++c.M), c.M >= 60 && (c.M = 0, ++c.H), c.H >= 24 && (c.H = 0, ++c.D, y = Rr(c.D), y.u = c.u, y.S = c.S, y.M = c.M, y.H = c.H, c = y);
      break;
    case 4:
      switch (w) {
        case 1:
          c.u = Math.round(c.u * 10) / 10;
          break;
        case 2:
          c.u = Math.round(c.u * 100) / 100;
          break;
        case 3:
          c.u = Math.round(c.u * 1e3) / 1e3;
          break;
      }
      c.u >= 1 && (c.u = 0, ++c.S), c.S >= 60 && (c.S = 0, ++c.M), c.M >= 60 && (c.M = 0, ++c.H), c.H >= 24 && (c.H = 0, ++c.D, y = Rr(c.D), y.u = c.u, y.S = c.S, y.M = c.M, y.H = c.H, c = y);
      break;
  }
  var B = "", I;
  for (i = 0; i < a.length; ++i)
    switch (a[i].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        a[i].v = "", a[i].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        a[i].v = Yf(a[i].t.charCodeAt(0), a[i].v, c, w), a[i].t = "t";
        break;
      case "n":
      case "?":
        for (I = i + 1; a[I] != null && ((s = a[I].t) === "?" || s === "D" || (s === " " || s === "t") && a[I + 1] != null && (a[I + 1].t === "?" || a[I + 1].t === "t" && a[I + 1].v === "/") || a[i].t === "(" && (s === " " || s === "n" || s === ")") || s === "t" && (a[I].v === "/" || a[I].v === " " && a[I + 1] != null && a[I + 1].t == "?")); )
          a[i].v += a[I].v, a[I] = { v: "", t: ";" }, ++I;
        B += a[i].v, i = I - 1;
        break;
      case "G":
        a[i].t = "t", a[i].v = Qa(t, r);
        break;
    }
  var G = "", v, k;
  if (B.length > 0) {
    B.charCodeAt(0) == 40 ? (v = t < 0 && B.charCodeAt(0) === 45 ? -t : t, k = tr("n", B, v)) : (v = t < 0 && n > 1 ? -t : t, k = tr("n", B, v), v < 0 && a[0] && a[0].t == "t" && (k = k.substr(1), a[0].v = "-" + a[0].v)), I = k.length - 1;
    var A = a.length;
    for (i = 0; i < a.length; ++i) if (a[i] != null && a[i].t != "t" && a[i].v.indexOf(".") > -1) {
      A = i;
      break;
    }
    var D = a.length;
    if (A === a.length && k.indexOf("E") === -1) {
      for (i = a.length - 1; i >= 0; --i)
        a[i] == null || "n?".indexOf(a[i].t) === -1 || (I >= a[i].v.length - 1 ? (I -= a[i].v.length, a[i].v = k.substr(I + 1, a[i].v.length)) : I < 0 ? a[i].v = "" : (a[i].v = k.substr(0, I + 1), I = -1), a[i].t = "t", D = i);
      I >= 0 && D < a.length && (a[D].v = k.substr(0, I + 1) + a[D].v);
    } else if (A !== a.length && k.indexOf("E") === -1) {
      for (I = k.indexOf(".") - 1, i = A; i >= 0; --i)
        if (!(a[i] == null || "n?".indexOf(a[i].t) === -1)) {
          for (f = a[i].v.indexOf(".") > -1 && i === A ? a[i].v.indexOf(".") - 1 : a[i].v.length - 1, G = a[i].v.substr(f + 1); f >= 0; --f)
            I >= 0 && (a[i].v.charAt(f) === "0" || a[i].v.charAt(f) === "#") && (G = k.charAt(I--) + G);
          a[i].v = G, a[i].t = "t", D = i;
        }
      for (I >= 0 && D < a.length && (a[D].v = k.substr(0, I + 1) + a[D].v), I = k.indexOf(".") + 1, i = A; i < a.length; ++i)
        if (!(a[i] == null || "n?(".indexOf(a[i].t) === -1 && i !== A)) {
          for (f = a[i].v.indexOf(".") > -1 && i === A ? a[i].v.indexOf(".") + 1 : 0, G = a[i].v.substr(0, f); f < a[i].v.length; ++f)
            I < k.length && (G += k.charAt(I++));
          a[i].v = G, a[i].t = "t", D = i;
        }
    }
  }
  for (i = 0; i < a.length; ++i) a[i] != null && "n?".indexOf(a[i].t) > -1 && (v = n > 1 && t < 0 && i > 0 && a[i - 1].v === "-" ? -t : t, a[i].v = tr(a[i].t, a[i].v, v), a[i].t = "t");
  var L = "";
  for (i = 0; i !== a.length; ++i) a[i] != null && (L += a[i].v);
  return L;
}
var oo = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function so(e, t) {
  if (t == null) return !1;
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case "=":
      if (e == r) return !0;
      break;
    case ">":
      if (e > r) return !0;
      break;
    case "<":
      if (e < r) return !0;
      break;
    case "<>":
      if (e != r) return !0;
      break;
    case ">=":
      if (e >= r) return !0;
      break;
    case "<=":
      if (e <= r) return !0;
      break;
  }
  return !1;
}
function iu(e, t) {
  var r = nu(e), n = r.length, a = r[n - 1].indexOf("@");
  if (n < 4 && a > -1 && --n, r.length > 4) throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof t != "number") return [4, r.length === 4 || a > -1 ? r[r.length - 1] : "@"];
  switch (typeof t == "number" && !isFinite(t) && (t = 0), r.length) {
    case 1:
      r = a > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = a > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = a > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var o = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1) return [n, o];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var i = r[0].match(oo), s = r[1].match(oo);
    return so(t, i) ? [n, r[0]] : so(t, s) ? [n, r[1]] : [n, r[i != null && s != null ? 2 : 1]];
  }
  return [n, o];
}
function ar(e, t, r) {
  r == null && (r = {});
  var n = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? n = r.dateNF : n = e;
      break;
    case "number":
      e == 14 && r.dateNF ? n = r.dateNF : n = (r.table != null ? r.table : Ve)[e], n == null && (n = r.table && r.table[no[e]] || Ve[no[e]]), n == null && (n = zf[e] || "General");
      break;
  }
  if (Yn(n, 0)) return Qa(t, r);
  t instanceof Date && (t = ft(t, r.date1904));
  var a = iu(n, t);
  if (Yn(a[1])) return Qa(t, r);
  if (t === !0) t = "TRUE";
  else if (t === !1) t = "FALSE";
  else {
    if (t === "" || t == null) return "";
    if (isNaN(t) && a[1].indexOf("0") > -1) return "#NUM!";
    if (!isFinite(t) && a[1].indexOf("0") > -1) return "#DIV/0!";
  }
  return au(a[1], t, r, a[0]);
}
function ps(e, t) {
  if (typeof t != "number") {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (Ve[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (Ve[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return Ve[t] = e, t;
}
function ha(e) {
  for (var t = 0; t != 392; ++t)
    e[t] !== void 0 && ps(e[t], t);
}
function da() {
  Ve = Bf();
}
var Xn = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function ou(e) {
  var t = typeof e == "number" ? Ve[e] : e;
  return t = t.replace(Xn, "(\\d+)"), Xn.lastIndex = 0, new RegExp("^" + t + "$");
}
function su(e, t, r) {
  var n = -1, a = -1, o = -1, i = -1, s = -1, l = -1;
  (t.match(Xn) || []).forEach(function(d, u) {
    var h = parseInt(r[u + 1], 10);
    switch (d.toLowerCase().charAt(0)) {
      case "y":
        n = h;
        break;
      case "d":
        o = h;
        break;
      case "h":
        i = h;
        break;
      case "s":
        l = h;
        break;
      case "m":
        i >= 0 ? s = h : a = h;
        break;
    }
  }), Xn.lastIndex = 0, l >= 0 && s == -1 && a >= 0 && (s = a, a = -1);
  var c = ("" + (n >= 0 ? n : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (a >= 1 ? a : 1)).slice(-2) + "-" + ("00" + (o >= 1 ? o : 1)).slice(-2);
  c.length == 7 && (c = "0" + c), c.length == 8 && (c = "20" + c);
  var f = ("00" + (i >= 0 ? i : 0)).slice(-2) + ":" + ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (l >= 0 ? l : 0)).slice(-2);
  return i == -1 && s == -1 && l == -1 ? c : n == -1 && a == -1 && o == -1 ? f : c + "T" + f;
}
var lu = {
  "d.m": "d\\.m"
  // Issue #2571 Google Sheets writes invalid format 'd.m', correct format is 'd"."m' or 'd\\.m'
};
function cu(e, t) {
  return ps(lu[e] || e, t);
}
var lo = /* @__PURE__ */ (function() {
  var e = {};
  e.version = "1.2.0";
  function t() {
    for (var v = 0, k = new Array(256), A = 0; A != 256; ++A)
      v = A, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1, k[A] = v;
    return typeof Int32Array < "u" ? new Int32Array(k) : k;
  }
  var r = t();
  function n(v) {
    var k = 0, A = 0, D = 0, L = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (D = 0; D != 256; ++D) L[D] = v[D];
    for (D = 0; D != 256; ++D)
      for (A = v[D], k = 256 + D; k < 4096; k += 256) A = L[k] = A >>> 8 ^ v[A & 255];
    var P = [];
    for (D = 1; D != 16; ++D) P[D - 1] = typeof Int32Array < "u" && typeof L.subarray == "function" ? L.subarray(D * 256, D * 256 + 256) : L.slice(D * 256, D * 256 + 256);
    return P;
  }
  var a = n(r), o = a[0], i = a[1], s = a[2], l = a[3], c = a[4], f = a[5], d = a[6], u = a[7], h = a[8], g = a[9], m = a[10], p = a[11], w = a[12], O = a[13], y = a[14];
  function B(v, k) {
    for (var A = k ^ -1, D = 0, L = v.length; D < L; ) A = A >>> 8 ^ r[(A ^ v.charCodeAt(D++)) & 255];
    return ~A;
  }
  function I(v, k) {
    for (var A = k ^ -1, D = v.length - 15, L = 0; L < D; ) A = y[v[L++] ^ A & 255] ^ O[v[L++] ^ A >> 8 & 255] ^ w[v[L++] ^ A >> 16 & 255] ^ p[v[L++] ^ A >>> 24] ^ m[v[L++]] ^ g[v[L++]] ^ h[v[L++]] ^ u[v[L++]] ^ d[v[L++]] ^ f[v[L++]] ^ c[v[L++]] ^ l[v[L++]] ^ s[v[L++]] ^ i[v[L++]] ^ o[v[L++]] ^ r[v[L++]];
    for (D += 15; L < D; ) A = A >>> 8 ^ r[(A ^ v[L++]) & 255];
    return ~A;
  }
  function G(v, k) {
    for (var A = k ^ -1, D = 0, L = v.length, P = 0, M = 0; D < L; )
      P = v.charCodeAt(D++), P < 128 ? A = A >>> 8 ^ r[(A ^ P) & 255] : P < 2048 ? (A = A >>> 8 ^ r[(A ^ (192 | P >> 6 & 31)) & 255], A = A >>> 8 ^ r[(A ^ (128 | P & 63)) & 255]) : P >= 55296 && P < 57344 ? (P = (P & 1023) + 64, M = v.charCodeAt(D++) & 1023, A = A >>> 8 ^ r[(A ^ (240 | P >> 8 & 7)) & 255], A = A >>> 8 ^ r[(A ^ (128 | P >> 2 & 63)) & 255], A = A >>> 8 ^ r[(A ^ (128 | M >> 6 & 15 | (P & 3) << 4)) & 255], A = A >>> 8 ^ r[(A ^ (128 | M & 63)) & 255]) : (A = A >>> 8 ^ r[(A ^ (224 | P >> 12 & 15)) & 255], A = A >>> 8 ^ r[(A ^ (128 | P >> 6 & 63)) & 255], A = A >>> 8 ^ r[(A ^ (128 | P & 63)) & 255]);
    return ~A;
  }
  return e.table = r, e.bstr = B, e.buf = I, e.str = G, e;
})(), ze = /* @__PURE__ */ (function() {
  var e = (
    /*::(*/
    {}
  );
  e.version = "1.2.2";
  function t(b, x) {
    for (var T = b.split("/"), E = x.split("/"), _ = 0, C = 0, W = Math.min(T.length, E.length); _ < W; ++_) {
      if (C = T[_].length - E[_].length) return C;
      if (T[_] != E[_]) return T[_] < E[_] ? -1 : 1;
    }
    return T.length - E.length;
  }
  function r(b) {
    if (b.charAt(b.length - 1) == "/") return b.slice(0, -1).indexOf("/") === -1 ? b : r(b.slice(0, -1));
    var x = b.lastIndexOf("/");
    return x === -1 ? b : b.slice(0, x + 1);
  }
  function n(b) {
    if (b.charAt(b.length - 1) == "/") return n(b.slice(0, -1));
    var x = b.lastIndexOf("/");
    return x === -1 ? b : b.slice(x + 1);
  }
  function a(b, x) {
    typeof x == "string" && (x = new Date(x));
    var T = x.getHours();
    T = T << 6 | x.getMinutes(), T = T << 5 | x.getSeconds() >>> 1, b.write_shift(2, T);
    var E = x.getFullYear() - 1980;
    E = E << 4 | x.getMonth() + 1, E = E << 5 | x.getDate(), b.write_shift(2, E);
  }
  function o(b) {
    var x = b.read_shift(2) & 65535, T = b.read_shift(2) & 65535, E = /* @__PURE__ */ new Date(), _ = T & 31;
    T >>>= 5;
    var C = T & 15;
    T >>>= 4, E.setMilliseconds(0), E.setFullYear(T + 1980), E.setMonth(C - 1), E.setDate(_);
    var W = x & 31;
    x >>>= 5;
    var Y = x & 63;
    return x >>>= 6, E.setHours(x), E.setMinutes(Y), E.setSeconds(W << 1), E;
  }
  function i(b) {
    Et(b, 0);
    for (var x = (
      /*::(*/
      {}
    ), T = 0; b.l <= b.length - 4; ) {
      var E = b.read_shift(2), _ = b.read_shift(2), C = b.l + _, W = {};
      switch (E) {
        /* UNIX-style Timestamps */
        case 21589:
          T = b.read_shift(1), T & 1 && (W.mtime = b.read_shift(4)), _ > 5 && (T & 2 && (W.atime = b.read_shift(4)), T & 4 && (W.ctime = b.read_shift(4))), W.mtime && (W.mt = new Date(W.mtime * 1e3));
          break;
        /* ZIP64 Extended Information Field */
        case 1:
          {
            var Y = b.read_shift(4), H = b.read_shift(4);
            W.usz = H * Math.pow(2, 32) + Y, Y = b.read_shift(4), H = b.read_shift(4), W.csz = H * Math.pow(2, 32) + Y;
          }
          break;
      }
      b.l = C, x[E] = W;
    }
    return x;
  }
  var s;
  function l() {
    return s || (s = fu);
  }
  function c(b, x) {
    if (b[0] == 80 && b[1] == 75) return Ni(b, x);
    if ((b[0] | 32) == 109 && (b[1] | 32) == 105) return Vl(b, x);
    if (b.length < 512) throw new Error("CFB file size " + b.length + " < 512");
    var T = 3, E = 512, _ = 0, C = 0, W = 0, Y = 0, H = 0, X = [], q = (
      /*::(*/
      b.slice(0, 512)
    );
    Et(q, 0);
    var ie = f(q);
    switch (T = ie[0], T) {
      case 3:
        E = 512;
        break;
      case 4:
        E = 4096;
        break;
      case 0:
        if (ie[1] == 0) return Ni(b, x);
      /* falls through */
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + T);
    }
    E !== 512 && (q = /*::(*/
    b.slice(0, E), Et(
      q,
      28
      /* blob.l */
    ));
    var ce = b.slice(0, E);
    d(q, T);
    var de = q.read_shift(4, "i");
    if (T === 3 && de !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + de);
    q.l += 4, W = q.read_shift(4, "i"), q.l += 4, q.chk("00100000", "Mini Stream Cutoff Size: "), Y = q.read_shift(4, "i"), _ = q.read_shift(4, "i"), H = q.read_shift(4, "i"), C = q.read_shift(4, "i");
    for (var le = -1, fe = 0; fe < 109 && (le = q.read_shift(4, "i"), !(le < 0)); ++fe)
      X[fe] = le;
    var Re = u(b, E);
    m(H, C, Re, E, X);
    var je = w(Re, W, X, E);
    W < je.length && (je[W].name = "!Directory"), _ > 0 && Y !== P && (je[Y].name = "!MiniFAT"), je[X[0]].name = "!FAT", je.fat_addrs = X, je.ssz = E;
    var Ye = {}, At = [], Xr = [], qr = [];
    O(W, je, Re, At, _, Ye, Xr, Y), h(Xr, qr, At), At.shift();
    var Qr = {
      FileIndex: Xr,
      FullPaths: qr
    };
    return x && x.raw && (Qr.raw = { header: ce, sectors: Re }), Qr;
  }
  function f(b) {
    if (b[b.l] == 80 && b[b.l + 1] == 75) return [0, 0];
    b.chk(M, "Header Signature: "), b.l += 16;
    var x = b.read_shift(2, "u");
    return [b.read_shift(2, "u"), x];
  }
  function d(b, x) {
    var T = 9;
    switch (b.l += 2, T = b.read_shift(2)) {
      case 9:
        if (x != 3) throw new Error("Sector Shift: Expected 9 saw " + T);
        break;
      case 12:
        if (x != 4) throw new Error("Sector Shift: Expected 12 saw " + T);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + T);
    }
    b.chk("0600", "Mini Sector Shift: "), b.chk("000000000000", "Reserved: ");
  }
  function u(b, x) {
    for (var T = Math.ceil(b.length / x) - 1, E = [], _ = 1; _ < T; ++_) E[_ - 1] = b.slice(_ * x, (_ + 1) * x);
    return E[T - 1] = b.slice(T * x), E;
  }
  function h(b, x, T) {
    for (var E = 0, _ = 0, C = 0, W = 0, Y = 0, H = T.length, X = [], q = []; E < H; ++E)
      X[E] = q[E] = E, x[E] = T[E];
    for (; Y < q.length; ++Y)
      E = q[Y], _ = b[E].L, C = b[E].R, W = b[E].C, X[E] === E && (_ !== -1 && X[_] !== _ && (X[E] = X[_]), C !== -1 && X[C] !== C && (X[E] = X[C])), W !== -1 && (X[W] = E), _ !== -1 && E != X[E] && (X[_] = X[E], q.lastIndexOf(_) < Y && q.push(_)), C !== -1 && E != X[E] && (X[C] = X[E], q.lastIndexOf(C) < Y && q.push(C));
    for (E = 1; E < H; ++E) X[E] === E && (C !== -1 && X[C] !== C ? X[E] = X[C] : _ !== -1 && X[_] !== _ && (X[E] = X[_]));
    for (E = 1; E < H; ++E)
      if (b[E].type !== 0) {
        if (Y = E, Y != X[Y]) do
          Y = X[Y], x[E] = x[Y] + "/" + x[E];
        while (Y !== 0 && X[Y] !== -1 && Y != X[Y]);
        X[E] = -1;
      }
    for (x[0] += "/", E = 1; E < H; ++E)
      b[E].type !== 2 && (x[E] += "/");
  }
  function g(b, x, T) {
    for (var E = b.start, _ = b.size, C = [], W = E; T && _ > 0 && W >= 0; )
      C.push(x.slice(W * L, W * L + L)), _ -= L, W = br(T, W * 4);
    return C.length === 0 ? j(0) : et(C).slice(0, b.size);
  }
  function m(b, x, T, E, _) {
    var C = P;
    if (b === P) {
      if (x !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (b !== -1) {
      var W = T[b], Y = (E >>> 2) - 1;
      if (!W) return;
      for (var H = 0; H < Y && (C = br(W, H * 4)) !== P; ++H)
        _.push(C);
      x >= 1 && m(br(W, E - 4), x - 1, T, E, _);
    }
  }
  function p(b, x, T, E, _) {
    var C = [], W = [];
    _ || (_ = []);
    var Y = E - 1, H = 0, X = 0;
    for (H = x; H >= 0; ) {
      _[H] = !0, C[C.length] = H, W.push(b[H]);
      var q = T[Math.floor(H * 4 / E)];
      if (X = H * 4 & Y, E < 4 + X) throw new Error("FAT boundary crossed: " + H + " 4 " + E);
      if (!b[q]) break;
      H = br(b[q], X);
    }
    return { nodes: C, data: go([W]) };
  }
  function w(b, x, T, E) {
    var _ = b.length, C = [], W = [], Y = [], H = [], X = E - 1, q = 0, ie = 0, ce = 0, de = 0;
    for (q = 0; q < _; ++q)
      if (Y = [], ce = q + x, ce >= _ && (ce -= _), !W[ce]) {
        H = [];
        var le = [];
        for (ie = ce; ie >= 0; ) {
          le[ie] = !0, W[ie] = !0, Y[Y.length] = ie, H.push(b[ie]);
          var fe = T[Math.floor(ie * 4 / E)];
          if (de = ie * 4 & X, E < 4 + de) throw new Error("FAT boundary crossed: " + ie + " 4 " + E);
          if (!b[fe] || (ie = br(b[fe], de), le[ie])) break;
        }
        C[ce] = { nodes: Y, data: go([H]) };
      }
    return C;
  }
  function O(b, x, T, E, _, C, W, Y) {
    for (var H = 0, X = E.length ? 2 : 0, q = x[b].data, ie = 0, ce = 0, de; ie < q.length; ie += 128) {
      var le = (
        /*::(*/
        q.slice(ie, ie + 128)
      );
      Et(le, 64), ce = le.read_shift(2), de = gi(le, 0, ce - X), E.push(de);
      var fe = {
        name: de,
        type: le.read_shift(1),
        color: le.read_shift(1),
        L: le.read_shift(4, "i"),
        R: le.read_shift(4, "i"),
        C: le.read_shift(4, "i"),
        clsid: le.read_shift(16),
        state: le.read_shift(4, "i"),
        start: 0,
        size: 0
      }, Re = le.read_shift(2) + le.read_shift(2) + le.read_shift(2) + le.read_shift(2);
      Re !== 0 && (fe.ct = y(le, le.l - 8));
      var je = le.read_shift(2) + le.read_shift(2) + le.read_shift(2) + le.read_shift(2);
      je !== 0 && (fe.mt = y(le, le.l - 8)), fe.start = le.read_shift(4, "i"), fe.size = le.read_shift(4, "i"), fe.size < 0 && fe.start < 0 && (fe.size = fe.type = 0, fe.start = P, fe.name = ""), fe.type === 5 ? (H = fe.start, _ > 0 && H !== P && (x[H].name = "!StreamData")) : fe.size >= 4096 ? (fe.storage = "fat", x[fe.start] === void 0 && (x[fe.start] = p(T, fe.start, x.fat_addrs, x.ssz)), x[fe.start].name = fe.name, fe.content = x[fe.start].data.slice(0, fe.size)) : (fe.storage = "minifat", fe.size < 0 ? fe.size = 0 : H !== P && fe.start !== P && x[H] && (fe.content = g(fe, x[H].data, (x[Y] || {}).data))), fe.content && Et(fe.content, 0), C[de] = fe, W.push(fe);
    }
  }
  function y(b, x) {
    return new Date((Nt(b, x + 4) / 1e7 * Math.pow(2, 32) + Nt(b, x) / 1e7 - 11644473600) * 1e3);
  }
  function B(b, x) {
    return l(), c(s.readFileSync(b), x);
  }
  function I(b, x) {
    var T = x && x.type;
    switch (T || Fe && Buffer.isBuffer(b) && (T = "buffer"), T || "base64") {
      case "file":
        return B(b, x);
      case "base64":
        return c(Dt(cr(b)), x);
      case "binary":
        return c(Dt(b), x);
    }
    return c(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      b,
      x
    );
  }
  function G(b, x) {
    var T = x || {}, E = T.root || "Root Entry";
    if (b.FullPaths || (b.FullPaths = []), b.FileIndex || (b.FileIndex = []), b.FullPaths.length !== b.FileIndex.length) throw new Error("inconsistent CFB structure");
    b.FullPaths.length === 0 && (b.FullPaths[0] = E + "/", b.FileIndex[0] = { name: E, type: 5 }), T.CLSID && (b.FileIndex[0].clsid = T.CLSID), v(b);
  }
  function v(b) {
    var x = "Sh33tJ5";
    if (!ze.find(b, "/" + x)) {
      var T = j(4);
      T[0] = 55, T[1] = T[3] = 50, T[2] = 54, b.FileIndex.push({ name: x, type: 2, content: T, size: 4, L: 69, R: 69, C: 69 }), b.FullPaths.push(b.FullPaths[0] + x), k(b);
    }
  }
  function k(b, x) {
    G(b);
    for (var T = !1, E = !1, _ = b.FullPaths.length - 1; _ >= 0; --_) {
      var C = b.FileIndex[_];
      switch (C.type) {
        case 0:
          E ? T = !0 : (b.FileIndex.pop(), b.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          E = !0, isNaN(C.R * C.L * C.C) && (T = !0), C.R > -1 && C.L > -1 && C.R == C.L && (T = !0);
          break;
        default:
          T = !0;
          break;
      }
    }
    if (!(!T && !x)) {
      var W = new Date(1987, 1, 19), Y = 0, H = Object.create ? /* @__PURE__ */ Object.create(null) : {}, X = [];
      for (_ = 0; _ < b.FullPaths.length; ++_)
        H[b.FullPaths[_]] = !0, b.FileIndex[_].type !== 0 && X.push([b.FullPaths[_], b.FileIndex[_]]);
      for (_ = 0; _ < X.length; ++_) {
        var q = r(X[_][0]);
        for (E = H[q]; !E; ) {
          for (; r(q) && !H[r(q)]; ) q = r(q);
          X.push([q, {
            name: n(q).replace("/", ""),
            type: 1,
            clsid: F,
            ct: W,
            mt: W,
            content: null
          }]), H[q] = !0, q = r(X[_][0]), E = H[q];
        }
      }
      for (X.sort(function(de, le) {
        return t(de[0], le[0]);
      }), b.FullPaths = [], b.FileIndex = [], _ = 0; _ < X.length; ++_)
        b.FullPaths[_] = X[_][0], b.FileIndex[_] = X[_][1];
      for (_ = 0; _ < X.length; ++_) {
        var ie = b.FileIndex[_], ce = b.FullPaths[_];
        if (ie.name = n(ce).replace("/", ""), ie.L = ie.R = ie.C = -(ie.color = 1), ie.size = ie.content ? ie.content.length : 0, ie.start = 0, ie.clsid = ie.clsid || F, _ === 0)
          ie.C = X.length > 1 ? 1 : -1, ie.size = 0, ie.type = 5;
        else if (ce.slice(-1) == "/") {
          for (Y = _ + 1; Y < X.length && r(b.FullPaths[Y]) != ce; ++Y) ;
          for (ie.C = Y >= X.length ? -1 : Y, Y = _ + 1; Y < X.length && r(b.FullPaths[Y]) != r(ce); ++Y) ;
          ie.R = Y >= X.length ? -1 : Y, ie.type = 1;
        } else
          r(b.FullPaths[_ + 1] || "") == r(ce) && (ie.R = _ + 1), ie.type = 2;
      }
    }
  }
  function A(b, x) {
    var T = x || {};
    if (T.fileType == "mad") return Hl(b, T);
    switch (k(b), T.fileType) {
      case "zip":
        return Fl(b, T);
    }
    var E = (function(de) {
      for (var le = 0, fe = 0, Re = 0; Re < de.FileIndex.length; ++Re) {
        var je = de.FileIndex[Re];
        if (je.content) {
          var Ye = je.content.length;
          Ye > 0 && (Ye < 4096 ? le += Ye + 63 >> 6 : fe += Ye + 511 >> 9);
        }
      }
      for (var At = de.FullPaths.length + 3 >> 2, Xr = le + 7 >> 3, qr = le + 127 >> 7, Qr = Xr + fe + At + qr, pr = Qr + 127 >> 7, ka = pr <= 109 ? 0 : Math.ceil((pr - 109) / 127); Qr + pr + ka + 127 >> 7 > pr; ) ka = ++pr <= 109 ? 0 : Math.ceil((pr - 109) / 127);
      var Qt = [1, ka, pr, qr, At, fe, le, 0];
      return de.FileIndex[0].size = le << 6, Qt[7] = (de.FileIndex[0].start = Qt[0] + Qt[1] + Qt[2] + Qt[3] + Qt[4] + Qt[5]) + (Qt[6] + 7 >> 3), Qt;
    })(b), _ = j(E[7] << 9), C = 0, W = 0;
    {
      for (C = 0; C < 8; ++C) _.write_shift(1, V[C]);
      for (C = 0; C < 8; ++C) _.write_shift(2, 0);
      for (_.write_shift(2, 62), _.write_shift(2, 3), _.write_shift(2, 65534), _.write_shift(2, 9), _.write_shift(2, 6), C = 0; C < 3; ++C) _.write_shift(2, 0);
      for (_.write_shift(4, 0), _.write_shift(4, E[2]), _.write_shift(4, E[0] + E[1] + E[2] + E[3] - 1), _.write_shift(4, 0), _.write_shift(4, 4096), _.write_shift(4, E[3] ? E[0] + E[1] + E[2] - 1 : P), _.write_shift(4, E[3]), _.write_shift(-4, E[1] ? E[0] - 1 : P), _.write_shift(4, E[1]), C = 0; C < 109; ++C) _.write_shift(-4, C < E[2] ? E[1] + C : -1);
    }
    if (E[1])
      for (W = 0; W < E[1]; ++W) {
        for (; C < 236 + W * 127; ++C) _.write_shift(-4, C < E[2] ? E[1] + C : -1);
        _.write_shift(-4, W === E[1] - 1 ? P : W + 1);
      }
    var Y = function(de) {
      for (W += de; C < W - 1; ++C) _.write_shift(-4, C + 1);
      de && (++C, _.write_shift(-4, P));
    };
    for (W = C = 0, W += E[1]; C < W; ++C) _.write_shift(-4, U.DIFSECT);
    for (W += E[2]; C < W; ++C) _.write_shift(-4, U.FATSECT);
    Y(E[3]), Y(E[4]);
    for (var H = 0, X = 0, q = b.FileIndex[0]; H < b.FileIndex.length; ++H)
      q = b.FileIndex[H], q.content && (X = q.content.length, !(X < 4096) && (q.start = W, Y(X + 511 >> 9)));
    for (Y(E[6] + 7 >> 3); _.l & 511; ) _.write_shift(-4, U.ENDOFCHAIN);
    for (W = C = 0, H = 0; H < b.FileIndex.length; ++H)
      q = b.FileIndex[H], q.content && (X = q.content.length, !(!X || X >= 4096) && (q.start = W, Y(X + 63 >> 6)));
    for (; _.l & 511; ) _.write_shift(-4, U.ENDOFCHAIN);
    for (C = 0; C < E[4] << 2; ++C) {
      var ie = b.FullPaths[C];
      if (!ie || ie.length === 0) {
        for (H = 0; H < 17; ++H) _.write_shift(4, 0);
        for (H = 0; H < 3; ++H) _.write_shift(4, -1);
        for (H = 0; H < 12; ++H) _.write_shift(4, 0);
        continue;
      }
      q = b.FileIndex[C], C === 0 && (q.start = q.size ? q.start - 1 : P);
      var ce = C === 0 && T.root || q.name;
      if (ce.length > 31 && (console.error("Name " + ce + " will be truncated to " + ce.slice(0, 31)), ce = ce.slice(0, 31)), X = 2 * (ce.length + 1), _.write_shift(64, ce, "utf16le"), _.write_shift(2, X), _.write_shift(1, q.type), _.write_shift(1, q.color), _.write_shift(-4, q.L), _.write_shift(-4, q.R), _.write_shift(-4, q.C), q.clsid) _.write_shift(16, q.clsid, "hex");
      else for (H = 0; H < 4; ++H) _.write_shift(4, 0);
      _.write_shift(4, q.state || 0), _.write_shift(4, 0), _.write_shift(4, 0), _.write_shift(4, 0), _.write_shift(4, 0), _.write_shift(4, q.start), _.write_shift(4, q.size), _.write_shift(4, 0);
    }
    for (C = 1; C < b.FileIndex.length; ++C)
      if (q = b.FileIndex[C], q.size >= 4096)
        if (_.l = q.start + 1 << 9, Fe && Buffer.isBuffer(q.content))
          q.content.copy(_, _.l, 0, q.size), _.l += q.size + 511 & -512;
        else {
          for (H = 0; H < q.size; ++H) _.write_shift(1, q.content[H]);
          for (; H & 511; ++H) _.write_shift(1, 0);
        }
    for (C = 1; C < b.FileIndex.length; ++C)
      if (q = b.FileIndex[C], q.size > 0 && q.size < 4096)
        if (Fe && Buffer.isBuffer(q.content))
          q.content.copy(_, _.l, 0, q.size), _.l += q.size + 63 & -64;
        else {
          for (H = 0; H < q.size; ++H) _.write_shift(1, q.content[H]);
          for (; H & 63; ++H) _.write_shift(1, 0);
        }
    if (Fe)
      _.l = _.length;
    else
      for (; _.l < _.length; ) _.write_shift(1, 0);
    return _;
  }
  function D(b, x) {
    var T = b.FullPaths.map(function(H) {
      return H.toUpperCase();
    }), E = T.map(function(H) {
      var X = H.split("/");
      return X[X.length - (H.slice(-1) == "/" ? 2 : 1)];
    }), _ = !1;
    x.charCodeAt(0) === 47 ? (_ = !0, x = T[0].slice(0, -1) + x) : _ = x.indexOf("/") !== -1;
    var C = x.toUpperCase(), W = _ === !0 ? T.indexOf(C) : E.indexOf(C);
    if (W !== -1) return b.FileIndex[W];
    var Y = !C.match(Rn);
    for (C = C.replace(sn, ""), Y && (C = C.replace(Rn, "!")), W = 0; W < T.length; ++W)
      if ((Y ? T[W].replace(Rn, "!") : T[W]).replace(sn, "") == C || (Y ? E[W].replace(Rn, "!") : E[W]).replace(sn, "") == C) return b.FileIndex[W];
    return null;
  }
  var L = 64, P = -2, M = "d0cf11e0a1b11ae1", V = [208, 207, 17, 224, 161, 177, 26, 225], F = "00000000000000000000000000000000", U = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: P,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: M,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: F,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function K(b, x, T) {
    l();
    var E = A(b, T);
    s.writeFileSync(x, E);
  }
  function Z(b) {
    for (var x = new Array(b.length), T = 0; T < b.length; ++T) x[T] = String.fromCharCode(b[T]);
    return x.join("");
  }
  function me(b, x) {
    var T = A(b, x);
    switch (x && x.type || "buffer") {
      case "file":
        return l(), s.writeFileSync(x.filename, T), T;
      case "binary":
        return typeof T == "string" ? T : Z(T);
      case "base64":
        return jn(typeof T == "string" ? T : Z(T));
      case "buffer":
        if (Fe) return Buffer.isBuffer(T) ? T : Xt(T);
      /* falls through */
      case "array":
        return typeof T == "string" ? Dt(T) : T;
    }
    return T;
  }
  var te;
  function ve(b) {
    try {
      var x = b.InflateRaw, T = new x();
      if (T._processChunk(new Uint8Array([3, 0]), T._finishFlushFlag), T.bytesRead) te = b;
      else throw new Error("zlib does not expose bytesRead");
    } catch (E) {
      console.error("cannot use native zlib: " + (E.message || E));
    }
  }
  function ne(b, x) {
    if (!te) return Jr(b, x);
    var T = te.InflateRaw, E = new T(), _ = E._processChunk(b.slice(b.l), E._finishFlushFlag);
    return b.l += E.bytesRead, _;
  }
  function Q(b) {
    return te ? te.deflateRawSync(b) : _n(b);
  }
  var ue = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], ye = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], xe = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function ke(b) {
    var x = (b << 1 | b << 11) & 139536 | (b << 5 | b << 15) & 558144;
    return (x >> 16 | x >> 8 | x) & 255;
  }
  for (var S = typeof Uint8Array < "u", z = S ? new Uint8Array(256) : [], N = 0; N < 256; ++N) z[N] = ke(N);
  function R(b, x) {
    var T = z[b & 255];
    return x <= 8 ? T >>> 8 - x : (T = T << 8 | z[b >> 8 & 255], x <= 16 ? T >>> 16 - x : (T = T << 8 | z[b >> 16 & 255], T >>> 24 - x));
  }
  function J(b, x) {
    var T = x & 7, E = x >>> 3;
    return (b[E] | (T <= 6 ? 0 : b[E + 1] << 8)) >>> T & 3;
  }
  function ae(b, x) {
    var T = x & 7, E = x >>> 3;
    return (b[E] | (T <= 5 ? 0 : b[E + 1] << 8)) >>> T & 7;
  }
  function se(b, x) {
    var T = x & 7, E = x >>> 3;
    return (b[E] | (T <= 4 ? 0 : b[E + 1] << 8)) >>> T & 15;
  }
  function Ee(b, x) {
    var T = x & 7, E = x >>> 3;
    return (b[E] | (T <= 3 ? 0 : b[E + 1] << 8)) >>> T & 31;
  }
  function pe(b, x) {
    var T = x & 7, E = x >>> 3;
    return (b[E] | (T <= 1 ? 0 : b[E + 1] << 8)) >>> T & 127;
  }
  function Oe(b, x, T) {
    var E = x & 7, _ = x >>> 3, C = (1 << T) - 1, W = b[_] >>> E;
    return T < 8 - E || (W |= b[_ + 1] << 8 - E, T < 16 - E) || (W |= b[_ + 2] << 16 - E, T < 24 - E) || (W |= b[_ + 3] << 24 - E), W & C;
  }
  function Se(b, x, T) {
    var E = x & 7, _ = x >>> 3;
    return E <= 5 ? b[_] |= (T & 7) << E : (b[_] |= T << E & 255, b[_ + 1] = (T & 7) >> 8 - E), x + 3;
  }
  function De(b, x, T) {
    var E = x & 7, _ = x >>> 3;
    return T = (T & 1) << E, b[_] |= T, x + 1;
  }
  function Me(b, x, T) {
    var E = x & 7, _ = x >>> 3;
    return T <<= E, b[_] |= T & 255, T >>>= 8, b[_ + 1] = T, x + 8;
  }
  function at(b, x, T) {
    var E = x & 7, _ = x >>> 3;
    return T <<= E, b[_] |= T & 255, T >>>= 8, b[_ + 1] = T & 255, b[_ + 2] = T >>> 8, x + 16;
  }
  function qe(b, x) {
    var T = b.length, E = 2 * T > x ? 2 * T : x + 5, _ = 0;
    if (T >= x) return b;
    if (Fe) {
      var C = eo(E);
      if (b.copy) b.copy(C);
      else for (; _ < b.length; ++_) C[_] = b[_];
      return C;
    } else if (S) {
      var W = new Uint8Array(E);
      if (W.set) W.set(b);
      else for (; _ < T; ++_) W[_] = b[_];
      return W;
    }
    return b.length = E, b;
  }
  function ge(b) {
    for (var x = new Array(b), T = 0; T < b; ++T) x[T] = 0;
    return x;
  }
  function We(b, x, T) {
    var E = 1, _ = 0, C = 0, W = 0, Y = 0, H = b.length, X = S ? new Uint16Array(32) : ge(32);
    for (C = 0; C < 32; ++C) X[C] = 0;
    for (C = H; C < T; ++C) b[C] = 0;
    H = b.length;
    var q = S ? new Uint16Array(H) : ge(H);
    for (C = 0; C < H; ++C)
      X[_ = b[C]]++, E < _ && (E = _), q[C] = 0;
    for (X[0] = 0, C = 1; C <= E; ++C) X[C + 16] = Y = Y + X[C - 1] << 1;
    for (C = 0; C < H; ++C)
      Y = b[C], Y != 0 && (q[C] = X[Y + 16]++);
    var ie = 0;
    for (C = 0; C < H; ++C)
      if (ie = b[C], ie != 0)
        for (Y = R(q[C], E) >> E - ie, W = (1 << E + 4 - ie) - 1; W >= 0; --W)
          x[Y | W << ie] = ie & 15 | C << 4;
    return E;
  }
  var he = S ? new Uint16Array(512) : ge(512), or = S ? new Uint16Array(32) : ge(32);
  if (!S) {
    for (var xt = 0; xt < 512; ++xt) he[xt] = 0;
    for (xt = 0; xt < 32; ++xt) or[xt] = 0;
  }
  (function() {
    for (var b = [], x = 0; x < 32; x++) b.push(5);
    We(b, or, 32);
    var T = [];
    for (x = 0; x <= 143; x++) T.push(8);
    for (; x <= 255; x++) T.push(9);
    for (; x <= 279; x++) T.push(7);
    for (; x <= 287; x++) T.push(8);
    We(T, he, 288);
  })();
  var ut = /* @__PURE__ */ (function() {
    for (var b = S ? new Uint8Array(32768) : [], x = 0, T = 0; x < xe.length - 1; ++x)
      for (; T < xe[x + 1]; ++T) b[T] = x;
    for (; T < 32768; ++T) b[T] = 29;
    var E = S ? new Uint8Array(259) : [];
    for (x = 0, T = 0; x < ye.length - 1; ++x)
      for (; T < ye[x + 1]; ++T) E[T] = x;
    function _(W, Y) {
      for (var H = 0; H < W.length; ) {
        var X = Math.min(65535, W.length - H), q = H + X == W.length;
        for (Y.write_shift(1, +q), Y.write_shift(2, X), Y.write_shift(2, ~X & 65535); X-- > 0; ) Y[Y.l++] = W[H++];
      }
      return Y.l;
    }
    function C(W, Y) {
      for (var H = 0, X = 0, q = S ? new Uint16Array(32768) : []; X < W.length; ) {
        var ie = (
          /* data.length - boff; */
          Math.min(65535, W.length - X)
        );
        if (ie < 10) {
          for (H = Se(Y, H, +(X + ie == W.length)), H & 7 && (H += 8 - (H & 7)), Y.l = H / 8 | 0, Y.write_shift(2, ie), Y.write_shift(2, ~ie & 65535); ie-- > 0; ) Y[Y.l++] = W[X++];
          H = Y.l * 8;
          continue;
        }
        H = Se(Y, H, +(X + ie == W.length) + 2);
        for (var ce = 0; ie-- > 0; ) {
          var de = W[X];
          ce = (ce << 5 ^ de) & 32767;
          var le = -1, fe = 0;
          if ((le = q[ce]) && (le |= X & -32768, le > X && (le -= 32768), le < X))
            for (; W[le + fe] == W[X + fe] && fe < 250; ) ++fe;
          if (fe > 2) {
            de = E[fe], de <= 22 ? H = Me(Y, H, z[de + 1] >> 1) - 1 : (Me(Y, H, 3), H += 5, Me(Y, H, z[de - 23] >> 5), H += 3);
            var Re = de < 8 ? 0 : de - 4 >> 2;
            Re > 0 && (at(Y, H, fe - ye[de]), H += Re), de = b[X - le], H = Me(Y, H, z[de] >> 3), H -= 3;
            var je = de < 4 ? 0 : de - 2 >> 1;
            je > 0 && (at(Y, H, X - le - xe[de]), H += je);
            for (var Ye = 0; Ye < fe; ++Ye)
              q[ce] = X & 32767, ce = (ce << 5 ^ W[X]) & 32767, ++X;
            ie -= fe - 1;
          } else
            de <= 143 ? de = de + 48 : H = De(Y, H, 1), H = Me(Y, H, z[de]), q[ce] = X & 32767, ++X;
        }
        H = Me(Y, H, 0) - 1;
      }
      return Y.l = (H + 7) / 8 | 0, Y.l;
    }
    return function(W, Y) {
      return W.length < 8 ? _(W, Y) : C(W, Y);
    };
  })();
  function _n(b) {
    var x = j(50 + Math.floor(b.length * 1.1)), T = ut(b, x);
    return x.slice(0, T);
  }
  var Yr = S ? new Uint16Array(32768) : ge(32768), Ie = S ? new Uint16Array(32768) : ge(32768), wt = S ? new Uint16Array(128) : ge(128), dr = 1, On = 1;
  function sr(b, x) {
    var T = Ee(b, x) + 257;
    x += 5;
    var E = Ee(b, x) + 1;
    x += 5;
    var _ = se(b, x) + 4;
    x += 4;
    for (var C = 0, W = S ? new Uint8Array(19) : ge(19), Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], H = 1, X = S ? new Uint8Array(8) : ge(8), q = S ? new Uint8Array(8) : ge(8), ie = W.length, ce = 0; ce < _; ++ce)
      W[ue[ce]] = C = ae(b, x), H < C && (H = C), X[C]++, x += 3;
    var de = 0;
    for (X[0] = 0, ce = 1; ce <= H; ++ce) q[ce] = de = de + X[ce - 1] << 1;
    for (ce = 0; ce < ie; ++ce) (de = W[ce]) != 0 && (Y[ce] = q[de]++);
    var le = 0;
    for (ce = 0; ce < ie; ++ce)
      if (le = W[ce], le != 0) {
        de = z[Y[ce]] >> 8 - le;
        for (var fe = (1 << 7 - le) - 1; fe >= 0; --fe) wt[de | fe << le] = le & 7 | ce << 3;
      }
    var Re = [];
    for (H = 1; Re.length < T + E; )
      switch (de = wt[pe(b, x)], x += de & 7, de >>>= 3) {
        case 16:
          for (C = 3 + J(b, x), x += 2, de = Re[Re.length - 1]; C-- > 0; ) Re.push(de);
          break;
        case 17:
          for (C = 3 + ae(b, x), x += 3; C-- > 0; ) Re.push(0);
          break;
        case 18:
          for (C = 11 + pe(b, x), x += 7; C-- > 0; ) Re.push(0);
          break;
        default:
          Re.push(de), H < de && (H = de);
          break;
      }
    var je = Re.slice(0, T), Ye = Re.slice(T);
    for (ce = T; ce < 286; ++ce) je[ce] = 0;
    for (ce = E; ce < 30; ++ce) Ye[ce] = 0;
    return dr = We(je, Yr, 286), On = We(Ye, Ie, 30), x;
  }
  function mr(b, x) {
    if (b[0] == 3 && !(b[1] & 3))
      return [yr(x), 2];
    for (var T = 0, E = 0, _ = eo(x || 1 << 18), C = 0, W = _.length >>> 0, Y = 0, H = 0; (E & 1) == 0; ) {
      if (E = ae(b, T), T += 3, E >>> 1)
        E >> 1 == 1 ? (Y = 9, H = 5) : (T = sr(b, T), Y = dr, H = On);
      else {
        T & 7 && (T += 8 - (T & 7));
        var X = b[T >>> 3] | b[(T >>> 3) + 1] << 8;
        if (T += 32, X > 0)
          for (!x && W < C + X && (_ = qe(_, C + X), W = _.length); X-- > 0; )
            _[C++] = b[T >>> 3], T += 8;
        continue;
      }
      for (; ; ) {
        !x && W < C + 32767 && (_ = qe(_, C + 32767), W = _.length);
        var q = Oe(b, T, Y), ie = E >>> 1 == 1 ? he[q] : Yr[q];
        if (T += ie & 15, ie >>>= 4, (ie >>> 8 & 255) === 0) _[C++] = ie;
        else {
          if (ie == 256) break;
          ie -= 257;
          var ce = ie < 8 ? 0 : ie - 4 >> 2;
          ce > 5 && (ce = 0);
          var de = C + ye[ie];
          ce > 0 && (de += Oe(b, T, ce), T += ce), q = Oe(b, T, H), ie = E >>> 1 == 1 ? or[q] : Ie[q], T += ie & 15, ie >>>= 4;
          var le = ie < 4 ? 0 : ie - 2 >> 1, fe = xe[ie];
          for (le > 0 && (fe += Oe(b, T, le), T += le), !x && W < de && (_ = qe(_, de + 100), W = _.length); C < de; )
            _[C] = _[C - fe], ++C;
        }
      }
    }
    return x ? [_, T + 7 >>> 3] : [_.slice(0, C), T + 7 >>> 3];
  }
  function Jr(b, x) {
    var T = b.slice(b.l || 0), E = mr(T, x);
    return b.l += E[1], E[0];
  }
  function Ri(b, x) {
    if (b)
      typeof console < "u" && console.error(x);
    else throw new Error(x);
  }
  function Ni(b, x) {
    var T = (
      /*::(*/
      b
    );
    Et(T, 0);
    var E = [], _ = [], C = {
      FileIndex: E,
      FullPaths: _
    };
    G(C, { root: x.root });
    for (var W = T.length - 4; (T[W] != 80 || T[W + 1] != 75 || T[W + 2] != 5 || T[W + 3] != 6) && W >= 0; ) --W;
    T.l = W + 4, T.l += 4;
    var Y = T.read_shift(2);
    T.l += 6;
    var H = T.read_shift(4);
    for (T.l = H, W = 0; W < Y; ++W) {
      T.l += 20;
      var X = T.read_shift(4), q = T.read_shift(4), ie = T.read_shift(2), ce = T.read_shift(2), de = T.read_shift(2);
      T.l += 8;
      var le = T.read_shift(4), fe = i(
        /*::(*/
        T.slice(T.l + ie, T.l + ie + ce)
        /*:: :any)*/
      );
      T.l += ie + ce + de;
      var Re = T.l;
      T.l = le + 4, fe && fe[1] && ((fe[1] || {}).usz && (q = fe[1].usz), (fe[1] || {}).csz && (X = fe[1].csz)), Pl(T, X, q, C, fe), T.l = Re;
    }
    return C;
  }
  function Pl(b, x, T, E, _) {
    b.l += 2;
    var C = b.read_shift(2), W = b.read_shift(2), Y = o(b);
    if (C & 8257) throw new Error("Unsupported ZIP encryption");
    for (var H = b.read_shift(4), X = b.read_shift(4), q = b.read_shift(4), ie = b.read_shift(2), ce = b.read_shift(2), de = "", le = 0; le < ie; ++le) de += String.fromCharCode(b[b.l++]);
    if (ce) {
      var fe = i(
        /*::(*/
        b.slice(b.l, b.l + ce)
        /*:: :any)*/
      );
      (fe[21589] || {}).mt && (Y = fe[21589].mt), (fe[1] || {}).usz && (q = fe[1].usz), (fe[1] || {}).csz && (X = fe[1].csz), _ && ((_[21589] || {}).mt && (Y = _[21589].mt), (_[1] || {}).usz && (q = _[1].usz), (_[1] || {}).csz && (X = _[1].csz));
    }
    b.l += ce;
    var Re = b.slice(b.l, b.l + X);
    switch (W) {
      case 8:
        Re = ne(b, q);
        break;
      case 0:
        b.l += X;
        break;
      // TODO: scan for magic number
      default:
        throw new Error("Unsupported ZIP Compression method " + W);
    }
    var je = !1;
    C & 8 && (H = b.read_shift(4), H == 134695760 && (H = b.read_shift(4), je = !0), X = b.read_shift(4), q = b.read_shift(4)), X != x && Ri(je, "Bad compressed size: " + x + " != " + X), q != T && Ri(je, "Bad uncompressed size: " + T + " != " + q), Sa(E, de, Re, { unsafe: !0, mt: Y });
  }
  function Fl(b, x) {
    var T = x || {}, E = [], _ = [], C = j(1), W = T.compression ? 8 : 0, Y = 0, H = 0, X = 0, q = 0, ie = 0, ce = b.FullPaths[0], de = ce, le = b.FileIndex[0], fe = [], Re = 0;
    for (H = 1; H < b.FullPaths.length; ++H)
      if (de = b.FullPaths[H].slice(ce.length), le = b.FileIndex[H], !(!le.size || !le.content || Array.isArray(le.content) && le.content.length == 0 || de == "Sh33tJ5")) {
        var je = q, Ye = j(de.length);
        for (X = 0; X < de.length; ++X) Ye.write_shift(1, de.charCodeAt(X) & 127);
        Ye = Ye.slice(0, Ye.l), fe[ie] = typeof le.content == "string" ? lo.bstr(le.content, 0) : lo.buf(
          /*::((*/
          le.content,
          0
        );
        var At = typeof le.content == "string" ? Dt(le.content) : le.content;
        W == 8 && (At = Q(At)), C = j(30), C.write_shift(4, 67324752), C.write_shift(2, 20), C.write_shift(2, Y), C.write_shift(2, W), le.mt ? a(C, le.mt) : C.write_shift(4, 0), C.write_shift(-4, fe[ie]), C.write_shift(4, At.length), C.write_shift(
          4,
          /*::(*/
          le.content.length
        ), C.write_shift(2, Ye.length), C.write_shift(2, 0), q += C.length, E.push(C), q += Ye.length, E.push(Ye), q += At.length, E.push(At), C = j(46), C.write_shift(4, 33639248), C.write_shift(2, 0), C.write_shift(2, 20), C.write_shift(2, Y), C.write_shift(2, W), C.write_shift(4, 0), C.write_shift(-4, fe[ie]), C.write_shift(4, At.length), C.write_shift(
          4,
          /*::(*/
          le.content.length
        ), C.write_shift(2, Ye.length), C.write_shift(2, 0), C.write_shift(2, 0), C.write_shift(2, 0), C.write_shift(2, 0), C.write_shift(4, 0), C.write_shift(4, je), Re += C.l, _.push(C), Re += Ye.length, _.push(Ye), ++ie;
      }
    return C = j(22), C.write_shift(4, 101010256), C.write_shift(2, 0), C.write_shift(2, 0), C.write_shift(2, ie), C.write_shift(2, ie), C.write_shift(4, Re), C.write_shift(4, q), C.write_shift(2, 0), et([et(E), et(_), C]);
  }
  var Ea = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function Ul(b, x) {
    if (b.ctype) return b.ctype;
    var T = b.name || "", E = T.match(/\.([^\.]+)$/);
    return E && Ea[E[1]] || x && (E = (T = x).match(/[\.\\]([^\.\\])+$/), E && Ea[E[1]]) ? Ea[E[1]] : "application/octet-stream";
  }
  function $l(b) {
    for (var x = jn(b), T = [], E = 0; E < x.length; E += 76) T.push(x.slice(E, E + 76));
    return T.join(`\r
`) + `\r
`;
  }
  function Bl(b) {
    var x = b.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(X) {
      var q = X.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (q.length == 1 ? "0" + q : q);
    });
    x = x.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), x.charAt(0) == `
` && (x = "=0D" + x.slice(1)), x = x.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var T = [], E = x.split(`\r
`), _ = 0; _ < E.length; ++_) {
      var C = E[_];
      if (C.length == 0) {
        T.push("");
        continue;
      }
      for (var W = 0; W < C.length; ) {
        var Y = 76, H = C.slice(W, W + Y);
        H.charAt(Y - 1) == "=" ? Y-- : H.charAt(Y - 2) == "=" ? Y -= 2 : H.charAt(Y - 3) == "=" && (Y -= 3), H = C.slice(W, W + Y), W += Y, W < C.length && (H += "="), T.push(H);
      }
    }
    return T.join(`\r
`);
  }
  function zl(b) {
    for (var x = [], T = 0; T < b.length; ++T) {
      for (var E = b[T]; T <= b.length && E.charAt(E.length - 1) == "="; ) E = E.slice(0, E.length - 1) + b[++T];
      x.push(E);
    }
    for (var _ = 0; _ < x.length; ++_) x[_] = x[_].replace(/[=][0-9A-Fa-f]{2}/g, function(C) {
      return String.fromCharCode(parseInt(C.slice(1), 16));
    });
    return Dt(x.join(`\r
`));
  }
  function Wl(b, x, T) {
    for (var E = "", _ = "", C = "", W, Y = 0; Y < 10; ++Y) {
      var H = x[Y];
      if (!H || H.match(/^\s*$/)) break;
      var X = H.match(/^([^:]*?):\s*([^\s].*)$/);
      if (X) switch (X[1].toLowerCase()) {
        case "content-location":
          E = X[2].trim();
          break;
        case "content-type":
          C = X[2].trim();
          break;
        case "content-transfer-encoding":
          _ = X[2].trim();
          break;
      }
    }
    switch (++Y, _.toLowerCase()) {
      case "base64":
        W = Dt(cr(x.slice(Y).join("")));
        break;
      case "quoted-printable":
        W = zl(x.slice(Y));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + _);
    }
    var q = Sa(b, E.slice(T.length), W, { unsafe: !0 });
    C && (q.ctype = C);
  }
  function Vl(b, x) {
    if (Z(b.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var T = x && x.root || "", E = (Fe && Buffer.isBuffer(b) ? b.toString("binary") : Z(b)).split(`\r
`), _ = 0, C = "";
    for (_ = 0; _ < E.length; ++_)
      if (C = E[_], !!/^Content-Location:/i.test(C) && (C = C.slice(C.indexOf("file")), T || (T = C.slice(0, C.lastIndexOf("/") + 1)), C.slice(0, T.length) != T))
        for (; T.length > 0 && (T = T.slice(0, T.length - 1), T = T.slice(0, T.lastIndexOf("/") + 1), C.slice(0, T.length) != T); )
          ;
    var W = (E[1] || "").match(/boundary="(.*?)"/);
    if (!W) throw new Error("MAD cannot find boundary");
    var Y = "--" + (W[1] || ""), H = [], X = [], q = {
      FileIndex: H,
      FullPaths: X
    };
    G(q);
    var ie, ce = 0;
    for (_ = 0; _ < E.length; ++_) {
      var de = E[_];
      de !== Y && de !== Y + "--" || (ce++ && Wl(q, E.slice(ie, _), T), ie = _);
    }
    return q;
  }
  function Hl(b, x) {
    var T = x || {}, E = T.boundary || "SheetJS";
    E = "------=" + E;
    for (var _ = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + E.slice(2) + '"',
      "",
      "",
      ""
    ], C = b.FullPaths[0], W = C, Y = b.FileIndex[0], H = 1; H < b.FullPaths.length; ++H)
      if (W = b.FullPaths[H].slice(C.length), Y = b.FileIndex[H], !(!Y.size || !Y.content || W == "Sh33tJ5")) {
        W = W.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(Re) {
          return "_x" + Re.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(Re) {
          return "_u" + Re.charCodeAt(0).toString(16) + "_";
        });
        for (var X = Y.content, q = Fe && Buffer.isBuffer(X) ? X.toString("binary") : Z(X), ie = 0, ce = Math.min(1024, q.length), de = 0, le = 0; le <= ce; ++le) (de = q.charCodeAt(le)) >= 32 && de < 128 && ++ie;
        var fe = ie >= ce * 4 / 5;
        _.push(E), _.push("Content-Location: " + (T.root || "file:///C:/SheetJS/") + W), _.push("Content-Transfer-Encoding: " + (fe ? "quoted-printable" : "base64")), _.push("Content-Type: " + Ul(Y, W)), _.push(""), _.push(fe ? Bl(q) : $l(q));
      }
    return _.push(E + `--\r
`), _.join(`\r
`);
  }
  function jl(b) {
    var x = {};
    return G(x, b), x;
  }
  function Sa(b, x, T, E) {
    var _ = E && E.unsafe;
    _ || G(b);
    var C = !_ && ze.find(b, x);
    if (!C) {
      var W = b.FullPaths[0];
      x.slice(0, W.length) == W ? W = x : (W.slice(-1) != "/" && (W += "/"), W = (W + x).replace("//", "/")), C = { name: n(x), type: 2 }, b.FileIndex.push(C), b.FullPaths.push(W), _ || ze.utils.cfb_gc(b);
    }
    return C.content = T, C.size = T ? T.length : 0, E && (E.CLSID && (C.clsid = E.CLSID), E.mt && (C.mt = E.mt), E.ct && (C.ct = E.ct)), C;
  }
  function Gl(b, x) {
    G(b);
    var T = ze.find(b, x);
    if (T) {
      for (var E = 0; E < b.FileIndex.length; ++E) if (b.FileIndex[E] == T)
        return b.FileIndex.splice(E, 1), b.FullPaths.splice(E, 1), !0;
    }
    return !1;
  }
  function Kl(b, x, T) {
    G(b);
    var E = ze.find(b, x);
    if (E) {
      for (var _ = 0; _ < b.FileIndex.length; ++_) if (b.FileIndex[_] == E)
        return b.FileIndex[_].name = n(T), b.FullPaths[_] = T, !0;
    }
    return !1;
  }
  function Yl(b) {
    k(b, !0);
  }
  return e.find = D, e.read = I, e.parse = c, e.write = me, e.writeFile = K, e.utils = {
    cfb_new: jl,
    cfb_add: Sa,
    cfb_del: Gl,
    cfb_mov: Kl,
    cfb_gc: Yl,
    ReadShift: ln,
    CheckField: Ns,
    prep_blob: Et,
    bconcat: et,
    use_zlib: ve,
    _deflateRaw: _n,
    _inflateRaw: Jr,
    consts: U
  }, e;
})(), fu;
function co(e) {
  return typeof e == "string" ? ua(e) : Array.isArray(e) ? Pf(e) : e;
}
function En(e, t, r) {
  if (typeof Deno < "u") {
    if (r && typeof t == "string") switch (r) {
      case "utf8":
        t = new TextEncoder(r).encode(t);
        break;
      case "binary":
        t = ua(t);
        break;
      /* TODO: binary equivalent */
      default:
        throw new Error("Unsupported encoding " + r);
    }
    return Deno.writeFileSync(e, t);
  }
  var n = r == "utf8" ? mn(t) : t;
  if (typeof IE_SaveFile < "u") return IE_SaveFile(n, e);
  if (typeof Blob < "u") {
    var a = new Blob([co(n)], { type: "application/octet-stream" });
    if (typeof navigator < "u" && navigator.msSaveBlob) return navigator.msSaveBlob(a, e);
    if (typeof saveAs < "u") return saveAs(a, e);
    if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
      var o = URL.createObjectURL(a);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function")
        return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(o);
        }, 6e4), chrome.downloads.download({ url: o, filename: e, saveAs: !0 });
      var i = document.createElement("a");
      if (i.download != null)
        return i.download = e, i.href = o, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(o);
        }, 6e4), o;
    } else if (typeof URL < "u" && !URL.createObjectURL && typeof chrome == "object") {
      var s = "data:application/octet-stream;base64," + If(new Uint8Array(co(n)));
      return chrome.downloads.download({ url: s, filename: e, saveAs: !0 });
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var l = File(e);
    return l.open("w"), l.encoding = "binary", Array.isArray(t) && (t = Tr(t)), l.write(t), l.close(), t;
  } catch (c) {
    if (!c.message || c.message.indexOf("onstruct") == -1) throw c;
  }
  throw new Error("cannot save file " + e);
}
function tt(e) {
  for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n) Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
  return r;
}
function fo(e, t) {
  for (var r = [], n = tt(e), a = 0; a !== n.length; ++a) r[e[n[a]][t]] == null && (r[e[n[a]][t]] = n[a]);
  return r;
}
function ui(e) {
  for (var t = [], r = tt(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = r[n];
  return t;
}
function ma(e) {
  for (var t = [], r = tt(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = parseInt(r[n], 10);
  return t;
}
function uu(e) {
  for (var t = [], r = tt(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n]);
  return t;
}
var gs = /* @__PURE__ */ Date.UTC(1899, 11, 30, 0, 0, 0), hu = /* @__PURE__ */ Date.UTC(1899, 11, 31, 0, 0, 0), du = /* @__PURE__ */ Date.UTC(1904, 0, 1, 0, 0, 0);
function ft(e, t) {
  var r = /* @__PURE__ */ e.getTime(), n = (r - gs) / (1440 * 60 * 1e3);
  return t ? (n -= 1462, n < -1402 ? n - 1 : n) : n < 60 ? n - 1 : n;
}
function Ir(e) {
  if (e >= 60 && e < 61) return e;
  var t = /* @__PURE__ */ new Date();
  return t.setTime((e > 60 ? e : e + 1) * 24 * 60 * 60 * 1e3 + gs), t;
}
var mu = /^(\d+):(\d+)(:\d+)?(\.\d+)?$/, pu = /^(\d+)-(\d+)-(\d+)$/, vs = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;
function Ot(e, t) {
  if (e instanceof Date) return e;
  var r = e.match(mu);
  if (r) return new Date((t ? du : hu) + ((parseInt(r[1], 10) * 60 + parseInt(r[2], 10)) * 60 + (r[3] ? parseInt(r[3].slice(1), 10) : 0)) * 1e3 + (r[4] ? parseInt((r[4] + "000").slice(1, 4), 10) : 0));
  if (r = e.match(pu), r) return new Date(Date.UTC(+r[1], +r[2] - 1, +r[3], 0, 0, 0, 0));
  if (r = e.match(vs), r) return new Date(Date.UTC(+r[1], +r[2] - 1, +r[3], +r[4], +r[5], r[6] && parseInt(r[6].slice(1), 10) || 0, r[7] && parseInt((r[7] + "0000").slice(1, 4), 10) || 0));
  var n = new Date(e);
  return n;
}
function hi(e, t) {
  if (Fe && Buffer.isBuffer(e))
    return e.toString("binary");
  if (typeof TextDecoder < "u") try {
    var r = {
      "€": "",
      "‚": "",
      ƒ: "",
      "„": "",
      "…": "",
      "†": "",
      "‡": "",
      "ˆ": "",
      "‰": "",
      Š: "",
      "‹": "",
      Œ: "",
      Ž: "",
      "‘": "",
      "’": "",
      "“": "",
      "”": "",
      "•": "",
      "–": "",
      "—": "",
      "˜": "",
      "™": "",
      š: "",
      "›": "",
      œ: "",
      ž: "",
      Ÿ: ""
    };
    return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(o) {
      return r[o] || o;
    });
  } catch {
  }
  var n = [], a = 0;
  try {
    for (a = 0; a < e.length - 65536; a += 65536) n.push(String.fromCharCode.apply(0, e.slice(a, a + 65536)));
    n.push(String.fromCharCode.apply(0, e.slice(a)));
  } catch {
    try {
      for (; a < e.length - 16384; a += 16384) n.push(String.fromCharCode.apply(0, e.slice(a, a + 16384)));
      n.push(String.fromCharCode.apply(0, e.slice(a)));
    } catch {
      for (; a != e.length; ++a) n.push(String.fromCharCode(e[a]));
    }
  }
  return n.join("");
}
function bt(e) {
  if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = bt(e[r]));
  return t;
}
function Ge(e, t) {
  for (var r = ""; r.length < t; ) r += e;
  return r;
}
function rr(e) {
  var t = Number(e);
  if (!isNaN(t)) return isFinite(t) ? t : NaN;
  if (!/\d/.test(e)) return t;
  var r = 1, n = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(t = Number(n)) || (n = n.replace(/[(]([^()]*)[)]/, function(a, o) {
    return r = -r, o;
  }), !isNaN(t = Number(n))) ? t / r : t;
}
var gu = /^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/, vu = /^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/, bu = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/, wu = (/* @__PURE__ */ new Date("6/9/69 00:00 UTC")).valueOf() == -177984e5;
function yu(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, e[7] == "p" ? 12 : 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), 0, 0, 0));
}
function Tu(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], 0, 0, 0));
}
var Eu = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function qn(e) {
  if (bu.test(e)) return e.indexOf("Z") == -1 ? pa(new Date(e)) : new Date(e);
  var t = e.toLowerCase(), r = t.replace(/\s+/g, " ").trim(), n = r.match(gu);
  if (n) return yu(n);
  if (n = r.match(vu), n) return Tu(n);
  if (n = r.match(vs), n) return new Date(Date.UTC(+n[1], +n[2] - 1, +n[3], +n[4], +n[5], n[6] && parseInt(n[6].slice(1), 10) || 0, n[7] && parseInt((n[7] + "0000").slice(1, 4), 10) || 0));
  var a = new Date(wu && e.indexOf("UTC") == -1 ? e + " UTC" : e), o = /* @__PURE__ */ new Date(NaN), i = a.getYear();
  a.getMonth();
  var s = a.getDate();
  if (isNaN(s)) return o;
  if (t.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (t = t.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), t.length > 3 && Eu.indexOf(t) == -1) return o;
  } else if (t.replace(/[ap]m?/, "").match(/[a-z]/)) return o;
  return i < 0 || i > 8099 || e.match(/[^-0-9:,\/\\\ ]/) ? o : a;
}
function zr(e) {
  return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
}
function pa(e) {
  return new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
}
function Ae(e, t, r) {
  if (e.FullPaths) {
    if (Array.isArray(r) && typeof r[0] == "string" && (r = r.join("")), typeof r == "string") {
      var n;
      return Fe ? n = Xt(r) : n = Ff(r), ze.utils.cfb_add(e, t, n);
    }
    ze.utils.cfb_add(e, t, r);
  } else e.file(t, r);
}
function di() {
  return ze.utils.cfb_new();
}
var nt = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, Su = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, mi = /* @__PURE__ */ ui(Su), pi = /[&<>'"]/g, ku = /[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;
function Ce(e) {
  var t = e + "";
  return t.replace(pi, function(r) {
    return mi[r];
  }).replace(ku, function(r) {
    return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function uo(e) {
  return Ce(e).replace(/ /g, "_x0020_");
}
var bs = /[\u0000-\u001f]/g;
function Da(e) {
  var t = e + "";
  return t.replace(pi, function(r) {
    return mi[r];
  }).replace(/\n/g, "<br/>").replace(bs, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function xu(e) {
  var t = e + "";
  return t.replace(pi, function(r) {
    return mi[r];
  }).replace(bs, function(r) {
    return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
function _u(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function Ou(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
      return !0;
    case 0:
    case !1:
    case "0":
    case "false":
      return !1;
  }
  return !1;
}
function Ra(e) {
  for (var t = "", r = 0, n = 0, a = 0, o = 0, i = 0, s = 0; r < e.length; ) {
    if (n = e.charCodeAt(r++), n < 128) {
      t += String.fromCharCode(n);
      continue;
    }
    if (a = e.charCodeAt(r++), n > 191 && n < 224) {
      i = (n & 31) << 6, i |= a & 63, t += String.fromCharCode(i);
      continue;
    }
    if (o = e.charCodeAt(r++), n < 240) {
      t += String.fromCharCode((n & 15) << 12 | (a & 63) << 6 | o & 63);
      continue;
    }
    i = e.charCodeAt(r++), s = ((n & 7) << 18 | (a & 63) << 12 | (o & 63) << 6 | i & 63) - 65536, t += String.fromCharCode(55296 + (s >>> 10 & 1023)), t += String.fromCharCode(56320 + (s & 1023));
  }
  return t;
}
function ho(e) {
  var t = yr(2 * e.length), r, n, a = 1, o = 0, i = 0, s;
  for (n = 0; n < e.length; n += a)
    a = 1, (s = e.charCodeAt(n)) < 128 ? r = s : s < 224 ? (r = (s & 31) * 64 + (e.charCodeAt(n + 1) & 63), a = 2) : s < 240 ? (r = (s & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63), a = 3) : (a = 4, r = (s & 7) * 262144 + (e.charCodeAt(n + 1) & 63) * 4096 + (e.charCodeAt(n + 2) & 63) * 64 + (e.charCodeAt(n + 3) & 63), r -= 65536, i = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), i !== 0 && (t[o++] = i & 255, t[o++] = i >>> 8, i = 0), t[o++] = r % 256, t[o++] = r >>> 8;
  return t.slice(0, o).toString("ucs2");
}
function mo(e) {
  return Xt(e, "binary").toString("utf8");
}
var Nn = "foo bar bazâð£", Pr = Fe && (/* @__PURE__ */ mo(Nn) == /* @__PURE__ */ Ra(Nn) && mo || /* @__PURE__ */ ho(Nn) == /* @__PURE__ */ Ra(Nn) && ho) || Ra, mn = Fe ? function(e) {
  return Xt(e, "utf8").toString("binary");
} : function(e) {
  for (var t = [], r = 0, n = 0, a = 0; r < e.length; )
    switch (n = e.charCodeAt(r++), !0) {
      case n < 128:
        t.push(String.fromCharCode(n));
        break;
      case n < 2048:
        t.push(String.fromCharCode(192 + (n >> 6))), t.push(String.fromCharCode(128 + (n & 63)));
        break;
      case (n >= 55296 && n < 57344):
        n -= 55296, a = e.charCodeAt(r++) - 56320 + (n << 10), t.push(String.fromCharCode(240 + (a >> 18 & 7))), t.push(String.fromCharCode(144 + (a >> 12 & 63))), t.push(String.fromCharCode(128 + (a >> 6 & 63))), t.push(String.fromCharCode(128 + (a & 63)));
        break;
      default:
        t.push(String.fromCharCode(224 + (n >> 12))), t.push(String.fromCharCode(128 + (n >> 6 & 63))), t.push(String.fromCharCode(128 + (n & 63)));
    }
  return t.join("");
}, Au = /* @__PURE__ */ (function() {
  var e = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(t) {
    return [new RegExp("&" + t[0] + ";", "ig"), t[1]];
  });
  return function(t) {
    for (var r = t.replace(/^[\t\n\r ]+/, "").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/, "$1").replace(/>\s+/g, ">").replace(/\b\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^<>]*>/g, ""), n = 0; n < e.length; ++n) r = r.replace(e[n][0], e[n][1]);
    return r;
  };
})(), ws = /(^\s|\s$|\n)/;
function lt(e, t) {
  return "<" + e + (t.match(ws) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">";
}
function pn(e) {
  return tt(e).map(function(t) {
    return " " + t + '="' + e[t] + '"';
  }).join("");
}
function oe(e, t, r) {
  return "<" + e + (r != null ? pn(r) : "") + (t != null ? (t.match(ws) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">";
}
function Za(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (r) {
    if (t) throw r;
  }
  return "";
}
function Cu(e, t) {
  switch (typeof e) {
    case "string":
      var r = oe("vt:lpwstr", Ce(e));
      return r = r.replace(/&quot;/g, "_x0022_"), r;
    case "number":
      return oe((e | 0) == e ? "vt:i4" : "vt:r8", Ce(String(e)));
    case "boolean":
      return oe("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date) return oe("vt:filetime", Za(e));
  throw new Error("Unable to serialize " + e);
}
var ot = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
}, Vr = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
], Rt = {
  o: "urn:schemas-microsoft-com:office:office",
  x: "urn:schemas-microsoft-com:office:excel",
  ss: "urn:schemas-microsoft-com:office:spreadsheet",
  dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
  mv: "http://macVmlSchemaUri",
  v: "urn:schemas-microsoft-com:vml",
  html: "http://www.w3.org/TR/REC-html40"
};
function Du(e, t) {
  for (var r = 1 - 2 * (e[t + 7] >>> 7), n = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15), a = e[t + 6] & 15, o = 5; o >= 0; --o) a = a * 256 + e[t + o];
  return n == 2047 ? a == 0 ? r * (1 / 0) : NaN : (n == 0 ? n = -1022 : (n -= 1023, a += Math.pow(2, 52)), r * Math.pow(2, n - 52) * a);
}
function Ru(e, t, r) {
  var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7, a = 0, o = 0, i = n ? -t : t;
  isFinite(i) ? i == 0 ? a = o = 0 : (a = Math.floor(Math.log(i) / Math.LN2), o = i * Math.pow(2, 52 - a), a <= -1023 && (!isFinite(o) || o < Math.pow(2, 52)) ? a = -1022 : (o -= Math.pow(2, 52), a += 1023)) : (a = 2047, o = isNaN(t) ? 26985 : 0);
  for (var s = 0; s <= 5; ++s, o /= 256) e[r + s] = o & 255;
  e[r + 6] = (a & 15) << 4 | o & 15, e[r + 7] = a >> 4 | n;
}
var po = function(e) {
  for (var t = [], r = 10240, n = 0; n < e[0].length; ++n) if (e[0][n]) for (var a = 0, o = e[0][n].length; a < o; a += r) t.push.apply(t, e[0][n].slice(a, a + r));
  return t;
}, go = Fe ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(t) {
    return Buffer.isBuffer(t) ? t : Xt(t);
  })) : po(e);
} : po, vo = function(e, t, r) {
  for (var n = [], a = t; a < r; a += 2) n.push(String.fromCharCode(rn(e, a)));
  return n.join("").replace(sn, "");
}, gi = Fe ? function(e, t, r) {
  return !Buffer.isBuffer(e) || !Gn ? vo(e, t, r) : e.toString("utf16le", t, r).replace(sn, "");
} : vo, bo = function(e, t, r) {
  for (var n = [], a = t; a < t + r; ++a) n.push(("0" + e[a].toString(16)).slice(-2));
  return n.join("");
}, ys = Fe ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : bo(e, t, r);
} : bo, wo = function(e, t, r) {
  for (var n = [], a = t; a < r; a++) n.push(String.fromCharCode(Lr(e, a)));
  return n.join("");
}, Sn = Fe ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("utf8", t, r) : wo(e, t, r);
} : wo, Ts = function(e, t) {
  var r = Nt(e, t);
  return r > 0 ? Sn(e, t + 4, t + 4 + r - 1) : "";
}, Es = Ts, Ss = function(e, t) {
  var r = Nt(e, t);
  return r > 0 ? Sn(e, t + 4, t + 4 + r - 1) : "";
}, ks = Ss, xs = function(e, t) {
  var r = 2 * Nt(e, t);
  return r > 0 ? Sn(e, t + 4, t + 4 + r - 1) : "";
}, _s = xs, Os = function(e, t) {
  var r = Nt(e, t);
  return r > 0 ? gi(e, t + 4, t + 4 + r) : "";
}, As = Os, Cs = function(e, t) {
  var r = Nt(e, t);
  return r > 0 ? Sn(e, t + 4, t + 4 + r) : "";
}, Ds = Cs, Rs = function(e, t) {
  return Du(e, t);
}, Qn = Rs, vi = function(e) {
  return Array.isArray(e) || typeof Uint8Array < "u" && e instanceof Uint8Array;
};
Fe && (Es = function(e, t) {
  if (!Buffer.isBuffer(e)) return Ts(e, t);
  var r = e.readUInt32LE(t);
  return r > 0 ? e.toString("utf8", t + 4, t + 4 + r - 1) : "";
}, ks = function(e, t) {
  if (!Buffer.isBuffer(e)) return Ss(e, t);
  var r = e.readUInt32LE(t);
  return r > 0 ? e.toString("utf8", t + 4, t + 4 + r - 1) : "";
}, _s = function(e, t) {
  if (!Buffer.isBuffer(e) || !Gn) return xs(e, t);
  var r = 2 * e.readUInt32LE(t);
  return e.toString("utf16le", t + 4, t + 4 + r - 1);
}, As = function(e, t) {
  if (!Buffer.isBuffer(e) || !Gn) return Os(e, t);
  var r = e.readUInt32LE(t);
  return e.toString("utf16le", t + 4, t + 4 + r);
}, Ds = function(e, t) {
  if (!Buffer.isBuffer(e)) return Cs(e, t);
  var r = e.readUInt32LE(t);
  return e.toString("utf8", t + 4, t + 4 + r);
}, Qn = function(e, t) {
  return Buffer.isBuffer(e) ? e.readDoubleLE(t) : Rs(e, t);
}, vi = function(e) {
  return Buffer.isBuffer(e) || Array.isArray(e) || typeof Uint8Array < "u" && e instanceof Uint8Array;
});
var Lr = function(e, t) {
  return e[t];
}, rn = function(e, t) {
  return e[t + 1] * 256 + e[t];
}, Nu = function(e, t) {
  var r = e[t + 1] * 256 + e[t];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, Nt = function(e, t) {
  return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
}, br = function(e, t) {
  return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}, Lu = function(e, t) {
  return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
};
function ln(e, t) {
  var r = "", n, a, o = [], i, s, l, c;
  switch (t) {
    case "dbcs":
      if (c = this.l, Fe && Buffer.isBuffer(this) && Gn) r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (l = 0; l < e; ++l)
        r += String.fromCharCode(rn(this, c)), c += 2;
      e *= 2;
      break;
    case "utf8":
      r = Sn(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = gi(this, this.l, this.l + e);
      break;
    case "wstr":
      return ln.call(this, e, "dbcs");
    /* [MS-OLEDS] 2.1.4 LengthPrefixedAnsiString */
    case "lpstr-ansi":
      r = Es(this, this.l), e = 4 + Nt(this, this.l);
      break;
    case "lpstr-cp":
      r = ks(this, this.l), e = 4 + Nt(this, this.l);
      break;
    /* [MS-OLEDS] 2.1.5 LengthPrefixedUnicodeString */
    case "lpwstr":
      r = _s(this, this.l), e = 4 + 2 * Nt(this, this.l);
      break;
    /* [MS-OFFCRYPTO] 2.1.2 Length-Prefixed Padded Unicode String (UNICODE-LP-P4) */
    case "lpp4":
      e = 4 + Nt(this, this.l), r = As(this, this.l), e & 2 && (e += 2);
      break;
    /* [MS-OFFCRYPTO] 2.1.3 Length-Prefixed UTF-8 String (UTF-8-LP-P4) */
    case "8lpp4":
      e = 4 + Nt(this, this.l), r = Ds(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (i = Lr(this, this.l + e++)) !== 0; ) o.push(Dn(i));
      r = o.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (i = rn(this, this.l + e)) !== 0; )
        o.push(Dn(i)), e += 2;
      e += 2, r = o.join("");
      break;
    /* sbcs and dbcs support continue records in the SST way TODO codepages */
    case "dbcs-cont":
      for (r = "", c = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(c) !== -1)
          return i = Lr(this, c), this.l = c + 1, s = ln.call(this, e - l, i ? "dbcs-cont" : "sbcs-cont"), o.join("") + s;
        o.push(Dn(rn(this, c))), c += 2;
      }
      r = o.join(""), e *= 2;
      break;
    case "cpstr":
    /* falls through */
    case "sbcs-cont":
      for (r = "", c = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(c) !== -1)
          return i = Lr(this, c), this.l = c + 1, s = ln.call(this, e - l, i ? "dbcs-cont" : "sbcs-cont"), o.join("") + s;
        o.push(Dn(Lr(this, c))), c += 1;
      }
      r = o.join("");
      break;
    default:
      switch (e) {
        case 1:
          return n = Lr(this, this.l), this.l++, n;
        case 2:
          return n = (t === "i" ? Nu : rn)(this, this.l), this.l += 2, n;
        case 4:
        case -4:
          return t === "i" || (this[this.l + 3] & 128) === 0 ? (n = (e > 0 ? br : Lu)(this, this.l), this.l += 4, n) : (a = Nt(this, this.l), this.l += 4, a);
        case 8:
        case -8:
          if (t === "f")
            return e == 8 ? a = Qn(this, this.l) : a = Qn([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, a;
          e = 8;
        /* falls through */
        case 16:
          r = ys(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var Mu = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255;
}, Iu = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255;
}, Pu = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255;
};
function Fu(e, t, r) {
  var n = 0, a = 0;
  if (r === "dbcs") {
    for (a = 0; a != t.length; ++a) Pu(this, t.charCodeAt(a), this.l + 2 * a);
    n = 2 * t.length;
  } else if (r === "sbcs" || r == "cpstr") {
    for (t = t.replace(/[^\x00-\x7F]/g, "_"), a = 0; a != t.length; ++a) this[this.l + a] = t.charCodeAt(a) & 255;
    n = t.length;
  } else if (r === "hex") {
    for (; a < e; ++a)
      this[this.l++] = parseInt(t.slice(2 * a, 2 * a + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var o = Math.min(this.l + e, this.length);
    for (a = 0; a < Math.min(t.length, e); ++a) {
      var i = t.charCodeAt(a);
      this[this.l++] = i & 255, this[this.l++] = i >> 8;
    }
    for (; this.l < o; ) this[this.l++] = 0;
    return this;
  } else switch (e) {
    case 1:
      n = 1, this[this.l] = t & 255;
      break;
    case 2:
      n = 2, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255;
      break;
    case 3:
      n = 3, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255, t >>>= 8, this[this.l + 2] = t & 255;
      break;
    case 4:
      n = 4, Mu(this, t, this.l);
      break;
    case 8:
      if (n = 8, r === "f") {
        Ru(this, t, this.l);
        break;
      }
    /* falls through */
    case 16:
      break;
    case -4:
      n = 4, Iu(this, t, this.l);
      break;
  }
  return this.l += n, this;
}
function Ns(e, t) {
  var r = ys(this, this.l, e.length >> 1);
  if (r !== e) throw new Error(t + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function Et(e, t) {
  e.l = t, e.read_shift = /*::(*/
  ln, e.chk = Ns, e.write_shift = Fu;
}
function Yt(e, t) {
  e.l += t;
}
function j(e) {
  var t = yr(e);
  return Et(t, 0), t;
}
function gt() {
  var e = [], t = Fe ? 16384 : 2048;
  Fe && j(t).copy;
  var r = function(c) {
    var f = j(c);
    return Et(f, 0), f;
  }, n = r(t), a = function() {
    n && (n.l && (n.length > n.l && (n = n.slice(0, n.l), n.l = n.length), n.length > 0 && e.push(n)), n = null);
  }, o = function(c) {
    return n && c < n.length - n.l ? n : (a(), n = r(Math.max(c + 1, t)));
  }, i = function() {
    return a(), et(e);
  }, s = function() {
    return a(), e;
  }, l = function(c) {
    a(), n = c, n.l == null && (n.l = n.length), o(t);
  };
  return { next: o, push: l, end: i, _bufs: e, end2: s };
}
function ee(e, t, r, n) {
  var a = +t, o;
  if (!isNaN(a)) {
    n || (n = jp[a].p || (r || []).length || 0), o = 1 + (a >= 128 ? 1 : 0) + 1, n >= 128 && ++o, n >= 16384 && ++o, n >= 2097152 && ++o;
    var i = e.next(o);
    a <= 127 ? i.write_shift(1, a) : (i.write_shift(1, (a & 127) + 128), i.write_shift(1, a >> 7));
    for (var s = 0; s != 4; ++s)
      if (n >= 128)
        i.write_shift(1, (n & 127) + 128), n >>= 7;
      else {
        i.write_shift(1, n);
        break;
      }
    n > 0 && vi(r) && e.push(r);
  }
}
function cn(e, t, r) {
  var n = bt(e);
  if (t.s ? (n.cRel && (n.c += t.s.c), n.rRel && (n.r += t.s.r)) : (n.cRel && (n.c += t.c), n.rRel && (n.r += t.r)), !r || r.biff < 12) {
    for (; n.c >= 256; ) n.c -= 256;
    for (; n.r >= 65536; ) n.r -= 65536;
  }
  return n;
}
function yo(e, t, r) {
  var n = bt(e);
  return n.s = cn(n.s, t.s, r), n.e = cn(n.e, t.s, r), n;
}
function fn(e, t) {
  if (e.cRel && e.c < 0)
    for (e = bt(e); e.c < 0; ) e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = bt(e); e.r < 0; ) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = Je(e);
  return !e.cRel && e.cRel != null && (r = Bu(r)), !e.rRel && e.rRel != null && (r = Uu(r)), r;
}
function Na(e, t) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + $e(e.s.c) + ":" + (e.e.cRel ? "" : "$") + $e(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + Be(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Be(e.e.r) : fn(e.s, t.biff) + ":" + fn(e.e, t.biff);
}
function bi(e) {
  return parseInt($u(e), 10) - 1;
}
function Be(e) {
  return "" + (e + 1);
}
function Uu(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function $u(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function wi(e) {
  for (var t = zu(e), r = 0, n = 0; n !== t.length; ++n) r = 26 * r + t.charCodeAt(n) - 64;
  return r - 1;
}
function $e(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var t = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) t = String.fromCharCode((e - 1) % 26 + 65) + t;
  return t;
}
function Bu(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function zu(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function Wu(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function Ke(e) {
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
    var a = e.charCodeAt(n);
    a >= 48 && a <= 57 ? t = 10 * t + (a - 48) : a >= 65 && a <= 90 && (r = 26 * r + (a - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function Je(e) {
  for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0) r = String.fromCharCode((t - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function ct(e) {
  var t = e.indexOf(":");
  return t == -1 ? { s: Ke(e), e: Ke(e) } : { s: Ke(e.slice(0, t)), e: Ke(e.slice(t + 1)) };
}
function rt(e, t) {
  return typeof t > "u" || typeof t == "number" ? rt(e.s, e.e) : (typeof e != "string" && (e = Je(e)), typeof t != "string" && (t = Je(t)), e == t ? e : e + ":" + t);
}
function gn(e) {
  var t = ct(e);
  return "$" + $e(t.s.c) + "$" + Be(t.s.r) + ":$" + $e(t.e.c) + "$" + Be(t.e.r);
}
function vn(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2)) throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e.replace(/'/g, "''") + "'" : e;
}
function He(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, n = 0, a = 0, o = e.length;
  for (r = 0; n < o && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n)
    r = 26 * r + a;
  for (t.s.c = --r, r = 0; n < o && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n)
    r = 10 * r + a;
  if (t.s.r = --r, n === o || a != 10)
    return t.e.c = t.s.c, t.e.r = t.s.r, t;
  for (++n, r = 0; n != o && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n)
    r = 26 * r + a;
  for (t.e.c = --r, r = 0; n != o && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n)
    r = 10 * r + a;
  return t.e.r = --r, t;
}
function To(e, t) {
  var r = e.t == "d" && t instanceof Date;
  if (e.z != null) try {
    return e.w = ar(e.z, r ? ft(t) : t);
  } catch {
  }
  try {
    return e.w = ar((e.XF || {}).numFmtId || (r ? 14 : 0), r ? ft(t) : t);
  } catch {
    return "" + t;
  }
}
function ir(e, t, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? kt[e.v] || e.v : t == null ? To(e, e.v) : To(e, t));
}
function Hr(e, t) {
  var r = t && t.sheet ? t.sheet : "Sheet1", n = {};
  return n[r] = e, { SheetNames: [r], Sheets: n };
}
function Vu(e) {
  var t = {}, r = e || {};
  return r.dense && (t["!data"] = []), t;
}
function Ls(e, t, r) {
  var n = r || {}, a = e ? e["!data"] != null : n.dense, o = e || (a ? { "!data": [] } : {});
  a && !o["!data"] && (o["!data"] = []);
  var i = 0, s = 0;
  if (o && n.origin != null)
    if (typeof n.origin == "number") i = n.origin;
    else {
      var l = typeof n.origin == "string" ? Ke(n.origin) : n.origin;
      i = l.r, s = l.c;
    }
  var c = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (o["!ref"]) {
    var f = He(o["!ref"]);
    c.s.c = f.s.c, c.s.r = f.s.r, c.e.c = Math.max(c.e.c, f.e.c), c.e.r = Math.max(c.e.r, f.e.r), i == -1 && (c.e.r = i = o["!ref"] ? f.e.r + 1 : 0);
  } else
    c.s.c = c.e.c = c.s.r = c.e.r = 0;
  for (var d = [], u = !1, h = 0; h != t.length; ++h)
    if (t[h]) {
      if (!Array.isArray(t[h])) throw new Error("aoa_to_sheet expects an array of arrays");
      var g = i + h;
      a && (o["!data"][g] || (o["!data"][g] = []), d = o["!data"][g]);
      for (var m = t[h], p = 0; p != m.length; ++p)
        if (!(typeof m[p] > "u")) {
          var w = { v: m[p], t: "" }, O = s + p;
          if (c.s.r > g && (c.s.r = g), c.s.c > O && (c.s.c = O), c.e.r < g && (c.e.r = g), c.e.c < O && (c.e.c = O), u = !0, m[p] && typeof m[p] == "object" && !Array.isArray(m[p]) && !(m[p] instanceof Date)) w = m[p];
          else if (Array.isArray(w.v) && (w.f = m[p][1], w.v = w.v[0]), w.v === null)
            if (w.f) w.t = "n";
            else if (n.nullError)
              w.t = "e", w.v = 0;
            else if (n.sheetStubs) w.t = "z";
            else continue;
          else typeof w.v == "number" ? isFinite(w.v) ? w.t = "n" : isNaN(w.v) ? (w.t = "e", w.v = 15) : (w.t = "e", w.v = 7) : typeof w.v == "boolean" ? w.t = "b" : w.v instanceof Date ? (w.z = n.dateNF || Ve[14], n.UTC || (w.v = pa(w.v)), n.cellDates ? (w.t = "d", w.w = ar(w.z, ft(w.v, n.date1904))) : (w.t = "n", w.v = ft(w.v, n.date1904), w.w = ar(w.z, w.v))) : w.t = "s";
          if (a)
            d[O] && d[O].z && (w.z = d[O].z), d[O] = w;
          else {
            var y = $e(O) + (g + 1);
            o[y] && o[y].z && (w.z = o[y].z), o[y] = w;
          }
        }
    }
  return u && c.s.c < 104e5 && (o["!ref"] = rt(c)), o;
}
function jr(e, t) {
  return Ls(null, e, t);
}
function Hu(e) {
  return e.read_shift(4, "i");
}
function Bt(e, t) {
  return t || (t = j(4)), t.write_shift(4, e), t;
}
function vt(e) {
  var t = e.read_shift(4);
  return t === 0 ? "" : e.read_shift(t, "dbcs");
}
function it(e, t) {
  var r = !1;
  return t == null && (r = !0, t = j(4 + 2 * e.length)), t.write_shift(4, e.length), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
function ju(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function Gu(e, t) {
  return t || (t = j(4)), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function yi(e, t) {
  var r = e.l, n = e.read_shift(1), a = vt(e), o = [], i = { t: a, h: a };
  if ((n & 1) !== 0) {
    for (var s = e.read_shift(4), l = 0; l != s; ++l) o.push(ju(e));
    i.r = o;
  } else i.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + t, i;
}
function Ku(e, t) {
  var r = !1;
  return t == null && (r = !0, t = j(15 + 4 * e.t.length)), t.write_shift(1, 0), it(e.t, t), r ? t.slice(0, t.l) : t;
}
var Yu = yi;
function Ju(e, t) {
  var r = !1;
  return t == null && (r = !0, t = j(23 + 4 * e.t.length)), t.write_shift(1, 1), it(e.t, t), t.write_shift(4, 1), Gu({}, t), r ? t.slice(0, t.l) : t;
}
function Ft(e) {
  var t = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: t, iStyleRef: r };
}
function xr(e, t) {
  return t == null && (t = j(8)), t.write_shift(-4, e.c), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
function _r(e) {
  var t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: t };
}
function Or(e, t) {
  return t == null && (t = j(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
var Xu = vt, Ms = it;
function ga(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? "" : e.read_shift(t, "dbcs");
}
function bn(e, t) {
  var r = !1;
  return t == null && (r = !0, t = j(127)), t.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
var qu = vt, ei = ga, Ti = bn;
function Ei(e) {
  var t = e.slice(e.l, e.l + 4), r = t[0] & 1, n = t[0] & 2;
  e.l += 4;
  var a = n === 0 ? Qn([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : br(t, 0) >> 2;
  return r ? a / 100 : a;
}
function Is(e, t) {
  t == null && (t = j(4));
  var r = 0, n = 0, a = e * 100;
  if (e == (e | 0) && e >= -536870912 && e < 1 << 29 ? n = 1 : a == (a | 0) && a >= -536870912 && a < 1 << 29 && (n = 1, r = 1), n) t.write_shift(-4, ((r ? a : e) << 2) + (r + 2));
  else throw new Error("unsupported RkNumber " + e);
}
function Ps(e) {
  var t = { s: {}, e: {} };
  return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t;
}
function Qu(e, t) {
  return t || (t = j(16)), t.write_shift(4, e.s.r), t.write_shift(4, e.e.r), t.write_shift(4, e.s.c), t.write_shift(4, e.e.c), t;
}
var Ar = Ps, Gr = Qu;
function Kr(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function Sr(e, t) {
  return (t || j(8)).write_shift(8, e, "f");
}
function Zu(e) {
  var t = {}, r = e.read_shift(1), n = r >>> 1, a = e.read_shift(1), o = e.read_shift(2, "i"), i = e.read_shift(1), s = e.read_shift(1), l = e.read_shift(1);
  switch (e.l++, n) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = a;
      var c = lh[a];
      c && (t.rgb = No(c));
      break;
    case 2:
      t.rgb = No([i, s, l]);
      break;
    case 3:
      t.theme = a;
      break;
  }
  return o != 0 && (t.tint = o > 0 ? o / 32767 : o / 32768), t;
}
function Zn(e, t) {
  if (t || (t = j(8)), !e || e.auto)
    return t.write_shift(4, 0), t.write_shift(4, 0), t;
  e.index != null ? (t.write_shift(1, 2), t.write_shift(1, e.index)) : e.theme != null ? (t.write_shift(1, 6), t.write_shift(1, e.theme)) : (t.write_shift(1, 5), t.write_shift(1, 0));
  var r = e.tint || 0;
  if (r > 0 ? r *= 32767 : r < 0 && (r *= 32768), t.write_shift(2, r), !e.rgb || e.theme != null)
    t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  else {
    var n = e.rgb || "FFFFFF";
    typeof n == "number" && (n = ("000000" + n.toString(16)).slice(-6)), t.write_shift(1, parseInt(n.slice(0, 2), 16)), t.write_shift(1, parseInt(n.slice(2, 4), 16)), t.write_shift(1, parseInt(n.slice(4, 6), 16)), t.write_shift(1, 255);
  }
  return t;
}
function eh(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128
  };
  return r;
}
function th(e, t) {
  t || (t = j(2));
  var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return t.write_shift(1, r), t.write_shift(1, 0), t;
}
var Fs = 2, Ct = 3, Ln = 11, ea = 19, Mn = 64, rh = 65, nh = 71, ah = 4108, ih = 4126, st = 80, Eo = {
  1: { n: "CodePage", t: Fs },
  2: { n: "Category", t: st },
  3: { n: "PresentationFormat", t: st },
  4: { n: "ByteCount", t: Ct },
  5: { n: "LineCount", t: Ct },
  6: { n: "ParagraphCount", t: Ct },
  7: { n: "SlideCount", t: Ct },
  8: { n: "NoteCount", t: Ct },
  9: { n: "HiddenCount", t: Ct },
  10: { n: "MultimediaClipCount", t: Ct },
  11: { n: "ScaleCrop", t: Ln },
  12: {
    n: "HeadingPairs",
    t: ah
    /* VT_VECTOR | VT_VARIANT */
  },
  13: {
    n: "TitlesOfParts",
    t: ih
    /* VT_VECTOR | VT_LPSTR */
  },
  14: { n: "Manager", t: st },
  15: { n: "Company", t: st },
  16: { n: "LinksUpToDate", t: Ln },
  17: { n: "CharacterCount", t: Ct },
  19: { n: "SharedDoc", t: Ln },
  22: { n: "HyperlinksChanged", t: Ln },
  23: { n: "AppVersion", t: Ct, p: "version" },
  24: { n: "DigSig", t: rh },
  26: { n: "ContentType", t: st },
  27: { n: "ContentStatus", t: st },
  28: { n: "Language", t: st },
  29: { n: "Version", t: st },
  255: {},
  /* [MS-OLEPS] 2.18 */
  2147483648: { n: "Locale", t: ea },
  2147483651: { n: "Behavior", t: ea },
  1919054434: {}
}, So = {
  1: { n: "CodePage", t: Fs },
  2: { n: "Title", t: st },
  3: { n: "Subject", t: st },
  4: { n: "Author", t: st },
  5: { n: "Keywords", t: st },
  6: { n: "Comments", t: st },
  7: { n: "Template", t: st },
  8: { n: "LastAuthor", t: st },
  9: { n: "RevNumber", t: st },
  10: { n: "EditTime", t: Mn },
  11: { n: "LastPrinted", t: Mn },
  12: { n: "CreatedDate", t: Mn },
  13: { n: "ModifiedDate", t: Mn },
  14: { n: "PageCount", t: Ct },
  15: { n: "WordCount", t: Ct },
  16: { n: "CharCount", t: Ct },
  17: { n: "Thumbnail", t: nh },
  18: { n: "Application", t: st },
  19: { n: "DocSecurity", t: Ct },
  255: {},
  /* [MS-OLEPS] 2.18 */
  2147483648: { n: "Locale", t: ea },
  2147483651: { n: "Behavior", t: ea },
  1919054434: {}
};
function oh(e) {
  return e.map(function(t) {
    return [t >> 16 & 255, t >> 8 & 255, t & 255];
  });
}
var sh = /* @__PURE__ */ oh([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  0,
  /* 0x40 icvForeground ?? */
  16777215,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]), lh = /* @__PURE__ */ bt(sh), kt = {
  0: "#NULL!",
  7: "#DIV/0!",
  15: "#VALUE!",
  23: "#REF!",
  29: "#NAME?",
  36: "#NUM!",
  42: "#N/A",
  43: "#GETTING_DATA",
  255: "#WTF?"
}, Kt = {
  "#NULL!": 0,
  "#DIV/0!": 7,
  "#VALUE!": 15,
  "#REF!": 23,
  "#NAME?": 29,
  "#NUM!": 36,
  "#N/A": 42,
  "#GETTING_DATA": 43,
  "#WTF?": 255
}, ch = [
  "_xlnm.Consolidate_Area",
  "_xlnm.Auto_Open",
  "_xlnm.Auto_Close",
  "_xlnm.Extract",
  "_xlnm.Database",
  "_xlnm.Criteria",
  "_xlnm.Print_Area",
  "_xlnm.Print_Titles",
  "_xlnm.Recorder",
  "_xlnm.Data_Form",
  "_xlnm.Auto_Activate",
  "_xlnm.Auto_Deactivate",
  "_xlnm.Sheet_Title",
  "_xlnm._FilterDatabase"
], fh = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  sheet: "js"
}, In = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    /* Shared Strings */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    /* Comments */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    /* Worksheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    /* Chartsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    /* Dialogsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    /* Macrosheet (Excel 4.0 Macros) */
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    /* Metadata (Stock/Geography and Dynamic Array) */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    /* Styles */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function Us() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function $s(e, t, r) {
  var n = uu(fh), a = [], o;
  a[a.length] = nt, a[a.length] = oe("Types", null, {
    xmlns: ot.CT,
    "xmlns:xsd": ot.xsd,
    "xmlns:xsi": ot.xsi
  }), a = a.concat([
    ["xml", "application/xml"],
    ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
    ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
    ["data", "application/vnd.openxmlformats-officedocument.model+data"],
    /* from test files */
    ["bmp", "image/bmp"],
    ["png", "image/png"],
    ["gif", "image/gif"],
    ["emf", "image/x-emf"],
    ["wmf", "image/x-wmf"],
    ["jpg", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["pdf", "application/pdf"],
    ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
  ].map(function(c) {
    return oe("Default", null, { Extension: c[0], ContentType: c[1] });
  }));
  var i = function(c) {
    e[c] && e[c].length > 0 && (o = e[c][0], a[a.length] = oe("Override", null, {
      PartName: (o[0] == "/" ? "" : "/") + o,
      ContentType: In[c][t.bookType] || In[c].xlsx
    }));
  }, s = function(c) {
    (e[c] || []).forEach(function(f) {
      a[a.length] = oe("Override", null, {
        PartName: (f[0] == "/" ? "" : "/") + f,
        ContentType: In[c][t.bookType] || In[c].xlsx
      });
    });
  }, l = function(c) {
    (e[c] || []).forEach(function(f) {
      a[a.length] = oe("Override", null, {
        PartName: (f[0] == "/" ? "" : "/") + f,
        ContentType: n[c][0]
      });
    });
  };
  return i("workbooks"), s("sheets"), s("charts"), l("themes"), ["strs", "styles"].forEach(i), ["coreprops", "extprops", "custprops"].forEach(l), l("vba"), l("comments"), l("threadedcomments"), l("drawings"), s("metadata"), l("people"), a.length > 2 && (a[a.length] = "</Types>", a[1] = a[1].replace("/>", ">")), a.join("");
}
var Ne = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function Bs(e) {
  var t = e.lastIndexOf("/");
  return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
}
function Fr(e) {
  var t = [nt, oe("Relationships", null, {
    //'xmlns:ns0': XMLNS.RELS,
    xmlns: ot.RELS
  })];
  return tt(e["!id"]).forEach(function(r) {
    t[t.length] = oe("Relationship", null, e["!id"][r]);
  }), t.length > 2 && (t[t.length] = "</Relationships>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Pe(e, t, r, n, a, o) {
  if (a || (a = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), t < 0) for (t = e["!idx"]; e["!id"]["rId" + t]; ++t)
    ;
  if (e["!idx"] = t + 1, a.Id = "rId" + t, a.Type = n, a.Target = r, [Ne.HLINK, Ne.XPATH, Ne.XMISS].indexOf(a.Type) > -1 && (a.TargetMode = "External"), e["!id"][a.Id]) throw new Error("Cannot rewrite rId " + t);
  return e["!id"][a.Id] = a, e[("/" + a.Target).replace("//", "/")] = a, t;
}
function uh(e) {
  var t = [nt];
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var r = 0; r < e.length; ++r)
    t.push('  <manifest:file-entry manifest:full-path="' + e[r][0] + '" manifest:media-type="' + e[r][1] + `"/>
`);
  return t.push("</manifest:manifest>"), t.join("");
}
function ko(e, t, r) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function hh(e, t) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function dh(e) {
  var t = [nt];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(ko(e[r][0], e[r][1])), t.push(hh("", e[r][0]));
  return t.push(ko("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("");
}
function zs(e, t) {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + Hn.version + "</meta:generator></office:meta></office:document-meta>";
}
var wr = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
];
function La(e, t, r, n, a) {
  a[e] != null || t == null || t === "" || (a[e] = t, t = Ce(t), n[n.length] = r ? oe(e, t, r) : lt(e, t));
}
function Ws(e, t) {
  var r = t || {}, n = [nt, oe("cp:coreProperties", null, {
    //'xmlns': XMLNS.CORE_PROPS,
    "xmlns:cp": ot.CORE_PROPS,
    "xmlns:dc": ot.dc,
    "xmlns:dcterms": ot.dcterms,
    "xmlns:dcmitype": ot.dcmitype,
    "xmlns:xsi": ot.xsi
  })], a = {};
  if (!e && !r.Props) return n.join("");
  e && (e.CreatedDate != null && La("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : Za(e.CreatedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, n, a), e.ModifiedDate != null && La("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : Za(e.ModifiedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, n, a));
  for (var o = 0; o != wr.length; ++o) {
    var i = wr[o], s = r.Props && r.Props[i[1]] != null ? r.Props[i[1]] : e ? e[i[1]] : null;
    s === !0 ? s = "1" : s === !1 ? s = "0" : typeof s == "number" && (s = String(s)), s != null && La(i[0], s, null, n, a);
  }
  return n.length > 2 && (n[n.length] = "</cp:coreProperties>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var Ur = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
], Vs = [
  "Worksheets",
  "SheetNames",
  "NamedRanges",
  "DefinedNames",
  "Chartsheets",
  "ChartNames"
];
function Hs(e) {
  var t = [], r = oe;
  return e || (e = {}), e.Application = "SheetJS", t[t.length] = nt, t[t.length] = oe("Properties", null, {
    xmlns: ot.EXT_PROPS,
    "xmlns:vt": ot.vt
  }), Ur.forEach(function(n) {
    if (e[n[1]] !== void 0) {
      var a;
      switch (n[2]) {
        case "string":
          a = Ce(String(e[n[1]]));
          break;
        case "bool":
          a = e[n[1]] ? "true" : "false";
          break;
      }
      a !== void 0 && (t[t.length] = r(n[0], a));
    }
  }), t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map(function(n) {
    return "<vt:lpstr>" + Ce(n) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function js(e) {
  var t = [nt, oe("Properties", null, {
    xmlns: ot.CUST_PROPS,
    "xmlns:vt": ot.vt
  })];
  if (!e) return t.join("");
  var r = 1;
  return tt(e).forEach(function(n) {
    ++r, t[t.length] = oe("property", Cu(e[n]), {
      fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      pid: r,
      name: Ce(n)
    });
  }), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
var xo = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
};
function mh(e, t) {
  var r = [];
  return tt(xo).map(function(n) {
    for (var a = 0; a < wr.length; ++a) if (wr[a][1] == n) return wr[a];
    for (a = 0; a < Ur.length; ++a) if (Ur[a][1] == n) return Ur[a];
    throw n;
  }).forEach(function(n) {
    if (e[n[1]] != null) {
      var a = t && t.Props && t.Props[n[1]] != null ? t.Props[n[1]] : e[n[1]];
      switch (n[2]) {
        case "date":
          a = new Date(a).toISOString().replace(/\.\d*Z/, "Z");
          break;
      }
      typeof a == "number" ? a = String(a) : a === !0 || a === !1 ? a = a ? "1" : "0" : a instanceof Date && (a = new Date(a).toISOString().replace(/\.\d*Z/, "")), r.push(lt(xo[n[1]] || n[1], a));
    }
  }), oe("DocumentProperties", r.join(""), { xmlns: Rt.o });
}
function ph(e, t) {
  var r = ["Worksheets", "SheetNames"], n = "CustomDocumentProperties", a = [];
  return e && tt(e).forEach(function(o) {
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      for (var i = 0; i < wr.length; ++i) if (o == wr[i][1]) return;
      for (i = 0; i < Ur.length; ++i) if (o == Ur[i][1]) return;
      for (i = 0; i < r.length; ++i) if (o == r[i]) return;
      var s = e[o], l = "string";
      typeof s == "number" ? (l = "float", s = String(s)) : s === !0 || s === !1 ? (l = "boolean", s = s ? "1" : "0") : s = String(s), a.push(oe(uo(o), s, { "dt:dt": l }));
    }
  }), t && tt(t).forEach(function(o) {
    if (Object.prototype.hasOwnProperty.call(t, o) && !(e && Object.prototype.hasOwnProperty.call(e, o))) {
      var i = t[o], s = "string";
      typeof i == "number" ? (s = "float", i = String(i)) : i === !0 || i === !1 ? (s = "boolean", i = i ? "1" : "0") : i instanceof Date ? (s = "dateTime.tz", i = i.toISOString()) : i = String(i), a.push(oe(uo(o), i, { "dt:dt": s }));
    }
  }), "<" + n + ' xmlns="' + Rt.o + '">' + a.join("") + "</" + n + ">";
}
function gh(e) {
  var t = typeof e == "string" ? new Date(Date.parse(e)) : e, r = t.getTime() / 1e3 + 11644473600, n = r % Math.pow(2, 32), a = (r - n) / Math.pow(2, 32);
  n *= 1e7, a *= 1e7;
  var o = n / Math.pow(2, 32) | 0;
  o > 0 && (n = n % Math.pow(2, 32), a += o);
  var i = j(8);
  return i.write_shift(4, n), i.write_shift(4, a), i;
}
function _o(e, t) {
  var r = j(4), n = j(4);
  switch (r.write_shift(4, e == 80 ? 31 : e), e) {
    case 3:
      n.write_shift(-4, t);
      break;
    case 5:
      n = j(8), n.write_shift(8, t, "f");
      break;
    case 11:
      n.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      n = gh(t);
      break;
    case 31:
    case 80:
      for (n = j(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)), n.write_shift(4, t.length + 1), n.write_shift(0, t, "dbcs"); n.l != n.length; ) n.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + t);
  }
  return et([r, n]);
}
var Gs = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function vh(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      return (e | 0) == e ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (e instanceof Date) return 64;
      break;
  }
  return -1;
}
function Oo(e, t, r) {
  var n = j(8), a = [], o = [], i = 8, s = 0, l = j(8), c = j(8);
  if (l.write_shift(4, 2), l.write_shift(4, 1200), c.write_shift(4, 1), o.push(l), a.push(c), i += 8 + l.length, !t) {
    c = j(8), c.write_shift(4, 0), a.unshift(c);
    var f = [j(4)];
    for (f[0].write_shift(4, e.length), s = 0; s < e.length; ++s) {
      var d = e[s][0];
      for (l = j(8 + 2 * (d.length + 1) + (d.length % 2 ? 0 : 2)), l.write_shift(4, s + 2), l.write_shift(4, d.length + 1), l.write_shift(0, d, "dbcs"); l.l != l.length; ) l.write_shift(1, 0);
      f.push(l);
    }
    l = et(f), o.unshift(l), i += 8 + l.length;
  }
  for (s = 0; s < e.length; ++s)
    if (!(t && !t[e[s][0]]) && !(Gs.indexOf(e[s][0]) > -1 || Vs.indexOf(e[s][0]) > -1) && e[s][1] != null) {
      var u = e[s][1], h = 0;
      if (t) {
        h = +t[e[s][0]];
        var g = r[h];
        if (g.p == "version" && typeof u == "string") {
          var m = u.split(".");
          u = (+m[0] << 16) + (+m[1] || 0);
        }
        l = _o(g.t, u);
      } else {
        var p = vh(u);
        p == -1 && (p = 31, u = String(u)), l = _o(p, u);
      }
      o.push(l), c = j(8), c.write_shift(4, t ? h : 2 + s), a.push(c), i += 8 + l.length;
    }
  var w = 8 * (o.length + 1);
  for (s = 0; s < o.length; ++s)
    a[s].write_shift(4, w), w += o[s].length;
  return n.write_shift(4, i), n.write_shift(4, o.length), et([n].concat(a).concat(o));
}
function Ao(e, t, r, n, a, o) {
  var i = j(a ? 68 : 48), s = [i];
  i.write_shift(2, 65534), i.write_shift(2, 0), i.write_shift(4, 842412599), i.write_shift(16, ze.utils.consts.HEADER_CLSID, "hex"), i.write_shift(4, a ? 2 : 1), i.write_shift(16, t, "hex"), i.write_shift(4, a ? 68 : 48);
  var l = Oo(e, r, n);
  if (s.push(l), a) {
    var c = Oo(a, null, null);
    i.write_shift(16, o, "hex"), i.write_shift(4, 68 + l.length), s.push(c);
  }
  return et(s);
}
function bh(e, t) {
  t || (t = j(e));
  for (var r = 0; r < e; ++r) t.write_shift(1, 0);
  return t;
}
function wh(e, t) {
  return e.read_shift(t) === 1;
}
function mt(e, t) {
  return t || (t = j(2)), t.write_shift(2, +!!e), t;
}
function Un(e) {
  return e.read_shift(2, "u");
}
function Pt(e, t) {
  return t || (t = j(2)), t.write_shift(2, e), t;
}
function Ks(e, t, r) {
  return r || (r = j(2)), r.write_shift(1, t == "e" ? +e : +!!e), r.write_shift(1, t == "e" ? 1 : 0), r;
}
function Ys(e, t, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1), a = "sbcs-cont", o = er;
  if (r && r.biff >= 8 && (er = 1200), !r || r.biff == 8) {
    var i = e.read_shift(1);
    i && (a = "dbcs-cont");
  } else r.biff == 12 && (a = "wstr");
  r.biff >= 2 && r.biff <= 5 && (a = "cpstr");
  var s = n ? e.read_shift(n, a) : "";
  return er = o, s;
}
function yh(e) {
  var t = e.t || "", r = j(3);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var n = j(2 * t.length);
  n.write_shift(2 * t.length, t, "utf16le");
  var a = [r, n];
  return et(a);
}
function Th(e, t, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, "cpstr");
    if (r.biff >= 12) return e.read_shift(t, "dbcs-cont");
  }
  var a = e.read_shift(1);
  return a === 0 ? n = e.read_shift(t, "sbcs-cont") : n = e.read_shift(t, "dbcs-cont"), n;
}
function Eh(e, t, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, "") : Th(e, n, r);
}
function Sh(e, t, r) {
  if (r.biff > 5) return Eh(e, t, r);
  var n = e.read_shift(1);
  return n === 0 ? (e.l++, "") : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function Js(e, t, r) {
  return r || (r = j(3 + 2 * e.length)), r.write_shift(2, e.length), r.write_shift(1, 1), r.write_shift(31, e, "utf16le"), r;
}
function Co(e, t) {
  t || (t = j(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function kh(e) {
  var t = j(512), r = 0, n = e.Target;
  n.slice(0, 7) == "file://" && (n = n.slice(7));
  var a = n.indexOf("#"), o = a > -1 ? 31 : 23;
  switch (n.charAt(0)) {
    case "#":
      o = 28;
      break;
    case ".":
      o &= -3;
      break;
  }
  t.write_shift(4, 2), t.write_shift(4, o);
  var i = [8, 6815827, 6619237, 4849780, 83];
  for (r = 0; r < i.length; ++r) t.write_shift(4, i[r]);
  if (o == 28)
    n = n.slice(1), Co(n, t);
  else if (o & 2) {
    for (i = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0; r < i.length; ++r) t.write_shift(1, parseInt(i[r], 16));
    var s = a > -1 ? n.slice(0, a) : n;
    for (t.write_shift(4, 2 * (s.length + 1)), r = 0; r < s.length; ++r) t.write_shift(2, s.charCodeAt(r));
    t.write_shift(2, 0), o & 8 && Co(a > -1 ? n.slice(a + 1) : "", t);
  } else {
    for (i = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0; r < i.length; ++r) t.write_shift(1, parseInt(i[r], 16));
    for (var l = 0; n.slice(l * 3, l * 3 + 3) == "../" || n.slice(l * 3, l * 3 + 3) == "..\\"; ) ++l;
    for (t.write_shift(2, l), t.write_shift(4, n.length - 3 * l + 1), r = 0; r < n.length - 3 * l; ++r) t.write_shift(1, n.charCodeAt(r + 3 * l) & 255);
    for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r) t.write_shift(4, 0);
  }
  return t.slice(0, t.l);
}
function kr(e, t, r, n) {
  return n || (n = j(6)), n.write_shift(2, e), n.write_shift(2, t), n.write_shift(2, r || 0), n;
}
function xh(e, t, r) {
  var n = r.biff > 8 ? 4 : 2, a = e.read_shift(n), o = e.read_shift(n, "i"), i = e.read_shift(n, "i");
  return [a, o, i];
}
function _h(e) {
  var t = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2), a = e.read_shift(2);
  return { s: { c: n, r: t }, e: { c: a, r } };
}
function Xs(e, t) {
  return t || (t = j(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t;
}
function Si(e, t, r) {
  var n = 1536, a = 16;
  switch (r.bookType) {
    case "biff8":
      break;
    case "biff5":
      n = 1280, a = 8;
      break;
    case "biff4":
      n = 4, a = 6;
      break;
    case "biff3":
      n = 3, a = 6;
      break;
    case "biff2":
      n = 2, a = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var o = j(a);
  return o.write_shift(2, n), o.write_shift(2, t), a > 4 && o.write_shift(2, 29282), a > 6 && o.write_shift(2, 1997), a > 8 && (o.write_shift(2, 49161), o.write_shift(2, 1), o.write_shift(2, 1798), o.write_shift(2, 0)), o;
}
function Oh(e, t) {
  var r = !t || t.biff == 8, n = j(r ? 112 : 54);
  for (n.write_shift(t.biff == 8 ? 2 : 1, 7), r && n.write_shift(1, 0), n.write_shift(4, 859007059), n.write_shift(4, 5458548 | (r ? 0 : 536870912)); n.l < n.length; ) n.write_shift(1, r ? 0 : 32);
  return n;
}
function Ah(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1, n = j(8 + r * e.name.length);
  n.write_shift(4, e.pos), n.write_shift(1, e.hs || 0), n.write_shift(1, e.dt), n.write_shift(1, e.name.length), t.biff >= 8 && n.write_shift(1, 1), n.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
  var a = n.slice(0, n.l);
  return a.l = n.l, a;
}
function Ch(e, t) {
  var r = j(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var n = [], a = 0; a < e.length; ++a) n[a] = yh(e[a]);
  var o = et([r].concat(n));
  return o.parts = [r.length].concat(n.map(function(i) {
    return i.length;
  })), o;
}
function Dh() {
  var e = j(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function Rh(e) {
  var t = j(18), r = 1718;
  return e && e.RTL && (r |= 64), t.write_shift(2, r), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
function Nh(e, t) {
  var r = e.name || "Arial", n = t && t.biff == 5, a = n ? 15 + r.length : 16 + 2 * r.length, o = j(a);
  return o.write_shift(2, e.sz * 20), o.write_shift(4, 0), o.write_shift(2, 400), o.write_shift(4, 0), o.write_shift(2, 0), o.write_shift(1, r.length), n || o.write_shift(1, 1), o.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le"), o;
}
function Lh(e, t, r, n) {
  var a = j(10);
  return kr(e, t, n, a), a.write_shift(4, r), a;
}
function Mh(e, t, r, n, a) {
  var o = !a || a.biff == 8, i = j(8 + +o + (1 + o) * r.length);
  return kr(e, t, n, i), i.write_shift(2, r.length), o && i.write_shift(1, 1), i.write_shift((1 + o) * r.length, r, o ? "utf16le" : "sbcs"), i;
}
function Ih(e, t, r, n) {
  var a = r && r.biff == 5;
  n || (n = j(a ? 3 + t.length : 5 + 2 * t.length)), n.write_shift(2, e), n.write_shift(a ? 1 : 2, t.length), a || n.write_shift(1, 1), n.write_shift((a ? 1 : 2) * t.length, t, a ? "sbcs" : "utf16le");
  var o = n.length > n.l ? n.slice(0, n.l) : n;
  return o.l == null && (o.l = o.length), o;
}
function Ph(e) {
  var t = j(1 + e.length);
  return t.write_shift(1, e.length), t.write_shift(e.length, e, "sbcs"), t;
}
function Fh(e) {
  var t = j(3 + e.length);
  return t.l += 2, t.write_shift(1, e.length), t.write_shift(e.length, e, "sbcs"), t;
}
function Uh(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2, n = j(2 * r + 6);
  return n.write_shift(r, e.s.r), n.write_shift(r, e.e.r + 1), n.write_shift(2, e.s.c), n.write_shift(2, e.e.c + 1), n.write_shift(2, 0), n;
}
function Do(e, t, r, n) {
  var a = r && r.biff == 5;
  n || (n = j(a ? 16 : 20)), n.write_shift(2, 0), e.style ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524)) : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, t << 4));
  var o = 0;
  return e.numFmtId > 0 && a && (o |= 1024), n.write_shift(4, o), n.write_shift(4, 0), a || n.write_shift(4, 0), n.write_shift(2, 0), n;
}
function $h(e) {
  var t = j(4);
  return t.l += 2, t.write_shift(1, e.numFmtId), t.l++, t;
}
function qs(e) {
  var t = j(12);
  return t.l++, t.write_shift(1, e.numFmtId), t.l += 10, t;
}
var Bh = qs;
function zh(e) {
  var t = j(8);
  return t.write_shift(4, 0), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function Ma(e, t, r, n, a, o) {
  var i = j(8);
  return kr(e, t, n, i), Ks(r, o, i), i;
}
function Wh(e, t, r, n) {
  var a = j(14);
  return kr(e, t, n, a), Sr(r, a), a;
}
function Vh(e, t, r) {
  if (r.biff < 8 || !(r.biff > 8) && t == e[e.l] + (e[e.l + 1] == 3 ? 1 : 0) + 1) return Hh(e, t, r);
  for (var n = [], a = e.l + t, o = e.read_shift(r.biff > 8 ? 4 : 2); o-- !== 0; ) n.push(xh(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != a) throw new Error("Bad ExternSheet: " + e.l + " != " + a);
  return n;
}
function Hh(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = Ys(e, t, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Ia(e, t, r, n) {
  var a = j(6 + (n || e.length));
  return a.write_shift(2, t), a.write_shift(2, r), a.write_shift(2, n || e.length), a.write_shift(e.length, e, "sbcs"), a;
}
function jh(e) {
  var t = j(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r) Xs(e[r], t);
  return t;
}
function Gh(e) {
  var t = j(24), r = Ke(e[0]);
  t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c);
  for (var n = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), a = 0; a < 16; ++a) t.write_shift(1, parseInt(n[a], 16));
  return et([t, kh(e[1])]);
}
function Kh(e) {
  var t = e[1].Tooltip, r = j(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var n = Ke(e[0]);
  r.write_shift(2, n.r), r.write_shift(2, n.r), r.write_shift(2, n.c), r.write_shift(2, n.c);
  for (var a = 0; a < t.length; ++a) r.write_shift(2, t.charCodeAt(a));
  return r.write_shift(2, 0), r;
}
function Yh(e) {
  return e || (e = j(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function Jh(e, t, r) {
  if (!r.cellStyles) return Yt(e, t);
  var n = r && r.biff >= 12 ? 4 : 2, a = e.read_shift(n), o = e.read_shift(n), i = e.read_shift(n), s = e.read_shift(n), l = e.read_shift(2);
  n == 2 && (e.l += 2);
  var c = { s: a, e: o, w: i, ixfe: s, flags: l };
  return (r.biff >= 5 || !r.biff) && (c.level = l >> 8 & 7), c;
}
function Xh(e, t) {
  var r = j(12);
  r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, e.width * 256), r.write_shift(2, 0);
  var n = 0;
  return e.hidden && (n |= 1), r.write_shift(1, n), n = e.level || 0, r.write_shift(1, n), r.write_shift(2, 0), r;
}
function qh(e) {
  for (var t = j(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1);
  return t;
}
function kn(e, t, r, n, a) {
  return e || (e = j(7)), e.write_shift(2, t), e.write_shift(2, r), e.write_shift(
    1,
    n || 0
    /* & 0x3F */
  ), e.write_shift(
    1,
    a || 0
    /* & 0x3F */
  ), e.write_shift(1, 0), e;
}
function Qh(e, t, r, n, a) {
  var o = j(15);
  return kn(o, e, t, n || 0, a || 0), o.write_shift(8, r, "f"), o;
}
function Zh(e, t, r, n, a) {
  var o = j(9);
  return kn(o, e, t, n || 0, a || 0), o.write_shift(2, r), o;
}
var e0 = /* @__PURE__ */ (function() {
  var e = {
    /* Code Pages Supported by Visual FoxPro */
    1: 437,
    2: 850,
    3: 1252,
    4: 1e4,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    /* shapefile DBF extension */
    0: 20127,
    8: 865,
    9: 437,
    10: 850,
    11: 437,
    13: 437,
    14: 850,
    15: 437,
    16: 850,
    17: 437,
    18: 850,
    19: 932,
    20: 850,
    21: 437,
    22: 850,
    23: 865,
    24: 437,
    25: 437,
    26: 850,
    27: 437,
    28: 863,
    29: 850,
    31: 852,
    34: 852,
    35: 852,
    36: 860,
    37: 850,
    38: 866,
    55: 850,
    64: 852,
    77: 936,
    78: 949,
    79: 950,
    80: 874,
    87: 1252,
    88: 1252,
    89: 1252,
    108: 863,
    134: 737,
    135: 852,
    136: 857,
    204: 1257,
    255: 16969
  }, t = ui({
    1: 437,
    2: 850,
    3: 1252,
    4: 1e4,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    0: 20127
  });
  function r(s, l) {
    var c = [], f = yr(1);
    switch (l.type) {
      case "base64":
        f = Dt(cr(s));
        break;
      case "binary":
        f = Dt(s);
        break;
      case "buffer":
      case "array":
        f = s;
        break;
    }
    Et(f, 0);
    var d = f.read_shift(1), u = !!(d & 136), h = !1, g = !1;
    switch (d) {
      case 2:
        break;
      // dBASE II
      case 3:
        break;
      // dBASE III
      case 48:
        h = !0, u = !0;
        break;
      // VFP
      case 49:
        h = !0, u = !0;
        break;
      // VFP with autoincrement
      // 0x43 dBASE IV SQL table files
      // 0x63 dBASE IV SQL system files
      case 131:
        break;
      // dBASE III with memo
      case 139:
        break;
      // dBASE IV with memo
      case 140:
        g = !0;
        break;
      // dBASE Level 7 with memo
      // case 0xCB dBASE IV SQL table files with memo
      case 245:
        break;
      // FoxPro 2.x with memo
      // case 0xFB FoxBASE
      default:
        throw new Error("DBF Unsupported Version: " + d.toString(16));
    }
    var m = 0, p = 521;
    d == 2 && (m = f.read_shift(2)), f.l += 3, d != 2 && (m = f.read_shift(4)), m > 1048576 && (m = 1e6), d != 2 && (p = f.read_shift(2));
    var w = f.read_shift(2);
    l.codepage, d != 2 && (f.l += 16, f.read_shift(1), f[f.l] !== 0 && e[f[f.l]], f.l += 1, f.l += 2), g && (f.l += 36);
    for (var O = [], y = {}, B = Math.min(f.length, d == 2 ? 521 : p - 10 - (h ? 264 : 0)), I = g ? 32 : 11; f.l < B && f[f.l] != 13; )
      switch (y = {}, y.name = Tr(f.slice(f.l, f.l + I)).replace(/[\u0000\r\n][\S\s]*$/g, ""), f.l += I, y.type = String.fromCharCode(f.read_shift(1)), d != 2 && !g && (y.offset = f.read_shift(4)), y.len = f.read_shift(1), d == 2 && (y.offset = f.read_shift(2)), y.dec = f.read_shift(1), y.name.length && O.push(y), d != 2 && (f.l += g ? 13 : 14), y.type) {
        case "B":
          (!h || y.len != 8) && l.WTF && console.log("Skipping " + y.name + ":" + y.type);
          break;
        case "G":
        // General (FoxPro and dBASE L7)
        case "P":
          l.WTF && console.log("Skipping " + y.name + ":" + y.type);
          break;
        case "+":
        // Autoincrement (dBASE L7 only)
        case "0":
        // _NullFlags (VFP only)
        case "@":
        // Timestamp (dBASE L7 only)
        case "C":
        // Character (dBASE II)
        case "D":
        // Date (dBASE III)
        case "F":
        // Float (dBASE IV)
        case "I":
        // Long (VFP and dBASE L7)
        case "L":
        // Logical (dBASE II)
        case "M":
        // Memo (dBASE III)
        case "N":
        // Number (dBASE II)
        case "O":
        // Double (dBASE L7 only)
        case "T":
        // Datetime (VFP only)
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + y.type);
      }
    if (f[f.l] !== 13 && (f.l = p - 1), f.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + f.l + " " + f[f.l]);
    f.l = p;
    var G = 0, v = 0;
    for (c[0] = [], v = 0; v != O.length; ++v) c[0][v] = O[v].name;
    for (; m-- > 0; ) {
      if (f[f.l] === 42) {
        f.l += w;
        continue;
      }
      for (++f.l, c[++G] = [], v = 0, v = 0; v != O.length; ++v) {
        var k = f.slice(f.l, f.l + O[v].len);
        f.l += O[v].len, Et(k, 0);
        var A = Tr(k);
        switch (O[v].type) {
          case "C":
            A.trim().length && (c[G][v] = A.replace(/([^\s])\s+$/, "$1"));
            break;
          case "D":
            A.length === 8 ? (c[G][v] = new Date(Date.UTC(+A.slice(0, 4), +A.slice(4, 6) - 1, +A.slice(6, 8), 0, 0, 0, 0)), l && l.UTC || (c[G][v] = zr(c[G][v]))) : c[G][v] = A;
            break;
          case "F":
            c[G][v] = parseFloat(A.trim());
            break;
          case "+":
          case "I":
            c[G][v] = g ? k.read_shift(-4, "i") ^ 2147483648 : k.read_shift(4, "i");
            break;
          case "L":
            switch (A.trim().toUpperCase()) {
              case "Y":
              case "T":
                c[G][v] = !0;
                break;
              case "N":
              case "F":
                c[G][v] = !1;
                break;
              case "":
              case "\0":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + A + "|");
            }
            break;
          case "M":
            if (!u) throw new Error("DBF Unexpected MEMO for type " + d.toString(16));
            c[G][v] = "##MEMO##" + (g ? parseInt(A.trim(), 10) : k.read_shift(4));
            break;
          case "N":
            A = A.replace(/\u0000/g, "").trim(), A && A != "." && (c[G][v] = +A || 0);
            break;
          case "@":
            c[G][v] = new Date(k.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            {
              var D = k.read_shift(4), L = k.read_shift(4);
              if (D == 0 && L == 0) break;
              c[G][v] = new Date((D - 2440588) * 864e5 + L), l && l.UTC || (c[G][v] = zr(c[G][v]));
            }
            break;
          case "Y":
            c[G][v] = k.read_shift(4, "i") / 1e4 + k.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            c[G][v] = -k.read_shift(-8, "f");
            break;
          case "B":
            if (h && O[v].len == 8) {
              c[G][v] = k.read_shift(8, "f");
              break;
            }
          /* falls through */
          case "G":
          case "P":
            k.l += O[v].len;
            break;
          case "0":
            if (O[v].name === "_NullFlags") break;
          /* falls through */
          default:
            throw new Error("DBF Unsupported data type " + O[v].type);
        }
      }
    }
    if (d != 2 && f.l < f.length && f[f.l++] != 26) throw new Error("DBF EOF Marker missing " + (f.l - 1) + " of " + f.length + " " + f[f.l - 1].toString(16));
    return l && l.sheetRows && (c = c.slice(0, l.sheetRows)), l.DBF = O, c;
  }
  function n(s, l) {
    var c = l || {};
    c.dateNF || (c.dateNF = "yyyymmdd");
    var f = jr(r(s, c), c);
    return f["!cols"] = c.DBF.map(function(d) {
      return {
        wch: d.len,
        DBF: d
      };
    }), delete c.DBF, f;
  }
  function a(s, l) {
    try {
      var c = Hr(n(s, l), l);
      return c.bookType = "dbf", c;
    } catch (f) {
      if (l && l.WTF) throw f;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var o = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function i(s, l) {
    if (!s["!ref"]) throw new Error("Cannot export empty sheet to DBF");
    var c = l || {}, f = er;
    if (+c.codepage >= 0 && dn(+c.codepage), c.type == "string") throw new Error("Cannot write DBF to JS string");
    var d = gt(), u = ai(s, { header: 1, raw: !0, cellDates: !0 }), h = u[0], g = u.slice(1), m = s["!cols"] || [], p = 0, w = 0, O = 0, y = 1;
    for (p = 0; p < h.length; ++p) {
      if (((m[p] || {}).DBF || {}).name) {
        h[p] = m[p].DBF.name, ++O;
        continue;
      }
      if (h[p] != null) {
        if (++O, typeof h[p] == "number" && (h[p] = h[p].toString(10)), typeof h[p] != "string") throw new Error("DBF Invalid column name " + h[p] + " |" + typeof h[p] + "|");
        if (h.indexOf(h[p]) !== p) {
          for (w = 0; w < 1024; ++w)
            if (h.indexOf(h[p] + "_" + w) == -1) {
              h[p] += "_" + w;
              break;
            }
        }
      }
    }
    var B = He(s["!ref"]), I = [], G = [], v = [];
    for (p = 0; p <= B.e.c - B.s.c; ++p) {
      var k = "", A = "", D = 0, L = [];
      for (w = 0; w < g.length; ++w)
        g[w][p] != null && L.push(g[w][p]);
      if (L.length == 0 || h[p] == null) {
        I[p] = "?";
        continue;
      }
      for (w = 0; w < L.length; ++w) {
        switch (typeof L[w]) {
          /* TODO: check if L2 compat is desired */
          case "number":
            A = "B";
            break;
          case "string":
            A = "C";
            break;
          case "boolean":
            A = "L";
            break;
          case "object":
            A = L[w] instanceof Date ? "D" : "C";
            break;
          default:
            A = "C";
        }
        D = Math.max(D, String(L[w]).length), k = k && k != A ? "C" : A;
      }
      D > 250 && (D = 250), A = ((m[p] || {}).DBF || {}).type, A == "C" && m[p].DBF.len > D && (D = m[p].DBF.len), k == "B" && A == "N" && (k = "N", v[p] = m[p].DBF.dec, D = m[p].DBF.len), G[p] = k == "C" || A == "N" ? D : o[k] || 0, y += G[p], I[p] = k;
    }
    var P = d.next(32);
    for (P.write_shift(4, 318902576), P.write_shift(4, g.length), P.write_shift(2, 296 + 32 * O), P.write_shift(2, y), p = 0; p < 4; ++p) P.write_shift(4, 0);
    var M = +t[
      /*::String(*/
      er
      /*::)*/
    ] || 3;
    for (P.write_shift(4, 0 | M << 8), e[M] != +c.codepage && (c.codepage && console.error("DBF Unsupported codepage " + er + ", using 1252"), er = 1252), p = 0, w = 0; p < h.length; ++p)
      if (h[p] != null) {
        var V = d.next(32), F = (h[p].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        V.write_shift(1, F, "sbcs"), V.write_shift(1, I[p] == "?" ? "C" : I[p], "sbcs"), V.write_shift(4, w), V.write_shift(1, G[p] || o[I[p]] || 0), V.write_shift(1, v[p] || 0), V.write_shift(1, 2), V.write_shift(4, 0), V.write_shift(1, 0), V.write_shift(4, 0), V.write_shift(4, 0), w += G[p] || o[I[p]] || 0;
      }
    var U = d.next(264);
    for (U.write_shift(4, 13), p = 0; p < 65; ++p) U.write_shift(4, 0);
    for (p = 0; p < g.length; ++p) {
      var K = d.next(y);
      for (K.write_shift(1, 0), w = 0; w < h.length; ++w)
        if (h[w] != null)
          switch (I[w]) {
            case "L":
              K.write_shift(1, g[p][w] == null ? 63 : g[p][w] ? 84 : 70);
              break;
            case "B":
              K.write_shift(8, g[p][w] || 0, "f");
              break;
            case "N":
              var Z = "0";
              for (typeof g[p][w] == "number" && (Z = g[p][w].toFixed(v[w] || 0)), Z.length > G[w] && (Z = Z.slice(0, G[w])), O = 0; O < G[w] - Z.length; ++O) K.write_shift(1, 32);
              K.write_shift(1, Z, "sbcs");
              break;
            case "D":
              g[p][w] ? (K.write_shift(4, ("0000" + g[p][w].getFullYear()).slice(-4), "sbcs"), K.write_shift(2, ("00" + (g[p][w].getMonth() + 1)).slice(-2), "sbcs"), K.write_shift(2, ("00" + g[p][w].getDate()).slice(-2), "sbcs")) : K.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var me = K.l, te = String(g[p][w] != null ? g[p][w] : "").slice(0, G[w]);
              for (K.write_shift(1, te, "cpstr"), me += G[w] - K.l, O = 0; O < me; ++O) K.write_shift(1, 32);
              break;
          }
    }
    return er = f, d.next(1).write_shift(1, 26), d.end();
  }
  return {
    to_workbook: a,
    to_sheet: n,
    from_sheet: i
  };
})(), t0 = /* @__PURE__ */ (function() {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    0: 176,
    1: 177,
    2: 178,
    3: 179,
    5: 181,
    6: 182,
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, t = new RegExp("\x1BN(" + tt(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1").replace("{", "\\{") + "|\\|)", "gm");
  try {
    t = new RegExp("\x1BN(" + tt(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
  } catch {
  }
  var r = function(h, g) {
    var m = e[g];
    return typeof m == "number" ? Zi(m) : m;
  }, n = function(h, g, m) {
    var p = g.charCodeAt(0) - 32 << 4 | m.charCodeAt(0) - 48;
    return p == 59 ? h : Zi(p);
  };
  e["|"] = 254;
  var a = function(h) {
    return h.replace(/\n/g, "\x1B :").replace(/\r/g, "\x1B =");
  };
  function o(h, g) {
    switch (g.type) {
      case "base64":
        return i(cr(h), g);
      case "binary":
        return i(h, g);
      case "buffer":
        return i(Fe && Buffer.isBuffer(h) ? h.toString("binary") : Tr(h), g);
      case "array":
        return i(hi(h), g);
    }
    throw new Error("Unrecognized type " + g.type);
  }
  function i(h, g) {
    var m = h.split(/[\n\r]+/), p = -1, w = -1, O = 0, y = 0, B = [], I = [], G = null, v = {}, k = [], A = [], D = [], L = 0, P, M = { Workbook: { WBProps: {}, Names: [] } };
    for (+g.codepage >= 0 && dn(+g.codepage); O !== m.length; ++O) {
      L = 0;
      var V = m[O].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n).replace(t, r), F = V.replace(/;;/g, "\0").split(";").map(function(R) {
        return R.replace(/\u0000/g, ";");
      }), U = F[0], K;
      if (V.length > 0) switch (U) {
        case "ID":
          break;
        /* header */
        case "E":
          break;
        /* EOF */
        case "B":
          break;
        /* dimensions */
        case "O":
          for (y = 1; y < F.length; ++y) switch (F[y].charAt(0)) {
            case "V":
              {
                var Z = parseInt(F[y].slice(1), 10);
                Z >= 1 && Z <= 4 && (M.Workbook.WBProps.date1904 = !0);
              }
              break;
          }
          break;
        case "W":
          break;
        /* window */
        case "P":
          switch (F[1].charAt(0)) {
            case "P":
              I.push(V.slice(3).replace(/;;/g, ";"));
              break;
          }
          break;
        case "NN":
          {
            var me = { Sheet: 0 };
            for (y = 1; y < F.length; ++y) switch (F[y].charAt(0)) {
              case "N":
                me.Name = F[y].slice(1);
                break;
              case "E":
                me.Ref = (g && g.sheet || "Sheet1") + "!" + Io(F[y].slice(1));
                break;
            }
            M.Workbook.Names.push(me);
          }
          break;
        // case 'NE': // ??
        // case 'NU': // ??
        case "C":
          var te = !1, ve = !1, ne = !1, Q = !1, ue = -1, ye = -1, xe = "", ke = "z", S = "";
          for (y = 1; y < F.length; ++y) switch (F[y].charAt(0)) {
            case "A":
              S = F[y].slice(1);
              break;
            // TODO: comment
            case "X":
              w = parseInt(F[y].slice(1), 10) - 1, ve = !0;
              break;
            case "Y":
              for (p = parseInt(F[y].slice(1), 10) - 1, ve || (w = 0), P = B.length; P <= p; ++P) B[P] = [];
              break;
            case "K":
              K = F[y].slice(1), K.charAt(0) === '"' ? (K = K.slice(1, K.length - 1), ke = "s") : K === "TRUE" || K === "FALSE" ? (K = K === "TRUE", ke = "b") : K.charAt(0) == "#" && Kt[K] != null ? (ke = "e", K = Kt[K]) : isNaN(rr(K)) || (K = rr(K), ke = "n", G !== null && Er(G) && g.cellDates && (K = Ir(M.Workbook.WBProps.date1904 ? K + 1462 : K), ke = typeof K == "number" ? "n" : "d")), te = !0;
              break;
            case "E":
              Q = !0, xe = Io(F[y].slice(1), { r: p, c: w });
              break;
            case "S":
              ne = !0;
              break;
            case "G":
              break;
            // unknown
            case "R":
              ue = parseInt(F[y].slice(1), 10) - 1;
              break;
            case "C":
              ye = parseInt(F[y].slice(1), 10) - 1;
              break;
            // case 'P': // ??
            // case 'D': // ??
            default:
              if (g && g.WTF) throw new Error("SYLK bad record " + V);
          }
          if (te && (B[p][w] ? (B[p][w].t = ke, B[p][w].v = K) : B[p][w] = { t: ke, v: K }, G && (B[p][w].z = G), g.cellText !== !1 && G && (B[p][w].w = ar(B[p][w].z, B[p][w].v, { date1904: M.Workbook.WBProps.date1904 })), G = null), ne) {
            if (Q) throw new Error("SYLK shared formula cannot have own formula");
            var z = ue > -1 && B[ue][ye];
            if (!z || !z[1]) throw new Error("SYLK shared formula cannot find base");
            xe = r1(z[1], { r: p - ue, c: w - ye });
          }
          xe && (B[p][w] ? B[p][w].f = xe : B[p][w] = { t: "n", f: xe }), S && (B[p][w] || (B[p][w] = { t: "z" }), B[p][w].c = [{ a: "SheetJSYLK", t: S }]);
          break;
        case "F":
          var N = 0;
          for (y = 1; y < F.length; ++y) switch (F[y].charAt(0)) {
            case "X":
              w = parseInt(F[y].slice(1), 10) - 1, ++N;
              break;
            case "Y":
              for (p = parseInt(F[y].slice(1), 10) - 1, P = B.length; P <= p; ++P) B[P] = [];
              break;
            case "M":
              L = parseInt(F[y].slice(1), 10) / 20;
              break;
            case "F":
              break;
            /* ??? */
            case "G":
              break;
            /* hide grid */
            case "P":
              G = I[parseInt(F[y].slice(1), 10)];
              break;
            case "S":
              break;
            /* cell style */
            case "D":
              break;
            /* column */
            case "N":
              break;
            /* font */
            case "W":
              for (D = F[y].slice(1).split(" "), P = parseInt(D[0], 10); P <= parseInt(D[1], 10); ++P)
                L = parseInt(D[2], 10), A[P - 1] = L === 0 ? { hidden: !0 } : { wch: L };
              break;
            case "C":
              w = parseInt(F[y].slice(1), 10) - 1, A[w] || (A[w] = {});
              break;
            case "R":
              p = parseInt(F[y].slice(1), 10) - 1, k[p] || (k[p] = {}), L > 0 ? (k[p].hpt = L, k[p].hpx = tl(L)) : L === 0 && (k[p].hidden = !0);
              break;
            // case 'K': // ??
            // case 'E': // ??
            default:
              if (g && g.WTF) throw new Error("SYLK bad record " + V);
          }
          N < 1 && (G = null);
          break;
        default:
          if (g && g.WTF) throw new Error("SYLK bad record " + V);
      }
    }
    return k.length > 0 && (v["!rows"] = k), A.length > 0 && (v["!cols"] = A), A.forEach(function(R) {
      ki(R);
    }), g && g.sheetRows && (B = B.slice(0, g.sheetRows)), [B, v, M];
  }
  function s(h, g) {
    var m = o(h, g), p = m[0], w = m[1], O = m[2], y = bt(g);
    y.date1904 = (((O || {}).Workbook || {}).WBProps || {}).date1904;
    var B = jr(p, y);
    tt(w).forEach(function(G) {
      B[G] = w[G];
    });
    var I = Hr(B, g);
    return tt(O).forEach(function(G) {
      I[G] = O[G];
    }), I.bookType = "sylk", I;
  }
  function l(h, g, m, p, w, O) {
    var y = "C;Y" + (m + 1) + ";X" + (p + 1) + ";K";
    switch (h.t) {
      case "n":
        y += isFinite(h.v) ? h.v || 0 : kt[isNaN(h.v) ? 36 : 7], h.f && !h.F && (y += ";E" + ba(h.f, { r: m, c: p }));
        break;
      case "b":
        y += h.v ? "TRUE" : "FALSE";
        break;
      case "e":
        y += h.w || kt[h.v] || h.v;
        break;
      case "d":
        y += ft(Ot(h.v, O), O);
        break;
      case "s":
        y += '"' + (h.v == null ? "" : String(h.v)).replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return y;
  }
  function c(h, g, m) {
    var p = "C;Y" + (g + 1) + ";X" + (m + 1) + ";A";
    return p += a(h.map(function(w) {
      return w.t;
    }).join("")), p;
  }
  function f(h, g) {
    g.forEach(function(m, p) {
      var w = "F;W" + (p + 1) + " " + (p + 1) + " ";
      m.hidden ? w += "0" : (typeof m.width == "number" && !m.wpx && (m.wpx = ta(m.width)), typeof m.wpx == "number" && !m.wch && (m.wch = ra(m.wpx)), typeof m.wch == "number" && (w += Math.round(m.wch))), w.charAt(w.length - 1) != " " && h.push(w);
    });
  }
  function d(h, g) {
    g.forEach(function(m, p) {
      var w = "F;";
      m.hidden ? w += "M0;" : m.hpt ? w += "M" + 20 * m.hpt + ";" : m.hpx && (w += "M" + 20 * na(m.hpx) + ";"), w.length > 2 && h.push(w + "R" + (p + 1));
    });
  }
  function u(h, g, m) {
    g || (g = {}), g._formats = ["General"];
    var p = ["ID;PSheetJS;N;E"], w = [], O = He(h["!ref"] || "A1"), y, B = h["!data"] != null, I = `\r
`, G = (((m || {}).Workbook || {}).WBProps || {}).date1904, v = "General";
    p.push("P;PGeneral");
    var k = O.s.r, A = O.s.c, D = [];
    if (h["!ref"]) {
      for (k = O.s.r; k <= O.e.r; ++k)
        if (!(B && !h["!data"][k])) {
          for (D = [], A = O.s.c; A <= O.e.c; ++A)
            y = B ? h["!data"][k][A] : h[$e(A) + Be(k)], !(!y || !y.c) && D.push(c(y.c, k, A));
          D.length && w.push(D.join(I));
        }
    }
    if (h["!ref"]) {
      for (k = O.s.r; k <= O.e.r; ++k)
        if (!(B && !h["!data"][k])) {
          for (D = [], A = O.s.c; A <= O.e.c; ++A)
            if (y = B ? h["!data"][k][A] : h[$e(A) + Be(k)], !(!y || y.v == null && (!y.f || y.F))) {
              if ((y.z || (y.t == "d" ? Ve[14] : "General")) != v) {
                var L = g._formats.indexOf(y.z);
                L == -1 && (g._formats.push(y.z), L = g._formats.length - 1, p.push("P;P" + y.z.replace(/;/g, ";;"))), D.push("F;P" + L + ";Y" + (k + 1) + ";X" + (A + 1));
              }
              D.push(l(y, h, k, A, g, G));
            }
          w.push(D.join(I));
        }
    }
    return p.push("F;P0;DG0G8;M255"), h["!cols"] && f(p, h["!cols"]), h["!rows"] && d(p, h["!rows"]), h["!ref"] && p.push("B;Y" + (O.e.r - O.s.r + 1) + ";X" + (O.e.c - O.s.c + 1) + ";D" + [O.s.c, O.s.r, O.e.c, O.e.r].join(" ")), p.push("O;L;D;B" + (G ? ";V4" : "") + ";K47;G100 0.001"), delete g._formats, p.join(I) + I + w.join(I) + I + "E" + I;
  }
  return {
    to_workbook: s,
    from_sheet: u
  };
})(), r0 = /* @__PURE__ */ (function() {
  function e(s, l) {
    switch (l.type) {
      case "base64":
        return t(cr(s), l);
      case "binary":
        return t(s, l);
      case "buffer":
        return t(Fe && Buffer.isBuffer(s) ? s.toString("binary") : Tr(s), l);
      case "array":
        return t(hi(s), l);
    }
    throw new Error("Unrecognized type " + l.type);
  }
  function t(s, l) {
    for (var c = s.split(`
`), f = -1, d = -1, u = 0, h = []; u !== c.length; ++u) {
      if (c[u].trim() === "BOT") {
        h[++f] = [], d = 0;
        continue;
      }
      if (!(f < 0)) {
        var g = c[u].trim().split(","), m = g[0], p = g[1];
        ++u;
        for (var w = c[u] || ""; (w.match(/["]/g) || []).length & 1 && u < c.length - 1; ) w += `
` + c[++u];
        switch (w = w.trim(), +m) {
          case -1:
            if (w === "BOT") {
              h[++f] = [], d = 0;
              continue;
            } else if (w !== "EOD") throw new Error("Unrecognized DIF special command " + w);
            break;
          case 0:
            w === "TRUE" ? h[f][d] = !0 : w === "FALSE" ? h[f][d] = !1 : isNaN(rr(p)) ? isNaN(qn(p).getDate()) ? h[f][d] = p : (h[f][d] = Ot(p), l && l.UTC || (h[f][d] = zr(h[f][d]))) : h[f][d] = rr(p), ++d;
            break;
          case 1:
            w = w.slice(1, w.length - 1), w = w.replace(/""/g, '"'), w && w.match(/^=".*"$/) && (w = w.slice(2, -1)), h[f][d++] = w !== "" ? w : null;
            break;
        }
        if (w === "EOD") break;
      }
    }
    return l && l.sheetRows && (h = h.slice(0, l.sheetRows)), h;
  }
  function r(s, l) {
    return jr(e(s, l), l);
  }
  function n(s, l) {
    var c = Hr(r(s, l), l);
    return c.bookType = "dif", c;
  }
  function a(s, l) {
    return "0," + String(s) + `\r
` + l;
  }
  function o(s) {
    return `1,0\r
"` + s.replace(/"/g, '""') + '"';
  }
  function i(s) {
    if (!s["!ref"]) throw new Error("Cannot export empty sheet to DIF");
    for (var l = He(s["!ref"]), c = s["!data"] != null, f = [
      `TABLE\r
0,1\r
"sheetjs"\r
`,
      `VECTORS\r
0,` + (l.e.r - l.s.r + 1) + `\r
""\r
`,
      `TUPLES\r
0,` + (l.e.c - l.s.c + 1) + `\r
""\r
`,
      `DATA\r
0,0\r
""\r
`
    ], d = l.s.r; d <= l.e.r; ++d) {
      for (var u = c ? s["!data"][d] : [], h = `-1,0\r
BOT\r
`, g = l.s.c; g <= l.e.c; ++g) {
        var m = c ? u && u[g] : s[Je({ r: d, c: g })];
        if (m == null) {
          h += `1,0\r
""\r
`;
          continue;
        }
        switch (m.t) {
          case "n":
            m.w != null ? h += "0," + m.w + `\r
V` : m.v != null ? h += a(m.v, "V") : m.f != null && !m.F ? h += o("=" + m.f) : h += `1,0\r
""`;
            break;
          case "b":
            h += m.v ? a(1, "TRUE") : a(0, "FALSE");
            break;
          case "s":
            h += o(isNaN(+m.v) ? m.v : '="' + m.v + '"');
            break;
          case "d":
            m.w || (m.w = ar(m.z || Ve[14], ft(Ot(m.v)))), h += a(m.w, "V");
            break;
          default:
            h += `1,0\r
""`;
        }
        h += `\r
`;
      }
      f.push(h);
    }
    return f.join("") + `-1,0\r
EOD`;
  }
  return {
    to_workbook: n,
    to_sheet: r,
    from_sheet: i
  };
})(), Qs = /* @__PURE__ */ (function() {
  function e(d) {
    return d.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function t(d) {
    return d.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(d, u) {
    for (var h = d.split(`
`), g = -1, m = -1, p = 0, w = []; p !== h.length; ++p) {
      var O = h[p].trim().split(":");
      if (O[0] === "cell") {
        var y = Ke(O[1]);
        if (w.length <= y.r) for (g = w.length; g <= y.r; ++g) w[g] || (w[g] = []);
        switch (g = y.r, m = y.c, O[2]) {
          case "t":
            w[g][m] = e(O[3]);
            break;
          case "v":
            w[g][m] = +O[3];
            break;
          case "vtf":
            var B = O[O.length - 1];
          /* falls through */
          case "vtc":
            switch (O[3]) {
              case "nl":
                w[g][m] = !!+O[4];
                break;
              default:
                w[g][m] = O[O.length - 1].charAt(0) == "#" ? { t: "e", v: Kt[O[O.length - 1]] } : +O[4];
                break;
            }
            O[2] == "vtf" && (w[g][m] = [w[g][m], B]);
        }
      }
    }
    return u && u.sheetRows && (w = w.slice(0, u.sheetRows)), w;
  }
  function n(d, u) {
    return jr(r(d, u), u);
  }
  function a(d, u) {
    return Hr(n(d, u), u);
  }
  var o = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), i = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, s = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), l = "--SocialCalcSpreadsheetControlSave--";
  function c(d) {
    if (!d || !d["!ref"]) return "";
    for (var u = [], h = [], g, m = "", p = ct(d["!ref"]), w = d["!data"] != null, O = p.s.r; O <= p.e.r; ++O)
      for (var y = p.s.c; y <= p.e.c; ++y)
        if (m = Je({ r: O, c: y }), g = w ? (d["!data"][O] || [])[y] : d[m], !(!g || g.v == null || g.t === "z")) {
          switch (h = ["cell", m, "t"], g.t) {
            case "s":
              h.push(t(g.v));
              break;
            case "b":
              h[2] = "vt" + (g.f ? "f" : "c"), h[3] = "nl", h[4] = g.v ? "1" : "0", h[5] = t(g.f || (g.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var B = ft(Ot(g.v));
              h[2] = "vtc", h[3] = "nd", h[4] = "" + B, h[5] = g.w || ar(g.z || Ve[14], B);
              break;
            case "n":
              isFinite(g.v) ? g.f ? (h[2] = "vtf", h[3] = "n", h[4] = g.v, h[5] = t(g.f)) : (h[2] = "v", h[3] = g.v) : (h[2] = "vt" + (g.f ? "f" : "c"), h[3] = "e" + kt[isNaN(g.v) ? 36 : 7], h[4] = "0", h[5] = g.f || h[3].slice(1), h[6] = "e", h[7] = h[3].slice(1));
              break;
            case "e":
              continue;
          }
          u.push(h.join(":"));
        }
    return u.push("sheet:c:" + (p.e.c - p.s.c + 1) + ":r:" + (p.e.r - p.s.r + 1) + ":tvf:1"), u.push("valueformat:1:text-wiki"), u.join(`
`);
  }
  function f(d) {
    return [o, i, s, i, c(d), l].join(`
`);
  }
  return {
    to_workbook: a,
    to_sheet: n,
    from_sheet: f
  };
})(), n0 = /* @__PURE__ */ (function() {
  function e(f, d, u, h, g) {
    g.raw ? d[u][h] = f : f === "" || (f === "TRUE" ? d[u][h] = !0 : f === "FALSE" ? d[u][h] = !1 : isNaN(rr(f)) ? isNaN(qn(f).getDate()) ? f.charCodeAt(0) == 35 && Kt[f] != null ? d[u][h] = { t: "e", v: Kt[f], w: f } : d[u][h] = f : d[u][h] = Ot(f) : d[u][h] = rr(f));
  }
  function t(f, d) {
    var u = d || {}, h = [];
    if (!f || f.length === 0) return h;
    for (var g = f.split(/[\r\n]/), m = g.length - 1; m >= 0 && g[m].length === 0; ) --m;
    for (var p = 10, w = 0, O = 0; O <= m; ++O)
      w = g[O].indexOf(" "), w == -1 ? w = g[O].length : w++, p = Math.max(p, w);
    for (O = 0; O <= m; ++O) {
      h[O] = [];
      var y = 0;
      for (e(g[O].slice(0, p).trim(), h, O, y, u), y = 1; y <= (g[O].length - p) / 10 + 1; ++y)
        e(g[O].slice(p + (y - 1) * 10, p + y * 10).trim(), h, O, y, u);
    }
    return u.sheetRows && (h = h.slice(0, u.sheetRows)), h;
  }
  var r = {
    44: ",",
    9: "	",
    59: ";",
    124: "|"
  }, n = {
    44: 3,
    9: 2,
    59: 1,
    124: 0
  };
  function a(f) {
    for (var d = {}, u = !1, h = 0, g = 0; h < f.length; ++h)
      (g = f.charCodeAt(h)) == 34 ? u = !u : !u && g in r && (d[g] = (d[g] || 0) + 1);
    g = [];
    for (h in d) Object.prototype.hasOwnProperty.call(d, h) && g.push([d[h], h]);
    if (!g.length) {
      d = n;
      for (h in d) Object.prototype.hasOwnProperty.call(d, h) && g.push([d[h], h]);
    }
    return g.sort(function(m, p) {
      return m[0] - p[0] || n[m[1]] - n[p[1]];
    }), r[g.pop()[1]] || 44;
  }
  function o(f, d) {
    var u = d || {}, h = "", g = {};
    u.dense && (g["!data"] = []);
    var m = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    f.slice(0, 4) == "sep=" ? f.charCodeAt(5) == 13 && f.charCodeAt(6) == 10 ? (h = f.charAt(4), f = f.slice(7)) : f.charCodeAt(5) == 13 || f.charCodeAt(5) == 10 ? (h = f.charAt(4), f = f.slice(6)) : h = a(f.slice(0, 1024)) : u && u.FS ? h = u.FS : h = a(f.slice(0, 1024));
    var p = 0, w = 0, O = 0, y = 0, B = 0, I = h.charCodeAt(0), G = !1, v = 0, k = f.charCodeAt(0), A = u.dateNF != null ? ou(u.dateNF) : null;
    function D() {
      var L = f.slice(y, B);
      L.slice(-1) == "\r" && (L = L.slice(0, -1));
      var P = {};
      if (L.charAt(0) == '"' && L.charAt(L.length - 1) == '"' && (L = L.slice(1, -1).replace(/""/g, '"')), u.cellText !== !1 && (P.w = L), L.length === 0) P.t = "z";
      else if (u.raw)
        P.t = "s", P.v = L;
      else if (L.trim().length === 0)
        P.t = "s", P.v = L;
      else if (L.charCodeAt(0) == 61)
        L.charCodeAt(1) == 34 && L.charCodeAt(L.length - 1) == 34 ? (P.t = "s", P.v = L.slice(2, -1).replace(/""/g, '"')) : n1(L) ? (P.t = "s", P.f = L.slice(1), P.v = L) : (P.t = "s", P.v = L);
      else if (L == "TRUE")
        P.t = "b", P.v = !0;
      else if (L == "FALSE")
        P.t = "b", P.v = !1;
      else if (!isNaN(O = rr(L)))
        P.t = "n", P.v = O;
      else if (!isNaN((O = qn(L)).getDate()) || A && L.match(A)) {
        if (P.z = u.dateNF || Ve[14], A && L.match(A)) {
          var M = su(L, u.dateNF, L.match(A) || []);
          O = Ot(M), u && u.UTC === !1 && (O = zr(O));
        } else u && u.UTC === !1 ? O = zr(O) : u.cellText !== !1 && u.dateNF && (P.w = ar(P.z, O));
        u.cellDates ? (P.t = "d", P.v = O) : (P.t = "n", P.v = ft(O)), u.cellNF || delete P.z;
      } else L.charCodeAt(0) == 35 && Kt[L] != null ? (P.t = "e", P.w = L, P.v = Kt[L]) : (P.t = "s", P.v = L);
      if (P.t == "z" || (u.dense ? (g["!data"][p] || (g["!data"][p] = []), g["!data"][p][w] = P) : g[Je({ c: w, r: p })] = P), y = B + 1, k = f.charCodeAt(y), m.e.c < w && (m.e.c = w), m.e.r < p && (m.e.r = p), v == I) ++w;
      else if (w = 0, ++p, u.sheetRows && u.sheetRows <= p) return !0;
    }
    e: for (; B < f.length; ++B) switch (v = f.charCodeAt(B)) {
      case 34:
        k === 34 && (G = !G);
        break;
      case 13:
        if (G) break;
        f.charCodeAt(B + 1) == 10 && ++B;
      /* falls through */
      case I:
      case 10:
        if (!G && D()) break e;
        break;
    }
    return B - y > 0 && D(), g["!ref"] = rt(m), g;
  }
  function i(f, d) {
    return !(d && d.PRN) || d.FS || f.slice(0, 4) == "sep=" || f.indexOf("	") >= 0 || f.indexOf(",") >= 0 || f.indexOf(";") >= 0 ? o(f, d) : jr(t(f, d), d);
  }
  function s(f, d) {
    var u = "", h = d.type == "string" ? [0, 0, 0, 0] : Dg(f, d);
    switch (d.type) {
      case "base64":
        u = cr(f);
        break;
      case "binary":
        u = f;
        break;
      case "buffer":
        d.codepage == 65001 ? u = f.toString("utf8") : (d.codepage, u = Fe && Buffer.isBuffer(f) ? f.toString("binary") : Tr(f));
        break;
      case "array":
        u = hi(f);
        break;
      case "string":
        u = f;
        break;
      default:
        throw new Error("Unrecognized type " + d.type);
    }
    return h[0] == 239 && h[1] == 187 && h[2] == 191 ? u = Pr(u.slice(3)) : d.type != "string" && d.type != "buffer" && d.codepage == 65001 ? u = Pr(u) : d.type == "binary", u.slice(0, 19) == "socialcalc:version:" ? Qs.to_sheet(d.type == "string" ? u : Pr(u), d) : i(u, d);
  }
  function l(f, d) {
    return Hr(s(f, d), d);
  }
  function c(f) {
    var d = [];
    if (!f["!ref"]) return "";
    for (var u = He(f["!ref"]), h, g = f["!data"] != null, m = u.s.r; m <= u.e.r; ++m) {
      for (var p = [], w = u.s.c; w <= u.e.c; ++w) {
        var O = Je({ r: m, c: w });
        if (h = g ? (f["!data"][m] || [])[w] : f[O], !h || h.v == null) {
          p.push("          ");
          continue;
        }
        for (var y = (h.w || (ir(h), h.w) || "").slice(0, 10); y.length < 10; ) y += " ";
        p.push(y + (w === 0 ? " " : ""));
      }
      d.push(p.join(""));
    }
    return d.join(`
`);
  }
  return {
    to_workbook: l,
    to_sheet: s,
    from_sheet: c
  };
})(), Ro = /* @__PURE__ */ (function() {
  function e(S, z, N) {
    if (S) {
      Et(S, S.l || 0);
      for (var R = N.Enum || Q; S.l < S.length; ) {
        var J = S.read_shift(2), ae = R[J] || R[65535], se = S.read_shift(2), Ee = S.l + se, pe = ae.f && ae.f(S, se, N);
        if (S.l = Ee, z(pe, ae, J)) return;
      }
    }
  }
  function t(S, z) {
    switch (z.type) {
      case "base64":
        return n(Dt(cr(S)), z);
      case "binary":
        return n(Dt(S), z);
      case "buffer":
      case "array":
        return n(S, z);
    }
    throw "Unsupported type " + z.type;
  }
  var r = [
    "mmmm",
    "dd-mmm-yyyy",
    "dd-mmm",
    "mmm-yyyy",
    "@",
    // "text"?
    "mm/dd",
    "hh:mm:ss AM/PM",
    // 7
    "hh:mm AM/PM",
    "mm/dd/yyyy",
    "mm/dd",
    "hh:mm:ss",
    "hh:mm"
    // 12
  ];
  function n(S, z) {
    if (!S) return S;
    var N = z || {}, R = {}, J = "Sheet1", ae = "", se = 0, Ee = {}, pe = [], Oe = [], Se = [];
    N.dense && (Se = R["!data"] = []);
    var De = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Me = N.sheetRows || 0, at = {};
    if (S[4] == 81 && S[5] == 80 && S[6] == 87) return ke(S, z);
    if (S[2] == 0 && (S[3] == 8 || S[3] == 9) && S.length >= 16 && S[14] == 5 && S[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (S[2] == 2)
      N.Enum = Q, e(S, function(he, or, xt) {
        switch (xt) {
          case 0:
            N.vers = he, he >= 4096 && (N.qpro = !0);
            break;
          case 255:
            N.vers = he, N.works = !0;
            break;
          case 6:
            De = he;
            break;
          /* RANGE */
          case 204:
            he && (ae = he);
            break;
          /* SHEETNAMECS */
          case 222:
            ae = he;
            break;
          /* SHEETNAMELP */
          case 15:
          /* LABEL */
          case 51:
            (!N.qpro && !N.works || xt == 51) && he[1].v.charCodeAt(0) < 48 && (he[1].v = he[1].v.slice(1)), (N.works || N.works2) && (he[1].v = he[1].v.replace(/\r\n/g, `
`));
          /* falls through */
          case 13:
          /* INTEGER */
          case 14:
          /* NUMBER */
          case 16:
            (he[2] & 112) == 112 && (he[2] & 15) > 1 && (he[2] & 15) < 15 && (he[1].z = N.dateNF || r[(he[2] & 15) - 1] || Ve[14], N.cellDates && (he[1].v = Ir(he[1].v), he[1].t = typeof he[1].v == "number" ? "n" : "d")), N.qpro && he[3] > se && (R["!ref"] = rt(De), Ee[J] = R, pe.push(J), R = {}, N.dense && (Se = R["!data"] = []), De = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, se = he[3], J = ae || "Sheet" + (se + 1), ae = "");
            var ut = N.dense ? (Se[he[0].r] || [])[he[0].c] : R[Je(he[0])];
            if (ut) {
              ut.t = he[1].t, ut.v = he[1].v, he[1].z != null && (ut.z = he[1].z), he[1].f != null && (ut.f = he[1].f), at = ut;
              break;
            }
            N.dense ? (Se[he[0].r] || (Se[he[0].r] = []), Se[he[0].r][he[0].c] = he[1]) : R[Je(he[0])] = he[1], at = he[1];
            break;
          case 21509:
            N.works2 = !0;
            break;
          case 21506:
            he == 5281 && (at.z = "hh:mm:ss", N.cellDates && at.t == "n" && (at.v = Ir(at.v), at.t = typeof at.v == "number" ? "n" : "d"));
            break;
        }
      }, N);
    else if (S[2] == 26 || S[2] == 14)
      N.Enum = ue, S[2] == 14 && (N.qpro = !0, S.l = 0), e(S, function(he, or, xt) {
        switch (xt) {
          case 204:
            J = he;
            break;
          /* SHEETNAMECS */
          case 22:
            he[1].v.charCodeAt(0) < 48 && (he[1].v = he[1].v.slice(1)), he[1].v = he[1].v.replace(/\x0F./g, function(ut) {
              return String.fromCharCode(ut.charCodeAt(1) - 32);
            }).replace(/\r\n/g, `
`);
          /* falls through */
          case 23:
          /* NUMBER17 */
          case 24:
          /* NUMBER18 */
          case 25:
          /* FORMULA19 */
          case 37:
          /* NUMBER25 */
          case 39:
          /* NUMBER27 */
          case 40:
            if (he[3] > se && (R["!ref"] = rt(De), Ee[J] = R, pe.push(J), R = {}, N.dense && (Se = R["!data"] = []), De = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, se = he[3], J = "Sheet" + (se + 1)), Me > 0 && he[0].r >= Me) break;
            N.dense ? (Se[he[0].r] || (Se[he[0].r] = []), Se[he[0].r][he[0].c] = he[1]) : R[Je(he[0])] = he[1], De.e.c < he[0].c && (De.e.c = he[0].c), De.e.r < he[0].r && (De.e.r = he[0].r);
            break;
          case 27:
            he[14e3] && (Oe[he[14e3][0]] = he[14e3][1]);
            break;
          case 1537:
            Oe[he[0]] = he[1], he[0] == se && (J = he[1]);
            break;
        }
      }, N);
    else throw new Error("Unrecognized LOTUS BOF " + S[2]);
    if (R["!ref"] = rt(De), Ee[ae || J] = R, pe.push(ae || J), !Oe.length) return { SheetNames: pe, Sheets: Ee };
    for (var qe = {}, ge = [], We = 0; We < Oe.length; ++We) Ee[pe[We]] ? (ge.push(Oe[We] || pe[We]), qe[Oe[We]] = Ee[Oe[We]] || Ee[pe[We]]) : (ge.push(Oe[We]), qe[Oe[We]] = { "!ref": "A1" });
    return { SheetNames: ge, Sheets: qe };
  }
  function a(S, z) {
    var N = z || {};
    if (+N.codepage >= 0 && dn(+N.codepage), N.type == "string") throw new Error("Cannot write WK1 to JS string");
    var R = gt();
    if (!S["!ref"]) throw new Error("Cannot export empty sheet to WK1");
    var J = He(S["!ref"]), ae = S["!data"] != null, se = [];
    re(R, 0, i(1030)), re(R, 6, c(J));
    for (var Ee = Math.min(J.e.r, 8191), pe = J.s.c; pe <= J.e.c; ++pe) se[pe] = $e(pe);
    for (var Oe = J.s.r; Oe <= Ee; ++Oe) {
      var Se = Be(Oe);
      for (pe = J.s.c; pe <= J.e.c; ++pe) {
        var De = ae ? (S["!data"][Oe] || [])[pe] : S[se[pe] + Se];
        if (!(!De || De.t == "z"))
          switch (De.t) {
            case "n":
              (De.v | 0) == De.v && De.v >= -32768 && De.v <= 32767 ? re(R, 13, p(Oe, pe, De)) : re(R, 14, O(Oe, pe, De));
              break;
            case "d":
              var Me = ft(De.v);
              (Me | 0) == Me && Me >= -32768 && Me <= 32767 ? re(R, 13, p(Oe, pe, { v: Me, z: De.z || Ve[14] })) : re(R, 14, O(Oe, pe, { v: Me, z: De.z || Ve[14] }));
              break;
            default:
              var at = ir(De);
              re(R, 15, h(Oe, pe, at.slice(0, 239)));
          }
      }
    }
    return re(R, 1), R.end();
  }
  function o(S, z) {
    var N = z || {};
    if (+N.codepage >= 0 && dn(+N.codepage), N.type == "string") throw new Error("Cannot write WK3 to JS string");
    var R = gt();
    re(R, 0, s(S));
    for (var J = 0, ae = 0; J < S.SheetNames.length; ++J) (S.Sheets[S.SheetNames[J]] || {})["!ref"] && re(R, 27, ne(S.SheetNames[J], ae++));
    var se = 0;
    for (J = 0; J < S.SheetNames.length; ++J) {
      var Ee = S.Sheets[S.SheetNames[J]];
      if (!(!Ee || !Ee["!ref"])) {
        for (var pe = He(Ee["!ref"]), Oe = Ee["!data"] != null, Se = [], De = Math.min(pe.e.r, 8191), Me = pe.s.r; Me <= De; ++Me)
          for (var at = Be(Me), qe = pe.s.c; qe <= pe.e.c; ++qe) {
            Me === pe.s.r && (Se[qe] = $e(qe));
            var ge = Se[qe] + at, We = Oe ? (Ee["!data"][Me] || [])[qe] : Ee[ge];
            if (!(!We || We.t == "z"))
              if (We.t == "n")
                re(R, 23, M(Me, qe, se, We.v));
              else {
                var he = ir(We);
                re(R, 22, D(Me, qe, se, he.slice(0, 239)));
              }
          }
        ++se;
      }
    }
    return re(R, 1), R.end();
  }
  function i(S) {
    var z = j(2);
    return z.write_shift(2, S), z;
  }
  function s(S) {
    var z = j(26);
    z.write_shift(2, 4096), z.write_shift(2, 4), z.write_shift(4, 0);
    for (var N = 0, R = 0, J = 0, ae = 0; ae < S.SheetNames.length; ++ae) {
      var se = S.SheetNames[ae], Ee = S.Sheets[se];
      if (!(!Ee || !Ee["!ref"])) {
        ++J;
        var pe = ct(Ee["!ref"]);
        N < pe.e.r && (N = pe.e.r), R < pe.e.c && (R = pe.e.c);
      }
    }
    return N > 8191 && (N = 8191), z.write_shift(2, N), z.write_shift(1, J), z.write_shift(1, R), z.write_shift(2, 0), z.write_shift(2, 0), z.write_shift(1, 1), z.write_shift(1, 2), z.write_shift(4, 0), z.write_shift(4, 0), z;
  }
  function l(S, z, N) {
    var R = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return z == 8 && N.qpro ? (R.s.c = S.read_shift(1), S.l++, R.s.r = S.read_shift(2), R.e.c = S.read_shift(1), S.l++, R.e.r = S.read_shift(2), R) : (R.s.c = S.read_shift(2), R.s.r = S.read_shift(2), z == 12 && N.qpro && (S.l += 2), R.e.c = S.read_shift(2), R.e.r = S.read_shift(2), z == 12 && N.qpro && (S.l += 2), R.s.c == 65535 && (R.s.c = R.e.c = R.s.r = R.e.r = 0), R);
  }
  function c(S) {
    var z = j(8);
    return z.write_shift(2, S.s.c), z.write_shift(2, S.s.r), z.write_shift(2, S.e.c), z.write_shift(2, S.e.r), z;
  }
  function f(S, z, N) {
    var R = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return N.qpro && N.vers != 20768 ? (R[0].c = S.read_shift(1), R[3] = S.read_shift(1), R[0].r = S.read_shift(2), S.l += 2) : N.works ? (R[0].c = S.read_shift(2), R[0].r = S.read_shift(2), R[2] = S.read_shift(2)) : (R[2] = S.read_shift(1), R[0].c = S.read_shift(2), R[0].r = S.read_shift(2)), R;
  }
  function d(S) {
    return S.z && Er(S.z) ? 240 | (r.indexOf(S.z) + 1 || 2) : 255;
  }
  function u(S, z, N) {
    var R = S.l + z, J = f(S, z, N);
    if (J[1].t = "s", (N.vers & 65534) == 20768) {
      S.l++;
      var ae = S.read_shift(1);
      return J[1].v = S.read_shift(ae, "utf8"), J;
    }
    return N.qpro && S.l++, J[1].v = S.read_shift(R - S.l, "cstr"), J;
  }
  function h(S, z, N) {
    var R = j(7 + N.length);
    R.write_shift(1, 255), R.write_shift(2, z), R.write_shift(2, S), R.write_shift(1, 39);
    for (var J = 0; J < R.length; ++J) {
      var ae = N.charCodeAt(J);
      R.write_shift(1, ae >= 128 ? 95 : ae);
    }
    return R.write_shift(1, 0), R;
  }
  function g(S, z, N) {
    var R = S.l + z, J = f(S, z, N);
    if (J[1].t = "s", N.vers == 20768) {
      var ae = S.read_shift(1);
      return J[1].v = S.read_shift(ae, "utf8"), J;
    }
    return J[1].v = S.read_shift(R - S.l, "cstr"), J;
  }
  function m(S, z, N) {
    var R = f(S, z, N);
    return R[1].v = S.read_shift(2, "i"), R;
  }
  function p(S, z, N) {
    var R = j(7);
    return R.write_shift(1, d(N)), R.write_shift(2, z), R.write_shift(2, S), R.write_shift(2, N.v, "i"), R;
  }
  function w(S, z, N) {
    var R = f(S, z, N);
    return R[1].v = S.read_shift(8, "f"), R;
  }
  function O(S, z, N) {
    var R = j(13);
    return R.write_shift(1, d(N)), R.write_shift(2, z), R.write_shift(2, S), R.write_shift(8, N.v, "f"), R;
  }
  function y(S, z, N) {
    var R = S.l + z, J = f(S, z, N);
    if (J[1].v = S.read_shift(8, "f"), N.qpro) S.l = R;
    else {
      var ae = S.read_shift(2);
      v(S.slice(S.l, S.l + ae), J), S.l += ae;
    }
    return J;
  }
  function B(S, z, N) {
    var R = z & 32768;
    return z &= -32769, z = (R ? S : 0) + (z >= 8192 ? z - 16384 : z), (R ? "" : "$") + (N ? $e(z) : Be(z));
  }
  var I = {
    31: ["NA", 0],
    // 0x20: ["ERR", 0],
    33: ["ABS", 1],
    34: ["TRUNC", 1],
    35: ["SQRT", 1],
    36: ["LOG", 1],
    37: ["LN", 1],
    38: ["PI", 0],
    39: ["SIN", 1],
    40: ["COS", 1],
    41: ["TAN", 1],
    42: ["ATAN2", 2],
    43: ["ATAN", 1],
    44: ["ASIN", 1],
    45: ["ACOS", 1],
    46: ["EXP", 1],
    47: ["MOD", 2],
    // 0x30
    49: ["ISNA", 1],
    50: ["ISERR", 1],
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    53: ["RAND", 0],
    54: ["DATE", 3],
    // 0x37 NOW
    // 0x38 PMT
    // 0x39 PV
    // 0x3A FV
    // 0x3B IF
    // 0x3C DAY
    // 0x3D MONTH
    // 0x3E YEAR
    63: ["ROUND", 2],
    64: ["TIME", 3],
    // 0x41 HOUR
    // 0x42 MINUTE
    // 0x43 SECOND
    68: ["ISNUMBER", 1],
    69: ["ISTEXT", 1],
    70: ["LEN", 1],
    71: ["VALUE", 1],
    // 0x48: ["FIXED", ?? 1],
    73: ["MID", 3],
    74: ["CHAR", 1],
    // 0x4B
    // 0x4C FIND
    // 0x4D DATEVALUE
    // 0x4E TIMEVALUE
    // 0x4F CELL
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    // 0x55 VLOOKUP
    // 0x56 NPV
    // 0x57 VAR
    // 0x58 STD
    // 0x59 IRR
    // 0x5A HLOOKUP
    // 0x5B DSUM
    // 0x5C DAVERAGE
    // 0x5D DCOUNTA
    // 0x5E DMIN
    // 0x5F DMAX
    // 0x60 DVARP
    // 0x61 DSTDEVP
    // 0x62 INDEX
    // 0x63 COLS
    // 0x64 ROWS
    // 0x65 REPEAT
    102: ["UPPER", 1],
    103: ["LOWER", 1],
    // 0x68 LEFT
    // 0x69 RIGHT
    // 0x6A REPLACE
    107: ["PROPER", 1],
    // 0x6C CELL
    109: ["TRIM", 1],
    // 0x6E CLEAN
    111: ["T", 1]
    // 0x70 V
  }, G = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function v(S, z) {
    Et(S, 0);
    for (var N = [], R = 0, J = "", ae = "", se = "", Ee = ""; S.l < S.length; ) {
      var pe = S[S.l++];
      switch (pe) {
        case 0:
          N.push(S.read_shift(8, "f"));
          break;
        case 1:
          ae = B(z[0].c, S.read_shift(2), !0), J = B(z[0].r, S.read_shift(2), !1), N.push(ae + J);
          break;
        case 2:
          {
            var Oe = B(z[0].c, S.read_shift(2), !0), Se = B(z[0].r, S.read_shift(2), !1);
            ae = B(z[0].c, S.read_shift(2), !0), J = B(z[0].r, S.read_shift(2), !1), N.push(Oe + Se + ":" + ae + J);
          }
          break;
        case 3:
          if (S.l < S.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          N.push("(" + N.pop() + ")");
          break;
        case 5:
          N.push(S.read_shift(2));
          break;
        case 6:
          {
            for (var De = ""; pe = S[S.l++]; ) De += String.fromCharCode(pe);
            N.push('"' + De.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          N.push("-" + N.pop());
          break;
        case 23:
          N.push("+" + N.pop());
          break;
        case 22:
          N.push("NOT(" + N.pop() + ")");
          break;
        case 20:
        case 21:
          Ee = N.pop(), se = N.pop(), N.push(["AND", "OR"][pe - 20] + "(" + se + "," + Ee + ")");
          break;
        default:
          if (pe < 32 && G[pe])
            Ee = N.pop(), se = N.pop(), N.push(se + G[pe] + Ee);
          else if (I[pe]) {
            if (R = I[pe][1], R == 69 && (R = S[S.l++]), R > N.length) {
              console.error("WK1 bad formula parse 0x" + pe.toString(16) + ":|" + N.join("|") + "|");
              return;
            }
            var Me = N.slice(-R);
            N.length -= R, N.push(I[pe][0] + "(" + Me.join(",") + ")");
          } else return pe <= 7 ? console.error("WK1 invalid opcode " + pe.toString(16)) : pe <= 24 ? console.error("WK1 unsupported op " + pe.toString(16)) : pe <= 30 ? console.error("WK1 invalid opcode " + pe.toString(16)) : pe <= 115 ? console.error("WK1 unsupported function opcode " + pe.toString(16)) : console.error("WK1 unrecognized opcode " + pe.toString(16));
      }
    }
    N.length == 1 ? z[1].f = "" + N[0] : console.error("WK1 bad formula parse |" + N.join("|") + "|");
  }
  function k(S) {
    var z = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return z[0].r = S.read_shift(2), z[3] = S[S.l++], z[0].c = S[S.l++], z;
  }
  function A(S, z) {
    var N = k(S);
    return N[1].t = "s", N[1].v = S.read_shift(z - 4, "cstr"), N;
  }
  function D(S, z, N, R) {
    var J = j(6 + R.length);
    J.write_shift(2, S), J.write_shift(1, N), J.write_shift(1, z), J.write_shift(1, 39);
    for (var ae = 0; ae < R.length; ++ae) {
      var se = R.charCodeAt(ae);
      J.write_shift(1, se >= 128 ? 95 : se);
    }
    return J.write_shift(1, 0), J;
  }
  function L(S, z) {
    var N = k(S);
    N[1].v = S.read_shift(2);
    var R = N[1].v >> 1;
    if (N[1].v & 1)
      switch (R & 7) {
        case 0:
          R = (R >> 3) * 5e3;
          break;
        case 1:
          R = (R >> 3) * 500;
          break;
        case 2:
          R = (R >> 3) / 20;
          break;
        case 3:
          R = (R >> 3) / 200;
          break;
        case 4:
          R = (R >> 3) / 2e3;
          break;
        case 5:
          R = (R >> 3) / 2e4;
          break;
        case 6:
          R = (R >> 3) / 16;
          break;
        case 7:
          R = (R >> 3) / 64;
          break;
      }
    return N[1].v = R, N;
  }
  function P(S, z) {
    var N = k(S), R = S.read_shift(4), J = S.read_shift(4), ae = S.read_shift(2);
    if (ae == 65535)
      return R === 0 && J === 3221225472 ? (N[1].t = "e", N[1].v = 15) : R === 0 && J === 3489660928 ? (N[1].t = "e", N[1].v = 42) : N[1].v = 0, N;
    var se = ae & 32768;
    return ae = (ae & 32767) - 16446, N[1].v = (1 - se * 2) * (J * Math.pow(2, ae + 32) + R * Math.pow(2, ae)), N;
  }
  function M(S, z, N, R) {
    var J = j(14);
    if (J.write_shift(2, S), J.write_shift(1, N), J.write_shift(1, z), R == 0)
      return J.write_shift(4, 0), J.write_shift(4, 0), J.write_shift(2, 65535), J;
    var ae = 0, se = 0, Ee = 0, pe = 0;
    return R < 0 && (ae = 1, R = -R), se = Math.log2(R) | 0, R /= Math.pow(2, se - 31), pe = R >>> 0, (pe & 2147483648) == 0 && (R /= 2, ++se, pe = R >>> 0), R -= pe, pe |= 2147483648, pe >>>= 0, R *= Math.pow(2, 32), Ee = R >>> 0, J.write_shift(4, Ee), J.write_shift(4, pe), se += 16383 + (ae ? 32768 : 0), J.write_shift(2, se), J;
  }
  function V(S, z) {
    var N = P(S);
    return S.l += z - 14, N;
  }
  function F(S, z) {
    var N = k(S), R = S.read_shift(4);
    return N[1].v = R >> 6, N;
  }
  function U(S, z) {
    var N = k(S), R = S.read_shift(8, "f");
    return N[1].v = R, N;
  }
  function K(S, z) {
    var N = U(S);
    return S.l += z - 12, N;
  }
  function Z(S, z) {
    return S[S.l + z - 1] == 0 ? S.read_shift(z, "cstr") : "";
  }
  function me(S, z) {
    var N = S[S.l++];
    N > z - 1 && (N = z - 1);
    for (var R = ""; R.length < N; ) R += String.fromCharCode(S[S.l++]);
    return R;
  }
  function te(S, z, N) {
    if (!(!N.qpro || z < 21)) {
      var R = S.read_shift(1);
      S.l += 17, S.l += 1, S.l += 2;
      var J = S.read_shift(z - 21, "cstr");
      return [R, J];
    }
  }
  function ve(S, z) {
    for (var N = {}, R = S.l + z; S.l < R; ) {
      var J = S.read_shift(2);
      if (J == 14e3) {
        for (N[J] = [0, ""], N[J][0] = S.read_shift(2); S[S.l]; )
          N[J][1] += String.fromCharCode(S[S.l]), S.l++;
        S.l++;
      }
    }
    return N;
  }
  function ne(S, z) {
    var N = j(5 + S.length);
    N.write_shift(2, 14e3), N.write_shift(2, z);
    for (var R = 0; R < S.length; ++R) {
      var J = S.charCodeAt(R);
      N[N.l++] = J > 127 ? 95 : J;
    }
    return N[N.l++] = 0, N;
  }
  var Q = {
    0: { n: "BOF", f: Un },
    1: { n: "EOF" },
    2: { n: "CALCMODE" },
    3: { n: "CALCORDER" },
    4: { n: "SPLIT" },
    5: { n: "SYNC" },
    6: { n: "RANGE", f: l },
    7: { n: "WINDOW1" },
    8: { n: "COLW1" },
    9: { n: "WINTWO" },
    10: { n: "COLW2" },
    11: { n: "NAME" },
    12: { n: "BLANK" },
    13: { n: "INTEGER", f: m },
    14: { n: "NUMBER", f: w },
    15: { n: "LABEL", f: u },
    16: { n: "FORMULA", f: y },
    24: { n: "TABLE" },
    25: { n: "ORANGE" },
    26: { n: "PRANGE" },
    27: { n: "SRANGE" },
    28: { n: "FRANGE" },
    29: { n: "KRANGE1" },
    32: { n: "HRANGE" },
    35: { n: "KRANGE2" },
    36: { n: "PROTEC" },
    37: { n: "FOOTER" },
    38: { n: "HEADER" },
    39: { n: "SETUP" },
    40: { n: "MARGINS" },
    41: { n: "LABELFMT" },
    42: { n: "TITLES" },
    43: { n: "SHEETJS" },
    45: { n: "GRAPH" },
    46: { n: "NGRAPH" },
    47: { n: "CALCCOUNT" },
    48: { n: "UNFORMATTED" },
    49: { n: "CURSORW12" },
    50: { n: "WINDOW" },
    51: { n: "STRING", f: g },
    55: { n: "PASSWORD" },
    56: { n: "LOCKED" },
    60: { n: "QUERY" },
    61: { n: "QUERYNAME" },
    62: { n: "PRINT" },
    63: { n: "PRINTNAME" },
    64: { n: "GRAPH2" },
    65: { n: "GRAPHNAME" },
    66: { n: "ZOOM" },
    67: { n: "SYMSPLIT" },
    68: { n: "NSROWS" },
    69: { n: "NSCOLS" },
    70: { n: "RULER" },
    71: { n: "NNAME" },
    72: { n: "ACOMM" },
    73: { n: "AMACRO" },
    74: { n: "PARSE" },
    // 0x0064
    102: { n: "PRANGES??" },
    103: { n: "RRANGES??" },
    104: { n: "FNAME??" },
    105: { n: "MRANGES??" },
    // 0x0096
    // 0x0099
    // 0x009A
    // 0x009B
    // 0x009C
    // 0x00C0
    // 0x00C7
    // 0x00C9
    204: { n: "SHEETNAMECS", f: Z },
    // 0x00CD
    222: { n: "SHEETNAMELP", f: me },
    255: { n: "BOF", f: Un },
    21506: { n: "WKSNF", f: Un },
    65535: { n: "" }
  }, ue = {
    0: { n: "BOF" },
    1: { n: "EOF" },
    2: { n: "PASSWORD" },
    3: { n: "CALCSET" },
    4: { n: "WINDOWSET" },
    5: { n: "SHEETCELLPTR" },
    6: { n: "SHEETLAYOUT" },
    7: { n: "COLUMNWIDTH" },
    8: { n: "HIDDENCOLUMN" },
    9: { n: "USERRANGE" },
    10: { n: "SYSTEMRANGE" },
    11: { n: "ZEROFORCE" },
    12: { n: "SORTKEYDIR" },
    13: { n: "FILESEAL" },
    14: { n: "DATAFILLNUMS" },
    15: { n: "PRINTMAIN" },
    16: { n: "PRINTSTRING" },
    17: { n: "GRAPHMAIN" },
    18: { n: "GRAPHSTRING" },
    19: { n: "??" },
    20: { n: "ERRCELL" },
    21: { n: "NACELL" },
    22: { n: "LABEL16", f: A },
    23: { n: "NUMBER17", f: P },
    24: { n: "NUMBER18", f: L },
    25: { n: "FORMULA19", f: V },
    26: { n: "FORMULA1A" },
    27: { n: "XFORMAT", f: ve },
    28: { n: "DTLABELMISC" },
    29: { n: "DTLABELCELL" },
    30: { n: "GRAPHWINDOW" },
    31: { n: "CPA" },
    32: { n: "LPLAUTO" },
    33: { n: "QUERY" },
    34: { n: "HIDDENSHEET" },
    35: { n: "??" },
    37: { n: "NUMBER25", f: F },
    38: { n: "??" },
    39: { n: "NUMBER27", f: U },
    40: { n: "FORMULA28", f: K },
    142: { n: "??" },
    147: { n: "??" },
    150: { n: "??" },
    151: { n: "??" },
    152: { n: "??" },
    153: { n: "??" },
    154: { n: "??" },
    155: { n: "??" },
    156: { n: "??" },
    163: { n: "??" },
    174: { n: "??" },
    175: { n: "??" },
    176: { n: "??" },
    177: { n: "??" },
    184: { n: "??" },
    185: { n: "??" },
    186: { n: "??" },
    187: { n: "??" },
    188: { n: "??" },
    195: { n: "??" },
    201: { n: "??" },
    204: { n: "SHEETNAMECS", f: Z },
    205: { n: "??" },
    206: { n: "??" },
    207: { n: "??" },
    208: { n: "??" },
    256: { n: "??" },
    259: { n: "??" },
    260: { n: "??" },
    261: { n: "??" },
    262: { n: "??" },
    263: { n: "??" },
    265: { n: "??" },
    266: { n: "??" },
    267: { n: "??" },
    268: { n: "??" },
    270: { n: "??" },
    271: { n: "??" },
    384: { n: "??" },
    389: { n: "??" },
    390: { n: "??" },
    393: { n: "??" },
    396: { n: "??" },
    512: { n: "??" },
    514: { n: "??" },
    513: { n: "??" },
    516: { n: "??" },
    517: { n: "??" },
    640: { n: "??" },
    641: { n: "??" },
    642: { n: "??" },
    643: { n: "??" },
    644: { n: "??" },
    645: { n: "??" },
    646: { n: "??" },
    647: { n: "??" },
    648: { n: "??" },
    658: { n: "??" },
    659: { n: "??" },
    660: { n: "??" },
    661: { n: "??" },
    662: { n: "??" },
    665: { n: "??" },
    666: { n: "??" },
    768: { n: "??" },
    772: { n: "??" },
    1537: { n: "SHEETINFOQP", f: te },
    1600: { n: "??" },
    1602: { n: "??" },
    1793: { n: "??" },
    1794: { n: "??" },
    1795: { n: "??" },
    1796: { n: "??" },
    1920: { n: "??" },
    2048: { n: "??" },
    2049: { n: "??" },
    2052: { n: "??" },
    2688: { n: "??" },
    10998: { n: "??" },
    12849: { n: "??" },
    28233: { n: "??" },
    28484: { n: "??" },
    65535: { n: "" }
  }, ye = {
    5: "dd-mmm-yy",
    6: "dd-mmm",
    7: "mmm-yy",
    8: "mm/dd/yy",
    // Long Date Intl
    10: "hh:mm:ss AM/PM",
    11: "hh:mm AM/PM",
    14: "dd-mmm-yyyy",
    15: "mmm-yyyy",
    /* It is suspected that the the low nybble specifies decimal places */
    34: "0.00",
    50: "0.00;[Red]0.00",
    66: "0.00;(0.00)",
    82: "0.00;[Red](0.00)",
    162: '"$"#,##0.00;\\("$"#,##0.00\\)',
    288: "0%",
    304: "0E+00",
    320: "# ?/?"
  };
  function xe(S) {
    var z = S.read_shift(2), N = S.read_shift(1);
    if (N != 0) throw "unsupported QPW string type " + N.toString(16);
    return S.read_shift(z, "sbcs-cont");
  }
  function ke(S, z) {
    Et(S, 0);
    var N = z || {}, R = {};
    N.dense && (R["!data"] = []);
    var J = [], ae = "", se = { s: { r: -1, c: -1 }, e: { r: -1, c: -1 } }, Ee = 0, pe = 0, Oe = 0, Se = 0, De = { SheetNames: [], Sheets: {} }, Me = [];
    e: for (; S.l < S.length; ) {
      var at = S.read_shift(2), qe = S.read_shift(2), ge = S.slice(S.l, S.l + qe);
      switch (Et(ge, 0), at) {
        case 1:
          if (ge.read_shift(4) != 962023505) throw "Bad QPW9 BOF!";
          break;
        case 2:
          break e;
        case 8:
          break;
        // TODO: this is tied to custom number formats
        case 10:
          for (var We = ge.read_shift(4), he = (ge.length - ge.l) / We | 0, or = 0; or < We; ++or) {
            var xt = ge.l + he, ut = {};
            ge.l += 2, ut.numFmtId = ge.read_shift(2), ye[ut.numFmtId] && (ut.z = ye[ut.numFmtId]), ge.l = xt, Me.push(ut);
          }
          break;
        /* TODO: The behavior here should be consistent with Numbers: QP Notebook ~ .TN.SheetArchive, QP Sheet ~ .TST.TableModelArchive */
        case 1025:
          break;
        case 1026:
          break;
        case 1031:
          for (ge.l += 12; ge.l < ge.length; )
            Ee = ge.read_shift(2), pe = ge.read_shift(1), J.push(ge.read_shift(Ee, "cstr"));
          break;
        case 1032:
          break;
        case 1537:
          {
            var _n = ge.read_shift(2);
            R = {}, N.dense && (R["!data"] = []), se.s.c = ge.read_shift(2), se.e.c = ge.read_shift(2), se.s.r = ge.read_shift(4), se.e.r = ge.read_shift(4), ge.l += 4, ge.l + 2 < ge.length && (Ee = ge.read_shift(2), pe = ge.read_shift(1), ae = Ee == 0 ? "" : ge.read_shift(Ee, "cstr")), ae || (ae = $e(_n));
          }
          break;
        case 1538:
          {
            if (se.s.c > 255 || se.s.r > 999999) break;
            se.e.c < se.s.c && (se.e.c = se.s.c), se.e.r < se.s.r && (se.e.r = se.s.r), R["!ref"] = rt(se), Ci(De, R, ae);
          }
          break;
        case 2561:
          Oe = ge.read_shift(2), se.e.c < Oe && (se.e.c = Oe), se.s.c > Oe && (se.s.c = Oe), Se = ge.read_shift(4), se.s.r > Se && (se.s.r = Se), Se = ge.read_shift(4), se.e.r < Se && (se.e.r = Se);
          break;
        case 3073:
          {
            Se = ge.read_shift(4), Ee = ge.read_shift(4), se.s.r > Se && (se.s.r = Se), se.e.r < Se + Ee - 1 && (se.e.r = Se + Ee - 1);
            for (var Yr = $e(Oe); ge.l < ge.length; ) {
              var Ie = { t: "z" }, wt = ge.read_shift(1), dr = -1;
              wt & 128 && (dr = ge.read_shift(2));
              var On = wt & 64 ? ge.read_shift(2) - 1 : 0;
              switch (wt & 31) {
                case 0:
                  break;
                case 1:
                  break;
                case 2:
                  Ie = { t: "n", v: ge.read_shift(2) };
                  break;
                case 3:
                  Ie = { t: "n", v: ge.read_shift(2, "i") };
                  break;
                case 4:
                  Ie = { t: "n", v: Ei(ge) };
                  break;
                case 5:
                  Ie = { t: "n", v: ge.read_shift(8, "f") };
                  break;
                case 7:
                  Ie = { t: "s", v: J[pe = ge.read_shift(4) - 1] };
                  break;
                case 8:
                  Ie = { t: "n", v: ge.read_shift(8, "f") }, ge.l += 2, ge.l += 4, isNaN(Ie.v) && (Ie = { t: "e", v: 15 });
                  break;
                default:
                  throw "Unrecognized QPW cell type " + (wt & 31);
              }
              dr != -1 && (Me[dr - 1] || {}).z && (Ie.z = Me[dr - 1].z);
              var sr = 0;
              if (wt & 32) switch (wt & 31) {
                case 2:
                  sr = ge.read_shift(2);
                  break;
                case 3:
                  sr = ge.read_shift(2, "i");
                  break;
                case 7:
                  sr = ge.read_shift(2);
                  break;
                default:
                  throw "Unsupported delta for QPW cell type " + (wt & 31);
              }
              if (!(!N.sheetStubs && Ie.t == "z")) {
                var mr = bt(Ie);
                Ie.t == "n" && Ie.z && Er(Ie.z) && N.cellDates && (mr.v = Ir(Ie.v), mr.t = typeof mr.v == "number" ? "n" : "d"), R["!data"] != null ? (R["!data"][Se] || (R["!data"][Se] = []), R["!data"][Se][Oe] = mr) : R[Yr + Be(Se)] = mr;
              }
              for (++Se, --Ee; On-- > 0 && Ee >= 0; ) {
                if (wt & 32) switch (wt & 31) {
                  case 2:
                    Ie = { t: "n", v: Ie.v + sr & 65535 };
                    break;
                  case 3:
                    Ie = { t: "n", v: Ie.v + sr & 65535 }, Ie.v > 32767 && (Ie.v -= 65536);
                    break;
                  case 7:
                    Ie = { t: "s", v: J[pe = pe + sr >>> 0] };
                    break;
                  default:
                    throw "Cannot apply delta for QPW cell type " + (wt & 31);
                }
                else switch (wt & 31) {
                  case 1:
                    Ie = { t: "z" };
                    break;
                  case 2:
                    Ie = { t: "n", v: ge.read_shift(2) };
                    break;
                  case 7:
                    Ie = { t: "s", v: J[pe = ge.read_shift(4) - 1] };
                    break;
                  default:
                    throw "Cannot apply repeat for QPW cell type " + (wt & 31);
                }
                !N.sheetStubs && Ie.t == "z" || (R["!data"] != null ? (R["!data"][Se] || (R["!data"][Se] = []), R["!data"][Se][Oe] = Ie) : R[Yr + Be(Se)] = Ie), ++Se, --Ee;
              }
            }
          }
          break;
        case 3074:
          {
            Oe = ge.read_shift(2), Se = ge.read_shift(4);
            var Jr = xe(ge);
            R["!data"] != null ? (R["!data"][Se] || (R["!data"][Se] = []), R["!data"][Se][Oe] = { t: "s", v: Jr }) : R[$e(Oe) + Be(Se)] = { t: "s", v: Jr };
          }
          break;
      }
      S.l += qe;
    }
    return De;
  }
  return {
    sheet_to_wk1: a,
    book_to_wk3: o,
    to_workbook: t
  };
})(), a0 = /^\s|\s$|[\t\n\r]/;
function i0(e, t) {
  if (!t.bookSST) return "";
  var r = [nt];
  r[r.length] = oe("sst", null, {
    xmlns: Vr[0],
    count: e.Count,
    uniqueCount: e.Unique
  });
  for (var n = 0; n != e.length; ++n)
    if (e[n] != null) {
      var a = e[n], o = "<si>";
      a.r ? o += a.r : (o += "<t", a.t || (a.t = ""), typeof a.t != "string" && (a.t = String(a.t)), a.t.match(a0) && (o += ' xml:space="preserve"'), o += ">" + Ce(a.t) + "</t>"), o += "</si>", r[r.length] = o;
    }
  return r.length > 2 && (r[r.length] = "</sst>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function o0(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function s0(e, t) {
  return t || (t = j(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t;
}
var l0 = Ku;
function c0(e) {
  var t = gt();
  ee(t, 159, s0(e));
  for (var r = 0; r < e.length; ++r) ee(t, 19, l0(e[r]));
  return ee(
    t,
    160
    /* BrtEndSst */
  ), t.end();
}
function f0(e) {
  for (var t = [], r = e.split(""), n = 0; n < r.length; ++n) t[n] = r[n].charCodeAt(0);
  return t;
}
function Zs(e) {
  var t = 0, r, n = f0(e), a = n.length + 1, o, i, s, l, c;
  for (r = yr(a), r[0] = n.length, o = 1; o != a; ++o) r[o] = n[o - 1];
  for (o = a - 1; o >= 0; --o)
    i = r[o], s = (t & 16384) === 0 ? 0 : 1, l = t << 1 & 32767, c = s | l, t = c ^ i;
  return t ^ 52811;
}
function u0(e, t) {
  var r = ["{\\rtf1\\ansi"];
  if (!e["!ref"])
    return r[0] + "}";
  for (var n = He(e["!ref"]), a, o = e["!data"] != null, i = [], s = n.s.r; s <= n.e.r; ++s) {
    r.push("\\trowd\\trautofit1");
    for (var l = n.s.c; l <= n.e.c; ++l)
      r.push("\\cellx" + (l + 1));
    for (r.push("\\pard\\intbl"), o && (i = e["!data"][s] || []), l = n.s.c; l <= n.e.c; ++l) {
      var c = Je({ r: s, c: l });
      if (a = o ? i[l] : e[c], !a || a.v == null && (!a.f || a.F)) {
        r.push(" \\cell");
        continue;
      }
      r.push(" " + (a.w || (ir(a), a.w) || "").replace(/[\r\n]/g, "\\par ")), r.push("\\cell");
    }
    r.push("\\pard\\intbl\\row");
  }
  return r.join("") + "}";
}
function No(e) {
  for (var t = 0, r = 1; t != 3; ++t) r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
var h0 = 6, nr = h0;
function ta(e) {
  return Math.floor((e + Math.round(128 / nr) / 256) * nr);
}
function ra(e) {
  return Math.floor((e - 5) / nr * 100 + 0.5) / 100;
}
function ti(e) {
  return Math.round((e * nr + 5) / nr * 256) / 256;
}
function ki(e) {
  e.width ? (e.wpx = ta(e.width), e.wch = ra(e.wpx), e.MDW = nr) : e.wpx ? (e.wch = ra(e.wpx), e.width = ti(e.wch), e.MDW = nr) : typeof e.wch == "number" && (e.width = ti(e.wch), e.wpx = ta(e.width), e.MDW = nr), e.customWidth && delete e.customWidth;
}
var d0 = 96, el = d0;
function na(e) {
  return e * 96 / el;
}
function tl(e) {
  return e * el / 96;
}
function m0(e) {
  var t = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(r) {
    for (var n = r[0]; n <= r[1]; ++n) e[n] != null && (t[t.length] = oe("numFmt", null, { numFmtId: n, formatCode: Ce(e[n]) }));
  }), t.length === 1 ? "" : (t[t.length] = "</numFmts>", t[0] = oe("numFmts", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function p0(e) {
  var t = [];
  return t[t.length] = oe("cellXfs", null), e.forEach(function(r) {
    t[t.length] = oe("xf", null, r);
  }), t[t.length] = "</cellXfs>", t.length === 2 ? "" : (t[0] = oe("cellXfs", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function g0(e, t) {
  var r = [nt, oe("styleSheet", null, {
    xmlns: Vr[0],
    "xmlns:vt": ot.vt
  })], n;
  return e.SSF && (n = m0(e.SSF)) != null && (r[r.length] = n), r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (n = p0(t.cellXfs)) && (r[r.length] = n), r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', r[r.length] = '<dxfs count="0"/>', r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', r.length > 2 && (r[r.length] = "</styleSheet>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function v0(e, t) {
  var r = e.read_shift(2), n = vt(e);
  return [r, n];
}
function b0(e, t, r) {
  r || (r = j(6 + 4 * t.length)), r.write_shift(2, e), it(t, r);
  var n = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), n;
}
function w0(e, t, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var a = eh(e);
  a.fItalic && (n.italic = 1), a.fCondense && (n.condense = 1), a.fExtend && (n.extend = 1), a.fShadow && (n.shadow = 1), a.fOutline && (n.outline = 1), a.fStrikeout && (n.strike = 1);
  var o = e.read_shift(2);
  switch (o === 700 && (n.bold = 1), e.read_shift(2)) {
    /* case 0: out.vertAlign = "baseline"; break; */
    case 1:
      n.vertAlign = "superscript";
      break;
    case 2:
      n.vertAlign = "subscript";
      break;
  }
  var i = e.read_shift(1);
  i != 0 && (n.underline = i);
  var s = e.read_shift(1);
  s > 0 && (n.family = s);
  var l = e.read_shift(1);
  switch (l > 0 && (n.charset = l), e.l++, n.color = Zu(e), e.read_shift(1)) {
    /* case 0: out.scheme = "none": break; */
    case 1:
      n.scheme = "major";
      break;
    case 2:
      n.scheme = "minor";
      break;
  }
  return n.name = vt(e), n;
}
function y0(e, t) {
  t || (t = j(153)), t.write_shift(2, e.sz * 20), th(e, t), t.write_shift(2, e.bold ? 700 : 400);
  var r = 0;
  e.vertAlign == "superscript" ? r = 1 : e.vertAlign == "subscript" && (r = 2), t.write_shift(2, r), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), Zn(e.color, t);
  var n = 0;
  return n = 2, t.write_shift(1, n), it(e.name, t), t.length > t.l ? t.slice(0, t.l) : t;
}
var T0 = [
  "none",
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
], Pa, E0 = Yt;
function Lo(e, t) {
  t || (t = j(84)), Pa || (Pa = ui(T0));
  var r = Pa[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var n = 0;
  if (r != 40)
    for (Zn({ auto: 1 }, t), Zn({ auto: 1 }, t); n < 12; ++n) t.write_shift(4, 0);
  else {
    for (; n < 4; ++n) t.write_shift(4, 0);
    for (; n < 12; ++n) t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function S0(e, t) {
  var r = e.l + t, n = e.read_shift(2), a = e.read_shift(2);
  return e.l = r, { ixfe: n, numFmtId: a };
}
function rl(e, t, r) {
  r || (r = j(16)), r.write_shift(2, t || 0), r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  var n = 0;
  return r.write_shift(1, n), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r;
}
function tn(e, t) {
  return t || (t = j(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var k0 = Yt;
function x0(e, t) {
  return t || (t = j(51)), t.write_shift(1, 0), tn(null, t), tn(null, t), tn(null, t), tn(null, t), tn(null, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function _0(e, t) {
  return t || (t = j(52)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, 0), t.write_shift(1, 0), bn(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function O0(e, t, r) {
  var n = j(2052);
  return n.write_shift(4, e), bn(t, n), bn(r, n), n.length > n.l ? n.slice(0, n.l) : n;
}
function A0(e, t) {
  if (t) {
    var r = 0;
    [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(n) {
      for (var a = n[0]; a <= n[1]; ++a) t[a] != null && ++r;
    }), r != 0 && (ee(e, 615, Bt(r)), [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(n) {
      for (var a = n[0]; a <= n[1]; ++a) t[a] != null && ee(e, 44, b0(a, t[a]));
    }), ee(
      e,
      616
      /* BrtEndFmts */
    ));
  }
}
function C0(e) {
  var t = 1;
  ee(e, 611, Bt(t)), ee(e, 43, y0({
    sz: 12,
    color: { theme: 1 },
    name: "Calibri",
    family: 2
  })), ee(
    e,
    612
    /* BrtEndFonts */
  );
}
function D0(e) {
  var t = 2;
  ee(e, 603, Bt(t)), ee(e, 45, Lo({ patternType: "none" })), ee(e, 45, Lo({ patternType: "gray125" })), ee(
    e,
    604
    /* BrtEndFills */
  );
}
function R0(e) {
  var t = 1;
  ee(e, 613, Bt(t)), ee(e, 46, x0()), ee(
    e,
    614
    /* BrtEndBorders */
  );
}
function N0(e) {
  var t = 1;
  ee(e, 626, Bt(t)), ee(e, 47, rl({
    numFmtId: 0
  }, 65535)), ee(
    e,
    627
    /* BrtEndCellStyleXFs */
  );
}
function L0(e, t) {
  ee(e, 617, Bt(t.length)), t.forEach(function(r) {
    ee(e, 47, rl(r, 0));
  }), ee(
    e,
    618
    /* BrtEndCellXFs */
  );
}
function M0(e) {
  var t = 1;
  ee(e, 619, Bt(t)), ee(e, 48, _0({
    xfId: 0,
    name: "Normal"
  })), ee(
    e,
    620
    /* BrtEndStyles */
  );
}
function I0(e) {
  var t = 0;
  ee(e, 505, Bt(t)), ee(
    e,
    506
    /* BrtEndDXFs */
  );
}
function P0(e) {
  var t = 0;
  ee(e, 508, O0(t, "TableStyleMedium9", "PivotStyleMedium4")), ee(
    e,
    509
    /* BrtEndTableStyles */
  );
}
function F0(e, t) {
  var r = gt();
  return ee(
    r,
    278
    /* BrtBeginStyleSheet */
  ), A0(r, e.SSF), C0(r), D0(r), R0(r), N0(r), L0(r, t.cellXfs), M0(r), I0(r), P0(r), ee(
    r,
    279
    /* BrtEndStyleSheet */
  ), r.end();
}
function nl(e, t) {
  if (t && t.themeXLSX) return t.themeXLSX;
  if (e && typeof e.raw == "string") return e.raw;
  var r = [nt];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function U0(e, t) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: vt(e)
  };
}
function $0(e) {
  var t = j(12 + 2 * e.name.length);
  return t.write_shift(4, e.flags), t.write_shift(4, e.version), it(e.name, t), t.slice(0, t.l);
}
function B0(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function z0(e) {
  var t = j(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function W0(e, t) {
  var r = j(8 + 2 * t.length);
  return r.write_shift(4, e), it(t, r), r.slice(0, r.l);
}
function V0(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function H0(e, t) {
  var r = j(8);
  return r.write_shift(4, e), r.write_shift(4, 1), r;
}
function j0() {
  var e = gt();
  return ee(e, 332), ee(e, 334, Bt(1)), ee(e, 335, $0({
    name: "XLDAPR",
    version: 12e4,
    flags: 3496657072
  })), ee(e, 336), ee(e, 339, W0(1, "XLDAPR")), ee(e, 52), ee(e, 35, Bt(514)), ee(e, 4096, Bt(0)), ee(e, 4097, Pt(1)), ee(e, 36), ee(e, 53), ee(e, 340), ee(e, 337, H0(1)), ee(e, 51, z0([[1, 0]])), ee(e, 338), ee(e, 333), e.end();
}
function G0() {
  var e = [nt];
  return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("");
}
function K0(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = Je(r);
  var n = e.read_shift(1);
  return n & 2 && (t.l = "1"), n & 8 && (t.a = "1"), t;
}
function al(e, t, r) {
  var n = [21600, 21600], a = ["m0,0l0", n[1], n[0], n[1], n[0], "0xe"].join(","), o = [
    oe("xml", null, { "xmlns:v": Rt.v, "xmlns:o": Rt.o, "xmlns:x": Rt.x, "xmlns:mv": Rt.mv }).replace(/\/>/, ">"),
    oe("o:shapelayout", oe("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" })
  ], i = 65536 * e, s = t || [];
  return s.length > 0 && o.push(oe("v:shapetype", [
    oe("v:stroke", null, { joinstyle: "miter" }),
    oe("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })
  ].join(""), { id: "_x0000_t202", coordsize: n.join(","), "o:spt": 202, path: a })), s.forEach(function(l) {
    ++i, o.push(Y0(l, i));
  }), o.push("</xml>"), o.join("");
}
function Y0(e, t, r) {
  var n = Ke(e[0]), a = (
    /*::(*/
    { color2: "#BEFF82", type: "gradient" }
  );
  a.type == "gradient" && (a.angle = "-180");
  var o = a.type == "gradient" ? oe("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, i = oe("v:fill", o, a), s = { on: "t", obscured: "t" };
  return [
    "<v:shape" + pn({
      id: "_x0000_s" + t,
      type: "#_x0000_t202",
      style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""),
      fillcolor: "#ECFAD4",
      strokecolor: "#edeaa1"
    }) + ">",
    i,
    oe("v:shadow", null, s),
    oe("v:path", null, { "o:connecttype": "none" }),
    '<v:textbox><div style="text-align:left"></div></v:textbox>',
    '<x:ClientData ObjectType="Note">',
    "<x:MoveWithCells/>",
    "<x:SizeWithCells/>",
    /* Part 4 19.4.2.3 Anchor (Anchor) */
    lt("x:Anchor", [n.c + 1, 0, n.r + 1, 0, n.c + 3, 20, n.r + 5, 20].join(",")),
    lt("x:AutoFill", "False"),
    lt("x:Row", String(n.r)),
    lt("x:Column", String(n.c)),
    e[1].hidden ? "" : "<x:Visible/>",
    "</x:ClientData>",
    "</v:shape>"
  ].join("");
}
function J0(e) {
  var t = [nt, oe("comments", null, { xmlns: Vr[0] })], r = [];
  return t.push("<authors>"), e.forEach(function(n) {
    n[1].forEach(function(a) {
      var o = Ce(a.a);
      r.indexOf(o) == -1 && (r.push(o), t.push("<author>" + o + "</author>")), a.T && a.ID && r.indexOf("tc=" + a.ID) == -1 && (r.push("tc=" + a.ID), t.push("<author>tc=" + a.ID + "</author>"));
    });
  }), r.length == 0 && (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")), t.push("</authors>"), t.push("<commentList>"), e.forEach(function(n) {
    var a = 0, o = [], i = 0;
    if (n[1][0] && n[1][0].T && n[1][0].ID && (a = r.indexOf("tc=" + n[1][0].ID)), n[1].forEach(function(c) {
      c.a && (a = r.indexOf(Ce(c.a))), c.T && ++i, o.push(c.t == null ? "" : Ce(c.t));
    }), i === 0)
      n[1].forEach(function(c) {
        t.push('<comment ref="' + n[0] + '" authorId="' + r.indexOf(Ce(c.a)) + '"><text>'), t.push(lt("t", c.t == null ? "" : Ce(c.t))), t.push("</text></comment>");
      });
    else {
      n[1][0] && n[1][0].T && n[1][0].ID && (a = r.indexOf("tc=" + n[1][0].ID)), t.push('<comment ref="' + n[0] + '" authorId="' + a + '"><text>');
      for (var s = `Comment:
    ` + o[0] + `
`, l = 1; l < o.length; ++l) s += `Reply:
    ` + o[l] + `
`;
      t.push(lt("t", Ce(s))), t.push("</text></comment>");
    }
  }), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function il(e, t, r) {
  var n = [nt, oe("ThreadedComments", null, { xmlns: ot.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(a) {
    var o = "";
    (a[1] || []).forEach(function(i, s) {
      if (!i.T) {
        delete i.ID;
        return;
      }
      i.a && t.indexOf(i.a) == -1 && t.push(i.a);
      var l = {
        ref: a[0],
        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + r.tcid++).slice(-12) + "}"
      };
      s == 0 ? o = l.id : l.parentId = o, i.ID = l.id, i.a && (l.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + t.indexOf(i.a)).slice(-12) + "}"), n.push(oe("threadedComment", lt("text", i.t || ""), l));
    });
  }), n.push("</ThreadedComments>"), n.join("");
}
function ol(e) {
  var t = [nt, oe("personList", null, {
    xmlns: ot.TCMNT,
    "xmlns:x": Vr[0]
  }).replace(/[\/]>/, ">")];
  return e.forEach(function(r, n) {
    t.push(oe("person", null, {
      displayName: r,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + n).slice(-12) + "}",
      userId: r,
      providerId: "None"
    }));
  }), t.push("</personList>"), t.join("");
}
function X0(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = Ar(e);
  return t.rfx = r.s, t.ref = Je(r.s), e.l += 16, t;
}
function q0(e, t) {
  return t == null && (t = j(36)), t.write_shift(4, e[1].iauthor), Gr(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var Q0 = vt;
function Mo(e) {
  return it(e.slice(0, 54));
}
function Z0(e) {
  var t = gt(), r = [];
  return ee(
    t,
    628
    /* BrtBeginComments */
  ), ee(
    t,
    630
    /* BrtBeginCommentAuthors */
  ), e.forEach(function(n) {
    n[1].forEach(function(a) {
      r.indexOf(a.a) > -1 || (r.push(a.a.slice(0, 54)), ee(t, 632, Mo(a.a)), a.T && a.ID && r.indexOf("tc=" + a.ID) == -1 && (r.push("tc=" + a.ID), ee(t, 632, Mo("tc=" + a.ID))));
    });
  }), ee(
    t,
    631
    /* BrtEndCommentAuthors */
  ), ee(
    t,
    633
    /* BrtBeginCommentList */
  ), e.forEach(function(n) {
    n[1].forEach(function(a) {
      var o = -1;
      a.ID && (o = r.indexOf("tc=" + a.ID)), o == -1 && n[1][0].T && n[1][0].ID && (o = r.indexOf("tc=" + n[1][0].ID)), o == -1 && (o = r.indexOf(a.a)), a.iauthor = o;
      var i = { s: Ke(n[0]), e: Ke(n[0]) };
      ee(t, 635, q0([i, a])), a.t && a.t.length > 0 && ee(t, 637, Ju(a)), ee(
        t,
        636
        /* BrtEndComment */
      ), delete a.iauthor;
    });
  }), ee(
    t,
    634
    /* BrtEndCommentList */
  ), ee(
    t,
    629
    /* BrtEndComments */
  ), t.end();
}
function e1(e, t) {
  t.FullPaths.forEach(function(r, n) {
    if (n != 0) {
      var a = r.replace(/^[\/]*[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      a.slice(-1) !== "/" && ze.utils.cfb_add(e, a, t.FileIndex[n].content);
    }
  });
}
var t1 = ["xlsb", "xlsm", "xlam", "biff8", "xla"], Io = /* @__PURE__ */ (function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, t = { r: 0, c: 0 };
  function r(n, a, o, i) {
    var s = !1, l = !1;
    o.length == 0 ? l = !0 : o.charAt(0) == "[" && (l = !0, o = o.slice(1, -1)), i.length == 0 ? s = !0 : i.charAt(0) == "[" && (s = !0, i = i.slice(1, -1));
    var c = o.length > 0 ? parseInt(o, 10) | 0 : 0, f = i.length > 0 ? parseInt(i, 10) | 0 : 0;
    return s ? f += t.c : --f, l ? c += t.r : --c, a + (s ? "" : "$") + $e(f) + (l ? "" : "$") + Be(c);
  }
  return function(n, a) {
    return t = a, n.replace(e, r);
  };
})(), va = /(^|[^._A-Z0-9])(\$?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])(\$?)(\d{1,7})(?![_.\(A-Za-z0-9])/g;
try {
  va = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
} catch {
}
var ba = /* @__PURE__ */ (function() {
  return function(e, t) {
    return e.replace(va, function(r, n, a, o, i, s) {
      var l = wi(o) - (a ? 0 : t.c), c = bi(s) - (i ? 0 : t.r), f = i == "$" ? c + 1 : c == 0 ? "" : "[" + c + "]", d = a == "$" ? l + 1 : l == 0 ? "" : "[" + l + "]";
      return n + "R" + f + "C" + d;
    });
  };
})();
function r1(e, t) {
  return e.replace(va, function(r, n, a, o, i, s) {
    return n + (a == "$" ? a + o : $e(wi(o) + t.c)) + (i == "$" ? i + s : Be(bi(s) + t.r));
  });
}
function n1(e) {
  return e.length != 1;
}
function Qe(e) {
  e.l += 1;
}
function fr(e, t) {
  var r = e.read_shift(2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function sl(e, t, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return ll(e);
    r.biff == 12 && (n = 4);
  }
  var a = e.read_shift(n), o = e.read_shift(n), i = fr(e), s = fr(e);
  return { s: { r: a, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: o, c: s[0], cRel: s[1], rRel: s[2] } };
}
function ll(e) {
  var t = fr(e), r = fr(e), n = e.read_shift(1), a = e.read_shift(1);
  return { s: { r: t[0], c: n, cRel: t[1], rRel: t[2] }, e: { r: r[0], c: a, cRel: r[1], rRel: r[2] } };
}
function a1(e, t, r) {
  if (r.biff < 8) return ll(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2), a = e.read_shift(r.biff == 12 ? 4 : 2), o = fr(e), i = fr(e);
  return { s: { r: n, c: o[0], cRel: o[1], rRel: o[2] }, e: { r: a, c: i[0], cRel: i[1], rRel: i[2] } };
}
function cl(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return i1(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2), a = fr(e);
  return { r: n, c: a[0], cRel: a[1], rRel: a[2] };
}
function i1(e) {
  var t = fr(e), r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function o1(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function s1(e, t, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5) return l1(e);
  var a = e.read_shift(n >= 12 ? 4 : 2), o = e.read_shift(2), i = (o & 16384) >> 14, s = (o & 32768) >> 15;
  if (o &= 16383, s == 1) for (; a > 524287; ) a -= 1048576;
  if (i == 1) for (; o > 8191; ) o = o - 16384;
  return { r: a, c: o, cRel: i, rRel: s };
}
function l1(e) {
  var t = e.read_shift(2), r = e.read_shift(1), n = (t & 32768) >> 15, a = (t & 16384) >> 14;
  return t &= 16383, n == 1 && t >= 8192 && (t = t - 16384), a == 1 && r >= 128 && (r = r - 256), { r: t, c: r, cRel: a, rRel: n };
}
function c1(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = sl(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, a];
}
function f1(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = e.read_shift(2, "i"), o = 8;
  if (r) switch (r.biff) {
    case 5:
      e.l += 12, o = 6;
      break;
    case 12:
      o = 12;
      break;
  }
  var i = sl(e, o, r);
  return [n, a, i];
}
function u1(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [n];
}
function h1(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = e.read_shift(2), o = 8;
  if (r) switch (r.biff) {
    case 5:
      e.l += 12, o = 6;
      break;
    case 12:
      o = 12;
      break;
  }
  return e.l += o, [n, a];
}
function d1(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = a1(e, t - 1, r);
  return [n, a];
}
function m1(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [n];
}
function Po(e) {
  var t = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [t, r];
}
function p1(e, t, r) {
  e.l += 2;
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), a = [], o = 0; o <= n; ++o) a.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return a;
}
function g1(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function v1(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function b1(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [t, e.read_shift(2)];
}
function w1(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [n];
}
function fl(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return [t, r];
}
function y1(e) {
  return e.read_shift(2), fl(e);
}
function T1(e) {
  return e.read_shift(2), fl(e);
}
function E1(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = cl(e, 0, r);
  return [n, a];
}
function S1(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = s1(e, 0, r);
  return [n, a];
}
function k1(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var o = cl(e, 0, r);
  return [n, a, o];
}
function x1(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [Pd[a], dl[a], n];
}
function _1(e, t, r) {
  var n = e[e.l++], a = e.read_shift(1), o = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : O1(e);
  return [a, (o[0] === 0 ? dl : Id)[o[1]]];
}
function O1(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function A1(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function C1(e, t, r) {
  if (e.l++, r && r.biff == 12) return [e.read_shift(4, "i"), 0];
  var n = e.read_shift(2), a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function D1(e) {
  return e.l++, kt[e.read_shift(1)];
}
function R1(e) {
  return e.l++, e.read_shift(2);
}
function N1(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function L1(e) {
  return e.l++, Kr(e);
}
function M1(e, t, r) {
  return e.l++, Ys(e, t - 1, r);
}
function I1(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12) switch (r[0]) {
    case 2:
      r[0] = 4;
      break;
    /* SerBool */
    case 4:
      r[0] = 16;
      break;
    /* SerErr */
    case 0:
      r[0] = 1;
      break;
    /* SerNum */
    case 1:
      r[0] = 2;
      break;
  }
  switch (r[0]) {
    case 4:
      r[1] = wh(e, 1) ? "TRUE" : "FALSE", t != 12 && (e.l += 7);
      break;
    case 37:
    /* appears to be an alias */
    case 16:
      r[1] = kt[e[e.l]], e.l += t == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = Kr(e);
      break;
    case 2:
      r[1] = Sh(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function P1(e, t, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), a = [], o = 0; o != n; ++o) a.push((r.biff == 12 ? Ar : _h)(e));
  return a;
}
function F1(e, t, r) {
  var n = 0, a = 0;
  r.biff == 12 ? (n = e.read_shift(4), a = e.read_shift(4)) : (a = 1 + e.read_shift(1), n = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--n, --a == 0 && (a = 256));
  for (var o = 0, i = []; o != n && (i[o] = []); ++o)
    for (var s = 0; s != a; ++s) i[o][s] = I1(e, r.biff);
  return i;
}
function U1(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3, a = !r || r.biff >= 8 ? 4 : 2, o = e.read_shift(a);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [n, 0, o];
}
function $1(e, t, r) {
  if (r.biff == 5) return B1(e);
  var n = e.read_shift(1) >>> 5 & 3, a = e.read_shift(2), o = e.read_shift(4);
  return [n, a, o];
}
function B1(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var n = e.read_shift(2);
  return e.l += 12, [t, r, n];
}
function z1(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function W1(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3, a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function V1(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function H1(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = e.read_shift(2), o = 4;
  if (r) switch (r.biff) {
    case 5:
      o = 15;
      break;
    case 12:
      o = 6;
      break;
  }
  return e.l += o, [n, a];
}
var j1 = Yt, G1 = Yt, K1 = Yt;
function xn(e, t, r) {
  return e.l += 2, [o1(e)];
}
function xi(e) {
  return e.l += 6, [];
}
var Y1 = xn, J1 = xi, X1 = xi, q1 = xn;
function ul(e) {
  return e.l += 2, [Un(e), e.read_shift(2) & 1];
}
var Q1 = xn, Z1 = ul, ed = xi, td = xn, rd = xn, nd = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function ad(e) {
  e.l += 2;
  var t = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(4), a = e.read_shift(2), o = e.read_shift(2), i = nd[r >> 2 & 31];
  return { ixti: t, coltype: r & 3, rt: i, idx: n, c: a, C: o };
}
function id(e) {
  return e.l += 2, [e.read_shift(4)];
}
function od(e, t, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function sd(e, t, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function ld(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function cd(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function fd(e) {
  return e.l += 4, [0, 0];
}
var Fo = {
  1: { n: "PtgExp", f: C1 },
  2: { n: "PtgTbl", f: K1 },
  3: { n: "PtgAdd", f: Qe },
  4: { n: "PtgSub", f: Qe },
  5: { n: "PtgMul", f: Qe },
  6: { n: "PtgDiv", f: Qe },
  7: { n: "PtgPower", f: Qe },
  8: { n: "PtgConcat", f: Qe },
  9: { n: "PtgLt", f: Qe },
  10: { n: "PtgLe", f: Qe },
  11: { n: "PtgEq", f: Qe },
  12: { n: "PtgGe", f: Qe },
  13: { n: "PtgGt", f: Qe },
  14: { n: "PtgNe", f: Qe },
  15: { n: "PtgIsect", f: Qe },
  16: { n: "PtgUnion", f: Qe },
  17: { n: "PtgRange", f: Qe },
  18: { n: "PtgUplus", f: Qe },
  19: { n: "PtgUminus", f: Qe },
  20: { n: "PtgPercent", f: Qe },
  21: { n: "PtgParen", f: Qe },
  22: { n: "PtgMissArg", f: Qe },
  23: { n: "PtgStr", f: M1 },
  26: { n: "PtgSheet", f: od },
  27: { n: "PtgEndSheet", f: sd },
  28: { n: "PtgErr", f: D1 },
  29: { n: "PtgBool", f: N1 },
  30: { n: "PtgInt", f: R1 },
  31: { n: "PtgNum", f: L1 },
  32: { n: "PtgArray", f: m1 },
  33: { n: "PtgFunc", f: x1 },
  34: { n: "PtgFuncVar", f: _1 },
  35: { n: "PtgName", f: U1 },
  36: { n: "PtgRef", f: E1 },
  37: { n: "PtgArea", f: c1 },
  38: { n: "PtgMemArea", f: z1 },
  39: { n: "PtgMemErr", f: j1 },
  40: { n: "PtgMemNoMem", f: G1 },
  41: { n: "PtgMemFunc", f: W1 },
  42: { n: "PtgRefErr", f: V1 },
  43: { n: "PtgAreaErr", f: u1 },
  44: { n: "PtgRefN", f: S1 },
  45: { n: "PtgAreaN", f: d1 },
  46: { n: "PtgMemAreaN", f: ld },
  47: { n: "PtgMemNoMemN", f: cd },
  57: { n: "PtgNameX", f: $1 },
  58: { n: "PtgRef3d", f: k1 },
  59: { n: "PtgArea3d", f: f1 },
  60: { n: "PtgRefErr3d", f: H1 },
  61: { n: "PtgAreaErr3d", f: h1 },
  255: {}
}, ud = {
  64: 32,
  96: 32,
  65: 33,
  97: 33,
  66: 34,
  98: 34,
  67: 35,
  99: 35,
  68: 36,
  100: 36,
  69: 37,
  101: 37,
  70: 38,
  102: 38,
  71: 39,
  103: 39,
  72: 40,
  104: 40,
  73: 41,
  105: 41,
  74: 42,
  106: 42,
  75: 43,
  107: 43,
  76: 44,
  108: 44,
  77: 45,
  109: 45,
  78: 46,
  110: 46,
  79: 47,
  111: 47,
  88: 34,
  120: 34,
  89: 57,
  121: 57,
  90: 58,
  122: 58,
  91: 59,
  123: 59,
  92: 60,
  124: 60,
  93: 61,
  125: 61
}, hd = {
  1: { n: "PtgElfLel", f: ul },
  2: { n: "PtgElfRw", f: td },
  3: { n: "PtgElfCol", f: Y1 },
  6: { n: "PtgElfRwV", f: rd },
  7: { n: "PtgElfColV", f: q1 },
  10: { n: "PtgElfRadical", f: Q1 },
  11: { n: "PtgElfRadicalS", f: ed },
  13: { n: "PtgElfColS", f: J1 },
  15: { n: "PtgElfColSV", f: X1 },
  16: { n: "PtgElfRadicalLel", f: Z1 },
  25: { n: "PtgList", f: ad },
  29: { n: "PtgSxName", f: id },
  255: {}
}, dd = {
  0: { n: "PtgAttrNoop", f: fd },
  1: { n: "PtgAttrSemi", f: w1 },
  2: { n: "PtgAttrIf", f: v1 },
  4: { n: "PtgAttrChoose", f: p1 },
  8: { n: "PtgAttrGoto", f: g1 },
  16: { n: "PtgAttrSum", f: A1 },
  32: { n: "PtgAttrBaxcel", f: Po },
  33: { n: "PtgAttrBaxcel", f: Po },
  64: { n: "PtgAttrSpace", f: y1 },
  65: { n: "PtgAttrSpaceSemi", f: T1 },
  128: { n: "PtgAttrIfError", f: b1 },
  255: {}
};
function md(e, t, r, n) {
  if (n.biff < 8) return Yt(e, t);
  for (var a = e.l + t, o = [], i = 0; i !== r.length; ++i)
    switch (r[i][0]) {
      case "PtgArray":
        r[i][1] = F1(e, 0, n), o.push(r[i][1]);
        break;
      case "PtgMemArea":
        r[i][2] = P1(e, r[i][1], n), o.push(r[i][2]);
        break;
      case "PtgExp":
        n && n.biff == 12 && (r[i][1][1] = e.read_shift(4), o.push(r[i][1]));
        break;
      case "PtgList":
      /* TODO: PtgList -> PtgExtraList */
      case "PtgElfRadicalS":
      /* TODO: PtgElfRadicalS -> PtgExtraElf */
      case "PtgElfColS":
      /* TODO: PtgElfColS -> PtgExtraElf */
      case "PtgElfColSV":
        throw "Unsupported " + r[i][0];
    }
  return t = a - e.l, t !== 0 && o.push(Yt(e, t)), o;
}
function pd(e, t, r) {
  for (var n = e.l + t, a, o, i = []; n != e.l; )
    t = n - e.l, o = e[e.l], a = Fo[o] || Fo[ud[o]], (o === 24 || o === 25) && (a = (o === 24 ? hd : dd)[e[e.l + 1]]), !a || !a.f ? Yt(e, t) : i.push([a.n, a.f(e, t, r)]);
  return i;
}
function gd(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], a = [], o = 0; o < n.length; ++o) {
      var i = n[o];
      if (i) switch (i[0]) {
        // TODO: handle embedded quotes
        case 2:
          a.push('"' + i[1].replace(/"/g, '""') + '"');
          break;
        default:
          a.push(i[1]);
      }
      else a.push("");
    }
    t.push(a.join(","));
  }
  return t.join(";");
}
var vd = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function bd(e, t) {
  var r = e.lastIndexOf("!"), n = t.lastIndexOf("!");
  return r == -1 && n == -1 ? e + ":" + t : r > 0 && n > 0 && e.slice(0, r).toLowerCase() == t.slice(0, n).toLowerCase() ? e + ":" + t.slice(n + 1) : (console.error("Cannot hydrate range", e, t), e + ":" + t);
}
function hl(e, t, r) {
  if (!e) return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[t])) return e.SheetNames[t];
  if (!e.XTI) return "SH33TJSERR6";
  var n = e.XTI[t];
  if (r.biff < 8)
    return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? "" : e.XTI[t - 1];
  if (!n) return "SH33TJSERR1";
  var a = "";
  if (r.biff > 8) switch (e[n[0]][0]) {
    case 357:
      return a = n[1] == -1 ? "#REF" : e.SheetNames[n[1]], n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]];
    case 358:
      return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[n[0]][0];
    case 355:
    /* 'BrtSupBookSrc' */
    /* falls through */
    default:
      return "SH33TJSSRC" + e[n[0]][0];
  }
  switch (e[n[0]][0][0]) {
    case 1025:
      return a = n[1] == -1 ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3", n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]];
    case 14849:
      return e[n[0]].slice(1).map(function(o) {
        return o.Name;
      }).join(";;");
    //return "SH33TJSERR8";
    default:
      return e[n[0]][0][3] ? (a = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4", n[1] == n[2] ? a : a + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2";
  }
}
function Uo(e, t, r) {
  var n = hl(e, t, r);
  return n == "#REF" ? n : vn(n, r);
}
function Wr(e, t, r, n, a) {
  var o = a && a.biff || 8, i = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 } }
  ), s = [], l, c, f, d = 0, u = 0, h, g = "";
  if (!e[0] || !e[0][0]) return "";
  for (var m = -1, p = "", w = 0, O = e[0].length; w < O; ++w) {
    var y = e[0][w];
    switch (y[0]) {
      case "PtgUminus":
        s.push("-" + s.pop());
        break;
      case "PtgUplus":
        s.push("+" + s.pop());
        break;
      case "PtgPercent":
        s.push(s.pop() + "%");
        break;
      case "PtgAdd":
      /* [MS-XLS] 2.5.198.26 */
      case "PtgConcat":
      /* [MS-XLS] 2.5.198.43 */
      case "PtgDiv":
      /* [MS-XLS] 2.5.198.45 */
      case "PtgEq":
      /* [MS-XLS] 2.5.198.56 */
      case "PtgGe":
      /* [MS-XLS] 2.5.198.64 */
      case "PtgGt":
      /* [MS-XLS] 2.5.198.65 */
      case "PtgLe":
      /* [MS-XLS] 2.5.198.68 */
      case "PtgLt":
      /* [MS-XLS] 2.5.198.69 */
      case "PtgMul":
      /* [MS-XLS] 2.5.198.75 */
      case "PtgNe":
      /* [MS-XLS] 2.5.198.78 */
      case "PtgPower":
      /* [MS-XLS] 2.5.198.82 */
      case "PtgSub":
        if (l = s.pop(), c = s.pop(), m >= 0) {
          switch (e[0][m][1][0]) {
            case 0:
              p = Ge(" ", e[0][m][1][1]);
              break;
            case 1:
              p = Ge("\r", e[0][m][1][1]);
              break;
            default:
              if (p = "", a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][m][1][0]);
          }
          c = c + p, m = -1;
        }
        s.push(c + vd[y[0]] + l);
        break;
      case "PtgIsect":
        l = s.pop(), c = s.pop(), s.push(c + " " + l);
        break;
      case "PtgUnion":
        l = s.pop(), c = s.pop(), s.push(c + "," + l);
        break;
      case "PtgRange":
        l = s.pop(), c = s.pop(), s.push(bd(c, l));
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        f = cn(y[1][1], i, a), s.push(fn(f, o));
        break;
      case "PtgRefN":
        f = r ? cn(y[1][1], r, a) : y[1][1], s.push(fn(f, o));
        break;
      case "PtgRef3d":
        d = /*::Number(*/
        y[1][1], f = cn(y[1][2], i, a), g = Uo(n, d, a), s.push(g + "!" + fn(f, o));
        break;
      case "PtgFunc":
      /* [MS-XLS] 2.5.198.62 */
      case "PtgFuncVar":
        var B = y[1][0], I = y[1][1];
        B || (B = 0), B &= 127;
        var G = B == 0 ? [] : s.slice(-B);
        s.length -= B, I === "User" && (I = G.shift()), s.push(I + "(" + G.join(",") + ")");
        break;
      case "PtgBool":
        s.push(y[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        s.push(
          /*::String(*/
          y[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        s.push(String(y[1]));
        break;
      case "PtgStr":
        s.push('"' + y[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        s.push(
          /*::String(*/
          y[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        h = yo(y[1][1], r ? { s: r } : i, a), s.push(Na(h, a));
        break;
      case "PtgArea":
        h = yo(y[1][1], i, a), s.push(Na(h, a));
        break;
      case "PtgArea3d":
        d = /*::Number(*/
        y[1][1], h = y[1][2], g = Uo(n, d, a), s.push(g + "!" + Na(h, a));
        break;
      case "PtgAttrSum":
        s.push("SUM(" + s.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      /* [MS-XLS] 2.5.198.33 */
      case "PtgAttrSemi":
        break;
      case "PtgName":
        u = y[1][2];
        var v = (n.names || [])[u - 1] || (n[0] || [])[u], k = v ? v.Name : "SH33TJSNAME" + String(u);
        k && k.slice(0, 6) == "_xlfn." && !a.xlfn && (k = k.slice(6)), s.push(k);
        break;
      case "PtgNameX":
        var A = y[1][1];
        u = y[1][2];
        var D;
        if (a.biff <= 5)
          A < 0 && (A = -A), n[A] && (D = n[A][u]);
        else {
          var L = "";
          if (((n[A] || [])[0] || [])[0] == 14849 || (((n[A] || [])[0] || [])[0] == 1025 ? n[A][u] && n[A][u].itab > 0 && (L = n.SheetNames[n[A][u].itab - 1] + "!") : L = n.SheetNames[u - 1] + "!"), n[A] && n[A][u]) L += n[A][u].Name;
          else if (n[0] && n[0][u]) L += n[0][u].Name;
          else {
            var P = (hl(n, A, a) || "").split(";;");
            P[u - 1] ? L = P[u - 1] : L += "SH33TJSERRX";
          }
          s.push(L);
          break;
        }
        D || (D = { Name: "SH33TJSERRY" }), s.push(D.Name);
        break;
      case "PtgParen":
        var M = "(", V = ")";
        if (m >= 0) {
          switch (p = "", e[0][m][1][0]) {
            // $FlowIgnore
            case 2:
              M = Ge(" ", e[0][m][1][1]) + M;
              break;
            // $FlowIgnore
            case 3:
              M = Ge("\r", e[0][m][1][1]) + M;
              break;
            // $FlowIgnore
            case 4:
              V = Ge(" ", e[0][m][1][1]) + V;
              break;
            // $FlowIgnore
            case 5:
              V = Ge("\r", e[0][m][1][1]) + V;
              break;
            default:
              if (a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][m][1][0]);
          }
          m = -1;
        }
        s.push(M + s.pop() + V);
        break;
      case "PtgRefErr":
        s.push("#REF!");
        break;
      case "PtgRefErr3d":
        s.push("#REF!");
        break;
      case "PtgExp":
        f = { c: y[1][1], r: y[1][0] };
        var F = { c: r.c, r: r.r };
        if (n.sharedf[Je(f)]) {
          var U = n.sharedf[Je(f)];
          s.push(Wr(U, i, F, n, a));
        } else {
          var K = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (c = n.arrayf[l], !(f.c < c[0].s.c || f.c > c[0].e.c) && !(f.r < c[0].s.r || f.r > c[0].e.r)) {
              s.push(Wr(c[1], i, F, n, a)), K = !0;
              break;
            }
          K || s.push(
            /*::String(*/
            y[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        s.push("{" + gd(
          /*::(*/
          y[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      /* [MS-XLS] 2.5.198.38 */
      case "PtgAttrSpaceSemi":
        m = w;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        s.push("");
        break;
      case "PtgAreaErr":
        s.push("#REF!");
        break;
      case "PtgAreaErr3d":
        s.push("#REF!");
        break;
      case "PtgList":
        s.push("Table" + y[1].idx + "[#" + y[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      /* [MS-XLS] 2.5.198.46 */
      case "PtgElfColS":
      /* [MS-XLS] 2.5.198.47 */
      case "PtgElfColSV":
      /* [MS-XLS] 2.5.198.48 */
      case "PtgElfColV":
      /* [MS-XLS] 2.5.198.49 */
      case "PtgElfLel":
      /* [MS-XLS] 2.5.198.50 */
      case "PtgElfRadical":
      /* [MS-XLS] 2.5.198.51 */
      case "PtgElfRadicalLel":
      /* [MS-XLS] 2.5.198.52 */
      case "PtgElfRadicalS":
      /* [MS-XLS] 2.5.198.53 */
      case "PtgElfRw":
      /* [MS-XLS] 2.5.198.54 */
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(y));
      default:
        throw new Error("Unrecognized Formula Token: " + String(y));
    }
    var Z = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (a.biff != 3 && m >= 0 && Z.indexOf(e[0][w][0]) == -1) {
      y = e[0][m];
      var me = !0;
      switch (y[1][0]) {
        /* note: some bad XLSB files omit the PtgParen */
        case 4:
          me = !1;
        /* falls through */
        case 0:
          p = Ge(" ", y[1][1]);
          break;
        case 5:
          me = !1;
        /* falls through */
        case 1:
          p = Ge("\r", y[1][1]);
          break;
        default:
          if (p = "", a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + y[1][0]);
      }
      s.push((me ? p : "") + s.pop() + (me ? "" : p)), m = -1;
    }
  }
  if (s.length > 1 && a.WTF) throw new Error("bad formula stack");
  return s[0] == "TRUE" ? !0 : s[0] == "FALSE" ? !1 : s[0];
}
function wd(e) {
  if (e == null) {
    var t = j(8);
    return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t;
  } else if (typeof e == "number") return Sr(e);
  return Sr(0);
}
function yd(e, t, r, n, a) {
  var o = kr(t, r, a), i = wd(e.v), s = j(6), l = 33;
  s.write_shift(2, l), s.write_shift(4, 0);
  for (var c = j(e.bf.length), f = 0; f < e.bf.length; ++f) c[f] = e.bf[f];
  var d = et([o, i, s, c]);
  return d;
}
function wa(e, t, r) {
  var n = e.read_shift(4), a = pd(e, n, r), o = e.read_shift(4), i = o > 0 ? md(e, o, a, r) : null;
  return [a, i];
}
var Td = wa, ya = wa, Ed = wa, Sd = wa;
function $o(e) {
  if ((e | 0) == e && e < Math.pow(2, 16) && e >= 0) {
    var t = j(11);
    return t.write_shift(4, 3), t.write_shift(1, 30), t.write_shift(2, e), t.write_shift(4, 0), t;
  }
  var r = j(17);
  return r.write_shift(4, 11), r.write_shift(1, 31), r.write_shift(8, e), r.write_shift(4, 0), r;
}
function kd(e) {
  var t = j(10);
  return t.write_shift(4, 2), t.write_shift(1, 28), t.write_shift(1, e), t.write_shift(4, 0), t;
}
function xd(e) {
  var t = j(10);
  return t.write_shift(4, 2), t.write_shift(1, 29), t.write_shift(1, e ? 1 : 0), t.write_shift(4, 0), t;
}
function _d(e) {
  var t = j(7);
  t.write_shift(4, 3 + 2 * e.length), t.write_shift(1, 23), t.write_shift(2, e.length);
  var r = j(2 * e.length);
  r.write_shift(2 * e.length, e, "utf16le");
  var n = j(4);
  return n.write_shift(4, 0), et([t, r, n]);
}
function Od(e) {
  var t = Ke(e), r = j(15);
  return r.write_shift(4, 7), r.write_shift(1, 36), r.write_shift(4, t.r), r.write_shift(2, t.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15), r.write_shift(4, 0), r;
}
function Ad(e, t) {
  var r = e.lastIndexOf("!"), n = e.slice(0, r);
  e = e.slice(r + 1);
  var a = Ke(e);
  n.charAt(0) == "'" && (n = n.slice(1, -1).replace(/''/g, "'"));
  var o = j(17);
  return o.write_shift(4, 9), o.write_shift(1, 58), o.write_shift(2, 2 + t.SheetNames.map(function(i) {
    return i.toLowerCase();
  }).indexOf(n.toLowerCase())), o.write_shift(4, a.r), o.write_shift(2, a.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15), o.write_shift(4, 0), o;
}
function Cd(e, t) {
  var r = e.lastIndexOf("!"), n = e.slice(0, r);
  e = e.slice(r + 1), n.charAt(0) == "'" && (n = n.slice(1, -1).replace(/''/g, "'"));
  var a = j(17);
  return a.write_shift(4, 9), a.write_shift(1, 60), a.write_shift(2, 2 + t.SheetNames.map(function(o) {
    return o.toLowerCase();
  }).indexOf(n.toLowerCase())), a.write_shift(4, 0), a.write_shift(2, 0), a.write_shift(4, 0), a;
}
function Dd(e) {
  var t = e.split(":"), r = t[0], n = j(23);
  n.write_shift(4, 15), r = t[0];
  var a = Ke(r);
  return n.write_shift(1, 36), n.write_shift(4, a.r), n.write_shift(2, a.c | (r.charAt(0) == "$" ? 0 : 1) << 14 | (r.match(/\$\d/) ? 0 : 1) << 15), n.write_shift(4, 0), r = t[1], a = Ke(r), n.write_shift(1, 36), n.write_shift(4, a.r), n.write_shift(2, a.c | (r.charAt(0) == "$" ? 0 : 1) << 14 | (r.match(/\$\d/) ? 0 : 1) << 15), n.write_shift(4, 0), n.write_shift(1, 17), n.write_shift(4, 0), n;
}
function Rd(e, t) {
  var r = e.lastIndexOf("!"), n = e.slice(0, r);
  e = e.slice(r + 1), n.charAt(0) == "'" && (n = n.slice(1, -1).replace(/''/g, "'"));
  var a = e.split(":"), o = j(27);
  o.write_shift(4, 19);
  var i = a[0], s = Ke(i);
  return o.write_shift(1, 58), o.write_shift(2, 2 + t.SheetNames.map(function(l) {
    return l.toLowerCase();
  }).indexOf(n.toLowerCase())), o.write_shift(4, s.r), o.write_shift(2, s.c | (i.charAt(0) == "$" ? 0 : 1) << 14 | (i.match(/\$\d/) ? 0 : 1) << 15), i = a[1], s = Ke(i), o.write_shift(1, 58), o.write_shift(2, 2 + t.SheetNames.map(function(l) {
    return l.toLowerCase();
  }).indexOf(n.toLowerCase())), o.write_shift(4, s.r), o.write_shift(2, s.c | (i.charAt(0) == "$" ? 0 : 1) << 14 | (i.match(/\$\d/) ? 0 : 1) << 15), o.write_shift(1, 17), o.write_shift(4, 0), o;
}
function Nd(e, t) {
  var r = e.lastIndexOf("!"), n = e.slice(0, r);
  e = e.slice(r + 1), n.charAt(0) == "'" && (n = n.slice(1, -1).replace(/''/g, "'"));
  var a = ct(e), o = j(23);
  return o.write_shift(4, 15), o.write_shift(1, 59), o.write_shift(2, 2 + t.SheetNames.map(function(i) {
    return i.toLowerCase();
  }).indexOf(n.toLowerCase())), o.write_shift(4, a.s.r), o.write_shift(4, a.e.r), o.write_shift(2, a.s.c), o.write_shift(2, a.e.c), o.write_shift(4, 0), o;
}
function Ld(e, t) {
  if (typeof e == "number") return $o(e);
  if (typeof e == "boolean") return xd(e);
  if (/^#(DIV\/0!|GETTING_DATA|N\/A|NAME\?|NULL!|NUM!|REF!|VALUE!)$/.test(e)) return kd(+Kt[e]);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return Od(e);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return Dd(e);
  if (e.match(/^#REF!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return Nd(e, t);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return Ad(e, t);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return Rd(e, t);
  if (/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!#REF!$/.test(e)) return Cd(e, t);
  if (/^".*"$/.test(e)) return _d(e);
  if (/^[+-]\d+$/.test(e)) return $o(parseInt(e, 10));
  throw "Formula |" + e + "| not supported for XLSB";
}
var Md = Ld, Id = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, dl = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, Pd = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function Fd(e) {
  var t = "of:=" + e.replace(va, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return t.replace(/;/g, "|").replace(/,/g, ";");
}
function ml(e) {
  return e.replace(/!/, ".").replace(/:/, ":.");
}
var un = typeof Map < "u";
function _i(e, t, r) {
  var n = 0, a = e.length;
  if (r) {
    if (un ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var o = un ? r.get(t) : r[t]; n < o.length; ++n)
        if (e[o[n]].t === t)
          return e.Count++, o[n];
    }
  } else for (; n < a; ++n)
    if (e[n].t === t)
      return e.Count++, n;
  return e[a] = { t }, e.Count++, e.Unique++, r && (un ? (r.has(t) || r.set(t, []), r.get(t).push(a)) : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(a))), a;
}
function Ta(e, t) {
  var r = { min: e + 1, max: e + 1 }, n = -1;
  return t.MDW && (nr = t.MDW), t.width != null ? r.customWidth = 1 : t.wpx != null ? n = ra(t.wpx) : t.wch != null && (n = t.wch), n > -1 ? (r.width = ti(n), r.customWidth = 1) : t.width != null && (r.width = t.width), t.hidden && (r.hidden = !0), t.level != null && (r.outlineLevel = r.level = t.level), r;
}
function pl(e, t) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function hr(e, t, r) {
  var n = r.revssf[t.z != null ? t.z : "General"], a = 60, o = e.length;
  if (n == null && r.ssf) {
    for (; a < 392; ++a) if (r.ssf[a] == null) {
      cu(t.z, a), r.ssf[a] = t.z, r.revssf[t.z] = n = a;
      break;
    }
  }
  for (a = 0; a != o; ++a) if (e[a].numFmtId === n) return a;
  return e[o] = {
    numFmtId: n,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  }, o;
}
function Ud(e, t, r) {
  if (e && e["!ref"]) {
    var n = He(e["!ref"]);
    if (n.e.c < n.s.c || n.e.r < n.s.r) throw new Error("Bad range (" + r + "): " + e["!ref"]);
  }
}
function $d(e) {
  if (e.length === 0) return "";
  for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r) t += '<mergeCell ref="' + rt(e[r]) + '"/>';
  return t + "</mergeCells>";
}
function Bd(e, t, r, n, a) {
  var o = !1, i = {}, s = null;
  if (n.bookType !== "xlsx" && t.vbaraw) {
    var l = t.SheetNames[r];
    try {
      t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l);
    } catch {
    }
    o = !0, i.codeName = mn(Ce(l));
  }
  if (e && e["!outline"]) {
    var c = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (c.summaryBelow = 0), e["!outline"].left && (c.summaryRight = 0), s = (s || "") + oe("outlinePr", null, c);
  }
  !o && !s || (a[a.length] = oe("sheetPr", s, i));
}
var zd = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], Wd = [
  "formatColumns",
  "formatRows",
  "formatCells",
  "insertColumns",
  "insertRows",
  "insertHyperlinks",
  "deleteColumns",
  "deleteRows",
  "sort",
  "autoFilter",
  "pivotTables"
];
function Vd(e) {
  var t = { sheet: 1 };
  return zd.forEach(function(r) {
    e[r] != null && e[r] && (t[r] = "1");
  }), Wd.forEach(function(r) {
    e[r] != null && !e[r] && (t[r] = "0");
  }), e.password && (t.password = Zs(e.password).toString(16).toUpperCase()), oe("sheetProtection", null, t);
}
function Hd(e) {
  return pl(e), oe("pageMargins", null, e);
}
function jd(e, t) {
  for (var r = ["<cols>"], n, a = 0; a != t.length; ++a)
    (n = t[a]) && (r[r.length] = oe("col", null, Ta(a, n)));
  return r[r.length] = "</cols>", r.join("");
}
function Gd(e, t, r, n) {
  var a = typeof e.ref == "string" ? e.ref : rt(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
  var o = r.Workbook.Names, i = ct(a);
  i.s.r == i.e.r && (i.e.r = ct(t["!ref"]).e.r, a = rt(i));
  for (var s = 0; s < o.length; ++s) {
    var l = o[s];
    if (l.Name == "_xlnm._FilterDatabase" && l.Sheet == n) {
      l.Ref = vn(r.SheetNames[n]) + "!" + gn(a);
      break;
    }
  }
  return s == o.length && o.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + a }), oe("autoFilter", null, { ref: a });
}
function Kd(e, t, r, n) {
  var a = { workbookViewId: "0" };
  return (((n || {}).Workbook || {}).Views || [])[0] && (a.rightToLeft = n.Workbook.Views[0].RTL ? "1" : "0"), oe("sheetViews", oe("sheetView", null, a), {});
}
function Yd(e, t, r, n, a, o, i) {
  if (e.c && r["!comments"].push([t, e.c]), (e.v === void 0 || e.t === "z" && !(n || {}).sheetStubs) && typeof e.f != "string" && typeof e.z > "u") return "";
  var s = "", l = e.t, c = e.v;
  if (e.t !== "z") switch (e.t) {
    case "b":
      s = e.v ? "1" : "0";
      break;
    case "n":
      isNaN(e.v) ? (e.t = "e", s = kt[e.v = 36]) : isFinite(e.v) ? s = "" + e.v : (e.t = "e", s = kt[e.v = 7]);
      break;
    case "e":
      s = kt[e.v];
      break;
    case "d":
      if (n && n.cellDates) {
        var f = Ot(e.v, i);
        s = f.toISOString(), f.getUTCFullYear() < 1900 && (s = s.slice(s.indexOf("T") + 1).replace("Z", ""));
      } else
        e = bt(e), e.t = "n", s = "" + (e.v = ft(Ot(e.v, i), i));
      typeof e.z > "u" && (e.z = Ve[14]);
      break;
    default:
      s = e.v;
      break;
  }
  var d = e.t == "z" || e.v == null ? "" : lt("v", Ce(s)), u = { r: t }, h = hr(n.cellXfs, e, n);
  switch (h !== 0 && (u.s = h), e.t) {
    case "n":
      break;
    case "d":
      u.t = "d";
      break;
    case "b":
      u.t = "b";
      break;
    case "e":
      u.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767) throw new Error("Text length must not exceed 32767 characters");
      if (n && n.bookSST) {
        d = lt("v", "" + _i(n.Strings, e.v, n.revStrings)), u.t = "s";
        break;
      } else u.t = "str";
      break;
  }
  if (e.t != l && (e.t = l, e.v = c), typeof e.f == "string" && e.f) {
    var g = e.F && e.F.slice(0, t.length) == t ? { t: "array", ref: e.F } : null;
    d = oe("f", Ce(e.f), g) + (e.v != null ? d : "");
  }
  return e.l && (e.l.display = Ce(s), r["!links"].push([t, e.l])), e.D && (u.cm = 1), oe("c", d, u);
}
function Jd(e, t, r, n) {
  var a = [], o = [], i = He(e["!ref"]), s = "", l, c = "", f = [], d = 0, u = 0, h = e["!rows"], g = e["!data"] != null, m = g ? e["!data"] : [], p = { r: c }, w, O = -1, y = (((n || {}).Workbook || {}).WBProps || {}).date1904;
  for (u = i.s.c; u <= i.e.c; ++u) f[u] = $e(u);
  for (d = i.s.r; d <= i.e.r; ++d) {
    o = [], c = Be(d);
    var B = g ? m[d] : [];
    for (u = i.s.c; u <= i.e.c; ++u) {
      l = f[u] + c;
      var I = g ? B[u] : e[l];
      I !== void 0 && (s = Yd(I, l, e, t, r, n, y)) != null && o.push(s);
    }
    (o.length > 0 || h && h[d]) && (p = { r: c }, h && h[d] && (w = h[d], w.hidden && (p.hidden = 1), O = -1, w.hpx ? O = na(w.hpx) : w.hpt && (O = w.hpt), O > -1 && (p.ht = O, p.customHeight = 1), w.level && (p.outlineLevel = w.level)), a[a.length] = oe("row", o.join(""), p));
  }
  if (h) for (; d < h.length; ++d)
    h && h[d] && (p = { r: d + 1 }, w = h[d], w.hidden && (p.hidden = 1), O = -1, w.hpx ? O = na(w.hpx) : w.hpt && (O = w.hpt), O > -1 && (p.ht = O, p.customHeight = 1), w.level && (p.outlineLevel = w.level), a[a.length] = oe("row", "", p));
  return a.join("");
}
function Xd(e, t, r, n) {
  var a = [nt, oe("worksheet", null, {
    xmlns: Vr[0],
    "xmlns:r": ot.r
  })], o = r.SheetNames[e], i = 0, s = "", l = r.Sheets[o];
  l == null && (l = {});
  var c = l["!ref"] || "A1", f = He(c);
  if (f.e.c > 16383 || f.e.r > 1048575) {
    if (t.WTF) throw new Error("Range " + c + " exceeds format limit A1:XFD1048576");
    f.e.c = Math.min(f.e.c, 16383), f.e.r = Math.min(f.e.c, 1048575), c = rt(f);
  }
  n || (n = {}), l["!comments"] = [];
  var d = [];
  Bd(l, r, e, t, a), a[a.length] = oe("dimension", null, { ref: c }), a[a.length] = Kd(l, t, e, r), t.sheetFormat && (a[a.length] = oe("sheetFormatPr", null, {
    defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
    baseColWidth: t.sheetFormat.baseColWidth || "10",
    outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
  })), l["!cols"] != null && l["!cols"].length > 0 && (a[a.length] = jd(l, l["!cols"])), a[i = a.length] = "<sheetData/>", l["!links"] = [], l["!ref"] != null && (s = Jd(l, t, e, r), s.length > 0 && (a[a.length] = s)), a.length > i + 1 && (a[a.length] = "</sheetData>", a[i] = a[i].replace("/>", ">")), l["!protect"] && (a[a.length] = Vd(l["!protect"])), l["!autofilter"] != null && (a[a.length] = Gd(l["!autofilter"], l, r, e)), l["!merges"] != null && l["!merges"].length > 0 && (a[a.length] = $d(l["!merges"]));
  var u = -1, h, g = -1;
  return (
    /*::(*/
    l["!links"].length > 0 && (a[a.length] = "<hyperlinks>", l["!links"].forEach(function(m) {
      m[1].Target && (h = { ref: m[0] }, m[1].Target.charAt(0) != "#" && (g = Pe(n, -1, Ce(m[1].Target).replace(/#[\s\S]*$/, ""), Ne.HLINK), h["r:id"] = "rId" + g), (u = m[1].Target.indexOf("#")) > -1 && (h.location = Ce(m[1].Target.slice(u + 1))), m[1].Tooltip && (h.tooltip = Ce(m[1].Tooltip)), h.display = m[1].display, a[a.length] = oe("hyperlink", null, h));
    }), a[a.length] = "</hyperlinks>"), delete l["!links"], l["!margins"] != null && (a[a.length] = Hd(l["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && (a[a.length] = lt("ignoredErrors", oe("ignoredError", null, { numberStoredAsText: 1, sqref: c }))), d.length > 0 && (g = Pe(n, -1, "../drawings/drawing" + (e + 1) + ".xml", Ne.DRAW), a[a.length] = oe("drawing", null, { "r:id": "rId" + g }), l["!drawing"] = d), l["!comments"].length > 0 && (g = Pe(n, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Ne.VML), a[a.length] = oe("legacyDrawing", null, { "r:id": "rId" + g }), l["!legacy"] = g), a.length > 1 && (a[a.length] = "</worksheet>", a[1] = a[1].replace("/>", ">")), a.join("")
  );
}
function qd(e, t) {
  var r = {}, n = e.l + t;
  r.r = e.read_shift(4), e.l += 4;
  var a = e.read_shift(2);
  e.l += 1;
  var o = e.read_shift(1);
  return e.l = n, o & 7 && (r.level = o & 7), o & 16 && (r.hidden = !0), o & 32 && (r.hpt = a / 20), r;
}
function Qd(e, t, r) {
  var n = j(145), a = (r["!rows"] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var o = 320;
  a.hpx ? o = na(a.hpx) * 20 : a.hpt && (o = a.hpt * 20), n.write_shift(2, o), n.write_shift(1, 0);
  var i = 0;
  a.level && (i |= a.level), a.hidden && (i |= 16), (a.hpx || a.hpt) && (i |= 32), n.write_shift(1, i), n.write_shift(1, 0);
  var s = 0, l = n.l;
  n.l += 4;
  for (var c = { r: e, c: 0 }, f = r["!data"] != null, d = 0; d < 16; ++d)
    if (!(t.s.c > d + 1 << 10 || t.e.c < d << 10)) {
      for (var u = -1, h = -1, g = d << 10; g < d + 1 << 10; ++g) {
        c.c = g;
        var m = f ? (r["!data"][c.r] || [])[c.c] : r[Je(c)];
        m && (u < 0 && (u = g), h = g);
      }
      u < 0 || (++s, n.write_shift(4, u), n.write_shift(4, h));
    }
  var p = n.l;
  return n.l = l, n.write_shift(4, s), n.l = p, n.length > n.l ? n.slice(0, n.l) : n;
}
function Zd(e, t, r, n) {
  var a = Qd(n, r, t);
  (a.length > 17 || (t["!rows"] || [])[n]) && ee(e, 0, a);
}
var em = Ar, tm = Gr;
function rm() {
}
function nm(e, t) {
  var r = {}, n = e[e.l];
  return ++e.l, r.above = !(n & 64), r.left = !(n & 128), e.l += 18, r.name = Xu(e), r;
}
function am(e, t, r) {
  r == null && (r = j(84 + 4 * e.length));
  var n = 192;
  t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n);
  for (var a = 1; a < 3; ++a) r.write_shift(1, 0);
  return Zn({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), Ms(e, r), r.slice(0, r.l);
}
function im(e) {
  var t = Ft(e);
  return [t];
}
function om(e, t, r) {
  return r == null && (r = j(8)), xr(t, r);
}
function sm(e) {
  var t = _r(e);
  return [t];
}
function lm(e, t, r) {
  return r == null && (r = j(4)), Or(t, r);
}
function cm(e) {
  var t = Ft(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function fm(e, t, r) {
  return r == null && (r = j(9)), xr(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function um(e) {
  var t = _r(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function hm(e, t, r) {
  return r == null && (r = j(5)), Or(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function dm(e) {
  var t = Ft(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function Fa(e, t, r) {
  return r == null && (r = j(9)), xr(t, r), r.write_shift(1, e.v), r;
}
function mm(e) {
  var t = _r(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function Ua(e, t, r) {
  return r == null && (r = j(8)), Or(t, r), r.write_shift(1, e.v), r.write_shift(2, 0), r.write_shift(1, 0), r;
}
function pm(e) {
  var t = Ft(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function gm(e, t, r) {
  return r == null && (r = j(12)), xr(t, r), r.write_shift(4, t.v), r;
}
function vm(e) {
  var t = _r(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function bm(e, t, r) {
  return r == null && (r = j(8)), Or(t, r), r.write_shift(4, t.v), r;
}
function wm(e) {
  var t = Ft(e), r = Kr(e);
  return [t, r, "n"];
}
function ym(e, t, r) {
  return r == null && (r = j(16)), xr(t, r), Sr(e.v, r), r;
}
function Tm(e) {
  var t = _r(e), r = Kr(e);
  return [t, r, "n"];
}
function Em(e, t, r) {
  return r == null && (r = j(12)), Or(t, r), Sr(e.v, r), r;
}
function Sm(e) {
  var t = Ft(e), r = Ei(e);
  return [t, r, "n"];
}
function km(e, t, r) {
  return r == null && (r = j(12)), xr(t, r), Is(e.v, r), r;
}
function xm(e) {
  var t = _r(e), r = Ei(e);
  return [t, r, "n"];
}
function _m(e, t, r) {
  return r == null && (r = j(8)), Or(t, r), Is(e.v, r), r;
}
function Om(e) {
  var t = Ft(e), r = yi(e);
  return [t, r, "is"];
}
function Am(e) {
  var t = Ft(e), r = vt(e);
  return [t, r, "str"];
}
function Cm(e, t, r) {
  var n = e.v == null ? "" : String(e.v);
  return r == null && (r = j(12 + 4 * e.v.length)), xr(t, r), it(n, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Dm(e) {
  var t = _r(e), r = vt(e);
  return [t, r, "str"];
}
function Rm(e, t, r) {
  var n = e.v == null ? "" : String(e.v);
  return r == null && (r = j(8 + 4 * n.length)), Or(t, r), it(n, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Nm(e, t, r) {
  var n = e.l + t, a = Ft(e);
  a.r = r["!row"];
  var o = e.read_shift(1), i = [a, o, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var s = ya(e, n - e.l, r);
    i[3] = Wr(s, null, a, r.supbooks, r);
  } else e.l = n;
  return i;
}
function Lm(e, t, r) {
  var n = e.l + t, a = Ft(e);
  a.r = r["!row"];
  var o = e.read_shift(1), i = [a, o, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var s = ya(e, n - e.l, r);
    i[3] = Wr(s, null, a, r.supbooks, r);
  } else e.l = n;
  return i;
}
function Mm(e, t, r) {
  var n = e.l + t, a = Ft(e);
  a.r = r["!row"];
  var o = Kr(e), i = [a, o, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var s = ya(e, n - e.l, r);
    i[3] = Wr(s, null, a, r.supbooks, r);
  } else e.l = n;
  return i;
}
function Im(e, t, r) {
  var n = e.l + t, a = Ft(e);
  a.r = r["!row"];
  var o = vt(e), i = [a, o, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var s = ya(e, n - e.l, r);
    i[3] = Wr(s, null, a, r.supbooks, r);
  } else e.l = n;
  return i;
}
var Pm = Ar, Fm = Gr;
function Um(e, t) {
  return t == null && (t = j(4)), t.write_shift(4, e), t;
}
function $m(e, t) {
  var r = e.l + t, n = Ar(e), a = ga(e), o = vt(e), i = vt(e), s = vt(e);
  e.l = r;
  var l = { rfx: n, relId: a, loc: o, display: s };
  return i && (l.Tooltip = i), l;
}
function Bm(e, t) {
  var r = j(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  Gr({ s: Ke(e[0]), e: Ke(e[0]) }, r), Ti("rId" + t, r);
  var n = e[1].Target.indexOf("#"), a = n == -1 ? "" : e[1].Target.slice(n + 1);
  return it(a || "", r), it(e[1].Tooltip || "", r), it("", r), r.slice(0, r.l);
}
function zm() {
}
function Wm(e, t, r) {
  var n = e.l + t, a = Ps(e), o = e.read_shift(1), i = [a];
  if (i[2] = o, r.cellFormula) {
    var s = Td(e, n - e.l, r);
    i[1] = s;
  } else e.l = n;
  return i;
}
function Vm(e, t, r) {
  var n = e.l + t, a = Ar(e), o = [a];
  if (r.cellFormula) {
    var i = Sd(e, n - e.l, r);
    o[1] = i, e.l = n;
  } else e.l = n;
  return o;
}
function Hm(e, t, r) {
  r == null && (r = j(18));
  var n = Ta(e, t);
  r.write_shift(-4, e), r.write_shift(-4, e), r.write_shift(4, (n.width || 10) * 256), r.write_shift(
    4,
    0
    /*ixfe*/
  );
  var a = 0;
  return t.hidden && (a |= 1), typeof n.width == "number" && (a |= 2), t.level && (a |= t.level << 8), r.write_shift(2, a), r;
}
var gl = ["left", "right", "top", "bottom", "header", "footer"];
function jm(e) {
  var t = {};
  return gl.forEach(function(r) {
    t[r] = Kr(e);
  }), t;
}
function Gm(e, t) {
  return t == null && (t = j(48)), pl(e), gl.forEach(function(r) {
    Sr(e[r], t);
  }), t;
}
function Km(e) {
  var t = e.read_shift(2);
  return e.l += 28, { RTL: t & 32 };
}
function Ym(e, t, r) {
  r == null && (r = j(30));
  var n = 924;
  return (((t || {}).Views || [])[0] || {}).RTL && (n |= 32), r.write_shift(2, n), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 100), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(4, 0), r;
}
function Jm(e) {
  var t = j(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), Gr(e, t), t;
}
function Xm(e, t) {
  return t == null && (t = j(66)), t.write_shift(2, e.password ? Zs(e.password) : 0), t.write_shift(4, 1), [
    ["objects", !1],
    // fObjects
    ["scenarios", !1],
    // fScenarios
    ["formatCells", !0],
    // fFormatCells
    ["formatColumns", !0],
    // fFormatColumns
    ["formatRows", !0],
    // fFormatRows
    ["insertColumns", !0],
    // fInsertColumns
    ["insertRows", !0],
    // fInsertRows
    ["insertHyperlinks", !0],
    // fInsertHyperlinks
    ["deleteColumns", !0],
    // fDeleteColumns
    ["deleteRows", !0],
    // fDeleteRows
    ["selectLockedCells", !1],
    // fSelLockedCells
    ["sort", !0],
    // fSort
    ["autoFilter", !0],
    // fAutoFilter
    ["pivotTables", !0],
    // fPivotTables
    ["selectUnlockedCells", !1]
    // fSelUnlockedCells
  ].forEach(function(r) {
    r[1] ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0) : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
  }), t;
}
function qm() {
}
function Qm() {
}
function Zm(e, t, r, n, a, o, i, s) {
  var l = { r, c: n };
  if (t.c && o["!comments"].push([Je(l), t.c]), t.v === void 0) return !1;
  var c = "";
  switch (t.t) {
    case "b":
      c = t.v ? "1" : "0";
      break;
    case "d":
      t = bt(t), t.z = t.z || Ve[14], t.v = ft(Ot(t.v, s), s), t.t = "n";
      break;
    /* falls through */
    case "n":
    case "e":
      c = "" + t.v;
      break;
    default:
      c = t.v;
      break;
  }
  switch (l.s = hr(a.cellXfs, t, a), t.l && o["!links"].push([Je(l), t.l]), t.t) {
    case "s":
    case "str":
      return a.bookSST ? (c = _i(a.Strings, t.v == null ? "" : String(t.v), a.revStrings), l.t = "s", l.v = c, i ? ee(e, 18, bm(t, l)) : ee(e, 7, gm(t, l))) : (l.t = "str", i ? ee(e, 17, Rm(t, l)) : ee(e, 6, Cm(t, l))), !0;
    case "n":
      return t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3 ? i ? ee(e, 13, _m(t, l)) : ee(e, 2, km(t, l)) : isFinite(t.v) ? i ? ee(e, 16, Em(t, l)) : ee(e, 5, ym(t, l)) : (l.t = "e", isNaN(t.v) ? i ? ee(e, 14, Ua({ v: 36 }, l)) : ee(e, 3, Fa({ v: 36 }, l)) : i ? ee(e, 14, Ua({ v: 7 }, l)) : ee(e, 3, Fa({ v: 7 }, l))), !0;
    case "b":
      return l.t = "b", i ? ee(e, 15, hm(t, l)) : ee(e, 4, fm(t, l)), !0;
    case "e":
      return l.t = "e", i ? ee(e, 14, Ua(t, l)) : ee(e, 3, Fa(t, l)), !0;
  }
  return i ? ee(e, 12, lm(t, l)) : ee(e, 1, om(t, l)), !0;
}
function ep(e, t, r, n, a) {
  var o = He(t["!ref"] || "A1"), i = "", s = [], l = (((a || {}).Workbook || {}).WBProps || {}).date1904;
  ee(
    e,
    145
    /* BrtBeginSheetData */
  );
  var c = t["!data"] != null, f = c ? t["!data"][o.s.r] : [], d = o.e.r;
  t["!rows"] && (d = Math.max(o.e.r, t["!rows"].length - 1));
  for (var u = o.s.r; u <= d; ++u)
    if (i = Be(u), c && (f = t["!data"][u]), Zd(e, t, o, u), !(c && !f)) {
      var h = !1;
      if (u <= o.e.r) for (var g = o.s.c; g <= o.e.c; ++g) {
        u === o.s.r && (s[g] = $e(g));
        var m = c ? f[g] : t[s[g] + i];
        if (!m) {
          h = !1;
          continue;
        }
        h = Zm(e, m, u, g, n, t, h, l);
      }
    }
  ee(
    e,
    146
    /* BrtEndSheetData */
  );
}
function tp(e, t) {
  !t || !t["!merges"] || (ee(e, 177, Um(t["!merges"].length)), t["!merges"].forEach(function(r) {
    ee(e, 176, Fm(r));
  }), ee(
    e,
    178
    /* BrtEndMergeCells */
  ));
}
function rp(e, t) {
  !t || !t["!cols"] || (ee(
    e,
    390
    /* BrtBeginColInfos */
  ), t["!cols"].forEach(function(r, n) {
    r && ee(e, 60, Hm(n, r));
  }), ee(
    e,
    391
    /* BrtEndColInfos */
  ));
}
function np(e, t) {
  !t || !t["!ref"] || (ee(
    e,
    648
    /* BrtBeginCellIgnoreECs */
  ), ee(e, 649, Jm(He(t["!ref"]))), ee(
    e,
    650
    /* BrtEndCellIgnoreECs */
  ));
}
function ap(e, t, r) {
  t["!links"].forEach(function(n) {
    if (n[1].Target) {
      var a = Pe(r, -1, n[1].Target.replace(/#[\s\S]*$/, ""), Ne.HLINK);
      ee(e, 494, Bm(n, a));
    }
  }), delete t["!links"];
}
function ip(e, t, r, n) {
  if (t["!comments"].length > 0) {
    var a = Pe(n, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", Ne.VML);
    ee(e, 551, Ti("rId" + a)), t["!legacy"] = a;
  }
}
function op(e, t, r, n) {
  if (t["!autofilter"]) {
    var a = t["!autofilter"], o = typeof a.ref == "string" ? a.ref : rt(a.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
    var i = r.Workbook.Names, s = ct(o);
    s.s.r == s.e.r && (s.e.r = ct(t["!ref"]).e.r, o = rt(s));
    for (var l = 0; l < i.length; ++l) {
      var c = i[l];
      if (c.Name == "_xlnm._FilterDatabase" && c.Sheet == n) {
        c.Ref = vn(r.SheetNames[n]) + "!" + gn(o);
        break;
      }
    }
    l == i.length && i.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: vn(r.SheetNames[n]) + "!" + gn(o) }), ee(e, 161, Gr(He(o))), ee(
      e,
      162
      /* BrtEndAFilter */
    );
  }
}
function sp(e, t, r) {
  ee(
    e,
    133
    /* BrtBeginWsViews */
  ), ee(e, 137, Ym(t, r)), ee(
    e,
    138
    /* BrtEndWsView */
  ), ee(
    e,
    134
    /* BrtEndWsViews */
  );
}
function lp(e, t) {
  t["!protect"] && ee(e, 535, Xm(t["!protect"]));
}
function cp(e, t, r, n) {
  var a = gt(), o = r.SheetNames[e], i = r.Sheets[o] || {}, s = o;
  try {
    r && r.Workbook && (s = r.Workbook.Sheets[e].CodeName || s);
  } catch {
  }
  var l = He(i["!ref"] || "A1");
  if (l.e.c > 16383 || l.e.r > 1048575) {
    if (t.WTF) throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    l.e.c = Math.min(l.e.c, 16383), l.e.r = Math.min(l.e.c, 1048575);
  }
  return i["!links"] = [], i["!comments"] = [], ee(
    a,
    129
    /* BrtBeginSheet */
  ), (r.vbaraw || i["!outline"]) && ee(a, 147, am(s, i["!outline"])), ee(a, 148, tm(l)), sp(a, i, r.Workbook), rp(a, i), ep(a, i, e, t, r), lp(a, i), op(a, i, r, e), tp(a, i), ap(a, i, n), i["!margins"] && ee(a, 476, Gm(i["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && np(a, i), ip(a, i, e, n), ee(
    a,
    130
    /* BrtEndSheet */
  ), a.end();
}
function fp(e, t) {
  e.l += 10;
  var r = vt(e);
  return { name: r };
}
var up = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
];
function hp(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : Ou(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var dp = /* @__PURE__ */ ":][*?/\\".split("");
function vl(e, t) {
  try {
    if (e == "") throw new Error("Sheet name cannot be blank");
    if (e.length > 31) throw new Error("Sheet name cannot exceed 31 chars");
    if (e.charCodeAt(0) == 39 || e.charCodeAt(e.length - 1) == 39) throw new Error("Sheet name cannot start or end with apostrophe (')");
    if (e.toLowerCase() == "history") throw new Error("Sheet name cannot be 'History'");
    dp.forEach(function(r) {
      if (e.indexOf(r) != -1)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
    });
  } catch (r) {
    throw r;
  }
  return !0;
}
function mp(e, t, r) {
  e.forEach(function(n, a) {
    vl(n);
    for (var o = 0; o < a; ++o) if (n == e[o]) throw new Error("Duplicate Sheet Name: " + n);
    if (r) {
      var i = t && t[a] && t[a].CodeName || n;
      if (i.charCodeAt(0) == 95 && i.length > 22) throw new Error("Bad Code Name: Worksheet" + i);
    }
  });
}
function pp(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
  if (!e.SheetNames.length) throw new Error("Workbook is empty");
  var t = e.Workbook && e.Workbook.Sheets || [];
  mp(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r) Ud(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
  e.SheetNames.forEach(function(n, a) {
    var o = e.Sheets[n];
    if (!(!o || !o["!autofilter"])) {
      var i;
      e.Workbook || (e.Workbook = {}), e.Workbook.Names || (e.Workbook.Names = []), e.Workbook.Names.forEach(function(l) {
        l.Name == "_xlnm._FilterDatabase" && l.Sheet == a && (i = l);
      });
      var s = vn(n) + "!" + gn(o["!autofilter"].ref);
      i ? i.Ref = s : e.Workbook.Names.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: s });
    }
  });
}
function gp(e) {
  var t = [nt];
  t[t.length] = oe("workbook", null, {
    xmlns: Vr[0],
    //'xmlns:mx': XMLNS.mx,
    //'xmlns:s': XMLNS_main[0],
    "xmlns:r": ot.r
  });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0, n = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (up.forEach(function(s) {
    e.Workbook.WBProps[s[0]] != null && e.Workbook.WBProps[s[0]] != s[1] && (n[s[0]] = e.Workbook.WBProps[s[0]]);
  }), e.Workbook.WBProps.CodeName && (n.codeName = e.Workbook.WBProps.CodeName, delete n.CodeName)), t[t.length] = oe("workbookPr", null, n);
  var a = e.Workbook && e.Workbook.Sheets || [], o = 0;
  if (a && a[0] && a[0].Hidden) {
    for (t[t.length] = "<bookViews>", o = 0; o != e.SheetNames.length && !(!a[o] || !a[o].Hidden); ++o)
      ;
    o == e.SheetNames.length && (o = 0), t[t.length] = '<workbookView firstSheet="' + o + '" activeTab="' + o + '"/>', t[t.length] = "</bookViews>";
  }
  for (t[t.length] = "<sheets>", o = 0; o != e.SheetNames.length; ++o) {
    var i = { name: Ce(e.SheetNames[o].slice(0, 31)) };
    if (i.sheetId = "" + (o + 1), i["r:id"] = "rId" + (o + 1), a[o]) switch (a[o].Hidden) {
      case 1:
        i.state = "hidden";
        break;
      case 2:
        i.state = "veryHidden";
        break;
    }
    t[t.length] = oe("sheet", null, i);
  }
  return t[t.length] = "</sheets>", r && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(s) {
    var l = { name: s.Name };
    s.Comment && (l.comment = s.Comment), s.Sheet != null && (l.localSheetId = "" + s.Sheet), s.Hidden && (l.hidden = "1"), s.Ref && (t[t.length] = oe("definedName", Ce(s.Ref), l));
  }), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function vp(e, t) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = ei(e), r.name = vt(e), r;
}
function bp(e, t) {
  return t || (t = j(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), Ti(e.strRelID, t), it(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t;
}
function wp(e, t) {
  var r = {}, n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var a = t > 8 ? vt(e) : "";
  return a.length > 0 && (r.CodeName = a), r.autoCompressPictures = !!(n & 65536), r.backupFile = !!(n & 64), r.checkCompatibility = !!(n & 4096), r.date1904 = !!(n & 1), r.filterPrivacy = !!(n & 8), r.hidePivotFieldList = !!(n & 1024), r.promptedSolutions = !!(n & 16), r.publishItems = !!(n & 2048), r.refreshAllConnections = !!(n & 262144), r.saveExternalLinkValues = !!(n & 128), r.showBorderUnselectedTables = !!(n & 4), r.showInkAnnotation = !!(n & 32), r.showObjects = ["all", "placeholders", "none"][n >> 13 & 3], r.showPivotChartFilter = !!(n & 32768), r.updateLinks = ["userSet", "never", "always"][n >> 8 & 3], r;
}
function yp(e, t) {
  t || (t = j(72));
  var r = 0;
  return e && (e.date1904 && (r |= 1), e.filterPrivacy && (r |= 8)), t.write_shift(4, r), t.write_shift(4, 0), Ms(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l);
}
function Tp(e, t, r) {
  var n = e.l + t, a = e.read_shift(4);
  e.l += 1;
  var o = e.read_shift(4), i = qu(e), s, l = "";
  try {
    s = Ed(e, 0, r);
    try {
      l = ga(e);
    } catch {
    }
  } catch {
    console.error("Could not parse defined name " + i);
  }
  a & 32 && (i = "_xlnm." + i), e.l = n;
  var c = { Name: i, Ptg: s, Flags: a };
  return o < 268435455 && (c.Sheet = o), l && (c.Comment = l), c;
}
function Ep(e, t) {
  var r = j(9), n = 0, a = e.Name;
  ch.indexOf(a) > -1 && (n |= 32, a = a.slice(6)), r.write_shift(4, n), r.write_shift(1, 0), r.write_shift(4, e.Sheet == null ? 4294967295 : e.Sheet);
  var o = [
    r,
    it(a),
    Md(e.Ref, t)
  ];
  if (e.Comment) o.push(bn(e.Comment));
  else {
    var i = j(4);
    i.write_shift(4, 4294967295), o.push(i);
  }
  return et(o);
}
function Sp(e, t) {
  ee(
    e,
    143
    /* BrtBeginBundleShs */
  );
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var n = t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0, a = { Hidden: n, iTabID: r + 1, strRelID: "rId" + (r + 1), name: t.SheetNames[r] };
    ee(e, 156, bp(a));
  }
  ee(
    e,
    144
    /* BrtEndBundleShs */
  );
}
function kp(e, t) {
  t || (t = j(127));
  for (var r = 0; r != 4; ++r) t.write_shift(4, 0);
  return it("SheetJS", t), it(Hn.version, t), it(Hn.version, t), it("7262", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function xp(e, t) {
  t || (t = j(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e);
  var r = 120;
  return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t;
}
function _p(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, n = 0, a = -1, o = -1; n < r.length; ++n)
      !r[n] || !r[n].Hidden && a == -1 ? a = n : r[n].Hidden == 1 && o == -1 && (o = n);
    o > a || (ee(
      e,
      135
      /* BrtBeginBookViews */
    ), ee(e, 158, xp(a)), ee(
      e,
      136
      /* BrtEndBookViews */
    ));
  }
}
function Op(e, t) {
  !t.Workbook || !t.Workbook.Names || t.Workbook.Names.forEach(function(r) {
    try {
      if (r.Flags & 14) return;
      ee(e, 39, Ep(r, t));
    } catch {
      console.error("Could not serialize defined name " + JSON.stringify(r));
    }
  });
}
function Ap(e) {
  var t = e.SheetNames.length, r = j(12 * t + 28);
  r.write_shift(4, t + 2), r.write_shift(4, 0), r.write_shift(4, -2), r.write_shift(4, -2), r.write_shift(4, 0), r.write_shift(4, -1), r.write_shift(4, -1);
  for (var n = 0; n < t; ++n)
    r.write_shift(4, 0), r.write_shift(4, n), r.write_shift(4, n);
  return r;
}
function Cp(e, t) {
  ee(
    e,
    353
    /* BrtBeginExternals */
  ), ee(
    e,
    357
    /* BrtSupSelf */
  ), ee(e, 362, Ap(t)), ee(
    e,
    354
    /* BrtEndExternals */
  );
}
function Dp(e, t) {
  var r = gt();
  return ee(
    r,
    131
    /* BrtBeginBook */
  ), ee(r, 128, kp()), ee(r, 153, yp(e.Workbook && e.Workbook.WBProps || null)), _p(r, e), Sp(r, e), Cp(r, e), (e.Workbook || {}).Names && Op(r, e), ee(
    r,
    132
    /* BrtEndBook */
  ), r.end();
}
function Rp(e, t) {
  var r = [];
  return e.Props && r.push(mh(e.Props, t)), e.Custprops && r.push(ph(e.Props, e.Custprops)), r.join("");
}
function Np(e) {
  return (((e || {}).Workbook || {}).WBProps || {}).date1904 ? '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"><Date1904/></ExcelWorkbook>' : "";
}
function Lp(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return t.cellXfs.forEach(function(n, a) {
    var o = [];
    o.push(oe("NumberFormat", null, { "ss:Format": Ce(Ve[n.numFmtId]) }));
    var i = (
      /*::(*/
      { "ss:ID": "s" + (21 + a) }
    );
    r.push(oe("Style", o.join(""), i));
  }), oe("Styles", r.join(""));
}
function bl(e) {
  return oe("NamedRange", null, { "ss:Name": e.Name.slice(0, 6) == "_xlnm." ? e.Name.slice(6) : e.Name, "ss:RefersTo": "=" + ba(e.Ref, { r: 0, c: 0 }) });
}
function Mp(e) {
  if (!((e || {}).Workbook || {}).Names) return "";
  for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
    var a = t[n];
    a.Sheet == null && (a.Name.match(/^_xlfn\./) || r.push(bl(a)));
  }
  return oe("Names", r.join(""));
}
function Ip(e, t, r, n) {
  if (!e || !((n || {}).Workbook || {}).Names) return "";
  for (var a = n.Workbook.Names, o = [], i = 0; i < a.length; ++i) {
    var s = a[i];
    s.Sheet == r && (s.Name.match(/^_xlfn\./) || o.push(bl(s)));
  }
  return o.join("");
}
function Pp(e, t, r, n) {
  if (!e) return "";
  var a = [];
  if (e["!margins"] && (a.push("<PageSetup>"), e["!margins"].header && a.push(oe("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && a.push(oe("Footer", null, { "x:Margin": e["!margins"].footer })), a.push(oe("PageMargins", null, {
    "x:Bottom": e["!margins"].bottom || "0.75",
    "x:Left": e["!margins"].left || "0.7",
    "x:Right": e["!margins"].right || "0.7",
    "x:Top": e["!margins"].top || "0.75"
  })), a.push("</PageSetup>")), n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[r])
    if (n.Workbook.Sheets[r].Hidden) a.push(oe("Visible", n.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
    else {
      for (var o = 0; o < r && !(n.Workbook.Sheets[o] && !n.Workbook.Sheets[o].Hidden); ++o) ;
      o == r && a.push("<Selected/>");
    }
  return ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL && a.push("<DisplayRightToLeft/>"), e["!protect"] && (a.push(lt("ProtectContents", "True")), e["!protect"].objects && a.push(lt("ProtectObjects", "True")), e["!protect"].scenarios && a.push(lt("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? a.push(lt("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && a.push(lt("EnableSelection", "UnlockedCells")), [
    ["formatCells", "AllowFormatCells"],
    ["formatColumns", "AllowSizeCols"],
    ["formatRows", "AllowSizeRows"],
    ["insertColumns", "AllowInsertCols"],
    ["insertRows", "AllowInsertRows"],
    ["insertHyperlinks", "AllowInsertHyperlinks"],
    ["deleteColumns", "AllowDeleteCols"],
    ["deleteRows", "AllowDeleteRows"],
    ["sort", "AllowSort"],
    ["autoFilter", "AllowFilter"],
    ["pivotTables", "AllowUsePivotTables"]
  ].forEach(function(i) {
    e["!protect"][i[0]] && a.push("<" + i[1] + "/>");
  })), a.length == 0 ? "" : oe("WorksheetOptions", a.join(""), { xmlns: Rt.x });
}
function Fp(e) {
  return e.map(function(t) {
    var r = _u(t.t || ""), n = oe("ss:Data", r, { xmlns: "http://www.w3.org/TR/REC-html40" }), a = {};
    return t.a && (a["ss:Author"] = t.a), e.hidden || (a["ss:ShowAlways"] = "1"), oe("Comment", n, a);
  }).join("");
}
function Up(e, t, r, n, a, o, i) {
  if (!e || e.v == null && e.f == null) return "";
  var s = {};
  if (e.f && (s["ss:Formula"] = "=" + Ce(ba(e.f, i))), e.F && e.F.slice(0, t.length) == t) {
    var l = Ke(e.F.slice(t.length + 1));
    s["ss:ArrayRange"] = "RC:R" + (l.r == i.r ? "" : "[" + (l.r - i.r) + "]") + "C" + (l.c == i.c ? "" : "[" + (l.c - i.c) + "]");
  }
  if (e.l && e.l.Target && (s["ss:HRef"] = Ce(e.l.Target), e.l.Tooltip && (s["x:HRefScreenTip"] = Ce(e.l.Tooltip))), r["!merges"])
    for (var c = r["!merges"], f = 0; f != c.length; ++f)
      c[f].s.c != i.c || c[f].s.r != i.r || (c[f].e.c > c[f].s.c && (s["ss:MergeAcross"] = c[f].e.c - c[f].s.c), c[f].e.r > c[f].s.r && (s["ss:MergeDown"] = c[f].e.r - c[f].s.r));
  var d = "", u = "";
  switch (e.t) {
    case "z":
      if (!n.sheetStubs) return "";
      break;
    case "n":
      isFinite(e.v) ? (d = "Number", u = String(e.v)) : (d = "Error", u = kt[isNaN(e.v) ? 36 : 7]);
      break;
    case "b":
      d = "Boolean", u = e.v ? "1" : "0";
      break;
    case "e":
      d = "Error", u = kt[e.v];
      break;
    case "d":
      d = "DateTime", u = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || Ve[14]);
      break;
    case "s":
      d = "String", u = xu(e.v || "");
      break;
  }
  var h = hr(n.cellXfs, e, n);
  s["ss:StyleID"] = "s" + (21 + h), s["ss:Index"] = i.c + 1;
  var g = e.v != null ? u : "", m = e.t == "z" ? "" : '<Data ss:Type="' + d + '">' + g + "</Data>";
  return (e.c || []).length > 0 && (m += Fp(e.c)), oe("Cell", m, s);
}
function $p(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return t && (t.hpt && !t.hpx && (t.hpx = tl(t.hpt)), t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (r += ' ss:Hidden="1"')), r + ">";
}
function Bp(e, t, r, n) {
  if (!e["!ref"]) return "";
  var a = He(e["!ref"]), o = e["!merges"] || [], i = 0, s = [];
  e["!cols"] && e["!cols"].forEach(function(p, w) {
    ki(p);
    var O = !!p.width, y = Ta(w, p), B = { "ss:Index": w + 1 };
    O && (B["ss:Width"] = ta(y.width)), p.hidden && (B["ss:Hidden"] = "1"), s.push(oe("Column", null, B));
  });
  for (var l = e["!data"] != null, c = { r: 0, c: 0 }, f = a.s.r; f <= a.e.r; ++f) {
    var d = [$p(f, (e["!rows"] || [])[f])];
    c.r = f;
    for (var u = a.s.c; u <= a.e.c; ++u) {
      c.c = u;
      var h = !1;
      for (i = 0; i != o.length; ++i)
        if (!(o[i].s.c > u) && !(o[i].s.r > f) && !(o[i].e.c < u) && !(o[i].e.r < f)) {
          (o[i].s.c != u || o[i].s.r != f) && (h = !0);
          break;
        }
      if (!h) {
        var g = $e(u) + Be(f), m = l ? (e["!data"][f] || [])[u] : e[g];
        d.push(Up(m, g, e, t, r, n, c));
      }
    }
    d.push("</Row>"), d.length > 2 && s.push(d.join(""));
  }
  return s.join("");
}
function zp(e, t, r) {
  var n = [], a = r.SheetNames[e], o = r.Sheets[a], i = o ? Ip(o, t, e, r) : "";
  return i.length > 0 && n.push("<Names>" + i + "</Names>"), i = o ? Bp(o, t, e, r) : "", i.length > 0 && n.push("<Table>" + i + "</Table>"), n.push(Pp(o, t, e, r)), o && o["!autofilter"] && n.push('<AutoFilter x:Range="' + ba(gn(o["!autofilter"].ref), { r: 0, c: 0 }) + '" xmlns="urn:schemas-microsoft-com:office:excel"></AutoFilter>'), n.join("");
}
function Wp(e, t) {
  t || (t = {}), e.SSF || (e.SSF = bt(Ve)), e.SSF && (da(), ha(e.SSF), t.revssf = ma(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], hr(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(Rp(e, t)), r.push(Np(e)), r.push(""), r.push(Mp(e));
  for (var n = 0; n < e.SheetNames.length; ++n)
    r.push(oe("Worksheet", zp(n, t, e), { "ss:Name": Ce(e.SheetNames[n]) }));
  return r[2] = Lp(e, t), nt + oe("Workbook", r.join(""), {
    xmlns: Rt.ss,
    "xmlns:o": Rt.o,
    "xmlns:x": Rt.x,
    "xmlns:ss": Rt.ss,
    "xmlns:dt": Rt.dt,
    "xmlns:html": Rt.html
  });
}
var $a = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function Vp(e, t) {
  var r = [], n = [], a = [], o = 0, i, s = fo(Eo, "n"), l = fo(So, "n");
  if (e.Props)
    for (i = tt(e.Props), o = 0; o < i.length; ++o) (Object.prototype.hasOwnProperty.call(s, i[o]) ? r : Object.prototype.hasOwnProperty.call(l, i[o]) ? n : a).push([i[o], e.Props[i[o]]]);
  if (e.Custprops)
    for (i = tt(e.Custprops), o = 0; o < i.length; ++o) Object.prototype.hasOwnProperty.call(e.Props || {}, i[o]) || (Object.prototype.hasOwnProperty.call(s, i[o]) ? r : Object.prototype.hasOwnProperty.call(l, i[o]) ? n : a).push([i[o], e.Custprops[i[o]]]);
  var c = [];
  for (o = 0; o < a.length; ++o)
    Gs.indexOf(a[o][0]) > -1 || Vs.indexOf(a[o][0]) > -1 || a[o][1] != null && c.push(a[o]);
  n.length && ze.utils.cfb_add(t, "/SummaryInformation", Ao(n, $a.SI, l, So)), (r.length || c.length) && ze.utils.cfb_add(t, "/DocumentSummaryInformation", Ao(r, $a.DSI, s, Eo, c.length ? c : null, $a.UDI));
}
function Hp(e, t) {
  var r = t || {}, n = ze.utils.cfb_new({ root: "R" }), a = "/Workbook";
  switch (r.bookType || "xls") {
    case "xls":
      r.bookType = "biff8";
    /* falls through */
    case "xla":
      r.bookType || (r.bookType = "xla");
    /* falls through */
    case "biff8":
      a = "/Workbook", r.biff = 8;
      break;
    case "biff5":
      a = "/Book", r.biff = 5;
      break;
    default:
      throw new Error("invalid type " + r.bookType + " for XLS CFB");
  }
  return ze.utils.cfb_add(n, a, yl(e, r)), r.biff == 8 && (e.Props || e.Custprops) && Vp(e, n), r.biff == 8 && e.vbaraw && e1(n, ze.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), n;
}
var jp = {
  0: {
    /* n:"BrtRowHdr", */
    f: qd
  },
  1: {
    /* n:"BrtCellBlank", */
    f: im
  },
  2: {
    /* n:"BrtCellRk", */
    f: Sm
  },
  3: {
    /* n:"BrtCellError", */
    f: dm
  },
  4: {
    /* n:"BrtCellBool", */
    f: cm
  },
  5: {
    /* n:"BrtCellReal", */
    f: wm
  },
  6: {
    /* n:"BrtCellSt", */
    f: Am
  },
  7: {
    /* n:"BrtCellIsst", */
    f: pm
  },
  8: {
    /* n:"BrtFmlaString", */
    f: Im
  },
  9: {
    /* n:"BrtFmlaNum", */
    f: Mm
  },
  10: {
    /* n:"BrtFmlaBool", */
    f: Nm
  },
  11: {
    /* n:"BrtFmlaError", */
    f: Lm
  },
  12: {
    /* n:"BrtShortBlank", */
    f: sm
  },
  13: {
    /* n:"BrtShortRk", */
    f: xm
  },
  14: {
    /* n:"BrtShortError", */
    f: mm
  },
  15: {
    /* n:"BrtShortBool", */
    f: um
  },
  16: {
    /* n:"BrtShortReal", */
    f: Tm
  },
  17: {
    /* n:"BrtShortSt", */
    f: Dm
  },
  18: {
    /* n:"BrtShortIsst", */
    f: vm
  },
  19: {
    /* n:"BrtSSTItem", */
    f: yi
  },
  20: {
    /* n:"BrtPCDIMissing" */
  },
  21: {
    /* n:"BrtPCDINumber" */
  },
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  23: {
    /* n:"BrtPCDIError" */
  },
  24: {
    /* n:"BrtPCDIString" */
  },
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  26: {
    /* n:"BrtPCDIIndex" */
  },
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  28: {
    /* n:"BrtPCDIANumber" */
  },
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  30: {
    /* n:"BrtPCDIAError" */
  },
  31: {
    /* n:"BrtPCDIAString" */
  },
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  33: {
    /* n:"BrtPCRRecord" */
  },
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  39: {
    /* n:"BrtName", */
    f: Tp
  },
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  42: {
    /* n:"BrtIndexBlock" */
  },
  43: {
    /* n:"BrtFont", */
    f: w0
  },
  44: {
    /* n:"BrtFmt", */
    f: v0
  },
  45: {
    /* n:"BrtFill", */
    f: E0
  },
  46: {
    /* n:"BrtBorder", */
    f: k0
  },
  47: {
    /* n:"BrtXF", */
    f: S0
  },
  48: {
    /* n:"BrtStyle" */
  },
  49: {
    /* n:"BrtCellMeta", */
    f: Hu
  },
  50: {
    /* n:"BrtValueMeta" */
  },
  51: {
    /* n:"BrtMdb" */
    f: B0
  },
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  59: {
    /* n:"BrtStr" */
  },
  60: {
    /* n:"BrtColInfo", */
    f: Jh
  },
  62: {
    /* n:"BrtCellRString", */
    f: Om
  },
  63: {
    /* n:"BrtCalcChainItem$", */
    f: K0
  },
  64: {
    /* n:"BrtDVal", */
    f: qm
  },
  65: {
    /* n:"BrtSxvcellNum" */
  },
  66: {
    /* n:"BrtSxvcellStr" */
  },
  67: {
    /* n:"BrtSxvcellBool" */
  },
  68: {
    /* n:"BrtSxvcellErr" */
  },
  69: {
    /* n:"BrtSxvcellDate" */
  },
  70: {
    /* n:"BrtSxvcellNil" */
  },
  128: {
    /* n:"BrtFileVersion" */
  },
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: Yt,
    p: 0
  },
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: Km
  },
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  147: {
    /* n:"BrtWsProp", */
    f: nm
  },
  148: {
    /* n:"BrtWsDim", */
    f: em,
    p: 16
  },
  151: {
    /* n:"BrtPane", */
    f: zm
  },
  152: {
    /* n:"BrtSel" */
  },
  153: {
    /* n:"BrtWbProp", */
    f: wp
  },
  154: {
    /* n:"BrtWbFactoid" */
  },
  155: {
    /* n:"BrtFileRecover" */
  },
  156: {
    /* n:"BrtBundleSh", */
    f: vp
  },
  157: {
    /* n:"BrtCalcProp" */
  },
  158: {
    /* n:"BrtBookView" */
  },
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: o0
  },
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: Ar
  },
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  167: {
    /* n:"BrtFilter" */
  },
  168: {
    /* n:"BrtColorFilter" */
  },
  169: {
    /* n:"BrtIconFilter" */
  },
  170: {
    /* n:"BrtTop10Filter" */
  },
  171: {
    /* n:"BrtDynamicFilter" */
  },
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  174: {
    /* n:"BrtCustomFilter" */
  },
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  176: {
    /* n:"BrtMergeCell", */
    f: Pm
  },
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  335: {
    /* n:"BrtMdtinfo", */
    f: U0
  },
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  337: {
    /* n:"BrtBeginEsmdb", */
    f: V0,
    T: 1
  },
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  351: {
    /* n:"BrtListCCFmla" */
  },
  352: {
    /* n:"BrtListTrFmla" */
  },
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  355: {
    /* n:"BrtSupBookSrc", */
    f: ei
  },
  357: {
    /* n:"BrtSupSelf" */
  },
  358: {
    /* n:"BrtSupSame" */
  },
  359: {
    /* n:"BrtSupTabs" */
  },
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  361: {
    /* n:"BrtPlaceholderName" */
  },
  362: {
    /* n:"BrtExternSheet", */
    f: Vh
  },
  363: {
    /* n:"BrtExternTableStart" */
  },
  364: {
    /* n:"BrtExternTableEnd" */
  },
  366: {
    /* n:"BrtExternRowHdr" */
  },
  367: {
    /* n:"BrtExternCellBlank" */
  },
  368: {
    /* n:"BrtExternCellReal" */
  },
  369: {
    /* n:"BrtExternCellBool" */
  },
  370: {
    /* n:"BrtExternCellError" */
  },
  371: {
    /* n:"BrtExternCellString" */
  },
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  396: {
    /* n:"BrtBrk" */
  },
  397: {
    /* n:"BrtUserBookView" */
  },
  398: {
    /* n:"BrtInfo" */
  },
  399: {
    /* n:"BrtCUsr" */
  },
  400: {
    /* n:"BrtUsr" */
  },
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  403: {
    /* n:"BrtEOF" */
  },
  404: {
    /* n:"BrtUCR" */
  },
  405: {
    /* n:"BrtRRInsDel" */
  },
  406: {
    /* n:"BrtRREndInsDel" */
  },
  407: {
    /* n:"BrtRRMove" */
  },
  408: {
    /* n:"BrtRREndMove" */
  },
  409: {
    /* n:"BrtRRChgCell" */
  },
  410: {
    /* n:"BrtRREndChgCell" */
  },
  411: {
    /* n:"BrtRRHeader" */
  },
  412: {
    /* n:"BrtRRUserView" */
  },
  413: {
    /* n:"BrtRRRenSheet" */
  },
  414: {
    /* n:"BrtRRInsertSh" */
  },
  415: {
    /* n:"BrtRRDefName" */
  },
  416: {
    /* n:"BrtRRNote" */
  },
  417: {
    /* n:"BrtRRConflict" */
  },
  418: {
    /* n:"BrtRRTQSIF" */
  },
  419: {
    /* n:"BrtRRFormat" */
  },
  420: {
    /* n:"BrtRREndFormat" */
  },
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  426: {
    /* n:"BrtArrFmla", */
    f: Wm
  },
  427: {
    /* n:"BrtShrFmla", */
    f: Vm
  },
  428: {
    /* n:"BrtTable" */
  },
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  471: {
    /* n:"BrtCFVO" */
  },
  472: {
    /* n:"BrtExternValueMeta" */
  },
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  475: {
    /* n:"BrtIndexedColor" */
  },
  476: {
    /* n:"BrtMargins", */
    f: jm
  },
  477: {
    /* n:"BrtPrintOptions" */
  },
  478: {
    /* n:"BrtPageSetup" */
  },
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  485: {
    /* n:"BrtWsFmtInfo", */
    f: rm
  },
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  494: {
    /* n:"BrtHLink", */
    f: $m
  },
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  499: {
    /* n:"BrtDRef" */
  },
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  504: {
    /* n:"BrtSlc" */
  },
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  507: {
    /* n:"BrtDXF" */
  },
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  512: {
    /* n:"BrtTableStyleElement" */
  },
  513: {
    /* n:"BrtTableStyleClient" */
  },
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  522: {
    /* n:"BrtVolSubtopic" */
  },
  523: {
    /* n:"BrtVolRef" */
  },
  524: {
    /* n:"BrtVolNum" */
  },
  525: {
    /* n:"BrtVolErr" */
  },
  526: {
    /* n:"BrtVolStr" */
  },
  527: {
    /* n:"BrtVolBool" */
  },
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  534: {
    /* n:"BrtBookProtection" */
  },
  535: {
    /* n:"BrtSheetProtection" */
  },
  536: {
    /* n:"BrtRangeProtection" */
  },
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  548: {
    /* n:"BrtFileSharing" */
  },
  549: {
    /* n:"BrtOleSize" */
  },
  550: {
    /* n:"BrtDrawing", */
    f: ei
  },
  551: {
    /* n:"BrtLegacyDrawing", */
    f: ga
  },
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  553: {
    /* n:"BrtWebOpt" */
  },
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  562: {
    /* n:"BrtBkHim" */
  },
  564: {
    /* n:"BrtColor" */
  },
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  572: {
    /* n:"BrtMRUColor" */
  },
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  577: {
    /* n:"BrtSupNameStart" */
  },
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  580: {
    /* n:"BrtSupNameNum" */
  },
  581: {
    /* n:"BrtSupNameErr" */
  },
  582: {
    /* n:"BrtSupNameSt" */
  },
  583: {
    /* n:"BrtSupNameNil" */
  },
  584: {
    /* n:"BrtSupNameBool" */
  },
  585: {
    /* n:"BrtSupNameFmla" */
  },
  586: {
    /* n:"BrtSupNameBits" */
  },
  587: {
    /* n:"BrtSupNameEnd" */
  },
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  596: {
    /* n:"BrtSmartTagType" */
  },
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  607: {
    /* n:"BrtCellWatch" */
  },
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  610: {
    /* n:"BrtCrashRecErr" */
  },
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  625: {
    /* n:"BrtBigName" */
  },
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  632: {
    /* n:"BrtCommentAuthor", */
    f: Q0
  },
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: X0
  },
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  637: {
    /* n:"BrtCommentText", */
    f: Yu
  },
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  639: {
    /* n:"BrtOleObject" */
  },
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  644: {
    /* n:"BrtActiveX" */
  },
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  651: {
    /* n:"BrtCsProp", */
    f: fp
  },
  652: {
    /* n:"BrtCsPageSetup" */
  },
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  661: {
    /* n:"BrtListPart" */
  },
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  665: {
    /* n:"BrtFnGroup" */
  },
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  667: {
    /* n:"BrtSupAddin" */
  },
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  669: {
    /* n:"BrtCsProtection" */
  },
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  675: {
    /* n:"BrtRRSortItem" */
  },
  676: {
    /* n:"BrtFileSharingIso" */
  },
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  681: {
    /* n:"BrtDValList" */
  },
  1024: {
    /* n:"BrtRwDescent" */
  },
  1025: {
    /* n:"BrtKnownFonts" */
  },
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  1036: {
    /* n:"BrtNameExt" */
  },
  1037: {
    /* n:"BrtPCDH14" */
  },
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  1040: {
    /* n:"BrtSXTH14" */
  },
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  1043: {
    /* n:"BrtSparkline" */
  },
  1044: {
    /* n:"BrtSXDI14" */
  },
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  1050: {
    /* n:"BrtCFVO14" */
  },
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  1053: {
    /* n:"BrtDVal14", */
    f: Qm
  },
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  1055: {
    /* n:"BrtColor14" */
  },
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  1061: {
    /* n:"BrtSXVD14" */
  },
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  1111: {
    /* n:"BrtList14" */
  },
  1112: {
    /* n:"BrtCFIcon" */
  },
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  1117: {
    /* n:"BrtWbProp14" */
  },
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  1141: {
    /* n:"BrtPCDField14" */
  },
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  1171: {
    /* n:"BrtDxf14" */
  },
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  1177: {
    /* n:"BrtFilter14" */
  },
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  1181: {
    /* n:"BrtIconFilter14" */
  },
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  2067: {
    /* n:"BrtQsi15" */
  },
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  2070: {
    /* n:"BrtWebExtension" */
  },
  2071: {
    /* n:"BrtAbsPath15" */
  },
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  2079: {
    /* n:"BrtSxFilter15" */
  },
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  2092: {
    /* n:"BrtPCDH15" */
  },
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  2102: {
    /* n:"BrtDxf15" */
  },
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  2115: {
    /* n:"BrtTextPr15" */
  },
  2116: {
    /* n:"BrtRangePr15" */
  },
  2117: {
    /* n:"BrtDbCommand15" */
  },
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  2120: {
    /* n:"BrtDbTable15" */
  },
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  2125: {
    /* n:"BrtModelTable" */
  },
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  2128: {
    /* n:"BrtModelRelationship" */
  },
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  2136: {
    /* n:"BrtSXDI15" */
  },
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  3072: {
    /* n:"BrtUid" */
  },
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  5083: {
    /* n:"BrtRichFilter" */
  },
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  5097: {
    /* n:"BrtCalcFeature" */
  },
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  65535: { n: "" }
};
function re(e, t, r, n) {
  var a = t;
  if (!isNaN(a)) {
    var o = n || (r || []).length || 0, i = e.next(4);
    i.write_shift(2, a), i.write_shift(2, o), /*:: len != null &&*/
    o > 0 && vi(r) && e.push(r);
  }
}
function Gp(e, t, r, n) {
  var a = (r || []).length || 0;
  if (a <= 8224) return re(e, t, r, a);
  var o = t;
  if (!isNaN(o)) {
    for (var i = r.parts || [], s = 0, l = 0, c = 0; c + (i[s] || 8224) <= 8224; )
      c += i[s] || 8224, s++;
    var f = e.next(4);
    for (f.write_shift(2, o), f.write_shift(2, c), e.push(r.slice(l, l + c)), l += c; l < a; ) {
      for (f = e.next(4), f.write_shift(2, 60), c = 0; c + (i[s] || 8224) <= 8224; )
        c += i[s] || 8224, s++;
      f.write_shift(2, c), e.push(r.slice(l, l + c)), l += c;
    }
  }
}
function Ba(e, t, r, n) {
  var a = j(9);
  return kn(a, e, t), Ks(r, n || "b", a), a;
}
function Kp(e, t, r) {
  var n = j(8 + 2 * r.length);
  return kn(n, e, t), n.write_shift(1, r.length), n.write_shift(r.length, r, "sbcs"), n.l < n.length ? n.slice(0, n.l) : n;
}
function wl(e, t) {
  t.forEach(function(r) {
    var n = r[0].map(function(o) {
      return o.t;
    }).join("");
    if (n.length <= 2048) return re(e, 28, Ia(n, r[1], r[2]));
    re(e, 28, Ia(n.slice(0, 2048), r[1], r[2], n.length));
    for (var a = 2048; a < n.length; a += 2048)
      re(e, 28, Ia(n.slice(a, Math.min(a + 2048, n.length)), -1, -1, Math.min(2048, n.length - a)));
  });
}
function Yp(e, t, r, n, a, o) {
  var i = 0;
  t.z != null && (i = a._BIFF2FmtTable.indexOf(t.z), i == -1 && (a._BIFF2FmtTable.push(t.z), i = a._BIFF2FmtTable.length - 1));
  var s = 0;
  if (t.z != null) {
    for (; s < a.cellXfs.length && a.cellXfs[s].numFmtId != i; ++s) ;
    s == a.cellXfs.length && a.cellXfs.push({ numFmtId: i });
  }
  if (t.v != null) switch (t.t) {
    case "d":
    case "n":
      var l = t.t == "d" ? ft(Ot(t.v, o), o) : t.v;
      a.biff == 2 && l == (l | 0) && l >= 0 && l < 65536 ? re(e, 2, Zh(r, n, l, s, i)) : isNaN(l) ? re(e, 5, Ba(r, n, 36, "e")) : isFinite(l) ? re(e, 3, Qh(r, n, l, s, i)) : re(e, 5, Ba(r, n, 7, "e"));
      return;
    case "b":
    case "e":
      re(e, 5, Ba(r, n, t.v, t.t));
      return;
    /* TODO: codepage, sst */
    case "s":
    case "str":
      re(e, 4, Kp(r, n, t.v == null ? "" : String(t.v).slice(0, 255)));
      return;
  }
  re(e, 1, kn(null, r, n));
}
function Jp(e, t, r, n, a) {
  var o = t["!data"] != null, i = He(t["!ref"] || "A1"), s = "", l = [];
  if (i.e.c > 255 || i.e.r > 16383) {
    if (n.WTF) throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    i.e.c = Math.min(i.e.c, 255), i.e.r = Math.min(i.e.r, 16383);
  }
  for (var c = (((a || {}).Workbook || {}).WBProps || {}).date1904, f = [], d = [], u = i.s.c; u <= i.e.c; ++u) l[u] = $e(u);
  for (var h = i.s.r; h <= i.e.r; ++h)
    for (o && (f = t["!data"][h] || []), s = Be(h), u = i.s.c; u <= i.e.c; ++u) {
      var g = o ? f[u] : t[l[u] + s];
      g && (Yp(e, g, h, u, n, c), g.c && d.push([g.c, h, u]));
    }
  wl(e, d);
}
function Xp(e, t) {
  for (var r = t || {}, n = gt(), a = 0, o = 0; o < e.SheetNames.length; ++o) e.SheetNames[o] == r.sheet && (a = o);
  if (a == 0 && r.sheet && e.SheetNames[0] != r.sheet) throw new Error("Sheet not found: " + r.sheet);
  re(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, Si(e, 16, r)), ((e.Workbook || {}).WBProps || {}).date1904 && re(n, 34, mt(!0)), r.cellXfs = [{ numFmtId: 0 }], r._BIFF2FmtTable = ["General"], r._Fonts = [];
  var i = gt();
  return Jp(i, e.Sheets[e.SheetNames[a]], a, r, e), r._BIFF2FmtTable.forEach(function(s) {
    r.biff <= 3 ? re(n, 30, Ph(s)) : re(n, 1054, Fh(s));
  }), r.cellXfs.forEach(function(s) {
    switch (r.biff) {
      case 2:
        re(n, 67, $h(s));
        break;
      case 3:
        re(n, 579, qs(s));
        break;
      case 4:
        re(n, 1091, Bh(s));
        break;
    }
  }), delete r._BIFF2FmtTable, delete r.cellXfs, delete r._Fonts, n.push(i.end()), re(n, 10), n.end();
}
var Ut = 1, It = [];
function qp() {
  var e = j(82 + 8 * It.length);
  e.write_shift(2, 15), e.write_shift(2, 61440), e.write_shift(4, 74 + 8 * It.length);
  {
    e.write_shift(2, 0), e.write_shift(2, 61446), e.write_shift(4, 16 + 8 * It.length);
    {
      e.write_shift(4, Ut), e.write_shift(4, It.length + 1);
      for (var t = 0, r = 0; r < It.length; ++r) t += It[r] && It[r][1] || 0;
      e.write_shift(4, t), e.write_shift(4, It.length);
    }
    It.forEach(function(n) {
      e.write_shift(4, n[0]), e.write_shift(4, n[2]);
    });
  }
  return e.write_shift(2, 51), e.write_shift(2, 61451), e.write_shift(4, 18), e.write_shift(2, 191), e.write_shift(4, 524296), e.write_shift(2, 385), e.write_shift(4, 134217793), e.write_shift(2, 448), e.write_shift(4, 134217792), e.write_shift(2, 64), e.write_shift(2, 61726), e.write_shift(4, 16), e.write_shift(4, 134217741), e.write_shift(4, 134217740), e.write_shift(4, 134217751), e.write_shift(4, 268435703), e;
}
function Qp(e, t) {
  var r = [], n = 0, a = gt(), o = Ut, i;
  t.forEach(function(l, c) {
    var f = "", d = l[0].map(function(y) {
      return y.a && !f && (f = y.a), y.t;
    }).join("");
    ++Ut;
    {
      var u = j(150);
      u.write_shift(2, 15), u.write_shift(2, 61444), u.write_shift(4, 150), u.write_shift(2, 3234), u.write_shift(2, 61450), u.write_shift(4, 8), u.write_shift(4, Ut), u.write_shift(4, 2560), u.write_shift(2, 227), u.write_shift(2, 61451), u.write_shift(4, 84), u.write_shift(2, 128), u.write_shift(4, 0), u.write_shift(2, 139), u.write_shift(4, 2), u.write_shift(2, 191), u.write_shift(4, 524296), u.write_shift(2, 344), u.l += 4, u.write_shift(2, 385), u.write_shift(4, 134217808), u.write_shift(2, 387), u.write_shift(4, 134217808), u.write_shift(2, 389), u.write_shift(4, 268435700), u.write_shift(2, 447), u.write_shift(4, 1048592), u.write_shift(2, 448), u.write_shift(4, 134217809), u.write_shift(2, 451), u.write_shift(4, 268435700), u.write_shift(2, 513), u.write_shift(4, 134217809), u.write_shift(2, 515), u.write_shift(4, 268435700), u.write_shift(2, 575), u.write_shift(4, 196609), u.write_shift(2, 959), u.write_shift(4, 131072 | (l[0].hidden ? 2 : 0)), u.l += 2, u.write_shift(2, 61456), u.write_shift(4, 18), u.write_shift(2, 3), u.write_shift(2, l[2] + 2), u.l += 2, u.write_shift(2, l[1] + 1), u.l += 2, u.write_shift(2, l[2] + 4), u.l += 2, u.write_shift(2, l[1] + 5), u.l += 2, u.l += 2, u.write_shift(2, 61457), u.l += 4, u.l = 150, c == 0 ? i = u : re(a, 236, u);
    }
    n += 150;
    {
      var h = j(52);
      h.write_shift(2, 21), h.write_shift(2, 18), h.write_shift(2, 25), h.write_shift(2, Ut), h.write_shift(2, 0), h.l = 22, h.write_shift(2, 13), h.write_shift(2, 22), h.write_shift(4, 1651663474), h.write_shift(4, 2503426821), h.write_shift(4, 2150634280), h.write_shift(4, 1768515844 + Ut * 256), h.write_shift(2, 0), h.write_shift(4, 0), h.l += 4, re(a, 93, h);
    }
    {
      var g = j(8);
      g.l += 2, g.write_shift(2, 61453), g.l += 4, re(a, 236, g);
    }
    n += 8;
    {
      var m = j(18);
      m.write_shift(2, 18), m.l += 8, m.write_shift(2, d.length), m.write_shift(2, 16), m.l += 4, re(a, 438, m);
      {
        var p = j(1 + d.length);
        p.write_shift(1, 0), p.write_shift(d.length, d, "sbcs"), re(a, 60, p);
      }
      {
        var w = j(16);
        w.l += 8, w.write_shift(2, d.length), w.l += 6, re(a, 60, w);
      }
    }
    {
      var O = j(12 + f.length);
      O.write_shift(2, l[1]), O.write_shift(2, l[2]), O.write_shift(2, 0 | (l[0].hidden ? 0 : 2)), O.write_shift(2, Ut), O.write_shift(2, f.length), O.write_shift(1, 0), O.write_shift(f.length, f, "sbcs"), O.l++, r.push(O);
    }
  });
  {
    var s = j(80);
    s.write_shift(2, 15), s.write_shift(2, 61442), s.write_shift(4, n + s.length - 8), s.write_shift(2, 16), s.write_shift(2, 61448), s.write_shift(4, 8), s.write_shift(4, t.length + 1), s.write_shift(4, Ut), s.write_shift(2, 15), s.write_shift(2, 61443), s.write_shift(4, n + 48), s.write_shift(2, 15), s.write_shift(2, 61444), s.write_shift(4, 40), s.write_shift(2, 1), s.write_shift(2, 61449), s.write_shift(4, 16), s.l += 16, s.write_shift(2, 2), s.write_shift(2, 61450), s.write_shift(4, 8), s.write_shift(4, o), s.write_shift(4, 5), re(
      e,
      236,
      /* hdr */
      i ? et([s, i]) : s
    );
  }
  e.push(a.end()), r.forEach(function(l) {
    re(e, 28, l);
  }), It.push([o, t.length + 1, Ut]), ++Ut;
}
function Zp(e, t, r) {
  re(e, 49, Nh({
    sz: 12,
    name: "Arial"
  }, r));
}
function eg(e, t, r) {
  t && [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(n) {
    for (var a = n[0]; a <= n[1]; ++a) t[a] != null && re(e, 1054, Ih(a, t[a], r));
  });
}
function tg(e, t) {
  var r = j(19);
  r.write_shift(4, 2151), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 1), r.write_shift(4, 0), re(e, 2151, r), r = j(39), r.write_shift(4, 2152), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(2, 1), r.write_shift(4, 4), r.write_shift(2, 0), Xs(He(t["!ref"] || "A1"), r), r.write_shift(4, 4), re(e, 2152, r);
}
function rg(e, t) {
  for (var r = 0; r < 16; ++r) re(e, 224, Do({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function(n) {
    re(e, 224, Do(n, 0, t));
  });
}
function ng(e, t) {
  for (var r = 0; r < t["!links"].length; ++r) {
    var n = t["!links"][r];
    re(e, 440, Gh(n)), n[1].Tooltip && re(e, 2048, Kh(n));
  }
  delete t["!links"];
}
function ag(e, t) {
  if (t) {
    var r = 0;
    t.forEach(function(n, a) {
      ++r <= 256 && n && re(e, 125, Xh(Ta(a, n), a));
    });
  }
}
function ig(e, t, r, n, a, o) {
  var i = 16 + hr(a.cellXfs, t, a);
  if (t.v == null && !t.bf) {
    re(e, 513, kr(r, n, i));
    return;
  }
  if (t.bf) re(e, 6, yd(t, r, n, a, i));
  else switch (t.t) {
    case "d":
    case "n":
      var s = t.t == "d" ? ft(Ot(t.v, o), o) : t.v;
      isNaN(s) ? re(e, 517, Ma(r, n, 36, i, a, "e")) : isFinite(s) ? re(e, 515, Wh(r, n, s, i)) : re(e, 517, Ma(r, n, 7, i, a, "e"));
      break;
    case "b":
    case "e":
      re(e, 517, Ma(r, n, t.v, i, a, t.t));
      break;
    /* TODO: codepage, sst */
    case "s":
    case "str":
      if (a.bookSST) {
        var l = _i(a.Strings, t.v == null ? "" : String(t.v), a.revStrings);
        re(e, 253, Lh(r, n, l, i));
      } else re(e, 516, Mh(r, n, (t.v == null ? "" : String(t.v)).slice(0, 255), i, a));
      break;
    default:
      re(e, 513, kr(r, n, i));
  }
}
function og(e, t, r) {
  var n = gt(), a = r.SheetNames[e], o = r.Sheets[a] || {}, i = (r || {}).Workbook || {}, s = (i.Sheets || [])[e] || {}, l = o["!data"] != null, c = t.biff == 8, f = "", d = [], u = He(o["!ref"] || "A1"), h = c ? 65536 : 16384;
  if (u.e.c > 255 || u.e.r >= h) {
    if (t.WTF) throw new Error("Range " + (o["!ref"] || "A1") + " exceeds format limit A1:IV" + h);
    u.e.c = Math.min(u.e.c, 255), u.e.r = Math.min(u.e.r, h - 1);
  }
  re(n, 2057, Si(r, 16, t)), re(n, 13, Pt(1)), re(n, 12, Pt(100)), re(n, 15, mt(!0)), re(n, 17, mt(!1)), re(n, 16, Sr(1e-3)), re(n, 95, mt(!0)), re(n, 42, mt(!1)), re(n, 43, mt(!1)), re(n, 130, Pt(1)), re(n, 128, zh()), re(n, 131, mt(!1)), re(n, 132, mt(!1)), c && ag(n, o["!cols"]), re(n, 512, Uh(u, t));
  var g = (((r || {}).Workbook || {}).WBProps || {}).date1904;
  c && (o["!links"] = []);
  for (var m = u.s.c; m <= u.e.c; ++m) d[m] = $e(m);
  for (var p = [], w = [], O = u.s.r; O <= u.e.r; ++O)
    for (l && (w = o["!data"][O] || []), f = Be(O), m = u.s.c; m <= u.e.c; ++m) {
      var y = l ? w[m] : o[d[m] + f];
      y && (ig(n, y, O, m, t, g), c && y.l && o["!links"].push([d[m] + f, y.l]), y.c && p.push([y.c, O, m]));
    }
  var B = s.CodeName || s.name || a;
  return c ? Qp(n, p) : wl(n, p), c && re(n, 574, Rh((i.Views || [])[0])), c && (o["!merges"] || []).length && re(n, 229, jh(o["!merges"])), c && ng(n, o), re(n, 442, Js(B)), c && tg(n, o), re(
    n,
    10
    /* EOF */
  ), n.end();
}
function sg(e, t, r) {
  var n = gt(), a = (e || {}).Workbook || {}, o = a.Sheets || [], i = (
    /*::((*/
    a.WBProps || {
      /*::CodeName:"ThisWorkbook"*/
    }
  ), s = r.biff == 8, l = r.biff == 5;
  if (re(n, 2057, Si(e, 5, r)), r.bookType == "xla" && re(
    n,
    135
    /* Addin */
  ), re(n, 225, s ? Pt(1200) : null), re(n, 193, bh(2)), l && re(
    n,
    191
    /* ToolbarHdr */
  ), l && re(
    n,
    192
    /* ToolbarEnd */
  ), re(
    n,
    226
    /* InterfaceEnd */
  ), re(n, 92, Oh("SheetJS", r)), re(n, 66, Pt(s ? 1200 : 1252)), s && re(n, 353, Pt(0)), s && re(
    n,
    448
    /* Excel9File */
  ), re(n, 317, qh(e.SheetNames.length)), s && e.vbaraw && re(
    n,
    211
    /* ObProj */
  ), s && e.vbaraw) {
    var c = i.CodeName || "ThisWorkbook";
    re(n, 442, Js(c));
  }
  re(n, 156, Pt(17)), re(n, 25, mt(!1)), re(n, 18, mt(!1)), re(n, 19, Pt(0)), s && re(n, 431, mt(!1)), s && re(n, 444, Pt(0)), re(n, 61, Dh()), re(n, 64, mt(!1)), re(n, 141, Pt(0)), re(n, 34, mt(hp(e) == "true")), re(n, 14, mt(!0)), s && re(n, 439, mt(!1)), re(n, 218, Pt(0)), Zp(n, e, r), eg(n, e.SSF, r), rg(n, r), s && re(n, 352, mt(!1));
  var f = n.end(), d = gt();
  s && re(d, 140, Yh()), s && It.length && re(d, 235, qp()), s && r.Strings && Gp(d, 252, Ch(r.Strings)), re(
    d,
    10
    /* EOF */
  );
  var u = d.end(), h = gt(), g = 0, m = 0;
  for (m = 0; m < e.SheetNames.length; ++m) g += (s ? 12 : 11) + (s ? 2 : 1) * e.SheetNames[m].length;
  var p = f.length + g + u.length;
  for (m = 0; m < e.SheetNames.length; ++m) {
    var w = o[m] || {};
    re(h, 133, Ah({ pos: p, hs: w.Hidden || 0, dt: 0, name: e.SheetNames[m] }, r)), p += t[m].length;
  }
  var O = h.end();
  if (g != O.length) throw new Error("BS8 " + g + " != " + O.length);
  var y = [];
  return f.length && y.push(f), O.length && y.push(O), u.length && y.push(u), et(y);
}
function lg(e, t) {
  var r = t || {}, n = [];
  e && !e.SSF && (e.SSF = bt(Ve)), e && e.SSF && (da(), ha(e.SSF), r.revssf = ma(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), Ut = 1, It = [], r.Strings = /*::((*/
  [], r.Strings.Count = 0, r.Strings.Unique = 0, Oi(r), r.cellXfs = [], hr(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var a = 0; a < e.SheetNames.length; ++a) n[n.length] = og(a, r, e);
  return n.unshift(sg(e, n, r)), et(n);
}
function yl(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var n = e.Sheets[e.SheetNames[r]];
    if (!(!n || !n["!ref"])) {
      var a = ct(n["!ref"]);
      a.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost."), a.e.r > 65535 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond row 65536.  Data may be lost.");
    }
  }
  var o = t || {};
  switch (o.biff || 2) {
    case 8:
    case 5:
      return lg(e, t);
    case 4:
    case 3:
    case 2:
      return Xp(e, t);
  }
  throw new Error("invalid type " + o.bookType + " for BIFF");
}
function cg(e, t, r, n) {
  for (var a = e["!merges"] || [], o = [], i = {}, s = e["!data"] != null, l = t.s.c; l <= t.e.c; ++l) {
    for (var c = 0, f = 0, d = 0; d < a.length; ++d)
      if (!(a[d].s.r > r || a[d].s.c > l) && !(a[d].e.r < r || a[d].e.c < l)) {
        if (a[d].s.r < r || a[d].s.c < l) {
          c = -1;
          break;
        }
        c = a[d].e.r - a[d].s.r + 1, f = a[d].e.c - a[d].s.c + 1;
        break;
      }
    if (!(c < 0)) {
      var u = $e(l) + Be(r), h = s ? (e["!data"][r] || [])[l] : e[u];
      h && h.t == "n" && h.v != null && !isFinite(h.v) && (isNaN(h.v) ? h = { t: "e", v: 36, w: kt[36] } : h = { t: "e", v: 7, w: kt[7] });
      var g = h && h.v != null && (h.h || Da(h.w || (ir(h), h.w) || "")) || "";
      i = {}, c > 1 && (i.rowspan = c), f > 1 && (i.colspan = f), n.editable ? g = '<span contenteditable="true">' + g + "</span>" : h && (i["data-t"] = h && h.t || "z", h.v != null && (i["data-v"] = Da(h.v instanceof Date ? h.v.toISOString() : h.v)), h.z != null && (i["data-z"] = h.z), h.l && (h.l.Target || "#").charAt(0) != "#" && (g = '<a href="' + Da(h.l.Target) + '">' + g + "</a>")), i.id = (n.id || "sjs") + "-" + u, o.push(oe("td", g, i));
    }
  }
  var m = "<tr>";
  return m + o.join("") + "</tr>";
}
var fg = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', ug = "</body></html>";
function hg(e, t, r) {
  var n = [];
  return n.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function Tl(e, t) {
  var r = t || {}, n = r.header != null ? r.header : fg, a = r.footer != null ? r.footer : ug, o = [n], i = ct(e["!ref"] || "A1");
  if (o.push(hg(e, i, r)), e["!ref"]) for (var s = i.s.r; s <= i.e.r; ++s) o.push(cg(e, i, s, r));
  return o.push("</table>" + a), o.join("");
}
function El(e, t, r) {
  var n = t.rows;
  if (!n)
    throw "Unsupported origin when " + t.tagName + " is not a TABLE";
  var a = r || {}, o = e["!data"] != null, i = 0, s = 0;
  if (a.origin != null)
    if (typeof a.origin == "number") i = a.origin;
    else {
      var l = typeof a.origin == "string" ? Ke(a.origin) : a.origin;
      i = l.r, s = l.c;
    }
  var c = Math.min(a.sheetRows || 1e7, n.length), f = { s: { r: 0, c: 0 }, e: { r: i, c: s } };
  if (e["!ref"]) {
    var d = ct(e["!ref"]);
    f.s.r = Math.min(f.s.r, d.s.r), f.s.c = Math.min(f.s.c, d.s.c), f.e.r = Math.max(f.e.r, d.e.r), f.e.c = Math.max(f.e.c, d.e.c), i == -1 && (f.e.r = i = d.e.r + 1);
  }
  var u = [], h = 0, g = e["!rows"] || (e["!rows"] = []), m = 0, p = 0, w = 0, O = 0, y = 0, B = 0;
  for (e["!cols"] || (e["!cols"] = []); m < n.length && p < c; ++m) {
    var I = n[m];
    if (Bo(I)) {
      if (a.display) continue;
      g[p] = { hidden: !0 };
    }
    var G = I.cells;
    for (w = O = 0; w < G.length; ++w) {
      var v = G[w];
      if (!(a.display && Bo(v))) {
        var k = v.hasAttribute("data-v") ? v.getAttribute("data-v") : v.hasAttribute("v") ? v.getAttribute("v") : Au(v.innerHTML), A = v.getAttribute("data-z") || v.getAttribute("z");
        for (h = 0; h < u.length; ++h) {
          var D = u[h];
          D.s.c == O + s && D.s.r < p + i && p + i <= D.e.r && (O = D.e.c + 1 - s, h = -1);
        }
        B = +v.getAttribute("colspan") || 1, ((y = +v.getAttribute("rowspan") || 1) > 1 || B > 1) && u.push({ s: { r: p + i, c: O + s }, e: { r: p + i + (y || 1) - 1, c: O + s + (B || 1) - 1 } });
        var L = { t: "s", v: k }, P = v.getAttribute("data-t") || v.getAttribute("t") || "";
        k != null && (k.length == 0 ? L.t = P || "z" : a.raw || k.trim().length == 0 || P == "s" || (P == "e" && kt[+k] ? L = { t: "e", v: +k, w: kt[+k] } : k === "TRUE" ? L = { t: "b", v: !0 } : k === "FALSE" ? L = { t: "b", v: !1 } : isNaN(rr(k)) ? isNaN(qn(k).getDate()) ? k.charCodeAt(0) == 35 && Kt[k] != null && (L = { t: "e", v: Kt[k], w: k }) : (L = { t: "d", v: Ot(k) }, a.UTC && (L.v = pa(L.v)), a.cellDates || (L = { t: "n", v: ft(L.v) }), L.z = a.dateNF || Ve[14]) : L = { t: "n", v: rr(k) })), L.z === void 0 && A != null && (L.z = A);
        var M = "", V = v.getElementsByTagName("A");
        if (V && V.length) for (var F = 0; F < V.length && !(V[F].hasAttribute("href") && (M = V[F].getAttribute("href"), M.charAt(0) != "#")); ++F) ;
        M && M.charAt(0) != "#" && M.slice(0, 11).toLowerCase() != "javascript:" && (L.l = { Target: M }), o ? (e["!data"][p + i] || (e["!data"][p + i] = []), e["!data"][p + i][O + s] = L) : e[Je({ c: O + s, r: p + i })] = L, f.e.c < O + s && (f.e.c = O + s), O += B;
      }
    }
    ++p;
  }
  return u.length && (e["!merges"] = (e["!merges"] || []).concat(u)), f.e.r = Math.max(f.e.r, p - 1 + i), e["!ref"] = rt(f), p >= c && (e["!fullref"] = rt((f.e.r = n.length - m + p - 1 + i, f))), e;
}
function Sl(e, t) {
  var r = t || {}, n = {};
  return r.dense && (n["!data"] = []), El(n, e, t);
}
function dg(e, t) {
  var r = Hr(Sl(e, t), t);
  return r;
}
function Bo(e) {
  var t = "", r = mg(e);
  return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), t === "none";
}
function mg(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
var pg = /* @__PURE__ */ (function() {
  var e = [
    "<office:master-styles>",
    '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
    "<style:header/>",
    '<style:header-left style:display="false"/>',
    "<style:footer/>",
    '<style:footer-left style:display="false"/>',
    "</style:master-page>",
    "</office:master-styles>"
  ].join(""), t = "<office:document-styles " + pn({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + e + "</office:document-styles>";
  return function() {
    return nt + t;
  };
})();
function gg(e, t) {
  var r = "number", n = "", a = { "style:name": t }, o = "", i = 0;
  e = e.replace(/"[$]"/g, "$");
  e: {
    if (e.indexOf(";") > -1 && (console.error("Unsupported ODS Style Map exported.  Using first branch of " + e), e = e.slice(0, e.indexOf(";"))), e == "@") {
      r = "text", n = "<number:text-content/>";
      break e;
    }
    if (e.indexOf(/\$/) > -1 && (r = "currency"), e[i] == '"') {
      for (o = ""; e[++i] != '"' || e[++i] == '"'; ) o += e[i];
      --i, e[i + 1] == "*" ? (i++, n += "<number:fill-character>" + Ce(o.replace(/""/g, '"')) + "</number:fill-character>") : n += "<number:text>" + Ce(o.replace(/""/g, '"')) + "</number:text>", e = e.slice(i + 1), i = 0;
    }
    var s = e.match(/# (\?+)\/(\?+)/);
    if (s) {
      n += oe("number:fraction", null, { "number:min-integer-digits": 0, "number:min-numerator-digits": s[1].length, "number:max-denominator-value": Math.max(+s[1].replace(/./g, "9"), +s[2].replace(/./g, "9")) });
      break e;
    }
    if (s = e.match(/# (\?+)\/(\d+)/)) {
      n += oe("number:fraction", null, { "number:min-integer-digits": 0, "number:min-numerator-digits": s[1].length, "number:denominator-value": +s[2] });
      break e;
    }
    if (s = e.match(/\b(\d+)(|\.\d+)%/)) {
      r = "percentage", n += oe("number:number", null, { "number:decimal-places": s[2] && s.length - 1 || 0, "number:min-decimal-places": s[2] && s.length - 1 || 0, "number:min-integer-digits": s[1].length }) + "<number:text>%</number:text>";
      break e;
    }
    var l = !1;
    if (["y", "m", "d"].indexOf(e[0]) > -1) {
      r = "date";
      t: for (; i < e.length; ++i) switch (o = e[i].toLowerCase()) {
        case "h":
        case "s":
          l = !0, --i;
          break t;
        case "m":
          r: for (var c = i + 1; c < e.length; ++c) switch (e[c]) {
            case "y":
            case "d":
              break r;
            case "h":
            case "s":
              l = !0, --i;
              break t;
          }
        /* falls through */
        case "y":
        case "d":
          for (; (e[++i] || "").toLowerCase() == o[0]; ) o += o[0];
          switch (--i, o) {
            case "y":
            case "yy":
              n += "<number:year/>";
              break;
            case "yyy":
            case "yyyy":
              n += '<number:year number:style="long"/>';
              break;
            case "mmmmm":
              console.error("ODS has no equivalent of format |mmmmm|");
            /* falls through */
            case "m":
            case "mm":
            case "mmm":
            case "mmmm":
              n += '<number:month number:style="' + (o.length % 2 ? "short" : "long") + '" number:textual="' + (o.length >= 3 ? "true" : "false") + '"/>';
              break;
            case "d":
            case "dd":
              n += '<number:day number:style="' + (o.length % 2 ? "short" : "long") + '"/>';
              break;
            case "ddd":
            case "dddd":
              n += '<number:day-of-week number:style="' + (o.length % 2 ? "short" : "long") + '"/>';
              break;
          }
          break;
        case '"':
          for (; e[++i] != '"' || e[++i] == '"'; ) o += e[i];
          --i, n += "<number:text>" + Ce(o.slice(1).replace(/""/g, '"')) + "</number:text>";
          break;
        case "\\":
          o = e[++i], n += "<number:text>" + Ce(o) + "</number:text>";
          break;
        case "/":
        case ":":
          n += "<number:text>" + Ce(o) + "</number:text>";
          break;
        default:
          console.error("unrecognized character " + o + " in ODF format " + e);
      }
      if (!l) break e;
      e = e.slice(i + 1), i = 0;
    }
    if (e.match(/^\[?[hms]/)) {
      for (r == "number" && (r = "time"), e.match(/\[/) && (e = e.replace(/[\[\]]/g, ""), a["number:truncate-on-overflow"] = "false"); i < e.length; ++i) switch (o = e[i].toLowerCase()) {
        case "h":
        case "m":
        case "s":
          for (; (e[++i] || "").toLowerCase() == o[0]; ) o += o[0];
          switch (--i, o) {
            case "h":
            case "hh":
              n += '<number:hours number:style="' + (o.length % 2 ? "short" : "long") + '"/>';
              break;
            case "m":
            case "mm":
              n += '<number:minutes number:style="' + (o.length % 2 ? "short" : "long") + '"/>';
              break;
            case "s":
            case "ss":
              if (e[i + 1] == ".") do
                o += e[i + 1], ++i;
              while (e[i + 1] == "0");
              n += '<number:seconds number:style="' + (o.match("ss") ? "long" : "short") + '"' + (o.match(/\./) ? ' number:decimal-places="' + (o.match(/0+/) || [""])[0].length + '"' : "") + "/>";
              break;
          }
          break;
        case '"':
          for (; e[++i] != '"' || e[++i] == '"'; ) o += e[i];
          --i, n += "<number:text>" + Ce(o.slice(1).replace(/""/g, '"')) + "</number:text>";
          break;
        case "/":
        case ":":
          n += "<number:text>" + Ce(o) + "</number:text>";
          break;
        case "a":
          if (e.slice(i, i + 3).toLowerCase() == "a/p") {
            n += "<number:am-pm/>", i += 2;
            break;
          }
          if (e.slice(i, i + 5).toLowerCase() == "am/pm") {
            n += "<number:am-pm/>", i += 4;
            break;
          }
        /* falls through */
        default:
          console.error("unrecognized character " + o + " in ODF format " + e);
      }
      break e;
    }
    if (e.indexOf(/\$/) > -1 && (r = "currency"), e[0] == "$" && (n += '<number:currency-symbol number:language="en" number:country="US">$</number:currency-symbol>', e = e.slice(1), i = 0), i = 0, e[i] == '"') {
      for (; e[++i] != '"' || e[++i] == '"'; ) o += e[i];
      --i, e[i + 1] == "*" ? (i++, n += "<number:fill-character>" + Ce(o.replace(/""/g, '"')) + "</number:fill-character>") : n += "<number:text>" + Ce(o.replace(/""/g, '"')) + "</number:text>", e = e.slice(i + 1), i = 0;
    }
    var f = e.match(/([#0][0#,]*)(\.[0#]*|)(E[+]?0*|)/i);
    if (!f || !f[0]) console.error("Could not find numeric part of " + e);
    else {
      var d = f[1].replace(/,/g, "");
      n += "<number:" + (f[3] ? "scientific-" : "") + 'number number:min-integer-digits="' + (d.indexOf("0") == -1 ? "0" : d.length - d.indexOf("0")) + '"' + (f[0].indexOf(",") > -1 ? ' number:grouping="true"' : "") + (f[2] && ' number:decimal-places="' + (f[2].length - 1) + '"' || ' number:decimal-places="0"') + (f[3] && f[3].indexOf("+") > -1 ? ' number:forced-exponent-sign="true"' : "") + (f[3] ? ' number:min-exponent-digits="' + f[3].match(/0+/)[0].length + '"' : "") + "></number:" + (f[3] ? "scientific-" : "") + "number>", i = f.index + f[0].length;
    }
    if (e[i] == '"') {
      for (o = ""; e[++i] != '"' || e[++i] == '"'; ) o += e[i];
      --i, n += "<number:text>" + Ce(o.replace(/""/g, '"')) + "</number:text>";
    }
  }
  return n ? oe("number:" + r + "-style", n, a) : (console.error("Could not generate ODS number format for |" + e + "|"), "");
}
function zo(e, t, r) {
  for (var n = [], a = 0; a < e.length; ++a) {
    var o = e[a];
    o && o.Sheet == (r == -1 ? null : r) && n.push(o);
  }
  return n.length ? `      <table:named-expressions>
` + n.map(function(i) {
    var s = (r == -1 ? "$" : "") + ml(i.Ref);
    return "        " + oe("table:named-range", null, {
      "table:name": i.Name,
      "table:cell-range-address": s,
      "table:base-cell-address": s.replace(/[\.][^\.]*$/, ".$A$1")
    });
  }).join(`
`) + `
      </table:named-expressions>
` : "";
}
var Wo = /* @__PURE__ */ (function() {
  var e = function(a, o) {
    return Ce(a).replace(/  +/g, function(i) {
      return '<text:s text:c="' + i.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, t = `          <table:table-cell />
`, r = function(a, o, i, s, l, c) {
    var f = [];
    f.push('      <table:table table:name="' + Ce(o.SheetNames[i]) + `" table:style-name="ta1">
`);
    var d = 0, u = 0, h = ct(a["!ref"] || "A1"), g = a["!merges"] || [], m = 0, p = a["!data"] != null;
    if (a["!cols"])
      for (u = 0; u <= h.e.c; ++u) f.push("        <table:table-column" + (a["!cols"][u] ? ' table:style-name="co' + a["!cols"][u].ods + '"' : "") + `></table:table-column>
`);
    var w = "", O = a["!rows"] || [];
    for (d = 0; d < h.s.r; ++d)
      w = O[d] ? ' table:style-name="ro' + O[d].ods + '"' : "", f.push("        <table:table-row" + w + `></table:table-row>
`);
    for (; d <= h.e.r; ++d) {
      for (w = O[d] ? ' table:style-name="ro' + O[d].ods + '"' : "", f.push("        <table:table-row" + w + `>
`), u = 0; u < h.s.c; ++u) f.push(t);
      for (; u <= h.e.c; ++u) {
        var y = !1, B = {}, I = "";
        for (m = 0; m != g.length; ++m)
          if (!(g[m].s.c > u) && !(g[m].s.r > d) && !(g[m].e.c < u) && !(g[m].e.r < d)) {
            (g[m].s.c != u || g[m].s.r != d) && (y = !0), B["table:number-columns-spanned"] = g[m].e.c - g[m].s.c + 1, B["table:number-rows-spanned"] = g[m].e.r - g[m].s.r + 1;
            break;
          }
        if (y) {
          f.push(`          <table:covered-table-cell/>
`);
          continue;
        }
        var G = Je({ r: d, c: u }), v = p ? (a["!data"][d] || [])[u] : a[G];
        if (v && v.f && (B["table:formula"] = Ce(Fd(v.f)), v.F && v.F.slice(0, G.length) == G)) {
          var k = ct(v.F);
          B["table:number-matrix-columns-spanned"] = k.e.c - k.s.c + 1, B["table:number-matrix-rows-spanned"] = k.e.r - k.s.r + 1;
        }
        if (!v) {
          f.push(t);
          continue;
        }
        switch (v.t) {
          case "b":
            I = v.v ? "TRUE" : "FALSE", B["office:value-type"] = "boolean", B["office:boolean-value"] = v.v ? "true" : "false";
            break;
          case "n":
            isFinite(v.v) ? (I = v.w || String(v.v || 0), B["office:value-type"] = "float", B["office:value"] = v.v || 0) : (isNaN(v.v) ? (I = "#NUM!", B["table:formula"] = "of:=#NUM!") : (I = "#DIV/0!", B["table:formula"] = "of:=" + (v.v < 0 ? "-" : "") + "1/0"), B["office:string-value"] = "", B["office:value-type"] = "string", B["calcext:value-type"] = "error");
            break;
          case "s":
          case "str":
            I = v.v == null ? "" : v.v, B["office:value-type"] = "string";
            break;
          case "d":
            I = v.w || Ot(v.v, c).toISOString(), B["office:value-type"] = "date", B["office:date-value"] = Ot(v.v, c).toISOString(), B["table:style-name"] = "ce1";
            break;
          //case 'e': // TODO: translate to ODS errors
          default:
            f.push(t);
            continue;
        }
        var A = e(I);
        if (v.l && v.l.Target) {
          var D = v.l.Target;
          D = D.charAt(0) == "#" ? "#" + ml(D.slice(1)) : D, D.charAt(0) != "#" && !D.match(/^\w+:/) && (D = "../" + D), A = oe("text:a", A, { "xlink:href": D.replace(/&/g, "&amp;") });
        }
        l[v.z] && (B["table:style-name"] = "ce" + l[v.z].slice(1));
        var L = oe("text:p", A, {});
        if (v.c) {
          for (var P = "", M = "", V = {}, F = 0; F < v.c.length; ++F)
            !P && v.c[F].a && (P = v.c[F].a), M += "<text:p>" + e(v.c[F].t) + "</text:p>";
          v.c.hidden || (V["office:display"] = !0), L = oe("office:annotation", M, V) + L;
        }
        f.push("          " + oe("table:table-cell", L, B) + `
`);
      }
      f.push(`        </table:table-row>
`);
    }
    return (o.Workbook || {}).Names && f.push(zo(o.Workbook.Names, o.SheetNames, i)), f.push(`      </table:table>
`), f.join("");
  }, n = function(a, o) {
    a.push(` <office:automatic-styles>
`);
    var i = 0;
    o.SheetNames.map(function(f) {
      return o.Sheets[f];
    }).forEach(function(f) {
      if (f && f["!cols"]) {
        for (var d = 0; d < f["!cols"].length; ++d) if (f["!cols"][d]) {
          var u = f["!cols"][d];
          if (u.width == null && u.wpx == null && u.wch == null) continue;
          ki(u), u.ods = i;
          var h = f["!cols"][d].wpx + "px";
          a.push('  <style:style style:name="co' + i + `" style:family="table-column">
`), a.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + h + `"/>
`), a.push(`  </style:style>
`), ++i;
        }
      }
    });
    var s = 0;
    o.SheetNames.map(function(f) {
      return o.Sheets[f];
    }).forEach(function(f) {
      if (f && f["!rows"]) {
        for (var d = 0; d < f["!rows"].length; ++d) if (f["!rows"][d]) {
          f["!rows"][d].ods = s;
          var u = f["!rows"][d].hpx + "px";
          a.push('  <style:style style:name="ro' + s + `" style:family="table-row">
`), a.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + u + `"/>
`), a.push(`  </style:style>
`), ++s;
        }
      }
    }), a.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), a.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), a.push(`  </style:style>
`), a.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), a.push(`   <number:month number:style="long"/>
`), a.push(`   <number:text>/</number:text>
`), a.push(`   <number:day number:style="long"/>
`), a.push(`   <number:text>/</number:text>
`), a.push(`   <number:year/>
`), a.push(`  </number:date-style>
`);
    var l = {}, c = 69;
    return o.SheetNames.map(function(f) {
      return o.Sheets[f];
    }).forEach(function(f) {
      if (f) {
        var d = f["!data"] != null;
        if (f["!ref"])
          for (var u = ct(f["!ref"]), h = 0; h <= u.e.r; ++h) for (var g = 0; g <= u.e.c; ++g) {
            var m = d ? (f["!data"][h] || [])[g] : f[Je({ r: h, c: g })];
            if (!(!m || !m.z || m.z.toLowerCase() == "general") && !l[m.z]) {
              var p = gg(m.z, "N" + c);
              p && (l[m.z] = "N" + c, ++c, a.push(p + `
`));
            }
          }
      }
    }), a.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), tt(l).forEach(function(f) {
      a.push('<style:style style:name="ce' + l[f].slice(1) + '" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="' + l[f] + `"/>
`);
    }), a.push(` </office:automatic-styles>
`), l;
  };
  return function(a, o) {
    var i = [nt], s = pn({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    }), l = pn({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    o.bookType == "fods" ? (i.push("<office:document" + s + l + `>
`), i.push(zs().replace(/<office:document-meta[^<>]*?>/, "").replace(/<\/office:document-meta>/, "") + `
`)) : i.push("<office:document-content" + s + `>
`);
    var c = n(i, a);
    i.push(`  <office:body>
`), i.push(`    <office:spreadsheet>
`), ((a.Workbook || {}).WBProps || {}).date1904 && i.push(`      <table:calculation-settings table:case-sensitive="false" table:search-criteria-must-apply-to-whole-cell="true" table:use-wildcards="true" table:use-regular-expressions="false" table:automatic-find-labels="false">
        <table:null-date table:date-value="1904-01-01"/>
      </table:calculation-settings>
`);
    for (var f = 0; f != a.SheetNames.length; ++f) i.push(r(a.Sheets[a.SheetNames[f]], a, f, o, c, ((a.Workbook || {}).WBProps || {}).date1904));
    return (a.Workbook || {}).Names && i.push(zo(a.Workbook.Names, a.SheetNames, -1)), i.push(`    </office:spreadsheet>
`), i.push(`  </office:body>
`), o.bookType == "fods" ? i.push("</office:document>") : i.push("</office:document-content>"), i.join("");
  };
})();
function kl(e, t) {
  if (t.bookType == "fods") return Wo(e, t);
  var r = di(), n = "", a = [], o = [];
  return n = "mimetype", Ae(r, n, "application/vnd.oasis.opendocument.spreadsheet"), n = "content.xml", Ae(r, n, Wo(e, t)), a.push([n, "text/xml"]), o.push([n, "ContentFile"]), n = "styles.xml", Ae(r, n, pg(e, t)), a.push([n, "text/xml"]), o.push([n, "StylesFile"]), n = "meta.xml", Ae(r, n, nt + zs(
    /*::wb, opts*/
  )), a.push([n, "text/xml"]), o.push([n, "MetadataFile"]), n = "manifest.rdf", Ae(r, n, dh(
    o
    /*, opts*/
  )), a.push([n, "application/rdf+xml"]), n = "META-INF/manifest.xml", Ae(r, n, uh(
    a
    /*, opts*/
  )), r;
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
var St = (function() {
  try {
    return typeof Uint8Array > "u" || typeof Uint8Array.prototype.subarray > "u" ? "slice" : typeof Buffer < "u" ? typeof Buffer.prototype.subarray > "u" ? "slice" : (typeof Buffer.from == "function" ? Buffer.from([72, 62]) : new Buffer([72, 62])) instanceof Uint8Array ? "subarray" : "slice" : "subarray";
  } catch {
    return "slice";
  }
})();
function aa(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function wn(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Pr(Tr(e));
}
function yt(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Dt(mn(e));
}
function ur(e) {
  for (var t = 0, r = 0; r < e.length; ++r)
    t += e[r].length;
  var n = new Uint8Array(t), a = 0;
  for (r = 0; r < e.length; ++r) {
    var o = e[r], i = o.length;
    if (i < 250)
      for (var s = 0; s < i; ++s)
        n[a++] = o[s];
    else
      n.set(o, a), a += i;
  }
  return n;
}
function vg(e, t, r) {
  var n = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 16, a = r / Math.pow(10, n - 6176);
  e[t + 15] |= n >> 7, e[t + 14] |= (n & 127) << 1;
  for (var o = 0; a >= 1; ++o, a /= 256)
    e[t + o] = a & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function yn(e, t) {
  var r = t.l, n = e[r] & 127;
  e:
    if (e[r++] >= 128 && (n |= (e[r] & 127) << 7, e[r++] < 128 || (n |= (e[r] & 127) << 14, e[r++] < 128) || (n |= (e[r] & 127) << 21, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return t.l = r, n;
}
function be(e) {
  var t = new Uint8Array(7);
  t[0] = e & 127;
  var r = 1;
  e:
    if (e > 127) {
      if (t[r - 1] |= 128, t[r] = e >> 7 & 127, ++r, e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103))
        break e;
      t[r - 1] |= 128, t[r] = e / 16777216 >>> 21 & 127, ++r;
    }
  return t[St](0, r);
}
function xl(e) {
  for (var t = { l: 0 }, r = []; t.l < e.length; )
    r.push(yn(e, t));
  return r;
}
function _l(e) {
  return ur(e.map(function(t) {
    return be(t);
  }));
}
function Lt(e) {
  var t = 0, r = e[t] & 127;
  return e[t++] < 128 || (r |= (e[t] & 127) << 7, e[t++] < 128) || (r |= (e[t] & 127) << 14, e[t++] < 128) || (r |= (e[t] & 127) << 21, e[t++] < 128) || (r |= (e[t] & 15) << 28), r;
}
function Te(e) {
  for (var t = [], r = { l: 0 }; r.l < e.length; ) {
    var n = r.l, a = yn(e, r), o = a & 7;
    a = a / 8 | 0;
    var i, s = r.l;
    switch (o) {
      case 0:
        {
          for (; e[s++] >= 128; )
            ;
          i = e[St](r.l, s), r.l = s;
        }
        break;
      case 1:
        i = e[St](s, s + 8), r.l = s + 8;
        break;
      case 2:
        {
          var l = yn(e, r);
          i = e[St](r.l, r.l + l), r.l += l;
        }
        break;
      case 5:
        i = e[St](s, s + 4), r.l = s + 4;
        break;
      default:
        throw new Error("PB Type ".concat(o, " for Field ").concat(a, " at offset ").concat(n));
    }
    var c = { data: i, type: o };
    t[a] == null && (t[a] = []), t[a].push(c);
  }
  return t;
}
function we(e) {
  var t = [];
  return e.forEach(function(r, n) {
    n != 0 && r.forEach(function(a) {
      a.data && (t.push(be(n * 8 + a.type)), a.type == 2 && t.push(be(a.data.length)), t.push(a.data));
    });
  }), ur(t);
}
function ia(e, t) {
  return (e == null ? void 0 : e.map(function(r) {
    return t(r.data);
  })) || [];
}
function oa(e) {
  for (var t, r = [], n = { l: 0 }; n.l < e.length; ) {
    var a = yn(e, n), o = Te(e[St](n.l, n.l + a));
    n.l += a;
    var i = {
      id: Lt(o[1][0].data),
      messages: []
    };
    o[2].forEach(function(s) {
      var l = Te(s.data), c = Lt(l[3][0].data);
      i.messages.push({
        meta: l,
        data: e[St](n.l, n.l + c)
      }), n.l += c;
    }), (t = o[3]) != null && t[0] && (i.merge = Lt(o[3][0].data) >>> 0 > 0), r.push(i);
  }
  return r;
}
function $r(e) {
  var t = [];
  return e.forEach(function(r) {
    var n = [
      [],
      [{ data: be(r.id), type: 0 }],
      []
    ];
    r.merge != null && (n[3] = [{ data: be(+!!r.merge), type: 0 }]);
    var a = [];
    r.messages.forEach(function(i) {
      a.push(i.data), i.meta[3] = [{ type: 0, data: be(i.data.length) }], n[2].push({ data: we(i.meta), type: 2 });
    });
    var o = we(n);
    t.push(be(o.length)), t.push(o), a.forEach(function(i) {
      return t.push(i);
    });
  }), ur(t);
}
function bg(e, t) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = { l: 0 }, n = yn(t, r), a = [], o = r.l; o < t.length; ) {
    var i = t[o] & 3;
    if (i == 0) {
      var s = t[o++] >> 2;
      if (s < 60)
        ++s;
      else {
        var l = s - 59;
        s = t[o], l > 1 && (s |= t[o + 1] << 8), l > 2 && (s |= t[o + 2] << 16), l > 3 && (s |= t[o + 3] << 24), s >>>= 0, s++, o += l;
      }
      a.push(t[St](o, o + s)), o += s;
      continue;
    } else {
      var c = 0, f = 0;
      if (i == 1 ? (f = (t[o] >> 2 & 7) + 4, c = (t[o++] & 224) << 3, c |= t[o++]) : (f = (t[o++] >> 2) + 1, i == 2 ? (c = t[o] | t[o + 1] << 8, o += 2) : (c = (t[o] | t[o + 1] << 8 | t[o + 2] << 16 | t[o + 3] << 24) >>> 0, o += 4)), c == 0)
        throw new Error("Invalid offset 0");
      for (var d = a.length - 1, u = c; d >= 0 && u >= a[d].length; )
        u -= a[d].length, --d;
      if (d < 0)
        if (u == 0)
          u = a[d = 0].length;
        else
          throw new Error("Invalid offset beyond length");
      if (f < u)
        a.push(a[d][St](a[d].length - u, a[d].length - u + f));
      else {
        for (u > 0 && (a.push(a[d][St](a[d].length - u)), f -= u), ++d; f >= a[d].length; )
          a.push(a[d]), f -= a[d].length, ++d;
        f && a.push(a[d][St](0, f));
      }
      a.length > 25 && (a = [ur(a)]);
    }
  }
  for (var h = 0, g = 0; g < a.length; ++g)
    h += a[g].length;
  if (h != n)
    throw new Error("Unexpected length: ".concat(h, " != ").concat(n));
  return a;
}
function sa(e) {
  Array.isArray(e) && (e = new Uint8Array(e));
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r++], a = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, t.push.apply(t, bg(n, e[St](r, r + a))), r += a;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return t.length == 1 ? t[0] : ur(t);
}
function Br(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = Math.min(e.length - r, 268435455), a = new Uint8Array(4);
    t.push(a);
    var o = be(n), i = o.length;
    t.push(o), n <= 60 ? (i++, t.push(new Uint8Array([n - 1 << 2]))) : n <= 256 ? (i += 2, t.push(new Uint8Array([240, n - 1 & 255]))) : n <= 65536 ? (i += 3, t.push(new Uint8Array([244, n - 1 & 255, n - 1 >> 8 & 255]))) : n <= 16777216 ? (i += 4, t.push(new Uint8Array([248, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255]))) : n <= 4294967296 && (i += 5, t.push(new Uint8Array([252, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255, n - 1 >>> 24 & 255]))), t.push(e[St](r, r + n)), i += n, a[0] = 0, a[1] = i & 255, a[2] = i >> 8 & 255, a[3] = i >> 16 & 255, r += n;
  }
  return ur(t);
}
function za(e, t) {
  var r = new Uint8Array(32), n = aa(r), a = 12, o = 0;
  switch (r[0] = 5, e.t) {
    case "n":
      if (e.z && Er(e.z)) {
        r[1] = 5, n.setFloat64(a, (Ir(e.v + 1462).getTime() - Date.UTC(2001, 0, 1)) / 1e3, !0), o |= 4, a += 8;
        break;
      } else
        r[1] = 2, vg(r, a, e.v), o |= 1, a += 16;
      break;
    case "b":
      r[1] = 6, n.setFloat64(a, e.v ? 1 : 0, !0), o |= 2, a += 8;
      break;
    case "s":
      {
        var i = e.v == null ? "" : String(e.v);
        if (e.l) {
          var s = t.rsst.findIndex(function(c) {
            var f;
            return c.v == i && c.l == ((f = e.l) == null ? void 0 : f.Target);
          });
          s == -1 && (t.rsst[s = t.rsst.length] = { v: i, l: e.l.Target }), r[1] = 9, n.setUint32(a, s, !0), o |= 16, a += 4;
        } else {
          var l = t.sst.indexOf(i);
          l == -1 && (t.sst[l = t.sst.length] = i), r[1] = 3, n.setUint32(a, l, !0), o |= 8, a += 4;
        }
      }
      break;
    case "d":
      r[1] = 5, n.setFloat64(a, (e.v.getTime() - Date.UTC(2001, 0, 1)) / 1e3, !0), o |= 4, a += 8;
      break;
    case "z":
      r[1] = 0;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return e.c && (t.cmnt.push(wg(e.c)), n.setUint32(a, t.cmnt.length - 1, !0), o |= 524288, a += 4), n.setUint32(8, o, !0), r[St](0, a);
}
function Wa(e, t) {
  var r = new Uint8Array(32), n = aa(r), a = 12, o = 0, i = "";
  switch (r[0] = 4, e.t) {
    case "n":
      break;
    case "b":
      break;
    case "s":
      if (i = e.v == null ? "" : String(e.v), e.l) {
        var s = t.rsst.findIndex(function(c) {
          var f;
          return c.v == i && c.l == ((f = e.l) == null ? void 0 : f.Target);
        });
        s == -1 && (t.rsst[s = t.rsst.length] = { v: i, l: e.l.Target }), r[1] = 9, n.setUint32(a, s, !0), o |= 512, a += 4;
      }
      break;
    case "d":
      break;
    case "e":
      break;
    case "z":
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  switch (e.c && (n.setUint32(a, t.cmnt.length - 1, !0), o |= 4096, a += 4), e.t) {
    case "n":
      r[1] = 2, n.setFloat64(a, e.v, !0), o |= 32, a += 8;
      break;
    case "b":
      r[1] = 6, n.setFloat64(a, e.v ? 1 : 0, !0), o |= 32, a += 8;
      break;
    case "s":
      if (i = e.v == null ? "" : String(e.v), !e.l) {
        var l = t.sst.indexOf(i);
        l == -1 && (t.sst[l = t.sst.length] = i), r[1] = 3, n.setUint32(a, l, !0), o |= 16, a += 4;
      }
      break;
    case "d":
      r[1] = 5, n.setFloat64(a, (e.v.getTime() - Date.UTC(2001, 0, 1)) / 1e3, !0), o |= 64, a += 8;
      break;
    case "z":
      r[1] = 0;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return n.setUint32(8, o, !0), r[St](0, a);
}
function Ze(e) {
  var t = Te(e);
  return Lt(t[1][0].data);
}
function dt(e) {
  return we([
    [],
    [{ type: 0, data: be(e) }]
  ]);
}
function ht(e, t) {
  var r, n = (r = e.messages[0].meta[5]) != null && r[0] ? xl(e.messages[0].meta[5][0].data) : [], a = n.indexOf(t);
  a == -1 && (n.push(t), e.messages[0].meta[5] = [{ type: 2, data: _l(n) }]);
}
function Zt(e, t) {
  var r, n = (r = e.messages[0].meta[5]) != null && r[0] ? xl(e.messages[0].meta[5][0].data) : [];
  e.messages[0].meta[5] = [{ type: 2, data: _l(n.filter(function(a) {
    return a != t;
  })) }];
}
function wg(e) {
  for (var t = { a: "", t: "", replies: [] }, r = 0; r < e.length; ++r)
    r == 0 ? (t.a = e[r].a, t.t = e[r].t) : t.replies.push({ a: e[r].a, t: e[r].t });
  return t;
}
function yg(e, t, r) {
  var n, a, o, i = [
    [],
    [{ type: 0, data: be(0) }],
    [{ type: 0, data: be(0) }],
    [{ type: 2, data: new Uint8Array([]) }],
    [{ type: 2, data: new Uint8Array(Array.from({ length: 510 }, function() {
      return 255;
    })) }],
    [{ type: 0, data: be(5) }],
    [{ type: 2, data: new Uint8Array([]) }],
    [{ type: 2, data: new Uint8Array(Array.from({ length: 510 }, function() {
      return 255;
    })) }],
    [{ type: 0, data: be(1) }]
  ];
  if (!((n = i[6]) != null && n[0]) || !((a = i[7]) != null && a[0]))
    throw "Mutation only works on post-BNC storages!";
  var s = 0;
  if (i[7][0].data.length < 2 * e.length) {
    var l = new Uint8Array(2 * e.length);
    l.set(i[7][0].data), i[7][0].data = l;
  }
  if (i[4][0].data.length < 2 * e.length) {
    var c = new Uint8Array(2 * e.length);
    c.set(i[4][0].data), i[4][0].data = c;
  }
  for (var f = aa(i[7][0].data), d = 0, u = [], h = aa(i[4][0].data), g = 0, m = [], p = 4, w = 0; w < e.length; ++w) {
    if (e[w] == null || e[w].t == "z" && !((o = e[w].c) != null && o.length) || e[w].t == "e") {
      f.setUint16(w * 2, 65535, !0), h.setUint16(w * 2, 65535);
      continue;
    }
    f.setUint16(w * 2, d / p, !0), h.setUint16(w * 2, g / p, !0);
    var O, y;
    switch (e[w].t) {
      case "d":
        if (e[w].v instanceof Date) {
          O = za(e[w], t), y = Wa(e[w], t);
          break;
        }
        O = za(e[w], t), y = Wa(e[w], t);
        break;
      case "s":
      case "n":
      case "b":
      case "z":
        O = za(e[w], t), y = Wa(e[w], t);
        break;
      default:
        throw new Error("Unsupported value " + e[w]);
    }
    u.push(O), d += O.length, m.push(y), g += y.length, ++s;
  }
  for (i[2][0].data = be(s), i[5][0].data = be(5); w < i[7][0].data.length / 2; ++w)
    f.setUint16(w * 2, 65535, !0), h.setUint16(w * 2, 65535, !0);
  return i[6][0].data = ur(u), i[3][0].data = ur(m), i[8] = [{ type: 0, data: be(1) }], i;
}
function ri(e, t) {
  return {
    meta: [
      [],
      [{ type: 0, data: be(e) }]
    ],
    data: t
  };
}
function Ht(e, t) {
  t.last || (t.last = 927262);
  for (var r = t.last; r < 2e6; ++r)
    if (!t[r])
      return t[t.last = r] = e, r;
  throw new Error("Too many messages");
}
function Tg(e) {
  var t = {}, r = [];
  return e.FileIndex.map(function(n, a) {
    return [n, e.FullPaths[a]];
  }).forEach(function(n) {
    var a = n[0], o = n[1];
    a.type == 2 && a.name.match(/\.iwa/) && a.content[0] == 0 && oa(sa(a.content)).forEach(function(i) {
      r.push(i.id), t[i.id] = { deps: [], location: o, type: Lt(i.messages[0].meta[1][0].data) };
    });
  }), e.FileIndex.forEach(function(n) {
    n.name.match(/\.iwa/) && n.content[0] == 0 && oa(sa(n.content)).forEach(function(a) {
      a.messages.forEach(function(o) {
        [5, 6].forEach(function(i) {
          o.meta[i] && o.meta[i].forEach(function(s) {
            t[a.id].deps.push(Lt(s.data));
          });
        });
      });
    });
  }), t;
}
function Pn(e, t, r) {
  return we([
    [],
    [{ type: 0, data: be(1) }],
    [],
    [{ type: 5, data: new Uint8Array(Float32Array.from([e / 255]).buffer) }],
    [{ type: 5, data: new Uint8Array(Float32Array.from([t / 255]).buffer) }],
    [{ type: 5, data: new Uint8Array(Float32Array.from([r / 255]).buffer) }],
    [{ type: 5, data: new Uint8Array(Float32Array.from([1]).buffer) }],
    [],
    [],
    [],
    [],
    [],
    [{ type: 0, data: be(1) }]
  ]);
}
function Vo(e) {
  switch (e) {
    case 0:
      return Pn(99, 222, 171);
    case 1:
      return Pn(162, 197, 240);
    case 2:
      return Pn(255, 189, 189);
  }
  return Pn(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}
function Eg(e, t) {
  if (!t || !t.numbers)
    throw new Error("Must pass a `numbers` option -- check the README");
  var r = ze.read(t.numbers, { type: "base64" }), n = Tg(r), a = jt(r, n, 1);
  if (a == null)
    throw "Could not find message ".concat(1, " in Numbers template");
  var o = ia(Te(a.messages[0].data)[1], Ze);
  if (o.length > 1)
    throw new Error("Template NUMBERS file must have exactly one sheet");
  return e.SheetNames.forEach(function(i, s) {
    s >= 1 && (kg(r, n, s + 1), a = jt(r, n, 1), o = ia(Te(a.messages[0].data)[1], Ze)), xg(r, n, e.Sheets[i], i, s, o[s]);
  }), r;
}
function Ue(e, t, r, n) {
  var a = ze.find(e, t[r].location);
  if (!a)
    throw "Could not find ".concat(t[r].location, " in Numbers template");
  var o = oa(sa(a.content)), i = o.find(function(s) {
    return s.id == r;
  });
  n(i, o), a.content = Br($r(o)), a.size = a.content.length;
}
function jt(e, t, r) {
  var n = ze.find(e, t[r].location);
  if (!n)
    throw "Could not find ".concat(t[r].location, " in Numbers template");
  var a = oa(sa(n.content)), o = a.find(function(i) {
    return i.id == r;
  });
  return o;
}
function ni(e, t, r) {
  e[3].push({ type: 2, data: we([
    [],
    [{ type: 0, data: be(t) }],
    [{ type: 2, data: yt(r.replace(/-[\s\S]*$/, "")) }],
    [{ type: 2, data: yt(r) }],
    [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
    [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
    [],
    [],
    [],
    [],
    [{ type: 0, data: be(0) }],
    [],
    [{ type: 0, data: be(0) }]
  ]) }), e[1] = [{ type: 0, data: be(Math.max(t + 1, Lt(e[1][0].data))) }];
}
function vr(e, t, r, n, a, o) {
  o || (o = Ht({ deps: [], location: "", type: t }, a));
  var i = "".concat(n, "-").concat(o, ".iwa");
  a[o].location = "Root Entry" + i, ze.utils.cfb_add(e, i, Br($r([{
    id: o,
    messages: [ri(t, we(r))]
  }])));
  var s = i.replace(/^[\/]/, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  return Ue(e, a, 2, function(l) {
    var c = Te(l.messages[0].data);
    ni(c, o || 0, s), l.messages[0].data = we(c);
  }), o;
}
function _t(e, t, r, n) {
  var a = t[r].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), o = e[3].findIndex(function(s) {
    var l, c, f = Te(s.data);
    return (l = f[3]) != null && l[0] ? wn(f[3][0].data) == a : !!((c = f[2]) != null && c[0] && wn(f[2][0].data) == a);
  }), i = Te(e[3][o].data);
  i[6] || (i[6] = []), (Array.isArray(n) ? n : [n]).forEach(function(s) {
    i[6].push({
      type: 2,
      data: we([
        [],
        [{ type: 0, data: be(s) }]
      ])
    });
  }), e[3][o].data = we(i);
}
function Sg(e, t, r, n) {
  var a = t[r].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), o = e[3].findIndex(function(s) {
    var l, c, f = Te(s.data);
    return (l = f[3]) != null && l[0] ? wn(f[3][0].data) == a : !!((c = f[2]) != null && c[0] && wn(f[2][0].data) == a);
  }), i = Te(e[3][o].data);
  i[6] || (i[6] = []), i[6] = i[6].filter(function(s) {
    return Lt(Te(s.data)[1][0].data) != n;
  }), e[3][o].data = we(i);
}
function kg(e, t, r) {
  var n = -1, a = -1, o = {};
  Ue(e, t, 1, function(l, c) {
    var f = Te(l.messages[0].data);
    n = Ze(Te(l.messages[0].data)[1][0].data), a = Ht({ deps: [1], location: t[n].location, type: 2 }, t), o[n] = a, ht(l, a), f[1].push({ type: 2, data: dt(a) });
    var d = jt(e, t, n);
    d.id = a, t[1].location == t[a].location ? c.push(d) : Ue(e, t, a, function(u, h) {
      return h.push(d);
    }), l.messages[0].data = we(f);
  });
  var i = -1;
  Ue(e, t, a, function(l, c) {
    for (var f = Te(l.messages[0].data), d = 3; d <= 69; ++d)
      delete f[d];
    var u = ia(f[2], Ze);
    u.forEach(function(g) {
      return Zt(l, g);
    }), i = Ht({ deps: [a], location: t[u[0]].location, type: t[u[0]].type }, t), ht(l, i), o[u[0]] = i, f[2] = [{ type: 2, data: dt(i) }];
    var h = jt(e, t, u[0]);
    h.id = i, t[u[0]].location == t[a].location ? c.push(h) : (Ue(e, t, 2, function(g) {
      var m = Te(g.messages[0].data);
      _t(m, t, a, i), g.messages[0].data = we(m);
    }), Ue(e, t, i, function(g, m) {
      return m.push(h);
    })), l.messages[0].data = we(f);
  });
  var s = -1;
  Ue(e, t, i, function(l, c) {
    for (var f = Te(l.messages[0].data), d = Te(f[1][0].data), u = 3; u <= 69; ++u)
      delete d[u];
    var h = Ze(d[2][0].data);
    d[2][0].data = dt(o[h]), f[1][0].data = we(d);
    var g = Ze(f[2][0].data);
    Zt(l, g), s = Ht({ deps: [i], location: t[g].location, type: t[g].type }, t), ht(l, s), o[g] = s, f[2][0].data = dt(s);
    var m = jt(e, t, g);
    m.id = s, t[i].location == t[s].location ? c.push(m) : Ue(e, t, s, function(p, w) {
      return w.push(m);
    }), l.messages[0].data = we(f);
  }), Ue(e, t, s, function(l, c) {
    var f, d, u = Te(l.messages[0].data), h = wn(u[1][0].data), g = h.replace(/-[A-Z0-9]*/, "-".concat(("0000" + r.toString(16)).slice(-4)));
    if (u[1][0].data = yt(g), [12, 13, 29, 31, 32, 33, 39, 44, 47, 81, 82, 84].forEach(function(I) {
      return delete u[I];
    }), u[45]) {
      var m = Te(u[45][0].data), p = Ze(m[1][0].data);
      Zt(l, p), delete u[45];
    }
    if (u[70]) {
      var w = Te(u[70][0].data);
      (f = w[2]) == null || f.forEach(function(I) {
        var G = Te(I.data);
        [2, 3].map(function(v) {
          return G[v][0];
        }).forEach(function(v) {
          var k = Te(v.data);
          if (k[8]) {
            var A = Ze(k[8][0].data);
            Zt(l, A);
          }
        });
      }), delete u[70];
    }
    [
      46,
      30,
      34,
      35,
      36,
      38,
      48,
      49,
      60,
      61,
      62,
      63,
      64,
      71,
      72,
      73,
      74,
      75,
      85,
      86,
      87,
      88,
      89
    ].forEach(function(I) {
      if (u[I]) {
        var G = Ze(u[I][0].data);
        delete u[I], Zt(l, G);
      }
    });
    var O = Te(u[4][0].data);
    {
      [2, 4, 5, 6, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22].forEach(function(I) {
        var G;
        if ((G = O[I]) != null && G[0]) {
          var v = Ze(O[I][0].data), k = Ht({ deps: [s], location: t[v].location, type: t[v].type }, t);
          Zt(l, v), ht(l, k), o[v] = k;
          var A = jt(e, t, v);
          if (A.id = k, t[v].location == t[s].location)
            c.push(A);
          else {
            t[k].location = t[v].location.replace(v.toString(), k.toString()), t[k].location == t[v].location && (t[k].location = t[k].location.replace(/\.iwa/, "-".concat(k, ".iwa"))), ze.utils.cfb_add(e, t[k].location, Br($r([A])));
            var D = t[k].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
            Ue(e, t, 2, function(L) {
              var P = Te(L.messages[0].data);
              ni(P, k, D), _t(P, t, s, k), L.messages[0].data = we(P);
            });
          }
          O[I][0].data = dt(k);
        }
      });
      var y = Te(O[1][0].data);
      (d = y[2]) == null || d.forEach(function(I) {
        var G = Ze(I.data), v = Ht({ deps: [s], location: t[G].location, type: t[G].type }, t);
        Zt(l, G), ht(l, v), o[G] = v;
        var k = jt(e, t, G);
        if (k.id = v, t[G].location == t[s].location)
          c.push(k);
        else {
          t[v].location = t[G].location.replace(G.toString(), v.toString()), t[v].location == t[G].location && (t[v].location = t[v].location.replace(/\.iwa/, "-".concat(v, ".iwa"))), ze.utils.cfb_add(e, t[v].location, Br($r([k])));
          var A = t[v].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
          Ue(e, t, 2, function(D) {
            var L = Te(D.messages[0].data);
            ni(L, v, A), _t(L, t, s, v), D.messages[0].data = we(L);
          });
        }
        I.data = dt(v);
      }), O[1][0].data = we(y);
      var B = Te(O[3][0].data);
      B[1].forEach(function(I) {
        var G = Te(I.data), v = Ze(G[2][0].data), k = o[v];
        if (!o[v]) {
          k = Ht({ deps: [s], location: "", type: t[v].type }, t), t[k].location = "Root Entry/Index/Tables/Tile-".concat(k, ".iwa"), o[v] = k;
          var A = jt(e, t, v);
          A.id = k, Zt(l, v), ht(l, k), ze.utils.cfb_add(e, "/Index/Tables/Tile-".concat(k, ".iwa"), Br($r([A]))), Ue(e, t, 2, function(D) {
            var L = Te(D.messages[0].data);
            L[3].push({ type: 2, data: we([
              [],
              [{ type: 0, data: be(k) }],
              [{ type: 2, data: yt("Tables/Tile") }],
              [{ type: 2, data: yt("Tables/Tile-".concat(k)) }],
              [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
              [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
              [],
              [],
              [],
              [],
              [{ type: 0, data: be(0) }],
              [],
              [{ type: 0, data: be(0) }]
            ]) }), L[1] = [{ type: 0, data: be(Math.max(k + 1, Lt(L[1][0].data))) }], _t(L, t, s, k), D.messages[0].data = we(L);
          });
        }
        G[2][0].data = dt(k), I.data = we(G);
      }), O[3][0].data = we(B);
    }
    u[4][0].data = we(O), l.messages[0].data = we(u);
  });
}
function xg(e, t, r, n, a, o) {
  var i = [];
  Ue(e, t, o, function(c) {
    var f = Te(c.messages[0].data);
    f[1] = [{ type: 2, data: yt(n) }], i = ia(f[2], Ze), c.messages[0].data = we(f);
  });
  var s = jt(e, t, i[0]), l = Ze(Te(s.messages[0].data)[2][0].data);
  Ue(e, t, l, function(c, f) {
    return _g(e, t, r, c, f, l);
  });
}
function _g(e, t, r, n, a, o) {
  if (!r["!ref"])
    throw new Error("Cannot export empty sheet to NUMBERS");
  var i = ct(r["!ref"]);
  i.s.r = i.s.c = 0;
  var s = !1;
  i.e.c > 999 && (s = !0, i.e.c = 999), i.e.r > 999999 && (s = !0, i.e.r = 999999), s && console.error("Truncating to ".concat(rt(i)));
  var l = [];
  if (r["!data"])
    l = r["!data"];
  else {
    for (var c = [], f = 0; f <= i.e.c; ++f)
      c[f] = $e(f);
    for (var d = 0; d <= i.e.r; ++d) {
      l[d] = [];
      var u = "" + (d + 1);
      for (f = 0; f <= i.e.c; ++f) {
        var h = r[c[f] + u];
        h && (l[d][f] = h);
      }
    }
  }
  var g = {
    cmnt: [{ a: "~54ee77S~", t: "... the people who are crazy enough to think they can change the world, are the ones who do." }],
    rsst: [{ v: "~54ee77S~", l: "https://sheetjs.com/" }],
    sst: ["~Sh33tJ5~"]
  }, m = Te(n.messages[0].data);
  {
    m[6][0].data = be(i.e.r + 1), m[7][0].data = be(i.e.c + 1), delete m[46];
    var p = Te(m[4][0].data);
    {
      var w = Ze(Te(p[1][0].data)[2][0].data);
      Ue(e, t, w, function(ne, Q) {
        var ue, ye = Te(ne.messages[0].data);
        if ((ue = ye == null ? void 0 : ye[2]) != null && ue[0])
          for (var xe = 0; xe < l.length; ++xe) {
            var ke = Te(ye[2][0].data);
            ke[1][0].data = be(xe), ke[4][0].data = be(l[xe].length), ye[2][xe] = { type: ye[2][0].type, data: we(ke) };
          }
        ne.messages[0].data = we(ye);
      });
      var O = Ze(p[2][0].data);
      Ue(e, t, O, function(ne, Q) {
        for (var ue = Te(ne.messages[0].data), ye = 0; ye <= i.e.c; ++ye) {
          var xe = Te(ue[2][0].data);
          xe[1][0].data = be(ye), xe[4][0].data = be(i.e.r + 1), ue[2][ye] = { type: ue[2][0].type, data: we(xe) };
        }
        ne.messages[0].data = we(ue);
      });
      var y = Te(p[9][0].data);
      y[1] = [];
      var B = Te(p[3][0].data);
      {
        var I = 256;
        B[2] = [{ type: 0, data: be(I) }];
        var G = Ze(Te(B[1][0].data)[2][0].data), v = (function() {
          var ne = jt(e, t, 2), Q = Te(ne.messages[0].data), ue = Q[3].filter(function(ye) {
            return Lt(Te(ye.data)[1][0].data) == G;
          });
          return ue != null && ue.length ? Lt(Te(ue[0].data)[12][0].data) : 0;
        })();
        ze.utils.cfb_del(e, t[G].location), Ue(e, t, 2, function(ne) {
          var Q = Te(ne.messages[0].data);
          Q[3] = Q[3].filter(function(ue) {
            return Lt(Te(ue.data)[1][0].data) != G;
          }), Sg(Q, t, o, G), ne.messages[0].data = we(Q);
        }), Zt(n, G), B[1] = [];
        for (var k = Math.ceil((i.e.r + 1) / I), A = 0; A < k; ++A) {
          var D = Ht({
            deps: [],
            location: "",
            type: 6002
          }, t);
          t[D].location = "Root Entry/Index/Tables/Tile-".concat(D, ".iwa");
          for (var L = [
            [],
            [{ type: 0, data: be(0) }],
            [{ type: 0, data: be(Math.min(i.e.r + 1, (A + 1) * I)) }],
            [{ type: 0, data: be(0) }],
            [{ type: 0, data: be(Math.min((A + 1) * I, i.e.r + 1) - A * I) }],
            [],
            [{ type: 0, data: be(5) }],
            [{ type: 0, data: be(1) }],
            [{ type: 0, data: be(1) }]
          ], P = A * I; P <= Math.min(i.e.r, (A + 1) * I - 1); ++P) {
            var M = yg(l[P], g);
            M[1][0].data = be(P - A * I), L[5].push({ data: we(M), type: 2 });
          }
          B[1].push({ type: 2, data: we([
            [],
            [{ type: 0, data: be(A) }],
            [{ type: 2, data: dt(D) }]
          ]) });
          var V = {
            id: D,
            messages: [ri(6002, we(L))]
          }, F = Br($r([V]));
          ze.utils.cfb_add(e, "/Index/Tables/Tile-".concat(D, ".iwa"), F), Ue(e, t, 2, function(ne) {
            var Q = Te(ne.messages[0].data);
            Q[3].push({ type: 2, data: we([
              [],
              [{ type: 0, data: be(D) }],
              [{ type: 2, data: yt("Tables/Tile") }],
              [{ type: 2, data: yt("Tables/Tile-".concat(D)) }],
              [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
              [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
              [],
              [],
              [],
              [],
              [{ type: 0, data: be(0) }],
              [],
              [{ type: 0, data: be(v) }]
            ]) }), Q[1] = [{ type: 0, data: be(Math.max(D + 1, Lt(Q[1][0].data))) }], _t(Q, t, o, D), ne.messages[0].data = we(Q);
          }), ht(n, D), y[1].push({ type: 2, data: we([
            [],
            [{ type: 0, data: be(A * I) }],
            [{ type: 0, data: be(A) }]
          ]) });
        }
      }
      if (p[3][0].data = we(B), p[9][0].data = we(y), p[10] = [{ type: 2, data: new Uint8Array([]) }], r["!merges"]) {
        var U = Ht({
          type: 6144,
          deps: [o],
          location: t[o].location
        }, t);
        a.push({
          id: U,
          messages: [ri(6144, we([
            [],
            r["!merges"].map(function(ne) {
              return { type: 2, data: we([
                [],
                [{ type: 2, data: we([
                  [],
                  [{ type: 5, data: new Uint8Array(new Uint16Array([ne.s.r, ne.s.c]).buffer) }]
                ]) }],
                [{ type: 2, data: we([
                  [],
                  [{ type: 5, data: new Uint8Array(new Uint16Array([ne.e.r - ne.s.r + 1, ne.e.c - ne.s.c + 1]).buffer) }]
                ]) }]
              ]) };
            })
          ]))]
        }), p[13] = [{ type: 2, data: dt(U) }], Ue(e, t, 2, function(ne) {
          var Q = Te(ne.messages[0].data);
          _t(Q, t, o, U), ne.messages[0].data = we(Q);
        }), ht(n, U);
      } else
        delete p[13];
      var K = Ze(p[4][0].data);
      Ue(e, t, K, function(ne) {
        var Q = Te(ne.messages[0].data);
        Q[3] = [], g.sst.forEach(function(ue, ye) {
          ye != 0 && Q[3].push({ type: 2, data: we([
            [],
            [{ type: 0, data: be(ye) }],
            [{ type: 0, data: be(1) }],
            [{ type: 2, data: yt(ue) }]
          ]) });
        }), ne.messages[0].data = we(Q);
      });
      var Z = Ze(p[17][0].data);
      if (Ue(e, t, Z, function(ne) {
        var Q = Te(ne.messages[0].data);
        Q[3] = [];
        var ue = [
          904980,
          903835,
          903815,
          903845
        ];
        g.rsst.forEach(function(ye, xe) {
          if (xe != 0) {
            var ke = [
              [],
              [{ type: 0, data: new Uint8Array([5]) }],
              [],
              [{ type: 2, data: yt(ye.v) }]
            ];
            ke[10] = [{ type: 0, data: new Uint8Array([1]) }], ke[19] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 18, 2, 101, 110]) }], ke[5] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 155, 149, 55]) }], ke[2] = [{ type: 2, data: new Uint8Array([8, 148, 158, 55]) }], ke[6] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], ke[7] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 135, 149, 55]) }], ke[8] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 165, 149, 55]) }], ke[14] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], ke[24] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }];
            var S = Ht({ deps: [], location: "", type: 2001 }, t), z = [];
            if (ye.l) {
              var N = vr(e, 2032, [
                [],
                [],
                [{ type: 2, data: yt(ye.l) }]
              ], "/Index/Tables/DataList", t);
              ke[11] = [];
              var R = [[], []];
              R[1] || (R[1] = []), R[1].push({ type: 2, data: we([
                [],
                [{ type: 0, data: be(0) }],
                [{ type: 2, data: dt(N) }]
              ]) }), ke[11][0] = { type: 2, data: we(R) }, z.push(N);
            }
            vr(e, 2001, ke, "/Index/Tables/DataList", t, S), Ue(e, t, S, function(ae) {
              ue.forEach(function(se) {
                return ht(ae, se);
              }), z.forEach(function(se) {
                return ht(ae, se);
              });
            });
            var J = vr(e, 6218, [
              [],
              [{ type: 2, data: dt(S) }],
              [],
              [{ type: 2, data: new Uint8Array([13, 255, 255, 255, 0, 18, 10, 16, 255, 255, 1, 24, 255, 255, 255, 255, 7]) }]
            ], "/Index/Tables/DataList", t);
            Ue(e, t, J, function(ae) {
              return ht(ae, S);
            }), Q[3].push({ type: 2, data: we([
              [],
              [{ type: 0, data: be(xe) }],
              [{ type: 0, data: be(1) }],
              [],
              [],
              [],
              [],
              [],
              [],
              [{ type: 2, data: dt(J) }]
            ]) }), ht(ne, J), Ue(e, t, 2, function(ae) {
              var se = Te(ae.messages[0].data);
              _t(se, t, Z, J), _t(se, t, J, S), _t(se, t, S, z), _t(se, t, S, ue), ae.messages[0].data = we(se);
            });
          }
        }), ne.messages[0].data = we(Q);
      }), g.cmnt.length > 1) {
        var me = Ze(p[19][0].data), te = {}, ve = 0;
        Ue(e, t, me, function(ne) {
          var Q = Te(ne.messages[0].data);
          Q[3] = [], g.cmnt.forEach(function(ue, ye) {
            if (ye != 0) {
              var xe = [];
              ue.replies && ue.replies.forEach(function(z) {
                te[z.a || ""] || (te[z.a || ""] = vr(e, 212, [
                  [],
                  [{ type: 2, data: yt(z.a || "") }],
                  [{ type: 2, data: Vo(++ve) }],
                  [],
                  [{ type: 0, data: be(0) }]
                ], "/Index/Tables/DataList", t));
                var N = te[z.a || ""], R = vr(e, 3056, [
                  [],
                  [{ type: 2, data: yt(z.t || "") }],
                  [{ type: 2, data: we([
                    [],
                    [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]
                  ]) }],
                  [{ type: 2, data: dt(N) }]
                ], "/Index/Tables/DataList", t);
                Ue(e, t, R, function(J) {
                  return ht(J, N);
                }), xe.push(R), Ue(e, t, 2, function(J) {
                  var ae = Te(J.messages[0].data);
                  _t(ae, t, R, N), J.messages[0].data = we(ae);
                });
              }), te[ue.a || ""] || (te[ue.a || ""] = vr(e, 212, [
                [],
                [{ type: 2, data: yt(ue.a || "") }],
                [{ type: 2, data: Vo(++ve) }],
                [],
                [{ type: 0, data: be(0) }]
              ], "/Index/Tables/DataList", t));
              var ke = te[ue.a || ""], S = vr(e, 3056, [
                [],
                [{ type: 2, data: yt(ue.t || "") }],
                [{ type: 2, data: we([
                  [],
                  [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]
                ]) }],
                [{ type: 2, data: dt(ke) }],
                xe.map(function(z) {
                  return { type: 2, data: dt(z) };
                }),
                [{ type: 2, data: we([
                  [],
                  [{ type: 0, data: be(ye) }],
                  [{ type: 0, data: be(0) }]
                ]) }]
              ], "/Index/Tables/DataList", t);
              Ue(e, t, S, function(z) {
                ht(z, ke), xe.forEach(function(N) {
                  return ht(z, N);
                });
              }), Q[3].push({ type: 2, data: we([
                [],
                [{ type: 0, data: be(ye) }],
                [{ type: 0, data: be(1) }],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [{ type: 2, data: dt(S) }]
              ]) }), ht(ne, S), Ue(e, t, 2, function(z) {
                var N = Te(z.messages[0].data);
                _t(N, t, me, S), _t(N, t, S, ke), xe.length && _t(N, t, S, xe), z.messages[0].data = we(N);
              });
            }
          }), Q[2][0].data = be(g.cmnt.length + 1), ne.messages[0].data = we(Q);
        });
      }
    }
    m[4][0].data = we(p);
  }
  n.messages[0].data = we(m);
}
function Og(e) {
  return function(t) {
    for (var r = 0; r != e.length; ++r) {
      var n = e[r];
      t[n[0]] === void 0 && (t[n[0]] = n[1]), n[2] === "n" && (t[n[0]] = Number(t[n[0]]));
    }
  };
}
function Oi(e) {
  Og([
    ["cellDates", !1],
    /* write date cells with type `d` */
    ["bookSST", !1],
    /* Generate Shared String Table */
    ["bookType", "xlsx"],
    /* Type of workbook (xlsx/m/b) */
    ["compression", !1],
    /* Use file compression */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function Ag(e, t) {
  e && !e.SSF && (e.SSF = bt(Ve)), e && e.SSF && (da(), ha(e.SSF), t.revssf = ma(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, un ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = "bin", n = !0, a = Us();
  Oi(t = t || {});
  var o = di(), i = "", s = 0;
  if (t.cellXfs = [], hr(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), i = "docProps/core.xml", Ae(o, i, Ws(e.Props, t)), a.coreprops.push(i), Pe(t.rels, 2, i, Ne.CORE_PROPS), i = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var l = [], c = 0; c < e.SheetNames.length; ++c)
      (e.Workbook.Sheets[c] || {}).Hidden != 2 && l.push(e.SheetNames[c]);
    e.Props.SheetNames = l;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, Ae(o, i, Hs(e.Props)), a.extprops.push(i), Pe(t.rels, 3, i, Ne.EXT_PROPS), e.Custprops !== e.Props && tt(e.Custprops || {}).length > 0 && (i = "docProps/custom.xml", Ae(o, i, js(e.Custprops)), a.custprops.push(i), Pe(t.rels, 4, i, Ne.CUST_PROPS));
  var f = ["SheetJ5"];
  for (t.tcid = 0, s = 1; s <= e.SheetNames.length; ++s) {
    var d = { "!id": {} }, u = e.Sheets[e.SheetNames[s - 1]], h = (u || {})["!type"] || "sheet";
    switch (h) {
      case "chart":
      /* falls through */
      default:
        i = "xl/worksheets/sheet" + s + "." + r, Ae(o, i, cp(s - 1, t, e, d)), a.sheets.push(i), Pe(t.wbrels, -1, "worksheets/sheet" + s + "." + r, Ne.WS[0]);
    }
    if (u) {
      var g = u["!comments"], m = !1, p = "";
      if (g && g.length > 0) {
        var w = !1;
        g.forEach(function(y) {
          y[1].forEach(function(B) {
            B.T == !0 && (w = !0);
          });
        }), w && (p = "xl/threadedComments/threadedComment" + s + ".xml", Ae(o, p, il(g, f, t)), a.threadedcomments.push(p), Pe(d, -1, "../threadedComments/threadedComment" + s + ".xml", Ne.TCMNT)), p = "xl/comments" + s + "." + r, Ae(o, p, Z0(g)), a.comments.push(p), Pe(d, -1, "../comments" + s + "." + r, Ne.CMNT), m = !0;
      }
      u["!legacy"] && m && Ae(o, "xl/drawings/vmlDrawing" + s + ".vml", al(s, u["!comments"])), delete u["!comments"], delete u["!legacy"];
    }
    d["!id"].rId1 && Ae(o, Bs(i), Fr(d));
  }
  t.Strings != null && t.Strings.length > 0 && (i = "xl/sharedStrings." + r, Ae(o, i, c0(t.Strings)), a.strs.push(i), Pe(t.wbrels, -1, "sharedStrings." + r, Ne.SST)), i = "xl/workbook." + r, Ae(o, i, Dp(e)), a.workbooks.push(i), Pe(t.rels, 1, i, Ne.WB), i = "xl/theme/theme1.xml";
  var O = nl(e.Themes, t);
  return Ae(o, i, O), a.themes.push(i), Pe(t.wbrels, -1, "theme/theme1.xml", Ne.THEME), i = "xl/styles." + r, Ae(o, i, F0(e, t)), a.styles.push(i), Pe(t.wbrels, -1, "styles." + r, Ne.STY), e.vbaraw && n && (i = "xl/vbaProject.bin", Ae(o, i, e.vbaraw), a.vba.push(i), Pe(t.wbrels, -1, "vbaProject.bin", Ne.VBA)), i = "xl/metadata." + r, Ae(o, i, j0()), a.metadata.push(i), Pe(t.wbrels, -1, "metadata." + r, Ne.XLMETA), f.length > 1 && (i = "xl/persons/person.xml", Ae(o, i, ol(f)), a.people.push(i), Pe(t.wbrels, -1, "persons/person.xml", Ne.PEOPLE)), Ae(o, "[Content_Types].xml", $s(a, t)), Ae(o, "_rels/.rels", Fr(t.rels)), Ae(o, "xl/_rels/workbook." + r + ".rels", Fr(t.wbrels)), delete t.revssf, delete t.ssf, o;
}
function Cg(e, t) {
  e && !e.SSF && (e.SSF = bt(Ve)), e && e.SSF && (da(), ha(e.SSF), t.revssf = ma(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, un ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = "xml", n = t1.indexOf(t.bookType) > -1, a = Us();
  Oi(t = t || {});
  var o = di(), i = "", s = 0;
  if (t.cellXfs = [], hr(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), i = "docProps/core.xml", Ae(o, i, Ws(e.Props, t)), a.coreprops.push(i), Pe(t.rels, 2, i, Ne.CORE_PROPS), i = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var l = [], c = 0; c < e.SheetNames.length; ++c)
      (e.Workbook.Sheets[c] || {}).Hidden != 2 && l.push(e.SheetNames[c]);
    e.Props.SheetNames = l;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, Ae(o, i, Hs(e.Props)), a.extprops.push(i), Pe(t.rels, 3, i, Ne.EXT_PROPS), e.Custprops !== e.Props && tt(e.Custprops || {}).length > 0 && (i = "docProps/custom.xml", Ae(o, i, js(e.Custprops)), a.custprops.push(i), Pe(t.rels, 4, i, Ne.CUST_PROPS));
  var f = ["SheetJ5"];
  for (t.tcid = 0, s = 1; s <= e.SheetNames.length; ++s) {
    var d = { "!id": {} }, u = e.Sheets[e.SheetNames[s - 1]], h = (u || {})["!type"] || "sheet";
    switch (h) {
      case "chart":
      /* falls through */
      default:
        i = "xl/worksheets/sheet" + s + "." + r, Ae(o, i, Xd(s - 1, t, e, d)), a.sheets.push(i), Pe(t.wbrels, -1, "worksheets/sheet" + s + "." + r, Ne.WS[0]);
    }
    if (u) {
      var g = u["!comments"], m = !1, p = "";
      if (g && g.length > 0) {
        var w = !1;
        g.forEach(function(O) {
          O[1].forEach(function(y) {
            y.T == !0 && (w = !0);
          });
        }), w && (p = "xl/threadedComments/threadedComment" + s + ".xml", Ae(o, p, il(g, f, t)), a.threadedcomments.push(p), Pe(d, -1, "../threadedComments/threadedComment" + s + ".xml", Ne.TCMNT)), p = "xl/comments" + s + "." + r, Ae(o, p, J0(g)), a.comments.push(p), Pe(d, -1, "../comments" + s + "." + r, Ne.CMNT), m = !0;
      }
      u["!legacy"] && m && Ae(o, "xl/drawings/vmlDrawing" + s + ".vml", al(s, u["!comments"])), delete u["!comments"], delete u["!legacy"];
    }
    d["!id"].rId1 && Ae(o, Bs(i), Fr(d));
  }
  return t.Strings != null && t.Strings.length > 0 && (i = "xl/sharedStrings." + r, Ae(o, i, i0(t.Strings, t)), a.strs.push(i), Pe(t.wbrels, -1, "sharedStrings." + r, Ne.SST)), i = "xl/workbook." + r, Ae(o, i, gp(e)), a.workbooks.push(i), Pe(t.rels, 1, i, Ne.WB), i = "xl/theme/theme1.xml", Ae(o, i, nl(e.Themes, t)), a.themes.push(i), Pe(t.wbrels, -1, "theme/theme1.xml", Ne.THEME), i = "xl/styles." + r, Ae(o, i, g0(e, t)), a.styles.push(i), Pe(t.wbrels, -1, "styles." + r, Ne.STY), e.vbaraw && n && (i = "xl/vbaProject.bin", Ae(o, i, e.vbaraw), a.vba.push(i), Pe(t.wbrels, -1, "vbaProject.bin", Ne.VBA)), i = "xl/metadata." + r, Ae(o, i, G0()), a.metadata.push(i), Pe(t.wbrels, -1, "metadata." + r, Ne.XLMETA), f.length > 1 && (i = "xl/persons/person.xml", Ae(o, i, ol(f)), a.people.push(i), Pe(t.wbrels, -1, "persons/person.xml", Ne.PEOPLE)), Ae(o, "[Content_Types].xml", $s(a, t)), Ae(o, "_rels/.rels", Fr(t.rels)), Ae(o, "xl/_rels/workbook." + r + ".rels", Fr(t.wbrels)), delete t.revssf, delete t.ssf, o;
}
function Dg(e, t) {
  var r = "";
  switch ((t || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = cr(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (t && t.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function Ol(e, t) {
  switch (t.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      t.type = "";
      break;
    case "file":
      return En(t.file, ze.write(e, { type: Fe ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + t.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return ze.write(e, t);
}
function Rg(e, t) {
  switch (t.bookType) {
    case "ods":
      return kl(e, t);
    case "numbers":
      return Eg(e, t);
    case "xlsb":
      return Ag(e, t);
    default:
      return Cg(e, t);
  }
}
function Ng(e, t) {
  var r = bt(t || {}), n = Rg(e, r);
  return Lg(n, r);
}
function Lg(e, t) {
  var r = {}, n = Fe ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
  if (t.compression && (r.compression = "DEFLATE"), t.password) r.type = n;
  else switch (t.type) {
    case "base64":
      r.type = "base64";
      break;
    case "binary":
      r.type = "string";
      break;
    case "string":
      throw new Error("'string' output type invalid for '" + t.bookType + "' files");
    case "buffer":
    case "file":
      r.type = n;
      break;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  var a = e.FullPaths ? ze.write(e, { fileType: "zip", type: (
    /*::(*/
    { nodebuffer: "buffer", string: "binary" }[r.type] || r.type
  ), compression: !!t.compression }) : e.generate(r);
  if (typeof Deno < "u" && typeof a == "string") {
    if (t.type == "binary" || t.type == "base64") return a;
    a = new Uint8Array(ua(a));
  }
  return t.password && typeof encrypt_agile < "u" ? Ol(encrypt_agile(a, t.password), t) : t.type === "file" ? En(t.file, a) : t.type == "string" ? Pr(
    /*::(*/
    a
    /*:: :any)*/
  ) : a;
}
function Mg(e, t) {
  var r = t || {}, n = Hp(e, r);
  return Ol(n, r);
}
function Wt(e, t, r) {
  r || (r = "");
  var n = r + e;
  switch (t.type) {
    case "base64":
      return jn(mn(n));
    case "binary":
      return mn(n);
    case "string":
      return e;
    case "file":
      return En(t.file, n, "utf8");
    case "buffer":
      return Fe ? Xt(n, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(n) : Wt(n, { type: "binary" }).split("").map(function(a) {
        return a.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function Ig(e, t) {
  switch (t.type) {
    case "base64":
      return Mf(e);
    case "binary":
      return e;
    case "string":
      return e;
    /* override in sheet_to_txt */
    case "file":
      return En(t.file, e, "binary");
    case "buffer":
      return Fe ? Xt(e, "binary") : e.split("").map(function(r) {
        return r.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function Fn(e, t) {
  switch (t.type) {
    case "string":
    case "base64":
    case "binary":
      for (var r = "", n = 0; n < e.length; ++n) r += String.fromCharCode(e[n]);
      return t.type == "base64" ? jn(r) : t.type == "string" ? Pr(r) : r;
    case "file":
      return En(t.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
}
function Al(e, t) {
  Lf(), pp(e);
  var r = bt(t || {});
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), r.type == "array") {
    r.type = "binary";
    var n = Al(e, r);
    return r.type = "array", ua(n);
  }
  var a = 0;
  if (r.sheet && (typeof r.sheet == "number" ? a = r.sheet : a = e.SheetNames.indexOf(r.sheet), !e.SheetNames[a]))
    throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
  switch (r.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return Wt(Wp(e, r), r);
    case "slk":
    case "sylk":
      return Wt(t0.from_sheet(e.Sheets[e.SheetNames[a]], r, e), r);
    case "htm":
    case "html":
      return Wt(Tl(e.Sheets[e.SheetNames[a]], r), r);
    case "txt":
      return Ig(Cl(e.Sheets[e.SheetNames[a]], r), r);
    case "csv":
      return Wt(Ai(e.Sheets[e.SheetNames[a]], r), r, "\uFEFF");
    case "dif":
      return Wt(r0.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "dbf":
      return Fn(e0.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "prn":
      return Wt(n0.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "rtf":
      return Wt(u0(e.Sheets[e.SheetNames[a]]), r);
    case "eth":
      return Wt(Qs.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "fods":
      return Wt(kl(e, r), r);
    case "wk1":
      return Fn(Ro.sheet_to_wk1(e.Sheets[e.SheetNames[a]], r), r);
    case "wk3":
      return Fn(Ro.book_to_wk3(e, r), r);
    case "biff2":
      r.biff || (r.biff = 2);
    /* falls through */
    case "biff3":
      r.biff || (r.biff = 3);
    /* falls through */
    case "biff4":
      return r.biff || (r.biff = 4), Fn(yl(e, r), r);
    case "biff5":
      r.biff || (r.biff = 5);
    /* falls through */
    case "biff8":
    case "xla":
    case "xls":
      return r.biff || (r.biff = 8), Mg(e, r);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return Ng(e, r);
    default:
      throw new Error("Unrecognized bookType |" + r.bookType + "|");
  }
}
function Pg(e) {
  if (!e.bookType) {
    var t = {
      xls: "biff8",
      htm: "html",
      slk: "sylk",
      socialcalc: "eth",
      Sh33tJS: "WTF"
    }, r = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
    r.match(/^\.[a-z]+$/) && (e.bookType = r.slice(1)), e.bookType = t[e.bookType] || e.bookType;
  }
}
function Fg(e, t, r) {
  var n = {};
  return n.type = "file", n.file = t, Pg(n), Al(e, n);
}
function Ug(e, t, r, n, a, o, i) {
  var s = Be(r), l = i.defval, c = i.raw || !Object.prototype.hasOwnProperty.call(i, "raw"), f = !0, d = e["!data"] != null, u = a === 1 ? [] : {};
  if (a !== 1)
    if (Object.defineProperty) try {
      Object.defineProperty(u, "__rowNum__", { value: r, enumerable: !1 });
    } catch {
      u.__rowNum__ = r;
    }
    else u.__rowNum__ = r;
  if (!d || e["!data"][r]) for (var h = t.s.c; h <= t.e.c; ++h) {
    var g = d ? (e["!data"][r] || [])[h] : e[n[h] + s];
    if (g == null || g.t === void 0) {
      if (l === void 0) continue;
      o[h] != null && (u[o[h]] = l);
      continue;
    }
    var m = g.v;
    switch (g.t) {
      case "z":
        if (m == null) break;
        continue;
      case "e":
        m = m == 0 ? null : void 0;
        break;
      case "s":
      case "b":
      case "n":
        if (!g.z || !Er(g.z) || (m = Ir(m), typeof m == "number")) break;
      /* falls through */
      case "d":
        i && (i.UTC || i.raw === !1) || (m = zr(new Date(m)));
        break;
      default:
        throw new Error("unrecognized type " + g.t);
    }
    if (o[h] != null) {
      if (m == null)
        if (g.t == "e" && m === null) u[o[h]] = null;
        else if (l !== void 0) u[o[h]] = l;
        else if (c && m === null) u[o[h]] = null;
        else continue;
      else
        u[o[h]] = (g.t === "n" && typeof i.rawNumbers == "boolean" ? i.rawNumbers : c) ? m : ir(g, m, i);
      m != null && (f = !1);
    }
  }
  return { row: u, isempty: f };
}
function ai(e, t) {
  if (e == null || e["!ref"] == null) return [];
  var r = { t: "n", v: 0 }, n = 0, a = 1, o = [], i = 0, s = "", l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, c = t || {}, f = c.range != null ? c.range : e["!ref"];
  switch (c.header === 1 ? n = 1 : c.header === "A" ? n = 2 : Array.isArray(c.header) ? n = 3 : c.header == null && (n = 0), typeof f) {
    case "string":
      l = He(f);
      break;
    case "number":
      l = He(e["!ref"]), l.s.r = f;
      break;
    default:
      l = f;
  }
  n > 0 && (a = 0);
  var d = Be(l.s.r), u = [], h = [], g = 0, m = 0, p = e["!data"] != null, w = l.s.r, O = 0, y = {};
  p && !e["!data"][w] && (e["!data"][w] = []);
  var B = c.skipHidden && e["!cols"] || [], I = c.skipHidden && e["!rows"] || [];
  for (O = l.s.c; O <= l.e.c; ++O)
    if (!(B[O] || {}).hidden)
      switch (u[O] = $e(O), r = p ? e["!data"][w][O] : e[u[O] + d], n) {
        case 1:
          o[O] = O - l.s.c;
          break;
        case 2:
          o[O] = u[O];
          break;
        case 3:
          o[O] = c.header[O - l.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), s = i = ir(r, null, c), m = y[i] || 0, !m) y[i] = 1;
          else {
            do
              s = i + "_" + m++;
            while (y[s]);
            y[i] = m, y[s] = 1;
          }
          o[O] = s;
      }
  for (w = l.s.r + a; w <= l.e.r; ++w)
    if (!(I[w] || {}).hidden) {
      var G = Ug(e, l, w, u, n, o, c);
      (G.isempty === !1 || (n === 1 ? c.blankrows !== !1 : c.blankrows)) && (h[g++] = G.row);
    }
  return h.length = g, h;
}
var Ho = /"/g;
function $g(e, t, r, n, a, o, i, s, l) {
  for (var c = !0, f = [], d = "", u = Be(r), h = e["!data"] != null, g = h && e["!data"][r] || [], m = t.s.c; m <= t.e.c; ++m)
    if (n[m]) {
      var p = h ? g[m] : e[n[m] + u];
      if (p == null) d = "";
      else if (p.v != null) {
        c = !1, d = "" + (l.rawNumbers && p.t == "n" ? p.v : ir(p, null, l));
        for (var w = 0, O = 0; w !== d.length; ++w) if ((O = d.charCodeAt(w)) === a || O === o || O === 34 || l.forceQuotes) {
          d = '"' + d.replace(Ho, '""') + '"';
          break;
        }
        d == "ID" && s == 0 && f.length == 0 && (d = '"ID"');
      } else p.f != null && !p.F ? (c = !1, d = "=" + p.f, d.indexOf(",") >= 0 && (d = '"' + d.replace(Ho, '""') + '"')) : d = "";
      f.push(d);
    }
  if (l.strip) for (; f[f.length - 1] === ""; ) --f.length;
  return l.blankrows === !1 && c ? null : f.join(i);
}
function Ai(e, t) {
  var r = [], n = t ?? {};
  if (e == null || e["!ref"] == null) return "";
  for (var a = He(e["!ref"]), o = n.FS !== void 0 ? n.FS : ",", i = o.charCodeAt(0), s = n.RS !== void 0 ? n.RS : `
`, l = s.charCodeAt(0), c = "", f = [], d = n.skipHidden && e["!cols"] || [], u = n.skipHidden && e["!rows"] || [], h = a.s.c; h <= a.e.c; ++h) (d[h] || {}).hidden || (f[h] = $e(h));
  for (var g = 0, m = a.s.r; m <= a.e.r; ++m)
    (u[m] || {}).hidden || (c = $g(e, a, m, f, i, l, o, g, n), c != null && (c || n.blankrows !== !1) && r.push((g++ ? s : "") + c));
  return r.join("");
}
function Cl(e, t) {
  t || (t = {}), t.FS = "	", t.RS = `
`;
  var r = Ai(e, t);
  return r;
}
function Bg(e, t) {
  var r = "", n, a = "";
  if (e == null || e["!ref"] == null) return [];
  var o = He(e["!ref"]), i = "", s = [], l, c = [], f = e["!data"] != null;
  for (l = o.s.c; l <= o.e.c; ++l) s[l] = $e(l);
  for (var d = o.s.r; d <= o.e.r; ++d)
    for (i = Be(d), l = o.s.c; l <= o.e.c; ++l)
      if (r = s[l] + i, n = f ? (e["!data"][d] || [])[l] : e[r], a = "", n !== void 0) {
        if (n.F != null) {
          if (r = n.F, !n.f) continue;
          a = n.f, r.indexOf(":") == -1 && (r = r + ":" + r);
        }
        if (n.f != null) a = n.f;
        else {
          if (t && t.values === !1 || n.t == "z") continue;
          if (n.t == "n" && n.v != null) a = "" + n.v;
          else if (n.t == "b") a = n.v ? "TRUE" : "FALSE";
          else if (n.w !== void 0) a = "'" + n.w;
          else {
            if (n.v === void 0) continue;
            n.t == "s" ? a = "'" + n.v : a = "" + n.v;
          }
        }
        c[c.length] = r + "=" + a;
      }
  return c;
}
function Dl(e, t, r) {
  var n = r || {}, a = e ? e["!data"] != null : n.dense, o = +!n.skipHeader, i = e || {};
  !e && a && (i["!data"] = []);
  var s = 0, l = 0;
  if (i && n.origin != null)
    if (typeof n.origin == "number") s = n.origin;
    else {
      var c = typeof n.origin == "string" ? Ke(n.origin) : n.origin;
      s = c.r, l = c.c;
    }
  var f = { s: { c: 0, r: 0 }, e: { c: l, r: s + t.length - 1 + o } };
  if (i["!ref"]) {
    var d = He(i["!ref"]);
    f.e.c = Math.max(f.e.c, d.e.c), f.e.r = Math.max(f.e.r, d.e.r), s == -1 && (s = d.e.r + 1, f.e.r = s + t.length - 1 + o);
  } else
    s == -1 && (s = 0, f.e.r = t.length - 1 + o);
  var u = n.header || [], h = 0, g = [];
  t.forEach(function(p, w) {
    a && !i["!data"][s + w + o] && (i["!data"][s + w + o] = []), a && (g = i["!data"][s + w + o]), tt(p).forEach(function(O) {
      (h = u.indexOf(O)) == -1 && (u[h = u.length] = O);
      var y = p[O], B = "z", I = "", G = a ? "" : $e(l + h) + Be(s + w + o), v = a ? g[l + h] : i[G];
      y && typeof y == "object" && !(y instanceof Date) ? a ? g[l + h] = y : i[G] = y : (typeof y == "number" ? B = "n" : typeof y == "boolean" ? B = "b" : typeof y == "string" ? B = "s" : y instanceof Date ? (B = "d", n.UTC || (y = pa(y)), n.cellDates || (B = "n", y = ft(y)), I = v != null && v.z && Er(v.z) ? v.z : n.dateNF || Ve[14]) : y === null && n.nullError && (B = "e", y = 0), v ? (v.t = B, v.v = y, delete v.w, delete v.R, I && (v.z = I)) : a ? g[l + h] = v = { t: B, v: y } : i[G] = v = { t: B, v: y }, I && (v.z = I));
    });
  }), f.e.c = Math.max(f.e.c, l + u.length - 1);
  var m = Be(s);
  if (a && !i["!data"][s] && (i["!data"][s] = []), o) for (h = 0; h < u.length; ++h)
    a ? i["!data"][s][h + l] = { t: "s", v: u[h] } : i[$e(h + l) + m] = { t: "s", v: u[h] };
  return i["!ref"] = rt(f), i;
}
function zg(e, t) {
  return Dl(null, e, t);
}
function la(e, t, r) {
  if (typeof t == "string") {
    if (e["!data"] != null) {
      var n = Ke(t);
      return e["!data"][n.r] || (e["!data"][n.r] = []), e["!data"][n.r][n.c] || (e["!data"][n.r][n.c] = { t: "z" });
    }
    return e[t] || (e[t] = { t: "z" });
  }
  return typeof t != "number" ? la(e, Je(t)) : la(e, $e(r || 0) + Be(t));
}
function Wg(e, t) {
  if (typeof t == "number") {
    if (t >= 0 && e.SheetNames.length > t) return t;
    throw new Error("Cannot find sheet # " + t);
  } else if (typeof t == "string") {
    var r = e.SheetNames.indexOf(t);
    if (r > -1) return r;
    throw new Error("Cannot find sheet name |" + t + "|");
  } else throw new Error("Cannot find sheet |" + t + "|");
}
function Vg(e, t) {
  var r = { SheetNames: [], Sheets: {} };
  return e && Ci(r, e, t || "Sheet1"), r;
}
function Ci(e, t, r, n) {
  var a = 1;
  if (!r) for (; a <= 65535 && e.SheetNames.indexOf(r = "Sheet" + a) != -1; ++a, r = void 0) ;
  if (!r || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (n && e.SheetNames.indexOf(r) >= 0 && r.length < 32) {
    var o = r.match(/\d+$/);
    a = o && +o[0] || 0;
    var i = o && r.slice(0, o.index) || r;
    for (++a; a <= 65535 && e.SheetNames.indexOf(r = i + a) != -1; ++a) ;
  }
  if (vl(r), e.SheetNames.indexOf(r) >= 0) throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = t, r;
}
function Hg(e, t, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = Wg(e, t);
  switch (e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[n].Hidden = r;
}
function jg(e, t) {
  return e.z = t, e;
}
function Rl(e, t, r) {
  return t ? (e.l = { Target: t }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function Gg(e, t, r) {
  return Rl(e, "#" + t, r);
}
function Kg(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" });
}
function Yg(e, t, r, n) {
  for (var a = typeof t != "string" ? t : He(t), o = typeof t == "string" ? t : rt(t), i = a.s.r; i <= a.e.r; ++i) for (var s = a.s.c; s <= a.e.c; ++s) {
    var l = la(e, i, s);
    l.t = "n", l.F = o, delete l.v, i == a.s.r && s == a.s.c && (l.f = r, n && (l.D = !0));
  }
  var c = ct(e["!ref"]);
  return c.s.r > a.s.r && (c.s.r = a.s.r), c.s.c > a.s.c && (c.s.c = a.s.c), c.e.r < a.e.r && (c.e.r = a.e.r), c.e.c < a.e.c && (c.e.c = a.e.c), e["!ref"] = rt(c), e;
}
var Va = {
  encode_col: $e,
  encode_row: Be,
  encode_cell: Je,
  encode_range: rt,
  decode_col: wi,
  decode_row: bi,
  split_cell: Wu,
  decode_cell: Ke,
  decode_range: ct,
  format_cell: ir,
  sheet_new: Vu,
  sheet_add_aoa: Ls,
  sheet_add_json: Dl,
  sheet_add_dom: El,
  aoa_to_sheet: jr,
  json_to_sheet: zg,
  table_to_sheet: Sl,
  table_to_book: dg,
  sheet_to_csv: Ai,
  sheet_to_txt: Cl,
  sheet_to_json: ai,
  sheet_to_html: Tl,
  sheet_to_formulae: Bg,
  sheet_to_row_object_array: ai,
  sheet_get_cell: la,
  book_new: Vg,
  book_append_sheet: Ci,
  book_set_sheet_visibility: Hg,
  cell_set_number_format: jg,
  cell_set_hyperlink: Rl,
  cell_set_internal_link: Gg,
  cell_add_comment: Kg,
  sheet_set_array_formula: Yg,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
}, ii = { exports: {} };
/*! dom-to-image-more 23-10-2025 */
var Jg = ii.exports, jo;
function Xg() {
  return jo || (jo = 1, (function(e, t) {
    ((r) => {
      let n = /* @__PURE__ */ (() => {
        let v = 0;
        return { escape: function(M) {
          return M.replace(/([.*+?^${}()|[\]/\\])/g, "\\$1");
        }, isDataUrl: function(M) {
          return M.search(/^(data:)/) !== -1;
        }, canvasToBlob: function(M) {
          return M.toBlob ? new Promise(function(V) {
            M.toBlob(V);
          }) : ((V) => new Promise(function(F) {
            var U = h(V.toDataURL().split(",")[1]), K = U.length, Z = new Uint8Array(K);
            for (let me = 0; me < K; me++) Z[me] = U.charCodeAt(me);
            F(new Blob([Z], { type: "image/png" }));
          }))(M);
        }, resolveUrl: function(M, V) {
          var F = document.implementation.createHTMLDocument(), U = F.createElement("base"), K = (F.head.appendChild(U), F.createElement("a"));
          return F.body.appendChild(K), U.href = V, K.href = M, K.href;
        }, getAndEncode: function(M) {
          let V = f.impl.urlCache.find(function(F) {
            return F.url === M;
          });
          return V || (V = { url: M, promise: null }, f.impl.urlCache.push(V)), V.promise === null && (f.impl.options.cacheBust && (M += (/\?/.test(M) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime()), V.promise = new Promise(function(F) {
            let U = new XMLHttpRequest();
            function K(te) {
              console.error(te), F("");
            }
            function Z() {
              var te = f.impl.options.imagePlaceholder;
              te ? F(te) : K("Status:" + U.status + " while fetching resource: " + M);
            }
            if (U.timeout = f.impl.options.httpTimeout, U.onerror = Z, U.ontimeout = Z, U.onloadend = function() {
              if (U.readyState === XMLHttpRequest.DONE) {
                var te = U.status;
                if (te === 0 && M.toLowerCase().startsWith("file://") || 200 <= te && te <= 300 && U.response !== null) {
                  te = U.response, te instanceof Blob || K("Expected response to be a Blob, but got: " + typeof te);
                  let ve = new FileReader();
                  ve.onloadend = function() {
                    var ne = ve.result;
                    F(ne);
                  };
                  try {
                    ve.readAsDataURL(te);
                  } catch (ne) {
                    K("Failed to read the response as Data URL: " + ne.toString());
                  }
                } else Z();
              }
            }, 0 < f.impl.options.useCredentialsFilters.length && (f.impl.options.useCredentials = 0 < f.impl.options.useCredentialsFilters.filter((te) => 0 <= M.search(te)).length), f.impl.options.useCredentials && (U.withCredentials = !0), f.impl.options.corsImg && M.indexOf("http") === 0 && M.indexOf(window.location.origin) === -1) {
              var me = (f.impl.options.corsImg.method || "GET").toUpperCase() === "POST" ? "POST" : "GET";
              U.open(me, (f.impl.options.corsImg.url || "").replace("#{cors}", M), !0);
              let te = !1, ve = f.impl.options.corsImg.headers || {}, ne = (Object.keys(ve).forEach(function(Q) {
                ve[Q].indexOf("application/json") !== -1 && (te = !0), U.setRequestHeader(Q, ve[Q]);
              }), ((Q) => {
                try {
                  return JSON.parse(JSON.stringify(Q));
                } catch (ue) {
                  K("corsImg.data is missing or invalid:" + ue.toString());
                }
              })(f.impl.options.corsImg.data || ""));
              Object.keys(ne).forEach(function(Q) {
                typeof ne[Q] == "string" && (ne[Q] = ne[Q].replace("#{cors}", M));
              }), U.responseType = "blob", U.send(te ? JSON.stringify(ne) : ne);
            } else U.open("GET", M, !0), U.responseType = "blob", U.send();
          })), V.promise;
        }, uid: function() {
          return "u" + ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4) + v++;
        }, asArray: function(M) {
          var V = [], F = M.length;
          for (let U = 0; U < F; U++) V.push(M[U]);
          return V;
        }, escapeXhtml: function(M) {
          return M.replace(/%/g, "%25").replace(/#/g, "%23").replace(/\n/g, "%0A");
        }, makeImage: function(M) {
          return M !== "data:," ? new Promise(function(V, F) {
            let U = document.createElementNS("http://www.w3.org/2000/svg", "svg"), K = new Image();
            f.impl.options.useCredentials && (K.crossOrigin = "use-credentials"), K.onload = function() {
              document.body.removeChild(U), window && window.requestAnimationFrame ? window.requestAnimationFrame(function() {
                V(K);
              }) : V(K);
            }, K.onerror = (Z) => {
              document.body.removeChild(U), F(Z);
            }, U.appendChild(K), K.src = M, document.body.appendChild(U);
          }) : Promise.resolve();
        }, width: function(M) {
          var V = P(M, "width");
          if (!isNaN(V)) return V;
          var V = P(M, "border-left-width"), F = P(M, "border-right-width");
          return M.scrollWidth + V + F;
        }, height: function(M) {
          var V = P(M, "height");
          if (!isNaN(V)) return V;
          var V = P(M, "border-top-width"), F = P(M, "border-bottom-width");
          return M.scrollHeight + V + F;
        }, getWindow: k, isElement: L, isElementHostForOpenShadowRoot: function(M) {
          return L(M) && M.shadowRoot !== null;
        }, isShadowRoot: A, isInShadowRoot: D, isHTMLElement: function(M) {
          return M instanceof k(M).HTMLElement;
        }, isHTMLCanvasElement: function(M) {
          return M instanceof k(M).HTMLCanvasElement;
        }, isHTMLInputElement: function(M) {
          return M instanceof k(M).HTMLInputElement;
        }, isHTMLImageElement: function(M) {
          return M instanceof k(M).HTMLImageElement;
        }, isHTMLLinkElement: function(M) {
          return M instanceof k(M).HTMLLinkElement;
        }, isHTMLScriptElement: function(M) {
          return M instanceof k(M).HTMLScriptElement;
        }, isHTMLStyleElement: function(M) {
          return M instanceof k(M).HTMLStyleElement;
        }, isHTMLTextAreaElement: function(M) {
          return M instanceof k(M).HTMLTextAreaElement;
        }, isShadowSlotElement: function(M) {
          return D(M) && M instanceof k(M).HTMLSlotElement;
        }, isSVGElement: function(M) {
          return M instanceof k(M).SVGElement;
        }, isSVGRectElement: function(M) {
          return M instanceof k(M).SVGRectElement;
        }, isDimensionMissing: function(M) {
          return isNaN(M) || M <= 0;
        } };
        function k(M) {
          return M = M ? M.ownerDocument : void 0, (M ? M.defaultView : void 0) || window || r;
        }
        function A(M) {
          return M instanceof k(M).ShadowRoot;
        }
        function D(M) {
          return M != null && M.getRootNode !== void 0 && A(M.getRootNode());
        }
        function L(M) {
          return M instanceof k(M).Element;
        }
        function P(M, V) {
          if (M.nodeType === d) {
            let F = u(M).getPropertyValue(V);
            if (F.slice(-2) === "px") return F = F.slice(0, -2), parseFloat(F);
          }
          return NaN;
        }
      })(), a = /* @__PURE__ */ (() => {
        let v = /url\(\s*(["']?)((?:\\.|[^\\)])+)\1\s*\)/gm;
        return { inlineAll: function(P, M, V) {
          return k(P) ? Promise.resolve(P).then(A).then(function(F) {
            let U = Promise.resolve(P);
            return F.forEach(function(K) {
              U = U.then(function(Z) {
                return L(Z, K, M, V);
              });
            }), U;
          }) : Promise.resolve(P);
        }, shouldProcess: k, impl: { readUrls: A, inline: L, urlAsRegex: D } };
        function k(P) {
          return P.search(v) !== -1;
        }
        function A(P) {
          for (var M, V = []; (M = v.exec(P)) !== null; ) V.push(M[2]);
          return V.filter(function(F) {
            return !n.isDataUrl(F);
          });
        }
        function D(P) {
          return new RegExp(`url\\((["']?)(${n.escape(P)})\\1\\)`, "gm");
        }
        function L(P, M, V, F) {
          return Promise.resolve(M).then(function(U) {
            return V ? n.resolveUrl(U, V) : U;
          }).then(F || n.getAndEncode).then(function(U) {
            var K = D(M);
            return P.replace(K, `url($1${U}$1)`);
          });
        }
      })(), o = { resolveAll: function() {
        return i().then(function(v) {
          return Promise.all(v.map(function(k) {
            return k.resolve();
          }));
        }).then(function(v) {
          return v.join(`
`);
        });
      }, impl: { readAll: i } };
      function i() {
        return Promise.resolve(n.asArray(document.styleSheets)).then(function(k) {
          let A = [];
          return k.forEach(function(D) {
            var L = Object.getPrototypeOf(D);
            if (Object.prototype.hasOwnProperty.call(L, "cssRules")) try {
              n.asArray(D.cssRules || []).forEach(A.push.bind(A));
            } catch (P) {
              console.error("domtoimage: Error while reading CSS rules from: " + D.href, P.toString());
            }
          }), A;
        }).then(function(k) {
          return k.filter(function(A) {
            return A.type === CSSRule.FONT_FACE_RULE;
          }).filter(function(A) {
            return a.shouldProcess(A.style.getPropertyValue("src"));
          });
        }).then(function(k) {
          return k.map(v);
        });
        function v(k) {
          return { resolve: function() {
            var A = (k.parentStyleSheet || {}).href;
            return a.inlineAll(k.cssText, A);
          }, src: function() {
            return k.style.getPropertyValue("src");
          } };
        }
      }
      let s = { inlineAll: function v(k) {
        if (!n.isElement(k)) return Promise.resolve(k);
        return A(k).then(function() {
          return n.isHTMLImageElement(k) ? l(k).inline() : Promise.all(n.asArray(k.childNodes).map(function(D) {
            return v(D);
          }));
        });
        function A(D) {
          let L = ["background", "background-image"], P = L.map(function(M) {
            let V = D.style.getPropertyValue(M), F = D.style.getPropertyPriority(M);
            return V ? a.inlineAll(V).then(function(U) {
              D.style.setProperty(M, U, F);
            }) : Promise.resolve();
          });
          return Promise.all(P).then(function() {
            return D;
          });
        }
      }, impl: { newImage: l } };
      function l(v) {
        return { inline: function(k) {
          return n.isDataUrl(v.src) ? Promise.resolve() : Promise.resolve(v.src).then(k || n.getAndEncode).then(function(A) {
            return new Promise(function(D) {
              v.onload = D, v.onerror = D, v.src = A;
            });
          });
        } };
      }
      let c = { copyDefaultStyles: !0, imagePlaceholder: void 0, cacheBust: !1, useCredentials: !1, useCredentialsFilters: [], httpTimeout: 3e4, styleCaching: "strict", corsImg: void 0 }, f = { toSvg: g, toPng: function(v, k) {
        return m(v, k).then(function(A) {
          return A.toDataURL();
        });
      }, toJpeg: function(v, k) {
        return m(v, k).then(function(A) {
          return A.toDataURL("image/jpeg", (k ? k.quality : void 0) || 1);
        });
      }, toBlob: function(v, k) {
        return m(v, k).then(n.canvasToBlob);
      }, toPixelData: function(v, k) {
        return m(v, k).then(function(A) {
          return A.getContext("2d").getImageData(0, 0, n.width(v), n.height(v)).data;
        });
      }, toCanvas: m, impl: { fontFaces: o, images: s, util: n, inliner: a, urlCache: [], options: {}, copyOptions: function(v) {
        v.copyDefaultStyles === void 0 ? f.impl.options.copyDefaultStyles = c.copyDefaultStyles : f.impl.options.copyDefaultStyles = v.copyDefaultStyles, f.impl.options.imagePlaceholder = (v.imagePlaceholder === void 0 ? c : v).imagePlaceholder, f.impl.options.cacheBust = (v.cacheBust === void 0 ? c : v).cacheBust, f.impl.options.corsImg = (v.corsImg === void 0 ? c : v).corsImg, f.impl.options.useCredentials = (v.useCredentials === void 0 ? c : v).useCredentials, f.impl.options.useCredentialsFilters = (v.useCredentialsFilters === void 0 ? c : v).useCredentialsFilters, f.impl.options.httpTimeout = (v.httpTimeout === void 0 ? c : v).httpTimeout, f.impl.options.styleCaching = (v.styleCaching === void 0 ? c : v).styleCaching;
      } } }, d = (e.exports = f, (Node === void 0 ? void 0 : Node.ELEMENT_NODE) || 1), u = (r === void 0 ? void 0 : r.getComputedStyle) || (window === void 0 ? void 0 : window.getComputedStyle) || globalThis.getComputedStyle, h = (r === void 0 ? void 0 : r.atob) || (window === void 0 ? void 0 : window.atob) || globalThis.atob;
      function g(v, k) {
        f.impl.util.getWindow(v);
        let A = (k = k || {}, f.impl.copyOptions(k), []);
        return Promise.resolve(v).then(function(D) {
          if (D.nodeType === d) return D;
          var L = D, P = document.createElement("span");
          return L.replaceWith(P), P.append(D), A.push({ child: L, wrapper: P }), P;
        }).then(function(D) {
          return (function L(P, M, V, F) {
            let U = M.filter;
            if (P === p || n.isHTMLScriptElement(P) || n.isHTMLStyleElement(P) || n.isHTMLLinkElement(P) || V !== null && U && !U(P)) return Promise.resolve();
            return Promise.resolve(P).then(K).then(Z).then(function(Q) {
              return ve(Q, te(P));
            }).then(me).then(function(Q) {
              return ne(Q, P);
            });
            function K(Q) {
              return n.isHTMLCanvasElement(Q) ? n.makeImage(Q.toDataURL()) : Q.cloneNode(!1);
            }
            function Z(Q) {
              return M.adjustClonedNode && M.adjustClonedNode(P, Q, !1), Promise.resolve(Q);
            }
            function me(Q) {
              return M.adjustClonedNode && M.adjustClonedNode(P, Q, !0), Promise.resolve(Q);
            }
            function te(Q) {
              return n.isElementHostForOpenShadowRoot(Q) ? Q.shadowRoot : Q;
            }
            function ve(Q, ue) {
              let ye = S(ue), xe = Promise.resolve();
              if (ye.length !== 0) {
                let z = u(ke(ue));
                n.asArray(ye).forEach(function(N) {
                  xe = xe.then(function() {
                    return L(N, M, z).then(function(R) {
                      R && Q.appendChild(R);
                    });
                  });
                });
              }
              return xe.then(function() {
                return Q;
              });
              function ke(z) {
                return n.isShadowRoot(z) ? z.host : z;
              }
              function S(z) {
                if (n.isShadowSlotElement(z)) {
                  let N = z.assignedNodes();
                  if (N && 0 < N.length) return N;
                }
                return z.childNodes;
              }
            }
            function ne(Q, ue) {
              return !n.isElement(Q) || n.isShadowSlotElement(ue) ? Promise.resolve(Q) : Promise.resolve().then(xe).then(ke).then(S).then(z).then(ye).then(function() {
                return Q;
              });
              function ye() {
                n.isHTMLImageElement(Q) && (Q.removeAttribute("loading"), ue.srcset || ue.sizes) && (Q.removeAttribute("srcset"), Q.removeAttribute("sizes"), Q.src = ue.currentSrc || ue.src);
              }
              function xe() {
                function N(J, ae) {
                  ae.font = J.font, ae.fontFamily = J.fontFamily, ae.fontFeatureSettings = J.fontFeatureSettings, ae.fontKerning = J.fontKerning, ae.fontSize = J.fontSize, ae.fontStretch = J.fontStretch, ae.fontStyle = J.fontStyle, ae.fontVariant = J.fontVariant, ae.fontVariantCaps = J.fontVariantCaps, ae.fontVariantEastAsian = J.fontVariantEastAsian, ae.fontVariantLigatures = J.fontVariantLigatures, ae.fontVariantNumeric = J.fontVariantNumeric, ae.fontVariationSettings = J.fontVariationSettings, ae.fontWeight = J.fontWeight;
                }
                function R(J, ae) {
                  let se = u(J);
                  se.cssText ? (ae.style.cssText = se.cssText, N(se, ae.style)) : (y(M, J, se, V, ae), V === null && (["inset-block", "inset-block-start", "inset-block-end"].forEach((Ee) => ae.style.removeProperty(Ee)), ["left", "right", "top", "bottom"].forEach((Ee) => {
                    ae.style.getPropertyValue(Ee) && ae.style.setProperty(Ee, "0px");
                  })));
                }
                R(ue, Q);
              }
              function ke() {
                let N = n.uid();
                function R(J) {
                  let ae = u(ue, J), se = ae.getPropertyValue("content");
                  if (se !== "" && se !== "none") {
                    let Ee = function() {
                      let Se = `.${N}:` + J, De = (ae.cssText ? Me : at)();
                      return document.createTextNode(Se + `{${De}}`);
                      function Me() {
                        return `${ae.cssText} content: ${se};`;
                      }
                      function at() {
                        return n.asArray(ae).map(qe).join("; ") + ";";
                        function qe(ge) {
                          let We = ae.getPropertyValue(ge), he = ae.getPropertyPriority(ge) ? " !important" : "";
                          return ge + ": " + We + he;
                        }
                      }
                    }, pe = Q.getAttribute("class") || "", Oe = (Q.setAttribute("class", pe + " " + N), document.createElement("style"));
                    Oe.appendChild(Ee()), Q.appendChild(Oe);
                  }
                }
                [":before", ":after"].forEach(function(J) {
                  R(J);
                });
              }
              function S() {
                n.isHTMLTextAreaElement(ue) && (Q.innerHTML = ue.value), n.isHTMLInputElement(ue) && Q.setAttribute("value", ue.value);
              }
              function z() {
                n.isSVGElement(Q) && (Q.setAttribute("xmlns", "http://www.w3.org/2000/svg"), n.isSVGRectElement(Q)) && ["width", "height"].forEach(function(N) {
                  let R = Q.getAttribute(N);
                  R && Q.style.setProperty(N, R);
                });
              }
            }
          })(D, k, null);
        }).then(k.disableEmbedFonts ? Promise.resolve(v) : w).then(k.disableInlineImages ? Promise.resolve(v) : O).then(function(D) {
          k.bgcolor && (D.style.backgroundColor = k.bgcolor), k.width && (D.style.width = k.width + "px"), k.height && (D.style.height = k.height + "px"), k.style && Object.keys(k.style).forEach(function(P) {
            D.style[P] = k.style[P];
          });
          let L = null;
          return typeof k.onclone == "function" && (L = k.onclone(D)), Promise.resolve(L).then(function() {
            return D;
          });
        }).then(function(D) {
          let L = k.width || n.width(v), P = k.height || n.height(v);
          return Promise.resolve(D).then(function(M) {
            return M.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), new XMLSerializer().serializeToString(M);
          }).then(n.escapeXhtml).then(function(M) {
            var V = (n.isDimensionMissing(L) ? ' width="100%"' : ` width="${L}"`) + (n.isDimensionMissing(P) ? ' height="100%"' : ` height="${P}"`);
            return `<svg xmlns="http://www.w3.org/2000/svg"${(n.isDimensionMissing(L) ? "" : ` width="${L}"`) + (n.isDimensionMissing(P) ? "" : ` height="${P}"`)}><foreignObject${V}>${M}</foreignObject></svg>`;
          }).then(function(M) {
            return "data:image/svg+xml;charset=utf-8," + M;
          });
        }).then(function(D) {
          for (; 0 < A.length; ) {
            var L = A.pop();
            L.wrapper.replaceWith(L.child);
          }
          return D;
        }).then(function(D) {
          return f.impl.urlCache = [], p && (document.body.removeChild(p), p = null), B && clearTimeout(B), B = setTimeout(() => {
            B = null, I = {};
          }, 2e4), D;
        });
      }
      function m(v, k) {
        return g(v, k = k || {}).then(n.makeImage).then(function(A) {
          var D = typeof k.scale != "number" ? 1 : k.scale, L = ((M, V) => {
            let F = k.width || n.width(M), U = k.height || n.height(M);
            return n.isDimensionMissing(F) && (F = n.isDimensionMissing(U) ? 300 : 2 * U), n.isDimensionMissing(U) && (U = F / 2), (M = document.createElement("canvas")).width = F * V, M.height = U * V, k.bgcolor && ((V = M.getContext("2d")).fillStyle = k.bgcolor, V.fillRect(0, 0, M.width, M.height)), M;
          })(v, D), P = L.getContext("2d");
          return P.msImageSmoothingEnabled = !1, P.imageSmoothingEnabled = !1, A && (P.scale(D, D), P.drawImage(A, 0, 0)), L;
        });
      }
      let p = null;
      function w(v) {
        return o.resolveAll().then(function(k) {
          var A;
          return k !== "" && (A = document.createElement("style"), v.appendChild(A), A.appendChild(document.createTextNode(k))), v;
        });
      }
      function O(v) {
        return s.inlineAll(v).then(function() {
          return v;
        });
      }
      function y(v, k, A, D, L) {
        let P = f.impl.options.copyDefaultStyles ? ((V, F) => {
          var U, K = ((te) => (V.styleCaching !== "relaxed" ? te : te.filter((ve, ne, Q) => ne === 0 || ne === Q.length - 1)).join(">"))(F = ((te) => {
            var ve = [];
            do
              if (te.nodeType === d) {
                var ne = te.tagName;
                if (ve.push(ne), G.includes(ne)) break;
              }
            while (te = te.parentNode);
            return ve;
          })(F));
          {
            if (I[K]) return I[K];
            F = ((te, ve) => {
              let ne = te.body;
              do {
                var Q = ve.pop(), Q = te.createElement(Q);
                ne.appendChild(Q), ne = Q;
              } while (0 < ve.length);
              return ne.textContent = "​", ne;
            })((U = (() => {
              if (p) return p.contentWindow;
              ve = document.characterSet || "UTF-8", te = (te = document.doctype) ? (`<!DOCTYPE ${ke(te.name)} ${ke(te.publicId)} ` + ke(te.systemId)).trim() + ">" : "", (p = document.createElement("iframe")).id = "domtoimage-sandbox-" + n.uid(), p.style.top = "-9999px", p.style.visibility = "hidden", p.style.position = "fixed", document.body.appendChild(p);
              var te, ve, ne = p, Q = "domtoimage-sandbox";
              try {
                return ne.contentWindow.document.write(te + `<html><head><meta charset='${ve}'><title>${Q}</title></head><body></body></html>`), ne.contentWindow;
              } catch {
              }
              var ue = document.createElement("meta");
              ue.setAttribute("charset", ve);
              try {
                var ye = document.implementation.createHTMLDocument(Q), xe = (ye.head.appendChild(ue), te + ye.documentElement.outerHTML);
                return ne.setAttribute("srcdoc", xe), ne.contentWindow;
              } catch {
              }
              return ne.contentDocument.head.appendChild(ue), ne.contentDocument.title = Q, ne.contentWindow;
              function ke(S) {
                var z;
                return S ? ((z = document.createElement("div")).innerText = S, z.innerHTML) : "";
              }
            })()).document, F), U = ((te, ve) => {
              let ne = {}, Q = te.getComputedStyle(ve);
              return n.asArray(Q).forEach(function(ue) {
                ne[ue] = ue === "width" || ue === "height" ? "auto" : Q.getPropertyValue(ue);
              }), ne;
            })(U, F);
            var Z = F;
            do {
              var me = Z.parentElement;
              me !== null && me.removeChild(Z), Z = me;
            } while (Z && Z.tagName !== "BODY");
            return I[K] = U;
          }
        })(v, k) : {}, M = L.style;
        n.asArray(A).forEach(function(V) {
          var F, U, K, Z;
          v.filterStyles && !v.filterStyles(k, V) || (U = A.getPropertyValue(V), K = P[V], F = D ? D.getPropertyValue(V) : void 0, M.getPropertyValue(V)) || (U !== K || D && U !== F) && (K = A.getPropertyPriority(V), F = M, U = U, K = K, Z = 0 <= ["background-clip"].indexOf(V = V), K ? (F.setProperty(V, U, K), Z && F.setProperty("-webkit-" + V, U, K)) : (F.setProperty(V, U), Z && F.setProperty("-webkit-" + V, U)));
        });
      }
      let B = null, I = {}, G = ["ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", "DETAILS", "DIALOG", "DD", "DIV", "DL", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "LI", "MAIN", "NAV", "OL", "P", "PRE", "SECTION", "SVG", "TABLE", "UL", "math", "svg", "BODY", "HEAD", "HTML"];
    })(Jg);
  })(ii)), ii.exports;
}
var qg = Xg();
const Qg = /* @__PURE__ */ Tn(qg), Zg = (e) => `"${(e == null ? "" : String(e)).replace(/"/g, '""')}"`, Nl = (e, t) => {
  const r = document.createElement("a");
  r.href = e, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r);
}, Ll = (e, t, r) => {
  const n = jc(r), a = t.map((i) => n.dimensionOrMeasureTitle(i)), o = e.map((i) => {
    const s = [];
    return t.forEach((l) => {
      const c = n.data(l, i[l.name]);
      c != null ? s.push(String(c)) : s.push("");
    }), s;
  });
  return [a, ...o];
};
function e2({
  data: e = [],
  dimensionsAndMeasures: t = [],
  title: r,
  theme: n
}) {
  const a = Ll(e, t, n).map((s) => s.map(Zg).join(",")).join(`\r
`), o = new Blob([a], { type: "text/csv;charset=utf-8;" }), i = URL.createObjectURL(o);
  Nl(i, `${r ?? "untitled"}.csv`);
}
function t2({
  data: e = [],
  dimensionsAndMeasures: t = [],
  title: r,
  theme: n
}) {
  const a = Ll(e, t, n), o = Va.aoa_to_sheet(a), i = Va.book_new();
  Va.book_append_sheet(i, o, "Sheet1"), Fg(i, `${r ?? "untitled"}.xlsx`);
}
async function r2({
  title: e,
  containerRef: t
}) {
  const r = t == null ? void 0 : t.current;
  if (!r)
    throw new Error("exportPNG: element is undefined");
  try {
    const n = await Qg.toPng(r, {
      cacheBust: !0,
      filter: (i) => !(i instanceof HTMLElement && i.hasAttribute("data-no-export"))
    }), a = await (await fetch(n)).blob(), o = URL.createObjectURL(a);
    Nl(o, `${e ?? "untitled"}.png`), URL.revokeObjectURL(o);
  } catch (n) {
    throw new Error(`exportPNG failed: ${n.message}`);
  }
}
const n2 = [
  {
    labelKey: "charts.menuOptions.downloadCSV",
    onClick: e2,
    iconSrc: Qi
  },
  {
    labelKey: "charts.menuOptions.downloadXLSX",
    onClick: t2,
    iconSrc: Qi
  },
  {
    labelKey: "charts.menuOptions.downloadPNG",
    onClick: r2,
    iconSrc: Nf
  }
], Ha = { background: "#e1f0e9", color: "#0f955a" }, ja = { background: "#f6e2e2", color: "#bc1010" }, a2 = [
  {
    value: "Bold",
    styles: (e) => ({ fontWeight: "bold" })
  },
  {
    value: "Italic",
    styles: (e) => ({ fontStyle: "italic" })
  },
  {
    value: "Positive vs Negative",
    styles: (e) => {
      if (typeof e == "number")
        return e > 0 ? Ha : ja;
      if (typeof e == "boolean")
        return e ? Ha : ja;
      if (typeof e == "string") {
        const t = e.trim();
        if (t !== "" && Number.isFinite(Number(t)))
          return Number(t) > 0 ? Ha : ja;
      }
    }
  }
], i2 = {
  language: "en",
  translations: {
    en: Jl,
    de: Xl
  }
}, o2 = {
  legendPosition: "bottom"
}, s2 = {
  comparisonPeriodsOptions: Df,
  dateRangesOptions: Rf,
  chartMenuOptions: n2,
  tableCellStyleOptions: a2
}, l2 = {
  i18n: i2,
  charts: o2,
  formatter: tf,
  styles: sf,
  defaults: s2
}, Go = () => l2, c2 = [];
function f2(e) {
  let t = {};
  for (const r of c2)
    if (typeof r == "function") {
      const n = r(e, t);
      t = wc(t, n);
    }
  return typeof Go == "function" ? Go() : t;
}
/*!
 * mergician
 * v2.0.2
 * https://jhildenbiddle.github.io/mergician/
 * (c) 2022-2024 John Hildenbiddle
 * MIT license
 */
function Di(...e) {
  const t = {};
  return e.forEach((r) => {
    r.forEach((n) => {
      t[n] = n in t ? ++t[n] : 1;
    });
  }), t;
}
function u2(...e) {
  return e.reduce(
    (t, r) => t.filter(Set.prototype.has, new Set(r))
  );
}
function h2(...e) {
  const t = Di(...e);
  return Object.keys(t).filter((r) => t[r] > 1);
}
function d2(...e) {
  const t = Di(...e);
  return Object.keys(t).filter((r) => t[r] < e.length);
}
function m2(...e) {
  const t = Di(...e);
  return Object.keys(t).filter((r) => t[r] === 1);
}
function p2(e, t = !1) {
  const r = Object.getOwnPropertyNames(e);
  if (t)
    for (const n in e)
      !r.includes(n) && r.push(n);
  return r;
}
function oi(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Ko(e) {
  if (!oi(e))
    return !1;
  const t = ["writable", "enumerable", "configurable"].some(
    (o) => o in e
  ), r = ["get", "set"].some((o) => typeof e[o] == "function"), n = ["get", "set"].every((o) => o in e);
  let a = "value" in e && t || r && (n || t);
  if (a) {
    const o = [
      "configurable",
      "get",
      "set",
      "enumerable",
      "value",
      "writable"
    ];
    a = Object.keys(e).some((i) => !(i in o));
  }
  return a;
}
/**
 * @typedef {Object} MergicianOptions
 * @property {string[]} [onlyKeys] - Exclusive array of keys to be merged
 * (others are skipped)
 * @property {string[]} [skipKeys] - Array of keys to skip (others are
 * merged)
 * @property {boolean} [onlyCommonKeys=false] - Merge only keys found
 * in multiple objects (ignore single occurrence keys)
 * @property {boolean} [onlyUniversalKeys=false] - Merge only keys
 * found in all objects
 * @property {boolean} [skipCommonKeys=false] - Skip keys found in
 * multiple objects (merge only single occurrence keys)
 * @property {boolean} [skipUniversalKeys=false] - Skip keys found in
 * all objects (merge only common keys)
 * @property {boolean} [invokeGetters=false] - Invoke "getter" methods
 * and merge returned values
 * @property {boolean} [skipSetters=false] - Skip "setter" methods
 * during merge
 * @property {boolean} [appendArrays=false] - Merge array values at
 * the end of existing arrays
 * @property {boolean} [prependArrays=false] - Merge array values at
 * the beginning of existing arrays
 * @property {boolean} [dedupArrays=false] - Remove duplicate array
 * values in new merged object
 * @property {boolean|function} [sortArrays=false] - Sort array values
 * in new merged object
 * @property {boolean} [hoistEnumerable=false] - Merge enumerable
 * prototype properties as direct properties of merged object
 * @property {boolean} [hoistProto=false] - Merge custom prototype
 * properties as direct properties of merged object
 * @property {boolean} [skipProto=false] - Skip merging of custom
 * prototype properties
 * @property {filterCallback} [filter] - Callback used to conditionally merge
 * or skip a property. Return a "truthy" value to merge or a "falsy" value to
 * skip. Return no value to proceed according to other option values.
 * @property {beforeEachCallback} [beforeEach] - Callback used for
 * inspecting/modifying properties before merge. Return value is used as value
 * to merge.
 * @property {afterEachCallback} [afterEach] - Callback used for
 * inspecting/modifying properties after merge. Return value is used as merged
 * value.
 * @property {onCircularCallback} [onCircular] - Callback used for handling
 * circular object references during merge
 * @preserve
 */
/**
 * @callback filterCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback beforeEachCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback afterEachCallback
 * @param {afterEachCallbackData} callbackData
 * @preserve
 */
/**
 * @callback onCircularCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @typedef {Object} callbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {object} srcObj - Object containing the source value
 * @property {any} srcVal - Source object’s property value
 * @property {object} targetObj - New merged object
 * @property {any} targetVal - New merged object’s current property value
 * @preserve
 */
/**
 * @typedef {Object} afterEachCallbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {any} mergeVal - New merged value
 * @property {object} srcObj - Object containing the source value
 * @property {object} targetObj - New merged object
 * @preserve
 */
var Nr = {
  // Keys
  onlyKeys: [],
  skipKeys: [],
  onlyCommonKeys: !1,
  onlyUniversalKeys: !1,
  skipCommonKeys: !1,
  skipUniversalKeys: !1,
  // Values
  invokeGetters: !1,
  skipSetters: !1,
  // Arrays
  appendArrays: !1,
  prependArrays: !1,
  dedupArrays: !1,
  sortArrays: !1,
  // Prototype
  hoistEnumerable: !1,
  hoistProto: !1,
  skipProto: !1,
  // Callbacks
  filter: Function.prototype,
  beforeEach: Function.prototype,
  afterEach: Function.prototype,
  onCircular: Function.prototype
};
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @overload
 * @param {MergicianOptions} options
 * @returns {function} New merge function with options set as defaults
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @overload
 * @param {...object} objects
 * @returns {object} New merged object
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @param {MergicianOptions} optionsOrObject
 * @param {...object} [objects]
 * @returns {function|object} New merge function with options set as defaults
 * (single argument) or new merged object (multiple arguments)
 * @preserve
 */
function Ml(e, ...t) {
  const r = arguments.length === 1 ? arguments[0] : {}, n = { ...Nr, ...r }, a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = typeof n.sortArrays == "function" ? n.sortArrays : void 0, s = /* @__PURE__ */ new WeakMap();
  let l = 0;
  function c(d) {
    return p2(d, n.hoistEnumerable);
  }
  function f(...d) {
    let u;
    d.length > 1 && (n.onlyCommonKeys ? u = h2(
      ...d.map((m) => c(m))
    ) : n.onlyUniversalKeys ? u = u2(...d.map((m) => c(m))) : n.skipCommonKeys ? u = m2(
      ...d.map((m) => c(m))
    ) : n.skipUniversalKeys && (u = d2(...d.map((m) => c(m))))), !u && n.onlyKeys.length && (u = n.onlyKeys), u && u !== n.onlyKeys && n.onlyKeys.length && (u = u.filter(
      (m) => n.onlyKeys.includes(m)
    ));
    const h = d.reduce((m, p) => {
      s.set(p, m);
      let w = u || c(p);
      n.skipKeys.length && (w = w.filter((O) => n.skipKeys.indexOf(O) === -1));
      for (let O = 0; O < w.length; O++) {
        const y = w[O], B = m[y], I = {
          configurable: !0,
          enumerable: !0
        };
        if (!(y in p))
          continue;
        let G = !1, v = p[y];
        const k = Object.getOwnPropertyDescriptor(p, y);
        if (k && typeof k.set == "function" && typeof k.get != "function") {
          n.skipSetters || Object.defineProperty(m, y, k);
          continue;
        }
        if (n.filter !== Nr.filter) {
          const D = n.filter({
            depth: l,
            key: y,
            srcObj: p,
            srcVal: v,
            targetObj: m,
            targetVal: B
          });
          if (D !== void 0 && !D)
            continue;
        }
        if (n.beforeEach !== Nr.beforeEach) {
          const D = n.beforeEach({
            depth: l,
            key: y,
            srcObj: p,
            srcVal: v,
            targetObj: m,
            targetVal: B
          });
          D !== void 0 && (G = !0, v = D);
        }
        if (typeof v == "object" && v !== null && s.has(p[y])) {
          const D = n.onCircular({
            depth: l,
            key: y,
            srcObj: p,
            srcVal: p[y],
            targetObj: m,
            targetVal: B
          });
          if (D === void 0) {
            v = s.get(p[y]), m[y] = v;
            continue;
          }
          G = !0, v = D;
        }
        if (Array.isArray(v)) {
          if (v = [...v], Array.isArray(B) && (n.appendArrays ? v = [...B, ...v] : n.prependArrays && (v = [...v, ...B])), n.dedupArrays)
            if (n.afterEach !== Nr.afterEach)
              v = [...new Set(v)];
            else {
              const D = a.get(m);
              D && !D.includes(y) ? D.push(y) : a.set(m, [y]);
            }
          if (n.sortArrays)
            if (n.afterEach !== Nr.afterEach)
              v = v.sort(i);
            else {
              const D = o.get(m);
              D && !D.includes(y) ? D.push(y) : o.set(m, [y]);
            }
        } else v instanceof Date ? v = new Date(v) : oi(v) && (!G || !Ko(v)) && (l++, oi(B) ? v = f(B, v) : v = f(v), l--);
        if (n.afterEach !== Nr.afterEach) {
          const D = n.afterEach({
            depth: l,
            key: y,
            mergeVal: v,
            srcObj: p,
            targetObj: m
          });
          D !== void 0 && (G = !0, v = D);
        }
        if (G) {
          const D = Ko(v) ? v : {
            configurable: !0,
            enumerable: !0,
            value: v,
            writable: !0
          };
          Object.defineProperty(m, y, D);
          continue;
        }
        if (k) {
          const { configurable: D, enumerable: L, get: P, set: M, writable: V } = k;
          Object.assign(I, {
            configurable: D,
            enumerable: L
          }), typeof P == "function" && (n.invokeGetters ? I.value = v : I.get = P), !n.skipSetters && typeof M == "function" && !Object.hasOwnProperty.call(I, "value") && (I.set = M), !I.get && !I.set && (I.writable = !!V);
        }
        !I.get && !I.set && !("value" in I) && (I.value = v, I.writable = k && "writable" in k ? k.writable : !0), Object.defineProperty(m, y, I);
      }
      return m;
    }, {});
    for (const [m, p] of a.entries())
      for (const w of p) {
        const O = Object.getOwnPropertyDescriptor(m, w), { configurable: y, enumerable: B, writable: I } = O;
        Object.defineProperty(m, w, {
          configurable: y,
          enumerable: B,
          value: [...new Set(m[w])],
          writable: I !== void 0 ? I : !0
        });
      }
    for (const [m, p] of o.entries())
      for (const w of p)
        m[w].sort(i);
    let g = h;
    if (!n.skipProto) {
      const m = d.reduce((p, w) => {
        const O = Object.getPrototypeOf(w);
        return O && O !== Object.prototype && p.push(O), p;
      }, []);
      if (m.length) {
        const p = f(...m);
        n.hoistProto ? g = f(p, h) : g = Object.create(
          p,
          Object.getOwnPropertyDescriptors(h)
        );
      }
    }
    return g;
  }
  return arguments.length === 1 ? function(...d) {
    return arguments.length === 1 ? Ml({ ...n, ...d[0] }) : f(...d);
  } : f(...arguments);
}
const ca = "en-US", qt = (e, t = {}) => ({
  __embeddableType: "built-in",
  toString: () => e,
  typeConfig: {
    label: e,
    optionLabel: () => e,
    ...t
  }
});
qt("string", {
  transform: (e) => e,
  optionLabel: (e) => Array.isArray(e) ? `[${e.map((t) => `"${t}"`).join(",")}]` : `"${e}"`
});
qt("number", {
  transform: (e) => Array.isArray(e) ? e : e && Number(e),
  optionLabel: (e) => Array.isArray(e) ? `[${e.join(",")}]` : (e == null ? void 0 : e.toLocaleString(ca)) ?? ""
});
qt("boolean", {
  transform: (e) => e === "true" || e === !0,
  optionLabel: (e) => e ? "true" : "false"
});
qt("time", {
  transform: (e) => {
    const t = e != null && e.date ? new Date(e.date) : void 0;
    return {
      date: t && t.toString() !== "Invalid Date" ? t : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var t;
    return e ? e != null && e.date ? ((t = e.date) == null ? void 0 : t.toLocaleDateString(ca)) ?? e.date.toLocaleString() : e.relativeTimeString : "";
  }
});
qt("timeRange", {
  transform: (e) => {
    if (!e)
      return;
    const [t, r] = [e == null ? void 0 : e.from, e == null ? void 0 : e.to], n = new Date(t), a = new Date(r);
    return {
      from: n.toString() !== "Invalid Date" ? n : void 0,
      to: a.toString() !== "Invalid Date" ? a : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var t, r, n, a;
    return e ? e != null && e.from && (e != null && e.to) ? `${((t = e.from) == null ? void 0 : t.toLocaleDateString(ca)) ?? ((r = e.from) == null ? void 0 : r.toLocaleString())},${((n = e.to) == null ? void 0 : n.toLocaleDateString(ca)) ?? ((a = e.to) == null ? void 0 : a.toLocaleString())}` : e == null ? void 0 : e.relativeTimeString : "";
  }
});
qt("granularity", {
  transform: (e) => e,
  optionLabel: (e) => e
});
qt("dataset");
qt("measure");
qt("dimension");
qt("dimensionOrMeasure");
const Il = (e, t) => Ml(e, t), g2 = {
  styles: {
    "--em-core-shadow-color": "rgb(0 0 0 / 50%)",
    "--em-sem-background": "var(--em-core-color-gray--0900)",
    "--em-sem-background--inverted": "var(--em-core-color-gray--0000)",
    "--em-sem-background--light": "var(--em-core-color-gray--0800)",
    "--em-sem-background--muted": "var(--em-core-color-gray--0700)",
    "--em-sem-background--neutral": "var(--em-core-color-gray--1000)",
    "--em-sem-background--subtle": "var(--em-core-color-gray--0800)",
    "--em-sem-chart-color--1": "rgb(255 84 0)",
    "--em-sem-chart-color--2": "rgb(58 134 255)",
    "--em-sem-chart-color--3": "rgb(255 138 0)",
    "--em-sem-chart-color--4": "rgb(255 47 109)",
    "--em-sem-chart-color--5": "rgb(46 196 182)",
    "--em-sem-chart-color--6": "rgb(106 76 255)",
    "--em-sem-chart-color--7": "rgb(131 56 236)",
    "--em-sem-chart-color--8": "rgb(0 180 216)",
    "--em-sem-chart-color--9": "rgb(76 175 80)",
    "--em-sem-chart-color--10": "rgb(141 153 174)",
    "--em-sem-status-error-background": "rgb(80 22 22)",
    "--em-sem-status-error-text": "rgb(255 134 134)",
    "--em-sem-status-success-background": "rgb(16 50 37)",
    "--em-sem-status-success-text": "rgb(110 227 170)",
    "--em-sem-text": "var(--em-core-color-gray--0000)",
    "--em-sem-text--inverted": "var(--em-core-color-gray--0900)",
    "--em-sem-text--muted": "var(--em-core-color-gray--0300)",
    "--em-sem-text--neutral": "var(--em-core-color-gray--0000)",
    "--em-sem-text--subtle": "var(--em-core-color-gray--0500)",
    "--em-selectfield-content-background": "rgb(33 33 41)",
    "--em-selectfield-item-background": "rgb(33 33 41)",
    "--em-selectfield-item-background--hover": "rgb(46 46 57)",
    "--em-tablechart-cell-background": "rgb(26 26 33)",
    "--em-tablechart-header-background": "rgb(26 26 33)"
  }
}, Yo = (e, t) => Il(
  t,
  e.theme === "dark" ? g2 : {
    // learn more here: https://docs.embeddable.com/component-libraries/remarkable-pro/theming
  }
), v2 = [
  f2
];
function b2(e) {
  let t = {};
  for (const r of v2)
    if (typeof r == "function") {
      const n = r(e, t);
      t = Il(t, n);
    }
  return typeof Yo == "function" ? Yo(e, t) : t;
}
export {
  b2 as default
};
