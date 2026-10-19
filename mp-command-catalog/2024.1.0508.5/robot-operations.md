---
title: Robot Operations in SA 2024.1.0508.5
sidebar_label: Robot Operations
description: Reviewed Robot Operations commands and released Briosa support for SpatialAnalyzer 2024.1.0508.5.
---

# Robot Operations

<p className="catalog-path">SA 2024.1.0508.5 <span aria-hidden="true">/</span> Robot Operations</p>

This group contains 33 reviewed command entries. **Current** means implemented
in Briosa Server 0.9.2 for this exact target. Runtime readiness and policy still apply. Follow a
command link for its exact-target signature, disposition, and version differences.

| MP Command | Status | Validation |
| --- | --- | --- |
| [Add Robot/Machine (.ManipKin)](/mp-command-catalog/commands/robot-operations#add-robotmachine-manipkin) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Add Robot/Machine (.SAMachine)](/mp-command-catalog/commands/robot-operations#add-robotmachine-samachine) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Compute Robot/Machine Adjusted Goal Frame](/mp-command-catalog/commands/robot-operations#compute-robotmachine-adjusted-goal-frame) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Create Robot Calibration](/mp-command-catalog/commands/robot-operations#create-robot-calibration) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Delete Robot Calibration](/mp-command-catalog/commands/robot-operations#delete-robot-calibration) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Delete Robot/Machine](/mp-command-catalog/commands/robot-operations#delete-robotmachine) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Calibration Appliance Data](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-data) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Calibration Appliance Integer Value](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-integer-value) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Calibration Appliance Real Value](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-real-value) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Robot Pose for a Frame](/mp-command-catalog/commands/robot-operations#get-robot-pose-for-a-frame) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Robot/Machine Model Link Parameters](/mp-command-catalog/commands/robot-operations#get-robotmachine-model-link-parameters) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Get Robot/Machine Parameter](/mp-command-catalog/commands/robot-operations#get-robotmachine-parameter) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Import Poses Match to Frames](/mp-command-catalog/commands/robot-operations#import-poses-match-to-frames) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Import Poses Match to Measurements](/mp-command-catalog/commands/robot-operations#import-poses-match-to-measurements) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Move Robot/Machine through Path](/mp-command-catalog/commands/robot-operations#move-robotmachine-through-path) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Move Robot/Machine to Frame](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-frame) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Move Robot/Machine to Joint Pose (6DOF)](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-joint-pose-6dof) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Move Robot/Machine to Named Destination](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-named-destination) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Perform Robot Calibration](/mp-command-catalog/commands/robot-operations#perform-robot-calibration) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Perform Robot Calibration (Alternate)](/mp-command-catalog/commands/robot-operations#perform-robot-calibration-alternate) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Active Robot Calibration](/mp-command-catalog/commands/robot-operations#set-active-robot-calibration) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Calibration Appliance Data](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-data) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Calibration Appliance Integer Value](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-integer-value) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Calibration Appliance Real Value](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-real-value) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Robot Calibration Measurement Offset In Tool Frame](/mp-command-catalog/commands/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Robot Calibration Tool Frame](/mp-command-catalog/commands/robot-operations#set-robot-calibration-tool-frame) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Robot/Machine Base Transform](/mp-command-catalog/commands/robot-operations#set-robotmachine-base-transform) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Robot/Machine Model Link Parameters](/mp-command-catalog/commands/robot-operations#set-robotmachine-model-link-parameters) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Set Robot/Machine Parameter](/mp-command-catalog/commands/robot-operations#set-robotmachine-parameter) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Simulate Robot/Machine Path, Output CSV File](/mp-command-catalog/commands/robot-operations#simulate-robotmachine-path-output-csv-file) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Start Robot/Machine Interface](/mp-command-catalog/commands/robot-operations#start-robotmachine-interface) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Start/Stop Robot Calibration Trapping](/mp-command-catalog/commands/robot-operations#startstop-robot-calibration-trapping) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Stop Robot/Machine Interface](/mp-command-catalog/commands/robot-operations#stop-robotmachine-interface) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |

[All 2024 Groups](./group-hierarchy.md) · [Review Notes](./review-notes.md)
