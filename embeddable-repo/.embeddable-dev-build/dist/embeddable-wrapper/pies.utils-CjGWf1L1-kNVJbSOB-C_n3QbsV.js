import { e as ex, r as rx, t as tx } from './charts.utils-c8yku90J-Chy-UZ3p-Bf2s8PEm.js';
import { j } from './preview.data.constants-BZ8b6ZQ1-BtTomI2a-DfIqCEBU.js';
import { I } from './styles.utils-BfpH_m_W-BVwxfT0G-FCoxpF9d.js';
import { C as Cm } from './index-CnLFSN1m-CiKoWgQc-CozJeD_5.js';
import { y } from './component.utils-CbnwaSi1-v-XPM_Ab-OUX58DAH.js';

const O = (a, o = ex) => {
  const i = j(o);
  if (!a.data)
    return {
      labels: [],
      datasets: [{ data: [] }]
    };
  const e = rx(
    a.data,
    a.dimension,
    [a.measure],
    a.maxLegendItems
  ), t = Cm(), s = e.map(
    (n, r) => I({
      dimensionOrMeasure: a.dimension,
      theme: o,
      color: "background",
      value: `${a.dimension.name}.${n[a.dimension.name]}`,
      chartColors: t,
      index: r
    })
  ), g = e.map(
    (n, r) => I({
      dimensionOrMeasure: a.dimension,
      theme: o,
      color: "border",
      value: `${a.dimension.name}.${n[a.dimension.name]}`,
      chartColors: t,
      index: r
    })
  );
  return {
    labels: e.map((n) => {
      const r = n[a.dimension.name], m = i.data(a.dimension, r);
      return r === m ? y.t(r) : m;
    }),
    datasets: [
      {
        data: e.map((n) => n[a.measure.name]),
        backgroundColor: s,
        borderColor: g
      }
    ]
  };
}, w = (a, o = ex) => {
  const i = j(o);
  return {
    plugins: {
      legend: { position: o.charts.legendPosition ?? "bottom" },
      datalabels: {
        formatter: (e, t) => {
          var s;
          return (s = a.inputs) != null && s.showValueAsPercentage ? tx(Number(e), t.dataset.data) : i.data(a, e);
        }
      },
      tooltip: {
        callbacks: {
          label(e) {
            const t = e.raw;
            return `${i.data(a, t)} (${tx(t, e.dataset.data)})`;
          }
        }
      }
    }
  };
};

export { O, w };
//# sourceMappingURL=pies.utils-CjGWf1L1-kNVJbSOB-C_n3QbsV.js.map
//# sourceMappingURL=pies.utils-CjGWf1L1-kNVJbSOB-C_n3QbsV.js.map
