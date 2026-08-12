---
title: StartSpatialAnalyzerSdk
description: Start a new Briosa-owned SpatialAnalyzer SDK instance without connecting it to SpatialAnalyzer.
---

# `StartSpatialAnalyzerSdk`

Creates Briosa's isolated SA SDK generation. The SDK remains disconnected until
a caller explicitly invokes
[`ConnectToSpatialAnalyzer`](./connect-to-spatial-analyzer.md).

Starting `Briosa.Server.exe` does not call this RPC automatically.

## Method

```text
briosa.SpatialAnalyzerSdkLifecycle/StartSpatialAnalyzerSdk
```

## Request

```protobuf
message StartSpatialAnalyzerSdkRequest {}
```

The request has no fields. SDK startup does not require a running
SpatialAnalyzer application.

## Response

```protobuf
message StartSpatialAnalyzerSdkResponse {
  SpatialAnalyzerSdkLifecycleState state = 1;
}
```

Example successful response:

```json
{
  "state": {
    "stateRevision": "3",
    "sdkState": "SPATIAL_ANALYZER_SDK_STATE_RUNNING",
    "sdkGeneration": 1,
    "connectionState": "SPATIAL_ANALYZER_CONNECTION_STATE_DISCONNECTED",
    "executionReadinessState": "SPATIAL_ANALYZER_EXECUTION_READINESS_STATE_UNVERIFIED",
    "readyForMp": false,
    "recoveryState": "SPATIAL_ANALYZER_SDK_RECOVERY_STATE_NOT_REQUIRED"
  }
}
```

## Preconditions

- SDK state is `STOPPED`.
- No other SDK lifecycle transition is active.

Use `RecoverSpatialAnalyzerSdk` rather than start when the current generation
is faulted and recovery is available.

## Behavior

1. Briosa starts one isolated worker generation.
2. The worker activates a new SA SDK COM server on its owning STA thread.
3. Briosa retains and monitors the SDK engine process associated with that
   generation.
4. Briosa publishes the SDK as `RUNNING` and `DISCONNECTED`.

This RPC does not launch SpatialAnalyzer, call `ConnectEx`, verify a connected
SA identity, run an MP readiness probe, or open MP admission. It never closes,
adopts, or reuses an SDK engine started by another program.

## gRPC Status

| Status | Failure Kind | Meaning |
| --- | --- | --- |
| `OK` | — | A new disconnected SDK generation is running. |
| `FAILED_PRECONDITION` | `SDK_ALREADY_ACTIVE` | An SDK generation is already running or faulted. |
| `ABORTED` | `STATE_CONFLICT` | Another lifecycle transition is active. |
| `UNAVAILABLE` | `SDK_START_FAILED` | The worker or SDK process could not be started. |
| `DEADLINE_EXCEEDED` | `TIMEOUT` | The server-side SDK startup bound expired. |
| `CANCELLED` | — | The caller cancelled its wait; query SDK state before another transition. |
| `INTERNAL` | `INTERNAL` | Briosa could not preserve a valid lifecycle state. |

A cancelled or timed-out call may still have created the SDK. Call
[`GetSpatialAnalyzerSdkState`](./get-spatial-analyzer-sdk-state.md) before
trying another transition.
