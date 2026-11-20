import { useState } from 'react';
import { GitHubRepoLink } from './GitHubRepoLink';
import { KineticIcon } from './KineticIcon';

export type SitePage = 'landing' | 'docs' | 'pricing';

interface SiteHeaderProps {
  activePage: SitePage;
  onNavigate: (page: SitePage) => void;
  onOpenStudio: () => void;
  onDownloadZip: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

const NAV_ITEMS: Array<{ id: SitePage; label: string }> = [
  { id: 'landing', label: 'Overview' },
  { id: 'docs', label: 'Documentation' },
  { id: 'pricing', label: 'Pricing' },
];

export function SiteHeader({
  activePage,
  onNavigate,
  onOpenStudio,
  onDownloadZip,
  isDark,
  onToggleTheme,
}: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: SitePage) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-30 bg-kinetic-bg/90 backdrop-blur-md border-b border-kinetic-border">
      <div className="max-w-5xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('landing')}
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-kinetic-ink whitespace-nowrap shrink-0 cursor-pointer"
        >
          <KineticIcon
            id="ai-spark"
            size={18}
            strokeWidth={1.6}
            radius={2.5}
          />
          <span>Kinetic</span>
        </button>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const active = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'text-kinetic-ink font-semibold'
                    : 'text-kinetic-muted hover:text-kinetic-ink'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenStudio();
            }}
            className="text-kinetic-muted hover:text-kinetic-ink transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Studio
          </button>
        </nav>

        {/* Zone 3: GitHub Stars + Theme Toggle + Primary CTA + Mobile Hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          <GitHubRepoLink className="hidden sm:inline-flex" />

          <button
            type="button"
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-xl bg-kinetic-card border border-kinetic-border text-kinetic-ink hover:border-kinetic-ink transition-colors flex items-center justify-center cursor-pointer"
            title="Toggle light or dark theme"
            aria-label="Toggle light or dark theme"
          >
            <KineticIcon
              id={isDark ? 'sun' : 'moon'}
              size={16}
              strokeWidth={1.6}
              radius={2.5}
            />
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenStudio();
            }}
            className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-xl bg-kinetic-ink text-kinetic-bg text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 cursor-pointer"
          >
            Browse Icons
          </button>

          {/* Hamburger menu button for smaller screens */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-9 h-9 rounded-xl bg-kinetic-card border border-kinetic-border text-kinetic-ink hover:border-kinetic-ink transition-colors flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            <KineticIcon
              id={mobileMenuOpen ? 'close' : 'menu'}
              size={18}
              strokeWidth={1.6}
              radius={2.5}
            />
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-kinetic-border bg-kinetic-bg px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full h-11 px-3 rounded-xl text-left text-sm font-medium flex items-center justify-between transition-colors cursor-pointer ${
                  active
                    ? 'bg-kinetic-pill text-kinetic-ink font-semibold'
                    : 'text-kinetic-muted hover:text-kinetic-ink hover:bg-kinetic-card'
                }`}
              >
                <span>{item.label}</span>
                {active && (
                  <KineticIcon
                    id="check"
                    size={15}
                    strokeWidth={1.8}
                    radius={2.5}
                  />
                )}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenStudio();
            }}
            className="w-full h-11 px-3 rounded-xl text-left text-sm font-medium text-kinetic-muted hover:text-kinetic-ink hover:bg-kinetic-card flex items-center justify-between transition-colors cursor-pointer"
          >
            <span>Icon Studio</span>
            <KineticIcon
              id="arrow-right"
              size={15}
              strokeWidth={1.6}
              radius={2.5}
            />
          </button>

          <GitHubRepoLink variant="menu" />

          <div className="pt-3 mt-2 border-t border-kinetic-border grid grid-cols-1 gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadZip();
              }}
              className="w-full h-11 px-4 rounded-xl bg-kinetic-ink text-kinetic-bg text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <KineticIcon
                id="download"
                size={15}
                strokeWidth={1.7}
                radius={2.5}
                color="var(--kinetic-bg)"
              />
              <span>Download ZIP Bundle</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
