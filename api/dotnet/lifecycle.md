---
title: BriosaClient Lifecycle
description: Released client API for independently managing Briosa, SpatialAnalyzer, and the SpatialAnalyzer SDK from .NET.
sidebar_label: Overview and Types
---

# `BriosaClient` Lifecycle

[SA 2026.1.0529.7](/api/dotnet/lifecycle) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/lifecycle)

`BriosaClient` controls three separate resources. By default,
[`StartAsync()`](./start.md) launches the local Briosa server, starts a
disconnected SDK generation, launches a fresh SpatialAnalyzer application,
connects the SDK, and waits for MP readiness. The individual lifecycle methods
remain available for explicit control, diagnosis, and recovery.

## Methods

| Resource | Method | Result | Purpose |
| --- | --- | --- | --- |
| Briosa | [`StartAsync`](./start.md) | `Task` | Launch the local server and complete the default ready-for-MP startup procedure |
| Briosa | [`GetServerSnapshotAsync`](./installation-selection.md#server-snapshot-and-admission) | `Task<BriosaServerSnapshot>` | Read server identity, readiness, the admission profile, and the admitted operations |
| Briosa | [`GetDeniedOperationsAsync`](./installation-selection.md#server-snapshot-and-admission) | `Task<BriosaDeniedOperationListing>` | List the denied operations for diagnosis |
| SpatialAnalyzer | [`GetSpatialAnalyzerStateAsync`](./get-spatial-analyzer-state.md) | `Task<SpatialAnalyzerLifecycleState>` | Read application and ownership state |
| SpatialAnalyzer | [`LaunchSpatialAnalyzerAsync`](./launch-spatial-analyzer.md) | `Task<SpatialAnalyzerLifecycleState>` | Launch the server's approved exact-target application |
| SpatialAnalyzer | [`CloseOwnedSpatialAnalyzerAsync`](./close-owned-spatial-analyzer.md) | `Task<SpatialAnalyzerLifecycleState>` | Close only an application launched by this server |
| SA SDK | [`GetSpatialAnalyzerSdkStateAsync`](./get-spatial-analyzer-sdk-state.md) | `Task<SpatialAnalyzerSdkLifecycleState>` | Diagnose SDK process, connection, readiness, and recovery state |
| SA SDK | [`StartSpatialAnalyzerSdkAsync`](./start-spatial-analyzer-sdk.md) | `Task<SpatialAnalyzerSdkLifecycleState>` | Start a new disconnected SDK generation |
| SA SDK | [`ConnectToSpatialAnalyzerAsync`](./connect-to-spatial-analyzer.md) | `Task<SpatialAnalyzerSdkLifecycleState>` | Connect the current SDK to local SpatialAnalyzer and prove MP readiness |
| SA SDK | [`ReconnectToSpatialAnalyzerAsync`](./reconnect-to-spatial-analyzer.md) | `Task<SpatialAnalyzerSdkLifecycleState>` | Retry local connection and readiness with the current healthy SDK generation |
| SA SDK | [`StopSpatialAnalyzerSdkAsync`](./stop-spatial-analyzer-sdk.md) | `Task<SpatialAnalyzerSdkLifecycleState>` | Stop Briosa's SDK generation while leaving the application running |
| SA SDK | [`RecoverSpatialAnalyzerSdkAsync`](./recover-spatial-analyzer-sdk.md) | `Task<SpatialAnalyzerSdkLifecycleState>` | Replace a lost or faulted SDK generation and leave it disconnected |
| Briosa | [`StopAsync`](./stop.md) | `Task` | End the client session and stop only an owned Briosa server |
| Briosa | [`DisposeAsync`](./dispose-async.md) | `ValueTask` | Perform final client cleanup |

## Client Construction

```csharp
public sealed record BriosaClientOptions
{
    public TimeSpan? CommandTimeout { get; init; }
}

public sealed record SpatialAnalyzerLaunchOptions
{
    public string? JobFilePath { get; init; }
    public string? QuickStartInstrumentName { get; init; }
    public bool StartMinimized { get; init; }
}

public sealed record BriosaStartOptions
{
    public BriosaServerSelection ServerSelection { get; init; } = new();
    public BriosaLoggingOptions? Logging { get; init; }
    public bool StartSpatialAnalyzerSdk { get; init; } = true;
    public bool LaunchSpatialAnalyzer { get; init; } = true;
    public bool ConnectToSpatialAnalyzer { get; init; } = true;
    public SpatialAnalyzerLaunchOptions LaunchOptions { get; init; } = new();
    public TimeSpan StartupTimeout { get; init; } = TimeSpan.FromMinutes(2);

    public static BriosaStartOptions Default { get; } = new();
}

public sealed partial class BriosaClient : IAsyncDisposable
{
    public BriosaClient(BriosaClientOptions? options = null);
}
```

Construction is dormant. `StartAsync()` locates and launches the matching
Briosa server on an owned loopback endpoint. Direct control of a manually
started server uses the public gRPC API rather than a separate first-party
client construction mode.

`BriosaStartOptions.StartupTimeout` is one overall budget for the complete
startup procedure requested by that call, whichever phases are selected. When
it expires, `StartAsync` throws `BriosaStartupException` with diagnostic
`startup-timeout`. A value you set is always the budget, including an explicit
two minutes. When you leave it unset, the budget starts at two minutes, the
value the property returns. Two minutes covers the server's default worst case
of about 100 seconds for a start that launches SpatialAnalyzer, plus a
20-second margin.

With Server 0.10.1, which publishes its lifecycle bounds, an unset budget is
sized once, at the first validated discovery of the server: it becomes the
longer of two minutes and the server's startup allowance for the selected
phases plus 20 seconds, counted from the start of the call. It only grows, it
never revives a startup whose two minutes have already run out, and it stays
two minutes when an allowance the selection needs is missing.

| Selected phases | Allowance |
| --- | --- |
| Start SDK, launch, and connect | `LifecycleBounds.StartupWithLaunch` |
| Start SDK and connect | `LifecycleBounds.StartupWithoutLaunch` |
| Start SDK and launch | `StartSdk` + `LaunchSpatialAnalyzer` |
| Start SDK only | `StartSdk` |
| Launch only | `LaunchSpatialAnalyzer` |

Once the server has published lifecycle bounds, the client also checks the
budget against the clock before each startup request, whether you set the
budget or not, so no startup request is sent after the deadline. A step that
fails after the deadline reports `startup-timeout`, with that failure as its
`InnerException`. If startup fails after the client takes ownership of the
session, MP commands stay refused (`mp-command-admission-closed`) whatever
state the client reads afterwards; call `StopAsync()`, then a new
`StartAsync()`. With Server 0.10.0, which publishes no
bounds, the budget stays two minutes, only its timer ends the start, and you
raise it yourself when that server's lifecycle bounds are raised.

SpatialAnalyzer launch, SDK connection, identity verification, and readiness
probing retain their own server-configured safety bounds. Lifecycle methods add
no deadline of their own. `CommandTimeout` defaults to `null`, meaning the
client adds no MP-command deadline.

The three startup switches are independent except that connecting requires the
same startup call to start an SDK generation. Launch options must remain at
their defaults when application launch is disabled. `JobFilePath` and
`QuickStartInstrumentName` are mutually exclusive.

## SpatialAnalyzer Application State

```csharp
public sealed record SpatialAnalyzerLifecycleState
{
    public ulong StateRevision { get; init; }
    public SpatialAnalyzerApplicationState ApplicationState { get; init; }
    public SpatialAnalyzerOwnership Ownership { get; init; }
    public int? ApplicationGeneration { get; init; }
    public string? DiagnosticCode { get; init; }
}

public enum SpatialAnalyzerApplicationState
{
    Unspecified,
    NotRunning,
    Starting,
    Running,
    Closing,
    Exited,
    Ambiguous,
    Faulted,
}

public enum SpatialAnalyzerOwnership
{
    Unspecified,
    None,
    External,
    ServerLaunched,
}
```

## SpatialAnalyzer SDK State

```csharp
public sealed record SpatialAnalyzerSdkLifecycleState
{
    public ulong StateRevision { get; init; }
    public SpatialAnalyzerSdkState SdkState { get; init; }
    public int? SdkGeneration { get; init; }
    public int? ApplicationGeneration { get; init; }
    public SpatialAnalyzerConnectionState ConnectionState { get; init; }
    public SpatialAnalyzerExecutionReadinessState ExecutionReadinessState { get; init; }
    public bool ReadyForMp { get; init; }
    public SpatialAnalyzerSdkRecoveryState RecoveryState { get; init; }
    public SpatialAnalyzerSdkIncident? LastIncident { get; init; }
    public string? DiagnosticCode { get; init; }
}

public sealed record SpatialAnalyzerSdkIncident
{
    public int SdkGeneration { get; init; }
    public SpatialAnalyzerSdkTerminationKind TerminationKind { get; init; }
    public ExecutionDisposition? ExecutionDisposition { get; init; }
    public string? OperationId { get; init; }
    public string? DiagnosticCode { get; init; }
}

public enum SpatialAnalyzerSdkState
{
    Unspecified,
    Stopped,
    Starting,
    Running,
    Connecting,
    Verifying,
    Ready,
    Stopping,
    Recovering,
    Faulted,
}

public enum SpatialAnalyzerSdkRecoveryState
{
    Unspecified,
    NotRequired,
    RecoveryAvailable,
    OperatorActionRequired,
    Blocked,
}

public enum SpatialAnalyzerSdkTerminationKind
{
    Unspecified,
    StartFailed,
    SdkProcessExited,
    SdkConnectionLost,
    WorkerProcessExited,
    ControlChannelLost,
    WatchdogTerminated,
}

public enum SpatialAnalyzerSdkRecoveryMode
{
    ReplaceWithoutReplay = 1,
}

public enum SpatialAnalyzerConnectionState
{
    Unspecified,
    Disconnected,
    Connecting,
    Connected,
    Faulted,
    Stopping,
}

public enum SpatialAnalyzerExecutionReadinessState
{
    Unspecified,
    Unverified,
    Verifying,
    ExecutionReady,
    CompetingClientSuspected,
    OperatorRecoveryRequired,
}

public enum ExecutionDisposition
{
    Unspecified,
    NotStarted,
    StartedOutcomeUnknown,
    Completed,
}
```

These enums preserve the public gRPC terms. In particular,
`StartedOutcomeUnknown` is not converted to a generic connectivity error.

The client retains application and SDK generations and supplies generation
guards automatically. Callers never pass process IDs or generation values.

## Lifecycle Errors

```csharp
public sealed class BriosaSpatialAnalyzerException : BriosaException
{
    public SpatialAnalyzerLifecycleFailureKind Kind { get; }
    public string DiagnosticCode { get; }
    public LifecycleRecoveryGuidance RecoveryGuidance { get; }
    public SpatialAnalyzerLifecycleState State { get; }
}

public sealed class BriosaSpatialAnalyzerSdkException : BriosaException
{
    public SpatialAnalyzerSdkLifecycleFailureKind Kind { get; }
    public string DiagnosticCode { get; }
    public LifecycleRecoveryGuidance RecoveryGuidance { get; }
    public SpatialAnalyzerSdkLifecycleState State { get; }
}
```

```csharp
public enum SpatialAnalyzerLifecycleFailureKind
{
    Unspecified,
    Validation,
    StateConflict,
    ApplicationNotFound,
    ApplicationAmbiguous,
    LaunchFailed,
    NotOwned,
    SdkNotStopped,
    Timeout,
    Internal,
    CallerCancelled,
    CallerDeadlineExceeded,
}

public enum SpatialAnalyzerSdkLifecycleFailureKind
{
    Unspecified,
    Validation,
    StateConflict,
    ApplicationNotFound,
    ApplicationAmbiguous,
    SdkAlreadyActive,
    SdkNotRunning,
    SdkStartFailed,
    SdkStopFailed,
    RecoveryNotRequired,
    SdkRecoveryFailed,
    IdentityMismatch,
    OperatorActionRequired,
    Timeout,
    Internal,
    SdkAlreadyConnected,
    SdkConnectionFailed,
    ReconnectNotRequired,
    SdkRecoveryRequired,
    CallerCancelled,
    CallerDeadlineExceeded,
}

public enum LifecycleRecoveryGuidance
{
    Unspecified,
    None,
    RefreshState,
    RetryAfterStateChange,
    CorrectEnvironment,
    StopSdkFirst,
    RecoverSdkWithoutReplay,
    OperatorActionRequired,
}
```

The client decodes the typed lifecycle error detail returned by the relevant
service. An SDK identity mismatch maps to `BriosaCompatibilityException`;
other SDK lifecycle failures map to `BriosaSpatialAnalyzerSdkException`.
A cancelled lifecycle call surfaces as `OperationCanceledException`, never as a
state conflict, even when the server's `CallerCancelled` detail arrives. The
client sets no deadline on lifecycle calls, so `CallerDeadlineExceeded` is not
normally observed; both values exist so the enums mirror the wire. MP-operation failures use the operation exception hierarchy in
[MP Command Outcomes](#mp-command-outcomes); an SDK incident is also visible
through `GetSpatialAnalyzerSdkStateAsync()`.

### Abandoned and Concurrent Transitions

- Cancelling `StartSpatialAnalyzerSdkAsync`, `ConnectToSpatialAnalyzerAsync`,
  `ReconnectToSpatialAnalyzerAsync`, or `RecoverSpatialAnalyzerSdkAsync` before
  the server accepts it prevents the work. (Cancelling `StartAsync` only stops
  that caller waiting.) After acceptance the server finishes the exchange under its
  own bounds, so a startup you abandoned may still produce a ready generation.
  Refresh SDK state, and the server snapshot before MP work, instead of assuming
  an outcome.
- Treat `sdk-lifecycle-transition-in-progress` as refresh and retry later, and
  stop a generation you own only after the accepted transition has ended.
- After a timeout while launching SpatialAnalyzer, refresh application state
  before launching again; treat `application-lifecycle-transition-in-progress`
  the same way.
- An external application can briefly report diagnostic
  `external-spatial-analyzer-unconfirmed`: the server could not confirm it was
  still running, so it stays `Running` with the same generation.

## MP Command Outcomes

Every MP method takes an optional `onMpCompletion` observer just before its
`CancellationToken`. Both are call controls, not MP inputs. Because the
observer comes first, pass the token by name when you leave the observer out.

```csharp
public enum MpExecutionState
{
    Unspecified,
    Succeeded,
    ExecuteStepRejected,
    Failed,
    ResultUnavailable,
    ArgumentRejected,
    PartialSuccess,
}

public sealed record MpCompletion
{
    public required MpExecutionState State { get; init; }
    public required int MpResultCode { get; init; }
}
```

The client calls the observer once, synchronously, before the returned task
completes, and only for a successful call. `State` is `Succeeded` with MP code
2, or `PartialSuccess` with MP code 4. MP code 4 (PARTIAL SUCCESS) means the
command did its work but not its full intended effect. The server reports it as
a success, so the method never retries it and returns its outputs when all of
them are retrieved. If an output can't be retrieved, the method throws
`BriosaOperationException` and the observer doesn't run; see
[Operation Failures](#operation-failures). Four operations
report code 4 as an ordinary `MpFailure` instead, because their target
documentation says the work was not done: `ConstructPointFromSurveyTargetCenterAsync`,
`OpenSaFileAsync`, `OpenTemplateFileAsync`, and `SetReportOptionsForObjectAsync`.

```csharp
MpCompletion? completion = null;
string directory = await briosa.GetWorkingDirectoryAsync(
    onMpCompletion: value => completion = value);
bool partial = completion?.State == MpExecutionState.PartialSuccess;
```

The client checks every success, whether or not you observe it, before the
observer runs and before it maps the outputs. A success is a
`BriosaProtocolException` when it has no MP execution details
(`mp-execution-missing`), another state (`mp-execution-state`), or an MP code
that is missing or doesn't match its state (`mp-execution-result-code`). The
observer still reports a completion whose output mapping then fails. Adding or
removing an observer never changes a call's outcome.

### Operation Failures

```csharp
public sealed class BriosaOperationException : BriosaException
{
    public string OperationId { get; }
    public OperationFailureKind Kind { get; }
    public string DiagnosticCode { get; }
    public ExecutionDisposition ExecutionDisposition { get; }
    public RecoveryGuidance RecoveryGuidance { get; }
    public ReplayGuidance ReplayGuidance { get; }
    public ReplaySafety ReplaySafety { get; }
    public MpExecutionDetails? MpExecution { get; }
    public PolicyDenialDetails? PolicyDenial { get; }
}

public enum OperationFailureKind
{
    Unspecified,
    Validation,
    Unsupported,
    SpatialAnalyzerUnavailable,
    WorkerUnavailable,
    CallerCancelled,
    CallerDeadlineExceeded,
    WorkerWatchdogTimeout,
    WorkerFailure,
    ExecuteStepRejected,
    MpFailure,
    OutputRetrievalFailure,
    Internal,
    PolicyDenied,
    MpResultRetrievalFailure,
    SdkArgumentRejected,
    Overloaded,
    SdkCallFaulted,
}

public sealed record MpExecutionDetails
{
    public required MpExecutionState State { get; init; }
    public int? MpResultCode { get; init; }
    public required IReadOnlyList<OutputRetrieval> OutputRetrievals { get; init; }
}

public sealed record OutputRetrieval
{
    public required string FieldName { get; init; }
    public required OutputRetrievalState State { get; init; }
    public string? DiagnosticCode { get; init; }
}

public enum OutputRetrievalState
{
    Unspecified,
    Retrieved,
    NotAttempted,
    Failed,
}

public enum RecoveryGuidance
{
    Unspecified,
    None,
    WaitForReadiness,
    WorkerReplacement,
    OperatorInterventionRequired,
}

public enum ReplayGuidance
{
    Unspecified,
    DoNotReplay,
    MayReplay,
    ReconcileBeforeReplay,
}

public enum ReplaySafety
{
    Unspecified,
    Safe,
    Unsafe,
    Unknown,
}

public sealed class BriosaTransportException : BriosaException
{
    public string DiagnosticCode { get; }
}
```

- `SdkCallFaulted` reports that an SDK call threw during the MP sequence.
  `ExecutionDisposition` carries the phase: `NotStarted` before the MP step,
  `StartedOutcomeUnknown` during it (reconcile before replaying), and
  `Completed` when an output getter threw after MP code 2 or 4. `MpExecution`
  then keeps `Succeeded` with 2 or `PartialSuccess` with 4, and its
  `OutputRetrievals` are the per-output states the server reports. They don't
  always identify the getter that threw: if the worker had to withhold that
  evidence, every output is reported failed.
- `MpExecution` carries the MP state, result code, and output retrievals of a
  failure that relates to the MP command. If an output can't be retrieved after
  code 4, the call fails and the observer doesn't run. The kind is
  `SdkCallFaulted` when an output getter threw, and `OutputRetrievalFailure`
  when a getter returned no usable value or the worker couldn't deliver the
  result (diagnostic `worker-output-encoding-rejected`). With either kind,
  `MpExecution` stays `PartialSuccess` with code 4. Its `OutputRetrievals`
  don't always identify the getter that failed, because an undeliverable
  result can mark every output failed.
- A blocking SpatialAnalyzer dialog arrives as `WorkerWatchdogTimeout`, or as a
  readiness failure, with diagnostic `sa-modal-dialog-open` and
  `OperatorInterventionRequired` guidance. The client never retries it. The
  server setting `Briosa:SpatialAnalyzer:InteractionMode` (`Unchanged` by
  default; `Silent` for unattended stations) controls whether SpatialAnalyzer
  shows such dialogs. SpatialAnalyzer keeps the mode across restarts, and
  clients don't set it.
- A call the server's admission policy denies fails with `PolicyDenied` and
  `NotStarted`; see
  [Server Snapshot and Admission](./installation-selection.md#server-snapshot-and-admission).
  With Server 0.10.1, `PolicyDenial` says which policy step denied it: the
  `PolicyDenialRule`, the denied risk flag, the admission profile, or the
  request field the server attributed the denial to. It is `null` with Server
  0.10.0 and for every other kind. It never changes the kind, disposition, or
  guidance.
- A transport failure without a typed trailer is a `BriosaTransportException`
  whose `DiagnosticCode` is `transport-` plus the gRPC status name in lower
  kebab case, such as `transport-deadline-exceeded` or `transport-unavailable`.
  A status gRPC doesn't define maps to `transport-failure`. Client 0.4.0 used
  `grpc-` plus the status name, for example `grpc-DeadlineExceeded`. A cancelled
  call is still `OperationCanceledException`.

## Complete Example

```csharp
using Briosa;

await using var briosa = new BriosaClient();
await briosa.StartAsync();

string workingDirectory = await briosa.GetWorkingDirectoryAsync();
```

This is the default fresh-application procedure. Pass `BriosaStartOptions` to
select a different startup sequence or controlled application launch inputs.
Ordinary client stop or disposal never closes SpatialAnalyzer.
