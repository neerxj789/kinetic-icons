/**
 * Kinetic Icons — Extended Catalog (+110 Icons)
 * Covers smart shape variations, rich text & notes, AI/dev/public brands,
 * utilities, privacy, performance, responsive breakpoints, food, finance,
 * documents/tables, real estate, industry, and e-commerce.
 */

import {
  fmt,
  kineticMiniSpark,
  smoothPoly,
  squircleRect,
  tipPullback,
  type IconDefinition,
} from './engine';

// ==========================================
// 1. SMART SHAPE VARIATIONS (Circle & Box)
// ==========================================

export const plusCircleIcon: IconDefinition = {
  id: 'plus-circle',
  category: 'Actions',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 12 8.2 V 15.8 M 8.2 12 H 15.8"/>`,
};

export const plusSquareIcon: IconDefinition = {
  id: 'plus-square',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 12 8.2 V 15.8 M 8.2 12 H 15.8"/>`,
};

export const minusCircleIcon: IconDefinition = {
  id: 'minus-circle',
  category: 'Actions',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 8.2 12 H 15.8"/>`,
};

export const minusSquareIcon: IconDefinition = {
  id: 'minus-square',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 8.2 12 H 15.8"/>`,
};

export const playCircleIcon: IconDefinition = {
  id: 'play-circle',
  category: 'Social',
  draw: (r) =>
    `<circle cx="12" cy="12" r="8.6"/><path d="${smoothPoly(
      [
        [10.2, 8.8, 0.55],
        [15.6, 12, 0.55],
        [10.2, 15.2, 0.55],
      ],
      r,
      true
    )}"/>`,
};

export const pauseCircleIcon: IconDefinition = {
  id: 'pause-circle',
  category: 'Social',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 9.8 8.8 V 15.2 M 14.2 8.8 V 15.2"/>`,
};

export const arrowLeftCircleIcon: IconDefinition = {
  id: 'arrow-left-circle',
  category: 'Navigation',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<circle cx="12" cy="12" r="8.6"/><path d="M 15.8 12 H ${fmt(8.4 + pull)} ${smoothPoly(
      [
        [11.4, 8.8],
        [8.2, 12, 0.42],
        [11.4, 15.2],
      ],
      r,
      false
    )}"/>`;
  },
};

export const arrowRightCircleIcon: IconDefinition = {
  id: 'arrow-right-circle',
  category: 'Navigation',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<circle cx="12" cy="12" r="8.6"/><path d="M 8.2 12 H ${fmt(15.6 - pull)} ${smoothPoly(
      [
        [12.6, 8.8],
        [15.8, 12, 0.42],
        [12.6, 15.2],
      ],
      r,
      false
    )}"/>`;
  },
};

export const arrowUpCircleIcon: IconDefinition = {
  id: 'arrow-up-circle',
  category: 'Navigation',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<circle cx="12" cy="12" r="8.6"/><path d="M 12 15.8 V ${fmt(8.4 + pull)} ${smoothPoly(
      [
        [8.8, 11.4],
        [12, 8.2, 0.42],
        [15.2, 11.4],
      ],
      r,
      false
    )}"/>`;
  },
};

export const arrowDownCircleIcon: IconDefinition = {
  id: 'arrow-down-circle',
  category: 'Navigation',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<circle cx="12" cy="12" r="8.6"/><path d="M 12 8.2 V ${fmt(15.6 - pull)} ${smoothPoly(
      [
        [8.8, 12.6],
        [12, 15.8, 0.42],
        [15.2, 12.6],
      ],
      r,
      false
    )}"/>`;
  },
};

export const chevronDownCircleIcon: IconDefinition = {
  id: 'chevron-down-circle',
  category: 'Navigation',
  draw: (r) =>
    `<circle cx="12" cy="12" r="8.6"/><path d="${smoothPoly(
      [
        [8.6, 10.6],
        [12, 14, 0.45],
        [15.4, 10.6],
      ],
      r,
      false
    )}"/>`,
};

export const moreHorizontalCircleIcon: IconDefinition = {
  id: 'more-horizontal-circle',
  category: 'Navigation',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><circle cx="8.2" cy="12" r="0.8"/><circle cx="12" cy="12" r="0.8"/><circle cx="15.8" cy="12" r="0.8"/>`,
};

export const helpSquareIcon: IconDefinition = {
  id: 'help-square',
  category: 'Alerts',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 9.8 9.6 C 9.8 8.2 10.8 7.4 12.1 7.4 C 13.4 7.4 14.3 8.2 14.3 9.3 C 14.3 10.6 12.1 11.1 12.1 12.7"/><circle cx="12.1" cy="15.6" r="0.65"/>`,
};

// ==========================================
// 2. NOTES & RICH TEXT EDITOR
// ==========================================

export const boldIcon: IconDefinition = {
  id: 'bold',
  category: 'Design',
  draw: () =>
    `<path d="M 6.8 4.4 H 13.4 C 15.7 4.4 17.4 6 17.4 8.1 C 17.4 10.2 15.7 11.8 13.4 11.8 H 6.8 Z M 6.8 11.8 H 14.4 C 16.8 11.8 18.6 13.5 18.6 15.7 C 18.6 17.9 16.8 19.6 14.4 19.6 H 6.8 Z"/>`,
};

export const italicIcon: IconDefinition = {
  id: 'italic',
  category: 'Design',
  draw: () =>
    `<path d="M 10.2 4.6 H 17.8 M 6.2 19.4 H 13.8 M 14 4.6 L 10 19.4"/>`,
};

export const underlineIcon: IconDefinition = {
  id: 'underline',
  category: 'Design',
  draw: () =>
    `<path d="M 6.6 4.6 V 11.2 A 5.4 5.4 0 0 0 17.4 11.2 V 4.6 M 5.2 19.6 H 18.8"/>`,
};

export const strikethroughIcon: IconDefinition = {
  id: 'strikethrough',
  category: 'Design',
  draw: () =>
    `<path d="M 4.4 12 H 19.6 M 16.4 7.6 C 16.2 5.7 14.4 4.4 11.9 4.4 C 9.4 4.4 7.6 5.6 7.6 7.4 C 7.6 8.8 8.6 9.6 10.2 10.2 M 7.6 16.2 C 7.8 18.2 9.6 19.6 12.2 19.6 C 14.8 19.6 16.6 18.3 16.6 16.3 C 16.6 15.1 15.9 14.2 14.8 13.6"/>`,
};

export const quoteIcon: IconDefinition = {
  id: 'quote',
  category: 'Design',
  draw: (r) =>
    `<path d="${squircleRect(3.6, 6.2, 6.6, 6.6, Math.min(r * 0.72, 2.2))} M 10.2 12.8 C 10.2 15.6 8.6 17.4 5.6 18.2 ${squircleRect(13.8, 6.2, 6.6, 6.6, Math.min(r * 0.72, 2.2))} M 20.4 12.8 C 20.4 15.6 18.8 17.4 15.8 18.2"/>`,
};

export const headingIcon: IconDefinition = {
  id: 'heading',
  category: 'Design',
  draw: () =>
    `<path d="M 6.4 4.8 V 19.2 M 17.6 4.8 V 19.2 M 6.4 12 H 17.6"/>`,
};

