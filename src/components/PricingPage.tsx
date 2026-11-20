import { useState, type FormEvent } from 'react';
import { ICONS_CATALOG } from '../data/icons';
import { KineticIcon } from './KineticIcon';
import { SiteHeader, type SitePage } from './SiteHeader';

interface PricingPageProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onNavigate: (page: SitePage) => void;
  onOpenStudio: () => void;
  onDownloadZip: () => void;
  onToast: (message: string) => void;
}

const SUPPORT_PRESETS = [
  { amount: 5, label: 'Buy a coffee' },
  { amount: 15, label: 'Fuel an icon drop' },
  { amount: 35, label: 'Indie supporter' },
  { amount: 75, label: 'Foundry sponsor' },
] as const;

const INCLUDED_FEATURES = [
  `All ${ICONS_CATALOG.length} original Kinetic icons`,
  'React & Next.js Server Components',
  'Vanilla JS Web Component & Core TS',
  'Flutter & Dart SVG generator',
  'Live stroke, radius & color controls',
  'Unlimited SVG, JSX & ZIP exports',
  'Commercial use, no attribution needed',
  'AI Agent Prompt for any framework',
] as const;

const FAQS = [
  {
    q: 'Is Kinetic really $0 and free forever?',
    a: `Yes. All ${ICONS_CATALOG.length} Kinetic icons, framework wrappers, studio controls, and ZIP bundles are released under the MIT License—free for personal, client, SaaS, and commercial products with no paywalls or seat limits.`,
  },
  {
    q: 'What does supporting the creator go toward?',
    a: 'Voluntary contributions fund ongoing icon design, new category drops, maintenance across React, Web, and Flutter packages, and keeping Kinetic fast and ad-free for everyone.',
  },
  {
    q: 'How do colors work across React, Web, and Flutter?',
    a: 'Icons default to stroke="currentColor" so they automatically inherit CSS/Tailwind text color or Flutter IconTheme. You can also pass an explicit color prop (hex, RGB, or Color) directly on any icon.',
  },
  {
    q: 'Do React components work in Next.js Server Components?',
    a: 'Yes. Kinetic React components use zero client-only hooks or state and render natively inside Next.js App Router Server Components.',
  },
  {
    q: 'What is included when I download the ZIP bundle?',
    a: `Every ZIP download includes all ${ICONS_CATALOG.length} standalone .svg files baked at your selected stroke and corner radius, a ready-to-paste flutter/kinetic_icons.dart file, and a quick-start README.`,
  },
] as const;

