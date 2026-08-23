---
title: Instrument Operations / Laser Projection Commands
description: Canonical MP command dispositions for the Laser Projection subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Instrument Operations / Laser Projection Commands

These entries cover both commands observed under **Instrument Operations →
Laser Projection** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>2</strong></div>
  <div><span>Current or Next</span><strong>2</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Instrument Operations / Laser Projection" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Project Objects" data-group="Instrument Operations / Laser Projection" data-status="next" data-validation="at-risk-laser-projector-fixture"><td><a href="#project-objects">Project Objects</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - laser-projector fixture</td></tr>
<tr data-command="Stop Projection" data-group="Instrument Operations / Laser Projection" data-status="next" data-validation="at-risk-laser-projector-fixture"><td><a href="#stop-projection">Stop Projection</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - laser-projector fixture</td></tr>
</tbody>
</table>

## Project Objects

<span className="catalog-status catalog-status--next">Next</span>

Starts projection of the supplied SA objects with the selected projector. SA
may report partial success when only some objects can be found; Briosa preserves
that outcome rather than reducing it to complete success or failure.

## Stop Projection

<span className="catalog-status catalog-status--next">Next</span>

Stops projection on the selected projector. This is an independent coordination
and recovery command: Briosa does not require the same caller to have started
the projection or retain projector workflow state.

## Client APIs

- [gRPC](/api/grpc/instrument-operations-laser-projection)
- [.NET](/api/dotnet/instrument-operations-laser-projection)
- [Python](/api/python/instrument-operations-laser-projection)
- [JavaScript and TypeScript](/api/javascript/instrument-operations-laser-projection)
