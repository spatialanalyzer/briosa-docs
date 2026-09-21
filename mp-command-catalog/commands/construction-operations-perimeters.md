---
title: Construction Operations / Perimeters Commands
description: Canonical MP command dispositions for the Construction Operations / Perimeters subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Perimeters Commands

This entry covers the single command observed under **Construction Operations
→ Perimeters** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>1</strong></div>
  <div><span>Current Server Operations</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Construction Operations / Perimeters" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Construct Perimeter From Points" data-group="Construction Operations / Perimeters" data-status="current" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-perimeter-from-points">Construct Perimeter From Points</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Perimeter From Points" data-group="Construction Operations / Perimeters" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-perimeter-from-points">Construct Perimeter From Points</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Construct Perimeter From Points

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Perimeters" data-validation="at-risk-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Perimeters</span>
  <span className="catalog-target-validation">At risk fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Perimeters" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Perimeters</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-perimeters#construct-perimeter-from-points) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-perimeters#construct-perimeter-from-points) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-perimeters#construct-perimeter-from-points) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-perimeters#construct-perimeter-from-points)</p>

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
| Input | `Resulting Perimeter Name` | Perimeter Name | Empty perimeter identity | Required |
| Input | `Point List` | Point Name Ref List | Empty list | Required |
| Input | `Open Perimeter?` | Boolean | false | false |

Creates a perimeter by connecting the supplied points in order. A false value
creates a closed perimeter; true leaves it open. SpatialAnalyzer increments a
duplicate requested name. Briosa passes missing points and lists with fewer
than two points through to SpatialAnalyzer rather than adding a client-side
validation rule.

**API References:** [gRPC](/api/grpc/construction-operations-perimeters) · [.NET](/api/dotnet/construction-operations-perimeters) · [Python](/api/python/construction-operations-perimeters) · [JavaScript and TypeScript](/api/javascript/construction-operations-perimeters)
