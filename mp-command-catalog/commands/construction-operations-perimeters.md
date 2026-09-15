---
title: Construction Operations / Perimeters Commands
description: Canonical MP command dispositions for the Construction Operations / Perimeters subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Perimeters Commands

This entry covers the single command observed under **Construction Operations
→ Perimeters** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>1</strong></div>
  <div><span>Current Server Operations</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Perimeters" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Perimeter From Points" data-group="Construction Operations / Perimeters" data-status="current" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-perimeter-from-points">Construct Perimeter From Points</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td></tr>
</tbody>
</table>

## Construct Perimeter From Points

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Resulting Perimeter Name` | Perimeter Name | Empty perimeter identity | Required |
| Input | `Point List` | Point Name Ref List | Empty list | Required |
| Input | `Open Perimeter?` | Boolean | false | false |

Creates a perimeter by connecting the supplied points in order. A false value
creates a closed perimeter; true leaves it open. SpatialAnalyzer increments a
duplicate requested name. Briosa passes missing points and lists with fewer
than two points through to SpatialAnalyzer rather than adding a client-side
validation rule.

**API References:** [gRPC](/api/grpc/construction-operations-perimeters) · [.NET](/api/dotnet/construction-operations-perimeters) · [Python](/api/python/construction-operations-perimeters) · [JavaScript and TypeScript](/api/javascript/construction-operations-perimeters)
