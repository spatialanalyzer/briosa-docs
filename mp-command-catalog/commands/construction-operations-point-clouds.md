---
title: Construction Operations / Point Clouds Commands
description: Canonical MP command dispositions for the Construction Operations / Point Clouds subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / Point Clouds Commands

These entries cover the 11 commands observed under **Construction Operations
→ Point Clouds** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>11</strong></div>
  <div><span>Current Server Operations</span><strong>10</strong></div>
  <div><span>Excluded or Unavailable</span><strong>1</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / Point Clouds" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct Point Clouds from Existing Point Group" data-group="Construction Operations / Point Clouds" data-status="current" data-validation="at-risk-point-cloud-fixture-required"><td><a href="#construct-point-clouds-from-existing-point-group">Construct Point Clouds from Existing Point Group</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - point-cloud fixture required</td></tr>
<tr data-command="Construct Point Clouds from Existing Cloud Points - Runtime Select" data-group="Construction Operations / Point Clouds" data-status="current" data-validation="at-risk-interactive-point-cloud-fixture-required"><td><a href="#construct-point-clouds-from-existing-cloud-points---runtime-select">Construct Point Clouds from Existing Cloud Points - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive cloud fixture</td></tr>
<tr data-command="Construct Point Clouds from Existing Clouds - Uniform Spacing" data-group="Construction Operations / Point Clouds" data-status="current" data-validation="at-risk-point-cloud-fixture-required"><td><a href="#construct-point-clouds-from-existing-clouds---uniform-spacing">Construct Point Clouds from Existing Clouds - Uniform Spacing</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - point-cloud fixture required</td></tr>
<tr data-command="Construct Point Cloud from Existing Clouds" data-group="Construction Operations / Point Clouds" data-status="current" data-validation="at-risk-sa-2026-1-rgb-and-cloud-fixture-required"><td><a href="#construct-point-cloud-from-existing-clouds">Construct Point Cloud from Existing Clouds</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - SA 2026.1 RGB and cloud fixture</td></tr>
<tr data-command="Construct Point Cloud from Visible Cloud Points" data-group="Construction Operations / Point Clouds" data-status="current" data-validation="at-risk-clipping-and-cloud-fixture-required"><td><a href="#construct-point-cloud-from-visible-cloud-points">Construct Point Cloud from Visible Cloud Points</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - clipping and cloud fixture</td></tr>
<tr data-command="Construct Boundary Points from Cloud" data-group="Construction Operations / Point Clouds" data-status="current" data-validation="at-risk-scan-stripe-cloud-fixture-required"><td><a href="#construct-boundary-points-from-cloud">Construct Boundary Points from Cloud</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - scan-stripe cloud fixture</td></tr>
<tr data-command="Construct Point Cloud Limiting Probing Directions" data-group="Construction Operations / Point Clouds" data-status="current" data-validation="at-risk-probing-direction-fixture-required"><td><a href="#construct-point-cloud-limiting-probing-directions">Construct Point Cloud Limiting Probing Directions</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - probing-direction fixture</td></tr>
<tr data-command="Construct Cross Section Cloud" data-group="Construction Operations / Point Clouds" data-status="current" data-validation="at-risk-cross-section-cloud-fixture-required"><td><a href="#construct-cross-section-cloud">Construct Cross Section Cloud</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - cross-section cloud fixture</td></tr>
<tr data-command="Construct Cross Section Cloud - User Select" data-group="Construction Operations / Point Clouds" data-status="current" data-validation="at-risk-exact-target-binding-and-cloud-fixture-required"><td><a href="#construct-cross-section-cloud---user-select">Construct Cross Section Cloud - User Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - exact-target binding and cloud fixture</td></tr>
<tr data-command="Extract Sphere Centers from Point Cloud" data-group="Construction Operations / Point Clouds" data-status="current" data-validation="at-risk-raster-cloud-fixture-required"><td><a href="#extract-sphere-centers-from-point-cloud">Extract Sphere Centers from Point Cloud</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - raster-cloud fixture</td></tr>
<tr data-command="Create Cloud Thinning Settings" data-group="Construction Operations / Point Clouds" data-status="excluded" data-validation="exact-target-sdk-binding-review"><td><a href="#create-cloud-thinning-settings">Create Cloud Thinning Settings</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Exact-target SDK binding review</td></tr>
</tbody>
</table>

## Shared Cloud Thinning Settings

Selected operations accept a shared `CloudThinningOptions` value with the
exact SDK-supported modes `None`, `Random`, and `Nth Point`. Its MP defaults
are `Nth Point`, point increment `5`, minimum points `100`, and maximum points
`20000`.

## Construct Point Clouds from Existing Point Group

<span className="catalog-status catalog-status--current">Current</span>

Creates a cloud from a required Point Group identity and required destination
Cloud identity. SpatialAnalyzer automatically sequences a duplicate cloud
name.

