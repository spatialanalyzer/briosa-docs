---
title: Run Your First MP Command
description: Start a ready Briosa session and call a familiar SpatialAnalyzer MP command from a first-party client library.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run Your First MP Command

This example calls SpatialAnalyzer's `Get Working Directory` MP command and
returns the result through a Briosa client library. The default startup call
prepares the server, SDK, and a fresh SpatialAnalyzer application before the MP
command runs.

Before continuing, install and license the supported SpatialAnalyzer release,
close competing SA and SDK instances, and complete the
[startup prerequisites](./prerequisites).

:::note[Status: Next]

These examples show the Lifecycle Foundation and idiomatic command APIs planned
for Briosa `v0.2`. They are not available in the current bootstrap packages.

:::

## Call `Get Working Directory`

Select your programming language:

<Tabs groupId="briosa-client-language" queryString="client-language">
  <TabItem value="dotnet" label=".NET (C#)" default>

```csharp
using Briosa;

await using var briosa = new BriosaClient();
await briosa.StartAsync();

string workingDirectory = await briosa.GetWorkingDirectoryAsync();
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
from briosa import BriosaClient


async with BriosaClient() as briosa:
    working_directory = await briosa.get_working_directory()
```

  </TabItem>
  <TabItem value="typescript" label="JavaScript / TypeScript">

```ts
import {
  createBriosaClient,
  getWorkingDirectory,
} from '@spatialanalyzer/briosa';

await using briosa = createBriosaClient();
await briosa.start();

const workingDirectory = await getWorkingDirectory(briosa);
```

  </TabItem>
</Tabs>

The startup call launches the exact-target Briosa server, starts its
disconnected SDK, launches a fresh exact-target SpatialAnalyzer application,
connects the SDK, and waits for MP execution readiness. The MP call then
returns the command's `Directory` output as an ordinary language-native string.

These examples use each language's asynchronous resource scope so the local
Briosa server, SDK generation, and client resources are cleaned up when the
scope ends, including when an exception leaves the scope. SpatialAnalyzer is
left running and retains any open work.

In a long-running application, the Briosa client normally lives for the
application's lifetime. Start it once, handle individual MP command failures
without automatically stopping it, and dispose of it during application
shutdown.

Use the language client's startup options when you need to attach to an
eligible application that is already running or deliberately delay SDK,
application, or connection startup.

:::caution[Treat Returned Values as Application Data]

Working directories and other MP results may contain project or customer
information. Do not paste returned values into screenshots, public issues, or
validation reports.

:::

## Call Briosa Through gRPC Directly

The first-party clients are the recommended application experience, but they
are not required. A language with gRPC support can generate a client from the
published Briosa protobuf contracts and call the same operation:

```text
briosa.FileOperations/GetWorkingDirectory
```

Before making that call, a direct gRPC application must:

1. Start a compatible local Briosa server.
2. Call `StartSpatialAnalyzerSdk`.
3. Optionally call `LaunchSpatialAnalyzer` when it needs a fresh application.
4. Call `ConnectToSpatialAnalyzer` and require `ready_for_mp = true`.

Starting the server or SDK alone is not enough. See the
[gRPC lifecycle API](/api/grpc/lifecycle) and
[Health and Discovery](../deployment/health-and-discovery) for the complete
contract.

For a local development server with gRPC reflection enabled, `grpcurl` can make
the MP call after those lifecycle steps complete:

```powershell
grpcurl -plaintext -d '{}' 127.0.0.1:50051 briosa.FileOperations/GetWorkingDirectory
```

The authoritative protobuf contracts are published by the
[Briosa server repository](https://github.com/spatialanalyzer/briosa/tree/main/targets/2026.1.0529.7/proto/briosa).

[Browse supported operations →](/api)
