import {useEffect, useRef, useState, type CSSProperties, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from '@site/src/pages/index.module.css';
import {ChannelHead, CopyButton, useTabs} from './parts';
import Icon from './Icon';
import {clamp, onMotionChange, reducedMotionQuery} from './runtime';
import {languages, samples, steps, type Lang} from './sessionCode';

type SeqKey = 'c1' | 'c2' | 'c3' | 'c4' | 'col' | 'grp' | 'p1' | 'p2' | 'dim' | 'out';
type LineState = 'run' | 'done';
/** While `run` is set, only the keys in `on` are revealed; otherwise the session shows complete. */
type View = {readonly run: boolean; readonly on: ReadonlySet<SeqKey>; readonly lines: ReadonlyMap<number, LineState>};

const allKeys: readonly SeqKey[] = ['c1', 'c2', 'c3', 'c4', 'col', 'grp', 'p1', 'p2', 'dim', 'out'];
const complete: View = {run: false, on: new Set(allKeys), lines: new Map()};
const checks = [
  ['c1', 'Server'],
  ['c2', 'SDK'],
  ['c3', 'SpatialAnalyzer'],
  ['c4', 'Ready for MP'],
] as const;
// A luminance-free fade: with mask-type alpha only the stop opacity matters.
const fadeStop: CSSProperties = {stopColor: 'var(--sl-ink)'};

/** Lines that were running are now done. */
function settle(lines: ReadonlyMap<number, LineState>): Map<number, LineState> {
  const next = new Map<number, LineState>();
  lines.forEach((state, n) => next.set(n, state === 'run' ? 'done' : state));
  return next;
}

export default function LiveSession(): ReactNode {
  const [view, setView] = useState<View>(complete);
  const langRef = useRef<Lang>('cs');
  const rootRef = useRef<HTMLDivElement>(null);
  const dimRef = useRef<SVGTextElement>(null);
  const codeRefs = useRef<Partial<Record<Lang, HTMLElement | null>>>({});
  const engine = useRef<{play(): void; finish(): void} | null>(null);

  const {selected, tabProps} = useTabs(languages.length, (index) => {
    langRef.current = languages[index];
    if (reducedMotionQuery().matches) engine.current?.finish();
    else engine.current?.play();
  });
  const lang = languages[selected];
  const sample = samples[lang];

  // The session plays once it scrolls into view, then replays every few seconds while visible.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const RM = reducedMotionQuery();
    let events: {t: number; f: () => void}[] = [];
    let clock = 0, playing = false, raf = 0, last = 0, visible = false, started = false, countFrom = -1, waitUntil = -1;
    const setDim = (value: string) => {
      if (dimRef.current) dimRef.current.textContent = value;
    };
    const reveal = (...keys: SeqKey[]) => setView((v) => ({...v, on: new Set([...v.on, ...keys])}));

    function build() {
      events = [];
      let t = 0.45;
      for (const [lines, action] of steps[langRef.current]) {
        const t0 = t;
        let d = 0.85;
        events.push({
          t: t0,
          f: () =>
            setView((v) => {
              const next = settle(v.lines);
              for (const n of lines) next.set(n, 'run');
              return {...v, lines: next};
            }),
        });
        if (action === 'start') {
          (['c1', 'c2', 'c3', 'c4'] as const).forEach((k, i) => events.push({t: t0 + 0.32 + i * 0.4, f: () => reveal(k)}));
          d = 2.05;
        } else if (action === 'col') {
          events.push({t: t0 + 0.35, f: () => reveal('col')});
          d = 0.95;
        } else if (action === 'p1') {
          events.push({t: t0 + 0.35, f: () => reveal('grp', 'p1')});
          d = 1.05;
        } else if (action === 'p2') {
          events.push({t: t0 + 0.35, f: () => reveal('p2')});
          d = 1.05;
        } else if (action === 'dist') {
          events.push({
            t: t0 + 0.3,
            f: () => {
              reveal('dim');
              countFrom = clock;
            },
          });
          d = 1.55;
        } else if (action === 'out') {
          events.push({t: t0 + 0.3, f: () => reveal('out')});
          d = 1.0;
        } else if (action === 'decl') {
          d = 0.8;
        }
        t += d;
      }
      events.push({
        t: t + 0.25,
        f: () => {
          setView((v) => ({run: false, on: new Set(allKeys), lines: settle(v.lines)}));
          playing = false;
          waitUntil = clock + 6;
        },
      });
      events.sort((a, b) => a.t - b.t);
    }
    function play() {
      setView({run: true, on: new Set(), lines: new Map()});
      setDim('0.000');
      countFrom = -1;
      waitUntil = -1;
      build();
      clock = 0;
      playing = true;
      started = true;
      kick();
    }
    function finish() {
      setView(complete);
      setDim('5.000');
      playing = false;
      countFrom = -1;
      waitUntil = -1;
    }
    function tick(now: number) {
      raf = 0;
      const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
      last = now;
      if (visible && !document.hidden) {
        clock += dt;
        while (playing && events.length && events[0].t <= clock) events.shift()!.f();
        if (countFrom >= 0) {
          const p = clamp((clock - countFrom) / 0.95, 0, 1);
          setDim((5 * (1 - Math.pow(1 - p, 3))).toFixed(3));
          if (p >= 1) countFrom = -1;
        }
        if (!playing && waitUntil >= 0 && clock >= waitUntil) {
          waitUntil = -1;
          if (!RM.matches) play();
        }
      }
      if (!raf && visible && !document.hidden && (playing || countFrom >= 0 || waitUntil >= 0)) raf = requestAnimationFrame(tick);
    }
    function kick() {
      if (!raf && visible && !document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    }

    engine.current = {play, finish};
    const intersection = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        if (visible && !started && !RM.matches) play();
        else kick();
      },
      {threshold: 0.3},
    );
    intersection.observe(root);
    document.addEventListener('visibilitychange', kick);
    const stopMotion = onMotionChange(RM, () => {
      if (RM.matches) finish();
    });
    return () => {
      engine.current = null;
      if (raf) cancelAnimationFrame(raf);
      intersection.disconnect();
      document.removeEventListener('visibilitychange', kick);
      stopMotion();
    };
  }, []);

  const seq = (key: SeqKey, ...extra: (string | undefined)[]) => clsx(styles.seq, view.on.has(key) && styles.on, ...extra);
  const codeText = () =>
    `${Array.from(codeRefs.current[lang]?.children ?? [])
      .map((line) => line.textContent ?? '')
      .join('\n')}\n`;

  return (
    <section className={styles.chan} aria-labelledby="home-live-title">
      <div className="sl-rule" aria-hidden="true" />
      <div className={styles.wrap}>
        <ChannelHead kicker="Live Session" id="home-live-title" title="Write a Few Lines. Watch SpatialAnalyzer Respond.">
          One call launches the exact-target Briosa server on an owned loopback endpoint, starts a fresh SDK
          instance and SpatialAnalyzer, connects them, and verifies <code>ready_for_mp = true</code>. From there,
          MP commands are strongly typed methods.
        </ChannelHead>
        <div className={styles.session} ref={rootRef} data-run={view.run ? '' : undefined}>
          <div className={styles.pane}>
            <div className={styles.paneBar}>
              <div className="sl-tabs" role="tablist" aria-label="Client language">
                {languages.map((l, i) => (
                  <button key={l} className="sl-tab" {...tabProps(i, `home-ctab-${l}`, `home-code-${l}`)}>
                    {samples[l].tab}
                  </button>
                ))}
              </div>
              <span className={styles.file}>{sample.file}</span>
              <div className={styles.paneTools}>
                <CopyButton label="Copy code" text={codeText} source={() => codeRefs.current[lang] ?? null} />
                <button
                  type="button"
                  className="sl-copy"
                  aria-label="Replay the session"
                  onClick={() => engine.current?.play()}>
                  <Icon name="replay" className={styles.copyIco} />
                  <span className={styles.copyLabel}>Replay</span>
                </button>
              </div>
            </div>
            {languages.map((l) => (
              <div
                key={l}
                className={styles.codeWrap}
                role="tabpanel"
                id={`home-code-${l}`}
                aria-labelledby={`home-ctab-${l}`}
                tabIndex={0}
                hidden={l !== lang}>
                <pre className={styles.code}>
                  <code
                    ref={(element) => {
                      codeRefs.current[l] = element;
                    }}>
                    {samples[l].lines.map((line, n) => {
                      const state = l === lang ? view.lines.get(n + 1) : undefined;
                      return (
                        <span
                          key={n}
                          className={clsx(styles.ln, state === 'run' && styles.run, state === 'done' && styles.done)}
                          style={line.ind ? ({'--ind': line.ind} as CSSProperties) : undefined}>
                          {line.code}
                        </span>
                      );
                    })}
                  </code>
                </pre>
              </div>
            ))}
          </div>
          <div className={clsx(styles.pane, styles.vp)}>
            <div className={clsx(styles.paneBar, styles.vpBar)}>
              <span className="sl-hud">SA Viewport</span>
              <ul className={styles.chips} aria-label="Startup checks">
                {checks.map(([key, label]) => (
                  <li key={key} className={seq(key, styles.chip)}>
                    <i aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.vpMain}>
              <svg
                className={styles.vpSvg}
                viewBox="0 0 520 340"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                aria-label="Viewport showing point P1 at 0, 0, 0 and point P2 at 3, 4, 0, joined by a distance of 5.000">
                <defs>
                  <linearGradient id="home-vp-fade-g" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0" stopOpacity=".95" style={fadeStop} />
                    <stop offset=".7" stopOpacity=".35" style={fadeStop} />
                    <stop offset="1" stopOpacity="0" style={fadeStop} />
                  </linearGradient>
                  <mask id="home-vp-fade" style={{maskType: 'alpha'}}>
                    <rect x="0" y="40" width="520" height="300" fill="url(#home-vp-fade-g)" />
                  </mask>
                </defs>
                <g className={styles.vpGrid} mask="url(#home-vp-fade)">
                  <line x1="220.3" y1="338.9" x2="120.2" y2="103.1" />
                  <line x1="304.8" y1="318.3" x2="164.9" y2="98.1" className={styles.g0} />
                  <line x1="382.1" y1="299.4" x2="207.7" y2="93.2" />
                  <line x1="453.1" y1="282.1" x2="248.6" y2="88.6" />
                  <line x1="518.5" y1="266.2" x2="287.8" y2="84.1" />
                  <line x1="579" y1="251.5" x2="325.4" y2="79.8" />
                  <line x1="635.1" y1="237.8" x2="361.4" y2="75.7" />
                  <line x1="687.2" y1="225.1" x2="396.1" y2="71.8" />
                  <line x1="735.9" y1="213.2" x2="429.4" y2="68" />
                  <line x1="166.6" y1="323.5" x2="729.8" y2="194.5" />
                  <line x1="152.3" y1="278.6" x2="678" y2="171.1" className={styles.g0} />
                  <line x1="140.6" y1="242" x2="633.2" y2="150.9" />
                  <line x1="130.8" y1="211.4" x2="594.2" y2="133.2" />
                  <line x1="122.6" y1="185.5" x2="559.9" y2="117.7" />
                  <line x1="115.5" y1="163.4" x2="529.4" y2="104" />
                  <line x1="109.4" y1="144.2" x2="502.3" y2="91.7" />
                  <line x1="104" y1="127.4" x2="477.9" y2="80.7" />
                  <line x1="99.3" y1="112.6" x2="455.8" y2="70.8" />
                </g>
                <g>
                  <path className={styles.vpAxis} style={{stroke: 'var(--sl-dev-p2)'}} d="M265 255.6 L349.5 238.3" />
                  <path className={styles.vpAxis} style={{stroke: 'var(--sl-dev-0)'}} d="M265 255.6 L239.5 215.5" />
                  <path className={styles.vpAxis} style={{stroke: 'var(--sl-dev-n2)'}} d="M265 255.6 L261.8 170.8" />
                  <text className={styles.vpAxisT} x="358" y="241" style={{fill: 'var(--sl-ax-x)'}}>
                    X
                  </text>
                  <text className={styles.vpAxisT} x="228" y="210" style={{fill: 'var(--sl-ax-y)'}}>
                    Y
                  </text>
                  <text className={styles.vpAxisT} x="257" y="162" style={{fill: 'var(--sl-ax-z)'}}>
                    Z
                  </text>
                </g>
                <g className={seq('dim')}>
                  <path className={styles.leg} d="M265 255.6 L455.6 216.6 L346.3 130.3" />
                  <path className={styles.dimline} d="M265 255.6 L346.3 130.3" />
                  <path className={styles.dimtick} d="M258.3 251.2 L271.7 260 M339.6 125.9 L353 134.7" />
                  <rect className={styles.dimbox} x="258" y="155" width="58" height="22" rx="2" />
                  <text className={styles.dimtxt} x="287" y="170.5" textAnchor="middle" ref={dimRef}>
                    5.000
                  </text>
                </g>
                <g className={seq('p1', styles.ptg)}>
                  <circle className={styles.ptHalo} cx="265" cy="255.6" r="12" />
                  <circle className={styles.ptCore} cx="265" cy="255.6" r="4.5" />
                  <text className={styles.ptLbl} x="252" y="282" textAnchor="end">
                    P1 <tspan>(0, 0, 0)</tspan>
                  </text>
                </g>
                <g className={seq('p2', styles.ptg)}>
                  <circle className={styles.ptHalo} cx="346.3" cy="130.3" r="12" />
                  <circle className={styles.ptCore} cx="346.3" cy="130.3" r="4.5" />
                  <text className={styles.ptLbl} x="362" y="126">
                    P2 <tspan>(3, 4, 0)</tspan>
                  </text>
                </g>
              </svg>
              <div className={styles.tree}>
                <p className="sl-hud">Tree</p>
                <ul>
                  <li className={styles.tiEmpty}>Empty job</li>
                  <li className={seq('col', styles.ti)}>
                    <span>
                      <i className={styles.tg} aria-hidden="true" />
                      Inspection
                    </span>
                    <ul>
                      <li className={seq('grp', styles.ti)}>
                        <span>
                          <i className={clsx(styles.tg, styles.grp)} aria-hidden="true" />
                          Points
                        </span>
                        <ul>
                          <li className={seq('p1', styles.ti)}>
                            <span>
                              <i className={clsx(styles.tg, styles.pnt)} aria-hidden="true" />
                              P1
                            </span>
                          </li>
                          <li className={seq('p2', styles.ti)}>
                            <span>
                              <i className={clsx(styles.tg, styles.pnt)} aria-hidden="true" />
                              P2
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.console} role="group" aria-label="Session log">
              <p className={styles.prompt}>
                <span className={styles.src}>&gt;</span>
                <span>{sample.run}</span>
                <span className={styles.cur} aria-hidden="true" />
              </p>
              <p className={seq('p1')}>
                <span className={styles.src}>SA</span>Inspection::Points::P1 (0.000, 0.000, 0.000)
              </p>
              <p className={seq('p2')}>
                <span className={styles.src}>SA</span>Inspection::Points::P2 (3.000, 4.000, 0.000)
              </p>
              <p className={seq('out')}>
                <span className={styles.src}>stdout</span>
                <span className={styles.okText}>Distance: 5.000</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sessionFoot}>
          <Link className={clsx('sl-textlink', styles.textlink)} to="/docs/getting-started/first-request">
            Run Your First MP
            <Icon name="arrow" />
          </Link>
          <p>
            A shorter first call also exists: <code className="sl-num">GetWorkingDirectoryAsync()</code>
          </p>
        </div>
      </div>
    </section>
  );
}
