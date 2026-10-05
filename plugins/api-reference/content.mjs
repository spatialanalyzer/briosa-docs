import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import Slugger from 'github-slugger';

export const families = {grpc: 'gRPC API', dotnet: '.NET API', python: 'Python API', javascript: 'JavaScript and TypeScript API'};
const parser = unified().use(remarkParse).use(remarkGfm);
const renderer = unified().use(remarkParse).use(remarkGfm).use(remarkRehype, {allowDangerousHtml: true}).use(rehypeStringify, {allowDangerousHtml: true});
const hash = (text) => createHash('sha256').update(text).digest('hex');
const textOf = (node) => node.value ?? (node.children ?? []).map(textOf).join('');
const walk = (node, visit) => { visit(node); for (const child of node.children ?? []) walk(child, visit); };
export const exactBase = (family, release, target) => `/api/${family}/sa-${target}/${release}`;
export const suffix = (id) => id === 'overview' ? '' : `/${id}`;

function document(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  const meta = {};
  for (const line of (match?.[1] ?? '').split('\n')) {
    const pair = line.match(/^(title|sidebar_label|description):\s*(.*)$/);
    if (pair) meta[pair[1]] = pair[2].trim().replace(/^['"]|['"]$/g, '');
  }
  const body = raw.slice(match?.[0].length ?? 0).replaceAll('\r\n', '\n');
  const title = body.match(/^# (.+)$/m)?.[1] ?? meta.title;
  return {meta, body, title};
}

export function sections(body) {
  const tree = parser.parse(body);
  const slugger = new Slugger();
  const headings = tree.children.filter((n) => n.type === 'heading' && n.depth === 2).map((node) => {
    const label = textOf(node);
    const explicit = label.match(/\{\/\*\s*#([^ ]+)\s*\*\/\}/);
    return {title: label.replace(/\s*\{\/\*.*?\*\/\}/g, ''), anchor: explicit?.[1] ?? slugger.slug(label), start: node.position.start.offset, end: node.position.end.offset};
  });
  return headings.map((h, i) => ({...h, body: body.slice(h.end, headings[i + 1]?.start ?? body.length).trim()}));
}

function flattenGroups(items, result = [], parents = []) {
  for (const item of items) {
    if (typeof item === 'string') result.push({id: item, label: null, parents});
    else {
      if (item.link?.id) result.push({id: item.link.id, label: item.label, parents});
      flattenGroups(item.items ?? [], result, [...parents, item.label]);
    }
  }
  return result;
}

function fields(body) {
  const result = new Map();
  for (const row of body.split('\n').filter((l) => /^\| (Request|Result) \|/.test(l))) {
    const cells = row.split('|').slice(1, -1).map((c) => c.trim().replaceAll('`', ''));
    if (cells.length === 6) result.set(`${cells[0]}:${cells[1]}`, {name: cells[2], type: cells[3], value: cells[5]});
  }
  return result;
}

// Field-level changes between two published revisions of one method.
function revisionChanges(older, newer) {
  const before = fields(older.body);
  const after = fields(newer.body);
  const changes = [];
  for (const [key, field] of after) {
    const previous = before.get(key);
    if (!previous) { changes.push(`Added ${field.name}`); continue; }
    if (previous.name !== field.name) changes.push(`Renamed ${previous.name} → ${field.name}`);
    if (previous.type !== field.type) changes.push(`${field.name}: ${previous.type} → ${field.type}`);
    if (previous.value !== field.value) changes.push(`${field.name}: ${previous.value} → ${field.value}`);
  }
  for (const [key, field] of before) if (!after.has(key)) changes.push(`Removed ${field.name}`);
  // Only a parsed parameter table supports a claim that the tables match.
  return {changes, tables: before.size > 0 && after.size > 0};
}

function differenceSummary(a, b) {
  if (!a || !b) return '';
  const current = fields(a.body);
  const other = fields(b.body);
  const changes = [];
  for (const [key, field] of other) {
    const existing = current.get(key);
    if (!existing) changes.push(`${field.name} is present in this reference`);
    else if (existing.value !== field.value) changes.push(`${field.name}: ${field.value} (current view: ${existing.value})`);
    else if (existing.type !== field.type) changes.push(`${field.name}: ${field.type} (current view: ${existing.type})`);
  }
  for (const [key, field] of current) if (!other.has(key)) changes.push(`${field.name} is absent in this reference`);
  return changes.length ? changes.slice(0, 4).join('; ') + (changes.length > 4 ? `; ${changes.length - 4} more differences — see reference` : '') : '';
}

// Release snapshots are inputs, never a new source of protocol/support claims.
export async function loadReference(siteDir) {
  const targets = JSON.parse(await readFile(path.join(siteDir, 'plugins/api-reference/targets.json'), 'utf8'));
  const contexts = [];
  const releases = {};
  for (const family of Object.keys(families)) {
    releases[family] = JSON.parse(await readFile(path.join(siteDir, `${family}_versions.json`), 'utf8'));
    for (const release of releases[family]) {
      const defaultTarget = targets.snapshots[family]?.[release];
      if (!defaultTarget) throw new Error(`Missing immutable default SA target for ${family} ${release}`);
      const root = path.join(siteDir, `${family}_versioned_docs`, `version-${release}`);
      const sidebar = Object.values(JSON.parse(await readFile(path.join(siteDir, `${family}_versioned_sidebars/version-${release}-sidebars.json`), 'utf8')))[0];
      const folders = (await readdir(root, {withFileTypes: true})).filter((f) => f.isDirectory() && f.name.startsWith('sa-')).map((f) => f.name);
      for (const folder of ['', ...folders]) {
        const target = folder.slice(3) || defaultTarget;
        const normalizeSidebar = (items) => items.map((item) => typeof item === 'string' ? item.replace(`${folder}/`, '') : {...item, link: item.link ? {...item.link, id: item.link.id?.replace(`${folder}/`, '')} : undefined, items: normalizeSidebar(item.items ?? [])});
        const targetSidebar = folder ? normalizeSidebar(sidebar.find((s) => s.label === `SA ${target}`)?.items ?? []) : sidebar;
        const groups = flattenGroups(targetSidebar.find((item) => item.label === 'MP Commands')?.items ?? []);
        if (!groups.length) throw new Error(`Missing reviewed MP group navigation for ${family}/${release}/${target}`);
        const ctx = {family, release, target, defaultTarget, base: exactBase(family, release, target), sidebar: targetSidebar, groups, pages: {}, sourceRoot: path.relative(siteDir, path.join(root, folder)).replaceAll('\\', '/')};
        for (const name of (await readdir(path.join(root, folder))).filter((n) => n.endsWith('.md'))) {
          const id = name.slice(0, -3);
          const doc = document(await readFile(path.join(root, folder, name), 'utf8'));
          const isGroup = groups.some((g) => g.id === id);
          const source = `${ctx.sourceRoot}/${name}`;
          if (isGroup) {
            const allSections = sections(doc.body);
            const legacyFunctions = [];
            for (const section of allSections.filter((s) => s.title === 'Functions')) {
              const codeBlocks = parser.parse(section.body).children.filter((n) => n.type === 'code');
              const replacements = [];
              for (const block of codeBlocks) {
                const starts = [...block.value.matchAll(/^function (\w+)\(/gm)];
                for (const [index, start] of starts.entries()) {
                  const code = block.value.slice(start.index, starts[index + 1]?.index ?? block.value.length).trim();
                  const slug = start[1].replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
                  // The old aggregate has no reviewed per-command catalog link.
                  // Preserve its function identity without guessing a lineage merge.
                  legacyFunctions.push({title: start[1], anchor: `function-${slug}`, id: `${id}/functions/${slug}`, body: `\`\`\`${block.lang}\n${code}\n\`\`\``});
                }
                if (starts.length) {
                  const prefix = block.value.slice(0, starts[0].index).trim();
                  replacements.push({start: block.position.start.offset, end: block.position.end.offset, text: `${prefix ? `\`\`\`${block.lang}\n${prefix}\n\`\`\`\n\n` : ''}See the individual function references above.`});
                }
              }
              for (const replacement of replacements.reverse()) section.body = section.body.slice(0, replacement.start) + replacement.text + section.body.slice(replacement.end);
            }
            const catalogAnchor = (s) => s.body.match(/\/mp-command-catalog\/commands\/[^\s)#]+#([^\s)]+)/)?.[1];
            const methods = [...allSections.filter((s) => catalogAnchor(s) || /\b(?:rpc |async def |public (?:static )?Task|(?:export )?(?:async )?function )/.test(s.body)), ...legacyFunctions];
            for (const method of methods) method.id ??= `${id}/${catalogAnchor(method) ?? method.anchor}`;
            const intro = doc.body.slice(0, doc.body.indexOf('\n## ')).replace(/^# .*\n/m, '');
            const shared = allSections.filter((s) => !methods.includes(s)).map((s) => `## ${s.title} {/* #${s.anchor} */}\n\n${s.body}`).join('\n\n');
            ctx.pages[id] = {id, title: doc.title, kind: 'group', methods: methods.map((s) => ({id: s.id, title: s.title, anchor: s.anchor})), body: `${intro}\n\n${shared}`, source, codes: parser.parse(doc.body).children.filter((n) => n.type === 'code').map((n) => n.value)};
            const releasedSource = doc.body.match(/\[(?:Released|Candidate) Source\]\([^\n]+\)/)?.[0] ?? '';
            for (const method of methods) {
              const methodId = method.id;
              if (ctx.pages[methodId]) throw new Error(`Duplicate command identity in ${source}: ${methodId}`);
              const body = method.body.replace(/\n?\[(?:Released|Candidate) Source\]\([^\n]+\)/g, '');
              const codes = parser.parse(body).children.filter((n) => n.type === 'code').map((n) => n.value);
              ctx.pages[methodId] = {id: methodId, title: method.title, group: id, anchor: method.anchor, kind: 'method', body, intro, shared: Boolean(shared), source, available: !/No released signature\s+is available/.test(body), releasedSource, contractHash: hash(body.replace(/\/api\/[^)\s]+/g, '/api')), codes};
            }
            // Fail before bundling if a new source format would discard a code
            // sample, type declaration, or signature during page extraction.
            const retained = [...parser.parse(ctx.pages[id].body).children.filter((n) => n.type === 'code').map((n) => n.value), ...methods.flatMap((m) => ctx.pages[m.id].codes)];
            const combined = retained.join('\n\n').replace(/\s+/g, ' ');
            for (const original of ctx.pages[id].codes) if (!retained.includes(original) && !combined.includes(original.replace(/\s+/g, ' ').trim())) throw new Error(`API extraction lost a code block in ${source}`);
          } else ctx.pages[id] = {id, title: doc.title, label: doc.meta.sidebar_label, kind: 'guide', body: doc.body.replace(/^# .*\n/m, ''), source};
        }
        contexts.push(ctx);
      }
    }
  }
  return {contexts, releases, compatibility: targets.compatibilityAddresses ?? {}};
}

const firstCalls = {'get-working-directory': 'file-operations/get-working-directory', 'get-number-of-collections': 'analysis-operations/get-number-of-collections', 'get-ith-collection-name': 'analysis-operations/get-i-th-collection-name'};
export const targetBase = (family, target) => `/api/${family}/sa-${target}`;
export const historyPath = (family, id) => `/api/${family}/${id}`;
export const pairAnchor = (release, target) => `release-${release}-sa-${target}`;
export const releaseLabel = (family) => family === 'grpc' ? 'Server' : 'Client';
const compareVersions = (a, b) => {
  const x = a.split('.').map(Number);
  const y = b.split('.').map(Number);
  for (let i = 0; i < Math.max(x.length, y.length); i++) if ((x[i] ?? 0) !== (y[i] ?? 0)) return (x[i] ?? 0) - (y[i] ?? 0);
  return 0;
};
// Page data ships to every reader; omit empty fields rather than send defaults.
const compact = (object) => Object.fromEntries(Object.entries(object).filter(([, value]) => value !== undefined && value !== null && value !== false && value !== ''));
const escape = (text) => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// Each SA target is read at the newest Briosa release that documents it, at a
// release-independent address. Earlier releases remain as method histories
// (every distinct published contract) and as their release-specific guides.
export async function compileReference(siteDir) {
  const {contexts, releases, compatibility: published} = await loadReference(siteDir);
  const contextMap = new Map(contexts.map((ctx) => [`${ctx.family}/${ctx.release}/${ctx.target}`, ctx]));
  const lookup = (family, release, target) => contextMap.get(`${family}/${release}/${target}`);
  const rank = (ctx) => releases[ctx.family].indexOf(ctx.release);
  const newestFirst = (a, b) => rank(a) - rank(b) || compareVersions(b.target, a.target);
  const targets = {};
  const current = {};
  const methodIds = {};
  const currentIds = {};
  for (const family of Object.keys(families)) {
    const own = contexts.filter((c) => c.family === family).sort(newestFirst);
    targets[family] = [...new Set(own.map((c) => c.target))].sort((a, b) => compareVersions(b, a));
    current[family] = Object.fromEntries(targets[family].map((target) => [target, own.find((c) => c.target === target)]));
    methodIds[family] = new Set(own.flatMap((c) => Object.keys(c.pages).filter((id) => c.pages[id].kind === 'method')));
    currentIds[family] = new Set(Object.values(current[family]).flatMap((c) => Object.keys(c.pages)));
  }
  // The current reference folds each first-call guide into its method page;
  // earlier releases keep the guide, since their method pages are history revisions.
  const isAlias = (ctx, id) => Boolean(ctx.current && firstCalls[id] && ctx.pages[firstCalls[id]]);
  for (const ctx of contexts) {
    ctx.current = current[ctx.family][ctx.target] === ctx;
    ctx.url = ctx.current ? targetBase(ctx.family, ctx.target) : ctx.base;
    // The current reference spans every target; an earlier release spans its own targets.
    ctx.pool = ctx.current ? Object.values(current[ctx.family]) : contexts.filter((c) => c.family === ctx.family && c.release === ctx.release);
    ctx.rendered = new Set(ctx.pool.flatMap((c) => Object.keys(c.pages)).filter((id) => !isAlias(ctx, id) && (ctx.current || !methodIds[ctx.family].has(id))));
  }

  // Group identical published contracts so each appears once in its history.
  const revisions = new Map();
  for (const family of Object.keys(families)) for (const id of methodIds[family]) {
    const documented = contexts.filter((c) => c.family === family && c.pages[id]?.kind === 'method' && c.pages[id].available !== false).sort(newestFirst).reverse();
    const list = [];
    for (const ctx of documented) {
      let revision = list.find((r) => r.hash === ctx.pages[id].contractHash);
      if (!revision) list.push(revision = {hash: ctx.pages[id].contractHash, pairs: []});
      revision.pairs.push(ctx);
    }
    list.forEach((revision, i) => { revision.n = i + 1; revision.ctx = revision.pairs.at(-1); });
    revisions.set(`${family}/${id}`, list);
  }
  const revisionOf = (ctx, id) => revisions.get(`${ctx.family}/${id}`)?.find((r) => r.pairs.includes(ctx));

  function locate(ctx, id) {
    if (isAlias(ctx, id)) id = firstCalls[id];
    if (ctx.rendered.has(id)) return ctx.url + suffix(id);
    // A pair that does not document the method is named in the query, so its
    // history page reports the gap rather than showing another pair's contract.
    if (methodIds[ctx.family].has(id)) return historyPath(ctx.family, id) + (revisionOf(ctx, id) ? '#' + pairAnchor(ctx.release, ctx.target) : `?release=${ctx.release}&sa=${ctx.target}`);
    return ctx.url;
  }

  const pages = [];
  const redirects = {};
  const navigation = {};

  function resolveLink(href, ctx, id) {
    if (href.startsWith('#')) return href;
    const [address, fragment] = href.split('#');
    let dest = ctx;
    let destId;
    if (address.startsWith('./') || address.endsWith('.md') && !address.includes('://')) {
      destId = path.posix.normalize(path.posix.join(path.posix.dirname(id.includes('/') ? id.split('/')[0] : id), address)).replace(/\.md$/, '');
      if (destId.startsWith('../')) return href;
    } else if (/^\/api\/(grpc|dotnet|python|javascript)(\/|$)/.test(address)) {
      const parts = address.split('/').slice(2);
      const family = parts.shift();
      let release;
      if (releases[family].includes(parts[0])) release = parts.shift();
      let target = targets[family].includes(ctx.target) ? ctx.target : targets[family][0];
      if (parts[0]?.startsWith('sa-')) target = parts.shift().slice(3);
      // Accept both canonical SA/release links and older release/SA snapshots.
      if (releases[family].includes(parts[0])) release = parts.shift();
      dest = release ? lookup(family, release, target) : current[family][target];
      if (!dest) return href;
      destId = parts.join('/') || 'overview';
    } else return href;
    const anchored = fragment && dest.pages[destId]?.methods?.find((m) => m.anchor === fragment);
    if (anchored) return locate(dest, anchored.id);
    const to = locate(dest, destId);
    return fragment && !to.includes('#') ? `${to}#${fragment}` : to;
  }

  async function html(markdown, ctx, id, {prefix = '', demote = 0} = {}) {
    markdown = markdown.replace(/^\[SA \d[^\n]+\n/gm, '')
      .replaceAll('Choose the other exact target in the sidebar;', 'Choose the SpatialAnalyzer target above;')
      .replace(/^:::([a-z]+)(?:\[([^\]]+)\])?\s*$/gm, (_, type, title) => `<aside class="alert alert--${type === 'warning' ? 'warning' : 'info'}">\n\n${title ? `**${title}**\n` : ''}`)
      .replace(/^:::\s*$/gm, '\n</aside>\n').replaceAll('className=', 'class=');
    const tree = parser.parse(markdown);
    const slugger = new Slugger();
    const toc = [];
    walk(tree, (node) => {
      if (node.type === 'link') node.url = resolveLink(node.url, ctx, id);
      if (node.type === 'heading') {
        const title = textOf(node).replace(/\s*\{\/\*.*?\*\/\}/g, '');
        const explicit = textOf(node).match(/\{\/\*\s*#([^ ]+)\s*\*\/\}/)?.[1];
        const anchor = explicit ?? slugger.slug(title);
        node.children = [{type: 'text', value: title}];
        node.data = {hProperties: {id: anchor}};
        node.depth = Math.min(6, node.depth + demote);
        toc.push({id: prefix + anchor, title});
      }
    });
    const rendered = await renderer.run(tree);
    const parameterTables = new Map();
    const anchors = [];
    const links = [];
    walk(rendered, (node) => {
      if (node.type === 'element' && /^h[2-6]$/.test(node.tagName)) {
        node.children.push({type: 'element', tagName: 'a', properties: {href: `#${node.properties.id}`, className: ['hash-link'], ariaLabel: `Link to ${textOf(node)}`}, children: [{type: 'text', value: '#'}]});
      }
      if (node.type === 'element' && node.tagName === 'tr') {
        const cells = node.children.filter((n) => n.type === 'element');
        const kind = textOf(cells[0] ?? {});
        if (['Request', 'Result'].includes(kind) && cells.length === 6) node.properties = {id: `${kind === 'Request' ? 'request' : 'response'}-${textOf(cells[2]).replaceAll('_', '-')}`};
      }
      if (node.type === 'element' && node.tagName === 'table') {
        const head = node.children.find((n) => n.tagName === 'thead');
        if (head && textOf(head).includes('Message') && textOf(head).includes('Briosa Default')) parameterTables.set(node, true);
      }
    });
    // Request and response are separate sections, so the Message column is redundant.
    for (const table of parameterTables.keys()) walk(table, (node) => {
      if (node.tagName === 'tr') {
        const first = node.children.findIndex((n) => n.tagName === 'th' || n.tagName === 'td');
        if (first >= 0) node.children.splice(first, 1);
      }
    });
    // Several revisions share one history page, so their anchors are namespaced.
    if (prefix) walk(rendered, (node) => {
      if (node.type !== 'element') return;
      if (node.properties?.id) node.properties.id = prefix + node.properties.id;
      if (typeof node.properties?.href === 'string' && node.properties.href.startsWith('#')) node.properties.href = '#' + prefix + node.properties.href.slice(1);
    });
    walk(rendered, (node) => {
      if (node.properties?.id) anchors.push(node.properties.id);
      if (node.properties?.href && /^(\/|#)/.test(node.properties.href)) links.push(node.properties.href);
    });
    return {html: renderer.stringify(rendered), toc, anchors, links};
  }

  // Keep every original contract byte; add structure around existing code/tables.
  // Group notes vary by release, so history revisions link to each release's own.
  function methodMarkdown(ctx, original, id, {notes = true} = {}) {
    let body = original.body;
    if (ctx.family === 'grpc') {
      const table = body.match(/\| Message \|[^\n]+\n\|[^\n]+\n(?:\|[^\n]+\n?)+/);
      if (table) {
        const lines = table[0].trim().split('\n');
        const part = (label, kind) => `## ${label}\n\n${lines.slice(0, 2).join('\n')}\n${lines.slice(2).filter((l) => l.startsWith(`| ${kind} |`)).join('\n')}\n`;
        body = body.replace(table[0], `${part('Request Parameters', 'Request')}\n${part('Response', 'Result')}\n`);
      }
    }
    body = body.replace(/```(?:proto|python|ts|csharp)\n/, '## Signature\n\n$&');
    if (!notes) return body;
    body += `\n\n## Execution Notes\n\n${original.intro}\n\n${original.releasedSource}`;
    if (original.shared) body += `\n\n[Shared Types and Group Notes](${ctx.base}/${original.group})`;
    const guideId = Object.keys(firstCalls).find((k) => firstCalls[k] === id);
    if (guideId && ctx.pages[guideId]) body += `\n\n## First Call Walkthrough\n\n${ctx.pages[guideId].body}`;
    return body;
  }

  const documentedIn = (ctx, id) => Boolean(ctx?.pages[id]) && ctx.pages[id].available !== false;
  function compatibility(family, id) {
    const pairs = contexts.filter((c) => c.family === family && documentedIn(c, id));
    return {
      history: methodIds[family].has(id) ? historyPath(family, id) : null,
      revisions: revisions.get(`${family}/${id}`)?.length ?? 0,
      targets: targets[family].map((target) => {
        const ctx = current[family][target];
        const since = pairs.filter((c) => c.target === target).sort(newestFirst).at(-1);
        return {target, release: ctx.release, available: documentedIn(ctx, id), href: currentIds[family].has(id) ? locate(ctx, id) : null, since: since?.release ?? null};
      }),
    };
  }
  function variants(ctx, id) {
    const original = ctx?.pages[id];
    return contexts.filter((c) => c.family === (ctx?.family) && c.pages[id]).sort(newestFirst).map((c) => compact({
      release: c.release, target: c.target, href: locate(c, id), available: c.pages[id].available !== false, current: c.current,
      same: Boolean(original?.contractHash && original.contractHash === c.pages[id].contractHash),
      summary: original ? differenceSummary(original, c.pages[id]) : '', revision: revisionOf(c, id)?.n,
    }));
  }
  function related(ctx, id) {
    return Object.keys(families).filter((family) => family !== ctx.family).map((family) => {
      const dest = current[family][ctx.target];
      return dest && currentIds[family].has(id) && !isAlias(dest, id) ? {family, href: locate(dest, id)} : null;
    }).filter(Boolean);
  }

  for (const ctx of contexts) {
    const discovery = ctx.family === 'grpc' ? 'discovery' : 'installation-selection';
    const nav = {base: ctx.url, family: ctx.family, release: ctx.release, target: ctx.target, current: ctx.current, targets: targets[ctx.family], releases: releases[ctx.family], label: `Briosa ${families[ctx.family]}`, discovery: ctx.pages[discovery] ? discovery : null, valueTypes: Boolean(ctx.pages['value-types']), groups: [], lifecycle: [], firstCalls: []};
    const lifecycle = ctx.sidebar.find((s) => s.label === 'Lifecycle');
    for (const {id} of flattenGroups(lifecycle?.items ?? [])) if (ctx.pages[id]) nav.lifecycle.push({id, title: ctx.pages[id].title});
    for (const id of Object.values(firstCalls)) if (ctx.pages[id]) nav.firstCalls.push({id, title: ctx.pages[id].title, available: documentedIn(ctx, id)});
    for (const group of ctx.groups) {
      const original = ctx.pages[group.id] ?? ctx.pool.map((s) => s.pages[group.id]).find(Boolean);
      if (!original) continue;
      const methods = [...new Map(ctx.pool.flatMap((s) => s.pages[group.id]?.methods ?? []).map((m) => [m.id, m])).values()];
      nav.groups.push({id: group.id, title: group.label ?? original.title, parents: group.parents, methods: methods.map((m) => ({...m, available: documentedIn(ctx, m.id)}))});
    }
    navigation[ctx.url] = nav;
    for (const id of ctx.rendered) {
      const original = ctx.pages[id];
      const fallback = original ?? ctx.pool.map((s) => s.pages[id]).find(Boolean);
      const available = Boolean(original) && original.available !== false;
      const page = {
        id, title: fallback.title, family: ctx.family, release: ctx.release, target: ctx.target, base: ctx.url, path: ctx.url + suffix(id),
        kind: fallback.kind, group: fallback.group, groupHref: fallback.group ? locate(ctx, fallback.group) : null, anchor: fallback.anchor, current: ctx.current, available, noindex: !available || !ctx.current,
        source: fallback.source, description: `${fallback.title} — ${families[ctx.family]} ${ctx.release}, SpatialAnalyzer ${ctx.target}.`,
        html: '', toc: [], variants: variants(ctx, id), related: related(ctx, id),
        compatibility: fallback.kind === 'method' ? compatibility(ctx.family, id) : null,
      };
      if (original) {
        const rendered = await html(original.kind === 'method' ? methodMarkdown(ctx, original, id) : original.body, ctx, id);
        Object.assign(page, {html: rendered.html, toc: rendered.toc});
      }
      pages.push(page);
    }
  }

  // One history page per method identity: every documented release and target,
  // with each distinct published contract shown once, newest first.
  for (const family of Object.keys(families)) for (const id of methodIds[family]) {
    const list = revisions.get(`${family}/${id}`);
    const all = contexts.filter((c) => c.family === family && c.pages[id]).sort(newestFirst);
    const newest = list.at(-1)?.ctx ?? all[0];
    const source = newest.pages[id];
    const sections = [];
    const toc = [];
    for (const revision of [...list].reverse()) {
      const original = revision.ctx.pages[id];
      const prefix = `revision-${revision.n}-`;
      const rendered = await html(methodMarkdown(revision.ctx, original, id, {notes: false}), revision.ctx, id, {prefix, demote: 1});
      revision.anchors = rendered.anchors.map((a) => a.slice(prefix.length));
      const releasesIn = [...new Set(revision.pairs.map((c) => c.release))].sort((a, b) => compareVersions(b, a));
      const heading = `Revision ${revision.n}: ${releaseLabel(family)} ${releasesIn.join(', ')}`;
      const older = list[revision.n - 2];
      const {changes, tables} = older ? revisionChanges(older.ctx.pages[id], original) : {changes: [], tables: false};
      const change = !older ? `First documented in ${releaseLabel(family)} ${revision.pairs[0].release}.`
        : changes.length ? `Changes from Revision ${older.n}: ${changes.join('; ')}.`
        : tables ? `Parameter tables match Revision ${older.n}; the signature, notes, or examples differ.`
        : `The signature, notes, or examples differ from Revision ${older.n}.`;
      const pairs = [...revision.pairs].sort(newestFirst).map((c) => {
        const source = c.pages[id].releasedSource.match(/^\[([^\]]+)\]\(([^)\s]+)\)/);
        const group = c.pages[id].group;
        const guide = !c.current && Object.keys(firstCalls).find((k) => firstCalls[k] === id && c.rendered.has(k));
        const links = [group && `<a href="${escape(locate(c, group))}">Group Notes</a>`, guide && `<a href="${escape(locate(c, guide))}">First Call Walkthrough</a>`, source && `<a href="${escape(source[2])}">${escape(source[1])}</a>`].filter(Boolean).join(' · ');
        return `<li id="${pairAnchor(c.release, c.target)}">${releaseLabel(family)} ${escape(c.release)} · SA ${escape(c.target)}${c.current ? ' (current reference)' : ''}${links ? ` — ${links}` : ''}</li>`;
      }).join('');
      sections.push(`<section class="api-revision" aria-labelledby="revision-${revision.n}"><h2 id="revision-${revision.n}">${escape(heading)}<a href="#revision-${revision.n}" class="hash-link" aria-label="Link to ${escape(heading)}">#</a></h2><p class="api-revision-scope">Documented for:</p><ul class="api-revision-pairs">${pairs}</ul><p class="api-revision-changes">${escape(change)}</p><div class="api-revision-contract">${rendered.html}</div></section>`);
      toc.push({id: `revision-${revision.n}`, title: heading});
    }
    pages.push({
      id, title: source.title, family, release: newest.release, target: 'all', base: current[family][newest.target]?.url ?? newest.url,
      path: historyPath(family, id), kind: 'history', group: source.group, anchor: source.anchor,
      groupHref: source.group && current[family][newest.target]?.rendered.has(source.group) ? locate(current[family][newest.target], source.group) : null, current: false, available: list.length > 0, noindex: list.length === 0,
      source: source.source, description: `${source.title}: the Briosa ${releaseLabel(family).toLowerCase()} releases and SpatialAnalyzer versions that document this method, with each published contract.`,
      html: sections.join(''), toc, compatibility: compatibility(family, id), related: [],
      variants: all.map((c) => compact({release: c.release, target: c.target, href: revisionOf(c, id) ? `#${pairAnchor(c.release, c.target)}` : null, available: documentedIn(c, id), current: c.current, revision: revisionOf(c, id)?.n})),
    });
  }

  // Former addresses become static redirect documents, not client routes.
  const stub = (from, to, extra = {}) => { if (!redirects[from]) redirects[from] = {to, ...extra}; };
  // How a former method page's sections reach their content in history: the
  // contract's sections in its revision, Execution Notes in the release's group
  // notes, a first-call walkthrough on the release's guide page. Headings are
  // listed; parameter-row anchors are matched by pattern where the revision has rows.
  const parameterRow = /^(?:request|response)-(?!parameters$)/;
  function formerSections(ctx, id, revision) {
    const guideId = Object.keys(firstCalls).find((k) => firstCalls[k] === id && ctx.rendered.has(k));
    const guideAnchors = guideId ? pages.find((p) => p.path === locate(ctx, guideId))?.toc.map((t) => t.id) ?? [] : [];
    return {
      prefix: `revision-${revision.n}-`, release: ctx.release, kept: revision.anchors.filter((a) => !parameterRow.test(a)),
      ...(revision.anchors.some((a) => parameterRow.test(a)) && {rows: true}),
      ...(ctx.pages[id].group && {group: locate(ctx, ctx.pages[id].group)}),
      ...(guideId && {guide: locate(ctx, guideId), guideAnchors}),
    };
  }
  // Method anchors a former address published, resolved where it now leads: an
  // unversioned address follows the current reference, not its frozen release.
  const aliasesOf = (ctx, id, dest = ctx) => Object.fromEntries([...(ctx.pages[id]?.methods ?? []), ...(dest === ctx ? [] : dest.pages[id]?.methods ?? [])].map((m) => [m.anchor, locate(dest, m.id)]));
  // Only addresses published before references became release-independent get a
  // redirect document (targets.json compatibilityAddresses). Later releases are
  // published at stable addresses, so the set never grows with new releases.
  const latestPublished = Object.fromEntries(Object.keys(families).map((family) => [family, releases[family].find((r) => published[family]?.includes(r))]));
  for (const ctx of contexts) {
    if (ctx.current) for (const id of Object.keys(firstCalls)) if (isAlias(ctx, id)) stub(ctx.url + suffix(id), locate(ctx, id));
    if (!published[ctx.family]?.includes(ctx.release)) continue;
    // Release-qualified addresses published since the first redesign.
    const sameRelease = contexts.filter((c) => c.family === ctx.family && c.release === ctx.release);
    for (const id of new Set(sameRelease.flatMap((c) => Object.keys(c.pages)))) {
      const revision = methodIds[ctx.family].has(id) && !ctx.current ? revisionOf(ctx, id) : null;
      stub(ctx.base + suffix(id), locate(ctx, id), {aliases: aliasesOf(ctx, id), target: ctx.target, ...(methodIds[ctx.family].has(id) && !ctx.current && {history: true, ...(revision && formerSections(ctx, id, revision))})});
    }
    // Pre-redesign entry routes, relative to the newest release published with
    // them. Without an explicit SA segment, a reader's remembered target
    // chooses among the release's documented targets.
    const latest = ctx.release === latestPublished[ctx.family];
    const legacyBase = `/api/${ctx.family}${latest ? '' : `/${ctx.release}`}${ctx.target === ctx.defaultTarget ? '' : `/sa-${ctx.target}`}`;
    for (const id of Object.keys(ctx.pages)) {
      if (id.includes('/')) continue;
      const choices = ctx.target === ctx.defaultTarget ? Object.fromEntries(sameRelease.filter((c) => c !== ctx).map((c) => [c.target, {to: locate(latest ? current[c.family][c.target] : c, id), aliases: aliasesOf(c, id, latest ? current[c.family][c.target] : c)}])) : undefined;
      stub(legacyBase + suffix(id), locate(latest ? current[ctx.family][ctx.target] : ctx, id), {aliases: aliasesOf(ctx, id, latest ? current[ctx.family][ctx.target] : ctx), ...(choices && {choices})});
    }
  }
  const routes = new Set([...pages.map((p) => p.path), ...Object.keys(families).map((f) => `/api/${f}`)]);
  for (const from of Object.keys(redirects)) if (routes.has(from)) delete redirects[from];

  const index = Object.fromEntries(Object.keys(families).map((family) => [family, {
    family, label: families[family], releaseLabel: releaseLabel(family),
    targets: targets[family].map((target) => {
      const ctx = current[family][target];
      return {target, release: ctx.release, href: ctx.url, methods: [...currentIds[family]].filter((id) => ctx.pages[id]?.kind === 'method' && documentedIn(ctx, id)).length};
    }),
    releases: releases[family].map((release) => ({release, targets: targets[family].filter((t) => lookup(family, release, t)).map((target) => {
      const ctx = lookup(family, release, target);
      return {target, href: ctx.url, current: ctx.current};
    })})),
  }]));
  return {pages, redirects, navigation, index};
}