export const heading1Icon: IconDefinition = {
  id: 'heading-1',
  category: 'Design',
  draw: (r) =>
    `<path d="M 4.2 5.4 V 18.6 M 12.2 5.4 V 18.6 M 4.2 12 H 12.2 ${smoothPoly(
      [
        [16.2, 11.4],
        [18.8, 9.6, 0.3],
        [18.8, 18.6],
      ],
      r,
      false
    )}"/>`,
};

export const heading2Icon: IconDefinition = {
  id: 'heading-2',
  category: 'Design',
  draw: () =>
    `<path d="M 3.8 5.4 V 18.6 M 11.4 5.4 V 18.6 M 3.8 12 H 11.4 M 15.2 11.6 C 15.2 10.2 16.2 9.4 17.6 9.4 C 19 9.4 20 10.3 20 11.6 C 20 13.6 15.2 15.8 15.2 18.6 H 20.2"/>`,
};

export const paragraphIcon: IconDefinition = {
  id: 'paragraph',
  category: 'Design',
  draw: () =>
    `<path d="M 13.2 4.6 V 19.4 M 17.4 4.6 V 19.4 M 18.6 4.6 H 10.6 C 7.9 4.6 6 6.4 6 8.8 C 6 11.2 7.9 13 10.6 13 H 13.2"/>`,
};

export const alignLeftIcon: IconDefinition = {
  id: 'align-left',
  category: 'Design',
  draw: () =>
    `<path d="M 4 6 H 20 M 4 10 H 14.8 M 4 14 H 18.4 M 4 18 H 12.6"/>`,
};

export const alignCenterIcon: IconDefinition = {
  id: 'align-center',
  category: 'Design',
  draw: () =>
    `<path d="M 4 6 H 20 M 6.8 10 H 17.2 M 4.8 14 H 19.2 M 7.8 18 H 16.2"/>`,
};

export const alignRightIcon: IconDefinition = {
  id: 'align-right',
  category: 'Design',
  draw: () =>
    `<path d="M 4 6 H 20 M 9.2 10 H 20 M 5.6 14 H 20 M 11.4 18 H 20"/>`,
};

export const indentIcon: IconDefinition = {
  id: 'indent',
  category: 'Design',
  draw: (r) =>
    `<path d="M 4 6 H 20 M 10.8 10 H 20 M 10.8 14 H 20 M 4 18 H 20 ${smoothPoly(
      [
        [4.2, 9.2],
        [7.4, 12, 0.4],
        [4.2, 14.8],
      ],
      r,
      false
    )}"/>`,
};

export const outdentIcon: IconDefinition = {
  id: 'outdent',
  category: 'Design',
  draw: (r) =>
    `<path d="M 4 6 H 20 M 10.8 10 H 20 M 10.8 14 H 20 M 4 18 H 20 ${smoothPoly(
      [
        [7.4, 9.2],
        [4.2, 12, 0.4],
        [7.4, 14.8],
      ],
      r,
      false
    )}"/>`,
};

export const listBulletIcon: IconDefinition = {
  id: 'list-bullet',
  category: 'Design',
  draw: () =>
    `<path d="M 9.2 6.6 H 20 M 9.2 12 H 20 M 9.2 17.4 H 20"/><circle cx="5.2" cy="6.6" r="1"/><circle cx="5.2" cy="12" r="1"/><circle cx="5.2" cy="17.4" r="1"/>`,
};

export const listOrderedIcon: IconDefinition = {
  id: 'list-ordered',
  category: 'Design',
  draw: () =>
    `<path d="M 11.0 6.8 H 20.0 M 11.0 12.0 H 20.0 M 11.0 17.2 H 20.0 M 4.4 5.4 L 5.8 4.4 V 9.4 M 4.4 9.4 H 7.2 M 4.3 15.8 C 4.3 14.8 5.0 14.3 5.9 14.3 C 6.8 14.3 7.4 14.9 7.4 15.7 C 7.4 16.9 4.2 17.8 4.2 19.4 H 7.6"/>`,
};

export const listChecksIcon: IconDefinition = {
  id: 'list-checks',
  category: 'Design',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.8, 7],
        [5.4, 8.6, 0.3],
        [8.4, 5.4],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [3.8, 12.6],
        [5.4, 14.2, 0.3],
        [8.4, 11],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [3.8, 18.2],
        [5.4, 19.8, 0.3],
        [8.4, 16.6],
      ],
      r,
      false
    )} M 11.2 7 H 20.2 M 11.2 12.6 H 20.2 M 11.2 18.2 H 20.2"/>`,
};

export const highlighterIcon: IconDefinition = {
  id: 'highlighter',
  category: 'Design',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [15.4, 3.8, 0.5],
        [20.2, 8.6, 0.5],
        [11.4, 17.4, 0.45],
        [6.6, 12.6, 0.45],
      ],
      r,
      true
    )} ${smoothPoly(
      [
        [6.6, 12.6],
        [4.2, 16.4, 0.3],
        [7.6, 19.8, 0.3],
        [11.4, 17.4],
      ],
      r,
      false
    )} M 4 19.8 H 18.8"/>`,
};

export const translateIcon: IconDefinition = {
  id: 'translate',
  category: 'Essentials',
  draw: (r) =>
    `<path d="M 4 6.6 H 13.6 M 8.8 4 V 6.6 M 11.6 6.6 C 10.8 10.6 8.2 13.4 4.4 15.2 M 6.4 9.6 C 7.6 11.6 9.6 13.4 12.2 14.6 ${smoothPoly(
      [
        [12.4, 19.6],
        [16.2, 10.2, 0.3],
        [20, 19.6],
      ],
      r,
      false
    )} M 13.6 16.8 H 18.8"/>`,
};

export const selectAllIcon: IconDefinition = {
  id: 'select-all',
  category: 'Actions',
  draw: (r) =>
    `<path d="M 4 7.6 V 5.2 C 4 4.5 4.5 4 5.2 4 H 7.6 M 16.4 4 H 18.8 C 19.5 4 20 4.5 20 5.2 V 7.6 M 20 16.4 V 18.8 C 20 19.5 19.5 20 18.8 20 H 16.4 M 7.6 20 H 5.2 C 4.5 20 4 19.5 4 18.8 V 16.4 M 10.6 4 H 13.4 M 10.6 20 H 13.4 M 4 10.6 V 13.4 M 20 10.6 V 13.4 ${squircleRect(8, 8, 8, 8, Math.min(r * 0.7, 2.0))}"/>`,
};

export const scissorsIcon: IconDefinition = {
  id: 'scissors',
  category: 'Actions',
  draw: () =>
    `<circle cx="6.8" cy="7.2" r="2.6"/><circle cx="6.8" cy="16.8" r="2.6"/><path d="M 9 8.8 L 19.6 17.6 M 9 15.2 L 19.6 6.4"/>`,
};

export const clipboardIcon: IconDefinition = {
  id: 'clipboard',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(8.4, 3.2, 7.2, 3.4, Math.min(r * 0.55, 1.4))} ${smoothPoly(
      [
        [8.4, 5],
        [5.2, 5, 0.9],
        [5.2, 20.4, 0.95],
        [18.8, 20.4, 0.95],
        [18.8, 5, 0.9],
        [15.6, 5],
      ],
      r,
      false
    )}"/>`,
};

