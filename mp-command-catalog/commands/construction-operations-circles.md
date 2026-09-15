---
title: Construction Operations / Circles Commands
description: Canonical MP command dispositions for the Construction Operations / Circles subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Circles Commands

These entries cover the three commands observed under **Construction
Operations → Circles** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>3</strong></div>
  <div><span>Current Server Operations</span><strong>3</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Circles" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Circle" data-group="Construction Operations / Circles" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-circle">Construct Circle</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct Circles From Surface Faces - Runtime Select" data-group="Construction Operations / Circles" data-status="current" data-validation="at-risk-interactive-fixture-validation-required">
  <td><a href="#construct-circles-from-surface-faces---runtime-select">Construct Circles From Surface Faces - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive fixture validation required</td>
</tr>
<tr data-command="Construct Circles (Lines) From Surfaces" data-group="Construction Operations / Circles" data-status="current" data-validation="at-risk-setter-probe-and-fixture-validation-required">
  <td><a href="#construct-circles-lines-from-surfaces">Construct Circles (Lines) From Surfaces</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - setter probe and fixture validation required</td>
</tr>
</tbody>
</table>

## Construct Circle

<span className="catalog-status catalog-status--current">Current</span>

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

<span className="catalog-status catalog-status--current">Current</span>

This command has no MP arguments. The operator selects surface faces in
SpatialAnalyzer while the request is active. Cancellation or a client deadline
does not prove that the SA interaction stopped, and Briosa never automatically
replays the operation.

[gRPC](/api/grpc/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [.NET](/api/dotnet/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [Python](/api/python/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [JavaScript](/api/javascript/construction-operations-circles#construct-circles-from-surface-faces---runtime-select)

## Construct Circles (Lines) From Surfaces

<span className="catalog-status catalog-status--current">Current</span>

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
