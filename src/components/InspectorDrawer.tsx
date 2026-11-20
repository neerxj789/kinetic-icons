import { useState } from 'react';
import {
  ICON_MAP,
  getExportJsxString,
  getExportSvgString,
  toPascalCase,
} from '../data/icons';
import { toDartIdentifier } from '../lib/flutter/generateDart';
import { KineticIcon } from './KineticIcon';

const EXPORT_SIZES = [16, 20, 24, 32, 48] as const;
const SCALE_TEST_SIZES = [16, 20, 24, 32] as const;
const SNIPPET_TABS = [
  { id: 'svg', label: 'SVG' },
  { id: 'react', label: 'React' },
  { id: 'flutter', label: 'Flutter' },
  { id: 'web', label: 'Web' },
] as const;

type SnippetTab = (typeof SNIPPET_TABS)[number]['id'];

interface InspectorDrawerProps {
  selectedIconId: string | null;
  strokeWidth: number;
  onStrokeChange: (val: number) => void;
  cornerRadius: number;
  onRadiusChange: (val: number) => void;
  activeColor: string;
  displayColor: string;
  exportSize: number;
  onExportSizeChange: (size: number) => void;
  showGridOverlay: boolean;
  onToggleGridOverlay: () => void;
  onClose: () => void;
  onToast: (message: string) => void;
}

