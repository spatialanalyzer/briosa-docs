import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/Menu';
import SpriteIcon from '@site/src/components/Scanline/SpriteIcon';

// Docusaurus's icon at its size, drawn from the shared icon sprite (#113).
export default function IconMenu({width = 30, height = 30, ...props}: Props): ReactNode {
  return <SpriteIcon icon="menu" width={width} height={height} aria-hidden="true" {...props} />;
}