## Construct Point Clouds from Existing Cloud Points - Runtime Select

<span className="catalog-status catalog-status--current">Current</span>

Accepts a required destination Cloud identity, then asks the operator to select
cloud points in SpatialAnalyzer. Cancellation or a deadline does not prove the
runtime interaction stopped.

## Construct Point Clouds from Existing Clouds - Uniform Spacing

<span className="catalog-status catalog-status--current">Current</span>

| Exact MP Argument | MP Type | Briosa Default |
| --- | --- | --- |
| `Existing Point Cloud List` | Collection Object Name Ref List | Required |
| `Desired Point Spacing` | Double | 0.02 |
| `Minimum Points Per Output Point` | Integer | 3 |
| `New Cloud Name` | Cloud Name | Required |
| `Hide Original Point Clouds` | Boolean | true |

The `0.02` spacing is the exact SA 2026.1 MP Editor default. It intentionally
differs from ObjectiveSA's older `0.2` default.

## Construct Point Cloud from Existing Clouds

<span className="catalog-status catalog-status--current">Current</span>

| Exact MP Argument | MP Type | Briosa Default |
| --- | --- | --- |
| `Existing Point Cloud List` | Collection Object Name Ref List | Required |
| `New Cloud Name` | Cloud Name | Required |
| `Cloud Thinning Settings` | Cloud Thinning Options | Shared defaults |
| `Hide Original Point Clouds` | Boolean | true |
| `Set Cloud Point RGB from Voxels?` | Boolean | false |

The RGB option was added in SA 2026.1 and is retained even though it is absent
from ObjectiveSA's SA 2024.1 wrapper.

## Construct Point Cloud from Visible Cloud Points

<span className="catalog-status catalog-status--current">Current</span>

Creates a destination cloud from only the currently visible points in a
required source-cloud list. SpatialAnalyzer evaluates cloud and view clipping
planes and ignores the job's Cloud Thinning Control for this operation.

## Construct Boundary Points from Cloud

<span className="catalog-status catalog-status--current">Current</span>

Creates a destination cloud containing boundary points from a required source
cloud. Validation requires suitable scan-stripe cloud data.

## Construct Point Cloud Limiting Probing Directions

<span className="catalog-status catalog-status--current">Current</span>

Accepts required source, direction-object, and destination identities. The
acceptance angle defaults to `30.0`, and `Hide Source Cloud` defaults to
`false`. SpatialAnalyzer compares each scan stripe's reversed probing direction
with the reference object's normal.

## Construct Cross Section Cloud

<span className="catalog-status catalog-status--current">Current</span>

Builds planar or cylindrical sections from a required input-cloud list. The
cross-section Cloud identity is required. Cylindrical mode, distances,
thresholds, maximum section count, extent limit, radius limit, projection, and
update mode preserve their zero or `false` MP defaults. The reference object
is optional unless required by the chosen SpatialAnalyzer workflow. Cloud
thinning uses the shared defaults.

## Construct Cross Section Cloud - User Select

<span className="catalog-status catalog-status--current">Current</span>

Builds sections from explicit reference-plane and input-cloud lists. Despite
the MP title, the exact SDK binding contains no runtime-selection call. The
installed documentation lists `Maximum Section Count`, but the exact exported
binding and the prior-release wrapper do not expose it, so Briosa cannot accept
that argument for this exact target. The implementation must use the exact
`Construct Cross Section Cloud - User Select` step name.

## Extract Sphere Centers from Point Cloud

<span className="catalog-status catalog-status--current">Current</span>

| Direction | Exact MP Argument | MP Type | Briosa Default |
| --- | --- | --- | --- |
| Input | `Cloud Name` | Cloud Name | Required |
| Input | `Desired Diameter` | Double | 0.0 |
| Input | `Extraction Tolerance` | Double | 0.0 |
| Input | `Minimum Point Count` | Integer | 50 |
| Input | `Group Name for Points` | Point Group Name | Required |
| Input | `Perform Final Fit` | Boolean | true |
| Input | `Final Fit Cone Angle` | Double | 120.0 |
| Output | `Number of Points Extracted` | Integer | Returned |

The source must contain suitable raster-scanner sphere data. Briosa returns
the exact extracted-point count reported by SpatialAnalyzer.

## Create Cloud Thinning Settings

<span className="catalog-status catalog-status--excluded">Excluded</span>

This command constructs an MP-local value rather than changing or querying
SpatialAnalyzer. The SDK's direct cloud-thinning setter supports only part of
the MP constructor's settings. Briosa exposes the supported values directly as
`CloudThinningOptions`; no network operation is necessary.

**API References:** [gRPC](/api/grpc/construction-operations-point-clouds) · [.NET](/api/dotnet/construction-operations-point-clouds) · [Python](/api/python/construction-operations-point-clouds) · [JavaScript and TypeScript](/api/javascript/construction-operations-point-clouds)
