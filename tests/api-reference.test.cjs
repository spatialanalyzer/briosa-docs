const {test} = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync, existsSync} = require('node:fs');
const path = require('node:path');
const {load} = require('cheerio');
const {spawn} = require('node:child_process');
const root = path.join(__dirname, '..');
const read = (route) => load(readFileSync(path.join(root, 'build', route.slice(1) + '.html'), 'utf8'));

test('version-root URLs serve real HTML instead of a client-recovered 404', async (t) => {
  const server = spawn(process.execPath, ['scripts/serve.cjs', '--port', '0'], {cwd: root, stdio: ['ignore', 'pipe', 'pipe']});
  t.after(() => server.kill());
  const origin = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Preview server did not start')), 15000);
    server.once('error', reject);
    server.once('exit', (code) => { clearTimeout(timeout); reject(new Error(`Preview server exited: ${code}`)); });
    server.stdout.on('data', (data) => {
      const url = data.toString().match(/http:\/\/127\.0\.0\.1:\d+/)?.[0];
      if (url) { clearTimeout(timeout); resolve(url); }
    });
  });
  for (const route of ['/api/grpc/sa-2026.1.0529.7/0.7.0', '/api/dotnet/sa-2024.1.0508.5/0.2.0/', '/api/grpc/0.7.0/sa-2026.1.0529.7']) {
    const response = await fetch(origin + route);
    assert.equal(response.status, 200, route);
    assert.doesNotMatch(load(await response.text())('h1').text(), /Page Not Found/);
  }
  assert.equal((await fetch(origin + '/api/grpc/sa-2026.1.0529.7/9.9.9')).status, 404);
});

test('API target preference survives navigation and denied storage keeps URL routing usable', async () => {
  const context = await import('../src/components/ApiReference/context.ts');
  const storage = () => {
    const values = new Map();
    return {getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), clear: () => values.clear()};
  };
  const originalLocal = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  const originalSession = Object.getOwnPropertyDescriptor(globalThis, 'sessionStorage');
  const local = storage();
  const session = storage();
  try {
    Object.defineProperty(globalThis, 'localStorage', {configurable: true, value: local});
    Object.defineProperty(globalThis, 'sessionStorage', {configurable: true, value: session});
    context.rememberTarget('2024.1.0508.5', true);
    assert.equal(context.readTarget(), '2024.1.0508.5');
    context.rememberTarget('2026.1.0529.7');
    assert.equal(context.readTarget(), '2026.1.0529.7');
    session.clear();
    assert.equal(context.readTarget(), '2024.1.0508.5');
    Object.defineProperty(globalThis, 'sessionStorage', {configurable: true, get() {throw new Error('Storage denied');}});
    assert.doesNotThrow(() => context.rememberTarget('2026.1.0529.7', true));
    assert.equal(context.readTarget(), null);
    const manifest = {releases: {grpc: ['0.7.0']}, contexts: [
      {family: 'grpc', release: '0.7.0', target: '2024.1.0508.5', base: '/api/grpc/sa-2024.1.0508.5/0.7.0', ids: ['group/method']},
      {family: 'grpc', release: '0.7.0', target: '2026.1.0529.7', base: '/api/grpc/sa-2026.1.0529.7/0.7.0', ids: []},
    ]};
    assert.equal(context.routeFor(manifest, 'grpc', '0.7.0', '2026.1.0529.7', 'group/method'), '/api/grpc/sa-2026.1.0529.7/0.7.0/group/method');
    assert.equal(context.routeFor(manifest, 'grpc', '0.5.1', '2024.1.0508.5', 'group/method'), undefined);
    assert.equal(context.anchorOf('#invalid%escape'), 'invalid%escape');
  } finally {
    if (originalLocal) Object.defineProperty(globalThis, 'localStorage', originalLocal); else delete globalThis.localStorage;
    if (originalSession) Object.defineProperty(globalThis, 'sessionStorage', originalSession); else delete globalThis.sessionStorage;
  }
});

test('every released MP method preserves its original code, canonical route, and historical identity', async () => {
  const {loadReference} = await import('../plugins/api-reference/content.mjs');
  const {contexts} = await loadReference(root);
  let methods = 0;
  const codesBySource = new Map();
  for (const ctx of contexts) for (const page of Object.values(ctx.pages)) {
    if (page.kind !== 'method') continue;
    methods++;
    const route = ctx.base + '/' + page.id;
    const $ = read(route);
    assert.equal($('h1').length, 1, route);
    assert.equal($('h1').text(), page.title, route);
    assert.equal($('link[rel="canonical"]').attr('href'), 'https://briosa.dev' + route, route);
    assert.equal($('meta[name="briosa:sa-target"]').attr('content'), ctx.target);
    const code = $('.api-contract pre code').toArray().map((n) => $(n).text().trimEnd());
    codesBySource.set(page.source, [...(codesBySource.get(page.source) ?? []), ...code]);
    for (const original of page.codes) assert.ok(code.includes(original.trimEnd()), `${route} lost original code`);
    const ids = $('.api-contract [id]').toArray().map((n) => $(n).attr('id'));
    assert.equal(new Set(ids).size, ids.length, `${route} has duplicate anchors`);
    assert.ok(existsSync(path.join(root, 'build', `api/${ctx.family}/${page.id}.html`)), route);
  }
  for (const ctx of contexts) for (const group of Object.values(ctx.pages).filter((p) => p.kind === 'group')) {
    const $ = read(ctx.base + '/' + group.id);
    const code = [...(codesBySource.get(group.source) ?? []), ...$('.api-contract pre code').toArray().map((n) => $(n).text().trimEnd())];
    const combined = code.join('\n\n').replace(/\s+/g, ' ');
    for (const original of group.codes) assert.ok(code.includes(original.trimEnd()) || combined.includes(original.replace(/\s+/g, ' ').trim()), `${group.source} lost a signature, example, or shared type`);
  }
  assert.ok(methods > 10000, `only ${methods} methods migrated`);
});

