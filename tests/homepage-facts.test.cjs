// Checks every fact in src/components/Home/data.ts against the pages its header
// comment names, as a closed world. Every token of a checked kind on a source
// page must be classified by one of the rules below, and the current ones must
// agree with the homepage in both directions. A token that no rule classifies
// fails with its page and line, so an addition in an unexpected place or
// phrasing cannot pass unseen. The featured operations and ticker RPCs are
// curated subsets of the released API, so they are checked for membership and
// identity only.
//
// Exact targets, on the release, install and catalog pages:
//   T1 current: a homepage target.
//   T2 unreleased: inside a catalog card whose status is not Released.
//   H1 history: inside a section whose heading names an earlier release.
// Product versions, on the install page and the catalog overviews. On the
// release page, whose history is not scanned, the Released Version column and
// the registry link pins. A version belongs to the product (Installer, Server,
// Client) named before it in its sentence, to the Briosa release or installer
// asset its link names, or on the install page to the installer.
//   V1 current: the homepage version of that product.
//   V2 bound: written "X or later", or as the start of "X through Y".
//   V3 comparison: older than the homepage version, in a sentence that also
//      states the homepage version of the same product.
//   H1 history, as for targets.
//   E1 a listed mention of an earlier release (earlierMentions below).
// Links, on the same pages:
//   L1 a label and a destination that both name targets, or both name
//      versions, name the same ones. "SA <year>" names that year's homepage target.
//   R1 a registry package link, anywhere on the release and install pages,
//      names the homepage package of its target, pinned at versions.clients.
// gRPC services, in every guide, group introduction, shared section and
// operation of the current reference:
//   S1 current: briosa.Service/Method, or briosa.Service where the reference
//      declares that service or calls one of its methods. briosa.Name for a
//      declared message or enum is a type. Any other briosa.Name is ambiguous.
//   S2 current: a service in a protobuf fence that declares package briosa,
//      or that continues one declared earlier in its section.
//   S3 example: a service in a fence that declares another package.
//   S4 a service in a fence with no package is current when S1 names it, and
//      otherwise ambiguous.
//   S5 removed: anything in an operation without a released signature.
// MP root groups, on the hierarchy page:
//   G1 every <details> element is a root group with a stated count.
//   G2 every line in a root group is a group path "- Name — count", or a link
//      without a count.
const {existsSync, globSync, readFileSync} = require('node:fs');
const {join} = require('node:path');
const {test} = require('node:test');
const assert = require('node:assert/strict');
const {unified} = require('unified');
const {default: remarkParse} = require('remark-parse');
const {default: remarkGfm} = require('remark-gfm');
const home = require('../src/components/Home/data.ts');

const root = join(__dirname, '..');
const data = 'src/components/Home/data.ts';
const releases = 'docs/releases.md';
const install = 'src/pages/install.md';
const catalog = 'mp-command-catalog/overview.md';
const targetPage = (target, name) => `mp-command-catalog/${target}/${name}.md`;
const read = (page) => readFileSync(join(root, page), 'utf8').replaceAll('\r\n', '\n');
const list = (values) => [...values].join(', ') || 'nothing';
const yearOf = (target) => target.split('.')[0];
const number = (text) => Number(text.replaceAll(',', ''));

// An exact target has four parts, such as 2026.1.0529.7. A PyPI name spells it with hyphens.
const TARGET = /(?<!\d|\d[.-])(\d{4})([.-])(\d+)\2(\d+)\2(\d+)(?!\d|[.-]\d)/g;
const VERSION = /(?<!\d|\d[.-])v?(\d+\.\d+\.\d+)(?!\d|[.-]\d)/g;
const exactTargets = (text) => new Set(Array.from(text.matchAll(TARGET), (m) => `${m[1]}.${m[3]}.${m[4]}.${m[5]}`));
const versionsIn = (text) => new Set(Array.from(text.matchAll(VERSION), (m) => m[1]));
function older(version, than) {
  const [a, b] = [version, than].map((value) => value.split('.').map(Number));
  const index = a.findIndex((part, i) => part !== b[i]);
  return index >= 0 && a[index] < b[index];
}

function capture(fact, page, text, pattern) {
  const match = text.match(pattern);
  assert.ok(match, `Could not read ${fact} from ${page}. Check the source page's format.`);
  return match[1];
}

const count = (fact, page, text, pattern) => number(capture(fact, page, text, pattern));

function agrees(fact, actual, expected, page) {
  assert.equal(actual, expected, `${fact} in ${data} is ${JSON.stringify(actual)}. Expected ${JSON.stringify(expected)} from ${page}.`);
}

// Compares a homepage list with the complete set its source page publishes.
function sameSet(fact, actual, expected, page) {
  const differences = [
    ...[...expected].filter((value) => !actual.includes(value)).map((value) => `adds ${value}`),
    ...actual.filter((value) => !expected.has(value)).map((value) => `omits ${value}`),
    ...actual.filter((value, index) => actual.indexOf(value) !== index).map((value) => `lists ${value} once`),
  ];
  assert.ok(!differences.length, `${fact} in ${data} is ${list(actual)}. Expected ${list(expected)} from ${page}, which ${differences.join(', ')}.`);
}

