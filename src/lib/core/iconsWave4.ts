/**
 * Kinetic Icons — Wave 4 Icon Set (44 New Icons)
 * Complete Circle & Square Container Variants (Arrows, Chevrons, Activity,
 * Key, Lock, Zap, Percent, Multiply, Trending, Exchange), Round Chat/Stickers,
 * Eraser, Files Check, Scale, Browser Search, Vertical Resize, H3, H4 & Swatches.
 */

import {
  fmt,
  kineticRoundBubblePath,
  smoothPoly,
  squircleRect,
  tipPullback,
  type IconDefinition,
} from './engine';

// ==========================================
// 1. ARROW CIRCLE & SQUARE VARIANTS (6)
// ==========================================

export const arrowUpRightCircleIcon: IconDefinition = {
  id: 'arrow-up-right-circle',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.3);
    const head = smoothPoly([[9.4, 8.8], [15.2, 8.8, 0.38], [15.2, 14.6]], cr, false);
    return `<circle cx="12" cy="12" r="8.6"/><path d="M 8.8 15.2 L 14.8 9.2 ${head}"/>`;
  },
};

export const arrowLeftSquareIcon: IconDefinition = {
  id: 'arrow-left-square',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.3);
    const pb = tipPullback(r, 0.36);
    const head = smoothPoly([[11.6, 8.6], [8.2, 12.0, 0.42], [11.6, 15.4]], cr, false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M ${fmt(8.2 + pb)} 12.0 H 15.8 ${head}"/>`;
  },
};

export const arrowRightSquareIcon: IconDefinition = {
  id: 'arrow-right-square',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.3);
    const pb = tipPullback(r, 0.36);
    const head = smoothPoly([[12.4, 8.6], [15.8, 12.0, 0.42], [12.4, 15.4]], cr, false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 8.2 12.0 H ${fmt(15.8 - pb)} ${head}"/>`;
  },
};

export const arrowUpSquareIcon: IconDefinition = {
  id: 'arrow-up-square',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.3);
    const pb = tipPullback(r, 0.36);
    const head = smoothPoly([[8.6, 11.6], [12.0, 8.2, 0.42], [15.4, 11.6]], cr, false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 12.0 ${fmt(8.2 + pb)} V 15.8 ${head}"/>`;
  },
};

export const arrowDownSquareIcon: IconDefinition = {
  id: 'arrow-down-square',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.3);
    const pb = tipPullback(r, 0.36);
    const head = smoothPoly([[8.6, 12.4], [12.0, 15.8, 0.42], [15.4, 12.4]], cr, false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 12.0 8.2 V ${fmt(15.8 - pb)} ${head}"/>`;
  },
};

export const arrowUpRightSquareIcon: IconDefinition = {
  id: 'arrow-up-right-square',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.3);
    const head = smoothPoly([[9.4, 8.8], [15.2, 8.8, 0.38], [15.2, 14.6]], cr, false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 8.8 15.2 L 14.8 9.2 ${head}"/>`;
  },
};

// ==========================================
// 2. CHEVRON CIRCLE & SQUARE VARIANTS (7)
// ==========================================

export const chevronLeftCircleIcon: IconDefinition = {
  id: 'chevron-left-circle',
  category: 'Navigation',
  draw: (r) => {
    const ch = smoothPoly([[13.4, 8.4], [9.8, 12.0, 0.45], [13.4, 15.6]], Math.min(r * 0.55, 1.6), false);
    return `<circle cx="12" cy="12" r="8.6"/><path d="${ch}"/>`;
  },
};

export const chevronRightCircleIcon: IconDefinition = {
  id: 'chevron-right-circle',
  category: 'Navigation',
  draw: (r) => {
    const ch = smoothPoly([[10.6, 8.4], [14.2, 12.0, 0.45], [10.6, 15.6]], Math.min(r * 0.55, 1.6), false);
    return `<circle cx="12" cy="12" r="8.6"/><path d="${ch}"/>`;
  },
};

