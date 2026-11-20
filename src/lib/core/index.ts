/**
 * Kinetic Icons — Zero-Dependency Core Entry Point
 */

export * from './engine';
export * from './icons';

import { renderIconJsx, renderIconSvg } from './engine';
import { ICON_MAP } from './icons';

export function getExportSvgString(
  iconId: string,
  size: number,
  strokeWidth: number,
  cornerRadius: number,
  color: string
): string {
  const iconDef = ICON_MAP[iconId];
  if (!iconDef) return '';
  return renderIconSvg(iconDef, {
    size,
    stroke: strokeWidth,
    radius: cornerRadius,
    color,
  });
}

export function getExportJsxString(
  iconId: string,
  size: number,
  strokeWidth: number,
  cornerRadius: number,
  color: string
): string {
  const iconDef = ICON_MAP[iconId];
  if (!iconDef) return '';
  return renderIconJsx(iconDef, {
    size,
    stroke: strokeWidth,
    radius: cornerRadius,
    color,
  });
}
