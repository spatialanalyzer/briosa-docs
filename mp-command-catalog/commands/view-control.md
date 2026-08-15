---
title: View Control Commands
description: Canonical SpatialAnalyzer MP command dispositions for View Control.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# View Control Commands

These canonical entries document the reviewed 2026.1.0529.7 command surface once. A
**Next** entry is a documentation-first contract, not a claim that the operation
is callable in the current release.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>52</strong></div>
  <div><span>Current or Next</span><strong>47</strong></div>
  <div><span>Excluded or Unavailable</span><strong>5</strong></div>
</div>

<CatalogFilter scopedGroup="View Control" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Auto-Scale" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#auto-scale">Auto-Scale</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Center Graphics About Object(s)" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#center-graphics-about-objects">Center Graphics About Object(s)</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Center Graphics About Point" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#center-graphics-about-point">Center Graphics About Point</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Convert Integer Values to RGB" data-group="View Control / Colors" data-status="excluded" data-validation="not-applicable">
  <td><a href="#convert-integer-values-to-rgb">Convert Integer Values to RGB</a></td>
  <td>View Control / Colors</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Convert RGB Values to Integer" data-group="View Control / Colors" data-status="excluded" data-validation="not-applicable">
  <td><a href="#convert-rgb-values-to-integer">Convert RGB Values to Integer</a></td>
  <td>View Control / Colors</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Define point of view" data-group="View Control / Point Of View" data-status="next" data-validation="portable-contract-review">
  <td><a href="#define-point-of-view">Define point of view</a></td>
  <td>View Control / Point Of View</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Active Clipping Planes" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#get-active-clipping-planes">Get Active Clipping Planes</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Object Color" data-group="View Control / Colors" data-status="sdk-unavailable" data-validation="not-applicable">
  <td><a href="#get-object-color">Get Object Color</a></td>
  <td>View Control / Colors</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Get point of view parameters" data-group="View Control / Point Of View" data-status="next" data-validation="portable-contract-review">
  <td><a href="#get-point-of-view-parameters">Get point of view parameters</a></td>
  <td>View Control / Point Of View</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Hide All Callout View" data-group="View Control / Hide Show Operations" data-status="sdk-unavailable" data-validation="not-applicable">
  <td><a href="#hide-all-callout-view">Hide All Callout View</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Hide All Callout Views" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#hide-all-callout-views">Hide All Callout Views</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Hide Objects" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#hide-objects">Hide Objects</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Highlight Objects" data-group="View Control / Highlight Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#highlight-objects">Highlight Objects</a></td>
  <td>View Control / Highlight Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Highlight Point" data-group="View Control / Highlight Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#highlight-point">Highlight Point</a></td>
  <td>View Control / Highlight Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Highlight Relationships" data-group="View Control / Highlight Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#highlight-relationships">Highlight Relationships</a></td>
  <td>View Control / Highlight Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Load Ribbon Bar from XML File" data-group="View Control / Ribbon Bar" data-status="next" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#load-ribbon-bar-from-xml-file">Load Ribbon Bar from XML File</a></td>
  <td>View Control / Ribbon Bar</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Refresh Views" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#refresh-views">Refresh Views</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Reset Ribbon Bar to Default" data-group="View Control / Ribbon Bar" data-status="next" data-validation="portable-contract-review">
  <td><a href="#reset-ribbon-bar-to-default">Reset Ribbon Bar to Default</a></td>
  <td>View Control / Ribbon Bar</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Save point of view" data-group="View Control / Point Of View" data-status="next" data-validation="portable-contract-review">
  <td><a href="#save-point-of-view">Save point of view</a></td>
  <td>View Control / Point Of View</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Background Color" data-group="View Control / Colors" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-background-color">Set Background Color</a></td>
  <td>View Control / Colors</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set MP's Window State" data-group="View Control" data-status="next" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#set-mps-window-state">Set MP's Window State</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Set Object(s) Color" data-group="View Control / Colors" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-objects-color">Set Object(s) Color</a></td>
  <td>View Control / Colors</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Object(s) Translucency" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-objects-translucency">Set Object(s) Translucency</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set point of view" data-group="View Control / Point Of View" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-point-of-view">Set point of view</a></td>
  <td>View Control / Point Of View</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Point of View from Frame" data-group="View Control / Point Of View" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-point-of-view-from-frame">Set Point of View from Frame</a></td>
  <td>View Control / Point Of View</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Point of View from Instrument Updates" data-group="View Control / Point Of View" data-status="next" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#set-point-of-view-from-instrument-updates">Set Point of View from Instrument Updates</a></td>
  <td>View Control / Point Of View</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Set Render Mode Type" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-render-mode-type">Set Render Mode Type</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set SA's Window Pos" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-sas-window-pos">Set SA's Window Pos</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set SA's Window Size" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-sas-window-size">Set SA's Window Size</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set SA's Window State" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-sas-window-state">Set SA's Window State</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Target Labels Use Full Names" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-target-labels-use-full-names">Set Target Labels Use Full Names</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Toolkit Visibility" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-toolkit-visibility">Set Toolkit Visibility</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set View Clipping Plane" data-group="View Control" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-view-clipping-plane">Set View Clipping Plane</a></td>
  <td>View Control</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Working Color" data-group="View Control / Colors" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-working-color">Set Working Color</a></td>
  <td>View Control / Colors</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Working Color Auto Increment" data-group="View Control / Colors" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-working-color-auto-increment">Set Working Color Auto Increment</a></td>
  <td>View Control / Colors</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show / Hide by Object Type" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#show--hide-by-object-type">Show / Hide by Object Type</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show / Hide Callout View" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#show--hide-callout-view">Show / Hide Callout View</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show / Hide Dimension" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#show--hide-dimension">Show / Hide Dimension</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show / Hide Points" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#show--hide-points">Show / Hide Points</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show by Object Type" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#show-by-object-type">Show by Object Type</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show Items in Tree" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#show-items-in-tree">Show Items in Tree</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show Labels" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#show-labels">Show Labels</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show Objects" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#show-objects">Show Objects</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show/Hide Annotations for Datums" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#showhide-annotations-for-datums">Show/Hide Annotations for Datums</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show/Hide Annotations for Feature Checks" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#showhide-annotations-for-feature-checks">Show/Hide Annotations for Feature Checks</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show/Hide Dimensions" data-group="View Control / Hide Show Operations" data-status="sdk-unavailable" data-validation="not-applicable">
  <td><a href="#showhide-dimensions">Show/Hide Dimensions</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Show/Hide Inspection Bar" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#showhide-inspection-bar">Show/Hide Inspection Bar</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show/Hide Instrument Interface" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#showhide-instrument-interface">Show/Hide Instrument Interface</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show/Hide Instrument Probe Tip" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#showhide-instrument-probe-tip">Show/Hide Instrument Probe Tip</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show/Hide Instruments" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#showhide-instruments">Show/Hide Instruments</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show/Hide Relationship Report" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#showhide-relationship-report">Show/Hide Relationship Report</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show/Hide Relationship Watch" data-group="View Control / Hide Show Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#showhide-relationship-watch">Show/Hide Relationship Watch</a></td>
  <td>View Control / Hide Show Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
