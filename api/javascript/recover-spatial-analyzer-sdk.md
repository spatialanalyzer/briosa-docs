---
title: recoverSpatialAnalyzerSdk
description: Replace a lost or faulted SDK without connecting or replaying an MP command from JavaScript or TypeScript.
---

# `recoverSpatialAnalyzerSdk`

```ts
recoverSpatialAnalyzerSdk(
  mode: SpatialAnalyzerSdkRecoveryMode,
  options?: BriosaLifecycleCallOptions,
): Promise<SpatialAnalyzerSdkLifecycleState>;
```

`mode` must be `'replaceWithoutReplay'`. On success, the replacement SDK is
`running` and `disconnected`; the previous failure remains in `lastIncident`.

```ts
let sdk = await briosa.recoverSpatialAnalyzerSdk('replaceWithoutReplay');
sdk = await briosa.connectToSpatialAnalyzer();
```

Recovery does not call `ConnectEx` or replay or resolve an earlier command.
Failures use the normal validation, lifecycle, SDK, and abort error boundaries.
