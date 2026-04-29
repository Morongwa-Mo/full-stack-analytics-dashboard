import React from "react";

function formatCurrency(value) {
  if (value == null || Number.isNaN(Number(value))) return "N/A";

  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(Number(value));
}

function formatPercent(value) {
  if (value == null || Number.isNaN(Number(value))) return "N/A";
  return `${Math.round(Number(value))}%`;
}

function formatDays(value) {
  if (value == null || Number.isNaN(Number(value))) return "N/A";
  return `${Math.round(Number(value))} days`;
}

function getInsight({
  industry,
  conversionRate,
  avgWonDealSize,
  avgLostDealSize,
  avgDaysToClose,
}) {
  if (!industry) {
    return "Click an industry bar to view insight.";
  }

  const hasAllMetrics =
    conversionRate != null &&
    avgWonDealSize != null &&
    avgLostDealSize != null &&
    avgDaysToClose != null;

  if (!hasAllMetrics) {
    return `Showing insight for ${industry}. Loading KPI values...`;
  }

  const won = Number(avgWonDealSize);
  const lost = Number(avgLostDealSize);
  const conversion = Number(conversionRate);
  const days = Number(avgDaysToClose);

  if ([won, lost, conversion, days].some(Number.isNaN)) {
    return `Showing insight for ${industry}. Some KPI values are invalid or missing.`;
  }

  if (conversion >= 60 && lost > won && days > 120) {
    return `In ${industry}, conversion is relatively strong at ${formatPercent(
      conversion
    )}, but the largest deals are still being lost. Won deals average ${formatCurrency(
      won
    )}, while lost deals average ${formatCurrency(
      lost
    )}. The long average sales cycle of ${formatDays(
      days
    )} may be contributing to this pattern.`;
  }

  if (conversion < 50 && lost > won && days > 120) {
    return `${industry} shows weaker conversion performance at ${formatPercent(
      conversion
    )}. Lost deals are larger on average than won deals, and the long average sales cycle of ${formatDays(
      days
    )} suggests that bigger, slower-moving deals may be harder to close.`;
  }

  if (conversion >= 60 && won >= lost) {
    return `${industry} is performing relatively well, with a conversion rate of ${formatPercent(
      conversion
    )}. Won deal size is keeping pace with or exceeding lost deal size, which suggests stronger value capture in this segment.`;
  }

  if (lost > won) {
    return `In ${industry}, lost deals are larger on average than won deals. This suggests that although some deals are being closed, higher-value opportunities may be harder to convert.`;
  }

  return `${industry} has a conversion rate of ${formatPercent(
    conversion
  )}, with won deals averaging ${formatCurrency(
    won
  )} and lost deals averaging ${formatCurrency(
    lost
  )}. Average time to close is ${formatDays(
    days
  )}, which provides useful context for deal performance in this segment.`;
}

export default function Insight({
  industry,
  conversionRate,
  avgWonDealSize,
  avgLostDealSize,
  avgDaysToClose,
}) {
  const insight = getInsight({
    industry,
    conversionRate,
    avgWonDealSize,
    avgLostDealSize,
    avgDaysToClose,
  });

  return (
    <section className="insight-card">
      <h3>Insight</h3>
      <p>{industry ? `Selected industry: ${industry}` : "No industry selected"}</p>
      <p>{insight}</p>
    </section>
  );
}