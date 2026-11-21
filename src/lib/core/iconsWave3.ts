/**
 * Kinetic Icons — Wave 3 Icon Set (68 Icons)
 * Messaging & Status, Custom Cursors & Variants, Nature (Trees & Flowers),
 * Creative & AI Entities, Search Variants, Hardware, Media & System Utilities.
 */

import {
  fmt,
  kineticMiniSpark,
  kineticRoundBubblePath,
  kineticShieldPath,
  smoothPoly,
  squircleRect,
  tipPullback,
  type IconDefinition,
} from './engine';

// ==========================================
// 1. MESSAGING, STATUS, CHANNELS, STICKERS & POLLS (8)
// ==========================================

export const chatIcon: IconDefinition = {
  id: 'chat',
  category: 'Social',
  draw: (r) => {
    const cr = Math.min(r * 0.72, 2.5);
    const bubble = smoothPoly(
      [
        [3.4, 5.2, 0.3],
        [19.8, 5.2, 0.9],
        [19.8, 17.8, 0.9],
        [6.2, 17.8, 0.9],
        [6.2, 8.8, 0.25],
      ],
      cr,
      true,
      0.34
    );
    return `<path d="${bubble} M 9.4 10.2 H 16.4 M 9.4 13.4 H 14.0"/>`;
  },
};

export const statusIcon: IconDefinition = {
  id: 'status',
  category: 'Social',
  draw: () =>
    '<circle cx="12" cy="12" r="4.2"/><path d="M 12 3.4 A 8.6 8.6 0 0 1 19.6 8.0 M 20.1 15.0 A 8.6 8.6 0 0 1 12.6 20.6 M 8.8 20.0 A 8.6 8.6 0 0 1 3.6 10.2 M 5.2 6.6 A 8.6 8.6 0 0 1 8.8 4.0"/>',
};

export const broadcastIcon: IconDefinition = {
  id: 'broadcast',
  category: 'Social',
  draw: (r) =>
    `<path d="${kineticRoundBubblePath(r)} M 9.4 9.5 A 3.6 3.6 0 0 0 9.4 14.5 M 14.6 9.5 A 3.6 3.6 0 0 1 14.6 14.5"/><circle cx="12" cy="12" r="1.05"/>`,
};

export const chatPlusIcon: IconDefinition = {
  id: 'chat-plus',
  category: 'Social',
  draw: (r) => {
    const cr = Math.min(r * 0.72, 2.5);
    const bubble = smoothPoly(
      [
        [3.4, 5.2, 0.3],
        [19.8, 5.2, 0.9],
        [19.8, 17.8, 0.9],
        [6.2, 17.8, 0.9],
        [6.2, 8.8, 0.25],
      ],
      cr,
      true,
      0.34
    );
    return `<path d="${bubble} M 13.0 8.8 V 14.2 M 10.3 11.5 H 15.7"/>`;
  },
};

export const stickerIcon: IconDefinition = {
  id: 'sticker',
  category: 'Social',
  draw: (r) => {
    const cr = Math.min(r * 0.95, 3.6);
    const peel = Math.min(r * 0.55, 1.8);
    const body = smoothPoly(
      [
        [4.2, 4.2, 1.0],
        [19.8, 4.2, 1.0],
        [19.8, 14.2, 0.35],
        [14.2, 19.8, 0.35],
        [4.2, 19.8, 1.0],
      ],
      cr,
      true,
      0.36
    );
    const fold = smoothPoly(
      [
        [14.2, 19.6, 0.15],
        [14.2, 14.2, 0.9],
        [19.6, 14.2, 0.15],
      ],
      peel,
      false,
      0.38
    );
    return `<path d="${body} ${fold} M 8.8 14.0 Q 10.6 15.8 12.6 14.8"/><circle cx="9.2" cy="9.6" r="0.85"/><circle cx="14.6" cy="9.6" r="0.85"/>`;
  },
};

export const stickerPlusIcon: IconDefinition = {
  id: 'sticker-plus',
  category: 'Social',
  draw: (r) => {
    const cr = Math.min(r * 0.95, 3.6);
    const peel = Math.min(r * 0.55, 1.8);
    const body = smoothPoly(
      [
        [4.2, 4.2, 1.0],
        [19.8, 4.2, 1.0],
        [19.8, 14.4, 0.35],
        [14.4, 19.8, 0.35],
        [4.2, 19.8, 1.0],
      ],
      cr,
      true,
      0.36
    );
    const fold = smoothPoly(
      [
        [14.4, 19.6, 0.15],
        [14.4, 14.4, 0.9],
        [19.6, 14.4, 0.15],
      ],
      peel,
      false,
      0.38
    );
    return `<path d="${body} ${fold} M 11.4 8.2 V 14.2 M 8.4 11.2 H 14.4"/>`;
  },
};

export const pollIcon: IconDefinition = {
  id: 'poll',
  category: 'Social',
  draw: (r) => {
    const cr = Math.min(r * 0.52, 1.5);
    return `<path d="${squircleRect(4.2, 4.8, 9.6, 3.2, cr)} ${squircleRect(4.2, 10.4, 15.6, 3.2, cr)} ${squircleRect(4.2, 16.0, 6.6, 3.2, cr)}"/>`;
  },
};

export const disappearingMessageIcon: IconDefinition = {
  id: 'disappearing-message',
  category: 'Social',
  draw: () =>
    '<path d="M 12 20.4 A 8.4 8.4 0 1 1 12 3.6 M 15.3 4.3 A 8.4 8.4 0 0 1 16.7 5.0 M 18.8 7.1 A 8.4 8.4 0 0 1 19.6 8.6 M 20.4 11.6 A 8.4 8.4 0 0 1 20.2 13.3 M 19.1 16.3 A 8.4 8.4 0 0 1 18.0 17.7 M 15.6 19.6 A 8.4 8.4 0 0 1 14.1 20.1 M 12 12 L 15.4 8.8"/><circle cx="12" cy="12" r="0.9"/>',
};

// ==========================================
// 2. CUSTOM CURSORS & CURSOR VARIANTS (15)
// ==========================================

