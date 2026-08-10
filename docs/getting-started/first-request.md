---
title: Run Your First MP Command
description: Start Briosa and call a familiar SpatialAnalyzer MP command from a first-party client library.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run Your First MP Command

This example calls SpatialAnalyzer's `Get Working Directory` MP command and
returns the result through a Briosa client library. It demonstrates the normal
application flow: create a client, start Briosa, call an MP command, and clean
up the client-owned Briosa session.

Before continuing, install and license the supported SpatialAnalyzer release,
start one matching SpatialAnalyzer instance, and complete the
[startup prerequisites](./prerequisites).

:::note[Client Libraries Are Under Development]

These examples show the accepted direction for the first-party .NET, Python,
and JavaScript client APIs. Complete package installation instructions will be
added as the first supported client releases become available.

:::

## Call `Get Working Directory`

Select your programming language:

<Tabs groupId="briosa-client-language" queryString="client-language">
  <TabItem value="dotnet" label=".NET (C#)" default>

```csharp
using Briosa.Client;

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

The startup call selects and launches the matching Briosa server, waits until
MP execution is ready, verifies compatibility, and loads the operations
available to the application. The MP call then returns the command's `Directory`
output as an ordinary language-native string.

These short examples use each language's asynchronous resource scope so the
client-owned Briosa session is cleaned up when the scope ends, including when
an exception leaves the scope.

In a long-running application, the Briosa client normally lives for the
application's lifetime. Start it once, handle individual MP command failures
without automatically stopping it, and dispose of it during application
shutdown. Client cleanup does not close SpatialAnalyzer or discard work open in
the SpatialAnalyzer application.

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

For a local Development server with gRPC reflection enabled, `grpcurl` can make
the call directly:

```powershell
grpcurl -plaintext -d '{}' 127.0.0.1:50051 briosa.FileOperations/GetWorkingDirectory
```

A direct gRPC application is responsible for starting a compatible Briosa
server, checking readiness, verifying compatibility, discovering available
operations, and handling typed operation failures. See
[Health and discovery](../deployment/health-and-discovery) for those details.

The authoritative protobuf contracts are published by the
[Briosa server repository](https://github.com/spatialanalyzer/briosa/tree/main/targets/2026.1.0529.7/proto/briosa).

[Browse supported operations →](/api)
