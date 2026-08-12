---
title: ReconnectToSpatialAnalyzer
description: Re-establish the connection between Briosa's live SA SDK instance and local SpatialAnalyzer.
---

# `ReconnectToSpatialAnalyzer`

Reattempts the local SpatialAnalyzer connection for Briosa's current live SDK
generation. Use it when the SDK process remains healthy but its SA connection
is disconnected or has been shown unhealthy.

## Method

```text
briosa.SpatialAnalyzerSdkLifecycle/ReconnectToSpatialAnalyzer
```

## Request

```protobuf
message ReconnectToSpatialAnalyzerRequest {
  int32 expected_sdk_generation = 1;
}
```

The generation guard prevents a delayed reconnect request from affecting a
replacement SDK generation.

## Response

```protobuf
message ReconnectToSpatialAnalyzerResponse {
  SpatialAnalyzerSdkLifecycleState state = 1;
}
```

On success, the same SDK generation is connected, verified, and ready for MP
execution.

## Behavior

1. Briosa closes MP admission.
2. It verifies that the worker and SDK process are still healthy.
3. The existing SDK instance calls `ConnectEx("localhost", ...)` again.
4. Briosa repeats identity verification and the execution-readiness proof.
5. MP admission reopens only after success.

This method does not replace a missing or faulted SDK process. Use
[`RecoverSpatialAnalyzerSdk`](./recover-spatial-analyzer-sdk.md) to create a
replacement, then call `ConnectToSpatialAnalyzer` explicitly. Reconnect never
replays an interrupted MP command.

## gRPC Status

| Status | Failure Kind | Meaning |
| --- | --- | --- |
| `OK` | — | The current SDK generation is connected and ready. |
| `INVALID_ARGUMENT` | `VALIDATION` | The SDK generation is zero or malformed. |
| `ABORTED` | `STATE_CONFLICT` | The SDK generation changed or another transition is active. |
| `FAILED_PRECONDITION` | `RECONNECT_NOT_REQUIRED` | The SDK is already connected and ready. |
| `FAILED_PRECONDITION` | `SDK_RECOVERY_REQUIRED` | The SDK process or worker is unhealthy and must be recovered first. |
| `NOT_FOUND` | `APPLICATION_NOT_FOUND` | No local SDK-addressable SpatialAnalyzer application is available. |
| `FAILED_PRECONDITION` | `IDENTITY_MISMATCH` | Runtime identity evidence does not exactly match the target. |
| `UNAVAILABLE` | `SDK_CONNECTION_FAILED` | Reconnection or readiness verification failed. |
| `DEADLINE_EXCEEDED` | `TIMEOUT` | The reconnect bound expired. |
| `CANCELLED` | — | The caller cancelled its wait; query SDK state. |
