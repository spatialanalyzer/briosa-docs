---
title: MP Task Overview Commands
description: Canonical SpatialAnalyzer MP command dispositions for MP Task Overview.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# MP Task Overview Commands

These canonical entries document the reviewed 2026.1.0529.7 command surface once. A
**Next** entry is a documentation-first contract, not a claim that the operation
is callable in the current release.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>11</strong></div>
  <div><span>Current or Next</span><strong>10</strong></div>
  <div><span>Excluded or Unavailable</span><strong>1</strong></div>
</div>

<CatalogFilter scopedGroup="MP Task Overview" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Add Task Overview Item" data-group="MP Task Overview" data-status="next" data-validation="portable-contract-review">
  <td><a href="#add-task-overview-item">Add Task Overview Item</a></td>
  <td>MP Task Overview</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Create/Clear Task Overview List" data-group="MP Task Overview" data-status="next" data-validation="portable-contract-review">
  <td><a href="#createclear-task-overview-list">Create/Clear Task Overview List</a></td>
  <td>MP Task Overview</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Current Task" data-group="MP Task Overview" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-current-task">Set Current Task</a></td>
  <td>MP Task Overview</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Overview Image" data-group="MP Task Overview" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-overview-image">Set Overview Image</a></td>
  <td>MP Task Overview</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Overview Title" data-group="MP Task Overview" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-overview-title">Set Overview Title</a></td>
  <td>MP Task Overview</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Task Item Comment" data-group="MP Task Overview" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-task-item-comment">Set Task Item Comment</a></td>
  <td>MP Task Overview</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Task Item Completion Values" data-group="MP Task Overview" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-task-item-completion-values">Set Task Item Completion Values</a></td>
  <td>MP Task Overview</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Task Item Name" data-group="MP Task Overview" data-status="next" data-validation="portable-contract-review">
  <td><a href="#set-task-item-name">Set Task Item Name</a></td>
  <td>MP Task Overview</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Set Task Item Status" data-group="MP Task Overview" data-status="sdk-unavailable" data-validation="not-applicable">
  <td><a href="#set-task-item-status">Set Task Item Status</a></td>
  <td>MP Task Overview</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Show Progress for Task Item" data-group="MP Task Overview" data-status="next" data-validation="portable-contract-review">
  <td><a href="#show-progress-for-task-item">Show Progress for Task Item</a></td>
  <td>MP Task Overview</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
<tr data-command="Show Task Overview List" data-group="MP Task Overview" data-status="next" data-validation="portable-contract-review">
  <td><a href="#show-task-overview-list">Show Task Overview List</a></td>
  <td>MP Task Overview</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Portable contract review</td>
</tr>
</tbody>
</table>

## Add Task Overview Item

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Task Overview</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Task Name` | String | Empty | Empty |
| Input | `Comment Text` | String | Empty | Empty |
| Input | `Effort Index` | Double | 0.000000 | 0.000000 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/mp-task-overview#add-task-overview-item) · [.NET](/api/dotnet/mp-task-overview#add-task-overview-item) · [Python](/api/python/mp-task-overview#add-task-overview-item) · [JavaScript and TypeScript](/api/javascript/mp-task-overview#add-task-overview-item)


## Create/Clear Task Overview List

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Task Overview</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Task Name Font` | Font | MS Shell Dlg | MS Shell Dlg |
| Input | `Task Comment Font` | Font | MS Shell Dlg | MS Shell Dlg |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/mp-task-overview#createclear-task-overview-list) · [.NET](/api/dotnet/mp-task-overview#createclear-task-overview-list) · [Python](/api/python/mp-task-overview#createclear-task-overview-list) · [JavaScript and TypeScript](/api/javascript/mp-task-overview#createclear-task-overview-list)


## Set Current Task

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Task Overview</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Task Index` | Integer | 0 | 0 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/mp-task-overview#set-current-task) · [.NET](/api/dotnet/mp-task-overview#set-current-task) · [Python](/api/python/mp-task-overview#set-current-task) · [JavaScript and TypeScript](/api/javascript/mp-task-overview#set-current-task)


## Set Overview Image

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Task Overview</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Image Path` | File Path or Embedded File | Empty | Required |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/mp-task-overview#set-overview-image) · [.NET](/api/dotnet/mp-task-overview#set-overview-image) · [Python](/api/python/mp-task-overview#set-overview-image) · [JavaScript and TypeScript](/api/javascript/mp-task-overview#set-overview-image)


## Set Overview Title

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Task Overview</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Overview Title` | String | Empty | Empty |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/mp-task-overview#set-overview-title) · [.NET](/api/dotnet/mp-task-overview#set-overview-title) · [Python](/api/python/mp-task-overview#set-overview-title) · [JavaScript and TypeScript](/api/javascript/mp-task-overview#set-overview-title)


## Set Task Item Comment

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Task Overview</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Task Index` | Integer | 0 | 0 |
| Input | `Task Comment` | String | Empty | Empty |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/mp-task-overview#set-task-item-comment) · [.NET](/api/dotnet/mp-task-overview#set-task-item-comment) · [Python](/api/python/mp-task-overview#set-task-item-comment) · [JavaScript and TypeScript](/api/javascript/mp-task-overview#set-task-item-comment)


## Set Task Item Completion Values

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Task Overview</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Task Index` | Integer | 0 | 0 |
| Input | `Increments Completed` | Integer | 0 | 0 |
| Input | `Total Increments` | Integer | 0 | 0 |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/mp-task-overview#set-task-item-completion-values) · [.NET](/api/dotnet/mp-task-overview#set-task-item-completion-values) · [Python](/api/python/mp-task-overview#set-task-item-completion-values) · [JavaScript and TypeScript](/api/javascript/mp-task-overview#set-task-item-completion-values)


## Set Task Item Name

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Task Overview</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Task Item Index` | Integer | 0 | 0 |
| Input | `Task Name` | String | Empty | Empty |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/mp-task-overview#set-task-item-name) · [.NET](/api/dotnet/mp-task-overview#set-task-item-name) · [Python](/api/python/mp-task-overview#set-task-item-name) · [JavaScript and TypeScript](/api/javascript/mp-task-overview#set-task-item-name)


## Set Task Item Status

<span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Task Overview</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Task Index` | Integer | 0 | Not applicable |
| Input | `Status` | SDK-unavailable MP argument | Unavailable | Not applicable |

### Briosa Disposition

The exact SDK cannot supply `Status`, so Briosa cannot expose the complete useful operation.

**Recommended Alternative:** Use an MP/subroutine when SA behavior is required; no direct Briosa operation is planned.



## Show Progress for Task Item

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Task Overview</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Task Index` | Integer | 0 | 0 |
| Input | `Show Progress?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/mp-task-overview#show-progress-for-task-item) · [.NET](/api/dotnet/mp-task-overview#show-progress-for-task-item) · [Python](/api/python/mp-task-overview#show-progress-for-task-item) · [JavaScript and TypeScript](/api/javascript/mp-task-overview#show-progress-for-task-item)


## Show Task Overview List

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Task Overview</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Show?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/mp-task-overview#show-task-overview-list) · [.NET](/api/dotnet/mp-task-overview#show-task-overview-list) · [Python](/api/python/mp-task-overview#show-task-overview-list) · [JavaScript and TypeScript](/api/javascript/mp-task-overview#show-task-overview-list)
