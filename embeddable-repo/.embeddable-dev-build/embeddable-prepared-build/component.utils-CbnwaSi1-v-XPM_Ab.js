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
export {
  Je as J,
  We as W,
  _e as _,
  y
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnV0aWxzLUNibndhU2kxLXYtWFBNX0FiLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbW9yb25nd2EvZW1iZWRkYWJsZV9odWJzcG90X2Rhc2gvZW1iZWRkYWJsZS1yZXBvL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vcmVtYXJrYWJsZS1wcm8vZGlzdC9jb21wb25lbnQudXRpbHMtQ2Jud2FTaTEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZyA9IChhKSA9PiB0eXBlb2YgYSA9PSBcInN0cmluZ1wiLCBBID0gKCkgPT4ge1xuICBsZXQgYSwgZTtcbiAgY29uc3QgdCA9IG5ldyBQcm9taXNlKChzLCBpKSA9PiB7XG4gICAgYSA9IHMsIGUgPSBpO1xuICB9KTtcbiAgcmV0dXJuIHQucmVzb2x2ZSA9IGEsIHQucmVqZWN0ID0gZSwgdDtcbn0sIG5lID0gKGEpID0+IGEgPT0gbnVsbCA/IFwiXCIgOiBcIlwiICsgYSwgd2UgPSAoYSwgZSwgdCkgPT4ge1xuICBhLmZvckVhY2goKHMpID0+IHtcbiAgICBlW3NdICYmICh0W3NdID0gZVtzXSk7XG4gIH0pO1xufSwgQ2UgPSAvIyMjL2csIHJlID0gKGEpID0+IGEgJiYgYS5pbmRleE9mKFwiIyMjXCIpID4gLTEgPyBhLnJlcGxhY2UoQ2UsIFwiLlwiKSA6IGEsIGFlID0gKGEpID0+ICFhIHx8IGcoYSksIEsgPSAoYSwgZSwgdCkgPT4ge1xuICBjb25zdCBzID0gZyhlKSA/IGUuc3BsaXQoXCIuXCIpIDogZTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKDsgaSA8IHMubGVuZ3RoIC0gMTsgKSB7XG4gICAgaWYgKGFlKGEpKSByZXR1cm4ge307XG4gICAgY29uc3QgbiA9IHJlKHNbaV0pO1xuICAgICFhW25dICYmIHQgJiYgKGFbbl0gPSBuZXcgdCgpKSwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIG4pID8gYSA9IGFbbl0gOiBhID0ge30sICsraTtcbiAgfVxuICByZXR1cm4gYWUoYSkgPyB7fSA6IHtcbiAgICBvYmo6IGEsXG4gICAgazogcmUoc1tpXSlcbiAgfTtcbn0sIG9lID0gKGEsIGUsIHQpID0+IHtcbiAgY29uc3Qge1xuICAgIG9iajogcyxcbiAgICBrOiBpXG4gIH0gPSBLKGEsIGUsIE9iamVjdCk7XG4gIGlmIChzICE9PSB2b2lkIDAgfHwgZS5sZW5ndGggPT09IDEpIHtcbiAgICBzW2ldID0gdDtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IG4gPSBlW2UubGVuZ3RoIC0gMV0sIHIgPSBlLnNsaWNlKDAsIGUubGVuZ3RoIC0gMSksIG8gPSBLKGEsIHIsIE9iamVjdCk7XG4gIGZvciAoOyBvLm9iaiA9PT0gdm9pZCAwICYmIHIubGVuZ3RoOyApXG4gICAgbiA9IGAke3Jbci5sZW5ndGggLSAxXX0uJHtufWAsIHIgPSByLnNsaWNlKDAsIHIubGVuZ3RoIC0gMSksIG8gPSBLKGEsIHIsIE9iamVjdCksIG8gIT0gbnVsbCAmJiBvLm9iaiAmJiB0eXBlb2Ygby5vYmpbYCR7by5rfS4ke259YF0gPCBcInVcIiAmJiAoby5vYmogPSB2b2lkIDApO1xuICBvLm9ialtgJHtvLmt9LiR7bn1gXSA9IHQ7XG59LCB2ZSA9IChhLCBlLCB0LCBzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvYmo6IGksXG4gICAgazogblxuICB9ID0gSyhhLCBlLCBPYmplY3QpO1xuICBpW25dID0gaVtuXSB8fCBbXSwgaVtuXS5wdXNoKHQpO1xufSwgXyA9IChhLCBlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvYmo6IHQsXG4gICAgazogc1xuICB9ID0gSyhhLCBlKTtcbiAgaWYgKHQgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIHMpKVxuICAgIHJldHVybiB0W3NdO1xufSwgUGUgPSAoYSwgZSwgdCkgPT4ge1xuICBjb25zdCBzID0gXyhhLCB0KTtcbiAgcmV0dXJuIHMgIT09IHZvaWQgMCA/IHMgOiBfKGUsIHQpO1xufSwgeGUgPSAoYSwgZSwgdCkgPT4ge1xuICBmb3IgKGNvbnN0IHMgaW4gZSlcbiAgICBzICE9PSBcIl9fcHJvdG9fX1wiICYmIHMgIT09IFwiY29uc3RydWN0b3JcIiAmJiAocyBpbiBhID8gZyhhW3NdKSB8fCBhW3NdIGluc3RhbmNlb2YgU3RyaW5nIHx8IGcoZVtzXSkgfHwgZVtzXSBpbnN0YW5jZW9mIFN0cmluZyA/IHQgJiYgKGFbc10gPSBlW3NdKSA6IHhlKGFbc10sIGVbc10sIHQpIDogYVtzXSA9IGVbc10pO1xuICByZXR1cm4gYTtcbn0sIEkgPSAoYSkgPT4gYS5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgXCJcXFxcJCZcIik7XG52YXIgJGUgPSB7XG4gIFwiJlwiOiBcIiZhbXA7XCIsXG4gIFwiPFwiOiBcIiZsdDtcIixcbiAgXCI+XCI6IFwiJmd0O1wiLFxuICAnXCInOiBcIiZxdW90O1wiLFxuICBcIidcIjogXCImIzM5O1wiLFxuICBcIi9cIjogXCImI3gyRjtcIlxufTtcbmNvbnN0IFJlID0gKGEpID0+IGcoYSkgPyBhLnJlcGxhY2UoL1smPD5cIidcXC9dL2csIChlKSA9PiAkZVtlXSkgOiBhO1xuY2xhc3MgTmUge1xuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5jYXBhY2l0eSA9IGUsIHRoaXMucmVnRXhwTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgdGhpcy5yZWdFeHBRdWV1ZSA9IFtdO1xuICB9XG4gIGdldFJlZ0V4cChlKSB7XG4gICAgY29uc3QgdCA9IHRoaXMucmVnRXhwTWFwLmdldChlKTtcbiAgICBpZiAodCAhPT0gdm9pZCAwKVxuICAgICAgcmV0dXJuIHQ7XG4gICAgY29uc3QgcyA9IG5ldyBSZWdFeHAoZSk7XG4gICAgcmV0dXJuIHRoaXMucmVnRXhwUXVldWUubGVuZ3RoID09PSB0aGlzLmNhcGFjaXR5ICYmIHRoaXMucmVnRXhwTWFwLmRlbGV0ZSh0aGlzLnJlZ0V4cFF1ZXVlLnNoaWZ0KCkpLCB0aGlzLnJlZ0V4cE1hcC5zZXQoZSwgcyksIHRoaXMucmVnRXhwUXVldWUucHVzaChlKSwgcztcbiAgfVxufVxuY29uc3Qga2UgPSBbXCIgXCIsIFwiLFwiLCBcIj9cIiwgXCIhXCIsIFwiO1wiXSwgamUgPSBuZXcgTmUoMjApLCBGZSA9IChhLCBlLCB0KSA9PiB7XG4gIGUgPSBlIHx8IFwiXCIsIHQgPSB0IHx8IFwiXCI7XG4gIGNvbnN0IHMgPSBrZS5maWx0ZXIoKHIpID0+IGUuaW5kZXhPZihyKSA8IDAgJiYgdC5pbmRleE9mKHIpIDwgMCk7XG4gIGlmIChzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICEwO1xuICBjb25zdCBpID0gamUuZ2V0UmVnRXhwKGAoJHtzLm1hcCgocikgPT4gciA9PT0gXCI/XCIgPyBcIlxcXFw/XCIgOiByKS5qb2luKFwifFwiKX0pYCk7XG4gIGxldCBuID0gIWkudGVzdChhKTtcbiAgaWYgKCFuKSB7XG4gICAgY29uc3QgciA9IGEuaW5kZXhPZih0KTtcbiAgICByID4gMCAmJiAhaS50ZXN0KGEuc3Vic3RyaW5nKDAsIHIpKSAmJiAobiA9ICEwKTtcbiAgfVxuICByZXR1cm4gbjtcbn0sIHEgPSAoYSwgZSwgdCA9IFwiLlwiKSA9PiB7XG4gIGlmICghYSkgcmV0dXJuO1xuICBpZiAoYVtlXSlcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGUpID8gYVtlXSA6IHZvaWQgMDtcbiAgY29uc3QgcyA9IGUuc3BsaXQodCk7XG4gIGxldCBpID0gYTtcbiAgZm9yIChsZXQgbiA9IDA7IG4gPCBzLmxlbmd0aDsgKSB7XG4gICAgaWYgKCFpIHx8IHR5cGVvZiBpICE9IFwib2JqZWN0XCIpXG4gICAgICByZXR1cm47XG4gICAgbGV0IHIsIG8gPSBcIlwiO1xuICAgIGZvciAobGV0IGwgPSBuOyBsIDwgcy5sZW5ndGg7ICsrbClcbiAgICAgIGlmIChsICE9PSBuICYmIChvICs9IHQpLCBvICs9IHNbbF0sIHIgPSBpW29dLCByICE9PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKFtcInN0cmluZ1wiLCBcIm51bWJlclwiLCBcImJvb2xlYW5cIl0uaW5kZXhPZih0eXBlb2YgcikgPiAtMSAmJiBsIDwgcy5sZW5ndGggLSAxKVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBuICs9IGwgLSBuICsgMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgaSA9IHI7XG4gIH1cbiAgcmV0dXJuIGk7XG59LCBNID0gKGEpID0+IGEgPT0gbnVsbCA/IHZvaWQgMCA6IGEucmVwbGFjZSgvXy9nLCBcIi1cIiksIEVlID0ge1xuICB0eXBlOiBcImxvZ2dlclwiLFxuICBsb2coYSkge1xuICAgIHRoaXMub3V0cHV0KFwibG9nXCIsIGEpO1xuICB9LFxuICB3YXJuKGEpIHtcbiAgICB0aGlzLm91dHB1dChcIndhcm5cIiwgYSk7XG4gIH0sXG4gIGVycm9yKGEpIHtcbiAgICB0aGlzLm91dHB1dChcImVycm9yXCIsIGEpO1xuICB9LFxuICBvdXRwdXQoYSwgZSkge1xuICAgIHZhciB0LCBzO1xuICAgIChzID0gKHQgPSBjb25zb2xlID09IG51bGwgPyB2b2lkIDAgOiBjb25zb2xlW2FdKSA9PSBudWxsID8gdm9pZCAwIDogdC5hcHBseSkgPT0gbnVsbCB8fCBzLmNhbGwodCwgY29uc29sZSwgZSk7XG4gIH1cbn07XG5jbGFzcyBXIHtcbiAgY29uc3RydWN0b3IoZSwgdCA9IHt9KSB7XG4gICAgdGhpcy5pbml0KGUsIHQpO1xuICB9XG4gIGluaXQoZSwgdCA9IHt9KSB7XG4gICAgdGhpcy5wcmVmaXggPSB0LnByZWZpeCB8fCBcImkxOG5leHQ6XCIsIHRoaXMubG9nZ2VyID0gZSB8fCBFZSwgdGhpcy5vcHRpb25zID0gdCwgdGhpcy5kZWJ1ZyA9IHQuZGVidWc7XG4gIH1cbiAgbG9nKC4uLmUpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkKGUsIFwibG9nXCIsIFwiXCIsICEwKTtcbiAgfVxuICB3YXJuKC4uLmUpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkKGUsIFwid2FyblwiLCBcIlwiLCAhMCk7XG4gIH1cbiAgZXJyb3IoLi4uZSkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmQoZSwgXCJlcnJvclwiLCBcIlwiKTtcbiAgfVxuICBkZXByZWNhdGUoLi4uZSkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmQoZSwgXCJ3YXJuXCIsIFwiV0FSTklORyBERVBSRUNBVEVEOiBcIiwgITApO1xuICB9XG4gIGZvcndhcmQoZSwgdCwgcywgaSkge1xuICAgIHJldHVybiBpICYmICF0aGlzLmRlYnVnID8gbnVsbCA6IChnKGVbMF0pICYmIChlWzBdID0gYCR7c30ke3RoaXMucHJlZml4fSAke2VbMF19YCksIHRoaXMubG9nZ2VyW3RdKGUpKTtcbiAgfVxuICBjcmVhdGUoZSkge1xuICAgIHJldHVybiBuZXcgVyh0aGlzLmxvZ2dlciwge1xuICAgICAgcHJlZml4OiBgJHt0aGlzLnByZWZpeH06JHtlfTpgLFxuICAgICAgLi4udGhpcy5vcHRpb25zXG4gICAgfSk7XG4gIH1cbiAgY2xvbmUoZSkge1xuICAgIHJldHVybiBlID0gZSB8fCB0aGlzLm9wdGlvbnMsIGUucHJlZml4ID0gZS5wcmVmaXggfHwgdGhpcy5wcmVmaXgsIG5ldyBXKHRoaXMubG9nZ2VyLCBlKTtcbiAgfVxufVxudmFyIFIgPSBuZXcgVygpO1xuY2xhc3MgRyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub2JzZXJ2ZXJzID0ge307XG4gIH1cbiAgb24oZSwgdCkge1xuICAgIHJldHVybiBlLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChzKSA9PiB7XG4gICAgICB0aGlzLm9ic2VydmVyc1tzXSB8fCAodGhpcy5vYnNlcnZlcnNbc10gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLm9ic2VydmVyc1tzXS5nZXQodCkgfHwgMDtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzW3NdLnNldCh0LCBpICsgMSk7XG4gICAgfSksIHRoaXM7XG4gIH1cbiAgb2ZmKGUsIHQpIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlcnNbZV0pIHtcbiAgICAgIGlmICghdCkge1xuICAgICAgICBkZWxldGUgdGhpcy5vYnNlcnZlcnNbZV07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub2JzZXJ2ZXJzW2VdLmRlbGV0ZSh0KTtcbiAgICB9XG4gIH1cbiAgZW1pdChlLCAuLi50KSB7XG4gICAgdGhpcy5vYnNlcnZlcnNbZV0gJiYgQXJyYXkuZnJvbSh0aGlzLm9ic2VydmVyc1tlXS5lbnRyaWVzKCkpLmZvckVhY2goKFtpLCBuXSkgPT4ge1xuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBuOyByKyspXG4gICAgICAgIGkoLi4udCk7XG4gICAgfSksIHRoaXMub2JzZXJ2ZXJzW1wiKlwiXSAmJiBBcnJheS5mcm9tKHRoaXMub2JzZXJ2ZXJzW1wiKlwiXS5lbnRyaWVzKCkpLmZvckVhY2goKFtpLCBuXSkgPT4ge1xuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBuOyByKyspXG4gICAgICAgIGkuYXBwbHkoaSwgW2UsIC4uLnRdKTtcbiAgICB9KTtcbiAgfVxufVxuY2xhc3MgbGUgZXh0ZW5kcyBHIHtcbiAgY29uc3RydWN0b3IoZSwgdCA9IHtcbiAgICBuczogW1widHJhbnNsYXRpb25cIl0sXG4gICAgZGVmYXVsdE5TOiBcInRyYW5zbGF0aW9uXCJcbiAgfSkge1xuICAgIHN1cGVyKCksIHRoaXMuZGF0YSA9IGUgfHwge30sIHRoaXMub3B0aW9ucyA9IHQsIHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IgPT09IHZvaWQgMCAmJiAodGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9IFwiLlwiKSwgdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgPT09IHZvaWQgMCAmJiAodGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgPSAhMCk7XG4gIH1cbiAgYWRkTmFtZXNwYWNlcyhlKSB7XG4gICAgdGhpcy5vcHRpb25zLm5zLmluZGV4T2YoZSkgPCAwICYmIHRoaXMub3B0aW9ucy5ucy5wdXNoKGUpO1xuICB9XG4gIHJlbW92ZU5hbWVzcGFjZXMoZSkge1xuICAgIGNvbnN0IHQgPSB0aGlzLm9wdGlvbnMubnMuaW5kZXhPZihlKTtcbiAgICB0ID4gLTEgJiYgdGhpcy5vcHRpb25zLm5zLnNwbGljZSh0LCAxKTtcbiAgfVxuICBnZXRSZXNvdXJjZShlLCB0LCBzLCBpID0ge30pIHtcbiAgICB2YXIgdSwgYztcbiAgICBjb25zdCBuID0gaS5rZXlTZXBhcmF0b3IgIT09IHZvaWQgMCA/IGkua2V5U2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciwgciA9IGkuaWdub3JlSlNPTlN0cnVjdHVyZSAhPT0gdm9pZCAwID8gaS5pZ25vcmVKU09OU3RydWN0dXJlIDogdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmU7XG4gICAgbGV0IG87XG4gICAgZS5pbmRleE9mKFwiLlwiKSA+IC0xID8gbyA9IGUuc3BsaXQoXCIuXCIpIDogKG8gPSBbZSwgdF0sIHMgJiYgKEFycmF5LmlzQXJyYXkocykgPyBvLnB1c2goLi4ucykgOiBnKHMpICYmIG4gPyBvLnB1c2goLi4ucy5zcGxpdChuKSkgOiBvLnB1c2gocykpKTtcbiAgICBjb25zdCBsID0gXyh0aGlzLmRhdGEsIG8pO1xuICAgIHJldHVybiAhbCAmJiAhdCAmJiAhcyAmJiBlLmluZGV4T2YoXCIuXCIpID4gLTEgJiYgKGUgPSBvWzBdLCB0ID0gb1sxXSwgcyA9IG8uc2xpY2UoMikuam9pbihcIi5cIikpLCBsIHx8ICFyIHx8ICFnKHMpID8gbCA6IHEoKGMgPSAodSA9IHRoaXMuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IHVbZV0pID09IG51bGwgPyB2b2lkIDAgOiBjW3RdLCBzLCBuKTtcbiAgfVxuICBhZGRSZXNvdXJjZShlLCB0LCBzLCBpLCBuID0ge1xuICAgIHNpbGVudDogITFcbiAgfSkge1xuICAgIGNvbnN0IHIgPSBuLmtleVNlcGFyYXRvciAhPT0gdm9pZCAwID8gbi5rZXlTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgIGxldCBvID0gW2UsIHRdO1xuICAgIHMgJiYgKG8gPSBvLmNvbmNhdChyID8gcy5zcGxpdChyKSA6IHMpKSwgZS5pbmRleE9mKFwiLlwiKSA+IC0xICYmIChvID0gZS5zcGxpdChcIi5cIiksIGkgPSB0LCB0ID0gb1sxXSksIHRoaXMuYWRkTmFtZXNwYWNlcyh0KSwgb2UodGhpcy5kYXRhLCBvLCBpKSwgbi5zaWxlbnQgfHwgdGhpcy5lbWl0KFwiYWRkZWRcIiwgZSwgdCwgcywgaSk7XG4gIH1cbiAgYWRkUmVzb3VyY2VzKGUsIHQsIHMsIGkgPSB7XG4gICAgc2lsZW50OiAhMVxuICB9KSB7XG4gICAgZm9yIChjb25zdCBuIGluIHMpXG4gICAgICAoZyhzW25dKSB8fCBBcnJheS5pc0FycmF5KHNbbl0pKSAmJiB0aGlzLmFkZFJlc291cmNlKGUsIHQsIG4sIHNbbl0sIHtcbiAgICAgICAgc2lsZW50OiAhMFxuICAgICAgfSk7XG4gICAgaS5zaWxlbnQgfHwgdGhpcy5lbWl0KFwiYWRkZWRcIiwgZSwgdCwgcyk7XG4gIH1cbiAgYWRkUmVzb3VyY2VCdW5kbGUoZSwgdCwgcywgaSwgbiwgciA9IHtcbiAgICBzaWxlbnQ6ICExLFxuICAgIHNraXBDb3B5OiAhMVxuICB9KSB7XG4gICAgbGV0IG8gPSBbZSwgdF07XG4gICAgZS5pbmRleE9mKFwiLlwiKSA+IC0xICYmIChvID0gZS5zcGxpdChcIi5cIiksIGkgPSBzLCBzID0gdCwgdCA9IG9bMV0pLCB0aGlzLmFkZE5hbWVzcGFjZXModCk7XG4gICAgbGV0IGwgPSBfKHRoaXMuZGF0YSwgbykgfHwge307XG4gICAgci5za2lwQ29weSB8fCAocyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocykpKSwgaSA/IHhlKGwsIHMsIG4pIDogbCA9IHtcbiAgICAgIC4uLmwsXG4gICAgICAuLi5zXG4gICAgfSwgb2UodGhpcy5kYXRhLCBvLCBsKSwgci5zaWxlbnQgfHwgdGhpcy5lbWl0KFwiYWRkZWRcIiwgZSwgdCwgcyk7XG4gIH1cbiAgcmVtb3ZlUmVzb3VyY2VCdW5kbGUoZSwgdCkge1xuICAgIHRoaXMuaGFzUmVzb3VyY2VCdW5kbGUoZSwgdCkgJiYgZGVsZXRlIHRoaXMuZGF0YVtlXVt0XSwgdGhpcy5yZW1vdmVOYW1lc3BhY2VzKHQpLCB0aGlzLmVtaXQoXCJyZW1vdmVkXCIsIGUsIHQpO1xuICB9XG4gIGhhc1Jlc291cmNlQnVuZGxlKGUsIHQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZShlLCB0KSAhPT0gdm9pZCAwO1xuICB9XG4gIGdldFJlc291cmNlQnVuZGxlKGUsIHQpIHtcbiAgICByZXR1cm4gdCB8fCAodCA9IHRoaXMub3B0aW9ucy5kZWZhdWx0TlMpLCB0aGlzLmdldFJlc291cmNlKGUsIHQpO1xuICB9XG4gIGdldERhdGFCeUxhbmd1YWdlKGUpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2VdO1xuICB9XG4gIGhhc0xhbmd1YWdlU29tZVRyYW5zbGF0aW9ucyhlKSB7XG4gICAgY29uc3QgdCA9IHRoaXMuZ2V0RGF0YUJ5TGFuZ3VhZ2UoZSk7XG4gICAgcmV0dXJuICEhKHQgJiYgT2JqZWN0LmtleXModCkgfHwgW10pLmZpbmQoKGkpID0+IHRbaV0gJiYgT2JqZWN0LmtleXModFtpXSkubGVuZ3RoID4gMCk7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbn1cbnZhciB5ZSA9IHtcbiAgcHJvY2Vzc29yczoge30sXG4gIGFkZFBvc3RQcm9jZXNzb3IoYSkge1xuICAgIHRoaXMucHJvY2Vzc29yc1thLm5hbWVdID0gYTtcbiAgfSxcbiAgaGFuZGxlKGEsIGUsIHQsIHMsIGkpIHtcbiAgICByZXR1cm4gYS5mb3JFYWNoKChuKSA9PiB7XG4gICAgICB2YXIgcjtcbiAgICAgIGUgPSAoKHIgPSB0aGlzLnByb2Nlc3NvcnNbbl0pID09IG51bGwgPyB2b2lkIDAgOiByLnByb2Nlc3MoZSwgdCwgcywgaSkpID8/IGU7XG4gICAgfSksIGU7XG4gIH1cbn07XG5jb25zdCBTZSA9IFN5bWJvbChcImkxOG5leHQvUEFUSF9LRVlcIik7XG5mdW5jdGlvbiBJZSgpIHtcbiAgY29uc3QgYSA9IFtdLCBlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCB0O1xuICByZXR1cm4gZS5nZXQgPSAocywgaSkgPT4ge1xuICAgIHZhciBuO1xuICAgIHJldHVybiAobiA9IHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQucmV2b2tlKSA9PSBudWxsIHx8IG4uY2FsbCh0KSwgaSA9PT0gU2UgPyBhIDogKGEucHVzaChpKSwgdCA9IFByb3h5LnJldm9jYWJsZShzLCBlKSwgdC5wcm94eSk7XG4gIH0sIFByb3h5LnJldm9jYWJsZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKSwgZSkucHJveHk7XG59XG5mdW5jdGlvbiBVKGEsIGUpIHtcbiAgY29uc3Qge1xuICAgIFtTZV06IHRcbiAgfSA9IGEoSWUoKSksIHMgPSAoZSA9PSBudWxsID8gdm9pZCAwIDogZS5rZXlTZXBhcmF0b3IpID8/IFwiLlwiLCBpID0gKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUubnNTZXBhcmF0b3IpID8/IFwiOlwiO1xuICBpZiAodC5sZW5ndGggPiAxICYmIGkpIHtcbiAgICBjb25zdCBuID0gZSA9PSBudWxsID8gdm9pZCAwIDogZS5ucztcbiAgICBpZiAoKG4gPyBBcnJheS5pc0FycmF5KG4pID8gbiA6IFtuXSA6IFtdKS5pbmNsdWRlcyh0WzBdKSlcbiAgICAgIHJldHVybiBgJHt0WzBdfSR7aX0ke3Quc2xpY2UoMSkuam9pbihzKX1gO1xuICB9XG4gIHJldHVybiB0LmpvaW4ocyk7XG59XG5jb25zdCB1ZSA9IHt9LCBRID0gKGEpID0+ICFnKGEpICYmIHR5cGVvZiBhICE9IFwiYm9vbGVhblwiICYmIHR5cGVvZiBhICE9IFwibnVtYmVyXCI7XG5jbGFzcyBZIGV4dGVuZHMgRyB7XG4gIGNvbnN0cnVjdG9yKGUsIHQgPSB7fSkge1xuICAgIHN1cGVyKCksIHdlKFtcInJlc291cmNlU3RvcmVcIiwgXCJsYW5ndWFnZVV0aWxzXCIsIFwicGx1cmFsUmVzb2x2ZXJcIiwgXCJpbnRlcnBvbGF0b3JcIiwgXCJiYWNrZW5kQ29ubmVjdG9yXCIsIFwiaTE4bkZvcm1hdFwiLCBcInV0aWxzXCJdLCBlLCB0aGlzKSwgdGhpcy5vcHRpb25zID0gdCwgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9PT0gdm9pZCAwICYmICh0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yID0gXCIuXCIpLCB0aGlzLmxvZ2dlciA9IFIuY3JlYXRlKFwidHJhbnNsYXRvclwiKTtcbiAgfVxuICBjaGFuZ2VMYW5ndWFnZShlKSB7XG4gICAgZSAmJiAodGhpcy5sYW5ndWFnZSA9IGUpO1xuICB9XG4gIGV4aXN0cyhlLCB0ID0ge1xuICAgIGludGVycG9sYXRpb246IHt9XG4gIH0pIHtcbiAgICBjb25zdCBzID0ge1xuICAgICAgLi4udFxuICAgIH07XG4gICAgaWYgKGUgPT0gbnVsbCkgcmV0dXJuICExO1xuICAgIGNvbnN0IGkgPSB0aGlzLnJlc29sdmUoZSwgcyk7XG4gICAgaWYgKChpID09IG51bGwgPyB2b2lkIDAgOiBpLnJlcykgPT09IHZvaWQgMCkgcmV0dXJuICExO1xuICAgIGNvbnN0IG4gPSBRKGkucmVzKTtcbiAgICByZXR1cm4gIShzLnJldHVybk9iamVjdHMgPT09ICExICYmIG4pO1xuICB9XG4gIGV4dHJhY3RGcm9tS2V5KGUsIHQpIHtcbiAgICBsZXQgcyA9IHQubnNTZXBhcmF0b3IgIT09IHZvaWQgMCA/IHQubnNTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMubnNTZXBhcmF0b3I7XG4gICAgcyA9PT0gdm9pZCAwICYmIChzID0gXCI6XCIpO1xuICAgIGNvbnN0IGkgPSB0LmtleVNlcGFyYXRvciAhPT0gdm9pZCAwID8gdC5rZXlTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgIGxldCBuID0gdC5ucyB8fCB0aGlzLm9wdGlvbnMuZGVmYXVsdE5TIHx8IFtdO1xuICAgIGNvbnN0IHIgPSBzICYmIGUuaW5kZXhPZihzKSA+IC0xLCBvID0gIXRoaXMub3B0aW9ucy51c2VyRGVmaW5lZEtleVNlcGFyYXRvciAmJiAhdC5rZXlTZXBhcmF0b3IgJiYgIXRoaXMub3B0aW9ucy51c2VyRGVmaW5lZE5zU2VwYXJhdG9yICYmICF0Lm5zU2VwYXJhdG9yICYmICFGZShlLCBzLCBpKTtcbiAgICBpZiAociAmJiAhbykge1xuICAgICAgY29uc3QgbCA9IGUubWF0Y2godGhpcy5pbnRlcnBvbGF0b3IubmVzdGluZ1JlZ2V4cCk7XG4gICAgICBpZiAobCAmJiBsLmxlbmd0aCA+IDApXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5OiBlLFxuICAgICAgICAgIG5hbWVzcGFjZXM6IGcobikgPyBbbl0gOiBuXG4gICAgICAgIH07XG4gICAgICBjb25zdCB1ID0gZS5zcGxpdChzKTtcbiAgICAgIChzICE9PSBpIHx8IHMgPT09IGkgJiYgdGhpcy5vcHRpb25zLm5zLmluZGV4T2YodVswXSkgPiAtMSkgJiYgKG4gPSB1LnNoaWZ0KCkpLCBlID0gdS5qb2luKGkpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBlLFxuICAgICAgbmFtZXNwYWNlczogZyhuKSA/IFtuXSA6IG5cbiAgICB9O1xuICB9XG4gIHRyYW5zbGF0ZShlLCB0LCBzKSB7XG4gICAgbGV0IGkgPSB0eXBlb2YgdCA9PSBcIm9iamVjdFwiID8ge1xuICAgICAgLi4udFxuICAgIH0gOiB0O1xuICAgIGlmICh0eXBlb2YgaSAhPSBcIm9iamVjdFwiICYmIHRoaXMub3B0aW9ucy5vdmVybG9hZFRyYW5zbGF0aW9uT3B0aW9uSGFuZGxlciAmJiAoaSA9IHRoaXMub3B0aW9ucy5vdmVybG9hZFRyYW5zbGF0aW9uT3B0aW9uSGFuZGxlcihhcmd1bWVudHMpKSwgdHlwZW9mIGkgPT0gXCJvYmplY3RcIiAmJiAoaSA9IHtcbiAgICAgIC4uLmlcbiAgICB9KSwgaSB8fCAoaSA9IHt9KSwgZSA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgKGUgPSBVKGUsIHtcbiAgICAgIC4uLnRoaXMub3B0aW9ucyxcbiAgICAgIC4uLmlcbiAgICB9KSksIEFycmF5LmlzQXJyYXkoZSkgfHwgKGUgPSBbU3RyaW5nKGUpXSksIGUgPSBlLm1hcCgoTCkgPT4gdHlwZW9mIEwgPT0gXCJmdW5jdGlvblwiID8gVShMLCB7XG4gICAgICAuLi50aGlzLm9wdGlvbnMsXG4gICAgICAuLi5pXG4gICAgfSkgOiBTdHJpbmcoTCkpO1xuICAgIGNvbnN0IG4gPSBpLnJldHVybkRldGFpbHMgIT09IHZvaWQgMCA/IGkucmV0dXJuRGV0YWlscyA6IHRoaXMub3B0aW9ucy5yZXR1cm5EZXRhaWxzLCByID0gaS5rZXlTZXBhcmF0b3IgIT09IHZvaWQgMCA/IGkua2V5U2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciwge1xuICAgICAga2V5OiBvLFxuICAgICAgbmFtZXNwYWNlczogbFxuICAgIH0gPSB0aGlzLmV4dHJhY3RGcm9tS2V5KGVbZS5sZW5ndGggLSAxXSwgaSksIHUgPSBsW2wubGVuZ3RoIC0gMV07XG4gICAgbGV0IGMgPSBpLm5zU2VwYXJhdG9yICE9PSB2b2lkIDAgPyBpLm5zU2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLm5zU2VwYXJhdG9yO1xuICAgIGMgPT09IHZvaWQgMCAmJiAoYyA9IFwiOlwiKTtcbiAgICBjb25zdCBmID0gaS5sbmcgfHwgdGhpcy5sYW5ndWFnZSwgcCA9IGkuYXBwZW5kTmFtZXNwYWNlVG9DSU1vZGUgfHwgdGhpcy5vcHRpb25zLmFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlO1xuICAgIGlmICgoZiA9PSBudWxsID8gdm9pZCAwIDogZi50b0xvd2VyQ2FzZSgpKSA9PT0gXCJjaW1vZGVcIilcbiAgICAgIHJldHVybiBwID8gbiA/IHtcbiAgICAgICAgcmVzOiBgJHt1fSR7Y30ke299YCxcbiAgICAgICAgdXNlZEtleTogbyxcbiAgICAgICAgZXhhY3RVc2VkS2V5OiBvLFxuICAgICAgICB1c2VkTG5nOiBmLFxuICAgICAgICB1c2VkTlM6IHUsXG4gICAgICAgIHVzZWRQYXJhbXM6IHRoaXMuZ2V0VXNlZFBhcmFtc0RldGFpbHMoaSlcbiAgICAgIH0gOiBgJHt1fSR7Y30ke299YCA6IG4gPyB7XG4gICAgICAgIHJlczogbyxcbiAgICAgICAgdXNlZEtleTogbyxcbiAgICAgICAgZXhhY3RVc2VkS2V5OiBvLFxuICAgICAgICB1c2VkTG5nOiBmLFxuICAgICAgICB1c2VkTlM6IHUsXG4gICAgICAgIHVzZWRQYXJhbXM6IHRoaXMuZ2V0VXNlZFBhcmFtc0RldGFpbHMoaSlcbiAgICAgIH0gOiBvO1xuICAgIGNvbnN0IGQgPSB0aGlzLnJlc29sdmUoZSwgaSk7XG4gICAgbGV0IGggPSBkID09IG51bGwgPyB2b2lkIDAgOiBkLnJlcztcbiAgICBjb25zdCBtID0gKGQgPT0gbnVsbCA/IHZvaWQgMCA6IGQudXNlZEtleSkgfHwgbywgeCA9IChkID09IG51bGwgPyB2b2lkIDAgOiBkLmV4YWN0VXNlZEtleSkgfHwgbywgTyA9IFtcIltvYmplY3QgTnVtYmVyXVwiLCBcIltvYmplY3QgRnVuY3Rpb25dXCIsIFwiW29iamVjdCBSZWdFeHBdXCJdLCB2ID0gaS5qb2luQXJyYXlzICE9PSB2b2lkIDAgPyBpLmpvaW5BcnJheXMgOiB0aGlzLm9wdGlvbnMuam9pbkFycmF5cywgRiA9ICF0aGlzLmkxOG5Gb3JtYXQgfHwgdGhpcy5pMThuRm9ybWF0LmhhbmRsZUFzT2JqZWN0LCBiID0gaS5jb3VudCAhPT0gdm9pZCAwICYmICFnKGkuY291bnQpLCBOID0gWS5oYXNEZWZhdWx0VmFsdWUoaSksIHogPSBiID8gdGhpcy5wbHVyYWxSZXNvbHZlci5nZXRTdWZmaXgoZiwgaS5jb3VudCwgaSkgOiBcIlwiLCBrID0gaS5vcmRpbmFsICYmIGIgPyB0aGlzLnBsdXJhbFJlc29sdmVyLmdldFN1ZmZpeChmLCBpLmNvdW50LCB7XG4gICAgICBvcmRpbmFsOiAhMVxuICAgIH0pIDogXCJcIiwgVCA9IGIgJiYgIWkub3JkaW5hbCAmJiBpLmNvdW50ID09PSAwLCB3ID0gVCAmJiBpW2BkZWZhdWx0VmFsdWUke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9emVyb2BdIHx8IGlbYGRlZmF1bHRWYWx1ZSR7en1gXSB8fCBpW2BkZWZhdWx0VmFsdWUke2t9YF0gfHwgaS5kZWZhdWx0VmFsdWU7XG4gICAgbGV0IFMgPSBoO1xuICAgIEYgJiYgIWggJiYgTiAmJiAoUyA9IHcpO1xuICAgIGNvbnN0IGJlID0gUShTKSwgTGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KFMpO1xuICAgIGlmIChGICYmIFMgJiYgYmUgJiYgTy5pbmRleE9mKExlKSA8IDAgJiYgIShnKHYpICYmIEFycmF5LmlzQXJyYXkoUykpKSB7XG4gICAgICBpZiAoIWkucmV0dXJuT2JqZWN0cyAmJiAhdGhpcy5vcHRpb25zLnJldHVybk9iamVjdHMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnJldHVybmVkT2JqZWN0SGFuZGxlciB8fCB0aGlzLmxvZ2dlci53YXJuKFwiYWNjZXNzaW5nIGFuIG9iamVjdCAtIGJ1dCByZXR1cm5PYmplY3RzIG9wdGlvbnMgaXMgbm90IGVuYWJsZWQhXCIpO1xuICAgICAgICBjb25zdCBMID0gdGhpcy5vcHRpb25zLnJldHVybmVkT2JqZWN0SGFuZGxlciA/IHRoaXMub3B0aW9ucy5yZXR1cm5lZE9iamVjdEhhbmRsZXIobSwgUywge1xuICAgICAgICAgIC4uLmksXG4gICAgICAgICAgbnM6IGxcbiAgICAgICAgfSkgOiBga2V5ICcke299ICgke3RoaXMubGFuZ3VhZ2V9KScgcmV0dXJuZWQgYW4gb2JqZWN0IGluc3RlYWQgb2Ygc3RyaW5nLmA7XG4gICAgICAgIHJldHVybiBuID8gKGQucmVzID0gTCwgZC51c2VkUGFyYW1zID0gdGhpcy5nZXRVc2VkUGFyYW1zRGV0YWlscyhpKSwgZCkgOiBMO1xuICAgICAgfVxuICAgICAgaWYgKHIpIHtcbiAgICAgICAgY29uc3QgTCA9IEFycmF5LmlzQXJyYXkoUyksIFAgPSBMID8gW10gOiB7fSwgZWUgPSBMID8geCA6IG07XG4gICAgICAgIGZvciAoY29uc3QgJCBpbiBTKVxuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoUywgJCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBgJHtlZX0ke3J9JHskfWA7XG4gICAgICAgICAgICBOICYmICFoID8gUFskXSA9IHRoaXMudHJhbnNsYXRlKGosIHtcbiAgICAgICAgICAgICAgLi4uaSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBRKHcpID8gd1skXSA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgam9pbkFycmF5czogITEsXG4gICAgICAgICAgICAgIG5zOiBsXG4gICAgICAgICAgICB9KSA6IFBbJF0gPSB0aGlzLnRyYW5zbGF0ZShqLCB7XG4gICAgICAgICAgICAgIC4uLmksXG4gICAgICAgICAgICAgIGpvaW5BcnJheXM6ICExLFxuICAgICAgICAgICAgICBuczogbFxuICAgICAgICAgICAgfSksIFBbJF0gPT09IGogJiYgKFBbJF0gPSBTWyRdKTtcbiAgICAgICAgICB9XG4gICAgICAgIGggPSBQO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoRiAmJiBnKHYpICYmIEFycmF5LmlzQXJyYXkoaCkpXG4gICAgICBoID0gaC5qb2luKHYpLCBoICYmIChoID0gdGhpcy5leHRlbmRUcmFuc2xhdGlvbihoLCBlLCBpLCBzKSk7XG4gICAgZWxzZSB7XG4gICAgICBsZXQgTCA9ICExLCBQID0gITE7XG4gICAgICAhdGhpcy5pc1ZhbGlkTG9va3VwKGgpICYmIE4gJiYgKEwgPSAhMCwgaCA9IHcpLCB0aGlzLmlzVmFsaWRMb29rdXAoaCkgfHwgKFAgPSAhMCwgaCA9IG8pO1xuICAgICAgY29uc3QgJCA9IChpLm1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleSB8fCB0aGlzLm9wdGlvbnMubWlzc2luZ0tleU5vVmFsdWVGYWxsYmFja1RvS2V5KSAmJiBQID8gdm9pZCAwIDogaCwgaiA9IE4gJiYgdyAhPT0gaCAmJiB0aGlzLm9wdGlvbnMudXBkYXRlTWlzc2luZztcbiAgICAgIGlmIChQIHx8IEwgfHwgaikge1xuICAgICAgICBpZiAodGhpcy5sb2dnZXIubG9nKGogPyBcInVwZGF0ZUtleVwiIDogXCJtaXNzaW5nS2V5XCIsIGYsIHUsIG8sIGogPyB3IDogaCksIHIpIHtcbiAgICAgICAgICBjb25zdCBDID0gdGhpcy5yZXNvbHZlKG8sIHtcbiAgICAgICAgICAgIC4uLmksXG4gICAgICAgICAgICBrZXlTZXBhcmF0b3I6ICExXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgQyAmJiBDLnJlcyAmJiB0aGlzLmxvZ2dlci53YXJuKFwiU2VlbXMgdGhlIGxvYWRlZCB0cmFuc2xhdGlvbnMgd2VyZSBpbiBmbGF0IEpTT04gZm9ybWF0IGluc3RlYWQgb2YgbmVzdGVkLiBFaXRoZXIgc2V0IGtleVNlcGFyYXRvcjogZmFsc2Ugb24gaW5pdCBvciBtYWtlIHN1cmUgeW91ciB0cmFuc2xhdGlvbnMgYXJlIHB1Ymxpc2hlZCBpbiBuZXN0ZWQgZm9ybWF0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgViA9IFtdO1xuICAgICAgICBjb25zdCBCID0gdGhpcy5sYW5ndWFnZVV0aWxzLmdldEZhbGxiYWNrQ29kZXModGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nLCBpLmxuZyB8fCB0aGlzLmxhbmd1YWdlKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zYXZlTWlzc2luZ1RvID09PSBcImZhbGxiYWNrXCIgJiYgQiAmJiBCWzBdKVxuICAgICAgICAgIGZvciAobGV0IEMgPSAwOyBDIDwgQi5sZW5ndGg7IEMrKylcbiAgICAgICAgICAgIFYucHVzaChCW0NdKTtcbiAgICAgICAgZWxzZSB0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmdUbyA9PT0gXCJhbGxcIiA/IFYgPSB0aGlzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KGkubG5nIHx8IHRoaXMubGFuZ3VhZ2UpIDogVi5wdXNoKGkubG5nIHx8IHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICBjb25zdCB0ZSA9IChDLCBFLCBEKSA9PiB7XG4gICAgICAgICAgdmFyIHNlO1xuICAgICAgICAgIGNvbnN0IGllID0gTiAmJiBEICE9PSBoID8gRCA6ICQ7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm1pc3NpbmdLZXlIYW5kbGVyID8gdGhpcy5vcHRpb25zLm1pc3NpbmdLZXlIYW5kbGVyKEMsIHUsIEUsIGllLCBqLCBpKSA6IChzZSA9IHRoaXMuYmFja2VuZENvbm5lY3RvcikgIT0gbnVsbCAmJiBzZS5zYXZlTWlzc2luZyAmJiB0aGlzLmJhY2tlbmRDb25uZWN0b3Iuc2F2ZU1pc3NpbmcoQywgdSwgRSwgaWUsIGosIGkpLCB0aGlzLmVtaXQoXCJtaXNzaW5nS2V5XCIsIEMsIHUsIEUsIGgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmcgJiYgKHRoaXMub3B0aW9ucy5zYXZlTWlzc2luZ1BsdXJhbHMgJiYgYiA/IFYuZm9yRWFjaCgoQykgPT4ge1xuICAgICAgICAgIGNvbnN0IEUgPSB0aGlzLnBsdXJhbFJlc29sdmVyLmdldFN1ZmZpeGVzKEMsIGkpO1xuICAgICAgICAgIFQgJiYgaVtgZGVmYXVsdFZhbHVlJHt0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yfXplcm9gXSAmJiBFLmluZGV4T2YoYCR7dGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcn16ZXJvYCkgPCAwICYmIEUucHVzaChgJHt0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yfXplcm9gKSwgRS5mb3JFYWNoKChEKSA9PiB7XG4gICAgICAgICAgICB0ZShbQ10sIG8gKyBELCBpW2BkZWZhdWx0VmFsdWUke0R9YF0gfHwgdyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pIDogdGUoViwgbywgdykpO1xuICAgICAgfVxuICAgICAgaCA9IHRoaXMuZXh0ZW5kVHJhbnNsYXRpb24oaCwgZSwgaSwgZCwgcyksIFAgJiYgaCA9PT0gbyAmJiB0aGlzLm9wdGlvbnMuYXBwZW5kTmFtZXNwYWNlVG9NaXNzaW5nS2V5ICYmIChoID0gYCR7dX0ke2N9JHtvfWApLCAoUCB8fCBMKSAmJiB0aGlzLm9wdGlvbnMucGFyc2VNaXNzaW5nS2V5SGFuZGxlciAmJiAoaCA9IHRoaXMub3B0aW9ucy5wYXJzZU1pc3NpbmdLZXlIYW5kbGVyKHRoaXMub3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb01pc3NpbmdLZXkgPyBgJHt1fSR7Y30ke299YCA6IG8sIEwgPyBoIDogdm9pZCAwLCBpKSk7XG4gICAgfVxuICAgIHJldHVybiBuID8gKGQucmVzID0gaCwgZC51c2VkUGFyYW1zID0gdGhpcy5nZXRVc2VkUGFyYW1zRGV0YWlscyhpKSwgZCkgOiBoO1xuICB9XG4gIGV4dGVuZFRyYW5zbGF0aW9uKGUsIHQsIHMsIGksIG4pIHtcbiAgICB2YXIgbCwgdTtcbiAgICBpZiAoKGwgPSB0aGlzLmkxOG5Gb3JtYXQpICE9IG51bGwgJiYgbC5wYXJzZSlcbiAgICAgIGUgPSB0aGlzLmkxOG5Gb3JtYXQucGFyc2UoZSwge1xuICAgICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzLFxuICAgICAgICAuLi5zXG4gICAgICB9LCBzLmxuZyB8fCB0aGlzLmxhbmd1YWdlIHx8IGkudXNlZExuZywgaS51c2VkTlMsIGkudXNlZEtleSwge1xuICAgICAgICByZXNvbHZlZDogaVxuICAgICAgfSk7XG4gICAgZWxzZSBpZiAoIXMuc2tpcEludGVycG9sYXRpb24pIHtcbiAgICAgIHMuaW50ZXJwb2xhdGlvbiAmJiB0aGlzLmludGVycG9sYXRvci5pbml0KHtcbiAgICAgICAgLi4ucyxcbiAgICAgICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgICAgIC4uLnRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLFxuICAgICAgICAgIC4uLnMuaW50ZXJwb2xhdGlvblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGMgPSBnKGUpICYmICgoKHUgPSBzID09IG51bGwgPyB2b2lkIDAgOiBzLmludGVycG9sYXRpb24pID09IG51bGwgPyB2b2lkIDAgOiB1LnNraXBPblZhcmlhYmxlcykgIT09IHZvaWQgMCA/IHMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgOiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMpO1xuICAgICAgbGV0IGY7XG4gICAgICBpZiAoYykge1xuICAgICAgICBjb25zdCBkID0gZS5tYXRjaCh0aGlzLmludGVycG9sYXRvci5uZXN0aW5nUmVnZXhwKTtcbiAgICAgICAgZiA9IGQgJiYgZC5sZW5ndGg7XG4gICAgICB9XG4gICAgICBsZXQgcCA9IHMucmVwbGFjZSAmJiAhZyhzLnJlcGxhY2UpID8gcy5yZXBsYWNlIDogcztcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzICYmIChwID0ge1xuICAgICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzLFxuICAgICAgICAuLi5wXG4gICAgICB9KSwgZSA9IHRoaXMuaW50ZXJwb2xhdG9yLmludGVycG9sYXRlKGUsIHAsIHMubG5nIHx8IHRoaXMubGFuZ3VhZ2UgfHwgaS51c2VkTG5nLCBzKSwgYykge1xuICAgICAgICBjb25zdCBkID0gZS5tYXRjaCh0aGlzLmludGVycG9sYXRvci5uZXN0aW5nUmVnZXhwKSwgaCA9IGQgJiYgZC5sZW5ndGg7XG4gICAgICAgIGYgPCBoICYmIChzLm5lc3QgPSAhMSk7XG4gICAgICB9XG4gICAgICAhcy5sbmcgJiYgaSAmJiBpLnJlcyAmJiAocy5sbmcgPSB0aGlzLmxhbmd1YWdlIHx8IGkudXNlZExuZyksIHMubmVzdCAhPT0gITEgJiYgKGUgPSB0aGlzLmludGVycG9sYXRvci5uZXN0KGUsICguLi5kKSA9PiAobiA9PSBudWxsID8gdm9pZCAwIDogblswXSkgPT09IGRbMF0gJiYgIXMuY29udGV4dCA/ICh0aGlzLmxvZ2dlci53YXJuKGBJdCBzZWVtcyB5b3UgYXJlIG5lc3RpbmcgcmVjdXJzaXZlbHkga2V5OiAke2RbMF19IGluIGtleTogJHt0WzBdfWApLCBudWxsKSA6IHRoaXMudHJhbnNsYXRlKC4uLmQsIHQpLCBzKSksIHMuaW50ZXJwb2xhdGlvbiAmJiB0aGlzLmludGVycG9sYXRvci5yZXNldCgpO1xuICAgIH1cbiAgICBjb25zdCByID0gcy5wb3N0UHJvY2VzcyB8fCB0aGlzLm9wdGlvbnMucG9zdFByb2Nlc3MsIG8gPSBnKHIpID8gW3JdIDogcjtcbiAgICByZXR1cm4gZSAhPSBudWxsICYmIChvICE9IG51bGwgJiYgby5sZW5ndGgpICYmIHMuYXBwbHlQb3N0UHJvY2Vzc29yICE9PSAhMSAmJiAoZSA9IHllLmhhbmRsZShvLCBlLCB0LCB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnBvc3RQcm9jZXNzUGFzc1Jlc29sdmVkID8ge1xuICAgICAgaTE4blJlc29sdmVkOiB7XG4gICAgICAgIC4uLmksXG4gICAgICAgIHVzZWRQYXJhbXM6IHRoaXMuZ2V0VXNlZFBhcmFtc0RldGFpbHMocylcbiAgICAgIH0sXG4gICAgICAuLi5zXG4gICAgfSA6IHMsIHRoaXMpKSwgZTtcbiAgfVxuICByZXNvbHZlKGUsIHQgPSB7fSkge1xuICAgIGxldCBzLCBpLCBuLCByLCBvO1xuICAgIHJldHVybiBnKGUpICYmIChlID0gW2VdKSwgQXJyYXkuaXNBcnJheShlKSAmJiAoZSA9IGUubWFwKChsKSA9PiB0eXBlb2YgbCA9PSBcImZ1bmN0aW9uXCIgPyBVKGwsIHtcbiAgICAgIC4uLnRoaXMub3B0aW9ucyxcbiAgICAgIC4uLnRcbiAgICB9KSA6IGwpKSwgZS5mb3JFYWNoKChsKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkTG9va3VwKHMpKSByZXR1cm47XG4gICAgICBjb25zdCB1ID0gdGhpcy5leHRyYWN0RnJvbUtleShsLCB0KSwgYyA9IHUua2V5O1xuICAgICAgaSA9IGM7XG4gICAgICBsZXQgZiA9IHUubmFtZXNwYWNlcztcbiAgICAgIHRoaXMub3B0aW9ucy5mYWxsYmFja05TICYmIChmID0gZi5jb25jYXQodGhpcy5vcHRpb25zLmZhbGxiYWNrTlMpKTtcbiAgICAgIGNvbnN0IHAgPSB0LmNvdW50ICE9PSB2b2lkIDAgJiYgIWcodC5jb3VudCksIGQgPSBwICYmICF0Lm9yZGluYWwgJiYgdC5jb3VudCA9PT0gMCwgaCA9IHQuY29udGV4dCAhPT0gdm9pZCAwICYmIChnKHQuY29udGV4dCkgfHwgdHlwZW9mIHQuY29udGV4dCA9PSBcIm51bWJlclwiKSAmJiB0LmNvbnRleHQgIT09IFwiXCIsIG0gPSB0LmxuZ3MgPyB0LmxuZ3MgOiB0aGlzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KHQubG5nIHx8IHRoaXMubGFuZ3VhZ2UsIHQuZmFsbGJhY2tMbmcpO1xuICAgICAgZi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgIHZhciBPLCB2O1xuICAgICAgICB0aGlzLmlzVmFsaWRMb29rdXAocykgfHwgKG8gPSB4LCAhdWVbYCR7bVswXX0tJHt4fWBdICYmICgoTyA9IHRoaXMudXRpbHMpICE9IG51bGwgJiYgTy5oYXNMb2FkZWROYW1lc3BhY2UpICYmICEoKHYgPSB0aGlzLnV0aWxzKSAhPSBudWxsICYmIHYuaGFzTG9hZGVkTmFtZXNwYWNlKG8pKSAmJiAodWVbYCR7bVswXX0tJHt4fWBdID0gITAsIHRoaXMubG9nZ2VyLndhcm4oYGtleSBcIiR7aX1cIiBmb3IgbGFuZ3VhZ2VzIFwiJHttLmpvaW4oXCIsIFwiKX1cIiB3b24ndCBnZXQgcmVzb2x2ZWQgYXMgbmFtZXNwYWNlIFwiJHtvfVwiIHdhcyBub3QgeWV0IGxvYWRlZGAsIFwiVGhpcyBtZWFucyBzb21ldGhpbmcgSVMgV1JPTkcgaW4geW91ciBzZXR1cC4gWW91IGFjY2VzcyB0aGUgdCBmdW5jdGlvbiBiZWZvcmUgaTE4bmV4dC5pbml0IC8gaTE4bmV4dC5sb2FkTmFtZXNwYWNlIC8gaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZSB3YXMgZG9uZS4gV2FpdCBmb3IgdGhlIGNhbGxiYWNrIG9yIFByb21pc2UgdG8gcmVzb2x2ZSBiZWZvcmUgYWNjZXNzaW5nIGl0ISEhXCIpKSwgbS5mb3JFYWNoKChGKSA9PiB7XG4gICAgICAgICAgdmFyIHo7XG4gICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZExvb2t1cChzKSkgcmV0dXJuO1xuICAgICAgICAgIHIgPSBGO1xuICAgICAgICAgIGNvbnN0IGIgPSBbY107XG4gICAgICAgICAgaWYgKCh6ID0gdGhpcy5pMThuRm9ybWF0KSAhPSBudWxsICYmIHouYWRkTG9va3VwS2V5cylcbiAgICAgICAgICAgIHRoaXMuaTE4bkZvcm1hdC5hZGRMb29rdXBLZXlzKGIsIGMsIEYsIHgsIHQpO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGs7XG4gICAgICAgICAgICBwICYmIChrID0gdGhpcy5wbHVyYWxSZXNvbHZlci5nZXRTdWZmaXgoRiwgdC5jb3VudCwgdCkpO1xuICAgICAgICAgICAgY29uc3QgVCA9IGAke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9emVyb2AsIHcgPSBgJHt0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yfW9yZGluYWwke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9YDtcbiAgICAgICAgICAgIGlmIChwICYmICh0Lm9yZGluYWwgJiYgay5pbmRleE9mKHcpID09PSAwICYmIGIucHVzaChjICsgay5yZXBsYWNlKHcsIHRoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3IpKSwgYi5wdXNoKGMgKyBrKSwgZCAmJiBiLnB1c2goYyArIFQpKSwgaCkge1xuICAgICAgICAgICAgICBjb25zdCBTID0gYCR7Y30ke3RoaXMub3B0aW9ucy5jb250ZXh0U2VwYXJhdG9yIHx8IFwiX1wifSR7dC5jb250ZXh0fWA7XG4gICAgICAgICAgICAgIGIucHVzaChTKSwgcCAmJiAodC5vcmRpbmFsICYmIGsuaW5kZXhPZih3KSA9PT0gMCAmJiBiLnB1c2goUyArIGsucmVwbGFjZSh3LCB0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yKSksIGIucHVzaChTICsgayksIGQgJiYgYi5wdXNoKFMgKyBUKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBOO1xuICAgICAgICAgIGZvciAoOyBOID0gYi5wb3AoKTsgKVxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkTG9va3VwKHMpIHx8IChuID0gTiwgcyA9IHRoaXMuZ2V0UmVzb3VyY2UoRiwgeCwgTiwgdCkpO1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9KSwge1xuICAgICAgcmVzOiBzLFxuICAgICAgdXNlZEtleTogaSxcbiAgICAgIGV4YWN0VXNlZEtleTogbixcbiAgICAgIHVzZWRMbmc6IHIsXG4gICAgICB1c2VkTlM6IG9cbiAgICB9O1xuICB9XG4gIGlzVmFsaWRMb29rdXAoZSkge1xuICAgIHJldHVybiBlICE9PSB2b2lkIDAgJiYgISghdGhpcy5vcHRpb25zLnJldHVybk51bGwgJiYgZSA9PT0gbnVsbCkgJiYgISghdGhpcy5vcHRpb25zLnJldHVybkVtcHR5U3RyaW5nICYmIGUgPT09IFwiXCIpO1xuICB9XG4gIGdldFJlc291cmNlKGUsIHQsIHMsIGkgPSB7fSkge1xuICAgIHZhciBuO1xuICAgIHJldHVybiAobiA9IHRoaXMuaTE4bkZvcm1hdCkgIT0gbnVsbCAmJiBuLmdldFJlc291cmNlID8gdGhpcy5pMThuRm9ybWF0LmdldFJlc291cmNlKGUsIHQsIHMsIGkpIDogdGhpcy5yZXNvdXJjZVN0b3JlLmdldFJlc291cmNlKGUsIHQsIHMsIGkpO1xuICB9XG4gIGdldFVzZWRQYXJhbXNEZXRhaWxzKGUgPSB7fSkge1xuICAgIGNvbnN0IHQgPSBbXCJkZWZhdWx0VmFsdWVcIiwgXCJvcmRpbmFsXCIsIFwiY29udGV4dFwiLCBcInJlcGxhY2VcIiwgXCJsbmdcIiwgXCJsbmdzXCIsIFwiZmFsbGJhY2tMbmdcIiwgXCJuc1wiLCBcImtleVNlcGFyYXRvclwiLCBcIm5zU2VwYXJhdG9yXCIsIFwicmV0dXJuT2JqZWN0c1wiLCBcInJldHVybkRldGFpbHNcIiwgXCJqb2luQXJyYXlzXCIsIFwicG9zdFByb2Nlc3NcIiwgXCJpbnRlcnBvbGF0aW9uXCJdLCBzID0gZS5yZXBsYWNlICYmICFnKGUucmVwbGFjZSk7XG4gICAgbGV0IGkgPSBzID8gZS5yZXBsYWNlIDogZTtcbiAgICBpZiAocyAmJiB0eXBlb2YgZS5jb3VudCA8IFwidVwiICYmIChpLmNvdW50ID0gZS5jb3VudCksIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmRlZmF1bHRWYXJpYWJsZXMgJiYgKGkgPSB7XG4gICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzLFxuICAgICAgLi4uaVxuICAgIH0pLCAhcykge1xuICAgICAgaSA9IHtcbiAgICAgICAgLi4uaVxuICAgICAgfTtcbiAgICAgIGZvciAoY29uc3QgbiBvZiB0KVxuICAgICAgICBkZWxldGUgaVtuXTtcbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgc3RhdGljIGhhc0RlZmF1bHRWYWx1ZShlKSB7XG4gICAgY29uc3QgdCA9IFwiZGVmYXVsdFZhbHVlXCI7XG4gICAgZm9yIChjb25zdCBzIGluIGUpXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHMpICYmIHQgPT09IHMuc3Vic3RyaW5nKDAsIHQubGVuZ3RoKSAmJiBlW3NdICE9PSB2b2lkIDApXG4gICAgICAgIHJldHVybiAhMDtcbiAgICByZXR1cm4gITE7XG4gIH1cbn1cbmNsYXNzIGZlIHtcbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHRoaXMub3B0aW9ucyA9IGUsIHRoaXMuc3VwcG9ydGVkTG5ncyA9IHRoaXMub3B0aW9ucy5zdXBwb3J0ZWRMbmdzIHx8ICExLCB0aGlzLmxvZ2dlciA9IFIuY3JlYXRlKFwibGFuZ3VhZ2VVdGlsc1wiKTtcbiAgfVxuICBnZXRTY3JpcHRQYXJ0RnJvbUNvZGUoZSkge1xuICAgIGlmIChlID0gTShlKSwgIWUgfHwgZS5pbmRleE9mKFwiLVwiKSA8IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHQgPSBlLnNwbGl0KFwiLVwiKTtcbiAgICByZXR1cm4gdC5sZW5ndGggPT09IDIgfHwgKHQucG9wKCksIHRbdC5sZW5ndGggLSAxXS50b0xvd2VyQ2FzZSgpID09PSBcInhcIikgPyBudWxsIDogdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUodC5qb2luKFwiLVwiKSk7XG4gIH1cbiAgZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoZSkge1xuICAgIGlmIChlID0gTShlKSwgIWUgfHwgZS5pbmRleE9mKFwiLVwiKSA8IDApIHJldHVybiBlO1xuICAgIGNvbnN0IHQgPSBlLnNwbGl0KFwiLVwiKTtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUodFswXSk7XG4gIH1cbiAgZm9ybWF0TGFuZ3VhZ2VDb2RlKGUpIHtcbiAgICBpZiAoZyhlKSAmJiBlLmluZGV4T2YoXCItXCIpID4gLTEpIHtcbiAgICAgIGxldCB0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgdCA9IEludGwuZ2V0Q2Fub25pY2FsTG9jYWxlcyhlKVswXTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQgJiYgdGhpcy5vcHRpb25zLmxvd2VyQ2FzZUxuZyAmJiAodCA9IHQudG9Mb3dlckNhc2UoKSksIHQgfHwgKHRoaXMub3B0aW9ucy5sb3dlckNhc2VMbmcgPyBlLnRvTG93ZXJDYXNlKCkgOiBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jbGVhbkNvZGUgfHwgdGhpcy5vcHRpb25zLmxvd2VyQ2FzZUxuZyA/IGUudG9Mb3dlckNhc2UoKSA6IGU7XG4gIH1cbiAgaXNTdXBwb3J0ZWRDb2RlKGUpIHtcbiAgICByZXR1cm4gKHRoaXMub3B0aW9ucy5sb2FkID09PSBcImxhbmd1YWdlT25seVwiIHx8IHRoaXMub3B0aW9ucy5ub25FeHBsaWNpdFN1cHBvcnRlZExuZ3MpICYmIChlID0gdGhpcy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShlKSksICF0aGlzLnN1cHBvcnRlZExuZ3MgfHwgIXRoaXMuc3VwcG9ydGVkTG5ncy5sZW5ndGggfHwgdGhpcy5zdXBwb3J0ZWRMbmdzLmluZGV4T2YoZSkgPiAtMTtcbiAgfVxuICBnZXRCZXN0TWF0Y2hGcm9tQ29kZXMoZSkge1xuICAgIGlmICghZSkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHQ7XG4gICAgcmV0dXJuIGUuZm9yRWFjaCgocykgPT4ge1xuICAgICAgaWYgKHQpIHJldHVybjtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShzKTtcbiAgICAgICghdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MgfHwgdGhpcy5pc1N1cHBvcnRlZENvZGUoaSkpICYmICh0ID0gaSk7XG4gICAgfSksICF0ICYmIHRoaXMub3B0aW9ucy5zdXBwb3J0ZWRMbmdzICYmIGUuZm9yRWFjaCgocykgPT4ge1xuICAgICAgaWYgKHQpIHJldHVybjtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLmdldFNjcmlwdFBhcnRGcm9tQ29kZShzKTtcbiAgICAgIGlmICh0aGlzLmlzU3VwcG9ydGVkQ29kZShpKSkgcmV0dXJuIHQgPSBpO1xuICAgICAgY29uc3QgbiA9IHRoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUocyk7XG4gICAgICBpZiAodGhpcy5pc1N1cHBvcnRlZENvZGUobikpIHJldHVybiB0ID0gbjtcbiAgICAgIHQgPSB0aGlzLm9wdGlvbnMuc3VwcG9ydGVkTG5ncy5maW5kKChyKSA9PiB7XG4gICAgICAgIGlmIChyID09PSBuKSByZXR1cm4gcjtcbiAgICAgICAgaWYgKCEoci5pbmRleE9mKFwiLVwiKSA8IDAgJiYgbi5pbmRleE9mKFwiLVwiKSA8IDApICYmIChyLmluZGV4T2YoXCItXCIpID4gMCAmJiBuLmluZGV4T2YoXCItXCIpIDwgMCAmJiByLnN1YnN0cmluZygwLCByLmluZGV4T2YoXCItXCIpKSA9PT0gbiB8fCByLmluZGV4T2YobikgPT09IDAgJiYgbi5sZW5ndGggPiAxKSlcbiAgICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0pO1xuICAgIH0pLCB0IHx8ICh0ID0gdGhpcy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZylbMF0pLCB0O1xuICB9XG4gIGdldEZhbGxiYWNrQ29kZXMoZSwgdCkge1xuICAgIGlmICghZSkgcmV0dXJuIFtdO1xuICAgIGlmICh0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgKGUgPSBlKHQpKSwgZyhlKSAmJiAoZSA9IFtlXSksIEFycmF5LmlzQXJyYXkoZSkpIHJldHVybiBlO1xuICAgIGlmICghdCkgcmV0dXJuIGUuZGVmYXVsdCB8fCBbXTtcbiAgICBsZXQgcyA9IGVbdF07XG4gICAgcmV0dXJuIHMgfHwgKHMgPSBlW3RoaXMuZ2V0U2NyaXB0UGFydEZyb21Db2RlKHQpXSksIHMgfHwgKHMgPSBlW3RoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKHQpXSksIHMgfHwgKHMgPSBlW3RoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUodCldKSwgcyB8fCAocyA9IGUuZGVmYXVsdCksIHMgfHwgW107XG4gIH1cbiAgdG9SZXNvbHZlSGllcmFyY2h5KGUsIHQpIHtcbiAgICBjb25zdCBzID0gdGhpcy5nZXRGYWxsYmFja0NvZGVzKCh0ID09PSAhMSA/IFtdIDogdCkgfHwgdGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nIHx8IFtdLCBlKSwgaSA9IFtdLCBuID0gKHIpID0+IHtcbiAgICAgIHIgJiYgKHRoaXMuaXNTdXBwb3J0ZWRDb2RlKHIpID8gaS5wdXNoKHIpIDogdGhpcy5sb2dnZXIud2FybihgcmVqZWN0aW5nIGxhbmd1YWdlIGNvZGUgbm90IGZvdW5kIGluIHN1cHBvcnRlZExuZ3M6ICR7cn1gKSk7XG4gICAgfTtcbiAgICByZXR1cm4gZyhlKSAmJiAoZS5pbmRleE9mKFwiLVwiKSA+IC0xIHx8IGUuaW5kZXhPZihcIl9cIikgPiAtMSkgPyAodGhpcy5vcHRpb25zLmxvYWQgIT09IFwibGFuZ3VhZ2VPbmx5XCIgJiYgbih0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShlKSksIHRoaXMub3B0aW9ucy5sb2FkICE9PSBcImxhbmd1YWdlT25seVwiICYmIHRoaXMub3B0aW9ucy5sb2FkICE9PSBcImN1cnJlbnRPbmx5XCIgJiYgbih0aGlzLmdldFNjcmlwdFBhcnRGcm9tQ29kZShlKSksIHRoaXMub3B0aW9ucy5sb2FkICE9PSBcImN1cnJlbnRPbmx5XCIgJiYgbih0aGlzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGUpKSkgOiBnKGUpICYmIG4odGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoZSkpLCBzLmZvckVhY2goKHIpID0+IHtcbiAgICAgIGkuaW5kZXhPZihyKSA8IDAgJiYgbih0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShyKSk7XG4gICAgfSksIGk7XG4gIH1cbn1cbmNvbnN0IGNlID0ge1xuICB6ZXJvOiAwLFxuICBvbmU6IDEsXG4gIHR3bzogMixcbiAgZmV3OiAzLFxuICBtYW55OiA0LFxuICBvdGhlcjogNVxufSwgaGUgPSB7XG4gIHNlbGVjdDogKGEpID0+IGEgPT09IDEgPyBcIm9uZVwiIDogXCJvdGhlclwiLFxuICByZXNvbHZlZE9wdGlvbnM6ICgpID0+ICh7XG4gICAgcGx1cmFsQ2F0ZWdvcmllczogW1wib25lXCIsIFwib3RoZXJcIl1cbiAgfSlcbn07XG5jbGFzcyBUZSB7XG4gIGNvbnN0cnVjdG9yKGUsIHQgPSB7fSkge1xuICAgIHRoaXMubGFuZ3VhZ2VVdGlscyA9IGUsIHRoaXMub3B0aW9ucyA9IHQsIHRoaXMubG9nZ2VyID0gUi5jcmVhdGUoXCJwbHVyYWxSZXNvbHZlclwiKSwgdGhpcy5wbHVyYWxSdWxlc0NhY2hlID0ge307XG4gIH1cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICB0aGlzLnBsdXJhbFJ1bGVzQ2FjaGUgPSB7fTtcbiAgfVxuICBnZXRSdWxlKGUsIHQgPSB7fSkge1xuICAgIGNvbnN0IHMgPSBNKGUgPT09IFwiZGV2XCIgPyBcImVuXCIgOiBlKSwgaSA9IHQub3JkaW5hbCA/IFwib3JkaW5hbFwiIDogXCJjYXJkaW5hbFwiLCBuID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgY2xlYW5lZENvZGU6IHMsXG4gICAgICB0eXBlOiBpXG4gICAgfSk7XG4gICAgaWYgKG4gaW4gdGhpcy5wbHVyYWxSdWxlc0NhY2hlKVxuICAgICAgcmV0dXJuIHRoaXMucGx1cmFsUnVsZXNDYWNoZVtuXTtcbiAgICBsZXQgcjtcbiAgICB0cnkge1xuICAgICAgciA9IG5ldyBJbnRsLlBsdXJhbFJ1bGVzKHMsIHtcbiAgICAgICAgdHlwZTogaVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBpZiAodHlwZW9mIEludGwgPiBcInVcIilcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyLmVycm9yKFwiTm8gSW50bCBzdXBwb3J0LCBwbGVhc2UgdXNlIGFuIEludGwgcG9seWZpbGwhXCIpLCBoZTtcbiAgICAgIGlmICghZS5tYXRjaCgvLXxfLykpIHJldHVybiBoZTtcbiAgICAgIGNvbnN0IGwgPSB0aGlzLmxhbmd1YWdlVXRpbHMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoZSk7XG4gICAgICByID0gdGhpcy5nZXRSdWxlKGwsIHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbHVyYWxSdWxlc0NhY2hlW25dID0gciwgcjtcbiAgfVxuICBuZWVkc1BsdXJhbChlLCB0ID0ge30pIHtcbiAgICBsZXQgcyA9IHRoaXMuZ2V0UnVsZShlLCB0KTtcbiAgICByZXR1cm4gcyB8fCAocyA9IHRoaXMuZ2V0UnVsZShcImRldlwiLCB0KSksIChzID09IG51bGwgPyB2b2lkIDAgOiBzLnJlc29sdmVkT3B0aW9ucygpLnBsdXJhbENhdGVnb3JpZXMubGVuZ3RoKSA+IDE7XG4gIH1cbiAgZ2V0UGx1cmFsRm9ybXNPZktleShlLCB0LCBzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdWZmaXhlcyhlLCBzKS5tYXAoKGkpID0+IGAke3R9JHtpfWApO1xuICB9XG4gIGdldFN1ZmZpeGVzKGUsIHQgPSB7fSkge1xuICAgIGxldCBzID0gdGhpcy5nZXRSdWxlKGUsIHQpO1xuICAgIHJldHVybiBzIHx8IChzID0gdGhpcy5nZXRSdWxlKFwiZGV2XCIsIHQpKSwgcyA/IHMucmVzb2x2ZWRPcHRpb25zKCkucGx1cmFsQ2F0ZWdvcmllcy5zb3J0KChpLCBuKSA9PiBjZVtpXSAtIGNlW25dKS5tYXAoKGkpID0+IGAke3RoaXMub3B0aW9ucy5wcmVwZW5kfSR7dC5vcmRpbmFsID8gYG9yZGluYWwke3RoaXMub3B0aW9ucy5wcmVwZW5kfWAgOiBcIlwifSR7aX1gKSA6IFtdO1xuICB9XG4gIGdldFN1ZmZpeChlLCB0LCBzID0ge30pIHtcbiAgICBjb25zdCBpID0gdGhpcy5nZXRSdWxlKGUsIHMpO1xuICAgIHJldHVybiBpID8gYCR7dGhpcy5vcHRpb25zLnByZXBlbmR9JHtzLm9yZGluYWwgPyBgb3JkaW5hbCR7dGhpcy5vcHRpb25zLnByZXBlbmR9YCA6IFwiXCJ9JHtpLnNlbGVjdCh0KX1gIDogKHRoaXMubG9nZ2VyLndhcm4oYG5vIHBsdXJhbCBydWxlIGZvdW5kIGZvcjogJHtlfWApLCB0aGlzLmdldFN1ZmZpeChcImRldlwiLCB0LCBzKSk7XG4gIH1cbn1cbmNvbnN0IGRlID0gKGEsIGUsIHQsIHMgPSBcIi5cIiwgaSA9ICEwKSA9PiB7XG4gIGxldCBuID0gUGUoYSwgZSwgdCk7XG4gIHJldHVybiAhbiAmJiBpICYmIGcodCkgJiYgKG4gPSBxKGEsIHQsIHMpLCBuID09PSB2b2lkIDAgJiYgKG4gPSBxKGUsIHQsIHMpKSksIG47XG59LCBaID0gKGEpID0+IGEucmVwbGFjZSgvXFwkL2csIFwiJCQkJFwiKTtcbmNsYXNzIHBlIHtcbiAgY29uc3RydWN0b3IoZSA9IHt9KSB7XG4gICAgdmFyIHQ7XG4gICAgdGhpcy5sb2dnZXIgPSBSLmNyZWF0ZShcImludGVycG9sYXRvclwiKSwgdGhpcy5vcHRpb25zID0gZSwgdGhpcy5mb3JtYXQgPSAoKHQgPSBlID09IG51bGwgPyB2b2lkIDAgOiBlLmludGVycG9sYXRpb24pID09IG51bGwgPyB2b2lkIDAgOiB0LmZvcm1hdCkgfHwgKChzKSA9PiBzKSwgdGhpcy5pbml0KGUpO1xuICB9XG4gIGluaXQoZSA9IHt9KSB7XG4gICAgZS5pbnRlcnBvbGF0aW9uIHx8IChlLmludGVycG9sYXRpb24gPSB7XG4gICAgICBlc2NhcGVWYWx1ZTogITBcbiAgICB9KTtcbiAgICBjb25zdCB7XG4gICAgICBlc2NhcGU6IHQsXG4gICAgICBlc2NhcGVWYWx1ZTogcyxcbiAgICAgIHVzZVJhd1ZhbHVlVG9Fc2NhcGU6IGksXG4gICAgICBwcmVmaXg6IG4sXG4gICAgICBwcmVmaXhFc2NhcGVkOiByLFxuICAgICAgc3VmZml4OiBvLFxuICAgICAgc3VmZml4RXNjYXBlZDogbCxcbiAgICAgIGZvcm1hdFNlcGFyYXRvcjogdSxcbiAgICAgIHVuZXNjYXBlU3VmZml4OiBjLFxuICAgICAgdW5lc2NhcGVQcmVmaXg6IGYsXG4gICAgICBuZXN0aW5nUHJlZml4OiBwLFxuICAgICAgbmVzdGluZ1ByZWZpeEVzY2FwZWQ6IGQsXG4gICAgICBuZXN0aW5nU3VmZml4OiBoLFxuICAgICAgbmVzdGluZ1N1ZmZpeEVzY2FwZWQ6IG0sXG4gICAgICBuZXN0aW5nT3B0aW9uc1NlcGFyYXRvcjogeCxcbiAgICAgIG1heFJlcGxhY2VzOiBPLFxuICAgICAgYWx3YXlzRm9ybWF0OiB2XG4gICAgfSA9IGUuaW50ZXJwb2xhdGlvbjtcbiAgICB0aGlzLmVzY2FwZSA9IHQgIT09IHZvaWQgMCA/IHQgOiBSZSwgdGhpcy5lc2NhcGVWYWx1ZSA9IHMgIT09IHZvaWQgMCA/IHMgOiAhMCwgdGhpcy51c2VSYXdWYWx1ZVRvRXNjYXBlID0gaSAhPT0gdm9pZCAwID8gaSA6ICExLCB0aGlzLnByZWZpeCA9IG4gPyBJKG4pIDogciB8fCBcInt7XCIsIHRoaXMuc3VmZml4ID0gbyA/IEkobykgOiBsIHx8IFwifX1cIiwgdGhpcy5mb3JtYXRTZXBhcmF0b3IgPSB1IHx8IFwiLFwiLCB0aGlzLnVuZXNjYXBlUHJlZml4ID0gYyA/IFwiXCIgOiBmIHx8IFwiLVwiLCB0aGlzLnVuZXNjYXBlU3VmZml4ID0gdGhpcy51bmVzY2FwZVByZWZpeCA/IFwiXCIgOiBjIHx8IFwiXCIsIHRoaXMubmVzdGluZ1ByZWZpeCA9IHAgPyBJKHApIDogZCB8fCBJKFwiJHQoXCIpLCB0aGlzLm5lc3RpbmdTdWZmaXggPSBoID8gSShoKSA6IG0gfHwgSShcIilcIiksIHRoaXMubmVzdGluZ09wdGlvbnNTZXBhcmF0b3IgPSB4IHx8IFwiLFwiLCB0aGlzLm1heFJlcGxhY2VzID0gTyB8fCAxZTMsIHRoaXMuYWx3YXlzRm9ybWF0ID0gdiAhPT0gdm9pZCAwID8gdiA6ICExLCB0aGlzLnJlc2V0UmVnRXhwKCk7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5vcHRpb25zICYmIHRoaXMuaW5pdCh0aGlzLm9wdGlvbnMpO1xuICB9XG4gIHJlc2V0UmVnRXhwKCkge1xuICAgIGNvbnN0IGUgPSAodCwgcykgPT4gKHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQuc291cmNlKSA9PT0gcyA/ICh0Lmxhc3RJbmRleCA9IDAsIHQpIDogbmV3IFJlZ0V4cChzLCBcImdcIik7XG4gICAgdGhpcy5yZWdleHAgPSBlKHRoaXMucmVnZXhwLCBgJHt0aGlzLnByZWZpeH0oLis/KSR7dGhpcy5zdWZmaXh9YCksIHRoaXMucmVnZXhwVW5lc2NhcGUgPSBlKHRoaXMucmVnZXhwVW5lc2NhcGUsIGAke3RoaXMucHJlZml4fSR7dGhpcy51bmVzY2FwZVByZWZpeH0oLis/KSR7dGhpcy51bmVzY2FwZVN1ZmZpeH0ke3RoaXMuc3VmZml4fWApLCB0aGlzLm5lc3RpbmdSZWdleHAgPSBlKHRoaXMubmVzdGluZ1JlZ2V4cCwgYCR7dGhpcy5uZXN0aW5nUHJlZml4fSgoPzpbXigpXCInXSt8XCJbXlwiXSpcInwnW14nXSonfFxcXFwoKD86W14oKV18XCJbXlwiXSpcInwnW14nXSonKSpcXFxcKSkqPykke3RoaXMubmVzdGluZ1N1ZmZpeH1gKTtcbiAgfVxuICBpbnRlcnBvbGF0ZShlLCB0LCBzLCBpKSB7XG4gICAgdmFyIGQ7XG4gICAgbGV0IG4sIHIsIG87XG4gICAgY29uc3QgbCA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbiAmJiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzIHx8IHt9LCB1ID0gKGgpID0+IHtcbiAgICAgIGlmIChoLmluZGV4T2YodGhpcy5mb3JtYXRTZXBhcmF0b3IpIDwgMCkge1xuICAgICAgICBjb25zdCB2ID0gZGUodCwgbCwgaCwgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciwgdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5hbHdheXNGb3JtYXQgPyB0aGlzLmZvcm1hdCh2LCB2b2lkIDAsIHMsIHtcbiAgICAgICAgICAuLi5pLFxuICAgICAgICAgIC4uLnQsXG4gICAgICAgICAgaW50ZXJwb2xhdGlvbmtleTogaFxuICAgICAgICB9KSA6IHY7XG4gICAgICB9XG4gICAgICBjb25zdCBtID0gaC5zcGxpdCh0aGlzLmZvcm1hdFNlcGFyYXRvciksIHggPSBtLnNoaWZ0KCkudHJpbSgpLCBPID0gbS5qb2luKHRoaXMuZm9ybWF0U2VwYXJhdG9yKS50cmltKCk7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXQoZGUodCwgbCwgeCwgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciwgdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUpLCBPLCBzLCB7XG4gICAgICAgIC4uLmksXG4gICAgICAgIC4uLnQsXG4gICAgICAgIGludGVycG9sYXRpb25rZXk6IHhcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5yZXNldFJlZ0V4cCgpO1xuICAgIGNvbnN0IGMgPSAoaSA9PSBudWxsID8gdm9pZCAwIDogaS5taXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXIpIHx8IHRoaXMub3B0aW9ucy5taXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXIsIGYgPSAoKGQgPSBpID09IG51bGwgPyB2b2lkIDAgOiBpLmludGVycG9sYXRpb24pID09IG51bGwgPyB2b2lkIDAgOiBkLnNraXBPblZhcmlhYmxlcykgIT09IHZvaWQgMCA/IGkuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgOiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXM7XG4gICAgcmV0dXJuIFt7XG4gICAgICByZWdleDogdGhpcy5yZWdleHBVbmVzY2FwZSxcbiAgICAgIHNhZmVWYWx1ZTogKGgpID0+IFooaClcbiAgICB9LCB7XG4gICAgICByZWdleDogdGhpcy5yZWdleHAsXG4gICAgICBzYWZlVmFsdWU6IChoKSA9PiB0aGlzLmVzY2FwZVZhbHVlID8gWih0aGlzLmVzY2FwZShoKSkgOiBaKGgpXG4gICAgfV0uZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgZm9yIChvID0gMDsgbiA9IGgucmVnZXguZXhlYyhlKTsgKSB7XG4gICAgICAgIGNvbnN0IG0gPSBuWzFdLnRyaW0oKTtcbiAgICAgICAgaWYgKHIgPSB1KG0pLCByID09PSB2b2lkIDApXG4gICAgICAgICAgaWYgKHR5cGVvZiBjID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgTyA9IGMoZSwgbiwgaSk7XG4gICAgICAgICAgICByID0gZyhPKSA/IE8gOiBcIlwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaSwgbSkpXG4gICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgICBlbHNlIGlmIChmKSB7XG4gICAgICAgICAgICByID0gblswXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybihgbWlzc2VkIHRvIHBhc3MgaW4gdmFyaWFibGUgJHttfSBmb3IgaW50ZXJwb2xhdGluZyAke2V9YCksIHIgPSBcIlwiO1xuICAgICAgICBlbHNlICFnKHIpICYmICF0aGlzLnVzZVJhd1ZhbHVlVG9Fc2NhcGUgJiYgKHIgPSBuZShyKSk7XG4gICAgICAgIGNvbnN0IHggPSBoLnNhZmVWYWx1ZShyKTtcbiAgICAgICAgaWYgKGUgPSBlLnJlcGxhY2UoblswXSwgeCksIGYgPyAoaC5yZWdleC5sYXN0SW5kZXggKz0gci5sZW5ndGgsIGgucmVnZXgubGFzdEluZGV4IC09IG5bMF0ubGVuZ3RoKSA6IGgucmVnZXgubGFzdEluZGV4ID0gMCwgbysrLCBvID49IHRoaXMubWF4UmVwbGFjZXMpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSksIGU7XG4gIH1cbiAgbmVzdChlLCB0LCBzID0ge30pIHtcbiAgICBsZXQgaSwgbiwgcjtcbiAgICBjb25zdCBvID0gKGwsIHUpID0+IHtcbiAgICAgIGNvbnN0IGMgPSB0aGlzLm5lc3RpbmdPcHRpb25zU2VwYXJhdG9yO1xuICAgICAgaWYgKGwuaW5kZXhPZihjKSA8IDApIHJldHVybiBsO1xuICAgICAgY29uc3QgZiA9IGwuc3BsaXQobmV3IFJlZ0V4cChgJHtJKGMpfVsgXSp7YCkpO1xuICAgICAgbGV0IHAgPSBgeyR7ZlsxXX1gO1xuICAgICAgbCA9IGZbMF0sIHAgPSB0aGlzLmludGVycG9sYXRlKHAsIHIpO1xuICAgICAgY29uc3QgZCA9IHAubWF0Y2goLycvZyksIGggPSBwLm1hdGNoKC9cIi9nKTtcbiAgICAgICgoKGQgPT0gbnVsbCA/IHZvaWQgMCA6IGQubGVuZ3RoKSA/PyAwKSAlIDIgPT09IDAgJiYgIWggfHwgKChoID09IG51bGwgPyB2b2lkIDAgOiBoLmxlbmd0aCkgPz8gMCkgJSAyICE9PSAwKSAmJiAocCA9IHAucmVwbGFjZSgvJy9nLCAnXCInKSk7XG4gICAgICB0cnkge1xuICAgICAgICByID0gSlNPTi5wYXJzZShwKSwgdSAmJiAociA9IHtcbiAgICAgICAgICAuLi51LFxuICAgICAgICAgIC4uLnJcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlci53YXJuKGBmYWlsZWQgcGFyc2luZyBvcHRpb25zIHN0cmluZyBpbiBuZXN0aW5nIGZvciBrZXkgJHtsfWAsIG0pLCBgJHtsfSR7Y30ke3B9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByLmRlZmF1bHRWYWx1ZSAmJiByLmRlZmF1bHRWYWx1ZS5pbmRleE9mKHRoaXMucHJlZml4KSA+IC0xICYmIGRlbGV0ZSByLmRlZmF1bHRWYWx1ZSwgbDtcbiAgICB9O1xuICAgIGZvciAoOyBpID0gdGhpcy5uZXN0aW5nUmVnZXhwLmV4ZWMoZSk7ICkge1xuICAgICAgbGV0IGwgPSBbXTtcbiAgICAgIHIgPSB7XG4gICAgICAgIC4uLnNcbiAgICAgIH0sIHIgPSByLnJlcGxhY2UgJiYgIWcoci5yZXBsYWNlKSA/IHIucmVwbGFjZSA6IHIsIHIuYXBwbHlQb3N0UHJvY2Vzc29yID0gITEsIGRlbGV0ZSByLmRlZmF1bHRWYWx1ZTtcbiAgICAgIGNvbnN0IHUgPSAvey4qfS8udGVzdChpWzFdKSA/IGlbMV0ubGFzdEluZGV4T2YoXCJ9XCIpICsgMSA6IGlbMV0uaW5kZXhPZih0aGlzLmZvcm1hdFNlcGFyYXRvcik7XG4gICAgICBpZiAodSAhPT0gLTEgJiYgKGwgPSBpWzFdLnNsaWNlKHUpLnNwbGl0KHRoaXMuZm9ybWF0U2VwYXJhdG9yKS5tYXAoKGMpID0+IGMudHJpbSgpKS5maWx0ZXIoQm9vbGVhbiksIGlbMV0gPSBpWzFdLnNsaWNlKDAsIHUpKSwgbiA9IHQoby5jYWxsKHRoaXMsIGlbMV0udHJpbSgpLCByKSwgciksIG4gJiYgaVswXSA9PT0gZSAmJiAhZyhuKSkgcmV0dXJuIG47XG4gICAgICBnKG4pIHx8IChuID0gbmUobikpLCBuIHx8ICh0aGlzLmxvZ2dlci53YXJuKGBtaXNzZWQgdG8gcmVzb2x2ZSAke2lbMV19IGZvciBuZXN0aW5nICR7ZX1gKSwgbiA9IFwiXCIpLCBsLmxlbmd0aCAmJiAobiA9IGwucmVkdWNlKChjLCBmKSA9PiB0aGlzLmZvcm1hdChjLCBmLCBzLmxuZywge1xuICAgICAgICAuLi5zLFxuICAgICAgICBpbnRlcnBvbGF0aW9ua2V5OiBpWzFdLnRyaW0oKVxuICAgICAgfSksIG4udHJpbSgpKSksIGUgPSBlLnJlcGxhY2UoaVswXSwgbiksIHRoaXMucmVnZXhwLmxhc3RJbmRleCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG59XG5jb25zdCBWZSA9IChhKSA9PiB7XG4gIGxldCBlID0gYS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgY29uc3QgdCA9IHt9O1xuICBpZiAoYS5pbmRleE9mKFwiKFwiKSA+IC0xKSB7XG4gICAgY29uc3QgcyA9IGEuc3BsaXQoXCIoXCIpO1xuICAgIGUgPSBzWzBdLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgIGNvbnN0IGkgPSBzWzFdLnN1YnN0cmluZygwLCBzWzFdLmxlbmd0aCAtIDEpO1xuICAgIGUgPT09IFwiY3VycmVuY3lcIiAmJiBpLmluZGV4T2YoXCI6XCIpIDwgMCA/IHQuY3VycmVuY3kgfHwgKHQuY3VycmVuY3kgPSBpLnRyaW0oKSkgOiBlID09PSBcInJlbGF0aXZldGltZVwiICYmIGkuaW5kZXhPZihcIjpcIikgPCAwID8gdC5yYW5nZSB8fCAodC5yYW5nZSA9IGkudHJpbSgpKSA6IGkuc3BsaXQoXCI7XCIpLmZvckVhY2goKHIpID0+IHtcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIGNvbnN0IFtvLCAuLi5sXSA9IHIuc3BsaXQoXCI6XCIpLCB1ID0gbC5qb2luKFwiOlwiKS50cmltKCkucmVwbGFjZSgvXicrfCcrJC9nLCBcIlwiKSwgYyA9IG8udHJpbSgpO1xuICAgICAgICB0W2NdIHx8ICh0W2NdID0gdSksIHUgPT09IFwiZmFsc2VcIiAmJiAodFtjXSA9ICExKSwgdSA9PT0gXCJ0cnVlXCIgJiYgKHRbY10gPSAhMCksIGlzTmFOKHUpIHx8ICh0W2NdID0gcGFyc2VJbnQodSwgMTApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZvcm1hdE5hbWU6IGUsXG4gICAgZm9ybWF0T3B0aW9uczogdFxuICB9O1xufSwgZ2UgPSAoYSkgPT4ge1xuICBjb25zdCBlID0ge307XG4gIHJldHVybiAodCwgcywgaSkgPT4ge1xuICAgIGxldCBuID0gaTtcbiAgICBpICYmIGkuaW50ZXJwb2xhdGlvbmtleSAmJiBpLmZvcm1hdFBhcmFtcyAmJiBpLmZvcm1hdFBhcmFtc1tpLmludGVycG9sYXRpb25rZXldICYmIGlbaS5pbnRlcnBvbGF0aW9ua2V5XSAmJiAobiA9IHtcbiAgICAgIC4uLm4sXG4gICAgICBbaS5pbnRlcnBvbGF0aW9ua2V5XTogdm9pZCAwXG4gICAgfSk7XG4gICAgY29uc3QgciA9IHMgKyBKU09OLnN0cmluZ2lmeShuKTtcbiAgICBsZXQgbyA9IGVbcl07XG4gICAgcmV0dXJuIG8gfHwgKG8gPSBhKE0ocyksIGkpLCBlW3JdID0gbyksIG8odCk7XG4gIH07XG59LCBEZSA9IChhKSA9PiAoZSwgdCwgcykgPT4gYShNKHQpLCBzKShlKTtcbmNsYXNzIEFlIHtcbiAgY29uc3RydWN0b3IoZSA9IHt9KSB7XG4gICAgdGhpcy5sb2dnZXIgPSBSLmNyZWF0ZShcImZvcm1hdHRlclwiKSwgdGhpcy5vcHRpb25zID0gZSwgdGhpcy5pbml0KGUpO1xuICB9XG4gIGluaXQoZSwgdCA9IHtcbiAgICBpbnRlcnBvbGF0aW9uOiB7fVxuICB9KSB7XG4gICAgdGhpcy5mb3JtYXRTZXBhcmF0b3IgPSB0LmludGVycG9sYXRpb24uZm9ybWF0U2VwYXJhdG9yIHx8IFwiLFwiO1xuICAgIGNvbnN0IHMgPSB0LmNhY2hlSW5CdWlsdEZvcm1hdHMgPyBnZSA6IERlO1xuICAgIHRoaXMuZm9ybWF0cyA9IHtcbiAgICAgIG51bWJlcjogcygoaSwgbikgPT4ge1xuICAgICAgICBjb25zdCByID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGksIHtcbiAgICAgICAgICAuLi5uXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKG8pID0+IHIuZm9ybWF0KG8pO1xuICAgICAgfSksXG4gICAgICBjdXJyZW5jeTogcygoaSwgbikgPT4ge1xuICAgICAgICBjb25zdCByID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGksIHtcbiAgICAgICAgICAuLi5uLFxuICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAobykgPT4gci5mb3JtYXQobyk7XG4gICAgICB9KSxcbiAgICAgIGRhdGV0aW1lOiBzKChpLCBuKSA9PiB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChpLCB7XG4gICAgICAgICAgLi4ublxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChvKSA9PiByLmZvcm1hdChvKTtcbiAgICAgIH0pLFxuICAgICAgcmVsYXRpdmV0aW1lOiBzKChpLCBuKSA9PiB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQoaSwge1xuICAgICAgICAgIC4uLm5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAobykgPT4gci5mb3JtYXQobywgbi5yYW5nZSB8fCBcImRheVwiKTtcbiAgICAgIH0pLFxuICAgICAgbGlzdDogcygoaSwgbikgPT4ge1xuICAgICAgICBjb25zdCByID0gbmV3IEludGwuTGlzdEZvcm1hdChpLCB7XG4gICAgICAgICAgLi4ublxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChvKSA9PiByLmZvcm1hdChvKTtcbiAgICAgIH0pXG4gICAgfTtcbiAgfVxuICBhZGQoZSwgdCkge1xuICAgIHRoaXMuZm9ybWF0c1tlLnRvTG93ZXJDYXNlKCkudHJpbSgpXSA9IHQ7XG4gIH1cbiAgYWRkQ2FjaGVkKGUsIHQpIHtcbiAgICB0aGlzLmZvcm1hdHNbZS50b0xvd2VyQ2FzZSgpLnRyaW0oKV0gPSBnZSh0KTtcbiAgfVxuICBmb3JtYXQoZSwgdCwgcywgaSA9IHt9KSB7XG4gICAgY29uc3QgbiA9IHQuc3BsaXQodGhpcy5mb3JtYXRTZXBhcmF0b3IpO1xuICAgIGlmIChuLmxlbmd0aCA+IDEgJiYgblswXS5pbmRleE9mKFwiKFwiKSA+IDEgJiYgblswXS5pbmRleE9mKFwiKVwiKSA8IDAgJiYgbi5maW5kKChvKSA9PiBvLmluZGV4T2YoXCIpXCIpID4gLTEpKSB7XG4gICAgICBjb25zdCBvID0gbi5maW5kSW5kZXgoKGwpID0+IGwuaW5kZXhPZihcIilcIikgPiAtMSk7XG4gICAgICBuWzBdID0gW25bMF0sIC4uLm4uc3BsaWNlKDEsIG8pXS5qb2luKHRoaXMuZm9ybWF0U2VwYXJhdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIG4ucmVkdWNlKChvLCBsKSA9PiB7XG4gICAgICB2YXIgZjtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZm9ybWF0TmFtZTogdSxcbiAgICAgICAgZm9ybWF0T3B0aW9uczogY1xuICAgICAgfSA9IFZlKGwpO1xuICAgICAgaWYgKHRoaXMuZm9ybWF0c1t1XSkge1xuICAgICAgICBsZXQgcCA9IG87XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZCA9ICgoZiA9IGkgPT0gbnVsbCA/IHZvaWQgMCA6IGkuZm9ybWF0UGFyYW1zKSA9PSBudWxsID8gdm9pZCAwIDogZltpLmludGVycG9sYXRpb25rZXldKSB8fCB7fSwgaCA9IGQubG9jYWxlIHx8IGQubG5nIHx8IGkubG9jYWxlIHx8IGkubG5nIHx8IHM7XG4gICAgICAgICAgcCA9IHRoaXMuZm9ybWF0c1t1XShvLCBoLCB7XG4gICAgICAgICAgICAuLi5jLFxuICAgICAgICAgICAgLi4uaSxcbiAgICAgICAgICAgIC4uLmRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZCkge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9IGVsc2VcbiAgICAgICAgdGhpcy5sb2dnZXIud2FybihgdGhlcmUgd2FzIG5vIGZvcm1hdCBmdW5jdGlvbiBmb3IgJHt1fWApO1xuICAgICAgcmV0dXJuIG87XG4gICAgfSwgZSk7XG4gIH1cbn1cbmNvbnN0IEtlID0gKGEsIGUpID0+IHtcbiAgYS5wZW5kaW5nW2VdICE9PSB2b2lkIDAgJiYgKGRlbGV0ZSBhLnBlbmRpbmdbZV0sIGEucGVuZGluZ0NvdW50LS0pO1xufTtcbmNsYXNzIFVlIGV4dGVuZHMgRyB7XG4gIGNvbnN0cnVjdG9yKGUsIHQsIHMsIGkgPSB7fSkge1xuICAgIHZhciBuLCByO1xuICAgIHN1cGVyKCksIHRoaXMuYmFja2VuZCA9IGUsIHRoaXMuc3RvcmUgPSB0LCB0aGlzLnNlcnZpY2VzID0gcywgdGhpcy5sYW5ndWFnZVV0aWxzID0gcy5sYW5ndWFnZVV0aWxzLCB0aGlzLm9wdGlvbnMgPSBpLCB0aGlzLmxvZ2dlciA9IFIuY3JlYXRlKFwiYmFja2VuZENvbm5lY3RvclwiKSwgdGhpcy53YWl0aW5nUmVhZHMgPSBbXSwgdGhpcy5tYXhQYXJhbGxlbFJlYWRzID0gaS5tYXhQYXJhbGxlbFJlYWRzIHx8IDEwLCB0aGlzLnJlYWRpbmdDYWxscyA9IDAsIHRoaXMubWF4UmV0cmllcyA9IGkubWF4UmV0cmllcyA+PSAwID8gaS5tYXhSZXRyaWVzIDogNSwgdGhpcy5yZXRyeVRpbWVvdXQgPSBpLnJldHJ5VGltZW91dCA+PSAxID8gaS5yZXRyeVRpbWVvdXQgOiAzNTAsIHRoaXMuc3RhdGUgPSB7fSwgdGhpcy5xdWV1ZSA9IFtdLCAociA9IChuID0gdGhpcy5iYWNrZW5kKSA9PSBudWxsID8gdm9pZCAwIDogbi5pbml0KSA9PSBudWxsIHx8IHIuY2FsbChuLCBzLCBpLmJhY2tlbmQsIGkpO1xuICB9XG4gIHF1ZXVlTG9hZChlLCB0LCBzLCBpKSB7XG4gICAgY29uc3QgbiA9IHt9LCByID0ge30sIG8gPSB7fSwgbCA9IHt9O1xuICAgIHJldHVybiBlLmZvckVhY2goKHUpID0+IHtcbiAgICAgIGxldCBjID0gITA7XG4gICAgICB0LmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgY29uc3QgcCA9IGAke3V9fCR7Zn1gO1xuICAgICAgICAhcy5yZWxvYWQgJiYgdGhpcy5zdG9yZS5oYXNSZXNvdXJjZUJ1bmRsZSh1LCBmKSA/IHRoaXMuc3RhdGVbcF0gPSAyIDogdGhpcy5zdGF0ZVtwXSA8IDAgfHwgKHRoaXMuc3RhdGVbcF0gPT09IDEgPyByW3BdID09PSB2b2lkIDAgJiYgKHJbcF0gPSAhMCkgOiAodGhpcy5zdGF0ZVtwXSA9IDEsIGMgPSAhMSwgcltwXSA9PT0gdm9pZCAwICYmIChyW3BdID0gITApLCBuW3BdID09PSB2b2lkIDAgJiYgKG5bcF0gPSAhMCksIGxbZl0gPT09IHZvaWQgMCAmJiAobFtmXSA9ICEwKSkpO1xuICAgICAgfSksIGMgfHwgKG9bdV0gPSAhMCk7XG4gICAgfSksIChPYmplY3Qua2V5cyhuKS5sZW5ndGggfHwgT2JqZWN0LmtleXMocikubGVuZ3RoKSAmJiB0aGlzLnF1ZXVlLnB1c2goe1xuICAgICAgcGVuZGluZzogcixcbiAgICAgIHBlbmRpbmdDb3VudDogT2JqZWN0LmtleXMocikubGVuZ3RoLFxuICAgICAgbG9hZGVkOiB7fSxcbiAgICAgIGVycm9yczogW10sXG4gICAgICBjYWxsYmFjazogaVxuICAgIH0pLCB7XG4gICAgICB0b0xvYWQ6IE9iamVjdC5rZXlzKG4pLFxuICAgICAgcGVuZGluZzogT2JqZWN0LmtleXMociksXG4gICAgICB0b0xvYWRMYW5ndWFnZXM6IE9iamVjdC5rZXlzKG8pLFxuICAgICAgdG9Mb2FkTmFtZXNwYWNlczogT2JqZWN0LmtleXMobClcbiAgICB9O1xuICB9XG4gIGxvYWRlZChlLCB0LCBzKSB7XG4gICAgY29uc3QgaSA9IGUuc3BsaXQoXCJ8XCIpLCBuID0gaVswXSwgciA9IGlbMV07XG4gICAgdCAmJiB0aGlzLmVtaXQoXCJmYWlsZWRMb2FkaW5nXCIsIG4sIHIsIHQpLCAhdCAmJiBzICYmIHRoaXMuc3RvcmUuYWRkUmVzb3VyY2VCdW5kbGUobiwgciwgcywgdm9pZCAwLCB2b2lkIDAsIHtcbiAgICAgIHNraXBDb3B5OiAhMFxuICAgIH0pLCB0aGlzLnN0YXRlW2VdID0gdCA/IC0xIDogMiwgdCAmJiBzICYmICh0aGlzLnN0YXRlW2VdID0gMCk7XG4gICAgY29uc3QgbyA9IHt9O1xuICAgIHRoaXMucXVldWUuZm9yRWFjaCgobCkgPT4ge1xuICAgICAgdmUobC5sb2FkZWQsIFtuXSwgciksIEtlKGwsIGUpLCB0ICYmIGwuZXJyb3JzLnB1c2godCksIGwucGVuZGluZ0NvdW50ID09PSAwICYmICFsLmRvbmUgJiYgKE9iamVjdC5rZXlzKGwubG9hZGVkKS5mb3JFYWNoKCh1KSA9PiB7XG4gICAgICAgIG9bdV0gfHwgKG9bdV0gPSB7fSk7XG4gICAgICAgIGNvbnN0IGMgPSBsLmxvYWRlZFt1XTtcbiAgICAgICAgYy5sZW5ndGggJiYgYy5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgICAgb1t1XVtmXSA9PT0gdm9pZCAwICYmIChvW3VdW2ZdID0gITApO1xuICAgICAgICB9KTtcbiAgICAgIH0pLCBsLmRvbmUgPSAhMCwgbC5lcnJvcnMubGVuZ3RoID8gbC5jYWxsYmFjayhsLmVycm9ycykgOiBsLmNhbGxiYWNrKCkpO1xuICAgIH0pLCB0aGlzLmVtaXQoXCJsb2FkZWRcIiwgbyksIHRoaXMucXVldWUgPSB0aGlzLnF1ZXVlLmZpbHRlcigobCkgPT4gIWwuZG9uZSk7XG4gIH1cbiAgcmVhZChlLCB0LCBzLCBpID0gMCwgbiA9IHRoaXMucmV0cnlUaW1lb3V0LCByKSB7XG4gICAgaWYgKCFlLmxlbmd0aCkgcmV0dXJuIHIobnVsbCwge30pO1xuICAgIGlmICh0aGlzLnJlYWRpbmdDYWxscyA+PSB0aGlzLm1heFBhcmFsbGVsUmVhZHMpIHtcbiAgICAgIHRoaXMud2FpdGluZ1JlYWRzLnB1c2goe1xuICAgICAgICBsbmc6IGUsXG4gICAgICAgIG5zOiB0LFxuICAgICAgICBmY05hbWU6IHMsXG4gICAgICAgIHRyaWVkOiBpLFxuICAgICAgICB3YWl0OiBuLFxuICAgICAgICBjYWxsYmFjazogclxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVhZGluZ0NhbGxzKys7XG4gICAgY29uc3QgbyA9ICh1LCBjKSA9PiB7XG4gICAgICBpZiAodGhpcy5yZWFkaW5nQ2FsbHMtLSwgdGhpcy53YWl0aW5nUmVhZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmID0gdGhpcy53YWl0aW5nUmVhZHMuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5yZWFkKGYubG5nLCBmLm5zLCBmLmZjTmFtZSwgZi50cmllZCwgZi53YWl0LCBmLmNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICh1ICYmIGMgJiYgaSA8IHRoaXMubWF4UmV0cmllcykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlYWQuY2FsbCh0aGlzLCBlLCB0LCBzLCBpICsgMSwgbiAqIDIsIHIpO1xuICAgICAgICB9LCBuKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcih1LCBjKTtcbiAgICB9LCBsID0gdGhpcy5iYWNrZW5kW3NdLmJpbmQodGhpcy5iYWNrZW5kKTtcbiAgICBpZiAobC5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHUgPSBsKGUsIHQpO1xuICAgICAgICB1ICYmIHR5cGVvZiB1LnRoZW4gPT0gXCJmdW5jdGlvblwiID8gdS50aGVuKChjKSA9PiBvKG51bGwsIGMpKS5jYXRjaChvKSA6IG8obnVsbCwgdSk7XG4gICAgICB9IGNhdGNoICh1KSB7XG4gICAgICAgIG8odSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBsKGUsIHQsIG8pO1xuICB9XG4gIHByZXBhcmVMb2FkaW5nKGUsIHQsIHMgPSB7fSwgaSkge1xuICAgIGlmICghdGhpcy5iYWNrZW5kKVxuICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyLndhcm4oXCJObyBiYWNrZW5kIHdhcyBhZGRlZCB2aWEgaTE4bmV4dC51c2UuIFdpbGwgbm90IGxvYWQgcmVzb3VyY2VzLlwiKSwgaSAmJiBpKCk7XG4gICAgZyhlKSAmJiAoZSA9IHRoaXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkoZSkpLCBnKHQpICYmICh0ID0gW3RdKTtcbiAgICBjb25zdCBuID0gdGhpcy5xdWV1ZUxvYWQoZSwgdCwgcywgaSk7XG4gICAgaWYgKCFuLnRvTG9hZC5sZW5ndGgpXG4gICAgICByZXR1cm4gbi5wZW5kaW5nLmxlbmd0aCB8fCBpKCksIG51bGw7XG4gICAgbi50b0xvYWQuZm9yRWFjaCgocikgPT4ge1xuICAgICAgdGhpcy5sb2FkT25lKHIpO1xuICAgIH0pO1xuICB9XG4gIGxvYWQoZSwgdCwgcykge1xuICAgIHRoaXMucHJlcGFyZUxvYWRpbmcoZSwgdCwge30sIHMpO1xuICB9XG4gIHJlbG9hZChlLCB0LCBzKSB7XG4gICAgdGhpcy5wcmVwYXJlTG9hZGluZyhlLCB0LCB7XG4gICAgICByZWxvYWQ6ICEwXG4gICAgfSwgcyk7XG4gIH1cbiAgbG9hZE9uZShlLCB0ID0gXCJcIikge1xuICAgIGNvbnN0IHMgPSBlLnNwbGl0KFwifFwiKSwgaSA9IHNbMF0sIG4gPSBzWzFdO1xuICAgIHRoaXMucmVhZChpLCBuLCBcInJlYWRcIiwgdm9pZCAwLCB2b2lkIDAsIChyLCBvKSA9PiB7XG4gICAgICByICYmIHRoaXMubG9nZ2VyLndhcm4oYCR7dH1sb2FkaW5nIG5hbWVzcGFjZSAke259IGZvciBsYW5ndWFnZSAke2l9IGZhaWxlZGAsIHIpLCAhciAmJiBvICYmIHRoaXMubG9nZ2VyLmxvZyhgJHt0fWxvYWRlZCBuYW1lc3BhY2UgJHtufSBmb3IgbGFuZ3VhZ2UgJHtpfWAsIG8pLCB0aGlzLmxvYWRlZChlLCByLCBvKTtcbiAgICB9KTtcbiAgfVxuICBzYXZlTWlzc2luZyhlLCB0LCBzLCBpLCBuLCByID0ge30sIG8gPSAoKSA9PiB7XG4gIH0pIHtcbiAgICB2YXIgbCwgdSwgYywgZiwgcDtcbiAgICBpZiAoKHUgPSAobCA9IHRoaXMuc2VydmljZXMpID09IG51bGwgPyB2b2lkIDAgOiBsLnV0aWxzKSAhPSBudWxsICYmIHUuaGFzTG9hZGVkTmFtZXNwYWNlICYmICEoKGYgPSAoYyA9IHRoaXMuc2VydmljZXMpID09IG51bGwgPyB2b2lkIDAgOiBjLnV0aWxzKSAhPSBudWxsICYmIGYuaGFzTG9hZGVkTmFtZXNwYWNlKHQpKSkge1xuICAgICAgdGhpcy5sb2dnZXIud2FybihgZGlkIG5vdCBzYXZlIGtleSBcIiR7c31cIiBhcyB0aGUgbmFtZXNwYWNlIFwiJHt0fVwiIHdhcyBub3QgeWV0IGxvYWRlZGAsIFwiVGhpcyBtZWFucyBzb21ldGhpbmcgSVMgV1JPTkcgaW4geW91ciBzZXR1cC4gWW91IGFjY2VzcyB0aGUgdCBmdW5jdGlvbiBiZWZvcmUgaTE4bmV4dC5pbml0IC8gaTE4bmV4dC5sb2FkTmFtZXNwYWNlIC8gaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZSB3YXMgZG9uZS4gV2FpdCBmb3IgdGhlIGNhbGxiYWNrIG9yIFByb21pc2UgdG8gcmVzb2x2ZSBiZWZvcmUgYWNjZXNzaW5nIGl0ISEhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIShzID09IG51bGwgfHwgcyA9PT0gXCJcIikpIHtcbiAgICAgIGlmICgocCA9IHRoaXMuYmFja2VuZCkgIT0gbnVsbCAmJiBwLmNyZWF0ZSkge1xuICAgICAgICBjb25zdCBkID0ge1xuICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgaXNVcGRhdGU6IG5cbiAgICAgICAgfSwgaCA9IHRoaXMuYmFja2VuZC5jcmVhdGUuYmluZCh0aGlzLmJhY2tlbmQpO1xuICAgICAgICBpZiAoaC5sZW5ndGggPCA2KVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgbTtcbiAgICAgICAgICAgIGgubGVuZ3RoID09PSA1ID8gbSA9IGgoZSwgdCwgcywgaSwgZCkgOiBtID0gaChlLCB0LCBzLCBpKSwgbSAmJiB0eXBlb2YgbS50aGVuID09IFwiZnVuY3Rpb25cIiA/IG0udGhlbigoeCkgPT4gbyhudWxsLCB4KSkuY2F0Y2gobykgOiBvKG51bGwsIG0pO1xuICAgICAgICAgIH0gY2F0Y2ggKG0pIHtcbiAgICAgICAgICAgIG8obSk7XG4gICAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgaChlLCB0LCBzLCBpLCBvLCBkKTtcbiAgICAgIH1cbiAgICAgICFlIHx8ICFlWzBdIHx8IHRoaXMuc3RvcmUuYWRkUmVzb3VyY2UoZVswXSwgdCwgcywgaSk7XG4gICAgfVxuICB9XG59XG5jb25zdCBYID0gKCkgPT4gKHtcbiAgZGVidWc6ICExLFxuICBpbml0QXN5bmM6ICEwLFxuICBuczogW1widHJhbnNsYXRpb25cIl0sXG4gIGRlZmF1bHROUzogW1widHJhbnNsYXRpb25cIl0sXG4gIGZhbGxiYWNrTG5nOiBbXCJkZXZcIl0sXG4gIGZhbGxiYWNrTlM6ICExLFxuICBzdXBwb3J0ZWRMbmdzOiAhMSxcbiAgbm9uRXhwbGljaXRTdXBwb3J0ZWRMbmdzOiAhMSxcbiAgbG9hZDogXCJhbGxcIixcbiAgcHJlbG9hZDogITEsXG4gIHNpbXBsaWZ5UGx1cmFsU3VmZml4OiAhMCxcbiAga2V5U2VwYXJhdG9yOiBcIi5cIixcbiAgbnNTZXBhcmF0b3I6IFwiOlwiLFxuICBwbHVyYWxTZXBhcmF0b3I6IFwiX1wiLFxuICBjb250ZXh0U2VwYXJhdG9yOiBcIl9cIixcbiAgcGFydGlhbEJ1bmRsZWRMYW5ndWFnZXM6ICExLFxuICBzYXZlTWlzc2luZzogITEsXG4gIHVwZGF0ZU1pc3Npbmc6ICExLFxuICBzYXZlTWlzc2luZ1RvOiBcImZhbGxiYWNrXCIsXG4gIHNhdmVNaXNzaW5nUGx1cmFsczogITAsXG4gIG1pc3NpbmdLZXlIYW5kbGVyOiAhMSxcbiAgbWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyOiAhMSxcbiAgcG9zdFByb2Nlc3M6ICExLFxuICBwb3N0UHJvY2Vzc1Bhc3NSZXNvbHZlZDogITEsXG4gIHJldHVybk51bGw6ICExLFxuICByZXR1cm5FbXB0eVN0cmluZzogITAsXG4gIHJldHVybk9iamVjdHM6ICExLFxuICBqb2luQXJyYXlzOiAhMSxcbiAgcmV0dXJuZWRPYmplY3RIYW5kbGVyOiAhMSxcbiAgcGFyc2VNaXNzaW5nS2V5SGFuZGxlcjogITEsXG4gIGFwcGVuZE5hbWVzcGFjZVRvTWlzc2luZ0tleTogITEsXG4gIGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlOiAhMSxcbiAgb3ZlcmxvYWRUcmFuc2xhdGlvbk9wdGlvbkhhbmRsZXI6IChhKSA9PiB7XG4gICAgbGV0IGUgPSB7fTtcbiAgICBpZiAodHlwZW9mIGFbMV0gPT0gXCJvYmplY3RcIiAmJiAoZSA9IGFbMV0pLCBnKGFbMV0pICYmIChlLmRlZmF1bHRWYWx1ZSA9IGFbMV0pLCBnKGFbMl0pICYmIChlLnREZXNjcmlwdGlvbiA9IGFbMl0pLCB0eXBlb2YgYVsyXSA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBhWzNdID09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IHQgPSBhWzNdIHx8IGFbMl07XG4gICAgICBPYmplY3Qua2V5cyh0KS5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgIGVbc10gPSB0W3NdO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9LFxuICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgZXNjYXBlVmFsdWU6ICEwLFxuICAgIGZvcm1hdDogKGEpID0+IGEsXG4gICAgcHJlZml4OiBcInt7XCIsXG4gICAgc3VmZml4OiBcIn19XCIsXG4gICAgZm9ybWF0U2VwYXJhdG9yOiBcIixcIixcbiAgICB1bmVzY2FwZVByZWZpeDogXCItXCIsXG4gICAgbmVzdGluZ1ByZWZpeDogXCIkdChcIixcbiAgICBuZXN0aW5nU3VmZml4OiBcIilcIixcbiAgICBuZXN0aW5nT3B0aW9uc1NlcGFyYXRvcjogXCIsXCIsXG4gICAgbWF4UmVwbGFjZXM6IDFlMyxcbiAgICBza2lwT25WYXJpYWJsZXM6ICEwXG4gIH0sXG4gIGNhY2hlSW5CdWlsdEZvcm1hdHM6ICEwXG59KSwgbWUgPSAoYSkgPT4ge1xuICB2YXIgZSwgdDtcbiAgcmV0dXJuIGcoYS5ucykgJiYgKGEubnMgPSBbYS5uc10pLCBnKGEuZmFsbGJhY2tMbmcpICYmIChhLmZhbGxiYWNrTG5nID0gW2EuZmFsbGJhY2tMbmddKSwgZyhhLmZhbGxiYWNrTlMpICYmIChhLmZhbGxiYWNrTlMgPSBbYS5mYWxsYmFja05TXSksICgodCA9IChlID0gYS5zdXBwb3J0ZWRMbmdzKSA9PSBudWxsID8gdm9pZCAwIDogZS5pbmRleE9mKSA9PSBudWxsID8gdm9pZCAwIDogdC5jYWxsKGUsIFwiY2ltb2RlXCIpKSA8IDAgJiYgKGEuc3VwcG9ydGVkTG5ncyA9IGEuc3VwcG9ydGVkTG5ncy5jb25jYXQoW1wiY2ltb2RlXCJdKSksIHR5cGVvZiBhLmluaXRJbW1lZGlhdGUgPT0gXCJib29sZWFuXCIgJiYgKGEuaW5pdEFzeW5jID0gYS5pbml0SW1tZWRpYXRlKSwgYTtcbn0sIEogPSAoKSA9PiB7XG59LCBIZSA9IChhKSA9PiB7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZihhKSkuZm9yRWFjaCgodCkgPT4ge1xuICAgIHR5cGVvZiBhW3RdID09IFwiZnVuY3Rpb25cIiAmJiAoYVt0XSA9IGFbdF0uYmluZChhKSk7XG4gIH0pO1xufSwgT2UgPSBcIl9faTE4bmV4dF9zdXBwb3J0Tm90aWNlU2hvd25cIiwgTWUgPSAoKSA9PiB0eXBlb2YgZ2xvYmFsVGhpcyA8IFwidVwiICYmICEhZ2xvYmFsVGhpc1tPZV0sIHplID0gKCkgPT4ge1xuICB0eXBlb2YgZ2xvYmFsVGhpcyA8IFwidVwiICYmIChnbG9iYWxUaGlzW09lXSA9ICEwKTtcbn0sIEJlID0gKGEpID0+IHtcbiAgdmFyIGUsIHQsIHMsIGksIG4sIHIsIG8sIGwsIHUsIGMsIGYsIHAsIGQ7XG4gIHJldHVybiAhISgoKHMgPSAodCA9IChlID0gYSA9PSBudWxsID8gdm9pZCAwIDogYS5tb2R1bGVzKSA9PSBudWxsID8gdm9pZCAwIDogZS5iYWNrZW5kKSA9PSBudWxsID8gdm9pZCAwIDogdC5uYW1lKSA9PSBudWxsID8gdm9pZCAwIDogcy5pbmRleE9mKFwiTG9jaXplXCIpKSA+IDAgfHwgKChvID0gKHIgPSAobiA9IChpID0gYSA9PSBudWxsID8gdm9pZCAwIDogYS5tb2R1bGVzKSA9PSBudWxsID8gdm9pZCAwIDogaS5iYWNrZW5kKSA9PSBudWxsID8gdm9pZCAwIDogbi5jb25zdHJ1Y3RvcikgPT0gbnVsbCA/IHZvaWQgMCA6IHIubmFtZSkgPT0gbnVsbCA/IHZvaWQgMCA6IG8uaW5kZXhPZihcIkxvY2l6ZVwiKSkgPiAwIHx8ICh1ID0gKGwgPSBhID09IG51bGwgPyB2b2lkIDAgOiBhLm9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBsLmJhY2tlbmQpICE9IG51bGwgJiYgdS5iYWNrZW5kcyAmJiBhLm9wdGlvbnMuYmFja2VuZC5iYWNrZW5kcy5zb21lKChoKSA9PiB7XG4gICAgdmFyIG0sIHgsIE87XG4gICAgcmV0dXJuICgobSA9IGggPT0gbnVsbCA/IHZvaWQgMCA6IGgubmFtZSkgPT0gbnVsbCA/IHZvaWQgMCA6IG0uaW5kZXhPZihcIkxvY2l6ZVwiKSkgPiAwIHx8ICgoTyA9ICh4ID0gaCA9PSBudWxsID8gdm9pZCAwIDogaC5jb25zdHJ1Y3RvcikgPT0gbnVsbCA/IHZvaWQgMCA6IHgubmFtZSkgPT0gbnVsbCA/IHZvaWQgMCA6IE8uaW5kZXhPZihcIkxvY2l6ZVwiKSkgPiAwO1xuICB9KSB8fCAoZiA9IChjID0gYSA9PSBudWxsID8gdm9pZCAwIDogYS5vcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogYy5iYWNrZW5kKSAhPSBudWxsICYmIGYucHJvamVjdElkIHx8IChkID0gKHAgPSBhID09IG51bGwgPyB2b2lkIDAgOiBhLm9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBwLmJhY2tlbmQpICE9IG51bGwgJiYgZC5iYWNrZW5kT3B0aW9ucyAmJiBhLm9wdGlvbnMuYmFja2VuZC5iYWNrZW5kT3B0aW9ucy5zb21lKChoKSA9PiBoID09IG51bGwgPyB2b2lkIDAgOiBoLnByb2plY3RJZCkpO1xufTtcbmNsYXNzIEggZXh0ZW5kcyBHIHtcbiAgY29uc3RydWN0b3IoZSA9IHt9LCB0KSB7XG4gICAgaWYgKHN1cGVyKCksIHRoaXMub3B0aW9ucyA9IG1lKGUpLCB0aGlzLnNlcnZpY2VzID0ge30sIHRoaXMubG9nZ2VyID0gUiwgdGhpcy5tb2R1bGVzID0ge1xuICAgICAgZXh0ZXJuYWw6IFtdXG4gICAgfSwgSGUodGhpcyksIHQgJiYgIXRoaXMuaXNJbml0aWFsaXplZCAmJiAhZS5pc0Nsb25lKSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5pbml0QXN5bmMpXG4gICAgICAgIHJldHVybiB0aGlzLmluaXQoZSwgdCksIHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0KGUsIHQpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG4gIGluaXQoZSA9IHt9LCB0KSB7XG4gICAgdGhpcy5pc0luaXRpYWxpemluZyA9ICEwLCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgKHQgPSBlLCBlID0ge30pLCBlLmRlZmF1bHROUyA9PSBudWxsICYmIGUubnMgJiYgKGcoZS5ucykgPyBlLmRlZmF1bHROUyA9IGUubnMgOiBlLm5zLmluZGV4T2YoXCJ0cmFuc2xhdGlvblwiKSA8IDAgJiYgKGUuZGVmYXVsdE5TID0gZS5uc1swXSkpO1xuICAgIGNvbnN0IHMgPSBYKCk7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgLi4ucyxcbiAgICAgIC4uLnRoaXMub3B0aW9ucyxcbiAgICAgIC4uLm1lKGUpXG4gICAgfSwgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24gPSB7XG4gICAgICAuLi5zLmludGVycG9sYXRpb24sXG4gICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvblxuICAgIH0sIGUua2V5U2VwYXJhdG9yICE9PSB2b2lkIDAgJiYgKHRoaXMub3B0aW9ucy51c2VyRGVmaW5lZEtleVNlcGFyYXRvciA9IGUua2V5U2VwYXJhdG9yKSwgZS5uc1NlcGFyYXRvciAhPT0gdm9pZCAwICYmICh0aGlzLm9wdGlvbnMudXNlckRlZmluZWROc1NlcGFyYXRvciA9IGUubnNTZXBhcmF0b3IpLCB0eXBlb2YgdGhpcy5vcHRpb25zLm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyICE9IFwiZnVuY3Rpb25cIiAmJiAodGhpcy5vcHRpb25zLm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyID0gcy5vdmVybG9hZFRyYW5zbGF0aW9uT3B0aW9uSGFuZGxlciksIHRoaXMub3B0aW9ucy5zaG93U3VwcG9ydE5vdGljZSAhPT0gITEgJiYgIUJlKHRoaXMpICYmICFNZSgpICYmICh0eXBlb2YgY29uc29sZSA8IFwidVwiICYmIHR5cGVvZiBjb25zb2xlLmluZm8gPCBcInVcIiAmJiBjb25zb2xlLmluZm8oXCLwn4yQIGkxOG5leHQgaXMgbWFkZSBwb3NzaWJsZSBieSBvdXIgb3duIHByb2R1Y3QsIExvY2l6ZSDigJQgY29uc2lkZXIgcG93ZXJpbmcgeW91ciBwcm9qZWN0IHdpdGggbWFuYWdlZCBsb2NhbGl6YXRpb24gKEFJLCBDRE4sIGludGVncmF0aW9ucyk6IGh0dHBzOi8vbG9jaXplLmNvbSDwn5KZXCIpLCB6ZSgpKTtcbiAgICBjb25zdCBpID0gKHUpID0+IHUgPyB0eXBlb2YgdSA9PSBcImZ1bmN0aW9uXCIgPyBuZXcgdSgpIDogdSA6IG51bGw7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuaXNDbG9uZSkge1xuICAgICAgdGhpcy5tb2R1bGVzLmxvZ2dlciA/IFIuaW5pdChpKHRoaXMubW9kdWxlcy5sb2dnZXIpLCB0aGlzLm9wdGlvbnMpIDogUi5pbml0KG51bGwsIHRoaXMub3B0aW9ucyk7XG4gICAgICBsZXQgdTtcbiAgICAgIHRoaXMubW9kdWxlcy5mb3JtYXR0ZXIgPyB1ID0gdGhpcy5tb2R1bGVzLmZvcm1hdHRlciA6IHUgPSBBZTtcbiAgICAgIGNvbnN0IGMgPSBuZXcgZmUodGhpcy5vcHRpb25zKTtcbiAgICAgIHRoaXMuc3RvcmUgPSBuZXcgbGUodGhpcy5vcHRpb25zLnJlc291cmNlcywgdGhpcy5vcHRpb25zKTtcbiAgICAgIGNvbnN0IGYgPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgZi5sb2dnZXIgPSBSLCBmLnJlc291cmNlU3RvcmUgPSB0aGlzLnN0b3JlLCBmLmxhbmd1YWdlVXRpbHMgPSBjLCBmLnBsdXJhbFJlc29sdmVyID0gbmV3IFRlKGMsIHtcbiAgICAgICAgcHJlcGVuZDogdGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcixcbiAgICAgICAgc2ltcGxpZnlQbHVyYWxTdWZmaXg6IHRoaXMub3B0aW9ucy5zaW1wbGlmeVBsdXJhbFN1ZmZpeFxuICAgICAgfSksIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCAmJiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5mb3JtYXQgIT09IHMuaW50ZXJwb2xhdGlvbi5mb3JtYXQgJiYgdGhpcy5sb2dnZXIuZGVwcmVjYXRlKFwiaW5pdDogeW91IGFyZSBzdGlsbCB1c2luZyB0aGUgbGVnYWN5IGZvcm1hdCBmdW5jdGlvbiwgcGxlYXNlIHVzZSB0aGUgbmV3IGFwcHJvYWNoOiBodHRwczovL3d3dy5pMThuZXh0LmNvbS90cmFuc2xhdGlvbi1mdW5jdGlvbi9mb3JtYXR0aW5nXCIpLCB1ICYmICghdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0IHx8IHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCA9PT0gcy5pbnRlcnBvbGF0aW9uLmZvcm1hdCkgJiYgKGYuZm9ybWF0dGVyID0gaSh1KSwgZi5mb3JtYXR0ZXIuaW5pdCAmJiBmLmZvcm1hdHRlci5pbml0KGYsIHRoaXMub3B0aW9ucyksIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCA9IGYuZm9ybWF0dGVyLmZvcm1hdC5iaW5kKGYuZm9ybWF0dGVyKSksIGYuaW50ZXJwb2xhdG9yID0gbmV3IHBlKHRoaXMub3B0aW9ucyksIGYudXRpbHMgPSB7XG4gICAgICAgIGhhc0xvYWRlZE5hbWVzcGFjZTogdGhpcy5oYXNMb2FkZWROYW1lc3BhY2UuYmluZCh0aGlzKVxuICAgICAgfSwgZi5iYWNrZW5kQ29ubmVjdG9yID0gbmV3IFVlKGkodGhpcy5tb2R1bGVzLmJhY2tlbmQpLCBmLnJlc291cmNlU3RvcmUsIGYsIHRoaXMub3B0aW9ucyksIGYuYmFja2VuZENvbm5lY3Rvci5vbihcIipcIiwgKGQsIC4uLmgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KGQsIC4uLmgpO1xuICAgICAgfSksIHRoaXMubW9kdWxlcy5sYW5ndWFnZURldGVjdG9yICYmIChmLmxhbmd1YWdlRGV0ZWN0b3IgPSBpKHRoaXMubW9kdWxlcy5sYW5ndWFnZURldGVjdG9yKSwgZi5sYW5ndWFnZURldGVjdG9yLmluaXQgJiYgZi5sYW5ndWFnZURldGVjdG9yLmluaXQoZiwgdGhpcy5vcHRpb25zLmRldGVjdGlvbiwgdGhpcy5vcHRpb25zKSksIHRoaXMubW9kdWxlcy5pMThuRm9ybWF0ICYmIChmLmkxOG5Gb3JtYXQgPSBpKHRoaXMubW9kdWxlcy5pMThuRm9ybWF0KSwgZi5pMThuRm9ybWF0LmluaXQgJiYgZi5pMThuRm9ybWF0LmluaXQodGhpcykpLCB0aGlzLnRyYW5zbGF0b3IgPSBuZXcgWSh0aGlzLnNlcnZpY2VzLCB0aGlzLm9wdGlvbnMpLCB0aGlzLnRyYW5zbGF0b3Iub24oXCIqXCIsIChkLCAuLi5oKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdChkLCAuLi5oKTtcbiAgICAgIH0pLCB0aGlzLm1vZHVsZXMuZXh0ZXJuYWwuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICBkLmluaXQgJiYgZC5pbml0KHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm1hdCA9IHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCwgdCB8fCAodCA9IEopLCB0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcgJiYgIXRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiAhdGhpcy5vcHRpb25zLmxuZykge1xuICAgICAgY29uc3QgdSA9IHRoaXMuc2VydmljZXMubGFuZ3VhZ2VVdGlscy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZyk7XG4gICAgICB1Lmxlbmd0aCA+IDAgJiYgdVswXSAhPT0gXCJkZXZcIiAmJiAodGhpcy5vcHRpb25zLmxuZyA9IHVbMF0pO1xuICAgIH1cbiAgICAhdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yICYmICF0aGlzLm9wdGlvbnMubG5nICYmIHRoaXMubG9nZ2VyLndhcm4oXCJpbml0OiBubyBsYW5ndWFnZURldGVjdG9yIGlzIHVzZWQgYW5kIG5vIGxuZyBpcyBkZWZpbmVkXCIpLCBbXCJnZXRSZXNvdXJjZVwiLCBcImhhc1Jlc291cmNlQnVuZGxlXCIsIFwiZ2V0UmVzb3VyY2VCdW5kbGVcIiwgXCJnZXREYXRhQnlMYW5ndWFnZVwiXS5mb3JFYWNoKCh1KSA9PiB7XG4gICAgICB0aGlzW3VdID0gKC4uLmMpID0+IHRoaXMuc3RvcmVbdV0oLi4uYyk7XG4gICAgfSksIFtcImFkZFJlc291cmNlXCIsIFwiYWRkUmVzb3VyY2VzXCIsIFwiYWRkUmVzb3VyY2VCdW5kbGVcIiwgXCJyZW1vdmVSZXNvdXJjZUJ1bmRsZVwiXS5mb3JFYWNoKCh1KSA9PiB7XG4gICAgICB0aGlzW3VdID0gKC4uLmMpID0+ICh0aGlzLnN0b3JlW3VdKC4uLmMpLCB0aGlzKTtcbiAgICB9KTtcbiAgICBjb25zdCBvID0gQSgpLCBsID0gKCkgPT4ge1xuICAgICAgY29uc3QgdSA9IChjLCBmKSA9PiB7XG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXppbmcgPSAhMSwgdGhpcy5pc0luaXRpYWxpemVkICYmICF0aGlzLmluaXRpYWxpemVkU3RvcmVPbmNlICYmIHRoaXMubG9nZ2VyLndhcm4oXCJpbml0OiBpMThuZXh0IGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQuIFlvdSBzaG91bGQgY2FsbCBpbml0IGp1c3Qgb25jZSFcIiksIHRoaXMuaXNJbml0aWFsaXplZCA9ICEwLCB0aGlzLm9wdGlvbnMuaXNDbG9uZSB8fCB0aGlzLmxvZ2dlci5sb2coXCJpbml0aWFsaXplZFwiLCB0aGlzLm9wdGlvbnMpLCB0aGlzLmVtaXQoXCJpbml0aWFsaXplZFwiLCB0aGlzLm9wdGlvbnMpLCBvLnJlc29sdmUoZiksIHQoYywgZik7XG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VzICYmICF0aGlzLmlzSW5pdGlhbGl6ZWQpIHJldHVybiB1KG51bGwsIHRoaXMudC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2UodGhpcy5vcHRpb25zLmxuZywgdSk7XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlc291cmNlcyB8fCAhdGhpcy5vcHRpb25zLmluaXRBc3luYyA/IGwoKSA6IHNldFRpbWVvdXQobCwgMCksIG87XG4gIH1cbiAgbG9hZFJlc291cmNlcyhlLCB0ID0gSikge1xuICAgIHZhciBuLCByO1xuICAgIGxldCBzID0gdDtcbiAgICBjb25zdCBpID0gZyhlKSA/IGUgOiB0aGlzLmxhbmd1YWdlO1xuICAgIGlmICh0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgKHMgPSBlKSwgIXRoaXMub3B0aW9ucy5yZXNvdXJjZXMgfHwgdGhpcy5vcHRpb25zLnBhcnRpYWxCdW5kbGVkTGFuZ3VhZ2VzKSB7XG4gICAgICBpZiAoKGkgPT0gbnVsbCA/IHZvaWQgMCA6IGkudG9Mb3dlckNhc2UoKSkgPT09IFwiY2ltb2RlXCIgJiYgKCF0aGlzLm9wdGlvbnMucHJlbG9hZCB8fCB0aGlzLm9wdGlvbnMucHJlbG9hZC5sZW5ndGggPT09IDApKSByZXR1cm4gcygpO1xuICAgICAgY29uc3QgbyA9IFtdLCBsID0gKHUpID0+IHtcbiAgICAgICAgaWYgKCF1IHx8IHUgPT09IFwiY2ltb2RlXCIpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeSh1KS5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgICAgZiAhPT0gXCJjaW1vZGVcIiAmJiBvLmluZGV4T2YoZikgPCAwICYmIG8ucHVzaChmKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgaSA/IGwoaSkgOiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMuZ2V0RmFsbGJhY2tDb2Rlcyh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcpLmZvckVhY2goKGMpID0+IGwoYykpLCAociA9IChuID0gdGhpcy5vcHRpb25zLnByZWxvYWQpID09IG51bGwgPyB2b2lkIDAgOiBuLmZvckVhY2gpID09IG51bGwgfHwgci5jYWxsKG4sICh1KSA9PiBsKHUpKSwgdGhpcy5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLmxvYWQobywgdGhpcy5vcHRpb25zLm5zLCAodSkgPT4ge1xuICAgICAgICAhdSAmJiAhdGhpcy5yZXNvbHZlZExhbmd1YWdlICYmIHRoaXMubGFuZ3VhZ2UgJiYgdGhpcy5zZXRSZXNvbHZlZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpLCBzKHUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlXG4gICAgICBzKG51bGwpO1xuICB9XG4gIHJlbG9hZFJlc291cmNlcyhlLCB0LCBzKSB7XG4gICAgY29uc3QgaSA9IEEoKTtcbiAgICByZXR1cm4gdHlwZW9mIGUgPT0gXCJmdW5jdGlvblwiICYmIChzID0gZSwgZSA9IHZvaWQgMCksIHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIiAmJiAocyA9IHQsIHQgPSB2b2lkIDApLCBlIHx8IChlID0gdGhpcy5sYW5ndWFnZXMpLCB0IHx8ICh0ID0gdGhpcy5vcHRpb25zLm5zKSwgcyB8fCAocyA9IEopLCB0aGlzLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IucmVsb2FkKGUsIHQsIChuKSA9PiB7XG4gICAgICBpLnJlc29sdmUoKSwgcyhuKTtcbiAgICB9KSwgaTtcbiAgfVxuICB1c2UoZSkge1xuICAgIGlmICghZSkgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBwYXNzaW5nIGFuIHVuZGVmaW5lZCBtb2R1bGUhIFBsZWFzZSBjaGVjayB0aGUgb2JqZWN0IHlvdSBhcmUgcGFzc2luZyB0byBpMThuZXh0LnVzZSgpXCIpO1xuICAgIGlmICghZS50eXBlKSB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIHBhc3NpbmcgYSB3cm9uZyBtb2R1bGUhIFBsZWFzZSBjaGVjayB0aGUgb2JqZWN0IHlvdSBhcmUgcGFzc2luZyB0byBpMThuZXh0LnVzZSgpXCIpO1xuICAgIHJldHVybiBlLnR5cGUgPT09IFwiYmFja2VuZFwiICYmICh0aGlzLm1vZHVsZXMuYmFja2VuZCA9IGUpLCAoZS50eXBlID09PSBcImxvZ2dlclwiIHx8IGUubG9nICYmIGUud2FybiAmJiBlLmVycm9yKSAmJiAodGhpcy5tb2R1bGVzLmxvZ2dlciA9IGUpLCBlLnR5cGUgPT09IFwibGFuZ3VhZ2VEZXRlY3RvclwiICYmICh0aGlzLm1vZHVsZXMubGFuZ3VhZ2VEZXRlY3RvciA9IGUpLCBlLnR5cGUgPT09IFwiaTE4bkZvcm1hdFwiICYmICh0aGlzLm1vZHVsZXMuaTE4bkZvcm1hdCA9IGUpLCBlLnR5cGUgPT09IFwicG9zdFByb2Nlc3NvclwiICYmIHllLmFkZFBvc3RQcm9jZXNzb3IoZSksIGUudHlwZSA9PT0gXCJmb3JtYXR0ZXJcIiAmJiAodGhpcy5tb2R1bGVzLmZvcm1hdHRlciA9IGUpLCBlLnR5cGUgPT09IFwiM3JkUGFydHlcIiAmJiB0aGlzLm1vZHVsZXMuZXh0ZXJuYWwucHVzaChlKSwgdGhpcztcbiAgfVxuICBzZXRSZXNvbHZlZExhbmd1YWdlKGUpIHtcbiAgICBpZiAoISghZSB8fCAhdGhpcy5sYW5ndWFnZXMpICYmICEoW1wiY2ltb2RlXCIsIFwiZGV2XCJdLmluZGV4T2YoZSkgPiAtMSkpIHtcbiAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgdGhpcy5sYW5ndWFnZXMubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMubGFuZ3VhZ2VzW3RdO1xuICAgICAgICBpZiAoIShbXCJjaW1vZGVcIiwgXCJkZXZcIl0uaW5kZXhPZihzKSA+IC0xKSAmJiB0aGlzLnN0b3JlLmhhc0xhbmd1YWdlU29tZVRyYW5zbGF0aW9ucyhzKSkge1xuICAgICAgICAgIHRoaXMucmVzb2x2ZWRMYW5ndWFnZSA9IHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICF0aGlzLnJlc29sdmVkTGFuZ3VhZ2UgJiYgdGhpcy5sYW5ndWFnZXMuaW5kZXhPZihlKSA8IDAgJiYgdGhpcy5zdG9yZS5oYXNMYW5ndWFnZVNvbWVUcmFuc2xhdGlvbnMoZSkgJiYgKHRoaXMucmVzb2x2ZWRMYW5ndWFnZSA9IGUsIHRoaXMubGFuZ3VhZ2VzLnVuc2hpZnQoZSkpO1xuICAgIH1cbiAgfVxuICBjaGFuZ2VMYW5ndWFnZShlLCB0KSB7XG4gICAgdGhpcy5pc0xhbmd1YWdlQ2hhbmdpbmdUbyA9IGU7XG4gICAgY29uc3QgcyA9IEEoKTtcbiAgICB0aGlzLmVtaXQoXCJsYW5ndWFnZUNoYW5naW5nXCIsIGUpO1xuICAgIGNvbnN0IGkgPSAobykgPT4ge1xuICAgICAgdGhpcy5sYW5ndWFnZSA9IG8sIHRoaXMubGFuZ3VhZ2VzID0gdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeShvKSwgdGhpcy5yZXNvbHZlZExhbmd1YWdlID0gdm9pZCAwLCB0aGlzLnNldFJlc29sdmVkTGFuZ3VhZ2Uobyk7XG4gICAgfSwgbiA9IChvLCBsKSA9PiB7XG4gICAgICBsID8gdGhpcy5pc0xhbmd1YWdlQ2hhbmdpbmdUbyA9PT0gZSAmJiAoaShsKSwgdGhpcy50cmFuc2xhdG9yLmNoYW5nZUxhbmd1YWdlKGwpLCB0aGlzLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvID0gdm9pZCAwLCB0aGlzLmVtaXQoXCJsYW5ndWFnZUNoYW5nZWRcIiwgbCksIHRoaXMubG9nZ2VyLmxvZyhcImxhbmd1YWdlQ2hhbmdlZFwiLCBsKSkgOiB0aGlzLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvID0gdm9pZCAwLCBzLnJlc29sdmUoKC4uLnUpID0+IHRoaXMudCguLi51KSksIHQgJiYgdChvLCAoLi4udSkgPT4gdGhpcy50KC4uLnUpKTtcbiAgICB9LCByID0gKG8pID0+IHtcbiAgICAgIHZhciBjLCBmO1xuICAgICAgIWUgJiYgIW8gJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yICYmIChvID0gW10pO1xuICAgICAgY29uc3QgbCA9IGcobykgPyBvIDogbyAmJiBvWzBdLCB1ID0gdGhpcy5zdG9yZS5oYXNMYW5ndWFnZVNvbWVUcmFuc2xhdGlvbnMobCkgPyBsIDogdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLmdldEJlc3RNYXRjaEZyb21Db2RlcyhnKG8pID8gW29dIDogbyk7XG4gICAgICB1ICYmICh0aGlzLmxhbmd1YWdlIHx8IGkodSksIHRoaXMudHJhbnNsYXRvci5sYW5ndWFnZSB8fCB0aGlzLnRyYW5zbGF0b3IuY2hhbmdlTGFuZ3VhZ2UodSksIChmID0gKGMgPSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IpID09IG51bGwgPyB2b2lkIDAgOiBjLmNhY2hlVXNlckxhbmd1YWdlKSA9PSBudWxsIHx8IGYuY2FsbChjLCB1KSksIHRoaXMubG9hZFJlc291cmNlcyh1LCAocCkgPT4ge1xuICAgICAgICBuKHAsIHUpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gIWUgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yICYmICF0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuYXN5bmMgPyByKHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QoKSkgOiAhZSAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmFzeW5jID8gdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmRldGVjdC5sZW5ndGggPT09IDAgPyB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0KCkudGhlbihyKSA6IHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QocikgOiByKGUpLCBzO1xuICB9XG4gIGdldEZpeGVkVChlLCB0LCBzKSB7XG4gICAgY29uc3QgaSA9IChuLCByLCAuLi5vKSA9PiB7XG4gICAgICBsZXQgbDtcbiAgICAgIHR5cGVvZiByICE9IFwib2JqZWN0XCIgPyBsID0gdGhpcy5vcHRpb25zLm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyKFtuLCByXS5jb25jYXQobykpIDogbCA9IHtcbiAgICAgICAgLi4uclxuICAgICAgfSwgbC5sbmcgPSBsLmxuZyB8fCBpLmxuZywgbC5sbmdzID0gbC5sbmdzIHx8IGkubG5ncywgbC5ucyA9IGwubnMgfHwgaS5ucywgbC5rZXlQcmVmaXggIT09IFwiXCIgJiYgKGwua2V5UHJlZml4ID0gbC5rZXlQcmVmaXggfHwgcyB8fCBpLmtleVByZWZpeCk7XG4gICAgICBjb25zdCB1ID0gdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciB8fCBcIi5cIjtcbiAgICAgIGxldCBjO1xuICAgICAgcmV0dXJuIGwua2V5UHJlZml4ICYmIEFycmF5LmlzQXJyYXkobikgPyBjID0gbi5tYXAoKGYpID0+ICh0eXBlb2YgZiA9PSBcImZ1bmN0aW9uXCIgJiYgKGYgPSBVKGYsIHtcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLFxuICAgICAgICAuLi5yXG4gICAgICB9KSksIGAke2wua2V5UHJlZml4fSR7dX0ke2Z9YCkpIDogKHR5cGVvZiBuID09IFwiZnVuY3Rpb25cIiAmJiAobiA9IFUobiwge1xuICAgICAgICAuLi50aGlzLm9wdGlvbnMsXG4gICAgICAgIC4uLnJcbiAgICAgIH0pKSwgYyA9IGwua2V5UHJlZml4ID8gYCR7bC5rZXlQcmVmaXh9JHt1fSR7bn1gIDogbiksIHRoaXMudChjLCBsKTtcbiAgICB9O1xuICAgIHJldHVybiBnKGUpID8gaS5sbmcgPSBlIDogaS5sbmdzID0gZSwgaS5ucyA9IHQsIGkua2V5UHJlZml4ID0gcywgaTtcbiAgfVxuICB0KC4uLmUpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKHQgPSB0aGlzLnRyYW5zbGF0b3IpID09IG51bGwgPyB2b2lkIDAgOiB0LnRyYW5zbGF0ZSguLi5lKTtcbiAgfVxuICBleGlzdHMoLi4uZSkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAodCA9IHRoaXMudHJhbnNsYXRvcikgPT0gbnVsbCA/IHZvaWQgMCA6IHQuZXhpc3RzKC4uLmUpO1xuICB9XG4gIHNldERlZmF1bHROYW1lc3BhY2UoZSkge1xuICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0TlMgPSBlO1xuICB9XG4gIGhhc0xvYWRlZE5hbWVzcGFjZShlLCB0ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZClcbiAgICAgIHJldHVybiB0aGlzLmxvZ2dlci53YXJuKFwiaGFzTG9hZGVkTmFtZXNwYWNlOiBpMThuZXh0IHdhcyBub3QgaW5pdGlhbGl6ZWRcIiwgdGhpcy5sYW5ndWFnZXMpLCAhMTtcbiAgICBpZiAoIXRoaXMubGFuZ3VhZ2VzIHx8ICF0aGlzLmxhbmd1YWdlcy5sZW5ndGgpXG4gICAgICByZXR1cm4gdGhpcy5sb2dnZXIud2FybihcImhhc0xvYWRlZE5hbWVzcGFjZTogaTE4bi5sYW5ndWFnZXMgd2VyZSB1bmRlZmluZWQgb3IgZW1wdHlcIiwgdGhpcy5sYW5ndWFnZXMpLCAhMTtcbiAgICBjb25zdCBzID0gdC5sbmcgfHwgdGhpcy5yZXNvbHZlZExhbmd1YWdlIHx8IHRoaXMubGFuZ3VhZ2VzWzBdLCBpID0gdGhpcy5vcHRpb25zID8gdGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nIDogITEsIG4gPSB0aGlzLmxhbmd1YWdlc1t0aGlzLmxhbmd1YWdlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAocy50b0xvd2VyQ2FzZSgpID09PSBcImNpbW9kZVwiKSByZXR1cm4gITA7XG4gICAgY29uc3QgciA9IChvLCBsKSA9PiB7XG4gICAgICBjb25zdCB1ID0gdGhpcy5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLnN0YXRlW2Ake299fCR7bH1gXTtcbiAgICAgIHJldHVybiB1ID09PSAtMSB8fCB1ID09PSAwIHx8IHUgPT09IDI7XG4gICAgfTtcbiAgICBpZiAodC5wcmVjaGVjaykge1xuICAgICAgY29uc3QgbyA9IHQucHJlY2hlY2sodGhpcywgcik7XG4gICAgICBpZiAobyAhPT0gdm9pZCAwKSByZXR1cm4gbztcbiAgICB9XG4gICAgcmV0dXJuICEhKHRoaXMuaGFzUmVzb3VyY2VCdW5kbGUocywgZSkgfHwgIXRoaXMuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5iYWNrZW5kIHx8IHRoaXMub3B0aW9ucy5yZXNvdXJjZXMgJiYgIXRoaXMub3B0aW9ucy5wYXJ0aWFsQnVuZGxlZExhbmd1YWdlcyB8fCByKHMsIGUpICYmICghaSB8fCByKG4sIGUpKSk7XG4gIH1cbiAgbG9hZE5hbWVzcGFjZXMoZSwgdCkge1xuICAgIGNvbnN0IHMgPSBBKCk7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5ucyA/IChnKGUpICYmIChlID0gW2VdKSwgZS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMubnMuaW5kZXhPZihpKSA8IDAgJiYgdGhpcy5vcHRpb25zLm5zLnB1c2goaSk7XG4gICAgfSksIHRoaXMubG9hZFJlc291cmNlcygoaSkgPT4ge1xuICAgICAgcy5yZXNvbHZlKCksIHQgJiYgdChpKTtcbiAgICB9KSwgcykgOiAodCAmJiB0KCksIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgfVxuICBsb2FkTGFuZ3VhZ2VzKGUsIHQpIHtcbiAgICBjb25zdCBzID0gQSgpO1xuICAgIGcoZSkgJiYgKGUgPSBbZV0pO1xuICAgIGNvbnN0IGkgPSB0aGlzLm9wdGlvbnMucHJlbG9hZCB8fCBbXSwgbiA9IGUuZmlsdGVyKChyKSA9PiBpLmluZGV4T2YocikgPCAwICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VVdGlscy5pc1N1cHBvcnRlZENvZGUocikpO1xuICAgIHJldHVybiBuLmxlbmd0aCA/ICh0aGlzLm9wdGlvbnMucHJlbG9hZCA9IGkuY29uY2F0KG4pLCB0aGlzLmxvYWRSZXNvdXJjZXMoKHIpID0+IHtcbiAgICAgIHMucmVzb2x2ZSgpLCB0ICYmIHQocik7XG4gICAgfSksIHMpIDogKHQgJiYgdCgpLCBQcm9taXNlLnJlc29sdmUoKSk7XG4gIH1cbiAgZGlyKGUpIHtcbiAgICB2YXIgaSwgbjtcbiAgICBpZiAoZSB8fCAoZSA9IHRoaXMucmVzb2x2ZWRMYW5ndWFnZSB8fCAoKChpID0gdGhpcy5sYW5ndWFnZXMpID09IG51bGwgPyB2b2lkIDAgOiBpLmxlbmd0aCkgPiAwID8gdGhpcy5sYW5ndWFnZXNbMF0gOiB0aGlzLmxhbmd1YWdlKSksICFlKSByZXR1cm4gXCJydGxcIjtcbiAgICB0cnkge1xuICAgICAgY29uc3QgciA9IG5ldyBJbnRsLkxvY2FsZShlKTtcbiAgICAgIGlmIChyICYmIHIuZ2V0VGV4dEluZm8pIHtcbiAgICAgICAgY29uc3QgbyA9IHIuZ2V0VGV4dEluZm8oKTtcbiAgICAgICAgaWYgKG8gJiYgby5kaXJlY3Rpb24pIHJldHVybiBvLmRpcmVjdGlvbjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICB9XG4gICAgY29uc3QgdCA9IFtcImFyXCIsIFwic2h1XCIsIFwic3FyXCIsIFwic3NoXCIsIFwieGFhXCIsIFwieWhkXCIsIFwieXVkXCIsIFwiYWFvXCIsIFwiYWJoXCIsIFwiYWJ2XCIsIFwiYWNtXCIsIFwiYWNxXCIsIFwiYWN3XCIsIFwiYWN4XCIsIFwiYWN5XCIsIFwiYWRmXCIsIFwiYWRzXCIsIFwiYWViXCIsIFwiYWVjXCIsIFwiYWZiXCIsIFwiYWpwXCIsIFwiYXBjXCIsIFwiYXBkXCIsIFwiYXJiXCIsIFwiYXJxXCIsIFwiYXJzXCIsIFwiYXJ5XCIsIFwiYXJ6XCIsIFwiYXV6XCIsIFwiYXZsXCIsIFwiYXloXCIsIFwiYXlsXCIsIFwiYXluXCIsIFwiYXlwXCIsIFwiYmJ6XCIsIFwicGdhXCIsIFwiaGVcIiwgXCJpd1wiLCBcInBzXCIsIFwicGJ0XCIsIFwicGJ1XCIsIFwicHN0XCIsIFwicHJwXCIsIFwicHJkXCIsIFwidWdcIiwgXCJ1clwiLCBcInlkZFwiLCBcInlkc1wiLCBcInlpaFwiLCBcImppXCIsIFwieWlcIiwgXCJoYm9cIiwgXCJtZW5cIiwgXCJ4bW5cIiwgXCJmYVwiLCBcImpwclwiLCBcInBlb1wiLCBcInBlc1wiLCBcInByc1wiLCBcImR2XCIsIFwic2FtXCIsIFwiY2tiXCJdLCBzID0gKChuID0gdGhpcy5zZXJ2aWNlcykgPT0gbnVsbCA/IHZvaWQgMCA6IG4ubGFuZ3VhZ2VVdGlscykgfHwgbmV3IGZlKFgoKSk7XG4gICAgcmV0dXJuIGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiLWxhdG5cIikgPiAxID8gXCJsdHJcIiA6IHQuaW5kZXhPZihzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGUpKSA+IC0xIHx8IGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiLWFyYWJcIikgPiAxID8gXCJydGxcIiA6IFwibHRyXCI7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUluc3RhbmNlKGUgPSB7fSwgdCkge1xuICAgIGNvbnN0IHMgPSBuZXcgSChlLCB0KTtcbiAgICByZXR1cm4gcy5jcmVhdGVJbnN0YW5jZSA9IEguY3JlYXRlSW5zdGFuY2UsIHM7XG4gIH1cbiAgY2xvbmVJbnN0YW5jZShlID0ge30sIHQgPSBKKSB7XG4gICAgY29uc3QgcyA9IGUuZm9ya1Jlc291cmNlU3RvcmU7XG4gICAgcyAmJiBkZWxldGUgZS5mb3JrUmVzb3VyY2VTdG9yZTtcbiAgICBjb25zdCBpID0ge1xuICAgICAgLi4udGhpcy5vcHRpb25zLFxuICAgICAgLi4uZSxcbiAgICAgIGlzQ2xvbmU6ICEwXG4gICAgfSwgbiA9IG5ldyBIKGkpO1xuICAgIGlmICgoZS5kZWJ1ZyAhPT0gdm9pZCAwIHx8IGUucHJlZml4ICE9PSB2b2lkIDApICYmIChuLmxvZ2dlciA9IG4ubG9nZ2VyLmNsb25lKGUpKSwgW1wic3RvcmVcIiwgXCJzZXJ2aWNlc1wiLCBcImxhbmd1YWdlXCJdLmZvckVhY2goKG8pID0+IHtcbiAgICAgIG5bb10gPSB0aGlzW29dO1xuICAgIH0pLCBuLnNlcnZpY2VzID0ge1xuICAgICAgLi4udGhpcy5zZXJ2aWNlc1xuICAgIH0sIG4uc2VydmljZXMudXRpbHMgPSB7XG4gICAgICBoYXNMb2FkZWROYW1lc3BhY2U6IG4uaGFzTG9hZGVkTmFtZXNwYWNlLmJpbmQobilcbiAgICB9LCBzKSB7XG4gICAgICBjb25zdCBvID0gT2JqZWN0LmtleXModGhpcy5zdG9yZS5kYXRhKS5yZWR1Y2UoKGwsIHUpID0+IChsW3VdID0ge1xuICAgICAgICAuLi50aGlzLnN0b3JlLmRhdGFbdV1cbiAgICAgIH0sIGxbdV0gPSBPYmplY3Qua2V5cyhsW3VdKS5yZWR1Y2UoKGMsIGYpID0+IChjW2ZdID0ge1xuICAgICAgICAuLi5sW3VdW2ZdXG4gICAgICB9LCBjKSwgbFt1XSksIGwpLCB7fSk7XG4gICAgICBuLnN0b3JlID0gbmV3IGxlKG8sIGkpLCBuLnNlcnZpY2VzLnJlc291cmNlU3RvcmUgPSBuLnN0b3JlO1xuICAgIH1cbiAgICBpZiAoZS5pbnRlcnBvbGF0aW9uKSB7XG4gICAgICBjb25zdCBsID0ge1xuICAgICAgICAuLi5YKCkuaW50ZXJwb2xhdGlvbixcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLmludGVycG9sYXRpb24sXG4gICAgICAgIC4uLmUuaW50ZXJwb2xhdGlvblxuICAgICAgfSwgdSA9IHtcbiAgICAgICAgLi4uaSxcbiAgICAgICAgaW50ZXJwb2xhdGlvbjogbFxuICAgICAgfTtcbiAgICAgIG4uc2VydmljZXMuaW50ZXJwb2xhdG9yID0gbmV3IHBlKHUpO1xuICAgIH1cbiAgICByZXR1cm4gbi50cmFuc2xhdG9yID0gbmV3IFkobi5zZXJ2aWNlcywgaSksIG4udHJhbnNsYXRvci5vbihcIipcIiwgKG8sIC4uLmwpID0+IHtcbiAgICAgIG4uZW1pdChvLCAuLi5sKTtcbiAgICB9KSwgbi5pbml0KGksIHQpLCBuLnRyYW5zbGF0b3Iub3B0aW9ucyA9IGksIG4udHJhbnNsYXRvci5iYWNrZW5kQ29ubmVjdG9yLnNlcnZpY2VzLnV0aWxzID0ge1xuICAgICAgaGFzTG9hZGVkTmFtZXNwYWNlOiBuLmhhc0xvYWRlZE5hbWVzcGFjZS5iaW5kKG4pXG4gICAgfSwgbjtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIHN0b3JlOiB0aGlzLnN0b3JlLFxuICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2UsXG4gICAgICBsYW5ndWFnZXM6IHRoaXMubGFuZ3VhZ2VzLFxuICAgICAgcmVzb2x2ZWRMYW5ndWFnZTogdGhpcy5yZXNvbHZlZExhbmd1YWdlXG4gICAgfTtcbiAgfVxufVxuY29uc3QgeSA9IEguY3JlYXRlSW5zdGFuY2UoKTtcbnkuY3JlYXRlSW5zdGFuY2U7XG55LmRpcjtcbnkuaW5pdDtcbnkubG9hZFJlc291cmNlcztcbnkucmVsb2FkUmVzb3VyY2VzO1xueS51c2U7XG55LmNoYW5nZUxhbmd1YWdlO1xueS5nZXRGaXhlZFQ7XG55LnQ7XG55LmV4aXN0cztcbnkuc2V0RGVmYXVsdE5hbWVzcGFjZTtcbnkuaGFzTG9hZGVkTmFtZXNwYWNlO1xueS5sb2FkTmFtZXNwYWNlcztcbnkubG9hZExhbmd1YWdlcztcbmNvbnN0IF9lID0gKGEpID0+IHtcbiAgdmFyIGUsIHQ7XG4gICEoKGUgPSBhID09IG51bGwgPyB2b2lkIDAgOiBhLmkxOG4pICE9IG51bGwgJiYgZS5sYW5ndWFnZSkgfHwgISgodCA9IGEgPT0gbnVsbCA/IHZvaWQgMCA6IGEuaTE4bikgIT0gbnVsbCAmJiB0LnRyYW5zbGF0aW9ucykgfHwgeS5sYW5ndWFnZSA9PT0gYS5pMThuLmxhbmd1YWdlICYmIHkuaXNJbml0aWFsaXplZCB8fCB5LmluaXQoe1xuICAgIGxuZzogYS5pMThuLmxhbmd1YWdlLFxuICAgIGZhbGxiYWNrTG5nOiBcImVuXCIsXG4gICAgcmVzb3VyY2VzOiBhLmkxOG4udHJhbnNsYXRpb25zLFxuICAgIGludGVycG9sYXRpb246IHtcbiAgICAgIGVzY2FwZVZhbHVlOiAhMVxuICAgIH1cbiAgfSk7XG59LCBKZSA9IChhLCBlKSA9PiB7XG4gIGlmICghYSB8fCAhYS5pbmNsdWRlcyhcInxcIikpIHJldHVybiB5LnQoYSwgZSk7XG4gIGNvbnN0IFt0LCBzXSA9IGEuc3BsaXQoXCJ8XCIsIDIpLm1hcCgoaSkgPT4gaS50cmltKCkpO1xuICByZXR1cm4geS50KFxuICAgIFt0LCBzXS5maWx0ZXIoKGkpID0+ICEhaSksXG4gICAgZVxuICApO1xufSwgV2UgPSAoYSkgPT4ge1xuICBjb25zdCBlID0ge307XG4gIHJldHVybiBPYmplY3Qua2V5cyhhKS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgY29uc3QgcyA9IGFbdF07XG4gICAgZVt0XSA9IHR5cGVvZiBzID09IFwic3RyaW5nXCIgPyBKZShzKSA6IHM7XG4gIH0pLCBlO1xufTtcbmV4cG9ydCB7XG4gIF9lIGFzIGEsXG4gIEplIGFzIGIsXG4gIHkgYXMgaSxcbiAgV2UgYXMgclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC51dGlscy1DYm53YVNpMS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLElBQUksQ0FBQyxNQUFNLE9BQU8sS0FBSyxVQUFVLElBQUksTUFBTTtBQUMvQyxNQUFJLEdBQUc7QUFDUCxRQUFNLElBQUksSUFBSSxRQUFRLENBQUMsR0FBRyxNQUFNO0FBQzlCLFFBQUksR0FBRyxJQUFJO0FBQUEsRUFDYixDQUFDO0FBQ0QsU0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFLFNBQVMsR0FBRztBQUN0QyxHQUFHLEtBQUssQ0FBQyxNQUFNLEtB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LG1CQUFtQixLQUFLLENBQUM7QUFBQSxJQUNyRCxHQUFPO0FBQUEsRUFDTDtBQUFBLEVBQ0EsU0FBUztBQUNQLFdBQU87QUFBQSxNQUNMLFNBQVMsS0FBSztBQUFBLE1BQ2QsT0FBTyxLQUFLO0FBQUEsTUFDWixVQUFVLEtBQUs7QUFBQSxNQUNmLFdBQVcsS0FBSztBQUFBLE1BQ2hCLGtCQUFrQixLQUFLO0FBQUEsSUFDN0I7QUFBQSxFQUNFO0FBQ0Y7QUFDSyxNQUFDLElBQUksRUFBRSxlQUFjO0FBQzFCLEVBQUU7QUFDRixFQUFFO0FBQ0YsRUFBRTtBQUNGLEVBQUU7QUFDRixFQUFFO0FBQ0YsRUFBRTtBQUNGLEVBQUU7QUFDRixFQUFFO0FBQ0YsRUFBRTtBQUNGLEVBQUU7QUFDRixFQUFFO0FBQ0YsRUFBRTtBQUNGLEVBQUU7QUFDRixFQUFFO0FBQ0csTUFBQyxLQUFLLENBQUMsTUFBTTtBQUNoQixNQUFJLEdBQUc7QUFDUCxLQUFHLElBQUksS0FBSyxPQUFPLFNBQVMsRUFBRSxTQUFTLFFBQVEsRUFBRSxhQUFhLEdBQUcsSUFBSSxLQUFLLE9BQU8sU0FBUyxFQUFFLFNBQVMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxLQUFLLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxLQUFLO0FBQUEsSUFDMUwsS0FBSyxFQUFFLEtBQUs7QUFBQSxJQUNaLGFBQWE7QUFBQSxJQUNiLFdBQVcsRUFBRSxLQUFLO0FBQUEsSUFDbEIsZUFBZTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ25CO0FBQUEsRUFDQSxDQUFHO0FBQ0gsR0FBRyxLQUFLLENBQUMsR0FBRyxNQUFNO0FBQ2hCLE1BQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLEdBQUcsRUFBRyxRQUFPLEVBQUUsRUFBRSxHQUFHLENBQUM7QUFDM0MsUUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBRTtBQUNsRCxTQUFPLEVBQUU7QUFBQSxJQUNQLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFBQSxJQUN4QjtBQUFBLEVBQ0o7QUFDQSxHQUFHLEtBQUssQ0FBQyxNQUFNO0FBQ2IsUUFBTSxJQUFJLENBQUE7QUFDVixTQUFPLE9BQU8sS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU07QUFDbkMsVUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLE1BQUUsQ0FBQyxJQUFJLE9BQU8sS0FBSyxXQUFXLEdBQUcsQ0FBQyxJQUFJO0FBQUEsRUFDeEMsQ0FBQyxHQUFHO0FBQ047IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
