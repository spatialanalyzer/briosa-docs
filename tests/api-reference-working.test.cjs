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
