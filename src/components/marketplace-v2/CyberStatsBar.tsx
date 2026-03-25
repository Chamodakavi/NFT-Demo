"use client";

import Link from "next/link";
import { marketplaceStats } from "@/data/mockNfts";
import { floorHistoryData, volumeHistoryData, listingsHistoryData } from "@/data/mockNfts";
import { TrendingUp, TrendingDown, Zap } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer } from "recharts";

/* ---------- Mini Recharts Components ---------- */

function CyberMiniAreaChart({
  data,
  dataKey,
  color = "#00f0ff",
}: {
  data: Record<string, unknown>[];
  dataKey: string;
  color?: string;
}) {
  const gradientId = `area-gradient-${dataKey}`;

  return (
    <div className="mt-1" style={{ width: 60, height: 24 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.4} />
              <stop offset="100%" stopColor={color} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={1.5}
            fill={`url(#${gradientId})`}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function CyberMiniBarChart({
  data,
  dataKey,
  color = "#00f0ff",
}: {
  data: Record<string, unknown>[];
  dataKey: string;
  color?: string;
}) {
  return (
    <div className="mt-1" style={{ width: 60, height: 24 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <Bar
            dataKey={dataKey}
            fill={color}
            opacity={0.6}
            radius={[1, 1, 0, 0]}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ---------- Flywheel Mini Bar ---------- */

function FlywheelMiniBar({
  label,
  percent,
  color,
}: {
  label: string;
  percent: number;
  color: string;
}) {
  return (
    <div className="flex flex-col items-start min-w-[60px]">
      <span className="text-[8px] font-mono text-[#7dd3fc]/50 uppercase tracking-wider leading-none mb-0.5">
        {label}
      </span>
      <span
        className="text-[10px] font-bold font-mono leading-none mb-0.5"
        style={{ color, textShadow: `0 0 6px ${color}80` }}
      >
        {percent}%
      </span>
      <div
        className="w-full h-[1px]"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 6px ${color}, 0 0 12px ${color}80`,
          animation: "neon-pulse 3s infinite",
        }}
      />
    </div>
  );
}

/* ---------- Stat Item ---------- */

function CyberStatItem({
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
    <div
      className="relative flex flex-col items-center justify-center py-4 px-4 bg-[#080812]/80 cyber-border overflow-hidden transition-all group hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
      style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
    >
      <span className="text-[10px] text-[#7dd3fc]/50 uppercase tracking-widest font-mono mb-1">
        {label}
      </span>
      <span
        className="text-lg font-bold text-[#e0f0ff] tracking-tight font-mono"
        style={{ textShadow: "0 0 10px rgba(0,240,255,0.3)" }}
      >
        {value}
        {suffix && (
          <span className="text-[10px] text-[#00f0ff] ml-1 cyber-glow">{suffix}</span>
        )}
      </span>
      {chart}
      {change && (
        <div
          className={`flex items-center gap-1 mt-1 text-[10px] font-medium font-mono ${
            isPositive ? "text-[#ff6600]" : "text-[#00f0ff]"
          }`}
          style={{ textShadow: isPositive ? "0 0 8px rgba(255,102,0,0.5)" : "0 0 8px rgba(0,240,255,0.5)" }}
        >
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{change}%</span>
        </div>
      )}
      {/* Bottom neon line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f0ff]"
        style={{ boxShadow: "0 0 15px rgba(0,240,255,0.8), 0 0 40px rgba(0,240,255,0.3)", animation: "neon-pulse 3s infinite" }}
      />
    </div>
  );
}

/* ---------- Main Component ---------- */

export function CyberStatsBar() {
  return (
    <div className="w-full" role="region" aria-label="Marketplace statistics">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className="h-[2px] w-10 bg-[#00f0ff]"
          style={{ boxShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 30px rgba(0,240,255,0.4)" }}
        />
        <h2
          className="text-sm uppercase tracking-[0.3em] font-bold text-[#00f0ff] font-mono cyber-glow"
        >
          :: Market_Overview
        </h2>
        <div
          className="h-[1px] flex-grow bg-gradient-to-r from-[#00f0ff]/60 to-transparent"
          style={{ boxShadow: "0 0 8px rgba(0,240,255,0.3)" }}
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <CyberStatItem
          label="Floor"
          value={marketplaceStats.floorPrice}
          suffix="CRO"
          change={marketplaceStats.floorChange}
          chart={<CyberMiniAreaChart data={floorHistoryData} dataKey="price" />}
        />
        <CyberStatItem
          label="24h Vol"
          value={marketplaceStats.volume24h}
          suffix="CRO"
          change={marketplaceStats.volumeChange}
          chart={<CyberMiniBarChart data={volumeHistoryData} dataKey="volume" />}
        />
        <CyberStatItem
          label="Listed"
          value={marketplaceStats.activeListings}
          change={marketplaceStats.listingsChange}
          chart={<CyberMiniAreaChart data={listingsHistoryData} dataKey="count" />}
        />
        <CyberStatItem label="Owners" value={marketplaceStats.owners} />
        <CyberStatItem label="Items" value={marketplaceStats.uniqueItems} />
        <CyberStatItem
          label="Avg"
          value={marketplaceStats.avgPrice}
          suffix="CRO"
          change={marketplaceStats.avgChange}
        />
      </div>

      {/* Compact Flywheel Widget */}
      <div
        className="mt-4 p-3 bg-[#080812]/80 cyber-border flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
      >
        <div className="flex items-center gap-2 flex-shrink-0">
          <Zap className="w-3.5 h-3.5 text-[#C026D3]" style={{ filter: "drop-shadow(0 0 4px rgba(192,38,211,0.6))" }} />
          <span className="text-[10px] font-bold font-mono text-[#C026D3] uppercase tracking-widest cyber-glow-neon-purple">
            Flywheel
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-[#7dd3fc]/50">
          <span className="text-[#e0f0ff]">3% Fee</span>
          <span className="text-[#00f0ff]">{">"}</span>
        </div>

        <div className="flex items-center gap-3 flex-1">
          <FlywheelMiniBar label="Liquidity" percent={50} color="#00f0ff" />
          <FlywheelMiniBar label="Buybacks" percent={30} color="#C026D3" />
          <FlywheelMiniBar label="Ops" percent={20} color="#ff0040" />
        </div>

        <Link href="/flywheel" className="text-[9px] font-mono text-[#C026D3] hover:text-[#C026D3]/80 transition-colors uppercase tracking-widest whitespace-nowrap">
          {"View Full Flywheel >>"}
        </Link>
      </div>
    </div>
  );
}
