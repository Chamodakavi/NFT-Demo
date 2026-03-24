"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { NFTCard } from "./NFTCard";
import type { NFT } from "@/data/mockNfts";
import type { FilterState } from "./FilterSidebar";

interface NFTGridProps {
  nfts: NFT[];
  filters: FilterState;
}

function SkeletonCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 animate-pulse" aria-hidden="true">
      <div className="aspect-square bg-white/5" />
      <div className="p-3 space-y-2">
        <div className="h-4 bg-white/5 rounded w-3/4" />
        <div className="h-2 bg-white/5 rounded w-full" />
        <div className="flex justify-between pt-1 border-t border-white/5">
          <div className="h-4 bg-white/5 rounded w-1/3" />
          <div className="h-4 bg-white/5 rounded w-1/6" />
        </div>
      </div>
    </div>
  );
}

export function NFTGrid({ nfts, filters }: NFTGridProps) {
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const filteredNfts = useMemo(() => {
    let result = [...nfts];

    // Apply trait filters
    const activeTraits = Object.entries(filters.selectedTraits).filter(
      ([, values]) => values.length > 0,
    );
    if (activeTraits.length > 0) {
      result = result.filter((nft) =>
        activeTraits.every(([category, values]) =>
          nft.traits.some(
            (trait) =>
              trait.name === category && values.includes(trait.value),
          ),
        ),
      );
    }

    // Apply rarity filter
    if (filters.rarityFilter === "highest") {
      result.sort((a, b) => a.rarity - b.rarity);
    } else if (filters.rarityFilter === "lowest") {
      result.sort((a, b) => b.rarity - a.rarity);
    } else if (filters.rarityFilter === "alpha") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Apply price sort
    if (filters.priceSort === "low_to_high") {
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (filters.priceSort === "high_to_low") {
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    // Apply sort by
    if (filters.sortBy === "popular") {
      result.sort((a, b) => b.views - a.views);
    } else if (filters.sortBy === "oldest") {
      result.sort((a, b) => a.id.localeCompare(b.id));
    }
    // "newest" is default order

    return result;
  }, [nfts, filters]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(8);
  }, [filters]);

  const visibleNfts = filteredNfts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredNfts.length;

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
      setLoading(false);
    }, 600);
  }, [loading, hasMore]);

  // Infinite scroll via IntersectionObserver
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
        <div className="w-16 h-16 mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <span className="text-2xl" aria-hidden="true">🔍</span>
        </div>
        <h3 className="text-lg font-bold mb-2">No NFTs Found</h3>
        <p className="text-sm text-gray-500 max-w-[300px]">
          No NFTs match your current filters. Try adjusting your search
          criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-500" role="status" aria-live="polite">
          {filteredNfts.length} item{filteredNfts.length !== 1 ? "s" : ""}
          {visibleCount < filteredNfts.length &&
            ` — showing ${Math.min(visibleCount, filteredNfts.length)}`}
        </span>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
        role="list"
        aria-label="NFT listings"
      >
        {visibleNfts.map((nft) => (
          <div key={nft.id} role="listitem">
            <NFTCard nft={nft} />
          </div>
        ))}
        {loading &&
          Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={`skeleton-${i}`} />)}
      </div>

      {/* Infinite scroll sentinel */}
      {hasMore && (
        <div
          ref={sentinelRef}
          className="flex justify-center mt-8 py-4"
          aria-hidden="true"
        >
          {!loading && (
            <span className="text-xs text-gray-600">Scroll for more</span>
          )}
          {loading && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-4 h-4 border-2 border-white/10 border-t-red-500 rounded-full animate-spin" />
              Loading...
            </div>
          )}
        </div>
      )}

      {/* End of results */}
      {!hasMore && filteredNfts.length > 8 && (
        <div className="flex justify-center mt-8">
          <span className="text-xs text-gray-600">All items loaded</span>
        </div>
      )}
    </div>
  );
}
