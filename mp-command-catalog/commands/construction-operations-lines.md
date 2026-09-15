---
title: Construction Operations / Lines Commands
description: Canonical MP command dispositions for the Construction Operations / Lines subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Lines Commands

These entries cover the nine commands observed under **Construction Operations
→ Lines** in SA 2026.1.0529.7. Every command is included in Briosa Server 0.5.1.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>9</strong></div>
  <div><span>Current Server Operations</span><strong>9</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Lines" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Line 2 Points" data-group="Construction Operations / Lines" data-status="current" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-line-2-points">Construct Line 2 Points</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Line 2 Points (Vector Notation)" data-group="Construction Operations / Lines" data-status="current" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-line-2-points-vector-notation">Construct Line 2 Points (Vector Notation)</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Line Normal to Object" data-group="Construction Operations / Lines" data-status="current" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-line-normal-to-object">Construct Line Normal to Object</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Line - Project Line to Object Reference Plane" data-group="Construction Operations / Lines" data-status="current" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-line---project-line-to-object-reference-plane">Construct Line - Project Line to Object Reference Plane</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Line - Normal to Object through Point" data-group="Construction Operations / Lines" data-status="current" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-line---normal-to-object-through-point">Construct Line - Normal to Object through Point</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Line 2 Plane Intersection" data-group="Construction Operations / Lines" data-status="current" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-line-2-plane-intersection">Construct Line 2 Plane Intersection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Lines From Surface Faces - Runtime Select" data-group="Construction Operations / Lines" data-status="current" data-validation="at-risk-interactive-fixture-validation-required"><td><a href="#construct-lines-from-surface-faces---runtime-select">Construct Lines From Surface Faces - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive fixture validation required</td></tr>
<tr data-command="Construct Line Center of Slot" data-group="Construction Operations / Lines" data-status="current" data-validation="at-risk-fixture-validation-required"><td><a href="#construct-line-center-of-slot">Construct Line Center of Slot</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td></tr>
<tr data-command="Construct Line From Instrument Shot" data-group="Construction Operations / Lines" data-status="current" data-validation="at-risk-instrument-measurement-fixture-validation-required"><td><a href="#construct-line-from-instrument-shot">Construct Line From Instrument Shot</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - instrument-measurement fixture validation required</td></tr>
</tbody>
</table>

## Construct Line 2 Points

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Line Name` | Collection Object Name | Empty line identity | Required |
| Input | `First Point` | Point Name | Empty | Required |
| Input | `Second Point` | Point Name | Empty | Required |

Constructs a directed line from the first named point to the second. Briosa
passes coincident points through to SpatialAnalyzer.

## Construct Line 2 Points (Vector Notation)

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Line Name` | Collection Object Name | Empty line identity | Required |
| Input | `First Vector` | Vector | zero vector | Required |
| Input | `Second Vector` | Vector | zero vector | Required |

Constructs the same directed line using two coordinate vectors. Vector values
are passed through unchanged.

## Construct Line Normal to Object

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Line Name` | Collection Object Name | Empty line identity | Required |
| Input | `Line Length` | Double | 1 | 1 |
| Input | `Object` | Collection Object Name | Empty, Any object type | Required |

Constructs a line along the selected object's internal Z direction. Any line
length is passed through for SpatialAnalyzer to evaluate.

## Construct Line - Project Line to Object Reference Plane

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Line To Create` | Collection Object Name | Empty line identity | Required |
| Input | `Line To Project` | Collection Object Name | Empty line identity | Required |
| Input | `Object to project to` | Collection Object Name | Empty, Any object type | Required |

The final input retains the MP's `Any` object domain. Briosa does not narrow it
to planes or add a client-side object-type safeguard.

## Construct Line - Normal to Object through Point

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Line To Create` | Collection Object Name | Empty line identity | Required |
| Input | `Object Name` | Collection Object Name | Empty, Any object type | Required |
| Input | `Point Name` | Point Name | Empty | Required |

Constructs a line through the named point using the selected object's internal
Z direction.

## Construct Line 2 Plane Intersection

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Line Name` | Collection Object Name | Empty line identity | Required |
| Input | `First Plane` | Collection Object Name | Empty plane identity | Required |
| Input | `Second Plane` | Collection Object Name | Empty plane identity | Required |

Parallel or otherwise unsuitable planes are passed to SpatialAnalyzer rather
than rejected by Briosa.

## Construct Lines From Surface Faces - Runtime Select

<span className="catalog-status catalog-status--current">Current</span>

This operation has no MP arguments. It opens an interactive SpatialAnalyzer
selection workflow. Cancellation does not prove that the interaction stopped,
and Briosa never automatically replays it.

## Construct Line Center of Slot

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Line Name` | Collection Object Name | Empty line identity | Required |
| Input | `Slot Name` | Collection Object Name | Empty slot identity | Required |

Constructs a line at the center of an existing slot.

## Construct Line From Instrument Shot

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Point Name` | Point Name | Empty | Required |
| Input | `Observation Index` | Integer | 0 | 0 |
| Input | `Line Name` | Collection Object Name | Empty line identity | Required |

Constructs a line from the selected point observation. Licensed validation
requires a suitable instrument-measurement fixture.

## API References

All nine contracts are published together in the [gRPC](/api/grpc/construction-operations-lines), [.NET](/api/dotnet/construction-operations-lines), [Python](/api/python/construction-operations-lines), and [JavaScript/TypeScript](/api/javascript/construction-operations-lines) references.
