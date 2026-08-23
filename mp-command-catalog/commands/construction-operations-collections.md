---
title: Construction Operations / Collections Commands
description: Canonical MP command dispositions for the Construction Operations / Collections subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Collections Commands

These entries cover the five commands observed under **Construction
Operations → Collections** in SA 2026.1.0529.7. `Get Active Collection Name`
is available in the current Briosa server; the remaining four contracts are
selected for the next release.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>5</strong></div>
  <div><span>Current or Next</span><strong>5</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Collections" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Set (or construct) default collection" data-group="Construction Operations / Collections" data-status="next" data-validation="at-risk-fixture-validation-required">
  <td><a href="#set-or-construct-default-collection">Set (or construct) default collection</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct Collection" data-group="Construction Operations / Collections" data-status="next" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-collection">Construct Collection</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Get Active Collection Name" data-group="Construction Operations / Collections" data-status="current" data-validation="licensed-exact-target-validation-complete">
  <td><a href="#get-active-collection-name">Get Active Collection Name</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>Licensed exact-target validation complete</td>
</tr>
<tr data-command="Delete Collection" data-group="Construction Operations / Collections" data-status="next" data-validation="at-risk-destructive-fixture-validation-required">
  <td><a href="#delete-collection">Delete Collection</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - destructive fixture validation required</td>
</tr>
<tr data-command="Delete Collections by Wildcard" data-group="Construction Operations / Collections" data-status="next" data-validation="at-risk-destructive-fixture-validation-required">
  <td><a href="#delete-collections-by-wildcard">Delete Collections by Wildcard</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - destructive fixture validation required</td>
</tr>
</tbody>
</table>

## Set (or construct) default collection

<span className="catalog-status catalog-status--next">Next</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Collection Name` | Collection Name | Empty | Required |

Sets the named collection as the active default collection. SpatialAnalyzer
constructs the collection when it does not already exist. The collection-name
field is required, but its supplied value is passed through without an
additional Briosa validation policy.

[gRPC](/api/grpc/construction-operations-collections#set-or-construct-default-collection) · [.NET](/api/dotnet/construction-operations-collections#set-or-construct-default-collection) · [Python](/api/python/construction-operations-collections#set-or-construct-default-collection) · [JavaScript](/api/javascript/construction-operations-collections#set-or-construct-default-collection)

## Construct Collection

<span className="catalog-status catalog-status--next">Next</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Collection Name` | Collection Name | Empty | Required |
| Input | `Folder Path` | String | Empty | Empty |
| Input | `Make Default Collection?` | Boolean | false | false |

Constructs a collection, optionally places it under a folder path, and can make
it the active default collection. The collection name is required; the other
two inputs retain the MP defaults.

[gRPC](/api/grpc/construction-operations-collections#construct-collection) · [.NET](/api/dotnet/construction-operations-collections#construct-collection) · [Python](/api/python/construction-operations-collections#construct-collection) · [JavaScript](/api/javascript/construction-operations-collections#construct-collection)

## Get Active Collection Name

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | Briosa Result |
| --- | --- | --- | --- |
| Output | `Currently Active Collection Name` | String | Required string |

Returns the name of SpatialAnalyzer's active collection. The exact SA
2026.1.0529.7 SDK observation retrieves this output with `GetStringArg`, and
the current Briosa operation preserves that string contract. This read-only
operation is safe to replay.

[gRPC](/api/grpc/construction-operations-collections#get-active-collection-name) · [.NET](/api/dotnet/construction-operations-collections#get-active-collection-name) · [Python](/api/python/construction-operations-collections#get-active-collection-name) · [JavaScript](/api/javascript/construction-operations-collections#get-active-collection-name)

## Delete Collection

<span className="catalog-status catalog-status--next">Next</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Name of Collection to Delete` | Collection Name | Empty | Required |

Deletes one named collection. The collection-name field is required and passed
through to SpatialAnalyzer. Briosa never automatically replays this destructive
operation after an unknown execution outcome.

[gRPC](/api/grpc/construction-operations-collections#delete-collection) · [.NET](/api/dotnet/construction-operations-collections#delete-collection) · [Python](/api/python/construction-operations-collections#delete-collection) · [JavaScript](/api/javascript/construction-operations-collections#delete-collection)

## Delete Collections by Wildcard

<span className="catalog-status catalog-status--next">Next</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Search String` | String | Empty | Required |
| Input | `Case Sensitive Search` | Boolean | true | true |
| Input | `Allow Deleting all Collections` | Boolean | false | false |
| Output | `Num Deleted` | Integer | - | Returned |
| Output | `Num Failed` | Integer | - | Returned |

Deletes collections whose names match a SpatialAnalyzer wildcard search and
returns both the successful and failed deletion counts. Briosa requires a
search-string field and keeps the MP default for `Allow Deleting all
Collections`: `false`. Empty and other questionable search values are passed
through to SpatialAnalyzer. Callers must opt in when a search is allowed to
delete every collection. Briosa never automatically replays this destructive
operation after an unknown execution outcome.

[gRPC](/api/grpc/construction-operations-collections#delete-collections-by-wildcard) · [.NET](/api/dotnet/construction-operations-collections#delete-collections-by-wildcard) · [Python](/api/python/construction-operations-collections#delete-collections-by-wildcard) · [JavaScript](/api/javascript/construction-operations-collections#delete-collections-by-wildcard)
