import React, {useEffect, useRef, type ReactNode} from 'react';
import Content from '@theme-original/DocSidebar/Desktop/Content';
import type ContentType from '@theme/DocSidebar/Desktop/Content';
import type {WrapperProps} from '@docusaurus/types';
import {attachSidebarLock} from '@site/src/components/Scanline/sidebarLock';

type Props = WrapperProps<typeof ContentType>;

// Adds the beam's bracket lock to the desktop docs sidebar. The wrapper uses
// display: contents, so the sidebar's own flex layout is unchanged.
export default function DocSidebarDesktopContent(props: Props): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => attachSidebarLock(ref.current), [props.path]);
  return (
    <div ref={ref} className="sl-sidebar">
      <Content {...props} />
    </div>
  );
}
