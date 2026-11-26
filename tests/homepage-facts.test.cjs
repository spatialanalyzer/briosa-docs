// Checks every fact in src/components/Home/data.ts against the pages its header
// comment names. Each count or list is derived in full from its source and
// compared in both directions, so an addition, a removal, or a change fails.
// The featured operations and ticker RPCs are curated subsets of the released
// API, so they are checked for membership and identity only.
const {globSync, readFileSync} = require('node:fs');
const {join} = require('node:path');
const {test} = require('node:test');
const assert = require('node:assert/strict');
const {load} = require('cheerio');
const {unified} = require('unified');
const {default: remarkParse} = require('remark-parse');
const home = require('../src/components/Home/data.ts');

const root = join(__dirname, '..');
const data = 'src/components/Home/data.ts';
const read = (page) => readFileSync(join(root, page), 'utf8').replaceAll('\r\n', '\n');
const list = (values) => [...values].join(', ') || 'nothing';
const yearOf = (target) => target.split('.')[0];
// An exact SpatialAnalyzer target has four parts, such as 2026.1.0529.7.
const exactTargets = (text) => new Set(Array.from(text.matchAll(/\b(\d{4}\.\d+\.\d+\.\d+)\b/g), ([, target]) => target));

function capture(fact, page, text, pattern) {
  const match = text.match(pattern);
  assert.ok(match, `Could not read ${fact} from ${page}. Check the source page's format.`);
  return match[1];
}

const count = (fact, page, text, pattern) => Number(capture(fact, page, text, pattern).replaceAll(',', ''));

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

// The rows of the one pipe table on a page that has all the named columns.
function table(facts, page, columns) {
  const tables = [];
  let lines = [];
  for (const line of [...read(page).split('\n'), '']) {
    if (line.startsWith('|')) {
      lines.push(line);
      continue;
    }
    if (/^\|(?:\s*:?-+:?\s*\|)+$/.test(lines[1]?.trim())) tables.push(lines);
    lines = [];
  }
  const cells = (line) => line.trim().replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim());
  const matches = tables.filter(([header]) => columns.every((column) => cells(header).includes(column)));
  assert.equal(matches.length, 1, `Could not read ${facts} from ${page}. Expected one table with the columns ${columns.join(', ')}.`);
  const [[header, , ...rows]] = matches;
  const index = columns.map((column) => cells(header).indexOf(column));
  return rows.map((row) => Object.fromEntries(columns.map((column, i) => [column, cells(row)[index[i]] ?? ''])));
}

// The homepage value that shows each Available Products row in docs/releases.md.
const products = new Map([
  ['Briosa Server and Control Center', {version: 'server'}],
  ['Briosa Installer', {version: 'installer'}],
  ['.NET client', {version: 'clients', registry: 'nuget', origin: 'https://www.nuget.org', path: /^\/packages\/([^/]+)\/([^/]+)\/?$/}],
  ['Python client', {version: 'clients', registry: 'pypi', origin: 'https://pypi.org', path: /^\/project\/([^/]+)\/([^/]+)\/?$/}],
  ['JavaScript/TypeScript client', {version: 'clients', registry: 'npm', origin: 'https://www.npmjs.com', path: /^\/package\/([^/]+\/[^/]+)\/v\/([^/]+)\/?$/}],
]);

