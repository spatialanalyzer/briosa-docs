---
title: Robot Operations
description: Unreleased Briosa .NET APIs for reviewed Robot Operations MP commands.
toc_max_heading_level: 2
---

# Robot Operations

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## Shared Types

```csharp
public enum RobotModelLinkType { Dh, SixDof }

public enum RobotActiveJointComponent
{
    None,
    X,
    Y,
    Z,
    Rx,
    Ry,
    Rz,
    Alpha,
    A,
    D,
    Theta,
}

public sealed record RobotModelLinkConfiguration
{
    public RobotModelLinkType LinkType { get; init; } = RobotModelLinkType.Dh;
    public double DhAlphaComponent { get; init; }
    public double DhAComponent { get; init; }
    public double DhDComponent { get; init; }
    public double DhThetaComponent { get; init; }
    public double DhXAxisDeflectionFactor { get; init; }
    public double DhYAxisDeflectionFactor { get; init; }
    public double DhZAxisDeflectionFactor { get; init; }
    public double SixDofXComponent { get; init; }
    public double SixDofYComponent { get; init; }
    public double SixDofZComponent { get; init; }
    public double SixDofRxComponent { get; init; }
    public double SixDofRyComponent { get; init; }
    public double SixDofRzComponent { get; init; }
    public RobotActiveJointComponent ActiveJointComponent { get; init; }
        = RobotActiveJointComponent.None;
    public double EncoderOffsetValue { get; init; }
    public double MinimumEncoderLimit { get; init; }
    public double MaximumEncoderLimit { get; init; }
    public bool EncoderSenseNegative { get; init; }
    public bool IncludeAdditionalEncoder { get; init; }
    public int AdditionalEncoderIndexOffset { get; init; }
    public bool AdditionalEncoderSenseNegative { get; init; }
    public double SegmentOriginMassKg { get; init; }
    public double SegmentCgMassKg { get; init; }
    public Vector SegmentCgInSegment { get; init; } = new(0.0, 0.0, 0.0);
}

public sealed record RobotModelLinkParameters(
    RobotModelLinkConfiguration Configuration,
    double EncoderValue);

public sealed record RobotCalibrationMetrics(
    double XyzMax,
    double XyzAverage,
    double XyzRms,
    double OrientMax,
    double OrientAverage,
    double OrientRms,
    double Robustness);
```

The client maps the enums to the exact MP choice labels. `SixDofZComponent`
maps internally to the exact SDK literal `6DPF Z Component`.

## AddRobotMachineSaMachineAsync

[MP command](/mp-command-catalog/commands/robot-operations#add-robotmachine-samachine) · [gRPC contract](/api/grpc/robot-operations#add-robotmachine-samachine)

```csharp
public Task AddRobotMachineSaMachineAsync(
    FileReference saMachineFile,
    CancellationToken cancellationToken = default);
```

## AddRobotMachineManipKinAsync

[MP command](/mp-command-catalog/commands/robot-operations#add-robotmachine-manipkin) · [gRPC contract](/api/grpc/robot-operations#add-robotmachine-manipkin)

```csharp
public Task AddRobotMachineManipKinAsync(
    FileReference manipKinFile,
    CancellationToken cancellationToken = default);
```

Both methods accept the shared local-SA path or embedded-file representation.

## DeleteRobotMachineAsync

[MP command](/mp-command-catalog/commands/robot-operations#delete-robotmachine) · [gRPC contract](/api/grpc/robot-operations#delete-robotmachine)

```csharp
public Task DeleteRobotMachineAsync(
    CollectionMachineId machineId,
    CancellationToken cancellationToken = default);
```

## MoveRobotMachineToFrameAsync

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-frame) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-to-frame)

```csharp
public Task<Transform> MoveRobotMachineToFrameAsync(
    CollectionMachineId machineId,
    CollectionObjectName destinationFrame,
    bool useSaKinematics = false,
    bool acknowledgeArrival = false,
    CancellationToken cancellationToken = default);
```

Returns `Actual Transform In Working (result)`.

## MoveRobotMachineThroughPathAsync

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-through-path) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-through-path)

```csharp
public Task MoveRobotMachineThroughPathAsync(
    CollectionMachineId machineId,
    IEnumerable<CollectionObjectName> pathFrames,
    bool useSaKinematics = true,
    bool linearSegments = false,
    bool acknowledgeArrival = true,
    CancellationToken cancellationToken = default);
```

## MoveRobotMachineToNamedDestinationAsync

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-named-destination) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-to-named-destination)

