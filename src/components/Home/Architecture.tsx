import {useEffect, useRef, type ReactNode} from 'react';
import clsx from 'clsx';

import styles from '@site/src/pages/index.module.css';
import {CaliperMark, ChannelHead, CopyButton} from './parts';
import Icon from './Icon';
import {createPhotonFlow} from './photonFlow';

const grpcurl = "grpcurl -plaintext -d '{}' 127.0.0.1:50051 briosa.FileOperations/GetWorkingDirectory";

export default function Architecture(): ReactNode {
  const arch = useRef<HTMLDivElement>(null);
  const lanes = useRef<SVGSVGElement>(null);
  const command = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!arch.current || !lanes.current) return undefined;
    const flow = createPhotonFlow(arch.current, lanes.current, {
      lane: styles.lane,
      req: styles.req,
      res: styles.res,
      laneLabel: styles.laneLabel,
      photon: styles.ph,
      photonGlow: styles.phGlow,
      hit: styles.hit,
      tick: styles.tick,
    });
    return () => flow.destroy();
  }, []);

  return (
    <section className={clsx(styles.chan, styles.alt)} aria-labelledby="home-arch-title">
      <div className="sl-rule" aria-hidden="true" />
      <div className={styles.wrap}>
        <ChannelHead kicker="Architecture" id="home-arch-title" title="One Deliberate Boundary">
          Clients see ordinary gRPC. Briosa owns process supervision, serialized SDK execution, and explicit
          outcomes.
        </ChannelHead>
        <div className={styles.arch} ref={arch}>
          <svg className={styles.archSvg} ref={lanes} aria-hidden="true" />
          <ol className={styles.archSteps}>
            <li className={styles.step}>
              <div className={styles.stepNode}>
                <div className={clsx(styles.node, styles.nodeClients)} data-node="client">
                  <span className={clsx(styles.mono, styles.monoCs)} data-src="0">
                    C#
                  </span>
                  <span className={clsx(styles.mono, styles.monoPy)} data-src="1">
                    Py
                  </span>
                  <span className={clsx(styles.mono, styles.monoTs)} data-src="2">
                    TS
                  </span>
                </div>
              </div>
              <div>
                <p className={clsx('sl-hud', styles.stepN)}>01</p>
                <h3>Your Client</h3>
                <p className={styles.cap}>.NET, JavaScript, Python, or any gRPC stack</p>
              </div>
            </li>
            <li className={styles.step}>
              <div className={styles.stepNode}>
                <div className={styles.node} data-node="host">
                  <span className="sl-brk" aria-hidden="true" />
                  <CaliperMark />
                </div>
              </div>
              <div>
                <p className={clsx('sl-hud', styles.stepN)}>02</p>
                <h3>Briosa Host</h3>
                <p className={styles.cap}>Typed contracts, policy, discovery, and diagnostics</p>
              </div>
            </li>
            <li className={styles.step}>
              <div className={styles.stepNode}>
                <div className={clsx(styles.node, styles.gate)} data-node="worker">
                  <Icon name="gate" />
                </div>
              </div>
              <div>
                <p className={clsx('sl-hud', styles.stepN)}>03</p>
                <h3>Supervised Worker</h3>
                <p className={styles.cap}>One serialized STA and one active SDK connection</p>
              </div>
            </li>
            <li className={styles.step}>
              <div className={styles.stepNode}>
                <div className={styles.node} data-node="sa">
                  <Icon name="reticle" />
                </div>
              </div>
              <div>
                <p className={clsx('sl-hud', styles.stepN)}>04</p>
                <h3>SpatialAnalyzer</h3>
                <p className={styles.cap}>Separately installed, running, and licensed</p>
              </div>
            </li>
          </ol>
        </div>
        <ul className={clsx('sl-hud', styles.archLegend)} aria-hidden="true">
          <li>
            <i />
            Typed Request over Loopback gRPC
          </li>
          <li>
            <i className={styles.legendRes} />
            Explicit Outcome
          </li>
          <li>One Call at a Time through the Worker</li>
        </ul>
        <div className={styles.grpc}>
          <div>
            <h3>Plain gRPC Underneath</h3>
            <p>
              Any gRPC language can call <code>briosa.FileOperations/<wbr />GetWorkingDirectory</code> directly. The
              first-party clients add typed helpers on top.
            </p>
          </div>
          <div className={clsx('sl-term', styles.term)}>
            <div className="sl-term__bar">
              <span className="sl-hud sl-term__label">grpcurl</span>
              <span className="sl-term__target sl-hud">127.0.0.1:50051</span>
              <CopyButton label="Copy grpcurl command" text={() => grpcurl} source={() => command.current} />
            </div>
            <div className="sl-term__panel" tabIndex={0} role="region" aria-label="grpcurl command">
              <code ref={command}>
                <span className={styles.pr} aria-hidden="true">
                  &gt;
                </span>
                grpcurl -plaintext -d <span className="sl-tk-s">'{'{}'}'</span> 127.0.0.1:50051{' '}
                <span className={styles.pk}>briosa.FileOperations/GetWorkingDirectory</span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
