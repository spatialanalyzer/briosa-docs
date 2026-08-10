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

:::note[Client-Managed Startup Is Under Development]

The .NET, Python, and JavaScript client libraries are still implementing this
experience. Installation and release-specific setup instructions will be added
as the first supported packages and server distributions become available.

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
using Briosa.Client;

var briosa = new BriosaClient();
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
local Briosa session. It is responsible for:

- Selecting a Briosa distribution for the exact SpatialAnalyzer target
- Starting the local Briosa server
- Waiting for both server liveness and MP readiness
- Verifying server and protocol compatibility
- Loading the MP operations admitted by the running server

After startup succeeds, the application can invoke supported MP commands. A
failed startup leaves MP commands unavailable rather than connecting the
application to an unverified server.

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
