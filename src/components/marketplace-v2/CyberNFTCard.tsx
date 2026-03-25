import Link from "next/link";
import type { NFT } from "@/data/mockNfts";

interface CyberNFTCardProps {
  nft: NFT;
  index?: number;
}

export function CyberNFTCard({ nft, index = 0 }: CyberNFTCardProps) {
  const rarityLabel =
    nft.rarityPercent < 1
      ? `Top ${nft.rarityPercent}%`
      : `${nft.rarityPercent}%`;

  const badgeColorMap: Record<string, string> = {
    "bg-red-600": "bg-[#ff0040] shadow-[0_0_12px_rgba(255,0,64,0.6)]",
    "bg-green-600": "bg-[#ff6600] shadow-[0_0_12px_rgba(255,102,0,0.6)]",
    "bg-purple-600": "bg-[#cc0033] shadow-[0_0_12px_rgba(204,0,51,0.6)]",
    "bg-yellow-600": "bg-[#ffcc00] shadow-[0_0_12px_rgba(255,204,0,0.6)] text-black",
  };

  return (
    <Link
      href={`/marketplace/${nft.id}`}
      className="group cursor-pointer block"
      style={{ animation: `cyber-slide-in 0.5s ease-out ${index * 0.07}s both` }}
    >
      <div className="relative cyber-clip bg-[#080812]/90 cyber-border overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5),0_0_80px_rgba(0,240,255,0.15)] hover:border-[#00f0ff]/70">
        {/* Scanline overlay on image */}
        <div className="relative aspect-square overflow-hidden cyber-scanline">
          <img
            src={nft.image}
            alt={nft.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-110"
          />
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge with neon glow */}
          <div
            className={`absolute top-2 left-2 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${badgeColorMap[nft.badgeColor] || nft.badgeColor}`}
            style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))", animation: "flicker 3s infinite" }}
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
        </div>

        {/* Info Section */}
        <div className="p-3 space-y-2 relative z-10">
          {/* Title */}
          <h3 className="text-sm font-bold truncate text-[#e0f0ff] group-hover:cyber-glow transition-all font-mono">
            {nft.title}
          </h3>

          {/* Rarity Bar */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-[#7dd3fc]/60 uppercase tracking-widest font-mono">
                Rarity
              </span>
              <span className="text-[10px] font-bold text-[#7dd3fc] font-mono">
                {rarityLabel}
              </span>
            </div>
            <div className="w-full h-1 bg-[#0f1a2e] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.max(5, 100 - nft.rarityPercent * 10)}%`,
                  background: "linear-gradient(90deg, #00f0ff 0%, #C026D3 100%)",
                  boxShadow: "0 0 8px rgba(0,240,255,0.6), 0 0 16px rgba(192,38,211,0.3)",
                }}
              />
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-1.5 border-t border-[#00f0ff]/20">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#ffcc00]/20 rounded-sm flex items-center justify-center rotate-45">
                <div className="w-2 h-2 bg-[#ffcc00] shadow-[0_0_6px_rgba(255,204,0,0.8)]" />
              </div>
              <span className="font-bold text-sm font-mono text-[#ffcc00]" style={{ textShadow: "0 0 8px rgba(255,204,0,0.5)" }}>
                {nft.price}{" "}
                <span className="text-[10px] text-[#7dd3fc]/50">CRO</span>
              </span>
            </div>
            <span className="text-[10px] text-[#00f0ff] font-bold uppercase tracking-widest font-mono group-hover:animate-pulse">
              {">>"}
            </span>
          </div>
        </div>

        {/* Bottom neon line */}
        <div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f0ff]"
          style={{
            boxShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 30px rgba(0,240,255,0.4)",
            animation: "neon-pulse 2s infinite",
          }}
        />
      </div>
    </Link>
  );
}
