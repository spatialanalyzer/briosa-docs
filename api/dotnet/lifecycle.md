---
title: BriosaClient Lifecycle
description: Complete Next contract for independently managing Briosa, SpatialAnalyzer, and the SpatialAnalyzer SDK from .NET.
sidebar_label: Overview and Types
---

# `BriosaClient` Lifecycle

`BriosaClient` controls three separate resources. By default,
[`StartAsync()`](./start.md) launches the local Briosa server, starts a
disconnected SDK generation, launches a fresh SpatialAnalyzer application,
connects the SDK, and waits for MP readiness. The individual lifecycle methods
remain available for explicit control, diagnosis, and recovery.

## Methods

| Resource | Method | Result | Purpose |
| --- | --- | --- | --- |
| Briosa | [`StartAsync`](./start.md) | `Task` | Launch the local server and complete the default ready-for-MP startup procedure |
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
    public bool StartSpatialAnalyzerSdk { get; init; } = true;
    public bool LaunchSpatialAnalyzer { get; init; } = true;
    public bool ConnectToSpatialAnalyzer { get; init; } = true;
    public SpatialAnalyzerLaunchOptions LaunchOptions { get; init; } = new();
    public TimeSpan StartupTimeout { get; init; } = TimeSpan.FromSeconds(30);

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

`BriosaStartOptions.StartupTimeout` defaults to 30 seconds and bounds the
complete startup procedure requested by that call. SpatialAnalyzer launch,
SDK connection, identity verification, and readiness probing retain their own
server-configured safety bounds. `CommandTimeout` defaults to `null`, meaning
the client adds no MP-command deadline.

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
    public Guid? OperationId { get; init; }
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
    ReplaceWithoutReplay,
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

The client decodes the typed lifecycle error detail returned by the relevant
service. An SDK identity mismatch maps to `BriosaCompatibilityException`;
other SDK lifecycle failures map to `BriosaSpatialAnalyzerSdkException`.
Transport cancellation remains `OperationCanceledException`. MP-operation
failures continue to use the operation exception hierarchy; an SDK incident is
also visible through `GetSpatialAnalyzerSdkStateAsync()`.

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