export const chevronUpCircleIcon: IconDefinition = {
  id: 'chevron-up-circle',
  category: 'Navigation',
  draw: (r) => {
    const ch = smoothPoly([[8.4, 13.4], [12.0, 9.8, 0.45], [15.6, 13.4]], Math.min(r * 0.55, 1.6), false);
    return `<circle cx="12" cy="12" r="8.6"/><path d="${ch}"/>`;
  },
};

export const chevronLeftSquareIcon: IconDefinition = {
  id: 'chevron-left-square',
  category: 'Navigation',
  draw: (r) => {
    const ch = smoothPoly([[13.4, 8.4], [9.8, 12.0, 0.45], [13.4, 15.6]], Math.min(r * 0.55, 1.6), false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} ${ch}"/>`;
  },
};

export const chevronRightSquareIcon: IconDefinition = {
  id: 'chevron-right-square',
  category: 'Navigation',
  draw: (r) => {
    const ch = smoothPoly([[10.6, 8.4], [14.2, 12.0, 0.45], [10.6, 15.6]], Math.min(r * 0.55, 1.6), false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} ${ch}"/>`;
  },
};

export const chevronUpSquareIcon: IconDefinition = {
  id: 'chevron-up-square',
  category: 'Navigation',
  draw: (r) => {
    const ch = smoothPoly([[8.4, 13.4], [12.0, 9.8, 0.45], [15.6, 13.4]], Math.min(r * 0.55, 1.6), false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} ${ch}"/>`;
  },
};

export const chevronDownSquareIcon: IconDefinition = {
  id: 'chevron-down-square',
  category: 'Navigation',
  draw: (r) => {
    const ch = smoothPoly([[8.4, 10.6], [12.0, 14.2, 0.45], [15.6, 10.6]], Math.min(r * 0.55, 1.6), false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} ${ch}"/>`;
  },
};

// ==========================================
// 3. UTILITY, SECURITY & FINANCE CONTAINERS (19)
// ==========================================

export const activityCircleIcon: IconDefinition = {
  id: 'activity-circle',
  category: 'Dashboard',
  draw: (r) => {
    const pulse = smoothPoly(
      [[6.8, 12.0], [9.2, 12.0, 0.25], [10.7, 8.4, 0.3], [13.3, 15.6, 0.3], [14.8, 12.0, 0.25], [17.2, 12.0]],
      r * 0.3,
      false
    );
    return `<circle cx="12" cy="12" r="8.6"/><path d="${pulse}"/>`;
  },
};

export const activitySquareIcon: IconDefinition = {
  id: 'activity-square',
  category: 'Dashboard',
  draw: (r) => {
    const pulse = smoothPoly(
      [[6.8, 12.0], [9.2, 12.0, 0.25], [10.7, 8.4, 0.3], [13.3, 15.6, 0.3], [14.8, 12.0, 0.25], [17.2, 12.0]],
      r * 0.3,
      false
    );
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} ${pulse}"/>`;
  },
};

export const keyCircleIcon: IconDefinition = {
  id: 'key-circle',
  category: 'Alerts',
  draw: () =>
    '<circle cx="12" cy="12" r="8.6"/><circle cx="9.6" cy="12.0" r="2.2"/><path d="M 11.8 12.0 H 16.8 M 14.8 12.0 V 14.2 M 16.8 12.0 V 13.8"/>',
};

export const keySquareIcon: IconDefinition = {
  id: 'key-square',
  category: 'Alerts',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 11.8 12.0 H 16.8 M 14.8 12.0 V 14.2 M 16.8 12.0 V 13.8"/><circle cx="9.6" cy="12.0" r="2.2"/>`,
};

export const lockCircleIcon: IconDefinition = {
  id: 'lock-circle',
  category: 'Alerts',
  draw: (r) => {
    const body = squircleRect(8.4, 11.4, 7.2, 5.2, Math.min(r * 0.55, 1.5));
    return `<circle cx="12" cy="12" r="8.6"/><path d="${body} M 9.8 11.4 V 9.6 A 2.2 2.2 0 0 1 14.2 9.6 V 11.4"/>`;
  },
};

