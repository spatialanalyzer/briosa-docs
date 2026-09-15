---
title: CloseOwnedSpatialAnalyzer
description: Close only a stopped-SDK SpatialAnalyzer application launched by the current Briosa server.
---

# `CloseOwnedSpatialAnalyzer`

Closes one SpatialAnalyzer application only when the current Briosa server
launched it and can still prove its exact process identity.

## Method

```text
briosa.SpatialAnalyzerLifecycle/CloseOwnedSpatialAnalyzer
```

## Request

```protobuf
message CloseOwnedSpatialAnalyzerRequest {
  int32 expected_application_generation = 1;
}
```

| Field | Required | Meaning |
| --- | --- | --- |
| `expected_application_generation` | Yes | Nonzero generation returned by application state or launch. The call fails if the selected application changed. |

## Response

```protobuf
message CloseOwnedSpatialAnalyzerResponse {
  SpatialAnalyzerLifecycleState state = 1;
}
```

On success, `application_state` is `NOT_RUNNING`, ownership is `NONE`, and
`application_generation` is absent.

## Preconditions

- The supplied application generation is current.
- Ownership is `SERVER_LAUNCHED`.
- The SpatialAnalyzer SDK state is `STOPPED`.
- No other lifecycle transition is active.

Call [`StopSpatialAnalyzerSdk`](./stop-spatial-analyzer-sdk.md) first if an SDK
generation is still active. Briosa does not combine SDK shutdown with
application shutdown because those lifecycles have different failure and
recovery semantics.

## Behavior

- Briosa requests a normal close only for the retained owned process identity.
- If the application does not close within the configured bound, the RPC fails
  and reports the resulting state. It does not silently kill an uncertain
  process.
- The call never closes an externally started application.
- The call never closes unrelated SpatialAnalyzer or SDK processes.

## gRPC Status

| Status | Failure Kind | Meaning |
| --- | --- | --- |
| `OK` | — | The owned application generation closed. |
| `INVALID_ARGUMENT` | `VALIDATION` | The expected generation is zero or malformed. |
| `ABORTED` | `STATE_CONFLICT` | The application generation changed. Refresh state. |
| `FAILED_PRECONDITION` | `NOT_OWNED` | The application was started outside this server or ownership cannot be proved. |
| `FAILED_PRECONDITION` | `SDK_NOT_STOPPED` | An SDK generation is still active or recovering. |
| `FAILED_PRECONDITION` | `STATE_CONFLICT` | Another lifecycle transition is active. |
| `DEADLINE_EXCEEDED` | `TIMEOUT` | The application did not close within the server bound. |
| `CANCELLED` | — | The caller cancelled its wait; inspect state before retrying. |
| `INTERNAL` | `INTERNAL` | Briosa could not preserve a valid lifecycle state. |

The operation is generation-guarded, but a timed-out or cancelled call is not
blindly repeatable. Refresh state first.
