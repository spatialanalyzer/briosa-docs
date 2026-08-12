---
title: StartAsync
description: Launch the local Briosa server and perform the default SpatialAnalyzer startup procedure.
---

# `StartAsync`

Launches a new local Briosa server and performs the default startup procedure:

1. Start Briosa's disconnected SA SDK instance.
2. Launch a fresh exact-target SpatialAnalyzer application.
3. Connect the SDK to local SpatialAnalyzer.
4. Verify exact runtime identity and MP execution readiness.

The method returns only after MP commands are ready.

## Signature

```csharp
public Task StartAsync(
    CancellationToken cancellationToken = default);

public Task StartAsync(
    BriosaStartOptions options,
    CancellationToken cancellationToken = default);
```

The parameterless overload delegates to `BriosaStartOptions.Default`.

## Startup Options

| Property | Default | Meaning |
| --- | --- | --- |
| `StartSpatialAnalyzerSdk` | `true` | Start a new disconnected SDK generation. |
| `LaunchSpatialAnalyzer` | `true` | Launch a fresh exact-target SpatialAnalyzer application. |
| `ConnectToSpatialAnalyzer` | `true` | Connect the new SDK generation and establish MP readiness. |
| `LaunchOptions` | Empty | Controlled initial job, instrument quick-start, and window-state options. |
| `StartupTimeout` | 30 seconds | Bounds the complete startup procedure requested by this call. |

`ConnectToSpatialAnalyzer` cannot be `true` when
`StartSpatialAnalyzerSdk` is `false`. Non-default `LaunchOptions` require
`LaunchSpatialAnalyzer` to be `true`.

## Example

```csharp
using Briosa;

await using var briosa = new BriosaClient();
await briosa.StartAsync();

string workingDirectory =
    await briosa.GetWorkingDirectoryAsync();
```

To attach to an eligible SpatialAnalyzer application that is already running:

```csharp
await briosa.StartAsync(new BriosaStartOptions
{
    LaunchSpatialAnalyzer = false,
});
```

To start only the Briosa control plane:

```csharp
await briosa.StartAsync(new BriosaStartOptions
{
    StartSpatialAnalyzerSdk = false,
    LaunchSpatialAnalyzer = false,
    ConnectToSpatialAnalyzer = false,
});
```

## Behavior

- Selects the exact-target Briosa server distribution.
- Chooses an owned loopback endpoint and launches the server.
- Verifies server and protocol identity.
- Performs only the SDK-start, SpatialAnalyzer-launch, and connection phases
  selected in `BriosaStartOptions`, in that order.
- Supplies `LaunchOptions` to the application launch phase.
- Loads the server's admitted capability surface after connection and MP
  readiness are requested and proven.
- Concurrent calls share one startup attempt.

Success means every requested phase completed. It does not imply MP readiness
when connection was deliberately disabled.

Manually launching `Briosa.Server.exe` behaves differently: the server starts
only its gRPC control plane and waits for explicit lifecycle RPCs.

If an SDK, application, or connection phase fails after the server becomes
available, the client preserves the control plane for state inspection and
recovery. `StopAsync()` remains available to clean up resources owned by that
client session.

## Exceptions

| Exception | Meaning |
| --- | --- |
| `BriosaStartupException` | The server or default startup procedure could not complete. |
| `BriosaSpatialAnalyzerException` | A fresh exact-target application could not be launched. |
| `BriosaSpatialAnalyzerSdkException` | SDK startup or connection failed. |
| `BriosaCompatibilityException` | Server, SDK, or connected SA identity does not match the package target. |
| `ArgumentException` | Startup options contain an invalid combination or malformed value. |
| `OperationCanceledException` | This caller cancelled its wait; startup may have crossed a lifecycle boundary. |
| `ObjectDisposedException` | Final client disposal already completed. |
