---
title: ConnectToSpatialAnalyzer
description: Connect Briosa's running SA SDK instance to the local SDK-addressable SpatialAnalyzer application.
---

# `ConnectToSpatialAnalyzer`

Uses Briosa's current SDK generation to connect to the local SpatialAnalyzer
application that owns the SDK communication ports.

## Method

```text
briosa.SpatialAnalyzerSdkLifecycle/ConnectToSpatialAnalyzer
```

## Request

```protobuf
message ConnectToSpatialAnalyzerRequest {
  int32 expected_sdk_generation = 1;
}
```

| Field | Required | Meaning |
| --- | --- | --- |
| `expected_sdk_generation` | Yes | Current disconnected SDK generation returned by SDK startup or state inspection. |

## Response

```protobuf
message ConnectToSpatialAnalyzerResponse {
  SpatialAnalyzerSdkLifecycleState state = 1;
}
```

On success, SDK state is `READY`, connection state is `CONNECTED`, execution
readiness is `EXECUTION_READY`, and `ready_for_mp` is `true`.

## Preconditions

- The supplied SDK generation is current, running, and disconnected.
- A local SpatialAnalyzer application currently owns the required SDK ports.
- No other lifecycle transition is active.

Several SA windows may be open. The SDK chooses the local port-owning
application; Briosa does not select a process or window.

## Behavior

1. Briosa closes MP admission while connection is being established.
2. The worker calls `ConnectEx("localhost", ...)` on its owned SDK instance.
3. Briosa verifies the activated SDK and connected SA identities independently.
4. Briosa runs the bounded execution-channel readiness probe.
5. MP admission opens only after every check succeeds.

`ConnectEx` success is attachment evidence, not readiness proof. This RPC does
not launch SpatialAnalyzer or replace the SDK generation.

## gRPC Status

| Status | Failure Kind | Meaning |
| --- | --- | --- |
| `OK` | — | The SDK is connected, verified, and ready for MP execution. |
| `INVALID_ARGUMENT` | `VALIDATION` | The SDK generation is zero or malformed. |
| `ABORTED` | `STATE_CONFLICT` | The SDK generation changed or another transition is active. |
| `FAILED_PRECONDITION` | `SDK_NOT_RUNNING` | No live SDK generation is available. |
| `FAILED_PRECONDITION` | `SDK_ALREADY_CONNECTED` | The SDK is already connected or ready. |
| `NOT_FOUND` | `APPLICATION_NOT_FOUND` | No local SDK-addressable SpatialAnalyzer application is available. |
| `FAILED_PRECONDITION` | `IDENTITY_MISMATCH` | The activated SDK or connected application does not exactly match the target. |
| `FAILED_PRECONDITION` | `OPERATOR_ACTION_REQUIRED` | A competing client or ambiguous readiness probe requires operator action. |
| `UNAVAILABLE` | `SDK_CONNECTION_FAILED` | `ConnectEx` or connection verification failed. |
| `DEADLINE_EXCEEDED` | `TIMEOUT` | The connection or readiness bound expired. |
| `CANCELLED` | — | The caller cancelled its wait; query SDK state before another transition. |

After a non-validation failure, inspect
[`GetSpatialAnalyzerSdkState`](./get-spatial-analyzer-sdk-state.md) before
connecting again.
