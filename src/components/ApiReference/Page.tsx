import React, {useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {useHistory, useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import {rememberTarget, readTarget, rememberPair, readPair, anchorOf, selection, historyGroupHref, methodHref, choices, htmlReferences, releaseLabel, sameContractNote, contents, listOf, type Selection} from './context';
import type {Choice, Navigation, PageData} from './types';
import VersionSelect from './VersionSelect';
import Sidebar from './Sidebar';
import Compatibility from './Compatibility';
import Contract from './Contract';
import MethodIndex from './MethodIndex';
import Readout from './Readout';
import FamilySwitch from './FamilySwitch';
import {Availability, Differences} from './Versions';
import TOC from '@theme/TOC';
import Admonition from '@theme/Admonition';
import './styles.css';

export const labels: Record<string, string> = {grpc: 'gRPC API', dotnet: '.NET API', python: 'Python API', javascript: 'JavaScript and TypeScript API'};

// A heading whose inline code (`GetSpatialAnalyzerState`) renders as code. A
// long identifier may wrap between its words on a narrow screen.
const identifier = (code: string) => code.split(/(?<=[a-z0-9])(?=[A-Z])|(?<=_)/).flatMap((part, i) => i ? [<wbr key={i} />, part] : [part]);
export function InlineCode({text}: {text: string}): React.JSX.Element {
  return <>{text.split(/(`[^`]+`)/).filter(Boolean).map((part, i) => part.length > 2 && part.startsWith('`') && part.endsWith('`')
    ? <code key={i}>{identifier(part.slice(1, -1))}</code>
    : <React.Fragment key={i}>{part}</React.Fragment>)}</>;
}

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
  const sections = contents(page, methods.length);
  for (const anchor of [...references.anchors, ...Object.keys(aliases), ...sections.map((s) => s.id)]) brokenLinks.collectAnchor(anchor);
  for (const href of references.links) brokenLinks.collectLink(href);
  const [notice, setNotice] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const release = releaseLabel(page.family);
  const sameContract = navigation.sameContract;
  const later = sameContract?.[page.release] ?? [];
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
        setNotice(`${release} ${shown.release} does not document this method for SA ${shown.target}. Availability by Release lists every documented release and SpatialAnalyzer version.`);
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
  const toc = sections.map(({id, title}) => ({id, level: 2, value: title.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}));
  const targets = navigation.targets;
  const historyGroup = isHistory ? historyGroupHref(page, selected) : null;
  const reading = isHistory && selected?.release && !selected.missing ? selected : null;
  const notesAt = page.kind === 'group' ? page.html.indexOf('<h2') : -1;
  const groupIntro = notesAt < 0 ? page.html : page.html.slice(0, notesAt);
  const groupNotes = notesAt < 0 ? '' : page.html.slice(notesAt);
  // A history page counts what its revisions published: a variant links to its
  // revision only where that release documented the method for that SA target.
  const published = page.variants.filter((v) => v.href);
  const publishedReleases = new Set(published.map((v) => v.release)).size;
  const publishedTargets = new Set(published.map((v) => v.target)).size;
  const sameAs = page.sameContract ?? [];
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
        <button className="api-navigation-toggle" type="button" aria-controls="api-navigation-content" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          <svg className="sl-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="1.5" /><path d="M9.5 4.5v15" /><path className="api-ico-accent" d="M5.5 8.5h2M5.5 11.5h2" /></svg>
          <span>API Navigation</span>
          <svg className="api-navigation-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div id="api-navigation-content"><Sidebar key={page.path} navigation={navigation} page={page} history={isHistory} /></div>
      </aside>
      <main id="api-main" className="api-main">
        <div className="api-toolbar" role="group" aria-label="API Context">
          <div className="api-selects">
            <VersionSelect label="SpatialAnalyzer" value={isHistory ? selected?.target ?? '' : page.target} placeholder="Choose a Target" onChange={(target) => go(switcher.targets, target, isHistory && selected?.release ? `${release} ${selected.release} does not document this method for SA ${target}. Availability by Release lists every documented pair.` : `This reference is not published for SA ${target}. The SpatialAnalyzer Compatibility table lists where it is documented.`, target)} options={targets.map((target, i) => ({value: target, label: `SA ${target}`, badge: i === 0 ? 'Latest' : undefined}))} />
            <VersionSelect label={`${release} Release`} value={isHistory ? selected?.release ?? '' : page.release} placeholder="Choose a Release" onChange={(value) => go(switcher.releases, value, `No reference is published for this page in release ${value} with SA ${isHistory ? selected?.target ?? 'any target' : page.target}. ${isHistory ? 'Availability by Release' : 'Version Differences'} lists every documented version.`)} options={switcher.releases.map((r) => ({value: r.value, label: r.value, badge: r.current ? 'Current' : undefined, note: sameContractNote(sameContract, r.value) || undefined}))} />
            {Boolean(siteConfig.themeConfig.algolia) && <Link to="/search" className="api-search-all">Search All Versions</Link>}
          </div>
        </div>
        <p className="api-notice" role="status">{notice}</p>
        <article className="markdown api-article" data-api-kind={page.kind}>
          <header className="api-header">
            <nav className="api-breadcrumbs" aria-label="Breadcrumbs">
              <ol>
                <li><Link to="/api">API Reference</Link></li>
                <li><Link to={`/api/${page.family}`}>{labels[page.family]}</Link></li>
                {!isHistory && <li><Link to={page.base}>SA {page.target}{page.current ? '' : ` · ${page.release}`}</Link></li>}
                {isHistory ? groupTitle && <li>{historyGroup ? <Link to={historyGroup}>{groupTitle} · {release} {selected?.release} · SA {selected?.target}</Link> : <span>{groupTitle}</span>}</li> : page.groupHref && <li><Link to={page.groupHref}>{groupTitle}</Link></li>}
              </ol>
            </nav>
            <h1>{page.heading ? <InlineCode text={page.heading} /> : page.title}</h1>
            <ul className="api-applies" aria-label="Applies To">
              {isHistory ? <>
                <li className="api-state">Release History</li>
                <li className="sl-chip"><i>Contracts</i>{' '}{page.compatibility?.revisions ?? 0}</li>
                <li className="sl-chip"><i>Releases</i>{' '}{publishedReleases}</li>
                <li className="sl-chip"><i>SA Targets</i>{' '}{publishedTargets}</li>
                {reading && <li className="sl-chip api-chip-reading"><i>Reading</i>{' '}{release} {reading.release} · SA {reading.target}</li>}
              </> : <>
                <li className="api-state" data-state={page.current ? 'documented' : undefined}>{page.current ? 'Current Reference' : 'Earlier Release'}</li>
                <li className="sl-chip"><i>SA</i>{' '}{page.target}</li>
                <li className="sl-chip"><i>{release}</i>{' '}{page.release}</li>
                {later.length > 0 && <li className="sl-chip"><i>Same Contract</i>{' '}{later.join(' · ')}</li>}
              </>}
            </ul>
            {!isHistory && <FamilySwitch family={page.family} links={Object.fromEntries(page.related.map((r) => [r.family, r.href]))} label="API Family" />}
          </header>
          {!page.current && !isHistory && <Admonition type="info" title={`Earlier ${release} Release`}><p>This page describes Briosa {release} {page.release} for SA {page.target}. Choose the release marked Current above for the newest reference. Each method below opens its history page at the contract this release published.</p></Admonition>}
          {!page.available && !isHistory && <Admonition type="warning" title="Unavailable for This Target"><p>This method is not documented as available in Briosa {page.release} for SA {page.target}. This does not establish that SpatialAnalyzer itself removed the command. See the documented references below.</p></Admonition>}
          {isHistory && <p className="api-lead">This page shows which Briosa releases document this method for each SpatialAnalyzer version, and the exact contract each one published. Use it to confirm what works with the SpatialAnalyzer version you build for.</p>}
          {/* The site's note, kept apart from the released text it describes. */}
          {sameAs.length > 0 && <p className="api-same-contract">{`${release}${sameAs.length > 1 ? 's' : ''} ${listOf(sameAs)} ${sameAs.length > 1 ? 'serve' : 'serves'} this same contract; `}<Link to="/docs/releases#documentation-versions">Release Status</Link>{` lists ${sameAs.length > 1 ? 'their' : 'its'} runtime corrections.`}</p>}
          {page.compatibility && <Compatibility family={page.family} compatibility={page.compatibility} history={!isHistory} target={isHistory ? undefined : page.target} sameContract={sameContract} />}
          {isHistory && <Availability page={page} targets={targets} selected={selected} sameContract={sameContract} />}
          {page.kind === 'group' ? <>
            {/* A group's introduction leads; its shared notes follow the method index.
                A group whose RPCs are listed only in tables has no method index. */}
            {groupIntro && <Contract html={groupIntro} />}
            <Readout page={page} methods={methods} />
            {methods.length > 0 && <MethodIndex methods={methods} current={page.current} release={page.release} family={page.family} />}
            {groupNotes && <Contract html={groupNotes} />}
          </> : <Contract html={page.html} />}
          {!isHistory && <Differences page={page} sameContract={sameContract} />}
          <footer className="api-footer">
            <a className="api-edit" href={`https://github.com/spatialanalyzer/briosa-docs/edit/main/${page.source}`}>
              <svg className="sl-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 19.5h4l10-10a2.1 2.1 0 0 0-3-3l-10 10z" /><path d="m14 8 2 2" /></svg>
              Edit This Reference
            </a>
          </footer>
        </article>
      </main>
      <aside className="api-toc"><TOC toc={toc} /></aside>
    </div>
  </Layout>;
}
