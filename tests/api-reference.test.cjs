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
const revisionNumber = (family, id, release, target) => Number(revision(family, id, release, target).find('h2[id]').attr('id').replace('revision-', ''));
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

test('history selectors keep the SA target being read and never substitute another contract', async () => {
  const {choices, pairOf} = await import('../src/components/ApiReference/context.ts');
  const history = '/api/grpc/file-operations/direct-cad-access';
  const [t24, t26] = ['2024.1.0508.5', '2026.1.0529.7'];
  const variant = (release, target, current = false) => ({release, target, href: `#release-${release}-sa-${target}`, available: true, current});
  const page = {kind: 'history', path: history, variants: [variant('0.9.0', t26, true), variant('0.9.0', t24, true), variant('0.8.0', t26), variant('0.8.0', t24), variant('0.7.0', t26), variant('0.7.0', t24), variant('0.5.1', t26)],
    compatibility: {targets: [{target: t26, href: '/api/grpc/sa-2026.1.0529.7/file-operations/direct-cad-access'}, {target: t24, href: '/api/grpc/sa-2024.1.0508.5/file-operations/direct-cad-access'}]}};
  const nav = {targets: [t26, t24], releases: ['0.9.0', '0.8.0', '0.7.0', '0.5.1']};
  const selected = pairOf(`#release-0.7.0-sa-${t24}`);
  assert.deepEqual(selected, {release: '0.7.0', target: t24});
  const fromPair = choices(page, nav, selected);
  assert.equal(fromPair.releases.find((r) => r.value === '0.8.0').href, `${history}#release-0.8.0-sa-${t24}`, 'release change keeps SA 2024');
  assert.equal(fromPair.releases.find((r) => r.value === '0.5.1').href, null, 'no SA 2024 contract in 0.5.1 is reported, not replaced');
  assert.equal(fromPair.targets.find((t) => t.value === t26).href, `${history}#release-0.7.0-sa-${t26}`, 'target change keeps the release');
  const remembered = choices(page, nav, {target: t24});
  assert.equal(remembered.releases.find((r) => r.value === '0.8.0').href, `${history}#release-0.8.0-sa-${t24}`);
  assert.equal(remembered.targets.find((t) => t.value === t24).href, page.compatibility.targets[1].href);
});

// Run a redirect document's data through the shared redirect script.
function follow(route, hash, search = '') {
  const vm = require('node:vm');
  const html = readFileSync(path.join(root, 'build', route.slice(1) + '.html'), 'utf8');
  const data = html.match(/<script>window\.briosaRedirect=([\s\S]*?)<\/script>/)[1];
  const script = readFileSync(path.join(root, 'build', 'assets', 'api-redirect.js'), 'utf8');
  let destination;
  const storage = () => { const values = new Map(); return {getItem: (k) => values.get(k) ?? null, setItem: (k, v) => values.set(k, v)}; };
  const context = {location: {hash, search, replace: (to) => { destination = to; }}, sessionStorage: storage(), localStorage: storage(), URLSearchParams, decodeURIComponent, encodeURIComponent};
  context.window = context;
  vm.runInNewContext(`window.briosaRedirect=${data};${script}`, context);
  return destination;
}
// A destination exists when its page exists and, if it names an anchor, the anchor does.
function reaches(destination) {
  const [address, anchor] = destination.split('#');
  const $ = read(address.split('?')[0]);
  return !anchor || $('[id]').toArray().some((n) => $(n).attr('id') === anchor);
}

