import React from 'react';
import Link from '@docusaurus/Link';
import type {PageData} from './types';
import {releaseLabel, sameContractNote, type Selection} from './context';

const heading = (title: string) => <h2 id="version-differences">{title}<a className="hash-link" href="#version-differences" aria-label={`Link to ${title}`}>#</a></h2>;

// Every documented release and SpatialAnalyzer version of a method, with the
// revision each pair published. Cells link to that pair's place in the history.
export function Availability({page, targets, selected, sameContract}: {page: PageData; targets: string[]; selected: Selection | null; sameContract?: Record<string, string[]>}): React.JSX.Element {
  const releases = [...new Set(page.variants.map((v) => v.release))];
  return <section className="api-versions api-availability" aria-labelledby="version-differences">
    {heading('Availability by Release')}
    <p>Each cell links to the contract published for that Briosa release and SpatialAnalyzer version. Releases that published the same contract share a revision.</p>
    <div className="api-table-wrap">
      <table className="api-table api-matrix">
        <thead><tr><th>Briosa {releaseLabel(page.family)}</th>{targets.map((t) => <th key={t}>SA {t}</th>)}</tr></thead>
        <tbody>{releases.map((release) => <tr key={release}>
          <th scope="row"><span className="api-mono">{release}</span>{sameContractNote(sameContract, release) && <small className="api-note">{sameContractNote(sameContract, release)}</small>}</th>
          {targets.map((target) => {
            const v = page.variants.find((x) => x.release === release && x.target === target);
            const reading = !selected?.missing && selected?.release === release && selected.target === target;
            return <td key={target}>{!v ? <span className="api-muted">Not Published</span>
              : v.href ? <a className="api-revision-link" href={v.href} aria-current={reading ? 'true' : undefined}>Revision {v.revision}</a>
              : <span className="api-muted">Not Documented</span>}</td>;
          })}
        </tr>)}</tbody>
      </table>
    </div>
  </section>;
}

// The same page at every documented release and SpatialAnalyzer version.
export function Differences({page, sameContract}: {page: PageData; sameContract?: Record<string, string[]>}): React.JSX.Element {
  return <section className="api-versions" aria-labelledby="version-differences">
    {heading('Version Differences')}
    <p>These references preserve the contract documented for each exact target. Runtime readiness and catalog qualifications still apply.</p>
    <div className="api-table-wrap">
      <table className="api-table">
        <thead><tr><th>Briosa Release</th><th>SpatialAnalyzer</th><th>Reference</th></tr></thead>
        <tbody>{page.variants.map((v) => <tr key={`${v.release}/${v.target}`} data-here={v.href === page.path || undefined}>
          <td><span className="api-mono">{v.release}</span>{v.current && <span className="api-tag">Current</span>}{sameContractNote(sameContract, v.release) && <small className="api-note">{sameContractNote(sameContract, v.release)}</small>}</td>
          <td><span className="api-mono">SA {v.target}</span></td>
          <td>{v.href ? <Link to={v.href} aria-current={v.href === page.path ? 'page' : undefined}>{!v.available ? 'Unavailable — See Notes' : v.href === page.path ? 'Current View' : v.same ? 'Same Documented Contract' : v.revision ? `View Revision ${v.revision}` : 'View Reference'}</Link> : <span className="api-muted">Not Documented</span>}
            {v.summary && <p className="api-difference">{v.summary}</p>}</td>
        </tr>)}</tbody>
      </table>
    </div>
  </section>;
}
