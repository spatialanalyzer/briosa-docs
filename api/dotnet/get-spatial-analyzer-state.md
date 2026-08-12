---
title: GetSpatialAnalyzerStateAsync
description: Read SpatialAnalyzer application and ownership state from .NET.
---

# `GetSpatialAnalyzerStateAsync`

Reads SpatialAnalyzer application state without changing the application or
SA SDK.

## Signature

```csharp
public Task<SpatialAnalyzerLifecycleState> GetSpatialAnalyzerStateAsync(
    CancellationToken cancellationToken = default);
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `cancellationToken` | `CancellationToken` | `default` | Cancels this caller's wait. |

## Returns

A point-in-time `SpatialAnalyzerLifecycleState` containing application state,
ownership, application generation, and a safe diagnostic code. SDK process,
connection, and MP-readiness fields are returned by
`GetSpatialAnalyzerSdkStateAsync()`.

## Example

```csharp
SpatialAnalyzerLifecycleState application =
    await briosa.GetSpatialAnalyzerStateAsync();

if (application.ApplicationState == SpatialAnalyzerApplicationState.Running)
{
    SpatialAnalyzerSdkLifecycleState sdk =
        await briosa.GetSpatialAnalyzerSdkStateAsync();
}
```

## Exceptions

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleException` | The client is not started. |
| `BriosaProtocolException` | The server returned an invalid state shape. |
| `OperationCanceledException` | The caller cancelled its wait. |

The method is safe to repeat and exposes no process IDs, paths, registry data,
or SDK status codes.
