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
