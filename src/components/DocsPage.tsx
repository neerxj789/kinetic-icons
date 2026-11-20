import { useMemo, useState } from 'react';
import {
  DEFAULT_CORNER_RADIUS,
  DEFAULT_STROKE_WIDTH,
  ICONS_CATALOG,
  PRESET_COLORS,
} from '../data/icons';
import {
  buildAgentPrompt,
  type AgentPromptTarget,
} from '../utils/agentPrompt';
import { KineticIcon } from './KineticIcon';
import { SiteHeader, type SitePage } from './SiteHeader';

interface DocsPageProps {
  strokeWidth: number;
  cornerRadius: number;
  isDark: boolean;
  onToggleTheme: () => void;
  onNavigate: (page: SitePage) => void;
  onOpenStudio: () => void;
  onDownloadZip: () => void;
  onCopyAgentPrompt: (target?: AgentPromptTarget) => void;
  onToast: (message: string) => void;
}

const PROMPT_TARGETS: Array<{ id: AgentPromptTarget; label: string }> = [
  { id: 'all', label: 'All Frameworks' },
  { id: 'react', label: 'React / Next.js' },
  { id: 'web', label: 'HTML / JS' },
  { id: 'flutter', label: 'Flutter' },
];

const DOC_SECTIONS = [
  { id: 'agent-prompt', label: 'AI Agent Prompt' },
  { id: 'installation', label: 'Installation' },
  { id: 'react', label: 'React & Next.js' },
  { id: 'color', label: 'Colors & Styling' },
  { id: 'geometry', label: 'Stroke & Radius' },
  { id: 'web', label: 'Vanilla JS & HTML' },
  { id: 'core', label: 'Zero-Dep Core' },
  { id: 'flutter', label: 'Flutter' },
] as const;

