import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

const references = [
  {
    eyebrow: 'Briosa Server',
    title: 'gRPC API',
    description:
      'Services, MP operations, protobuf contracts, discovery, and execution outcomes.',
    to: '/api/grpc',
  },
  {
    eyebrow: 'First-Party Client',
    title: '.NET API',
    description:
      'Client lifecycle, methods, results, exceptions, timeouts, and cancellation for .NET.',
    to: '/api/dotnet',
  },
  {
    eyebrow: 'First-Party Client',
    title: 'Python API',
    description:
      'Asynchronous client lifecycle, methods, results, errors, timeouts, and cancellation.',
    to: '/api/python',
  },
  {
    eyebrow: 'First-Party Client',
    title: 'JavaScript and TypeScript API',
    description:
      'Client lifecycle, methods, results, errors, and cancellation for Node.js applications.',
    to: '/api/javascript',
  },
];

export default function ApiReference(): ReactNode {
  return (
    <Layout
      title="API Reference"
      description="Choose the Briosa gRPC or first-party client API reference.">
      <main className="container margin-vert--lg">
        <Heading as="h1">API Reference</Heading>
        <p>
          Choose the product you are using. Each API reference follows that
          product's independent release history, while the main documentation
          remains focused on the currently recommended Briosa experience.
        </p>

        <div className="catalog-group-grid">
          {references.map((reference) => (
            <Link className="catalog-group-card" to={reference.to} key={reference.to}>
              <span className="catalog-group-kicker">{reference.eyebrow}</span>
              <strong>{reference.title}</strong>
              <p>{reference.description}</p>
              <span className="catalog-group-link">Open Reference →</span>
            </Link>
          ))}
        </div>

        <Heading as="h2">How Versions Fit Together</Heading>
        <p>
          The gRPC server and each client library have their own version. A
          reference version selector therefore applies only to the product in
          that section. SpatialAnalyzer compatibility remains organized by
          exact release in the{' '}
          <Link to="/mp-command-catalog">MP Command Catalog</Link>.
        </p>
      </main>
    </Layout>
  );
}
