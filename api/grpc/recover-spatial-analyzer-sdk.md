---
title: RecoverSpatialAnalyzerSdk
description: Replace a lost or faulted SpatialAnalyzer SDK generation without connecting or replaying an MP command.
---

# `RecoverSpatialAnalyzerSdk`

Replaces Briosa's failed SDK generation after any required operator action is
complete. SpatialAnalyzer and the public Briosa server remain running.

## Method

```text
briosa.SpatialAnalyzerSdkLifecycle/RecoverSpatialAnalyzerSdk
```

## Request

```protobuf
message RecoverSpatialAnalyzerSdkRequest {
  int32 expected_sdk_generation = 1;
  SpatialAnalyzerSdkRecoveryMode mode = 2;
}
```

`mode` must be `REPLACE_WITHOUT_REPLAY`. The generation guard must identify the
current faulted generation.

## Response

```protobuf
message RecoverSpatialAnalyzerSdkResponse {
  SpatialAnalyzerSdkLifecycleState state = 1;
}
```

On success, a new SDK generation is `RUNNING` and `DISCONNECTED`, with
`ready_for_mp: false`. The previous incident remains available in
`last_incident`.

## Behavior

1. Briosa verifies the failed-generation guard and recovery state.
2. It cleans up surviving resources owned by that generation.
3. It starts a new worker and SDK instance.
4. It publishes the replacement as running and disconnected.

Recovery does not call `ConnectEx`, run the execution-readiness probe, or
replay an MP command. Call
[`ConnectToSpatialAnalyzer`](./connect-to-spatial-analyzer.md) afterward when a
local SDK-addressable application is available.

## gRPC Status

| Status | Failure Kind | Meaning |
| --- | --- | --- |
| `OK` | — | A new disconnected SDK generation replaced the failed one. |
| `INVALID_ARGUMENT` | `VALIDATION` | The generation is invalid or mode is not `REPLACE_WITHOUT_REPLAY`. |
| `ABORTED` | `STATE_CONFLICT` | The SDK generation changed or another transition is active. |
| `FAILED_PRECONDITION` | `RECOVERY_NOT_REQUIRED` | The SDK is stopped, running normally, or already recovering. |
| `FAILED_PRECONDITION` | `OPERATOR_ACTION_REQUIRED` | The environment is not yet safe for replacement. |
| `UNAVAILABLE` | `SDK_RECOVERY_FAILED` | The replacement SDK could not be started. |
| `DEADLINE_EXCEEDED` | `TIMEOUT` | The recovery bound expired. Query state before retrying. |
| `CANCELLED` | — | The caller cancelled its wait; query state before another transition. |

Recovery never changes an earlier `STARTED_OUTCOME_UNKNOWN` disposition.
