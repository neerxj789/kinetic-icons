import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DocsPage } from './components/DocsPage';
import { Header } from './components/Header';
import { InspectorDrawer } from './components/InspectorDrawer';
import { KineticIcon } from './components/KineticIcon';
import { LandingPage } from './components/LandingPage';
import { PricingPage } from './components/PricingPage';
import { Sidebar } from './components/Sidebar';
import type { SitePage } from './components/SiteHeader';
import {
  DEFAULT_CORNER_RADIUS,
  DEFAULT_STROKE_WIDTH,
  ICONS_CATALOG,
  type CategoryFilter,
} from './data/icons';
import {
  buildAgentPrompt,
  type AgentPromptTarget,
} from './utils/agentPrompt';
import { downloadKineticZip } from './utils/exportZip';

interface ToastItem {
  id: number;
  message: string;
  fading: boolean;
}

const GRID_SCALES = [20, 24, 28] as const;

type AppView = SitePage | 'studio';

const PAGE_SEO: Record<AppView, { title: string; description: string }> = {
  landing: {
    title: 'Kinetic Icons – Original Monoline SVG Icon Library',
    description:
      '178 original, round-corner-friendly monoline SVG icons. Customize stroke, radius, and color live—free forever for React, Next.js, HTML, and Flutter.',
  },
  docs: {
    title: 'Documentation – Kinetic Icons (kinetic-ui-icons)',
    description:
      'Install kinetic-ui-icons, copy the AI Agent Prompt, and learn how to use React, Next.js Server Components, Web Components, Core TS, and Flutter icons.',
  },
  pricing: {
    title: 'Pricing ($0 Free Forever) – Kinetic Icons',
    description:
      'Kinetic Icons is 100% free forever under the MIT License for personal and commercial apps, with optional creator support.',
  },
  studio: {
    title: 'Icon Studio – Browse 178 Icons | Kinetic Icons',
    description:
      'Search all 178 Kinetic icons, tune stroke weight, corner radius, and color live, inspect React/SVG/Web/Flutter code, and export custom ZIP bundles.',
  },
};

function getInitialView(): AppView {
  if (typeof window === 'undefined') return 'landing';
  const param = new URLSearchParams(window.location.search).get('page');
  if (param === 'docs' || param === 'pricing' || param === 'studio') {
    return param;
  }
  return 'landing';
}

