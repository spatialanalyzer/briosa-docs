---
title: Analysis Operations
description: Published MP command entries from the SA 2026.1.0529.7 Analysis Operations group.
---

# Analysis Operations

<p className="catalog-path">SA 2026.1.0529.7 <span aria-hidden="true">/</span> Analysis Operations</p>

<div className="catalog-context-grid">
  <div><span>Exact target</span><strong>2026.1.0529.7</strong></div>
  <div><span>Group evidence</span><strong><code>AnalysisOperations.txt</code></strong></div>
  <div><span>Published entries</span><strong>2 supported</strong></div>
</div>

The exact-target SDK output contains 112 step observations directly in this
root group and another 10 in the `Geometry Fit Profiles` subgroup. This page
currently publishes the two Analysis Operations commands supported by Briosa;
an absent command has no implied disposition during v0.x.

| MP command | Input | Result | Status |
| --- | --- | --- | --- |
| [Get Number of Collections](#get-number-of-collections) | none | total count | **Supported** |
| [Get i-th Collection Name](#get-i-th-collection-name) | zero-based collection index | collection name | **Supported** |

## Get Number of Collections

<span className="catalog-status catalog-status--supported">Supported</span>

<div className="catalog-command-meta">
  <div><span>Operation ID</span><code>analysis_operations.get_number_of_collections</code></div>
  <div><span>gRPC method</span><code>briosa.AnalysisOperations/GetNumberOfCollections</code></div>
</div>

`Get Number of Collections` has no MP inputs and returns the optional MP
`Total Count` integer as `total_count`.

See the [operation guide](../../operations/get-number-of-collections.md) for a
request example and result-handling details.

## Get i-th Collection Name

<span className="catalog-status catalog-status--supported">Supported</span>

<div className="catalog-command-meta">
  <div><span>Operation ID</span><code>analysis_operations.get_i_th_collection_name</code></div>
  <div><span>gRPC method</span><code>briosa.AnalysisOperations/GetIThCollectionName</code></div>
</div>

`Get i-th Collection Name` takes the zero-based MP `Collection Index` integer
and returns the optional MP `Resultant Name` string as `resultant_name`.

See the [operation guide](../../operations/get-i-th-collection-name.md) for a
request example and index-validation behavior. The
[authoritative protobuf](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/proto/briosa/analysis_operations.proto)
lives in the server repository.

The count and a later indexed lookup are separate MP executions. Serialization
prevents SDK call interleaving, but it does not guarantee that another user or
automation client cannot change the collection list between those calls.

:::caution[Returned values are application data]

Do not include collection counts, collection names, raw arguments, or complete
logs in public issues or validation reports.

:::
