---
title: Collection inspection
description: Supported SA 2026.1.0529.7 MP commands for enumerating collections.
---

# Collection inspection

These two read-only commands enumerate collections in the active
SpatialAnalyzer job for exact target `2026.1.0529.7`.

| MP command | Briosa RPC | Input | Result | Status |
| --- | --- | --- | --- | --- |
| [Get Number of Collections](#get-number-of-collections) | `AnalysisOperations/GetNumberOfCollections` | none | total count | **Supported** |
| [Get i-th Collection Name](#get-i-th-collection-name) | `AnalysisOperations/GetIThCollectionName` | zero-based collection index | collection name | **Supported** |

Both use global-state read scope and are safe to replay. Runtime policy can
still deny them.

## Get Number of Collections

- **Status:** Supported
- **Operation ID:** `analysis_operations.get_number_of_collections`

`Get Number of Collections` has no MP inputs. Briosa exposes it as
`briosa.AnalysisOperations/GetNumberOfCollections` and returns the optional MP
`Total Count` integer as `total_count`.

See the [operation guide](../../operations/get-number-of-collections.md) for a
request example and result-handling details.

## Get i-th Collection Name

- **Status:** Supported
- **Operation ID:** `analysis_operations.get_i_th_collection_name`

`Get i-th Collection Name` takes the zero-based MP `Collection Index` integer.
Briosa exposes it as `briosa.AnalysisOperations/GetIThCollectionName` and
returns the optional MP `Resultant Name` string as `resultant_name`.

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
