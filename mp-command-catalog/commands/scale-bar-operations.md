---
title: Scale Bar Operations Commands
description: Canonical SpatialAnalyzer MP command dispositions for Scale Bar Operations.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Scale Bar Operations Commands

These canonical entries document the reviewed 2026.1.0529.7 command surface once. Current entries are included in Briosa Server 0.7.0; runtime policy and readiness still apply.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>5</strong></div>
  <div><span>Current Server Operations</span><strong>4</strong></div>
  <div><span>Excluded or Unavailable</span><strong>1</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Scale Bar Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Delete Scale Bar" data-group="Scale Bar Operations" data-status="current" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#delete-scale-bar">Delete Scale Bar</a></td>
  <td>Scale Bar Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Delete Scale Bar" data-group="Analysis Operations / Scale Bars" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#delete-scale-bar">Delete Scale Bar</a></td>
  <td>Analysis Operations / Scale Bars</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Scale Bar Stats" data-group="Scale Bar Operations" data-status="current" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#get-scale-bar-stats">Get Scale Bar Stats</a></td>
  <td>Scale Bar Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Get Scale Bar Stats" data-group="Analysis Operations / Scale Bars" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-scale-bar-stats">Get Scale Bar Stats</a></td>
  <td>Analysis Operations / Scale Bars</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Scale Bar Check" data-group="Scale Bar Operations" data-status="current" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#scale-bar-check">Scale Bar Check</a></td>
  <td>Scale Bar Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Scale Bar Check" data-group="Analysis Operations / Scale Bars" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#scale-bar-check">Scale Bar Check</a></td>
  <td>Analysis Operations / Scale Bars</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Inward Positive Normal" data-group="Scale Bar Operations" data-status="current" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#set-inward-positive-normal">Set Inward Positive Normal</a></td>
  <td>Scale Bar Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Set Inward Positive Normal" data-group="Analysis Operations" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-inward-positive-normal">Set Inward Positive Normal</a></td>
  <td>Analysis Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Sort Point Group in Database" data-group="Scale Bar Operations" data-status="sdk-unavailable" data-validation="not-applicable">
  <td><a href="#sort-point-group-in-database">Sort Point Group in Database</a></td>
  <td>Scale Bar Operations</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Sort Point Group in Database" data-group="Analysis Operations" data-status="sdk-unavailable" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#sort-point-group-in-database">Sort Point Group in Database</a></td>
  <td>Analysis Operations</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Evidence review</td>
</tr>
</tbody>
</table>

## Delete Scale Bar

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Scale Bar Operations" data-validation="at-risk-fixture-or-interactive-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Scale Bar Operations</span>
  <span className="catalog-target-validation">At risk fixture or interactive validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Scale Bars" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Scale Bars</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/scale-bar-operations#delete-scale-bar) · [.NET](/api/dotnet/sa-2024.1.0508.5/scale-bar-operations#delete-scale-bar) · [Python](/api/python/sa-2024.1.0508.5/scale-bar-operations#delete-scale-bar) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/scale-bar-operations#delete-scale-bar)</p>

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
  <div><span>MP Group Path</span><strong>Scale Bar Operations</strong></div>
  <div><span>Validation</span><strong>At Risk — fixture or interactive validation required</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Scale Bar Name` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/scale-bar-operations#delete-scale-bar) · [.NET](/api/dotnet/scale-bar-operations#delete-scale-bar) · [Python](/api/python/scale-bar-operations#delete-scale-bar) · [JavaScript and TypeScript](/api/javascript/scale-bar-operations#delete-scale-bar)


## Get Scale Bar Stats

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Scale Bar Operations" data-validation="at-risk-fixture-or-interactive-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Scale Bar Operations</span>
  <span className="catalog-target-validation">At risk fixture or interactive validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Scale Bars" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Scale Bars</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/scale-bar-operations#get-scale-bar-stats) · [.NET](/api/dotnet/sa-2024.1.0508.5/scale-bar-operations#get-scale-bar-stats) · [Python](/api/python/sa-2024.1.0508.5/scale-bar-operations#get-scale-bar-stats) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/scale-bar-operations#get-scale-bar-stats)</p>

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
  <div><span>MP Group Path</span><strong>Scale Bar Operations</strong></div>
  <div><span>Validation</span><strong>At Risk — fixture or interactive validation required</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Scale Bar Name` | Collection Object Name | See MP definition | Required |
