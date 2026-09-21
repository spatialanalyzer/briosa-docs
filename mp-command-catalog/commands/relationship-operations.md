---
title: Relationship Operations Commands
description: Canonical SpatialAnalyzer MP command dispositions for Relationship Operations.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Relationship Operations Commands

These entries document Relationship Operations for SA 2026.1.0529.7.
The MP Editor group paths and canonical command identities are preserved.
Current entries are included in Briosa Server 0.7.0; runtime policy and readiness
still apply. Documentation-only identities retain their SDK limitations.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>115</strong></div>
  <div><span>Current Server Operations</span><strong>109</strong></div>
  <div><span>Excluded or Unavailable</span><strong>6</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Relationship Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Enable/Disable Relationships for Optimization" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#enabledisable-relationships-for-optimization">Enable/Disable Relationships for Optimization</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Enable/Disable Relationships for Optimization" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#enabledisable-relationships-for-optimization">Enable/Disable Relationships for Optimization</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Geom Relationship Ignore Input Points" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#geom-relationship-ignore-input-points">Geom Relationship Ignore Input Points</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Geom Relationship Ignore Input Points" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#geom-relationship-ignore-input-points">Geom Relationship Ignore Input Points</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Geom Relationship Reuse Ignored Input Points" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#geom-relationship-reuse-ignored-input-points">Geom Relationship Reuse Ignored Input Points</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Geom Relationship Reuse Ignored Input Points" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#geom-relationship-reuse-ignored-input-points">Geom Relationship Reuse Ignored Input Points</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Geom Relationship Auto Vectors" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-geom-relationship-auto-vectors">Get Geom Relationship Auto Vectors</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Geom Relationship Auto Vectors" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-geom-relationship-auto-vectors">Get Geom Relationship Auto Vectors</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Geom Relationship Cardinal Points" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-geom-relationship-cardinal-points">Get Geom Relationship Cardinal Points</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Geom Relationship Cardinal Points" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-geom-relationship-cardinal-points">Get Geom Relationship Cardinal Points</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Geom Relationship Criteria" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-geom-relationship-criteria">Get Geom Relationship Criteria</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Geom Relationship Criteria" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-geom-relationship-criteria">Get Geom Relationship Criteria</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Geom Relationship Measured Avg Point" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-geom-relationship-measured-avg-point">Get Geom Relationship Measured Avg Point</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Geom Relationship Measured Avg Point" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-geom-relationship-measured-avg-point">Get Geom Relationship Measured Avg Point</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Geom Relationship Measured Geometry" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-geom-relationship-measured-geometry">Get Geom Relationship Measured Geometry</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Geom Relationship Measured Geometry" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-geom-relationship-measured-geometry">Get Geom Relationship Measured Geometry</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Geom Relationship Nominal Avg Point" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-geom-relationship-nominal-avg-point">Get Geom Relationship Nominal Avg Point</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Geom Relationship Nominal Avg Point" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-geom-relationship-nominal-avg-point">Get Geom Relationship Nominal Avg Point</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Geom Relationship Nominal Geometry" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-geom-relationship-nominal-geometry">Get Geom Relationship Nominal Geometry</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Geom Relationship Nominal Geometry" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-geom-relationship-nominal-geometry">Get Geom Relationship Nominal Geometry</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Geom Relationship Point List" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-geom-relationship-point-list">Get Geom Relationship Point List</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Geom Relationship Point List" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-geom-relationship-point-list">Get Geom Relationship Point List</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Geom Relationship Projection Plane" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-geom-relationship-projection-plane">Get Geom Relationship Projection Plane</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Geom Relationship Projection Plane" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-geom-relationship-projection-plane">Get Geom Relationship Projection Plane</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Pipe Relationship Cut Status" data-group="Relationship Operations / Pipe Relationships" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-pipe-relationship-cut-status">Get Pipe Relationship Cut Status</a></td>
  <td>Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Pipe Relationship Cut Status" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-pipe-relationship-cut-status">Get Pipe Relationship Cut Status</a></td>
  <td>Analysis Operations / Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Pipe Relationship Properties" data-group="Relationship Operations / Pipe Relationships" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-pipe-relationship-properties">Get Pipe Relationship Properties</a></td>
  <td>Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Pipe Relationship Properties" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-pipe-relationship-properties">Get Pipe Relationship Properties</a></td>
  <td>Analysis Operations / Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Pipe Relationship Weights" data-group="Relationship Operations / Pipe Relationships" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-pipe-relationship-weights">Get Pipe Relationship Weights</a></td>
  <td>Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Pipe Relationship Weights" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-pipe-relationship-weights">Get Pipe Relationship Weights</a></td>
  <td>Analysis Operations / Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Fit Constraints (Scalar Type)" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-relationship-fit-constraints-scalar-type">Get Relationship Fit Constraints (Scalar Type)</a></td>
  <td>Relationship Operations / Relationship Attributes Scalar Types</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Relationship Fit Constraints (Scalar Type)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-relationship-fit-constraints-scalar-type">Get Relationship Fit Constraints (Scalar Type)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Outlier Rejection (Scalar Type)" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-status="current" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#get-relationship-outlier-rejection-scalar-type">Get Relationship Outlier Rejection (Scalar Type)</a></td>
  <td>Relationship Operations / Relationship Attributes Scalar Types</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Get Relationship Outlier Rejection (Scalar Type)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-relationship-outlier-rejection-scalar-type">Get Relationship Outlier Rejection (Scalar Type)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Projection Options" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-relationship-projection-options">Get Relationship Projection Options</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Relationship Projection Options" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-relationship-projection-options">Get Relationship Projection Options</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Reporting Frame" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-relationship-reporting-frame">Get Relationship Reporting Frame</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Relationship Reporting Frame" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-relationship-reporting-frame">Get Relationship Reporting Frame</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Sigmoidal Gap Fit Constraints" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-status="current" data-validation="at-risk-relationship-fixture">
  <td><a href="#get-relationship-sigmoidal-gap-fit-constraints">Get Relationship Sigmoidal Gap Fit Constraints</a></td>
  <td>Relationship Operations / Relationship Attributes Scalar Types</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk - Relationship fixture</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Sub Sampling Options" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-relationship-sub-sampling-options">Get Relationship Sub Sampling Options</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Relationship Sub Sampling Options" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-relationship-sub-sampling-options">Get Relationship Sub Sampling Options</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Tolerance (Scalar Type)" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-relationship-tolerance-scalar-type">Get Relationship Tolerance (Scalar Type)</a></td>
  <td>Relationship Operations / Relationship Attributes Scalar Types</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Relationship Tolerance (Scalar Type)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-relationship-tolerance-scalar-type">Get Relationship Tolerance (Scalar Type)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Tolerance (Vector Type)" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-relationship-tolerance-vector-type">Get Relationship Tolerance (Vector Type)</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Relationship Tolerance (Vector Type)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-relationship-tolerance-vector-type">Get Relationship Tolerance (Vector Type)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Type" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-relationship-type">Get Relationship Type</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Relationship Type" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-relationship-type">Get Relationship Type</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Weighting" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-relationship-weighting">Get Relationship Weighting</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Relationship Weighting" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-relationship-weighting">Get Relationship Weighting</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Pipe Fitting Relationship" data-group="Relationship Operations / Pipe Relationships" data-status="current" data-validation="portable-contract-review">
  <td><a href="#make-pipe-fitting-relationship">Make Pipe Fitting Relationship</a></td>
  <td>Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Make Pipe Fitting Relationship" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-pipe-fitting-relationship">Make Pipe Fitting Relationship</a></td>
  <td>Analysis Operations / Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Pipe Relationship Cut" data-group="Relationship Operations / Pipe Relationships" data-status="current" data-validation="portable-contract-review">
  <td><a href="#make-pipe-relationship-cut">Make Pipe Relationship Cut</a></td>
  <td>Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Make Pipe Relationship Cut" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-pipe-relationship-cut">Make Pipe Relationship Cut</a></td>
  <td>Analysis Operations / Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Pipe Relationship Force Cut to Frame" data-group="Relationship Operations / Pipe Relationships" data-status="current" data-validation="portable-contract-review">
  <td><a href="#pipe-relationship-force-cut-to-frame">Pipe Relationship Force Cut to Frame</a></td>
  <td>Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Pipe Relationship Force Cut to Frame" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#pipe-relationship-force-cut-to-frame">Pipe Relationship Force Cut to Frame</a></td>
  <td>Analysis Operations / Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Rejection (Scalar Type)" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-status="sdk-unavailable" data-validation="not-applicable">
  <td><a href="#rejection-scalar-type">Rejection (Scalar Type)</a></td>
  <td>Relationship Operations / Relationship Attributes Scalar Types</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Not applicable</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Geom Relationship Auto Measure Nominal Feature" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-geom-relationship-auto-measure-nominal-feature">Set Geom Relationship Auto Measure Nominal Feature</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Geom Relationship Auto Vectors Nominal (AVN)" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-geom-relationship-auto-vectors-nominal-avn">Set Geom Relationship Auto Vectors Nominal (AVN)</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Geom Relationship Auto Vectors Nominal (AVN)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-geom-relationship-auto-vectors-nominal-avn">Set Geom Relationship Auto Vectors Nominal (AVN)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Geom Relationship Cardinal Points" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-geom-relationship-cardinal-points">Set Geom Relationship Cardinal Points</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Geom Relationship Cardinal Points" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-geom-relationship-cardinal-points">Set Geom Relationship Cardinal Points</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Geom Relationship Criteria" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-geom-relationship-criteria">Set Geom Relationship Criteria</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Geom Relationship Criteria" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-geom-relationship-criteria">Set Geom Relationship Criteria</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Geom Relationship Measured Geometry" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-geom-relationship-measured-geometry">Set Geom Relationship Measured Geometry</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Geom Relationship Measured Geometry" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-geom-relationship-measured-geometry">Set Geom Relationship Measured Geometry</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Geom Relationship Nominal Avg Point" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-geom-relationship-nominal-avg-point">Set Geom Relationship Nominal Avg Point</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Geom Relationship Nominal Avg Point" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-geom-relationship-nominal-avg-point">Set Geom Relationship Nominal Avg Point</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Geom Relationship Nominal Geometry" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-geom-relationship-nominal-geometry">Set Geom Relationship Nominal Geometry</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Geom Relationship Nominal Geometry" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-geom-relationship-nominal-geometry">Set Geom Relationship Nominal Geometry</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Geom Relationship Projection Plane" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-geom-relationship-projection-plane">Set Geom Relationship Projection Plane</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Geom Relationship Projection Plane" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-geom-relationship-projection-plane">Set Geom Relationship Projection Plane</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Object to Object Direction Relationship Fit Constraints" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-object-to-object-direction-relationship-fit-constraints">Set Object to Object Direction Relationship Fit Constraints</a></td>
  <td>Relationship Operations / Relationship Attributes Scalar Types</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Object to Object Direction Relationship Fit Constraints" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-object-to-object-direction-relationship-fit-constraints">Set Object to Object Direction Relationship Fit Constraints</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Object to Object Direction Relationship Tolerances" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-status="current" data-validation="at-risk-object-direction-relationship-fixture">
  <td><a href="#set-object-to-object-direction-relationship-tolerances">Set Object to Object Direction Relationship Tolerances</a></td>
  <td>Relationship Operations / Relationship Attributes Scalar Types</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk - object-direction Relationship fixture</td>
</tr>
<tr data-command="Set Object to Object Direction Relationship Tolerances" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-object-to-object-direction-relationship-tolerances">Set Object to Object Direction Relationship Tolerances</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Pipe Relationship Segment Properties" data-group="Relationship Operations / Pipe Relationships" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-pipe-relationship-segment-properties">Set Pipe Relationship Segment Properties</a></td>
  <td>Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Pipe Relationship Segment Properties" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-pipe-relationship-segment-properties">Set Pipe Relationship Segment Properties</a></td>
  <td>Analysis Operations / Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Pipe Relationship Weights" data-group="Relationship Operations / Pipe Relationships" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-pipe-relationship-weights">Set Pipe Relationship Weights</a></td>
  <td>Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Pipe Relationship Weights" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-pipe-relationship-weights">Set Pipe Relationship Weights</a></td>
  <td>Analysis Operations / Relationship Operations / Pipe Relationships</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Auto Vectors Fit (AVF)" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-auto-vectors-fit-avf">Set Relationship Auto Vectors Fit (AVF)</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Auto Vectors Fit (AVF)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-auto-vectors-fit-avf">Set Relationship Auto Vectors Fit (AVF)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Auto Vectors Group Default Prefix" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-auto-vectors-group-default-prefix">Set Relationship Auto Vectors Group Default Prefix</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Desired Meas Count" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-desired-meas-count">Set Relationship Desired Meas Count</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Desired Meas Count" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-desired-meas-count">Set Relationship Desired Meas Count</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Dormant Status" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-dormant-status">Set Relationship Dormant Status</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Dormant Status" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-dormant-status">Set Relationship Dormant Status</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Fit Constraints (Scalar Type)" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-fit-constraints-scalar-type">Set Relationship Fit Constraints (Scalar Type)</a></td>
  <td>Relationship Operations / Relationship Attributes Scalar Types</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Fit Constraints (Scalar Type)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-fit-constraints-scalar-type">Set Relationship Fit Constraints (Scalar Type)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Orientation Fit Constraints (Vector Type)" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-orientation-fit-constraints-vector-type">Set Relationship Orientation Fit Constraints (Vector Type)</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Orientation Fit Constraints (Vector Type)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-orientation-fit-constraints-vector-type">Set Relationship Orientation Fit Constraints (Vector Type)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Outlier Rejection (Scalar Type)" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-status="current" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#set-relationship-outlier-rejection-scalar-type">Set Relationship Outlier Rejection (Scalar Type)</a></td>
  <td>Relationship Operations / Relationship Attributes Scalar Types</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Set Relationship Outlier Rejection (Scalar Type)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-outlier-rejection-scalar-type">Set Relationship Outlier Rejection (Scalar Type)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Position Fit Constraints (Vector Type)" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-position-fit-constraints-vector-type">Set Relationship Position Fit Constraints (Vector Type)</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Position Fit Constraints (Vector Type)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-position-fit-constraints-vector-type">Set Relationship Position Fit Constraints (Vector Type)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Projection Options" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-projection-options">Set Relationship Projection Options</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Projection Options" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-projection-options">Set Relationship Projection Options</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Reporting Frame" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-reporting-frame">Set Relationship Reporting Frame</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Reporting Frame" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-reporting-frame">Set Relationship Reporting Frame</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Sigmoidal Gap Fit Constraints" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-sigmoidal-gap-fit-constraints">Set Relationship Sigmoidal Gap Fit Constraints</a></td>
  <td>Relationship Operations / Relationship Attributes Scalar Types</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Sub Sampling Options" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-sub-sampling-options">Set Relationship Sub Sampling Options</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Sub Sampling Options" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-sub-sampling-options">Set Relationship Sub Sampling Options</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Tolerance (Scalar Type)" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-tolerance-scalar-type">Set Relationship Tolerance (Scalar Type)</a></td>
  <td>Relationship Operations / Relationship Attributes Scalar Types</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Tolerance (Scalar Type)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-tolerance-scalar-type">Set Relationship Tolerance (Scalar Type)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Tolerance (Vector Type)" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-tolerance-vector-type">Set Relationship Tolerance (Vector Type)</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Tolerance (Vector Type)" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-tolerance-vector-type">Set Relationship Tolerance (Vector Type)</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Voxel Cloud Display" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-voxel-cloud-display">Set Relationship Voxel Cloud Display</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Voxel Cloud Display" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-voxel-cloud-display">Set Relationship Voxel Cloud Display</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Weighting" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-weighting">Set Relationship Weighting</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Weighting" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-weighting">Set Relationship Weighting</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Weights Normalized" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="portable-contract-review">
  <td><a href="#set-relationship-weights-normalized">Set Relationship Weights Normalized</a></td>
  <td>Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Relationship Weights Normalized" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-weights-normalized">Set Relationship Weights Normalized</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Generate Geometry Relationship Summary" data-group="Relationship Operations" data-status="current" data-validation="at-risk-relationship-fixture">
  <td><a href="#generate-geometry-relationship-summary">Generate Geometry Relationship Summary</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Relationship fixture</td>
