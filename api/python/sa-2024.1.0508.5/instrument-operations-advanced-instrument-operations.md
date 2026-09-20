---
title: Instrument Operations / Advanced Instrument Operations
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Advanced Instrument Operations

[SA 2026.1.0529.7](/api/python/instrument-operations-advanced-instrument-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Issue Instrument Actuator Command {/* #issue-instrument-actuator-command */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command)

```python
async def issue_instrument_actuator_command(
        self,
        instrument: CollectionInstrumentId,
        command: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Axes {/* #set-instrument-axes */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-instrument-axes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-instrument-axes)

```python
async def set_instrument_axes(
        self,
        instrument_to_adjust: CollectionInstrumentId,
        axis_values: Iterable[float],
        *,
        number_of_steps: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Alignment Projector {/* #set-alignment-projector */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-alignment-projector) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-alignment-projector)

```python
async def set_alignment_projector(
        self,
        instrument: CollectionInstrumentId,
        projector_profile: str,
        *,
        user_prompt: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## issue_instrument_actuator_command {/* #issue_instrument_actuator_command */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_instrument_axes {/* #set_instrument_axes */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_alignment_projector {/* #set_alignment_projector */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2024.1.0508.5)
