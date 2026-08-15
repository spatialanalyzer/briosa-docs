---
title: Event Operations Commands
description: Canonical SpatialAnalyzer MP command dispositions for Event Operations.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Event Operations Commands

These canonical entries document the reviewed 2026.1.0529.7 command surface once. A
**Next** entry is a documentation-first contract, not a claim that the operation
is callable in the current release.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>6</strong></div>
  <div><span>Current or Next</span><strong>5</strong></div>
  <div><span>Excluded or Unavailable</span><strong>1</strong></div>
</div>

<CatalogFilter scopedGroup="Event Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Delete Event" data-group="Event Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#delete-event">Delete Event</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Export Event Ref List" data-group="Event Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#export-event-ref-list">Export Event Ref List</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get i-th Event From Event Ref List" data-group="Event Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#get-i-th-event-from-event-ref-list">Get i-th Event From Event Ref List</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Get i-th Event From Event Ref List (Iterator)" data-group="Event Operations" data-status="sdk-unavailable" data-validation="not-applicable">
  <td><a href="#get-i-th-event-from-event-ref-list-iterator">Get i-th Event From Event Ref List (Iterator)</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Get Number of Events in Event Ref List" data-group="Event Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#get-number-of-events-in-event-ref-list">Get Number of Events in Event Ref List</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Rename Event" data-group="Event Operations" data-status="next" data-validation="portable-contract-review">
  <td><a href="#rename-event">Rename Event</a></td>
  <td>Event Operations</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
</tbody>
</table>

## Delete Event

<span className="catalog-status catalog-status--next">Next</span>

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

<span className="catalog-status catalog-status--next">Next</span>

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

<span className="catalog-status catalog-status--next">Next</span>

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

<span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>

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

<span className="catalog-status catalog-status--next">Next</span>

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

<span className="catalog-status catalog-status--next">Next</span>

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
