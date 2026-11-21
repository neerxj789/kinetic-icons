/**
 * Kinetic Icons — Complete Tree-Shakeable Icon Catalog (462 Icons)
 * Zero React or DOM dependencies. Each icon is exported individually for optimal tree-shaking.
 */

import {
  fmt,
  kineticCommandPath,
  kineticDialPath,
  kineticHeartPath,
  kineticMiniSpark,
  kineticMoonPath,
  kineticPaperclipPath,
  kineticRoundBubblePath,
  kineticShieldPath,
  kineticSparkPath,
  smoothPoly,
  squircleRect,
  tipPullback,
  type IconCategory,
  type IconDefinition,
  type WeightedPoint,
} from './engine';
import { EXTENDED_ICONS_CATALOG } from './iconsExtended';
import { WAVE3_ICONS_CATALOG } from './iconsWave3';
import { WAVE4_ICONS_CATALOG } from './iconsWave4';

export * from './iconsExtended';
export * from './iconsWave3';
export * from './iconsWave4';

// ------------------------------------------
// 1. ESSENTIALS — Kinetic Core System
// ------------------------------------------
export const homeIcon: IconDefinition = {
  id: 'home',
  category: 'Essentials',
  draw: (r) => {
    const archR = Math.min(r * 0.9, 2.3);
    const door =
      archR <= 0.05
        ? 'M 9.6 20 V 13.8 H 14.4 V 20'
        : `M 9.6 20 V ${fmt(13.8 + archR)} C 9.6 ${fmt(13.8 + archR * 0.42)} ${fmt(9.6 + archR * 0.42)} 13.8 ${fmt(9.6 + archR)} 13.8 H ${fmt(14.4 - archR)} C ${fmt(14.4 - archR * 0.42)} 13.8 14.4 ${fmt(13.8 + archR * 0.42)} 14.4 ${fmt(13.8 + archR)} V 20`;
    return `<path d="${smoothPoly(
      [
        [12, 3.4, 0.72],
        [20, 9.8, 0.85],
        [20, 20, 0.95],
        [4, 20, 0.95],
        [4, 9.8, 0.85],
      ],
      r,
      true
    )} ${door}"/>`;
  },
};

export const vaultIcon: IconDefinition = {
  id: 'vault',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.4, 5.2, 0.85],
        [9.6, 5.2, 0.65],
        [11.6, 7.8, 0.65],
        [20.6, 7.8, 0.9],
        [20.6, 19.2, 1.0],
        [3.4, 19.2, 1.0],
      ],
      r,
      true
    )} M 8.5 13.6 H 15.5"/>`,
};

export const accountsIcon: IconDefinition = {
  id: 'accounts',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(3, 5, 18, 14, r)} M 3 9.4 H 21 M 15 14 H 17.6"/><circle cx="7.4" cy="14" r="0.9"/>`,
};

export const peopleIcon: IconDefinition = {
  id: 'people',
  category: 'Essentials',
  draw: () =>
    `<circle cx="12" cy="12" r="8.8"/><circle cx="12" cy="9.2" r="2.5"/><path d="M 7.2 17.4 C 8.3 15.2 9.9 14.3 12 14.3 C 14.1 14.3 15.7 15.2 16.8 17.4"/>`,
};

export const reportsIcon: IconDefinition = {
  id: 'reports',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(3.5, 3.5, 17, 17, r)} M 8.2 15.8 V 12.6 M 12 15.8 V 8.2 M 15.8 15.8 V 10.6"/>`,
};

export const cloudIcon: IconDefinition = {
  id: 'cloud',
  category: 'Essentials',
  draw: () =>
    `<path d="M 7.2 18.6 H 17.2 C 19.6 18.6 21.2 16.9 21.2 14.6 C 21.2 12.5 19.7 10.8 17.7 10.6 C 17.2 7.2 14.4 4.8 11 4.8 C 7.7 4.8 5 7.2 4.6 10.4 C 3.3 11.1 2.6 12.5 2.6 14.2 C 2.6 16.7 4.6 18.6 7.2 18.6 Z"/>`,
};

export const starIcon: IconDefinition = {
  id: 'star',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [12, 3.5, 0.52],
        [14.35, 9.06, 0.4],
        [20.37, 9.58, 0.52],
        [15.8, 13.54, 0.4],
        [17.17, 19.42, 0.52],
        [12, 16.3, 0.4],
        [6.83, 19.42, 0.52],
        [8.2, 13.54, 0.4],
        [3.63, 9.58, 0.52],
        [9.65, 9.06, 0.4],
      ],
      r,
      true
    )}"/>`,
};

export const folderIcon: IconDefinition = {
  id: 'folder',
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
    )}"/>`,
};

export const mapPinIcon: IconDefinition = {
  id: 'map-pin',
  category: 'Essentials',
  draw: (r) => {
    const tip = Math.min(r * 0.24, 0.72);
    const body =
      tip <= 0.04
        ? 'M 12 20.8 C 12 20.8 18.2 15 18.2 9.8 A 6.2 6.2 0 1 0 5.8 9.8 C 5.8 15 12 20.8 12 20.8 Z'
        : `M ${fmt(12 - tip * 0.6)} ${fmt(20.1 - tip * 0.35)} C 9.2 17.4 5.8 13.8 5.8 9.8 A 6.2 6.2 0 1 1 18.2 9.8 C 18.2 13.8 14.8 17.4 ${fmt(12 + tip * 0.6)} ${fmt(20.1 - tip * 0.35)} Q 12 ${fmt(20.95 - tip * 0.12)} ${fmt(12 - tip * 0.6)} ${fmt(20.1 - tip * 0.35)} Z`;
    return `<path d="${body}"/><circle cx="12" cy="9.8" r="2.3"/>`;
  },
};

export const pinIcon: IconDefinition = {
  id: 'pin',
  category: 'Essentials',
  draw: (r) =>
    `<path d="M 8.2 4.2 H 15.8 ${smoothPoly(
      [
        [9.4, 4.2, 0.25],
        [14.6, 4.2, 0.25],
        [15.2, 11, 0.45],
        [17.6, 13.4, 0.55],
        [17.6, 14.8, 0.5],
        [6.4, 14.8, 0.5],
        [6.4, 13.4, 0.55],
        [8.8, 11, 0.45],
      ],
      r,
      true
    )} M 12 14.8 V 20.4"/>`,
};

export const shoppingBagIcon: IconDefinition = {
  id: 'shopping-bag',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.8, 8, 0.85],
        [19.2, 8, 0.85],
        [20, 19.6, 1.0],
        [4, 19.6, 1.0],
      ],
      r,
      true
    )} M 8.6 8 V 6.6 A 3.4 3.4 0 0 1 15.4 6.6 V 8"/>`,
};

export const shoppingCartIcon: IconDefinition = {
  id: 'shopping-cart',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.0, 4.6],
        [5.8, 4.6, 0.45],
        [8.2, 15.4, 0.55],
        [18.2, 15.4, 0.55],
        [20.4, 7.6, 0.45],
        [6.47, 7.6],
      ],
      r,
      false
    )}"/><circle cx="9.6" cy="19.2" r="1.45"/><circle cx="17.0" cy="19.2" r="1.45"/>`,
};

export const tagIcon: IconDefinition = {
  id: 'tag',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.2, 4.2, 0.8],
        [11.6, 4.2, 0.55],
        [20, 12.6, 0.75],
        [12.6, 20, 0.75],
        [4.2, 11.6, 0.55],
      ],
      r,
      true
    )}"/><circle cx="8.6" cy="8.6" r="1.3"/>`,
};

export const giftIcon: IconDefinition = {
  id: 'gift',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(3.6, 7.8, 16.8, 3.8, Math.min(r * 0.6, 1.7))} ${smoothPoly(
      [
        [5.2, 11.6],
        [5.2, 19.8, 0.9],
        [18.8, 19.8, 0.9],
        [18.8, 11.6],
      ],
      r,
      false
    )} M 12 7.8 V 19.8 M 12 7.8 H 9 C 7.5 7.8 6.6 6.9 6.6 5.7 C 6.6 4.5 7.5 3.8 8.8 3.8 C 10.6 3.8 12 5.6 12 7.8 Z M 12 7.8 H 15 C 16.5 7.8 17.4 6.9 17.4 5.7 C 17.4 4.5 16.5 3.8 15.2 3.8 C 13.4 3.8 12 5.6 12 7.8 Z"/>`,
};

export const inboxIcon: IconDefinition = {
  id: 'inbox',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(3.4, 4.4, 17.2, 15.2, r)} ${smoothPoly(
      [
        [3.4, 13.2],
        [8.2, 13.2, 0.5],
        [9.6, 15.6, 0.55],
        [14.4, 15.6, 0.55],
        [15.8, 13.2, 0.5],
        [20.6, 13.2],
      ],
      r,
      false
    )}"/>`,
};

export const micIcon: IconDefinition = {
  id: 'mic',
  category: 'Essentials',
  draw: () =>
    `<path d="${squircleRect(8.8, 3.4, 6.4, 10.2, 3.2)} M 5.6 10.6 A 6.4 6.4 0 0 0 18.4 10.6 M 12 17 V 20.6 M 8.8 20.6 H 15.2"/>`,
};

export const volumeIcon: IconDefinition = {
  id: 'volume',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4, 9.2, 0.55],
        [7.8, 9.2, 0.3],
        [12.4, 5.4, 0.45],
        [12.4, 18.6, 0.45],
        [7.8, 14.8, 0.3],
        [4, 14.8, 0.55],
      ],
      r,
      true
    )} M 15.6 9.2 A 4 4 0 0 1 15.6 14.8 M 18 6.8 A 7.4 7.4 0 0 1 18 17.2"/>`,
};

export const volumeOffIcon: IconDefinition = {
  id: 'volume-off',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4, 9.2, 0.55],
        [7.8, 9.2, 0.3],
        [12.4, 5.4, 0.45],
        [12.4, 18.6, 0.45],
        [7.8, 14.8, 0.3],
        [4, 14.8, 0.55],
      ],
      r,
      true
    )} M 15.6 9.6 L 20.4 14.4 M 20.4 9.6 L 15.6 14.4"/>`,
};

export const wifiIcon: IconDefinition = {
  id: 'wifi',
  category: 'Essentials',
  draw: () =>
    `<path d="M 3.4 9.6 A 12.2 12.2 0 0 1 20.6 9.6 M 6.1 12.3 A 8.4 8.4 0 0 1 17.9 12.3 M 8.8 15 A 4.6 4.6 0 0 1 15.2 15"/><circle cx="12" cy="18.2" r="1.1"/>`,
};

export const batteryIcon: IconDefinition = {
  id: 'battery',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(3, 6.8, 15.6, 10.4, r)} M 21 10.2 V 13.8 M 6.8 10.2 V 13.8 M 10.6 10.2 V 13.8"/>`,
};

export const bluetoothIcon: IconDefinition = {
  id: 'bluetooth',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [7.2, 7.6],
        [16.8, 16.4, 0.4],
        [12, 20.4, 0.45],
        [12, 3.6, 0.45],
        [16.8, 7.6, 0.4],
        [7.2, 16.4],
      ],
      r,
      false
    )}"/>`,
};

export const printerIcon: IconDefinition = {
  id: 'printer',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [7.2, 8.6],
        [7.2, 4, 0.6],
        [16.8, 4, 0.6],
        [16.8, 8.6],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [7.2, 16.8],
        [3.6, 16.8, 0.85],
        [3.6, 8.6, 0.85],
        [20.4, 8.6, 0.85],
        [20.4, 16.8, 0.85],
        [16.8, 16.8],
      ],
      r,
      false
    )} ${squircleRect(7.2, 13.8, 9.6, 6.4, Math.min(r * 0.55, 1.6))}"/><circle cx="17" cy="11.6" r="0.65"/>`,
};

export const monitorIcon: IconDefinition = {
  id: 'monitor',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(3, 4.2, 18, 12.4, r)} M 12 16.6 V 20 M 8.2 20 H 15.8"/>`,
};

export const smartphoneIcon: IconDefinition = {
  id: 'smartphone',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(6.4, 2.8, 11.2, 18.4, Math.min(1.2 + r * 0.8, 3.4))} M 10.6 17.8 H 13.4"/>`,
};

export const powerIcon: IconDefinition = {
  id: 'power',
  category: 'Essentials',
  draw: () =>
    `<path d="M 7.75 6.3 A 7.6 7.6 0 1 0 16.25 6.3 M 12 3.6 V 11.4"/>`,
};

export const logInIcon: IconDefinition = {
  id: 'log-in',
  category: 'Alerts',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<path d="${smoothPoly(
      [
        [10.6, 4.6],
        [18.4, 4.6, 0.95],
        [18.4, 19.4, 0.95],
        [10.6, 19.4],
      ],
      r,
      false
    )} M 4.6 12 H ${fmt(14.6 - pull)} ${smoothPoly(
      [
        [11.4, 8.8],
        [14.8, 12, 0.42],
        [11.4, 15.2],
      ],
      r,
      false
    )}"/>`;
  },
};

export const flameIcon: IconDefinition = {
  id: 'flame',
  category: 'Essentials',
  draw: () =>
    `<path d="M 12 3.2 C 12 3.2 18.4 7.8 18.4 13.6 C 18.4 17.4 15.6 20.4 12 20.4 C 8.4 20.4 5.6 17.4 5.6 13.6 C 5.6 11.4 6.6 9.6 7.8 8.2 C 7.8 10.2 9 11 9.6 11 C 9.2 8.2 10.6 5.2 12 3.2 Z"/>`,
};

export const trophyIcon: IconDefinition = {
  id: 'trophy',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.3);
    const cup =
      cr <= 0.05
        ? 'M 7 4.4 H 17 V 9.8 C 17 12.8 14.8 15 12 15 C 9.2 15 7 12.8 7 9.8 Z'
        : `M ${fmt(7 + cr)} 4.4 H ${fmt(17 - cr)} Q 17 4.4 17 ${fmt(4.4 + cr)} V 9.8 C 17 12.8 14.8 15 12 15 C 9.2 15 7 12.8 7 9.8 V ${fmt(4.4 + cr)} Q 7 4.4 ${fmt(7 + cr)} 4.4 Z`;
    return `<path d="${cup} M 7 6.4 H 4.8 C 4 6.4 3.6 7 3.8 7.8 C 4.2 10 5.4 11.2 7 11.4 M 17 6.4 H 19.2 C 20 6.4 20.4 7 20.2 7.8 C 19.8 10 18.6 11.2 17 11.4 M 12 15 V 19.6 M 8.4 19.6 H 15.6"/>`;
  },
};

export const bookIcon: IconDefinition = {
  id: 'book',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.4, 1.2);
    return `<path d="M 12 6.8 C 10.4 5.2 8.2 4.6 ${fmt(4.2 + cr)} 4.6 Q 4.2 4.6 4.2 ${fmt(4.6 + cr)} V ${fmt(17.8 - cr)} Q 4.2 17.8 ${fmt(4.2 + cr)} 17.8 C 8.2 17.8 10.4 18.4 12 19.8 C 13.6 18.4 15.8 17.8 ${fmt(19.8 - cr)} 17.8 Q 19.8 17.8 19.8 ${fmt(17.8 - cr)} V ${fmt(4.6 + cr)} Q 19.8 4.6 ${fmt(19.8 - cr)} 4.6 C 15.8 4.6 13.6 5.2 12 6.8 Z M 12 6.8 V 19.8"/>`;
  },
};

export const helpCircleIcon: IconDefinition = {
  id: 'help-circle',
  category: 'Alerts',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 9.6 9.5 C 9.9 8.2 10.9 7.6 12.1 7.6 C 13.5 7.6 14.5 8.5 14.5 9.8 C 14.5 11.1 13.2 11.7 12.3 12.3 C 12 12.5 12 12.9 12 13.4"/><circle cx="12" cy="16.2" r="0.75"/>`,
};

export const locationIcon: IconDefinition = {
  id: 'location',
  category: 'Essentials',
  draw: () =>
    `<circle cx="12" cy="12" r="6.4"/><circle cx="12" cy="12" r="2"/><path d="M 12 3.2 V 5.6 M 12 18.4 V 20.8 M 3.2 12 H 5.6 M 18.4 12 H 20.8"/>`,
};

export const mapAddIcon: IconDefinition = {
  id: 'map-add',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [13.4, 4.4],
        [4, 4.4, 1.0],
        [4, 19.8, 1.0],
        [19.4, 19.8, 1.0],
        [19.4, 10.6],
      ],
      r,
      false
    )} M 9.6 4.4 L 13.6 19.8 M 4 12.6 L 11.4 10.8 M 18.1 3.5 V 7.9 M 15.9 5.7 H 20.3"/>`,
};

