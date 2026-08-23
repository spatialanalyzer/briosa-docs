---
title: Construction Operations / Polygonized Surfaces Commands
description: Canonical MP command dispositions for the Construction Operations / Polygonized Surfaces subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Polygonized Surfaces Commands

This entry covers the command observed under **Construction Operations →
Polygonized Surfaces** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>1</strong></div>
  <div><span>Current or Next</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Polygonized Surfaces" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Polygonized Surface from Point Clouds" data-group="Construction Operations / Polygonized Surfaces" data-status="next" data-validation="at-risk-dense-point-cloud-fixture"><td><a href="#construct-polygonized-surface-from-point-clouds">Construct Polygonized Surface from Point Clouds</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - dense point-cloud fixture</td></tr>
</tbody>
</table>

## Construct Polygonized Surface from Point Clouds

<span className="catalog-status catalog-status--next">Next</span>

Requires a Point Cloud list, an explicit mesh orientation, and a destination
Polygonized Surface identity. Mesh orientation supports `Use Current Point of
View` and `Use Current Working Frame`; Briosa requires a choice because the
exact MP export contains an empty value rather than a valid default. Grid
resolution preserves the MP Editor default of `0.0`.

The command depends on live view or working-frame state and suitable point-cloud
density. Briosa adds no resolution or data-density safeguards and never
automatically replays the operation.

**API References:** [gRPC](/api/grpc/construction-operations-polygonized-surfaces) · [.NET](/api/dotnet/construction-operations-polygonized-surfaces) · [Python](/api/python/construction-operations-polygonized-surfaces) · [JavaScript and TypeScript](/api/javascript/construction-operations-polygonized-surfaces)
