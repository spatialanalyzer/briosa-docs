import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';

import Architecture from '@site/src/components/Home/Architecture';
import Catalog from '@site/src/components/Home/Catalog';
import {Independence, StartTiles} from '@site/src/components/Home/Closing';
import ExactTargets from '@site/src/components/Home/ExactTargets';
import Hero from '@site/src/components/Home/Hero';
import LiveSession from '@site/src/components/Home/LiveSession';
import Products from '@site/src/components/Home/Products';

import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title="SpatialAnalyzer Automation and gRPC API"
      description="Automate SpatialAnalyzer with Briosa, an open-source gRPC bridge. Explore C#, Python, and TypeScript examples, supported MP commands, and Windows setup.">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Briosa',
            url: 'https://briosa.dev/',
          })}
        </script>
      </Head>
      <main className={styles.home}>
        <Hero />
        <LiveSession />
        <Architecture />
        <Products />
        <ExactTargets />
        <Catalog />
        <StartTiles />
        <Independence />
      </main>
    </Layout>
  );
}
