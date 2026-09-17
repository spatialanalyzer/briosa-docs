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

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>12 of 12</strong></div>
  <div><span>Current Server Operations</span><strong>12</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Instrument Operations / Nikon Metrology Laser Radars LR" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="LR Hardware Connect" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-hardware-connect">LR Hardware Connect</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Hardware Connect" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-hardware-connect">LR Hardware Connect</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="LR Hardware Disconnect" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-hardware-disconnect">LR Hardware Disconnect</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Hardware Disconnect" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-hardware-disconnect">LR Hardware Disconnect</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="LR Verify Hardware Connection" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-verify-hardware-connection">LR Verify Hardware Connection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Verify Hardware Connection" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-verify-hardware-connection">LR Verify Hardware Connection</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="LR Set Red Laser Intensity" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-set-red-laser-intensity">LR Set Red Laser Intensity</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Set Red Laser Intensity" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-set-red-laser-intensity">LR Set Red Laser Intensity</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="LR Get Most Recent SNR Info" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-apdis-mv400-fixture"><td><a href="#lr-get-most-recent-snr-info">LR Get Most Recent SNR Info</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon APDIS MV400 fixture</td></tr>
<tr data-command="LR Get Most Recent SNR Info" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-get-most-recent-snr-info">LR Get Most Recent SNR Info</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="LR Self Test" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-self-test">LR Self Test</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Self Test" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-self-test">LR Self Test</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="LR Self Test - Linearization" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-self-test---linearization">LR Self Test - Linearization</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Self Test - Linearization" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-self-test---linearization">LR Self Test - Linearization</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="LR Self Test - Flip Test" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-self-test---flip-test">LR Self Test - Flip Test</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Self Test - Flip Test" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-self-test---flip-test">LR Self Test - Flip Test</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="LR Self Test - LO Sep" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-laser-radar-fixture"><td><a href="#lr-self-test---lo-sep">LR Self Test - LO Sep</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon laser-radar fixture</td></tr>
<tr data-command="LR Self Test - LO Sep" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-self-test---lo-sep">LR Self Test - LO Sep</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="LR APDIS Perform MCM Calibration" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-apdis-calibration-fixture"><td><a href="#lr-apdis-perform-mcm-calibration">LR APDIS Perform MCM Calibration</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon APDIS calibration fixture</td></tr>
<tr data-command="LR APDIS Perform MCM Calibration" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-apdis-perform-mcm-calibration">LR APDIS Perform MCM Calibration</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="LR APDIS Activate MCM Calibration" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-apdis-calibration-fixture"><td><a href="#lr-apdis-activate-mcm-calibration">LR APDIS Activate MCM Calibration</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon APDIS calibration fixture</td></tr>
<tr data-command="LR APDIS Activate MCM Calibration" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-apdis-activate-mcm-calibration">LR APDIS Activate MCM Calibration</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="LR APDIS Get Active MCM Calibration" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="current" data-validation="at-risk-nikon-apdis-calibration-fixture"><td><a href="#lr-apdis-get-active-mcm-calibration">LR APDIS Get Active MCM Calibration</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Nikon APDIS calibration fixture</td></tr>
<tr data-command="LR APDIS Get Active MCM Calibration" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#lr-apdis-get-active-mcm-calibration">LR APDIS Get Active MCM Calibration</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## LR Hardware Connect

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-laser-radar-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon laser radar fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
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
| Input | `Host` | String |
| Input | `Port` | Integer |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Connects the selected SA laser-radar interface to the hardware host and port.
This is an instrument connection managed by local SA; it does not expose the
Briosa server remotely.

## LR Hardware Disconnect

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-laser-radar-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon laser radar fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
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

Disconnects that SA interface from its LR hardware.

## LR Verify Hardware Connection

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-laser-radar-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon laser radar fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
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
| Output | `Connected to Hardware?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns whether the selected SA interface is connected to its hardware.

## LR Set Red Laser Intensity

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-laser-radar-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon laser radar fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
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
| Input | `Intensity (0-100)` | Integer |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets red-laser intensity on SA's documented `0–100` scale. The exact MP default
is `0`; Briosa does not prevalidate the range.

## LR Get Most Recent SNR Info

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-apdis-mv400-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon apdis mv400 fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
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
| Output | `SNR` | Double |
| Output | `Size of Data Array` | Integer |
| Output | `Peak Value Index` | Integer |
| Output | `Peak Value (dB)` | Double |
| Output | `Measured Range (m)` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the most recent signal-to-noise information: SNR, data-array size,
peak index, peak value in dB, and measured range in meters. SA documents this
command for Nikon APDIS MV400 models.

## LR Self Test

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-laser-radar-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon laser radar fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
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
| Output | `Ref Arm Length (Inches)` | Double |
| Output | `Ref Arm Quality` | Double |
| Output | `Mirror Measurement Count` | Integer |
| Output | `Mirror Measurement Range - Mean (Inches)` | Double |
| Output | `Mirror Measurement Range - StdDev (Inches)` | Double |
| Output | `Mirror Measurement Quality - Mean` | Double |
| Output | `Mirror Measurement Quality - StdDev` | Double |
| Output | `Passed Ref Arm Quality Threshold?` | Boolean |
| Output | `Passed Mirror Offset Delta Threshold?` | Boolean |
| Output | `Passed Mirror Offset StdDev Threshold?` | Boolean |
| Output | `Passed Mirror Mean Quality Threshold?` | Boolean |
| Output | `Passed Overall?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Runs the LR self-test and returns reference-arm and mirror statistics plus five
threshold and overall pass indicators. Briosa preserves the MP's explicit inch
and quality fields without conversion.

