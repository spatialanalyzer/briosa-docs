---
title: Instrument Operations in SA 2026.1.0529.7
sidebar_label: Instrument Operations
description: Reviewed Instrument Operations root commands for exact SpatialAnalyzer target 2026.1.0529.7.
---

# Instrument Operations

<p className="catalog-path">SA 2026.1.0529.7 <span aria-hidden="true">/</span> Instrument Operations</p>

All 139 root-group commands have been reviewed: 136 are **Current**, one is
**Uncommitted**, and two are **Excluded**.

| MP Command | Briosa Status |
| --- | --- |
| [Get Last Instrument Index](/mp-command-catalog/commands/instrument-operations#get-last-instrument-index) | **Current** |
| [Rename Instrument](/mp-command-catalog/commands/instrument-operations#rename-instrument) | **Current** |
| [Get Instrument ID from Name](/mp-command-catalog/commands/instrument-operations#get-instrument-id-from-name) | **Current** |
| [Get Instrument Model](/mp-command-catalog/commands/instrument-operations#get-instrument-model) | **Current** |
| [Move Instrument to Another Collection](/mp-command-catalog/commands/instrument-operations#move-instrument-to-another-collection) | **Current** |
| [Save Instrument Configuration](/mp-command-catalog/commands/instrument-operations#save-instrument-configuration) | **Current** |
| [Load Instrument Configuration](/mp-command-catalog/commands/instrument-operations#load-instrument-configuration) | **Current** |
| [Export Instrument History to XML File](/mp-command-catalog/commands/instrument-operations#export-instrument-history-to-xml-file) | **Current** |
| [Point At Target](/mp-command-catalog/commands/instrument-operations#point-at-target) | **Current** |
| [Measure Single Point Here](/mp-command-catalog/commands/instrument-operations#measure-single-point-here) | **Current** |
| [Get Current Instrument Position Update](/mp-command-catalog/commands/instrument-operations#get-current-instrument-position-update) | **Current** |
| ['Build' Target](/mp-command-catalog/commands/instrument-operations#build-target) | **Current** |
| [Measure Existing Single Point](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point) | **Current** |
| [Measure Existing Single Point (Manual Guide)](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-manual-guide) | **Current** |
| [Measure Existing Single Point and Compare](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-and-compare) | **Current** |
| [Set Probe Offset Frame Online (Measure Raw Frame)](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-online-measure-raw-frame) | **Current** |
| [Set Probe Offset Frame Offline (Select Previously Measured Frame)](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame) | **Current** |
| [Stop Active Measurement Mode](/mp-command-catalog/commands/instrument-operations#stop-active-measurement-mode) | **Current** |
| [Enable/Disable Frame Set Scan Mode (All Instruments)](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments) | **Current** |
| [Enable/Disable Frame Set Scan Mode (By Instrument)](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument) | **Current** |
| [Enable/Disable Point Set Scan Mode](/mp-command-catalog/commands/instrument-operations#enabledisable-point-set-scan-mode) | **Current** |
| [Add New Instrument](/mp-command-catalog/commands/instrument-operations#add-new-instrument) | **Current** |
| [Delete Instrument](/mp-command-catalog/commands/instrument-operations#delete-instrument) | **Current** |
| [Delete Measurements](/mp-command-catalog/commands/instrument-operations#delete-measurements) | **Current** |
| [Delete Measurement Observation](/mp-command-catalog/commands/instrument-operations#delete-measurement-observation) | **Current** |
| [Move Measurement Observation](/mp-command-catalog/commands/instrument-operations#move-measurement-observation) | **Current** |
| [Initiate Servo-Guide](/mp-command-catalog/commands/instrument-operations#initiate-servo-guide) | **Current** |
| [Start Theodolite Interface](/mp-command-catalog/commands/instrument-operations#start-theodolite-interface) | **Current** |
| [Start Instrument Interface](/mp-command-catalog/commands/instrument-operations#start-instrument-interface) | **Current** |
| [Stop Instrument Interface](/mp-command-catalog/commands/instrument-operations#stop-instrument-interface) | **Current** |
| [Activate/Deactivate Instrument Toolbar](/mp-command-catalog/commands/instrument-operations#activatedeactivate-instrument-toolbar) | **Current** |
| [Verify Instrument Connection](/mp-command-catalog/commands/instrument-operations#verify-instrument-connection) | **Current** |
| [Configure and Measure](/mp-command-catalog/commands/instrument-operations#configure-and-measure) | **Current** |
| [Measure](/mp-command-catalog/commands/instrument-operations#measure) | **Current** |
| [Set XYZ Reference Frame Instrument Base Anchor Frame](/mp-command-catalog/commands/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame) | **Current** |
| [Dock Instrument Interface](/mp-command-catalog/commands/instrument-operations#dock-instrument-interface) | **Current** |
| [Locate Instrument (Ref. Tie-In)](/mp-command-catalog/commands/instrument-operations#locate-instrument-ref-tie-in) | **Current** |
| [Locate Instrument (Group to Surface Quick Fit)](/mp-command-catalog/commands/instrument-operations#locate-instrument-group-to-surface-quick-fit) | **Current** |
| [Multi Measurement Initiate](/mp-command-catalog/commands/instrument-operations#multi-measurement-initiate) | **Current** |
| [Multi Measurement Stop](/mp-command-catalog/commands/instrument-operations#multi-measurement-stop) | **Current** |
| [Align Laser Projector](/mp-command-catalog/commands/instrument-operations#align-laser-projector) | **Current** |
| [Locate Instruments (USMN)](/mp-command-catalog/commands/instrument-operations#locate-instruments-usmn) | **Current** |
| [Locate Templated Instruments (USMN)](/mp-command-catalog/commands/instrument-operations#locate-templated-instruments-usmn) | **Uncommitted** |
| [Create Templated Instrument (USMN)](/mp-command-catalog/commands/instrument-operations#create-templated-instrument-usmn) | **Current** |
| [Make a USMN Templated Instrument List](/mp-command-catalog/commands/instrument-operations#make-a-usmn-templated-instrument-list) | **Excluded** |
| [Add a USMN Templated Instrument to a USMN Templated Instrument List](/mp-command-catalog/commands/instrument-operations#add-a-usmn-templated-instrument-to-a-usmn-templated-instrument-list) | **Excluded** |
| [Locate Instrument (Best Fit - Group to Group)](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---group-to-group) | **Current** |
| [Locate Instrument (Best Fit - Nominal Geometry)](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---nominal-geometry) | **Current** |
| [Get Instrument Transform](/mp-command-catalog/commands/instrument-operations#get-instrument-transform) | **Current** |
| [Set Instrument Transform](/mp-command-catalog/commands/instrument-operations#set-instrument-transform) | **Current** |
| [Get Tracker/EDM Theodolite Uncertainties](/mp-command-catalog/commands/instrument-operations#get-trackeredm-theodolite-uncertainties) | **Current** |
| [Set Tracker/EDM Theodolite Uncertainties](/mp-command-catalog/commands/instrument-operations#set-trackeredm-theodolite-uncertainties) | **Current** |
| [Get PCMM Instrument XYZ Uncertainties](/mp-command-catalog/commands/instrument-operations#get-pcmm-instrument-xyz-uncertainties) | **Current** |
| [Set PCMM Instrument XYZ Uncertainties](/mp-command-catalog/commands/instrument-operations#set-pcmm-instrument-xyz-uncertainties) | **Current** |
| [Get XYZ Instrument Uncertainties](/mp-command-catalog/commands/instrument-operations#get-xyz-instrument-uncertainties) | **Current** |
| [Set XYZ Instrument Uncertainties](/mp-command-catalog/commands/instrument-operations#set-xyz-instrument-uncertainties) | **Current** |
| [Get Instrument Weather Setting](/mp-command-catalog/commands/instrument-operations#get-instrument-weather-setting) | **Current** |
| [Set Instrument Weather Setting](/mp-command-catalog/commands/instrument-operations#set-instrument-weather-setting) | **Current** |
| [Get Instrument Part Temperature](/mp-command-catalog/commands/instrument-operations#get-instrument-part-temperature) | **Current** |
| [Compute CTE Scale Factor](/mp-command-catalog/commands/instrument-operations#compute-cte-scale-factor) | **Current** |
| [Set (multiply) Instrument Scale Factor (CAUTION!)](/mp-command-catalog/commands/instrument-operations#set-multiply-instrument-scale-factor-caution) | **Current** |
| [Set (absolute) Instrument Scale Factor (CAUTION!)](/mp-command-catalog/commands/instrument-operations#set-absolute-instrument-scale-factor-caution) | **Current** |
| [Get Instrument Scale Factor](/mp-command-catalog/commands/instrument-operations#get-instrument-scale-factor) | **Current** |
| [Transform Instrument - Frame To Frame](/mp-command-catalog/commands/instrument-operations#transform-instrument---frame-to-frame) | **Current** |
| [Transform Instrument by Delta](/mp-command-catalog/commands/instrument-operations#transform-instrument-by-delta) | **Current** |
| [Transform Multiple Instruments By Delta](/mp-command-catalog/commands/instrument-operations#transform-multiple-instruments-by-delta) | **Current** |
| [Instrument Operational Check](/mp-command-catalog/commands/instrument-operations#instrument-operational-check) | **Current** |
| [Get Number of Observations on Target](/mp-command-catalog/commands/instrument-operations#get-number-of-observations-on-target) | **Current** |
| [Get Instruments with Observations on Target](/mp-command-catalog/commands/instrument-operations#get-instruments-with-observations-on-target) | **Current** |
| [Get Targets Measured by Instrument](/mp-command-catalog/commands/instrument-operations#get-targets-measured-by-instrument) | **Current** |
| [Set Observation Status](/mp-command-catalog/commands/instrument-operations#set-observation-status) | **Current** |
| [Get Observation Info](/mp-command-catalog/commands/instrument-operations#get-observation-info) | **Current** |
| [Fabricate Observations](/mp-command-catalog/commands/instrument-operations#fabricate-observations) | **Current** |
| [Get Obscured Points from Instrument](/mp-command-catalog/commands/instrument-operations#get-obscured-points-from-instrument) | **Current** |
| [Get Instrument Targets and Mode/Profiles](/mp-command-catalog/commands/instrument-operations#get-instrument-targets-and-modeprofiles) | **Current** |
| [Set Instrument Measurement Mode/Profile](/mp-command-catalog/commands/instrument-operations#set-instrument-measurement-modeprofile) | **Current** |
| [Set Instrument Group and Target](/mp-command-catalog/commands/instrument-operations#set-instrument-group-and-target) | **Current** |
| [Set Instrument Targeting](/mp-command-catalog/commands/instrument-operations#set-instrument-targeting) | **Current** |
| [Get Instrument Measurement Mode/Profile](/mp-command-catalog/commands/instrument-operations#get-instrument-measurement-modeprofile) | **Current** |
| [Get Instrument Group and Target](/mp-command-catalog/commands/instrument-operations#get-instrument-group-and-target) | **Current** |
| [Get Instrument Targeting](/mp-command-catalog/commands/instrument-operations#get-instrument-targeting) | **Current** |
| [Set Target Computation Options](/mp-command-catalog/commands/instrument-operations#set-target-computation-options) | **Current** |
| [Set Observation Mirror Cube Shot Face](/mp-command-catalog/commands/instrument-operations#set-observation-mirror-cube-shot-face) | **Current** |
| [Set Observation Collimation Shot Options](/mp-command-catalog/commands/instrument-operations#set-observation-collimation-shot-options) | **Current** |
| [Collimation](/mp-command-catalog/commands/instrument-operations#collimation) | **Current** |
| [Get Instrument Target Status](/mp-command-catalog/commands/instrument-operations#get-instrument-target-status) | **Current** |
| [Make Surface Face List from Point Proximity](/mp-command-catalog/commands/instrument-operations#make-surface-face-list-from-point-proximity) | **Current** |
| [Scan within perimeter](/mp-command-catalog/commands/instrument-operations#scan-within-perimeter) | **Current** |
| [Edit Scan Perimeter Profile](/mp-command-catalog/commands/instrument-operations#edit-scan-perimeter-profile) | **Current** |
| [Get Estimated Scan Time](/mp-command-catalog/commands/instrument-operations#get-estimated-scan-time) | **Current** |
| [Construct Perimeters from Surface Face List](/mp-command-catalog/commands/instrument-operations#construct-perimeters-from-surface-face-list) | **Current** |
| [Scan CAD Faces](/mp-command-catalog/commands/instrument-operations#scan-cad-faces) | **Current** |
| [Edge Scan Measurement](/mp-command-catalog/commands/instrument-operations#edge-scan-measurement) | **Current** |
| [Track Tape Measurement](/mp-command-catalog/commands/instrument-operations#track-tape-measurement) | **Current** |
| [Auto Measure Points](/mp-command-catalog/commands/instrument-operations#auto-measure-points) | **Current** |
| [Auto-Measure Vectors](/mp-command-catalog/commands/instrument-operations#auto-measure-vectors) | **Current** |
| [Auto-Measure Surface Vector Intersections](/mp-command-catalog/commands/instrument-operations#auto-measure-surface-vector-intersections) | **Current** |
| [Auto-Measure Specified Geometry](/mp-command-catalog/commands/instrument-operations#auto-measure-specified-geometry) | **Current** |
| [Auto-Measure Batch of Features](/mp-command-catalog/commands/instrument-operations#auto-measure-batch-of-features) | **Current** |
| [Auto-Correspond Closest Point](/mp-command-catalog/commands/instrument-operations#auto-correspond-closest-point) | **Current** |
| [Close Auto-Correspond Closest Point Dialog](/mp-command-catalog/commands/instrument-operations#close-auto-correspond-closest-point-dialog) | **Current** |
| [Auto-Correspond with Proximity Trigger](/mp-command-catalog/commands/instrument-operations#auto-correspond-with-proximity-trigger) | **Current** |
| [Construct Mirror from Plane](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-plane) | **Current** |
| [Construct Mirror from Two Points](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-two-points) | **Current** |
| [Drift Check](/mp-command-catalog/commands/instrument-operations#drift-check) | **Current** |
| [Measure Nominal Feature](/mp-command-catalog/commands/instrument-operations#measure-nominal-feature) | **Current** |
| [Guide Objects in 6D based on Point Measurements](/mp-command-catalog/commands/instrument-operations#guide-objects-in-6d-based-on-point-measurements) | **Current** |
| [Move Objects in 6D using Instrument Updates](/mp-command-catalog/commands/instrument-operations#move-objects-in-6d-using-instrument-updates) | **Current** |
| [Align Two Targets with Axis (WCF - X)](/mp-command-catalog/commands/instrument-operations#align-two-targets-with-axis-wcf---x) | **Current** |
| [Get Instrument Interface Response Timeout](/mp-command-catalog/commands/instrument-operations#get-instrument-interface-response-timeout) | **Current** |
| [Set Instrument Interface Response Timeout](/mp-command-catalog/commands/instrument-operations#set-instrument-interface-response-timeout) | **Current** |
| [Get Current Trapping Status](/mp-command-catalog/commands/instrument-operations#get-current-trapping-status) | **Current** |
| [Wait For Trapping To Complete](/mp-command-catalog/commands/instrument-operations#wait-for-trapping-to-complete) | **Current** |
| [Jump Instrument To New Location](/mp-command-catalog/commands/instrument-operations#jump-instrument-to-new-location) | **Current** |
| [Quick Align](/mp-command-catalog/commands/instrument-operations#quick-align) | **Current** |
| [Align Cloud to CAD](/mp-command-catalog/commands/instrument-operations#align-cloud-to-cad) | **Current** |
| [Start GD&T Inspection Design](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-design) | **Current** |
| [Start GD&T Inspection Rehearse](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-rehearse) | **Current** |
| [Start GD&T Inspection](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection) | **Current** |
| [Get Inspection Verification Mode](/mp-command-catalog/commands/instrument-operations#get-inspection-verification-mode) | **Current** |
| [Set Inspection Verification Mode](/mp-command-catalog/commands/instrument-operations#set-inspection-verification-mode) | **Current** |
| [Set Remeasure Failed Checks Only](/mp-command-catalog/commands/instrument-operations#set-remeasure-failed-checks-only) | **Current** |
| [Associate Objects with Instrument](/mp-command-catalog/commands/instrument-operations#associate-objects-with-instrument) | **Current** |
| [Disassociate Objects from Instrument](/mp-command-catalog/commands/instrument-operations#disassociate-objects-from-instrument) | **Current** |
| [Make Collection Object Name Ref List from Objects associated with Instruments](/mp-command-catalog/commands/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments) | **Current** |
| [Combine Point Groups](/mp-command-catalog/commands/instrument-operations#combine-point-groups) | **Current** |
| [Dissect Point Group](/mp-command-catalog/commands/instrument-operations#dissect-point-group) | **Current** |
| [Synchronized Measurement (Master/Slave)](/mp-command-catalog/commands/instrument-operations#synchronized-measurement-masterslave) | **Current** |
| [Create New Dynamic Reference](/mp-command-catalog/commands/instrument-operations#create-new-dynamic-reference) | **Current** |
| [Calculate TCP Fixture Uncertainties](/mp-command-catalog/commands/instrument-operations#calculate-tcp-fixture-uncertainties) | **Current** |
| [Construct TCP Fixture](/mp-command-catalog/commands/instrument-operations#construct-tcp-fixture) | **Current** |
| [Add Nominal Point to TCP Fixture](/mp-command-catalog/commands/instrument-operations#add-nominal-point-to-tcp-fixture) | **Current** |
| [Get Last Solved TCP Fixture Uncertainty Covariance Matrix](/mp-command-catalog/commands/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix) | **Current** |
| [Set Instrument Base Uncertainty Covariance Matrix WRT Base](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base) | **Current** |
| [Set Instrument Base Uncertainty Covariance Matrix WRT WORLD](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world) | **Current** |
| [Get Instrument Base Uncertainty Covariance Matrix WRT WORLD](/mp-command-catalog/commands/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world) | **Current** |
| [Construct Measured Point Uncertainty Ellipsoids](/mp-command-catalog/commands/instrument-operations#construct-measured-point-uncertainty-ellipsoids) | **Current** |
| [Get WRTL Channel and Status](/mp-command-catalog/commands/instrument-operations#get-wrtl-channel-and-status) | **Current** |
| [Set WRTL Channel](/mp-command-catalog/commands/instrument-operations#set-wrtl-channel) | **Current** |

[Open the canonical Instrument Operations command reference →](/mp-command-catalog/commands/instrument-operations)