export const cursorIcon: IconDefinition = {
  id: 'cursor',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.85, 2.8);
    const body = smoothPoly(
      [
        [5.8, 3.8, 0.72],
        [19.2, 13.0, 0.72],
        [12.2, 14.0, 0.92],
        [7.6, 19.8, 0.72],
      ],
      cr,
      true,
      0.36
    );
    return `<path d="${body}"/>`;
  },
};

export const cursorHandIcon: IconDefinition = {
  id: 'cursor-hand',
  category: 'Navigation',
  draw: () =>
    '<path d="M 8.6 12.4 L 6.6 6.2 A 1.45 1.45 0 0 1 9.35 5.25 L 11.1 10.0 A 1.5 1.5 0 0 1 13.9 9.7 L 14.2 10.6 A 1.5 1.5 0 0 1 17.0 10.5 L 17.2 11.2 A 1.45 1.45 0 0 1 19.8 12.2 V 14.8 C 19.8 18.0 17.6 20.2 14.2 20.2 H 11.2 C 9.2 20.2 7.8 19.0 6.4 17.2 L 4.3 14.0 A 1.5 1.5 0 0 1 6.45 11.95 Z M 11.2 14.6 V 17.2 M 13.6 14.6 V 17.2 M 16.0 14.6 V 17.2"/>',
};

export const cursorGrabIcon: IconDefinition = {
  id: 'cursor-grab',
  category: 'Navigation',
  draw: () =>
    '<path d="M 7.8 12.8 L 6.6 8.2 A 1.25 1.25 0 0 1 9.0 7.55 L 10.0 10.6 V 5.6 A 1.25 1.25 0 0 1 12.5 5.6 V 10.2 V 6.2 A 1.25 1.25 0 0 1 15.0 6.2 V 10.6 L 15.6 7.8 A 1.25 1.25 0 0 1 18.05 8.35 L 17.8 14.6 C 17.7 17.8 15.6 20.2 12.4 20.2 H 10.8 C 8.6 20.2 7.2 19.0 6.0 17.2 L 4.4 14.4 A 1.35 1.35 0 0 1 6.65 12.85 Z M 10.4 14.8 V 17.2 M 12.6 14.8 V 17.2 M 14.8 14.8 V 17.2"/>',
};

export const cursorGrabbingIcon: IconDefinition = {
  id: 'cursor-grabbing',
  category: 'Navigation',
  draw: () =>
    '<path d="M 8.0 11.4 V 9.4 A 1.4 1.4 0 0 1 10.8 9.4 V 8.8 A 1.4 1.4 0 0 1 13.6 8.8 V 9.2 A 1.4 1.4 0 0 1 16.4 9.2 V 10.2 A 1.4 1.4 0 0 1 19.0 11.0 V 14.4 C 19.0 17.8 16.8 20.0 13.4 20.0 H 11.0 C 8.6 20.0 7.0 18.8 5.8 16.8 L 4.6 14.6 A 1.5 1.5 0 0 1 7.1 12.9 L 8.0 13.8 Z M 10.6 14.4 V 16.8 M 13.0 14.4 V 16.8 M 15.4 14.4 V 16.8"/>',
};

export const cursorTextIcon: IconDefinition = {
  id: 'cursor-text',
  category: 'Navigation',
  draw: (r) => {
    const curve = Math.min(r * 0.55, 1.8);
    if (curve <= 0.1) {
      return '<path d="M 8.0 4.2 H 16.0 M 8.0 19.8 H 16.0 M 12 4.2 V 19.8 M 9.4 12 H 14.6"/>';
    }
    return `<path d="M 8.2 4.2 Q 12 4.2 12 ${fmt(4.2 + curve)} V ${fmt(19.8 - curve)} Q 12 19.8 8.2 19.8 M 15.8 4.2 Q 12 4.2 12 ${fmt(4.2 + curve)} M 15.8 19.8 Q 12 19.8 12 ${fmt(19.8 - curve)} M 9.6 12 H 14.4"/>`;
  },
};

export const cursorMoveIcon: IconDefinition = {
  id: 'cursor-move',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.5, 1.4);
    const pb = tipPullback(r, 0.36);
    const up = smoothPoly([[9.4, 6.4], [12, 3.8, 0.4], [14.6, 6.4]], cr, false);
    const down = smoothPoly([[9.4, 17.6], [12, 20.2, 0.4], [14.6, 17.6]], cr, false);
    const left = smoothPoly([[6.4, 9.4], [3.8, 12, 0.4], [6.4, 14.6]], cr, false);
    const right = smoothPoly([[17.6, 9.4], [20.2, 12, 0.4], [17.6, 14.6]], cr, false);
    return `<path d="M 12 ${fmt(3.8 + pb)} V ${fmt(20.2 - pb)} M ${fmt(3.8 + pb)} 12 H ${fmt(20.2 - pb)} ${up} ${down} ${left} ${right}"/>`;
  },
};

export const cursorCrosshairIcon: IconDefinition = {
  id: 'cursor-crosshair',
  category: 'Navigation',
  draw: () =>
    '<circle cx="12" cy="12" r="5.6"/><path d="M 12 3.4 V 8.2 M 12 15.8 V 20.6 M 3.4 12 H 8.2 M 15.8 12 H 20.6"/><circle cx="12" cy="12" r="0.9"/>',
};

export const cursorPlusIcon: IconDefinition = {
  id: 'cursor-plus',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.65, 2.0);
    const pointer = smoothPoly(
      [
        [4.4, 3.8, 0.5],
        [14.2, 9.8, 0.55],
        [9.6, 10.6, 0.7],
        [6.4, 15.4, 0.55],
      ],
      cr,
      true,
      0.34
    );
    return `<path d="${pointer} M 16.0 13.8 V 18.6 M 13.6 16.2 H 18.4"/><circle cx="16.0" cy="16.2" r="4.4"/>`;
  },
};

