---
title: Robot Operations
description: Unreleased javascript 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Robot Operations

[SA 2026.1.0529.7](/api/javascript/robot-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/robot-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Robot/Machine (.SAMachine) {/* #add-robotmachine-samachine */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#add-robotmachine-samachine) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#add-robotmachine-samachine)

```ts
export interface AddRobotMachineSaMachineInput {
  readonly saMachineFile: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  addRobotMachineSaMachine(
    input: AddRobotMachineSaMachineInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Robot/Machine (.ManipKin) {/* #add-robotmachine-manipkin */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#add-robotmachine-manipkin) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#add-robotmachine-manipkin)

```ts
export interface AddRobotMachineManipKinInput {
  readonly manipKinFile: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  addRobotMachineManipKin(
    input: AddRobotMachineManipKinInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Robot/Machine {/* #delete-robotmachine */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#delete-robotmachine) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#delete-robotmachine)

```ts
export interface DeleteRobotMachineInput {
  readonly machineId: CollectionMachineId;
}

// Member of BriosaClient
interface BriosaClient {
  deleteRobotMachine(
    input: DeleteRobotMachineInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Frame {/* #move-robotmachine-to-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#move-robotmachine-to-frame)

```ts
export interface MoveRobotMachineToFrameInput {
  readonly machineId: CollectionMachineId;
  readonly destinationFrame: CollectionObjectName;
  readonly useSaKinematics?: boolean;
  readonly acknowledgeArrival?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  moveRobotMachineToFrame(
    input: MoveRobotMachineToFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<Transform>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine through Path {/* #move-robotmachine-through-path */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-through-path) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#move-robotmachine-through-path)

```ts
export interface MoveRobotMachineThroughPathInput {
  readonly machineId: CollectionMachineId;
  readonly pathFrames: Iterable<CollectionObjectName>;
  readonly useSaKinematics?: boolean;
  readonly linearSegments?: boolean;
  readonly acknowledgeArrival?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  moveRobotMachineThroughPath(
    input: MoveRobotMachineThroughPathInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Named Destination {/* #move-robotmachine-to-named-destination */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-named-destination) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#move-robotmachine-to-named-destination)

```ts
export interface MoveRobotMachineToNamedDestinationInput {
  readonly machineId: CollectionMachineId;
  readonly destinationName?: string;
  readonly acknowledgeArrival?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  moveRobotMachineToNamedDestination(
    input: MoveRobotMachineToNamedDestinationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<Transform>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Parameter {/* #set-robotmachine-parameter */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-parameter) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-robotmachine-parameter)

```ts
export interface SetRobotMachineParameterInput {
  readonly machineId: CollectionMachineId;
  readonly parameterName?: string;
  readonly parameterValue?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setRobotMachineParameter(
    input: SetRobotMachineParameterInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Robot/Machine Parameter {/* #get-robotmachine-parameter */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robotmachine-parameter) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-robotmachine-parameter)

```ts
export interface GetRobotMachineParameterInput {
  readonly machineId: CollectionMachineId;
  readonly parameterName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  getRobotMachineParameter(
    input: GetRobotMachineParameterInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Model Link Parameters {/* #set-robotmachine-model-link-parameters */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-model-link-parameters) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-robotmachine-model-link-parameters)

```ts
export interface SetRobotMachineModelLinkParametersInput {
  readonly machineId: CollectionMachineId;
  readonly linkName?: string;
  readonly configuration?: RobotModelLinkConfiguration;
}

// Member of BriosaClient
interface BriosaClient {
  setRobotMachineModelLinkParameters(
    input: SetRobotMachineModelLinkParametersInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Robot/Machine Model Link Parameters {/* #get-robotmachine-model-link-parameters */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robotmachine-model-link-parameters) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-robotmachine-model-link-parameters)

```ts
export interface GetRobotMachineModelLinkParametersInput {
  readonly machineId: CollectionMachineId;
  readonly linkName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  getRobotMachineModelLinkParameters(
    input: GetRobotMachineModelLinkParametersInput,
    callOptions?: BriosaCallOptions,
  ): Promise<RobotModelLinkParameters>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Base Transform {/* #set-robotmachine-base-transform */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-base-transform) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-robotmachine-base-transform)

```ts
export interface SetRobotMachineBaseTransformInput {
  readonly machineId: CollectionMachineId;
  readonly destinationTransform?: Transform;
  readonly referenceFrame: CollectionObjectName;
  readonly numberOfSteps?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setRobotMachineBaseTransform(
    input: SetRobotMachineBaseTransformInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start Robot/Machine Interface {/* #start-robotmachine-interface */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#start-robotmachine-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#start-robotmachine-interface)

```ts
export interface StartRobotMachineInterfaceInput {
  readonly machineId: CollectionMachineId;
  readonly interfaceType?: number;
  readonly runInSimulation?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  startRobotMachineInterface(
    input: StartRobotMachineInterfaceInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Robot/Machine Interface {/* #stop-robotmachine-interface */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#stop-robotmachine-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#stop-robotmachine-interface)

```ts
export interface StopRobotMachineInterfaceInput {
  readonly machineId: CollectionMachineId;
}

// Member of BriosaClient
interface BriosaClient {
  stopRobotMachineInterface(
    input: StopRobotMachineInterfaceInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Compute Robot/Machine Adjusted Goal Frame {/* #compute-robotmachine-adjusted-goal-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#compute-robotmachine-adjusted-goal-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#compute-robotmachine-adjusted-goal-frame)

```ts
export interface ComputeRobotMachineAdjustedGoalFrameInput {
  readonly originalGoalFrame: CollectionObjectName;
  readonly lastAdjustedGoalFrame: CollectionObjectName;
  readonly actualMeasuredFrame: CollectionObjectName;
  readonly modifiedGoalFrame: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  computeRobotMachineAdjustedGoalFrame(
    input: ComputeRobotMachineAdjustedGoalFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<Transform>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Joint Pose (6DOF) {/* #move-robotmachine-to-joint-pose-6dof */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-joint-pose-6dof) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#move-robotmachine-to-joint-pose-6dof)

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

// Member of BriosaClient
interface BriosaClient {
  moveRobotMachineToJointPoseSixDof(
    input: MoveRobotMachineToJointPoseSixDofInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Simulate Robot/Machine Path, Output CSV File {/* #simulate-robotmachine-path-output-csv-file */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#simulate-robotmachine-path-output-csv-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#simulate-robotmachine-path-output-csv-file)

```ts
export interface SimulateRobotMachinePathOutputCsvFileInput {
  readonly machineId: CollectionMachineId;
  readonly pathFrames: Iterable<CollectionObjectName>;
  readonly outputCsvFile: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  simulateRobotMachinePathOutputCsvFile(
    input: SimulateRobotMachinePathOutputCsvFileInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Robot Calibration {/* #create-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#create-robot-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#create-robot-calibration)

```ts
export interface CreateRobotCalibrationInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  createRobotCalibration(
    input: CreateRobotCalibrationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Robot Calibration {/* #delete-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#delete-robot-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#delete-robot-calibration)

```ts
export interface DeleteRobotCalibrationInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  deleteRobotCalibration(
    input: DeleteRobotCalibrationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Poses Match to Measurements {/* #import-poses-match-to-measurements */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#import-poses-match-to-measurements) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#import-poses-match-to-measurements)

```ts
export interface ImportPosesMatchToMeasurementsInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly pointNames: Iterable<PointName>;
  readonly csvJointSetFile: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  importPosesMatchToMeasurements(
    input: ImportPosesMatchToMeasurementsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Poses Match to Frames {/* #import-poses-match-to-frames */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#import-poses-match-to-frames) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#import-poses-match-to-frames)

```ts
export interface ImportPosesMatchToFramesInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly frameNames: Iterable<CollectionObjectName>;
  readonly csvJointSetFile: FileReference;
}

// Member of BriosaClient
interface BriosaClient {
  importPosesMatchToFrames(
    input: ImportPosesMatchToFramesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Perform Robot Calibration {/* #perform-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#perform-robot-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#perform-robot-calibration)

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

// Member of BriosaClient
interface BriosaClient {
  performRobotCalibration(
    input: PerformRobotCalibrationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<RobotCalibrationMetrics>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Perform Robot Calibration (Alternate) {/* #perform-robot-calibration-alternate */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#perform-robot-calibration-alternate) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#perform-robot-calibration-alternate)

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

// Member of BriosaClient
interface BriosaClient {
  performRobotCalibrationAlternate(
    input: PerformRobotCalibrationAlternateInput,
    callOptions?: BriosaCallOptions,
  ): Promise<RobotCalibrationMetrics>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start/Stop Robot Calibration Trapping {/* #startstop-robot-calibration-trapping */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#startstop-robot-calibration-trapping) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#startstop-robot-calibration-trapping)

```ts
export interface StartStopRobotCalibrationTrappingInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly instrumentId: CollectionInstrumentId;
  readonly startTrapping?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  startStopRobotCalibrationTrapping(
    input: StartStopRobotCalibrationTrappingInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Active Robot Calibration {/* #set-active-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-active-robot-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-active-robot-calibration)

```ts
export interface SetActiveRobotCalibrationInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  setActiveRobotCalibration(
    input: SetActiveRobotCalibrationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot Calibration Tool Frame {/* #set-robot-calibration-tool-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robot-calibration-tool-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-robot-calibration-tool-frame)

```ts
export interface SetRobotCalibrationToolFrameInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly toolFrame?: Transform;
}

// Member of BriosaClient
interface BriosaClient {
  setRobotCalibrationToolFrame(
    input: SetRobotCalibrationToolFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `toolFrame` | MP qualifier: relative to flange. |

## Set Robot Calibration Measurement Offset In Tool Frame {/* #set-robot-calibration-measurement-offset-in-tool-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame)

```ts
export interface SetRobotCalibrationMeasurementOffsetInToolFrameInput {
  readonly machineId: CollectionMachineId;
  readonly calibrationName?: string;
  readonly measurementFrame?: Transform;
}

// Member of BriosaClient
interface BriosaClient {
  setRobotCalibrationMeasurementOffsetInToolFrame(
    input: SetRobotCalibrationMeasurementOffsetInToolFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `measurementFrame` | MP qualifier: relative to tool. |

## Get Robot Pose for a Frame {/* #get-robot-pose-for-a-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robot-pose-for-a-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-robot-pose-for-a-frame)

```ts
export interface GetRobotPoseForAFrameInput {
  readonly machineId: CollectionMachineId;
  readonly goalFrame: CollectionObjectName;
  readonly referencePose?: Iterable<number>;
  readonly goalPoseCount: number;
}

// Member of BriosaClient
interface BriosaClient {
  getRobotPoseForAFrame(
    input: GetRobotPoseForAFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly number[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Integer Value {/* #get-calibration-appliance-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-integer-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-calibration-appliance-integer-value)

```ts
export interface GetCalibrationApplianceIntegerValueInput {
  readonly indexOffset?: number;
}

// Member of BriosaClient
interface BriosaClient {
  getCalibrationApplianceIntegerValue(
    input?: GetCalibrationApplianceIntegerValueInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Integer Value {/* #set-calibration-appliance-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-integer-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-calibration-appliance-integer-value)

```ts
export interface SetCalibrationApplianceIntegerValueInput {
  readonly indexOffset?: number;
  readonly integerValue?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceIntegerValue(
    input?: SetCalibrationApplianceIntegerValueInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Real Value {/* #get-calibration-appliance-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-real-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-calibration-appliance-real-value)

```ts
export interface GetCalibrationApplianceRealValueInput {
  readonly indexOffset?: number;
}

// Member of BriosaClient
interface BriosaClient {
  getCalibrationApplianceRealValue(
    input?: GetCalibrationApplianceRealValueInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Real Value {/* #set-calibration-appliance-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-real-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-calibration-appliance-real-value)

```ts
export interface SetCalibrationApplianceRealValueInput {
  readonly indexOffset?: number;
  readonly realValue?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceRealValue(
    input?: SetCalibrationApplianceRealValueInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Data {/* #get-calibration-appliance-data */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#get-calibration-appliance-data)

```ts
export interface GetCalibrationApplianceDataInput {
  readonly realValueCount: number;
}

// Member of BriosaClient
interface BriosaClient {
  getCalibrationApplianceData(
    input: GetCalibrationApplianceDataInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly number[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Data {/* #set-calibration-appliance-data */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/robot-operations#set-calibration-appliance-data)

```ts
export interface SetCalibrationApplianceDataInput {
  readonly realValues?: Iterable<number>;
}

// Member of BriosaClient
interface BriosaClient {
  setCalibrationApplianceData(
    input?: SetCalibrationApplianceDataInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## addRobotMachineSaMachine {/* #addrobotmachinesamachine */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## addRobotMachineManipKin {/* #addrobotmachinemanipkin */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## deleteRobotMachine {/* #deleterobotmachine */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## moveRobotMachineToFrame {/* #moverobotmachinetoframe */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## moveRobotMachineThroughPath {/* #moverobotmachinethroughpath */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## moveRobotMachineToNamedDestination {/* #moverobotmachinetonameddestination */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setRobotMachineParameter {/* #setrobotmachineparameter */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getRobotMachineParameter {/* #getrobotmachineparameter */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setRobotMachineModelLinkParameters {/* #setrobotmachinemodellinkparameters */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getRobotMachineModelLinkParameters {/* #getrobotmachinemodellinkparameters */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setRobotMachineBaseTransform {/* #setrobotmachinebasetransform */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## startRobotMachineInterface {/* #startrobotmachineinterface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## stopRobotMachineInterface {/* #stoprobotmachineinterface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## computeRobotMachineAdjustedGoalFrame {/* #computerobotmachineadjustedgoalframe */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## moveRobotMachineToJointPoseSixDof {/* #moverobotmachinetojointposesixdof */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## simulateRobotMachinePathOutputCsvFile {/* #simulaterobotmachinepathoutputcsvfile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## createRobotCalibration {/* #createrobotcalibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## deleteRobotCalibration {/* #deleterobotcalibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## importPosesMatchToMeasurements {/* #importposesmatchtomeasurements */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## importPosesMatchToFrames {/* #importposesmatchtoframes */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## performRobotCalibration {/* #performrobotcalibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## performRobotCalibrationAlternate {/* #performrobotcalibrationalternate */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## startStopRobotCalibrationTrapping {/* #startstoprobotcalibrationtrapping */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setActiveRobotCalibration {/* #setactiverobotcalibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setRobotCalibrationToolFrame {/* #setrobotcalibrationtoolframe */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setRobotCalibrationMeasurementOffsetInToolFrame {/* #setrobotcalibrationmeasurementoffsetintoolframe */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getRobotPoseForAFrame {/* #getrobotposeforaframe */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getCalibrationApplianceIntegerValue {/* #getcalibrationapplianceintegervalue */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceIntegerValue {/* #setcalibrationapplianceintegervalue */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getCalibrationApplianceRealValue {/* #getcalibrationappliancerealvalue */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceRealValue {/* #setcalibrationappliancerealvalue */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## getCalibrationApplianceData {/* #getcalibrationappliancedata */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCalibrationApplianceData {/* #setcalibrationappliancedata */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/f98eef683c941bf289c1d0ec411c13a1903bcca4/targets/2024.1.0508.5)
