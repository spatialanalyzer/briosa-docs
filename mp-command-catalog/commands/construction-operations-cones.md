---
title: Construction Operations / Cones Commands
description: Canonical MP command dispositions for the Construction Operations / Cones subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Cones Commands

These entries cover the two commands observed under **Construction Operations
→ Cones** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>2</strong></div>
  <div><span>Current Server Operations</span><strong>2</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Cones" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Cone" data-group="Construction Operations / Cones" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-cone">Construct Cone</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct Cones From Surface Faces - Runtime Select" data-group="Construction Operations / Cones" data-status="current" data-validation="at-risk-interactive-fixture-validation-required">
  <td><a href="#construct-cones-from-surface-faces---runtime-select">Construct Cones From Surface Faces - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive fixture validation required</td>
</tr>
</tbody>
</table>

## Construct Cone

<span className="catalog-status catalog-status--current">Current</span>

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

<span className="catalog-status catalog-status--current">Current</span>

This command has no MP arguments. The operator selects surface faces in
SpatialAnalyzer while the request is active. Cancellation or a client deadline
does not prove that the SA interaction stopped, and Briosa never automatically
replays the operation.

[gRPC](/api/grpc/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [.NET](/api/dotnet/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [Python](/api/python/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [JavaScript](/api/javascript/construction-operations-cones#construct-cones-from-surface-faces---runtime-select)