async function copyTextToClipboard(text: string): Promise<void> {
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

export function InspectorDrawer({
  selectedIconId,
  strokeWidth,
  onStrokeChange,
  cornerRadius,
  onRadiusChange,
  activeColor,
  displayColor,
  exportSize,
  onExportSizeChange,
  showGridOverlay,
  onToggleGridOverlay,
  onClose,
  onToast,
}: InspectorDrawerProps) {
  const [snippetTab, setSnippetTab] = useState<SnippetTab>('svg');
  const iconDef = selectedIconId ? ICON_MAP[selectedIconId] : null;
  const isOpen = Boolean(iconDef);

  const rawSvg = iconDef
    ? getExportSvgString(
        iconDef.id,
        exportSize,
        strokeWidth,
        cornerRadius,
        activeColor
      )
    : '';

  const hasCustomColor = activeColor.toLowerCase() !== '#111113';
  const flutterColorHex = `0xFF${activeColor.replace('#', '').toUpperCase()}`;

  const reactImportSnippet = iconDef
    ? `import { ${toPascalCase(iconDef.id)} } from 'kinetic-ui-icons/react';\n\n<${toPascalCase(iconDef.id)} size={${exportSize}} strokeWidth={${strokeWidth}} radius={${cornerRadius}}${hasCustomColor ? ` color="${activeColor}"` : ''} />`
    : '';

  const flutterUsageSnippet = iconDef
    ? `import 'package:kinetic_icons/kinetic_icons.dart';\n\nKineticIcon(KineticIcons.${toDartIdentifier(iconDef.id)}, size: ${exportSize}${hasCustomColor ? `, color: const Color(${flutterColorHex})` : ''})`
    : '';

  const webUsageSnippet = iconDef
    ? `<kinetic-icon name="${iconDef.id}" size="${exportSize}" stroke="${strokeWidth}" radius="${cornerRadius}"${hasCustomColor ? ` color="${activeColor}"` : ''}></kinetic-icon>`
    : '';

  const activeSnippet =
    snippetTab === 'react'
      ? reactImportSnippet
      : snippetTab === 'flutter'
        ? flutterUsageSnippet
        : snippetTab === 'web'
          ? webUsageSnippet
          : rawSvg;

  const handleDownloadSvg = () => {
    if (!iconDef) return;
    const svgText = getExportSvgString(
      iconDef.id,
      exportSize,
      strokeWidth,
      cornerRadius,
      activeColor
    );
    const blob = new Blob([svgText], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kinetic-${iconDef.id}-stroke-${strokeWidth}px.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onToast(`Downloaded kinetic-${iconDef.id}.svg`);
  };

  const handleCopySvg = async () => {
    if (!iconDef) return;
    const svgText = getExportSvgString(
      iconDef.id,
      exportSize,
      strokeWidth,
      cornerRadius,
      activeColor
    );
    await copyTextToClipboard(svgText);
    onToast('Copied SVG markup to clipboard!');
  };

  const handleCopyJsx = async () => {
    if (!iconDef) return;
    const jsxText = getExportJsxString(
      iconDef.id,
      exportSize,
      strokeWidth,
      cornerRadius,
      activeColor
    );
    await copyTextToClipboard(jsxText);
    onToast('Copied React JSX to clipboard!');
  };

  const handleCopyActiveSnippet = async () => {
    if (!iconDef || !activeSnippet) return;
    await copyTextToClipboard(activeSnippet);
    const label =
      snippetTab === 'react'
        ? 'React import usage'
        : snippetTab === 'flutter'
          ? 'Flutter usage'
          : snippetTab === 'web'
            ? 'Web Component markup'
            : 'SVG markup';
    onToast(`Copied ${label} to clipboard!`);
  };

  return (
    <>
      {/* BACKDROP */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        />
      )}

      {/* SLIDE-OVER INSPECTOR DRAWER */}
      <aside
        className={`fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[420px] bg-kinetic-bg border-l border-kinetic-border shadow-2xl flex flex-col transform transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="h-16 px-6 border-b border-kinetic-border flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <h2 className="text-lg font-bold tracking-tight text-kinetic-ink">
              {iconDef?.id ?? 'home'}
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-kinetic-pill text-[10px] font-semibold text-kinetic-muted uppercase tracking-wider border border-kinetic-border">
              {iconDef?.category ?? 'Essentials'}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-kinetic-muted hover:text-kinetic-ink hover:bg-kinetic-card transition-colors cursor-pointer"
            aria-label="Close inspector"
          >
            <KineticIcon id="close" size={20} strokeWidth={1.6} radius={2.5} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Main Large Preview Box */}
          <div
            className={`relative w-full h-48 rounded-2xl bg-kinetic-card border border-kinetic-border flex items-center justify-center overflow-hidden ${
              showGridOverlay ? 'keyline-grid' : ''
            }`}
          >
            <div className="transition-transform duration-150">
              {iconDef && (
                <KineticIcon
                  id={iconDef.id}
                  size={64}
                  strokeWidth={strokeWidth}
                  radius={cornerRadius}
                  color={displayColor}
                />
              )}
            </div>

            {/* Keyline Grid Overlay Button */}
            <button
              type="button"
              onClick={onToggleGridOverlay}
              className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-kinetic-bg/90 border border-kinetic-border text-[11px] font-medium text-kinetic-muted hover:text-kinetic-ink transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <KineticIcon
                id="dashboard"
                size={14}
                strokeWidth={1.6}
                radius={2.5}
              />
              <span>{showGridOverlay ? 'Grid On' : 'Grid Off'}</span>
            </button>
          </div>

          {/* Scale Comparison Row */}
          <div>
            <span className="text-[11px] font-semibold text-kinetic-muted uppercase tracking-wider block mb-2.5">
              Scale Test
            </span>
            <div className="p-3 bg-kinetic-card border border-kinetic-border rounded-xl flex items-center justify-between">
              {SCALE_TEST_SIZES.map((sz) => (
                <div key={sz} className="flex flex-col items-center gap-1.5">
                  <div className="flex items-center justify-center">
                    {iconDef && (
                      <KineticIcon
                        id={iconDef.id}
                        size={sz}
                        strokeWidth={strokeWidth}
                        radius={cornerRadius}
                        color={displayColor}
                      />
                    )}
                  </div>
                  <span className="text-[10px] font-medium text-kinetic-muted">
                    {sz}px
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Controls in Drawer */}
          <div className="space-y-4 pt-2 border-t border-kinetic-border">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-kinetic-muted uppercase tracking-wider">
                Parameters
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-kinetic-muted">Stroke</span>
                  <span className="font-semibold text-kinetic-ink">
                    {strokeWidth.toFixed(1)}px
                  </span>
                </div>
                <input
                  type="range"
                  min="0.75"
                  max="3.5"
                  step="0.25"
                  value={strokeWidth}
                  onChange={(e) => onStrokeChange(parseFloat(e.target.value))}
                  className="w-full"
                  aria-label="Drawer stroke width"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-kinetic-muted">Radius</span>
                  <span className="font-semibold text-kinetic-ink">
                    {cornerRadius.toFixed(1)}px
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4.0"
                  step="0.25"
                  value={cornerRadius}
                  onChange={(e) => onRadiusChange(parseFloat(e.target.value))}
                  className="w-full"
                  aria-label="Drawer corner radius"
                />
              </div>
            </div>

            {/* Size Export Selector */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-kinetic-muted font-medium">
                Export Size
              </span>
              <div className="flex items-center p-0.5 bg-kinetic-card border border-kinetic-border rounded-xl">
                {EXPORT_SIZES.map((sz) => {
                  const active = exportSize === sz;
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => onExportSizeChange(sz)}
                      className={`px-2 py-0.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                        active
                          ? 'bg-kinetic-bg text-kinetic-ink shadow-sm'
                          : 'text-kinetic-muted hover:text-kinetic-ink'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Export Actions */}
          <div className="space-y-2.5 pt-4 border-t border-kinetic-border">
            <button
              type="button"
              onClick={handleDownloadSvg}
              className="w-full h-11 rounded-xl bg-kinetic-ink text-kinetic-bg font-semibold text-xs flex items-center justify-center gap-2 transition-opacity hover:opacity-90 shadow-sm cursor-pointer"
            >
              <KineticIcon
                id="download"
                size={16}
                strokeWidth={1.6}
                radius={2.5}
                color="var(--kinetic-bg)"
              />
              <span>Download SVG</span>
            </button>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={handleCopySvg}
                className="h-10 rounded-xl bg-kinetic-card border border-kinetic-border text-kinetic-ink font-semibold text-xs flex items-center justify-center gap-1.5 hover:border-kinetic-ink transition-colors cursor-pointer"
              >
                <KineticIcon
                  id="copy"
                  size={14}
                  strokeWidth={1.6}
                  radius={2.5}
                />
                <span>Copy SVG</span>
              </button>
              <button
                type="button"
                onClick={handleCopyJsx}
                className="h-10 rounded-xl bg-kinetic-card border border-kinetic-border text-kinetic-ink font-semibold text-xs flex items-center justify-center gap-1.5 hover:border-kinetic-ink transition-colors cursor-pointer"
              >
                <KineticIcon
                  id="code"
                  size={14}
                  strokeWidth={1.6}
                  radius={2.5}
                />
                <span>Copy JSX</span>
              </button>
            </div>
          </div>

          {/* Multi-Framework Code Snippet Display (STRICT DM SANS) */}
          <div className="pt-2 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center p-0.5 bg-kinetic-card border border-kinetic-border rounded-xl">
                {SNIPPET_TABS.map((tab) => {
                  const active = snippetTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSnippetTab(tab.id)}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-colors cursor-pointer ${
                        active
                          ? 'bg-kinetic-bg text-kinetic-ink shadow-sm'
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
                onClick={handleCopyActiveSnippet}
                className="px-2.5 py-1 rounded-lg bg-kinetic-card border border-kinetic-border text-[11px] font-semibold text-kinetic-muted hover:text-kinetic-ink hover:border-kinetic-ink transition-colors flex items-center gap-1 cursor-pointer"
              >
                <KineticIcon
                  id="copy"
                  size={12}
                  strokeWidth={1.6}
                  radius={2.5}
                />
                <span>Copy</span>
              </button>
            </div>

            <div className="p-3 bg-kinetic-card border border-kinetic-border rounded-xl text-[11px] text-kinetic-ink leading-relaxed break-all whitespace-pre-wrap select-text selection:bg-kinetic-border">
              {activeSnippet}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
