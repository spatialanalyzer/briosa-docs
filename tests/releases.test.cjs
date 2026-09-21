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
    const root = `api/${family}`;
    assert.match(html(`${root}/analysis-operations`)('title').text(), new RegExp(`${current} · SA 2026`));
    assert.match(html(`${root}/sa-2024.1.0508.5/analysis-operations`)('title').text(), new RegExp(`${current} · SA 2024`));
    assert.match(html(`${root}/${previous}/analysis-operations`)('title').text(), new RegExp(`${previous} · SA 2026`));
    assert.ok(html(`${root}/${previous}/analysis-operations`)(`a[href^="/api/grpc/0.5.1"]`).length || family === 'grpc');
  }
});

test('the 2024 API preserves narrower inputs and target-only operations', () => {
  const file = html('api/grpc/sa-2024.1.0508.5/file-operations');
  const cad = file('#direct-cad-access').nextUntil('h2').text();
  assert.match(cad, /surface_compatibility_mode/);
  assert.match(cad, /Required/);
  const surfaces = html('api/javascript/sa-2024.1.0508.5/construction-operations');
  const construct = surfaces('#construct-objects-from-surface-faces---runtime-select').nextUntil('h2').text();
  for (const field of ['constructPlanes', 'constructCylinders', 'constructSpheres', 'constructCones', 'constructLines', 'constructPoints', 'constructCircles']) {
    assert.ok(construct.includes(`${field}: boolean`), field);
    assert.ok(!construct.includes(`${field}?:`), field);
  }
  assert.match(html('api/grpc/sa-2024.1.0508.5/instrument-operations-crib-sheet-operations')('article').text(), /rpc RunCribSheet/);
  assert.doesNotMatch(html('api/grpc/instrument-operations-crib-sheet-operations')('article').text(), /rpc RunCribSheet/);
});

test('client discovery references expose the current selector and reports', () => {
  for (const [family, field] of [['dotnet', 'ServerSelection'], ['python', 'server_selection'], ['javascript', 'serverSelection']]) {
    for (const target of ['', '/sa-2024.1.0508.5']) {
      assert.ok(html(`api/${family}${target}/start`)('article').text().includes(field));
      const content = html(`api/${family}${target}/installation-selection`)('article').text();
      for (const model of ['BriosaServerSelection', 'BriosaInstallation', 'BriosaDiscoveryReport', 'BriosaDiscoveryDiagnostic']) assert.ok(content.includes(model));
    }
  }
});
