---
title: Construction Operations / Ellipsoids Commands
description: Canonical MP command dispositions for the Construction Operations / Ellipsoids subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Ellipsoids Commands

This entry covers the command observed under **Construction Operations →
Ellipsoids** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>1</strong></div>
  <div><span>Current Server Operations</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Construction Operations / Ellipsoids" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Construct Ellipsoid" data-group="Construction Operations / Ellipsoids" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-ellipsoid">Construct Ellipsoid</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct Ellipsoid" data-group="Construction Operations / Ellipsoids" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-ellipsoid">Construct Ellipsoid</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Construct Ellipsoid

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Ellipsoids" data-validation="at-risk-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Ellipsoids</span>
  <span className="catalog-target-validation">At risk fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / Ellipsoids" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / Ellipsoids</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

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
