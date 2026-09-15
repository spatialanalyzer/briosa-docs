---
title: Instrument Operations
description: Unreleased Briosa .NET APIs for the reviewed Instrument Operations MP commands.
toc_max_heading_level: 2
---

# Instrument Operations

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## Shared Types

```csharp
public sealed record LastInstrumentIndexResult(
    int InstrumentIndex,
    CollectionInstrumentId Instrument);

public sealed record InstrumentModelResult(string Name, string Model);

public sealed record InstrumentTypeName(string Value);

public enum InstrumentPositionReportingFrame
{
    InstrumentBase,
    World,
    Working,
}

public sealed record InstrumentPositionUpdate(
    double XOrR,
    double YOrThetaDegrees,
    double ZOrPhiDegrees,
    double TimeSinceUpdateSeconds,
    string TimestampApproximate);

public sealed record PointComparisonResult(
    Vector VectorRepresentation,
    double XValue,
    double YValue,
    double ZValue,
    double Magnitude,
    PointName ResultingPointName);

public sealed record FitErrorResult(
    double RmsError,
    double MaximumError);

public enum ShowUsmnDialog
{
    No,
    Yes,
    OnToleranceViolation,
}

public sealed record InstrumentBestFitResult(
    Transform TransformInWorking,
    WorldTransform OptimumTransform,
    double RmsDeviation,
    double MaximumAbsoluteDeviation,
    int NumberOfUnknowns,
    int NumberOfEquations,
    double Robustness);

public sealed record TrackerEdmTheodoliteUncertainties(
    double ThetaDispersionArcseconds,
    double ThetaThreshold,
    double PhiDispersionArcseconds,
    double PhiThreshold,
    double DistancePpm,
    double DistanceThreshold);

public sealed record InstrumentXyzUncertainties(
    double XUncertainty,
    double YUncertainty,
    double ZUncertainty);

public sealed record InstrumentWeatherSetting(
    double TemperatureFahrenheit,
    double PressureMmHg,
    double RelativeHumidityPercent,
    bool SetAutomatically);

public sealed record ObservationSphericalValues(
    double Distance,
    double Azimuth,
    double Elevation);

public sealed record ObservationInfo(
    CollectionInstrumentId Instrument,
    ObservationSphericalValues SphericalValues,
    bool Active,
    string Timestamp,
    double RmsError,
    double TemperatureFahrenheit,
    double PressureInHg,
    double RelativeHumidityPercent,
    string InfoData);

public sealed record InstrumentTargetsAndModeProfiles(
    IReadOnlyList<string> ModeProfiles,
    IReadOnlyList<string> TargetNames);

public enum TargetComputationMethod
{
    UseMostRecentShotFromEachFace,
    UseOnlyMostRecentShot,
    DoNotChangePriorMeasurements,
    ForceNewPointForEachMeasurement,
    RemoveAllPriorShots,
    DeactivateAllPriorShots,
}

public enum CollimationTiltMode
{
    FullCollimation,
    NoTiltCollimation,
}

public enum CollimationBaselineMethod
{
    DeterminedByValue,
    DeterminedFromScale,
    DeterminedFromKnownPoint,
}

public enum InspectionFilter
{
    All,
    Checks,
    Datums,
}

public sealed record InstrumentTargetStatus(
    bool IsLocked,
    string Name,
    int NumberOfFaces,
    int LockedFace);

public sealed record PerimeterLists(
    IReadOnlyList<CollectionObjectName> ScanPerimeters,
    IReadOnlyList<CollectionObjectName> ExclusionPerimeters);

public sealed record DriftCheckResult(
    double MaximumError,
    double RmsError,
    bool InstrumentAdded,
    CollectionInstrumentId? NewInstrument);

public sealed record CurrentTrappingStatus(
    bool Active,
    CollectionItemName? FocusedItem,
    CollectionInstrumentId? Instrument);

public sealed record CloudToCadAlignmentResult(
    double RmsDeviation,
    double AverageDeviation,
    double MaximumAbsoluteDeviation,
    Transform ResultantTransformInWorking);

public sealed record DoubleVector6(IReadOnlyList<double> Values);

public sealed record UncertaintyCovarianceMatrix(
    DoubleVector6 Row1,
    DoubleVector6 Row2,
    DoubleVector6 Row3,
    DoubleVector6 Row4,
    DoubleVector6 Row5,
    DoubleVector6 Row6);

public sealed record TcpFixtureUncertainties(
    bool SolutionValid,
    Transform RefinedTcpInWorking,
    DoubleVector6 UncertaintiesInTcpFixtureFrame,
    DoubleVector6 UncertaintiesInWorkingFrame,
    double RmsError,
    double MaximumAbsoluteError,
    double GoodnessOfFit,
    double Robustness,
    IReadOnlyList<string> ResultNotes);

public sealed record WrtlChannelStatus(
    bool ConnectionStatus,
    int ActiveChannel);
```

## GetLastInstrumentIndexAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-last-instrument-index) · [gRPC contract](/api/grpc/instrument-operations#get-last-instrument-index)

```csharp
public Task<LastInstrumentIndexResult> GetLastInstrumentIndexAsync(
    CancellationToken cancellationToken = default);

var last = await briosa.InstrumentOperations.GetLastInstrumentIndexAsync();
```

The result preserves both MP outputs: `InstrumentIndex` is the integer
`Instrument ID`, while `Instrument` is the structured Collection/Instrument
value retrieved from the same named MP output.

## RenameInstrumentAsync

