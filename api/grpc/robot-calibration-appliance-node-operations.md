---
title: Robot Calibration Appliance Node Operations
description: Next gRPC contracts for reviewed Robot Calibration Appliance Node MP commands.
toc_max_heading_level: 2
---

# Robot Calibration Appliance Node Operations

:::note[Next Contracts]

These contracts cover all twenty-five group commands and are not
callable until released.

:::

All RPCs use `briosa.RobotCalibrationApplianceNodeOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Add Calibration Appliance Node | `AddCalibrationApplianceNode` | `robot_calibration_appliance_node_operations.add_calibration_appliance_node` |
| Delete Calibration Appliance Node | `DeleteCalibrationApplianceNode` | `robot_calibration_appliance_node_operations.delete_calibration_appliance_node` |
| Connect/Disconnect Calibration Appliance Node | `ConnectDisconnectCalibrationApplianceNode` | `robot_calibration_appliance_node_operations.connect_disconnect_calibration_appliance_node` |
| Set Calibration Appliance Node Instrument | `SetCalibrationApplianceNodeInstrument` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_instrument` |
| Set Calibration Appliance Node Measurement Profile | `SetCalibrationApplianceNodeMeasurementProfile` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_measurement_profile` |
| Set Calibration Appliance Node Measurement Target | `SetCalibrationApplianceNodeMeasurementTarget` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_measurement_target` |
| Enable/Disable Calibration Appliance Node Instrument Auto Point | `EnableDisableCalibrationApplianceNodeInstrumentAutoPoint` | `robot_calibration_appliance_node_operations.enable_disable_calibration_appliance_node_instrument_auto_point` |
| Set Calibration Appliance Node Instrument Dwell Time | `SetCalibrationApplianceNodeInstrumentDwellTime` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_instrument_dwell_time` |
| Skip Calibration Appliance Node Measurement | `SkipCalibrationApplianceNodeMeasurement` | `robot_calibration_appliance_node_operations.skip_calibration_appliance_node_measurement` |
| Set Calibration Appliance Node Measurement Frame | `SetCalibrationApplianceNodeMeasurementFrame` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_measurement_frame` |
| Set Calibration Appliance Node Measurement Offset Transform | `SetCalibrationApplianceNodeMeasurementOffsetTransform` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_measurement_offset_transform` |
| Set Calibration Appliance Node Measurement Point Group | `SetCalibrationApplianceNodeMeasurementPointGroup` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_measurement_point_group` |
| Set Calibration Appliance Node Calibration Appliance IP Address | `SetCalibrationApplianceNodeCalibrationApplianceIpAddress` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_calibration_appliance_ip_address` |
| Set Calibration Appliance Node Trapping Node ID | `SetCalibrationApplianceNodeTrappingNodeId` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_trapping_node_id` |
| Enable/Disable Calibration Appliance Node Trap Manager | `EnableDisableCalibrationApplianceNodeTrapManager` | `robot_calibration_appliance_node_operations.enable_disable_calibration_appliance_node_trap_manager` |
| Clear Calibration Appliance Node Trap Manager Requests | `ClearCalibrationApplianceNodeTrapManagerRequests` | `robot_calibration_appliance_node_operations.clear_calibration_appliance_node_trap_manager_requests` |
| Set Calibration Appliance Node Integer Value | `SetCalibrationApplianceNodeIntegerValue` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_integer_value` |
| Get Calibration Appliance Node Integer Value | `GetCalibrationApplianceNodeIntegerValue` | `robot_calibration_appliance_node_operations.get_calibration_appliance_node_integer_value` |
| Set Calibration Appliance Node Real Value | `SetCalibrationApplianceNodeRealValue` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_real_value` |
| Get Calibration Appliance Node Real Value | `GetCalibrationApplianceNodeRealValue` | `robot_calibration_appliance_node_operations.get_calibration_appliance_node_real_value` |
| Set Calibration Appliance Node Data | `SetCalibrationApplianceNodeData` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_data` |
| Get Calibration Appliance Node Data | `GetCalibrationApplianceNodeData` | `robot_calibration_appliance_node_operations.get_calibration_appliance_node_data` |
| Set Calibration Appliance Node Display Robot | `SetCalibrationApplianceNodeDisplayRobot` | `robot_calibration_appliance_node_operations.set_calibration_appliance_node_display_robot` |
| Update Calibration Appliance Node Display Robot Joints | `UpdateCalibrationApplianceNodeDisplayRobotJoints` | `robot_calibration_appliance_node_operations.update_calibration_appliance_node_display_robot_joints` |
| Get Calibration Appliance Node Status | `GetCalibrationApplianceNodeStatus` | `robot_calibration_appliance_node_operations.get_calibration_appliance_node_status` |

## Add Calibration Appliance Node

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#add-calibration-appliance-node)

```proto
rpc AddCalibrationApplianceNode(AddCalibrationApplianceNodeRequest) returns (AddCalibrationApplianceNodeResult);
message AddCalibrationApplianceNodeRequest {
  optional CollectionObjectName calibration_appliance_node_to_add = 1;
}
message AddCalibrationApplianceNodeResult {
  MpExecutionDetails execution = 1000;
}
```

The object reference uses SA type `Calibration Appliance Node`.

## Delete Calibration Appliance Node

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#delete-calibration-appliance-node)

```proto
rpc DeleteCalibrationApplianceNode(DeleteCalibrationApplianceNodeRequest) returns (DeleteCalibrationApplianceNodeResult);
message DeleteCalibrationApplianceNodeRequest {
  optional CollectionObjectName calibration_appliance_node_to_delete = 1;
}
message DeleteCalibrationApplianceNodeResult {
  MpExecutionDetails execution = 1000;
}
```

## Connect/Disconnect Calibration Appliance Node

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node)

```proto
rpc ConnectDisconnectCalibrationApplianceNode(ConnectDisconnectCalibrationApplianceNodeRequest) returns (ConnectDisconnectCalibrationApplianceNodeResult);
message ConnectDisconnectCalibrationApplianceNodeRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional bool connect = 2;
}
message ConnectDisconnectCalibrationApplianceNodeResult {
  MpExecutionDetails execution = 1000;
}
```

`connect` maps to `Connect(TRUE) or Disconnect(FALSE)?` and defaults to `true`.

## Set Calibration Appliance Node Instrument

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument)

```proto
rpc SetCalibrationApplianceNodeInstrument(SetCalibrationApplianceNodeInstrumentRequest) returns (SetCalibrationApplianceNodeInstrumentResult);
message SetCalibrationApplianceNodeInstrumentRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional CollectionInstrumentId instrument = 2;
}
message SetCalibrationApplianceNodeInstrumentResult {
  MpExecutionDetails execution = 1000;
}
```

Briosa retains no node or instrument state and adds no preflight beyond the MP
command. Callers coordinate the live SA workflow.

## Set Calibration Appliance Node Measurement Profile

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile)

```proto
rpc SetCalibrationApplianceNodeMeasurementProfile(SetCalibrationApplianceNodeMeasurementProfileRequest) returns (SetCalibrationApplianceNodeMeasurementProfileResult);
message SetCalibrationApplianceNodeMeasurementProfileRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional string measurement_profile = 2;
}
message SetCalibrationApplianceNodeMeasurementProfileResult {
  MpExecutionDetails execution = 1000;
}
```

`measurement_profile` maps directly to `Measurement Profile` and defaults to
the exact MP empty string.

## Set Calibration Appliance Node Measurement Target

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target)

```proto
rpc SetCalibrationApplianceNodeMeasurementTarget(SetCalibrationApplianceNodeMeasurementTargetRequest) returns (SetCalibrationApplianceNodeMeasurementTargetResult);
message SetCalibrationApplianceNodeMeasurementTargetRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional string measurement_target = 2;
}
message SetCalibrationApplianceNodeMeasurementTargetResult {
  MpExecutionDetails execution = 1000;
}
```

`measurement_target` maps directly to `Measurement Target` and defaults to the
exact MP empty string.

## Enable/Disable Calibration Appliance Node Instrument Auto Point

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point)

```proto
rpc EnableDisableCalibrationApplianceNodeInstrumentAutoPoint(EnableDisableCalibrationApplianceNodeInstrumentAutoPointRequest) returns (EnableDisableCalibrationApplianceNodeInstrumentAutoPointResult);
message EnableDisableCalibrationApplianceNodeInstrumentAutoPointRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional bool enable_instrument_auto_point = 2;
}
message EnableDisableCalibrationApplianceNodeInstrumentAutoPointResult {
  MpExecutionDetails execution = 1000;
}
```

`enable_instrument_auto_point` maps to `Enable Instrument Auto Point?` and
defaults to `true`.

## Set Calibration Appliance Node Instrument Dwell Time

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time)

```proto
rpc SetCalibrationApplianceNodeInstrumentDwellTime(SetCalibrationApplianceNodeInstrumentDwellTimeRequest) returns (SetCalibrationApplianceNodeInstrumentDwellTimeResult);
message SetCalibrationApplianceNodeInstrumentDwellTimeRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional double measurement_dwell_time_seconds = 2;
}
message SetCalibrationApplianceNodeInstrumentDwellTimeResult {
  MpExecutionDetails execution = 1000;
}
```

The dwell time defaults to `0.0`. Briosa passes it through without adding a
range restriction.

## Skip Calibration Appliance Node Measurement

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement)

```proto
rpc SkipCalibrationApplianceNodeMeasurement(SkipCalibrationApplianceNodeMeasurementRequest) returns (SkipCalibrationApplianceNodeMeasurementResult);
message SkipCalibrationApplianceNodeMeasurementRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
}
message SkipCalibrationApplianceNodeMeasurementResult {
  MpExecutionDetails execution = 1000;
}
```

Briosa does not retain or validate intermediate node workflow state.

## Set Calibration Appliance Node Measurement Frame

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame)

```proto
rpc SetCalibrationApplianceNodeMeasurementFrame(SetCalibrationApplianceNodeMeasurementFrameRequest) returns (SetCalibrationApplianceNodeMeasurementFrameResult);
message SetCalibrationApplianceNodeMeasurementFrameRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional CollectionObjectName measurement_reference_frame = 2;
}
message SetCalibrationApplianceNodeMeasurementFrameResult {
  MpExecutionDetails execution = 1000;
}
```

`measurement_reference_frame` is required and must identify an SA Frame.

## Set Calibration Appliance Node Measurement Offset Transform

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform)

```proto
rpc SetCalibrationApplianceNodeMeasurementOffsetTransform(SetCalibrationApplianceNodeMeasurementOffsetTransformRequest) returns (SetCalibrationApplianceNodeMeasurementOffsetTransformResult);
message SetCalibrationApplianceNodeMeasurementOffsetTransformRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional Transform measurement_offset_transform = 2;
}
message SetCalibrationApplianceNodeMeasurementOffsetTransformResult {
  MpExecutionDetails execution = 1000;
}
```

Omitting `measurement_offset_transform` uses the exact MP identity transform.

## Set Calibration Appliance Node Measurement Point Group

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group)

```proto
rpc SetCalibrationApplianceNodeMeasurementPointGroup(SetCalibrationApplianceNodeMeasurementPointGroupRequest) returns (SetCalibrationApplianceNodeMeasurementPointGroupResult);
message SetCalibrationApplianceNodeMeasurementPointGroupRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional CollectionObjectName point_group_name = 2;
}
message SetCalibrationApplianceNodeMeasurementPointGroupResult {
  MpExecutionDetails execution = 1000;
}
```

`point_group_name` is required and must identify an SA Point Group.

## Set Calibration Appliance Node Calibration Appliance IP Address

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address)

```proto
rpc SetCalibrationApplianceNodeCalibrationApplianceIpAddress(SetCalibrationApplianceNodeCalibrationApplianceIpAddressRequest) returns (SetCalibrationApplianceNodeCalibrationApplianceIpAddressResult);
message SetCalibrationApplianceNodeCalibrationApplianceIpAddressRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional string calibration_appliance_ip_address = 2;
}
message SetCalibrationApplianceNodeCalibrationApplianceIpAddressResult {
  MpExecutionDetails execution = 1000;
}
```

The exact SA 2026.1 MP default is `0.0.0.0`. The field configures the appliance
through the local SA application and does not change Briosa's local-only
transport boundary.

## Set Calibration Appliance Node Trapping Node ID

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id)

```proto
rpc SetCalibrationApplianceNodeTrappingNodeId(SetCalibrationApplianceNodeTrappingNodeIdRequest) returns (SetCalibrationApplianceNodeTrappingNodeIdResult);
message SetCalibrationApplianceNodeTrappingNodeIdRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional int32 trapping_node_id = 2;
}
message SetCalibrationApplianceNodeTrappingNodeIdResult {
  MpExecutionDetails execution = 1000;
}
```

`trapping_node_id` defaults to `0` and is passed through without a Briosa range
restriction.

## Enable/Disable Calibration Appliance Node Trap Manager

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager)

```proto
rpc EnableDisableCalibrationApplianceNodeTrapManager(EnableDisableCalibrationApplianceNodeTrapManagerRequest) returns (EnableDisableCalibrationApplianceNodeTrapManagerResult);
message EnableDisableCalibrationApplianceNodeTrapManagerRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional bool enable = 2;
}
message EnableDisableCalibrationApplianceNodeTrapManagerResult {
  MpExecutionDetails execution = 1000;
}
```

`enable` maps to `Enable(TRUE), Disable(FALSE)?` and defaults to `true`.

## Clear Calibration Appliance Node Trap Manager Requests

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests)

```proto
rpc ClearCalibrationApplianceNodeTrapManagerRequests(ClearCalibrationApplianceNodeTrapManagerRequestsRequest) returns (ClearCalibrationApplianceNodeTrapManagerRequestsResult);
message ClearCalibrationApplianceNodeTrapManagerRequestsRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
}
message ClearCalibrationApplianceNodeTrapManagerRequestsResult {
  MpExecutionDetails execution = 1000;
}
```

Briosa does not retain or preflight the node's trap-manager state.

## Set Calibration Appliance Node Integer Value

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value)

```proto
rpc SetCalibrationApplianceNodeIntegerValue(SetCalibrationApplianceNodeIntegerValueRequest) returns (SetCalibrationApplianceNodeIntegerValueResult);
message SetCalibrationApplianceNodeIntegerValueRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional int32 index_offset = 2;
  optional int32 integer_value = 3;
}
message SetCalibrationApplianceNodeIntegerValueResult {
  MpExecutionDetails execution = 1000;
}
```

Both integers default to `0` and are passed through without an added bounds
preflight.

## Get Calibration Appliance Node Integer Value

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value)

```proto
rpc GetCalibrationApplianceNodeIntegerValue(GetCalibrationApplianceNodeIntegerValueRequest) returns (GetCalibrationApplianceNodeIntegerValueResult);
message GetCalibrationApplianceNodeIntegerValueRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional int32 index_offset = 2;
}
message GetCalibrationApplianceNodeIntegerValueResult {
  optional int32 integer_value = 1;
  MpExecutionDetails execution = 1000;
}
```

`index_offset` defaults to `0`. The result preserves the MP output `Integer
Value`.

## Set Calibration Appliance Node Real Value

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value)

```proto
rpc SetCalibrationApplianceNodeRealValue(SetCalibrationApplianceNodeRealValueRequest) returns (SetCalibrationApplianceNodeRealValueResult);
message SetCalibrationApplianceNodeRealValueRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional int32 index_offset = 2;
  optional double real_value = 3;
}
message SetCalibrationApplianceNodeRealValueResult {
  MpExecutionDetails execution = 1000;
}
```

The offset and value default to `0` and are passed through without an added
bounds preflight.

## Get Calibration Appliance Node Real Value

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value)

```proto
rpc GetCalibrationApplianceNodeRealValue(GetCalibrationApplianceNodeRealValueRequest) returns (GetCalibrationApplianceNodeRealValueResult);
message GetCalibrationApplianceNodeRealValueRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional int32 index_offset = 2;
}
message GetCalibrationApplianceNodeRealValueResult {
  optional double real_value = 1;
  MpExecutionDetails execution = 1000;
}
```

`index_offset` defaults to `0`. The result preserves the MP output `Real
Value`.

## Set Calibration Appliance Node Data

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data)

```proto
rpc SetCalibrationApplianceNodeData(SetCalibrationApplianceNodeDataRequest) returns (SetCalibrationApplianceNodeDataResult);
message SetCalibrationApplianceNodeDataRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  repeated double real_values = 2;
}
message SetCalibrationApplianceNodeDataResult {
  MpExecutionDetails execution = 1000;
}
```

`real_values` maps to the SDK-supported MP input `Real Values` and defaults to
an empty array. The SA 2026.1 SDK export marks `Integer Values` as unavailable,
so Briosa intentionally provides a partial real-values-only contract.

## Get Calibration Appliance Node Data

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data)

```proto
rpc GetCalibrationApplianceNodeData(GetCalibrationApplianceNodeDataRequest) returns (GetCalibrationApplianceNodeDataResult);
message GetCalibrationApplianceNodeDataRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional int32 real_value_count = 2;
}
message GetCalibrationApplianceNodeDataResult {
  repeated double real_values = 1;
  MpExecutionDetails execution = 1000;
}
```

`real_value_count` is required retrieval metadata because the SDK requires the
`Real Values` output dimension in advance; it is not an MP input or retained SA
state. The SDK export marks `Integer Values` unavailable, so the result exposes
only the supported real-value array.

## Set Calibration Appliance Node Display Robot

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot)

```proto
rpc SetCalibrationApplianceNodeDisplayRobot(SetCalibrationApplianceNodeDisplayRobotRequest) returns (SetCalibrationApplianceNodeDisplayRobotResult);
message SetCalibrationApplianceNodeDisplayRobotRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional CollectionMachineId machine_id = 2;
}
message SetCalibrationApplianceNodeDisplayRobotResult {
  MpExecutionDetails execution = 1000;
}
```

`machine_id` is required and maps to the MP input `Machine ID`.

## Update Calibration Appliance Node Display Robot Joints

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints)

```proto
rpc UpdateCalibrationApplianceNodeDisplayRobotJoints(UpdateCalibrationApplianceNodeDisplayRobotJointsRequest) returns (UpdateCalibrationApplianceNodeDisplayRobotJointsResult);
message UpdateCalibrationApplianceNodeDisplayRobotJointsRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
  optional bool enable_display_robot_joint_updates = 2;
}
message UpdateCalibrationApplianceNodeDisplayRobotJointsResult {
  MpExecutionDetails execution = 1000;
}
```

`enable_display_robot_joint_updates` maps to `Enable Display Robot Joint
Updates?` and defaults to `true`.

## Get Calibration Appliance Node Status

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status)

```proto
rpc GetCalibrationApplianceNodeStatus(GetCalibrationApplianceNodeStatusRequest) returns (GetCalibrationApplianceNodeStatusResult);
message GetCalibrationApplianceNodeStatusRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
}
message GetCalibrationApplianceNodeStatusResult {
  optional bool instrument_connected = 1;
  optional bool calibration_appliance_connected = 2;
  MpExecutionDetails execution = 1000;
}
```

The two booleans preserve the MP outputs `Instrument Connected?` and
`Calibration Appliance Connected?`. They are a point-in-time SA snapshot and
do not establish Briosa execution readiness.
