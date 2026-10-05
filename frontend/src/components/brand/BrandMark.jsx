import React from 'react';
import { BRAND } from './BRAND';

/**
 * The Apex Digital mark: a gradient tile carrying A layered summit peak with summit orb and base rail.
 * Vector only - no raster assets - so it stays crisp at any size and
 * inherits the surrounding layout.
 */
export function BrandMark({ size = 34, className = '', title, ...rest }) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const gid = `bm-{uid}`;
  const label = title || BRAND.name;
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={label}
      {...rest}
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BRAND.primary} />
          <stop offset="100%" stopColor={BRAND.secondary} />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14.3" fill={`url(#${gid})`} />
      <g transform="translate(14.0 14.0) scale(0.5625)">
        <polygon points='32,8 53,50 11,50' fill='#ffffff'/><polygon points='32,26 41,45 23,45' fill='#245994'/><polygon points='32,8 36,16 28,16' fill='#ffffff'/><line x1='14' y1='54' x2='50' y2='54' stroke='#ffffff' stroke-width='3.5' stroke-linecap='round'/>
      </g>
    </svg>
  );
}

export default BrandMark;
