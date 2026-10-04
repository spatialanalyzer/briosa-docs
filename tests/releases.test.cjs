const {readFileSync} = require('node:fs');
const {join} = require('node:path');
const {test} = require('node:test');
const assert = require('node:assert/strict');
const {load} = require('cheerio');

const html = (route) => load(readFileSync(join(__dirname, '..', 'build', `${route}.html`), 'utf8'));
// The contract a method history page records for one release/SA pair.
const revision = (family, id, release, target) => {
  const $ = html(`api/${family}/${id}`);
  return $(`li[id="release-${release}-sa-${target}"]`).closest('section.api-revision');
};

test('current, historical, and exact-target references have distinct identities', () => {
  for (const family of ['grpc', 'dotnet', 'python', 'javascript']) {
    const current = family === 'grpc' ? '0.9.0' : '0.4.0';
    const previous = family === 'grpc' ? '0.5.1' : '0.1.0';
    const root = `api/${family}`;
    assert.match(html(`${root}/sa-2026.1.0529.7/analysis-operations`)('title').text(), new RegExp(`${current} · SA 2026`));
    assert.match(html(`${root}/sa-2024.1.0508.5/analysis-operations`)('title').text(), new RegExp(`${current} · SA 2024`));
    assert.match(html(`${root}/sa-2026.1.0529.7/${previous}/analysis-operations`)('title').text(), new RegExp(`${previous} · SA 2026`));
    if (family !== 'grpc') {
      const links = revision(family, 'analysis-operations/angle-between-line-and-plane', previous, '2026.1.0529.7').find('a').toArray().map((a) => a.attribs.href);
      assert.ok(links.some((href) => href.startsWith('/api/grpc/') && href.includes('#release-0.5.1-sa-2026.1.0529.7')), `${family} ${previous} keeps its server ${'0.5.1'} cross-reference`);
    }
  }
});

test('the 2024 API preserves narrower inputs and target-only operations', () => {
  const cad = revision('grpc', 'file-operations/direct-cad-access', '0.7.0', '2024.1.0508.5').text();
  assert.match(cad, /surface_compatibility_mode/);
  assert.match(cad, /Required/);
  const construct = revision('javascript', 'construction-operations/construct-objects-from-surface-faces---runtime-select', '0.2.0', '2024.1.0508.5').text();
  for (const field of ['constructPlanes', 'constructCylinders', 'constructSpheres', 'constructCones', 'constructLines', 'constructPoints', 'constructCircles']) {
    assert.ok(construct.includes(`${field}: boolean`), field);
    assert.ok(!construct.includes(`${field}?:`), field);
  }
  assert.match(revision('grpc', 'instrument-operations-crib-sheet-operations/run-crib-sheet', '0.7.0', '2024.1.0508.5').text(), /rpc RunCribSheet/);
  assert.equal(revision('grpc', 'instrument-operations-crib-sheet-operations/run-crib-sheet', '0.7.0', '2026.1.0529.7').length, 0);
});

test('client discovery references expose the current selector and reports', () => {
  for (const [family, field] of [['dotnet', 'ServerSelection'], ['python', 'server_selection'], ['javascript', 'serverSelection']]) {
    for (const target of ['/sa-2026.1.0529.7', '/sa-2024.1.0508.5']) {
      assert.ok(html(`api/${family}${target}/0.2.0/start`)('article').text().includes(field));
      const content = html(`api/${family}${target}/0.2.0/installation-selection`)('article').text();
      for (const model of ['BriosaServerSelection', 'BriosaInstallation', 'BriosaDiscoveryReport', 'BriosaDiscoveryDiagnostic']) assert.ok(content.includes(model));
    }
  }
});

test('major-2 robot Machine ID references use the instrument ID family', () => {
  for (const target of ['2024.1.0508.5', '2026.1.0529.7']) {
    for (const family of ['grpc', 'dotnet', 'python', 'javascript']) {
      for (const operation of ['get-robotmachine-parameter', 'start-robotmachine-interface', 'stop-robotmachine-interface']) {
        const contract = html(`api/${family}/sa-${target}/robot-operations/${operation}`)('.api-contract').text();
        assert.match(contract, /CollectionInstrumentId/, `${family} ${target} ${operation}`);
        assert.doesNotMatch(contract, /CollectionMachineId/, `${family} ${target} ${operation}`);
      }
    }
  }
});

test('the naming release preserves historical signatures and qualifier notes', () => {
  for (const family of ['grpc', 'dotnet', 'python', 'javascript']) {
    const current = family === 'grpc' ? '0.8.0' : '0.3.0';
    const previous = family === 'grpc' ? '0.7.0' : '0.2.0';
    for (const target of ['2024.1.0508.5', '2026.1.0529.7']) {
      const id = 'analysis-operations/angle-between-line-and-plane';
      const before = revision(family, id, previous, target).find('.api-revision-contract').text();
      const after = revision(family, id, current, target).find('.api-revision-contract').text();
      assert.match(before, /angle_tolerance_0_0_for_none|angleTolerance00ForNone/);
      assert.doesNotMatch(after, /angle_tolerance_0_0_for_none|angleTolerance00ForNone/);
      assert.match(after, /angle_tolerance|angleTolerance/);
      assert.match(after, /0\.0 disables this tolerance/);
    }
  }
});
