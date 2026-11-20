import { ICONS_CATALOG, getExportSvgString } from '../data/icons';

interface ZipEntryInput {
  name: string;
  content: string | Uint8Array;
}

const CRC32_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) !== 0 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32(bytes: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = CRC32_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function getDosTimestamp(date: Date): { time: number; date: number } {
  const year = Math.max(1980, date.getFullYear());
  const dosDate =
    ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  const dosTime =
    (date.getHours() << 11) |
    (date.getMinutes() << 5) |
    Math.floor(date.getSeconds() / 2);
  return { time: dosTime, date: dosDate };
}

/**
 * Builds a standards-compliant PKZIP archive (STORE method, UTF-8 filenames, IEEE CRC-32)
 * completely client-side with zero external dependencies.
 */
export function buildZipArchive(entries: ZipEntryInput[]): Uint8Array {
  const encoder = new TextEncoder();
  const now = getDosTimestamp(new Date());

  const prepared = entries.map((entry) => {
    const nameBytes = encoder.encode(entry.name);
    const dataBytes =
      typeof entry.content === 'string'
        ? encoder.encode(entry.content)
        : entry.content;
    const checksum = crc32(dataBytes);
    return { nameBytes, dataBytes, checksum };
  });

  let localTotalSize = 0;
  let centralTotalSize = 0;
  for (const item of prepared) {
    localTotalSize += 30 + item.nameBytes.length + item.dataBytes.length;
    centralTotalSize += 46 + item.nameBytes.length;
  }

  const totalSize = localTotalSize + centralTotalSize + 22;
  const output = new Uint8Array(totalSize);
  const view = new DataView(output.buffer);

  const offsets: number[] = [];
  let offset = 0;

  // 1. Write Local File Headers + File Data
  for (const item of prepared) {
    offsets.push(offset);
    view.setUint32(offset, 0x04034b50, true); // Local file header signature
    view.setUint16(offset + 4, 20, true); // Version needed to extract (2.0)
    view.setUint16(offset + 6, 0x0800, true); // UTF-8 filename flag
    view.setUint16(offset + 8, 0, true); // Compression method: 0 (STORE)
    view.setUint16(offset + 10, now.time, true);
    view.setUint16(offset + 12, now.date, true);
    view.setUint32(offset + 14, item.checksum, true);
    view.setUint32(offset + 18, item.dataBytes.length, true);
    view.setUint32(offset + 22, item.dataBytes.length, true);
    view.setUint16(offset + 26, item.nameBytes.length, true);
    view.setUint16(offset + 28, 0, true); // Extra field length
    offset += 30;

    output.set(item.nameBytes, offset);
    offset += item.nameBytes.length;

    output.set(item.dataBytes, offset);
    offset += item.dataBytes.length;
  }

  const centralDirectoryOffset = offset;

  // 2. Write Central Directory Headers
  for (let i = 0; i < prepared.length; i++) {
    const item = prepared[i];
    view.setUint32(offset, 0x02014b50, true); // Central file header signature
    view.setUint16(offset + 4, 20, true); // Version made by
    view.setUint16(offset + 6, 20, true); // Version needed to extract
    view.setUint16(offset + 8, 0x0800, true); // UTF-8 flag
    view.setUint16(offset + 10, 0, true); // Compression method: STORE
    view.setUint16(offset + 12, now.time, true);
    view.setUint16(offset + 14, now.date, true);
    view.setUint32(offset + 16, item.checksum, true);
    view.setUint32(offset + 20, item.dataBytes.length, true);
    view.setUint32(offset + 24, item.dataBytes.length, true);
    view.setUint16(offset + 28, item.nameBytes.length, true);
    view.setUint16(offset + 30, 0, true); // Extra field length
    view.setUint16(offset + 32, 0, true); // File comment length
    view.setUint16(offset + 34, 0, true); // Disk number start
    view.setUint16(offset + 36, 0, true); // Internal file attributes
    view.setUint32(offset + 38, 0, true); // External file attributes
    view.setUint32(offset + 42, offsets[i], true); // Relative offset of local header
    offset += 46;

    output.set(item.nameBytes, offset);
    offset += item.nameBytes.length;
  }

  // 3. Write End of Central Directory Record (EOCD)
  view.setUint32(offset, 0x06054b50, true); // EOCD signature
  view.setUint16(offset + 4, 0, true); // Disk number
  view.setUint16(offset + 6, 0, true); // Disk with start of central directory
  view.setUint16(offset + 8, prepared.length, true); // Entries on this disk
  view.setUint16(offset + 10, prepared.length, true); // Total entries
  view.setUint32(offset + 12, centralTotalSize, true); // Size of central directory
  view.setUint32(offset + 16, centralDirectoryOffset, true); // Offset of central directory
  view.setUint16(offset + 20, 0, true); // Comment length

  return output;
}

function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export interface KineticZipOptions {
  strokeWidth: number;
  cornerRadius: number;
  color: string;
  size?: number;
}

export function buildKineticZipBytes(options: KineticZipOptions): {
  bytes: Uint8Array;
  filename: string;
  iconCount: number;
} {
  const { strokeWidth, cornerRadius, color, size = 24 } = options;
  const exportColor = color === '#F5F5F7' ? 'currentColor' : color;
  const entries: ZipEntryInput[] = [];

  for (const icon of ICONS_CATALOG) {
    const folder = slugifyCategory(icon.category);
    const svg = getExportSvgString(
      icon.id,
      size,
      strokeWidth,
      cornerRadius,
      exportColor
    );
    entries.push({
      name: `kinetic-icons/svg/${folder}/${icon.id}.svg`,
      content: `${svg}\n`,
    });
  }

  const manifest = {
    name: 'Kinetic Icons',
    count: ICONS_CATALOG.length,
    viewBox: '0 0 24 24',
    size,
    strokeWidth,
    cornerRadius,
    strokeColor: exportColor,
    license: 'MIT',
    icons: ICONS_CATALOG.map((icon) => ({
      id: icon.id,
      category: icon.category,
      path: `svg/${slugifyCategory(icon.category)}/${icon.id}.svg`,
    })),
  };

  entries.push({
    name: 'kinetic-icons/manifest.json',
    content: `${JSON.stringify(manifest, null, 2)}\n`,
  });

  const readme = [
    'Kinetic — Parametric SVG Icon Library',
    '=====================================',
    '',
    `Icons included : ${ICONS_CATALOG.length}`,
    `Grid viewBox   : 0 0 24 24 (${size}px default export)`,
    `Stroke width   : ${strokeWidth.toFixed(2)}px`,
    `Corner radius  : ${cornerRadius.toFixed(2)}px`,
    `Stroke color   : ${exportColor}`,
    '',
    'Directory Layout',
    '----------------',
    'svg/<category>/<icon-id>.svg   Optimized single-layer monoline SVGs',
    'manifest.json                  Machine-readable index of all icons & categories',
    '',
    'License: MIT — Free for personal and commercial software.',
    '',
  ].join('\n');

  entries.push({
    name: 'kinetic-icons/README.txt',
    content: readme,
  });

  const strokeTag = strokeWidth.toFixed(2).replace(/\.?0+$/, '');
  const radiusTag = cornerRadius.toFixed(2).replace(/\.?0+$/, '');
  const filename = `kinetic-icons-s${strokeTag}-r${radiusTag}.zip`;

  return {
    bytes: buildZipArchive(entries),
    filename,
    iconCount: ICONS_CATALOG.length,
  };
}

export function triggerKineticZipDownload(options: KineticZipOptions): {
  filename: string;
  iconCount: number;
} {
  const { bytes, filename, iconCount } = buildKineticZipBytes(options);
  const blob = new Blob([bytes.buffer as ArrayBuffer], {
    type: 'application/zip',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  return { filename, iconCount };
}
