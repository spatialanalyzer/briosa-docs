---
title: Robot Calibration Appliance Node Operations
description: Briosa 0.1.0 JavaScript and TypeScript APIs for reviewed Robot Calibration Appliance Node MP commands.
toc_max_heading_level: 2
---

# Robot Calibration Appliance Node Operations

## Result Type

```ts
export interface CalibrationApplianceNodeStatus {
  readonly instrumentConnected: boolean;
  readonly calibrationApplianceConnected: boolean;
}
```

## addCalibrationApplianceNode

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#add-calibration-appliance-node) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#add-calibration-appliance-node)

```ts
export interface AddCalibrationApplianceNodeInput {
  readonly calibrationApplianceNodeToAdd: CollectionObjectName;
}

function addCalibrationApplianceNode(
  briosa: BriosaClient,
  input: AddCalibrationApplianceNodeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## deleteCalibrationApplianceNode

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#delete-calibration-appliance-node) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#delete-calibration-appliance-node)

```ts
export interface DeleteCalibrationApplianceNodeInput {
  readonly calibrationApplianceNodeToDelete: CollectionObjectName;
}

function deleteCalibrationApplianceNode(
  briosa: BriosaClient,
  input: DeleteCalibrationApplianceNodeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## connectDisconnectCalibrationApplianceNode

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node)

```ts
export interface ConnectDisconnectCalibrationApplianceNodeInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly connect?: boolean;
}

function connectDisconnectCalibrationApplianceNode(
  briosa: BriosaClient,
  input: ConnectDisconnectCalibrationApplianceNodeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`connect` defaults to `true`.

## setCalibrationApplianceNodeInstrument

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument)

```ts
export interface SetCalibrationApplianceNodeInstrumentInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly instrument: CollectionInstrumentId;
}

function setCalibrationApplianceNodeInstrument(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeInstrumentInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## setCalibrationApplianceNodeMeasurementProfile

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile)

```ts
export interface SetCalibrationApplianceNodeMeasurementProfileInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly measurementProfile?: string;
}

function setCalibrationApplianceNodeMeasurementProfile(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeMeasurementProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`measurementProfile` defaults to the exact MP empty string.

## setCalibrationApplianceNodeMeasurementTarget

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target)

```ts
export interface SetCalibrationApplianceNodeMeasurementTargetInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly measurementTarget?: string;
}

function setCalibrationApplianceNodeMeasurementTarget(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeMeasurementTargetInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`measurementTarget` defaults to the exact MP empty string.

## enableDisableCalibrationApplianceNodeInstrumentAutoPoint

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point)

```ts
export interface EnableDisableCalibrationApplianceNodeInstrumentAutoPointInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly enableInstrumentAutoPoint?: boolean;
}

function enableDisableCalibrationApplianceNodeInstrumentAutoPoint(
  briosa: BriosaClient,
  input: EnableDisableCalibrationApplianceNodeInstrumentAutoPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`enableInstrumentAutoPoint` defaults to `true`.

## setCalibrationApplianceNodeInstrumentDwellTime

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time)

```ts
export interface SetCalibrationApplianceNodeInstrumentDwellTimeInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly measurementDwellTimeSeconds?: number;
}

function setCalibrationApplianceNodeInstrumentDwellTime(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeInstrumentDwellTimeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`measurementDwellTimeSeconds` defaults to `0.0`.

## skipCalibrationApplianceNodeMeasurement

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement)

```ts
export interface SkipCalibrationApplianceNodeMeasurementInput {
  readonly calibrationApplianceNode: CollectionObjectName;
}

function skipCalibrationApplianceNodeMeasurement(
  briosa: BriosaClient,
  input: SkipCalibrationApplianceNodeMeasurementInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## setCalibrationApplianceNodeMeasurementFrame

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame)

```ts
export interface SetCalibrationApplianceNodeMeasurementFrameInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly measurementReferenceFrame: CollectionObjectName;
}

function setCalibrationApplianceNodeMeasurementFrame(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeMeasurementFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The reference must identify an SA Frame.

## setCalibrationApplianceNodeMeasurementOffsetTransform

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform)

```ts
export interface SetCalibrationApplianceNodeMeasurementOffsetTransformInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly measurementOffsetTransform?: Transform;
}

function setCalibrationApplianceNodeMeasurementOffsetTransform(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeMeasurementOffsetTransformInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitting the transform uses the exact MP identity-transform default.

## setCalibrationApplianceNodeMeasurementPointGroup

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group)

```ts
export interface SetCalibrationApplianceNodeMeasurementPointGroupInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly pointGroupName: CollectionObjectName;
}

function setCalibrationApplianceNodeMeasurementPointGroup(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeMeasurementPointGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The reference must identify an SA Point Group.

## setCalibrationApplianceNodeCalibrationApplianceIpAddress

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address)