</tbody>
</table>

## Auto-Scale

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| — | None | — | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#auto-scale) · [.NET](/api/dotnet/view-control#auto-scale) · [Python](/api/python/view-control#auto-scale) · [JavaScript and TypeScript](/api/javascript/view-control#auto-scale)


## Center Graphics About Object(s)

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Object Type` | Object Type | Any | Any |
| Input | `Collection Wildcard Criteria` | String | * | * |
| Input | `Object Wildcard Criteria` | String | * | * |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#center-graphics-about-objects) · [.NET](/api/dotnet/view-control#center-graphics-about-objects) · [Python](/api/python/view-control#center-graphics-about-objects) · [JavaScript and TypeScript](/api/javascript/view-control#center-graphics-about-objects)


## Center Graphics About Point

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Point Name` | Point Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#center-graphics-about-point) · [.NET](/api/dotnet/view-control#center-graphics-about-point) · [Python](/api/python/view-control#center-graphics-about-point) · [JavaScript and TypeScript](/api/javascript/view-control#center-graphics-about-point)


## Convert Integer Values to RGB

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Colors</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Red Color (0-255)` | Integer | 0 | Not applicable |
| Input | `Green Color (0-255)` | Integer | 0 | Not applicable |
| Input | `Blue Color (0-255)` | Integer | 0 | Not applicable |

### Briosa Disposition

A reviewed product decision favors a client-side operation, typed value, lifecycle API, or MP/subroutine workflow instead.

**Recommended Alternative:** Use the caller language or an MP/subroutine, depending on where the behavior belongs.



## Convert RGB Values to Integer

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Colors</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `RGB Color` | Color | RGB 0, 0, 0 | Not applicable |
| Output | `Red Color` | Integer | — | — |
| Output | `Green Color` | Integer | — | — |
| Output | `Blue Color` | Integer | — | — |

### Briosa Disposition

A reviewed product decision favors a client-side operation, typed value, lifecycle API, or MP/subroutine workflow instead.

**Recommended Alternative:** Use the caller language or an MP/subroutine, depending on where the behavior belongs.



## Define point of view

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Point Of View</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `View Name` | View Name | Empty | Required |
| Input | `Rotation (x)` | Double | 0.000000 | 0.000000 |
| Input | `Rotation (y)` | Double | 0.000000 | 0.000000 |
| Input | `Rotation (z)` | Double | 0.000000 | 0.000000 |
| Input | `Restore Zoom Settings?` | Boolean | false | false |
| Input | `Scale Factor` | Double | 1.000000 | 1.000000 |
| Input | `Origin (x)` | Double | 0.000000 | 0.000000 |
| Input | `Origin (y)` | Double | 0.000000 | 0.000000 |
| Input | `Restore Render Mode?` | Boolean | false | false |
| Input | `Rendering Mode` | Render Mode Type | Wireframe | Wireframe |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#define-point-of-view) · [.NET](/api/dotnet/view-control#define-point-of-view) · [Python](/api/python/view-control#define-point-of-view) · [JavaScript and TypeScript](/api/javascript/view-control#define-point-of-view)


## Get Active Clipping Planes

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Output | `Objects` | Collection Object Name Ref List | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#get-active-clipping-planes) · [.NET](/api/dotnet/view-control#get-active-clipping-planes) · [Python](/api/python/view-control#get-active-clipping-planes) · [JavaScript and TypeScript](/api/javascript/view-control#get-active-clipping-planes)


## Get Object Color

<span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Colors</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Object Name` | Collection Object Name | See MP definition | Not applicable |

