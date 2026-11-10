---
title: Robot Operations
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Robot Operations

[SA 2026.1.0529.7](/api/dotnet/robot-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/robot-operations)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Add Robot/Machine (.SAMachine) {/* #add-robotmachine-samachine */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#add-robotmachine-samachine) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#add-robotmachine-samachine)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task AddRobotMachineSaMachineAsync(
        FileReference saMachineFile,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Robot/Machine (.ManipKin) {/* #add-robotmachine-manipkin */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#add-robotmachine-manipkin) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#add-robotmachine-manipkin)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task AddRobotMachineManipKinAsync(
        FileReference manipKinFile,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Robot/Machine {/* #delete-robotmachine */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#delete-robotmachine) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#delete-robotmachine)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteRobotMachineAsync(
        CollectionMachineId machineId,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Frame {/* #move-robotmachine-to-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#move-robotmachine-to-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

A request that sets `acknowledgeArrival` to false is denied under every setting, because the call would return before the work it starts has finished.

```csharp
public Task<Transform> MoveRobotMachineToFrameAsync(
        CollectionMachineId machineId,
        CollectionObjectName destinationFrame,
        bool useSaKinematics = false,
        bool acknowledgeArrival = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine through Path {/* #move-robotmachine-through-path */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-through-path) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#move-robotmachine-through-path)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

A request that sets `acknowledgeArrival` to false is denied under every setting, because the call would return before the work it starts has finished.

```csharp
public Task MoveRobotMachineThroughPathAsync(
        CollectionMachineId machineId,
        IEnumerable<CollectionObjectName> pathFrames,
        bool useSaKinematics = true,
        bool linearSegments = false,
        bool acknowledgeArrival = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Named Destination {/* #move-robotmachine-to-named-destination */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-named-destination) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#move-robotmachine-to-named-destination)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

A request that sets `acknowledgeArrival` to false is denied under every setting, because the call would return before the work it starts has finished.

```csharp
public Task<Transform> MoveRobotMachineToNamedDestinationAsync(
        CollectionMachineId machineId,
        string destinationName = "",
        bool acknowledgeArrival = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Parameter {/* #set-robotmachine-parameter */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-parameter) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-robotmachine-parameter)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_session`, `device_config` · **Duration Class:** `long_running`

```csharp
public Task SetRobotMachineParameterAsync(
        CollectionMachineId machineId,
        string parameterName,
        double parameterValue,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `parameterValue` | Required (major 3): an omitted value is rejected before dispatch instead of being sent as 0. |

## Get Robot/Machine Parameter {/* #get-robotmachine-parameter */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robotmachine-parameter) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-robotmachine-parameter)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```csharp
public Task<double> GetRobotMachineParameterAsync(
        CollectionInstrumentId machineId,
        string parameterName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Model Link Parameters {/* #set-robotmachine-model-link-parameters */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-model-link-parameters) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-robotmachine-model-link-parameters)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```csharp
public Task SetRobotMachineModelLinkParametersAsync(
        CollectionMachineId machineId,
        string linkName,
        RobotModelLinkConfiguration configuration,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `configuration` | Every member is required (major 3). The server rejects a request that omits one of the scalar parameters, `DhAlphaComponent` through `SegmentCgMassKg`, before dispatch instead of overwriting it with 0 or false. |

## Get Robot/Machine Model Link Parameters {/* #get-robotmachine-model-link-parameters */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robotmachine-model-link-parameters) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-robotmachine-model-link-parameters)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<RobotModelLinkParameters> GetRobotMachineModelLinkParametersAsync(
        CollectionMachineId machineId,
        string linkName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Base Transform {/* #set-robotmachine-base-transform */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-base-transform) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-robotmachine-base-transform)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRobotMachineBaseTransformAsync(
        CollectionMachineId machineId,
        Transform destinationTransform,
        CollectionObjectName referenceFrame,
        int numberOfSteps = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start Robot/Machine Interface {/* #start-robotmachine-interface */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#start-robotmachine-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#start-robotmachine-interface)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```csharp
public Task StartRobotMachineInterfaceAsync(
        CollectionInstrumentId machineId,
        int interfaceType = 0,
        bool runInSimulation = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Robot/Machine Interface {/* #stop-robotmachine-interface */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#stop-robotmachine-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#stop-robotmachine-interface)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```csharp
public Task StopRobotMachineInterfaceAsync(
        CollectionInstrumentId machineId,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Compute Robot/Machine Adjusted Goal Frame {/* #compute-robotmachine-adjusted-goal-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#compute-robotmachine-adjusted-goal-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#compute-robotmachine-adjusted-goal-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```csharp
public Task<Transform> ComputeRobotMachineAdjustedGoalFrameAsync(
        CollectionObjectName originalGoalFrame,
        CollectionObjectName lastAdjustedGoalFrame,
        CollectionObjectName actualMeasuredFrame,
        CollectionObjectName modifiedGoalFrame,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Joint Pose (6DOF) {/* #move-robotmachine-to-joint-pose-6dof */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-joint-pose-6dof) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#move-robotmachine-to-joint-pose-6dof)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

```csharp
public Task MoveRobotMachineToJointPoseSixDofAsync(
        CollectionMachineId machineId,
        double joint1,
        double joint2,
        double joint3,
        double joint4,
        double joint5,
        double joint6,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `joint1` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |
| `joint2` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |
| `joint3` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |
| `joint4` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |
| `joint5` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |
| `joint6` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |

## Simulate Robot/Machine Path, Output CSV File {/* #simulate-robotmachine-path-output-csv-file */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#simulate-robotmachine-path-output-csv-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#simulate-robotmachine-path-output-csv-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `long_running`

```csharp
public Task SimulateRobotMachinePathOutputCsvFileAsync(
        CollectionMachineId machineId,
        IEnumerable<CollectionObjectName> pathFrames,
        FileReference outputCsvFile,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Robot Calibration {/* #create-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#create-robot-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#create-robot-calibration)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task CreateRobotCalibrationAsync(
        CollectionMachineId machineId,
        string calibrationName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Robot Calibration {/* #delete-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#delete-robot-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#delete-robot-calibration)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteRobotCalibrationAsync(
        CollectionMachineId machineId,
        string calibrationName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `calibrationName` | Required and not empty (major 3): an omitted, empty or whitespace-only value is rejected before dispatch. |

## Import Poses Match to Measurements {/* #import-poses-match-to-measurements */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#import-poses-match-to-measurements) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#import-poses-match-to-measurements)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportPosesMatchToMeasurementsAsync(
        CollectionMachineId machineId,
        IEnumerable<PointName> pointNames,
        FileReference csvJointSetFile,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);

public Task ImportPosesMatchToMeasurementsAsync(
        CollectionMachineId machineId,
        string calibrationName,
        IEnumerable<PointName> pointNames,
        FileReference csvJointSetFile,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Poses Match to Frames {/* #import-poses-match-to-frames */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#import-poses-match-to-frames) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#import-poses-match-to-frames)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportPosesMatchToFramesAsync(
        CollectionMachineId machineId,
        IEnumerable<CollectionObjectName> frameNames,
        FileReference csvJointSetFile,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);

public Task ImportPosesMatchToFramesAsync(
        CollectionMachineId machineId,
        string calibrationName,
        IEnumerable<CollectionObjectName> frameNames,
        FileReference csvJointSetFile,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Perform Robot Calibration {/* #perform-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#perform-robot-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#perform-robot-calibration)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

A request that sets `showInterface` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task<RobotCalibrationMetrics> PerformRobotCalibrationAsync(
        CollectionMachineId machineId,
        string calibrationName = "",
        bool setCurrentBaseAsNominal = false,
        bool showInterface = false,
        int allowedOutlierRejectionCount = 0,
        double allowableMaximumError = 0.0,
        double allowableAverageError = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Perform Robot Calibration (Alternate) {/* #perform-robot-calibration-alternate */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#perform-robot-calibration-alternate) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#perform-robot-calibration-alternate)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

A request that sets `showInterface` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task<RobotCalibrationMetrics> PerformRobotCalibrationAlternateAsync(
        CollectionMachineId machineId,
        string calibrationName = "",
        bool setCurrentBaseAsNominal = false,
        string baseDegreesOfFreedom = "",
        string robotDegreesOfFreedom = "",
        string toolDegreesOfFreedom = "",
        bool showInterface = false,
        int allowedOutlierRejectionCount = 0,
        double allowableMaximumError = 0.0,
        double allowableAverageError = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start/Stop Robot Calibration Trapping {/* #startstop-robot-calibration-trapping */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#startstop-robot-calibration-trapping) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#startstop-robot-calibration-trapping)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```csharp
public Task StartStopRobotCalibrationTrappingAsync(
        CollectionMachineId machineId,
        CollectionInstrumentId instrumentId,
        bool startTrapping = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);

public Task StartStopRobotCalibrationTrappingAsync(
        CollectionMachineId machineId,
        string calibrationName,
        CollectionInstrumentId instrumentId,
        bool startTrapping = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Active Robot Calibration {/* #set-active-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-active-robot-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-active-robot-calibration)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```csharp
public Task SetActiveRobotCalibrationAsync(
        CollectionMachineId machineId,
        string calibrationName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot Calibration Tool Frame {/* #set-robot-calibration-tool-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robot-calibration-tool-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-robot-calibration-tool-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```csharp
public Task SetRobotCalibrationToolFrameAsync(
        CollectionMachineId machineId,
        string calibrationName,
        Transform toolFrame,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `toolFrame` | MP qualifier: relative to flange. |

## Set Robot Calibration Measurement Offset In Tool Frame {/* #set-robot-calibration-measurement-offset-in-tool-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```csharp
public Task SetRobotCalibrationMeasurementOffsetInToolFrameAsync(
        CollectionMachineId machineId,
        string calibrationName,
        Transform measurementFrame,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `measurementFrame` | MP qualifier: relative to tool. |

## Get Robot Pose for a Frame {/* #get-robot-pose-for-a-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robot-pose-for-a-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-robot-pose-for-a-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<double[]> GetRobotPoseForAFrameAsync(
        CollectionMachineId machineId,
        CollectionObjectName goalFrame,
        int goalPoseCount,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);

public Task<double[]> GetRobotPoseForAFrameAsync(
        CollectionMachineId machineId,
        CollectionObjectName goalFrame,
        IEnumerable<double> referencePose,
        int goalPoseCount,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Integer Value {/* #get-calibration-appliance-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-integer-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-calibration-appliance-integer-value)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```csharp
public Task<int> GetCalibrationApplianceIntegerValueAsync(
        int indexOffset = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Integer Value {/* #set-calibration-appliance-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-integer-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-calibration-appliance-integer-value)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```csharp
public Task SetCalibrationApplianceIntegerValueAsync(
        int indexOffset = 0,
        int integerValue = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Real Value {/* #get-calibration-appliance-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-real-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-calibration-appliance-real-value)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```csharp
public Task<double> GetCalibrationApplianceRealValueAsync(
        int indexOffset = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Real Value {/* #set-calibration-appliance-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-real-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-calibration-appliance-real-value)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```csharp
public Task SetCalibrationApplianceRealValueAsync(
        int indexOffset = 0,
        double realValue = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Data {/* #get-calibration-appliance-data */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-calibration-appliance-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```csharp
public Task<double[]> GetCalibrationApplianceDataAsync(
        int realValueCount,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Data {/* #set-calibration-appliance-data */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-calibration-appliance-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```csharp
public Task SetCalibrationApplianceDataAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);

public Task SetCalibrationApplianceDataAsync(
        IEnumerable<double> realValues,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AddRobotMachineSaMachineAsync {/* #addrobotmachinesamachineasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AddRobotMachineManipKinAsync {/* #addrobotmachinemanipkinasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DeleteRobotMachineAsync {/* #deleterobotmachineasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MoveRobotMachineToFrameAsync {/* #moverobotmachinetoframeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MoveRobotMachineThroughPathAsync {/* #moverobotmachinethroughpathasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MoveRobotMachineToNamedDestinationAsync {/* #moverobotmachinetonameddestinationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetRobotMachineParameterAsync {/* #setrobotmachineparameterasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetRobotMachineParameterAsync {/* #getrobotmachineparameterasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetRobotMachineModelLinkParametersAsync {/* #setrobotmachinemodellinkparametersasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetRobotMachineModelLinkParametersAsync {/* #getrobotmachinemodellinkparametersasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetRobotMachineBaseTransformAsync {/* #setrobotmachinebasetransformasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## StartRobotMachineInterfaceAsync {/* #startrobotmachineinterfaceasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## StopRobotMachineInterfaceAsync {/* #stoprobotmachineinterfaceasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ComputeRobotMachineAdjustedGoalFrameAsync {/* #computerobotmachineadjustedgoalframeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MoveRobotMachineToJointPoseSixDofAsync {/* #moverobotmachinetojointposesixdofasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SimulateRobotMachinePathOutputCsvFileAsync {/* #simulaterobotmachinepathoutputcsvfileasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## CreateRobotCalibrationAsync {/* #createrobotcalibrationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DeleteRobotCalibrationAsync {/* #deleterobotcalibrationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ImportPosesMatchToMeasurementsAsync {/* #importposesmatchtomeasurementsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ImportPosesMatchToFramesAsync {/* #importposesmatchtoframesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## PerformRobotCalibrationAsync {/* #performrobotcalibrationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## PerformRobotCalibrationAlternateAsync {/* #performrobotcalibrationalternateasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## StartStopRobotCalibrationTrappingAsync {/* #startstoprobotcalibrationtrappingasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetActiveRobotCalibrationAsync {/* #setactiverobotcalibrationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetRobotCalibrationToolFrameAsync {/* #setrobotcalibrationtoolframeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetRobotCalibrationMeasurementOffsetInToolFrameAsync {/* #setrobotcalibrationmeasurementoffsetintoolframeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetRobotPoseForAFrameAsync {/* #getrobotposeforaframeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetCalibrationApplianceIntegerValueAsync {/* #getcalibrationapplianceintegervalueasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceIntegerValueAsync {/* #setcalibrationapplianceintegervalueasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetCalibrationApplianceRealValueAsync {/* #getcalibrationappliancerealvalueasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceRealValueAsync {/* #setcalibrationappliancerealvalueasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetCalibrationApplianceDataAsync {/* #getcalibrationappliancedataasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCalibrationApplianceDataAsync {/* #setcalibrationappliancedataasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
