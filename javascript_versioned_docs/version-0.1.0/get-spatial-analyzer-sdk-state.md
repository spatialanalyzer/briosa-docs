---
title: getSpatialAnalyzerSdkState
description: Diagnose SpatialAnalyzer SDK process, connection, readiness, incident, and recovery state from JavaScript or TypeScript.
---

# `getSpatialAnalyzerSdkState`

Reads the independently managed SA SDK state. Use it after an unexpected SDK
exit, connection failure, worker failure, or aborted lifecycle call.

## Signature

```ts
getSpatialAnalyzerSdkState(
  options?: BriosaLifecycleCallOptions,
): Promise<SpatialAnalyzerSdkLifecycleState>;
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `options.signal` | `AbortSignal` | `undefined` | Aborts this caller's wait. |

## Returns

A point-in-time SDK state. `lastIncident` identifies the most recent unexpected
SDK-generation loss and remains available after recovery.

## Diagnostic Example

```ts
let sdk = await briosa.getSpatialAnalyzerSdkState();

if (sdk.lastIncident?.executionDisposition === 'startedOutcomeUnknown') {
  // Reconcile SpatialAnalyzer state before considering command replay.
}

if (sdk.recoveryState === 'recoveryAvailable') {
  sdk = await briosa.recoverSpatialAnalyzerSdk('replaceWithoutReplay');
  sdk = await briosa.connectToSpatialAnalyzer();
}
```

## Errors

| Error | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The client is not started. |
| `BriosaProtocolError` | The server returned an invalid state or incident shape. |
| `BriosaCallAbortedError` | The caller aborted its wait. |

For an active generation, the server refreshes tracked SDK-process and worker
liveness before responding. The method does not execute an MP command or start,
stop, or recover the SDK, though detecting a lost process can publish a faulted
state.
