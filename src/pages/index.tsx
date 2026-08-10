import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const operations = [
  {
    service: 'FileOperations',
    rpc: 'GetWorkingDirectory',
    detail: 'Read the current SpatialAnalyzer working directory.',
    href: '/api/grpc/get-working-directory',
  },
  {
    service: 'AnalysisOperations',
    rpc: 'GetNumberOfCollections',
    detail: 'Read the number of collections in the active SA job.',
    href: '/api/grpc/get-number-of-collections',
  },
  {
    service: 'AnalysisOperations',
    rpc: 'GetIthCollectionName',
    detail: 'Resolve a zero-based collection index to its name.',
    href: '/api/grpc/get-ith-collection-name',
  },
  {
    service: 'ConstructionOperations',
    rpc: 'GetActiveCollectionName',
    detail: 'Read the name of the currently active collection.',
    href: '/api/grpc',
  },
  {
    service: 'UtilityOperations',
    rpc: 'GetActiveUnits',
    detail: 'Read the active length, angular, and temperature units.',
    href: '/api/grpc',
  },
  {
    service: 'UtilityOperations',
    rpc: 'GetWorkingFrameProperties',
    detail: 'Read the current frame name, collection, and typed working frame.',
    href: '/api/grpc',
  },
];

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Open-source · Apache-2.0</p>
            <Heading as="h1">SpatialAnalyzer MPs Through a Clear gRPC Boundary</Heading>
            <p className={styles.lead}>
              Briosa turns reviewed SpatialAnalyzer MP operations into strongly
              typed, language-neutral RPCs while keeping COM state isolated in
              a supervised Windows worker.
            </p>
            <div className={styles.actions}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started/prerequisites">
                Start with Briosa
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/api">
                Explore operations
              </Link>
            </div>
          </div>
          <aside className={styles.targetCard} aria-label="Current support summary">
            <span className={styles.liveDot} aria-hidden="true" />
            <p className={styles.cardLabel}>Current Exact Target</p>
            <p className={styles.targetVersion}>SA 2026.1.0529.7</p>
            <dl>
              <div>
                <dt>Protocol</dt>
                <dd>briosa</dd>
              </div>
              <div>
                <dt>Surface</dt>
                <dd>6 read-only MPs</dd>
              </div>
              <div>
                <dt>Default Binding</dt>
                <dd>Loopback</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </header>
  );
}

function Architecture() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>One Deliberate Boundary</p>
          <Heading as="h2">Built to Contain the Hard Parts</Heading>
          <p>
            Clients see ordinary gRPC. Briosa owns process supervision,
            serialized SDK execution, and explicit outcomes.
          </p>
        </div>
        <div className={styles.flow} aria-label="Briosa request flow">
          <div className={styles.flowNode}>
            <span>01</span>
            <strong>Your Client</strong>
            <small>.NET, JavaScript, Python, or any gRPC stack</small>
          </div>
          <div className={styles.flowArrow} aria-hidden="true">→</div>
          <div className={styles.flowNode}>
            <span>02</span>
            <strong>Briosa Host</strong>
            <small>Typed contracts, policy, discovery, and diagnostics</small>
          </div>
          <div className={styles.flowArrow} aria-hidden="true">→</div>
          <div className={styles.flowNode}>
            <span>03</span>
            <strong>Supervised Worker</strong>
            <small>One serialized STA and one active SDK connection</small>
          </div>
          <div className={styles.flowArrow} aria-hidden="true">→</div>
          <div className={styles.flowNode}>
            <span>04</span>
            <strong>SpatialAnalyzer</strong>
            <small>Separately installed, running, and licensed</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function Operations() {
  return (
    <section className={styles.operationsSection}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Small, Reviewed Surface</p>
          <Heading as="h2">Explore Six Read-Only Operations</Heading>
          <p>
            Each supported MP is a handwritten vertical slice with a protobuf
            contract, server and worker mapping, tests, policy metadata, and
            documentation.
          </p>
        </div>
        <div className={styles.operationGrid}>
          {operations.map((operation) => (
            <Link className={styles.operationCard} to={operation.href} key={operation.rpc}>
              <span>{operation.service}</span>
              <Heading as="h3">{operation.rpc}</Heading>
              <p>{operation.detail}</p>
              <strong>Read Operation →</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className={styles.disclaimer}>
      <div className="container">
        <div>
          <Heading as="h2">Independent by Design</Heading>
          <p>
            SpatialAnalyzer and the SA SDK are Hexagon products. Briosa is an
            independent open-source project and is not affiliated with,
            endorsed by, or supported by Hexagon.
          </p>
        </div>
        <Link to="/docs/concepts/exact-targets">Understand exact targets →</Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="A gRPC Bridge for SpatialAnalyzer MPs"
      description="Briosa exposes reviewed SpatialAnalyzer MP operations through strongly typed, language-neutral gRPC contracts.">
      <HomepageHeader />
      <main>
        <Architecture />
        <Operations />
        <Disclaimer />
      </main>
    </Layout>
  );
}
