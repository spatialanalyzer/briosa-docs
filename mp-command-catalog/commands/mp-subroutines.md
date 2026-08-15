---
title: MP Subroutines Commands
description: Canonical SpatialAnalyzer MP command dispositions for MP Subroutines.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# MP Subroutines Commands

These canonical entries document the reviewed 2026.1.0529.7 command surface once. A
**Next** entry is a documentation-first contract, not a claim that the operation
is callable in the current release.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>4</strong></div>
  <div><span>Current or Next</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>3</strong></div>
</div>

<CatalogFilter scopedGroup="MP Subroutines" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Define Subroutine Input Values" data-group="MP Subroutines" data-status="excluded" data-validation="not-applicable">
  <td><a href="#define-subroutine-input-values">Define Subroutine Input Values</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Define Subroutine Return Values" data-group="MP Subroutines" data-status="excluded" data-validation="not-applicable">
  <td><a href="#define-subroutine-return-values">Define Subroutine Return Values</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Return from Subroutine Now" data-group="MP Subroutines" data-status="excluded" data-validation="not-applicable">
  <td><a href="#return-from-subroutine-now">Return from Subroutine Now</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Run Subroutine" data-group="MP Subroutines" data-status="next" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#run-subroutine">Run Subroutine</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
</tbody>
</table>

## Define Subroutine Input Values

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Subroutines</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| — | None | — | — | — |

### Briosa Disposition

A reviewed product decision favors a client-side operation, typed value, lifecycle API, or MP/subroutine workflow instead.

**Recommended Alternative:** Keep this structural step inside the MP subroutine.



## Define Subroutine Return Values

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Subroutines</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `MP Subroutine Return Step Result` | Result | See MP definition | Not applicable |

### Briosa Disposition

A reviewed product decision favors a client-side operation, typed value, lifecycle API, or MP/subroutine workflow instead.

**Recommended Alternative:** Keep this structural step inside the MP subroutine.



## Return from Subroutine Now

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Subroutines</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `MP Subroutine Return Step Result` | Result | See MP definition | Not applicable |

### Briosa Disposition

A reviewed product decision favors a client-side operation, typed value, lifecycle API, or MP/subroutine workflow instead.

**Recommended Alternative:** Keep this structural step inside the MP subroutine.



## Run Subroutine

<span className="catalog-status catalog-status--next">Next</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>MP Subroutines</strong></div>
  <div><span>Validation</span><strong>At Risk — fixture or interactive validation required</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `MP Subroutine File Path` | File Path or Embedded File | Empty | Required |
| Input | `Share Parent Variables?` | Boolean | false | false |

### Briosa Disposition

Selected because it exposes SpatialAnalyzer-owned state or behavior through a reviewed SDK-observed command.


**API References:** [gRPC](/api/grpc/mp-subroutines#run-subroutine) · [.NET](/api/dotnet/mp-subroutines#run-subroutine) · [Python](/api/python/mp-subroutines#run-subroutine) · [JavaScript and TypeScript](/api/javascript/mp-subroutines#run-subroutine)
