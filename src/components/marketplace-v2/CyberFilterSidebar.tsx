"use client";

import { useState } from "react";
import { ChevronDown, X, SlidersHorizontal } from "lucide-react";
import { traitCategories } from "@/data/mockNfts";

export interface FilterState {
  priceSort: string;
  rarityFilter: string;
  sortBy: string;
  selectedTraits: Record<string, string[]>;
}

interface CyberFilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

function CyberDropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <label className="text-[10px] text-[#7dd3fc]/50 uppercase tracking-widest font-mono block mb-1.5">
        {`// ${label}`}
      </label>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 bg-[#080812]/80 cyber-border text-sm text-[#e0f0ff] font-mono hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
        style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}
        aria-expanded={open}
        aria-haspopup="listbox"
        onKeyDown={(e) => { if (e.key === "Escape" && open) setOpen(false); }}
      >
        <span className="text-xs">{options.find((o) => o.value === value)?.label || "Select"}</span>
        <ChevronDown className={`w-4 h-4 text-[#00f0ff] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-[#080812] border border-[#00f0ff]/30 shadow-[0_0_20px_rgba(0,240,255,0.3)] overflow-hidden" role="listbox">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              role="option"
              aria-selected={value === opt.value}
              className={`w-full text-left px-3 py-2 text-xs font-mono hover:bg-[#00f0ff]/10 transition-colors ${
                value === opt.value ? "text-[#00f0ff] bg-[#00f0ff]/5 cyber-glow" : "text-[#e0f0ff]/70"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function CyberTraitFilter({
  category,
  values,
  selected,
  onToggle,
}: {
  category: string;
  values: string[];
  selected: string[];
  onToggle: (category: string, value: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-[#00f0ff]/10 pb-3">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between py-2 text-sm font-mono text-[#e0f0ff]/70 hover:text-[#00f0ff] transition-colors"
        aria-expanded={expanded}
      >
        <span className="text-xs">{`> ${category}`}</span>
        <div className="flex items-center gap-2">
          {selected.length > 0 && (
            <span className="text-[9px] px-1.5 py-0.5 bg-[#00f0ff]/20 text-[#00f0ff] font-mono" style={{ boxShadow: "0 0 8px rgba(0,240,255,0.3)" }}>
              {selected.length}
            </span>
          )}
          <ChevronDown className={`w-3 h-3 text-[#00f0ff]/50 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
        </div>
      </button>
      {expanded && (
        <div className="flex flex-wrap gap-1.5 mt-1" role="group" aria-label={`${category} trait options`}>
          {values.map((val) => {
            const isSelected = selected.includes(val);
            return (
              <button
                key={val}
                onClick={() => onToggle(category, val)}
                aria-pressed={isSelected}
                className={`px-2 py-1 text-[9px] font-mono transition-all ${
                  isSelected
                    ? "bg-[#00f0ff]/20 border border-[#00f0ff]/60 text-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.3)]"
                    : "bg-[#0f1a2e]/50 border border-[#00f0ff]/10 text-[#7dd3fc]/50 hover:border-[#00f0ff]/30 hover:text-[#7dd3fc]"
                }`}
              >
                {val}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function CyberFilterSidebar({ filters, onFilterChange }: CyberFilterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTraitToggle = (category: string, value: string) => {
    const current = filters.selectedTraits[category] || [];
    const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    onFilterChange({ ...filters, selectedTraits: { ...filters.selectedTraits, [category]: updated } });
  };

  const clearAll = () => {
    onFilterChange({ priceSort: "none", rarityFilter: "none", sortBy: "newest", selectedTraits: {} });
  };

  const hasActiveFilters =
    filters.priceSort !== "none" || filters.rarityFilter !== "none" || filters.sortBy !== "newest" ||
    Object.values(filters.selectedTraits).some((v) => v.length > 0);

  const filterContent = (
    <div className="space-y-4">
      <CyberDropdown label="Price" value={filters.priceSort} options={[{ value: "none", label: "Default" }, { value: "low_to_high", label: "Low > High" }, { value: "high_to_low", label: "High > Low" }]} onChange={(v) => onFilterChange({ ...filters, priceSort: v })} />
      <CyberDropdown label="Rarity" value={filters.rarityFilter} options={[{ value: "none", label: "Default" }, { value: "highest", label: "Highest" }, { value: "lowest", label: "Lowest" }, { value: "alpha", label: "A-Z" }]} onChange={(v) => onFilterChange({ ...filters, rarityFilter: v })} />
      <CyberDropdown label="Sort" value={filters.sortBy} options={[{ value: "newest", label: "Newest" }, { value: "oldest", label: "Oldest" }, { value: "popular", label: "Popular" }]} onChange={(v) => onFilterChange({ ...filters, sortBy: v })} />

      <div>
        <label className="text-[10px] text-[#7dd3fc]/50 uppercase tracking-widest font-mono block mb-2">{`// Traits`}</label>
        <div className="space-y-1">
          {Object.entries(traitCategories).map(([category, values]) => (
            <CyberTraitFilter key={category} category={category} values={values} selected={filters.selectedTraits[category] || []} onToggle={handleTraitToggle} />
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-sm text-[#00f0ff] font-mono hover:bg-[#00f0ff]/20 transition-colors"
          style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
        >
          <X className="w-3 h-3" />
          CLEAR_ALL
        </button>
      )}
    </div>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden relative flex items-center justify-center w-10 h-10 bg-[#080812] cyber-border text-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
        style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
        aria-label="Open filters"
      >
        <SlidersHorizontal className="w-4 h-4" />
        {hasActiveFilters && <span className="absolute top-1 right-1 w-2 h-2 bg-[#00f0ff] rounded-full shadow-[0_0_8px_rgba(0,240,255,0.8)]" />}
      </button>

      <aside
        className="hidden lg:block w-[260px] flex-shrink-0 p-4 bg-[#080812]/80 cyber-border sticky top-4 cyber-scanline"
        style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
        aria-label="Filter options"
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest font-mono text-[#00f0ff] cyber-glow">
              {`[FILTERS]`}
            </h3>
            {hasActiveFilters && (
              <span className="text-[9px] px-1.5 py-0.5 bg-[#00f0ff]/20 text-[#00f0ff] font-mono" style={{ animation: "neon-pulse 2s infinite" }}>
                ACTIVE
              </span>
            )}
          </div>
          {filterContent}
        </div>
      </aside>

      {/* Mobile Sheet */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Filter options"
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-[#080812] border-l border-[#00f0ff]/30 p-6 overflow-y-auto transition-transform duration-300 cyber-scanline ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold font-mono text-[#00f0ff] cyber-glow">{`[FILTERS]`}</h3>
              <button onClick={() => setMobileOpen(false)} className="text-[#00f0ff]/60 hover:text-[#00f0ff] transition-colors" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      </div>
    </>
  );
}