[MP command](/mp-command-catalog/commands/instrument-operations#rename-instrument) · [gRPC contract](/api/grpc/instrument-operations#rename-instrument)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `newName` | `string` | `New Name` | Required |

```csharp
public Task RenameInstrumentAsync(
    CollectionInstrumentId instrument,
    string newName,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.RenameInstrumentAsync(instrument, "Tracker 1");
```

## GetInstrumentIdFromNameAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-id-from-name) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-id-from-name)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Required |

```csharp
public Task<CollectionInstrumentId> GetInstrumentIdFromNameAsync(
    string name,
    CancellationToken cancellationToken = default);

var instrument = await briosa.InstrumentOperations
    .GetInstrumentIdFromNameAsync("Tracker 1");
```

## GetInstrumentModelAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-model) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-model)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |

```csharp
public Task<InstrumentModelResult> GetInstrumentModelAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var details = await briosa.InstrumentOperations.GetInstrumentModelAsync(instrument);
```

Returns the MP `Name` and `Model` strings.

## MoveInstrumentToAnotherCollectionAsync

[MP command](/mp-command-catalog/commands/instrument-operations#move-instrument-to-another-collection) · [gRPC contract](/api/grpc/instrument-operations#move-instrument-to-another-collection)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `collectionName` | `CollectionName` | `Collection Name` | Required |

```csharp
public Task MoveInstrumentToAnotherCollectionAsync(
    CollectionInstrumentId instrument,
    CollectionName collectionName,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .MoveInstrumentToAnotherCollectionAsync(instrument, destinationCollection);
```

## SaveInstrumentConfigurationAsync

[MP command](/mp-command-catalog/commands/instrument-operations#save-instrument-configuration) · [gRPC contract](/api/grpc/instrument-operations#save-instrument-configuration)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `configurationFile` | `FileReference` | `Configuration File` | Required |

```csharp
public Task SaveInstrumentConfigurationAsync(
    CollectionInstrumentId instrument,
    FileReference configurationFile,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .SaveInstrumentConfigurationAsync(instrument, configurationFile);
```

## LoadInstrumentConfigurationAsync

[MP command](/mp-command-catalog/commands/instrument-operations#load-instrument-configuration) · [gRPC contract](/api/grpc/instrument-operations#load-instrument-configuration)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `configurationFile` | `FileReference` | `Configuration File` | Required |

```csharp
public Task LoadInstrumentConfigurationAsync(
    CollectionInstrumentId instrument,
    FileReference configurationFile,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .LoadInstrumentConfigurationAsync(instrument, configurationFile);
```

## ExportInstrumentHistoryToXmlFileAsync

[MP command](/mp-command-catalog/commands/instrument-operations#export-instrument-history-to-xml-file) · [gRPC contract](/api/grpc/instrument-operations#export-instrument-history-to-xml-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `filePath` | `FileReference` | `File Path` | Required |

```csharp
public Task ExportInstrumentHistoryToXmlFileAsync(
    CollectionInstrumentId instrument,
    FileReference filePath,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .ExportInstrumentHistoryToXmlFileAsync(instrument, filePath);
```

All three `FileReference` parameters identify paths accessible to the local
Briosa server. Methods returning `Task` complete without a command value.
Cancellation does not prove that in-flight SA work stopped, and the client
does not automatically replay an uncertain call.

## PointAtTargetAsync

[MP command](/mp-command-catalog/commands/instrument-operations#point-at-target) · [gRPC contract](/api/grpc/instrument-operations#point-at-target)

```csharp
public Task PointAtTargetAsync(
    CollectionInstrumentId instrument,
    PointName targetId,
    FileReference? htmlPromptFile = null,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.PointAtTargetAsync(instrument, target);
```

The HTML prompt is omitted unless supplied explicitly.

## MeasureSinglePointHereAsync

[MP command](/mp-command-catalog/commands/instrument-operations#measure-single-point-here) · [gRPC contract](/api/grpc/instrument-operations#measure-single-point-here)

```csharp
public Task MeasureSinglePointHereAsync(
    CollectionInstrumentId instrument,
    PointName targetId,
    bool measureImmediately = false,
    FileReference? htmlPromptFile = null,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.MeasureSinglePointHereAsync(instrument, target);
```

## GetCurrentInstrumentPositionUpdateAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-current-instrument-position-update) · [gRPC contract](/api/grpc/instrument-operations#get-current-instrument-position-update)

```csharp
public Task<InstrumentPositionUpdate> GetCurrentInstrumentPositionUpdateAsync(
    CollectionInstrumentId instrument,
    InstrumentPositionReportingFrame reportingFrame =
        InstrumentPositionReportingFrame.InstrumentBase,
    bool polarCoordinates = false,
    CancellationToken cancellationToken = default);

var position = await briosa.InstrumentOperations
    .GetCurrentInstrumentPositionUpdateAsync(instrument);
```

The client does not convert coordinate modes. The property names preserve both
Cartesian and polar meanings reported by the MP command.

## BuildTargetAsync

[MP command](/mp-command-catalog/commands/instrument-operations#build-target) · [gRPC contract](/api/grpc/instrument-operations#build-target)

```csharp
public Task BuildTargetAsync(
    CollectionInstrumentId instrument,
    PointName outputTargetName,
    PointName nominalPoint,
    ToleranceVectorOptions? tolerance = null,
    FileReference? htmlPromptFile = null,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .BuildTargetAsync(instrument, outputTarget, nominalPoint);
```

An omitted tolerance uses the MP default with every component and magnitude
check disabled at zero.

## MeasureExistingSinglePointAsync

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point) · [gRPC contract](/api/grpc/instrument-operations#measure-existing-single-point)

```csharp
public Task<PointName> MeasureExistingSinglePointAsync(
    CollectionInstrumentId instrument,
    PointName existingTargetId,
    CollectionObjectName groupNameForNewPoint,
    bool measureImmediately = false,
    FileReference? htmlPromptFile = null,
    CancellationToken cancellationToken = default);

var point = await briosa.InstrumentOperations.MeasureExistingSinglePointAsync(
    instrument,
    existingTarget,
    destinationPointGroup);
```

`groupNameForNewPoint` must identify an SA Point Group.

## MeasureExistingSinglePointManualGuideAsync

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-manual-guide) · [gRPC contract](/api/grpc/instrument-operations#measure-existing-single-point-manual-guide)

```csharp
public Task<PointName> MeasureExistingSinglePointManualGuideAsync(
    CollectionInstrumentId instrument,
    PointName existingTargetId,
    CollectionObjectName groupNameForNewPoint,
    bool measureImmediately = false,
    FileReference? htmlPromptFile = null,
    CancellationToken cancellationToken = default);

var point = await briosa.InstrumentOperations
    .MeasureExistingSinglePointManualGuideAsync(
        instrument,
        existingTarget,
        destinationPointGroup);
```

## MeasureExistingSinglePointAndCompareAsync

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-and-compare) · [gRPC contract](/api/grpc/instrument-operations#measure-existing-single-point-and-compare)

```csharp
public Task<PointComparisonResult> MeasureExistingSinglePointAndCompareAsync(
    CollectionInstrumentId instrument,
    PointName existingTargetId,
    CollectionObjectName groupNameForNewPoint,
    bool measureImmediately = false,
    FileReference? htmlPromptFile = null,
    double tolerance = 0.0,
    CancellationToken cancellationToken = default);

var comparison = await briosa.InstrumentOperations
    .MeasureExistingSinglePointAndCompareAsync(
        instrument,
        existingTarget,
        destinationPointGroup);
```

The result preserves the vector, the separately reported X, Y, Z, and
`Magnitude` values, and the resulting point identity. A zero tolerance means
none.

## SetProbeOffsetFrameOnlineAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-online-measure-raw-frame) · [gRPC contract](/api/grpc/instrument-operations#set-probe-offset-frame-online-measure-raw-frame)

```csharp
public Task SetProbeOffsetFrameOnlineAsync(
    CollectionInstrumentId instrument,
    string probeName,
    CollectionObjectName offsetFrame,
    int faceId = 0,
    string measureProfileName = "",
    double timeoutSeconds = 15.0,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetProbeOffsetFrameOnlineAsync(
    instrument,
    probeName,
    offsetFrame);
```

## SetProbeOffsetFrameOfflineAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame) · [gRPC contract](/api/grpc/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame)

```csharp
public Task SetProbeOffsetFrameOfflineAsync(
    CollectionInstrumentId instrument,
    string probeName,
    CollectionObjectName rawMeasuredFrame,
    CollectionObjectName offsetFrame,
    int faceId = 0,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetProbeOffsetFrameOfflineAsync(
    instrument,
    probeName,
    rawMeasuredFrame,
    offsetFrame);
```

Both frame arguments must identify SA Frames.

## StopActiveMeasurementModeAsync

[MP command](/mp-command-catalog/commands/instrument-operations#stop-active-measurement-mode) · [gRPC contract](/api/grpc/instrument-operations#stop-active-measurement-mode)

```csharp
public Task StopActiveMeasurementModeAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.StopActiveMeasurementModeAsync(instrument);
```

The client does not maintain a parallel measurement-state model or restrict
this method to exception recovery. Cancellation does not establish that
physical or SA work stopped, and none of these methods is replayed
automatically after an unknown outcome.

## EnableDisableFrameSetScanModeAllInstrumentsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments) · [gRPC contract](/api/grpc/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments)

```csharp
public Task EnableDisableFrameSetScanModeAllInstrumentsAsync(
    bool enableFrameSetScanMode = true,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .EnableDisableFrameSetScanModeAllInstrumentsAsync();
```

## EnableDisableFrameSetScanModeByInstrumentAsync

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument) · [gRPC contract](/api/grpc/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument)

```csharp
public Task EnableDisableFrameSetScanModeByInstrumentAsync(
    CollectionInstrumentId instrument,
    bool enableFrameSetScanMode = true,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .EnableDisableFrameSetScanModeByInstrumentAsync(instrument);
```

## EnableDisablePointSetScanModeAsync

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-point-set-scan-mode) · [gRPC contract](/api/grpc/instrument-operations#enabledisable-point-set-scan-mode)

```csharp
public Task EnableDisablePointSetScanModeAsync(
    CollectionInstrumentId instrument,
    bool enablePointSetScanMode = true,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.EnableDisablePointSetScanModeAsync(instrument);
```

## AddNewInstrumentAsync

[MP command](/mp-command-catalog/commands/instrument-operations#add-new-instrument) · [gRPC contract](/api/grpc/instrument-operations#add-new-instrument)

```csharp
public Task<CollectionInstrumentId> AddNewInstrumentAsync(
    InstrumentTypeName instrumentType,
    CancellationToken cancellationToken = default);

var instrument = await briosa.InstrumentOperations.AddNewInstrumentAsync(
    new InstrumentTypeName("Leica AT960/930"));
```

The value must be an instrument-type name accepted by the connected exact SA
target. The client does not substitute another type.

## DeleteInstrumentAsync

[MP command](/mp-command-catalog/commands/instrument-operations#delete-instrument) · [gRPC contract](/api/grpc/instrument-operations#delete-instrument)

```csharp
public Task DeleteInstrumentAsync(
    CollectionInstrumentId instrument,
    bool promptUserToConfirm = false,
    bool keepResultingPoints = true,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.DeleteInstrumentAsync(instrument);
```

The no-prompt default intentionally differs from the MP Editor default.

## DeleteMeasurementsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#delete-measurements) · [gRPC contract](/api/grpc/instrument-operations#delete-measurements)

```csharp
public Task DeleteMeasurementsAsync(
    CollectionInstrumentId instrument,
    PointName pointName,
    bool deletePointIfNoMeasurementsRemain = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.DeleteMeasurementsAsync(instrument, point);
```

## DeleteMeasurementObservationAsync

[MP command](/mp-command-catalog/commands/instrument-operations#delete-measurement-observation) · [gRPC contract](/api/grpc/instrument-operations#delete-measurement-observation)

```csharp
public Task DeleteMeasurementObservationAsync(
    PointName pointName,
    int observationIndex = 0,
    bool deletePointIfNoMeasurementsRemain = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.DeleteMeasurementObservationAsync(point);
```

## MoveMeasurementObservationAsync

[MP command](/mp-command-catalog/commands/instrument-operations#move-measurement-observation) · [gRPC contract](/api/grpc/instrument-operations#move-measurement-observation)

```csharp
public Task MoveMeasurementObservationAsync(
    PointName sourcePointName,
    PointName destinationPointName,
    int observationIndex = 0,
    bool deletePointIfNoMeasurementsRemain = false,
    bool forceObservationActive = true,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.MoveMeasurementObservationAsync(
    sourcePoint,
    destinationPoint);
```

Required identities precede optional values in the idiomatic .NET signature;
the wire contract retains exact MP field order. These mutations add no
preflight, confirmation, or transaction. Cancellation does not prove that SA
stopped the mutation, and the client never replays an unknown outcome.

## InitiateServoGuideAsync

[MP command](/mp-command-catalog/commands/instrument-operations#initiate-servo-guide) · [gRPC contract](/api/grpc/instrument-operations#initiate-servo-guide)

```csharp
public Task InitiateServoGuideAsync(
    CollectionInstrumentId instrument,
    IEnumerable<PointName> nominalPoints,
    string groupNameSuffix = "",
    string targetNameSuffix = "",
    double tolerance = 0.0,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.InitiateServoGuideAsync(
    instrument,
    nominalPoints);
```

The nominal-point sequence must contain at least one point. SA interprets the
suffixes and tolerance for the selected servo instrument.

## StartTheodoliteInterfaceAsync

[MP command](/mp-command-catalog/commands/instrument-operations#start-theodolite-interface) · [gRPC contract](/api/grpc/instrument-operations#start-theodolite-interface)

```csharp
public Task StartTheodoliteInterfaceAsync(
    CollectionInstrumentId instrument,
    string theodoliteType,
    int commPort = 0,
    string? deviceIpAddress = null,
    bool simulation = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.StartTheodoliteInterfaceAsync(
    instrument,
    theodoliteType);
```

`theodoliteType` is passed to Theodolite Manager exactly as supplied. The
device IP configures communication from local SA to the instrument; it is not
a remote Briosa server address.

## StartInstrumentInterfaceAsync

[MP command](/mp-command-catalog/commands/instrument-operations#start-instrument-interface) · [gRPC contract](/api/grpc/instrument-operations#start-instrument-interface)

```csharp
public Task StartInstrumentInterfaceAsync(
    CollectionInstrumentId instrument,
    bool initializeAtStartup = false,
    string? deviceIpAddress = null,
    int interfaceType = 0,
    bool runInSimulation = false,
    bool allowStartWithoutInitializationRequirements = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.StartInstrumentInterfaceAsync(instrument);
```

Interface type `0` selects the instrument's default interface. The three
Boolean options all default to `false`, preserving the reviewed MP defaults.

## StopInstrumentInterfaceAsync

[MP command](/mp-command-catalog/commands/instrument-operations#stop-instrument-interface) · [gRPC contract](/api/grpc/instrument-operations#stop-instrument-interface)

```csharp
public Task StopInstrumentInterfaceAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.StopInstrumentInterfaceAsync(instrument);
```

## ActivateDeactivateInstrumentToolbarAsync

[MP command](/mp-command-catalog/commands/instrument-operations#activatedeactivate-instrument-toolbar) · [gRPC contract](/api/grpc/instrument-operations#activatedeactivate-instrument-toolbar)

```csharp
public Task ActivateDeactivateInstrumentToolbarAsync(
    CollectionInstrumentId instrument,
    bool deactivateToolbar = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .ActivateDeactivateInstrumentToolbarAsync(instrument);
```

The default call activates the toolbar. Pass `deactivateToolbar: true` to
deactivate it.

## VerifyInstrumentConnectionAsync

[MP command](/mp-command-catalog/commands/instrument-operations#verify-instrument-connection) · [gRPC contract](/api/grpc/instrument-operations#verify-instrument-connection)

```csharp
public Task<bool> VerifyInstrumentConnectionAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var connected = await briosa.InstrumentOperations
    .VerifyInstrumentConnectionAsync(instrument);
```

The result describes the selected instrument interface. It is separate from
Briosa's SA SDK connection state.

## ConfigureAndMeasureAsync

[MP command](/mp-command-catalog/commands/instrument-operations#configure-and-measure) · [gRPC contract](/api/grpc/instrument-operations#configure-and-measure)

```csharp
public Task ConfigureAndMeasureAsync(
    CollectionInstrumentId instrument,
    PointName target,
    string measurementMode,
    bool measureImmediately = false,
    bool waitForCompletion = true,
    double timeoutSeconds = 0.0,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.ConfigureAndMeasureAsync(
    instrument,
    target,
    measurementMode);
```

SA interprets `measurementMode` for the selected instrument. A
`timeoutSeconds` value of `0.0` preserves the MP command's no-timeout setting;
it does not remove the call deadline or Briosa worker watchdog.

## MeasureAsync

[MP command](/mp-command-catalog/commands/instrument-operations#measure) · [gRPC contract](/api/grpc/instrument-operations#measure)

```csharp
public Task MeasureAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.MeasureAsync(instrument);
```

SA uses its current instrument configuration. The client does not track or
validate a parallel measurement-state model.

## SetXyzReferenceFrameInstrumentBaseAnchorFrameAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame) · [gRPC contract](/api/grpc/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame)

```csharp
public Task SetXyzReferenceFrameInstrumentBaseAnchorFrameAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName anchorFrame,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .SetXyzReferenceFrameInstrumentBaseAnchorFrameAsync(
        instrument,
        anchorFrame);
```

`anchorFrame` must identify an existing SA Frame.

## DockInstrumentInterfaceAsync

[MP command](/mp-command-catalog/commands/instrument-operations#dock-instrument-interface) · [gRPC contract](/api/grpc/instrument-operations#dock-instrument-interface)

```csharp
public Task DockInstrumentInterfaceAsync(
    CollectionInstrumentId instrument,
    bool dockInterface = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.DockInstrumentInterfaceAsync(
    instrument,
    dockInterface: true);
```

The MP default is `false`. These methods use live SA and instrument state,
perform no additional preflight, and never automatically replay an operation
whose completion is unknown.

## LocateInstrumentRefTieInAsync

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-ref-tie-in) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-ref-tie-in)

```csharp
public Task LocateInstrumentRefTieInAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName referenceGroup,
    CollectionObjectName actualsGroup,
    double tolerance = 0.0,
    bool autoSurvey = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.LocateInstrumentRefTieInAsync(
    instrument,
    referenceGroup,
    actualsGroup);
```

Both object identities must refer to Point Groups. SA owns the guided or
automatic measurement workflow and its intermediate state.

## LocateInstrumentGroupToSurfaceQuickFitAsync

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-group-to-surface-quick-fit) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-group-to-surface-quick-fit)

```csharp
public Task<FitErrorResult> LocateInstrumentGroupToSurfaceQuickFitAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName measuredGroup,
    CollectionObjectName surfacePointsGroup,
    CollectionObjectName surfaceToFit,
    IEnumerable<CollectionObjectName>? otherObjectsToTransform = null,
    double rmsTolerance = 0.0,
    double maximumAbsoluteTolerance = 0.0,
    CancellationToken cancellationToken = default);

var errors = await briosa.InstrumentOperations
    .LocateInstrumentGroupToSurfaceQuickFitAsync(
        instrument,
        measuredGroup,
        surfacePointsGroup,
        surfaceToFit);
```

The first two objects must be Point Groups and `surfaceToFit` must be a
Surface. A null additional-object sequence maps to the MP's empty list.

## MultiMeasurementInitiateAsync

[MP command](/mp-command-catalog/commands/instrument-operations#multi-measurement-initiate) · [gRPC contract](/api/grpc/instrument-operations#multi-measurement-initiate)

```csharp
public Task MultiMeasurementInitiateAsync(
    IEnumerable<CollectionInstrumentId> instruments,
    string measurementMode,
    bool waitForCompletion = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.MultiMeasurementInitiateAsync(
    instruments,
    measurementMode);
```

The instrument sequence must be non-empty. The measurement-mode value is
interpreted by the selected instruments and SA.

## MultiMeasurementStopAsync

[MP command](/mp-command-catalog/commands/instrument-operations#multi-measurement-stop) · [gRPC contract](/api/grpc/instrument-operations#multi-measurement-stop)

```csharp
public Task MultiMeasurementStopAsync(
    IEnumerable<CollectionInstrumentId> instruments,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.MultiMeasurementStopAsync(instruments);
```

The sequence must be non-empty. The client does not require or track a matching
initiation call.

## AlignLaserProjectorAsync

[MP command](/mp-command-catalog/commands/instrument-operations#align-laser-projector) · [gRPC contract](/api/grpc/instrument-operations#align-laser-projector)

```csharp
public Task AlignLaserProjectorAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName group,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.AlignLaserProjectorAsync(instrument, group);
```

`group` must identify an existing Point Group.

## LocateInstrumentsUsmnAsync

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instruments-usmn) · [gRPC contract](/api/grpc/instrument-operations#locate-instruments-usmn)

```csharp
public Task<FitErrorResult> LocateInstrumentsUsmnAsync(
    IEnumerable<CollectionInstrumentId> instruments,
    CollectionObjectName outputGroup,
    CollectionObjectName? nominalsGroup = null,
    bool moveInWorkingFrame = false,
    bool autoRejectOutliersAndResolve = false,
    ShowUsmnDialog showUsmnDialog = ShowUsmnDialog.No,
    double maximumAcceptableRmsError = 0.0,
    double maximumAcceptableError = 0.0,
    IEnumerable<CollectionObjectName>? excludedGroups = null,
    bool excludeSingleInstrumentPoints = false,
    bool runUncertaintyFieldAnalysis = false,
    int analysisSamples = 300,
    double analysisTimeLimitMinutes = 4.0,
    CancellationToken cancellationToken = default);

var errors = await briosa.InstrumentOperations.LocateInstrumentsUsmnAsync(
    instruments,
    outputGroup);
```

Required arguments precede optional values in the idiomatic .NET signature;
the wire contract preserves MP field order. A null nominal group means none,
and a null excluded-group sequence maps to an empty list. Briosa defaults the
USMN dialog to `No`.

## CreateTemplatedInstrumentUsmnAsync

[MP command](/mp-command-catalog/commands/instrument-operations#create-templated-instrument-usmn) · [gRPC contract](/api/grpc/instrument-operations#create-templated-instrument-usmn)

```csharp
public Task CreateTemplatedInstrumentUsmnAsync(
    CollectionObjectName instrumentTemplateName,
    CollectionInstrumentId instrument,
    double overallInstrumentWeight = 1.0,
    bool moving = true,
    bool enableX = true,
    bool enableY = true,
    bool enableZ = true,
    bool enableRx = true,
    bool enableRy = true,
    bool enableRz = true,
    bool enableScale = false,
    bool enableComponentWeights = true,
    double azimuthWeight = 1.0,
    double elevationWeight = 1.0,
    double distanceWeight = 1.0,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.CreateTemplatedInstrumentUsmnAsync(
    instrumentTemplateName,
    instrument);
```

The public `overallInstrumentWeight` spelling corrects the MP argument's
`Overal Instrument Weight` typo. The server preserves that exact label in the
SDK binding. These operations use live SA state, add no workflow safeguards,
and are never automatically replayed after an unknown outcome.

## LocateInstrumentBestFitGroupToGroupAsync

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---group-to-group) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-best-fit---group-to-group)

```csharp
public Task<InstrumentBestFitResult> LocateInstrumentBestFitGroupToGroupAsync(
    CollectionObjectName referenceGroup,
    CollectionObjectName correspondingGroup,
    bool showInterface = false,
    double rmsTolerance = 0.0,
    double maximumAbsoluteTolerance = 0.0,
    bool allowScale = false,
    bool allowX = true,
    bool allowY = true,
    bool allowZ = true,
    bool allowRx = true,
    bool allowRy = true,
    bool allowRz = true,
    bool lockDegreesOfFreedom = false,
    bool generateEvent = false,
    FileReference? csvReport = null,
    CancellationToken cancellationToken = default);

var fit = await briosa.InstrumentOperations
    .LocateInstrumentBestFitGroupToGroupAsync(
        referenceGroup,
        correspondingGroup);
```

Both identities must be Point Groups. The interface is hidden and the CSV
report omitted by default; SA uses the report only when the interface is shown.

## LocateInstrumentBestFitNominalGeometryAsync

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---nominal-geometry) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-best-fit---nominal-geometry)

```csharp
public Task<InstrumentBestFitResult> LocateInstrumentBestFitNominalGeometryAsync(
    CollectionInstrumentId instrument,
    IEnumerable<CollectionObjectName> geometryRelationships,
    bool showInterface = false,
    double rmsTolerance = 0.0,
    double maximumAbsoluteTolerance = 0.0,
    bool allowScale = false,
    bool allowX = true,
    bool allowY = true,
    bool allowZ = true,
    bool allowRx = true,
    bool allowRy = true,
    bool allowRz = true,
    bool lockDegreesOfFreedom = false,
    bool generateEvent = false,
    FileReference? csvReport = null,
    CancellationToken cancellationToken = default);

var fit = await briosa.InstrumentOperations
    .LocateInstrumentBestFitNominalGeometryAsync(
        instrument,
        geometryRelationships);
```

The relationship sequence must be non-empty. All other defaults and result
fields match the group-to-group operation.

## GetInstrumentTransformAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-transform) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-transform)

```csharp
public Task<Transform> GetInstrumentTransformAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName referenceFrame,
    CancellationToken cancellationToken = default);

var transform = await briosa.InstrumentOperations.GetInstrumentTransformAsync(
    instrument,
    referenceFrame);
```

`referenceFrame` must identify an existing SA Frame.

## SetInstrumentTransformAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-transform) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-transform)

```csharp
public Task SetInstrumentTransformAsync(
    CollectionInstrumentId instrument,
    Transform destinationTransform,
    CollectionObjectName referenceFrame,
    int numberOfSteps = 0,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetInstrumentTransformAsync(
    instrument,
    destinationTransform,
    referenceFrame);
```

Animation steps default to `0`.

## GetTrackerEdmTheodoliteUncertaintiesAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-trackeredm-theodolite-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#get-trackeredm-theodolite-uncertainties)

```csharp
public Task<TrackerEdmTheodoliteUncertainties>
    GetTrackerEdmTheodoliteUncertaintiesAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);

var uncertainties = await briosa.InstrumentOperations
    .GetTrackerEdmTheodoliteUncertaintiesAsync(instrument);
```

The exact-target result differs from the installed command-listing page. The
linear thresholds use current SA job units.

## SetTrackerEdmTheodoliteUncertaintiesAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-trackeredm-theodolite-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#set-trackeredm-theodolite-uncertainties)

```csharp
public Task SetTrackerEdmTheodoliteUncertaintiesAsync(
    CollectionInstrumentId instrument,
    double thetaDispersionArcseconds = 1.0,
    double thetaThreshold = 0.001,
    double phiDispersionArcseconds = 1.0,
    double phiThreshold = 0.001,
    double distancePpm = 2.5,
    double distanceThreshold = 0.0003,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .SetTrackerEdmTheodoliteUncertaintiesAsync(instrument);
```

The server preserves the spacing differences in the exact exported phi
argument labels.

## GetPcmmInstrumentXyzUncertaintiesAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-pcmm-instrument-xyz-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#get-pcmm-instrument-xyz-uncertainties)

```csharp
public Task<InstrumentXyzUncertainties> GetPcmmInstrumentXyzUncertaintiesAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var uncertainties = await briosa.InstrumentOperations
    .GetPcmmInstrumentXyzUncertaintiesAsync(instrument);
```

## SetPcmmInstrumentXyzUncertaintiesAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-pcmm-instrument-xyz-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#set-pcmm-instrument-xyz-uncertainties)

```csharp
public Task SetPcmmInstrumentXyzUncertaintiesAsync(
    CollectionInstrumentId instrument,
    double xUncertainty = 0.001,
    double yUncertainty = 0.001,
    double zUncertainty = 0.001,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .SetPcmmInstrumentXyzUncertaintiesAsync(instrument);
```

The server binds `yUncertainty` to the exported `Y Uncertainty)` label.

## GetXyzInstrumentUncertaintiesAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-xyz-instrument-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#get-xyz-instrument-uncertainties)

```csharp
public Task<InstrumentXyzUncertainties> GetXyzInstrumentUncertaintiesAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var uncertainties = await briosa.InstrumentOperations
    .GetXyzInstrumentUncertaintiesAsync(instrument);
```

## SetXyzInstrumentUncertaintiesAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-xyz-instrument-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#set-xyz-instrument-uncertainties)

```csharp
public Task SetXyzInstrumentUncertaintiesAsync(
    CollectionInstrumentId instrument,
    double xUncertainty = 0.0005,
    double yUncertainty = 0.0005,
    double zUncertainty = 0.0005,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetXyzInstrumentUncertaintiesAsync(instrument);
```

The server binds `zUncertainty` to the exported `Z Uncertainty)` label. These
operations add no preflight and are never automatically replayed after an
unknown outcome.

## GetInstrumentWeatherSettingAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-weather-setting) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-weather-setting)

```csharp
public Task<InstrumentWeatherSetting> GetInstrumentWeatherSettingAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var weather = await briosa.InstrumentOperations
    .GetInstrumentWeatherSettingAsync(instrument);
```

The result uses degrees Fahrenheit, mmHg, and relative-humidity percentage and
reports whether the values were set automatically.

## SetInstrumentWeatherSettingAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-weather-setting) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-weather-setting)

```csharp
public Task SetInstrumentWeatherSettingAsync(
    CollectionInstrumentId instrument,
    double temperatureFahrenheit = 0.0,
    double pressureMmHg = 0.0,
    double relativeHumidityPercent = 0.0,
    bool setAutomatically = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetInstrumentWeatherSettingAsync(
    instrument,
    temperatureFahrenheit,
    pressureMmHg,
    relativeHumidityPercent);
```

When `setAutomatically` is true, SA ignores all three numeric values.

## GetInstrumentPartTemperatureAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-part-temperature) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-part-temperature)

```csharp
public Task<double> GetInstrumentPartTemperatureAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var partTemperatureFahrenheit = await briosa.InstrumentOperations
    .GetInstrumentPartTemperatureAsync(instrument);
```

The returned temperature is in degrees Fahrenheit.

## ComputeCteScaleFactorAsync

[MP command](/mp-command-catalog/commands/instrument-operations#compute-cte-scale-factor) · [gRPC contract](/api/grpc/instrument-operations#compute-cte-scale-factor)

```csharp
public Task<double> ComputeCteScaleFactorAsync(
    double materialCtePerDegreeFahrenheit = 0.0,
    double initialTemperatureFahrenheit = 0.0,
    double finalTemperatureFahrenheit = 0.0,
    CancellationToken cancellationToken = default);

var scaleFactor = await briosa.InstrumentOperations.ComputeCteScaleFactorAsync(
    materialCtePerDegreeFahrenheit,
    initialTemperatureFahrenheit,
    finalTemperatureFahrenheit);
```

This method intentionally retains SA's familiar Fahrenheit-based MP operation.

## SetMultiplyInstrumentScaleFactorAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-multiply-instrument-scale-factor-caution) · [gRPC contract](/api/grpc/instrument-operations#set-multiply-instrument-scale-factor-caution)

```csharp
public Task SetMultiplyInstrumentScaleFactorAsync(
    CollectionInstrumentId instrument,
    double scaleFactor = 0.0,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetMultiplyInstrumentScaleFactorAsync(
    instrument,
    scaleFactor);
```

:::warning

This multiplies the current instrument scale; it does not replace it. The MP
default is `0.0`, and Briosa does not add a confirmation or range check.

:::

## SetAbsoluteInstrumentScaleFactorAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-absolute-instrument-scale-factor-caution) · [gRPC contract](/api/grpc/instrument-operations#set-absolute-instrument-scale-factor-caution)

```csharp
public Task SetAbsoluteInstrumentScaleFactorAsync(
    CollectionInstrumentId instrument,
    double scaleFactor = 0.0,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetAbsoluteInstrumentScaleFactorAsync(
    instrument,
    scaleFactor);
```

:::warning

This replaces the current scale; it does not multiply it. The MP default is
`0.0`, and Briosa does not add a safeguard.

:::

## GetInstrumentScaleFactorAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-scale-factor) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-scale-factor)

```csharp
public Task<double> GetInstrumentScaleFactorAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var scaleFactor = await briosa.InstrumentOperations
    .GetInstrumentScaleFactorAsync(instrument);
```

## TransformInstrumentFrameToFrameAsync

[MP command](/mp-command-catalog/commands/instrument-operations#transform-instrument---frame-to-frame) · [gRPC contract](/api/grpc/instrument-operations#transform-instrument---frame-to-frame)

```csharp
public Task TransformInstrumentFrameToFrameAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName initialFrame,
    CollectionObjectName destinationFrame,
    int numberOfSteps = 0,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.TransformInstrumentFrameToFrameAsync(
    instrument,
    initialFrame,
    destinationFrame);
```

Both object identities must be existing SA Frames.

## TransformInstrumentByDeltaAsync

[MP command](/mp-command-catalog/commands/instrument-operations#transform-instrument-by-delta) · [gRPC contract](/api/grpc/instrument-operations#transform-instrument-by-delta)

```csharp
public Task TransformInstrumentByDeltaAsync(
    CollectionInstrumentId instrument,
    WorldTransform deltaTransform,
    bool applyScaleToInstrument = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.TransformInstrumentByDeltaAsync(
    instrument,
    deltaTransform);
```

## TransformMultipleInstrumentsByDeltaAsync

[MP command](/mp-command-catalog/commands/instrument-operations#transform-multiple-instruments-by-delta) · [gRPC contract](/api/grpc/instrument-operations#transform-multiple-instruments-by-delta)

```csharp
public Task TransformMultipleInstrumentsByDeltaAsync(
    IEnumerable<CollectionInstrumentId> instruments,
    WorldTransform deltaTransform,
    bool applyScaleToInstruments = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.TransformMultipleInstrumentsByDeltaAsync(
    instruments,
    deltaTransform);
```

The instrument sequence must be non-empty. Both delta methods default to not
applying the transform's scale. Briosa adds no transaction or rollback and
never automatically replays an unknown outcome.

## InstrumentOperationalCheckAsync

[MP command](/mp-command-catalog/commands/instrument-operations#instrument-operational-check) · [gRPC contract](/api/grpc/instrument-operations#instrument-operational-check)

```csharp
public Task InstrumentOperationalCheckAsync(
    CollectionInstrumentId instrument,
    string checkType,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.InstrumentOperationalCheckAsync(
    instrument,
    checkType);
```

`checkType` is required and is passed to SA as an opaque,
instrument-interface-specific command string.

## GetNumberOfObservationsOnTargetAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-number-of-observations-on-target) · [gRPC contract](/api/grpc/instrument-operations#get-number-of-observations-on-target)

```csharp
public Task<int> GetNumberOfObservationsOnTargetAsync(
    PointName point,
    CancellationToken cancellationToken = default);

var observationCount = await briosa.InstrumentOperations
    .GetNumberOfObservationsOnTargetAsync(point);
```

## GetInstrumentsWithObservationsOnTargetAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instruments-with-observations-on-target) · [gRPC contract](/api/grpc/instrument-operations#get-instruments-with-observations-on-target)

```csharp
public Task<IReadOnlyList<CollectionInstrumentId>>
    GetInstrumentsWithObservationsOnTargetAsync(
        PointName point,
        CancellationToken cancellationToken = default);

var instruments = await briosa.InstrumentOperations
    .GetInstrumentsWithObservationsOnTargetAsync(point);
```

The returned order is the order supplied by SA.

## GetTargetsMeasuredByInstrumentAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-targets-measured-by-instrument) · [gRPC contract](/api/grpc/instrument-operations#get-targets-measured-by-instrument)

```csharp
public Task<IReadOnlyList<PointName>> GetTargetsMeasuredByInstrumentAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var targets = await briosa.InstrumentOperations
    .GetTargetsMeasuredByInstrumentAsync(instrument);
```

## SetObservationStatusAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-status) · [gRPC contract](/api/grpc/instrument-operations#set-observation-status)

```csharp
public Task SetObservationStatusAsync(
    PointName point,
    int observationIndex = 0,
    bool active = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetObservationStatusAsync(
    point,
    observationIndex,
    active: true);
```

`observationIndex` is zero-based. Its default is `0`; `active` defaults to
`false`, matching the MP command.

## GetObservationInfoAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-observation-info) · [gRPC contract](/api/grpc/instrument-operations#get-observation-info)

```csharp
public Task<ObservationInfo> GetObservationInfoAsync(
    PointName point,
    int observationIndex = 0,
    CancellationToken cancellationToken = default);

var observation = await briosa.InstrumentOperations.GetObservationInfoAsync(
    point,
    observationIndex);
```

`SphericalValues` contains the raw MP vector in distance, azimuth, elevation
order. Briosa does not normalize instrument-specific angular direction or
parse `Timestamp` and `InfoData`. SA uses `0` for unavailable RMS error and
`-1` for unavailable temperature, pressure, or humidity.

## FabricateObservationsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#fabricate-observations) · [gRPC contract](/api/grpc/instrument-operations#fabricate-observations)

```csharp
public Task FabricateObservationsAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName pointGroup,
    bool introduceInstrumentError = false,
    bool limitDistance = false,
    double minimumDistance = 0.0,
    double maximumDistance = 1000000.0,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.FabricateObservationsAsync(
    instrument,
    pointGroup);
```

SA ignores the distance values unless `limitDistance` is true. Simulated
instrument error is available only for applicable polar instruments. Briosa
adds no preflight, transaction, or rollback.

## GetObscuredPointsFromInstrumentAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-obscured-points-from-instrument) · [gRPC contract](/api/grpc/instrument-operations#get-obscured-points-from-instrument)

```csharp
public Task<IReadOnlyList<PointName>> GetObscuredPointsFromInstrumentAsync(
    CollectionInstrumentId instrument,
    IEnumerable<PointName> candidatePoints,
    bool showObscuredShots = false,
    CancellationToken cancellationToken = default);

var obscuredPoints = await briosa.InstrumentOperations
    .GetObscuredPointsFromInstrumentAsync(instrument, candidatePoints);
```

The result preserves SA's order. Shot-line display defaults to disabled.

## GetInstrumentTargetsAndModeProfilesAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-targets-and-modeprofiles) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-targets-and-modeprofiles)

```csharp
public Task<InstrumentTargetsAndModeProfiles>
    GetInstrumentTargetsAndModeProfilesAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);

var available = await briosa.InstrumentOperations
    .GetInstrumentTargetsAndModeProfilesAsync(instrument);
```

`ModeProfiles` and `TargetNames` are independent ordered lists. The server uses
the exact SA 2026.1 `Instrument to get` binding and does not zip the lists.

## SetInstrumentMeasurementModeProfileAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-measurement-modeprofile) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-measurement-modeprofile)

```csharp
public Task SetInstrumentMeasurementModeProfileAsync(
    CollectionInstrumentId instrument,
    string modeProfile,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetInstrumentMeasurementModeProfileAsync(
    instrument,
    modeProfile);
```

`modeProfile` is required and is passed directly to SA. These methods do not
create Briosa-owned workflow state and are never automatically replayed after
an unknown outcome.

## SetInstrumentGroupAndTargetAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-group-and-target) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-group-and-target)

```csharp
public Task SetInstrumentGroupAndTargetAsync(
    CollectionInstrumentId instrument,
    PointName point,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetInstrumentGroupAndTargetAsync(
    instrument,
    point);
```

This changes live instrument-interface naming state. Point-cloud instruments
may ignore the target portion of `point`; Briosa does not retain the setting.

## SetInstrumentTargetingAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-targeting) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-targeting)

```csharp
public Task SetInstrumentTargetingAsync(
    CollectionInstrumentId instrument,
    string targetingName,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetInstrumentTargetingAsync(
    instrument,
    targetingName);
```

The required targeting name is passed directly to the active instrument
interface.

## GetInstrumentMeasurementModeProfileAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-measurement-modeprofile) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-measurement-modeprofile)

```csharp
public Task<string> GetInstrumentMeasurementModeProfileAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var modeProfile = await briosa.InstrumentOperations
    .GetInstrumentMeasurementModeProfileAsync(instrument);
```

This returns the active value, not the available lists returned by
`GetInstrumentTargetsAndModeProfilesAsync`.

## GetInstrumentGroupAndTargetAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-group-and-target) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-group-and-target)

```csharp
public Task<PointName> GetInstrumentGroupAndTargetAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var point = await briosa.InstrumentOperations
    .GetInstrumentGroupAndTargetAsync(instrument);
```

## GetInstrumentTargetingAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-targeting) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-targeting)

```csharp
public Task<string> GetInstrumentTargetingAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var targetingName = await briosa.InstrumentOperations
    .GetInstrumentTargetingAsync(instrument);
```

## SetTargetComputationOptionsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-target-computation-options) · [gRPC contract](/api/grpc/instrument-operations#set-target-computation-options)

```csharp
public Task SetTargetComputationOptionsAsync(
    TargetComputationMethod computationMethod =
        TargetComputationMethod.UseMostRecentShotFromEachFace,
    bool ignoreDistanceMeasurements = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetTargetComputationOptionsAsync();
```

This changes application-global SA state. Briosa does not cache, restore,
lease, or otherwise manage the option.

## SetObservationMirrorCubeShotFaceAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-mirror-cube-shot-face) · [gRPC contract](/api/grpc/instrument-operations#set-observation-mirror-cube-shot-face)

```csharp
public Task SetObservationMirrorCubeShotFaceAsync(
    PointName point,
    int observationIndex = 0,
    bool isMirrorCubeShot = false,
    int mirrorCubeShotFace = 1,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetObservationMirrorCubeShotFaceAsync(
    point,
    observationIndex,
    isMirrorCubeShot: true,
    mirrorCubeShotFace: 1);
```

The index is zero-based. SA documents faces 1 through 6; Briosa adds no range
check.

## SetObservationCollimationShotOptionsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-collimation-shot-options) · [gRPC contract](/api/grpc/instrument-operations#set-observation-collimation-shot-options)

```csharp
public Task SetObservationCollimationShotOptionsAsync(
    PointName point,
    int observationIndex = 0,
    bool isCollimationShot = false,
    CollectionInstrumentId? targetedInstrument = null,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.SetObservationCollimationShotOptionsAsync(
    point,
    observationIndex,
    isCollimationShot: true,
    targetedInstrument: targetedInstrument);
```

The target instrument may be omitted when marking a normal shot. The server
preserves the exact malformed SDK argument label internally.

## CollimationAsync

[MP command](/mp-command-catalog/commands/instrument-operations#collimation) · [gRPC contract](/api/grpc/instrument-operations#collimation)

```csharp
public Task CollimationAsync(
    CollectionInstrumentId stationaryInstrument,
    CollectionInstrumentId movingInstrument,
    PointName collimationPoint,
    bool zeroMovingInstrument = false,
    CollimationTiltMode tiltMode = CollimationTiltMode.FullCollimation,
    CollimationBaselineMethod baselineMethod =
        CollimationBaselineMethod.DeterminedByValue,
    double baselineDistance = 0.0,
    PointName? scalePoint1 = null,
    PointName? scalePoint2 = null,
    PointName? notMeasuredByMovingInstrument = null,
    PointName? asMeasuredByMovingInstrument = null,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.CollimationAsync(
    stationaryInstrument,
    movingInstrument,
    collimationPoint);
```

The four optional points apply according to `baselineMethod`. Briosa passes
omitted values to SA as empty MP identities and adds no preflight workflow
validation.

## GetInstrumentTargetStatusAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-target-status) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-target-status)

```csharp
public Task<InstrumentTargetStatus> GetInstrumentTargetStatusAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

var status = await briosa.InstrumentOperations
    .GetInstrumentTargetStatusAsync(instrument);
```

SA documents this method as laser-tracker-only. These methods remain stateless
from Briosa's perspective and are never automatically replayed after an unknown
outcome.

## MakeSurfaceFaceListFromPointProximityAsync

[MP command](/mp-command-catalog/commands/instrument-operations#make-surface-face-list-from-point-proximity) · [gRPC contract](/api/grpc/instrument-operations#make-surface-face-list-from-point-proximity)

```csharp
public Task<SurfaceFaceList> MakeSurfaceFaceListFromPointProximityAsync(
    IReadOnlyList<PointName> measuredPoints,
    CancellationToken cancellationToken = default);

var faces = await briosa.InstrumentOperations
    .MakeSurfaceFaceListFromPointProximityAsync(measuredPoints);
```

`SurfaceFaceList.Value` is opaque and can be passed directly to the other
surface-face methods.

## ScanWithinPerimeterAsync

[MP command](/mp-command-catalog/commands/instrument-operations#scan-within-perimeter) · [gRPC contract](/api/grpc/instrument-operations#scan-within-perimeter)

```csharp
public Task ScanWithinPerimeterAsync(
    CollectionInstrumentId instrument,
    IReadOnlyList<CollectionObjectName> scanPerimeters,
    IReadOnlyList<CollectionObjectName> exclusionPerimeters,
    string parameterSetName,
    CollectionObjectName pointGroup,
    bool waitForCompletion = true,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.ScanWithinPerimeterAsync(
    instrument,
    scanPerimeters,
    exclusionPerimeters,
    parameterSetName,
    pointGroup);
```

The exclusion list is part of the exact 2026.1 contract even though an older
installed argument table omits it.

## EditScanPerimeterProfileAsync

[MP command](/mp-command-catalog/commands/instrument-operations#edit-scan-perimeter-profile) · [gRPC contract](/api/grpc/instrument-operations#edit-scan-perimeter-profile)

```csharp
public Task EditScanPerimeterProfileAsync(
    CollectionInstrumentId instrument,
    IReadOnlyList<CollectionObjectName> scanPerimeters,
    IReadOnlyList<CollectionObjectName> exclusionPerimeters,
    string parameterSetName,
    string profileName,
    bool clearProfile = true,
    bool createNewProfile = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.EditScanPerimeterProfileAsync(
    instrument,
    scanPerimeters,
    exclusionPerimeters,
    parameterSetName,
    profileName);
```

## GetEstimatedScanTimeAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-estimated-scan-time) · [gRPC contract](/api/grpc/instrument-operations#get-estimated-scan-time)

```csharp
public Task<double> GetEstimatedScanTimeAsync(
    CollectionInstrumentId instrument,
    string profileName,
    CancellationToken cancellationToken = default);

var estimate = await briosa.InstrumentOperations
    .GetEstimatedScanTimeAsync(instrument, profileName);
```

The value is returned exactly as SA reports it. Its unit is not identified by
the available SA documentation.

## ConstructPerimetersFromSurfaceFaceListAsync

[MP command](/mp-command-catalog/commands/instrument-operations#construct-perimeters-from-surface-face-list) · [gRPC contract](/api/grpc/instrument-operations#construct-perimeters-from-surface-face-list)

```csharp
public Task<PerimeterLists> ConstructPerimetersFromSurfaceFaceListAsync(
    SurfaceFaceList surfaceFaces,
    CancellationToken cancellationToken = default);

var perimeters = await briosa.InstrumentOperations
    .ConstructPerimetersFromSurfaceFaceListAsync(faces);
```

Briosa passes `surfaceFaces.Value` to SA and returns the scan and exclusion
lists separately.

## ScanCadFacesAsync

[MP command](/mp-command-catalog/commands/instrument-operations#scan-cad-faces) · [gRPC contract](/api/grpc/instrument-operations#scan-cad-faces)

```csharp
public Task ScanCadFacesAsync(
    CollectionInstrumentId instrument,
    SurfaceFaceList surfaceFaces,
    string parameterSetName,
    bool enableExclusions = true,
    bool waitForCompletion = true,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.ScanCadFacesAsync(
    instrument,
    faces,
    parameterSetName);
```

## EdgeScanMeasurementAsync

[MP command](/mp-command-catalog/commands/instrument-operations#edge-scan-measurement) · [gRPC contract](/api/grpc/instrument-operations#edge-scan-measurement)

```csharp
public Task EdgeScanMeasurementAsync(
    CollectionInstrumentId instrument,
    PointName pointNearEdge,
    PointName edgeSearchDirectionPoint,
    string parameterSetName,
    CollectionObjectName pointGroup,
    string targetName,
    CancellationToken cancellationToken = default);
```

This operation preserves the laser-radar edge-scan workflow without Briosa
tracking its intermediate SA state.

## TrackTapeMeasurementAsync

[MP command](/mp-command-catalog/commands/instrument-operations#track-tape-measurement) · [gRPC contract](/api/grpc/instrument-operations#track-tape-measurement)

```csharp
public Task TrackTapeMeasurementAsync(
    CollectionInstrumentId instrument,
    PointName pointOnTape,
    PointName pointOnPart,
    PointName directionPoint,
    PointName terminationPoint,
    string parameterSetName,
    CollectionObjectName pointGroup,
    string initialTargetName,
    CancellationToken cancellationToken = default);
```

## AutoMeasurePointsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-points) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-points)

```csharp
public Task AutoMeasurePointsAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName referenceGroup,
    CollectionObjectName actualsGroup,
    bool forceExistingGroup = false,
    bool showCompleteDialog = false,
    bool waitForCompletion = true,
    bool autoStart = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.AutoMeasurePointsAsync(
    instrument,
    referenceGroup,
    actualsGroup);
```

`showCompleteDialog: false` selects SA's abbreviated interface, not guaranteed
headless execution. Callers can separately configure SA's application-global
interactivity level to suppress the interface.

## AutoMeasureVectorsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-vectors) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-vectors)

```csharp
public Task AutoMeasureVectorsAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName vectorGroup,
    CollectionObjectName actualsGroup,
    bool projectPointToVector = false,
    double angleTolerance = 0.0,
    double highTolerance = 0.0,
    double lowTolerance = 0.0,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.AutoMeasureVectorsAsync(
    instrument,
    vectorGroup,
    actualsGroup);
```

The group types are constrained to Vector Group and Point Group. Briosa adds no
workflow state, replay, or preflight behavior around these methods.

## AutoMeasureSurfaceVectorIntersectionsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-surface-vector-intersections) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-surface-vector-intersections)

```csharp
public Task AutoMeasureSurfaceVectorIntersectionsAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName vectorGroup,
    CollectionObjectName resultantGroup,
    bool waitForComplete = true,
    CancellationToken cancellationToken = default);
```

The groups must identify a Vector Group and Point Group.

## AutoMeasureSpecifiedGeometryAsync

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-specified-geometry) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-specified-geometry)

```csharp
public Task AutoMeasureSpecifiedGeometryAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName geometry,
    string modeProfile,
    bool waitForComplete = false,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.AutoMeasureSpecifiedGeometryAsync(
    instrument,
    geometry,
    modeProfile);
```

## AutoMeasureBatchOfFeaturesAsync

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-batch-of-features) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-batch-of-features)

```csharp
public Task AutoMeasureBatchOfFeaturesAsync(
    CollectionInstrumentId instrument,
    IEnumerable<CollectionItemName> features,
    bool waitForComplete = true,
    CancellationToken cancellationToken = default);
```

The feature list contains GR-Feature relationship identities.

## AutoCorrespondClosestPointAsync

[MP command](/mp-command-catalog/commands/instrument-operations#auto-correspond-closest-point) · [gRPC contract](/api/grpc/instrument-operations#auto-correspond-closest-point)

```csharp
public Task AutoCorrespondClosestPointAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName referenceGroup,
    CollectionObjectName actualsGroup,
    bool waitForCompletion = true,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.AutoCorrespondClosestPointAsync(
    instrument,
    referenceGroup,
    actualsGroup);
```

When waiting is disabled, SA may continue measuring after this task returns.

## CloseAutoCorrespondClosestPointDialogAsync

[MP command](/mp-command-catalog/commands/instrument-operations#close-auto-correspond-closest-point-dialog) · [gRPC contract](/api/grpc/instrument-operations#close-auto-correspond-closest-point-dialog)

```csharp
public Task CloseAutoCorrespondClosestPointDialogAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations
    .CloseAutoCorrespondClosestPointDialogAsync(instrument);
```

The method does not require that this client started the running workflow.

## AutoCorrespondWithProximityTriggerAsync

[MP command](/mp-command-catalog/commands/instrument-operations#auto-correspond-with-proximity-trigger) · [gRPC contract](/api/grpc/instrument-operations#auto-correspond-with-proximity-trigger)

```csharp
public Task AutoCorrespondWithProximityTriggerAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName nominalGroup,
    CollectionObjectName resultsGroup,
    double pointDistanceThreshold = 0.5,
    double vectorAxisThreshold = 0.25,
    bool projectResultsToNominalVector = false,
    double warblerRampStartDistance = 12.0,
    bool showWatchWindow = false,
    string? deviationVectorGroupName = null,
    bool makeUnmeasuredGroup = false,
    bool measureEachPointOnlyOnce = false,
    CancellationToken cancellationToken = default);
```

The nominal group may be a Point Group or Vector Group. Omitting the deviation
group name passes the MP's blank value.

## ConstructMirrorFromPlaneAsync

[MP command](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-plane) · [gRPC contract](/api/grpc/instrument-operations#construct-mirror-from-plane)

```csharp
public Task ConstructMirrorFromPlaneAsync(
    CollectionInstrumentId instrument,
    string mirrorName,
    CollectionObjectName plane,
    CancellationToken cancellationToken = default);
```

## ConstructMirrorFromTwoPointsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-two-points) · [gRPC contract](/api/grpc/instrument-operations#construct-mirror-from-two-points)

```csharp
public Task<CollectionObjectName> ConstructMirrorFromTwoPointsAsync(
    CollectionInstrumentId instrument,
    string mirrorName,
    PointName pointMeasuredDirectly,
    PointName pointMeasuredThroughMirror,
    bool sendMirrorToInstrument = true,
    CancellationToken cancellationToken = default);

var mirrorPlane = await briosa.InstrumentOperations
    .ConstructMirrorFromTwoPointsAsync(
        instrument,
        mirrorName,
        directPoint,
        throughMirrorPoint);
```

## DriftCheckAsync

[MP command](/mp-command-catalog/commands/instrument-operations#drift-check) · [gRPC contract](/api/grpc/instrument-operations#drift-check)

```csharp
public Task<DriftCheckResult> DriftCheckAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName referenceGroup,
    CollectionObjectName actualsGroup,
    double tolerance = 0.0,
    int minimumPointCount = 0,
    bool useClosestReferencePoint = true,
    CancellationToken cancellationToken = default);

var result = await briosa.InstrumentOperations.DriftCheckAsync(
    instrument,
    referenceGroup,
    actualsGroup);
```

`NewInstrument` is populated only when `InstrumentAdded` is true. SA can report
partial success for out-of-tolerance points or a newly added station. Silent
mode starts measurement automatically but does not suppress the Drift Check
dialog.

## MeasureNominalFeatureAsync

[MP command](/mp-command-catalog/commands/instrument-operations#measure-nominal-feature) · [gRPC contract](/api/grpc/instrument-operations#measure-nominal-feature)

```csharp
public Task MeasureNominalFeatureAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName feature,
    PointName resultingPoint,
    CancellationToken cancellationToken = default);
```

These methods retain no Briosa-owned workflow state and are never automatically
replayed after an unknown outcome.

## GuideObjectsIn6dBasedOnPointMeasurementsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#guide-objects-in-6d-based-on-point-measurements) · [gRPC contract](/api/grpc/instrument-operations#guide-objects-in-6d-based-on-point-measurements)

```csharp
public Task GuideObjectsIn6dBasedOnPointMeasurementsAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName destinationGroup,
    CollectionObjectName movingReferenceGroup,
    IEnumerable<CollectionObjectName> objectsToMove,
    CollectionObjectName? initialSurveyGroup = null,
    ToleranceVectorOptions? positionalTolerance = null,
    ToleranceVectorOptions? rotationalTolerance = null,
    CancellationToken cancellationToken = default);
```

## MoveObjectsIn6dUsingInstrumentUpdatesAsync

[MP command](/mp-command-catalog/commands/instrument-operations#move-objects-in-6d-using-instrument-updates) · [gRPC contract](/api/grpc/instrument-operations#move-objects-in-6d-using-instrument-updates)

```csharp
public Task MoveObjectsIn6dUsingInstrumentUpdatesAsync(
    CollectionInstrumentId instrument,
    IEnumerable<CollectionObjectName> objectsToMove,
    string measurementMode,
    CancellationToken cancellationToken = default);
```

These calls expose live SA guidance without introducing client-owned state.

## AlignTwoTargetsWithAxisWcfXAsync

[MP command](/mp-command-catalog/commands/instrument-operations#align-two-targets-with-axis-wcf---x) · [gRPC contract](/api/grpc/instrument-operations#align-two-targets-with-axis-wcf---x)

```csharp
public Task AlignTwoTargetsWithAxisWcfXAsync(
    CollectionInstrumentId instrument,
    PointName firstPointOnAxis,
    PointName secondPointOnAxis,
    CollectionObjectName initialMeasuredGroup,
    ToleranceVectorOptions? rotationalTolerance = null,
    CancellationToken cancellationToken = default);
```

## GetInstrumentInterfaceResponseTimeoutAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-interface-response-timeout) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-interface-response-timeout)

```csharp
public Task<double> GetInstrumentInterfaceResponseTimeoutAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

The result is expressed in seconds.

## SetInstrumentInterfaceResponseTimeoutAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-interface-response-timeout) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-interface-response-timeout)

```csharp
public Task SetInstrumentInterfaceResponseTimeoutAsync(
    CollectionInstrumentId instrument,
    double timeoutSeconds = 0.0,
    CancellationToken cancellationToken = default);
```

Briosa preserves the MP default and adds no range check.

## GetCurrentTrappingStatusAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-current-trapping-status) · [gRPC contract](/api/grpc/instrument-operations#get-current-trapping-status)

```csharp
public Task<CurrentTrappingStatus> GetCurrentTrappingStatusAsync(
    CancellationToken cancellationToken = default);

var status = await briosa.InstrumentOperations.GetCurrentTrappingStatusAsync();
```

`FocusedItem` and `Instrument` may be null when trapping is inactive.

## WaitForTrappingToCompleteAsync

[MP command](/mp-command-catalog/commands/instrument-operations#wait-for-trapping-to-complete) · [gRPC contract](/api/grpc/instrument-operations#wait-for-trapping-to-complete)

```csharp
public Task WaitForTrappingToCompleteAsync(
    CancellationToken cancellationToken = default);

await briosa.InstrumentOperations.WaitForTrappingToCompleteAsync();
```

SA waits for trapping to advance and may block indefinitely. Cancellation does
not prove the underlying SA call stopped.

## JumpInstrumentToNewLocationAsync

[MP command](/mp-command-catalog/commands/instrument-operations#jump-instrument-to-new-location) · [gRPC contract](/api/grpc/instrument-operations#jump-instrument-to-new-location)

```csharp
public Task JumpInstrumentToNewLocationAsync(
    CollectionInstrumentId liveInstrument,
    bool hidePreviousInstrument = false,
    CancellationToken cancellationToken = default);
```

## QuickAlignAsync

[MP command](/mp-command-catalog/commands/instrument-operations#quick-align) · [gRPC contract](/api/grpc/instrument-operations#quick-align)

```csharp
public Task QuickAlignAsync(
    IEnumerable<CollectionInstrumentId> instruments,
    IEnumerable<CollectionObjectName> objects,
    IEnumerable<PointName>? nominalPoints = null,
    IEnumerable<string>? nominalPointOfViewNames = null,
    bool alignToIndividualFacesOnly = false,
    CancellationToken cancellationToken = default);
```

The optional point-of-view names correspond positionally to `nominalPoints`.
Briosa leaves length validation to SA.

## AlignCloudToCadAsync

[MP command](/mp-command-catalog/commands/instrument-operations#align-cloud-to-cad) · [gRPC contract](/api/grpc/instrument-operations#align-cloud-to-cad)

```csharp
public Task<CloudToCadAlignmentResult> AlignCloudToCadAsync(
    CollectionObjectName cloud,
    IEnumerable<CollectionObjectName> surfaces,
    double maximumCoarseCadMeshEdgeLength = 0.0,
    bool useFineCadMesh = false,
    bool executeAlignment = true,
    CancellationToken cancellationToken = default);
```

SA clamps edge lengths below 5 mm to 5 mm. When `executeAlignment` is false,
the returned Working-frame transform is not applied. These methods retain no
Briosa-owned workflow state and are never automatically replayed.

## StartGdtInspectionDesignAsync

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-design) · [gRPC contract](/api/grpc/instrument-operations#start-gdt-inspection-design)

```csharp
public Task StartGdtInspectionDesignAsync(
    CollectionName collection,
    InspectionFilter filter = InspectionFilter.All,
    CancellationToken cancellationToken = default);
```

## StartGdtInspectionRehearseAsync

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-rehearse) · [gRPC contract](/api/grpc/instrument-operations#start-gdt-inspection-rehearse)

```csharp
public Task StartGdtInspectionRehearseAsync(
    CollectionName collection,
    InspectionFilter filter = InspectionFilter.All,
    CancellationToken cancellationToken = default);
```

## StartGdtInspectionAsync

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection) · [gRPC contract](/api/grpc/instrument-operations#start-gdt-inspection)

```csharp
public Task StartGdtInspectionAsync(
    CollectionInstrumentId instrument,
    CollectionName collection,
    InspectionFilter filter = InspectionFilter.All,
    CancellationToken cancellationToken = default);
```

The filter values map exactly to `ALL`, `CHECKS`, and `DATUMS`.

## GetInspectionVerificationModeAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-inspection-verification-mode) · [gRPC contract](/api/grpc/instrument-operations#get-inspection-verification-mode)

```csharp
public Task<bool> GetInspectionVerificationModeAsync(
    CancellationToken cancellationToken = default);
```

## SetInspectionVerificationModeAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-inspection-verification-mode) · [gRPC contract](/api/grpc/instrument-operations#set-inspection-verification-mode)

```csharp
public Task SetInspectionVerificationModeAsync(
    bool verificationEnabled = false,
    CancellationToken cancellationToken = default);
```

This modifies application-global SA state; Briosa does not restore it.

## SetRemeasureFailedChecksOnlyAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-remeasure-failed-checks-only) · [gRPC contract](/api/grpc/instrument-operations#set-remeasure-failed-checks-only)

```csharp
public Task SetRemeasureFailedChecksOnlyAsync(
    CollectionName collection,
    CancellationToken cancellationToken = default);
```

The method clears failed-check points, locks passing checks, and starts
trapping. It adds no confirmation or rollback.

## AssociateObjectsWithInstrumentAsync

[MP command](/mp-command-catalog/commands/instrument-operations#associate-objects-with-instrument) · [gRPC contract](/api/grpc/instrument-operations#associate-objects-with-instrument)

```csharp
public Task AssociateObjectsWithInstrumentAsync(
    CollectionInstrumentId instrument,
    IEnumerable<CollectionObjectName> objects,
    CancellationToken cancellationToken = default);
```

## DisassociateObjectsFromInstrumentAsync

[MP command](/mp-command-catalog/commands/instrument-operations#disassociate-objects-from-instrument) · [gRPC contract](/api/grpc/instrument-operations#disassociate-objects-from-instrument)

```csharp
public Task DisassociateObjectsFromInstrumentAsync(
    IEnumerable<CollectionObjectName> objects,
    CancellationToken cancellationToken = default);
```

The exact 2026.1 binding intentionally has no instrument parameter.

## MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments) · [gRPC contract](/api/grpc/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments)

```csharp
public Task<IReadOnlyList<CollectionObjectName>>
    MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsAsync(
        IEnumerable<CollectionInstrumentId> instruments,
        CancellationToken cancellationToken = default);
```

This queries live SA association state and preserves the returned order.

## CombinePointGroupsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#combine-point-groups) · [gRPC contract](/api/grpc/instrument-operations#combine-point-groups)

```csharp
public Task CombinePointGroupsAsync(
    IEnumerable<CollectionObjectName> groupsToCombine,
    CollectionObjectName combinedPointGroup,
    CancellationToken cancellationToken = default);
```

## DissectPointGroupAsync

[MP command](/mp-command-catalog/commands/instrument-operations#dissect-point-group) · [gRPC contract](/api/grpc/instrument-operations#dissect-point-group)

```csharp
public Task DissectPointGroupAsync(
    CollectionObjectName groupToDissect,
    string baseNameForDissectedGroups,
    CancellationToken cancellationToken = default);
```

## SynchronizedMeasurementMasterSlaveAsync

[MP command](/mp-command-catalog/commands/instrument-operations#synchronized-measurement-masterslave) · [gRPC contract](/api/grpc/instrument-operations#synchronized-measurement-masterslave)

```csharp
public Task SynchronizedMeasurementMasterSlaveAsync(
    CollectionInstrumentId masterInstrument,
    CollectionInstrumentId slaveInstrument,
    string slaveGroupSuffix = "_Slave",
    bool locateOneOfTheInstruments = true,
    bool locateMaster = false,
    bool waitForCompletion = true,
    CancellationToken cancellationToken = default);
```

A deadline or cancellation does not prove that SA stopped an in-progress
measurement.

## CreateNewDynamicReferenceAsync

[MP command](/mp-command-catalog/commands/instrument-operations#create-new-dynamic-reference) · [gRPC contract](/api/grpc/instrument-operations#create-new-dynamic-reference)

```csharp
public Task CreateNewDynamicReferenceAsync(
    CollectionInstrumentId instrument,
    IEnumerable<PointName> pointsDefiningDynamicReference,
    string dynamicReferenceName,
    CancellationToken cancellationToken = default);
```

SA documents this operation for AICON/Hexagon MoveInspect systems.

## CalculateTcpFixtureUncertaintiesAsync

[MP command](/mp-command-catalog/commands/instrument-operations#calculate-tcp-fixture-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#calculate-tcp-fixture-uncertainties)

```csharp
public Task<TcpFixtureUncertainties> CalculateTcpFixtureUncertaintiesAsync(
    CollectionObjectName tcpFixture,
    IEnumerable<PointName> tcpMeasurements,
    Transform? tcpInWorking = null,
    CancellationToken cancellationToken = default);
```

An omitted transform uses the identity transform. Both returned uncertainty
vectors contain exactly six values.

## ConstructTcpFixtureAsync

[MP command](/mp-command-catalog/commands/instrument-operations#construct-tcp-fixture) · [gRPC contract](/api/grpc/instrument-operations#construct-tcp-fixture)

```csharp
public Task<CollectionObjectName> ConstructTcpFixtureAsync(
    CollectionObjectName requestedTcpFixture,
    double pointMatchThreshold = 0.0,
    bool replaceExistingTcpFixture = false,
    CancellationToken cancellationToken = default);
```

## AddNominalPointToTcpFixtureAsync

[MP command](/mp-command-catalog/commands/instrument-operations#add-nominal-point-to-tcp-fixture) · [gRPC contract](/api/grpc/instrument-operations#add-nominal-point-to-tcp-fixture)

```csharp
public Task AddNominalPointToTcpFixtureAsync(
    CollectionObjectName tcpFixture,
    string nominalPointName,
    Vector nominalPointLocation,
    double varXx = 0.0,
    double varYy = 0.0,
    double varZz = 0.0,
    double covarXy = 0.0,
    double covarXz = 0.0,
    double covarYz = 0.0,
    CancellationToken cancellationToken = default);
```

## GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix) · [gRPC contract](/api/grpc/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix)

```csharp
public Task<UncertaintyCovarianceMatrix>
    GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixAsync(
        CollectionObjectName tcpFixture,
        CancellationToken cancellationToken = default);
```

## SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base)

```csharp
public Task SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseAsync(
    CollectionInstrumentId instrument,
    UncertaintyCovarianceMatrix covarianceMatrix,
    CancellationToken cancellationToken = default);
```

## SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world)

```csharp
public Task SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldAsync(
    CollectionInstrumentId instrument,
    UncertaintyCovarianceMatrix covarianceMatrix,
    CancellationToken cancellationToken = default);
```

Both setters enforce six rows of six values but add no mathematical or
physical-value validation.

## GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world)

```csharp
public Task<UncertaintyCovarianceMatrix>
    GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

These methods retain no Briosa-owned measurement, dynamic-reference, TCP, or
uncertainty state and are never automatically replayed.

## ConstructMeasuredPointUncertaintyEllipsoidsAsync

[MP command](/mp-command-catalog/commands/instrument-operations#construct-measured-point-uncertainty-ellipsoids) · [gRPC contract](/api/grpc/instrument-operations#construct-measured-point-uncertainty-ellipsoids)

```csharp
public Task ConstructMeasuredPointUncertaintyEllipsoidsAsync(
    IEnumerable<PointName> measurements,
    CancellationToken cancellationToken = default);
```

## GetWrtlChannelAndStatusAsync

[MP command](/mp-command-catalog/commands/instrument-operations#get-wrtl-channel-and-status) · [gRPC contract](/api/grpc/instrument-operations#get-wrtl-channel-and-status)

```csharp
public Task<WrtlChannelStatus> GetWrtlChannelAndStatusAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

## SetWrtlChannelAsync

[MP command](/mp-command-catalog/commands/instrument-operations#set-wrtl-channel) · [gRPC contract](/api/grpc/instrument-operations#set-wrtl-channel)

```csharp
public Task SetWrtlChannelAsync(
    CollectionInstrumentId instrument,
    int channel = 0,
    CancellationToken cancellationToken = default);
```

Briosa adds no channel-range validation. These methods retain no Briosa-owned
WRTL or uncertainty-display state and are never automatically replayed.
