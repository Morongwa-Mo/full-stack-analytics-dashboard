import { X as by } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';

var d = { exports: {} }, q = d.exports, y;
function m() {
  return y || (y = 1, (function(p, x) {
    (function(e, n) {
      p.exports = n();
    })(q, (function() {
      var e = "day";
      return function(n, v, f) {
        var s = function(t) {
          return t.add(4 - t.isoWeekday(), e);
        }, o = v.prototype;
        o.isoWeekYear = function() {
          return s(this).year();
        }, o.isoWeek = function(t) {
          if (!this.$utils().u(t)) return this.add(7 * (t - this.isoWeek()), e);
          var r, i, a, u, W = s(this), $ = (r = this.isoWeekYear(), i = this.$u, a = (i ? f.utc : f)().year(r).startOf("year"), u = 4 - a.isoWeekday(), a.isoWeekday() > 4 && (u += 7), a.add(u, e));
          return W.diff($, "week") + 1;
        }, o.isoWeekday = function(t) {
          return this.$utils().u(t) ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7);
        };
        var c = o.startOf;
        o.startOf = function(t, r) {
          var i = this.$utils(), a = !!i.u(r) || r;
          return i.p(t) === "isoweek" ? a ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : c.bind(this)(t, r);
        };
      };
    }));
  })(d)), d.exports;
}
var l = m();
const I = /* @__PURE__ */ by(l);
var h = { exports: {} }, Y = h.exports, k;
function b() {
  return k || (k = 1, (function(p, x) {
    (function(e, n) {
      p.exports = n();
    })(Y, (function() {
      var e = "month", n = "quarter";
      return function(v, f) {
        var s = f.prototype;
        s.quarter = function(t) {
          return this.$utils().u(t) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t - 1));
        };
        var o = s.add;
        s.add = function(t, r) {
          return t = Number(t), this.$utils().p(r) === n ? this.add(3 * t, e) : o.bind(this)(t, r);
        };
        var c = s.startOf;
        s.startOf = function(t, r) {
          var i = this.$utils(), a = !!i.u(r) || r;
          if (i.p(t) === n) {
            var u = this.quarter() - 1;
            return a ? this.month(3 * u).startOf(e).startOf("day") : this.month(3 * u + 2).endOf(e).endOf("day");
          }
          return c.bind(this)(t, r);
        };
      };
    }));
  })(h)), h.exports;
}
var E = b();
const Q = /* @__PURE__ */ by(E);

export { I, Q };
//# sourceMappingURL=quarterOfYear-BLO_Qaw2-CBVA3k0_-BAgvWFqb.js.map
//# sourceMappingURL=quarterOfYear-BLO_Qaw2-CBVA3k0_-BAgvWFqb.js.map
