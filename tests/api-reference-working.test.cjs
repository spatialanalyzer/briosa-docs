const test = require('node:test');
const assert = require('node:assert/strict');
const {cp, mkdir, mkdtemp, readFile, rm, writeFile} = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

test('working references render clean MP names and preserve qualifier meaning', async () => {
  const {compileReference, families} = await import('../plugins/api-reference/content.mjs');
  const fixture = await mkdtemp(path.join(os.tmpdir(), 'briosa-working-reference-'));
  try {
    const targets = {snapshots: {}};
    for (const family of Object.keys(families)) {
      const [latest] = JSON.parse(await readFile(path.join(root, `${family}_versions.json`), 'utf8'));
      targets.snapshots[family] = {preview: '2026.1.0529.7'};
      await writeFile(path.join(fixture, `${family}_versions.json`), '["preview"]');
      await cp(path.join(root, 'api', family), path.join(fixture, `${family}_versioned_docs`, 'version-preview'), {recursive: true});
      await mkdir(path.join(fixture, `${family}_versioned_sidebars`), {recursive: true});
      await cp(path.join(root, `${family}_versioned_sidebars`, `version-${latest}-sidebars.json`), path.join(fixture, `${family}_versioned_sidebars`, 'version-preview-sidebars.json'));
    }
    await mkdir(path.join(fixture, 'plugins/api-reference'), {recursive: true});
    await writeFile(path.join(fixture, 'plugins/api-reference/targets.json'), JSON.stringify(targets));
    const {pages} = await compileReference(fixture);
    for (const family of Object.keys(families)) {
      for (const target of ['2024.1.0508.5', '2026.1.0529.7']) {
        const page = pages.find((p) => p.path === `/api/${family}/sa-${target}/analysis-operations/angle-between-line-and-plane`);
        assert.ok(page, `${family}/${target} method is rendered`);
        assert.match(page.html, family === 'dotnet' || family === 'javascript' ? /angleTolerance/ : /angle_tolerance/);
        assert.doesNotMatch(page.html, /angle_tolerance_0_0_for_none|angleTolerance00ForNone/);
        assert.match(page.html, /0\.0 disables this tolerance/);
        assert.match(page.html, /(?:Released|Candidate) Source/);
        const collision = pages.find((p) => p.path === `/api/${family}/sa-${target}/gdt-analysis/evaluate-feature-check`);
        assert.ok(collision, `${family}/${target} collision exception is rendered`);
        if (family === 'grpc') assert.match(collision.html, /measured_deviation_upper/);
        else assert.match(collision.html, /EvaluateFeatureCheckResult/);
      }
    }
  } finally {
    // mkdtemp owns this unique fixture; released snapshots are never modified.
    await rm(fixture, {recursive: true, force: true});
  }
});

