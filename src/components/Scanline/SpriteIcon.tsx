import React, {type ComponentProps, type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export type SpriteIconName = 'light' | 'dark' | 'system' | 'menu' | 'chevron' | 'edit' | 'find';

// An icon every page repeats, drawn from one cached sprite, static/img/icons.svg.
// The <svg> keeps the size, classes, and accessible markup of the inline icon
// it replaced, so it renders the same, while pages no longer repeat the
// artwork (#113). The symbol inherits the icon's color and stroke.
export default function SpriteIcon({icon, ...props}: ComponentProps<'svg'> & {icon: SpriteIconName}): ReactNode {
  const sprite = useBaseUrl('/img/icons.svg');
  return <svg {...props}><use href={`${sprite}#${icon}`} /></svg>;
}
