---
title: Analysis Operations / Relationship Operations in SA 2024.1.0508.5
sidebar_label: Relationship Operations
description: Reviewed Analysis Operations / Relationship Operations commands and released Briosa support for SpatialAnalyzer 2024.1.0508.5.
---

# Relationship Operations

<p className="catalog-path">SA 2024.1.0508.5 <span aria-hidden="true">/</span> Analysis Operations <span aria-hidden="true">/</span> Relationship Operations</p>

This group contains 57 reviewed command entries. **Current** means implemented
in Briosa Server 0.9.2 for this exact target. Runtime readiness and policy still apply. Follow a
command link for its exact-target signature, disposition, and version differences.

| MP Command | Status | Validation |
| --- | --- | --- |
| [Auto Filter Clouds to Nominal Geometry 2D](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Auto Filter Clouds to Nominal Geometry 3D](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Auto Filter Points to Nominal Geometry 3D](/mp-command-catalog/commands/relationship-operations#auto-filter-points-to-nominal-geometry-3d) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Auto Filter Points/Groups/Clouds to Surface Faces](/mp-command-catalog/commands/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Compute Geometry Relationship Uncertainties](/mp-command-catalog/commands/relationship-operations#compute-geometry-relationship-uncertainties) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Create Points to Objects Map](/mp-command-catalog/commands/relationship-operations#create-points-to-objects-map) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Delete Relationship](/mp-command-catalog/commands/relationship-operations#delete-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Do Relationship Fit](/mp-command-catalog/commands/relationship-operations#do-relationship-fit) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Edit Geometry Relationship Point List](/mp-command-catalog/commands/relationship-operations#edit-geometry-relationship-point-list) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Enable All Cloud Cross Sections](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-all-cloud-cross-sections) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Enable Single Cloud Cross Section](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-single-cloud-cross-section) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Enable/Disable Cloud Cross Sections](/mp-command-catalog/commands/cloud-and-mesh-operations#enabledisable-cloud-cross-sections) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Filter Geometry Relationship Outlier Cloud Points](/mp-command-catalog/commands/relationship-operations#filter-geometry-relationship-outlier-cloud-points) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Generate Geometry Relationship Summary](/mp-command-catalog/commands/relationship-operations#generate-geometry-relationship-summary) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get General Relationship Statistics](/mp-command-catalog/commands/relationship-operations#get-general-relationship-statistics) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get i-th Relationship From Relationship Ref List](/mp-command-catalog/commands/relationship-operations#get-i-th-relationship-from-relationship-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Get i-th Relationship From Relationship Ref List (Iterator)](/mp-command-catalog/commands/relationship-operations#get-i-th-relationship-from-relationship-ref-list-iterator) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Get Number of Cross Sections in Cross Section Cloud](/mp-command-catalog/commands/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Number of Relationships in Relationship Ref List](/mp-command-catalog/commands/relationship-operations#get-number-of-relationships-in-relationship-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Get Objects From Points to Objects Map (Point List)](/mp-command-catalog/commands/relationship-operations#get-objects-from-points-to-objects-map-point-list) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Point to Point Relationship Statistics](/mp-command-catalog/commands/relationship-operations#get-point-to-point-relationship-statistics) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Points to Objects Relationship Statistics](/mp-command-catalog/commands/relationship-operations#get-points-to-objects-relationship-statistics) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Points to Points Relationship Associated Data](/mp-command-catalog/commands/relationship-operations#get-points-to-points-relationship-associated-data) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Relationship Associated Data](/mp-command-catalog/commands/relationship-operations#get-relationship-associated-data) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Auto Filter Proximity Settings](/mp-command-catalog/commands/relationship-operations#make-auto-filter-proximity-settings) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Make Average Point Relationship](/mp-command-catalog/commands/relationship-operations#make-average-point-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Dynamic Circle Relationship](/mp-command-catalog/commands/relationship-operations#make-dynamic-circle-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Dynamic Ellipse Relationship](/mp-command-catalog/commands/relationship-operations#make-dynamic-ellipse-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Dynamic Line Relationship](/mp-command-catalog/commands/relationship-operations#make-dynamic-line-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Dynamic Plane Relationship](/mp-command-catalog/commands/relationship-operations#make-dynamic-plane-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Dynamic Point Relationship](/mp-command-catalog/commands/relationship-operations#make-dynamic-point-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Frame to Frame Relationship](/mp-command-catalog/commands/relationship-operations#make-frame-to-frame-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Geometry Compare Only Relationship](/mp-command-catalog/commands/relationship-operations#make-geometry-compare-only-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Geometry Fit and Compare to Nominal Relationship](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Geometry Fit Only Relationship](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-only-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Group to Group Relationship](/mp-command-catalog/commands/relationship-operations#make-group-to-group-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Group to Nominal Group Relationship](/mp-command-catalog/commands/relationship-operations#make-group-to-nominal-group-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Groups to Objects Relationship](/mp-command-catalog/commands/relationship-operations#make-groups-to-objects-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Object to Object Direction Relationship](/mp-command-catalog/commands/relationship-operations#make-object-to-object-direction-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Point Clouds to Objects Relationship](/mp-command-catalog/commands/relationship-operations#make-point-clouds-to-objects-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Point to Point Relationship](/mp-command-catalog/commands/relationship-operations#make-point-to-point-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Points to Objects Relationship](/mp-command-catalog/commands/relationship-operations#make-points-to-objects-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Points to Points Relationship](/mp-command-catalog/commands/relationship-operations#make-points-to-points-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Make Vector Group To Vector Group Relationship](/mp-command-catalog/commands/relationship-operations#make-vector-group-to-vector-group-relationship) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Move Collections by Minimizing Relationships](/mp-command-catalog/commands/relationship-operations#move-collections-by-minimizing-relationships) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Relationship Watch Window Template](/mp-command-catalog/commands/relationship-operations#relationship-watch-window-template) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Group To Nominal Group View Zooming](/mp-command-catalog/commands/relationship-operations#set-group-to-nominal-group-view-zooming) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Optimization Perturbation Parameters](/mp-command-catalog/commands/relationship-operations#set-optimization-perturbation-parameters) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Optimization Search Options](/mp-command-catalog/commands/relationship-operations#set-optimization-search-options) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Points to Points Relationship Associated Data](/mp-command-catalog/commands/relationship-operations#set-points-to-points-relationship-associated-data) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Relationship Associated Data](/mp-command-catalog/commands/relationship-operations#set-relationship-associated-data) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Vector Group To Vector Group Cylindrical Zone](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Vector Group To Vector Group Fit Gradient Factor](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Vector Group To Vector Group Fit Weights](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-weights) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Vector Group To Vector Group Relative Polarity](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-relative-polarity) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Sort Relationship Ref List](/mp-command-catalog/commands/relationship-operations#sort-relationship-ref-list) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Start/Stop Relationship Trapping](/mp-command-catalog/commands/relationship-operations#startstop-relationship-trapping) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |

## Subgroups

- [Pipe Relationships](./analysis-operations-relationship-operations-pipe-relationships.md)
- [Relationship Attributes](./analysis-operations-relationship-operations-relationship-attributes.md)

[All 2024 Groups](./group-hierarchy.md) · [Review Notes](./review-notes.md)
