/**
 * Kinetic Icons — Zero-Dependency Parametric SVG Geometry Engine
 * Pure TypeScript with zero React or DOM dependencies.
 */

export type IconCategory =
  | 'Essentials'
  | 'Design'
  | 'Navigation'
  | 'Social'
  | 'Brands'
  | 'Actions'
  | 'Dashboard'
  | 'Dev & AI'
  | 'Alerts';

export type CategoryFilter = 'All Icons' | IconCategory;

export interface IconDefinition {
  id: string;
  category: IconCategory;
  draw: (r: number) => string;
}

export interface RenderIconOptions {
  size?: number | string;
  stroke?: number | string;
  radius?: number;
  color?: string;
  className?: string;
}

export type WeightedPoint = [number, number] | [number, number, number];

export const DEFAULT_SIZE = 24;
export const DEFAULT_STROKE_WIDTH = 1.5;
export const DEFAULT_CORNER_RADIUS = 2.5;
export const DEFAULT_COLOR = 'currentColor';

export const CATEGORIES: CategoryFilter[] = [
  'All Icons',
  'Essentials',
  'Design',
  'Navigation',
  'Social',
  'Brands',
  'Actions',
  'Dashboard',
  'Dev & AI',
  'Alerts',
];

export const PRESET_COLORS = [
  '#111113',
  '#2563EB',
  '#4F46E5',
  '#7C3AED',
  '#059669',
  '#E11D48',
];

// ==========================================
// KINETIC CONTINUOUS-CURVATURE SVG ENGINE
// ==========================================

export function fmt(n: number): string {
  return Number(n.toFixed(2)).toString();
}

/**
 * Angle-aware, silhouette-preserving continuous-curvature (squircle) polyline/polygon builder.
 * - Optional 3rd tuple element `weight` (default 1.0) tunes delicate vertices (acute tips, notches)
 *   so shapes never collapse or morph into unrecognizable blobs at high corner radii.
 * - Uses cubic Bezier fillets (k = 0.58 squircle tension) with max segment clamping (0.38)
 *   so every edge preserves structural fidelity from r = 0.0 to r = 4.0.
 */
