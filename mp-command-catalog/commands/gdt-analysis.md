---
title: GDT Operations / GDT Analysis Commands
description: Canonical MP command dispositions for the GDT Operations / GDT Analysis subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# GDT Operations / GDT Analysis Commands

These entries cover the 32 commands observed under **GDT Operations → GDT
Analysis** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>32</strong></div>
  <div><span>Current Server Operations</span><strong>24</strong></div>
  <div><span>Excluded or Unavailable</span><strong>8</strong></div>
</div>

<CatalogFilter scopedGroup="GDT Operations / GDT Analysis" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Get Number of Feature Checks in Feature Check Ref List" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-number-of-feature-checks-in-feature-check-ref-list">Get Number of Feature Checks in Feature Check Ref List</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get Feature Check Datum References" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#get-feature-check-datum-references">Get Feature Check Datum References</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Get i-th Feature Check From Feature Check Ref List" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-feature-check-from-feature-check-ref-list">Get i-th Feature Check From Feature Check Ref List</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get i-th Feature Check From Feature Check Ref List (Iterator)" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-feature-check-from-feature-check-ref-list-iterator">Get i-th Feature Check From Feature Check Ref List (Iterator)</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get Number of Datums in Datum Ref List" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-number-of-datums-in-datum-ref-list">Get Number of Datums in Datum Ref List</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get i-th Datum From Datum Ref List" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-datum-from-datum-ref-list">Get i-th Datum From Datum Ref List</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get i-th Datum From Datum Ref List (Iterator)" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-datum-from-datum-ref-list-iterator">Get i-th Datum From Datum Ref List (Iterator)</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get i-th Annotation From Annotation Ref List" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-annotation-from-annotation-ref-list">Get i-th Annotation From Annotation Ref List</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get i-th Annotation From Annotation Ref List (Iterator)" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-annotation-from-annotation-ref-list-iterator">Get i-th Annotation From Annotation Ref List (Iterator)</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get Datum Measurements" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#get-datum-measurements">Get Datum Measurements</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Set Datum Measurements" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#set-datum-measurements">Set Datum Measurements</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Get Feature Check Measurements" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#get-feature-check-measurements">Get Feature Check Measurements</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Set Feature Check Measurements" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#set-feature-check-measurements">Set Feature Check Measurements</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Get Feature Check Cylinder Eval Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-cylinder-feature-check-fixture"><td><a href="#get-feature-check-cylinder-eval-options">Get Feature Check Cylinder Eval Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - cylinder feature-check fixture</td></tr>
<tr data-command="Set Feature Check Cylinder Eval Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-cylinder-feature-check-fixture"><td><a href="#set-feature-check-cylinder-eval-options">Set Feature Check Cylinder Eval Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - cylinder feature-check fixture</td></tr>
<tr data-command="Feature Inspection Auto Filter" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#feature-inspection-auto-filter">Feature Inspection Auto Filter</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Set Global Force Simultaneous Evaluation" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-licensed-validation"><td><a href="#set-global-force-simultaneous-evaluation">Set Global Force Simultaneous Evaluation</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - licensed validation</td></tr>
<tr data-command="Evaluate Feature Check" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#evaluate-feature-check">Evaluate Feature Check</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Evaluate Feature Checks" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#evaluate-feature-checks">Evaluate Feature Checks</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Generate Feature Check Summary" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#generate-feature-check-summary">Generate Feature Check Summary</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Start/Stop Feature Check Trapping" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-instrument-gdt-fixture"><td><a href="#startstop-feature-check-trapping">Start/Stop Feature Check Trapping</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - instrument and GD&amp;T fixture</td></tr>
<tr data-command="Enable/Disable Datum Alignment for Feature Check" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#enabledisable-datum-alignment-for-feature-check">Enable/Disable Datum Alignment for Feature Check</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Datum Alignment" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#datum-alignment">Datum Alignment</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Get GD&amp;T Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="licensed-read-probe"><td><a href="#get-gdt-options">Get GD&amp;T Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>Licensed read probe</td></tr>
<tr data-command="Set GD&amp;T Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-licensed-validation"><td><a href="#set-gdt-options">Set GD&amp;T Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - licensed validation</td></tr>
<tr data-command="Set GD&amp;T Extended Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-licensed-validation"><td><a href="#set-gdt-extended-options">Set GD&amp;T Extended Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - licensed validation</td></tr>
<tr data-command="Get GD&amp;T Extended Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-licensed-validation"><td><a href="#get-gdt-extended-options">Get GD&amp;T Extended Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - licensed validation</td></tr>
<tr data-command="Refresh Datums/Feature Checks from Annotations" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#refresh-datumsfeature-checks-from-annotations">Refresh Datums/Feature Checks from Annotations</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Set Feature Check Reporting Frame" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#set-feature-check-reporting-frame">Set Feature Check Reporting Frame</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Get Feature Check Reporting Frame" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#get-feature-check-reporting-frame">Get Feature Check Reporting Frame</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Set Feature Check Reporting Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-partial-sdk-contract"><td><a href="#set-feature-check-reporting-options">Set Feature Check Reporting Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - partial SDK contract</td></tr>
<tr data-command="Get Feature Check Reporting Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-partial-sdk-contract"><td><a href="#get-feature-check-reporting-options">Get Feature Check Reporting Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - partial SDK contract</td></tr>
</tbody>
</table>

