---
title: Construction Operations / Vectors and Vector Groups Commands
description: Canonical MP command dispositions for the Construction Operations / Vectors and Vector Groups subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Vectors and Vector Groups Commands

These entries cover the 14 commands observed under **Construction Operations
→ Vectors and Vector Groups** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>14</strong></div>
  <div><span>Current Server Operations</span><strong>10</strong></div>
  <div><span>Excluded or Unavailable</span><strong>4</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Vectors and Vector Groups" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct a Vector Group - Group to Group Compare" data-group="Construction Operations / Vectors and Vector Groups" data-status="current" data-validation="at-risk-point-group-fixture"><td><a href="#construct-a-vector-group---group-to-group-compare">Construct a Vector Group - Group to Group Compare</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - point-group fixture</td></tr>
<tr data-command="Construct a Vector Group - Area Profile Check" data-group="Construction Operations / Vectors and Vector Groups" data-status="current" data-validation="at-risk-vector-group-fixture"><td><a href="#construct-a-vector-group---area-profile-check">Construct a Vector Group - Area Profile Check</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - vector-group fixture</td></tr>
<tr data-command="Construct a Vector Group From Vector Name Ref List" data-group="Construction Operations / Vectors and Vector Groups" data-status="current" data-validation="at-risk-vector-fixture"><td><a href="#construct-a-vector-group-from-vector-name-ref-list">Construct a Vector Group From Vector Name Ref List</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - vector fixture</td></tr>
<tr data-command="Construct a Vector in Working Coordinates(Begin/Delta)" data-group="Construction Operations / Vectors and Vector Groups" data-status="current" data-validation="at-risk-vector-fixture"><td><a href="#construct-a-vector-in-working-coordinatesbegindelta">Construct a Vector in Working Coordinates(Begin/Delta)</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - vector fixture</td></tr>
<tr data-command="Construct a Vector in Working Coordinates(Begin/Direction/Mag.)" data-group="Construction Operations / Vectors and Vector Groups" data-status="current" data-validation="at-risk-vector-fixture"><td><a href="#construct-a-vector-in-working-coordinatesbegindirectionmag">Construct a Vector in Working Coordinates(Begin/Direction/Mag.)</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - vector fixture</td></tr>
<tr data-command="Construct Vectors WildCard Selection" data-group="Construction Operations / Vectors and Vector Groups" data-status="sdk-unavailable" data-validation="licensed-execution-probe-failed"><td><a href="#construct-vectors-wildcard-selection">Construct Vectors WildCard Selection</a></td><td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td><td>Licensed execution probe failed</td></tr>
<tr data-command="Construct a Vector Group From a Relationship" data-group="Construction Operations / Vectors and Vector Groups" data-status="current" data-validation="at-risk-relationship-fixture"><td><a href="#construct-a-vector-group-from-a-relationship">Construct a Vector Group From a Relationship</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - relationship fixture</td></tr>
<tr data-command="Make a Vector Name Ref List From a Vector Group" data-group="Construction Operations / Vectors and Vector Groups" data-status="current" data-validation="at-risk-vector-group-fixture"><td><a href="#make-a-vector-name-ref-list-from-a-vector-group">Make a Vector Name Ref List From a Vector Group</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - vector-group fixture</td></tr>
<tr data-command="Make a Vector Name Ref List - Runtime Select" data-group="Construction Operations / Vectors and Vector Groups" data-status="current" data-validation="at-risk-interactive-fixture"><td><a href="#make-a-vector-name-ref-list---runtime-select">Make a Vector Name Ref List - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive fixture</td></tr>
<tr data-command="Make a Collection Vector Group Name Ref List - Runtime Select" data-group="Construction Operations / Vectors and Vector Groups" data-status="current" data-validation="at-risk-interactive-fixture"><td><a href="#make-a-collection-vector-group-name-ref-list---runtime-select">Make a Collection Vector Group Name Ref List - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive fixture</td></tr>
<tr data-command="Make Vector Names Unique in Vector Group" data-group="Construction Operations / Vectors and Vector Groups" data-status="current" data-validation="at-risk-vector-group-fixture"><td><a href="#make-vector-names-unique-in-vector-group">Make Vector Names Unique in Vector Group</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - vector-group fixture</td></tr>
<tr data-command="Make a Vector from Doubles" data-group="Construction Operations / Vectors and Vector Groups" data-status="excluded" data-validation="not-applicable"><td><a href="#make-a-vector-from-doubles">Make a Vector from Doubles</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Decompose Vector into Doubles" data-group="Construction Operations / Vectors and Vector Groups" data-status="excluded" data-validation="not-applicable"><td><a href="#decompose-vector-into-doubles">Decompose Vector into Doubles</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Make a Normalized Vector" data-group="Construction Operations / Vectors and Vector Groups" data-status="excluded" data-validation="not-applicable"><td><a href="#make-a-normalized-vector">Make a Normalized Vector</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
</tbody>
</table>

