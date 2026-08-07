---
title: MP command catalog model
---

# MP command catalog model

The MP command catalog documents every retained command identity for one exact
SpatialAnalyzer target, including commands Briosa does not support. Its purpose
is to answer four separate questions:

1. Does Briosa support this command now?
2. Has the project selected it for the v1 surface?
3. If it is not supported, what is its reviewed disposition and recommended
   alternative?
4. What validation limitations qualify the record?

:::caution Documentation is not runtime policy

Catalog records do not define protobuf, generate operations, admit commands at
runtime, create client methods, or impose Briosa build completeness. The
handwritten source in
[`spatialanalyzer/briosa`](https://github.com/spatialanalyzer/briosa) remains
authoritative. Static documentation code in this repository is the only
permitted consumer of catalog data.

:::

## Files and identity

Each exact target has a manifest at
`catalog/sa/<exact-target>/target.json` and one JSON record per command below
its `commands` directory.

- `command_id` is the exact `inventory_key` from the retained Briosa
  exact-target inventory. It is unique within the target and does not change
  when a title or disposition changes.
- `slug` is an explicit, lowercase ASCII path made from kebab-case segments.
  The record path below `commands` must equal `<slug>.json`.
- Slugs are chosen once, must be unique within the target, and remain stable
  after publication. Do not recompute a published slug from a changed MP title.
- When otherwise natural slugs collide, add a short, meaningful category or
  source qualifier. Do not use array position as identity.
- `exact_target`, `mp_step`, and `category_path` preserve the target and MP
  terminology carried by the curated evidence.

The retained inventory is identity and evidence, not an allowlist, backlog, or
support decision.

## Status vocabulary

The `status` field uses one of these public values:

| Value | Supported now? | Selected for v1? | Meaning |
| --- | --- | --- | --- |
| `supported` | yes | delivered | A reviewed handwritten Briosa operation exists. |
| `selected_for_v1` | no | yes | Implementation is planned for v1 but is not yet API. |
| `under_review` | no | undecided | Temporary v0.x disposition while evidence and policy are reviewed. |
| `deferred_beyond_v1` | no | no | Potentially useful, but intentionally outside the v1 surface. |
| `intentionally_excluded` | no | no | Reviewed policy, safety, scope, or product reasons exclude it. |
| `sdk_unavailable` | no | no | The exact-target SDK surface cannot implement the MP command as reviewed. |

Only `supported` makes a current runtime-support claim. It requires a stable
Briosa operation ID and a link to authoritative source under the same exact
target. `selected_for_v1` requires a related implementation or coherent-batch
issue, but must never be described as callable.

`under_review` is valid while the target manifest is in `v0_development`.
Before the manifest can move to `v1_release`, both `under_review` and
`selected_for_v1` must reach zero and complete catalog coverage must be
enforced.

## Validation qualification

Validation is independent from status. `validation.qualifiers` currently
accepts only `at_risk`, which records a missing fixture, third-party product,
hardware dependency, license, or unexecuted licensed scenario. It does not
turn an unsupported command into a supported one, and it does not by itself
justify exclusion. `validation.summary` states what was and was not proved.

## Rationale and recommendations

Every record has concise, project-authored `rationale` and a reviewed
`decision_reference`. Every status other than `supported` also requires one
of:

- `alternative`: use another supported operation or product capability;
- `workaround`: achieve the outcome through a documented multi-step or manual
  workflow; or
- `none_known`: state clearly that the project knows of no safe alternative.

`supported` records use `not_applicable` and identify the operation instead.
Do not copy vendor descriptions into the rationale or recommendation.

## Evidence and review references

References must be public HTTPS links to curated material in the
`spatialanalyzer` GitHub organization. Link to exact-target inventory facts,
authoritative Briosa source, reviewed issues or discussions, and non-sensitive
licensed-validation observations. Never link or copy raw installed MP
documentation, raw generated SDK samples, proprietary binaries, local paths,
credentials, or licensed customer data.

The review authority for this target is
[`spatialanalyzer/briosa#152`](https://github.com/spatialanalyzer/briosa/issues/152).
Disposition changes should land there in coherent batches before their catalog
records are changed here.

## Validation

The JSON schemas live under `catalog/schemas/v1`. Run:

```text
npm run validate:catalog
npm run test:catalog
```

The validator checks schemas, record paths, target consistency, unique IDs and
slugs, coverage policy, and final-v1 status rules. These checks protect the
documentation dataset only; passing them cannot create or expand Briosa
behavior.