// The homepage's own shape comes first, so a key error names its source page
// instead of surfacing as an exception in a later lookup.
function homepageTargets(source) {
  const entries = Object.entries(home.targets ?? {});
  assert.ok(entries.length, `targets in ${data} is empty. Expected the exact targets from ${source}.`);
  for (const [key, target] of entries) {
    const [exact, ...others] = typeof target === 'string' ? exactTargets(target) : [];
    assert.ok(exact === target && !others.length, `targets.${key} in ${data} is ${JSON.stringify(target)}, which is not an exact target. Expected the exact targets from ${source}.`);
    assert.equal(key, `sa${yearOf(target)}`, `targets.${key} in ${data} is "${target}". Expected the key sa${yearOf(target)} for it, as ${source} names it.`);
  }
  return entries.map(([, target]) => target);
}

function homepageTarget(key, facts, source) {
  assert.ok(home.targets?.[key], `targets.${key} in ${data} is missing. ${facts} describe it, as ${source} does.`);
  return home.targets[key];
}

function perTargetFacts(targets, source) {
  for (const target of targets) {
    const fact = `currentOperations${yearOf(target)}`;
    assert.equal(typeof home[fact], 'number', `${fact} in ${data} is missing. Expected the Current operations of SA ${target} from ${source}.`);
  }
}

// ---------------------------------------------------------------------------
// A Markdown page as blocks: front matter, paragraphs, headings, table cells,
// code fences and HTML. Each block keeps its raw source, its visible text (with
// link destinations and tags blanked, so offsets still line up), its line, and
// the h2 section it belongs to.

const markdown = unified().use(remarkParse).use(remarkGfm);
const leaves = new Set(['paragraph', 'heading', 'tableCell', 'code', 'html']);
const plain = (node) => node.value ?? (node.children ?? []).map(plain).join('');
const blank = (text) => text.replace(/[^\n]/g, ' ');
const visibleText = (raw) => raw.replace(/(\]\()([^)]*)\)/g, (_, open, url) => `${open}${blank(url)})`).replace(/<[^>]*>/g, blank);

function* walk(node) {
  yield node;
  for (const child of node.children ?? []) yield* walk(child);
}

const pages = new Map();
function page(path, facts) {
  if (pages.has(path)) return pages.get(path);
  assert.ok(existsSync(join(root, path)), `Could not read ${facts} from ${path}, which does not exist.`);
  const text = read(path);
  const front = text.match(/^---\n[\s\S]*?\n---\n/)?.[0] ?? '';
  const model = {path, text, blocks: [], tables: [], links: [], lineOf: (offset) => text.slice(0, offset).split('\n').length};
  let section;
  const add = (type, start, end, node) => {
    const raw = text.slice(start, end);
    // A table cell's text leaves out its pipes.
    const block = {type, start, raw, text: raw.replace(/^\s*\|/, '').replace(/\|\s*$/, '').trim(), visible: visibleText(raw), line: model.lineOf(start), section};
    model.blocks.push(block);
    for (const link of node ? walk(node) : []) {
      if (link.type === 'link') model.links.push({label: plain(link), url: link.url, line: model.lineOf(link.position.start.offset), block});
    }
    for (const anchor of type === 'html' ? raw.matchAll(/<(a|Link)\b([^>]*)>([\s\S]*?)<\/\1>/g) : []) {
      const url = anchor[2].match(/\b(?:href|to)="([^"]*)"/)?.[1] ?? '';
      model.links.push({label: anchor[3].replace(/<[^>]*>/g, ' ').trim(), url, line: model.lineOf(start + anchor.index), block});
    }
    return block;
  };
  const leaf = (node) => add(node.type, node.position.start.offset, node.position.end.offset, node);
  const visit = (node) => {
    if (node.type === 'table') {
      const [header, ...rows] = node.children.map((row) => row.children.map(leaf));
      model.tables.push({header: header.map((cell) => cell.text), rows});
    } else if (leaves.has(node.type)) {
      if (node.type === 'heading' && node.depth <= 2) section = undefined;
      const block = leaf(node);
      if (node.type === 'heading' && node.depth <= 2) section = block.section = block;
    } else (node.children ?? []).forEach(visit);
  };
  if (front) add('front matter', 0, front.length);
  visit(markdown.parse(blank(front) + text.slice(front.length)));
  pages.set(path, model);
  return model;
}

// The rows of the one table on a page that has all the named columns.
function table(model, facts, columns) {
  const matches = model.tables.filter(({header}) => columns.every((column) => header.includes(column)));
  assert.equal(matches.length, 1, `Could not read ${facts} from ${model.path}. Expected one table with the columns ${columns.join(', ')}.`);
  const [{header, rows}] = matches;
  return rows.map((cells) => Object.fromEntries(columns.map((column) => [column, cells[header.indexOf(column)]])));
}

// Every occurrence of a token on a page, with its block, offset in the block and line.
function occurrences(model, pattern, value) {
  return model.blocks.flatMap((block) => Array.from(block.raw.matchAll(pattern), (match) => ({
    value: value(match), block, index: match.index, length: match[0].length, page: model.path, line: model.lineOf(block.start + match.index),
    visible: block.visible.slice(match.index, match.index + match[0].length) === match[0],
  })));
}

function unaccounted(kind, occurrence, reason, remedy) {
  return `${kind} ${occurrence.value} at ${occurrence.page}:${occurrence.line} is not accounted for. ${reason} ${remedy}`;
}

