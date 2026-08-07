---
title: Utility Operations
description: Published MP command entries from the SA 2026.1.0529.7 Utility Operations group.
---

# Utility Operations

<p className="catalog-path">SA 2026.1.0529.7 <span aria-hidden="true">/</span> Utility Operations</p>

<div className="catalog-context-grid">
  <div><span>Exact target</span><strong>2026.1.0529.7</strong></div>
  <div><span>Group evidence</span><strong><code>UtilityOperations.txt</code></strong></div>
  <div><span>Published entries</span><strong>1 supported</strong></div>
</div>

The exact-target SDK output contains 31 step observations directly in this
root group and 58 more across its subgroups. This page currently publishes the
one root Utility Operations command supported by Briosa; an absent command has
no implied disposition during v0.x.

| MP command | Input | Result | Status |
| --- | --- | --- | --- |
| [Get Working Frame Properties](#get-working-frame-properties) | none | working-frame context | **Supported** |

## Get Working Frame Properties

<span className="catalog-status catalog-status--supported">Supported</span>

<div className="catalog-command-meta">
  <div><span>Operation ID</span><code>utility_operations.get_working_frame_properties</code></div>
  <div><span>gRPC method</span><code>briosa.UtilityOperations/GetWorkingFrameProperties</code></div>
</div>

`Get Working Frame Properties` has no MP inputs. Its result contains the
optional `Frame Name` and `Collection Name` strings followed by the typed
`Working Frame` value.

Live exact-target validation returned non-empty collection and object names for
the working frame without the normally embedded type literal. This operation
may supply the `Frame` type only in that specific omitted-literal case. An
embedded type still wins, and an unknown embedded type still fails closed.

The authoritative server documentation records the complete
[SDK sequence and validation](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/operations/active-context.md).

## Subgroups

- [Units](./utility-operations/units.md) currently contains one supported
  command for reading the active unit selections.

:::caution[Returned values are application data]

Do not include frame names, collection names, or structured object names in
public validation evidence.

:::
