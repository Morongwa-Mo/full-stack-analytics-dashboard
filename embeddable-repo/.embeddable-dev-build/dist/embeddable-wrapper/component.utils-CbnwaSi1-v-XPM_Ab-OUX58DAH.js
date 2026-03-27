const g = (a) => typeof a == "string", A = () => {
  let a, e;
  const t = new Promise((s, i) => {
    a = s, e = i;
  });
  return t.resolve = a, t.reject = e, t;
}, ne = (a) => a == null ? "" : "" + a, we = (a, e, t) => {
  a.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, Ce = /###/g, re = (a) => a && a.indexOf("###") > -1 ? a.replace(Ce, ".") : a, ae = (a) => !a || g(a), K = (a, e, t) => {
  const s = g(e) ? e.split(".") : e;
  let i = 0;
  for (; i < s.length - 1; ) {
    if (ae(a)) return {};
    const n = re(s[i]);
    !a[n] && t && (a[n] = new t()), Object.prototype.hasOwnProperty.call(a, n) ? a = a[n] : a = {}, ++i;
  }
  return ae(a) ? {} : {
    obj: a,
    k: re(s[i])
  };
}, oe = (a, e, t) => {
  const {
    obj: s,
    k: i
  } = K(a, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[i] = t;
    return;
  }
  let n = e[e.length - 1], r = e.slice(0, e.length - 1), o = K(a, r, Object);
  for (; o.obj === void 0 && r.length; )
    n = `${r[r.length - 1]}.${n}`, r = r.slice(0, r.length - 1), o = K(a, r, Object), o != null && o.obj && typeof o.obj[`${o.k}.${n}`] < "u" && (o.obj = void 0);
  o.obj[`${o.k}.${n}`] = t;
}, ve = (a, e, t, s) => {
  const {
    obj: i,
    k: n
  } = K(a, e, Object);
  i[n] = i[n] || [], i[n].push(t);
}, _ = (a, e) => {
  const {
    obj: t,
    k: s
  } = K(a, e);
  if (t && Object.prototype.hasOwnProperty.call(t, s))
    return t[s];
}, Pe = (a, e, t) => {
  const s = _(a, t);
  return s !== void 0 ? s : _(e, t);
}, xe = (a, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in a ? g(a[s]) || a[s] instanceof String || g(e[s]) || e[s] instanceof String ? t && (a[s] = e[s]) : xe(a[s], e[s], t) : a[s] = e[s]);
  return a;
}, I = (a) => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var $e = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Re = (a) => g(a) ? a.replace(/[&<>"'\/]/g, (e) => $e[e]) : a;
class Ne {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const s = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s;
  }
}
const ke = [" ", ",", "?", "!", ";"], je = new Ne(20), Fe = (a, e, t) => {
  e = e || "", t = t || "";
  const s = ke.filter((r) => e.indexOf(r) < 0 && t.indexOf(r) < 0);
  if (s.length === 0) return true;
  const i = je.getRegExp(`(${s.map((r) => r === "?" ? "\\?" : r).join("|")})`);
  let n = !i.test(a);
  if (!n) {
    const r = a.indexOf(t);
    r > 0 && !i.test(a.substring(0, r)) && (n = true);
  }
  return n;
}, q = (a, e, t = ".") => {
  if (!a) return;
  if (a[e])
    return Object.prototype.hasOwnProperty.call(a, e) ? a[e] : void 0;
  const s = e.split(t);
  let i = a;
  for (let n = 0; n < s.length; ) {
    if (!i || typeof i != "object")
      return;
    let r, o = "";
    for (let l = n; l < s.length; ++l)
      if (l !== n && (o += t), o += s[l], r = i[o], r !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof r) > -1 && l < s.length - 1)
          continue;
        n += l - n + 1;
        break;
      }
    i = r;
  }
  return i;
}, M = (a) => a == null ? void 0 : a.replace(/_/g, "-"), Ee = {
  type: "logger",
  log(a) {
    this.output("log", a);
  },
  warn(a) {
    this.output("warn", a);
  },
  error(a) {
    this.output("error", a);
  },
  output(a, e) {
    var t, s;
    (s = (t = console == null ? void 0 : console[a]) == null ? void 0 : t.apply) == null || s.call(t, console, e);
  }
};
class W {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || Ee, this.options = t, this.debug = t.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", true);
  }
  warn(...e) {
    return this.forward(e, "warn", "", true);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(e, t, s, i) {
    return i && !this.debug ? null : (g(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new W(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new W(this.logger, e);
  }
}
var R = new W();
class G {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const i = this.observers[s].get(t) || 0;
      this.observers[s].set(t, i + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e, ...t) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([i, n]) => {
      for (let r = 0; r < n; r++)
        i(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, n]) => {
      for (let r = 0; r < n; r++)
        i.apply(i, [e, ...t]);
    });
  }
}
class le extends G {
  constructor(e, t = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = true);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s, i = {}) {
    var u, c;
    const n = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, r = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let o;
    e.indexOf(".") > -1 ? o = e.split(".") : (o = [e, t], s && (Array.isArray(s) ? o.push(...s) : g(s) && n ? o.push(...s.split(n)) : o.push(s)));
    const l = _(this.data, o);
    return !l && !t && !s && e.indexOf(".") > -1 && (e = o[0], t = o[1], s = o.slice(2).join(".")), l || !r || !g(s) ? l : q((c = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : c[t], s, n);
  }
  addResource(e, t, s, i, n = {
    silent: false
  }) {
    const r = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = [e, t];
    s && (o = o.concat(r ? s.split(r) : s)), e.indexOf(".") > -1 && (o = e.split("."), i = t, t = o[1]), this.addNamespaces(t), oe(this.data, o, i), n.silent || this.emit("added", e, t, s, i);
  }
  addResources(e, t, s, i = {
    silent: false
  }) {
    for (const n in s)
      (g(s[n]) || Array.isArray(s[n])) && this.addResource(e, t, n, s[n], {
        silent: true
      });
    i.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, i, n, r = {
    silent: false,
    skipCopy: false
  }) {
    let o = [e, t];
    e.indexOf(".") > -1 && (o = e.split("."), i = s, s = t, t = o[1]), this.addNamespaces(t);
    let l = _(this.data, o) || {};
    r.skipCopy || (s = JSON.parse(JSON.stringify(s))), i ? xe(l, s, n) : l = {
      ...l,
      ...s
    }, oe(this.data, o, l), r.silent || this.emit("added", e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((i) => t[i] && Object.keys(t[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var ye = {
  processors: {},
  addPostProcessor(a) {
    this.processors[a.name] = a;
  },
  handle(a, e, t, s, i) {
    return a.forEach((n) => {
      var r;
      e = ((r = this.processors[n]) == null ? void 0 : r.process(e, t, s, i)) ?? e;
    }), e;
  }
};
const Se = Symbol("i18next/PATH_KEY");
function Ie() {
  const a = [], e = /* @__PURE__ */ Object.create(null);
  let t;
  return e.get = (s, i) => {
    var n;
    return (n = t == null ? void 0 : t.revoke) == null || n.call(t), i === Se ? a : (a.push(i), t = Proxy.revocable(s, e), t.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function U(a, e) {
  const {
    [Se]: t
  } = a(Ie()), s = (e == null ? void 0 : e.keySeparator) ?? ".", i = (e == null ? void 0 : e.nsSeparator) ?? ":";
  if (t.length > 1 && i) {
    const n = e == null ? void 0 : e.ns;
    if ((n ? Array.isArray(n) ? n : [n] : []).includes(t[0]))
      return `${t[0]}${i}${t.slice(1).join(s)}`;
  }
  return t.join(s);
}
const ue = {}, Q = (a) => !g(a) && typeof a != "boolean" && typeof a != "number";
class Y extends G {
  constructor(e, t = {}) {
    super(), we(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = R.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const s = {
      ...t
    };
    if (e == null) return false;
    const i = this.resolve(e, s);
    if ((i == null ? void 0 : i.res) === void 0) return false;
    const n = Q(i.res);
    return !(s.returnObjects === false && n);
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let n = t.ns || this.options.defaultNS || [];
    const r = s && e.indexOf(s) > -1, o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Fe(e, s, i);
    if (r && !o) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: g(n) ? [n] : n
        };
      const u = e.split(s);
      (s !== i || s === i && this.options.ns.indexOf(u[0]) > -1) && (n = u.shift()), e = u.join(i);
    }
    return {
      key: e,
      namespaces: g(n) ? [n] : n
    };
  }
  translate(e, t, s) {
    let i = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = {
      ...i
    }), i || (i = {}), e == null) return "";
    typeof e == "function" && (e = U(e, {
      ...this.options,
      ...i
    })), Array.isArray(e) || (e = [String(e)]), e = e.map((L) => typeof L == "function" ? U(L, {
      ...this.options,
      ...i
    }) : String(L));
    const n = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, r = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: o,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], i), u = l[l.length - 1];
    let c = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    c === void 0 && (c = ":");
    const f = i.lng || this.language, p = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((f == null ? void 0 : f.toLowerCase()) === "cimode")
      return p ? n ? {
        res: `${u}${c}${o}`,
        usedKey: o,
        exactUsedKey: o,
        usedLng: f,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : `${u}${c}${o}` : n ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: f,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : o;
    const d = this.resolve(e, i);
    let h = d == null ? void 0 : d.res;
    const m = (d == null ? void 0 : d.usedKey) || o, x = (d == null ? void 0 : d.exactUsedKey) || o, O = ["[object Number]", "[object Function]", "[object RegExp]"], v = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, F = !this.i18nFormat || this.i18nFormat.handleAsObject, b = i.count !== void 0 && !g(i.count), N = Y.hasDefaultValue(i), z = b ? this.pluralResolver.getSuffix(f, i.count, i) : "", k = i.ordinal && b ? this.pluralResolver.getSuffix(f, i.count, {
      ordinal: false
    }) : "", T = b && !i.ordinal && i.count === 0, w = T && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${z}`] || i[`defaultValue${k}`] || i.defaultValue;
    let S = h;
    F && !h && N && (S = w);
    const be = Q(S), Le = Object.prototype.toString.apply(S);
    if (F && S && be && O.indexOf(Le) < 0 && !(g(v) && Array.isArray(S))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const L = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, S, {
          ...i,
          ns: l
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return n ? (d.res = L, d.usedParams = this.getUsedParamsDetails(i), d) : L;
      }
      if (r) {
        const L = Array.isArray(S), P = L ? [] : {}, ee = L ? x : m;
        for (const $ in S)
          if (Object.prototype.hasOwnProperty.call(S, $)) {
            const j = `${ee}${r}${$}`;
            N && !h ? P[$] = this.translate(j, {
              ...i,
              defaultValue: Q(w) ? w[$] : void 0,
              joinArrays: false,
              ns: l
            }) : P[$] = this.translate(j, {
              ...i,
              joinArrays: false,
              ns: l
            }), P[$] === j && (P[$] = S[$]);
          }
        h = P;
      }
    } else if (F && g(v) && Array.isArray(h))
      h = h.join(v), h && (h = this.extendTranslation(h, e, i, s));
    else {
      let L = false, P = false;
      !this.isValidLookup(h) && N && (L = true, h = w), this.isValidLookup(h) || (P = true, h = o);
      const $ = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && P ? void 0 : h, j = N && w !== h && this.options.updateMissing;
      if (P || L || j) {
        if (this.logger.log(j ? "updateKey" : "missingKey", f, u, o, j ? w : h), r) {
          const C = this.resolve(o, {
            ...i,
            keySeparator: false
          });
          C && C.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let V = [];
        const B = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && B && B[0])
          for (let C = 0; C < B.length; C++)
            V.push(B[C]);
        else this.options.saveMissingTo === "all" ? V = this.languageUtils.toResolveHierarchy(i.lng || this.language) : V.push(i.lng || this.language);
        const te = (C, E, D) => {
          var se;
          const ie = N && D !== h ? D : $;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(C, u, E, ie, j, i) : (se = this.backendConnector) != null && se.saveMissing && this.backendConnector.saveMissing(C, u, E, ie, j, i), this.emit("missingKey", C, u, E, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && b ? V.forEach((C) => {
          const E = this.pluralResolver.getSuffixes(C, i);
          T && i[`defaultValue${this.options.pluralSeparator}zero`] && E.indexOf(`${this.options.pluralSeparator}zero`) < 0 && E.push(`${this.options.pluralSeparator}zero`), E.forEach((D) => {
            te([C], o + D, i[`defaultValue${D}`] || w);
          });
        }) : te(V, o, w));
      }
      h = this.extendTranslation(h, e, i, d, s), P && h === o && this.options.appendNamespaceToMissingKey && (h = `${u}${c}${o}`), (P || L) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${c}${o}` : o, L ? h : void 0, i));
    }
    return n ? (d.res = h, d.usedParams = this.getUsedParamsDetails(i), d) : h;
  }
  extendTranslation(e, t, s, i, n) {
    var l, u;
    if ((l = this.i18nFormat) != null && l.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const c = g(e) && (((u = s == null ? void 0 : s.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let f;
      if (c) {
        const d = e.match(this.interpolator.nestingRegexp);
        f = d && d.length;
      }
      let p = s.replace && !g(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (p = {
        ...this.options.interpolation.defaultVariables,
        ...p
      }), e = this.interpolator.interpolate(e, p, s.lng || this.language || i.usedLng, s), c) {
        const d = e.match(this.interpolator.nestingRegexp), h = d && d.length;
        f < h && (s.nest = false);
      }
      !s.lng && i && i.res && (s.lng = this.language || i.usedLng), s.nest !== false && (e = this.interpolator.nest(e, (...d) => (n == null ? void 0 : n[0]) === d[0] && !s.context ? (this.logger.warn(`It seems you are nesting recursively key: ${d[0]} in key: ${t[0]}`), null) : this.translate(...d, t), s)), s.interpolation && this.interpolator.reset();
    }
    const r = s.postProcess || this.options.postProcess, o = g(r) ? [r] : r;
    return e != null && (o != null && o.length) && s.applyPostProcessor !== false && (e = ye.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e, t = {}) {
    let s, i, n, r, o;
    return g(e) && (e = [e]), Array.isArray(e) && (e = e.map((l) => typeof l == "function" ? U(l, {
      ...this.options,
      ...t
    }) : l)), e.forEach((l) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(l, t), c = u.key;
      i = c;
      let f = u.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const p = t.count !== void 0 && !g(t.count), d = p && !t.ordinal && t.count === 0, h = t.context !== void 0 && (g(t.context) || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      f.forEach((x) => {
        var O, v;
        this.isValidLookup(s) || (o = x, !ue[`${m[0]}-${x}`] && ((O = this.utils) != null && O.hasLoadedNamespace) && !((v = this.utils) != null && v.hasLoadedNamespace(o)) && (ue[`${m[0]}-${x}`] = true, this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((F) => {
          var z;
          if (this.isValidLookup(s)) return;
          r = F;
          const b = [c];
          if ((z = this.i18nFormat) != null && z.addLookupKeys)
            this.i18nFormat.addLookupKeys(b, c, F, x, t);
          else {
            let k;
            p && (k = this.pluralResolver.getSuffix(F, t.count, t));
            const T = `${this.options.pluralSeparator}zero`, w = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (p && (t.ordinal && k.indexOf(w) === 0 && b.push(c + k.replace(w, this.options.pluralSeparator)), b.push(c + k), d && b.push(c + T)), h) {
              const S = `${c}${this.options.contextSeparator || "_"}${t.context}`;
              b.push(S), p && (t.ordinal && k.indexOf(w) === 0 && b.push(S + k.replace(w, this.options.pluralSeparator)), b.push(S + k), d && b.push(S + T));
            }
          }
          let N;
          for (; N = b.pop(); )
            this.isValidLookup(s) || (n = N, s = this.getResource(F, x, N, t));
        }));
      });
    }), {
      res: s,
      usedKey: i,
      exactUsedKey: n,
      usedLng: r,
      usedNS: o
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s, i = {}) {
    var n;
    return (n = this.i18nFormat) != null && n.getResource ? this.i18nFormat.getResource(e, t, s, i) : this.resourceStore.getResource(e, t, s, i);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !g(e.replace);
    let i = s ? e.replace : e;
    if (s && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !s) {
      i = {
        ...i
      };
      for (const n of t)
        delete i[n];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0)
        return true;
    return false;
  }
}
class fe {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || false, this.logger = R.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = M(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = M(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (g(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((s) => {
      if (t) return;
      const i = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t) return;
      const i = this.getScriptPartFromCode(s);
      if (this.isSupportedCode(i)) return t = i;
      const n = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(n)) return t = n;
      t = this.options.supportedLngs.find((r) => {
        if (r === n) return r;
        if (!(r.indexOf("-") < 0 && n.indexOf("-") < 0) && (r.indexOf("-") > 0 && n.indexOf("-") < 0 && r.substring(0, r.indexOf("-")) === n || r.indexOf(n) === 0 && n.length > 1))
          return r;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), g(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes((t === false ? [] : t) || this.options.fallbackLng || [], e), i = [], n = (r) => {
      r && (this.isSupportedCode(r) ? i.push(r) : this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`));
    };
    return g(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && n(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && n(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && n(this.getLanguagePartFromCode(e))) : g(e) && n(this.formatLanguageCode(e)), s.forEach((r) => {
      i.indexOf(r) < 0 && n(this.formatLanguageCode(r));
    }), i;
  }
}
const ce = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, he = {
  select: (a) => a === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Te {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = R.create("pluralResolver"), this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const s = M(e === "dev" ? "en" : e), i = t.ordinal ? "ordinal" : "cardinal", n = JSON.stringify({
      cleanedCode: s,
      type: i
    });
    if (n in this.pluralRulesCache)
      return this.pluralRulesCache[n];
    let r;
    try {
      r = new Intl.PluralRules(s, {
        type: i
      });
    } catch {
      if (typeof Intl > "u")
        return this.logger.error("No Intl support, please use an Intl polyfill!"), he;
      if (!e.match(/-|_/)) return he;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      r = this.getRule(l, t);
    }
    return this.pluralRulesCache[n] = r, r;
  }
  needsPlural(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), (s == null ? void 0 : s.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t, s = {}) {
    return this.getSuffixes(e, s).map((i) => `${t}${i}`);
  }
  getSuffixes(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((i, n) => ce[i] - ce[n]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(e, t, s = {}) {
    const i = this.getRule(e, s);
    return i ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}
const de = (a, e, t, s = ".", i = true) => {
  let n = Pe(a, e, t);
  return !n && i && g(t) && (n = q(a, t, s), n === void 0 && (n = q(e, t, s))), n;
}, Z = (a) => a.replace(/\$/g, "$$$$");
class pe {
  constructor(e = {}) {
    var t;
    this.logger = R.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((s) => s), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: true
    });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: i,
      prefix: n,
      prefixEscaped: r,
      suffix: o,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: f,
      nestingPrefix: p,
      nestingPrefixEscaped: d,
      nestingSuffix: h,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: x,
      maxReplaces: O,
      alwaysFormat: v
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Re, this.escapeValue = s !== void 0 ? s : true, this.useRawValueToEscape = i !== void 0 ? i : false, this.prefix = n ? I(n) : r || "{{", this.suffix = o ? I(o) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = p ? I(p) : d || I("$t("), this.nestingSuffix = h ? I(h) : m || I(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = O || 1e3, this.alwaysFormat = v !== void 0 ? v : false, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => (t == null ? void 0 : t.source) === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, i) {
    var d;
    let n, r, o;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const v = de(t, l, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(v, void 0, s, {
          ...i,
          ...t,
          interpolationkey: h
        }) : v;
      }
      const m = h.split(this.formatSeparator), x = m.shift().trim(), O = m.join(this.formatSeparator).trim();
      return this.format(de(t, l, x, this.options.keySeparator, this.options.ignoreJSONStructure), O, s, {
        ...i,
        ...t,
        interpolationkey: x
      });
    };
    this.resetRegExp();
    const c = (i == null ? void 0 : i.missingInterpolationHandler) || this.options.missingInterpolationHandler, f = ((d = i == null ? void 0 : i.interpolation) == null ? void 0 : d.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => Z(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? Z(this.escape(h)) : Z(h)
    }].forEach((h) => {
      for (o = 0; n = h.regex.exec(e); ) {
        const m = n[1].trim();
        if (r = u(m), r === void 0)
          if (typeof c == "function") {
            const O = c(e, n, i);
            r = g(O) ? O : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, m))
            r = "";
          else if (f) {
            r = n[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`), r = "";
        else !g(r) && !this.useRawValueToEscape && (r = ne(r));
        const x = h.safeValue(r);
        if (e = e.replace(n[0], x), f ? (h.regex.lastIndex += r.length, h.regex.lastIndex -= n[0].length) : h.regex.lastIndex = 0, o++, o >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, s = {}) {
    let i, n, r;
    const o = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const f = l.split(new RegExp(`${I(c)}[ ]*{`));
      let p = `{${f[1]}`;
      l = f[0], p = this.interpolate(p, r);
      const d = p.match(/'/g), h = p.match(/"/g);
      (((d == null ? void 0 : d.length) ?? 0) % 2 === 0 && !h || ((h == null ? void 0 : h.length) ?? 0) % 2 !== 0) && (p = p.replace(/'/g, '"'));
      try {
        r = JSON.parse(p), u && (r = {
          ...u,
          ...r
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${c}${p}`;
      }
      return r.defaultValue && r.defaultValue.indexOf(this.prefix) > -1 && delete r.defaultValue, l;
    };
    for (; i = this.nestingRegexp.exec(e); ) {
      let l = [];
      r = {
        ...s
      }, r = r.replace && !g(r.replace) ? r.replace : r, r.applyPostProcessor = false, delete r.defaultValue;
      const u = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
      if (u !== -1 && (l = i[1].slice(u).split(this.formatSeparator).map((c) => c.trim()).filter(Boolean), i[1] = i[1].slice(0, u)), n = t(o.call(this, i[1].trim(), r), r), n && i[0] === e && !g(n)) return n;
      g(n) || (n = ne(n)), n || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), n = ""), l.length && (n = l.reduce((c, f) => this.format(c, f, s.lng, {
        ...s,
        interpolationkey: i[1].trim()
      }), n.trim())), e = e.replace(i[0], n), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Ve = (a) => {
  let e = a.toLowerCase().trim();
  const t = {};
  if (a.indexOf("(") > -1) {
    const s = a.split("(");
    e = s[0].toLowerCase().trim();
    const i = s[1].substring(0, s[1].length - 1);
    e === "currency" && i.indexOf(":") < 0 ? t.currency || (t.currency = i.trim()) : e === "relativetime" && i.indexOf(":") < 0 ? t.range || (t.range = i.trim()) : i.split(";").forEach((r) => {
      if (r) {
        const [o, ...l] = r.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = o.trim();
        t[c] || (t[c] = u), u === "false" && (t[c] = false), u === "true" && (t[c] = true), isNaN(u) || (t[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, ge = (a) => {
  const e = {};
  return (t, s, i) => {
    let n = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (n = {
      ...n,
      [i.interpolationkey]: void 0
    });
    const r = s + JSON.stringify(n);
    let o = e[r];
    return o || (o = a(M(s), i), e[r] = o), o(t);
  };
}, De = (a) => (e, t, s) => a(M(t), s)(e);
class Ae {
  constructor(e = {}) {
    this.logger = R.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const s = t.cacheInBuiltFormats ? ge : De;
    this.formats = {
      number: s((i, n) => {
        const r = new Intl.NumberFormat(i, {
          ...n
        });
        return (o) => r.format(o);
      }),
      currency: s((i, n) => {
        const r = new Intl.NumberFormat(i, {
          ...n,
          style: "currency"
        });
        return (o) => r.format(o);
      }),
      datetime: s((i, n) => {
        const r = new Intl.DateTimeFormat(i, {
          ...n
        });
        return (o) => r.format(o);
      }),
      relativetime: s((i, n) => {
        const r = new Intl.RelativeTimeFormat(i, {
          ...n
        });
        return (o) => r.format(o, n.range || "day");
      }),
      list: s((i, n) => {
        const r = new Intl.ListFormat(i, {
          ...n
        });
        return (o) => r.format(o);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = ge(t);
  }
  format(e, t, s, i = {}) {
    const n = t.split(this.formatSeparator);
    if (n.length > 1 && n[0].indexOf("(") > 1 && n[0].indexOf(")") < 0 && n.find((o) => o.indexOf(")") > -1)) {
      const o = n.findIndex((l) => l.indexOf(")") > -1);
      n[0] = [n[0], ...n.splice(1, o)].join(this.formatSeparator);
    }
    return n.reduce((o, l) => {
      var f;
      const {
        formatName: u,
        formatOptions: c
      } = Ve(l);
      if (this.formats[u]) {
        let p = o;
        try {
          const d = ((f = i == null ? void 0 : i.formatParams) == null ? void 0 : f[i.interpolationkey]) || {}, h = d.locale || d.lng || i.locale || i.lng || s;
          p = this.formats[u](o, h, {
            ...c,
            ...i,
            ...d
          });
        } catch (d) {
          this.logger.warn(d);
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return o;
    }, e);
  }
}
const Ke = (a, e) => {
  a.pending[e] !== void 0 && (delete a.pending[e], a.pendingCount--);
};
class Ue extends G {
  constructor(e, t, s, i = {}) {
    var n, r;
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = i, this.logger = R.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], (r = (n = this.backend) == null ? void 0 : n.init) == null || r.call(n, s, i.backend, i);
  }
  queueLoad(e, t, s, i) {
    const n = {}, r = {}, o = {}, l = {};
    return e.forEach((u) => {
      let c = true;
      t.forEach((f) => {
        const p = `${u}|${f}`;
        !s.reload && this.store.hasResourceBundle(u, f) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? r[p] === void 0 && (r[p] = true) : (this.state[p] = 1, c = false, r[p] === void 0 && (r[p] = true), n[p] === void 0 && (n[p] = true), l[f] === void 0 && (l[f] = true)));
      }), c || (o[u] = true);
    }), (Object.keys(n).length || Object.keys(r).length) && this.queue.push({
      pending: r,
      pendingCount: Object.keys(r).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(n),
      pending: Object.keys(r),
      toLoadLanguages: Object.keys(o),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, s) {
    const i = e.split("|"), n = i[0], r = i[1];
    t && this.emit("failedLoading", n, r, t), !t && s && this.store.addResourceBundle(n, r, s, void 0, void 0, {
      skipCopy: true
    }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    const o = {};
    this.queue.forEach((l) => {
      ve(l.loaded, [n], r), Ke(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        o[u] || (o[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((f) => {
          o[u][f] === void 0 && (o[u][f] = true);
        });
      }), l.done = true, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", o), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, s, i = 0, n = this.retryTimeout, r) {
    if (!e.length) return r(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: i,
        wait: n,
        callback: r
      });
      return;
    }
    this.readingCalls++;
    const o = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (u && c && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, i + 1, n * 2, r);
        }, n);
        return;
      }
      r(u, c);
    }, l = this.backend[s].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, t);
        u && typeof u.then == "function" ? u.then((c) => o(null, c)).catch(o) : o(null, u);
      } catch (u) {
        o(u);
      }
      return;
    }
    return l(e, t, o);
  }
  prepareLoading(e, t, s = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    g(e) && (e = this.languageUtils.toResolveHierarchy(e)), g(t) && (t = [t]);
    const n = this.queueLoad(e, t, s, i);
    if (!n.toLoad.length)
      return n.pending.length || i(), null;
    n.toLoad.forEach((r) => {
      this.loadOne(r);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, {
      reload: true
    }, s);
  }
  loadOne(e, t = "") {
    const s = e.split("|"), i = s[0], n = s[1];
    this.read(i, n, "read", void 0, void 0, (r, o) => {
      r && this.logger.warn(`${t}loading namespace ${n} for language ${i} failed`, r), !r && o && this.logger.log(`${t}loaded namespace ${n} for language ${i}`, o), this.loaded(e, r, o);
    });
  }
  saveMissing(e, t, s, i, n, r = {}, o = () => {
  }) {
    var l, u, c, f, p;
    if ((u = (l = this.services) == null ? void 0 : l.utils) != null && u.hasLoadedNamespace && !((f = (c = this.services) == null ? void 0 : c.utils) != null && f.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if ((p = this.backend) != null && p.create) {
        const d = {
          ...r,
          isUpdate: n
        }, h = this.backend.create.bind(this.backend);
        if (h.length < 6)
          try {
            let m;
            h.length === 5 ? m = h(e, t, s, i, d) : m = h(e, t, s, i), m && typeof m.then == "function" ? m.then((x) => o(null, x)).catch(o) : o(null, m);
          } catch (m) {
            o(m);
          }
        else
          h(e, t, s, i, o, d);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, i);
    }
  }
}
const X = () => ({
  debug: false,
  initAsync: true,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: "all",
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: "fallback",
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: (a) => {
    let e = {};
    if (typeof a[1] == "object" && (e = a[1]), g(a[1]) && (e.defaultValue = a[1]), g(a[2]) && (e.tDescription = a[2]), typeof a[2] == "object" || typeof a[3] == "object") {
      const t = a[3] || a[2];
      Object.keys(t).forEach((s) => {
        e[s] = t[s];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: true,
    format: (a) => a,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: true
  },
  cacheInBuiltFormats: true
}), me = (a) => {
  var e, t;
  return g(a.ns) && (a.ns = [a.ns]), g(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]), g(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]), ((t = (e = a.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])), typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate), a;
}, J = () => {
}, He = (a) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach((t) => {
    typeof a[t] == "function" && (a[t] = a[t].bind(a));
  });
}, Oe = "__i18next_supportNoticeShown", Me = () => typeof globalThis < "u" && !!globalThis[Oe], ze = () => {
  typeof globalThis < "u" && (globalThis[Oe] = true);
}, Be = (a) => {
  var e, t, s, i, n, r, o, l, u, c, f, p, d;
  return !!(((s = (t = (e = a == null ? void 0 : a.modules) == null ? void 0 : e.backend) == null ? void 0 : t.name) == null ? void 0 : s.indexOf("Locize")) > 0 || ((o = (r = (n = (i = a == null ? void 0 : a.modules) == null ? void 0 : i.backend) == null ? void 0 : n.constructor) == null ? void 0 : r.name) == null ? void 0 : o.indexOf("Locize")) > 0 || (u = (l = a == null ? void 0 : a.options) == null ? void 0 : l.backend) != null && u.backends && a.options.backend.backends.some((h) => {
    var m, x, O;
    return ((m = h == null ? void 0 : h.name) == null ? void 0 : m.indexOf("Locize")) > 0 || ((O = (x = h == null ? void 0 : h.constructor) == null ? void 0 : x.name) == null ? void 0 : O.indexOf("Locize")) > 0;
  }) || (f = (c = a == null ? void 0 : a.options) == null ? void 0 : c.backend) != null && f.projectId || (d = (p = a == null ? void 0 : a.options) == null ? void 0 : p.backend) != null && d.backendOptions && a.options.backend.backendOptions.some((h) => h == null ? void 0 : h.projectId));
};
class H extends G {
  constructor(e = {}, t) {
    if (super(), this.options = me(e), this.services = {}, this.logger = R, this.modules = {
      external: []
    }, He(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = true, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (g(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const s = X();
    this.options = {
      ...s,
      ...this.options,
      ...me(e)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = s.overloadTranslationOptionHandler), this.options.showSupportNotice !== false && !Be(this) && !Me() && (typeof console < "u" && typeof console.info < "u" && console.info("🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"), ze());
    const i = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? R.init(i(this.modules.logger), this.options) : R.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = Ae;
      const c = new fe(this.options);
      this.store = new le(this.options.resources, this.options);
      const f = this.services;
      f.logger = R, f.resourceStore = this.store, f.languageUtils = c, f.pluralResolver = new Te(c, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== s.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), u && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = i(u), f.formatter.init && f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new pe(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Ue(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", (d, ...h) => {
        this.emit(d, ...h);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Y(this.services, this.options), this.translator.on("*", (d, ...h) => {
        this.emit(d, ...h);
      }), this.modules.external.forEach((d) => {
        d.init && d.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = J), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = (...c) => this.store[u](...c);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = (...c) => (this.store[u](...c), this);
    });
    const o = A(), l = () => {
      const u = (c, f) => {
        this.isInitializing = false, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = true, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(f), t(c, f);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), o;
  }
  loadResources(e, t = J) {
    var n, r;
    let s = t;
    const i = g(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const o = [], l = (u) => {
        if (!u || u === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((f) => {
          f !== "cimode" && o.indexOf(f) < 0 && o.push(f);
        });
      };
      i ? l(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => l(c)), (r = (n = this.options.preload) == null ? void 0 : n.forEach) == null || r.call(n, (u) => l(u)), this.services.backendConnector.load(o, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(u);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const i = A();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = J), this.services.backendConnector.reload(e, t, (n) => {
      i.resolve(), s(n);
    }), i;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && ye.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const s = A();
    this.emit("languageChanging", e);
    const i = (o) => {
      this.language = o, this.languages = this.services.languageUtils.toResolveHierarchy(o), this.resolvedLanguage = void 0, this.setResolvedLanguage(o);
    }, n = (o, l) => {
      l ? this.isLanguageChangingTo === e && (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, s.resolve((...u) => this.t(...u)), t && t(o, (...u) => this.t(...u));
    }, r = (o) => {
      var c, f;
      !e && !o && this.services.languageDetector && (o = []);
      const l = g(o) ? o : o && o[0], u = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(g(o) ? [o] : o);
      u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), (f = (c = this.services.languageDetector) == null ? void 0 : c.cacheUserLanguage) == null || f.call(c, u)), this.loadResources(u, (p) => {
        n(p, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? r(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(r) : this.services.languageDetector.detect(r) : r(e), s;
  }
  getFixedT(e, t, s) {
    const i = (n, r, ...o) => {
      let l;
      typeof r != "object" ? l = this.options.overloadTranslationOptionHandler([n, r].concat(o)) : l = {
        ...r
      }, l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || s || i.keyPrefix);
      const u = this.options.keySeparator || ".";
      let c;
      return l.keyPrefix && Array.isArray(n) ? c = n.map((f) => (typeof f == "function" && (f = U(f, {
        ...this.options,
        ...r
      })), `${l.keyPrefix}${u}${f}`)) : (typeof n == "function" && (n = U(n, {
        ...this.options,
        ...r
      })), c = l.keyPrefix ? `${l.keyPrefix}${u}${n}` : n), this.t(c, l);
    };
    return g(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
  }
  t(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.translate(...e);
  }
  exists(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), false;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), false;
    const s = t.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : false, n = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return true;
    const r = (o, l) => {
      const u = this.services.backendConnector.state[`${o}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const o = t.precheck(this, r);
      if (o !== void 0) return o;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || r(s, e) && (!i || r(n, e)));
  }
  loadNamespaces(e, t) {
    const s = A();
    return this.options.ns ? (g(e) && (e = [e]), e.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      s.resolve(), t && t(i);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = A();
    g(e) && (e = [e]);
    const i = this.options.preload || [], n = e.filter((r) => i.indexOf(r) < 0 && this.services.languageUtils.isSupportedCode(r));
    return n.length ? (this.options.preload = i.concat(n), this.loadResources((r) => {
      s.resolve(), t && t(r);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var i, n;
    if (e || (e = this.resolvedLanguage || (((i = this.languages) == null ? void 0 : i.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const r = new Intl.Locale(e);
      if (r && r.getTextInfo) {
        const o = r.getTextInfo();
        if (o && o.direction) return o.direction;
      }
    } catch {
    }
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = ((n = this.services) == null ? void 0 : n.languageUtils) || new fe(X());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    const s = new H(e, t);
    return s.createInstance = H.createInstance, s;
  }
  cloneInstance(e = {}, t = J) {
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const i = {
      ...this.options,
      ...e,
      isClone: true
    }, n = new H(i);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (n.logger = n.logger.clone(e)), ["store", "services", "language"].forEach((o) => {
      n[o] = this[o];
    }), n.services = {
      ...this.services
    }, n.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, s) {
      const o = Object.keys(this.store.data).reduce((l, u) => (l[u] = {
        ...this.store.data[u]
      }, l[u] = Object.keys(l[u]).reduce((c, f) => (c[f] = {
        ...l[u][f]
      }, c), l[u]), l), {});
      n.store = new le(o, i), n.services.resourceStore = n.store;
    }
    if (e.interpolation) {
      const l = {
        ...X().interpolation,
        ...this.options.interpolation,
        ...e.interpolation
      }, u = {
        ...i,
        interpolation: l
      };
      n.services.interpolator = new pe(u);
    }
    return n.translator = new Y(n.services, i), n.translator.on("*", (o, ...l) => {
      n.emit(o, ...l);
    }), n.init(i, t), n.translator.options = i, n.translator.backendConnector.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, n;
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
const y = H.createInstance();
y.createInstance;
y.dir;
y.init;
y.loadResources;
y.reloadResources;
y.use;
y.changeLanguage;
y.getFixedT;
y.t;
y.exists;
y.setDefaultNamespace;
y.hasLoadedNamespace;
y.loadNamespaces;
y.loadLanguages;
const _e = (a) => {
  var e, t;
  !((e = a == null ? void 0 : a.i18n) != null && e.language) || !((t = a == null ? void 0 : a.i18n) != null && t.translations) || y.language === a.i18n.language && y.isInitialized || y.init({
    lng: a.i18n.language,
    fallbackLng: "en",
    resources: a.i18n.translations,
    interpolation: {
      escapeValue: false
    }
  });
}, Je = (a, e) => {
  if (!a || !a.includes("|")) return y.t(a, e);
  const [t, s] = a.split("|", 2).map((i) => i.trim());
  return y.t(
    [t, s].filter((i) => !!i),
    e
  );
}, We = (a) => {
  const e = {};
  return Object.keys(a).forEach((t) => {
    const s = a[t];
    e[t] = typeof s == "string" ? Je(s) : s;
  }), e;
};

export { Je as J, We as W, _e as _, y };
//# sourceMappingURL=component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js.map
//# sourceMappingURL=component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js.map
