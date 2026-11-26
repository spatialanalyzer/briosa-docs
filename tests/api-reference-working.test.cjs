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
// spatialanalyzer/briosa-js. A map gives every method of each exact target an
// owner: an operation-group interface reached through a client property, the
// client interface itself, or the package, for a package-level function.
//
// The check is a closed world. The site's Markdown parser selects every code
// block; TypeScript and JavaScript blocks are parsed with the TypeScript
// parser, and every declaration in them must be one of the supported forms
// that tests/javascript-owner-maps/README.md lists. A group method is declared
// in an interface labelled "// Member of <Group> (briosa.<property>.<method>(...))",
// a client member as a bare signature, and a package-level function as a
// root-level `function` without a body. Anything else that declares or could
// declare a callable fails as an unsupported form, and so does any parse error
// other than the two conventions the reference uses: bare member signatures
// and `...` standing for a value. A block in another language may not name a
// pinned method.
//
// For each reference and each exact target its sidebar lists, the check also
// fails when a declared method has another owner in the pinned map, is absent
// from it, or lacks or misstates its owner label; when a pinned method is
// declared on no page; when a page that declares group methods does not say
// how to call them; and when the map, the overview, or a group page names
// another client release. tests/javascript-owner-maps/ holds the working
// reference's release, the reviewed omissions, and the frozen baseline of the
// 0.1.0 snapshot's known errors; each entry must still occur, or the check fails.
const ownerMaps = 'tests/javascript-owner-maps';
const packageOwner = 'package-level function';
const rebuild = (release) => `node scripts/javascript-owner-maps.mjs <briosa-js checkout> ${release}`;
const pageText = new Map();
const readPage = (file) => {
  if (!pageText.has(file)) pageText.set(file, require('node:fs').readFileSync(file, 'utf8').replace(/\r\n/g, '\n'));
  return pageText.get(file);
};
// Code languages read as TypeScript: TypeScript and JavaScript, with or without JSX.
const scriptLanguages = {ts: 'ts', typescript: 'ts', mts: 'ts', cts: 'ts', js: 'ts', javascript: 'ts', mjs: 'ts', cjs: 'ts', tsx: 'tsx', jsx: 'tsx'};
const ownerLabelLine = /^[ \t]*\/\/\s*Member of\b.*$/gm;
const reserved = new Set(['if', 'for', 'while', 'switch', 'catch', 'function', 'return', 'await', 'typeof', 'new', 'delete', 'void', 'super', 'import', 'export', 'with', 'yield']);

