---
title: GDT Operations / GDT Analysis Commands
description: Canonical MP command dispositions for the GDT Operations / GDT Analysis subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# GDT Operations / GDT Analysis Commands

These entries cover the 32 commands observed under **GDT Operations → GDT
Analysis** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>32</strong></div>
  <div><span>Current Server Operations</span><strong>24</strong></div>
  <div><span>Excluded or Unavailable</span><strong>8</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="GDT Operations / GDT Analysis" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Get Number of Feature Checks in Feature Check Ref List" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-number-of-feature-checks-in-feature-check-ref-list">Get Number of Feature Checks in Feature Check Ref List</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get Number of Feature Checks in Feature Check Ref List" data-group="Analysis Operations / GDT Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-number-of-feature-checks-in-feature-check-ref-list">Get Number of Feature Checks in Feature Check Ref List</a></td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Feature Check Datum References" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#get-feature-check-datum-references">Get Feature Check Datum References</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Get Feature Check Datum References" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-feature-check-datum-references">Get Feature Check Datum References</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get i-th Feature Check From Feature Check Ref List" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-feature-check-from-feature-check-ref-list">Get i-th Feature Check From Feature Check Ref List</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get i-th Feature Check From Feature Check Ref List" data-group="Analysis Operations / GDT Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-i-th-feature-check-from-feature-check-ref-list">Get i-th Feature Check From Feature Check Ref List</a></td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get i-th Feature Check From Feature Check Ref List (Iterator)" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-feature-check-from-feature-check-ref-list-iterator">Get i-th Feature Check From Feature Check Ref List (Iterator)</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get i-th Feature Check From Feature Check Ref List (Iterator)" data-group="Analysis Operations / GDT Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-i-th-feature-check-from-feature-check-ref-list-iterator">Get i-th Feature Check From Feature Check Ref List (Iterator)</a></td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Number of Datums in Datum Ref List" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-number-of-datums-in-datum-ref-list">Get Number of Datums in Datum Ref List</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get Number of Datums in Datum Ref List" data-group="Analysis Operations / GDT Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-number-of-datums-in-datum-ref-list">Get Number of Datums in Datum Ref List</a></td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get i-th Datum From Datum Ref List" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-datum-from-datum-ref-list">Get i-th Datum From Datum Ref List</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get i-th Datum From Datum Ref List" data-group="Analysis Operations / GDT Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-i-th-datum-from-datum-ref-list">Get i-th Datum From Datum Ref List</a></td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get i-th Datum From Datum Ref List (Iterator)" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-datum-from-datum-ref-list-iterator">Get i-th Datum From Datum Ref List (Iterator)</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get i-th Datum From Datum Ref List (Iterator)" data-group="Analysis Operations / GDT Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-i-th-datum-from-datum-ref-list-iterator">Get i-th Datum From Datum Ref List (Iterator)</a></td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get i-th Annotation From Annotation Ref List" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-annotation-from-annotation-ref-list">Get i-th Annotation From Annotation Ref List</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get i-th Annotation From Annotation Ref List" data-group="Analysis Operations / GDT Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-i-th-annotation-from-annotation-ref-list">Get i-th Annotation From Annotation Ref List</a></td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get i-th Annotation From Annotation Ref List (Iterator)" data-group="GDT Operations / GDT Analysis" data-status="excluded" data-validation="not-applicable"><td><a href="#get-i-th-annotation-from-annotation-ref-list-iterator">Get i-th Annotation From Annotation Ref List (Iterator)</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Get i-th Annotation From Annotation Ref List (Iterator)" data-group="Analysis Operations / GDT Operations" data-status="excluded" data-validation="evidence-review" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-i-th-annotation-from-annotation-ref-list-iterator">Get i-th Annotation From Annotation Ref List (Iterator)</a></td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Evidence review</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Datum Measurements" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#get-datum-measurements">Get Datum Measurements</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Get Datum Measurements" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-datum-measurements">Get Datum Measurements</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Datum Measurements" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#set-datum-measurements">Set Datum Measurements</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Set Datum Measurements" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-datum-measurements">Set Datum Measurements</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Feature Check Measurements" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#get-feature-check-measurements">Get Feature Check Measurements</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Get Feature Check Measurements" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-feature-check-measurements">Get Feature Check Measurements</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Feature Check Measurements" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#set-feature-check-measurements">Set Feature Check Measurements</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Set Feature Check Measurements" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-feature-check-measurements">Set Feature Check Measurements</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Feature Check Cylinder Eval Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-cylinder-feature-check-fixture"><td><a href="#get-feature-check-cylinder-eval-options">Get Feature Check Cylinder Eval Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - cylinder feature-check fixture</td></tr>
