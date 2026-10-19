import React from 'react';
import Link from '@docusaurus/Link';
import type {Compatibility as Data} from './types';
import {sameContractNote} from './context';

// Readers building for an earlier SpatialAnalyzer start here: each target's
// current reference and the first release that documented this method for it.
export default function Compatibility({family, compatibility, history, target, sameContract}: {family: string; compatibility: Data; history: boolean; target?: string; sameContract?: Record<string, string[]>}): React.JSX.Element {
  const release = family === 'grpc' ? 'Server' : 'Client';
  return <section className="api-compatibility api-panel" aria-labelledby="sa-compatibility">
    <h2 id="sa-compatibility">SpatialAnalyzer Compatibility<a className="hash-link" href="#sa-compatibility" aria-label="Link to SpatialAnalyzer Compatibility">#</a></h2>
    <div className="api-table-wrap">
      <table className="api-table">
        <thead><tr><th>SpatialAnalyzer</th><th>Current Briosa {release}</th><th>Status</th><th>First Documented</th></tr></thead>
        <tbody>{compatibility.targets.map((t) => <tr key={t.target} data-here={t.target === target || undefined}>
          <td><span className="api-mono">SA {t.target}</span>{t.target === target && <span className="api-tag">This Page</span>}</td>
          <td><span className="api-mono">{t.release}</span>{sameContractNote(sameContract, t.release) && <small className="api-note">{sameContractNote(sameContract, t.release)}</small>}</td>
          <td>{t.href
            ? <Link className="api-state" data-state={t.available ? 'documented' : 'notes'} to={t.href}>{t.available ? 'Documented' : 'Not Documented — See Notes'}</Link>
            : <span className="api-state" data-state="none">Not Documented</span>}</td>
          <td>{t.since ? <span className="api-mono">{release} {t.since}</span> : <span className="api-muted">—</span>}</td>
        </tr>)}</tbody>
      </table>
    </div>
    {history && compatibility.history && <p className="api-history-link"><Link className="api-arrow-link" to={compatibility.history}>Release History for Every SpatialAnalyzer Version</Link>{compatibility.revisions > 0 && <span> · {compatibility.revisions} published {compatibility.revisions === 1 ? 'contract' : 'contracts'}</span>}</p>}
  </section>;
}
