import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {useHistory, useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import {rememberTarget, readTarget, routeFor, suffix, anchorOf} from './context';
import type {Manifest, Navigation, PageData} from './types';
import VersionSelect from './VersionSelect';
import Sidebar from './Sidebar';
import TOC from '@theme/TOC';
import './styles.css';

const labels: Record<string, string> = {grpc: 'gRPC API', dotnet: '.NET API', python: 'Python API', javascript: 'JavaScript and TypeScript API'};
export default function ApiPage({pages, navigation, manifest}: {pages: Record<string, PageData>; navigation: Navigation; manifest: Manifest}): React.JSX.Element {
  const history = useHistory();
  const location = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const page = pages[location.pathname.replace(/\/$/, '')];
  const brokenLinks = useBrokenLinks();
  for (const anchor of [...(page.anchors ?? []), ...Object.keys(page.aliases), 'version-differences']) brokenLinks.collectAnchor(anchor);
  for (const href of page.links ?? []) brokenLinks.collectLink(href);
  const [notice, setNotice] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isHistory = page.kind === 'history';
  const targets = [...new Set(manifest.contexts.filter((c) => c.family === page.family).map((c) => c.target))];
  const groupTitle = page.group ? navigation.groups.find((g) => g.id === page.group)?.title : undefined;
  const title = isHistory ? `${page.title} — ${groupTitle ?? page.group} · ${labels[page.family]} Version History` : `${page.title} — ${groupTitle ? groupTitle + ' · ' : ''}${labels[page.family]} ${page.release} · SA ${page.target}`;
  useEffect(() => {
    setNotice('');
    setMobileNavOpen(false);
    if (!isHistory) rememberTarget(page.target);
    const anchor = anchorOf(location.hash);
    const mapped = page.aliases[anchor];
    if (mapped) history.replace(mapped);
    else if (anchor && !document.getElementById(anchor)) setNotice('This section is not present in the selected reference. See Version Differences for other documented versions.');
    if (isHistory) {
      const selected = new URLSearchParams(location.search).get('sa') || readTarget();
      if (selected) {
        const route = routeFor(manifest, page.family, page.release, selected, page.id);
        if (route) history.replace(route + location.hash);
        else setNotice(`No reference is published for SA ${selected} in this release. Choose a documented version below.`);
      }
    }
  }, [page.path, location.hash, location.search]);
  function select(release: string, target: string) {
    const to = routeFor(manifest, page.family, release, target, page.id);
    if (!to) { setNotice(`No reference is published for this method in release ${release} with SA ${target}. Available references are listed under Version Differences.`); return; }
    rememberTarget(target, true);
    history.push(to + location.hash);
  }
  const toc = [...page.toc, {id: 'version-differences', title: 'Version Differences'}].map(({id, title}) => ({id, level: 2, value: title.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}));
  return <Layout title={title} description={page.description} wrapperClassName="api-reference-layout">
    <Head>
      <link rel="canonical" href={`https://briosa.dev${page.path}`} />
      {!page.available && <meta name="robots" content="noindex, follow" />}
      <meta name="docsearch:language" content="en" /><meta name="docsearch:version" content={page.release} />
      <meta name="docsearch:docusaurus_tag" content={`docs-${page.family}-${page.release}`} />
      <meta name="briosa:api-family" content={page.family} /><meta name="briosa:api-release" content={page.release} />
      <meta name="briosa:sa-target" content={isHistory ? 'all' : page.target} /><meta name="briosa:command-id" content={page.id} />
      <meta name="briosa:page-kind" content={page.kind} />
    </Head>
    <div className="api-reference">
      <aside className={`api-navigation${mobileNavOpen ? ' api-navigation-open' : ''}`}>
        <button className="api-navigation-toggle clean-btn menu__link menu__link--sublist-caret" type="button" aria-controls="api-navigation-content" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>API Navigation</button>
        <div id="api-navigation-content"><Sidebar key={page.path} navigation={navigation} page={page} /></div>
      </aside>
      <main id="api-main" className="api-main">
        <div className="api-toolbar" aria-label="API Context">
          <VersionSelect label="SpatialAnalyzer" value={isHistory ? '' : page.target} onChange={(target) => select(page.release, target)} options={targets.map((target, i) => ({value: target, label: `SA ${target}`, badge: i === 0 ? 'Latest' : undefined}))} />
          <VersionSelect label={page.family === 'grpc' ? 'Server Release' : 'Client Release'} value={page.release} onChange={(release) => select(release, page.target)} options={manifest.releases[page.family].map((release) => ({value: release, label: release}))} />
          {Boolean(siteConfig.themeConfig.algolia) && <Link to="/search" className="api-search-all">Search All Versions</Link>}
        </div>
        <p className="api-notice" role="status">{notice}</p>
        <nav className="api-breadcrumbs" aria-label="Breadcrumbs"><Link to="/api">API Reference</Link><span> / </span><Link to={page.base}>{labels[page.family]}</Link>{page.group && <><span> / </span><Link to={`${page.base}/${page.group}`}>{navigation.groups.find((g) => g.id === page.group)?.title}</Link></>}</nav>
        <article className="markdown" data-api-kind={page.kind}>
          <header><p className="api-eyebrow">{isHistory ? 'Method History' : `Release ${page.release} · SA ${page.target}`}</p><h1>{page.title}</h1></header>
          {!page.available && <div className="alert alert--warning"><strong>Unavailable for This Target</strong><p>This method is not documented as available in Briosa {page.release} for SA {page.target}. This does not establish that SpatialAnalyzer itself removed the command. See the documented references below.</p></div>}
          {isHistory && <p>Choose a documented release and SpatialAnalyzer target below. Historical documentation remains available when a newer target does not expose this method.</p>}
          {page.kind === 'group' && <><p>Select a method to read its signature, parameters, and target-specific contract.</p><ul className="api-method-index">{page.methods?.map((m) => <li id={m.anchor} key={m.id}><Link to={page.base + suffix(m.id)}>{m.title}</Link>{!m.available && <span> · Other SA Target</span>}</li>)}</ul></>}
          <div className="api-contract" dangerouslySetInnerHTML={{__html: page.html}} />
          <section className="api-versions" aria-labelledby="version-differences"><h2 id="version-differences">Version Differences<a className="hash-link" href="#version-differences" aria-label="Link to Version Differences">#</a></h2>
            <p>These references preserve the contract documented for each exact target. Runtime readiness and catalog qualifications still apply.</p>
            <table><thead><tr><th>Briosa Release</th><th>SpatialAnalyzer</th><th>Reference</th></tr></thead><tbody>{page.variants.map((v) => <tr key={v.href}><td>{v.release}</td><td>{v.target}</td><td><Link to={v.href}>{!v.available ? 'Unavailable — See Notes' : v.href === page.path ? 'Current View' : v.same ? 'Same Documented Contract' : 'View Reference'}</Link>{v.summary && <p className="api-difference">{v.summary}</p>}</td></tr>)}</tbody></table>
          </section>
          <nav className="api-related" aria-label="Related API References">{Object.entries(labels).filter(([f]) => f !== page.family).map(([family, label]) => {
            const to = routeFor(manifest, family, manifest.releases[family][0], page.target, page.id);
            return to ? <Link key={family} to={to}>{label}</Link> : null;
          })}</nav>
          <p className="api-edit"><a href={`https://github.com/spatialanalyzer/briosa-docs/edit/main/${page.source}`}>Edit This Reference</a></p>
        </article>
      </main>
      <aside className="api-toc"><TOC toc={toc} /></aside>
    </div>
  </Layout>;
}