export const clipboardCheckIcon: IconDefinition = {
  id: 'clipboard-check',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(8.4, 3.2, 7.2, 3.4, Math.min(r * 0.55, 1.4))} ${smoothPoly(
      [
        [8.4, 5],
        [5.2, 5, 0.9],
        [5.2, 20.4, 0.95],
        [18.8, 20.4, 0.95],
        [18.8, 5, 0.9],
        [15.6, 5],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [9, 13.4],
        [11.2, 15.6, 0.35],
        [15.4, 11.2],
      ],
      r,
      false
    )}"/>`,
};

export const unlinkIcon: IconDefinition = {
  id: 'unlink',
  category: 'Actions',
  draw: () =>
    `<path d="M 10.6 7.4 L 12.8 5.2 C 14.4 3.6 17 3.6 18.6 5.2 C 20.2 6.8 20.2 9.4 18.6 11 L 16.4 13.2 M 13.4 16.6 L 11.2 18.8 C 9.6 20.4 7 20.4 5.4 18.8 C 3.8 17.2 3.8 14.6 5.4 13 L 7.6 10.8 M 7.2 4.6 V 7.2 M 4.6 7.2 H 7.2 M 16.8 19.4 V 16.8 M 19.4 16.8 H 16.8"/>`,
};

// ==========================================
// 3. BRANDS — AI Tools, DevTools & Public Knowledge
// ==========================================

export const openaiIcon: IconDefinition = {
  id: 'openai',
  category: 'Brands',
  draw: () =>
    `<path d="M 12 3.8 C 14.2 3.8 16 5.4 16.2 7.5 L 12 10 L 7.8 7.5 C 8 5.4 9.8 3.8 12 3.8 Z M 19.1 7.9 C 20.2 9.8 19.6 12.2 17.8 13.4 L 13.6 11 L 13.6 6.1 C 15.7 5.6 18 6.1 19.1 7.9 Z M 19.1 16.1 C 18 18 15.7 18.6 13.6 17.9 L 13.6 13 L 17.8 10.6 C 19.6 11.8 20.2 14.2 19.1 16.1 Z M 12 20.2 C 9.8 20.2 8 18.6 7.8 16.5 L 12 14 L 16.2 16.5 C 16 18.6 14.2 20.2 12 20.2 Z M 4.9 16.1 C 3.8 14.2 4.4 11.8 6.2 10.6 L 10.4 13 L 10.4 17.9 C 8.3 18.4 6 17.9 4.9 16.1 Z M 4.9 7.9 C 6 6 8.3 5.4 10.4 6.1 L 10.4 11 L 6.2 13.4 C 4.4 12.2 3.8 9.8 4.9 7.9 Z"/>`,
};

export const anthropicIcon: IconDefinition = {
  id: 'anthropic',
  category: 'Brands',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.2, 18.8],
        [9.4, 5.2, 0.3],
        [14.6, 18.8],
      ],
      r,
      false
    )} M 6.4 14.2 H 12.4 M 14.4 5.2 L 19.8 18.8"/>`,
};

export const geminiIcon: IconDefinition = {
  id: 'gemini',
  category: 'Brands',
  draw: () =>
    `<path d="${kineticMiniSpark(12, 12, 8.6)}"/>`,
};

export const vercelIcon: IconDefinition = {
  id: 'vercel',
  category: 'Brands',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [12, 4.4, 0.45],
        [20.4, 19, 0.45],
        [3.6, 19, 0.45],
      ],
      r,
      true
    )}"/>`,
};

export const nextjsIcon: IconDefinition = {
  id: 'nextjs',
  category: 'Brands',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 8.8 15.8 V 8.4 L 17.2 18.4 M 15.2 8.4 V 13"/>`,
};

export const supabaseIcon: IconDefinition = {
  id: 'supabase',
  category: 'Brands',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [13.4, 3.8, 0.4],
        [4.6, 13.8, 0.45],
        [11.6, 13.8, 0.3],
        [10.6, 20.2, 0.4],
        [19.4, 10.2, 0.45],
        [12.4, 10.2, 0.3],
      ],
      r,
      true
    )}"/>`,
};

export const vscodeIcon: IconDefinition = {
  id: 'vscode',
  category: 'Brands',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [16.2, 3.8, 0.5],
        [20, 5.8, 0.5],
        [20, 18.2, 0.5],
        [16.2, 20.2, 0.5],
        [4.2, 9.6, 0.4],
        [5.8, 8.2, 0.4],
        [16.2, 15.8, 0.35],
        [16.2, 8.2, 0.35],
        [5.8, 15.8, 0.4],
        [4.2, 14.4, 0.4],
      ],
      r,
      true
    )}"/>`,
};

export const dockerIcon: IconDefinition = {
  id: 'docker',
  category: 'Brands',
  draw: (r) =>
    `<path d="M 3.6 13.2 H 16.6 C 17.4 11.8 18.8 11.4 20.4 12 C 19.6 16.6 15.8 19 10.8 19 C 6.2 19 3.6 16.6 3.6 13.2 Z ${squircleRect(5.6, 9.8, 2.8, 2.8, Math.min(r * 0.3, 0.7))} ${squircleRect(9.2, 9.8, 2.8, 2.8, Math.min(r * 0.3, 0.7))} ${squircleRect(12.8, 9.8, 2.8, 2.8, Math.min(r * 0.3, 0.7))} ${squircleRect(9.2, 6.2, 2.8, 2.8, Math.min(r * 0.3, 0.7))}"/>`,
};

export const notionIcon: IconDefinition = {
  id: 'notion',
  category: 'Brands',
  draw: (r) =>
    `<path d="${squircleRect(4.2, 4.2, 15.6, 15.6, r)} M 8.8 16.2 V 8.2 L 15.2 16.2 V 8.2"/>`,
};

export const slackIcon: IconDefinition = {
  id: 'slack',
  category: 'Brands',
  draw: () =>
    `<path d="M 9.8 4.4 A 1.6 1.6 0 1 1 8.2 6 H 9.8 Z M 9.8 6 V 9.8 M 19.6 9.8 A 1.6 1.6 0 1 1 18 8.2 V 9.8 Z M 18 9.8 H 14.2 M 14.2 19.6 A 1.6 1.6 0 1 1 15.8 18 H 14.2 Z M 14.2 18 V 14.2 M 4.4 14.2 A 1.6 1.6 0 1 1 6 15.8 V 14.2 Z M 6 14.2 H 9.8"/>`,
};

export const linearIcon: IconDefinition = {
  id: 'linear',
  category: 'Brands',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 4.4 13.8 L 10.2 19.6 M 5.8 9.8 L 14.2 18.2 M 8.4 6.6 L 17.4 15.6"/>`,
};

export const stripeIcon: IconDefinition = {
  id: 'stripe',
  category: 'Brands',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 14.8 9.2 C 14.2 8.4 13.1 8 11.8 8 C 10.1 8 9 8.8 9 10 C 9 11.4 10.8 11.7 12.4 12.2 C 14.1 12.7 15.2 13.4 15.2 14.8 C 15.2 16.2 13.8 17 11.9 17 C 10.4 17 9.2 16.5 8.4 15.6"/>`,
};

export const wikipediaIcon: IconDefinition = {
  id: 'wikipedia',
  category: 'Brands',
  draw: (r) =>
    `<path d="M 3.6 6.2 H 6.6 M 9.4 6.2 H 14.6 M 17.4 6.2 H 20.4 ${smoothPoly(
      [
        [4.8, 6.2],
        [8.8, 18.2, 0.25],
        [12, 9.6, 0.25],
        [15.2, 18.2, 0.25],
        [19.2, 6.2],
      ],
      r,
      false
    )}"/>`,
};