export function smoothPoly(
  points: WeightedPoint[],
  radius: number,
  closed = true,
  maxSegFrac = 0.38
): string {
  if (!points || points.length < 2) return '';
  const N = points.length;

  if (radius <= 0.05) {
    let d = `M ${fmt(points[0][0])} ${fmt(points[0][1])}`;
    for (let i = 1; i < N; i++) {
      d += ` L ${fmt(points[i][0])} ${fmt(points[i][1])}`;
    }
    if (closed) d += ' Z';
    return d;
  }

  const k = 0.58; // Continuous-curvature squircle handle tension

  const cornerFillet = (
    prev: WeightedPoint,
    curr: WeightedPoint,
    next: WeightedPoint
  ) => {
    const weight = curr.length === 3 ? curr[2] : 1;
    const dxIn = prev[0] - curr[0];
    const dyIn = prev[1] - curr[1];
    const dxOut = next[0] - curr[0];
    const dyOut = next[1] - curr[1];

    const lenIn = Math.hypot(dxIn, dyIn);
    const lenOut = Math.hypot(dxOut, dyOut);
    if (lenIn < 0.001 || lenOut < 0.001 || weight <= 0.01) {
      return null;
    }

    const uInX = dxIn / lenIn;
    const uInY = dyIn / lenIn;
    const uOutX = dxOut / lenOut;
    const uOutY = dyOut / lenOut;

    const dot = Math.max(-1, Math.min(1, uInX * uOutX + uInY * uOutY));
    const halfTheta = Math.acos(dot) / 2;

    // Nearly collinear vertex — no fillet needed
    if (halfTheta > Math.PI * 0.495) return null;

    // Smooth angle compensation so acute angles stay crisp and obtuse angles stay graceful
    const angleScale = Math.pow(Math.max(0.15, Math.sin(halfTheta)), 0.42);
    const desiredT = radius * weight * angleScale;
    const t = Math.min(desiredT, lenIn * maxSegFrac, lenOut * maxSegFrac);

    if (t <= 0.04) return null;

    const pInX = curr[0] + uInX * t;
    const pInY = curr[1] + uInY * t;
    const pOutX = curr[0] + uOutX * t;
    const pOutY = curr[1] + uOutY * t;

    const c1X = pInX + (curr[0] - pInX) * k;
    const c1Y = pInY + (curr[1] - pInY) * k;
    const c2X = pOutX + (curr[0] - pOutX) * k;
    const c2Y = pOutY + (curr[1] - pOutY) * k;

    return { pInX, pInY, c1X, c1Y, c2X, c2Y, pOutX, pOutY };
  };

  let d = '';

  if (closed) {
    for (let i = 0; i < N; i++) {
      const prev = points[(i - 1 + N) % N];
      const curr = points[i];
      const next = points[(i + 1) % N];
      const f = cornerFillet(prev, curr, next);

      if (!f) {
        d +=
          i === 0
            ? `M ${fmt(curr[0])} ${fmt(curr[1])}`
            : ` L ${fmt(curr[0])} ${fmt(curr[1])}`;
      } else {
        d +=
          i === 0
            ? `M ${fmt(f.pInX)} ${fmt(f.pInY)}`
            : ` L ${fmt(f.pInX)} ${fmt(f.pInY)}`;
        d += ` C ${fmt(f.c1X)} ${fmt(f.c1Y)} ${fmt(f.c2X)} ${fmt(f.c2Y)} ${fmt(f.pOutX)} ${fmt(f.pOutY)}`;
      }
    }
    d += ' Z';
  } else {
    d += `M ${fmt(points[0][0])} ${fmt(points[0][1])}`;
    for (let i = 1; i < N - 1; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const next = points[i + 1];
      const f = cornerFillet(prev, curr, next);

      if (!f) {
        d += ` L ${fmt(curr[0])} ${fmt(curr[1])}`;
      } else {
        d += ` L ${fmt(f.pInX)} ${fmt(f.pInY)} C ${fmt(f.c1X)} ${fmt(f.c1Y)} ${fmt(f.c2X)} ${fmt(f.c2Y)} ${fmt(f.pOutX)} ${fmt(f.pOutY)}`;
      }
    }
    d += ` L ${fmt(points[N - 1][0])} ${fmt(points[N - 1][1])}`;
  }

  return d;
}

/**
 * Kinetic continuous-curvature squircle rectangle.
 * Clamped to 44% of the shortest side so proportions never collapse.
 */
export function squircleRect(
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
): string {
  const effR = Math.min(Math.max(0, r), Math.min(w, h) * 0.44);
  if (effR <= 0.05) {
    return `M ${fmt(x)} ${fmt(y)} H ${fmt(x + w)} V ${fmt(y + h)} H ${fmt(x)} Z`;
  }
  const c = effR * 0.58;
  const x2 = x + w;
  const y2 = y + h;
  return [
    `M ${fmt(x + effR)} ${fmt(y)}`,
    `H ${fmt(x2 - effR)}`,
    `C ${fmt(x2 - effR + c)} ${fmt(y)} ${fmt(x2)} ${fmt(y + effR - c)} ${fmt(x2)} ${fmt(y + effR)}`,
    `V ${fmt(y2 - effR)}`,
    `C ${fmt(x2)} ${fmt(y2 - effR + c)} ${fmt(x2 - effR + c)} ${fmt(y2)} ${fmt(x2 - effR)} ${fmt(y2)}`,
    `H ${fmt(x + effR)}`,
    `C ${fmt(x + effR - c)} ${fmt(y2)} ${fmt(x)} ${fmt(y2 - effR + c)} ${fmt(x)} ${fmt(y2 - effR)}`,
    `V ${fmt(y + effR)}`,
    `C ${fmt(x)} ${fmt(y + effR - c)} ${fmt(x + effR - c)} ${fmt(y)} ${fmt(x + effR)} ${fmt(y)}`,
    'Z',
  ].join(' ');
}

