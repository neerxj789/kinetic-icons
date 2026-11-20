import { useMemo, useState } from 'react';
import {
  CATEGORIES,
  DEFAULT_CORNER_RADIUS,
  DEFAULT_STROKE_WIDTH,
  ICONS_CATALOG,
  ICON_MAP,
  renderIconSvg,
  toPascalCase,
  type CategoryFilter,
  type IconCategory,
} from '../data/icons';
import { toDartIdentifier } from '../lib/flutter/generateDart';
import { KineticIcon } from './KineticIcon';
import { SiteHeader, type SitePage } from './SiteHeader';

interface LandingPageProps {
  strokeWidth: number;
  onStrokeChange: (value: number) => void;
  cornerRadius: number;
  onRadiusChange: (value: number) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  isExportingZip: boolean;
  onDownloadZip: () => void;
  onNavigate: (page: SitePage) => void;
  onOpenStudio: (options?: {
    category?: CategoryFilter;
    iconId?: string;
  }) => void;
  onToast: (message: string) => void;
}

const HERO_SPECIMEN_IDS = [
  'home',
  'shield-check',
  'ai-spark',
  'palette',
  'message-round',
  'paperclip',
  'round-corner',
  'carousel',
  'double-check',
  'lock',
  'bell',
  'cloud',
  'github',
  'threads',
  'figma',
  'compass',
] as const;

const GEOMETRY_SHOWCASE_IDS = [
  'shield-check',
  'home',
  'arrow-up-right',
  'ai-spark',
  'paperclip',
] as const;

const RADIUS_STOPS = [
  { value: 0, label: 'Sharp' },
  { value: 1.25, label: 'Subtle' },
  { value: 2.5, label: 'Default' },
  { value: 4.0, label: 'Soft' },
] as const;

const FRAMEWORK_TABS = [
  { id: 'react', label: 'React / Next.js' },
  { id: 'web', label: 'Vanilla JS / HTML' },
  { id: 'flutter', label: 'Flutter' },
  { id: 'core', label: 'Core TS' },
] as const;

type FrameworkTab = (typeof FRAMEWORK_TABS)[number]['id'];

const FRAMEWORK_SAMPLE_IDS = [
  'home',
  'shield-check',
  'cloud',
  'palette',
  'paperclip',
] as const;

