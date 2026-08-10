---
title: getWorkingDirectory
description: Call SpatialAnalyzer's Get Working Directory MP command from the Briosa JavaScript and TypeScript client.
---

# getWorkingDirectory

Calls SpatialAnalyzer's `Get Working Directory` MP command and returns its
`Directory` output as a JavaScript string.

:::note[Client API Under Development]

This page describes the reviewed public API planned for the first supported
Briosa JavaScript package release. Pre-release package checkouts may still
expose a temporary bootstrap interface.

:::

| API Item | Value |
| --- | --- |
| MP Command | [Get Working Directory](/mp-command-catalog/commands/file-operations#get-working-directory) |
| SpatialAnalyzer Group | File Operations |
| Briosa Status | **Current** |
| Package Export | `getWorkingDirectory` |
| MP Inputs | None |
| Return Value | `Promise<string>` |

## Example

```ts
import {
  createBriosaClient,
  getWorkingDirectory,
} from '@spatialanalyzer/briosa';

await using briosa = createBriosaClient();
await briosa.start();

const workingDirectory = await getWorkingDirectory(briosa);
```

`start()` must complete before the command is called. It starts or joins a
compatible Briosa session and verifies that SpatialAnalyzer is ready for MP
execution.

## Signature

```ts
function getWorkingDirectory(
  client: BriosaClient,
  options?: BriosaCallOptions,
): Promise<string>;
```

The command has no MP input object. The optional call options contain only an
`AbortSignal`; they remain separate from the MP command.

## Return Value

The promise resolves to the working directory reported by SpatialAnalyzer. The
client validates the required MP output and does not expose the generated gRPC
result message.

## Failures and Cancellation

A command failure rejects the returned promise through the handwritten Briosa
error hierarchy. Aborting the call does not prove that an in-flight
SpatialAnalyzer command was stopped, and the client does not automatically
replay a call with an uncertain outcome.

- [gRPC operation](/api/grpc/get-working-directory)
- [Understanding execution outcomes](/docs/concepts/execution-outcomes)
