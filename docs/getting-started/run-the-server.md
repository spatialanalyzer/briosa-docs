---
title: Start Briosa
description: Start a compatible Briosa server and connect it to SpatialAnalyzer.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Start Briosa

Most users should not need to configure or operate the Briosa server directly.
The first-party client libraries are designed to manage the local Briosa
lifecycle for your application: select the server distribution that matches
your SpatialAnalyzer release, start it, verify that it is ready, and connect
your application.

This keeps server paths, processes, compatibility checks, and connection setup
out of ordinary application code.

:::note[Status: Next]

This page shows the Lifecycle Foundation planned for Briosa `v0.2`. The
coordinated server and client implementations are not available in the current
bootstrap packages.

:::

## Before You Start

- Install and license the supported SpatialAnalyzer release on a Windows x64
  workstation
- Start exactly one matching SpatialAnalyzer instance and wait for it to finish
  opening
- Close any other application currently controlling that SpatialAnalyzer
  instance through the SA SDK
- Install the Briosa client package for your programming language

SpatialAnalyzer remains separate software. Briosa does not install it, include
a license, or replace its user interface.

## Start from a First-Party Client

The accepted client designs provide an explicit asynchronous startup operation.
Select a language to see the intended import, client construction, and startup
sequence:

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

The startup operation completes only after the client has established a usable
local Briosa session. It:

- Selecting a Briosa distribution for the exact SpatialAnalyzer target
- Starting the local Briosa server
- Waiting for both server liveness and MP readiness
- Verifying server and protocol compatibility
- Loading the MP operations admitted by the running server

After startup succeeds, the application can invoke supported MP commands. A
failed startup leaves MP commands unavailable rather than connecting the
application to an unverified server.

The parameterless examples use a client-owned server. Your application does not
need to choose an endpoint or manage the server process. When the client is
cleaned up, it stops only the server generation it launched. It never closes
SpatialAnalyzer.

## Connect to a Server You Manage

If your application or an operator starts Briosa separately, supply its
loopback endpoint when creating the client. Startup performs the same
verification, but cleanup releases only the client connection and leaves the
external server running. The v0.2 clients reject non-loopback endpoints.

<Tabs groupId="briosa-client-language" queryString="client-language">
  <TabItem value="dotnet" label=".NET (C#)" default>

```csharp
using Briosa;

await using var briosa = new BriosaClient(
    BriosaClientOptions.External(
        new Uri("http://127.0.0.1:50051")));

await briosa.StartAsync();
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
from briosa import BriosaClient, BriosaClientOptions


briosa = BriosaClient(
    BriosaClientOptions(
        endpoint="http://127.0.0.1:50051",
    )
)
await briosa.start()
```

  </TabItem>
  <TabItem value="typescript" label="JavaScript / TypeScript">

```ts
import { createBriosaClient } from '@spatialanalyzer/briosa';

const briosa = createBriosaClient({
  endpoint: 'http://127.0.0.1:50051',
});
await briosa.start();
```

  </TabItem>
</Tabs>

See [Start, Use, and Stop Briosa](../concepts/client-lifecycle) for readiness,
restart, timeout, cancellation, and ownership behavior.

## Use Briosa from Another Language

A language does not need a dedicated Briosa package to use the product. Any
runtime with gRPC support can use the published protobuf contracts and connect
to a compatible standalone Briosa server distribution.

Standalone installation and launch instructions will accompany each supported
server distribution. A distribution is built for one exact SpatialAnalyzer
release; do not reuse it with another release merely because the public command
names look the same.

The initial server endpoint is intentionally available only on the local
machine. Do not expose it through a network binding, proxy, or tunnel until
Briosa defines and implements its remote authentication, authorization, and
transport-security model.

## Testing Briosa from Source

Running the server from a source checkout is a contributor workflow, not the
end-user installation path. Contributors who need to exercise a development
build against a licensed SpatialAnalyzer environment should follow the
[local gRPC server guide](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/development/local-grpc-server.md)
in the Briosa server repository.

[Make the first request →](./first-request)
