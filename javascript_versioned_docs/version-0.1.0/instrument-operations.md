---
title: Instrument Operations
description: Briosa 0.1.0 JavaScript and TypeScript APIs for the reviewed Instrument Operations MP commands.
toc_max_heading_level: 2
---

# Instrument Operations

## Types

```ts
export interface LastInstrumentIndexResult {
  readonly instrumentIndex: number;
  readonly instrument: CollectionInstrumentId;
}

export interface InstrumentModelResult {
  readonly name: string;
  readonly model: string;
}

export interface InstrumentTypeName {
  readonly value: string;
}

export type InstrumentPositionReportingFrame =
  | "Instrument Base"
  | "World"
  | "Working";

export interface InstrumentPositionUpdate {
  readonly xOrR: number;
  readonly yOrThetaDegrees: number;
  readonly zOrPhiDegrees: number;
  readonly timeSinceUpdateSeconds: number;
  readonly timestampApproximate: string;
}

export interface PointComparisonResult {
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
  readonly magnitude: number;
  readonly resultingPointName: PointName;
}

export interface FitErrorResult {
  readonly rmsError: number;
  readonly maximumError: number;
}

export type ShowUsmnDialog = "No" | "Yes" | "On Tolerance Violation";

export interface InstrumentBestFitResult {
  readonly transformInWorking: Transform;
  readonly optimumTransform: WorldTransform;
  readonly rmsDeviation: number;
  readonly maximumAbsoluteDeviation: number;
  readonly numberOfUnknowns: number;
  readonly numberOfEquations: number;
  readonly robustness: number;
}

export interface TrackerEdmTheodoliteUncertainties {
  readonly thetaDispersionArcseconds: number;
  readonly thetaThreshold: number;
  readonly phiDispersionArcseconds: number;
  readonly phiThreshold: number;
  readonly distancePpm: number;
  readonly distanceThreshold: number;
}

export interface InstrumentXyzUncertainties {
  readonly xUncertainty: number;
  readonly yUncertainty: number;
  readonly zUncertainty: number;
}

export interface InstrumentWeatherSetting {
  readonly temperatureFahrenheit: number;
  readonly pressureMmHg: number;
  readonly relativeHumidityPercent: number;
  readonly setAutomatically: boolean;
}

export interface ObservationSphericalValues {
  readonly distance: number;
  readonly azimuth: number;
  readonly elevation: number;
}

export interface ObservationInfo {
  readonly instrument: CollectionInstrumentId;
  readonly sphericalValues: ObservationSphericalValues;
  readonly active: boolean;
  readonly timestamp: string;
  readonly rmsError: number;
  readonly temperatureFahrenheit: number;
  readonly pressureInHg: number;
  readonly relativeHumidityPercent: number;
  readonly infoData: string;
}

export interface InstrumentTargetsAndModeProfiles {
  readonly modeProfiles: readonly string[];
  readonly targetNames: readonly string[];
}

export type TargetComputationMethod =
  | "Use most recent shot from each face"
  | "Use only most recent shot"
  | "Do not change prior measurements at all"
  | "Force a new point for each measurement"
  | "Remove all prior shots"
  | "Deactivate all prior shots";

export type CollimationTiltMode =
  | "Full Collimation"
  | "No-Tilt Collimation";

export type CollimationBaselineMethod =
  | "Determined By Value"
  | "Determined From Scale"
  | "Determined From Known Point";

export type InspectionFilter = "ALL" | "CHECKS" | "DATUMS";

export interface InstrumentTargetStatus {
  readonly isLocked: boolean;
  readonly name: string;
  readonly numberOfFaces: number;
  readonly lockedFace: number;
}

export interface PerimeterLists {
  readonly scanPerimeters: readonly CollectionObjectName[];
  readonly exclusionPerimeters: readonly CollectionObjectName[];
}

export interface DriftCheckResult {
  readonly maximumError: number;
  readonly rmsError: number;
  readonly instrumentAdded: boolean;
  readonly newInstrument?: CollectionInstrumentId;
}

export interface CurrentTrappingStatus {
  readonly active: boolean;
  readonly focusedItem?: CollectionItemName;
  readonly instrument?: CollectionInstrumentId;
}

export interface CloudToCadAlignmentResult {
  readonly rmsDeviation: number;
  readonly averageDeviation: number;
  readonly maximumAbsoluteDeviation: number;
  readonly resultantTransformInWorking: Transform;
}

export type DoubleVector6 = readonly [
  number,
  number,
  number,
  number,
  number,
  number,
];

export interface UncertaintyCovarianceMatrix {
  readonly row1: DoubleVector6;
  readonly row2: DoubleVector6;
  readonly row3: DoubleVector6;
  readonly row4: DoubleVector6;
  readonly row5: DoubleVector6;
  readonly row6: DoubleVector6;
}

export interface TcpFixtureUncertainties {
  readonly solutionValid: boolean;
  readonly refinedTcpInWorking: Transform;
  readonly uncertaintiesInTcpFixtureFrame: DoubleVector6;
  readonly uncertaintiesInWorkingFrame: DoubleVector6;
  readonly rmsError: number;
  readonly maximumAbsoluteError: number;
  readonly goodnessOfFit: number;
  readonly robustness: number;
  readonly resultNotes: readonly string[];
}

export interface WrtlChannelStatus {
  readonly connectionStatus: boolean;
  readonly activeChannel: number;
}
```

## getLastInstrumentIndex

[MP command](/mp-command-catalog/commands/instrument-operations#get-last-instrument-index) · [gRPC contract](/api/grpc/instrument-operations#get-last-instrument-index)

```ts
function getLastInstrumentIndex(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<LastInstrumentIndexResult>;

const last = await getLastInstrumentIndex(briosa);
```

The result preserves both MP outputs: the integer `instrumentIndex` and the
structured `instrument` identity.

## renameInstrument

[MP command](/mp-command-catalog/commands/instrument-operations#rename-instrument) · [gRPC contract](/api/grpc/instrument-operations#rename-instrument)

```ts
export interface RenameInstrumentInput {
  readonly instrument: CollectionInstrumentId;
  readonly newName: string;
}

function renameInstrument(
  briosa: BriosaClient,
  input: RenameInstrumentInput,
  options?: BriosaCallOptions,
): Promise<void>;

await renameInstrument(briosa, { instrument, newName: "Tracker 1" });
```

## getInstrumentIdFromName

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-id-from-name) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-id-from-name)

```ts
export interface GetInstrumentIdFromNameInput {
  readonly name: string;
}

function getInstrumentIdFromName(
  briosa: BriosaClient,
  input: GetInstrumentIdFromNameInput,
  options?: BriosaCallOptions,
): Promise<CollectionInstrumentId>;

const instrument = await getInstrumentIdFromName(briosa, { name: "Tracker 1" });
```

## getInstrumentModel

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-model) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-model)

```ts
export interface GetInstrumentModelInput {
  readonly instrument: CollectionInstrumentId;
}

function getInstrumentModel(
  briosa: BriosaClient,
  input: GetInstrumentModelInput,
  options?: BriosaCallOptions,
): Promise<InstrumentModelResult>;

const details = await getInstrumentModel(briosa, { instrument });
```

Returns the MP `Name` and `Model` strings.

## moveInstrumentToAnotherCollection

