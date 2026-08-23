---
title: Robot Operations
description: Next Briosa JavaScript and TypeScript APIs for reviewed Robot Operations MP commands.
toc_max_heading_level: 2
---

# Robot Operations

:::note[Next JavaScript and TypeScript Contract]

These functions cover all thirty-three group commands and are not
released support until this documentation is versioned for a published package.

:::

## Shared Types

```ts
export type RobotModelLinkType = "DH" | "6DOF";

export type RobotActiveJointComponent =
  | "NONE"
  | "X"
  | "Y"
  | "Z"
  | "Rx"
  | "Ry"
  | "Rz"
  | "Alpha"
  | "A"
  | "D"
  | "THETA";

export interface RobotModelLinkConfiguration {
  readonly linkType?: RobotModelLinkType;
  readonly dhAlphaComponent?: number;
  readonly dhAComponent?: number;
  readonly dhDComponent?: number;
  readonly dhThetaComponent?: number;
  readonly dhXAxisDeflectionFactor?: number;
  readonly dhYAxisDeflectionFactor?: number;
  readonly dhZAxisDeflectionFactor?: number;
  readonly sixDofXComponent?: number;
  readonly sixDofYComponent?: number;
  readonly sixDofZComponent?: number;
  readonly sixDofRxComponent?: number;
  readonly sixDofRyComponent?: number;
  readonly sixDofRzComponent?: number;
  readonly activeJointComponent?: RobotActiveJointComponent;
  readonly encoderOffsetValue?: number;
  readonly minimumEncoderLimit?: number;
  readonly maximumEncoderLimit?: number;
  readonly encoderSenseNegative?: boolean;
  readonly includeAdditionalEncoder?: boolean;
  readonly additionalEncoderIndexOffset?: number;
  readonly additionalEncoderSenseNegative?: boolean;
  readonly segmentOriginMassKg?: number;
  readonly segmentCgMassKg?: number;
  readonly segmentCgInSegment?: Vector;
}

export interface RobotModelLinkParameters {
  readonly configuration: Required<RobotModelLinkConfiguration>;
  readonly encoderValue: number;
}

export interface RobotCalibrationMetrics {
  readonly xyzMax: number;
  readonly xyzAverage: number;
  readonly xyzRms: number;
  readonly orientMax: number;
  readonly orientAverage: number;
  readonly orientRms: number;
  readonly robustness: number;
}
```

Omitted configuration properties use the exact MP defaults.
`sixDofZComponent` maps internally to the exact SDK literal
`6DPF Z Component`.

## addRobotMachineSaMachine