test('target-only methods retain historical documentation and explicit unavailable states', () => {
  const method = '/instrument-operations-crib-sheet-operations/run-crib-sheet';
  const old = read('/api/grpc/sa-2024.1.0508.5/0.7.0' + method);
  const current = read('/api/grpc/sa-2026.1.0529.7/0.7.0' + method);
  assert.match(old('.api-contract').text(), /rpc RunCribSheet/);
  assert.doesNotMatch(current('.api-contract').text(), /rpc RunCribSheet/);
  assert.match(current('article').text(), /Unavailable for This Target/);
  assert.match(current('meta[name="robots"]').attr('content'), /noindex/);
  assert.ok(current(`a[href="/api/grpc/sa-2024.1.0508.5/0.7.0${method}"]`).length);
  const history = read('/api/grpc' + method);
  assert.match(history('h1').text(), /Run Crib Sheet/);
  assert.ok(history(`a[href="/api/grpc/sa-2024.1.0508.5/0.7.0${method}"]`).length);
});

test('canonical method pages split requests/results and retain first-call walkthroughs', () => {
  const $ = read('/api/grpc/sa-2024.1.0508.5/0.7.0/analysis-operations/angle-between-line-and-plane');
  for (const anchor of ['signature', 'request-parameters', 'response', 'request-selected-line', 'version-differences']) assert.equal($('#' + anchor).length, 1, anchor);
  assert.match(read('/api/grpc/sa-2026.1.0529.7/0.7.0/file-operations/get-working-directory')('.api-contract').text(), /grpcurl/);
  assert.doesNotMatch($('.api-sidebar').first().text(), /SA 2024\.1\.0508\.5/);
});

test('SA-first routes preserve exact release-first URLs and section links without indexing aliases', () => {
  const sitemap = readFileSync(path.join(root, 'build', 'sitemap.xml'), 'utf8');
  for (const family of ['grpc', 'dotnet', 'python', 'javascript']) {
    const release = family === 'grpc' ? '0.7.0' : '0.2.0';
    const target = '2024.1.0508.5';
    const method = '/analysis-operations/angle-between-line-and-plane';
    const canonical = `/api/${family}/sa-${target}/${release}${method}`;
    const old = `/api/${family}/${release}/sa-${target}${method}`;
    const $ = read(old);
    assert.match($('meta[name="robots"]').attr('content'), /noindex/);
    assert.equal($('link[rel="canonical"]').attr('href'), 'https://briosa.dev' + canonical);
    assert.equal($('#signature a').attr('href'), canonical + '#signature');
    assert.ok(sitemap.includes('https://briosa.dev' + canonical + '</loc>'));
    assert.ok(!sitemap.includes('https://briosa.dev' + old + '</loc>'));
    const toolbar = read(canonical)('.api-toolbar');
    assert.deepEqual(toolbar.find('.api-version-label').toArray().map((n) => n.children[0].data), ['SpatialAnalyzer', family === 'grpc' ? 'Server Release' : 'Client Release']);
    assert.doesNotMatch(toolbar.text(), /Copy (?:History )?Link/);
    for (const base of [`/api/${family}/sa-${target}/${release}`, `/api/${family}/${release}/sa-${target}`]) {
      assert.equal(readFileSync(path.join(root, 'build', base, 'index.html'), 'utf8'), readFileSync(path.join(root, 'build', base + '.html'), 'utf8'));
    }
  }
});

test('older aggregate JavaScript signatures receive pages without inferred lineage merges', () => {
  const base = '/api/javascript/sa-2026.1.0529.7/0.1.0/construction-operations-point-clouds';
  const $ = read(base + '/functions/construct-boundary-points-from-cloud');
  assert.match($('.api-contract').text(), /function constructBoundaryPointsFromCloud/);
  assert.ok($(`a[href="${base}"]`).length, 'shared types remain reachable');
  assert.doesNotMatch($('.api-versions').text(), /0\.2\.0/);
});

test('all old grouped command anchors have useful HTML links without JavaScript', async () => {
  const {loadReference} = await import('../plugins/api-reference/content.mjs');
  const {contexts, releases} = await loadReference(root);
  for (const ctx of contexts) {
    const prefix = `/api/${ctx.family}${ctx.release === releases[ctx.family][0] ? '' : '/' + ctx.release}${ctx.target.startsWith('2024') ? '/sa-' + ctx.target : ''}`;
    for (const group of Object.values(ctx.pages).filter((p) => p.kind === 'group')) {
      const $ = read(prefix + '/' + group.id);
      for (const method of group.methods) {
        const anchor = $('[id]').filter((_, n) => $(n).attr('id') === method.anchor);
        assert.equal(anchor.find('a').attr('href'), ctx.base + '/' + method.id, `${prefix}/${group.id}#${method.anchor}`);
      }
    }
  }
});
