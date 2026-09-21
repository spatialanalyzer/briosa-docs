---
title: Robot Calibration Appliance Node Operations
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Robot Calibration Appliance Node Operations

[SA 2026.1.0529.7](/api/grpc/robot-calibration-appliance-node-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Calibration Appliance Node {/* #add-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#add-calibration-appliance-node)

`/briosa.RobotCalibrationApplianceNodeOperations/AddCalibrationApplianceNode` · Operation ID: `robot_calibration_appliance_node_operations.add_calibration_appliance_node`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node_to_add` | `optional CollectionObjectName` | Calibration Appliance Node to Add | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddCalibrationApplianceNode(AddCalibrationApplianceNodeRequest) returns (AddCalibrationApplianceNodeResult);

message AddCalibrationApplianceNodeRequest {
  optional CollectionObjectName calibration_appliance_node_to_add = 1;
}

message AddCalibrationApplianceNodeResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Calibration Appliance Node {/* #delete-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#delete-calibration-appliance-node)

`/briosa.RobotCalibrationApplianceNodeOperations/DeleteCalibrationApplianceNode` · Operation ID: `robot_calibration_appliance_node_operations.delete_calibration_appliance_node`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node_to_delete` | `optional CollectionObjectName` | Calibration Appliance Node to Delete | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteCalibrationApplianceNode(DeleteCalibrationApplianceNodeRequest) returns (DeleteCalibrationApplianceNodeResult);

message DeleteCalibrationApplianceNodeRequest {
  optional CollectionObjectName calibration_appliance_node_to_delete = 1;
}

message DeleteCalibrationApplianceNodeResult {
  MpExecutionDetails execution = 1000;
}
```

## Connect/Disconnect Calibration Appliance Node {/* #connectdisconnect-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node)

`/briosa.RobotCalibrationApplianceNodeOperations/ConnectDisconnectCalibrationApplianceNode` · Operation ID: `robot_calibration_appliance_node_operations.connect_disconnect_calibration_appliance_node`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `connect` | `optional bool` | Connect(TRUE) or Disconnect(FALSE)? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Node Instrument {/* #set-calibration-appliance-node-instrument */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeInstrument` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_instrument`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Node Measurement Profile {/* #set-calibration-appliance-node-measurement-profile */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeMeasurementProfile` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_measurement_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `measurement_profile` | `optional string` | Measurement Profile | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Node Measurement Target {/* #set-calibration-appliance-node-measurement-target */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeMeasurementTarget` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_measurement_target`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `measurement_target` | `optional string` | Measurement Target | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Enable/Disable Calibration Appliance Node Instrument Auto Point {/* #enabledisable-calibration-appliance-node-instrument-auto-point */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point)

`/briosa.RobotCalibrationApplianceNodeOperations/EnableDisableCalibrationApplianceNodeInstrumentAutoPoint` · Operation ID: `robot_calibration_appliance_node_operations.enable_disable_calibration_appliance_node_instrument_auto_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `enable_instrument_auto_point` | `optional bool` | Enable Instrument Auto Point? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Node Instrument Dwell Time {/* #set-calibration-appliance-node-instrument-dwell-time */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeInstrumentDwellTime` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_instrument_dwell_time`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `measurement_dwell_time_seconds` | `optional double` | Measurement Dwell Time (Seconds) | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Skip Calibration Appliance Node Measurement {/* #skip-calibration-appliance-node-measurement */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement)

`/briosa.RobotCalibrationApplianceNodeOperations/SkipCalibrationApplianceNodeMeasurement` · Operation ID: `robot_calibration_appliance_node_operations.skip_calibration_appliance_node_measurement`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SkipCalibrationApplianceNodeMeasurement(SkipCalibrationApplianceNodeMeasurementRequest) returns (SkipCalibrationApplianceNodeMeasurementResult);

message SkipCalibrationApplianceNodeMeasurementRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
}

message SkipCalibrationApplianceNodeMeasurementResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Calibration Appliance Node Measurement Frame {/* #set-calibration-appliance-node-measurement-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeMeasurementFrame` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_measurement_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `measurement_reference_frame` | `optional CollectionObjectName` | Measurement Reference Frame | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Node Measurement Offset Transform {/* #set-calibration-appliance-node-measurement-offset-transform */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeMeasurementOffsetTransform` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_measurement_offset_transform`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `measurement_offset_transform` | `optional Transform` | Measurement Offset Transform | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Node Measurement Point Group {/* #set-calibration-appliance-node-measurement-point-group */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeMeasurementPointGroup` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_measurement_point_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `point_group_name` | `optional CollectionObjectName` | Point Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Node Calibration Appliance IP Address {/* #set-calibration-appliance-node-calibration-appliance-ip-address */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeCalibrationApplianceIpAddress` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_calibration_appliance_ip_address`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `calibration_appliance_ip_address` | `optional string` | Calibration Appliance IP Address | 0.0.0.0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Node Trapping Node ID {/* #set-calibration-appliance-node-trapping-node-id */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeTrappingNodeId` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_trapping_node_id`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `trapping_node_id` | `optional int32` | Trapping Node ID | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Enable/Disable Calibration Appliance Node Trap Manager {/* #enabledisable-calibration-appliance-node-trap-manager */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager)

`/briosa.RobotCalibrationApplianceNodeOperations/EnableDisableCalibrationApplianceNodeTrapManager` · Operation ID: `robot_calibration_appliance_node_operations.enable_disable_calibration_appliance_node_trap_manager`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `enable` | `optional bool` | Enable(TRUE), Disable(FALSE)? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Clear Calibration Appliance Node Trap Manager Requests {/* #clear-calibration-appliance-node-trap-manager-requests */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests)

`/briosa.RobotCalibrationApplianceNodeOperations/ClearCalibrationApplianceNodeTrapManagerRequests` · Operation ID: `robot_calibration_appliance_node_operations.clear_calibration_appliance_node_trap_manager_requests`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ClearCalibrationApplianceNodeTrapManagerRequests(ClearCalibrationApplianceNodeTrapManagerRequestsRequest) returns (ClearCalibrationApplianceNodeTrapManagerRequestsResult);

message ClearCalibrationApplianceNodeTrapManagerRequestsRequest {
  optional CollectionObjectName calibration_appliance_node = 1;
}

message ClearCalibrationApplianceNodeTrapManagerRequestsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Calibration Appliance Node Integer Value {/* #set-calibration-appliance-node-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeIntegerValue` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_integer_value`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `index_offset` | `optional int32` | Index Offset | 0 |
| Request | 3 | `integer_value` | `optional int32` | Integer Value | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Calibration Appliance Node Integer Value {/* #get-calibration-appliance-node-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value)

`/briosa.RobotCalibrationApplianceNodeOperations/GetCalibrationApplianceNodeIntegerValue` · Operation ID: `robot_calibration_appliance_node_operations.get_calibration_appliance_node_integer_value`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `index_offset` | `optional int32` | Index Offset | 0 |
| Result | 1 | `integer_value` | `optional int32` | Integer Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Node Real Value {/* #set-calibration-appliance-node-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeRealValue` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_real_value`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `index_offset` | `optional int32` | Index Offset | 0 |
| Request | 3 | `real_value` | `optional double` | Real Value | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Calibration Appliance Node Real Value {/* #get-calibration-appliance-node-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value)

`/briosa.RobotCalibrationApplianceNodeOperations/GetCalibrationApplianceNodeRealValue` · Operation ID: `robot_calibration_appliance_node_operations.get_calibration_appliance_node_real_value`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `index_offset` | `optional int32` | Index Offset | 0 |
| Result | 1 | `real_value` | `optional double` | Real Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Node Data {/* #set-calibration-appliance-node-data */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeData` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `real_values` | `repeated double` | Real Values | Empty array |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Calibration Appliance Node Data {/* #get-calibration-appliance-node-data */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data)

`/briosa.RobotCalibrationApplianceNodeOperations/GetCalibrationApplianceNodeData` · Operation ID: `robot_calibration_appliance_node_operations.get_calibration_appliance_node_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `real_value_count` | `optional int32` | See Typed Binding | Required |
| Result | 1 | `real_values` | `repeated double` | Real Values | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Calibration Appliance Node Display Robot {/* #set-calibration-appliance-node-display-robot */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot)

`/briosa.RobotCalibrationApplianceNodeOperations/SetCalibrationApplianceNodeDisplayRobot` · Operation ID: `robot_calibration_appliance_node_operations.set_calibration_appliance_node_display_robot`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Update Calibration Appliance Node Display Robot Joints {/* #update-calibration-appliance-node-display-robot-joints */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints)

`/briosa.RobotCalibrationApplianceNodeOperations/UpdateCalibrationApplianceNodeDisplayRobotJoints` · Operation ID: `robot_calibration_appliance_node_operations.update_calibration_appliance_node_display_robot_joints`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Request | 2 | `enable_display_robot_joint_updates` | `optional bool` | Enable Display Robot Joint Updates? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Calibration Appliance Node Status {/* #get-calibration-appliance-node-status */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status)

`/briosa.RobotCalibrationApplianceNodeOperations/GetCalibrationApplianceNodeStatus` · Operation ID: `robot_calibration_appliance_node_operations.get_calibration_appliance_node_status`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `calibration_appliance_node` | `optional CollectionObjectName` | Calibration Appliance Node | Required |
| Result | 1 | `instrument_connected` | `optional bool` | Instrument Connected? | — |
| Result | 2 | `calibration_appliance_connected` | `optional bool` | Calibration Appliance Connected? | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
