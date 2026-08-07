---
title: Construction Operations / Collections
description: Published MP command entries from the SA 2026.1.0529.7 Construction Operations / Collections subgroup.
---

# Construction Operations / Collections

<p className="catalog-path">SA 2026.1.0529.7 <span aria-hidden="true">/</span> Construction Operations <span aria-hidden="true">/</span> Collections</p>

<div className="catalog-context-grid">
  <div><span>Exact target</span><strong>2026.1.0529.7</strong></div>
  <div><span>Group evidence</span><strong><code>ConstructionOperations_Collections.txt</code></strong></div>
  <div><span>Published entries</span><strong>1 supported</strong></div>
</div>

The exact-target SDK output contains five step observations in this subgroup.
This page currently publishes the one Collections command supported by Briosa;
an absent command has no implied disposition during v0.x.

| MP command | Input | Result | Status |
| --- | --- | --- | --- |
| [Get Active Collection Name](#get-active-collection-name) | none | active collection name | **Supported** |

## Get Active Collection Name

<span className="catalog-status catalog-status--supported">Supported</span>

<div className="catalog-command-meta">
  <div><span>Operation ID</span><code>construction_operations.get_active_collection_name</code></div>
  <div><span>gRPC method</span><code>briosa.ConstructionOperations/GetActiveCollectionName</code></div>
</div>

`Get Active Collection Name` has no MP inputs and returns the optional
`Currently Active Collection Name` string.

The exact-target SDK evidence uses the string getter for this result. Briosa
does not import the different collection-name getter used by older secondary
evidence.

The authoritative server documentation records the command's
[SDK sequence and validation](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/operations/active-context.md).

:::caution[Returned values are application data]

Briosa returns the active collection name to the caller but does not log it by
default. Do not include collection names in public validation evidence.

:::
