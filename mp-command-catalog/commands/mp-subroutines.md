---
title: MP Subroutines Commands
description: Canonical SpatialAnalyzer MP command dispositions for MP Subroutines.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# MP Subroutines Commands

These canonical entries document the reviewed 2026.1.0529.7 command surface once. Current entries are included in Briosa Server 0.7.0; runtime policy and readiness still apply.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>4</strong></div>
  <div><span>Current Server Operations</span><strong>1</strong></div>
  <div><span>Excluded or Unavailable</span><strong>3</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="MP Subroutines" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Define Subroutine Input Values" data-group="MP Subroutines" data-status="excluded" data-validation="not-applicable">
  <td><a href="#define-subroutine-input-values">Define Subroutine Input Values</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Define Subroutine Input Values" data-group="MP Subroutines" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#define-subroutine-input-values">Define Subroutine Input Values</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Define Subroutine Return Values" data-group="MP Subroutines" data-status="excluded" data-validation="not-applicable">
  <td><a href="#define-subroutine-return-values">Define Subroutine Return Values</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Define Subroutine Return Values" data-group="MP Subroutines" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#define-subroutine-return-values">Define Subroutine Return Values</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Return from Subroutine Now" data-group="MP Subroutines" data-status="excluded" data-validation="not-applicable">
  <td><a href="#return-from-subroutine-now">Return from Subroutine Now</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Return from Subroutine Now" data-group="MP Subroutines" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#return-from-subroutine-now">Return from Subroutine Now</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Run Subroutine" data-group="MP Subroutines" data-status="current" data-validation="at-risk-fixture-or-interactive-validation-required">
  <td><a href="#run-subroutine">Run Subroutine</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — fixture or interactive validation required</td>
</tr>
<tr data-command="Run Subroutine" data-group="MP Subroutines" data-status="current" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#run-subroutine">Run Subroutine</a></td>
  <td>MP Subroutines</td>
  <td><span className="catalog-status catalog-status--current">Current</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Define Subroutine Input Values

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="MP Subroutines" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">MP Subroutines</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="MP Subroutines" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">MP Subroutines</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

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

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="MP Subroutines" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">MP Subroutines</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="MP Subroutines" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">MP Subroutines</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

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

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="MP Subroutines" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">MP Subroutines</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="MP Subroutines" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">MP Subroutines</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

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

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="MP Subroutines" data-validation="at-risk-fixture-or-interactive-validation-required">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">MP Subroutines</span>
  <span className="catalog-target-validation">At risk fixture or interactive validation required</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="current" data-group="MP Subroutines" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">MP Subroutines</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<p>SA 2024 Released References: [gRPC](/api/grpc/sa-2024.1.0508.5/mp-subroutines#run-subroutine) · [.NET](/api/dotnet/sa-2024.1.0508.5/mp-subroutines#run-subroutine) · [Python](/api/python/sa-2024.1.0508.5/mp-subroutines#run-subroutine) · [JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5/mp-subroutines#run-subroutine)</p>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Released in Briosa Server 0.7.0 for SA 2024.1.0508.5. Runtime validation remains separately qualified below.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

The reference signature below applies with these 2024 adjustments. Briosa defaults and API links remain specific to 2026.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

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
