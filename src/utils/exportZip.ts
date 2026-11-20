import JSZip from 'jszip';
import { ICONS_CATALOG, renderIconSvg } from '../lib/core';
import { generateFlutterDart } from '../lib/flutter/generateDart';

export interface ExportZipOptions {
  strokeWidth: number;
  cornerRadius: number;
  color: string;
}

function buildQuickStartReadme(
  strokeWidth: number,
  cornerRadius: number,
  color: string
): string {
  return `# Kinetic Icons Bundle

Exported from **Kinetic Studio** with:
- **Icons:** ${ICONS_CATALOG.length} parametric icons (24×24 viewBox)
- **Stroke Width:** ${strokeWidth.toFixed(2)}px
- **Corner Radius:** ${cornerRadius.toFixed(2)}px
- **Stroke Color:** ${color}

## Bundle Contents

\`\`\`text
├── svg/                        # All ${ICONS_CATALOG.length} standalone .svg files
├── flutter/
│   └── kinetic_icons.dart      # Ready-to-paste Flutter library (flutter_svg)
└── README.md                   # Quick-start snippets
\`\`\`

---

## React & Next.js (App Router / Server Components)

\`\`\`bash
npm install kinetic-ui-icons
\`\`\`

\`\`\`tsx
import { Home, ShieldCheck, AiSpark } from 'kinetic-ui-icons/react';

export default function Toolbar() {
  return (
    <div className="flex items-center gap-3">
      <Home size={24} strokeWidth={${strokeWidth}} radius={${cornerRadius}} />
      <ShieldCheck size={24} strokeWidth={${strokeWidth}} radius={${cornerRadius}} />
      <AiSpark size={24} strokeWidth={${strokeWidth}} radius={${cornerRadius}} />
    </div>
  );
}
\`\`\`

---

## Vanilla JS, HTML, Vue & Svelte

\`\`\`html
<!-- Web Component -->
<kinetic-icon name="home" size="24" stroke="${strokeWidth}" radius="${cornerRadius}"></kinetic-icon>

<!-- Declarative data attribute -->
<i data-kinetic="shield-check" data-size="24" data-stroke="${strokeWidth}" data-radius="${cornerRadius}"></i>

<script type="module">
  import { createIcons } from 'kinetic-ui-icons/web';
  createIcons();
</script>
\`\`\`

---

## Flutter

1. Add \`flutter_svg\` to your \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  flutter_svg: ^2.0.10
\`\`\`

2. Copy \`flutter/kinetic_icons.dart\` into your project's \`lib/\` directory.

3. Render any icon:

\`\`\`dart
import 'package:flutter/material.dart';
import 'kinetic_icons.dart';

class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: const [
        KineticIcon(KineticIcons.home),
        KineticIcon(KineticIcons.shieldCheck, size: 28, color: Colors.indigo),
      ],
    );
  }
}
\`\`\`

---

MIT License — Kinetic Icons
`;
}

/**
 * Generates a `.zip` Blob containing all Kinetic SVGs, `flutter/kinetic_icons.dart`,
 * and `README.md` baked at the user's current stroke and corner radius.
 */
export async function buildKineticZipBlob({
  strokeWidth,
  cornerRadius,
  color,
}: ExportZipOptions): Promise<Blob> {
  const zip = new JSZip();

  const svgFolder = zip.folder('svg');
  if (svgFolder) {
    for (const icon of ICONS_CATALOG) {
      const svg = renderIconSvg(icon, {
        size: 24,
        stroke: strokeWidth,
        radius: cornerRadius,
        color,
      });
      svgFolder.file(`${icon.id}.svg`, svg);
    }
  }

  const flutterFolder = zip.folder('flutter');
  if (flutterFolder) {
    const dartSource = generateFlutterDart({
      stroke: strokeWidth,
      radius: cornerRadius,
    });
    flutterFolder.file('kinetic_icons.dart', dartSource);
  }

  zip.file('README.md', buildQuickStartReadme(strokeWidth, cornerRadius, color));

  return zip.generateAsync({ type: 'blob' });
}

/**
 * Triggers a browser download of the generated Kinetic Icons `.zip` archive.
 */
export async function downloadKineticZip(
  options: ExportZipOptions
): Promise<string> {
  const blob = await buildKineticZipBlob(options);
  const filename = `kinetic-icons-s${options.strokeWidth.toFixed(1)}-r${options.cornerRadius.toFixed(1)}.zip`;
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
  return filename;
}
