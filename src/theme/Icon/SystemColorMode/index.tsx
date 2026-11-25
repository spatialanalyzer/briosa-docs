import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/SystemColorMode';
import ColorModeIcon from '@site/src/components/Scanline/ColorModeIcon';

export default function IconSystemColorMode(props: Props): ReactNode {
  return <ColorModeIcon {...props} variant="system" />;
}
