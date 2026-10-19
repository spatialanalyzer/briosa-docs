---
title: GDT Operations / GDT Analysis in SA 2026.1.0529.7
sidebar_label: GDT Analysis
description: Reviewed GDT Analysis MP commands for exact SpatialAnalyzer target 2026.1.0529.7.
---

# GDT Operations / GDT Analysis

<p className="catalog-path">SA 2026.1.0529.7 <span aria-hidden="true">/</span> GDT Operations <span aria-hidden="true">/</span> GDT Analysis</p>

Twenty-four commands are **Current**. Eight portable list and MP-only
iterator helpers are **Excluded**.

| MP Command | Briosa Status |
| --- | --- |
| [Get Number of Feature Checks in Feature Check Ref List](/mp-command-catalog/commands/gdt-analysis#get-number-of-feature-checks-in-feature-check-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> — count the client list |
| [Get Feature Check Datum References](/mp-command-catalog/commands/gdt-analysis#get-feature-check-datum-references) | <span className="catalog-status catalog-status--current">Current</span> |
| [Get i-th Feature Check From Feature Check Ref List](/mp-command-catalog/commands/gdt-analysis#get-i-th-feature-check-from-feature-check-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> — index the client list |
| [Get i-th Feature Check From Feature Check Ref List (Iterator)](/mp-command-catalog/commands/gdt-analysis#get-i-th-feature-check-from-feature-check-ref-list-iterator) | <span className="catalog-status catalog-status--excluded">Excluded</span> — MP-only iterator control |
| [Get Number of Datums in Datum Ref List](/mp-command-catalog/commands/gdt-analysis#get-number-of-datums-in-datum-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> — count the client list |
| [Get i-th Datum From Datum Ref List](/mp-command-catalog/commands/gdt-analysis#get-i-th-datum-from-datum-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> — index the client list |
| [Get i-th Datum From Datum Ref List (Iterator)](/mp-command-catalog/commands/gdt-analysis#get-i-th-datum-from-datum-ref-list-iterator) | <span className="catalog-status catalog-status--excluded">Excluded</span> — MP-only iterator control |
| [Get i-th Annotation From Annotation Ref List](/mp-command-catalog/commands/gdt-analysis#get-i-th-annotation-from-annotation-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> — index the client list |
| [Get i-th Annotation From Annotation Ref List (Iterator)](/mp-command-catalog/commands/gdt-analysis#get-i-th-annotation-from-annotation-ref-list-iterator) | <span className="catalog-status catalog-status--excluded">Excluded</span> — MP-only iterator control |
| [Get Datum Measurements](/mp-command-catalog/commands/gdt-analysis#get-datum-measurements) | <span className="catalog-status catalog-status--current">Current</span> |
| [Set Datum Measurements](/mp-command-catalog/commands/gdt-analysis#set-datum-measurements) | <span className="catalog-status catalog-status--current">Current</span> |
| [Get Feature Check Measurements](/mp-command-catalog/commands/gdt-analysis#get-feature-check-measurements) | <span className="catalog-status catalog-status--current">Current</span> |
| [Set Feature Check Measurements](/mp-command-catalog/commands/gdt-analysis#set-feature-check-measurements) | <span className="catalog-status catalog-status--current">Current</span> |
| [Get Feature Check Cylinder Eval Options](/mp-command-catalog/commands/gdt-analysis#get-feature-check-cylinder-eval-options) | <span className="catalog-status catalog-status--current">Current</span> |
| [Set Feature Check Cylinder Eval Options](/mp-command-catalog/commands/gdt-analysis#set-feature-check-cylinder-eval-options) | <span className="catalog-status catalog-status--current">Current</span> |
| [Feature Inspection Auto Filter](/mp-command-catalog/commands/gdt-analysis#feature-inspection-auto-filter) | <span className="catalog-status catalog-status--current">Current</span> |
| [Set Global Force Simultaneous Evaluation](/mp-command-catalog/commands/gdt-analysis#set-global-force-simultaneous-evaluation) | <span className="catalog-status catalog-status--current">Current</span> |
| [Evaluate Feature Check](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-check) | <span className="catalog-status catalog-status--current">Current</span> |
| [Evaluate Feature Checks](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-checks) | <span className="catalog-status catalog-status--current">Current</span> |
| [Generate Feature Check Summary](/mp-command-catalog/commands/gdt-analysis#generate-feature-check-summary) | <span className="catalog-status catalog-status--current">Current</span> |
| [Start/Stop Feature Check Trapping](/mp-command-catalog/commands/gdt-analysis#startstop-feature-check-trapping) | <span className="catalog-status catalog-status--current">Current</span> |
| [Enable/Disable Datum Alignment for Feature Check](/mp-command-catalog/commands/gdt-analysis#enabledisable-datum-alignment-for-feature-check) | <span className="catalog-status catalog-status--current">Current</span> |
| [Datum Alignment](/mp-command-catalog/commands/gdt-analysis#datum-alignment) | <span className="catalog-status catalog-status--current">Current</span> |
| [Get GD&amp;T Options](/mp-command-catalog/commands/gdt-analysis#get-gdt-options) | <span className="catalog-status catalog-status--current">Current</span> — licensed read probe |
| [Set GD&amp;T Options](/mp-command-catalog/commands/gdt-analysis#set-gdt-options) | <span className="catalog-status catalog-status--current">Current</span> |
| [Set GD&amp;T Extended Options](/mp-command-catalog/commands/gdt-analysis#set-gdt-extended-options) | <span className="catalog-status catalog-status--current">Current</span> |
| [Get GD&amp;T Extended Options](/mp-command-catalog/commands/gdt-analysis#get-gdt-extended-options) | <span className="catalog-status catalog-status--current">Current</span> — enable state only |
| [Refresh Datums/Feature Checks from Annotations](/mp-command-catalog/commands/gdt-analysis#refresh-datumsfeature-checks-from-annotations) | <span className="catalog-status catalog-status--current">Current</span> |
| [Set Feature Check Reporting Frame](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-frame) | <span className="catalog-status catalog-status--current">Current</span> |
| [Get Feature Check Reporting Frame](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-frame) | <span className="catalog-status catalog-status--current">Current</span> |
| [Set Feature Check Reporting Options](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-options) | <span className="catalog-status catalog-status--current">Current</span> — partial SDK contract |
| [Get Feature Check Reporting Options](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-options) | <span className="catalog-status catalog-status--current">Current</span> — partial SDK contract |

[Open the canonical GDT Analysis command reference →](/mp-command-catalog/commands/gdt-analysis)
