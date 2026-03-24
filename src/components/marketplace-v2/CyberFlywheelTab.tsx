"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { flywheelData } from "@/data/mockNfts";

/* ─── Sub-components ────────────────────────────────────────── */

interface FlowStepProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function FlowStep({ step, icon, title, description, color }: FlowStepProps) {
  return (
    <div className="flex flex-col items-center text-center flex-1 min-w-0">
      {/* Hexagonal number badge */}
      <div
        className="relative w-14 h-14 flex items-center justify-center mb-3"
        style={{
          clipPath:
            "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
          background: `linear-gradient(135deg, ${color}22, ${color}08)`,
          border: `1px solid ${color}`,
          boxShadow: `0 0 20px ${color}40, inset 0 0 15px ${color}15`,
        }}
      >
        {/* inner hexagon border via pseudo-approach: use a nested div */}
        <div
          className="absolute inset-[2px] flex items-center justify-center"
          style={{
            clipPath:
              "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
            border: `1px solid ${color}60`,
          }}
        />
        <span
          className="relative z-10 text-lg font-black font-mono"
          style={{ color, textShadow: `0 0 10px ${color}80` }}
        >
          {step}
        </span>
      </div>

      {/* Icon */}
      <div
        className="w-10 h-10 flex items-center justify-center mb-2"
        style={{
          color,
          filter: `drop-shadow(0 0 6px ${color}80)`,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h4
        className="text-xs font-bold font-mono uppercase tracking-widest mb-1"
        style={{ color, textShadow: `0 0 8px ${color}60` }}
      >
        {title}
      </h4>

      {/* Description */}
      <p className="text-[10px] font-mono text-[#7dd3fc]/50 leading-relaxed max-w-[180px]">
        {description}
      </p>
    </div>
  );
}

function FlowConnector({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="hidden md:flex items-center justify-center px-2 pt-4">
      <div className="relative w-16 h-[2px] overflow-hidden">
        {/* Static track */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(90deg, ${fromColor}, ${toColor})`,
          }}
        />
        {/* Animated beam */}
        <motion.div
          className="absolute inset-y-0 w-8"
          style={{
            background: `linear-gradient(90deg, transparent, ${fromColor}, ${toColor}, transparent)`,
            boxShadow: `0 0 8px ${fromColor}80, 0 0 16px ${toColor}40`,
          }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <ArrowRight
        className="w-4 h-4 ml-1"
        style={{
          color: toColor,
          filter: `drop-shadow(0 0 4px ${toColor}60)`,
        }}
      />
    </div>
  );
}

interface TreasurySplitBarProps {
  label: string;
  percent: number;
  color: string;
  delay?: number;
}

function TreasurySplitBar({ label, percent, color, delay = 0 }: TreasurySplitBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-[#e0f0ff]">{label}</span>
        <span
          className="text-xs font-bold font-mono"
          style={{ color, textShadow: `0 0 6px ${color}60` }}
        >
          {percent}%
        </span>
      </div>
      <div className="w-full h-3 bg-[#0f1a2e] overflow-hidden relative"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
        }}
      >
        <motion.div
          className="h-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}CC, ${color})`,
            boxShadow: `0 0 10px ${color}80, 0 0 25px ${color}30`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Shimmer on bar */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)`,
              animation: "cyber-shimmer-move 2s infinite linear",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

interface ImpactCardProps {
  label: string;
  value: string;
  suffix: string;
  color: string;
}

function ImpactCard({ label, value, suffix, color }: ImpactCardProps) {
  return (
    <div
      className="relative flex-1 p-4 bg-[#080812]/80 overflow-hidden group"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
        border: `1px solid ${color}40`,
        boxShadow: `0 0 15px ${color}20, inset 0 0 20px ${color}08`,
      }}
    >
      {/* Top neon accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: color,
          boxShadow: `0 0 10px ${color}80, 0 0 30px ${color}40`,
          animation: "neon-pulse 2s infinite",
        }}
      />

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${color}10, transparent 70%)`,
        }}
      />

      {/* Label */}
      <span className="block text-[10px] font-mono text-[#7dd3fc]/40 uppercase tracking-widest mb-2 relative z-10">
        {label}
      </span>

      {/* Value */}
      <div className="relative z-10">
        <span
          className="text-xl font-black font-mono"
          style={{ color, textShadow: `0 0 12px ${color}80, 0 0 30px ${color}30` }}
        >
          {value}
        </span>
        <span
          className="text-xs font-mono ml-1.5"
          style={{ color: `${color}99` }}
        >
          {suffix}
        </span>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────── */

export function CyberFlywheelTab() {
  const { feePercent, treasurySplit, impactMetrics, transparencyBullets } =
    flywheelData;

  const splitEntries = [
    treasurySplit.liquidity,
    treasurySplit.buybacks,
    treasurySplit.ops,
  ];

  return (
    <div className="space-y-8">
      {/* ── Section Header ── */}
      <div className="text-center mb-2">
        <h3
          className="text-sm font-bold font-mono uppercase tracking-[0.3em] text-[#00f0ff] cyber-glow mb-1"
        >
          {"// FLYWHEEL_ECONOMY"}
        </h3>
        <p className="text-[10px] font-mono text-[#7dd3fc]/30">
          Every trade fuels the ecosystem. {feePercent}% fee &mdash; 100% transparent.
        </p>
      </div>

      {/* ── 3-Step Horizontal Flow ── */}
      <div
        className="p-6 bg-[#080812]/60 cyber-border"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
          <FlowStep
            step={1}
            icon={<Zap className="w-6 h-6" />}
            title="Fee Collected"
            description={`${feePercent}% fee on every marketplace trade is captured on-chain`}
            color="#00f0ff"
          />
          <FlowConnector fromColor="#00f0ff" toColor="#C026D3" />
          <FlowStep
            step={2}
            icon={<Shield className="w-6 h-6" />}
            title="Treasury Split"
            description="Fees are routed to treasury and split across three pillars"
            color="#C026D3"
          />
          <FlowConnector fromColor="#C026D3" toColor="#ff0040" />
          <FlowStep
            step={3}
            icon={<TrendingUp className="w-6 h-6" />}
            title="Real Impact"
            description="Liquidity deepens, $HUB supply shrinks, rewards compound"
            color="#ff0040"
          />
        </div>

        {/* Mobile flow arrows (visible only on mobile) */}
        <div className="flex md:hidden flex-col items-center -mt-3">
          {[
            { color: "#00f0ff" },
            { color: "#C026D3" },
          ].map((item, i) => (
            <div
              key={i}
              className="w-[2px] h-6 my-1"
              style={{
                background: `linear-gradient(180deg, ${item.color}, transparent)`,
                boxShadow: `0 0 6px ${item.color}60`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Treasury Split Bars ── */}
      <div
        className="p-5 bg-[#080812]/60 cyber-border"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
        }}
      >
        <h4 className="text-[10px] font-bold font-mono text-[#7dd3fc]/40 uppercase tracking-widest mb-4">
          {"// treasury_allocation"}
        </h4>
        <div className="space-y-4">
          {splitEntries.map((entry, i) => (
            <TreasurySplitBar
              key={entry.label}
              label={entry.label}
              percent={entry.percent}
              color={entry.color}
              delay={i * 0.2}
            />
          ))}
        </div>

        {/* Total indicator */}
        <div className="mt-4 pt-3 border-t border-[#00f0ff]/10 flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#7dd3fc]/30">
            total_allocation
          </span>
          <span
            className="text-xs font-bold font-mono text-[#00f0ff]"
            style={{ textShadow: "0 0 6px rgba(0,240,255,0.5)" }}
          >
            100%
          </span>
        </div>
      </div>

      {/* ── Transparency Section ── */}
      <div
        className="p-5 bg-[#080812]/60 cyber-border"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
        }}
      >
        <h4
          className="text-[10px] font-bold font-mono uppercase tracking-widest mb-4 text-[#00f0ff]"
          style={{ textShadow: "0 0 6px rgba(0,240,255,0.4)" }}
        >
          {"// transparency"}
        </h4>
        <ul className="space-y-2.5">
          {transparencyBullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="text-xs font-mono font-bold text-[#00f0ff] mt-px flex-shrink-0"
                style={{ textShadow: "0 0 4px rgba(0,240,255,0.5)" }}
              >
                {">"}
              </span>
              <span className="text-xs font-mono text-[#7dd3fc]/60 leading-relaxed">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Impact Metrics ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        <ImpactCard
          label="Total Fees Collected"
          value={impactMetrics.totalFeesCollected}
          suffix="CRO"
          color="#00f0ff"
        />
        <ImpactCard
          label="$HUB Buybacks"
          value={impactMetrics.totalBuybacks}
          suffix="CRO"
          color="#C026D3"
        />
        <ImpactCard
          label="Liquidity Added"
          value={impactMetrics.liquidityAdded}
          suffix="CRO"
          color="#ff0040"
        />
      </div>

      {/* ── CTA Button ── */}
      <div className="flex justify-center pt-2">
        <button
          className="w-full sm:w-auto px-10 py-4 bg-[#ff0040]/20 border border-[#ff0040]/60 text-sm font-black uppercase tracking-[0.2em] font-mono text-[#ff0040] hover:bg-[#ff0040]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
            boxShadow:
              "0 0 25px rgba(255,0,64,0.4), 0 0 60px rgba(255,0,64,0.15), inset 0 0 20px rgba(255,0,64,0.1)",
            animation: "neon-pulse 2s infinite",
          }}
        >
          {">> BUY NOW & FUEL THE FLYWHEEL <<"}
        </button>
      </div>
    </div>
  );
}
