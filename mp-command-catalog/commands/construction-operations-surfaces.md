---
title: Construction Operations / Surfaces Commands
description: Canonical MP command dispositions for the Construction Operations / Surfaces subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Surfaces Commands

These entries cover the 15 commands observed under **Construction Operations
→ Surfaces** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>15</strong></div>
  <div><span>Current Server Operations</span><strong>15</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Surfaces" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Surfaces From Objects" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-object-surface-fixture"><td><a href="#construct-surfaces-from-objects">Construct Surfaces From Objects</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - object and surface fixture</td></tr>
<tr data-command="Construct Surface From BSplines" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-b-spline-surface-fixture"><td><a href="#construct-surface-from-bsplines">Construct Surface From BSplines</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - B-Spline surface fixture</td></tr>
<tr data-command="Construct Surface From Cylinder" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-cylinder-surface-fixture"><td><a href="#construct-surface-from-cylinder">Construct Surface From Cylinder</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - cylinder surface fixture</td></tr>
<tr data-command="Construct Surface From Plane" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-plane-surface-fixture"><td><a href="#construct-surface-from-plane">Construct Surface From Plane</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - plane surface fixture</td></tr>
<tr data-command="Construct Surface From Sphere" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-sphere-surface-fixture"><td><a href="#construct-surface-from-sphere">Construct Surface From Sphere</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - sphere surface fixture</td></tr>
<tr data-command="Construct Surface From Cone" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-cone-surface-fixture"><td><a href="#construct-surface-from-cone">Construct Surface From Cone</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - cone surface fixture</td></tr>
<tr data-command="Construct Surface From a Collection of Surfaces" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-surface-sewing-fixture"><td><a href="#construct-surface-from-a-collection-of-surfaces">Construct Surface From a Collection of Surfaces</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - surface sewing fixture</td></tr>
<tr data-command="Construct Surface Fit From Nominal Surfaces and Actual Data" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-nominal-surface-and-point-fixture"><td><a href="#construct-surface-fit-from-nominal-surfaces-and-actual-data">Construct Surface Fit From Nominal Surfaces and Actual Data</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - nominal surface and point fixture</td></tr>
<tr data-command="Construct Surface by Dissecting Surface(s)" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-interactive-cad-fixture"><td><a href="#construct-surface-by-dissecting-surfaces">Construct Surface by Dissecting Surface(s)</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive CAD fixture</td></tr>
<tr data-command="Construct Surfaces by Dissecting Surfaces from Ref List" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-surface-dissection-fixture"><td><a href="#construct-surfaces-by-dissecting-surfaces-from-ref-list">Construct Surfaces by Dissecting Surfaces from Ref List</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - surface dissection fixture</td></tr>
<tr data-command="Construct Surface From Point Groups" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-point-group-surface-fixture"><td><a href="#construct-surface-from-point-groups">Construct Surface From Point Groups</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - point-group surface fixture</td></tr>
<tr data-command="Construct Surfaces By Projecting Points" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-projection-fixture"><td><a href="#construct-surfaces-by-projecting-points">Construct Surfaces By Projecting Points</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - projection fixture</td></tr>
<tr data-command="Construct surface by offsetting a surface" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-offset-surface-fixture"><td><a href="#construct-surface-by-offsetting-a-surface">Construct surface by offsetting a surface</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - offset surface fixture</td></tr>
<tr data-command="Construct Surface From Annotation Links" data-group="Construction Operations / Surfaces" data-status="current" data-validation="at-risk-annotation-link-fixture"><td><a href="#construct-surface-from-annotation-links">Construct Surface From Annotation Links</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - annotation-link fixture</td></tr>
<tr data-command="Construct Geometry From Surfaces" data-group="Construction Operations / Surfaces" data-status="current" data-validation="licensed-partial-cylinder-probe"><td><a href="#construct-geometry-from-surfaces">Construct Geometry From Surfaces</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>Licensed probe - cylinder-only contract confirmed</td></tr>
</tbody>
</table>

## Construct Surfaces From Objects

<span className="catalog-status catalog-status--current">Current</span>