export const quoraIcon: IconDefinition = {
  id: 'quora',
  category: 'Brands',
  draw: () =>
    `<circle cx="11.4" cy="11.2" r="6.8"/><path d="M 12.4 14.2 C 14.2 14.2 15.4 15.6 16.4 17.4 C 17.2 18.8 18.6 19.4 20 18.4"/>`,
};

export const redditIcon: IconDefinition = {
  id: 'reddit',
  category: 'Brands',
  draw: () =>
    `<ellipse cx="12" cy="14" rx="7.6" ry="5.6"/><path d="M 12 8.4 L 13.8 4.4 L 17.4 5.2 M 9.4 16.2 C 10.6 17.2 13.4 17.2 14.6 16.2"/><circle cx="18.6" cy="5.5" r="1.2"/><circle cx="5.2" cy="12" r="1.6"/><circle cx="18.8" cy="12" r="1.6"/><circle cx="9.4" cy="13" r="0.8"/><circle cx="14.6" cy="13" r="0.8"/>`,
};

export const internetArchiveIcon: IconDefinition = {
  id: 'internet-archive',
  category: 'Brands',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [12, 3.8, 0.45],
        [20.2, 7.6, 0.45],
        [3.8, 7.6, 0.45],
      ],
      r,
      true
    )} M 4.2 19.6 H 19.8 M 5.2 16.8 H 18.8 M 6.8 10.2 V 16.8 M 10.2 10.2 V 16.8 M 13.8 10.2 V 16.8 M 17.2 10.2 V 16.8"/>`,
};

// ==========================================
// 4. PRODUCTIVITY, UTILITIES, PRIVACY & BREAKPOINTS
// ==========================================

export const puzzleIcon: IconDefinition = {
  id: 'puzzle',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [5.2, 7.6, 0.85],
        [9.6, 7.6, 0.3],
      ],
      r,
      false
    )} A 2.4 2.4 0 1 1 14.4 7.6 ${smoothPoly(
      [
        [14.4, 7.6, 0.3],
        [17.6, 7.6, 0.85],
        [17.6, 11.2, 0.3],
      ],
      r,
      false
    )} A 2.4 2.4 0 1 1 17.6 16 ${smoothPoly(
      [
        [17.6, 16, 0.3],
        [17.6, 19.4, 0.85],
        [5.2, 19.4, 0.85],
        [5.2, 16, 0.3],
      ],
      r,
      false
    )} A 2.4 2.4 0 1 0 5.2 11.2 V 7.6"/>`,
};

export const incognitoIcon: IconDefinition = {
  id: 'incognito',
  category: 'Alerts',
  draw: (r) =>
    `<path d="M 3.4 12.2 H 20.6 ${smoothPoly(
      [
        [5.6, 12.2],
        [7.4, 5.6, 0.65],
        [12, 6.8, 0.4],
        [16.6, 5.6, 0.65],
        [18.4, 12.2],
      ],
      r,
      false
    )} M 10.4 16.4 H 13.6"/><circle cx="7.8" cy="16.4" r="2.6"/><circle cx="16.2" cy="16.4" r="2.6"/>`,
};

export const qrCodeIcon: IconDefinition = {
  id: 'qr-code',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.2);
    return `<path d="${squircleRect(3.8, 3.8, 6.0, 6.0, cr)} ${squircleRect(14.2, 3.8, 6.0, 6.0, cr)} ${squircleRect(3.8, 14.2, 6.0, 6.0, cr)} M 14.2 14.2 H 16.2 V 16.2 M 19.8 14.2 V 16.2 M 14.2 19.8 H 16.2 M 18.2 19.8 H 19.8 V 18.2"/><circle cx="6.8" cy="6.8" r="0.7"/><circle cx="17.2" cy="6.8" r="0.7"/><circle cx="6.8" cy="17.2" r="0.7"/>`;
  },
};

export const gaugeIcon: IconDefinition = {
  id: 'gauge',
  category: 'Dashboard',
  draw: () =>
    `<path d="M 4.6 17.2 A 8.4 8.4 0 1 1 19.4 17.2 M 12 14.4 L 16.2 9.4 M 6.4 12 H 7.6 M 12 6.4 V 7.6 M 16.4 12 H 17.6"/><circle cx="12" cy="14.4" r="1.4"/>`,
};

export const breakpointsIcon: IconDefinition = {
  id: 'breakpoints',
  category: 'Design',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [12.8, 15.8],
        [3.6, 15.8, 0.9],
        [3.6, 4.6, 0.9],
        [18.8, 4.6, 0.9],
        [18.8, 8.6],
      ],
      r,
      false
    )} M 8.8 15.8 V 19.2 M 6.4 19.2 H 12.2 ${squircleRect(14.2, 9.6, 6.4, 10.6, Math.min(r * 0.7, 2.0))} M 16.8 18 H 18"/>`,
};

export const laptopIcon: IconDefinition = {
  id: 'laptop',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(4.6, 5, 14.8, 10.8, Math.min(r * 0.85, 2.6))} M 2.8 18.8 H 21.2"/>`,
};

export const tasksIcon: IconDefinition = {
  id: 'tasks',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 4.6, 5.2, 5.2, Math.min(r * 0.55, 1.5))} ${squircleRect(3.8, 14.2, 5.2, 5.2, Math.min(r * 0.55, 1.5))} M 11.8 6.2 H 20.2 M 11.8 8.8 H 17.2 M 11.8 15.8 H 20.2 M 11.8 18.4 H 16.8"/>`,
};

export const stepsIcon: IconDefinition = {
  id: 'steps',
  category: 'Navigation',
  draw: () =>
    `<circle cx="6.2" cy="6.2" r="2.4"/><circle cx="12" cy="12" r="2.4"/><circle cx="17.8" cy="17.8" r="2.4"/><path d="M 8 8 L 10.2 10.2 M 13.8 13.8 L 16 16 M 11.2 6.2 H 20 M 4 17.8 H 12.8"/>`,
};

export const micOffIcon: IconDefinition = {
  id: 'mic-off',
  category: 'Essentials',
  draw: () =>
    `<path d="M 9.2 6.4 V 6.2 A 2.8 2.8 0 0 1 14.8 6.2 V 11.6 M 9.2 10.4 V 11.6 C 9.2 13.1 10.4 14.4 12 14.4 C 12.6 14.4 13.1 14.2 13.6 13.9 M 6.4 11.6 C 6.4 14.7 8.9 17.2 12 17.2 C 13.5 17.2 14.9 16.6 15.9 15.6 M 17.6 11.6 C 17.6 12.5 17.4 13.4 17 14.1 M 12 17.2 V 20.2 M 9 20.2 H 15 M 4 4 L 20 20"/>`,
};

export const videoOffIcon: IconDefinition = {
  id: 'video-off',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [15.4, 15.4],
        [15.4, 17.6, 0.85],
        [3.6, 17.6, 0.9],
        [3.6, 6.4, 0.9],
        [6.4, 6.4],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [10.2, 6.4],
        [15.4, 6.4, 0.85],
        [15.4, 11.2],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [15.4, 10.2],
        [20.4, 7.2, 0.5],
        [20.4, 16.8, 0.5],
        [17.4, 15],
      ],
      r,
      false
    )} M 3.8 3.8 L 20.2 20.2"/>`,
};