// The exact targets a release row names for its own version. A sentence that
// links another release, such as an earlier server that remains available,
// describes that release instead.
function releasedTargets(availability, version) {
  const sentences = availability.split(/(?<=[.;])\s+/).filter((sentence) =>
    Array.from(sentence.matchAll(/\[(\d+\.\d+\.\d+)\]\(/g)).every(([, linked]) => linked === version));
  return exactTargets(sentences.join(' '));
}

test('homepage product versions, exact targets, and package names agree with the release and install pages', () => {
  const releases = 'docs/releases.md';
  const install = 'src/pages/install.md';
  const rows = new Map();
  for (const row of table('the homepage versions, targets, and packages', releases, ['Product', 'Released Version', 'Availability'])) {
    assert.ok(!rows.has(row.Product), `Could not read a unique ${row.Product} row for the homepage versions in ${releases}.`);
    rows.set(row.Product, row);
  }
  sameSet('versions (by product)', [...products.keys()], new Set(rows.keys()), releases);
  sameSet('versions', Object.keys(home.versions), new Set([...products.values()].map(({version}) => version)), `the ${releases} product rows`);
  const clients = [...products].filter(([, {registry}]) => registry);
  sameSet('packagesFor', Object.keys(home.packagesFor(home.targets.sa2026)), new Set(clients.map(([, {registry}]) => registry)), `the ${releases} client rows`);

  const releasedVersions = new Map();
  for (const [product, {version: key}] of products) {
    const source = `${releases} (${product})`;
    const version = capture(`versions.${key}`, source, rows.get(product)['Released Version'], /^\[?(\d+\.\d+\.\d+)(?:\]\(|$)/);
    agrees(`versions.${key}`, home.versions[key], version, source);
    releasedVersions.set(product, version);
  }
  const installText = read(install);
  for (const [key, pattern] of [
    ['installer', /^\*\*Version (\d+\.\d+\.\d+) · Windows/m],
    ['server', /\bInstaller \d+\.\d+\.\d+ and Server (\d+\.\d+\.\d+)\b/],
    ['clients', /\bClient (\d+\.\d+\.\d+) works with Server/],
  ]) {
    agrees(`versions.${key}`, home.versions[key], capture(`versions.${key}`, install, installText, pattern), install);
  }

  const targets = Object.values(home.targets);
  for (const [key, target] of Object.entries(home.targets)) {
    assert.equal(key, `sa${yearOf(target)}`, `targets.${key} in ${data} is ${JSON.stringify(target)}, which is not an SA ${key.slice(2)} target.`);
  }
  const [server] = [...products].find(([, {version}]) => version === 'server');
  sameSet('targets', targets, releasedTargets(rows.get(server).Availability, releasedVersions.get(server)), `${releases} (${server})`);

  for (const [product, {registry, origin, path}] of clients) {
    const source = `${releases} (${product})`;
    const links = new Map();
    for (const [link, , url] of rows.get(product).Availability.matchAll(/\[([^\]]*)\]\(([^)\s]*)\)/g)) {
      // A PyPI name spells the exact target with hyphens.
      const [target, ...others] = exactTargets(url.replace(/(\d)-(?=\d)/g, '$1.'));
      assert.ok(target && !others.length && !links.has(target), `Could not read one exact target for targets and packagesFor from the ${registry} link ${link} in ${source}.`);
      const fact = `packagesFor(${target}).${registry}`;
      const destination = URL.parse(url);
      const coordinates = destination?.origin === origin && destination.pathname.match(path);
      assert.ok(coordinates, `Could not read ${fact} and its pinned versions.clients value from ${source}. Expected an absolute package link on ${origin}: ${link}.`);
      links.set(target, {fact, name: coordinates[1], pin: coordinates[2]});
    }
    sameSet('targets', targets, new Set(links.keys()), source);
    for (const [target, {fact, name, pin}] of links) {
      agrees(fact, home.packagesFor(target)[registry], name, source);
      agrees(`versions.clients (pinned by the SA ${target} ${registry} link)`, home.versions.clients, pin, source);
    }
  }
});