async function copyText(text: string): Promise<void> {
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

function CodeBlock({
  title,
  code,
  onCopy,
}: {
  title: string;
  code: string;
  onCopy: (text: string, label: string) => void;
}) {
  return (
    <div className="rounded-2xl bg-kinetic-card border border-kinetic-border overflow-hidden">
      <div className="px-4 py-2.5 border-b border-kinetic-border flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-kinetic-muted">{title}</span>
        <button
          type="button"
          onClick={() => onCopy(code, title)}
          className="text-xs font-semibold text-kinetic-ink hover:opacity-75 transition-opacity inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
        >
          <KineticIcon id="copy" size={13} strokeWidth={1.6} radius={2.5} />
          <span>Copy</span>
        </button>
      </div>
      <pre className="p-4 text-xs sm:text-[13px] leading-relaxed text-kinetic-ink overflow-x-auto whitespace-pre select-text">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function DocsPage({
  strokeWidth,
  cornerRadius,
  isDark,
  onToggleTheme,
  onNavigate,
  onOpenStudio,
  onDownloadZip,
  onCopyAgentPrompt,
  onToast,
}: DocsPageProps) {
  const [promptTarget, setPromptTarget] = useState<AgentPromptTarget>('all');
  const [showPromptPreview, setShowPromptPreview] = useState(false);
  const [demoColor, setDemoColor] = useState<string>('#2563EB');

  const agentPromptText = useMemo(
    () => buildAgentPrompt(promptTarget),
    [promptTarget]
  );

  const handleCopySnippet = async (text: string, label: string) => {
    await copyText(text);
    onToast(`Copied ${label} snippet!`);
  };

  const dartHex = `0xFF${demoColor.replace('#', '').toUpperCase()}`;

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden bg-kinetic-bg text-kinetic-ink scroll-smooth">
      <SiteHeader
        activePage="docs"
        onNavigate={onNavigate}
        onOpenStudio={onOpenStudio}
        onDownloadZip={onDownloadZip}
        isDark={isDark}
        onToggleTheme={onToggleTheme}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Page Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium text-kinetic-muted tabular-nums mb-3">
            Documentation · {ICONS_CATALOG.length} Icons · Multi-Framework Guide
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-kinetic-ink [text-wrap:balance]">
            Everything you need to use Kinetic Icons.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-kinetic-muted leading-relaxed">
            Install once and render icons consistently across React, Next.js
            Server Components, Vanilla JS, HTML, Vue, Svelte, and Flutter—with
            full control over color, stroke weight, and corner radius.
          </p>
        </div>

        {/* TOP FEATURE: COPY AI AGENT PROMPT */}
        <section
          id="agent-prompt"
          className="mt-8 rounded-2xl bg-kinetic-card border border-kinetic-border p-5 sm:p-6 space-y-4"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm font-semibold text-kinetic-ink">
                <KineticIcon
                  id="ai-spark"
                  size={17}
                  strokeWidth={1.7}
                  radius={2.5}
                />
                <span>Copy AI Agent Prompt</span>
              </div>
              <p className="text-xs sm:text-sm text-kinetic-muted max-w-xl leading-relaxed">
                Building with an AI coding assistant? Paste this prompt into
                your workflow so your agent knows the exact imports, color &amp;
                radius props, and all {ICONS_CATALOG.length} official icon IDs.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onCopyAgentPrompt(promptTarget)}
              className="h-10 px-4 rounded-xl bg-kinetic-ink text-kinetic-bg text-xs font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer"
            >
              <KineticIcon
                id="copy"
                size={14}
                strokeWidth={1.7}
                radius={2.5}
                color="var(--kinetic-bg)"
              />
              <span>Copy Agent Prompt</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-kinetic-border">
            <div className="flex flex-wrap items-center gap-1 p-1 bg-kinetic-bg border border-kinetic-border rounded-xl">
              {PROMPT_TARGETS.map((t) => {
                const active = promptTarget === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setPromptTarget(t.id)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-kinetic-ink text-kinetic-bg'
                        : 'text-kinetic-muted hover:text-kinetic-ink'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setShowPromptPreview((prev) => !prev)}
              className="text-xs font-semibold text-kinetic-muted hover:text-kinetic-ink transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{showPromptPreview ? 'Hide prompt' : 'Preview prompt'}</span>
              <KineticIcon
                id={showPromptPreview ? 'chevron-up' : 'chevron-down'}
                size={14}
                strokeWidth={1.7}
                radius={2.5}
              />
            </button>
          </div>

          {showPromptPreview && (
            <pre className="p-4 rounded-xl bg-kinetic-bg border border-kinetic-border text-xs leading-relaxed text-kinetic-ink max-h-72 overflow-auto whitespace-pre-wrap select-text">
              <code>{agentPromptText}</code>
            </pre>
          )}
        </section>

        {/* DOCS BODY: STICKY TOC + CONTENT */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Desktop On-This-Page Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-1.5">
            <p className="text-xs font-semibold text-kinetic-muted mb-3">
              On this page
            </p>
            {DOC_SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="block py-1.5 text-sm text-kinetic-muted hover:text-kinetic-ink transition-colors"
              >
                {sec.label}
              </a>
            ))}
          </aside>

          {/* Main Documentation Articles */}
          <div className="lg:col-span-9 space-y-14 min-w-0">
            {/* 1. Installation */}
            <section id="installation" className="space-y-4 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-kinetic-ink">
                1. Installation
              </h2>
              <p className="text-sm text-kinetic-muted leading-relaxed">
                Install the npm package for React, Next.js, TypeScript, and Web
                Components—or download the ZIP bundle directly from Kinetic
                Studio for standalone SVGs and Flutter.
              </p>
              <CodeBlock
                title="Terminal"
                code={`npm install kinetic-ui-icons\n# or\npnpm add kinetic-ui-icons`}
                onCopy={handleCopySnippet}
              />
            </section>

            {/* 2. React & Next.js */}
            <section
              id="react"
              className="space-y-4 pt-8 border-t border-kinetic-border scroll-mt-24"
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-kinetic-ink">
                2. React &amp; Next.js (Server Components)
              </h2>
              <p className="text-sm text-kinetic-muted leading-relaxed">
                Every icon is exported as a tree-shakeable PascalCase{' '}
                <code className="text-kinetic-ink font-medium">forwardRef</code>{' '}
                component with zero client-only hooks. You can render them
                directly inside Next.js App Router Server Components without{' '}
                <code className="text-kinetic-ink font-medium">
                  &apos;use client&apos;
                </code>
                .
              </p>
              <CodeBlock
                title="React / Next.js"
                code={`import { Home, ShieldCheck, Cloud } from 'kinetic-ui-icons/react';

export default function HeaderNav() {
  return (
    <nav className="flex items-center gap-4">
      <Home />
      <ShieldCheck size={20} strokeWidth={1.75} radius={2.5} />
      <Cloud size={24} className="text-blue-600" />
    </nav>
  );
}`}
                onCopy={handleCopySnippet}
              />

              {/* Props Reference Table */}
              <div className="rounded-2xl border border-kinetic-border overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-kinetic-card border-b border-kinetic-border text-kinetic-muted">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Prop</th>
                      <th className="py-3 px-4 font-semibold">Type</th>
                      <th className="py-3 px-4 font-semibold">Default</th>
                      <th className="py-3 px-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-kinetic-border text-kinetic-ink">
                    <tr>
                      <td className="py-3 px-4 font-semibold">size</td>
                      <td className="py-3 px-4 text-kinetic-muted">
                        number | string
                      </td>
                      <td className="py-3 px-4 tabular-nums">24</td>
                      <td className="py-3 px-4 text-kinetic-muted">
                        Width &amp; height in px or CSS unit
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">strokeWidth</td>
                      <td className="py-3 px-4 text-kinetic-muted">
                        number | string
                      </td>
                      <td className="py-3 px-4 tabular-nums">
                        {DEFAULT_STROKE_WIDTH}
                      </td>
                      <td className="py-3 px-4 text-kinetic-muted">
                        Recommended 1.0 – 2.5
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">radius</td>
                      <td className="py-3 px-4 text-kinetic-muted">number</td>
                      <td className="py-3 px-4 tabular-nums">
                        {DEFAULT_CORNER_RADIUS}
                      </td>
                      <td className="py-3 px-4 text-kinetic-muted">
                        0.0 (sharp) to 4.0 (soft rounded)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">color</td>
                      <td className="py-3 px-4 text-kinetic-muted">string</td>
                      <td className="py-3 px-4">&quot;currentColor&quot;</td>
                      <td className="py-3 px-4 text-kinetic-muted">
                        Hex, RGB, CSS variable, or inherits text color
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">...rest</td>
                      <td className="py-3 px-4 text-kinetic-muted">
                        SVGProps
                      </td>
                      <td className="py-3 px-4">—</td>
                      <td className="py-3 px-4 text-kinetic-muted">
                        className, aria-label, style, ref, onClick
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. Colors & Styling */}
            <section
              id="color"
              className="space-y-4 pt-8 border-t border-kinetic-border scroll-mt-24"
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-kinetic-ink">
                3. Colors &amp; Styling
              </h2>
              <p className="text-sm text-kinetic-muted leading-relaxed">
                Color works in <strong className="text-kinetic-ink">both ways</strong>:
                you can pass a <code className="text-kinetic-ink font-medium">color</code>{' '}
                prop directly inside the icon code, or omit it and let the icon
                inherit CSS/Tailwind text color automatically via{' '}
                <code className="text-kinetic-ink font-medium">
                  stroke=&quot;currentColor&quot;
                </code>
                .
              </p>

              {/* Interactive Live Color Demo */}
              <div className="rounded-2xl bg-kinetic-card border border-kinetic-border p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-kinetic-bg border border-kinetic-border flex items-center justify-center">
                      <KineticIcon
                        id="shield-check"
                        size={26}
                        strokeWidth={strokeWidth}
                        radius={cornerRadius}
                        color={demoColor}
                      />
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-kinetic-ink">
                        Live Color Preview
                      </div>
                      <div className="text-kinetic-muted tabular-nums">
                        stroke=&quot;{demoColor}&quot;
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {PRESET_COLORS.map((hex) => (
                      <button
                        key={hex}
                        type="button"
                        onClick={() => setDemoColor(hex)}
                        aria-label={`Preview color ${hex}`}
                        className={`w-7 h-7 rounded-full border transition-transform hover:scale-110 cursor-pointer ${
                          demoColor === hex
                            ? 'ring-2 ring-kinetic-ink ring-offset-2 ring-offset-kinetic-card border-transparent'
                            : 'border-black/15'
                        }`}
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </div>

                <CodeBlock
                  title="Applying Color (Both Methods Supported)"
                  code={`// Method 1: Explicit color prop directly on the icon
<ShieldCheck size={24} color="${demoColor}" />

// Method 2: Inherit CSS / Tailwind text color (default: currentColor)
<button className="text-blue-600 hover:text-blue-700">
  <ShieldCheck size={24} />
</button>

// Web Component
<kinetic-icon name="shield-check" color="${demoColor}"></kinetic-icon>

// Flutter
KineticIcon(KineticIcons.shieldCheck, color: const Color(${dartHex}))`}
                  onCopy={handleCopySnippet}
                />
              </div>
            </section>

            {/* 4. Stroke & Corner Radius */}
            <section
              id="geometry"
              className="space-y-4 pt-8 border-t border-kinetic-border scroll-mt-24"
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-kinetic-ink">
                4. Stroke Weight &amp; Corner Radius
              </h2>
              <p className="text-sm text-kinetic-muted leading-relaxed">
                Kinetic computes continuous-curvature cubic Bezier fillets on
                every vertex rather than scaling static paths. Setting{' '}
                <code className="text-kinetic-ink font-medium">radius={0}</code>{' '}
                switches caps and joins to crisp{' '}
                <code className="text-kinetic-ink font-medium">
                  square / miter
                </code>
                , while values above{' '}
                <code className="text-kinetic-ink font-medium">0.1</code>{' '}
                automatically switch to smooth{' '}
                <code className="text-kinetic-ink font-medium">
                  round / round
                </code>
                .
              </p>
              <CodeBlock
                title="Customizing Curve & Weight"
                code={`// Sharp architectural style
<Home strokeWidth={1.5} radius={0} />

// Kinetic balanced default
<Home strokeWidth={1.5} radius={2.5} />

// Soft bold UI style
<Home strokeWidth={2.0} radius={4.0} />`}
                onCopy={handleCopySnippet}
              />
            </section>

            {/* 5. Vanilla JS & HTML */}
            <section
              id="web"
              className="space-y-4 pt-8 border-t border-kinetic-border scroll-mt-24"
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-kinetic-ink">
                5. Vanilla JS, HTML, Vue &amp; Svelte
              </h2>
              <p className="text-sm text-kinetic-muted leading-relaxed">
                Import{' '}
                <code className="text-kinetic-ink font-medium">
                  kinetic-ui-icons/web
                </code>{' '}
                to register the native{' '}
                <code className="text-kinetic-ink font-medium">
                  &lt;kinetic-icon&gt;
                </code>{' '}
                custom element or auto-replace{' '}
                <code className="text-kinetic-ink font-medium">
                  [data-kinetic]
                </code>{' '}
                placeholders across any HTML page.
              </p>
              <CodeBlock
                title="HTML + ES Modules"
                code={`<!-- Option A: Web Component -->
<kinetic-icon name="star" size="24" stroke="1.5" radius="2.5" color="#2563EB"></kinetic-icon>

<!-- Option B: Declarative DOM replacement -->
<i data-kinetic="shopping-bag" data-size="24" data-stroke="1.5" data-radius="2.5"></i>

<script type="module">
  import { createIcons } from 'kinetic-ui-icons/web';
  createIcons();
</script>`}
                onCopy={handleCopySnippet}
              />
            </section>

            {/* 6. Zero-Dep Core */}
            <section
              id="core"
              className="space-y-4 pt-8 border-t border-kinetic-border scroll-mt-24"
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-kinetic-ink">
                6. Zero-Dependency Core (Node, Edge &amp; SSR)
              </h2>
              <p className="text-sm text-kinetic-muted leading-relaxed">
                Need clean SVG strings on the server, in emails, Canvas, or
                build scripts? Import individual tree-shakeable icon definitions
                from{' '}
                <code className="text-kinetic-ink font-medium">
                  kinetic-ui-icons/core
                </code>
                .
              </p>
              <CodeBlock
                title="TypeScript / Node"
                code={`import { homeIcon, renderIconSvg } from 'kinetic-ui-icons/core';

const svgMarkup = renderIconSvg(homeIcon, {
  size: 24,
  stroke: 1.5,
  radius: 2.5,
  color: '#111113',
});`}
                onCopy={handleCopySnippet}
              />
            </section>

            {/* 7. Flutter */}
            <section
              id="flutter"
              className="space-y-4 pt-8 border-t border-kinetic-border scroll-mt-24"
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-kinetic-ink">
                7. Flutter Integration
              </h2>
              <p className="text-sm text-kinetic-muted leading-relaxed">
                Download the ZIP bundle from Kinetic Studio—it includes a
                ready-to-paste{' '}
                <code className="text-kinetic-ink font-medium">
                  flutter/kinetic_icons.dart
                </code>{' '}
                file baked at your chosen stroke and corner radius, compatible
                with{' '}
                <code className="text-kinetic-ink font-medium">
                  flutter_svg
                </code>
                .
              </p>
              <CodeBlock
                title="Flutter (Dart)"
                code={`import 'package:flutter/material.dart';
import 'kinetic_icons.dart';

class ProfileRow extends StatelessWidget {
  const ProfileRow({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: const [
        // Inherits IconTheme.of(context).color automatically
        KineticIcon(KineticIcons.home),
        SizedBox(width: 12),
        // Explicit size & tint color
        KineticIcon(KineticIcons.star, size: 28, color: Color(0xFF2563EB)),
      ],
    );
  }
}`}
                onCopy={handleCopySnippet}
              />

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenStudio}
                  className="h-10 px-4 rounded-xl bg-kinetic-ink text-kinetic-bg text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Open Icon Studio
                </button>
                <button
                  type="button"
                  onClick={onDownloadZip}
                  className="h-10 px-4 rounded-xl bg-kinetic-card border border-kinetic-border text-kinetic-ink text-xs font-semibold hover:border-kinetic-ink transition-colors cursor-pointer"
                >
                  Download ZIP (SVGs + Flutter)
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
