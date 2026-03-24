"use client";

import { useState } from "react";
import { ArrowLeft, Heart, Share2, Send } from "lucide-react";
import Link from "next/link";
import type { NFT } from "@/data/mockNfts";
import { CyberNFTDetailTabs } from "./CyberNFTDetailTabs";
import { CyberBuyModal } from "./CyberBuyModal";

interface CyberNFTDetailContentProps {
  nft: NFT;
}

export function CyberNFTDetailContent({ nft }: CyberNFTDetailContentProps) {
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const rarityLabel = `Top ${nft.rarityPercent}%`;

  return (
    <div className="hero-section">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8">
        {/* Back Link */}
        <Link
          href="/v2"
          className="inline-flex items-center gap-2 text-xs text-[#7dd3fc]/40 hover:text-[#00f0ff] transition-colors mb-6 font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          {"< back_to_marketplace"}
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left: Image */}
          <div
            className="relative overflow-hidden cyber-border-intense group cyber-scanline"
            style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
          >
            <img
              src={nft.image}
              alt={nft.title}
              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-110"
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badge */}
            <div
              className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-black uppercase tracking-wider bg-[#ff0040] text-white`}
              style={{
                clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                boxShadow: "0 0 12px rgba(255,0,64,0.6)",
                animation: "flicker 3s infinite",
              }}
            >
              {nft.badge}
            </div>

            {/* Moving scanline beam */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div
                className="w-full h-[2px] bg-[#00f0ff]/40 shadow-[0_0_15px_rgba(0,240,255,0.6)]"
                style={{ animation: "scanline-move 2s linear infinite" }}
              />
            </div>

            {/* Bottom neon line */}
            <div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f0ff]"
              style={{ boxShadow: "0 0 15px rgba(0,240,255,0.8), 0 0 40px rgba(0,240,255,0.3)", animation: "neon-pulse 2s infinite" }}
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            {/* Title & Description */}
            <div className="mb-6">
              <h1
                className="text-2xl md:text-3xl font-bold font-mono text-[#e0f0ff] mb-2 group"
                style={{ textShadow: "0 0 10px rgba(0,240,255,0.3)" }}
              >
                {nft.title}
              </h1>
              <div
                className="block w-32 h-[2px] overflow-hidden mb-4 bg-[#00f0ff]"
                style={{ boxShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 30px rgba(0,240,255,0.4)", animation: "neon-pulse 2s infinite" }}
              />
              <p className="text-xs text-[#7dd3fc]/40 font-mono leading-relaxed">
                {nft.description}
              </p>
            </div>

            {/* Rarity */}
            <div
              className="p-4 bg-[#080812]/80 cyber-border mb-4"
              style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-[#7dd3fc]/40 uppercase tracking-widest font-mono">
                  rarity_rank
                </span>
                <span
                  className="text-sm font-bold text-[#00f0ff] font-mono"
                  style={{ textShadow: "0 0 8px rgba(0,240,255,0.5)" }}
                >
                  #{nft.rarity} / 10,000
                </span>
              </div>
              <div className="w-full h-2 bg-[#0f1a2e] overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    width: `${Math.max(2, 100 - nft.rarityPercent * 10)}%`,
                    background: "linear-gradient(90deg, #00f0ff 0%, #C026D3 100%)",
                    boxShadow: "0 0 8px rgba(0,240,255,0.6), 0 0 20px rgba(192,38,211,0.4)",
                  }}
                />
              </div>
              <span className="text-[10px] text-[#7dd3fc]/30 font-mono mt-1 block">
                {rarityLabel} — Rarer than {(100 - nft.rarityPercent).toFixed(1)}% of the collection
              </span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Owner", value: nft.owner, mono: true },
                { label: "Views", value: nft.views.toLocaleString() },
                { label: "Likes", value: nft.likes.toLocaleString() },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center p-3 bg-[#080812]/80 border border-[#00f0ff]/10"
                  style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                >
                  <span className="text-[10px] text-[#7dd3fc]/40 uppercase font-mono">
                    {stat.label}
                  </span>
                  <span className={`text-xs font-medium font-mono mt-1 text-[#e0f0ff] ${stat.mono ? "text-[10px]" : ""}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Price + Buy */}
            <div
              className="p-5 bg-[#080812]/80 cyber-border mb-4"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] text-[#7dd3fc]/40 uppercase font-mono block mb-1">
                    current_price
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#ffcc00]/20 flex items-center justify-center rotate-45">
                      <div className="w-2.5 h-2.5 bg-[#ffcc00] shadow-[0_0_6px_rgba(255,204,0,0.8)]" />
                    </div>
                    <span
                      className="text-2xl font-bold font-mono text-[#ffcc00]"
                      style={{ textShadow: "0 0 10px rgba(255,204,0,0.6)" }}
                    >
                      {nft.price}
                    </span>
                    <span className="text-xs text-[#7dd3fc]/40 font-mono">CRO</span>
                  </div>
                  <span className="text-[10px] text-[#ff6600]/60 font-mono mt-1 block">
                    +3% buyer fee
                  </span>
                </div>
              </div>

              <button
                onClick={() => setBuyModalOpen(true)}
                className="w-full py-3 bg-[#ff0040]/20 border border-[#ff0040]/60 text-sm font-bold uppercase tracking-widest font-mono text-[#ff0040] hover:bg-[#ff0040]/30 transition-all"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  boxShadow: "0 0 20px rgba(255,0,64,0.4), 0 0 60px rgba(255,0,64,0.1)",
                  animation: "neon-pulse 2s infinite",
                }}
                aria-label={`Buy ${nft.title} for ${nft.price} CRO`}
              >
                {">> EXECUTE_PURCHASE <<"}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setLiked(!liked)}
                aria-pressed={liked}
                aria-label={liked ? "Unlike this NFT" : "Like this NFT"}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 border text-xs font-mono transition-all ${
                  liked
                    ? "border-[#00f0ff]/60 bg-[#00f0ff]/10 text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                    : "border-[#00f0ff]/20 bg-[#080812]/80 text-[#7dd3fc]/40 hover:border-[#00f0ff]/40 hover:text-[#7dd3fc]"
                }`}
                style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
              >
                <Heart className={`w-4 h-4 ${liked ? "fill-[#00f0ff]" : ""}`} />
                {liked ? "LIKED" : "LIKE"}
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-[#00f0ff]/20 bg-[#080812]/80 text-[#7dd3fc]/40 text-xs font-mono hover:border-[#00f0ff]/40 hover:text-[#7dd3fc] transition-all"
                style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                aria-label={`Share ${nft.title}`}
              >
                <Share2 className="w-4 h-4" />
                SHARE
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-[#00f0ff]/20 bg-[#080812]/80 text-[#7dd3fc]/40 text-xs font-mono hover:border-[#00f0ff]/40 hover:text-[#7dd3fc] transition-all"
                style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                aria-label={`Share ${nft.title} on Telegram`}
              >
                <Send className="w-4 h-4" />
                TELEGRAM
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div
          className="w-full h-[2px] mb-8 bg-[#00f0ff]/40"
          style={{ boxShadow: "0 0 10px rgba(0,240,255,0.6), 0 0 30px rgba(0,240,255,0.2)", animation: "neon-pulse 3s infinite" }}
        />

        {/* Tabs Section */}
        <CyberNFTDetailTabs nft={nft} />
      </div>

      {/* Buy Modal */}
      <CyberBuyModal
        nft={nft}
        isOpen={buyModalOpen}
        onClose={() => setBuyModalOpen(false)}
      />
    </div>
  );
}