/**
 * Computes exact shaft pullback so arrow shafts never poke past a rounded arrowhead apex.
 */
export function tipPullback(r: number, weight = 0.42): number {
  if (r <= 0.05) return 0;
  return Math.min(r * weight * 0.52, 0.95);
}

/**
 * Kinetic signature 4-point orbital star — stays sculpted & symmetrical from r=0 to r=4.
 */
export function kineticSparkPath(r: number): string {
  const cx = 11.2;
  const cy = 12.6;
  const arm = 7.6;
  const tip = Math.min(r * 0.22, 0.85);
  const waist = 1.9 + r * 0.12;

  if (tip <= 0.04) {
    return `M ${fmt(cx)} ${fmt(cy - arm)} C ${fmt(cx)} ${fmt(cy - waist)} ${fmt(cx + waist)} ${fmt(cy)} ${fmt(cx + arm)} ${fmt(cy)} C ${fmt(cx + waist)} ${fmt(cy)} ${fmt(cx)} ${fmt(cy + waist)} ${fmt(cx)} ${fmt(cy + arm)} C ${fmt(cx)} ${fmt(cy + waist)} ${fmt(cx - waist)} ${fmt(cy)} ${fmt(cx - arm)} ${fmt(cy)} C ${fmt(cx - waist)} ${fmt(cy)} ${fmt(cx)} ${fmt(cy - waist)} ${fmt(cx)} ${fmt(cy - arm)} Z`;
  }

  const dy = tip * 0.55;
  return [
    `M ${fmt(cx - tip)} ${fmt(cy - arm + dy)}`,
    `Q ${fmt(cx)} ${fmt(cy - arm - dy * 0.25)} ${fmt(cx + tip)} ${fmt(cy - arm + dy)}`,
    `C ${fmt(cx + tip + 0.4)} ${fmt(cy - waist)} ${fmt(cx + waist)} ${fmt(cy - tip - 0.4)} ${fmt(cx + arm - dy)} ${fmt(cy - tip)}`,
    `Q ${fmt(cx + arm + dy * 0.25)} ${fmt(cy)} ${fmt(cx + arm - dy)} ${fmt(cy + tip)}`,
    `C ${fmt(cx + waist)} ${fmt(cy + tip + 0.4)} ${fmt(cx + tip + 0.4)} ${fmt(cy + waist)} ${fmt(cx + tip)} ${fmt(cy + arm - dy)}`,
    `Q ${fmt(cx)} ${fmt(cy + arm + dy * 0.25)} ${fmt(cx - tip)} ${fmt(cy + arm - dy)}`,
    `C ${fmt(cx - tip - 0.4)} ${fmt(cy + waist)} ${fmt(cx - waist)} ${fmt(cy + tip + 0.4)} ${fmt(cx - arm + dy)} ${fmt(cy + tip)}`,
    `Q ${fmt(cx - arm - dy * 0.25)} ${fmt(cy)} ${fmt(cx - arm + dy)} ${fmt(cy - tip)}`,
    `C ${fmt(cx - waist)} ${fmt(cy - tip - 0.4)} ${fmt(cx - tip - 0.4)} ${fmt(cy - waist)} ${fmt(cx - tip)} ${fmt(cy - arm + dy)}`,
    'Z',
  ].join(' ');
}

/**
 * Kinetic precision 6-lobe sculpted dial for `settings`.
 */
export function kineticDialPath(r: number): string {
  const cx = 12;
  const cy = 12;
  const lobes = 6;
  const rOut = 8.9;
  const rIn = 6.9;
  const pts: WeightedPoint[] = [];

  for (let i = 0; i < lobes * 2; i++) {
    const angle = (i * Math.PI) / lobes - Math.PI / 2;
    const isPeak = i % 2 === 0;
    const rad = isPeak ? rOut : rIn;
    pts.push([
      cx + Math.cos(angle) * rad,
      cy + Math.sin(angle) * rad,
      isPeak ? 0.65 : 0.55,
    ]);
  }
  return smoothPoly(pts, Math.min(r * 0.85, 2.6), true, 0.44);
}