## LR Self Test - Linearization

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-laser-radar-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon laser radar fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
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
| Output | `Linearity (kHz)` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Runs the LR linearization test and returns linearity in kHz.

## LR Self Test - Flip Test

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-laser-radar-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon laser radar fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
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
| Output | `Front Measurement - Range (Inches)` | Double |
| Output | `Front Measurement - Azimuth (Degs)` | Double |
| Output | `Front Measurement - Elevation (Degs)` | Double |
| Output | `Front Measurement - Quality` | Double |
| Output | `Back Measurement - Range (Inches)` | Double |
| Output | `Back Measurement - Azimuth (Degs)` | Double |
| Output | `Back Measurement - Elevation (Degs)` | Double |
| Output | `Back Measurement - Quality` | Double |
| Output | `Front/Back Difference - Range (Inches)` | Double |
| Output | `Front/Back Difference - Azimuth (Degs)` | Double |
| Output | `Front/Back Difference - Elevation (Degs)` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Runs the flip test and returns front and back range, azimuth, elevation, and
quality measurements plus the three front/back differences. Exact inch and
degree units are retained.

## LR Self Test - LO Sep

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-laser-radar-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon laser radar fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
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
| Input | `Region (1=Region12,2=Region23,3=Region34)` | Integer |
| Input | `Num Range Measurements` | Integer |
| Output | `Primary LO (indexed from 1)` | Integer |
| Output | `Secondary LO (indexed from 1)` | Integer |
| Output | `Primary LO Measurement Count` | Integer |
| Output | `Primary LO Measurement Range - Mean (Inches)` | Double |
| Output | `Primary LO Measurement Range - StdDev (Inches)` | Double |
| Output | `Primary LO Measurement Quality - Mean` | Double |
| Output | `Primary LO Measurement Quality - StdDev` | Double |
| Output | `Secondary LO Measurement Count` | Integer |
| Output | `Secondary LO Measurement Range - Mean (Inches)` | Double |
| Output | `Secondary LO Measurement Range - StdDev (Inches)` | Double |
| Output | `Secondary LO Measurement Quality - Mean` | Double |
| Output | `Secondary LO Measurement Quality - StdDev` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Runs the LR local-oscillator separation test and returns both oscillator
indexes, measurement counts, range statistics in inches, and quality
statistics. The exact MP defaults are region `0` and zero range measurements;
Briosa preserves those defaults without adding a region constraint.

## LR APDIS Perform MCM Calibration

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-apdis-calibration-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon apdis calibration fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Instrument ID` | Collection Instrument ID |
| Input | `Nominal Group Name` | Collection Object Name |
| Input | `Use Matte Tooling Ball?` | Boolean |
| Input | `New Calibration Name` | String |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Performs an APDIS MCM calibration from a nominal point group, tooling-ball
surface choice, and new calibration name. The exact MP default uses a matte
tooling ball and an empty calibration name. This long-running instrument
mutation is never automatically replayed.

## LR APDIS Activate MCM Calibration

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-apdis-calibration-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon apdis calibration fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
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
| Input | `Calibration Name (Optional)` | String |
| Input | `Calibration ID (Optional)` | Integer |
| Output | `Active MCM Name` | String |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Activates an APDIS MCM calibration by name, by ID, or through SA's automatic
orientation-based lookup when both selectors retain their MP defaults. The
operation returns the active MCM name and preserves the exact empty-name and
`-1` ID defaults.

## LR APDIS Get Active MCM Calibration

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-nikon-apdis-calibration-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
  <span className="catalog-target-validation">At risk nikon apdis calibration fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Instrument Operations / Nikon Metrology Laser Radars LR" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Instrument Operations / Nikon Metrology Laser Radars LR</span>
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
| Output | `Active MCM Name` | String |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the name of the MCM calibration currently active on the selected APDIS
instrument.

## Client APIs

- [gRPC](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr)
- [.NET](/api/dotnet/instrument-operations-nikon-metrology-laser-radars-lr)
- [Python](/api/python/instrument-operations-nikon-metrology-laser-radars-lr)
- [JavaScript and TypeScript](/api/javascript/instrument-operations-nikon-metrology-laser-radars-lr)
