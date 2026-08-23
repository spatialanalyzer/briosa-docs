---
title: Robot Operations
description: Next gRPC contracts for reviewed Robot Operations MP commands.
toc_max_heading_level: 2
---

# Robot Operations

:::note[Next Contracts]

These contracts cover all thirty-three group commands and are not callable
until released.

:::

All RPCs use `briosa.RobotOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay. Briosa
does not infer machine state or add motion and kinematic preflights.

## Shared Choice Types

```proto
enum RobotModelLinkType {
  ROBOT_MODEL_LINK_TYPE_UNSPECIFIED = 0;
  ROBOT_MODEL_LINK_TYPE_DH = 1;
  ROBOT_MODEL_LINK_TYPE_SIX_DOF = 2;
}

enum RobotActiveJointComponent {
  ROBOT_ACTIVE_JOINT_COMPONENT_UNSPECIFIED = 0;
  ROBOT_ACTIVE_JOINT_COMPONENT_NONE = 1;
  ROBOT_ACTIVE_JOINT_COMPONENT_X = 2;
  ROBOT_ACTIVE_JOINT_COMPONENT_Y = 3;
  ROBOT_ACTIVE_JOINT_COMPONENT_Z = 4;
  ROBOT_ACTIVE_JOINT_COMPONENT_RX = 5;
  ROBOT_ACTIVE_JOINT_COMPONENT_RY = 6;
  ROBOT_ACTIVE_JOINT_COMPONENT_RZ = 7;
  ROBOT_ACTIVE_JOINT_COMPONENT_ALPHA = 8;
  ROBOT_ACTIVE_JOINT_COMPONENT_A = 9;
  ROBOT_ACTIVE_JOINT_COMPONENT_D = 10;
  ROBOT_ACTIVE_JOINT_COMPONENT_THETA = 11;
}
```

The server maps these enums to exact MP choices `DH` and `6DOF`, and `NONE`,
`X`, `Y`, `Z`, `Rx`, `Ry`, `Rz`, `Alpha`, `A`, `D`, and `THETA`.

## Shared Calibration Result

```proto
message RobotCalibrationMetrics {
  double xyz_max = 1;
  double xyz_average = 2;
  double xyz_rms = 3;
  double orient_max = 4;
  double orient_average = 5;
  double orient_rms = 6;
  double robustness = 7;
}
```

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Add Robot/Machine (.SAMachine) | `AddRobotMachineSaMachine` | `robot_operations.add_robot_machine_sa_machine` |
| Add Robot/Machine (.ManipKin) | `AddRobotMachineManipKin` | `robot_operations.add_robot_machine_manip_kin` |
| Delete Robot/Machine | `DeleteRobotMachine` | `robot_operations.delete_robot_machine` |
| Move Robot/Machine to Frame | `MoveRobotMachineToFrame` | `robot_operations.move_robot_machine_to_frame` |
| Move Robot/Machine through Path | `MoveRobotMachineThroughPath` | `robot_operations.move_robot_machine_through_path` |
| Move Robot/Machine to Named Destination | `MoveRobotMachineToNamedDestination` | `robot_operations.move_robot_machine_to_named_destination` |
| Set Robot/Machine Parameter | `SetRobotMachineParameter` | `robot_operations.set_robot_machine_parameter` |
| Get Robot/Machine Parameter | `GetRobotMachineParameter` | `robot_operations.get_robot_machine_parameter` |
| Set Robot/Machine Model Link Parameters | `SetRobotMachineModelLinkParameters` | `robot_operations.set_robot_machine_model_link_parameters` |
| Get Robot/Machine Model Link Parameters | `GetRobotMachineModelLinkParameters` | `robot_operations.get_robot_machine_model_link_parameters` |
| Set Robot/Machine Base Transform | `SetRobotMachineBaseTransform` | `robot_operations.set_robot_machine_base_transform` |
| Start Robot/Machine Interface | `StartRobotMachineInterface` | `robot_operations.start_robot_machine_interface` |
| Stop Robot/Machine Interface | `StopRobotMachineInterface` | `robot_operations.stop_robot_machine_interface` |
| Compute Robot/Machine Adjusted Goal Frame | `ComputeRobotMachineAdjustedGoalFrame` | `robot_operations.compute_robot_machine_adjusted_goal_frame` |
| Move Robot/Machine to Joint Pose (6DOF) | `MoveRobotMachineToJointPoseSixDof` | `robot_operations.move_robot_machine_to_joint_pose_six_dof` |
| Simulate Robot/Machine Path, Output CSV File | `SimulateRobotMachinePathOutputCsvFile` | `robot_operations.simulate_robot_machine_path_output_csv_file` |
| Create Robot Calibration | `CreateRobotCalibration` | `robot_operations.create_robot_calibration` |
| Delete Robot Calibration | `DeleteRobotCalibration` | `robot_operations.delete_robot_calibration` |
| Import Poses Match to Measurements | `ImportPosesMatchToMeasurements` | `robot_operations.import_poses_match_to_measurements` |
| Import Poses Match to Frames | `ImportPosesMatchToFrames` | `robot_operations.import_poses_match_to_frames` |
| Perform Robot Calibration | `PerformRobotCalibration` | `robot_operations.perform_robot_calibration` |
| Perform Robot Calibration (Alternate) | `PerformRobotCalibrationAlternate` | `robot_operations.perform_robot_calibration_alternate` |
| Start/Stop Robot Calibration Trapping | `StartStopRobotCalibrationTrapping` | `robot_operations.start_stop_robot_calibration_trapping` |
| Set Active Robot Calibration | `SetActiveRobotCalibration` | `robot_operations.set_active_robot_calibration` |
| Set Robot Calibration Tool Frame | `SetRobotCalibrationToolFrame` | `robot_operations.set_robot_calibration_tool_frame` |
| Set Robot Calibration Measurement Offset In Tool Frame | `SetRobotCalibrationMeasurementOffsetInToolFrame` | `robot_operations.set_robot_calibration_measurement_offset_in_tool_frame` |
| Get Robot Pose for a Frame | `GetRobotPoseForAFrame` | `robot_operations.get_robot_pose_for_a_frame` |
| Get Calibration Appliance Integer Value | `GetCalibrationApplianceIntegerValue` | `robot_operations.get_calibration_appliance_integer_value` |
| Set Calibration Appliance Integer Value | `SetCalibrationApplianceIntegerValue` | `robot_operations.set_calibration_appliance_integer_value` |
| Get Calibration Appliance Real Value | `GetCalibrationApplianceRealValue` | `robot_operations.get_calibration_appliance_real_value` |
| Set Calibration Appliance Real Value | `SetCalibrationApplianceRealValue` | `robot_operations.set_calibration_appliance_real_value` |
| Get Calibration Appliance Data | `GetCalibrationApplianceData` | `robot_operations.get_calibration_appliance_data` |
| Set Calibration Appliance Data | `SetCalibrationApplianceData` | `robot_operations.set_calibration_appliance_data` |

## Add Robot/Machine (.SAMachine)

[MP command](/mp-command-catalog/commands/robot-operations#add-robotmachine-samachine)

```proto
rpc AddRobotMachineSaMachine(AddRobotMachineSaMachineRequest) returns (AddRobotMachineSaMachineResult);
message AddRobotMachineSaMachineRequest {
  optional FileReference sa_machine_file = 1;
}
message AddRobotMachineSaMachineResult {
  MpExecutionDetails execution = 1000;
}
```

`sa_machine_file` is required and maps to `.SAMachine File`. It may identify a
local-SA path or an embedded file through the shared `FileReference` contract.

## Add Robot/Machine (.ManipKin)

[MP command](/mp-command-catalog/commands/robot-operations#add-robotmachine-manipkin)

```proto
rpc AddRobotMachineManipKin(AddRobotMachineManipKinRequest) returns (AddRobotMachineManipKinResult);
message AddRobotMachineManipKinRequest {
  optional FileReference manip_kin_file = 1;
}
message AddRobotMachineManipKinResult {
  MpExecutionDetails execution = 1000;
}
```

`manip_kin_file` is required and maps to `.ManipKin File`. It uses the shared
local-path or embedded-file representation.

## Delete Robot/Machine

[MP command](/mp-command-catalog/commands/robot-operations#delete-robotmachine)

```proto
rpc DeleteRobotMachine(DeleteRobotMachineRequest) returns (DeleteRobotMachineResult);
message DeleteRobotMachineRequest {
  optional CollectionMachineId machine_id = 1;
}
message DeleteRobotMachineResult {
  MpExecutionDetails execution = 1000;
}
```

The machine identity is required. Briosa adds no dependency preflight.

## Move Robot/Machine to Frame

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-frame)

```proto
rpc MoveRobotMachineToFrame(MoveRobotMachineToFrameRequest) returns (MoveRobotMachineToFrameResult);
message MoveRobotMachineToFrameRequest {
  optional CollectionMachineId machine_id = 1;
  optional CollectionObjectName destination_frame = 2;
  optional bool use_sa_kinematics = 3;
  optional bool acknowledge_arrival = 4;
}
message MoveRobotMachineToFrameResult {
  optional Transform actual_transform_in_working = 1;
  MpExecutionDetails execution = 1000;
}
```

The machine and destination Frame are required. `use_sa_kinematics` and
`acknowledge_arrival` both default to `false`.

## Move Robot/Machine through Path

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-through-path)

```proto
rpc MoveRobotMachineThroughPath(MoveRobotMachineThroughPathRequest) returns (MoveRobotMachineThroughPathResult);
message MoveRobotMachineThroughPathRequest {
  optional CollectionMachineId machine_id = 1;
  repeated CollectionObjectName path_frames = 2;
  optional bool use_sa_kinematics = 3;
  optional bool linear_segments = 4;
  optional bool acknowledge_arrival = 5;
}
message MoveRobotMachineThroughPathResult {
  MpExecutionDetails execution = 1000;
}
```

The machine and Frame path are required. The exact defaults are `true` for SA
kinematics, `false` for linear segments, and `true` for arrival
acknowledgement.

## Move Robot/Machine to Named Destination

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-named-destination)

```proto
rpc MoveRobotMachineToNamedDestination(MoveRobotMachineToNamedDestinationRequest) returns (MoveRobotMachineToNamedDestinationResult);
message MoveRobotMachineToNamedDestinationRequest {
  optional CollectionMachineId machine_id = 1;
  optional string destination_name = 2;
  optional bool acknowledge_arrival = 3;
}
message MoveRobotMachineToNamedDestinationResult {
  optional Transform actual_transform_in_working = 1;
  MpExecutionDetails execution = 1000;
}
```

`destination_name` defaults to the exact MP empty string and
`acknowledge_arrival` defaults to `false`.

## Set Robot/Machine Parameter

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-parameter)

```proto
rpc SetRobotMachineParameter(SetRobotMachineParameterRequest) returns (SetRobotMachineParameterResult);
message SetRobotMachineParameterRequest {
  optional CollectionMachineId machine_id = 1;
  optional string parameter_name = 2;
  optional double parameter_value = 3;
}
message SetRobotMachineParameterResult {
  MpExecutionDetails execution = 1000;
}
```

The machine-specific parameter name defaults to an empty string and its value
defaults to `0.0`. Briosa adds no parameter allowlist.

## Get Robot/Machine Parameter

[MP command](/mp-command-catalog/commands/robot-operations#get-robotmachine-parameter)

```proto
rpc GetRobotMachineParameter(GetRobotMachineParameterRequest) returns (GetRobotMachineParameterResult);
message GetRobotMachineParameterRequest {
  optional CollectionMachineId machine_id = 1;
  optional string parameter_name = 2;
}
message GetRobotMachineParameterResult {
  optional double parameter_value = 1;
  MpExecutionDetails execution = 1000;
}
```

The public identity remains `CollectionMachineId`; the handwritten SDK mapping
uses the exact command's collection-instrument argument setter.

## Set Robot/Machine Model Link Parameters

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-model-link-parameters)

```proto
rpc SetRobotMachineModelLinkParameters(SetRobotMachineModelLinkParametersRequest) returns (SetRobotMachineModelLinkParametersResult);
message SetRobotMachineModelLinkParametersRequest {
  optional CollectionMachineId machine_id = 1;
  optional string link_name = 2;
  optional RobotModelLinkType link_type = 3;
  optional double dh_alpha_component = 4;
  optional double dh_a_component = 5;
  optional double dh_d_component = 6;
  optional double dh_theta_component = 7;
  optional double dh_x_axis_deflection_factor = 8;
  optional double dh_y_axis_deflection_factor = 9;
  optional double dh_z_axis_deflection_factor = 10;
  optional double six_dof_x_component = 11;
  optional double six_dof_y_component = 12;
  optional double six_dof_z_component = 13;
  optional double six_dof_rx_component = 14;
  optional double six_dof_ry_component = 15;
  optional double six_dof_rz_component = 16;
  optional RobotActiveJointComponent active_joint_component = 17;
  optional double encoder_offset_value = 18;
  optional double minimum_encoder_limit = 19;
  optional double maximum_encoder_limit = 20;
  optional bool encoder_sense_negative = 21;
  optional bool include_additional_encoder = 22;
  optional int32 additional_encoder_index_offset = 23;
  optional bool additional_encoder_sense_negative = 24;
  optional double segment_origin_mass_kg = 25;
  optional double segment_cg_mass_kg = 26;
  optional Vector segment_cg_in_segment = 27;
}
message SetRobotMachineModelLinkParametersResult {
  MpExecutionDetails execution = 1000;
}
```

`link_type` defaults to `DH`, `active_joint_component` defaults to `NONE`, all
numeric fields default to zero, both encoder booleans default to `false`, and
the segment CG vector defaults to zero. The normalized
`six_dof_z_component` field maps internally to the exact SDK argument literal
`6DPF Z Component`.

## Get Robot/Machine Model Link Parameters

[MP command](/mp-command-catalog/commands/robot-operations#get-robotmachine-model-link-parameters)

```proto
rpc GetRobotMachineModelLinkParameters(GetRobotMachineModelLinkParametersRequest) returns (GetRobotMachineModelLinkParametersResult);
message GetRobotMachineModelLinkParametersRequest {
  optional CollectionMachineId machine_id = 1;
  optional string link_name = 2;
}
message GetRobotMachineModelLinkParametersResult {
  optional RobotModelLinkType link_type = 1;
  optional double dh_alpha_component = 2;
  optional double dh_a_component = 3;
  optional double dh_d_component = 4;
  optional double dh_theta_component = 5;
  optional double dh_x_axis_deflection_factor = 6;
  optional double dh_y_axis_deflection_factor = 7;
  optional double dh_z_axis_deflection_factor = 8;
  optional double six_dof_x_component = 9;
  optional double six_dof_y_component = 10;
  optional double six_dof_z_component = 11;
  optional double six_dof_rx_component = 12;
  optional double six_dof_ry_component = 13;
  optional double six_dof_rz_component = 14;
  optional RobotActiveJointComponent active_joint_component = 15;
  optional double encoder_value = 16;
  optional double encoder_offset_value = 17;
  optional double minimum_encoder_limit = 18;
  optional double maximum_encoder_limit = 19;
  optional bool encoder_sense_negative = 20;
  optional bool include_additional_encoder = 21;
  optional int32 additional_encoder_index_offset = 22;
  optional bool additional_encoder_sense_negative = 23;
  optional double segment_origin_mass_kg = 24;
  optional double segment_cg_mass_kg = 25;
  optional Vector segment_cg_in_segment = 26;
  MpExecutionDetails execution = 1000;
}
```

The result preserves the complete exact export, including `Encoder Value`.
`six_dof_z_component` is retrieved from the exact SDK literal
`6DPF Z Component`.

## Set Robot/Machine Base Transform

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-base-transform)

```proto
rpc SetRobotMachineBaseTransform(SetRobotMachineBaseTransformRequest) returns (SetRobotMachineBaseTransformResult);
message SetRobotMachineBaseTransformRequest {
  optional CollectionMachineId machine_id = 1;
  optional Transform destination_transform = 2;
  optional CollectionObjectName reference_frame = 3;
  optional int32 number_of_steps = 4;
}
message SetRobotMachineBaseTransformResult {
  MpExecutionDetails execution = 1000;
}
```

The machine and reference Frame are required. Omitting the transform uses the
identity transform, and `number_of_steps` defaults to `0`.

## Start Robot/Machine Interface

[MP command](/mp-command-catalog/commands/robot-operations#start-robotmachine-interface)

```proto
rpc StartRobotMachineInterface(StartRobotMachineInterfaceRequest) returns (StartRobotMachineInterfaceResult);
message StartRobotMachineInterfaceRequest {
  optional CollectionMachineId machine_id = 1;
  optional int32 interface_type = 2;
  optional bool run_in_simulation = 3;
}
message StartRobotMachineInterfaceResult {
  MpExecutionDetails execution = 1000;
}
```

`interface_type` is machine-specific and defaults to `0`, which runs the
SARobotDriver. `run_in_simulation` defaults to `false`.

## Stop Robot/Machine Interface

[MP command](/mp-command-catalog/commands/robot-operations#stop-robotmachine-interface)

```proto
rpc StopRobotMachineInterface(StopRobotMachineInterfaceRequest) returns (StopRobotMachineInterfaceResult);
message StopRobotMachineInterfaceRequest {
  optional CollectionMachineId machine_id = 1;
}
message StopRobotMachineInterfaceResult {
  MpExecutionDetails execution = 1000;
}
```

Briosa retains no machine-interface state.

## Compute Robot/Machine Adjusted Goal Frame

[MP command](/mp-command-catalog/commands/robot-operations#compute-robotmachine-adjusted-goal-frame)

```proto
rpc ComputeRobotMachineAdjustedGoalFrame(ComputeRobotMachineAdjustedGoalFrameRequest) returns (ComputeRobotMachineAdjustedGoalFrameResult);
message ComputeRobotMachineAdjustedGoalFrameRequest {
  optional CollectionObjectName original_goal_frame = 1;
  optional CollectionObjectName last_adjusted_goal_frame = 2;
  optional CollectionObjectName actual_measured_frame = 3;
  optional CollectionObjectName modified_goal_frame = 4;
}
message ComputeRobotMachineAdjustedGoalFrameResult {
  optional Transform transform_value = 1;
  MpExecutionDetails execution = 1000;
}
```

All four Frame identities are required. Briosa executes one iteration and
returns `Transform Value`; the caller owns all multi-call state.

## Move Robot/Machine to Joint Pose (6DOF)

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-joint-pose-6dof)

```proto
rpc MoveRobotMachineToJointPoseSixDof(MoveRobotMachineToJointPoseSixDofRequest) returns (MoveRobotMachineToJointPoseSixDofResult);
message MoveRobotMachineToJointPoseSixDofRequest {
  optional CollectionMachineId machine_id = 1;
  optional double joint_1 = 2;
  optional double joint_2 = 3;
  optional double joint_3 = 4;
  optional double joint_4 = 5;
  optional double joint_5 = 6;
  optional double joint_6 = 7;
}
message MoveRobotMachineToJointPoseSixDofResult {
  MpExecutionDetails execution = 1000;
}
```

All six joint values default to `0.0` and are passed through without bounds or
hardware-state preflight.

## Simulate Robot/Machine Path, Output CSV File

[MP command](/mp-command-catalog/commands/robot-operations#simulate-robotmachine-path-output-csv-file)

```proto
rpc SimulateRobotMachinePathOutputCsvFile(SimulateRobotMachinePathOutputCsvFileRequest) returns (SimulateRobotMachinePathOutputCsvFileResult);
message SimulateRobotMachinePathOutputCsvFileRequest {
  optional CollectionMachineId machine_id = 1;
  repeated CollectionObjectName path_frames = 2;
  optional FileReference output_csv_file = 3;
}
message SimulateRobotMachinePathOutputCsvFileResult {
  MpExecutionDetails execution = 1000;
}
```

The machine, Frame path, and output file are required. `FileReference` supports
local-SA paths and embedded files.

## Create Robot Calibration

[MP command](/mp-command-catalog/commands/robot-operations#create-robot-calibration)

```proto
rpc CreateRobotCalibration(CreateRobotCalibrationRequest) returns (CreateRobotCalibrationResult);
message CreateRobotCalibrationRequest {
  optional CollectionMachineId machine_id = 1;
  optional string calibration_name = 2;
}
message CreateRobotCalibrationResult {
  MpExecutionDetails execution = 1000;
}
```

`calibration_name` defaults to the exact MP empty string.

## Delete Robot Calibration

[MP command](/mp-command-catalog/commands/robot-operations#delete-robot-calibration)

```proto
rpc DeleteRobotCalibration(DeleteRobotCalibrationRequest) returns (DeleteRobotCalibrationResult);
message DeleteRobotCalibrationRequest {
  optional CollectionMachineId machine_id = 1;
  optional string calibration_name = 2;
}
message DeleteRobotCalibrationResult {
  MpExecutionDetails execution = 1000;
}
```

Briosa adds no dependency or active-calibration preflight. The name defaults to
the exact MP empty string.

## Import Poses Match to Measurements

[MP command](/mp-command-catalog/commands/robot-operations#import-poses-match-to-measurements)

```proto
rpc ImportPosesMatchToMeasurements(ImportPosesMatchToMeasurementsRequest) returns (ImportPosesMatchToMeasurementsResult);
message ImportPosesMatchToMeasurementsRequest {
  optional CollectionMachineId machine_id = 1;
  optional string calibration_name = 2;
  repeated PointName point_names = 3;
  optional FileReference csv_joint_set_file = 4;
}
message ImportPosesMatchToMeasurementsResult {
  MpExecutionDetails execution = 1000;
}
```

The machine, Point Name list, and CSV file are required. The calibration name
defaults to an empty string.

## Import Poses Match to Frames

[MP command](/mp-command-catalog/commands/robot-operations#import-poses-match-to-frames)

```proto
rpc ImportPosesMatchToFrames(ImportPosesMatchToFramesRequest) returns (ImportPosesMatchToFramesResult);
message ImportPosesMatchToFramesRequest {
  optional CollectionMachineId machine_id = 1;
  optional string calibration_name = 2;
  repeated CollectionObjectName frame_names = 3;
  optional FileReference csv_joint_set_file = 4;
}
message ImportPosesMatchToFramesResult {
  MpExecutionDetails execution = 1000;
}
```

The machine, Frame list, and CSV file are required. The calibration name
defaults to an empty string.

## Perform Robot Calibration

[MP command](/mp-command-catalog/commands/robot-operations#perform-robot-calibration)

```proto
rpc PerformRobotCalibration(PerformRobotCalibrationRequest) returns (PerformRobotCalibrationResult);
message PerformRobotCalibrationRequest {
  optional CollectionMachineId machine_id = 1;
  optional string calibration_name = 2;
  optional bool set_current_base_as_nominal = 3;
  // Field 4 remains available for the SDK-unavailable Degrees of Freedom input.
  optional bool show_interface = 5;
  optional int32 allowed_outlier_rejection_count = 6;
  optional double allowable_maximum_error = 7;
  optional double allowable_average_error = 8;
}
message PerformRobotCalibrationResult {
  optional RobotCalibrationMetrics metrics = 1;
  MpExecutionDetails execution = 1000;
}
```

The SA 2026.1 SDK export marks the composite `Degrees of Freedom` input
unavailable. Briosa omits it without consuming field 4 so it can be added later
without renumbering. Every exposed setting defaults to `false` or zero;
`calibration_name` defaults to empty.

## Perform Robot Calibration (Alternate)

[MP command](/mp-command-catalog/commands/robot-operations#perform-robot-calibration-alternate)

```proto
rpc PerformRobotCalibrationAlternate(PerformRobotCalibrationAlternateRequest) returns (PerformRobotCalibrationAlternateResult);
message PerformRobotCalibrationAlternateRequest {
  optional CollectionMachineId machine_id = 1;
  optional string calibration_name = 2;
  optional bool set_current_base_as_nominal = 3;
  optional string base_degrees_of_freedom = 4;
  optional string robot_degrees_of_freedom = 5;
  optional string tool_degrees_of_freedom = 6;
  optional bool show_interface = 7;
  optional int32 allowed_outlier_rejection_count = 8;
  optional double allowable_maximum_error = 9;
  optional double allowable_average_error = 10;
}
message PerformRobotCalibrationAlternateResult {
  optional RobotCalibrationMetrics metrics = 1;
  MpExecutionDetails execution = 1000;
}
```

All strings default to empty, and the Boolean and numeric inputs default to
`false` or zero. The three DOF strings are passed through without Briosa
interpretation.

## Start/Stop Robot Calibration Trapping

[MP command](/mp-command-catalog/commands/robot-operations#startstop-robot-calibration-trapping)

```proto
rpc StartStopRobotCalibrationTrapping(StartStopRobotCalibrationTrappingRequest) returns (StartStopRobotCalibrationTrappingResult);
message StartStopRobotCalibrationTrappingRequest {
  optional CollectionMachineId machine_id = 1;
  optional string calibration_name = 2;
  optional CollectionInstrumentId instrument_id = 3;
  optional bool start_trapping = 4;
}
message StartStopRobotCalibrationTrappingResult {
  MpExecutionDetails execution = 1000;
}
```

The machine and instrument are required. The calibration name defaults to empty
and `start_trapping` defaults to `false`, which stops trapping.

## Set Active Robot Calibration

[MP command](/mp-command-catalog/commands/robot-operations#set-active-robot-calibration)

```proto
rpc SetActiveRobotCalibration(SetActiveRobotCalibrationRequest) returns (SetActiveRobotCalibrationResult);
message SetActiveRobotCalibrationRequest {
  optional CollectionMachineId machine_id = 1;
  optional string calibration_name = 2;
}
message SetActiveRobotCalibrationResult {
  MpExecutionDetails execution = 1000;
}
```

The calibration name defaults to the exact MP empty string.

## Set Robot Calibration Tool Frame

[MP command](/mp-command-catalog/commands/robot-operations#set-robot-calibration-tool-frame)

```proto
rpc SetRobotCalibrationToolFrame(SetRobotCalibrationToolFrameRequest) returns (SetRobotCalibrationToolFrameResult);
message SetRobotCalibrationToolFrameRequest {
  optional CollectionMachineId machine_id = 1;
  optional string calibration_name = 2;
  optional Transform tool_frame_relative_to_flange = 3;
}
message SetRobotCalibrationToolFrameResult {
  MpExecutionDetails execution = 1000;
}
```

The name defaults to empty and the transform defaults to identity.

## Set Robot Calibration Measurement Offset In Tool Frame

[MP command](/mp-command-catalog/commands/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame)

```proto
rpc SetRobotCalibrationMeasurementOffsetInToolFrame(SetRobotCalibrationMeasurementOffsetInToolFrameRequest) returns (SetRobotCalibrationMeasurementOffsetInToolFrameResult);
message SetRobotCalibrationMeasurementOffsetInToolFrameRequest {
  optional CollectionMachineId machine_id = 1;
  optional string calibration_name = 2;
  optional Transform measurement_frame_relative_to_tool = 3;
}
message SetRobotCalibrationMeasurementOffsetInToolFrameResult {
  MpExecutionDetails execution = 1000;
}
```

The name defaults to empty and the transform defaults to identity.

## Get Robot Pose for a Frame

[MP command](/mp-command-catalog/commands/robot-operations#get-robot-pose-for-a-frame)

```proto
rpc GetRobotPoseForAFrame(GetRobotPoseForAFrameRequest) returns (GetRobotPoseForAFrameResult);
message GetRobotPoseForAFrameRequest {
  optional CollectionMachineId machine_id = 1;
  optional CollectionObjectName goal_frame = 2;
  repeated double reference_pose = 3;
  optional int32 goal_pose_count = 4;
}
message GetRobotPoseForAFrameResult {
  repeated double goal_pose = 1;
  MpExecutionDetails execution = 1000;
}
```

The machine, goal Frame, and `goal_pose_count` are required. An empty
`reference_pose` tells SA to use the current robot pose. `goal_pose_count` is
SDK retrieval metadata, not an MP input or retained state.

## Get Calibration Appliance Integer Value

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-integer-value)

```proto
rpc GetCalibrationApplianceIntegerValue(GetCalibrationApplianceIntegerValueRequest) returns (GetCalibrationApplianceIntegerValueResult);
message GetCalibrationApplianceIntegerValueRequest {
  optional int32 index_offset = 1;
}
message GetCalibrationApplianceIntegerValueResult {
  optional int32 integer_value = 1;
  MpExecutionDetails execution = 1000;
}
```

The offset defaults to `0` and is passed through without bounds preflight.

## Set Calibration Appliance Integer Value

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-integer-value)

```proto
rpc SetCalibrationApplianceIntegerValue(SetCalibrationApplianceIntegerValueRequest) returns (SetCalibrationApplianceIntegerValueResult);
message SetCalibrationApplianceIntegerValueRequest {
  optional int32 index_offset = 1;
  optional int32 integer_value = 2;
}
message SetCalibrationApplianceIntegerValueResult {
  MpExecutionDetails execution = 1000;
}
```

Both integers default to `0` and are passed through without bounds preflight.

## Get Calibration Appliance Real Value

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-real-value)

```proto
rpc GetCalibrationApplianceRealValue(GetCalibrationApplianceRealValueRequest) returns (GetCalibrationApplianceRealValueResult);
message GetCalibrationApplianceRealValueRequest {
  optional int32 index_offset = 1;
}
message GetCalibrationApplianceRealValueResult {
  optional double real_value = 1;
  MpExecutionDetails execution = 1000;
}
```

The offset defaults to `0` and is passed through without bounds preflight.

## Set Calibration Appliance Real Value

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-real-value)

```proto
rpc SetCalibrationApplianceRealValue(SetCalibrationApplianceRealValueRequest) returns (SetCalibrationApplianceRealValueResult);
message SetCalibrationApplianceRealValueRequest {
  optional int32 index_offset = 1;
  optional double real_value = 2;
}
message SetCalibrationApplianceRealValueResult {
  MpExecutionDetails execution = 1000;
}
```

The offset and value both default to `0` and are passed through without bounds
preflight.

## Get Calibration Appliance Data

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-data)

```proto
rpc GetCalibrationApplianceData(GetCalibrationApplianceDataRequest) returns (GetCalibrationApplianceDataResult);
message GetCalibrationApplianceDataRequest {
  optional int32 real_value_count = 1;
}
message GetCalibrationApplianceDataResult {
  repeated double real_values = 1;
  MpExecutionDetails execution = 1000;
}
```

`real_value_count` is required retrieval metadata because the SDK requires the
`Real Values` output dimension in advance; it is not an MP input or retained SA
state. The SDK export marks `Integer Values` unavailable, so the result exposes
only the supported real-value array.

## Set Calibration Appliance Data

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-data)

```proto
rpc SetCalibrationApplianceData(SetCalibrationApplianceDataRequest) returns (SetCalibrationApplianceDataResult);
message SetCalibrationApplianceDataRequest {
  repeated double real_values = 1;
}
message SetCalibrationApplianceDataResult {
  MpExecutionDetails execution = 1000;
}
```

`real_values` defaults to an empty array. The SDK export marks `Integer Values`
unavailable, so Briosa intentionally provides a partial real-values-only
contract.
