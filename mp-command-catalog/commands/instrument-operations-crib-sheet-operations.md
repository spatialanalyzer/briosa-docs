---
title: Instrument Operations / Crib Sheet Operations Commands
description: Canonical MP command disposition for the Crib Sheet Operations subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Instrument Operations / Crib Sheet Operations Commands

This entry covers the only command observed under **Instrument Operations →
Crib Sheet Operations** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>1</strong></div>
  <div><span>Current or Next</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Instrument Operations / Crib Sheet Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Run Crib Sheet" data-group="Instrument Operations / Crib Sheet Operations" data-status="next" data-validation="at-risk-crib-sheet-instrument-fixture"><td><a href="#run-crib-sheet">Run Crib Sheet</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - crib-sheet instrument fixture</td></tr>
</tbody>
</table>

## Run Crib Sheet

<span className="catalog-status catalog-status--next">Next</span>

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
