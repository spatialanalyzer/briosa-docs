---
title: LaunchSpatialAnalyzerAsync
description: Launch the exact SpatialAnalyzer application approved for the connected Briosa target from .NET.
---

# `LaunchSpatialAnalyzerAsync`

Launches a new exact-target SpatialAnalyzer application. The method does not
start or connect the SA SDK or make MP methods ready. A disconnected SDK may
already be running.

## Signature

```csharp
public Task<SpatialAnalyzerLifecycleState> LaunchSpatialAnalyzerAsync(
    CancellationToken cancellationToken = default);

public Task<SpatialAnalyzerLifecycleState> LaunchSpatialAnalyzerAsync(
    SpatialAnalyzerLaunchOptions options,
    CancellationToken cancellationToken = default);
```

The parameterless overload launches a new empty job in a normal window.

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `options` | `SpatialAnalyzerLaunchOptions` | Empty options | Controlled application startup inputs. |
| `cancellationToken` | `CancellationToken` | `default` | Cancels this caller's launch wait. |

`SpatialAnalyzerLaunchOptions` provides:

| Property | Default | Meaning |
| --- | --- | --- |
| `JobFilePath` | `null` | Absolute path to an SA job file on the local Briosa machine. |
| `QuickStartInstrumentName` | `null` | Start a new job and quick-start the named SA instrument. |
| `StartMinimized` | `false` | Start SpatialAnalyzer minimized. |

`JobFilePath` and `QuickStartInstrumentName` are mutually exclusive.

## Returns

The resulting application state. On success, `ApplicationState` is `Running`,
`Ownership` is `ServerLaunched`, and `ApplicationGeneration` is present.

## Example

```csharp
SpatialAnalyzerLifecycleState application =
    await briosa.LaunchSpatialAnalyzerAsync(
        new SpatialAnalyzerLaunchOptions
        {
            JobFilePath = @"C:\Jobs\Inspection.xit64",
            StartMinimized = true,
        });

SpatialAnalyzerSdkLifecycleState sdk =
    await briosa.ConnectToSpatialAnalyzerAsync();
```

The client retains the application generation and supplies it automatically
when the owned application is closed.

## Exceptions

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleException` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerException` | Launch failed, timed out, or application selection is ambiguous. Inspect `State` and `RecoveryGuidance`. |
| `ArgumentException` | Launch options are invalid, conflicting, or malformed. |
| `OperationCanceledException` | The caller cancelled its wait; inspect application state. |

The method never closes an existing application and accepts no executable
path, arbitrary argument list, launch-time MP, or close-existing-process
option.
