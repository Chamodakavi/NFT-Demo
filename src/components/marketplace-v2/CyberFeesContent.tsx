"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Eye, ArrowRight, TrendingUp, Coins, Repeat } from "lucide-react";
import Link from "next/link";
import { flywheelData } from "@/data/mockNfts";

/* ─── Sub-components ────────────────────────────── */

function FeeCard({
  title,
  fee,
  description,
  details,
  color,
  icon,
  delay,
}: {
  title: string;
  fee: string;
  description: string;
  details: string[];
  color: string;
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative p-5 bg-[#080812]/80 overflow-hidden"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
        border: `1px solid ${color}30`,
        boxShadow: `0 0 20px ${color}10`,
      }}
    >
      <div className="absolute inset-0 cyber-scanline pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 flex items-center justify-center"
            style={{
              clipPath:
                "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              background: `linear-gradient(135deg, ${color}22, ${color}08)`,
              boxShadow: `0 0 15px ${color}30`,
            }}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-[#e0f0ff]">
              {title}
            </h3>
            <span
              className="text-lg font-black font-mono"
              style={{ color, textShadow: `0 0 10px ${color}60` }}
            >
              {fee}
            </span>
          </div>
        </div>
        <p className="text-xs text-[#7dd3fc]/50 font-mono leading-relaxed mb-3">
          {description}
        </p>
        <div className="space-y-1.5">
          {details.map((detail, i) => (
            <div key={i} className="flex items-start gap-2">
              <span
                className="text-[9px] font-mono mt-0.5 flex-shrink-0"
                style={{ color: `${color}80` }}
              >
                {">"}
              </span>
              <span className="text-[10px] text-[#7dd3fc]/40 font-mono">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
          animation: "neon-pulse 2s infinite",
        }}
      />
    </motion.div>
  );
}

function SplitBar({
  label,
  percent,
  color,
  delay,
}: {
  label: string;
  percent: number;
  color: string;
  delay: number;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-[#7dd3fc]/50">{label}</span>
        <span
          className="text-[10px] font-bold font-mono"
          style={{ color, textShadow: `0 0 6px ${color}50` }}
        >
          {percent}%
        </span>
      </div>
      <div className="w-full h-2 bg-[#0f1a2e] overflow-hidden">
        <motion.div
          className="h-full"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1, ease: "easeOut", delay }}
          style={{
            background: color,
            boxShadow: `0 0 8px ${color}80`,
          }}
        />
      </div>
    </div>
  );
}

/* ─── Main Component ───────────────────────────── */