</tr>
<tr data-command="Generate Geometry Relationship Summary" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#generate-geometry-relationship-summary">Generate Geometry Relationship Summary</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Edit Geometry Relationship Point List" data-group="Relationship Operations" data-status="current" data-validation="at-risk-interactive-relationship-fixture">
  <td><a href="#edit-geometry-relationship-point-list">Edit Geometry Relationship Point List</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Interactive relationship fixture</td>
</tr>
<tr data-command="Edit Geometry Relationship Point List" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#edit-geometry-relationship-point-list">Edit Geometry Relationship Point List</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Filter Geometry Relationship Outlier Cloud Points" data-group="Relationship Operations" data-status="current" data-validation="at-risk-cloud-relationship-fixture">
  <td><a href="#filter-geometry-relationship-outlier-cloud-points">Filter Geometry Relationship Outlier Cloud Points</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Cloud relationship fixture</td>
</tr>
<tr data-command="Filter Geometry Relationship Outlier Cloud Points" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#filter-geometry-relationship-outlier-cloud-points">Filter Geometry Relationship Outlier Cloud Points</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Number of Relationships in Relationship Ref List" data-group="Relationship Operations" data-status="excluded" data-validation="not-applicable">
  <td><a href="#get-number-of-relationships-in-relationship-ref-list">Get Number of Relationships in Relationship Ref List</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td>
</tr>
<tr data-command="Get Number of Relationships in Relationship Ref List" data-group="Analysis Operations / Relationship Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-number-of-relationships-in-relationship-ref-list">Get Number of Relationships in Relationship Ref List</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get i-th Relationship From Relationship Ref List" data-group="Relationship Operations" data-status="excluded" data-validation="not-applicable">
  <td><a href="#get-i-th-relationship-from-relationship-ref-list">Get i-th Relationship From Relationship Ref List</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td>
</tr>
<tr data-command="Get i-th Relationship From Relationship Ref List" data-group="Analysis Operations / Relationship Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-i-th-relationship-from-relationship-ref-list">Get i-th Relationship From Relationship Ref List</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get i-th Relationship From Relationship Ref List (Iterator)" data-group="Relationship Operations" data-status="excluded" data-validation="not-applicable">
  <td><a href="#get-i-th-relationship-from-relationship-ref-list-iterator">Get i-th Relationship From Relationship Ref List (Iterator)</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td>
</tr>
<tr data-command="Get i-th Relationship From Relationship Ref List (Iterator)" data-group="Analysis Operations / Relationship Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-i-th-relationship-from-relationship-ref-list-iterator">Get i-th Relationship From Relationship Ref List (Iterator)</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Sort Relationship Ref List" data-group="Relationship Operations" data-status="excluded" data-validation="not-applicable">
  <td><a href="#sort-relationship-ref-list">Sort Relationship Ref List</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td>
</tr>
<tr data-command="Sort Relationship Ref List" data-group="Analysis Operations / Relationship Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#sort-relationship-ref-list">Sort Relationship Ref List</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Relationship Watch Window Template" data-group="Relationship Operations" data-status="current" data-validation="at-risk-watch-window-relationship-fixture">
  <td><a href="#relationship-watch-window-template">Relationship Watch Window Template</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Watch-window relationship fixture</td>
</tr>
<tr data-command="Relationship Watch Window Template" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#relationship-watch-window-template">Relationship Watch Window Template</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Point to Point Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-relationship-fixture">
  <td><a href="#make-point-to-point-relationship">Make Point to Point Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Relationship fixture</td>
</tr>
<tr data-command="Make Point to Point Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-point-to-point-relationship">Make Point to Point Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Frame to Frame Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-relationship-fixture">
  <td><a href="#make-frame-to-frame-relationship">Make Frame to Frame Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Relationship fixture</td>
</tr>
<tr data-command="Make Frame to Frame Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-frame-to-frame-relationship">Make Frame to Frame Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Points to Objects Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-points-objects-relationship-fixture"><td><a href="#make-points-to-objects-relationship">Make Points to Objects Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - points and objects fixture</td></tr>
<tr data-command="Make Points to Objects Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-points-to-objects-relationship">Make Points to Objects Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Points to Points Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-paired-points-relationship-fixture"><td><a href="#make-points-to-points-relationship">Make Points to Points Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - paired-points fixture</td></tr>
<tr data-command="Make Points to Points Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-points-to-points-relationship">Make Points to Points Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Groups to Objects Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-groups-objects-relationship-fixture"><td><a href="#make-groups-to-objects-relationship">Make Groups to Objects Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - groups and objects fixture</td></tr>
<tr data-command="Make Groups to Objects Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-groups-to-objects-relationship">Make Groups to Objects Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Object to Object Direction Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-geometry-relationship-fixture"><td><a href="#make-object-to-object-direction-relationship">Make Object to Object Direction Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - geometry fixture</td></tr>
<tr data-command="Make Object to Object Direction Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-object-to-object-direction-relationship">Make Object to Object Direction Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Point Clouds to Objects Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-cloud-relationship-fixture"><td><a href="#make-point-clouds-to-objects-relationship">Make Point Clouds to Objects Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - cloud fixture</td></tr>
<tr data-command="Make Point Clouds to Objects Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-point-clouds-to-objects-relationship">Make Point Clouds to Objects Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Group to Group Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-paired-groups-relationship-fixture"><td><a href="#make-group-to-group-relationship">Make Group to Group Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - paired-groups fixture</td></tr>
<tr data-command="Make Group to Group Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-group-to-group-relationship">Make Group to Group Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Group to Nominal Group Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-nominal-group-relationship-fixture"><td><a href="#make-group-to-nominal-group-relationship">Make Group to Nominal Group Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - nominal-group fixture</td></tr>
<tr data-command="Make Group to Nominal Group Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-group-to-nominal-group-relationship">Make Group to Nominal Group Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Average Point Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-average-point-relationship-fixture"><td><a href="#make-average-point-relationship">Make Average Point Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - average-point fixture</td></tr>
<tr data-command="Make Average Point Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-average-point-relationship">Make Average Point Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Geometry Fit Only Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-geometry-fit-relationship-fixture"><td><a href="#make-geometry-fit-only-relationship">Make Geometry Fit Only Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - geometry-fit fixture</td></tr>
<tr data-command="Make Geometry Fit Only Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-geometry-fit-only-relationship">Make Geometry Fit Only Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Geometry Fit and Compare to Nominal Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-geometry-fit-relationship-fixture"><td><a href="#make-geometry-fit-and-compare-to-nominal-relationship">Make Geometry Fit and Compare to Nominal Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - geometry-fit fixture</td></tr>
<tr data-command="Make Geometry Fit and Compare to Nominal Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-geometry-fit-and-compare-to-nominal-relationship">Make Geometry Fit and Compare to Nominal Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Geometry Compare Only Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-geometry-relationship-fixture"><td><a href="#make-geometry-compare-only-relationship">Make Geometry Compare Only Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - geometry fixture</td></tr>
<tr data-command="Make Geometry Compare Only Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-geometry-compare-only-relationship">Make Geometry Compare Only Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Dynamic Point Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-dynamic-geometry-fixture"><td><a href="#make-dynamic-point-relationship">Make Dynamic Point Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - dynamic-geometry fixture</td></tr>
<tr data-command="Make Dynamic Point Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-dynamic-point-relationship">Make Dynamic Point Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Dynamic Line Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-dynamic-geometry-fixture"><td><a href="#make-dynamic-line-relationship">Make Dynamic Line Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - dynamic-geometry fixture</td></tr>
<tr data-command="Make Dynamic Line Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-dynamic-line-relationship">Make Dynamic Line Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Dynamic Plane Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-dynamic-geometry-fixture"><td><a href="#make-dynamic-plane-relationship">Make Dynamic Plane Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - dynamic-geometry fixture</td></tr>
<tr data-command="Make Dynamic Plane Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-dynamic-plane-relationship">Make Dynamic Plane Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Dynamic Circle Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-dynamic-geometry-fixture"><td><a href="#make-dynamic-circle-relationship">Make Dynamic Circle Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - dynamic-geometry fixture</td></tr>
<tr data-command="Make Dynamic Circle Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-dynamic-circle-relationship">Make Dynamic Circle Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Dynamic Ellipse Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-dynamic-geometry-fixture"><td><a href="#make-dynamic-ellipse-relationship">Make Dynamic Ellipse Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - dynamic-geometry fixture</td></tr>
<tr data-command="Make Dynamic Ellipse Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-dynamic-ellipse-relationship">Make Dynamic Ellipse Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Vector Group To Vector Group Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-vector-group-relationship-fixture"><td><a href="#make-vector-group-to-vector-group-relationship">Make Vector Group To Vector Group Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Vector Group fixture</td></tr>
<tr data-command="Make Vector Group To Vector Group Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-vector-group-to-vector-group-relationship">Make Vector Group To Vector Group Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Vector Group To Vector Group Cylindrical Zone" data-group="Relationship Operations" data-status="current" data-validation="at-risk-vector-group-relationship-fixture"><td><a href="#set-vector-group-to-vector-group-cylindrical-zone">Set Vector Group To Vector Group Cylindrical Zone</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Vector Group fixture</td></tr>
<tr data-command="Set Vector Group To Vector Group Cylindrical Zone" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-vector-group-to-vector-group-cylindrical-zone">Set Vector Group To Vector Group Cylindrical Zone</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Vector Group To Vector Group Fit Weights" data-group="Relationship Operations" data-status="current" data-validation="at-risk-vector-group-relationship-fixture"><td><a href="#set-vector-group-to-vector-group-fit-weights">Set Vector Group To Vector Group Fit Weights</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Vector Group fixture</td></tr>
<tr data-command="Set Vector Group To Vector Group Fit Weights" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-vector-group-to-vector-group-fit-weights">Set Vector Group To Vector Group Fit Weights</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Vector Group To Vector Group Fit Gradient Factor" data-group="Relationship Operations" data-status="current" data-validation="at-risk-vector-group-relationship-fixture"><td><a href="#set-vector-group-to-vector-group-fit-gradient-factor">Set Vector Group To Vector Group Fit Gradient Factor</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Vector Group fixture</td></tr>
<tr data-command="Set Vector Group To Vector Group Fit Gradient Factor" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-vector-group-to-vector-group-fit-gradient-factor">Set Vector Group To Vector Group Fit Gradient Factor</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Vector Group To Vector Group Relative Polarity" data-group="Relationship Operations" data-status="current" data-validation="at-risk-vector-group-relationship-fixture"><td><a href="#set-vector-group-to-vector-group-relative-polarity">Set Vector Group To Vector Group Relative Polarity</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Vector Group fixture</td></tr>
<tr data-command="Set Vector Group To Vector Group Relative Polarity" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-vector-group-to-vector-group-relative-polarity">Set Vector Group To Vector Group Relative Polarity</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Delete Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-destructive-relationship-fixture"><td><a href="#delete-relationship">Delete Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - destructive Relationship fixture</td></tr>
<tr data-command="Delete Relationship" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#delete-relationship">Delete Relationship</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Optimization Search Options" data-group="Relationship Operations" data-status="current" data-validation="at-risk-relationship-fit-fixture"><td><a href="#set-optimization-search-options">Set Optimization Search Options</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Relationship fit fixture</td></tr>
<tr data-command="Set Optimization Search Options" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-optimization-search-options">Set Optimization Search Options</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Optimization Perturbation Parameters" data-group="Relationship Operations" data-status="current" data-validation="at-risk-relationship-fit-fixture"><td><a href="#set-optimization-perturbation-parameters">Set Optimization Perturbation Parameters</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Relationship fit fixture</td></tr>
<tr data-command="Set Optimization Perturbation Parameters" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-optimization-perturbation-parameters">Set Optimization Perturbation Parameters</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Do Relationship Fit" data-group="Relationship Operations" data-status="current" data-validation="at-risk-relationship-fit-fixture"><td><a href="#do-relationship-fit">Do Relationship Fit</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Relationship fit fixture</td></tr>
<tr data-command="Do Relationship Fit" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#do-relationship-fit">Do Relationship Fit</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Move Collections by Minimizing Relationships" data-group="Relationship Operations" data-status="current" data-validation="at-risk-relationship-fit-fixture"><td><a href="#move-collections-by-minimizing-relationships">Move Collections by Minimizing Relationships</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Relationship fit fixture</td></tr>
<tr data-command="Move Collections by Minimizing Relationships" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#move-collections-by-minimizing-relationships">Move Collections by Minimizing Relationships</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get General Relationship Statistics" data-group="Relationship Operations" data-status="current" data-validation="at-risk-relationship-fixture"><td><a href="#get-general-relationship-statistics">Get General Relationship Statistics</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Relationship fixture</td></tr>
<tr data-command="Get General Relationship Statistics" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-general-relationship-statistics">Get General Relationship Statistics</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Points to Objects Relationship Statistics" data-group="Relationship Operations" data-status="current" data-validation="at-risk-points-objects-relationship-fixture"><td><a href="#get-points-to-objects-relationship-statistics">Get Points to Objects Relationship Statistics</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - points and objects fixture</td></tr>
<tr data-command="Get Points to Objects Relationship Statistics" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-points-to-objects-relationship-statistics">Get Points to Objects Relationship Statistics</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Start/Stop Relationship Trapping" data-group="Relationship Operations" data-status="current" data-validation="at-risk-instrument-relationship-fixture"><td><a href="#startstop-relationship-trapping">Start/Stop Relationship Trapping</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - instrument and Relationship fixture</td></tr>
<tr data-command="Start/Stop Relationship Trapping" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#startstop-relationship-trapping">Start/Stop Relationship Trapping</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Point to Point Relationship Statistics" data-group="Relationship Operations" data-status="current" data-validation="at-risk-point-relationship-fixture"><td><a href="#get-point-to-point-relationship-statistics">Get Point to Point Relationship Statistics</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Point Relationship fixture</td></tr>
<tr data-command="Get Point to Point Relationship Statistics" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-point-to-point-relationship-statistics">Get Point to Point Relationship Statistics</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Group To Nominal Group View Zooming" data-group="Relationship Operations" data-status="current" data-validation="at-risk-nominal-group-relationship-fixture"><td><a href="#set-group-to-nominal-group-view-zooming">Set Group To Nominal Group View Zooming</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - nominal-group Relationship fixture</td></tr>
<tr data-command="Set Group To Nominal Group View Zooming" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-group-to-nominal-group-view-zooming">Set Group To Nominal Group View Zooming</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Relationship Associated Data" data-group="Relationship Operations" data-status="current" data-validation="at-risk-relationship-fixture"><td><a href="#set-relationship-associated-data">Set Relationship Associated Data</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Relationship fixture</td></tr>
<tr data-command="Set Relationship Associated Data" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-relationship-associated-data">Set Relationship Associated Data</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Associated Data" data-group="Relationship Operations" data-status="current" data-validation="at-risk-relationship-fixture"><td><a href="#get-relationship-associated-data">Get Relationship Associated Data</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Relationship fixture</td></tr>
<tr data-command="Get Relationship Associated Data" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-relationship-associated-data">Get Relationship Associated Data</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Points to Points Relationship Associated Data" data-group="Relationship Operations" data-status="current" data-validation="at-risk-paired-points-relationship-fixture"><td><a href="#set-points-to-points-relationship-associated-data">Set Points to Points Relationship Associated Data</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - paired-Points Relationship fixture</td></tr>
<tr data-command="Set Points to Points Relationship Associated Data" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-points-to-points-relationship-associated-data">Set Points to Points Relationship Associated Data</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Points to Points Relationship Associated Data" data-group="Relationship Operations" data-status="current" data-validation="at-risk-paired-points-relationship-fixture"><td><a href="#get-points-to-points-relationship-associated-data">Get Points to Points Relationship Associated Data</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - paired-Points Relationship fixture</td></tr>
<tr data-command="Get Points to Points Relationship Associated Data" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-points-to-points-relationship-associated-data">Get Points to Points Relationship Associated Data</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Auto Filter Proximity Settings" data-group="Relationship Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#make-auto-filter-proximity-settings">Make Auto Filter Proximity Settings</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Make Auto Filter Proximity Settings" data-group="Analysis Operations / Relationship Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-auto-filter-proximity-settings">Make Auto Filter Proximity Settings</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Auto Filter Clouds to Nominal Geometry 3D" data-group="Relationship Operations" data-status="current" data-validation="at-risk-cloud-relationship-fixture"><td><a href="#auto-filter-clouds-to-nominal-geometry-3d">Auto Filter Clouds to Nominal Geometry 3D</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - cloud and Relationship fixture</td></tr>
<tr data-command="Auto Filter Clouds to Nominal Geometry 3D" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#auto-filter-clouds-to-nominal-geometry-3d">Auto Filter Clouds to Nominal Geometry 3D</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Auto Filter Clouds to Nominal Geometry 2D" data-group="Relationship Operations" data-status="current" data-validation="at-risk-cloud-relationship-fixture"><td><a href="#auto-filter-clouds-to-nominal-geometry-2d">Auto Filter Clouds to Nominal Geometry 2D</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - cloud and Relationship fixture</td></tr>
<tr data-command="Auto Filter Clouds to Nominal Geometry 2D" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#auto-filter-clouds-to-nominal-geometry-2d">Auto Filter Clouds to Nominal Geometry 2D</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Auto Filter Points to Nominal Geometry 3D" data-group="Relationship Operations" data-status="current" data-validation="at-risk-point-relationship-fixture"><td><a href="#auto-filter-points-to-nominal-geometry-3d">Auto Filter Points to Nominal Geometry 3D</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Point and Relationship fixture</td></tr>
<tr data-command="Auto Filter Points to Nominal Geometry 3D" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#auto-filter-points-to-nominal-geometry-3d">Auto Filter Points to Nominal Geometry 3D</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Auto Filter Points/Groups/Clouds to Surface Faces" data-group="Relationship Operations" data-status="current" data-validation="at-risk-surface-filter-fixture"><td><a href="#auto-filter-pointsgroupsclouds-to-surface-faces">Auto Filter Points/Groups/Clouds to Surface Faces</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Point, Group, Cloud, and Surface fixture</td></tr>
<tr data-command="Auto Filter Points/Groups/Clouds to Surface Faces" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#auto-filter-pointsgroupsclouds-to-surface-faces">Auto Filter Points/Groups/Clouds to Surface Faces</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Extract Geometry From Point Clouds" data-group="Relationship Operations" data-status="current" data-validation="at-risk-cloud-geometry-extraction-fixture"><td><a href="#extract-geometry-from-point-clouds">Extract Geometry From Point Clouds</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Cloud and geometry-extraction fixture</td></tr>
<tr data-target="2026.1.0529.7" data-command="Create Points to Objects Map" data-group="Relationship Operations" data-status="current" data-validation="at-risk-points-objects-map-fixture"><td><a href="#create-points-to-objects-map">Create Points to Objects Map</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Points-to-objects map fixture</td></tr>
<tr data-command="Create Points to Objects Map" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#create-points-to-objects-map">Create Points to Objects Map</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Objects From Points to Objects Map (Point List)" data-group="Relationship Operations" data-status="current" data-validation="at-risk-points-objects-map-fixture"><td><a href="#get-objects-from-points-to-objects-map-point-list">Get Objects From Points to Objects Map (Point List)</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Points-to-objects map fixture</td></tr>
<tr data-command="Get Objects From Points to Objects Map (Point List)" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-objects-from-points-to-objects-map-point-list">Get Objects From Points to Objects Map (Point List)</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Compute Geometry Relationship Uncertainties" data-group="Relationship Operations" data-status="current" data-validation="at-risk-uncertainty-relationship-fixture"><td><a href="#compute-geometry-relationship-uncertainties">Compute Geometry Relationship Uncertainties</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - uncertainty Relationship fixture</td></tr>
<tr data-command="Compute Geometry Relationship Uncertainties" data-group="Analysis Operations / Relationship Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#compute-geometry-relationship-uncertainties">Compute Geometry Relationship Uncertainties</a></td>
  <td>Analysis Operations / Relationship Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Cloud to Swatch Relationship" data-group="Relationship Operations" data-status="current" data-validation="at-risk-cloud-swatch-relationship-fixture"><td><a href="#make-cloud-to-swatch-relationship">Make Cloud to Swatch Relationship</a></td><td>Relationship Operations</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Cloud and Swatch Relationship fixture</td></tr>