test('former method sections reach their retained content, never a manufactured anchor', () => {
  const history = '/api/grpc/file-operations/direct-cad-access';
  const old = '/api/grpc/sa-2024.1.0508.5/0.7.0/file-operations/direct-cad-access';
  const n = revisionNumber('grpc', 'file-operations/direct-cad-access', '0.7.0', '2024.1.0508.5');
  const query = '?release=0.7.0&sa=2024.1.0508.5';
  const expected = {
    '#request-parameters': `${history}${query}#revision-${n}-request-parameters`,
    '#request-surface-compatibility-mode': `${history}${query}#revision-${n}-request-surface-compatibility-mode`,
    '#version-differences': `${history}${query}#version-differences`,
    '#execution-notes': '/api/grpc/sa-2024.1.0508.5/0.7.0/file-operations',
    '#no-such-section': `${history}#release-0.7.0-sa-2024.1.0508.5`,
  };
  for (const [hash, to] of Object.entries(expected)) {
    assert.equal(follow(old, hash), to, hash);
    assert.ok(reaches(to), `${hash} → ${to}`);
  }
  assert.match(read('/api/grpc/sa-2024.1.0508.5/0.7.0/file-operations')('article').text(), /This reference covers SA 2024\.1\.0508\.5, Server 0\.7\.0/, 'execution notes are the release group notes');
  // An earlier release keeps its first-call walkthrough as a guide page.
  const walkthrough = follow('/api/grpc/sa-2026.1.0529.7/0.7.0/file-operations/get-working-directory', '#first-call-walkthrough');
  assert.equal(walkthrough, '/api/grpc/sa-2026.1.0529.7/0.7.0/get-working-directory');
  assert.match(read(walkthrough)('article').text(), /grpcurl/);
  // A former address for a pair that never documented the method names that pair,
  // so its history page reports the gap instead of reopening another target's contract.
  const crib = '/api/grpc/instrument-operations-crib-sheet-operations/run-crib-sheet';
  assert.equal(follow('/api/grpc/sa-2026.1.0529.7/0.7.0/instrument-operations-crib-sheet-operations/run-crib-sheet', ''), `${crib}?release=0.7.0&sa=2026.1.0529.7`);
  assert.equal(read('/api/grpc/sa-2026.1.0529.7/0.7.0/instrument-operations-crib-sheet-operations/run-crib-sheet')('link[rel="canonical"]').attr('href'), 'https://briosa.dev' + crib, 'canonical addresses carry no query');
  // Client references have no parameter tables, so no table anchor is invented.
  const client = follow('/api/python/sa-2024.1.0508.5/0.2.0/analysis-operations/angle-between-line-and-plane', '#request-parameters');
  assert.equal(client, '/api/python/analysis-operations/angle-between-line-and-plane#release-0.2.0-sa-2024.1.0508.5');
  // Every former method address of one earlier release, for each kind of section.
  const directory = path.join(root, 'build', 'api/grpc/sa-2024.1.0508.5/0.7.0');
  const stubs = [];
  const walk = (dir) => { for (const entry of require('node:fs').readdirSync(dir, {withFileTypes: true})) { const file = path.join(dir, entry.name); if (entry.isDirectory()) walk(file); else if (entry.name.endsWith('.html') && entry.name !== 'index.html') stubs.push('/' + path.relative(path.join(root, 'build'), file).split(path.sep).join('/').slice(0, -5)); } };
  walk(directory);
  let checked = 0;
  for (const route of stubs.sort()) {
    if (!readFileSync(path.join(root, 'build', route.slice(1) + '.html'), 'utf8').includes('"history":true')) continue;
    for (const hash of ['#signature', '#request-parameters', '#response', '#version-differences', '#execution-notes', '#first-call-walkthrough', '#no-such-section']) {
      const to = follow(route, hash);
      assert.ok(reaches(to), `${route}${hash} → ${to}`);
      checked++;
    }
  }
  assert.ok(checked > 5000, `only ${checked} section links checked`);
});