export const cursorBlockIcon: IconDefinition = {
  id: 'cursor-block',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.65, 2.0);
    const pointer = smoothPoly(
      [
        [4.4, 3.8, 0.5],
        [14.2, 9.8, 0.55],
        [9.6, 10.6, 0.7],
        [6.4, 15.4, 0.55],
      ],
      cr,
      true,
      0.34
    );
    return `<path d="${pointer} M 13.0 13.2 L 19.0 19.2"/><circle cx="16.0" cy="16.2" r="4.4"/>`;
  },
};

export const cursorWaitIcon: IconDefinition = {
  id: 'cursor-wait',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.65, 2.0);
    const pointer = smoothPoly(
      [
        [4.4, 3.8, 0.5],
        [14.2, 9.8, 0.55],
        [9.6, 10.6, 0.7],
        [6.4, 15.4, 0.55],
      ],
      cr,
      true,
      0.34
    );
    return `<path d="${pointer} M 16.0 11.8 V 20.6 M 11.6 16.2 H 20.4"/><circle cx="16.0" cy="16.2" r="4.4"/>`;
  },
};

export const cursorResizeHorizontalIcon: IconDefinition = {
  id: 'cursor-resize-horizontal',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.5, 1.4);
    const pb = tipPullback(r, 0.36);
    const left = smoothPoly([[6.8, 9.2], [4.0, 12, 0.42], [6.8, 14.8]], cr, false);
    const right = smoothPoly([[17.2, 9.2], [20.0, 12, 0.42], [17.2, 14.8]], cr, false);
    return `<path d="M 12 4.6 V 19.4 M ${fmt(4.0 + pb)} 12 H 9.4 M 14.6 12 H ${fmt(20.0 - pb)} ${left} ${right}"/>`;
  },
};

export const zoomInIcon: IconDefinition = {
  id: 'zoom-in',
  category: 'Actions',
  draw: () =>
    '<circle cx="10.6" cy="10.6" r="6.6"/><path d="M 15.4 15.4 L 20.2 20.2 M 10.6 7.8 V 13.4 M 7.8 10.6 H 13.4"/>',
};

export const zoomOutIcon: IconDefinition = {
  id: 'zoom-out',
  category: 'Actions',
  draw: () =>
    '<circle cx="10.6" cy="10.6" r="6.6"/><path d="M 15.4 15.4 L 20.2 20.2 M 7.8 10.6 H 13.4"/>',
};

export const pinAngledIcon: IconDefinition = {
  id: 'pin-angled',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.5, 1.5);
    const body = smoothPoly(
      [
        [13.4, 4.0, 0.4],
        [20.0, 10.6, 0.4],
        [18.8, 11.8, 0.35],
        [17.6, 11.2, 0.3],
        [14.2, 14.6, 0.35],
        [14.8, 16.8, 0.45],
        [13.6, 18.0, 0.4],
        [6.0, 10.4, 0.4],
        [7.2, 9.2, 0.45],
        [9.4, 9.8, 0.35],
        [12.8, 6.4, 0.35],
        [12.2, 5.2, 0.35],
      ],
      cr,
      true,
      0.3
    );
    return `<path d="${body} M 9.8 14.2 L 4.4 19.6"/>`;
  },
};

// ==========================================
// 3. TREES & FLOWERS (6)
// ==========================================

export const treePineIcon: IconDefinition = {
  id: 'tree-pine',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.65, 2.0);
    const canopy = smoothPoly(
      [
        [12, 3.6, 0.48],
        [17.2, 10.4, 0.45],
        [14.8, 10.4, 0.25],
        [18.8, 16.4, 0.5],
        [5.2, 16.4, 0.5],
        [9.2, 10.4, 0.25],
        [6.8, 10.4, 0.45],
      ],
      cr,
      true,
      0.34
    );
    return `<path d="${canopy} M 12 16.4 V 20.6 M 9.2 20.6 H 14.8"/>`;
  },
};

export const treeDeciduousIcon: IconDefinition = {
  id: 'tree-deciduous',
  category: 'Essentials',
  draw: () =>
    '<path d="M 8.2 15.8 A 3.4 3.4 0 0 1 6.4 9.6 A 3.6 3.6 0 0 1 9.0 6.2 A 3.8 3.8 0 0 1 15.0 6.2 A 3.6 3.6 0 0 1 17.6 9.6 A 3.4 3.4 0 0 1 15.8 15.8 Z M 12 11.4 V 20.4 M 12 14.0 L 14.4 12.0 M 9.4 20.4 H 14.6"/>',
};

export const treePalmIcon: IconDefinition = {
  id: 'tree-palm',
  category: 'Essentials',
  draw: () =>
    '<path d="M 12.4 9.0 C 11.4 12.8 11.6 16.6 13.4 20.4 M 8.8 20.4 H 16.6 M 12.4 9.0 C 10.2 5.4 6.4 5.2 4.4 7.6 C 6.8 7.8 9.2 8.6 10.6 9.8 M 12.4 9.0 C 14.6 5.4 18.4 5.2 20.2 7.8 C 17.8 7.8 15.6 8.6 14.0 9.8 M 12.4 9.0 C 9.2 9.4 6.4 11.4 5.4 14.2 M 12.4 9.0 C 15.8 9.4 18.4 11.2 19.4 13.8 M 12.4 9.0 C 11.4 5.6 12.4 3.8 14.4 3.6"/>',
};

export const flowerIcon: IconDefinition = {
  id: 'flower',
  category: 'Essentials',
  draw: () => {
    const cx = 12;
    const cy = 12;
    const petals: string[] = [];
    for (let i = 0; i < 5; i++) {
      const a0 = (i * 2 * Math.PI) / 5 - Math.PI / 2 - 0.56;
      const aMid = (i * 2 * Math.PI) / 5 - Math.PI / 2;
      const a1 = (i * 2 * Math.PI) / 5 - Math.PI / 2 + 0.56;
      const sx = cx + Math.cos(a0) * 3.1;
      const sy = cy + Math.sin(a0) * 3.1;
      const c1x = cx + Math.cos(aMid - 0.52) * 9.8;
      const c1y = cy + Math.sin(aMid - 0.52) * 9.8;
      const c2x = cx + Math.cos(aMid + 0.52) * 9.8;
      const c2y = cy + Math.sin(aMid + 0.52) * 9.8;
      const ex = cx + Math.cos(a1) * 3.1;
      const ey = cy + Math.sin(a1) * 3.1;
      petals.push(`M ${fmt(sx)} ${fmt(sy)} C ${fmt(c1x)} ${fmt(c1y)} ${fmt(c2x)} ${fmt(c2y)} ${fmt(ex)} ${fmt(ey)}`);
    }
    return `<circle cx="12" cy="12" r="2.7"/><path d="${petals.join(' ')}"/>`;
  },
};

