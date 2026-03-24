"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { priceHistoryData, mockNfts } from "@/data/mockNfts";
import type { NFT } from "@/data/mockNfts";
import { CyberNFTCard } from "./CyberNFTCard";

function CyberTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="px-3 py-2 bg-[#080812]/95 cyber-border"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
      }}
    >
      <p className="text-[10px] font-mono text-[#7dd3fc]/60 mb-1">{label}</p>
      <p
        className="text-sm font-bold font-mono text-[#ffcc00]"
        style={{ textShadow: "0 0 8px rgba(255,204,0,0.5)" }}
      >
        {payload[0].value} CRO
      </p>
    </div>
  );
}

interface CyberAnalyticsTabProps {
  nft: NFT;
}

export function CyberAnalyticsTab({ nft }: CyberAnalyticsTabProps) {
  // Filter similar NFTs: exclude current, sort by closest rarity, take first 4
  const similarNfts = mockNfts
    .filter((n) => n.id !== nft.id)
    .sort((a, b) => Math.abs(a.rarity - nft.rarity) - Math.abs(b.rarity - nft.rarity))
    .slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Price History Chart */}
      <div
        className="p-4 bg-[#080812]/80 cyber-border"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
        }}
      >
        <h3 className="text-xs font-bold font-mono text-[#00f0ff] uppercase tracking-widest mb-4">
          {"// price_history"}
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={priceHistoryData}>
            <defs>
              <linearGradient id="cyberPriceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00f0ff" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#00f0ff" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              tick={{ fontFamily: "monospace", fontSize: 10, fill: "rgba(125,211,252,0.4)" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontFamily: "monospace", fontSize: 10, fill: "rgba(125,211,252,0.4)" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v} CRO`}
            />
            <Tooltip content={<CyberTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#00f0ff"
              strokeWidth={2}
              fill="url(#cyberPriceGradient)"
              dot={false}
              activeDot={{ r: 4, fill: "#00f0ff", stroke: "#080812", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Similar NFTs */}
      <div>
        <h3 className="text-xs font-bold font-mono text-[#e0f0ff] uppercase tracking-widest mb-4">
          {"// similar_nfts"}
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {similarNfts.map((n, i) => (
            <CyberNFTCard key={n.id} nft={n} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