// The site's Markdown parser, as plugins/api-reference/content.mjs uses it.
let markdownParser;
const loadMarkdown = () => (markdownParser ??= (async () => {
  const [{unified}, {default: remarkParse}, {default: remarkGfm}] = await Promise.all([import('unified'), import('remark-parse'), import('remark-gfm')]);
  return unified().use(remarkParse).use(remarkGfm);
})());
const pageBlocks = new Map();
// Every code and HTML node of a page, with the page line of its first code line.
function codeBlocks(parser, text) {
  if (!pageBlocks.has(text)) {
    const found = [];
    const visit = (node) => {
      if (node.type === 'code' || node.type === 'html') {
        const fenced = node.type === 'code' && /^\s*(?:```|~~~)/.test(text.slice(node.position.start.offset, node.position.end.offset));
        found.push({type: node.type, lang: node.lang?.toLowerCase() ?? null, value: node.value, line: node.position.start.line + (fenced ? 1 : 0), offset: fenced ? text.indexOf('\n', node.position.start.offset) + 1 : node.position.start.offset});
      }
      for (const child of node.children ?? []) visit(child);
    };
    visit(parser.parse(text));
    pageBlocks.set(text, found);
  }
  return pageBlocks.get(text);
}

const blocks = new Map();
// The declarations of one TypeScript block, read in a closed world. Lines are block lines.
function readBlock(code, jsx = false) {
  const key = `${jsx}\0${code}`;
  if (blocks.has(key)) return blocks.get(key);
  const ts = require('typescript');
  const parse = (text) => ts.createSourceFile(jsx ? 'block.tsx' : 'block.ts', text, ts.ScriptTarget.Latest, true, jsx ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const lineAt = (position) => code.slice(0, position).split('\n').length;
  const found = {interfaces: [], functions: [], signatures: [], classes: [], unsupported: [], diagnostics: [], orphans: [], forms: new Set()};
  const nameOf = (name, file) => (!name ? undefined : ts.isComputedPropertyName(name) ? `[${name.expression.getText(file)}]` : name.text);
  const hasModifier = (node, kind) => Boolean(node.modifiers?.some((m) => m.kind === kind));

  // Bare member signatures: a root statement at the start of a line, with a
  // name, a parameter list, and a return type, that parses as an interface member.
  let prepared = code;
  const original = parse(code);
  for (const statement of original.statements) {
    const start = statement.getStart(original);
    if (start > 0 && code[start - 1] !== '\n') continue;
    const m = code.slice(start).match(/^(\[Symbol\.\w+\]|[A-Za-z_$][\w$]*)(?:<[^>()\n]*>)?\(/);
    if (!m || reserved.has(m[1])) continue;
    let close = start + m[0].length - 1;
    for (let depth = 0; close < code.length; close++) if (code[close] === '(') depth++; else if (code[close] === ')' && --depth === 0) break;
    if (!/^\s*:/.test(code.slice(close + 1))) continue;
    let end = close + 1;
    for (let depth = 0; end < code.length; end++) {
      const c = code[end];
      if ('(<[{'.includes(c)) depth++;
      else if (')]}'.includes(c) || (c === '>' && code[end - 1] !== '=')) depth--;
      else if (c === ';' && depth === 0) break;
    }
    const span = code.slice(start, end + 1);
    const probe = parse(`interface BareSignature {\n${span}\n}`);
    const [declaration] = probe.statements;
    if (probe.parseDiagnostics.length || probe.statements.length !== 1 || !ts.isInterfaceDeclaration(declaration) || declaration.members.length !== 1 || !ts.isMethodSignature(declaration.members[0])) continue;
    found.signatures.push({name: nameOf(declaration.members[0].name, probe), line: lineAt(start)});
    prepared = prepared.slice(0, start) + span.replace(/[^\n]/g, ' ') + prepared.slice(end + 1);
  }
  // Placeholders: `...` standing for a value before `,`, `)`, `]`, or `}`.
  const scanner = ts.createScanner(ts.ScriptTarget.Latest, true, jsx ? ts.LanguageVariant.JSX : ts.LanguageVariant.Standard, prepared);
  const dots = [];
  let previous;
  for (let token = scanner.scan(); token !== ts.SyntaxKind.EndOfFileToken; token = scanner.scan()) {
    if (previous !== undefined && [ts.SyntaxKind.CommaToken, ts.SyntaxKind.CloseParenToken, ts.SyntaxKind.CloseBracketToken, ts.SyntaxKind.CloseBraceToken].includes(token)) dots.push(previous);
    previous = token === ts.SyntaxKind.DotDotDotToken ? scanner.getTokenStart() : undefined;
  }
  for (const at of dots) prepared = `${prepared.slice(0, at)}___${prepared.slice(at + 3)}`;
  if (dots.length) found.forms.add('placeholder');
  if (found.signatures.length) found.forms.add('bare member signature');

  const file = parse(prepared);
  for (const d of file.parseDiagnostics) found.diagnostics.push({line: lineAt(d.start), message: ts.flattenDiagnosticMessageText(d.messageText, ' ')});
  const unsupported = (node, what, owner, method) => found.unsupported.push({line: lineAt(node.getStart(file)), what, owner, method});
  // Callables inside a declaration, for the message about an unsupported one.
  const callablesIn = (node) => {
    const names = [];
    const visit = (n) => {
      if ((ts.isFunctionDeclaration(n) || ts.isMethodSignature(n) || ts.isMethodDeclaration(n) || ts.isGetAccessorDeclaration(n) || ts.isSetAccessorDeclaration(n)) && n.name) names.push(nameOf(n.name, file));
      else if ((ts.isPropertySignature(n) || ts.isPropertyDeclaration(n) || ts.isPropertyAssignment(n) || ts.isVariableDeclaration(n)) && n.name && (n.type || n.initializer) && [n.type, n.initializer].some((x) => x && (ts.isFunctionTypeNode(x) || ts.isArrowFunction(x) || ts.isFunctionExpression(x)))) names.push(nameOf(n.name, file));
      ts.forEachChild(n, visit);
    };
    ts.forEachChild(node, visit);
    return names;
  };
  // A type may hold no callable: no method, call signature, or function type.
  const checkType = (node, owner) => {
    const visit = (n) => {
      if (ts.isMethodSignature(n)) unsupported(n, 'a method of an object type', owner, nameOf(n.name, file));
      else if (ts.isCallSignatureDeclaration(n) || ts.isConstructSignatureDeclaration(n)) unsupported(n, 'a call signature', owner);
      else if (ts.isFunctionTypeNode(n) || ts.isConstructorTypeNode(n)) unsupported(n, 'a function type', owner, ts.isPropertySignature(n.parent) ? nameOf(n.parent.name, file) : undefined);
      ts.forEachChild(n, visit);
    };
    visit(node);
  };
  // Statements and values may hold no declaration; a function value is allowed
  // only as an argument of a call in an example.
  const checkCode = (node, owner, callbacks) => {
    const visit = (n, argument) => {
      if (ts.isFunctionDeclaration(n)) return unsupported(n, 'a nested function', owner, nameOf(n.name, file));
      if (ts.isClassLike(n)) return unsupported(n, 'a class', nameOf(n.name, file) ?? owner, callablesIn(n)[0]);
      if (ts.isInterfaceDeclaration(n) || ts.isTypeAliasDeclaration(n) || ts.isModuleDeclaration(n) || ts.isEnumDeclaration(n)) return unsupported(n, 'a nested declaration', nameOf(n.name, file), callablesIn(n)[0]);
      if (ts.isMethodDeclaration(n) || ts.isGetAccessorDeclaration(n) || ts.isSetAccessorDeclaration(n)) return unsupported(n, 'a method of an object literal', owner, nameOf(n.name, file));
      if (ts.isArrowFunction(n) || ts.isFunctionExpression(n)) {
        if (!(callbacks && argument)) return unsupported(n, 'a function value', owner, ts.isVariableDeclaration(n.parent) || ts.isPropertyAssignment(n.parent) ? nameOf(n.parent.name, file) : nameOf(n.name, file));
        return ts.forEachChild(n, (child) => void visit(child, false));
      }
      if (ts.isTypeNode(n)) return checkType(n, owner);
      if (ts.isCallExpression(n) || ts.isNewExpression(n)) {
        visit(n.expression, argument);
        for (const a of n.arguments ?? []) visit(a, true);
        return;
      }
      ts.forEachChild(n, (child) => void visit(child, argument));
    };
    visit(node, false);
  };

  const labelled = new Set();
  for (const statement of file.statements) {
    const line = lineAt(statement.getStart(file));
    const before = found.unsupported.length;
    for (const p of statement.typeParameters ?? []) for (const t of [p.constraint, p.default]) if (t) checkType(t, nameOf(statement.name, file));
    const clean = (form) => { if (found.unsupported.length === before) found.forms.add(form); };
    if (ts.isInterfaceDeclaration(statement)) {
      const labels = (ts.getLeadingCommentRanges(prepared, statement.getFullStart()) ?? []).filter((c) => /^\/\/\s*Member of\b/.test(code.slice(c.pos, c.end)));
      for (const c of labels) labelled.add(c.pos);
      const members = statement.members.map((m) => ({
        name: nameOf(m.name, file),
        kind: ts.isMethodSignature(m) ? 'method' : ts.isPropertySignature(m) ? (m.type && (ts.isFunctionTypeNode(m.type) || ts.isConstructorTypeNode(m.type)) ? 'callable property' : 'property') : ts.isCallSignatureDeclaration(m) || ts.isConstructSignatureDeclaration(m) ? 'call signature' : ts.isGetAccessorDeclaration(m) ? 'getter' : ts.isSetAccessorDeclaration(m) ? 'setter' : 'index signature',
        line: lineAt(m.getStart(file)),
        position: m.getStart(file),
      }));
      for (const m of statement.members) {
        // A function-typed property's own type is allowed; the types inside it are checked.
        const own = ts.isPropertySignature(m) && m.type && (ts.isFunctionTypeNode(m.type) || ts.isConstructorTypeNode(m.type)) ? m.type : undefined;
        const types = own ? [...own.parameters.map((p) => p.type), own.type] : ts.isPropertySignature(m) ? [m.type] : [...(m.parameters ?? []).map((p) => p.type), m.type, ...(m.typeParameters ?? []).flatMap((p) => [p.constraint, p.default])];
        for (const t of types) if (t) checkType(t, statement.name.text);
      }
      found.interfaces.push({
        name: statement.name.text, exported: hasModifier(statement, ts.SyntaxKind.ExportKeyword), heritage: Boolean(statement.heritageClauses?.length), line,
        labels: labels.map((c) => ({text: code.slice(c.pos, c.end).trim(), line: lineAt(c.pos), position: c.pos})),
        members, start: labels[0]?.pos ?? statement.getStart(file), body: prepared.indexOf('{', statement.name.end), end: statement.end,
      });
    } else if (ts.isFunctionDeclaration(statement)) {
      if (!statement.name || statement.body) unsupported(statement, statement.body ? 'a function with a body' : 'a function without a name', undefined, nameOf(statement.name, file));
      else found.functions.push({name: statement.name.text, line});
      for (const t of [...statement.parameters.map((p) => p.type), statement.type]) if (t) checkType(t, nameOf(statement.name, file));
    } else if (ts.isTypeAliasDeclaration(statement)) {
      checkType(statement.type, statement.name.text);
      clean('data type');
    } else if (ts.isVariableStatement(statement)) {
      const exported = hasModifier(statement, ts.SyntaxKind.ExportKeyword) || hasModifier(statement, ts.SyntaxKind.DeclareKeyword);
      for (const d of statement.declarationList.declarations) {
        const name = nameOf(d.name, file);
        if (d.type) checkType(d.type, name);
        if (d.initializer) checkCode(d.initializer, name, !exported);
      }
      clean(exported ? 'value object' : 'example');
    } else if (ts.isClassDeclaration(statement)) {
      const members = statement.members.map((m) => ({name: nameOf(m.name, file), kind: ts.isPropertyDeclaration(m) ? 'property' : ts.isGetAccessorDeclaration(m) ? 'getter' : ts.isConstructorDeclaration(m) ? 'constructor' : ts.isSetAccessorDeclaration(m) ? 'setter' : 'method', line: lineAt(m.getStart(file))}));
      for (const m of statement.members) {
        if (ts.isPropertyDeclaration(m)) {
          if (m.type) checkType(m.type, nameOf(statement.name, file));
          if (m.initializer) checkCode(m.initializer, nameOf(statement.name, file), false);
        } else if (ts.isGetAccessorDeclaration(m) && m.type) checkType(m.type, nameOf(statement.name, file));
      }
      found.classes.push({name: nameOf(statement.name, file), exported: hasModifier(statement, ts.SyntaxKind.ExportKeyword), extends: Boolean(statement.heritageClauses?.some((h) => h.token === ts.SyntaxKind.ExtendsKeyword)), members, line});
    } else if (ts.isEnumDeclaration(statement)) {
      for (const m of statement.members) if (m.initializer) checkCode(m.initializer, statement.name.text, false);
      clean('enum');
    } else if (ts.isModuleDeclaration(statement)) {
      const names = callablesIn(statement);
      for (const name of names.length ? names : [undefined]) unsupported(statement, 'a namespace or module', nameOf(statement.name, file), name);
    } else if (ts.isImportDeclaration(statement)) {
      found.forms.add('example');
    } else if (ts.isExportDeclaration(statement) || ts.isExportAssignment(statement) || ts.isImportEqualsDeclaration(statement)) {
      unsupported(statement, 'an export or import assignment');
    } else {
      checkCode(statement, undefined, true);
      clean('example');
    }
  }
  // Every owner label must label a root interface.
  for (const m of code.matchAll(ownerLabelLine)) {
    const position = m.index + m[0].indexOf('//');
    if (!labelled.has(position)) found.orphans.push({label: m[0].trim(), line: lineAt(position)});
  }
  blocks.set(key, found);
  return found;
}

// The exact targets a sidebar lists in addition to its reference's default target.
function sidebarTargets(load, file) {
  const sidebar = Object.values(load(file))[0];
  if (!Array.isArray(sidebar)) throw new Error('it has no sidebar');
  return sidebar.filter((item) => typeof item === 'object' && item.type === 'category').map((item) => item.label?.match(/^SA (\S+)$/)?.[1]).filter(Boolean);
}

// Returns every ownership failure in the JavaScript references under siteRoot,
// what was checked, and how many blocks use each supported form. `overrides`
// replaces file text by repository path.
async function ownerCheck(siteRoot, overrides = {}) {
  const parser = await loadMarkdown();
  const {existsSync, readdirSync} = require('node:fs');
  const exists = (rel) => rel in overrides || existsSync(path.join(siteRoot, rel));
  const read = (rel) => (rel in overrides ? overrides[rel] : readPage(path.join(siteRoot, rel)));
  const json = (rel) => JSON.parse(read(rel));
  // The working sidebar is TypeScript; transpile it and its local imports.
  const modules = new Map();
  const loadSidebar = (rel) => {
    if (rel.endsWith('.json')) return json(rel);
    if (!modules.has(rel)) {
      const ts = require('typescript');
      const module = {exports: {}};
      modules.set(rel, module);
      const local = (specifier) => {
        if (!specifier.startsWith('.')) return require(specifier);
        const base = path.posix.join(path.posix.dirname(rel), specifier);
        return loadSidebar([base, `${base}.ts`].find((f) => f.endsWith('.ts') && exists(f)) ?? `${base}.ts`);
      };
      const {outputText} = ts.transpileModule(read(rel), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022}});
      new Function('require', 'module', 'exports', outputText)(local, module, module.exports);
    }
    const {exports} = modules.get(rel);
    return exports.default ?? exports;
  };
  const failures = [];
  const checked = [];
  const forms = {};
  const scopes = new Set();
  // A reference or target that cannot be checked is reported once, not again for each exception.
  const skipped = new Set();
  const targets = json('plugins/api-reference/targets.json');
  const working = json(`${ownerMaps}/working.json`).release;
  const scopeOf = ({reference, release, target}) => `${reference} (client ${release}, SA ${target})`;
  // Each reviewed omission is one method in one reference, release, and target.
  const omissions = new Map();
  for (const {owner, methods, scopes: where} of json(`${ownerMaps}/omissions.json`).omissions) {
    for (const scope of where) for (const method of methods) omissions.set(`${scopeOf(scope)}|${owner}|${method}`, {owner, method, scope, seen: false});
  }
  const baselineNames = new Set([...readdirSync(path.join(siteRoot, ownerMaps)), ...Object.keys(overrides).filter((k) => k.startsWith(`${ownerMaps}/`)).map((k) => k.slice(ownerMaps.length + 1))]);
  const baselines = [...baselineNames].filter((name) => /^baseline-[^/]+\.json$/.test(name)).sort().map((name) => ({file: `${ownerMaps}/${name}`, ...json(`${ownerMaps}/${name}`)}));
  const references = [
    {reference: 'api/javascript', release: working, defaultTarget: targets.workingDefault, sidebar: 'sidebarsJavascript.ts'},
    ...json('javascript_versions.json').map((release) => ({reference: `javascript_versioned_docs/version-${release}`, release, defaultTarget: targets.snapshots.javascript[release], sidebar: `javascript_versioned_sidebars/version-${release}-sidebars.json`})),
  ];
  for (const {reference, release, defaultTarget, sidebar} of references) {
    const tag = `v${release}`;
    const mapFile = `${ownerMaps}/${release}.json`;
    if (!exists(reference)) {
      skipped.add(reference);
      failures.push(`${reference}, which documents client ${release}, is missing.`);
      continue;
    }
    if (!exists(mapFile)) {
      skipped.add(reference);
      failures.push(`${reference} documents client ${release}, which has no pinned owner map at ${mapFile}. Build it with: ${rebuild(release)}`);
      continue;
    }
    const map = json(mapFile);
    const versions = Object.entries(map.targets ?? {}).filter(([, owners]) => owners.package?.version !== release);
    if (map.release !== release || map.source?.tag !== tag || versions.length) {
      const packages = versions.map(([target, owners]) => `SA ${target} from ${owners.package?.name}@${owners.package?.version}`).join(', ');
      skipped.add(reference);
      failures.push(`${mapFile} is the owner map of client ${map.release} (${map.source?.tag}${packages ? `; ${packages}` : ''}), not of client ${release} (${tag}), which ${reference} documents. Rebuild it with: ${rebuild(release)}`);
      continue;
    }
    let listed;
    try {
      listed = sidebarTargets(loadSidebar, sidebar);
    } catch (error) {
      skipped.add(reference);
      failures.push(`${sidebar}, the sidebar of ${reference}, cannot be read: ${error.message}`);
      continue;
    }
    const folders = readdirSync(path.join(siteRoot, reference), {withFileTypes: true}).filter((d) => d.isDirectory() && d.name.startsWith('sa-')).map((d) => d.name.slice(3));
    for (const target of listed.filter((t) => !folders.includes(t))) skipped.add(scopeOf({reference, release, target}));
    for (const target of listed) if (!folders.includes(target)) failures.push(`${sidebar} lists SA ${target} for ${reference}, but ${reference}/sa-${target} is missing.`);
    for (const target of folders) if (!listed.includes(target)) failures.push(`${reference}/sa-${target} is not listed in ${sidebar}.`);
    for (const target of [defaultTarget, ...folders.filter((t) => t !== defaultTarget).sort()]) {
      const folder = target === defaultTarget ? reference : `${reference}/sa-${target}`;
      const scope = scopeOf({reference, release, target});
      scopes.add(scope);
      const pinnedIn = `client ${release} (${tag}, SA ${target})`;
      const owners = map.targets[target];
      if (!owners) {
        failures.push(`${folder} documents SA ${target}, which ${mapFile} (${tag}) does not cover. Rebuild it with: ${rebuild(release)}`);
        continue;
      }
      const client = owners.client.interface;
      // Pinned methods by owner and name; one name may belong to several owners.
      const pinned = new Map();
      const byName = new Map();
      const pin = (owner, name, property) => {
        const p = {owner, name, property, text: property ? `${owner} (briosa.${property})` : owner === packageOwner ? 'a package-level function' : owner};
        pinned.set(`${owner}#${name}`, p);
        byName.set(name, [...(byName.get(name) ?? []), p]);
      };
      for (const [group, {property, methods}] of Object.entries(owners.groups)) for (const method of methods) pin(group, method, property);
      for (const method of owners.client.members) pin(client, method);
      for (const method of owners.functions) pin(packageOwner, method);
      const ownerNames = new Set([client, ...Object.keys(owners.groups)]);
      const pinsOf = (name) => byName.get(name)?.map((p) => p.text).join(' or ');
      // The supported form to use for a method, from its pinned owner.
      const advice = (name) => {
        const pins = byName.get(name);
        if (pins?.length !== 1) return `${ownerMaps}/README.md lists the supported forms.`;
        const [p] = pins;
        if (p.property) return `Declare it as "// Member of ${p.owner} (briosa.${p.property}.${name}(...))" above "interface ${p.owner} { ${name}(...): ...; }".`;
        if (p.owner === client) return `Declare it as the bare signature "${name}(...): ...;".`;
        return `Declare it as "export declare function ${name}(...): ...;".`;
      };
      // The frozen baseline of known errors for this scope, with each declaration's expected count.
      const known = new Map();
      for (const b of baselines.filter((b) => scopeOf(b) === scope)) {
        b.seen = true;
        for (const e of b.entries) known.set(`${e.page}|${e.method}|${e.pinned}|${e.documented}`, {...e, file: b.file, count: 0});
      }
      const covered = new Set();
      // A method already reported as misplaced or unsupported is not reported again as undocumented.
      const reported = new Set();
      const reportedOnce = (name) => { const pins = byName.get(name); if (pins?.length === 1) reported.add(`${pins[0].owner}#${name}`); };
      let declarations = 0;
      const overview = `${folder}/overview.md`;
      const stated = exists(overview) ? [...read(overview).matchAll(/\*\*(\d+\.\d+\.\d+)\*\* client reference/g)].map((m) => m[1]) : [];
      if (!stated.length) failures.push(`${overview} does not state "This is the **${release}** client reference", the release that ${reference} is checked against.`);
      for (const other of stated.filter((s) => s !== release)) failures.push(`${overview} states the **${other}** client reference, but ${reference} is checked against the owner map for client ${release}.`);
      const names = [...byName.keys()].filter((n) => /^[\w$]+$/.test(n));
      const namesPattern = names.length ? new RegExp(`\\b(${names.join('|')})\\s*\\(`) : /(?!)/;
      for (const page of readdirSync(path.join(siteRoot, folder)).filter((name) => name.endsWith('.md')).sort()) {
        const file = `${folder}/${page}`;
        const text = read(file);
        for (const [, other] of text.matchAll(/\bclient \*\*(\d+\.\d+\.\d+)\*\*/g)) {
          if (other !== release) failures.push(`${file} states client ${other}, but ${reference} is checked against the owner map for client ${release}.`);
        }
        const groupsDeclared = new Set();
        for (const node of codeBlocks(parser, text)) {
          const at = (line) => `${file}:${node.line + line - 1}`;
          const language = node.type === 'code' ? scriptLanguages[node.lang] : undefined;
          if (!language) {
            const named = node.value.match(namesPattern)?.[1];
            if (named) failures.push(`${at(1)}: a${node.type === 'html' ? 'n HTML block' : ` ${node.lang ?? 'plain'} code block`} names ${named}(...), but only TypeScript blocks are checked; declare it in a ts block. Its pinned owner in ${pinnedIn} is ${pinsOf(named)}.`);
            continue;
          }
          const block = readBlock(node.value, language === 'tsx');
          const used = new Set(block.forms);
          for (const d of block.diagnostics) failures.push(`${at(d.line)}: the TypeScript block does not parse: ${d.message}`);
          const report = (line, what, owner, method) => {
            if (method) reportedOnce(method);
            if (owner === method) owner = undefined;
            const pins = method && pinsOf(method);
            failures.push(method
              ? `${at(line)}: ${what} declares ${method}${owner ? ` on ${owner}` : ''}, which is not a supported declaration form${pins ? `; its pinned owner in ${pinnedIn} is ${pins}` : ''}. ${advice(method)}`
              : `${at(line)}: ${what}${owner ? ` on ${owner}` : ''} is not a supported declaration form. ${ownerMaps}/README.md lists the supported forms.`);
          };
          for (const u of block.unsupported) report(u.line, u.what, u.owner, u.method);
          // What the map pins the method that a group-owner label names to.
          const labelled = (label) => {
            const method = label.match(/\(briosa\.[\w$]+\.([\w$]+)\(\.\.\.\)\)$/)?.[1];
            return method ? `; ${byName.has(method) ? `the pinned owner of ${method} in ${pinnedIn} is ${pinsOf(method)}` : `${pinnedIn} pins no ${method}`}` : '';
          };
          for (const o of block.orphans) failures.push(`${at(o.line)}: the owner label "${o.label}" does not label an interface declaration${labelled(o.label)}.`);
          const found = [];
          for (const c of block.classes) {
            // An error class: exported, extending another class, with properties and getters only.
            const callable = c.members.filter((m) => m.kind !== 'property');
            const reason = !c.exported || !c.extends ? 'a class that does not export and extend another class' : ownerNames.has(c.name) ? 'a class named for an owner' : undefined;
            if (reason) for (const m of callable.length ? callable : [{line: c.line}]) report(m.line, reason, c.name, m.name);
            else for (const m of callable.filter((m) => m.kind !== 'getter' || byName.has(m.name))) report(m.line, `a ${m.kind} of a class`, c.name, m.name);
            if (!reason && !callable.some((m) => m.kind !== 'getter' || byName.has(m.name))) used.add('error class');
          }
          for (const i of block.interfaces) {
            const callable = i.members.filter((m) => m.kind !== 'property' && m.kind !== 'index signature');
            const methods = i.members.filter((m) => m.kind === 'method');
            const [label] = i.labels;
            if (!label) {
              if (owners.groups[i.name] && !i.exported) {
                // A group interface without its label.
                if (!methods.length) failures.push(`${at(i.line)}: interface ${i.name} declares no method, so it documents nothing that ${pinnedIn} pins to ${i.name}.`);
                for (const m of methods) found.push({line: m.line, name: m.name, documented: i.name, as: `a member of ${i.name}`, label: undefined});
                for (const m of i.members.filter((m) => m.kind !== 'method')) report(m.line, `a ${m.kind} of a group interface`, i.name, m.name);
              } else if (!i.exported || ownerNames.has(i.name)) {
                const reason = ownerNames.has(i.name) ? `interface ${i.name}, named for an owner,` : 'an interface that is not exported';
                for (const m of callable.length ? callable : [{line: i.line}]) report(m.line, reason, undefined, m.name);
              } else {
                // A data interface: exported, whose callable members are not pinned methods.
                const pinnedMembers = callable.filter((m) => m.kind === 'call signature' || byName.has(m.name));
                for (const m of pinnedMembers) report(m.line, `a ${m.kind} of interface ${i.name}`, undefined, m.name);
                if (!pinnedMembers.length) used.add('data interface');
              }
              continue;
            }
            if (i.labels.length > 1) {
              failures.push(`${at(i.labels[1].line)}: interface ${i.name} has ${i.labels.length} owner labels.`);
              continue;
            }
            const m = label.text.match(/^\/\/ Member of ([\w$]+) \(briosa\.([\w$]+)\.([\w$]+)\(\.\.\.\)\)$/);
            const declares = methods.length ? `declares ${[...new Set(methods.map((x) => x.name))].join(', ')}` : 'declares no method';
            if (!m) {
              // Only group methods carry a label; anything else labelled is unsupported.
              for (const x of callable.length ? callable : [{line: i.line}]) report(x.line, `interface ${i.name} with the owner label "${label.text}"`, undefined, x.name);
              continue;
            }
            if (i.exported || i.heritage) {
              for (const x of callable.length ? callable : [{line: i.line}]) report(x.line, `an ${i.exported ? 'exported' : 'extending'} group interface`, i.name, x.name);
              continue;
            }
            for (const x of i.members.filter((x) => x.kind !== 'method')) report(x.line, `a ${x.kind} of a group interface`, i.name, x.name);
            if (m[1] !== i.name) {
              failures.push(`${at(label.line)}: the owner label "${label.text}" names ${m[1]}, but labels interface ${i.name}, which ${declares}${labelled(label.text)}.`);
              continue;
            }
            // One group method per labelled interface; an overload set repeats that name.
            if (!methods.length || methods.some((x) => x.name !== m[3])) {
              failures.push(`${at(label.line)}: the owner label "${label.text}" names ${m[3]}, but interface ${i.name} ${declares}${labelled(label.text)}.`);
              continue;
            }
            used.add('group interface');
            for (const x of methods) found.push({line: x.line, name: x.name, documented: i.name, as: `a member of ${i.name}`, label: label.text});
          }
          for (const f of block.functions) found.push({line: f.line, name: f.name, documented: packageOwner, as: 'a package-level function'});
          if (block.functions.length) used.add('package-level function');
          for (const s of block.signatures) found.push({line: s.line, name: s.name, documented: client, as: `an unlabelled ${client} member signature`});
          for (const d of found) {
            declarations++;
            const correct = pinned.get(`${d.documented}#${d.name}`);
            if (correct) {
              covered.add(`${correct.owner}#${d.name}`);
              if (!correct.property || d.documented === packageOwner) continue;
              groupsDeclared.add(correct.owner);
              const expected = `// Member of ${correct.owner} (briosa.${correct.property}.${d.name}(...))`;
              if (!d.label) failures.push(`${at(d.line)}: ${d.name} is documented as a member of ${d.documented} without an owner label; its pinned owner in ${pinnedIn} is ${correct.text}. Label it "${expected}".`);
              else if (d.label !== expected) failures.push(`${at(d.line)}: ${d.name} is documented as a member of ${d.documented} with the owner label "${d.label}"; its pinned owner in ${pinnedIn} is ${correct.text}, labelled "${expected}".`);
              continue;
            }
            const pins = byName.get(d.name);
            if (!pins) {
              failures.push(`${at(d.line)}: ${d.name} is documented as ${d.as}, but ${mapFile} (${tag}, SA ${target}) has no such method.`);
              continue;
            }
            // A misplaced declaration stands in for its only pinned owner, so it is reported once.
            reportedOnce(d.name);
            const entry = pins.length === 1 && known.get(`${page}|${d.name}|${pins[0].owner}|${d.documented}`);
            if (entry) entry.count++;
            else failures.push(`${at(d.line)}: ${d.name} is documented as ${d.as}; its pinned owner in ${pinnedIn} is ${pinsOf(d.name)}.`);
          }
          for (const form of used) forms[form] = (forms[form] ?? 0) + 1;
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
      for (const e of known.values()) {
        const text = byName.get(e.method)?.find((p) => p.owner === e.pinned)?.text ?? e.pinned;
        const as = e.documented === packageOwner ? 'a package-level function' : e.documented === client ? `a ${client} member` : `a member of ${e.documented}`;
        if (e.count === e.occurrences) continue;
        if (!e.count) failures.push(`${e.file} records ${e.method} on ${folder}/${e.page} as documented as ${as} (pinned owner ${e.pinned}), but the page no longer declares it that way. Remove the entry.`);
        else failures.push(`${folder}/${e.page}: ${e.method} is documented as ${as} ${e.count} times; its pinned owner in ${pinnedIn} is ${text}, and ${e.file} records ${e.occurrences}.`);
      }
      for (const [key, p] of pinned) {
        const omission = omissions.get(`${scope}|${p.owner}|${p.name}`);
        if (omission) omission.seen = true;
        if (covered.has(key)) {
          if (omission) failures.push(`${ownerMaps}/omissions.json records ${p.name} (${p.text}) as undocumented in ${scope}, but a page in ${folder} now declares it. Remove that scope from the entry.`);
        } else if (!omission && !reported.has(key)) {
          failures.push(`${mapFile} (${tag}, SA ${target}) pins ${p.name} to ${p.text}, but no page in ${folder} has a documented declaration of it.`);
        }
      }
      checked.push({folder, release, tag, commit: map.source.commit, target, declarations});
    }
  }
  for (const o of omissions.values()) {
    if (o.seen || skipped.has(o.scope.reference) || skipped.has(scopeOf(o.scope))) continue;
    const scope = scopeOf(o.scope);
    failures.push(scopes.has(scope)
      ? `${ownerMaps}/omissions.json records ${o.method} as an undocumented ${o.owner} in ${scope}, but ${ownerMaps}/${o.scope.release}.json does not pin it to ${o.owner} for SA ${o.scope.target}.`
      : `${ownerMaps}/omissions.json records ${o.method} as undocumented in ${scope}, which is not a reference, release, and target that the check covers. Remove or update that scope.`);
  }
  for (const b of baselines) if (!b.seen && !skipped.has(b.reference) && !skipped.has(scopeOf(b))) failures.push(`${b.file} records known errors in ${scopeOf(b)}, which is not a reference, release, and target that the check covers.`);
  return {failures, checked, forms};
}


