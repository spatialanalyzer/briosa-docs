---
title: Robot Calibration Appliance Node Operations
description: Briosa 0.1.0 .NET APIs for reviewed Robot Calibration Appliance Node MP commands.
toc_max_heading_level: 2
---

# Robot Calibration Appliance Node Operations

## Result Type

```csharp
public sealed record CalibrationApplianceNodeStatus(
    bool InstrumentConnected,
    bool CalibrationApplianceConnected);
```

## AddCalibrationApplianceNodeAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#add-calibration-appliance-node) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#add-calibration-appliance-node)

```csharp
public Task AddCalibrationApplianceNodeAsync(
    CollectionObjectName calibrationApplianceNodeToAdd,
    CancellationToken cancellationToken = default);
```

## DeleteCalibrationApplianceNodeAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#delete-calibration-appliance-node) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#delete-calibration-appliance-node)

```csharp
public Task DeleteCalibrationApplianceNodeAsync(
    CollectionObjectName calibrationApplianceNodeToDelete,
    CancellationToken cancellationToken = default);
```

## ConnectDisconnectCalibrationApplianceNodeAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node)

```csharp
public Task ConnectDisconnectCalibrationApplianceNodeAsync(
    CollectionObjectName calibrationApplianceNode,
    bool connect = true,
    CancellationToken cancellationToken = default);
```

## SetCalibrationApplianceNodeInstrumentAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument)

```csharp
public Task SetCalibrationApplianceNodeInstrumentAsync(
    CollectionObjectName calibrationApplianceNode,
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

## SetCalibrationApplianceNodeMeasurementProfileAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile)

```csharp
public Task SetCalibrationApplianceNodeMeasurementProfileAsync(
    CollectionObjectName calibrationApplianceNode,
    string measurementProfile = "",
    CancellationToken cancellationToken = default);
```

## SetCalibrationApplianceNodeMeasurementTargetAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target)

```csharp
public Task SetCalibrationApplianceNodeMeasurementTargetAsync(
    CollectionObjectName calibrationApplianceNode,
    string measurementTarget = "",
    CancellationToken cancellationToken = default);
```

## EnableDisableCalibrationApplianceNodeInstrumentAutoPointAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point)

```csharp
public Task EnableDisableCalibrationApplianceNodeInstrumentAutoPointAsync(
    CollectionObjectName calibrationApplianceNode,
    bool enableInstrumentAutoPoint = true,
    CancellationToken cancellationToken = default);
```

## SetCalibrationApplianceNodeInstrumentDwellTimeAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time)

```csharp
public Task SetCalibrationApplianceNodeInstrumentDwellTimeAsync(
    CollectionObjectName calibrationApplianceNode,
    double measurementDwellTimeSeconds = 0.0,
    CancellationToken cancellationToken = default);
```

## SkipCalibrationApplianceNodeMeasurementAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement)

```csharp
public Task SkipCalibrationApplianceNodeMeasurementAsync(
    CollectionObjectName calibrationApplianceNode,
    CancellationToken cancellationToken = default);
```

## SetCalibrationApplianceNodeMeasurementFrameAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame)

```csharp
public Task SetCalibrationApplianceNodeMeasurementFrameAsync(
    CollectionObjectName calibrationApplianceNode,
    CollectionObjectName measurementReferenceFrame,
    CancellationToken cancellationToken = default);
```

The reference must identify an SA Frame.

## SetCalibrationApplianceNodeMeasurementOffsetTransformAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform)

```csharp
public Task SetCalibrationApplianceNodeMeasurementOffsetTransformAsync(
    CollectionObjectName calibrationApplianceNode,
    CancellationToken cancellationToken = default);

public Task SetCalibrationApplianceNodeMeasurementOffsetTransformAsync(
    CollectionObjectName calibrationApplianceNode,
    Transform measurementOffsetTransform,
    CancellationToken cancellationToken = default);
```

The shorter overload uses the exact MP identity-transform default.

## SetCalibrationApplianceNodeMeasurementPointGroupAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group)

```csharp
public Task SetCalibrationApplianceNodeMeasurementPointGroupAsync(
    CollectionObjectName calibrationApplianceNode,
    CollectionObjectName pointGroupName,
    CancellationToken cancellationToken = default);
```

The point-group reference must identify an SA Point Group.

## SetCalibrationApplianceNodeCalibrationApplianceIpAddressAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address)

```csharp
public Task SetCalibrationApplianceNodeCalibrationApplianceIpAddressAsync(
    CollectionObjectName calibrationApplianceNode,
    string calibrationApplianceIpAddress = "0.0.0.0",
    CancellationToken cancellationToken = default);
