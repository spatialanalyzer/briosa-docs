---
title: Robot Calibration Appliance Node Operations
description: Unreleased dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Robot Calibration Appliance Node Operations

[SA 2026.1.0529.7](/api/dotnet/robot-calibration-appliance-node-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/robot-calibration-appliance-node-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Calibration Appliance Node {/* #add-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#add-calibration-appliance-node) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#add-calibration-appliance-node)

```csharp
public Task AddCalibrationApplianceNodeAsync(
        CollectionObjectName calibrationApplianceNodeToAdd,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Calibration Appliance Node {/* #delete-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#delete-calibration-appliance-node) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#delete-calibration-appliance-node)

```csharp
public Task DeleteCalibrationApplianceNodeAsync(
        CollectionObjectName calibrationApplianceNodeToDelete,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Connect/Disconnect Calibration Appliance Node {/* #connectdisconnect-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node)

```csharp
public Task ConnectDisconnectCalibrationApplianceNodeAsync(
        CollectionObjectName calibrationApplianceNode,
        bool connect = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Instrument {/* #set-calibration-appliance-node-instrument */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument)

```csharp
public Task SetCalibrationApplianceNodeInstrumentAsync(
        CollectionObjectName calibrationApplianceNode,
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Profile {/* #set-calibration-appliance-node-measurement-profile */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile)

```csharp
public Task SetCalibrationApplianceNodeMeasurementProfileAsync(
        CollectionObjectName calibrationApplianceNode,
        string measurementProfile = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Target {/* #set-calibration-appliance-node-measurement-target */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target)

```csharp
public Task SetCalibrationApplianceNodeMeasurementTargetAsync(
        CollectionObjectName calibrationApplianceNode,
        string measurementTarget = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Calibration Appliance Node Instrument Auto Point {/* #enabledisable-calibration-appliance-node-instrument-auto-point */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point)

```csharp
public Task EnableDisableCalibrationApplianceNodeInstrumentAutoPointAsync(
        CollectionObjectName calibrationApplianceNode,
        bool enableInstrumentAutoPoint = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Instrument Dwell Time {/* #set-calibration-appliance-node-instrument-dwell-time */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time)

```csharp
public Task SetCalibrationApplianceNodeInstrumentDwellTimeAsync(
        CollectionObjectName calibrationApplianceNode,
        double measurementDwellTime = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `measurementDwellTime` | Time in seconds. |

## Skip Calibration Appliance Node Measurement {/* #skip-calibration-appliance-node-measurement */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement)

```csharp
public Task SkipCalibrationApplianceNodeMeasurementAsync(
        CollectionObjectName calibrationApplianceNode,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Frame {/* #set-calibration-appliance-node-measurement-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame)

```csharp
public Task SetCalibrationApplianceNodeMeasurementFrameAsync(
        CollectionObjectName calibrationApplianceNode,
        CollectionObjectName measurementReferenceFrame,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Offset Transform {/* #set-calibration-appliance-node-measurement-offset-transform */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform)

```csharp
public Task SetCalibrationApplianceNodeMeasurementOffsetTransformAsync(
        CollectionObjectName calibrationApplianceNode,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Point Group {/* #set-calibration-appliance-node-measurement-point-group */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group)

```csharp
public Task SetCalibrationApplianceNodeMeasurementPointGroupAsync(
        CollectionObjectName calibrationApplianceNode,
        CollectionObjectName pointGroupName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Calibration Appliance IP Address {/* #set-calibration-appliance-node-calibration-appliance-ip-address */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address)

```csharp
public Task SetCalibrationApplianceNodeCalibrationApplianceIpAddressAsync(
        CollectionObjectName calibrationApplianceNode,
        string calibrationApplianceIpAddress = "0.0.0.0",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Trapping Node ID {/* #set-calibration-appliance-node-trapping-node-id */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id)

```csharp
public Task SetCalibrationApplianceNodeTrappingNodeIdAsync(
        CollectionObjectName calibrationApplianceNode,
        int trappingNodeId = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Calibration Appliance Node Trap Manager {/* #enabledisable-calibration-appliance-node-trap-manager */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager)

```csharp
public Task EnableDisableCalibrationApplianceNodeTrapManagerAsync(
        CollectionObjectName calibrationApplianceNode,
        bool enable = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Calibration Appliance Node Trap Manager Requests {/* #clear-calibration-appliance-node-trap-manager-requests */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests)

```csharp
public Task ClearCalibrationApplianceNodeTrapManagerRequestsAsync(
        CollectionObjectName calibrationApplianceNode,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Integer Value {/* #set-calibration-appliance-node-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value)

```csharp
public Task SetCalibrationApplianceNodeIntegerValueAsync(
        CollectionObjectName calibrationApplianceNode,
        int indexOffset = 0,
        int integerValue = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Integer Value {/* #get-calibration-appliance-node-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value)

```csharp
public Task<int> GetCalibrationApplianceNodeIntegerValueAsync(
        CollectionObjectName calibrationApplianceNode,
        int indexOffset = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Real Value {/* #set-calibration-appliance-node-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value)

```csharp
public Task SetCalibrationApplianceNodeRealValueAsync(
        CollectionObjectName calibrationApplianceNode,
        int indexOffset = 0,
        double realValue = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Real Value {/* #get-calibration-appliance-node-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value)

```csharp
public Task<double> GetCalibrationApplianceNodeRealValueAsync(
        CollectionObjectName calibrationApplianceNode,
        int indexOffset = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Data {/* #set-calibration-appliance-node-data */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data)

```csharp
public Task SetCalibrationApplianceNodeDataAsync(
        CollectionObjectName calibrationApplianceNode,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Data {/* #get-calibration-appliance-node-data */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data)

```csharp
public Task<double[]> GetCalibrationApplianceNodeDataAsync(
        CollectionObjectName calibrationApplianceNode,
        int realValueCount,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Display Robot {/* #set-calibration-appliance-node-display-robot */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot)

```csharp
public Task SetCalibrationApplianceNodeDisplayRobotAsync(
        CollectionObjectName calibrationApplianceNode,
        CollectionMachineId machineId,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Update Calibration Appliance Node Display Robot Joints {/* #update-calibration-appliance-node-display-robot-joints */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints)

```csharp
public Task UpdateCalibrationApplianceNodeDisplayRobotJointsAsync(
        CollectionObjectName calibrationApplianceNode,
        bool enableDisplayRobotJointUpdates = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Status {/* #get-calibration-appliance-node-status */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status)

```csharp
public Task<CalibrationApplianceNodeStatus> GetCalibrationApplianceNodeStatusAsync(
        CollectionObjectName calibrationApplianceNode,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Result Type {/* #result-type */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AddCalibrationApplianceNodeAsync {/* #addcalibrationappliancenodeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DeleteCalibrationApplianceNodeAsync {/* #deletecalibrationappliancenodeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConnectDisconnectCalibrationApplianceNodeAsync {/* #connectdisconnectcalibrationappliancenodeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeInstrumentAsync {/* #setcalibrationappliancenodeinstrumentasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeMeasurementProfileAsync {/* #setcalibrationappliancenodemeasurementprofileasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeMeasurementTargetAsync {/* #setcalibrationappliancenodemeasurementtargetasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## EnableDisableCalibrationApplianceNodeInstrumentAutoPointAsync {/* #enabledisablecalibrationappliancenodeinstrumentautopointasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeInstrumentDwellTimeAsync {/* #setcalibrationappliancenodeinstrumentdwelltimeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SkipCalibrationApplianceNodeMeasurementAsync {/* #skipcalibrationappliancenodemeasurementasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeMeasurementFrameAsync {/* #setcalibrationappliancenodemeasurementframeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeMeasurementOffsetTransformAsync {/* #setcalibrationappliancenodemeasurementoffsettransformasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeMeasurementPointGroupAsync {/* #setcalibrationappliancenodemeasurementpointgroupasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeCalibrationApplianceIpAddressAsync {/* #setcalibrationappliancenodecalibrationapplianceipaddressasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeTrappingNodeIdAsync {/* #setcalibrationappliancenodetrappingnodeidasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## EnableDisableCalibrationApplianceNodeTrapManagerAsync {/* #enabledisablecalibrationappliancenodetrapmanagerasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ClearCalibrationApplianceNodeTrapManagerRequestsAsync {/* #clearcalibrationappliancenodetrapmanagerrequestsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeIntegerValueAsync {/* #setcalibrationappliancenodeintegervalueasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetCalibrationApplianceNodeIntegerValueAsync {/* #getcalibrationappliancenodeintegervalueasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeRealValueAsync {/* #setcalibrationappliancenoderealvalueasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetCalibrationApplianceNodeRealValueAsync {/* #getcalibrationappliancenoderealvalueasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeDataAsync {/* #setcalibrationappliancenodedataasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetCalibrationApplianceNodeDataAsync {/* #getcalibrationappliancenodedataasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceNodeDisplayRobotAsync {/* #setcalibrationappliancenodedisplayrobotasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## UpdateCalibrationApplianceNodeDisplayRobotJointsAsync {/* #updatecalibrationappliancenodedisplayrobotjointsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetCalibrationApplianceNodeStatusAsync {/* #getcalibrationappliancenodestatusasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/d9dc263acf3e41fe8fea6e88533a954394eb9ad4/targets/2024.1.0508.5)