/**
 * Kinetic Bowen knot (`command`) — smoothly morphs from crisp architectural loops (r=0)
 * to true circular 270° loops (r>=2.4) with seamlessly joined center crossbars.
 */
export function kineticCommandPath(r: number): string {
  const loopR = Math.min(r * 1.12, 2.5);
  const k = loopR * 0.56;

  const tl =
    loopR <= 0.05
      ? 'M 9 9 V 4 H 4 V 9 H 9'
      : `M 9 9 V ${fmt(4 + loopR)} C 9 ${fmt(4 + loopR - k)} ${fmt(9 - loopR + k)} 4 ${fmt(9 - loopR)} 4 H ${fmt(4 + loopR)} C ${fmt(4 + loopR - k)} 4 4 ${fmt(4 + loopR - k)} 4 ${fmt(4 + loopR)} V ${fmt(9 - loopR)} C 4 ${fmt(9 - loopR + k)} ${fmt(4 + loopR - k)} 9 ${fmt(4 + loopR)} 9 H 9`;

  const tr =
    loopR <= 0.05
      ? 'M 15 9 V 4 H 20 V 9 H 15'
      : `M 15 9 V ${fmt(4 + loopR)} C 15 ${fmt(4 + loopR - k)} ${fmt(15 + loopR - k)} 4 ${fmt(15 + loopR)} 4 H ${fmt(20 - loopR)} C ${fmt(20 - loopR + k)} 4 20 ${fmt(4 + loopR - k)} 20 ${fmt(4 + loopR)} V ${fmt(9 - loopR)} C 20 ${fmt(9 - loopR + k)} ${fmt(20 - loopR + k)} 9 ${fmt(20 - loopR)} 9 H 15`;

  const br =
    loopR <= 0.05
      ? 'M 15 15 V 20 H 20 V 15 H 15'
      : `M 15 15 V ${fmt(20 - loopR)} C 15 ${fmt(20 - loopR + k)} ${fmt(15 + loopR - k)} 20 ${fmt(15 + loopR)} 20 H ${fmt(20 - loopR)} C ${fmt(20 - loopR + k)} 20 20 ${fmt(20 - loopR + k)} 20 ${fmt(20 - loopR)} V ${fmt(15 + loopR)} C 20 ${fmt(15 + loopR - k)} ${fmt(20 - loopR + k)} 15 ${fmt(20 - loopR)} 15 H 15`;

  const bl =
    loopR <= 0.05
      ? 'M 9 15 V 20 H 4 V 15 H 9'
      : `M 9 15 V ${fmt(20 - loopR)} C 9 ${fmt(20 - loopR + k)} ${fmt(9 - loopR + k)} 20 ${fmt(9 - loopR)} 20 H ${fmt(4 + loopR)} C ${fmt(4 + loopR - k)} 20 4 ${fmt(20 - loopR + k)} 4 ${fmt(20 - loopR)} V ${fmt(15 + loopR)} C 4 ${fmt(15 + loopR - k)} ${fmt(4 + loopR - k)} 15 ${fmt(4 + loopR)} 15 H 9`;

  return `${tl} ${tr} ${br} ${bl} M 9 9 H 15 M 9 15 H 15 M 9 9 V 15 M 15 9 V 15`;
}

/**
 * Kinetic proper heraldic shield — graceful crowned top, sculpted shoulders,
 * and continuous curved belly tapering cleanly to a balanced bottom apex.
 */