test('JavaScript methods are documented under the owner their pinned client release gives them', async (t) => {
  const {failures, checked, forms} = await ownerCheck(root);
  for (const c of checked) t.diagnostic(`${c.folder}: client ${c.release}, SA ${c.target}, map from ${c.tag} (${c.commit.slice(0, 7)}), ${c.declarations} declarations`);
  for (const [form, count] of Object.entries(forms).sort()) t.diagnostic(`${count} blocks use the supported form "${form}"`);
  assert.equal(failures.length, 0, failures.join('\n'));
});

test('the JavaScript owner check names the method, both owners, and the file', async () => {
  const fs = require('node:fs');
  const parser = await loadMarkdown();
  const folder = 'api/javascript';
  const data = (name) => JSON.parse(readPage(path.join(root, ownerMaps, name)));
  const targets = JSON.parse(readPage(path.join(root, 'plugins/api-reference/targets.json')));
  const {release: working} = data('working.json');
  const map = data(`${working}.json`);
  const target = targets.workingDefault;
  const {groups} = map.targets[target];
  const pinnedIn = `client ${working} (${map.source.tag}, SA ${target})`;
  const failuresWith = async (overrides) => (await ownerCheck(root, overrides)).failures;
  const lineAt = (text, offset) => text.slice(0, offset).split('\n').length;

  // The first labelled group method in the working reference, found by parsing, and another real group.
  let file, text, node, declaration;
  for (const page of fs.readdirSync(path.join(root, folder)).filter((name) => name.endsWith('.md')).sort()) {
    const pageText = readPage(path.join(root, folder, page));
    for (const n of codeBlocks(parser, pageText)) {
      const i = scriptLanguages[n.lang] && readBlock(n.value).interfaces.find((x) => x.labels.length === 1 && groups[x.name]);
      if (i) [file, text, node, declaration] = [`${folder}/${page}`, pageText, n, i];
      if (declaration) break;
    }
    if (declaration) break;
  }
  const group = declaration.name;
  const member = declaration.members.find((m) => m.kind === 'method');
  const method = member.name;
  const {property} = groups[group];
  const other = Object.keys(groups).find((g) => g !== group);
  const otherProperty = groups[other].property;
  const pinned = `${group} (briosa.${property})`;
  const label = `// Member of ${group} (briosa.${property}.${method}(...))`;
  const advice = `Declare it as "${label}" above "interface ${group} { ${method}(...): ...; }".`;
  // The declaration's span on the page, from its label to its closing brace, whatever its layout.
  const start = node.offset + declaration.start;
  const body = node.offset + declaration.body;
  const end = node.offset + declaration.end;
  const braces = text.slice(body, end);
  // Replaces the declaration's label and interface line, keeping its members; returns the page and the member's line.
  const redeclare = (header, page = text) => {
    const changed = page.slice(0, start) + header + braces + page.slice(end);
    return {changed, line: lineAt(changed, start + header.length + node.offset + member.position - body)};
  };
  // Appends a block in any fence; returns the page and the line of the block's first line.
  const append = (code, fence = 'ts') => ({changed: `${text}\n\`\`\`${fence}\n${code}\n\`\`\`\n`, line: lineAt(text, text.length) + 2});
  const misplaced = (line, owner) => `${file}:${line}: ${method} is documented as a member of ${owner}; its pinned owner in ${pinnedIn} is ${pinned}.`;
  const unsupported = (line, what) => `${file}:${line}: ${what} declares ${method}, which is not a supported declaration form; its pinned owner in ${pinnedIn} is ${pinned}. ${advice}`;

  // The defect in https://github.com/spatialanalyzer/briosa-docs/issues/137: a group method declared on the client.
  let m = redeclare('// Member of BriosaClient\ninterface BriosaClient ');
  assert.deepEqual(await failuresWith({[file]: m.changed}), [unsupported(m.line, 'interface BriosaClient with the owner label "// Member of BriosaClient"')]);
  // A method moved consistently to another real group: label, interface, and calling sentence agree.
  m = redeclare(`// Member of ${other} (briosa.${otherProperty}.${method}(...))\ninterface ${other} `);
  const intro = m.changed.indexOf('\n## ');
  assert.deepEqual(await failuresWith({[file]: `${m.changed.slice(0, intro)}\nCall \`${other}\` methods through \`briosa.${otherProperty}.<method>(...)\`.\n${m.changed.slice(intro)}`}), [misplaced(m.line + 2, other)]);
  // A removed owner label.
  m = redeclare(`interface ${group} `);
  assert.deepEqual(await failuresWith({[file]: m.changed}), [`${file}:${m.line}: ${method} is documented as a member of ${group} without an owner label; its pinned owner in ${pinnedIn} is ${pinned}. Label it "${label}".`]);
  // An overload set of the labelled method is one group method.
  const overload = text.slice(0, body + 1) + `\n  ${method}(): Promise<void>;` + text.slice(body + 1);
  assert.deepEqual(await failuresWith({[file]: overload}), []);

  // A second, misplaced declaration in any TypeScript fence, with or without metadata.
  const robot = `// Member of ${other} (briosa.${otherProperty}.${method}(...))\ninterface ${other} {\n  ${method}(): void;\n}`;
  for (const fence of ['typescript', 'tsx', 'ts title="example.ts"', 'TS']) {
    m = append(robot, fence);
    assert.deepEqual(await failuresWith({[file]: m.changed}), [misplaced(m.line + 2, other)], fence);
  }
  m = append(`interface ${group} {\n  ${method}(): void;\n}`, 'typescript');
  assert.deepEqual(await failuresWith({[file]: m.changed}), [`${file}:${m.line + 1}: ${method} is documented as a member of ${group} without an owner label; its pinned owner in ${pinnedIn} is ${pinned}. Label it "${label}".`]);
  m = append(robot, 'text');
  assert.deepEqual(await failuresWith({[file]: m.changed}), [`${file}:${m.line}: a text code block names ${method}(...), but only TypeScript blocks are checked; declare it in a ts block. Its pinned owner in ${pinnedIn} is ${pinned}.`]);
  // Misplaced declarations in forms the supported list does not name.
  const forms = [
    [`declare class ${other} { ${method}(): void; }`, 0, `a class that does not export and extend another class declares ${method} on ${other}`],
    [`type ${other} = { ${method}(): void } & {};`, 0, `a method of an object type declares ${method} on ${other}`],
    [`export type ${other} = { ${method}(): void } | { readonly kind: 'x' };`, 0, `a method of an object type declares ${method} on ${other}`],
    [`declare namespace ${other} {\n  export function ${method}(): Promise<void>;\n}`, 0, `a namespace or module declares ${method} on ${other}`],
    [`export const ${method} = (): Promise<void> => Promise.resolve();`, 0, `a function value declares ${method}`],
    [`export interface ${other}Helpers {\n  readonly operations: { ${method}(): void };\n}`, 1, `a method of an object type declares ${method} on ${other}Helpers`],
    [`{\n  interface ${other} { ${method}(): void; }\n}`, 1, `a nested declaration declares ${method} on ${other}`],
    [`const helper = { ${method}() {} };`, 0, `a method of an object literal declares ${method} on helper`],
    [`export interface ${other}Accessors {\n  get ${method}(): Promise<void>;\n}`, 1, `a getter of interface ${other}Accessors declares ${method}`],
  ];
  for (const [code, offset, what] of forms) {
    m = append(code);
    assert.deepEqual(await failuresWith({[file]: m.changed}), [`${file}:${m.line + offset}: ${what}, which is not a supported declaration form; its pinned owner in ${pinnedIn} is ${pinned}. ${advice}`], code);
  }
  m = append(`export type ${method[0].toUpperCase()}${method.slice(1)} = { (): Promise<void> };`);
  assert.deepEqual(await failuresWith({[file]: m.changed}), [`${file}:${m.line}: a call signature on ${method[0].toUpperCase()}${method.slice(1)} is not a supported declaration form. ${ownerMaps}/README.md lists the supported forms.`]);
  m = append('export interface OperationHandlers {\n  readonly [name: string]: () => Promise<void>;\n}');
  assert.deepEqual(await failuresWith({[file]: m.changed}), [`${file}:${m.line + 1}: a function type on OperationHandlers is not a supported declaration form. ${ownerMaps}/README.md lists the supported forms.`]);
  // A block that does not parse fails with the compiler's message; a keyword as an object key is fine.
  for (const [code, message] of [[`interfce ${other} { ${method}(): void; }`, "Unknown keyword or identifier. Did you mean 'interface'?"], [`interface ${other} {\n  ${method}(): void;`, "'}' expected."], [`/* note\ninterface ${other} { ${method}(): void; }`, "'*/' expected."]]) {
    m = append(code);
    const failures = await failuresWith({[file]: m.changed});
    assert.ok(failures.some((f) => f.startsWith(`${file}:`) && f.endsWith(`: the TypeScript block does not parse: ${message}`)), failures.join('\n'));
  }
  assert.deepEqual(await failuresWith({[file]: append('const config = { interface: "public" };').changed}), []);

  // Owner labels that label no method, and a client-owner interface.
  m = append('// Member of BriosaClient\ninterface BriosaClient {\n}');
  assert.deepEqual(await failuresWith({[file]: m.changed}), [`${file}:${m.line + 1}: interface BriosaClient with the owner label "// Member of BriosaClient" is not a supported declaration form. ${ownerMaps}/README.md lists the supported forms.`]);
  m = append(`${label}\ninterface ${group} {\n}`);
  assert.deepEqual(await failuresWith({[file]: m.changed}), [`${file}:${m.line}: the owner label "${label}" names ${method}, but interface ${group} declares no method; the pinned owner of ${method} in ${pinnedIn} is ${pinned}.`]);
  m = append('interface BriosaClient {}');
  assert.deepEqual(await failuresWith({[file]: m.changed}), [`${file}:${m.line}: interface BriosaClient, named for an owner, is not a supported declaration form. ${ownerMaps}/README.md lists the supported forms.`]);
  m = append(`${label}\n\nexport declare function ${method}(): void;`);
  assert.deepEqual(await failuresWith({[file]: m.changed}), [
    `${file}:${m.line}: the owner label "${label}" does not label an interface declaration; the pinned owner of ${method} in ${pinnedIn} is ${pinned}.`,
    `${file}:${m.line + 2}: ${method} is documented as a package-level function; its pinned owner in ${pinnedIn} is ${pinned}.`,
  ]);

  // A documented method that the pinned map does not have.
  const added = `${method}Twice`;
  const inserted = `// Member of ${group} (briosa.${property}.${added}(...))\ninterface ${group} {\n  ${added}(): Promise<void>;\n}\n\n`;
  const withAdded = text.slice(0, start) + inserted + text.slice(start);
  assert.deepEqual(await failuresWith({[file]: withAdded}), [`${file}:${lineAt(withAdded, start) + 2}: ${added} is documented as a member of ${group}, but ${ownerMaps}/${working}.json (${map.source.tag}, SA ${target}) has no such method.`]);
  // A pinned method that no page declares: its section is removed, or the map gains a method.
  const sectionStart = text.lastIndexOf('\n## ', start);
  const section = text.slice(sectionStart, text.indexOf('\n## ', sectionStart + 1));
  const undeclared = (name, where) => `${ownerMaps}/${working}.json (${map.source.tag}, SA ${target}) pins ${name} to ${pinned}, but no page in ${where} has a documented declaration of it.`;
  assert.deepEqual(await failuresWith({[file]: text.replace(section, '')}), [undeclared(method, folder)]);
  const extended = structuredClone(map);
  extended.targets[target].groups[group].methods.push(added);
  const missing = await failuresWith({[`${ownerMaps}/${working}.json`]: JSON.stringify(extended)});
  assert.ok(missing.includes(undeclared(added, folder)), missing.join('\n'));
  assert.ok(missing.every((f) => f.startsWith(`${ownerMaps}/${working}.json (`) && f.includes(` pins ${added} to ${pinned}, but no page in `)), missing.join('\n'));

  // Another release's map in place of the right one, and an overview that names another release.
  const [release, previous] = JSON.parse(readPage(path.join(root, 'javascript_versions.json'))).filter((r) => r !== working);
  if (previous) {
    assert.deepEqual((await failuresWith({[`${ownerMaps}/${release}.json`]: readPage(path.join(root, ownerMaps, `${previous}.json`))})).filter((f) => f.startsWith(`${ownerMaps}/${release}.json is`)), [
      `${ownerMaps}/${release}.json is the owner map of client ${previous} (v${previous}; ${Object.entries(data(`${previous}.json`).targets).map(([t, o]) => `SA ${t} from ${o.package.name}@${previous}`).join(', ')}), not of client ${release} (v${release}), which javascript_versioned_docs/version-${release} documents. Rebuild it with: ${rebuild(release)}`,
    ]);
  }
  const overview = `${folder}/overview.md`;
  assert.deepEqual(await failuresWith({[overview]: readPage(path.join(root, overview)).replace(`This is the **${working}** client reference`, 'This is the **9.9.9** client reference')}), [
    `${overview} states the **9.9.9** client reference, but ${folder} is checked against the owner map for client ${working}.`,
  ]);

  // A reviewed omission retires once the method is documented in that scope.
  const omission = data('omissions.json').omissions.find((o) => o.owner === packageOwner && o.scopes.some((s) => s.reference === folder && s.release === working && s.target === target));
  if (omission) {
    const lifecycle = `${folder}/lifecycle.md`;
    const [name] = omission.methods;
    assert.deepEqual(await failuresWith({[lifecycle]: `${readPage(path.join(root, lifecycle))}\n\`\`\`ts\nexport declare function ${name}(client: BriosaClient): unknown;\n\`\`\`\n`}), [
      `${ownerMaps}/omissions.json records ${name} (a package-level function) as undocumented in ${folder} (client ${working}, SA ${target}), but a page in ${folder} now declares it. Remove that scope from the entry.`,
    ]);
  }
  // A known error in the frozen baseline may not occur more often than recorded, and only a
  // root-level function matches its package-level entry.
  const baselineName = fs.readdirSync(path.join(root, ownerMaps)).find((name) => /^baseline-.*\.json$/.test(name));
  if (baselineName) {
    const baseline = data(baselineName);
    const entry = baseline.entries.find((e) => e.documented === packageOwner);
    const where = baseline.target === targets.snapshots.javascript[baseline.release] ? baseline.reference : `${baseline.reference}/sa-${baseline.target}`;
    const known = `${where}/${entry.page}`;
    const knownText = readPage(path.join(root, known));
    const owner = data(`${baseline.release}.json`).targets[baseline.target].groups[entry.pinned];
    const knownIn = `client ${baseline.release} (v${baseline.release}, SA ${baseline.target})`;
    assert.deepEqual(await failuresWith({[known]: `${knownText}\n\`\`\`ts\nfunction ${entry.method}(): Promise<void>;\n\`\`\`\n`}), [
      `${known}: ${entry.method} is documented as a package-level function ${entry.occurrences + 1} times; its pinned owner in ${knownIn} is ${entry.pinned} (briosa.${owner.property}), and ${ownerMaps}/${baselineName} records ${entry.occurrences}.`,
    ]);
    const declarationAt = knownText.search(new RegExp(`^function ${entry.method}\\(`, 'm'));
    const declarationEnd = knownText.indexOf(';', declarationAt) + 1;
    const namespaced = `${knownText.slice(0, declarationAt)}declare namespace ${other} { export ${knownText.slice(declarationAt, declarationEnd)} }${knownText.slice(declarationEnd)}`;
    assert.deepEqual(await failuresWith({[known]: namespaced}), [
      `${known}:${lineAt(namespaced, declarationAt)}: a namespace or module declares ${entry.method} on ${other}, which is not a supported declaration form; its pinned owner in ${knownIn} is ${entry.pinned} (briosa.${owner.property}). Declare it as "// Member of ${entry.pinned} (briosa.${owner.property}.${entry.method}(...))" above "interface ${entry.pinned} { ${entry.method}(...): ...; }".`,
      `${ownerMaps}/${baselineName} records ${entry.method} on ${known} as documented as a package-level function (pinned owner ${entry.pinned}), but the page no longer declares it that way. Remove the entry.`,
    ]);
  }
});

