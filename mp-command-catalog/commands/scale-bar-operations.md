---
title: Scale Bar Operations Commands
description: Canonical SpatialAnalyzer MP command dispositions for Scale Bar Operations.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Scale Bar Operations Commands

These canonical entries document the reviewed 2026.1.0529.7 command surface once. A
**Next** entry is a documentation-first contract, not a claim that the operation
is callable in the current release.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>5</strong></div>
  <div><span>Current or Next</span><strong>4</strong></div>
  <div><span>Excluded or Unavailable</span><strong>1</strong></div>
</div>

<CatalogFilter scopedGroup="Scale Bar Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Delete Scale Bar" data-group="Scale Bar Operations" data-status="next" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#delete-scale-bar">Delete Scale Bar</a></td>
  <td>Scale Bar Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Get Scale Bar Stats" data-group="Scale Bar Operations" data-status="next" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#get-scale-bar-stats">Get Scale Bar Stats</a></td>
  <td>Scale Bar Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Scale Bar Check" data-group="Scale Bar Operations" data-status="next" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#scale-bar-check">Scale Bar Check</a></td>
  <td>Scale Bar Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Set Inward Positive Normal" data-group="Scale Bar Operations" data-status="next" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#set-inward-positive-normal">Set Inward Positive Normal</a></td>
  <td>Scale Bar Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Sort Point Group in Database" data-group="Scale Bar Operations" data-status="sdk-unavailable" data-validation="not-applicable">
  <td><a href="#sort-point-group-in-database">Sort Point Group in Database</a></td>
  <td>Scale Bar Operations</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Not applicable</td>
</tr>
</tbody>
</table>

## Delete Scale Bar

<span className="catalog-status catalog-status--next">Next</span>

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

<span className="catalog-status catalog-status--next">Next</span>

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

<span className="catalog-status catalog-status--next">Next</span>

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

<span className="catalog-status catalog-status--next">Next</span>

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

<span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>

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