## Construct a Vector Group - Group to Group Compare

<span className="catalog-status catalog-status--current">Current</span>

Constructs a Vector Group by comparing two Point Groups. The three deviation
tolerances default to `0.0`, which disables their corresponding checks. The
result reports vector count, RMS deviation, maximum absolute deviation, and
average deviation.

## Construct a Vector Group - Area Profile Check

<span className="catalog-status catalog-status--current">Current</span>

Constructs a resulting Vector Group from reference vectors and the Vector
Groups to check. Area radius and area tolerance both preserve the MP default
of `0.0`.

## Construct a Vector Group From Vector Name Ref List

<span className="catalog-status catalog-status--current">Current</span>

Constructs a resulting Vector Group from an explicitly supplied Vector Name
reference list.

## Construct a Vector in Working Coordinates(Begin/Delta)

<span className="catalog-status catalog-status--current">Current</span>

Constructs a named vector in a selected Vector Group from begin and delta
values expressed in working coordinates. `Is Magnitude Negative` defaults to
`false`.

## Construct a Vector in Working Coordinates(Begin/Direction/Mag.)

<span className="catalog-status catalog-status--current">Current</span>

Constructs a named vector from a working-coordinate begin value, direction,
and signed magnitude. The signed magnitude preserves the MP default of `0.0`.

## Construct Vectors WildCard Selection

<span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>

The exact SDK export does not provide a setter for `WildCard Selection Names`.
A licensed SA 2026.1.0529.7 probe tested the documented point-name setter with
valid source and destination Vector Groups. Every setter was accepted, but the
MP execution returned result code `-1`. Briosa therefore cannot commit a
reliable typed operation for this exact target.

Use `Make a Vector Name Ref List From a Vector Group` or the runtime-selection
operation, then pass the resulting list to `Construct a Vector Group From
Vector Name Ref List` when that workflow is suitable.

## Construct a Vector Group From a Relationship

<span className="catalog-status catalog-status--current">Current</span>

Constructs a named Vector Group from a selected Relationship.

## Make a Vector Name Ref List From a Vector Group

<span className="catalog-status catalog-status--current">Current</span>

Returns the Vector Name reference list currently contained in a selected
Vector Group.

## Make a Vector Name Ref List - Runtime Select

<span className="catalog-status catalog-status--current">Current</span>

Prompts the operator to select vectors in SpatialAnalyzer and returns their
Vector Name reference list. The user prompt defaults to the exact MP text
` Select Vectors (ENTER when done) `.

## Make a Collection Vector Group Name Ref List - Runtime Select

<span className="catalog-status catalog-status--current">Current</span>

Prompts the operator to select Vector Groups and returns their structured
collection and Vector Group identities. The prompt defaults to an empty string.

## Make Vector Names Unique in Vector Group

<span className="catalog-status catalog-status--current">Current</span>

Renames duplicate vector names within a selected Vector Group so the names are
unique. SpatialAnalyzer owns the mutation and resulting naming behavior.

## Make a Vector from Doubles

<span className="catalog-status catalog-status--excluded">Excluded</span>

Excluded because every supported client language can construct Briosa's
detached `Vector` value directly from three numbers without an RPC or SA state.

## Decompose Vector into Doubles

<span className="catalog-status catalog-status--excluded">Excluded</span>

Excluded because callers can read the three components directly from the
detached `Vector` value.

## Make a Normalized Vector

<span className="catalog-status catalog-status--excluded">Excluded</span>

Excluded in favor of the client language's ordinary vector-math facilities.
This calculation does not require SpatialAnalyzer state.

The selected mutation and interactive operations are never automatically
replayed after an unknown execution outcome.

**API References:** [gRPC](/api/grpc/construction-operations-vectors-and-vector-groups) · [.NET](/api/dotnet/construction-operations-vectors-and-vector-groups) · [Python](/api/python/construction-operations-vectors-and-vector-groups) · [JavaScript and TypeScript](/api/javascript/construction-operations-vectors-and-vector-groups)
