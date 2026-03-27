import { x, P as Pe } from "./index-CnLFSN1m-CiKoWgQc.js";
import { L } from "./GranularitySelectField-USDUQ-JX-DwuCP4xb.js";
const g = "_chartGranularitySelectFieldContainer_m26zn_1", G = "_marginTop_m26zn_7", o = {
  chartGranularitySelectFieldContainer: g,
  marginTop: G
}, m = ["day", "week", "month", "quarter", "year"], S = ({
  dimension: r,
  hasMarginTop: t,
  ...a
}) => {
  var e, i, l;
  if (!((e = r == null ? void 0 : r.inputs) == null ? void 0 : e.showGranularityDropdown))
    return null;
  const u = (i = r.inputs) == null ? void 0 : i.dateBounds, c = (l = r.inputs) == null ? void 0 : l.granularity;
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      className: Pe(
        o.chartGranularitySelectFieldContainer,
        t && o.marginTop
      ),
      children: /* @__PURE__ */ x.jsx(
        L,
        {
          ...a,
          primaryTimeRange: u,
          granularity: c,
          granularities: m,
          variant: "ghost",
          side: "bottom",
          align: "end"
        }
      )
    }
  );
}, w = (r, t) => {
  var n;
  const a = t ?? ((n = r.inputs) == null ? void 0 : n.granularity);
  return {
    ...r,
    inputs: {
      ...r.inputs,
      granularity: a
    }
  };
};
export {
  S,
  w
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhbnVsYXJpdHkudXRpbHMtemVFN1JESVktQlZ0Slo0bW0uanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3Jvbmd3YS9lbWJlZGRhYmxlX2h1YnNwb3RfZGFzaC9lbWJlZGRhYmxlLXJlcG8vbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS9yZW1hcmthYmxlLXByby9kaXN0L2dyYW51bGFyaXR5LnV0aWxzLXplRTdSRElZLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGogYXMgcywgdyBhcyB5IH0gZnJvbSBcIi4vaW5kZXgtQ25MRlNOMW0uanNcIjtcbmltcG9ydCB7IEcgYXMgcCB9IGZyb20gXCIuL0dyYW51bGFyaXR5U2VsZWN0RmllbGQtVVNEVVEtSlguanNcIjtcbmNvbnN0IGcgPSBcIl9jaGFydEdyYW51bGFyaXR5U2VsZWN0RmllbGRDb250YWluZXJfbTI2em5fMVwiLCBHID0gXCJfbWFyZ2luVG9wX20yNnpuXzdcIiwgbyA9IHtcbiAgY2hhcnRHcmFudWxhcml0eVNlbGVjdEZpZWxkQ29udGFpbmVyOiBnLFxuICBtYXJnaW5Ub3A6IEdcbn0sIG0gPSBbXCJkYXlcIiwgXCJ3ZWVrXCIsIFwibW9udGhcIiwgXCJxdWFydGVyXCIsIFwieWVhclwiXSwgUyA9ICh7XG4gIGRpbWVuc2lvbjogcixcbiAgaGFzTWFyZ2luVG9wOiB0LFxuICAuLi5hXG59KSA9PiB7XG4gIHZhciBlLCBpLCBsO1xuICBpZiAoISgoZSA9IHIgPT0gbnVsbCA/IHZvaWQgMCA6IHIuaW5wdXRzKSA9PSBudWxsID8gdm9pZCAwIDogZS5zaG93R3JhbnVsYXJpdHlEcm9wZG93bikpXG4gICAgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHUgPSAoaSA9IHIuaW5wdXRzKSA9PSBudWxsID8gdm9pZCAwIDogaS5kYXRlQm91bmRzLCBjID0gKGwgPSByLmlucHV0cykgPT0gbnVsbCA/IHZvaWQgMCA6IGwuZ3JhbnVsYXJpdHk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gcy5qc3goXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IHkoXG4gICAgICAgIG8uY2hhcnRHcmFudWxhcml0eVNlbGVjdEZpZWxkQ29udGFpbmVyLFxuICAgICAgICB0ICYmIG8ubWFyZ2luVG9wXG4gICAgICApLFxuICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBzLmpzeChcbiAgICAgICAgcCxcbiAgICAgICAge1xuICAgICAgICAgIC4uLmEsXG4gICAgICAgICAgcHJpbWFyeVRpbWVSYW5nZTogdSxcbiAgICAgICAgICBncmFudWxhcml0eTogYyxcbiAgICAgICAgICBncmFudWxhcml0aWVzOiBtLFxuICAgICAgICAgIHZhcmlhbnQ6IFwiZ2hvc3RcIixcbiAgICAgICAgICBzaWRlOiBcImJvdHRvbVwiLFxuICAgICAgICAgIGFsaWduOiBcImVuZFwiXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gICk7XG59LCB3ID0gKHIsIHQpID0+IHtcbiAgdmFyIG47XG4gIGNvbnN0IGEgPSB0ID8/ICgobiA9IHIuaW5wdXRzKSA9PSBudWxsID8gdm9pZCAwIDogbi5ncmFudWxhcml0eSk7XG4gIHJldHVybiB7XG4gICAgLi4ucixcbiAgICBpbnB1dHM6IHtcbiAgICAgIC4uLnIuaW5wdXRzLFxuICAgICAgZ3JhbnVsYXJpdHk6IGFcbiAgICB9XG4gIH07XG59O1xuZXhwb3J0IHtcbiAgUyBhcyBDLFxuICB3IGFzIGdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncmFudWxhcml0eS51dGlscy16ZUU3UkRJWS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJzIiwieSIsInAiXSwibWFwcGluZ3MiOiI7O0FBRUssTUFBQyxJQUFJLGlEQUFpRCxJQUFJLHNCQUFzQixJQUFJO0FBQUEsRUFDdkYsc0NBQXNDO0FBQUEsRUFDdEMsV0FBVztBQUNiLEdBQUcsSUFBSSxDQUFDLE9BQU8sUUFBUSxTQUFTLFdBQVcsTUFBTSxHQUFHLElBQUksQ0FBQztBQUFBLEVBQ3ZELFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLEdBQUc7QUFDTCxNQUFNO0FBQ0osTUFBSSxHQUFHLEdBQUc7QUFDVixNQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sU0FBUyxFQUFFLFdBQVcsT0FBTyxTQUFTLEVBQUU7QUFDN0QsV0FBTztBQUNULFFBQU0sS0FBSyxJQUFJLEVBQUUsV0FBVyxPQUFPLFNBQVMsRUFBRSxZQUFZLEtBQUssSUFBSSxFQUFFLFdBQVcsT0FBTyxTQUFTLEVBQUU7QUFDbEcsU0FBdUJBLGtCQUFFO0FBQUEsSUFDdkI7QUFBQSxJQUNBO0FBQUEsTUFDRSxXQUFXQztBQUFBQSxRQUNULEVBQUU7QUFBQSxRQUNGLEtBQUssRUFBRTtBQUFBLE1BQ2Y7QUFBQSxNQUNNLFVBQTBCRCxrQkFBRTtBQUFBLFFBQzFCRTtBQUFBQSxRQUNBO0FBQUEsVUFDRSxHQUFHO0FBQUEsVUFDSCxrQkFBa0I7QUFBQSxVQUNsQixhQUFhO0FBQUEsVUFDYixlQUFlO0FBQUEsVUFDZixTQUFTO0FBQUEsVUFDVCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDakI7QUFBQSxNQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFDQSxHQUFHLElBQUksQ0FBQyxHQUFHLE1BQU07QUFDZixNQUFJO0FBQ0osUUFBTSxJQUFJLE9BQU8sSUFBSSxFQUFFLFdBQVcsT0FBTyxTQUFTLEVBQUU7QUFDcEQsU0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsUUFBUTtBQUFBLE1BQ04sR0FBRyxFQUFFO0FBQUEsTUFDTCxhQUFhO0FBQUEsSUFDbkI7QUFBQSxFQUNBO0FBQ0E7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