## Portable List and Iterator Commands

First-party clients return ordinary detached lists, so callers can count and
index them locally. The iterator variants additionally depend on MP-only
`Step to Jump at End of List` control flow, which has no meaning in a Briosa
call.

### Get Number of Feature Checks in Feature Check Ref List

<span className="catalog-status catalog-status--excluded">Excluded</span>

Count the Feature Checks in the returned client list.

### Get i-th Feature Check From Feature Check Ref List

<span className="catalog-status catalog-status--excluded">Excluded</span>

Index the returned Feature Check list in the client language.

### Get i-th Feature Check From Feature Check Ref List (Iterator)

<span className="catalog-status catalog-status--excluded">Excluded</span>

Index the returned list directly. Briosa does not reproduce MP step-jump
control flow.

### Get Number of Datums in Datum Ref List

<span className="catalog-status catalog-status--excluded">Excluded</span>

Count the Datums in the returned client list.

### Get i-th Datum From Datum Ref List

<span className="catalog-status catalog-status--excluded">Excluded</span>

Index the returned Datum list in the client language.

### Get i-th Datum From Datum Ref List (Iterator)

<span className="catalog-status catalog-status--excluded">Excluded</span>

Index the returned list directly. Briosa does not reproduce MP step-jump
control flow.

### Get i-th Annotation From Annotation Ref List

<span className="catalog-status catalog-status--excluded">Excluded</span>

Index the returned Annotation list in the client language.

### Get i-th Annotation From Annotation Ref List (Iterator)

<span className="catalog-status catalog-status--excluded">Excluded</span>

Index the returned list directly. Briosa does not reproduce MP step-jump
control flow.

## Feature Check and Datum Data

### Get Feature Check Datum References

<span className="catalog-status catalog-status--current">Current</span>

`Get Feature Check Datum References` returns the three datum-reference slots,
including reference text, CAD-face text, SA objects, auxiliary objects, and
geometry relationships.

### Get Datum Measurements

<span className="catalog-status catalog-status--current">Current</span>

Returns the Point Names and Cloud Names assigned to a Datum.

### Set Datum Measurements

<span className="catalog-status catalog-status--current">Current</span>

Assigns Point Names and Cloud Names to a Datum. `Replace Existing
Measurements?` defaults to `false`.

### Get Feature Check Measurements

<span className="catalog-status catalog-status--current">Current</span>

Returns the Point Names and Cloud Names assigned to a Feature Check.

### Set Feature Check Measurements

<span className="catalog-status catalog-status--current">Current</span>

Assigns Point Names and Cloud Names to a Feature Check. `Replace Existing
Measurements?` defaults to `false`.

### Get Feature Check Cylinder Eval Options

<span className="catalog-status catalog-status--current">Current</span>

Returns whether actual-diameter override is enabled and its current value.

### Set Feature Check Cylinder Eval Options

