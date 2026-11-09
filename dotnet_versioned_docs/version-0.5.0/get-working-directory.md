---
title: GetWorkingDirectoryAsync
description: Call SpatialAnalyzer's Get Working Directory MP command from the Briosa .NET client.
---

# GetWorkingDirectoryAsync

[SA 2026.1.0529.7](/api/dotnet/get-working-directory) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/get-working-directory)

Calls SpatialAnalyzer's `Get Working Directory` MP command and returns its
`Directory` output as a .NET string.

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

`StartAsync()` must complete before the command is called. Its default procedure
launches the local server, SDK, and a fresh SpatialAnalyzer application, then
connects and verifies MP readiness.

## Signature

```csharp
public Task<string> GetWorkingDirectoryAsync(
    Action<MpCompletion>? onMpCompletion = null,
    CancellationToken cancellationToken = default);
```

The command has no MP inputs. The optional `onMpCompletion` observer receives
how the MP command completed when the call succeeds, and the optional
`cancellationToken` controls how long the caller waits. Neither is part of the
MP command; pass the token by name when you leave the observer out.

## Return Value

The task completes with the working directory reported by SpatialAnalyzer. The
client validates the required MP output and does not expose the generated gRPC
result envelope. A partial success (MP code 4) still returns the directory; the
observer reports it as `PartialSuccess`. See
[MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Failures and Cancellation

A command failure faults the returned task through the handwritten Briosa
exception model. Caller cancellation does not prove that an in-flight
SpatialAnalyzer command was stopped, and the client does not automatically
replay a call with an uncertain outcome.

- [gRPC operation](/api/grpc/get-working-directory)
- [`BriosaClient` lifecycle](./lifecycle)
- [Understanding execution outcomes](/docs/concepts/execution-outcomes)