test('homepage exact targets, operation totals, reviewed commands, and MP groups agree with the catalog', () => {
  const catalog = 'mp-command-catalog/overview.md';
  const catalogText = read(catalog);
  // MDX Link has children, unlike the native HTML link element.
  const $ = load(catalogText.replace(/<(\/?)Link\b/g, '<$1a'));
  const cards = new Map();
  for (const element of $('[classname~="catalog-group-card"]')) {
    const card = $(element);
    const title = card.find('strong').text().trim();
    const [target, ...others] = exactTargets(title);
    assert.ok(target && !others.length && !cards.has(target), `Could not read one exact target for targets from the card ${JSON.stringify(title)} in ${catalog}.`);
    const kicker = card.find('[classname~="catalog-group-kicker"]').text();
    cards.set(target, {status: kicker.split('·')[0].trim(), kicker, summary: card.find('p').text()});
  }
  const released = new Map([...cards].filter(([, {status}]) => status === 'Released'));
  sameSet('targets', Object.values(home.targets), new Set(released.keys()), `${catalog} (Released cards)`);
  for (const [target, {kicker}] of released) {
    const fact = `currentOperations${yearOf(target)}`;
    agrees(fact, home[fact], count(fact, catalog, kicker, /([\d,]+) Current Operations/), catalog);
  }
  const reviewed = released.get(home.targets.sa2024).summary;
  agrees('reviewedCommands2024', home.reviewedCommands2024, count('reviewedCommands2024', catalog, reviewed, /Browse ([\d,]+) reviewed commands/), catalog);
  // The released availability statement names each released target with its Current count.
  const statement = `${catalog} (released availability)`;
  const availability = new Map(Array.from(catalogText.matchAll(/\bSA \**(\d{4}\.\d+\.\d+\.\d+)\**\s*\(([\d,]+) Current operations\)/g),
    ([, target, n]) => [target, Number(n.replaceAll(',', ''))]));
  assert.ok(availability.size, `Could not read targets and their current operations from ${statement}. Expected "SA <target> (<count> Current operations)".`);
  sameSet('targets', Object.values(home.targets), new Set(availability.keys()), statement);
  for (const [target, n] of availability) {
    const fact = `currentOperations${yearOf(target)}`;
    agrees(fact, home[fact], n, statement);
  }

  const overview2026 = `mp-command-catalog/${home.targets.sa2026}/overview.md`;
  const overview2026Text = read(overview2026);
  agrees('currentOperations2026', home.currentOperations2026,
    count('currentOperations2026', overview2026, overview2026Text, /server registry includes \*\*([\d,]+) MP operations\*\*/), overview2026);

  // The disposition table is the complete SA 2024 review: its rows add up to the reviewed total.
  const overview2024 = `mp-command-catalog/${home.targets.sa2024}/overview.md`;
  const dispositions = new Map();
  for (const row of table('currentOperations2024 and reviewedCommands2024', overview2024, ['Status', 'Commands'])) {
    const status = capture('a disposition for reviewedCommands2024', overview2024, row.Status, /catalog-status--([a-z-]+)/);
    assert.ok(!dispositions.has(status), `Could not read a unique ${status} disposition for reviewedCommands2024 from ${overview2024}.`);
    dispositions.set(status, count(`the ${status} disposition for reviewedCommands2024`, overview2024, row.Commands, /^([\d,]+)$/));
  }
  agrees('currentOperations2024', home.currentOperations2024, dispositions.get('current'), `${overview2024} (Current disposition)`);
  agrees('reviewedCommands2024', home.reviewedCommands2024, [...dispositions.values()].reduce((sum, n) => sum + n, 0), `${overview2024} (all ${dispositions.size} dispositions)`);
  agrees('reviewedCommands2024', home.reviewedCommands2024,
    count('reviewedCommands2024', overview2024, read(overview2024), /\*\*([\d,]+) captured MP commands\*\*/), overview2024);

  // Each root group lists its group paths, such as "- Cloud Filters — 13", and
  // states how many there are; the paths add up to the group's observations.
  const hierarchy = `mp-command-catalog/${home.targets.sa2026}/group-hierarchy.md`;
  const tree = load(read(hierarchy));
  const groups = new Map();
  for (const element of tree('[classname~="catalog-tree-branch"]')) {
    const branch = tree(element);
    const summary = branch.children('summary');
    const name = summary.find('strong').text().trim();
    assert.ok(name && !groups.has(name), `Could not read a unique mpGroups2026 root group ${JSON.stringify(name)} from ${hierarchy}.`);
    const fact = `mpGroups2026 ${name}`;
    const counts = summary.find('span').text();
    const paths = Array.from(branch.contents().filter((_, node) => node.type === 'text').text().matchAll(/^\s*- .* — ([\d,]+)\b[^—\n]*$/gm),
      ([, n]) => Number(n.replaceAll(',', '')));
    const stated = count(`${fact} group paths`, hierarchy, counts, /\b([\d,]+) group paths?\b/);
    assert.equal(paths.length, stated, `Could not read the group paths of ${fact} from ${hierarchy}. Its summary states ${stated}, `
      + `and ${paths.length} lines have the form "- Name — count".`);
    groups.set(name, {observations: count(fact, hierarchy, counts, /^([\d,]+) observations\b/), paths});
  }
  assert.ok(groups.size, `Could not read mpGroups2026 root groups from ${hierarchy}.`);
  sameSet('mpGroups2026', home.mpGroups2026.map(({name}) => name), new Set(groups.keys()), hierarchy);
  for (const {name, n} of home.mpGroups2026) {
    const {observations, paths} = groups.get(name);
    agrees(`mpGroups2026 ${name} observations`, n, observations, hierarchy);
    agrees(`mpGroups2026 ${name} observations`, n, paths.reduce((sum, path) => sum + path, 0), `the ${paths.length} group paths of ${name} in ${hierarchy}`);
  }
  agrees('mpObservations2026', home.mpObservations2026, count('mpObservations2026', hierarchy, tree.text(), /these ([\d,]+) SDK observations/), hierarchy);
  agrees('mpObservations2026', home.mpObservations2026,
    count('mpObservations2026', overview2026, overview2026Text, /Group pages list the ([\d,]+) SDK-observed commands/), overview2026);
});

const markdown = unified().use(remarkParse);

function* walk(node) {
  yield node;
  for (const child of node.children ?? []) yield* walk(child);
}