// A minimal site: one release, both as the working reference and as a
// snapshot, documenting `owners` for SA 2026 and SA 2024.
async function ownerFixture(owners, pages, {omissions = [], sidebarTargets = ['2024.1.0508.5']} = {}) {
  const fixture = await mkdtemp(path.join(os.tmpdir(), 'briosa-javascript-owners-'));
  const targets = ['2026.1.0529.7', '2024.1.0508.5'];
  const sidebar = JSON.stringify({javascriptSidebar: ['overview', ...sidebarTargets.map((t) => ({type: 'category', label: `SA ${t}`, items: [`sa-${t}/overview`]})), 'lifecycle']});
  const map = {release: '9.0.0', source: {repository: 'https://github.com/spatialanalyzer/briosa-js', tag: 'v9.0.0', commit: '0'.repeat(40)}, targets: Object.fromEntries(targets.map((t) => [t, {package: {name: `@spatialanalyzer/briosa-${t}`, version: '9.0.0', integrity: 'sha512-'}, ...owners}]))};
  const files = {
    'plugins/api-reference/targets.json': JSON.stringify({workingDefault: targets[0], snapshots: {javascript: {'9.0.0': targets[0]}}}),
    'javascript_versions.json': '["9.0.0"]',
    'sidebarsJavascript.ts': `const sidebars = ${sidebar};\nexport default sidebars;\n`,
    'javascript_versioned_sidebars/version-9.0.0-sidebars.json': sidebar,
    [`${ownerMaps}/working.json`]: JSON.stringify({release: '9.0.0'}),
    [`${ownerMaps}/omissions.json`]: JSON.stringify({omissions}),
    [`${ownerMaps}/9.0.0.json`]: JSON.stringify(map),
  };
  for (const reference of ['api/javascript', 'javascript_versioned_docs/version-9.0.0']) {
    for (const [i, target] of targets.entries()) {
      const folder = i ? `${reference}/sa-${target}` : reference;
      files[`${folder}/overview.md`] = `# Overview\n\nThis is the **9.0.0** client reference for **SA ${target}**.\n`;
      for (const [name, text] of Object.entries(pages)) files[`${folder}/${name}`] = text;
    }
  }
  for (const [file, text] of Object.entries(files)) {
    await mkdir(path.dirname(path.join(fixture, file)), {recursive: true});
    await writeFile(path.join(fixture, file), text);
  }
  return fixture;
}
const groupPage = (title, group, property, methods, member = (m) => `  ${m}(\n    collection: CollectionName,\n  ): Promise<void>;`) => `# ${title}\n\nThis reference covers client **9.0.0**. Call \`${group}\` methods through \`briosa.${property}.<method>(...)\`.\n\n${methods.map((m) => `## ${m}\n\n\`\`\`ts\n// Member of ${group} (briosa.${property}.${m}(...))\ninterface ${group} {\n${member(m)}\n}\n\`\`\`\n`).join('\n')}`;
const lifecyclePage = '# Lifecycle\n\n```ts\nexport declare function createBriosaClient(): BriosaClient;\n\nstart(): Promise<void>;\n\nrestart(): Promise<void>;\n```\n';

