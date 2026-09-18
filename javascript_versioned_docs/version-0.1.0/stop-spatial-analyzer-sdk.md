---
title: stopSpatialAnalyzerSdk
description: Stop Briosa's current SpatialAnalyzer SDK generation while leaving SpatialAnalyzer running from JavaScript or TypeScript.
---

# `stopSpatialAnalyzerSdk`

Closes MP admission and stops Briosa's current SDK generation without closing
SpatialAnalyzer or the public Briosa server.

## Signature

```ts
stopSpatialAnalyzerSdk(
  options?: BriosaLifecycleCallOptions,
): Promise<SpatialAnalyzerSdkLifecycleState>;
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `options.signal` | `AbortSignal` | `undefined` | Aborts this caller's SDK shutdown wait. |

The client supplies the current SDK generation guard automatically.

## Returns

On success, SDK state is `stopped`, MP readiness is false, and there is no
current SDK generation.

## Example

```ts
const sdk = await briosa.stopSpatialAnalyzerSdk();

// SpatialAnalyzer and the Briosa server are still running.
```

## Errors

| Error | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerSdkError` | No matching SDK generation exists, it changed, or shutdown failed. |
| `BriosaCallAbortedError` | The caller aborted its wait; inspect SDK state. |

The method never closes SpatialAnalyzer and never makes an interrupted MP
command safe to replay.