<tr data-command="Get Feature Check Cylinder Eval Options" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-feature-check-cylinder-eval-options">Get Feature Check Cylinder Eval Options</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Feature Check Cylinder Eval Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-cylinder-feature-check-fixture"><td><a href="#set-feature-check-cylinder-eval-options">Set Feature Check Cylinder Eval Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - cylinder feature-check fixture</td></tr>
<tr data-command="Set Feature Check Cylinder Eval Options" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-feature-check-cylinder-eval-options">Set Feature Check Cylinder Eval Options</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Feature Inspection Auto Filter" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#feature-inspection-auto-filter">Feature Inspection Auto Filter</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Feature Inspection Auto Filter" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#feature-inspection-auto-filter">Feature Inspection Auto Filter</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Global Force Simultaneous Evaluation" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-licensed-validation"><td><a href="#set-global-force-simultaneous-evaluation">Set Global Force Simultaneous Evaluation</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - licensed validation</td></tr>
<tr data-command="Set Global Force Simultaneous Evaluation" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-global-force-simultaneous-evaluation">Set Global Force Simultaneous Evaluation</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Evaluate Feature Check" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#evaluate-feature-check">Evaluate Feature Check</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Evaluate Feature Check" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#evaluate-feature-check">Evaluate Feature Check</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Evaluate Feature Checks" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#evaluate-feature-checks">Evaluate Feature Checks</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Evaluate Feature Checks" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#evaluate-feature-checks">Evaluate Feature Checks</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Generate Feature Check Summary" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#generate-feature-check-summary">Generate Feature Check Summary</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Generate Feature Check Summary" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#generate-feature-check-summary">Generate Feature Check Summary</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Start/Stop Feature Check Trapping" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-instrument-gdt-fixture"><td><a href="#startstop-feature-check-trapping">Start/Stop Feature Check Trapping</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - instrument and GD&amp;T fixture</td></tr>
<tr data-command="Start/Stop Feature Check Trapping" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#startstop-feature-check-trapping">Start/Stop Feature Check Trapping</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Enable/Disable Datum Alignment for Feature Check" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#enabledisable-datum-alignment-for-feature-check">Enable/Disable Datum Alignment for Feature Check</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Enable/Disable Datum Alignment for Feature Check" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#enabledisable-datum-alignment-for-feature-check">Enable/Disable Datum Alignment for Feature Check</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Datum Alignment" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#datum-alignment">Datum Alignment</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Datum Alignment" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#datum-alignment">Datum Alignment</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get GD&amp;T Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="licensed-read-probe"><td><a href="#get-gdt-options">Get GD&amp;T Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>Licensed read probe</td></tr>
<tr data-command="Get GD&amp;T Options" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="evidence-review-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-gdt-options">Get GD&amp;T Options</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>Evidence review — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set GD&amp;T Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-licensed-validation"><td><a href="#set-gdt-options">Set GD&amp;T Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - licensed validation</td></tr>
<tr data-command="Set GD&amp;T Options" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-gdt-options">Set GD&amp;T Options</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set GD&amp;T Extended Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-licensed-validation"><td><a href="#set-gdt-extended-options">Set GD&amp;T Extended Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - licensed validation</td></tr>
<tr data-target="2026.1.0529.7" data-command="Get GD&amp;T Extended Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-licensed-validation"><td><a href="#get-gdt-extended-options">Get GD&amp;T Extended Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - licensed validation</td></tr>
<tr data-target="2026.1.0529.7" data-command="Refresh Datums/Feature Checks from Annotations" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#refresh-datumsfeature-checks-from-annotations">Refresh Datums/Feature Checks from Annotations</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Refresh Datums/Feature Checks from Annotations" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#refresh-datumsfeature-checks-from-annotations">Refresh Datums/Feature Checks from Annotations</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Feature Check Reporting Frame" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#set-feature-check-reporting-frame">Set Feature Check Reporting Frame</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Set Feature Check Reporting Frame" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-feature-check-reporting-frame">Set Feature Check Reporting Frame</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Feature Check Reporting Frame" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#get-feature-check-reporting-frame">Get Feature Check Reporting Frame</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Get Feature Check Reporting Frame" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-feature-check-reporting-frame">Get Feature Check Reporting Frame</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Set Feature Check Reporting Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-partial-sdk-contract"><td><a href="#set-feature-check-reporting-options">Set Feature Check Reporting Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - partial SDK contract</td></tr>
<tr data-command="Set Feature Check Reporting Options" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#set-feature-check-reporting-options">Set Feature Check Reporting Options</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Get Feature Check Reporting Options" data-group="GDT Operations / GDT Analysis" data-status="current" data-validation="at-risk-partial-sdk-contract"><td><a href="#get-feature-check-reporting-options">Get Feature Check Reporting Options</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - partial SDK contract</td></tr>
<tr data-command="Get Feature Check Reporting Options" data-group="Analysis Operations / GDT Operations" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#get-feature-check-reporting-options">Get Feature Check Reporting Options</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Portable List and Iterator Commands

