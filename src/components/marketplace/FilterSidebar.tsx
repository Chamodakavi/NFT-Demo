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

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

function FilterDropdown({
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

  const dropdownId = `filter-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="relative">
      <label
        id={`${dropdownId}-label`}
        className="text-[10px] text-gray-500 uppercase tracking-wider block mb-1.5"
      >
        {label}
      </label>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 bg-black/40 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-red-900/50 transition-colors"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-labelledby={`${dropdownId}-label`}
        onKeyDown={(e) => {
          if (e.key === "Escape" && open) {
            setOpen(false);
          }
        }}
      >
        <span>{options.find((o) => o.value === value)?.label || "Select"}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div
          className="absolute z-50 top-full left-0 right-0 mt-1 bg-[#0a0c10] border border-white/10 rounded-lg shadow-2xl overflow-hidden"
          role="listbox"
          aria-labelledby={`${dropdownId}-label`}
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              role="option"
              aria-selected={value === opt.value}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-white/5 transition-colors ${
                value === opt.value
                  ? "text-red-500 bg-red-600/10"
                  : "text-gray-300"
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

function TraitFilter({
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
    <div className="border-b border-white/5 pb-3">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
        aria-expanded={expanded}
        aria-controls={`trait-${category}`}
      >
        <span>{category}</span>
        <div className="flex items-center gap-2">
          {selected.length > 0 && (
            <span className="text-[10px] px-1.5 py-0.5 bg-red-600/20 text-red-400 rounded">
              {selected.length}
            </span>
          )}
          <ChevronDown
            className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      {expanded && (
        <div
          id={`trait-${category}`}
          className="flex flex-wrap gap-1.5 mt-1"
          role="group"
          aria-label={`${category} trait options`}
        >
          {values.map((val) => {
            const isSelected = selected.includes(val);
            return (
              <button
                key={val}
                onClick={() => onToggle(category, val)}
                aria-pressed={isSelected}
                className={`px-2 py-1 rounded text-[10px] font-medium transition-all ${
                  isSelected
                    ? "bg-red-600/30 border border-red-600/50 text-red-300"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
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

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTraitToggle = (category: string, value: string) => {
    const current = filters.selectedTraits[category] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange({
      ...filters,
      selectedTraits: { ...filters.selectedTraits, [category]: updated },
    });
  };

  const clearAll = () => {
    onFilterChange({
      priceSort: "none",
      rarityFilter: "none",
      sortBy: "newest",
      selectedTraits: {},
    });
  };

  const hasActiveFilters =
    filters.priceSort !== "none" ||
    filters.rarityFilter !== "none" ||
    filters.sortBy !== "newest" ||
    Object.values(filters.selectedTraits).some((v) => v.length > 0);

  const filterContent = (
    <div className="space-y-4">
      <FilterDropdown
        label="Price"
        value={filters.priceSort}
        options={[
          { value: "none", label: "Default" },
          { value: "low_to_high", label: "Low to High" },
          { value: "high_to_low", label: "High to Low" },
        ]}
        onChange={(v) => onFilterChange({ ...filters, priceSort: v })}
      />

      <FilterDropdown
        label="Rarity"
        value={filters.rarityFilter}
        options={[
          { value: "none", label: "Default" },
          { value: "highest", label: "Highest Rarity" },
          { value: "lowest", label: "Lowest Rarity" },
          { value: "alpha", label: "Alphabetical (A-Z)" },
        ]}
        onChange={(v) => onFilterChange({ ...filters, rarityFilter: v })}
      />

      <FilterDropdown
        label="Sort By"
        value={filters.sortBy}
        options={[
          { value: "newest", label: "Newest" },
          { value: "oldest", label: "Oldest" },
          { value: "popular", label: "Most Popular" },
        ]}
        onChange={(v) => onFilterChange({ ...filters, sortBy: v })}
      />

      {/* Trait Filters */}
      <div>
        <label className="text-[10px] text-gray-500 uppercase tracking-wider block mb-2">
          Traits
        </label>
        <div className="space-y-1">
          {Object.entries(traitCategories).map(([category, values]) => (
            <TraitFilter
              key={category}
              category={category}
              values={values}
              selected={filters.selectedTraits[category] || []}
              onToggle={handleTraitToggle}
            />
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600/10 border border-red-600/30 rounded-lg text-sm text-red-400 hover:bg-red-600/20 transition-colors"
        >
          <X className="w-3 h-3" />
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-black/40 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-red-900/50 transition-colors"
        aria-label="Open filters"
        aria-expanded={mobileOpen}
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
        {hasActiveFilters && (
          <span className="w-2 h-2 bg-red-500 rounded-full" aria-label="Filters active" />
        )}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[260px] flex-shrink-0 p-4 bg-black/30 border border-white/10 rounded-xl backdrop-blur-md sticky top-4" aria-label="Filter options">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider">
            Filters
          </h3>
          {hasActiveFilters && (
            <span className="text-[10px] px-1.5 py-0.5 bg-red-600/20 text-red-400 rounded">
              Active
            </span>
          )}
        </div>
        {filterContent}
      </aside>

      {/* Mobile Sheet */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Filter options"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-[#0a0c10] border-l border-white/10 p-6 overflow-y-auto transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Filters</h3>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {filterContent}
        </div>
      </div>
    </>
  );
}
