"use client";

import React from "react";
import Link from "next/link";

function CyberHero() {
  const stats = [
    { value: "12.5K+", label: "Drops" },
    { value: "275K+", label: "NFTs" },
    { value: "98.2K+", label: "Creators" },
    { value: "45M+", label: "Volume" },
  ];

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Ambient cyan glow behind hero */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,240,255,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left: Content (3 cols) */}
          <div className="lg:col-span-3">
            <p className="text-[10px] text-[#7dd3fc]/40 font-mono uppercase tracking-[0.3em] mb-3">
              {"// CRO212HUB NFT Platform"}
            </p>
            <h1
              className="text-3xl md:text-5xl font-bold font-mono text-[#e0f0ff] leading-tight"
              style={{ animation: "glitch-text 4s infinite" }}
            >
              Own the Future on{" "}
              <span
                className="text-[#00f0ff] cyber-glow"
                style={{ textShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 40px rgba(0,240,255,0.3), 0 0 80px rgba(0,240,255,0.1)" }}
              >
                Cronos
              </span>
            </h1>

            {/* Neon line */}
            <div
              className="w-32 h-[2px] mt-3 mb-4 bg-[#00f0ff]"
              style={{
                boxShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 30px rgba(0,240,255,0.4)",
                animation: "neon-pulse 2s infinite",
              }}
            />

            <p className="text-sm text-[#7dd3fc]/50 font-mono leading-relaxed max-w-lg">
              Discover, collect and trade the rarest digital assets on the Cronos blockchain.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                className="px-7 py-2.5 bg-[#00f0ff]/15 border border-[#00f0ff]/60 text-xs font-bold font-mono uppercase tracking-[0.15em] text-[#00f0ff] hover:bg-[#00f0ff]/25 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  boxShadow: "0 0 12px rgba(0,240,255,0.3)",
                  animation: "cyber-slide-in 0.5s ease-out 0.2s both",
                }}
              >
                {">> MINT_NOW"}
              </button>
              <Link
                href="/marketplace"
                className="block px-7 py-2.5 bg-[#080812]/80 border border-[#00f0ff]/20 text-xs font-bold font-mono uppercase tracking-[0.15em] text-[#7dd3fc]/50 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 transition-all text-center"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  animation: "cyber-slide-in 0.5s ease-out 0.3s both",
                }}
              >
                EXPLORE_MARKETPLACE
              </Link>
            </div>
          </div>

          {/* Right: Image (2 cols) */}
          <div className="hidden lg:flex lg:col-span-2 justify-center items-center">
            <div
              className="relative w-full max-w-[320px] group overflow-hidden cyber-border-intense"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
            >
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff]/50 z-20" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff]/50 z-20" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#00f0ff]/50 z-20" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#00f0ff]/50 z-20" />

              <div className="relative cyber-scanline">
                <img
                  src="/images/transformer.png"
                  className="w-full object-contain brightness-90 group-hover:brightness-110 transition-all duration-500 group-hover:scale-105"
                  alt="CRO212HUB"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Eye glow overlay — main glow */}
                <div
                  className="absolute pointer-events-none z-10"
                  style={{
                    top: "29%",
                    left: "15%",
                    width: "55%",
                    height: "8%",
                    background: "radial-gradient(ellipse at center, rgba(0,240,255,0.5) 0%, rgba(0,240,255,0.15) 40%, transparent 70%)",
                    mixBlendMode: "screen",
                    animation: "eye-glow-pulse 2.5s ease-in-out infinite",
                  }}
                />
                {/* Eye glow overlay — inner intensity */}
                <div
                  className="absolute pointer-events-none z-10"
                  style={{
                    top: "30%",
                    left: "22%",
                    width: "35%",
                    height: "5%",
                    background: "radial-gradient(ellipse at center, rgba(0,240,255,0.8) 0%, rgba(0,240,255,0.2) 50%, transparent 80%)",
                    mixBlendMode: "screen",
                    animation: "eye-glow-pulse 2.5s ease-in-out infinite",
                  }}
                />
                {/* Eye scan-line flicker */}
                <div
                  className="absolute pointer-events-none z-10 overflow-hidden"
                  style={{
                    top: "30%",
                    left: "15%",
                    width: "55%",
                    height: "6%",
                  }}
                >
                  <div
                    className="w-8 h-[2px]"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(0,240,255,0.9), transparent)",
                      boxShadow: "0 0 8px rgba(0,240,255,0.6)",
                      animation: "eye-scan 3s linear infinite",
                    }}
                  />
                </div>

                {/* Holographic floating particles */}
                {[
                  { top: "15%", left: "10%", size: 3, color: "#00f0ff", delay: "0s", dur: "4s" },
                  { top: "25%", left: "80%", size: 2, color: "#C026D3", delay: "0.5s", dur: "3.5s" },
                  { top: "40%", left: "20%", size: 2, color: "#ffcc00", delay: "1s", dur: "5s" },
                  { top: "60%", left: "75%", size: 3, color: "#00f0ff", delay: "0.3s", dur: "4.5s" },
                  { top: "70%", left: "35%", size: 2, color: "#C026D3", delay: "1.5s", dur: "3s" },
                  { top: "20%", left: "60%", size: 2, color: "#00f0ff", delay: "0.8s", dur: "4s" },
                  { top: "50%", left: "50%", size: 3, color: "#ffcc00", delay: "2s", dur: "3.5s" },
                  { top: "35%", left: "90%", size: 2, color: "#C026D3", delay: "1.2s", dur: "5s" },
                  { top: "80%", left: "15%", size: 2, color: "#00f0ff", delay: "0.6s", dur: "4.5s" },
                  { top: "10%", left: "45%", size: 3, color: "#C026D3", delay: "1.8s", dur: "3s" },
                  { top: "55%", left: "65%", size: 2, color: "#ffcc00", delay: "0.4s", dur: "4s" },
                  { top: "45%", left: "5%", size: 2, color: "#00f0ff", delay: "2.5s", dur: "3.5s" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full pointer-events-none z-10"
                    style={{
                      top: p.top,
                      left: p.left,
                      width: p.size,
                      height: p.size,
                      backgroundColor: p.color,
                      boxShadow: `0 0 6px ${p.color}, 0 0 12px ${p.color}80`,
                      opacity: 0.6,
                      animation: `eye-glow-pulse ${p.dur} ease-in-out ${p.delay} infinite`,
                    }}
                  />
                ))}

                {/* Scanline beam */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-[2px] bg-[#00f0ff]/40 shadow-[0_0_15px_rgba(0,240,255,0.6)]" style={{ animation: "scanline-move 2s linear infinite" }} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f0ff] z-10" style={{ boxShadow: "0 0 15px rgba(0,240,255,0.8), 0 0 40px rgba(0,240,255,0.3)", animation: "neon-pulse 2s infinite" }} />
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center gap-2 py-3 px-4 bg-[#080812]/80 cyber-border overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              style={{
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                animation: `cyber-slide-in 0.4s ease-out ${0.3 + i * 0.08}s both`,
              }}
            >
              <span className="text-base md:text-xl font-bold text-[#e0f0ff] font-mono" style={{ textShadow: "0 0 8px rgba(0,240,255,0.3)" }}>
                {stat.value}
              </span>
              <span className="text-[9px] text-[#7dd3fc]/40 uppercase tracking-widest font-mono">
                {stat.label}
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00f0ff]" style={{ boxShadow: "0 0 10px rgba(0,240,255,0.6)", animation: "neon-pulse 3s infinite" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="w-full h-[1px] bg-[#00f0ff]/20" style={{ boxShadow: "0 0 8px rgba(0,240,255,0.3)", animation: "neon-pulse 3s infinite" }} />
    </section>
  );
}

export default CyberHero;