First-party clients return ordinary detached lists, so callers can count and
index them locally. The iterator variants additionally depend on MP-only
`Step to Jump at End of List` control flow, which has no meaning in a Briosa
call.

### Get Number of Feature Checks in Feature Check Ref List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="GDT Operations / GDT Analysis" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / GDT Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check List` | Collection Object Name Ref List |
| Output | `Total Count` | Integer |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Count the Feature Checks in the returned client list.

### Get i-th Feature Check From Feature Check Ref List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="GDT Operations / GDT Analysis" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / GDT Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check Name List` | Collection Object Name Ref List |
| Input | `Feature Check Index` | Integer |
| Output | `Resultant Item` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Index the returned Feature Check list in the client language.

### Get i-th Feature Check From Feature Check Ref List (Iterator)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="GDT Operations / GDT Analysis" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / GDT Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Reference List` | Collection Object Name Ref List |
| Input | `Feature Check Index` | Integer |
| Input | `Step to Jump at End of List` | Binding not emitted by the SDK exporter |
| Output | `Collection` | String |
| Output | `Feature Check` | String |
| Output | `Resultant Item` | Collection Object Name |

A missing exported binding is recorded explicitly. Existing limitations retain their reviewed handling; a generic SDK method alone does not prove a replacement binding.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Index the returned list directly. Briosa does not reproduce MP step-jump
control flow.

### Get Number of Datums in Datum Ref List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="GDT Operations / GDT Analysis" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / GDT Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Datum Ref List` | Collection Object Name Ref List |
| Output | `Total Count` | Integer |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Count the Datums in the returned client list.

### Get i-th Datum From Datum Ref List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="GDT Operations / GDT Analysis" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / GDT Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Datum Ref List` | Collection Object Name Ref List |
| Input | `Datum Index` | Integer |
| Output | `Resultant Item` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Index the returned Datum list in the client language.

### Get i-th Datum From Datum Ref List (Iterator)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="GDT Operations / GDT Analysis" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / GDT Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Datum Ref List` | Collection Object Name Ref List |
| Input | `Datum Index` | Integer |
| Input | `Step to Jump at End of List` | Binding not emitted by the SDK exporter |
| Output | `Resultant Item` | Collection Object Name |

A missing exported binding is recorded explicitly. Existing limitations retain their reviewed handling; a generic SDK method alone does not prove a replacement binding.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Index the returned list directly. Briosa does not reproduce MP step-jump
control flow.

### Get i-th Annotation From Annotation Ref List

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="GDT Operations / GDT Analysis" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / GDT Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Annotation Ref List` | Collection Object Name Ref List |
| Input | `Annotation Index` | Integer |
| Output | `Resultant Item` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Index the returned Annotation list in the client language.

### Get i-th Annotation From Annotation Ref List (Iterator)

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="excluded" data-group="GDT Operations / GDT Analysis" data-validation="not-applicable">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">Not applicable</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="excluded" data-group="Analysis Operations / GDT Operations" data-validation="evidence-review">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--excluded">Excluded</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">Evidence review</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

The exclusion and recommended alternative below also apply to 2024.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Annotation Ref List` | Collection Object Name Ref List |
| Input | `Annotation Index` | Integer |
| Input | `Step to Jump at End of List` | Binding not emitted by the SDK exporter |
| Output | `Resultant Item` | Collection Object Name |

