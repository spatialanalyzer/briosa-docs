import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/DarkMode';
import ColorModeIcon from '@site/src/components/Scanline/ColorModeIcon';

export default function IconDarkMode(props: Props): ReactNode {
  return <ColorModeIcon {...props} variant="dark" />;
}