<span className="catalog-status catalog-status--current">Current</span>

Sets actual-diameter override behavior. The enable flag defaults to `false` and
the override value defaults to `0.0`.

## Filtering and Evaluation

### Feature Inspection Auto Filter

<span className="catalog-status catalog-status--current">Current</span>

`Feature Inspection Auto Filter` preserves the MP defaults: surface and edge
offsets `0.1`, both offset directions, cylinder-axis proximity disabled,
maximum-points enforcement disabled, maximum points `0`, include datums
enabled, and per-check cloud creation disabled.

### Set Global Force Simultaneous Evaluation

<span className="catalog-status catalog-status--current">Current</span>

Enables or disables SpatialAnalyzer's global force-simultaneous-evaluation
setting.

### Evaluate Feature Check

<span className="catalog-status catalog-status--current">Current</span>

Evaluates one Feature Check and returns the complete result supplied by the MP
command.

### Evaluate Feature Checks

<span className="catalog-status catalog-status--current">Current</span>

Evaluates a supplied Feature Check reference list.

### Generate Feature Check Summary

<span className="catalog-status catalog-status--current">Current</span>

Generates the SpatialAnalyzer Feature Check summary for the supplied checks.

### Start/Stop Feature Check Trapping

<span className="catalog-status catalog-status--current">Current</span>

Starts or stops Feature Check trapping for a selected instrument.

### Enable/Disable Datum Alignment for Feature Check

<span className="catalog-status catalog-status--current">Current</span>

Changes Datum Alignment behavior for the selected Feature Check.

### Datum Alignment

<span className="catalog-status catalog-status--current">Current</span>

Runs Datum Alignment with the supplied alignment and Feature Check inputs.

These commands operate on live job and instrument state. Briosa does not retain
a parallel model of that state or add workflow guards.

## GD&T Options

### Get GD&T Options

<span className="catalog-status catalog-status--current">Current</span>

Returns all nine current-job GD&T options. A licensed read probe confirmed
that SA 2026.1 returns the two values omitted from the MP Editor export as
`Distance Between Mode` and `Evaluation Method`, alongside the seven exported
Boolean and numeric outputs. The similarly worded installed documentation
label `Check Pre-Eval Validator Type` was not accepted by the SDK.

### Set GD&T Options

<span className="catalog-status catalog-status--current">Current</span>

Sets the same nine current-job GD&T options exposed by the getter.

### Set GD&T Extended Options

<span className="catalog-status catalog-status--current">Current</span>

Sets the extended-options enable flag and the per-geometry evaluation methods.

### Get GD&T Extended Options

<span className="catalog-status catalog-status--current">Current</span>

Returns only `Use Extended Options`, matching this exact SDK command. It does
not claim to return the nine selected geometry methods.

## Reporting and Annotation Refresh

### Refresh Datums/Feature Checks from Annotations

<span className="catalog-status catalog-status--current">Current</span>

Refreshes a collection's Datums and Feature Checks from Annotations.

### Set Feature Check Reporting Frame

<span className="catalog-status catalog-status--current">Current</span>

Sets the reporting Frame for a Feature Check.

### Get Feature Check Reporting Frame

<span className="catalog-status catalog-status--current">Current</span>

Returns the reporting Frame for a Feature Check.

### Set Feature Check Reporting Options

<span className="catalog-status catalog-status--current">Current</span>

Sets the seven Boolean reporting options the exact SDK can bind. The SDK cannot
bind `Vector Creation`, so Briosa omits that field and leaves the existing
vector-creation setting unchanged.

### Get Feature Check Reporting Options

<span className="catalog-status catalog-status--current">Current</span>

Returns the same seven Boolean reporting options without claiming to return
the unavailable `Vector Creation` value.

All mutation, evaluation, and interactive operations prohibit automatic replay
after an unknown execution outcome.

**API References:** [gRPC](/api/grpc/gdt-analysis) · [.NET](/api/dotnet/gdt-analysis) · [Python](/api/python/gdt-analysis) · [JavaScript and TypeScript](/api/javascript/gdt-analysis)
