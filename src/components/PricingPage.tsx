import { useState } from 'react';
import { ICONS_CATALOG } from '../data/icons';
import { KineticIcon } from './KineticIcon';
import { SiteHeader, type SitePage } from './SiteHeader';
import { DODO_CHECKOUT_URL, SupportCheckoutEmbed } from './SupportCheckout';

interface PricingPageProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onNavigate: (page: SitePage) => void;
  onOpenStudio: () => void;
  onDownloadZip: () => void;
  onToast: (message: string) => void;
}

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

        {/* Full-Width Free Forever Card */}
        <section className="mt-12 rounded-2xl bg-kinetic-card border-2 border-kinetic-ink p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-kinetic-muted">
                <span className="font-semibold text-kinetic-ink">
                  Kinetic Open Source
                </span>
                <span aria-hidden="true">·</span>
                <span>MIT License</span>
              </div>
              <div className="mt-3 flex items-baseline gap-2 tabular-nums">
                <span className="text-5xl sm:text-6xl font-bold tracking-tight text-kinetic-ink">
                  $0
                </span>
                <span className="text-sm font-medium text-kinetic-muted">
                  / free forever
                </span>
              </div>
              <p className="mt-2.5 text-sm text-kinetic-muted max-w-xl leading-relaxed">
                Full access to the entire library, live stroke and corner-radius
                controls, and multi-framework code exports from day one.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenStudio}
                className="h-11 px-5 rounded-xl bg-kinetic-ink text-kinetic-bg text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
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
          </div>

          <ul className="mt-7 pt-7 border-t border-kinetic-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3.5 text-xs sm:text-sm text-kinetic-ink">
            {INCLUDED_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <KineticIcon
                  id="check"
                  size={15}
                  strokeWidth={1.9}
                  radius={2.5}
                  className="mt-0.5 shrink-0 text-kinetic-ink"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Full-Width Support the Creator Embedded Checkout Card */}
        <section
          id="support"
          className="mt-8 rounded-2xl bg-kinetic-card border border-kinetic-border overflow-hidden"
        >
          <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-kinetic-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-kinetic-bg border border-kinetic-border inline-flex items-center justify-center text-kinetic-ink shrink-0">
                <KineticIcon
                  id="heart"
                  size={18}
                  strokeWidth={1.7}
                  radius={2.5}
                />
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-kinetic-ink">
                  Support the Creator
                </h2>
                <p className="text-xs sm:text-sm text-kinetic-muted">
                  100% optional · Independently designed and maintained in the
                  open.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleShare}
                className="h-9 px-3 rounded-xl bg-kinetic-bg border border-kinetic-border text-xs font-semibold text-kinetic-ink inline-flex items-center gap-1.5 hover:border-kinetic-ink transition-colors whitespace-nowrap cursor-pointer"
              >
                <KineticIcon
                  id="share"
                  size={13}
                  strokeWidth={1.8}
                  radius={2.5}
                />
                <span>Share Link</span>
              </button>
              <a
                href={DODO_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-3 rounded-xl bg-kinetic-bg border border-kinetic-border text-xs font-semibold text-kinetic-muted hover:text-kinetic-ink hover:border-kinetic-ink transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Open in new tab</span>
                <KineticIcon
                  id="external-link"
                  size={13}
                  strokeWidth={1.7}
                  radius={2.5}
                />
              </a>
            </div>
          </div>

          <SupportCheckoutEmbed className="h-[680px] sm:h-[740px]" />
        </section>

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