export function CyberFeesContent() {
  const { treasurySplit, impactMetrics, transparencyBullets } = flywheelData;

  return (
    <div className="space-y-10">
      {/* ── Hero Message ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p
          className="text-2xl md:text-3xl font-black font-mono text-[#00f0ff] mb-2"
          style={{
            textShadow:
              "0 0 10px rgba(0,240,255,0.6), 0 0 40px rgba(0,240,255,0.2)",
          }}
        >
          No hidden costs.
        </p>
        <p className="text-sm text-[#7dd3fc]/50 font-mono max-w-xl mx-auto">
          Every fee is visible before you transact. We believe transparency builds
          trust — and trust builds communities.
        </p>
      </motion.div>

      {/* ── Fee Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeeCard
          title="Primary Mints"
          fee="2% Platform Fee"
          description="Deducted from creator proceeds. Buyers pay the clean listed price — what you see is what you pay."
          details={[
            "No buyer markup on mints",
            "Creator receives 98% of mint price",
            "Fee applied automatically on-chain",
          ]}
          color="#00f0ff"
          icon={<Coins className="w-5 h-5" style={{ color: "#00f0ff" }} />}
          delay={0.1}
        />
        <FeeCard
          title="Secondary Sales"
          fee="6% Total"
          description="3% buyer service fee added at checkout + 3% seller deduction. Supports the ecosystem flywheel."
          details={[
            "2% → Liquidity Pool (deepens market depth)",
            "2% → Treasury & Yield Vault",
            "2% → $HUB Buybacks (deflationary pressure)",
          ]}
          color="#C026D3"
          icon={<Repeat className="w-5 h-5" style={{ color: "#C026D3" }} />}
          delay={0.2}
        />
        <FeeCard
          title="Listing Fees"
          fee="FREE"
          description="List your NFTs on the marketplace at zero cost. No upfront fees, no hidden charges."
          details={[
            "Unlimited free listings",
            "No time limit on active listings",
            "Cancel anytime with no penalty",
          ]}
          color="#00ff64"
          icon={<TrendingUp className="w-5 h-5" style={{ color: "#00ff64" }} />}
          delay={0.3}
        />
        <FeeCard
          title="Gas Fees"
          fee="~0.01 CRO"
          description="Cronos network fees are among the lowest in crypto. Transactions settle in seconds."
          details={[
            "Average tx cost under 0.01 CRO",
            "2-second block finality",
            "No failed transaction charges",
          ]}
          color="#ffcc00"
          icon={<Zap className="w-5 h-5" style={{ color: "#ffcc00" }} />}
          delay={0.4}
        />
      </div>

      {/* ── Fee Flow Diagram ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="p-6 bg-[#080812]/80 overflow-hidden relative"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
          border: "1px solid rgba(0,240,255,0.15)",
        }}
      >
        <div className="absolute inset-0 cyber-scanline pointer-events-none" />
        <div className="relative z-10">
          <h3
            className="text-xs font-bold font-mono uppercase tracking-widest text-[#00f0ff] mb-1 cyber-glow"
          >
            {":: WHERE_YOUR_FEES_GO"}
          </h3>
          <p className="text-[10px] text-[#7dd3fc]/30 font-mono mb-5">
            {"// 6% secondary sale fee breakdown"}
          </p>

          {/* Treasury Split Bars */}
          <div className="space-y-3">
            <SplitBar
              label={treasurySplit.liquidity.label}
              percent={treasurySplit.liquidity.percent}
              color={treasurySplit.liquidity.color}
              delay={0.6}
            />
            <SplitBar
              label={treasurySplit.buybacks.label}
              percent={treasurySplit.buybacks.percent}
              color={treasurySplit.buybacks.color}
              delay={0.7}
            />
            <SplitBar
              label={treasurySplit.ops.label}
              percent={treasurySplit.ops.percent}
              color={treasurySplit.ops.color}
              delay={0.8}
            />
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { label: "Total Fees Collected", value: impactMetrics.totalFeesCollected, color: "#00f0ff" },
              { label: "$HUB Buybacks", value: impactMetrics.totalBuybacks, color: "#C026D3" },
              { label: "Liquidity Added", value: impactMetrics.liquidityAdded, color: "#ff0040" },
            ].map((metric, i) => (
              <div
                key={i}
                className="p-3 bg-[#0f1a2e]/50 text-center"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  border: `1px solid ${metric.color}20`,
                }}
              >
                <span
                  className="text-lg font-black font-mono block"
                  style={{
                    color: metric.color,
                    textShadow: `0 0 8px ${metric.color}50`,
                  }}
                >
                  {metric.value}
                </span>
                <span className="text-[8px] text-[#7dd3fc]/40 font-mono uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Transparency Section ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="p-6 bg-[#080812]/80 overflow-hidden relative"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
          border: "1px solid rgba(0,240,255,0.15)",
        }}
      >
        <div className="absolute inset-0 cyber-scanline pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Shield
              className="w-5 h-5 text-[#00f0ff]"
              style={{ filter: "drop-shadow(0 0 6px rgba(0,240,255,0.6))" }}
            />
            <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-[#00f0ff] cyber-glow">
              {":: TRANSPARENCY_COMMITMENT"}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {transparencyBullets.map((bullet, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 bg-[#0f1a2e]/30 border border-[#00f0ff]/10"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                }}
              >
                <Eye
                  className="w-3.5 h-3.5 text-[#00f0ff]/60 flex-shrink-0 mt-0.5"
                />
                <span className="text-[10px] text-[#7dd3fc]/50 font-mono leading-relaxed">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Example Calculation ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="p-6 bg-[#080812]/80 overflow-hidden relative"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
          border: "1px solid rgba(192,38,211,0.15)",
        }}
      >
        <div className="absolute inset-0 cyber-scanline pointer-events-none" />
        <div className="relative z-10">
          <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-[#C026D3] mb-4 cyber-glow-neon-purple">
            {":: EXAMPLE_CALCULATION"}
          </h3>
          <p className="text-[10px] text-[#7dd3fc]/30 font-mono mb-4">
            {"// Secondary sale at 1,000 CRO"}
          </p>

          <div className="space-y-2">
            {[
              { label: "list_price", value: "1,000 CRO", color: "#e0f0ff" },
              { label: "buyer_fee (3%)", value: "+ 30 CRO", color: "#ffcc00" },
              { label: "buyer_total", value: "1,030 CRO", color: "#00f0ff" },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-3 py-2 bg-[#0f1a2e]/30 border border-[#00f0ff]/5"
              >
                <span className="text-[10px] font-mono text-[#7dd3fc]/40">
                  {row.label}
                </span>
                <span
                  className="text-sm font-bold font-mono"
                  style={{ color: row.color }}
                >
                  {row.value}
                </span>
              </div>
            ))}

            <div
              className="h-[1px] bg-[#C026D3]/20 my-1"
              style={{ boxShadow: "0 0 6px rgba(192,38,211,0.2)" }}
            />

            {[
              { label: "seller_deduction (3%)", value: "- 30 CRO", color: "#ff0040" },
              { label: "seller_receives", value: "970 CRO", color: "#00ff64" },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-3 py-2 bg-[#0f1a2e]/30 border border-[#00f0ff]/5"
              >
                <span className="text-[10px] font-mono text-[#7dd3fc]/40">
                  {row.label}
                </span>
                <span
                  className="text-sm font-bold font-mono"
                  style={{ color: row.color }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── CTA ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link
          href="/marketplace"
          className="px-8 py-3 bg-[#00f0ff]/15 border border-[#00f0ff]/60 text-xs font-bold font-mono uppercase tracking-[0.15em] text-[#00f0ff] hover:bg-[#00f0ff]/25 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
            boxShadow: "0 0 12px rgba(0,240,255,0.3)",
          }}
        >
          {">> EXPLORE_MARKETPLACE"}
        </Link>
        <Link
          href="/flywheel"
          className="flex items-center gap-2 px-8 py-3 bg-[#080812]/80 border border-[#C026D3]/30 text-xs font-bold font-mono uppercase tracking-[0.15em] text-[#C026D3] hover:border-[#C026D3]/60 hover:shadow-[0_0_20px_rgba(192,38,211,0.3)] transition-all"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
          }}
        >
          <Zap className="w-3.5 h-3.5" />
          VIEW_FLYWHEEL
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>
    </div>
  );
}
