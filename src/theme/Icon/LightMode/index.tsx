import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/LightMode';
import SpriteIcon from '@site/src/components/Scanline/SpriteIcon';

// Docusaurus's icon at its size, drawn from the shared icon sprite (#113).
export default function IconLightMode(props: Props): ReactNode {
  return <SpriteIcon icon="light" width={24} height={24} {...props} />;
}
