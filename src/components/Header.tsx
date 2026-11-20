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
      <header className="sticky top-0 z-30 h-16 bg-kinetic-bg border-b border-kinetic-border px-4 lg:px-7 flex items-center justify-between shrink-0">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 text-kinetic-ink hover:bg-kinetic-card rounded-xl transition-colors cursor-pointer"
            aria-label="Open categories menu"
          >
            <KineticIcon id="menu" size={20} strokeWidth={1.6} radius={2.5} />
          </button>

          <button
            type="button"
            className="flex items-center gap-2.5 cursor-pointer text-left"
            onClick={() => {
              if (onGoHome) {
                onGoHome();
              } else {
                onResetFilters();
              }
            }}
            title="Back to Kinetic overview"
          >
            <div className="w-8 h-8 rounded-xl bg-kinetic-card border border-kinetic-border flex items-center justify-center text-kinetic-ink">
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
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-kinetic-pill text-kinetic-muted border border-kinetic-border">
                v2.0
              </span>
            </div>
          </button>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex items-center relative w-full max-w-sm mx-4">
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

        {/* Right: Inline Controls */}
        <div className="flex items-center gap-3 lg:gap-5">
          {/* Stroke Slider */}
          <div className="hidden sm:flex items-center gap-2 text-xs">
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
            <span className="w-9 font-medium text-[11px] text-kinetic-ink px-1.5 py-0.5 rounded bg-kinetic-pill border border-kinetic-border text-center">
              {strokeWidth.toFixed(1)}px
            </span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-kinetic-border" />

          {/* Radius Slider */}
          <div className="hidden sm:flex items-center gap-2 text-xs">
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
            <span className="w-9 font-medium text-[11px] text-kinetic-ink px-1.5 py-0.5 rounded bg-kinetic-pill border border-kinetic-border text-center">
              {cornerRadius.toFixed(1)}px
            </span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-kinetic-border" />

          {/* Color Swatch Trigger */}
          <div className="relative" ref={colorTriggerRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setColorPopoverOpen((prev) => !prev);
              }}
              className="flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-kinetic-card border border-kinetic-border text-xs text-kinetic-ink hover:border-kinetic-ink transition-colors cursor-pointer"
            >
              <span
                className="w-3.5 h-3.5 rounded-full border border-black/10"
                style={{ backgroundColor: activeColor }}
              />
              <span className="hidden lg:inline text-xs font-medium">Color</span>
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
                      className="w-6 h-6 rounded-full border border-black/10 transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
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
          <GitHubRepoLink className="hidden xl:inline-flex" />

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-kinetic-card border border-kinetic-border text-kinetic-ink hover:border-kinetic-ink transition-colors cursor-pointer"
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

      {/* MOBILE SEARCH (ONLY VISIBLE ON MOBILE) */}
      <div className="md:hidden p-3 border-b border-kinetic-border bg-kinetic-bg">
        <div className="relative w-full">
          <div className="absolute left-3 top-2.5 text-kinetic-muted pointer-events-none">
            <KineticIcon id="search" size={16} strokeWidth={1.6} radius={2.5} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={`Search ${ICONS_CATALOG.length} Kinetic icons...`}
            className="w-full h-9 pl-9 pr-4 bg-kinetic-card border border-kinetic-border rounded-xl text-xs text-kinetic-ink placeholder-kinetic-muted focus:outline-none"
          />
        </div>
      </div>
    </>
  );
}
