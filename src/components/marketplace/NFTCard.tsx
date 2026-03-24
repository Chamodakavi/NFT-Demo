import Link from "next/link";
import type { NFT } from "@/data/mockNfts";

interface NFTCardProps {
  nft: NFT;
}

export function NFTCard({ nft }: NFTCardProps) {
  const rarityLabel =
    nft.rarityPercent < 1
      ? `Top ${nft.rarityPercent}%`
      : nft.rarityPercent < 5
        ? `Top ${nft.rarityPercent}%`
        : `${nft.rarityPercent}%`;

  const rarityBarColor =
    nft.rarityPercent < 1
      ? "bg-red-500"
      : nft.rarityPercent < 3
        ? "bg-orange-500"
        : nft.rarityPercent < 5
          ? "bg-yellow-500"
          : "bg-blue-500";

  return (
    <Link href={`/marketplace/${nft.id}`} className="group cursor-pointer block">
      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={nft.image}
            alt={nft.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Badge */}
          <div
            className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-black uppercase ${nft.badgeColor}`}
          >
            {nft.badge}
          </div>
          {/* Dark gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Info Section */}
        <div className="p-3 space-y-2">
          {/* Title */}
          <h3 className="text-sm font-bold truncate">{nft.title}</h3>

          {/* Rarity Bar */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                Rarity
              </span>
              <span className="text-[10px] font-bold text-gray-300">
                {rarityLabel}
              </span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full ${rarityBarColor} rounded-full transition-all duration-500`}
                style={{
                  width: `${Math.max(5, 100 - nft.rarityPercent * 10)}%`,
                }}
              />
            </div>
          </div>

          {/* Price + Buy */}
          <div className="flex items-center justify-between pt-1 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-500 rotate-45" />
              </div>
              <span className="font-bold text-sm">
                {nft.price}{" "}
                <span className="text-[10px] text-gray-400">CRO</span>
              </span>
            </div>
            <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider group-hover:text-red-400 transition-colors">
              View
            </span>
          </div>
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
}
