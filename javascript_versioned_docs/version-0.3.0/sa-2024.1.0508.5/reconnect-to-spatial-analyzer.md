---
title: reconnectToSpatialAnalyzer
description: Re-establish an unhealthy local SpatialAnalyzer connection using Briosa's current live SDK instance.
---

# `reconnectToSpatialAnalyzer`

[SA 2026.1.0529.7](/api/javascript/reconnect-to-spatial-analyzer) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/reconnect-to-spatial-analyzer)

```ts
reconnectToSpatialAnalyzer(
  options?: BriosaLifecycleCallOptions,
): Promise<SpatialAnalyzerSdkLifecycleState>;
```

Reconnect calls `ConnectEx("localhost", ...)` again on the current live SDK
generation, repeats verification, and never replays an MP command.

```ts
let sdk = await briosa.getSpatialAnalyzerSdkState();

if (sdk.connectionState !== 'connected') {
  sdk = await briosa.reconnectToSpatialAnalyzer();
}
```

If the SDK process or worker is unhealthy, recover it first and explicitly
connect the replacement. Failures use the normal lifecycle, SpatialAnalyzer,
SDK, compatibility, and abort error boundaries.