export const wifiOffIcon: IconDefinition = {
  id: 'wifi-off',
  category: 'Essentials',
  draw: () =>
    `<path d="M 3.6 10.0 A 11.6 11.6 0 0 1 5.6 8.3 M 10.4 6.6 A 11.6 11.6 0 0 1 20.4 10.0 M 6.4 13.0 A 7.8 7.8 0 0 1 8.4 11.6 M 13.4 10.7 A 7.8 7.8 0 0 1 17.6 13.0 M 9.4 15.6 A 4.2 4.2 0 0 1 12.0 14.3 M 4.0 4.0 L 20.0 20.0"/><circle cx="12" cy="18.6" r="1.0"/>`,
};

export const pinOffIcon: IconDefinition = {
  id: 'pin-off',
  category: 'Essentials',
  draw: () =>
    `<path d="M 12 15.2 V 20.4 M 7.6 4.4 H 16.4 M 15.2 4.4 V 10.2 L 17.8 12.8 M 8.8 8.8 V 10.4 L 6 13.4 V 15.2 H 15.2 M 4 4 L 20 20"/>`,
};

export const scanIcon: IconDefinition = {
  id: 'scan',
  category: 'Actions',
  draw: () =>
    `<path d="M 4 8.2 V 5.8 C 4 4.8 4.8 4 5.8 4 H 8.2 M 15.8 4 H 18.2 C 19.2 4 20 4.8 20 5.8 V 8.2 M 20 15.8 V 18.2 C 20 19.2 19.2 20 18.2 20 H 15.8 M 8.2 20 H 5.8 C 4.8 20 4 19.2 4 18.2 V 15.8 M 4.8 12 H 19.2"/>`,
};

// ==========================================
// 5. FOOD & DELIVERY APPS
// ==========================================

export const utensilsIcon: IconDefinition = {
  id: 'utensils',
  category: 'Essentials',
  draw: () =>
    `<path d="M 5.6 4.2 V 8.8 C 5.6 10.6 6.7 11.8 8.0 11.8 C 9.3 11.8 10.4 10.6 10.4 8.8 V 4.2 M 8.0 4.2 V 19.8 M 18.0 19.8 V 4.2 C 15.8 4.6 14.6 7.0 14.6 10.4 C 14.6 12.0 15.4 13.2 16.8 13.4 H 18.0"/>`,
};

export const coffeeIcon: IconDefinition = {
  id: 'coffee',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.4, 9.2],
        [4.4, 17.2, 0.95],
        [15.6, 17.2, 0.95],
        [15.6, 9.2],
      ],
      r,
      true
    )} M 15.6 10.4 H 17.8 C 19.2 10.4 20.2 11.4 20.2 12.8 C 20.2 14.2 19.2 15.2 17.8 15.2 H 15.6 M 4.4 20 H 15.8 M 8.2 4.4 V 6.4 M 11.8 4.4 V 6.4"/>`,
};

export const pizzaIcon: IconDefinition = {
  id: 'pizza',
  category: 'Essentials',
  draw: () =>
    `<path d="M 4.2 7.2 Q 12 3.2 19.8 7.2 L 12 20.2 Z M 5.6 9.6 Q 12 6.4 18.4 9.6"/><circle cx="10.0" cy="11.4" r="1.0"/><circle cx="14.2" cy="12.0" r="0.95"/><circle cx="11.8" cy="15.2" r="0.9"/>`,
};

export const burgerIcon: IconDefinition = {
  id: 'burger',
  category: 'Essentials',
  draw: () =>
    `<path d="M 4.4 10.6 C 4.4 6.6 7.6 4.4 12 4.4 C 16.4 4.4 19.6 6.6 19.6 10.6 Z M 4.6 17.2 H 19.4 V 18.2 C 19.4 19.2 18.6 19.8 17.6 19.8 H 6.4 C 5.4 19.8 4.6 19.2 4.6 18.2 Z"/><rect x="3.6" y="12.8" width="16.8" height="2.4" rx="1.2"/><circle cx="9.2" cy="7.6" r="0.45"/><circle cx="12.2" cy="6.8" r="0.45"/><circle cx="14.8" cy="7.8" r="0.45"/>`,
};

export const cupSodaIcon: IconDefinition = {
  id: 'cup-soda',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [6.4, 8.6],
        [17.6, 8.6],
        [16, 19.8, 0.75],
        [8, 19.8, 0.75],
      ],
      r,
      true
    )} M 5.2 8.6 H 18.8 M 12 8.6 L 13.4 4.2 L 16.4 3.6 M 7.2 13.8 H 16.8"/>`,
};

export const chefHatIcon: IconDefinition = {
  id: 'chef-hat',
  category: 'Essentials',
  draw: (r) =>
    `<path d="M 6.8 15.2 V 19.2 H 17.2 V 15.2 M 6.8 15.2 C 4.6 14.8 3.6 13.1 3.6 11.4 C 3.6 9.5 5 8 6.9 7.8 C 7.6 5.6 9.6 4.2 12 4.2 C 14.4 4.2 16.4 5.6 17.1 7.8 C 19 8 20.4 9.5 20.4 11.4 C 20.4 13.1 19.4 14.8 17.2 15.2 M 6.8 16.2 H 17.2"/>`,
};

export const cakeIcon: IconDefinition = {
  id: 'cake',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(4.4, 11.2, 15.2, 8.6, Math.min(r * 0.75, 2.2))} M 4.4 14.8 C 6.2 16 7.8 16 9.5 14.8 C 11.2 13.6 12.8 13.6 14.5 14.8 C 16.2 16 17.8 16 19.6 14.8 M 12 7.8 V 11.2 M 12 4 C 13 5 13 6.2 12 6.8 C 11 6.2 11 5 12 4 Z"/>`,
};

export const leafIcon: IconDefinition = {
  id: 'leaf',
  category: 'Essentials',
  draw: () =>
    `<path d="M 5.4 18.6 C 5.4 10.6 10.2 5.2 19.2 4.8 C 18.8 13.8 13.4 18.6 5.4 18.6 Z M 4.4 19.6 C 7.4 16.4 10.6 13.4 14.6 9.6"/>`,
};

export const deliveryBikeIcon: IconDefinition = {
  id: 'delivery-bike',
  category: 'Essentials',
  draw: (r) =>
    `<circle cx="6.6" cy="17.4" r="2.4"/><circle cx="17.8" cy="17.4" r="2.4"/><path d="${squircleRect(4.4, 7.6, 5.4, 4.4, Math.min(r * 0.45, 1.2))} M 12 17.4 H 9 M 17.8 15 L 15.2 8.2 H 12.8 M 11.8 17.4 L 13.4 12.2 H 16.8 M 4.4 14.4 H 10.2"/>`,
};

export const soupBowlIcon: IconDefinition = {
  id: 'soup-bowl',
  category: 'Essentials',
  draw: () =>
    `<path d="M 4 11.2 H 20 C 19.8 16 16.6 19.4 12 19.4 C 7.4 19.4 4.2 16 4 11.2 Z M 8.6 19.4 H 15.4 M 8.6 5.2 C 8.6 6.4 9.6 6.8 9.6 8 M 12 4.6 C 12 5.8 13 6.2 13 7.4 M 15.4 5.2 C 15.4 6.4 16.4 6.8 16.4 8"/>`,
};