export const bulbIcon: IconDefinition = {
  id: 'bulb',
  category: 'Essentials',
  draw: () =>
    `<path d="M 9.4 15.8 V 14.9 C 9.4 13.9 8.8 13.2 8.1 12.6 A 5.6 5.6 0 1 1 15.9 12.6 C 15.2 13.2 14.6 13.9 14.6 14.9 V 15.8 H 9.4 Z M 9.8 18.2 H 14.2 M 10.8 20.4 H 13.2"/>`,
};

export const smileyIcon: IconDefinition = {
  id: 'smiley',
  category: 'Essentials',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><circle cx="9.2" cy="10" r="0.85"/><circle cx="14.8" cy="10" r="0.85"/><path d="M 8.6 14.4 C 9.5 16.1 10.7 16.8 12 16.8 C 13.3 16.8 14.5 16.1 15.4 14.4"/>`,
};

export const alarmIcon: IconDefinition = {
  id: 'alarm',
  category: 'Essentials',
  draw: (r) =>
    `<circle cx="12" cy="13" r="7.2"/><path d="M 4.4 7.4 A 3.4 3.4 0 0 1 8.4 4.2 M 15.6 4.2 A 3.4 3.4 0 0 1 19.6 7.4 M 6.8 18.6 L 5.4 20.4 M 17.2 18.6 L 18.6 20.4 ${smoothPoly(
      [
        [12, 9.2],
        [12, 13, 0.4],
        [14.8, 14.4],
      ],
      r,
      false
    )}"/>`,
};

export const stopwatchIcon: IconDefinition = {
  id: 'stopwatch',
  category: 'Essentials',
  draw: () =>
    `<circle cx="12" cy="13.4" r="7.2"/><circle cx="12" cy="13.4" r="0.85"/><path d="M 9.6 3.4 H 14.4 M 12 3.4 V 6.2 M 17.4 7.8 L 19 6.2 M 12.6 12.8 L 15.2 10.2"/>`,
};

export const verifiedIcon: IconDefinition = {
  id: 'verified',
  category: 'Essentials',
  draw: (r) => {
    const cx = 12;
    const cy = 12;
    const lobes = 8;
    const rOut = 9.0;
    const rIn = 7.4;
    const pts: WeightedPoint[] = [];
    for (let i = 0; i < lobes * 2; i++) {
      const angle = (i * Math.PI) / lobes - Math.PI / 2;
      const isPeak = i % 2 === 0;
      const rad = isPeak ? rOut : rIn;
      pts.push([
        cx + Math.cos(angle) * rad,
        cy + Math.sin(angle) * rad,
        isPeak ? 0.65 : 0.45,
      ]);
    }
    const badge = smoothPoly(pts, Math.min(r * 0.95, 2.5), true, 0.46);
    const tick = smoothPoly(
      [
        [8.6, 12.1],
        [10.9, 14.4, 0.45],
        [15.5, 9.7],
      ],
      r,
      false
    );
    return `<path d="${badge} ${tick}"/>`;
  },
};

export const announcementIcon: IconDefinition = {
  id: 'announcement',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [16.8, 5.2, 0.75],
        [16.8, 16.8, 0.75],
        [8.8, 13.4, 0.35],
        [4.2, 13.4, 0.75],
        [4.2, 8.6, 0.75],
        [8.8, 8.6, 0.35],
      ],
      r,
      true
    )} ${smoothPoly(
      [
        [6.2, 13.4],
        [7.2, 18.8, 0.65],
        [10.2, 18.8, 0.65],
        [9.3, 13.6],
      ],
      r,
      false
    )} M 19.4 8.6 A 3.6 3.6 0 0 1 19.4 13.4"/>`,
};

export const headphonesIcon: IconDefinition = {
  id: 'headphones',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.7, 1.6);
    const bandEnd = 12.8 + cr;
    return `<path d="M 4.2 ${fmt(bandEnd)} V 11.6 A 7.8 7.8 0 0 1 19.8 11.6 V ${fmt(bandEnd)} ${squircleRect(4.2, 12.8, 3.8, 6.8, cr)} ${squircleRect(16, 12.8, 3.8, 6.8, cr)}"/>`;
  },
};

export const videoIcon: IconDefinition = {
  id: 'video',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(3.2, 6.4, 12.2, 11.2, Math.min(r * 0.9, 2.8))} ${smoothPoly(
      [
        [15.4, 10.2],
        [20.6, 7.2, 0.55],
        [20.6, 16.8, 0.55],
        [15.4, 13.8],
      ],
      r,
      false
    )}"/>`,
};

export const walletIcon: IconDefinition = {
  id: 'wallet',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(3.4, 6.2, 17.2, 13, r)} M 5.8 6.2 L 15.8 3.8 C 16.9 3.55 18 4.4 18 5.5 V 6.2 ${smoothPoly(
      [
        [20.6, 10.4],
        [15.6, 10.4, 0.78],
        [15.6, 15, 0.78],
        [20.6, 15],
      ],
      r,
      false
    )}"/><circle cx="17.6" cy="12.7" r="0.75"/>`,
};

export const rocketIcon: IconDefinition = {
  id: 'rocket',
  category: 'Essentials',
  draw: (r) =>
    `<path d="M 19.6 4.4 C 15.6 4.4 12.2 6 9.8 8.6 L 8.2 10.2 C 7.6 10.8 7.6 11.8 8.2 12.4 L 11.6 15.8 C 12.2 16.4 13.2 16.4 13.8 15.8 L 15.4 14.2 C 18 11.8 19.6 8.4 19.6 4.4 Z ${smoothPoly(
      [
        [9.8, 8.6],
        [5.8, 8.6, 0.6],
        [4.4, 11.8, 0.55],
        [7.8, 11.8],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [15.4, 14.2],
        [15.4, 18.2, 0.6],
        [12.2, 19.6, 0.55],
        [12.2, 16.2],
      ],
      r,
      false
    )} M 6.8 15.2 C 5.4 16.2 4.8 17.8 4.6 19.4 C 6.2 19.2 7.8 18.6 8.8 17.2"/><circle cx="14.2" cy="9.8" r="1.4"/>`,
};

// ------------------------------------------
// 2. DESIGN — Creative Studio & Typography
// ------------------------------------------
export const colorIcon: IconDefinition = {
  id: 'color',
  category: 'Design',
  draw: (r) => {
    const tip = Math.min(r * 0.22, 0.7);
    const droplet =
      tip <= 0.04
        ? 'M 12 3.4 C 12 3.4 5.4 10.6 5.4 14.6 A 6.6 6.6 0 0 0 18.6 14.6 C 18.6 10.6 12 3.4 12 3.4 Z'
        : `M ${fmt(12 - tip * 0.55)} ${fmt(3.9 + tip * 0.35)} Q 12 ${fmt(3.15 + tip * 0.15)} ${fmt(12 + tip * 0.55)} ${fmt(3.9 + tip * 0.35)} C 14.4 6.6 18.6 11.4 18.6 14.6 A 6.6 6.6 0 0 1 5.4 14.6 C 5.4 11.4 9.6 6.6 ${fmt(12 - tip * 0.55)} ${fmt(3.9 + tip * 0.35)} Z`;
    return `<path d="${droplet} M 9 14.8 A 3.2 3.2 0 0 0 11.8 17.4"/>`;
  },
};

export const paletteIcon: IconDefinition = {
  id: 'palette',
  category: 'Design',
  draw: () =>
    `<path d="M 12 3.4 C 7.2 3.4 3.4 7.2 3.4 12 C 3.4 16.8 7.2 20.6 12 20.6 C 13.4 20.6 14.4 19.6 14.4 18.3 C 14.4 17.7 14.2 17.2 13.8 16.8 C 13.4 16.4 13.2 15.9 13.2 15.4 C 13.2 14.4 14 13.6 15 13.6 H 17 C 19 13.6 20.6 12 20.6 10 C 20.6 6.2 16.8 3.4 12 3.4 Z"/><circle cx="8" cy="10.4" r="0.9"/><circle cx="11.2" cy="7.4" r="0.9"/><circle cx="15.2" cy="8.4" r="0.9"/><circle cx="8.6" cy="14.6" r="0.9"/>`,
};

export const themeIcon: IconDefinition = {
  id: 'theme',
  category: 'Design',
  draw: () =>
    `<path d="M 18.5 3.9 C 19.3 3.1 20.6 4.4 19.8 5.2 L 12.6 13.4 L 10.6 11.4 Z M 10.6 11.4 C 8.4 11.2 6.6 12.6 6.4 14.8 C 6.2 16.6 5.2 18.2 3.8 19.2 C 5.8 19.8 8.3 19.8 10.2 18.3 C 11.9 16.9 12.8 15.2 12.6 13.4"/>`,
};

export const carouselIcon: IconDefinition = {
  id: 'carousel',
  category: 'Design',
  draw: (r) =>
    `<path d="${squircleRect(7.6, 3.2, 8.8, 17.6, Math.min(r * 0.95, 2.8))} ${smoothPoly(
      [
        [5, 6.2],
        [2.8, 6.2, 0.95],
        [2.8, 17.8, 0.95],
        [5, 17.8],
      ],
      r,
      false,
      0.65
    )} ${smoothPoly(
      [
        [19, 6.2],
        [21.2, 6.2, 0.95],
        [21.2, 17.8, 0.95],
        [19, 17.8],
      ],
      r,
      false,
      0.65
    )}"/>`,
};

export const templatesIcon: IconDefinition = {
  id: 'templates',
  category: 'Design',
  draw: (r) =>
    `<path d="${squircleRect(3.4, 3.8, 17.2, 16.4, r)} M 3.4 9 H 20.6 M 9.6 9 V 20.2 M 12.8 13 H 17.2 M 12.8 16.2 H 15.8"/>`,
};

export const roundCornerIcon: IconDefinition = {
  id: 'round-corner',
  category: 'Design',
  draw: (r) => {
    const cr = Math.min(4.2 + r * 0.9, 8.2);
    const c = cr * 0.58;
    return `<path d="M 5 19 V ${fmt(5 + cr)} C 5 ${fmt(5 + cr - c)} ${fmt(5 + cr - c)} 5 ${fmt(5 + cr)} 5 H 19"/>`;
  },
};

export const strokeIcon: IconDefinition = {
  id: 'stroke',
  category: 'Design',
  draw: (r) =>
    `<path d="M 4.4 6 H 19.6 ${squircleRect(4.4, 10, 15.2, 2.2, Math.min(r * 0.45, 1.1))} ${squircleRect(4.4, 15.2, 15.2, 3.8, Math.min(r * 0.72, 1.9))}"/>`,
};

export const fontIcon: IconDefinition = {
  id: 'font',
  category: 'Design',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.4, 17.6],
        [7.2, 6.2, 0.25],
        [11, 17.6],
      ],
      r,
      false
    )} M 4.7 14 H 9.7 M 14.4 11.4 C 15.1 10.5 16.2 10.2 17.3 10.2 C 19 10.2 20 11.2 20 12.8 V 17.6 M 20 14.2 H 16.6 C 14.9 14.2 13.8 15 13.8 16 C 13.8 17 14.9 17.8 16.6 17.8 C 18.2 17.8 19.4 17 20 16"/>`,
};

export const numberIcon: IconDefinition = {
  id: 'number',
  category: 'Design',
  draw: (r) =>
    `<path d="${squircleRect(3.6, 3.6, 16.8, 16.8, r)} M 9.8 9.6 L 12.2 7.8 V 16.2 M 9.6 16.2 H 14.8"/>`,
};

export const musicIcon: IconDefinition = {
  id: 'music',
  category: 'Design',
  draw: (r) =>
    `<circle cx="7" cy="17.4" r="2.3"/><circle cx="16.8" cy="15.8" r="2.3"/><path d="${smoothPoly(
      [
        [9.3, 17.4],
        [9.3, 6.2, 0.55],
        [19.1, 4.4, 0.55],
        [19.1, 15.8],
      ],
      r,
      false
    )} M 9.3 9.4 L 19.1 7.6"/>`,
};

// ------------------------------------------
// 2. DEV & AI — Precision Technical Forms
// ------------------------------------------
export const aiSparkIcon: IconDefinition = {
  id: 'ai-spark',
  category: 'Dev & AI',
  draw: (r) =>
    `<path d="${kineticSparkPath(r)}"/><circle cx="18.8" cy="5.2" r="1.05"/>`,
};

export const codeIcon: IconDefinition = {
  id: 'code',
  category: 'Dev & AI',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [8.6, 7.2],
        [3.8, 12, 0.45],
        [8.6, 16.8],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [15.4, 7.2],
        [20.2, 12, 0.45],
        [15.4, 16.8],
      ],
      r,
      false
    )} M 13.4 5.8 L 10.6 18.2"/>`,
};

export const terminalIcon: IconDefinition = {
  id: 'terminal',
  category: 'Dev & AI',
  draw: (r) =>
    `<path d="${squircleRect(3.2, 4.4, 17.6, 15.2, r)} ${smoothPoly(
      [
        [7.4, 9.6],
        [10.2, 12, 0.4],
        [7.4, 14.4],
      ],
      r,
      false
    )} M 12.6 14.4 H 16.6"/>`,
};

export const commandIcon: IconDefinition = {
  id: 'command',
  category: 'Dev & AI',
  draw: (r) => `<path d="${kineticCommandPath(r)}"/>`,
};

export const cpuIcon: IconDefinition = {
  id: 'cpu',
  category: 'Dev & AI',
  draw: (r) =>
    `<path d="${squircleRect(6.8, 6.8, 10.4, 10.4, Math.min(r * 0.9, 3.2))} ${squircleRect(10, 10, 4, 4, Math.min(r * 0.45, 1.4))} M 9.5 3.6 V 6.8 M 14.5 3.6 V 6.8 M 9.5 17.2 V 20.4 M 14.5 17.2 V 20.4 M 3.6 9.5 H 6.8 M 3.6 14.5 H 6.8 M 17.2 9.5 H 20.4 M 17.2 14.5 H 20.4"/>`,
};

export const databaseIcon: IconDefinition = {
  id: 'database',
  category: 'Dev & AI',
  draw: () =>
    `<ellipse cx="12" cy="6.2" rx="7.6" ry="2.7"/><path d="M 4.4 6.2 V 17.8 C 4.4 19.3 7.8 20.5 12 20.5 C 16.2 20.5 19.6 19.3 19.6 17.8 V 6.2 M 4.4 12 C 4.4 13.5 7.8 14.7 12 14.7 C 16.2 14.7 19.6 13.5 19.6 12"/>`,
};

export const gitBranchIcon: IconDefinition = {
  id: 'git-branch',
  category: 'Dev & AI',
  draw: (r) => {
    const c = Math.min(r * 0.85, 3.0);
    return `<circle cx="6.8" cy="6.2" r="2.2"/><circle cx="6.8" cy="17.8" r="2.2"/><circle cx="17.2" cy="8.8" r="2.2"/><path d="M 6.8 8.4 V 15.6 M 6.8 15.4 C 6.8 ${fmt(12.2 - c * 0.25)} 17.2 ${fmt(13.8 + c * 0.25)} 17.2 11"/>`;
  },
};

export const bracketsIcon: IconDefinition = {
  id: 'brackets',
  category: 'Dev & AI',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [8.6, 4.4],
        [5, 4.4, 0.8],
        [5, 19.6, 0.8],
        [8.6, 19.6],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [15.4, 4.4],
        [19, 4.4, 0.8],
        [19, 19.6, 0.8],
        [15.4, 19.6],
      ],
      r,
      false
    )}"/>`,
};

export const bugIcon: IconDefinition = {
  id: 'bug',
  category: 'Dev & AI',
  draw: (r) =>
    `<path d="${squircleRect(7.6, 8.2, 8.8, 11.4, Math.min(2.0 + r * 0.55, 4.2))} M 9.4 8.2 C 9.4 6.4 10.5 5.2 12 5.2 C 13.5 5.2 14.6 6.4 14.6 8.2 M 12 11 V 16.8 M 9.6 5.6 L 7.8 3.6 M 14.4 5.6 L 16.2 3.6 M 4.4 11.2 L 7.6 12 M 19.6 11.2 L 16.4 12 M 4 14.5 H 7.6 M 16.4 14.5 H 20 M 4.8 17.8 L 7.6 16.8 M 19.2 17.8 L 16.4 16.8"/>`,
};

export const serverIcon: IconDefinition = {
  id: 'server',
  category: 'Dev & AI',
  draw: (r) =>
    `<path d="${squircleRect(3.6, 4.2, 16.8, 6.2, Math.min(r * 0.85, 2.4))} ${squircleRect(3.6, 13.6, 16.8, 6.2, Math.min(r * 0.85, 2.4))} M 12.6 7.3 H 16.8 M 12.6 16.7 H 16.8"/><circle cx="7.4" cy="7.3" r="0.9"/><circle cx="7.4" cy="16.7" r="0.9"/>`,
};