export const lockSquareIcon: IconDefinition = {
  id: 'lock-square',
  category: 'Alerts',
  draw: (r) => {
    const body = squircleRect(8.4, 11.4, 7.2, 5.2, Math.min(r * 0.55, 1.5));
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} ${body} M 9.8 11.4 V 9.6 A 2.2 2.2 0 0 1 14.2 9.6 V 11.4"/>`;
  },
};

export const zapCircleIcon: IconDefinition = {
  id: 'zap-circle',
  category: 'Alerts',
  draw: (r) => {
    const bolt = smoothPoly(
      [[12.6, 7.0, 0.25], [8.6, 12.6, 0.3], [11.8, 12.6, 0.2], [11.4, 17.0, 0.25], [15.4, 11.4, 0.3], [12.2, 11.4, 0.2]],
      Math.min(r * 0.32, 0.9),
      true
    );
    return `<circle cx="12" cy="12" r="8.6"/><path d="${bolt}"/>`;
  },
};

export const zapSquareIcon: IconDefinition = {
  id: 'zap-square',
  category: 'Alerts',
  draw: (r) => {
    const bolt = smoothPoly(
      [[12.6, 7.0, 0.25], [8.6, 12.6, 0.3], [11.8, 12.6, 0.2], [11.4, 17.0, 0.25], [15.4, 11.4, 0.3], [12.2, 11.4, 0.2]],
      Math.min(r * 0.32, 0.9),
      true
    );
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} ${bolt}"/>`;
  },
};

export const percentCircleIcon: IconDefinition = {
  id: 'percent-circle',
  category: 'Dashboard',
  draw: () =>
    '<circle cx="12" cy="12" r="8.6"/><path d="M 15.4 8.6 L 8.6 15.4"/><circle cx="9.4" cy="9.4" r="1.25"/><circle cx="14.6" cy="14.6" r="1.25"/>',
};

export const percentSquareIcon: IconDefinition = {
  id: 'percent-square',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 15.4 8.6 L 8.6 15.4"/><circle cx="9.4" cy="9.4" r="1.25"/><circle cx="14.6" cy="14.6" r="1.25"/>`,
};

export const multiplyIcon: IconDefinition = {
  id: 'multiply',
  category: 'Actions',
  draw: () => '<path d="M 6.2 6.2 L 17.8 17.8 M 17.8 6.2 L 6.2 17.8"/>',
};

export const multiplyCircleIcon: IconDefinition = {
  id: 'multiply-circle',
  category: 'Actions',
  draw: () =>
    '<circle cx="12" cy="12" r="8.6"/><path d="M 9.2 9.2 L 14.8 14.8 M 14.8 9.2 L 9.2 14.8"/>',
};

export const multiplySquareIcon: IconDefinition = {
  id: 'multiply-square',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 9.2 9.2 L 14.8 14.8 M 14.8 9.2 L 9.2 14.8"/>`,
};

export const trendingUpCircleIcon: IconDefinition = {
  id: 'trending-up-circle',
  category: 'Dashboard',
  draw: (r) => {
    const cr = Math.min(r * 0.4, 1.1);
    const line = smoothPoly([[7.6, 14.8], [10.8, 11.4, 0.35], [12.8, 13.4, 0.35], [16.4, 9.6]], cr, false);
    const head = smoothPoly([[13.4, 9.6], [16.4, 9.6, 0.3], [16.4, 12.6]], cr, false);
    return `<circle cx="12" cy="12" r="8.6"/><path d="${line} ${head}"/>`;
  },
};

export const trendingUpSquareIcon: IconDefinition = {
  id: 'trending-up-square',
  category: 'Dashboard',
  draw: (r) => {
    const cr = Math.min(r * 0.4, 1.1);
    const line = smoothPoly([[7.6, 14.8], [10.8, 11.4, 0.35], [12.8, 13.4, 0.35], [16.4, 9.6]], cr, false);
    const head = smoothPoly([[13.4, 9.6], [16.4, 9.6, 0.3], [16.4, 12.6]], cr, false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} ${line} ${head}"/>`;
  },
};

