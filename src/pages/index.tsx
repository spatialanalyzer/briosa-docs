import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const products = [
  {
    release: 'Installer 0.2.1',
    title: 'Briosa Installer',
    detail: 'Install, update, verify, and repair Briosa server packages for your exact SpatialAnalyzer release.',
    href: '/install',
    action: 'Install Briosa',
  },
  {
    release: 'Server 0.6.1',
    title: 'Briosa Server',
    detail: 'Run read-only and mutating MP commands through a strongly typed local gRPC API.',
    href: '/api/grpc',
    action: 'Explore the Server API',
  },
  {
    release: 'Included with Server 0.6.1',
    title: 'Briosa Control Center',
    detail: 'Monitor server status and activity, and manage a local server and its SDK from the Windows tray.',
    href: '/docs/deployment/control-center',
    action: 'Open the Control Center Guide',
  },
];

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
    service: 'ConstructionOperations',
    rpc: 'ConstructCollection',
    detail: 'Create a named collection, with optional folder and default-collection settings.',
    href: '/api/grpc/construction-operations-collections#construct-collection',
  },
  {
    service: 'ConstructionOperations',
    rpc: 'GetActiveCollectionName',
    detail: 'Read the name of the currently active collection.',
    href: '/api/grpc/construction-operations-collections#get-active-collection-name',
  },
  {
    service: 'UtilityOperations',
    rpc: 'SetActiveUnits',
    detail: 'Set length, angular, and temperature units, including inch-fraction display settings.',
    href: '/api/grpc/utility-operations#set-active-units',
  },
  {
    service: 'UtilityOperations',
    rpc: 'GetWorkingFrameProperties',
    detail: 'Read the current frame name, collection, and typed working frame.',
    href: '/api/grpc/utility-operations#get-working-frame-properties',
  },
];

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Briosa Documentation</p>
            <Heading as="h1">SpatialAnalyzer integration, simplified.</Heading>
            <p className={styles.lead}>
              An open-source gRPC bridge to the SpatialAnalyzer SDK.
              Automate measurement workflows with strongly typed MP commands
              through a language-neutral API.
            </p>
            <div className={styles.actions}>
              <Link
                className="button button--primary button--lg"
                to="/install">
                Install Briosa
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/api">
                Explore the API
              </Link>
            </div>
            <p className={styles.heroNote}>
              MP execution requires separately installed, licensed, and running
              SpatialAnalyzer with its matching SDK.
            </p>
          </div>
          <aside className={styles.targetCard} aria-label="Developer quick start">
            <img
              className={styles.heroLogo}
              src={useBaseUrl('/brand/logos/briosa-stacked-inverse.svg')}
              alt="Briosa"
              width={704}
              height={568}
            />
            <p className={styles.cardLabel}>Supported SpatialAnalyzer</p>
            <p className={styles.targetVersion}>SA 2026.1.0529.7</p>
            <nav className={styles.heroLinks} aria-label="Start Building with Briosa">
              <Link to="/docs/getting-started/first-request">
                <strong>Run Your First MP →</strong>
                <span>C#, Python, and TypeScript examples.</span>
              </Link>
              <Link to="/mp-command-catalog/commands">
                <strong>Find an MP Command →</strong>
                <span>Arguments, results, and support status.</span>
              </Link>
              <Link to="/api">
                <strong>Explore the Client APIs →</strong>
                <span>.NET, Python, and JavaScript source references.</span>
              </Link>
            </nav>
          </aside>
        </div>
      </div>
    </header>
  );
}

function Products() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Available Products</p>
          <Heading as="h2">Install, Run, and Connect</Heading>
          <p>
            Released Windows tools for SpatialAnalyzer 2026.1.0529.7.
            The client, server, SDK, and SpatialAnalyzer run on the same machine.
          </p>
        </div>
        <div className={styles.operationGrid}>
          {products.map((product) => (
            <Link className={styles.operationCard} to={product.href} key={product.title}>
              <span>{product.release}</span>
              <Heading as="h3">{product.title}</Heading>
              <p>{product.detail}</p>
              <strong>{product.action} →</strong>
            </Link>
          ))}
        </div>
        <div className={styles.availabilityNotes}>
          <p>
            First-party clients for .NET, Python, and JavaScript/TypeScript have
            implemented source APIs. Their NuGet, PyPI, and npm packages are not
            yet published. Browse the <Link to="/api">client references</Link>{' '}
            for source-build guidance, or use standard gRPC tooling.
          </p>
          <p>
            Support for SA 2024.1.0508.5 is planned. Its{' '}
            <Link to="/mp-command-catalog/2024.1.0508.5/overview">reviewed command catalog</Link>{' '}
            is available; a server for that target has not been released.
          </p>
          <p>
            Briosa ships v0.x releases while validation continues. See{' '}
            <Link to="/docs/releases">Release Status</Link> for availability and
            validation limits.
          </p>
        </div>
      </div>
    </section>
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
          <p className={styles.kicker}>MP Operations</p>
          <Heading as="h2">Explore MP Commands</Heading>
          <p>
            These examples are part of the read and write operations in Server
            0.5.1 for SA 2026.1.0529.7. Each reference explains the inputs,
            results, and validation status for that command.
          </p>
        </div>
        <div className={styles.operationGrid}>
          {operations.map((operation) => (
            <Link className={styles.operationCard} to={operation.href} key={operation.rpc}>
              <span>{operation.service}</span>
              <Heading as="h3">{operation.rpc}</Heading>
              <p>{operation.detail}</p>
              <strong>View Operation →</strong>
            </Link>
          ))}
        </div>
        <p className={styles.availabilityNotes}>
          <Link to="/api/grpc">Browse the Full gRPC API</Link>
          {' · '}
          <Link to="/mp-command-catalog/commands">Search the MP Command Catalog</Link>
        </p>
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
      title="SpatialAnalyzer Integration, Simplified"
      description="Briosa exposes reviewed SpatialAnalyzer MP operations through strongly typed, language-neutral gRPC contracts.">
      <HomepageHeader />
      <main>
        <Products />
        <Architecture />
        <Operations />
        <Disclaimer />
      </main>
    </Layout>
  );
}