### Briosa Disposition

No complete useful exact-target SDK binding is available.

**Recommended Alternative:** Use an MP/subroutine when SA behavior is required; no direct Briosa operation is planned.



## Get point of view parameters

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Point Of View</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `View Name` | View Name | Empty | Required |
| Output | `Rotation (x)` | Double | — | — |
| Output | `Rotation (y)` | Double | — | — |
| Output | `Rotation (z)` | Double | — | — |
| Output | `Restore Zoom Settings?` | Boolean | — | — |
| Output | `Scale Factor` | Double | — | — |
| Output | `Origin (x)` | Double | — | — |
| Output | `Origin (y)` | Double | — | — |
| Output | `Restore Render Mode?` | Boolean | — | — |

### Briosa Disposition

Returns the eight evidenced values; the documented rendering mode output is omitted.


**API References:** [gRPC](/api/grpc/view-control#get-point-of-view-parameters) · [.NET](/api/dotnet/view-control#get-point-of-view-parameters) · [Python](/api/python/view-control#get-point-of-view-parameters) · [JavaScript and TypeScript](/api/javascript/view-control#get-point-of-view-parameters)


## Hide All Callout View

<span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Not observed</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| — | None | — | — | — |

### Briosa Disposition

No complete useful exact-target SDK binding is available.

**Recommended Alternative:** Use an MP/subroutine when SA behavior is required; no direct Briosa operation is planned.



## Hide All Callout Views

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| — | None | — | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#hide-all-callout-views) · [.NET](/api/dotnet/view-control#hide-all-callout-views) · [Python](/api/python/view-control#hide-all-callout-views) · [JavaScript and TypeScript](/api/javascript/view-control#hide-all-callout-views)


## Hide Objects

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Objects To Hide` | Collection Object Name Ref List | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#hide-objects) · [.NET](/api/dotnet/view-control#hide-objects) · [Python](/api/python/view-control#hide-objects) · [JavaScript and TypeScript](/api/javascript/view-control#hide-objects)


## Highlight Objects

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Highlight Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Object Names (Empty to clear all)` | Collection Object Name Ref List | See MP definition | Required |
| Input | `HighLight Objects?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#highlight-objects) · [.NET](/api/dotnet/view-control#highlight-objects) · [Python](/api/python/view-control#highlight-objects) · [JavaScript and TypeScript](/api/javascript/view-control#highlight-objects)


## Highlight Point

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Highlight Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Point Name (Empty to clear all)` | Point Name | See MP definition | Required |
| Input | `Show Point?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#highlight-point) · [.NET](/api/dotnet/view-control#highlight-point) · [Python](/api/python/view-control#highlight-point) · [JavaScript and TypeScript](/api/javascript/view-control#highlight-point)


## Highlight Relationships

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Highlight Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationships (Empty to clear all)` | Collection Object Name Ref List | See MP definition | Required |
| Input | `HighLight Relationships?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#highlight-relationships) · [.NET](/api/dotnet/view-control#highlight-relationships) · [Python](/api/python/view-control#highlight-relationships) · [JavaScript and TypeScript](/api/javascript/view-control#highlight-relationships)


## Load Ribbon Bar from XML File

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Ribbon Bar</strong></div>
  <div><span>Validation</span><strong>At Risk — fixture or interactive validation required</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `File Path` | File Path or Embedded File | Empty | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#load-ribbon-bar-from-xml-file) · [.NET](/api/dotnet/view-control#load-ribbon-bar-from-xml-file) · [Python](/api/python/view-control#load-ribbon-bar-from-xml-file) · [JavaScript and TypeScript](/api/javascript/view-control#load-ribbon-bar-from-xml-file)


## Refresh Views

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| — | None | — | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#refresh-views) · [.NET](/api/dotnet/view-control#refresh-views) · [Python](/api/python/view-control#refresh-views) · [JavaScript and TypeScript](/api/javascript/view-control#refresh-views)


## Reset Ribbon Bar to Default

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Ribbon Bar</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| — | None | — | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#reset-ribbon-bar-to-default) · [.NET](/api/dotnet/view-control#reset-ribbon-bar-to-default) · [Python](/api/python/view-control#reset-ribbon-bar-to-default) · [JavaScript and TypeScript](/api/javascript/view-control#reset-ribbon-bar-to-default)


## Save point of view

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Point Of View</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `View Name` | View Name | Empty | Required |
| Input | `Restore Zoom Settings?` | Boolean | true | true |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#save-point-of-view) · [.NET](/api/dotnet/view-control#save-point-of-view) · [Python](/api/python/view-control#save-point-of-view) · [JavaScript and TypeScript](/api/javascript/view-control#save-point-of-view)


## Set Background Color

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Colors</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Background Color Type` | SDK-unavailable MP argument | Unavailable | Not exposed |
| Input | `Solid Color Name` | Color | RGB 255, 0, 0 | RGB 255, 0, 0 |
| Input | `Gradient Start Color Name` | Color | RGB 255, 0, 0 | RGB 255, 0, 0 |
| Input | `Gradient End Color Name` | Color | RGB 255, 0, 0 | RGB 255, 0, 0 |
| Input | `Gradient Color Direction` | SDK-unavailable MP argument | Unavailable | Not exposed |
| Input | `Highlight Color` | Color | RGB 255, 0, 0 | RGB 255, 0, 0 |

### Briosa Disposition

Sets the four color values; background type and gradient direction cannot be selected.


**API References:** [gRPC](/api/grpc/view-control#set-background-color) · [.NET](/api/dotnet/view-control#set-background-color) · [Python](/api/python/view-control#set-background-color) · [JavaScript and TypeScript](/api/javascript/view-control#set-background-color)


## Set MP's Window State

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>At Risk — fixture or interactive validation required</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `MP Window State` | Window State | Empty | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-mps-window-state) · [.NET](/api/dotnet/view-control#set-mps-window-state) · [Python](/api/python/view-control#set-mps-window-state) · [JavaScript and TypeScript](/api/javascript/view-control#set-mps-window-state)


## Set Object(s) Color

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Colors</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Objects to change` | Collection Object Name Ref List | See MP definition | Required |
| Input | `New Working Color Name` | Color | RGB 255, 0, 0 | RGB 255, 0, 0 |
| Input | `Auto Increment` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-objects-color) · [.NET](/api/dotnet/view-control#set-objects-color) · [Python](/api/python/view-control#set-objects-color) · [JavaScript and TypeScript](/api/javascript/view-control#set-objects-color)


## Set Object(s) Translucency

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Objects to change` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Rendering Type` | TranslucencyType | Empty | Required |
| Input | `Opacity Value` | Double | 0.000000 | 0.000000 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-objects-translucency) · [.NET](/api/dotnet/view-control#set-objects-translucency) · [Python](/api/python/view-control#set-objects-translucency) · [JavaScript and TypeScript](/api/javascript/view-control#set-objects-translucency)


## Set point of view

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Point Of View</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `View Name` | View Name | Empty | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-point-of-view) · [.NET](/api/dotnet/view-control#set-point-of-view) · [Python](/api/python/view-control#set-point-of-view) · [JavaScript and TypeScript](/api/javascript/view-control#set-point-of-view)


## Set Point of View from Frame

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Point Of View</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Frame` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-point-of-view-from-frame) · [.NET](/api/dotnet/view-control#set-point-of-view-from-frame) · [Python](/api/python/view-control#set-point-of-view-from-frame) · [JavaScript and TypeScript](/api/javascript/view-control#set-point-of-view-from-frame)


## Set Point of View from Instrument Updates

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Point Of View</strong></div>
  <div><span>Validation</span><strong>At Risk — fixture or interactive validation required</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Instrument's ID` | Collection Instrument ID | See MP definition | Required |
| Input | `Display View Control` | Boolean | true | true |
| Input | `Enable Set Viewpoint From Instrument Updates` | Boolean | false | false |
| Input | `Update View Percent` | Double | 75.000000 | 75.000000 |
| Input | `Clip Behind Probe` | Boolean | false | false |
| Input | `Automatic Zoom When Trapping` | Boolean | false | false |
| Input | `Enable Directional Cloud Points` | Boolean | false | false |
| Input | `Angle Reset Threshold` | Double | 45.000000 | 45.000000 |
| Input | `Animation Steps` | Integer | 8 | 8 |
| Input | `Reference Frame Object` | Collection Object Name | See MP definition | Required |
| Input | `Use Scan Stripe for View Focus` | Boolean | true | true |
| Input | `Zoom Factor` | Double | 1.000000 | 1.000000 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-point-of-view-from-instrument-updates) · [.NET](/api/dotnet/view-control#set-point-of-view-from-instrument-updates) · [Python](/api/python/view-control#set-point-of-view-from-instrument-updates) · [JavaScript and TypeScript](/api/javascript/view-control#set-point-of-view-from-instrument-updates)


## Set Render Mode Type

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Rendering Mode` | Render Mode Type | Empty | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-render-mode-type) · [.NET](/api/dotnet/view-control#set-render-mode-type) · [Python](/api/python/view-control#set-render-mode-type) · [JavaScript and TypeScript](/api/javascript/view-control#set-render-mode-type)


## Set SA's Window Pos

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Pos X` | Integer | 0 | 0 |
| Input | `Pos Y` | Integer | 0 | 0 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-sas-window-pos) · [.NET](/api/dotnet/view-control#set-sas-window-pos) · [Python](/api/python/view-control#set-sas-window-pos) · [JavaScript and TypeScript](/api/javascript/view-control#set-sas-window-pos)


## Set SA's Window Size

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Width` | Integer | 0 | 0 |
| Input | `Height` | Integer | 0 | 0 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-sas-window-size) · [.NET](/api/dotnet/view-control#set-sas-window-size) · [Python](/api/python/view-control#set-sas-window-size) · [JavaScript and TypeScript](/api/javascript/view-control#set-sas-window-size)


## Set SA's Window State

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `SA Window State` | Window State | Empty | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-sas-window-state) · [.NET](/api/dotnet/view-control#set-sas-window-state) · [Python](/api/python/view-control#set-sas-window-state) · [JavaScript and TypeScript](/api/javascript/view-control#set-sas-window-state)


## Set Target Labels Use Full Names

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Use Full Names?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-target-labels-use-full-names) · [.NET](/api/dotnet/view-control#set-target-labels-use-full-names) · [Python](/api/python/view-control#set-target-labels-use-full-names) · [JavaScript and TypeScript](/api/javascript/view-control#set-target-labels-use-full-names)


## Set Toolkit Visibility

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Show Toolkit?` | Boolean | false | false |
| Input | `Page to Display` | SDK-unavailable MP argument | Unavailable | Not exposed |

### Briosa Disposition

Shows or hides the toolkit; the toolkit page cannot be selected.


**API References:** [gRPC](/api/grpc/view-control#set-toolkit-visibility) · [.NET](/api/dotnet/view-control#set-toolkit-visibility) · [Python](/api/python/view-control#set-toolkit-visibility) · [JavaScript and TypeScript](/api/javascript/view-control#set-toolkit-visibility)


## Set View Clipping Plane

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Object` | Collection Object Name | See MP definition | Required |
| Input | `Remove Clipping Plane?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-view-clipping-plane) · [.NET](/api/dotnet/view-control#set-view-clipping-plane) · [Python](/api/python/view-control#set-view-clipping-plane) · [JavaScript and TypeScript](/api/javascript/view-control#set-view-clipping-plane)


## Set Working Color

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Colors</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `New Working Color Name` | Color | RGB 255, 0, 0 | RGB 255, 0, 0 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-working-color) · [.NET](/api/dotnet/view-control#set-working-color) · [Python](/api/python/view-control#set-working-color) · [JavaScript and TypeScript](/api/javascript/view-control#set-working-color)


## Set Working Color Auto Increment

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Colors</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Auto Increment` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#set-working-color-auto-increment) · [.NET](/api/dotnet/view-control#set-working-color-auto-increment) · [Python](/api/python/view-control#set-working-color-auto-increment) · [JavaScript and TypeScript](/api/javascript/view-control#set-working-color-auto-increment)


## Show / Hide by Object Type

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `All Collections?` | Boolean | false | false |
| Input | `Specific Collection` | Collection Name | Empty | Required |
| Input | `Object Type To Show / Hide` | Object Type | Any | Any |
| Input | `Hide? (Show = FALSE)` | Boolean | true | true |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#show--hide-by-object-type) · [.NET](/api/dotnet/view-control#show--hide-by-object-type) · [Python](/api/python/view-control#show--hide-by-object-type) · [JavaScript and TypeScript](/api/javascript/view-control#show--hide-by-object-type)


## Show / Hide Callout View

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Callout View To Show` | Collection Object Name | See MP definition | Required |
| Input | `Show Callout View?` | Boolean | true | true |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#show--hide-callout-view) · [.NET](/api/dotnet/view-control#show--hide-callout-view) · [Python](/api/python/view-control#show--hide-callout-view) · [JavaScript and TypeScript](/api/javascript/view-control#show--hide-callout-view)


## Show / Hide Dimension

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Dimension Name` | Collection Object Name | See MP definition | Required |
| Input | `Show Dimension?` | Boolean | true | true |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#show--hide-dimension) · [.NET](/api/dotnet/view-control#show--hide-dimension) · [Python](/api/python/view-control#show--hide-dimension) · [JavaScript and TypeScript](/api/javascript/view-control#show--hide-dimension)


## Show / Hide Points

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Point Names` | Point Name Ref List | See MP definition | Required |
| Input | `Show? (Hide = FALSE)` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#show--hide-points) · [.NET](/api/dotnet/view-control#show--hide-points) · [Python](/api/python/view-control#show--hide-points) · [JavaScript and TypeScript](/api/javascript/view-control#show--hide-points)


## Show by Object Type

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Object Type To Show` | Collection Object Name | See MP definition | Required |
| Input | `All Collections?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#show-by-object-type) · [.NET](/api/dotnet/view-control#show-by-object-type) · [Python](/api/python/view-control#show-by-object-type) · [JavaScript and TypeScript](/api/javascript/view-control#show-by-object-type)


## Show Items in Tree

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Collapse all other Items?` | Boolean | true | true |
| Input | `Points` | Point Name Ref List | See MP definition | Required |
| Input | `Objects` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Instruments` | Collection Instrument ID Ref List | See MP definition | Required |
| Input | `Feature Checks` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Datums` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Collections` | String Ref List | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#show-items-in-tree) · [.NET](/api/dotnet/view-control#show-items-in-tree) · [Python](/api/python/view-control#show-items-in-tree) · [JavaScript and TypeScript](/api/javascript/view-control#show-items-in-tree)


## Show Labels

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Point Labels On?` | Boolean | false | false |
| Input | `Objects Labels On?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#show-labels) · [.NET](/api/dotnet/view-control#show-labels) · [Python](/api/python/view-control#show-labels) · [JavaScript and TypeScript](/api/javascript/view-control#show-labels)


## Show Objects

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Objects To Show` | Collection Object Name Ref List | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#show-objects) · [.NET](/api/dotnet/view-control#show-objects) · [Python](/api/python/view-control#show-objects) · [JavaScript and TypeScript](/api/javascript/view-control#show-objects)


## Show/Hide Annotations for Datums

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Datum Name List` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Show?` | Boolean | false | false |
| Input | `Highlight?` | Boolean | false | false |
| Input | `Set Inspection View?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#showhide-annotations-for-datums) · [.NET](/api/dotnet/view-control#showhide-annotations-for-datums) · [Python](/api/python/view-control#showhide-annotations-for-datums) · [JavaScript and TypeScript](/api/javascript/view-control#showhide-annotations-for-datums)


## Show/Hide Annotations for Feature Checks

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Feature Check Name List` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Show?` | Boolean | false | false |
| Input | `Highlight?` | Boolean | false | false |
| Input | `Set Inspection View?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#showhide-annotations-for-feature-checks) · [.NET](/api/dotnet/view-control#showhide-annotations-for-feature-checks) · [Python](/api/python/view-control#showhide-annotations-for-feature-checks) · [JavaScript and TypeScript](/api/javascript/view-control#showhide-annotations-for-feature-checks)


## Show/Hide Dimensions

<span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Not observed</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Dimension Names` | Collection Object Name List | Not established | Not applicable |
| Input | `Show Dimensions?` | Boolean | Not established | Not applicable |

### Briosa Disposition

No complete useful exact-target SDK binding is available.

**Recommended Alternative:** Use an MP/subroutine when SA behavior is required; no direct Briosa operation is planned.



## Show/Hide Inspection Bar

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Show Inspection Bar?` | Boolean | true | true |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#showhide-inspection-bar) · [.NET](/api/dotnet/view-control#showhide-inspection-bar) · [Python](/api/python/view-control#showhide-inspection-bar) · [JavaScript and TypeScript](/api/javascript/view-control#showhide-inspection-bar)


## Show/Hide Instrument Interface

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Instrument's ID` | Collection Instrument ID | See MP definition | Required |
| Input | `Minimize Interface?` | Boolean | false | false |
| Input | `Hide Interface?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#showhide-instrument-interface) · [.NET](/api/dotnet/view-control#showhide-instrument-interface) · [Python](/api/python/view-control#showhide-instrument-interface) · [JavaScript and TypeScript](/api/javascript/view-control#showhide-instrument-interface)


## Show/Hide Instrument Probe Tip

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Show Instrument Probe Tip?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#showhide-instrument-probe-tip) · [.NET](/api/dotnet/view-control#showhide-instrument-probe-tip) · [Python](/api/python/view-control#showhide-instrument-probe-tip) · [JavaScript and TypeScript](/api/javascript/view-control#showhide-instrument-probe-tip)


## Show/Hide Instruments

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Instrument IDs` | Collection Instrument ID Ref List | See MP definition | Required |
| Input | `Show Instruments?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#showhide-instruments) · [.NET](/api/dotnet/view-control#showhide-instruments) · [Python](/api/python/view-control#showhide-instruments) · [JavaScript and TypeScript](/api/javascript/view-control#showhide-instruments)


## Show/Hide Relationship Report

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Collection Name` | Collection Name | Empty | Required |
| Input | `Show Relationship Report` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#showhide-relationship-report) · [.NET](/api/dotnet/view-control#showhide-relationship-report) · [Python](/api/python/view-control#showhide-relationship-report) · [JavaScript and TypeScript](/api/javascript/view-control#showhide-relationship-report)


## Show/Hide Relationship Watch

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>View Control / Hide Show Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Relationship Name` | Collection Object Name | See MP definition | Required |
| Input | `Show Relationship Watch` | Boolean | false | false |
| Input | `Relationship Watch Window Properties` | Collection Object Name | See MP definition | Required |
| Input | `Window Top Left X Position` | Integer | 0 | 0 |
| Input | `Window Top Left Y Position` | Integer | 0 | 0 |
| Input | `Window Width` | Integer | 0 | 0 |
| Input | `Window Height` | Integer | 0 | 0 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/view-control#showhide-relationship-watch) · [.NET](/api/dotnet/view-control#showhide-relationship-watch) · [Python](/api/python/view-control#showhide-relationship-watch) · [JavaScript and TypeScript](/api/javascript/view-control#showhide-relationship-watch)
