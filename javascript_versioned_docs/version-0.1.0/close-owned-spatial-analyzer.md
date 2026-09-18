---
title: closeOwnedSpatialAnalyzer
description: Close a stopped-SDK SpatialAnalyzer application launched by the current Briosa server from JavaScript or TypeScript.
---

# `closeOwnedSpatialAnalyzer`

Closes only the exact SpatialAnalyzer application launched by the connected
Briosa server.

## Signature

```ts
closeOwnedSpatialAnalyzer(
  options?: BriosaLifecycleCallOptions,
): Promise<SpatialAnalyzerLifecycleState>;
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `options.signal` | `AbortSignal` | `undefined` | Aborts this caller's close wait. |

The client supplies the latest application generation guard automatically.

## Returns

On success, application state is `notRunning`, ownership is `none`, and the
application generation is `null`.

## Example

```ts
await briosa.stopSpatialAnalyzerSdk();
const application = await briosa.closeOwnedSpatialAnalyzer();
```

## Preconditions

- The application is still owned by this Briosa server.
- The SA SDK is stopped.
- No other lifecycle transition is active.

## Errors

| Error | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerError` | The application is external, changed, still has an active SDK, or did not close. |
| `BriosaCallAbortedError` | The caller aborted its wait; inspect application state. |

The method never closes an externally started application or another program's
SDK process.