// A minimal released snapshot for every family, so presentation rules are
// checked in milliseconds without the full reference. `earlier` adds an earlier
// gRPC release, 0.9.0, and two groups that document less than their pages show:
// Ellipses lists its RPC only in a table in 0.9.0, as Server 0.5.1 did, and
// documents it in 1.0.0; Crib Sheet Operations never has a released signature.
async function syntheticReference({sameContract = {}, earlier = false} = {}) {
  const {compileReference, families} = await import('../plugins/api-reference/content.mjs');
  const fixture = await mkdtemp(path.join(os.tmpdir(), 'briosa-synthetic-reference-'));
  const target = '2026.1.0529.7';
  const targets = {snapshots: {}, sameContract};
  const method = [
    '## Get Working Directory {/* #get-working-directory */}', '',
    '[MP Catalog](/mp-command-catalog/commands/file-operations#get-working-directory)', '',
    '`/briosa.FileOperations/GetWorkingDirectory` · Operation ID: `file_operations.get_working_directory`', '',
    '| Message | Field | Name | Type | MP Argument | Briosa Default |',
    '| --- | ---: | --- | --- | --- | --- |',
    '| Request | 1 | `working_directory_name` | `optional string` | Directory Name | Required |',
    '| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |', '',
    '```proto', 'rpc GetWorkingDirectory(GetWorkingDirectoryRequest) returns (GetWorkingDirectoryResult);', '```', '',
    '## Backup Now {/* #backup-now */}', '',
    '`/briosa.FileOperations/BackupNow` · Operation ID: `file_operations.backup_now`', '',
    '| Message | Field | Name | Type | MP Argument | Briosa Default |',
    '| --- | ---: | --- | --- | --- | --- |',
    '| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |', '',
    '```proto', 'rpc BackupNow(BackupNowRequest) returns (BackupNowResult);', '```',
  ].join('\n');
  // The gRPC first-call walkthrough, with the grpcurl example the snapshots publish.
  const walkthrough = '---\ntitle: Get Working Directory\n---\n\n# Get Working Directory\n\nCall it with grpcurl.\n\n```powershell\ngrpcurl -plaintext -d \'{}\' 127.0.0.1:50051 briosa.FileOperations/GetWorkingDirectory\n```\n';
  const ellipses = (release) => release === '0.9.0' ? [
    '## Construct Ellipse', '',
    '| Contract Item | Value |', '| --- | --- |', '| RPC | `ConstructEllipse` |', '| Operation ID | `construction_operations.construct_ellipse` |', '',
    '```proto', 'message ConstructEllipseRequest {', '  optional string ellipse_name = 1;', '}', '```',
  ] : [
    '## Construct Ellipse {/* #construct-ellipse */}', '',
    '[MP Catalog](/mp-command-catalog/commands/construction-operations-ellipses#construct-ellipse)', '',
    '`/briosa.ConstructionOperations/ConstructEllipse` · Operation ID: `construction_operations.construct_ellipse`', '',
    '```proto', 'rpc ConstructEllipse(ConstructEllipseRequest) returns (ConstructEllipseResult);', '```',
  ];
  const cribSheet = (release) => [
    `:::note[Not Available in Server ${release}]`, '', 'These commands have no callable RPC in the released server.', '', ':::', '',
    '## Run Crib Sheet', '',
    'See the [MP catalog entry](/mp-command-catalog/commands/instrument-operations-crib-sheet-operations#run-crib-sheet)',
    'for the proposed command. No released signature', 'is available.',
  ];
  const group = (title, lines) => `---\ntitle: ${title}\n---\n\n# ${title}\n\n${lines.join('\n')}\n`;
  for (const family of Object.keys(families)) {
    const label = family === 'grpc' ? 'Server' : 'client';
    const releases = family === 'grpc' && earlier ? ['1.0.0', '0.9.0'] : ['1.0.0'];
    const groups = ['file-operations', ...(family === 'grpc' && earlier ? ['construction-operations-ellipses', 'instrument-operations-crib-sheet-operations'] : [])];
    await mkdir(path.join(fixture, `${family}_versioned_sidebars`), {recursive: true});
    await writeFile(path.join(fixture, `${family}_versions.json`), JSON.stringify(releases));
    targets.snapshots[family] = {};
    for (const release of releases) {
      const docs = path.join(fixture, `${family}_versioned_docs`, `version-${release}`);
      await mkdir(docs, {recursive: true});
      await writeFile(path.join(fixture, `${family}_versioned_sidebars`, `version-${release}-sidebars.json`), JSON.stringify({sidebar: ['overview', {type: 'category', label: 'Lifecycle', items: ['get-state']}, {type: 'category', label: 'MP Commands', items: groups}]}));
      await writeFile(path.join(docs, 'overview.md'), `---\ntitle: SpatialAnalyzer Test API\n---\n\n# Briosa Test API\n\nThis reference documents **Briosa ${label} ${release}** for exact SpatialAnalyzer\ntarget **${target}**. It covers everything.\n`);
      await writeFile(path.join(docs, 'get-state.md'), '---\ntitle: GetState\n---\n\n# `GetState`\n\nReads the state.\n\n## `StateKind` Values\n\nOne value.\n\n:::warning[Local-Only API]\n\nKeep the endpoint on **loopback**.\n\n:::\n');
      await writeFile(path.join(docs, 'file-operations.md'), `---\ntitle: File Operations\n---\n\n# File Operations\n\nThis reference covers **SA ${target}**, ${label} **${release}**. Choose the other exact target in the sidebar; availability differs.\n\n${method}\n`);
      if (family === 'grpc') await writeFile(path.join(docs, 'get-working-directory.md'), walkthrough);
      if (groups.includes('construction-operations-ellipses')) {
        await writeFile(path.join(docs, 'construction-operations-ellipses.md'), group('Construction Operations / Ellipses', ellipses(release)));
        await writeFile(path.join(docs, 'instrument-operations-crib-sheet-operations.md'), group('Instrument Operations / Crib Sheet Operations', cribSheet(release)));
      }
      targets.snapshots[family][release] = target;
    }
  }
  await mkdir(path.join(fixture, 'plugins/api-reference'), {recursive: true});
  await writeFile(path.join(fixture, 'plugins/api-reference/targets.json'), JSON.stringify(targets));
  try {
    return await compileReference(fixture);
  } finally {
    // mkdtemp owns this unique fixture; released snapshots are never modified.
    await rm(fixture, {recursive: true, force: true});
  }
}

test('titles render inline code as code and use plain text everywhere else', async () => {
  const {pages, navigation} = await syntheticReference({});
  const guide = pages.find((p) => p.path === '/api/grpc/sa-2026.1.0529.7/get-state');
  assert.equal(guide.title, 'GetState', 'no literal backticks in titles, descriptions, or labels');
  assert.equal(guide.heading, '`GetState`', 'the H1 keeps its inline code');
  assert.doesNotMatch(guide.description, /`/);
  assert.match(guide.html, /<h2 id="statekind-values"><code>StateKind<\/code> Values<a href="#statekind-values"/);
  assert.deepEqual(guide.toc, [{id: 'statekind-values', title: 'StateKind Values'}]);
  const nav = navigation['/api/grpc/sa-2026.1.0529.7'];
  assert.deepEqual(nav.lifecycle, [{id: 'get-state', title: 'GetState', code: true}]);
  // The overview link reads as the overview's own H1, not its front-matter title.
  assert.equal(nav.label, 'Briosa Test API');
  assert.equal(pages.find((p) => p.path === '/api/grpc/sa-2026.1.0529.7').title, 'Briosa Test API');
  for (const page of pages) assert.doesNotMatch(page.title, /`/, page.path);
});

test('snapshot admonitions render as the site callouts', async () => {
  const {pages} = await syntheticReference({});
  const guide = pages.find((p) => p.path === '/api/grpc/sa-2026.1.0529.7/get-state');
  // The same markup as src/theme/Admonition/Layout, still an <aside> that search extraction skips.
  assert.match(guide.html, /<aside class="theme-admonition sl-callout" data-kind="warning">\s*<p class="sl-callout__head"><span class="sl-gauge" data-level="4" aria-hidden="true">(?:<i><\/i>){5}<\/span><span class="sl-hud sl-callout__type">Warning<\/span> <span class="sl-callout__title">Local-Only API<\/span><\/p>\s*<div class="sl-callout__body">\s*<p>Keep the endpoint on <strong>loopback<\/strong>\.<\/p>\s*<\/div>\s*<\/aside>/);
  assert.doesNotMatch(guide.html, /:::|alert--/);
});