export const globeIcon: IconDefinition = {
  id: 'globe',
  category: 'Dev & AI',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 3.6 12 H 20.4 M 12 3.4 C 8.4 6.8 8.4 17.2 12 20.6 M 12 3.4 C 15.6 6.8 15.6 17.2 12 20.6"/>`,
};

// ------------------------------------------
// 3. SOCIAL — Communication, Round Variants & Contact
// ------------------------------------------
export const messageRoundIcon: IconDefinition = {
  id: 'message-round',
  category: 'Social',
  draw: (r) => `<path d="${kineticRoundBubblePath(r)}"/>`,
};

export const messageRoundLinesIcon: IconDefinition = {
  id: 'message-round-lines',
  category: 'Social',
  draw: (r) =>
    `<path d="${kineticRoundBubblePath(r)} M 8.4 10 H 15.6 M 8.4 13.4 H 13.4"/>`,
};

export const messageRoundDotsIcon: IconDefinition = {
  id: 'message-round-dots',
  category: 'Social',
  draw: (r) =>
    `<path d="${kineticRoundBubblePath(r)}"/><circle cx="8.6" cy="11.6" r="0.9"/><circle cx="12" cy="11.6" r="0.9"/><circle cx="15.4" cy="11.6" r="0.9"/>`,
};

export const commentIcon: IconDefinition = {
  id: 'comment',
  category: 'Social',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.6, 4.8, 1.0],
        [20.4, 4.8, 1.0],
        [20.4, 16, 1.0],
        [9.4, 16, 0.45],
        [4.4, 19.6, 0.35],
        [4.8, 16, 0.35],
        [3.6, 16, 0.7],
      ],
      r,
      true
    )}"/>`,
};

export const commentRoundIcon: IconDefinition = {
  id: 'comment-round',
  category: 'Social',
  draw: (r) => {
    const t = Math.min(r * 0.3, 0.9);
    return `<path d="M 8.6 16.4 H 15.2 C 18.2 16.4 20.6 14 20.6 10.8 C 20.6 7.6 18.2 5.2 15.2 5.2 H 8.8 C 5.8 5.2 3.4 7.6 3.4 10.8 C 3.4 12.6 4.1 14.2 5.4 15.2 L ${fmt(4.6 + t * 0.25)} ${fmt(18.8 - t * 0.2)} Q 4.3 19.5 ${fmt(5.1 + t * 0.25)} ${fmt(19.1 - t * 0.12)} Z"/>`;
  },
};

export const messageSquareIcon: IconDefinition = {
  id: 'message-square',
  category: 'Social',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.6, 4.8, 1.0],
        [20.4, 4.8, 1.0],
        [20.4, 16, 1.0],
        [9.4, 16, 0.45],
        [4.4, 19.6, 0.35],
        [4.8, 16, 0.35],
        [3.6, 16, 0.7],
      ],
      r,
      true
    )}"/><circle cx="8.6" cy="10.4" r="0.85"/><circle cx="12" cy="10.4" r="0.85"/><circle cx="15.4" cy="10.4" r="0.85"/>`,
};

export const messageLinesIcon: IconDefinition = {
  id: 'message-lines',
  category: 'Social',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.6, 4.8, 1.0],
        [20.4, 4.8, 1.0],
        [20.4, 16, 1.0],
        [9.4, 16, 0.45],
        [4.4, 19.6, 0.35],
        [4.8, 16, 0.35],
        [3.6, 16, 0.7],
      ],
      r,
      true
    )} M 8 9 H 16 M 8 12.2 H 13.4"/>`,
};

export const emailIcon: IconDefinition = {
  id: 'email',
  category: 'Social',
  draw: (r) =>
    `<path d="${squircleRect(3, 5.2, 18, 13.6, r)} ${smoothPoly(
      [
        [6.2, 8.6],
        [12, 13, 0.75],
        [17.8, 8.6],
      ],
      r,
      false
    )}"/>`,
};

export const phoneIcon: IconDefinition = {
  id: 'phone',
  category: 'Social',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.4);
    return `<path d="M 6.4 4.2 H 8.8 C ${fmt(9.5 + cr * 0.15)} 4.2 10 4.8 10.2 5.6 L 11 8.4 C 11.2 9.1 10.9 9.8 10.3 10.2 L 8.9 11.1 C 9.9 13 11 14.1 12.9 15.1 L 13.8 13.7 C 14.2 13.1 14.9 12.8 15.6 13 L 18.4 13.8 C 19.2 14 19.8 14.5 19.8 15.2 V 17.6 C 19.8 19 18.6 20 17.2 19.9 C 10.4 19.4 4.6 13.6 4.1 6.8 C 4 5.4 5 4.2 6.4 4.2 Z"/>`;
  },
};

export const heartIcon: IconDefinition = {
  id: 'heart',
  category: 'Social',
  draw: (r) => `<path d="${kineticHeartPath(r)}"/>`,
};

export const thumbsUpIcon: IconDefinition = {
  id: 'thumbs-up',
  category: 'Social',
  draw: (r) =>
    `<path d="${squircleRect(3.2, 10.6, 3.4, 9, Math.min(r * 0.6, 1.6))} ${smoothPoly(
      [
        [8.6, 11.2, 0.55],
        [11.4, 4.4, 0.72],
        [13.4, 4.8, 0.65],
        [12.8, 9.6, 0.45],
        [19.8, 9.6, 0.75],
        [18.2, 19.6, 0.95],
        [8.6, 19.6, 0.7],
      ],
      r,
      true
    )}"/>`,
};

export const shareIcon: IconDefinition = {
  id: 'share',
  category: 'Social',
  draw: () =>
    `<circle cx="17.2" cy="5.8" r="2.2"/><circle cx="6.8" cy="12" r="2.2"/><circle cx="17.2" cy="18.2" r="2.2"/><path d="M 8.8 10.8 L 15.2 7 M 8.8 13.2 L 15.2 17"/>`,
};

export const shareRoundIcon: IconDefinition = {
  id: 'share-round',
  category: 'Social',
  draw: (r) => {
    const pull = tipPullback(r, 0.45);
    return `<path d="M 4.4 18.8 C 5.4 13.4 9.2 10.4 14.8 10.4 H ${fmt(19.2 - pull)} ${smoothPoly(
      [
        [14.4, 5.8],
        [19.4, 10.4, 0.45],
        [14.4, 15],
      ],
      r,
      false
    )}"/>`;
  },
};

export const sendIcon: IconDefinition = {
  id: 'send',
  category: 'Social',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [20, 4, 0.42],
        [3.6, 9.8, 0.48],
        [10.2, 13.8, 0.35],
        [14.2, 20.4, 0.48],
      ],
      r,
      true
    )} M 10.4 13.6 L 14.8 9.2"/>`,
};

export const sendRoundIcon: IconDefinition = {
  id: 'send-round',
  category: 'Social',
  draw: (r) => {
    const soft = Math.min(r * 0.25, 0.8);
    return `<path d="M ${fmt(19.2 - soft * 0.2)} ${fmt(4.6 + soft * 0.15)} C 19.9 4.3 20.3 4.8 20 5.5 L 15.1 18.9 C 14.7 19.9 13.3 20 12.7 19 L 10.1 13.9 L 5 11.3 C 4 10.7 4.1 9.3 5.1 8.9 Z M 10.1 13.9 L 14.8 9.2"/>`;
  },
};

export const bookmarkIcon: IconDefinition = {
  id: 'bookmark',
  category: 'Social',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [5.6, 3.6, 0.95],
        [18.4, 3.6, 0.95],
        [18.4, 20.2, 0.48],
        [12, 16.2, 0.55],
        [5.6, 20.2, 0.48],
      ],
      r,
      true
    )}"/>`,
};

export const bookmarkRoundIcon: IconDefinition = {
  id: 'bookmark-round',
  category: 'Social',
  draw: () =>
    `<path d="M 6 19.2 V 7.2 C 6 5.1 7.6 3.6 9.6 3.6 H 14.4 C 16.4 3.6 18 5.1 18 7.2 V 19.2 C 18 20.1 17 20.6 16.2 20 L 13.2 17.7 C 12.5 17.1 11.5 17.1 10.8 17.7 L 7.8 20 C 7 20.6 6 20.1 6 19.2 Z"/>`,
};

export const repostIcon: IconDefinition = {
  id: 'repost',
  category: 'Social',
  draw: (r) => {
    const pull = tipPullback(r, 0.4);
    return `<path d="${smoothPoly(
      [
        [4.4, 11.4],
        [4.4, 7.2, 0.95],
        [18 - pull, 7.2],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [15.2, 4.4],
        [18, 7.2, 0.4],
        [15.2, 10],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [19.6, 12.6],
        [19.6, 16.8, 0.95],
        [6 + pull, 16.8],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [8.8, 14],
        [6, 16.8, 0.4],
        [8.8, 19.6],
      ],
      r,
      false
    )}"/>`;
  },
};

export const repostRoundIcon: IconDefinition = {
  id: 'repost-round',
  category: 'Social',
  draw: (r) => {
    const pull = tipPullback(r, 0.45);
    return `<path d="M 4.2 11.8 A 4.8 4.8 0 0 1 9 7 H ${fmt(18.6 - pull)} ${smoothPoly(
      [
        [15.8, 4.4],
        [18.8, 7, 0.45],
        [15.8, 9.6],
      ],
      r,
      false
    )} M 19.8 12.2 A 4.8 4.8 0 0 1 15 17 H ${fmt(5.4 + pull)} ${smoothPoly(
      [
        [8.2, 14.4],
        [5.2, 17, 0.45],
        [8.2, 19.6],
      ],
      r,
      false
    )}"/>`;
  },
};

export const bellIcon: IconDefinition = {
  id: 'bell',
  category: 'Social',
  draw: () =>
    `<path d="M 12 3.2 V 4.4 M 6.4 10 C 6.4 6.8 8.9 4.4 12 4.4 C 15.1 4.4 17.6 6.8 17.6 10 C 17.6 13.6 18.6 15.1 19.6 16 C 20.1 16.4 19.8 17.2 19.1 17.2 H 4.9 C 4.2 17.2 3.9 16.4 4.4 16 C 5.4 15.1 6.4 13.6 6.4 10 Z M 9.6 19.6 A 2.6 2.6 0 0 0 14.4 19.6"/>`,
};

export const eyeIcon: IconDefinition = {
  id: 'eye',
  category: 'Social',
  draw: () =>
    `<path d="M 2.8 12 C 5.2 6.6 8.4 5.4 12 5.4 C 15.6 5.4 18.8 6.6 21.2 12 C 18.8 17.4 15.6 18.6 12 18.6 C 8.4 18.6 5.2 17.4 2.8 12 Z"/><circle cx="12" cy="12" r="3.1"/>`,
};

export const eyeOffIcon: IconDefinition = {
  id: 'eye-off',
  category: 'Social',
  draw: () =>
    `<path d="M 3.6 3.6 L 20.4 20.4 M 9.8 9.8 A 3.1 3.1 0 0 0 14.2 14.2 M 6.5 7.4 C 4.9 8.5 3.6 10 2.8 12 C 5.2 17.4 8.4 18.6 12 18.6 C 13.8 18.6 15.4 18.2 16.9 17.3 M 9.9 5.7 C 10.6 5.5 11.3 5.4 12 5.4 C 15.6 5.4 18.8 6.6 21.2 12 C 20.5 13.5 19.6 14.8 18.6 15.8"/>`,
};

export const userIcon: IconDefinition = {
  id: 'user',
  category: 'Social',
  draw: () =>
    `<circle cx="12" cy="7.8" r="3.6"/><path d="M 4.8 19.6 C 5.5 15.6 8.3 13.8 12 13.8 C 15.7 13.8 18.5 15.6 19.2 19.6"/>`,
};

export const usersIcon: IconDefinition = {
  id: 'users',
  category: 'Social',
  draw: () =>
    `<circle cx="9.2" cy="8" r="3.2"/><path d="M 3.4 19.4 C 4.1 15.7 6.3 14 9.2 14 C 12.1 14 14.3 15.7 15 19.4 M 15.4 6.4 C 16.9 6.6 18 7.8 18 9.2 C 18 10.6 16.9 11.7 15.4 11.9 M 16.4 14.4 C 18.6 14.8 20.1 16.5 20.6 19.4"/>`,
};

export const atSignIcon: IconDefinition = {
  id: 'at-sign',
  category: 'Social',
  draw: () =>
    `<circle cx="12" cy="12" r="3.2"/><path d="M 15.2 12 V 13.4 C 15.2 14.8 16.3 15.8 17.6 15.8 C 19.2 15.8 20.2 14.2 20.2 12 C 20.2 7.4 16.5 3.8 12 3.8 C 7.5 3.8 3.8 7.5 3.8 12 C 3.8 16.5 7.5 20.2 12 20.2 C 14.1 20.2 15.9 19.5 17.2 18.4"/>`,
};

export const hashIcon: IconDefinition = {
  id: 'hash',
  category: 'Social',
  draw: () =>
    `<path d="M 9.6 4 L 7.4 20 M 16.6 4 L 14.4 20 M 4.4 8.8 H 19.6 M 4.4 15.2 H 19.6"/>`,
};

export const playIcon: IconDefinition = {
  id: 'play',
  category: 'Social',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [7.2, 4.6, 0.72],
        [19.2, 12, 0.72],
        [7.2, 19.4, 0.72],
      ],
      r,
      true
    )}"/>`,
};

export const pauseIcon: IconDefinition = {
  id: 'pause',
  category: 'Social',
  draw: (r) =>
    `<path d="${squircleRect(6, 4.6, 4.2, 14.8, Math.min(r * 0.75, 2.0))} ${squircleRect(13.8, 4.6, 4.2, 14.8, Math.min(r * 0.75, 2.0))}"/>`,
};

export const cameraIcon: IconDefinition = {
  id: 'camera',
  category: 'Social',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.4, 7.8, 0.95],
        [7.6, 7.8, 0.5],
        [9.2, 5.2, 0.6],
        [14.8, 5.2, 0.6],
        [16.4, 7.8, 0.5],
        [20.6, 7.8, 0.95],
        [20.6, 18.8, 1.0],
        [3.4, 18.8, 1.0],
      ],
      r,
      true
    )}"/><circle cx="12" cy="13.2" r="3.1"/><circle cx="17.2" cy="10.6" r="0.55"/>`,
};

export const imageIcon: IconDefinition = {
  id: 'image',
  category: 'Social',
  draw: (r) =>
    `<path d="${squircleRect(3.4, 4.2, 17.2, 15.6, r)} ${smoothPoly(
      [
        [6.2, 16.6],
        [10.4, 12.2, 0.55],
        [13.2, 14.8, 0.45],
        [15.4, 12.6, 0.55],
        [17.8, 16.6],
      ],
      r,
      false
    )}"/><circle cx="8.6" cy="8.8" r="1.4"/>`,
};

// ------------------------------------------
// 4. BRANDS — Social Media & Tech Platforms
// ------------------------------------------
export const instagramIcon: IconDefinition = {
  id: 'instagram',
  category: 'Brands',
  draw: (r) =>
    `<path d="${squircleRect(3.6, 3.6, 16.8, 16.8, Math.min(1.6 + r * 1.15, 5.2))}"/><circle cx="12" cy="12" r="3.8"/><circle cx="16.7" cy="7.3" r="0.8"/>`,
};

export const facebookIcon: IconDefinition = {
  id: 'facebook',
  category: 'Brands',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 15.2 8.4 H 13.5 C 12.4 8.4 11.9 9 11.9 10.2 V 20.5 M 9.4 13.4 H 14.8"/>`,
};

export const twitterIcon: IconDefinition = {
  id: 'twitter',
  category: 'Brands',
  draw: () =>
    `<path d="M 20.6 6.2 C 19.9 6.5 19.2 6.7 18.4 6.8 C 19.2 6.3 19.8 5.6 20.1 4.7 C 19.3 5.1 18.5 5.5 17.6 5.6 C 16.9 4.9 15.9 4.4 14.8 4.4 C 12.7 4.4 11 6.1 11 8.2 C 11 8.5 11 8.8 11.1 9.1 C 8 8.9 5.3 7.4 3.5 5.1 C 3.2 5.7 3 6.3 3 7 C 3 8.3 3.7 9.5 4.7 10.2 C 4.1 10.2 3.5 10 3 9.7 V 9.8 C 3 11.6 4.3 13.2 6 13.5 C 5.7 13.6 5.4 13.6 5 13.6 C 4.8 13.6 4.5 13.6 4.3 13.5 C 4.8 15 6.2 16.1 7.8 16.2 C 6.5 17.2 4.9 17.8 3.2 17.8 L 2.6 17.7 C 4.3 18.8 6.2 19.4 8.3 19.4 C 15.1 19.4 18.8 13.7 18.8 8.7 V 8.2 C 19.5 7.7 20.1 7 20.6 6.2 Z"/>`,
};

