---
title: Construction Operations / Folders Commands
description: Canonical MP command dispositions for the Construction Operations / Folders subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Folders Commands

These entries cover the two commands observed under **Construction Operations
→ Folders** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>2</strong></div>
  <div><span>Current Server Operations</span><strong>2</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Folders" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Folder(s)" data-group="Construction Operations / Folders" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-folders">Construct Folder(s)</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Delete Folders by Wildcard" data-group="Construction Operations / Folders" data-status="current" data-validation="at-risk-destructive-fixture-validation-required">
  <td><a href="#delete-folders-by-wildcard">Delete Folders by Wildcard</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - destructive fixture validation required</td>
</tr>
</tbody>
</table>

## Construct Folder(s)

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Folder Path` | String | Empty | Required |

Constructs a folder or a nested folder hierarchy in the SpatialAnalyzer tree.
SpatialAnalyzer accepts one or two colons between path segments, such as
`A:B:C` or `A::B::C`. The field is required, but Briosa passes its supplied
value through unchanged. Existing folders are left in place by the MP command.

[gRPC](/api/grpc/construction-operations-folders#construct-folders) · [.NET](/api/dotnet/construction-operations-folders#construct-folders) · [Python](/api/python/construction-operations-folders#construct-folders) · [JavaScript](/api/javascript/construction-operations-folders#construct-folders)

## Delete Folders by Wildcard

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Search String` | String | Empty | Required |
| Input | `Case Sensitive Search` | Boolean | true | true |
| Input | `Allow Deleting all Folders` | Boolean | false | false |
| Output | `Num Deleted` | Integer | - | Returned |
| Output | `Num Failed` | Integer | - | Returned |

Deletes folders matching a SpatialAnalyzer wildcard search and returns both
successful and failed deletion counts. The search value is passed through
unchanged. The MP command itself fails when every folder matches while `Allow
Deleting all Folders` is false. Briosa preserves that default and never
automatically replays this destructive operation after an unknown outcome.

[gRPC](/api/grpc/construction-operations-folders#delete-folders-by-wildcard) · [.NET](/api/dotnet/construction-operations-folders#delete-folders-by-wildcard) · [Python](/api/python/construction-operations-folders#delete-folders-by-wildcard) · [JavaScript](/api/javascript/construction-operations-folders#delete-folders-by-wildcard)
