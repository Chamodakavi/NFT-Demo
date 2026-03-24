"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { CyberNFTCard } from "./CyberNFTCard";
import type { NFT } from "@/data/mockNfts";
import type { FilterState } from "./CyberFilterSidebar";

interface CyberNFTGridProps {
  nfts: NFT[];
  filters: FilterState;
}

function CyberSkeletonCard() {
  return (
    <div
      className="overflow-hidden bg-[#080812]/90 cyber-border"
      style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
      aria-hidden="true"
    >
      <div className="aspect-square bg-[#0f1a2e]/30 cyber-shimmer" />
      <div className="p-3 space-y-2">
        <div className="h-4 bg-[#00f0ff]/5 w-3/4 cyber-shimmer" />
        <div className="h-2 bg-[#00f0ff]/5 w-full cyber-shimmer" />
        <div className="flex justify-between pt-1 border-t border-[#00f0ff]/10">
          <div className="h-4 bg-[#00f0ff]/5 w-1/3 cyber-shimmer" />
          <div className="h-4 bg-[#00f0ff]/5 w-1/6 cyber-shimmer" />
        </div>
      </div>
    </div>
  );
}

export function CyberNFTGrid({ nfts, filters }: CyberNFTGridProps) {
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const filteredNfts = useMemo(() => {
    let result = [...nfts];

    const activeTraits = Object.entries(filters.selectedTraits).filter(
      ([, values]) => values.length > 0,
    );
    if (activeTraits.length > 0) {
      result = result.filter((nft) =>
        activeTraits.every(([category, values]) =>
          nft.traits.some(
            (trait) => trait.name === category && values.includes(trait.value),
          ),
        ),
      );
    }

    if (filters.rarityFilter === "highest") {
      result.sort((a, b) => a.rarity - b.rarity);
    } else if (filters.rarityFilter === "lowest") {
      result.sort((a, b) => b.rarity - a.rarity);
    } else if (filters.rarityFilter === "alpha") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (filters.priceSort === "low_to_high") {
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (filters.priceSort === "high_to_low") {
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    if (filters.sortBy === "popular") {
      result.sort((a, b) => b.views - a.views);
    } else if (filters.sortBy === "oldest") {
      result.sort((a, b) => a.id.localeCompare(b.id));
    }

    return result;
  }, [nfts, filters]);

  useEffect(() => {
    setVisibleCount(8);
  }, [filters]);

  const visibleNfts = filteredNfts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredNfts.length;

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
      setLoading(false);
    }, 600);
  }, [loading, hasMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  if (filteredNfts.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 text-center" role="status">
        <div
          className="w-16 h-16 mb-4 flex items-center justify-center cyber-border"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        >
          <span className="text-[#00f0ff] text-lg font-mono cyber-glow">?</span>
        </div>
        <h3 className="text-sm font-bold font-mono text-[#00f0ff] cyber-glow mb-2">NO_RESULTS</h3>
        <p className="text-xs text-[#7dd3fc]/40 font-mono max-w-[300px]">
          No NFTs match your current filters. Try adjusting your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] text-[#7dd3fc]/40 font-mono" role="status" aria-live="polite">
          {`> ${filteredNfts.length} item${filteredNfts.length !== 1 ? "s" : ""} found`}
          {visibleCount < filteredNfts.length &&
            ` // showing ${Math.min(visibleCount, filteredNfts.length)}`}
        </span>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
        role="list"
        aria-label="NFT listings"
      >
        {visibleNfts.map((nft, index) => (
          <div key={nft.id} role="listitem">
            <CyberNFTCard nft={nft} index={index} />
          </div>
        ))}
        {loading &&
          Array.from({ length: 4 }).map((_, i) => <CyberSkeletonCard key={`skeleton-${i}`} />)}
      </div>

      {/* Infinite scroll sentinel */}
      {hasMore && (
        <div
          ref={sentinelRef}
          className="flex justify-center mt-8 py-4"
          aria-hidden="true"
        >
          {!loading && (
            <span className="text-[10px] text-[#7dd3fc]/30 font-mono">// scroll for more</span>
          )}
          {loading && (
            <div className="flex items-center gap-2 text-[10px] text-[#00f0ff] font-mono">
              <div
                className="w-4 h-4 border-2 border-[#00f0ff]/20 border-t-[#00f0ff] rounded-full animate-spin"
                style={{ filter: "drop-shadow(0 0 4px rgba(0,240,255,0.6))" }}
              />
              LOADING...
            </div>
          )}
        </div>
      )}

      {/* End of results */}
      {!hasMore && filteredNfts.length > 8 && (
        <div className="flex justify-center mt-8">
          <span className="text-[10px] text-[#7dd3fc]/30 font-mono">// END_OF_DATA</span>
        </div>
      )}
    </div>
  );
}
