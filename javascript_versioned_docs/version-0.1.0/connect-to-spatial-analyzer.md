---
title: connectToSpatialAnalyzer
description: Connect Briosa's running SA SDK instance to local SpatialAnalyzer from JavaScript or TypeScript.
---

# `connectToSpatialAnalyzer`

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
