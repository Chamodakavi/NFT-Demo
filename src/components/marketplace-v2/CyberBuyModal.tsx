"use client";

import { useState } from "react";
import { X, AlertTriangle, Zap } from "lucide-react";
import type { NFT } from "@/data/mockNfts";

interface CyberBuyModalProps {
  nft: NFT;
  isOpen: boolean;
  onClose: () => void;
}

export function CyberBuyModal({ nft, isOpen, onClose }: CyberBuyModalProps) {
  const [status, setStatus] = useState<"idle" | "confirming" | "success">("idle");

  const basePrice = parseFloat(nft.price);
  const buyerFee = basePrice * 0.03;
  const total = basePrice + buyerFee;

  const handleConfirm = () => {
    setStatus("confirming");
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  const handleClose = () => {
    setStatus("idle");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cyber-buy-modal-title"
    >
      {/* Backdrop with scanline */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm cyber-scanline"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-[#080812] cyber-border-intense overflow-hidden"
        style={{
          clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
          animation: "cyber-slide-in 0.3s ease-out",
        }}
      >
        {/* Top neon line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] bg-[#00f0ff]"
          style={{ boxShadow: "0 0 15px rgba(0,240,255,0.8), 0 0 40px rgba(0,240,255,0.3)", animation: "neon-pulse 2s infinite" }}
        />

        {/* Scanline overlay */}
        <div className="absolute inset-0 cyber-scanline pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-5 border-b border-[#00f0ff]/20">
          <h3
            id="cyber-buy-modal-title"
            className="text-sm font-bold font-mono uppercase tracking-widest text-[#00f0ff] cyber-glow"
          >
            {status === "success" ? "[ACQUISITION_COMPLETE]" : "[CONFIRM_PURCHASE]"}
          </h3>
          <button
            onClick={handleClose}
            className="text-[#00f0ff]/50 hover:text-[#00f0ff] transition-colors"
            aria-label="Close purchase dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 p-5">
          {status === "success" ? (
            <div className="text-center py-6">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[#00f0ff]/60"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  boxShadow: "0 0 20px rgba(0,240,255,0.5), inset 0 0 20px rgba(0,240,255,0.2)",
                }}
              >
                <span className="text-[#00f0ff] text-2xl font-mono font-bold cyber-glow">OK</span>
              </div>
              <h4
                className="text-xl font-bold font-mono text-[#00f0ff] mb-2"
                style={{ animation: "glitch-text 2s infinite", textShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 40px rgba(0,240,255,0.3)" }}
              >
                ACQUIRED
              </h4>
              <p className="text-xs text-[#7dd3fc]/50 font-mono mb-2">
                {nft.title} has been added to your vault.
              </p>
              <p className="text-[10px] text-[#C026D3]/50 font-mono mb-4">
                {"// Flywheel activated. Your contribution strengthens the ecosystem."}
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-[#00f0ff]/20 border border-[#00f0ff]/60 text-sm font-bold font-mono text-[#00f0ff] hover:bg-[#00f0ff]/30 transition-all"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  boxShadow: "0 0 15px rgba(0,240,255,0.4)",
                }}
              >
                CLOSE
              </button>
            </div>
          ) : (
            <>
              {/* NFT Preview */}
              <div
                className="flex items-center gap-4 mb-5 p-3 bg-[#080812]/80 border border-[#00f0ff]/20"
                style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
              >
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-16 h-16 object-cover cyber-scanline"
                  style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                />
                <div>
                  <h4 className="text-sm font-bold font-mono text-[#e0f0ff]">{nft.title}</h4>
                  <p className="text-[10px] text-[#7dd3fc]/40 font-mono">
                    Rank #{nft.rarity} / 10,000
                  </p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-5 font-mono">
                <div className="flex justify-between text-sm">
                  <span className="text-[#7dd3fc]/50 text-xs">base_price</span>
                  <span className="text-[#e0f0ff] text-xs">{basePrice.toFixed(2)} CRO</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#7dd3fc]/50 text-xs">buyer_fee (3%)</span>
                  <span className="text-[#e0f0ff] text-xs">{buyerFee.toFixed(4)} CRO</span>
                </div>
                <div className="h-[1px] bg-[#00f0ff]/20" />
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-[#e0f0ff]">TOTAL</span>
                  <span
                    className="text-lg font-bold text-[#ffcc00] font-mono"
                    style={{ textShadow: "0 0 10px rgba(255,204,0,0.6)" }}
                  >
                    {total.toFixed(4)} CRO
                  </span>
                </div>
              </div>

              {/* Fee Transparency Note */}
              <div
                className="flex items-start gap-2 p-3 bg-[#ff6600]/5 border border-[#ff6600]/20 mb-5"
                style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
              >
                <AlertTriangle className="w-4 h-4 text-[#ff6600] mt-0.5 flex-shrink-0" style={{ filter: "drop-shadow(0 0 4px rgba(255,102,0,0.6))" }} />
                <p className="text-[10px] text-[#ff6600]/70 font-mono">
                  3% buyer fee supports the platform. 6% total platform take is
                  routed to treasury for liquidity and $HUB buybacks.
                </p>
              </div>

              {/* Flywheel Message */}
              <div
                className="flex items-start gap-2 p-3 bg-[#C026D3]/5 border border-[#C026D3]/20 mb-5"
                style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
              >
                <Zap className="w-4 h-4 text-[#C026D3] mt-0.5 flex-shrink-0" style={{ filter: "drop-shadow(0 0 4px rgba(192,38,211,0.6))" }} />
                <p className="text-[10px] text-[#C026D3]/70 font-mono">
                  Your fee directly fuels the Flywheel — view details in the Flywheel tab.
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleClose}
                  className="flex-1 px-4 py-2.5 bg-[#0f1a2e]/50 border border-[#00f0ff]/20 text-sm font-mono text-[#7dd3fc]/50 hover:border-[#00f0ff]/40 hover:text-[#7dd3fc] transition-all"
                  style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                >
                  CANCEL
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={status === "confirming"}
                  className="flex-1 px-4 py-2.5 bg-[#ff0040]/20 border border-[#ff0040]/60 text-sm font-bold font-mono text-[#ff0040] hover:bg-[#ff0040]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                    boxShadow: "0 0 15px rgba(255,0,64,0.4)",
                    animation: status !== "confirming" ? "neon-pulse 2s infinite" : undefined,
                  }}
                >
                  {status === "confirming" ? (
                    <span className="flex items-center justify-center gap-2">
                      <div
                        className="w-4 h-4 border-2 border-[#ff0040]/30 border-t-[#ff0040] rounded-full animate-spin"
                        style={{ filter: "drop-shadow(0 0 4px rgba(255,0,64,0.6))" }}
                      />
                      CONFIRMING...
                    </span>
                  ) : (
                    "EXECUTE"
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Bottom neon line */}
        <div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f0ff]"
          style={{ boxShadow: "0 0 15px rgba(0,240,255,0.8), 0 0 40px rgba(0,240,255,0.3)", animation: "neon-pulse 2s infinite" }}
        />
      </div>
    </div>
  );
}