export const flowerTulipIcon: IconDefinition = {
  id: 'flower-tulip',
  category: 'Essentials',
  draw: () =>
    '<path d="M 7.2 6.0 C 6.6 10.4 8.6 13.8 12 13.8 C 15.4 13.8 17.4 10.4 16.8 6.0 L 14.4 8.2 L 12 4.2 L 9.6 8.2 Z M 12 13.8 V 20.4 M 12 19.0 C 9.2 18.8 7.2 17.2 6.4 14.8 C 8.8 14.8 10.8 16.2 12 18.2 M 12 19.0 C 14.8 18.8 16.8 17.2 17.6 14.8 C 15.2 14.8 13.2 16.2 12 18.2"/>',
};

export const flowerLotusIcon: IconDefinition = {
  id: 'flower-lotus',
  category: 'Essentials',
  draw: () =>
    '<path d="M 12 5.2 C 14.6 8.2 14.8 12.6 12 16.2 C 9.2 12.6 9.4 8.2 12 5.2 Z M 12 16.2 C 8.2 15.6 5.6 12.6 6.2 8.2 C 8.2 8.8 9.8 10.4 10.6 12.6 M 12 16.2 C 15.8 15.6 18.4 12.6 17.8 8.2 C 15.8 8.8 14.2 10.4 13.4 12.6 M 12 16.4 C 7.6 17.2 4.2 15.8 3.8 12.6 C 5.4 12.4 7.0 13.0 8.2 14.0 M 12 16.4 C 16.4 17.2 19.8 15.8 20.2 12.6 C 18.6 12.4 17.0 13.0 15.8 14.0 M 6.4 19.2 H 17.6"/>',
};

// ==========================================
// 4. CREATIVE, DESIGN, CONTENT & AI ENTITIES (14)
// ==========================================

export const collageIcon: IconDefinition = {
  id: 'collage',
  category: 'Design',
  draw: (r) => {
    const cr = Math.min(r * 0.65, 2.0);
    return `<path d="${squircleRect(3.8, 3.8, 7.0, 16.4, cr)} ${squircleRect(13.2, 3.8, 7.0, 7.0, cr)} ${squircleRect(13.2, 13.2, 7.0, 7.0, cr)}"/>`;
  },
};

export const presentationIcon: IconDefinition = {
  id: 'presentation',
  category: 'Dashboard',
  draw: (r) => {
    const cr = Math.min(r * 0.72, 2.2);
    const chart = smoothPoly([[7.6, 12.2], [10.4, 9.6, 0.35], [12.8, 11.2, 0.35], [16.4, 7.8]], r * 0.4, false);
    return `<path d="M 3.2 4.2 H 20.8 ${squircleRect(4.4, 4.2, 15.2, 11.2, cr)} M 12 15.4 V 19.8 M 8.2 19.8 L 12 16.8 L 15.8 19.8 ${chart}"/>`;
  },
};

export const remixIcon: IconDefinition = {
  id: 'remix',
  category: 'Actions',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.3);
    const arrTop = smoothPoly([[16.8, 4.6], [19.4, 7.0, 0.4], [16.8, 9.4]], cr, false);
    const arrBot = smoothPoly([[16.8, 14.6], [19.4, 17.0, 0.4], [16.8, 19.4]], cr, false);
    return `<path d="M 4.2 16.8 H 7.2 C 9.4 16.8 10.6 7.0 13.4 7.0 H 19.0 M 4.2 7.0 H 7.2 C 8.4 7.0 9.4 8.6 10.2 10.4 M 11.8 14.0 C 12.5 15.8 13.2 17.0 14.6 17.0 H 19.0 ${arrTop} ${arrBot} ${kineticMiniSpark(6.4, 12.0, 2.0)}"/>`;
  },
};

export const branchesIcon: IconDefinition = {
  id: 'branches',
  category: 'Dev & AI',
  draw: () =>
    '<circle cx="6.8" cy="6.2" r="2.2"/><circle cx="17.2" cy="6.2" r="2.2"/><circle cx="17.2" cy="12.2" r="2.2"/><circle cx="6.8" cy="18.0" r="2.2"/><path d="M 6.8 8.4 V 15.8 M 17.2 8.4 V 10.0 M 6.8 15.4 C 6.8 12.4 10.2 12.2 15.0 12.2 M 6.8 11.2 C 6.8 8.2 10.4 6.2 15.0 6.2"/>',
};

export const typographyIcon: IconDefinition = {
  id: 'typography',
  category: 'Design',
  draw: (r) => {
    const cr = Math.min(r * 0.35, 1.0);
    const bigA = smoothPoly([[3.8, 18.2], [7.8, 6.2, 0.35], [11.8, 18.2]], cr, false);
    return `<path d="${bigA} M 5.2 14.6 H 10.4 M 14.8 12.4 C 15.4 11.2 16.6 10.6 18.0 10.8 C 19.4 11.0 20.0 12.0 20.0 13.4 V 18.2 M 20.0 14.4 H 16.6 C 15.0 14.4 14.2 15.2 14.2 16.3 C 14.2 17.5 15.1 18.2 16.6 18.2 C 18.2 18.2 19.4 17.4 20.0 16.2"/>`;
  },
};

