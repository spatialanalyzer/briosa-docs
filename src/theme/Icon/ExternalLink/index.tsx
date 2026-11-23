import React, {type ReactNode} from 'react';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/Icon/ExternalLink';

// Docusaurus's icon and its inline sprite symbol. The footer alone repeats it
// 11 times a page, so the stylesheet sets its default 13.5px size and spacing
// (.sl-external) instead of each icon's attributes (#113).
export default function IconExternalLink({width = 13.5, height = 13.5}: Props): ReactNode {
  const sized = width !== 13.5 || height !== 13.5;
  return (
    <svg
      {...(sized && {style: {width, height}})}
      aria-label={translate({
        id: 'theme.IconExternalLink.ariaLabel',
        message: '(opens in new tab)',
        description: 'The ARIA label for the external link icon',
      })}
      className="sl-external">
      <use href="#theme-svg-external-link" />
    </svg>
  );
}
