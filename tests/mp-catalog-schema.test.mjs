import assert from 'node:assert/strict';
import test from 'node:test';

import {
  loadCatalogValidators,
  validatePublicationPolicy,
} from '../scripts/validate-mp-catalog.mjs';

const decisionReference = 'https://github.com/spatialanalyzer/briosa/issues/152';
const inventoryReference =
  'https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/inventory/sa/2026.1.0529.7/inventory.json';

function makeCommand(overrides = {}) {
  return {
    schema_version: 1,
    exact_target: '2026.1.0529.7',
    command_id: 'documentation:AnalysisOperations/GetNumberOfCollections.htm',
    slug: 'analysis-operations/get-number-of-collections',
    mp_step: 'Get Number of Collections',
    category_path: ['AnalysisOperations'],
    status: 'under_review',
    rationale: 'The project has not completed the reviewed disposition.',
    recommendation: {
      kind: 'none_known',
      summary: 'No reviewed alternative is known while disposition is pending.',
    },
    decision_reference: decisionReference,
    evidence: [
      {
        kind: 'exact_target_inventory',
        reference: inventoryReference,
      },
    ],
    validation: {
      qualifiers: [],
      summary: 'No Briosa implementation has been validated.',
    },
    implementation_issues: [],
    ...overrides,
  };
}

test('supported records require an authoritative Briosa operation', async () => {
  const {validateCommand} = await loadCatalogValidators();
  const supported = makeCommand({
    status: 'supported',
    recommendation: {
      kind: 'not_applicable',
      summary: 'Use the supported Briosa operation.',
    },
    briosa_operation: {
      operation_id: 'analysis_operations.get_number_of_collections',
      authoritative_reference:
        'https://github.com/spatialanalyzer/briosa/tree/main/targets/2026.1.0529.7/src',
    },
  });

  assert.equal(validateCommand(supported), true);
  delete supported.briosa_operation;
  assert.equal(validateCommand(supported), false);
});

test('unsupported records require an alternative, workaround, or none-known value', async () => {
  const {validateCommand} = await loadCatalogValidators();
  const unsupported = makeCommand({
    recommendation: {
      kind: 'not_applicable',
      summary: 'This value is reserved for supported records.',
    },
  });

  assert.equal(validateCommand(unsupported), false);
});

test('selected-for-v1 records require an implementation issue but remain unsupported', async () => {
  const {validateCommand} = await loadCatalogValidators();
  const selected = makeCommand({status: 'selected_for_v1'});

  assert.equal(validateCommand(selected), false);
  selected.implementation_issues = [
    'https://github.com/spatialanalyzer/briosa/issues/42',
  ];
  assert.equal(validateCommand(selected), true);
});

test('at-risk is an orthogonal validation qualifier', async () => {
  const {validateCommand} = await loadCatalogValidators();
  const atRisk = makeCommand({
    validation: {
      qualifiers: ['at_risk'],
      summary: 'The required licensed hardware scenario has not run.',
    },
  });

  assert.equal(validateCommand(atRisk), true);
});

test('v1 publication rejects unresolved and merely selected records', () => {
  const v0Target = {
    publication_phase: 'v0_development',
    coverage: {expected_command_count: 2, require_complete: false},
  };
  const v1Target = {
    publication_phase: 'v1_release',
    coverage: {expected_command_count: 2, require_complete: true},
  };
  const commands = [
    makeCommand(),
    makeCommand({
      command_id: 'documentation:FileOperations/GetWorkingDirectory.htm',
      slug: 'file-operations/get-working-directory',
      status: 'selected_for_v1',
      implementation_issues: [
        'https://github.com/spatialanalyzer/briosa/issues/42',
      ],
    }),
  ];

  assert.deepEqual(validatePublicationPolicy(v0Target, commands), []);
  assert.equal(validatePublicationPolicy(v1Target, commands).length, 2);
});