test('a client release that adds an operation group or a client member needs only its owner map', async () => {
  const owners = {
    client: {interface: 'BriosaClient', members: ['restart', 'start']},
    groups: {MeshOperations: {property: 'meshOperations', methods: ['smoothMesh']}},
    functions: ['createBriosaClient'],
  };
  const pages = {'lifecycle.md': lifecyclePage, 'mesh-operations.md': groupPage('Mesh Operations', 'MeshOperations', 'meshOperations', ['smoothMesh'])};
  const fixtures = [];
  try {
    const fixture = await ownerFixture(owners, pages);
    fixtures.push(fixture);
    const {failures, checked} = await ownerCheck(fixture);
    assert.deepEqual(failures, []);
    assert.deepEqual(checked.map((c) => [c.folder, c.declarations]), [
      ['api/javascript', 4], ['api/javascript/sa-2024.1.0508.5', 4],
      ['javascript_versioned_docs/version-9.0.0', 4], ['javascript_versioned_docs/version-9.0.0/sa-2024.1.0508.5', 4],
    ]);
    // The layout of a supported declaration does not matter.
    for (const member of [(m) => `      ${m}(collection: CollectionName): Promise<void>;`, (m) => `${m}(collection: CollectionName): Promise<void>;`]) {
      const layout = {'api/javascript/mesh-operations.md': groupPage('Mesh Operations', 'MeshOperations', 'meshOperations', ['smoothMesh'], member)};
      assert.deepEqual((await ownerCheck(fixture, layout)).failures, []);
    }
    const oneLine = {'api/javascript/mesh-operations.md': '# Mesh Operations\n\nCall `MeshOperations` methods through `briosa.meshOperations.<method>(...)`.\n\n## smoothMesh\n\n```ts\n// Member of MeshOperations (briosa.meshOperations.smoothMesh(...))\ninterface MeshOperations { smoothMesh(mesh: CollectionObjectName): Promise<void>; }\n```\n'};
    assert.deepEqual((await ownerCheck(fixture, oneLine)).failures, []);
    const misplaced = {'api/javascript/mesh-operations.md': `${pages['mesh-operations.md']}\n\`\`\`ts\n// Member of BriosaClient\ninterface BriosaClient {\n        smoothMesh(): Promise<void>;\n}\n\`\`\`\n`};
    assert.deepEqual((await ownerCheck(fixture, misplaced)).failures, [
      'api/javascript/mesh-operations.md:19: interface BriosaClient with the owner label "// Member of BriosaClient" declares smoothMesh, which is not a supported declaration form; its pinned owner in client 9.0.0 (v9.0.0, SA 2026.1.0529.7) is MeshOperations (briosa.meshOperations). Declare it as "// Member of MeshOperations (briosa.meshOperations.smoothMesh(...))" above "interface MeshOperations { smoothMesh(...): ...; }".',
    ]);
    // A target that the sidebar lists cannot drop out of the check.
    await rm(path.join(fixture, 'api/javascript/sa-2024.1.0508.5'), {recursive: true});
    assert.deepEqual((await ownerCheck(fixture)).failures, ['sidebarsJavascript.ts lists SA 2024.1.0508.5 for api/javascript, but api/javascript/sa-2024.1.0508.5 is missing.']);
    // An omission must be reviewed for each scope, and is retired when the method is documented.
    const scope = (reference, target) => ({reference, release: '9.0.0', target});
    const omissions = [{owner: packageOwner, methods: ['createMeshOperations'], scopes: [scope('api/javascript', '2026.1.0529.7')]}];
    const withFactory = {...owners, functions: ['createBriosaClient', 'createMeshOperations']};
    const omitted = await ownerFixture(withFactory, pages, {omissions});
    fixtures.push(omitted);
    const undeclared = (folder, target) => `${ownerMaps}/9.0.0.json (v9.0.0, SA ${target}) pins createMeshOperations to a package-level function, but no page in ${folder} has a documented declaration of it.`;
    assert.deepEqual((await ownerCheck(omitted)).failures, [
      undeclared('api/javascript/sa-2024.1.0508.5', '2024.1.0508.5'),
      undeclared('javascript_versioned_docs/version-9.0.0', '2026.1.0529.7'),
      undeclared('javascript_versioned_docs/version-9.0.0/sa-2024.1.0508.5', '2024.1.0508.5'),
    ]);
    const documented = {'api/javascript/lifecycle.md': `${lifecyclePage}\n\`\`\`ts\nexport declare function createMeshOperations(client: BriosaClient): MeshOperations;\n\`\`\`\n`};
    assert.ok((await ownerCheck(omitted, documented)).failures.includes(`${ownerMaps}/omissions.json records createMeshOperations (a package-level function) as undocumented in api/javascript (client 9.0.0, SA 2026.1.0529.7), but a page in api/javascript now declares it. Remove that scope from the entry.`));
    // An omitted factory declared in an unsupported form still fails, and does not retire its omission.
    const hidden = {'api/javascript/lifecycle.md': `${lifecyclePage}\n\`\`\`ts\ndeclare class BriosaClient {\n  createMeshOperations(): MeshOperations;\n}\n\`\`\`\n`};
    assert.deepEqual((await ownerCheck(omitted, hidden)).failures.filter((f) => f.startsWith('api/javascript/lifecycle.md')), [
      'api/javascript/lifecycle.md:13: a class that does not export and extend another class declares createMeshOperations on BriosaClient, which is not a supported declaration form; its pinned owner in client 9.0.0 (v9.0.0, SA 2026.1.0529.7) is a package-level function. Declare it as "export declare function createMeshOperations(...): ...;".',
    ]);
    // An omission for a release that no reference documents is reported, not ignored.
    const stale = {[`${ownerMaps}/omissions.json`]: JSON.stringify({omissions: [{owner: 'BriosaClient', methods: ['restart'], scopes: [scope('api/javascript', '2026.1.0529.7'), {reference: 'api/javascript', release: '8.0.0', target: '2026.1.0529.7'}]}]})};
    assert.deepEqual((await ownerCheck(fixture, stale)).failures.filter((f) => f.startsWith(`${ownerMaps}/omissions.json`)), [
      `${ownerMaps}/omissions.json records restart (BriosaClient) as undocumented in api/javascript (client 9.0.0, SA 2026.1.0529.7), but a page in api/javascript now declares it. Remove that scope from the entry.`,
      `${ownerMaps}/omissions.json records restart as undocumented in api/javascript (client 8.0.0, SA 2026.1.0529.7), which is not a reference, release, and target that the check covers. Remove or update that scope.`,
    ]);
  } finally {
    // mkdtemp owns these unique fixtures.
    for (const fixture of fixtures) await rm(fixture, {recursive: true, force: true});
  }
});

