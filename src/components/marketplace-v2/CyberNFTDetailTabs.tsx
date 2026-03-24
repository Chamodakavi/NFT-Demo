"use client";

import { useState, useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import type { NFT } from "@/data/mockNfts";
import { CyberFlywheelTab } from "./CyberFlywheelTab";
import { CyberAnalyticsTab } from "./CyberAnalyticsTab";

interface CyberNFTDetailTabsProps {
  nft: NFT;
}

function CyberTraitsTab({ nft }: { nft: NFT }) {
  return (
    <div className="space-y-6">
      {/* Overall Rarity */}
      <div
        className="p-4 bg-[#080812]/80 cyber-border"
        style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold font-mono text-[#e0f0ff]">overall_rarity</span>
          <span
            className="text-xs font-bold font-mono text-[#00f0ff]"
            style={{ textShadow: "0 0 8px rgba(0,240,255,0.5)" }}
          >
            Rank #{nft.rarity} / 10,000
          </span>
        </div>
        <div
          className="w-full h-2 bg-[#0f1a2e] overflow-hidden"
          role="progressbar"
          aria-valuenow={100 - nft.rarityPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Rarity: Rank ${nft.rarity} out of 10,000`}
        >
          <div
            className="h-full"
            style={{
              width: `${Math.max(2, 100 - nft.rarityPercent * 10)}%`,
              background: "linear-gradient(90deg, #00f0ff 0%, #C026D3 100%)",
              boxShadow: "0 0 10px rgba(0,240,255,0.6), 0 0 20px rgba(192,38,211,0.4)",
            }}
          />
        </div>
        <p className="text-[10px] text-[#7dd3fc]/40 font-mono mt-2">
          // Based on trait uniqueness across the entire collection
        </p>
      </div>

      {/* Trait List */}
      <div className="space-y-2">
        {nft.traits.map((trait, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-3 bg-[#080812]/60 border border-[#00f0ff]/10 hover:border-[#00f0ff]/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all"
            style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-[#7dd3fc]/40 uppercase tracking-widest font-mono">
                  {trait.name}
                </span>
                <span className="text-[10px] text-[#7dd3fc]/40 font-mono">
                  {trait.rarity}% have this
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-[#e0f0ff]">{trait.value}</span>
                <span
                  className={`text-[9px] font-bold font-mono px-1.5 py-0.5 ${
                    trait.rarity <= 3
                      ? "bg-[#ff0040]/20 text-[#ff0040] shadow-[0_0_8px_rgba(255,0,64,0.4)]"
                      : trait.rarity <= 10
                        ? "bg-[#ff6600]/20 text-[#ff6600] shadow-[0_0_8px_rgba(255,102,0,0.4)]"
                        : trait.rarity <= 20
                          ? "bg-[#ffcc00]/20 text-[#ffcc00] shadow-[0_0_8px_rgba(255,204,0,0.4)]"
                          : "bg-[#C026D3]/20 text-[#C026D3] shadow-[0_0_8px_rgba(192,38,211,0.4)]"
                  }`}
                  style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }}
                >
                  {trait.rarity <= 3
                    ? "LEGENDARY"
                    : trait.rarity <= 10
                      ? "RARE"
                      : trait.rarity <= 20
                        ? "UNCOMMON"
                        : "COMMON"}
                </span>
              </div>
              {/* Rarity Bar */}
              <div
                className="w-full h-1 bg-[#0f1a2e] mt-1.5 overflow-hidden"
                role="progressbar"
                aria-valuenow={trait.rarity}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${trait.name}: ${trait.value}, ${trait.rarity}% rarity`}
              >
                <div
                  className={`h-full ${
                    trait.rarity <= 3
                      ? "bg-[#ff0040]"
                      : trait.rarity <= 10
                        ? "bg-[#ff6600]"
                        : trait.rarity <= 20
                          ? "bg-[#ffcc00]"
                          : "bg-[#C026D3]"
                  }`}
                  style={{ width: `${trait.rarity}%`, boxShadow: "0 0 6px currentColor" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CyberHistoryTab({ nft }: { nft: NFT }) {
  return (
    <div className="overflow-x-auto" role="region" aria-label="Transaction history">
      <table className="w-full text-sm font-mono" aria-label="On-chain history">
        <thead>
          <tr className="border-b border-[#00f0ff]/20">
            <th scope="col" className="text-left py-3 px-3 text-[10px] text-[#7dd3fc]/40 uppercase tracking-widest font-medium">
              Date
            </th>
            <th scope="col" className="text-left py-3 px-3 text-[10px] text-[#7dd3fc]/40 uppercase tracking-widest font-medium">
              Event
            </th>
            <th scope="col" className="text-left py-3 px-3 text-[10px] text-[#7dd3fc]/40 uppercase tracking-widest font-medium">
              From
            </th>
            <th scope="col" className="text-left py-3 px-3 text-[10px] text-[#7dd3fc]/40 uppercase tracking-widest font-medium">
              To
            </th>
            <th scope="col" className="text-right py-3 px-3 text-[10px] text-[#7dd3fc]/40 uppercase tracking-widest font-medium">
              Price
            </th>
            <th scope="col" className="text-right py-3 px-3 text-[10px] text-[#7dd3fc]/40 uppercase tracking-widest font-medium">
              Tx
            </th>
          </tr>
        </thead>
        <tbody>
          {nft.history.map((event, i) => (
            <tr
              key={i}
              className="border-b border-[#00f0ff]/10 hover:bg-[#00f0ff]/5 transition-colors"
            >
              <td className="py-3 px-3 text-[#7dd3fc]/50 text-xs whitespace-nowrap">
                {event.timestamp}
              </td>
              <td className="py-3 px-3">
                <span
                  className={`px-2 py-0.5 text-[9px] font-bold uppercase ${
                    event.event === "Sale"
                      ? "bg-[#ff6600]/20 text-[#ff6600] shadow-[0_0_6px_rgba(255,102,0,0.3)]"
                      : event.event === "Mint"
                        ? "bg-[#00f0ff]/20 text-[#00f0ff] shadow-[0_0_6px_rgba(0,240,255,0.3)]"
                        : "bg-[#7dd3fc]/10 text-[#7dd3fc]/50"
                  }`}
                  style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }}
                >
                  {event.event}
                </span>
              </td>
              <td className="py-3 px-3 text-[#7dd3fc]/40 text-xs">
                {event.from}
              </td>
              <td className="py-3 px-3 text-[#7dd3fc]/40 text-xs">
                {event.to}
              </td>
              <td className="py-3 px-3 text-right text-xs">
                {event.price ? (
                  <>
                    <span className="text-[#ffcc00]" style={{ textShadow: "0 0 6px rgba(255,204,0,0.4)" }}>
                      {event.price}
                    </span>{" "}
                    <span className="text-[10px] text-[#00f0ff]">CRO</span>
                  </>
                ) : (
                  <span className="text-[#7dd3fc]/20">—</span>
                )}
              </td>
              <td className="py-3 px-3 text-right">
                <button
                  className="text-[#00f0ff]/40 hover:text-[#00f0ff] transition-colors"
                  aria-label={`View transaction ${event.txHash}`}
                >
                  <ExternalLink className="w-3 h-3" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CyberMetadataTab({ nft }: { nft: NFT }) {
  const metadataJson = {
    name: nft.title,
    description: nft.description,
    image: `ipfs://${nft.metadata.ipfsHash}`,
    attributes: nft.traits.map((t) => ({
      trait_type: t.name,
      value: t.value,
    })),
  };

  return (
    <div className="space-y-4">
      {/* IPFS Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Standard", value: nft.metadata.standard },
          { label: "File Size", value: nft.metadata.fileSize },
          { label: "Created", value: nft.metadata.createdAt },
          { label: "IPFS", value: nft.metadata.ipfsHash, truncate: true },
        ].map((item) => (
          <div
            key={item.label}
            className="p-3 bg-[#080812]/80 border border-[#00f0ff]/10 hover:border-[#00f0ff]/30 transition-colors"
            style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
          >
            <span className="text-[10px] text-[#7dd3fc]/40 uppercase font-mono block">
              {item.label}
            </span>
            <span className={`text-xs font-mono text-[#e0f0ff] ${item.truncate ? "truncate block" : ""}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Mini Analytics */}
      <div
        className="flex items-center gap-6 p-3 bg-[#080812]/60 border border-[#00f0ff]/10"
        style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#7dd3fc]/40 font-mono">views:</span>
          <span className="text-xs font-bold font-mono text-[#e0f0ff]">
            {nft.views.toLocaleString()}
          </span>
        </div>
        <div className="w-[1px] h-4 bg-[#00f0ff]/20" />
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#7dd3fc]/40 font-mono">likes:</span>
          <span className="text-xs font-bold font-mono text-[#e0f0ff]">
            {nft.likes.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Raw Metadata */}
      <div>
        <span className="text-[10px] text-[#7dd3fc]/40 uppercase tracking-widest font-mono block mb-2">
          {"// raw_metadata.json"}
        </span>
        <pre
          className="p-4 bg-[#080812] border border-[#00f0ff]/20 text-xs text-[#7dd3fc]/60 overflow-x-auto font-mono cyber-scanline"
          style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
        >
          <code>{JSON.stringify(metadataJson, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

function CyberTabPanel({
  active,
  children,
  id,
  labelledBy,
}: {
  active: boolean;
  children: React.ReactNode;
  id: string;
  labelledBy: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(active);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (active) {
      setVisible(true);
      requestAnimationFrame(() => setAnimating(true));
    } else {
      setAnimating(false);
      const timeout = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [active]);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      id={id}
      role="tabpanel"
      aria-labelledby={labelledBy}
      className={`transition-all duration-200 ${
        animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {children}
    </div>
  );
}

export function CyberNFTDetailTabs({ nft }: CyberNFTDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<"traits" | "history" | "metadata" | "flywheel" | "analytics">("traits");

  const tabs = [
    { key: "traits" as const, label: "TRAITS" },
    { key: "history" as const, label: "HISTORY" },
    { key: "metadata" as const, label: "METADATA" },
    { key: "flywheel" as const, label: "FLYWHEEL" },
    { key: "analytics" as const, label: "ANALYTICS" },
  ];

  return (
    <div>
      {/* Tab Headers */}
      <div
        className="flex overflow-x-auto border-b border-[#00f0ff]/20 mb-6"
        role="tablist"
        aria-label="NFT details"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            id={`cyber-tab-${tab.key}`}
            onClick={() => setActiveTab(tab.key)}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`cyber-panel-${tab.key}`}
            tabIndex={activeTab === tab.key ? 0 : -1}
            onKeyDown={(e) => {
              const currentIndex = tabs.findIndex((t) => t.key === activeTab);
              if (e.key === "ArrowRight") {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % tabs.length;
                setActiveTab(tabs[nextIndex].key);
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                setActiveTab(tabs[prevIndex].key);
              }
            }}
            className={`flex-shrink-0 whitespace-nowrap px-5 py-3 text-xs font-bold font-mono uppercase tracking-widest transition-all relative ${
              activeTab === tab.key
                ? "text-[#00f0ff] cyber-glow"
                : "text-[#7dd3fc]/30 hover:text-[#7dd3fc]/60"
            }`}
          >
            {`[${tab.label}]`}
            {activeTab === tab.key && (
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00f0ff]"
                style={{
                  boxShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 30px rgba(0,240,255,0.4)",
                  animation: "neon-pulse 2s infinite",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        <CyberTabPanel active={activeTab === "traits"} id="cyber-panel-traits" labelledBy="cyber-tab-traits">
          <CyberTraitsTab nft={nft} />
        </CyberTabPanel>
        <CyberTabPanel active={activeTab === "history"} id="cyber-panel-history" labelledBy="cyber-tab-history">
          <CyberHistoryTab nft={nft} />
        </CyberTabPanel>
        <CyberTabPanel active={activeTab === "metadata"} id="cyber-panel-metadata" labelledBy="cyber-tab-metadata">
          <CyberMetadataTab nft={nft} />
        </CyberTabPanel>
        <CyberTabPanel active={activeTab === "flywheel"} id="cyber-panel-flywheel" labelledBy="cyber-tab-flywheel">
          <CyberFlywheelTab />
        </CyberTabPanel>
        <CyberTabPanel active={activeTab === "analytics"} id="cyber-panel-analytics" labelledBy="cyber-tab-analytics">
          <CyberAnalyticsTab nft={nft} />
        </CyberTabPanel>
      </div>
    </div>
  );
}
