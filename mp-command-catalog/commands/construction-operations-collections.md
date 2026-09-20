---
title: Construction Operations / Collections Commands
description: Canonical MP command dispositions for the Construction Operations / Collections subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Collections Commands

These entries cover the five commands observed under **Construction
Operations → Collections** in SA 2026.1.0529.7. `Get Active Collection Name`
is available in the current Briosa server; the other four operations are also included in Briosa Server 0.7.0.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>5</strong></div>
  <div><span>Current Server Operations</span><strong>5</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Construction Operations / Collections" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Set (or construct) default collection" data-group="Construction Operations / Collections" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#set-or-construct-default-collection">Set (or construct) default collection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Set (or construct) default collection" data-group="Construction Operations / Collections" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-or-construct-default-collection">Set (or construct) default collection</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Construct Collection" data-group="Construction Operations / Collections" data-status="current" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-collection">Construct Collection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct Collection" data-group="Construction Operations / Collections" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-collection">Construct Collection</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Active Collection Name" data-group="Construction Operations / Collections" data-status="current" data-validation="licensed-exact-target-validation-complete">
  <td><a href="#get-active-collection-name">Get Active Collection Name</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>Licensed exact-target validation complete</td>
</tr>
<tr data-command="Get Active Collection Name" data-group="Construction Operations / Collections" data-status="current" data-validation="limited-local-licensed-smoke" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-active-collection-name">Get Active Collection Name</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Limited local licensed smoke test</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Delete Collection" data-group="Construction Operations / Collections" data-status="current" data-validation="at-risk-destructive-fixture-validation-required">
  <td><a href="#delete-collection">Delete Collection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - destructive fixture validation required</td>
</tr>
<tr data-command="Delete Collection" data-group="Construction Operations / Collections" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#delete-collection">Delete Collection</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Delete Collections by Wildcard" data-group="Construction Operations / Collections" data-status="current" data-validation="at-risk-destructive-fixture-validation-required">
  <td><a href="#delete-collections-by-wildcard">Delete Collections by Wildcard</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - destructive fixture validation required</td>
</tr>
<tr data-command="Delete Collections by Wildcard" data-group="Construction Operations / Collections" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#delete-collections-by-wildcard">Delete Collections by Wildcard</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Set (or construct) default collection

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Collections" data-validation="at-risk-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Collections</span>
  <span className="catalog-target-validation">At risk fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Collections" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Collections</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-collections#set-or-construct-default-collection) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-collections#set-or-construct-default-collection) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-collections#set-or-construct-default-collection) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-collections#set-or-construct-default-collection)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Collection Name` | Collection Name | Empty | Required |

Sets the named collection as the active default collection. SpatialAnalyzer
constructs the collection when it does not already exist. The collection-name
field is required, but its supplied value is passed through without an
additional Briosa validation policy.

[gRPC](/api/grpc/construction-operations-collections#set-or-construct-default-collection) · [.NET](/api/dotnet/construction-operations-collections#set-or-construct-default-collection) · [Python](/api/python/construction-operations-collections#set-or-construct-default-collection) · [JavaScript](/api/javascript/construction-operations-collections#set-or-construct-default-collection)

## Construct Collection

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Collections" data-validation="at-risk-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Collections</span>
  <span className="catalog-target-validation">At risk fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Collections" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Collections</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-collections#construct-collection) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-collections#construct-collection) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-collections#construct-collection) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-collections#construct-collection)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

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

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Collections" data-validation="licensed-exact-target-validation-complete">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Collections</span>
  <span className="catalog-target-validation">Licensed exact target validation complete</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Collections" data-validation="limited-local-licensed-smoke">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Collections</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-collections#get-active-collection-name) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-collections#get-active-collection-name) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-collections#get-active-collection-name) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-collections#get-active-collection-name)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. A limited local licensed smoke test covered this read-only operation; it did not validate all operations or fixtures.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Exact MP Argument | MP Type | Briosa Result |
| --- | --- | --- | --- |
| Output | `Currently Active Collection Name` | String | Required string |

Returns the name of SpatialAnalyzer's active collection. The exact SA
2026.1.0529.7 SDK observation retrieves this output with `GetStringArg`, and
the current Briosa operation preserves that string contract. This read-only
operation is safe to replay.

[gRPC](/api/grpc/construction-operations-collections#get-active-collection-name) · [.NET](/api/dotnet/construction-operations-collections#get-active-collection-name) · [Python](/api/python/construction-operations-collections#get-active-collection-name) · [JavaScript](/api/javascript/construction-operations-collections#get-active-collection-name)

## Delete Collection

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Collections" data-validation="at-risk-destructive-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Collections</span>
  <span className="catalog-target-validation">At risk destructive fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Collections" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Collections</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-collections#delete-collection) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-collections#delete-collection) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-collections#delete-collection) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-collections#delete-collection)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Exact MP Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Name of Collection to Delete` | Collection Name | Empty | Required |

Deletes one named collection. The collection-name field is required and passed
through to SpatialAnalyzer. Briosa never automatically replays this destructive
operation after an unknown execution outcome.

[gRPC](/api/grpc/construction-operations-collections#delete-collection) · [.NET](/api/dotnet/construction-operations-collections#delete-collection) · [Python](/api/python/construction-operations-collections#delete-collection) · [JavaScript](/api/javascript/construction-operations-collections#delete-collection)

## Delete Collections by Wildcard

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Collections" data-validation="at-risk-destructive-fixture-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Collections</span>
  <span className="catalog-target-validation">At risk destructive fixture validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Collections" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Collections</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-collections#delete-collections-by-wildcard) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-collections#delete-collections-by-wildcard) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-collections#delete-collections-by-wildcard) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-collections#delete-collections-by-wildcard)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

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
