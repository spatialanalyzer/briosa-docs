import {useEffect, useRef, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useColorMode} from '@docusaurus/theme-common';

import styles from '@site/src/pages/index.module.css';
import {createBladeScan, type BladeScan} from './bladeScan';
import {CopyButton, useTabs} from './parts';
import {packagesFor, targets, versions} from './data';
import Icon from './Icon';

const pk = packagesFor(targets.sa2026);
const installs = [
  {
    id: 'dotnet',
    label: '.NET',
    command: `dotnet add package ${pk.nuget} --version ${versions.clients}`,
    code: (
      <>
        dotnet add package <span className={styles.pk}>{pk.nuget}</span> --version {versions.clients}
      </>
    ),
  },
  {
    id: 'py',
    label: 'Python',
    command: `python -m pip install ${pk.pypi}==${versions.clients}`,
    code: (
      <>
        python -m pip install <span className={styles.pk}>{pk.pypi}</span>=={versions.clients}
      </>
    ),
  },
  {
    id: 'npm',
    label: 'npm',
    command: `npm install briosa@npm:${pk.npm}@${versions.clients}`,
    code: (
      <>
        npm install briosa@npm:<span className={styles.pk}>{pk.npm}</span>@{versions.clients}
      </>
    ),
  },
] as const;

function InstallTerminal(): ReactNode {
  const {selected, tabProps} = useTabs(installs.length);
  const codes = useRef<(HTMLElement | null)[]>([]);
  return (
    <div className={clsx('sl-term', styles.term)}>
      <div className="sl-term__bar">
        <div className="sl-tabs" role="tablist" aria-label="Install a client package">
          {installs.map((install, i) => (
            <button key={install.id} className="sl-tab" {...tabProps(i, `home-itab-${install.id}`, `home-ipanel-${install.id}`)}>
              {install.label}
            </button>
          ))}
        </div>
        <span className="sl-term__target sl-hud">SA {targets.sa2026}</span>
        <CopyButton
          label="Copy install command"
          text={() => installs[selected].command}
          source={() => codes.current[selected] ?? null}
        />
      </div>
      {installs.map((install, i) => (
        <div
          key={install.id}
          className="sl-term__panel"
          role="tabpanel"
          id={`home-ipanel-${install.id}`}
          aria-labelledby={`home-itab-${install.id}`}
          tabIndex={0}
          hidden={i !== selected}>
          <code
            ref={(element) => {
              codes.current[i] = element;
            }}>
            <span className={styles.pr} aria-hidden="true">
              &gt;
            </span>
            {install.code}
          </code>
        </div>
      ))}
    </div>
  );
}

/** The decorative scan stage. Every readout on it is sample data. */
function ScanStage(): ReactNode {
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const x = useRef<HTMLSpanElement>(null);
  const y = useRef<HTMLSpanElement>(null);
  const z = useRef<HTMLSpanElement>(null);
  const sweep = useRef<HTMLSpanElement>(null);
  const points = useRef<HTMLSpanElement>(null);
  const scan = useRef<BladeScan | null>(null);
  const {colorMode} = useColorMode();

  useEffect(() => {
    if (!stage.current || !canvas.current) return undefined;
    scan.current = createBladeScan(
      stage.current,
      canvas.current,
      {x: x.current, y: y.current, z: z.current, sweep: sweep.current, points: points.current},
      {dragging: styles.dragging},
    );
    return () => {
      scan.current?.destroy();
      scan.current = null;
    };
  }, []);

  // Docusaurus sets data-theme before this re-renders, so the tokens are already current.
  useEffect(() => {
    scan.current?.restyle();
  }, [colorMode]);

  return (
    <div className={styles.stage} ref={stage} aria-hidden="true">
      <canvas className={styles.scan} ref={canvas} />
      <div className={clsx('sl-brk', styles.frame)} />
      <div className={clsx('sl-hud', styles.hud, styles.hudTop)}>
        <span>SA {targets.sa2026}</span>
        <span className={styles.hudOn}>SDK Connected</span>
        <span>
          READY_FOR_MP <b>TRUE</b>
        </span>
      </div>
      <div className={clsx('sl-hud', styles.hud, styles.hudRead)}>
        <span>SMR · mm</span>
        <span className={clsx('sl-num', styles.dro)}>
          <span>
            <i>X</i>
            <span ref={x}>331.512</span>
          </span>
          <span>
            <i>Y</i>
            <span ref={y}>118.904</span>
          </span>
          <span>
            <i>Z</i>
            <span ref={z}>201.336</span>
          </span>
        </span>
        <span className={styles.sweep}>
          Sweep{' '}
          <span className="sl-num" ref={sweep}>
            100%
          </span>
        </span>
      </div>
      <div className={clsx('sl-hud', styles.hud, styles.hudLegend)}>
        <div className={styles.legendCap}>
          <span>Deviation</span>
          <span>
            Sample Data · <span ref={points}>14,914</span> pts
          </span>
        </div>
        <div className={styles.legendBar} />
        <div className={clsx('sl-num', styles.legendTicks)}>
          <span>−0.10</span>
          <span>0</span>
          <span>+0.10 mm</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero(): ReactNode {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={clsx(styles.wrap, styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span className={styles.pulse} aria-hidden="true" />
            Server {versions.server} · Clients {versions.clients}
          </p>
          <h1 id="home-hero-title" className={styles.heroTitle}>
            <span className={styles.heroLine}>From code</span>{' '}
            <span className={styles.heroLine}>
              to coordinates<span className={styles.dot}>.</span>
            </span>
          </h1>
          <p className={styles.slogan}>SpatialAnalyzer integration, simplified.</p>
          <p className={styles.lead}>
            Briosa is an open-source gRPC bridge to the SpatialAnalyzer SDK. Automate measurement workflows from C#,
            Python, or TypeScript with strongly typed MP commands and a language-neutral API.
          </p>
          <div className={styles.ctas}>
            <Link className="sl-btn sl-btn--solid" to="/install">
              Install Briosa
              <Icon name="arrow" />
            </Link>
            <Link className="sl-btn sl-btn--ghost" to="/api">
              <span className="sl-brk" aria-hidden="true" />
              Explore the API
            </Link>
          </div>
          <InstallTerminal />
          <p className={styles.note}>
            <Icon name="info" />
            <span>
              MP execution requires a separately installed, licensed, and running SpatialAnalyzer with its matching SDK.
            </span>
          </p>
        </div>
        <ScanStage />
      </div>
    </section>
  );
}
