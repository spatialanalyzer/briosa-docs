---
title: Construction Operations Commands
description: Canonical SpatialAnalyzer MP command dispositions for the reviewed Construction Operations root group.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations Commands

These entries cover the 14 commands observed directly in the Construction
Operations root group for SA 2026.1.0529.7. The group's subgroups are reviewed
separately. Current entries are included in Briosa Server 0.5.1; runtime policy and readiness still apply.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>14</strong></div>
  <div><span>Current Server Operations</span><strong>14</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Mirror Object(s)" data-group="Construction Operations" data-status="current" data-validation="licensed-setter-probe-fixture-execution-required">
  <td><a href="#mirror-objects">Mirror Object(s)</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>Licensed setter probe; fixture execution required</td>
</tr>
<tr data-command="Copy Object" data-group="Construction Operations" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#copy-object">Copy Object</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Copy Objects to a collection" data-group="Construction Operations" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#copy-objects-to-a-collection">Copy Objects to a collection</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Move Objects to a collection" data-group="Construction Operations" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#move-objects-to-a-collection">Move Objects to a collection</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Copy Objects - Point to Point Delta" data-group="Construction Operations" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#copy-objects---point-to-point-delta">Copy Objects - Point to Point Delta</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Move Objects - Point to Point Delta" data-group="Construction Operations" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#move-objects---point-to-point-delta">Move Objects - Point to Point Delta</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Rename Point" data-group="Construction Operations" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#rename-point">Rename Point</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Rename Points with Name Pattern" data-group="Construction Operations" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#rename-points-with-name-pattern">Rename Points with Name Pattern</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Rename Collection" data-group="Construction Operations" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#rename-collection">Rename Collection</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Rename Object" data-group="Construction Operations" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#rename-object">Rename Object</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Rename Item" data-group="Construction Operations" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#rename-item">Rename Item</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Delete Points" data-group="Construction Operations" data-status="current" data-validation="at-risk-destructive-fixture-validation-required">
  <td><a href="#delete-points">Delete Points</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - destructive fixture validation required</td>
</tr>
<tr data-command="Delete Points WildCard Selection" data-group="Construction Operations" data-status="current" data-validation="at-risk-destructive-fixture-validation-required">
  <td><a href="#delete-points-wildcard-selection">Delete Points WildCard Selection</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - destructive fixture validation required</td>
</tr>
<tr data-command="Construct Objects From Surface Faces - Runtime Select" data-group="Construction Operations" data-status="current" data-validation="at-risk-interactive-fixture-validation-required">
  <td><a href="#construct-objects-from-surface-faces---runtime-select">Construct Objects From Surface Faces - Runtime Select</a></td><td>Construction Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive fixture validation required</td>
</tr>
</tbody>
</table>

## Mirror Object(s)

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>Licensed setter probe; fixture execution required</strong></div>
  <div><span>SDK Observation</span><strong>Present with recovered plane binding</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Object(s)` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Frame Name` | Collection Object Name | See MP definition | Required |
| Input | `Frame Plane to Mirror Around` | MP Plane Type | Not exported | Required |
| Input | `Copy? [FALSE = Move]` | Boolean | true | true |

### Briosa Disposition

Mirrors one or more objects across the `XY`, `XZ`, or `YZ` plane of a selected
frame. A licensed SA 2026.1.0529.7 setter-only probe confirmed that the exact
SDK accepts all three documented plane values through `SetStringArg`, despite
the MP Editor export marking this argument `NOT_SUPPORTED`. The probe never
called `ExecuteStep`; actual copy and move behavior still requires a protected
fixture scenario.

