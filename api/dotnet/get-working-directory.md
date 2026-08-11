---
title: GetWorkingDirectoryAsync
description: Call SpatialAnalyzer's Get Working Directory MP command from the Briosa .NET client.
---

# GetWorkingDirectoryAsync

Calls SpatialAnalyzer's `Get Working Directory` MP command and returns its
`Directory` output as a .NET string.

:::note[Status: Next]

This page describes the reviewed public API planned for the first supported
Briosa .NET package release. Pre-release package checkouts may still expose a
temporary bootstrap interface.

:::

| API Item | Value |
| --- | --- |
| MP Command | [Get Working Directory](/mp-command-catalog/commands/file-operations#get-working-directory) |
| SpatialAnalyzer Group | File Operations |
| MP Command Status | **Current** |
| Client | `BriosaClient` |
| Method | `GetWorkingDirectoryAsync` |
| MP Inputs | None |
| Return Value | `Task<string>` |

## Example

```csharp
using Briosa;

await using var briosa = new BriosaClient();
await briosa.StartAsync();

string workingDirectory = await briosa.GetWorkingDirectoryAsync();
```

`StartAsync()` must complete before the command is called. It launches an owned
server or connects to the configured external server, then verifies that
SpatialAnalyzer is ready for MP execution.

## Signature

```csharp
public Task<string> GetWorkingDirectoryAsync(
    CancellationToken cancellationToken = default);
```

The command has no MP inputs. The optional `cancellationToken` controls how long
the caller waits; it is not part of the MP command.

## Return Value

The task completes with the working directory reported by SpatialAnalyzer. The
client validates the required MP output and does not expose the generated gRPC
result envelope.

## Failures and Cancellation

A command failure faults the returned task through the handwritten Briosa
exception model. Caller cancellation does not prove that an in-flight
SpatialAnalyzer command was stopped, and the client does not automatically
replay a call with an uncertain outcome.

- [gRPC operation](/api/grpc/get-working-directory)
- [`BriosaClient` lifecycle](./lifecycle)
- [Understanding execution outcomes](/docs/concepts/execution-outcomes)
