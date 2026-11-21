import { useEffect, useRef, useState, type RefObject } from 'react';
import { ICONS_CATALOG, PRESET_COLORS } from '../data/icons';
import { GitHubRepoLink } from './GitHubRepoLink';
import { KineticIcon } from './KineticIcon';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  searchInputRef: RefObject<HTMLInputElement | null>;
  strokeWidth: number;
  onStrokeChange: (value: number) => void;
  cornerRadius: number;
  onRadiusChange: (value: number) => void;
  activeColor: string;
  onColorChange: (hex: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onResetFilters: () => void;
  onGoHome?: () => void;
  onOpenMobileSidebar: () => void;
}

export function Header({
  searchQuery,
  onSearchChange,
  searchInputRef,
  strokeWidth,
  onStrokeChange,
  cornerRadius,
  onRadiusChange,
  activeColor,
  onColorChange,
  isDark,
  onToggleTheme,
  onResetFilters,
  onGoHome,
  onOpenMobileSidebar,
}: HeaderProps) {
  const [colorPopoverOpen, setColorPopoverOpen] = useState(false);
  const colorTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        colorTriggerRef.current &&
        !colorTriggerRef.current.contains(e.target as Node)
      ) {
        setColorPopoverOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <>
      {/* TOP STICKY HEADER */}
      <header className="sticky top-0 z-30 h-16 bg-kinetic-bg border-b border-kinetic-border px-3 sm:px-5 lg:px-7 flex items-center justify-between gap-2 sm:gap-4 shrink-0">
        {/* Left: Brand */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenMobileSidebar}
            className="lg:hidden w-9 h-9 flex items-center justify-center text-kinetic-ink hover:bg-kinetic-card rounded-xl transition-colors cursor-pointer shrink-0"
            aria-label="Open categories menu"
          >
            <KineticIcon id="menu" size={20} strokeWidth={1.6} radius={2.5} />
          </button>

          <button
            type="button"
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer text-left shrink-0"
            onClick={() => {
              if (onGoHome) {
                onGoHome();
              } else {
                onResetFilters();
              }
            }}
            title="Back to Kinetic overview"
          >
            <div className="w-8 h-8 rounded-xl bg-kinetic-card border border-kinetic-border flex items-center justify-center text-kinetic-ink shrink-0">
              <KineticIcon
                id="ai-spark"
                size={18}
                strokeWidth={1.6}
                radius={2.5}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-base tracking-tight text-kinetic-ink">
                Kinetic
              </span>
              <span className="hidden sm:inline-flex text-[11px] font-medium px-2 py-0.5 rounded-full bg-kinetic-pill text-kinetic-muted border border-kinetic-border">
                v2.0
              </span>
            </div>
          </button>
        </div>

        {/* Center: Search Bar (Tablet & Desktop) */}
        <div className="hidden md:flex items-center relative flex-1 min-w-0 max-w-sm">
          <div className="absolute left-3.5 text-kinetic-muted pointer-events-none flex items-center justify-center">
            <KineticIcon id="search" size={16} strokeWidth={1.6} radius={2.5} />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={`Search ${ICONS_CATALOG.length} Kinetic icons...`}
            className="w-full h-10 pl-10 pr-12 bg-kinetic-card border border-kinetic-border rounded-xl text-xs text-kinetic-ink placeholder-kinetic-muted focus:outline-none focus:border-kinetic-ink transition-colors"
          />
          <kbd className="absolute right-3 px-1.5 py-0.5 text-[10px] font-medium text-kinetic-muted bg-kinetic-bg rounded border border-kinetic-border pointer-events-none">
            ⌘K
          </kbd>
        </div>

        {/* Right: Inline Controls (Sliders inline at xl+, Actions always visible) */}
        <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-4 shrink-0">
          {/* Stroke Slider (Wide Desktop Only) */}
          <div className="hidden xl:flex items-center gap-2 text-xs shrink-0">
            <span className="text-kinetic-muted font-medium">Stroke</span>
            <input
              type="range"
              min="0.75"
              max="3.5"
              step="0.25"
              value={strokeWidth}
              onChange={(e) => onStrokeChange(parseFloat(e.target.value))}
              className="w-20"
              aria-label="Stroke width"
            />
            <span className="w-10 font-medium text-[11px] text-kinetic-ink px-1.5 py-0.5 rounded bg-kinetic-pill border border-kinetic-border text-center tabular-nums">
              {strokeWidth.toFixed(1)}px
            </span>
          </div>

          <div className="hidden xl:block w-px h-5 bg-kinetic-border shrink-0" />

          {/* Radius Slider (Wide Desktop Only) */}
          <div className="hidden xl:flex items-center gap-2 text-xs shrink-0">
            <span className="text-kinetic-muted font-medium">Radius</span>
            <input
              type="range"
              min="0"
              max="4.0"
              step="0.25"
              value={cornerRadius}
              onChange={(e) => onRadiusChange(parseFloat(e.target.value))}
              className="w-20"
              aria-label="Corner radius"
            />
            <span className="w-10 font-medium text-[11px] text-kinetic-ink px-1.5 py-0.5 rounded bg-kinetic-pill border border-kinetic-border text-center tabular-nums">
              {cornerRadius.toFixed(1)}px
            </span>
          </div>

          <div className="hidden xl:block w-px h-5 bg-kinetic-border shrink-0" />

          {/* Color Swatch Trigger */}
          <div className="relative shrink-0" ref={colorTriggerRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setColorPopoverOpen((prev) => !prev);
              }}
              className="h-9 flex items-center justify-center gap-2 px-2.5 rounded-xl bg-kinetic-card border border-kinetic-border text-xs text-kinetic-ink hover:border-kinetic-ink transition-colors cursor-pointer"
              title="Customize icon color"
              aria-label="Customize icon color"
            >
              <span
                className="w-3.5 h-3.5 rounded-full border border-kinetic-border shrink-0"
                style={{ backgroundColor: activeColor }}
              />
              <span className="hidden 2xl:inline text-xs font-medium">Color</span>
            </button>

            {/* Color Swatch Popover */}
            {colorPopoverOpen && (
              <div className="absolute right-0 top-12 p-3 bg-kinetic-bg border border-kinetic-border rounded-2xl shadow-xl z-50 w-52 flex flex-col gap-3">
                <span className="text-[11px] font-semibold text-kinetic-muted uppercase tracking-wider">
                  Preset Colors
                </span>
                <div className="grid grid-cols-6 gap-2">
                  {PRESET_COLORS.map((hex) => (
                    <button
                      key={hex}
                      type="button"
                      onClick={() => onColorChange(hex)}
                      className="w-6 h-6 rounded-full border border-kinetic-border transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
                      style={{ backgroundColor: hex }}
                      aria-label={`Select color ${hex}`}
                    />
                  ))}
                </div>
                <div className="pt-2 border-t border-kinetic-border flex items-center justify-between">
                  <span className="text-xs text-kinetic-muted font-medium">
                    Custom Hex
                  </span>
                  <input
                    type="color"
                    value={activeColor}
                    onChange={(e) => onColorChange(e.target.value)}
                    className="w-7 h-7 rounded cursor-pointer border-0 p-0 bg-transparent"
                    aria-label="Custom hex color"
                  />
                </div>
              </div>
            )}
          </div>

          {/* GitHub Repo Link */}
          <GitHubRepoLink className="hidden sm:inline-flex" />

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-xl bg-kinetic-card border border-kinetic-border text-kinetic-ink hover:border-kinetic-ink transition-colors flex items-center justify-center cursor-pointer shrink-0"
            title="Toggle Light/Dark Theme"
            aria-label="Toggle Light/Dark Theme"
          >
            <KineticIcon
              id={isDark ? 'moon' : 'sun'}
              size={18}
              strokeWidth={1.6}
              radius={2.5}
              color={isDark ? '#F5F5F7' : '#111113'}
            />
          </button>
        </div>
      </header>

      {/* MOBILE & TABLET SECONDARY TOOLBAR (Search on < md, Sliders on < xl) */}
      <div className="xl:hidden border-b border-kinetic-border bg-kinetic-bg px-3 sm:px-5 lg:px-7 py-2.5 flex flex-col gap-2.5 shrink-0">
        {/* Mobile Search Bar */}
        <div className="md:hidden relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-kinetic-muted pointer-events-none flex items-center justify-center">
            <KineticIcon id="search" size={16} strokeWidth={1.6} radius={2.5} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={`Search ${ICONS_CATALOG.length} Kinetic icons...`}
            className="w-full h-9 pl-9 pr-4 bg-kinetic-card border border-kinetic-border rounded-xl text-xs text-kinetic-ink placeholder-kinetic-muted focus:outline-none focus:border-kinetic-ink transition-colors"
          />
        </div>

        {/* Tablet & Mobile Sliders Row */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 items-center">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs min-w-0">
            <span className="text-kinetic-muted font-medium shrink-0">Stroke</span>
            <input
              type="range"
              min="0.75"
              max="3.5"
              step="0.25"
              value={strokeWidth}
              onChange={(e) => onStrokeChange(parseFloat(e.target.value))}
              className="w-full flex-1 min-w-0"
              aria-label="Stroke width"
            />
            <span className="w-9 sm:w-10 font-medium text-[11px] text-kinetic-ink px-1 py-0.5 rounded bg-kinetic-pill border border-kinetic-border text-center tabular-nums shrink-0">
              {strokeWidth.toFixed(1)}px
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 text-xs min-w-0">
            <span className="text-kinetic-muted font-medium shrink-0">Radius</span>
            <input
              type="range"
              min="0"
              max="4.0"
              step="0.25"
              value={cornerRadius}
              onChange={(e) => onRadiusChange(parseFloat(e.target.value))}
              className="w-full flex-1 min-w-0"
              aria-label="Corner radius"
            />
            <span className="w-9 sm:w-10 font-medium text-[11px] text-kinetic-ink px-1 py-0.5 rounded bg-kinetic-pill border border-kinetic-border text-center tabular-nums shrink-0">
              {cornerRadius.toFixed(1)}px
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
