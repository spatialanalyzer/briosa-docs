import {memo, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import grpcVersions from '@site/grpc_versions.json';

import styles from '@site/src/pages/index.module.css';
import {ChannelHead} from './parts';
import {featuredOperations, formatCount, mpGroups2026, mpObservations2026, targets, tickerRpcs} from './data';
import Icon from './Icon';

/*
 * The spectrum: one dot per observed MP command, grouped by SA root group and
 * colored along the deviation map. Wide layouts are scale-invariant, so they
 * use a fixed reference width and scale with the SVG; narrow layouts wrap the
 * groups into rows of fixed-size dots at the measured width.
 */
const REFERENCE_WIDTH = 1000;
const WIDE_MIN = 700;
const deviation = ['--sl-dev-n2', '--sl-dev-n1', '--sl-dev-0', '--sl-dev-p1', '--sl-dev-p2'];

/** The group's color, interpolated along the deviation map in CSS so it follows the theme. */
function groupColor(index: number): string {
  const x = (index / (mpGroups2026.length - 1)) * 4;
  const k = Math.min(3, Math.floor(x));
  const share = ((1 - (x - k)) * 100).toFixed(2);
  return `color-mix(in srgb, var(${deviation[k]}) ${share}%, var(${deviation[k + 1]}))`;
}

type Placement = {readonly x: number; readonly y: number};
type Layout = {readonly W: number; readonly H: number; readonly R: number; readonly p: number; readonly at: readonly Placement[]};

function computeLayout(W: number, wide: boolean): Layout {
  const R = wide ? 14 : 10, G = wide ? 1.7 : 1.6;
  const cols = mpGroups2026.map((group) => Math.ceil(group.n / R));
  const total = cols.reduce((a, b) => a + b, 0);
  const p = wide ? W / (total + (mpGroups2026.length - 1) * G) : 6.6;
  const lineGap = 14;
  const at: Placement[] = [];
  let x = 0, y = 0;
  cols.forEach((c) => {
    const w = c * p;
    if (!wide && x > 0 && x + w > W + 0.5) {
      x = 0;
      y += R * p + lineGap;
    }
    at.push({x, y});
    x += w + G * p;
  });
  return {W, H: Math.ceil(y + R * p), R, p, at};
}

const wideLayout = computeLayout(REFERENCE_WIDTH, true);

const GroupDots = memo(function GroupDots({n, x, y, R, p}: {n: number; x: number; y: number; R: number; p: number}) {
  const dots: ReactNode[] = [];
  for (let k = 0; k < n; k++) {
    const c = Math.floor(k / R), r = k % R;
    dots.push(<circle key={k} cx={(x + c * p + p / 2).toFixed(1)} cy={(y + (R - 1 - r) * p + p / 2).toFixed(1)} r={(p * 0.35).toFixed(2)} />);
  }
  return <>{dots}</>;
});

function Spectrum(): ReactNode {
  const figure = useRef<HTMLElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const groups = useRef<(SVGGElement | null)[]>([]);
  // Dots render after hydration; until then the SVG only reserves the wide layout's height.
  const [mounted, setMounted] = useState(false);
  const [narrowWidth, setNarrowWidth] = useState<number | null>(null);
  const [hot, setHot] = useState<number | null>(null);
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const measure = () => {
      const W = Math.round(svg.current?.getBoundingClientRect().width ?? 0);
      if (W) setNarrowWidth(W >= WIDE_MIN ? null : W);
    };
    measure();
    const resize = new ResizeObserver(measure);
    if (figure.current) resize.observe(figure.current);
    return () => resize.disconnect();
  }, []);

  const layout = narrowWidth === null ? wideLayout : computeLayout(narrowWidth, false);
  const active = hot === null ? null : mpGroups2026[hot];

  function onKeyDown(event: KeyboardEvent<SVGGElement>, index: number) {
    const {key} = event;
    let next: number | null = null;
    if (key === 'ArrowRight' || key === 'ArrowDown') next = index + 1;
    else if (key === 'ArrowLeft' || key === 'ArrowUp') next = index - 1;
    else if (key === 'Home') next = 0;
    else if (key === 'End') next = mpGroups2026.length - 1;
    if (next === null) return;
    event.preventDefault();
    next = (next + mpGroups2026.length) % mpGroups2026.length;
    setFocusIndex(next);
    groups.current[next]?.focus();
  }

  return (
    // The caption shares a row with the live readout, so it labels the figure by id
    // rather than as a <figcaption>, which must be the figure's first or last child.
    <figure className={styles.spec} ref={figure} aria-labelledby="home-spec-caption">
      <div className={styles.specHead}>
        <p className="sl-hud" id="home-spec-caption">
          SA {targets.sa2026} MP Groups, Sized by Observed MP Commands
        </p>
        <p className={styles.specRead}>
          {active ? (
            <>
              {active.name}
              <b>{active.n}</b>
              <span> observed MP commands</span>
            </>
          ) : (
            <>
              {mpGroups2026.length} root groups<b>{formatCount(mpObservations2026)}</b> <span>observations</span>
            </>
          )}
        </p>
      </div>
      <svg
        ref={svg}
        className={clsx(styles.specSvg, hot !== null && styles.dim)}
        viewBox={`0 0 ${layout.W} ${layout.H}`}
        {...(mounted
          ? {role: 'group', 'aria-label': 'MP root groups as dots, one per observed command. Use the arrow keys to move between groups.'}
          : {'aria-hidden': true})}>
        {mounted
          ? mpGroups2026.map((group, i) => {
              const {x, y} = layout.at[i];
              const w = Math.ceil(group.n / layout.R) * layout.p;
              return (
                <g
                  key={group.name}
                  ref={(element) => {
                    groups.current[i] = element;
                  }}
                  role="img"
                  aria-label={`${group.name}, ${group.n} observed MP commands`}
                  tabIndex={i === focusIndex ? 0 : -1}
                  className={clsx(i === hot && styles.hot)}
                  style={{'--gc': groupColor(i)} as CSSProperties}
                  onPointerEnter={() => setHot(i)}
                  onPointerLeave={() => setHot(null)}
                  onFocus={() => {
                    setHot(i);
                    setFocusIndex(i);
                  }}
                  onBlur={() => setHot(null)}
                  onKeyDown={(event) => onKeyDown(event, i)}>
                  <rect
                    className={styles.hitArea}
                    x={(x - layout.p * 0.3).toFixed(1)}
                    y={(y - layout.p * 0.3).toFixed(1)}
                    width={(w + layout.p * 0.6).toFixed(1)}
                    height={(layout.R * layout.p + layout.p * 0.6).toFixed(1)}
                    rx="3"
                  />
                  <GroupDots n={group.n} x={x} y={y} R={layout.R} p={layout.p} />
                </g>
              );
            })
          : null}
      </svg>
      <div className={clsx('sl-hud', styles.specAxis)} aria-hidden="true">
        <span>Largest Group</span>
        <span>One Dot per Observed Command</span>
        <span>Smallest Group</span>
      </div>
      <ul className={styles.groups}>
        {mpGroups2026.map((group, i) => (
          <li
            key={group.name}
            className={clsx(i === hot && styles.hot)}
            style={{'--gc': groupColor(i)} as CSSProperties}
            onPointerEnter={() => setHot(i)}
            onPointerLeave={() => setHot(null)}>
            <i />
            {group.name}
            <b>{group.n}</b>
          </li>
        ))}
      </ul>
    </figure>
  );
}

