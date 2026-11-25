import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/LightMode';
import ColorModeIcon from '@site/src/components/Scanline/ColorModeIcon';

export default function IconLightMode(props: Props): ReactNode {
  return <ColorModeIcon {...props} variant="light" />;
}