test('method contracts read as operation panels without changing their text', async () => {
  const {pages} = await syntheticReference({});
  const page = pages.find((p) => p.path === '/api/grpc/sa-2026.1.0529.7/file-operations/get-working-directory');
  assert.match(page.html, /^<div class="api-op-head"><div class="api-rpc"><code class="api-rpc-path"><span class="api-rpc-service">\/briosa\.FileOperations\/<\/span><wbr>GetWorkingDirectory<\/code> <span class="api-rpc-id"><span class="api-rpc-label">Operation ID<\/span> <code>file_<wbr>operations\.<wbr>get_<wbr>working_<wbr>directory<\/code><\/span><\/div> <p class="api-op-links">/);
  assert.match(page.html, /<div class="api-op"><h2 id="request-parameters" data-count="1 Field">/);
  assert.match(page.html, /<table class="api-fields">/);
  assert.match(page.html, /<tr id="request-working-directory-name">/, 'row anchors are kept');
  assert.match(page.html, /<code>working_<wbr>directory_<wbr>name<\/code>/);
  assert.match(page.html, /<code><span class="api-optional">optional<\/span> string<\/code>/);
  assert.match(page.html, /<span class="api-required">Required<\/span>/);
  assert.match(page.html, /<tr id="response-execution" class="api-field-standard">/);
  assert.match(page.html, /<\/div><h2 id="execution-notes">/, 'execution notes follow the operation panel');
  const text = (html) => html.replace(/<[^>]+>/g, '');
  for (const original of ['working_directory_name', 'optional string', 'Required', 'Execution Details', 'rpc GetWorkingDirectory(GetWorkingDirectoryRequest)']) assert.ok(text(page.html).includes(original), original);
  const empty = pages.find((p) => p.path === '/api/grpc/sa-2026.1.0529.7/file-operations/backup-now');
  assert.match(empty.html, /<h2 id="request-parameters">Request Parameters<a[^>]*>#<\/a><\/h2>\n<p class="api-fields-empty">The request has no fields\.<\/p>/);
  const group = pages.find((p) => p.path === '/api/grpc/sa-2026.1.0529.7/file-operations');
  assert.deepEqual(group.fields, {request: 1, result: 0, execution: 2});
  assert.equal(pages.find((p) => p.path === '/api/dotnet/sa-2026.1.0529.7/file-operations').fields.request, 1);
});

test('later releases that serve a snapshot contract unchanged are named with it', async () => {
  const later = ['1.0.1', '1.0.2'];
  const {pages, navigation, index} = await syntheticReference({sameContract: {grpc: {'1.0.0': later}}, earlier: true});
  const at = (route) => pages.find((p) => p.path === route);
  const base = '/api/grpc/sa-2026.1.0529.7';
  // The release's overview, group, and method pages name them in a site note
  // (`sameContract`), whatever their released text says: the Crib Sheet group
  // states no release, and Run Crib Sheet has no released signature.
  for (const id of ['', '/file-operations', '/file-operations/get-working-directory', '/file-operations/backup-now', '/instrument-operations-crib-sheet-operations', '/instrument-operations-crib-sheet-operations/run-crib-sheet']) {
    assert.deepEqual(at(base + id).sameContract, later, base + id);
    assert.doesNotMatch(at(base + id).html, /same contract|Release Status/, `${base + id} keeps the released text apart from the note`);
  }
  // The released sentences are unchanged.
  assert.ok(at(base).html.includes('target <strong>2026.1.0529.7</strong>. It covers everything.'));
  assert.ok(at(`${base}/file-operations`).html.includes('Server <strong>1.0.0</strong>. Choose the SpatialAnalyzer target above;'));
  assert.ok(at(`${base}/file-operations/get-working-directory`).html.includes('Server <strong>1.0.0</strong>. Choose the SpatialAnalyzer target above;'));
  // Other guides and method histories carry no note.
  assert.equal(at(`${base}/get-state`).sameContract, undefined);
  assert.ok(pages.filter((p) => p.kind === 'history').every((p) => !p.sameContract));
  assert.deepEqual(navigation[base].sameContract, {'1.0.0': later});
  assert.deepEqual(index.grpc.sameContract, {'1.0.0': later});
});

test('same-contract labels are absent on earlier gRPC releases and on client families', async () => {
  const {sameContractNote} = await import('../src/components/ApiReference/context.ts');
  const {pages, navigation, index} = await syntheticReference({sameContract: {grpc: {'1.0.0': ['1.0.1', '1.0.2']}}, earlier: true});
  const earlier = pages.filter((p) => p.family === 'grpc' && p.release === '0.9.0');
  assert.deepEqual([...new Set(earlier.map((p) => p.kind))].sort(), ['group', 'guide'], 'the earlier release keeps its overview, guides, and groups');
  for (const page of earlier) {
    assert.equal(page.sameContract, undefined, `${page.path} has no note`);
    // The page's chip and selector note read its own release's entry.
    assert.equal(sameContractNote(navigation[page.base].sameContract, page.release), '', `${page.path} has no label`);
  }
  // Tables on those pages still label the release that has later servers.
  assert.equal(sameContractNote(navigation['/api/grpc/sa-2026.1.0529.7/0.9.0'].sameContract, '1.0.0'), 'Same contract in 1.0.1 and 1.0.2');
  for (const family of ['dotnet', 'python', 'javascript']) {
    assert.equal(navigation[`/api/${family}/sa-2026.1.0529.7`].sameContract, undefined, family);
    assert.equal(index[family].sameContract, undefined, family);
    assert.equal(sameContractNote(navigation[`/api/${family}/sa-2026.1.0529.7`].sameContract, '1.0.0'), '', family);
  }
  assert.ok(!pages.some((p) => p.family !== 'grpc' && (p.sameContract || /same contract/i.test(p.html))));
});

// Docusaurus loads themeConfig.prism.additionalLanguages into prism-react-renderer's
// Prism from a client module (theme-classic's prism-include-languages), which runs
// before any page renders, on the server and in the browser alike. Load the same
// grammars, named by the site config, so code.ts sees what both renders see.
async function siteHighlighter() {
  const {Prism} = require('prism-react-renderer');
  const config = await readFile(path.join(root, 'docusaurus.config.ts'), 'utf8');
  const languages = [...(config.match(/additionalLanguages:\s*\[([^\]]*)\]/)?.[1] ?? '').matchAll(/'([\w-]+)'/g)].map((m) => m[1]);
  const before = globalThis.Prism;
  globalThis.Prism = Prism;
  try {
    for (const language of languages) require(`prismjs/components/prism-${language}`);
  } finally {
    if (before) globalThis.Prism = before; else delete globalThis.Prism;
  }
  const {decorateCode} = await import('../src/components/ApiReference/code.ts');
  return {languages, decorateCode};
}

