import React, {type ReactNode} from 'react';
import OriginalCategory from '@theme-original/DocSidebarItem/Category';
import type {Props} from '@theme/DocSidebarItem/Category';

export default function SidebarCategory(props: Props): ReactNode {
  const filter = props.item.customProps?.apiFilterKey;
  return <OriginalCategory key={typeof filter === 'string' ? filter : undefined} {...props} />;
}
