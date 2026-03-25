"use client";

import { ChevronDown, Menu, X, Search, ShoppingCart, User, Zap } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { mockNfts } from "@/data/mockNfts";
import type { NFT } from "@/data/mockNfts";

export function CyberNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<NFT[]>([]);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartCount] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const q = query.toLowerCase();
    const results = mockNfts
      .filter(
        (nft) =>
          nft.id.toLowerCase().includes(q) ||
          nft.title.toLowerCase().includes(q) ||
          nft.traits.some(
            (t) =>
              t.name.toLowerCase().includes(q) ||
              t.value.toLowerCase().includes(q)
          )
      )
      .slice(0, 5);
    setSearchResults(results);
  };

  const navItems = [
    { label: "Explore", href: "/" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Features", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "Community", href: "#" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setSearchResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <nav className="w-full relative z-50 mt-5" role="navigation" aria-label="Main navigation">
      {/* Background: Deep dark with neon border */}
      <div
        className="absolute inset-0 bg-[#080812]/95 backdrop-blur-xl border border-[#00f0ff]/30 overflow-hidden"
        style={{
          clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
          boxShadow: "0 0 20px rgba(0,240,255,0.15), inset 0 0 20px rgba(0,240,255,0.05)",
        }}
      >
        {/* Scanline overlay */}
        <div className="absolute inset-0 cyber-scanline pointer-events-none" />
        {/* Top neon accent line */}
        <div
          className="absolute inset-x-0 top-0 h-[1px] bg-[#00f0ff]"
          style={{ boxShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 30px rgba(0,240,255,0.3)" }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer" aria-label="CRO212HUB Home">
          <div
            className="w-8 h-8 bg-[#00f0ff]/20 border border-[#00f0ff]/60 rotate-45 flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
            style={{ boxShadow: "0 0 12px rgba(0,240,255,0.4)" }}
          >
            <div className="-rotate-45 font-bold text-[#00f0ff] text-[10px] font-mono cyber-glow">C</div>
          </div>
          <span
            className="text-md lg:text-2xl font-bold tracking-[0.15em] text-[#e0f0ff] font-mono"
            style={{ textShadow: "0 0 10px rgba(0,240,255,0.3)" }}
          >
            CRO212
            <span className="text-[#00f0ff] cyber-glow">HUB</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative" ref={searchContainerRef}>
            <div
              className={`flex items-center transition-all duration-300 overflow-hidden ${
                searchOpen
                  ? "w-[220px] bg-[#080812]/80 border border-[#00f0ff]/30"
                  : "w-8"
              }`}
              style={searchOpen ? { clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" } : undefined}
            >
              <button
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  if (searchOpen) {
                    setSearchQuery("");
                    setSearchResults([]);
                  }
                }}
                className="flex-shrink-0 p-2 text-[#7dd3fc]/40 hover:text-[#00f0ff] transition-colors"
                aria-label={searchOpen ? "Close search" : "Open search"}
                aria-expanded={searchOpen}
              >
                {searchOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
              </button>
              {searchOpen && (
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search NFT ID or traits..."
                  className="bg-transparent text-xs text-[#e0f0ff] placeholder:text-[#7dd3fc]/20 outline-none pr-3 w-full font-mono"
                  aria-label="Search NFTs by ID or traits"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setSearchOpen(false);
                      setSearchQuery("");
                      setSearchResults([]);
                    }
                  }}
                />
              )}
            </div>

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div
                className="absolute top-full mt-2 left-0 w-[280px] bg-[#080812] border border-[#00f0ff]/30 shadow-[0_0_20px_rgba(0,240,255,0.2)] overflow-hidden z-50"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
              >
                <div className="absolute inset-0 cyber-scanline pointer-events-none" />
                <div className="relative z-10">
                  {searchResults.map((nft) => (
                    <Link
                      key={nft.id}
                      href={`/marketplace/${nft.id}`}
                      className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#00f0ff]/10 transition-colors border-b border-[#00f0ff]/10 last:border-b-0"
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                        setSearchResults([]);
                      }}
                    >
                      <img
                        src={nft.image}
                        alt={nft.title}
                        className="w-8 h-8 object-cover flex-shrink-0"
                        style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-mono text-[#e0f0ff] truncate">{nft.title}</p>
                        <p className="text-[9px] font-mono text-[#7dd3fc]/40">
                          #{nft.id} · Rank {nft.rarity}
                        </p>
                      </div>
                      <span
                        className="text-[10px] font-bold font-mono text-[#ffcc00] flex-shrink-0"
                        style={{ textShadow: "0 0 6px rgba(255,204,0,0.4)" }}
                      >
                        {nft.price} CRO
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) =>
              item.href !== "#" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-[#7dd3fc]/50 hover:text-[#00f0ff] hover:cyber-glow transition-all duration-300 font-mono"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-[#7dd3fc]/50 hover:text-[#00f0ff] transition-all duration-300 font-mono"
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </button>
              ),
            )}
          </div>

          {/* Action Buttons */}
          <div
            className="flex items-center p-1 bg-[#080812]/60 border border-[#00f0ff]/20"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
          >
            <button
              className="px-5 py-2 text-[10px] uppercase tracking-widest font-bold text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all font-mono"
              style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
            >
              Explore
            </button>
            <button
              className="flex items-center gap-1.5 px-5 py-2 text-[10px] uppercase tracking-widest font-bold text-[#C026D3] hover:text-[#C026D3]/80 hover:bg-[#C026D3]/10 transition-all font-mono"
              style={{ textShadow: "0 0 6px rgba(192,38,211,0.4)" }}
            >
              <Zap className="w-3 h-3" style={{ filter: "drop-shadow(0 0 4px rgba(192,38,211,0.6))" }} />
              Connect
            </button>
          </div>

          {/* Cart Icon */}
          <button
            className="relative text-[#7dd3fc]/40 hover:text-[#00f0ff] transition-colors p-2"
            aria-label={`Shopping cart${cartCount > 0 ? `, ${cartCount} items` : ", empty"}`}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#00f0ff] text-[9px] font-bold flex items-center justify-center font-mono"
                style={{ boxShadow: "0 0 8px rgba(0,240,255,0.8)" }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* User Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-1.5 text-[#7dd3fc]/40 hover:text-[#00f0ff] transition-colors p-2"
              aria-label="User profile menu"
              aria-expanded={profileOpen}
              aria-haspopup="true"
            >
              <div
                className="w-7 h-7 bg-[#080812] border border-[#00f0ff]/40 flex items-center justify-center"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  boxShadow: "0 0 8px rgba(0,240,255,0.3)",
                }}
              >
                <User className="w-3.5 h-3.5" />
              </div>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {profileOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-52 bg-[#080812] border border-[#00f0ff]/30 shadow-[0_0_20px_rgba(0,240,255,0.2)] overflow-hidden"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                role="menu"
                aria-label="User profile options"
              >
                <div className="absolute inset-0 cyber-scanline pointer-events-none" />
                <div className="relative z-10">
                  <div className="px-4 py-3 border-b border-[#00f0ff]/10">
                    <p className="text-[10px] text-[#7dd3fc]/30 font-mono">// STATUS</p>
                    <p className="text-xs font-mono text-[#7dd3fc]/50 truncate">
                      Not connected
                    </p>
                  </div>
                  {["My Collection", "My Vault", "Settings"].map((label) => (
                    <button
                      key={label}
                      className="w-full text-left px-4 py-2.5 text-xs text-[#7dd3fc]/50 hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] transition-colors font-mono"
                      role="menuitem"
                    >
                      {`> ${label}`}
                    </button>
                  ))}
                  <div className="border-t border-[#00f0ff]/10">
                    <button
                      className="w-full text-left px-4 py-2.5 text-xs text-[#00f0ff]/50 hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] transition-colors font-mono"
                      role="menuitem"
                    >
                      {"x DISCONNECT"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-[#00f0ff]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 w-full h-full bg-[#080812]/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Scanline overlay */}
        <div className="absolute inset-0 cyber-scanline pointer-events-none" />

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#00f0ff]/40" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#00f0ff]/40" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#00f0ff]/40" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#00f0ff]/40" />

        {/* Close button */}
        <button
          className="absolute top-8 right-6 text-[#00f0ff] hover:rotate-90 transition-transform duration-300"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" style={{ filter: "drop-shadow(0 0 4px rgba(0,240,255,0.6))" }} />
        </button>

        {/* Mobile Search */}
        <div className="w-64 relative z-10">
          <div
            className="flex items-center bg-[#080812]/80 border border-[#00f0ff]/30 px-3 py-2"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
          >
            <Search className="w-4 h-4 text-[#00f0ff]/40 flex-shrink-0" />
            <input
              type="text"
              placeholder="// search nfts..."
              className="bg-transparent text-xs text-[#e0f0ff] placeholder:text-[#7dd3fc]/20 outline-none ml-2 w-full font-mono"
              aria-label="Search NFTs"
            />
          </div>
        </div>

        {/* Nav links */}
        {navItems.map((item, i) =>
          item.href !== "#" ? (
            <Link
              key={item.label}
              href={item.href}
              className="relative z-10 text-sm font-bold font-mono text-[#7dd3fc]/60 hover:text-[#00f0ff] transition-all duration-300 uppercase tracking-[0.3em]"
              style={{
                animation: menuOpen ? `cyber-slide-in 0.4s ease-out ${i * 0.08}s both` : undefined,
                textShadow: "0 0 10px rgba(0,240,255,0.1)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {`[ ${item.label} ]`}
            </Link>
          ) : (
            <button
              key={item.label}
              className="relative z-10 text-sm font-bold font-mono text-[#7dd3fc]/60 hover:text-[#00f0ff] transition-all duration-300 uppercase tracking-[0.3em]"
              style={{
                animation: menuOpen ? `cyber-slide-in 0.4s ease-out ${i * 0.08}s both` : undefined,
                textShadow: "0 0 10px rgba(0,240,255,0.1)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {`[ ${item.label} ]`}
            </button>
          ),
        )}

        {/* Action buttons */}
        <div
          className="relative z-10 flex flex-col gap-3 mt-4 w-48"
          style={{ animation: menuOpen ? "cyber-slide-in 0.4s ease-out 0.4s both" : undefined }}
        >
          <button
            className="px-4 py-2.5 bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-xs font-bold font-mono text-[#00f0ff] uppercase tracking-widest hover:bg-[#00f0ff]/20 transition-all text-center"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))", boxShadow: "0 0 10px rgba(0,240,255,0.3)" }}
          >
            Explore
          </button>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#080812]/80 border border-[#C026D3]/30 text-xs font-bold font-mono text-[#C026D3] uppercase tracking-widest hover:bg-[#C026D3]/10 hover:border-[#C026D3]/50 transition-all text-center"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))", textShadow: "0 0 6px rgba(192,38,211,0.4)" }}
          >
            <Zap className="w-3 h-3" style={{ filter: "drop-shadow(0 0 4px rgba(192,38,211,0.6))" }} />
            Connect
          </button>
        </div>
      </div>

      {/* Bottom neon line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f0ff]"
        style={{ boxShadow: "0 0 10px rgba(0,240,255,0.8), 0 0 30px rgba(0,240,255,0.3)", animation: "neon-pulse 3s infinite" }}
      />
    </nav>
  );
}
