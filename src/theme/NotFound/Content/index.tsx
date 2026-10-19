import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type {Props} from '@theme/NotFound/Content';

const destinations = [
  {to: '/docs/intro', label: 'Documentation', detail: 'Concepts, setup, and your first MP command'},
  {to: '/api', label: 'API Reference', detail: 'gRPC, .NET, Python, and JavaScript references'},
  {to: '/mp-command-catalog', label: 'MP Command Catalog', detail: 'Every MP Editor group and command status'},
  {to: '/install', label: 'Install Briosa', detail: 'The Windows installer and server packages'},
];

export default function NotFoundContent({className}: Props): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const search = Boolean(siteConfig.themeConfig.algolia);
  return (
    <main className={clsx('sl-notfound', className)}>
      <div className="container sl-notfound__in">
        <p className="sl-notfound__read">
          <span className="sl-gauge" data-level="5" aria-hidden="true"><i /><i /><i /><i /><i /></span>
          <span className="sl-hud">Out of Tolerance</span>
          <span className="sl-num">404</span>
        </p>
        <Heading as="h1">Page Not Found</Heading>
        <p className="sl-notfound__lead">
          This address isn’t part of the Briosa documentation. The page may have moved, or the link may be mistyped.
        </p>
        <ul className="sl-notfound__links">
          {destinations.map((d) => (
            <li key={d.to}>
              <Link to={d.to}>
                <b>{d.label}</b>
                <span>{d.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
        {search && (
          <p className="sl-notfound__search">
            <Link className="sl-textlink" to="/search">Search the documentation</Link>
          </p>
        )}
      </div>
    </main>
  );
}
