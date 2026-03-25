"use client";

import { ChevronDown, Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartCount] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Explore", href: "/v1" },
    { label: "Marketplace", href: "/v1/marketplace" },
    { label: "Features", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "Community", href: "#" },
  ];

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <nav className="w-full relative z-50 mt-5" role="navigation" aria-label="Main navigation">
      {/* The Background Layer: Glossy, Dark, and Blurry */}
      <div className="absolute inset-0 bg-[#03070c]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        {/* Top Glossy Highlight (The "Inner Glow") */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent " />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative">
        {/* Logo Section */}
        <Link href="/v1" className="flex items-center gap-3 group cursor-pointer" aria-label="CRO212HUB Home">
          <div className="w-8 h-8 bg-blue-600 rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-110">
            <div className="-rotate-45 font-bold text-white text-[10px]">C</div>
          </div>
          <span className="text-md lg:text-3xl font-bold tracking-[0.1em] text-white">
            CRO212HUB
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative">
            <div
              className={`flex items-center transition-all duration-300 overflow-hidden ${
                searchOpen
                  ? "w-[220px] bg-black/40 border border-white/10 rounded-lg"
                  : "w-8"
              }`}
            >
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex-shrink-0 p-2 text-gray-400 hover:text-white transition-colors"
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
                  placeholder="Search NFT ID or traits..."
                  className="bg-transparent text-sm text-gray-300 placeholder:text-gray-600 outline-none pr-3 w-full"
                  aria-label="Search NFTs by ID or traits"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setSearchOpen(false);
                  }}
                />
              )}
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) =>
              item.href !== "#" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 text-[12px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-all duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  className="flex items-center gap-1.5 text-[12px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-all duration-300"
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </button>
              ),
            )}
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

          {/* Cart Icon */}
          <button
            className="relative text-gray-400 hover:text-white transition-colors p-2"
            aria-label={`Shopping cart${cartCount > 0 ? `, ${cartCount} items` : ", empty"}`}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-600 rounded-full text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors p-2"
              aria-label="User profile menu"
              aria-expanded={profileOpen}
              aria-haspopup="true"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {profileOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-48 bg-[#0a0c10] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                role="menu"
                aria-label="User profile options"
              >
                <div className="px-4 py-3 border-b border-white/5">
                  <p className="text-xs text-gray-500">Not connected</p>
                  <p className="text-sm font-medium text-gray-300 truncate">
                    Connect wallet to view
                  </p>
                </div>
                <button
                  className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 transition-colors"
                  role="menuitem"
                >
                  My Collection
                </button>
                <button
                  className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 transition-colors"
                  role="menuitem"
                >
                  My Vault
                </button>
                <button
                  className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 transition-colors"
                  role="menuitem"
                >
                  Settings
                </button>
                <div className="border-t border-white/5">
                  <button
                    className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-red-600/10 transition-colors"
                    role="menuitem"
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
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
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Close button */}
        <button
          className="absolute top-8 right-6 text-white hover:rotate-90 transition-transform duration-300"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mobile Search */}
        <div className="w-64">
          <div className="flex items-center bg-black/40 border border-white/10 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search NFTs..."
              className="bg-transparent text-sm text-gray-300 placeholder:text-gray-600 outline-none ml-2 w-full"
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
              className={`text-[18px] font-semibold text-white hover:text-brand-gold transition-all duration-300 ${
                menuOpen ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: menuOpen ? `${i * 0.08}s` : "0s" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ) : (
            <button
              key={item.label}
              className={`text-[18px] font-semibold text-white hover:text-brand-gold transition-all duration-300 ${
                menuOpen ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: menuOpen ? `${i * 0.08}s` : "0s" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </button>
          ),
        )}

        {/* Action buttons */}
        <div
          className={`flex flex-col gap-3 mt-4 w-48 ${menuOpen ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: menuOpen ? "0.35s" : "0s" }}
        >
          <button className="bg-brand-dark shadow-inset-blue rounded-[5px] px-4 py-2 text-[13px] font-semibold hover:brightness-110 transition-all text-center">
            Explore
          </button>
          <button className="bg-brand-dark shadow-inset-blue rounded-[5px] px-4 py-2 text-[13px] font-semibold hover:brightness-110 transition-all text-center">
            Connect Wallet
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
