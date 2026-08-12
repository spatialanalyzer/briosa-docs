---
title: get_working_directory
description: Call SpatialAnalyzer's Get Working Directory MP command from the Briosa Python client.
---

# get_working_directory

Calls SpatialAnalyzer's `Get Working Directory` MP command and returns its
`Directory` output as a Python string.

:::note[Status: Next]

This page describes the reviewed public API planned for the first supported
Briosa Python package release. Pre-release package checkouts may still expose a
temporary bootstrap interface.

:::

| API Item | Value |
| --- | --- |
| MP Command | [Get Working Directory](/mp-command-catalog/commands/file-operations#get-working-directory) |
| SpatialAnalyzer Group | File Operations |
| MP Command Status | **Current** |
| Client | `BriosaClient` |
| Method | `get_working_directory` |
| MP Inputs | None |
| Return Value | `str` |

## Example

```python
from briosa import BriosaClient


async with BriosaClient() as briosa:
    working_directory = await briosa.get_working_directory()
```

Entering the asynchronous context starts a compatible Briosa session and
verifies that SpatialAnalyzer is ready for MP execution. Exiting the context
cleans up the local Briosa session and SDK while leaving SpatialAnalyzer open.

## Signature

```python
async def get_working_directory(self) -> str:
    ...
```

The command has no MP inputs or per-call transport arguments. Applications can
set a client-wide command timeout or use normal `asyncio` cancellation and
timeout facilities around the call.

## Return Value

The coroutine returns the working directory reported by SpatialAnalyzer. The
client validates the required MP output and does not expose the generated gRPC
result message.

## Failures and Cancellation

A command failure raises through the handwritten Briosa exception hierarchy.
Cancelling the task does not prove that an in-flight SpatialAnalyzer command
was stopped, and the client does not automatically replay a call with an
uncertain outcome.

- [gRPC operation](/api/grpc/get-working-directory)
- [`BriosaClient` lifecycle](./lifecycle)
- [Understanding execution outcomes](/docs/concepts/execution-outcomes)
