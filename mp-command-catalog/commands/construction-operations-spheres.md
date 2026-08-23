---
title: Construction Operations / Spheres Commands
description: Canonical MP command dispositions for the Construction Operations / Spheres subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Spheres Commands

These entries cover the two commands observed under **Construction Operations
→ Spheres** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>2</strong></div>
  <div><span>Current or Next</span><strong>2</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Spheres" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Sphere" data-group="Construction Operations / Spheres" data-status="next" data-validation="at-risk-sphere-fixture"><td><a href="#construct-sphere">Construct Sphere</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - sphere fixture</td></tr>
<tr data-command="Construct Spheres From Surface Faces - Runtime Select" data-group="Construction Operations / Spheres" data-status="next" data-validation="at-risk-interactive-cad-face-fixture"><td><a href="#construct-spheres-from-surface-faces---runtime-select">Construct Spheres From Surface Faces - Runtime Select</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - interactive CAD-face fixture</td></tr>
</tbody>
</table>

## Construct Sphere

<span className="catalog-status catalog-status--next">Next</span>

Requires a Sphere identity, a center Vector in working coordinates, and a
radius. Briosa adds no radius safeguards and preserves the MP outcome.

## Construct Spheres From Surface Faces - Runtime Select

<span className="catalog-status catalog-status--next">Next</span>

Has no MP arguments and asks the operator to select CAD surface faces in
SpatialAnalyzer. The exact MP step includes spaces around ` - ` even though the
installed documentation route does not. Pressing Escape is preserved as the MP
failure outcome. A client cancellation or deadline does not prove the
interaction stopped.

Neither operation is automatically replayed.

**API References:** [gRPC](/api/grpc/construction-operations-spheres) · [.NET](/api/dotnet/construction-operations-spheres) · [Python](/api/python/construction-operations-spheres) · [JavaScript and TypeScript](/api/javascript/construction-operations-spheres)