async function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fallback below
    }
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export function LandingPage({
  strokeWidth,
  onStrokeChange,
  cornerRadius,
  onRadiusChange,
  isDark,
  onToggleTheme,
  isExportingZip,
  onDownloadZip,
  onNavigate,
  onOpenStudio,
  onToast,
}: LandingPageProps) {
  const [geometryIconId, setGeometryIconId] = useState<string>('shield-check');
  const [frameworkTab, setFrameworkTab] = useState<FrameworkTab>('react');
  const [frameworkIconId, setFrameworkIconId] = useState<string>('home');

  const categorySummaries = useMemo(() => {
    const iconCategories = CATEGORIES.filter(
      (c): c is IconCategory => c !== 'All Icons'
    );
    return iconCategories.map((cat) => {
      const icons = ICONS_CATALOG.filter((i) => i.category === cat);
      return {
        category: cat,
        count: icons.length,
        previewIds: icons.slice(0, 5).map((i) => i.id),
      };
    });
  }, []);

  const frameworkSnippet = useMemo(() => {
    const pascal = toPascalCase(frameworkIconId);
    const dartIdent = toDartIdentifier(frameworkIconId);
    const iconDef = ICON_MAP[frameworkIconId] ?? ICONS_CATALOG[0];
    const strokeStr = strokeWidth.toFixed(1).replace(/\.0$/, '');
    const radiusStr = cornerRadius.toFixed(1).replace(/\.0$/, '');

    switch (frameworkTab) {
      case 'react':
        return `import { ${pascal} } from 'kinetic-ui-icons/react';

export function ActionButton() {
  return (
    <button type="button" className="inline-flex items-center gap-2 text-blue-600">
      {/* Inherits CSS color automatically, or pass color="#2563EB" directly */}
      <${pascal} size={20} strokeWidth={${strokeStr}} radius={${radiusStr}} />
      <span>Continue</span>
    </button>
  );
}`;
      case 'web':
        return `<!-- Custom Web Component (HTML, Vue, Svelte, Astro) -->
<kinetic-icon
  name="${frameworkIconId}"
  size="24"
  stroke="${strokeStr}"
  radius="${radiusStr}"
  color="currentColor"
></kinetic-icon>

<script type="module">
  import { createIcons } from 'kinetic-ui-icons/web';
  createIcons();
</script>`;
      case 'flutter':
        return `import 'package:flutter/material.dart';
import 'package:kinetic_icons/kinetic_icons.dart';

class ToolbarItem extends StatelessWidget {
  const ToolbarItem({super.key});

  @override
  Widget build(BuildContext context) {
    return const KineticIcon(
      KineticIcons.${dartIdent},
      size: 24,
      color: Color(0xFF111113),
    );
  }
}`;
      case 'core': {
        const sampleSvg = renderIconSvg(iconDef, {
          size: 24,
          stroke: strokeWidth,
          radius: cornerRadius,
          color: 'currentColor',
        });
        const camelExport =
          pascal.charAt(0).toLowerCase() + pascal.slice(1) + 'Icon';
        return `import { ${camelExport}, renderIconSvg } from 'kinetic-ui-icons/core';

const svg = renderIconSvg(${camelExport}, {
  size: 24,
  stroke: ${strokeStr},
  radius: ${radiusStr},
  color: 'currentColor',
});

// Output (${sampleSvg.length} bytes, zero runtime dependencies)`;
      }
    }
  }, [frameworkTab, frameworkIconId, strokeWidth, cornerRadius]);

  const handleCopyInstall = async () => {
    await copyToClipboard('npm install kinetic-ui-icons');
    onToast('Copied install command to clipboard!');
  };

  const handleCopyFrameworkSnippet = async () => {
    await copyToClipboard(frameworkSnippet);
    onToast('Copied code snippet to clipboard!');
  };

  const handleResetDemo = () => {
    onStrokeChange(DEFAULT_STROKE_WIDTH);
    onRadiusChange(DEFAULT_CORNER_RADIUS);
  };

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden bg-kinetic-bg text-kinetic-ink scroll-smooth">
      <SiteHeader
        activePage="landing"
        onNavigate={onNavigate}
        onOpenStudio={() => onOpenStudio()}
        onDownloadZip={onDownloadZip}
        isDark={isDark}
        onToggleTheme={onToggleTheme}
      />

      <main id="top">
        {/* CENTERED HERO SECTION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2.2rem,5vw,3.65rem)] font-bold tracking-tight leading-[1.08] text-kinetic-ink [text-wrap:balance]">
              Icons crafted for modern interfaces.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-kinetic-muted leading-relaxed max-w-2xl mx-auto">
              An original monoline icon library with smooth continuous-curvature
              corners. Tune stroke weight, corner radius, and color live—then
              ship directly to React, Next.js, HTML, and Flutter.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onOpenStudio()}
                className="h-11 px-6 rounded-xl bg-kinetic-ink text-kinetic-bg text-sm font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Browse {ICONS_CATALOG.length} Icons</span>
                <KineticIcon
                  id="arrow-right"
                  size={16}
                  strokeWidth={1.8}
                  radius={2.5}
                  color="var(--kinetic-bg)"
                />
              </button>

              <button
                type="button"
                onClick={onDownloadZip}
                disabled={isExportingZip}
                className="h-11 px-6 rounded-xl bg-kinetic-card border border-kinetic-border text-kinetic-ink text-sm font-semibold inline-flex items-center justify-center gap-2 hover:border-kinetic-ink transition-colors disabled:opacity-60 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <KineticIcon
                  id="download"
                  size={16}
                  strokeWidth={1.6}
                  radius={2.5}
                />
                <span>
                  {isExportingZip ? 'Packing Archive...' : 'Download ZIP'}
                </span>
              </button>
            </div>

            {/* Clean Centered Install Command */}
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-kinetic-card border border-kinetic-border text-xs max-w-full">
              <span className="font-medium text-kinetic-muted select-text truncate">
                npm install kinetic-ui-icons
              </span>
              <span className="w-px h-3.5 bg-kinetic-border shrink-0" />
              <button
                type="button"
                onClick={handleCopyInstall}
                className="font-semibold text-kinetic-ink hover:opacity-75 transition-opacity inline-flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <KineticIcon
                  id="copy"
                  size={13}
                  strokeWidth={1.6}
                  radius={2.5}
                />
                <span>Copy</span>
              </button>
            </div>
          </div>

          {/* CENTERED FULL-WIDTH LIVE SPECIMEN SHOWCASE */}
          <div className="mt-12 sm:mt-14 rounded-2xl bg-kinetic-card border border-kinetic-border p-4 sm:p-6">
            {/* Compact Live Controls Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-kinetic-border">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-kinetic-muted">
                <span className="font-semibold text-kinetic-ink">
                  Live Interactive Specimen
                </span>
                <span aria-hidden="true">·</span>
                <span>Drag sliders or click any icon to inspect</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2.5 text-xs tabular-nums">
                  <span className="text-kinetic-muted font-medium whitespace-nowrap">
                    Stroke
                  </span>
                  <input
                    type="range"
                    min="0.75"
                    max="3.0"
                    step="0.25"
                    value={strokeWidth}
                    onChange={(e) =>
                      onStrokeChange(parseFloat(e.target.value))
                    }
                    className="flex-1 md:w-24"
                    aria-label="Specimen stroke weight"
                  />
                  <span className="w-11 text-right font-semibold text-kinetic-ink">
                    {strokeWidth.toFixed(2)}px
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-xs tabular-nums">
                  <span className="text-kinetic-muted font-medium whitespace-nowrap">
                    Radius
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="4.0"
                    step="0.25"
                    value={cornerRadius}
                    onChange={(e) =>
                      onRadiusChange(parseFloat(e.target.value))
                    }
                    className="flex-1 md:w-24"
                    aria-label="Specimen corner radius"
                  />
                  <span className="w-11 text-right font-semibold text-kinetic-ink">
                    {cornerRadius.toFixed(2)}px
                  </span>
                </div>

                {(strokeWidth !== DEFAULT_STROKE_WIDTH ||
                  cornerRadius !== DEFAULT_CORNER_RADIUS) && (
                  <button
                    type="button"
                    onClick={handleResetDemo}
                    className="text-xs font-medium text-kinetic-muted hover:text-kinetic-ink underline underline-offset-2 text-left md:text-right whitespace-nowrap cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Responsive 2x8 / 4x4 / 8x2 Hairline Specimen Grid */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-kinetic-border rounded-xl overflow-hidden border border-kinetic-border">
              {HERO_SPECIMEN_IDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => onOpenStudio({ iconId: id })}
                  title={`Inspect ${id}`}
                  className="group bg-kinetic-bg hover:bg-kinetic-cardHover transition-colors flex flex-col items-center justify-center gap-2 py-5 px-2 cursor-pointer"
                >
                  <span className="transition-transform duration-150 group-hover:scale-110">
                    <KineticIcon
                      id={id}
                      size={24}
                      strokeWidth={strokeWidth}
                      radius={cornerRadius}
                    />
                  </span>
                  <span className="text-[11px] font-medium text-kinetic-muted group-hover:text-kinetic-ink transition-colors truncate max-w-full">
                    {id}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* COMPACT METRIC STRIP */}
          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-kinetic-border text-center">
            <div>
              <dt className="text-xs text-kinetic-muted">Original Icons</dt>
              <dd className="mt-1 text-xl font-bold tracking-tight text-kinetic-ink tabular-nums">
                {ICONS_CATALOG.length}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-kinetic-muted">Core Dependencies</dt>
              <dd className="mt-1 text-xl font-bold tracking-tight text-kinetic-ink tabular-nums">
                0 KB
              </dd>
            </div>
            <div>
              <dt className="text-xs text-kinetic-muted">Tree-Shaking</dt>
              <dd className="mt-1 text-xl font-bold tracking-tight text-kinetic-ink">
                ESM &amp; CJS
              </dd>
            </div>
            <div>
              <dt className="text-xs text-kinetic-muted">Supported Targets</dt>
              <dd className="mt-1 text-xl font-bold tracking-tight text-kinetic-ink tabular-nums">
                4 Runtimes
              </dd>
            </div>
          </dl>
        </section>

        {/* SECTION 01 — CONTINUOUS-CURVATURE GEOMETRY PROOF */}
        <section
          id="geometry"
          className="border-t border-kinetic-border py-16 sm:py-24"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-medium text-kinetic-muted tabular-nums mb-3">
                01 · Continuous-Curvature Engine
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-kinetic-ink [text-wrap:balance]">
                Balanced curves at every corner radius.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-kinetic-muted leading-relaxed">
                Kinetic evaluates angle-weighted cubic Bezier fillets and shaft
                pullbacks on a 24×24 optical grid—keeping acute vertices crisp
                and proportions consistent from 0.0px to 4.0px.
              </p>
            </div>

            <div className="mt-10 rounded-2xl bg-kinetic-card border border-kinetic-border p-4 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-sm font-semibold text-kinetic-ink">
                  Radius Progression Inspector
                </span>
                <div className="flex flex-wrap items-center gap-1 p-1 bg-kinetic-bg border border-kinetic-border rounded-xl">
                  {GEOMETRY_SHOWCASE_IDS.map((id) => {
                    const active = geometryIconId === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setGeometryIconId(id)}
                        className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          active
                            ? 'bg-kinetic-ink text-kinetic-bg'
                            : 'text-kinetic-muted hover:text-kinetic-ink'
                        }`}
                      >
                        {id}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-kinetic-border rounded-xl overflow-hidden border border-kinetic-border">
                {RADIUS_STOPS.map((stop) => (
                  <div
                    key={stop.value}
                    className="bg-kinetic-bg p-5 sm:p-6 flex flex-col items-center gap-3"
                  >
                    <div className="w-24 h-24 rounded-lg keyline-grid flex items-center justify-center">
                      <KineticIcon
                        id={geometryIconId}
                        size={44}
                        strokeWidth={strokeWidth}
                        radius={stop.value}
                      />
                    </div>
                    <div className="text-center tabular-nums">
                      <div className="text-xs font-semibold text-kinetic-ink">
                        {stop.value.toFixed(1)}px
                      </div>
                      <div className="text-[11px] text-kinetic-muted">
                        {stop.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-kinetic-muted tabular-nums">
                <span>
                  Squircle tension k = 0.58 · Max segment clamp 38% · Next.js
                  RSC compatible
                </span>
                <button
                  type="button"
                  onClick={() => onOpenStudio({ iconId: geometryIconId })}
                  className="font-semibold text-kinetic-ink hover:opacity-75 transition-opacity inline-flex items-center gap-1 whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
                >
                  <span>Inspect {geometryIconId} in Studio</span>
                  <KineticIcon
                    id="arrow-up-right"
                    size={14}
                    strokeWidth={1.7}
                    radius={2.5}
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02 — MULTI-FRAMEWORK CODE INTEGRATION */}
        <section
          id="frameworks"
          className="border-t border-kinetic-border py-16 sm:py-24"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-medium text-kinetic-muted tabular-nums mb-3">
                02 · Multi-Framework Ready
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-kinetic-ink [text-wrap:balance]">
                One library for React, Next.js, HTML, and Flutter.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-kinetic-muted leading-relaxed">
                A zero-dependency TypeScript core powers tree-shakeable React
                Server Components, a native{' '}
                <span className="text-kinetic-ink font-medium">
                  &lt;kinetic-icon&gt;
                </span>{' '}
                Web Component, and a ready-to-paste Dart class for{' '}
                <span className="text-kinetic-ink font-medium">
                  flutter_svg
                </span>
                .
              </p>
            </div>

            {/* Centered Icon Picker */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {FRAMEWORK_SAMPLE_IDS.map((id) => {
                const active = frameworkIconId === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setFrameworkIconId(id)}
                    className={`h-10 px-3.5 rounded-xl border text-xs font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-kinetic-ink text-kinetic-bg border-kinetic-ink'
                        : 'bg-kinetic-card text-kinetic-ink border-kinetic-border hover:border-kinetic-ink'
                    }`}
                  >
                    <KineticIcon
                      id={id}
                      size={15}
                      strokeWidth={1.6}
                      radius={cornerRadius}
                      color={active ? 'var(--kinetic-bg)' : 'currentColor'}
                    />
                    <span>{id}</span>
                  </button>
                );
              })}
            </div>

            {/* Centered Code Preview Block */}
            <div className="mt-5 rounded-2xl bg-kinetic-card border border-kinetic-border overflow-hidden">
              <div className="px-4 py-3 border-b border-kinetic-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1 p-1 bg-kinetic-bg border border-kinetic-border rounded-xl">
                  {FRAMEWORK_TABS.map((tab) => {
                    const active = frameworkTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setFrameworkTab(tab.id)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          active
                            ? 'bg-kinetic-ink text-kinetic-bg'
                            : 'text-kinetic-muted hover:text-kinetic-ink'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={handleCopyFrameworkSnippet}
                  className="h-9 px-3 rounded-lg bg-kinetic-bg border border-kinetic-border text-xs font-semibold text-kinetic-ink hover:border-kinetic-ink transition-colors inline-flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
                >
                  <KineticIcon
                    id="copy"
                    size={13}
                    strokeWidth={1.6}
                    radius={2.5}
                  />
                  <span>Copy Code</span>
                </button>
              </div>

              <pre className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed text-kinetic-ink overflow-x-auto whitespace-pre select-text">
                <code>{frameworkSnippet}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* SECTION 03 — CATEGORY DIRECTORY */}
        <section
          id="catalog"
          className="border-t border-kinetic-border py-16 sm:py-24"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-medium text-kinetic-muted tabular-nums mb-3">
                03 · Complete Catalog
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-kinetic-ink [text-wrap:balance]">
                Nine focused categories, built for product UI.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-kinetic-muted leading-relaxed">
                Select any category below to jump straight into the studio with
                live search, custom colors, and SVG/JSX/Flutter export.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categorySummaries.map((item) => (
                <button
                  key={item.category}
                  type="button"
                  onClick={() => onOpenStudio({ category: item.category })}
                  className="group text-left rounded-2xl bg-kinetic-card hover:bg-kinetic-cardHover border border-kinetic-border hover:border-kinetic-ink/40 transition-colors p-5 flex flex-col justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-semibold text-kinetic-ink">
                      {item.category}
                    </span>
                    <span className="text-xs text-kinetic-muted tabular-nums">
                      {item.count} icons
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-4 border-t border-kinetic-border">
                    {item.previewIds.map((iconId) => (
                      <div
                        key={iconId}
                        className="w-9 h-9 flex items-center justify-center text-kinetic-ink transition-transform duration-150 group-hover:scale-110"
                      >
                        <KineticIcon
                          id={iconId}
                          size={21}
                          strokeWidth={strokeWidth}
                          radius={cornerRadius}
                        />
                      </div>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CENTERED CLOSING CONVERSION BAND */}
        <section className="border-t border-kinetic-border py-16 sm:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-kinetic-ink [text-wrap:balance]">
              Start customizing in the studio, or download the full pack.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-kinetic-muted leading-relaxed">
              Export all {ICONS_CATALOG.length} SVGs and the generated Flutter
              Dart bundle baked at your exact stroke weight (
              {strokeWidth.toFixed(1)}px) and corner radius (
              {cornerRadius.toFixed(1)}px).
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onOpenStudio()}
                className="h-11 px-6 rounded-xl bg-kinetic-ink text-kinetic-bg text-sm font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Open Kinetic Studio</span>
                <KineticIcon
                  id="arrow-right"
                  size={16}
                  strokeWidth={1.8}
                  radius={2.5}
                  color="var(--kinetic-bg)"
                />
              </button>

              <button
                type="button"
                onClick={onDownloadZip}
                disabled={isExportingZip}
                className="h-11 px-6 rounded-xl bg-kinetic-card border border-kinetic-border text-kinetic-ink text-sm font-semibold inline-flex items-center justify-center gap-2 hover:border-kinetic-ink transition-colors disabled:opacity-60 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <KineticIcon
                  id="download"
                  size={16}
                  strokeWidth={1.6}
                  radius={2.5}
                />
                <span>
                  {isExportingZip ? 'Packing Archive...' : 'Download ZIP'}
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET FOOTER */}
      <footer className="border-t border-kinetic-border py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-kinetic-muted text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 tabular-nums">
            <span className="font-semibold text-kinetic-ink">Kinetic</span>
            <span aria-hidden="true">·</span>
            <span>{ICONS_CATALOG.length} Icons</span>
            <span aria-hidden="true">·</span>
            <span>MIT License</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => onNavigate('docs')}
              className="hover:text-kinetic-ink transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Documentation
            </button>
            <button
              type="button"
              onClick={() => onNavigate('pricing')}
              className="hover:text-kinetic-ink transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Pricing
            </button>
            <button
              type="button"
              onClick={() => onOpenStudio()}
              className="hover:text-kinetic-ink transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Icon Studio
            </button>
            <button
              type="button"
              onClick={onDownloadZip}
              className="hover:text-kinetic-ink transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Download ZIP
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
