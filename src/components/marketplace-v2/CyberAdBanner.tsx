"use client";

import { Megaphone } from "lucide-react";

export function CyberAdBanner() {
  return (
    <div
      className="relative w-full h-[120px] overflow-hidden bg-[#080812]/60"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
        animation: "ad-border-rgb 4s linear infinite",
      }}
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 cyber-scanline pointer-events-none" />

      {/* RGB gradient sweep background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,0,64,0.04), rgba(0,255,100,0.04), rgba(0,120,255,0.04), rgba(255,0,64,0.04))",
          backgroundSize: "300% 100%",
          animation: "ad-bg-sweep 4s linear infinite",
        }}
      />

      {/* Scan beam — sweeps vertically with RGB gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #ff004060, #00ff6460, #0078ff60, transparent)",
            animation: "ad-scan-sweep 4s linear infinite",
          }}
        />
      </div>

      {/* Corner brackets — cycle through RGB */}
      <span
        className="absolute top-2 left-3 text-[10px] font-mono pointer-events-none"
        style={{ animation: "ad-text-rgb 4s linear infinite" }}
      >
        {"["}
      </span>
      <span
        className="absolute top-2 right-3 text-[10px] font-mono pointer-events-none"
        style={{ animation: "ad-text-rgb 4s linear infinite 1s" }}
      >
        {"]"}
      </span>
      <span
        className="absolute bottom-2 left-3 text-[10px] font-mono pointer-events-none"
        style={{ animation: "ad-text-rgb 4s linear infinite 2s" }}
      >
        {"["}
      </span>
      <span
        className="absolute bottom-2 right-3 text-[10px] font-mono pointer-events-none"
        style={{ animation: "ad-text-rgb 4s linear infinite 3s" }}
      >
        {"]"}
      </span>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
        <div className="flex items-center gap-3">
          <Megaphone
            className="w-5 h-5"
            style={{ animation: "ad-icon-rgb 4s linear infinite" }}
          />
          <span
            className="text-sm sm:text-base font-black font-mono uppercase tracking-[0.2em]"
            style={{ animation: "ad-text-glow-rgb 4s linear infinite" }}
          >
            {">> PLACE YOUR AD HERE <<"}
          </span>
          <Megaphone
            className="w-5 h-5 -scale-x-100"
            style={{ animation: "ad-icon-rgb 4s linear infinite 2s" }}
          />
        </div>
        <span className="text-[9px] sm:text-[10px] text-[#7dd3fc]/30 font-mono tracking-widest">
          {"// Promote your NFT to thousands of collectors"}
        </span>
      </div>

      {/* Top & bottom accent lines — RGB gradient */}
      <div
        className="absolute top-0 left-[14px] right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #ff004040, #00ff6440, #0078ff40, transparent)",
          backgroundSize: "200% 100%",
          animation: "ad-bg-sweep 3s linear infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-[14px] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #0078ff40, #00ff6440, #ff004040, transparent)",
          backgroundSize: "200% 100%",
          animation: "ad-bg-sweep 3s linear infinite 1.5s",
        }}
      />
    </div>
  );
}