| Output | `Nominal Length` | Double | — | — |
| Output | `Actual Length` | Double | — | — |
| Output | `Deviation` | Double | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/scale-bar-operations#get-scale-bar-stats) · [.NET](/api/dotnet/scale-bar-operations#get-scale-bar-stats) · [Python](/api/python/scale-bar-operations#get-scale-bar-stats) · [JavaScript and TypeScript](/api/javascript/scale-bar-operations#get-scale-bar-stats)


## Scale Bar Check

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Scale Bar Operations" data-validation="at-risk-fixture-or-interactive-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Scale Bar Operations</span>
  <span className="catalog-target-validation">At risk fixture or interactive validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations / Scale Bars" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations / Scale Bars</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/scale-bar-operations#scale-bar-check) · [.NET](/api/dotnet/sa-2024.1.0508.5/scale-bar-operations#scale-bar-check) · [Python](/api/python/sa-2024.1.0508.5/scale-bar-operations#scale-bar-check) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/scale-bar-operations#scale-bar-check)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Scale Bar Operations</strong></div>
  <div><span>Validation</span><strong>At Risk — fixture or interactive validation required</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `ScaleBar Point A` | Point Name | See MP definition | Required |
| Input | `ScaleBar Point B` | Point Name | See MP definition | Required |
| Input | `Current Temperature (F)` | Double | 0.000000 | 0.000000 |
| Input | `Length of Bar at 68F` | Double | 0.000000 | 0.000000 |
| Input | `Material CTE (PPM/F)` | Double | 0.000000 | 0.000000 |
| Input | `Tolerance` | Double | 0.000000 | 0.000000 |
| Output | `Deviation at 68F` | Double | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/scale-bar-operations#scale-bar-check) · [.NET](/api/dotnet/scale-bar-operations#scale-bar-check) · [Python](/api/python/scale-bar-operations#scale-bar-check) · [JavaScript and TypeScript](/api/javascript/scale-bar-operations#scale-bar-check)


## Set Inward Positive Normal

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Scale Bar Operations" data-validation="at-risk-fixture-or-interactive-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Scale Bar Operations</span>
  <span className="catalog-target-validation">At risk fixture or interactive validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="Analysis Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Analysis Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/scale-bar-operations#set-inward-positive-normal) · [.NET](/api/dotnet/sa-2024.1.0508.5/scale-bar-operations#set-inward-positive-normal) · [Python](/api/python/sa-2024.1.0508.5/scale-bar-operations#set-inward-positive-normal) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/scale-bar-operations#set-inward-positive-normal)</p>

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
  <div><span>MP Group Path</span><strong>Scale Bar Operations</strong></div>
  <div><span>Validation</span><strong>At Risk — fixture or interactive validation required</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Object Name` | Collection Object Name | See MP definition | Required |
| Input | `Inward Positive?` | Boolean | true | true |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/scale-bar-operations#set-inward-positive-normal) · [.NET](/api/dotnet/scale-bar-operations#set-inward-positive-normal) · [Python](/api/python/scale-bar-operations#set-inward-positive-normal) · [JavaScript and TypeScript](/api/javascript/scale-bar-operations#set-inward-positive-normal)


## Sort Point Group in Database

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="sdk-unavailable" data-group="Scale Bar Operations" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>
  <span className="catalog-target-group">Scale Bar Operations</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="sdk-unavailable" data-group="Analysis Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>
  <span className="catalog-target-group">Analysis Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

No complete reviewed useful SDK mapping is available for this 2024 command.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Scale Bar Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Point Group` | Collection Object Name | See MP definition | Not applicable |
| Input | `Point Group Sort Options` | SDK-unavailable MP argument | Unavailable | Not applicable |

### Briosa Disposition

The exact SDK cannot supply `Point Group Sort Options`, so Briosa cannot expose the complete useful operation.

**Recommended Alternative:** Use an MP/subroutine when SA behavior is required; no direct Briosa operation is planned.
