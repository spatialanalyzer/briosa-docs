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
import './styles.css';

const labels: Record<string, string> = {grpc: 'gRPC API', dotnet: '.NET API', python: 'Python API', javascript: 'JavaScript and TypeScript API'};
function Sidebar({navigation: nav, page}: {navigation: Navigation; page: PageData}) {
  const [query, setQuery] = useState('');
  const [expandedKeys, setExpandedKeys] = useState<Record<string, boolean>>({});
  const [showAll, setShowAll] = useState<Record<string, boolean>>({});
  const link = (id: string, title: string) => <Link className={page.id === id ? 'api-nav-active' : ''} aria-current={page.id === id ? 'page' : undefined} to={nav.base + suffix(id)}>{title}</Link>;
  type Branch = {key: string; title: string; group?: Navigation['groups'][number]; children: Branch[]};
  const roots: Branch[] = [];
  for (const group of nav.groups) {
    let children = roots;
    let key = '';
    for (const title of [...group.parents, group.title.split(' / ').at(-1)!]) {
      key += '/' + title;
      let branch = children.find((b) => b.key === key);
      if (!branch) { branch = {key, title, children: []}; children.push(branch); }
      if (title === group.title.split(' / ').at(-1)) branch.group = group;
      children = branch.children;
    }
  }
  const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const matches = (branch: Branch): boolean => !query || Boolean(branch.group?.methods.some((m) => clean(m.title).includes(clean(query)))) || branch.children.some(matches);
  const active = (branch: Branch): boolean => branch.group?.id === (page.group || page.id) || branch.children.some(active);
  const renderBranch = (branch: Branch): React.ReactNode => {
    if (!matches(branch)) return null;
    const expanded = Boolean(query) || (expandedKeys[branch.key] ?? active(branch));
    const methods = branch.group?.methods.filter((m) => !query || clean(m.title).includes(clean(query))) ?? [];
    const currentIndex = Math.max(0, methods.findIndex((m) => m.id === page.id));
    const start = Math.max(0, Math.min(currentIndex - 5, methods.length - 11));
    const visibleMethods = query || showAll[branch.key] ? methods : methods.slice(start, start + 11);
    return <li key={branch.key}><div className="api-group-title">{branch.group ? link(branch.group.id, branch.title) : <span>{branch.title}</span>}<button type="button" aria-expanded={expanded} aria-label={`${expanded ? 'Collapse' : 'Expand'} ${branch.title}`} onClick={() => setExpandedKeys((keys) => ({...keys, [branch.key]: !expanded}))}>{expanded ? '−' : '+'}</button></div>
      {expanded && <ul>{visibleMethods.map((m) => <li key={m.id}>{link(m.id, m.title)}{!m.available && <small>Other SA Target</small>}</li>)}{visibleMethods.length < methods.length && <li><button className="api-show-all" type="button" onClick={() => setShowAll((all) => ({...all, [branch.key]: true}))}>Show All {methods.length} Commands</button></li>}{branch.children.map(renderBranch)}</ul>}
    </li>;
  };
  return <nav className="api-sidebar" aria-label="API Documentation">
    {link('overview', nav.label)}
    {nav.discovery && link(nav.discovery, 'Server Discovery')}
    <details open={nav.lifecycle.some((l) => l.id === page.id)}><summary>Lifecycle Methods</summary><ul>{nav.lifecycle.map((l) => <li key={l.id}>{link(l.id, l.title)}</li>)}</ul></details>
    <details open={nav.firstCalls.some((l) => l.id === page.id)}><summary>First Calls</summary><ul>{nav.firstCalls.map((l) => <li key={l.id}>{link(l.id, l.title)}</li>)}</ul></details>
    {nav.valueTypes && link('value-types', 'MP Value Types')}
    <details open><summary>MP Commands</summary>
      <label className="api-filter">Find a Command<input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Name or API spelling" /></label>
      <ul className="api-groups">{roots.map(renderBranch)}</ul>
    </details>
  </nav>;
}

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
  const toc = [...page.toc, {id: 'version-differences', title: 'Version Differences'}];
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
        <button className="api-navigation-toggle" type="button" aria-controls="api-navigation-content" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>API Navigation {mobileNavOpen ? '−' : '+'}</button>
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
      <aside className="api-toc"><nav aria-label="On This Page"><strong>On This Page</strong><ul>{toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.title}</a></li>)}</ul></nav></aside>
    </div>
  </Layout>;
}
