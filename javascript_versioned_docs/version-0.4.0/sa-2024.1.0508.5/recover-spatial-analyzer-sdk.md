---
title: recoverSpatialAnalyzerSdk
description: Replace a lost or faulted SDK without connecting or replaying an MP command from JavaScript or TypeScript.
---

# `recoverSpatialAnalyzerSdk`

[SA 2026.1.0529.7](/api/javascript/recover-spatial-analyzer-sdk) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/recover-spatial-analyzer-sdk)

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
