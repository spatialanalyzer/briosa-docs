import React, {useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {useHistory, useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import {rememberTarget, readTarget, rememberPair, readPair, anchorOf, selection, historyGroupHref, methodHref, choices, htmlReferences, type Selection} from './context';
import type {Choice, Navigation, PageData} from './types';
import VersionSelect from './VersionSelect';
import Sidebar from './Sidebar';
import Compatibility from './Compatibility';
import TOC from '@theme/TOC';
import './styles.css';

export const labels: Record<string, string> = {grpc: 'gRPC API', dotnet: '.NET API', python: 'Python API', javascript: 'JavaScript and TypeScript API'};
const releaseLabel = (family: string) => family === 'grpc' ? 'Server' : 'Client';

export default function ApiPage({pages, navigation}: {pages: Record<string, PageData>; navigation: Navigation}): React.JSX.Element {
  const history = useHistory();
  const location = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const page = pages[location.pathname.replace(/\/$/, '')];
  const brokenLinks = useBrokenLinks();
  const isHistory = page.kind === 'history';
  const methods = page.kind === 'group' ? (navigation.groups.find((g) => g.id === page.id)?.methods ?? []).map((m) => ({...m, href: methodHref(navigation, m)})) : [];
  const aliases: Record<string, string> = Object.fromEntries(methods.map((m) => [m.anchor, m.href]));
  const references = useMemo(() => htmlReferences(page.html), [page.html]);
  // On a history page, the release/SA pair being read (from its anchor), else the reader's SA target.
  const [selected, setSelected] = useState<Selection | null>(null);
  const switcher = choices(page, navigation, isHistory ? selected : null);
  const fixedAnchors = [page.compatibility ? 'sa-compatibility' : '', 'version-differences'].filter(Boolean);
  for (const anchor of [...references.anchors, ...Object.keys(aliases), ...fixedAnchors]) brokenLinks.collectAnchor(anchor);
  for (const href of references.links) brokenLinks.collectLink(href);
  const [notice, setNotice] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const groupTitle = page.group ? navigation.groups.find((g) => g.id === page.group)?.title : undefined;
  const title = isHistory ? `${page.title} — ${groupTitle ?? page.group} · ${labels[page.family]} Version History` : `${page.title} — ${groupTitle ? groupTitle + ' · ' : ''}${labels[page.family]} ${page.release} · SA ${page.target}`;
  useEffect(() => {
    setNotice('');
    setMobileNavOpen(false);
    if (!isHistory) { rememberTarget(page.target); rememberPair(page.family, null); }
    else {
      const shown = selection(page, location.hash, location.search, readTarget(), readPair(page.family));
      if (shown.target) rememberTarget(shown.target);
      // An unavailable request is still the pair being read; the next history page continues it.
      if (shown.remember) rememberPair(page.family, shown.remember);
      // The address always states the pair the selectors show.
      if (shown.replace) history.replace(shown.replace);
      setSelected(shown);
      if (shown.missing) {
        setNotice(`${releaseLabel(page.family)} ${shown.release} does not document this method for SA ${shown.target}. Availability by Release lists every documented release and SpatialAnalyzer version.`);
        return;
      }
    }
    const anchor = anchorOf(location.hash);
    const mapped = aliases[anchor];
    if (mapped) history.replace(mapped);
    else if (anchor && !document.getElementById(anchor)) setNotice('This section is not present in the selected reference. See Version Differences for other documented versions.');
  }, [page.path, location.hash, location.search]);
  function go(options: Choice[], value: string, missing: string, target?: string) {
    const to = options.find((c) => c.value === value)?.href;
    if (!to) { setNotice(missing); return; }
    if (target) rememberTarget(target, true);
    history.push(to.includes('#') || isHistory ? to : to + location.hash);
  }
  const toc = [...(page.compatibility ? [{id: 'sa-compatibility', title: 'SpatialAnalyzer Compatibility'}] : []), ...(isHistory ? [{id: 'version-differences', title: 'Availability by Release'}] : []), ...page.toc, ...(isHistory ? [] : [{id: 'version-differences', title: 'Version Differences'}])]
    .map(({id, title}) => ({id, level: 2, value: title.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}));
  const releases = [...new Set(page.variants.map((v) => v.release))];
  const targets = navigation.targets;
  const versions = isHistory
    ? <section className="api-versions api-availability" aria-labelledby="version-differences"><h2 id="version-differences">Availability by Release<a className="hash-link" href="#version-differences" aria-label="Link to Availability by Release">#</a></h2>
        <p>Each cell links to the contract published for that Briosa release and SpatialAnalyzer version. Releases that published the same contract share a revision.</p>
        <table><thead><tr><th>Briosa {releaseLabel(page.family)}</th>{targets.map((t) => <th key={t}>SA {t}</th>)}</tr></thead><tbody>{releases.map((release) => <tr key={release}><td>{release}</td>{targets.map((target) => {
          const v = page.variants.find((x) => x.release === release && x.target === target);
          return <td key={target}>{!v ? 'Not Published' : v.href ? <a href={v.href}>Revision {v.revision}</a> : 'Not Documented'}</td>;
        })}</tr>)}</tbody></table>
      </section>
    : <section className="api-versions" aria-labelledby="version-differences"><h2 id="version-differences">Version Differences<a className="hash-link" href="#version-differences" aria-label="Link to Version Differences">#</a></h2>
        <p>These references preserve the contract documented for each exact target. Runtime readiness and catalog qualifications still apply.</p>
        <table><thead><tr><th>Briosa Release</th><th>SpatialAnalyzer</th><th>Reference</th></tr></thead><tbody>{page.variants.map((v) => <tr key={`${v.release}/${v.target}`}><td>{v.release}{v.current ? ' (Current)' : ''}</td><td>{v.target}</td><td>{v.href ? <Link to={v.href}>{!v.available ? 'Unavailable — See Notes' : v.href === page.path ? 'Current View' : v.same ? 'Same Documented Contract' : v.revision ? `View Revision ${v.revision}` : 'View Reference'}</Link> : 'Not Documented'}{v.summary && <p className="api-difference">{v.summary}</p>}</td></tr>)}</tbody></table>
      </section>;
  return <Layout title={title} description={page.description} wrapperClassName="api-reference-layout">
    <Head>
      <link rel="canonical" href={`https://briosa.dev${page.path}`} />
      {page.noindex && <meta name="robots" content="noindex, follow" />}
      <meta name="docsearch:language" content="en" /><meta name="docsearch:version" content={page.release} />
      <meta name="docsearch:docusaurus_tag" content={`docs-${page.family}-${page.release}`} />
      <meta name="briosa:api-family" content={page.family} /><meta name="briosa:api-release" content={page.release} />
      <meta name="briosa:sa-target" content={isHistory ? 'all' : page.target} /><meta name="briosa:command-id" content={page.id} />
      <meta name="briosa:page-kind" content={page.kind} />
    </Head>
    <div className="api-reference">
      <aside className={`api-navigation${mobileNavOpen ? ' api-navigation-open' : ''}`}>
        <button className="api-navigation-toggle clean-btn menu__link menu__link--sublist-caret" type="button" aria-controls="api-navigation-content" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>API Navigation</button>
        <div id="api-navigation-content"><Sidebar key={page.path} navigation={navigation} page={page} history={isHistory} /></div>
      </aside>
      <main id="api-main" className="api-main">
        <div className="api-toolbar" aria-label="API Context">
          <VersionSelect label="SpatialAnalyzer" value={isHistory ? selected?.target ?? '' : page.target} placeholder="Choose a Target" onChange={(target) => go(switcher.targets, target, isHistory && selected?.release ? `${releaseLabel(page.family)} ${selected.release} does not document this method for SA ${target}. Availability by Release lists every documented pair.` : `This reference is not published for SA ${target}. The SpatialAnalyzer Compatibility table lists where it is documented.`, target)} options={targets.map((target, i) => ({value: target, label: `SA ${target}`, badge: i === 0 ? 'Latest' : undefined}))} />
          <VersionSelect label={`${releaseLabel(page.family)} Release`} value={isHistory ? selected?.release ?? '' : page.release} placeholder="Choose a Release" onChange={(release) => go(switcher.releases, release, `No reference is published for this page in release ${release} with SA ${isHistory ? selected?.target ?? 'any target' : page.target}. ${isHistory ? 'Availability by Release' : 'Version Differences'} lists every documented version.`)} options={switcher.releases.map((r) => ({value: r.value, label: r.value, badge: r.current ? 'Current' : undefined}))} />
          {Boolean(siteConfig.themeConfig.algolia) && <Link to="/search" className="api-search-all">Search All Versions</Link>}
        </div>
        <p className="api-notice" role="status">{notice}</p>
        <nav className="api-breadcrumbs" aria-label="Breadcrumbs"><Link to="/api">API Reference</Link><span> / </span><Link to={`/api/${page.family}`}>{labels[page.family]}</Link>{!isHistory && <><span> / </span><Link to={page.base}>SA {page.target}{page.current ? '' : ` · ${page.release}`}</Link></>}{isHistory ? groupTitle && <><span> / </span>{historyGroupHref(page, selected) ? <Link to={historyGroupHref(page, selected)!}>{groupTitle} · {releaseLabel(page.family)} {selected?.release} · SA {selected?.target}</Link> : <span>{groupTitle}</span>}</> : page.groupHref && <><span> / </span><Link to={page.groupHref}>{groupTitle}</Link></>}</nav>
        <article className="markdown" data-api-kind={page.kind}>
          <header><p className="api-eyebrow">{isHistory ? `SpatialAnalyzer and Release History${selected?.release && !selected.missing ? ` · ${releaseLabel(page.family)} ${selected.release} · SA ${selected.target}` : ''}` : `${page.current ? 'Current Reference' : 'Earlier Release'} · ${releaseLabel(page.family)} ${page.release} · SA ${page.target}`}</p><h1>{page.title}</h1></header>
          {!page.current && !isHistory && <div className="alert alert--info api-earlier"><strong>Earlier {releaseLabel(page.family)} Release</strong><p>This page describes Briosa {releaseLabel(page.family)} {page.release} for SA {page.target}. Choose the release marked Current above for the newest reference. Each method below opens its history page at the contract this release published.</p></div>}
          {!page.available && !isHistory && <div className="alert alert--warning"><strong>Unavailable for This Target</strong><p>This method is not documented as available in Briosa {page.release} for SA {page.target}. This does not establish that SpatialAnalyzer itself removed the command. See the documented references below.</p></div>}
          {isHistory && <p>This page shows which Briosa releases document this method for each SpatialAnalyzer version, and the exact contract each one published. Use it to confirm what works with the SpatialAnalyzer version you build for.</p>}
          {page.compatibility && <Compatibility family={page.family} compatibility={page.compatibility} history={!isHistory} />}
          {isHistory && versions}
          {page.kind === 'group' && <><p>Select a method to read its signature, parameters, and target-specific contract.</p><ul className="api-method-index">{methods.map((m) => <li id={m.anchor} key={m.id}><Link to={m.href}>{m.title}</Link>{!m.available && <span> · {page.current ? 'Other SA Target' : 'History Only'}</span>}</li>)}</ul></>}
          <div className="api-contract" dangerouslySetInnerHTML={{__html: page.html}} />
          {!isHistory && versions}
          <nav className="api-related" aria-label="Related API References">{page.related.map(({family, href}) => <Link key={family} to={href}>{labels[family]}</Link>)}</nav>
          <p className="api-edit"><a href={`https://github.com/spatialanalyzer/briosa-docs/edit/main/${page.source}`}>Edit This Reference</a></p>
        </article>
      </main>
      <aside className="api-toc"><TOC toc={toc} /></aside>
    </div>
  </Layout>;
}
