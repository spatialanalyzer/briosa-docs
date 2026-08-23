---
title: Construction Operations / Ellipsoids Commands
description: Canonical MP command dispositions for the Construction Operations / Ellipsoids subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Ellipsoids Commands

This entry covers the command observed under **Construction Operations →
Ellipsoids** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>1</strong></div>
  <div><span>Current or Next</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Ellipsoids" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Ellipsoid" data-group="Construction Operations / Ellipsoids" data-status="next" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-ellipsoid">Construct Ellipsoid</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td>
</tr>
</tbody>
</table>

## Construct Ellipsoid

<span className="catalog-status catalog-status--next">Next</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Ellipse Name` | Collection Object Name | Empty ellipsoid identity | Required |
| Input | `X-Axis Radius` | Double | 5 | 5 |
| Input | `Y-Axis Radius` | Double | 4 | 4 |
| Input | `Z-Axis Radius` | Double | 3 | 3 |
| Input | `Magnification` | Double | 1 | 1 |
| Input | `Uncertainty Ellipsoid?` | Boolean | false | false |
| Input | `Transform in Working Coordinates` | Transform | Identity | Identity |
| Input | `Ellipse Color` | Color | RGB 255, 0, 255 | RGB 255, 0, 255 |

Briosa preserves the exact MP argument label `Ellipse Name`, even though the
constructed object is an Ellipsoid. It also preserves the exact target's
magenta color default. ObjectiveSA uses the same bindings but supplies black
when its color argument is omitted; exact SA 2026.1.0529.7 evidence takes
precedence for Briosa. Supplied values are passed through without additional
geometry validation.

[gRPC](/api/grpc/construction-operations-ellipsoids#construct-ellipsoid) · [.NET](/api/dotnet/construction-operations-ellipsoids#construct-ellipsoid) · [Python](/api/python/construction-operations-ellipsoids#construct-ellipsoid) · [JavaScript](/api/javascript/construction-operations-ellipsoids#construct-ellipsoid)