A missing exported binding is recorded explicitly. Existing limitations retain their reviewed handling; a generic SDK method alone does not prove a replacement binding.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Index the returned list directly. Briosa does not reproduce MP step-jump
control flow.

## Feature Check and Datum Data

### Get Feature Check Datum References

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Output | `Datum 1 Reference String` | String |
| Output | `Datum 1 CAD Faces` | String |
| Output | `Datum 1 SA Objects` | Collection Object Name Ref List |
| Output | `Datum 1 Aux SA Objects` | Collection Object Name Ref List |
| Output | `Datum 1 Geometry Relationships` | Collection Object Name Ref List |
| Output | `Datum 1 Aux Geometry Relationships` | Collection Object Name Ref List |
| Output | `Datum 2 Reference String` | String |
| Output | `Datum 2 CAD Faces` | String |
| Output | `Datum 2 SA Objects` | Collection Object Name Ref List |
| Output | `Datum 2 Aux SA Objects` | Collection Object Name Ref List |
| Output | `Datum 2 Geometry Relationships` | Collection Object Name Ref List |
| Output | `Datum 2 Aux Geometry Relationships` | Collection Object Name Ref List |
| Output | `Datum 3 Reference String` | String |
| Output | `Datum 3 CAD Faces` | String |
| Output | `Datum 3 SA Objects` | Collection Object Name Ref List |
| Output | `Datum 3 Aux SA Objects` | Collection Object Name Ref List |
| Output | `Datum 3 Geometry Relationships` | Collection Object Name Ref List |
| Output | `Datum 3 Aux Geometry Relationships` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

`Get Feature Check Datum References` returns the three datum-reference slots,
including reference text, CAD-face text, SA objects, auxiliary objects, and
geometry relationships.

### Get Datum Measurements

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Datum` | Collection Object Name |
| Output | `Point Names` | Point Name Ref List |
| Output | `Cloud Names` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the Point Names and Cloud Names assigned to a Datum.

### Set Datum Measurements

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Datum` | Collection Object Name |
| Input | `Point Names` | Point Name Ref List |
| Input | `Cloud Names` | Collection Object Name Ref List |
| Input | `Replace Existing Measurements?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Assigns Point Names and Cloud Names to a Datum. `Replace Existing
Measurements?` defaults to `false`.

### Get Feature Check Measurements

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Output | `Point Names` | Point Name Ref List |
| Output | `Cloud Names` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the Point Names and Cloud Names assigned to a Feature Check.

### Set Feature Check Measurements

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Input | `Point Names` | Point Name Ref List |
| Input | `Cloud Names` | Collection Object Name Ref List |
| Input | `Replace Existing Measurements?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Assigns Point Names and Cloud Names to a Feature Check. `Replace Existing
Measurements?` defaults to `false`.

### Get Feature Check Cylinder Eval Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-cylinder-feature-check-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk cylinder feature check fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Output | `Enable Actual Diameter Override` | Boolean |
| Output | `Actual Diameter Override` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns whether actual-diameter override is enabled and its current value.

### Set Feature Check Cylinder Eval Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-cylinder-feature-check-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk cylinder feature check fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Input | `Enable Actual Diameter Override` | Boolean |
| Input | `Actual Diameter Override` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets actual-diameter override behavior. The enable flag defaults to `false` and
the override value defaults to `0.0`.

## Filtering and Evaluation

