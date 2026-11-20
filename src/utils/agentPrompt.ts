import {
  CATEGORIES,
  DEFAULT_CORNER_RADIUS,
  DEFAULT_STROKE_WIDTH,
  ICONS_CATALOG,
  type IconCategory,
} from '../data/icons';

export type AgentPromptTarget = 'all' | 'react' | 'web' | 'flutter';

function buildIconInventory(): string {
  const cats = CATEGORIES.filter((c): c is IconCategory => c !== 'All Icons');
  return cats
    .map((cat) => {
      const ids = ICONS_CATALOG.filter((i) => i.category === cat).map(
        (i) => i.id
      );
      return `- ${cat} (${ids.length}): ${ids.join(', ')}`;
    })
    .join('\n');
}

/**
 * Builds a ready-to-paste system/workflow prompt for AI coding assistants
 * so they can install, import, style, color, and use Kinetic Icons accurately.
 */
export function buildAgentPrompt(target: AgentPromptTarget = 'all'): string {
  const inventory = buildIconInventory();

  const header = `Use Kinetic Icons (kinetic-ui-icons) for all UI iconography in this project.
- Catalog: ${ICONS_CATALOG.length} original monoline icons on a 24x24 optical grid.
- Defaults: size=24, strokeWidth=${DEFAULT_STROKE_WIDTH}, radius=${DEFAULT_CORNER_RADIUS} (range 0.0 sharp to 4.0 soft), color="currentColor".
- Never invent icon names outside the official catalog listed below.`;

  const reactSection = `### React / Next.js (App Router & Server Components)
Install: npm install kinetic-ui-icons
Import named PascalCase components from 'kinetic-ui-icons/react' (zero client hooks, works natively in Next.js Server Components):
\`\`\`tsx
import { Home, ShieldCheck, Cloud } from 'kinetic-ui-icons/react';

// Inherits parent/Tailwind text color automatically via stroke="currentColor"
<Home size={20} className="text-neutral-900 dark:text-white" />

// Or pass an explicit color, strokeWidth, and corner radius
<ShieldCheck size={24} strokeWidth={1.5} radius={2.5} color="#2563EB" />
\`\`\`
- Naming rule: convert kebab-case icon ID to PascalCase (e.g. "shield-check" -> ShieldCheck, "map-pin" -> MapPin, "ai-spark" -> AiSpark).`;

  const webSection = `### Vanilla JS, HTML, Vue, Svelte & Astro
Install: npm install kinetic-ui-icons
Use the <kinetic-icon> custom Web Component or declarative createIcons():
\`\`\`html
<kinetic-icon name="home" size="24" stroke="1.5" radius="2.5" color="currentColor"></kinetic-icon>
<!-- Color can also be inherited from CSS/Tailwind text color or set via color="#2563EB" -->

<i data-kinetic="shield-check" data-size="24" data-stroke="1.5" data-radius="2.5" data-color="#2563EB"></i>
<script type="module">
  import { createIcons } from 'kinetic-ui-icons/web';
  createIcons();
</script>
\`\`\`
For raw SVG strings (Node, Edge, Canvas, SSR), import from 'kinetic-ui-icons/core':
\`\`\`ts
import { homeIcon, renderIconSvg } from 'kinetic-ui-icons/core';
const svg = renderIconSvg(homeIcon, { size: 24, stroke: 1.5, radius: 2.5, color: '#2563EB' });
\`\`\``;

  const flutterSection = `### Flutter (flutter_svg)
Dependency: add flutter_svg: ^2.0.10 to pubspec.yaml and include kinetic_icons.dart (from the Kinetic ZIP bundle or pub package).
\`\`\`dart
import 'package:kinetic_icons/kinetic_icons.dart';

// Uses IconTheme color automatically, or pass an explicit Color
const KineticIcon(KineticIcons.home, size: 24);
const KineticIcon(KineticIcons.shieldCheck, size: 24, color: Color(0xFF2563EB));
\`\`\`
- Naming rule: convert kebab-case icon ID to lowerCamelCase (e.g. "shield-check" -> KineticIcons.shieldCheck, "map-pin" -> KineticIcons.mapPin).`;

  const body =
    target === 'react'
      ? reactSection
      : target === 'web'
        ? webSection
        : target === 'flutter'
          ? flutterSection
          : [reactSection, webSection, flutterSection].join('\n\n');

  return `${header}

${body}

### Color Guidelines
- Icons render with fill="none" and stroke={color}, defaulting to "currentColor".
- Prefer CSS/Tailwind text color classes (e.g. className="text-slate-700 hover:text-black") for theme-aware icons, or pass an explicit color prop/attribute for brand or semantic tints.

### Available Kinetic Icon IDs (${ICONS_CATALOG.length} total)
${inventory}`;
}
