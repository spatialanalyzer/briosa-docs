---
title: BriosaClient Lifecycle
description: Released client API for independently managing Briosa, SpatialAnalyzer, and the SpatialAnalyzer SDK from JavaScript and TypeScript.
sidebar_label: Overview and Types
---

# `BriosaClient` Lifecycle

[SA 2026.1.0529.7](/api/javascript/lifecycle) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/lifecycle)

`BriosaClient` controls three separate resources. By default,
[`start()`](./start.md) launches the local Briosa server, starts a disconnected
SDK generation, launches a fresh SpatialAnalyzer application, connects the SDK,
and waits for MP readiness. The individual lifecycle methods remain available
for explicit control, diagnosis, and recovery.

## Methods

| Resource | Method | Result | Purpose |
| --- | --- | --- | --- |
| Briosa | [`start`](./start.md) | `Promise<void>` | Launch the local server and complete the default ready-for-MP startup procedure |
| Briosa | [`getServerSnapshot`](#server-snapshot-and-capabilities) | `Promise<BriosaServerSnapshot>` | Read server identity, readiness, the admission profile, and the admitted operations |
| Briosa | [`listCapabilities`](#server-snapshot-and-capabilities) | `Promise<BriosaCapabilityListing>` | List the admitted operations, and optionally the denied ones, for diagnosis |
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
  readonly serverSelection?: BriosaServerSelection;
  readonly logging?: BriosaLoggingOptions;
  readonly startSpatialAnalyzerSdk?: boolean;
  readonly launchSpatialAnalyzer?: boolean;
  readonly connectToSpatialAnalyzer?: boolean;
  readonly launchOptions?: SpatialAnalyzerLaunchOptions;
  readonly startupTimeoutMs?: number;
}

export declare function createBriosaClient(
  options?: BriosaClientOptions,
): BriosaClient;
```

Construction is dormant. `start()` locates and launches the matching Briosa
server on an owned loopback endpoint. Direct control of a manually started
server uses the public gRPC API rather than a separate first-party client
construction mode.

`BriosaStartOptions.startupTimeoutMs` defaults to `120_000` (two minutes). It is
one overall budget for the complete startup procedure requested by that call,
whichever phases are selected. When it expires, `start()` rejects with
`BriosaStartupError` and diagnostic `startup-timeout`, including while an RPC is
in flight. Two minutes covers the server's default worst case of about 100
seconds for a start that launches SpatialAnalyzer, with a 20-second margin;
[`start`](./start.md#startup-options) shows when to raise it. SpatialAnalyzer
launch, SDK connection, identity verification, and readiness probing retain
their own server-configured safety bounds. Lifecycle methods add no deadline of
their own. Omitting `commandTimeoutMs`, or setting it to `null`, means the
client adds no MP-command deadline; `commandTimeoutMs` applies only to MP
commands.

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
  'unspecified' | 'none' | 'external' | 'serverLaunched';
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
  'unspecified' | 'notStarted' | 'startedOutcomeUnknown' | 'completed';
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
lifecycle failures map to `BriosaSpatialAnalyzerSdkError`. MP-operation failures
use the operation error hierarchy in [Operation Errors](#operation-errors); an
SDK incident is also visible through `getSpatialAnalyzerSdkState()`.

```ts
export type SpatialAnalyzerLifecycleFailureKind =
  | 'unspecified'
  | 'validation'
  | 'stateConflict'
  | 'applicationNotFound'
  | 'applicationAmbiguous'
  | 'launchFailed'
  | 'notOwned'
  | 'sdkNotStopped'
  | 'timeout'
  | 'internal'
  | 'callerCancelled'
  | 'callerDeadlineExceeded';

export type SpatialAnalyzerSdkLifecycleFailureKind =
  | 'unspecified'
  | 'validation'
  | 'stateConflict'
  | 'applicationNotFound'
  | 'applicationAmbiguous'
  | 'sdkAlreadyActive'
  | 'sdkNotRunning'
  | 'sdkStartFailed'
  | 'sdkStopFailed'
  | 'recoveryNotRequired'
  | 'sdkRecoveryFailed'
  | 'identityMismatch'
  | 'operatorActionRequired'
  | 'timeout'
  | 'internal'
  | 'sdkAlreadyConnected'
  | 'sdkConnectionFailed'
  | 'reconnectNotRequired'
  | 'sdkRecoveryRequired'
  | 'callerCancelled'
  | 'callerDeadlineExceeded';

export type LifecycleRecoveryGuidance =
  | 'unspecified'
  | 'none'
  | 'refreshState'
  | 'retryAfterStateChange'
  | 'correctEnvironment'
  | 'stopSdkFirst'
  | 'recoverSdkWithoutReplay'
  | 'operatorActionRequired';
```

`callerCancelled` and `callerDeadlineExceeded` (contract major 3) describe the
caller's own interruption. They are distinct from `stateConflict`, and the
client never retries them. A remote caller rarely receives them, because gRPC
delivers no response after a cancellation or a deadline.

An aborted caller wait rejects with `BriosaCallAbortedError`, the
JavaScript-native outcome:

```ts
export class BriosaCallAbortedError extends BriosaError {
  readonly reason?: unknown;
}
```

Its `name` is `'AbortError'`, and `reason` keeps the reason of the aborted
`signal`. The error stops only the caller's wait. It carries no invented
execution disposition, and the client never retries.

### After an Aborted Lifecycle Call

Aborting the `signal` of a lifecycle call, for example with
`AbortSignal.timeout(...)`, stops only the caller's wait. A request that the
server had not accepted yet changes nothing. Once the server has accepted a
start, connection, reconnection, recovery, or launch, it finishes the exchange
under its own bounds, so a startup you abandoned may still produce a running or
ready generation.

- Refresh state with `getSpatialAnalyzerSdkState()` or
  `getSpatialAnalyzerState()` before deciding what to do next. Call
  `getServerSnapshot()` to reopen MP calls on a generation that became ready.
- While an accepted exchange runs, another lifecycle call fails with
  `BriosaSpatialAnalyzerSdkError` (or `BriosaSpatialAnalyzerError` for the
  application), kind `stateConflict`, diagnostic
  `sdk-lifecycle-transition-in-progress` (or
  `application-lifecycle-transition-in-progress`), and guidance `refreshState`.
  Refresh state and retry later, and stop a generation you own only after the
  transition has ended.
- After an aborted launch, the server keeps waiting for the application window
  under its own bound. Refresh application state before launching again.

A per-call deadline shorter than the server's worst case for that call can stop
the caller waiting before the server's typed failure, lifecycle state, and
recovery guidance arrive. Under the default server configuration, use at least
these deadlines. Each is the server's worst case to a typed answer, failure
cleanup included, plus 5 seconds for scheduling, transport, and an idle process
observation. Allow more on a heavily loaded machine.

| Call | Server Worst Case to a Typed Answer | Minimum Per-Call Deadline |
| --- | --- | --- |
| `startSpatialAnalyzerSdk` | 15 s | 20 s |
| `connectToSpatialAnalyzer` or `reconnectToSpatialAnalyzer` | 60 s | 65 s |
| `recoverSpatialAnalyzerSdk` | 25 s | 30 s |
| `launchSpatialAnalyzer` | 30 s | 35 s |
| `closeOwnedSpatialAnalyzer` | 30 s | 35 s |
| `stopSpatialAnalyzerSdk` | The execution budget of any in-flight MP command, then 15 s | That budget plus 20 s |

When the server's bounds are raised, add the increase: `Briosa:Worker:StartupTimeout`
counts once for Start and Recover and twice for Connect,
`Briosa:Worker:ReadinessProbeTimeout` once for Connect, and the application
startup and shutdown bounds once for Launch and Close.

## Server Snapshot and Capabilities

```ts
getServerSnapshot(
  options?: BriosaLifecycleCallOptions,
): Promise<BriosaServerSnapshot>;

listCapabilities(
  options?: BriosaCapabilityListOptions,
): Promise<BriosaCapabilityListing>;

export interface BriosaServerSnapshot {
  readonly briosaVersion: string;
  readonly sourceRevision: string;
  readonly protocolPackage: string;
  readonly spatialAnalyzerTarget: string;
  readonly readyForMp: boolean;
  readonly admissionProfile: string;
  readonly policyFingerprint: string;
  readonly operations: readonly BriosaOperationCapability[];
  supports(fullyQualifiedMethod: string): boolean;
}

export interface BriosaCapabilityListOptions extends BriosaLifecycleCallOptions {
  readonly includeDenied?: boolean;
}

export interface BriosaCapabilityListing {
  readonly admissionProfile: string;
  readonly policyFingerprint: string;
  readonly operations: readonly BriosaOperationCapability[];
}

export interface BriosaOperationCapability {
  readonly operationId: string;
  readonly grpcService: string;
  readonly rpc: string;
  readonly fullyQualifiedMethod: string;
  readonly riskFlags: readonly OperationRiskFlag[];
  readonly durationClass: OperationDurationClass;
  readonly validationStatus: OperationValidationStatus;
  readonly admission: OperationAdmission;
}

export type OperationRiskFlag =
  | 'unspecified'
  | 'filesystemMetadata'
  | 'filesystemRead'
  | 'filesystemWrite'
  | 'filesystemDelete'
  | 'destructive'
  | 'codeExecution'
  | 'physicalMotion'
  | 'deviceSession'
  | 'deviceConfig'
  | 'interactiveUi'
  | 'externalIo'
  | 'unknown';

export type OperationDurationClass =
  'unspecified' | 'quick' | 'longRunning' | 'interactive' | 'unknown';

export type OperationValidationStatus =
  | 'unspecified'
  | 'noRecordedGap'
  | 'fixturePending'
  | 'atRiskUnvalidated'
  | 'unknown';

export type OperationAdmission =
  | 'unspecified'
  | 'admitted'
  | 'deniedProfile'
  | 'deniedFlag'
  | 'deniedOverride'
  | 'deniedExclusive'
  | 'deniedUnreviewed'
  | 'unknown';
```

- `getServerSnapshot()` returns the owned server's identity, readiness, and
  admitted operations. It reports the server's resolved `admissionProfile`
  (`read-only`, `standard`, `device`, or `full`) and its opaque
  `policyFingerprint`. Compare the fingerprint only for equality, for example to
  tell whether a replacement generation runs under the same policy.
- Each capability carries its reviewed `riskFlags` (an ordered set in the
  server's order; an empty array means that no reviewed risk applies),
  `durationClass`, `validationStatus`, and `admission`, all taken from the
  server and never recomputed. A value that a later contract revision adds maps
  to `'unknown'`; it never fails discovery. The validation status is
  informational and never blocks an admitted operation.
- The snapshot's `operations` are the admitted ones only, and
  `supports(fullyQualifiedMethod)` tells whether one is among them. A capability describes the
  operation's reviewed row: a request option can still open operator UI or leave
  work running, and the server can deny that request. The client does not
  pre-validate request options.
- `listCapabilities()` lists the admitted operations.
  `listCapabilities({ includeDenied: true })` is a diagnostic listing that also
  returns each denied operation, with its denial reason in `admission`:
  `deniedProfile`, `deniedFlag`, `deniedOverride`, `deniedExclusive`, or
  `deniedUnreviewed`. Denied entries never become callable and never change the
  generation's admitted set.
- The server's packaged `standard` profile is narrower than the major-2 default.
  The seven device-configuration setters (`setAbsoluteInstrumentScaleFactor`,
  `setMultiplyInstrumentScaleFactor`, `setRobotMachineModelLinkParameters`,
  `setActiveRobotCalibration`, `setRobotCalibrationToolFrame`,
  `setRobotCalibrationMeasurementOffsetInToolFrame`, and
  `setProbeOffsetFrameOffline`) need `Profile=device`, `Profile=full`, or a
  per-operation `allow` override. Operations, and request options, that open or
  block on operator UI need the server's interactive opt-in
  (`Flags:interactive_ui=allow` or a per-operation `allow` override); without it
  the request is denied with `operation-option-denied`. Multi-call exclusive
  workflows (device, trapping, watch, robot-interface, and appliance sessions)
  are denied under every setting. The facades of denied operations stay in the
  package: a denied call fails with `BriosaOperationError` of kind `policyDenied` and
  disposition `notStarted`.

MP admission needs both the SDK state and the latest server snapshot to report
readiness. `start()` refreshes the snapshot itself when it connects the SDK. When
you connect the SDK yourself, for example after a control-plane-only `start()`,
call `getServerSnapshot()` once the SDK state is ready. Until then, MP calls
reject with `BriosaLifecycleError` and diagnostic `mp-command-admission-closed`.

## MP Completion

```ts
export interface BriosaCallOptions {
  readonly signal?: AbortSignal;
  readonly onMpCompletion?: (completion: MpCompletion) => void;
}

export type MpCompletionState = 'succeeded' | 'partialSuccess';

export interface MpCompletion {
  readonly state: MpCompletionState;
  readonly mpResultCode: number;
}
```

Every MP function takes `BriosaCallOptions` as its optional last argument. The
`signal` and the `onMpCompletion` observer (contract major 3) are call controls,
not MP inputs.

An MP that returns code 4 (PARTIAL SUCCESS) did its work, but not its full
intended effect. The call still succeeds: it resolves with its outputs as usual,
never rejects for it, and is never retried. `onMpCompletion` receives the call's
own `MpCompletion`, `succeeded` with MP code 2 or `partialSuccess` with MP code
4, so concurrent calls stay distinguishable.

```ts
await getWorkingDirectory(briosa, {
  onMpCompletion: ({ state, mpResultCode }) => {
    if (state === 'partialSuccess') console.warn(`MP code ${mpResultCode}`);
  },
});
```

The client checks every success, whether or not you pass a callback. A success
must carry MP execution details with `succeeded` and MP code 2, or
`partialSuccess` and MP code 4. Anything else rejects with `BriosaProtocolError`:
`mp-completion-missing` when the details are absent, and
`mp-completion-invalid` for any other state, a missing MP code, or a state that
disagrees with its code. The callback runs once, after that check and before the
client maps the outputs, so it still reports a completion whose output mapping
then fails. A failed call reports no completion. An exception that the callback
throws rejects the call, although the operation completed.

Four operations report code 4 as an ordinary `mpFailure` with MP code 4 instead,
because their target documentation says that code leaves the work undone:
`constructPointFromSurveyTargetCenter`, `openSaFile`, `openTemplateFile`, and
`setReportOptionsForObject`.

## Operation Errors

```ts
export class BriosaOperationError extends BriosaError {
  readonly operationId: string;
  readonly kind: OperationFailureKind;
  readonly diagnosticCode: string;
  readonly executionDisposition: ExecutionDisposition;
  readonly recoveryGuidance: RecoveryGuidance;
  readonly replayGuidance: ReplayGuidance;
  readonly replaySafety: ReplaySafety;
  readonly mpExecution: MpExecutionDetails | null;
  get completionUnknown(): boolean;
  get reconciliationRequired(): boolean;
}

export class BriosaTransportError extends BriosaError {
  readonly diagnosticCode: string;
}

export class BriosaProtocolError extends BriosaError {
  readonly diagnosticCode: string;
}

export type OperationFailureKind =
  | 'unspecified'
  | 'validation'
  | 'unsupported'
  | 'spatialAnalyzerUnavailable'
  | 'workerUnavailable'
  | 'callerCancelled'
  | 'callerDeadlineExceeded'
  | 'workerWatchdogTimeout'
  | 'workerFailure'
  | 'executeStepRejected'
  | 'mpFailure'
  | 'outputRetrievalFailure'
  | 'internal'
  | 'policyDenied'
  | 'mpResultRetrievalFailure'
  | 'sdkArgumentRejected'
  | 'overloaded'
  | 'sdkCallFaulted';

export type RecoveryGuidance =
  | 'unspecified'
  | 'none'
  | 'waitForReadiness'
  | 'workerReplacement'
  | 'operatorInterventionRequired';

export type ReplayGuidance =
  'unspecified' | 'doNotReplay' | 'mayReplay' | 'reconcileBeforeReplay';

export type ReplaySafety = 'unspecified' | 'safe' | 'unsafe' | 'unknown';

export type MpExecutionState =
  | 'unspecified'
  | 'succeeded'
  | 'executeStepRejected'
  | 'failed'
  | 'resultUnavailable'
  | 'argumentRejected'
  | 'partialSuccess';

export type OutputRetrievalState =
  'unspecified' | 'retrieved' | 'notAttempted' | 'failed';

export interface OutputRetrievalDetails {
  readonly fieldName: string;
  readonly state: OutputRetrievalState;
  readonly diagnosticCode: string | null;
}

export interface MpExecutionDetails {
  readonly state: MpExecutionState;
  readonly mpResultCode: number | null;
  readonly outputRetrievals: readonly OutputRetrievalDetails[];
}
```

`BriosaOperationError` carries a valid typed operation failure. Its
`completionUnknown` is true for `startedOutcomeUnknown`, and
`reconciliationRequired` adds the replay guidance `reconcileBeforeReplay`.
`BriosaTransportError` reports a transport failure without a valid typed
operation detail. Its `diagnosticCode` is `transport-` followed by the gRPC
status name in lower kebab case, such as `transport-deadline-exceeded` or
`transport-unavailable`, or `typed-error-malformed` when a typed detail cannot be
decoded. A client-wide `commandTimeoutMs` deadline that expires is reported this
way.

- **MP execution details.** `mpExecution` carries the server's value-free MP
  state, MP code, and output retrievals, or `null` when the server sent none. A
  `partialSuccess` state stays distinct there, for example when an output could
  not be retrieved after code 4.
- **SDK call faults.** `sdkCallFaulted` reports that one SDK call threw during
  the MP sequence. It is its own kind, never folded into `internal` or a
  retrieval failure. Read the proven phase from `executionDisposition`:
  `notStarted` (before Execute Step; do not replay), `startedOutcomeUnknown`
  (reconcile before any replay), or `completed` (an output getter failed after
  the MP succeeded; `mpExecution.outputRetrievals` tells the outputs that were
  read from the one that failed).
- **Modal dialogs.** When a SpatialAnalyzer modal dialog holds an MP, the failure
  stays `workerWatchdogTimeout` with `startedOutcomeUnknown`, its diagnostic is
  `sa-modal-dialog-open`, and its recovery guidance is
  `operatorInterventionRequired`: an operator must dismiss the dialog, and
  replacing the worker does not help. A readiness probe held by a dialog reports
  the same diagnostic with operator recovery guidance. The client surfaces both
  unchanged and never retries. The server setting
  `Briosa:SpatialAnalyzer:InteractionMode` (default `Unchanged`; `Silent` is
  recommended for unattended stations) sets SpatialAnalyzer's interaction mode
  after every Connect. SpatialAnalyzer keeps the mode across restarts and has no
  getter for it. Clients don't set it.
- **Policy denials.** A call that the server's admission policy denies fails with
  kind `policyDenied` and disposition `notStarted`; see
  [Server Snapshot and Capabilities](#server-snapshot-and-capabilities).
- **Rejected arguments.** The client never sends an empty value, 0, or false for
  an input you left unset, and it does not pre-validate empty strings. The server
  rejects an invalid request before dispatch with kind `validation`, diagnostic
  `request-validation-failed`, and disposition `notStarted`, so the request is
  safe to correct and resend. An omitted required input is a TypeScript compile
  error and a `TypeError` before any call.
- **Aborted calls.** Aborting the `signal` of an MP call rejects with
  `BriosaCallAbortedError`. It stops only the caller's wait and does not prove
  that SpatialAnalyzer stopped the command.
- **No automatic replay.** The client never retries an MP operation; follow the
  failure's replay guidance.

## Complete Example

```ts
import {
  createBriosaClient,
  getWorkingDirectory,
} from 'briosa';

await using briosa = createBriosaClient();
await briosa.start();

const workingDirectory = await getWorkingDirectory(briosa);
```

This is the default fresh-application procedure. Pass `BriosaStartOptions` to
select a different startup sequence or controlled application launch inputs.
Ordinary client stop or asynchronous disposal never closes SpatialAnalyzer.
