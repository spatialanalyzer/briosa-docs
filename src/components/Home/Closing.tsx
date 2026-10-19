import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from '@site/src/pages/index.module.css';
import {ChannelHead} from './parts';
import Icon, {type IconName} from './Icon';

const tiles: readonly {icon: IconName; title: string; detail: string; to: string}[] = [
  {
    icon: 'package',
    title: 'Install Briosa',
    detail: 'Windows x64 installer with a complete offline setup and bundled runtime.',
    to: '/install',
  },
  {
    icon: 'book',
    title: 'Documentation',
    detail: 'Concepts, exact targets, deployment, and your first MP request.',
    to: '/docs/intro',
  },
  {
    icon: 'code',
    title: 'API Reference',
    detail: 'Typed gRPC services and operations for each exact target.',
    to: '/api',
  },
  {
    icon: 'grid',
    title: 'MP Catalog',
    detail: 'Every MP Editor root group, with a status on each command.',
    to: '/mp-command-catalog',
  },
];

export function StartTiles(): ReactNode {
  return (
    <section className={clsx(styles.chan, styles.start)} aria-labelledby="home-start-title">
      <div className="sl-rule" aria-hidden="true" />
      <div className={styles.wrap}>
        <ChannelHead kicker="Start Here" id="home-start-title" title="Pick Your Starting Point" />
        <ul className={styles.tiles}>
          {tiles.map((tile) => (
            <li key={tile.to}>
              <Link className={styles.tile} to={tile.to}>
                <span className={styles.tileIcon}>
                  <Icon name={tile.icon} />
                </span>
                <b>{tile.title}</b>{' '}
                <span>{tile.detail}</span>
                <Icon name="arrow" className={styles.go} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Independence(): ReactNode {
  return (
    <section className={styles.indep} aria-labelledby="home-ind-title">
      <div className="sl-rule" aria-hidden="true" />
      <div className={clsx(styles.wrap, styles.indepIn)}>
        <div className={styles.indepHead}>
          <h2 id="home-ind-title">Independent by Design</h2>
          <p>Open source under Apache-2.0.</p>
        </div>
        <div className={styles.indepText}>
          <p>
            SpatialAnalyzer and the SA SDK are Hexagon products. Briosa is an independent open-source project and is
            not affiliated with, endorsed by, or supported by Hexagon.
          </p>
          <p>Briosa ships v0.x releases while validation continues.</p>
          <div className={styles.indepLinks}>
            <Link className={clsx('sl-textlink', styles.textlink)} to="/docs/concepts/exact-targets">
              Understand Exact Targets
              <Icon name="arrow" />
            </Link>
            <Link className={clsx('sl-textlink', styles.textlink)} to="/docs/releases">
              Release Status
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