// The sentence of a block's visible text around an offset.
function sentence(block, index) {
  const ends = Array.from(block.visible.matchAll(/[.!?](?=\s|$)/g), (match) => match.index + 1);
  return [Math.max(0, ...ends.filter((end) => end <= index)), Math.min(block.visible.length, ...ends.filter((end) => end > index))];
}

const productNames = {installer: 'installer', server: 'server', client: 'clients'};

// The product a version belongs to (the attribution rules in the header).
function productOf(occurrence, pageProduct) {
  const {block, index, visible} = occurrence;
  const before = block.raw.slice(0, index);
  if (/briosa-installer-v?$/.test(before)) return 'installer';
  if (!visible) {
    const url = before.match(/[^\s()"'<>]*$/)[0];
    if (/github\.com\/spatialanalyzer\/briosa-installer\//.test(url)) return 'installer';
    if (/github\.com\/spatialanalyzer\/briosa\//.test(url)) return 'server';
    return undefined;
  }
  const [start] = sentence(block, index);
  const noun = Array.from(block.visible.slice(start, index).matchAll(/\b(installer|server|client)s?\b/gi)).at(-1)?.[1].toLowerCase();
  return noun ? productNames[noun] : pageProduct;
}

// H1: a section whose heading names an earlier release of a product.
const earlier = new Map();
function history(block) {
  const heading = block.section;
  if (!heading) return false;
  if (!earlier.has(heading)) {
    earlier.set(heading, occurrences({blocks: [heading], path: '', lineOf: () => 0}, VERSION, (m) => m[1])
      .some((occurrence) => {
        const product = productOf(occurrence);
        return product && older(occurrence.value, home.versions[product]);
      }));
  }
  return earlier.get(heading);
}

// Classifies every exact target on a page (T1, T2, H1) and returns the current
// ones a reader sees, by block. A block that shows several current targets
// declares the supported set, so it shows them all.
function checkTargets(model, targets, cards = []) {
  const byBlock = new Map();
  for (const occurrence of occurrences(model, TARGET, (m) => `${m[1]}.${m[3]}.${m[4]}.${m[5]}`)) {
    const card = cards.find((item) => item.block === occurrence.block && occurrence.index >= item.start && occurrence.index < item.end);
    const rule = history(occurrence.block) ? 'H1' : card && card.status !== 'Released' ? 'T2' : targets.includes(occurrence.value) ? 'T1' : undefined;
    assert.ok(rule, unaccounted('Exact target', occurrence,
      `It is not one of targets in ${data} (${list(targets)}), and it is neither in a catalog card that is not Released nor in a section whose heading names an earlier release.`,
      'If it is now released, add it to targets; otherwise move it into one of those places.'));
    if (rule === 'T1' && occurrence.visible) byBlock.set(occurrence.block, (byBlock.get(occurrence.block) ?? new Set()).add(occurrence.value));
  }
  for (const [block, named] of byBlock) {
    assert.ok(named.size === 1 || targets.every((target) => named.has(target)),
      `targets in ${data} is ${list(targets)}. Expected ${model.path}:${block.line} to name all of them, because it names several: ${list(named)}.`);
  }
  return byBlock;
}

// E1: mentions of earlier releases that no structural rule covers, each pinned
// to its page and text. A listed mention that no longer matches fails.
const earlierMentions = [
  {page: install, text: 'keep Server 0.9.2 beside 0.10.0 while applications still use client 0.4.0', reason: 'the client of the earlier server line'},
];

// Classifies every product version on a page (V1, V2, V3, H1, E1). Each
// product in `required` must be stated as current at least once.
function checkVersions(model, required, pageProduct) {
  const found = occurrences(model, VERSION, (m) => m[1]).map((occurrence) => ({...occurrence, product: productOf(occurrence, pageProduct)}));
  const mentions = earlierMentions.filter((mention) => mention.page === model.path);
  for (const mention of mentions) {
    assert.ok(model.blocks.some((block) => block.visible.includes(mention.text)), `The listed earlier-release mention "${mention.text}" (${mention.reason}) is no longer on ${model.path}. Remove it from earlierMentions.`);
  }
  for (const occurrence of found) {
    const {product, value, block, index, length} = occurrence;
    const current = home.versions[product];
    const [start, end] = sentence(block, index);
    const beside = found.some((other) => other.block === block && other.index >= start && other.index < end && other.product === product && other.value === current);
    const listed = mentions.some(({text}) => {
      const at = block.visible.indexOf(text);
      return at >= 0 && index >= at && index < at + text.length && older(value, current);
    });
    occurrence.rule = !product ? undefined : history(block) ? 'H1' : value === current ? 'V1'
      : /^\**\s+(?:or later|through)\b/.test(block.visible.slice(index + length)) ? 'V2' : older(value, current) && beside ? 'V3' : listed ? 'E1' : undefined;
    assert.ok(occurrence.rule, product
      ? unaccounted(`The ${product} version`, occurrence, `It is not versions.${product} ("${current}") in ${data}, a bound ("${value} or later", "${value} through …"), an earlier version beside the current one in its sentence, or in a section whose heading names an earlier release.`,
        `If it is now the current ${product} version, update versions.${product}; otherwise use one of those forms.`)
      : unaccounted('Version', occurrence, 'No Installer, Server or Client is named before it in its sentence, and its link is not a Briosa release or installer asset.', 'Name the product it belongs to.'));
  }
  for (const product of required) {
    assert.ok(found.some((occurrence) => occurrence.product === product && occurrence.rule === 'V1'),
      `versions.${product} in ${data} is "${home.versions[product]}", which ${model.path} does not state as the current ${product} version.`);
  }
  return found;
}

// "SA <year>" in a label names the homepage target of that year.
const yearTargets = (label, targets) => Array.from(label.matchAll(/\bSA\s+(\d{4})\b(?![.-]\d)/g), ([, year]) => {
  const matches = targets.filter((target) => yearOf(target) === year);
  return matches.length === 1 ? matches[0] : `SA ${year}`;
});

// L1: a link's label and destination agree on the targets and versions both name.
function checkLinks(model, targets) {
  for (const {label, url, line} of model.links) {
    for (const [kind, named, destination] of [
      ['targets', new Set([...exactTargets(label), ...yearTargets(label, targets)]), exactTargets(url)],
      ['versions', versionsIn(label), versionsIn(url)],
    ]) {
      assert.ok(!named.size || !destination.size || (named.size === destination.size && [...named].every((value) => destination.has(value))),
        `The link "${label}" at ${model.path}:${line} names ${list(named)} in its label but ${list(destination)} in its destination ${url}. A link's label and destination must name the same ${kind}.`);
    }
  }
}

// ---------------------------------------------------------------------------

// The homepage value that shows each Available Products row in docs/releases.md.
const products = new Map([
  ['Briosa Server and Control Center', {version: 'server'}],
  ['Briosa Installer', {version: 'installer'}],
  ['.NET client', {version: 'clients', registry: 'nuget', origin: 'https://www.nuget.org', path: /^\/packages\/([^/]+)\/([^/]+)\/?$/}],
  ['Python client', {version: 'clients', registry: 'pypi', origin: 'https://pypi.org', path: /^\/project\/([^/]+)\/([^/]+)\/?$/}],
  ['JavaScript/TypeScript client', {version: 'clients', registry: 'npm', origin: 'https://www.npmjs.com', path: /^\/package\/([^/]+\/[^/]+)\/v\/([^/]+)\/?$/}],
]);
const clients = [...products].filter(([, {registry}]) => registry);

// R1: a registry package link. A label that names a target names the one in
// its destination, and the name and pin are that target's homepage package and version.
function packageLink(link, [product, {registry, origin, path}], source, targets) {
  const destination = URL.parse(link.url);
  const coordinates = destination?.origin === origin && destination.pathname.match(path);
  const [target, ...others] = coordinates ? exactTargets(coordinates[1]) : [];
  const [named, ...alsoNamed] = [...exactTargets(link.label), ...yearTargets(link.label, targets)];
  const fact = `packagesFor(${target ?? named}).${registry}`;
  assert.ok(coordinates && target && !others.length,
    `Could not read ${fact} and its pinned versions.clients value from ${source}:${link.line} (${product}). Expected an absolute package link on ${origin} whose name contains one exact target: [${link.label}](${link.url}).`);
  assert.ok(named === undefined || (named === target && !alsoNamed.length),
    `${fact}: the link "${link.label}" at ${source}:${link.line} (${product}) leads to ${coordinates[1]}. A package link's label and destination must name the same target.`);
  agrees(fact, home.packagesFor(target)[registry], coordinates[1], `${source} (${product})`);
  agrees(`versions.clients (pinned by the SA ${target} ${registry} link)`, home.versions.clients, coordinates[2], `${source} (${product})`);
  return target;
}

test('homepage product versions, exact targets, and package names agree with the release and install pages', () => {
  const targets = homepageTargets(releases);
  const release = page(releases, 'the homepage versions, targets, and packages');
  const rows = new Map();
  for (const row of table(release, 'the homepage versions, targets, and packages', ['Product', 'Released Version', 'Availability'])) {
    const name = row.Product.text;
    assert.ok(!rows.has(name), `Could not read a unique ${name} row for the homepage versions in ${releases}.`);
    rows.set(name, row);
  }
  sameSet('versions (by product)', [...products.keys()], new Set(rows.keys()), releases);
  sameSet('versions', Object.keys(home.versions), new Set([...products.values()].map(({version}) => version)), `the ${releases} product rows`);
  for (const target of targets) {
    sameSet(`packagesFor(${target})`, Object.keys(home.packagesFor(target)), new Set(clients.map(([, {registry}]) => registry)), `the ${releases} client rows`);
  }

  for (const [product, {version: key}] of products) {
    const source = `${releases} (${product})`;
    agrees(`versions.${key}`, home.versions[key], capture(`versions.${key}`, source, rows.get(product)['Released Version'].text, /^\[?(\d+\.\d+\.\d+)(?:\]\(|$)/), source);
  }
  // Closed world: every exact target on both pages.
  const installPage = page(install, 'versions');
  const targetBlocks = checkTargets(release, targets);
  checkTargets(installPage, targets);

  // The server row and each client row declare the complete current target set.
  const [server] = [...products].find(([, {version}]) => version === 'server');
  sameSet('targets', targets, exactTargets(rows.get(server).Availability.raw), `${releases} (${server})`);
  const rowLinks = new Set();
  for (const client of clients) {
    const cell = rows.get(client[0]).Availability;
    const links = release.links.filter((link) => link.block === cell);
    for (const link of links) rowLinks.add(link);
    sameSet('targets', targets, new Set(links.map((link) => packageLink(link, client, releases, targets))), `${releases} (${client[0]})`);
  }

  // Closed world: every link and every registry link on both pages.
  for (const model of [release, installPage]) {
    checkLinks(model, targets);
    for (const link of model.links.filter((item) => !rowLinks.has(item))) {
      const client = clients.find(([, {origin}]) => URL.parse(link.url)?.origin === origin);
      if (client) packageLink(link, client, model.path, targets);
    }
  }
  assert.ok([...targetBlocks].some(([block, named]) => block.type === 'paragraph' && targets.every((target) => named.has(target))),
    `targets in ${data} is ${list(targets)}. Expected a paragraph of ${releases} to name all of them, as its supported-target declaration does.`);

  // Every version on the install page, including both halves of a paired statement and the download links.
  const installed = checkVersions(installPage, ['installer', 'server', 'clients'], 'installer');
  assert.ok(installed.some(({product, rule, visible}) => product === 'installer' && rule === 'V1' && !visible),
    `versions.installer in ${data} is "${home.versions.installer}", which ${install} does not offer as a download.`);
});

// The catalog cards, each with its offsets in its HTML block.
function catalogCards(model) {
  return model.blocks.filter(({type}) => type === 'html').flatMap((block) =>
    Array.from(block.raw.matchAll(/<(\w+)\b[^>]*className="catalog-group-card"[^>]*>([\s\S]*?)<\/\1>/g), (match) => {
      const kicker = match[2].match(/className="catalog-group-kicker">([^<]*)</)?.[1] ?? '';
      const title = match[2].match(/<strong>([^<]*)<\/strong>/)?.[1] ?? '';
      const line = model.lineOf(block.start + match.index);
      const [target, ...others] = exactTargets(title);
      assert.ok(target && !others.length, `Could not read one exact target for targets from the card ${JSON.stringify(title)} at ${model.path}:${line}.`);
      return {block, start: match.index, end: match.index + match[0].length, line, target, kicker, status: kicker.split('·')[0].trim(), summary: match[2].match(/<p>([\s\S]*?)<\/p>/)?.[1] ?? ''};
    }));
}

// G1 and G2: every root group on the hierarchy page, with its stated
// observations and the counts of its listed group paths.
function rootGroups(path) {
  const model = page(path, 'mpGroups2026');
  const tree = model.text.match(/<div className="catalog-tree">\n([\s\S]*?)\n<\/div>/);
  assert.ok(tree, `Could not read mpGroups2026 from ${path}. Expected a <div className="catalog-tree"> element.`);
  const treeStart = tree.index + tree[0].indexOf(tree[1]);
  const groups = new Map();
  let outside = tree[1];
  for (const branch of tree[1].matchAll(/<details\b([^>]*)>([\s\S]*?)<\/details>/g)) {
    outside = outside.slice(0, branch.index) + blank(branch[0]) + outside.slice(branch.index + branch[0].length);
    const line = model.lineOf(treeStart + branch.index);
    const summary = branch[2].match(/^\s*<summary><strong>([^<]+)<\/strong><span>([^<]+)<\/span><\/summary>/);
    assert.ok(/className="catalog-tree-branch"/.test(branch[1]) && summary,
      `Could not read the root group at ${path}:${line} for mpGroups2026. Expected <details className="catalog-tree-branch"> with <summary><strong>Name</strong><span>N observations · M group paths</span></summary>.`);
    const [, name, counts] = summary;
    const fact = `mpGroups2026 ${name}`;
    assert.ok(!groups.has(name), `Could not read a unique mpGroups2026 root group ${JSON.stringify(name)} from ${path}:${line}.`);
    const paths = [];
    let offset = treeStart + branch.index + branch[0].indexOf(branch[2]) + summary[0].length;
    for (const text of branch[2].slice(summary[0].length).split('\n')) {
      const lineNumber = model.lineOf(offset);
      offset += text.length + 1;
      if (!text.trim()) continue;
      const groupPath = text.match(/^\s*[-*+]\s.*\s—\s([\d,]+)\b[^—]*$/);
      if (groupPath) paths.push(number(groupPath[1]));
      else {
        assert.ok(/^\s*[-*+]\s+\[[^\]—]*\]\([^)]*\)\s*$/.test(text),
          `Could not classify ${JSON.stringify(text.trim())} at ${path}:${lineNumber} in ${fact}. A root group lists group paths as "- Name — count" and may add a link without a count.`);
      }
    }
    const stated = count(`${fact} group paths`, `${path}:${line}`, counts, /\b([\d,]+) group paths?\b/);
    assert.equal(paths.length, stated, `Could not read the group paths of ${fact} from ${path}:${line}. Its summary states ${stated}, and ${paths.length} lines have the form "- Name — count".`);
    groups.set(name, {observations: count(fact, `${path}:${line}`, counts, /^([\d,]+) observations\b/), paths});
  }
  const stray = outside.split('\n').findIndex((text) => text.trim());
  assert.equal(stray, -1, `Could not classify ${JSON.stringify(outside.split('\n')[stray]?.trim())} at ${path}:${model.lineOf(treeStart) + stray} for mpGroups2026. Everything in the catalog tree must be a root group.`);
  assert.equal((model.text.match(/<details\b/g) ?? []).length, groups.size, `Could not read mpGroups2026 from ${path}. Every <details> element must be a root group in the catalog tree.`);
  return groups;
}

test('homepage exact targets, operation totals, reviewed commands, versions, and MP groups agree with the catalog', () => {
  const targets = homepageTargets(catalog);
  perTargetFacts(targets, catalog);
  const sa2024 = homepageTarget('sa2024', 'currentOperations2024 and reviewedCommands2024', catalog);
  const sa2026 = homepageTarget('sa2026', 'mpGroups2026 and mpObservations2026', catalog);
  const overviewPage = page(catalog, 'targets and current operations');
  const cards = catalogCards(overviewPage);

  // Closed world: every target, version and link on the catalog pages.
  const overviews = new Map(targets.map((target) => [target, page(targetPage(target, 'overview'), `currentOperations${yearOf(target)}`)]));
  const hierarchy = targetPage(sa2026, 'group-hierarchy');
  const targetBlocks = checkTargets(overviewPage, targets, cards);
  for (const model of [...overviews.values(), page(hierarchy, 'mpGroups2026')]) checkTargets(model, targets);
  for (const model of [overviewPage, ...overviews.values(), page(hierarchy, 'mpGroups2026')]) checkLinks(model, targets);
  checkVersions(overviewPage, ['server', 'clients']);
  checkVersions(overviews.get(sa2024), ['server', 'clients']);
  checkVersions(overviews.get(sa2026), ['server']);
  for (const [target, model] of overviews) if (target !== sa2024 && target !== sa2026) checkVersions(model, []);

  const released = new Map(cards.filter(({status}) => status === 'Released').map((card) => [card.target, card]));
  sameSet('targets', targets, new Set(released.keys()), `${catalog} (Released cards)`);
  for (const [target, {kicker, line}] of released) {
    const fact = `currentOperations${yearOf(target)}`;
    agrees(fact, home[fact], count(fact, `${catalog}:${line}`, kicker, /([\d,]+) Current Operations/), catalog);
  }
  agrees('reviewedCommands2024', home.reviewedCommands2024,
    count('reviewedCommands2024', catalog, released.get(sa2024).summary, /Browse ([\d,]+) reviewed commands/), `${catalog} (SA ${sa2024} card)`);

  // The released availability statement gives each current target one "(N Current operations)" count.
  const counted = new Map();
  for (const block of overviewPage.blocks.filter((item) => !history(item))) {
    const counts = Array.from(block.visible.matchAll(/\bSA\s+\**(\d{4}\.\d+\.\d+\.\d+)\**\s*\(([\d,]+) Current operations\)/g));
    if (!counts.length) continue;
    for (const target of targetBlocks.get(block) ?? []) {
      assert.ok(counts.some(([, named]) => named === target),
        `currentOperations${yearOf(target)}: ${catalog}:${block.line} names SA ${target} in a released availability statement without its "(N Current operations)" count.`);
    }
    for (const [, target, n] of counts) {
      assert.ok(!counted.has(target), `currentOperations${yearOf(target)}: ${catalog} states Current operations for SA ${target} at lines ${counted.get(target)?.line} and ${block.line}. `
        + 'Keep one current statement, or move the other into a section whose heading names its release.');
      counted.set(target, {n: number(n), line: block.line});
    }
  }
  for (const target of targets) {
    const fact = `currentOperations${yearOf(target)}`;
    assert.ok(counted.has(target), `${fact} in ${data} is ${home[fact]}. Expected ${catalog} to state "(N Current operations)" for SA ${target} in its released availability statement.`);
    agrees(fact, home[fact], counted.get(target).n, `${catalog}:${counted.get(target).line} (released availability)`);
  }
  assert.ok([...targetBlocks].some(([block, named]) => block.type === 'paragraph' && targets.every((target) => named.has(target))),
    `targets in ${data} is ${list(targets)}. Expected a paragraph of ${catalog} to name all of them, as its released availability statement does.`);

  const overview2026 = targetPage(sa2026, 'overview');
  agrees('currentOperations2026', home.currentOperations2026,
    count('currentOperations2026', overview2026, read(overview2026), /server registry includes \*\*([\d,]+) MP operations\*\*/), overview2026);

  // The disposition table is the complete SA 2024 review: its rows add up to the reviewed total.
  const overview2024 = targetPage(sa2024, 'overview');
  const dispositions = new Map();
  for (const row of table(overviews.get(sa2024), 'currentOperations2024 and reviewedCommands2024', ['Status', 'Commands'])) {
    const status = capture('a disposition for reviewedCommands2024', overview2024, row.Status.raw, /catalog-status--([a-z-]+)/);
    assert.ok(!dispositions.has(status), `Could not read a unique ${status} disposition for reviewedCommands2024 from ${overview2024}:${row.Status.line}.`);
    dispositions.set(status, count(`the ${status} disposition for reviewedCommands2024`, overview2024, row.Commands.text, /^([\d,]+)$/));
  }
  agrees('currentOperations2024', home.currentOperations2024, dispositions.get('current'), `${overview2024} (Current disposition)`);
  agrees('reviewedCommands2024', home.reviewedCommands2024, [...dispositions.values()].reduce((sum, n) => sum + n, 0), `${overview2024} (all ${dispositions.size} dispositions)`);
  agrees('reviewedCommands2024', home.reviewedCommands2024,
    count('reviewedCommands2024', overview2024, read(overview2024), /\*\*([\d,]+) captured MP commands\*\*/), overview2024);

  const groups = rootGroups(hierarchy);
  sameSet('mpGroups2026', home.mpGroups2026.map(({name}) => name), new Set(groups.keys()), hierarchy);
  for (const {name, n} of home.mpGroups2026) {
    const {observations, paths} = groups.get(name);
    agrees(`mpGroups2026 ${name} observations`, n, observations, hierarchy);
    agrees(`mpGroups2026 ${name} observations`, n, paths.reduce((sum, path) => sum + path, 0), `the ${paths.length} group paths of ${name} in ${hierarchy}`);
  }
  agrees('mpObservations2026', home.mpObservations2026, count('mpObservations2026', hierarchy, read(hierarchy), /these ([\d,]+) SDK observations/), hierarchy);
  agrees('mpObservations2026', home.mpObservations2026,
    count('mpObservations2026', overview2026, read(overview2026), /Group pages list the ([\d,]+) SDK-observed commands/), overview2026);
  agrees('mpObservations2026', home.mpObservations2026,
    count('mpObservations2026', catalog, released.get(sa2026).summary, /([\d,]+) in the SA-native group hierarchy/), `${catalog} (SA ${sa2026} card)`);
});

// ---------------------------------------------------------------------------
// The current gRPC reference.

// Comments and quoted strings never declare anything.
const declarations = (code) => code.replace(/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\/\/[^\r\n]*|\/\*[\s\S]*?\*\//g, ' ');
const declared = (keywords, proto) => Array.from(proto.matchAll(new RegExp(`\\b(?:${keywords})\\s+([A-Za-z_]\\w*)\\s*[{(]`, 'g')), ([, name]) => name);
const isProtobuf = (node) => node.type === 'code' && /^proto(?:buf)?$/.test(node.lang ?? '');

function operationIdentity(nodes) {
  for (const node of nodes) {
    if (node.type !== 'paragraph') continue;
    const [path, label] = node.children;
    if (path?.type === 'inlineCode' && label?.type === 'text' && /^\s*·\s*Operation\s+ID:/.test(label.value)) {
      return path.value.match(/^\/briosa\.([A-Za-z_]\w*)\/([A-Za-z_]\w*)$/);
    }
  }
}

// The newest gRPC reference for one exact target, read by the production loader.
async function currentReference(target, facts) {
  const {loadReference, targetBase} = await import('../plugins/api-reference/content.mjs');
  const {contexts: [reference]} = await loadReference(root, {family: 'grpc', target}).catch((error) => {
    const sidebars = globSync('grpc_versioned_sidebars/version-*-sidebars.json', {cwd: root}).map((file) => file.replaceAll('\\', '/')).sort();
    const inputs = ['grpc_versions.json', 'plugins/api-reference/targets.json', ...sidebars];
    throw new Error(`Could not verify ${facts} for SA ${target}. ${error.message}. Reference inputs include ${inputs.join(', ')}.`, {cause: error});
  });
  assert.ok(reference, `Could not verify ${facts} for SA ${target} using grpc_versions.json and plugins/api-reference/targets.json.`);
  const sourceFile = (id) => `${reference.sourceRoot}/${id}.md`;
  assert.ok(reference.pages.overview, `Could not verify ${facts}. The current SA ${target} reference is missing ${sourceFile('overview')}.`);
  const sidebar = `grpc_versioned_sidebars/version-${reference.release}-sidebars.json`;
  // Keep every reviewed group page in the diagnostics, even one that lost its last operation.
  const groups = [...new Set(reference.groups.map(({id}) => sourceFile(id)))];
  return {...reference, target, facts, sidebar, groups, sourceFile, base: targetBase('grpc', target)};
}

// Every available MP operation in the sidebar's MP command groups, by its fully qualified identity.
function releasedOperations(reference) {
  const operations = new Map();
  for (const page of Object.values(reference.pages)) {
    if (page.kind !== 'method' || !page.available) continue;
    const tree = markdown.parse(page.body);
    const signatures = new Set([...walk(tree)].filter(isProtobuf).flatMap((node) => declared('rpc', declarations(node.value))));
    if (!signatures.size) continue;
    const identity = operationIdentity(tree.children);
    assert.ok(identity && signatures.has(identity[2]),
      `Could not verify ${reference.facts} for ${page.id} in ${page.source}. Expected an operation identity matching the released RPC declaration (${[...signatures].join(', ')}).`);
    const [, service, rpc] = identity;
    const key = `${service}/${rpc}`;
    assert.ok(!operations.has(key), `Could not verify ${reference.facts}. ${key} is published by both ${operations.get(key)?.source} and ${page.source}.`);
    operations.set(key, {service, rpc, href: `${reference.base}/${page.id}`, source: page.source});
  }
  return operations;
}

// Every released service and RPC, with the pages that declare it (S1 to S5).
function releasedServices(reference) {
  const services = new Map();
  const rpcs = new Map();
  const add = (map, name, source) => map.set(name, (map.get(name) ?? new Set()).add(source));
  const qualified = [];
  const unqualified = [];
  const types = new Set();
  const examined = new Set(reference.groups);
  for (const page of Object.values(reference.pages)) {
    examined.add(page.source);
    if (page.kind === 'method' && !page.available) continue;
    let sectionPackage;
    for (const node of walk(markdown.parse(page.body))) {
      if (node.type === 'heading' && node.depth <= 2) sectionPackage = undefined;
      if (!['text', 'inlineCode', 'code', 'html'].includes(node.type)) continue;
      const code = isProtobuf(node) ? declarations(node.value) : node.value;
      for (const [, service, rpc] of code.matchAll(/(?<![\w.])\/?briosa\.([A-Z]\w*)(?:\/([A-Za-z_]\w*))?/g)) qualified.push({service, rpc, source: page.source});
      if (!isProtobuf(node)) continue;
      for (const type of declared('message|enum', code)) types.add(type);
      const own = code.match(/\bpackage\s+([\w.]+)\s*;/)?.[1];
      const continued = sectionPackage;
      sectionPackage = own ?? sectionPackage;
      for (const service of declared('service', code)) {
        const declaration = {service, rpcs: declared('rpc', code), source: page.source, continued};
        if ((own ?? continued) === 'briosa') {
          add(services, service, page.source);
          for (const rpc of declaration.rpcs) add(rpcs, rpc, page.source);
        } else if (!own) unqualified.push(declaration);
      }
    }
  }
  const lineOf = (source, pattern) => {
    const file = read(source);
    return file.slice(0, Math.max(0, file.search(pattern))).split('\n').length;
  };
  const called = new Set(qualified.filter(({rpc}) => rpc).map(({service}) => service));
  for (const {service, rpc, source} of qualified) {
    if (!rpc && types.has(service)) continue;
    assert.ok(rpc || services.has(service) || called.has(service) || unqualified.some((declaration) => declaration.service === service),
      `grpcServices: briosa.${service} at ${source}:${lineOf(source, new RegExp(`briosa\\.${service}\\b`))} names no declared service, method, message or enum. `
      + `If it is a released service, declare service ${service} in package briosa or name one of its methods (briosa.${service}/Method); otherwise correct the name.`);
    add(services, service, source);
    if (rpc) add(rpcs, rpc, source);
  }
  for (const {service, rpcs: declaredRpcs, source, continued} of unqualified) {
    const line = lineOf(source, new RegExp(`\\bservice\\s+${service}\\b`));
    assert.ok(qualified.some((name) => name.service === service), `grpcServices: service ${service} at ${source}:${line} declares no package`
      + `${continued ? `, follows an example in package ${continued},` : ''} and the reference never names briosa.${service}. `
      + `If it is released, declare package briosa; in its fence or name briosa.${service}; if it is an example, declare the example's own package.`);
    for (const rpc of declaredRpcs) add(rpcs, rpc, source);
  }
  const declaring = new Set([...services.values()].flatMap((sources) => [...sources]));
  const sources = [...new Set([reference.sourceFile('overview'), reference.sidebar, ...reference.groups, ...[...declaring].sort()])];
  return {services, rpcs, sources: sources.join(', '), quiet: [...examined].filter((source) => !declaring.has(source)).sort()};
}

test('homepage operation totals, gRPC services, featured operations, and ticker RPCs agree with the current gRPC reference', async () => {
  const source = 'the current gRPC reference';
  const targets = homepageTargets(source);
  perTargetFacts(targets, source);
  const featuredTarget = homepageTarget('sa2026', 'grpcServices, featuredOperations, and tickerRpcs', source);
  const reference = await currentReference(featuredTarget, 'currentOperations2026, grpcServices, featuredOperations, and tickerRpcs');
  const {base, sidebar, sourceFile} = reference;
  const operations = releasedOperations(reference);
  const {services, rpcs, sources, quiet} = releasedServices(reference);

  for (const [index, {service, rpc, href}] of home.featuredOperations.entries()) {
    const fact = `featuredOperations[${index}] (${service}/${rpc})`;
    const method = operations.get(`${service}/${rpc}`);
    const group = href.startsWith(`${base}/`) ? href.slice(base.length + 1).split('/')[0] : '';
    const linkedSource = group ? sourceFile(group) : '';
    assert.ok(method, `${fact} in ${data} has no released RPC and published method route in ${linkedSource ? `${linkedSource} (see ${sidebar})` : sources}.`);
    agrees(`${fact}.href`, href, method.href, [...new Set([method.source, linkedSource, sidebar].filter(Boolean))].join(', '));
  }

  // The homepage shows only the count, so the message lists each service and the pages that declare it.
  const declaringPages = [...services].sort(([a], [b]) => a.localeCompare(b)).map(([service, pages]) => `  ${service}: ${list([...pages].sort())}`);
  assert.equal(home.grpcServices, services.size, [
    `grpcServices in ${data} is ${home.grpcServices}. Expected ${services.size} services from the SA ${featuredTarget} reference (${sidebar}):`,
    ...declaringPages, `  Also examined: ${list(quiet)}`].join('\n'));

  for (const [index, row] of home.tickerRpcs.entries()) {
    for (const rpc of row) {
      assert.ok(rpcs.has(rpc), `tickerRpcs[${index}] includes ${rpc} in ${data}, which has no released RPC in ${sources}.`);
    }
  }

  // Every exact target's operation total is the number of MP operations its current reference releases.
  for (const target of targets) {
    const fact = `currentOperations${yearOf(target)}`;
    const current = target === featuredTarget ? reference : await currentReference(target, fact);
    const released = target === featuredTarget ? operations : releasedOperations(current);
    agrees(fact, home[fact], released.size, `the released MP operations in ${[current.sidebar, ...current.groups].join(', ')}`);
  }
});
