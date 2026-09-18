---
title: Instrument Operations / Advanced Instrument Operations
description: Briosa 0.1.0 Python APIs for Advanced Instrument Operations MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Advanced Instrument Operations

## issue_instrument_actuator_command

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command) · [gRPC contract](/api/grpc/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command)

```python
async def issue_instrument_actuator_command(
    self,
    instrument: CollectionInstrumentId,
    command: str,
) -> None: ...
```

## set_instrument_axes

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-instrument-axes) · [gRPC contract](/api/grpc/instrument-operations-advanced-instrument-operations#set-instrument-axes)

```python
async def set_instrument_axes(
    self,
    instrument_to_adjust: CollectionInstrumentId,
    axis_values: Iterable[float],
    *,
    number_of_steps: int = 0,
) -> None: ...
```

Briosa adds no interface-specific axis-count, range, or physical-motion
validation.

## set_alignment_projector

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-alignment-projector) · [gRPC contract](/api/grpc/instrument-operations-advanced-instrument-operations#set-alignment-projector)

```python
async def set_alignment_projector(
    self,
    instrument: CollectionInstrumentId,
    projector_profile: str,
    *,
    user_prompt: str = "",
) -> None: ...
```

These coroutines retain no Briosa-owned interface or motion state and are never
automatically replayed.