```csharp
public Task<Transform> MoveRobotMachineToNamedDestinationAsync(
    CollectionMachineId machineId,
    string destinationName = "",
    bool acknowledgeArrival = false,
    CancellationToken cancellationToken = default);
```

Returns `Actual Transform In Working (result)`.

## SetRobotMachineParameterAsync

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-parameter) · [gRPC contract](/api/grpc/robot-operations#set-robotmachine-parameter)

```csharp
public Task SetRobotMachineParameterAsync(
    CollectionMachineId machineId,
    string parameterName = "",
    double parameterValue = 0.0,
    CancellationToken cancellationToken = default);
```

## GetRobotMachineParameterAsync

[MP command](/mp-command-catalog/commands/robot-operations#get-robotmachine-parameter) · [gRPC contract](/api/grpc/robot-operations#get-robotmachine-parameter)

```csharp
public Task<double> GetRobotMachineParameterAsync(
    CollectionMachineId machineId,
    string parameterName = "",
    CancellationToken cancellationToken = default);
```

Parameter names and values are passed through without a machine-specific
allowlist.

## SetRobotMachineModelLinkParametersAsync

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-model-link-parameters) · [gRPC contract](/api/grpc/robot-operations#set-robotmachine-model-link-parameters)

```csharp
public Task SetRobotMachineModelLinkParametersAsync(
    CollectionMachineId machineId,
    string linkName = "",
    CancellationToken cancellationToken = default);

public Task SetRobotMachineModelLinkParametersAsync(
    CollectionMachineId machineId,
    string linkName,
    RobotModelLinkConfiguration configuration,
    CancellationToken cancellationToken = default);
```

The shorter overload uses every exact MP default. Briosa adds no kinematic or
encoder-range validation.

## GetRobotMachineModelLinkParametersAsync

[MP command](/mp-command-catalog/commands/robot-operations#get-robotmachine-model-link-parameters) · [gRPC contract](/api/grpc/robot-operations#get-robotmachine-model-link-parameters)

```csharp
public Task<RobotModelLinkParameters> GetRobotMachineModelLinkParametersAsync(
    CollectionMachineId machineId,
    string linkName = "",
    CancellationToken cancellationToken = default);
```

The result includes all exact-target outputs, including `EncoderValue`.

## SetRobotMachineBaseTransformAsync

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-base-transform) · [gRPC contract](/api/grpc/robot-operations#set-robotmachine-base-transform)

```csharp
public Task SetRobotMachineBaseTransformAsync(
    CollectionMachineId machineId,
    CollectionObjectName referenceFrame,
    int numberOfSteps = 0,
    CancellationToken cancellationToken = default);

public Task SetRobotMachineBaseTransformAsync(
    CollectionMachineId machineId,
    Transform destinationTransform,
    CollectionObjectName referenceFrame,
    int numberOfSteps = 0,
    CancellationToken cancellationToken = default);
```

The shorter overload uses the exact MP identity-transform default.

## StartRobotMachineInterfaceAsync

[MP command](/mp-command-catalog/commands/robot-operations#start-robotmachine-interface) · [gRPC contract](/api/grpc/robot-operations#start-robotmachine-interface)

```csharp
public Task StartRobotMachineInterfaceAsync(
    CollectionMachineId machineId,
    int interfaceType = 0,
    bool runInSimulation = false,
    CancellationToken cancellationToken = default);
```

Interface type `0` runs the SARobotDriver. Other values remain
machine-specific.

## StopRobotMachineInterfaceAsync

[MP command](/mp-command-catalog/commands/robot-operations#stop-robotmachine-interface) · [gRPC contract](/api/grpc/robot-operations#stop-robotmachine-interface)

```csharp
public Task StopRobotMachineInterfaceAsync(
    CollectionMachineId machineId,
    CancellationToken cancellationToken = default);
```

## ComputeRobotMachineAdjustedGoalFrameAsync

[MP command](/mp-command-catalog/commands/robot-operations#compute-robotmachine-adjusted-goal-frame) · [gRPC contract](/api/grpc/robot-operations#compute-robotmachine-adjusted-goal-frame)

```csharp
public Task<Transform> ComputeRobotMachineAdjustedGoalFrameAsync(
    CollectionObjectName originalGoalFrame,
    CollectionObjectName lastAdjustedGoalFrame,
    CollectionObjectName actualMeasuredFrame,
    CollectionObjectName modifiedGoalFrame,
    CancellationToken cancellationToken = default);
```

The client returns `Transform Value`. The caller owns every Frame and iteration
in the adjusted-goal workflow.

## MoveRobotMachineToJointPoseSixDofAsync

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-joint-pose-6dof) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-to-joint-pose-6dof)

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

## SimulateRobotMachinePathOutputCsvFileAsync

[MP command](/mp-command-catalog/commands/robot-operations#simulate-robotmachine-path-output-csv-file) · [gRPC contract](/api/grpc/robot-operations#simulate-robotmachine-path-output-csv-file)

```csharp
public Task SimulateRobotMachinePathOutputCsvFileAsync(
    CollectionMachineId machineId,
    IEnumerable<CollectionObjectName> pathFrames,
    FileReference outputCsvFile,
    CancellationToken cancellationToken = default);
```

## CreateRobotCalibrationAsync

[MP command](/mp-command-catalog/commands/robot-operations#create-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#create-robot-calibration)

```csharp
public Task CreateRobotCalibrationAsync(
    CollectionMachineId machineId,
    string calibrationName = "",
    CancellationToken cancellationToken = default);
```

## DeleteRobotCalibrationAsync

[MP command](/mp-command-catalog/commands/robot-operations#delete-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#delete-robot-calibration)

```csharp
public Task DeleteRobotCalibrationAsync(
    CollectionMachineId machineId,
    string calibrationName = "",
    CancellationToken cancellationToken = default);
```

## ImportPosesMatchToMeasurementsAsync

[MP command](/mp-command-catalog/commands/robot-operations#import-poses-match-to-measurements) · [gRPC contract](/api/grpc/robot-operations#import-poses-match-to-measurements)

```csharp
public Task ImportPosesMatchToMeasurementsAsync(
    CollectionMachineId machineId,
    IEnumerable<PointName> pointNames,
    FileReference csvJointSetFile,
    CancellationToken cancellationToken = default);

public Task ImportPosesMatchToMeasurementsAsync(
    CollectionMachineId machineId,
    string calibrationName,
    IEnumerable<PointName> pointNames,
    FileReference csvJointSetFile,
    CancellationToken cancellationToken = default);
```

The shorter overload uses the exact empty calibration-name default.

## ImportPosesMatchToFramesAsync

[MP command](/mp-command-catalog/commands/robot-operations#import-poses-match-to-frames) · [gRPC contract](/api/grpc/robot-operations#import-poses-match-to-frames)

```csharp
public Task ImportPosesMatchToFramesAsync(
    CollectionMachineId machineId,
    IEnumerable<CollectionObjectName> frameNames,
    FileReference csvJointSetFile,
    CancellationToken cancellationToken = default);

public Task ImportPosesMatchToFramesAsync(
    CollectionMachineId machineId,
    string calibrationName,
    IEnumerable<CollectionObjectName> frameNames,
    FileReference csvJointSetFile,
    CancellationToken cancellationToken = default);
```

The shorter overload uses the exact empty calibration-name default.

## PerformRobotCalibrationAsync

[MP command](/mp-command-catalog/commands/robot-operations#perform-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#perform-robot-calibration)

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

The exact SDK contract cannot set the composite `Degrees of Freedom` MP input,
so this method omits it. The returned record contains all seven exact-target
calibration metrics.

## PerformRobotCalibrationAlternateAsync

[MP command](/mp-command-catalog/commands/robot-operations#perform-robot-calibration-alternate) · [gRPC contract](/api/grpc/robot-operations#perform-robot-calibration-alternate)

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

The three DOF strings are passed directly to SA. Briosa does not interpret or
validate their machine-specific contents.

## StartStopRobotCalibrationTrappingAsync

[MP command](/mp-command-catalog/commands/robot-operations#startstop-robot-calibration-trapping) · [gRPC contract](/api/grpc/robot-operations#startstop-robot-calibration-trapping)

```csharp
public Task StartStopRobotCalibrationTrappingAsync(
    CollectionMachineId machineId,
    CollectionInstrumentId instrumentId,
    bool startTrapping = false,
    CancellationToken cancellationToken = default);

public Task StartStopRobotCalibrationTrappingAsync(
    CollectionMachineId machineId,
    string calibrationName,
    CollectionInstrumentId instrumentId,
    bool startTrapping = false,
    CancellationToken cancellationToken = default);
```

The shorter overload uses the exact empty calibration-name default. A value of
`false` stops trapping.

## SetActiveRobotCalibrationAsync

[MP command](/mp-command-catalog/commands/robot-operations#set-active-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#set-active-robot-calibration)

```csharp
public Task SetActiveRobotCalibrationAsync(
    CollectionMachineId machineId,
    string calibrationName = "",
    CancellationToken cancellationToken = default);
```

## SetRobotCalibrationToolFrameAsync

[MP command](/mp-command-catalog/commands/robot-operations#set-robot-calibration-tool-frame) · [gRPC contract](/api/grpc/robot-operations#set-robot-calibration-tool-frame)

```csharp
public Task SetRobotCalibrationToolFrameAsync(
    CollectionMachineId machineId,
    string calibrationName = "",
    CancellationToken cancellationToken = default);

public Task SetRobotCalibrationToolFrameAsync(
    CollectionMachineId machineId,
    string calibrationName,
    Transform toolFrameRelativeToFlange,
    CancellationToken cancellationToken = default);
```

The shorter overload uses the exact identity-transform default.

## SetRobotCalibrationMeasurementOffsetInToolFrameAsync

[MP command](/mp-command-catalog/commands/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame) · [gRPC contract](/api/grpc/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame)

```csharp
public Task SetRobotCalibrationMeasurementOffsetInToolFrameAsync(
    CollectionMachineId machineId,
    string calibrationName = "",
    CancellationToken cancellationToken = default);

public Task SetRobotCalibrationMeasurementOffsetInToolFrameAsync(
    CollectionMachineId machineId,
    string calibrationName,
    Transform measurementFrameRelativeToTool,
    CancellationToken cancellationToken = default);
```

The shorter overload uses the exact identity-transform default.

## GetRobotPoseForAFrameAsync

[MP command](/mp-command-catalog/commands/robot-operations#get-robot-pose-for-a-frame) · [gRPC contract](/api/grpc/robot-operations#get-robot-pose-for-a-frame)

```csharp
public Task<double[]> GetRobotPoseForAFrameAsync(
    CollectionMachineId machineId,
    CollectionObjectName goalFrame,
    int goalPoseCount,
    CancellationToken cancellationToken = default);

public Task<double[]> GetRobotPoseForAFrameAsync(
    CollectionMachineId machineId,
    CollectionObjectName goalFrame,
    IEnumerable<double> referencePose,
    int goalPoseCount,
    CancellationToken cancellationToken = default);
```

The shorter overload sends an empty reference pose, which tells SA to use the
current robot pose. `goalPoseCount` is required SDK retrieval metadata.

## GetCalibrationApplianceIntegerValueAsync

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-integer-value) · [gRPC contract](/api/grpc/robot-operations#get-calibration-appliance-integer-value)

```csharp
public Task<int> GetCalibrationApplianceIntegerValueAsync(
    int indexOffset = 0,
    CancellationToken cancellationToken = default);
```

## SetCalibrationApplianceIntegerValueAsync

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-integer-value) · [gRPC contract](/api/grpc/robot-operations#set-calibration-appliance-integer-value)

```csharp
public Task SetCalibrationApplianceIntegerValueAsync(
    int indexOffset = 0,
    int integerValue = 0,
    CancellationToken cancellationToken = default);
```

## GetCalibrationApplianceRealValueAsync

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-real-value) · [gRPC contract](/api/grpc/robot-operations#get-calibration-appliance-real-value)

```csharp
public Task<double> GetCalibrationApplianceRealValueAsync(
    int indexOffset = 0,
    CancellationToken cancellationToken = default);
```

## SetCalibrationApplianceRealValueAsync

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-real-value) · [gRPC contract](/api/grpc/robot-operations#set-calibration-appliance-real-value)

```csharp
public Task SetCalibrationApplianceRealValueAsync(
    int indexOffset = 0,
    double realValue = 0.0,
    CancellationToken cancellationToken = default);
```

## GetCalibrationApplianceDataAsync

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-data) · [gRPC contract](/api/grpc/robot-operations#get-calibration-appliance-data)

```csharp
public Task<double[]> GetCalibrationApplianceDataAsync(
    int realValueCount,
    CancellationToken cancellationToken = default);
```

`realValueCount` is required SDK retrieval metadata. The SDK cannot retrieve
the MP `Integer Values` output, so the method returns only `Real Values`.

## SetCalibrationApplianceDataAsync

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-data) · [gRPC contract](/api/grpc/robot-operations#set-calibration-appliance-data)

```csharp
public Task SetCalibrationApplianceDataAsync(
    CancellationToken cancellationToken = default);

public Task SetCalibrationApplianceDataAsync(
    IEnumerable<double> realValues,
    CancellationToken cancellationToken = default);
```

The shorter overload sends the exact empty-array default. The SDK cannot set
the MP `Integer Values` input, so this is a real-values-only contract.

The calibration-appliance methods operate on SA's appliance data and pass
offsets through without client-side bounds checks.

These methods retain no Robot/Machine workflow state, add no hardware safety
preflight, and are never automatically replayed.
