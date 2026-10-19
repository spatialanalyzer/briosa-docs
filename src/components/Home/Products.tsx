import type {PointerEvent, ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from '@site/src/pages/index.module.css';
import {ChannelHead} from './parts';
import {currentOperations2026, formatCount, grpcServices, packagesFor, targets, versions} from './data';
import Icon from './Icon';

/** A spotlight follows the pointer around the card's edge. */
function spotlight(event: PointerEvent<HTMLElement>) {
  const card = event.currentTarget;
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${(event.clientX - r.left).toFixed(0)}px`);
  card.style.setProperty('--my', `${(event.clientY - r.top).toFixed(0)}px`);
}

const installerIcon = (
  <svg className={styles.pi} viewBox="0 0 48 48" aria-hidden="true">
    <path className={styles.tint} d="M8 18 24 10l16 8v17l-16 8-16-8Z" />
    <path d="M8 18 24 10l16 8v17l-16 8-16-8Z" />
    <path d="M8 18l16 8 16-8M24 26v17" />
    <path className={styles.acc} d="m15.5 13.8 16.2 8.3v6.4" />
    <g className={styles.drop}>
      <path className={styles.acc} d="M24 1.5v13M19.8 10.3 24 14.5l4.2-4.2" />
    </g>
  </svg>
);

const serverIcon = (
  <svg className={styles.pi} viewBox="0 0 48 48" aria-hidden="true">
    <rect className={styles.tint} x="7" y="7" width="34" height="10" rx="2" />
    <rect className={styles.tint} x="7" y="19" width="34" height="10" rx="2" />
    <rect className={styles.tint} x="7" y="31" width="34" height="10" rx="2" />
    <rect x="7" y="7" width="34" height="10" rx="2" />
    <rect x="7" y="19" width="34" height="10" rx="2" />
    <rect x="7" y="31" width="34" height="10" rx="2" />
    <circle className={styles.led} cx="13" cy="12" r="1.8" />
    <circle className={styles.led} cx="13" cy="24" r="1.8" />
    <circle className={styles.led} cx="13" cy="36" r="1.8" />
    <path className={styles.acc} d="M27 12h9M27 24h9M27 36h9" />
  </svg>
);

const controlCenterIcon = (
  <svg className={styles.pi} viewBox="0 0 48 48" aria-hidden="true">
    <rect className={styles.tint} x="5" y="6" width="38" height="28" rx="2.5" />
    <rect x="5" y="6" width="38" height="28" rx="2.5" />
    <path d="M5 12.5h38" />
    <path d="M9 9.3h.01M12.5 9.3h.01" />
    <path className={clsx(styles.spark, styles.acc)} d="m10 27 6-6 5 3.5 6.5-8.5 5 4.5 6-6" />
    <path d="M4 43h40" />
    <rect x="33" y="38.5" width="7" height="7" rx="1.5" className={styles.acc} />
  </svg>
);

type Product = {
  readonly id: string;
  readonly icon: ReactNode;
  readonly version: string;
  readonly sub?: boolean;
  readonly title: string;
  readonly detail: string;
  readonly meta: readonly string[];
  readonly to: string;
  readonly action: string;
};

const products: readonly Product[] = [
  {
    id: 'home-p-inst',
    icon: installerIcon,
    version: versions.installer,
    title: 'Briosa Installer',
    detail:
      'A Windows desktop app to install, update, verify, and repair Briosa server packages for your exact SpatialAnalyzer release. Keeps several server versions side by side.',
    meta: ['Windows x64', 'Complete offline setup', 'Bundled runtime'],
    to: '/install',
    action: 'Install Briosa',
  },
  {
    id: 'home-p-srv',
    icon: serverIcon,
    version: versions.server,
    title: 'Briosa Server',
    detail: 'Run read-only and mutating MP commands through a strongly typed local gRPC API.',
    meta: [`${grpcServices} gRPC services`, `${formatCount(currentOperations2026)} MP operations on SA 2026`],
    to: '/api/grpc',
    action: 'Browse the gRPC API',
  },
  {
    id: 'home-p-cc',
    icon: controlCenterIcon,
    version: `With Server ${versions.server}`,
    sub: true,
    title: 'Briosa Control Center',
    detail: 'Monitor server status and activity, and manage a local server and its SDK from the Windows tray.',
    meta: ['Status and activity', 'Server and SDK control'],
    to: '/docs/deployment/control-center',
    action: 'Meet the Control Center',
  },
];

const pk = packagesFor(targets.sa2026);
const clientPackages = [
  {mono: styles.monoCs, short: 'C#', label: '.NET · NuGet', name: pk.nuget},
  {mono: styles.monoPy, short: 'Py', label: 'Python · PyPI', name: pk.pypi},
  {mono: styles.monoTs, short: 'TS', label: 'JavaScript · npm', name: pk.npm},
] as const;

export default function Products(): ReactNode {
  return (
    <section className={styles.chan} aria-labelledby="home-prod-title">
      <div className="sl-rule" aria-hidden="true" />
      <div className={styles.wrap}>
        <ChannelHead kicker="Products" id="home-prod-title" title="Everything Runs on One Windows Machine">
          The client, server, SDK, and SpatialAnalyzer run side by side. Install the server for your exact release,
          call it from your language, and watch it from the tray.
        </ChannelHead>
        <div className={styles.prods}>
          {products.map((product) => (
            <article key={product.id} className={styles.prod} aria-labelledby={product.id} onPointerMove={spotlight}>
              <div className={styles.prodTop}>
                {product.icon}
                <span className={clsx(styles.ver, product.sub && styles.verSub)}>{product.version}</span>
              </div>
              <h3 id={product.id}>{product.title}</h3>
              <p>{product.detail}</p>
              <ul className={styles.meta}>
                {product.meta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className={clsx('sl-textlink', styles.textlink)} to={product.to}>
                {product.action}
                <Icon name="arrow" />
              </Link>
            </article>
          ))}
        </div>
        <div className={styles.clientsPanel}>
          <div>
            <h3>First-Party Clients {versions.clients}</h3>
            <p>
              One package per exact target for .NET, Python, and JavaScript or TypeScript. SA 2024 swaps the target in
              each package name.
            </p>
          </div>
          <ul className={styles.pkgs}>
            {clientPackages.map((item) => (
              <li key={item.name} className={styles.pkg}>
                <span className={clsx(styles.mono, item.mono)} aria-hidden="true">
                  {item.short}
                </span>
                <b>{item.label}</b>{' '}
                <code>{item.name}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