export const xIcon: IconDefinition = {
  id: 'x',
  category: 'Brands',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.4, 4.4, 0.25],
        [8.6, 4.4, 0.25],
        [19.6, 19.6, 0.25],
        [15.4, 19.6, 0.25],
      ],
      r,
      true
    )} M 18.6 4.4 L 13 10.6 M 11 13.4 L 5.4 19.6"/>`,
};

export const githubIcon: IconDefinition = {
  id: 'github',
  category: 'Brands',
  draw: () =>
    `<path d="M 9.4 20.4 V 17.6 C 9.4 16.5 9.8 15.7 10.3 15.3 C 7.2 14.9 4.4 13.6 4.4 9.2 C 4.4 7.8 4.9 6.6 5.8 5.6 C 5.5 4.7 5.5 3.7 6 3.1 C 6.9 3.1 8 3.6 9.1 4.4 C 10.9 3.9 13.1 3.9 14.9 4.4 C 16 3.6 17.1 3.1 18 3.1 C 18.5 3.7 18.5 4.7 18.2 5.6 C 19.1 6.6 19.6 7.8 19.6 9.2 C 19.6 13.6 16.8 14.9 13.7 15.3 C 14.2 15.7 14.6 16.5 14.6 17.6 V 20.4 M 9.4 18.2 C 6.4 19.2 6 16.8 4.4 16.2"/>`,
};

export const behanceIcon: IconDefinition = {
  id: 'behance',
  category: 'Brands',
  draw: () =>
    `<path d="M 3.4 6.8 V 17.2 M 3.4 6.8 H 7.2 C 8.7 6.8 9.6 7.8 9.6 9.3 C 9.6 10.7 8.7 11.8 7.2 11.8 H 3.4 M 3.4 11.8 H 7.6 C 9.2 11.8 10.2 12.9 10.2 14.5 C 10.2 16.1 9.2 17.2 7.6 17.2 H 3.4 M 14.6 7.2 H 19.2 M 13.4 13.6 H 20.4 C 20.4 11.6 18.9 10.2 16.9 10.2 C 14.9 10.2 13.4 11.7 13.4 13.7 C 13.4 15.8 14.9 17.2 17.1 17.2 C 18.4 17.2 19.5 16.7 20.1 15.8"/>`,
};

export const substackIcon: IconDefinition = {
  id: 'substack',
  category: 'Brands',
  draw: (r) =>
    `<path d="${squircleRect(5, 3.8, 14, 2.4, Math.min(r * 0.4, 1.0))} ${squircleRect(5, 8.2, 14, 2.4, Math.min(r * 0.4, 1.0))} ${smoothPoly(
      [
        [5, 12.6, 0.4],
        [19, 12.6, 0.4],
        [19, 20.2, 0.35],
        [12, 16.4, 0.45],
        [5, 20.2, 0.35],
      ],
      r,
      true
    )}"/>`,
};

export const linkedinIcon: IconDefinition = {
  id: 'linkedin',
  category: 'Brands',
  draw: (r) =>
    `<path d="${squircleRect(3.6, 3.6, 16.8, 16.8, r)} M 8 11 V 16.4 M 11.6 16.4 V 11 M 11.6 13.2 C 11.6 11.5 12.9 10.8 14.1 10.8 C 15.5 10.8 16.4 11.8 16.4 13.4 V 16.4"/><circle cx="8" cy="8.1" r="0.8"/>`,
};

export const youtubeIcon: IconDefinition = {
  id: 'youtube',
  category: 'Brands',
  draw: (r) =>
    `<path d="${squircleRect(3, 5.4, 18, 13.2, Math.min(2.2 + r * 0.7, 4.6))} ${smoothPoly(
      [
        [10.2, 9.2, 0.55],
        [15.4, 12, 0.55],
        [10.2, 14.8, 0.55],
      ],
      r,
      true
    )}"/>`,
};

export const googleIcon: IconDefinition = {
  id: 'google',
  category: 'Brands',
  draw: () =>
    `<path d="M 19.6 12.2 H 12.4 M 19.6 12.2 C 19.6 16.7 16.3 20 12 20 C 7.6 20 4 16.4 4 12 C 4 7.6 7.6 4 12 4 C 14.2 4 16.2 4.9 17.6 6.3"/>`,
};

export const appleIcon: IconDefinition = {
  id: 'apple',
  category: 'Brands',
  draw: () =>
    `<path d="M 16.8 12.6 C 16.8 10.4 18.4 9.2 18.6 9.1 C 17.5 7.6 15.9 7.4 15.2 7.3 C 13.8 7.2 12.5 8.1 11.8 8.1 C 11.1 8.1 10 7.3 8.9 7.3 C 7.4 7.3 6 8.2 5.2 9.5 C 3.6 12.2 4.8 16.2 6.3 18.4 C 7.1 19.5 8 20.6 9.2 20.6 C 10.3 20.5 10.8 19.9 12.1 19.9 C 13.4 19.9 13.8 20.6 15 20.6 C 16.2 20.6 17 19.5 17.8 18.4 C 18.6 17.2 19 16 19 15.9 C 18.9 15.8 16.8 15 16.8 12.6 Z M 14.4 3.4 C 12.9 3.5 11.7 4.7 11.8 6.1 C 13.3 6.2 14.5 5 14.4 3.4 Z"/>`,
};

export const androidIcon: IconDefinition = {
  id: 'android',
  category: 'Brands',
  draw: (r) => {
    const br = Math.min(r * 0.55, 1.6);
    return `<path d="M 4.6 16.2 A 7.4 7.4 0 0 1 19.4 16.2 V ${fmt(17.8 - br)} Q 19.4 17.8 ${fmt(19.4 - br)} 17.8 H ${fmt(4.6 + br)} Q 4.6 17.8 4.6 ${fmt(17.8 - br)} Z M 8 9.8 L 6 6.6 M 16 9.8 L 18 6.6"/><circle cx="9.2" cy="14" r="0.8"/><circle cx="14.8" cy="14" r="0.8"/>`;
  },
};

export const windowsIcon: IconDefinition = {
  id: 'windows',
  category: 'Brands',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.8, 6.2, 0.45],
        [10.6, 5.1, 0.45],
        [10.6, 11, 0.45],
        [3.8, 11, 0.45],
      ],
      r,
      true
    )} ${smoothPoly(
      [
        [13, 4.7, 0.45],
        [20.2, 3.6, 0.45],
        [20.2, 11, 0.45],
        [13, 11, 0.45],
      ],
      r,
      true
    )} ${smoothPoly(
      [
        [3.8, 13, 0.45],
        [10.6, 13, 0.45],
        [10.6, 18.9, 0.45],
        [3.8, 17.8, 0.45],
      ],
      r,
      true
    )} ${smoothPoly(
      [
        [13, 13, 0.45],
        [20.2, 13, 0.45],
        [20.2, 20.4, 0.45],
        [13, 19.3, 0.45],
      ],
      r,
      true
    )}"/>`,
};

export const threadsIcon: IconDefinition = {
  id: 'threads',
  category: 'Brands',
  draw: () =>
    `<path d="M 17.4 7.8 C 16 5 14 3.6 11.8 3.6 C 7.4 3.6 4.6 7.2 4.6 12 C 4.6 16.8 7.4 20.4 12 20.4 C 16.4 20.4 19.4 17.8 19.4 14.2 C 19.4 11.4 16.6 10.2 12.6 10.4 C 10 10.5 8.8 11.8 8.8 13.3 C 8.8 14.7 10.2 15.5 12 15.5 C 14.4 15.5 15.6 13.8 15.4 10.6 C 15.2 8.2 13.8 7.2 11.8 7.2 C 10.5 7.2 9.6 7.7 9 8.5"/>`,
};

export const tiktokIcon: IconDefinition = {
  id: 'tiktok',
  category: 'Brands',
  draw: () =>
    `<path d="M 13.8 4.4 V 15.4 C 13.8 17.6 12 19.4 9.8 19.4 C 7.6 19.4 5.8 17.6 5.8 15.4 C 5.8 13.2 7.6 11.4 9.8 11.4 C 10.4 11.4 10.9 11.5 11.4 11.7 M 13.8 4.4 C 14.4 7.2 16.4 9 19 9.2"/>`,
};

export const spotifyIcon: IconDefinition = {
  id: 'spotify',
  category: 'Brands',
  draw: () =>
    `<circle cx="12" cy="12" r="8.8"/><path d="M 7.8 9.8 C 10.6 8.9 14.2 9.1 16.8 10.5 M 8.4 12.8 C 10.8 12.1 13.8 12.3 15.9 13.4 M 9.2 15.6 C 11 15.1 13.3 15.3 14.9 16.1"/>`,
};

export const dribbbleIcon: IconDefinition = {
  id: 'dribbble',
  category: 'Brands',
  draw: () =>
    `<circle cx="12" cy="12" r="8.8"/><path d="M 8.6 3.9 C 11.4 7.6 13.4 12.4 14.8 20.2 M 3.5 10.8 C 8.4 10.8 13.6 9.7 17.8 5.6 M 5.8 18.2 C 9.2 14.4 14.2 13.2 20.6 14"/>`,
};

export const figmaIcon: IconDefinition = {
  id: 'figma',
  category: 'Brands',
  draw: () =>
    `<path d="M 9.3 3.9 H 12 V 9.3 H 9.3 A 2.7 2.7 0 0 1 9.3 3.9 Z M 12 3.9 H 14.7 A 2.7 2.7 0 0 1 14.7 9.3 H 12 Z M 9.3 9.3 H 12 V 14.7 H 9.3 A 2.7 2.7 0 0 1 9.3 9.3 Z M 9.3 14.7 H 12 V 17.4 A 2.7 2.7 0 1 1 9.3 14.7 Z"/><circle cx="14.7" cy="12" r="2.7"/>`,
};

export const discordIcon: IconDefinition = {
  id: 'discord',
  category: 'Brands',
  draw: () =>
    `<path d="M 8.6 6.4 C 10.8 5.8 13.2 5.8 15.4 6.4 M 7.2 16.8 C 10.3 17.8 13.7 17.8 16.8 16.8 M 15.8 6.4 L 16.8 5 C 18.4 5.5 19.6 6.4 20.2 7.4 C 21.1 10.6 21.2 13.6 20.2 16.6 C 18.8 17.6 17.2 18.3 15.4 18.6 L 14.4 17.1 M 8.2 6.4 L 7.2 5 C 5.6 5.5 4.4 6.4 3.8 7.4 C 2.9 10.6 2.8 13.6 3.8 16.6 C 5.2 17.6 6.8 18.3 8.6 18.6 L 9.6 17.1"/><circle cx="9.2" cy="12.2" r="1.1"/><circle cx="14.8" cy="12.2" r="1.1"/>`,
};

export const whatsappIcon: IconDefinition = {
  id: 'whatsapp',
  category: 'Brands',
  draw: (r) =>
    `<path d="${kineticRoundBubblePath(r)} M 9.3 8.5 C 8.6 9.1 8.5 10.6 9.8 12.2 C 11.1 13.8 12.7 14.8 13.9 14.8 C 14.6 14.8 15.2 14.3 15.6 13.7"/>`,
};

export const telegramIcon: IconDefinition = {
  id: 'telegram',
  category: 'Brands',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [20.2, 4.6, 0.35],
        [3.6, 11.2, 0.4],
        [9.2, 13.4, 0.3],
        [16.8, 19.2, 0.4],
      ],
      r,
      true
    )} M 9.2 13.4 L 16.6 8.2 M 9.2 13.4 L 10.4 17.8 L 12.8 15.6"/>`,
};

// ------------------------------------------
// 5. ACTIONS — Crisp Utility & Document Forms
// ------------------------------------------
export const downloadIcon: IconDefinition = {
  id: 'download',
  category: 'Actions',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<path d="${smoothPoly(
      [
        [4.2, 14.4],
        [4.2, 19.4, 0.95],
        [19.8, 19.4, 0.95],
        [19.8, 14.4],
      ],
      r,
      false
    )} M 12 4.2 V ${fmt(14.8 - pull)} ${smoothPoly(
      [
        [8, 11],
        [12, 15, 0.42],
        [16, 11],
      ],
      r,
      false
    )}"/>`;
  },
};

export const uploadIcon: IconDefinition = {
  id: 'upload',
  category: 'Actions',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<path d="${smoothPoly(
      [
        [4.2, 14.4],
        [4.2, 19.4, 0.95],
        [19.8, 19.4, 0.95],
        [19.8, 14.4],
      ],
      r,
      false
    )} M 12 15 V ${fmt(4.4 + pull)} ${smoothPoly(
      [
        [8, 8.2],
        [12, 4.2, 0.42],
        [16, 8.2],
      ],
      r,
      false
    )}"/>`;
  },
};

export const saveIcon: IconDefinition = {
  id: 'save',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4, 3.8, 0.85],
        [15.8, 3.8, 0.35],
        [20, 8, 0.35],
        [20, 20, 0.9],
        [4, 20, 0.9],
      ],
      r,
      true
    )} M 8.4 7.4 H 13.6 ${squircleRect(7.6, 12.6, 8.8, 4.6, Math.min(r * 0.5, 1.6))}"/>`,
};

export const trashIcon: IconDefinition = {
  id: 'trash',
  category: 'Actions',
  draw: (r) =>
    `<path d="M 4.4 7 H 19.6 ${smoothPoly(
      [
        [9, 7],
        [9.4, 4.2, 0.65],
        [14.6, 4.2, 0.65],
        [15, 7],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [6.2, 9.6],
        [7, 19.8, 0.9],
        [17, 19.8, 0.9],
        [17.8, 9.6],
      ],
      r,
      false
    )} M 10.2 12.2 V 16.4 M 13.8 12.2 V 16.4"/>`,
};

export const editIcon: IconDefinition = {
  id: 'edit',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [16, 4, 0.62],
        [19.8, 7.8, 0.62],
        [9.4, 18.2, 0.4],
        [4.4, 19.4, 0.28],
        [5.6, 14.4, 0.4],
      ],
      r,
      true
    )} M 13.4 6.6 L 17.2 10.4 M 14.4 19.6 H 19.8"/>`,
};

export const copyIcon: IconDefinition = {
  id: 'copy',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(4, 8.4, 11.4, 11.6, Math.min(r * 0.9, 3.2))} ${smoothPoly(
      [
        [8.6, 5.8],
        [8.6, 4, 0.75],
        [20, 4, 0.95],
        [20, 15.4, 0.75],
        [18.2, 15.4],
      ],
      Math.min(r * 0.9, 3.2),
      false
    )}"/>`,
};

export const plusIcon: IconDefinition = {
  id: 'plus',
  category: 'Actions',
  draw: () => `<path d="M 12 5 V 19 M 5 12 H 19"/>`,
};

export const minusIcon: IconDefinition = {
  id: 'minus',
  category: 'Actions',
  draw: () => `<path d="M 5 12 H 19"/>`,
};

export const closeIcon: IconDefinition = {
  id: 'close',
  category: 'Actions',
  draw: () => `<path d="M 6.2 6.2 L 17.8 17.8 M 17.8 6.2 L 6.2 17.8"/>`,
};

export const checkIcon: IconDefinition = {
  id: 'check',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.8, 12.4],
        [9.6, 17.2, 0.48],
        [19.2, 7.4],
      ],
      r,
      false
    )}"/>`,
};

export const doubleCheckIcon: IconDefinition = {
  id: 'double-check',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [2.8, 12.6],
        [7.2, 17, 0.45],
        [15.4, 7.4],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [10.8, 15.2],
        [12.6, 17, 0.45],
        [21.2, 7.4],
      ],
      r,
      false
    )}"/>`,
};

export const filterIcon: IconDefinition = {
  id: 'filter',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4, 5, 0.65],
        [20, 5, 0.65],
        [13.8, 12.4, 0.5],
        [13.8, 19.2, 0.55],
        [10.2, 17.4, 0.55],
        [10.2, 12.4, 0.5],
      ],
      r,
      true
    )}"/>`,
};

export const refreshIcon: IconDefinition = {
  id: 'refresh',
  category: 'Actions',
  draw: (r) =>
    `<path d="M 4.6 11.4 A 7.6 7.6 0 0 1 18.4 7.6 ${smoothPoly(
      [
        [15.4, 8.2],
        [18.8, 8.2, 0.35],
        [18.8, 4.8],
      ],
      r,
      false
    )} M 19.4 12.6 A 7.6 7.6 0 0 1 5.6 16.4 ${smoothPoly(
      [
        [8.6, 15.8],
        [5.2, 15.8, 0.35],
        [5.2, 19.2],
      ],
      r,
      false
    )}"/>`,
};