[MP command](/mp-command-catalog/commands/instrument-operations#move-instrument-to-another-collection) · [gRPC contract](/api/grpc/instrument-operations#move-instrument-to-another-collection)

```ts
export interface MoveInstrumentToAnotherCollectionInput {
  readonly instrument: CollectionInstrumentId;
  readonly collectionName: CollectionName;
}

function moveInstrumentToAnotherCollection(
  briosa: BriosaClient,
  input: MoveInstrumentToAnotherCollectionInput,
  options?: BriosaCallOptions,
): Promise<void>;

await moveInstrumentToAnotherCollection(briosa, { instrument, collectionName });
```

## saveInstrumentConfiguration

[MP command](/mp-command-catalog/commands/instrument-operations#save-instrument-configuration) · [gRPC contract](/api/grpc/instrument-operations#save-instrument-configuration)

```ts
export interface SaveInstrumentConfigurationInput {
  readonly instrument: CollectionInstrumentId;
  readonly configurationFile: FileReference;
}

function saveInstrumentConfiguration(
  briosa: BriosaClient,
  input: SaveInstrumentConfigurationInput,
  options?: BriosaCallOptions,
): Promise<void>;

await saveInstrumentConfiguration(briosa, { instrument, configurationFile });
```

## loadInstrumentConfiguration

[MP command](/mp-command-catalog/commands/instrument-operations#load-instrument-configuration) · [gRPC contract](/api/grpc/instrument-operations#load-instrument-configuration)

```ts
export interface LoadInstrumentConfigurationInput {
  readonly instrument: CollectionInstrumentId;
  readonly configurationFile: FileReference;
}

function loadInstrumentConfiguration(
  briosa: BriosaClient,
  input: LoadInstrumentConfigurationInput,
  options?: BriosaCallOptions,
): Promise<void>;

await loadInstrumentConfiguration(briosa, { instrument, configurationFile });
```

## exportInstrumentHistoryToXmlFile

[MP command](/mp-command-catalog/commands/instrument-operations#export-instrument-history-to-xml-file) · [gRPC contract](/api/grpc/instrument-operations#export-instrument-history-to-xml-file)

```ts
export interface ExportInstrumentHistoryToXmlFileInput {
  readonly instrument: CollectionInstrumentId;
  readonly filePath: FileReference;
}

function exportInstrumentHistoryToXmlFile(
  briosa: BriosaClient,
  input: ExportInstrumentHistoryToXmlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;

await exportInstrumentHistoryToXmlFile(briosa, { instrument, filePath });
```

Each `FileReference` identifies a path accessible to the local Briosa server.
Mutation functions resolve without a command value. `BriosaCallOptions`
contains caller controls such as an `AbortSignal`; the client does not replay
uncertain work.

## pointAtTarget

[MP command](/mp-command-catalog/commands/instrument-operations#point-at-target) · [gRPC contract](/api/grpc/instrument-operations#point-at-target)

```ts
export interface PointAtTargetInput {
  readonly instrument: CollectionInstrumentId;
  readonly targetId: PointName;
  readonly htmlPromptFile?: FileReference;
}

function pointAtTarget(briosa: BriosaClient, input: PointAtTargetInput, options?: BriosaCallOptions): Promise<void>;

await pointAtTarget(briosa, { instrument, targetId });
```

## measureSinglePointHere

[MP command](/mp-command-catalog/commands/instrument-operations#measure-single-point-here) · [gRPC contract](/api/grpc/instrument-operations#measure-single-point-here)

```ts
export interface MeasureSinglePointHereInput {
  readonly instrument: CollectionInstrumentId;
  readonly targetId: PointName;
  readonly measureImmediately?: boolean;
  readonly htmlPromptFile?: FileReference;
}

function measureSinglePointHere(briosa: BriosaClient, input: MeasureSinglePointHereInput, options?: BriosaCallOptions): Promise<void>;

await measureSinglePointHere(briosa, { instrument, targetId });
```

`measureImmediately` defaults to `false`.

## getCurrentInstrumentPositionUpdate

[MP command](/mp-command-catalog/commands/instrument-operations#get-current-instrument-position-update) · [gRPC contract](/api/grpc/instrument-operations#get-current-instrument-position-update)

```ts
export interface GetCurrentInstrumentPositionUpdateInput {
  readonly instrument: CollectionInstrumentId;
  readonly reportingFrame?: InstrumentPositionReportingFrame;
  readonly polarCoordinates?: boolean;
}

function getCurrentInstrumentPositionUpdate(
  briosa: BriosaClient,
  input: GetCurrentInstrumentPositionUpdateInput,
  options?: BriosaCallOptions,
): Promise<InstrumentPositionUpdate>;

const position = await getCurrentInstrumentPositionUpdate(briosa, { instrument });
```

The defaults are `"Instrument Base"` and `false`. The client does not convert
coordinate modes.

## buildTarget

[MP command](/mp-command-catalog/commands/instrument-operations#build-target) · [gRPC contract](/api/grpc/instrument-operations#build-target)

```ts
export interface BuildTargetInput {
  readonly instrument: CollectionInstrumentId;
  readonly outputTargetName: PointName;
  readonly nominalPoint: PointName;
  readonly tolerance?: ToleranceVectorOptions;
  readonly htmlPromptFile?: FileReference;
}

function buildTarget(briosa: BriosaClient, input: BuildTargetInput, options?: BriosaCallOptions): Promise<void>;

await buildTarget(briosa, { instrument, outputTargetName, nominalPoint });
```

An omitted tolerance disables all component and magnitude checks at zero.

## measureExistingSinglePoint

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point) · [gRPC contract](/api/grpc/instrument-operations#measure-existing-single-point)

```ts
export interface MeasureExistingSinglePointInput {
  readonly instrument: CollectionInstrumentId;
  readonly existingTargetId: PointName;
  readonly groupNameForNewPoint: CollectionObjectName;
  readonly measureImmediately?: boolean;
  readonly htmlPromptFile?: FileReference;
}

function measureExistingSinglePoint(
  briosa: BriosaClient,
  input: MeasureExistingSinglePointInput,
  options?: BriosaCallOptions,
): Promise<PointName>;

const point = await measureExistingSinglePoint(briosa, {
  instrument,
  existingTargetId,
  groupNameForNewPoint,
});
```

## measureExistingSinglePointManualGuide

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-manual-guide) · [gRPC contract](/api/grpc/instrument-operations#measure-existing-single-point-manual-guide)

```ts
function measureExistingSinglePointManualGuide(
  briosa: BriosaClient,
  input: MeasureExistingSinglePointInput,
  options?: BriosaCallOptions,
): Promise<PointName>;

const point = await measureExistingSinglePointManualGuide(briosa, {
  instrument,
  existingTargetId,
  groupNameForNewPoint,
});
```

## measureExistingSinglePointAndCompare

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-and-compare) · [gRPC contract](/api/grpc/instrument-operations#measure-existing-single-point-and-compare)

```ts
export interface MeasureExistingSinglePointAndCompareInput
  extends MeasureExistingSinglePointInput {
  readonly tolerance?: number;
}

function measureExistingSinglePointAndCompare(
  briosa: BriosaClient,
  input: MeasureExistingSinglePointAndCompareInput,
  options?: BriosaCallOptions,
): Promise<PointComparisonResult>;

const comparison = await measureExistingSinglePointAndCompare(briosa, {
  instrument,
  existingTargetId,
  groupNameForNewPoint,
});
```

The result includes the vector plus the separate X, Y, Z, magnitude, and
resulting-point outputs. `tolerance` defaults to `0.0`, meaning none.

## setProbeOffsetFrameOnline

[MP command](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-online-measure-raw-frame) · [gRPC contract](/api/grpc/instrument-operations#set-probe-offset-frame-online-measure-raw-frame)

```ts
export interface SetProbeOffsetFrameOnlineInput {
  readonly instrument: CollectionInstrumentId;
  readonly probeName: string;
  readonly offsetFrame: CollectionObjectName;
  readonly faceId?: number;
  readonly measureProfileName?: string;
  readonly timeoutSeconds?: number;
}

function setProbeOffsetFrameOnline(
  briosa: BriosaClient,
  input: SetProbeOffsetFrameOnlineInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setProbeOffsetFrameOnline(briosa, { instrument, probeName, offsetFrame });
```

Defaults are face ID `0`, an empty measure-profile name, and 15 seconds.

## setProbeOffsetFrameOffline

[MP command](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame) · [gRPC contract](/api/grpc/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame)

```ts
export interface SetProbeOffsetFrameOfflineInput {
  readonly instrument: CollectionInstrumentId;
  readonly probeName: string;
  readonly rawMeasuredFrame: CollectionObjectName;
  readonly offsetFrame: CollectionObjectName;
  readonly faceId?: number;
}

function setProbeOffsetFrameOffline(
  briosa: BriosaClient,
  input: SetProbeOffsetFrameOfflineInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setProbeOffsetFrameOffline(briosa, {
  instrument,
  probeName,
  rawMeasuredFrame,
  offsetFrame,
});
```

## stopActiveMeasurementMode

[MP command](/mp-command-catalog/commands/instrument-operations#stop-active-measurement-mode) · [gRPC contract](/api/grpc/instrument-operations#stop-active-measurement-mode)

```ts
export interface StopActiveMeasurementModeInput {
  readonly instrument: CollectionInstrumentId;
}

function stopActiveMeasurementMode(
  briosa: BriosaClient,
  input: StopActiveMeasurementModeInput,
  options?: BriosaCallOptions,
): Promise<void>;

await stopActiveMeasurementMode(briosa, { instrument });
```

The client does not track parallel measurement state or limit this operation
to recovery. An `AbortSignal` does not prove that physical or SA work stopped,
and no uncertain operation is replayed automatically.

## enableDisableFrameSetScanModeAllInstruments

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments) · [gRPC contract](/api/grpc/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments)

```ts
export interface EnableDisableFrameSetScanModeAllInstrumentsInput {
  readonly enableFrameSetScanMode?: boolean;
}

function enableDisableFrameSetScanModeAllInstruments(
  briosa: BriosaClient,
  input?: EnableDisableFrameSetScanModeAllInstrumentsInput,
  options?: BriosaCallOptions,
): Promise<void>;

await enableDisableFrameSetScanModeAllInstruments(briosa);
```

Enablement defaults to `true`.

## enableDisableFrameSetScanModeByInstrument

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument) · [gRPC contract](/api/grpc/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument)

```ts
export interface EnableDisableFrameSetScanModeByInstrumentInput {
  readonly instrument: CollectionInstrumentId;
  readonly enableFrameSetScanMode?: boolean;
}

function enableDisableFrameSetScanModeByInstrument(
  briosa: BriosaClient,
  input: EnableDisableFrameSetScanModeByInstrumentInput,
  options?: BriosaCallOptions,
): Promise<void>;

await enableDisableFrameSetScanModeByInstrument(briosa, { instrument });
```

## enableDisablePointSetScanMode

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-point-set-scan-mode) · [gRPC contract](/api/grpc/instrument-operations#enabledisable-point-set-scan-mode)

```ts
export interface EnableDisablePointSetScanModeInput {
  readonly instrument: CollectionInstrumentId;
  readonly enablePointSetScanMode?: boolean;
}

function enableDisablePointSetScanMode(
  briosa: BriosaClient,
  input: EnableDisablePointSetScanModeInput,
  options?: BriosaCallOptions,
): Promise<void>;

await enableDisablePointSetScanMode(briosa, { instrument });
```

## addNewInstrument

[MP command](/mp-command-catalog/commands/instrument-operations#add-new-instrument) · [gRPC contract](/api/grpc/instrument-operations#add-new-instrument)

```ts
export interface AddNewInstrumentInput {
  readonly instrumentType: InstrumentTypeName;
}

function addNewInstrument(
  briosa: BriosaClient,
  input: AddNewInstrumentInput,
  options?: BriosaCallOptions,
): Promise<CollectionInstrumentId>;

const instrument = await addNewInstrument(briosa, {
  instrumentType: { value: "Leica AT960/930" },
});
```

The exact value must be accepted by the connected SA target. The client does
not substitute another instrument type.

## deleteInstrument

[MP command](/mp-command-catalog/commands/instrument-operations#delete-instrument) · [gRPC contract](/api/grpc/instrument-operations#delete-instrument)

```ts
export interface DeleteInstrumentInput {
  readonly instrument: CollectionInstrumentId;
  readonly promptUserToConfirm?: boolean;
  readonly keepResultingPoints?: boolean;
}

function deleteInstrument(
  briosa: BriosaClient,
  input: DeleteInstrumentInput,
  options?: BriosaCallOptions,
): Promise<void>;

await deleteInstrument(briosa, { instrument });
```

The defaults are no confirmation prompt and keeping resulting points.

## deleteMeasurements

[MP command](/mp-command-catalog/commands/instrument-operations#delete-measurements) · [gRPC contract](/api/grpc/instrument-operations#delete-measurements)

```ts
export interface DeleteMeasurementsInput {
  readonly instrument: CollectionInstrumentId;
  readonly pointName: PointName;
  readonly deletePointIfNoMeasurementsRemain?: boolean;
}

function deleteMeasurements(briosa: BriosaClient, input: DeleteMeasurementsInput, options?: BriosaCallOptions): Promise<void>;

await deleteMeasurements(briosa, { instrument, pointName });
```

## deleteMeasurementObservation

[MP command](/mp-command-catalog/commands/instrument-operations#delete-measurement-observation) · [gRPC contract](/api/grpc/instrument-operations#delete-measurement-observation)

```ts
export interface DeleteMeasurementObservationInput {
  readonly pointName: PointName;
  readonly observationIndex?: number;
  readonly deletePointIfNoMeasurementsRemain?: boolean;
}

function deleteMeasurementObservation(
  briosa: BriosaClient,
  input: DeleteMeasurementObservationInput,
  options?: BriosaCallOptions,
): Promise<void>;

await deleteMeasurementObservation(briosa, { pointName });
```

## moveMeasurementObservation

[MP command](/mp-command-catalog/commands/instrument-operations#move-measurement-observation) · [gRPC contract](/api/grpc/instrument-operations#move-measurement-observation)

```ts
export interface MoveMeasurementObservationInput {
  readonly sourcePointName: PointName;
  readonly observationIndex?: number;
  readonly deletePointIfNoMeasurementsRemain?: boolean;
  readonly destinationPointName: PointName;
  readonly forceObservationActive?: boolean;
}

function moveMeasurementObservation(
  briosa: BriosaClient,
  input: MoveMeasurementObservationInput,
  options?: BriosaCallOptions,
): Promise<void>;

await moveMeasurementObservation(briosa, {
  sourcePointName,
  destinationPointName,
});
```

Observation index defaults to `0`, deleting an empty source point defaults to
`false`, and forcing the moved observation active defaults to `true`. Briosa
adds no preflight or transaction, and an aborted call is never replayed after
an unknown outcome.

## initiateServoGuide

[MP command](/mp-command-catalog/commands/instrument-operations#initiate-servo-guide) · [gRPC contract](/api/grpc/instrument-operations#initiate-servo-guide)

```ts
export interface InitiateServoGuideInput {
  readonly instrument: CollectionInstrumentId;
  readonly nominalPoints: readonly PointName[];
  readonly groupNameSuffix?: string;
  readonly targetNameSuffix?: string;
  readonly tolerance?: number;
}

function initiateServoGuide(
  briosa: BriosaClient,
  input: InitiateServoGuideInput,
  options?: BriosaCallOptions,
): Promise<void>;

await initiateServoGuide(briosa, { instrument, nominalPoints });
```

`nominalPoints` must contain at least one point. Both suffixes default to an
empty string, and tolerance defaults to `0.0`.

## startTheodoliteInterface

[MP command](/mp-command-catalog/commands/instrument-operations#start-theodolite-interface) · [gRPC contract](/api/grpc/instrument-operations#start-theodolite-interface)

```ts
export interface StartTheodoliteInterfaceInput {
  readonly instrument: CollectionInstrumentId;
  readonly theodoliteType: string;
  readonly commPort?: number;
  readonly deviceIpAddress?: string;
  readonly simulation?: boolean;
}

function startTheodoliteInterface(
  briosa: BriosaClient,
  input: StartTheodoliteInterfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;

await startTheodoliteInterface(briosa, { instrument, theodoliteType });
```

The type is passed to Theodolite Manager exactly as supplied. The device IP
configures communication from local SA to the instrument; it is not a remote
Briosa server address.

## startInstrumentInterface

[MP command](/mp-command-catalog/commands/instrument-operations#start-instrument-interface) · [gRPC contract](/api/grpc/instrument-operations#start-instrument-interface)

```ts
export interface StartInstrumentInterfaceInput {
  readonly instrument: CollectionInstrumentId;
  readonly initializeAtStartup?: boolean;
  readonly deviceIpAddress?: string;
  readonly interfaceType?: number;
  readonly runInSimulation?: boolean;
  readonly allowStartWithoutInitializationRequirements?: boolean;
}

function startInstrumentInterface(
  briosa: BriosaClient,
  input: StartInstrumentInterfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;

await startInstrumentInterface(briosa, { instrument });
```

Interface type `0` selects the instrument's default interface. The three
Boolean options all default to `false`.

## stopInstrumentInterface

[MP command](/mp-command-catalog/commands/instrument-operations#stop-instrument-interface) · [gRPC contract](/api/grpc/instrument-operations#stop-instrument-interface)

```ts
export interface StopInstrumentInterfaceInput {
  readonly instrument: CollectionInstrumentId;
}

function stopInstrumentInterface(
  briosa: BriosaClient,
  input: StopInstrumentInterfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;

await stopInstrumentInterface(briosa, { instrument });
```

## activateDeactivateInstrumentToolbar

[MP command](/mp-command-catalog/commands/instrument-operations#activatedeactivate-instrument-toolbar) · [gRPC contract](/api/grpc/instrument-operations#activatedeactivate-instrument-toolbar)

```ts
export interface ActivateDeactivateInstrumentToolbarInput {
  readonly instrument: CollectionInstrumentId;
  readonly deactivateToolbar?: boolean;
}

function activateDeactivateInstrumentToolbar(
  briosa: BriosaClient,
  input: ActivateDeactivateInstrumentToolbarInput,
  options?: BriosaCallOptions,
): Promise<void>;

await activateDeactivateInstrumentToolbar(briosa, { instrument });
```

The default call activates the toolbar. Set `deactivateToolbar: true` to
deactivate it.

## verifyInstrumentConnection

[MP command](/mp-command-catalog/commands/instrument-operations#verify-instrument-connection) · [gRPC contract](/api/grpc/instrument-operations#verify-instrument-connection)

```ts
export interface VerifyInstrumentConnectionInput {
  readonly instrument: CollectionInstrumentId;
}

function verifyInstrumentConnection(
  briosa: BriosaClient,
  input: VerifyInstrumentConnectionInput,
  options?: BriosaCallOptions,
): Promise<boolean>;

const connected = await verifyInstrumentConnection(briosa, { instrument });
```

The result describes the selected instrument interface. It is separate from
Briosa's SA SDK connection state.

## configureAndMeasure

[MP command](/mp-command-catalog/commands/instrument-operations#configure-and-measure) · [gRPC contract](/api/grpc/instrument-operations#configure-and-measure)

```ts
export interface ConfigureAndMeasureInput {
  readonly instrument: CollectionInstrumentId;
  readonly target: PointName;
  readonly measurementMode: string;
  readonly measureImmediately?: boolean;
  readonly waitForCompletion?: boolean;
  readonly timeoutSeconds?: number;
}

function configureAndMeasure(
  briosa: BriosaClient,
  input: ConfigureAndMeasureInput,
  options?: BriosaCallOptions,
): Promise<void>;

await configureAndMeasure(briosa, { instrument, target, measurementMode });
```

SA interprets `measurementMode` for the selected instrument. A
`timeoutSeconds` value of `0.0` preserves the MP command's no-timeout setting;
it does not remove the call deadline or Briosa worker watchdog.

## measure

[MP command](/mp-command-catalog/commands/instrument-operations#measure) · [gRPC contract](/api/grpc/instrument-operations#measure)

```ts
export interface MeasureInput {
  readonly instrument: CollectionInstrumentId;
}

function measure(
  briosa: BriosaClient,
  input: MeasureInput,
  options?: BriosaCallOptions,
): Promise<void>;

await measure(briosa, { instrument });
```

SA uses its current instrument configuration. The client does not track or
validate a parallel measurement-state model.

## setXyzReferenceFrameInstrumentBaseAnchorFrame

[MP command](/mp-command-catalog/commands/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame) · [gRPC contract](/api/grpc/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame)

```ts
export interface SetXyzReferenceFrameInstrumentBaseAnchorFrameInput {
  readonly instrument: CollectionInstrumentId;
  readonly anchorFrame: CollectionObjectName;
}

function setXyzReferenceFrameInstrumentBaseAnchorFrame(
  briosa: BriosaClient,
  input: SetXyzReferenceFrameInstrumentBaseAnchorFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setXyzReferenceFrameInstrumentBaseAnchorFrame(briosa, {
  instrument,
  anchorFrame,
});
```

`anchorFrame` must identify an existing SA Frame.

## dockInstrumentInterface

[MP command](/mp-command-catalog/commands/instrument-operations#dock-instrument-interface) · [gRPC contract](/api/grpc/instrument-operations#dock-instrument-interface)

```ts
export interface DockInstrumentInterfaceInput {
  readonly instrument: CollectionInstrumentId;
  readonly dockInterface?: boolean;
}

function dockInstrumentInterface(
  briosa: BriosaClient,
  input: DockInstrumentInterfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;

await dockInstrumentInterface(briosa, { instrument, dockInterface: true });
```

The MP default is `false`. These methods use live SA and instrument state,
perform no additional preflight, and never automatically replay an operation
whose completion is unknown.

## locateInstrumentRefTieIn

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-ref-tie-in) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-ref-tie-in)

```ts
export interface LocateInstrumentRefTieInInput {
  readonly instrument: CollectionInstrumentId;
  readonly referenceGroup: CollectionObjectName;
  readonly actualsGroup: CollectionObjectName;
  readonly tolerance?: number;
  readonly autoSurvey?: boolean;
}

function locateInstrumentRefTieIn(
  briosa: BriosaClient,
  input: LocateInstrumentRefTieInInput,
  options?: BriosaCallOptions,
): Promise<void>;

await locateInstrumentRefTieIn(briosa, {
  instrument,
  referenceGroup,
  actualsGroup,
});
```

Both object identities must refer to Point Groups. SA owns the guided or
automatic measurement workflow and its intermediate state.

## locateInstrumentGroupToSurfaceQuickFit

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-group-to-surface-quick-fit) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-group-to-surface-quick-fit)

```ts
export interface LocateInstrumentGroupToSurfaceQuickFitInput {
  readonly instrument: CollectionInstrumentId;
  readonly measuredGroup: CollectionObjectName;
  readonly surfacePointsGroup: CollectionObjectName;
  readonly surfaceToFit: CollectionObjectName;
  readonly otherObjectsToTransform?: Iterable<CollectionObjectName>;
  readonly rmsTolerance?: number;
  readonly maximumAbsoluteTolerance?: number;
}

function locateInstrumentGroupToSurfaceQuickFit(
  briosa: BriosaClient,
  input: LocateInstrumentGroupToSurfaceQuickFitInput,
  options?: BriosaCallOptions,
): Promise<FitErrorResult>;

const errors = await locateInstrumentGroupToSurfaceQuickFit(briosa, {
  instrument,
  measuredGroup,
  surfacePointsGroup,
  surfaceToFit,
});
```

The first two objects must be Point Groups and `surfaceToFit` must be a
Surface. The additional-object iterable defaults empty.

## multiMeasurementInitiate

[MP command](/mp-command-catalog/commands/instrument-operations#multi-measurement-initiate) · [gRPC contract](/api/grpc/instrument-operations#multi-measurement-initiate)

```ts
export interface MultiMeasurementInitiateInput {
  readonly instruments: Iterable<CollectionInstrumentId>;
  readonly measurementMode: string;
  readonly waitForCompletion?: boolean;
}

function multiMeasurementInitiate(
  briosa: BriosaClient,
  input: MultiMeasurementInitiateInput,
  options?: BriosaCallOptions,
): Promise<void>;

await multiMeasurementInitiate(briosa, { instruments, measurementMode });
```

The instrument iterable must be non-empty. SA interprets the measurement-mode
value, and `waitForCompletion` defaults to `false`.

## multiMeasurementStop

[MP command](/mp-command-catalog/commands/instrument-operations#multi-measurement-stop) · [gRPC contract](/api/grpc/instrument-operations#multi-measurement-stop)

```ts
export interface MultiMeasurementStopInput {
  readonly instruments: Iterable<CollectionInstrumentId>;
}

function multiMeasurementStop(
  briosa: BriosaClient,
  input: MultiMeasurementStopInput,
  options?: BriosaCallOptions,
): Promise<void>;

await multiMeasurementStop(briosa, { instruments });
```

The iterable must be non-empty. The client does not require or track a matching
initiation call.

## alignLaserProjector

[MP command](/mp-command-catalog/commands/instrument-operations#align-laser-projector) · [gRPC contract](/api/grpc/instrument-operations#align-laser-projector)

```ts
export interface AlignLaserProjectorInput {
  readonly instrument: CollectionInstrumentId;
  readonly group: CollectionObjectName;
}

function alignLaserProjector(
  briosa: BriosaClient,
  input: AlignLaserProjectorInput,
  options?: BriosaCallOptions,
): Promise<void>;

await alignLaserProjector(briosa, { instrument, group });
```

`group` must identify an existing Point Group.

## locateInstrumentsUsmn

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instruments-usmn) · [gRPC contract](/api/grpc/instrument-operations#locate-instruments-usmn)

```ts
export interface LocateInstrumentsUsmnInput {
  readonly instruments: Iterable<CollectionInstrumentId>;
  readonly outputGroup: CollectionObjectName;
  readonly nominalsGroup?: CollectionObjectName;
  readonly moveInWorkingFrame?: boolean;
  readonly autoRejectOutliersAndResolve?: boolean;
  readonly showUsmnDialog?: ShowUsmnDialog;
  readonly maximumAcceptableRmsError?: number;
  readonly maximumAcceptableError?: number;
  readonly excludedGroups?: Iterable<CollectionObjectName>;
  readonly excludeSingleInstrumentPoints?: boolean;
  readonly runUncertaintyFieldAnalysis?: boolean;
  readonly analysisSamples?: number;
  readonly analysisTimeLimitMinutes?: number;
}

function locateInstrumentsUsmn(
  briosa: BriosaClient,
  input: LocateInstrumentsUsmnInput,
  options?: BriosaCallOptions,
): Promise<FitErrorResult>;

const errors = await locateInstrumentsUsmn(briosa, {
  instruments,
  outputGroup,
});
```

The instrument iterable must be non-empty. An omitted nominal group means none,
the excluded-group iterable defaults empty, and `showUsmnDialog` defaults to
`"No"`.

## createTemplatedInstrumentUsmn

[MP command](/mp-command-catalog/commands/instrument-operations#create-templated-instrument-usmn) · [gRPC contract](/api/grpc/instrument-operations#create-templated-instrument-usmn)

```ts
export interface CreateTemplatedInstrumentUsmnInput {
  readonly instrumentTemplateName: CollectionObjectName;
  readonly instrument: CollectionInstrumentId;
  readonly overallInstrumentWeight?: number;
  readonly moving?: boolean;
  readonly enableX?: boolean;
  readonly enableY?: boolean;
  readonly enableZ?: boolean;
  readonly enableRx?: boolean;
  readonly enableRy?: boolean;
  readonly enableRz?: boolean;
  readonly enableScale?: boolean;
  readonly enableComponentWeights?: boolean;
  readonly azimuthWeight?: number;
  readonly elevationWeight?: number;
  readonly distanceWeight?: number;
}

function createTemplatedInstrumentUsmn(
  briosa: BriosaClient,
  input: CreateTemplatedInstrumentUsmnInput,
  options?: BriosaCallOptions,
): Promise<void>;

await createTemplatedInstrumentUsmn(briosa, {
  instrumentTemplateName,
  instrument,
});
```

The public `overallInstrumentWeight` spelling corrects the MP argument's
`Overal Instrument Weight` typo. The server preserves that exact label in the
SDK binding. These operations use live SA state, add no workflow safeguards,
and are never automatically replayed after an unknown outcome.

## locateInstrumentBestFitGroupToGroup

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---group-to-group) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-best-fit---group-to-group)

```ts
export interface LocateInstrumentBestFitGroupToGroupInput {
  readonly referenceGroup: CollectionObjectName;
  readonly correspondingGroup: CollectionObjectName;
  readonly showInterface?: boolean;
  readonly rmsTolerance?: number;
  readonly maximumAbsoluteTolerance?: number;
  readonly allowScale?: boolean;
  readonly allowX?: boolean;
  readonly allowY?: boolean;
  readonly allowZ?: boolean;
  readonly allowRx?: boolean;
  readonly allowRy?: boolean;
  readonly allowRz?: boolean;
  readonly lockDegreesOfFreedom?: boolean;
  readonly generateEvent?: boolean;
  readonly csvReport?: FileReference;
}

function locateInstrumentBestFitGroupToGroup(
  briosa: BriosaClient,
  input: LocateInstrumentBestFitGroupToGroupInput,
  options?: BriosaCallOptions,
): Promise<InstrumentBestFitResult>;

const fit = await locateInstrumentBestFitGroupToGroup(briosa, {
  referenceGroup,
  correspondingGroup,
});
```

Both identities must be Point Groups. The interface is hidden and the CSV
report omitted by default.

## locateInstrumentBestFitNominalGeometry

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---nominal-geometry) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-best-fit---nominal-geometry)

```ts
export interface LocateInstrumentBestFitNominalGeometryInput {
  readonly instrument: CollectionInstrumentId;
  readonly geometryRelationships: Iterable<CollectionObjectName>;
  readonly showInterface?: boolean;
  readonly rmsTolerance?: number;
  readonly maximumAbsoluteTolerance?: number;
  readonly allowScale?: boolean;
  readonly allowX?: boolean;
  readonly allowY?: boolean;
  readonly allowZ?: boolean;
  readonly allowRx?: boolean;
  readonly allowRy?: boolean;
  readonly allowRz?: boolean;
  readonly lockDegreesOfFreedom?: boolean;
  readonly generateEvent?: boolean;
  readonly csvReport?: FileReference;
}

function locateInstrumentBestFitNominalGeometry(
  briosa: BriosaClient,
  input: LocateInstrumentBestFitNominalGeometryInput,
  options?: BriosaCallOptions,
): Promise<InstrumentBestFitResult>;

const fit = await locateInstrumentBestFitNominalGeometry(briosa, {
  instrument,
  geometryRelationships,
});
```

The relationship iterable must be non-empty. All other defaults and result
fields match the group-to-group operation.

## getInstrumentTransform

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-transform) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-transform)

```ts
export interface GetInstrumentTransformInput {
  readonly instrument: CollectionInstrumentId;
  readonly referenceFrame: CollectionObjectName;
}

function getInstrumentTransform(
  briosa: BriosaClient,
  input: GetInstrumentTransformInput,
  options?: BriosaCallOptions,
): Promise<Transform>;

const transform = await getInstrumentTransform(briosa, {
  instrument,
  referenceFrame,
});
```

`referenceFrame` must identify an existing SA Frame.

## setInstrumentTransform

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-transform) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-transform)

```ts
export interface SetInstrumentTransformInput {
  readonly instrument: CollectionInstrumentId;
  readonly destinationTransform: Transform;
  readonly referenceFrame: CollectionObjectName;
  readonly numberOfSteps?: number;
}

function setInstrumentTransform(
  briosa: BriosaClient,
  input: SetInstrumentTransformInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setInstrumentTransform(briosa, {
  instrument,
  destinationTransform,
  referenceFrame,
});
```

Animation steps default to `0`.

## getTrackerEdmTheodoliteUncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#get-trackeredm-theodolite-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#get-trackeredm-theodolite-uncertainties)

```ts
export interface GetTrackerEdmTheodoliteUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
}

function getTrackerEdmTheodoliteUncertainties(
  briosa: BriosaClient,
  input: GetTrackerEdmTheodoliteUncertaintiesInput,
  options?: BriosaCallOptions,
): Promise<TrackerEdmTheodoliteUncertainties>;

const uncertainties = await getTrackerEdmTheodoliteUncertainties(
  briosa,
  { instrument },
);
```

The exact-target result differs from the installed command-listing page. The
linear thresholds use current SA job units.

## setTrackerEdmTheodoliteUncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#set-trackeredm-theodolite-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#set-trackeredm-theodolite-uncertainties)

```ts
export interface SetTrackerEdmTheodoliteUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
  readonly thetaDispersionArcseconds?: number;
  readonly thetaThreshold?: number;
  readonly phiDispersionArcseconds?: number;
  readonly phiThreshold?: number;
  readonly distancePpm?: number;
  readonly distanceThreshold?: number;
}

function setTrackerEdmTheodoliteUncertainties(
  briosa: BriosaClient,
  input: SetTrackerEdmTheodoliteUncertaintiesInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setTrackerEdmTheodoliteUncertainties(briosa, { instrument });
```

Defaults are `1.0`, `0.001`, `1.0`, `0.001`, `2.5`, and `0.0003` in property
order. The server preserves the exact exported phi argument labels.

## getPcmmInstrumentXyzUncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#get-pcmm-instrument-xyz-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#get-pcmm-instrument-xyz-uncertainties)

```ts
export interface GetPcmmInstrumentXyzUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
}

function getPcmmInstrumentXyzUncertainties(
  briosa: BriosaClient,
  input: GetPcmmInstrumentXyzUncertaintiesInput,
  options?: BriosaCallOptions,
): Promise<InstrumentXyzUncertainties>;

const uncertainties = await getPcmmInstrumentXyzUncertainties(
  briosa,
  { instrument },
);
```

## setPcmmInstrumentXyzUncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#set-pcmm-instrument-xyz-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#set-pcmm-instrument-xyz-uncertainties)

```ts
export interface SetPcmmInstrumentXyzUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
  readonly xUncertainty?: number;
  readonly yUncertainty?: number;
  readonly zUncertainty?: number;
}

function setPcmmInstrumentXyzUncertainties(
  briosa: BriosaClient,
  input: SetPcmmInstrumentXyzUncertaintiesInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setPcmmInstrumentXyzUncertainties(briosa, { instrument });
```

All values default to `0.001`. The server binds `yUncertainty` to the exported
`Y Uncertainty)` label.

## getXyzInstrumentUncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#get-xyz-instrument-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#get-xyz-instrument-uncertainties)

```ts
export interface GetXyzInstrumentUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
}

function getXyzInstrumentUncertainties(
  briosa: BriosaClient,
  input: GetXyzInstrumentUncertaintiesInput,
  options?: BriosaCallOptions,
): Promise<InstrumentXyzUncertainties>;

const uncertainties = await getXyzInstrumentUncertainties(briosa, {
  instrument,
});
```

## setXyzInstrumentUncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#set-xyz-instrument-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#set-xyz-instrument-uncertainties)

```ts
export interface SetXyzInstrumentUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
  readonly xUncertainty?: number;
  readonly yUncertainty?: number;
  readonly zUncertainty?: number;
}

function setXyzInstrumentUncertainties(
  briosa: BriosaClient,
  input: SetXyzInstrumentUncertaintiesInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setXyzInstrumentUncertainties(briosa, { instrument });
```

All values default to `0.0005`. The server binds `zUncertainty` to the exported
`Z Uncertainty)` label. These operations add no preflight and are never
automatically replayed after an unknown outcome.

## guideObjectsIn6dBasedOnPointMeasurements

[MP command](/mp-command-catalog/commands/instrument-operations#guide-objects-in-6d-based-on-point-measurements) · [gRPC contract](/api/grpc/instrument-operations#guide-objects-in-6d-based-on-point-measurements)

```ts
export interface GuideObjectsIn6dBasedOnPointMeasurementsInput {
  readonly instrument: CollectionInstrumentId;
  readonly destinationGroup: CollectionObjectName;
  readonly movingReferenceGroup: CollectionObjectName;
  readonly objectsToMove: Iterable<CollectionObjectName>;
  readonly initialSurveyGroup?: CollectionObjectName;
  readonly positionalTolerance?: ToleranceVectorOptions;
  readonly rotationalTolerance?: ToleranceVectorOptions;
}

function guideObjectsIn6dBasedOnPointMeasurements(
  briosa: BriosaClient,
  input: GuideObjectsIn6dBasedOnPointMeasurementsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## moveObjectsIn6dUsingInstrumentUpdates

[MP command](/mp-command-catalog/commands/instrument-operations#move-objects-in-6d-using-instrument-updates) · [gRPC contract](/api/grpc/instrument-operations#move-objects-in-6d-using-instrument-updates)

```ts
export interface MoveObjectsIn6dUsingInstrumentUpdatesInput {
  readonly instrument: CollectionInstrumentId;
  readonly objectsToMove: Iterable<CollectionObjectName>;
  readonly measurementMode: string;
}

function moveObjectsIn6dUsingInstrumentUpdates(
  briosa: BriosaClient,
  input: MoveObjectsIn6dUsingInstrumentUpdatesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## alignTwoTargetsWithAxisWcfX

[MP command](/mp-command-catalog/commands/instrument-operations#align-two-targets-with-axis-wcf---x) · [gRPC contract](/api/grpc/instrument-operations#align-two-targets-with-axis-wcf---x)

```ts
export interface AlignTwoTargetsWithAxisWcfXInput {
  readonly instrument: CollectionInstrumentId;
  readonly firstPointOnAxis: PointName;
  readonly secondPointOnAxis: PointName;
  readonly initialMeasuredGroup: CollectionObjectName;
  readonly rotationalTolerance?: ToleranceVectorOptions;
}

function alignTwoTargetsWithAxisWcfX(
  briosa: BriosaClient,
  input: AlignTwoTargetsWithAxisWcfXInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## getInstrumentInterfaceResponseTimeout

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-interface-response-timeout) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-interface-response-timeout)

```ts
function getInstrumentInterfaceResponseTimeout(
  briosa: BriosaClient,
  instrument: CollectionInstrumentId,
  options?: BriosaCallOptions,
): Promise<number>;
```

The result is expressed in seconds.

## setInstrumentInterfaceResponseTimeout

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-interface-response-timeout) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-interface-response-timeout)

```ts
function setInstrumentInterfaceResponseTimeout(
  briosa: BriosaClient,
  instrument: CollectionInstrumentId,
  timeoutSeconds?: number,
  options?: BriosaCallOptions,
): Promise<void>;
```

`timeoutSeconds` defaults to `0.0`.

## getCurrentTrappingStatus

[MP command](/mp-command-catalog/commands/instrument-operations#get-current-trapping-status) · [gRPC contract](/api/grpc/instrument-operations#get-current-trapping-status)

```ts
function getCurrentTrappingStatus(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<CurrentTrappingStatus>;

const status = await getCurrentTrappingStatus(briosa);
```

`focusedItem` and `instrument` may be absent when trapping is inactive.

## waitForTrappingToComplete

[MP command](/mp-command-catalog/commands/instrument-operations#wait-for-trapping-to-complete) · [gRPC contract](/api/grpc/instrument-operations#wait-for-trapping-to-complete)

```ts
function waitForTrappingToComplete(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The promise may remain pending indefinitely. Cancellation does not prove the SA
wait stopped.

## jumpInstrumentToNewLocation

[MP command](/mp-command-catalog/commands/instrument-operations#jump-instrument-to-new-location) · [gRPC contract](/api/grpc/instrument-operations#jump-instrument-to-new-location)

```ts
export interface JumpInstrumentToNewLocationInput {
  readonly liveInstrument: CollectionInstrumentId;
  readonly hidePreviousInstrument?: boolean;
}

function jumpInstrumentToNewLocation(
  briosa: BriosaClient,
  input: JumpInstrumentToNewLocationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Hiding defaults to `false`.

## quickAlign

[MP command](/mp-command-catalog/commands/instrument-operations#quick-align) · [gRPC contract](/api/grpc/instrument-operations#quick-align)

```ts
export interface QuickAlignInput {
  readonly instruments: Iterable<CollectionInstrumentId>;
  readonly objects: Iterable<CollectionObjectName>;
  readonly nominalPoints?: Iterable<PointName>;
  readonly nominalPointOfViewNames?: Iterable<string>;
  readonly alignToIndividualFacesOnly?: boolean;
}

function quickAlign(
  briosa: BriosaClient,
  input: QuickAlignInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The optional view names correspond positionally to the nominal points. Briosa
leaves length validation to SA.

## alignCloudToCad

[MP command](/mp-command-catalog/commands/instrument-operations#align-cloud-to-cad) · [gRPC contract](/api/grpc/instrument-operations#align-cloud-to-cad)

```ts
export interface AlignCloudToCadInput {
  readonly cloud: CollectionObjectName;
  readonly surfaces: Iterable<CollectionObjectName>;
  readonly maximumCoarseCadMeshEdgeLength?: number;
  readonly useFineCadMesh?: boolean;
  readonly executeAlignment?: boolean;
}

function alignCloudToCad(
  briosa: BriosaClient,
  input: AlignCloudToCadInput,
  options?: BriosaCallOptions,
): Promise<CloudToCadAlignmentResult>;
```

Defaults are `0.0`, `false`, and `true`. SA clamps edge lengths below 5 mm to
5 mm. When execution is false, the returned transform is not applied. These
functions retain no Briosa-owned workflow state and are never automatically
replayed.

## getInstrumentWeatherSetting

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-weather-setting) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-weather-setting)

```ts
export interface GetInstrumentWeatherSettingInput {
  readonly instrument: CollectionInstrumentId;
}

function getInstrumentWeatherSetting(
  briosa: BriosaClient,
  input: GetInstrumentWeatherSettingInput,
  options?: BriosaCallOptions,
): Promise<InstrumentWeatherSetting>;

const weather = await getInstrumentWeatherSetting(briosa, { instrument });
```

The result uses degrees Fahrenheit, mmHg, and relative-humidity percentage and
reports whether the values were set automatically.

## setInstrumentWeatherSetting

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-weather-setting) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-weather-setting)

```ts
export interface SetInstrumentWeatherSettingInput {
  readonly instrument: CollectionInstrumentId;
  readonly temperatureFahrenheit?: number;
  readonly pressureMmHg?: number;
  readonly relativeHumidityPercent?: number;
  readonly setAutomatically?: boolean;
}

function setInstrumentWeatherSetting(
  briosa: BriosaClient,
  input: SetInstrumentWeatherSettingInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setInstrumentWeatherSetting(briosa, {
  instrument,
  temperatureFahrenheit,
  pressureMmHg,
  relativeHumidityPercent,
});
```

The numeric values default to `0.0`. When `setAutomatically` is true, SA
ignores them.

## getInstrumentPartTemperature

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-part-temperature) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-part-temperature)

```ts
export interface GetInstrumentPartTemperatureInput {
  readonly instrument: CollectionInstrumentId;
}

function getInstrumentPartTemperature(
  briosa: BriosaClient,
  input: GetInstrumentPartTemperatureInput,
  options?: BriosaCallOptions,
): Promise<number>;

const partTemperatureFahrenheit = await getInstrumentPartTemperature(briosa, {
  instrument,
});
```

## computeCteScaleFactor

[MP command](/mp-command-catalog/commands/instrument-operations#compute-cte-scale-factor) · [gRPC contract](/api/grpc/instrument-operations#compute-cte-scale-factor)

```ts
export interface ComputeCteScaleFactorInput {
  readonly materialCtePerDegreeFahrenheit?: number;
  readonly initialTemperatureFahrenheit?: number;
  readonly finalTemperatureFahrenheit?: number;
}

function computeCteScaleFactor(
  briosa: BriosaClient,
  input?: ComputeCteScaleFactorInput,
  options?: BriosaCallOptions,
): Promise<number>;

const scaleFactor = await computeCteScaleFactor(briosa, {
  materialCtePerDegreeFahrenheit,
  initialTemperatureFahrenheit,
  finalTemperatureFahrenheit,
});
```

All inputs default to `0.0`. This function intentionally retains SA's familiar
Fahrenheit-based MP operation.

## setMultiplyInstrumentScaleFactor

[MP command](/mp-command-catalog/commands/instrument-operations#set-multiply-instrument-scale-factor-caution) · [gRPC contract](/api/grpc/instrument-operations#set-multiply-instrument-scale-factor-caution)

```ts
export interface SetMultiplyInstrumentScaleFactorInput {
  readonly instrument: CollectionInstrumentId;
  readonly scaleFactor?: number;
}

function setMultiplyInstrumentScaleFactor(
  briosa: BriosaClient,
  input: SetMultiplyInstrumentScaleFactorInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setMultiplyInstrumentScaleFactor(briosa, { instrument, scaleFactor });
```

:::warning

This multiplies the current instrument scale; it does not replace it. The MP
default is `0.0`, and Briosa adds no confirmation or range check.

:::

## setAbsoluteInstrumentScaleFactor

[MP command](/mp-command-catalog/commands/instrument-operations#set-absolute-instrument-scale-factor-caution) · [gRPC contract](/api/grpc/instrument-operations#set-absolute-instrument-scale-factor-caution)

```ts
export interface SetAbsoluteInstrumentScaleFactorInput {
  readonly instrument: CollectionInstrumentId;
  readonly scaleFactor?: number;
}

function setAbsoluteInstrumentScaleFactor(
  briosa: BriosaClient,
  input: SetAbsoluteInstrumentScaleFactorInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setAbsoluteInstrumentScaleFactor(briosa, { instrument, scaleFactor });
```

:::warning

This replaces the current scale; it does not multiply it. The MP default is
`0.0`, and Briosa adds no safeguard.

:::

## getInstrumentScaleFactor

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-scale-factor) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-scale-factor)

```ts
export interface GetInstrumentScaleFactorInput {
  readonly instrument: CollectionInstrumentId;
}

function getInstrumentScaleFactor(
  briosa: BriosaClient,
  input: GetInstrumentScaleFactorInput,
  options?: BriosaCallOptions,
): Promise<number>;

const scaleFactor = await getInstrumentScaleFactor(briosa, { instrument });
```

## transformInstrumentFrameToFrame

[MP command](/mp-command-catalog/commands/instrument-operations#transform-instrument---frame-to-frame) · [gRPC contract](/api/grpc/instrument-operations#transform-instrument---frame-to-frame)

```ts
export interface TransformInstrumentFrameToFrameInput {
  readonly instrument: CollectionInstrumentId;
  readonly initialFrame: CollectionObjectName;
  readonly destinationFrame: CollectionObjectName;
  readonly numberOfSteps?: number;
}

function transformInstrumentFrameToFrame(
  briosa: BriosaClient,
  input: TransformInstrumentFrameToFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;

await transformInstrumentFrameToFrame(briosa, {
  instrument,
  initialFrame,
  destinationFrame,
});
```

Both object identities must be existing SA Frames. Animation steps default to
`0`.

## transformInstrumentByDelta

[MP command](/mp-command-catalog/commands/instrument-operations#transform-instrument-by-delta) · [gRPC contract](/api/grpc/instrument-operations#transform-instrument-by-delta)

```ts
export interface TransformInstrumentByDeltaInput {
  readonly instrument: CollectionInstrumentId;
  readonly deltaTransform: WorldTransform;
  readonly applyScaleToInstrument?: boolean;
}

function transformInstrumentByDelta(
  briosa: BriosaClient,
  input: TransformInstrumentByDeltaInput,
  options?: BriosaCallOptions,
): Promise<void>;

await transformInstrumentByDelta(briosa, { instrument, deltaTransform });
```

## transformMultipleInstrumentsByDelta

[MP command](/mp-command-catalog/commands/instrument-operations#transform-multiple-instruments-by-delta) · [gRPC contract](/api/grpc/instrument-operations#transform-multiple-instruments-by-delta)

```ts
export interface TransformMultipleInstrumentsByDeltaInput {
  readonly instruments: Iterable<CollectionInstrumentId>;
  readonly deltaTransform: WorldTransform;
  readonly applyScaleToInstruments?: boolean;
}

function transformMultipleInstrumentsByDelta(
  briosa: BriosaClient,
  input: TransformMultipleInstrumentsByDeltaInput,
  options?: BriosaCallOptions,
): Promise<void>;

await transformMultipleInstrumentsByDelta(briosa, {
  instruments,
  deltaTransform,
});
```

The instrument iterable must be non-empty. Both delta methods default to not
applying scale. Briosa adds no transaction or rollback and never automatically
replays an unknown outcome.

## instrumentOperationalCheck

[MP command](/mp-command-catalog/commands/instrument-operations#instrument-operational-check) · [gRPC contract](/api/grpc/instrument-operations#instrument-operational-check)

```ts
export interface InstrumentOperationalCheckInput {
  readonly instrument: CollectionInstrumentId;
  readonly checkType: string;
}

function instrumentOperationalCheck(
  briosa: BriosaClient,
  input: InstrumentOperationalCheckInput,
  options?: BriosaCallOptions,
): Promise<void>;

await instrumentOperationalCheck(briosa, { instrument, checkType });
```

`checkType` is required and passed to SA as an opaque,
instrument-interface-specific command string.

## getNumberOfObservationsOnTarget

[MP command](/mp-command-catalog/commands/instrument-operations#get-number-of-observations-on-target) · [gRPC contract](/api/grpc/instrument-operations#get-number-of-observations-on-target)

```ts
export interface GetNumberOfObservationsOnTargetInput {
  readonly point: PointName;
}

function getNumberOfObservationsOnTarget(
  briosa: BriosaClient,
  input: GetNumberOfObservationsOnTargetInput,
  options?: BriosaCallOptions,
): Promise<number>;

const observationCount = await getNumberOfObservationsOnTarget(briosa, {
  point,
});
```

## getInstrumentsWithObservationsOnTarget

[MP command](/mp-command-catalog/commands/instrument-operations#get-instruments-with-observations-on-target) · [gRPC contract](/api/grpc/instrument-operations#get-instruments-with-observations-on-target)

```ts
export interface GetInstrumentsWithObservationsOnTargetInput {
  readonly point: PointName;
}

function getInstrumentsWithObservationsOnTarget(
  briosa: BriosaClient,
  input: GetInstrumentsWithObservationsOnTargetInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionInstrumentId[]>;

const instruments = await getInstrumentsWithObservationsOnTarget(briosa, {
  point,
});
```

The result preserves SA's order.

## getTargetsMeasuredByInstrument

[MP command](/mp-command-catalog/commands/instrument-operations#get-targets-measured-by-instrument) · [gRPC contract](/api/grpc/instrument-operations#get-targets-measured-by-instrument)

```ts
export interface GetTargetsMeasuredByInstrumentInput {
  readonly instrument: CollectionInstrumentId;
}

function getTargetsMeasuredByInstrument(
  briosa: BriosaClient,
  input: GetTargetsMeasuredByInstrumentInput,
  options?: BriosaCallOptions,
): Promise<readonly PointName[]>;

const targets = await getTargetsMeasuredByInstrument(briosa, { instrument });
```

## setObservationStatus

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-status) · [gRPC contract](/api/grpc/instrument-operations#set-observation-status)

```ts
export interface SetObservationStatusInput {
  readonly point: PointName;
  readonly observationIndex?: number;
  readonly active?: boolean;
}

function setObservationStatus(
  briosa: BriosaClient,
  input: SetObservationStatusInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setObservationStatus(briosa, {
  point,
  observationIndex,
  active: true,
});
```

Observation indexes are zero-based. The defaults are `0` and `false`.

## getObservationInfo

[MP command](/mp-command-catalog/commands/instrument-operations#get-observation-info) · [gRPC contract](/api/grpc/instrument-operations#get-observation-info)

```ts
export interface GetObservationInfoInput {
  readonly point: PointName;
  readonly observationIndex?: number;
}

function getObservationInfo(
  briosa: BriosaClient,
  input: GetObservationInfoInput,
  options?: BriosaCallOptions,
): Promise<ObservationInfo>;

const observation = await getObservationInfo(briosa, {
  point,
  observationIndex,
});
```

`sphericalValues` contains the raw MP vector in distance, azimuth, elevation
order. Briosa does not normalize instrument-specific angular direction or
parse `timestamp` and `infoData`. SA uses `0` for unavailable RMS error and
`-1` for unavailable temperature, pressure, or humidity.

## fabricateObservations

[MP command](/mp-command-catalog/commands/instrument-operations#fabricate-observations) · [gRPC contract](/api/grpc/instrument-operations#fabricate-observations)

```ts
export interface FabricateObservationsInput {
  readonly instrument: CollectionInstrumentId;
  readonly pointGroup: CollectionObjectName;
  readonly introduceInstrumentError?: boolean;
  readonly limitDistance?: boolean;
  readonly minimumDistance?: number;
  readonly maximumDistance?: number;
}

function fabricateObservations(
  briosa: BriosaClient,
  input: FabricateObservationsInput,
  options?: BriosaCallOptions,
): Promise<void>;

await fabricateObservations(briosa, { instrument, pointGroup });
```

Defaults are `false`, `false`, `0.0`, and `1000000.0`. SA ignores the distance
values unless `limitDistance` is true. Simulated instrument error is available
only for applicable polar instruments. Briosa adds no preflight, transaction,
or rollback.

## getObscuredPointsFromInstrument

[MP command](/mp-command-catalog/commands/instrument-operations#get-obscured-points-from-instrument) · [gRPC contract](/api/grpc/instrument-operations#get-obscured-points-from-instrument)

```ts
export interface GetObscuredPointsFromInstrumentInput {
  readonly instrument: CollectionInstrumentId;
  readonly candidatePoints: Iterable<PointName>;
  readonly showObscuredShots?: boolean;
}

function getObscuredPointsFromInstrument(
  briosa: BriosaClient,
  input: GetObscuredPointsFromInstrumentInput,
  options?: BriosaCallOptions,
): Promise<readonly PointName[]>;

const obscuredPoints = await getObscuredPointsFromInstrument(briosa, {
  instrument,
  candidatePoints,
});
```

The result preserves SA's order. Shot-line display defaults to disabled.

## getInstrumentTargetsAndModeProfiles

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-targets-and-modeprofiles) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-targets-and-modeprofiles)

```ts
export interface GetInstrumentTargetsAndModeProfilesInput {
  readonly instrument: CollectionInstrumentId;
}

function getInstrumentTargetsAndModeProfiles(
  briosa: BriosaClient,
  input: GetInstrumentTargetsAndModeProfilesInput,
  options?: BriosaCallOptions,
): Promise<InstrumentTargetsAndModeProfiles>;

const available = await getInstrumentTargetsAndModeProfiles(briosa, {
  instrument,
});
```

`modeProfiles` and `targetNames` are independent ordered lists. The server uses
the exact SA 2026.1 `Instrument to get` binding and does not zip them.

## setInstrumentMeasurementModeProfile

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-measurement-modeprofile) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-measurement-modeprofile)

```ts
export interface SetInstrumentMeasurementModeProfileInput {
  readonly instrument: CollectionInstrumentId;
  readonly modeProfile: string;
}

function setInstrumentMeasurementModeProfile(
  briosa: BriosaClient,
  input: SetInstrumentMeasurementModeProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setInstrumentMeasurementModeProfile(briosa, {
  instrument,
  modeProfile,
});
```

`modeProfile` is required and passed directly to SA. These functions do not
create Briosa-owned workflow state and are never automatically replayed after
an unknown outcome.

## setInstrumentGroupAndTarget

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-group-and-target) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-group-and-target)

```ts
export interface SetInstrumentGroupAndTargetInput {
  readonly instrument: CollectionInstrumentId;
  readonly point: PointName;
}

function setInstrumentGroupAndTarget(
  briosa: BriosaClient,
  input: SetInstrumentGroupAndTargetInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setInstrumentGroupAndTarget(briosa, { instrument, point });
```

This changes live instrument-interface naming state. Point-cloud instruments
may ignore the target portion; Briosa does not retain the setting.

## setInstrumentTargeting

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-targeting) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-targeting)

```ts
export interface SetInstrumentTargetingInput {
  readonly instrument: CollectionInstrumentId;
  readonly targetingName: string;
}

function setInstrumentTargeting(
  briosa: BriosaClient,
  input: SetInstrumentTargetingInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setInstrumentTargeting(briosa, { instrument, targetingName });
```

## getInstrumentMeasurementModeProfile

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-measurement-modeprofile) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-measurement-modeprofile)

```ts
export interface GetInstrumentMeasurementModeProfileInput {
  readonly instrument: CollectionInstrumentId;
}

function getInstrumentMeasurementModeProfile(
  briosa: BriosaClient,
  input: GetInstrumentMeasurementModeProfileInput,
  options?: BriosaCallOptions,
): Promise<string>;

const modeProfile = await getInstrumentMeasurementModeProfile(briosa, {
  instrument,
});
```

This returns the active value, not the available lists returned by
`getInstrumentTargetsAndModeProfiles`.

## getInstrumentGroupAndTarget

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-group-and-target) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-group-and-target)

```ts
export interface GetInstrumentGroupAndTargetInput {
  readonly instrument: CollectionInstrumentId;
}

function getInstrumentGroupAndTarget(
  briosa: BriosaClient,
  input: GetInstrumentGroupAndTargetInput,
  options?: BriosaCallOptions,
): Promise<PointName>;

const point = await getInstrumentGroupAndTarget(briosa, { instrument });
```

## getInstrumentTargeting

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-targeting) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-targeting)

```ts
export interface GetInstrumentTargetingInput {
  readonly instrument: CollectionInstrumentId;
}

function getInstrumentTargeting(
  briosa: BriosaClient,
  input: GetInstrumentTargetingInput,
  options?: BriosaCallOptions,
): Promise<string>;

const targetingName = await getInstrumentTargeting(briosa, { instrument });
```

## setTargetComputationOptions

[MP command](/mp-command-catalog/commands/instrument-operations#set-target-computation-options) · [gRPC contract](/api/grpc/instrument-operations#set-target-computation-options)

```ts
export interface SetTargetComputationOptionsInput {
  readonly computationMethod?: TargetComputationMethod;
  readonly ignoreDistanceMeasurements?: boolean;
}

function setTargetComputationOptions(
  briosa: BriosaClient,
  input?: SetTargetComputationOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setTargetComputationOptions(briosa);
```

The defaults are `"Use most recent shot from each face"` and `false`. This
changes application-global SA state; Briosa does not cache, restore, lease, or
otherwise manage it.

## setObservationMirrorCubeShotFace

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-mirror-cube-shot-face) · [gRPC contract](/api/grpc/instrument-operations#set-observation-mirror-cube-shot-face)

```ts
export interface SetObservationMirrorCubeShotFaceInput {
  readonly point: PointName;
  readonly observationIndex?: number;
  readonly isMirrorCubeShot?: boolean;
  readonly mirrorCubeShotFace?: number;
}

function setObservationMirrorCubeShotFace(
  briosa: BriosaClient,
  input: SetObservationMirrorCubeShotFaceInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setObservationMirrorCubeShotFace(briosa, {
  point,
  observationIndex,
  isMirrorCubeShot: true,
  mirrorCubeShotFace: 1,
});
```

Defaults are `0`, `false`, and `1`. SA documents faces 1 through 6; Briosa adds
no range check.

## setObservationCollimationShotOptions

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-collimation-shot-options) · [gRPC contract](/api/grpc/instrument-operations#set-observation-collimation-shot-options)

```ts
export interface SetObservationCollimationShotOptionsInput {
  readonly point: PointName;
  readonly observationIndex?: number;
  readonly isCollimationShot?: boolean;
  readonly targetedInstrument?: CollectionInstrumentId;
}

function setObservationCollimationShotOptions(
  briosa: BriosaClient,
  input: SetObservationCollimationShotOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;

await setObservationCollimationShotOptions(briosa, {
  point,
  observationIndex,
  isCollimationShot: true,
  targetedInstrument,
});
```

The target instrument may be omitted for a normal shot. The server preserves
the exact malformed SDK argument label internally.

## collimation

[MP command](/mp-command-catalog/commands/instrument-operations#collimation) · [gRPC contract](/api/grpc/instrument-operations#collimation)

```ts
export interface CollimationInput {
  readonly stationaryInstrument: CollectionInstrumentId;
  readonly movingInstrument: CollectionInstrumentId;
  readonly collimationPoint: PointName;
  readonly zeroMovingInstrument?: boolean;
  readonly tiltMode?: CollimationTiltMode;
  readonly baselineMethod?: CollimationBaselineMethod;
  readonly baselineDistance?: number;
  readonly scalePoint1?: PointName;
  readonly scalePoint2?: PointName;
  readonly notMeasuredByMovingInstrument?: PointName;
  readonly asMeasuredByMovingInstrument?: PointName;
}

function collimation(
  briosa: BriosaClient,
  input: CollimationInput,
  options?: BriosaCallOptions,
): Promise<void>;

await collimation(briosa, {
  stationaryInstrument,
  movingInstrument,
  collimationPoint,
});
```

Defaults are `false`, `"Full Collimation"`, `"Determined By Value"`, and
`0.0`. The optional points apply according to `baselineMethod`; Briosa passes
omitted values to SA as empty MP identities and adds no preflight validation.

## getInstrumentTargetStatus

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-target-status) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-target-status)

```ts
export interface GetInstrumentTargetStatusInput {
  readonly instrument: CollectionInstrumentId;
}

function getInstrumentTargetStatus(
  briosa: BriosaClient,
  input: GetInstrumentTargetStatusInput,
  options?: BriosaCallOptions,
): Promise<InstrumentTargetStatus>;

const status = await getInstrumentTargetStatus(briosa, { instrument });
```

SA documents this function as laser-tracker-only. These functions remain
stateless from Briosa's perspective and are never automatically replayed after
an unknown outcome.

## makeSurfaceFaceListFromPointProximity

[MP command](/mp-command-catalog/commands/instrument-operations#make-surface-face-list-from-point-proximity) · [gRPC contract](/api/grpc/instrument-operations#make-surface-face-list-from-point-proximity)

```ts
function makeSurfaceFaceListFromPointProximity(
  briosa: BriosaClient,
  measuredPoints: readonly PointName[],
  options?: BriosaCallOptions,
): Promise<SurfaceFaceList>;

const faces = await makeSurfaceFaceListFromPointProximity(
  briosa,
  measuredPoints,
);
```

The returned value is opaque and can be passed to other surface-face methods.

## scanWithinPerimeter

[MP command](/mp-command-catalog/commands/instrument-operations#scan-within-perimeter) · [gRPC contract](/api/grpc/instrument-operations#scan-within-perimeter)

```ts
export interface ScanWithinPerimeterInput {
  readonly instrument: CollectionInstrumentId;
  readonly scanPerimeters: readonly CollectionObjectName[];
  readonly exclusionPerimeters: readonly CollectionObjectName[];
  readonly parameterSetName: string;
  readonly pointGroup: CollectionObjectName;
  readonly waitForCompletion?: boolean;
}

function scanWithinPerimeter(
  briosa: BriosaClient,
  input: ScanWithinPerimeterInput,
  options?: BriosaCallOptions,
): Promise<void>;

await scanWithinPerimeter(briosa, {
  instrument,
  scanPerimeters,
  exclusionPerimeters,
  parameterSetName,
  pointGroup,
});
```

`waitForCompletion` defaults to `true`. The exclusion list is part of the exact
SA 2026.1 contract.

## editScanPerimeterProfile

[MP command](/mp-command-catalog/commands/instrument-operations#edit-scan-perimeter-profile) · [gRPC contract](/api/grpc/instrument-operations#edit-scan-perimeter-profile)

```ts
export interface EditScanPerimeterProfileInput {
  readonly instrument: CollectionInstrumentId;
  readonly scanPerimeters: readonly CollectionObjectName[];
  readonly exclusionPerimeters: readonly CollectionObjectName[];
  readonly parameterSetName: string;
  readonly profileName: string;
  readonly clearProfile?: boolean;
  readonly createNewProfile?: boolean;
}

function editScanPerimeterProfile(
  briosa: BriosaClient,
  input: EditScanPerimeterProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`clearProfile` defaults to `true`; `createNewProfile` defaults to `false`.

## getEstimatedScanTime

[MP command](/mp-command-catalog/commands/instrument-operations#get-estimated-scan-time) · [gRPC contract](/api/grpc/instrument-operations#get-estimated-scan-time)

```ts
function getEstimatedScanTime(
  briosa: BriosaClient,
  instrument: CollectionInstrumentId,
  profileName: string,
  options?: BriosaCallOptions,
): Promise<number>;

const estimate = await getEstimatedScanTime(
  briosa,
  instrument,
  profileName,
);
```

This is SA's raw value; the available documentation does not identify its unit.

## constructPerimetersFromSurfaceFaceList

[MP command](/mp-command-catalog/commands/instrument-operations#construct-perimeters-from-surface-face-list) · [gRPC contract](/api/grpc/instrument-operations#construct-perimeters-from-surface-face-list)

```ts
function constructPerimetersFromSurfaceFaceList(
  briosa: BriosaClient,
  surfaceFaces: SurfaceFaceList,
  options?: BriosaCallOptions,
): Promise<PerimeterLists>;

const perimeters = await constructPerimetersFromSurfaceFaceList(briosa, faces);
```

The client passes `surfaceFaces.value` and returns the scan and exclusion lists.

## scanCadFaces

[MP command](/mp-command-catalog/commands/instrument-operations#scan-cad-faces) · [gRPC contract](/api/grpc/instrument-operations#scan-cad-faces)

```ts
export interface ScanCadFacesInput {
  readonly instrument: CollectionInstrumentId;
  readonly surfaceFaces: SurfaceFaceList;
  readonly parameterSetName: string;
  readonly enableExclusions?: boolean;
  readonly waitForCompletion?: boolean;
}

function scanCadFaces(
  briosa: BriosaClient,
  input: ScanCadFacesInput,
  options?: BriosaCallOptions,
): Promise<void>;

await scanCadFaces(briosa, { instrument, surfaceFaces: faces, parameterSetName });
```

Both flags default to `true`.

## edgeScanMeasurement

[MP command](/mp-command-catalog/commands/instrument-operations#edge-scan-measurement) · [gRPC contract](/api/grpc/instrument-operations#edge-scan-measurement)

```ts
export interface EdgeScanMeasurementInput {
  readonly instrument: CollectionInstrumentId;
  readonly pointNearEdge: PointName;
  readonly edgeSearchDirectionPoint: PointName;
  readonly parameterSetName: string;
  readonly pointGroup: CollectionObjectName;
  readonly targetName: string;
}

function edgeScanMeasurement(
  briosa: BriosaClient,
  input: EdgeScanMeasurementInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## trackTapeMeasurement

[MP command](/mp-command-catalog/commands/instrument-operations#track-tape-measurement) · [gRPC contract](/api/grpc/instrument-operations#track-tape-measurement)

```ts
export interface TrackTapeMeasurementInput {
  readonly instrument: CollectionInstrumentId;
  readonly pointOnTape: PointName;
  readonly pointOnPart: PointName;
  readonly directionPoint: PointName;
  readonly terminationPoint: PointName;
  readonly parameterSetName: string;
  readonly pointGroup: CollectionObjectName;
  readonly initialTargetName: string;
}

function trackTapeMeasurement(
  briosa: BriosaClient,
  input: TrackTapeMeasurementInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## autoMeasurePoints

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-points) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-points)

```ts
export interface AutoMeasurePointsInput {
  readonly instrument: CollectionInstrumentId;
  readonly referenceGroup: CollectionObjectName;
  readonly actualsGroup: CollectionObjectName;
  readonly forceExistingGroup?: boolean;
  readonly showCompleteDialog?: boolean;
  readonly waitForCompletion?: boolean;
  readonly autoStart?: boolean;
}

function autoMeasurePoints(
  briosa: BriosaClient,
  input: AutoMeasurePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;

await autoMeasurePoints(briosa, { instrument, referenceGroup, actualsGroup });
```

The defaults are `false`, `false`, `true`, and `false`. Setting
`showCompleteDialog` to `false` selects SA's abbreviated interface. Callers can
separately configure SA's global interactivity level to suppress it.

## autoMeasureVectors

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-vectors) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-vectors)

```ts
export interface AutoMeasureVectorsInput {
  readonly instrument: CollectionInstrumentId;
  readonly vectorGroup: CollectionObjectName;
  readonly actualsGroup: CollectionObjectName;
  readonly projectPointToVector?: boolean;
  readonly angleTolerance?: number;
  readonly highTolerance?: number;
  readonly lowTolerance?: number;
}

function autoMeasureVectors(
  briosa: BriosaClient,
  input: AutoMeasureVectorsInput,
  options?: BriosaCallOptions,
): Promise<void>;

await autoMeasureVectors(briosa, { instrument, vectorGroup, actualsGroup });
```

The flag defaults to `false`, all tolerances default to `0.0`, and Briosa adds
no workflow state, replay, or preflight behavior.

## autoMeasureSurfaceVectorIntersections

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-surface-vector-intersections) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-surface-vector-intersections)

```ts
export interface AutoMeasureSurfaceVectorIntersectionsInput {
  readonly instrument: CollectionInstrumentId;
  readonly vectorGroup: CollectionObjectName;
  readonly resultantGroup: CollectionObjectName;
  readonly waitForComplete?: boolean;
}

function autoMeasureSurfaceVectorIntersections(
  briosa: BriosaClient,
  input: AutoMeasureSurfaceVectorIntersectionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Waiting defaults to `true`.

## autoMeasureSpecifiedGeometry

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-specified-geometry) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-specified-geometry)

```ts
export interface AutoMeasureSpecifiedGeometryInput {
  readonly instrument: CollectionInstrumentId;
  readonly geometry: CollectionObjectName;
  readonly modeProfile: string;
  readonly waitForComplete?: boolean;
}

function autoMeasureSpecifiedGeometry(
  briosa: BriosaClient,
  input: AutoMeasureSpecifiedGeometryInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Waiting defaults to `false`.

## autoMeasureBatchOfFeatures

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-batch-of-features) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-batch-of-features)

```ts
export interface AutoMeasureBatchOfFeaturesInput {
  readonly instrument: CollectionInstrumentId;
  readonly features: Iterable<CollectionItemName>;
  readonly waitForComplete?: boolean;
}

function autoMeasureBatchOfFeatures(
  briosa: BriosaClient,
  input: AutoMeasureBatchOfFeaturesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`features` contains GR-Feature relationship identities; waiting defaults to
`true`.

## autoCorrespondClosestPoint

[MP command](/mp-command-catalog/commands/instrument-operations#auto-correspond-closest-point) · [gRPC contract](/api/grpc/instrument-operations#auto-correspond-closest-point)

```ts
export interface AutoCorrespondClosestPointInput {
  readonly instrument: CollectionInstrumentId;
  readonly referenceGroup: CollectionObjectName;
  readonly actualsGroup: CollectionObjectName;
  readonly waitForCompletion?: boolean;
}

function autoCorrespondClosestPoint(
  briosa: BriosaClient,
  input: AutoCorrespondClosestPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

When waiting is false, SA may continue measuring after the promise resolves.

## closeAutoCorrespondClosestPointDialog

[MP command](/mp-command-catalog/commands/instrument-operations#close-auto-correspond-closest-point-dialog) · [gRPC contract](/api/grpc/instrument-operations#close-auto-correspond-closest-point-dialog)

```ts
function closeAutoCorrespondClosestPointDialog(
  briosa: BriosaClient,
  instrument: CollectionInstrumentId,
  options?: BriosaCallOptions,
): Promise<void>;

await closeAutoCorrespondClosestPointDialog(briosa, instrument);
```

The caller does not need to have started the running workflow.

## autoCorrespondWithProximityTrigger

[MP command](/mp-command-catalog/commands/instrument-operations#auto-correspond-with-proximity-trigger) · [gRPC contract](/api/grpc/instrument-operations#auto-correspond-with-proximity-trigger)

```ts
export interface AutoCorrespondWithProximityTriggerInput {
  readonly instrument: CollectionInstrumentId;
  readonly nominalGroup: CollectionObjectName;
  readonly resultsGroup: CollectionObjectName;
  readonly pointDistanceThreshold?: number;
  readonly vectorAxisThreshold?: number;
  readonly projectResultsToNominalVector?: boolean;
  readonly warblerRampStartDistance?: number;
  readonly showWatchWindow?: boolean;
  readonly deviationVectorGroupName?: string;
  readonly makeUnmeasuredGroup?: boolean;
  readonly measureEachPointOnlyOnce?: boolean;
}

function autoCorrespondWithProximityTrigger(
  briosa: BriosaClient,
  input: AutoCorrespondWithProximityTriggerInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The nominal group may identify a Point Group or Vector Group. Defaults match
the MP command exactly.

## constructMirrorFromPlane

[MP command](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-plane) · [gRPC contract](/api/grpc/instrument-operations#construct-mirror-from-plane)

```ts
export interface ConstructMirrorFromPlaneInput {
  readonly instrument: CollectionInstrumentId;
  readonly mirrorName: string;
  readonly plane: CollectionObjectName;
}

function constructMirrorFromPlane(
  briosa: BriosaClient,
  input: ConstructMirrorFromPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## constructMirrorFromTwoPoints

[MP command](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-two-points) · [gRPC contract](/api/grpc/instrument-operations#construct-mirror-from-two-points)

```ts
export interface ConstructMirrorFromTwoPointsInput {
  readonly instrument: CollectionInstrumentId;
  readonly mirrorName: string;
  readonly pointMeasuredDirectly: PointName;
  readonly pointMeasuredThroughMirror: PointName;
  readonly sendMirrorToInstrument?: boolean;
}

function constructMirrorFromTwoPoints(
  briosa: BriosaClient,
  input: ConstructMirrorFromTwoPointsInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

Sending the mirror defaults to `true`.

## driftCheck

[MP command](/mp-command-catalog/commands/instrument-operations#drift-check) · [gRPC contract](/api/grpc/instrument-operations#drift-check)

```ts
export interface DriftCheckInput {
  readonly instrument: CollectionInstrumentId;
  readonly referenceGroup: CollectionObjectName;
  readonly actualsGroup: CollectionObjectName;
  readonly tolerance?: number;
  readonly minimumPointCount?: number;
  readonly useClosestReferencePoint?: boolean;
}

function driftCheck(
  briosa: BriosaClient,
  input: DriftCheckInput,
  options?: BriosaCallOptions,
): Promise<DriftCheckResult>;

const result = await driftCheck(briosa, {
  instrument,
  referenceGroup,
  actualsGroup,
});
```

Defaults are `0.0`, `0`, and `true`. SA can report partial success for
tolerance violations or a new station. Silent mode does not suppress the Drift
Check dialog.

## measureNominalFeature

[MP command](/mp-command-catalog/commands/instrument-operations#measure-nominal-feature) · [gRPC contract](/api/grpc/instrument-operations#measure-nominal-feature)

```ts
export interface MeasureNominalFeatureInput {
  readonly instrument: CollectionInstrumentId;
  readonly feature: CollectionObjectName;
  readonly resultingPoint: PointName;
}

function measureNominalFeature(
  briosa: BriosaClient,
  input: MeasureNominalFeatureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## startGdtInspectionDesign

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-design) · [gRPC contract](/api/grpc/instrument-operations#start-gdt-inspection-design)

```ts
export interface StartGdtInspectionDesignInput {
  readonly collection: CollectionName;
  readonly filter?: InspectionFilter;
}

function startGdtInspectionDesign(
  briosa: BriosaClient,
  input: StartGdtInspectionDesignInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The filter defaults to `"ALL"`; the other values are `"CHECKS"` and
`"DATUMS"`.

## startGdtInspectionRehearse

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-rehearse) · [gRPC contract](/api/grpc/instrument-operations#start-gdt-inspection-rehearse)

```ts
export interface StartGdtInspectionRehearseInput {
  readonly collection: CollectionName;
  readonly filter?: InspectionFilter;
}

function startGdtInspectionRehearse(
  briosa: BriosaClient,
  input: StartGdtInspectionRehearseInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## startGdtInspection

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection) · [gRPC contract](/api/grpc/instrument-operations#start-gdt-inspection)

```ts
export interface StartGdtInspectionInput {
  readonly instrument: CollectionInstrumentId;
  readonly collection: CollectionName;
  readonly filter?: InspectionFilter;
}

function startGdtInspection(
  briosa: BriosaClient,
  input: StartGdtInspectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## getInspectionVerificationMode

[MP command](/mp-command-catalog/commands/instrument-operations#get-inspection-verification-mode) · [gRPC contract](/api/grpc/instrument-operations#get-inspection-verification-mode)

```ts
function getInspectionVerificationMode(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

## setInspectionVerificationMode

[MP command](/mp-command-catalog/commands/instrument-operations#set-inspection-verification-mode) · [gRPC contract](/api/grpc/instrument-operations#set-inspection-verification-mode)

```ts
export interface SetInspectionVerificationModeInput {
  readonly verificationEnabled?: boolean;
}

function setInspectionVerificationMode(
  briosa: BriosaClient,
  input?: SetInspectionVerificationModeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The flag defaults to `false`. This modifies application-global SA state;
Briosa does not restore it.

## setRemeasureFailedChecksOnly

[MP command](/mp-command-catalog/commands/instrument-operations#set-remeasure-failed-checks-only) · [gRPC contract](/api/grpc/instrument-operations#set-remeasure-failed-checks-only)

```ts
export interface SetRemeasureFailedChecksOnlyInput {
  readonly collection: CollectionName;
}

function setRemeasureFailedChecksOnly(
  briosa: BriosaClient,
  input: SetRemeasureFailedChecksOnlyInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

This clears failed-check points, locks passing checks, and starts trapping. It
adds no confirmation or rollback.

## associateObjectsWithInstrument

[MP command](/mp-command-catalog/commands/instrument-operations#associate-objects-with-instrument) · [gRPC contract](/api/grpc/instrument-operations#associate-objects-with-instrument)

```ts
export interface AssociateObjectsWithInstrumentInput {
  readonly instrument: CollectionInstrumentId;
  readonly objects: readonly CollectionObjectName[];
}

function associateObjectsWithInstrument(
  briosa: BriosaClient,
  input: AssociateObjectsWithInstrumentInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## disassociateObjectsFromInstrument

[MP command](/mp-command-catalog/commands/instrument-operations#disassociate-objects-from-instrument) · [gRPC contract](/api/grpc/instrument-operations#disassociate-objects-from-instrument)

```ts
export interface DisassociateObjectsFromInstrumentInput {
  readonly objects: readonly CollectionObjectName[];
}

function disassociateObjectsFromInstrument(
  briosa: BriosaClient,
  input: DisassociateObjectsFromInstrumentInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The exact 2026.1 binding intentionally has no instrument field.

## makeCollectionObjectNameRefListFromObjectsAssociatedWithInstruments

[MP command](/mp-command-catalog/commands/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments) · [gRPC contract](/api/grpc/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments)

```ts
export interface MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsInput {
  readonly instruments: readonly CollectionInstrumentId[];
}

function makeCollectionObjectNameRefListFromObjectsAssociatedWithInstruments(
  briosa: BriosaClient,
  input: MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

This queries live SA association state and preserves the returned order.

## combinePointGroups

[MP command](/mp-command-catalog/commands/instrument-operations#combine-point-groups) · [gRPC contract](/api/grpc/instrument-operations#combine-point-groups)

```ts
export interface CombinePointGroupsInput {
  readonly groupsToCombine: readonly CollectionObjectName[];
  readonly combinedPointGroup: CollectionObjectName;
}

function combinePointGroups(
  briosa: BriosaClient,
  input: CombinePointGroupsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## dissectPointGroup

[MP command](/mp-command-catalog/commands/instrument-operations#dissect-point-group) · [gRPC contract](/api/grpc/instrument-operations#dissect-point-group)

```ts
export interface DissectPointGroupInput {
  readonly groupToDissect: CollectionObjectName;
  readonly baseNameForDissectedGroups: string;
}

function dissectPointGroup(
  briosa: BriosaClient,
  input: DissectPointGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## synchronizedMeasurementMasterSlave

[MP command](/mp-command-catalog/commands/instrument-operations#synchronized-measurement-masterslave) · [gRPC contract](/api/grpc/instrument-operations#synchronized-measurement-masterslave)

```ts
export interface SynchronizedMeasurementMasterSlaveInput {
  readonly masterInstrument: CollectionInstrumentId;
  readonly slaveInstrument: CollectionInstrumentId;
  readonly slaveGroupSuffix?: string;
  readonly locateOneOfTheInstruments?: boolean;
  readonly locateMaster?: boolean;
  readonly waitForCompletion?: boolean;
}

function synchronizedMeasurementMasterSlave(
  briosa: BriosaClient,
  input: SynchronizedMeasurementMasterSlaveInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Defaults are `"_Slave"`, `true`, `false`, and `true` in field order. A
deadline or cancellation does not prove that SA stopped the measurement.

## createNewDynamicReference

[MP command](/mp-command-catalog/commands/instrument-operations#create-new-dynamic-reference) · [gRPC contract](/api/grpc/instrument-operations#create-new-dynamic-reference)

```ts
export interface CreateNewDynamicReferenceInput {
  readonly instrument: CollectionInstrumentId;
  readonly pointsDefiningDynamicReference: readonly PointName[];
  readonly dynamicReferenceName: string;
}

function createNewDynamicReference(
  briosa: BriosaClient,
  input: CreateNewDynamicReferenceInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

SA documents this operation for AICON/Hexagon MoveInspect systems.

## calculateTcpFixtureUncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#calculate-tcp-fixture-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#calculate-tcp-fixture-uncertainties)

```ts
export interface CalculateTcpFixtureUncertaintiesInput {
  readonly tcpFixture: CollectionObjectName;
  readonly tcpMeasurements: readonly PointName[];
  readonly tcpInWorking?: Transform;
}

function calculateTcpFixtureUncertainties(
  briosa: BriosaClient,
  input: CalculateTcpFixtureUncertaintiesInput,
  options?: BriosaCallOptions,
): Promise<TcpFixtureUncertainties>;
```

An omitted transform uses the identity transform.

## constructTcpFixture

[MP command](/mp-command-catalog/commands/instrument-operations#construct-tcp-fixture) · [gRPC contract](/api/grpc/instrument-operations#construct-tcp-fixture)

```ts
export interface ConstructTcpFixtureInput {
  readonly requestedTcpFixture: CollectionObjectName;
  readonly pointMatchThreshold?: number;
  readonly replaceExistingTcpFixture?: boolean;
}

function constructTcpFixture(
  briosa: BriosaClient,
  input: ConstructTcpFixtureInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

Threshold and replacement default to `0.0` and `false`.

## addNominalPointToTcpFixture

[MP command](/mp-command-catalog/commands/instrument-operations#add-nominal-point-to-tcp-fixture) · [gRPC contract](/api/grpc/instrument-operations#add-nominal-point-to-tcp-fixture)

```ts
export interface AddNominalPointToTcpFixtureInput {
  readonly tcpFixture: CollectionObjectName;
  readonly nominalPointName: string;
  readonly nominalPointLocation: Vector;
  readonly varXx?: number;
  readonly varYy?: number;
  readonly varZz?: number;
  readonly covarXy?: number;
  readonly covarXz?: number;
  readonly covarYz?: number;
}

function addNominalPointToTcpFixture(
  briosa: BriosaClient,
  input: AddNominalPointToTcpFixtureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

All six covariance terms default to `0.0`.

## getLastSolvedTcpFixtureUncertaintyCovarianceMatrix

[MP command](/mp-command-catalog/commands/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix) · [gRPC contract](/api/grpc/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix)

```ts
export interface GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixInput {
  readonly tcpFixture: CollectionObjectName;
}

function getLastSolvedTcpFixtureUncertaintyCovarianceMatrix(
  briosa: BriosaClient,
  input: GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixInput,
  options?: BriosaCallOptions,
): Promise<UncertaintyCovarianceMatrix>;
```

## setInstrumentBaseUncertaintyCovarianceMatrixWrtBase

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base)

```ts
export interface SetInstrumentBaseUncertaintyCovarianceMatrixInput {
  readonly instrument: CollectionInstrumentId;
  readonly covarianceMatrix: UncertaintyCovarianceMatrix;
}

function setInstrumentBaseUncertaintyCovarianceMatrixWrtBase(
  briosa: BriosaClient,
  input: SetInstrumentBaseUncertaintyCovarianceMatrixInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## setInstrumentBaseUncertaintyCovarianceMatrixWrtWorld

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world)

```ts
function setInstrumentBaseUncertaintyCovarianceMatrixWrtWorld(
  briosa: BriosaClient,
  input: SetInstrumentBaseUncertaintyCovarianceMatrixInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The setters add no mathematical or physical-value validation beyond the fixed
matrix shape.

## getInstrumentBaseUncertaintyCovarianceMatrixWrtWorld

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world)

```ts
export interface GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldInput {
  readonly instrument: CollectionInstrumentId;
}

function getInstrumentBaseUncertaintyCovarianceMatrixWrtWorld(
  briosa: BriosaClient,
  input: GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldInput,
  options?: BriosaCallOptions,
): Promise<UncertaintyCovarianceMatrix>;
```

These functions retain no Briosa-owned measurement, dynamic-reference, TCP,
or uncertainty state and are never automatically replayed after an unknown
outcome.

## constructMeasuredPointUncertaintyEllipsoids

[MP command](/mp-command-catalog/commands/instrument-operations#construct-measured-point-uncertainty-ellipsoids) · [gRPC contract](/api/grpc/instrument-operations#construct-measured-point-uncertainty-ellipsoids)

```ts
export interface ConstructMeasuredPointUncertaintyEllipsoidsInput {
  readonly measurements: readonly PointName[];
}

function constructMeasuredPointUncertaintyEllipsoids(
  briosa: BriosaClient,
  input: ConstructMeasuredPointUncertaintyEllipsoidsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## getWrtlChannelAndStatus

[MP command](/mp-command-catalog/commands/instrument-operations#get-wrtl-channel-and-status) · [gRPC contract](/api/grpc/instrument-operations#get-wrtl-channel-and-status)

```ts
export interface GetWrtlChannelAndStatusInput {
  readonly instrument: CollectionInstrumentId;
}

function getWrtlChannelAndStatus(
  briosa: BriosaClient,
  input: GetWrtlChannelAndStatusInput,
  options?: BriosaCallOptions,
): Promise<WrtlChannelStatus>;
```

## setWrtlChannel

[MP command](/mp-command-catalog/commands/instrument-operations#set-wrtl-channel) · [gRPC contract](/api/grpc/instrument-operations#set-wrtl-channel)

```ts
export interface SetWrtlChannelInput {
  readonly instrument: CollectionInstrumentId;
  readonly channel?: number;
}

function setWrtlChannel(
  briosa: BriosaClient,
  input: SetWrtlChannelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Channel defaults to `0`; Briosa adds no range validation. These functions
retain no Briosa-owned WRTL or uncertainty-display state and are never
automatically replayed after an unknown outcome.