<tr data-target="2026.1.0529.7" data-command="Get Geom Relationship Criteria Name List" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="at-risk-geometry-relationship-fixture"><td><a href="#get-geom-relationship-criteria-name-list">Get Geom Relationship Criteria Name List</a></td><td>Relationship Operations / Relationship Attributes</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - geometry Relationship fixture</td></tr>
<tr data-command="Get Geom Relationship Criteria Name List" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-geom-relationship-criteria-name-list">Get Geom Relationship Criteria Name List</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Relationship Status" data-group="Relationship Operations / Relationship Attributes" data-status="current" data-validation="at-risk-relationship-fixture"><td><a href="#get-relationship-status">Get Relationship Status</a></td><td>Relationship Operations / Relationship Attributes</td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - Relationship fixture</td></tr>
<tr data-command="Get Relationship Status" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-relationship-status">Get Relationship Status</a></td>
  <td>Analysis Operations / Relationship Operations / Relationship Attributes</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Enable/Disable Relationships for Optimization

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#enabledisable-relationships-for-optimization) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#enabledisable-relationships-for-optimization) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#enabledisable-relationships-for-optimization) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#enabledisable-relationships-for-optimization)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationships` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Enable?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#enabledisable-relationships-for-optimization) · [.NET](/api/dotnet/relationship-operations#enabledisable-relationships-for-optimization) · [Python](/api/python/relationship-operations#enabledisable-relationships-for-optimization) · [JavaScript and TypeScript](/api/javascript/relationship-operations#enabledisable-relationships-for-optimization)


## Geom Relationship Ignore Input Points

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="at-risk-fixture-or-interactive-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">At risk fixture or interactive validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#geom-relationship-ignore-input-points) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#geom-relationship-ignore-input-points) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#geom-relationship-ignore-input-points) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#geom-relationship-ignore-input-points)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>At Risk — fixture or interactive validation required</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Outlier Rejection Options` | SDK-unavailable MP argument | Unavailable | Not exposed |

### Briosa Disposition

Executes the relationship command without the MP-only Outlier Rejection Options input. Its exact default behavior still requires licensed validation.


