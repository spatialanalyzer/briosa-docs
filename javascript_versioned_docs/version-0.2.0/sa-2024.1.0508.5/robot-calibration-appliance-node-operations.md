---
title: Robot Calibration Appliance Node Operations
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Robot Calibration Appliance Node Operations

[SA 2026.1.0529.7](/api/javascript/robot-calibration-appliance-node-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/robot-calibration-appliance-node-operations)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Calibration Appliance Node {/* #add-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#add-calibration-appliance-node) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#add-calibration-appliance-node)

```ts
export interface AddCalibrationApplianceNodeInput {
  readonly calibrationApplianceNodeToAdd: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  addCalibrationApplianceNode(
    input: AddCalibrationApplianceNodeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Calibration Appliance Node {/* #delete-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#delete-calibration-appliance-node) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#delete-calibration-appliance-node)

```ts
export interface DeleteCalibrationApplianceNodeInput {
  readonly calibrationApplianceNodeToDelete: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  deleteCalibrationApplianceNode(
    input: DeleteCalibrationApplianceNodeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Connect/Disconnect Calibration Appliance Node {/* #connectdisconnect-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node)

```ts
export interface ConnectDisconnectCalibrationApplianceNodeInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly connect?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  connectDisconnectCalibrationApplianceNode(
    input: ConnectDisconnectCalibrationApplianceNodeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Instrument {/* #set-calibration-appliance-node-instrument */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument)