export const trendingDownCircleIcon: IconDefinition = {
  id: 'trending-down-circle',
  category: 'Dashboard',
  draw: (r) => {
    const cr = Math.min(r * 0.4, 1.1);
    const line = smoothPoly([[7.6, 9.2], [10.8, 12.6, 0.35], [12.8, 10.6, 0.35], [16.4, 14.4]], cr, false);
    const head = smoothPoly([[13.4, 14.4], [16.4, 14.4, 0.3], [16.4, 11.4]], cr, false);
    return `<circle cx="12" cy="12" r="8.6"/><path d="${line} ${head}"/>`;
  },
};

export const trendingDownSquareIcon: IconDefinition = {
  id: 'trending-down-square',
  category: 'Dashboard',
  draw: (r) => {
    const cr = Math.min(r * 0.4, 1.1);
    const line = smoothPoly([[7.6, 9.2], [10.8, 12.6, 0.35], [12.8, 10.6, 0.35], [16.4, 14.4]], cr, false);
    const head = smoothPoly([[13.4, 14.4], [16.4, 14.4, 0.3], [16.4, 11.4]], cr, false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} ${line} ${head}"/>`;
  },
};

export const exchangeCircleIcon: IconDefinition = {
  id: 'exchange-circle',
  category: 'Dashboard',
  draw: (r) => {
    const cr = Math.min(r * 0.35, 1.0);
    const h1 = smoothPoly([[14.2, 8.0], [16.2, 10.0, 0.32], [14.2, 12.0]], cr, false);
    const h2 = smoothPoly([[9.8, 12.0], [7.8, 14.0, 0.32], [9.8, 16.0]], cr, false);
    return `<circle cx="12" cy="12" r="8.6"/><path d="M 7.8 10.0 H 16.0 ${h1} M 16.2 14.0 H 8.0 ${h2}"/>`;
  },
};

export const exchangeSquareIcon: IconDefinition = {
  id: 'exchange-square',
  category: 'Dashboard',
  draw: (r) => {
    const cr = Math.min(r * 0.35, 1.0);
    const h1 = smoothPoly([[14.2, 8.0], [16.2, 10.0, 0.32], [14.2, 12.0]], cr, false);
    const h2 = smoothPoly([[9.8, 12.0], [7.8, 14.0, 0.32], [9.8, 16.0]], cr, false);
    return `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 7.8 10.0 H 16.0 ${h1} M 16.2 14.0 H 8.0 ${h2}"/>`;
  },
};

// ==========================================
// 4. ADDITIONAL NEW ICONS & ROUND VARIANTS (11)
// ==========================================

export const eraserIcon: IconDefinition = {
  id: 'eraser',
  category: 'Actions',
  draw: (r) => {
    const cr = Math.min(r * 0.55, 1.8);
    const body = smoothPoly(
      [
        [13.4, 4.6, 0.65],
        [19.8, 11.0, 0.65],
        [11.6, 19.2, 0.55],
        [7.4, 19.2, 0.5],
        [4.2, 16.0, 0.65],
      ],
      cr,
      true,
      0.34
    );
    return `<path d="${body} M 8.8 10.0 L 14.4 15.6 M 11.4 19.2 H 20.2"/>`;
  },
};

export const filesCheckIcon: IconDefinition = {
  id: 'files-check',
  category: 'Actions',
  draw: (r) => {
    const cr = Math.min(r * 0.72, 2.2);
    const back = smoothPoly([[4.4, 15.6], [4.4, 4.2, 0.85], [14.0, 4.2]], cr, false);
    const front = smoothPoly(
      [
        [7.4, 7.2, 0.85],
        [14.8, 7.2, 0.3],
        [19.2, 11.6, 0.3],
        [19.2, 20.0, 0.85],
        [7.4, 20.0, 0.85],
      ],
      cr,
      true,
      0.36
    );
    const chk = smoothPoly([[10.6, 14.4], [12.4, 16.2, 0.3], [16.0, 12.6]], Math.min(r * 0.4, 1.1), false);
    return `<path d="${back} ${front} M 14.6 7.4 V 11.8 H 19.0 ${chk}"/>`;
  },
};

