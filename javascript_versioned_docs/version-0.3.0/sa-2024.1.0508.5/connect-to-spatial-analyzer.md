---
title: connectToSpatialAnalyzer
description: Connect Briosa's running SA SDK instance to local SpatialAnalyzer from JavaScript or TypeScript.
---

# `connectToSpatialAnalyzer`

[SA 2026.1.0529.7](/api/javascript/connect-to-spatial-analyzer) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/connect-to-spatial-analyzer)

```ts
connectToSpatialAnalyzer(
  options?: BriosaLifecycleCallOptions,
): Promise<SpatialAnalyzerSdkLifecycleState>;
```

Calls `ConnectEx("localhost", ...)`, verifies exact SDK and connected-SA
identity, proves execution readiness, and opens MP admission. The handle
supplies the current SDK generation guard automatically.

```ts
const sdk = await briosa.connectToSpatialAnalyzer();
```

On success, SDK state is `ready`, connection state is `connected`, and
`readyForMp` is `true`. The method does not launch SA, select a window, replace
the SDK, or accept a remote host. Failures use the normal lifecycle,
SpatialAnalyzer, SDK, compatibility, and abort error boundaries.