```ts
export interface SetCalibrationApplianceNodeInstrumentInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeInstrument(
    input: SetCalibrationApplianceNodeInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Profile {/* #set-calibration-appliance-node-measurement-profile */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile)

```ts
export interface SetCalibrationApplianceNodeMeasurementProfileInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly measurementProfile?: string;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeMeasurementProfile(
    input: SetCalibrationApplianceNodeMeasurementProfileInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Target {/* #set-calibration-appliance-node-measurement-target */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target)

```ts
export interface SetCalibrationApplianceNodeMeasurementTargetInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly measurementTarget?: string;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeMeasurementTarget(
    input: SetCalibrationApplianceNodeMeasurementTargetInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Calibration Appliance Node Instrument Auto Point {/* #enabledisable-calibration-appliance-node-instrument-auto-point */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point)

```ts
export interface EnableDisableCalibrationApplianceNodeInstrumentAutoPointInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly enableInstrumentAutoPoint?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  enableDisableCalibrationApplianceNodeInstrumentAutoPoint(
    input: EnableDisableCalibrationApplianceNodeInstrumentAutoPointInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Instrument Dwell Time {/* #set-calibration-appliance-node-instrument-dwell-time */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time)

```ts
export interface SetCalibrationApplianceNodeInstrumentDwellTimeInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly measurementDwellTimeSeconds?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeInstrumentDwellTime(
    input: SetCalibrationApplianceNodeInstrumentDwellTimeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Skip Calibration Appliance Node Measurement {/* #skip-calibration-appliance-node-measurement */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement)

```ts
export interface SkipCalibrationApplianceNodeMeasurementInput {
  readonly calibrationApplianceNode: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  skipCalibrationApplianceNodeMeasurement(
    input: SkipCalibrationApplianceNodeMeasurementInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Frame {/* #set-calibration-appliance-node-measurement-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame)

```ts
export interface SetCalibrationApplianceNodeMeasurementFrameInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly measurementReferenceFrame: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeMeasurementFrame(
    input: SetCalibrationApplianceNodeMeasurementFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Offset Transform {/* #set-calibration-appliance-node-measurement-offset-transform */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform)

```ts
export interface SetCalibrationApplianceNodeMeasurementOffsetTransformInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly measurementOffsetTransform?: Transform;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeMeasurementOffsetTransform(
    input: SetCalibrationApplianceNodeMeasurementOffsetTransformInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Point Group {/* #set-calibration-appliance-node-measurement-point-group */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group)

```ts
export interface SetCalibrationApplianceNodeMeasurementPointGroupInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly pointGroupName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeMeasurementPointGroup(
    input: SetCalibrationApplianceNodeMeasurementPointGroupInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Calibration Appliance IP Address {/* #set-calibration-appliance-node-calibration-appliance-ip-address */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address)

```ts
export interface SetCalibrationApplianceNodeCalibrationApplianceIpAddressInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly calibrationApplianceIpAddress?: string;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeCalibrationApplianceIpAddress(
    input: SetCalibrationApplianceNodeCalibrationApplianceIpAddressInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Trapping Node ID {/* #set-calibration-appliance-node-trapping-node-id */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id)

```ts
export interface SetCalibrationApplianceNodeTrappingNodeIdInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly trappingNodeId?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeTrappingNodeId(
    input: SetCalibrationApplianceNodeTrappingNodeIdInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Calibration Appliance Node Trap Manager {/* #enabledisable-calibration-appliance-node-trap-manager */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager)

```ts
export interface EnableDisableCalibrationApplianceNodeTrapManagerInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly enable?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  enableDisableCalibrationApplianceNodeTrapManager(
    input: EnableDisableCalibrationApplianceNodeTrapManagerInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Calibration Appliance Node Trap Manager Requests {/* #clear-calibration-appliance-node-trap-manager-requests */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests)

```ts
export interface ClearCalibrationApplianceNodeTrapManagerRequestsInput {
  readonly calibrationApplianceNode: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  clearCalibrationApplianceNodeTrapManagerRequests(
    input: ClearCalibrationApplianceNodeTrapManagerRequestsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Integer Value {/* #set-calibration-appliance-node-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value)

```ts
export interface SetCalibrationApplianceNodeIntegerValueInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly indexOffset?: number;
  readonly integerValue?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeIntegerValue(
    input: SetCalibrationApplianceNodeIntegerValueInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Integer Value {/* #get-calibration-appliance-node-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value)

```ts
export interface GetCalibrationApplianceNodeIntegerValueInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly indexOffset?: number;
}

// Member of BriosaClient
interface BriosaClient {
  getCalibrationApplianceNodeIntegerValue(
    input: GetCalibrationApplianceNodeIntegerValueInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Real Value {/* #set-calibration-appliance-node-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value)

```ts
export interface SetCalibrationApplianceNodeRealValueInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly indexOffset?: number;
  readonly realValue?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeRealValue(
    input: SetCalibrationApplianceNodeRealValueInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Real Value {/* #get-calibration-appliance-node-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value)

```ts
export interface GetCalibrationApplianceNodeRealValueInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly indexOffset?: number;
}

// Member of BriosaClient
interface BriosaClient {
  getCalibrationApplianceNodeRealValue(
    input: GetCalibrationApplianceNodeRealValueInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Data {/* #set-calibration-appliance-node-data */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data)

```ts
export interface SetCalibrationApplianceNodeDataInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly realValues?: Iterable<number>;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeData(
    input: SetCalibrationApplianceNodeDataInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Data {/* #get-calibration-appliance-node-data */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data)

```ts
export interface GetCalibrationApplianceNodeDataInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly realValueCount: number;
}

// Member of BriosaClient
interface BriosaClient {
  getCalibrationApplianceNodeData(
    input: GetCalibrationApplianceNodeDataInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly number[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Display Robot {/* #set-calibration-appliance-node-display-robot */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot)

```ts
export interface SetCalibrationApplianceNodeDisplayRobotInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly machineId: CollectionMachineId;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceNodeDisplayRobot(
    input: SetCalibrationApplianceNodeDisplayRobotInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Update Calibration Appliance Node Display Robot Joints {/* #update-calibration-appliance-node-display-robot-joints */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints)

```ts
export interface UpdateCalibrationApplianceNodeDisplayRobotJointsInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly enableDisplayRobotJointUpdates?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  updateCalibrationApplianceNodeDisplayRobotJoints(
    input: UpdateCalibrationApplianceNodeDisplayRobotJointsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Status {/* #get-calibration-appliance-node-status */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status)

```ts
export interface GetCalibrationApplianceNodeStatusInput {
  readonly calibrationApplianceNode: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  getCalibrationApplianceNodeStatus(
    input: GetCalibrationApplianceNodeStatusInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CalibrationApplianceNodeStatus>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Result Type {/* #result-type */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## addCalibrationApplianceNode {/* #addcalibrationappliancenode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## deleteCalibrationApplianceNode {/* #deletecalibrationappliancenode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## connectDisconnectCalibrationApplianceNode {/* #connectdisconnectcalibrationappliancenode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeInstrument {/* #setcalibrationappliancenodeinstrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeMeasurementProfile {/* #setcalibrationappliancenodemeasurementprofile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeMeasurementTarget {/* #setcalibrationappliancenodemeasurementtarget */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## enableDisableCalibrationApplianceNodeInstrumentAutoPoint {/* #enabledisablecalibrationappliancenodeinstrumentautopoint */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeInstrumentDwellTime {/* #setcalibrationappliancenodeinstrumentdwelltime */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## skipCalibrationApplianceNodeMeasurement {/* #skipcalibrationappliancenodemeasurement */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeMeasurementFrame {/* #setcalibrationappliancenodemeasurementframe */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeMeasurementOffsetTransform {/* #setcalibrationappliancenodemeasurementoffsettransform */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeMeasurementPointGroup {/* #setcalibrationappliancenodemeasurementpointgroup */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeCalibrationApplianceIpAddress {/* #setcalibrationappliancenodecalibrationapplianceipaddress */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeTrappingNodeId {/* #setcalibrationappliancenodetrappingnodeid */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## enableDisableCalibrationApplianceNodeTrapManager {/* #enabledisablecalibrationappliancenodetrapmanager */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## clearCalibrationApplianceNodeTrapManagerRequests {/* #clearcalibrationappliancenodetrapmanagerrequests */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeIntegerValue {/* #setcalibrationappliancenodeintegervalue */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getCalibrationApplianceNodeIntegerValue {/* #getcalibrationappliancenodeintegervalue */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeRealValue {/* #setcalibrationappliancenoderealvalue */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getCalibrationApplianceNodeRealValue {/* #getcalibrationappliancenoderealvalue */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeData {/* #setcalibrationappliancenodedata */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getCalibrationApplianceNodeData {/* #getcalibrationappliancenodedata */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceNodeDisplayRobot {/* #setcalibrationappliancenodedisplayrobot */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## updateCalibrationApplianceNodeDisplayRobotJoints {/* #updatecalibrationappliancenodedisplayrobotjoints */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getCalibrationApplianceNodeStatus {/* #getcalibrationappliancenodestatus */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2024.1.0508.5)