Requires an Object list. SpatialAnalyzer constructs surfaces for the supplied
objects and determines the resulting names and outcome.

## Construct Surface From BSplines

<span className="catalog-status catalog-status--current">Current</span>

Requires a resulting Surface identity and a B-Spline list. The exact SA
2026.1.0529.7 argument is `BSpline List`.

## Construct Surface From Cylinder

<span className="catalog-status catalog-status--current">Current</span>

Requires resulting Surface and source Cylinder identities. `Internal Cylinder?`
defaults to `true`; `Use Theta Extent Mode?` defaults to `false`.

## Construct Surface From Plane

<span className="catalog-status catalog-status--current">Current</span>

Requires resulting Surface and source Plane identities.

## Construct Surface From Sphere

<span className="catalog-status catalog-status--current">Current</span>

Requires resulting Surface and source Sphere identities.

## Construct Surface From Cone

<span className="catalog-status catalog-status--current">Current</span>

Requires resulting Surface and source Cone identities.

## Construct Surface From a Collection of Surfaces

<span className="catalog-status catalog-status--current">Current</span>

Combines a required Surface list into a resulting Surface. Defaults are hide
originals `true`, delete originals `false`, sewing disabled, and sewing
tolerance `-1.0`. Briosa does not add topology or tolerance safeguards.

## Construct Surface Fit From Nominal Surfaces and Actual Data

<span className="catalog-status catalog-status--current">Current</span>

Requires one nominal Surface, an actual-data Point Name list, and a resulting
Surface. Despite the plural command label, the exact input argument is the
singular `Nominal Surface`.

## Construct Surface by Dissecting Surface(s)

<span className="catalog-status catalog-status--current">Current</span>

Requires an explicit dissection mode: `Entire Solid` or `Select Faces`. The
operator completes the selection in SpatialAnalyzer. The created surfaces are
returned from the exact output `Resultant Surfaces List`. Cancellation does not
prove that the interaction stopped.

## Construct Surfaces by Dissecting Surfaces from Ref List

<span className="catalog-status catalog-status--current">Current</span>

Requires a Surface list and returns `Resultant Surfaces List`. Briosa passes the
list through without adding volume or topology validation.

## Construct Surface From Point Groups

<span className="catalog-status catalog-status--current">Current</span>

Requires a Point Group list, B-Spline fit options, and a resulting Surface. The
shared `BSplineFitOptions` defaults apply when options are omitted. SA requires
enough points to form the surface; Briosa does not prevalidate that state.

## Construct Surfaces By Projecting Points

<span className="catalog-status catalog-status--current">Current</span>

Requires a projection-target Object list, a Point Name list, and a resulting
Surface identity.

## Construct surface by offsetting a surface

<span className="catalog-status catalog-status--current">Current</span>

Requires the exact `Reference Surface` list. `Surface offset` defaults to `0.0`
and `Hide original surface?` defaults to `true`. The unusual MP command and
argument capitalization are preserved.

## Construct Surface From Annotation Links

<span className="catalog-status catalog-status--current">Current</span>

Requires an Annotation list and a resulting Surface identity.

## Construct Geometry From Surfaces

<span className="catalog-status catalog-status--current">Current</span>

This is a deliberately partial SA 2026.1 contract. Briosa accepts a Surface
list, diameter bounds, optional reference frame and destination collection, and
a base name, then returns the created Geometry Object list. The MP default base
name is `Geometry Object`; both diameter bounds default to `0.0`.

The SA 2026.1 SDK cannot reliably select the MP's `Geometry Mode`. Licensed
validation found that typed and string attempts were accepted by the setter but
failed during MP execution, while omitting the argument succeeded and returned
cylinder geometry. Briosa therefore does not expose `Geometry Mode` and this
initial operation supports cylinder extraction only. Use another workflow when
line or circle extraction is required.

Briosa adds no operation-specific geometry safeguards to these commands, and
none is automatically replayed.

**API References:** [gRPC](/api/grpc/construction-operations-surfaces) · [.NET](/api/dotnet/construction-operations-surfaces) · [Python](/api/python/construction-operations-surfaces) · [JavaScript and TypeScript](/api/javascript/construction-operations-surfaces)
