---
title: Instrument Operations
description: Unreleased dotnet 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations

[SA 2026.1.0529.7](/api/dotnet/instrument-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/instrument-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Get Last Instrument Index {/* #get-last-instrument-index */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-last-instrument-index) · [gRPC Contract](/api/grpc/instrument-operations#get-last-instrument-index)

```csharp
public Task<LastInstrumentIndexResult> GetLastInstrumentIndexAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Instrument {/* #rename-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#rename-instrument) · [gRPC Contract](/api/grpc/instrument-operations#rename-instrument)

```csharp
public Task RenameInstrumentAsync(
        CollectionInstrumentId instrument,
        string newName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument ID from Name {/* #get-instrument-id-from-name */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-id-from-name) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-id-from-name)

```csharp
public Task<CollectionInstrumentId> GetInstrumentIdFromNameAsync(
        string name,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Model {/* #get-instrument-model */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-model) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-model)

```csharp
public Task<InstrumentModelResult> GetInstrumentModelAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Instrument to Another Collection {/* #move-instrument-to-another-collection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-instrument-to-another-collection) · [gRPC Contract](/api/grpc/instrument-operations#move-instrument-to-another-collection)

```csharp
public Task MoveInstrumentToAnotherCollectionAsync(
        CollectionInstrumentId instrument,
        CollectionName collectionName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Instrument Configuration {/* #save-instrument-configuration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#save-instrument-configuration) · [gRPC Contract](/api/grpc/instrument-operations#save-instrument-configuration)

```csharp
public Task SaveInstrumentConfigurationAsync(
        CollectionInstrumentId instrument,
        FileReference configurationFile,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load Instrument Configuration {/* #load-instrument-configuration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#load-instrument-configuration) · [gRPC Contract](/api/grpc/instrument-operations#load-instrument-configuration)

```csharp
public Task LoadInstrumentConfigurationAsync(
        CollectionInstrumentId instrument,
        FileReference configurationFile,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Instrument History to XML File {/* #export-instrument-history-to-xml-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#export-instrument-history-to-xml-file) · [gRPC Contract](/api/grpc/instrument-operations#export-instrument-history-to-xml-file)

```csharp
public Task ExportInstrumentHistoryToXmlFileAsync(
        CollectionInstrumentId instrument,
        FileReference filePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Point At Target {/* #point-at-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#point-at-target) · [gRPC Contract](/api/grpc/instrument-operations#point-at-target)

```csharp
public Task PointAtTargetAsync(
        CollectionInstrumentId instrument,
        PointName targetId,
        FileReference? htmlPromptFile = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Single Point Here {/* #measure-single-point-here */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-single-point-here) · [gRPC Contract](/api/grpc/instrument-operations#measure-single-point-here)

```csharp
public Task MeasureSinglePointHereAsync(
        CollectionInstrumentId instrument,
        PointName targetId,
        bool measureImmediately = false,
        FileReference? htmlPromptFile = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Current Instrument Position Update {/* #get-current-instrument-position-update */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-current-instrument-position-update) · [gRPC Contract](/api/grpc/instrument-operations#get-current-instrument-position-update)

```csharp
public Task<InstrumentPositionUpdate> GetCurrentInstrumentPositionUpdateAsync(
        CollectionInstrumentId instrument,
        InstrumentPositionReportingFrame reportingFrame = InstrumentPositionReportingFrame.InstrumentBase,
        bool polarCoordinates = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `YOrTheta` | Angle in degrees. |
| `ZOrPhi` | Angle in degrees. |
| `TimeSinceUpdate` | Time in seconds. |
| `Timestamp` | MP qualifier: Approximate. |

## 'Build' Target {/* #build-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#build-target) · [gRPC Contract](/api/grpc/instrument-operations#build-target)

```csharp
public Task BuildTargetAsync(
        CollectionInstrumentId instrument,
        PointName outputTargetName,
        PointName nominalPoint,
        ToleranceVectorOptions? tolerance = null,
        FileReference? htmlPromptFile = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Existing Single Point {/* #measure-existing-single-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point) · [gRPC Contract](/api/grpc/instrument-operations#measure-existing-single-point)

```csharp
public Task<PointName> MeasureExistingSinglePointAsync(
        CollectionInstrumentId instrument,
        PointName existingTargetId,
        CollectionObjectName groupNameForNewPoint,
        bool measureImmediately = false,
        FileReference? htmlPromptFile = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Existing Single Point (Manual Guide) {/* #measure-existing-single-point-manual-guide */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-manual-guide) · [gRPC Contract](/api/grpc/instrument-operations#measure-existing-single-point-manual-guide)

```csharp
public Task<PointName> MeasureExistingSinglePointManualGuideAsync(
        CollectionInstrumentId instrument,
        PointName existingTargetId,
        CollectionObjectName groupNameForNewPoint,
        bool measureImmediately = false,
        FileReference? htmlPromptFile = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Existing Single Point and Compare {/* #measure-existing-single-point-and-compare */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-and-compare) · [gRPC Contract](/api/grpc/instrument-operations#measure-existing-single-point-and-compare)

```csharp
public Task<PointComparisonResult> MeasureExistingSinglePointAndCompareAsync(
        CollectionInstrumentId instrument,
        PointName existingTargetId,
        CollectionObjectName groupNameForNewPoint,
        bool measureImmediately = false,
        FileReference? htmlPromptFile = null,
        double tolerance = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Probe Offset Frame Online (Measure Raw Frame) {/* #set-probe-offset-frame-online-measure-raw-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-online-measure-raw-frame) · [gRPC Contract](/api/grpc/instrument-operations#set-probe-offset-frame-online-measure-raw-frame)

```csharp
public Task SetProbeOffsetFrameOnlineAsync(
        CollectionInstrumentId instrument,
        string probeName,
        CollectionObjectName offsetFrame,
        int faceId = 0,
        string measureProfileName = "",
        double timeoutSeconds = 15.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Probe Offset Frame Offline (Select Previously Measured Frame) {/* #set-probe-offset-frame-offline-select-previously-measured-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame) · [gRPC Contract](/api/grpc/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame)

```csharp
public Task SetProbeOffsetFrameOfflineAsync(
        CollectionInstrumentId instrument,
        string probeName,
        CollectionObjectName rawMeasuredFrame,
        CollectionObjectName offsetFrame,
        int faceId = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Active Measurement Mode {/* #stop-active-measurement-mode */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#stop-active-measurement-mode) · [gRPC Contract](/api/grpc/instrument-operations#stop-active-measurement-mode)

```csharp
public Task StopActiveMeasurementModeAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Frame Set Scan Mode (All Instruments) {/* #enabledisable-frame-set-scan-mode-all-instruments */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments) · [gRPC Contract](/api/grpc/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments)

```csharp
public Task EnableDisableFrameSetScanModeAllInstrumentsAsync(
        bool enableFrameSetScanMode = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Frame Set Scan Mode (By Instrument) {/* #enabledisable-frame-set-scan-mode-by-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument) · [gRPC Contract](/api/grpc/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument)

```csharp
public Task EnableDisableFrameSetScanModeByInstrumentAsync(
        CollectionInstrumentId instrument,
        bool enableFrameSetScanMode = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Point Set Scan Mode {/* #enabledisable-point-set-scan-mode */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-point-set-scan-mode) · [gRPC Contract](/api/grpc/instrument-operations#enabledisable-point-set-scan-mode)

```csharp
public Task EnableDisablePointSetScanModeAsync(
        CollectionInstrumentId instrument,
        bool enablePointSetScanMode = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add New Instrument {/* #add-new-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#add-new-instrument) · [gRPC Contract](/api/grpc/instrument-operations#add-new-instrument)

```csharp
public Task<CollectionInstrumentId> AddNewInstrumentAsync(
        InstrumentTypeName instrumentType,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Instrument {/* #delete-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-instrument) · [gRPC Contract](/api/grpc/instrument-operations#delete-instrument)

```csharp
public Task DeleteInstrumentAsync(
        CollectionInstrumentId instrument,
        bool promptUserToConfirm = false,
        bool keepResultingPoints = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Measurements {/* #delete-measurements */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-measurements) · [gRPC Contract](/api/grpc/instrument-operations#delete-measurements)

```csharp
public Task DeleteMeasurementsAsync(
        CollectionInstrumentId instrument,
        PointName pointName,
        bool deletePointIfNoMeasurementsRemain = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Measurement Observation {/* #delete-measurement-observation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-measurement-observation) · [gRPC Contract](/api/grpc/instrument-operations#delete-measurement-observation)

```csharp
public Task DeleteMeasurementObservationAsync(
        PointName pointName,
        int observationIndex = 0,
        bool deletePointIfNoMeasurementsRemain = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Measurement Observation {/* #move-measurement-observation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-measurement-observation) · [gRPC Contract](/api/grpc/instrument-operations#move-measurement-observation)

```csharp
public Task MoveMeasurementObservationAsync(
        PointName sourcePointName,
        PointName destinationPointName,
        int observationIndex = 0,
        bool deletePointIfNoMeasurementsRemain = false,
        bool forceObservationActive = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Initiate Servo-Guide {/* #initiate-servo-guide */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#initiate-servo-guide) · [gRPC Contract](/api/grpc/instrument-operations#initiate-servo-guide)

```csharp
public Task InitiateServoGuideAsync(
        CollectionInstrumentId instrument,
        IEnumerable<PointName> nominalPoints,
        string groupNameSuffix = "",
        string targetNameSuffix = "",
        double tolerance = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start Theodolite Interface {/* #start-theodolite-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-theodolite-interface) · [gRPC Contract](/api/grpc/instrument-operations#start-theodolite-interface)

```csharp
public Task StartTheodoliteInterfaceAsync(
        CollectionInstrumentId instrument,
        string theodoliteType,
        int commPort = 0,
        string? deviceIpAddress = null,
        bool simulation = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start Instrument Interface {/* #start-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-instrument-interface) · [gRPC Contract](/api/grpc/instrument-operations#start-instrument-interface)

```csharp
public Task StartInstrumentInterfaceAsync(
        CollectionInstrumentId instrument,
        bool initializeAtStartup = false,
        string? deviceIpAddress = null,
        int interfaceType = 0,
        bool runInSimulation = false,
        bool allowStartWithoutInitializationRequirements = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Instrument Interface {/* #stop-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#stop-instrument-interface) · [gRPC Contract](/api/grpc/instrument-operations#stop-instrument-interface)

```csharp
public Task StopInstrumentInterfaceAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Activate/Deactivate Instrument Toolbar {/* #activatedeactivate-instrument-toolbar */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#activatedeactivate-instrument-toolbar) · [gRPC Contract](/api/grpc/instrument-operations#activatedeactivate-instrument-toolbar)

```csharp
public Task ActivateDeactivateInstrumentToolbarAsync(
        CollectionInstrumentId instrument,
        bool deactivateToolbar = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Verify Instrument Connection {/* #verify-instrument-connection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#verify-instrument-connection) · [gRPC Contract](/api/grpc/instrument-operations#verify-instrument-connection)

```csharp
public Task<bool> VerifyInstrumentConnectionAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Configure and Measure {/* #configure-and-measure */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#configure-and-measure) · [gRPC Contract](/api/grpc/instrument-operations#configure-and-measure)

```csharp
public Task ConfigureAndMeasureAsync(
        CollectionInstrumentId instrument,
        PointName target,
        string measurementMode,
        bool measureImmediately = false,
        bool waitForCompletion = true,
        double timeoutSeconds = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure {/* #measure */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure) · [gRPC Contract](/api/grpc/instrument-operations#measure)

```csharp
public Task MeasureAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set XYZ Reference Frame Instrument Base Anchor Frame {/* #set-xyz-reference-frame-instrument-base-anchor-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame) · [gRPC Contract](/api/grpc/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame)

```csharp
public Task SetXyzReferenceFrameInstrumentBaseAnchorFrameAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName anchorFrame,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Dock Instrument Interface {/* #dock-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#dock-instrument-interface) · [gRPC Contract](/api/grpc/instrument-operations#dock-instrument-interface)

```csharp
public Task DockInstrumentInterfaceAsync(
        CollectionInstrumentId instrument,
        bool dockInterface = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instrument (Ref. Tie-In) {/* #locate-instrument-ref-tie-in */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-ref-tie-in) · [gRPC Contract](/api/grpc/instrument-operations#locate-instrument-ref-tie-in)

```csharp
public Task LocateInstrumentRefTieInAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName referenceGroup,
        CollectionObjectName actualsGroup,
        double tolerance = 0.0,
        bool autoSurvey = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instrument (Group to Surface Quick Fit) {/* #locate-instrument-group-to-surface-quick-fit */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-group-to-surface-quick-fit) · [gRPC Contract](/api/grpc/instrument-operations#locate-instrument-group-to-surface-quick-fit)

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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Multi Measurement Initiate {/* #multi-measurement-initiate */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#multi-measurement-initiate) · [gRPC Contract](/api/grpc/instrument-operations#multi-measurement-initiate)

```csharp
public Task MultiMeasurementInitiateAsync(
        IEnumerable<CollectionInstrumentId> instruments,
        string measurementMode,
        bool waitForCompletion = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Multi Measurement Stop {/* #multi-measurement-stop */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#multi-measurement-stop) · [gRPC Contract](/api/grpc/instrument-operations#multi-measurement-stop)

```csharp
public Task MultiMeasurementStopAsync(
        IEnumerable<CollectionInstrumentId> instruments,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Align Laser Projector {/* #align-laser-projector */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-laser-projector) · [gRPC Contract](/api/grpc/instrument-operations#align-laser-projector)

```csharp
public Task AlignLaserProjectorAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName group,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instruments (USMN) {/* #locate-instruments-usmn */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instruments-usmn) · [gRPC Contract](/api/grpc/instrument-operations#locate-instruments-usmn)

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
        double analysisTimeLimit = 4.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `analysisTimeLimit` | Time in minutes; 0 disables the time limit. |

## Create Templated Instrument (USMN) {/* #create-templated-instrument-usmn */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#create-templated-instrument-usmn) · [gRPC Contract](/api/grpc/instrument-operations#create-templated-instrument-usmn)

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
        double component1Weight = 1.0,
        double component2Weight = 1.0,
        double component3Weight = 1.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `component1Weight` | MP qualifier: Azimuth. |
| `component2Weight` | MP qualifier: Elevation. |
| `component3Weight` | MP qualifier: Distance. |

## Locate Instrument (Best Fit - Group to Group) {/* #locate-instrument-best-fit---group-to-group */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---group-to-group) · [gRPC Contract](/api/grpc/instrument-operations#locate-instrument-best-fit---group-to-group)

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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instrument (Best Fit - Nominal Geometry) {/* #locate-instrument-best-fit---nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---nominal-geometry) · [gRPC Contract](/api/grpc/instrument-operations#locate-instrument-best-fit---nominal-geometry)

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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Transform {/* #get-instrument-transform */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-transform) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-transform)

```csharp
public Task<Transform> GetInstrumentTransformAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName referenceFrame,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Transform {/* #set-instrument-transform */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-transform) · [gRPC Contract](/api/grpc/instrument-operations#set-instrument-transform)

```csharp
public Task SetInstrumentTransformAsync(
        CollectionInstrumentId instrument,
        Transform destinationTransform,
        CollectionObjectName referenceFrame,
        int numberOfSteps = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Tracker/EDM Theodolite Uncertainties {/* #get-trackeredm-theodolite-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-trackeredm-theodolite-uncertainties) · [gRPC Contract](/api/grpc/instrument-operations#get-trackeredm-theodolite-uncertainties)

```csharp
public Task<TrackerEdmTheodoliteUncertainties> GetTrackerEdmTheodoliteUncertaintiesAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `ThetaDispersion` | Angle in arcseconds. |
| `PhiDispersion` | Angle in arcseconds. |
| `Distance` | Value in parts per million. |

## Set Tracker/EDM Theodolite Uncertainties {/* #set-trackeredm-theodolite-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-trackeredm-theodolite-uncertainties) · [gRPC Contract](/api/grpc/instrument-operations#set-trackeredm-theodolite-uncertainties)

```csharp
public Task SetTrackerEdmTheodoliteUncertaintiesAsync(
        CollectionInstrumentId instrument,
        double thetaDispersion = 1.0,
        double thetaThreshold = 0.001,
        double phiDispersion = 1.0,
        double phiThreshold = 0.001,
        double distance = 2.5,
        double distanceThreshold = 0.0003,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `thetaDispersion` | Angle in arcseconds. |
| `phiDispersion` | Angle in arcseconds. |
| `distance` | Value in parts per million. |

## Get PCMM Instrument XYZ Uncertainties {/* #get-pcmm-instrument-xyz-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-pcmm-instrument-xyz-uncertainties) · [gRPC Contract](/api/grpc/instrument-operations#get-pcmm-instrument-xyz-uncertainties)

```csharp
public Task<InstrumentXyzUncertainties> GetPcmmInstrumentXyzUncertaintiesAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set PCMM Instrument XYZ Uncertainties {/* #set-pcmm-instrument-xyz-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-pcmm-instrument-xyz-uncertainties) · [gRPC Contract](/api/grpc/instrument-operations#set-pcmm-instrument-xyz-uncertainties)

```csharp
public Task SetPcmmInstrumentXyzUncertaintiesAsync(
        CollectionInstrumentId instrument,
        double xUncertainty = 0.001,
        double yUncertainty = 0.001,
        double zUncertainty = 0.001,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get XYZ Instrument Uncertainties {/* #get-xyz-instrument-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-xyz-instrument-uncertainties) · [gRPC Contract](/api/grpc/instrument-operations#get-xyz-instrument-uncertainties)

```csharp
public Task<InstrumentXyzUncertainties> GetXyzInstrumentUncertaintiesAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set XYZ Instrument Uncertainties {/* #set-xyz-instrument-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-xyz-instrument-uncertainties) · [gRPC Contract](/api/grpc/instrument-operations#set-xyz-instrument-uncertainties)

```csharp
public Task SetXyzInstrumentUncertaintiesAsync(
        CollectionInstrumentId instrument,
        double xUncertainty = 0.0005,
        double yUncertainty = 0.0005,
        double zUncertainty = 0.0005,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Weather Setting {/* #get-instrument-weather-setting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-weather-setting) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-weather-setting)

```csharp
public Task<InstrumentWeatherSetting> GetInstrumentWeatherSettingAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `Temperature` | Temperature in degrees Fahrenheit. |
| `Pressure` | Pressure in millimeters of mercury. |
| `RelativeHumidity` | Relative humidity in percent. |

## Set Instrument Weather Setting {/* #set-instrument-weather-setting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-weather-setting) · [gRPC Contract](/api/grpc/instrument-operations#set-instrument-weather-setting)

```csharp
public Task SetInstrumentWeatherSettingAsync(
        CollectionInstrumentId instrument,
        double temperature = 0.0,
        double pressure = 0.0,
        double relativeHumidity = 0.0,
        bool setAutomatically = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in millimeters of mercury. |
| `relativeHumidity` | Relative humidity in percent. |

## Get Instrument Part Temperature {/* #get-instrument-part-temperature */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-part-temperature) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-part-temperature)

```csharp
public Task<double> GetInstrumentPartTemperatureAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `PartTemperature` | Temperature in degrees Fahrenheit. |

## Compute CTE Scale Factor {/* #compute-cte-scale-factor */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#compute-cte-scale-factor) · [gRPC Contract](/api/grpc/instrument-operations#compute-cte-scale-factor)

```csharp
public Task<double> ComputeCteScaleFactorAsync(
        double materialCte = 0.0,
        double initialTemperature = 0.0,
        double finalTemperature = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `materialCte` | Coefficient per degree Fahrenheit. |
| `initialTemperature` | Temperature in degrees Fahrenheit. |
| `finalTemperature` | Temperature in degrees Fahrenheit. |

## Set (multiply) Instrument Scale Factor (CAUTION!) {/* #set-multiply-instrument-scale-factor-caution */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-multiply-instrument-scale-factor-caution) · [gRPC Contract](/api/grpc/instrument-operations#set-multiply-instrument-scale-factor-caution)

```csharp
public Task SetMultiplyInstrumentScaleFactorAsync(
        CollectionInstrumentId instrument,
        double scaleFactor = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set (absolute) Instrument Scale Factor (CAUTION!) {/* #set-absolute-instrument-scale-factor-caution */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-absolute-instrument-scale-factor-caution) · [gRPC Contract](/api/grpc/instrument-operations#set-absolute-instrument-scale-factor-caution)

```csharp
public Task SetAbsoluteInstrumentScaleFactorAsync(
        CollectionInstrumentId instrument,
        double scaleFactor = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Scale Factor {/* #get-instrument-scale-factor */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-scale-factor) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-scale-factor)

```csharp
public Task<double> GetInstrumentScaleFactorAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Instrument - Frame To Frame {/* #transform-instrument---frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-instrument---frame-to-frame) · [gRPC Contract](/api/grpc/instrument-operations#transform-instrument---frame-to-frame)

```csharp
public Task TransformInstrumentFrameToFrameAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName initialFrame,
        CollectionObjectName destinationFrame,
        int numberOfSteps = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Instrument by Delta {/* #transform-instrument-by-delta */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-instrument-by-delta) · [gRPC Contract](/api/grpc/instrument-operations#transform-instrument-by-delta)

```csharp
public Task TransformInstrumentByDeltaAsync(
        CollectionInstrumentId instrument,
        WorldTransform deltaTransform,
        bool applyScaleToInstrument = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Multiple Instruments By Delta {/* #transform-multiple-instruments-by-delta */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-multiple-instruments-by-delta) · [gRPC Contract](/api/grpc/instrument-operations#transform-multiple-instruments-by-delta)

```csharp
public Task TransformMultipleInstrumentsByDeltaAsync(
        IEnumerable<CollectionInstrumentId> instruments,
        WorldTransform deltaTransform,
        bool applyScaleToInstruments = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Instrument Operational Check {/* #instrument-operational-check */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#instrument-operational-check) · [gRPC Contract](/api/grpc/instrument-operations#instrument-operational-check)

```csharp
public Task InstrumentOperationalCheckAsync(
        CollectionInstrumentId instrument,
        string checkType,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Observations on Target {/* #get-number-of-observations-on-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-number-of-observations-on-target) · [gRPC Contract](/api/grpc/instrument-operations#get-number-of-observations-on-target)

```csharp
public Task<int> GetNumberOfObservationsOnTargetAsync(
        PointName point,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instruments with Observations on Target {/* #get-instruments-with-observations-on-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instruments-with-observations-on-target) · [gRPC Contract](/api/grpc/instrument-operations#get-instruments-with-observations-on-target)

```csharp
public Task<IReadOnlyList<CollectionInstrumentId>> GetInstrumentsWithObservationsOnTargetAsync(
        PointName point,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Targets Measured by Instrument {/* #get-targets-measured-by-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-targets-measured-by-instrument) · [gRPC Contract](/api/grpc/instrument-operations#get-targets-measured-by-instrument)

```csharp
public Task<IReadOnlyList<PointName>> GetTargetsMeasuredByInstrumentAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Observation Status {/* #set-observation-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-status) · [gRPC Contract](/api/grpc/instrument-operations#set-observation-status)

```csharp
public Task SetObservationStatusAsync(
        PointName point,
        int observationIndex = 0,
        bool active = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Observation Info {/* #get-observation-info */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-observation-info) · [gRPC Contract](/api/grpc/instrument-operations#get-observation-info)

```csharp
public Task<ObservationInfo> GetObservationInfoAsync(
        PointName point,
        int observationIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `Temperature` | Temperature in degrees Fahrenheit. |
| `Pressure` | Pressure in inches of mercury. |
| `RelativeHumidity` | Relative humidity in percent. |

## Fabricate Observations {/* #fabricate-observations */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#fabricate-observations) · [gRPC Contract](/api/grpc/instrument-operations#fabricate-observations)

```csharp
public Task FabricateObservationsAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName pointGroup,
        bool introduceInstrumentError = false,
        bool limitDistance = false,
        double minimumDistance = 0.0,
        double maximumDistance = 1000000.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Obscured Points from Instrument {/* #get-obscured-points-from-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-obscured-points-from-instrument) · [gRPC Contract](/api/grpc/instrument-operations#get-obscured-points-from-instrument)

```csharp
public Task<IReadOnlyList<PointName>> GetObscuredPointsFromInstrumentAsync(
        CollectionInstrumentId instrument,
        IEnumerable<PointName> candidatePoints,
        bool showObscuredShots = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Targets and Mode/Profiles {/* #get-instrument-targets-and-modeprofiles */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-targets-and-modeprofiles) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-targets-and-modeprofiles)

```csharp
public Task<InstrumentTargetsAndModeProfiles> GetInstrumentTargetsAndModeProfilesAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Measurement Mode/Profile {/* #set-instrument-measurement-modeprofile */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-measurement-modeprofile) · [gRPC Contract](/api/grpc/instrument-operations#set-instrument-measurement-modeprofile)

```csharp
public Task SetInstrumentMeasurementModeProfileAsync(
        CollectionInstrumentId instrument,
        string modeProfile,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Group and Target {/* #set-instrument-group-and-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-group-and-target) · [gRPC Contract](/api/grpc/instrument-operations#set-instrument-group-and-target)

```csharp
public Task SetInstrumentGroupAndTargetAsync(
        CollectionInstrumentId instrument,
        PointName point,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Targeting {/* #set-instrument-targeting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-targeting) · [gRPC Contract](/api/grpc/instrument-operations#set-instrument-targeting)

```csharp
public Task SetInstrumentTargetingAsync(
        CollectionInstrumentId instrument,
        string targetingName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Measurement Mode/Profile {/* #get-instrument-measurement-modeprofile */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-measurement-modeprofile) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-measurement-modeprofile)

```csharp
public Task<string> GetInstrumentMeasurementModeProfileAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Group and Target {/* #get-instrument-group-and-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-group-and-target) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-group-and-target)

```csharp
public Task<PointName> GetInstrumentGroupAndTargetAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Targeting {/* #get-instrument-targeting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-targeting) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-targeting)

```csharp
public Task<string> GetInstrumentTargetingAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Target Computation Options {/* #set-target-computation-options */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-target-computation-options) · [gRPC Contract](/api/grpc/instrument-operations#set-target-computation-options)

```csharp
public Task SetTargetComputationOptionsAsync(
        TargetComputationMethod computationMethod = TargetComputationMethod.UseMostRecentShotFromEachFace,
        bool ignoreDistanceMeasurements = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Observation Mirror Cube Shot Face {/* #set-observation-mirror-cube-shot-face */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-mirror-cube-shot-face) · [gRPC Contract](/api/grpc/instrument-operations#set-observation-mirror-cube-shot-face)

```csharp
public Task SetObservationMirrorCubeShotFaceAsync(
        PointName point,
        int observationIndex = 0,
        bool isMirrorCubeShot = false,
        int mirrorCubeShotFace = 1,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Observation Collimation Shot Options {/* #set-observation-collimation-shot-options */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-collimation-shot-options) · [gRPC Contract](/api/grpc/instrument-operations#set-observation-collimation-shot-options)

```csharp
public Task SetObservationCollimationShotOptionsAsync(
        PointName point,
        int observationIndex = 0,
        bool isCollimationShot = false,
        CollectionInstrumentId? targetedInstrument = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Collimation {/* #collimation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#collimation) · [gRPC Contract](/api/grpc/instrument-operations#collimation)

```csharp
public Task CollimationAsync(
        CollectionInstrumentId stationaryInstrument,
        CollectionInstrumentId movingInstrument,
        PointName collimationPoint,
        bool zeroMovingInstrument = false,
        CollimationTiltMode tiltMode = CollimationTiltMode.FullCollimation,
        CollimationBaselineMethod baselineMethod = CollimationBaselineMethod.DeterminedByValue,
        double baselineDistance = 0.0,
        PointName? scalePoint1 = null,
        PointName? scalePoint2 = null,
        PointName? notMeasuredByMovingInstrument = null,
        PointName? asMeasuredByMovingInstrument = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Target Status {/* #get-instrument-target-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-target-status) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-target-status)

```csharp
public Task<InstrumentTargetStatus> GetInstrumentTargetStatusAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Surface Face List from Point Proximity {/* #make-surface-face-list-from-point-proximity */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#make-surface-face-list-from-point-proximity) · [gRPC Contract](/api/grpc/instrument-operations#make-surface-face-list-from-point-proximity)

```csharp
public Task<SurfaceFaceList> MakeSurfaceFaceListFromPointProximityAsync(
        IReadOnlyList<PointName> measuredPoints,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Scan within perimeter {/* #scan-within-perimeter */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#scan-within-perimeter) · [gRPC Contract](/api/grpc/instrument-operations#scan-within-perimeter)

```csharp
public Task ScanWithinPerimeterAsync(
        CollectionInstrumentId instrument,
        IReadOnlyList<CollectionObjectName> scanPerimeters,
        IReadOnlyList<CollectionObjectName> exclusionPerimeters,
        string parameterSetName,
        CollectionObjectName pointGroup,
        bool waitForCompletion = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Edit Scan Perimeter Profile {/* #edit-scan-perimeter-profile */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#edit-scan-perimeter-profile) · [gRPC Contract](/api/grpc/instrument-operations#edit-scan-perimeter-profile)

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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Estimated Scan Time {/* #get-estimated-scan-time */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-estimated-scan-time) · [gRPC Contract](/api/grpc/instrument-operations#get-estimated-scan-time)

```csharp
public Task<double> GetEstimatedScanTimeAsync(
        CollectionInstrumentId instrument,
        string profileName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Perimeters from Surface Face List {/* #construct-perimeters-from-surface-face-list */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-perimeters-from-surface-face-list) · [gRPC Contract](/api/grpc/instrument-operations#construct-perimeters-from-surface-face-list)

```csharp
public Task<PerimeterLists> ConstructPerimetersFromSurfaceFaceListAsync(
        SurfaceFaceList surfaceFaces,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Scan CAD Faces {/* #scan-cad-faces */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#scan-cad-faces) · [gRPC Contract](/api/grpc/instrument-operations#scan-cad-faces)

```csharp
public Task ScanCadFacesAsync(
        CollectionInstrumentId instrument,
        SurfaceFaceList surfaceFaces,
        string parameterSetName,
        bool enableExclusions = true,
        bool waitForCompletion = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Edge Scan Measurement {/* #edge-scan-measurement */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#edge-scan-measurement) · [gRPC Contract](/api/grpc/instrument-operations#edge-scan-measurement)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Track Tape Measurement {/* #track-tape-measurement */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#track-tape-measurement) · [gRPC Contract](/api/grpc/instrument-operations#track-tape-measurement)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Measure Points {/* #auto-measure-points */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-points) · [gRPC Contract](/api/grpc/instrument-operations#auto-measure-points)

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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Vectors {/* #auto-measure-vectors */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-vectors) · [gRPC Contract](/api/grpc/instrument-operations#auto-measure-vectors)

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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Surface Vector Intersections {/* #auto-measure-surface-vector-intersections */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-surface-vector-intersections) · [gRPC Contract](/api/grpc/instrument-operations#auto-measure-surface-vector-intersections)

```csharp
public Task AutoMeasureSurfaceVectorIntersectionsAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName vectorGroup,
        CollectionObjectName resultantGroup,
        bool waitForComplete = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Specified Geometry {/* #auto-measure-specified-geometry */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-specified-geometry) · [gRPC Contract](/api/grpc/instrument-operations#auto-measure-specified-geometry)

```csharp
public Task AutoMeasureSpecifiedGeometryAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName geometry,
        string modeProfile,
        bool waitForComplete = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Batch of Features {/* #auto-measure-batch-of-features */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-batch-of-features) · [gRPC Contract](/api/grpc/instrument-operations#auto-measure-batch-of-features)

```csharp
public Task AutoMeasureBatchOfFeaturesAsync(
        CollectionInstrumentId instrument,
        IEnumerable<CollectionItemName> features,
        bool waitForComplete = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Correspond Closest Point {/* #auto-correspond-closest-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-correspond-closest-point) · [gRPC Contract](/api/grpc/instrument-operations#auto-correspond-closest-point)

```csharp
public Task AutoCorrespondClosestPointAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName referenceGroup,
        CollectionObjectName actualsGroup,
        bool waitForCompletion = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Close Auto-Correspond Closest Point Dialog {/* #close-auto-correspond-closest-point-dialog */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#close-auto-correspond-closest-point-dialog) · [gRPC Contract](/api/grpc/instrument-operations#close-auto-correspond-closest-point-dialog)

```csharp
public Task CloseAutoCorrespondClosestPointDialogAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Correspond with Proximity Trigger {/* #auto-correspond-with-proximity-trigger */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-correspond-with-proximity-trigger) · [gRPC Contract](/api/grpc/instrument-operations#auto-correspond-with-proximity-trigger)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Mirror from Plane {/* #construct-mirror-from-plane */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-plane) · [gRPC Contract](/api/grpc/instrument-operations#construct-mirror-from-plane)

```csharp
public Task ConstructMirrorFromPlaneAsync(
        CollectionInstrumentId instrument,
        string mirrorName,
        CollectionObjectName plane,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Mirror from Two Points {/* #construct-mirror-from-two-points */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-two-points) · [gRPC Contract](/api/grpc/instrument-operations#construct-mirror-from-two-points)

```csharp
public Task<CollectionObjectName> ConstructMirrorFromTwoPointsAsync(
        CollectionInstrumentId instrument,
        string mirrorName,
        PointName pointMeasuredDirectly,
        PointName pointMeasuredThroughMirror,
        bool sendMirrorToInstrument = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Drift Check {/* #drift-check */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#drift-check) · [gRPC Contract](/api/grpc/instrument-operations#drift-check)

```csharp
public Task<DriftCheckResult> DriftCheckAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName referenceGroup,
        CollectionObjectName actualsGroup,
        double tolerance = 0.0,
        int minimumPointCount = 0,
        bool useClosestReferencePoint = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Nominal Feature {/* #measure-nominal-feature */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-nominal-feature) · [gRPC Contract](/api/grpc/instrument-operations#measure-nominal-feature)

```csharp
public Task MeasureNominalFeatureAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName feature,
        PointName resultingPoint,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Guide Objects in 6D based on Point Measurements {/* #guide-objects-in-6d-based-on-point-measurements */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#guide-objects-in-6d-based-on-point-measurements) · [gRPC Contract](/api/grpc/instrument-operations#guide-objects-in-6d-based-on-point-measurements)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects in 6D using Instrument Updates {/* #move-objects-in-6d-using-instrument-updates */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-objects-in-6d-using-instrument-updates) · [gRPC Contract](/api/grpc/instrument-operations#move-objects-in-6d-using-instrument-updates)

```csharp
public Task MoveObjectsIn6dUsingInstrumentUpdatesAsync(
        CollectionInstrumentId instrument,
        IEnumerable<CollectionObjectName> objectsToMove,
        string measurementMode,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Align Two Targets with Axis (WCF - X) {/* #align-two-targets-with-axis-wcf---x */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-two-targets-with-axis-wcf---x) · [gRPC Contract](/api/grpc/instrument-operations#align-two-targets-with-axis-wcf---x)

```csharp
public Task AlignTwoTargetsWithAxisWcfXAsync(
        CollectionInstrumentId instrument,
        PointName firstPointOnAxis,
        PointName secondPointOnAxis,
        CollectionObjectName initialMeasuredGroup,
        ToleranceVectorOptions? rotationalTolerance = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Interface Response Timeout {/* #get-instrument-interface-response-timeout */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-interface-response-timeout) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-interface-response-timeout)

```csharp
public Task<double> GetInstrumentInterfaceResponseTimeoutAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `Timeout` | Time in seconds. |

## Set Instrument Interface Response Timeout {/* #set-instrument-interface-response-timeout */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-interface-response-timeout) · [gRPC Contract](/api/grpc/instrument-operations#set-instrument-interface-response-timeout)

```csharp
public Task SetInstrumentInterfaceResponseTimeoutAsync(
        CollectionInstrumentId instrument,
        double timeout = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `timeout` | Time in seconds. |

## Get Current Trapping Status {/* #get-current-trapping-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-current-trapping-status) · [gRPC Contract](/api/grpc/instrument-operations#get-current-trapping-status)

```csharp
public Task<CurrentTrappingStatus> GetCurrentTrappingStatusAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Wait For Trapping To Complete {/* #wait-for-trapping-to-complete */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#wait-for-trapping-to-complete) · [gRPC Contract](/api/grpc/instrument-operations#wait-for-trapping-to-complete)

```csharp
public Task WaitForTrappingToCompleteAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Jump Instrument To New Location {/* #jump-instrument-to-new-location */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#jump-instrument-to-new-location) · [gRPC Contract](/api/grpc/instrument-operations#jump-instrument-to-new-location)

```csharp
public Task JumpInstrumentToNewLocationAsync(
        CollectionInstrumentId liveInstrument,
        bool hidePreviousInstrument = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Quick Align {/* #quick-align */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#quick-align) · [gRPC Contract](/api/grpc/instrument-operations#quick-align)

```csharp
public Task QuickAlignAsync(
        IEnumerable<CollectionInstrumentId> instruments,
        IEnumerable<CollectionObjectName> objects,
        IEnumerable<PointName>? nominalPoints = null,
        IEnumerable<string>? nominalPointOfViewNames = null,
        bool alignToIndividualFacesOnly = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Align Cloud to CAD {/* #align-cloud-to-cad */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-cloud-to-cad) · [gRPC Contract](/api/grpc/instrument-operations#align-cloud-to-cad)

```csharp
public Task<CloudToCadAlignmentResult> AlignCloudToCadAsync(
        CollectionObjectName cloud,
        IEnumerable<CollectionObjectName> surfaces,
        double maximumCoarseCadMeshEdgeLength = 0.0,
        bool useFineCadMesh = false,
        bool executeAlignment = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start GD&amp;T Inspection Design {/* #start-gdt-inspection-design */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-design) · [gRPC Contract](/api/grpc/instrument-operations#start-gdt-inspection-design)

```csharp
public Task StartGdtInspectionDesignAsync(
        CollectionName collection,
        InspectionFilter filter = InspectionFilter.All,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start GD&amp;T Inspection Rehearse {/* #start-gdt-inspection-rehearse */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-rehearse) · [gRPC Contract](/api/grpc/instrument-operations#start-gdt-inspection-rehearse)

```csharp
public Task StartGdtInspectionRehearseAsync(
        CollectionName collection,
        InspectionFilter filter = InspectionFilter.All,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start GD&amp;T Inspection {/* #start-gdt-inspection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection) · [gRPC Contract](/api/grpc/instrument-operations#start-gdt-inspection)

```csharp
public Task StartGdtInspectionAsync(
        CollectionInstrumentId instrument,
        CollectionName collection,
        InspectionFilter filter = InspectionFilter.All,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Inspection Verification Mode {/* #get-inspection-verification-mode */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-inspection-verification-mode) · [gRPC Contract](/api/grpc/instrument-operations#get-inspection-verification-mode)

```csharp
public Task<bool> GetInspectionVerificationModeAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Inspection Verification Mode {/* #set-inspection-verification-mode */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-inspection-verification-mode) · [gRPC Contract](/api/grpc/instrument-operations#set-inspection-verification-mode)

```csharp
public Task SetInspectionVerificationModeAsync(
        bool verificationEnabled = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Remeasure Failed Checks Only {/* #set-remeasure-failed-checks-only */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-remeasure-failed-checks-only) · [gRPC Contract](/api/grpc/instrument-operations#set-remeasure-failed-checks-only)

```csharp
public Task SetRemeasureFailedChecksOnlyAsync(
        CollectionName collection,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Associate Objects with Instrument {/* #associate-objects-with-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#associate-objects-with-instrument) · [gRPC Contract](/api/grpc/instrument-operations#associate-objects-with-instrument)

```csharp
public Task AssociateObjectsWithInstrumentAsync(
        CollectionInstrumentId instrument,
        IEnumerable<CollectionObjectName> objects,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Disassociate Objects from Instrument {/* #disassociate-objects-from-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#disassociate-objects-from-instrument) · [gRPC Contract](/api/grpc/instrument-operations#disassociate-objects-from-instrument)

```csharp
public Task DisassociateObjectsFromInstrumentAsync(
        IEnumerable<CollectionObjectName> objects,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Collection Object Name Ref List from Objects associated with Instruments {/* #make-collection-object-name-ref-list-from-objects-associated-with-instruments */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments) · [gRPC Contract](/api/grpc/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsAsync(
        IEnumerable<CollectionInstrumentId> instruments,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Combine Point Groups {/* #combine-point-groups */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#combine-point-groups) · [gRPC Contract](/api/grpc/instrument-operations#combine-point-groups)

```csharp
public Task CombinePointGroupsAsync(
        IEnumerable<CollectionObjectName> groupsToCombine,
        CollectionObjectName combinedPointGroup,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Dissect Point Group {/* #dissect-point-group */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#dissect-point-group) · [gRPC Contract](/api/grpc/instrument-operations#dissect-point-group)

```csharp
public Task DissectPointGroupAsync(
        CollectionObjectName groupToDissect,
        string baseNameForDissectedGroups,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Synchronized Measurement (Master/Slave) {/* #synchronized-measurement-masterslave */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#synchronized-measurement-masterslave) · [gRPC Contract](/api/grpc/instrument-operations#synchronized-measurement-masterslave)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create New Dynamic Reference {/* #create-new-dynamic-reference */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#create-new-dynamic-reference) · [gRPC Contract](/api/grpc/instrument-operations#create-new-dynamic-reference)

```csharp
public Task CreateNewDynamicReferenceAsync(
        CollectionInstrumentId instrument,
        IEnumerable<PointName> pointsDefiningDynamicReference,
        string dynamicReferenceName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Calculate TCP Fixture Uncertainties {/* #calculate-tcp-fixture-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#calculate-tcp-fixture-uncertainties) · [gRPC Contract](/api/grpc/instrument-operations#calculate-tcp-fixture-uncertainties)

```csharp
public Task<TcpFixtureUncertainties> CalculateTcpFixtureUncertaintiesAsync(
        CollectionObjectName tcpFixture,
        IEnumerable<PointName> tcpMeasurements,
        Transform? tcpInWorking = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct TCP Fixture {/* #construct-tcp-fixture */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-tcp-fixture) · [gRPC Contract](/api/grpc/instrument-operations#construct-tcp-fixture)

```csharp
public Task<CollectionObjectName> ConstructTcpFixtureAsync(
        CollectionObjectName requestedTcpFixture,
        double pointMatchThreshold = 0.0,
        bool replaceExistingTcpFixture = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Nominal Point to TCP Fixture {/* #add-nominal-point-to-tcp-fixture */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#add-nominal-point-to-tcp-fixture) · [gRPC Contract](/api/grpc/instrument-operations#add-nominal-point-to-tcp-fixture)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Last Solved TCP Fixture Uncertainty Covariance Matrix {/* #get-last-solved-tcp-fixture-uncertainty-covariance-matrix */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix) · [gRPC Contract](/api/grpc/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix)

```csharp
public Task<UncertaintyCovarianceMatrix> GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixAsync(
        CollectionObjectName tcpFixture,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Base Uncertainty Covariance Matrix WRT Base {/* #set-instrument-base-uncertainty-covariance-matrix-wrt-base */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base) · [gRPC Contract](/api/grpc/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base)

```csharp
public Task SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseAsync(
        CollectionInstrumentId instrument,
        UncertaintyCovarianceMatrix covarianceMatrix,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Base Uncertainty Covariance Matrix WRT WORLD {/* #set-instrument-base-uncertainty-covariance-matrix-wrt-world */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC Contract](/api/grpc/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world)

```csharp
public Task SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldAsync(
        CollectionInstrumentId instrument,
        UncertaintyCovarianceMatrix covarianceMatrix,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Base Uncertainty Covariance Matrix WRT WORLD {/* #get-instrument-base-uncertainty-covariance-matrix-wrt-world */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC Contract](/api/grpc/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world)

```csharp
public Task<UncertaintyCovarianceMatrix> GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Measured Point Uncertainty Ellipsoids {/* #construct-measured-point-uncertainty-ellipsoids */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-measured-point-uncertainty-ellipsoids) · [gRPC Contract](/api/grpc/instrument-operations#construct-measured-point-uncertainty-ellipsoids)

```csharp
public Task ConstructMeasuredPointUncertaintyEllipsoidsAsync(
        IEnumerable<PointName> measurements,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get WRTL Channel and Status {/* #get-wrtl-channel-and-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-wrtl-channel-and-status) · [gRPC Contract](/api/grpc/instrument-operations#get-wrtl-channel-and-status)

```csharp
public Task<WrtlChannelStatus> GetWrtlChannelAndStatusAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set WRTL Channel {/* #set-wrtl-channel */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-wrtl-channel) · [gRPC Contract](/api/grpc/instrument-operations#set-wrtl-channel)

```csharp
public Task SetWrtlChannelAsync(
        CollectionInstrumentId instrument,
        int channel = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetLastInstrumentIndexAsync {/* #getlastinstrumentindexasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RenameInstrumentAsync {/* #renameinstrumentasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentIdFromNameAsync {/* #getinstrumentidfromnameasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentModelAsync {/* #getinstrumentmodelasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MoveInstrumentToAnotherCollectionAsync {/* #moveinstrumenttoanothercollectionasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SaveInstrumentConfigurationAsync {/* #saveinstrumentconfigurationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LoadInstrumentConfigurationAsync {/* #loadinstrumentconfigurationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ExportInstrumentHistoryToXmlFileAsync {/* #exportinstrumenthistorytoxmlfileasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## PointAtTargetAsync {/* #pointattargetasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MeasureSinglePointHereAsync {/* #measuresinglepointhereasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetCurrentInstrumentPositionUpdateAsync {/* #getcurrentinstrumentpositionupdateasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## BuildTargetAsync {/* #buildtargetasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MeasureExistingSinglePointAsync {/* #measureexistingsinglepointasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MeasureExistingSinglePointManualGuideAsync {/* #measureexistingsinglepointmanualguideasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MeasureExistingSinglePointAndCompareAsync {/* #measureexistingsinglepointandcompareasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetProbeOffsetFrameOnlineAsync {/* #setprobeoffsetframeonlineasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetProbeOffsetFrameOfflineAsync {/* #setprobeoffsetframeofflineasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## StopActiveMeasurementModeAsync {/* #stopactivemeasurementmodeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## EnableDisableFrameSetScanModeAllInstrumentsAsync {/* #enabledisableframesetscanmodeallinstrumentsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## EnableDisableFrameSetScanModeByInstrumentAsync {/* #enabledisableframesetscanmodebyinstrumentasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## EnableDisablePointSetScanModeAsync {/* #enabledisablepointsetscanmodeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AddNewInstrumentAsync {/* #addnewinstrumentasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DeleteInstrumentAsync {/* #deleteinstrumentasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DeleteMeasurementsAsync {/* #deletemeasurementsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DeleteMeasurementObservationAsync {/* #deletemeasurementobservationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MoveMeasurementObservationAsync {/* #movemeasurementobservationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## InitiateServoGuideAsync {/* #initiateservoguideasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## StartTheodoliteInterfaceAsync {/* #starttheodoliteinterfaceasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## StartInstrumentInterfaceAsync {/* #startinstrumentinterfaceasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## StopInstrumentInterfaceAsync {/* #stopinstrumentinterfaceasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ActivateDeactivateInstrumentToolbarAsync {/* #activatedeactivateinstrumenttoolbarasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## VerifyInstrumentConnectionAsync {/* #verifyinstrumentconnectionasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConfigureAndMeasureAsync {/* #configureandmeasureasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MeasureAsync {/* #measureasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetXyzReferenceFrameInstrumentBaseAnchorFrameAsync {/* #setxyzreferenceframeinstrumentbaseanchorframeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DockInstrumentInterfaceAsync {/* #dockinstrumentinterfaceasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LocateInstrumentRefTieInAsync {/* #locateinstrumentreftieinasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LocateInstrumentGroupToSurfaceQuickFitAsync {/* #locateinstrumentgrouptosurfacequickfitasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MultiMeasurementInitiateAsync {/* #multimeasurementinitiateasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MultiMeasurementStopAsync {/* #multimeasurementstopasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AlignLaserProjectorAsync {/* #alignlaserprojectorasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LocateInstrumentsUsmnAsync {/* #locateinstrumentsusmnasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## CreateTemplatedInstrumentUsmnAsync {/* #createtemplatedinstrumentusmnasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LocateInstrumentBestFitGroupToGroupAsync {/* #locateinstrumentbestfitgrouptogroupasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LocateInstrumentBestFitNominalGeometryAsync {/* #locateinstrumentbestfitnominalgeometryasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentTransformAsync {/* #getinstrumenttransformasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetInstrumentTransformAsync {/* #setinstrumenttransformasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetTrackerEdmTheodoliteUncertaintiesAsync {/* #gettrackeredmtheodoliteuncertaintiesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetTrackerEdmTheodoliteUncertaintiesAsync {/* #settrackeredmtheodoliteuncertaintiesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetPcmmInstrumentXyzUncertaintiesAsync {/* #getpcmminstrumentxyzuncertaintiesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetPcmmInstrumentXyzUncertaintiesAsync {/* #setpcmminstrumentxyzuncertaintiesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetXyzInstrumentUncertaintiesAsync {/* #getxyzinstrumentuncertaintiesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetXyzInstrumentUncertaintiesAsync {/* #setxyzinstrumentuncertaintiesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentWeatherSettingAsync {/* #getinstrumentweathersettingasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetInstrumentWeatherSettingAsync {/* #setinstrumentweathersettingasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentPartTemperatureAsync {/* #getinstrumentparttemperatureasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ComputeCteScaleFactorAsync {/* #computectescalefactorasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetMultiplyInstrumentScaleFactorAsync {/* #setmultiplyinstrumentscalefactorasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetAbsoluteInstrumentScaleFactorAsync {/* #setabsoluteinstrumentscalefactorasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentScaleFactorAsync {/* #getinstrumentscalefactorasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## TransformInstrumentFrameToFrameAsync {/* #transforminstrumentframetoframeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## TransformInstrumentByDeltaAsync {/* #transforminstrumentbydeltaasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## TransformMultipleInstrumentsByDeltaAsync {/* #transformmultipleinstrumentsbydeltaasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## InstrumentOperationalCheckAsync {/* #instrumentoperationalcheckasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetNumberOfObservationsOnTargetAsync {/* #getnumberofobservationsontargetasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentsWithObservationsOnTargetAsync {/* #getinstrumentswithobservationsontargetasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetTargetsMeasuredByInstrumentAsync {/* #gettargetsmeasuredbyinstrumentasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetObservationStatusAsync {/* #setobservationstatusasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetObservationInfoAsync {/* #getobservationinfoasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## FabricateObservationsAsync {/* #fabricateobservationsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetObscuredPointsFromInstrumentAsync {/* #getobscuredpointsfrominstrumentasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentTargetsAndModeProfilesAsync {/* #getinstrumenttargetsandmodeprofilesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetInstrumentMeasurementModeProfileAsync {/* #setinstrumentmeasurementmodeprofileasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetInstrumentGroupAndTargetAsync {/* #setinstrumentgroupandtargetasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetInstrumentTargetingAsync {/* #setinstrumenttargetingasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentMeasurementModeProfileAsync {/* #getinstrumentmeasurementmodeprofileasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentGroupAndTargetAsync {/* #getinstrumentgroupandtargetasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentTargetingAsync {/* #getinstrumenttargetingasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetTargetComputationOptionsAsync {/* #settargetcomputationoptionsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetObservationMirrorCubeShotFaceAsync {/* #setobservationmirrorcubeshotfaceasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetObservationCollimationShotOptionsAsync {/* #setobservationcollimationshotoptionsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## CollimationAsync {/* #collimationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentTargetStatusAsync {/* #getinstrumenttargetstatusasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeSurfaceFaceListFromPointProximityAsync {/* #makesurfacefacelistfrompointproximityasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ScanWithinPerimeterAsync {/* #scanwithinperimeterasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## EditScanPerimeterProfileAsync {/* #editscanperimeterprofileasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetEstimatedScanTimeAsync {/* #getestimatedscantimeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructPerimetersFromSurfaceFaceListAsync {/* #constructperimetersfromsurfacefacelistasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ScanCadFacesAsync {/* #scancadfacesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## EdgeScanMeasurementAsync {/* #edgescanmeasurementasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## TrackTapeMeasurementAsync {/* #tracktapemeasurementasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AutoMeasurePointsAsync {/* #automeasurepointsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AutoMeasureVectorsAsync {/* #automeasurevectorsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AutoMeasureSurfaceVectorIntersectionsAsync {/* #automeasuresurfacevectorintersectionsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AutoMeasureSpecifiedGeometryAsync {/* #automeasurespecifiedgeometryasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AutoMeasureBatchOfFeaturesAsync {/* #automeasurebatchoffeaturesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AutoCorrespondClosestPointAsync {/* #autocorrespondclosestpointasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## CloseAutoCorrespondClosestPointDialogAsync {/* #closeautocorrespondclosestpointdialogasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AutoCorrespondWithProximityTriggerAsync {/* #autocorrespondwithproximitytriggerasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructMirrorFromPlaneAsync {/* #constructmirrorfromplaneasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructMirrorFromTwoPointsAsync {/* #constructmirrorfromtwopointsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DriftCheckAsync {/* #driftcheckasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MeasureNominalFeatureAsync {/* #measurenominalfeatureasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GuideObjectsIn6dBasedOnPointMeasurementsAsync {/* #guideobjectsin6dbasedonpointmeasurementsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MoveObjectsIn6dUsingInstrumentUpdatesAsync {/* #moveobjectsin6dusinginstrumentupdatesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AlignTwoTargetsWithAxisWcfXAsync {/* #aligntwotargetswithaxiswcfxasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentInterfaceResponseTimeoutAsync {/* #getinstrumentinterfaceresponsetimeoutasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetInstrumentInterfaceResponseTimeoutAsync {/* #setinstrumentinterfaceresponsetimeoutasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetCurrentTrappingStatusAsync {/* #getcurrenttrappingstatusasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## WaitForTrappingToCompleteAsync {/* #waitfortrappingtocompleteasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## JumpInstrumentToNewLocationAsync {/* #jumpinstrumenttonewlocationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## QuickAlignAsync {/* #quickalignasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AlignCloudToCadAsync {/* #aligncloudtocadasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## StartGdtInspectionDesignAsync {/* #startgdtinspectiondesignasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## StartGdtInspectionRehearseAsync {/* #startgdtinspectionrehearseasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## StartGdtInspectionAsync {/* #startgdtinspectionasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInspectionVerificationModeAsync {/* #getinspectionverificationmodeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetInspectionVerificationModeAsync {/* #setinspectionverificationmodeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetRemeasureFailedChecksOnlyAsync {/* #setremeasurefailedchecksonlyasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AssociateObjectsWithInstrumentAsync {/* #associateobjectswithinstrumentasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DisassociateObjectsFromInstrumentAsync {/* #disassociateobjectsfrominstrumentasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsAsync {/* #makecollectionobjectnamereflistfromobjectsassociatedwithinstrumentsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## CombinePointGroupsAsync {/* #combinepointgroupsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DissectPointGroupAsync {/* #dissectpointgroupasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SynchronizedMeasurementMasterSlaveAsync {/* #synchronizedmeasurementmasterslaveasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## CreateNewDynamicReferenceAsync {/* #createnewdynamicreferenceasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## CalculateTcpFixtureUncertaintiesAsync {/* #calculatetcpfixtureuncertaintiesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructTcpFixtureAsync {/* #constructtcpfixtureasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## AddNominalPointToTcpFixtureAsync {/* #addnominalpointtotcpfixtureasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixAsync {/* #getlastsolvedtcpfixtureuncertaintycovariancematrixasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseAsync {/* #setinstrumentbaseuncertaintycovariancematrixwrtbaseasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldAsync {/* #setinstrumentbaseuncertaintycovariancematrixwrtworldasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldAsync {/* #getinstrumentbaseuncertaintycovariancematrixwrtworldasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructMeasuredPointUncertaintyEllipsoidsAsync {/* #constructmeasuredpointuncertaintyellipsoidsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetWrtlChannelAndStatusAsync {/* #getwrtlchannelandstatusasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetWrtlChannelAsync {/* #setwrtlchannelasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/d9dc263acf3e41fe8fea6e88533a954394eb9ad4/targets/2026.1.0529.7)
