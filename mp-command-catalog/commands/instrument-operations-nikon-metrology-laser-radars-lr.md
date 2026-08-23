---
title: Instrument Operations / Nikon Metrology Laser Radars LR Commands
description: Canonical MP command dispositions for the reviewed Nikon Metrology Laser Radars LR commands.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Instrument Operations / Nikon Metrology Laser Radars LR Commands

This page covers all twelve commands observed under
**Instrument Operations → Nikon Metrology Laser Radars LR** in SA
2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>12 of 12</strong></div>
  <div><span>Current or Next</span><strong>12</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Instrument Operations / Nikon Metrology Laser Radars LR" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="LR Hardware Connect" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-hardware-connect">LR Hardware Connect</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Hardware Disconnect" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-hardware-disconnect">LR Hardware Disconnect</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Verify Hardware Connection" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-verify-hardware-connection">LR Verify Hardware Connection</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Set Red Laser Intensity" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-set-red-laser-intensity">LR Set Red Laser Intensity</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Get Most Recent SNR Info" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-apdis-mv400-fixture"><td><a href="#lr-get-most-recent-snr-info">LR Get Most Recent SNR Info</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon APDIS MV400 fixture</td></tr>
<tr data-command="LR Self Test" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-self-test">LR Self Test</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Self Test - Linearization" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-self-test---linearization">LR Self Test - Linearization</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Self Test - Flip Test" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-self-test---flip-test">LR Self Test - Flip Test</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Self Test - LO Sep" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-self-test---lo-sep">LR Self Test - LO Sep</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR APDIS Perform MCM Calibration" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-apdis-calibration-fixture"><td><a href="#lr-apdis-perform-mcm-calibration">LR APDIS Perform MCM Calibration</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon APDIS calibration fixture</td></tr>
<tr data-command="LR APDIS Activate MCM Calibration" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-apdis-calibration-fixture"><td><a href="#lr-apdis-activate-mcm-calibration">LR APDIS Activate MCM Calibration</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon APDIS calibration fixture</td></tr>
<tr data-command="LR APDIS Get Active MCM Calibration" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-nikon-apdis-calibration-fixture"><td><a href="#lr-apdis-get-active-mcm-calibration">LR APDIS Get Active MCM Calibration</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - Nikon APDIS calibration fixture</td></tr>
</tbody>
</table>

## LR Hardware Connect

<span className="catalog-status catalog-status--next">Next</span>

Connects the selected SA laser-radar interface to the hardware host and port.
This is an instrument connection managed by local SA; it does not expose the
Briosa server remotely.

## LR Hardware Disconnect

<span className="catalog-status catalog-status--next">Next</span>

Disconnects that SA interface from its LR hardware.

## LR Verify Hardware Connection

<span className="catalog-status catalog-status--next">Next</span>

Returns whether the selected SA interface is connected to its hardware.

## LR Set Red Laser Intensity

<span className="catalog-status catalog-status--next">Next</span>

Sets red-laser intensity on SA's documented `0–100` scale. The exact MP default
is `0`; Briosa does not prevalidate the range.

## LR Get Most Recent SNR Info

<span className="catalog-status catalog-status--next">Next</span>

Returns the most recent signal-to-noise information: SNR, data-array size,
peak index, peak value in dB, and measured range in meters. SA documents this
command for Nikon APDIS MV400 models.

## LR Self Test

<span className="catalog-status catalog-status--next">Next</span>

Runs the LR self-test and returns reference-arm and mirror statistics plus five
threshold and overall pass indicators. Briosa preserves the MP's explicit inch
and quality fields without conversion.

## LR Self Test - Linearization

<span className="catalog-status catalog-status--next">Next</span>

Runs the LR linearization test and returns linearity in kHz.

## LR Self Test - Flip Test

<span className="catalog-status catalog-status--next">Next</span>

Runs the flip test and returns front and back range, azimuth, elevation, and
quality measurements plus the three front/back differences. Exact inch and
degree units are retained.

## LR Self Test - LO Sep

<span className="catalog-status catalog-status--next">Next</span>

Runs the LR local-oscillator separation test and returns both oscillator
indexes, measurement counts, range statistics in inches, and quality
statistics. The exact MP defaults are region `0` and zero range measurements;
Briosa preserves those defaults without adding a region constraint.

## LR APDIS Perform MCM Calibration

<span className="catalog-status catalog-status--next">Next</span>

Performs an APDIS MCM calibration from a nominal point group, tooling-ball
surface choice, and new calibration name. The exact MP default uses a matte
tooling ball and an empty calibration name. This long-running instrument
mutation is never automatically replayed.

## LR APDIS Activate MCM Calibration

<span className="catalog-status catalog-status--next">Next</span>

Activates an APDIS MCM calibration by name, by ID, or through SA's automatic
orientation-based lookup when both selectors retain their MP defaults. The
operation returns the active MCM name and preserves the exact empty-name and
`-1` ID defaults.

## LR APDIS Get Active MCM Calibration

<span className="catalog-status catalog-status--next">Next</span>

Returns the name of the MCM calibration currently active on the selected APDIS
instrument.

## Client APIs

- [gRPC](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr)
- [.NET](/api/dotnet/instrument-operations-nikon-metrology-laser-radars-lr)
- [Python](/api/python/instrument-operations-nikon-metrology-laser-radars-lr)
- [JavaScript and TypeScript](/api/javascript/instrument-operations-nikon-metrology-laser-radars-lr)
