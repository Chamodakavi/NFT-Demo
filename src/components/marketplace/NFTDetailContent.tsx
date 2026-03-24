"use client";

import { useState } from "react";
import { ArrowLeft, Heart, Share2, Eye, Send } from "lucide-react";
import Link from "next/link";
import type { NFT } from "@/data/mockNfts";
import { NFTDetailTabs } from "./NFTDetailTabs";
import { BuyModal } from "./BuyModal";

interface NFTDetailContentProps {
  nft: NFT;
}

export function NFTDetailContent({ nft }: NFTDetailContentProps) {
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const rarityLabel =
    nft.rarityPercent < 1
      ? `Top ${nft.rarityPercent}%`
      : `Top ${nft.rarityPercent}%`;

  return (
    <div className="hero-section">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8">
        {/* Back Link */}
        <Link
          href="/marketplace"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Marketplace
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 group">
            <img
              src={nft.image}
              alt={nft.title}
              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Badge */}
            <div
              className={`absolute top-4 left-4 px-3 py-1 rounded text-[10px] font-black uppercase ${nft.badgeColor}`}
            >
              {nft.badge}
            </div>
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            {/* Title & Description */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {nft.title}
              </h1>
              <div className="block w-32 h-[2px] overflow-hidden mb-4">
                <div className="h-full bg-gradient-to-r from-red-600 via-red-500/50 to-transparent animate-grow-width" />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {nft.description}
              </p>
            </div>

            {/* Rarity */}
            <div className="p-4 bg-black/40 border border-white/10 rounded-xl mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Rarity Rank
                </span>
                <span className="text-sm font-bold text-red-500">
                  #{nft.rarity} / 10,000
                </span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
                  style={{
                    width: `${Math.max(2, 100 - nft.rarityPercent * 10)}%`,
                  }}
                />
              </div>
              <span className="text-[10px] text-gray-500 mt-1 block">
                {rarityLabel} — Rarer than{" "}
                {(100 - nft.rarityPercent).toFixed(1)}% of the collection
              </span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="flex flex-col items-center p-3 bg-black/30 border border-white/5 rounded-lg">
                <span className="text-[10px] text-gray-500 uppercase">
                  Owner
                </span>
                <span className="text-xs font-medium font-mono mt-1">
                  {nft.owner}
                </span>
              </div>
              <div className="flex flex-col items-center p-3 bg-black/30 border border-white/5 rounded-lg">
                <span className="text-[10px] text-gray-500 uppercase">
                  Views
                </span>
                <span className="text-sm font-bold mt-1">
                  {nft.views.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-col items-center p-3 bg-black/30 border border-white/5 rounded-lg">
                <span className="text-[10px] text-gray-500 uppercase">
                  Likes
                </span>
                <span className="text-sm font-bold mt-1">
                  {nft.likes.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Price + Buy */}
            <div className="p-5 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 rounded-xl mb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block mb-1">
                    Current Price
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-yellow-500 rotate-45" />
                    </div>
                    <span className="text-2xl font-bold">{nft.price}</span>
                    <span className="text-sm text-gray-400">CRO</span>
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1 block">
                    +3% buyer fee
                  </span>
                </div>
              </div>

              <button
                onClick={() => setBuyModalOpen(true)}
                className="w-full py-3 bg-red-700 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-red-600 hover:scale-[1.02] transition-all shadow-[0px_6px_4px_0px_rgba(0,0,0,0.5),0px_8px_16px_0px_rgba(179,9,4,0.6)]"
                aria-label={`Buy ${nft.title} for ${nft.price} CRO`}
              >
                Buy Now
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setLiked(!liked)}
                aria-pressed={liked}
                aria-label={liked ? "Unlike this NFT" : "Like this NFT"}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                  liked
                    ? "border-red-600/50 bg-red-600/10 text-red-400"
                    : "border-white/10 bg-black/30 text-gray-400 hover:bg-white/5"
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${liked ? "fill-red-500" : ""}`}
                />
                {liked ? "Liked" : "Like"}
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 bg-black/30 text-gray-400 text-sm font-medium hover:bg-white/5 transition-all"
                aria-label={`Share ${nft.title}`}
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 bg-black/30 text-gray-400 text-sm font-medium hover:bg-white/5 transition-all"
                aria-label={`Share ${nft.title} on Telegram`}
              >
                <Send className="w-4 h-4" />
                Telegram
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent mb-8 opacity-50" />

        {/* Tabs Section */}
        <NFTDetailTabs nft={nft} />
      </div>

      {/* Buy Modal */}
      <BuyModal
        nft={nft}
        isOpen={buyModalOpen}
        onClose={() => setBuyModalOpen(false)}
      />
    </div>
  );
}
