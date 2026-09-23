import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {useHistory, useLocation} from '@docusaurus/router';
import {readTarget, routeFor, anchorOf} from './context';
import type {Manifest} from './types';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

type Redirect = {to: string; aliases: Record<string, string>; sectionLinks?: Record<string, string>; family: string; release: string; target: string; id: string; explicitTarget: boolean};
export default function Legacy({redirects, manifest}: {redirects: Record<string, Redirect>; manifest: Manifest}): React.JSX.Element {
  const history = useHistory();
  const location = useLocation();
  const redirect = redirects[location.pathname.replace(/\/$/, '')];
  const brokenLinks = useBrokenLinks();
  const links = {...redirect.sectionLinks, ...redirect.aliases};
  for (const anchor of Object.keys(links)) brokenLinks.collectAnchor(anchor);
  const [problem, setProblem] = useState('');
  useEffect(() => {
    const queryTarget = new URLSearchParams(location.search).get('sa');
    const target = redirect.explicitTarget ? redirect.target : queryTarget || readTarget() || redirect.target;
    const anchor = anchorOf(location.hash);
    const method = redirect.aliases[anchor];
    const base = manifest.contexts.find((c) => c.family === redirect.family && c.release === redirect.release && c.target === redirect.target)?.base;
    const id = method && base ? method.slice(base.length + 1) : redirect.id;
    const route = routeFor(manifest, redirect.family, redirect.release, target, id);
    if (!route) { setProblem(`No reference is published for SA ${target} in this release. Choose a documented reference below.`); return; }
    history.replace(route + (method ? '' : location.hash));
  }, [history, location.hash, location.search, manifest, redirect]);
  return <Layout title="API Reference Link" description="Continue to the versioned API reference.">
    <Head><meta name="robots" content="noindex, follow" /><link rel="canonical" href={`https://briosa.dev${redirect.to}`} /></Head>
    <main className="container margin-vert--lg"><h1>API Reference</h1><p role="status">{problem || 'This reference has a permanent versioned address.'}</p>
      <p><Link to={redirect.to}>Open the Reference</Link></p>
      {Object.entries(links).map(([anchor, to]) => <p id={anchor} key={anchor}><Link to={to}>{anchor.replaceAll('-', ' ')}</Link></p>)}
    </main>
  </Layout>;
}
