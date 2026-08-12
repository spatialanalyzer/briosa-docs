---
title: Symbol.asyncDispose
description: Perform final asynchronous cleanup of a JavaScript BriosaClient handle.
---

# `Symbol.asyncDispose`

Performs final client cleanup and permanently disposes the handle.

## Signature

```ts
[Symbol.asyncDispose](): Promise<void>;
```

## Arguments

The method has no arguments.

## Returns

A promise that resolves with `undefined` after final client cleanup.

## Recommended Usage

```ts
import {
  createBriosaClient,
  getWorkingDirectory,
} from '@spatialanalyzer/briosa';

await using briosa = createBriosaClient();
await briosa.start();

const workingDirectory = await getWorkingDirectory(briosa);
```

JavaScript awaits `Symbol.asyncDispose` when the scope exits, including when an
exception leaves the scope.

## Behavior

- Follows the same cleanup rules as `stop()`.
- Stops the server launched by this handle and its SDK generation.
- Never calls `closeOwnedSpatialAnalyzer()` automatically.
- Leaves every SpatialAnalyzer application running.
- Is safe to call more than once.
- Permanently prevents later lifecycle or MP calls.

Later calls reject with `BriosaLifecycleError`.