test('PowerShell examples are highlighted with unchanged text', async () => {
  const {languages, decorateCode} = await siteHighlighter();
  assert.ok(languages.includes('powershell'), 'the site loads the PowerShell grammar');
  const {pages} = await syntheticReference();
  const page = pages.find((p) => p.path === '/api/grpc/sa-2026.1.0529.7/file-operations/get-working-directory');
  const block = decorateCode(page.html).match(/<div class="api-code" data-language="powershell"[\s\S]*?<\/pre><\/div>/)?.[0];
  assert.ok(block, 'the folded first-call walkthrough keeps its PowerShell example');
  assert.match(block, /<span class="api-code-label sl-hud">PowerShell<\/span>/);
  assert.ok((block.match(/<span class="sl-tk-[a-z]">/g) ?? []).length >= 3, 'the example has syntax tokens');
  assert.match(block, /<span class="sl-tk-s">'\{\}'<\/span>/, 'the request body reads as a string');
  const text = block.match(/<code[^>]*>([\s\S]*)<\/code>/)[1].replace(/<[^>]+>/g, '').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&');
  assert.equal(text, "grpcurl -plaintext -d '{}' 127.0.0.1:50051 briosa.FileOperations/GetWorkingDirectory\n");
  // A named entity in code decodes to its own character: &nbsp; is U+00A0.
  assert.match(decorateCode('<pre><code>a&nbsp;b</code></pre>'), /a b/);
});

test('a group whose RPCs are listed only in tables has no Methods readout or index', async () => {
  const {readout, contents} = await import('../src/components/ApiReference/context.ts');
  const {pages, navigation} = await syntheticReference({earlier: true});
  const methodsOf = (page) => navigation[page.base].groups.find((g) => g.id === page.id).methods;
  // Server 0.9.0 lists Construct Ellipse in a contract table, not as a method.
  const listed = pages.find((p) => p.path === '/api/grpc/sa-2026.1.0529.7/0.9.0/construction-operations-ellipses');
  assert.deepEqual(methodsOf(listed), []);
  assert.deepEqual(readout(listed, methodsOf(listed)), [], 'no Methods, field, or First Documented reading');
  assert.deepEqual(contents(listed, 0).map((s) => s.id), ['construct-ellipse', 'version-differences'], 'no Methods entry or anchor');
  assert.match(listed.html, /<h2 id="construct-ellipse">Construct Ellipse/, 'the released RPC section remains');
  // Once a release documents the method, the group has both.
  const documented = pages.find((p) => p.path === '/api/grpc/sa-2026.1.0529.7/construction-operations-ellipses');
  assert.deepEqual(readout(documented, methodsOf(documented)).map((r) => [r.label, r.value]), [['Methods', '1'], ['First Documented', '1.0.0']]);
  assert.deepEqual(contents(documented, methodsOf(documented).length).map((s) => s.id), ['method-index', 'version-differences']);
});

test('First Documented skips releases that documented no method of the group for the target', async () => {
  const {readout} = await import('../src/components/ApiReference/context.ts');
  const {pages, navigation} = await syntheticReference({earlier: true});
  const at = (route) => pages.find((p) => p.path === route);
  const base = '/api/grpc/sa-2026.1.0529.7';
  assert.equal(at(`${base}/file-operations`).firstDocumented, '0.9.0');
  // 0.9.0 has the Ellipses page but lists its RPC only in a table.
  assert.equal(at(`${base}/construction-operations-ellipses`).firstDocumented, '1.0.0');
  // No release documented Run Crib Sheet, so the reading is left out.
  const crib = at(`${base}/instrument-operations-crib-sheet-operations`);
  assert.equal(crib.firstDocumented, undefined);
  const cribMethods = navigation[base].groups.find((g) => g.id === crib.id).methods;
  assert.deepEqual(readout(crib, cribMethods).map((r) => r.label), ['Methods']);
  // An earlier release never names a later one.
  assert.equal(at(`${base}/0.9.0/file-operations`).firstDocumented, '0.9.0');
  assert.equal(at(`${base}/0.9.0/construction-operations-ellipses`).firstDocumented, undefined);
  assert.equal(at(`${base}/0.9.0/instrument-operations-crib-sheet-operations`).firstDocumented, undefined);
});

