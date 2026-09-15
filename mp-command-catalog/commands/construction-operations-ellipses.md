---
title: Construction Operations / Ellipses Commands
description: Canonical MP command dispositions for the Construction Operations / Ellipses subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Ellipses Commands

This entry covers the command observed under **Construction Operations →
Ellipses** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>1</strong></div>
  <div><span>Current Server Operations</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Ellipses" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Ellipse" data-group="Construction Operations / Ellipses" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-ellipse">Construct Ellipse</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
</tbody>
</table>

## Construct Ellipse

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Ellipse Name` | Collection Object Name | Empty ellipse identity | Required |
| Input | `Center Coordinate` | Vector | zero vector | Required |
| Input | `Normal Direction` | Vector | zero vector | Required |
| Input | `Major Axis Radius` | Double | 0 | Required |
| Input | `Minor Axis Radius` | Double | 0 | Required |

Briosa requires callers to supply the complete ellipse definition and passes
the values through without client- or server-side geometry validation.
SpatialAnalyzer determines the MP execution outcome. ObjectiveSA has no wrapper
for this command in its SA 2024.1-targeted surface, so validation relies on the
exact SA 2026.1.0529.7 SDK binding and a future licensed fixture scenario.

[gRPC](/api/grpc/construction-operations-ellipses#construct-ellipse) · [.NET](/api/dotnet/construction-operations-ellipses#construct-ellipse) · [Python](/api/python/construction-operations-ellipses#construct-ellipse) · [JavaScript](/api/javascript/construction-operations-ellipses#construct-ellipse)