export const eyedropperIcon: IconDefinition = {
  id: 'eyedropper',
  category: 'Design',
  draw: (r) => {
    const cr = Math.min(r * 0.5, 1.6);
    const tube = smoothPoly(
      [
        [12.4, 7.6, 0.3],
        [6.4, 13.6, 0.45],
        [4.8, 17.6, 0.55],
        [6.4, 19.2, 0.55],
        [10.4, 17.6, 0.45],
        [16.4, 11.6, 0.3],
      ],
      cr,
      false,
      0.34
    );
    return `<path d="${tube} M 10.6 5.8 L 18.2 13.4 M 13.4 6.6 L 15.6 4.4 A 2.4 2.4 0 0 1 19.0 7.8 L 16.8 10.0"/>`;
  },
};

export const crawlerIcon: IconDefinition = {
  id: 'crawler',
  category: 'Dev & AI',
  draw: () =>
    '<circle cx="12" cy="13.4" r="4.0"/><circle cx="12" cy="7.8" r="2.1"/><path d="M 10.4 6.2 L 8.8 4.2 M 13.6 6.2 L 15.2 4.2 M 8.4 11.6 L 4.4 9.6 M 8.0 13.8 H 3.8 M 8.8 15.8 L 5.0 18.8 M 15.6 11.6 L 19.6 9.6 M 16.0 13.8 H 20.2 M 15.2 15.8 L 19.0 18.8"/>',
};

export const alienIcon: IconDefinition = {
  id: 'alien',
  category: 'Dev & AI',
  draw: () =>
    '<path d="M 12 3.8 C 7.2 3.8 4.6 7.0 4.6 11.2 C 4.6 15.4 8.6 20.2 12 20.2 C 15.4 20.2 19.4 15.4 19.4 11.2 C 19.4 7.0 16.8 3.8 12 3.8 Z M 7.8 11.2 C 8.4 10.2 10.2 10.4 10.6 12.2 C 9.4 13.0 8.0 12.6 7.8 11.2 Z M 16.2 11.2 C 15.6 10.2 13.8 10.4 13.4 12.2 C 14.6 13.0 16.0 12.6 16.2 11.2 Z M 10.4 16.0 Q 12 16.8 13.6 16.0"/>',
};

export const robotIcon: IconDefinition = {
  id: 'robot',
  category: 'Dev & AI',
  draw: (r) => {
    const cr = Math.min(r * 0.85, 2.8);
    return `<path d="${squircleRect(5.2, 7.6, 13.6, 12.0, cr)} M 12 7.6 V 5.2 M 3.4 11.6 V 15.6 M 20.6 11.6 V 15.6 M 9.4 15.8 H 14.6"/><circle cx="12" cy="4.2" r="1.1"/><circle cx="9.4" cy="11.6" r="1.0"/><circle cx="14.6" cy="11.6" r="1.0"/>`;
  },
};

export const scribbleIcon: IconDefinition = {
  id: 'scribble',
  category: 'Design',
  draw: () =>
    '<path d="M 4.4 9.0 C 7.2 4.2 12.8 4.4 10.6 8.8 C 8.6 12.6 4.4 15.2 7.4 16.8 C 10.2 18.2 15.0 7.6 17.6 9.2 C 20.0 10.6 12.6 18.4 15.8 19.2 C 17.8 19.6 19.4 17.4 20.0 15.8"/>',
};

export const scribblePadIcon: IconDefinition = {
  id: 'scribble-pad',
  category: 'Design',
  draw: (r) => {
    const cr = Math.min(r * 0.88, 2.8);
    return `<path d="${squircleRect(4.0, 4.0, 16.0, 16.0, cr)} M 7.2 10.6 C 8.8 7.6 11.8 8.0 10.4 10.8 C 9.2 13.2 7.4 14.8 9.6 15.6 C 11.6 16.4 14.2 9.6 15.8 10.8 C 17.2 11.8 13.4 16.2 16.6 15.4"/>`;
  },
};

export const writingIcon: IconDefinition = {
  id: 'writing',
  category: 'Actions',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.4);
    const nib = smoothPoly(
      [
        [15.4, 4.2, 0.4],
        [19.8, 8.6, 0.4],
        [12.2, 16.2, 0.35],
        [6.6, 17.4, 0.3],
        [7.8, 11.8, 0.35],
      ],
      cr,
      true,
      0.32
    );
    return `<path d="${nib} M 13.0 6.6 L 17.4 11.0 M 6.6 17.4 L 11.4 12.6 M 4.2 20.2 H 19.8"/><circle cx="12.2" cy="11.8" r="0.9"/>`;
  },
};

export const researchIcon: IconDefinition = {
  id: 'research',
  category: 'Dev & AI',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.4);
    const tube = smoothPoly(
      [
        [9.6, 4.2, 0.4],
        [12.8, 5.4, 0.4],
        [10.2, 12.2, 0.4],
        [7.0, 11.0, 0.4],
      ],
      cr,
      true,
      0.34
    );
    return `<path d="${tube} M 11.6 8.4 C 15.8 8.6 18.0 11.6 18.0 15.0 C 18.0 17.4 16.6 19.2 14.8 19.8 M 5.2 19.8 H 18.8 M 6.4 14.8 H 12.6"/>`;
  },
};

export const sizeChartIcon: IconDefinition = {
  id: 'size-chart',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.55, 1.8);
    const lScale = smoothPoly(
      [
        [4.2, 4.2, 0.55],
        [9.2, 4.2, 0.45],
        [9.2, 14.8, 0.3],
        [19.8, 14.8, 0.45],
        [19.8, 19.8, 0.55],
        [4.2, 19.8, 0.7],
      ],
      cr,
      true,
      0.34
    );
    return `<path d="${lScale} M 4.2 7.8 H 6.6 M 4.2 11.4 H 6.6 M 4.2 15.0 H 6.6 M 12.6 19.8 V 17.4 M 16.2 19.8 V 17.4"/>`;
  },
};

// ==========================================
// 5. SEARCH VARIANTS, PREFERENCES & PERSONAL (10)
// ==========================================