function Ticker({items, reverse}: {readonly items: readonly string[]; readonly reverse?: boolean}): ReactNode {
  // Two copies make the drift seamless: the track moves by half its width, then repeats.
  return (
    <div className={clsx(styles.ticker, reverse && styles.tickerNext)} aria-hidden="true">
      <div className={clsx(styles.track, reverse && styles.rev)}>
        {[...items, ...items].map((name, i) => (
          <span key={`${name}-${i}`}>{name}</span>
        ))}
      </div>
    </div>
  );
}

export default function Catalog(): ReactNode {
  return (
    <section className={styles.chan} aria-labelledby="home-cat-title">
      <div className="sl-rule" aria-hidden="true" />
      <div className={styles.wrap}>
        <ChannelHead kicker="MP Command Catalog" id="home-cat-title" title="The MP Editor, Mapped Group by Group">
          The catalog preserves SpatialAnalyzer's MP Editor group hierarchy per exact target, with a status on every
          command: Current, Next, Undecided, Uncommitted, Excluded, or SDK Unavailable.
        </ChannelHead>
        <Spectrum />
        <Ticker items={tickerRpcs[0]} />
        <Ticker items={tickerRpcs[1]} reverse />
        <div className={clsx('sl-hud', styles.opsHead)}>
          <span>Featured Operations</span>
          <span>
            gRPC API {grpcVersions[0]} · SA {targets.sa2026}
          </span>
        </div>
        <ul className={styles.ops} aria-label={`Featured operations, gRPC API ${grpcVersions[0]}`}>
          {featuredOperations.map((operation) => (
            <li key={operation.rpc}>
              <Link to={operation.href}>
                <span className={styles.svc}>{operation.service}</span>
                <span className={styles.rpc}>{operation.rpc}</span>
                <span className={styles.dsc}>{operation.detail}</span>
                <Icon name="arrow" />
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.catFoot}>
          <Link className="sl-btn sl-btn--solid" to="/mp-command-catalog/commands">
            Find an MP Command
            <Icon name="arrow" />
          </Link>
          <Link className="sl-btn sl-btn--ghost" to="/mp-command-catalog">
            <span className="sl-brk" aria-hidden="true" />
            Browse the MP Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
