---
title: Construction Operations / Cones Commands
description: Canonical MP command dispositions for the Construction Operations / Cones subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Cones Commands

These entries cover the two commands observed under **Construction Operations
→ Cones** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>2</strong></div>
  <div><span>Current Server Operations</span><strong>2</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Construction Operations / Cones" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Construct Cone" data-group="Construction Operations / Cones" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-cone">Construct Cone</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct Cone" data-group="Construction Operations / Cones" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-cone">Construct Cone</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Construct Cones From Surface Faces - Runtime Select" data-group="Construction Operations / Cones" data-status="current" data-validation="at-risk-interactive-fixture-validation-required">
  <td><a href="#construct-cones-from-surface-faces---runtime-select">Construct Cones From Surface Faces - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive fixture validation required</td>
</tr>
<tr data-command="Construct Cones From Surface Faces - Runtime Select" data-group="Construction Operations / Cones" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-cones-from-surface-faces---runtime-select">Construct Cones From Surface Faces - Runtime Select</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Construct Cone

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Cones" data-validation="at-risk-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Cones</span>
  <span className="catalog-target-validation">At risk fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Cones" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Cones</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-cones#construct-cone) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-cones#construct-cone) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-cones#construct-cone) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-cones#construct-cone)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Cone Name` | Collection Object Name | Empty cone identity | Required |
| Input | `Cone End Point (in working coordinates)` | Vector | zero vector | Required |
| Input | `Cone Axis (in working coordinates)` | Vector | zero vector | Required |
| Input | `Cone Length` | Double | 0 | Required |
| Input | `Cone Theta Start` | Double | 0 | Required |
| Input | `Cone Theta Span` | Double | 0 | Required |
| Input | `Cone Included Angle` | Double | 0 | Required |

Briosa requires callers to supply the complete cone definition rather than
silently applying the MP Editor's placeholders. The values are passed through
without Briosa-specific geometry validation, including zero or negative
values, so SpatialAnalyzer determines the outcome just as it does for an MP.

[gRPC](/api/grpc/construction-operations-cones#construct-cone) · [.NET](/api/dotnet/construction-operations-cones#construct-cone) · [Python](/api/python/construction-operations-cones#construct-cone) · [JavaScript](/api/javascript/construction-operations-cones#construct-cone)

## Construct Cones From Surface Faces - Runtime Select

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Cones" data-validation="at-risk-interactive-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Cones</span>
  <span className="catalog-target-validation">At risk interactive fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Cones" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Cones</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-cones#construct-cones-from-surface-faces---runtime-select)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

The captured command has no SDK argument calls.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

This command has no MP arguments. The operator selects surface faces in
SpatialAnalyzer while the request is active. Cancellation or a client deadline
does not prove that the SA interaction stopped, and Briosa never automatically
replays the operation.

[gRPC](/api/grpc/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [.NET](/api/dotnet/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [Python](/api/python/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [JavaScript](/api/javascript/construction-operations-cones#construct-cones-from-surface-faces---runtime-select)
