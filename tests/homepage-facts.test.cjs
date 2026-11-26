const {globSync, readFileSync} = require('node:fs');
const {join} = require('node:path');
const {test} = require('node:test');
const assert = require('node:assert/strict');
const {load} = require('cheerio');
const {unified} = require('unified');
const {default: remarkParse} = require('remark-parse');
const home = require('../src/components/Home/data.ts');

const root = join(__dirname, '..');
const read = (page) => readFileSync(join(root, page), 'utf8').replaceAll('\r\n', '\n');
const count = (text) => Number(text.replaceAll(',', ''));

function capture(fact, page, text, pattern) {
  const match = text.match(pattern);
  assert.ok(match, `Could not read ${fact} from ${page}. Check the source page's format.`);
  return match[1];
}

function agrees(fact, actual, expected, page) {
  assert.equal(actual, expected,
    `${fact} in src/components/Home/data.ts is ${JSON.stringify(actual)}. Expected ${JSON.stringify(expected)} from ${page}.`);
}

test('homepage product versions, exact targets, and package names agree with the release and install pages', () => {
  const releases = 'docs/releases.md';
  const install = 'src/pages/install.md';
  const products = read(releases).split('\n');
  const row = (product) => {
    const [cells, duplicate] = products.filter((line) => line.startsWith(`| ${product} |`));
    assert.ok(cells && !duplicate, `Could not read a unique ${product} row for the homepage versions and targets in ${releases}.`);
    return cells.split('|').map((cell) => cell.trim());
  };
  const version = (fact, cell) => capture(fact, releases, cell, /^\[?(\d+\.\d+\.\d+)(?:\]\(|$)/);
  const [, , serverVersion, serverAvailability] = row('Briosa Server and Control Center');
  agrees('versions.server', home.versions.server, version('versions.server', serverVersion), releases);
  agrees('versions.installer', home.versions.installer, version('versions.installer', row('Briosa Installer')[2]), releases);

  const installText = read(install);
  const installVersions = [
    ['installer', /^\*\*Version (\d+\.\d+\.\d+) · Windows/m],
    ['server', /\bInstaller \d+\.\d+\.\d+ and Server (\d+\.\d+\.\d+)\b/],
    ['clients', /\bClient (\d+\.\d+\.\d+) works with Server/],
  ];
  for (const [key, pattern] of installVersions) {
    const fact = `versions.${key}`;
    agrees(fact, home.versions[key], capture(fact, install, installText, pattern), install);
  }

  const exactTargets = new Map();
  for (const year of ['2026', '2024']) {
    const fact = `targets.sa${year}`;
    const target = capture(fact, releases, serverAvailability, new RegExp(`\\bSA (${year}\\.\\d+\\.\\d+\\.\\d+)`));
    agrees(fact, home.targets[`sa${year}`], target, releases);
    exactTargets.set(year, target);
  }

  for (const [product, registry, origin, path] of [
    ['.NET client', 'nuget', 'https://www.nuget.org', /^\/packages\/([^/]+)\/([^/]+)\/?$/],
    ['Python client', 'pypi', 'https://pypi.org', /^\/project\/([^/]+)\/([^/]+)\/?$/],
    ['JavaScript/TypeScript client', 'npm', 'https://www.npmjs.com', /^\/package\/([^/]+\/[^/]+)\/v\/([^/]+)\/?$/],
  ]) {
    const [, , clientVersion, links] = row(product);
    const source = `${releases} (${product})`;
    agrees('versions.clients', home.versions.clients, version('versions.clients', clientVersion), source);
    for (const [year, target] of exactTargets) {
      const fact = `packagesFor(${target}).${registry}`;
      const link = capture(fact, source, links, new RegExp(`\\[SA ${year}\\]\\(([^)]+)\\)`));
      const destination = URL.parse(link);
      assert.equal(destination?.origin, origin, `Could not read ${fact} from ${source}. Expected an absolute package link on ${origin}.`);
      const coordinates = destination.pathname.match(path);
      assert.ok(coordinates, `Could not read ${fact} and its pinned versions.clients value from ${source}.`);
      const [, name, pin] = coordinates;
      agrees(fact, home.packagesFor(target)[registry], name, source);
      agrees(`versions.clients for SA ${target} ${registry} link`, home.versions.clients, pin, source);
    }
  }
});

test('homepage operation totals, reviewed commands, and MP groups agree with the catalog', () => {
  const catalog = 'mp-command-catalog/overview.md';
  // MDX Link has children, unlike the native HTML link element.
  const $ = load(read(catalog).replace(/<(\/?)Link\b/g, '<$1a'));
  const overviews = {};
  for (const year of ['2026', '2024']) {
    const targetFact = `targets.sa${year}`;
    const card = $('[classname~="catalog-group-card"]').filter((_, element) =>
      $(element).find('strong').text().startsWith(`SpatialAnalyzer ${year}.`));
    assert.equal(card.length, 1, `Could not find one card for ${targetFact} in ${catalog}.`);
    const target = capture(targetFact, catalog, card.find('strong').text(), /^SpatialAnalyzer (\d+\.\d+\.\d+\.\d+)$/);
    agrees(targetFact, home.targets[`sa${year}`], target, catalog);
    overviews[year] = `mp-command-catalog/${target}/overview.md`;

    const operations = `currentOperations${year}`;
    const kicker = card.find('[classname~="catalog-group-kicker"]').text();
    agrees(operations, home[operations], count(capture(operations, catalog, kicker, /([\d,]+) Current Operations/)), catalog);
    if (year === '2024') {
      const fact = 'reviewedCommands2024';
      agrees(fact, home[fact], count(capture(fact, catalog, card.find('p').text(), /Browse ([\d,]+) reviewed commands/)), catalog);
    }
  }

  const overview2026 = read(overviews[2026]);
  const overview2024 = read(overviews[2024]);
  for (const [fact, page, markdown, pattern] of [
    ['currentOperations2026', overviews[2026], overview2026, /server registry includes \*\*([\d,]+) MP operations\*\*/],
    ['currentOperations2024', overviews[2024], overview2024, /--current">Current<\/span>\s*\|\s*([\d,]+)\s*\|/],
    ['reviewedCommands2024', overviews[2024], overview2024, /\*\*([\d,]+) captured MP commands\*\*/],
  ]) {
    agrees(fact, home[fact], count(capture(fact, page, markdown, pattern)), page);
  }

  const hierarchy = overviews[2026].replace(/overview\.md$/, 'group-hierarchy.md');
  const tree = load(read(hierarchy));
  const groups = new Map();
  for (const summary of tree('[classname~="catalog-tree-branch"] > summary')) {
    const name = tree(summary).find('strong').text().trim();
    const observations = capture(`mpGroups2026 ${name}`, hierarchy, tree(summary).find('span').text(), /^([\d,]+) observations\b/);
    assert.ok(name && !groups.has(name), `Could not read a unique mpGroups2026 root group ${JSON.stringify(name)} from ${hierarchy}.`);
    groups.set(name, count(observations));
  }
  assert.ok(groups.size, `Could not read mpGroups2026 root groups from ${hierarchy}.`);
  for (const {name, n} of home.mpGroups2026) {
    assert.ok(groups.has(name), `mpGroups2026 lists ${JSON.stringify(name)} twice or it is absent from ${hierarchy}.`);
    agrees(`mpGroups2026 ${name} observations`, n, groups.get(name), hierarchy);
    groups.delete(name);
  }
  assert.equal(groups.size, 0, `mpGroups2026 is missing root groups from ${hierarchy}: ${[...groups.keys()].join(', ')}.`);
  agrees('mpObservations2026', home.mpObservations2026,
    count(capture('mpObservations2026', hierarchy, tree.text(), /these ([\d,]+) SDK observations/)), hierarchy);
  agrees('mpObservations2026', home.mpObservations2026,
    count(capture('mpObservations2026', overviews[2026], overview2026, /Group pages list the ([\d,]+) SDK-observed commands/)), overviews[2026]);
});

const markdown = unified().use(remarkParse);

function protobufBlocks(nodes) {
  return nodes.filter((node) => node.type === 'code' && /^proto(?:buf)?$/.test(node.lang))
    // Strip quoted strings along with comments so only declarations contribute.
    .map((node) => node.value.replace(/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\/\/[^\r\n]*|\/\*[\s\S]*?\*\//g, ' '));
}

const declaredRpcs = (proto) => Array.from(proto.matchAll(/\brpc\s+([A-Za-z_]\w*)\s*\(/g), ([, rpc]) => rpc);

function operationIdentity(nodes) {
  for (const node of nodes) {
    if (node.type !== 'paragraph') continue;
    const [path, label] = node.children;
    if (path?.type === 'inlineCode' && label?.type === 'text' && /^\s*·\s*Operation\s+ID:/.test(label.value)) {
      return path.value.match(/^\/briosa\.([A-Za-z_]\w*)\/([A-Za-z_]\w*)$/);
    }
  }
}

test('homepage gRPC services, featured operations, and ticker RPCs agree with the current reference', async () => {
  const {loadReference, targetBase} = await import('../plugins/api-reference/content.mjs');
  const target = home.targets.sa2026;
  const facts = 'grpcServices, featuredOperations, and tickerRpcs';
  const {contexts: [current]} = await loadReference(root, {family: 'grpc', target}).catch((error) => {
    const sidebars = globSync('grpc_versioned_sidebars/version-*-sidebars.json', {cwd: root})
      .map((file) => file.replaceAll('\\', '/')).sort();
    const inputs = ['grpc_versions.json', 'plugins/api-reference/targets.json', ...sidebars];
    throw new Error(`Could not verify ${facts} for SA ${target}. ${error.message}. Reference inputs include ${inputs.join(', ')}.`, {cause: error});
  });
  assert.ok(current, `Could not verify ${facts} for SA ${target} using grpc_versions.json and plugins/api-reference/targets.json.`);
  const sourceFile = (id) => `${current.sourceRoot}/${id}.md`;
  const overview = sourceFile('overview');
  assert.ok(current.pages.overview, `Could not verify ${facts}. The current SA ${target} reference is missing ${overview}.`);
  const sidebar = `grpc_versioned_sidebars/version-${current.release}-sidebars.json`;
  const guides = ['discovery', 'lifecycle'];
  // Keep the reviewed source paths even when a group loses its last RPC or service.
  const referenceSources = [overview, sidebar, ...guides.map(sourceFile), ...current.groups.map(({id}) => sourceFile(id))].join(', ');

  const services = new Set();
  const rpcNames = new Set();
  const methods = new Map();
  const base = targetBase('grpc', target);
  for (const page of Object.values(current.pages)) {
    if (page.kind !== 'method' || !page.available) continue;
    const nodes = markdown.parse(page.body).children;
    const signatures = new Set(protobufBlocks(nodes).flatMap(declaredRpcs));
    if (!signatures.size) continue;
    const identity = operationIdentity(nodes);
    assert.ok(identity && signatures.has(identity[2]),
      `Could not verify ${facts} for ${page.id} in ${page.source}. Expected an operation identity matching the released RPC declaration (${[...signatures].join(', ')}).`);
    const [, service, rpc] = identity;
    services.add(service);
    rpcNames.add(rpc);
    methods.set(`${service}/${rpc}`, {href: `${base}/${page.id}`, source: page.source});
  }

  for (const id of guides) {
    const source = sourceFile(id);
    const page = current.pages[id];
    assert.ok(page, `Could not verify grpcServices and tickerRpcs. The current reference is missing ${source}.`);
    const blocks = protobufBlocks(markdown.parse(page.body).children);
    // Discovery publishes its contract as a package. Lifecycle publishes service snippets.
    const contracts = id === 'discovery' ? blocks.filter((proto) => /\bpackage\s+briosa\s*;/.test(proto)) : blocks;
    assert.ok(contracts.length, `Could not read the grpcServices and tickerRpcs protobuf contract in ${source}.`);
    for (const proto of contracts) {
      const declared = [...proto.matchAll(/\bservice\s+([A-Za-z_]\w*)\s*\{/g)];
      if (!declared.length) continue;
      for (const [, service] of declared) services.add(service);
      for (const rpc of declaredRpcs(proto)) rpcNames.add(rpc);
    }
  }

  for (const [index, {service, rpc, href}] of home.featuredOperations.entries()) {
    const fact = `featuredOperations[${index}] (${service}/${rpc})`;
    const method = methods.get(`${service}/${rpc}`);
    const group = href.startsWith(`${base}/`) ? href.slice(base.length + 1).split('/')[0] : '';
    const linkedSource = group ? sourceFile(group) : '';
    const sources = linkedSource ? `${linkedSource} (see ${sidebar})` : referenceSources;
    assert.ok(method, `${fact} in src/components/Home/data.ts has no released RPC and published method route in ${sources}.`);
    const routeSources = [...new Set([method.source, linkedSource, sidebar].filter(Boolean))];
    agrees(`${fact}.href`, href, method.href, routeSources.join(', '));
  }

  agrees('grpcServices', home.grpcServices, services.size, referenceSources);
  for (const [index, row] of home.tickerRpcs.entries()) {
    for (const rpc of row) {
      assert.ok(rpcNames.has(rpc), `tickerRpcs[${index}] includes ${rpc} in src/components/Home/data.ts, which has no released RPC in ${referenceSources}.`);
    }
  }
});
