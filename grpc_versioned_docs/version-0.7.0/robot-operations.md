---
title: Robot Operations
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Robot Operations

[SA 2026.1.0529.7](/api/grpc/robot-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/robot-operations)

This reference covers **SA 2026.1.0529.7**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Robot/Machine (.SAMachine) {/* #add-robotmachine-samachine */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#add-robotmachine-samachine)

`/briosa.RobotOperations/AddRobotMachineSaMachine` · Operation ID: `robot_operations.add_robot_machine_sa_machine`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sa_machine_file` | `optional FileReference` | .SAMachine File | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddRobotMachineSaMachine(AddRobotMachineSaMachineRequest) returns (AddRobotMachineSaMachineResult);

message AddRobotMachineSaMachineRequest {
  optional FileReference sa_machine_file = 1;
}

message AddRobotMachineSaMachineResult {
  MpExecutionDetails execution = 1000;
}
```

## Add Robot/Machine (.ManipKin) {/* #add-robotmachine-manipkin */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#add-robotmachine-manipkin)

`/briosa.RobotOperations/AddRobotMachineManipKin` · Operation ID: `robot_operations.add_robot_machine_manip_kin`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `manip_kin_file` | `optional FileReference` | .ManipKin File | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddRobotMachineManipKin(AddRobotMachineManipKinRequest) returns (AddRobotMachineManipKinResult);

message AddRobotMachineManipKinRequest {
  optional FileReference manip_kin_file = 1;
}

message AddRobotMachineManipKinResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Robot/Machine {/* #delete-robotmachine */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#delete-robotmachine)

`/briosa.RobotOperations/DeleteRobotMachine` · Operation ID: `robot_operations.delete_robot_machine`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteRobotMachine(DeleteRobotMachineRequest) returns (DeleteRobotMachineResult);

message DeleteRobotMachineRequest {
  optional CollectionMachineId machine_id = 1;
}

message DeleteRobotMachineResult {
  MpExecutionDetails execution = 1000;
}
```

## Move Robot/Machine to Frame {/* #move-robotmachine-to-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-frame)

`/briosa.RobotOperations/MoveRobotMachineToFrame` · Operation ID: `robot_operations.move_robot_machine_to_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `destination_frame` | `optional CollectionObjectName` | Destination Frame | Required |
| Request | 3 | `use_sa_kinematics` | `optional bool` | Use SA Kinematics | false |
| Request | 4 | `acknowledge_arrival` | `optional bool` | Acknowledge Arrival | false |
| Result | 1 | `actual_transform_in_working` | `optional Transform` | Actual Transform In Working (result) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Move Robot/Machine through Path {/* #move-robotmachine-through-path */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-through-path)

`/briosa.RobotOperations/MoveRobotMachineThroughPath` · Operation ID: `robot_operations.move_robot_machine_through_path`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `path_frames` | `repeated CollectionObjectName` | Path Frames | Required |
| Request | 3 | `use_sa_kinematics` | `optional bool` | Use SA Kinematics | true |
| Request | 4 | `linear_segments` | `optional bool` | Linear Segments | false |
| Request | 5 | `acknowledge_arrival` | `optional bool` | Acknowledge Arrival | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Move Robot/Machine to Named Destination {/* #move-robotmachine-to-named-destination */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-named-destination)

`/briosa.RobotOperations/MoveRobotMachineToNamedDestination` · Operation ID: `robot_operations.move_robot_machine_to_named_destination`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `destination_name` | `optional string` | Destination Name | Empty |
| Request | 3 | `acknowledge_arrival` | `optional bool` | Acknowledge Arrival | false |
| Result | 1 | `actual_transform_in_working` | `optional Transform` | Actual Transform In Working (result) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Robot/Machine Parameter {/* #set-robotmachine-parameter */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-parameter)

`/briosa.RobotOperations/SetRobotMachineParameter` · Operation ID: `robot_operations.set_robot_machine_parameter`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `parameter_name` | `optional string` | Parameter Name | Empty |
| Request | 3 | `parameter_value` | `optional double` | Parameter Value | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Robot/Machine Parameter {/* #get-robotmachine-parameter */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robotmachine-parameter)

`/briosa.RobotOperations/GetRobotMachineParameter` · Operation ID: `robot_operations.get_robot_machine_parameter`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `parameter_name` | `optional string` | Parameter Name | Empty |
| Result | 1 | `parameter_value` | `optional double` | Parameter Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Robot/Machine Model Link Parameters {/* #set-robotmachine-model-link-parameters */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-model-link-parameters)

`/briosa.RobotOperations/SetRobotMachineModelLinkParameters` · Operation ID: `robot_operations.set_robot_machine_model_link_parameters`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `link_name` | `optional string` | Link Name | Empty |
| Request | 3 | `link_type` | `optional RobotModelLinkType` | Link Type | DH |
| Request | 4 | `dh_alpha_component` | `optional double` | DH ALPHA Component | 0.000000 |
| Request | 5 | `dh_a_component` | `optional double` | DH A Component | 0.000000 |
| Request | 6 | `dh_d_component` | `optional double` | DH D Component | 0.000000 |
| Request | 7 | `dh_theta_component` | `optional double` | DH THETA Component | 0.000000 |
| Request | 8 | `dh_x_axis_deflection_factor` | `optional double` | DH X-Axis Deflection Factor | 0.000000 |
| Request | 9 | `dh_y_axis_deflection_factor` | `optional double` | DH Y-Axis Deflection Factor | 0.000000 |
| Request | 10 | `dh_z_axis_deflection_factor` | `optional double` | DH Z-Axis Deflection Factor | 0.000000 |
| Request | 11 | `six_dof_x_component` | `optional double` | 6DOF X Component | 0.000000 |
| Request | 12 | `six_dof_y_component` | `optional double` | 6DOF Y Component | 0.000000 |
| Request | 13 | `six_dof_z_component` | `optional double` | 6DPF Z Component | 0.000000 |
| Request | 14 | `six_dof_rx_component` | `optional double` | 6DOF RX Component | 0.000000 |
| Request | 15 | `six_dof_ry_component` | `optional double` | 6DOF RY Component | 0.000000 |
| Request | 16 | `six_dof_rz_component` | `optional double` | 6DOF RZ Component | 0.000000 |
| Request | 17 | `active_joint_component` | `optional RobotActiveJointComponent` | Active Joint Component | NONE |
| Request | 18 | `encoder_offset_value` | `optional double` | Encoder Offset Value | 0.000000 |
| Request | 19 | `minimum_encoder_limit` | `optional double` | Minimum Encoder Limit | 0.000000 |
| Request | 20 | `maximum_encoder_limit` | `optional double` | Maximum Encoder Limit | 0.000000 |
| Request | 21 | `encoder_sense_negative` | `optional bool` | Encoder Sense Negative | false |
| Request | 22 | `include_additional_encoder` | `optional bool` | Include Additional Encoder | false |
| Request | 23 | `additional_encoder_index_offset` | `optional int32` | Additional Encoder Index Offset | 0 |
| Request | 24 | `additional_encoder_sense_negative` | `optional bool` | Additional Encoder Sense Negative | false |
| Request | 25 | `segment_origin_mass_kg` | `optional double` | Segment Origin Mass in Kg | 0.000000 |
| Request | 26 | `segment_cg_mass_kg` | `optional double` | Segment CG Mass in Kg | 0.000000 |
| Request | 27 | `segment_cg_in_segment` | `optional Vector` | Segment CG In Segment | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Robot/Machine Model Link Parameters {/* #get-robotmachine-model-link-parameters */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robotmachine-model-link-parameters)

`/briosa.RobotOperations/GetRobotMachineModelLinkParameters` · Operation ID: `robot_operations.get_robot_machine_model_link_parameters`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `link_name` | `optional string` | Link Name | Empty |
| Result | 1 | `link_type` | `optional RobotModelLinkType` | Link Type | — |
| Result | 2 | `dh_alpha_component` | `optional double` | DH ALPHA Component | — |
| Result | 3 | `dh_a_component` | `optional double` | DH A Component | — |
| Result | 4 | `dh_d_component` | `optional double` | DH D Component | — |
| Result | 5 | `dh_theta_component` | `optional double` | DH THETA Component | — |
| Result | 6 | `dh_x_axis_deflection_factor` | `optional double` | DH X-Axis Deflection Factor | — |
| Result | 7 | `dh_y_axis_deflection_factor` | `optional double` | DH Y-Axis Deflection Factor | — |
| Result | 8 | `dh_z_axis_deflection_factor` | `optional double` | DH Z-Axis Deflection Factor | — |
| Result | 9 | `six_dof_x_component` | `optional double` | 6DOF X Component | — |
| Result | 10 | `six_dof_y_component` | `optional double` | 6DOF Y Component | — |
| Result | 11 | `six_dof_z_component` | `optional double` | 6DPF Z Component | — |
| Result | 12 | `six_dof_rx_component` | `optional double` | 6DOF RX Component | — |
| Result | 13 | `six_dof_ry_component` | `optional double` | 6DOF RY Component | — |
| Result | 14 | `six_dof_rz_component` | `optional double` | 6DOF RZ Component | — |
| Result | 15 | `active_joint_component` | `optional RobotActiveJointComponent` | Active Joint Component | — |
| Result | 16 | `encoder_value` | `optional double` | Encoder Value | — |
| Result | 17 | `encoder_offset_value` | `optional double` | Encoder Offset Value | — |
| Result | 18 | `minimum_encoder_limit` | `optional double` | Minimum Encoder Limit | — |
| Result | 19 | `maximum_encoder_limit` | `optional double` | Maximum Encoder Limit | — |
| Result | 20 | `encoder_sense_negative` | `optional bool` | Encoder Sense Negative | — |
| Result | 21 | `include_additional_encoder` | `optional bool` | Include Additional Encoder | — |
| Result | 22 | `additional_encoder_index_offset` | `optional int32` | Additional Encoder Index Offset | — |
| Result | 23 | `additional_encoder_sense_negative` | `optional bool` | Additional Encoder Sense Negative | — |
| Result | 24 | `segment_origin_mass_kg` | `optional double` | Segment Origin Mass in Kg | — |
| Result | 25 | `segment_cg_mass_kg` | `optional double` | Segment CG Mass in Kg | — |
| Result | 26 | `segment_cg_in_segment` | `optional Vector` | Segment CG In Segment | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Robot/Machine Base Transform {/* #set-robotmachine-base-transform */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-base-transform)

`/briosa.RobotOperations/SetRobotMachineBaseTransform` · Operation ID: `robot_operations.set_robot_machine_base_transform`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `destination_transform` | `optional Transform` | Destination Transform | Required |
| Request | 3 | `reference_frame` | `optional CollectionObjectName` | Reference Frame | Required |
| Request | 4 | `number_of_steps` | `optional int32` | Number of Steps | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Start Robot/Machine Interface {/* #start-robotmachine-interface */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#start-robotmachine-interface)

`/briosa.RobotOperations/StartRobotMachineInterface` · Operation ID: `robot_operations.start_robot_machine_interface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `interface_type` | `optional int32` | Interface Type | 0 |
| Request | 3 | `run_in_simulation` | `optional bool` | Run in Simulation | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Stop Robot/Machine Interface {/* #stop-robotmachine-interface */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#stop-robotmachine-interface)

`/briosa.RobotOperations/StopRobotMachineInterface` · Operation ID: `robot_operations.stop_robot_machine_interface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc StopRobotMachineInterface(StopRobotMachineInterfaceRequest) returns (StopRobotMachineInterfaceResult);

message StopRobotMachineInterfaceRequest {
  optional CollectionMachineId machine_id = 1;
}

message StopRobotMachineInterfaceResult {
  MpExecutionDetails execution = 1000;
}
```

## Compute Robot/Machine Adjusted Goal Frame {/* #compute-robotmachine-adjusted-goal-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#compute-robotmachine-adjusted-goal-frame)

`/briosa.RobotOperations/ComputeRobotMachineAdjustedGoalFrame` · Operation ID: `robot_operations.compute_robot_machine_adjusted_goal_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_goal_frame` | `optional CollectionObjectName` | Original Goal Frame | Required |
| Request | 2 | `last_adjusted_goal_frame` | `optional CollectionObjectName` | Last Adjusted Goal Frame | Required |
| Request | 3 | `actual_measured_frame` | `optional CollectionObjectName` | Actual Measured Frame | Required |
| Request | 4 | `modified_goal_frame` | `optional CollectionObjectName` | Modified Goal Frame | Required |
| Result | 1 | `transform_value` | `optional Transform` | Transform Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Move Robot/Machine to Joint Pose (6DOF) {/* #move-robotmachine-to-joint-pose-6dof */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-joint-pose-6dof)

`/briosa.RobotOperations/MoveRobotMachineToJointPoseSixDof` · Operation ID: `robot_operations.move_robot_machine_to_joint_pose_six_dof`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `joint_1` | `optional double` | Joint 1 | 0.000000 |
| Request | 3 | `joint_2` | `optional double` | Joint 2 | 0.000000 |
| Request | 4 | `joint_3` | `optional double` | Joint 3 | 0.000000 |
| Request | 5 | `joint_4` | `optional double` | Joint 4 | 0.000000 |
| Request | 6 | `joint_5` | `optional double` | Joint 5 | 0.000000 |
| Request | 7 | `joint_6` | `optional double` | Joint 6 | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Simulate Robot/Machine Path, Output CSV File {/* #simulate-robotmachine-path-output-csv-file */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#simulate-robotmachine-path-output-csv-file)

`/briosa.RobotOperations/SimulateRobotMachinePathOutputCsvFile` · Operation ID: `robot_operations.simulate_robot_machine_path_output_csv_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `path_frames` | `repeated CollectionObjectName` | Path Frames | Required |
| Request | 3 | `output_csv_file` | `optional FileReference` | Output CSV File | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Create Robot Calibration {/* #create-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#create-robot-calibration)

`/briosa.RobotOperations/CreateRobotCalibration` · Operation ID: `robot_operations.create_robot_calibration`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `calibration_name` | `optional string` | Calibration Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Delete Robot Calibration {/* #delete-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#delete-robot-calibration)

`/briosa.RobotOperations/DeleteRobotCalibration` · Operation ID: `robot_operations.delete_robot_calibration`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `calibration_name` | `optional string` | Calibration Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Import Poses Match to Measurements {/* #import-poses-match-to-measurements */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#import-poses-match-to-measurements)

`/briosa.RobotOperations/ImportPosesMatchToMeasurements` · Operation ID: `robot_operations.import_poses_match_to_measurements`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `calibration_name` | `optional string` | Calibration Name | Empty |
| Request | 3 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 4 | `csv_joint_set_file` | `optional FileReference` | FilePath for CSV Joint Set File | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Import Poses Match to Frames {/* #import-poses-match-to-frames */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#import-poses-match-to-frames)

`/briosa.RobotOperations/ImportPosesMatchToFrames` · Operation ID: `robot_operations.import_poses_match_to_frames`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `calibration_name` | `optional string` | Calibration Name | Empty |
| Request | 3 | `frame_names` | `repeated CollectionObjectName` | Frame Names | Required |
| Request | 4 | `csv_joint_set_file` | `optional FileReference` | FilePath for CSV Joint Set File | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Perform Robot Calibration {/* #perform-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#perform-robot-calibration)

`/briosa.RobotOperations/PerformRobotCalibration` · Operation ID: `robot_operations.perform_robot_calibration`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `calibration_name` | `optional string` | Calibration Name | Empty |
| Request | 3 | `set_current_base_as_nominal` | `optional bool` | Set Current Base as Nominal? | false |
| Request | 5 | `show_interface` | `optional bool` | Show Interface | false |
| Request | 6 | `allowed_outlier_rejection_count` | `optional int32` | Allowed Outlier Rejection Count | 0 |
| Request | 7 | `allowable_maximum_error` | `optional double` | Allowable Maximum Error | 0.000000 |
| Request | 8 | `allowable_average_error` | `optional double` | Allowable Average Error | 0.000000 |
| Result | 1 | `metrics` | `optional RobotCalibrationMetrics` | Robustness | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Perform Robot Calibration (Alternate) {/* #perform-robot-calibration-alternate */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#perform-robot-calibration-alternate)

`/briosa.RobotOperations/PerformRobotCalibrationAlternate` · Operation ID: `robot_operations.perform_robot_calibration_alternate`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `calibration_name` | `optional string` | Calibration Name | Empty |
| Request | 3 | `set_current_base_as_nominal` | `optional bool` | Set Current Base as Nominal? | false |
| Request | 4 | `base_degrees_of_freedom` | `optional string` | BASE Degrees of Freedom | Empty |
| Request | 5 | `robot_degrees_of_freedom` | `optional string` | ROBOT Degrees of Freedom | Empty |
| Request | 6 | `tool_degrees_of_freedom` | `optional string` | TOOL Degrees of Freedom | Empty |
| Request | 7 | `show_interface` | `optional bool` | Show Interface | false |
| Request | 8 | `allowed_outlier_rejection_count` | `optional int32` | Allowed Outlier Rejection Count | 0 |
| Request | 9 | `allowable_maximum_error` | `optional double` | Allowable Maximum Error | 0.000000 |
| Request | 10 | `allowable_average_error` | `optional double` | Allowable Average Error | 0.000000 |
| Result | 1 | `metrics` | `optional RobotCalibrationMetrics` | Robustness | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Start/Stop Robot Calibration Trapping {/* #startstop-robot-calibration-trapping */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#startstop-robot-calibration-trapping)

`/briosa.RobotOperations/StartStopRobotCalibrationTrapping` · Operation ID: `robot_operations.start_stop_robot_calibration_trapping`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `calibration_name` | `optional string` | Calibration Name | Empty |
| Request | 3 | `instrument_id` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 4 | `start_trapping` | `optional bool` | Start Trapping (FALSE = Stop) | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Active Robot Calibration {/* #set-active-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-active-robot-calibration)

`/briosa.RobotOperations/SetActiveRobotCalibration` · Operation ID: `robot_operations.set_active_robot_calibration`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `calibration_name` | `optional string` | Calibration Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Robot Calibration Tool Frame {/* #set-robot-calibration-tool-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robot-calibration-tool-frame)

`/briosa.RobotOperations/SetRobotCalibrationToolFrame` · Operation ID: `robot_operations.set_robot_calibration_tool_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `calibration_name` | `optional string` | Calibration Name | Empty |
| Request | 3 | `tool_frame_relative_to_flange` | `optional Transform` | Tool Frame (relative to flange) | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Robot Calibration Measurement Offset In Tool Frame {/* #set-robot-calibration-measurement-offset-in-tool-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame)

`/briosa.RobotOperations/SetRobotCalibrationMeasurementOffsetInToolFrame` · Operation ID: `robot_operations.set_robot_calibration_measurement_offset_in_tool_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `calibration_name` | `optional string` | Calibration Name | Empty |
| Request | 3 | `measurement_frame_relative_to_tool` | `optional Transform` | Measurement Frame (relative to tool) | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Robot Pose for a Frame {/* #get-robot-pose-for-a-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robot-pose-for-a-frame)

`/briosa.RobotOperations/GetRobotPoseForAFrame` · Operation ID: `robot_operations.get_robot_pose_for_a_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `goal_frame` | `optional CollectionObjectName` | Goal Frame | Required |
| Request | 3 | `reference_pose` | `repeated double` | Reference Pose | Empty array |
| Request | 4 | `goal_pose_count` | `optional int32` | See Typed Binding | Required |
| Result | 1 | `goal_pose` | `repeated double` | Goal Pose | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Calibration Appliance Integer Value {/* #get-calibration-appliance-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-integer-value)

`/briosa.RobotOperations/GetCalibrationApplianceIntegerValue` · Operation ID: `robot_operations.get_calibration_appliance_integer_value`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `index_offset` | `optional int32` | Index Offset | 0 |
| Result | 1 | `integer_value` | `optional int32` | Integer Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Integer Value {/* #set-calibration-appliance-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-integer-value)

`/briosa.RobotOperations/SetCalibrationApplianceIntegerValue` · Operation ID: `robot_operations.set_calibration_appliance_integer_value`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `index_offset` | `optional int32` | Index Offset | 0 |
| Request | 2 | `integer_value` | `optional int32` | Integer Value | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Calibration Appliance Real Value {/* #get-calibration-appliance-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-real-value)

`/briosa.RobotOperations/GetCalibrationApplianceRealValue` · Operation ID: `robot_operations.get_calibration_appliance_real_value`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `index_offset` | `optional int32` | Index Offset | 0 |
| Result | 1 | `real_value` | `optional double` | Real Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Real Value {/* #set-calibration-appliance-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-real-value)

`/briosa.RobotOperations/SetCalibrationApplianceRealValue` · Operation ID: `robot_operations.set_calibration_appliance_real_value`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `index_offset` | `optional int32` | Index Offset | 0 |
| Request | 2 | `real_value` | `optional double` | Real Value | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Calibration Appliance Data {/* #get-calibration-appliance-data */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-data)

`/briosa.RobotOperations/GetCalibrationApplianceData` · Operation ID: `robot_operations.get_calibration_appliance_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `real_value_count` | `optional int32` | See Typed Binding | Required |
| Result | 1 | `real_values` | `repeated double` | Real Values | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Data {/* #set-calibration-appliance-data */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-data)

`/briosa.RobotOperations/SetCalibrationApplianceData` · Operation ID: `robot_operations.set_calibration_appliance_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `real_values` | `repeated double` | Real Values | Empty array |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCalibrationApplianceData(SetCalibrationApplianceDataRequest) returns (SetCalibrationApplianceDataResult);

message SetCalibrationApplianceDataRequest {
  repeated double real_values = 1;
}

message SetCalibrationApplianceDataResult {
  MpExecutionDetails execution = 1000;
}
```

## Shared Choice Types {/* #shared-choice-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Shared Calibration Result {/* #shared-calibration-result */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2026.1.0529.7)
