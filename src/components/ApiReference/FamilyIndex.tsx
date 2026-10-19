import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import BrandImage from '@site/src/components/BrandImage';
import {readTarget, sameContractNote} from './context';
import FamilySwitch from './FamilySwitch';
import type {FamilyIndex as Data} from './types';
import './styles.css';

const products = {grpc: 'server', dotnet: 'dotnet', python: 'python', javascript: 'js'} as const;
const families = {grpc: '/api/grpc', dotnet: '/api/dotnet', python: '/api/python', javascript: '/api/javascript'};
const arrow = <svg className="sl-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>;

// Entry point for one API family: readers choose the SpatialAnalyzer version
// they build for, including earlier versions, before reading any reference.
export default function FamilyIndex({index}: {index: Data}): React.JSX.Element {
  const [remembered, setRemembered] = useState<string | null>(null);
  useEffect(() => { setRemembered(readTarget()); }, []);
  return <Layout title={`${index.label} Reference`} description={`Choose the SpatialAnalyzer version you build for to read the Briosa ${index.label} reference that documents it.`}>
    <main className="api-landing api-family-index">
      <header className="api-landing-head">
        <FamilySwitch family={index.family} links={families} label="API Family" />
        <BrandImage product={products[index.family as keyof typeof products] ?? 'server'} />
        <Heading as="h1">{index.label}</Heading>
        <p className="api-landing-lead">
          Choose the SpatialAnalyzer version you build for. Each version opens the
          newest Briosa {index.releaseLabel.toLowerCase()} release that documents it,
          with the methods available for that exact target. Every method page also
          lists its compatibility with each SpatialAnalyzer version and links to its
          full release history.
        </p>
      </header>
      <ul className="api-target-grid">
        {index.targets.map((t, i) => <li className="api-target-card" key={t.target}>
          <p className="api-target-kicker sl-hud">{i === 0 ? 'Latest SpatialAnalyzer' : 'Earlier SpatialAnalyzer'}{remembered === t.target && <span className="api-tag">Last Used</span>}</p>
          <h2 className="api-target-title"><Link className="api-card-link" to={t.href}><span className="sl-hud">SA</span>{t.target}</Link></h2>
          <dl className="api-target-facts">
            <div><dt className="sl-hud">Briosa {index.releaseLabel}</dt><dd>{t.release}{sameContractNote(index.sameContract, t.release) && <small>{sameContractNote(index.sameContract, t.release)}</small>}</dd></div>
            <div><dt className="sl-hud">Documented MP Methods</dt><dd>{t.methods.toLocaleString('en-US')}</dd></div>
          </dl>
          <span className="sl-textlink api-target-open" aria-hidden="true">Open the SA {t.target} Reference{arrow}</span>
          <Link className="api-target-catalog" to={`/mp-command-catalog/${t.target}/overview`}>MP Command Catalog for SA {t.target}</Link>
        </li>)}
      </ul>
      <section className="api-landing-section markdown" aria-labelledby="earlier-releases">
        <Heading as="h2" id="earlier-releases">Earlier Briosa {index.releaseLabel} Releases</Heading>
        <p>
          Guides and group notes from earlier releases remain at their release
          addresses. Method contracts from every release are on each method's
          history page, reached from its SpatialAnalyzer Compatibility table.
        </p>
        <div className="api-table-wrap">
          <table className="api-table api-release-table">
            <thead><tr><th>Briosa {index.releaseLabel}</th><th>Documented SpatialAnalyzer Versions</th></tr></thead>
            <tbody>{index.releases.map((r) => <tr key={r.release}>
              <th scope="row"><span className="api-mono">{r.release}</span>{sameContractNote(index.sameContract, r.release) && <small className="api-note">{sameContractNote(index.sameContract, r.release)}</small>}</th>
              <td><ul className="api-release-targets">{r.targets.map((t) => <li key={t.target}><Link to={t.href}>SA {t.target}</Link>{t.current && <span className="api-tag">Current Reference</span>}</li>)}</ul></td>
            </tr>)}</tbody>
          </table>
        </div>
      </section>
    </main>
  </Layout>;
}