**API References:** [gRPC](/api/grpc/relationship-operations#geom-relationship-ignore-input-points) · [.NET](/api/dotnet/relationship-operations#geom-relationship-ignore-input-points) · [Python](/api/python/relationship-operations#geom-relationship-ignore-input-points) · [JavaScript and TypeScript](/api/javascript/relationship-operations#geom-relationship-ignore-input-points)


## Geom Relationship Reuse Ignored Input Points

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#geom-relationship-reuse-ignored-input-points) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#geom-relationship-reuse-ignored-input-points) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#geom-relationship-reuse-ignored-input-points) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#geom-relationship-reuse-ignored-input-points)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#geom-relationship-reuse-ignored-input-points) · [.NET](/api/dotnet/relationship-operations#geom-relationship-reuse-ignored-input-points) · [Python](/api/python/relationship-operations#geom-relationship-reuse-ignored-input-points) · [JavaScript and TypeScript](/api/javascript/relationship-operations#geom-relationship-reuse-ignored-input-points)


## Get Geom Relationship Auto Vectors

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-auto-vectors) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-auto-vectors) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-auto-vectors) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-auto-vectors)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Auto Vectors Nominal (AVN) - Enabled?` | Boolean | — | — |
| Output | `Auto Vectors Nominal (AVN) - Name` | Collection Object Name | — | — |
| Output | `Auto Vectors Fit (AVF) - Enabled?` | Boolean | — | — |
| Output | `Auto Vectors Fit (AVF) - Name` | Collection Object Name | — | — |
| Output | `Points Type` | String | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-geom-relationship-auto-vectors) · [.NET](/api/dotnet/relationship-operations#get-geom-relationship-auto-vectors) · [Python](/api/python/relationship-operations#get-geom-relationship-auto-vectors) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-geom-relationship-auto-vectors)


## Get Geom Relationship Cardinal Points

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-cardinal-points) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-cardinal-points) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-cardinal-points) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-cardinal-points)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Cardinal Point Name List` | Point Name Ref List | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-geom-relationship-cardinal-points) · [.NET](/api/dotnet/relationship-operations#get-geom-relationship-cardinal-points) · [Python](/api/python/relationship-operations#get-geom-relationship-cardinal-points) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-geom-relationship-cardinal-points)


## Get Geom Relationship Criteria

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Criteria` | String | Empty | Empty |
| Output | `Nominal` | Double | — | — |
| Output | `Measured` | Double | — | — |
| Output | `Delta` | Double | — | — |
| Output | `Low Tolerance` | Double | — | — |
| Output | `High Tolerance` | Double | — | — |
| Output | `Optimization: Delta Weight` | Double | — | — |
| Output | `Optimization: Out of Tolerance Weight` | Double | — | — |
| Output | `Is within Tolerance?` | String | — | — |
| Output | `Has Uncertainty?` | Boolean | — | — |
| Output | `Uncertainty` | Double | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-geom-relationship-criteria) · [.NET](/api/dotnet/relationship-operations#get-geom-relationship-criteria) · [Python](/api/python/relationship-operations#get-geom-relationship-criteria) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-geom-relationship-criteria)


## Get Geom Relationship Measured Avg Point

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-avg-point) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-avg-point) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-avg-point) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-avg-point)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Measured Average Point` | Point Name | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-geom-relationship-measured-avg-point) · [.NET](/api/dotnet/relationship-operations#get-geom-relationship-measured-avg-point) · [Python](/api/python/relationship-operations#get-geom-relationship-measured-avg-point) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-geom-relationship-measured-avg-point)


## Get Geom Relationship Measured Geometry

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-geometry) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-geometry) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-geometry) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-geometry)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Measured Geometry` | Collection Object Name | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-geom-relationship-measured-geometry) · [.NET](/api/dotnet/relationship-operations#get-geom-relationship-measured-geometry) · [Python](/api/python/relationship-operations#get-geom-relationship-measured-geometry) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-geom-relationship-measured-geometry)


## Get Geom Relationship Nominal Avg Point

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-avg-point) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-avg-point) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-avg-point) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-avg-point)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Nominal Average Point` | Point Name | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-geom-relationship-nominal-avg-point) · [.NET](/api/dotnet/relationship-operations#get-geom-relationship-nominal-avg-point) · [Python](/api/python/relationship-operations#get-geom-relationship-nominal-avg-point) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-geom-relationship-nominal-avg-point)


## Get Geom Relationship Nominal Geometry

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-geometry) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-geometry) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-geometry) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-geometry)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Nominal Geometry` | Collection Object Name | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-geom-relationship-nominal-geometry) · [.NET](/api/dotnet/relationship-operations#get-geom-relationship-nominal-geometry) · [Python](/api/python/relationship-operations#get-geom-relationship-nominal-geometry) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-geom-relationship-nominal-geometry)


## Get Geom Relationship Point List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-point-list) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-point-list) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-point-list) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-point-list)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `All Points` | Point Name Ref List | — | — |
| Output | `Used Points` | Point Name Ref List | — | — |
| Output | `Ignored Points` | Point Name Ref List | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-geom-relationship-point-list) · [.NET](/api/dotnet/relationship-operations#get-geom-relationship-point-list) · [Python](/api/python/relationship-operations#get-geom-relationship-point-list) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-geom-relationship-point-list)


## Get Geom Relationship Projection Plane

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-projection-plane) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-projection-plane) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-projection-plane) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-projection-plane)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Projection Plane Name` | Collection Object Name | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-geom-relationship-projection-plane) · [.NET](/api/dotnet/relationship-operations#get-geom-relationship-projection-plane) · [Python](/api/python/relationship-operations#get-geom-relationship-projection-plane) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-geom-relationship-projection-plane)


## Get Pipe Relationship Cut Status

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Pipe Relationships" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-cut-status) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-cut-status) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-cut-status) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-cut-status)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Pipe Relationships</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Pipe 1 - Cut Available?` | Boolean | — | — |
| Output | `Pipe 1 - Cut Active?` | Boolean | — | — |
| Output | `Pipe 2 - Cut Available?` | Boolean | — | — |
| Output | `Pipe 2 - Cut Active?` | Boolean | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-pipe-relationship-cut-status) · [.NET](/api/dotnet/relationship-operations#get-pipe-relationship-cut-status) · [Python](/api/python/relationship-operations#get-pipe-relationship-cut-status) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-pipe-relationship-cut-status)


## Get Pipe Relationship Properties

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Pipe Relationships" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-properties) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-properties) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-properties) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-properties)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Pipe Relationships</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Pipe 1 - Object Name` | Collection Object Name | — | — |
| Output | `Pipe 1 - Inner Diameter` | Double | — | — |
| Output | `Pipe 1 - Outer Diameter` | Double | — | — |
| Output | `Pipe 1 - Cut Begin` | Double | — | — |
| Output | `Pipe 1 - Cut End` | Double | — | — |
| Output | `Pipe 2 - Object Name` | Collection Object Name | — | — |
| Output | `Pipe 2 - Inner Diameter` | Double | — | — |
| Output | `Pipe 2 - Outer Diameter` | Double | — | — |
| Output | `Pipe 2 - Cut Begin` | Double | — | — |
| Output | `Pipe 2 - Cut End` | Double | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-pipe-relationship-properties) · [.NET](/api/dotnet/relationship-operations#get-pipe-relationship-properties) · [Python](/api/python/relationship-operations#get-pipe-relationship-properties) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-pipe-relationship-properties)


## Get Pipe Relationship Weights

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Pipe Relationships" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-weights) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-weights) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-weights) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-weights)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Pipe Relationships</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Overall Weight` | Double | — | — |
| Output | `Axis Offset` | Double | — | — |
| Output | `Axis Alignment` | Double | — | — |
| Output | `Center Pull` | Double | — | — |
| Output | `Out of material - Weight` | Double | — | — |
| Output | `Out of material - Static Offset` | Double | — | — |
| Output | `Constrain Region at OD` | Boolean | — | — |
| Output | `Constrain ID/OD overlap` | Boolean | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-pipe-relationship-weights) · [.NET](/api/dotnet/relationship-operations#get-pipe-relationship-weights) · [Python](/api/python/relationship-operations#get-pipe-relationship-weights) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-pipe-relationship-weights)


## Get Relationship Fit Constraints (Scalar Type)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes Scalar Types</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-fit-constraints-scalar-type) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-relationship-fit-constraints-scalar-type) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-relationship-fit-constraints-scalar-type) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-relationship-fit-constraints-scalar-type)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes Scalar Types</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Use High Tolerance?` | Boolean | — | — |
| Output | `High Tolerance` | Double | — | — |
| Output | `Use Low Tolerance?` | Boolean | — | — |
| Output | `Low Tolerance` | Double | — | — |
| Output | `Fit Constraint Options` | FitConstraintScalarOptions | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-fit-constraints-scalar-type) · [.NET](/api/dotnet/relationship-operations#get-relationship-fit-constraints-scalar-type) · [Python](/api/python/relationship-operations#get-relationship-fit-constraints-scalar-type) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-fit-constraints-scalar-type)


## Get Relationship Outlier Rejection (Scalar Type)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-validation="at-risk-fixture-or-interactive-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes Scalar Types</span>
  <span className="catalog-target-validation">At risk fixture or interactive validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-relationship-outlier-rejection-scalar-type)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes Scalar Types</strong></div>
  <div><span>Validation</span><strong>At Risk — fixture or interactive validation required</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Outlier Rejection Options` | SDK-unavailable MP argument | Unavailable | Not exposed |
| Output | `Use High Limit?` | Boolean | — | — |
| Output | `High Limit` | Double | — | — |
| Output | `Use Low Limit?` | Boolean | — | — |
| Output | `Low Limit` | Double | — | — |

### Briosa Disposition

Retrieves the evidenced scalar settings without supplying the MP-only Outlier Rejection Options input. The partial call still requires licensed validation.


**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [.NET](/api/dotnet/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [Python](/api/python/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-outlier-rejection-scalar-type)


## Get Relationship Projection Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-projection-options) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-relationship-projection-options) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-relationship-projection-options) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-relationship-projection-options)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Ignore Edge Projections?` | Boolean | — | — |
| Output | `Probe Offsets - Override Target Values?` | Boolean | — | — |
| Output | `Probe Offsets - Override Value` | Double | — | — |
| Output | `Add Extra Material?` | Boolean | — | — |
| Output | `Extra Material Thickness` | Double | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-projection-options) · [.NET](/api/dotnet/relationship-operations#get-relationship-projection-options) · [Python](/api/python/relationship-operations#get-relationship-projection-options) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-projection-options)


## Get Relationship Reporting Frame

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-reporting-frame) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-relationship-reporting-frame) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-relationship-reporting-frame) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-relationship-reporting-frame)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Reporting Frame` | Collection Object Name | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-reporting-frame) · [.NET](/api/dotnet/relationship-operations#get-relationship-reporting-frame) · [Python](/api/python/relationship-operations#get-relationship-reporting-frame) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-reporting-frame)


## Get Relationship Sigmoidal Gap Fit Constraints

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-validation="at-risk-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes Scalar Types</span>
  <span className="catalog-target-validation">At risk relationship fixture</span>
</div>
</div>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes Scalar Types</strong></div>
  <div><span>Validation</span><strong>At Risk - Relationship fixture</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | Empty Relationship identity | Required |
| Output | `Use Sigmoidal Gap Constraints` | Boolean | — | — |
| Output | `Minimum Gap Boundary` | Double | — | — |
| Output | `Minimum Gap Weight` | Double | — | — |
| Output | `Maximum Gap Boundary` | Double | — | — |
| Output | `Maximum Gap Weight` | Double | — | — |
| Output | `Nominal Gap` | Double | — | — |
| Output | `Nominal Gap Weight` | Double | — | — |
| Output | `Gradient Steepness Factor` | Double | — | — |

### Briosa Disposition

Selected using the exact MP identity and complete SA 2026.1 SDK binding. The
older installed topic title uses `Sigmoid`; the MP Editor and SDK step use
`Sigmoidal`, which is the canonical Briosa name.

**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints) · [.NET](/api/dotnet/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints) · [Python](/api/python/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints)


## Get Relationship Sub Sampling Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-sub-sampling-options) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-relationship-sub-sampling-options) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-relationship-sub-sampling-options) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-relationship-sub-sampling-options)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Use every i-th point` | Boolean | — | — |
| Output | `i value` | Integer | — | — |
| Output | `Use no more than n points` | Boolean | — | — |
| Output | `n value` | Integer | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-sub-sampling-options) · [.NET](/api/dotnet/relationship-operations#get-relationship-sub-sampling-options) · [Python](/api/python/relationship-operations#get-relationship-sub-sampling-options) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-sub-sampling-options)


## Get Relationship Tolerance (Scalar Type)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes Scalar Types</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-scalar-type) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-scalar-type) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-scalar-type) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-scalar-type)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes Scalar Types</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Use High Tolerance?` | Boolean | — | — |
| Output | `High Tolerance` | Double | — | — |
| Output | `Use Low Tolerance?` | Boolean | — | — |
| Output | `Low Tolerance` | Double | — | — |
| Output | `Tolerance Options` | ToleranceScalarOptions | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-tolerance-scalar-type) · [.NET](/api/dotnet/relationship-operations#get-relationship-tolerance-scalar-type) · [Python](/api/python/relationship-operations#get-relationship-tolerance-scalar-type) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-tolerance-scalar-type)


## Get Relationship Tolerance (Vector Type)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-vector-type) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-vector-type) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-vector-type) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-vector-type)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Use High X Tolerance?` | Boolean | — | — |
| Output | `High X Tolerance` | Double | — | — |
| Output | `Use High Y Tolerance?` | Boolean | — | — |
| Output | `High Y Tolerance` | Double | — | — |
| Output | `Use High Z Tolerance?` | Boolean | — | — |
| Output | `High Z Tolerance` | Double | — | — |
| Output | `Use High Mag Tolerance?` | Boolean | — | — |
| Output | `High Mag Tolerance` | Double | — | — |
| Output | `Use Low X Tolerance?` | Boolean | — | — |
| Output | `Low X Tolerance` | Double | — | — |
| Output | `Use Low Y Tolerance?` | Boolean | — | — |
| Output | `Low Y Tolerance` | Double | — | — |
| Output | `Use Low Z Tolerance?` | Boolean | — | — |
| Output | `Low Z Tolerance` | Double | — | — |
| Output | `Use Low Mag Tolerance?` | Boolean | — | — |
| Output | `Low Mag Tolerance` | Double | — | — |
| Output | `Vector Tolerance` | Vector | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-tolerance-vector-type) · [.NET](/api/dotnet/relationship-operations#get-relationship-tolerance-vector-type) · [Python](/api/python/relationship-operations#get-relationship-tolerance-vector-type) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-tolerance-vector-type)


## Get Relationship Type

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-type) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-relationship-type) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-relationship-type) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-relationship-type)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Relationship Type` | String | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-type) · [.NET](/api/dotnet/relationship-operations#get-relationship-type) · [Python](/api/python/relationship-operations#get-relationship-type) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-type)


## Get Relationship Weighting

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-weighting) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-relationship-weighting) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-relationship-weighting) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-relationship-weighting)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Output | `Weight` | Double | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-weighting) · [.NET](/api/dotnet/relationship-operations#get-relationship-weighting) · [Python](/api/python/relationship-operations#get-relationship-weighting) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-weighting)


## Make Pipe Fitting Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Pipe Relationships" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-pipe-fitting-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-pipe-fitting-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-pipe-fitting-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-pipe-fitting-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Pipe Relationships</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Pipe 1 - Object Name` | Collection Object Name | See MP definition | Required |
| Input | `Pipe 2 - Object Name` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#make-pipe-fitting-relationship) · [.NET](/api/dotnet/relationship-operations#make-pipe-fitting-relationship) · [Python](/api/python/relationship-operations#make-pipe-fitting-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-pipe-fitting-relationship)


## Make Pipe Relationship Cut

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Pipe Relationships" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-pipe-relationship-cut) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-pipe-relationship-cut) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-pipe-relationship-cut) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-pipe-relationship-cut)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Pipe Relationships</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Pipe 1 - Make Cut` | Boolean | true | true |
| Input | `Pipe 1 - Create Frame` | Boolean | false | false |
| Input | `Pipe 1 - Frame Name` | Collection Object Name | See MP definition | Required |
| Input | `Pipe 2 - Make Cut` | Boolean | true | true |
| Input | `Pipe 2 - Create Frame` | Boolean | false | false |
| Input | `Pipe 2 - Frame Name` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#make-pipe-relationship-cut) · [.NET](/api/dotnet/relationship-operations#make-pipe-relationship-cut) · [Python](/api/python/relationship-operations#make-pipe-relationship-cut) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-pipe-relationship-cut)


## Pipe Relationship Force Cut to Frame

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Pipe Relationships" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#pipe-relationship-force-cut-to-frame) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#pipe-relationship-force-cut-to-frame) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#pipe-relationship-force-cut-to-frame) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#pipe-relationship-force-cut-to-frame)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Pipe Relationships</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Pipe 1 - Force Cut to Frame?` | Boolean | true | true |
| Input | `Pipe 1 - Frame Name` | Collection Object Name | See MP definition | Required |
| Input | `Pipe 2 - Force Cut to Frame?` | Boolean | true | true |
| Input | `Pipe 2 - Frame Name` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#pipe-relationship-force-cut-to-frame) · [.NET](/api/dotnet/relationship-operations#pipe-relationship-force-cut-to-frame) · [Python](/api/python/relationship-operations#pipe-relationship-force-cut-to-frame) · [JavaScript and TypeScript](/api/javascript/relationship-operations#pipe-relationship-force-cut-to-frame)


## Rejection (Scalar Type)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="sdk-unavailable" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes Scalar Types</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
</div>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes Scalar Types</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Not observed</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | Not established | Not applicable |
| Output | `Use every i-th point` | Boolean | — | — |
| Output | `i value` | Integer | — | — |
| Output | `Use no more than n points` | Boolean | — | — |
| Output | `n value` | Integer | — | — |

### Briosa Disposition

No complete useful exact-target SDK binding is available.

**Recommended Alternative:** Use an MP/subroutine when SA behavior is required; no direct Briosa operation is planned.



## Set Geom Relationship Auto Measure Nominal Feature

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
</div>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Trap Clouds? (FALSE = Geometry)` | Boolean | true | true |
| Input | `Instrument ID` | Collection Instrument ID | See MP definition | Required |
| Input | `Measurement Mode` | String | Empty | Empty |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-geom-relationship-auto-measure-nominal-feature) · [.NET](/api/dotnet/relationship-operations#set-geom-relationship-auto-measure-nominal-feature) · [Python](/api/python/relationship-operations#set-geom-relationship-auto-measure-nominal-feature) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-geom-relationship-auto-measure-nominal-feature)


## Set Geom Relationship Auto Vectors Nominal (AVN)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The 2024 signature has neither `Use Vector Group Custom Prefix?` nor `Vector Group Custom Prefix`. Retain the earlier automatic-vector settings.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Create Auto Vectors AVN` | Boolean |
| Input | `Points Type` | Point Filter Input Type |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Create Auto Vectors AVN` | Boolean | false | false |
| Input | `Points Type` | PointFilterInputType | Cardinal Points | Cardinal Points |
| Input | `Use Vector Group Custom Prefix?` | Boolean | false | false |
| Input | `Vector Group Custom Prefix` | String | Empty | Empty |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [.NET](/api/dotnet/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [Python](/api/python/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn)


## Set Geom Relationship Cardinal Points

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-cardinal-points) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-cardinal-points) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-cardinal-points) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-cardinal-points)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Create Cardinal Pts when Fitting?` | Boolean | true | true |
| Input | `Prefix Cardinal Pts name with Rel name?` | Boolean | true | true |
| Input | `Cardinal Pts Group Name` | String | GR-Cardinal Pts | GR-Cardinal Pts |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-geom-relationship-cardinal-points) · [.NET](/api/dotnet/relationship-operations#set-geom-relationship-cardinal-points) · [Python](/api/python/relationship-operations#set-geom-relationship-cardinal-points) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-geom-relationship-cardinal-points)


## Set Geom Relationship Criteria

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-criteria) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-criteria) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-criteria) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-criteria)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Criteria` | String | Empty | Empty |
| Input | `Show in Report` | Boolean | true | true |
| Input | `Tolerance Options` | ToleranceScalarOptions | 0.000000 | Both limits disabled |
| Input | `Optimization: Delta Weight` | Double | 0.000000 | 0.000000 |
| Input | `Optimization: Out of Tolerance Weight` | Double | 0.000000 | 0.000000 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-geom-relationship-criteria) · [.NET](/api/dotnet/relationship-operations#set-geom-relationship-criteria) · [Python](/api/python/relationship-operations#set-geom-relationship-criteria) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-geom-relationship-criteria)


## Set Geom Relationship Measured Geometry

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-measured-geometry) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-measured-geometry) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-measured-geometry) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-measured-geometry)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Measured Geometry` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-geom-relationship-measured-geometry) · [.NET](/api/dotnet/relationship-operations#set-geom-relationship-measured-geometry) · [Python](/api/python/relationship-operations#set-geom-relationship-measured-geometry) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-geom-relationship-measured-geometry)


## Set Geom Relationship Nominal Avg Point

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-avg-point) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-avg-point) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-avg-point) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-avg-point)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Compare To Nominal?` | Boolean | true | true |
| Input | `Nominal Average Point` | Point Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-geom-relationship-nominal-avg-point) · [.NET](/api/dotnet/relationship-operations#set-geom-relationship-nominal-avg-point) · [Python](/api/python/relationship-operations#set-geom-relationship-nominal-avg-point) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-geom-relationship-nominal-avg-point)


## Set Geom Relationship Nominal Geometry

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-geometry) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-geometry) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-geometry) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-geometry)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Compare To Nominal?` | Boolean | true | true |
| Input | `Nominal Geometry` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-geom-relationship-nominal-geometry) · [.NET](/api/dotnet/relationship-operations#set-geom-relationship-nominal-geometry) · [Python](/api/python/relationship-operations#set-geom-relationship-nominal-geometry) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-geom-relationship-nominal-geometry)


## Set Geom Relationship Projection Plane

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-projection-plane) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-projection-plane) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-projection-plane) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-projection-plane)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Project to Plane?` | Boolean | true | true |
| Input | `Projection Plane Name` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-geom-relationship-projection-plane) · [.NET](/api/dotnet/relationship-operations#set-geom-relationship-projection-plane) · [Python](/api/python/relationship-operations#set-geom-relationship-projection-plane) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-geom-relationship-projection-plane)


## Set Object to Object Direction Relationship Fit Constraints

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes Scalar Types</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-fit-constraints)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes Scalar Types</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Angle Between Vectors Fit Constraints` | FitConstraintScalarOptions | 0.000000 | Both limits disabled |
| Input | `Mutual Perpendicular Length Fit Constraints` | FitConstraintScalarOptions | 0.000000 | Both limits disabled |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [.NET](/api/dotnet/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [Python](/api/python/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-object-to-object-direction-relationship-fit-constraints)


## Set Object to Object Direction Relationship Tolerances

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-validation="at-risk-object-direction-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes Scalar Types</span>
  <span className="catalog-target-validation">At risk object direction relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-tolerances)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes Scalar Types</strong></div>
  <div><span>Validation</span><strong>At Risk - object-direction Relationship fixture</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | Empty Relationship identity | Required |
