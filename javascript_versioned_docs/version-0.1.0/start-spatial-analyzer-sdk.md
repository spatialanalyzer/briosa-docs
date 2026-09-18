---
title: startSpatialAnalyzerSdk
description: Start a new disconnected Briosa-owned SpatialAnalyzer SDK instance from JavaScript or TypeScript.
---

# `startSpatialAnalyzerSdk`

```ts
startSpatialAnalyzerSdk(
  options?: BriosaLifecycleCallOptions,
): Promise<SpatialAnalyzerSdkLifecycleState>;
```

Starts Briosa's isolated SDK generation without launching or connecting to
SpatialAnalyzer. On success, SDK state is `running`, connection state is
`disconnected`, `readyForMp` is `false`, and a new generation is present.

```ts
let sdk = await briosa.startSpatialAnalyzerSdk();
sdk = await briosa.connectToSpatialAnalyzer();
```

The default [`start`](./start.md) procedure invokes this behavior automatically.
Use it directly after deliberately stopping the SDK or when a future reviewed
startup option delays SDK orchestration.

The method never calls `ConnectEx`, launches SpatialAnalyzer, or closes another
program's SDK engine. Failures use the normal lifecycle, SDK, and abort error
boundaries.