**API References:** [gRPC](/api/grpc/construction-operations#mirror-objects) · [.NET](/api/dotnet/construction-operations#mirror-objects) · [Python](/api/python/construction-operations#mirror-objects) · [JavaScript and TypeScript](/api/javascript/construction-operations#mirror-objects)

## Copy Object

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Source Object` | Collection Object Name | See MP definition | Required |
| Input | `New Object Name` | Collection Object Name | See MP definition | Required |
| Input | `Overwrite if exists?` | Boolean | false | false |

### Briosa Disposition

Copies one collection object to a caller-supplied object name.

**API References:** [gRPC](/api/grpc/construction-operations#copy-object) · [.NET](/api/dotnet/construction-operations#copy-object) · [Python](/api/python/construction-operations#copy-object) · [JavaScript and TypeScript](/api/javascript/construction-operations#copy-object)

## Copy Objects to a collection

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Source Objects` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Destination Collection Name` | Collection Name | See MP definition | Required |

### Briosa Disposition

Copies selected objects into a destination collection. SpatialAnalyzer creates
the destination collection when it does not already exist.

**API References:** [gRPC](/api/grpc/construction-operations#copy-objects-to-a-collection) · [.NET](/api/dotnet/construction-operations#copy-objects-to-a-collection) · [Python](/api/python/construction-operations#copy-objects-to-a-collection) · [JavaScript and TypeScript](/api/javascript/construction-operations#copy-objects-to-a-collection)

## Move Objects to a collection

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Source Objects` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Destination Collection Name` | Collection Name | See MP definition | Required |

### Briosa Disposition

Moves selected objects into a destination collection.

**API References:** [gRPC](/api/grpc/construction-operations#move-objects-to-a-collection) · [.NET](/api/dotnet/construction-operations#move-objects-to-a-collection) · [Python](/api/python/construction-operations#move-objects-to-a-collection) · [JavaScript and TypeScript](/api/javascript/construction-operations#move-objects-to-a-collection)

## Copy Objects - Point to Point Delta

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Objects to Copy` | Collection Object Name Ref List | See MP definition | Required |
| Input | `First Delta Point` | Point Name | See MP definition | Required |
| Input | `Second Delta Point` | Point Name | See MP definition | Required |
| Input | `Destination Collection Name (Optional)` | Collection Name | Empty | Omitted |

### Briosa Disposition

Copies selected objects by the delta from the first point to the second point,
optionally placing the copies in another collection.

**API References:** [gRPC](/api/grpc/construction-operations#copy-objects---point-to-point-delta) · [.NET](/api/dotnet/construction-operations#copy-objects---point-to-point-delta) · [Python](/api/python/construction-operations#copy-objects---point-to-point-delta) · [JavaScript and TypeScript](/api/javascript/construction-operations#copy-objects---point-to-point-delta)

## Move Objects - Point to Point Delta

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Objects to Move` | Collection Object Name Ref List | See MP definition | Required |
| Input | `First Delta Point` | Point Name | See MP definition | Required |
| Input | `Second Delta Point` | Point Name | See MP definition | Required |

### Briosa Disposition

Moves selected objects by the delta from the first point to the second point.

**API References:** [gRPC](/api/grpc/construction-operations#move-objects---point-to-point-delta) · [.NET](/api/dotnet/construction-operations#move-objects---point-to-point-delta) · [Python](/api/python/construction-operations#move-objects---point-to-point-delta) · [JavaScript and TypeScript](/api/javascript/construction-operations#move-objects---point-to-point-delta)

## Rename Point

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Original Point Name` | Point Name | See MP definition | Required |
| Input | `New Point Name` | Point Name | See MP definition | Required |
| Input | `Overwrite if exists?` | Boolean | false | false |

### Briosa Disposition

Renames one point and optionally permits replacement of an existing target.

**API References:** [gRPC](/api/grpc/construction-operations#rename-point) · [.NET](/api/dotnet/construction-operations#rename-point) · [Python](/api/python/construction-operations#rename-point) · [JavaScript and TypeScript](/api/javascript/construction-operations#rename-point)

## Rename Points with Name Pattern

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Point Names` | Point Name Ref List | See MP definition | Required |
| Input | `Name Pattern` | String | `NewName_%d` | `NewName_%d` |
| Input | `Start Value` | Integer | 1 | 1 |

### Briosa Disposition

Renames a list of points using a numbered `%d` name pattern.

**API References:** [gRPC](/api/grpc/construction-operations#rename-points-with-name-pattern) · [.NET](/api/dotnet/construction-operations#rename-points-with-name-pattern) · [Python](/api/python/construction-operations#rename-points-with-name-pattern) · [JavaScript and TypeScript](/api/javascript/construction-operations#rename-points-with-name-pattern)

## Rename Collection

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Original Collection Name` | Collection Name | See MP definition | Required |
| Input | `New Collection Name` | Collection Name | See MP definition | Required |

### Briosa Disposition

Renames one collection.

**API References:** [gRPC](/api/grpc/construction-operations#rename-collection) · [.NET](/api/dotnet/construction-operations#rename-collection) · [Python](/api/python/construction-operations#rename-collection) · [JavaScript and TypeScript](/api/javascript/construction-operations#rename-collection)

## Rename Object

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Original Object Name` | Collection Object Name | See MP definition | Required |
| Input | `New Object Name` | Collection Object Name | See MP definition | Required |
| Input | `Overwrite if exists?` | Boolean | false | false |

### Briosa Disposition

Renames a collection object. Callers should provide the object type in the
structured name so SpatialAnalyzer does not select a same-named object of a
different type.

**API References:** [gRPC](/api/grpc/construction-operations#rename-object) · [.NET](/api/dotnet/construction-operations#rename-object) · [Python](/api/python/construction-operations#rename-object) · [JavaScript and TypeScript](/api/javascript/construction-operations#rename-object)

## Rename Item

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Original Item Name` | Collection Object Name (item domain) | See MP definition | Required |
| Input | `New Item Name` | Collection Object Name (item domain) | See MP definition | Required |
| Input | `Overwrite if exists?` | Boolean | false | false |

### Briosa Disposition

Renames one SpatialAnalyzer collection item, including item types such as
charts, dimensions, events, pictures, relationships, and reports. Briosa uses
`CollectionItemName` so this broader item domain remains distinct from geometry
objects.

**API References:** [gRPC](/api/grpc/construction-operations#rename-item) · [.NET](/api/dotnet/construction-operations#rename-item) · [Python](/api/python/construction-operations#rename-item) · [JavaScript and TypeScript](/api/javascript/construction-operations#rename-item)

## Delete Points

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - destructive fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Point Names` | Point Name Ref List | See MP definition | Required |

### Briosa Disposition

Deletes the selected points. Briosa does not automatically retry this
destructive operation after an unknown execution outcome.

**API References:** [gRPC](/api/grpc/construction-operations#delete-points) · [.NET](/api/dotnet/construction-operations#delete-points) · [Python](/api/python/construction-operations#delete-points) · [JavaScript and TypeScript](/api/javascript/construction-operations#delete-points)

## Delete Points WildCard Selection

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - destructive fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Groups to Delete From` | Collection Object Name Ref List | See MP definition | Required |
| Input | `WildCard Selection Names` | Point Name | See MP definition | Required |

### Briosa Disposition

Deletes points matching a SpatialAnalyzer wildcard point-name selection within
the supplied groups. Briosa does not automatically retry this destructive
operation after an unknown execution outcome.

**API References:** [gRPC](/api/grpc/construction-operations#delete-points-wildcard-selection) · [.NET](/api/dotnet/construction-operations#delete-points-wildcard-selection) · [Python](/api/python/construction-operations#delete-points-wildcard-selection) · [JavaScript and TypeScript](/api/javascript/construction-operations#delete-points-wildcard-selection)

## Construct Objects From Surface Faces - Runtime Select

<span className="catalog-status catalog-status--current">Current</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div><div><span>MP Group Path</span><strong>Construction Operations</strong></div>
  <div><span>Validation</span><strong>At Risk - interactive fixture validation required</strong></div><div><span>SDK Observation</span><strong>Present with one erroneous exported setter</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Object Type` | Construct Object Type | Any | Required |
| Input | `Point Offset` | Double | 0.000000 | 0.000000 |

### Briosa Disposition

SpatialAnalyzer uses this command to prompt an operator to select CAD surface
faces and construct geometry or points. Maintainer inspection of the exact MP
Editor command confirmed that it has one `Object Type` dropdown, with choices
from `Any` through `Vertex Points`, followed by `Point Offset`. A second
exported `Object Type` setter with `Entire Solid` and `Select Faces` choices is
an SA View SDK Code export defect and is not part of the command signature.

Included in Briosa Server 0.5.1 because callers may intentionally coordinate an
operator-driven CAD selection workflow. Briosa requires `Object Type` rather
than defaulting it to `Any`; choosing a specific type avoids the additional
type-selection dialog, while callers can still select `Any` when that dialog is
desired. The surface-face selection itself remains interactive.

Use explicit construction commands or an existing MP workflow when the
geometry type and selection process are already known.

**API References:** [gRPC](/api/grpc/construction-operations#construct-objects-from-surface-faces---runtime-select) · [.NET](/api/dotnet/construction-operations#construct-objects-from-surface-faces---runtime-select) · [Python](/api/python/construction-operations#construct-objects-from-surface-faces---runtime-select) · [JavaScript and TypeScript](/api/javascript/construction-operations#construct-objects-from-surface-faces---runtime-select)
