---
title: getSpatialAnalyzerState
description: Read SpatialAnalyzer application and ownership state from JavaScript or TypeScript.
---

# `getSpatialAnalyzerState`

Reads SpatialAnalyzer application state without changing the application or
SA SDK.

## Signature

```ts
getSpatialAnalyzerState(
  options?: BriosaLifecycleCallOptions,
): Promise<SpatialAnalyzerLifecycleState>;
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `options.signal` | `AbortSignal` | `undefined` | Aborts this caller's wait. |

## Returns

A point-in-time application state containing ownership, the application
generation, and a safe diagnostic code. SDK state is returned separately by
`getSpatialAnalyzerSdkState()`.

## Example

```ts
const application = await briosa.getSpatialAnalyzerState();

if (application.applicationState === 'running') {
  const sdk = await briosa.getSpatialAnalyzerSdkState();
}
```

## Errors

| Error | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The client is not started. |
| `BriosaProtocolError` | The server returned an invalid state shape. |
| `BriosaCallAbortedError` | The caller aborted its wait. |

The method is safe to repeat and exposes no process IDs, paths, registry data,
or SDK status codes.
