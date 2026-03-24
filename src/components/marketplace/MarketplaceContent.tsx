"use client";

import { useState } from "react";
import { StatsBar } from "./StatsBar";
import { FilterSidebar, type FilterState } from "./FilterSidebar";
import { NFTGrid } from "./NFTGrid";
import { mockNfts } from "@/data/mockNfts";

export function MarketplaceContent() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            NFT <span className="text-red-600">Marketplace</span>
          </h1>
          <p className="text-sm text-gray-400">
            Discover, collect and trade the rarest digital assets on Cronos.
          </p>
          {/* Gradient line */}
          <div className="block w-48 h-[3px] overflow-hidden mt-3">
            <div className="h-full bg-gradient-to-r from-red-600 via-red-500/50 to-transparent animate-grow-width" />
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mb-8">
          <StatsBar />
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent mb-8 opacity-50" />

        {/* Main Content: Sidebar + Grid */}
        <div className="flex gap-6 items-start">
          {/* Mobile filter button is rendered inside FilterSidebar */}
          <FilterSidebar filters={filters} onFilterChange={setFilters} />

          {/* NFT Grid */}
          <NFTGrid nfts={mockNfts} filters={filters} />
        </div>
      </div>
    </div>
  );
}
