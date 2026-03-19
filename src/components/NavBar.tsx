"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Explore", "Features", "How It Works", "Community"];

  return (
    <nav className="w-full relative z-50 mt-5">
      {/* The Background Layer: Glossy, Dark, and Blurry */}
      <div className="absolute inset-0 bg-[#03070c]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        {/* Top Glossy Highlight (The "Inner Glow") */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent " />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-blue-600 rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-110">
            {/* Replace with your actual SVG logo */}
            <div className="-rotate-45 font-bold text-white text-[10px]">C</div>
          </div>
          <span className="text-md lg:text-3xl font-bold tracking-[0.1em] text-white">
            CRO212HUB
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                className="flex items-center gap-1.5 text-[12px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-all duration-300"
              >
                {item}
                <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
            ))}
          </div>

          {/* Action Buttons Group (The Pill Container) */}
          <div className="flex items-center p-1 bg-white/5 border border-[#114180] rounded-xl shadow-inner">
            <button className="px-6 py-2 text-[11px] uppercase tracking-tighter font-bold text-white  hover:bg-white/20 rounded-full transition-all">
              Explore
            </button>
            <button className="px-6 py-2 text-[11px] uppercase tracking-tighter font-bold text-gray-400 hover:text-white transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 w-full h-full bg-black/90 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-8 right-6 text-white hover:rotate-90 transition-transform duration-300"
          onClick={() => setMenuOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Nav links */}
        {navItems.map((item, i) => (
          <button
            key={item}
            className={`text-[18px] font-semibold text-white hover:text-brand-gold transition-all duration-300 ${
              menuOpen ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: menuOpen ? `${i * 0.08}s` : "0s" }}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </button>
        ))}

        {/* Action buttons */}
        <div
          className={`flex flex-col gap-3 mt-4 w-48 ${menuOpen ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: menuOpen ? "0.35s" : "0s" }}
        >
          <button className="bg-brand-dark shadow-inset-blue rounded-[5px] px-4 py-2 text-[13px] font-semibold hover:brightness-110 transition-all text-center">
            Explore
          </button>
          <button className="bg-brand-dark shadow-inset-blue rounded-[5px] px-4 py-2 text-[13px] font-semibold hover:brightness-110 transition-all text-center">
            Contact Wallet
          </button>
        </div>
      </div>

      {/* Thin Red Animated Line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
        <div className="h-full  bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-grow-width " />
      </div>
    </nav>
  );
}
