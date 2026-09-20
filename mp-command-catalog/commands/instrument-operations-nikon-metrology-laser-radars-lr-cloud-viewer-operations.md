---
title: Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations Commands
description: Canonical MP command dispositions for Nikon LR Cloud Viewer Operations.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations Commands

This page covers all five commands observed under **Instrument Operations →
Nikon Metrology Laser Radars LR → LR Cloud Viewer Operations** in SA
2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>5 of 5</strong></div>
  <div><span>Current Server Operations</span><strong>5</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Clear Cloud Viewer" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-status="current" data-validation="at-risk-nikon-cloud-viewer-fixture"><td><a href="#clear-cloud-viewer">Clear Cloud Viewer</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon cloud-viewer fixture</td></tr>
<tr data-command="Clear Cloud Viewer" data-group="Cloud Viewer Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#clear-cloud-viewer">Clear Cloud Viewer</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Send Cloud To SA" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-status="current" data-validation="at-risk-nikon-cloud-viewer-fixture"><td><a href="#send-cloud-to-sa">Send Cloud To SA</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon cloud-viewer fixture</td></tr>
<tr data-command="Send Cloud To SA" data-group="Cloud Viewer Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#send-cloud-to-sa">Send Cloud To SA</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Filter" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-status="current" data-validation="at-risk-nikon-cloud-viewer-fixture"><td><a href="#set-filter">Set Filter</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon cloud-viewer fixture</td></tr>
<tr data-command="Set Filter" data-group="Cloud Viewer Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-filter">Set Filter</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Save Point Cloud File" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-status="current" data-validation="at-risk-nikon-cloud-viewer-fixture"><td><a href="#save-point-cloud-file">Save Point Cloud File</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon cloud-viewer fixture</td></tr>
<tr data-command="Save Point Cloud File" data-group="Cloud Viewer Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#save-point-cloud-file">Save Point Cloud File</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Load Point Cloud File" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-status="current" data-validation="at-risk-nikon-cloud-viewer-fixture"><td><a href="#load-point-cloud-file">Load Point Cloud File</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon cloud-viewer fixture</td></tr>
<tr data-command="Load Point Cloud File" data-group="Cloud Viewer Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#load-point-cloud-file">Load Point Cloud File</a></td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Clear Cloud Viewer

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-validation="at-risk-nikon-cloud-viewer-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations</span>
  <span className="catalog-target-validation">At risk nikon cloud viewer fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Cloud Viewer Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Cloud Viewer Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer) · [.NET](/api/dotnet/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer) · [Python](/api/python/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Instrument ID` | Collection Instrument ID |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Clears the selected instrument interface's cloud viewer. The instrument must be
in the active collection and its interface must be active.

## Send Cloud To SA

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-validation="at-risk-nikon-cloud-viewer-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations</span>
  <span className="catalog-target-validation">At risk nikon cloud viewer fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Cloud Viewer Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Cloud Viewer Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa) · [.NET](/api/dotnet/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa) · [Python](/api/python/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Instrument ID` | Collection Instrument ID |
| Input | `Cloud Name` | Cloud Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Adds every point currently visible in the selected cloud viewer to the active
SA collection under the supplied cloud name.

## Set Filter

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-validation="at-risk-nikon-cloud-viewer-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations</span>
  <span className="catalog-target-validation">At risk nikon cloud viewer fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Cloud Viewer Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Cloud Viewer Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter) · [.NET](/api/dotnet/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter) · [Python](/api/python/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Instrument ID` | Collection Instrument ID |
| Input | `Filter Value` | Integer |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets the cloud-viewer quality threshold. SA describes a `0–100` scale and the
exact MP default is `0`; Briosa adds no range validation.

## Save Point Cloud File

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-validation="at-risk-nikon-cloud-viewer-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations</span>
  <span className="catalog-target-validation">At risk nikon cloud viewer fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Cloud Viewer Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Cloud Viewer Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file) · [.NET](/api/dotnet/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file) · [Python](/api/python/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Instrument ID` | Collection Instrument ID |
| Input | `File Path` | File Path or Embedded File |
| Input | `Save as Ascii` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Saves the cloud viewer's points to a path on the local Briosa and SA machine.
Binary output is the default; callers may request ASCII. This target does not
expose the MP embedded-file variant.

## Load Point Cloud File

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-validation="at-risk-nikon-cloud-viewer-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations</span>
  <span className="catalog-target-validation">At risk nikon cloud viewer fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Cloud Viewer Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Cloud Viewer Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file) · [.NET](/api/dotnet/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file) · [Python](/api/python/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Instrument ID` | Collection Instrument ID |
| Input | `File Path` | File Path or Embedded File |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Loads a local point-cloud file into the selected instrument's cloud viewer. SA
detects ASCII or binary format automatically.

## Client APIs

- [gRPC](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)
- [.NET](/api/dotnet/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)
- [Python](/api/python/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)
- [JavaScript and TypeScript](/api/javascript/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)
