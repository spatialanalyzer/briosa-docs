---
title: Construction Operations / Cylinders Commands
description: Canonical MP command dispositions for the Construction Operations / Cylinders subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Cylinders Commands

These entries cover the three commands observed under **Construction
Operations → Cylinders** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>3</strong></div>
  <div><span>Current Server Operations</span><strong>3</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Construction Operations / Cylinders" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Construct Cylinder" data-group="Construction Operations / Cylinders" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-cylinder">Construct Cylinder</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct Cylinder" data-group="Construction Operations / Cylinders" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-cylinder">Construct Cylinder</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Construct Cylinder From End Points" data-group="Construction Operations / Cylinders" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-cylinder-from-end-points">Construct Cylinder From End Points</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct Cylinder From End Points" data-group="Construction Operations / Cylinders" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-cylinder-from-end-points">Construct Cylinder From End Points</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Construct Cylinders From Surface Faces - Runtime Select" data-group="Construction Operations / Cylinders" data-status="current" data-validation="at-risk-interactive-fixture-validation-required">
  <td><a href="#construct-cylinders-from-surface-faces---runtime-select">Construct Cylinders From Surface Faces - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive fixture validation required</td>
</tr>
<tr data-command="Construct Cylinders From Surface Faces - Runtime Select" data-group="Construction Operations / Cylinders" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-cylinders-from-surface-faces---runtime-select">Construct Cylinders From Surface Faces - Runtime Select</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Construct Cylinder

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Cylinders" data-validation="at-risk-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Cylinders</span>
  <span className="catalog-target-validation">At risk fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / Cylinders" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / Cylinders</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Cylinder Name` | Collection Object Name | Empty cylinder identity | Required |
| Input | `Cylinder End Point (in working coordinates)` | Vector | zero vector | Required |
| Input | `Cylinder Axis (in working coordinates)` | Vector | zero vector | Required |
| Input | `Cylinder Diameter` | Double | 0 | Required |
| Input | `Cylinder Length` | Double | 0 | Required |

Briosa requires callers to supply the complete cylinder definition. It does
not add client- or server-side geometry safeguards: zero or negative dimensions
and any axis vector are passed to SpatialAnalyzer, which determines the MP
execution outcome.

[gRPC](/api/grpc/construction-operations-cylinders#construct-cylinder) · [.NET](/api/dotnet/construction-operations-cylinders#construct-cylinder) · [Python](/api/python/construction-operations-cylinders#construct-cylinder) · [JavaScript](/api/javascript/construction-operations-cylinders#construct-cylinder)

## Construct Cylinder From End Points

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Cylinders" data-validation="at-risk-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Cylinders</span>
  <span className="catalog-target-validation">At risk fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / Cylinders" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / Cylinders</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Cylinder Name` | Collection Object Name | Empty cylinder identity | Required |
| Input | `Cylinder End Point A (in working coordinates)` | Vector | zero vector | Required |
| Input | `Cylinder End Point B (in working coordinates)` | Vector | zero vector | Required |
| Input | `Cylinder Diameter` | Double | 0 | Required |

Briosa passes coincident endpoints and zero or negative diameters through to
SpatialAnalyzer. This preserves MP-compatible behavior rather than introducing
an initial-release geometry policy.

[gRPC](/api/grpc/construction-operations-cylinders#construct-cylinder-from-end-points) · [.NET](/api/dotnet/construction-operations-cylinders#construct-cylinder-from-end-points) · [Python](/api/python/construction-operations-cylinders#construct-cylinder-from-end-points) · [JavaScript](/api/javascript/construction-operations-cylinders#construct-cylinder-from-end-points)

## Construct Cylinders From Surface Faces - Runtime Select

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Cylinders" data-validation="at-risk-interactive-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Cylinders</span>
  <span className="catalog-target-validation">At risk interactive fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / Cylinders" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / Cylinders</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

The captured command has no SDK argument calls.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

This command has no MP arguments. The operator selects surface faces in
SpatialAnalyzer while the request is active. Cancellation or a client deadline
does not prove that the SA interaction stopped, and Briosa never automatically
replays the operation.

[gRPC](/api/grpc/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select) · [.NET](/api/dotnet/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select) · [Python](/api/python/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select) · [JavaScript](/api/javascript/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select)
