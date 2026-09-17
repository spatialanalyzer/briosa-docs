---
title: Instrument Operations / Crib Sheet Operations Commands
description: Canonical MP command disposition for the Crib Sheet Operations subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Instrument Operations / Crib Sheet Operations Commands

This entry covers the only command observed under **Instrument Operations →
Crib Sheet Operations** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>1</strong></div>
  <div><span>Current or Next</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Instrument Operations / Crib Sheet Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Run Crib Sheet" data-group="Instrument Operations / Crib Sheet Operations" data-status="next" data-validation="at-risk-crib-sheet-instrument-fixture"><td><a href="#run-crib-sheet">Run Crib Sheet</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - crib-sheet instrument fixture</td></tr>
<tr data-command="Run Crib Sheet" data-group="Instrument Operations / Crib Sheet Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#run-crib-sheet">Run Crib Sheet</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Run Crib Sheet

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="next" data-group="Instrument Operations / Crib Sheet Operations" data-validation="at-risk-crib-sheet-instrument-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Crib Sheet Operations</span>
  <span className="catalog-target-validation">At risk crib sheet instrument fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Crib Sheet Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Crib Sheet Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Collection Name` | Collection Name |
| Input | `Crib Sheet Name` | String |
| Input | `Instrument ID` | Collection Instrument ID |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Starts the named crib sheet in its collection using the selected instrument.
The instrument must be in the active collection and its interface must be
running. Execution may be long-running; a client deadline or cancellation does
not prove that the crib sheet stopped, and Briosa never automatically replays
the call after an unknown outcome.

## Availability and References

These commands are not exposed by Briosa Server 0.5.1 or the current public
client APIs. The descriptions above describe proposed behavior, not a callable
implementation. Their Next status does not establish a release date.


- [gRPC](/api/grpc/instrument-operations-crib-sheet-operations)
- [.NET](/api/dotnet/instrument-operations-crib-sheet-operations)
- [Python](/api/python/instrument-operations-crib-sheet-operations)
- [JavaScript and TypeScript](/api/javascript/instrument-operations-crib-sheet-operations)
