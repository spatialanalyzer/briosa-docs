const {test} = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync, existsSync} = require('node:fs');
const path = require('node:path');
const {load} = require('cheerio');
const {spawn} = require('node:child_process');
const root = path.join(__dirname, '..');
// A small recent-document cache; the build has tens of thousands of pages.
const parsed = new Map();
const read = (route) => {
  let $ = parsed.get(route);
  if ($) parsed.delete(route);
  else $ = load(readFileSync(path.join(root, 'build', route.slice(1) + '.html'), 'utf8'));
  parsed.set(route, $);
  if (parsed.size > 64) parsed.delete(parsed.keys().next().value);
  return $;
};
const sitemap = () => readFileSync(path.join(root, 'build', 'sitemap.xml'), 'utf8');
const pair = (release, target) => `release-${release}-sa-${target}`;
// The revision section of a method history page that documents one release/SA pair.
const revision = (family, id, release, target) => {
  const $ = read(`/api/${family}/${id}`);
  return $(`li[id="${pair(release, target)}"]`).closest('section.api-revision');
};

async function reference() {
  const {loadReference} = await import('../plugins/api-reference/content.mjs');
  const {contexts, releases} = await loadReference(root);
  // Each SA target is read at the newest release that documents it.
  const current = new Set();
  for (const family of Object.keys(releases)) for (const target of new Set(contexts.filter((c) => c.family === family).map((c) => c.target))) {
    const release = releases[family].find((r) => contexts.some((c) => c.family === family && c.release === r && c.target === target));
    current.add(`${family}/${release}/${target}`);
  }
  for (const ctx of contexts) ctx.current = current.has(`${ctx.family}/${ctx.release}/${ctx.target}`);
  return {contexts, releases};
}

test('SA target roots and release roots serve real HTML instead of a client-recovered 404', async (t) => {
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
  for (const route of ['/api/grpc/sa-2026.1.0529.7', '/api/dotnet/sa-2024.1.0508.5/', '/api/grpc/sa-2026.1.0529.7/0.7.0', '/api/grpc/sa-2026.1.0529.7/0.9.0', '/api/grpc/0.7.0/sa-2024.1.0508.5']) {
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
    assert.equal(context.anchorOf('#invalid%escape'), 'invalid%escape');
  } finally {
    if (originalLocal) Object.defineProperty(globalThis, 'localStorage', originalLocal); else delete globalThis.localStorage;
    if (originalSession) Object.defineProperty(globalThis, 'sessionStorage', originalSession); else delete globalThis.sessionStorage;
  }
});