test('method filters match a name or each family\'s API spelling', async () => {
  const {methodFilter} = await import('../src/components/ApiReference/context.ts');
  const method = {id: 'file-operations/get-working-directory', title: 'Get Working Directory'};
  for (const [family, spelling] of [['grpc', 'GetWorkingDirectory'], ['dotnet', 'GetWorkingDirectoryAsync'], ['python', 'get_working_directory'], ['javascript', 'getWorkingDirectory']]) {
    assert.ok(methodFilter(spelling, family)(method), `${family}: ${spelling}`);
  }
  assert.ok(methodFilter('WorkingDirectoryAs', 'dotnet')(method), 'a partly typed .NET spelling matches');
  assert.ok(!methodFilter('GetWorkingDirectoryAsync', 'python')(method), 'only .NET spells methods with Async');
  assert.ok(!methodFilter('BackupNowAsync', 'dotnet')(method));
  assert.ok(methodFilter('', 'dotnet')(method));
});

test('a new release adds no compatibility redirect documents', async () => {
  const {compileReference, families} = await import('../plugins/api-reference/content.mjs');
  const fixture = await mkdtemp(path.join(os.tmpdir(), 'briosa-next-release-'));
  try {
    const published = JSON.parse(await readFile(path.join(root, 'plugins/api-reference/targets.json'), 'utf8'));
    const targets = {snapshots: {}, compatibilityAddresses: {}};
    const latest = {};
    for (const family of Object.keys(families)) {
      [latest[family]] = JSON.parse(await readFile(path.join(root, `${family}_versions.json`), 'utf8'));
      // The newest real release keeps its published addresses; "next" is cut after them.
      targets.snapshots[family] = {next: '2026.1.0529.7', [latest[family]]: published.snapshots[family][latest[family]]};
      targets.compatibilityAddresses[family] = [latest[family]];
      await writeFile(path.join(fixture, `${family}_versions.json`), JSON.stringify(['next', latest[family]]));
      await cp(path.join(root, 'api', family), path.join(fixture, `${family}_versioned_docs`, 'version-next'), {recursive: true});
      await cp(path.join(root, `${family}_versioned_docs`, `version-${latest[family]}`), path.join(fixture, `${family}_versioned_docs`, `version-${latest[family]}`), {recursive: true});
      await mkdir(path.join(fixture, `${family}_versioned_sidebars`), {recursive: true});
      for (const release of ['next', latest[family]]) {
        await cp(path.join(root, `${family}_versioned_sidebars`, `version-${latest[family]}-sidebars.json`), path.join(fixture, `${family}_versioned_sidebars`, `version-${release}-sidebars.json`));
      }
    }
    await mkdir(path.join(fixture, 'plugins/api-reference'), {recursive: true});
    await writeFile(path.join(fixture, 'plugins/api-reference/targets.json'), JSON.stringify(targets));
    const {redirects, pages} = await compileReference(fixture);
    const from = Object.keys(redirects);
    for (const family of Object.keys(families)) {
      assert.ok(!from.some((address) => address.includes('/next')), `${family}: no addresses for a release cut after release-independent URLs`);
      assert.ok(!from.some((address) => address.startsWith(`/api/${family}/${latest[family]}/`)), `${family}: no new pre-redesign entry routes for the superseded release`);
      // The published release's own method addresses now lead to its history revision.
      const method = 'analysis-operations/angle-between-line-and-plane';
      assert.match(redirects[`/api/${family}/sa-2024.1.0508.5/${latest[family]}/${method}`]?.to ?? '', new RegExp(`^/api/${family}/${method}#release-${latest[family].replaceAll('.', '\\.')}-sa-2024`));
      assert.ok(pages.some((p) => p.path === `/api/${family}/sa-2024.1.0508.5/${method}` && p.release === 'next'));
      // Unversioned group addresses and their method anchors follow the current reference.
      const group = redirects[`/api/${family}/analysis-operations`];
      for (const target of ['2026.1.0529.7', '2024.1.0508.5']) {
        const choice = target === '2026.1.0529.7' ? group : group.choices[target];
        assert.equal(choice.to, `/api/${family}/sa-${target}/analysis-operations`);
        assert.equal(choice.aliases['angle-between-line-and-plane'], `/api/${family}/sa-${target}/${method}`, `${family} ${target} unversioned anchor`);
      }
    }
  } finally {
    // mkdtemp owns this unique fixture; released snapshots are never modified.
    await rm(fixture, {recursive: true, force: true});
  }
});

