import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import type {Props} from '@theme/TOC';

export default function TOC({className, ...props}: Props): ReactNode {
  return <nav className={clsx('briosa-toc thin-scrollbar', className)} aria-label="On This Page">
    <strong>On This Page</strong>
    <TOCItems {...props} className="briosa-toc-list" linkClassName="briosa-toc-link toc-highlight" linkActiveClassName="briosa-toc-link-active" />
  </nav>;
}