export const paperclipIcon: IconDefinition = {
  id: 'paperclip',
  category: 'Actions',
  draw: () => `<path d="${kineticPaperclipPath()}"/>`,
};

export const linkIcon: IconDefinition = {
  id: 'link',
  category: 'Actions',
  draw: () =>
    `<path d="M 9.4 14.6 L 14.6 9.4 M 10.6 7.4 L 12.8 5.2 C 14.4 3.6 17 3.6 18.6 5.2 C 20.2 6.8 20.2 9.4 18.6 11 L 16.4 13.2 M 13.4 16.6 L 11.2 18.8 C 9.6 20.4 7 20.4 5.4 18.8 C 3.8 17.2 3.8 14.6 5.4 13 L 7.6 10.8"/>`,
};

export const fileIcon: IconDefinition = {
  id: 'file',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [5, 3.4, 0.9],
        [13.6, 3.4, 0.25],
        [19, 8.8, 0.25],
        [19, 20.6, 0.9],
        [5, 20.6, 0.9],
      ],
      r,
      true
    )} ${smoothPoly(
      [
        [13.6, 3.8],
        [13.6, 8.8, 0.65],
        [18.6, 8.8],
      ],
      r,
      false
    )} M 8.6 13.2 H 15.4 M 8.6 16.4 H 13"/>`,
};

export const archiveIcon: IconDefinition = {
  id: 'archive',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(3.4, 4.4, 17.2, 4.4, Math.min(r * 0.65, 2.0))} ${smoothPoly(
      [
        [4.8, 8.8],
        [4.8, 19.4, 0.95],
        [19.2, 19.4, 0.95],
        [19.2, 8.8],
      ],
      r,
      false
    )} M 9.8 13.2 H 14.2"/>`,
};

export const undoIcon: IconDefinition = {
  id: 'undo',
  category: 'Actions',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<path d="${smoothPoly(
      [
        [8.6, 5],
        [4.6, 9, 0.42],
        [8.6, 13],
      ],
      r,
      false
    )} M ${fmt(4.8 + pull)} 9 H 13.8 C 16.9 9 19.4 11.4 19.4 14.4 C 19.4 17.4 16.9 19.4 13.8 19.4 H 11"/>`;
  },
};

export const redoIcon: IconDefinition = {
  id: 'redo',
  category: 'Actions',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<path d="${smoothPoly(
      [
        [15.4, 5],
        [19.4, 9, 0.42],
        [15.4, 13],
      ],
      r,
      false
    )} M ${fmt(19.2 - pull)} 9 H 10.2 C 7.1 9 4.6 11.4 4.6 14.4 C 4.6 17.4 7.1 19.4 10.2 19.4 H 13"/>`;
  },
};

// ------------------------------------------
// 6. NAVIGATION — Architectural Directionals
// ------------------------------------------
export const sidebarLeftIcon: IconDefinition = {
  id: 'sidebar-left',
  category: 'Navigation',
  draw: (r) =>
    `<path d="${squircleRect(3.2, 4.4, 17.6, 15.2, r)} M 9.2 4.4 V 19.6 M 5.8 9.2 H 6.8 M 5.8 12.2 H 6.8"/>`,
};

export const sidebarRightIcon: IconDefinition = {
  id: 'sidebar-right',
  category: 'Navigation',
  draw: (r) =>
    `<path d="${squircleRect(3.2, 4.4, 17.6, 15.2, r)} M 14.8 4.4 V 19.6 M 17.2 9.2 H 18.2 M 17.2 12.2 H 18.2"/>`,
};

export const dashboardIcon: IconDefinition = {
  id: 'dashboard',
  category: 'Navigation',
  draw: (r) => {
    const tileR = Math.min(r * 0.72, 2.4);
    return `<path d="${squircleRect(3.6, 3.6, 7, 7, tileR)} ${squircleRect(13.4, 3.6, 7, 7, tileR)} ${squircleRect(3.6, 13.4, 7, 7, tileR)} ${squircleRect(13.4, 13.4, 7, 7, tileR)}"/>`;
  },
};

export const menuIcon: IconDefinition = {
  id: 'menu',
  category: 'Navigation',
  draw: () => `<path d="M 4.4 6.8 H 19.6 M 4.4 12 H 15.6 M 4.4 17.2 H 19.6"/>`,
};

export const searchIcon: IconDefinition = {
  id: 'search',
  category: 'Navigation',
  draw: () =>
    `<circle cx="10.8" cy="10.8" r="6.8"/><path d="M 16.4 16.4 L 20.2 20.2"/>`,
};

export const settingsIcon: IconDefinition = {
  id: 'settings',
  category: 'Navigation',
  draw: (r) =>
    `<path d="${kineticDialPath(r)}"/><circle cx="12" cy="12" r="2.9"/>`,
};

export const slidersIcon: IconDefinition = {
  id: 'sliders',
  category: 'Navigation',
  draw: () =>
    `<path d="M 4 8.2 H 6.6 M 11 8.2 H 20 M 4 15.8 H 13 M 17.4 15.8 H 20"/><circle cx="8.8" cy="8.2" r="2.2"/><circle cx="15.2" cy="15.8" r="2.2"/>`,
};

export const compassIcon: IconDefinition = {
  id: 'compass',
  category: 'Navigation',
  draw: (r) =>
    `<circle cx="12" cy="12" r="8.6"/><path d="${smoothPoly(
      [
        [15.4, 8.6, 0.35],
        [13.4, 13.4, 0.3],
        [8.6, 15.4, 0.35],
        [10.6, 10.6, 0.3],
      ],
      r,
      true
    )}"/>`,
};

export const externalLinkIcon: IconDefinition = {
  id: 'external-link',
  category: 'Navigation',
  draw: (r) => {
    const pull = tipPullback(r, 0.38) * 0.72;
    return `<path d="${smoothPoly(
      [
        [10.8, 5],
        [4.6, 5, 0.95],
        [4.6, 19.4, 0.95],
        [19, 19.4, 0.95],
        [19, 13.2],
      ],
      r,
      false
    )} M 11.4 12.6 L ${fmt(19.2 - pull)} ${fmt(4.8 + pull)} ${smoothPoly(
      [
        [14, 4.8],
        [19.2, 4.8, 0.38],
        [19.2, 10],
      ],
      r,
      false
    )}"/>`;
  },
};

export const moreHorizontalIcon: IconDefinition = {
  id: 'more-horizontal',
  category: 'Navigation',
  draw: () =>
    `<circle cx="6.4" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="17.6" cy="12" r="1.4"/>`,
};

export const moreVerticalIcon: IconDefinition = {
  id: 'more-vertical',
  category: 'Navigation',
  draw: () =>
    `<circle cx="12" cy="6.4" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="17.6" r="1.4"/>`,
};

export const chevronLeftIcon: IconDefinition = {
  id: 'chevron-left',
  category: 'Navigation',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [14.8, 5.2],
        [8.2, 12, 0.5],
        [14.8, 18.8],
      ],
      r,
      false
    )}"/>`,
};

export const chevronRightIcon: IconDefinition = {
  id: 'chevron-right',
  category: 'Navigation',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [9.2, 5.2],
        [15.8, 12, 0.5],
        [9.2, 18.8],
      ],
      r,
      false
    )}"/>`,
};

export const chevronUpIcon: IconDefinition = {
  id: 'chevron-up',
  category: 'Navigation',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [5.2, 14.8],
        [12, 8.2, 0.5],
        [18.8, 14.8],
      ],
      r,
      false
    )}"/>`,
};

export const chevronDownIcon: IconDefinition = {
  id: 'chevron-down',
  category: 'Navigation',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [5.2, 9.2],
        [12, 15.8, 0.5],
        [18.8, 9.2],
      ],
      r,
      false
    )}"/>`,
};

export const arrowLeftIcon: IconDefinition = {
  id: 'arrow-left',
  category: 'Navigation',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<path d="M 19.2 12 H ${fmt(5 + pull)} ${smoothPoly(
      [
        [10.6, 6.4],
        [4.8, 12, 0.42],
        [10.6, 17.6],
      ],
      r,
      false
    )}"/>`;
  },
};

export const arrowRightIcon: IconDefinition = {
  id: 'arrow-right',
  category: 'Navigation',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<path d="M 4.8 12 H ${fmt(19 - pull)} ${smoothPoly(
      [
        [13.4, 6.4],
        [19.2, 12, 0.42],
        [13.4, 17.6],
      ],
      r,
      false
    )}"/>`;
  },
};

export const arrowUpIcon: IconDefinition = {
  id: 'arrow-up',
  category: 'Navigation',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<path d="M 12 19.2 V ${fmt(5 + pull)} ${smoothPoly(
      [
        [6.4, 10.6],
        [12, 4.8, 0.42],
        [17.6, 10.6],
      ],
      r,
      false
    )}"/>`;
  },
};

export const arrowDownIcon: IconDefinition = {
  id: 'arrow-down',
  category: 'Navigation',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<path d="M 12 4.8 V ${fmt(19 - pull)} ${smoothPoly(
      [
        [6.4, 13.4],
        [12, 19.2, 0.42],
        [17.6, 13.4],
      ],
      r,
      false
    )}"/>`;
  },
};

export const arrowUpRightIcon: IconDefinition = {
  id: 'arrow-up-right',
  category: 'Navigation',
  draw: (r) => {
    const pull = tipPullback(r, 0.4) * 0.72;
    return `<path d="M 6.4 17.6 L ${fmt(17.6 - pull)} ${fmt(6.4 + pull)} ${smoothPoly(
      [
        [10.4, 6.4],
        [17.6, 6.4, 0.4],
        [17.6, 13.6],
      ],
      r,
      false
    )}"/>`;
  },
};

// ------------------------------------------
// 7. DASHBOARD — Analytics & Commerce
// ------------------------------------------
export const creditCardIcon: IconDefinition = {
  id: 'credit-card',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${squircleRect(3.2, 5.2, 17.6, 13.6, r)} M 3.2 9.6 H 20.8 M 6.8 14.8 H 11.4"/>`,
};

export const chartLineIcon: IconDefinition = {
  id: 'chart-line',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4, 4.8],
        [4, 19.2, 0.7],
        [20, 19.2],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [7, 15.2],
        [10.8, 11.2, 0.65],
        [14.2, 13.6, 0.65],
        [19.2, 7.2],
      ],
      r,
      false
    )}"/>`,
};

export const chartPieIcon: IconDefinition = {
  id: 'chart-pie',
  category: 'Dashboard',
  draw: (r) => {
    const pull = Math.min(r * 0.14, 0.5);
    return `<path d="M 11.4 12.6 V 4 A 8.4 8.4 0 1 0 19.8 12.6 Z M 13.8 10.2 V 4.2 A 6.4 6.4 0 0 1 ${fmt(19.8 - pull * 0.2)} 10.2 Z"/>`;
  },
};

export const layersIcon: IconDefinition = {
  id: 'layers',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [12, 3.8, 0.6],
        [20.2, 8.2, 0.5],
        [12, 12.6, 0.6],
        [3.8, 8.2, 0.5],
      ],
      r,
      true
    )} ${smoothPoly(
      [
        [4.2, 12.4],
        [12, 16.6, 0.65],
        [19.8, 12.4],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [4.2, 16],
        [12, 20.2, 0.65],
        [19.8, 16],
      ],
      r,
      false
    )}"/>`,
};

export const boxIcon: IconDefinition = {
  id: 'box',
  category: 'Dashboard',
  draw: (r) => {
    const pull = Math.min(r * 0.2, 0.7);
    return `<path d="${smoothPoly(
      [
        [12, 3.4, 0.65],
        [19.8, 7.8, 0.65],
        [19.8, 16.2, 0.65],
        [12, 20.6, 0.65],
        [4.2, 16.2, 0.65],
        [4.2, 7.8, 0.65],
      ],
      r,
      true
    )} M ${fmt(4.6 + pull)} ${fmt(8 + pull * 0.55)} L 12 12.2 L ${fmt(19.4 - pull)} ${fmt(8 + pull * 0.55)} M 12 12.2 V ${fmt(20.2 - pull)}"/>`;
  },
};

export const calendarIcon: IconDefinition = {
  id: 'calendar',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${squircleRect(3.4, 5, 17.2, 15.6, r)} M 3.4 9.6 H 20.6 M 8.2 3.2 V 6.4 M 15.8 3.2 V 6.4"/><circle cx="8.2" cy="13.4" r="0.75"/><circle cx="12" cy="13.4" r="0.75"/><circle cx="15.8" cy="13.4" r="0.75"/><circle cx="8.2" cy="16.8" r="0.75"/><circle cx="12" cy="16.8" r="0.75"/>`,
};

export const clockIcon: IconDefinition = {
  id: 'clock',
  category: 'Dashboard',
  draw: (r) =>
    `<circle cx="12" cy="12" r="8.6"/><path d="${smoothPoly(
      [
        [12, 7.2],
        [12, 12, 0.45],
        [15.6, 14],
      ],
      r,
      false
    )}"/>`,
};

export const briefcaseIcon: IconDefinition = {
  id: 'briefcase',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [8.6, 7.4],
        [8.6, 4.4, 0.7],
        [15.4, 4.4, 0.7],
        [15.4, 7.4],
      ],
      r,
      false
    )} ${squircleRect(3.2, 7.4, 17.6, 12.8, r)} M 6.2 12.4 Q 12 14.4 17.8 12.4 M 12 11.8 V 14.2"/>`,
};

export const receiptIcon: IconDefinition = {
  id: 'receipt',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.8, 3.6, 0.9],
        [19.2, 3.6, 0.9],
        [19.2, 20.2, 0.35],
        [15.6, 18.2, 0.4],
        [12, 20.2, 0.4],
        [8.4, 18.2, 0.4],
        [4.8, 20.2, 0.35],
      ],
      r,
      true
    )} M 8.4 8 H 15.6 M 8.4 11.4 H 15.6 M 8.4 14.8 H 12.6"/>`,
};

export const activityIcon: IconDefinition = {
  id: 'activity',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.4, 12],
        [7.4, 12, 0.45],
        [10, 5.4, 0.42],
        [14, 18.6, 0.42],
        [16.6, 12, 0.45],
        [20.6, 12],
      ],
      r,
      false
    )}"/>`,
};

// ------------------------------------------
// 8. ALERTS — Security, Status & System
// ------------------------------------------
export const warningIcon: IconDefinition = {
  id: 'warning',
  category: 'Alerts',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [12, 3.8, 0.72],
        [20.6, 19.2, 0.72],
        [3.4, 19.2, 0.72],
      ],
      r,
      true
    )} M 12 9.6 V 13.6"/><circle cx="12" cy="16.2" r="0.75"/>`,
};

export const alertCircleIcon: IconDefinition = {
  id: 'alert-circle',
  category: 'Alerts',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 12 8.2 V 12.6"/><circle cx="12" cy="15.8" r="0.75"/>`,
};

export const infoIcon: IconDefinition = {
  id: 'info',
  category: 'Alerts',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="8.4" r="0.75"/><path d="M 12 11.4 V 16"/>`,
};

export const checkCircleIcon: IconDefinition = {
  id: 'check-circle',
  category: 'Alerts',
  draw: (r) =>
    `<circle cx="12" cy="12" r="8.6"/><path d="${smoothPoly(
      [
        [8.4, 12.2],
        [10.9, 14.7, 0.45],
        [15.8, 9.6],
      ],
      r,
      false
    )}"/>`,
};

export const xCircleIcon: IconDefinition = {
  id: 'x-circle',
  category: 'Alerts',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 9.2 9.2 L 14.8 14.8 M 14.8 9.2 L 9.2 14.8"/>`,
};

export const shieldIcon: IconDefinition = {
  id: 'shield',
  category: 'Alerts',
  draw: (r) => `<path d="${kineticShieldPath(r)}"/>`,
};

export const shieldCheckIcon: IconDefinition = {
  id: 'shield-check',
  category: 'Alerts',
  draw: (r) =>
    `<path d="${kineticShieldPath(r)} ${smoothPoly(
      [
        [8.8, 12],
        [11, 14.2, 0.45],
        [15.4, 9.8],
      ],
      r,
      false
    )}"/>`,
};

export const shieldAlertIcon: IconDefinition = {
  id: 'shield-alert',
  category: 'Alerts',
  draw: (r) =>
    `<path d="${kineticShieldPath(r)} M 12 8.4 V 12.4"/><circle cx="12" cy="15.4" r="0.75"/>`,
};