[MP command](/mp-command-catalog/commands/robot-operations#add-robotmachine-samachine) · [gRPC contract](/api/grpc/robot-operations#add-robotmachine-samachine)

```ts
export interface AddRobotMachineSaMachineInput {
  readonly saMachineFile: FileReference;
}

function addRobotMachineSaMachine(
  briosa: BriosaClient,
  input: AddRobotMachineSaMachineInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## addRobotMachineManipKin

[MP command](/mp-command-catalog/commands/robot-operations#add-robotmachine-manipkin) · [gRPC contract](/api/grpc/robot-operations#add-robotmachine-manipkin)

```ts
export interface AddRobotMachineManipKinInput {
  readonly manipKinFile: FileReference;
}

function addRobotMachineManipKin(
  briosa: BriosaClient,
  input: AddRobotMachineManipKinInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Both functions accept the shared local-SA path or embedded-file representation.

## deleteRobotMachine

[MP command](/mp-command-catalog/commands/robot-operations#delete-robotmachine) · [gRPC contract](/api/grpc/robot-operations#delete-robotmachine)

```ts
export interface DeleteRobotMachineInput {
  readonly machineId: CollectionMachineId;
}

function deleteRobotMachine(
  briosa: BriosaClient,
  input: DeleteRobotMachineInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## moveRobotMachineToFrame

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-frame) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-to-frame)

```ts
export interface MoveRobotMachineToFrameInput {
  readonly machineId: CollectionMachineId;
  readonly destinationFrame: CollectionObjectName;
  readonly useSaKinematics?: boolean;
  readonly acknowledgeArrival?: boolean;
}

function moveRobotMachineToFrame(
  briosa: BriosaClient,
  input: MoveRobotMachineToFrameInput,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

Both booleans default to `false`.

## moveRobotMachineThroughPath

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-through-path) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-through-path)

```ts
export interface MoveRobotMachineThroughPathInput {
  readonly machineId: CollectionMachineId;
  readonly pathFrames: Iterable<CollectionObjectName>;
  readonly useSaKinematics?: boolean;
  readonly linearSegments?: boolean;
  readonly acknowledgeArrival?: boolean;
}

function moveRobotMachineThroughPath(
  briosa: BriosaClient,
  input: MoveRobotMachineThroughPathInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The three defaults are `true`, `false`, and `true`, respectively.

## moveRobotMachineToNamedDestination

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-named-destination) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-to-named-destination)

```ts
export interface MoveRobotMachineToNamedDestinationInput {
  readonly machineId: CollectionMachineId;
  readonly destinationName?: string;
  readonly acknowledgeArrival?: boolean;
}

function moveRobotMachineToNamedDestination(
  briosa: BriosaClient,
  input: MoveRobotMachineToNamedDestinationInput,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

The destination defaults to the empty string and arrival acknowledgement
defaults to `false`.

## setRobotMachineParameter

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-parameter) · [gRPC contract](/api/grpc/robot-operations#set-robotmachine-parameter)

```ts
export interface SetRobotMachineParameterInput {
  readonly machineId: CollectionMachineId;
  readonly parameterName?: string;
  readonly parameterValue?: number;
}

function setRobotMachineParameter(
  briosa: BriosaClient,
  input: SetRobotMachineParameterInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## getRobotMachineParameter

[MP command](/mp-command-catalog/commands/robot-operations#get-robotmachine-parameter) · [gRPC contract](/api/grpc/robot-operations#get-robotmachine-parameter)

```ts
export interface GetRobotMachineParameterInput {
  readonly machineId: CollectionMachineId;
  readonly parameterName?: string;
}

function getRobotMachineParameter(
  briosa: BriosaClient,
  input: GetRobotMachineParameterInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

Parameter names and values are passed through without a machine-specific
allowlist.

## setRobotMachineModelLinkParameters

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-model-link-parameters) · [gRPC contract](/api/grpc/robot-operations#set-robotmachine-model-link-parameters)

```ts
export interface SetRobotMachineModelLinkParametersInput {
  readonly machineId: CollectionMachineId;
  readonly linkName?: string;
  readonly configuration?: RobotModelLinkConfiguration;
}

function setRobotMachineModelLinkParameters(
  briosa: BriosaClient,
  input: SetRobotMachineModelLinkParametersInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitting `configuration` uses every exact MP default. Briosa adds no kinematic
or encoder-range validation.

## getRobotMachineModelLinkParameters

[MP command](/mp-command-catalog/commands/robot-operations#get-robotmachine-model-link-parameters) · [gRPC contract](/api/grpc/robot-operations#get-robotmachine-model-link-parameters)

```ts
export interface GetRobotMachineModelLinkParametersInput {
  readonly machineId: CollectionMachineId;
  readonly linkName?: string;
}

function getRobotMachineModelLinkParameters(
  briosa: BriosaClient,
  input: GetRobotMachineModelLinkParametersInput,
  options?: BriosaCallOptions,
): Promise<RobotModelLinkParameters>;
```

The result includes all exact-target outputs, including `encoderValue`.

## setRobotMachineBaseTransform

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-base-transform) · [gRPC contract](/api/grpc/robot-operations#set-robotmachine-base-transform)

```ts
export interface SetRobotMachineBaseTransformInput {
  readonly machineId: CollectionMachineId;
  readonly destinationTransform?: Transform;
  readonly referenceFrame: CollectionObjectName;
  readonly numberOfSteps?: number;
}

function setRobotMachineBaseTransform(
  briosa: BriosaClient,
  input: SetRobotMachineBaseTransformInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitting the transform uses identity, and `numberOfSteps` defaults to `0`.

## startRobotMachineInterface

[MP command](/mp-command-catalog/commands/robot-operations#start-robotmachine-interface) · [gRPC contract](/api/grpc/robot-operations#start-robotmachine-interface)

```ts
export interface StartRobotMachineInterfaceInput {
  readonly machineId: CollectionMachineId;
  readonly interfaceType?: number;
  readonly runInSimulation?: boolean;
}

function startRobotMachineInterface(
  briosa: BriosaClient,
  input: StartRobotMachineInterfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Interface type `0` runs the SARobotDriver; simulation defaults to `false`.

## stopRobotMachineInterface

[MP command](/mp-command-catalog/commands/robot-operations#stop-robotmachine-interface) · [gRPC contract](/api/grpc/robot-operations#stop-robotmachine-interface)

```ts
export interface StopRobotMachineInterfaceInput {
  readonly machineId: CollectionMachineId;
}

function stopRobotMachineInterface(
  briosa: BriosaClient,
  input: StopRobotMachineInterfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## computeRobotMachineAdjustedGoalFrame

[MP command](/mp-command-catalog/commands/robot-operations#compute-robotmachine-adjusted-goal-frame) · [gRPC contract](/api/grpc/robot-operations#compute-robotmachine-adjusted-goal-frame)

```ts
export interface ComputeRobotMachineAdjustedGoalFrameInput {
  readonly originalGoalFrame: CollectionObjectName;
  readonly lastAdjustedGoalFrame: CollectionObjectName;
  readonly actualMeasuredFrame: CollectionObjectName;
  readonly modifiedGoalFrame: CollectionObjectName;
}

function computeRobotMachineAdjustedGoalFrame(
  briosa: BriosaClient,
  input: ComputeRobotMachineAdjustedGoalFrameInput,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

The caller owns every Frame and iteration in the adjusted-goal workflow.

## moveRobotMachineToJointPoseSixDof

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-joint-pose-6dof) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-to-joint-pose-6dof)

```ts
export interface MoveRobotMachineToJointPoseSixDofInput {
  readonly machineId: CollectionMachineId;
  readonly joint1?: number;
  readonly joint2?: number;
  readonly joint3?: number;
  readonly joint4?: number;
  readonly joint5?: number;
  readonly joint6?: number;
}

function moveRobotMachineToJointPoseSixDof(
  briosa: BriosaClient,
  input: MoveRobotMachineToJointPoseSixDofInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

All six joint values default to `0.0`.

## simulateRobotMachinePathOutputCsvFile

[MP command](/mp-command-catalog/commands/robot-operations#simulate-robotmachine-path-output-csv-file) · [gRPC contract](/api/grpc/robot-operations#simulate-robotmachine-path-output-csv-file)

```ts
export interface SimulateRobotMachinePathOutputCsvFileInput {
  readonly machineId: CollectionMachineId;
  readonly pathFrames: Iterable<CollectionObjectName>;
  readonly outputCsvFile: FileReference;
}

function simulateRobotMachinePathOutputCsvFile(
  briosa: BriosaClient,
  input: SimulateRobotMachinePathOutputCsvFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## createRobotCalibration

[MP command](/mp-command-catalog/commands/robot-operations#create-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#create-robot-calibration)

```ts
export interface CreateRobotCalibrationInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
}

function createRobotCalibration(
  briosa: BriosaClient,
  input: CreateRobotCalibrationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## deleteRobotCalibration

[MP command](/mp-command-catalog/commands/robot-operations#delete-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#delete-robot-calibration)

```ts
export interface DeleteRobotCalibrationInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
}

function deleteRobotCalibration(
  briosa: BriosaClient,
  input: DeleteRobotCalibrationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## importPosesMatchToMeasurements

[MP command](/mp-command-catalog/commands/robot-operations#import-poses-match-to-measurements) · [gRPC contract](/api/grpc/robot-operations#import-poses-match-to-measurements)

```ts
export interface ImportPosesMatchToMeasurementsInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly pointNames: Iterable<PointName>;
  readonly csvJointSetFile: FileReference;
}

function importPosesMatchToMeasurements(
  briosa: BriosaClient,
  input: ImportPosesMatchToMeasurementsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## importPosesMatchToFrames

[MP command](/mp-command-catalog/commands/robot-operations#import-poses-match-to-frames) · [gRPC contract](/api/grpc/robot-operations#import-poses-match-to-frames)

```ts
export interface ImportPosesMatchToFramesInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly frameNames: Iterable<CollectionObjectName>;
  readonly csvJointSetFile: FileReference;
}

function importPosesMatchToFrames(
  briosa: BriosaClient,
  input: ImportPosesMatchToFramesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Both import functions use the shared local-SA path or embedded-file
representation.

## performRobotCalibration

[MP command](/mp-command-catalog/commands/robot-operations#perform-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#perform-robot-calibration)

```ts
export interface PerformRobotCalibrationInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly setCurrentBaseAsNominal?: boolean;
  readonly showInterface?: boolean;
  readonly allowedOutlierRejectionCount?: number;
  readonly allowableMaximumError?: number;
  readonly allowableAverageError?: number;
}

function performRobotCalibration(
  briosa: BriosaClient,
  input: PerformRobotCalibrationInput,
  options?: BriosaCallOptions,
): Promise<RobotCalibrationMetrics>;
```

The exact SDK contract cannot set the composite `Degrees of Freedom` MP input,
so this function omits it. The result contains all seven exact-target metrics.

## performRobotCalibrationAlternate

[MP command](/mp-command-catalog/commands/robot-operations#perform-robot-calibration-alternate) · [gRPC contract](/api/grpc/robot-operations#perform-robot-calibration-alternate)

```ts
export interface PerformRobotCalibrationAlternateInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly setCurrentBaseAsNominal?: boolean;
  readonly baseDegreesOfFreedom?: string;
  readonly robotDegreesOfFreedom?: string;
  readonly toolDegreesOfFreedom?: string;
  readonly showInterface?: boolean;
  readonly allowedOutlierRejectionCount?: number;
  readonly allowableMaximumError?: number;
  readonly allowableAverageError?: number;
}

function performRobotCalibrationAlternate(
  briosa: BriosaClient,
  input: PerformRobotCalibrationAlternateInput,
  options?: BriosaCallOptions,
): Promise<RobotCalibrationMetrics>;
```

The three DOF strings are passed directly to SA without client interpretation.

## startStopRobotCalibrationTrapping

[MP command](/mp-command-catalog/commands/robot-operations#startstop-robot-calibration-trapping) · [gRPC contract](/api/grpc/robot-operations#startstop-robot-calibration-trapping)

```ts
export interface StartStopRobotCalibrationTrappingInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly instrumentId: CollectionInstrumentId;
  readonly startTrapping?: boolean;
}

function startStopRobotCalibrationTrapping(
  briosa: BriosaClient,
  input: StartStopRobotCalibrationTrappingInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`startTrapping` defaults to `false`, which stops trapping. The client retains
no trapping state.

## setActiveRobotCalibration

[MP command](/mp-command-catalog/commands/robot-operations#set-active-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#set-active-robot-calibration)

```ts
export interface SetActiveRobotCalibrationInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
}

function setActiveRobotCalibration(
  briosa: BriosaClient,
  input: SetActiveRobotCalibrationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## setRobotCalibrationToolFrame

[MP command](/mp-command-catalog/commands/robot-operations#set-robot-calibration-tool-frame) · [gRPC contract](/api/grpc/robot-operations#set-robot-calibration-tool-frame)

```ts
export interface SetRobotCalibrationToolFrameInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly toolFrameRelativeToFlange?: Transform;
}

function setRobotCalibrationToolFrame(
  briosa: BriosaClient,
  input: SetRobotCalibrationToolFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitting the transform uses the exact identity-transform default.

## setRobotCalibrationMeasurementOffsetInToolFrame

[MP command](/mp-command-catalog/commands/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame) · [gRPC contract](/api/grpc/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame)

```ts
export interface SetRobotCalibrationMeasurementOffsetInToolFrameInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly measurementFrameRelativeToTool?: Transform;
}

function setRobotCalibrationMeasurementOffsetInToolFrame(
  briosa: BriosaClient,
  input: SetRobotCalibrationMeasurementOffsetInToolFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitting the transform uses the exact identity-transform default.

## getRobotPoseForAFrame

[MP command](/mp-command-catalog/commands/robot-operations#get-robot-pose-for-a-frame) · [gRPC contract](/api/grpc/robot-operations#get-robot-pose-for-a-frame)

```ts
export interface GetRobotPoseForAFrameInput {
  readonly machineId: CollectionMachineId;
  readonly goalFrame: CollectionObjectName;
  readonly referencePose?: Iterable<number>;
  readonly goalPoseCount: number;
}

function getRobotPoseForAFrame(
  briosa: BriosaClient,
  input: GetRobotPoseForAFrameInput,
  options?: BriosaCallOptions,
): Promise<readonly number[]>;
```

An omitted reference pose tells SA to use the current robot pose.
`goalPoseCount` is required SDK retrieval metadata.

## getCalibrationApplianceIntegerValue

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-integer-value) · [gRPC contract](/api/grpc/robot-operations#get-calibration-appliance-integer-value)

```ts
export interface GetCalibrationApplianceIntegerValueInput {
  readonly indexOffset?: number;
}

function getCalibrationApplianceIntegerValue(
  briosa: BriosaClient,
  input?: GetCalibrationApplianceIntegerValueInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

## setCalibrationApplianceIntegerValue

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-integer-value) · [gRPC contract](/api/grpc/robot-operations#set-calibration-appliance-integer-value)

```ts
export interface SetCalibrationApplianceIntegerValueInput {
  readonly indexOffset?: number;
  readonly integerValue?: number;
}

function setCalibrationApplianceIntegerValue(
  briosa: BriosaClient,
  input?: SetCalibrationApplianceIntegerValueInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## getCalibrationApplianceRealValue

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-real-value) · [gRPC contract](/api/grpc/robot-operations#get-calibration-appliance-real-value)

```ts
export interface GetCalibrationApplianceRealValueInput {
  readonly indexOffset?: number;
}

function getCalibrationApplianceRealValue(
    briosa: BriosaClient,
    input?: GetCalibrationApplianceRealValueInput,
    options?: BriosaCallOptions,
): Promise<number>;
```

## setCalibrationApplianceRealValue

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-real-value) · [gRPC contract](/api/grpc/robot-operations#set-calibration-appliance-real-value)

```ts
export interface SetCalibrationApplianceRealValueInput {
  readonly indexOffset?: number;
  readonly realValue?: number;
}

function setCalibrationApplianceRealValue(
  briosa: BriosaClient,
  input?: SetCalibrationApplianceRealValueInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## getCalibrationApplianceData

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-data) · [gRPC contract](/api/grpc/robot-operations#get-calibration-appliance-data)

```ts
export interface GetCalibrationApplianceDataInput {
  readonly realValueCount: number;
}

function getCalibrationApplianceData(
  briosa: BriosaClient,
  input: GetCalibrationApplianceDataInput,
  options?: BriosaCallOptions,
): Promise<readonly number[]>;
```

`realValueCount` is required SDK retrieval metadata. The SDK cannot retrieve
the MP `Integer Values` output, so the function returns only `Real Values`.

## setCalibrationApplianceData

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-data) · [gRPC contract](/api/grpc/robot-operations#set-calibration-appliance-data)

```ts
export interface SetCalibrationApplianceDataInput {
  readonly realValues?: Iterable<number>;
}

function setCalibrationApplianceData(
  briosa: BriosaClient,
  input?: SetCalibrationApplianceDataInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitting `realValues` sends the exact empty-array default. The SDK cannot set
the MP `Integer Values` input, so this is a real-values-only contract.

The calibration-appliance functions pass offsets through without client-side
bounds checks.

These functions retain no Robot/Machine workflow state, add no hardware safety
preflight, and are never automatically replayed.