export const preferencesIcon: IconDefinition = {
  id: 'preferences',
  category: 'Navigation',
  draw: () =>
    '<rect x="4.0" y="5.0" width="16.0" height="6.0" rx="3.0"/><circle cx="17.0" cy="8.0" r="1.4"/><rect x="4.0" y="13.0" width="16.0" height="6.0" rx="3.0"/><circle cx="7.0" cy="16.0" r="1.4"/>',
};

export const jobSearchIcon: IconDefinition = {
  id: 'job-search',
  category: 'Dashboard',
  draw: (r) => {
    const cr = Math.min(r * 0.72, 2.2);
    const handle = smoothPoly([[8.6, 7.4], [8.6, 4.8, 0.6], [14.4, 4.8, 0.6], [14.4, 7.4]], cr, false);
    const bag = smoothPoly(
      [
        [19.2, 11.0, 0.2],
        [19.2, 7.4, 0.85],
        [3.8, 7.4, 0.85],
        [3.8, 18.0, 0.85],
        [11.0, 18.0, 0.2],
      ],
      cr,
      false,
      0.36
    );
    return `<path d="${handle} ${bag} M 18.2 18.2 L 20.4 20.4"/><circle cx="15.8" cy="15.8" r="3.2"/>`;
  },
};

export const calculatorIcon: IconDefinition = {
  id: 'calculator',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.85, 2.6);
    const scrR = Math.min(r * 0.45, 1.3);
    return `<path d="${squircleRect(5.0, 3.6, 14.0, 16.8, cr)} ${squircleRect(7.6, 6.2, 8.8, 3.4, scrR)} M 8.2 12.8 H 9.2 M 11.5 12.8 H 12.5 M 14.8 12.8 H 15.8 M 8.2 15.6 H 9.2 M 11.5 15.6 H 12.5 M 14.8 15.6 V 18.0 M 8.2 18.0 H 9.2 M 11.5 18.0 H 12.5"/>`;
  },
};

export const feedbackIcon: IconDefinition = {
  id: 'feedback',
  category: 'Social',
  draw: (r) => {
    const cr = Math.min(r * 0.75, 2.4);
    const bubble = smoothPoly(
      [
        [4.0, 4.4, 0.9],
        [20.0, 4.4, 0.9],
        [20.0, 16.4, 0.9],
        [9.2, 16.4, 0.35],
        [5.0, 19.8, 0.3],
        [5.6, 16.4, 0.25],
        [4.0, 16.4, 0.7],
      ],
      cr,
      true,
      0.34
    );
    return `<path d="${bubble} ${kineticMiniSpark(12.0, 10.4, 3.1)}"/>`;
  },
};

export const familyIcon: IconDefinition = {
  id: 'family',
  category: 'Social',
  draw: () =>
    '<circle cx="6.2" cy="7.2" r="2.1"/><path d="M 3.2 18.8 C 3.2 15.2 4.5 13.4 6.6 13.4 C 7.6 13.4 8.4 13.8 9.0 14.4"/><circle cx="17.8" cy="7.2" r="2.1"/><path d="M 20.8 18.8 C 20.8 15.2 19.5 13.4 17.4 13.4 C 16.4 13.4 15.6 13.8 15.0 14.4"/><circle cx="12.0" cy="11.8" r="1.7"/><path d="M 9.2 19.4 C 9.2 17.0 10.4 15.8 12.0 15.8 C 13.6 15.8 14.8 17.0 14.8 19.4"/>',
};

export const familySafetyIcon: IconDefinition = {
  id: 'family-safety',
  category: 'Alerts',
  draw: (r) =>
    `<path d="${kineticShieldPath(r)} M 7.6 15.4 C 7.8 13.4 8.9 12.4 10.4 12.4 C 11.4 12.4 12.2 12.9 12.6 13.6 M 12.4 16.0 C 12.6 14.6 13.4 13.9 14.6 13.9 C 15.8 13.9 16.5 14.6 16.7 15.8"/><circle cx="10.2" cy="9.2" r="1.55"/><circle cx="14.6" cy="11.1" r="1.2"/>`,
};

export const tabSearchIcon: IconDefinition = {
  id: 'tab-search',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.78, 2.4);
    const frame = smoothPoly(
      [
        [19.8, 11.2, 0.2],
        [19.8, 4.4, 0.9],
        [3.8, 4.4, 0.9],
        [3.8, 17.8, 0.9],
        [10.8, 17.8, 0.2],
      ],
      cr,
      false,
      0.36
    );
    return `<path d="${frame} M 3.8 8.2 H 19.8 M 18.2 18.2 L 20.4 20.4"/><circle cx="15.8" cy="15.8" r="3.2"/>`;
  },
};

export const folderSearchIcon: IconDefinition = {
  id: 'folder-search',
  category: 'Actions',
  draw: (r) => {
    const cr = Math.min(r * 0.72, 2.2);
    const folder = smoothPoly(
      [
        [19.6, 11.0, 0.2],
        [19.6, 7.6, 0.85],
        [11.6, 7.6, 0.35],
        [9.8, 5.2, 0.45],
        [3.8, 5.2, 0.85],
        [3.8, 18.0, 0.85],
        [10.8, 18.0, 0.2],
      ],
      cr,
      false,
      0.36
    );
    return `<path d="${folder} M 18.2 18.2 L 20.4 20.4"/><circle cx="15.8" cy="15.8" r="3.2"/>`;
  },
};

export const fileSearchIcon: IconDefinition = {
  id: 'file-search',
  category: 'Actions',
  draw: (r) => {
    const cr = Math.min(r * 0.72, 2.2);
    const doc = smoothPoly(
      [
        [17.6, 10.6, 0.2],
        [17.6, 8.2, 0.4],
        [13.4, 4.0, 0.4],
        [5.0, 4.0, 0.85],
        [5.0, 19.4, 0.85],
        [10.6, 19.4, 0.2],
      ],
      cr,
      false,
      0.36
    );
    return `<path d="${doc} M 13.2 4.2 V 8.4 H 17.4 M 8.0 11.4 H 12.2 M 8.0 14.6 H 10.4 M 18.2 18.2 L 20.4 20.4"/><circle cx="15.8" cy="15.8" r="3.2"/>`;
  },
};

