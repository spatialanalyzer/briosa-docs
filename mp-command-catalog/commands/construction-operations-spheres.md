---
title: Construction Operations / Spheres Commands
description: Canonical MP command dispositions for the Construction Operations / Spheres subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Spheres Commands

These entries cover the two commands observed under **Construction Operations
→ Spheres** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>2</strong></div>
  <div><span>Current Server Operations</span><strong>2</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Construction Operations / Spheres" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Construct Sphere" data-group="Construction Operations / Spheres" data-status="current" data-validation="at-risk-sphere-fixture"><td><a href="#construct-sphere">Construct Sphere</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - sphere fixture</td></tr>
<tr data-command="Construct Sphere" data-group="Construction Operations / Spheres" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-sphere">Construct Sphere</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Construct Spheres From Surface Faces - Runtime Select" data-group="Construction Operations / Spheres" data-status="current" data-validation="at-risk-interactive-cad-face-fixture"><td><a href="#construct-spheres-from-surface-faces---runtime-select">Construct Spheres From Surface Faces - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive CAD-face fixture</td></tr>
<tr data-command="Construct Spheres From Surface Faces - Runtime Select" data-group="Construction Operations / Spheres" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-spheres-from-surface-faces---runtime-select">Construct Spheres From Surface Faces - Runtime Select</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Construct Sphere

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Spheres" data-validation="at-risk-sphere-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Spheres</span>
  <span className="catalog-target-validation">At risk sphere fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / Spheres" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / Spheres</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Sphere Name` | Collection Object Name |
| Input | `Sphere Center (in working coordinates)` | Vector |
| Input | `Sphere Radius` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Requires a Sphere identity, a center Vector in working coordinates, and a
radius. Briosa adds no radius safeguards and preserves the MP outcome.

## Construct Spheres From Surface Faces - Runtime Select

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Spheres" data-validation="at-risk-interactive-cad-face-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Spheres</span>
  <span className="catalog-target-validation">At risk interactive cad face fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / Spheres" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / Spheres</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

The captured command has no SDK argument calls.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Has no MP arguments and asks the operator to select CAD surface faces in
SpatialAnalyzer. The exact MP step includes spaces around ` - ` even though the
installed documentation route does not. Pressing Escape is preserved as the MP
failure outcome. A client cancellation or deadline does not prove the
interaction stopped.

Neither operation is automatically replayed.

**API References:** [gRPC](/api/grpc/construction-operations-spheres) · [.NET](/api/dotnet/construction-operations-spheres) · [Python](/api/python/construction-operations-spheres) · [JavaScript and TypeScript](/api/javascript/construction-operations-spheres)
