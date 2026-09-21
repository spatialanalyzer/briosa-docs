---
title: Instrument Operations / Advanced Instrument Operations Commands
description: Canonical MP command dispositions for the Advanced Instrument Operations subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Instrument Operations / Advanced Instrument Operations Commands

These entries cover all three commands observed under **Instrument Operations
→ Advanced Instrument Operations** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>3</strong></div>
  <div><span>Current Server Operations</span><strong>3</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Instrument Operations / Advanced Instrument Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Issue Instrument Actuator Command" data-group="Instrument Operations / Advanced Instrument Operations" data-status="current" data-validation="at-risk-active-instrument-interface-fixture"><td><a href="#issue-instrument-actuator-command">Issue Instrument Actuator Command</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - active instrument interface fixture</td></tr>
<tr data-command="Issue Instrument Actuator Command" data-group="Instrument Operations / Advanced Instrument Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#issue-instrument-actuator-command">Issue Instrument Actuator Command</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Instrument Axes" data-group="Instrument Operations / Advanced Instrument Operations" data-status="current" data-validation="at-risk-robot-instrument-fixture"><td><a href="#set-instrument-axes">Set Instrument Axes</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - robot instrument fixture</td></tr>
<tr data-command="Set Instrument Axes" data-group="Instrument Operations / Advanced Instrument Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-instrument-axes">Set Instrument Axes</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Alignment Projector" data-group="Instrument Operations / Advanced Instrument Operations" data-status="current" data-validation="at-risk-projector-instrument-fixture"><td><a href="#set-alignment-projector">Set Alignment Projector</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - projector instrument fixture</td></tr>
<tr data-command="Set Alignment Projector" data-group="Instrument Operations / Advanced Instrument Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-alignment-projector">Set Alignment Projector</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Issue Instrument Actuator Command

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Advanced Instrument Operations" data-validation="at-risk-active-instrument-interface-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Advanced Instrument Operations</span>
  <span className="catalog-target-validation">At risk active instrument interface fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Instrument Operations / Advanced Instrument Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Advanced Instrument Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command) · [.NET](/api/dotnet/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command) · [Python](/api/python/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Instrument ID` | Collection Instrument ID |
| Input | `Command` | String |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sends an instrument-specific command string to an active instrument interface.
The interface owns the output protocol; Briosa passes the command through
without interpreting or validating it. The instrument must be in the active
collection and its interface must be running.

## Set Instrument Axes

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Advanced Instrument Operations" data-validation="at-risk-robot-instrument-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Advanced Instrument Operations</span>
  <span className="catalog-target-validation">At risk robot instrument fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Instrument Operations / Advanced Instrument Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Advanced Instrument Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-instrument-axes) · [.NET](/api/dotnet/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-instrument-axes) · [Python](/api/python/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-instrument-axes) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-instrument-axes)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Instrument to Adjust` | Collection Instrument ID |
| Input | `Axis Values` | Double List |
| Input | `Number of Steps` | Integer |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets an instrument's ordered axis or joint values, typically for a robot
interface. The value count and meaning are interface-specific. Graphical
animation steps default to `0`; Briosa adds no axis-count or motion validation.

## Set Alignment Projector

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Advanced Instrument Operations" data-validation="at-risk-projector-instrument-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Advanced Instrument Operations</span>
  <span className="catalog-target-validation">At risk projector instrument fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Instrument Operations / Advanced Instrument Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Advanced Instrument Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-alignment-projector) · [.NET](/api/dotnet/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-alignment-projector) · [Python](/api/python/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-alignment-projector) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-alignment-projector)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Instrument ID` | Collection Instrument ID |
| Input | `Projector Profile` | String |
| Input | `User Prompt` | String |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Starts a projector alignment profile on the selected instrument. The optional
user prompt defaults to an empty string, preserving the exact MP default and
Briosa's preference not to introduce prompts by default.

## Client APIs

- [gRPC](/api/grpc/instrument-operations-advanced-instrument-operations)
- [.NET](/api/dotnet/instrument-operations-advanced-instrument-operations)
- [Python](/api/python/instrument-operations-advanced-instrument-operations)
- [JavaScript and TypeScript](/api/javascript/instrument-operations-advanced-instrument-operations)