// ==========================================
// 6. FINANCE, MONEY & PAYMENTS
// ==========================================

export const bankIcon: IconDefinition = {
  id: 'bank',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [12, 3.8, 0.45],
        [20.2, 8.2, 0.45],
        [3.8, 8.2, 0.45],
      ],
      r,
      true
    )} M 3.8 19.8 H 20.2 M 5.2 17 H 18.8 M 6.8 10.6 V 17 M 10.3 10.6 V 17 M 13.7 10.6 V 17 M 17.2 10.6 V 17"/>`,
};

export const coinsIcon: IconDefinition = {
  id: 'coins',
  category: 'Dashboard',
  draw: () =>
    `<ellipse cx="7.7" cy="6.6" rx="3.9" ry="1.8"/><path d="M 3.8 6.6 V 10.4 C 3.8 11.4 5.5 12.2 7.7 12.2 C 9.9 12.2 11.6 11.4 11.6 10.4 V 6.6 M 3.8 10.4 V 14.2 C 3.8 15.2 5.5 16.0 7.7 16.0 C 9.9 16.0 11.6 15.2 11.6 14.2 V 10.4 M 3.8 14.2 V 17.8 C 3.8 18.8 5.5 19.6 7.7 19.6 C 9.9 19.6 11.6 18.8 11.6 17.8 V 14.2"/><ellipse cx="16.3" cy="12.2" rx="3.9" ry="1.8"/><path d="M 12.4 12.2 V 15.8 C 12.4 16.8 14.1 17.6 16.3 17.6 C 18.5 17.6 20.2 16.8 20.2 15.8 V 12.2 M 12.4 15.8 V 18.2 C 12.4 19.2 14.1 20.0 16.3 20.0 C 18.5 20.0 20.2 19.2 20.2 18.2 V 15.8"/>`,
};

export const banknoteIcon: IconDefinition = {
  id: 'banknote',
  category: 'Dashboard',
  draw: (r) => {
    const cr = Math.min(r * 0.78, 2.3);
    const back = smoothPoly(
      [
        [6.4, 7.8],
        [6.4, 5.2, 0.85],
        [20.6, 5.2, 0.85],
        [20.6, 15.2, 0.85],
        [18.6, 15.2],
      ],
      cr,
      false,
      0.36
    );
    return `<path d="${squircleRect(3.4, 7.8, 15.2, 10.4, cr)} ${back}"/><circle cx="11.0" cy="13.0" r="2.2"/><circle cx="6.2" cy="13.0" r="0.6"/><circle cx="15.8" cy="13.0" r="0.6"/>`;
  },
};

export const dollarCircleIcon: IconDefinition = {
  id: 'dollar-circle',
  category: 'Dashboard',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 12 6.8 V 17.2 M 14.6 9.4 C 14.2 8.4 13.2 8 12 8 C 10.4 8 9.4 8.8 9.4 10 C 9.4 11.4 10.8 11.7 12 12 C 13.2 12.3 14.6 12.7 14.6 14 C 14.6 15.3 13.5 16 12 16 C 10.6 16 9.6 15.5 9.2 14.6"/>`,
};

export const rupeeCircleIcon: IconDefinition = {
  id: 'rupee-circle',
  category: 'Dashboard',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 9 8 H 15.4 M 9 10.8 H 15.4 M 10.4 8 C 12.6 8 13.6 9.2 13.6 10.8 C 13.6 12.4 12.2 13.4 9.4 13.4 L 14.4 17"/>`,
};

export const euroCircleIcon: IconDefinition = {
  id: 'euro-circle',
  category: 'Dashboard',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 15.4 9 C 14.6 8.1 13.6 7.8 12.4 7.8 C 10 7.8 8.6 9.6 8.6 12 C 8.6 14.4 10 16.2 12.4 16.2 C 13.6 16.2 14.6 15.8 15.4 15 M 7.4 10.6 H 13.4 M 7.4 13.4 H 13.4"/>`,
};

export const percentIcon: IconDefinition = {
  id: 'percent',
  category: 'Dashboard',
  draw: () =>
    `<path d="M 18.4 5.6 L 5.6 18.4"/><circle cx="7.4" cy="7.4" r="2.2"/><circle cx="16.6" cy="16.6" r="2.2"/>`,
};

export const trendingUpIcon: IconDefinition = {
  id: 'trending-up',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.6, 17],
        [9.4, 11.2, 0.45],
        [13.4, 15.2, 0.45],
        [20.4, 8.2],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [15.4, 8.2],
        [20.4, 8.2, 0.35],
        [20.4, 13.2],
      ],
      r,
      false
    )}"/>`,
};

export const trendingDownIcon: IconDefinition = {
  id: 'trending-down',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.6, 7],
        [9.4, 12.8, 0.45],
        [13.4, 8.8, 0.45],
        [20.4, 15.8],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [15.4, 15.8],
        [20.4, 15.8, 0.35],
        [20.4, 10.8],
      ],
      r,
      false
    )}"/>`,
};

export const piggyBankIcon: IconDefinition = {
  id: 'piggy-bank',
  category: 'Dashboard',
  draw: () =>
    `<path d="M 18.8 11.6 C 18.6 8.4 15.6 6.2 11.8 6.2 C 7.6 6.2 4.6 8.8 4.6 12.2 C 4.6 14.3 5.7 16.1 7.4 17.2 L 7.4 19.6 H 9.8 L 10.2 18.2 C 10.7 18.3 11.3 18.3 11.8 18.3 C 12.4 18.3 13 18.3 13.5 18.2 L 14 19.6 H 16.4 V 17.1 C 17.6 16.3 18.5 15.1 18.8 13.8 H 20.4 V 11.6 Z M 10 9 H 13.6 M 4.6 11.6 C 3.6 11.4 3.2 10.6 3.6 9.8"/><circle cx="15.2" cy="10.8" r="0.65"/>`,
};

export const exchangeIcon: IconDefinition = {
  id: 'exchange',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="M 4.4 9.2 H 19.4 ${smoothPoly(
      [
        [16.2, 6],
        [19.4, 9.2, 0.4],
        [16.2, 12.4],
      ],
      r,
      false
    )} M 19.6 14.8 H 4.6 ${smoothPoly(
      [
        [7.8, 11.6],
        [4.6, 14.8, 0.4],
        [7.8, 18],
      ],
      r,
      false
    )}"/>`,
};

// ==========================================
// 7. DOCUMENTS, MULTI-DOCS & TABLES
// ==========================================

export const filesIcon: IconDefinition = {
  id: 'files',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [8.4, 6.2],
        [8.4, 3.6, 0.8],
        [15.4, 3.6, 0.55],
        [19.2, 7.4, 0.55],
        [19.2, 17, 0.85],
        [16, 17],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [4.8, 6.4, 0.85],
        [12.2, 6.4, 0.55],
        [16, 10.2, 0.55],
        [16, 20.4, 0.9],
        [4.8, 20.4, 0.9],
      ],
      r,
      true
    )} M 12 6.6 V 10.4 H 15.8"/>`,
};

