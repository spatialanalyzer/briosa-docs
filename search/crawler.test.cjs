const {readFileSync, readdirSync} = require('node:fs');
const {join} = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const {test} = require('node:test');
const {load} = require('cheerio');

let config;
vm.runInNewContext(readFileSync(join(__dirname, 'algolia-crawler.cjs'), 'utf8'), {
  Crawler: function (value) { config = value; },
});
const extract = config.actions[0].recordExtractor;
const html = (route) => readFileSync(join(__dirname, '..', 'build', `${route}.html`), 'utf8');
const run = (route, helpers) => extract({
  $: load(html(route)), url: new URL(`https://briosa.dev/${route}`), helpers,
});

test('each published canonical command produces one anchored record with reviewed context', () => {
  const directory = join(__dirname, '..', 'build', 'mp-command-catalog', 'commands');
  const urls = new Set();
  for (const file of readdirSync(directory).filter((name) => name.endsWith('.html') && name !== 'index.html')) {
    const route = `mp-command-catalog/commands/${file.slice(0, -5)}`;
    const $ = load(html(route));
    const records = run(route);
    assert.ok(records.length > 0, route);
    for (const record of records) {
      assert.ok(!urls.has(record.url), `duplicate: ${record.url}`);
      urls.add(record.url);
      assert.ok($('article :header[id]').toArray().some((h) => $(h).attr('id') === record.anchor));
      assert.match(record.hierarchy.lvl1, / · SA \d/);
      assert.equal(record.docusaurus_tag, 'docs-catalog-current');
      assert.ok(Buffer.byteLength(JSON.stringify(record)) < 10000, `oversized: ${record.url}`);
    }
  }
  const index = load(html('mp-command-catalog/commands'));
  const indexUrls = new Set(index('.catalog-command-table tbody a').toArray()
    .map((a) => new URL(index(a).attr('href'), 'https://briosa.dev').href));
  assert.deepEqual([...urls].sort(), [...indexUrls].sort());
});

test('MP label, code spelling and status are retained without merging command identities', () => {
  const records = run('mp-command-catalog/commands/file-operations');
  const record = records.find((r) => r.anchor === 'get-working-directory');
  assert.equal(record.hierarchy.lvl2, 'Get Working Directory');
  assert.equal(record.hierarchy.lvl1, 'Current · SA 2026.1.0529.7 · File Operations | Next · SA 2024.1.0508.5 · File Operations');
  assert.ok(record.search_terms.includes('getworkingdirectory'));
  assert.ok(record.search_terms.includes('get_working_directory'));
  assert.ok(!record.content.includes('Get XML Attribute'));
  assert.equal(records.filter((r) => r.anchor === 'get-working-directory').length, 1);
});

test('navigation indexes, filtered views and redirect documents produce no records', () => {
  for (const path of [
    '/downloads/keys/public.pem', '/assets/js/main.js',
    '/mp-command-catalog/2026.1.0529.7/file-operations',
    '/mp-command-catalog/2024.1.0508.5/file-operations',
    '/mp-command-catalog/2027.1.0001.0/file-operations',
    '/mp-command-catalog/commands', '/mp-command-catalog/commands/',
    '/mp-command-catalog/commands/index', '/search', '/404.html',
    '/mp-command-catalog/commands/file-operations?q=directory',
  ]) {
    assert.equal(extract({$: load('<main><h1>Ignore</h1></main>'),
      url: new URL(`https://briosa.dev${path}`)}).length, 0, path);
  }
  assert.equal(extract({$: load('<meta http-equiv="refresh" content="0;url=/api">'),
    url: new URL('https://briosa.dev/old-url')}).length, 0);
});

test('target context keeps differing dispositions separate in one command record', () => {
  const records = run('mp-command-catalog/commands/instrument-operations');
  const record = records.find((r) => r.anchor === 'scan-cad-faces');
  assert.ok(record);
  assert.match(record.hierarchy.lvl1, /Current · SA 2026\.1\.0529\.7/);
  assert.match(record.hierarchy.lvl1, /SDK Unavailable · SA 2024\.1\.0508\.5/);
  assert.equal(records.filter((r) => r.anchor === 'scan-cad-faces').length, 1);
});

test('missing, mismatched, or duplicate target claims cannot enter search', () => {
  const route = 'mp-command-catalog/commands/construction-operations-bsplines';
  for (const mutate of [
    ($, context) => context.removeAttr('data-target'),
    ($, context) => context.removeAttr('data-status'),
    ($, context) => context.attr('data-status', 'current'),
    ($, context) => context.find('.catalog-status').remove(),
    ($, context) => context.after(context.clone()),
  ]) {
    const $ = load(html(route));
    const context = $('#construct-b-spline-from-points').nextUntil('h2')
      .find('.catalog-target-context[data-target="2024.1.0508.5"]').first();
    assert.equal(context.length, 1);
    mutate($, context);
    assert.throws(() => extract({$, url: new URL(`https://briosa.dev/${route}`)}),
      /Missing or ambiguous reviewed command context/);
  }
});

test('the command index preserves one disposition per command and exact target', () => {
  const $ = load(html('mp-command-catalog/commands'));
  const contexts = new Set();
  const statuses2024 = {};
  for (const node of $('.catalog-command-table tbody tr').toArray()) {
    const row = $(node);
    const target = row.attr('data-target');
    const href = row.find('a').attr('href');
    const key = `${target}:${href}`;
    assert.ok(!contexts.has(key), key);
    contexts.add(key);
    assert.ok(['2026.1.0529.7', '2024.1.0508.5'].includes(target));
    if (target === '2024.1.0508.5') {
      const status = row.attr('data-status');
      statuses2024[status] = (statuses2024[status] || 0) + 1;
      assert.notEqual(status, 'current');
      assert.ok(row.attr('hidden') !== undefined, href);
      assert.ok(!/licensed-execution|released-implementation|portable-contract-review/.test(row.attr('data-validation')));
    }
  }
  assert.ok(statuses2024.next > 0);
  assert.ok(statuses2024['sdk-unavailable'] > 0);
});

test('all reference instances and landing pages use content selectors and version context', () => {
  for (const route of ['index', 'install', 'api', 'docs/intro',
    'api/grpc/get-working-directory', 'api/dotnet/get-working-directory',
    'api/python/get-working-directory', 'api/javascript/get-working-directory']) {
    let called = false;
    const $ = load(html(route));
    extract({$, url: new URL(`https://briosa.dev/${route.replace(/(^|\/)index$/, '')}`),
      helpers: {docsearch(options) {
        called = true;
        assert.ok($(options.recordProps.lvl1).length, route);
        assert.ok($(options.recordProps.content).length, route);
        assert.equal($('nav, .catalog-command-table, .catalog-filter').length, 0);
        if (route.startsWith('api/') && !route.endsWith('index')) {
          assert.match(options.recordProps.lvl0.defaultValue,
            route.startsWith('api/grpc/') ? /API · Version: 0\.5\.1$/ : /API · Version: Unreleased$/);
        }
        return [];
      }},
    });
    assert.ok(called, route);
  }
});
