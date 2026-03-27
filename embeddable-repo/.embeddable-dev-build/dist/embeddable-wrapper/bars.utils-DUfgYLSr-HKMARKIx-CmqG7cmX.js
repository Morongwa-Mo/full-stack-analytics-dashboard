import { G as GIe, C as Cm } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { e as ex, r as rx, t as tx } from './charts.utils-c8yku90J-Chy-UZ3p-Bf2s8PEm.js';
import { j } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { I as I$1 } from './styles.utils-BfpH_m_W-BVwxfT0G-FCoxpF9d.js';

const E = (l, d) => {
  var g;
  const m = j(d), { data: n = [], dimension: c, groupDimension: a, measure: i } = l, s = [...new Set(n.map((r) => r[c.name]).filter((r) => r != null))].sort(), t = `${a.name}${a.nativeType === GIe && ((g = a.inputs) != null && g.granularity) ? `.${a.inputs.granularity}` : ""}`, e = [...new Set(n.map((r) => r[t]))].filter((r) => r != null), o = Cm(), u = e.map((r, b) => {
    const $ = I$1({
      dimensionOrMeasure: a,
      theme: d,
      color: "background",
      value: `${a.name}.${r}`,
      index: b,
      chartColors: o
    }), P = I$1({
      dimensionOrMeasure: a,
      theme: d,
      color: "border",
      value: `${a.name}.${r}`,
      index: b,
      chartColors: o
    });
    return {
      label: m.data(a, r),
      rawLabel: r,
      backgroundColor: $,
      borderColor: P,
      data: s.map((v) => {
        const h = n.find(
          (k) => k[t] === r && k[c.name] === v
        );
        return h ? Number(h[i.name]) : 0;
      })
    };
  });
  return {
    labels: s,
    datasets: u
  };
}, I = (l, d = ex) => {
  if (!l.data)
    return {
      labels: [],
      datasets: [{ data: [] }]
    };
  const m = j(d), n = rx(l.data, l.dimension, l.measures, l.maxItems), c = Cm();
  return {
    labels: n.map((a) => a[l.dimension.name]),
    datasets: l.measures.map((a, i) => {
      const s = I$1({
        dimensionOrMeasure: a,
        theme: d,
        color: "background",
        value: a.name,
        index: i,
        chartColors: c
      }), t = I$1({
        dimensionOrMeasure: a,
        theme: d,
        color: "border",
        value: a.name,
        index: i,
        chartColors: c
      });
      return {
        label: m.dimensionOrMeasureTitle(a),
        data: n.map((e) => e[a.name] ?? 0),
        backgroundColor: s,
        borderColor: t
      };
    })
  };
}, T = (l, d) => {
  const { datasets: m } = l.chart.data, n = l.dataIndex, c = m.reduce((a, i) => {
    const s = i.data[n];
    return a + (s || 0);
  }, 0);
  return d(c);
}, S = (l, d) => {
  const { onBarClicked: m, measures: n, dimension: c, horizontal: a, data: i } = l, s = j(d);
  return {
    plugins: {
      legend: { position: d.charts.legendPosition ?? "bottom" },
      datalabels: {
        labels: {
          total: {
            formatter: (t, e) => T(
              e,
              (o) => s.data(n[0], o)
            )
          },
          value: {
            formatter: (t, e) => {
              var u;
              const o = n[e.datasetIndex % n.length];
              return (u = o.inputs) != null && u.showValueAsPercentage ? tx(Number(t), e.dataset.data) : s.data(o, t);
            }
          }
        }
      },
      tooltip: {
        callbacks: {
          title: (t) => {
            var o;
            const e = (o = t[0]) == null ? void 0 : o.label;
            return s.data(c, e);
          },
          label: (t) => {
            var b;
            const e = n[t.datasetIndex % n.length], o = t.raw, u = s.data(c, t.dataset.label) || "", g = s.data(e, o);
            let r = "";
            return (b = e.inputs) != null && b.showValueAsPercentage && (r = `(${tx(o, t.dataset.data)})`), `${u}: ${g} ${r}`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          callback: (t) => {
            if (a)
              return s.data(n[0], t);
            if (!i || !i.labels) return;
            const e = i.labels[Number(t)];
            return s.data(c, e);
          }
        }
      },
      y: {
        ticks: {
          callback: (t) => {
            if (!a)
              return s.data(n[0], t);
            if (!i || !i.labels) return;
            const e = i.labels[Number(t)];
            return s.data(c, e);
          }
        }
      }
    },
    onClick: (t, e, o) => {
      var b;
      if (!m) return;
      const u = e[0], g = u ? o.data.labels[u.index] : null, r = u ? (b = o.data.datasets[u.datasetIndex]) == null ? void 0 : b.rawLabel : null;
      m({
        axisDimensionValue: g,
        groupingDimensionValue: r
      });
    }
  };
};

export { E, I, S };
//# sourceMappingURL=bars.utils-DUfgYLSr-HKMARKIx-CmqG7cmX.js.map
//# sourceMappingURL=bars.utils-DUfgYLSr-HKMARKIx-CmqG7cmX.js.map