// JavaScript method owners. Each JavaScript reference is checked against the
// owner map pinned to the client release it documents, which
// scripts/javascript-owner-maps.mjs builds from that release's tag in
// spatialanalyzer/briosa-js. A map gives every method of each exact target one
// owner: an operation-group interface reached through a client property, the
// client interface itself, or the package, for a package-level function.
//
// A page declares a method in a TypeScript block in one of three forms:
// - as a member of an interface block. A group method's block carries the
//   label "// Member of <Group> (briosa.<property>.<method>(...))" on the line
//   above the interface;
// - as a `function`, which declares a package-level function; or
// - as a bare signature, such as `stop(): Promise<void>;`, which the lifecycle
//   pages use for client members.
//
// The check fails when a declared method has another owner in the pinned map,
// is absent from it, or lacks or misstates its owner label; when a pinned
// method is declared on no page of a target's reference; and when a page that
// declares group methods does not say how to call them. The working
// reference's client release, and known differences that await a decision,
// are recorded in tests/javascript-owner-maps/references.json.
const ownerMaps = 'tests/javascript-owner-maps';
const rebuild = (release) => `node scripts/javascript-owner-maps.mjs <briosa-js checkout> ${release}`;
const pageText = new Map();
const readPage = (file) => {
  if (!pageText.has(file)) pageText.set(file, require('node:fs').readFileSync(file, 'utf8').replace(/\r\n/g, '\n'));
  return pageText.get(file);
};
const ownerLabel = /^\/\/ Member of /;
const interfaceStart = /^(?:export\s+)?(?:declare\s+)?interface\s+([\w$]+)\b[^{]*\{$/;

function declaredMethods(text) {
  const found = [];
  for (const [, code] of text.matchAll(/^```ts\n([\s\S]*?)^```/gm)) {
    const lines = code.split('\n');
    for (let i = 0; i < lines.length; i++) {
      let m;
      if (ownerLabel.test(lines[i])) {
        if (!interfaceStart.test(lines[i + 1] ?? '')) found.push({form: 'orphan', label: lines[i]});
      } else if ((m = lines[i].match(interfaceStart))) {
        const label = ownerLabel.test(lines[i - 1] ?? '') ? lines[i - 1] : null;
        for (i++; i < lines.length && !lines[i].startsWith('}'); i++) {
          const member = lines[i].match(/^ {2}(\[Symbol\.\w+\]|[A-Za-z_$][\w$]*)\??(?:<[^>]*>)?\(/);
          if (member) found.push({form: 'interface', name: member[1], owner: m[1], label});
        }
      } else if ((m = lines[i].match(/^(?:export\s+)?(?:declare\s+)?(?:async\s+)?function\s+([\w$]+)/))) {
        found.push({form: 'function', name: m[1]});
      } else if ((m = lines[i].match(/^(\[Symbol\.\w+\]|[A-Za-z_$][\w$]*)(?:<[^>]*>)?\(/))) {
        // A signature, unlike a call, follows its parameter list with a return type.
        const rest = lines.slice(i).join('\n');
        let end = m[0].length - 1;
        for (let depth = 0; end < rest.length; end++) if (rest[end] === '(') depth++; else if (rest[end] === ')' && --depth === 0) break;
        if (/^\s*:/.test(rest.slice(end + 1))) found.push({form: 'signature', name: m[1]});
      }
    }
  }
  return found;
}

// Returns every ownership failure in the JavaScript references under siteRoot,
// and what was checked. `overrides` replaces file text by repository path.
function ownerCheck(siteRoot, overrides = {}) {
  const {existsSync, readdirSync} = require('node:fs');
  const read = (rel) => (rel in overrides ? overrides[rel] : readPage(path.join(siteRoot, rel)));
  const json = (rel) => JSON.parse(read(rel));
  const failures = [];
  const checked = [];
  const used = new Set();
  const targets = json('plugins/api-reference/targets.json');
  const {working, knownDifferences = {}} = json(`${ownerMaps}/references.json`);
  const references = [
    {reference: 'api/javascript', release: working, defaultTarget: targets.workingDefault},
    ...json('javascript_versions.json').map((release) => ({reference: `javascript_versioned_docs/version-${release}`, release, defaultTarget: targets.snapshots.javascript[release]})),
  ];
  for (const {reference, release, defaultTarget} of references) {
    const mapFile = `${ownerMaps}/${release}.json`;
    if (!(mapFile in overrides) && !existsSync(path.join(siteRoot, mapFile))) {
      failures.push(`${reference} documents client ${release}, which has no pinned owner map at ${mapFile}. Build it with: ${rebuild(release)}`);
      continue;
    }
    const map = json(mapFile);
    const subfolders = readdirSync(path.join(siteRoot, reference), {withFileTypes: true}).filter((d) => d.isDirectory() && d.name.startsWith('sa-')).map((d) => d.name);
    for (const sub of ['', ...subfolders]) {
      const folder = sub ? `${reference}/${sub}` : reference;
      const target = sub ? sub.slice(3) : defaultTarget;
      const pinnedIn = `client ${release} (${map.source.tag}, SA ${target})`;
      const owners = map.targets[target];
      if (!owners) {
        failures.push(`${folder} documents SA ${target}, which the pinned owner map for client ${release} (${map.source.tag}) does not cover. Rebuild it with: ${rebuild(release)}`);
        continue;
      }
      const client = owners.client.interface;
      const pinned = new Map();
      for (const [group, {property, methods}] of Object.entries(owners.groups)) for (const method of methods) pinned.set(method, {owner: group, property, text: `${group} (briosa.${property})`});
      for (const method of owners.client.members) pinned.set(method, {owner: client, text: client});
      for (const method of owners.functions) pinned.set(method, {owner: 'package-level function', text: 'a package-level function'});
      // A known difference listed under "*" applies to every reference folder.
      const scopes = ['*', folder].filter((scope) => knownDifferences[scope]);
      const knownUndocumented = new Map(scopes.flatMap((scope) => (knownDifferences[scope].undocumented ?? []).map((method) => [method, scope])));
      const knownOwners = new Map(scopes.flatMap((scope) => Object.entries(knownDifferences[scope].documentedOwners ?? {}).flatMap(([documented, pages]) => Object.entries(pages).flatMap(([page, methods]) => methods.map((method) => [`${page}#${method}`, {documented, scope}])))));
      const declared = new Set();
      let declarations = 0;
      for (const page of readdirSync(path.join(siteRoot, folder)).filter((name) => name.endsWith('.md')).sort()) {
        const file = `${folder}/${page}`;
        const text = read(file);
        for (const [, stated] of text.matchAll(/\bclient \*\*(\d+\.\d+\.\d+)\*\*/g)) {
          if (stated !== release) failures.push(`${file} states client ${stated}, but ${reference} is checked against the owner map for client ${release}.`);
        }
        const groupsDeclared = new Set();
        for (const d of declaredMethods(text)) {
          if (d.form === 'orphan') {
            failures.push(`${file}: the owner label "${d.label}" is not directly above an interface declaration.`);
            continue;
          }
          const pin = pinned.get(d.name);
          // Methods of other interfaces, such as BriosaServerSnapshot.supports, are not client methods.
          if (d.form === 'interface' && !pin && !d.label && !owners.groups[d.owner] && d.owner !== client) continue;
          declarations++;
          declared.add(d.name);
          const documented = d.form === 'function' ? 'package-level function' : d.form === 'signature' ? client : d.owner;
          const as = d.form === 'function' ? 'a package-level function' : d.form === 'signature' ? `an unlabelled ${client} member signature` : `a member of ${d.owner}`;
          if (!pin) {
            failures.push(`${file}: ${d.name} is documented as ${as}, but the pinned owner map for ${pinnedIn} has no such method.`);
            continue;
          }
          if (documented !== pin.owner) {
            const key = `${page}#${d.name}`;
            const known = knownOwners.get(key);
            if (known?.documented === documented) used.add(`${known.scope}|${key}`);
            else failures.push(`${file}: ${d.name} is documented as ${as}; its pinned owner in ${pinnedIn} is ${pin.text}.`);
            continue;
          }
          if (d.form !== 'interface') continue;
          const expected = pin.property ? `// Member of ${pin.owner} (briosa.${pin.property}.${d.name}(...))` : `// Member of ${pin.owner}`;
          if (pin.property) groupsDeclared.add(pin.owner);
          if (pin.property && !d.label) failures.push(`${file}: ${d.name} is documented as a member of ${d.owner} without an owner label; its pinned owner in ${pinnedIn} is ${pin.text}. Label it "${expected}".`);
          else if (d.label && d.label !== expected) failures.push(`${file}: ${d.name} is documented as a member of ${d.owner} with the owner label "${d.label}"; its pinned owner in ${pinnedIn} is ${pin.text}, labelled "${expected}".`);
        }
        const cut = text.indexOf('\n## ');
        const intro = cut < 0 ? text : text.slice(0, cut);
        for (const group of groupsDeclared) {
          const {property} = owners.groups[group];
          if (!intro.includes(`\`${group}\``) || !intro.includes(`\`briosa.${property}.<method>(...)\``)) {
            failures.push(`${file}: the introduction does not say to call ${group} methods through \`briosa.${property}.<method>(...)\`, which their pinned owner in ${pinnedIn} requires.`);
          }
        }
      }
      for (const [method, pin] of pinned) {
        if (declared.has(method)) continue;
        if (knownUndocumented.has(method)) used.add(`${knownUndocumented.get(method)}|${method}`);
        else failures.push(`${folder}: no page declares ${method}; its pinned owner in ${pinnedIn} is ${pin.text}.`);
      }
      checked.push({folder, release, tag: map.source.tag, commit: map.source.commit, target, declarations});
    }
  }
  for (const [scope, known] of Object.entries(knownDifferences)) {
    const where = scope === '*' ? 'every reference folder' : scope;
    for (const method of known.undocumented ?? []) {
      if (!used.has(`${scope}|${method}`)) failures.push(`${ownerMaps}/references.json lists ${method} as undocumented in ${where}, but the check no longer finds it undocumented there. Remove the entry.`);
    }
    for (const [documented, pages] of Object.entries(known.documentedOwners ?? {})) {
      for (const [page, methods] of Object.entries(pages)) {
        for (const method of methods) {
          if (!used.has(`${scope}|${page}#${method}`)) failures.push(`${ownerMaps}/references.json lists ${method} on ${page} in ${where} as documented under ${documented}, but the check no longer finds that difference. Remove the entry.`);
        }
      }
    }
  }
  return {failures, checked};
}

test('JavaScript methods are documented under the owner their pinned client release gives them', (t) => {
  const {failures, checked} = ownerCheck(root);
  for (const c of checked) t.diagnostic(`${c.folder}: client ${c.release}, SA ${c.target}, map from ${c.tag} (${c.commit.slice(0, 7)}), ${c.declarations} declarations`);
  assert.equal(failures.length, 0, failures.join('\n'));
});

test('the JavaScript owner check names the method, both owners, and the file', () => {
  const folder = 'api/javascript';
  const {working} = JSON.parse(readPage(path.join(root, ownerMaps, 'references.json')));
  const map = JSON.parse(readPage(path.join(root, ownerMaps, `${working}.json`)));
  const target = JSON.parse(readPage(path.join(root, 'plugins/api-reference/targets.json'))).workingDefault;
  const {groups} = map.targets[target];
  const pinnedIn = `client ${working} (${map.source.tag}, SA ${target})`;
  // The first labelled group method in the working reference, and another real group.
  const pages = require('node:fs').readdirSync(path.join(root, folder)).filter((name) => name.endsWith('.md')).sort();
  const page = pages.find((name) => declaredMethods(readPage(path.join(root, folder, name))).some((d) => d.label && groups[d.owner]));
  const file = `${folder}/${page}`;
  const text = readPage(path.join(root, file));
  const {name: method, owner: group} = declaredMethods(text).find((d) => d.label && groups[d.owner]);
  const {property} = groups[group];
  const other = Object.keys(groups).find((g) => g !== group);
  const label = `// Member of ${group} (briosa.${property}.${method}(...))`;
  const block = `${label}\ninterface ${group} {\n  ${method}(`;
  assert.ok(text.includes(block), `${file} declares ${method} in the labelled form`);
  const failuresWith = (overrides) => ownerCheck(root, overrides).failures;
  const pinned = `${group} (briosa.${property})`;

  // The defect in https://github.com/spatialanalyzer/briosa-docs/issues/137: a group method declared on the client.
  assert.deepEqual(failuresWith({[file]: text.replace(block, `// Member of BriosaClient\ninterface BriosaClient {\n  ${method}(`)}), [
    `${file}: ${method} is documented as a member of BriosaClient; its pinned owner in ${pinnedIn} is ${pinned}.`,
  ]);
  // A method moved consistently to another real group: label, interface, and calling sentence agree.
  const moved = text.replace(block, `// Member of ${other} (briosa.${groups[other].property}.${method}(...))\ninterface ${other} {\n  ${method}(`)
    .replace('\n## ', `\nCall \`${other}\` methods through \`briosa.${groups[other].property}.<method>(...)\`.\n\n## `);
  assert.deepEqual(failuresWith({[file]: moved}), [
    `${file}: ${method} is documented as a member of ${other}; its pinned owner in ${pinnedIn} is ${pinned}.`,
  ]);
  // A removed owner label.
  assert.deepEqual(failuresWith({[file]: text.replace(`${label}\n`, '')}), [
    `${file}: ${method} is documented as a member of ${group} without an owner label; its pinned owner in ${pinnedIn} is ${pinned}. Label it "${label}".`,
  ]);
  // A documented method that the pinned map does not have.
  const added = `${method}Twice`;
  const addedBlock = `// Member of ${group} (briosa.${property}.${added}(...))\ninterface ${group} {\n  ${added}(): Promise<void>;\n}\n\n`;
  assert.deepEqual(failuresWith({[file]: text.replace(block, `${addedBlock}${block}`)}), [
    `${file}: ${added} is documented as a member of ${group}, but the pinned owner map for ${pinnedIn} has no such method.`,
  ]);
  // A pinned method that no page declares: its section is removed, or the map gains a method.
  const start = text.lastIndexOf('\n## ', text.indexOf(block));
  const section = text.slice(start, text.indexOf('\n## ', start + 1));
  assert.deepEqual(failuresWith({[file]: text.replace(section, '')}), [
    `${folder}: no page declares ${method}; its pinned owner in ${pinnedIn} is ${pinned}.`,
  ]);
  const extended = structuredClone(map);
  extended.targets[target].groups[group].methods.push(added);
  const missing = failuresWith({[`${ownerMaps}/${working}.json`]: JSON.stringify(extended)});
  assert.ok(missing.includes(`${folder}: no page declares ${added}; its pinned owner in ${pinnedIn} is ${pinned}.`), missing.join('\n'));
  assert.ok(missing.every((f) => f.endsWith(`: no page declares ${added}; its pinned owner in ${pinnedIn} is ${pinned}.`)), missing.join('\n'));
});

test('a client release that adds an operation group or a client member needs only its owner map', async () => {
  const fixture = await mkdtemp(path.join(os.tmpdir(), 'briosa-javascript-owners-'));
  try {
    const target = '2026.1.0529.7';
    const owners = {
      client: {interface: 'BriosaClient', members: ['restart', 'start']},
      groups: {MeshOperations: {property: 'meshOperations', methods: ['smoothMesh']}},
      functions: ['createBriosaClient'],
    };
    const map = {release: '9.0.0', source: {repository: 'https://github.com/spatialanalyzer/briosa-js', tag: 'v9.0.0', commit: '0'.repeat(40)}, targets: {[target]: owners}};
    const files = {
      'plugins/api-reference/targets.json': JSON.stringify({workingDefault: target, snapshots: {javascript: {'9.0.0': target}}}),
      'javascript_versions.json': '["9.0.0"]',
      [`${ownerMaps}/references.json`]: JSON.stringify({working: '9.0.0'}),
      [`${ownerMaps}/9.0.0.json`]: JSON.stringify(map),
    };
    const pages = {
      'lifecycle.md': '# Lifecycle\n\n```ts\nexport declare function createBriosaClient(): BriosaClient;\n\nstart(): Promise<void>;\n\nrestart(): Promise<void>;\n```\n',
      'mesh-operations.md': '# Mesh Operations\n\nThis reference covers client **9.0.0**. Call `MeshOperations` methods through `briosa.meshOperations.<method>(...)`.\n\n## Smooth Mesh\n\n```ts\n// Member of MeshOperations (briosa.meshOperations.smoothMesh(...))\ninterface MeshOperations {\n  smoothMesh(\n    mesh: CollectionObjectName,\n  ): Promise<void>;\n}\n```\n',
    };
    for (const folder of ['api/javascript', 'javascript_versioned_docs/version-9.0.0']) {
      for (const [name, text] of Object.entries(pages)) files[`${folder}/${name}`] = text;
    }
    for (const [file, text] of Object.entries(files)) {
      await mkdir(path.dirname(path.join(fixture, file)), {recursive: true});
      await writeFile(path.join(fixture, file), text);
    }
    const {failures, checked} = ownerCheck(fixture);
    assert.deepEqual(failures, []);
    assert.deepEqual(checked.map((c) => [c.folder, c.declarations]), [['api/javascript', 4], ['javascript_versioned_docs/version-9.0.0', 4]]);
    // A listed difference that no longer occurs fails, so the list cannot go stale.
    const listed = {working: '9.0.0', knownDifferences: {'*': {undocumented: ['restart']}}};
    assert.deepEqual(ownerCheck(fixture, {[`${ownerMaps}/references.json`]: JSON.stringify(listed)}).failures, [
      `${ownerMaps}/references.json lists restart as undocumented in every reference folder, but the check no longer finds it undocumented there. Remove the entry.`,
    ]);
  } finally {
    // mkdtemp owns this unique fixture.
    await rm(fixture, {recursive: true, force: true});
  }
});
