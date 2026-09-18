---
title: aclose and async with
description: Perform final Python client cleanup through aclose or asynchronous context management.
---

# `aclose` and `async with`

Python provides explicit final cleanup and asynchronous context management.

## Signatures

```python
async def aclose(self) -> None: ...

async def __aenter__(self) -> Self: ...

async def __aexit__(
    self,
    exc_type: type[BaseException] | None,
    exc: BaseException | None,
    traceback: TracebackType | None,
) -> None: ...
```

## Behavior

- `__aenter__()` calls `start()` and returns the same client.
- `__aenter__()` completes the default startup procedure, including a fresh SA
  application and a connected, ready SDK.
- `__aexit__()` calls `aclose()`, including when an exception leaves the block.
- `aclose()` follows the same cleanup rules as `stop()`.
- Final cleanup never calls `close_owned_spatial_analyzer()` automatically.
- Every SpatialAnalyzer application remains running.
- `aclose()` is safe to call more than once.
- Starting or using the client after final close raises `BriosaLifecycleError`.

## Recommended Usage

```python
from briosa import BriosaClient


async with BriosaClient() as briosa:
    working_directory = await briosa.get_working_directory()
```

## Close the Launched Application Explicitly

```python
async with BriosaClient() as briosa:
    try:
        working_directory = await briosa.get_working_directory()
    finally:
        await briosa.stop_spatial_analyzer_sdk()
        await briosa.close_owned_spatial_analyzer()
```

The `finally` block is needed only because this example explicitly chooses to
close SpatialAnalyzer. It is not required for ordinary client resource cleanup.