export default function App() {
  const [view, setView] = useState<AppView>(getInitialView);
  const [category, setCategory] = useState<CategoryFilter>('All Icons');
  const [searchQuery, setSearchQuery] = useState('');
  const [strokeWidth, setStrokeWidth] = useState(DEFAULT_STROKE_WIDTH);
  const [cornerRadius, setCornerRadius] = useState(DEFAULT_CORNER_RADIUS);
  const [activeColor, setActiveColor] = useState('#111113');
  const [gridSize, setGridSize] = useState<number>(24);
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);
  const [drawerExportSize, setDrawerExportSize] = useState<number>(24);
  const [showGridOverlay, setShowGridOverlay] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isExportingZip, setIsExportingZip] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const toastCounterRef = useRef(0);

  // Sync dark class on <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  // Sync dynamic page SEO metadata (title, description, canonical, og:url, query param)
  useEffect(() => {
    const meta = PAGE_SEO[view];
    document.title = meta.title;

    const url = new URL(window.location.href);
    if (view === 'landing') {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', view);
    }
    const nextRelative = url.pathname + url.search;
    if (window.location.pathname + window.location.search !== nextRelative) {
      window.history.replaceState(null, '', nextRelative);
    }
    const canonicalHref = 'https://kinetic.framesbyneer.in' + nextRelative;

    const upsertMeta = (
      selector: string,
      attrName: 'name' | 'property',
      attrValue: string,
      content: string
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    upsertMeta('meta[name="description"]', 'name', 'description', meta.description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalHref);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;
  }, [view]);

  // Global keyboard shortcuts: ⌘K / Ctrl+K to focus search, Escape to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (view !== 'studio') {
          setView('studio');
          setTimeout(() => searchInputRef.current?.focus(), 0);
        } else {
          searchInputRef.current?.focus();
        }
      }
      if (e.key === 'Escape' && selectedIconId) {
        setSelectedIconId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIconId, view]);

  const showToast = useCallback((message: string) => {
    const id = ++toastCounterRef.current;
    setToasts((prev) => [...prev, { id, message, fading: false }]);
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, fading: true } : t))
      );
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 200);
    }, 2400);
  }, []);

  const filteredIcons = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return ICONS_CATALOG.filter((icon) => {
      const matchesCategory =
        category === 'All Icons' || icon.category === category;
      const matchesSearch = icon.id.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [category, searchQuery]);

  // Custom stroke color: use active hex unless dark mode default
  const displayColor =
    isDark && activeColor === '#111113' ? '#F5F5F7' : activeColor;

  const handleResetFilters = () => {
    setSearchQuery('');
    setCategory('All Icons');
  };

  const handleResetSpecsToDefault = () => {
    setStrokeWidth(DEFAULT_STROKE_WIDTH);
    setCornerRadius(DEFAULT_CORNER_RADIUS);
  };

  const handleSelectCategory = (cat: CategoryFilter) => {
    setCategory(cat);
    setMobileSidebarOpen(false);
  };

  const handleDownloadZip = async () => {
    if (isExportingZip) return;
    setIsExportingZip(true);
    try {
      const filename = await downloadKineticZip({
        strokeWidth,
        cornerRadius,
        color: activeColor,
      });
      showToast(`Downloaded ${filename} (${ICONS_CATALOG.length} SVGs + Flutter)`);
    } catch {
      showToast('Failed to generate ZIP archive.');
    } finally {
      setIsExportingZip(false);
    }
  };

  const handleOpenStudio = (options?: {
    category?: CategoryFilter;
    iconId?: string;
  }) => {
    if (options?.category) {
      setCategory(options.category);
      setSearchQuery('');
    }
    if (options?.iconId) {
      setCategory('All Icons');
      setSearchQuery('');
      setSelectedIconId(options.iconId);
    }
    setView('studio');
  };

  const handleCopyAgentPrompt = async (target: AgentPromptTarget = 'all') => {
    const promptText = buildAgentPrompt(target);
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(promptText);
      } catch {
        const textarea = document.createElement('textarea');
        textarea.value = promptText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = promptText;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    const label =
      target === 'all'
        ? 'AI Agent Prompt (all frameworks)'
        : `AI Agent Prompt (${target})`;
    showToast(`Copied ${label} to clipboard!`);
  };

  return (
    <div className="h-full flex flex-col bg-kinetic-bg text-kinetic-ink">
      {view === 'landing' ? (
        <LandingPage
          strokeWidth={strokeWidth}
          onStrokeChange={setStrokeWidth}
          cornerRadius={cornerRadius}
          onRadiusChange={setCornerRadius}
          isDark={isDark}
          onToggleTheme={() => setIsDark((prev) => !prev)}
          isExportingZip={isExportingZip}
          onDownloadZip={handleDownloadZip}
          onNavigate={setView}
          onOpenStudio={handleOpenStudio}
          onToast={showToast}
        />
      ) : view === 'docs' ? (
        <DocsPage
          strokeWidth={strokeWidth}
          cornerRadius={cornerRadius}
          isDark={isDark}
          onToggleTheme={() => setIsDark((prev) => !prev)}
          onNavigate={setView}
          onOpenStudio={() => handleOpenStudio()}
          onDownloadZip={handleDownloadZip}
          onCopyAgentPrompt={handleCopyAgentPrompt}
          onToast={showToast}
        />
      ) : view === 'pricing' ? (
        <PricingPage
          isDark={isDark}
          onToggleTheme={() => setIsDark((prev) => !prev)}
          onNavigate={setView}
          onOpenStudio={() => handleOpenStudio()}
          onDownloadZip={handleDownloadZip}
          onToast={showToast}
        />
      ) : (
        <>
          <Header
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            searchInputRef={searchInputRef}
            strokeWidth={strokeWidth}
            onStrokeChange={setStrokeWidth}
            cornerRadius={cornerRadius}
            onRadiusChange={setCornerRadius}
            activeColor={activeColor}
            onColorChange={setActiveColor}
            isDark={isDark}
            onToggleTheme={() => setIsDark((prev) => !prev)}
            onResetFilters={handleResetFilters}
            onGoHome={() => {
              setSelectedIconId(null);
              setView('landing');
            }}
            onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
          />

      {/* MAIN WORKSPACE LAYOUT */}
      <div className="flex-1 flex overflow-hidden relative">
        <Sidebar
          activeCategory={category}
          onSelectCategory={handleSelectCategory}
          mobileOpen={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />

        {/* RIGHT MAIN PANEL */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-7 lg:p-9 bg-kinetic-bg flex flex-col">
          {/* Catalog Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight text-kinetic-ink">
                {category}
              </h1>
              <button
                type="button"
                onClick={handleResetSpecsToDefault}
                title="Click to reset stroke & radius to defaults"
                className="px-2.5 py-1 rounded-full bg-kinetic-pill border border-kinetic-border text-[11px] font-semibold text-kinetic-muted hover:text-kinetic-ink transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>
                  Stroke {strokeWidth.toFixed(1)}px · Radius{' '}
                  {cornerRadius.toFixed(1)}px
                </span>
              </button>
            </div>

            {/* Preview Size Selector + Download ZIP CTA */}
            <div className="flex items-center flex-wrap gap-2.5 self-start sm:self-auto">
              <div className="flex items-center gap-2">
                <span className="text-xs text-kinetic-muted font-medium hidden sm:inline">
                  Grid Scale:
                </span>
                <div className="flex items-center p-0.5 bg-kinetic-card border border-kinetic-border rounded-xl">
                  {GRID_SCALES.map((size) => {
                    const active = gridSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setGridSize(size)}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                          active
                            ? 'bg-kinetic-bg text-kinetic-ink shadow-sm'
                            : 'text-kinetic-muted hover:text-kinetic-ink'
                        }`}
                      >
                        {size}px
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={handleDownloadZip}
                disabled={isExportingZip}
                title={`Download all ${ICONS_CATALOG.length} SVGs + Flutter Dart bundle at current stroke & radius`}
                className="h-8 px-3 rounded-xl bg-kinetic-ink text-kinetic-bg text-xs font-semibold flex items-center gap-1.5 transition-opacity hover:opacity-90 disabled:opacity-60 shadow-sm cursor-pointer"
              >
                <KineticIcon
                  id="download"
                  size={14}
                  strokeWidth={1.8}
                  radius={2.5}
                  color="var(--kinetic-bg)"
                />
                <span>{isExportingZip ? 'Packing ZIP...' : 'Download ZIP'}</span>
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-kinetic-muted font-normal mb-6">
            Explore {ICONS_CATALOG.length} original Kinetic parametric icons
            crafted with continuous-curvature corners and optical balance.
          </p>

          {/* ICON GRID OR EMPTY STATE */}
          {filteredIcons.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-3.5 flex-1 content-start">
              {filteredIcons.map((icon) => {
                const isSelected = selectedIconId === icon.id;
                return (
                  <div
                    key={icon.id}
                    onClick={() => setSelectedIconId(icon.id)}
                    className={`group relative aspect-square rounded-2xl bg-kinetic-card hover:bg-kinetic-cardHover border transition-all duration-150 cursor-pointer flex flex-col items-center justify-center p-3 ${
                      isSelected
                        ? 'border-kinetic-ink ring-1 ring-kinetic-ink bg-kinetic-cardHover'
                        : 'border-kinetic-border hover:border-kinetic-muted/40'
                    }`}
                  >
                    <div className="flex-1 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-150">
                      <KineticIcon
                        id={icon.id}
                        size={gridSize}
                        strokeWidth={strokeWidth}
                        radius={cornerRadius}
                        color={displayColor}
                      />
                    </div>
                    <span className="text-[11px] font-medium text-kinetic-muted group-hover:text-kinetic-ink transition-colors truncate max-w-full px-1">
                      {icon.id}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center py-16 text-center">
              <div className="w-12 h-12 rounded-2xl bg-kinetic-card border border-kinetic-border flex items-center justify-center text-kinetic-muted mb-3">
                <KineticIcon
                  id="search"
                  size={24}
                  strokeWidth={1.6}
                  radius={2.5}
                />
              </div>
              <h3 className="text-sm font-semibold text-kinetic-ink mb-1">
                No icons found
              </h3>
              <p className="text-xs text-kinetic-muted max-w-xs mb-4">
                Try searching for something else like &quot;home&quot;,
                &quot;code&quot;, &quot;user&quot;, or &quot;search&quot;.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-3.5 py-1.5 rounded-xl bg-kinetic-ink text-kinetic-bg text-xs font-semibold transition-opacity hover:opacity-90 cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </main>

        <InspectorDrawer
          selectedIconId={selectedIconId}
          strokeWidth={strokeWidth}
          onStrokeChange={setStrokeWidth}
          cornerRadius={cornerRadius}
          onRadiusChange={setCornerRadius}
          activeColor={activeColor}
          displayColor={displayColor}
          exportSize={drawerExportSize}
          onExportSizeChange={setDrawerExportSize}
          showGridOverlay={showGridOverlay}
          onToggleGridOverlay={() => setShowGridOverlay((prev) => !prev)}
          onClose={() => setSelectedIconId(null)}
          onToast={showToast}
        />
      </div>
        </>
      )}

      {/* TOAST CONTAINER */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`animate-toast px-4 py-2.5 rounded-xl bg-kinetic-ink text-kinetic-bg text-xs font-semibold shadow-xl flex items-center gap-2 border border-kinetic-border transition-opacity duration-200 ${
              toast.fading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <KineticIcon
              id="check"
              size={14}
              strokeWidth={2}
              radius={2.5}
              color="var(--kinetic-bg)"
            />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
