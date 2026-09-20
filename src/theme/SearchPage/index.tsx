import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import SearchPage from '@theme-original/SearchPage';

export default function SearchPageWithIndexingPolicy(): ReactNode {
  return (
    <>
      <SearchPage />
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
    </>
  );
}