// Comments and quoted strings never declare anything.
const declarations = (code) => code.replace(/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\/\/[^\r\n]*|\/\*[\s\S]*?\*\//g, ' ');
const declared = (keyword, proto) => Array.from(proto.matchAll(new RegExp(`\\b${keyword}\\s+([A-Za-z_]\\w*)\\s*[{(]`, 'g')), ([, name]) => name);

// Each protobuf block with its package: the one it declares, else one declared
// by an earlier block in its section, else the page's own package.
function protobufBlocks(nodes, pagePackage) {
  const blocks = [];
  let sectionPackage = pagePackage;
  for (const node of nodes) {
    if (node.type === 'heading' && node.depth <= 2) sectionPackage = pagePackage;
    if (node.type !== 'code' || !/^proto(?:buf)?$/.test(node.lang ?? '')) continue;
    const proto = declarations(node.value);
    sectionPackage = proto.match(/\bpackage\s+([\w.]+)\s*;/)?.[1] ?? sectionPackage;
    blocks.push({proto, package: sectionPackage});
  }
  return blocks;
}

function operationIdentity(nodes) {
  for (const node of nodes) {
    if (node.type !== 'paragraph') continue;
    const [path, label] = node.children;
    if (path?.type === 'inlineCode' && label?.type === 'text' && /^\s*·\s*Operation\s+ID:/.test(label.value)) {
      return path.value.match(/^\/briosa\.([A-Za-z_]\w*)\/([A-Za-z_]\w*)$/);
    }
  }
}

// The guides that publish Briosa's non-MP service contracts. Their protobuf
// belongs to the briosa package unless a block declares another. Other guides,
// such as the first calls, may show examples, so only their blocks in
// `package briosa;` count.
const contractGuides = ['discovery', 'lifecycle'];

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

// Every available MP operation in the sidebar's MP command groups, by its
// fully qualified identity.
function releasedOperations(reference) {
  const operations = new Map();
  for (const page of Object.values(reference.pages)) {
    if (page.kind !== 'method' || !page.available) continue;
    const tree = markdown.parse(page.body);
    const signatures = new Set(protobufBlocks([...walk(tree)]).flatMap(({proto}) => declared('rpc', proto)));
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

// Every released service and RPC, with the pages that declare it: the MP
// operations, the protobuf that a guide declares in the briosa package, and
// each fully qualified method a guide publishes, such as a lifecycle RPC page.
function releasedServices(reference, operations) {
  const services = new Map();
  const rpcs = new Map();
  const add = (map, name, source) => map.set(name, (map.get(name) ?? new Set()).add(source));
  for (const {service, rpc, source} of operations.values()) {
    add(services, service, source);
    add(rpcs, rpc, source);
  }
  for (const id of contractGuides) {
    assert.ok(reference.pages[id]?.kind === 'guide', `Could not verify ${reference.facts}. The current SA ${reference.target} reference is missing ${reference.sourceFile(id)}.`);
  }
  const guides = Object.values(reference.pages).filter(({kind}) => kind === 'guide');
  for (const page of guides) {
    const nodes = [...walk(markdown.parse(page.body))];
    const pagePackage = contractGuides.includes(page.id) ? 'briosa' : undefined;
    for (const {proto, package: name} of protobufBlocks(nodes, pagePackage)) {
      const declaredServices = declared('service', proto);
      if (name !== 'briosa' || !declaredServices.length) continue;
      for (const service of declaredServices) add(services, service, page.source);
      for (const rpc of declared('rpc', proto)) add(rpcs, rpc, page.source);
    }
    for (const node of nodes) {
      const method = node.type === 'code' && node.value.trim().match(/^\/?briosa\.([A-Za-z_]\w*)\/([A-Za-z_]\w*)$/);
      if (!method) continue;
      add(services, method[1], page.source);
      add(rpcs, method[2], page.source);
    }
  }
  const declaring = new Set([...services.values()].flatMap((pages) => [...pages]));
  const examined = [...reference.groups, ...guides.map(({source}) => source)];
  const sources = [...new Set([reference.sourceFile('overview'), reference.sidebar, ...contractGuides.map(reference.sourceFile), ...reference.groups, ...[...declaring].sort()])];
  return {services, rpcs, sources: sources.join(', '), quiet: examined.filter((source) => !declaring.has(source)).sort()};
}

test('homepage operation totals, gRPC services, featured operations, and ticker RPCs agree with the current gRPC reference', async () => {
  const featuredTarget = home.targets.sa2026;
  const reference = await currentReference(featuredTarget, 'currentOperations2026, grpcServices, featuredOperations, and tickerRpcs');
  const {base, sidebar, sourceFile} = reference;
  const operations = releasedOperations(reference);
  const {services, rpcs, sources, quiet} = releasedServices(reference, operations);

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
  for (const target of Object.values(home.targets)) {
    const fact = `currentOperations${yearOf(target)}`;
    const current = target === featuredTarget ? reference : await currentReference(target, fact);
    const released = target === featuredTarget ? operations : releasedOperations(current);
    agrees(fact, home[fact], released.size, `the released MP operations in ${[current.sidebar, ...current.groups].join(', ')}`);
  }
});