### Feature Inspection Auto Filter

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Point Names` | Point Name Ref List |
| Input | `Group Names` | Collection Object Name Ref List |
| Input | `Cloud Names` | Collection Object Name Ref List |
| Input | `Surface Offset` | Double |
| Input | `Edge Offset` | Double |
| Input | `Offset Direction` | Offset Direction Type |
| Input | `Include Pts within Cylinder Axis Proximity?` | Boolean |
| Input | `Enforce Max Pts per Face in Output?` | Boolean |
| Input | `Max Pts per Face` | Integer |
| Input | `Feature Check Name List` | Collection Object Name Ref List |
| Input | `Include Datums?` | Boolean |
| Input | `Create Cloud for Each Datum/Check` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

`Feature Inspection Auto Filter` preserves the MP defaults: surface and edge
offsets `0.1`, both offset directions, cylinder-axis proximity disabled,
maximum-points enforcement disabled, maximum points `0`, include datums
enabled, and per-check cloud creation disabled.

### Set Global Force Simultaneous Evaluation

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-licensed-validation">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk licensed validation</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Global Simultaneous Evaluation?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Enables or disables SpatialAnalyzer's global force-simultaneous-evaluation
setting.

### Evaluate Feature Check

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Input | `Perform Evaluation?` | Boolean |
| Input | `Simultaneous Evaluation?` | Boolean |
| Output | `Check Evaluated?` | Boolean |
| Output | `Check Result` | String |
| Output | `Non-unique Result?` | Boolean |
| Output | `Measured Deviation (Upper)` | Double |
| Output | `Distance Out of Tolerance (Upper)` | Double |
| Output | `Eval Delta Transform (Upper)` | World Transform |
| Output | `Measured Deviation (Lower)` | Double |
| Output | `Distance Out of Tolerance (Lower)` | Double |
| Output | `Eval Delta Transform (Lower)` | World Transform |
| Output | `Check Type` | String |
| Output | `Tolerance Type` | String |
| Output | `Tolerance, Simple` | Double |
| Output | `Tolerance, Composite (Upper)` | Double |
| Output | `Tolerance, Composite (Lower)` | Double |
| Output | `Tolerance, Range (Min)` | Double |
| Output | `Tolerance, Range (Max)` | Double |
| Output | `Tolerance, NominalPlusMinus (Nominal)` | Double |
| Output | `Tolerance, NominalPlusMinus (Minus)` | Double |
| Output | `Tolerance, NominalPlusMinus (Plus)` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Evaluates one Feature Check and returns the complete result supplied by the MP
command.

### Evaluate Feature Checks

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check List` | Collection Object Name Ref List |
| Input | `Simultaneous Evaluation?` | Boolean |
| Input | `Restrict Evaluations To Listed Checks?` | Boolean |
| Output | `Total Passed` | Integer |
| Output | `Total Failed` | Integer |
| Output | `Total Incomplete` | Integer |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Evaluates a supplied Feature Check reference list.

### Generate Feature Check Summary

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check List` | Collection Object Name Ref List |
| Input | `Summary Table Name` | String |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Generates the SpatialAnalyzer Feature Check summary for the supplied checks.

### Start/Stop Feature Check Trapping

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-instrument-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk instrument gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Input | `Instrument ID` | Collection Instrument ID |
| Input | `Start Trapping (FALSE = Stop)` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Starts or stops Feature Check trapping for a selected instrument.

### Enable/Disable Datum Alignment for Feature Check

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Input | `Enable Datum Alignment?` | Boolean |
| Input | `Enable Custom Initial Alignment?` | Boolean |
| Input | `Enable Initial Datum Alignment?` | Boolean |
| Input | `Alignment` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Changes Datum Alignment behavior for the selected Feature Check.

### Datum Alignment

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Input | `Objects to Move` | Collection Object Name Ref List |
| Input | `Instruments to Move` | Collection Instrument ID Ref List |
| Input | `Apply Feature Check Transform?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Runs Datum Alignment with the supplied alignment and Feature Check inputs.

These commands operate on live job and instrument state. Briosa does not retain
a parallel model of that state or add workflow guards.

## GD&T Options

