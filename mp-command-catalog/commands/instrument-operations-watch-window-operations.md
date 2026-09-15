---
title: Instrument Operations / Watch Window Operations Commands
description: Canonical MP command dispositions for reviewed Watch Window Operations.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Instrument Operations / Watch Window Operations Commands

This page covers all seven commands observed under **Instrument Operations →
Watch Window Operations** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>7 of 7</strong></div>
  <div><span>Current Server Operations</span><strong>6</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Instrument Operations / Watch Window Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Watch Point To Point" data-group="Instrument Operations / Watch Window Operations" data-status="current" data-validation="at-risk-instrument-watch-window-fixture"><td><a href="#watch-point-to-point">Watch Point To Point</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Instrument watch-window fixture</td></tr>
<tr data-command="Watch Point To Objects" data-group="Instrument Operations / Watch Window Operations" data-status="current" data-validation="at-risk-instrument-watch-window-fixture"><td><a href="#watch-point-to-objects">Watch Point To Objects</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Instrument watch-window fixture</td></tr>
<tr data-command="Watch Point To Edge" data-group="Instrument Operations / Watch Window Operations" data-status="current" data-validation="at-risk-instrument-watch-window-fixture"><td><a href="#watch-point-to-edge">Watch Point To Edge</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Instrument watch-window fixture</td></tr>
<tr data-command="Watch Closest Point" data-group="Instrument Operations / Watch Window Operations" data-status="current" data-validation="at-risk-instrument-watch-window-fixture"><td><a href="#watch-closest-point">Watch Closest Point</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Instrument watch-window fixture</td></tr>
<tr data-command="Watch Instrument" data-group="Instrument Operations / Watch Window Operations" data-status="current" data-validation="at-risk-instrument-watch-window-fixture"><td><a href="#watch-instrument">Watch Instrument</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Instrument watch-window fixture</td></tr>
<tr data-command="Watch Window Template 3D" data-group="Instrument Operations / Watch Window Operations" data-status="uncommitted" data-validation="contract-clarification-required"><td><a href="#watch-window-template-3d">Watch Window Template 3D</a></td><td><span className="catalog-status catalog-status--uncommitted">Uncommitted</span></td><td>Contract clarification required</td></tr>
<tr data-command="Watch Point To Point With View Zooming" data-group="Instrument Operations / Watch Window Operations" data-status="current" data-validation="at-risk-instrument-watch-window-fixture"><td><a href="#watch-point-to-point-with-view-zooming">Watch Point To Point With View Zooming</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Instrument watch-window fixture</td></tr>
</tbody>
</table>

## Watch Point To Point

<span className="catalog-status catalog-status--current">Current</span>

Opens a live point-to-point watch window for the selected instrument and
reference point using a `3D Template / Watch Window Template` object. The call
also selects the measurement mode and window placement.

`Pause MP Until Closed` defaults to `false`. When set to `true`, the RPC may
remain active until a user closes the watch window; cancelling the caller does
not prove that SA closed the window or stopped the underlying command.

The installed SA command reference describes a numeric tolerance at the
template position, but the exact SA 2026.1.0529.7 SDK binding and the matching
prior-release implementation both use `3 DOF Watch Window Properties`. Briosa
follows the exact-target SDK binding.

## Watch Point To Objects

<span className="catalog-status catalog-status--current">Current</span>

Opens a live watch window comparing the instrument point with a caller-supplied
object list using explicit projection options, a watch-window template, and a
measurement mode. Partial MP success remains visible when SA finds only some of
the requested objects.

## Watch Point To Edge

<span className="catalog-status catalog-status--current">Current</span>

Compensates the active target against projection-reference objects, then
reports the compensated point relative to measurement-reference objects. The
SDK mapping preserves the exact trailing space in `Measurement Reference
Objects ` even though the public field name omits it.

## Watch Closest Point

<span className="catalog-status catalog-status--current">Current</span>

Opens a closest-point watch window across a supplied list of point groups. The
caller supplies the watch-window template and remains responsible for the live
SA state used by the sequence.

## Watch Instrument

<span className="catalog-status catalog-status--current">Current</span>

Opens the selected instrument's point watch window using a watch-window
template and explicit placement. `Pause MP Until Closed` defaults to `false`.

## Watch Window Template 3D

<span className="catalog-status catalog-status--uncommitted">Uncommitted</span>

Creates a 3D watch-window template with precision, font, color, deviation,
coordinate-system, UDP, frame, tolerance, display, and projection settings.

The exact export emits its final two inputs as identically named string
arguments even though their choice comments and the installed command reference
describe different types. Briosa will not publish an API contract until direct
MP Editor review establishes the exact SA 2026.1.0529.7 signature.

## Watch Point To Point With View Zooming

<span className="catalog-status catalog-status--current">Current</span>

Updates or closes the point-to-point view-zooming watch window. `Update(TRUE),
Close(FALSE)` defaults to `true`. Briosa retains no workflow state; the caller
coordinates update and close calls against the current SA state.

## Client APIs

- [gRPC](/api/grpc/instrument-operations-watch-window-operations)
- [.NET](/api/dotnet/instrument-operations-watch-window-operations)
- [Python](/api/python/instrument-operations-watch-window-operations)
- [JavaScript and TypeScript](/api/javascript/instrument-operations-watch-window-operations)
