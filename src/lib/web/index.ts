/**
 * Kinetic Icons — Web Component & Vanilla JS / HTML / Vue / Svelte / CDN Adapter
 *
 * Custom Element usage:
 *   <kinetic-icon name="home" size="24" stroke="1.5" radius="2.5" color="currentColor"></kinetic-icon>
 *
 * Declarative replacement usage:
 *   <i data-kinetic="home" data-size="24" data-stroke="1.5" data-radius="2.5"></i>
 *   <script type="module">
 *     import { createIcons } from 'kinetic-ui-icons/web';
 *     createIcons();
 *   </script>
 */

import {
  DEFAULT_COLOR,
  DEFAULT_CORNER_RADIUS,
  DEFAULT_SIZE,
  DEFAULT_STROKE_WIDTH,
  ICON_MAP,
  ICONS_CATALOG,
  renderIconSvg,
  type IconDefinition,
  type RenderIconOptions,
} from '../core';

export {
  DEFAULT_COLOR,
  DEFAULT_CORNER_RADIUS,
  DEFAULT_SIZE,
  DEFAULT_STROKE_WIDTH,
  ICON_MAP,
  ICONS_CATALOG,
  renderIconSvg,
};
export type { IconDefinition, RenderIconOptions };

export interface CreateIconsOptions {
  /** CSS selector for target placeholder elements. Defaults to `[data-kinetic]`. */
  selector?: string;
  /** Root container to query within. Defaults to `document`. */
  root?: ParentNode;
  /** Optional subset or custom map of icons. Defaults to all 462 Kinetic icons. */
  icons?: Record<string, IconDefinition>;
  /** Default icon size in px. */
  size?: number | string;
  /** Default stroke width. */
  stroke?: number | string;
  /** Default corner radius. */
  radius?: number;
  /** Default stroke color. */
  color?: string;
  /** Additional attributes to apply to every rendered `<svg>`. */
  attrs?: Record<string, string>;
}

function parseNumericAttr(value: string | null, fallback: number): number {
  if (value === null || value.trim() === '') return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

const BaseHTMLElement: typeof HTMLElement =
  typeof HTMLElement !== 'undefined'
    ? HTMLElement
    : (class {} as unknown as typeof HTMLElement);

/**
 * Lightweight `<kinetic-icon>` Web Component.
 * Works natively in plain HTML, Vue, Svelte, Astro, Angular, and CDN scripts.
 */
export class KineticIconElement extends BaseHTMLElement {
  static observedAttributes = [
    'name',
    'size',
    'stroke',
    'stroke-width',
    'radius',
    'color',
  ];

  connectedCallback(): void {
    if (!this.style.display) {
      this.style.display = 'inline-flex';
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
      this.style.lineHeight = '0';
    }
    this.render();
  }

  attributeChangedCallback(): void {
    this.render();
  }

  render(): void {
    const name = this.getAttribute('name')?.trim();
    if (!name) {
      this.innerHTML = '';
      return;
    }

    const icon = ICON_MAP[name];
    if (!icon) {
      this.innerHTML = '';
      return;
    }

    const size = this.getAttribute('size') ?? DEFAULT_SIZE;
    const stroke =
      this.getAttribute('stroke') ??
      this.getAttribute('stroke-width') ??
      DEFAULT_STROKE_WIDTH;
    const radius = parseNumericAttr(
      this.getAttribute('radius'),
      DEFAULT_CORNER_RADIUS
    );
    const color = this.getAttribute('color') ?? DEFAULT_COLOR;

    this.innerHTML = renderIconSvg(icon, {
      size,
      stroke,
      radius,
      color,
    });
  }
}

/**
 * Registers the `<kinetic-icon>` custom element safely (idempotent and SSR-safe).
 */
export function defineKineticIconElement(tagName = 'kinetic-icon'): void {
  if (typeof customElements === 'undefined') return;
  if (!customElements.get(tagName)) {
    customElements.define(tagName, KineticIconElement);
  }
}

/**
 * Scans the DOM for `[data-kinetic]` elements, replaces them with inline Kinetic SVGs,
 * and registers the `<kinetic-icon>` Web Component.
 */
export function createIcons(options: CreateIconsOptions = {}): number {
  defineKineticIconElement();

  if (typeof document === 'undefined') return 0;

  const {
    selector = '[data-kinetic]',
    root = document,
    icons = ICON_MAP,
    size: defaultSize = DEFAULT_SIZE,
    stroke: defaultStroke = DEFAULT_STROKE_WIDTH,
    radius: defaultRadius = DEFAULT_CORNER_RADIUS,
    color: defaultColor = DEFAULT_COLOR,
    attrs = {},
  } = options;

  const elements = Array.from(root.querySelectorAll<HTMLElement>(selector));
  let replacedCount = 0;

  for (const el of elements) {
    const iconName = el.getAttribute('data-kinetic')?.trim();
    if (!iconName) continue;

    const icon = icons[iconName];
    if (!icon) continue;

    const size = el.getAttribute('data-size') ?? defaultSize;
    const stroke =
      el.getAttribute('data-stroke') ??
      el.getAttribute('data-stroke-width') ??
      defaultStroke;
    const radius = parseNumericAttr(
      el.getAttribute('data-radius'),
      defaultRadius
    );
    const color = el.getAttribute('data-color') ?? defaultColor;

    const svgMarkup = renderIconSvg(icon, {
      size,
      stroke,
      radius,
      color,
    });

    const template = document.createElement('template');
    template.innerHTML = svgMarkup.trim();
    const svgEl = template.content.firstElementChild;
    if (!svgEl) continue;

    // Copy non-data-kinetic attributes from the placeholder element onto the SVG
    for (const attr of Array.from(el.attributes)) {
      if (
        attr.name === 'data-kinetic' ||
        attr.name === 'data-size' ||
        attr.name === 'data-stroke' ||
        attr.name === 'data-stroke-width' ||
        attr.name === 'data-radius' ||
        attr.name === 'data-color'
      ) {
        continue;
      }
      if (attr.name === 'class') {
        const existing = svgEl.getAttribute('class');
        svgEl.setAttribute(
          'class',
          existing ? `${existing} ${attr.value}` : attr.value
        );
      } else {
        svgEl.setAttribute(attr.name, attr.value);
      }
    }

    // Apply shared custom attributes
    for (const [key, val] of Object.entries(attrs)) {
      if (key === 'class') {
        const existing = svgEl.getAttribute('class');
        svgEl.setAttribute('class', existing ? `${existing} ${val}` : val);
      } else {
        svgEl.setAttribute(key, val);
      }
    }

    svgEl.setAttribute('data-kinetic-rendered', iconName);
    el.replaceWith(svgEl);
    replacedCount++;
  }

  return replacedCount;
}
