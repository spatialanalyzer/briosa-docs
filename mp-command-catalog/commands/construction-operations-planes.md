---
title: Construction Operations / Planes Commands
description: Canonical MP command dispositions for the Construction Operations / Planes subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Planes Commands

These entries cover the six commands observed under **Construction Operations
→ Planes** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>6</strong></div>
  <div><span>Current or Next</span><strong>6</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Planes" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Plane" data-group="Construction Operations / Planes" data-status="next" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-plane">Construct Plane</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Plane, Normal to Object, Through Point" data-group="Construction Operations / Planes" data-status="next" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-plane-normal-to-object-through-point">Construct Plane, Normal to Object, Through Point</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Planes, Bounding Point Group" data-group="Construction Operations / Planes" data-status="next" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-planes-bounding-point-group">Construct Planes, Bounding Point Group</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Planes, Bisect 2 Planes" data-group="Construction Operations / Planes" data-status="next" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-planes-bisect-2-planes">Construct Planes, Bisect 2 Planes</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Shift Plane" data-group="Construction Operations / Planes" data-status="next" data-validation="at-risk-fixture-validation-required"><td><a href="#shift-plane">Shift Plane</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Planes From Surface Faces - Runtime Select" data-group="Construction Operations / Planes" data-status="next" data-validation="at-risk-interactive-validation-required"><td><a href="#construct-planes-from-surface-faces---runtime-select">Construct Planes From Surface Faces - Runtime Select</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - interactive validation required</td></tr>
</tbody>
</table>

## Construct Plane

<span className="catalog-status catalog-status--next">Next</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Plane Name` | Plane Name | Empty plane identity | Required |
| Input | `Plane Center (in working coordinates)` | Vector | Zero vector | Required |
| Input | `Plane Normal (in working coordinates)` | Vector | Zero vector | Required |
| Input | `Plane Edge Dimension` | Double | 0.0 | 0.0 |

Constructs a plane from a center, normal, and displayed edge dimension. The
normal must be nonzero for SpatialAnalyzer to succeed. Briosa does not add a
geometry rule for the normal or edge dimension. The edge dimension controls
the displayed bounds; the analytical plane remains infinite.

## Construct Plane, Normal to Object, Through Point

<span className="catalog-status catalog-status--next">Next</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Resultant Plane Name` | Plane Name | Empty plane identity | Required |
| Input | `'Normal to' Object Name` | Collection Object Name | Empty identity | Required |
| Input | `'Through' Point Name` | Point Name | Empty identity | Required |
| Input | `Plane Edge Dimension` | Double | 0.0 | 0.0 |

Constructs a plane through the named point. SpatialAnalyzer derives its normal
from the named object's Z-axis, or from a B-Spline's normal near the selected
point. Briosa forwards the identities without attempting to reproduce that
live SpatialAnalyzer geometry decision.

## Construct Planes, Bounding Point Group

<span className="catalog-status catalog-status--next">Next</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Reference Plane Name` | Plane Name | Empty plane identity | Required |
| Input | `Group to bound` | Point Group Name | Empty point-group identity | Required |
| Input | `Resulting 'High' Plane Name` | Plane Name | `HighPlane` | `HighPlane` |
| Input | `Resulting 'Low' Plane Name` | Plane Name | `LowPlane` | `LowPlane` |
| Input | `Override Target/Point Offsets` | Boolean | false | false |
| Input | `Offset Value` | Double | 0.0 | 0.0 |

Constructs parallel planes on the high and low sides of a point group, using
the reference plane for orientation. The offset value is used when offset
override is enabled. SpatialAnalyzer increments duplicate result names.

## Construct Planes, Bisect 2 Planes

<span className="catalog-status catalog-status--next">Next</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Resultant Plane Name` | Plane Name | Empty plane identity | Required |
| Input | `First Plane` | Plane Name | Empty plane identity | Required |
| Input | `Second Plane` | Plane Name | Empty plane identity | Required |

Constructs the plane that bisects the two named planes. SpatialAnalyzer
validates the source identities and their geometry.

## Shift Plane

<span className="catalog-status catalog-status--next">Next</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Plane` | Collection Object Name | Empty identity | Required Plane identity |
| Input | `Shift Along Normal` | Double | 0.0 | 0.0 |
| Input | `Grow Bounds by Factor` | Double | 0.0 | 0.0 |

Mutates the named plane by shifting it along its normal and scaling its
displayed bounds. Negative shifts move opposite the normal. Briosa preserves
the MP defaults and does not impose additional bounds checks.

## Construct Planes From Surface Faces - Runtime Select

<span className="catalog-status catalog-status--next">Next</span>

This no-argument command asks the operator to select planar CAD surface faces
inside SpatialAnalyzer and creates every available plane from that selection.
It is deliberately interactive. Cancellation or an RPC deadline does not
prove that the SpatialAnalyzer interaction stopped.

**API References:** [gRPC](/api/grpc/construction-operations-planes) · [.NET](/api/dotnet/construction-operations-planes) · [Python](/api/python/construction-operations-planes) · [JavaScript and TypeScript](/api/javascript/construction-operations-planes)