export const cursorResizeVerticalIcon: IconDefinition = {
  id: 'cursor-resize-vertical',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.5, 1.4);
    const pb = tipPullback(r, 0.36);
    const up = smoothPoly([[9.2, 6.8], [12.0, 4.0, 0.42], [14.8, 6.8]], cr, false);
    const down = smoothPoly([[9.2, 17.2], [12.0, 20.0, 0.42], [14.8, 17.2]], cr, false);
    return `<path d="M 4.6 12.0 H 19.4 M 12.0 ${fmt(4.0 + pb)} V 9.4 M 12.0 14.6 V ${fmt(20.0 - pb)} ${up} ${down}"/>`;
  },
};

export const scaleIcon: IconDefinition = {
  id: 'scale',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.55, 1.8);
    const ruler = smoothPoly(
      [
        [15.4, 3.8, 0.6],
        [20.2, 8.6, 0.6],
        [8.6, 20.2, 0.6],
        [3.8, 15.4, 0.6],
      ],
      cr,
      true,
      0.34
    );
    return `<path d="${ruler} M 13.0 6.2 L 15.0 8.2 M 10.6 8.6 L 12.0 10.0 M 8.2 11.0 L 10.2 13.0 M 5.8 13.4 L 7.2 14.8"/>`;
  },
};

export const browserSearchIcon: IconDefinition = {
  id: 'browser-search',
  category: 'Navigation',
  draw: () =>
    '<path d="M 19.8 10.8 A 8.0 8.0 0 1 0 10.8 19.8 M 3.8 11.8 H 12.2 M 11.8 3.8 C 9.4 6.2 8.4 9.0 8.4 11.8 C 8.4 14.6 9.4 17.4 11.2 19.6 M 11.8 3.8 C 13.8 5.8 14.8 8.2 15.1 10.8 M 18.2 18.2 L 20.4 20.4"/><circle cx="15.8" cy="15.8" r="3.2"/>',
};

export const chatRoundIcon: IconDefinition = {
  id: 'chat-round',
  category: 'Social',
  draw: (r) =>
    `<path d="${kineticRoundBubblePath(r)} M 8.8 10.2 H 15.2 M 8.8 13.4 H 13.2"/>`,
};

export const chatPlusRoundIcon: IconDefinition = {
  id: 'chat-plus-round',
  category: 'Social',
  draw: (r) =>
    `<path d="${kineticRoundBubblePath(r)} M 12.0 9.0 V 15.0 M 9.0 12.0 H 15.0"/>`,
};

export const stickerRoundIcon: IconDefinition = {
  id: 'sticker-round',
  category: 'Social',
  draw: () =>
    '<path d="M 13.4 20.1 A 8.2 8.2 0 1 1 20.1 13.4 C 18.4 15.8 15.8 18.4 13.4 20.1 Z M 13.4 20.0 V 15.4 C 13.4 14.2 14.2 13.4 15.4 13.4 H 20.0 M 8.8 14.0 Q 10.5 15.6 12.4 14.6"/><circle cx="9.2" cy="9.6" r="0.85"/><circle cx="14.4" cy="9.6" r="0.85"/>',
};

export const stickerPlusRoundIcon: IconDefinition = {
  id: 'sticker-plus-round',
  category: 'Social',
  draw: () =>
    '<path d="M 13.4 20.1 A 8.2 8.2 0 1 1 20.1 13.4 C 18.4 15.8 15.8 18.4 13.4 20.1 Z M 13.4 20.0 V 15.4 C 13.4 14.2 14.2 13.4 15.4 13.4 H 20.0 M 11.4 8.2 V 14.2 M 8.4 11.2 H 14.4"/>',
};

