import { marketplaceStats } from "@/data/mockNfts";
import { TrendingUp, TrendingDown } from "lucide-react";

// SVG Sparkline component — renders a mini trend line from data points
function Sparkline({
  data,
  color,
  width = 60,
  height = 24,
}: {
  data: number[];
  color: string;
  width?: number;
  height?: number;
}) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((val - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  // Area fill path
  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="mt-1"
      aria-hidden="true"
    >
      {/* Area fill */}
      <polygon points={areaPoints} fill={color} opacity="0.15" />
      {/* Line */}
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// SVG Mini bar chart
function MiniBarChart({
  data,
  color,
  width = 60,
  height = 24,
}: {
  data: number[];
  color: string;
  width?: number;
  height?: number;
}) {
  const max = Math.max(...data);
  const barWidth = width / data.length - 1;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="mt-1"
      aria-hidden="true"
    >
      {data.map((val, i) => {
        const barHeight = (val / max) * (height - 2);
        return (
          <rect
            key={i}
            x={i * (barWidth + 1)}
            y={height - barHeight}
            width={barWidth}
            height={barHeight}
            fill={color}
            opacity={0.6 + (i / data.length) * 0.4}
            rx="1"
          />
        );
      })}
    </svg>
  );
}

// Mock sparkline data
const floorPriceData = [1.2, 1.1, 1.3, 1.25, 1.4, 1.35, 1.5];
const volumeData = [180, 220, 195, 250, 210, 230, 245];
const listingsData = [170, 165, 162, 160, 158, 155, 156];

function StatItem({
  label,
  value,
  change,
  suffix,
  chart,
}: {
  label: string;
  value: string | number;
  change?: string;
  suffix?: string;
  chart?: React.ReactNode;
}) {
  const isPositive = change ? change.startsWith("+") : undefined;

  return (
    <div className="relative flex flex-col items-center justify-center py-4 px-4 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-lg overflow-hidden transition-all hover:bg-white/[0.07] group">
      <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
        {label}
      </span>
      <span className="text-lg font-bold text-white tracking-tight">
        {value}
        {suffix && (
          <span className="text-[10px] text-red-500 ml-1">{suffix}</span>
        )}
      </span>
      {chart}
      {change && (
        <div
          className={`flex items-center gap-1 mt-1 text-[10px] font-medium ${
            isPositive ? "text-green-500" : "text-red-400"
          }`}
        >
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{change}%</span>
        </div>
      )}
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="w-full" role="region" aria-label="Marketplace statistics">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-[2px] w-8 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
        <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-gray-100">
          Market Overview
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-red-600/60 to-transparent" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <StatItem
          label="Floor Price"
          value={marketplaceStats.floorPrice}
          suffix="CRO"
          change={marketplaceStats.floorChange}
          chart={
            <Sparkline data={floorPriceData} color="#22c55e" />
          }
        />
        <StatItem
          label="24h Volume"
          value={marketplaceStats.volume24h}
          suffix="CRO"
          change={marketplaceStats.volumeChange}
          chart={
            <MiniBarChart data={volumeData} color="#ef4444" />
          }
        />
        <StatItem
          label="Listings"
          value={marketplaceStats.activeListings}
          change={marketplaceStats.listingsChange}
          chart={
            <Sparkline data={listingsData} color="#ef4444" />
          }
        />
        <StatItem label="Owners" value={marketplaceStats.owners} />
        <StatItem label="Unique Items" value={marketplaceStats.uniqueItems} />
        <StatItem
          label="Avg Price"
          value={marketplaceStats.avgPrice}
          suffix="CRO"
          change={marketplaceStats.avgChange}
        />
      </div>
    </div>
  );
}
