"use client";

import { useInView } from "@/hooks/useInView";
import { Zap, Shield, ArrowUpRight, Send } from "lucide-react";
import React from "react";
import { mockNfts } from "@/data/mockNfts";
import { CyberNFTCard } from "@/components/marketplace-v2/CyberNFTCard";

function CyberHotDrops() {
  const { ref, inView } = useInView();

  const hotDropNfts = mockNfts.filter((n) => n.badge === "HOT DROP").slice(0, 4);

  const steps = [
    { num: "01", title: "Create & Mint", desc: "Upload your art and mint on Cronos" },
    { num: "02", title: "Build Profile", desc: "Grow your on-chain identity" },
    { num: "03", title: "Trade & Earn", desc: "Buy, sell and earn CRO rewards" },
  ];

  const fees = [
    { icon: <Zap className="w-3 h-3" />, label: "2% Trading Fee", desc: "Industry lowest" },
    { icon: <Shield className="w-3 h-3" />, label: "No Listing Fees", desc: "List for free" },
    { icon: <ArrowUpRight className="w-3 h-3" />, label: "Transparent Payouts", desc: "On-chain verified" },
  ];

  return (
    <section className="hero-section relative" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8">
        {/* Hot Drops NFT Cards */}
        {hotDropNfts.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="h-[2px] w-10 bg-[#ff0040]"
                style={{ boxShadow: "0 0 10px rgba(255,0,64,0.8), 0 0 30px rgba(255,0,64,0.4)" }}
              />
              <h2
                className="text-sm uppercase tracking-[0.3em] font-bold text-[#ff0040] font-mono cyber-glow-warm"
              >
                :: HOT_DROPS
              </h2>
              <div
                className="h-[1px] flex-grow bg-gradient-to-r from-[#ff0040]/60 to-transparent"
                style={{ boxShadow: "0 0 8px rgba(255,0,64,0.3)" }}
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hotDropNfts.map((nft, i) => (
                <div
                  key={nft.id}
                  style={{
                    border: "1px solid rgba(0,240,255,0.15)",
                    animation: "hot-drop-blink 8s ease-in-out infinite",
                    animationDelay: `${i * 2}s`,
                  }}
                >
                  <CyberNFTCard nft={nft} index={i} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* How It Works */}
          <div
            className="relative overflow-hidden bg-[#080812]/80 cyber-border p-6"
            style={{
              clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
              animation: inView ? "cyber-slide-in 0.5s ease-out both" : "none",
              opacity: inView ? undefined : 0,
            }}
          >
            <div className="absolute inset-0 cyber-scanline pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-[#00f0ff] cyber-glow mb-5">
                :: HOW_IT_WORKS
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {steps.map((step, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="w-10 h-10 mx-auto mb-2 flex items-center justify-center text-sm font-bold font-mono text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        boxShadow: "0 0 8px rgba(0,240,255,0.3)",
                      }}
                    >
                      {step.num}
                    </div>
                    <h4 className="text-[10px] font-bold font-mono text-[#e0f0ff] mb-0.5">{step.title}</h4>
                    <p className="text-[9px] text-[#7dd3fc]/30 font-mono">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00f0ff]" style={{ boxShadow: "0 0 8px rgba(0,240,255,0.6)", animation: "neon-pulse 2s infinite" }} />
          </div>

          {/* Fees + CTA */}
          <div
            className="relative overflow-hidden bg-[#080812]/80 cyber-border p-6"
            style={{
              clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
              animation: inView ? "cyber-slide-in 0.5s ease-out 0.15s both" : "none",
              opacity: inView ? undefined : 0,
            }}
          >
            <div className="absolute inset-0 cyber-scanline pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-[#ff6600] cyber-glow-orange mb-5">
                :: LOW_FEES
              </h3>
              <div className="space-y-3 mb-5">
                {fees.map((fee, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 flex-shrink-0 flex items-center justify-center text-[#ff6600] border border-[#ff6600]/30"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        boxShadow: "0 0 6px rgba(255,102,0,0.2)",
                      }}
                    >
                      {fee.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold font-mono text-[#e0f0ff]">{fee.label}</span>
                      <span className="text-[9px] text-[#7dd3fc]/30 font-mono ml-2">{fee.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Powered by Flywheel badge */}
              <div
                className="flex items-center gap-2 p-2.5 mb-4 border border-[#C026D3]/30 bg-[#C026D3]/5"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                  animation: "neon-pulse 3s infinite",
                }}
              >
                <Zap className="w-3 h-3 text-[#C026D3] flex-shrink-0" style={{ filter: "drop-shadow(0 0 4px rgba(192,38,211,0.6))" }} />
                <span className="text-[9px] font-bold font-mono text-[#C026D3] uppercase tracking-widest cyber-glow-neon-purple">
                  Powered by Flywheel Economics
                </span>
              </div>

              {/* Telegram CTA */}
              <button
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[10px] font-bold font-mono text-[#00f0ff] uppercase tracking-widest hover:bg-[#00f0ff]/20 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
              >
                <Send className="w-3 h-3" />
                JOIN_TELEGRAM
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff6600]" style={{ boxShadow: "0 0 8px rgba(255,102,0,0.6)", animation: "neon-pulse 2s infinite" }} />
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="w-full h-[1px] bg-[#00f0ff]/20" style={{ boxShadow: "0 0 8px rgba(0,240,255,0.3)", animation: "neon-pulse 3s infinite" }} />
    </section>
  );
}

export default CyberHotDrops;
