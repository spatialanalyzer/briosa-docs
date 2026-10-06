import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {readTarget} from './context';
import type {FamilyIndex as Data} from './types';
import './styles.css';

// Entry point for one API family: readers choose the SpatialAnalyzer version
// they build for, including earlier versions, before reading any reference.
export default function FamilyIndex({index}: {index: Data}): React.JSX.Element {
  const [remembered, setRemembered] = useState<string | null>(null);
  useEffect(() => { setRemembered(readTarget()); }, []);
  return <Layout title={`${index.label} Reference`} description={`Choose the SpatialAnalyzer version you build for to read the Briosa ${index.label} reference that documents it.`}>
    <main className="container margin-vert--lg api-family-index">
      <Heading as="h1">{index.label}</Heading>
      <p>
        Choose the SpatialAnalyzer version you build for. Each version opens the
        newest Briosa {index.releaseLabel.toLowerCase()} release that documents it,
        with the methods available for that exact target. Every method page also
        lists its compatibility with each SpatialAnalyzer version and links to its
        full release history.
      </p>
      <div className="catalog-group-grid briosa-reference-grid">
        {index.targets.map((t, i) => <div className="catalog-group-card api-target-card" key={t.target}>
          <span className="catalog-group-kicker">{i === 0 ? 'Latest SpatialAnalyzer' : 'Earlier SpatialAnalyzer'}{remembered === t.target ? ' · Last Used' : ''}</span>
          <strong>SA {t.target}</strong>
          <p>Briosa {index.releaseLabel} {t.release} · {t.methods.toLocaleString('en-US')} documented MP methods</p>
          <Link className="catalog-group-link" to={t.href}>Open the SA {t.target} Reference →</Link>
          <Link className="api-target-catalog" to={`/mp-command-catalog/${t.target}/overview`}>MP Command Catalog for SA {t.target}</Link>
        </div>)}
      </div>
      <Heading as="h2" id="earlier-releases">Earlier Briosa {index.releaseLabel} Releases</Heading>
      <p>
        Guides and group notes from earlier releases remain at their release
        addresses. Method contracts from every release are on each method's
        history page, reached from its SpatialAnalyzer Compatibility table.
      </p>
      <table className="api-release-table">
        <thead><tr><th>Briosa {index.releaseLabel}</th><th>Documented SpatialAnalyzer Versions</th></tr></thead>
        <tbody>{index.releases.map((r) => <tr key={r.release}>
          <td>{r.release}</td>
          <td>{r.targets.map((t, i) => <React.Fragment key={t.target}>{i > 0 && ' · '}<Link to={t.href}>SA {t.target}{t.current ? ' (Current Reference)' : ''}</Link></React.Fragment>)}</td>
        </tr>)}</tbody>
      </table>
    </main>
  </Layout>;
}