test('section and history navigation keep the release/SA pair being read', async () => {
  const {selection, choices, historyGroupHref} = await import('../src/components/ApiReference/context.ts');
  const history = '/api/grpc/file-operations/direct-cad-access';
  const [t24, t26] = ['2024.1.0508.5', '2026.1.0529.7'];
  const variant = (release, target, revision, current = false) => ({release, target, revision, href: `#release-${release}-sa-${target}`, available: true, current});
  const page = {kind: 'history', path: history, family: 'grpc', group: 'file-operations', variants: [variant('0.9.0', t26, 5, true), variant('0.9.0', t24, 4, true), variant('0.8.0', t26, 5), variant('0.8.0', t24, 4), variant('0.7.0', t26, 3), variant('0.7.0', t24, 2)], compatibility: {targets: []}};
  const nav = {targets: [t26, t24], releases: ['0.9.0', '0.8.0', '0.7.0']};
  const stored = {release: '0.7.0', target: t24};
  const query = (release, target) => `?release=${release}&sa=${target}`;
  // Reading Server 0.7.0 / SA 2024, then following its Request Parameters permalink.
  const shown = selection(page, '#revision-2-request-parameters', '', t24, stored);
  assert.deepEqual(shown, {...stored, replace: `${history}${query('0.7.0', t24)}#revision-2-request-parameters`}, 'the section link keeps the pair, and the address states it');
  assert.equal(choices(page, nav, shown).targets.find((t) => t.value === t26).href, `${history}#release-0.7.0-sa-${t26}`, 'changing only the target keeps Server 0.7.0');
  assert.deepEqual(selection(page, '#revision-2-request-parameters', query('0.7.0', t24), t24, stored), {...stored, replace: null}, 'an address that already agrees is left alone');
  assert.deepEqual(selection(page, '#version-differences', '', t24, stored), {...stored, replace: `${history}${query('0.7.0', t24)}#version-differences`});
  assert.deepEqual(selection(page, '', '', t24, stored), {...stored, replace: `${history}${query('0.7.0', t24)}`}, 'history navigation keeps the pair');
  assert.deepEqual(selection(page, '#revision-4-signature', '', t24, null), {release: '0.9.0', target: t24, replace: `${history}${query('0.9.0', t24)}#revision-4-signature`}, 'a cold section link selects that revision\'s newest pair for the reader\'s target');
  assert.deepEqual(selection(page, '', '', t24, {release: '0.5.1', target: t26}), {target: t26, replace: null}, 'an undocumented stored pair keeps only its target');
  // A stale query never outlives a pair chosen in the page: choosing 0.8.0 / SA 2026 in the
  // availability table, then that revision's permalink, keeps 0.8.0 / SA 2026.
  const chosen = selection(page, `#release-0.8.0-sa-${t26}`, query('0.7.0', t24), t24, stored);
  assert.deepEqual(chosen, {release: '0.8.0', target: t26, replace: `${history}#release-0.8.0-sa-${t26}`}, 'a pair anchor decides and the conflicting query is removed');
  const after = {release: '0.8.0', target: t26};
  assert.deepEqual(selection(page, '#revision-5-request-parameters', query('0.7.0', t24), t26, after), {...after, replace: `${history}${query('0.8.0', t26)}#revision-5-request-parameters`}, 'a query naming another revision is stale and corrected');
  // An explicitly requested pair that is not documented is reported, never replaced by memory.
  assert.deepEqual(selection(page, '', query('0.7.0', '2030.1'), t24, stored), {release: '0.7.0', target: '2030.1', missing: true, replace: null});
  assert.deepEqual(selection(page, '#release-0.5.1-sa-' + t24, '', t24, stored), {release: '0.5.1', target: t24, missing: true, replace: null});
  // The breadcrumb group follows the pair, and those group pages exist.
  for (const [pair, to] of [[stored, '/api/grpc/sa-2024.1.0508.5/0.7.0/file-operations'], [{release: '0.9.0', target: t24}, '/api/grpc/sa-2024.1.0508.5/file-operations']]) {
    assert.equal(historyGroupHref(page, pair), to);
    assert.ok(existsSync(path.join(root, 'build', to.slice(1) + '.html')), to);
  }
  assert.equal(historyGroupHref(page, {target: t24}), null);
  // A history page's own navigation stays among histories instead of entering one target's reference.
  const $ = read(history);
  const links = $('.api-sidebar a[href]').toArray().map((a) => $(a).attr('href'));
  assert.ok(links.includes('/api/grpc') && links.includes(history));
  assert.deepEqual(links.filter((href) => href.startsWith('/api/grpc/sa-')), []);
  assert.equal($('.api-breadcrumbs a[href^="/api/grpc/sa-"]').length, 0);
});

test('search prefers the release of the reference being read, including release-independent addresses', async () => {
  const {searchFilters} = await import('../src/components/ApiReference/context.ts');
  const current = {grpc: {'2024.1.0508.5': '0.9.0', '2026.1.0529.7': '0.9.0'}};
  assert.deepEqual(searchFilters('/api/grpc/sa-2024.1.0508.5/file-operations/direct-cad-access', current), ['api_family:grpc', 'sa_target:2024.1.0508.5', 'api_release:0.9.0']);
  assert.deepEqual(searchFilters('/api/grpc/sa-2024.1.0508.5', current), ['api_family:grpc', 'sa_target:2024.1.0508.5', 'api_release:0.9.0']);
  assert.deepEqual(searchFilters('/api/grpc/sa-2024.1.0508.5/0.7.0/file-operations', current), ['api_family:grpc', 'sa_target:2024.1.0508.5', 'api_release:0.7.0']);
  assert.deepEqual(searchFilters('/api/grpc/file-operations/direct-cad-access', current), ['api_family:grpc']);
  assert.equal(searchFilters('/docs/intro', current), undefined);
  const built = JSON.parse(readFileSync(path.join(root, '.docusaurus', 'globalData.json'), 'utf8'))['briosa-api-reference'].default.current;
  for (const [family, release] of Object.entries({grpc: '0.9.0', dotnet: '0.4.0', python: '0.4.0', javascript: '0.4.0'})) {
    for (const target of ['2024.1.0508.5', '2026.1.0529.7']) assert.equal(built[family][target], release, `${family} ${target}`);
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
        const expected = latest ? `/api/${ctx.family}/sa-${ctx.target}/${method.id}` : `/api/${ctx.family}/${method.id}${documented ? '#' + pair(ctx.release, ctx.target) : `?release=${ctx.release}&sa=${ctx.target}`}`;
        const anchor = $('[id]').filter((_, n) => $(n).attr('id') === method.anchor);
        assert.equal(anchor.find('a').attr('href'), expected, `${prefix}/${group.id}#${method.anchor}`);
      }
    }
  }
});