export function kineticShieldPath(r: number): string {
  const cr = Math.min(r * 0.42, 1.4);
  const tip = Math.min(r * 0.34, 1.05);

  if (cr <= 0.04) {
    return 'M 12 3.2 L 19.4 5.8 V 11.2 C 19.4 15.8 16.4 18.8 12 20.8 C 7.6 18.8 4.6 15.8 4.6 11.2 V 5.8 Z';
  }

  return [
    `M ${fmt(12 - cr * 0.72)} ${fmt(3.45 + cr * 0.22)}`,
    `Q 12 ${fmt(3.1 + cr * 0.05)} ${fmt(12 + cr * 0.72)} ${fmt(3.45 + cr * 0.22)}`,
    `L ${fmt(18.55 - cr * 0.25)} ${fmt(5.52 - cr * 0.06)}`,
    `Q 19.4 5.82 19.4 ${fmt(6.75 + cr * 0.28)}`,
    'V 11.2',
    `C 19.4 15.7 16.4 18.65 ${fmt(12 + tip)} ${fmt(20.42 - tip * 0.34)}`,
    `Q 12 ${fmt(20.92 - tip * 0.08)} ${fmt(12 - tip)} ${fmt(20.42 - tip * 0.34)}`,
    'C 7.6 18.65 4.6 15.7 4.6 11.2',
    `V ${fmt(6.75 + cr * 0.28)}`,
    `Q 4.6 5.82 ${fmt(5.45 + cr * 0.25)} ${fmt(5.52 - cr * 0.06)}`,
    'Z',
  ].join(' ');
}

/**
 * Kinetic circular speech bubble with a sleek sculpted bottom-left tail.
 */
export function kineticRoundBubblePath(r: number): string {
  const t = Math.min(r * 0.32, 0.95);
  if (t <= 0.04) {
    return 'M 4.63 15.19 A 8.2 8.2 0 1 1 8.02 18.77 L 4.0 19.6 Z';
  }
  return `M 4.63 15.19 A 8.2 8.2 0 1 1 8.02 18.77 L ${fmt(4.65 + t * 0.45)} ${fmt(19.48 - t * 0.08)} Q 3.85 19.68 ${fmt(4.12 + t * 0.08)} ${fmt(18.88 - t * 0.42)} Z`;
}

/**
 * Kinetic sculpted heart — full organic curvature whose bottom apex responds gently to r.
 */
export function kineticHeartPath(r: number): string {
  const tip = Math.min(r * 0.36, 1.35);
  if (tip <= 0.04) {
    return 'M 12 19.8 C 5.8 15.6 3.5 11.4 3.5 8.5 C 3.5 5.8 5.6 4 8.2 4 C 9.9 4 11.3 4.9 12 6.3 C 12.7 4.9 14.1 4 15.8 4 C 18.4 4 20.5 5.8 20.5 8.5 C 20.5 11.4 18.2 15.6 12 19.8 Z';
  }
  return `M ${fmt(12 - tip)} ${fmt(19.4 - tip * 0.55)} C 6.2 15.4 3.5 11.4 3.5 8.5 C 3.5 5.8 5.6 4 8.2 4 C 9.9 4 11.3 4.9 12 6.4 C 12.7 4.9 14.1 4 15.8 4 C 18.4 4 20.5 5.8 20.5 8.5 C 20.5 11.4 17.8 15.4 ${fmt(12 + tip)} ${fmt(19.4 - tip * 0.55)} Q 12 ${fmt(20.1 - tip * 0.1)} ${fmt(12 - tip)} ${fmt(19.4 - tip * 0.55)} Z`;
}

/**
 * Kinetic geometric crescent moon — clean circular geometry with softly modulated horn tips.
 */
export function kineticMoonPath(r: number): string {
  const soft = Math.min(r * 0.16, 0.55);
  if (soft <= 0.04) {
    return 'M 19.6 14.4 A 8.2 8.2 0 1 1 9.6 4.4 A 6.6 6.6 0 0 0 19.6 14.4 Z';
  }
  return `M ${fmt(19.4 - soft * 0.3)} ${fmt(14.7 + soft * 0.2)} A 8.2 8.2 0 1 1 ${fmt(9.3 - soft * 0.2)} ${fmt(4.6 + soft * 0.3)} Q ${fmt(9.7 + soft * 0.4)} ${fmt(4.1 + soft * 0.2)} ${fmt(10 + soft * 0.3)} ${fmt(4.9 + soft * 0.3)} A 6.5 6.5 0 0 0 ${fmt(19.1 - soft * 0.3)} ${fmt(14 - soft * 0.3)} Q ${fmt(19.9 - soft * 0.2)} ${fmt(14.3 - soft * 0.4)} ${fmt(19.4 - soft * 0.3)} ${fmt(14.7 + soft * 0.2)} Z`;
}