export const lockIcon: IconDefinition = {
  id: 'lock',
  category: 'Alerts',
  draw: (r) =>
    `<path d="M 8.2 10.4 V 7.4 A 3.8 3.8 0 0 1 15.8 7.4 V 10.4 ${squircleRect(4.8, 10.4, 14.4, 10, Math.min(r * 0.95, 3.4))} M 12 15.6 V 17.4"/><circle cx="12" cy="14.4" r="1.2"/>`,
};

export const unlockIcon: IconDefinition = {
  id: 'unlock',
  category: 'Alerts',
  draw: (r) =>
    `<path d="M 8.2 10.4 V 7.4 A 3.8 3.8 0 0 1 15.4 5.8 ${squircleRect(4.8, 10.4, 14.4, 10, Math.min(r * 0.95, 3.4))} M 12 15.6 V 17.4"/><circle cx="12" cy="14.4" r="1.2"/>`,
};

export const keyIcon: IconDefinition = {
  id: 'key',
  category: 'Alerts',
  draw: () =>
    `<circle cx="8.2" cy="12" r="3.8"/><path d="M 12 12 H 20.2 M 16.6 12 V 14.8 M 19.6 12 V 14"/>`,
};

export const zapIcon: IconDefinition = {
  id: 'zap',
  category: 'Alerts',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [13.2, 3.6, 0.45],
        [5.4, 13.2, 0.5],
        [11.4, 13.2, 0.35],
        [10.8, 20.4, 0.45],
        [18.6, 10.8, 0.5],
        [12.6, 10.8, 0.35],
      ],
      r,
      true
    )}"/>`,
};

export const sunIcon: IconDefinition = {
  id: 'sun',
  category: 'Alerts',
  draw: () =>
    `<circle cx="12" cy="12" r="4"/><path d="M 12 3.2 V 5.2 M 12 18.8 V 20.8 M 3.2 12 H 5.2 M 18.8 12 H 20.8 M 5.8 5.8 L 7.2 7.2 M 16.8 16.8 L 18.2 18.2 M 5.8 18.2 L 7.2 16.8 M 16.8 7.2 L 18.2 5.8"/>`,
};

export const moonIcon: IconDefinition = {
  id: 'moon',
  category: 'Alerts',
  draw: (r) => `<path d="${kineticMoonPath(r)}"/>`,
};

export const logOutIcon: IconDefinition = {
  id: 'log-out',
  category: 'Alerts',
  draw: (r) => {
    const pull = tipPullback(r, 0.42);
    return `<path d="${smoothPoly(
      [
        [13.4, 4.6],
        [5.6, 4.6, 0.95],
        [5.6, 19.4, 0.95],
        [13.4, 19.4],
      ],
      r,
      false
    )} M 10.6 12 H ${fmt(19.2 - pull)} ${smoothPoly(
      [
        [16, 8.8],
        [19.4, 12, 0.42],
        [16, 15.2],
      ],
      r,
      false
    )}"/>`;
  },
};

// ------------------------------------------
// 9. DAILY APPS EXPANSION — 62 New Icons
// ------------------------------------------

// Essentials (+12)
export const storeIcon: IconDefinition = {
  id: 'store',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.2, 9.2],
        [5.6, 4.6, 0.65],
        [18.4, 4.6, 0.65],
        [19.8, 9.2],
      ],
      r,
      false
    )} M 4.2 9.2 A 2.6 2.6 0 0 0 9.4 9.2 A 2.6 2.6 0 0 0 14.6 9.2 A 2.6 2.6 0 0 0 19.8 9.2 ${smoothPoly(
      [
        [5.4, 11.6],
        [5.4, 19.4, 0.85],
        [18.6, 19.4, 0.85],
        [18.6, 11.6],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [9.8, 19.4],
        [9.8, 14.4, 0.75],
        [14.2, 14.4, 0.75],
        [14.2, 19.4],
      ],
      r,
      false
    )}"/>`,
};

export const voucherIcon: IconDefinition = {
  id: 'voucher',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.8, 2.4);
    const outer =
      cr <= 0.05
        ? 'M 3.6 5.8 H 20.4 V 9.6 A 2.4 2.4 0 0 0 20.4 14.4 V 18.2 H 3.6 V 14.4 A 2.4 2.4 0 0 0 3.6 9.6 Z'
        : `M ${fmt(3.6 + cr)} 5.8 H ${fmt(20.4 - cr)} Q 20.4 5.8 20.4 ${fmt(5.8 + cr)} V 9.6 A 2.4 2.4 0 0 0 20.4 14.4 V ${fmt(18.2 - cr)} Q 20.4 18.2 ${fmt(20.4 - cr)} 18.2 H ${fmt(3.6 + cr)} Q 3.6 18.2 3.6 ${fmt(18.2 - cr)} V 14.4 A 2.4 2.4 0 0 0 3.6 9.6 V ${fmt(5.8 + cr)} Q 3.6 5.8 ${fmt(3.6 + cr)} 5.8 Z`;
    return `<path d="${outer} M 9.4 14.8 L 14.6 9.2"/><circle cx="9.6" cy="9.6" r="0.8"/><circle cx="14.4" cy="14.4" r="0.8"/>`;
  },
};

export const refundIcon: IconDefinition = {
  id: 'refund',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [10.2, 15.8],
        [3.6, 15.8, 0.95],
        [3.6, 4.6, 0.95],
        [19.4, 4.6, 0.95],
        [19.4, 10.2],
      ],
      r,
      false
    )} M 3.6 8.4 H 19.4 M 13.6 15.4 A 3.3 3.3 0 0 1 19.6 15.2 M 19.8 12.8 V 15.2 H 17.4 M 19.6 17.8 A 3.3 3.3 0 0 1 13.6 18 M 13.4 20.4 V 18 H 15.8"/>`,
};

export const tabletIcon: IconDefinition = {
  id: 'tablet',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(4.8, 3, 14.4, 18, Math.min(1.2 + r * 0.8, 3.4))} M 10.6 18 H 13.4"/>`,
};

export const vibrateIcon: IconDefinition = {
  id: 'vibrate',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(7.6, 4.2, 8.8, 15.6, Math.min(1 + r * 0.7, 2.8))} M 4.8 7.8 L 3.4 9.8 L 4.8 12 L 3.4 14.2 L 4.8 16.2 M 19.2 7.8 L 20.6 9.8 L 19.2 12 L 20.6 14.2 L 19.2 16.2"/>`,
};

export const mapIcon: IconDefinition = {
  id: 'map',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [3.4, 6.2, 0.65],
        [9.2, 4.2, 0.55],
        [14.8, 6.4, 0.55],
        [20.6, 4.4, 0.65],
        [20.6, 17.8, 0.65],
        [14.8, 19.8, 0.55],
        [9.2, 17.6, 0.55],
        [3.4, 19.6, 0.65],
      ],
      r,
      true
    )} M 9.2 4.6 V 17.2 M 14.8 6.8 V 19.4"/>`,
};

export const notebookIcon: IconDefinition = {
  id: 'notebook',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [17.6, 18.8],
        [17.6, 4.4, 0.9],
        [6.6, 4.4, 0.9],
        [6.6, 19.6, 0.9],
        [17.6, 19.6, 0.8],
      ],
      r,
      false
    )} M 6.6 16.6 H 17.6 M 10.2 4.4 V 16.6"/>`,
};

export const bookOpenIcon: IconDefinition = {
  id: 'book-open',
  category: 'Essentials',
  draw: (r) => {
    const cr = Math.min(r * 0.35, 1.0);
    return `<path d="M 12 8.6 C 10.4 7.2 8.2 6.6 ${fmt(4.2 + cr)} 6.8 Q 4.2 6.8 4.2 ${fmt(6.8 + cr)} V ${fmt(18.8 - cr)} Q 4.2 18.8 ${fmt(4.2 + cr)} 18.8 C 8.2 18.6 10.4 19.2 12 20.4 C 13.6 19.2 15.8 18.6 ${fmt(19.8 - cr)} 18.8 Q 19.8 18.8 19.8 ${fmt(18.8 - cr)} V ${fmt(6.8 + cr)} Q 19.8 6.8 ${fmt(19.8 - cr)} 6.8 C 15.8 6.6 13.6 7.2 12 8.6 Z M 12 8.6 V 20.4 M 12 3.2 V 4.8 M 8.8 4.2 L 9.8 5.2 M 15.2 4.2 L 14.2 5.2"/>`;
  },
};

export const gemIcon: IconDefinition = {
  id: 'gem',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [7.2, 4.8, 0.65],
        [16.8, 4.8, 0.65],
        [20.4, 9.6, 0.65],
        [12, 19.6, 0.55],
        [3.6, 9.6, 0.65],
      ],
      r,
      true
    )} M 3.9 9.6 H 20.1 M 8.8 4.8 L 7.8 9.6 L 12 19.2 L 16.2 9.6 L 15.2 4.8"/>`,
};

export const contactCardIcon: IconDefinition = {
  id: 'contact-card',
  category: 'Essentials',
  draw: (r) =>
    `<path d="${squircleRect(4.2, 6, 15.6, 12, r)} M 6.8 3.6 H 17.2 M 6.8 20.4 H 17.2 M 8.2 16 C 8.8 13.9 10.2 13 12 13 C 13.8 13 15.2 13.9 15.8 16"/><circle cx="12" cy="10.2" r="2"/>`,
};

export const lifebuoyIcon: IconDefinition = {
  id: 'lifebuoy',
  category: 'Essentials',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="3.8"/><path d="M 5.9 5.9 L 9.3 9.3 M 18.1 5.9 L 14.7 9.3 M 5.9 18.1 L 9.3 14.7 M 18.1 18.1 L 14.7 14.7"/>`,
};

export const earthIcon: IconDefinition = {
  id: 'earth',
  category: 'Essentials',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 3.8 10.4 C 5.8 10.4 7.4 11.4 8.2 13 C 8.8 14.2 8 15.8 8.6 17.2 C 9 18.2 9.6 19.2 9.4 20.1 M 15.2 4 C 14.4 5.6 14 7.2 14.8 8.4 C 15.6 9.6 17.8 9.4 19 10.8 C 19.6 11.4 20 12.2 20.4 12.8 M 14.2 13.6 C 15.8 13.2 17.6 14.2 17.6 16 C 17.6 17.4 16.4 18.8 15.2 19.8"/>`,
};

// Design (+4)
export const contrastIcon: IconDefinition = {
  id: 'contrast',
  category: 'Design',
  draw: () =>
    `<circle cx="12" cy="12" r="8.4"/><path d="M 12 3.6 V 20.4 M 12 6.8 A 5.2 5.2 0 0 1 12 17.2 M 12 9.6 A 2.4 2.4 0 0 1 12 14.4"/>`,
};

export const shapesIcon: IconDefinition = {
  id: 'shapes',
  category: 'Design',
  draw: (r) =>
    `<path d="${squircleRect(4, 4, 6.4, 6.4, Math.min(r * 0.7, 2.0))} ${smoothPoly(
      [
        [7.2, 13.6, 0.5],
        [10.6, 19.8, 0.5],
        [3.8, 19.8, 0.5],
      ],
      r,
      true
    )} M 16.8 19.8 C 14.5 18.2 13.4 16.8 13.4 15.6 C 13.4 14.5 14.3 13.8 15.2 13.8 C 15.9 13.8 16.5 14.2 16.8 14.8 C 17.1 14.2 17.7 13.8 18.4 13.8 C 19.3 13.8 20.2 14.5 20.2 15.6 C 20.2 16.8 19.1 18.2 16.8 19.8 Z"/><circle cx="16.8" cy="7.2" r="3.2"/>`,
};

export const widgetIcon: IconDefinition = {
  id: 'widget',
  category: 'Design',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 4.4, 16.4, 15.2, r)} ${squircleRect(7.4, 8, 3.2, 3.2, Math.min(r * 0.45, 1.1))} M 7.4 15 H 16.6"/>`,
};

export const canvasAddIcon: IconDefinition = {
  id: 'canvas-add',
  category: 'Design',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [7.6, 16.4],
        [4.2, 16.4, 0.85],
        [4.2, 4.2, 0.95],
        [16.4, 4.2, 0.85],
        [16.4, 7.6],
      ],
      r,
      false
    )} ${squircleRect(7.6, 7.6, 12.2, 12.2, Math.min(r * 0.9, 3.0))} M 13.7 11.1 V 16.3 M 11.1 13.7 H 16.3"/>`,
};

// Dev & AI (+10)
export const botIcon: IconDefinition = {
  id: 'bot',
  category: 'Dev & AI',
  draw: () =>
    `<circle cx="12" cy="12" r="8.4"/><path d="M 9.4 9.8 V 13.6 M 14.6 9.8 V 13.6"/>`,
};

export const ghostIcon: IconDefinition = {
  id: 'ghost',
  category: 'Dev & AI',
  draw: () =>
    `<path d="M 5.4 19.2 V 10.6 A 6.6 6.6 0 0 1 18.6 10.6 V 19.2 C 17.5 19.2 16.9 17.8 15.8 17.8 C 14.7 17.8 14.1 19.2 13 19.2 C 11.9 19.2 11.3 17.8 10.2 17.8 C 9.1 17.8 8.5 19.2 7.4 19.2 C 6.4 19.2 5.9 19.2 5.4 19.2 Z"/><circle cx="9.6" cy="10.8" r="0.8"/><circle cx="14.4" cy="10.8" r="0.8"/>`,
};

export const waveformIcon: IconDefinition = {
  id: 'waveform',
  category: 'Dev & AI',
  draw: () =>
    `<path d="M 4.4 10 V 14 M 8.2 6.8 V 17.2 M 12 4.4 V 19.6 M 15.8 7.6 V 16.4 M 19.6 10 V 14"/>`,
};

export const userSparkIcon: IconDefinition = {
  id: 'user-spark',
  category: 'Dev & AI',
  draw: () =>
    `<circle cx="9.2" cy="7.6" r="3.4"/><path d="M 3.4 19.4 C 4 15.8 6.2 14.2 9.2 14.2 C 10.5 14.2 11.7 14.5 12.6 15.1 ${kineticMiniSpark(17.6, 16.2, 3.2)}"/>`,
};

export const avatarSparkIcon: IconDefinition = {
  id: 'avatar-spark',
  category: 'Dev & AI',
  draw: () =>
    `<path d="M 12 3.8 A 8.2 8.2 0 0 0 12 20.2 M 9.4 14.2 C 10.4 15.6 13.6 15.6 14.6 14.2"/><circle cx="9.4" cy="10.4" r="0.7"/><circle cx="14.6" cy="10.4" r="0.7"/><circle cx="15.8" cy="4.8" r="0.55"/><circle cx="18.8" cy="7.6" r="0.55"/><circle cx="20.2" cy="12" r="0.55"/><circle cx="18.8" cy="16.4" r="0.55"/><circle cx="15.8" cy="19.2" r="0.55"/>`,
};

export const sparkBoltIcon: IconDefinition = {
  id: 'spark-bolt',
  category: 'Dev & AI',
  draw: () =>
    `<path d="${kineticMiniSpark(14.2, 9.8, 6.2)} M 4.2 16.4 L 7.6 13 M 6.4 19.4 L 10.4 15.4 M 10.4 19.8 L 12.2 18"/>`,
};

export const atomIcon: IconDefinition = {
  id: 'atom',
  category: 'Dev & AI',
  draw: () =>
    `<ellipse cx="12" cy="12" rx="9" ry="4.4" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4.4" transform="rotate(-45 12 12)"/><circle cx="12" cy="12" r="1.1"/>`,
};

export const connectorsIcon: IconDefinition = {
  id: 'connectors',
  category: 'Dev & AI',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.2, 8.2, 0.85],
        [10.8, 8.2, 0.45],
        [10.8, 13.2, 0.35],
        [15.8, 13.2, 0.45],
        [15.8, 19.8, 0.85],
        [4.2, 19.8, 0.95],
      ],
      r,
      true
    )} M 10.8 13.2 V 19.8 M 4.2 13.2 H 10.8 ${squircleRect(14, 4.2, 5.8, 5.8, Math.min(r * 0.72, 2.2))}"/>`,
};

export const clockBoltIcon: IconDefinition = {
  id: 'clock-bolt',
  category: 'Dev & AI',
  draw: (r) =>
    `<path d="M 12.6 20.4 A 8.4 8.4 0 1 0 3.8 10.4 M 12 7.4 V 12 L 15 13.8 ${smoothPoly(
      [
        [7.4, 12.6, 0.25],
        [4.2, 16.8, 0.25],
        [7.2, 16.8, 0.2],
        [5.8, 20.8, 0.25],
        [9.8, 15.6, 0.25],
        [6.8, 15.6, 0.2],
      ],
      r,
      true
    )}"/>`,
};