export const filePlusIcon: IconDefinition = {
  id: 'file-plus',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [5.2, 3.6, 0.9],
        [13.6, 3.6, 0.55],
        [18.8, 8.8, 0.55],
        [18.8, 20.4, 0.95],
        [5.2, 20.4, 0.95],
      ],
      r,
      true
    )} M 13.4 3.8 V 9 H 18.6 M 12 11.6 V 16.8 M 9.4 14.2 H 14.6"/>`,
};

export const fileMinusIcon: IconDefinition = {
  id: 'file-minus',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [5.2, 3.6, 0.9],
        [13.6, 3.6, 0.55],
        [18.8, 8.8, 0.55],
        [18.8, 20.4, 0.95],
        [5.2, 20.4, 0.95],
      ],
      r,
      true
    )} M 13.4 3.8 V 9 H 18.6 M 9.4 14.2 H 14.6"/>`,
};

export const fileCheckIcon: IconDefinition = {
  id: 'file-check',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [5.2, 3.6, 0.9],
        [13.6, 3.6, 0.55],
        [18.8, 8.8, 0.55],
        [18.8, 20.4, 0.95],
        [5.2, 20.4, 0.95],
      ],
      r,
      true
    )} M 13.4 3.8 V 9 H 18.6 ${smoothPoly(
      [
        [9, 14.4],
        [11.2, 16.4, 0.35],
        [15, 12.4],
      ],
      r,
      false
    )}"/>`,
};

export const folderPlusIcon: IconDefinition = {
  id: 'folder-plus',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.4, 5.4, 0.9],
        [9.2, 5.4, 0.72],
        [11.2, 7.8, 0.72],
        [20.6, 7.8, 0.95],
        [20.6, 18.8, 1.0],
        [3.4, 18.8, 1.0],
      ],
      r,
      true
    )} M 12 10.8 V 16 M 9.4 13.4 H 14.6"/>`,
};

export const tableIcon: IconDefinition = {
  id: 'table',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(3.6, 4.2, 16.8, 15.6, r)} M 3.6 9.4 H 20.4 M 3.6 14.6 H 20.4 M 9.6 4.2 V 19.8"/>`,
};

export const tableRowAddIcon: IconDefinition = {
  id: 'table-row-add',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(3.6, 3.8, 16.8, 9.6, Math.min(r * 0.72, 2.2))} M 3.6 8.6 H 20.4 M 12.0 3.8 V 13.4 M 12.0 15.8 V 20.4 M 9.7 18.1 H 14.3"/>`,
};

export const tableRowDeleteIcon: IconDefinition = {
  id: 'table-row-delete',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(3.6, 3.8, 16.8, 9.6, Math.min(r * 0.72, 2.2))} M 3.6 8.6 H 20.4 M 12.0 3.8 V 13.4 M 9.4 18.1 H 14.6"/>`,
};

export const tableColumnAddIcon: IconDefinition = {
  id: 'table-column-add',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 3.6, 9.6, 16.8, Math.min(r * 0.72, 2.2))} M 8.6 3.6 V 20.4 M 3.8 12.0 H 13.4 M 18.1 9.7 V 14.3 M 15.8 12.0 H 20.4"/>`,
};

export const tableColumnDeleteIcon: IconDefinition = {
  id: 'table-column-delete',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 3.6, 9.6, 16.8, Math.min(r * 0.72, 2.2))} M 8.6 3.6 V 20.4 M 3.8 12.0 H 13.4 M 15.6 12.0 H 20.4"/>`,
};

// ==========================================
// 8. BUILDINGS, REAL ESTATE, INDUSTRY & E-COMMERCE
// ==========================================

export const buildingIcon: IconDefinition = {
  id: 'building',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [5.4, 20],
        [5.4, 4, 0.85],
        [18.6, 4, 0.85],
        [18.6, 20],
      ],
      r,
      false
    )} M 3.6 20 H 20.4 M 9.8 20 V 16.2 H 14.2 V 20 M 8.8 8 H 10.4 M 13.6 8 H 15.2 M 8.8 11.8 H 10.4 M 13.6 11.8 H 15.2"/>`,
};

export const buildingsIcon: IconDefinition = {
  id: 'buildings',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.2, 20],
        [4.2, 4.4, 0.8],
        [13.4, 4.4, 0.8],
        [13.4, 20],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [13.4, 10],
        [19.8, 10, 0.8],
        [19.8, 20],
      ],
      r,
      false
    )} M 3.2 20 H 20.8 M 7.4 8.2 H 10.2 M 7.4 12 H 10.2 M 7.4 15.8 H 10.2 M 16.2 13.6 H 17.2 M 16.2 16.6 H 17.2"/>`,
};

export const homeKeyIcon: IconDefinition = {
  id: 'home-key',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [12, 3.4, 0.72],
        [20, 9.8, 0.85],
        [20, 20, 0.95],
        [4, 20, 0.95],
        [4, 9.8, 0.85],
      ],
      r,
      true
    )} M 12.0 13.2 V 17.8 M 12.0 15.6 H 14.2 M 12.0 17.4 H 13.8"/><circle cx="12.0" cy="11.2" r="2.0"/>`,
};

export const factoryIcon: IconDefinition = {
  id: 'factory',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.5, 1.5);
    const body = smoothPoly(
      [
        [4.0, 19.8, 0.5],
        [4.0, 11.4, 0.3],
        [8.6, 11.4, 0.2],
        [14.2, 8.2, 0.25],
        [14.2, 11.4, 0.2],
        [20.0, 8.2, 0.25],
        [20.0, 19.8, 0.5],
      ],
      cr,
      true,
      0.3
    );
    const chimney = smoothPoly(
      [
        [4.8, 11.4],
        [5.3, 4.4, 0.35],
        [7.7, 4.4, 0.35],
        [8.2, 11.4],
      ],
      cr,
      false,
      0.3
    );
    return `<path d="${body} ${chimney} M 7.4 15.4 H 9.2 M 11.6 15.4 H 13.4 M 15.8 15.4 H 17.6"/>`;
  },
};

export const warehouseIcon: IconDefinition = {
  id: 'warehouse',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.55, 1.8);
    const roof = smoothPoly(
      [
        [3.4, 9.6, 0.5],
        [12.0, 4.6, 0.55],
        [20.6, 9.6, 0.5],
        [20.6, 19.8, 0.55],
        [3.4, 19.8, 0.55],
      ],
      cr,
      true,
      0.32
    );
    return `<path d="${roof} M 6.8 19.8 V 11.4 H 17.2 V 19.8 M 6.8 14.0 H 17.2 M 6.8 16.8 H 17.2"/>`;
  },
};

export const wrenchIcon: IconDefinition = {
  id: 'wrench',
  category: 'Actions',
  draw: () =>
    `<path d="M 14.4 5.2 C 12.6 5.6 11.4 7.4 11.8 9.4 L 4.8 16.4 C 3.9 17.3 3.9 18.7 4.8 19.6 C 5.7 20.5 7.1 20.5 8 19.6 L 15 12.6 C 17 13 18.8 11.8 19.2 10 C 19.5 8.8 19.2 7.6 18.6 6.8 L 16.2 9.2 L 14.8 7.8 L 17.2 5.4 C 16.4 4.8 15.4 4.9 14.4 5.2 Z"/>`,
};

