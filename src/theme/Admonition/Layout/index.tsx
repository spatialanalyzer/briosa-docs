import React, {isValidElement, type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import type {Props} from '@theme/Admonition/Layout';

// Callouts read their severity off the deviation map: a five-segment gauge
// with one segment lit, from info (deep blue) to danger (red).
const levels: Record<string, number> = {info: 1, important: 1, note: 2, tip: 3, warning: 4, caution: 4, danger: 5};
const labels: Record<string, string> = {info: 'Info', important: 'Important', note: 'Note', tip: 'Tip', warning: 'Warning', caution: 'Caution', danger: 'Danger'};

export default function AdmonitionLayout({type, title, children, className, id}: Props): ReactNode {
  // Each admonition type passes a <Translate> default title; anything else was written by the author.
  const authored = title !== undefined && title !== null && title !== '' && !(isValidElement(title) && title.type === Translate);
  return (
    <div
      id={id}
      data-kind={type}
      className={clsx(ThemeClassNames.common.admonition, ThemeClassNames.common.admonitionType(type), 'sl-callout', className)}>
      <p className="sl-callout__head">
        <span className="sl-gauge" data-level={levels[type] ?? 2} aria-hidden="true"><i /><i /><i /><i /><i /></span>
        <span className="sl-hud sl-callout__type">{labels[type] ?? type}</span>
        {authored && <> <span className="sl-callout__title">{title}</span></>}
      </p>
      {children ? <div className="sl-callout__body">{children}</div> : null}
    </div>
  );
}