export const infinityIcon: IconDefinition = {
  id: 'infinity',
  category: 'Dev & AI',
  draw: () =>
    `<path d="M 12 12 C 10.2 9.2 8.2 7.8 6.4 7.8 C 4.2 7.8 2.8 9.6 2.8 12 C 2.8 14.4 4.2 16.2 6.4 16.2 C 8.2 16.2 10.2 14.8 12 12 C 13.8 9.2 15.8 7.8 17.6 7.8 C 19.8 7.8 21.2 9.6 21.2 12 C 21.2 14.4 19.8 16.2 17.6 16.2 C 15.8 16.2 13.8 14.8 12 12 Z"/>`,
};

// Social (+17)
export const chatsIcon: IconDefinition = {
  id: 'chats',
  category: 'Social',
  draw: () =>
    `<path d="M 15.2 9.4 C 15.2 6.2 12.6 3.8 9.4 3.8 C 6.2 3.8 3.6 6.2 3.6 9.4 C 3.6 10.6 4 11.7 4.7 12.6 L 3.8 15.2 L 6.6 14.4 C 7.4 14.8 8.4 15 9.4 15 M 14.8 10.2 C 17.9 10.2 20.4 12.4 20.4 15.1 C 20.4 16.2 20 17.2 19.4 18 L 20.2 20.2 L 17.8 19.5 C 16.9 19.9 15.9 20.1 14.8 20.1 C 11.7 20.1 9.2 17.9 9.2 15.1 C 9.2 12.4 11.7 10.2 14.8 10.2 Z"/>`,
};

export const messageAlertIcon: IconDefinition = {
  id: 'message-alert',
  category: 'Social',
  draw: (r) =>
    `<path d="${kineticRoundBubblePath(r)} M 12 8.2 V 12.4"/><circle cx="12" cy="15.2" r="0.65"/>`,
};

export const messageHelpIcon: IconDefinition = {
  id: 'message-help',
  category: 'Social',
  draw: (r) =>
    `<path d="${kineticRoundBubblePath(r)} M 9.9 9.5 C 9.9 8.2 10.8 7.4 12.1 7.4 C 13.4 7.4 14.3 8.2 14.3 9.3 C 14.3 10.6 12.1 11 12.1 12.6"/><circle cx="12.1" cy="15.2" r="0.65"/>`,
};

export const reelsIcon: IconDefinition = {
  id: 'reels',
  category: 'Social',
  draw: (r) =>
    `<path d="${squircleRect(4.2, 3.6, 15.6, 16.8, Math.min(2 + r * 0.9, 4.6))} ${smoothPoly(
      [
        [10.2, 9, 0.55],
        [15.4, 12, 0.55],
        [10.2, 15, 0.55],
      ],
      r,
      true
    )}"/>`,
};

export const clapperboardIcon: IconDefinition = {
  id: 'clapperboard',
  category: 'Social',
  draw: (r) =>
    `<path d="${squircleRect(3.6, 4.6, 16.8, 14.8, r)} M 3.6 9.4 H 20.4 M 8.4 4.6 L 10.6 9.4 M 13.6 4.6 L 15.8 9.4 ${smoothPoly(
      [
        [10.6, 12.2, 0.45],
        [14.4, 14.4, 0.45],
        [10.6, 16.6, 0.45],
      ],
      r,
      true
    )}"/>`,
};

export const imagesIcon: IconDefinition = {
  id: 'images',
  category: 'Social',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [7.4, 7.6],
        [7.4, 4.2, 0.85],
        [20.2, 4.2, 0.95],
        [20.2, 16.2, 0.85],
        [17, 16.2],
      ],
      r,
      false
    )} ${squircleRect(3.8, 7.6, 13.2, 12.2, Math.min(r * 0.9, 3.0))} ${smoothPoly(
      [
        [5.8, 17.4],
        [9, 13.8, 0.5],
        [11.4, 16, 0.45],
        [13.4, 14, 0.5],
        [15.4, 17.4],
      ],
      r,
      false
    )}"/><circle cx="8" cy="11.2" r="1.1"/>`,
};

export const imagePlusIcon: IconDefinition = {
  id: 'image-plus',
  category: 'Social',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [13.4, 18.8],
        [3.8, 18.8, 0.95],
        [3.8, 4.4, 0.95],
        [18.8, 4.4, 0.95],
        [18.8, 13],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [5.6, 16.2],
        [9.4, 12.2, 0.5],
        [12.2, 14.6, 0.45],
        [14.4, 12.4, 0.5],
      ],
      r,
      false
    )} M 17.8 14.8 V 20.4 M 15 17.6 H 20.6"/><circle cx="8.2" cy="8.6" r="1.2"/>`,
};

export const voiceSpeakIcon: IconDefinition = {
  id: 'voice-speak',
  category: 'Social',
  draw: () =>
    '<circle cx="9.2" cy="8.0" r="3.4"/><path d="M 3.6 19.4 C 4.2 15.8 6.4 14.2 9.2 14.2 C 12.0 14.2 14.2 15.8 14.8 19.4 M 15.4 6.2 A 3.4 3.4 0 0 1 15.4 10.8 M 18.0 4.2 A 6.2 6.2 0 0 1 18.0 12.8"/>',
};

export const bellOffIcon: IconDefinition = {
  id: 'bell-off',
  category: 'Social',
  draw: () =>
    `<path d="M 12 3.2 V 4.4 M 8.8 5.2 C 9.8 4.7 10.9 4.4 12 4.4 C 15.1 4.4 17.6 6.8 17.6 10 C 17.6 11.4 17.8 12.6 18.2 13.6 M 6.4 10 C 6.4 13.6 5.4 15.1 4.4 16 C 3.9 16.4 4.2 17.2 4.9 17.2 H 15.8 M 9.6 19.6 A 2.6 2.6 0 0 0 14.4 19.6 M 4.2 4.2 L 19.8 19.8"/>`,
};

export const heartOffIcon: IconDefinition = {
  id: 'heart-off',
  category: 'Social',
  draw: () =>
    `<path d="M 7.2 4.1 C 9.2 3.8 11.1 4.7 12 6.4 C 12.7 4.9 14.1 4 15.8 4 C 18.4 4 20.5 5.8 20.5 8.5 C 20.5 10.6 19.4 12.8 17.6 14.9 M 4.1 6.8 C 3.7 7.3 3.5 7.9 3.5 8.5 C 3.5 11.4 5.8 15.6 12 19.8 C 13.1 19.1 14.0 18.3 14.9 17.6 M 3.8 3.8 L 18.4 18.4"/>`,
};

export const userPlusIcon: IconDefinition = {
  id: 'user-plus',
  category: 'Social',
  draw: () =>
    `<circle cx="9.6" cy="7.8" r="3.4"/><path d="M 3.6 19.4 C 4.2 15.7 6.6 14 9.6 14 C 12.6 14 15 15.7 15.6 19.4 M 18 8.4 V 13.6 M 15.4 11 H 20.6"/>`,
};

export const userCircleIcon: IconDefinition = {
  id: 'user-circle',
  category: 'Social',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="9.4" r="2.8"/><path d="M 6.6 18.2 C 7.6 15.4 9.5 14.2 12 14.2 C 14.5 14.2 16.4 15.4 17.4 18.2"/>`,
};

export const userSearchIcon: IconDefinition = {
  id: 'user-search',
  category: 'Social',
  draw: () =>
    `<circle cx="9.6" cy="7.8" r="3.4"/><path d="M 3.6 19.4 C 4.2 15.7 6.6 14 9.6 14 C 10.6 14 11.5 14.2 12.2 14.6 M 18.6 18.4 L 20.6 20.4"/><circle cx="16.4" cy="16.2" r="2.8"/>`,
};

export const userBlockIcon: IconDefinition = {
  id: 'user-block',
  category: 'Social',
  draw: () =>
    `<circle cx="9.6" cy="7.8" r="3.4"/><path d="M 3.6 19.4 C 4.2 15.7 6.6 14 9.6 14 C 10.6 14 11.5 14.2 12.2 14.6 M 14.9 14.5 L 19.5 19.1"/><circle cx="17.2" cy="16.8" r="3.2"/>`,
};

export const userSettingsIcon: IconDefinition = {
  id: 'user-settings',
  category: 'Social',
  draw: () =>
    `<circle cx="9.6" cy="7.8" r="3.4"/><path d="M 3.6 19.4 C 4.2 15.7 6.6 14 9.6 14 C 10.6 14 11.5 14.2 12.2 14.6 M 17.2 13.4 V 14.6 M 17.2 19 V 20.2 M 13.8 16.8 H 15 M 19.4 16.8 H 20.6 M 14.8 14.4 L 15.6 15.2 M 18.8 18.4 L 19.6 19.2 M 19.6 14.4 L 18.8 15.2 M 15.6 18.4 L 14.8 19.2"/><circle cx="17.2" cy="16.8" r="2.1"/>`,
};

export const userTagIcon: IconDefinition = {
  id: 'user-tag',
  category: 'Social',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.2, 6.2, 0.9],
        [9.8, 6.2, 0.45],
        [12, 3.8, 0.45],
        [14.2, 6.2, 0.45],
        [19.8, 6.2, 0.9],
        [19.8, 19.6, 0.95],
        [4.2, 19.6, 0.95],
      ],
      r,
      true
    )} M 7.8 19.4 C 8.4 16.8 9.9 15.6 12 15.6 C 14.1 15.6 15.6 16.8 16.2 19.4"/><circle cx="12" cy="11.4" r="2.4"/>`,
};

export const storyAddIcon: IconDefinition = {
  id: 'story-add',
  category: 'Social',
  draw: () =>
    `<path d="M 14.4 3.9 A 8.4 8.4 0 0 1 20.1 9.6 M 20.1 14.4 A 8.4 8.4 0 0 1 14.4 20.1 M 9.6 20.1 A 8.4 8.4 0 0 1 3.9 14.4 M 3.9 9.6 A 8.4 8.4 0 0 1 9.6 3.9 M 12 8.4 V 15.6 M 8.4 12 H 15.6"/>`,
};

// Brands (+1)
export const googleDriveIcon: IconDefinition = {
  id: 'google-drive',
  category: 'Brands',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [9.1, 4.4, 0.6],
        [14.9, 4.4, 0.6],
        [20.6, 14.4, 0.6],
        [17.7, 19.4, 0.6],
        [6.3, 19.4, 0.6],
        [3.4, 14.4, 0.6],
      ],
      r,
      true
    )} M 9.1 4.4 L 14.8 14.4 M 12 9.4 L 6.3 19.4 M 9.2 14.4 L 20.6 14.4"/>`,
};

// Actions (+7)
export const composeIcon: IconDefinition = {
  id: 'compose',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [12.0, 5.2],
        [4.4, 5.2, 0.95],
        [4.4, 19.6, 0.95],
        [18.8, 19.6, 0.95],
        [18.8, 12.0],
      ],
      r,
      false
    )} ${smoothPoly(
      [
        [17.6, 4.0, 0.35],
        [19.7, 6.1, 0.35],
        [12.1, 13.7, 0.18],
        [9.2, 14.5, 0.15],
        [10.0, 11.6, 0.18],
      ],
      r,
      true
    )}"/>`,
};

export const historyIcon: IconDefinition = {
  id: 'history',
  category: 'Actions',
  draw: (r) =>
    `<path d="M 4 12 A 8 8 0 1 0 6.2 6.4 L 4 8.6 M 4 4.6 V 8.6 H 8 ${smoothPoly(
      [
        [12, 7.6],
        [12, 12, 0.45],
        [15.2, 13.8],
      ],
      r,
      false
    )}"/>`,
};

export const projectsIcon: IconDefinition = {
  id: 'projects',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.2, 10.6, 0.7],
        [19.8, 10.6, 0.7],
        [18.8, 19.4, 0.9],
        [5.2, 19.4, 0.9],
      ],
      r,
      true
    )} M 6.2 7.6 H 17.8 M 8.6 4.8 H 15.4"/>`,
};

export const artifactsIcon: IconDefinition = {
  id: 'artifacts',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(4.6, 6.8, 10.2, 13, Math.min(r * 0.85, 2.8))} ${smoothPoly(
      [
        [9.8, 6.8],
        [9.8, 4.2, 0.85],
        [19.4, 4.2, 0.9],
        [19.4, 16.8, 0.9],
        [14.8, 16.8],
      ],
      r,
      false
    )}"/>`,
};

export const libraryIcon: IconDefinition = {
  id: 'library',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 4.6, 4.2, 14.8, Math.min(r * 0.5, 1.4))} ${squircleRect(9.4, 4.6, 4.2, 14.8, Math.min(r * 0.5, 1.4))} ${smoothPoly(
      [
        [14.8, 5.4, 0.5],
        [18.6, 4.6, 0.5],
        [21, 18.6, 0.5],
        [17.2, 19.4, 0.5],
      ],
      r,
      true
    )}"/>`,
};

export const fileTextIcon: IconDefinition = {
  id: 'file-text',
  category: 'Actions',
  draw: (r) =>
    `<path d="${squircleRect(5, 3.4, 14, 17.2, r)} M 8.6 8.4 H 15.4 M 8.6 12 H 15.4 M 8.6 15.6 H 12.6"/>`,
};

export const stickyNoteIcon: IconDefinition = {
  id: 'sticky-note',
  category: 'Actions',
  draw: (r) =>
    `<path d="${smoothPoly(
      [
        [4.4, 4.4, 0.95],
        [19.6, 4.4, 0.95],
        [19.6, 14.4, 0.55],
        [14.4, 19.6, 0.55],
        [4.4, 19.6, 0.95],
      ],
      r,
      true
    )} ${smoothPoly(
      [
        [14.4, 19.6],
        [14.4, 14.4, 0.75],
        [19.6, 14.4],
      ],
      r,
      false
    )}"/>`,
};

// Navigation (+4)
export const appsGridIcon: IconDefinition = {
  id: 'apps-grid',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.45, 1.3);
    const cells = [3.8, 9.9, 16];
    const parts: string[] = [];
    for (const y of cells) {
      for (const x of cells) {
        parts.push(squircleRect(x, y, 4.2, 4.2, cr));
      }
    }
    return `<path d="${parts.join(' ')}"/>`;
  },
};

export const gridPlusIcon: IconDefinition = {
  id: 'grid-plus',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.72, 2.2);
    return `<path d="${squircleRect(3.8, 3.8, 6.8, 6.8, cr)} ${squircleRect(3.8, 13.4, 6.8, 6.8, cr)} ${squircleRect(13.4, 13.4, 6.8, 6.8, cr)} M 16.8 4.2 V 10.2 M 13.8 7.2 H 19.8"/>`;
  },
};

export const appsExploreIcon: IconDefinition = {
  id: 'apps-explore',
  category: 'Navigation',
  draw: (r) => {
    const cr = Math.min(r * 0.72, 2.2);
    return `<path d="${squircleRect(3.8, 3.8, 6.8, 6.8, cr)} ${squircleRect(3.8, 13.4, 6.8, 6.8, cr)} ${squircleRect(13.4, 13.4, 6.8, 6.8, cr)} ${smoothPoly(
      [
        [16.8, 3.4, 0.55],
        [20.6, 7.2, 0.55],
        [16.8, 11, 0.55],
        [13, 7.2, 0.55],
      ],
      r,
      true
    )}"/>`;
  },
};

export const feedIcon: IconDefinition = {
  id: 'feed',
  category: 'Navigation',
  draw: (r) =>
    `<path d="${squircleRect(3.6, 4.6, 16.8, 14.8, r)} M 3.6 10.6 H 20.4 M 10.8 7.6 H 16.8"/><circle cx="7.4" cy="7.6" r="1"/>`,
};

// Dashboard (+2)
export const chartBarIcon: IconDefinition = {
  id: 'chart-bar',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 8.6 16.2 V 12.6 M 12 16.2 V 8.2 M 15.4 16.2 V 10.8"/>`,
};

export const listBoxIcon: IconDefinition = {
  id: 'list-box',
  category: 'Dashboard',
  draw: (r) =>
    `<path d="${squircleRect(3.8, 3.8, 16.4, 16.4, r)} M 10.8 8.4 H 16.4 M 10.8 12 H 16.4 M 10.8 15.6 H 16.4"/><circle cx="7.8" cy="8.4" r="0.65"/><circle cx="7.8" cy="12" r="0.65"/><circle cx="7.8" cy="15.6" r="0.65"/>`,
};

// Alerts (+5)
export const banIcon: IconDefinition = {
  id: 'ban',
  category: 'Alerts',
  draw: () =>
    `<circle cx="12" cy="12" r="8.6"/><path d="M 5.9 5.9 L 18.1 18.1"/>`,
};