export const hardHatIcon: IconDefinition = {
  id: 'hard-hat',
  category: 'Essentials',
  draw: () =>
    `<path d="M 4.4 16.0 V 13.0 C 4.4 8.4 7.8 5.2 12.0 5.2 C 16.2 5.2 19.6 8.4 19.6 13.0 V 16.0 M 9.8 5.5 V 12.8 M 14.2 5.5 V 12.8 M 3.0 16.0 H 21.0 M 4.4 16.0 C 5.8 18.0 8.6 18.8 12.0 18.8 C 15.4 18.8 18.2 18.0 19.6 16.0"/>`,
};

export const truckIcon: IconDefinition = {
  id: 'truck',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.4, 16.6],
        [3.4, 6.4, 0.85],
        [14.2, 6.4, 0.85],
        [14.2, 16.6],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [14.2, 9.6],
        [17.8, 9.6, 0.6],
        [20.6, 12.6, 0.6],
        [20.6, 16.6, 0.65],
        [19.2, 16.6],
      ],
      r,
      false
    )} M 9.4 16.6 H 14.6"/><circle cx="7.2" cy="17.2" r="2.2"/><circle cx="16.8" cy="17.2" r="2.2"/>`,
};

export const packageCheckIcon: IconDefinition = {
  id: 'package-check',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [12, 3.6, 0.6],
        [19.8, 7.8, 0.65],
        [19.8, 12.6],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [12, 3.6, 0.6],
        [4.2, 7.8, 0.65],
        [4.2, 16.2, 0.65],
        [11.4, 20.2, 0.55],
      ],
      r,
      false
    )} M 4.4 7.9 L 12 12 L 19.6 7.9 M 12 12 V 19.8 ${smoothPoly(
      [
        [14.6, 17.2],
        [16.6, 19.2, 0.3],
        [20.4, 15.2],
      ],
      r,
      false
    )}"/>`,
};

export const packageReturnIcon: IconDefinition = {
  id: 'package-return',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [12, 3.6, 0.6],
        [19.8, 7.8, 0.65],
        [19.8, 12.6],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [12, 3.6, 0.6],
        [4.2, 7.8, 0.65],
        [4.2, 16.2, 0.65],
        [11.4, 20.2, 0.55],
      ],
      r,
      false
    )} M 4.4 7.9 L 12 12 L 19.6 7.9 M 12 12 V 19.8 M 20.2 19.4 C 20.2 17.4 18.8 16.2 16.8 16.2 H 14.4 ${smoothPoly(
      [
        [16.6, 14],
        [14.4, 16.2, 0.3],
        [16.6, 18.4],
      ],
      r,
      false
    )}"/>`,
};

export const barcodeIcon: IconDefinition = {
  id: 'barcode',
  category: 'Essentials',
  draw: () =>
    `<path d="M 4 6 V 18 M 7.2 6 V 18 M 10.6 6 V 15.6 M 13.6 6 V 15.6 M 16.8 6 V 18 M 20 6 V 18 M 10.6 18 H 13.6"/>`,
};

export const badgePercentIcon: IconDefinition = {
  id: 'badge-percent',
  category: 'Essentials',
  draw: () =>
    `<path d="M 12 3.2 L 14.3 4.7 L 17 4.4 L 18 6.9 L 20.4 8.3 L 19.9 11 L 21 13.4 L 19.1 15.3 L 19 18 L 16.3 18.7 L 14.7 20.8 L 12 20 L 9.3 20.8 L 7.7 18.7 L 5 18 L 4.9 15.3 L 3 13.4 L 4.1 11 L 3.6 8.3 L 6 6.9 L 7 4.4 L 9.7 4.7 Z M 9.4 14.6 L 14.6 9.4"/><circle cx="9.6" cy="9.6" r="0.8"/><circle cx="14.4" cy="14.4" r="0.8"/>`,
};

export const shoppingCartPlusIcon: IconDefinition = {
  id: 'shopping-cart-plus',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.0, 4.6],
        [5.8, 4.6, 0.45],
        [8.2, 15.4, 0.55],
        [18.2, 15.4, 0.55],
        [20.4, 7.6],
      ],
      r,
      false
    )} M 13.5 5.6 V 11.2 M 10.7 8.4 H 16.3"/><circle cx="9.6" cy="19.2" r="1.45"/><circle cx="17.0" cy="19.2" r="1.45"/>`,
};

export const EXTENDED_ICONS_CATALOG: IconDefinition[] = [
  // Smart Shape Variations (13)
  plusCircleIcon,
  plusSquareIcon,
  minusCircleIcon,
  minusSquareIcon,
  playCircleIcon,
  pauseCircleIcon,
  arrowLeftCircleIcon,
  arrowRightCircleIcon,
  arrowUpCircleIcon,
  arrowDownCircleIcon,
  chevronDownCircleIcon,
  moreHorizontalCircleIcon,
  helpSquareIcon,
  // Notes & Rich Text Editor (24)
  boldIcon,
  italicIcon,
  underlineIcon,
  strikethroughIcon,
  quoteIcon,
  headingIcon,
  heading1Icon,
  heading2Icon,
  paragraphIcon,
  alignLeftIcon,
  alignCenterIcon,
  alignRightIcon,
  indentIcon,
  outdentIcon,
  listBulletIcon,
  listOrderedIcon,
  listChecksIcon,
  highlighterIcon,
  translateIcon,
  selectAllIcon,
  scissorsIcon,
  clipboardIcon,
  clipboardCheckIcon,
  unlinkIcon,
  // Brands (16)
  openaiIcon,
  anthropicIcon,
  geminiIcon,
  vercelIcon,
  nextjsIcon,
  supabaseIcon,
  vscodeIcon,
  dockerIcon,
  notionIcon,
  slackIcon,
  linearIcon,
  stripeIcon,
  wikipediaIcon,
  quoraIcon,
  redditIcon,
  internetArchiveIcon,
  // Productivity, Utilities, Privacy & Breakpoints (14)
  puzzleIcon,
  incognitoIcon,
  qrCodeIcon,
  gaugeIcon,
  breakpointsIcon,
  laptopIcon,
  tasksIcon,
  stepsIcon,
  micOffIcon,
  videoOffIcon,
  wifiOffIcon,
  pinOffIcon,
  scanIcon,
  // Food & Delivery (10)
  utensilsIcon,
  coffeeIcon,
  pizzaIcon,
  burgerIcon,
  cupSodaIcon,
  chefHatIcon,
  cakeIcon,
  leafIcon,
  deliveryBikeIcon,
  soupBowlIcon,
  // Finance, Money & Payments (11)
  bankIcon,
  coinsIcon,
  banknoteIcon,
  dollarCircleIcon,
  rupeeCircleIcon,
  euroCircleIcon,
  percentIcon,
  trendingUpIcon,
  trendingDownIcon,
  piggyBankIcon,
  exchangeIcon,
  // Documents, Multi-Docs & Tables (10)
  filesIcon,
  filePlusIcon,
  fileMinusIcon,
  fileCheckIcon,
  folderPlusIcon,
  tableIcon,
  tableRowAddIcon,
  tableRowDeleteIcon,
  tableColumnAddIcon,
  tableColumnDeleteIcon,
  // Buildings, Real Estate, Industry & E-Commerce (13)
  buildingIcon,
  buildingsIcon,
  homeKeyIcon,
  factoryIcon,
  warehouseIcon,
  wrenchIcon,
  hardHatIcon,
  truckIcon,
  packageCheckIcon,
  packageReturnIcon,
  barcodeIcon,
  badgePercentIcon,
  shoppingCartPlusIcon,
];
