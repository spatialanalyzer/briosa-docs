import type {CSSProperties, ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from '@site/src/pages/index.module.css';
import {ChannelHead} from './parts';
import {
  currentOperations2024,
  currentOperations2026,
  formatCount,
  grpcServices,
  packagesFor,
  reviewedCommands2024,
  targets,
  versions,
} from './data';
import Icon from './Icon';

function Reticle(): ReactNode {
  return (
    <svg className={styles.reticle} viewBox="0 0 160 160" aria-hidden="true">
      <circle className={styles.rtRing} cx="80" cy="80" r="64" />
      <circle className={styles.rtRing2} cx="80" cy="80" r="40" />
      <path className={styles.rtCross} d="M80 6v28M80 126v28M6 80h28M126 80h28" />
      <path className={styles.rtBrk} d="M56 66V56h10M94 56h10v10M104 94v10H94M66 104H56V94" />
      <circle className={styles.rtPulse} cx="80" cy="80" r="6" />
      <circle className={styles.rtCore} cx="80" cy="80" r="4" />
    </svg>
  );
}

/**
 * A package name that wraps instead of truncating. An npm name breaks right
 * after its scope's slash, and the rest stays whole unless even a line of its
 * own is too narrow.
 */
function PackageName({name}: {readonly name: string}): ReactNode {
  const scope = name.indexOf('/') + 1;
  if (!scope) return <code>{name}</code>;
  return (
    <code>
      {name.slice(0, scope)}
      <wbr />
      <span>{name.slice(scope)}</span>
    </code>
  );
}

function Packages({target}: {readonly target: string}): ReactNode {
  const pk = packagesFor(target);
  return (
    <ul className={styles.tgtPk}>
      <li>
        <span>NuGet</span> <PackageName name={pk.nuget} />
      </li>
      <li>
        <span>PyPI</span> <PackageName name={pk.pypi} />
      </li>
      <li>
        <span>npm</span> <PackageName name={pk.npm} />
      </li>
    </ul>
  );
}

const coverage2024 = `${((currentOperations2024 / reviewedCommands2024) * 100).toFixed(2)}%`;

export default function ExactTargets(): ReactNode {
  return (
    <section className={clsx(styles.chan, styles.alt)} aria-labelledby="home-tgt-title">
      <div className="sl-rule" aria-hidden="true" />
      <div className={styles.wrap}>
        <ChannelHead kicker="Exact Targets" id="home-tgt-title" title="Lock On to Your Exact Release">
          Briosa targets SA {targets.sa2024} and SA {targets.sa2026}. The two targets have independent server and
          client packages, so you install exactly the one that matches your SpatialAnalyzer.
        </ChannelHead>
        <div className={styles.targets}>
          <article className={styles.tgt} aria-labelledby="home-t26">
            <span className="sl-brk" aria-hidden="true" />
            <Reticle />
            <div>
              <p className={clsx('sl-hud', styles.tgtK)}>
                <b>Locked</b> Target
              </p>
              <h3 id="home-t26">
                <span>SA </span>
                {targets.sa2026}
              </h3>
              <p className={styles.stat}>
                <span className={styles.big}>{formatCount(currentOperations2026)}</span>{' '}
                <span>MP operations in the server registry</span>
              </p>
              <div className={styles.ticks} aria-hidden="true">
                {Array.from({length: grpcServices}, (_, i) => (
                  <i key={i} />
                ))}
              </div>
              <div className={clsx('sl-hud', styles.meterCap)}>
                <span>{grpcServices} gRPC Services</span>{' '}
                <span>Server Registry</span>
              </div>
              <Packages target={targets.sa2026} />
            </div>
          </article>
          <article className={styles.tgt} aria-labelledby="home-t24">
            <span className="sl-brk" aria-hidden="true" />
            <Reticle />
            <div>
              <p className={clsx('sl-hud', styles.tgtK)}>
                <b>Locked</b> Target
              </p>
              <h3 id="home-t24">
                <span>SA </span>
                {targets.sa2024}
              </h3>
              <p className={styles.stat}>
                <span className={styles.big}>{formatCount(currentOperations2024)}</span>{' '}
                <span>current operations of {formatCount(reviewedCommands2024)} reviewed commands</span>
              </p>
              <div className={styles.meter} aria-hidden="true">
                <div className={styles.meterBar}>
                  <i style={{'--w': coverage2024} as CSSProperties} />
                </div>
              </div>
              <div className={clsx('sl-hud', styles.meterCap)}>
                <span>{formatCount(currentOperations2024)} Current</span>{' '}
                <span>{formatCount(reviewedCommands2024)} Reviewed</span>
              </div>
              <Packages target={targets.sa2024} />
            </div>
          </article>
        </div>
        <div className={styles.sep}>
          <span className={styles.sepEq}>
            <span className={styles.ver}>Server version {versions.server}</span>
            <i aria-hidden="true">+</i>
            <span className={styles.ver}>SA target {targets.sa2026}</span>
          </span>
          <p>Two separate values. Matching only an SA release year is insufficient.</p>
          <Link className={clsx('sl-textlink', styles.textlink, styles.sepLink)} to="/docs/concepts/exact-targets">
            Understand Exact Targets
            <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
