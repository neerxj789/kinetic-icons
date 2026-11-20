import {
  DEFAULT_CORNER_RADIUS,
  DEFAULT_STROKE_WIDTH,
  ICON_MAP,
} from '../data/icons';

interface KineticIconProps {
  id: string;
  size?: number;
  strokeWidth?: number;
  radius?: number;
  color?: string;
  className?: string;
}

export function KineticIcon({
  id,
  size = 24,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  radius = DEFAULT_CORNER_RADIUS,
  color = 'currentColor',
  className = '',
}: KineticIconProps) {
  const iconDef = ICON_MAP[id];
  if (!iconDef) return null;

  const isRounded = radius > 0.1;
  const innerSvg = iconDef.draw(radius);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap={isRounded ? 'round' : 'square'}
      strokeLinejoin={isRounded ? 'round' : 'miter'}
      className={`kinetic-svg shrink-0 ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: innerSvg }}
    />
  );
}
