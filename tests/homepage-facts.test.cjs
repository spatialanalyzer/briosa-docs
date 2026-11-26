const {existsSync, readFileSync, readdirSync} = require('node:fs');
const {join} = require('node:path');
const {test} = require('node:test');
const assert = require('node:assert/strict');
const {load} = require('cheerio');
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
  const products = read(releases).split(/^## /m).find((section) => section.startsWith('Available Products\n'));
  assert.ok(products, `Could not read versions and targets from ${releases} (Available Products).`);
  const row = (product) => {
    const cells = products.split('\n').find((line) => line.startsWith(`| ${product} |`));
    assert.ok(cells, `Could not read the ${product} row from ${releases} (Available Products).`);
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

  for (const [product, registry, path] of [
    ['.NET client', 'nuget', /^\/packages\/([^/]+)\//],
    ['Python client', 'pypi', /^\/project\/([^/]+)\//],
    ['JavaScript/TypeScript client', 'npm', /^\/package\/([^/]+\/[^/]+)\/v\//],
  ]) {
    const [, , clientVersion, links] = row(product);
    const source = `${releases} (${product})`;
    agrees('versions.clients', home.versions.clients, version('versions.clients', clientVersion), source);
    for (const [year, target] of exactTargets) {
      const fact = `packagesFor(${target}).${registry}`;
      const link = capture(fact, source, links, new RegExp(`\\[SA ${year}\\]\\(([^)]+)\\)`));
      agrees(fact, home.packagesFor(target)[registry], capture(fact, source, new URL(link).pathname, path), source);
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

test('homepage gRPC services, featured operations, and ticker RPCs agree with the current reference', async () => {
  const {sections, targetBase} = await import('../plugins/api-reference/content.mjs');
  const target = home.targets.sa2026;
  const releases = JSON.parse(read('grpc_versions.json'));
  const snapshots = JSON.parse(read('plugins/api-reference/targets.json')).snapshots.grpc;
  // The newest snapshot that documents this exact target supplies its current routes.
  const current = releases.map((release) => {
    const directory = `grpc_versioned_docs/version-${release}`;
    return snapshots[release] === target ? directory : `${directory}/sa-${target}`;
  }).find((directory) => existsSync(join(root, directory, 'overview.md')));
  assert.ok(current, `Could not find the current grpcServices, featuredOperations, or tickerRpcs sources for SA ${target} in grpc_versioned_docs/.`);

  const services = new Set();
  const rpcNames = new Set();
  const methods = new Map();
  const base = targetBase('grpc', target);
  const protos = (markdown) => [...markdown.matchAll(/^```proto(?:buf)?[ \t]*\n([\s\S]*?)^```$/gm)].map((match) => match[1]);
  for (const file of readdirSync(join(root, current)).filter((name) => name.endsWith('.md'))) {
    const source = `${current}/${file}`;
    const markdown = read(source);
    for (const proto of protos(markdown)) {
      const declared = [...proto.matchAll(/^service (\w+)\s*\{/gm)];
      if (!declared.length) continue;
      for (const [, service] of declared) services.add(service);
      for (const [, rpc] of proto.matchAll(/^\s*rpc (\w+)\(/gm)) rpcNames.add(rpc);
    }
    if (!markdown.includes('`/briosa.')) continue;
    for (const {anchor, body} of sections(markdown)) {
      const path = body.match(/^`\/briosa\.(\w+)\/(\w+)` · Operation ID:/m);
      if (!path || /No released signature\s+is available/.test(body)) continue;
      const [, service, rpc] = path;
      const signature = new RegExp(`^\\s*rpc ${rpc}\\s*\\(`, 'm');
      if (!protos(body).some((proto) => signature.test(proto))) continue;
      // The reference uses the catalog anchor for a method route when one exists.
      const catalogAnchor = body.match(/\/mp-command-catalog\/commands\/[^\s)#]+#([^\s)]+)/)?.[1];
      const href = `${base}/${file.slice(0, -3)}/${catalogAnchor ?? anchor}`;
      services.add(service);
      rpcNames.add(rpc);
      methods.set(`${service}/${rpc}`, {href, source});
    }
  }

  const reference = `${current}/overview.md and its service and operation pages`;
  agrees('grpcServices', home.grpcServices, services.size, reference);
  for (const [index, {service, rpc, href}] of home.featuredOperations.entries()) {
    const fact = `featuredOperations[${index}] (${service}/${rpc})`;
    const method = methods.get(`${service}/${rpc}`);
    const group = href.startsWith(`${base}/`) ? href.slice(base.length + 1).split('/')[0] : '';
    const source = `${current}/${group}.md`;
    assert.ok(method, `${fact} in src/components/Home/data.ts has no released RPC in ${existsSync(join(root, source)) ? source : reference}.`);
    agrees(`${fact}.href`, href, method.href, method.source);
  }
  for (const [index, row] of home.tickerRpcs.entries()) {
    for (const rpc of row) {
      assert.ok(rpcNames.has(rpc), `tickerRpcs[${index}] includes ${rpc} in src/components/Home/data.ts, which has no released RPC in ${reference}.`);
    }
  }
});
