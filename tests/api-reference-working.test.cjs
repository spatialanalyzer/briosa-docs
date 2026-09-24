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
        const page = pages.find((p) => p.path === `/api/${family}/sa-${target}/preview/analysis-operations/angle-between-line-and-plane`);
        assert.ok(page, `${family}/${target} method is rendered`);
        assert.match(page.html, family === 'dotnet' || family === 'javascript' ? /angleTolerance/ : /angle_tolerance/);
        assert.doesNotMatch(page.html, /angle_tolerance_0_0_for_none|angleTolerance00ForNone/);
        assert.match(page.html, /0\.0 disables this tolerance/);
        assert.match(page.html, /unpublished candidate/);
        assert.match(page.html, /Candidate Source/);
        const collision = pages.find((p) => p.path === `/api/${family}/sa-${target}/preview/gdt-analysis/evaluate-feature-check`);
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