| Input | `Angle Between Vectors Tolerances` | Tolerance Options (Scalar Type) | Both limits disabled at 0 | Exact MP default |
| Input | `Mutual Perpendicular Length Tolerances` | Tolerance Options (Scalar Type) | Both limits disabled at 0 | Exact MP default |

### Briosa Disposition

Selected using the exact plural MP identity and complete scalar-tolerance SDK
bindings. Briosa preserves the two independent tolerance values.

**API References:** [gRPC](/api/grpc/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [.NET](/api/dotnet/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [Python](/api/python/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-object-to-object-direction-relationship-tolerances)


## Set Pipe Relationship Segment Properties

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Pipe Relationships" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-segment-properties) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-segment-properties) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-segment-properties) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-segment-properties)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Pipe Relationships</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Pipe 1 - Inner Diameter` | Double | 0.000000 | 0.000000 |
| Input | `Pipe 1 - Outer Diameter` | Double | 0.000000 | 0.000000 |
| Input | `Pipe 1 - Cut Begin` | Double | 0.000000 | 0.000000 |
| Input | `Pipe 1 - Cut End` | Double | 0.000000 | 0.000000 |
| Input | `Pipe 2 - Inner Diameter` | Double | 0.000000 | 0.000000 |
| Input | `Pipe 2 - Outer Diameter` | Double | 0.000000 | 0.000000 |
| Input | `Pipe 2 - Cut Begin` | Double | 0.000000 | 0.000000 |
| Input | `Pipe 2 - Cut End` | Double | 0.000000 | 0.000000 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-pipe-relationship-segment-properties) · [.NET](/api/dotnet/relationship-operations#set-pipe-relationship-segment-properties) · [Python](/api/python/relationship-operations#set-pipe-relationship-segment-properties) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-pipe-relationship-segment-properties)


## Set Pipe Relationship Weights

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Pipe Relationships" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Pipe Relationships" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Pipe Relationships</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-weights) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-weights) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-weights) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-weights)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Pipe Relationships</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Overall Weight` | Double | 1.000000 | 1.000000 |
| Input | `Axis Offset` | Double | 2.000000 | 2.000000 |
| Input | `Axis Alignment` | Double | 1.000000 | 1.000000 |
| Input | `Center Pull` | Double | 0.100000 | 0.100000 |
| Input | `Out of material - Weight` | Double | 10.000000 | 10.000000 |
| Input | `Out of material - Offset` | Double | 1.000000 | 1.000000 |
| Input | `Constrain Region at OD` | Boolean | false | false |
| Input | `Constrain ID/OD overlap` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-pipe-relationship-weights) · [.NET](/api/dotnet/relationship-operations#set-pipe-relationship-weights) · [Python](/api/python/relationship-operations#set-pipe-relationship-weights) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-pipe-relationship-weights)


## Set Relationship Auto Vectors Fit (AVF)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-auto-vectors-fit-avf) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-auto-vectors-fit-avf) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-auto-vectors-fit-avf) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-auto-vectors-fit-avf)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The 2024 signature has neither `Use Vector Group Custom Prefix?` nor `Vector Group Custom Prefix`. Retain the earlier automatic-vector settings.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Create Auto Vectors AVF` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Create Auto Vectors AVF` | Boolean | false | false |
| Input | `Use Vector Group Custom Prefix?` | Boolean | false | false |
| Input | `Vector Group Custom Prefix` | String | Empty | Empty |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-auto-vectors-fit-avf) · [.NET](/api/dotnet/relationship-operations#set-relationship-auto-vectors-fit-avf) · [Python](/api/python/relationship-operations#set-relationship-auto-vectors-fit-avf) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-auto-vectors-fit-avf)


## Set Relationship Auto Vectors Group Default Prefix

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
</div>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Geom Rel AVN VG Default Prefix` | String | GR-AVN- | GR-AVN- |
| Input | `Geom Rel AVF VG Default Prefix` | String | GR-AVF- | GR-AVF- |
| Input | `Non-Geom Rel VG Default Prefix` | String | Auto Vectors:  | Auto Vectors:  |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-auto-vectors-group-default-prefix) · [.NET](/api/dotnet/relationship-operations#set-relationship-auto-vectors-group-default-prefix) · [Python](/api/python/relationship-operations#set-relationship-auto-vectors-group-default-prefix) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-auto-vectors-group-default-prefix)


## Set Relationship Desired Meas Count

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-desired-meas-count) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-desired-meas-count) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-desired-meas-count) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-desired-meas-count)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Desired Measurement Count` | Integer | 0 | 0 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-desired-meas-count) · [.NET](/api/dotnet/relationship-operations#set-relationship-desired-meas-count) · [Python](/api/python/relationship-operations#set-relationship-desired-meas-count) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-desired-meas-count)


## Set Relationship Dormant Status

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-dormant-status) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-dormant-status) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-dormant-status) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-dormant-status)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationships` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Dormant Status` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-dormant-status) · [.NET](/api/dotnet/relationship-operations#set-relationship-dormant-status) · [Python](/api/python/relationship-operations#set-relationship-dormant-status) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-dormant-status)


## Set Relationship Fit Constraints (Scalar Type)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes Scalar Types</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-fit-constraints-scalar-type) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-fit-constraints-scalar-type) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-fit-constraints-scalar-type) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-fit-constraints-scalar-type)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes Scalar Types</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Fit Constraint Options` | FitConstraintScalarOptions | 0.000000 | Both limits disabled |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-fit-constraints-scalar-type) · [.NET](/api/dotnet/relationship-operations#set-relationship-fit-constraints-scalar-type) · [Python](/api/python/relationship-operations#set-relationship-fit-constraints-scalar-type) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-fit-constraints-scalar-type)


## Set Relationship Orientation Fit Constraints (Vector Type)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-orientation-fit-constraints-vector-type)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Orientation Vector Constraint` | Vector | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [.NET](/api/dotnet/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [Python](/api/python/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-orientation-fit-constraints-vector-type)


## Set Relationship Outlier Rejection (Scalar Type)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-validation="at-risk-fixture-or-interactive-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes Scalar Types</span>
  <span className="catalog-target-validation">At risk fixture or interactive validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-outlier-rejection-scalar-type)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes Scalar Types</strong></div>
  <div><span>Validation</span><strong>At Risk — fixture or interactive validation required</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Outlier Rejection Options` | SDK-unavailable MP argument | Unavailable | Not exposed |

### Briosa Disposition

Executes without exposing the MP-only Outlier Rejection Options input, so callers cannot select the settings applied by SA. The resulting default behavior still requires licensed validation.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [.NET](/api/dotnet/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [Python](/api/python/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-outlier-rejection-scalar-type)


## Set Relationship Position Fit Constraints (Vector Type)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-position-fit-constraints-vector-type)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Position Vector Constraint` | Vector | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [.NET](/api/dotnet/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [Python](/api/python/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-position-fit-constraints-vector-type)


## Set Relationship Projection Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-projection-options) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-projection-options) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-projection-options) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-projection-options)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Projection Options` | ProjectionOptions | Object To Probe Vectors | Object To Probe Vectors |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-projection-options) · [.NET](/api/dotnet/relationship-operations#set-relationship-projection-options) · [Python](/api/python/relationship-operations#set-relationship-projection-options) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-projection-options)


## Set Relationship Reporting Frame

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-reporting-frame) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-reporting-frame) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-reporting-frame) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-reporting-frame)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Reporting Frame` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-reporting-frame) · [.NET](/api/dotnet/relationship-operations#set-relationship-reporting-frame) · [Python](/api/python/relationship-operations#set-relationship-reporting-frame) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-reporting-frame)


## Set Relationship Sigmoidal Gap Fit Constraints

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes Scalar Types</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
</div>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes Scalar Types</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Use Sigmoidal Gap Constraints` | Boolean | true | true |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints) · [.NET](/api/dotnet/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints) · [Python](/api/python/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints)