test('every released MP method preserves its original code at its current page or history revision', async () => {
  const {contexts} = await reference();
  let methods = 0;
  const codesByPage = new Map();
  const key = (ctx, id) => `${ctx.family}/${ctx.release}/${ctx.target}/${id}`;
  // Visit each method across releases together so its history page is read once.
  const entries = contexts.flatMap((ctx) => Object.values(ctx.pages).filter((p) => p.kind === 'method').map((page) => [ctx, page]));
  entries.sort(([a, x], [b, y]) => `${a.family}/${x.id}`.localeCompare(`${b.family}/${y.id}`));
  for (const [ctx, page] of entries) {
    methods++;
    const exact = ctx.base + '/' + page.id;
    const stub = read(exact);
    assert.match(stub('meta[name="robots"]').attr('content'), /noindex/, exact);
    let code;
    if (ctx.current) {
      const route = `/api/${ctx.family}/sa-${ctx.target}/${page.id}`;
      const $ = read(route);
      assert.equal($('h1').length, 1, route);
      assert.equal($('h1').text(), page.title, route);
      assert.equal($('link[rel="canonical"]').attr('href'), 'https://briosa.dev' + route, route);
      assert.equal($('meta[name="briosa:sa-target"]').attr('content'), ctx.target);
      assert.equal($('#sa-compatibility').length, 1, `${route} shows SpatialAnalyzer compatibility`);
      assert.equal(stub('link[rel="canonical"]').attr('href'), 'https://briosa.dev' + route, exact);
      code = $('.api-contract pre code').toArray().map((n) => $(n).text().trimEnd());
    } else {
      const history = `/api/${ctx.family}/${page.id}`;
      assert.ok(existsSync(path.join(root, 'build', history.slice(1) + '.html')), history);
      const section = revision(ctx.family, page.id, ctx.release, ctx.target);
      if (!page.available) { assert.equal(section.length, 0, `${exact} is not presented as documented`); continue; }
      assert.equal(section.length, 1, `${exact} has a history revision`);
      assert.equal(stub('link[rel="canonical"]').attr('href'), `https://briosa.dev${history}#${pair(ctx.release, ctx.target)}`, exact);
      const $ = read(history);
      code = section.find('.api-revision-contract pre code').toArray().map((n) => $(n).text().trimEnd());
    }
    codesByPage.set(key(ctx, page.id), code);
    for (const original of page.codes) assert.ok(code.includes(original.trimEnd()), `${exact} lost original code`);
  }
  for (const ctx of contexts) for (const group of Object.values(ctx.pages).filter((p) => p.kind === 'group')) {
    const $ = read((ctx.current ? `/api/${ctx.family}/sa-${ctx.target}` : ctx.base) + '/' + group.id);
    // Method code in document order, then the group's shared code.
    const code = [...group.methods.flatMap((m) => codesByPage.get(key(ctx, m.id)) ?? []), ...$('.api-contract pre code').toArray().map((n) => $(n).text().trimEnd())];
    const combined = code.join('\n\n').replace(/\s+/g, ' ');
    for (const original of group.codes) assert.ok(code.includes(original.trimEnd()) || combined.includes(original.replace(/\s+/g, ' ').trim()), `${group.source} lost a signature, example, or shared type`);
  }
  assert.ok(methods > 10000, `only ${methods} methods migrated`);
});

test('legacy SA targets keep visible current references, compatibility, and indexed history', () => {
  const method = '/instrument-operations-crib-sheet-operations/run-crib-sheet';
  const legacy = read('/api/grpc/sa-2024.1.0508.5' + method);
  const latest = read('/api/grpc/sa-2026.1.0529.7' + method);
  assert.match(legacy('.api-contract').text(), /rpc RunCribSheet/);
  assert.doesNotMatch(latest('.api-contract').text(), /rpc RunCribSheet/);
  assert.match(latest('article').text(), /Unavailable for This Target/);
  assert.match(latest('meta[name="robots"]').attr('content'), /noindex/);
  assert.ok(latest(`.api-compatibility a[href="/api/grpc/sa-2024.1.0508.5${method}"]`).length, 'unavailable page points to the documented SA target');
  const history = read('/api/grpc' + method);
  assert.match(history('h1').text(), /Run Crib Sheet/);
  assert.equal(history('meta[name="robots"]').length, 0, 'history is indexable');
  assert.ok(sitemap().includes(`https://briosa.dev/api/grpc${method}</loc>`), 'history is in the sitemap');
  assert.ok(history(`a[href="#${pair('0.7.0', '2024.1.0508.5')}"]`).length);
  assert.ok(history(`.api-compatibility a[href="/api/grpc/sa-2024.1.0508.5${method}"]`).length);
  assert.match(revision('grpc', method.slice(1), '0.7.0', '2024.1.0508.5').text(), /rpc RunCribSheet/);
  assert.ok(legacy(`.api-compatibility a[href="/api/grpc${method}"]`).length, 'current pages link to their release history');
  for (const family of ['grpc', 'dotnet', 'python', 'javascript']) {
    const index = read(`/api/${family}`);
    assert.ok(index(`a[href="/api/${family}/sa-2024.1.0508.5"]`).length, `${family} offers SA 2024 directly`);
    assert.ok(index(`a[href="/api/${family}/sa-2026.1.0529.7"]`).length);
    assert.ok(sitemap().includes(`https://briosa.dev/api/${family}</loc>`));
  }
});

test('current method pages split requests/results and retain first-call walkthroughs', () => {
  const $ = read('/api/grpc/sa-2024.1.0508.5/analysis-operations/angle-between-line-and-plane');
  for (const anchor of ['sa-compatibility', 'signature', 'request-parameters', 'response', 'request-selected-line', 'version-differences']) assert.equal($('#' + anchor).length, 1, anchor);
  assert.match(read('/api/grpc/sa-2026.1.0529.7/file-operations/get-working-directory')('.api-contract').text(), /grpcurl/);
  assert.doesNotMatch($('.api-sidebar').first().text(), /SA 2024\.1\.0508\.5/);
});

