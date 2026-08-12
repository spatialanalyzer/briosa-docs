---
title: BriosaClient Lifecycle
description: Complete Next contract for independently managing Briosa, SpatialAnalyzer, and the SpatialAnalyzer SDK from JavaScript and TypeScript.
sidebar_label: Overview and Types
---

# `BriosaClient` Lifecycle

`BriosaClient` controls three separate resources. By default,
[`start()`](./start.md) launches the local Briosa server, starts a disconnected
SDK generation, launches a fresh SpatialAnalyzer application, connects the SDK,
and waits for MP readiness. The individual lifecycle methods remain available
for explicit control, diagnosis, and recovery.

## Methods

| Resource | Method | Result | Purpose |
| --- | --- | --- | --- |
| Briosa | [`start`](./start.md) | `Promise<void>` | Launch the local server and complete the default ready-for-MP startup procedure |
| SpatialAnalyzer | [`getSpatialAnalyzerState`](./get-spatial-analyzer-state.md) | `Promise<SpatialAnalyzerLifecycleState>` | Read application and ownership state |
| SpatialAnalyzer | [`launchSpatialAnalyzer`](./launch-spatial-analyzer.md) | `Promise<SpatialAnalyzerLifecycleState>` | Launch the server's approved exact-target application |
| SpatialAnalyzer | [`closeOwnedSpatialAnalyzer`](./close-owned-spatial-analyzer.md) | `Promise<SpatialAnalyzerLifecycleState>` | Close only an application launched by this server |
| SA SDK | [`getSpatialAnalyzerSdkState`](./get-spatial-analyzer-sdk-state.md) | `Promise<SpatialAnalyzerSdkLifecycleState>` | Diagnose SDK process, connection, readiness, and recovery state |
| SA SDK | [`startSpatialAnalyzerSdk`](./start-spatial-analyzer-sdk.md) | `Promise<SpatialAnalyzerSdkLifecycleState>` | Start a new disconnected SDK generation |
| SA SDK | [`connectToSpatialAnalyzer`](./connect-to-spatial-analyzer.md) | `Promise<SpatialAnalyzerSdkLifecycleState>` | Connect the current SDK to local SpatialAnalyzer and prove MP readiness |
| SA SDK | [`reconnectToSpatialAnalyzer`](./reconnect-to-spatial-analyzer.md) | `Promise<SpatialAnalyzerSdkLifecycleState>` | Retry local connection and readiness with the current healthy SDK generation |
| SA SDK | [`stopSpatialAnalyzerSdk`](./stop-spatial-analyzer-sdk.md) | `Promise<SpatialAnalyzerSdkLifecycleState>` | Stop Briosa's SDK generation while leaving the application running |
| SA SDK | [`recoverSpatialAnalyzerSdk`](./recover-spatial-analyzer-sdk.md) | `Promise<SpatialAnalyzerSdkLifecycleState>` | Replace a lost or faulted SDK generation and leave it disconnected |
| Briosa | [`stop`](./stop.md) | `Promise<void>` | End the reusable client session and stop only an owned Briosa server |
| Briosa | [`Symbol.asyncDispose`](./async-dispose.md) | `Promise<void>` | Perform final client cleanup |

## Client Construction

```ts
export interface BriosaClientOptions {
  readonly commandTimeoutMs?: number | null;
}

export interface SpatialAnalyzerLaunchOptions {
  readonly jobFilePath?: string;
  readonly quickStartInstrumentName?: string;
  readonly startMinimized?: boolean;
}

export interface BriosaStartOptions extends BriosaLifecycleCallOptions {
  readonly startSpatialAnalyzerSdk?: boolean;
  readonly launchSpatialAnalyzer?: boolean;
  readonly connectToSpatialAnalyzer?: boolean;
  readonly launchOptions?: SpatialAnalyzerLaunchOptions;
  readonly startupTimeoutMs?: number;
}

export function createBriosaClient(
  options?: BriosaClientOptions,
): BriosaClient;
```

Construction is dormant. `start()` locates and launches the matching Briosa
server on an owned loopback endpoint. Direct control of a manually started
server uses the public gRPC API rather than a separate first-party client
construction mode.

`BriosaStartOptions.startupTimeoutMs` defaults to `30_000` and bounds the
complete startup procedure requested by that call. SpatialAnalyzer launch, SDK
connection, identity verification, and readiness probing retain their own
server-configured safety bounds. Omitting `commandTimeoutMs`, or setting it to
`null`, means the client adds no MP-command deadline.

The three startup switches are independent except that connecting requires the
same startup call to start an SDK generation. Launch options must remain at
their defaults when application launch is disabled. `jobFilePath` and
`quickStartInstrumentName` are mutually exclusive.

## SpatialAnalyzer Application State