test('two owners may share a method name', async () => {
  const owners = {
    client: {interface: 'BriosaClient', members: ['restart', 'start']},
    groups: {
      GdtOperations: {property: 'gdtOperations', methods: ['makeFeatureChecks']},
      MeshReviewOperations: {property: 'meshReviewOperations', methods: ['makeFeatureChecks']},
    },
    functions: ['createBriosaClient'],
  };
  const pages = {
    'lifecycle.md': lifecyclePage,
    'gdt-construction.md': groupPage('GDT Construction', 'GdtOperations', 'gdtOperations', ['makeFeatureChecks']),
    'mesh-review-operations.md': groupPage('Mesh Review Operations', 'MeshReviewOperations', 'meshReviewOperations', ['makeFeatureChecks']),
  };
  const fixture = await ownerFixture(owners, pages);
  try {
    assert.deepEqual((await ownerCheck(fixture)).failures, []);
    const removed = {};
    for (const folder of ['api/javascript', 'api/javascript/sa-2024.1.0508.5']) removed[`${folder}/gdt-construction.md`] = '# GDT Construction\n';
    assert.deepEqual((await ownerCheck(fixture, removed)).failures, [
      `${ownerMaps}/9.0.0.json (v9.0.0, SA 2026.1.0529.7) pins makeFeatureChecks to GdtOperations (briosa.gdtOperations), but no page in api/javascript has a documented declaration of it.`,
      `${ownerMaps}/9.0.0.json (v9.0.0, SA 2024.1.0508.5) pins makeFeatureChecks to GdtOperations (briosa.gdtOperations), but no page in api/javascript/sa-2024.1.0508.5 has a documented declaration of it.`,
    ]);
    const robot = {'api/javascript/gdt-construction.md': groupPage('GDT Construction', 'RobotOperations', 'robotOperations', ['makeFeatureChecks'])};
    assert.deepEqual((await ownerCheck(fixture, robot)).failures, [
      'api/javascript/gdt-construction.md:10: makeFeatureChecks is documented as a member of RobotOperations; its pinned owner in client 9.0.0 (v9.0.0, SA 2026.1.0529.7) is GdtOperations (briosa.gdtOperations) or MeshReviewOperations (briosa.meshReviewOperations).',
      `${ownerMaps}/9.0.0.json (v9.0.0, SA 2026.1.0529.7) pins makeFeatureChecks to GdtOperations (briosa.gdtOperations), but no page in api/javascript has a documented declaration of it.`,
    ]);
  } finally {
    // mkdtemp owns this unique fixture.
    await rm(fixture, {recursive: true, force: true});
  }
});
