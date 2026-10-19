---
title: Analysis Operations / GDT Operations in SA 2024.1.0508.5
sidebar_label: GDT Operations
description: Reviewed Analysis Operations / GDT Operations commands and released Briosa support for SpatialAnalyzer 2024.1.0508.5.
---

# GDT Operations

<p className="catalog-path">SA 2024.1.0508.5 <span aria-hidden="true">/</span> Analysis Operations <span aria-hidden="true">/</span> GDT Operations</p>

This group contains 30 reviewed command entries. **Current** means implemented
in Briosa Server 0.9.2 for this exact target. Runtime readiness and policy still apply. Follow a
command link for its exact-target signature, disposition, and version differences.

| MP Command | Status | Validation |
| --- | --- | --- |
| [Datum Alignment](/mp-command-catalog/commands/gdt-analysis#datum-alignment) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Enable/Disable Datum Alignment for Feature Check](/mp-command-catalog/commands/gdt-analysis#enabledisable-datum-alignment-for-feature-check) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Evaluate Feature Check](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-check) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Evaluate Feature Checks](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-checks) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Feature Inspection Auto Filter](/mp-command-catalog/commands/gdt-analysis#feature-inspection-auto-filter) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Generate Feature Check Summary](/mp-command-catalog/commands/gdt-analysis#generate-feature-check-summary) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Datum Measurements](/mp-command-catalog/commands/gdt-analysis#get-datum-measurements) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Feature Check Cylinder Eval Options](/mp-command-catalog/commands/gdt-analysis#get-feature-check-cylinder-eval-options) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Feature Check Datum References](/mp-command-catalog/commands/gdt-analysis#get-feature-check-datum-references) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Feature Check Measurements](/mp-command-catalog/commands/gdt-analysis#get-feature-check-measurements) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Feature Check Reporting Frame](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-frame) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Feature Check Reporting Options](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-options) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get GD&T Options](/mp-command-catalog/commands/gdt-analysis#get-gdt-options) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Get i-th Annotation From Annotation Ref List](/mp-command-catalog/commands/gdt-analysis#get-i-th-annotation-from-annotation-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Get i-th Annotation From Annotation Ref List (Iterator)](/mp-command-catalog/commands/gdt-analysis#get-i-th-annotation-from-annotation-ref-list-iterator) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Get i-th Datum From Datum Ref List](/mp-command-catalog/commands/gdt-analysis#get-i-th-datum-from-datum-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Get i-th Datum From Datum Ref List (Iterator)](/mp-command-catalog/commands/gdt-analysis#get-i-th-datum-from-datum-ref-list-iterator) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Get i-th Feature Check From Feature Check Ref List](/mp-command-catalog/commands/gdt-analysis#get-i-th-feature-check-from-feature-check-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Get i-th Feature Check From Feature Check Ref List (Iterator)](/mp-command-catalog/commands/gdt-analysis#get-i-th-feature-check-from-feature-check-ref-list-iterator) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Get Number of Datums in Datum Ref List](/mp-command-catalog/commands/gdt-analysis#get-number-of-datums-in-datum-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Get Number of Feature Checks in Feature Check Ref List](/mp-command-catalog/commands/gdt-analysis#get-number-of-feature-checks-in-feature-check-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Refresh Datums/Feature Checks from Annotations](/mp-command-catalog/commands/gdt-analysis#refresh-datumsfeature-checks-from-annotations) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Datum Measurements](/mp-command-catalog/commands/gdt-analysis#set-datum-measurements) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Feature Check Cylinder Eval Options](/mp-command-catalog/commands/gdt-analysis#set-feature-check-cylinder-eval-options) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Feature Check Measurements](/mp-command-catalog/commands/gdt-analysis#set-feature-check-measurements) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Feature Check Reporting Frame](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-frame) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Feature Check Reporting Options](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-options) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set GD&T Options](/mp-command-catalog/commands/gdt-analysis#set-gdt-options) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Global Force Simultaneous Evaluation](/mp-command-catalog/commands/gdt-analysis#set-global-force-simultaneous-evaluation) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Start/Stop Feature Check Trapping](/mp-command-catalog/commands/gdt-analysis#startstop-feature-check-trapping) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |

[All 2024 Groups](./group-hierarchy.md) · [Review Notes](./review-notes.md)