### Get GD&T Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="licensed-read-probe">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">Licensed read probe</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="evidence-review-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">Evidence review — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Output | `Use High Points` | Boolean |
| Output | `Extrapolate Axial Extent` | Boolean |
| Output | `Exclude From Auto Evaluation` | Boolean |
| Output | `Create Actual Features` | Boolean |
| Output | `Create Solved Points` | Boolean |
| Output | `Cross Section Criteria` | Double |
| Output | `Enable Auto Feature Detection?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns all nine current-job GD&T options. A licensed read probe confirmed
that SA 2026.1 returns the two values omitted from the MP Editor export as
`Distance Between Mode` and `Evaluation Method`, alongside the seven exported
Boolean and numeric outputs. The similarly worded installed documentation
label `Check Pre-Eval Validator Type` was not accepted by the SDK.

### Set GD&T Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-licensed-validation">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk licensed validation</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Use High Points` | Boolean |
| Input | `Extrapolate Axial Extent` | Boolean |
| Input | `Exclude From Auto Evaluation` | Boolean |
| Input | `Distance Between Mode` | GD&T Distance Between Mode |
| Input | `Evaluation Method` | GD&T Evaluation Method |
| Input | `Create Actual Features` | Boolean |
| Input | `Create Solved Points` | Boolean |
| Input | `Cross Section Criteria` | Double |
| Input | `Enable Auto Feature Detection?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets the same nine current-job GD&T options exposed by the getter.

### Set GD&T Extended Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-licensed-validation">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk licensed validation</span>
</div>
</div>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets the extended-options enable flag and the per-geometry evaluation methods.

### Get GD&T Extended Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-licensed-validation">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk licensed validation</span>
</div>
</div>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns only `Use Extended Options`, matching this exact SDK command. It does
not claim to return the nine selected geometry methods.

## Reporting and Annotation Refresh

### Refresh Datums/Feature Checks from Annotations

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Collection` | Collection Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Refreshes a collection's Datums and Feature Checks from Annotations.

### Set Feature Check Reporting Frame

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Input | `Reporting Frame` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets the reporting Frame for a Feature Check.

### Get Feature Check Reporting Frame

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Output | `Reporting Frame` | Collection Object Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the reporting Frame for a Feature Check.

### Set Feature Check Reporting Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-partial-sdk-contract">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk partial sdk contract</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The 2024 signature has no `Only Create Failed Vectors?` input. Retain the earlier reporting options. The existing `Vector Creation` export limitation is shared with 2026 and retains the reviewed mapping decision; it is not a new 2024 difference.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Input | `Show Feature Control Frame Summary?` | Boolean |
| Input | `Include Title?` | Boolean |
| Input | `Show Datum and Tolerance Summary?` | Boolean |
| Input | `Show Feature Summary?` | Boolean |
| Input | `Vector Creation` | Binding not emitted by the SDK exporter |
| Input | `Show Point Details Summary?` | Boolean |
| Input | `Show Lower Tier Tables?` | Boolean |

A missing exported binding is recorded explicitly. Existing limitations retain their reviewed handling; a generic SDK method alone does not prove a replacement binding.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Sets the seven Boolean reporting options the exact SDK can bind. The SDK cannot
bind `Vector Creation`, so Briosa omits that field and leaves the existing
vector-creation setting unchanged.

### Get Feature Check Reporting Options

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Analysis" data-validation="at-risk-partial-sdk-contract">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Analysis</span>
  <span className="catalog-target-validation">At risk partial sdk contract</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Analysis Operations / GDT Operations" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Analysis Operations / GDT Operations</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The 2024 outputs do not include `Only Create Failed Vectors?`. Retain the earlier reporting options. The existing `Vector Creation` export limitation is shared with 2026 and retains the reviewed mapping decision; it is not a new 2024 difference.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check` | Collection Object Name |
| Input | `Vector Creation` | Binding not emitted by the SDK exporter |
| Output | `Show Feature Control Frame Summary?` | Boolean |
| Output | `Include Title?` | Boolean |
| Output | `Show Datum and Tolerance Summary?` | Boolean |
| Output | `Show Feature Summary?` | Boolean |
| Output | `Show Point Details Table?` | Boolean |
| Output | `Show Lower Tier Tables?` | Boolean |

A missing exported binding is recorded explicitly. Existing limitations retain their reviewed handling; a generic SDK method alone does not prove a replacement binding.

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the same seven Boolean reporting options without claiming to return
the unavailable `Vector Creation` value.

All mutation, evaluation, and interactive operations prohibit automatic replay
after an unknown execution outcome.

**API References:** [gRPC](/api/grpc/gdt-analysis) · [.NET](/api/dotnet/gdt-analysis) · [Python](/api/python/gdt-analysis) · [JavaScript and TypeScript](/api/javascript/gdt-analysis)
