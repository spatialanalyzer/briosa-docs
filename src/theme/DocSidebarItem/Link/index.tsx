/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the MIT license; see static/img/THIRD-PARTY-NOTICES.md.
 */

// Ejected from @docusaurus/theme-classic 3.10.2. Each API page lists dozens of
// sidebar links, so the item drops the theme-doc-sidebar-item-link classes,
// which no style uses, and keeps short class names (#113). Otherwise unchanged.
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {isActiveSidebarItem} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {Props} from '@theme/DocSidebarItem/Link';

import styles from './styles.module.css';

function LinkLabel({label}: {label: string}) {
  return <span className={styles.label}>{label}</span>;
}

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): ReactNode {
  const {href, label, className, autoAddBaseUrl} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  return (
    <li className={clsx('menu__list-item', className)} key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.external,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        <LinkLabel label={label} />
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
