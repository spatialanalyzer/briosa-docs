import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import BrandImage from '@site/src/components/BrandImage';
import grpcVersions from '@site/grpc_versions.json';
import dotnetVersions from '@site/dotnet_versions.json';
import pythonVersions from '@site/python_versions.json';
import javascriptVersions from '@site/javascript_versions.json';
import targets from '@site/plugins/api-reference/targets.json';
import '@site/src/components/ApiReference/styles.css';

// Later server releases that serve the newest gRPC snapshot's contract unchanged.
const sameServerContract: string[] = (targets as {sameContract?: Record<string, Record<string, string[]>>}).sameContract?.grpc?.[grpcVersions[0]] ?? [];

const references = [
  {
    release: ['Server', grpcVersions[0]],
    same: sameServerContract,
    product: 'server',
    title: 'gRPC API',
    description:
      'Services, MP operations, protobuf contracts, discovery, and execution outcomes.',
    to: '/api/grpc',
  },
  {
    release: ['Client', dotnetVersions[0]],
    same: [],
    product: 'dotnet',
    title: '.NET API',
    description:
      'Client lifecycle, methods, results, exceptions, timeouts, and cancellation for .NET.',
    to: '/api/dotnet',
  },
  {
    release: ['Client', pythonVersions[0]],
    same: [],
    product: 'python',
    title: 'Python API',
    description:
      'Asynchronous client lifecycle, methods, results, errors, timeouts, and cancellation.',
    to: '/api/python',
  },
  {
    release: ['Client', javascriptVersions[0]],
    same: [],
    product: 'js',
    title: 'JavaScript and TypeScript API',
    description:
      'Client lifecycle, methods, results, errors, and cancellation for Node.js applications.',
    to: '/api/javascript',
  },
] as const;

export default function ApiReference(): ReactNode {
  return (
    <Layout
      title="SpatialAnalyzer API Reference"
      description="Explore Briosa APIs for SpatialAnalyzer automation: gRPC services and .NET, Python, and JavaScript/TypeScript client libraries.">
      <main className="api-landing">
        <header className="api-landing-head">
          <p className="sl-kicker sl-hud">Briosa for SpatialAnalyzer</p>
          <Heading as="h1">API Reference</Heading>
          <p className="api-landing-lead">
            Choose the product you are using. Each API reference follows that
            product's independent release history, while the main documentation
            remains focused on the currently recommended Briosa experience.
          </p>
        </header>

        <ul className="api-product-grid">
          {references.map((reference) => (
            <li className="api-product-card" key={reference.to}>
              <span className="sl-brk" aria-hidden="true" />
              <BrandImage product={reference.product} />
              <ul className="api-applies" aria-label={`${reference.title} Versions`}>
                <li className="sl-chip"><i>{reference.release[0]}</i>{' '}{reference.release[1]}</li>
                {reference.same.length > 0 && <li className="sl-chip"><i>Same Contract</i>{' '}{reference.same.join(' · ')}</li>}
                <li className="sl-chip"><i>SA</i>{' '}2024 · 2026</li>
              </ul>
              <Heading as="h2" className="api-product-title">
                <Link className="api-card-link" to={reference.to}>{reference.title}</Link>
              </Heading>
              <p>{reference.description}</p>
              <span className="sl-textlink" aria-hidden="true">
                Open Reference
                <svg className="sl-ico" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
              </span>
            </li>
          ))}
        </ul>

        <div className="api-landing-notes markdown">
          <section className="api-landing-section">
            <Heading as="h2">Building for an Earlier SpatialAnalyzer</Heading>
            <p>
              Each reference starts by asking which SpatialAnalyzer version you build
              for, and every documented version keeps its own complete reference.
              Every method page opens with a SpatialAnalyzer Compatibility table and
              links to its release history, which shows the exact contract each
              Briosa release published for each SpatialAnalyzer version.
            </p>
          </section>
          <section className="api-landing-section">
            <Heading as="h2">How Versions Fit Together</Heading>
            <p>
              The gRPC server and each client library have their own version. For
              each SpatialAnalyzer version, a reference shows the newest product
              release that documents it, at an address that stays the same across
              releases.{sameServerContract.length > 0 && <> {sameServerContract.length > 1 ? 'Servers' : 'Server'}{' '}
              {sameServerContract.join(' and ')} {sameServerContract.length > 1 ? 'serve' : 'serves'} the
              Server {grpcVersions[0]} contract unchanged, so its gRPC reference describes
              {sameServerContract.length > 1 ? ' them' : ' it'} too.</>} The SpatialAnalyzer selector carries your target across API
              references. Reviewed availability and qualifications remain in the{' '}
              <Link to="/mp-command-catalog">MP Command Catalog</Link>.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
