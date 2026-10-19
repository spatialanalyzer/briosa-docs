import React from 'react';
import type {Method, PageData} from './types';
import {releaseLabel} from './context';

// A group's summary from its page data: the methods documented for this target,
// the fields counted from their released parameter tables, and the first release
// that documented the group for this target. Nothing here is estimated.
export default function Readout({page, methods}: {page: PageData; methods: Method[]}): React.JSX.Element {
  const documented = methods.filter((m) => m.available).length;
  const other = methods.length - documented;
  const since = page.variants.filter((v) => v.target === page.target).at(-1)?.release;
  return <dl className="sl-readout api-readout">
    <div><dt className="sl-hud">Methods</dt><dd><b>{documented}</b>{other > 0 && <small>+ {other} {page.current ? 'Other SA Target' : 'History Only'}</small>}</dd></div>
    {page.fields && <div><dt className="sl-hud">Request Fields</dt><dd><b>{page.fields.request}</b></dd></div>}
    {page.fields && <div><dt className="sl-hud">Result Fields</dt><dd><b>{page.fields.result}</b>{page.fields.execution > 0 && <small>+ Execution</small>}</dd></div>}
    {since && <div><dt className="sl-hud">First Documented</dt><dd><b>{since}</b><small>{releaseLabel(page.family)}</small></dd></div>}
  </dl>;
}
