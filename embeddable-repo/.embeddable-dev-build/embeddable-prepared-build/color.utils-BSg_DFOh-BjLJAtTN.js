const { min: ze, max: Ge } = Math, J = (t, e = 0, n = 1) => ze(Ge(e, t), n), Yt = (t) => {
  t._clipped = false, t._unclipped = t.slice(0);
  for (let e = 0; e <= 3; e++)
    e < 3 ? ((t[e] < 0 || t[e] > 255) && (t._clipped = true), t[e] = J(t[e], 0, 255)) : e === 3 && (t[e] = J(t[e], 0, 1));
  return t;
}, re = {};
for (let t of [
  "Boolean",
  "Number",
  "String",
  "Function",
  "Array",
  "Date",
  "RegExp",
  "Undefined",
  "Null"
])
  re[`[object ${t}]`] = t.toLowerCase();
function L(t) {
  return re[Object.prototype.toString.call(t)] || "object";
}
const $ = (t, e = null) => t.length >= 3 ? Array.prototype.slice.call(t) : L(t[0]) == "object" && e ? e.split("").filter((n) => t[0][n] !== void 0).map((n) => t[0][n]) : t[0].slice(0), ot = (t) => {
  if (t.length < 2) return null;
  const e = t.length - 1;
  return L(t[e]) == "string" ? t[e].toLowerCase() : null;
}, { PI: yt, min: oe, max: ce } = Math, X = (t) => Math.round(t * 100) / 100, vt = (t) => Math.round(t * 100) / 100, W = yt * 2, Mt = yt / 3, Be = yt / 180, Se = 180 / yt;
function se(t) {
  return [...t.slice(0, 3).reverse(), ...t.slice(3)];
}
const _ = {
  format: {},
  autodetect: []
};
class u {
  constructor(...e) {
    const n = this;
    if (L(e[0]) === "object" && e[0].constructor && e[0].constructor === this.constructor)
      return e[0];
    let r = ot(e), o = false;
    if (!r) {
      o = true, _.sorted || (_.autodetect = _.autodetect.sort((s, c) => c.p - s.p), _.sorted = true);
      for (let s of _.autodetect)
        if (r = s.test(...e), r) break;
    }
    if (_.format[r]) {
      const s = _.format[r].apply(
        null,
        o ? e : e.slice(0, -1)
      );
      n._rgb = Yt(s);
    } else
      throw new Error("unknown format: " + e);
    n._rgb.length === 3 && n._rgb.push(1);
  }
  toString() {
    return L(this.hex) == "function" ? this.hex() : `[${this._rgb.join(",")}]`;
  }
}
const Xe = "3.2.0", A = (...t) => new u(...t);
A.version = Xe;
const nt = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  laserlemon: "#ffff54",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrod: "#fafad2",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  maroon2: "#7f0000",
  maroon3: "#b03060",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  purple2: "#7f007f",
  purple3: "#a020f0",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
}, qe = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, Ze = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, fe = (t) => {
  if (t.match(qe)) {
    (t.length === 4 || t.length === 7) && (t = t.substr(1)), t.length === 3 && (t = t.split(""), t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
    const e = parseInt(t, 16), n = e >> 16, r = e >> 8 & 255, o = e & 255;
    return [n, r, o, 1];
  }
  if (t.match(Ze)) {
    (t.length === 5 || t.length === 9) && (t = t.substr(1)), t.length === 4 && (t = t.split(""), t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
    const e = parseInt(t, 16), n = e >> 24 & 255, r = e >> 16 & 255, o = e >> 8 & 255, s = Math.round((e & 255) / 255 * 100) / 100;
    return [n, r, o, s];
  }
  throw new Error(`unknown hex color: ${t}`);
}, { round: bt } = Math, ae = (...t) => {
  let [e, n, r, o] = $(t, "rgba"), s = ot(t) || "auto";
  o === void 0 && (o = 1), s === "auto" && (s = o < 1 ? "rgba" : "rgb"), e = bt(e), n = bt(n), r = bt(r);
  let f = "000000" + (e << 16 | n << 8 | r).toString(16);
  f = f.substr(f.length - 6);
  let a = "0" + bt(o * 255).toString(16);
  switch (a = a.substr(a.length - 2), s.toLowerCase()) {
    case "rgba":
      return `#${f}${a}`;
    case "argb":
      return `#${a}${f}`;
    default:
      return `#${f}`;
  }
};
u.prototype.name = function() {
  const t = ae(this._rgb, "rgb");
  for (let e of Object.keys(nt))
    if (nt[e] === t) return e.toLowerCase();
  return t;
};
_.format.named = (t) => {
  if (t = t.toLowerCase(), nt[t]) return fe(nt[t]);
  throw new Error("unknown color name: " + t);
};
_.autodetect.push({
  p: 5,
  test: (t, ...e) => {
    if (!e.length && L(t) === "string" && nt[t.toLowerCase()])
      return "named";
  }
});
u.prototype.alpha = function(t, e = false) {
  return t !== void 0 && L(t) === "number" ? e ? (this._rgb[3] = t, this) : new u([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb") : this._rgb[3];
};
u.prototype.clipped = function() {
  return this._rgb._clipped || false;
};
const T = {
  // Corresponds roughly to RGB brighter/darker
  Kn: 18,
  // D65 standard referent
  labWhitePoint: "d65",
  Xn: 0.95047,
  Yn: 1,
  Zn: 1.08883,
  kE: 216 / 24389,
  kKE: 8,
  kK: 24389 / 27,
  RefWhiteRGB: {
    // sRGB
    X: 0.95047,
    Y: 1,
    Z: 1.08883
  },
  MtxRGB2XYZ: {
    m00: 0.4124564390896922,
    m01: 0.21267285140562253,
    m02: 0.0193338955823293,
    m10: 0.357576077643909,
    m11: 0.715152155287818,
    m12: 0.11919202588130297,
    m20: 0.18043748326639894,
    m21: 0.07217499330655958,
    m22: 0.9503040785363679
  },
  MtxXYZ2RGB: {
    m00: 3.2404541621141045,
    m01: -0.9692660305051868,
    m02: 0.055643430959114726,
    m10: -1.5371385127977166,
    m11: 1.8760108454466942,
    m12: -0.2040259135167538,
    m20: -0.498531409556016,
    m21: 0.041556017530349834,
    m22: 1.0572251882231791
  },
  // used in rgb2xyz
  As: 0.9414285350000001,
  Bs: 1.040417467,
  Cs: 1.089532651,
  MtxAdaptMa: {
    m00: 0.8951,
    m01: -0.7502,
    m02: 0.0389,
    m10: 0.2664,
    m11: 1.7135,
    m12: -0.0685,
    m20: -0.1614,
    m21: 0.0367,
    m22: 1.0296
  },
  MtxAdaptMaI: {
    m00: 0.9869929054667123,
    m01: 0.43230526972339456,
    m02: -0.008528664575177328,
    m10: -0.14705425642099013,
    m11: 0.5183602715367776,
    m12: 0.04004282165408487,
    m20: 0.15996265166373125,
    m21: 0.0492912282128556,
    m22: 0.9684866957875502
  }
}, Ie = /* @__PURE__ */ new Map([
  // ASTM E308-01
  ["a", [1.0985, 0.35585]],
  // Wyszecki & Stiles, p. 769
  ["b", [1.0985, 0.35585]],
  // C ASTM E308-01
  ["c", [0.98074, 1.18232]],
  // D50 (ASTM E308-01)
  ["d50", [0.96422, 0.82521]],
  // D55 (ASTM E308-01)
  ["d55", [0.95682, 0.92149]],
  // D65 (ASTM E308-01)
  ["d65", [0.95047, 1.08883]],
  // E (ASTM E308-01)
  ["e", [1, 1, 1]],
  // F2 (ASTM E308-01)
  ["f2", [0.99186, 0.67393]],
  // F7 (ASTM E308-01)
  ["f7", [0.95041, 1.08747]],
  // F11 (ASTM E308-01)
  ["f11", [1.00962, 0.6435]],
  ["icc", [0.96422, 0.82521]]
]);
function H(t) {
  const e = Ie.get(String(t).toLowerCase());
  if (!e)
    throw new Error("unknown Lab illuminant " + t);
  T.labWhitePoint = t, T.Xn = e[0], T.Zn = e[1];
}
function lt() {
  return T.labWhitePoint;
}
const zt = (...t) => {
  t = $(t, "lab");
  const [e, n, r] = t, [o, s, c] = Te(e, n, r), [f, a, l] = le(o, s, c);
  return [f, a, l, t.length > 3 ? t[3] : 1];
}, Te = (t, e, n) => {
  const { kE: r, kK: o, kKE: s, Xn: c, Yn: f, Zn: a } = T, l = (t + 16) / 116, h = 2e-3 * e + l, d = l - 5e-3 * n, b = h * h * h, m = d * d * d, M = b > r ? b : (116 * h - 16) / o, R = t > s ? Math.pow((t + 16) / 116, 3) : t / o, g = m > r ? m : (116 * d - 16) / o, w = M * c, Y = R * f, C = g * a;
  return [w, Y, C];
}, $t = (t) => {
  const e = Math.sign(t);
  return t = Math.abs(t), (t <= 31308e-7 ? t * 12.92 : 1.055 * Math.pow(t, 1 / 2.4) - 0.055) * e;
}, le = (t, e, n) => {
  const { MtxAdaptMa: r, MtxAdaptMaI: o, MtxXYZ2RGB: s, RefWhiteRGB: c, Xn: f, Yn: a, Zn: l } = T, h = f * r.m00 + a * r.m10 + l * r.m20, d = f * r.m01 + a * r.m11 + l * r.m21, b = f * r.m02 + a * r.m12 + l * r.m22, m = c.X * r.m00 + c.Y * r.m10 + c.Z * r.m20, M = c.X * r.m01 + c.Y * r.m11 + c.Z * r.m21, R = c.X * r.m02 + c.Y * r.m12 + c.Z * r.m22, g = (t * r.m00 + e * r.m10 + n * r.m20) * (m / h), w = (t * r.m01 + e * r.m11 + n * r.m21) * (M / d), Y = (t * r.m02 + e * r.m12 + n * r.m22) * (R / b), C = g * o.m00 + w * o.m10 + Y * o.m20, P = g * o.m01 + w * o.m11 + Y * o.m21, O = g * o.m02 + w * o.m12 + Y * o.m22, S = $t(
    C * s.m00 + P * s.m10 + O * s.m20
  ), E = $t(
    C * s.m01 + P * s.m11 + O * s.m21
  ), i = $t(
    C * s.m02 + P * s.m12 + O * s.m22
  );
  return [S * 255, E * 255, i * 255];
}, Gt = (...t) => {
  const [e, n, r, ...o] = $(t, "rgb"), [s, c, f] = ie(e, n, r), [a, l, h] = Ke(s, c, f);
  return [a, l, h, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function Ke(t, e, n) {
  const { Xn: r, Yn: o, Zn: s, kE: c, kK: f } = T, a = t / r, l = e / o, h = n / s, d = a > c ? Math.pow(a, 1 / 3) : (f * a + 16) / 116, b = l > c ? Math.pow(l, 1 / 3) : (f * l + 16) / 116, m = h > c ? Math.pow(h, 1 / 3) : (f * h + 16) / 116;
  return [116 * b - 16, 500 * (d - b), 200 * (b - m)];
}
function xt(t) {
  const e = Math.sign(t);
  return t = Math.abs(t), (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) * e;
}
const ie = (t, e, n) => {
  t = xt(t / 255), e = xt(e / 255), n = xt(n / 255);
  const { MtxRGB2XYZ: r, MtxAdaptMa: o, MtxAdaptMaI: s, Xn: c, Yn: f, Zn: a, As: l, Bs: h, Cs: d } = T;
  let b = t * r.m00 + e * r.m10 + n * r.m20, m = t * r.m01 + e * r.m11 + n * r.m21, M = t * r.m02 + e * r.m12 + n * r.m22;
  const R = c * o.m00 + f * o.m10 + a * o.m20, g = c * o.m01 + f * o.m11 + a * o.m21, w = c * o.m02 + f * o.m12 + a * o.m22;
  let Y = b * o.m00 + m * o.m10 + M * o.m20, C = b * o.m01 + m * o.m11 + M * o.m21, P = b * o.m02 + m * o.m12 + M * o.m22;
  return Y *= R / l, C *= g / h, P *= w / d, b = Y * s.m00 + C * s.m10 + P * s.m20, m = Y * s.m01 + C * s.m11 + P * s.m21, M = Y * s.m02 + C * s.m12 + P * s.m22, [b, m, M];
};
u.prototype.lab = function() {
  return Gt(this._rgb);
};
const We = (...t) => new u(...t, "lab");
Object.assign(A, { lab: We, getLabWhitePoint: lt, setLabWhitePoint: H });
_.format.lab = zt;
_.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = $(t, "lab"), L(t) === "array" && t.length === 3)
      return "lab";
  }
});
u.prototype.darken = function(t = 1) {
  const e = this, n = e.lab();
  return n[0] -= T.Kn * t, new u(n, "lab").alpha(e.alpha(), true);
};
u.prototype.brighten = function(t = 1) {
  return this.darken(-t);
};
u.prototype.darker = u.prototype.darken;
u.prototype.brighter = u.prototype.brighten;
u.prototype.get = function(t) {
  const [e, n] = t.split("."), r = this[e]();
  if (n) {
    const o = e.indexOf(n) - (e.substr(0, 2) === "ok" ? 2 : 0);
    if (o > -1) return r[o];
    throw new Error(`unknown channel ${n} in mode ${e}`);
  } else
    return r;
};
const { pow: He } = Math, De = 1e-7, Fe = 20;
u.prototype.luminance = function(t, e = "rgb") {
  if (t !== void 0 && L(t) === "number") {
    if (t === 0)
      return new u([0, 0, 0, this._rgb[3]], "rgb");
    if (t === 1)
      return new u([255, 255, 255, this._rgb[3]], "rgb");
    let n = this.luminance(), r = Fe;
    const o = (c, f) => {
      const a = c.interpolate(f, 0.5, e), l = a.luminance();
      return Math.abs(t - l) < De || !r-- ? a : l > t ? o(c, a) : o(a, f);
    }, s = (n > t ? o(new u([0, 0, 0]), this) : o(this, new u([255, 255, 255]))).rgb();
    return new u([...s, this._rgb[3]]);
  }
  return Ve(...this._rgb.slice(0, 3));
};
const Ve = (t, e, n) => (t = At(t), e = At(e), n = At(n), 0.2126 * t + 0.7152 * e + 0.0722 * n), At = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : He((t + 0.055) / 1.055, 2.4)), z = {}, rt = (t, e, n = 0.5, ...r) => {
  let o = r[0] || "lrgb";
  if (!z[o] && !r.length && (o = Object.keys(z)[0]), !z[o])
    throw new Error(`interpolation mode ${o} is not defined`);
  return L(t) !== "object" && (t = new u(t)), L(e) !== "object" && (e = new u(e)), z[o](t, e, n).alpha(
    t.alpha() + n * (e.alpha() - t.alpha())
  );
};
u.prototype.mix = u.prototype.interpolate = function(t, e = 0.5, ...n) {
  return rt(this, t, e, ...n);
};
u.prototype.premultiply = function(t = false) {
  const e = this._rgb, n = e[3];
  return t ? (this._rgb = [e[0] * n, e[1] * n, e[2] * n, n], this) : new u([e[0] * n, e[1] * n, e[2] * n, n], "rgb");
};
const { sin: Ue, cos: Je } = Math, ue = (...t) => {
  let [e, n, r] = $(t, "lch");
  return isNaN(r) && (r = 0), r = r * Be, [e, Je(r) * n, Ue(r) * n];
}, Bt = (...t) => {
  t = $(t, "lch");
  const [e, n, r] = t, [o, s, c] = ue(e, n, r), [f, a, l] = zt(o, s, c);
  return [f, a, l, t.length > 3 ? t[3] : 1];
}, Qe = (...t) => {
  const e = se($(t, "hcl"));
  return Bt(...e);
}, { sqrt: tn, atan2: en, round: nn } = Math, be = (...t) => {
  const [e, n, r] = $(t, "lab"), o = tn(n * n + r * r);
  let s = (en(r, n) * Se + 360) % 360;
  return nn(o * 1e4) === 0 && (s = Number.NaN), [e, o, s];
}, St = (...t) => {
  const [e, n, r, ...o] = $(t, "rgb"), [s, c, f] = Gt(e, n, r), [a, l, h] = be(s, c, f);
  return [a, l, h, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
u.prototype.lch = function() {
  return St(this._rgb);
};
u.prototype.hcl = function() {
  return se(St(this._rgb));
};
const rn = (...t) => new u(...t, "lch"), on = (...t) => new u(...t, "hcl");
Object.assign(A, { lch: rn, hcl: on });
_.format.lch = Bt;
_.format.hcl = Qe;
["lch", "hcl"].forEach(
  (t) => _.autodetect.push({
    p: 2,
    test: (...e) => {
      if (e = $(e, t), L(e) === "array" && e.length === 3)
        return t;
    }
  })
);
u.prototype.saturate = function(t = 1) {
  const e = this, n = e.lch();
  return n[1] += T.Kn * t, n[1] < 0 && (n[1] = 0), new u(n, "lch").alpha(e.alpha(), true);
};
u.prototype.desaturate = function(t = 1) {
  return this.saturate(-t);
};
u.prototype.set = function(t, e, n = false) {
  const [r, o] = t.split("."), s = this[r]();
  if (o) {
    const c = r.indexOf(o) - (r.substr(0, 2) === "ok" ? 2 : 0);
    if (c > -1) {
      if (L(e) == "string")
        switch (e.charAt(0)) {
          case "+":
            s[c] += +e;
            break;
          case "-":
            s[c] += +e;
            break;
          case "*":
            s[c] *= +e.substr(1);
            break;
          case "/":
            s[c] /= +e.substr(1);
            break;
          default:
            s[c] = +e;
        }
      else if (L(e) === "number")
        s[c] = e;
      else
        throw new Error("unsupported value for Color.set");
      const f = new u(s, r);
      return n ? (this._rgb = f._rgb, this) : f;
    }
    throw new Error(`unknown channel ${o} in mode ${r}`);
  } else
    return s;
};
u.prototype.tint = function(t = 0.5, ...e) {
  return rt(this, "white", t, ...e);
};
u.prototype.shade = function(t = 0.5, ...e) {
  return rt(this, "black", t, ...e);
};
const cn = (t, e, n) => {
  const r = t._rgb, o = e._rgb;
  return new u(
    r[0] + n * (o[0] - r[0]),
    r[1] + n * (o[1] - r[1]),
    r[2] + n * (o[2] - r[2]),
    "rgb"
  );
};
z.rgb = cn;
const { sqrt: Lt, pow: Q } = Math, sn = (t, e, n) => {
  const [r, o, s] = t._rgb, [c, f, a] = e._rgb;
  return new u(
    Lt(Q(r, 2) * (1 - n) + Q(c, 2) * n),
    Lt(Q(o, 2) * (1 - n) + Q(f, 2) * n),
    Lt(Q(s, 2) * (1 - n) + Q(a, 2) * n),
    "rgb"
  );
};
z.lrgb = sn;
const fn = (t, e, n) => {
  const r = t.lab(), o = e.lab();
  return new u(
    r[0] + n * (o[0] - r[0]),
    r[1] + n * (o[1] - r[1]),
    r[2] + n * (o[2] - r[2]),
    "lab"
  );
};
z.lab = fn;
const ct = (t, e, n, r) => {
  let o, s;
  r === "hsl" ? (o = t.hsl(), s = e.hsl()) : r === "hsv" ? (o = t.hsv(), s = e.hsv()) : r === "hcg" ? (o = t.hcg(), s = e.hcg()) : r === "hsi" ? (o = t.hsi(), s = e.hsi()) : r === "lch" || r === "hcl" ? (r = "hcl", o = t.hcl(), s = e.hcl()) : r === "oklch" && (o = t.oklch().reverse(), s = e.oklch().reverse());
  let c, f, a, l, h, d;
  (r.substr(0, 1) === "h" || r === "oklch") && ([c, a, h] = o, [f, l, d] = s);
  let b, m, M, R;
  return !isNaN(c) && !isNaN(f) ? (f > c && f - c > 180 ? R = f - (c + 360) : f < c && c - f > 180 ? R = f + 360 - c : R = f - c, m = c + n * R) : isNaN(c) ? isNaN(f) ? m = Number.NaN : (m = f, (h == 1 || h == 0) && r != "hsv" && (b = l)) : (m = c, (d == 1 || d == 0) && r != "hsv" && (b = a)), b === void 0 && (b = a + n * (l - a)), M = h + n * (d - h), r === "oklch" ? new u([M, b, m], r) : new u([m, b, M], r);
}, he = (t, e, n) => ct(t, e, n, "lch");
z.lch = he;
z.hcl = he;
const an = (t) => {
  if (L(t) == "number" && t >= 0 && t <= 16777215) {
    const e = t >> 16, n = t >> 8 & 255, r = t & 255;
    return [e, n, r, 1];
  }
  throw new Error("unknown num color: " + t);
}, ln = (...t) => {
  const [e, n, r] = $(t, "rgb");
  return (e << 16) + (n << 8) + r;
};
u.prototype.num = function() {
  return ln(this._rgb);
};
const un = (...t) => new u(...t, "num");
Object.assign(A, { num: un });
_.format.num = an;
_.autodetect.push({
  p: 5,
  test: (...t) => {
    if (t.length === 1 && L(t[0]) === "number" && t[0] >= 0 && t[0] <= 16777215)
      return "num";
  }
});
const bn = (t, e, n) => {
  const r = t.num(), o = e.num();
  return new u(r + n * (o - r), "num");
};
z.num = bn;
const { floor: hn } = Math, dn = (...t) => {
  t = $(t, "hcg");
  let [e, n, r] = t, o, s, c;
  r = r * 255;
  const f = n * 255;
  if (n === 0)
    o = s = c = r;
  else {
    e === 360 && (e = 0), e > 360 && (e -= 360), e < 0 && (e += 360), e /= 60;
    const a = hn(e), l = e - a, h = r * (1 - n), d = h + f * (1 - l), b = h + f * l, m = h + f;
    switch (a) {
      case 0:
        [o, s, c] = [m, b, h];
        break;
      case 1:
        [o, s, c] = [d, m, h];
        break;
      case 2:
        [o, s, c] = [h, m, b];
        break;
      case 3:
        [o, s, c] = [h, d, m];
        break;
      case 4:
        [o, s, c] = [b, h, m];
        break;
      case 5:
        [o, s, c] = [m, h, d];
        break;
    }
  }
  return [o, s, c, t.length > 3 ? t[3] : 1];
}, pn = (...t) => {
  const [e, n, r] = $(t, "rgb"), o = oe(e, n, r), s = ce(e, n, r), c = s - o, f = c * 100 / 255, a = o / (255 - c) * 100;
  let l;
  return c === 0 ? l = Number.NaN : (e === s && (l = (n - r) / c), n === s && (l = 2 + (r - e) / c), r === s && (l = 4 + (e - n) / c), l *= 60, l < 0 && (l += 360)), [l, f, a];
};
u.prototype.hcg = function() {
  return pn(this._rgb);
};
const mn = (...t) => new u(...t, "hcg");
A.hcg = mn;
_.format.hcg = dn;
_.autodetect.push({
  p: 1,
  test: (...t) => {
    if (t = $(t, "hcg"), L(t) === "array" && t.length === 3)
      return "hcg";
  }
});
const gn = (t, e, n) => ct(t, e, n, "hcg");
z.hcg = gn;
const { cos: tt } = Math, wn = (...t) => {
  t = $(t, "hsi");
  let [e, n, r] = t, o, s, c;
  return isNaN(e) && (e = 0), isNaN(n) && (n = 0), e > 360 && (e -= 360), e < 0 && (e += 360), e /= 360, e < 1 / 3 ? (c = (1 - n) / 3, o = (1 + n * tt(W * e) / tt(Mt - W * e)) / 3, s = 1 - (c + o)) : e < 2 / 3 ? (e -= 1 / 3, o = (1 - n) / 3, s = (1 + n * tt(W * e) / tt(Mt - W * e)) / 3, c = 1 - (o + s)) : (e -= 2 / 3, s = (1 - n) / 3, c = (1 + n * tt(W * e) / tt(Mt - W * e)) / 3, o = 1 - (s + c)), o = J(r * o * 3), s = J(r * s * 3), c = J(r * c * 3), [o * 255, s * 255, c * 255, t.length > 3 ? t[3] : 1];
}, { min: yn, sqrt: kn, acos: _n } = Math, Mn = (...t) => {
  let [e, n, r] = $(t, "rgb");
  e /= 255, n /= 255, r /= 255;
  let o;
  const s = yn(e, n, r), c = (e + n + r) / 3, f = c > 0 ? 1 - s / c : 0;
  return f === 0 ? o = NaN : (o = (e - n + (e - r)) / 2, o /= kn((e - n) * (e - n) + (e - r) * (n - r)), o = _n(o), r > n && (o = W - o), o /= W), [o * 360, f, c];
};
u.prototype.hsi = function() {
  return Mn(this._rgb);
};
const $n = (...t) => new u(...t, "hsi");
A.hsi = $n;
_.format.hsi = wn;
_.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = $(t, "hsi"), L(t) === "array" && t.length === 3)
      return "hsi";
  }
});
const xn = (t, e, n) => ct(t, e, n, "hsi");
z.hsi = xn;
const Pt = (...t) => {
  t = $(t, "hsl");
  const [e, n, r] = t;
  let o, s, c;
  if (n === 0)
    o = s = c = r * 255;
  else {
    const f = [0, 0, 0], a = [0, 0, 0], l = r < 0.5 ? r * (1 + n) : r + n - r * n, h = 2 * r - l, d = e / 360;
    f[0] = d + 1 / 3, f[1] = d, f[2] = d - 1 / 3;
    for (let b = 0; b < 3; b++)
      f[b] < 0 && (f[b] += 1), f[b] > 1 && (f[b] -= 1), 6 * f[b] < 1 ? a[b] = h + (l - h) * 6 * f[b] : 2 * f[b] < 1 ? a[b] = l : 3 * f[b] < 2 ? a[b] = h + (l - h) * (2 / 3 - f[b]) * 6 : a[b] = h;
    [o, s, c] = [a[0] * 255, a[1] * 255, a[2] * 255];
  }
  return t.length > 3 ? [o, s, c, t[3]] : [o, s, c, 1];
}, de = (...t) => {
  t = $(t, "rgba");
  let [e, n, r] = t;
  e /= 255, n /= 255, r /= 255;
  const o = oe(e, n, r), s = ce(e, n, r), c = (s + o) / 2;
  let f, a;
  return s === o ? (f = 0, a = Number.NaN) : f = c < 0.5 ? (s - o) / (s + o) : (s - o) / (2 - s - o), e == s ? a = (n - r) / (s - o) : n == s ? a = 2 + (r - e) / (s - o) : r == s && (a = 4 + (e - n) / (s - o)), a *= 60, a < 0 && (a += 360), t.length > 3 && t[3] !== void 0 ? [a, f, c, t[3]] : [a, f, c];
};
u.prototype.hsl = function() {
  return de(this._rgb);
};
const An = (...t) => new u(...t, "hsl");
A.hsl = An;
_.format.hsl = Pt;
_.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = $(t, "hsl"), L(t) === "array" && t.length === 3)
      return "hsl";
  }
});
const Ln = (t, e, n) => ct(t, e, n, "hsl");
z.hsl = Ln;
const { floor: En } = Math, Rn = (...t) => {
  t = $(t, "hsv");
  let [e, n, r] = t, o, s, c;
  if (r *= 255, n === 0)
    o = s = c = r;
  else {
    e === 360 && (e = 0), e > 360 && (e -= 360), e < 0 && (e += 360), e /= 60;
    const f = En(e), a = e - f, l = r * (1 - n), h = r * (1 - n * a), d = r * (1 - n * (1 - a));
    switch (f) {
      case 0:
        [o, s, c] = [r, d, l];
        break;
      case 1:
        [o, s, c] = [h, r, l];
        break;
      case 2:
        [o, s, c] = [l, r, d];
        break;
      case 3:
        [o, s, c] = [l, h, r];
        break;
      case 4:
        [o, s, c] = [d, l, r];
        break;
      case 5:
        [o, s, c] = [r, l, h];
        break;
    }
  }
  return [o, s, c, t.length > 3 ? t[3] : 1];
}, { min: Nn, max: Cn } = Math, jn = (...t) => {
  t = $(t, "rgb");
  let [e, n, r] = t;
  const o = Nn(e, n, r), s = Cn(e, n, r), c = s - o;
  let f, a, l;
  return l = s / 255, s === 0 ? (f = Number.NaN, a = 0) : (a = c / s, e === s && (f = (n - r) / c), n === s && (f = 2 + (r - e) / c), r === s && (f = 4 + (e - n) / c), f *= 60, f < 0 && (f += 360)), [f, a, l];
};
u.prototype.hsv = function() {
  return jn(this._rgb);
};
const vn = (...t) => new u(...t, "hsv");
A.hsv = vn;
_.format.hsv = Rn;
_.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = $(t, "hsv"), L(t) === "array" && t.length === 3)
      return "hsv";
  }
});
const Pn = (t, e, n) => ct(t, e, n, "hsv");
z.hsv = Pn;
function mt(t, e) {
  let n = t.length;
  Array.isArray(t[0]) || (t = [t]), Array.isArray(e[0]) || (e = e.map((c) => [c]));
  let r = e[0].length, o = e[0].map((c, f) => e.map((a) => a[f])), s = t.map(
    (c) => o.map((f) => Array.isArray(c) ? c.reduce((a, l, h) => a + l * (f[h] || 0), 0) : f.reduce((a, l) => a + l * c, 0))
  );
  return n === 1 && (s = s[0]), r === 1 ? s.map((c) => c[0]) : s;
}
const Xt = (...t) => {
  t = $(t, "lab");
  const [e, n, r, ...o] = t, [s, c, f] = On([e, n, r]), [a, l, h] = le(s, c, f);
  return [a, l, h, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function On(t) {
  var e = [
    [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
    [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
    [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
  ], n = [
    [1, 0.3963377773761749, 0.2158037573099136],
    [1, -0.1055613458156586, -0.0638541728258133],
    [1, -0.0894841775298119, -1.2914855480194092]
  ], r = mt(n, t);
  return mt(
    e,
    r.map((o) => o ** 3)
  );
}
const qt = (...t) => {
  const [e, n, r, ...o] = $(t, "rgb"), s = ie(e, n, r);
  return [...Yn(s), ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function Yn(t) {
  const e = [
    [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
    [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
    [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
  ], n = [
    [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
    [1.9779985324311684, -2.42859224204858, 0.450593709617411],
    [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
  ], r = mt(e, t);
  return mt(
    n,
    r.map((o) => Math.cbrt(o))
  );
}
u.prototype.oklab = function() {
  return qt(this._rgb);
};
const zn = (...t) => new u(...t, "oklab");
Object.assign(A, { oklab: zn });
_.format.oklab = Xt;
_.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = $(t, "oklab"), L(t) === "array" && t.length === 3)
      return "oklab";
  }
});
const Gn = (t, e, n) => {
  const r = t.oklab(), o = e.oklab();
  return new u(
    r[0] + n * (o[0] - r[0]),
    r[1] + n * (o[1] - r[1]),
    r[2] + n * (o[2] - r[2]),
    "oklab"
  );
};
z.oklab = Gn;
const Bn = (t, e, n) => ct(t, e, n, "oklch");
z.oklch = Bn;
const { pow: Et, sqrt: Rt, PI: Nt, cos: Tt, sin: Kt, atan2: Sn } = Math, Xn = (t, e = "lrgb", n = null) => {
  const r = t.length;
  n || (n = Array.from(new Array(r)).map(() => 1));
  const o = r / n.reduce(function(d, b) {
    return d + b;
  });
  if (n.forEach((d, b) => {
    n[b] *= o;
  }), t = t.map((d) => new u(d)), e === "lrgb")
    return qn(t, n);
  const s = t.shift(), c = s.get(e), f = [];
  let a = 0, l = 0;
  for (let d = 0; d < c.length; d++)
    if (c[d] = (c[d] || 0) * n[0], f.push(isNaN(c[d]) ? 0 : n[0]), e.charAt(d) === "h" && !isNaN(c[d])) {
      const b = c[d] / 180 * Nt;
      a += Tt(b) * n[0], l += Kt(b) * n[0];
    }
  let h = s.alpha() * n[0];
  t.forEach((d, b) => {
    const m = d.get(e);
    h += d.alpha() * n[b + 1];
    for (let M = 0; M < c.length; M++)
      if (!isNaN(m[M]))
        if (f[M] += n[b + 1], e.charAt(M) === "h") {
          const R = m[M] / 180 * Nt;
          a += Tt(R) * n[b + 1], l += Kt(R) * n[b + 1];
        } else
          c[M] += m[M] * n[b + 1];
  });
  for (let d = 0; d < c.length; d++)
    if (e.charAt(d) === "h") {
      let b = Sn(l / f[d], a / f[d]) / Nt * 180;
      for (; b < 0; ) b += 360;
      for (; b >= 360; ) b -= 360;
      c[d] = b;
    } else
      c[d] = c[d] / f[d];
  return h /= r, new u(c, e).alpha(h > 0.99999 ? 1 : h, true);
}, qn = (t, e) => {
  const n = t.length, r = [0, 0, 0, 0];
  for (let o = 0; o < t.length; o++) {
    const s = t[o], c = e[o] / n, f = s._rgb;
    r[0] += Et(f[0], 2) * c, r[1] += Et(f[1], 2) * c, r[2] += Et(f[2], 2) * c, r[3] += f[3] * c;
  }
  return r[0] = Rt(r[0]), r[1] = Rt(r[1]), r[2] = Rt(r[2]), r[3] > 0.9999999 && (r[3] = 1), new u(Yt(r));
}, { pow: Zn } = Math;
function gt(t) {
  let e = "rgb", n = A("#ccc"), r = 0, o = [0, 1], s = [0, 1], c = [], f = [0, 0], a = false, l = [], h = false, d = 0, b = 1, m = false, M = {}, R = true, g = 1;
  const w = function(i) {
    if (i = i || ["#fff", "#000"], i && L(i) === "string" && A.brewer && A.brewer[i.toLowerCase()] && (i = A.brewer[i.toLowerCase()]), L(i) === "array") {
      i.length === 1 && (i = [i[0], i[0]]), i = i.slice(0);
      for (let p = 0; p < i.length; p++)
        i[p] = A(i[p]);
      c.length = 0;
      for (let p = 0; p < i.length; p++)
        c.push(p / (i.length - 1));
    }
    return S(), l = i;
  }, Y = function(i) {
    if (a != null) {
      const p = a.length - 1;
      let x = 0;
      for (; x < p && i >= a[x]; )
        x++;
      return x - 1;
    }
    return 0;
  };
  let C = (i) => i, P = (i) => i;
  const O = function(i, p) {
    let x, y;
    if (p == null && (p = false), isNaN(i) || i === null)
      return n;
    p ? y = i : a && a.length > 2 ? y = Y(i) / (a.length - 2) : b !== d ? y = (i - d) / (b - d) : y = 1, y = P(y), p || (y = C(y)), g !== 1 && (y = Zn(y, g)), y = f[0] + y * (1 - f[0] - f[1]), y = J(y, 0, 1);
    const N = Math.floor(y * 1e4);
    if (R && M[N])
      x = M[N];
    else {
      if (L(l) === "array")
        for (let k = 0; k < c.length; k++) {
          const G = c[k];
          if (y <= G) {
            x = l[k];
            break;
          }
          if (y >= G && k === c.length - 1) {
            x = l[k];
            break;
          }
          if (y > G && y < c[k + 1]) {
            y = (y - G) / (c[k + 1] - G), x = A.interpolate(
              l[k],
              l[k + 1],
              y,
              e
            );
            break;
          }
        }
      else L(l) === "function" && (x = l(y));
      R && (M[N] = x);
    }
    return x;
  };
  var S = () => M = {};
  w(t);
  const E = function(i) {
    const p = A(O(i));
    return h && p[h] ? p[h]() : p;
  };
  return E.classes = function(i) {
    if (i != null) {
      if (L(i) === "array")
        a = i, o = [i[0], i[i.length - 1]];
      else {
        const p = A.analyze(o);
        i === 0 ? a = [p.min, p.max] : a = A.limits(p, "e", i);
      }
      return E;
    }
    return a;
  }, E.domain = function(i) {
    if (!arguments.length)
      return s;
    s = i.slice(0), d = i[0], b = i[i.length - 1], c = [];
    const p = l.length;
    if (i.length === p && d !== b)
      for (let x of Array.from(i))
        c.push((x - d) / (b - d));
    else {
      for (let x = 0; x < p; x++)
        c.push(x / (p - 1));
      if (i.length > 2) {
        const x = i.map((N, k) => k / (i.length - 1)), y = i.map((N) => (N - d) / (b - d));
        y.every((N, k) => x[k] === N) || (P = (N) => {
          if (N <= 0 || N >= 1) return N;
          let k = 0;
          for (; N >= y[k + 1]; ) k++;
          const G = (N - y[k]) / (y[k + 1] - y[k]);
          return x[k] + G * (x[k + 1] - x[k]);
        });
      }
    }
    return o = [d, b], E;
  }, E.mode = function(i) {
    return arguments.length ? (e = i, S(), E) : e;
  }, E.range = function(i, p) {
    return w(i), E;
  }, E.out = function(i) {
    return h = i, E;
  }, E.spread = function(i) {
    return arguments.length ? (r = i, E) : r;
  }, E.correctLightness = function(i) {
    return i == null && (i = true), m = i, S(), m ? C = function(p) {
      const x = O(0, true).lab()[0], y = O(1, true).lab()[0], N = x > y;
      let k = O(p, true).lab()[0];
      const G = x + (y - x) * p;
      let F = k - G, it = 0, at = 1, ut = 20;
      for (; Math.abs(F) > 0.01 && ut-- > 0; )
        (function() {
          return N && (F *= -1), F < 0 ? (it = p, p += (at - p) * 0.5) : (at = p, p += (it - p) * 0.5), k = O(p, true).lab()[0], F = k - G;
        })();
      return p;
    } : C = (p) => p, E;
  }, E.padding = function(i) {
    return i != null ? (L(i) === "number" && (i = [i, i]), f = i, E) : f;
  }, E.colors = function(i, p) {
    arguments.length < 2 && (p = "hex");
    let x = [];
    if (arguments.length === 0)
      x = l.slice(0);
    else if (i === 1)
      x = [E(0.5)];
    else if (i > 1) {
      const y = o[0], N = o[1] - y;
      x = In(0, i).map(
        (k) => E(y + k / (i - 1) * N)
      );
    } else {
      t = [];
      let y = [];
      if (a && a.length > 2)
        for (let N = 1, k = a.length, G = 1 <= k; G ? N < k : N > k; G ? N++ : N--)
          y.push((a[N - 1] + a[N]) * 0.5);
      else
        y = o;
      x = y.map((N) => E(N));
    }
    return A[p] && (x = x.map((y) => y[p]())), x;
  }, E.cache = function(i) {
    return i != null ? (R = i, E) : R;
  }, E.gamma = function(i) {
    return i != null ? (g = i, E) : g;
  }, E.nodata = function(i) {
    return i != null ? (n = A(i), E) : n;
  }, E;
}
function In(t, e, n) {
  let r = [], o = t < e, s = e;
  for (let c = t; o ? c < s : c > s; o ? c++ : c--)
    r.push(c);
  return r;
}
const Tn = function(t) {
  let e = [1, 1];
  for (let n = 1; n < t; n++) {
    let r = [1];
    for (let o = 1; o <= e.length; o++)
      r[o] = (e[o] || 0) + e[o - 1];
    e = r;
  }
  return e;
}, Kn = function(t) {
  let e, n, r, o;
  if (t = t.map((s) => new u(s)), t.length === 2)
    [n, r] = t.map((s) => s.lab()), e = function(s) {
      const c = [0, 1, 2].map((f) => n[f] + s * (r[f] - n[f]));
      return new u(c, "lab");
    };
  else if (t.length === 3)
    [n, r, o] = t.map((s) => s.lab()), e = function(s) {
      const c = [0, 1, 2].map(
        (f) => (1 - s) * (1 - s) * n[f] + 2 * (1 - s) * s * r[f] + s * s * o[f]
      );
      return new u(c, "lab");
    };
  else if (t.length === 4) {
    let s;
    [n, r, o, s] = t.map((c) => c.lab()), e = function(c) {
      const f = [0, 1, 2].map(
        (a) => (1 - c) * (1 - c) * (1 - c) * n[a] + 3 * (1 - c) * (1 - c) * c * r[a] + 3 * (1 - c) * c * c * o[a] + c * c * c * s[a]
      );
      return new u(f, "lab");
    };
  } else if (t.length >= 5) {
    let s, c, f;
    s = t.map((a) => a.lab()), f = t.length - 1, c = Tn(f), e = function(a) {
      const l = 1 - a, h = [0, 1, 2].map(
        (d) => s.reduce(
          (b, m, M) => b + c[M] * l ** (f - M) * a ** M * m[d],
          0
        )
      );
      return new u(h, "lab");
    };
  } else
    throw new RangeError("No point in running bezier with only one color.");
  return e;
}, Wn = (t) => {
  const e = Kn(t);
  return e.scale = () => gt(e), e;
}, { round: pe } = Math;
u.prototype.rgb = function(t = true) {
  return t === false ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(pe);
};
u.prototype.rgba = function(t = true) {
  return this._rgb.slice(0, 4).map((e, n) => n < 3 ? t === false ? e : pe(e) : e);
};
const Hn = (...t) => new u(...t, "rgb");
Object.assign(A, { rgb: Hn });
_.format.rgb = (...t) => {
  const e = $(t, "rgba");
  return e[3] === void 0 && (e[3] = 1), e;
};
_.autodetect.push({
  p: 3,
  test: (...t) => {
    if (t = $(t, "rgba"), L(t) === "array" && (t.length === 3 || t.length === 4 && L(t[3]) == "number" && t[3] >= 0 && t[3] <= 1))
      return "rgb";
  }
});
const I = (t, e, n) => {
  if (!I[n])
    throw new Error("unknown blend mode " + n);
  return I[n](t, e);
}, V = (t) => (e, n) => {
  const r = A(n).rgb(), o = A(e).rgb();
  return A.rgb(t(r, o));
}, U = (t) => (e, n) => {
  const r = [];
  return r[0] = t(e[0], n[0]), r[1] = t(e[1], n[1]), r[2] = t(e[2], n[2]), r;
}, Dn = (t) => t, Fn = (t, e) => t * e / 255, Vn = (t, e) => t > e ? e : t, Un = (t, e) => t > e ? t : e, Jn = (t, e) => 255 * (1 - (1 - t / 255) * (1 - e / 255)), Qn = (t, e) => e < 128 ? 2 * t * e / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - e / 255)), t0 = (t, e) => 255 * (1 - (1 - e / 255) / (t / 255)), e0 = (t, e) => t === 255 ? 255 : (t = 255 * (e / 255) / (1 - t / 255), t > 255 ? 255 : t);
I.normal = V(U(Dn));
I.multiply = V(U(Fn));
I.screen = V(U(Jn));
I.overlay = V(U(Qn));
I.darken = V(U(Vn));
I.lighten = V(U(Un));
I.dodge = V(U(e0));
I.burn = V(U(t0));
const { pow: n0, sin: r0, cos: o0 } = Math;
function c0(t = 300, e = -1.5, n = 1, r = 1, o = [0, 1]) {
  let s = 0, c;
  L(o) === "array" ? c = o[1] - o[0] : (c = 0, o = [o, o]);
  const f = function(a) {
    const l = W * ((t + 120) / 360 + e * a), h = n0(o[0] + c * a, r), b = (s !== 0 ? n[0] + a * s : n) * h * (1 - h) / 2, m = o0(l), M = r0(l), R = h + b * (-0.14861 * m + 1.78277 * M), g = h + b * (-0.29227 * m - 0.90649 * M), w = h + b * (1.97294 * m);
    return A(Yt([R * 255, g * 255, w * 255, 1]));
  };
  return f.start = function(a) {
    return a == null ? t : (t = a, f);
  }, f.rotations = function(a) {
    return a == null ? e : (e = a, f);
  }, f.gamma = function(a) {
    return a == null ? r : (r = a, f);
  }, f.hue = function(a) {
    return a == null ? n : (n = a, L(n) === "array" ? (s = n[1] - n[0], s === 0 && (n = n[1])) : s = 0, f);
  }, f.lightness = function(a) {
    return a == null ? o : (L(a) === "array" ? (o = a, c = a[1] - a[0]) : (o = [a, a], c = 0), f);
  }, f.scale = () => A.scale(f), f.hue(n), f;
}
const s0 = "0123456789abcdef", { floor: f0, random: a0 } = Math, l0 = (t = a0) => {
  let e = "#";
  for (let n = 0; n < 6; n++)
    e += s0.charAt(f0(t() * 16));
  return new u(e, "hex");
}, { log: Wt, pow: i0, floor: u0, abs: b0 } = Math;
function me(t, e = null) {
  const n = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0
  };
  return L(t) === "object" && (t = Object.values(t)), t.forEach((r) => {
    e && L(r) === "object" && (r = r[e]), r != null && !isNaN(r) && (n.values.push(r), n.sum += r, r < n.min && (n.min = r), r > n.max && (n.max = r), n.count += 1);
  }), n.domain = [n.min, n.max], n.limits = (r, o) => ge(n, r, o), n;
}
function ge(t, e = "equal", n = 7) {
  L(t) == "array" && (t = me(t));
  const { min: r, max: o } = t, s = t.values.sort((f, a) => f - a);
  if (n === 1)
    return [r, o];
  const c = [];
  if (e.substr(0, 1) === "c" && (c.push(r), c.push(o)), e.substr(0, 1) === "e") {
    c.push(r);
    for (let f = 1; f < n; f++)
      c.push(r + f / n * (o - r));
    c.push(o);
  } else if (e.substr(0, 1) === "l") {
    if (r <= 0)
      throw new Error(
        "Logarithmic scales are only possible for values > 0"
      );
    const f = Math.LOG10E * Wt(r), a = Math.LOG10E * Wt(o);
    c.push(r);
    for (let l = 1; l < n; l++)
      c.push(i0(10, f + l / n * (a - f)));
    c.push(o);
  } else if (e.substr(0, 1) === "q") {
    c.push(r);
    for (let f = 1; f < n; f++) {
      const a = (s.length - 1) * f / n, l = u0(a);
      if (l === a)
        c.push(s[l]);
      else {
        const h = a - l;
        c.push(s[l] * (1 - h) + s[l + 1] * h);
      }
    }
    c.push(o);
  } else if (e.substr(0, 1) === "k") {
    let f;
    const a = s.length, l = new Array(a), h = new Array(n);
    let d = true, b = 0, m = null;
    m = [], m.push(r);
    for (let g = 1; g < n; g++)
      m.push(r + g / n * (o - r));
    for (m.push(o); d; ) {
      for (let w = 0; w < n; w++)
        h[w] = 0;
      for (let w = 0; w < a; w++) {
        const Y = s[w];
        let C = Number.MAX_VALUE, P;
        for (let O = 0; O < n; O++) {
          const S = b0(m[O] - Y);
          S < C && (C = S, P = O), h[P]++, l[w] = P;
        }
      }
      const g = new Array(n);
      for (let w = 0; w < n; w++)
        g[w] = null;
      for (let w = 0; w < a; w++)
        f = l[w], g[f] === null ? g[f] = s[w] : g[f] += s[w];
      for (let w = 0; w < n; w++)
        g[w] *= 1 / h[w];
      d = false;
      for (let w = 0; w < n; w++)
        if (g[w] !== m[w]) {
          d = true;
          break;
        }
      m = g, b++, b > 200 && (d = false);
    }
    const M = {};
    for (let g = 0; g < n; g++)
      M[g] = [];
    for (let g = 0; g < a; g++)
      f = l[g], M[f].push(s[g]);
    let R = [];
    for (let g = 0; g < n; g++)
      R.push(M[g][0]), R.push(M[g][M[g].length - 1]);
    R = R.sort((g, w) => g - w), c.push(R[0]);
    for (let g = 1; g < R.length; g += 2) {
      const w = R[g];
      !isNaN(w) && c.indexOf(w) === -1 && c.push(w);
    }
  }
  return c;
}
const h0 = (t, e) => {
  t = new u(t), e = new u(e);
  const n = t.luminance(), r = e.luminance();
  return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
};
/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */
const Ht = 0.027, d0 = 5e-4, p0 = 0.1, Dt = 1.14, ht = 0.022, Ft = 1.414, m0 = (t, e) => {
  t = new u(t), e = new u(e), t.alpha() < 1 && (t = rt(e, t, t.alpha(), "rgb"));
  const n = Vt(...t.rgb()), r = Vt(...e.rgb()), o = n >= ht ? n : n + Math.pow(ht - n, Ft), s = r >= ht ? r : r + Math.pow(ht - r, Ft), c = Math.pow(s, 0.56) - Math.pow(o, 0.57), f = Math.pow(s, 0.65) - Math.pow(o, 0.62), a = Math.abs(s - o) < d0 ? 0 : o < s ? c * Dt : f * Dt;
  return (Math.abs(a) < p0 ? 0 : a > 0 ? a - Ht : a + Ht) * 100;
};
function Vt(t, e, n) {
  return 0.2126729 * Math.pow(t / 255, 2.4) + 0.7151522 * Math.pow(e / 255, 2.4) + 0.072175 * Math.pow(n / 255, 2.4);
}
const { sqrt: K, pow: j, min: g0, max: w0, atan2: Ut, abs: Jt, cos: dt, sin: Qt, exp: y0, PI: te } = Math;
function k0(t, e, n = 1, r = 1, o = 1) {
  var s = function(_t) {
    return 360 * _t / (2 * te);
  }, c = function(_t) {
    return 2 * te * _t / 360;
  };
  t = new u(t), e = new u(e);
  const [f, a, l] = Array.from(t.lab()), [h, d, b] = Array.from(e.lab()), m = (f + h) / 2, M = K(j(a, 2) + j(l, 2)), R = K(j(d, 2) + j(b, 2)), g = (M + R) / 2, w = 0.5 * (1 - K(j(g, 7) / (j(g, 7) + j(25, 7)))), Y = a * (1 + w), C = d * (1 + w), P = K(j(Y, 2) + j(l, 2)), O = K(j(C, 2) + j(b, 2)), S = (P + O) / 2, E = s(Ut(l, Y)), i = s(Ut(b, C)), p = E >= 0 ? E : E + 360, x = i >= 0 ? i : i + 360, y = Jt(p - x) > 180 ? (p + x + 360) / 2 : (p + x) / 2, N = 1 - 0.17 * dt(c(y - 30)) + 0.24 * dt(c(2 * y)) + 0.32 * dt(c(3 * y + 6)) - 0.2 * dt(c(4 * y - 63));
  let k = x - p;
  k = Jt(k) <= 180 ? k : x <= p ? k + 360 : k - 360, k = 2 * K(P * O) * Qt(c(k) / 2);
  const G = h - f, F = O - P, it = 1 + 0.015 * j(m - 50, 2) / K(20 + j(m - 50, 2)), at = 1 + 0.045 * S, ut = 1 + 0.015 * S * N, Pe = 30 * y0(-j((y - 275) / 25, 2)), Oe = -(2 * K(j(S, 7) / (j(S, 7) + j(25, 7)))) * Qt(2 * c(Pe)), Ye = K(
    j(G / (n * it), 2) + j(F / (r * at), 2) + j(k / (o * ut), 2) + Oe * (F / (r * at)) * (k / (o * ut))
  );
  return w0(0, g0(100, Ye));
}
function _0(t, e, n = "lab") {
  t = new u(t), e = new u(e);
  const r = t.get(n), o = e.get(n);
  let s = 0;
  for (let c in r) {
    const f = (r[c] || 0) - (o[c] || 0);
    s += f * f;
  }
  return Math.sqrt(s);
}
const M0 = (...t) => {
  try {
    return new u(...t), true;
  } catch {
    return false;
  }
}, $0 = {
  cool() {
    return gt([A.hsl(180, 1, 0.9), A.hsl(250, 0.7, 0.4)]);
  },
  hot() {
    return gt(["#000", "#f00", "#ff0", "#fff"]).mode(
      "rgb"
    );
  }
}, Ot = {
  // sequential
  OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
  BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
  Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
  BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
  YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
  Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
  YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
  Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
  GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
  Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
  YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
  Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
  PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
  // diverging
  Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
  RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
  RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
  PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
  PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
  RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
  BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
  RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
  PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
  // qualitative
  Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
  Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
  Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
  Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
  Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
  Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
  Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
  Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
}, we = Object.keys(Ot), ee = new Map(we.map((t) => [t.toLowerCase(), t])), x0 = typeof Proxy == "function" ? new Proxy(Ot, {
  get(t, e) {
    const n = e.toLowerCase();
    if (ee.has(n))
      return t[ee.get(n)];
  },
  getOwnPropertyNames() {
    return Object.getOwnPropertyNames(we);
  }
}) : Ot, A0 = (...t) => {
  t = $(t, "cmyk");
  const [e, n, r, o] = t, s = t.length > 4 ? t[4] : 1;
  return o === 1 ? [0, 0, 0, s] : [
    e >= 1 ? 0 : 255 * (1 - e) * (1 - o),
    // r
    n >= 1 ? 0 : 255 * (1 - n) * (1 - o),
    // g
    r >= 1 ? 0 : 255 * (1 - r) * (1 - o),
    // b
    s
  ];
}, { max: ne } = Math, L0 = (...t) => {
  let [e, n, r] = $(t, "rgb");
  e = e / 255, n = n / 255, r = r / 255;
  const o = 1 - ne(e, ne(n, r)), s = o < 1 ? 1 / (1 - o) : 0, c = (1 - e - o) * s, f = (1 - n - o) * s, a = (1 - r - o) * s;
  return [c, f, a, o];
};
u.prototype.cmyk = function() {
  return L0(this._rgb);
};
const E0 = (...t) => new u(...t, "cmyk");
Object.assign(A, { cmyk: E0 });
_.format.cmyk = A0;
_.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = $(t, "cmyk"), L(t) === "array" && t.length === 4)
      return "cmyk";
  }
});
const R0 = (...t) => {
  const e = $(t, "hsla");
  let n = ot(t) || "lsa";
  return e[0] = X(e[0] || 0) + "deg", e[1] = X(e[1] * 100) + "%", e[2] = X(e[2] * 100) + "%", n === "hsla" || e.length > 3 && e[3] < 1 ? (e[3] = "/ " + (e.length > 3 ? e[3] : 1), n = "hsla") : e.length = 3, `${n.substr(0, 3)}(${e.join(" ")})`;
}, N0 = (...t) => {
  const e = $(t, "lab");
  let n = ot(t) || "lab";
  return e[0] = X(e[0]) + "%", e[1] = X(e[1]), e[2] = X(e[2]), n === "laba" || e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `lab(${e.join(" ")})`;
}, C0 = (...t) => {
  const e = $(t, "lch");
  let n = ot(t) || "lab";
  return e[0] = X(e[0]) + "%", e[1] = X(e[1]), e[2] = isNaN(e[2]) ? "none" : X(e[2]) + "deg", n === "lcha" || e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `lch(${e.join(" ")})`;
}, j0 = (...t) => {
  const e = $(t, "lab");
  return e[0] = X(e[0] * 100) + "%", e[1] = vt(e[1]), e[2] = vt(e[2]), e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `oklab(${e.join(" ")})`;
}, ye = (...t) => {
  const [e, n, r, ...o] = $(t, "rgb"), [s, c, f] = qt(e, n, r), [a, l, h] = be(s, c, f);
  return [a, l, h, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
}, v0 = (...t) => {
  const e = $(t, "lch");
  return e[0] = X(e[0] * 100) + "%", e[1] = vt(e[1]), e[2] = isNaN(e[2]) ? "none" : X(e[2]) + "deg", e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `oklch(${e.join(" ")})`;
}, { round: Ct } = Math, P0 = (...t) => {
  const e = $(t, "rgba");
  let n = ot(t) || "rgb";
  if (n.substr(0, 3) === "hsl")
    return R0(de(e), n);
  if (n.substr(0, 3) === "lab") {
    const r = lt();
    H("d50");
    const o = N0(Gt(e), n);
    return H(r), o;
  }
  if (n.substr(0, 3) === "lch") {
    const r = lt();
    H("d50");
    const o = C0(St(e), n);
    return H(r), o;
  }
  return n.substr(0, 5) === "oklab" ? j0(qt(e)) : n.substr(0, 5) === "oklch" ? v0(ye(e)) : (e[0] = Ct(e[0]), e[1] = Ct(e[1]), e[2] = Ct(e[2]), (n === "rgba" || e.length > 3 && e[3] < 1) && (e[3] = "/ " + (e.length > 3 ? e[3] : 1), n = "rgba"), `${n.substr(0, 3)}(${e.slice(0, n === "rgb" ? 3 : 4).join(" ")})`);
}, ke = (...t) => {
  t = $(t, "lch");
  const [e, n, r, ...o] = t, [s, c, f] = ue(e, n, r), [a, l, h] = Xt(s, c, f);
  return [a, l, h, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
}, D = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source, Z = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source, wt = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source, q = /\s*/.source, st = /\s+/.source, Zt = /\s*,\s*/.source, kt = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source, ft = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source, _e = new RegExp(
  "^rgba?\\(" + q + [D, D, D].join(st) + ft + "\\)$"
), Me = new RegExp(
  "^rgb\\(" + q + [D, D, D].join(Zt) + q + "\\)$"
), $e = new RegExp(
  "^rgba\\(" + q + [D, D, D, Z].join(Zt) + q + "\\)$"
), xe = new RegExp(
  "^hsla?\\(" + q + [kt, wt, wt].join(st) + ft + "\\)$"
), Ae = new RegExp(
  "^hsl?\\(" + q + [kt, wt, wt].join(Zt) + q + "\\)$"
), Le = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Ee = new RegExp(
  "^lab\\(" + q + [Z, Z, Z].join(st) + ft + "\\)$"
), Re = new RegExp(
  "^lch\\(" + q + [Z, Z, kt].join(st) + ft + "\\)$"
), Ne = new RegExp(
  "^oklab\\(" + q + [Z, Z, Z].join(st) + ft + "\\)$"
), Ce = new RegExp(
  "^oklch\\(" + q + [Z, Z, kt].join(st) + ft + "\\)$"
), { round: je } = Math, et = (t) => t.map((e, n) => n <= 2 ? J(je(e), 0, 255) : e), v = (t, e = 0, n = 100, r = false) => (typeof t == "string" && t.endsWith("%") && (t = parseFloat(t.substring(0, t.length - 1)) / 100, r ? t = e + (t + 1) * 0.5 * (n - e) : t = e + t * (n - e)), +t), B = (t, e) => t === "none" ? e : t, It = (t) => {
  if (t = t.toLowerCase().trim(), t === "transparent")
    return [0, 0, 0, 0];
  let e;
  if (_.format.named)
    try {
      return _.format.named(t);
    } catch {
    }
  if ((e = t.match(_e)) || (e = t.match(Me))) {
    let n = e.slice(1, 4);
    for (let o = 0; o < 3; o++)
      n[o] = +v(B(n[o], 0), 0, 255);
    n = et(n);
    const r = e[4] !== void 0 ? +v(e[4], 0, 1) : 1;
    return n[3] = r, n;
  }
  if (e = t.match($e)) {
    const n = e.slice(1, 5);
    for (let r = 0; r < 4; r++)
      n[r] = +v(n[r], 0, 255);
    return n;
  }
  if ((e = t.match(xe)) || (e = t.match(Ae))) {
    const n = e.slice(1, 4);
    n[0] = +B(n[0].replace("deg", ""), 0), n[1] = +v(B(n[1], 0), 0, 100) * 0.01, n[2] = +v(B(n[2], 0), 0, 100) * 0.01;
    const r = et(Pt(n)), o = e[4] !== void 0 ? +v(e[4], 0, 1) : 1;
    return r[3] = o, r;
  }
  if (e = t.match(Le)) {
    const n = e.slice(1, 4);
    n[1] *= 0.01, n[2] *= 0.01;
    const r = Pt(n);
    for (let o = 0; o < 3; o++)
      r[o] = je(r[o]);
    return r[3] = +e[4], r;
  }
  if (e = t.match(Ee)) {
    const n = e.slice(1, 4);
    n[0] = v(B(n[0], 0), 0, 100), n[1] = v(B(n[1], 0), -125, 125, true), n[2] = v(B(n[2], 0), -125, 125, true);
    const r = lt();
    H("d50");
    const o = et(zt(n));
    H(r);
    const s = e[4] !== void 0 ? +v(e[4], 0, 1) : 1;
    return o[3] = s, o;
  }
  if (e = t.match(Re)) {
    const n = e.slice(1, 4);
    n[0] = v(n[0], 0, 100), n[1] = v(B(n[1], 0), 0, 150, false), n[2] = +B(n[2].replace("deg", ""), 0);
    const r = lt();
    H("d50");
    const o = et(Bt(n));
    H(r);
    const s = e[4] !== void 0 ? +v(e[4], 0, 1) : 1;
    return o[3] = s, o;
  }
  if (e = t.match(Ne)) {
    const n = e.slice(1, 4);
    n[0] = v(B(n[0], 0), 0, 1), n[1] = v(B(n[1], 0), -0.4, 0.4, true), n[2] = v(B(n[2], 0), -0.4, 0.4, true);
    const r = et(Xt(n)), o = e[4] !== void 0 ? +v(e[4], 0, 1) : 1;
    return r[3] = o, r;
  }
  if (e = t.match(Ce)) {
    const n = e.slice(1, 4);
    n[0] = v(B(n[0], 0), 0, 1), n[1] = v(B(n[1], 0), 0, 0.4, false), n[2] = +B(n[2].replace("deg", ""), 0);
    const r = et(ke(n)), o = e[4] !== void 0 ? +v(e[4], 0, 1) : 1;
    return r[3] = o, r;
  }
};
It.test = (t) => (
  // modern
  _e.test(t) || xe.test(t) || Ee.test(t) || Re.test(t) || Ne.test(t) || Ce.test(t) || // legacy
  Me.test(t) || $e.test(t) || Ae.test(t) || Le.test(t) || t === "transparent"
);
u.prototype.css = function(t) {
  return P0(this._rgb, t);
};
const O0 = (...t) => new u(...t, "css");
A.css = O0;
_.format.css = It;
_.autodetect.push({
  p: 5,
  test: (t, ...e) => {
    if (!e.length && L(t) === "string" && It.test(t))
      return "css";
  }
});
_.format.gl = (...t) => {
  const e = $(t, "rgba");
  return e[0] *= 255, e[1] *= 255, e[2] *= 255, e;
};
const Y0 = (...t) => new u(...t, "gl");
A.gl = Y0;
u.prototype.gl = function() {
  const t = this._rgb;
  return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]];
};
u.prototype.hex = function(t) {
  return ae(this._rgb, t);
};
const z0 = (...t) => new u(...t, "hex");
A.hex = z0;
_.format.hex = fe;
_.autodetect.push({
  p: 4,
  test: (t, ...e) => {
    if (!e.length && L(t) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0)
      return "hex";
  }
});
const { log: pt } = Math, ve = (t) => {
  const e = t / 100;
  let n, r, o;
  return e < 66 ? (n = 255, r = e < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (r = e - 2) + 104.49216199393888 * pt(r), o = e < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (o = e - 10) + 115.67994401066147 * pt(o)) : (n = 351.97690566805693 + 0.114206453784165 * (n = e - 55) - 40.25366309332127 * pt(n), r = 325.4494125711974 + 0.07943456536662342 * (r = e - 50) - 28.0852963507957 * pt(r), o = 255), [n, r, o, 1];
}, { round: G0 } = Math, B0 = (...t) => {
  const e = $(t, "rgb"), n = e[0], r = e[2];
  let o = 1e3, s = 4e4;
  const c = 0.4;
  let f;
  for (; s - o > c; ) {
    f = (s + o) * 0.5;
    const a = ve(f);
    a[2] / a[0] >= r / n ? s = f : o = f;
  }
  return G0(f);
};
u.prototype.temp = u.prototype.kelvin = u.prototype.temperature = function() {
  return B0(this._rgb);
};
const jt = (...t) => new u(...t, "temp");
Object.assign(A, { temp: jt, kelvin: jt, temperature: jt });
_.format.temp = _.format.kelvin = _.format.temperature = ve;
u.prototype.oklch = function() {
  return ye(this._rgb);
};
const S0 = (...t) => new u(...t, "oklch");
Object.assign(A, { oklch: S0 });
_.format.oklch = ke;
_.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = $(t, "oklch"), L(t) === "array" && t.length === 3)
      return "oklch";
  }
});
Object.assign(A, {
  analyze: me,
  average: Xn,
  bezier: Wn,
  blend: I,
  brewer: x0,
  Color: u,
  colors: nt,
  contrast: h0,
  contrastAPCA: m0,
  cubehelix: c0,
  deltaE: k0,
  distance: _0,
  input: _,
  interpolate: rt,
  limits: ge,
  mix: rt,
  random: l0,
  scale: gt,
  scales: $0,
  valid: M0
});
const q0 = (t) => A.valid(t), Z0 = (t, e) => A.valid(t) ? A(t).alpha(e).css() : t;
export {
  Z0 as Z,
  q0 as q
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IudXRpbHMtQlNnX0RGT2gtQmpMSkF0VE4uanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2NvbG9yLnV0aWxzLUJTZ19ERk9oLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgbWluOiB6ZSwgbWF4OiBHZSB9ID0gTWF0aCwgSiA9ICh0LCBlID0gMCwgbiA9IDEpID0+IHplKEdlKGUsIHQpLCBuKSwgWXQgPSAodCkgPT4ge1xuICB0Ll9jbGlwcGVkID0gITEsIHQuX3VuY2xpcHBlZCA9IHQuc2xpY2UoMCk7XG4gIGZvciAobGV0IGUgPSAwOyBlIDw9IDM7IGUrKylcbiAgICBlIDwgMyA/ICgodFtlXSA8IDAgfHwgdFtlXSA+IDI1NSkgJiYgKHQuX2NsaXBwZWQgPSAhMCksIHRbZV0gPSBKKHRbZV0sIDAsIDI1NSkpIDogZSA9PT0gMyAmJiAodFtlXSA9IEoodFtlXSwgMCwgMSkpO1xuICByZXR1cm4gdDtcbn0sIHJlID0ge307XG5mb3IgKGxldCB0IG9mIFtcbiAgXCJCb29sZWFuXCIsXG4gIFwiTnVtYmVyXCIsXG4gIFwiU3RyaW5nXCIsXG4gIFwiRnVuY3Rpb25cIixcbiAgXCJBcnJheVwiLFxuICBcIkRhdGVcIixcbiAgXCJSZWdFeHBcIixcbiAgXCJVbmRlZmluZWRcIixcbiAgXCJOdWxsXCJcbl0pXG4gIHJlW2Bbb2JqZWN0ICR7dH1dYF0gPSB0LnRvTG93ZXJDYXNlKCk7XG5mdW5jdGlvbiBMKHQpIHtcbiAgcmV0dXJuIHJlW09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KV0gfHwgXCJvYmplY3RcIjtcbn1cbmNvbnN0ICQgPSAodCwgZSA9IG51bGwpID0+IHQubGVuZ3RoID49IDMgPyBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KSA6IEwodFswXSkgPT0gXCJvYmplY3RcIiAmJiBlID8gZS5zcGxpdChcIlwiKS5maWx0ZXIoKG4pID0+IHRbMF1bbl0gIT09IHZvaWQgMCkubWFwKChuKSA9PiB0WzBdW25dKSA6IHRbMF0uc2xpY2UoMCksIG90ID0gKHQpID0+IHtcbiAgaWYgKHQubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGUgPSB0Lmxlbmd0aCAtIDE7XG4gIHJldHVybiBMKHRbZV0pID09IFwic3RyaW5nXCIgPyB0W2VdLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufSwgeyBQSTogeXQsIG1pbjogb2UsIG1heDogY2UgfSA9IE1hdGgsIFggPSAodCkgPT4gTWF0aC5yb3VuZCh0ICogMTAwKSAvIDEwMCwgdnQgPSAodCkgPT4gTWF0aC5yb3VuZCh0ICogMTAwKSAvIDEwMCwgVyA9IHl0ICogMiwgTXQgPSB5dCAvIDMsIEJlID0geXQgLyAxODAsIFNlID0gMTgwIC8geXQ7XG5mdW5jdGlvbiBzZSh0KSB7XG4gIHJldHVybiBbLi4udC5zbGljZSgwLCAzKS5yZXZlcnNlKCksIC4uLnQuc2xpY2UoMyldO1xufVxuY29uc3QgXyA9IHtcbiAgZm9ybWF0OiB7fSxcbiAgYXV0b2RldGVjdDogW11cbn07XG5jbGFzcyB1IHtcbiAgY29uc3RydWN0b3IoLi4uZSkge1xuICAgIGNvbnN0IG4gPSB0aGlzO1xuICAgIGlmIChMKGVbMF0pID09PSBcIm9iamVjdFwiICYmIGVbMF0uY29uc3RydWN0b3IgJiYgZVswXS5jb25zdHJ1Y3RvciA9PT0gdGhpcy5jb25zdHJ1Y3RvcilcbiAgICAgIHJldHVybiBlWzBdO1xuICAgIGxldCByID0gb3QoZSksIG8gPSAhMTtcbiAgICBpZiAoIXIpIHtcbiAgICAgIG8gPSAhMCwgXy5zb3J0ZWQgfHwgKF8uYXV0b2RldGVjdCA9IF8uYXV0b2RldGVjdC5zb3J0KChzLCBjKSA9PiBjLnAgLSBzLnApLCBfLnNvcnRlZCA9ICEwKTtcbiAgICAgIGZvciAobGV0IHMgb2YgXy5hdXRvZGV0ZWN0KVxuICAgICAgICBpZiAociA9IHMudGVzdCguLi5lKSwgcikgYnJlYWs7XG4gICAgfVxuICAgIGlmIChfLmZvcm1hdFtyXSkge1xuICAgICAgY29uc3QgcyA9IF8uZm9ybWF0W3JdLmFwcGx5KFxuICAgICAgICBudWxsLFxuICAgICAgICBvID8gZSA6IGUuc2xpY2UoMCwgLTEpXG4gICAgICApO1xuICAgICAgbi5fcmdiID0gWXQocyk7XG4gICAgfSBlbHNlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIGZvcm1hdDogXCIgKyBlKTtcbiAgICBuLl9yZ2IubGVuZ3RoID09PSAzICYmIG4uX3JnYi5wdXNoKDEpO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBMKHRoaXMuaGV4KSA9PSBcImZ1bmN0aW9uXCIgPyB0aGlzLmhleCgpIDogYFske3RoaXMuX3JnYi5qb2luKFwiLFwiKX1dYDtcbiAgfVxufVxuY29uc3QgWGUgPSBcIjMuMi4wXCIsIEEgPSAoLi4udCkgPT4gbmV3IHUoLi4udCk7XG5BLnZlcnNpb24gPSBYZTtcbmNvbnN0IG50ID0ge1xuICBhbGljZWJsdWU6IFwiI2YwZjhmZlwiLFxuICBhbnRpcXVld2hpdGU6IFwiI2ZhZWJkN1wiLFxuICBhcXVhOiBcIiMwMGZmZmZcIixcbiAgYXF1YW1hcmluZTogXCIjN2ZmZmQ0XCIsXG4gIGF6dXJlOiBcIiNmMGZmZmZcIixcbiAgYmVpZ2U6IFwiI2Y1ZjVkY1wiLFxuICBiaXNxdWU6IFwiI2ZmZTRjNFwiLFxuICBibGFjazogXCIjMDAwMDAwXCIsXG4gIGJsYW5jaGVkYWxtb25kOiBcIiNmZmViY2RcIixcbiAgYmx1ZTogXCIjMDAwMGZmXCIsXG4gIGJsdWV2aW9sZXQ6IFwiIzhhMmJlMlwiLFxuICBicm93bjogXCIjYTUyYTJhXCIsXG4gIGJ1cmx5d29vZDogXCIjZGViODg3XCIsXG4gIGNhZGV0Ymx1ZTogXCIjNWY5ZWEwXCIsXG4gIGNoYXJ0cmV1c2U6IFwiIzdmZmYwMFwiLFxuICBjaG9jb2xhdGU6IFwiI2QyNjkxZVwiLFxuICBjb3JhbDogXCIjZmY3ZjUwXCIsXG4gIGNvcm5mbG93ZXJibHVlOiBcIiM2NDk1ZWRcIixcbiAgY29ybnNpbGs6IFwiI2ZmZjhkY1wiLFxuICBjcmltc29uOiBcIiNkYzE0M2NcIixcbiAgY3lhbjogXCIjMDBmZmZmXCIsXG4gIGRhcmtibHVlOiBcIiMwMDAwOGJcIixcbiAgZGFya2N5YW46IFwiIzAwOGI4YlwiLFxuICBkYXJrZ29sZGVucm9kOiBcIiNiODg2MGJcIixcbiAgZGFya2dyYXk6IFwiI2E5YTlhOVwiLFxuICBkYXJrZ3JlZW46IFwiIzAwNjQwMFwiLFxuICBkYXJrZ3JleTogXCIjYTlhOWE5XCIsXG4gIGRhcmtraGFraTogXCIjYmRiNzZiXCIsXG4gIGRhcmttYWdlbnRhOiBcIiM4YjAwOGJcIixcbiAgZGFya29saXZlZ3JlZW46IFwiIzU1NmIyZlwiLFxuICBkYXJrb3JhbmdlOiBcIiNmZjhjMDBcIixcbiAgZGFya29yY2hpZDogXCIjOTkzMmNjXCIsXG4gIGRhcmtyZWQ6IFwiIzhiMDAwMFwiLFxuICBkYXJrc2FsbW9uOiBcIiNlOTk2N2FcIixcbiAgZGFya3NlYWdyZWVuOiBcIiM4ZmJjOGZcIixcbiAgZGFya3NsYXRlYmx1ZTogXCIjNDgzZDhiXCIsXG4gIGRhcmtzbGF0ZWdyYXk6IFwiIzJmNGY0ZlwiLFxuICBkYXJrc2xhdGVncmV5OiBcIiMyZjRmNGZcIixcbiAgZGFya3R1cnF1b2lzZTogXCIjMDBjZWQxXCIsXG4gIGRhcmt2aW9sZXQ6IFwiIzk0MDBkM1wiLFxuICBkZWVwcGluazogXCIjZmYxNDkzXCIsXG4gIGRlZXBza3libHVlOiBcIiMwMGJmZmZcIixcbiAgZGltZ3JheTogXCIjNjk2OTY5XCIsXG4gIGRpbWdyZXk6IFwiIzY5Njk2OVwiLFxuICBkb2RnZXJibHVlOiBcIiMxZTkwZmZcIixcbiAgZmlyZWJyaWNrOiBcIiNiMjIyMjJcIixcbiAgZmxvcmFsd2hpdGU6IFwiI2ZmZmFmMFwiLFxuICBmb3Jlc3RncmVlbjogXCIjMjI4YjIyXCIsXG4gIGZ1Y2hzaWE6IFwiI2ZmMDBmZlwiLFxuICBnYWluc2Jvcm86IFwiI2RjZGNkY1wiLFxuICBnaG9zdHdoaXRlOiBcIiNmOGY4ZmZcIixcbiAgZ29sZDogXCIjZmZkNzAwXCIsXG4gIGdvbGRlbnJvZDogXCIjZGFhNTIwXCIsXG4gIGdyYXk6IFwiIzgwODA4MFwiLFxuICBncmVlbjogXCIjMDA4MDAwXCIsXG4gIGdyZWVueWVsbG93OiBcIiNhZGZmMmZcIixcbiAgZ3JleTogXCIjODA4MDgwXCIsXG4gIGhvbmV5ZGV3OiBcIiNmMGZmZjBcIixcbiAgaG90cGluazogXCIjZmY2OWI0XCIsXG4gIGluZGlhbnJlZDogXCIjY2Q1YzVjXCIsXG4gIGluZGlnbzogXCIjNGIwMDgyXCIsXG4gIGl2b3J5OiBcIiNmZmZmZjBcIixcbiAga2hha2k6IFwiI2YwZTY4Y1wiLFxuICBsYXNlcmxlbW9uOiBcIiNmZmZmNTRcIixcbiAgbGF2ZW5kZXI6IFwiI2U2ZTZmYVwiLFxuICBsYXZlbmRlcmJsdXNoOiBcIiNmZmYwZjVcIixcbiAgbGF3bmdyZWVuOiBcIiM3Y2ZjMDBcIixcbiAgbGVtb25jaGlmZm9uOiBcIiNmZmZhY2RcIixcbiAgbGlnaHRibHVlOiBcIiNhZGQ4ZTZcIixcbiAgbGlnaHRjb3JhbDogXCIjZjA4MDgwXCIsXG4gIGxpZ2h0Y3lhbjogXCIjZTBmZmZmXCIsXG4gIGxpZ2h0Z29sZGVucm9kOiBcIiNmYWZhZDJcIixcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFwiI2ZhZmFkMlwiLFxuICBsaWdodGdyYXk6IFwiI2QzZDNkM1wiLFxuICBsaWdodGdyZWVuOiBcIiM5MGVlOTBcIixcbiAgbGlnaHRncmV5OiBcIiNkM2QzZDNcIixcbiAgbGlnaHRwaW5rOiBcIiNmZmI2YzFcIixcbiAgbGlnaHRzYWxtb246IFwiI2ZmYTA3YVwiLFxuICBsaWdodHNlYWdyZWVuOiBcIiMyMGIyYWFcIixcbiAgbGlnaHRza3libHVlOiBcIiM4N2NlZmFcIixcbiAgbGlnaHRzbGF0ZWdyYXk6IFwiIzc3ODg5OVwiLFxuICBsaWdodHNsYXRlZ3JleTogXCIjNzc4ODk5XCIsXG4gIGxpZ2h0c3RlZWxibHVlOiBcIiNiMGM0ZGVcIixcbiAgbGlnaHR5ZWxsb3c6IFwiI2ZmZmZlMFwiLFxuICBsaW1lOiBcIiMwMGZmMDBcIixcbiAgbGltZWdyZWVuOiBcIiMzMmNkMzJcIixcbiAgbGluZW46IFwiI2ZhZjBlNlwiLFxuICBtYWdlbnRhOiBcIiNmZjAwZmZcIixcbiAgbWFyb29uOiBcIiM4MDAwMDBcIixcbiAgbWFyb29uMjogXCIjN2YwMDAwXCIsXG4gIG1hcm9vbjM6IFwiI2IwMzA2MFwiLFxuICBtZWRpdW1hcXVhbWFyaW5lOiBcIiM2NmNkYWFcIixcbiAgbWVkaXVtYmx1ZTogXCIjMDAwMGNkXCIsXG4gIG1lZGl1bW9yY2hpZDogXCIjYmE1NWQzXCIsXG4gIG1lZGl1bXB1cnBsZTogXCIjOTM3MGRiXCIsXG4gIG1lZGl1bXNlYWdyZWVuOiBcIiMzY2IzNzFcIixcbiAgbWVkaXVtc2xhdGVibHVlOiBcIiM3YjY4ZWVcIixcbiAgbWVkaXVtc3ByaW5nZ3JlZW46IFwiIzAwZmE5YVwiLFxuICBtZWRpdW10dXJxdW9pc2U6IFwiIzQ4ZDFjY1wiLFxuICBtZWRpdW12aW9sZXRyZWQ6IFwiI2M3MTU4NVwiLFxuICBtaWRuaWdodGJsdWU6IFwiIzE5MTk3MFwiLFxuICBtaW50Y3JlYW06IFwiI2Y1ZmZmYVwiLFxuICBtaXN0eXJvc2U6IFwiI2ZmZTRlMVwiLFxuICBtb2NjYXNpbjogXCIjZmZlNGI1XCIsXG4gIG5hdmFqb3doaXRlOiBcIiNmZmRlYWRcIixcbiAgbmF2eTogXCIjMDAwMDgwXCIsXG4gIG9sZGxhY2U6IFwiI2ZkZjVlNlwiLFxuICBvbGl2ZTogXCIjODA4MDAwXCIsXG4gIG9saXZlZHJhYjogXCIjNmI4ZTIzXCIsXG4gIG9yYW5nZTogXCIjZmZhNTAwXCIsXG4gIG9yYW5nZXJlZDogXCIjZmY0NTAwXCIsXG4gIG9yY2hpZDogXCIjZGE3MGQ2XCIsXG4gIHBhbGVnb2xkZW5yb2Q6IFwiI2VlZThhYVwiLFxuICBwYWxlZ3JlZW46IFwiIzk4ZmI5OFwiLFxuICBwYWxldHVycXVvaXNlOiBcIiNhZmVlZWVcIixcbiAgcGFsZXZpb2xldHJlZDogXCIjZGI3MDkzXCIsXG4gIHBhcGF5YXdoaXA6IFwiI2ZmZWZkNVwiLFxuICBwZWFjaHB1ZmY6IFwiI2ZmZGFiOVwiLFxuICBwZXJ1OiBcIiNjZDg1M2ZcIixcbiAgcGluazogXCIjZmZjMGNiXCIsXG4gIHBsdW06IFwiI2RkYTBkZFwiLFxuICBwb3dkZXJibHVlOiBcIiNiMGUwZTZcIixcbiAgcHVycGxlOiBcIiM4MDAwODBcIixcbiAgcHVycGxlMjogXCIjN2YwMDdmXCIsXG4gIHB1cnBsZTM6IFwiI2EwMjBmMFwiLFxuICByZWJlY2NhcHVycGxlOiBcIiM2NjMzOTlcIixcbiAgcmVkOiBcIiNmZjAwMDBcIixcbiAgcm9zeWJyb3duOiBcIiNiYzhmOGZcIixcbiAgcm95YWxibHVlOiBcIiM0MTY5ZTFcIixcbiAgc2FkZGxlYnJvd246IFwiIzhiNDUxM1wiLFxuICBzYWxtb246IFwiI2ZhODA3MlwiLFxuICBzYW5keWJyb3duOiBcIiNmNGE0NjBcIixcbiAgc2VhZ3JlZW46IFwiIzJlOGI1N1wiLFxuICBzZWFzaGVsbDogXCIjZmZmNWVlXCIsXG4gIHNpZW5uYTogXCIjYTA1MjJkXCIsXG4gIHNpbHZlcjogXCIjYzBjMGMwXCIsXG4gIHNreWJsdWU6IFwiIzg3Y2VlYlwiLFxuICBzbGF0ZWJsdWU6IFwiIzZhNWFjZFwiLFxuICBzbGF0ZWdyYXk6IFwiIzcwODA5MFwiLFxuICBzbGF0ZWdyZXk6IFwiIzcwODA5MFwiLFxuICBzbm93OiBcIiNmZmZhZmFcIixcbiAgc3ByaW5nZ3JlZW46IFwiIzAwZmY3ZlwiLFxuICBzdGVlbGJsdWU6IFwiIzQ2ODJiNFwiLFxuICB0YW46IFwiI2QyYjQ4Y1wiLFxuICB0ZWFsOiBcIiMwMDgwODBcIixcbiAgdGhpc3RsZTogXCIjZDhiZmQ4XCIsXG4gIHRvbWF0bzogXCIjZmY2MzQ3XCIsXG4gIHR1cnF1b2lzZTogXCIjNDBlMGQwXCIsXG4gIHZpb2xldDogXCIjZWU4MmVlXCIsXG4gIHdoZWF0OiBcIiNmNWRlYjNcIixcbiAgd2hpdGU6IFwiI2ZmZmZmZlwiLFxuICB3aGl0ZXNtb2tlOiBcIiNmNWY1ZjVcIixcbiAgeWVsbG93OiBcIiNmZmZmMDBcIixcbiAgeWVsbG93Z3JlZW46IFwiIzlhY2QzMlwiXG59LCBxZSA9IC9eIz8oW0EtRmEtZjAtOV17Nn18W0EtRmEtZjAtOV17M30pJC8sIFplID0gL14jPyhbQS1GYS1mMC05XXs4fXxbQS1GYS1mMC05XXs0fSkkLywgZmUgPSAodCkgPT4ge1xuICBpZiAodC5tYXRjaChxZSkpIHtcbiAgICAodC5sZW5ndGggPT09IDQgfHwgdC5sZW5ndGggPT09IDcpICYmICh0ID0gdC5zdWJzdHIoMSkpLCB0Lmxlbmd0aCA9PT0gMyAmJiAodCA9IHQuc3BsaXQoXCJcIiksIHQgPSB0WzBdICsgdFswXSArIHRbMV0gKyB0WzFdICsgdFsyXSArIHRbMl0pO1xuICAgIGNvbnN0IGUgPSBwYXJzZUludCh0LCAxNiksIG4gPSBlID4+IDE2LCByID0gZSA+PiA4ICYgMjU1LCBvID0gZSAmIDI1NTtcbiAgICByZXR1cm4gW24sIHIsIG8sIDFdO1xuICB9XG4gIGlmICh0Lm1hdGNoKFplKSkge1xuICAgICh0Lmxlbmd0aCA9PT0gNSB8fCB0Lmxlbmd0aCA9PT0gOSkgJiYgKHQgPSB0LnN1YnN0cigxKSksIHQubGVuZ3RoID09PSA0ICYmICh0ID0gdC5zcGxpdChcIlwiKSwgdCA9IHRbMF0gKyB0WzBdICsgdFsxXSArIHRbMV0gKyB0WzJdICsgdFsyXSArIHRbM10gKyB0WzNdKTtcbiAgICBjb25zdCBlID0gcGFyc2VJbnQodCwgMTYpLCBuID0gZSA+PiAyNCAmIDI1NSwgciA9IGUgPj4gMTYgJiAyNTUsIG8gPSBlID4+IDggJiAyNTUsIHMgPSBNYXRoLnJvdW5kKChlICYgMjU1KSAvIDI1NSAqIDEwMCkgLyAxMDA7XG4gICAgcmV0dXJuIFtuLCByLCBvLCBzXTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gaGV4IGNvbG9yOiAke3R9YCk7XG59LCB7IHJvdW5kOiBidCB9ID0gTWF0aCwgYWUgPSAoLi4udCkgPT4ge1xuICBsZXQgW2UsIG4sIHIsIG9dID0gJCh0LCBcInJnYmFcIiksIHMgPSBvdCh0KSB8fCBcImF1dG9cIjtcbiAgbyA9PT0gdm9pZCAwICYmIChvID0gMSksIHMgPT09IFwiYXV0b1wiICYmIChzID0gbyA8IDEgPyBcInJnYmFcIiA6IFwicmdiXCIpLCBlID0gYnQoZSksIG4gPSBidChuKSwgciA9IGJ0KHIpO1xuICBsZXQgZiA9IFwiMDAwMDAwXCIgKyAoZSA8PCAxNiB8IG4gPDwgOCB8IHIpLnRvU3RyaW5nKDE2KTtcbiAgZiA9IGYuc3Vic3RyKGYubGVuZ3RoIC0gNik7XG4gIGxldCBhID0gXCIwXCIgKyBidChvICogMjU1KS50b1N0cmluZygxNik7XG4gIHN3aXRjaCAoYSA9IGEuc3Vic3RyKGEubGVuZ3RoIC0gMiksIHMudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgXCJyZ2JhXCI6XG4gICAgICByZXR1cm4gYCMke2Z9JHthfWA7XG4gICAgY2FzZSBcImFyZ2JcIjpcbiAgICAgIHJldHVybiBgIyR7YX0ke2Z9YDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGAjJHtmfWA7XG4gIH1cbn07XG51LnByb3RvdHlwZS5uYW1lID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHQgPSBhZSh0aGlzLl9yZ2IsIFwicmdiXCIpO1xuICBmb3IgKGxldCBlIG9mIE9iamVjdC5rZXlzKG50KSlcbiAgICBpZiAobnRbZV0gPT09IHQpIHJldHVybiBlLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiB0O1xufTtcbl8uZm9ybWF0Lm5hbWVkID0gKHQpID0+IHtcbiAgaWYgKHQgPSB0LnRvTG93ZXJDYXNlKCksIG50W3RdKSByZXR1cm4gZmUobnRbdF0pO1xuICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIGNvbG9yIG5hbWU6IFwiICsgdCk7XG59O1xuXy5hdXRvZGV0ZWN0LnB1c2goe1xuICBwOiA1LFxuICB0ZXN0OiAodCwgLi4uZSkgPT4ge1xuICAgIGlmICghZS5sZW5ndGggJiYgTCh0KSA9PT0gXCJzdHJpbmdcIiAmJiBudFt0LnRvTG93ZXJDYXNlKCldKVxuICAgICAgcmV0dXJuIFwibmFtZWRcIjtcbiAgfVxufSk7XG51LnByb3RvdHlwZS5hbHBoYSA9IGZ1bmN0aW9uKHQsIGUgPSAhMSkge1xuICByZXR1cm4gdCAhPT0gdm9pZCAwICYmIEwodCkgPT09IFwibnVtYmVyXCIgPyBlID8gKHRoaXMuX3JnYlszXSA9IHQsIHRoaXMpIDogbmV3IHUoW3RoaXMuX3JnYlswXSwgdGhpcy5fcmdiWzFdLCB0aGlzLl9yZ2JbMl0sIHRdLCBcInJnYlwiKSA6IHRoaXMuX3JnYlszXTtcbn07XG51LnByb3RvdHlwZS5jbGlwcGVkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9yZ2IuX2NsaXBwZWQgfHwgITE7XG59O1xuY29uc3QgVCA9IHtcbiAgLy8gQ29ycmVzcG9uZHMgcm91Z2hseSB0byBSR0IgYnJpZ2h0ZXIvZGFya2VyXG4gIEtuOiAxOCxcbiAgLy8gRDY1IHN0YW5kYXJkIHJlZmVyZW50XG4gIGxhYldoaXRlUG9pbnQ6IFwiZDY1XCIsXG4gIFhuOiAwLjk1MDQ3LFxuICBZbjogMSxcbiAgWm46IDEuMDg4ODMsXG4gIGtFOiAyMTYgLyAyNDM4OSxcbiAga0tFOiA4LFxuICBrSzogMjQzODkgLyAyNyxcbiAgUmVmV2hpdGVSR0I6IHtcbiAgICAvLyBzUkdCXG4gICAgWDogMC45NTA0NyxcbiAgICBZOiAxLFxuICAgIFo6IDEuMDg4ODNcbiAgfSxcbiAgTXR4UkdCMlhZWjoge1xuICAgIG0wMDogMC40MTI0NTY0MzkwODk2OTIyLFxuICAgIG0wMTogMC4yMTI2NzI4NTE0MDU2MjI1MyxcbiAgICBtMDI6IDAuMDE5MzMzODk1NTgyMzI5MyxcbiAgICBtMTA6IDAuMzU3NTc2MDc3NjQzOTA5LFxuICAgIG0xMTogMC43MTUxNTIxNTUyODc4MTgsXG4gICAgbTEyOiAwLjExOTE5MjAyNTg4MTMwMjk3LFxuICAgIG0yMDogMC4xODA0Mzc0ODMyNjYzOTg5NCxcbiAgICBtMjE6IDAuMDcyMTc0OTkzMzA2NTU5NTgsXG4gICAgbTIyOiAwLjk1MDMwNDA3ODUzNjM2NzlcbiAgfSxcbiAgTXR4WFlaMlJHQjoge1xuICAgIG0wMDogMy4yNDA0NTQxNjIxMTQxMDQ1LFxuICAgIG0wMTogLTAuOTY5MjY2MDMwNTA1MTg2OCxcbiAgICBtMDI6IDAuMDU1NjQzNDMwOTU5MTE0NzI2LFxuICAgIG0xMDogLTEuNTM3MTM4NTEyNzk3NzE2NixcbiAgICBtMTE6IDEuODc2MDEwODQ1NDQ2Njk0MixcbiAgICBtMTI6IC0wLjIwNDAyNTkxMzUxNjc1MzgsXG4gICAgbTIwOiAtMC40OTg1MzE0MDk1NTYwMTYsXG4gICAgbTIxOiAwLjA0MTU1NjAxNzUzMDM0OTgzNCxcbiAgICBtMjI6IDEuMDU3MjI1MTg4MjIzMTc5MVxuICB9LFxuICAvLyB1c2VkIGluIHJnYjJ4eXpcbiAgQXM6IDAuOTQxNDI4NTM1MDAwMDAwMSxcbiAgQnM6IDEuMDQwNDE3NDY3LFxuICBDczogMS4wODk1MzI2NTEsXG4gIE10eEFkYXB0TWE6IHtcbiAgICBtMDA6IDAuODk1MSxcbiAgICBtMDE6IC0wLjc1MDIsXG4gICAgbTAyOiAwLjAzODksXG4gICAgbTEwOiAwLjI2NjQsXG4gICAgbTExOiAxLjcxMzUsXG4gICAgbTEyOiAtMC4wNjg1LFxuICAgIG0yMDogLTAuMTYxNCxcbiAgICBtMjE6IDAuMDM2NyxcbiAgICBtMjI6IDEuMDI5NlxuICB9LFxuICBNdHhBZGFwdE1hSToge1xuICAgIG0wMDogMC45ODY5OTI5MDU0NjY3MTIzLFxuICAgIG0wMTogMC40MzIzMDUyNjk3MjMzOTQ1NixcbiAgICBtMDI6IC0wLjAwODUyODY2NDU3NTE3NzMyOCxcbiAgICBtMTA6IC0wLjE0NzA1NDI1NjQyMDk5MDEzLFxuICAgIG0xMTogMC41MTgzNjAyNzE1MzY3Nzc2LFxuICAgIG0xMjogMC4wNDAwNDI4MjE2NTQwODQ4NyxcbiAgICBtMjA6IDAuMTU5OTYyNjUxNjYzNzMxMjUsXG4gICAgbTIxOiAwLjA0OTI5MTIyODIxMjg1NTYsXG4gICAgbTIyOiAwLjk2ODQ4NjY5NTc4NzU1MDJcbiAgfVxufSwgSWUgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbXG4gIC8vIEFTVE0gRTMwOC0wMVxuICBbXCJhXCIsIFsxLjA5ODUsIDAuMzU1ODVdXSxcbiAgLy8gV3lzemVja2kgJiBTdGlsZXMsIHAuIDc2OVxuICBbXCJiXCIsIFsxLjA5ODUsIDAuMzU1ODVdXSxcbiAgLy8gQyBBU1RNIEUzMDgtMDFcbiAgW1wiY1wiLCBbMC45ODA3NCwgMS4xODIzMl1dLFxuICAvLyBENTAgKEFTVE0gRTMwOC0wMSlcbiAgW1wiZDUwXCIsIFswLjk2NDIyLCAwLjgyNTIxXV0sXG4gIC8vIEQ1NSAoQVNUTSBFMzA4LTAxKVxuICBbXCJkNTVcIiwgWzAuOTU2ODIsIDAuOTIxNDldXSxcbiAgLy8gRDY1IChBU1RNIEUzMDgtMDEpXG4gIFtcImQ2NVwiLCBbMC45NTA0NywgMS4wODg4M11dLFxuICAvLyBFIChBU1RNIEUzMDgtMDEpXG4gIFtcImVcIiwgWzEsIDEsIDFdXSxcbiAgLy8gRjIgKEFTVE0gRTMwOC0wMSlcbiAgW1wiZjJcIiwgWzAuOTkxODYsIDAuNjczOTNdXSxcbiAgLy8gRjcgKEFTVE0gRTMwOC0wMSlcbiAgW1wiZjdcIiwgWzAuOTUwNDEsIDEuMDg3NDddXSxcbiAgLy8gRjExIChBU1RNIEUzMDgtMDEpXG4gIFtcImYxMVwiLCBbMS4wMDk2MiwgMC42NDM1XV0sXG4gIFtcImljY1wiLCBbMC45NjQyMiwgMC44MjUyMV1dXG5dKTtcbmZ1bmN0aW9uIEgodCkge1xuICBjb25zdCBlID0gSWUuZ2V0KFN0cmluZyh0KS50b0xvd2VyQ2FzZSgpKTtcbiAgaWYgKCFlKVxuICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gTGFiIGlsbHVtaW5hbnQgXCIgKyB0KTtcbiAgVC5sYWJXaGl0ZVBvaW50ID0gdCwgVC5YbiA9IGVbMF0sIFQuWm4gPSBlWzFdO1xufVxuZnVuY3Rpb24gbHQoKSB7XG4gIHJldHVybiBULmxhYldoaXRlUG9pbnQ7XG59XG5jb25zdCB6dCA9ICguLi50KSA9PiB7XG4gIHQgPSAkKHQsIFwibGFiXCIpO1xuICBjb25zdCBbZSwgbiwgcl0gPSB0LCBbbywgcywgY10gPSBUZShlLCBuLCByKSwgW2YsIGEsIGxdID0gbGUobywgcywgYyk7XG4gIHJldHVybiBbZiwgYSwgbCwgdC5sZW5ndGggPiAzID8gdFszXSA6IDFdO1xufSwgVGUgPSAodCwgZSwgbikgPT4ge1xuICBjb25zdCB7IGtFOiByLCBrSzogbywga0tFOiBzLCBYbjogYywgWW46IGYsIFpuOiBhIH0gPSBULCBsID0gKHQgKyAxNikgLyAxMTYsIGggPSAyZS0zICogZSArIGwsIGQgPSBsIC0gNWUtMyAqIG4sIGIgPSBoICogaCAqIGgsIG0gPSBkICogZCAqIGQsIE0gPSBiID4gciA/IGIgOiAoMTE2ICogaCAtIDE2KSAvIG8sIFIgPSB0ID4gcyA/IE1hdGgucG93KCh0ICsgMTYpIC8gMTE2LCAzKSA6IHQgLyBvLCBnID0gbSA+IHIgPyBtIDogKDExNiAqIGQgLSAxNikgLyBvLCB3ID0gTSAqIGMsIFkgPSBSICogZiwgQyA9IGcgKiBhO1xuICByZXR1cm4gW3csIFksIENdO1xufSwgJHQgPSAodCkgPT4ge1xuICBjb25zdCBlID0gTWF0aC5zaWduKHQpO1xuICByZXR1cm4gdCA9IE1hdGguYWJzKHQpLCAodCA8PSAzMTMwOGUtNyA/IHQgKiAxMi45MiA6IDEuMDU1ICogTWF0aC5wb3codCwgMSAvIDIuNCkgLSAwLjA1NSkgKiBlO1xufSwgbGUgPSAodCwgZSwgbikgPT4ge1xuICBjb25zdCB7IE10eEFkYXB0TWE6IHIsIE10eEFkYXB0TWFJOiBvLCBNdHhYWVoyUkdCOiBzLCBSZWZXaGl0ZVJHQjogYywgWG46IGYsIFluOiBhLCBabjogbCB9ID0gVCwgaCA9IGYgKiByLm0wMCArIGEgKiByLm0xMCArIGwgKiByLm0yMCwgZCA9IGYgKiByLm0wMSArIGEgKiByLm0xMSArIGwgKiByLm0yMSwgYiA9IGYgKiByLm0wMiArIGEgKiByLm0xMiArIGwgKiByLm0yMiwgbSA9IGMuWCAqIHIubTAwICsgYy5ZICogci5tMTAgKyBjLlogKiByLm0yMCwgTSA9IGMuWCAqIHIubTAxICsgYy5ZICogci5tMTEgKyBjLlogKiByLm0yMSwgUiA9IGMuWCAqIHIubTAyICsgYy5ZICogci5tMTIgKyBjLlogKiByLm0yMiwgZyA9ICh0ICogci5tMDAgKyBlICogci5tMTAgKyBuICogci5tMjApICogKG0gLyBoKSwgdyA9ICh0ICogci5tMDEgKyBlICogci5tMTEgKyBuICogci5tMjEpICogKE0gLyBkKSwgWSA9ICh0ICogci5tMDIgKyBlICogci5tMTIgKyBuICogci5tMjIpICogKFIgLyBiKSwgQyA9IGcgKiBvLm0wMCArIHcgKiBvLm0xMCArIFkgKiBvLm0yMCwgUCA9IGcgKiBvLm0wMSArIHcgKiBvLm0xMSArIFkgKiBvLm0yMSwgTyA9IGcgKiBvLm0wMiArIHcgKiBvLm0xMiArIFkgKiBvLm0yMiwgUyA9ICR0KFxuICAgIEMgKiBzLm0wMCArIFAgKiBzLm0xMCArIE8gKiBzLm0yMFxuICApLCBFID0gJHQoXG4gICAgQyAqIHMubTAxICsgUCAqIHMubTExICsgTyAqIHMubTIxXG4gICksIGkgPSAkdChcbiAgICBDICogcy5tMDIgKyBQICogcy5tMTIgKyBPICogcy5tMjJcbiAgKTtcbiAgcmV0dXJuIFtTICogMjU1LCBFICogMjU1LCBpICogMjU1XTtcbn0sIEd0ID0gKC4uLnQpID0+IHtcbiAgY29uc3QgW2UsIG4sIHIsIC4uLm9dID0gJCh0LCBcInJnYlwiKSwgW3MsIGMsIGZdID0gaWUoZSwgbiwgciksIFthLCBsLCBoXSA9IEtlKHMsIGMsIGYpO1xuICByZXR1cm4gW2EsIGwsIGgsIC4uLm8ubGVuZ3RoID4gMCAmJiBvWzBdIDwgMSA/IFtvWzBdXSA6IFtdXTtcbn07XG5mdW5jdGlvbiBLZSh0LCBlLCBuKSB7XG4gIGNvbnN0IHsgWG46IHIsIFluOiBvLCBabjogcywga0U6IGMsIGtLOiBmIH0gPSBULCBhID0gdCAvIHIsIGwgPSBlIC8gbywgaCA9IG4gLyBzLCBkID0gYSA+IGMgPyBNYXRoLnBvdyhhLCAxIC8gMykgOiAoZiAqIGEgKyAxNikgLyAxMTYsIGIgPSBsID4gYyA/IE1hdGgucG93KGwsIDEgLyAzKSA6IChmICogbCArIDE2KSAvIDExNiwgbSA9IGggPiBjID8gTWF0aC5wb3coaCwgMSAvIDMpIDogKGYgKiBoICsgMTYpIC8gMTE2O1xuICByZXR1cm4gWzExNiAqIGIgLSAxNiwgNTAwICogKGQgLSBiKSwgMjAwICogKGIgLSBtKV07XG59XG5mdW5jdGlvbiB4dCh0KSB7XG4gIGNvbnN0IGUgPSBNYXRoLnNpZ24odCk7XG4gIHJldHVybiB0ID0gTWF0aC5hYnModCksICh0IDw9IDAuMDQwNDUgPyB0IC8gMTIuOTIgOiBNYXRoLnBvdygodCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpKSAqIGU7XG59XG5jb25zdCBpZSA9ICh0LCBlLCBuKSA9PiB7XG4gIHQgPSB4dCh0IC8gMjU1KSwgZSA9IHh0KGUgLyAyNTUpLCBuID0geHQobiAvIDI1NSk7XG4gIGNvbnN0IHsgTXR4UkdCMlhZWjogciwgTXR4QWRhcHRNYTogbywgTXR4QWRhcHRNYUk6IHMsIFhuOiBjLCBZbjogZiwgWm46IGEsIEFzOiBsLCBCczogaCwgQ3M6IGQgfSA9IFQ7XG4gIGxldCBiID0gdCAqIHIubTAwICsgZSAqIHIubTEwICsgbiAqIHIubTIwLCBtID0gdCAqIHIubTAxICsgZSAqIHIubTExICsgbiAqIHIubTIxLCBNID0gdCAqIHIubTAyICsgZSAqIHIubTEyICsgbiAqIHIubTIyO1xuICBjb25zdCBSID0gYyAqIG8ubTAwICsgZiAqIG8ubTEwICsgYSAqIG8ubTIwLCBnID0gYyAqIG8ubTAxICsgZiAqIG8ubTExICsgYSAqIG8ubTIxLCB3ID0gYyAqIG8ubTAyICsgZiAqIG8ubTEyICsgYSAqIG8ubTIyO1xuICBsZXQgWSA9IGIgKiBvLm0wMCArIG0gKiBvLm0xMCArIE0gKiBvLm0yMCwgQyA9IGIgKiBvLm0wMSArIG0gKiBvLm0xMSArIE0gKiBvLm0yMSwgUCA9IGIgKiBvLm0wMiArIG0gKiBvLm0xMiArIE0gKiBvLm0yMjtcbiAgcmV0dXJuIFkgKj0gUiAvIGwsIEMgKj0gZyAvIGgsIFAgKj0gdyAvIGQsIGIgPSBZICogcy5tMDAgKyBDICogcy5tMTAgKyBQICogcy5tMjAsIG0gPSBZICogcy5tMDEgKyBDICogcy5tMTEgKyBQICogcy5tMjEsIE0gPSBZICogcy5tMDIgKyBDICogcy5tMTIgKyBQICogcy5tMjIsIFtiLCBtLCBNXTtcbn07XG51LnByb3RvdHlwZS5sYWIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEd0KHRoaXMuX3JnYik7XG59O1xuY29uc3QgV2UgPSAoLi4udCkgPT4gbmV3IHUoLi4udCwgXCJsYWJcIik7XG5PYmplY3QuYXNzaWduKEEsIHsgbGFiOiBXZSwgZ2V0TGFiV2hpdGVQb2ludDogbHQsIHNldExhYldoaXRlUG9pbnQ6IEggfSk7XG5fLmZvcm1hdC5sYWIgPSB6dDtcbl8uYXV0b2RldGVjdC5wdXNoKHtcbiAgcDogMixcbiAgdGVzdDogKC4uLnQpID0+IHtcbiAgICBpZiAodCA9ICQodCwgXCJsYWJcIiksIEwodCkgPT09IFwiYXJyYXlcIiAmJiB0Lmxlbmd0aCA9PT0gMylcbiAgICAgIHJldHVybiBcImxhYlwiO1xuICB9XG59KTtcbnUucHJvdG90eXBlLmRhcmtlbiA9IGZ1bmN0aW9uKHQgPSAxKSB7XG4gIGNvbnN0IGUgPSB0aGlzLCBuID0gZS5sYWIoKTtcbiAgcmV0dXJuIG5bMF0gLT0gVC5LbiAqIHQsIG5ldyB1KG4sIFwibGFiXCIpLmFscGhhKGUuYWxwaGEoKSwgITApO1xufTtcbnUucHJvdG90eXBlLmJyaWdodGVuID0gZnVuY3Rpb24odCA9IDEpIHtcbiAgcmV0dXJuIHRoaXMuZGFya2VuKC10KTtcbn07XG51LnByb3RvdHlwZS5kYXJrZXIgPSB1LnByb3RvdHlwZS5kYXJrZW47XG51LnByb3RvdHlwZS5icmlnaHRlciA9IHUucHJvdG90eXBlLmJyaWdodGVuO1xudS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24odCkge1xuICBjb25zdCBbZSwgbl0gPSB0LnNwbGl0KFwiLlwiKSwgciA9IHRoaXNbZV0oKTtcbiAgaWYgKG4pIHtcbiAgICBjb25zdCBvID0gZS5pbmRleE9mKG4pIC0gKGUuc3Vic3RyKDAsIDIpID09PSBcIm9rXCIgPyAyIDogMCk7XG4gICAgaWYgKG8gPiAtMSkgcmV0dXJuIHJbb107XG4gICAgdGhyb3cgbmV3IEVycm9yKGB1bmtub3duIGNoYW5uZWwgJHtufSBpbiBtb2RlICR7ZX1gKTtcbiAgfSBlbHNlXG4gICAgcmV0dXJuIHI7XG59O1xuY29uc3QgeyBwb3c6IEhlIH0gPSBNYXRoLCBEZSA9IDFlLTcsIEZlID0gMjA7XG51LnByb3RvdHlwZS5sdW1pbmFuY2UgPSBmdW5jdGlvbih0LCBlID0gXCJyZ2JcIikge1xuICBpZiAodCAhPT0gdm9pZCAwICYmIEwodCkgPT09IFwibnVtYmVyXCIpIHtcbiAgICBpZiAodCA9PT0gMClcbiAgICAgIHJldHVybiBuZXcgdShbMCwgMCwgMCwgdGhpcy5fcmdiWzNdXSwgXCJyZ2JcIik7XG4gICAgaWYgKHQgPT09IDEpXG4gICAgICByZXR1cm4gbmV3IHUoWzI1NSwgMjU1LCAyNTUsIHRoaXMuX3JnYlszXV0sIFwicmdiXCIpO1xuICAgIGxldCBuID0gdGhpcy5sdW1pbmFuY2UoKSwgciA9IEZlO1xuICAgIGNvbnN0IG8gPSAoYywgZikgPT4ge1xuICAgICAgY29uc3QgYSA9IGMuaW50ZXJwb2xhdGUoZiwgMC41LCBlKSwgbCA9IGEubHVtaW5hbmNlKCk7XG4gICAgICByZXR1cm4gTWF0aC5hYnModCAtIGwpIDwgRGUgfHwgIXItLSA/IGEgOiBsID4gdCA/IG8oYywgYSkgOiBvKGEsIGYpO1xuICAgIH0sIHMgPSAobiA+IHQgPyBvKG5ldyB1KFswLCAwLCAwXSksIHRoaXMpIDogbyh0aGlzLCBuZXcgdShbMjU1LCAyNTUsIDI1NV0pKSkucmdiKCk7XG4gICAgcmV0dXJuIG5ldyB1KFsuLi5zLCB0aGlzLl9yZ2JbM11dKTtcbiAgfVxuICByZXR1cm4gVmUoLi4udGhpcy5fcmdiLnNsaWNlKDAsIDMpKTtcbn07XG5jb25zdCBWZSA9ICh0LCBlLCBuKSA9PiAodCA9IEF0KHQpLCBlID0gQXQoZSksIG4gPSBBdChuKSwgMC4yMTI2ICogdCArIDAuNzE1MiAqIGUgKyAwLjA3MjIgKiBuKSwgQXQgPSAodCkgPT4gKHQgLz0gMjU1LCB0IDw9IDAuMDM5MjggPyB0IC8gMTIuOTIgOiBIZSgodCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpKSwgeiA9IHt9LCBydCA9ICh0LCBlLCBuID0gMC41LCAuLi5yKSA9PiB7XG4gIGxldCBvID0gclswXSB8fCBcImxyZ2JcIjtcbiAgaWYgKCF6W29dICYmICFyLmxlbmd0aCAmJiAobyA9IE9iamVjdC5rZXlzKHopWzBdKSwgIXpbb10pXG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnRlcnBvbGF0aW9uIG1vZGUgJHtvfSBpcyBub3QgZGVmaW5lZGApO1xuICByZXR1cm4gTCh0KSAhPT0gXCJvYmplY3RcIiAmJiAodCA9IG5ldyB1KHQpKSwgTChlKSAhPT0gXCJvYmplY3RcIiAmJiAoZSA9IG5ldyB1KGUpKSwgeltvXSh0LCBlLCBuKS5hbHBoYShcbiAgICB0LmFscGhhKCkgKyBuICogKGUuYWxwaGEoKSAtIHQuYWxwaGEoKSlcbiAgKTtcbn07XG51LnByb3RvdHlwZS5taXggPSB1LnByb3RvdHlwZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKHQsIGUgPSAwLjUsIC4uLm4pIHtcbiAgcmV0dXJuIHJ0KHRoaXMsIHQsIGUsIC4uLm4pO1xufTtcbnUucHJvdG90eXBlLnByZW11bHRpcGx5ID0gZnVuY3Rpb24odCA9ICExKSB7XG4gIGNvbnN0IGUgPSB0aGlzLl9yZ2IsIG4gPSBlWzNdO1xuICByZXR1cm4gdCA/ICh0aGlzLl9yZ2IgPSBbZVswXSAqIG4sIGVbMV0gKiBuLCBlWzJdICogbiwgbl0sIHRoaXMpIDogbmV3IHUoW2VbMF0gKiBuLCBlWzFdICogbiwgZVsyXSAqIG4sIG5dLCBcInJnYlwiKTtcbn07XG5jb25zdCB7IHNpbjogVWUsIGNvczogSmUgfSA9IE1hdGgsIHVlID0gKC4uLnQpID0+IHtcbiAgbGV0IFtlLCBuLCByXSA9ICQodCwgXCJsY2hcIik7XG4gIHJldHVybiBpc05hTihyKSAmJiAociA9IDApLCByID0gciAqIEJlLCBbZSwgSmUocikgKiBuLCBVZShyKSAqIG5dO1xufSwgQnQgPSAoLi4udCkgPT4ge1xuICB0ID0gJCh0LCBcImxjaFwiKTtcbiAgY29uc3QgW2UsIG4sIHJdID0gdCwgW28sIHMsIGNdID0gdWUoZSwgbiwgciksIFtmLCBhLCBsXSA9IHp0KG8sIHMsIGMpO1xuICByZXR1cm4gW2YsIGEsIGwsIHQubGVuZ3RoID4gMyA/IHRbM10gOiAxXTtcbn0sIFFlID0gKC4uLnQpID0+IHtcbiAgY29uc3QgZSA9IHNlKCQodCwgXCJoY2xcIikpO1xuICByZXR1cm4gQnQoLi4uZSk7XG59LCB7IHNxcnQ6IHRuLCBhdGFuMjogZW4sIHJvdW5kOiBubiB9ID0gTWF0aCwgYmUgPSAoLi4udCkgPT4ge1xuICBjb25zdCBbZSwgbiwgcl0gPSAkKHQsIFwibGFiXCIpLCBvID0gdG4obiAqIG4gKyByICogcik7XG4gIGxldCBzID0gKGVuKHIsIG4pICogU2UgKyAzNjApICUgMzYwO1xuICByZXR1cm4gbm4obyAqIDFlNCkgPT09IDAgJiYgKHMgPSBOdW1iZXIuTmFOKSwgW2UsIG8sIHNdO1xufSwgU3QgPSAoLi4udCkgPT4ge1xuICBjb25zdCBbZSwgbiwgciwgLi4ub10gPSAkKHQsIFwicmdiXCIpLCBbcywgYywgZl0gPSBHdChlLCBuLCByKSwgW2EsIGwsIGhdID0gYmUocywgYywgZik7XG4gIHJldHVybiBbYSwgbCwgaCwgLi4uby5sZW5ndGggPiAwICYmIG9bMF0gPCAxID8gW29bMF1dIDogW11dO1xufTtcbnUucHJvdG90eXBlLmxjaCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gU3QodGhpcy5fcmdiKTtcbn07XG51LnByb3RvdHlwZS5oY2wgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHNlKFN0KHRoaXMuX3JnYikpO1xufTtcbmNvbnN0IHJuID0gKC4uLnQpID0+IG5ldyB1KC4uLnQsIFwibGNoXCIpLCBvbiA9ICguLi50KSA9PiBuZXcgdSguLi50LCBcImhjbFwiKTtcbk9iamVjdC5hc3NpZ24oQSwgeyBsY2g6IHJuLCBoY2w6IG9uIH0pO1xuXy5mb3JtYXQubGNoID0gQnQ7XG5fLmZvcm1hdC5oY2wgPSBRZTtcbltcImxjaFwiLCBcImhjbFwiXS5mb3JFYWNoKFxuICAodCkgPT4gXy5hdXRvZGV0ZWN0LnB1c2goe1xuICAgIHA6IDIsXG4gICAgdGVzdDogKC4uLmUpID0+IHtcbiAgICAgIGlmIChlID0gJChlLCB0KSwgTChlKSA9PT0gXCJhcnJheVwiICYmIGUubGVuZ3RoID09PSAzKVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG4gIH0pXG4pO1xudS5wcm90b3R5cGUuc2F0dXJhdGUgPSBmdW5jdGlvbih0ID0gMSkge1xuICBjb25zdCBlID0gdGhpcywgbiA9IGUubGNoKCk7XG4gIHJldHVybiBuWzFdICs9IFQuS24gKiB0LCBuWzFdIDwgMCAmJiAoblsxXSA9IDApLCBuZXcgdShuLCBcImxjaFwiKS5hbHBoYShlLmFscGhhKCksICEwKTtcbn07XG51LnByb3RvdHlwZS5kZXNhdHVyYXRlID0gZnVuY3Rpb24odCA9IDEpIHtcbiAgcmV0dXJuIHRoaXMuc2F0dXJhdGUoLXQpO1xufTtcbnUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHQsIGUsIG4gPSAhMSkge1xuICBjb25zdCBbciwgb10gPSB0LnNwbGl0KFwiLlwiKSwgcyA9IHRoaXNbcl0oKTtcbiAgaWYgKG8pIHtcbiAgICBjb25zdCBjID0gci5pbmRleE9mKG8pIC0gKHIuc3Vic3RyKDAsIDIpID09PSBcIm9rXCIgPyAyIDogMCk7XG4gICAgaWYgKGMgPiAtMSkge1xuICAgICAgaWYgKEwoZSkgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgc3dpdGNoIChlLmNoYXJBdCgwKSkge1xuICAgICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgICAgICBzW2NdICs9ICtlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICAgIHNbY10gKz0gK2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiKlwiOlxuICAgICAgICAgICAgc1tjXSAqPSArZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiL1wiOlxuICAgICAgICAgICAgc1tjXSAvPSArZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc1tjXSA9ICtlO1xuICAgICAgICB9XG4gICAgICBlbHNlIGlmIChMKGUpID09PSBcIm51bWJlclwiKVxuICAgICAgICBzW2NdID0gZTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5zdXBwb3J0ZWQgdmFsdWUgZm9yIENvbG9yLnNldFwiKTtcbiAgICAgIGNvbnN0IGYgPSBuZXcgdShzLCByKTtcbiAgICAgIHJldHVybiBuID8gKHRoaXMuX3JnYiA9IGYuX3JnYiwgdGhpcykgOiBmO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gY2hhbm5lbCAke299IGluIG1vZGUgJHtyfWApO1xuICB9IGVsc2VcbiAgICByZXR1cm4gcztcbn07XG51LnByb3RvdHlwZS50aW50ID0gZnVuY3Rpb24odCA9IDAuNSwgLi4uZSkge1xuICByZXR1cm4gcnQodGhpcywgXCJ3aGl0ZVwiLCB0LCAuLi5lKTtcbn07XG51LnByb3RvdHlwZS5zaGFkZSA9IGZ1bmN0aW9uKHQgPSAwLjUsIC4uLmUpIHtcbiAgcmV0dXJuIHJ0KHRoaXMsIFwiYmxhY2tcIiwgdCwgLi4uZSk7XG59O1xuY29uc3QgY24gPSAodCwgZSwgbikgPT4ge1xuICBjb25zdCByID0gdC5fcmdiLCBvID0gZS5fcmdiO1xuICByZXR1cm4gbmV3IHUoXG4gICAgclswXSArIG4gKiAob1swXSAtIHJbMF0pLFxuICAgIHJbMV0gKyBuICogKG9bMV0gLSByWzFdKSxcbiAgICByWzJdICsgbiAqIChvWzJdIC0gclsyXSksXG4gICAgXCJyZ2JcIlxuICApO1xufTtcbnoucmdiID0gY247XG5jb25zdCB7IHNxcnQ6IEx0LCBwb3c6IFEgfSA9IE1hdGgsIHNuID0gKHQsIGUsIG4pID0+IHtcbiAgY29uc3QgW3IsIG8sIHNdID0gdC5fcmdiLCBbYywgZiwgYV0gPSBlLl9yZ2I7XG4gIHJldHVybiBuZXcgdShcbiAgICBMdChRKHIsIDIpICogKDEgLSBuKSArIFEoYywgMikgKiBuKSxcbiAgICBMdChRKG8sIDIpICogKDEgLSBuKSArIFEoZiwgMikgKiBuKSxcbiAgICBMdChRKHMsIDIpICogKDEgLSBuKSArIFEoYSwgMikgKiBuKSxcbiAgICBcInJnYlwiXG4gICk7XG59O1xuei5scmdiID0gc247XG5jb25zdCBmbiA9ICh0LCBlLCBuKSA9PiB7XG4gIGNvbnN0IHIgPSB0LmxhYigpLCBvID0gZS5sYWIoKTtcbiAgcmV0dXJuIG5ldyB1KFxuICAgIHJbMF0gKyBuICogKG9bMF0gLSByWzBdKSxcbiAgICByWzFdICsgbiAqIChvWzFdIC0gclsxXSksXG4gICAgclsyXSArIG4gKiAob1syXSAtIHJbMl0pLFxuICAgIFwibGFiXCJcbiAgKTtcbn07XG56LmxhYiA9IGZuO1xuY29uc3QgY3QgPSAodCwgZSwgbiwgcikgPT4ge1xuICBsZXQgbywgcztcbiAgciA9PT0gXCJoc2xcIiA/IChvID0gdC5oc2woKSwgcyA9IGUuaHNsKCkpIDogciA9PT0gXCJoc3ZcIiA/IChvID0gdC5oc3YoKSwgcyA9IGUuaHN2KCkpIDogciA9PT0gXCJoY2dcIiA/IChvID0gdC5oY2coKSwgcyA9IGUuaGNnKCkpIDogciA9PT0gXCJoc2lcIiA/IChvID0gdC5oc2koKSwgcyA9IGUuaHNpKCkpIDogciA9PT0gXCJsY2hcIiB8fCByID09PSBcImhjbFwiID8gKHIgPSBcImhjbFwiLCBvID0gdC5oY2woKSwgcyA9IGUuaGNsKCkpIDogciA9PT0gXCJva2xjaFwiICYmIChvID0gdC5va2xjaCgpLnJldmVyc2UoKSwgcyA9IGUub2tsY2goKS5yZXZlcnNlKCkpO1xuICBsZXQgYywgZiwgYSwgbCwgaCwgZDtcbiAgKHIuc3Vic3RyKDAsIDEpID09PSBcImhcIiB8fCByID09PSBcIm9rbGNoXCIpICYmIChbYywgYSwgaF0gPSBvLCBbZiwgbCwgZF0gPSBzKTtcbiAgbGV0IGIsIG0sIE0sIFI7XG4gIHJldHVybiAhaXNOYU4oYykgJiYgIWlzTmFOKGYpID8gKGYgPiBjICYmIGYgLSBjID4gMTgwID8gUiA9IGYgLSAoYyArIDM2MCkgOiBmIDwgYyAmJiBjIC0gZiA+IDE4MCA/IFIgPSBmICsgMzYwIC0gYyA6IFIgPSBmIC0gYywgbSA9IGMgKyBuICogUikgOiBpc05hTihjKSA/IGlzTmFOKGYpID8gbSA9IE51bWJlci5OYU4gOiAobSA9IGYsIChoID09IDEgfHwgaCA9PSAwKSAmJiByICE9IFwiaHN2XCIgJiYgKGIgPSBsKSkgOiAobSA9IGMsIChkID09IDEgfHwgZCA9PSAwKSAmJiByICE9IFwiaHN2XCIgJiYgKGIgPSBhKSksIGIgPT09IHZvaWQgMCAmJiAoYiA9IGEgKyBuICogKGwgLSBhKSksIE0gPSBoICsgbiAqIChkIC0gaCksIHIgPT09IFwib2tsY2hcIiA/IG5ldyB1KFtNLCBiLCBtXSwgcikgOiBuZXcgdShbbSwgYiwgTV0sIHIpO1xufSwgaGUgPSAodCwgZSwgbikgPT4gY3QodCwgZSwgbiwgXCJsY2hcIik7XG56LmxjaCA9IGhlO1xuei5oY2wgPSBoZTtcbmNvbnN0IGFuID0gKHQpID0+IHtcbiAgaWYgKEwodCkgPT0gXCJudW1iZXJcIiAmJiB0ID49IDAgJiYgdCA8PSAxNjc3NzIxNSkge1xuICAgIGNvbnN0IGUgPSB0ID4+IDE2LCBuID0gdCA+PiA4ICYgMjU1LCByID0gdCAmIDI1NTtcbiAgICByZXR1cm4gW2UsIG4sIHIsIDFdO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcInVua25vd24gbnVtIGNvbG9yOiBcIiArIHQpO1xufSwgbG4gPSAoLi4udCkgPT4ge1xuICBjb25zdCBbZSwgbiwgcl0gPSAkKHQsIFwicmdiXCIpO1xuICByZXR1cm4gKGUgPDwgMTYpICsgKG4gPDwgOCkgKyByO1xufTtcbnUucHJvdG90eXBlLm51bSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbG4odGhpcy5fcmdiKTtcbn07XG5jb25zdCB1biA9ICguLi50KSA9PiBuZXcgdSguLi50LCBcIm51bVwiKTtcbk9iamVjdC5hc3NpZ24oQSwgeyBudW06IHVuIH0pO1xuXy5mb3JtYXQubnVtID0gYW47XG5fLmF1dG9kZXRlY3QucHVzaCh7XG4gIHA6IDUsXG4gIHRlc3Q6ICguLi50KSA9PiB7XG4gICAgaWYgKHQubGVuZ3RoID09PSAxICYmIEwodFswXSkgPT09IFwibnVtYmVyXCIgJiYgdFswXSA+PSAwICYmIHRbMF0gPD0gMTY3NzcyMTUpXG4gICAgICByZXR1cm4gXCJudW1cIjtcbiAgfVxufSk7XG5jb25zdCBibiA9ICh0LCBlLCBuKSA9PiB7XG4gIGNvbnN0IHIgPSB0Lm51bSgpLCBvID0gZS5udW0oKTtcbiAgcmV0dXJuIG5ldyB1KHIgKyBuICogKG8gLSByKSwgXCJudW1cIik7XG59O1xuei5udW0gPSBibjtcbmNvbnN0IHsgZmxvb3I6IGhuIH0gPSBNYXRoLCBkbiA9ICguLi50KSA9PiB7XG4gIHQgPSAkKHQsIFwiaGNnXCIpO1xuICBsZXQgW2UsIG4sIHJdID0gdCwgbywgcywgYztcbiAgciA9IHIgKiAyNTU7XG4gIGNvbnN0IGYgPSBuICogMjU1O1xuICBpZiAobiA9PT0gMClcbiAgICBvID0gcyA9IGMgPSByO1xuICBlbHNlIHtcbiAgICBlID09PSAzNjAgJiYgKGUgPSAwKSwgZSA+IDM2MCAmJiAoZSAtPSAzNjApLCBlIDwgMCAmJiAoZSArPSAzNjApLCBlIC89IDYwO1xuICAgIGNvbnN0IGEgPSBobihlKSwgbCA9IGUgLSBhLCBoID0gciAqICgxIC0gbiksIGQgPSBoICsgZiAqICgxIC0gbCksIGIgPSBoICsgZiAqIGwsIG0gPSBoICsgZjtcbiAgICBzd2l0Y2ggKGEpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgW28sIHMsIGNdID0gW20sIGIsIGhdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgW28sIHMsIGNdID0gW2QsIG0sIGhdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgW28sIHMsIGNdID0gW2gsIG0sIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgW28sIHMsIGNdID0gW2gsIGQsIG1dO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgW28sIHMsIGNdID0gW2IsIGgsIG1dO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgW28sIHMsIGNdID0gW20sIGgsIGRdO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtvLCBzLCBjLCB0Lmxlbmd0aCA+IDMgPyB0WzNdIDogMV07XG59LCBwbiA9ICguLi50KSA9PiB7XG4gIGNvbnN0IFtlLCBuLCByXSA9ICQodCwgXCJyZ2JcIiksIG8gPSBvZShlLCBuLCByKSwgcyA9IGNlKGUsIG4sIHIpLCBjID0gcyAtIG8sIGYgPSBjICogMTAwIC8gMjU1LCBhID0gbyAvICgyNTUgLSBjKSAqIDEwMDtcbiAgbGV0IGw7XG4gIHJldHVybiBjID09PSAwID8gbCA9IE51bWJlci5OYU4gOiAoZSA9PT0gcyAmJiAobCA9IChuIC0gcikgLyBjKSwgbiA9PT0gcyAmJiAobCA9IDIgKyAociAtIGUpIC8gYyksIHIgPT09IHMgJiYgKGwgPSA0ICsgKGUgLSBuKSAvIGMpLCBsICo9IDYwLCBsIDwgMCAmJiAobCArPSAzNjApKSwgW2wsIGYsIGFdO1xufTtcbnUucHJvdG90eXBlLmhjZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcG4odGhpcy5fcmdiKTtcbn07XG5jb25zdCBtbiA9ICguLi50KSA9PiBuZXcgdSguLi50LCBcImhjZ1wiKTtcbkEuaGNnID0gbW47XG5fLmZvcm1hdC5oY2cgPSBkbjtcbl8uYXV0b2RldGVjdC5wdXNoKHtcbiAgcDogMSxcbiAgdGVzdDogKC4uLnQpID0+IHtcbiAgICBpZiAodCA9ICQodCwgXCJoY2dcIiksIEwodCkgPT09IFwiYXJyYXlcIiAmJiB0Lmxlbmd0aCA9PT0gMylcbiAgICAgIHJldHVybiBcImhjZ1wiO1xuICB9XG59KTtcbmNvbnN0IGduID0gKHQsIGUsIG4pID0+IGN0KHQsIGUsIG4sIFwiaGNnXCIpO1xuei5oY2cgPSBnbjtcbmNvbnN0IHsgY29zOiB0dCB9ID0gTWF0aCwgd24gPSAoLi4udCkgPT4ge1xuICB0ID0gJCh0LCBcImhzaVwiKTtcbiAgbGV0IFtlLCBuLCByXSA9IHQsIG8sIHMsIGM7XG4gIHJldHVybiBpc05hTihlKSAmJiAoZSA9IDApLCBpc05hTihuKSAmJiAobiA9IDApLCBlID4gMzYwICYmIChlIC09IDM2MCksIGUgPCAwICYmIChlICs9IDM2MCksIGUgLz0gMzYwLCBlIDwgMSAvIDMgPyAoYyA9ICgxIC0gbikgLyAzLCBvID0gKDEgKyBuICogdHQoVyAqIGUpIC8gdHQoTXQgLSBXICogZSkpIC8gMywgcyA9IDEgLSAoYyArIG8pKSA6IGUgPCAyIC8gMyA/IChlIC09IDEgLyAzLCBvID0gKDEgLSBuKSAvIDMsIHMgPSAoMSArIG4gKiB0dChXICogZSkgLyB0dChNdCAtIFcgKiBlKSkgLyAzLCBjID0gMSAtIChvICsgcykpIDogKGUgLT0gMiAvIDMsIHMgPSAoMSAtIG4pIC8gMywgYyA9ICgxICsgbiAqIHR0KFcgKiBlKSAvIHR0KE10IC0gVyAqIGUpKSAvIDMsIG8gPSAxIC0gKHMgKyBjKSksIG8gPSBKKHIgKiBvICogMyksIHMgPSBKKHIgKiBzICogMyksIGMgPSBKKHIgKiBjICogMyksIFtvICogMjU1LCBzICogMjU1LCBjICogMjU1LCB0Lmxlbmd0aCA+IDMgPyB0WzNdIDogMV07XG59LCB7IG1pbjogeW4sIHNxcnQ6IGtuLCBhY29zOiBfbiB9ID0gTWF0aCwgTW4gPSAoLi4udCkgPT4ge1xuICBsZXQgW2UsIG4sIHJdID0gJCh0LCBcInJnYlwiKTtcbiAgZSAvPSAyNTUsIG4gLz0gMjU1LCByIC89IDI1NTtcbiAgbGV0IG87XG4gIGNvbnN0IHMgPSB5bihlLCBuLCByKSwgYyA9IChlICsgbiArIHIpIC8gMywgZiA9IGMgPiAwID8gMSAtIHMgLyBjIDogMDtcbiAgcmV0dXJuIGYgPT09IDAgPyBvID0gTmFOIDogKG8gPSAoZSAtIG4gKyAoZSAtIHIpKSAvIDIsIG8gLz0ga24oKGUgLSBuKSAqIChlIC0gbikgKyAoZSAtIHIpICogKG4gLSByKSksIG8gPSBfbihvKSwgciA+IG4gJiYgKG8gPSBXIC0gbyksIG8gLz0gVyksIFtvICogMzYwLCBmLCBjXTtcbn07XG51LnByb3RvdHlwZS5oc2kgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1uKHRoaXMuX3JnYik7XG59O1xuY29uc3QgJG4gPSAoLi4udCkgPT4gbmV3IHUoLi4udCwgXCJoc2lcIik7XG5BLmhzaSA9ICRuO1xuXy5mb3JtYXQuaHNpID0gd247XG5fLmF1dG9kZXRlY3QucHVzaCh7XG4gIHA6IDIsXG4gIHRlc3Q6ICguLi50KSA9PiB7XG4gICAgaWYgKHQgPSAkKHQsIFwiaHNpXCIpLCBMKHQpID09PSBcImFycmF5XCIgJiYgdC5sZW5ndGggPT09IDMpXG4gICAgICByZXR1cm4gXCJoc2lcIjtcbiAgfVxufSk7XG5jb25zdCB4biA9ICh0LCBlLCBuKSA9PiBjdCh0LCBlLCBuLCBcImhzaVwiKTtcbnouaHNpID0geG47XG5jb25zdCBQdCA9ICguLi50KSA9PiB7XG4gIHQgPSAkKHQsIFwiaHNsXCIpO1xuICBjb25zdCBbZSwgbiwgcl0gPSB0O1xuICBsZXQgbywgcywgYztcbiAgaWYgKG4gPT09IDApXG4gICAgbyA9IHMgPSBjID0gciAqIDI1NTtcbiAgZWxzZSB7XG4gICAgY29uc3QgZiA9IFswLCAwLCAwXSwgYSA9IFswLCAwLCAwXSwgbCA9IHIgPCAwLjUgPyByICogKDEgKyBuKSA6IHIgKyBuIC0gciAqIG4sIGggPSAyICogciAtIGwsIGQgPSBlIC8gMzYwO1xuICAgIGZbMF0gPSBkICsgMSAvIDMsIGZbMV0gPSBkLCBmWzJdID0gZCAtIDEgLyAzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgMzsgYisrKVxuICAgICAgZltiXSA8IDAgJiYgKGZbYl0gKz0gMSksIGZbYl0gPiAxICYmIChmW2JdIC09IDEpLCA2ICogZltiXSA8IDEgPyBhW2JdID0gaCArIChsIC0gaCkgKiA2ICogZltiXSA6IDIgKiBmW2JdIDwgMSA/IGFbYl0gPSBsIDogMyAqIGZbYl0gPCAyID8gYVtiXSA9IGggKyAobCAtIGgpICogKDIgLyAzIC0gZltiXSkgKiA2IDogYVtiXSA9IGg7XG4gICAgW28sIHMsIGNdID0gW2FbMF0gKiAyNTUsIGFbMV0gKiAyNTUsIGFbMl0gKiAyNTVdO1xuICB9XG4gIHJldHVybiB0Lmxlbmd0aCA+IDMgPyBbbywgcywgYywgdFszXV0gOiBbbywgcywgYywgMV07XG59LCBkZSA9ICguLi50KSA9PiB7XG4gIHQgPSAkKHQsIFwicmdiYVwiKTtcbiAgbGV0IFtlLCBuLCByXSA9IHQ7XG4gIGUgLz0gMjU1LCBuIC89IDI1NSwgciAvPSAyNTU7XG4gIGNvbnN0IG8gPSBvZShlLCBuLCByKSwgcyA9IGNlKGUsIG4sIHIpLCBjID0gKHMgKyBvKSAvIDI7XG4gIGxldCBmLCBhO1xuICByZXR1cm4gcyA9PT0gbyA/IChmID0gMCwgYSA9IE51bWJlci5OYU4pIDogZiA9IGMgPCAwLjUgPyAocyAtIG8pIC8gKHMgKyBvKSA6IChzIC0gbykgLyAoMiAtIHMgLSBvKSwgZSA9PSBzID8gYSA9IChuIC0gcikgLyAocyAtIG8pIDogbiA9PSBzID8gYSA9IDIgKyAociAtIGUpIC8gKHMgLSBvKSA6IHIgPT0gcyAmJiAoYSA9IDQgKyAoZSAtIG4pIC8gKHMgLSBvKSksIGEgKj0gNjAsIGEgPCAwICYmIChhICs9IDM2MCksIHQubGVuZ3RoID4gMyAmJiB0WzNdICE9PSB2b2lkIDAgPyBbYSwgZiwgYywgdFszXV0gOiBbYSwgZiwgY107XG59O1xudS5wcm90b3R5cGUuaHNsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBkZSh0aGlzLl9yZ2IpO1xufTtcbmNvbnN0IEFuID0gKC4uLnQpID0+IG5ldyB1KC4uLnQsIFwiaHNsXCIpO1xuQS5oc2wgPSBBbjtcbl8uZm9ybWF0LmhzbCA9IFB0O1xuXy5hdXRvZGV0ZWN0LnB1c2goe1xuICBwOiAyLFxuICB0ZXN0OiAoLi4udCkgPT4ge1xuICAgIGlmICh0ID0gJCh0LCBcImhzbFwiKSwgTCh0KSA9PT0gXCJhcnJheVwiICYmIHQubGVuZ3RoID09PSAzKVxuICAgICAgcmV0dXJuIFwiaHNsXCI7XG4gIH1cbn0pO1xuY29uc3QgTG4gPSAodCwgZSwgbikgPT4gY3QodCwgZSwgbiwgXCJoc2xcIik7XG56LmhzbCA9IExuO1xuY29uc3QgeyBmbG9vcjogRW4gfSA9IE1hdGgsIFJuID0gKC4uLnQpID0+IHtcbiAgdCA9ICQodCwgXCJoc3ZcIik7XG4gIGxldCBbZSwgbiwgcl0gPSB0LCBvLCBzLCBjO1xuICBpZiAociAqPSAyNTUsIG4gPT09IDApXG4gICAgbyA9IHMgPSBjID0gcjtcbiAgZWxzZSB7XG4gICAgZSA9PT0gMzYwICYmIChlID0gMCksIGUgPiAzNjAgJiYgKGUgLT0gMzYwKSwgZSA8IDAgJiYgKGUgKz0gMzYwKSwgZSAvPSA2MDtcbiAgICBjb25zdCBmID0gRW4oZSksIGEgPSBlIC0gZiwgbCA9IHIgKiAoMSAtIG4pLCBoID0gciAqICgxIC0gbiAqIGEpLCBkID0gciAqICgxIC0gbiAqICgxIC0gYSkpO1xuICAgIHN3aXRjaCAoZikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBbbywgcywgY10gPSBbciwgZCwgbF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBbbywgcywgY10gPSBbaCwgciwgbF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBbbywgcywgY10gPSBbbCwgciwgZF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBbbywgcywgY10gPSBbbCwgaCwgcl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBbbywgcywgY10gPSBbZCwgbCwgcl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBbbywgcywgY10gPSBbciwgbCwgaF07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW28sIHMsIGMsIHQubGVuZ3RoID4gMyA/IHRbM10gOiAxXTtcbn0sIHsgbWluOiBObiwgbWF4OiBDbiB9ID0gTWF0aCwgam4gPSAoLi4udCkgPT4ge1xuICB0ID0gJCh0LCBcInJnYlwiKTtcbiAgbGV0IFtlLCBuLCByXSA9IHQ7XG4gIGNvbnN0IG8gPSBObihlLCBuLCByKSwgcyA9IENuKGUsIG4sIHIpLCBjID0gcyAtIG87XG4gIGxldCBmLCBhLCBsO1xuICByZXR1cm4gbCA9IHMgLyAyNTUsIHMgPT09IDAgPyAoZiA9IE51bWJlci5OYU4sIGEgPSAwKSA6IChhID0gYyAvIHMsIGUgPT09IHMgJiYgKGYgPSAobiAtIHIpIC8gYyksIG4gPT09IHMgJiYgKGYgPSAyICsgKHIgLSBlKSAvIGMpLCByID09PSBzICYmIChmID0gNCArIChlIC0gbikgLyBjKSwgZiAqPSA2MCwgZiA8IDAgJiYgKGYgKz0gMzYwKSksIFtmLCBhLCBsXTtcbn07XG51LnByb3RvdHlwZS5oc3YgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGpuKHRoaXMuX3JnYik7XG59O1xuY29uc3Qgdm4gPSAoLi4udCkgPT4gbmV3IHUoLi4udCwgXCJoc3ZcIik7XG5BLmhzdiA9IHZuO1xuXy5mb3JtYXQuaHN2ID0gUm47XG5fLmF1dG9kZXRlY3QucHVzaCh7XG4gIHA6IDIsXG4gIHRlc3Q6ICguLi50KSA9PiB7XG4gICAgaWYgKHQgPSAkKHQsIFwiaHN2XCIpLCBMKHQpID09PSBcImFycmF5XCIgJiYgdC5sZW5ndGggPT09IDMpXG4gICAgICByZXR1cm4gXCJoc3ZcIjtcbiAgfVxufSk7XG5jb25zdCBQbiA9ICh0LCBlLCBuKSA9PiBjdCh0LCBlLCBuLCBcImhzdlwiKTtcbnouaHN2ID0gUG47XG5mdW5jdGlvbiBtdCh0LCBlKSB7XG4gIGxldCBuID0gdC5sZW5ndGg7XG4gIEFycmF5LmlzQXJyYXkodFswXSkgfHwgKHQgPSBbdF0pLCBBcnJheS5pc0FycmF5KGVbMF0pIHx8IChlID0gZS5tYXAoKGMpID0+IFtjXSkpO1xuICBsZXQgciA9IGVbMF0ubGVuZ3RoLCBvID0gZVswXS5tYXAoKGMsIGYpID0+IGUubWFwKChhKSA9PiBhW2ZdKSksIHMgPSB0Lm1hcChcbiAgICAoYykgPT4gby5tYXAoKGYpID0+IEFycmF5LmlzQXJyYXkoYykgPyBjLnJlZHVjZSgoYSwgbCwgaCkgPT4gYSArIGwgKiAoZltoXSB8fCAwKSwgMCkgOiBmLnJlZHVjZSgoYSwgbCkgPT4gYSArIGwgKiBjLCAwKSlcbiAgKTtcbiAgcmV0dXJuIG4gPT09IDEgJiYgKHMgPSBzWzBdKSwgciA9PT0gMSA/IHMubWFwKChjKSA9PiBjWzBdKSA6IHM7XG59XG5jb25zdCBYdCA9ICguLi50KSA9PiB7XG4gIHQgPSAkKHQsIFwibGFiXCIpO1xuICBjb25zdCBbZSwgbiwgciwgLi4ub10gPSB0LCBbcywgYywgZl0gPSBPbihbZSwgbiwgcl0pLCBbYSwgbCwgaF0gPSBsZShzLCBjLCBmKTtcbiAgcmV0dXJuIFthLCBsLCBoLCAuLi5vLmxlbmd0aCA+IDAgJiYgb1swXSA8IDEgPyBbb1swXV0gOiBbXV07XG59O1xuZnVuY3Rpb24gT24odCkge1xuICB2YXIgZSA9IFtcbiAgICBbMS4yMjY4Nzk4NzU4NDU5MjQzLCAtMC41NTc4MTQ5OTQ0NjAyMTcxLCAwLjI4MTM5MTA0NTY2NTk2NDddLFxuICAgIFstMC4wNDA1NzU3NDUyMTQ4MDA4LCAxLjExMjI4NjgwMzI4MDMxNywgLTAuMDcxNzExMDU4MDY1NTE2NF0sXG4gICAgWy0wLjA3NjM3MjkzNjY3NDY2MDEsIC0wLjQyMTQ5MzMzMjQwMjI0MzIsIDEuNTg2OTI0MDE5ODM2NzgxNl1cbiAgXSwgbiA9IFtcbiAgICBbMSwgMC4zOTYzMzc3NzczNzYxNzQ5LCAwLjIxNTgwMzc1NzMwOTkxMzZdLFxuICAgIFsxLCAtMC4xMDU1NjEzNDU4MTU2NTg2LCAtMC4wNjM4NTQxNzI4MjU4MTMzXSxcbiAgICBbMSwgLTAuMDg5NDg0MTc3NTI5ODExOSwgLTEuMjkxNDg1NTQ4MDE5NDA5Ml1cbiAgXSwgciA9IG10KG4sIHQpO1xuICByZXR1cm4gbXQoXG4gICAgZSxcbiAgICByLm1hcCgobykgPT4gbyAqKiAzKVxuICApO1xufVxuY29uc3QgcXQgPSAoLi4udCkgPT4ge1xuICBjb25zdCBbZSwgbiwgciwgLi4ub10gPSAkKHQsIFwicmdiXCIpLCBzID0gaWUoZSwgbiwgcik7XG4gIHJldHVybiBbLi4uWW4ocyksIC4uLm8ubGVuZ3RoID4gMCAmJiBvWzBdIDwgMSA/IFtvWzBdXSA6IFtdXTtcbn07XG5mdW5jdGlvbiBZbih0KSB7XG4gIGNvbnN0IGUgPSBbXG4gICAgWzAuODE5MDIyNDM3OTk2NzAzLCAwLjM2MTkwNjI2MDA1Mjg5MDQsIC0wLjEyODg3Mzc4MTUyMDk4NzldLFxuICAgIFswLjAzMjk4MzY1MzkzMjM4ODUsIDAuOTI5Mjg2ODYxNTg2MzQzNCwgMC4wMzYxNDQ2NjYzNTA2NDI0XSxcbiAgICBbMC4wNDgxNzcxODkzNTk2MjQyLCAwLjI2NDIzOTUzMTc1MjczMDgsIDAuNjMzNTQ3ODI4NDY5NDMwOV1cbiAgXSwgbiA9IFtcbiAgICBbMC4yMTA0NTQyNjgzMDkzMTQsIDAuNzkzNjE3Nzc0NzAyMzA1NCwgLTAuMDA0MDcyMDQzMDExNjE5M10sXG4gICAgWzEuOTc3OTk4NTMyNDMxMTY4NCwgLTIuNDI4NTkyMjQyMDQ4NTgsIDAuNDUwNTkzNzA5NjE3NDExXSxcbiAgICBbMC4wMjU5MDQwNDI0NjU1NDc4LCAwLjc4Mjc3MTcxMjQ1NzUyOTYsIC0wLjgwODY3NTc1NDkyMzA3NzRdXG4gIF0sIHIgPSBtdChlLCB0KTtcbiAgcmV0dXJuIG10KFxuICAgIG4sXG4gICAgci5tYXAoKG8pID0+IE1hdGguY2JydChvKSlcbiAgKTtcbn1cbnUucHJvdG90eXBlLm9rbGFiID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBxdCh0aGlzLl9yZ2IpO1xufTtcbmNvbnN0IHpuID0gKC4uLnQpID0+IG5ldyB1KC4uLnQsIFwib2tsYWJcIik7XG5PYmplY3QuYXNzaWduKEEsIHsgb2tsYWI6IHpuIH0pO1xuXy5mb3JtYXQub2tsYWIgPSBYdDtcbl8uYXV0b2RldGVjdC5wdXNoKHtcbiAgcDogMixcbiAgdGVzdDogKC4uLnQpID0+IHtcbiAgICBpZiAodCA9ICQodCwgXCJva2xhYlwiKSwgTCh0KSA9PT0gXCJhcnJheVwiICYmIHQubGVuZ3RoID09PSAzKVxuICAgICAgcmV0dXJuIFwib2tsYWJcIjtcbiAgfVxufSk7XG5jb25zdCBHbiA9ICh0LCBlLCBuKSA9PiB7XG4gIGNvbnN0IHIgPSB0Lm9rbGFiKCksIG8gPSBlLm9rbGFiKCk7XG4gIHJldHVybiBuZXcgdShcbiAgICByWzBdICsgbiAqIChvWzBdIC0gclswXSksXG4gICAgclsxXSArIG4gKiAob1sxXSAtIHJbMV0pLFxuICAgIHJbMl0gKyBuICogKG9bMl0gLSByWzJdKSxcbiAgICBcIm9rbGFiXCJcbiAgKTtcbn07XG56Lm9rbGFiID0gR247XG5jb25zdCBCbiA9ICh0LCBlLCBuKSA9PiBjdCh0LCBlLCBuLCBcIm9rbGNoXCIpO1xuei5va2xjaCA9IEJuO1xuY29uc3QgeyBwb3c6IEV0LCBzcXJ0OiBSdCwgUEk6IE50LCBjb3M6IFR0LCBzaW46IEt0LCBhdGFuMjogU24gfSA9IE1hdGgsIFhuID0gKHQsIGUgPSBcImxyZ2JcIiwgbiA9IG51bGwpID0+IHtcbiAgY29uc3QgciA9IHQubGVuZ3RoO1xuICBuIHx8IChuID0gQXJyYXkuZnJvbShuZXcgQXJyYXkocikpLm1hcCgoKSA9PiAxKSk7XG4gIGNvbnN0IG8gPSByIC8gbi5yZWR1Y2UoZnVuY3Rpb24oZCwgYikge1xuICAgIHJldHVybiBkICsgYjtcbiAgfSk7XG4gIGlmIChuLmZvckVhY2goKGQsIGIpID0+IHtcbiAgICBuW2JdICo9IG87XG4gIH0pLCB0ID0gdC5tYXAoKGQpID0+IG5ldyB1KGQpKSwgZSA9PT0gXCJscmdiXCIpXG4gICAgcmV0dXJuIHFuKHQsIG4pO1xuICBjb25zdCBzID0gdC5zaGlmdCgpLCBjID0gcy5nZXQoZSksIGYgPSBbXTtcbiAgbGV0IGEgPSAwLCBsID0gMDtcbiAgZm9yIChsZXQgZCA9IDA7IGQgPCBjLmxlbmd0aDsgZCsrKVxuICAgIGlmIChjW2RdID0gKGNbZF0gfHwgMCkgKiBuWzBdLCBmLnB1c2goaXNOYU4oY1tkXSkgPyAwIDogblswXSksIGUuY2hhckF0KGQpID09PSBcImhcIiAmJiAhaXNOYU4oY1tkXSkpIHtcbiAgICAgIGNvbnN0IGIgPSBjW2RdIC8gMTgwICogTnQ7XG4gICAgICBhICs9IFR0KGIpICogblswXSwgbCArPSBLdChiKSAqIG5bMF07XG4gICAgfVxuICBsZXQgaCA9IHMuYWxwaGEoKSAqIG5bMF07XG4gIHQuZm9yRWFjaCgoZCwgYikgPT4ge1xuICAgIGNvbnN0IG0gPSBkLmdldChlKTtcbiAgICBoICs9IGQuYWxwaGEoKSAqIG5bYiArIDFdO1xuICAgIGZvciAobGV0IE0gPSAwOyBNIDwgYy5sZW5ndGg7IE0rKylcbiAgICAgIGlmICghaXNOYU4obVtNXSkpXG4gICAgICAgIGlmIChmW01dICs9IG5bYiArIDFdLCBlLmNoYXJBdChNKSA9PT0gXCJoXCIpIHtcbiAgICAgICAgICBjb25zdCBSID0gbVtNXSAvIDE4MCAqIE50O1xuICAgICAgICAgIGEgKz0gVHQoUikgKiBuW2IgKyAxXSwgbCArPSBLdChSKSAqIG5bYiArIDFdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICBjW01dICs9IG1bTV0gKiBuW2IgKyAxXTtcbiAgfSk7XG4gIGZvciAobGV0IGQgPSAwOyBkIDwgYy5sZW5ndGg7IGQrKylcbiAgICBpZiAoZS5jaGFyQXQoZCkgPT09IFwiaFwiKSB7XG4gICAgICBsZXQgYiA9IFNuKGwgLyBmW2RdLCBhIC8gZltkXSkgLyBOdCAqIDE4MDtcbiAgICAgIGZvciAoOyBiIDwgMDsgKSBiICs9IDM2MDtcbiAgICAgIGZvciAoOyBiID49IDM2MDsgKSBiIC09IDM2MDtcbiAgICAgIGNbZF0gPSBiO1xuICAgIH0gZWxzZVxuICAgICAgY1tkXSA9IGNbZF0gLyBmW2RdO1xuICByZXR1cm4gaCAvPSByLCBuZXcgdShjLCBlKS5hbHBoYShoID4gMC45OTk5OSA/IDEgOiBoLCAhMCk7XG59LCBxbiA9ICh0LCBlKSA9PiB7XG4gIGNvbnN0IG4gPSB0Lmxlbmd0aCwgciA9IFswLCAwLCAwLCAwXTtcbiAgZm9yIChsZXQgbyA9IDA7IG8gPCB0Lmxlbmd0aDsgbysrKSB7XG4gICAgY29uc3QgcyA9IHRbb10sIGMgPSBlW29dIC8gbiwgZiA9IHMuX3JnYjtcbiAgICByWzBdICs9IEV0KGZbMF0sIDIpICogYywgclsxXSArPSBFdChmWzFdLCAyKSAqIGMsIHJbMl0gKz0gRXQoZlsyXSwgMikgKiBjLCByWzNdICs9IGZbM10gKiBjO1xuICB9XG4gIHJldHVybiByWzBdID0gUnQoclswXSksIHJbMV0gPSBSdChyWzFdKSwgclsyXSA9IFJ0KHJbMl0pLCByWzNdID4gMC45OTk5OTk5ICYmIChyWzNdID0gMSksIG5ldyB1KFl0KHIpKTtcbn0sIHsgcG93OiBabiB9ID0gTWF0aDtcbmZ1bmN0aW9uIGd0KHQpIHtcbiAgbGV0IGUgPSBcInJnYlwiLCBuID0gQShcIiNjY2NcIiksIHIgPSAwLCBvID0gWzAsIDFdLCBzID0gWzAsIDFdLCBjID0gW10sIGYgPSBbMCwgMF0sIGEgPSAhMSwgbCA9IFtdLCBoID0gITEsIGQgPSAwLCBiID0gMSwgbSA9ICExLCBNID0ge30sIFIgPSAhMCwgZyA9IDE7XG4gIGNvbnN0IHcgPSBmdW5jdGlvbihpKSB7XG4gICAgaWYgKGkgPSBpIHx8IFtcIiNmZmZcIiwgXCIjMDAwXCJdLCBpICYmIEwoaSkgPT09IFwic3RyaW5nXCIgJiYgQS5icmV3ZXIgJiYgQS5icmV3ZXJbaS50b0xvd2VyQ2FzZSgpXSAmJiAoaSA9IEEuYnJld2VyW2kudG9Mb3dlckNhc2UoKV0pLCBMKGkpID09PSBcImFycmF5XCIpIHtcbiAgICAgIGkubGVuZ3RoID09PSAxICYmIChpID0gW2lbMF0sIGlbMF1dKSwgaSA9IGkuc2xpY2UoMCk7XG4gICAgICBmb3IgKGxldCBwID0gMDsgcCA8IGkubGVuZ3RoOyBwKyspXG4gICAgICAgIGlbcF0gPSBBKGlbcF0pO1xuICAgICAgYy5sZW5ndGggPSAwO1xuICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBpLmxlbmd0aDsgcCsrKVxuICAgICAgICBjLnB1c2gocCAvIChpLmxlbmd0aCAtIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIFMoKSwgbCA9IGk7XG4gIH0sIFkgPSBmdW5jdGlvbihpKSB7XG4gICAgaWYgKGEgIT0gbnVsbCkge1xuICAgICAgY29uc3QgcCA9IGEubGVuZ3RoIC0gMTtcbiAgICAgIGxldCB4ID0gMDtcbiAgICAgIGZvciAoOyB4IDwgcCAmJiBpID49IGFbeF07IClcbiAgICAgICAgeCsrO1xuICAgICAgcmV0dXJuIHggLSAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgbGV0IEMgPSAoaSkgPT4gaSwgUCA9IChpKSA9PiBpO1xuICBjb25zdCBPID0gZnVuY3Rpb24oaSwgcCkge1xuICAgIGxldCB4LCB5O1xuICAgIGlmIChwID09IG51bGwgJiYgKHAgPSAhMSksIGlzTmFOKGkpIHx8IGkgPT09IG51bGwpXG4gICAgICByZXR1cm4gbjtcbiAgICBwID8geSA9IGkgOiBhICYmIGEubGVuZ3RoID4gMiA/IHkgPSBZKGkpIC8gKGEubGVuZ3RoIC0gMikgOiBiICE9PSBkID8geSA9IChpIC0gZCkgLyAoYiAtIGQpIDogeSA9IDEsIHkgPSBQKHkpLCBwIHx8ICh5ID0gQyh5KSksIGcgIT09IDEgJiYgKHkgPSBabih5LCBnKSksIHkgPSBmWzBdICsgeSAqICgxIC0gZlswXSAtIGZbMV0pLCB5ID0gSih5LCAwLCAxKTtcbiAgICBjb25zdCBOID0gTWF0aC5mbG9vcih5ICogMWU0KTtcbiAgICBpZiAoUiAmJiBNW05dKVxuICAgICAgeCA9IE1bTl07XG4gICAgZWxzZSB7XG4gICAgICBpZiAoTChsKSA9PT0gXCJhcnJheVwiKVxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBjb25zdCBHID0gY1trXTtcbiAgICAgICAgICBpZiAoeSA8PSBHKSB7XG4gICAgICAgICAgICB4ID0gbFtrXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoeSA+PSBHICYmIGsgPT09IGMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgeCA9IGxba107XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHkgPiBHICYmIHkgPCBjW2sgKyAxXSkge1xuICAgICAgICAgICAgeSA9ICh5IC0gRykgLyAoY1trICsgMV0gLSBHKSwgeCA9IEEuaW50ZXJwb2xhdGUoXG4gICAgICAgICAgICAgIGxba10sXG4gICAgICAgICAgICAgIGxbayArIDFdLFxuICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICBlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBlbHNlIEwobCkgPT09IFwiZnVuY3Rpb25cIiAmJiAoeCA9IGwoeSkpO1xuICAgICAgUiAmJiAoTVtOXSA9IHgpO1xuICAgIH1cbiAgICByZXR1cm4geDtcbiAgfTtcbiAgdmFyIFMgPSAoKSA9PiBNID0ge307XG4gIHcodCk7XG4gIGNvbnN0IEUgPSBmdW5jdGlvbihpKSB7XG4gICAgY29uc3QgcCA9IEEoTyhpKSk7XG4gICAgcmV0dXJuIGggJiYgcFtoXSA/IHBbaF0oKSA6IHA7XG4gIH07XG4gIHJldHVybiBFLmNsYXNzZXMgPSBmdW5jdGlvbihpKSB7XG4gICAgaWYgKGkgIT0gbnVsbCkge1xuICAgICAgaWYgKEwoaSkgPT09IFwiYXJyYXlcIilcbiAgICAgICAgYSA9IGksIG8gPSBbaVswXSwgaVtpLmxlbmd0aCAtIDFdXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwID0gQS5hbmFseXplKG8pO1xuICAgICAgICBpID09PSAwID8gYSA9IFtwLm1pbiwgcC5tYXhdIDogYSA9IEEubGltaXRzKHAsIFwiZVwiLCBpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBFO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfSwgRS5kb21haW4gPSBmdW5jdGlvbihpKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgcmV0dXJuIHM7XG4gICAgcyA9IGkuc2xpY2UoMCksIGQgPSBpWzBdLCBiID0gaVtpLmxlbmd0aCAtIDFdLCBjID0gW107XG4gICAgY29uc3QgcCA9IGwubGVuZ3RoO1xuICAgIGlmIChpLmxlbmd0aCA9PT0gcCAmJiBkICE9PSBiKVxuICAgICAgZm9yIChsZXQgeCBvZiBBcnJheS5mcm9tKGkpKVxuICAgICAgICBjLnB1c2goKHggLSBkKSAvIChiIC0gZCkpO1xuICAgIGVsc2Uge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBwOyB4KyspXG4gICAgICAgIGMucHVzaCh4IC8gKHAgLSAxKSk7XG4gICAgICBpZiAoaS5sZW5ndGggPiAyKSB7XG4gICAgICAgIGNvbnN0IHggPSBpLm1hcCgoTiwgaykgPT4gayAvIChpLmxlbmd0aCAtIDEpKSwgeSA9IGkubWFwKChOKSA9PiAoTiAtIGQpIC8gKGIgLSBkKSk7XG4gICAgICAgIHkuZXZlcnkoKE4sIGspID0+IHhba10gPT09IE4pIHx8IChQID0gKE4pID0+IHtcbiAgICAgICAgICBpZiAoTiA8PSAwIHx8IE4gPj0gMSkgcmV0dXJuIE47XG4gICAgICAgICAgbGV0IGsgPSAwO1xuICAgICAgICAgIGZvciAoOyBOID49IHlbayArIDFdOyApIGsrKztcbiAgICAgICAgICBjb25zdCBHID0gKE4gLSB5W2tdKSAvICh5W2sgKyAxXSAtIHlba10pO1xuICAgICAgICAgIHJldHVybiB4W2tdICsgRyAqICh4W2sgKyAxXSAtIHhba10pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG8gPSBbZCwgYl0sIEU7XG4gIH0sIEUubW9kZSA9IGZ1bmN0aW9uKGkpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChlID0gaSwgUygpLCBFKSA6IGU7XG4gIH0sIEUucmFuZ2UgPSBmdW5jdGlvbihpLCBwKSB7XG4gICAgcmV0dXJuIHcoaSksIEU7XG4gIH0sIEUub3V0ID0gZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiBoID0gaSwgRTtcbiAgfSwgRS5zcHJlYWQgPSBmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAociA9IGksIEUpIDogcjtcbiAgfSwgRS5jb3JyZWN0TGlnaHRuZXNzID0gZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiBpID09IG51bGwgJiYgKGkgPSAhMCksIG0gPSBpLCBTKCksIG0gPyBDID0gZnVuY3Rpb24ocCkge1xuICAgICAgY29uc3QgeCA9IE8oMCwgITApLmxhYigpWzBdLCB5ID0gTygxLCAhMCkubGFiKClbMF0sIE4gPSB4ID4geTtcbiAgICAgIGxldCBrID0gTyhwLCAhMCkubGFiKClbMF07XG4gICAgICBjb25zdCBHID0geCArICh5IC0geCkgKiBwO1xuICAgICAgbGV0IEYgPSBrIC0gRywgaXQgPSAwLCBhdCA9IDEsIHV0ID0gMjA7XG4gICAgICBmb3IgKDsgTWF0aC5hYnMoRikgPiAwLjAxICYmIHV0LS0gPiAwOyApXG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gTiAmJiAoRiAqPSAtMSksIEYgPCAwID8gKGl0ID0gcCwgcCArPSAoYXQgLSBwKSAqIDAuNSkgOiAoYXQgPSBwLCBwICs9IChpdCAtIHApICogMC41KSwgayA9IE8ocCwgITApLmxhYigpWzBdLCBGID0gayAtIEc7XG4gICAgICAgIH0pKCk7XG4gICAgICByZXR1cm4gcDtcbiAgICB9IDogQyA9IChwKSA9PiBwLCBFO1xuICB9LCBFLnBhZGRpbmcgPSBmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIGkgIT0gbnVsbCA/IChMKGkpID09PSBcIm51bWJlclwiICYmIChpID0gW2ksIGldKSwgZiA9IGksIEUpIDogZjtcbiAgfSwgRS5jb2xvcnMgPSBmdW5jdGlvbihpLCBwKSB7XG4gICAgYXJndW1lbnRzLmxlbmd0aCA8IDIgJiYgKHAgPSBcImhleFwiKTtcbiAgICBsZXQgeCA9IFtdO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgeCA9IGwuc2xpY2UoMCk7XG4gICAgZWxzZSBpZiAoaSA9PT0gMSlcbiAgICAgIHggPSBbRSgwLjUpXTtcbiAgICBlbHNlIGlmIChpID4gMSkge1xuICAgICAgY29uc3QgeSA9IG9bMF0sIE4gPSBvWzFdIC0geTtcbiAgICAgIHggPSBJbigwLCBpKS5tYXAoXG4gICAgICAgIChrKSA9PiBFKHkgKyBrIC8gKGkgLSAxKSAqIE4pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ID0gW107XG4gICAgICBsZXQgeSA9IFtdO1xuICAgICAgaWYgKGEgJiYgYS5sZW5ndGggPiAyKVxuICAgICAgICBmb3IgKGxldCBOID0gMSwgayA9IGEubGVuZ3RoLCBHID0gMSA8PSBrOyBHID8gTiA8IGsgOiBOID4gazsgRyA/IE4rKyA6IE4tLSlcbiAgICAgICAgICB5LnB1c2goKGFbTiAtIDFdICsgYVtOXSkgKiAwLjUpO1xuICAgICAgZWxzZVxuICAgICAgICB5ID0gbztcbiAgICAgIHggPSB5Lm1hcCgoTikgPT4gRShOKSk7XG4gICAgfVxuICAgIHJldHVybiBBW3BdICYmICh4ID0geC5tYXAoKHkpID0+IHlbcF0oKSkpLCB4O1xuICB9LCBFLmNhY2hlID0gZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiBpICE9IG51bGwgPyAoUiA9IGksIEUpIDogUjtcbiAgfSwgRS5nYW1tYSA9IGZ1bmN0aW9uKGkpIHtcbiAgICByZXR1cm4gaSAhPSBudWxsID8gKGcgPSBpLCBFKSA6IGc7XG4gIH0sIEUubm9kYXRhID0gZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiBpICE9IG51bGwgPyAobiA9IEEoaSksIEUpIDogbjtcbiAgfSwgRTtcbn1cbmZ1bmN0aW9uIEluKHQsIGUsIG4pIHtcbiAgbGV0IHIgPSBbXSwgbyA9IHQgPCBlLCBzID0gZTtcbiAgZm9yIChsZXQgYyA9IHQ7IG8gPyBjIDwgcyA6IGMgPiBzOyBvID8gYysrIDogYy0tKVxuICAgIHIucHVzaChjKTtcbiAgcmV0dXJuIHI7XG59XG5jb25zdCBUbiA9IGZ1bmN0aW9uKHQpIHtcbiAgbGV0IGUgPSBbMSwgMV07XG4gIGZvciAobGV0IG4gPSAxOyBuIDwgdDsgbisrKSB7XG4gICAgbGV0IHIgPSBbMV07XG4gICAgZm9yIChsZXQgbyA9IDE7IG8gPD0gZS5sZW5ndGg7IG8rKylcbiAgICAgIHJbb10gPSAoZVtvXSB8fCAwKSArIGVbbyAtIDFdO1xuICAgIGUgPSByO1xuICB9XG4gIHJldHVybiBlO1xufSwgS24gPSBmdW5jdGlvbih0KSB7XG4gIGxldCBlLCBuLCByLCBvO1xuICBpZiAodCA9IHQubWFwKChzKSA9PiBuZXcgdShzKSksIHQubGVuZ3RoID09PSAyKVxuICAgIFtuLCByXSA9IHQubWFwKChzKSA9PiBzLmxhYigpKSwgZSA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgIGNvbnN0IGMgPSBbMCwgMSwgMl0ubWFwKChmKSA9PiBuW2ZdICsgcyAqIChyW2ZdIC0gbltmXSkpO1xuICAgICAgcmV0dXJuIG5ldyB1KGMsIFwibGFiXCIpO1xuICAgIH07XG4gIGVsc2UgaWYgKHQubGVuZ3RoID09PSAzKVxuICAgIFtuLCByLCBvXSA9IHQubWFwKChzKSA9PiBzLmxhYigpKSwgZSA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgIGNvbnN0IGMgPSBbMCwgMSwgMl0ubWFwKFxuICAgICAgICAoZikgPT4gKDEgLSBzKSAqICgxIC0gcykgKiBuW2ZdICsgMiAqICgxIC0gcykgKiBzICogcltmXSArIHMgKiBzICogb1tmXVxuICAgICAgKTtcbiAgICAgIHJldHVybiBuZXcgdShjLCBcImxhYlwiKTtcbiAgICB9O1xuICBlbHNlIGlmICh0Lmxlbmd0aCA9PT0gNCkge1xuICAgIGxldCBzO1xuICAgIFtuLCByLCBvLCBzXSA9IHQubWFwKChjKSA9PiBjLmxhYigpKSwgZSA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgIGNvbnN0IGYgPSBbMCwgMSwgMl0ubWFwKFxuICAgICAgICAoYSkgPT4gKDEgLSBjKSAqICgxIC0gYykgKiAoMSAtIGMpICogblthXSArIDMgKiAoMSAtIGMpICogKDEgLSBjKSAqIGMgKiByW2FdICsgMyAqICgxIC0gYykgKiBjICogYyAqIG9bYV0gKyBjICogYyAqIGMgKiBzW2FdXG4gICAgICApO1xuICAgICAgcmV0dXJuIG5ldyB1KGYsIFwibGFiXCIpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAodC5sZW5ndGggPj0gNSkge1xuICAgIGxldCBzLCBjLCBmO1xuICAgIHMgPSB0Lm1hcCgoYSkgPT4gYS5sYWIoKSksIGYgPSB0Lmxlbmd0aCAtIDEsIGMgPSBUbihmKSwgZSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgIGNvbnN0IGwgPSAxIC0gYSwgaCA9IFswLCAxLCAyXS5tYXAoXG4gICAgICAgIChkKSA9PiBzLnJlZHVjZShcbiAgICAgICAgICAoYiwgbSwgTSkgPT4gYiArIGNbTV0gKiBsICoqIChmIC0gTSkgKiBhICoqIE0gKiBtW2RdLFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBuZXcgdShoLCBcImxhYlwiKTtcbiAgICB9O1xuICB9IGVsc2VcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk5vIHBvaW50IGluIHJ1bm5pbmcgYmV6aWVyIHdpdGggb25seSBvbmUgY29sb3IuXCIpO1xuICByZXR1cm4gZTtcbn0sIFduID0gKHQpID0+IHtcbiAgY29uc3QgZSA9IEtuKHQpO1xuICByZXR1cm4gZS5zY2FsZSA9ICgpID0+IGd0KGUpLCBlO1xufSwgeyByb3VuZDogcGUgfSA9IE1hdGg7XG51LnByb3RvdHlwZS5yZ2IgPSBmdW5jdGlvbih0ID0gITApIHtcbiAgcmV0dXJuIHQgPT09ICExID8gdGhpcy5fcmdiLnNsaWNlKDAsIDMpIDogdGhpcy5fcmdiLnNsaWNlKDAsIDMpLm1hcChwZSk7XG59O1xudS5wcm90b3R5cGUucmdiYSA9IGZ1bmN0aW9uKHQgPSAhMCkge1xuICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsIDQpLm1hcCgoZSwgbikgPT4gbiA8IDMgPyB0ID09PSAhMSA/IGUgOiBwZShlKSA6IGUpO1xufTtcbmNvbnN0IEhuID0gKC4uLnQpID0+IG5ldyB1KC4uLnQsIFwicmdiXCIpO1xuT2JqZWN0LmFzc2lnbihBLCB7IHJnYjogSG4gfSk7XG5fLmZvcm1hdC5yZ2IgPSAoLi4udCkgPT4ge1xuICBjb25zdCBlID0gJCh0LCBcInJnYmFcIik7XG4gIHJldHVybiBlWzNdID09PSB2b2lkIDAgJiYgKGVbM10gPSAxKSwgZTtcbn07XG5fLmF1dG9kZXRlY3QucHVzaCh7XG4gIHA6IDMsXG4gIHRlc3Q6ICguLi50KSA9PiB7XG4gICAgaWYgKHQgPSAkKHQsIFwicmdiYVwiKSwgTCh0KSA9PT0gXCJhcnJheVwiICYmICh0Lmxlbmd0aCA9PT0gMyB8fCB0Lmxlbmd0aCA9PT0gNCAmJiBMKHRbM10pID09IFwibnVtYmVyXCIgJiYgdFszXSA+PSAwICYmIHRbM10gPD0gMSkpXG4gICAgICByZXR1cm4gXCJyZ2JcIjtcbiAgfVxufSk7XG5jb25zdCBJID0gKHQsIGUsIG4pID0+IHtcbiAgaWYgKCFJW25dKVxuICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gYmxlbmQgbW9kZSBcIiArIG4pO1xuICByZXR1cm4gSVtuXSh0LCBlKTtcbn0sIFYgPSAodCkgPT4gKGUsIG4pID0+IHtcbiAgY29uc3QgciA9IEEobikucmdiKCksIG8gPSBBKGUpLnJnYigpO1xuICByZXR1cm4gQS5yZ2IodChyLCBvKSk7XG59LCBVID0gKHQpID0+IChlLCBuKSA9PiB7XG4gIGNvbnN0IHIgPSBbXTtcbiAgcmV0dXJuIHJbMF0gPSB0KGVbMF0sIG5bMF0pLCByWzFdID0gdChlWzFdLCBuWzFdKSwgclsyXSA9IHQoZVsyXSwgblsyXSksIHI7XG59LCBEbiA9ICh0KSA9PiB0LCBGbiA9ICh0LCBlKSA9PiB0ICogZSAvIDI1NSwgVm4gPSAodCwgZSkgPT4gdCA+IGUgPyBlIDogdCwgVW4gPSAodCwgZSkgPT4gdCA+IGUgPyB0IDogZSwgSm4gPSAodCwgZSkgPT4gMjU1ICogKDEgLSAoMSAtIHQgLyAyNTUpICogKDEgLSBlIC8gMjU1KSksIFFuID0gKHQsIGUpID0+IGUgPCAxMjggPyAyICogdCAqIGUgLyAyNTUgOiAyNTUgKiAoMSAtIDIgKiAoMSAtIHQgLyAyNTUpICogKDEgLSBlIC8gMjU1KSksIHQwID0gKHQsIGUpID0+IDI1NSAqICgxIC0gKDEgLSBlIC8gMjU1KSAvICh0IC8gMjU1KSksIGUwID0gKHQsIGUpID0+IHQgPT09IDI1NSA/IDI1NSA6ICh0ID0gMjU1ICogKGUgLyAyNTUpIC8gKDEgLSB0IC8gMjU1KSwgdCA+IDI1NSA/IDI1NSA6IHQpO1xuSS5ub3JtYWwgPSBWKFUoRG4pKTtcbkkubXVsdGlwbHkgPSBWKFUoRm4pKTtcbkkuc2NyZWVuID0gVihVKEpuKSk7XG5JLm92ZXJsYXkgPSBWKFUoUW4pKTtcbkkuZGFya2VuID0gVihVKFZuKSk7XG5JLmxpZ2h0ZW4gPSBWKFUoVW4pKTtcbkkuZG9kZ2UgPSBWKFUoZTApKTtcbkkuYnVybiA9IFYoVSh0MCkpO1xuY29uc3QgeyBwb3c6IG4wLCBzaW46IHIwLCBjb3M6IG8wIH0gPSBNYXRoO1xuZnVuY3Rpb24gYzAodCA9IDMwMCwgZSA9IC0xLjUsIG4gPSAxLCByID0gMSwgbyA9IFswLCAxXSkge1xuICBsZXQgcyA9IDAsIGM7XG4gIEwobykgPT09IFwiYXJyYXlcIiA/IGMgPSBvWzFdIC0gb1swXSA6IChjID0gMCwgbyA9IFtvLCBvXSk7XG4gIGNvbnN0IGYgPSBmdW5jdGlvbihhKSB7XG4gICAgY29uc3QgbCA9IFcgKiAoKHQgKyAxMjApIC8gMzYwICsgZSAqIGEpLCBoID0gbjAob1swXSArIGMgKiBhLCByKSwgYiA9IChzICE9PSAwID8gblswXSArIGEgKiBzIDogbikgKiBoICogKDEgLSBoKSAvIDIsIG0gPSBvMChsKSwgTSA9IHIwKGwpLCBSID0gaCArIGIgKiAoLTAuMTQ4NjEgKiBtICsgMS43ODI3NyAqIE0pLCBnID0gaCArIGIgKiAoLTAuMjkyMjcgKiBtIC0gMC45MDY0OSAqIE0pLCB3ID0gaCArIGIgKiAoMS45NzI5NCAqIG0pO1xuICAgIHJldHVybiBBKFl0KFtSICogMjU1LCBnICogMjU1LCB3ICogMjU1LCAxXSkpO1xuICB9O1xuICByZXR1cm4gZi5zdGFydCA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gYSA9PSBudWxsID8gdCA6ICh0ID0gYSwgZik7XG4gIH0sIGYucm90YXRpb25zID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhID09IG51bGwgPyBlIDogKGUgPSBhLCBmKTtcbiAgfSwgZi5nYW1tYSA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gYSA9PSBudWxsID8gciA6IChyID0gYSwgZik7XG4gIH0sIGYuaHVlID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhID09IG51bGwgPyBuIDogKG4gPSBhLCBMKG4pID09PSBcImFycmF5XCIgPyAocyA9IG5bMV0gLSBuWzBdLCBzID09PSAwICYmIChuID0gblsxXSkpIDogcyA9IDAsIGYpO1xuICB9LCBmLmxpZ2h0bmVzcyA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gYSA9PSBudWxsID8gbyA6IChMKGEpID09PSBcImFycmF5XCIgPyAobyA9IGEsIGMgPSBhWzFdIC0gYVswXSkgOiAobyA9IFthLCBhXSwgYyA9IDApLCBmKTtcbiAgfSwgZi5zY2FsZSA9ICgpID0+IEEuc2NhbGUoZiksIGYuaHVlKG4pLCBmO1xufVxuY29uc3QgczAgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIiwgeyBmbG9vcjogZjAsIHJhbmRvbTogYTAgfSA9IE1hdGgsIGwwID0gKHQgPSBhMCkgPT4ge1xuICBsZXQgZSA9IFwiI1wiO1xuICBmb3IgKGxldCBuID0gMDsgbiA8IDY7IG4rKylcbiAgICBlICs9IHMwLmNoYXJBdChmMCh0KCkgKiAxNikpO1xuICByZXR1cm4gbmV3IHUoZSwgXCJoZXhcIik7XG59LCB7IGxvZzogV3QsIHBvdzogaTAsIGZsb29yOiB1MCwgYWJzOiBiMCB9ID0gTWF0aDtcbmZ1bmN0aW9uIG1lKHQsIGUgPSBudWxsKSB7XG4gIGNvbnN0IG4gPSB7XG4gICAgbWluOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgIG1heDogTnVtYmVyLk1BWF9WQUxVRSAqIC0xLFxuICAgIHN1bTogMCxcbiAgICB2YWx1ZXM6IFtdLFxuICAgIGNvdW50OiAwXG4gIH07XG4gIHJldHVybiBMKHQpID09PSBcIm9iamVjdFwiICYmICh0ID0gT2JqZWN0LnZhbHVlcyh0KSksIHQuZm9yRWFjaCgocikgPT4ge1xuICAgIGUgJiYgTChyKSA9PT0gXCJvYmplY3RcIiAmJiAociA9IHJbZV0pLCByICE9IG51bGwgJiYgIWlzTmFOKHIpICYmIChuLnZhbHVlcy5wdXNoKHIpLCBuLnN1bSArPSByLCByIDwgbi5taW4gJiYgKG4ubWluID0gciksIHIgPiBuLm1heCAmJiAobi5tYXggPSByKSwgbi5jb3VudCArPSAxKTtcbiAgfSksIG4uZG9tYWluID0gW24ubWluLCBuLm1heF0sIG4ubGltaXRzID0gKHIsIG8pID0+IGdlKG4sIHIsIG8pLCBuO1xufVxuZnVuY3Rpb24gZ2UodCwgZSA9IFwiZXF1YWxcIiwgbiA9IDcpIHtcbiAgTCh0KSA9PSBcImFycmF5XCIgJiYgKHQgPSBtZSh0KSk7XG4gIGNvbnN0IHsgbWluOiByLCBtYXg6IG8gfSA9IHQsIHMgPSB0LnZhbHVlcy5zb3J0KChmLCBhKSA9PiBmIC0gYSk7XG4gIGlmIChuID09PSAxKVxuICAgIHJldHVybiBbciwgb107XG4gIGNvbnN0IGMgPSBbXTtcbiAgaWYgKGUuc3Vic3RyKDAsIDEpID09PSBcImNcIiAmJiAoYy5wdXNoKHIpLCBjLnB1c2gobykpLCBlLnN1YnN0cigwLCAxKSA9PT0gXCJlXCIpIHtcbiAgICBjLnB1c2gocik7XG4gICAgZm9yIChsZXQgZiA9IDE7IGYgPCBuOyBmKyspXG4gICAgICBjLnB1c2gociArIGYgLyBuICogKG8gLSByKSk7XG4gICAgYy5wdXNoKG8pO1xuICB9IGVsc2UgaWYgKGUuc3Vic3RyKDAsIDEpID09PSBcImxcIikge1xuICAgIGlmIChyIDw9IDApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiTG9nYXJpdGhtaWMgc2NhbGVzIGFyZSBvbmx5IHBvc3NpYmxlIGZvciB2YWx1ZXMgPiAwXCJcbiAgICAgICk7XG4gICAgY29uc3QgZiA9IE1hdGguTE9HMTBFICogV3QociksIGEgPSBNYXRoLkxPRzEwRSAqIFd0KG8pO1xuICAgIGMucHVzaChyKTtcbiAgICBmb3IgKGxldCBsID0gMTsgbCA8IG47IGwrKylcbiAgICAgIGMucHVzaChpMCgxMCwgZiArIGwgLyBuICogKGEgLSBmKSkpO1xuICAgIGMucHVzaChvKTtcbiAgfSBlbHNlIGlmIChlLnN1YnN0cigwLCAxKSA9PT0gXCJxXCIpIHtcbiAgICBjLnB1c2gocik7XG4gICAgZm9yIChsZXQgZiA9IDE7IGYgPCBuOyBmKyspIHtcbiAgICAgIGNvbnN0IGEgPSAocy5sZW5ndGggLSAxKSAqIGYgLyBuLCBsID0gdTAoYSk7XG4gICAgICBpZiAobCA9PT0gYSlcbiAgICAgICAgYy5wdXNoKHNbbF0pO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGggPSBhIC0gbDtcbiAgICAgICAgYy5wdXNoKHNbbF0gKiAoMSAtIGgpICsgc1tsICsgMV0gKiBoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYy5wdXNoKG8pO1xuICB9IGVsc2UgaWYgKGUuc3Vic3RyKDAsIDEpID09PSBcImtcIikge1xuICAgIGxldCBmO1xuICAgIGNvbnN0IGEgPSBzLmxlbmd0aCwgbCA9IG5ldyBBcnJheShhKSwgaCA9IG5ldyBBcnJheShuKTtcbiAgICBsZXQgZCA9ICEwLCBiID0gMCwgbSA9IG51bGw7XG4gICAgbSA9IFtdLCBtLnB1c2gocik7XG4gICAgZm9yIChsZXQgZyA9IDE7IGcgPCBuOyBnKyspXG4gICAgICBtLnB1c2gociArIGcgLyBuICogKG8gLSByKSk7XG4gICAgZm9yIChtLnB1c2gobyk7IGQ7ICkge1xuICAgICAgZm9yIChsZXQgdyA9IDA7IHcgPCBuOyB3KyspXG4gICAgICAgIGhbd10gPSAwO1xuICAgICAgZm9yIChsZXQgdyA9IDA7IHcgPCBhOyB3KyspIHtcbiAgICAgICAgY29uc3QgWSA9IHNbd107XG4gICAgICAgIGxldCBDID0gTnVtYmVyLk1BWF9WQUxVRSwgUDtcbiAgICAgICAgZm9yIChsZXQgTyA9IDA7IE8gPCBuOyBPKyspIHtcbiAgICAgICAgICBjb25zdCBTID0gYjAobVtPXSAtIFkpO1xuICAgICAgICAgIFMgPCBDICYmIChDID0gUywgUCA9IE8pLCBoW1BdKyssIGxbd10gPSBQO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBnID0gbmV3IEFycmF5KG4pO1xuICAgICAgZm9yIChsZXQgdyA9IDA7IHcgPCBuOyB3KyspXG4gICAgICAgIGdbd10gPSBudWxsO1xuICAgICAgZm9yIChsZXQgdyA9IDA7IHcgPCBhOyB3KyspXG4gICAgICAgIGYgPSBsW3ddLCBnW2ZdID09PSBudWxsID8gZ1tmXSA9IHNbd10gOiBnW2ZdICs9IHNbd107XG4gICAgICBmb3IgKGxldCB3ID0gMDsgdyA8IG47IHcrKylcbiAgICAgICAgZ1t3XSAqPSAxIC8gaFt3XTtcbiAgICAgIGQgPSAhMTtcbiAgICAgIGZvciAobGV0IHcgPSAwOyB3IDwgbjsgdysrKVxuICAgICAgICBpZiAoZ1t3XSAhPT0gbVt3XSkge1xuICAgICAgICAgIGQgPSAhMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgbSA9IGcsIGIrKywgYiA+IDIwMCAmJiAoZCA9ICExKTtcbiAgICB9XG4gICAgY29uc3QgTSA9IHt9O1xuICAgIGZvciAobGV0IGcgPSAwOyBnIDwgbjsgZysrKVxuICAgICAgTVtnXSA9IFtdO1xuICAgIGZvciAobGV0IGcgPSAwOyBnIDwgYTsgZysrKVxuICAgICAgZiA9IGxbZ10sIE1bZl0ucHVzaChzW2ddKTtcbiAgICBsZXQgUiA9IFtdO1xuICAgIGZvciAobGV0IGcgPSAwOyBnIDwgbjsgZysrKVxuICAgICAgUi5wdXNoKE1bZ11bMF0pLCBSLnB1c2goTVtnXVtNW2ddLmxlbmd0aCAtIDFdKTtcbiAgICBSID0gUi5zb3J0KChnLCB3KSA9PiBnIC0gdyksIGMucHVzaChSWzBdKTtcbiAgICBmb3IgKGxldCBnID0gMTsgZyA8IFIubGVuZ3RoOyBnICs9IDIpIHtcbiAgICAgIGNvbnN0IHcgPSBSW2ddO1xuICAgICAgIWlzTmFOKHcpICYmIGMuaW5kZXhPZih3KSA9PT0gLTEgJiYgYy5wdXNoKHcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYztcbn1cbmNvbnN0IGgwID0gKHQsIGUpID0+IHtcbiAgdCA9IG5ldyB1KHQpLCBlID0gbmV3IHUoZSk7XG4gIGNvbnN0IG4gPSB0Lmx1bWluYW5jZSgpLCByID0gZS5sdW1pbmFuY2UoKTtcbiAgcmV0dXJuIG4gPiByID8gKG4gKyAwLjA1KSAvIChyICsgMC4wNSkgOiAociArIDAuMDUpIC8gKG4gKyAwLjA1KTtcbn07XG4vKipcbiAqIEBsaWNlbnNlXG4gKlxuICogVGhlIEFQQ0EgY29udHJhc3QgcHJlZGljdGlvbiBhbGdvcml0aG0gaXMgYmFzZWQgb2YgdGhlIGZvcm11bGFzIHB1Ymxpc2hlZFxuICogaW4gdGhlIEFQQ0EtMS4wLjk4RyBzcGVjaWZpY2F0aW9uIGJ5IE15bmRleC4gVGhlIHNwZWNpZmljYXRpb24gaXMgYXZhaWxhYmxlIGF0OlxuICogaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL015bmRleC9hcGNhLXczL21hc3Rlci9pbWFnZXMvQVBDQXczXzAuMS4xN19BUENBMC4wLjk4Ry5zdmdcbiAqXG4gKiBOb3RlIHRoYXQgdGhlIEFQQ0EgaW1wbGVtZW50YXRpb24gaXMgc3RpbGwgYmV0YSwgc28gcGxlYXNlIHVwZGF0ZSB0b1xuICogZnV0dXJlIHZlcnNpb25zIG9mIGNocm9tYS5qcyB3aGVuIHRoZXkgYmVjb21lIGF2YWlsYWJsZS5cbiAqXG4gKiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgQVBDQSBSZWFkYWJpbGl0eSBDcml0ZXJpb24gYXRcbiAqIGh0dHBzOi8vcmVhZHRlY2gub3JnL0FSQy9cbiAqL1xuY29uc3QgSHQgPSAwLjAyNywgZDAgPSA1ZS00LCBwMCA9IDAuMSwgRHQgPSAxLjE0LCBodCA9IDAuMDIyLCBGdCA9IDEuNDE0LCBtMCA9ICh0LCBlKSA9PiB7XG4gIHQgPSBuZXcgdSh0KSwgZSA9IG5ldyB1KGUpLCB0LmFscGhhKCkgPCAxICYmICh0ID0gcnQoZSwgdCwgdC5hbHBoYSgpLCBcInJnYlwiKSk7XG4gIGNvbnN0IG4gPSBWdCguLi50LnJnYigpKSwgciA9IFZ0KC4uLmUucmdiKCkpLCBvID0gbiA+PSBodCA/IG4gOiBuICsgTWF0aC5wb3coaHQgLSBuLCBGdCksIHMgPSByID49IGh0ID8gciA6IHIgKyBNYXRoLnBvdyhodCAtIHIsIEZ0KSwgYyA9IE1hdGgucG93KHMsIDAuNTYpIC0gTWF0aC5wb3cobywgMC41NyksIGYgPSBNYXRoLnBvdyhzLCAwLjY1KSAtIE1hdGgucG93KG8sIDAuNjIpLCBhID0gTWF0aC5hYnMocyAtIG8pIDwgZDAgPyAwIDogbyA8IHMgPyBjICogRHQgOiBmICogRHQ7XG4gIHJldHVybiAoTWF0aC5hYnMoYSkgPCBwMCA/IDAgOiBhID4gMCA/IGEgLSBIdCA6IGEgKyBIdCkgKiAxMDA7XG59O1xuZnVuY3Rpb24gVnQodCwgZSwgbikge1xuICByZXR1cm4gMC4yMTI2NzI5ICogTWF0aC5wb3codCAvIDI1NSwgMi40KSArIDAuNzE1MTUyMiAqIE1hdGgucG93KGUgLyAyNTUsIDIuNCkgKyAwLjA3MjE3NSAqIE1hdGgucG93KG4gLyAyNTUsIDIuNCk7XG59XG5jb25zdCB7IHNxcnQ6IEssIHBvdzogaiwgbWluOiBnMCwgbWF4OiB3MCwgYXRhbjI6IFV0LCBhYnM6IEp0LCBjb3M6IGR0LCBzaW46IFF0LCBleHA6IHkwLCBQSTogdGUgfSA9IE1hdGg7XG5mdW5jdGlvbiBrMCh0LCBlLCBuID0gMSwgciA9IDEsIG8gPSAxKSB7XG4gIHZhciBzID0gZnVuY3Rpb24oX3QpIHtcbiAgICByZXR1cm4gMzYwICogX3QgLyAoMiAqIHRlKTtcbiAgfSwgYyA9IGZ1bmN0aW9uKF90KSB7XG4gICAgcmV0dXJuIDIgKiB0ZSAqIF90IC8gMzYwO1xuICB9O1xuICB0ID0gbmV3IHUodCksIGUgPSBuZXcgdShlKTtcbiAgY29uc3QgW2YsIGEsIGxdID0gQXJyYXkuZnJvbSh0LmxhYigpKSwgW2gsIGQsIGJdID0gQXJyYXkuZnJvbShlLmxhYigpKSwgbSA9IChmICsgaCkgLyAyLCBNID0gSyhqKGEsIDIpICsgaihsLCAyKSksIFIgPSBLKGooZCwgMikgKyBqKGIsIDIpKSwgZyA9IChNICsgUikgLyAyLCB3ID0gMC41ICogKDEgLSBLKGooZywgNykgLyAoaihnLCA3KSArIGooMjUsIDcpKSkpLCBZID0gYSAqICgxICsgdyksIEMgPSBkICogKDEgKyB3KSwgUCA9IEsoaihZLCAyKSArIGoobCwgMikpLCBPID0gSyhqKEMsIDIpICsgaihiLCAyKSksIFMgPSAoUCArIE8pIC8gMiwgRSA9IHMoVXQobCwgWSkpLCBpID0gcyhVdChiLCBDKSksIHAgPSBFID49IDAgPyBFIDogRSArIDM2MCwgeCA9IGkgPj0gMCA/IGkgOiBpICsgMzYwLCB5ID0gSnQocCAtIHgpID4gMTgwID8gKHAgKyB4ICsgMzYwKSAvIDIgOiAocCArIHgpIC8gMiwgTiA9IDEgLSAwLjE3ICogZHQoYyh5IC0gMzApKSArIDAuMjQgKiBkdChjKDIgKiB5KSkgKyAwLjMyICogZHQoYygzICogeSArIDYpKSAtIDAuMiAqIGR0KGMoNCAqIHkgLSA2MykpO1xuICBsZXQgayA9IHggLSBwO1xuICBrID0gSnQoaykgPD0gMTgwID8gayA6IHggPD0gcCA/IGsgKyAzNjAgOiBrIC0gMzYwLCBrID0gMiAqIEsoUCAqIE8pICogUXQoYyhrKSAvIDIpO1xuICBjb25zdCBHID0gaCAtIGYsIEYgPSBPIC0gUCwgaXQgPSAxICsgMC4wMTUgKiBqKG0gLSA1MCwgMikgLyBLKDIwICsgaihtIC0gNTAsIDIpKSwgYXQgPSAxICsgMC4wNDUgKiBTLCB1dCA9IDEgKyAwLjAxNSAqIFMgKiBOLCBQZSA9IDMwICogeTAoLWooKHkgLSAyNzUpIC8gMjUsIDIpKSwgT2UgPSAtKDIgKiBLKGooUywgNykgLyAoaihTLCA3KSArIGooMjUsIDcpKSkpICogUXQoMiAqIGMoUGUpKSwgWWUgPSBLKFxuICAgIGooRyAvIChuICogaXQpLCAyKSArIGooRiAvIChyICogYXQpLCAyKSArIGooayAvIChvICogdXQpLCAyKSArIE9lICogKEYgLyAociAqIGF0KSkgKiAoayAvIChvICogdXQpKVxuICApO1xuICByZXR1cm4gdzAoMCwgZzAoMTAwLCBZZSkpO1xufVxuZnVuY3Rpb24gXzAodCwgZSwgbiA9IFwibGFiXCIpIHtcbiAgdCA9IG5ldyB1KHQpLCBlID0gbmV3IHUoZSk7XG4gIGNvbnN0IHIgPSB0LmdldChuKSwgbyA9IGUuZ2V0KG4pO1xuICBsZXQgcyA9IDA7XG4gIGZvciAobGV0IGMgaW4gcikge1xuICAgIGNvbnN0IGYgPSAocltjXSB8fCAwKSAtIChvW2NdIHx8IDApO1xuICAgIHMgKz0gZiAqIGY7XG4gIH1cbiAgcmV0dXJuIE1hdGguc3FydChzKTtcbn1cbmNvbnN0IE0wID0gKC4uLnQpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IHUoLi4udCksICEwO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gITE7XG4gIH1cbn0sICQwID0ge1xuICBjb29sKCkge1xuICAgIHJldHVybiBndChbQS5oc2woMTgwLCAxLCAwLjkpLCBBLmhzbCgyNTAsIDAuNywgMC40KV0pO1xuICB9LFxuICBob3QoKSB7XG4gICAgcmV0dXJuIGd0KFtcIiMwMDBcIiwgXCIjZjAwXCIsIFwiI2ZmMFwiLCBcIiNmZmZcIl0pLm1vZGUoXG4gICAgICBcInJnYlwiXG4gICAgKTtcbiAgfVxufSwgT3QgPSB7XG4gIC8vIHNlcXVlbnRpYWxcbiAgT3JSZDogW1wiI2ZmZjdlY1wiLCBcIiNmZWU4YzhcIiwgXCIjZmRkNDllXCIsIFwiI2ZkYmI4NFwiLCBcIiNmYzhkNTlcIiwgXCIjZWY2NTQ4XCIsIFwiI2Q3MzAxZlwiLCBcIiNiMzAwMDBcIiwgXCIjN2YwMDAwXCJdLFxuICBQdUJ1OiBbXCIjZmZmN2ZiXCIsIFwiI2VjZTdmMlwiLCBcIiNkMGQxZTZcIiwgXCIjYTZiZGRiXCIsIFwiIzc0YTljZlwiLCBcIiMzNjkwYzBcIiwgXCIjMDU3MGIwXCIsIFwiIzA0NWE4ZFwiLCBcIiMwMjM4NThcIl0sXG4gIEJ1UHU6IFtcIiNmN2ZjZmRcIiwgXCIjZTBlY2Y0XCIsIFwiI2JmZDNlNlwiLCBcIiM5ZWJjZGFcIiwgXCIjOGM5NmM2XCIsIFwiIzhjNmJiMVwiLCBcIiM4ODQxOWRcIiwgXCIjODEwZjdjXCIsIFwiIzRkMDA0YlwiXSxcbiAgT3JhbmdlczogW1wiI2ZmZjVlYlwiLCBcIiNmZWU2Y2VcIiwgXCIjZmRkMGEyXCIsIFwiI2ZkYWU2YlwiLCBcIiNmZDhkM2NcIiwgXCIjZjE2OTEzXCIsIFwiI2Q5NDgwMVwiLCBcIiNhNjM2MDNcIiwgXCIjN2YyNzA0XCJdLFxuICBCdUduOiBbXCIjZjdmY2ZkXCIsIFwiI2U1ZjVmOVwiLCBcIiNjY2VjZTZcIiwgXCIjOTlkOGM5XCIsIFwiIzY2YzJhNFwiLCBcIiM0MWFlNzZcIiwgXCIjMjM4YjQ1XCIsIFwiIzAwNmQyY1wiLCBcIiMwMDQ0MWJcIl0sXG4gIFlsT3JCcjogW1wiI2ZmZmZlNVwiLCBcIiNmZmY3YmNcIiwgXCIjZmVlMzkxXCIsIFwiI2ZlYzQ0ZlwiLCBcIiNmZTk5MjlcIiwgXCIjZWM3MDE0XCIsIFwiI2NjNGMwMlwiLCBcIiM5OTM0MDRcIiwgXCIjNjYyNTA2XCJdLFxuICBZbEduOiBbXCIjZmZmZmU1XCIsIFwiI2Y3ZmNiOVwiLCBcIiNkOWYwYTNcIiwgXCIjYWRkZDhlXCIsIFwiIzc4YzY3OVwiLCBcIiM0MWFiNWRcIiwgXCIjMjM4NDQzXCIsIFwiIzAwNjgzN1wiLCBcIiMwMDQ1MjlcIl0sXG4gIFJlZHM6IFtcIiNmZmY1ZjBcIiwgXCIjZmVlMGQyXCIsIFwiI2ZjYmJhMVwiLCBcIiNmYzkyNzJcIiwgXCIjZmI2YTRhXCIsIFwiI2VmM2IyY1wiLCBcIiNjYjE4MWRcIiwgXCIjYTUwZjE1XCIsIFwiIzY3MDAwZFwiXSxcbiAgUmRQdTogW1wiI2ZmZjdmM1wiLCBcIiNmZGUwZGRcIiwgXCIjZmNjNWMwXCIsIFwiI2ZhOWZiNVwiLCBcIiNmNzY4YTFcIiwgXCIjZGQzNDk3XCIsIFwiI2FlMDE3ZVwiLCBcIiM3YTAxNzdcIiwgXCIjNDkwMDZhXCJdLFxuICBHcmVlbnM6IFtcIiNmN2ZjZjVcIiwgXCIjZTVmNWUwXCIsIFwiI2M3ZTljMFwiLCBcIiNhMWQ5OWJcIiwgXCIjNzRjNDc2XCIsIFwiIzQxYWI1ZFwiLCBcIiMyMzhiNDVcIiwgXCIjMDA2ZDJjXCIsIFwiIzAwNDQxYlwiXSxcbiAgWWxHbkJ1OiBbXCIjZmZmZmQ5XCIsIFwiI2VkZjhiMVwiLCBcIiNjN2U5YjRcIiwgXCIjN2ZjZGJiXCIsIFwiIzQxYjZjNFwiLCBcIiMxZDkxYzBcIiwgXCIjMjI1ZWE4XCIsIFwiIzI1MzQ5NFwiLCBcIiMwODFkNThcIl0sXG4gIFB1cnBsZXM6IFtcIiNmY2ZiZmRcIiwgXCIjZWZlZGY1XCIsIFwiI2RhZGFlYlwiLCBcIiNiY2JkZGNcIiwgXCIjOWU5YWM4XCIsIFwiIzgwN2RiYVwiLCBcIiM2YTUxYTNcIiwgXCIjNTQyNzhmXCIsIFwiIzNmMDA3ZFwiXSxcbiAgR25CdTogW1wiI2Y3ZmNmMFwiLCBcIiNlMGYzZGJcIiwgXCIjY2NlYmM1XCIsIFwiI2E4ZGRiNVwiLCBcIiM3YmNjYzRcIiwgXCIjNGViM2QzXCIsIFwiIzJiOGNiZVwiLCBcIiMwODY4YWNcIiwgXCIjMDg0MDgxXCJdLFxuICBHcmV5czogW1wiI2ZmZmZmZlwiLCBcIiNmMGYwZjBcIiwgXCIjZDlkOWQ5XCIsIFwiI2JkYmRiZFwiLCBcIiM5Njk2OTZcIiwgXCIjNzM3MzczXCIsIFwiIzUyNTI1MlwiLCBcIiMyNTI1MjVcIiwgXCIjMDAwMDAwXCJdLFxuICBZbE9yUmQ6IFtcIiNmZmZmY2NcIiwgXCIjZmZlZGEwXCIsIFwiI2ZlZDk3NlwiLCBcIiNmZWIyNGNcIiwgXCIjZmQ4ZDNjXCIsIFwiI2ZjNGUyYVwiLCBcIiNlMzFhMWNcIiwgXCIjYmQwMDI2XCIsIFwiIzgwMDAyNlwiXSxcbiAgUHVSZDogW1wiI2Y3ZjRmOVwiLCBcIiNlN2UxZWZcIiwgXCIjZDRiOWRhXCIsIFwiI2M5OTRjN1wiLCBcIiNkZjY1YjBcIiwgXCIjZTcyOThhXCIsIFwiI2NlMTI1NlwiLCBcIiM5ODAwNDNcIiwgXCIjNjcwMDFmXCJdLFxuICBCbHVlczogW1wiI2Y3ZmJmZlwiLCBcIiNkZWViZjdcIiwgXCIjYzZkYmVmXCIsIFwiIzllY2FlMVwiLCBcIiM2YmFlZDZcIiwgXCIjNDI5MmM2XCIsIFwiIzIxNzFiNVwiLCBcIiMwODUxOWNcIiwgXCIjMDgzMDZiXCJdLFxuICBQdUJ1R246IFtcIiNmZmY3ZmJcIiwgXCIjZWNlMmYwXCIsIFwiI2QwZDFlNlwiLCBcIiNhNmJkZGJcIiwgXCIjNjdhOWNmXCIsIFwiIzM2OTBjMFwiLCBcIiMwMjgxOGFcIiwgXCIjMDE2YzU5XCIsIFwiIzAxNDYzNlwiXSxcbiAgVmlyaWRpczogW1wiIzQ0MDE1NFwiLCBcIiM0ODI3NzdcIiwgXCIjM2Y0YThhXCIsIFwiIzMxNjc4ZVwiLCBcIiMyNjgzOGZcIiwgXCIjMWY5ZDhhXCIsIFwiIzZjY2U1YVwiLCBcIiNiNmRlMmJcIiwgXCIjZmVlODI1XCJdLFxuICAvLyBkaXZlcmdpbmdcbiAgU3BlY3RyYWw6IFtcIiM5ZTAxNDJcIiwgXCIjZDUzZTRmXCIsIFwiI2Y0NmQ0M1wiLCBcIiNmZGFlNjFcIiwgXCIjZmVlMDhiXCIsIFwiI2ZmZmZiZlwiLCBcIiNlNmY1OThcIiwgXCIjYWJkZGE0XCIsIFwiIzY2YzJhNVwiLCBcIiMzMjg4YmRcIiwgXCIjNWU0ZmEyXCJdLFxuICBSZFlsR246IFtcIiNhNTAwMjZcIiwgXCIjZDczMDI3XCIsIFwiI2Y0NmQ0M1wiLCBcIiNmZGFlNjFcIiwgXCIjZmVlMDhiXCIsIFwiI2ZmZmZiZlwiLCBcIiNkOWVmOGJcIiwgXCIjYTZkOTZhXCIsIFwiIzY2YmQ2M1wiLCBcIiMxYTk4NTBcIiwgXCIjMDA2ODM3XCJdLFxuICBSZEJ1OiBbXCIjNjcwMDFmXCIsIFwiI2IyMTgyYlwiLCBcIiNkNjYwNGRcIiwgXCIjZjRhNTgyXCIsIFwiI2ZkZGJjN1wiLCBcIiNmN2Y3ZjdcIiwgXCIjZDFlNWYwXCIsIFwiIzkyYzVkZVwiLCBcIiM0MzkzYzNcIiwgXCIjMjE2NmFjXCIsIFwiIzA1MzA2MVwiXSxcbiAgUGlZRzogW1wiIzhlMDE1MlwiLCBcIiNjNTFiN2RcIiwgXCIjZGU3N2FlXCIsIFwiI2YxYjZkYVwiLCBcIiNmZGUwZWZcIiwgXCIjZjdmN2Y3XCIsIFwiI2U2ZjVkMFwiLCBcIiNiOGUxODZcIiwgXCIjN2ZiYzQxXCIsIFwiIzRkOTIyMVwiLCBcIiMyNzY0MTlcIl0sXG4gIFBSR246IFtcIiM0MDAwNGJcIiwgXCIjNzYyYTgzXCIsIFwiIzk5NzBhYlwiLCBcIiNjMmE1Y2ZcIiwgXCIjZTdkNGU4XCIsIFwiI2Y3ZjdmN1wiLCBcIiNkOWYwZDNcIiwgXCIjYTZkYmEwXCIsIFwiIzVhYWU2MVwiLCBcIiMxYjc4MzdcIiwgXCIjMDA0NDFiXCJdLFxuICBSZFlsQnU6IFtcIiNhNTAwMjZcIiwgXCIjZDczMDI3XCIsIFwiI2Y0NmQ0M1wiLCBcIiNmZGFlNjFcIiwgXCIjZmVlMDkwXCIsIFwiI2ZmZmZiZlwiLCBcIiNlMGYzZjhcIiwgXCIjYWJkOWU5XCIsIFwiIzc0YWRkMVwiLCBcIiM0NTc1YjRcIiwgXCIjMzEzNjk1XCJdLFxuICBCckJHOiBbXCIjNTQzMDA1XCIsIFwiIzhjNTEwYVwiLCBcIiNiZjgxMmRcIiwgXCIjZGZjMjdkXCIsIFwiI2Y2ZThjM1wiLCBcIiNmNWY1ZjVcIiwgXCIjYzdlYWU1XCIsIFwiIzgwY2RjMVwiLCBcIiMzNTk3OGZcIiwgXCIjMDE2NjVlXCIsIFwiIzAwM2MzMFwiXSxcbiAgUmRHeTogW1wiIzY3MDAxZlwiLCBcIiNiMjE4MmJcIiwgXCIjZDY2MDRkXCIsIFwiI2Y0YTU4MlwiLCBcIiNmZGRiYzdcIiwgXCIjZmZmZmZmXCIsIFwiI2UwZTBlMFwiLCBcIiNiYWJhYmFcIiwgXCIjODc4Nzg3XCIsIFwiIzRkNGQ0ZFwiLCBcIiMxYTFhMWFcIl0sXG4gIFB1T3I6IFtcIiM3ZjNiMDhcIiwgXCIjYjM1ODA2XCIsIFwiI2UwODIxNFwiLCBcIiNmZGI4NjNcIiwgXCIjZmVlMGI2XCIsIFwiI2Y3ZjdmN1wiLCBcIiNkOGRhZWJcIiwgXCIjYjJhYmQyXCIsIFwiIzgwNzNhY1wiLCBcIiM1NDI3ODhcIiwgXCIjMmQwMDRiXCJdLFxuICAvLyBxdWFsaXRhdGl2ZVxuICBTZXQyOiBbXCIjNjZjMmE1XCIsIFwiI2ZjOGQ2MlwiLCBcIiM4ZGEwY2JcIiwgXCIjZTc4YWMzXCIsIFwiI2E2ZDg1NFwiLCBcIiNmZmQ5MmZcIiwgXCIjZTVjNDk0XCIsIFwiI2IzYjNiM1wiXSxcbiAgQWNjZW50OiBbXCIjN2ZjOTdmXCIsIFwiI2JlYWVkNFwiLCBcIiNmZGMwODZcIiwgXCIjZmZmZjk5XCIsIFwiIzM4NmNiMFwiLCBcIiNmMDAyN2ZcIiwgXCIjYmY1YjE3XCIsIFwiIzY2NjY2NlwiXSxcbiAgU2V0MTogW1wiI2U0MWExY1wiLCBcIiMzNzdlYjhcIiwgXCIjNGRhZjRhXCIsIFwiIzk4NGVhM1wiLCBcIiNmZjdmMDBcIiwgXCIjZmZmZjMzXCIsIFwiI2E2NTYyOFwiLCBcIiNmNzgxYmZcIiwgXCIjOTk5OTk5XCJdLFxuICBTZXQzOiBbXCIjOGRkM2M3XCIsIFwiI2ZmZmZiM1wiLCBcIiNiZWJhZGFcIiwgXCIjZmI4MDcyXCIsIFwiIzgwYjFkM1wiLCBcIiNmZGI0NjJcIiwgXCIjYjNkZTY5XCIsIFwiI2ZjY2RlNVwiLCBcIiNkOWQ5ZDlcIiwgXCIjYmM4MGJkXCIsIFwiI2NjZWJjNVwiLCBcIiNmZmVkNmZcIl0sXG4gIERhcmsyOiBbXCIjMWI5ZTc3XCIsIFwiI2Q5NWYwMlwiLCBcIiM3NTcwYjNcIiwgXCIjZTcyOThhXCIsIFwiIzY2YTYxZVwiLCBcIiNlNmFiMDJcIiwgXCIjYTY3NjFkXCIsIFwiIzY2NjY2NlwiXSxcbiAgUGFpcmVkOiBbXCIjYTZjZWUzXCIsIFwiIzFmNzhiNFwiLCBcIiNiMmRmOGFcIiwgXCIjMzNhMDJjXCIsIFwiI2ZiOWE5OVwiLCBcIiNlMzFhMWNcIiwgXCIjZmRiZjZmXCIsIFwiI2ZmN2YwMFwiLCBcIiNjYWIyZDZcIiwgXCIjNmEzZDlhXCIsIFwiI2ZmZmY5OVwiLCBcIiNiMTU5MjhcIl0sXG4gIFBhc3RlbDI6IFtcIiNiM2UyY2RcIiwgXCIjZmRjZGFjXCIsIFwiI2NiZDVlOFwiLCBcIiNmNGNhZTRcIiwgXCIjZTZmNWM5XCIsIFwiI2ZmZjJhZVwiLCBcIiNmMWUyY2NcIiwgXCIjY2NjY2NjXCJdLFxuICBQYXN0ZWwxOiBbXCIjZmJiNGFlXCIsIFwiI2IzY2RlM1wiLCBcIiNjY2ViYzVcIiwgXCIjZGVjYmU0XCIsIFwiI2ZlZDlhNlwiLCBcIiNmZmZmY2NcIiwgXCIjZTVkOGJkXCIsIFwiI2ZkZGFlY1wiLCBcIiNmMmYyZjJcIl1cbn0sIHdlID0gT2JqZWN0LmtleXMoT3QpLCBlZSA9IG5ldyBNYXAod2UubWFwKCh0KSA9PiBbdC50b0xvd2VyQ2FzZSgpLCB0XSkpLCB4MCA9IHR5cGVvZiBQcm94eSA9PSBcImZ1bmN0aW9uXCIgPyBuZXcgUHJveHkoT3QsIHtcbiAgZ2V0KHQsIGUpIHtcbiAgICBjb25zdCBuID0gZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChlZS5oYXMobikpXG4gICAgICByZXR1cm4gdFtlZS5nZXQobildO1xuICB9LFxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzKCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3ZSk7XG4gIH1cbn0pIDogT3QsIEEwID0gKC4uLnQpID0+IHtcbiAgdCA9ICQodCwgXCJjbXlrXCIpO1xuICBjb25zdCBbZSwgbiwgciwgb10gPSB0LCBzID0gdC5sZW5ndGggPiA0ID8gdFs0XSA6IDE7XG4gIHJldHVybiBvID09PSAxID8gWzAsIDAsIDAsIHNdIDogW1xuICAgIGUgPj0gMSA/IDAgOiAyNTUgKiAoMSAtIGUpICogKDEgLSBvKSxcbiAgICAvLyByXG4gICAgbiA+PSAxID8gMCA6IDI1NSAqICgxIC0gbikgKiAoMSAtIG8pLFxuICAgIC8vIGdcbiAgICByID49IDEgPyAwIDogMjU1ICogKDEgLSByKSAqICgxIC0gbyksXG4gICAgLy8gYlxuICAgIHNcbiAgXTtcbn0sIHsgbWF4OiBuZSB9ID0gTWF0aCwgTDAgPSAoLi4udCkgPT4ge1xuICBsZXQgW2UsIG4sIHJdID0gJCh0LCBcInJnYlwiKTtcbiAgZSA9IGUgLyAyNTUsIG4gPSBuIC8gMjU1LCByID0gciAvIDI1NTtcbiAgY29uc3QgbyA9IDEgLSBuZShlLCBuZShuLCByKSksIHMgPSBvIDwgMSA/IDEgLyAoMSAtIG8pIDogMCwgYyA9ICgxIC0gZSAtIG8pICogcywgZiA9ICgxIC0gbiAtIG8pICogcywgYSA9ICgxIC0gciAtIG8pICogcztcbiAgcmV0dXJuIFtjLCBmLCBhLCBvXTtcbn07XG51LnByb3RvdHlwZS5jbXlrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBMMCh0aGlzLl9yZ2IpO1xufTtcbmNvbnN0IEUwID0gKC4uLnQpID0+IG5ldyB1KC4uLnQsIFwiY215a1wiKTtcbk9iamVjdC5hc3NpZ24oQSwgeyBjbXlrOiBFMCB9KTtcbl8uZm9ybWF0LmNteWsgPSBBMDtcbl8uYXV0b2RldGVjdC5wdXNoKHtcbiAgcDogMixcbiAgdGVzdDogKC4uLnQpID0+IHtcbiAgICBpZiAodCA9ICQodCwgXCJjbXlrXCIpLCBMKHQpID09PSBcImFycmF5XCIgJiYgdC5sZW5ndGggPT09IDQpXG4gICAgICByZXR1cm4gXCJjbXlrXCI7XG4gIH1cbn0pO1xuY29uc3QgUjAgPSAoLi4udCkgPT4ge1xuICBjb25zdCBlID0gJCh0LCBcImhzbGFcIik7XG4gIGxldCBuID0gb3QodCkgfHwgXCJsc2FcIjtcbiAgcmV0dXJuIGVbMF0gPSBYKGVbMF0gfHwgMCkgKyBcImRlZ1wiLCBlWzFdID0gWChlWzFdICogMTAwKSArIFwiJVwiLCBlWzJdID0gWChlWzJdICogMTAwKSArIFwiJVwiLCBuID09PSBcImhzbGFcIiB8fCBlLmxlbmd0aCA+IDMgJiYgZVszXSA8IDEgPyAoZVszXSA9IFwiLyBcIiArIChlLmxlbmd0aCA+IDMgPyBlWzNdIDogMSksIG4gPSBcImhzbGFcIikgOiBlLmxlbmd0aCA9IDMsIGAke24uc3Vic3RyKDAsIDMpfSgke2Uuam9pbihcIiBcIil9KWA7XG59LCBOMCA9ICguLi50KSA9PiB7XG4gIGNvbnN0IGUgPSAkKHQsIFwibGFiXCIpO1xuICBsZXQgbiA9IG90KHQpIHx8IFwibGFiXCI7XG4gIHJldHVybiBlWzBdID0gWChlWzBdKSArIFwiJVwiLCBlWzFdID0gWChlWzFdKSwgZVsyXSA9IFgoZVsyXSksIG4gPT09IFwibGFiYVwiIHx8IGUubGVuZ3RoID4gMyAmJiBlWzNdIDwgMSA/IGVbM10gPSBcIi8gXCIgKyAoZS5sZW5ndGggPiAzID8gZVszXSA6IDEpIDogZS5sZW5ndGggPSAzLCBgbGFiKCR7ZS5qb2luKFwiIFwiKX0pYDtcbn0sIEMwID0gKC4uLnQpID0+IHtcbiAgY29uc3QgZSA9ICQodCwgXCJsY2hcIik7XG4gIGxldCBuID0gb3QodCkgfHwgXCJsYWJcIjtcbiAgcmV0dXJuIGVbMF0gPSBYKGVbMF0pICsgXCIlXCIsIGVbMV0gPSBYKGVbMV0pLCBlWzJdID0gaXNOYU4oZVsyXSkgPyBcIm5vbmVcIiA6IFgoZVsyXSkgKyBcImRlZ1wiLCBuID09PSBcImxjaGFcIiB8fCBlLmxlbmd0aCA+IDMgJiYgZVszXSA8IDEgPyBlWzNdID0gXCIvIFwiICsgKGUubGVuZ3RoID4gMyA/IGVbM10gOiAxKSA6IGUubGVuZ3RoID0gMywgYGxjaCgke2Uuam9pbihcIiBcIil9KWA7XG59LCBqMCA9ICguLi50KSA9PiB7XG4gIGNvbnN0IGUgPSAkKHQsIFwibGFiXCIpO1xuICByZXR1cm4gZVswXSA9IFgoZVswXSAqIDEwMCkgKyBcIiVcIiwgZVsxXSA9IHZ0KGVbMV0pLCBlWzJdID0gdnQoZVsyXSksIGUubGVuZ3RoID4gMyAmJiBlWzNdIDwgMSA/IGVbM10gPSBcIi8gXCIgKyAoZS5sZW5ndGggPiAzID8gZVszXSA6IDEpIDogZS5sZW5ndGggPSAzLCBgb2tsYWIoJHtlLmpvaW4oXCIgXCIpfSlgO1xufSwgeWUgPSAoLi4udCkgPT4ge1xuICBjb25zdCBbZSwgbiwgciwgLi4ub10gPSAkKHQsIFwicmdiXCIpLCBbcywgYywgZl0gPSBxdChlLCBuLCByKSwgW2EsIGwsIGhdID0gYmUocywgYywgZik7XG4gIHJldHVybiBbYSwgbCwgaCwgLi4uby5sZW5ndGggPiAwICYmIG9bMF0gPCAxID8gW29bMF1dIDogW11dO1xufSwgdjAgPSAoLi4udCkgPT4ge1xuICBjb25zdCBlID0gJCh0LCBcImxjaFwiKTtcbiAgcmV0dXJuIGVbMF0gPSBYKGVbMF0gKiAxMDApICsgXCIlXCIsIGVbMV0gPSB2dChlWzFdKSwgZVsyXSA9IGlzTmFOKGVbMl0pID8gXCJub25lXCIgOiBYKGVbMl0pICsgXCJkZWdcIiwgZS5sZW5ndGggPiAzICYmIGVbM10gPCAxID8gZVszXSA9IFwiLyBcIiArIChlLmxlbmd0aCA+IDMgPyBlWzNdIDogMSkgOiBlLmxlbmd0aCA9IDMsIGBva2xjaCgke2Uuam9pbihcIiBcIil9KWA7XG59LCB7IHJvdW5kOiBDdCB9ID0gTWF0aCwgUDAgPSAoLi4udCkgPT4ge1xuICBjb25zdCBlID0gJCh0LCBcInJnYmFcIik7XG4gIGxldCBuID0gb3QodCkgfHwgXCJyZ2JcIjtcbiAgaWYgKG4uc3Vic3RyKDAsIDMpID09PSBcImhzbFwiKVxuICAgIHJldHVybiBSMChkZShlKSwgbik7XG4gIGlmIChuLnN1YnN0cigwLCAzKSA9PT0gXCJsYWJcIikge1xuICAgIGNvbnN0IHIgPSBsdCgpO1xuICAgIEgoXCJkNTBcIik7XG4gICAgY29uc3QgbyA9IE4wKEd0KGUpLCBuKTtcbiAgICByZXR1cm4gSChyKSwgbztcbiAgfVxuICBpZiAobi5zdWJzdHIoMCwgMykgPT09IFwibGNoXCIpIHtcbiAgICBjb25zdCByID0gbHQoKTtcbiAgICBIKFwiZDUwXCIpO1xuICAgIGNvbnN0IG8gPSBDMChTdChlKSwgbik7XG4gICAgcmV0dXJuIEgociksIG87XG4gIH1cbiAgcmV0dXJuIG4uc3Vic3RyKDAsIDUpID09PSBcIm9rbGFiXCIgPyBqMChxdChlKSkgOiBuLnN1YnN0cigwLCA1KSA9PT0gXCJva2xjaFwiID8gdjAoeWUoZSkpIDogKGVbMF0gPSBDdChlWzBdKSwgZVsxXSA9IEN0KGVbMV0pLCBlWzJdID0gQ3QoZVsyXSksIChuID09PSBcInJnYmFcIiB8fCBlLmxlbmd0aCA+IDMgJiYgZVszXSA8IDEpICYmIChlWzNdID0gXCIvIFwiICsgKGUubGVuZ3RoID4gMyA/IGVbM10gOiAxKSwgbiA9IFwicmdiYVwiKSwgYCR7bi5zdWJzdHIoMCwgMyl9KCR7ZS5zbGljZSgwLCBuID09PSBcInJnYlwiID8gMyA6IDQpLmpvaW4oXCIgXCIpfSlgKTtcbn0sIGtlID0gKC4uLnQpID0+IHtcbiAgdCA9ICQodCwgXCJsY2hcIik7XG4gIGNvbnN0IFtlLCBuLCByLCAuLi5vXSA9IHQsIFtzLCBjLCBmXSA9IHVlKGUsIG4sIHIpLCBbYSwgbCwgaF0gPSBYdChzLCBjLCBmKTtcbiAgcmV0dXJuIFthLCBsLCBoLCAuLi5vLmxlbmd0aCA+IDAgJiYgb1swXSA8IDEgPyBbb1swXV0gOiBbXV07XG59LCBEID0gLygoPzotP1xcZCspfCg/Oi0/XFxkKyg/OlxcLlxcZCspPyklfG5vbmUpLy5zb3VyY2UsIFogPSAvKCg/Oi0/KD86XFxkKyg/OlxcLlxcZCopP3xcXC5cXGQrKSU/KXxub25lKS8uc291cmNlLCB3dCA9IC8oKD86LT8oPzpcXGQrKD86XFwuXFxkKik/fFxcLlxcZCspJSl8bm9uZSkvLnNvdXJjZSwgcSA9IC9cXHMqLy5zb3VyY2UsIHN0ID0gL1xccysvLnNvdXJjZSwgWnQgPSAvXFxzKixcXHMqLy5zb3VyY2UsIGt0ID0gLygoPzotPyg/OlxcZCsoPzpcXC5cXGQqKT98XFwuXFxkKykoPzpkZWcpPyl8bm9uZSkvLnNvdXJjZSwgZnQgPSAvXFxzKig/OlxcL1xccyooKD86WzAxXXxbMDFdP1xcLlxcZCspfFxcZCsoPzpcXC5cXGQrKT8lKSk/Ly5zb3VyY2UsIF9lID0gbmV3IFJlZ0V4cChcbiAgXCJecmdiYT9cXFxcKFwiICsgcSArIFtELCBELCBEXS5qb2luKHN0KSArIGZ0ICsgXCJcXFxcKSRcIlxuKSwgTWUgPSBuZXcgUmVnRXhwKFxuICBcIl5yZ2JcXFxcKFwiICsgcSArIFtELCBELCBEXS5qb2luKFp0KSArIHEgKyBcIlxcXFwpJFwiXG4pLCAkZSA9IG5ldyBSZWdFeHAoXG4gIFwiXnJnYmFcXFxcKFwiICsgcSArIFtELCBELCBELCBaXS5qb2luKFp0KSArIHEgKyBcIlxcXFwpJFwiXG4pLCB4ZSA9IG5ldyBSZWdFeHAoXG4gIFwiXmhzbGE/XFxcXChcIiArIHEgKyBba3QsIHd0LCB3dF0uam9pbihzdCkgKyBmdCArIFwiXFxcXCkkXCJcbiksIEFlID0gbmV3IFJlZ0V4cChcbiAgXCJeaHNsP1xcXFwoXCIgKyBxICsgW2t0LCB3dCwgd3RdLmpvaW4oWnQpICsgcSArIFwiXFxcXCkkXCJcbiksIExlID0gL15oc2xhXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC8sIEVlID0gbmV3IFJlZ0V4cChcbiAgXCJebGFiXFxcXChcIiArIHEgKyBbWiwgWiwgWl0uam9pbihzdCkgKyBmdCArIFwiXFxcXCkkXCJcbiksIFJlID0gbmV3IFJlZ0V4cChcbiAgXCJebGNoXFxcXChcIiArIHEgKyBbWiwgWiwga3RdLmpvaW4oc3QpICsgZnQgKyBcIlxcXFwpJFwiXG4pLCBOZSA9IG5ldyBSZWdFeHAoXG4gIFwiXm9rbGFiXFxcXChcIiArIHEgKyBbWiwgWiwgWl0uam9pbihzdCkgKyBmdCArIFwiXFxcXCkkXCJcbiksIENlID0gbmV3IFJlZ0V4cChcbiAgXCJeb2tsY2hcXFxcKFwiICsgcSArIFtaLCBaLCBrdF0uam9pbihzdCkgKyBmdCArIFwiXFxcXCkkXCJcbiksIHsgcm91bmQ6IGplIH0gPSBNYXRoLCBldCA9ICh0KSA9PiB0Lm1hcCgoZSwgbikgPT4gbiA8PSAyID8gSihqZShlKSwgMCwgMjU1KSA6IGUpLCB2ID0gKHQsIGUgPSAwLCBuID0gMTAwLCByID0gITEpID0+ICh0eXBlb2YgdCA9PSBcInN0cmluZ1wiICYmIHQuZW5kc1dpdGgoXCIlXCIpICYmICh0ID0gcGFyc2VGbG9hdCh0LnN1YnN0cmluZygwLCB0Lmxlbmd0aCAtIDEpKSAvIDEwMCwgciA/IHQgPSBlICsgKHQgKyAxKSAqIDAuNSAqIChuIC0gZSkgOiB0ID0gZSArIHQgKiAobiAtIGUpKSwgK3QpLCBCID0gKHQsIGUpID0+IHQgPT09IFwibm9uZVwiID8gZSA6IHQsIEl0ID0gKHQpID0+IHtcbiAgaWYgKHQgPSB0LnRvTG93ZXJDYXNlKCkudHJpbSgpLCB0ID09PSBcInRyYW5zcGFyZW50XCIpXG4gICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgbGV0IGU7XG4gIGlmIChfLmZvcm1hdC5uYW1lZClcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIF8uZm9ybWF0Lm5hbWVkKHQpO1xuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgaWYgKChlID0gdC5tYXRjaChfZSkpIHx8IChlID0gdC5tYXRjaChNZSkpKSB7XG4gICAgbGV0IG4gPSBlLnNsaWNlKDEsIDQpO1xuICAgIGZvciAobGV0IG8gPSAwOyBvIDwgMzsgbysrKVxuICAgICAgbltvXSA9ICt2KEIobltvXSwgMCksIDAsIDI1NSk7XG4gICAgbiA9IGV0KG4pO1xuICAgIGNvbnN0IHIgPSBlWzRdICE9PSB2b2lkIDAgPyArdihlWzRdLCAwLCAxKSA6IDE7XG4gICAgcmV0dXJuIG5bM10gPSByLCBuO1xuICB9XG4gIGlmIChlID0gdC5tYXRjaCgkZSkpIHtcbiAgICBjb25zdCBuID0gZS5zbGljZSgxLCA1KTtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IDQ7IHIrKylcbiAgICAgIG5bcl0gPSArdihuW3JdLCAwLCAyNTUpO1xuICAgIHJldHVybiBuO1xuICB9XG4gIGlmICgoZSA9IHQubWF0Y2goeGUpKSB8fCAoZSA9IHQubWF0Y2goQWUpKSkge1xuICAgIGNvbnN0IG4gPSBlLnNsaWNlKDEsIDQpO1xuICAgIG5bMF0gPSArQihuWzBdLnJlcGxhY2UoXCJkZWdcIiwgXCJcIiksIDApLCBuWzFdID0gK3YoQihuWzFdLCAwKSwgMCwgMTAwKSAqIDAuMDEsIG5bMl0gPSArdihCKG5bMl0sIDApLCAwLCAxMDApICogMC4wMTtcbiAgICBjb25zdCByID0gZXQoUHQobikpLCBvID0gZVs0XSAhPT0gdm9pZCAwID8gK3YoZVs0XSwgMCwgMSkgOiAxO1xuICAgIHJldHVybiByWzNdID0gbywgcjtcbiAgfVxuICBpZiAoZSA9IHQubWF0Y2goTGUpKSB7XG4gICAgY29uc3QgbiA9IGUuc2xpY2UoMSwgNCk7XG4gICAgblsxXSAqPSAwLjAxLCBuWzJdICo9IDAuMDE7XG4gICAgY29uc3QgciA9IFB0KG4pO1xuICAgIGZvciAobGV0IG8gPSAwOyBvIDwgMzsgbysrKVxuICAgICAgcltvXSA9IGplKHJbb10pO1xuICAgIHJldHVybiByWzNdID0gK2VbNF0sIHI7XG4gIH1cbiAgaWYgKGUgPSB0Lm1hdGNoKEVlKSkge1xuICAgIGNvbnN0IG4gPSBlLnNsaWNlKDEsIDQpO1xuICAgIG5bMF0gPSB2KEIoblswXSwgMCksIDAsIDEwMCksIG5bMV0gPSB2KEIoblsxXSwgMCksIC0xMjUsIDEyNSwgITApLCBuWzJdID0gdihCKG5bMl0sIDApLCAtMTI1LCAxMjUsICEwKTtcbiAgICBjb25zdCByID0gbHQoKTtcbiAgICBIKFwiZDUwXCIpO1xuICAgIGNvbnN0IG8gPSBldCh6dChuKSk7XG4gICAgSChyKTtcbiAgICBjb25zdCBzID0gZVs0XSAhPT0gdm9pZCAwID8gK3YoZVs0XSwgMCwgMSkgOiAxO1xuICAgIHJldHVybiBvWzNdID0gcywgbztcbiAgfVxuICBpZiAoZSA9IHQubWF0Y2goUmUpKSB7XG4gICAgY29uc3QgbiA9IGUuc2xpY2UoMSwgNCk7XG4gICAgblswXSA9IHYoblswXSwgMCwgMTAwKSwgblsxXSA9IHYoQihuWzFdLCAwKSwgMCwgMTUwLCAhMSksIG5bMl0gPSArQihuWzJdLnJlcGxhY2UoXCJkZWdcIiwgXCJcIiksIDApO1xuICAgIGNvbnN0IHIgPSBsdCgpO1xuICAgIEgoXCJkNTBcIik7XG4gICAgY29uc3QgbyA9IGV0KEJ0KG4pKTtcbiAgICBIKHIpO1xuICAgIGNvbnN0IHMgPSBlWzRdICE9PSB2b2lkIDAgPyArdihlWzRdLCAwLCAxKSA6IDE7XG4gICAgcmV0dXJuIG9bM10gPSBzLCBvO1xuICB9XG4gIGlmIChlID0gdC5tYXRjaChOZSkpIHtcbiAgICBjb25zdCBuID0gZS5zbGljZSgxLCA0KTtcbiAgICBuWzBdID0gdihCKG5bMF0sIDApLCAwLCAxKSwgblsxXSA9IHYoQihuWzFdLCAwKSwgLTAuNCwgMC40LCAhMCksIG5bMl0gPSB2KEIoblsyXSwgMCksIC0wLjQsIDAuNCwgITApO1xuICAgIGNvbnN0IHIgPSBldChYdChuKSksIG8gPSBlWzRdICE9PSB2b2lkIDAgPyArdihlWzRdLCAwLCAxKSA6IDE7XG4gICAgcmV0dXJuIHJbM10gPSBvLCByO1xuICB9XG4gIGlmIChlID0gdC5tYXRjaChDZSkpIHtcbiAgICBjb25zdCBuID0gZS5zbGljZSgxLCA0KTtcbiAgICBuWzBdID0gdihCKG5bMF0sIDApLCAwLCAxKSwgblsxXSA9IHYoQihuWzFdLCAwKSwgMCwgMC40LCAhMSksIG5bMl0gPSArQihuWzJdLnJlcGxhY2UoXCJkZWdcIiwgXCJcIiksIDApO1xuICAgIGNvbnN0IHIgPSBldChrZShuKSksIG8gPSBlWzRdICE9PSB2b2lkIDAgPyArdihlWzRdLCAwLCAxKSA6IDE7XG4gICAgcmV0dXJuIHJbM10gPSBvLCByO1xuICB9XG59O1xuSXQudGVzdCA9ICh0KSA9PiAoXG4gIC8vIG1vZGVyblxuICBfZS50ZXN0KHQpIHx8IHhlLnRlc3QodCkgfHwgRWUudGVzdCh0KSB8fCBSZS50ZXN0KHQpIHx8IE5lLnRlc3QodCkgfHwgQ2UudGVzdCh0KSB8fCAvLyBsZWdhY3lcbiAgTWUudGVzdCh0KSB8fCAkZS50ZXN0KHQpIHx8IEFlLnRlc3QodCkgfHwgTGUudGVzdCh0KSB8fCB0ID09PSBcInRyYW5zcGFyZW50XCJcbik7XG51LnByb3RvdHlwZS5jc3MgPSBmdW5jdGlvbih0KSB7XG4gIHJldHVybiBQMCh0aGlzLl9yZ2IsIHQpO1xufTtcbmNvbnN0IE8wID0gKC4uLnQpID0+IG5ldyB1KC4uLnQsIFwiY3NzXCIpO1xuQS5jc3MgPSBPMDtcbl8uZm9ybWF0LmNzcyA9IEl0O1xuXy5hdXRvZGV0ZWN0LnB1c2goe1xuICBwOiA1LFxuICB0ZXN0OiAodCwgLi4uZSkgPT4ge1xuICAgIGlmICghZS5sZW5ndGggJiYgTCh0KSA9PT0gXCJzdHJpbmdcIiAmJiBJdC50ZXN0KHQpKVxuICAgICAgcmV0dXJuIFwiY3NzXCI7XG4gIH1cbn0pO1xuXy5mb3JtYXQuZ2wgPSAoLi4udCkgPT4ge1xuICBjb25zdCBlID0gJCh0LCBcInJnYmFcIik7XG4gIHJldHVybiBlWzBdICo9IDI1NSwgZVsxXSAqPSAyNTUsIGVbMl0gKj0gMjU1LCBlO1xufTtcbmNvbnN0IFkwID0gKC4uLnQpID0+IG5ldyB1KC4uLnQsIFwiZ2xcIik7XG5BLmdsID0gWTA7XG51LnByb3RvdHlwZS5nbCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB0ID0gdGhpcy5fcmdiO1xuICByZXR1cm4gW3RbMF0gLyAyNTUsIHRbMV0gLyAyNTUsIHRbMl0gLyAyNTUsIHRbM11dO1xufTtcbnUucHJvdG90eXBlLmhleCA9IGZ1bmN0aW9uKHQpIHtcbiAgcmV0dXJuIGFlKHRoaXMuX3JnYiwgdCk7XG59O1xuY29uc3QgejAgPSAoLi4udCkgPT4gbmV3IHUoLi4udCwgXCJoZXhcIik7XG5BLmhleCA9IHowO1xuXy5mb3JtYXQuaGV4ID0gZmU7XG5fLmF1dG9kZXRlY3QucHVzaCh7XG4gIHA6IDQsXG4gIHRlc3Q6ICh0LCAuLi5lKSA9PiB7XG4gICAgaWYgKCFlLmxlbmd0aCAmJiBMKHQpID09PSBcInN0cmluZ1wiICYmIFszLCA0LCA1LCA2LCA3LCA4LCA5XS5pbmRleE9mKHQubGVuZ3RoKSA+PSAwKVxuICAgICAgcmV0dXJuIFwiaGV4XCI7XG4gIH1cbn0pO1xuY29uc3QgeyBsb2c6IHB0IH0gPSBNYXRoLCB2ZSA9ICh0KSA9PiB7XG4gIGNvbnN0IGUgPSB0IC8gMTAwO1xuICBsZXQgbiwgciwgbztcbiAgcmV0dXJuIGUgPCA2NiA/IChuID0gMjU1LCByID0gZSA8IDYgPyAwIDogLTE1NS4yNTQ4NTU2MjcwOTE3OSAtIDAuNDQ1OTY5NTA0Njk1NzkxMzMgKiAociA9IGUgLSAyKSArIDEwNC40OTIxNjE5OTM5Mzg4OCAqIHB0KHIpLCBvID0gZSA8IDIwID8gMCA6IC0yNTQuNzY5MzUxODQxMjA5MDIgKyAwLjgyNzQwOTYwNjQwMDczOTUgKiAobyA9IGUgLSAxMCkgKyAxMTUuNjc5OTQ0MDEwNjYxNDcgKiBwdChvKSkgOiAobiA9IDM1MS45NzY5MDU2NjgwNTY5MyArIDAuMTE0MjA2NDUzNzg0MTY1ICogKG4gPSBlIC0gNTUpIC0gNDAuMjUzNjYzMDkzMzIxMjcgKiBwdChuKSwgciA9IDMyNS40NDk0MTI1NzExOTc0ICsgMC4wNzk0MzQ1NjUzNjY2MjM0MiAqIChyID0gZSAtIDUwKSAtIDI4LjA4NTI5NjM1MDc5NTcgKiBwdChyKSwgbyA9IDI1NSksIFtuLCByLCBvLCAxXTtcbn0sIHsgcm91bmQ6IEcwIH0gPSBNYXRoLCBCMCA9ICguLi50KSA9PiB7XG4gIGNvbnN0IGUgPSAkKHQsIFwicmdiXCIpLCBuID0gZVswXSwgciA9IGVbMl07XG4gIGxldCBvID0gMWUzLCBzID0gNGU0O1xuICBjb25zdCBjID0gMC40O1xuICBsZXQgZjtcbiAgZm9yICg7IHMgLSBvID4gYzsgKSB7XG4gICAgZiA9IChzICsgbykgKiAwLjU7XG4gICAgY29uc3QgYSA9IHZlKGYpO1xuICAgIGFbMl0gLyBhWzBdID49IHIgLyBuID8gcyA9IGYgOiBvID0gZjtcbiAgfVxuICByZXR1cm4gRzAoZik7XG59O1xudS5wcm90b3R5cGUudGVtcCA9IHUucHJvdG90eXBlLmtlbHZpbiA9IHUucHJvdG90eXBlLnRlbXBlcmF0dXJlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBCMCh0aGlzLl9yZ2IpO1xufTtcbmNvbnN0IGp0ID0gKC4uLnQpID0+IG5ldyB1KC4uLnQsIFwidGVtcFwiKTtcbk9iamVjdC5hc3NpZ24oQSwgeyB0ZW1wOiBqdCwga2VsdmluOiBqdCwgdGVtcGVyYXR1cmU6IGp0IH0pO1xuXy5mb3JtYXQudGVtcCA9IF8uZm9ybWF0LmtlbHZpbiA9IF8uZm9ybWF0LnRlbXBlcmF0dXJlID0gdmU7XG51LnByb3RvdHlwZS5va2xjaCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geWUodGhpcy5fcmdiKTtcbn07XG5jb25zdCBTMCA9ICguLi50KSA9PiBuZXcgdSguLi50LCBcIm9rbGNoXCIpO1xuT2JqZWN0LmFzc2lnbihBLCB7IG9rbGNoOiBTMCB9KTtcbl8uZm9ybWF0Lm9rbGNoID0ga2U7XG5fLmF1dG9kZXRlY3QucHVzaCh7XG4gIHA6IDIsXG4gIHRlc3Q6ICguLi50KSA9PiB7XG4gICAgaWYgKHQgPSAkKHQsIFwib2tsY2hcIiksIEwodCkgPT09IFwiYXJyYXlcIiAmJiB0Lmxlbmd0aCA9PT0gMylcbiAgICAgIHJldHVybiBcIm9rbGNoXCI7XG4gIH1cbn0pO1xuT2JqZWN0LmFzc2lnbihBLCB7XG4gIGFuYWx5emU6IG1lLFxuICBhdmVyYWdlOiBYbixcbiAgYmV6aWVyOiBXbixcbiAgYmxlbmQ6IEksXG4gIGJyZXdlcjogeDAsXG4gIENvbG9yOiB1LFxuICBjb2xvcnM6IG50LFxuICBjb250cmFzdDogaDAsXG4gIGNvbnRyYXN0QVBDQTogbTAsXG4gIGN1YmVoZWxpeDogYzAsXG4gIGRlbHRhRTogazAsXG4gIGRpc3RhbmNlOiBfMCxcbiAgaW5wdXQ6IF8sXG4gIGludGVycG9sYXRlOiBydCxcbiAgbGltaXRzOiBnZSxcbiAgbWl4OiBydCxcbiAgcmFuZG9tOiBsMCxcbiAgc2NhbGU6IGd0LFxuICBzY2FsZXM6ICQwLFxuICB2YWxpZDogTTBcbn0pO1xuY29uc3QgcTAgPSAodCkgPT4gQS52YWxpZCh0KSwgWjAgPSAodCwgZSkgPT4gQS52YWxpZCh0KSA/IEEodCkuYWxwaGEoZSkuY3NzKCkgOiB0O1xuZXhwb3J0IHtcbiAgcTAgYXMgaSxcbiAgWjAgYXMgc1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbG9yLnV0aWxzLUJTZ19ERk9oLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sRUFBRSxLQUFLLElBQUksS0FBSyxHQUFFLElBQUssTUFBTSxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU07QUFDdkYsSUFBRSxXQUFXLE9BQUksRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDO0FBQ3pDLFdBQVMsSUFBSSxHQUFHLEtBQUssR0FBRztBQUN0QixRQUFJLE1BQU0sRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxTQUFTLEVBQUUsV0FBVyxPQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ25ILFNBQU87QUFDVCxHQUFHLEtBQUssQ0FBQTtBQUNSLFNBQVMsS0FBSztBQUFBLEVBQ1o7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBQ0UsS0FBRyxXQUFXLENBQUMsR0FBRyxJQUFJLEVBQUUsWUFBVztBQUNyQyxTQUFTLEVBQUUsR0FBRztBQUNaLFNBQU8s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QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQSxFQUNWLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLFdBQVc7QUFBQSxFQUNY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QUUsS0FBSyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxLQUFLLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxRQUFRLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxRQUFRLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxLQUFLLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsS0FBSyxJQUFJO0FBQUEsSUFDN21CLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxNQUFNLElBQUksRUFBRTtBQUFBLEVBQ2xDLEdBQUssSUFBSTtBQUFBLElBQ0wsSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFO0FBQUEsRUFDbEMsR0FBSyxJQUFJO0FBQUEsSUFDTCxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUU7QUFBQSxFQUNsQztBQUNFLFNBQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksR0FBRztBQUNuQyxHQUFHLEtBQUssSUFBSSxNQUFNO0FBQ2hCLFFBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEYsU0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUM1RDtBQUNBLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNuQixRQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBQyxJQUFLLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxNQUFNO0FBQzVPLFNBQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxPQUFPLElBQUksRUFBRTtBQUNwRDtBQUNBLFNBQVMsR0FBRyxHQUFHO0FBQ2IsUUFBTSxJQUFJLEtBQUssS0FBSyxDQUFDO0FBQ3JCLFNBQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxJQUFJLFFBQVEsS0FBSyxLQUFLLElBQUksU0FBUyxPQUFPLEdBQUcsS0FBSztBQUM1RjtBQUNBLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNO0FBQ3RCLE1BQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRztBQUNoRCxRQUFNLEVBQUUsWUFBWSxHQUFHLFlBQVksR0FBRyxhQUFhLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUMsSUFBSztBQUNuRyxNQUFJLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxNQUFNLElBQUksRUFBRTtBQUNwSCxRQUFNLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxNQUFNLElBQUksRUFBRTtBQUN0SCxNQUFJLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxNQUFNLElBQUksRUFBRTtBQUNwSCxTQUFPLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxNQUFNLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDMUs7QUFDQSxFQUFFLFVBQVUsTUFBTSxXQUFXO0FBQzNCLFNBQU8sR0FBRyxLQUFLLElBQUk7QUFDckI7QUFDQSxNQUFNLEtBQUssSUFBSSxNQUFNLElBQUksRUFBRSxHQUFHLEdBQUcsS0FBSztBQUN0QyxPQUFPLE9BQU8sR0FBRyxFQUFFLEtBQUssSUFB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QUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxPQUFPLE9BQU8sSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsSUFBSSxLQUFLLE1BQU0sV0FBVyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLE1BQU0sVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDM1osR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLO0FBQ3RDLEVBQUUsTUFBTTtBQUNSLEVBQUUsTUFBTTtBQUNSLE1BQU0sS0FBSyxDQUFDLE1BQU07QUFDaEIsTUFBSSxFQUFFLENBQUMsS0FBSyxZQUFZLEtBQUssS0FBSyxLQUFLLFVBQVU7QUFDL0MsVUFBTSxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSTtBQUM3QyxXQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLEVBQ3BCO0FBQ0EsUUFBTSxJQUFJLE1BQU0sd0JBQXdCLENBQUM7QUFDM0MsR0FBRyxLQUFLLElBQUksTUFBTTtBQUNoQixRQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSztBQUM1QixVQUFRLEtBQUssT0FBTyxLQUFLLEtBQUs7QUFDaEM7QUFDQSxFQUFFLFVBQVUsTUFBTSxXQUFXO0FBQzNCLFNBQU8sR0FBRyxLQUFLLElBQUk7QUFDckI7QUFDQSxNQUFNLEtBQUssSUFBSSxNQUFNLElBQUksRUFBRSxHQUFHLEdBQUcsS0FBSztBQUN0QyxPQUFPLE9BQU8sR0FBRyxFQUFFLEtBQUssR0FBRSxD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QUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUs7QUFDekMsRUFBRSxNQUFNO0FBQ1IsTUFBTSxLQUFLLElBQUksTUFBTTtBQUNuQixNQUFJLEVBQUUsR0FBRyxLQUFLO0FBQ2QsUUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUk7QUFDbEIsTUFBSSxHQUFHLEdBQUc7QUFDVixNQUFJLE1BQU07QUFDUixRQUFJLElBQUksSUFBSSxJQUFJO0FBQUEsT0FDYjtBQUNILFVBQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLE1BQU0sS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSTtBQUN0RyxNQUFFLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSTtBQUMzQyxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUc7QUFDckIsUUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLElBQUk7QUFDN0wsS0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUc7QUFBQSxFQUNqRDtBQUNB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RyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEdBQUcsTUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxNQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksT0FBTyxLQUFLLENBQUMsR0FBRyxNQUFNLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLE9BQU8sSUFBSSxLQUFLLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxPQUFPLEtBQUssQ0FBQyxHQUFHLE1BQU0sT0FBTyxLQUFLLElBQUksSUFBSSxRQUFRLElBQUksT0FBTyxLQUFLLENBQUMsR0FBRyxNQUFNLE1BQU0sTUFBTSxPQUFPLElBQUksT0FBTyxJQUFJLFFBQVEsSUFBSSxJQUFJLE1BQU0sSUFBSSxNQUFNLE1BQU07QUFDM1ksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDbEIsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDcEIsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDbEIsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDbkIsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDbEIsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDbkIsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDakIsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDaEIsTUFBTSxFQUFFLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxHQUFFLElBQUs7QUFDdEMsU0FBUyxHQUFHLElBQUksS0FBSyxJQUFJLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUc7QUFDdkQsTUFBSSxJQUFJLEdBQUc7QUFDWCxJQUFFLENBQUMsTUFBTSxVQUFVLElB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QUMsRUFBRSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxPQUFPLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksT0FBTyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxHQUFHLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMxaUIsTUFBSSxJQUFJLElBQUk7QUFDWixNQUFJLEdBQUcsQ0FBQyxLQUFLLE1BQU0sSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDakYsUUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxRQUFRLEdBQUcsS0FBSyxJQUFJLFFBQVEsSUFBSSxHQUFHLEtBQUssS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSztBQUFBLElBQ3JPLEVBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxJQUFJLFFBQVEsS0FBSyxJQUFJO0FBQUEsRUFDbkc7QUFDRSxTQUFPLEdBQUcsR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDO0FBQzFCO0FBQ0EsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLE9BQU87QUFDM0IsTUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQztBQUMvQixNQUFJLElBQUk7QUFDUixXQUFTLEtBQUssR0FBRztBQUNmLFVBQU0sS0FBSyxFQUFFLENBQUMsS0FBSyxNQUFNLEVBQUUsQ0FBQyxLQUFLO0FBQ2pDLFNBQUssSUFBSTtBQUFBLEVBQ1g7QUFDQSxTQUFPLEtBQUssS0FBSyxDQUFDO0FBQ3BCO0FBQ0EsTUFBTSxLQUFLLElBQUksTUFBTTtBQUNuQixNQUFJO0FBQ0YsV0FBTyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUc7QUFBQSxFQUN0QixRQUFRO0FBQ04sV0FBTztBQUFBLEVBQ1Q7QUFDRixHQUFHLEtBQUs7QUFBQSxFQUNOLE9BQU87QUFDTCxXQUFPLEdBQUcsQ0FBQyxFQUFFLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDdEQ7QUFBQSxFQUNBLE1BQU07QUFDSixXQUFPLEdBQUcsQ0FBQyxRQUFRLFFBQVEsUUFBUSxNQUFNLENBQUMsRUFBRTtBQUFBLE1BQzFDO0FBQUEsSUFDTjtBQUFBLEVBQ0U7QUFDRixHQUFHLEtBQUs7QUFBQTtBQUFBLEVBRU4sTUFBTSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDeEcsTUFBTSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDeEcsTUFBTSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDeEcsU0FBUyxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDM0csTUFBTSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDeEcsUUFBUSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDMUcsTUFBTSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDeEcsTUFBTSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDeEcsTUFBTSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDeEcsUUFBUSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDMUcsUUFBUSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDMUcsU0FBUyxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDM0csTUFBTSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDeEcsT0FBTyxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDekcsUUFBUSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDMUcsTUFBTSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDeEcsT0FBTyxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDekcsUUFBUSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDMUcsU0FBUyxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUE7QUFBQSxFQUUzRyxVQUFVLENBQUMsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDbEksUUFBUSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsU0FBUztBQUFBLEVBQ2hJLE1BQU0sQ0FBQyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFNBQVM7QUFBQSxFQUM5SCxNQUFNLENBQUMsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTO0FBQUEsRUFDOUgsTUFBTSxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsU0FBUztBQUFBLEVBQzlILFFBQVEsQ0FBQyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFNBQVM7QUFBQSxFQUNoSSxNQUFNLENBQUMsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdB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QUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sVUFBVSxFQUFFLFNBQVMsS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxTQUFTLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLFNBQVMsR0FBRyxPQUFPLEVBQUUsS0FBSyxHQUFHLENBQUM7QUFDcEwsR0FBRyxLQUFLLElBQUksTUFBTTtBQUNoQixRQUFNLElBQUksRUFBRSxHQUFHLEtBQUs7QUFDcEIsTUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLO0FBQ2pCLFNBQU8sRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxPQUFPLE1BQU0sVUFBVSxFQUFFLFNBQVMsS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxTQUFTLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLFNBQVMsR0FBRyxPQUFPLEVBQUUsS0FBSyxHQUFHLENBQUM7QUFDbk4sR0FBRyxLQUFLLElBQUksTUFBTTtBQUNoQixRQUFNLElBQUksRUFBRSxHQUFHLEtBQUs7QUFDcEIsU0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxTQUFTLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxTQUFTLEdBQUcsU0FBUyxFQUFFLEtBQUssR0FBRyxDQUFDO0FBQzlLLEdBQUcsS0FBSyxJQUFJLE1BQU07QUFDaEIsUUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRixTQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQzVELEdBQUcsS0FBSyxJQUFJLE1BQU07QUFDaEIsUUFBTSxJQUFJLEVBQUUsR0FBRyxLQUFLO0FBQ3BCLFNBQU8sRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxTQUFTLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxTQUFTLEdBQUcsU0FBUyxFQUFFLEtBQUssR0FBRyxDQUFDO0FBQzVNLEdBQUcsRUFBRSxPQUFPLEdBQUUsSUFBSyxNQUFNLEtBQUssSUFBSSxNQUFNO0FBQ3RDLFFBQU0sSUFBSSxFQUFFLEdBQUcsTUFBTTtBQUNyQixNQUFJLElBQUksR0FBRyxDQUFDLEtBQUs7QUFDakIsTUFBSSxFQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU07QUFDckIsV0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDcEIsTUFBSSxFQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sT0FBTztBQUM1QixVQUFNLElBQUksR0FBRTtBQUNaLE1BQUUsS0FBSztBQUNQLFVBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDckIsV0FBTyxFQUFFLENBQUMsR0FBRztBQUFBLEVBQ2Y7QUFDQSxNQUFJLEVBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxPQUFPO0FBQzVCLFVBQU0sSUFBSSxHQUFFO0FBQ1osTUFBRSxLQUFLO0FBQ1AsVUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUNyQixXQUFPLEVBQUUsQ0FBQyxHQUFHO0FBQUEsRUFDZjtBQUNBLFNBQU8sRUFBRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxNQUFNLFVBQVUsRUFBRSxTQUFTLEtBQUssRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxTQUFTLEdBQUcsRUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEdBQUcsTUFBTSxRQUFRLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDO0FBQ2xULEdBQUcsS0FBSyxJQUFJLE1BQU07QUFDaEIsTUFBSSxFQUFFLEdBQUcsS0FBSztBQUNkLFFBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDMUUsU0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUM1RCxHQUFHLElBQUksd0NBQXdDLFFBQVEsSUFBSSx5Q0FBeUMsUUFBUSxLQUFLLHdDQUF3QyxRQUFRLElBQUksTUFBTSxRQUFRLEtBQUssTUFBTSxRQUFRLEtBQUssVUFBVSxRQUFRLEtBQUssK0NBQStDLFFBQVEsS0FBSyxvREFBb0QsUUFBUSxLQUFLLElBQUk7QUFBQSxFQUNqVyxjQUFjLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUs7QUFDOUMsR0FBRyxLQUFLLElBQUk7QUFBQSxFQUNWLFlBQVksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSTtBQUMzQyxHQUFHLEtBQUssSUFBSTtBQUFBLEVBQ1YsYUFBYSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUk7QUFDL0MsR0FBRyxLQUFLLElBQUk7QUFBQSxFQUNWLGNBQWMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSztBQUNqRCxHQUFHLEtBQUssSUFBSTtBQUFBLEVBQ1YsYUFBYSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJO0FBQy9DLEdBQUcsS0FBSyx5R0FBeUcsS0FBSyxJQUFJO0FBQUEsRUFDeEgsWUFBWSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLO0FBQzVDLEdBQUcsS0FBSyxJQUFJO0FBQUEsRUFDVixZQUFZLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUs7QUFDN0MsR0FBRyxLQUFLLElBQUk7QUFBQSxFQUNWLGNBQWMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSztBQUM5QyxHQUFHLEtBQUssSUFBSTtBQUFBLEVBQ1YsY0FBYyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLO0FBQy9DLEdBQUcsRUFBRSxPQUFPLEdBQUUsSUFBSyxNQUFNLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsTUFBTSxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLFdBQVEsT0FBTyxLQUFLLFlBQVksRUFBRSxTQUFTLEdBQUcsTUFBTSxJQUFJLFdBQVcsRUFBRSxVQUFVLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxNQUFNLFNBQVMsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNO0FBQ3hVLE1BQUksSUFBSSxFQUFFLFlBQVcsRUFBRyxLQUFJLEdBQUksTUFBTTtBQUNwQyxXQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwQixNQUFJO0FBQ0osTUFBSSxFQUFFLE9BQU87QUFDWCxRQUFJO0FBQ0YsYUFBTyxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUEsSUFDekIsUUFBUTtBQUFBLElBQ1I7QUFDRixPQUFLLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUk7QUFDMUMsUUFBSSxJQUFJLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFDcEIsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHO0FBQ3JCLFFBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUc7QUFDOUIsUUFBSSxHQUFHLENBQUM7QUFDUixVQUFNLElBQUksRUFBRSxDQUFDLE1BQU0sU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUk7QUFDN0MsV0FBTyxFQUFFLENBQUMsSUFBSSxHQUFHO0FBQUEsRUFDbkI7QUFDQSxNQUFJLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRztBQUNuQixVQUFNLElBQUksRUFBRSxNQUFNLEdBQUcsQ0FBQztBQUN0QixhQUFTLElBQUksR0FBRyxJQUFJLEdBQUc7QUFDckIsUUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRztBQUN4QixXQUFPO0FBQUEsRUFDVDtBQUNBLE9BQUssSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSTtBQUMxQyxVQUFNLElBQUksRUFBRSxNQUFNLEdBQUcsQ0FBQztBQUN0QixNQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJO0FBQzdHLFVBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSTtBQUM1RCxXQUFPLEVBQUUsQ0FBQyxJQUFJLEdBQUc7QUFBQSxFQUNuQjtBQUNBLE1BQUksSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHO0FBQ25CLFVBQU0sSUFBSSxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQ3RCLE1BQUUsQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDLEtBQUs7QUFDdEIsVUFBTSxJQUFJLEdBQUcsQ0FBQztBQUNkLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRztBQUNyQixRQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2hCLFdBQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRztBQUFBLEVBQ3ZCO0FBQ0EsTUFBSSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUc7QUFDbkIsVUFBTSxJQUFJLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFDdEIsTUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sS0FBSyxJQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEtBQUssSUFBRTtBQUNyRyxVQUFNLElBQUksR0FBRTtBQUNaLE1BQUUsS0FBSztBQUNQLFVBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLE1BQUUsQ0FBQztBQUNILFVBQU0sSUFBSSxFQUFFLENBQUMsTUFBTSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSTtBQUM3QyxXQUFPLEVBQUUsQ0FBQyxJQUFJLEdBQUc7QUFBQSxFQUNuQjtBQUNBLE1BQUksSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHO0FBQ25CLFVBQU0sSUFBSSxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQ3RCLE1BQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssS0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLE9BQU8sRUFBRSxHQUFHLENBQUM7QUFDOUYsVUFBTSxJQUFJLEdBQUU7QUFDWixNQUFFLEtBQUs7QUFDUCxVQUFNLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNsQixNQUFFLENBQUM7QUFDSCxVQUFNLElBQUksRUFBRSxDQUFDLE1BQU0sU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUk7QUFDN0MsV0FBTyxFQUFFLENBQUMsSUFBSSxHQUFHO0FBQUEsRUFDbkI7QUFDQSxNQUFJLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRztBQUNuQixVQUFNLElBQUksRUFBRSxNQUFNLEdBQUcsQ0FBQztBQUN0QixNQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxLQUFLLElBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sS0FBSyxJQUFFO0FBQ25HLFVBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSTtBQUM1RCxXQUFPLEVBQUUsQ0FBQyxJQUFJLEdBQUc7QUFBQSxFQUNuQjtBQUNBLE1BQUksSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHO0FBQ25CLFVBQU0sSUFBSSxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQ3RCLE1BQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssS0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLE9BQU8sRUFBRSxHQUFHLENBQUM7QUFDbEcsVUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJO0FBQzVELFdBQU8sRUFBRSxDQUFDLElBQUksR0FBRztBQUFBLEVBQ25CO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sQ0FBQztBQUFBO0FBQUEsRUFFVCxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFBQSxFQUMvRSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLE1BQU07QUFBQTtBQUVoRSxFQUFFLFVBQVUsTUFBTSxTQUFTLEdBQUc7QUFDNUIsU0FBTyxHQUFHLEtBQUssTUFBTSxDQUFDO0FBQ3hCO0FBQ0EsTUFBTSxLQUFLLElBQUksTUFBTSxJQUFJLEVBQUUsR0FBRyxHQUFHLEtBQUs7QUFDdEMsRUFBRSxNQUFNO0FBQ1IsRUFBRSxPQUFPLE1BQU07QUFDZixFQUFFLFdBQVcsS0FBSztBQUFBLEVBQ2hCLEdBQUc7QUFBQSxFQUNILE1BQU0sQ0FBQyxNQUFNLE1BQU07QUFDakIsUUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQzdDLGFBQU87QUFBQSxFQUNYO0FBQ0YsQ0FBQztBQUNELEVBQUUsT0FBTyxLQUFLLElBQUksTUFBTTtBQUN0QixRQUFNLElBQUksRUFBRSxHQUFHLE1BQU07QUFDckIsU0FBTyxFQUFFLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLEtBQUssS0FBSztBQUNoRDtBQUNBLE1BQU0sS0FBSyxJQUFJLE1BQU0sSUFBSSxFQUFFLEdBQUcsR0FBRyxJQUFJO0FBQ3JDLEVBQUUsS0FBSztBQUNQLEVBQUUsVUFBVSxLQUFLLFdBQVc7QUFDMUIsUUFBTSxJQUFJLEtBQUs7QUFDZixTQUFPLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDbEQ7QUFDQSxFQUFFLFVBQVUsTUFBTSxTQUFTLEdBQUc7QUFDNUIsU0FBTyxHQUFHLEtBQUssTUFBTSxDQUFDO0FBQ3hCO0FBQ0EsTUFBTSxLQUFLLElBQUksTUFBTSxJQUFJLEVBQUUsR0FBRyxHQUFHLEtBQUs7QUFDdEMsRUFBRSxNQUFNO0FBQ1IsRUFBRSxPQUFPLE1BQU07QUFDZixFQUFFLFdBQVcsS0FBSztBQUFBLEVBQ2hCLEdBQUc7QUFBQSxFQUNILE1BQU0sQ0FBQyxNQUFNLE1BQU07QUFDakIsUUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsTUFBTSxZQUFZLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEtBQUs7QUFDL0UsYUFBTztBQUFBLEVBQ1g7QUFDRixDQUFDO0FBQ0QsTUFBTSxFQUFFLEtBQUssR0FBRSxJQUFLLE1BQU0sS0FBSyxDQUFDLE1BQU07QUFDcEMsUUFBTSxJQUFJLElBQUk7QUFDZCxNQUFJLEdBQUcsR0FBRztBQUNWLFNBQU8sSUFBSSxNQUFNLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLHNCQUFzQix1QkFBdUIsSUFBSSxJQUFJLEtBQUsscUJBQXFCLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksc0JBQXNCLHNCQUFzQixJQUFJLElBQUksTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE1BQU0sSUFBSSxxQkFBcUIscUJBQXFCLElBQUksSUFBSSxNQUFNLG9CQUFvQixHQUFHLENBQUMsR0FBRyxJQUFJLG9CQUFvQix1QkFBdUIsSUFBSSxJQUFJLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDL2EsR0FBRyxFQUFFLE9BQU8sR0FBRSxJQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU07QUFDdEMsUUFBTSxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUN4QyxNQUFJLElBQUksS0FBSyxJQUFJO0FBQ2pCLFFBQU0sSUFBSTtBQUNWLE1BQUk7QUFDSixTQUFPLElBQUksSUFBSSxLQUFLO0FBQ2xCLFNBQUssSUFBSSxLQUFLO0FBQ2QsVUFBTSxJQUFJLEdBQUcsQ0FBQztBQUNkLE1BQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUFBLEVBQ3JDO0FBQ0EsU0FBTyxHQUFHLENBQUM7QUFDYjtBQUNBLEVBQUUsVUFBVSxPQUFPLEVBQUUsVUFBVSxTQUFTLEVBQUUsVUFBVSxjQUFjLFdBQVc7QUFDM0UsU0FBTyxHQUFHLEtBQUssSUFBSTtBQUNyQjtBQUNBLE1BQU0sS0FBSyxJQUFJLE1BQU0sSUFBSSxFQUFFLEdBQUcsR0FBRyxNQUFNO0FBQ3ZDLE9BQU8sT0FBTyxHQUFHLEVBQUUsTUFBTSxJQUFJLFFBQVEsSUFBSSxhQUFhLElBQUk7QUFDMUQsRUFBRSxPQUFPLE9BQU8sRUFBRSxPQUFPLFNBQVMsRUFBRSxPQUFPLGNBQWM7QUFDekQsRUFBRSxVQUFVLFFBQVEsV0FBVztBQUM3QixTQUFPLEdBQUcsS0FBSyxJQUFJO0FBQ3JCO0FBQ0EsTUFBTSxLQUFLLElBQUksTUFBTSxJQUFJLEVBQUUsR0FBRyxHQUFHLE9BQU87QUFDeEMsT0FBTyxPQUFPLEdBQUcsRUFBRSxPQUFPLEdBQUUsQ0FBRTtBQUM5QixFQUFFLE9BQU8sUUFBUTtBQUNqQixFQUFFLFdBQVcsS0FBSztBQUFBLEVBQ2hCLEdBQUc7QUFBQSxFQUNILE1BQU0sSUFBSSxNQUFNO0FBQ2QsUUFBSSxJQUFJLEVBQUUsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sV0FBVyxFQUFFLFdBQVc7QUFDdEQsYUFBTztBQUFBLEVBQ1g7QUFDRixDQUFDO0FBQ0QsT0FBTyxPQUFPLEdBQUc7QUFBQSxFQUNmLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLGNBQWM7QUFBQSxFQUNkLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFDVCxDQUFDO0FBQ0ksTUFBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFROyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
