---
title: getWorkingDirectory
description: Call SpatialAnalyzer's Get Working Directory MP command from the Briosa JavaScript and TypeScript client.
---

# getWorkingDirectory

[SA 2026.1.0529.7](/api/javascript/get-working-directory) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/get-working-directory)

Calls SpatialAnalyzer's `Get Working Directory` MP command and returns its
`Directory` output as a JavaScript string.

| API Item | Value |
| --- | --- |
| MP Command | [Get Working Directory](/mp-command-catalog/commands/file-operations#get-working-directory) |
| SpatialAnalyzer Group | File Operations |
| MP Command Status | **Current** |
| Package Export | `getWorkingDirectory` |
| MP Inputs | None |
| Return Value | `Promise<string>` |

## Example

```ts
import {
  createBriosaClient,
  getWorkingDirectory,
} from 'briosa';

await using briosa = createBriosaClient();
await briosa.start();

const workingDirectory = await getWorkingDirectory(briosa);
```

`start()` must complete before the command is called. Its default procedure
launches the local server, SDK, and a fresh SpatialAnalyzer application, then
connects and verifies MP readiness.

## Signature

```ts
export declare function getWorkingDirectory(
  client: BriosaClient,
  options?: BriosaCallOptions,
): Promise<string>;
```

The command has no MP input object. The optional `BriosaCallOptions` carry the
`signal` that aborts the caller's wait and the `onMpCompletion` observer
(contract major 3); neither is part of the MP command.

## Return Value

The promise resolves to the working directory reported by SpatialAnalyzer. The
client validates the required MP output and does not expose the generated gRPC
result message. A partial success (MP code 4) still resolves with the directory,
and `onMpCompletion` reports it as `partialSuccess`. A missing directory output
rejects with `BriosaProtocolError` and diagnostic `working-directory-missing`.

## Observing the MP Completion

```ts
const workingDirectory = await getWorkingDirectory(briosa, {
  onMpCompletion: ({ state, mpResultCode }) => {
    // state is 'succeeded' (MP code 2) or 'partialSuccess' (MP code 4)
  },
});
```

The client calls the observer once, after it has checked the completion and
before it maps the directory. See [MP Completion](./lifecycle.md#mp-completion).

## Failures and Cancellation

A command failure rejects the returned promise through the handwritten Briosa
error hierarchy, described in [Operation Errors](./lifecycle.md#operation-errors).
A success whose MP completion is missing or inconsistent rejects with
`BriosaProtocolError` (`mp-completion-missing` or `mp-completion-invalid`).
Aborting the call does not prove that an in-flight SpatialAnalyzer command was
stopped, and the client does not automatically replay a call with an uncertain
outcome.

- [gRPC operation](/api/grpc/sa-2024.1.0508.5/get-working-directory)
- [`BriosaClient` lifecycle](./lifecycle)
- [Understanding execution outcomes](/docs/concepts/execution-outcomes)
