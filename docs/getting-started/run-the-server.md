---
title: Start Briosa and Prepare SpatialAnalyzer
description: Use the default client startup or manage the local Briosa, SDK, and SpatialAnalyzer lifecycles explicitly through gRPC.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Start Briosa and Prepare SpatialAnalyzer

The first-party clients prepare a complete working session by default. One
startup call launches Briosa, starts its SDK, launches a fresh SpatialAnalyzer
application, connects the two, and waits until MP commands are ready.

The Briosa server, SDK, and SpatialAnalyzer application still have independent
lifecycles. Direct gRPC users can start and control each resource separately,
and client applications can diagnose or recover the SDK without restarting SA.

:::note[Status: Next]

This page shows the Lifecycle Foundation planned for Briosa `v0.2`. The
coordinated server and client implementations are not available in the current
bootstrap packages.

:::

## Before You Start

- Install and license the supported SpatialAnalyzer release on a Windows x64
  workstation
- Close competing SDK clients and SpatialAnalyzer instances
- Install the Briosa client package for your programming language

SpatialAnalyzer remains separate software. Briosa does not install it, include
a license, or replace its user interface.

## Start from a First-Party Client

<Tabs groupId="briosa-client-language" queryString="client-language">
  <TabItem value="dotnet" label=".NET (C#)" default>

```csharp
using Briosa;

await using var briosa = new BriosaClient();
await briosa.StartAsync();
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
from briosa import BriosaClient


briosa = BriosaClient()
await briosa.start()
```

  </TabItem>
  <TabItem value="typescript" label="JavaScript / TypeScript">

```ts
import { createBriosaClient } from '@spatialanalyzer/briosa';

const briosa = createBriosaClient();
await briosa.start();
```

  </TabItem>
</Tabs>

The parameterless startup call performs the default sequence:

1. Select and launch the exact-target Briosa server on an owned loopback
   endpoint.
2. Start a new disconnected SA SDK instance.
3. Launch a fresh exact-target SpatialAnalyzer application.
4. Connect the SDK to local SpatialAnalyzer.
5. Verify exact runtime identity and MP execution readiness.

The call returns only when supported MP commands are ready. Startup options can
disable individual phases. For example, attach to an eligible SpatialAnalyzer
application that is already running instead of launching another one:

<Tabs groupId="briosa-client-language" queryString="client-language">
  <TabItem value="dotnet" label=".NET (C#)" default>

```csharp
await briosa.StartAsync(new BriosaStartOptions
{
    LaunchSpatialAnalyzer = false,
});
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
from briosa import BriosaStartOptions


await briosa.start(
    BriosaStartOptions(launch_spatial_analyzer=False),
)
```

  </TabItem>
  <TabItem value="typescript" label="JavaScript / TypeScript">

```ts
await briosa.start({
  launchSpatialAnalyzer: false,
});
```

  </TabItem>
</Tabs>

Each language also exposes controlled application launch options for an initial
local job file, an instrument quick-start for a new job, and minimized startup.
The client API reference documents the complete option shapes and validation
rules.

## Start the Server Manually

Starting the executable directly has intentionally different behavior:

```powershell
./Briosa.Server.exe
```

The process starts only its local gRPC control plane. It does not start the SA
SDK, launch SpatialAnalyzer, or call `ConnectEx`.

A direct gRPC application uses this explicit sequence:

1. Call [`StartSpatialAnalyzerSdk`](/api/grpc/start-spatial-analyzer-sdk). The
   new SDK is running but disconnected.
2. Optionally call [`LaunchSpatialAnalyzer`](/api/grpc/launch-spatial-analyzer)
   to launch a fresh exact-target application. Skip this when an eligible SA
   application is already running. The request can select an initial local job
   file or quick-start instrument and can start SA minimized.
3. Call
   [`ConnectToSpatialAnalyzer`](/api/grpc/connect-to-spatial-analyzer). This is
   the only step that calls `ConnectEx("localhost", ...)` and establishes MP
   readiness.

The same explicit RPCs let operators keep the server running while stopping or
replacing its SDK.

## Diagnose or Recover the SDK

If the SDK engine is closed by another program, Briosa closes MP admission and
records the failure in SDK lifecycle state. Inspect that state before deciding
what to do next:

<Tabs groupId="briosa-client-language" queryString="client-language">
  <TabItem value="dotnet" label=".NET (C#)" default>

```csharp
SpatialAnalyzerSdkLifecycleState sdk =
    await briosa.GetSpatialAnalyzerSdkStateAsync();

if (sdk.RecoveryState == SpatialAnalyzerSdkRecoveryState.RecoveryAvailable)
{
    sdk = await briosa.RecoverSpatialAnalyzerSdkAsync(
        SpatialAnalyzerSdkRecoveryMode.ReplaceWithoutReplay);
    sdk = await briosa.ConnectToSpatialAnalyzerAsync();
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
from briosa import SpatialAnalyzerSdkRecoveryMode, SpatialAnalyzerSdkRecoveryState


sdk = await briosa.get_spatial_analyzer_sdk_state()

if sdk.recovery_state is SpatialAnalyzerSdkRecoveryState.RECOVERY_AVAILABLE:
    sdk = await briosa.recover_spatial_analyzer_sdk(
        SpatialAnalyzerSdkRecoveryMode.REPLACE_WITHOUT_REPLAY,
    )
    sdk = await briosa.connect_to_spatial_analyzer()
```

  </TabItem>
  <TabItem value="typescript" label="JavaScript / TypeScript">

```ts
let sdk = await briosa.getSpatialAnalyzerSdkState();

if (sdk.recoveryState === 'recoveryAvailable') {
  sdk = await briosa.recoverSpatialAnalyzerSdk('replaceWithoutReplay');
  sdk = await briosa.connectToSpatialAnalyzer();
}
```

  </TabItem>
</Tabs>

Recovery replaces the failed SDK and leaves the replacement disconnected. The
follow-up connect call attaches it to local SpatialAnalyzer and proves MP
readiness. If the current SDK is still healthy and only its connection must be
retried, use the language client's reconnect method instead.

Neither action retries an interrupted MP command. If the last incident reports
`STARTED_OUTCOME_UNKNOWN`, reconcile SpatialAnalyzer state before considering
any replay.

See
[Manage Briosa, SDK, and SpatialAnalyzer Lifecycles](../concepts/client-lifecycle)
for ownership, readiness, timeout, cancellation, and cleanup behavior.

## Use Briosa from Another Language

A language does not need a dedicated Briosa package to use the product. Any
runtime with gRPC support can use the published protobuf contracts and connect
to a compatible standalone Briosa server distribution on the same machine.

Standalone installation and launch instructions will accompany each supported
server distribution. A distribution is built for one exact SpatialAnalyzer
release; do not reuse it with another release merely because the public command
names look the same.

The current server endpoint is intentionally available only on the local
machine. Do not expose it through a network binding, proxy, or tunnel until
Briosa implements its planned remote authentication, authorization, and
transport-security model. Secure remote execution is
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

## Testing Briosa from Source

Running the server from a source checkout is a contributor workflow, not the
end-user installation path. Contributors who need to exercise a development
build against a licensed SpatialAnalyzer environment should follow the
[local gRPC server guide](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/development/local-grpc-server.md)
in the Briosa server repository.

[Make the first request →](./first-request)