```ts
export interface SetCalibrationApplianceNodeCalibrationApplianceIpAddressInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly calibrationApplianceIpAddress?: string;
}

function setCalibrationApplianceNodeCalibrationApplianceIpAddress(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeCalibrationApplianceIpAddressInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The exact SA 2026.1 MP default is `0.0.0.0`. This configures the appliance
through local SA; it does not enable remote Briosa execution.

## setCalibrationApplianceNodeTrappingNodeId

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id)

```ts
export interface SetCalibrationApplianceNodeTrappingNodeIdInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly trappingNodeId?: number;
}

function setCalibrationApplianceNodeTrappingNodeId(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeTrappingNodeIdInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## enableDisableCalibrationApplianceNodeTrapManager

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager)

```ts
export interface EnableDisableCalibrationApplianceNodeTrapManagerInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly enable?: boolean;
}

function enableDisableCalibrationApplianceNodeTrapManager(
  briosa: BriosaClient,
  input: EnableDisableCalibrationApplianceNodeTrapManagerInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`enable` defaults to `true`.

## clearCalibrationApplianceNodeTrapManagerRequests

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests)

```ts
export interface ClearCalibrationApplianceNodeTrapManagerRequestsInput {
  readonly calibrationApplianceNode: CollectionObjectName;
}

function clearCalibrationApplianceNodeTrapManagerRequests(
  briosa: BriosaClient,
  input: ClearCalibrationApplianceNodeTrapManagerRequestsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## setCalibrationApplianceNodeIntegerValue

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value)

```ts
export interface SetCalibrationApplianceNodeIntegerValueInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly indexOffset?: number;
  readonly integerValue?: number;
}

function setCalibrationApplianceNodeIntegerValue(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeIntegerValueInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## getCalibrationApplianceNodeIntegerValue

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value)

```ts
export interface GetCalibrationApplianceNodeIntegerValueInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly indexOffset?: number;
}

function getCalibrationApplianceNodeIntegerValue(
  briosa: BriosaClient,
  input: GetCalibrationApplianceNodeIntegerValueInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

## setCalibrationApplianceNodeRealValue

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value)

```ts
export interface SetCalibrationApplianceNodeRealValueInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly indexOffset?: number;
  readonly realValue?: number;
}

function setCalibrationApplianceNodeRealValue(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeRealValueInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## getCalibrationApplianceNodeRealValue

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value)

```ts
export interface GetCalibrationApplianceNodeRealValueInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly indexOffset?: number;
}

function getCalibrationApplianceNodeRealValue(
  briosa: BriosaClient,
  input: GetCalibrationApplianceNodeRealValueInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

## setCalibrationApplianceNodeData

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data)

```ts
export interface SetCalibrationApplianceNodeDataInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly realValues?: Iterable<number>;
}

function setCalibrationApplianceNodeData(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeDataInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitting `realValues` preserves the exact MP empty-array default. The SA 2026.1
SDK does not expose the command's `Integer Values` input, so this is a
documented real-values-only contract.

## getCalibrationApplianceNodeData

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data)

```ts
export interface GetCalibrationApplianceNodeDataInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly realValueCount: number;
}

function getCalibrationApplianceNodeData(
  briosa: BriosaClient,
  input: GetCalibrationApplianceNodeDataInput,
  options?: BriosaCallOptions,
): Promise<readonly number[]>;
```

`realValueCount` is required SDK retrieval metadata, not an MP input or retained
SA state. The result contains only the SDK-supported `Real Values`.

## setCalibrationApplianceNodeDisplayRobot

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot)

```ts
export interface SetCalibrationApplianceNodeDisplayRobotInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly machineId: CollectionMachineId;
}

function setCalibrationApplianceNodeDisplayRobot(
  briosa: BriosaClient,
  input: SetCalibrationApplianceNodeDisplayRobotInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## updateCalibrationApplianceNodeDisplayRobotJoints

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints)

```ts
export interface UpdateCalibrationApplianceNodeDisplayRobotJointsInput {
  readonly calibrationApplianceNode: CollectionObjectName;
  readonly enableDisplayRobotJointUpdates?: boolean;
}

function updateCalibrationApplianceNodeDisplayRobotJoints(
  briosa: BriosaClient,
  input: UpdateCalibrationApplianceNodeDisplayRobotJointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## getCalibrationApplianceNodeStatus

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status)

```ts
export interface GetCalibrationApplianceNodeStatusInput {
  readonly calibrationApplianceNode: CollectionObjectName;
}

function getCalibrationApplianceNodeStatus(
  briosa: BriosaClient,
  input: GetCalibrationApplianceNodeStatusInput,
  options?: BriosaCallOptions,
): Promise<CalibrationApplianceNodeStatus>;
```

The result is a point-in-time SA status snapshot and does not establish Briosa
execution readiness. The client does not retain it.

`enableDisplayRobotJointUpdates` defaults to `true`. Index offsets are passed
through without bounds preflight, and these functions retain no workflow state.

`trappingNodeId` defaults to `0`. The dwell time and trapping node ID are
passed through without added Briosa range restrictions. Skip retains no
intermediate workflow state.

Node references must use SA type `Calibration Appliance Node`. These functions
retain no workflow state, add no dependency preflight, and are never
automatically replayed.