```

The default preserves the exact SA 2026.1 MP value. This configures the
appliance through local SA; it does not enable remote Briosa execution.

## SetCalibrationApplianceNodeTrappingNodeIdAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id)

```csharp
public Task SetCalibrationApplianceNodeTrappingNodeIdAsync(
    CollectionObjectName calibrationApplianceNode,
    int trappingNodeId = 0,
    CancellationToken cancellationToken = default);
```

## EnableDisableCalibrationApplianceNodeTrapManagerAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager)

```csharp
public Task EnableDisableCalibrationApplianceNodeTrapManagerAsync(
    CollectionObjectName calibrationApplianceNode,
    bool enable = true,
    CancellationToken cancellationToken = default);
```

## ClearCalibrationApplianceNodeTrapManagerRequestsAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests)

```csharp
public Task ClearCalibrationApplianceNodeTrapManagerRequestsAsync(
    CollectionObjectName calibrationApplianceNode,
    CancellationToken cancellationToken = default);
```

## SetCalibrationApplianceNodeIntegerValueAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value)

```csharp
public Task SetCalibrationApplianceNodeIntegerValueAsync(
    CollectionObjectName calibrationApplianceNode,
    int indexOffset = 0,
    int integerValue = 0,
    CancellationToken cancellationToken = default);
```

## GetCalibrationApplianceNodeIntegerValueAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value)

```csharp
public Task<int> GetCalibrationApplianceNodeIntegerValueAsync(
    CollectionObjectName calibrationApplianceNode,
    int indexOffset = 0,
    CancellationToken cancellationToken = default);
```

## SetCalibrationApplianceNodeRealValueAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value)

```csharp
public Task SetCalibrationApplianceNodeRealValueAsync(
    CollectionObjectName calibrationApplianceNode,
    int indexOffset = 0,
    double realValue = 0.0,
    CancellationToken cancellationToken = default);
```

## GetCalibrationApplianceNodeRealValueAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value)

```csharp
public Task<double> GetCalibrationApplianceNodeRealValueAsync(
    CollectionObjectName calibrationApplianceNode,
    int indexOffset = 0,
    CancellationToken cancellationToken = default);
```

## SetCalibrationApplianceNodeDataAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data)

```csharp
public Task SetCalibrationApplianceNodeDataAsync(
    CollectionObjectName calibrationApplianceNode,
    CancellationToken cancellationToken = default);

public Task SetCalibrationApplianceNodeDataAsync(
    CollectionObjectName calibrationApplianceNode,
    IEnumerable<double> realValues,
    CancellationToken cancellationToken = default);
```

The shorter overload sends the exact MP empty-array default. The SA 2026.1 SDK
does not expose the command's `Integer Values` input, so this is a documented
real-values-only contract.

## GetCalibrationApplianceNodeDataAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data)

```csharp
public Task<double[]> GetCalibrationApplianceNodeDataAsync(
    CollectionObjectName calibrationApplianceNode,
    int realValueCount,
    CancellationToken cancellationToken = default);
```

`realValueCount` is required SDK retrieval metadata, not an MP input or retained
SA state. The result contains only the SDK-supported `Real Values` output.

## SetCalibrationApplianceNodeDisplayRobotAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot)

```csharp
public Task SetCalibrationApplianceNodeDisplayRobotAsync(
    CollectionObjectName calibrationApplianceNode,
    CollectionMachineId machineId,
    CancellationToken cancellationToken = default);
```

## UpdateCalibrationApplianceNodeDisplayRobotJointsAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints)

```csharp
public Task UpdateCalibrationApplianceNodeDisplayRobotJointsAsync(
    CollectionObjectName calibrationApplianceNode,
    bool enableDisplayRobotJointUpdates = true,
    CancellationToken cancellationToken = default);
```

## GetCalibrationApplianceNodeStatusAsync

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status)

```csharp
public Task<CalibrationApplianceNodeStatus> GetCalibrationApplianceNodeStatusAsync(
    CollectionObjectName calibrationApplianceNode,
    CancellationToken cancellationToken = default);
```

The result is a point-in-time SA status snapshot and does not establish Briosa
execution readiness. The client does not retain it.

Index offsets are passed through without bounds preflight. These methods retain
no trap-manager or appliance workflow state.

The dwell time and trapping node ID are passed through without added Briosa
range restrictions. Skip retains no intermediate workflow state.

Node references must use SA type `Calibration Appliance Node`. These methods
retain no workflow state, add no dependency preflight, and are never
automatically replayed.
