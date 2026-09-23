const {readFileSync} = require('node:fs');
const {join} = require('node:path');
const {test} = require('node:test');
const assert = require('node:assert/strict');
const {load} = require('cheerio');

const html = (route) => load(readFileSync(join(__dirname, '..', 'build', `${route}.html`), 'utf8'));

test('current, historical, and exact-target references have distinct identities', () => {
  for (const family of ['grpc', 'dotnet', 'python', 'javascript']) {
    const current = family === 'grpc' ? '0.7.0' : '0.2.0';
    const previous = family === 'grpc' ? '0.5.1' : '0.1.0';
    const root = `api/${family}/${current}`;
    assert.match(html(`${root}/sa-2026.1.0529.7/analysis-operations`)('title').text(), new RegExp(`${current} · SA 2026`));
    assert.match(html(`${root}/sa-2024.1.0508.5/analysis-operations`)('title').text(), new RegExp(`${current} · SA 2024`));
    assert.match(html(`api/${family}/${previous}/sa-2026.1.0529.7/analysis-operations`)('title').text(), new RegExp(`${previous} · SA 2026`));
    assert.ok(html(`api/${family}/${previous}/sa-2026.1.0529.7/analysis-operations/angle-between-line-and-plane`)(`a[href^="/api/grpc/0.5.1"]`).length || family === 'grpc');
  }
});

test('the 2024 API preserves narrower inputs and target-only operations', () => {
  const file = html('api/grpc/0.7.0/sa-2024.1.0508.5/file-operations/direct-cad-access');
  const cad = file('article').text();
  assert.match(cad, /surface_compatibility_mode/);
  assert.match(cad, /Required/);
  const surfaces = html('api/javascript/0.2.0/sa-2024.1.0508.5/construction-operations/construct-objects-from-surface-faces---runtime-select');
  const construct = surfaces('article').text();
  for (const field of ['constructPlanes', 'constructCylinders', 'constructSpheres', 'constructCones', 'constructLines', 'constructPoints', 'constructCircles']) {
    assert.ok(construct.includes(`${field}: boolean`), field);
    assert.ok(!construct.includes(`${field}?:`), field);
  }
  assert.match(html('api/grpc/0.7.0/sa-2024.1.0508.5/instrument-operations-crib-sheet-operations/run-crib-sheet')('article').text(), /rpc RunCribSheet/);
  assert.doesNotMatch(html('api/grpc/0.7.0/sa-2026.1.0529.7/instrument-operations-crib-sheet-operations/run-crib-sheet')('article').text(), /rpc RunCribSheet/);
});

test('client discovery references expose the current selector and reports', () => {
  for (const [family, field] of [['dotnet', 'ServerSelection'], ['python', 'server_selection'], ['javascript', 'serverSelection']]) {
    for (const target of ['/sa-2026.1.0529.7', '/sa-2024.1.0508.5']) {
      assert.ok(html(`api/${family}/0.2.0${target}/start`)('article').text().includes(field));
      const content = html(`api/${family}/0.2.0${target}/installation-selection`)('article').text();
      for (const model of ['BriosaServerSelection', 'BriosaInstallation', 'BriosaDiscoveryReport', 'BriosaDiscoveryDiagnostic']) assert.ok(content.includes(model));
    }
  }
});
