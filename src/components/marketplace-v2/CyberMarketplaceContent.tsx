"use client";

import { useState } from "react";
import { CyberStatsBar } from "./CyberStatsBar";
import { CyberFilterSidebar, type FilterState } from "./CyberFilterSidebar";
import { CyberNFTGrid } from "./CyberNFTGrid";
import { mockNfts } from "@/data/mockNfts";

export function CyberMarketplaceContent() {
  const [filters, setFilters] = useState<FilterState>({
    priceSort: "none",
    rarityFilter: "none",
    sortBy: "newest",
    selectedTraits: {},
  });

  return (
    <div className="hero-section">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-bold font-mono mb-2"
            style={{ animation: "glitch-text 4s infinite" }}
          >
            <span className="text-[#e0f0ff]">NFT </span>
            <span
              className="text-[#00f0ff]"
              style={{ textShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 40px rgba(0,240,255,0.3)" }}
            >
              MARKETPLACE
            </span>
          </h1>
          <p className="text-xs text-[#7dd3fc]/40 font-mono">
            {"// Discover, collect and trade the rarest digital assets on Cronos."}
          </p>
          {/* Neon line */}
          <div
            className="block w-48 h-[2px] overflow-hidden mt-3 bg-[#00f0ff]"
            style={{
              boxShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 30px rgba(0,240,255,0.4)",
              animation: "neon-pulse 2s infinite",
            }}
          />
        </div>

        {/* Stats Bar */}
        <div className="mb-8">
          <CyberStatsBar />
        </div>

        {/* Separator */}
        <div
          className="w-full h-[2px] mb-8 bg-[#00f0ff]/30"
          style={{ boxShadow: "0 0 10px rgba(0,240,255,0.5), 0 0 30px rgba(0,240,255,0.15)", animation: "neon-pulse 3s infinite" }}
        />

        {/* Main Content: Sidebar + Grid */}
        <div className="flex gap-6 items-start">
          <CyberFilterSidebar filters={filters} onFilterChange={setFilters} />
          <CyberNFTGrid nfts={mockNfts} filters={filters} />
        </div>
      </div>
    </div>
  );
}
