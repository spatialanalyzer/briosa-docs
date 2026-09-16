---
title: Event Operations Commands
description: Canonical SpatialAnalyzer MP command dispositions for Event Operations.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Event Operations Commands

These canonical entries document the reviewed 2026.1.0529.7 command surface once. Current entries are included in Briosa Server 0.5.1; runtime policy and readiness still apply.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>6</strong></div>
  <div><span>Current Server Operations</span><strong>5</strong></div>
  <div><span>Excluded or Unavailable</span><strong>1</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="Event Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Delete Event" data-group="Event Operations" data-status="current" data-validation="portable-contract-review">
  <td><a href="#delete-event">Delete Event</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Delete Event" data-group="Analysis Operations / Events" data-status="next" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#delete-event">Delete Event</a></td>
  <td>Analysis Operations / Events</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Export Event Ref List" data-group="Event Operations" data-status="current" data-validation="portable-contract-review">
  <td><a href="#export-event-ref-list">Export Event Ref List</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Export Event Ref List" data-group="Analysis Operations / Events" data-status="next" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#export-event-ref-list">Export Event Ref List</a></td>
  <td>Analysis Operations / Events</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get i-th Event From Event Ref List" data-group="Event Operations" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-i-th-event-from-event-ref-list">Get i-th Event From Event Ref List</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get i-th Event From Event Ref List" data-group="Analysis Operations / Events" data-status="next" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-i-th-event-from-event-ref-list">Get i-th Event From Event Ref List</a></td>
  <td>Analysis Operations / Events</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get i-th Event From Event Ref List (Iterator)" data-group="Event Operations" data-status="sdk-unavailable" data-validation="not-applicable">
  <td><a href="#get-i-th-event-from-event-ref-list-iterator">Get i-th Event From Event Ref List (Iterator)</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Get i-th Event From Event Ref List (Iterator)" data-group="Analysis Operations / Events" data-status="sdk-unavailable" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-i-th-event-from-event-ref-list-iterator">Get i-th Event From Event Ref List (Iterator)</a></td>
  <td>Analysis Operations / Events</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Number of Events in Event Ref List" data-group="Event Operations" data-status="current" data-validation="portable-contract-review">
  <td><a href="#get-number-of-events-in-event-ref-list">Get Number of Events in Event Ref List</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get Number of Events in Event Ref List" data-group="Analysis Operations / Events" data-status="next" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-number-of-events-in-event-ref-list">Get Number of Events in Event Ref List</a></td>
  <td>Analysis Operations / Events</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Rename Event" data-group="Event Operations" data-status="current" data-validation="portable-contract-review">
  <td><a href="#rename-event">Rename Event</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Rename Event" data-group="Analysis Operations / Events" data-status="next" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#rename-event">Rename Event</a></td>
  <td>Analysis Operations / Events</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Delete Event

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Event Operations" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Event Operations</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / Events" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / Events</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Event Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Event Name` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/event-operations#delete-event) · [.NET](/api/dotnet/event-operations#delete-event) · [Python](/api/python/event-operations#delete-event) · [JavaScript and TypeScript](/api/javascript/event-operations#delete-event)


## Export Event Ref List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Event Operations" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Event Operations</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / Events" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / Events</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Event Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Event List` | Collection Object Name Ref List | See MP definition | Required |
| Input | `File Path` | File Path or Embedded File | Empty | Required |
| Input | `Decimal Precision` | Integer | 6 | 6 |
| Input | `Overwrite existing file?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/event-operations#export-event-ref-list) · [.NET](/api/dotnet/event-operations#export-event-ref-list) · [Python](/api/python/event-operations#export-event-ref-list) · [JavaScript and TypeScript](/api/javascript/event-operations#export-event-ref-list)


## Get i-th Event From Event Ref List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Event Operations" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Event Operations</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / Events" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / Events</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Event Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Event List` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Event Index` | Integer | 0 | 0 |
| Output | `Resultant Item` | Collection Object Name | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/event-operations#get-i-th-event-from-event-ref-list) · [.NET](/api/dotnet/event-operations#get-i-th-event-from-event-ref-list) · [Python](/api/python/event-operations#get-i-th-event-from-event-ref-list) · [JavaScript and TypeScript](/api/javascript/event-operations#get-i-th-event-from-event-ref-list)


## Get i-th Event From Event Ref List (Iterator)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="sdk-unavailable" data-group="Event Operations" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>
  <span className="catalog-target-group">Event Operations</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="sdk-unavailable" data-group="Analysis Operations / Events" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>
  <span className="catalog-target-group">Analysis Operations / Events</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

No complete reviewed useful SDK mapping is available for this 2024 command.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Event Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Reference List` | Collection Object Name Ref List | See MP definition | Not applicable |
| Input | `Event Index` | Integer | 0 | Not applicable |
| Input | `Step to Jump at End of List` | SDK-unavailable MP argument | Unavailable | Not applicable |
| Output | `Collection` | String | — | — |
| Output | `Event` | String | — | — |
| Output | `Resultant Item` | Collection Object Name | — | — |
| Output | `Date` | String | — | — |
| Output | `Time` | String | — | — |

### Briosa Disposition

The exact SDK cannot supply `Step to Jump at End of List`, so Briosa cannot expose the complete useful operation.

**Recommended Alternative:** Use an MP/subroutine when SA behavior is required; no direct Briosa operation is planned.



## Get Number of Events in Event Ref List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Event Operations" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Event Operations</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / Events" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / Events</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Event Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Event List` | Collection Object Name Ref List | See MP definition | Required |
| Output | `Total Count` | Integer | — | — |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/event-operations#get-number-of-events-in-event-ref-list) · [.NET](/api/dotnet/event-operations#get-number-of-events-in-event-ref-list) · [Python](/api/python/event-operations#get-number-of-events-in-event-ref-list) · [JavaScript and TypeScript](/api/javascript/event-operations#get-number-of-events-in-event-ref-list)


## Rename Event

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="Event Operations" data-validation="portable-contract-review">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">Event Operations</span>
  <span className="catalog-target-validation">Portable contract review</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / Events" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / Events</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Event Operations</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Original Event Name` | Collection Object Name | See MP definition | Required |
| Input | `New Event Name` | Collection Object Name | See MP definition | Required |
| Input | `Overwrite if exists?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/event-operations#rename-event) · [.NET](/api/dotnet/event-operations#rename-event) · [Python](/api/python/event-operations#rename-event) · [JavaScript and TypeScript](/api/javascript/event-operations#rename-event)
