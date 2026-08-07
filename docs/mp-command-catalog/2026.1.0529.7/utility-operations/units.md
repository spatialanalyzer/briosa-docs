---
title: Utility Operations / Units
description: Published MP command entries from the SA 2026.1.0529.7 Utility Operations / Units subgroup.
---

# Utility Operations / Units

<p className="catalog-path">SA 2026.1.0529.7 <span aria-hidden="true">/</span> Utility Operations <span aria-hidden="true">/</span> Units</p>

<div className="catalog-context-grid">
  <div><span>Exact target</span><strong>2026.1.0529.7</strong></div>
  <div><span>Group evidence</span><strong><code>UtilityOperations_Units.txt</code></strong></div>
  <div><span>Published entries</span><strong>1 supported</strong></div>
</div>

The exact-target SDK output contains five step observations in this subgroup.
This page currently publishes the one Units command supported by Briosa; an
absent command has no implied disposition during v0.x.

| MP command | Input | Result | Status |
| --- | --- | --- | --- |
| [Get Active Units](#get-active-units) | none | length, angular, and temperature units | **Supported** |

## Get Active Units

<span className="catalog-status catalog-status--supported">Supported</span>

<div className="catalog-command-meta">
  <div><span>Operation ID</span><code>utility_operations.get_active_units</code></div>
  <div><span>gRPC method</span><code>briosa.UtilityOperations/GetActiveUnits</code></div>
</div>

`Get Active Units` has no MP inputs. Its result preserves the three optional MP
strings in SDK order: `Length`, `Angular`, and `Temperature`.

The authoritative server documentation records the command's
[SDK sequence and licensed validation](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/operations/active-context.md).

:::caution[Returned values are application data]

Briosa returns unit strings to the caller but does not log them by default. Do
not include returned unit selections in public validation evidence.

:::
