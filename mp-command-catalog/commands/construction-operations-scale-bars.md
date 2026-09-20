---
title: Construction Operations / Scale Bars Commands
description: Canonical MP command dispositions for the Construction Operations / Scale Bars subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Scale Bars Commands

This entry covers the command observed under **Construction Operations → Scale
Bars** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>1</strong></div>
  <div><span>Current Server Operations</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Construction Operations / Scale Bars" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Construct Scale Bar" data-group="Construction Operations / Scale Bars" data-status="current" data-validation="at-risk-scale-bar-tolerance-fixture"><td><a href="#construct-scale-bar">Construct Scale Bar</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - scale-bar tolerance fixture</td></tr>
<tr data-command="Construct Scale Bar" data-group="Construction Operations / Scale Bars" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#construct-scale-bar">Construct Scale Bar</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Construct Scale Bar

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Construction Operations / Scale Bars" data-validation="at-risk-scale-bar-tolerance-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Scale Bars</span>
  <span className="catalog-target-validation">At risk scale bar tolerance fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Construction Operations / Scale Bars" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Construction Operations / Scale Bars</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/construction-operations-scale-bars#construct-scale-bar) · [.NET](/api/dotnet/sa-2024.1.0508.5/construction-operations-scale-bars#construct-scale-bar) · [Python](/api/python/sa-2024.1.0508.5/construction-operations-scale-bars#construct-scale-bar) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/construction-operations-scale-bars#construct-scale-bar)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Scale Bar Name` | Collection Object Name |
| Input | `Begin Target` | Point Name |
| Input | `End Target` | Point Name |
| Input | `Length` | Double |
| Input | `Uncertainty` | Double |
| Input | `Use Relative Tolerances?` | Boolean |
| Input | `Use High Tolerances?` | Boolean |
| Input | `Use Low Tolerances?` | Boolean |
| Input | `High Tolerance` | Double |
| Input | `Low Tolerance` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a named scale bar between two required Point Names. Length and
uncertainty default to `0.0`. Relative tolerances default to enabled; high and
low tolerances default to disabled with values of `0.0`.

When relative tolerances are enabled, high and low values are offsets from the
nominal length. When disabled, they are the actual upper and lower bounds.
Briosa preserves the exact SDK bindings `Use Relative Tolerances?`, `Use High
Tolerances?`, and `Use Low Tolerances?`; the installed documentation omits the
question mark on the latter two.

Briosa adds no policy for contradictory tolerance settings. It preserves the MP
outcome and never automatically replays the operation.

**API References:** [gRPC](/api/grpc/construction-operations-scale-bars) · [.NET](/api/dotnet/construction-operations-scale-bars) · [Python](/api/python/construction-operations-scale-bars) · [JavaScript and TypeScript](/api/javascript/construction-operations-scale-bars)
