---
title: Construction Operations / Circles Commands
description: Canonical MP command dispositions for the Construction Operations / Circles subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Circles Commands

These entries cover the three commands observed under **Construction
Operations → Circles** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>3</strong></div>
  <div><span>Current Server Operations</span><strong>3</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Construction Operations / Circles" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Construct Circle" data-group="Construction Operations / Circles" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-circle">Construct Circle</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct Circle" data-group="Construction Operations / Circles" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-circle">Construct Circle</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Construct Circles From Surface Faces - Runtime Select" data-group="Construction Operations / Circles" data-status="current" data-validation="at-risk-interactive-fixture-validation-required">
  <td><a href="#construct-circles-from-surface-faces---runtime-select">Construct Circles From Surface Faces - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive fixture validation required</td>
</tr>
<tr data-command="Construct Circles From Surface Faces - Runtime Select" data-group="Construction Operations / Circles" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-circles-from-surface-faces---runtime-select">Construct Circles From Surface Faces - Runtime Select</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Construct Circles (Lines) From Surfaces" data-group="Construction Operations / Circles" data-status="current" data-validation="at-risk-setter-probe-and-fixture-validation-required">
  <td><a href="#construct-circles-lines-from-surfaces">Construct Circles (Lines) From Surfaces</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - setter probe and fixture validation required</td>
</tr>
<tr data-command="Construct Circles (Lines) From Surfaces" data-group="Construction Operations / Circles" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-circles-lines-from-surfaces">Construct Circles (Lines) From Surfaces</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Construct Circle

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Circles" data-validation="at-risk-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Circles</span>
  <span className="catalog-target-validation">At risk fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Circles" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Circles</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circle) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-circles#construct-circle) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-circles#construct-circle) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-circles#construct-circle)</p>

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
| Input | `Circle Name` | Collection Object Name | Empty circle identity | Required |
| Input | `Circle Center (in working coordinates)` | Vector | zero vector | Required |
| Input | `Circle Normal (in working coordinates)` | Vector | zero vector | Required |
| Input | `Circle Radius` | Double | 0 | Required |

Briosa requires callers to supply the geometry rather than silently applying
the MP Editor's placeholders. The values are passed through to SpatialAnalyzer,
including zero or negative values, so MP-compatible behavior determines the
result.

[gRPC](/api/grpc/construction-operations-circles#construct-circle) · [.NET](/api/dotnet/construction-operations-circles#construct-circle) · [Python](/api/python/construction-operations-circles#construct-circle) · [JavaScript](/api/javascript/construction-operations-circles#construct-circle)

## Construct Circles From Surface Faces - Runtime Select

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Circles" data-validation="at-risk-interactive-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Circles</span>
  <span className="catalog-target-validation">At risk interactive fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Circles" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Circles</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-circles#construct-circles-from-surface-faces---runtime-select)</p>

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

[gRPC](/api/grpc/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [.NET](/api/dotnet/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [Python](/api/python/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [JavaScript](/api/javascript/construction-operations-circles#construct-circles-from-surface-faces---runtime-select)

## Construct Circles (Lines) From Surfaces

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Circles" data-validation="at-risk-setter-probe-and-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Circles</span>
  <span className="catalog-target-validation">At risk setter probe and fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Circles" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Circles</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circles-lines-from-surfaces) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-circles#construct-circles-lines-from-surfaces) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-circles#construct-circles-lines-from-surfaces) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-circles#construct-circles-lines-from-surfaces)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Surfaces` | Collection Object Name Ref List | Empty | Required |
| Input | `Minimum Diameter` | Double | 0 | 0 |
| Input | `Maximum Diameter` | Double | 0 | 0 |
| Input | `Tolerance` | Double | 0.02 | 0.02 |
| Input | `Single Surface?` | Boolean | false | false |
| Input | `Circle Line Mode` | Circle Line Mode Type | Not exported | Required |
| Input | `Destination Collection Name` | Collection Name | Empty | Omitted |
| Input | `Base Name` | String | `Geometry Object` | `Geometry Object` |
| Output | `Geometry Objects` | Collection Object Name Ref List | - | Returned |

The installed help omits `Single Surface?`, but exact-target SDK evidence
includes it, so Briosa preserves it. `Circle Line Mode` is exposed as a
controlled Circle/Line enum. Its generic string-setter mapping requires an
exact-target setter probe before this operation is considered validated.

[gRPC](/api/grpc/construction-operations-circles#construct-circles-lines-from-surfaces) · [.NET](/api/dotnet/construction-operations-circles#construct-circles-lines-from-surfaces) · [Python](/api/python/construction-operations-circles#construct-circles-lines-from-surfaces) · [JavaScript](/api/javascript/construction-operations-circles#construct-circles-lines-from-surfaces)
