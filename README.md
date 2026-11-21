# Kinetic Icons (`kinetic-ui-icons`)

**462 original, round-corner-friendly monoline SVG icons** engineered on a 24×24 optical grid. Tune stroke weight, corner radius (`0.0` sharp to `4.0` soft rounded), and color dynamically—then ship directly to **React**, **Next.js (Server Components)**, **TypeScript**, **Vanilla JS / HTML / Vue / Svelte**, and **Flutter**.

- **Zero silhouette distortion** — continuous-curvature cubic Bézier corners (`k = 0.58`) preserve icon recognition from crisp `0.0px` architectural corners to soft `4.0px` curves.
- **Tree-shakeable & lightweight** — `"sideEffects": false` with individual named exports so your bundle only ships the icons you import.
- **Next.js App Router ready** — zero client hooks or runtime state; renders natively in React Server Components without `'use client'`.
- **Flexible color support** — defaults to `stroke="currentColor"` (inherits Tailwind/CSS text color automatically) or accepts any explicit `color` prop/attribute.
- **100% Free Forever (MIT License)** — free for personal, open-source, and commercial products with no attribution required.
- **Interactive Studio & Docs** — browse, tune, and export all 462 icons live at [kinetic.framesbyneer.in](https://kinetic.framesbyneer.in/).

---

## Installation

```bash
npm install kinetic-ui-icons
```

```bash
# pnpm
pnpm add kinetic-ui-icons

# yarn
yarn add kinetic-ui-icons
```

### Zero-Install CDN (HTML / Static Sites)

```html
<kinetic-icon name="home" size="24" stroke="1.5" radius="2.5"></kinetic-icon>

<script type="module">
  import 'https://esm.sh/kinetic-ui-icons/web';
</script>
```

---

## React & Next.js (Server Components)

Import any icon by its **PascalCase** name from `kinetic-ui-icons/react`:

```tsx
import { Home, ShieldCheck, Cloud, Verified } from 'kinetic-ui-icons/react';

export default function Navigation() {
  return (
    <nav className="flex items-center gap-4 text-neutral-900 dark:text-white">
      {/* Default: size={24}, strokeWidth={1.5}, radius={2.5}, color="currentColor" */}
      <Home />

      {/* Custom stroke weight & corner radius */}
      <ShieldCheck size={20} strokeWidth={1.75} radius={3} />

      {/* Tailwind / CSS color inheritance */}
      <Cloud size={24} className="text-blue-600" />

      {/* Explicit inline color */}
      <Verified size={22} color="#2563EB" />
    </nav>
  );
}
```

### Props Reference

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number \| string` | `24` | Width and height in pixels or any CSS unit |
| `strokeWidth` | `number \| string` | `1.5` | Stroke thickness (recommended `1.0` – `2.5`) |
| `radius` | `number` | `2.5` | Corner curvature from `0` (sharp) to `4` (soft rounded) |
| `color` | `string` | `"currentColor"` | Explicit stroke color (hex, RGB, CSS var) or inherits parent text color |
| `...rest` | `SVGProps<SVGSVGElement>` | — | Supports `className`, `style`, `ref`, `aria-label`, `onClick`, etc. |

---

## Colors & Styling

Every Kinetic icon renders with `fill="none"` and `stroke={color}`, defaulting to `currentColor`. Both styling approaches are first-class:

```tsx
// 1. Inherit CSS / Tailwind color (theme-aware & hover-friendly)
<button className="text-slate-700 hover:text-blue-600 transition-colors">
  <Bell size={20} />
</button>

// 2. Pass an explicit color directly on the icon
<Bell size={20} color="#2563EB" />
```

---

## Stroke Weight & Corner Radius

Kinetic computes continuous-curvature corners per vertex rather than scaling static paths:

- `radius={0}` — Crisp architectural geometry (`stroke-linecap="square"`, `stroke-linejoin="miter"`).
- `radius={2.5}` — Balanced Kinetic default (`stroke-linecap="round"`, `stroke-linejoin="round"`).
- `radius={4.0}` — Soft, friendly rounded curves while keeping silhouettes unmistakable.

```tsx
<Home strokeWidth={1.5} radius={0} />     {/* Sharp */}
<Home strokeWidth={1.5} radius={2.5} />   {/* Balanced default */}
<Home strokeWidth={2.0} radius={4.0} />   {/* Soft bold */}
```

---

## Vanilla JS, HTML, Vue, Svelte & Astro

Import `kinetic-ui-icons/web` to register the `<kinetic-icon>` Web Component or replace `[data-kinetic]` placeholders:

```html
<!-- Option A: Native Web Component -->
<kinetic-icon
  name="carousel"
  size="24"
  stroke="1.5"
  radius="2.5"
  color="#2563EB"
></kinetic-icon>

<!-- Option B: Declarative replacement -->
<i data-kinetic="shield-check" data-size="24" data-stroke="1.5" data-radius="2.5"></i>

<script type="module">
  import { createIcons } from 'kinetic-ui-icons/web';
  createIcons();
</script>
```

---

## Zero-Dependency Core (Node, Edge, SSR, Emails & Canvas)

Generate clean SVG strings anywhere JavaScript runs with zero DOM or React dependencies:

```ts
import { homeIcon, renderIconSvg } from 'kinetic-ui-icons/core';

const svg = renderIconSvg(homeIcon, {
  size: 24,
  stroke: 1.5,
  radius: 2.5,
  color: '#111113',
});
```

---

## Flutter (`flutter_svg`)

Use the `flutter/lib/kinetic_icons.dart` file bundled with this package (or download custom stroke/radius builds from Kinetic Studio):

1. Add `flutter_svg` to your `pubspec.yaml`:

```yaml
dependencies:
  flutter_svg: ^2.0.10
```

2. Import and render any icon with `KineticIcon`:

```dart
import 'package:flutter/material.dart';
import 'kinetic_icons.dart';

class Toolbar extends StatelessWidget {
  const Toolbar({super.key});

  @override
  Widget build(BuildContext context) {
    return const Row(
      children: [
        // Inherits IconTheme color automatically
        KineticIcon(KineticIcons.home, size: 24),
        // Or pass an explicit Color
        KineticIcon(KineticIcons.verified, size: 24, color: Color(0xFF2563EB)),
      ],
    );
  }
}
```

---

## Naming Convention & Categories (462 Icons)

Icon IDs use `kebab-case` and map predictably across every target:

| Icon ID | React (`kinetic-ui-icons/react`) | Core (`kinetic-ui-icons/core`) | Web (`<kinetic-icon>`) | Flutter (`KineticIcons`) |
| --- | --- | --- | --- | --- |
| `home` | `<Home />` | `homeIcon` | `name="home"` | `KineticIcons.home` |
| `shield-check` | `<ShieldCheck />` | `shieldCheckIcon` | `name="shield-check"` | `KineticIcons.shieldCheck` |
| `map-add` | `<MapAdd />` | `mapAddIcon` | `name="map-add"` | `KineticIcons.mapAdd` |
| `ai-spark` | `<AiSpark />` | `aiSparkIcon` | `name="ai-spark"` | `KineticIcons.aiSpark` |

**9 Categories Included:**
- **Essentials** (94) — `home`, `home-key`, `building`, `factory`, `warehouse`, `shopping-cart`, `shopping-cart-plus`, `scale`, `size-chart`, `pin`, `pin-angled`, `pin-off`, `tree-pine`, `tree-deciduous`, `tree-palm`, `flower`, `flower-tulip`, `flower-lotus`, food, hardware & more.
- **Navigation** (62) — all arrows & chevrons with `-circle` & `-square` variants, all 12 cursors (`cursor`, `cursor-hand`, `cursor-resize-horizontal`, `cursor-resize-vertical`, etc.), `browser-search`, `tab-search`, `apps-grid`, `dashboard`, `multitasking` & more.
- **Actions** (62) — `plus`, `minus`, `multiply` (with `-circle` & `-square` variants), `eraser`, `file`, `files`, `files-check`, `file-search`, `folder`, `folder-search`, `folder-user`, `table`, `table-row-add`, `table-row-delete`, `table-column-add`, `table-column-delete` & more.
- **Design** (41) — `color`, `palette`, `swatches`, `heading`, `heading-1`, `heading-2`, `heading-3`, `heading-4`, `bold`, `italic`, `underline`, `strikethrough`, `list-bullet`, `list-ordered`, `list-checks`, `collage`, `typography`, `eyedropper`, `scribble`, `scribble-pad`, `theme`, `contrast`, `shapes` & more.
- **Social** (68) — `chat`, `chat-round`, `chat-plus`, `chat-plus-round`, `sticker`, `sticker-round`, `sticker-plus`, `sticker-plus-round`, `status`, `broadcast`, `poll`, `family`, `accounts-search`, `autoplay`, `voice-speak` & more.
- **Dashboard** (39) — `chart-line`, `chart-bar`, `chart-pie`, `activity`, `trending-up`, `trending-down`, `percent`, `exchange` (all with `-circle` & `-square` variants), `bank`, `coins`, `banknote`, `piggy-bank`, `gauge`, `diagnostic` & more.
- **Dev & AI** (26) — `ai-spark`, `bot`, `robot`, `alien`, `ghost`, `crawler`, `waveform`, `research`, `branches`, `code`, `terminal`, `database`, `server`, `connectors` & more.
- **Alerts** (32) — `lock`, `key`, `zap` (with `-circle` & `-square` variants), `passkeys`, `log-in`, `log-out`, `help-circle`, `help-square`, `shield`, `shield-check`, `shield-lock`, `family-safety`, `incognito` & more.
- **Brands** (38) — `openai`, `anthropic`, `gemini`, `github`, `vercel`, `nextjs`, `supabase`, `vscode`, `docker`, `figma`, `linear`, `notion`, `slack`, `stripe`, `google`, `google-drive`, `wikipedia`, `quora`, `reddit`, `internet-archive` & more.

---

## License

MIT © [Neer](https://framesbyneer.in) ([GitHub](https://github.com/neerxj789/kinetic-icons)) — free forever for personal and commercial use.
