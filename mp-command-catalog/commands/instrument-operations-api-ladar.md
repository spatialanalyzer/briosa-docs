---
title: Instrument Operations / API - LADAR Commands
description: Canonical MP command dispositions for the API - LADAR subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Instrument Operations / API - LADAR Commands

These entries cover all six commands observed under **Instrument Operations →
API - LADAR** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>6</strong></div>
  <div><span>Current or Next</span><strong>6</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="Instrument Operations / API - LADAR" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Set LADAR AutoMeas Point" data-group="Instrument Operations / API - LADAR" data-status="next" data-validation="at-risk-ladar-instrument-fixture"><td><a href="#set-ladar-automeas-point">Set LADAR AutoMeas Point</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - LADAR instrument fixture</td></tr>
<tr data-command="Set LADAR AutoMeas Sphere" data-group="Instrument Operations / API - LADAR" data-status="next" data-validation="at-risk-ladar-instrument-fixture"><td><a href="#set-ladar-automeas-sphere">Set LADAR AutoMeas Sphere</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - LADAR instrument fixture</td></tr>
<tr data-command="Set LADAR FeatureMeas Sphere" data-group="Instrument Operations / API - LADAR" data-status="next" data-validation="at-risk-ladar-instrument-fixture"><td><a href="#set-ladar-featuremeas-sphere">Set LADAR FeatureMeas Sphere</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - LADAR instrument fixture</td></tr>
<tr data-command="Set LADAR FeatureMeas Circle" data-group="Instrument Operations / API - LADAR" data-status="next" data-validation="at-risk-ladar-instrument-fixture"><td><a href="#set-ladar-featuremeas-circle">Set LADAR FeatureMeas Circle</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - LADAR instrument fixture</td></tr>
<tr data-command="Set LADAR FeatureMeas Slot" data-group="Instrument Operations / API - LADAR" data-status="next" data-validation="at-risk-ladar-instrument-fixture"><td><a href="#set-ladar-featuremeas-slot">Set LADAR FeatureMeas Slot</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - LADAR instrument fixture</td></tr>
<tr data-command="Set LADAR FeatureMeas Cylinder" data-group="Instrument Operations / API - LADAR" data-status="next" data-validation="at-risk-ladar-instrument-fixture"><td><a href="#set-ladar-featuremeas-cylinder">Set LADAR FeatureMeas Cylinder</a></td><td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - LADAR instrument fixture</td></tr>
</tbody>
</table>

## Set LADAR AutoMeas Point

<span className="catalog-status catalog-status--next">Next</span>

Selects the LADAR surface-point automatic-measurement mode and configures its
sample time in milliseconds. The exact MP default is `0`, even though the MP
argument label documents a `1–2000` range. Briosa preserves `0` as the omitted
value and lets SA accept or reject it.

## Set LADAR AutoMeas Sphere

<span className="catalog-status catalog-status--next">Next</span>

Selects automatic sphere measurement and configures the expected sphere
radius, scan-line spacing, and which results SA receives. Defaults are
`1.1875`, `0.05`, center point enabled, sphere disabled, and measured cloud
disabled.

## Set LADAR FeatureMeas Sphere

<span className="catalog-status catalog-status--next">Next</span>

Configures the LADAR Sphere feature-measurement mode. Scan-line spacing
defaults to `0.05`.

## Set LADAR FeatureMeas Circle

<span className="catalog-status catalog-status--next">Next</span>

Configures Circle feature measurement. Scan-line spacing defaults to `0.05`
and extra scan-area width defaults to `0.0`.

## Set LADAR FeatureMeas Slot

<span className="catalog-status catalog-status--next">Next</span>

Configures Slot feature measurement with the same spacing and extra-area
defaults.

## Set LADAR FeatureMeas Cylinder

<span className="catalog-status catalog-status--next">Next</span>

Configures Cylinder feature measurement with the same spacing and extra-area
defaults. Briosa does not convert units or impose additional ranges on these
instrument-specific settings.

## Client APIs

- [gRPC](/api/grpc/instrument-operations-api-ladar)
- [.NET](/api/dotnet/instrument-operations-api-ladar)
- [Python](/api/python/instrument-operations-api-ladar)
- [JavaScript and TypeScript](/api/javascript/instrument-operations-api-ladar)
