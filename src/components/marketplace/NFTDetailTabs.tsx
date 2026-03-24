"use client";

import { useState, useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import type { NFT } from "@/data/mockNfts";

interface NFTDetailTabsProps {
  nft: NFT;
}

function TraitsTab({ nft }: { nft: NFT }) {
  return (
    <div className="space-y-6">
      {/* Overall Rarity */}
      <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold">Overall Rarity</span>
          <span className="text-sm font-bold text-red-500">
            Rank #{nft.rarity} / 10,000
          </span>
        </div>
        <div
          className="w-full h-2 bg-white/10 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={100 - nft.rarityPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Rarity: Rank ${nft.rarity} out of 10,000`}
        >
          <div
            className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
            style={{
              width: `${Math.max(2, 100 - nft.rarityPercent * 10)}%`,
            }}
          />
        </div>
        <p className="text-[11px] text-gray-500 mt-2">
          Based on trait uniqueness across the entire collection
        </p>
      </div>

      {/* Trait List */}
      <div className="space-y-3">
        {nft.traits.map((trait, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-3 bg-black/20 border border-white/5 rounded-lg hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                  {trait.name}
                </span>
                <span className="text-[10px] text-gray-400">
                  {trait.rarity}% have this
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{trait.value}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    trait.rarity <= 3
                      ? "bg-red-600/20 text-red-400"
                      : trait.rarity <= 10
                        ? "bg-orange-600/20 text-orange-400"
                        : trait.rarity <= 20
                          ? "bg-yellow-600/20 text-yellow-400"
                          : "bg-blue-600/20 text-blue-400"
                  }`}
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
                className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden"
                role="progressbar"
                aria-valuenow={trait.rarity}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${trait.name}: ${trait.value}, ${trait.rarity}% rarity`}
              >
                <div
                  className={`h-full rounded-full ${
                    trait.rarity <= 3
                      ? "bg-red-500"
                      : trait.rarity <= 10
                        ? "bg-orange-500"
                        : trait.rarity <= 20
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                  }`}
                  style={{ width: `${trait.rarity}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HistoryTab({ nft }: { nft: NFT }) {
  return (
    <div className="overflow-x-auto" role="region" aria-label="Transaction history">
      <table className="w-full text-sm" aria-label="On-chain history">
        <thead>
          <tr className="border-b border-white/10">
            <th scope="col" className="text-left py-3 px-3 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
              Date
            </th>
            <th scope="col" className="text-left py-3 px-3 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
              Event
            </th>
            <th scope="col" className="text-left py-3 px-3 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
              From
            </th>
            <th scope="col" className="text-left py-3 px-3 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
              To
            </th>
            <th scope="col" className="text-right py-3 px-3 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
              Price
            </th>
            <th scope="col" className="text-right py-3 px-3 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
              Tx
            </th>
          </tr>
        </thead>
        <tbody>
          {nft.history.map((event, i) => (
            <tr
              key={i}
              className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
            >
              <td className="py-3 px-3 text-gray-400 whitespace-nowrap">
                {event.timestamp}
              </td>
              <td className="py-3 px-3">
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    event.event === "Sale"
                      ? "bg-green-600/20 text-green-400"
                      : event.event === "Mint"
                        ? "bg-blue-600/20 text-blue-400"
                        : "bg-gray-600/20 text-gray-400"
                  }`}
                >
                  {event.event}
                </span>
              </td>
              <td className="py-3 px-3 text-gray-400 font-mono text-xs">
                {event.from}
              </td>
              <td className="py-3 px-3 text-gray-400 font-mono text-xs">
                {event.to}
              </td>
              <td className="py-3 px-3 text-right font-medium">
                {event.price ? (
                  <>
                    {event.price}{" "}
                    <span className="text-[10px] text-red-500">CRO</span>
                  </>
                ) : (
                  <span className="text-gray-600">—</span>
                )}
              </td>
              <td className="py-3 px-3 text-right">
                <button
                  className="text-gray-500 hover:text-red-400 transition-colors"
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

function MetadataTab({ nft }: { nft: NFT }) {
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
        <div className="p-3 bg-black/40 border border-white/5 rounded-lg">
          <span className="text-[10px] text-gray-500 uppercase block">
            Standard
          </span>
          <span className="text-sm font-medium">{nft.metadata.standard}</span>
        </div>
        <div className="p-3 bg-black/40 border border-white/5 rounded-lg">
          <span className="text-[10px] text-gray-500 uppercase block">
            File Size
          </span>
          <span className="text-sm font-medium">{nft.metadata.fileSize}</span>
        </div>
        <div className="p-3 bg-black/40 border border-white/5 rounded-lg">
          <span className="text-[10px] text-gray-500 uppercase block">
            Created
          </span>
          <span className="text-sm font-medium">
            {nft.metadata.createdAt}
          </span>
        </div>
        <div className="p-3 bg-black/40 border border-white/5 rounded-lg">
          <span className="text-[10px] text-gray-500 uppercase block">
            IPFS
          </span>
          <span className="text-sm font-medium font-mono truncate block">
            {nft.metadata.ipfsHash}
          </span>
        </div>
      </div>

      {/* Mini Analytics */}
      <div className="flex items-center gap-6 p-3 bg-black/20 border border-white/5 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Views</span>
          <span className="text-sm font-bold">
            {nft.views.toLocaleString()}
          </span>
        </div>
        <div className="w-[1px] h-4 bg-white/10" />
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Likes</span>
          <span className="text-sm font-bold">
            {nft.likes.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Raw Metadata */}
      <div>
        <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-2">
          Raw Metadata (JSON)
        </span>
        <pre className="p-4 bg-black/60 border border-white/5 rounded-lg text-xs text-gray-400 overflow-x-auto font-mono">
          {JSON.stringify(metadataJson, null, 2)}
        </pre>
      </div>
    </div>
  );
}

// Tab content wrapper with fade animation
function TabPanel({
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
      // Trigger fade-in on next frame
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

export function NFTDetailTabs({ nft }: NFTDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<"traits" | "history" | "metadata">(
    "traits",
  );

  const tabs = [
    { key: "traits" as const, label: "Traits & Rarity" },
    { key: "history" as const, label: "On-Chain History" },
    { key: "metadata" as const, label: "Metadata & IPFS" },
  ];

  return (
    <div>
      {/* Tab Headers */}
      <div
        className="flex border-b border-white/10 mb-6"
        role="tablist"
        aria-label="NFT details"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            id={`tab-${tab.key}`}
            onClick={() => setActiveTab(tab.key)}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`panel-${tab.key}`}
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
            className={`px-5 py-3 text-sm font-medium transition-all relative ${
              activeTab === tab.key
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content with fade animations */}
      <div>
        <TabPanel active={activeTab === "traits"} id="panel-traits" labelledBy="tab-traits">
          <TraitsTab nft={nft} />
        </TabPanel>
        <TabPanel active={activeTab === "history"} id="panel-history" labelledBy="tab-history">
          <HistoryTab nft={nft} />
        </TabPanel>
        <TabPanel active={activeTab === "metadata"} id="panel-metadata" labelledBy="tab-metadata">
          <MetadataTab nft={nft} />
        </TabPanel>
      </div>
    </div>
  );
}