```ts
export interface SpatialAnalyzerLifecycleState {
  readonly stateRevision: bigint;
  readonly applicationState: SpatialAnalyzerApplicationState;
  readonly ownership: SpatialAnalyzerOwnership;
  readonly applicationGeneration: number | null;
  readonly diagnosticCode: string | null;
}

export type SpatialAnalyzerApplicationState =
  | 'unspecified'
  | 'notRunning'
  | 'starting'
  | 'running'
  | 'closing'
  | 'exited'
  | 'ambiguous'
  | 'faulted';

export type SpatialAnalyzerOwnership =
  | 'unspecified'
  | 'none'
  | 'external'
  | 'serverLaunched';
```

## SpatialAnalyzer SDK State

```ts
export interface SpatialAnalyzerSdkLifecycleState {
  readonly stateRevision: bigint;
  readonly sdkState: SpatialAnalyzerSdkState;
  readonly sdkGeneration: number | null;
  readonly applicationGeneration: number | null;
  readonly connectionState: SpatialAnalyzerConnectionState;
  readonly executionReadinessState: SpatialAnalyzerExecutionReadinessState;
  readonly readyForMp: boolean;
  readonly recoveryState: SpatialAnalyzerSdkRecoveryState;
  readonly lastIncident: SpatialAnalyzerSdkIncident | null;
  readonly diagnosticCode: string | null;
}

export interface SpatialAnalyzerSdkIncident {
  readonly sdkGeneration: number;
  readonly terminationKind: SpatialAnalyzerSdkTerminationKind;
  readonly executionDisposition: ExecutionDisposition | null;
  readonly operationId: string | null;
  readonly diagnosticCode: string | null;
}

export type SpatialAnalyzerSdkState =
  | 'unspecified'
  | 'stopped'
  | 'starting'
  | 'running'
  | 'connecting'
  | 'verifying'
  | 'ready'
  | 'stopping'
  | 'recovering'
  | 'faulted';

export type SpatialAnalyzerSdkRecoveryState =
  | 'unspecified'
  | 'notRequired'
  | 'recoveryAvailable'
  | 'operatorActionRequired'
  | 'blocked';

export type SpatialAnalyzerSdkTerminationKind =
  | 'unspecified'
  | 'startFailed'
  | 'sdkProcessExited'
  | 'sdkConnectionLost'
  | 'workerProcessExited'
  | 'controlChannelLost'
  | 'watchdogTerminated';

export type SpatialAnalyzerSdkRecoveryMode = 'replaceWithoutReplay';

export type SpatialAnalyzerConnectionState =
  | 'unspecified'
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'faulted'
  | 'stopping';

export type SpatialAnalyzerExecutionReadinessState =
  | 'unspecified'
  | 'unverified'
  | 'verifying'
  | 'executionReady'
  | 'competingClientSuspected'
  | 'operatorRecoveryRequired';

export type ExecutionDisposition =
  | 'unspecified'
  | 'notStarted'
  | 'startedOutcomeUnknown'
  | 'completed';
```

These types preserve the public gRPC terms. In particular,
`startedOutcomeUnknown` is not converted to a generic connectivity error.

The client retains application and SDK generations and supplies generation
guards automatically. Callers never pass process IDs or generation values.

## Call Options and Errors

```ts
export interface BriosaLifecycleCallOptions {
  readonly signal?: AbortSignal;
}

export class BriosaSpatialAnalyzerError extends BriosaError {
  readonly kind: SpatialAnalyzerLifecycleFailureKind;
  readonly diagnosticCode: string;
  readonly recoveryGuidance: LifecycleRecoveryGuidance;
  readonly state: SpatialAnalyzerLifecycleState;
}

export class BriosaSpatialAnalyzerSdkError extends BriosaError {
  readonly kind: SpatialAnalyzerSdkLifecycleFailureKind;
  readonly diagnosticCode: string;
  readonly recoveryGuidance: LifecycleRecoveryGuidance;
  readonly state: SpatialAnalyzerSdkLifecycleState;
}
```

The client decodes the typed lifecycle error detail returned by the relevant
service. An SDK identity mismatch maps to `BriosaCompatibilityError`; other SDK
lifecycle failures map to `BriosaSpatialAnalyzerSdkError`. An aborted caller
wait rejects with `BriosaCallAbortedError`. MP-operation failures retain the
operation error hierarchy; an SDK incident is also visible through
`getSpatialAnalyzerSdkState()`.

## Complete Example

```ts
import {
  createBriosaClient,
  getWorkingDirectory,
} from '@spatialanalyzer/briosa';

await using briosa = createBriosaClient();
await briosa.start();

const workingDirectory = await getWorkingDirectory(briosa);
```

This is the default fresh-application procedure. Pass `BriosaStartOptions` to
select a different startup sequence or controlled application launch inputs.
Ordinary client stop or asynchronous disposal never closes SpatialAnalyzer.
