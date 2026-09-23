import React, {useContext, type ReactNode} from 'react';
import OriginalItem from '@theme-original/DocSidebarItem/Html';
import type {Props} from '@theme/DocSidebarItem/Html';
import {SidebarControls} from '../../../components/ApiReference/SidebarControls';

export default function SidebarHtmlItem(props: Props): ReactNode {
  const controls = useContext(SidebarControls);
  const key = props.item.customProps?.apiControl;
  return typeof key === 'string' && controls[key]
    ? <li className="menu__list-item api-sidebar-control">{controls[key]}</li>
    : <OriginalItem {...props} />;
}
