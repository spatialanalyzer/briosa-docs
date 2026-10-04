import React from 'react';
import Link from '@docusaurus/Link';
import type {Compatibility as Data} from './types';

// Readers building for an earlier SpatialAnalyzer start here: each target's
// current reference and the first release that documented this method for it.
export default function Compatibility({family, compatibility, history}: {family: string; compatibility: Data; history: boolean}): React.JSX.Element {
  const release = family === 'grpc' ? 'Server' : 'Client';
  return <section className="api-compatibility" aria-labelledby="sa-compatibility">
    <h2 id="sa-compatibility">SpatialAnalyzer Compatibility<a className="hash-link" href="#sa-compatibility" aria-label="Link to SpatialAnalyzer Compatibility">#</a></h2>
    <table>
      <thead><tr><th>SpatialAnalyzer</th><th>Current Briosa {release}</th><th>Status</th><th>First Documented</th></tr></thead>
      <tbody>{compatibility.targets.map((t) => <tr key={t.target}>
        <td>SA {t.target}</td>
        <td>{t.release}</td>
        <td>{t.href ? <Link to={t.href}>{t.available ? 'Documented' : 'Not Documented — See Notes'}</Link> : 'Not Documented'}</td>
        <td>{t.since ? `${release} ${t.since}` : '—'}</td>
      </tr>)}</tbody>
    </table>
    {history && compatibility.history && <p className="api-history-link"><Link to={compatibility.history}>Release History for Every SpatialAnalyzer Version</Link>{compatibility.revisions > 0 && <span> · {compatibility.revisions} published {compatibility.revisions === 1 ? 'contract' : 'contracts'}</span>}</p>}
  </section>;
}