## Set Relationship Sub Sampling Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-sub-sampling-options) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-sub-sampling-options) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-sub-sampling-options) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-sub-sampling-options)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Use every i-th point` | Boolean | false | false |
| Input | `i value` | Integer | 20 | 20 |
| Input | `Use no more than n points` | Boolean | true | true |
| Input | `n value` | Integer | 10000 | 10000 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-sub-sampling-options) · [.NET](/api/dotnet/relationship-operations#set-relationship-sub-sampling-options) · [Python](/api/python/relationship-operations#set-relationship-sub-sampling-options) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-sub-sampling-options)


## Set Relationship Tolerance (Scalar Type)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes Scalar Types" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes Scalar Types</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes / Relationship Attributes (Scalar Types)</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-scalar-type) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-scalar-type) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-scalar-type) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-scalar-type)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes Scalar Types</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Tolerance Options` | ToleranceScalarOptions | 0.000000 | Both limits disabled |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-tolerance-scalar-type) · [.NET](/api/dotnet/relationship-operations#set-relationship-tolerance-scalar-type) · [Python](/api/python/relationship-operations#set-relationship-tolerance-scalar-type) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-tolerance-scalar-type)


## Set Relationship Tolerance (Vector Type)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-vector-type) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-vector-type) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-vector-type) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-vector-type)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Vector Tolerance` | Vector | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-tolerance-vector-type) · [.NET](/api/dotnet/relationship-operations#set-relationship-tolerance-vector-type) · [Python](/api/python/relationship-operations#set-relationship-tolerance-vector-type) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-tolerance-vector-type)


## Set Relationship Voxel Cloud Display

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-voxel-cloud-display) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-voxel-cloud-display) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-voxel-cloud-display) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-voxel-cloud-display)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Enable Voxel Cloud Display?` | Boolean | true | true |
| Input | `Voxel Size (-1.0 autodetect)` | Double | -1.000000 | -1.000000 |
| Input | `Min Pts Count Per Voxel` | Integer | 3 | 3 |
| Input | `Voxel Rendering Diameter % (-1.0 fast)` | Double | 125.000000 | 125.000000 |
| Input | `Surface Analysis Mode` | SurfaceAnalysisMode | Relationship | Relationship |
| Input | `Colorization Options` | Color | Red | Red |
| Input | `Show Color Bar in View?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-voxel-cloud-display) · [.NET](/api/dotnet/relationship-operations#set-relationship-voxel-cloud-display) · [Python](/api/python/relationship-operations#set-relationship-voxel-cloud-display) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-voxel-cloud-display)


## Set Relationship Weighting

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-weighting) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-weighting) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-weighting) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-weighting)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Weight` | Double | 0.000000 | 0.000000 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-weighting) · [.NET](/api/dotnet/relationship-operations#set-relationship-weighting) · [Python](/api/python/relationship-operations#set-relationship-weighting) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-weighting)


## Set Relationship Weights Normalized

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-weights-normalized) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-weights-normalized) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-weights-normalized) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-weights-normalized)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Relationship Operations / Relationship Attributes</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Collection Name` | Collection Name | Empty | Required |
| Input | `Pick Weighting Mode` | RelWeightingMode | Normalize on equation count | Normalize on equation count |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-weights-normalized) · [.NET](/api/dotnet/relationship-operations#set-relationship-weights-normalized) · [Python](/api/python/relationship-operations#set-relationship-weights-normalized) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-weights-normalized)

## Generate Geometry Relationship Summary

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#generate-geometry-relationship-summary) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#generate-geometry-relationship-summary) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#generate-geometry-relationship-summary) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#generate-geometry-relationship-summary)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Ref List` | Collection Object Name Ref List | Empty | Required |
| Input | `Summary Table Name` | String | Geometry Relationship Summary | Geometry Relationship Summary |

Builds an SA geometry-relationship summary table for the supplied Relationships.

**API References:** [gRPC](/api/grpc/relationship-operations#generate-geometry-relationship-summary) · [.NET](/api/dotnet/relationship-operations#generate-geometry-relationship-summary) · [Python](/api/python/relationship-operations#generate-geometry-relationship-summary) · [JavaScript and TypeScript](/api/javascript/relationship-operations#generate-geometry-relationship-summary)

## Edit Geometry Relationship Point List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-interactive-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk interactive relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#edit-geometry-relationship-point-list) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#edit-geometry-relationship-point-list) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#edit-geometry-relationship-point-list) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#edit-geometry-relationship-point-list)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | Empty Relationship identity | Required |
| Input | `Point Edit Mode` | Point List Mode | Point List | Point List |

The available modes are `Point List`, `Point Graph`, and `Sub-Sampler
Settings`. This command intentionally opens an SA dialog and waits for the
operator to close it. The View SDK Code export repeats the same setter three
times with unrelated choice comments; the installed documentation confirms
that Briosa should expose one mode input.

**API References:** [gRPC](/api/grpc/relationship-operations#edit-geometry-relationship-point-list) · [.NET](/api/dotnet/relationship-operations#edit-geometry-relationship-point-list) · [Python](/api/python/relationship-operations#edit-geometry-relationship-point-list) · [JavaScript and TypeScript](/api/javascript/relationship-operations#edit-geometry-relationship-point-list)

## Filter Geometry Relationship Outlier Cloud Points

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-cloud-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk cloud relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#filter-geometry-relationship-outlier-cloud-points)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | Empty Relationship identity | Required |
| Input | `Sigma Threshold` | Double | 3 | 3 |
| Input | `Modify Existing Input Clouds` | Boolean | false | false |
| Output | First-pass RMS, maximum, minimum, and average errors | Double | — | Returned |
| Output | Final-pass RMS, maximum, minimum, and average errors | Double | — | Returned |
| Output | `Total Input Point Count` | Integer | — | Returned |
| Output | `Exclude Point Count` | Integer | — | Returned |

Returns all ten exact-target filter metrics. Briosa does not add a cloud-size
or mutation preflight.

**API References:** [gRPC](/api/grpc/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [.NET](/api/dotnet/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [Python](/api/python/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [JavaScript and TypeScript](/api/javascript/relationship-operations#filter-geometry-relationship-outlier-cloud-points)

## Get Number of Relationships in Relationship Ref List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="Relationship Operations" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / Relationship Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship List` | Collection Object Name Ref List |
| Output | `Total Count` | Integer |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the length of a caller-owned Relationship list. Use the normal
collection-length operation in the client language instead.

## Get i-th Relationship From Relationship Ref List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="Relationship Operations" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / Relationship Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name List` | Collection Object Name Ref List |
| Input | `Relationship Index` | Integer |
| Output | `Resultant Item` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns one item from a caller-owned Relationship list by zero-based index. Use
normal collection indexing in the client language instead.

## Get i-th Relationship From Relationship Ref List (Iterator)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="Relationship Operations" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / Relationship Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Reference List` | Collection Object Name Ref List |
| Input | `Relationship Index` | Integer |
| Input | `Step to Jump at End of List` | Binding not emitted by the SDK exporter |
| Output | `Collection` | String |
| Output | `Relationship` | String |
| Output | `Resultant Item` | Collection Object Name |

A missing exported binding is recorded explicitly. Existing limitations retain their reviewed handling; a generic SDK method alone does not prove a replacement binding.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

This MP iterator combines ordinary list indexing with an MP step jump that the
SA SDK marks unavailable. Briosa exposes neither MP control flow nor redundant
client-side indexing as an RPC.

## Sort Relationship Ref List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="Relationship Operations" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / Relationship Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Ref List` | Collection Object Name Ref List |
| Input | `Case Sensitive?` | Boolean |
| Input | `Ascending Order?` | Boolean |
| Output | `Sorted Relationship Ref List` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sorts a caller-owned list using case-sensitivity and ascending-order flags.
Use the client language's collection sorting tools instead.

## Relationship Watch Window Template

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-watch-window-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk watch window relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#relationship-watch-window-template) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#relationship-watch-window-template) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#relationship-watch-window-template) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#relationship-watch-window-template)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Watch Window Template Name` | Collection Object Name |
| Input | `Linear Precision` | Integer |
| Input | `Angular Precision` | Integer |
| Input | `Font` | Font Type |
| Input | `Text Color` | Color |
| Input | `Background Color` | Color |
| Input | `Highlight Color` | Color |
| Input | `Show Deviation X (Rx)?` | Boolean |
| Input | `Show Deviation Y (Ry)?` | Boolean |
| Input | `Show Deviation Z (Rz)?` | Boolean |
| Input | `Show Deviation Mag?` | Boolean |
| Input | `UDP Network Transmit Settings` | UDP Transmit Settings |
| Input | `Transparent Background?` | Boolean |
| Input | `Hide Units?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates an SA Relationship Watch Window Template with linear precision `4`,
angular precision `3`, `MS Shell Dlg` 8-point regular font, blue text, white
background, red highlighting, all four deviation fields shown, and visible
units on an opaque background. UDP transmission defaults to disabled,
broadcast enabled, an empty IP address, and port `10000`.

**API References:** [gRPC](/api/grpc/relationship-operations#relationship-watch-window-template) · [.NET](/api/dotnet/relationship-operations#relationship-watch-window-template) · [Python](/api/python/relationship-operations#relationship-watch-window-template) · [JavaScript and TypeScript](/api/javascript/relationship-operations#relationship-watch-window-template)

## Make Point to Point Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-point-to-point-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-point-to-point-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-point-to-point-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-point-to-point-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `First Point Name` | Point Name |
| Input | `Second Point Name` | Point Name |
| Input | `Tolerance` | Tolerance Vector Options |
| Input | `Constraint` | Tolerance Vector Options |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a Relationship between two SA Points. The tolerance defaults to every
limit disabled at zero. The constraint defaults to the high and low X, Y, and Z
limits enabled at zero, with both magnitude limits disabled.

**API References:** [gRPC](/api/grpc/relationship-operations#make-point-to-point-relationship) · [.NET](/api/dotnet/relationship-operations#make-point-to-point-relationship) · [Python](/api/python/relationship-operations#make-point-to-point-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-point-to-point-relationship)

## Make Frame to Frame Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-frame-to-frame-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-frame-to-frame-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-frame-to-frame-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-frame-to-frame-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `First Frame Name` | Collection Object Name |
| Input | `Second Frame Name` | Collection Object Name |
| Input | `Orientation Tolerance` | Tolerance Scalar Options |
| Input | `Position Tolerance` | Tolerance Vector Options |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a Relationship between two SA Frames. The scalar orientation tolerance
and vector position tolerance default to every limit disabled at zero.

**API References:** [gRPC](/api/grpc/relationship-operations#make-frame-to-frame-relationship) · [.NET](/api/dotnet/relationship-operations#make-frame-to-frame-relationship) · [Python](/api/python/relationship-operations#make-frame-to-frame-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-frame-to-frame-relationship)

## Make Points to Objects Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-points-objects-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk points objects relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-points-to-objects-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-points-to-objects-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-points-to-objects-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-points-to-objects-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | Empty Relationship identity | Required |
| Input | `Points in Relationship` | Point Name Ref List | Empty | Required |
| Input | `Objects in Relationship` | Collection Object Name Ref List | Empty | Required |
| Input | `Projection Options` | Projection Options | Object To Probe Vectors; all options disabled | Exact MP default |
| Input | `Auto Update a Vector Group?` | Boolean | false | false |

Creates a Relationship between selected Points and SA objects. Briosa does not
retain the lists or preflight their compatibility.

**API References:** [gRPC](/api/grpc/relationship-operations#make-points-to-objects-relationship) · [.NET](/api/dotnet/relationship-operations#make-points-to-objects-relationship) · [Python](/api/python/relationship-operations#make-points-to-objects-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-points-to-objects-relationship)

## Make Points to Points Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-paired-points-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk paired points relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-points-to-points-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-points-to-points-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-points-to-points-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-points-to-points-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Nominal Points` | Point Name Ref List |
| Input | `Measured Points` | Point Name Ref List |
| Input | `Auto Update a Vector Group?` | Boolean |
| Input | `Tolerance` | Tolerance Vector Options |
| Input | `Constraint` | Tolerance Vector Options |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Accepts the Relationship identity, nominal and measured Point lists, optional
Vector Group auto-update, and the exact vector tolerance and constraint
options. Tolerance defaults to all limits disabled at zero. Constraint defaults
to X, Y, and Z limits enabled at zero and magnitude limits disabled.

**API References:** [gRPC](/api/grpc/relationship-operations#make-points-to-points-relationship) · [.NET](/api/dotnet/relationship-operations#make-points-to-points-relationship) · [Python](/api/python/relationship-operations#make-points-to-points-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-points-to-points-relationship)

## Make Groups to Objects Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-groups-objects-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk groups objects relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-groups-to-objects-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-groups-to-objects-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-groups-to-objects-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-groups-to-objects-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Point Groups in Relationship` | Collection Object Name Ref List |
| Input | `Objects in Relationship` | Collection Object Name Ref List |
| Input | `Projection Options` | Projection Options |
| Input | `Auto Update a Vector Group?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a Relationship from Point Groups to objects. Projection defaults to
`Object To Probe Vectors` with all projection options disabled, and Vector
Group auto-update defaults to `false`.

**API References:** [gRPC](/api/grpc/relationship-operations#make-groups-to-objects-relationship) · [.NET](/api/dotnet/relationship-operations#make-groups-to-objects-relationship) · [Python](/api/python/relationship-operations#make-groups-to-objects-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-groups-to-objects-relationship)

## Make Object to Object Direction Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-geometry-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk geometry relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-object-to-object-direction-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-object-to-object-direction-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-object-to-object-direction-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-object-to-object-direction-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `First Object in Relationship` | Collection Object Name |
| Input | `Second Object in Relationship` | Collection Object Name |
| Input | `Nominal Angle` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a directional Relationship between two SA objects. `Nominal Angle`
defaults to `0`.

**API References:** [gRPC](/api/grpc/relationship-operations#make-object-to-object-direction-relationship) · [.NET](/api/dotnet/relationship-operations#make-object-to-object-direction-relationship) · [Python](/api/python/relationship-operations#make-object-to-object-direction-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-object-to-object-direction-relationship)

## Make Point Clouds to Objects Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-cloud-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk cloud relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-point-clouds-to-objects-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-point-clouds-to-objects-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-point-clouds-to-objects-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-point-clouds-to-objects-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Point Clouds in Relationship` | Collection Object Name Ref List |
| Input | `Objects in Relationship` | Collection Object Name Ref List |
| Input | `Projection Options` | Projection Options |
| Input | `Auto Update a Vector Group?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a Relationship from Point Clouds to objects. It uses the same exact
projection and Vector Group auto-update defaults as the Points and Groups
variants.

**API References:** [gRPC](/api/grpc/relationship-operations#make-point-clouds-to-objects-relationship) · [.NET](/api/dotnet/relationship-operations#make-point-clouds-to-objects-relationship) · [Python](/api/python/relationship-operations#make-point-clouds-to-objects-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-point-clouds-to-objects-relationship)

## Make Group to Group Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-paired-groups-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk paired groups relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-group-to-group-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-group-to-group-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-group-to-group-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-group-to-group-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `First Group Name` | Collection Object Name |
| Input | `Second Group Name` | Collection Object Name |
| Input | `Auto Update a Vector Group?` | Boolean |
| Input | `Tolerance` | Tolerance Vector Options |
| Input | `Constraint` | Tolerance Vector Options |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a Relationship between two Point Groups. It preserves the same exact
auto-update, tolerance, and constraint defaults as the Points-to-Points form.

**API References:** [gRPC](/api/grpc/relationship-operations#make-group-to-group-relationship) · [.NET](/api/dotnet/relationship-operations#make-group-to-group-relationship) · [Python](/api/python/relationship-operations#make-group-to-group-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-group-to-group-relationship)

## Make Group to Nominal Group Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-nominal-group-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk nominal group relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-group-to-nominal-group-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-group-to-nominal-group-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-group-to-nominal-group-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-group-to-nominal-group-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Nominal Group Name` | Collection Object Name |
| Input | `Measured Group Name` | Collection Object Name |
| Input | `Auto Update a Vector Group?` | Boolean |
| Input | `Use Closest Point?` | Boolean |
| Input | `Display Closest Point Watch Window?` | Boolean |
| Input | `Use View Zooming With Proximity?` | Boolean |
| Input | `Ignore Points Beyond Threshold?` | Boolean |
| Input | `Proximity Threshold?` | Double |
| Input | `Tolerance` | Tolerance Vector Options |
| Input | `Constraint` | Tolerance Vector Options |
| Input | `Fit Weight` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a nominal-to-measured Point Group Relationship. Closest-point matching
defaults to enabled. The closest-point watch window, proximity view zooming,
and threshold rejection default to disabled; the proximity threshold is
`0.01`, the fit weight is `1`, and the tolerance and constraint defaults match
the paired-Point Relationship.

**API References:** [gRPC](/api/grpc/relationship-operations#make-group-to-nominal-group-relationship) · [.NET](/api/dotnet/relationship-operations#make-group-to-nominal-group-relationship) · [Python](/api/python/relationship-operations#make-group-to-nominal-group-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-group-to-nominal-group-relationship)

## Make Average Point Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-average-point-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk average point relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-average-point-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-average-point-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-average-point-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-average-point-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Points in Relationship` | Point Name Ref List |
| Input | `Average Point Name (Optional)` | Point Name |
| Input | `Nominal Point Name (Optional)` | Point Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates an average-Point Relationship from a Point list. The Average Point and
Nominal Point identities are independently optional.

**API References:** [gRPC](/api/grpc/relationship-operations#make-average-point-relationship) · [.NET](/api/dotnet/relationship-operations#make-average-point-relationship) · [Python](/api/python/relationship-operations#make-average-point-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-average-point-relationship)

## Make Geometry Fit Only Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-geometry-fit-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk geometry fit relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-only-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-only-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-only-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-only-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Point Groups to Fit` | Collection Object Name Ref List |
| Input | `Geometry Type` | Geometry Type |
| Input | `Resulting Object Name (Optional)` | Collection Object Name |
| Input | `Fit Profile Name (Optional)` | String |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Fits one or more Point Groups to a required geometry type. The resulting object
identity and fit-profile name are optional. Briosa preserves an MP partial
success when only some supplied Point Groups can be used.

**API References:** [gRPC](/api/grpc/relationship-operations#make-geometry-fit-only-relationship) · [.NET](/api/dotnet/relationship-operations#make-geometry-fit-only-relationship) · [Python](/api/python/relationship-operations#make-geometry-fit-only-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-geometry-fit-only-relationship)

## Make Geometry Fit and Compare to Nominal Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-geometry-fit-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk geometry fit relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Nominal Geometry` | Collection Object Name |
| Input | `Point Groups to Fit` | Collection Object Name Ref List |
| Input | `Resulting Object Name (Optional)` | Collection Object Name |
| Input | `Fit Profile Name (Optional)` | String |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Fits one or more Point Groups and compares the fit to required nominal
geometry. The resulting object and fit-profile inputs are optional, and partial
MP success remains distinct from complete success or failure.

**API References:** [gRPC](/api/grpc/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [.NET](/api/dotnet/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [Python](/api/python/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship)

## Make Geometry Compare Only Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-geometry-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk geometry relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-geometry-compare-only-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-geometry-compare-only-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-geometry-compare-only-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-geometry-compare-only-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Nominal Geometry` | Collection Object Name |
| Input | `Measured Geometry` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a Relationship that compares required nominal and measured SA geometry
without fitting either object.

**API References:** [gRPC](/api/grpc/relationship-operations#make-geometry-compare-only-relationship) · [.NET](/api/dotnet/relationship-operations#make-geometry-compare-only-relationship) · [Python](/api/python/relationship-operations#make-geometry-compare-only-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-geometry-compare-only-relationship)

## Make Dynamic Point Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-dynamic-geometry-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk dynamic geometry fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-point-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-dynamic-point-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-dynamic-point-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-dynamic-point-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Construction Mode` | Dynamic Point Mode |
| Input | `First Reference Geometry` | Collection Object Name |
| Input | `Second Reference Geometry` | Collection Object Name |
| Input | `Third Reference Geometry` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Constructs a dynamic Point using line/plane, cylinder/plane, cone/plane,
three-plane, or perpendicular-midpoint geometry. The construction mode defaults
to line/plane intersection. The third reference is optional except when the
selected construction mode needs three geometries.

**API References:** [gRPC](/api/grpc/relationship-operations#make-dynamic-point-relationship) · [.NET](/api/dotnet/relationship-operations#make-dynamic-point-relationship) · [Python](/api/python/relationship-operations#make-dynamic-point-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-dynamic-point-relationship)

## Make Dynamic Line Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-dynamic-geometry-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk dynamic geometry fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-line-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-dynamic-line-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-dynamic-line-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-dynamic-line-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Construction Mode` | Dynamic Line Mode |
| Input | `First Reference Geometry` | Collection Object Name |
| Input | `Second Reference Geometry` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Constructs a dynamic Line from the selected cone-axis, cylinder-axis,
two-plane intersection, line-bisector, or Slot-centerline mode. The default is
two-plane intersection.

**API References:** [gRPC](/api/grpc/relationship-operations#make-dynamic-line-relationship) · [.NET](/api/dotnet/relationship-operations#make-dynamic-line-relationship) · [Python](/api/python/relationship-operations#make-dynamic-line-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-dynamic-line-relationship)

## Make Dynamic Plane Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-dynamic-geometry-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk dynamic geometry fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-plane-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-dynamic-plane-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-dynamic-plane-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-dynamic-plane-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Construction Mode` | Dynamic Plane Mode |
| Input | `First Reference Geometry` | Collection Object Name |
| Input | `Second Reference Geometry` | Collection Object Name |
| Input | `Offset Plane Offset` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Constructs a dynamic Plane using one of the eight exact construction modes.
The default is bisecting two Planes and the offset defaults to `0`. One SA SDK
choice literal misspells `Two` as `Twp`; Briosa uses a correctly named public
enum value and maps it to the exact SDK literal internally.

**API References:** [gRPC](/api/grpc/relationship-operations#make-dynamic-plane-relationship) · [.NET](/api/dotnet/relationship-operations#make-dynamic-plane-relationship) · [Python](/api/python/relationship-operations#make-dynamic-plane-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-dynamic-plane-relationship)

## Make Dynamic Circle Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-dynamic-geometry-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk dynamic geometry fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-circle-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-dynamic-circle-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-dynamic-circle-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-dynamic-circle-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Construction Mode` | Dynamic Circle Mode |
| Input | `First Reference Geometry` | Collection Object Name |
| Input | `Second Reference Geometry` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Constructs a dynamic Circle using one of seven cylinder, cone, Plane, or Sphere
intersection modes. The default holds the Plane normal for a cylinder/Plane
intersection.

**API References:** [gRPC](/api/grpc/relationship-operations#make-dynamic-circle-relationship) · [.NET](/api/dotnet/relationship-operations#make-dynamic-circle-relationship) · [Python](/api/python/relationship-operations#make-dynamic-circle-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-dynamic-circle-relationship)

## Make Dynamic Ellipse Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-dynamic-geometry-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk dynamic geometry fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-ellipse-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-dynamic-ellipse-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-dynamic-ellipse-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-dynamic-ellipse-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Construction Mode` | Dynamic Ellipse Mode |
| Input | `First Reference Geometry` | Collection Object Name |
| Input | `Second Reference Geometry` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Constructs a dynamic Ellipse from either a cylinder/Plane or cone/Plane
intersection. Cylinder/Plane is the default.

**API References:** [gRPC](/api/grpc/relationship-operations#make-dynamic-ellipse-relationship) · [.NET](/api/dotnet/relationship-operations#make-dynamic-ellipse-relationship) · [Python](/api/python/relationship-operations#make-dynamic-ellipse-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-dynamic-ellipse-relationship)

## Make Vector Group To Vector Group Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-vector-group-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk vector group relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-vector-group-to-vector-group-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#make-vector-group-to-vector-group-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#make-vector-group-to-vector-group-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#make-vector-group-to-vector-group-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `New VG To VG Relationship` | Collection Object Name |
| Input | `Reference Vector Group` | Collection Object Name |
| Input | `Corresponding Vector Group` | Collection Object Name |
| Input | `Set Opposing Vector Group Polarity` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a Vector Group comparison Relationship. Opposing Vector Group polarity
defaults to `true`.

**API References:** [gRPC](/api/grpc/relationship-operations#make-vector-group-to-vector-group-relationship) · [.NET](/api/dotnet/relationship-operations#make-vector-group-to-vector-group-relationship) · [Python](/api/python/relationship-operations#make-vector-group-to-vector-group-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-vector-group-to-vector-group-relationship)

## Set Vector Group To Vector Group Cylindrical Zone

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-vector-group-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk vector group relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `VG To VG Relationship` | Collection Object Name |
| Input | `Radial Offset` | Double |
| Input | `Minimum Axial Offset` | Double |
| Input | `Maximum Axial Offset` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets radial, minimum axial, and maximum axial offsets. Exact defaults are `1`,
`-10`, and `10`.

**API References:** [gRPC](/api/grpc/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [.NET](/api/dotnet/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [Python](/api/python/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone)

## Set Vector Group To Vector Group Fit Weights

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-vector-group-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk vector group relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-weights)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `VG To VG Relationship` | Collection Object Name |
| Input | `Minimum Gap` | Double |
| Input | `Minimum Gap Fit Weight` | Double |
| Input | `Maximum Gap` | Double |
| Input | `Maximum Gap Fit Weight` | Double |
| Input | `Nominal Gap` | Double |
| Input | `Nominal Gap Fit Weight` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets minimum, maximum, and nominal gaps with their fit weights. Exact defaults
are gaps `0`, minimum and maximum weights `10`, and nominal weight `1`.

**API References:** [gRPC](/api/grpc/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [.NET](/api/dotnet/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [Python](/api/python/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-vector-group-to-vector-group-fit-weights)

## Set Vector Group To Vector Group Fit Gradient Factor

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-vector-group-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk vector group relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `VG To VG Relationship` | Collection Object Name |
| Input | `Fit Gradient Factor` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets the fit-weight transition gradient factor, which defaults to `50`.

**API References:** [gRPC](/api/grpc/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [.NET](/api/dotnet/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [Python](/api/python/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor)

## Set Vector Group To Vector Group Relative Polarity

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-vector-group-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk vector group relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-relative-polarity) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-relative-polarity) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-relative-polarity) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-relative-polarity)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `VG To VG Relationship` | Collection Object Name |
| Input | `Set Opposing Vector Group Polarity` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets an existing Vector Group Relationship to opposing polarity by default;
passing `false` selects same-direction analysis.

**API References:** [gRPC](/api/grpc/relationship-operations#set-vector-group-to-vector-group-relative-polarity) · [.NET](/api/dotnet/relationship-operations#set-vector-group-to-vector-group-relative-polarity) · [Python](/api/python/relationship-operations#set-vector-group-to-vector-group-relative-polarity) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-vector-group-to-vector-group-relative-polarity)

## Delete Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-destructive-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk destructive relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#delete-relationship) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#delete-relationship) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#delete-relationship) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#delete-relationship)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Deletes the named SA Relationship. Briosa preserves the MP command's direct,
destructive behavior and adds no confirmation or preflight safeguard.

**API References:** [gRPC](/api/grpc/relationship-operations#delete-relationship) · [.NET](/api/dotnet/relationship-operations#delete-relationship) · [Python](/api/python/relationship-operations#delete-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#delete-relationship)

## Set Optimization Search Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-relationship-fit-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk relationship fit fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-optimization-search-options) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-optimization-search-options) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-optimization-search-options) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-optimization-search-options)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Max Number of Step Size Reduction` | Integer |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets SA's maximum number of step-size reductions for Relationship optimization.
The exact default is `5`.

**API References:** [gRPC](/api/grpc/relationship-operations#set-optimization-search-options) · [.NET](/api/dotnet/relationship-operations#set-optimization-search-options) · [Python](/api/python/relationship-operations#set-optimization-search-options) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-optimization-search-options)

## Set Optimization Perturbation Parameters

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-relationship-fit-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk relationship fit fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-optimization-perturbation-parameters) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-optimization-perturbation-parameters) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-optimization-perturbation-parameters) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-optimization-perturbation-parameters)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Length Perturbation` | Double |
| Input | `Angular Perturbation` | Double |
| Input | `Damping ` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets global length perturbation `0.0001`, angular perturbation `0.0001`, and
damping `1` by default. These values alter SA-owned optimizer state; Briosa does
not cache them.

**API References:** [gRPC](/api/grpc/relationship-operations#set-optimization-perturbation-parameters) · [.NET](/api/dotnet/relationship-operations#set-optimization-perturbation-parameters) · [Python](/api/python/relationship-operations#set-optimization-perturbation-parameters) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-optimization-perturbation-parameters)

## Do Relationship Fit

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-relationship-fit-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk relationship fit fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#do-relationship-fit) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#do-relationship-fit) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#do-relationship-fit) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#do-relationship-fit)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The 2024 signature has no `Enable Randomized Start` input. Retain the fit operation without the later randomized-start control.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Collection Containing Relationships` | Collection Name |
| Input | `Objects to Move` | Collection Object Name Ref List |
| Input | `Instruments to Move` | Collection Instrument ID Ref List |
| Input | `Solver Mode` | String |
| Input | `Motion to allow` | Fit Dof Options |
| Input | `Use Fit Dialog` | Boolean |
| Output | `Transform In Reference` | Transform |
| Output | `Transform In Working` | World Transform |
| Output | `Transform In World` | World Transform |
| Output | `Fit Objective Value` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Fits the requested objects and instruments using Relationships in one
Collection. The solver defaults to Gauss-Newton, all translational and
rotational motion is allowed about the centroid, randomized start is disabled,
and no fit dialog is shown. The result preserves the reference Transform,
working and world Transforms with scale, and objective value.

**API References:** [gRPC](/api/grpc/relationship-operations#do-relationship-fit) · [.NET](/api/dotnet/relationship-operations#do-relationship-fit) · [Python](/api/python/relationship-operations#do-relationship-fit) · [JavaScript and TypeScript](/api/javascript/relationship-operations#do-relationship-fit)

## Move Collections by Minimizing Relationships

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-relationship-fit-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk relationship fit fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#move-collections-by-minimizing-relationships) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#move-collections-by-minimizing-relationships) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#move-collections-by-minimizing-relationships) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#move-collections-by-minimizing-relationships)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Collections To Move` | String Ref List |
| Input | `Relationships To Minimize` | Collection Object Name Ref List |
| Input | `Solver Mode` | String |
| Input | `Motion to allow` | Fit Dof Options |
| Input | `Use Fit Dialog` | Boolean |
| Input | `Convergence Threshold` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Moves named Collections by minimizing the supplied Relationships. It uses the
same solver and motion defaults as Relationship fitting, keeps the fit dialog
off, and uses the exact SA 2026.1 convergence-threshold default of `0`.

**API References:** [gRPC](/api/grpc/relationship-operations#move-collections-by-minimizing-relationships) · [.NET](/api/dotnet/relationship-operations#move-collections-by-minimizing-relationships) · [Python](/api/python/relationship-operations#move-collections-by-minimizing-relationships) · [JavaScript and TypeScript](/api/javascript/relationship-operations#move-collections-by-minimizing-relationships)

## Get General Relationship Statistics

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-general-relationship-statistics) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-general-relationship-statistics) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-general-relationship-statistics) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-general-relationship-statistics)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The 2024 output label is `Max Deviation`, while 2026 uses `Absolute Max Deviation`. Preserve the 2024 label and binding. This review does not infer an absolute-value guarantee from the later label.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Output | `Max Deviation` | Double |
| Output | `RMS` | Double |
| Output | `Has Signed Deviation?` | Boolean |
| Output | `Signed Max Deviation` | Double |
| Output | `Signed Min Deviation` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns absolute maximum deviation, RMS, whether signed deviation applies, and
the signed maximum and minimum deviations.

**API References:** [gRPC](/api/grpc/relationship-operations#get-general-relationship-statistics) · [.NET](/api/dotnet/relationship-operations#get-general-relationship-statistics) · [Python](/api/python/relationship-operations#get-general-relationship-statistics) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-general-relationship-statistics)

## Get Points to Objects Relationship Statistics

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-points-objects-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk points objects relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-points-to-objects-relationship-statistics) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-points-to-objects-relationship-statistics) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-points-to-objects-relationship-statistics) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-points-to-objects-relationship-statistics)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The 2024 outputs do not include `Avg Deviation`. Retain the captured statistics without computing a substitute for the later output.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Output | `Absolute Max Deviation` | Double |
| Output | `Max Deviation` | Double |
| Output | `Min Deviation` | Double |
| Output | `RMS` | Double |
| Output | `# of Candidate Points` | Integer |
| Output | `# of Points Sampled` | Integer |
| Output | `# of Points Rejected` | Integer |
| Output | `# of Points Used` | Integer |
| Output | `# of Points Out of Tolerance` | Integer |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns absolute maximum, maximum, minimum, average, and RMS deviations plus
candidate, sampled, rejected, used, and out-of-tolerance Point counts. The
average output is present in SA 2026.1 even though ObjectiveSA's older contract
does not expose it.

**API References:** [gRPC](/api/grpc/relationship-operations#get-points-to-objects-relationship-statistics) · [.NET](/api/dotnet/relationship-operations#get-points-to-objects-relationship-statistics) · [Python](/api/python/relationship-operations#get-points-to-objects-relationship-statistics) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-points-to-objects-relationship-statistics)

## Start/Stop Relationship Trapping

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-instrument-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk instrument relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#startstop-relationship-trapping) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#startstop-relationship-trapping) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#startstop-relationship-trapping) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#startstop-relationship-trapping)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Instrument ID` | Collection Instrument ID |
| Input | `Start Trapping (FALSE = Stop)` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Starts or stops trapping for a Relationship and instrument. The exact default
is `false`, which stops trapping.

**API References:** [gRPC](/api/grpc/relationship-operations#startstop-relationship-trapping) · [.NET](/api/dotnet/relationship-operations#startstop-relationship-trapping) · [Python](/api/python/relationship-operations#startstop-relationship-trapping) · [JavaScript and TypeScript](/api/javascript/relationship-operations#startstop-relationship-trapping)

## Get Point to Point Relationship Statistics

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-point-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk point relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-point-to-point-relationship-statistics) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-point-to-point-relationship-statistics) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-point-to-point-relationship-statistics) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-point-to-point-relationship-statistics)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Output | `Delta X` | Double |
| Output | `Delta Y` | Double |
| Output | `Delta Z` | Double |
| Output | `Delta Magnitude` | Double |
| Output | `Reference Frame` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns X, Y, Z, and magnitude deltas together with the reporting Reference
Frame.

**API References:** [gRPC](/api/grpc/relationship-operations#get-point-to-point-relationship-statistics) · [.NET](/api/dotnet/relationship-operations#get-point-to-point-relationship-statistics) · [Python](/api/python/relationship-operations#get-point-to-point-relationship-statistics) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-point-to-point-relationship-statistics)

## Set Group To Nominal Group View Zooming

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-nominal-group-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk nominal group relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-group-to-nominal-group-view-zooming) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-group-to-nominal-group-view-zooming) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-group-to-nominal-group-view-zooming) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-group-to-nominal-group-view-zooming)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | Empty Relationship identity | Required |
| Input | `Use Closest Point` | Boolean | true | true |
| Input | `Show Closest Point Watch Window` | Boolean | false | false |
| Input | `Use View Zooming` | Boolean | true | true |
| Input | `Ignore Points Beyond Threshold` | Boolean | true | true |
| Input | `Proximity Threshold` | Double | 0.01 | 0.01 |

Updates the display and proximity behavior of an existing Group-to-Nominal-
Group Relationship. Briosa does not retain these settings outside SA.

**API References:** [gRPC](/api/grpc/relationship-operations#set-group-to-nominal-group-view-zooming) · [.NET](/api/dotnet/relationship-operations#set-group-to-nominal-group-view-zooming) · [Python](/api/python/relationship-operations#set-group-to-nominal-group-view-zooming) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-group-to-nominal-group-view-zooming)

## Set Relationship Associated Data

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-associated-data) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-relationship-associated-data) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-relationship-associated-data) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-relationship-associated-data)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | Empty Relationship identity | Required |
| Input | `Individual Points` | Point Name Ref List | Empty | Omitted |
| Input | `Point Groups` | Collection Object Name Ref List | Empty | Omitted |
| Input | `Point Clouds` | Collection Object Name Ref List | Empty | Omitted |
| Input | `Objects` | Collection Object Name Ref List | Empty | Omitted |
| Input | `Ignore Empty Arguments?` | Boolean | true | true |

Sets the SA-owned objects associated with a Relationship. Each list is
independently optional so a caller can omit categories that should not be
changed. Briosa forwards the supplied lists and does not retain a copy.

**API References:** [gRPC](/api/grpc/relationship-operations#set-relationship-associated-data) · [.NET](/api/dotnet/relationship-operations#set-relationship-associated-data) · [Python](/api/python/relationship-operations#set-relationship-associated-data) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-relationship-associated-data)

## Get Relationship Associated Data

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-associated-data) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-relationship-associated-data) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-relationship-associated-data) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-relationship-associated-data)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Output | `Relationship Type` | String |
| Output | `Individual Points` | Point Name Ref List |
| Output | `Point Groups` | Collection Object Name Ref List |
| Output | `Point Clouds` | Collection Object Name Ref List |
| Output | `Objects` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the Relationship type plus its individual Points, Point Groups, Point
Clouds, and other associated objects.

**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-associated-data) · [.NET](/api/dotnet/relationship-operations#get-relationship-associated-data) · [Python](/api/python/relationship-operations#get-relationship-associated-data) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-associated-data)

## Set Points to Points Relationship Associated Data

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-paired-points-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk paired points relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-points-to-points-relationship-associated-data) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#set-points-to-points-relationship-associated-data) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#set-points-to-points-relationship-associated-data) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#set-points-to-points-relationship-associated-data)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Nominal Points` | Point Name Ref List |
| Input | `Actual Points` | Point Name Ref List |
| Input | `Ignore Empty Arguments?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets the nominal and actual Point lists associated with a Points-to-Points
Relationship. Each list is optional, `Ignore Empty Arguments?` defaults to
`true`, and Briosa does not manage the pairing or subsequent SA state.

**API References:** [gRPC](/api/grpc/relationship-operations#set-points-to-points-relationship-associated-data) · [.NET](/api/dotnet/relationship-operations#set-points-to-points-relationship-associated-data) · [Python](/api/python/relationship-operations#set-points-to-points-relationship-associated-data) · [JavaScript and TypeScript](/api/javascript/relationship-operations#set-points-to-points-relationship-associated-data)

## Get Points to Points Relationship Associated Data

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-paired-points-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk paired points relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-points-to-points-relationship-associated-data) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-points-to-points-relationship-associated-data) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-points-to-points-relationship-associated-data) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-points-to-points-relationship-associated-data)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Output | `Nominal Points` | Point Name Ref List |
| Output | `Actual Points` | Point Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the nominal and actual Point lists currently associated with the named
Points-to-Points Relationship.

**API References:** [gRPC](/api/grpc/relationship-operations#get-points-to-points-relationship-associated-data) · [.NET](/api/dotnet/relationship-operations#get-points-to-points-relationship-associated-data) · [Python](/api/python/relationship-operations#get-points-to-points-relationship-associated-data) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-points-to-points-relationship-associated-data)

## Make Auto Filter Proximity Settings

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="Relationship Operations" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / Relationship Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Surface Inclusion Proximity` | Double |
| Input | `Edge Exclusion Proximity` | Double |
| Input | `Planar Inclusion Proximity` | Double |
| Input | `Planar Exclusion Proximity` | Double |
| Input | `Radial Inclusion Proximity` | Double |
| Input | `Geometry Extraction Tolerance` | Double |
| Input | `Surface Proximity Mode` | Offset Direction Type |
| Input | `Planar Proximity Mode` | Offset Direction Type |
| Input | `Radial Proximity Mode` | Offset Direction Type |
| Input | `Project To Plane?` | Boolean |
| Input | `Assert Plane Boundaries?` | Boolean |
| Output | `Filter Proximity Settings` | Auto Filter Proximity Settings |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

This MP helper only constructs a proximity-settings value. It does not inspect
or change SpatialAnalyzer state, so Briosa does not spend an RPC on it. The
language clients expose an idiomatic `FilterProximitySettings` value with the
same fields and defaults for use with the selected auto-filter operations.

## Auto Filter Clouds to Nominal Geometry 3D

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-cloud-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk cloud relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The 2024 signature has no `Use Feature Specific Filter Settings?` input. Retain the earlier filtering controls.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Auto Filter Target Relationships` | Collection Object Name Ref List |
| Input | `Clouds` | Collection Object Name Ref List |
| Input | `Cloud Thinning Settings` | Cloud Thinning Options |
| Input | `Filter Proximity Settings 3D` | Auto Filter Proximity Settings |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Filters supplied Point Clouds against target Relationships using the exact
cloud-thinning and 3D proximity settings. Thinning defaults to every fifth
Point, with a minimum of `100` and maximum of `20000`; feature-specific filter
settings default to disabled.

**API References:** [gRPC](/api/grpc/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [.NET](/api/dotnet/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [Python](/api/python/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [JavaScript and TypeScript](/api/javascript/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d)

## Auto Filter Clouds to Nominal Geometry 2D

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-cloud-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk cloud relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The 2024 signature has no `Use Feature Specific Filter Settings?` input. Retain the earlier filtering controls.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Auto Filter Target Relationships` | Collection Object Name Ref List |
| Input | `Clouds` | Collection Object Name Ref List |
| Input | `Cloud Thinning Settings` | Cloud Thinning Options |
| Input | `Filter Proximity Settings 2D` | Auto Filter Proximity Settings |
| Input | `Geometry Extraction Tolerance` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Applies the 2D form of automatic Cloud filtering. It preserves the same exact
thinning and proximity defaults, a separate geometry-extraction tolerance of
`0.01`, and the SA 2026.1 `Use Feature Specific Filter Settings?` input with a
default of `false`.

**API References:** [gRPC](/api/grpc/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [.NET](/api/dotnet/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [Python](/api/python/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [JavaScript and TypeScript](/api/javascript/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d)

## Auto Filter Points to Nominal Geometry 3D

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-point-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk point relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#auto-filter-points-to-nominal-geometry-3d)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Auto Filter Target Relationships` | Collection Object Name Ref List |
| Input | `Points` | Point Name Ref List |
| Input | `Filter Proximity Settings 3D` | Auto Filter Proximity Settings |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Filters supplied Points against target Relationships using the exact 3D
proximity settings. Briosa adds no Relationship or Point preflight.

**API References:** [gRPC](/api/grpc/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [.NET](/api/dotnet/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [Python](/api/python/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [JavaScript and TypeScript](/api/javascript/relationship-operations#auto-filter-points-to-nominal-geometry-3d)

## Auto Filter Points/Groups/Clouds to Surface Faces

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-surface-filter-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk surface filter fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Points` | Point Name Ref List |
| Input | `Groups` | Collection Object Name Ref List |
| Input | `Clouds` | Collection Object Name Ref List |
| Input | `Surface Offset` | Double |
| Input | `Edge Offset` | Double |
| Input | `Offset Direction` | Offset Direction Type |
| Input | `Enforce Max Pts per Face in Output?` | Boolean |
| Input | `Max Pts per Face` | Integer |
| Input | `Surfaces` | Collection Object Name Ref List |
| Input | `Cloud Thinning Settings` | Cloud Thinning Options |
| Input | `Output Cloud Base Name` | String |
| Input | `Use Face IDs for suffix` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Filters any supplied Points, Point Groups, and Point Clouds against required
Surface faces. Surface and edge offsets default to `0.1`, direction defaults
to `Both`, the per-face maximum is not enforced, cloud thinning uses its exact
default, the output Cloud base name is `InspAutoFilteredCloud`, and Face IDs
are used as suffixes. Briosa preserves the MP command's direct behavior without
additional safeguards.

**API References:** [gRPC](/api/grpc/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [.NET](/api/dotnet/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [Python](/api/python/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [JavaScript and TypeScript](/api/javascript/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces)

## Extract Geometry From Point Clouds

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-cloud-geometry-extraction-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk cloud geometry extraction fixture</span>
</div>
</div>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | Empty Relationship identity | Required |
| Input | `Geometry Type` | Geometry Type | Circle | Circle |
| Input | `Cloud Name` | Collection Object Name | Empty Cloud identity | Required |
| Input | `Bounding Points` | Point Name Ref List | Empty | Omitted |
| Input | `Seed Points` | Point Name Ref List | Empty | Required |
| Input | `Tolerance` | Double | 0.1 | 0.1 |
| Input | `Reverse Normal` | Boolean | false | false |
| Input | `Planar Point Count` | Integer | 1000 | 1000 |

Extracts geometry from a Point Cloud using existing seed Points and optional
boundary Points. This operation was added after ObjectiveSA's SA 2024.1 target;
the contract follows the complete exact SA 2026.1 SDK binding.

**API References:** [gRPC](/api/grpc/relationship-operations#extract-geometry-from-point-clouds) · [.NET](/api/dotnet/relationship-operations#extract-geometry-from-point-clouds) · [Python](/api/python/relationship-operations#extract-geometry-from-point-clouds) · [JavaScript and TypeScript](/api/javascript/relationship-operations#extract-geometry-from-point-clouds)

## Create Points to Objects Map

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-points-objects-map-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk points objects map fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#create-points-to-objects-map) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#create-points-to-objects-map) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#create-points-to-objects-map) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#create-points-to-objects-map)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Points` | Point Name Ref List |
| Input | `Groups` | Collection Object Name Ref List |
| Input | `Objects` | Collection Object Name Ref List |
| Input | `Proximity Tolerance` | Double |
| Input | `Points to Objects Map Name` | String |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a named SA lookup map between supplied Points or Point Groups and
candidate objects using a proximity tolerance that defaults to `0`. Briosa
does not retain, recreate, or otherwise manage the named map.

**API References:** [gRPC](/api/grpc/relationship-operations#create-points-to-objects-map) · [.NET](/api/dotnet/relationship-operations#create-points-to-objects-map) · [Python](/api/python/relationship-operations#create-points-to-objects-map) · [JavaScript and TypeScript](/api/javascript/relationship-operations#create-points-to-objects-map)

## Get Objects From Points to Objects Map (Point List)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-points-objects-map-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk points objects map fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-objects-from-points-to-objects-map-point-list)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Points to Objects Map Name` | String |
| Input | `Points` | Point Name Ref List |
| Output | `Objects` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the objects associated with a supplied Point list in a named map. The
installed prose describes an older singular-Point form; Briosa follows the
exact SA 2026.1 MP identity and Point Name Ref List SDK binding.

**API References:** [gRPC](/api/grpc/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [.NET](/api/dotnet/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [Python](/api/python/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-objects-from-points-to-objects-map-point-list)

## Compute Geometry Relationship Uncertainties

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-uncertainty-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk uncertainty relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#compute-geometry-relationship-uncertainties) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#compute-geometry-relationship-uncertainties) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#compute-geometry-relationship-uncertainties) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#compute-geometry-relationship-uncertainties)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Display Results` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Computes uncertainty for the named geometry Relationship. `Display Results`
defaults to `false`, so Briosa does not show the results dialog by default. SA
may make the Relationship dormant after the computation; Briosa exposes that
native behavior without trying to restore or manage the Relationship state.

**API References:** [gRPC](/api/grpc/relationship-operations#compute-geometry-relationship-uncertainties) · [.NET](/api/dotnet/relationship-operations#compute-geometry-relationship-uncertainties) · [Python](/api/python/relationship-operations#compute-geometry-relationship-uncertainties) · [JavaScript and TypeScript](/api/javascript/relationship-operations#compute-geometry-relationship-uncertainties)

## Make Cloud to Swatch Relationship

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations" data-validation="at-risk-cloud-swatch-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations</span>
  <span className="catalog-target-validation">At risk cloud swatch relationship fixture</span>
</div>
</div>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a Swatch Relationship from a Cloud, Surface Face list, reference Point,
and cardinal Point Group. Maximum radial, minimum axial, and maximum axial
offsets default to `0.125`, `-0.125`, and `0.125`. ObjectiveSA does not provide
an implementation, so licensed validation requires a dedicated Swatch fixture.

**API References:** [gRPC](/api/grpc/relationship-operations#make-cloud-to-swatch-relationship) · [.NET](/api/dotnet/relationship-operations#make-cloud-to-swatch-relationship) · [Python](/api/python/relationship-operations#make-cloud-to-swatch-relationship) · [JavaScript and TypeScript](/api/javascript/relationship-operations#make-cloud-to-swatch-relationship)

## Get Geom Relationship Criteria Name List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="at-risk-geometry-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">At risk geometry relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria-name-list) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria-name-list) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria-name-list) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria-name-list)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Input | `Include All Criteria?` | Boolean |
| Output | `Criteria Name List` | String Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the criteria names currently available for a geometry Relationship.
`Include All Criteria?` defaults to `false`. The exact SDK binding returns the
complete result as a String Ref List.

**API References:** [gRPC](/api/grpc/relationship-operations#get-geom-relationship-criteria-name-list) · [.NET](/api/dotnet/relationship-operations#get-geom-relationship-criteria-name-list) · [Python](/api/python/relationship-operations#get-geom-relationship-criteria-name-list) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-geom-relationship-criteria-name-list)

## Get Relationship Status

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Relationship Operations / Relationship Attributes" data-validation="at-risk-relationship-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">At risk relationship fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Relationship Operations / Relationship Attributes" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Relationship Operations / Relationship Attributes</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-status) · [.NET](/api/dotnet/sa-2024.1.0508.5/relationship-operations#get-relationship-status) · [Python](/api/python/sa-2024.1.0508.5/relationship-operations#get-relationship-status) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/relationship-operations#get-relationship-status)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name |
| Output | `Dormant` | Boolean |
| Output | `Success` | Boolean |
| Output | `Measured` | Boolean |
| Output | `Failed` | Boolean |
| Output | `Unmeasured` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns SA's raw `Dormant`, `Success`, `Measured`, `Failed`, and `Unmeasured`
flags. Briosa preserves the five independent values rather than inventing a
single status or assuming that the flags are mutually exclusive.

**API References:** [gRPC](/api/grpc/relationship-operations#get-relationship-status) · [.NET](/api/dotnet/relationship-operations#get-relationship-status) · [Python](/api/python/relationship-operations#get-relationship-status) · [JavaScript and TypeScript](/api/javascript/relationship-operations#get-relationship-status)
