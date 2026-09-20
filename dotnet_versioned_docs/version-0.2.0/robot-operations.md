---
title: Robot Operations
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Robot Operations

[SA 2026.1.0529.7](/api/dotnet/robot-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/robot-operations)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Robot/Machine (.SAMachine) {/* #add-robotmachine-samachine */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#add-robotmachine-samachine) · [gRPC Contract](/api/grpc/robot-operations#add-robotmachine-samachine)

```csharp
public Task AddRobotMachineSaMachineAsync(
        FileReference saMachineFile,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Robot/Machine (.ManipKin) {/* #add-robotmachine-manipkin */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#add-robotmachine-manipkin) · [gRPC Contract](/api/grpc/robot-operations#add-robotmachine-manipkin)

```csharp
public Task AddRobotMachineManipKinAsync(
        FileReference manipKinFile,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Robot/Machine {/* #delete-robotmachine */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#delete-robotmachine) · [gRPC Contract](/api/grpc/robot-operations#delete-robotmachine)

```csharp
public Task DeleteRobotMachineAsync(
        CollectionMachineId machineId,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Frame {/* #move-robotmachine-to-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-frame) · [gRPC Contract](/api/grpc/robot-operations#move-robotmachine-to-frame)

```csharp
public Task<Transform> MoveRobotMachineToFrameAsync(
        CollectionMachineId machineId,
        CollectionObjectName destinationFrame,
        bool useSaKinematics = false,
        bool acknowledgeArrival = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine through Path {/* #move-robotmachine-through-path */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-through-path) · [gRPC Contract](/api/grpc/robot-operations#move-robotmachine-through-path)

```csharp
public Task MoveRobotMachineThroughPathAsync(
        CollectionMachineId machineId,
        IEnumerable<CollectionObjectName> pathFrames,
        bool useSaKinematics = true,
        bool linearSegments = false,
        bool acknowledgeArrival = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Named Destination {/* #move-robotmachine-to-named-destination */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-named-destination) · [gRPC Contract](/api/grpc/robot-operations#move-robotmachine-to-named-destination)

```csharp
public Task<Transform> MoveRobotMachineToNamedDestinationAsync(
        CollectionMachineId machineId,
        string destinationName = "",
        bool acknowledgeArrival = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Parameter {/* #set-robotmachine-parameter */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-parameter) · [gRPC Contract](/api/grpc/robot-operations#set-robotmachine-parameter)

```csharp
public Task SetRobotMachineParameterAsync(
        CollectionMachineId machineId,
        string parameterName = "",
        double parameterValue = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Robot/Machine Parameter {/* #get-robotmachine-parameter */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robotmachine-parameter) · [gRPC Contract](/api/grpc/robot-operations#get-robotmachine-parameter)

```csharp
public Task<double> GetRobotMachineParameterAsync(
        CollectionMachineId machineId,
        string parameterName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Model Link Parameters {/* #set-robotmachine-model-link-parameters */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-model-link-parameters) · [gRPC Contract](/api/grpc/robot-operations#set-robotmachine-model-link-parameters)

```csharp
public Task SetRobotMachineModelLinkParametersAsync(
        CollectionMachineId machineId,
        string linkName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Robot/Machine Model Link Parameters {/* #get-robotmachine-model-link-parameters */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robotmachine-model-link-parameters) · [gRPC Contract](/api/grpc/robot-operations#get-robotmachine-model-link-parameters)

```csharp
public Task<RobotModelLinkParameters> GetRobotMachineModelLinkParametersAsync(
        CollectionMachineId machineId,
        string linkName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Base Transform {/* #set-robotmachine-base-transform */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-base-transform) · [gRPC Contract](/api/grpc/robot-operations#set-robotmachine-base-transform)

```csharp
public Task SetRobotMachineBaseTransformAsync(
        CollectionMachineId machineId,
        CollectionObjectName referenceFrame,
        int numberOfSteps = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start Robot/Machine Interface {/* #start-robotmachine-interface */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#start-robotmachine-interface) · [gRPC Contract](/api/grpc/robot-operations#start-robotmachine-interface)

```csharp
public Task StartRobotMachineInterfaceAsync(
        CollectionMachineId machineId,
        int interfaceType = 0,
        bool runInSimulation = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Robot/Machine Interface {/* #stop-robotmachine-interface */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#stop-robotmachine-interface) · [gRPC Contract](/api/grpc/robot-operations#stop-robotmachine-interface)

```csharp
public Task StopRobotMachineInterfaceAsync(
        CollectionMachineId machineId,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Compute Robot/Machine Adjusted Goal Frame {/* #compute-robotmachine-adjusted-goal-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#compute-robotmachine-adjusted-goal-frame) · [gRPC Contract](/api/grpc/robot-operations#compute-robotmachine-adjusted-goal-frame)

```csharp
public Task<Transform> ComputeRobotMachineAdjustedGoalFrameAsync(
        CollectionObjectName originalGoalFrame,
        CollectionObjectName lastAdjustedGoalFrame,
        CollectionObjectName actualMeasuredFrame,
        CollectionObjectName modifiedGoalFrame,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Joint Pose (6DOF) {/* #move-robotmachine-to-joint-pose-6dof */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-joint-pose-6dof) · [gRPC Contract](/api/grpc/robot-operations#move-robotmachine-to-joint-pose-6dof)

```csharp
public Task MoveRobotMachineToJointPoseSixDofAsync(
        CollectionMachineId machineId,
        double joint1 = 0.0,
        double joint2 = 0.0,
        double joint3 = 0.0,
        double joint4 = 0.0,
        double joint5 = 0.0,
        double joint6 = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Simulate Robot/Machine Path, Output CSV File {/* #simulate-robotmachine-path-output-csv-file */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#simulate-robotmachine-path-output-csv-file) · [gRPC Contract](/api/grpc/robot-operations#simulate-robotmachine-path-output-csv-file)

```csharp
public Task SimulateRobotMachinePathOutputCsvFileAsync(
        CollectionMachineId machineId,
        IEnumerable<CollectionObjectName> pathFrames,
        FileReference outputCsvFile,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Robot Calibration {/* #create-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#create-robot-calibration) · [gRPC Contract](/api/grpc/robot-operations#create-robot-calibration)

```csharp
public Task CreateRobotCalibrationAsync(
        CollectionMachineId machineId,
        string calibrationName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Robot Calibration {/* #delete-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#delete-robot-calibration) · [gRPC Contract](/api/grpc/robot-operations#delete-robot-calibration)

```csharp
public Task DeleteRobotCalibrationAsync(
        CollectionMachineId machineId,
        string calibrationName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Poses Match to Measurements {/* #import-poses-match-to-measurements */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#import-poses-match-to-measurements) · [gRPC Contract](/api/grpc/robot-operations#import-poses-match-to-measurements)

```csharp
public Task ImportPosesMatchToMeasurementsAsync(
        CollectionMachineId machineId,
        IEnumerable<PointName> pointNames,
        FileReference csvJointSetFile,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Poses Match to Frames {/* #import-poses-match-to-frames */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#import-poses-match-to-frames) · [gRPC Contract](/api/grpc/robot-operations#import-poses-match-to-frames)

```csharp
public Task ImportPosesMatchToFramesAsync(
        CollectionMachineId machineId,
        IEnumerable<CollectionObjectName> frameNames,
        FileReference csvJointSetFile,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Perform Robot Calibration {/* #perform-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#perform-robot-calibration) · [gRPC Contract](/api/grpc/robot-operations#perform-robot-calibration)

```csharp
public Task<RobotCalibrationMetrics> PerformRobotCalibrationAsync(
        CollectionMachineId machineId,
        string calibrationName = "",
        bool setCurrentBaseAsNominal = false,
        bool showInterface = false,
        int allowedOutlierRejectionCount = 0,
        double allowableMaximumError = 0.0,
        double allowableAverageError = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Perform Robot Calibration (Alternate) {/* #perform-robot-calibration-alternate */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#perform-robot-calibration-alternate) · [gRPC Contract](/api/grpc/robot-operations#perform-robot-calibration-alternate)

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
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start/Stop Robot Calibration Trapping {/* #startstop-robot-calibration-trapping */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#startstop-robot-calibration-trapping) · [gRPC Contract](/api/grpc/robot-operations#startstop-robot-calibration-trapping)

```csharp
public Task StartStopRobotCalibrationTrappingAsync(
        CollectionMachineId machineId,
        CollectionInstrumentId instrumentId,
        bool startTrapping = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Active Robot Calibration {/* #set-active-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-active-robot-calibration) · [gRPC Contract](/api/grpc/robot-operations#set-active-robot-calibration)

```csharp
public Task SetActiveRobotCalibrationAsync(
        CollectionMachineId machineId,
        string calibrationName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot Calibration Tool Frame {/* #set-robot-calibration-tool-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robot-calibration-tool-frame) · [gRPC Contract](/api/grpc/robot-operations#set-robot-calibration-tool-frame)

```csharp
public Task SetRobotCalibrationToolFrameAsync(
        CollectionMachineId machineId,
        string calibrationName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot Calibration Measurement Offset In Tool Frame {/* #set-robot-calibration-measurement-offset-in-tool-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame) · [gRPC Contract](/api/grpc/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame)

```csharp
public Task SetRobotCalibrationMeasurementOffsetInToolFrameAsync(
        CollectionMachineId machineId,
        string calibrationName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Robot Pose for a Frame {/* #get-robot-pose-for-a-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robot-pose-for-a-frame) · [gRPC Contract](/api/grpc/robot-operations#get-robot-pose-for-a-frame)

```csharp
public Task<double[]> GetRobotPoseForAFrameAsync(
        CollectionMachineId machineId,
        CollectionObjectName goalFrame,
        int goalPoseCount,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Integer Value {/* #get-calibration-appliance-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-integer-value) · [gRPC Contract](/api/grpc/robot-operations#get-calibration-appliance-integer-value)

```csharp
public Task<int> GetCalibrationApplianceIntegerValueAsync(
        int indexOffset = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Integer Value {/* #set-calibration-appliance-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-integer-value) · [gRPC Contract](/api/grpc/robot-operations#set-calibration-appliance-integer-value)

```csharp
public Task SetCalibrationApplianceIntegerValueAsync(
        int indexOffset = 0,
        int integerValue = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Real Value {/* #get-calibration-appliance-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-real-value) · [gRPC Contract](/api/grpc/robot-operations#get-calibration-appliance-real-value)

```csharp
public Task<double> GetCalibrationApplianceRealValueAsync(
        int indexOffset = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Real Value {/* #set-calibration-appliance-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-real-value) · [gRPC Contract](/api/grpc/robot-operations#set-calibration-appliance-real-value)

```csharp
public Task SetCalibrationApplianceRealValueAsync(
        int indexOffset = 0,
        double realValue = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Data {/* #get-calibration-appliance-data */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-data) · [gRPC Contract](/api/grpc/robot-operations#get-calibration-appliance-data)

```csharp
public Task<double[]> GetCalibrationApplianceDataAsync(
        int realValueCount,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Data {/* #set-calibration-appliance-data */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-data) · [gRPC Contract](/api/grpc/robot-operations#set-calibration-appliance-data)

```csharp
public Task SetCalibrationApplianceDataAsync(
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

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2026.1.0529.7)
