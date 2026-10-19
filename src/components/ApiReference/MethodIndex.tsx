import React, {useId, useState} from 'react';
import Link from '@docusaurus/Link';
import type {Method} from './types';
import {methodFilter} from './context';

type Entry = Method & {href: string};
type Scope = 'all' | 'documented' | 'other';

// A group page's methods as a filterable index. Every method is rendered, so the
// index and each method's old in-page anchor work without JavaScript; the
// filter only hides entries.
export default function MethodIndex({methods, current, release, family}: {methods: Entry[]; current: boolean; release: string; family: string}): React.JSX.Element {
  const id = useId();
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState<Scope>('all');
  const other = methods.filter((m) => !m.available).length;
  const otherLabel = current ? 'Other SA Target' : 'History Only';
  const named = methodFilter(query, family);
  const matches = (m: Entry) => named(m) && (scope === 'all' || (scope === 'documented') === m.available);
  const shown = methods.filter(matches).length;
  const scopes: [Scope, string, number][] = [['all', 'All', methods.length], ['documented', 'Documented', methods.length - other], ['other', otherLabel, other]];
  return <section className="api-index" aria-labelledby="method-index">
    <div className="api-index-bar">
      <h2 id="method-index" className="api-index-title">Methods<a className="hash-link" href="#method-index" aria-label="Link to Methods">#</a></h2>
      <p className="api-index-count sl-hud" id={`${id}-count`} role="status"><span className="api-index-shown">{shown}</span> of {methods.length} {methods.length === 1 ? 'Method' : 'Methods'}</p>
      <label className="api-field api-index-filter">
        <svg className="sl-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4" /></svg>
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Filter ${methods.length} ${methods.length === 1 ? 'method' : 'methods'}`} aria-label="Filter Methods by Name or API Spelling" aria-describedby={`${id}-count`} autoComplete="off" spellCheck={false} />
      </label>
      {other > 0 && <div className="api-chips" role="group" aria-label="Show Methods">
        {scopes.map(([value, label, count]) => <button key={value} type="button" aria-pressed={scope === value} onClick={() => setScope(value)}>{label}<span className="sl-num">{count}</span></button>)}
      </div>}
    </div>
    <ol className="api-method-index">
      {methods.map((m) => <li id={m.anchor} key={m.id} hidden={!matches(m)} data-available={m.available || undefined}>
        <Link to={m.href}><span className="api-index-dot" aria-hidden="true" />{m.title}</Link>
        {!m.available && <span className="api-tag" title={current ? `Not documented for this SpatialAnalyzer target in ${release}` : undefined}>{otherLabel}</span>}
      </li>)}
    </ol>
    {shown === 0 && <p className="api-index-empty">No methods match. Clear the filter to see every method in this group.</p>}
  </section>;
}
