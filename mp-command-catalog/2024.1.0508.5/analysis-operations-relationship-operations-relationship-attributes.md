---
title: Analysis Operations / Relationship Operations / Relationship Attributes in SA 2024.1.0508.5
sidebar_label: Relationship Attributes
description: Reviewed Analysis Operations / Relationship Operations / Relationship Attributes commands and released Briosa support for SpatialAnalyzer 2024.1.0508.5.
---

# Relationship Attributes

**SA 2024.1.0508.5 · Analysis Operations / Relationship Operations / Relationship Attributes**

This group contains 41 reviewed command entries. **Current** means implemented
in Briosa Server 0.7.0 for this exact target. Runtime readiness and policy still apply. Follow a
command link for its exact-target signature, disposition, and version differences.

| MP Command | Status | Validation |
| --- | --- | --- |
| [Enable/Disable Relationships for Optimization](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization) | **Current** | Evidence review — no 2024 runtime validation |
| [Geom Relationship Ignore Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) | **Current** | At Risk — no 2024 runtime validation |
| [Geom Relationship Reuse Ignored Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Geom Relationship Auto Vectors](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Geom Relationship Criteria Name List](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria-name-list) | **Current** | At Risk — no 2024 runtime validation |
| [Get Geom Relationship Measured Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Geom Relationship Point List](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Relationship Status](/mp-command-catalog/commands/relationship-operations#get-relationship-status) | **Current** | At Risk — no 2024 runtime validation |
| [Get Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Relationship Type](/mp-command-catalog/commands/relationship-operations#get-relationship-type) | **Current** | Evidence review — no 2024 runtime validation |
| [Get Relationship Weighting](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting) | **Current** | Evidence review — no 2024 runtime validation |
| [Make Vector Fit Constraint](/mp-command-catalog/commands/file-operations#make-vector-fit-constraint) | **Excluded** | Evidence review |
| [Make Vector Tolerance](/mp-command-catalog/commands/file-operations#make-vector-tolerance) | **Excluded** | Evidence review |
| [Set Geom Relationship Auto Vectors Nominal (AVN)](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Auto Vectors Fit (AVF)](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Desired Meas Count](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Dormant Status](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Orientation Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Position Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Voxel Cloud Display](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Weighting](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting) | **Current** | Evidence review — no 2024 runtime validation |
| [Set Relationship Weights Normalized](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized) | **Current** | Evidence review — no 2024 runtime validation |

## Subgroups

- [Relationship Attributes (Scalar Types)](./analysis-operations-relationship-operations-relationship-attributes-relationship-attributes-scalar-types.md)

[All 2024 Groups](./group-hierarchy.md) · [Review Notes](./review-notes.md)
