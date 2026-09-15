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

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>5 of 5</strong></div>
  <div><span>Current Server Operations</span><strong>5</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Clear Cloud Viewer" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-status="current" data-validation="at-risk-nikon-cloud-viewer-fixture"><td><a href="#clear-cloud-viewer">Clear Cloud Viewer</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon cloud-viewer fixture</td></tr>
<tr data-command="Send Cloud To SA" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-status="current" data-validation="at-risk-nikon-cloud-viewer-fixture"><td><a href="#send-cloud-to-sa">Send Cloud To SA</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon cloud-viewer fixture</td></tr>
<tr data-command="Set Filter" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-status="current" data-validation="at-risk-nikon-cloud-viewer-fixture"><td><a href="#set-filter">Set Filter</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon cloud-viewer fixture</td></tr>
<tr data-command="Save Point Cloud File" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-status="current" data-validation="at-risk-nikon-cloud-viewer-fixture"><td><a href="#save-point-cloud-file">Save Point Cloud File</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon cloud-viewer fixture</td></tr>
<tr data-command="Load Point Cloud File" data-group="Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations" data-status="current" data-validation="at-risk-nikon-cloud-viewer-fixture"><td><a href="#load-point-cloud-file">Load Point Cloud File</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon cloud-viewer fixture</td></tr>
</tbody>
</table>

## Clear Cloud Viewer

<span className="catalog-status catalog-status--current">Current</span>

Clears the selected instrument interface's cloud viewer. The instrument must be
in the active collection and its interface must be active.

## Send Cloud To SA

<span className="catalog-status catalog-status--current">Current</span>

Adds every point currently visible in the selected cloud viewer to the active
SA collection under the supplied cloud name.

## Set Filter

<span className="catalog-status catalog-status--current">Current</span>

Sets the cloud-viewer quality threshold. SA describes a `0–100` scale and the
exact MP default is `0`; Briosa adds no range validation.

## Save Point Cloud File

<span className="catalog-status catalog-status--current">Current</span>

Saves the cloud viewer's points to a path on the local Briosa and SA machine.
Binary output is the default; callers may request ASCII. This target does not
expose the MP embedded-file variant.

## Load Point Cloud File

<span className="catalog-status catalog-status--current">Current</span>

Loads a local point-cloud file into the selected instrument's cloud viewer. SA
detects ASCII or binary format automatically.

## Client APIs

- [gRPC](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)
- [.NET](/api/dotnet/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)
- [Python](/api/python/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)
- [JavaScript and TypeScript](/api/javascript/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)