async function copyShareUrl(): Promise<void> {
  const url = typeof window !== 'undefined' ? window.location.origin : '';
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(url);
      return;
    } catch {
      // Fallback below
    }
  }
  const textarea = document.createElement('textarea');
  textarea.value = url;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export function PricingPage({
  isDark,
  onToggleTheme,
  onNavigate,
  onOpenStudio,
  onDownloadZip,
  onToast,
}: PricingPageProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [selectedPreset, setSelectedPreset] = useState<number | 'custom'>(15);
  const [customAmount, setCustomAmount] = useState('25');
  const [supporterNote, setSupporterNote] = useState('');
  const [amountError, setAmountError] = useState('');
  const [pledgedAmount, setPledgedAmount] = useState<number | null>(null);

  const activeAmount =
    selectedPreset === 'custom'
      ? Number.parseFloat(customAmount) || 0
      : selectedPreset;

  const activePresetMeta =
    selectedPreset === 'custom'
      ? 'Custom one-time support'
      : SUPPORT_PRESETS.find((p) => p.amount === selectedPreset)?.label ?? '';

  const handleSupportSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!Number.isFinite(activeAmount) || activeAmount < 1) {
      setAmountError('Please enter an amount of at least $1.');
      return;
    }
    setAmountError('');
    const rounded = Math.round(activeAmount * 100) / 100;
    setPledgedAmount(rounded);
    onToast(`Thank you for supporting Kinetic with $${rounded}!`);
  };

  const handleShare = async () => {
    await copyShareUrl();
    onToast('Kinetic link copied—thanks for spreading the word!');
  };

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden bg-kinetic-bg text-kinetic-ink scroll-smooth">
      <SiteHeader
        activePage="pricing"
        onNavigate={onNavigate}
        onOpenStudio={onOpenStudio}
        onDownloadZip={onDownloadZip}
        isDark={isDark}
        onToggleTheme={onToggleTheme}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Centered Header */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium text-kinetic-muted tabular-nums mb-3">
            Pricing · MIT Licensed · Open Source
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-kinetic-ink [text-wrap:balance]">
            Free forever.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-kinetic-muted leading-relaxed">
            Every icon, framework wrapper, and export tool in Kinetic is $0 for
            personal and commercial projects. No tiers, no paywalls, and no seat
            limits—ever.
          </p>
        </div>

        {/* 2-Column Asymmetric Grid: $0 Free Forever + Support the Creator */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Primary Card: $0 Free Forever */}
          <section className="lg:col-span-7 rounded-2xl bg-kinetic-card border-2 border-kinetic-ink p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-base font-semibold text-kinetic-ink">
                  Kinetic Open Source
                </h2>
                <span className="text-xs font-medium text-kinetic-muted">
                  MIT License
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-2 tabular-nums">
                <span className="text-5xl sm:text-6xl font-bold tracking-tight text-kinetic-ink">
                  $0
                </span>
                <span className="text-sm font-medium text-kinetic-muted">
                  / free forever
                </span>
              </div>

              <p className="mt-3 text-sm text-kinetic-muted leading-relaxed">
                Full access to the entire library, live stroke and corner-radius
                controls, and multi-framework code exports from day one.
              </p>

              <ul className="mt-7 pt-7 border-t border-kinetic-border grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-sm text-kinetic-ink">
                {INCLUDED_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <KineticIcon
                      id="check"
                      size={16}
                      strokeWidth={1.9}
                      radius={2.5}
                      className="mt-0.5 shrink-0 text-kinetic-ink"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-kinetic-border flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onOpenStudio}
                className="flex-1 h-11 px-5 rounded-xl bg-kinetic-ink text-kinetic-bg text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
              >
                <span>Open Icon Studio</span>
                <KineticIcon
                  id="arrow-right"
                  size={15}
                  strokeWidth={1.8}
                  radius={2.5}
                />
              </button>
              <button
                type="button"
                onClick={onDownloadZip}
                className="h-11 px-5 rounded-xl bg-kinetic-bg border border-kinetic-border text-kinetic-ink text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 hover:border-kinetic-ink transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <KineticIcon
                  id="download"
                  size={15}
                  strokeWidth={1.8}
                  radius={2.5}
                />
                <span>Download ZIP</span>
              </button>
            </div>
          </section>

          {/* Complementary Card: Support the Creator */}
          <section className="lg:col-span-5 rounded-2xl bg-kinetic-card border border-kinetic-border p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-kinetic-bg border border-kinetic-border inline-flex items-center justify-center text-kinetic-ink shrink-0">
                  <KineticIcon
                    id="heart"
                    size={18}
                    strokeWidth={1.7}
                    radius={2.5}
                  />
                </span>
                <div>
                  <h2 className="text-base font-semibold text-kinetic-ink">
                    Support the Creator
                  </h2>
                  <p className="text-xs text-kinetic-muted">
                    100% optional · Fuels future icon drops
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-kinetic-muted leading-relaxed">
                Kinetic is independently designed and maintained. If the library
                saves you hours or ships in your product, consider supporting
                its ongoing craft.
              </p>

              {pledgedAmount !== null ? (
                <div className="mt-6 pt-6 border-t border-kinetic-border space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-kinetic-ink text-kinetic-bg inline-flex items-center justify-center shrink-0 mt-0.5">
                      <KineticIcon
                        id="check"
                        size={16}
                        strokeWidth={2}
                        radius={2.5}
                      />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-kinetic-ink tabular-nums">
                        Thank you for pledging ${pledgedAmount}
                      </p>
                      <p className="mt-1 text-xs text-kinetic-muted leading-relaxed">
                        Your support keeps Kinetic open source, ad-free, and
                        constantly growing for builders everywhere.
                        {supporterNote.trim()
                          ? ` Note saved: "${supporterNote.trim()}"`
                          : ''}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setPledgedAmount(null);
                      setSupporterNote('');
                    }}
                    className="w-full h-10 rounded-xl bg-kinetic-bg border border-kinetic-border text-kinetic-ink text-xs font-semibold hover:border-kinetic-ink transition-colors cursor-pointer"
                  >
                    Send Another Contribution
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSupportSubmit}
                  className="mt-6 pt-6 border-t border-kinetic-border space-y-4"
                  noValidate
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-kinetic-ink">
                        Choose an amount
                      </span>
                      <span className="text-xs text-kinetic-muted">
                        {activePresetMeta}
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-1.5">
                      {SUPPORT_PRESETS.map((preset) => {
                        const isActive = selectedPreset === preset.amount;
                        return (
                          <button
                            key={preset.amount}
                            type="button"
                            onClick={() => {
                              setSelectedPreset(preset.amount);
                              setAmountError('');
                            }}
                            className={`h-10 rounded-lg text-xs font-semibold tabular-nums transition-colors cursor-pointer ${
                              isActive
                                ? 'bg-kinetic-ink text-kinetic-bg'
                                : 'bg-kinetic-bg border border-kinetic-border text-kinetic-ink hover:border-kinetic-ink'
                            }`}
                          >
                            ${preset.amount}
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPreset('custom');
                          setAmountError('');
                        }}
                        className={`h-10 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                          selectedPreset === 'custom'
                            ? 'bg-kinetic-ink text-kinetic-bg'
                            : 'bg-kinetic-bg border border-kinetic-border text-kinetic-ink hover:border-kinetic-ink'
                        }`}
                      >
                        Other
                      </button>
                    </div>
                  </div>

                  {selectedPreset === 'custom' && (
                    <div>
                      <label htmlFor="custom-support-amount" className="sr-only">
                        Custom support amount in USD
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-kinetic-muted">
                          $
                        </span>
                        <input
                          id="custom-support-amount"
                          type="number"
                          min="1"
                          step="1"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            if (amountError) setAmountError('');
                          }}
                          placeholder="25"
                          className="w-full h-10 pl-7 pr-3.5 rounded-xl bg-kinetic-bg border border-kinetic-border text-sm text-kinetic-ink tabular-nums placeholder-kinetic-muted focus:outline-none focus:border-kinetic-ink transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="supporter-note" className="sr-only">
                      Optional note or social handle
                    </label>
                    <input
                      id="supporter-note"
                      type="text"
                      value={supporterNote}
                      onChange={(e) => setSupporterNote(e.target.value)}
                      placeholder="Leave a note or @handle (optional)"
                      className="w-full h-10 px-3.5 rounded-xl bg-kinetic-bg border border-kinetic-border text-xs sm:text-sm text-kinetic-ink placeholder-kinetic-muted focus:outline-none focus:border-kinetic-ink transition-colors"
                    />
                  </div>

                  {amountError && (
                    <p className="text-xs text-rose-600 dark:text-rose-400">
                      {amountError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full h-11 px-4 rounded-xl bg-kinetic-ink text-kinetic-bg text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity tabular-nums cursor-pointer"
                  >
                    <KineticIcon
                      id="gift"
                      size={15}
                      strokeWidth={1.8}
                      radius={2.5}
                    />
                    <span>
                      Support with $
                      {activeAmount > 0 ? activeAmount : '—'}
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Free ways to help */}
            <div className="mt-6 pt-5 border-t border-kinetic-border flex items-center justify-between gap-3">
              <span className="text-xs text-kinetic-muted">
                Want to help for free?
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleShare}
                  className="h-9 px-3 rounded-lg bg-kinetic-bg border border-kinetic-border text-xs font-semibold text-kinetic-ink inline-flex items-center gap-1.5 hover:border-kinetic-ink transition-colors whitespace-nowrap cursor-pointer"
                >
                  <KineticIcon
                    id="share"
                    size={13}
                    strokeWidth={1.8}
                    radius={2.5}
                  />
                  <span>Share Link</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('docs')}
                  className="h-9 px-3 rounded-lg text-xs font-semibold text-kinetic-muted hover:text-kinetic-ink transition-colors whitespace-nowrap cursor-pointer"
                >
                  Docs
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Accordion */}
        <section className="mt-16 sm:mt-20 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-kinetic-ink text-center mb-8">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-kinetic-border border-t border-b border-kinetic-border">
            {FAQS.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full py-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-kinetic-ink cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <KineticIcon
                      id={isOpen ? 'minus' : 'plus'}
                      size={16}
                      strokeWidth={1.7}
                      radius={2.5}
                      className="text-kinetic-muted shrink-0"
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-4 text-xs sm:text-sm text-kinetic-muted leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
