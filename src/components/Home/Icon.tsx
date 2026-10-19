import type {ReactNode} from 'react';
import clsx from 'clsx';

// Scanline line icons: 1.5px strokes with one accent stroke colored by --ac.
const accent = {stroke: 'var(--ac)'} as const;

const icons = {
  arrow: (
    <>
      <path d="M4 12h15" />
      <path style={accent} d="m13.5 6.5 5.5 5.5-5.5 5.5" />
    </>
  ),
  copy: (
    <>
      <rect x="8.5" y="8.5" width="11.5" height="11.5" rx="1.5" />
      <path style={accent} d="M15.5 5.5v-1A1.5 1.5 0 0 0 14 3H5a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 5 15h1" />
    </>
  ),
  check: <path style={accent} d="m4.5 12.5 4.8 4.8L19.5 7" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6" />
      <path style={accent} d="M12 7.2v.1" />
    </>
  ),
  replay: (
    <>
      <path d="M4.6 13a7.5 7.5 0 1 0 2.1-6.3" />
      <path style={accent} d="M4.5 3.8v4.1h4.1" />
    </>
  ),
  gate: (
    <>
      <rect x="4.5" y="2.5" width="15" height="4" rx="1" />
      <rect x="4.5" y="17.5" width="15" height="4" rx="1" />
      <path d="M2 12h3.5M18.5 12H22" />
      <path style={accent} d="M8.5 12h7" />
    </>
  ),
  reticle: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <circle style={accent} cx="12" cy="12" r="2.2" />
    </>
  ),
  code: (
    <>
      <path d="m8 6.5-5.5 5.5L8 17.5M16 6.5l5.5 5.5-5.5 5.5" />
      <path style={accent} d="m13.6 4.5-3.2 15" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect style={accent} x="13.5" y="13.5" width="7" height="7" rx="1" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.6C10 5 7 4.6 3.5 5.1v13c3.5-.5 6.5-.1 8.5 1.5 2-1.6 5-2 8.5-1.5v-13C17 4.6 14 5 12 6.6Z" />
      <path d="M12 6.6v13" />
      <path style={accent} d="M15.5 4.7v5l1.5-1.1 1.5 1.1V4.6" />
    </>
  ),
  package: (
    <>
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5Z" />
      <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
      <path style={accent} d="m7.7 5.3 8.6 4.5v3.4" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof icons;

export default function Icon({name, className}: {readonly name: IconName; readonly className?: string}): ReactNode {
  return (
    <svg className={clsx('sl-ico', className)} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {icons[name]}
    </svg>
  );
}