/**
 * Exact 45°-rotated nested 3-leg paperclip with mathematically equal track spacing
 * and tangent semicircular turns (outer bowl wraps cleanly around the centered inner wire).
 */
export function kineticPaperclipPath(): string {
  const ox = 11.7;
  const oy = 11.5;
  const R = 3.6;
  const rTop = R / 2;
  const pt = (u: number, v: number) => {
    const x = ox + (u + v) * Math.SQRT1_2;
    const y = oy + (-u + v) * Math.SQRT1_2;
    return `${fmt(x)} ${fmt(y)}`;
  };
  return [
    `M ${pt(3.1, -R)}`,
    `L ${pt(-3.5, -R)}`,
    `A ${fmt(R)} ${fmt(R)} 0 0 0 ${pt(-3.5, R)}`,
    `L ${pt(5.2, R)}`,
    `A ${fmt(rTop)} ${fmt(rTop)} 0 0 0 ${pt(5.2, 0)}`,
    `L ${pt(-2.6, 0)}`,
  ].join(' ');
}

// ==========================================
// STRING & RENDERING UTILITIES
// ==========================================

export function getLineCaps(r: number): string {
  return r > 0.1
    ? 'stroke-linecap="round" stroke-linejoin="round"'
    : 'stroke-linecap="square" stroke-linejoin="miter"';
}

export function toPascalCase(str: string): string {
  return str
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

export function toCamelCase(str: string): string {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

/**
 * Pure, zero-dependency SVG renderer for any Kinetic IconDefinition.
 */
export function renderIconSvg(
  icon: IconDefinition,
  options: RenderIconOptions = {}
): string {
  const {
    size = DEFAULT_SIZE,
    stroke = DEFAULT_STROKE_WIDTH,
    radius = DEFAULT_CORNER_RADIUS,
    color = DEFAULT_COLOR,
    className,
  } = options;

  const caps = getLineCaps(radius);
  const innerSvg = icon.draw(radius);
  const classAttr = className ? ` class="${className}"` : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" ${caps}${classAttr}>\n  ${innerSvg}\n</svg>`;
}

/**
 * Pure, zero-dependency JSX snippet renderer for any Kinetic IconDefinition.
 */
export function renderIconJsx(
  icon: IconDefinition,
  options: RenderIconOptions = {}
): string {
  const {
    size = DEFAULT_SIZE,
    stroke = DEFAULT_STROKE_WIDTH,
    radius = DEFAULT_CORNER_RADIUS,
    color = DEFAULT_COLOR,
  } = options;

  const capsJsx =
    radius > 0.1
      ? 'strokeLinecap="round" strokeLinejoin="round"'
      : 'strokeLinecap="square" strokeLinejoin="miter"';
  const innerSvg = icon.draw(radius);

  return `export const ${toPascalCase(icon.id)}Icon = (props) => (\n  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" strokeWidth="${stroke}" ${capsJsx} {...props}>\n    ${innerSvg}\n  </svg>\n);`;
}

export function getCategoryIconId(cat: CategoryFilter): string {
  switch (cat) {
    case 'All Icons':
      return 'dashboard';
    case 'Essentials':
      return 'ai-spark';
    case 'Design':
      return 'palette';
    case 'Navigation':
      return 'compass';
    case 'Social':
      return 'message-round';
    case 'Brands':
      return 'globe';
    case 'Actions':
      return 'edit';
    case 'Dashboard':
      return 'credit-card';
    case 'Dev & AI':
      return 'terminal';
    case 'Alerts':
      return 'shield';
    default:
      return 'dashboard';
  }
}
