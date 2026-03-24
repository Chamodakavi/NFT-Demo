"use client";

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Grid3X3, List } from "lucide-react";
import Link from "next/link";
import { mockNfts } from "@/data/mockNfts";

const featuredNfts = mockNfts.slice(0, 4);
const gridNfts = mockNfts.slice(4, 10);

function CyberFeaturedCol() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const scrollRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: slideWidth * index, behavior: "smooth" });
    }
  };

  const prev = () => goToSlide(currentSlide > 0 ? currentSlide - 1 : featuredNfts.length - 1);
  const next = () => goToSlide(currentSlide < featuredNfts.length - 1 ? currentSlide + 1 : 0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const slideWidth = scrollRef.current.offsetWidth;
      setCurrentSlide(Math.round(scrollLeft / slideWidth));
    }
  };

  return (
    <section className="hero-section relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-10 bg-[#00f0ff]" style={{ boxShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 30px rgba(0,240,255,0.4)" }} />
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-[#00f0ff] font-mono cyber-glow">
            :: FEATURED_COLLECTION
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00f0ff]/60 to-transparent" style={{ boxShadow: "0 0 8px rgba(0,240,255,0.3)" }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Slider (60%) */}
          <div className="w-full lg:w-[58%]">
            <div
              className="relative overflow-hidden bg-[#080812]/80 cyber-border"
              style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
            >
              {/* Slides container */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onScroll={handleScroll}
              >
                {featuredNfts.map((nft) => (
                  <Link
                    key={nft.id}
                    href={`/v2/${nft.id}`}
                    className="flex-shrink-0 w-full snap-start relative group cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden cyber-scanline">
                      <img
                        src={nft.image}
                        alt={nft.title}
                        className="w-full h-full object-cover brightness-80 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                      />
                      {/* Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-[#080812]/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Badge */}
                      <div
                        className="absolute top-3 left-3 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-[#ff0040] text-white"
                        style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))", boxShadow: "0 0 10px rgba(255,0,64,0.6)", animation: "flicker 3s infinite" }}
                      >
                        {nft.badge}
                      </div>

                      {/* Bottom info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold font-mono text-[#e0f0ff] mb-1" style={{ textShadow: "0 0 10px rgba(0,240,255,0.3)" }}>
                          {nft.title}
                        </h3>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 bg-[#ffcc00]/20 flex items-center justify-center rotate-45">
                              <div className="w-1.5 h-1.5 bg-[#ffcc00] shadow-[0_0_4px_rgba(255,204,0,0.8)]" />
                            </div>
                            <span className="text-sm font-bold font-mono text-[#ffcc00]" style={{ textShadow: "0 0 6px rgba(255,204,0,0.5)" }}>
                              {nft.price} <span className="text-[9px] text-[#7dd3fc]/40">CRO</span>
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-[#00f0ff]/60 cyber-glow">
                            Rank #{nft.rarity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Nav arrows */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#080812]/80 border border-[#00f0ff]/30 text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all z-10"
                style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#080812]/80 border border-[#00f0ff]/30 text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all z-10"
                style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }}
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {featuredNfts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`h-1 transition-all ${i === currentSlide ? "w-6 bg-[#00f0ff] shadow-[0_0_6px_rgba(0,240,255,0.8)]" : "w-2 bg-[#7dd3fc]/20 hover:bg-[#7dd3fc]/40"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Bottom neon line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f0ff]" style={{ boxShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 30px rgba(0,240,255,0.3)", animation: "neon-pulse 2s infinite" }} />
            </div>
          </div>

          {/* Right: Grid/List (40%) */}
          <div className="w-full lg:w-[42%]">
            {/* Toggle header */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-[#7dd3fc]/40 font-mono uppercase tracking-widest">
                {"// latest_drops"}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 transition-colors ${viewMode === "grid" ? "text-[#00f0ff]" : "text-[#7dd3fc]/30 hover:text-[#7dd3fc]/50"}`}
                  aria-label="Grid view"
                >
                  <Grid3X3 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 transition-colors ${viewMode === "list" ? "text-[#00f0ff]" : "text-[#7dd3fc]/30 hover:text-[#7dd3fc]/50"}`}
                  aria-label="List view"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Grid View */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2">
                {gridNfts.map((nft) => (
                  <Link
                    key={nft.id}
                    href={`/v2/${nft.id}`}
                    className="group relative overflow-hidden bg-[#080812]/90 border border-[#00f0ff]/10 hover:border-[#00f0ff]/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img src={nft.image} alt={nft.title} className="w-full h-full object-cover brightness-80 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-transparent to-transparent" />
                    </div>
                    <div className="p-2">
                      <h4 className="text-[10px] font-mono text-[#e0f0ff] truncate">{nft.title}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[10px] font-mono text-[#ffcc00]" style={{ textShadow: "0 0 4px rgba(255,204,0,0.4)" }}>
                          {nft.price} CRO
                        </span>
                        <span className="text-[8px] font-mono text-[#00f0ff]/40">#{nft.rarity}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <div className="space-y-1.5">
                {gridNfts.map((nft) => (
                  <Link
                    key={nft.id}
                    href={`/v2/${nft.id}`}
                    className="group flex items-center gap-3 p-2 bg-[#080812]/90 border border-[#00f0ff]/10 hover:border-[#00f0ff]/40 hover:shadow-[0_0_10px_rgba(0,240,255,0.15)] transition-all"
                    style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                  >
                    <img src={nft.image} alt={nft.title} className="w-10 h-10 object-cover flex-shrink-0 brightness-80 group-hover:brightness-100 transition-all" style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }} />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[10px] font-mono text-[#e0f0ff] truncate">{nft.title}</h4>
                      <span className="text-[9px] font-mono text-[#7dd3fc]/30">Rank #{nft.rarity}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#ffcc00] flex-shrink-0" style={{ textShadow: "0 0 4px rgba(255,204,0,0.4)" }}>
                      {nft.price} CRO
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {/* View All link */}
            <Link
              href="/v2"
              className="flex items-center justify-center mt-3 py-2 bg-[#080812]/60 border border-[#00f0ff]/15 text-[10px] font-mono text-[#00f0ff]/50 hover:text-[#00f0ff] hover:border-[#00f0ff]/40 transition-all uppercase tracking-widest"
              style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
            >
              {">> VIEW_ALL_MARKETPLACE"}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="w-full h-[1px] bg-[#00f0ff]/20" style={{ boxShadow: "0 0 8px rgba(0,240,255,0.3)", animation: "neon-pulse 3s infinite" }} />
    </section>
  );
}

export default CyberFeaturedCol;
