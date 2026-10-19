import React from 'react';
import type {Method, PageData} from './types';
import {readout} from './context';

// A group's summary from its page data (see `readout`). Nothing here is estimated,
// and a group without any reading, such as one whose RPCs are listed only in
// tables, has no readout.
export default function Readout({page, methods}: {page: PageData; methods: Method[]}): React.JSX.Element | null {
  const readings = readout(page, methods);
  if (!readings.length) return null;
  return <dl className="sl-readout api-readout">
    {readings.map(({label, value, note}) => <div key={label}><dt className="sl-hud">{label}</dt><dd><b>{value}</b>{note && <> <small>{note}</small></>}</dd></div>)}
  </dl>;
}
