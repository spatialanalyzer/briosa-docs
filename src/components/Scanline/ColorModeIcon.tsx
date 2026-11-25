import React, {type ComponentProps, type ReactNode} from 'react';
import clsx from 'clsx';

export default function ColorModeIcon({variant, className, ...props}: ComponentProps<'svg'> & {
  variant: 'light' | 'dark' | 'system';
}): ReactNode {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} className={clsx(className, `sl-mode-${variant}`)} {...props}>
      <rect width={24} height={24} fill="currentColor" />
    </svg>
  );
}