test('release-qualified addresses redirect statically to current references or history without indexing', () => {
  const map = sitemap();
  for (const family of ['grpc', 'dotnet', 'python', 'javascript']) {
    const [currentRelease, olderRelease] = family === 'grpc' ? ['0.9.0', '0.7.0'] : ['0.4.0', '0.2.0'];
    const target = '2024.1.0508.5';
    const method = 'analysis-operations/angle-between-line-and-plane';
    const canonical = `/api/${family}/sa-${target}/${method}`;
    for (const [from, to] of [[`/api/${family}/sa-${target}/${currentRelease}/${method}`, canonical], [`/api/${family}/sa-${target}/${olderRelease}/${method}`, `/api/${family}/${method}#${pair(olderRelease, target)}`]]) {
      const $ = read(from);
      assert.match($('meta[name="robots"]').attr('content'), /noindex/, from);
      assert.equal($('link[rel="canonical"]').attr('href'), 'https://briosa.dev' + to, from);
      assert.match($('meta[http-equiv="refresh"]').attr('content'), new RegExp(`url=${to.replace(/[.#]/g, '\\$&')}$`), from);
      assert.ok(!map.includes(`https://briosa.dev${from}</loc>`), from);
    }
    assert.ok(map.includes(`https://briosa.dev${canonical}</loc>`));
    assert.ok(!existsSync(path.join(root, 'build', `api/${family}/${olderRelease}/sa-${target}/${method}.html`)), 'release-first method aliases are retired');
    const toolbar = read(canonical)('.api-toolbar');
    assert.deepEqual(toolbar.find('.api-version-label').toArray().map((n) => n.children[0].data), ['SpatialAnalyzer', family === 'grpc' ? 'Server Release' : 'Client Release']);
    for (const base of [`/api/${family}/sa-${target}`, `/api/${family}/sa-${target}/${currentRelease}`, `/api/${family}/sa-${target}/${olderRelease}`]) {
      assert.equal(readFileSync(path.join(root, 'build', base, 'index.html'), 'utf8'), readFileSync(path.join(root, 'build', base + '.html'), 'utf8'));
    }
  }
});

test('older aggregate JavaScript signatures keep their history without inferred lineage merges', () => {
  const id = 'construction-operations-point-clouds/functions/construct-boundary-points-from-cloud';
  const section = revision('javascript', id, '0.1.0', '2026.1.0529.7');
  assert.match(section.find('.api-revision-contract').text(), /function constructBoundaryPointsFromCloud/);
  assert.ok(section.find('a[href="/api/javascript/sa-2026.1.0529.7/0.1.0/construction-operations-point-clouds"]').length, 'shared types remain reachable');
  assert.doesNotMatch(read(`/api/javascript/${id}`)('.api-availability').text(), /0\.2\.0/);
});

test('all old grouped command anchors have useful HTML links without JavaScript', async () => {
  const {contexts, releases} = await reference();
  for (const ctx of contexts) {
    const latest = ctx.release === releases[ctx.family][0];
    const prefix = `/api/${ctx.family}${latest ? '' : '/' + ctx.release}${ctx.target.startsWith('2024') ? '/sa-' + ctx.target : ''}`;
    for (const group of Object.values(ctx.pages).filter((p) => p.kind === 'group')) {
      const $ = read(prefix + '/' + group.id);
      for (const method of group.methods) {
        const documented = ctx.pages[method.id] && !/No released signature\s+is available/.test(ctx.pages[method.id].body);
        const expected = latest ? `/api/${ctx.family}/sa-${ctx.target}/${method.id}` : `/api/${ctx.family}/${method.id}${documented ? '#' + pair(ctx.release, ctx.target) : ''}`;
        const anchor = $('[id]').filter((_, n) => $(n).attr('id') === method.anchor);
        assert.equal(anchor.find('a').attr('href'), expected, `${prefix}/${group.id}#${method.anchor}`);
      }
    }
  }
});
