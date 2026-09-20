---
title: Instrument Operations in SA 2024.1.0508.5
sidebar_label: Instrument Operations
description: Reviewed Instrument Operations commands and released Briosa support for SpatialAnalyzer 2024.1.0508.5.
---

# Instrument Operations

**SA 2024.1.0508.5 · Instrument Operations**

This group contains 141 reviewed command entries. **Current** means implemented
in Briosa Server 0.7.0 for this exact target. Runtime readiness and policy still apply. Follow a
command link for its exact-target signature, disposition, and version differences.

| MP Command | Status | Validation |
| --- | --- | --- |
| ['Build' Target](/mp-command-catalog/commands/instrument-operations#build-target) | **Current** | At Risk — no 2024 runtime validation |
| [Activate/Deactivate Instrument Toolbar](/mp-command-catalog/commands/instrument-operations#activatedeactivate-instrument-toolbar) | **Current** | At Risk — no 2024 runtime validation |
| [Add a USMN Templated Instrument to a USMN Templated Instrument List](/mp-command-catalog/commands/instrument-operations#add-a-usmn-templated-instrument-to-a-usmn-templated-instrument-list) | **Excluded** | Evidence review |
| [Add New Instrument](/mp-command-catalog/commands/instrument-operations#add-new-instrument) | **Current** | At Risk — no 2024 runtime validation |
| [Add Nominal Point to TCP Fixture](/mp-command-catalog/commands/instrument-operations#add-nominal-point-to-tcp-fixture) | **Current** | At Risk — no 2024 runtime validation |
| [Align Cloud to CAD](/mp-command-catalog/commands/instrument-operations#align-cloud-to-cad) | **Current** | At Risk — no 2024 runtime validation |
| [Align Laser Projector](/mp-command-catalog/commands/instrument-operations#align-laser-projector) | **Current** | At Risk — no 2024 runtime validation |
| [Align Two Targets with Axis (WCF - X)](/mp-command-catalog/commands/instrument-operations#align-two-targets-with-axis-wcf---x) | **Current** | At Risk — no 2024 runtime validation |
| [Associate Objects with Instrument](/mp-command-catalog/commands/instrument-operations#associate-objects-with-instrument) | **Current** | At Risk — no 2024 runtime validation |
| [Auto Measure Points](/mp-command-catalog/commands/instrument-operations#auto-measure-points) | **Current** | At Risk — no 2024 runtime validation |
| [Auto-Correspond Closest Point](/mp-command-catalog/commands/instrument-operations#auto-correspond-closest-point) | **Current** | At Risk — no 2024 runtime validation |
| [Auto-Correspond with Proximity Trigger](/mp-command-catalog/commands/instrument-operations#auto-correspond-with-proximity-trigger) | **Current** | At Risk — no 2024 runtime validation |
| [Auto-Measure Batch of Features](/mp-command-catalog/commands/instrument-operations#auto-measure-batch-of-features) | **Current** | At Risk — no 2024 runtime validation |
| [Auto-Measure Specified Geometry](/mp-command-catalog/commands/instrument-operations#auto-measure-specified-geometry) | **Current** | At Risk — no 2024 runtime validation |
| [Auto-Measure Surface Vector Intersections](/mp-command-catalog/commands/instrument-operations#auto-measure-surface-vector-intersections) | **Current** | At Risk — no 2024 runtime validation |
| [Auto-Measure Vectors](/mp-command-catalog/commands/instrument-operations#auto-measure-vectors) | **Current** | At Risk — no 2024 runtime validation |
| [Calculate TCP Fixture Uncertainties](/mp-command-catalog/commands/instrument-operations#calculate-tcp-fixture-uncertainties) | **Current** | At Risk — no 2024 runtime validation |
| [Close Auto-Correspond Closest Point Dialog](/mp-command-catalog/commands/instrument-operations#close-auto-correspond-closest-point-dialog) | **Current** | At Risk — no 2024 runtime validation |
| [Collimation](/mp-command-catalog/commands/instrument-operations#collimation) | **Current** | At Risk — no 2024 runtime validation |
| [Combine Point Groups](/mp-command-catalog/commands/instrument-operations#combine-point-groups) | **Current** | At Risk — no 2024 runtime validation |
| [Compute CTE Scale Factor](/mp-command-catalog/commands/instrument-operations#compute-cte-scale-factor) | **Current** | Evidence review — no 2024 runtime validation |
| [Configure and Measure](/mp-command-catalog/commands/instrument-operations#configure-and-measure) | **Current** | At Risk — no 2024 runtime validation |
| [Construct Measured Point Uncertainty Ellipsoids](/mp-command-catalog/commands/instrument-operations#construct-measured-point-uncertainty-ellipsoids) | **Current** | At Risk — no 2024 runtime validation |
| [Construct Mirror from Plane](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-plane) | **Current** | At Risk — no 2024 runtime validation |
| [Construct Mirror from Two Points](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-two-points) | **Current** | At Risk — no 2024 runtime validation |
| [Construct Perimeters from Surface Face List](/mp-command-catalog/commands/instrument-operations#construct-perimeters-from-surface-face-list) | **Current** | At Risk — no 2024 runtime validation |
| [Construct TCP Fixture](/mp-command-catalog/commands/instrument-operations#construct-tcp-fixture) | **Current** | At Risk — no 2024 runtime validation |
| [Create New Dynamic Reference](/mp-command-catalog/commands/instrument-operations#create-new-dynamic-reference) | **Current** | At Risk — no 2024 runtime validation |
| [Create Templated Instrument (USMN)](/mp-command-catalog/commands/instrument-operations#create-templated-instrument-usmn) | **Current** | At Risk — no 2024 runtime validation |
| [Delete Instrument](/mp-command-catalog/commands/instrument-operations#delete-instrument) | **Current** | At Risk — no 2024 runtime validation |
| [Delete Measurement Observation](/mp-command-catalog/commands/instrument-operations#delete-measurement-observation) | **Current** | At Risk — no 2024 runtime validation |
| [Delete Measurements](/mp-command-catalog/commands/instrument-operations#delete-measurements) | **Current** | At Risk — no 2024 runtime validation |
| [Disassociate Objects from Instrument](/mp-command-catalog/commands/instrument-operations#disassociate-objects-from-instrument) | **Current** | At Risk — no 2024 runtime validation |
| [Dissect Point Group](/mp-command-catalog/commands/instrument-operations#dissect-point-group) | **Current** | At Risk — no 2024 runtime validation |
| [Dock Instrument Interface](/mp-command-catalog/commands/instrument-operations#dock-instrument-interface) | **Current** | At Risk — no 2024 runtime validation |
| [Drift Check](/mp-command-catalog/commands/instrument-operations#drift-check) | **Current** | At Risk — no 2024 runtime validation |
| [Edge Scan Measurement](/mp-command-catalog/commands/instrument-operations#edge-scan-measurement) | **Current** | At Risk — no 2024 runtime validation |
| [Edit Scan Perimeter Profile](/mp-command-catalog/commands/instrument-operations#edit-scan-perimeter-profile) | **SDK Unavailable** | Evidence review |
| [Enable/Disable Frame Set Scan Mode (All Instruments)](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments) | **Current** | At Risk — no 2024 runtime validation |
| [Enable/Disable Frame Set Scan Mode (By Instrument)](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument) | **Current** | At Risk — no 2024 runtime validation |
| [Enable/Disable Point Set Scan Mode](/mp-command-catalog/commands/instrument-operations#enabledisable-point-set-scan-mode) | **Current** | At Risk — no 2024 runtime validation |
| [Export Instrument History to XML File](/mp-command-catalog/commands/instrument-operations#export-instrument-history-to-xml-file) | **Current** | At Risk — no 2024 runtime validation |
| [Fabricate Observations](/mp-command-catalog/commands/instrument-operations#fabricate-observations) | **Current** | At Risk — no 2024 runtime validation |
| [Get Current Instrument Position Update](/mp-command-catalog/commands/instrument-operations#get-current-instrument-position-update) | **Current** | At Risk — no 2024 runtime validation |
| [Get Current Trapping Status](/mp-command-catalog/commands/instrument-operations#get-current-trapping-status) | **Current** | At Risk — no 2024 runtime validation |
| [Get Estimated Scan Time](/mp-command-catalog/commands/instrument-operations#get-estimated-scan-time) | **Current** | At Risk — no 2024 runtime validation |
| [Get Instrument Base Uncertainty Covariance Matrix WRT WORLD](/mp-command-catalog/commands/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world) | **Current** | At Risk — no 2024 runtime validation |
| [Get Instrument ID from Name](/mp-command-catalog/commands/instrument-operations#get-instrument-id-from-name) | **Current** | At Risk — no 2024 runtime validation |
| [Get Instrument Interface Response Timeout](/mp-command-catalog/commands/instrument-operations#get-instrument-interface-response-timeout) | **Current** | At Risk — no 2024 runtime validation |
| [Get Instrument Model](/mp-command-catalog/commands/instrument-operations#get-instrument-model) | **Current** | At Risk — no 2024 runtime validation |
| [Get Instrument Part Temperature](/mp-command-catalog/commands/instrument-operations#get-instrument-part-temperature) | **Current** | At Risk — no 2024 runtime validation |
| [Get Instrument Scale Factor](/mp-command-catalog/commands/instrument-operations#get-instrument-scale-factor) | **Current** | At Risk — no 2024 runtime validation |
| [Get Instrument Target Status](/mp-command-catalog/commands/instrument-operations#get-instrument-target-status) | **Current** | At Risk — no 2024 runtime validation |
| [Get Instrument Targets and Mode/Profiles](/mp-command-catalog/commands/instrument-operations#get-instrument-targets-and-modeprofiles) | **Current** | At Risk — no 2024 runtime validation |
| [Get Instrument Transform](/mp-command-catalog/commands/instrument-operations#get-instrument-transform) | **Current** | At Risk — no 2024 runtime validation |
| [Get Instrument Weather Setting](/mp-command-catalog/commands/instrument-operations#get-instrument-weather-setting) | **Current** | At Risk — no 2024 runtime validation |
| [Get Instruments with Observations on Target](/mp-command-catalog/commands/instrument-operations#get-instruments-with-observations-on-target) | **Current** | At Risk — no 2024 runtime validation |
| [Get Last Instrument Index](/mp-command-catalog/commands/instrument-operations#get-last-instrument-index) | **Current** | At Risk — no 2024 runtime validation |
| [Get Last Solved TCP Fixture Uncertainty Covariance Matrix](/mp-command-catalog/commands/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix) | **Current** | At Risk — no 2024 runtime validation |
| [Get Number of Observations on Target](/mp-command-catalog/commands/instrument-operations#get-number-of-observations-on-target) | **Current** | At Risk — no 2024 runtime validation |
| [Get Obscured Points from Instrument](/mp-command-catalog/commands/instrument-operations#get-obscured-points-from-instrument) | **Current** | At Risk — no 2024 runtime validation |
| [Get Observation Info](/mp-command-catalog/commands/instrument-operations#get-observation-info) | **Current** | At Risk — no 2024 runtime validation |
| [Get PCMM Instrument XYZ Uncertainties](/mp-command-catalog/commands/instrument-operations#get-pcmm-instrument-xyz-uncertainties) | **Current** | At Risk — no 2024 runtime validation |
| [Get Targets Measured by Instrument](/mp-command-catalog/commands/instrument-operations#get-targets-measured-by-instrument) | **Current** | At Risk — no 2024 runtime validation |
| [Get Tracker/EDM Theodolite Uncertainties](/mp-command-catalog/commands/instrument-operations#get-trackeredm-theodolite-uncertainties) | **Current** | At Risk — no 2024 runtime validation |
| [Get WRTL Channel and Status](/mp-command-catalog/commands/instrument-operations#get-wrtl-channel-and-status) | **Current** | At Risk — no 2024 runtime validation |
| [Get XYZ Instrument Uncertainties](/mp-command-catalog/commands/instrument-operations#get-xyz-instrument-uncertainties) | **Current** | At Risk — no 2024 runtime validation |
| [Guide Objects in 6D based on Point Measurements](/mp-command-catalog/commands/instrument-operations#guide-objects-in-6d-based-on-point-measurements) | **Current** | At Risk — no 2024 runtime validation |
| [Initiate Servo-Guide](/mp-command-catalog/commands/instrument-operations#initiate-servo-guide) | **Current** | At Risk — no 2024 runtime validation |
| [Instrument Operational Check](/mp-command-catalog/commands/instrument-operations#instrument-operational-check) | **Current** | At Risk — no 2024 runtime validation |
| [Jump Instrument To New Location](/mp-command-catalog/commands/instrument-operations#jump-instrument-to-new-location) | **Current** | At Risk — no 2024 runtime validation |
| [Load Instrument Configuration](/mp-command-catalog/commands/instrument-operations#load-instrument-configuration) | **Current** | At Risk — no 2024 runtime validation |
| [Locate Instrument (Best Fit - Group to Group)](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---group-to-group) | **Current** | At Risk — no 2024 runtime validation |
| [Locate Instrument (Best Fit - Nominal Geometry)](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---nominal-geometry) | **Current** | At Risk — no 2024 runtime validation |
| [Locate Instrument (Group to Surface Quick Fit)](/mp-command-catalog/commands/instrument-operations#locate-instrument-group-to-surface-quick-fit) | **Current** | At Risk — no 2024 runtime validation |
| [Locate Instrument (Ref. Tie-In)](/mp-command-catalog/commands/instrument-operations#locate-instrument-ref-tie-in) | **Current** | At Risk — no 2024 runtime validation |
| [Locate Instruments (USMN)](/mp-command-catalog/commands/instrument-operations#locate-instruments-usmn) | **Current** | At Risk — no 2024 runtime validation |
| [Locate Templated Instruments (USMN)](/mp-command-catalog/commands/instrument-operations#locate-templated-instruments-usmn) | **Uncommitted** | Evidence review |
| [Make a USMN Templated Instrument List](/mp-command-catalog/commands/instrument-operations#make-a-usmn-templated-instrument-list) | **Excluded** | Evidence review |
| [Make Collection Object Name Ref List from Objects associated with Instruments](/mp-command-catalog/commands/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments) | **Current** | At Risk — no 2024 runtime validation |
| [Make Surface Face List from Point Proximity](/mp-command-catalog/commands/instrument-operations#make-surface-face-list-from-point-proximity) | **Current** | At Risk — no 2024 runtime validation |
| [Measure](/mp-command-catalog/commands/instrument-operations#measure) | **Current** | At Risk — no 2024 runtime validation |
| [Measure Existing Single Point](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point) | **Current** | At Risk — no 2024 runtime validation |
| [Measure Existing Single Point (Manual Guide)](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-manual-guide) | **Current** | At Risk — no 2024 runtime validation |
| [Measure Existing Single Point and Compare](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-and-compare) | **Current** | At Risk — no 2024 runtime validation |
| [Measure Nominal Feature](/mp-command-catalog/commands/instrument-operations#measure-nominal-feature) | **Current** | At Risk — no 2024 runtime validation |
| [Measure Single Point Here](/mp-command-catalog/commands/instrument-operations#measure-single-point-here) | **Current** | At Risk — no 2024 runtime validation |
| [Move Instrument to Another Collection](/mp-command-catalog/commands/instrument-operations#move-instrument-to-another-collection) | **Current** | At Risk — no 2024 runtime validation |
| [Move Measurement Observation](/mp-command-catalog/commands/instrument-operations#move-measurement-observation) | **Current** | At Risk — no 2024 runtime validation |
| [Move Objects in 6D using Instrument Updates](/mp-command-catalog/commands/instrument-operations#move-objects-in-6d-using-instrument-updates) | **Current** | At Risk — no 2024 runtime validation |
| [Multi Measurement Initiate](/mp-command-catalog/commands/instrument-operations#multi-measurement-initiate) | **Current** | At Risk — no 2024 runtime validation |
| [Multi Measurement Stop](/mp-command-catalog/commands/instrument-operations#multi-measurement-stop) | **Current** | At Risk — no 2024 runtime validation |
| [Point At Target](/mp-command-catalog/commands/instrument-operations#point-at-target) | **Current** | At Risk — no 2024 runtime validation |
| [Quick Align](/mp-command-catalog/commands/instrument-operations#quick-align) | **Current** | At Risk — no 2024 runtime validation |
| [Rename Instrument](/mp-command-catalog/commands/instrument-operations#rename-instrument) | **Current** | At Risk — no 2024 runtime validation |
| [Save Instrument Configuration](/mp-command-catalog/commands/instrument-operations#save-instrument-configuration) | **Current** | At Risk — no 2024 runtime validation |
| [Scan CAD Faces](/mp-command-catalog/commands/instrument-operations#scan-cad-faces) | **SDK Unavailable** | Evidence review |
| [Scan within perimeter](/mp-command-catalog/commands/instrument-operations#scan-within-perimeter) | **SDK Unavailable** | Evidence review |
| [Set (absolute) Instrument Scale Factor (CAUTION!)](/mp-command-catalog/commands/instrument-operations#set-absolute-instrument-scale-factor-caution) | **Current** | At Risk — no 2024 runtime validation |
| [Set (multiply) Instrument Scale Factor (CAUTION!)](/mp-command-catalog/commands/instrument-operations#set-multiply-instrument-scale-factor-caution) | **Current** | At Risk — no 2024 runtime validation |
| [Set Instrument Base Uncertainty Covariance Matrix WRT Base](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base) | **Current** | At Risk — no 2024 runtime validation |
| [Set Instrument Base Uncertainty Covariance Matrix WRT WORLD](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world) | **Current** | At Risk — no 2024 runtime validation |
| [Set Instrument Group and Target](/mp-command-catalog/commands/instrument-operations#set-instrument-group-and-target) | **Current** | At Risk — no 2024 runtime validation |
| [Set Instrument Interface Response Timeout](/mp-command-catalog/commands/instrument-operations#set-instrument-interface-response-timeout) | **Current** | At Risk — no 2024 runtime validation |
| [Set Instrument Measurement Mode/Profile](/mp-command-catalog/commands/instrument-operations#set-instrument-measurement-modeprofile) | **Current** | At Risk — no 2024 runtime validation |
| [Set Instrument Targeting](/mp-command-catalog/commands/instrument-operations#set-instrument-targeting) | **Current** | At Risk — no 2024 runtime validation |
| [Set Instrument Transform](/mp-command-catalog/commands/instrument-operations#set-instrument-transform) | **Current** | At Risk — no 2024 runtime validation |
| [Set Instrument Weather Setting](/mp-command-catalog/commands/instrument-operations#set-instrument-weather-setting) | **Current** | At Risk — no 2024 runtime validation |
| [Set Observation Collimation Shot Options](/mp-command-catalog/commands/instrument-operations#set-observation-collimation-shot-options) | **Current** | At Risk — no 2024 runtime validation |
| [Set Observation Mirror Cube Shot Face](/mp-command-catalog/commands/instrument-operations#set-observation-mirror-cube-shot-face) | **Current** | At Risk — no 2024 runtime validation |
| [Set Observation Status](/mp-command-catalog/commands/instrument-operations#set-observation-status) | **Current** | At Risk — no 2024 runtime validation |
| [Set PCMM Instrument XYZ Uncertainties](/mp-command-catalog/commands/instrument-operations#set-pcmm-instrument-xyz-uncertainties) | **Current** | At Risk — no 2024 runtime validation |
| [Set Probe Offset Frame Offline (Select Previously Measured Frame)](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame) | **Current** | At Risk — no 2024 runtime validation |
| [Set Probe Offset Frame Online (Measure Raw Frame)](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-online-measure-raw-frame) | **Current** | At Risk — no 2024 runtime validation |
| [Set Remeasure Failed Checks Only](/mp-command-catalog/commands/instrument-operations#set-remeasure-failed-checks-only) | **Current** | At Risk — no 2024 runtime validation |
| [Set Target Computation Options](/mp-command-catalog/commands/instrument-operations#set-target-computation-options) | **Current** | At Risk — no 2024 runtime validation |
| [Set Tracker/EDM Theodolite Uncertainties](/mp-command-catalog/commands/instrument-operations#set-trackeredm-theodolite-uncertainties) | **Current** | At Risk — no 2024 runtime validation |
| [Set WRTL Channel](/mp-command-catalog/commands/instrument-operations#set-wrtl-channel) | **Current** | At Risk — no 2024 runtime validation |
| [Set XYZ Instrument Uncertainties](/mp-command-catalog/commands/instrument-operations#set-xyz-instrument-uncertainties) | **Current** | At Risk — no 2024 runtime validation |
| [Set XYZ Reference Frame Instrument Base Anchor Frame](/mp-command-catalog/commands/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame) | **Current** | At Risk — no 2024 runtime validation |
| [Start GD&T Inspection](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection) | **Current** | At Risk — no 2024 runtime validation |
| [Start GD&T Inspection Design](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-design) | **Current** | At Risk — no 2024 runtime validation |
| [Start GD&T Inspection Rehearse](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-rehearse) | **Current** | At Risk — no 2024 runtime validation |
| [Start Instrument Interface](/mp-command-catalog/commands/instrument-operations#start-instrument-interface) | **Current** | At Risk — no 2024 runtime validation |
| [Start Theodolite Interface](/mp-command-catalog/commands/instrument-operations#start-theodolite-interface) | **Current** | At Risk — no 2024 runtime validation |
| [Stop Active Measurement Mode](/mp-command-catalog/commands/instrument-operations#stop-active-measurement-mode) | **Current** | At Risk — no 2024 runtime validation |
| [Stop Instrument Interface](/mp-command-catalog/commands/instrument-operations#stop-instrument-interface) | **Current** | At Risk — no 2024 runtime validation |
| [Synchronized Measurement (Master/Slave)](/mp-command-catalog/commands/instrument-operations#synchronized-measurement-masterslave) | **Current** | At Risk — no 2024 runtime validation |
| [Track Tape Measurement](/mp-command-catalog/commands/instrument-operations#track-tape-measurement) | **Current** | At Risk — no 2024 runtime validation |
| [Transform Instrument - Frame To Frame](/mp-command-catalog/commands/instrument-operations#transform-instrument---frame-to-frame) | **Current** | At Risk — no 2024 runtime validation |
| [Transform Instrument by Delta](/mp-command-catalog/commands/instrument-operations#transform-instrument-by-delta) | **Current** | At Risk — no 2024 runtime validation |
| [Transform Multiple Instruments By Delta](/mp-command-catalog/commands/instrument-operations#transform-multiple-instruments-by-delta) | **Current** | At Risk — no 2024 runtime validation |
| [Verify Instrument Connection](/mp-command-catalog/commands/instrument-operations#verify-instrument-connection) | **Current** | At Risk — no 2024 runtime validation |
| [Wait For Trapping To Complete](/mp-command-catalog/commands/instrument-operations#wait-for-trapping-to-complete) | **Current** | At Risk — no 2024 runtime validation |
| [Watch Closest Point](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-closest-point) | **Current** | At Risk — no 2024 runtime validation |
| [Watch Instrument](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-instrument) | **Current** | At Risk — no 2024 runtime validation |
| [Watch Point To Edge](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-edge) | **Current** | At Risk — no 2024 runtime validation |
| [Watch Point To Objects](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-objects) | **Current** | At Risk — no 2024 runtime validation |
| [Watch Point To Point](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point) | **Current** | At Risk — no 2024 runtime validation |
| [Watch Point To Point With View Zooming](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming) | **Current** | At Risk — no 2024 runtime validation |
| [Watch Window Template 3D](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-window-template-3d) | **Uncommitted** | Evidence review |

## Subgroups

- [Advanced Instrument Operations](./instrument-operations-advanced-instrument-operations.md)
- [Crib Sheet Operations](./instrument-operations-crib-sheet-operations.md)
- [Laser Projection](./instrument-operations-laser-projection.md)
- [Nikon Metrology Laser Radars LR](./instrument-operations-nikon-metrology-laser-radars-lr.md)

[All 2024 Groups](./group-hierarchy.md) · [Review Notes](./review-notes.md)
