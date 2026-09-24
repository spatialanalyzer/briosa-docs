---
title: Instrument Operations
description: Unreleased javascript 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations

[SA 2026.1.0529.7](/api/javascript/instrument-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/instrument-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Get Last Instrument Index {/* #get-last-instrument-index */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-last-instrument-index) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-last-instrument-index)

```ts
// Member of BriosaClient
interface BriosaClient {
  getLastInstrumentIndex(
    callOptions?: BriosaCallOptions,
  ): Promise<LastInstrumentIndexResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Instrument {/* #rename-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#rename-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#rename-instrument)

```ts
export interface RenameInstrumentInput {
  readonly instrument: CollectionInstrumentId;
  readonly newName: string;
}

// Member of BriosaClient
interface BriosaClient {
  renameInstrument(
    input: RenameInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument ID from Name {/* #get-instrument-id-from-name */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-id-from-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-id-from-name)

```ts
export interface GetInstrumentIdFromNameInput {
  readonly name: string;
}

// Member of BriosaClient
interface BriosaClient {
  getInstrumentIdFromName(
    input: GetInstrumentIdFromNameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CollectionInstrumentId>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Model {/* #get-instrument-model */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-model) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-model)

```ts
export interface GetInstrumentModelInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getInstrumentModel(
    input: GetInstrumentModelInput,
    callOptions?: BriosaCallOptions,
  ): Promise<InstrumentModelResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Instrument to Another Collection {/* #move-instrument-to-another-collection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-instrument-to-another-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#move-instrument-to-another-collection)

```ts
export interface MoveInstrumentToAnotherCollectionInput {
  readonly instrument: CollectionInstrumentId;
  readonly collectionName: CollectionName;
}

// Member of BriosaClient
interface BriosaClient {
  moveInstrumentToAnotherCollection(
    input: MoveInstrumentToAnotherCollectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Instrument Configuration {/* #save-instrument-configuration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#save-instrument-configuration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#save-instrument-configuration)

```ts
export interface SaveInstrumentConfigurationInput {
  readonly instrument: CollectionInstrumentId;
  readonly configurationFile: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  saveInstrumentConfiguration(
    input: SaveInstrumentConfigurationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load Instrument Configuration {/* #load-instrument-configuration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#load-instrument-configuration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#load-instrument-configuration)

```ts
export interface LoadInstrumentConfigurationInput {
  readonly instrument: CollectionInstrumentId;
  readonly configurationFile: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  loadInstrumentConfiguration(
    input: LoadInstrumentConfigurationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Instrument History to XML File {/* #export-instrument-history-to-xml-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#export-instrument-history-to-xml-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#export-instrument-history-to-xml-file)

```ts
export interface ExportInstrumentHistoryToXmlFileInput {
  readonly instrument: CollectionInstrumentId;
  readonly filePath: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  exportInstrumentHistoryToXmlFile(
    input: ExportInstrumentHistoryToXmlFileInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Point At Target {/* #point-at-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#point-at-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#point-at-target)

```ts
export interface PointAtTargetInput {
  readonly instrument: CollectionInstrumentId;
  readonly targetId: PointName;
  readonly htmlPromptFile?: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  pointAtTarget(
    input: PointAtTargetInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Single Point Here {/* #measure-single-point-here */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-single-point-here) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure-single-point-here)

```ts
export interface MeasureSinglePointHereInput {
  readonly instrument: CollectionInstrumentId;
  readonly targetId: PointName;
  readonly measureImmediately?: boolean;
  readonly htmlPromptFile?: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  measureSinglePointHere(
    input: MeasureSinglePointHereInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Current Instrument Position Update {/* #get-current-instrument-position-update */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-current-instrument-position-update) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-current-instrument-position-update)

```ts
export interface GetCurrentInstrumentPositionUpdateInput {
  readonly instrument: CollectionInstrumentId;
  readonly reportingFrame?: InstrumentPositionReportingFrame;
  readonly polarCoordinates?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  getCurrentInstrumentPositionUpdate(
    input: GetCurrentInstrumentPositionUpdateInput,
    callOptions?: BriosaCallOptions,
  ): Promise<InstrumentPositionUpdate>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `yOrTheta` | Angle in degrees. |
| `zOrPhi` | Angle in degrees. |
| `timeSinceUpdate` | Time in seconds. |
| `timestamp` | MP qualifier: Approximate. |

## 'Build' Target {/* #build-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#build-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#build-target)

```ts
export interface BuildTargetInput {
  readonly instrument: CollectionInstrumentId;
  readonly outputTargetName: PointName;
  readonly nominalPoint: PointName;
  readonly tolerance?: ToleranceVectorOptions;
  readonly htmlPromptFile?: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  buildTarget(
    input: BuildTargetInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Existing Single Point {/* #measure-existing-single-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure-existing-single-point)

```ts
export interface MeasureExistingSinglePointInput {
  readonly instrument: CollectionInstrumentId;
  readonly existingTargetId: PointName;
  readonly groupNameForNewPoint: CollectionObjectName;
  readonly measureImmediately?: boolean;
  readonly htmlPromptFile?: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  measureExistingSinglePoint(
    input: MeasureExistingSinglePointInput,
    callOptions?: BriosaCallOptions,
  ): Promise<PointName>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Existing Single Point (Manual Guide) {/* #measure-existing-single-point-manual-guide */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-manual-guide) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure-existing-single-point-manual-guide)

```ts
// Member of BriosaClient
interface BriosaClient {
  measureExistingSinglePointManualGuide(
    input: MeasureExistingSinglePointInput,
    callOptions?: BriosaCallOptions,
  ): Promise<PointName>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Existing Single Point and Compare {/* #measure-existing-single-point-and-compare */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-and-compare) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure-existing-single-point-and-compare)

```ts
// Member of BriosaClient
interface BriosaClient {
  measureExistingSinglePointAndCompare(
    input: MeasureExistingSinglePointAndCompareInput,
    callOptions?: BriosaCallOptions,
  ): Promise<PointComparisonResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Probe Offset Frame Online (Measure Raw Frame) {/* #set-probe-offset-frame-online-measure-raw-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-online-measure-raw-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-probe-offset-frame-online-measure-raw-frame)

```ts
export interface SetProbeOffsetFrameOnlineInput {
  readonly instrument: CollectionInstrumentId;
  readonly probeName: string;
  readonly offsetFrame: CollectionObjectName;
  readonly faceId?: number;
  readonly measureProfileName?: string;
  readonly timeoutSeconds?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setProbeOffsetFrameOnline(
    input: SetProbeOffsetFrameOnlineInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Probe Offset Frame Offline (Select Previously Measured Frame) {/* #set-probe-offset-frame-offline-select-previously-measured-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame)

```ts
export interface SetProbeOffsetFrameOfflineInput {
  readonly instrument: CollectionInstrumentId;
  readonly probeName: string;
  readonly rawMeasuredFrame: CollectionObjectName;
  readonly offsetFrame: CollectionObjectName;
  readonly faceId?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setProbeOffsetFrameOffline(
    input: SetProbeOffsetFrameOfflineInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Active Measurement Mode {/* #stop-active-measurement-mode */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#stop-active-measurement-mode) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#stop-active-measurement-mode)

```ts
export interface StopActiveMeasurementModeInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  stopActiveMeasurementMode(
    input: StopActiveMeasurementModeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Frame Set Scan Mode (All Instruments) {/* #enabledisable-frame-set-scan-mode-all-instruments */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments)

```ts
export interface EnableDisableFrameSetScanModeAllInstrumentsInput {
  readonly enableFrameSetScanMode?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  enableDisableFrameSetScanModeAllInstruments(
    input?: EnableDisableFrameSetScanModeAllInstrumentsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Frame Set Scan Mode (By Instrument) {/* #enabledisable-frame-set-scan-mode-by-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument)

```ts
export interface EnableDisableFrameSetScanModeByInstrumentInput {
  readonly instrument: CollectionInstrumentId;
  readonly enableFrameSetScanMode?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  enableDisableFrameSetScanModeByInstrument(
    input: EnableDisableFrameSetScanModeByInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Point Set Scan Mode {/* #enabledisable-point-set-scan-mode */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-point-set-scan-mode) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#enabledisable-point-set-scan-mode)

```ts
export interface EnableDisablePointSetScanModeInput {
  readonly instrument: CollectionInstrumentId;
  readonly enablePointSetScanMode?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  enableDisablePointSetScanMode(
    input: EnableDisablePointSetScanModeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add New Instrument {/* #add-new-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#add-new-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#add-new-instrument)

```ts
export interface AddNewInstrumentInput {
  readonly instrumentType: InstrumentTypeName;
}

// Member of BriosaClient
interface BriosaClient {
  addNewInstrument(
    input: AddNewInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CollectionInstrumentId>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Instrument {/* #delete-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#delete-instrument)

```ts
export interface DeleteInstrumentInput {
  readonly instrument: CollectionInstrumentId;
  readonly promptUserToConfirm?: boolean;
  readonly keepResultingPoints?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  deleteInstrument(
    input: DeleteInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Measurements {/* #delete-measurements */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-measurements) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#delete-measurements)

```ts
export interface DeleteMeasurementsInput {
  readonly instrument: CollectionInstrumentId;
  readonly pointName: PointName;
  readonly deletePointIfNoMeasurementsRemain?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  deleteMeasurements(
    input: DeleteMeasurementsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Measurement Observation {/* #delete-measurement-observation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-measurement-observation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#delete-measurement-observation)

```ts
export interface DeleteMeasurementObservationInput {
  readonly pointName: PointName;
  readonly observationIndex?: number;
  readonly deletePointIfNoMeasurementsRemain?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  deleteMeasurementObservation(
    input: DeleteMeasurementObservationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Measurement Observation {/* #move-measurement-observation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-measurement-observation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#move-measurement-observation)

```ts
export interface MoveMeasurementObservationInput {
  readonly sourcePointName: PointName;
  readonly observationIndex?: number;
  readonly deletePointIfNoMeasurementsRemain?: boolean;
  readonly destinationPointName: PointName;
  readonly forceObservationActive?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  moveMeasurementObservation(
    input: MoveMeasurementObservationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Initiate Servo-Guide {/* #initiate-servo-guide */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#initiate-servo-guide) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#initiate-servo-guide)

```ts
export interface InitiateServoGuideInput {
  readonly instrument: CollectionInstrumentId;
  readonly nominalPoints: readonly PointName[];
  readonly groupNameSuffix?: string;
  readonly targetNameSuffix?: string;
  readonly tolerance?: number;
}

// Member of BriosaClient
interface BriosaClient {
  initiateServoGuide(
    input: InitiateServoGuideInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start Theodolite Interface {/* #start-theodolite-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-theodolite-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#start-theodolite-interface)

```ts
export interface StartTheodoliteInterfaceInput {
  readonly instrument: CollectionInstrumentId;
  readonly theodoliteType: string;
  readonly commPort?: number;
  readonly deviceIpAddress?: string;
  readonly simulation?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  startTheodoliteInterface(
    input: StartTheodoliteInterfaceInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start Instrument Interface {/* #start-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-instrument-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#start-instrument-interface)

```ts
export interface StartInstrumentInterfaceInput {
  readonly instrument: CollectionInstrumentId;
  readonly initializeAtStartup?: boolean;
  readonly deviceIpAddress?: string;
  readonly interfaceType?: number;
  readonly runInSimulation?: boolean;
  readonly allowStartWithoutInitializationRequirements?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  startInstrumentInterface(
    input: StartInstrumentInterfaceInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Instrument Interface {/* #stop-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#stop-instrument-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#stop-instrument-interface)

```ts
export interface StopInstrumentInterfaceInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  stopInstrumentInterface(
    input: StopInstrumentInterfaceInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Activate/Deactivate Instrument Toolbar {/* #activatedeactivate-instrument-toolbar */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#activatedeactivate-instrument-toolbar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#activatedeactivate-instrument-toolbar)

```ts
export interface ActivateDeactivateInstrumentToolbarInput {
  readonly instrument: CollectionInstrumentId;
  readonly deactivateToolbar?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  activateDeactivateInstrumentToolbar(
    input: ActivateDeactivateInstrumentToolbarInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Verify Instrument Connection {/* #verify-instrument-connection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#verify-instrument-connection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#verify-instrument-connection)

```ts
export interface VerifyInstrumentConnectionInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  verifyInstrumentConnection(
    input: VerifyInstrumentConnectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<boolean>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Configure and Measure {/* #configure-and-measure */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#configure-and-measure) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#configure-and-measure)

```ts
export interface ConfigureAndMeasureInput {
  readonly instrument: CollectionInstrumentId;
  readonly target: PointName;
  readonly measurementMode: string;
  readonly measureImmediately?: boolean;
  readonly waitForCompletion?: boolean;
  readonly timeoutSeconds?: number;
}

// Member of BriosaClient
interface BriosaClient {
  configureAndMeasure(
    input: ConfigureAndMeasureInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure {/* #measure */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure)

```ts
export interface MeasureInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  measure(input: MeasureInput, callOptions?: BriosaCallOptions): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set XYZ Reference Frame Instrument Base Anchor Frame {/* #set-xyz-reference-frame-instrument-base-anchor-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame)

```ts
export interface SetXyzReferenceFrameInstrumentBaseAnchorFrameInput {
  readonly instrument: CollectionInstrumentId;
  readonly anchorFrame: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  setXyzReferenceFrameInstrumentBaseAnchorFrame(
    input: SetXyzReferenceFrameInstrumentBaseAnchorFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Dock Instrument Interface {/* #dock-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#dock-instrument-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#dock-instrument-interface)

```ts
export interface DockInstrumentInterfaceInput {
  readonly instrument: CollectionInstrumentId;
  readonly dockInterface?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  dockInstrumentInterface(
    input: DockInstrumentInterfaceInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instrument (Ref. Tie-In) {/* #locate-instrument-ref-tie-in */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-ref-tie-in) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#locate-instrument-ref-tie-in)

```ts
export interface LocateInstrumentRefTieInInput {
  readonly instrument: CollectionInstrumentId;
  readonly referenceGroup: CollectionObjectName;
  readonly actualsGroup: CollectionObjectName;
  readonly tolerance?: number;
  readonly autoSurvey?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  locateInstrumentRefTieIn(
    input: LocateInstrumentRefTieInInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instrument (Group to Surface Quick Fit) {/* #locate-instrument-group-to-surface-quick-fit */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-group-to-surface-quick-fit) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#locate-instrument-group-to-surface-quick-fit)

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

// Member of BriosaClient
interface BriosaClient {
  locateInstrumentGroupToSurfaceQuickFit(
    input: LocateInstrumentGroupToSurfaceQuickFitInput,
    callOptions?: BriosaCallOptions,
  ): Promise<FitErrorResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Multi Measurement Initiate {/* #multi-measurement-initiate */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#multi-measurement-initiate) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#multi-measurement-initiate)

```ts
export interface MultiMeasurementInitiateInput {
  readonly instruments: Iterable<CollectionInstrumentId>;
  readonly measurementMode: string;
  readonly waitForCompletion?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  multiMeasurementInitiate(
    input: MultiMeasurementInitiateInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Multi Measurement Stop {/* #multi-measurement-stop */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#multi-measurement-stop) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#multi-measurement-stop)

```ts
export interface MultiMeasurementStopInput {
  readonly instruments: Iterable<CollectionInstrumentId>;
}

// Member of BriosaClient
interface BriosaClient {
  multiMeasurementStop(
    input: MultiMeasurementStopInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Align Laser Projector {/* #align-laser-projector */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-laser-projector) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#align-laser-projector)

```ts
export interface AlignLaserProjectorInput {
  readonly instrument: CollectionInstrumentId;
  readonly group: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  alignLaserProjector(
    input: AlignLaserProjectorInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instruments (USMN) {/* #locate-instruments-usmn */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instruments-usmn) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#locate-instruments-usmn)

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
  readonly analysisTimeLimit?: number;
}

// Member of BriosaClient
interface BriosaClient {
  locateInstrumentsUsmn(
    input: LocateInstrumentsUsmnInput,
    callOptions?: BriosaCallOptions,
  ): Promise<FitErrorResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `analysisTimeLimit` | Time in minutes; 0 disables the time limit. |

## Create Templated Instrument (USMN) {/* #create-templated-instrument-usmn */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#create-templated-instrument-usmn) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#create-templated-instrument-usmn)

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
  readonly component1Weight?: number;
  readonly component2Weight?: number;
  readonly component3Weight?: number;
}

// Member of BriosaClient
interface BriosaClient {
  createTemplatedInstrumentUsmn(
    input: CreateTemplatedInstrumentUsmnInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `component1Weight` | MP qualifier: Azimuth. |
| `component2Weight` | MP qualifier: Elevation. |
| `component3Weight` | MP qualifier: Distance. |

## Locate Instrument (Best Fit - Group to Group) {/* #locate-instrument-best-fit---group-to-group */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---group-to-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#locate-instrument-best-fit---group-to-group)

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

// Member of BriosaClient
interface BriosaClient {
  locateInstrumentBestFitGroupToGroup(
    input: LocateInstrumentBestFitGroupToGroupInput,
    callOptions?: BriosaCallOptions,
  ): Promise<InstrumentBestFitResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instrument (Best Fit - Nominal Geometry) {/* #locate-instrument-best-fit---nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---nominal-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#locate-instrument-best-fit---nominal-geometry)

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

// Member of BriosaClient
interface BriosaClient {
  locateInstrumentBestFitNominalGeometry(
    input: LocateInstrumentBestFitNominalGeometryInput,
    callOptions?: BriosaCallOptions,
  ): Promise<InstrumentBestFitResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Transform {/* #get-instrument-transform */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-transform) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-transform)

```ts
export interface GetInstrumentTransformInput {
  readonly instrument: CollectionInstrumentId;
  readonly referenceFrame: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  getInstrumentTransform(
    input: GetInstrumentTransformInput,
    callOptions?: BriosaCallOptions,
  ): Promise<Transform>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Transform {/* #set-instrument-transform */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-transform) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-transform)

```ts
export interface SetInstrumentTransformInput {
  readonly instrument: CollectionInstrumentId;
  readonly destinationTransform: Transform;
  readonly referenceFrame: CollectionObjectName;
  readonly numberOfSteps?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setInstrumentTransform(
    input: SetInstrumentTransformInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Tracker/EDM Theodolite Uncertainties {/* #get-trackeredm-theodolite-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-trackeredm-theodolite-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-trackeredm-theodolite-uncertainties)

```ts
export interface GetTrackerEdmTheodoliteUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getTrackerEdmTheodoliteUncertainties(
    input: GetTrackerEdmTheodoliteUncertaintiesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<TrackerEdmTheodoliteUncertainties>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `thetaDispersion` | Angle in arcseconds. |
| `phiDispersion` | Angle in arcseconds. |
| `distance` | Value in parts per million. |

## Set Tracker/EDM Theodolite Uncertainties {/* #set-trackeredm-theodolite-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-trackeredm-theodolite-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-trackeredm-theodolite-uncertainties)

```ts
export interface SetTrackerEdmTheodoliteUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
  readonly thetaDispersion?: number;
  readonly thetaThreshold?: number;
  readonly phiDispersion?: number;
  readonly phiThreshold?: number;
  readonly distance?: number;
  readonly distanceThreshold?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setTrackerEdmTheodoliteUncertainties(
    input: SetTrackerEdmTheodoliteUncertaintiesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `thetaDispersion` | Angle in arcseconds. |
| `phiDispersion` | Angle in arcseconds. |
| `distance` | Value in parts per million. |

## Get PCMM Instrument XYZ Uncertainties {/* #get-pcmm-instrument-xyz-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-pcmm-instrument-xyz-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-pcmm-instrument-xyz-uncertainties)

```ts
export interface GetPcmmInstrumentXyzUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getPcmmInstrumentXyzUncertainties(
    input: GetPcmmInstrumentXyzUncertaintiesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<InstrumentXyzUncertainties>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set PCMM Instrument XYZ Uncertainties {/* #set-pcmm-instrument-xyz-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-pcmm-instrument-xyz-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-pcmm-instrument-xyz-uncertainties)

```ts
export interface SetPcmmInstrumentXyzUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
  readonly xUncertainty?: number;
  readonly yUncertainty?: number;
  readonly zUncertainty?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setPcmmInstrumentXyzUncertainties(
    input: SetPcmmInstrumentXyzUncertaintiesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get XYZ Instrument Uncertainties {/* #get-xyz-instrument-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-xyz-instrument-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-xyz-instrument-uncertainties)

```ts
export interface GetXyzInstrumentUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getXyzInstrumentUncertainties(
    input: GetXyzInstrumentUncertaintiesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<InstrumentXyzUncertainties>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set XYZ Instrument Uncertainties {/* #set-xyz-instrument-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-xyz-instrument-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-xyz-instrument-uncertainties)

```ts
export interface SetXyzInstrumentUncertaintiesInput {
  readonly instrument: CollectionInstrumentId;
  readonly xUncertainty?: number;
  readonly yUncertainty?: number;
  readonly zUncertainty?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setXyzInstrumentUncertainties(
    input: SetXyzInstrumentUncertaintiesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Weather Setting {/* #get-instrument-weather-setting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-weather-setting) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-weather-setting)

```ts
export interface GetInstrumentWeatherSettingInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getInstrumentWeatherSetting(
    input: GetInstrumentWeatherSettingInput,
    callOptions?: BriosaCallOptions,
  ): Promise<InstrumentWeatherSetting>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in millimeters of mercury. |
| `relativeHumidity` | Relative humidity in percent. |

## Set Instrument Weather Setting {/* #set-instrument-weather-setting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-weather-setting) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-weather-setting)

```ts
export interface SetInstrumentWeatherSettingInput {
  readonly instrument: CollectionInstrumentId;
  readonly temperature?: number;
  readonly pressure?: number;
  readonly relativeHumidity?: number;
  readonly setAutomatically?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  setInstrumentWeatherSetting(
    input: SetInstrumentWeatherSettingInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in millimeters of mercury. |
| `relativeHumidity` | Relative humidity in percent. |

## Get Instrument Part Temperature {/* #get-instrument-part-temperature */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-part-temperature) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-part-temperature)

```ts
export interface GetInstrumentPartTemperatureInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getInstrumentPartTemperature(
    input: GetInstrumentPartTemperatureInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `partTemperature` | Temperature in degrees Fahrenheit. |

## Compute CTE Scale Factor {/* #compute-cte-scale-factor */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#compute-cte-scale-factor) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#compute-cte-scale-factor)

```ts
export interface ComputeCteScaleFactorInput {
  readonly materialCte?: number;
  readonly initialTemperature?: number;
  readonly finalTemperature?: number;
}

// Member of BriosaClient
interface BriosaClient {
  computeCteScaleFactor(
    input?: ComputeCteScaleFactorInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `materialCte` | Coefficient per degree Fahrenheit. |
| `initialTemperature` | Temperature in degrees Fahrenheit. |
| `finalTemperature` | Temperature in degrees Fahrenheit. |

## Set (multiply) Instrument Scale Factor (CAUTION!) {/* #set-multiply-instrument-scale-factor-caution */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-multiply-instrument-scale-factor-caution) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-multiply-instrument-scale-factor-caution)

```ts
export interface SetMultiplyInstrumentScaleFactorInput {
  readonly instrument: CollectionInstrumentId;
  readonly scaleFactor?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setMultiplyInstrumentScaleFactor(
    input: SetMultiplyInstrumentScaleFactorInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set (absolute) Instrument Scale Factor (CAUTION!) {/* #set-absolute-instrument-scale-factor-caution */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-absolute-instrument-scale-factor-caution) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-absolute-instrument-scale-factor-caution)

```ts
export interface SetAbsoluteInstrumentScaleFactorInput {
  readonly instrument: CollectionInstrumentId;
  readonly scaleFactor?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setAbsoluteInstrumentScaleFactor(
    input: SetAbsoluteInstrumentScaleFactorInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Scale Factor {/* #get-instrument-scale-factor */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-scale-factor) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-scale-factor)

```ts
export interface GetInstrumentScaleFactorInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getInstrumentScaleFactor(
    input: GetInstrumentScaleFactorInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Instrument - Frame To Frame {/* #transform-instrument---frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-instrument---frame-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#transform-instrument---frame-to-frame)

```ts
export interface TransformInstrumentFrameToFrameInput {
  readonly instrument: CollectionInstrumentId;
  readonly initialFrame: CollectionObjectName;
  readonly destinationFrame: CollectionObjectName;
  readonly numberOfSteps?: number;
}

// Member of BriosaClient
interface BriosaClient {
  transformInstrumentFrameToFrame(
    input: TransformInstrumentFrameToFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Instrument by Delta {/* #transform-instrument-by-delta */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-instrument-by-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#transform-instrument-by-delta)

```ts
export interface TransformInstrumentByDeltaInput {
  readonly instrument: CollectionInstrumentId;
  readonly deltaTransform: WorldTransform;
  readonly applyScaleToInstrument?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  transformInstrumentByDelta(
    input: TransformInstrumentByDeltaInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Multiple Instruments By Delta {/* #transform-multiple-instruments-by-delta */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-multiple-instruments-by-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#transform-multiple-instruments-by-delta)

```ts
export interface TransformMultipleInstrumentsByDeltaInput {
  readonly instruments: Iterable<CollectionInstrumentId>;
  readonly deltaTransform: WorldTransform;
  readonly applyScaleToInstruments?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  transformMultipleInstrumentsByDelta(
    input: TransformMultipleInstrumentsByDeltaInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Instrument Operational Check {/* #instrument-operational-check */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#instrument-operational-check) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#instrument-operational-check)

```ts
export interface InstrumentOperationalCheckInput {
  readonly instrument: CollectionInstrumentId;
  readonly checkType: string;
}

// Member of BriosaClient
interface BriosaClient {
  instrumentOperationalCheck(
    input: InstrumentOperationalCheckInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Observations on Target {/* #get-number-of-observations-on-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-number-of-observations-on-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-number-of-observations-on-target)

```ts
export interface GetNumberOfObservationsOnTargetInput {
  readonly point: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  getNumberOfObservationsOnTarget(
    input: GetNumberOfObservationsOnTargetInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instruments with Observations on Target {/* #get-instruments-with-observations-on-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instruments-with-observations-on-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instruments-with-observations-on-target)

```ts
export interface GetInstrumentsWithObservationsOnTargetInput {
  readonly point: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  getInstrumentsWithObservationsOnTarget(
    input: GetInstrumentsWithObservationsOnTargetInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionInstrumentId[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Targets Measured by Instrument {/* #get-targets-measured-by-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-targets-measured-by-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-targets-measured-by-instrument)

```ts
export interface GetTargetsMeasuredByInstrumentInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getTargetsMeasuredByInstrument(
    input: GetTargetsMeasuredByInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly PointName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Observation Status {/* #set-observation-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-observation-status)

```ts
export interface SetObservationStatusInput {
  readonly point: PointName;
  readonly observationIndex?: number;
  readonly active?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  setObservationStatus(
    input: SetObservationStatusInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Observation Info {/* #get-observation-info */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-observation-info) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-observation-info)

```ts
export interface GetObservationInfoInput {
  readonly point: PointName;
  readonly observationIndex?: number;
}

// Member of BriosaClient
interface BriosaClient {
  getObservationInfo(
    input: GetObservationInfoInput,
    callOptions?: BriosaCallOptions,
  ): Promise<ObservationInfo>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in inches of mercury. |
| `relativeHumidity` | Relative humidity in percent. |

## Fabricate Observations {/* #fabricate-observations */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#fabricate-observations) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#fabricate-observations)

```ts
export interface FabricateObservationsInput {
  readonly instrument: CollectionInstrumentId;
  readonly pointGroup: CollectionObjectName;
  readonly introduceInstrumentError?: boolean;
  readonly limitDistance?: boolean;
  readonly minimumDistance?: number;
  readonly maximumDistance?: number;
}

// Member of BriosaClient
interface BriosaClient {
  fabricateObservations(
    input: FabricateObservationsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Obscured Points from Instrument {/* #get-obscured-points-from-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-obscured-points-from-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-obscured-points-from-instrument)

```ts
export interface GetObscuredPointsFromInstrumentInput {
  readonly instrument: CollectionInstrumentId;
  readonly candidatePoints: Iterable<PointName>;
  readonly showObscuredShots?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  getObscuredPointsFromInstrument(
    input: GetObscuredPointsFromInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly PointName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Targets and Mode/Profiles {/* #get-instrument-targets-and-modeprofiles */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-targets-and-modeprofiles) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-targets-and-modeprofiles)

```ts
export interface GetInstrumentTargetsAndModeProfilesInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getInstrumentTargetsAndModeProfiles(
    input: GetInstrumentTargetsAndModeProfilesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<InstrumentTargetsAndModeProfiles>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Measurement Mode/Profile {/* #set-instrument-measurement-modeprofile */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-measurement-modeprofile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-measurement-modeprofile)

```ts
export interface SetInstrumentMeasurementModeProfileInput {
  readonly instrument: CollectionInstrumentId;
  readonly modeProfile: string;
}

// Member of BriosaClient
interface BriosaClient {
  setInstrumentMeasurementModeProfile(
    input: SetInstrumentMeasurementModeProfileInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Group and Target {/* #set-instrument-group-and-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-group-and-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-group-and-target)

```ts
export interface SetInstrumentGroupAndTargetInput {
  readonly instrument: CollectionInstrumentId;
  readonly point: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  setInstrumentGroupAndTarget(
    input: SetInstrumentGroupAndTargetInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Targeting {/* #set-instrument-targeting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-targeting) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-targeting)

```ts
export interface SetInstrumentTargetingInput {
  readonly instrument: CollectionInstrumentId;
  readonly targetingName: string;
}

// Member of BriosaClient
interface BriosaClient {
  setInstrumentTargeting(
    input: SetInstrumentTargetingInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Target Computation Options {/* #set-target-computation-options */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-target-computation-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-target-computation-options)

```ts
export interface SetTargetComputationOptionsInput {
  readonly computationMethod?: TargetComputationMethod;
  readonly ignoreDistanceMeasurements?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  setTargetComputationOptions(
    input?: SetTargetComputationOptionsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Observation Mirror Cube Shot Face {/* #set-observation-mirror-cube-shot-face */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-mirror-cube-shot-face) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-observation-mirror-cube-shot-face)

```ts
export interface SetObservationMirrorCubeShotFaceInput {
  readonly point: PointName;
  readonly observationIndex?: number;
  readonly isMirrorCubeShot?: boolean;
  readonly mirrorCubeShotFace?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setObservationMirrorCubeShotFace(
    input: SetObservationMirrorCubeShotFaceInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Observation Collimation Shot Options {/* #set-observation-collimation-shot-options */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-collimation-shot-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-observation-collimation-shot-options)

```ts
export interface SetObservationCollimationShotOptionsInput {
  readonly point: PointName;
  readonly observationIndex?: number;
  readonly isCollimationShot?: boolean;
  readonly targetedInstrument?: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  setObservationCollimationShotOptions(
    input: SetObservationCollimationShotOptionsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Collimation {/* #collimation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#collimation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#collimation)

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

// Member of BriosaClient
interface BriosaClient {
  collimation(
    input: CollimationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Target Status {/* #get-instrument-target-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-target-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-target-status)

```ts
export interface GetInstrumentTargetStatusInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getInstrumentTargetStatus(
    input: GetInstrumentTargetStatusInput,
    callOptions?: BriosaCallOptions,
  ): Promise<InstrumentTargetStatus>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Surface Face List from Point Proximity {/* #make-surface-face-list-from-point-proximity */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#make-surface-face-list-from-point-proximity) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#make-surface-face-list-from-point-proximity)

```ts
// Member of BriosaClient
interface BriosaClient {
  makeSurfaceFaceListFromPointProximity(
    measuredPoints: readonly PointName[],
    callOptions?: BriosaCallOptions,
  ): Promise<SurfaceFaceList>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Estimated Scan Time {/* #get-estimated-scan-time */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-estimated-scan-time) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-estimated-scan-time)

```ts
// Member of BriosaClient
interface BriosaClient {
  getEstimatedScanTime(
    instrument: CollectionInstrumentId,
    profileName: string,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Perimeters from Surface Face List {/* #construct-perimeters-from-surface-face-list */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-perimeters-from-surface-face-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#construct-perimeters-from-surface-face-list)

```ts
// Member of BriosaClient
interface BriosaClient {
  constructPerimetersFromSurfaceFaceList(
    surfaceFaces: SurfaceFaceList,
    callOptions?: BriosaCallOptions,
  ): Promise<PerimeterLists>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Edge Scan Measurement {/* #edge-scan-measurement */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#edge-scan-measurement) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#edge-scan-measurement)

```ts
export interface EdgeScanMeasurementInput {
  readonly instrument: CollectionInstrumentId;
  readonly pointNearEdge: PointName;
  readonly edgeSearchDirectionPoint: PointName;
  readonly parameterSetName: string;
  readonly pointGroup: CollectionObjectName;
  readonly targetName: string;
}

// Member of BriosaClient
interface BriosaClient {
  edgeScanMeasurement(
    input: EdgeScanMeasurementInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Track Tape Measurement {/* #track-tape-measurement */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#track-tape-measurement) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#track-tape-measurement)

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

// Member of BriosaClient
interface BriosaClient {
  trackTapeMeasurement(
    input: TrackTapeMeasurementInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Measure Points {/* #auto-measure-points */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-measure-points)

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

// Member of BriosaClient
interface BriosaClient {
  autoMeasurePoints(
    input: AutoMeasurePointsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Vectors {/* #auto-measure-vectors */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-vectors) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-measure-vectors)

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

// Member of BriosaClient
interface BriosaClient {
  autoMeasureVectors(
    input: AutoMeasureVectorsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Surface Vector Intersections {/* #auto-measure-surface-vector-intersections */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-surface-vector-intersections) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-measure-surface-vector-intersections)

```ts
export interface AutoMeasureSurfaceVectorIntersectionsInput {
  readonly instrument: CollectionInstrumentId;
  readonly vectorGroup: CollectionObjectName;
  readonly resultantGroup: CollectionObjectName;
  readonly waitForComplete?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  autoMeasureSurfaceVectorIntersections(
    input: AutoMeasureSurfaceVectorIntersectionsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Specified Geometry {/* #auto-measure-specified-geometry */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-specified-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-measure-specified-geometry)

```ts
export interface AutoMeasureSpecifiedGeometryInput {
  readonly instrument: CollectionInstrumentId;
  readonly geometry: CollectionObjectName;
  readonly modeProfile: string;
  readonly waitForComplete?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  autoMeasureSpecifiedGeometry(
    input: AutoMeasureSpecifiedGeometryInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Batch of Features {/* #auto-measure-batch-of-features */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-batch-of-features) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-measure-batch-of-features)

```ts
export interface AutoMeasureBatchOfFeaturesInput {
  readonly instrument: CollectionInstrumentId;
  readonly features: Iterable<CollectionItemName>;
  readonly waitForComplete?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  autoMeasureBatchOfFeatures(
    input: AutoMeasureBatchOfFeaturesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Correspond Closest Point {/* #auto-correspond-closest-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-correspond-closest-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-correspond-closest-point)

```ts
export interface AutoCorrespondClosestPointInput {
  readonly instrument: CollectionInstrumentId;
  readonly referenceGroup: CollectionObjectName;
  readonly actualsGroup: CollectionObjectName;
  readonly waitForCompletion?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  autoCorrespondClosestPoint(
    input: AutoCorrespondClosestPointInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Close Auto-Correspond Closest Point Dialog {/* #close-auto-correspond-closest-point-dialog */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#close-auto-correspond-closest-point-dialog) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#close-auto-correspond-closest-point-dialog)

```ts
// Member of BriosaClient
interface BriosaClient {
  closeAutoCorrespondClosestPointDialog(
    instrument: CollectionInstrumentId,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Correspond with Proximity Trigger {/* #auto-correspond-with-proximity-trigger */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-correspond-with-proximity-trigger) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-correspond-with-proximity-trigger)

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

// Member of BriosaClient
interface BriosaClient {
  autoCorrespondWithProximityTrigger(
    input: AutoCorrespondWithProximityTriggerInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Mirror from Plane {/* #construct-mirror-from-plane */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#construct-mirror-from-plane)

```ts
export interface ConstructMirrorFromPlaneInput {
  readonly instrument: CollectionInstrumentId;
  readonly mirrorName: string;
  readonly plane: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructMirrorFromPlane(
    input: ConstructMirrorFromPlaneInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Mirror from Two Points {/* #construct-mirror-from-two-points */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-two-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#construct-mirror-from-two-points)

```ts
export interface ConstructMirrorFromTwoPointsInput {
  readonly instrument: CollectionInstrumentId;
  readonly mirrorName: string;
  readonly pointMeasuredDirectly: PointName;
  readonly pointMeasuredThroughMirror: PointName;
  readonly sendMirrorToInstrument?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructMirrorFromTwoPoints(
    input: ConstructMirrorFromTwoPointsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CollectionObjectName>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Drift Check {/* #drift-check */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#drift-check) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#drift-check)

```ts
export interface DriftCheckInput {
  readonly instrument: CollectionInstrumentId;
  readonly referenceGroup: CollectionObjectName;
  readonly actualsGroup: CollectionObjectName;
  readonly tolerance?: number;
  readonly minimumPointCount?: number;
  readonly useClosestReferencePoint?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  driftCheck(
    input: DriftCheckInput,
    callOptions?: BriosaCallOptions,
  ): Promise<DriftCheckResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Nominal Feature {/* #measure-nominal-feature */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-nominal-feature) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure-nominal-feature)

```ts
export interface MeasureNominalFeatureInput {
  readonly instrument: CollectionInstrumentId;
  readonly feature: CollectionObjectName;
  readonly resultingPoint: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  measureNominalFeature(
    input: MeasureNominalFeatureInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Guide Objects in 6D based on Point Measurements {/* #guide-objects-in-6d-based-on-point-measurements */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#guide-objects-in-6d-based-on-point-measurements) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#guide-objects-in-6d-based-on-point-measurements)

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

// Member of BriosaClient
interface BriosaClient {
  guideObjectsIn6dBasedOnPointMeasurements(
    input: GuideObjectsIn6dBasedOnPointMeasurementsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects in 6D using Instrument Updates {/* #move-objects-in-6d-using-instrument-updates */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-objects-in-6d-using-instrument-updates) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#move-objects-in-6d-using-instrument-updates)

```ts
export interface MoveObjectsIn6dUsingInstrumentUpdatesInput {
  readonly instrument: CollectionInstrumentId;
  readonly objectsToMove: Iterable<CollectionObjectName>;
  readonly measurementMode: string;
}

// Member of BriosaClient
interface BriosaClient {
  moveObjectsIn6dUsingInstrumentUpdates(
    input: MoveObjectsIn6dUsingInstrumentUpdatesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Align Two Targets with Axis (WCF - X) {/* #align-two-targets-with-axis-wcf---x */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-two-targets-with-axis-wcf---x) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#align-two-targets-with-axis-wcf---x)

```ts
export interface AlignTwoTargetsWithAxisWcfXInput {
  readonly instrument: CollectionInstrumentId;
  readonly firstPointOnAxis: PointName;
  readonly secondPointOnAxis: PointName;
  readonly initialMeasuredGroup: CollectionObjectName;
  readonly rotationalTolerance?: ToleranceVectorOptions;
}

// Member of BriosaClient
interface BriosaClient {
  alignTwoTargetsWithAxisWcfX(
    input: AlignTwoTargetsWithAxisWcfXInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Interface Response Timeout {/* #get-instrument-interface-response-timeout */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-interface-response-timeout) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-interface-response-timeout)

```ts
// Member of BriosaClient
interface BriosaClient {
  getInstrumentInterfaceResponseTimeout(
    instrument: CollectionInstrumentId,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `timeout` | Time in seconds. |

## Set Instrument Interface Response Timeout {/* #set-instrument-interface-response-timeout */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-interface-response-timeout) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-interface-response-timeout)

```ts
// Member of BriosaClient
interface BriosaClient {
  setInstrumentInterfaceResponseTimeout(
    instrument: CollectionInstrumentId,
    timeout?: number,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `timeout` | Time in seconds. |

## Get Current Trapping Status {/* #get-current-trapping-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-current-trapping-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-current-trapping-status)

```ts
// Member of BriosaClient
interface BriosaClient {
  getCurrentTrappingStatus(
    callOptions?: BriosaCallOptions,
  ): Promise<CurrentTrappingStatus>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Wait For Trapping To Complete {/* #wait-for-trapping-to-complete */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#wait-for-trapping-to-complete) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#wait-for-trapping-to-complete)

```ts
// Member of BriosaClient
interface BriosaClient {
  waitForTrappingToComplete(callOptions?: BriosaCallOptions): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Jump Instrument To New Location {/* #jump-instrument-to-new-location */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#jump-instrument-to-new-location) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#jump-instrument-to-new-location)

```ts
export interface JumpInstrumentToNewLocationInput {
  readonly liveInstrument: CollectionInstrumentId;
  readonly hidePreviousInstrument?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  jumpInstrumentToNewLocation(
    input: JumpInstrumentToNewLocationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Quick Align {/* #quick-align */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#quick-align) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#quick-align)

```ts
export interface QuickAlignInput {
  readonly instruments: Iterable<CollectionInstrumentId>;
  readonly objects: Iterable<CollectionObjectName>;
  readonly nominalPoints?: Iterable<PointName>;
  readonly nominalPointOfViewNames?: Iterable<string>;
  readonly alignToIndividualFacesOnly?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  quickAlign(
    input: QuickAlignInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Align Cloud to CAD {/* #align-cloud-to-cad */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-cloud-to-cad) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#align-cloud-to-cad)

```ts
export interface AlignCloudToCadInput {
  readonly cloud: CollectionObjectName;
  readonly surfaces: Iterable<CollectionObjectName>;
  readonly maximumCoarseCadMeshEdgeLength?: number;
  readonly useFineCadMesh?: boolean;
  readonly executeAlignment?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  alignCloudToCad(
    input: AlignCloudToCadInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CloudToCadAlignmentResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start GD&amp;T Inspection Design {/* #start-gdt-inspection-design */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-design) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#start-gdt-inspection-design)

```ts
export interface StartGdtInspectionDesignInput {
  readonly collection: CollectionName;
  readonly filter?: InspectionFilter;
}

// Member of BriosaClient
interface BriosaClient {
  startGdtInspectionDesign(
    input: StartGdtInspectionDesignInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start GD&amp;T Inspection Rehearse {/* #start-gdt-inspection-rehearse */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-rehearse) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#start-gdt-inspection-rehearse)

```ts
export interface StartGdtInspectionRehearseInput {
  readonly collection: CollectionName;
  readonly filter?: InspectionFilter;
}

// Member of BriosaClient
interface BriosaClient {
  startGdtInspectionRehearse(
    input: StartGdtInspectionRehearseInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start GD&amp;T Inspection {/* #start-gdt-inspection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#start-gdt-inspection)

```ts
export interface StartGdtInspectionInput {
  readonly instrument: CollectionInstrumentId;
  readonly collection: CollectionName;
  readonly filter?: InspectionFilter;
}

// Member of BriosaClient
interface BriosaClient {
  startGdtInspection(
    input: StartGdtInspectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Remeasure Failed Checks Only {/* #set-remeasure-failed-checks-only */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-remeasure-failed-checks-only) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-remeasure-failed-checks-only)

```ts
export interface SetRemeasureFailedChecksOnlyInput {
  readonly collection: CollectionName;
}

// Member of BriosaClient
interface BriosaClient {
  setRemeasureFailedChecksOnly(
    input: SetRemeasureFailedChecksOnlyInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Associate Objects with Instrument {/* #associate-objects-with-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#associate-objects-with-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#associate-objects-with-instrument)

```ts
export interface AssociateObjectsWithInstrumentInput {
  readonly instrument: CollectionInstrumentId;
  readonly objects: readonly CollectionObjectName[];
}

// Member of BriosaClient
interface BriosaClient {
  associateObjectsWithInstrument(
    input: AssociateObjectsWithInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Disassociate Objects from Instrument {/* #disassociate-objects-from-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#disassociate-objects-from-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#disassociate-objects-from-instrument)

```ts
export interface DisassociateObjectsFromInstrumentInput {
  readonly objects: readonly CollectionObjectName[];
}

// Member of BriosaClient
interface BriosaClient {
  disassociateObjectsFromInstrument(
    input: DisassociateObjectsFromInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Collection Object Name Ref List from Objects associated with Instruments {/* #make-collection-object-name-ref-list-from-objects-associated-with-instruments */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments)

```ts
export interface MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsInput {
  readonly instruments: readonly CollectionInstrumentId[];
}

// Member of BriosaClient
interface BriosaClient {
  makeCollectionObjectNameRefListFromObjectsAssociatedWithInstruments(
    input: MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Combine Point Groups {/* #combine-point-groups */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#combine-point-groups) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#combine-point-groups)

```ts
export interface CombinePointGroupsInput {
  readonly groupsToCombine: readonly CollectionObjectName[];
  readonly combinedPointGroup: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  combinePointGroups(
    input: CombinePointGroupsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Dissect Point Group {/* #dissect-point-group */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#dissect-point-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#dissect-point-group)

```ts
export interface DissectPointGroupInput {
  readonly groupToDissect: CollectionObjectName;
  readonly baseNameForDissectedGroups: string;
}

// Member of BriosaClient
interface BriosaClient {
  dissectPointGroup(
    input: DissectPointGroupInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Synchronized Measurement (Master/Slave) {/* #synchronized-measurement-masterslave */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#synchronized-measurement-masterslave) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#synchronized-measurement-masterslave)

```ts
export interface SynchronizedMeasurementMasterSlaveInput {
  readonly masterInstrument: CollectionInstrumentId;
  readonly slaveInstrument: CollectionInstrumentId;
  readonly slaveGroupSuffix?: string;
  readonly locateOneOfTheInstruments?: boolean;
  readonly locateMaster?: boolean;
  readonly waitForCompletion?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  synchronizedMeasurementMasterSlave(
    input: SynchronizedMeasurementMasterSlaveInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create New Dynamic Reference {/* #create-new-dynamic-reference */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#create-new-dynamic-reference) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#create-new-dynamic-reference)

```ts
export interface CreateNewDynamicReferenceInput {
  readonly instrument: CollectionInstrumentId;
  readonly pointsDefiningDynamicReference: readonly PointName[];
  readonly dynamicReferenceName: string;
}

// Member of BriosaClient
interface BriosaClient {
  createNewDynamicReference(
    input: CreateNewDynamicReferenceInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Calculate TCP Fixture Uncertainties {/* #calculate-tcp-fixture-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#calculate-tcp-fixture-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#calculate-tcp-fixture-uncertainties)

```ts
export interface CalculateTcpFixtureUncertaintiesInput {
  readonly tcpFixture: CollectionObjectName;
  readonly tcpMeasurements: readonly PointName[];
  readonly tcpInWorking?: Transform;
}

// Member of BriosaClient
interface BriosaClient {
  calculateTcpFixtureUncertainties(
    input: CalculateTcpFixtureUncertaintiesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<TcpFixtureUncertainties>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct TCP Fixture {/* #construct-tcp-fixture */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-tcp-fixture) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#construct-tcp-fixture)

```ts
export interface ConstructTcpFixtureInput {
  readonly requestedTcpFixture: CollectionObjectName;
  readonly pointMatchThreshold?: number;
  readonly replaceExistingTcpFixture?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructTcpFixture(
    input: ConstructTcpFixtureInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CollectionObjectName>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Nominal Point to TCP Fixture {/* #add-nominal-point-to-tcp-fixture */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#add-nominal-point-to-tcp-fixture) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#add-nominal-point-to-tcp-fixture)

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

// Member of BriosaClient
interface BriosaClient {
  addNominalPointToTcpFixture(
    input: AddNominalPointToTcpFixtureInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Last Solved TCP Fixture Uncertainty Covariance Matrix {/* #get-last-solved-tcp-fixture-uncertainty-covariance-matrix */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix)

```ts
export interface GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixInput {
  readonly tcpFixture: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  getLastSolvedTcpFixtureUncertaintyCovarianceMatrix(
    input: GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixInput,
    callOptions?: BriosaCallOptions,
  ): Promise<UncertaintyCovarianceMatrix>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Base Uncertainty Covariance Matrix WRT Base {/* #set-instrument-base-uncertainty-covariance-matrix-wrt-base */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base)

```ts
// Member of BriosaClient
interface BriosaClient {
  setInstrumentBaseUncertaintyCovarianceMatrixWrtBase(
    input: SetInstrumentBaseUncertaintyCovarianceMatrixInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Base Uncertainty Covariance Matrix WRT WORLD {/* #set-instrument-base-uncertainty-covariance-matrix-wrt-world */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world)

```ts
// Member of BriosaClient
interface BriosaClient {
  setInstrumentBaseUncertaintyCovarianceMatrixWrtWorld(
    input: SetInstrumentBaseUncertaintyCovarianceMatrixInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Base Uncertainty Covariance Matrix WRT WORLD {/* #get-instrument-base-uncertainty-covariance-matrix-wrt-world */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world)

```ts
export interface GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getInstrumentBaseUncertaintyCovarianceMatrixWrtWorld(
    input: GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldInput,
    callOptions?: BriosaCallOptions,
  ): Promise<UncertaintyCovarianceMatrix>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Measured Point Uncertainty Ellipsoids {/* #construct-measured-point-uncertainty-ellipsoids */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-measured-point-uncertainty-ellipsoids) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#construct-measured-point-uncertainty-ellipsoids)

```ts
export interface ConstructMeasuredPointUncertaintyEllipsoidsInput {
  readonly measurements: readonly PointName[];
}

// Member of BriosaClient
interface BriosaClient {
  constructMeasuredPointUncertaintyEllipsoids(
    input: ConstructMeasuredPointUncertaintyEllipsoidsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get WRTL Channel and Status {/* #get-wrtl-channel-and-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-wrtl-channel-and-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-wrtl-channel-and-status)

```ts
export interface GetWrtlChannelAndStatusInput {
  readonly instrument: CollectionInstrumentId;
}

// Member of BriosaClient
interface BriosaClient {
  getWrtlChannelAndStatus(
    input: GetWrtlChannelAndStatusInput,
    callOptions?: BriosaCallOptions,
  ): Promise<WrtlChannelStatus>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set WRTL Channel {/* #set-wrtl-channel */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-wrtl-channel) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-wrtl-channel)

```ts
export interface SetWrtlChannelInput {
  readonly instrument: CollectionInstrumentId;
  readonly channel?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setWrtlChannel(
    input: SetWrtlChannelInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Types {/* #types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getLastInstrumentIndex {/* #getlastinstrumentindex */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## renameInstrument {/* #renameinstrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentIdFromName {/* #getinstrumentidfromname */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentModel {/* #getinstrumentmodel */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## moveInstrumentToAnotherCollection {/* #moveinstrumenttoanothercollection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## saveInstrumentConfiguration {/* #saveinstrumentconfiguration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## loadInstrumentConfiguration {/* #loadinstrumentconfiguration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## exportInstrumentHistoryToXmlFile {/* #exportinstrumenthistorytoxmlfile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## pointAtTarget {/* #pointattarget */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## measureSinglePointHere {/* #measuresinglepointhere */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getCurrentInstrumentPositionUpdate {/* #getcurrentinstrumentpositionupdate */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## buildTarget {/* #buildtarget */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## measureExistingSinglePoint {/* #measureexistingsinglepoint */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## measureExistingSinglePointManualGuide {/* #measureexistingsinglepointmanualguide */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## measureExistingSinglePointAndCompare {/* #measureexistingsinglepointandcompare */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setProbeOffsetFrameOnline {/* #setprobeoffsetframeonline */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setProbeOffsetFrameOffline {/* #setprobeoffsetframeoffline */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## stopActiveMeasurementMode {/* #stopactivemeasurementmode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## enableDisableFrameSetScanModeAllInstruments {/* #enabledisableframesetscanmodeallinstruments */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## enableDisableFrameSetScanModeByInstrument {/* #enabledisableframesetscanmodebyinstrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## enableDisablePointSetScanMode {/* #enabledisablepointsetscanmode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## addNewInstrument {/* #addnewinstrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## deleteInstrument {/* #deleteinstrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## deleteMeasurements {/* #deletemeasurements */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## deleteMeasurementObservation {/* #deletemeasurementobservation */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## moveMeasurementObservation {/* #movemeasurementobservation */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## initiateServoGuide {/* #initiateservoguide */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## startTheodoliteInterface {/* #starttheodoliteinterface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## startInstrumentInterface {/* #startinstrumentinterface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## stopInstrumentInterface {/* #stopinstrumentinterface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## activateDeactivateInstrumentToolbar {/* #activatedeactivateinstrumenttoolbar */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## verifyInstrumentConnection {/* #verifyinstrumentconnection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## configureAndMeasure {/* #configureandmeasure */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setXyzReferenceFrameInstrumentBaseAnchorFrame {/* #setxyzreferenceframeinstrumentbaseanchorframe */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## dockInstrumentInterface {/* #dockinstrumentinterface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## locateInstrumentRefTieIn {/* #locateinstrumentreftiein */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## locateInstrumentGroupToSurfaceQuickFit {/* #locateinstrumentgrouptosurfacequickfit */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## multiMeasurementInitiate {/* #multimeasurementinitiate */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## multiMeasurementStop {/* #multimeasurementstop */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## alignLaserProjector {/* #alignlaserprojector */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## locateInstrumentsUsmn {/* #locateinstrumentsusmn */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## createTemplatedInstrumentUsmn {/* #createtemplatedinstrumentusmn */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## locateInstrumentBestFitGroupToGroup {/* #locateinstrumentbestfitgrouptogroup */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## locateInstrumentBestFitNominalGeometry {/* #locateinstrumentbestfitnominalgeometry */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentTransform {/* #getinstrumenttransform */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setInstrumentTransform {/* #setinstrumenttransform */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getTrackerEdmTheodoliteUncertainties {/* #gettrackeredmtheodoliteuncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setTrackerEdmTheodoliteUncertainties {/* #settrackeredmtheodoliteuncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getPcmmInstrumentXyzUncertainties {/* #getpcmminstrumentxyzuncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setPcmmInstrumentXyzUncertainties {/* #setpcmminstrumentxyzuncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getXyzInstrumentUncertainties {/* #getxyzinstrumentuncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setXyzInstrumentUncertainties {/* #setxyzinstrumentuncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## guideObjectsIn6dBasedOnPointMeasurements {/* #guideobjectsin6dbasedonpointmeasurements */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## moveObjectsIn6dUsingInstrumentUpdates {/* #moveobjectsin6dusinginstrumentupdates */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## alignTwoTargetsWithAxisWcfX {/* #aligntwotargetswithaxiswcfx */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentInterfaceResponseTimeout {/* #getinstrumentinterfaceresponsetimeout */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setInstrumentInterfaceResponseTimeout {/* #setinstrumentinterfaceresponsetimeout */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getCurrentTrappingStatus {/* #getcurrenttrappingstatus */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## waitForTrappingToComplete {/* #waitfortrappingtocomplete */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## jumpInstrumentToNewLocation {/* #jumpinstrumenttonewlocation */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## quickAlign {/* #quickalign */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## alignCloudToCad {/* #aligncloudtocad */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentWeatherSetting {/* #getinstrumentweathersetting */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setInstrumentWeatherSetting {/* #setinstrumentweathersetting */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentPartTemperature {/* #getinstrumentparttemperature */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## computeCteScaleFactor {/* #computectescalefactor */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setMultiplyInstrumentScaleFactor {/* #setmultiplyinstrumentscalefactor */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setAbsoluteInstrumentScaleFactor {/* #setabsoluteinstrumentscalefactor */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentScaleFactor {/* #getinstrumentscalefactor */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## transformInstrumentFrameToFrame {/* #transforminstrumentframetoframe */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## transformInstrumentByDelta {/* #transforminstrumentbydelta */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## transformMultipleInstrumentsByDelta {/* #transformmultipleinstrumentsbydelta */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## instrumentOperationalCheck {/* #instrumentoperationalcheck */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getNumberOfObservationsOnTarget {/* #getnumberofobservationsontarget */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentsWithObservationsOnTarget {/* #getinstrumentswithobservationsontarget */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getTargetsMeasuredByInstrument {/* #gettargetsmeasuredbyinstrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setObservationStatus {/* #setobservationstatus */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getObservationInfo {/* #getobservationinfo */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## fabricateObservations {/* #fabricateobservations */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getObscuredPointsFromInstrument {/* #getobscuredpointsfrominstrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentTargetsAndModeProfiles {/* #getinstrumenttargetsandmodeprofiles */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setInstrumentMeasurementModeProfile {/* #setinstrumentmeasurementmodeprofile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setInstrumentGroupAndTarget {/* #setinstrumentgroupandtarget */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setInstrumentTargeting {/* #setinstrumenttargeting */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentMeasurementModeProfile {/* #getinstrumentmeasurementmodeprofile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentGroupAndTarget {/* #getinstrumentgroupandtarget */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentTargeting {/* #getinstrumenttargeting */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setTargetComputationOptions {/* #settargetcomputationoptions */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setObservationMirrorCubeShotFace {/* #setobservationmirrorcubeshotface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setObservationCollimationShotOptions {/* #setobservationcollimationshotoptions */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentTargetStatus {/* #getinstrumenttargetstatus */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeSurfaceFaceListFromPointProximity {/* #makesurfacefacelistfrompointproximity */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## scanWithinPerimeter {/* #scanwithinperimeter */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## editScanPerimeterProfile {/* #editscanperimeterprofile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getEstimatedScanTime {/* #getestimatedscantime */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## constructPerimetersFromSurfaceFaceList {/* #constructperimetersfromsurfacefacelist */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## scanCadFaces {/* #scancadfaces */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## edgeScanMeasurement {/* #edgescanmeasurement */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## trackTapeMeasurement {/* #tracktapemeasurement */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## autoMeasurePoints {/* #automeasurepoints */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## autoMeasureVectors {/* #automeasurevectors */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## autoMeasureSurfaceVectorIntersections {/* #automeasuresurfacevectorintersections */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## autoMeasureSpecifiedGeometry {/* #automeasurespecifiedgeometry */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## autoMeasureBatchOfFeatures {/* #automeasurebatchoffeatures */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## autoCorrespondClosestPoint {/* #autocorrespondclosestpoint */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## closeAutoCorrespondClosestPointDialog {/* #closeautocorrespondclosestpointdialog */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## autoCorrespondWithProximityTrigger {/* #autocorrespondwithproximitytrigger */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## constructMirrorFromPlane {/* #constructmirrorfromplane */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## constructMirrorFromTwoPoints {/* #constructmirrorfromtwopoints */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## driftCheck {/* #driftcheck */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## measureNominalFeature {/* #measurenominalfeature */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## startGdtInspectionDesign {/* #startgdtinspectiondesign */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## startGdtInspectionRehearse {/* #startgdtinspectionrehearse */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## startGdtInspection {/* #startgdtinspection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInspectionVerificationMode {/* #getinspectionverificationmode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setInspectionVerificationMode {/* #setinspectionverificationmode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setRemeasureFailedChecksOnly {/* #setremeasurefailedchecksonly */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## associateObjectsWithInstrument {/* #associateobjectswithinstrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## disassociateObjectsFromInstrument {/* #disassociateobjectsfrominstrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeCollectionObjectNameRefListFromObjectsAssociatedWithInstruments {/* #makecollectionobjectnamereflistfromobjectsassociatedwithinstruments */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## combinePointGroups {/* #combinepointgroups */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## dissectPointGroup {/* #dissectpointgroup */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## synchronizedMeasurementMasterSlave {/* #synchronizedmeasurementmasterslave */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## createNewDynamicReference {/* #createnewdynamicreference */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## calculateTcpFixtureUncertainties {/* #calculatetcpfixtureuncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## constructTcpFixture {/* #constructtcpfixture */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## addNominalPointToTcpFixture {/* #addnominalpointtotcpfixture */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getLastSolvedTcpFixtureUncertaintyCovarianceMatrix {/* #getlastsolvedtcpfixtureuncertaintycovariancematrix */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setInstrumentBaseUncertaintyCovarianceMatrixWrtBase {/* #setinstrumentbaseuncertaintycovariancematrixwrtbase */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setInstrumentBaseUncertaintyCovarianceMatrixWrtWorld {/* #setinstrumentbaseuncertaintycovariancematrixwrtworld */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getInstrumentBaseUncertaintyCovarianceMatrixWrtWorld {/* #getinstrumentbaseuncertaintycovariancematrixwrtworld */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## constructMeasuredPointUncertaintyEllipsoids {/* #constructmeasuredpointuncertaintyellipsoids */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getWrtlChannelAndStatus {/* #getwrtlchannelandstatus */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setWrtlChannel {/* #setwrtlchannel */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/f98eef683c941bf289c1d0ec411c13a1903bcca4/targets/2024.1.0508.5)
