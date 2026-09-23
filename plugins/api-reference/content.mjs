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

function differenceSummary(a, b) {
  if (!a || !b) return '';
  const fields = (body) => {
    const result = new Map();
    for (const row of body.split('\n').filter((l) => /^\| (Request|Result) \|/.test(l))) {
      const cells = row.split('|').slice(1, -1).map((c) => c.trim().replaceAll('`', ''));
      if (cells.length === 6) result.set(`${cells[0]}:${cells[1]}`, {name: cells[2], type: cells[3], value: cells[5]});
    }
    return result;
  };
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
            const releasedSource = doc.body.match(/\[Released Source\]\([^\n]+\)/)?.[0] ?? '';
            for (const method of methods) {
              const methodId = method.id;
              if (ctx.pages[methodId]) throw new Error(`Duplicate command identity in ${source}: ${methodId}`);
              const body = method.body.replace(/\n?\[Released Source\]\([^\n]+\)/g, '');
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
  return {contexts, releases};
}

const firstCalls = {'get-working-directory': 'file-operations/get-working-directory', 'get-number-of-collections': 'analysis-operations/get-number-of-collections', 'get-ith-collection-name': 'analysis-operations/get-i-th-collection-name'};

export async function compileReference(siteDir) {
  const {contexts, releases} = await loadReference(siteDir);
  const contextMap = new Map(contexts.map((ctx) => [`${ctx.family}/${ctx.release}/${ctx.target}`, ctx]));
  const lookup = (family, release, target) => contextMap.get(`${family}/${release}/${target}`);
  const manifest = {releases, contexts: contexts.map(({family, release, target, base, pages}) => ({family, release, target, base, ids: Object.keys(pages)}))};
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
      let release = releases[family][0];
      if (releases[family].includes(parts[0])) release = parts.shift();
      let target = ctx.target;
      if (parts[0]?.startsWith('sa-')) target = parts.shift().slice(3);
      // Accept both canonical SA/release links and older release/SA snapshots.
      if (releases[family].includes(parts[0])) release = parts.shift();
      dest = lookup(family, release, target);
      if (!dest) return href;
      destId = parts.join('/') || 'overview';
    } else return href;
    const anchored = fragment && dest.pages[destId]?.methods?.find((m) => m.anchor === fragment);
    if (anchored) return dest.base + suffix(anchored.id);
    if (firstCalls[destId] && dest.pages[firstCalls[destId]]) destId = firstCalls[destId];
    return dest.base + suffix(destId) + (fragment ? `#${fragment}` : '');
  }

  async function html(markdown, ctx, id) {
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
        toc.push({id: anchor, title});
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
    walk(rendered, (node) => {
      if (node.properties?.id) anchors.push(node.properties.id);
      if (node.properties?.href && /^(\/|#)/.test(node.properties.href)) links.push(node.properties.href);
    });
    return {html: renderer.stringify(rendered), toc, anchors, links};
  }

  for (const ctx of contexts) {
    const siblings = contexts.filter((c) => c.family === ctx.family && c.release === ctx.release);
    const allIds = [...new Set(siblings.flatMap((c) => Object.keys(c.pages)))];
    const discovery = ctx.family === 'grpc' ? 'discovery' : 'installation-selection';
    const nav = {base: ctx.base, family: ctx.family, release: ctx.release, target: ctx.target, label: `Briosa ${families[ctx.family]}`, discovery: ctx.pages[discovery] ? discovery : null, valueTypes: Boolean(ctx.pages['value-types']), groups: [], lifecycle: [], firstCalls: []};
    const lifecycle = ctx.sidebar.find((s) => s.label === 'Lifecycle');
    for (const {id} of flattenGroups(lifecycle?.items ?? [])) if (ctx.pages[id]) nav.lifecycle.push({id, title: ctx.pages[id].title});
    for (const [old, id] of Object.entries(firstCalls)) if (ctx.pages[id]) nav.firstCalls.push({id, title: ctx.pages[id].title});
    for (const group of ctx.groups) {
      const original = ctx.pages[group.id] ?? siblings.map((s) => s.pages[group.id]).find(Boolean);
      if (!original) continue;
      const methods = [...new Map(siblings.flatMap((s) => s.pages[group.id]?.methods ?? []).map((m) => [m.id, m])).values()];
      nav.groups.push({id: group.id, title: group.label ?? original.title, parents: group.parents, methods: methods.map((m) => ({...m, available: Boolean(ctx.pages[m.id]) && ctx.pages[m.id].available !== false}))});
    }
    navigation[ctx.base] = nav;
    for (const id of allIds) {
      if (firstCalls[id] && ctx.pages[firstCalls[id]]) {
        redirects[ctx.base + suffix(id)] = {to: ctx.base + suffix(firstCalls[id]), aliases: {}, family: ctx.family, release: ctx.release, target: ctx.target, id: firstCalls[id], explicitTarget: true};
        continue;
      }
      const original = ctx.pages[id];
      const fallback = original ?? siblings.map((s) => s.pages[id]).find(Boolean);
      const variants = contexts.filter((c) => c.family === ctx.family && c.pages[id]).map((c) => ({release: c.release, target: c.target, href: c.base + suffix(id), available: c.pages[id].available !== false, same: Boolean(original?.contractHash && original.contractHash === c.pages[id].contractHash), summary: differenceSummary(original, c.pages[id])}));
      const page = {id, title: fallback.title, family: ctx.family, release: ctx.release, target: ctx.target, base: ctx.base, path: ctx.base + suffix(id), kind: fallback.kind, group: fallback.group, anchor: fallback.anchor, available: Boolean(original) && original.available !== false, variants, source: fallback.source, description: `${fallback.title} — ${families[ctx.family]} ${ctx.release}, SpatialAnalyzer ${ctx.target}.`, html: '', toc: [], aliases: {}};
      if (original?.kind === 'group') {
        const group = nav.groups.find((g) => g.id === id);
        page.methods = group?.methods ?? [];
        page.aliases = Object.fromEntries(page.methods.map((m) => [m.anchor, ctx.base + suffix(m.id)]));
        Object.assign(page, await html(original.body, ctx, id));
      } else if (original) {
        let body = original.body;
        if (original.kind === 'method') {
          // Keep every original contract byte; add structure around existing code/tables.
          if (ctx.family === 'grpc') {
            const table = body.match(/\| Message \|[^\n]+\n\|[^\n]+\n(?:\|[^\n]+\n?)+/);
            if (table) {
              const lines = table[0].trim().split('\n');
              const part = (label, kind) => `## ${label}\n\n${lines.slice(0, 2).join('\n')}\n${lines.slice(2).filter((l) => l.startsWith(`| ${kind} |`)).join('\n')}\n`;
              body = body.replace(table[0], `${part('Request Parameters', 'Request')}\n${part('Response', 'Result')}\n`);
            }
          }
          body = body.replace(/```(?:proto|python|ts|csharp)\n/, '## Signature\n\n$&');
          body += `\n\n## Execution Notes\n\n${original.intro}\n\n${original.releasedSource}`;
          if (original.shared) body += `\n\n[Shared Types and Group Notes](${ctx.base}/${original.group})`;
          if (firstCalls && Object.values(firstCalls).includes(id)) {
            const guideId = Object.keys(firstCalls).find((k) => firstCalls[k] === id);
            const guide = ctx.pages[guideId];
            if (guide) body += `\n\n## First Call Walkthrough\n\n${guide.body}`;
          }
        }
        Object.assign(page, await html(body, ctx, id));
      }
      pages.push(page);
    }
    const legacyBase = `/api/${ctx.family}${ctx.release === releases[ctx.family][0] ? '' : `/${ctx.release}`}${ctx.target === ctx.defaultTarget ? '' : `/sa-${ctx.target}`}`;
    for (const id of Object.keys(ctx.pages)) {
      if (id.includes('/')) continue;
      const destId = firstCalls[id] && ctx.pages[firstCalls[id]] ? firstCalls[id] : id;
      const destination = ctx.base + suffix(destId);
      const canonical = pages.find((p) => p.path === destination);
      const sectionLinks = Object.fromEntries((canonical?.toc ?? []).map((s) => [s.id, `${destination}#${s.id}`]));
      redirects[legacyBase + suffix(id)] = {to: destination, sectionLinks, aliases: ctx.pages[id].methods ? Object.fromEntries(ctx.pages[id].methods.map((m) => [m.anchor, ctx.base + suffix(m.id)])) : {}, family: ctx.family, release: ctx.release, target: ctx.target, id: destId, explicitTarget: ctx.target !== ctx.defaultTarget};
    }
  }
  // Preserve the first redesign's release/SA addresses, including section links.
  // Exact aliases stay pinned to their target regardless of browser preferences.
  for (const page of pages) {
    const {family, release, target, id} = page;
    redirects[`/api/${family}/${release}/sa-${target}` + suffix(id)] = {
      to: page.path, family, release, target, id, explicitTarget: true,
      aliases: page.aliases,
      sectionLinks: Object.fromEntries([...(page.anchors ?? []), 'version-differences'].map((anchor) => [anchor, `${page.path}#${anchor}`])),
    };
  }
  for (const ctx of contexts) for (const id of Object.keys(firstCalls)) {
    const redirect = redirects[ctx.base + suffix(id)];
    if (redirect) redirects[`/api/${ctx.family}/${ctx.release}/sa-${ctx.target}` + suffix(id)] = redirect;
  }
  // Short method entry points retain useful cross-version history even after removal.
  for (const family of Object.keys(families)) {
    const ids = [...new Set(contexts.filter((c) => c.family === family).flatMap((c) => Object.keys(c.pages).filter((id) => c.pages[id].kind === 'method')))];
    for (const id of ids) {
      const variants = pages.filter((p) => p.family === family && p.id === id);
      const source = variants[0];
      pages.push({...source, available: variants.some((p) => p.available), path: `/api/${family}/${id}`, kind: 'history', html: '', toc: [], anchors: [], links: [], variants: variants.map((p) => ({release: p.release, target: p.target, href: p.path, available: p.available})), description: `${source.title}: documented Briosa releases and SpatialAnalyzer target availability.`});
    }
  }
  return {pages, redirects, navigation, manifest};
}