export const heading3Icon: IconDefinition = {
  id: 'heading-3',
  category: 'Design',
  draw: () =>
    '<path d="M 4.0 6.4 V 17.6 M 11.2 6.4 V 17.6 M 4.0 12.0 H 11.2 M 14.8 10.6 C 15.2 9.8 16.0 9.4 17.2 9.4 C 18.6 9.4 19.6 10.2 19.6 11.4 C 19.6 12.5 18.8 13.2 17.4 13.4 C 18.9 13.6 19.8 14.4 19.8 15.6 C 19.8 16.9 18.7 17.6 17.2 17.6 C 16.0 17.6 15.1 17.2 14.6 16.4"/>',
};

export const heading4Icon: IconDefinition = {
  id: 'heading-4',
  category: 'Design',
  draw: () =>
    '<path d="M 4.0 6.4 V 17.6 M 11.2 6.4 V 17.6 M 4.0 12.0 H 11.2 M 18.6 17.6 V 9.4 L 14.2 14.8 H 20.2"/>',
};

export const swatchesIcon: IconDefinition = {
  id: 'swatches',
  category: 'Design',
  draw: (r) => {
    const cr = Math.min(r * 0.62, 1.85);
    const c = cr * 0.58;
    const front =
      cr <= 0.05
        ? 'M 4.2 16.6 V 4.0 H 11.0 V 16.6 A 3.4 3.4 0 0 1 4.2 16.6 Z'
        : `M 4.2 16.6 V ${fmt(4.0 + cr)} C 4.2 ${fmt(4.0 + cr - c)} ${fmt(4.2 + cr - c)} 4.0 ${fmt(4.2 + cr)} 4.0 H ${fmt(11.0 - cr)} C ${fmt(11.0 - cr + c)} 4.0 11.0 ${fmt(4.0 + cr - c)} 11.0 ${fmt(4.0 + cr)} V 16.6 A 3.4 3.4 0 0 1 4.2 16.6 Z`;
    const middle = smoothPoly(
      [
        [11.0, 8.39],
        [13.83, 5.57, 0.65],
        [18.63, 10.37, 0.65],
        [10.0, 19.0],
      ],
      cr,
      false,
      0.34
    );
    const back = smoothPoly(
      [
        [15.8, 13.2],
        [20.0, 13.2, 0.65],
        [20.0, 20.0, 0.65],
        [7.6, 20.0],
      ],
      cr,
      false,
      0.34
    );
    return `<path d="${front} ${middle} ${back}"/><circle cx="7.6" cy="16.6" r="0.9"/>`;
  },
};

// ==========================================
// EXPORT WAVE 4 CATALOG ARRAY (44 ICONS)
// ==========================================

export const WAVE4_ICONS_CATALOG: IconDefinition[] = [
  arrowUpRightCircleIcon,
  arrowLeftSquareIcon,
  arrowRightSquareIcon,
  arrowUpSquareIcon,
  arrowDownSquareIcon,
  arrowUpRightSquareIcon,
  chevronLeftCircleIcon,
  chevronRightCircleIcon,
  chevronUpCircleIcon,
  chevronLeftSquareIcon,
  chevronRightSquareIcon,
  chevronUpSquareIcon,
  chevronDownSquareIcon,
  activityCircleIcon,
  activitySquareIcon,
  keyCircleIcon,
  keySquareIcon,
  lockCircleIcon,
  lockSquareIcon,
  zapCircleIcon,
  zapSquareIcon,
  percentCircleIcon,
  percentSquareIcon,
  multiplyIcon,
  multiplyCircleIcon,
  multiplySquareIcon,
  trendingUpCircleIcon,
  trendingUpSquareIcon,
  trendingDownCircleIcon,
  trendingDownSquareIcon,
  exchangeCircleIcon,
  exchangeSquareIcon,
  eraserIcon,
  filesCheckIcon,
  cursorResizeVerticalIcon,
  scaleIcon,
  browserSearchIcon,
  chatRoundIcon,
  chatPlusRoundIcon,
  stickerRoundIcon,
  stickerPlusRoundIcon,
  heading3Icon,
  heading4Icon,
  swatchesIcon,
];
