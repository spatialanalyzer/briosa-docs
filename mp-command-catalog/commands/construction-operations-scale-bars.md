---
title: Construction Operations / Scale Bars Commands
description: Canonical MP command dispositions for the Construction Operations / Scale Bars subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Scale Bars Commands

This entry covers the command observed under **Construction Operations → Scale
Bars** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>1</strong></div>
  <div><span>Current Server Operations</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Scale Bars" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Scale Bar" data-group="Construction Operations / Scale Bars" data-status="current" data-validation="at-risk-scale-bar-tolerance-fixture"><td><a href="#construct-scale-bar">Construct Scale Bar</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - scale-bar tolerance fixture</td></tr>
</tbody>
</table>

## Construct Scale Bar

<span className="catalog-status catalog-status--current">Current</span>

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