export const shieldInfoIcon: IconDefinition = {
  id: 'shield-info',
  category: 'Alerts',
  draw: (r) =>
    `<path d="${kineticShieldPath(r)} M 12 11.4 V 15.6"/><circle cx="12" cy="8.6" r="0.65"/>`,
};

export const shieldLockIcon: IconDefinition = {
  id: 'shield-lock',
  category: 'Alerts',
  draw: (r) =>
    `<path d="${kineticShieldPath(r)} M 12 12.2 V 15.2"/><circle cx="12" cy="10.6" r="1.5"/>`,
};

export const shieldStarIcon: IconDefinition = {
  id: 'shield-star',
  category: 'Alerts',
  draw: (r) => {
    const cx = 12;
    const cy = 11.8;
    const pts: WeightedPoint[] = [];
    for (let i = 0; i < 10; i++) {
      const a = (i * Math.PI) / 5 - Math.PI / 2;
      const rad = i % 2 === 0 ? 3.5 : 1.6;
      pts.push([cx + Math.cos(a) * rad, cy + Math.sin(a) * rad, i % 2 === 0 ? 0.35 : 0.2]);
    }
    return `<path d="${kineticShieldPath(r)} ${smoothPoly(pts, r, true, 0.32)}"/>`;
  },
};

export const starCircleIcon: IconDefinition = {
  id: 'star-circle',
  category: 'Alerts',
  draw: (r) => {
    const cx = 12;
    const cy = 12.1;
    const pts: WeightedPoint[] = [];
    for (let i = 0; i < 10; i++) {
      const a = (i * Math.PI) / 5 - Math.PI / 2;
      const rad = i % 2 === 0 ? 4.6 : 2.1;
      pts.push([cx + Math.cos(a) * rad, cy + Math.sin(a) * rad, i % 2 === 0 ? 0.38 : 0.22]);
    }
    return `<circle cx="12" cy="12" r="8.6"/><path d="${smoothPoly(pts, r, true, 0.34)}"/>`;
  },
};

const RAW_ICONS_CATALOG: IconDefinition[] = [
  homeIcon,
  vaultIcon,
  accountsIcon,
  peopleIcon,
  reportsIcon,
  cloudIcon,
  starIcon,
  folderIcon,
  mapPinIcon,
  pinIcon,
  shoppingBagIcon,
  shoppingCartIcon,
  tagIcon,
  giftIcon,
  inboxIcon,
  micIcon,
  volumeIcon,
  volumeOffIcon,
  wifiIcon,
  batteryIcon,
  bluetoothIcon,
  printerIcon,
  monitorIcon,
  smartphoneIcon,
  powerIcon,
  logInIcon,
  flameIcon,
  trophyIcon,
  bookIcon,
  helpCircleIcon,
  locationIcon,
  mapAddIcon,
  bulbIcon,
  smileyIcon,
  alarmIcon,
  stopwatchIcon,
  verifiedIcon,
  announcementIcon,
  headphonesIcon,
  videoIcon,
  walletIcon,
  rocketIcon,
  storeIcon,
  voucherIcon,
  refundIcon,
  tabletIcon,
  vibrateIcon,
  mapIcon,
  notebookIcon,
  bookOpenIcon,
  gemIcon,
  contactCardIcon,
  lifebuoyIcon,
  earthIcon,
  colorIcon,
  paletteIcon,
  themeIcon,
  carouselIcon,
  templatesIcon,
  roundCornerIcon,
  strokeIcon,
  fontIcon,
  numberIcon,
  musicIcon,
  contrastIcon,
  shapesIcon,
  widgetIcon,
  canvasAddIcon,
  aiSparkIcon,
  codeIcon,
  terminalIcon,
  commandIcon,
  cpuIcon,
  databaseIcon,
  gitBranchIcon,
  bracketsIcon,
  bugIcon,
  serverIcon,
  globeIcon,
  botIcon,
  ghostIcon,
  waveformIcon,
  userSparkIcon,
  avatarSparkIcon,
  sparkBoltIcon,
  atomIcon,
  connectorsIcon,
  clockBoltIcon,
  infinityIcon,
  messageRoundIcon,
  messageRoundLinesIcon,
  messageRoundDotsIcon,
  commentIcon,
  commentRoundIcon,
  messageSquareIcon,
  messageLinesIcon,
  emailIcon,
  phoneIcon,
  heartIcon,
  thumbsUpIcon,
  shareIcon,
  shareRoundIcon,
  sendIcon,
  sendRoundIcon,
  bookmarkIcon,
  bookmarkRoundIcon,
  repostIcon,
  repostRoundIcon,
  bellIcon,
  eyeIcon,
  eyeOffIcon,
  userIcon,
  usersIcon,
  atSignIcon,
  hashIcon,
  playIcon,
  pauseIcon,
  cameraIcon,
  imageIcon,
  chatsIcon,
  messageAlertIcon,
  messageHelpIcon,
  reelsIcon,
  clapperboardIcon,
  imagesIcon,
  imagePlusIcon,
  voiceSpeakIcon,
  bellOffIcon,
  heartOffIcon,
  userPlusIcon,
  userCircleIcon,
  userSearchIcon,
  userBlockIcon,
  userSettingsIcon,
  userTagIcon,
  storyAddIcon,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  xIcon,
  githubIcon,
  behanceIcon,
  substackIcon,
  linkedinIcon,
  youtubeIcon,
  googleIcon,
  appleIcon,
  androidIcon,
  windowsIcon,
  threadsIcon,
  tiktokIcon,
  spotifyIcon,
  dribbbleIcon,
  figmaIcon,
  discordIcon,
  whatsappIcon,
  telegramIcon,
  googleDriveIcon,
  downloadIcon,
  uploadIcon,
  saveIcon,
  trashIcon,
  editIcon,
  copyIcon,
  plusIcon,
  minusIcon,
  closeIcon,
  checkIcon,
  doubleCheckIcon,
  filterIcon,
  refreshIcon,
  paperclipIcon,
  linkIcon,
  fileIcon,
  archiveIcon,
  undoIcon,
  redoIcon,
  composeIcon,
  historyIcon,
  projectsIcon,
  artifactsIcon,
  libraryIcon,
  fileTextIcon,
  stickyNoteIcon,
  sidebarLeftIcon,
  sidebarRightIcon,
  dashboardIcon,
  menuIcon,
  searchIcon,
  settingsIcon,
  slidersIcon,
  compassIcon,
  externalLinkIcon,
  moreHorizontalIcon,
  moreVerticalIcon,
  chevronLeftIcon,
  chevronRightIcon,
  chevronUpIcon,
  chevronDownIcon,
  arrowLeftIcon,
  arrowRightIcon,
  arrowUpIcon,
  arrowDownIcon,
  arrowUpRightIcon,
  appsGridIcon,
  gridPlusIcon,
  appsExploreIcon,
  feedIcon,
  creditCardIcon,
  chartLineIcon,
  chartPieIcon,
  layersIcon,
  boxIcon,
  calendarIcon,
  clockIcon,
  briefcaseIcon,
  receiptIcon,
  activityIcon,
  chartBarIcon,
  listBoxIcon,
  warningIcon,
  alertCircleIcon,
  infoIcon,
  checkCircleIcon,
  xCircleIcon,
  shieldIcon,
  shieldCheckIcon,
  shieldAlertIcon,
  lockIcon,
  unlockIcon,
  keyIcon,
  zapIcon,
  sunIcon,
  moonIcon,
  logOutIcon,
  banIcon,
  shieldInfoIcon,
  shieldLockIcon,
  shieldStarIcon,
  starCircleIcon,
  ...EXTENDED_ICONS_CATALOG,
  ...WAVE3_ICONS_CATALOG,
  ...WAVE4_ICONS_CATALOG,
];

const CATEGORY_SORT_ORDER: Record<IconCategory, number> = {
  Essentials: 0,
  Navigation: 1,
  Actions: 2,
  Design: 3,
  Social: 4,
  Dashboard: 5,
  'Dev & AI': 6,
  Alerts: 7,
  Brands: 8,
};

const SEMANTIC_ID_ORDER: readonly string[] = [
  // 1. ESSENTIALS
  'home', 'home-key', 'building', 'buildings', 'factory', 'warehouse', 'store', 'vault', 'inbox', 'cloud',
  'accounts', 'people', 'contact-card', 'smiley', 'verified', 'star', 'trophy', 'flame', 'gem', 'bulb', 'announcement', 'rocket', 'lifebuoy', 'reports',
  'map', 'map-pin', 'map-add', 'location', 'earth', 'pin', 'pin-angled', 'pin-off',
  'shopping-bag', 'shopping-cart', 'shopping-cart-plus', 'tag', 'voucher', 'badge-percent', 'gift', 'wallet', 'refund', 'barcode', 'qr-code', 'truck',
  'mic', 'mic-off', 'volume', 'volume-off', 'headphones', 'video', 'video-off', 'wifi', 'wifi-off', 'bluetooth', 'battery', 'power',
  'smartphone', 'tablet', 'laptop', 'monitor', 'printer', 'keyboard', 'mouse', 'touchpad', 'usb', 'vibrate', 'gaming',
  'book', 'book-open', 'notebook', 'translate', 'calculator', 'scale', 'size-chart', 'puzzle', 'hard-hat', 'alarm', 'stopwatch',
  'utensils', 'chef-hat', 'pizza', 'burger', 'soup-bowl', 'cake', 'coffee', 'cup-soda', 'delivery-bike',
  'leaf', 'tree-pine', 'tree-deciduous', 'tree-palm', 'flower', 'flower-tulip', 'flower-lotus',

  // 2. NAVIGATION
  'dashboard', 'menu', 'sidebar-left', 'sidebar-right', 'apps-grid', 'apps-explore', 'grid-plus', 'feed', 'multitasking', 'steps',
  'more-horizontal', 'more-horizontal-circle', 'more-vertical',
  'search', 'browser-search', 'tab-search', 'compass', 'external-link', 'settings', 'sliders', 'preferences', 'backward', 'forward',
  'arrow-left', 'arrow-left-circle', 'arrow-left-square',
  'arrow-right', 'arrow-right-circle', 'arrow-right-square',
  'arrow-up', 'arrow-up-circle', 'arrow-up-square',
  'arrow-down', 'arrow-down-circle', 'arrow-down-square',
  'arrow-up-right', 'arrow-up-right-circle', 'arrow-up-right-square',
  'chevron-left', 'chevron-left-circle', 'chevron-left-square',
  'chevron-right', 'chevron-right-circle', 'chevron-right-square',
  'chevron-up', 'chevron-up-circle', 'chevron-up-square',
  'chevron-down', 'chevron-down-circle', 'chevron-down-square',
  'cursor', 'cursor-hand', 'cursor-grab', 'cursor-grabbing', 'cursor-text', 'cursor-move',
  'cursor-crosshair', 'cursor-plus', 'cursor-block', 'cursor-wait', 'cursor-resize-horizontal', 'cursor-resize-vertical',

  // 3. ACTIONS
  'plus', 'plus-circle', 'plus-square',
  'minus', 'minus-circle', 'minus-square',
  'multiply', 'multiply-circle', 'multiply-square',
  'close', 'check', 'double-check',
  'edit', 'compose', 'writing', 'eraser', 'trash', 'copy', 'scissors', 'clipboard', 'clipboard-check', 'select-all',
  'undo', 'redo', 'refresh', 'history', 'filter', 'remix', 'zoom-in', 'zoom-out', 'scan', 'wrench', 'troubleshoot',
  'download', 'upload', 'save', 'archive', 'paperclip', 'link', 'unlink',
  'file', 'file-text', 'file-plus', 'file-minus', 'file-check', 'file-search', 'files', 'files-check',
  'folder', 'folder-plus', 'folder-search', 'folder-user',
  'sticky-note', 'tasks', 'projects', 'artifacts', 'library',
  'table', 'table-row-add', 'table-row-delete', 'table-column-add', 'table-column-delete',

  // 4. DESIGN
  'color', 'palette', 'swatches', 'theme', 'contrast', 'eyedropper', 'shapes', 'round-corner', 'stroke',
  'widget', 'templates', 'carousel', 'collage', 'canvas-add', 'breakpoints', 'scribble', 'scribble-pad', 'highlighter', 'music',
  'font', 'typography', 'number', 'heading', 'heading-1', 'heading-2', 'heading-3', 'heading-4', 'paragraph',
  'bold', 'italic', 'underline', 'strikethrough', 'quote',
  'align-left', 'align-center', 'align-right', 'indent', 'outdent', 'list-bullet', 'list-ordered', 'list-checks',

  // 5. SOCIAL
  'chat', 'chat-round', 'chat-plus', 'chat-plus-round', 'chats', 'status', 'broadcast', 'poll', 'disappearing-message',
  'comment', 'comment-round',
  'message-round', 'message-round-lines', 'message-round-dots', 'message-square', 'message-lines', 'message-alert', 'message-help', 'feedback',
  'sticker', 'sticker-round', 'sticker-plus', 'sticker-plus-round',
  'email', 'phone', 'at-sign', 'hash', 'voice-speak',
  'heart', 'heart-off', 'thumbs-up', 'bell', 'bell-off', 'eye', 'eye-off',
  'share', 'share-round', 'send', 'send-round', 'bookmark', 'bookmark-round', 'repost', 'repost-round', 'subscriptions',
  'user', 'user-circle', 'user-plus', 'user-search', 'user-block', 'user-settings', 'user-tag', 'users', 'accounts-search', 'family',
  'play', 'play-circle', 'pause', 'pause-circle', 'autoplay',
  'camera', 'image', 'images', 'image-plus', 'story-add', 'videos', 'reels', 'clapperboard', 'captions',

  // 6. DASHBOARD
  'chart-line', 'chart-bar', 'chart-pie',
  'activity', 'activity-circle', 'activity-square',
  'trending-up', 'trending-up-circle', 'trending-up-square',
  'trending-down', 'trending-down-circle', 'trending-down-square',
  'gauge', 'diagnostic', 'list-box', 'layers', 'presentation',
  'bank', 'credit-card', 'banknote', 'coins', 'piggy-bank', 'receipt',
  'dollar-circle', 'rupee-circle', 'euro-circle',
  'percent', 'percent-circle', 'percent-square',
  'exchange', 'exchange-circle', 'exchange-square',
  'calendar', 'clock', 'briefcase', 'job-search', 'box', 'package-check', 'package-return',

  // 7. DEV & AI
  'ai-spark', 'spark-bolt', 'user-spark', 'avatar-spark', 'bot', 'robot', 'alien', 'ghost', 'crawler', 'waveform', 'research', 'atom', 'infinity',
  'code', 'terminal', 'command', 'brackets', 'git-branch', 'branches', 'bug', 'cpu', 'database', 'server', 'connectors', 'globe', 'clock-bolt',

  // 8. ALERTS
  'info', 'help-circle', 'help-square', 'warning', 'alert-circle', 'check-circle', 'x-circle', 'ban', 'star-circle',
  'shield', 'shield-check', 'shield-alert', 'shield-info', 'shield-lock', 'shield-star', 'family-safety', 'incognito',
  'lock', 'lock-circle', 'lock-square', 'unlock', 'key', 'key-circle', 'key-square', 'passkeys', 'log-in', 'log-out',
  'zap', 'zap-circle', 'zap-square', 'sun', 'moon',

  // 9. BRANDS
  'openai', 'anthropic', 'gemini', 'github', 'vercel', 'nextjs', 'supabase', 'vscode', 'docker', 'figma', 'linear', 'notion', 'slack', 'stripe',
  'google', 'google-drive', 'apple', 'android', 'windows',
  'instagram', 'facebook', 'threads', 'x', 'twitter', 'linkedin', 'youtube', 'tiktok', 'spotify', 'discord', 'whatsapp', 'telegram', 'dribbble', 'behance', 'substack',
  'wikipedia', 'quora', 'reddit', 'internet-archive',
];

const SEMANTIC_ORDER_INDEX: Record<string, number> = Object.fromEntries(
  SEMANTIC_ID_ORDER.map((id, idx) => [id, idx])
);

export const ICONS_CATALOG: IconDefinition[] = [...RAW_ICONS_CATALOG].sort((a, b) => {
  const catDiff = CATEGORY_SORT_ORDER[a.category] - CATEGORY_SORT_ORDER[b.category];
  if (catDiff !== 0) return catDiff;
  const idxA = SEMANTIC_ORDER_INDEX[a.id] ?? Number.MAX_SAFE_INTEGER;
  const idxB = SEMANTIC_ORDER_INDEX[b.id] ?? Number.MAX_SAFE_INTEGER;
  if (idxA !== idxB) return idxA - idxB;
  return a.id.localeCompare(b.id);
});

export const ICON_MAP: Record<string, IconDefinition> = Object.fromEntries(
  ICONS_CATALOG.map((icon) => [icon.id, icon])
);
