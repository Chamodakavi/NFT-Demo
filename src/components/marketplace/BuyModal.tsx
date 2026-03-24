"use client";

import { useState } from "react";
import { X, Check, AlertTriangle } from "lucide-react";
import type { NFT } from "@/data/mockNfts";

interface BuyModalProps {
  nft: NFT;
  isOpen: boolean;
  onClose: () => void;
}

export function BuyModal({ nft, isOpen, onClose }: BuyModalProps) {
  const [status, setStatus] = useState<"idle" | "confirming" | "success">(
    "idle",
  );

  const basePrice = parseFloat(nft.price);
  const buyerFee = basePrice * 0.03;
  const total = basePrice + buyerFee;

  const handleConfirm = () => {
    setStatus("confirming");
    // Simulate transaction
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
      aria-labelledby="buy-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#0a0c10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Top glow */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <h3 id="buy-modal-title" className="text-lg font-bold">
            {status === "success" ? "Purchase Complete" : "Confirm Purchase"}
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Close purchase dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-600/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-xl font-bold mb-2">NFT Acquired!</h4>
              <p className="text-sm text-gray-400 mb-4">
                {nft.title} has been added to your vault.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-red-700 rounded-lg text-sm font-bold hover:bg-red-600 transition-colors shadow-[0px_6px_4px_0px_rgba(0,0,0,0.5),0px_8px_16px_0px_rgba(179,9,4,0.6)]"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* NFT Preview */}
              <div className="flex items-center gap-4 mb-5 p-3 bg-black/40 border border-white/5 rounded-lg">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold">{nft.title}</h4>
                  <p className="text-xs text-gray-500">
                    Rank #{nft.rarity} / 10,000
                  </p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Base Price</span>
                  <span className="font-medium">
                    {basePrice.toFixed(2)} CRO
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Buyer Fee (3%)</span>
                  <span className="font-medium">
                    {buyerFee.toFixed(4)} CRO
                  </span>
                </div>
                <div className="h-[1px] bg-white/10" />
                <div className="flex justify-between text-base font-bold">
                  <span>Total</span>
                  <span className="text-red-500">{total.toFixed(4)} CRO</span>
                </div>
              </div>

              {/* Fee Transparency Note */}
              <div className="flex items-start gap-2 p-3 bg-yellow-600/10 border border-yellow-600/20 rounded-lg mb-5">
                <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <p className="text-[11px] text-yellow-200/70">
                  3% buyer fee supports the platform. 6% total platform take is
                  routed to treasury for liquidity and $HUB buybacks.
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleClose}
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={status === "confirming"}
                  className="flex-1 px-4 py-2.5 bg-red-700 rounded-lg text-sm font-bold hover:bg-red-600 transition-colors shadow-[0px_6px_4px_0px_rgba(0,0,0,0.5),0px_8px_16px_0px_rgba(179,9,4,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "confirming" ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Confirming...
                    </span>
                  ) : (
                    "Confirm Purchase"
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-red-600/10 blur-[40px] pointer-events-none" />
      </div>
    </div>
  );
}