export const accountsSearchIcon: IconDefinition = {
  id: 'accounts-search',
  category: 'Social',
  draw: () =>
    '<circle cx="9.2" cy="7.4" r="2.6"/><path d="M 4.4 17.6 C 4.4 14.4 6.4 12.6 9.2 12.6 C 10.6 12.6 11.6 13.0 12.4 13.6 M 14.2 5.4 A 2.2 2.2 0 0 1 16.4 9.2 M 18.2 18.2 L 20.4 20.4"/><circle cx="15.8" cy="15.8" r="3.2"/>',
};

// ==========================================
// 6. HARDWARE, MEDIA, SYSTEM & SECURITY (16)
// ==========================================

export const gamingIcon: IconDefinition = {
  id: 'gaming',
  category: 'Essentials',
  draw: () =>
    '<path d="M 7.8 7.2 H 16.2 C 18.8 7.2 20.4 9.2 20.6 12.4 L 20.8 15.2 C 20.9 17.2 19.4 18.6 17.8 18.4 C 16.6 18.2 15.8 17.2 14.8 15.8 H 9.2 C 8.2 17.2 7.4 18.2 6.2 18.4 C 4.6 18.6 3.1 17.2 3.2 15.2 L 3.4 12.4 C 3.6 9.2 5.2 7.2 7.8 7.2 Z M 8.2 10.2 V 13.4 M 6.6 11.8 H 9.8"/><circle cx="14.6" cy="12.6" r="0.85"/><circle cx="16.8" cy="10.8" r="0.85"/>',
};

export const keyboardIcon: IconDefinition = {
  id: 'keyboard',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.85, 2.6);
    return `<path d="${squircleRect(3.4, 6.2, 17.2, 11.6, cr)} M 6.6 9.6 H 7.6 M 10.2 9.6 H 11.2 M 13.8 9.6 H 14.8 M 17.0 9.6 H 17.6 M 6.6 12.2 H 7.6 M 10.2 12.2 H 11.2 M 13.8 12.2 H 14.8 M 17.0 12.2 H 17.6 M 8.6 15.0 H 15.4"/>`;
  },
};

export const mouseIcon: IconDefinition = {
  id: 'mouse',
  category: 'Essentials',
  draw: () =>
    '<rect x="6.4" y="3.8" width="11.2" height="16.4" rx="5.6"/><path d="M 12 3.8 V 10.4 M 6.4 10.4 H 17.6 M 12 6.6 V 8.6"/>',
};

export const touchpadIcon: IconDefinition = {
  id: 'touchpad',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.85, 2.6);
    return `<path d="${squircleRect(3.6, 4.8, 16.8, 14.4, cr)} M 3.6 14.8 H 20.4 M 12 14.8 V 19.2"/>`;
  },
};

export const usbIcon: IconDefinition = {
  id: 'usb',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.4, 1.2);
    const tip = smoothPoly([[10.2, 6.2], [12, 3.8, 0.4], [13.8, 6.2]], cr, true);
    return `<path d="M 12 6.2 V 17.2 M 12 14.8 L 7.6 12.2 V 10.2 M 12 13.4 L 16.4 10.8 V 9.4 ${tip} ${squircleRect(15.2, 7.0, 2.4, 2.4, Math.min(r * 0.3, 0.6))}"/><circle cx="12" cy="18.8" r="1.6"/><circle cx="7.6" cy="8.8" r="1.4"/>`;
  },
};

export const captionsIcon: IconDefinition = {
  id: 'captions',
  category: 'Social',
  draw: (r) => {
    const cr = Math.min(r * 0.85, 2.6);
    return `<path d="${squircleRect(3.6, 5.6, 16.8, 12.8, cr)} M 10.8 10.2 C 10.2 9.4 9.4 9.2 8.6 9.4 C 7.4 9.8 7.0 11.0 7.0 12.0 C 7.0 13.0 7.4 14.2 8.6 14.6 C 9.4 14.8 10.2 14.6 10.8 13.8 M 16.8 10.2 C 16.2 9.4 15.4 9.2 14.6 9.4 C 13.4 9.8 13.0 11.0 13.0 12.0 C 13.0 13.0 13.4 14.2 14.6 14.6 C 15.4 14.8 16.2 14.6 16.8 13.8"/>`;
  },
};

export const diagnosticIcon: IconDefinition = {
  id: 'diagnostic',
  category: 'Dashboard',
  draw: (r) => {
    const cr = Math.min(r * 0.82, 2.5);
    const pulse = smoothPoly(
      [[6.6, 11.4], [9.0, 11.4, 0.3], [10.6, 8.2, 0.35], [13.2, 14.2, 0.35], [14.8, 11.4, 0.3], [17.4, 11.4]],
      r * 0.35,
      false
    );
    return `<path d="${squircleRect(3.6, 4.4, 16.8, 12.8, cr)} M 9.0 19.8 H 15.0 M 12 17.2 V 19.8 ${pulse}"/>`;
  },
};

export const videosIcon: IconDefinition = {
  id: 'videos',
  category: 'Social',
  draw: (r) => {
    const cr = Math.min(r * 0.78, 2.4);
    const play = smoothPoly([[11.8, 10.6, 0.42], [15.8, 13.0, 0.42], [11.8, 15.4, 0.42]], Math.min(r * 0.45, 1.3), true);
    const back = smoothPoly([[4.0, 15.6], [4.0, 4.8, 0.88], [16.8, 4.8]], cr, false);
    return `<path d="${back} ${squircleRect(6.8, 7.6, 13.4, 11.2, cr)} ${play}"/>`;
  },
};

export const multitaskingIcon: IconDefinition = {
  id: 'multitasking',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.75, 2.3);
    const mid = smoothPoly([[6.8, 15.2], [6.8, 7.0, 0.85], [16.8, 7.0]], cr, false);
    const back = smoothPoly([[4.0, 12.2], [4.0, 4.4, 0.85], [13.8, 4.4]], cr, false);
    return `<path d="${back} ${mid} ${squircleRect(9.6, 9.6, 10.6, 10.0, cr)} M 9.6 12.8 H 20.2"/>`;
  },
};

