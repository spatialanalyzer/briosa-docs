---
title: Instrument Operations / Laser Projection Commands
description: Canonical MP command dispositions for the Laser Projection subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Instrument Operations / Laser Projection Commands

These entries cover both commands observed under **Instrument Operations →
Laser Projection** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>2</strong></div>
  <div><span>Current or Next</span><strong>2</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Instrument Operations / Laser Projection" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Project Objects" data-group="Instrument Operations / Laser Projection" data-status="next" data-validation="at-risk-laser-projector-fixture"><td><a href="#project-objects">Project Objects</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - laser-projector fixture</td></tr>
<tr data-command="Project Objects" data-group="Instrument Operations / Laser Projection" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#project-objects">Project Objects</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Stop Projection" data-group="Instrument Operations / Laser Projection" data-status="next" data-validation="at-risk-laser-projector-fixture"><td><a href="#stop-projection">Stop Projection</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - laser-projector fixture</td></tr>
<tr data-command="Stop Projection" data-group="Instrument Operations / Laser Projection" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#stop-projection">Stop Projection</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Project Objects

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="next" data-group="Instrument Operations / Laser Projection" data-validation="at-risk-laser-projector-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Laser Projection</span>
  <span className="catalog-target-validation">At risk laser projector fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Laser Projection" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Laser Projection</span>
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
| Input | `Instrument ID` | Collection Instrument ID |
| Input | `Objects To Project` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Starts projection of the supplied SA objects with the selected projector. SA
may report partial success when only some objects can be found; Briosa preserves
that outcome rather than reducing it to complete success or failure.

## Stop Projection

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="next" data-group="Instrument Operations / Laser Projection" data-validation="at-risk-laser-projector-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Laser Projection</span>
  <span className="catalog-target-validation">At risk laser projector fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Laser Projection" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Laser Projection</span>
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
| Input | `Instrument ID` | Collection Instrument ID |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Stops projection on the selected projector. This is an independent coordination
and recovery command: Briosa does not require the same caller to have started
the projection or retain projector workflow state.

## Availability and References

These commands are not exposed by Briosa Server 0.5.1 or the current public
client APIs. The descriptions above describe proposed behavior, not a callable
implementation. Their Next status does not establish a release date.


- [gRPC](/api/grpc/instrument-operations-laser-projection)
- [.NET](/api/dotnet/instrument-operations-laser-projection)
- [Python](/api/python/instrument-operations-laser-projection)
- [JavaScript and TypeScript](/api/javascript/instrument-operations-laser-projection)
