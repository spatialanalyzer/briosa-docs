---
title: Construction Operations / Cylinders Commands
description: Canonical MP command dispositions for the Construction Operations / Cylinders subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Cylinders Commands

These entries cover the three commands observed under **Construction
Operations → Cylinders** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>3</strong></div>
  <div><span>Current Server Operations</span><strong>3</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Cylinders" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Cylinder" data-group="Construction Operations / Cylinders" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-cylinder">Construct Cylinder</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct Cylinder From End Points" data-group="Construction Operations / Cylinders" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-cylinder-from-end-points">Construct Cylinder From End Points</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct Cylinders From Surface Faces - Runtime Select" data-group="Construction Operations / Cylinders" data-status="current" data-validation="at-risk-interactive-fixture-validation-required">
  <td><a href="#construct-cylinders-from-surface-faces---runtime-select">Construct Cylinders From Surface Faces - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive fixture validation required</td>
</tr>
</tbody>
</table>

## Construct Cylinder

<span className="catalog-status catalog-status--current">Current</span>

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

<span className="catalog-status catalog-status--current">Current</span>

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

<span className="catalog-status catalog-status--current">Current</span>

This command has no MP arguments. The operator selects surface faces in
SpatialAnalyzer while the request is active. Cancellation or a client deadline
does not prove that the SA interaction stopped, and Briosa never automatically
replays the operation.

[gRPC](/api/grpc/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select) · [.NET](/api/dotnet/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select) · [Python](/api/python/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select) · [JavaScript](/api/javascript/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select)