export const troubleshootIcon: IconDefinition = {
  id: 'troubleshoot',
  category: 'Actions',
  draw: () =>
    '<path d="M 14.4 6.2 A 4.4 4.4 0 0 0 8.8 11.6 L 4.6 15.8 A 1.75 1.75 0 0 0 7.1 18.3 L 11.3 14.1 A 4.4 4.4 0 0 0 16.7 8.5 L 14.2 11.0 L 11.9 8.7 Z M 16.8 15.4 V 17.3 M 16.8 19.0 H 16.82"/><circle cx="16.8" cy="17.2" r="3.4"/>',
};

export const autoplayIcon: IconDefinition = {
  id: 'autoplay',
  category: 'Social',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.3);
    const play = smoothPoly([[10.2, 8.8, 0.42], [15.4, 12.0, 0.42], [10.2, 15.2, 0.42]], cr, true);
    const arrow = smoothPoly([[15.8, 6.8], [18.62, 6.83, 0.3], [18.6, 4.0]], cr, false);
    return `<path d="M 20.27 13.46 A 8.4 8.4 0 1 1 18.62 6.83 ${arrow} ${play}"/>`;
  },
};

export const backwardIcon: IconDefinition = {
  id: 'backward',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.52, 1.6);
    const left = smoothPoly([[11.6, 7.0, 0.42], [4.6, 12.0, 0.45], [11.6, 17.0, 0.42]], cr, true);
    const right = smoothPoly([[19.4, 7.0, 0.42], [12.4, 12.0, 0.45], [19.4, 17.0, 0.42]], cr, true);
    return `<path d="${left} ${right}"/>`;
  },
};

export const forwardIcon: IconDefinition = {
  id: 'forward',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.52, 1.6);
    const left = smoothPoly([[4.6, 7.0, 0.42], [11.6, 12.0, 0.45], [4.6, 17.0, 0.42]], cr, true);
    const right = smoothPoly([[12.4, 7.0, 0.42], [19.4, 12.0, 0.45], [12.4, 17.0, 0.42]], cr, true);
    return `<path d="${left} ${right}"/>`;
  },
};

export const folderUserIcon: IconDefinition = {
  id: 'folder-user',
  category: 'Actions',
  draw: (r) => {
    const cr = Math.min(r * 0.72, 2.2);
    const folder = smoothPoly(
      [
        [3.8, 5.4, 0.85],
        [9.8, 5.4, 0.45],
        [11.6, 7.8, 0.35],
        [20.2, 7.8, 0.85],
        [20.2, 18.8, 0.85],
        [3.8, 18.8, 0.85],
      ],
      cr,
      true,
      0.35
    );
    return `<path d="${folder} M 8.8 18.6 C 8.8 16.4 10.2 15.2 12.0 15.2 C 13.8 15.2 15.2 16.4 15.2 18.6"/><circle cx="12.0" cy="12.0" r="1.8"/>`;
  },
};

export const passkeysIcon: IconDefinition = {
  id: 'passkeys',
  category: 'Alerts',
  draw: () =>
    '<circle cx="9.2" cy="7.8" r="3.0"/><path d="M 4.0 19.2 C 4.0 15.6 6.2 13.6 9.2 13.6 C 11.2 13.6 12.6 14.4 13.4 15.6 M 17.4 11.6 V 18.8 M 17.4 16.2 H 19.8 M 17.4 18.4 H 19.4"/><circle cx="17.4" cy="9.4" r="2.2"/>',
};

export const subscriptionsIcon: IconDefinition = {
  id: 'subscriptions',
  category: 'Social',
  draw: (r) => {
    const cr = Math.min(r * 0.78, 2.4);
    const play = smoothPoly([[10.4, 12.2, 0.42], [14.6, 14.6, 0.42], [10.4, 17.0, 0.42]], Math.min(r * 0.45, 1.3), true);
    return `<path d="M 7.6 4.4 H 16.4 M 5.8 7.0 H 18.2 ${squircleRect(3.8, 9.6, 16.4, 10.0, cr)} ${play}"/>`;
  },
};

// ==========================================
// EXPORT WAVE 3 CATALOG ARRAY (68 ICONS)
// ==========================================

export const WAVE3_ICONS_CATALOG: IconDefinition[] = [
  chatIcon,
  statusIcon,
  broadcastIcon,
  chatPlusIcon,
  stickerIcon,
  stickerPlusIcon,
  pollIcon,
  disappearingMessageIcon,
  cursorIcon,
  cursorHandIcon,
  cursorGrabIcon,
  cursorGrabbingIcon,
  cursorTextIcon,
  cursorMoveIcon,
  cursorCrosshairIcon,
  cursorPlusIcon,
  cursorBlockIcon,
  cursorWaitIcon,
  cursorResizeHorizontalIcon,
  zoomInIcon,
  zoomOutIcon,
  pinAngledIcon,
  treePineIcon,
  treeDeciduousIcon,
  treePalmIcon,
  flowerIcon,
  flowerTulipIcon,
  flowerLotusIcon,
  collageIcon,
  presentationIcon,
  remixIcon,
  branchesIcon,
  typographyIcon,
  eyedropperIcon,
  crawlerIcon,
  alienIcon,
  robotIcon,
  scribbleIcon,
  scribblePadIcon,
  writingIcon,
  researchIcon,
  sizeChartIcon,
  preferencesIcon,
  jobSearchIcon,
  calculatorIcon,
  feedbackIcon,
  familyIcon,
  familySafetyIcon,
  tabSearchIcon,
  folderSearchIcon,
  fileSearchIcon,
  accountsSearchIcon,
  gamingIcon,
  keyboardIcon,
  mouseIcon,
  touchpadIcon,
  usbIcon,
  captionsIcon,
  diagnosticIcon,
  videosIcon,
  multitaskingIcon,
  troubleshootIcon,
  autoplayIcon,
  backwardIcon,
  forwardIcon,
  folderUserIcon,
  passkeysIcon,
  subscriptionsIcon,
];
