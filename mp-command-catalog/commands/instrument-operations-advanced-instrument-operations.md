---
title: Instrument Operations / Advanced Instrument Operations Commands
description: Canonical MP command dispositions for the Advanced Instrument Operations subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Instrument Operations / Advanced Instrument Operations Commands

These entries cover all three commands observed under **Instrument Operations
→ Advanced Instrument Operations** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>3</strong></div>
  <div><span>Current or Next</span><strong>3</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Instrument Operations / Advanced Instrument Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Issue Instrument Actuator Command" data-group="Instrument Operations / Advanced Instrument Operations" data-status="next" data-validation="at-risk-active-instrument-interface-fixture"><td><a href="#issue-instrument-actuator-command">Issue Instrument Actuator Command</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - active instrument interface fixture</td></tr>
<tr data-command="Set Instrument Axes" data-group="Instrument Operations / Advanced Instrument Operations" data-status="next" data-validation="at-risk-robot-instrument-fixture"><td><a href="#set-instrument-axes">Set Instrument Axes</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - robot instrument fixture</td></tr>
<tr data-command="Set Alignment Projector" data-group="Instrument Operations / Advanced Instrument Operations" data-status="next" data-validation="at-risk-projector-instrument-fixture"><td><a href="#set-alignment-projector">Set Alignment Projector</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - projector instrument fixture</td></tr>
</tbody>
</table>

## Issue Instrument Actuator Command

<span className="catalog-status catalog-status--next">Next</span>

Sends an instrument-specific command string to an active instrument interface.
The interface owns the output protocol; Briosa passes the command through
without interpreting or validating it. The instrument must be in the active
collection and its interface must be running.

## Set Instrument Axes

<span className="catalog-status catalog-status--next">Next</span>

Sets an instrument's ordered axis or joint values, typically for a robot
interface. The value count and meaning are interface-specific. Graphical
animation steps default to `0`; Briosa adds no axis-count or motion validation.

## Set Alignment Projector

<span className="catalog-status catalog-status--next">Next</span>

Starts a projector alignment profile on the selected instrument. The optional
user prompt defaults to an empty string, preserving the exact MP default and
Briosa's preference not to introduce prompts by default.

## Client APIs

- [gRPC](/api/grpc/instrument-operations-advanced-instrument-operations)
- [.NET](/api/dotnet/instrument-operations-advanced-instrument-operations)
- [Python](/api/python/instrument-operations-advanced-instrument-operations)
- [JavaScript and TypeScript](/api/javascript/instrument-operations-advanced-instrument-operations)
