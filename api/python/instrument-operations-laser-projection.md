---
title: Instrument Operations / Laser Projection
description: Next Briosa Python APIs for Laser Projection MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Laser Projection

:::note[Next Python Contract]

These coroutines are not released support until this documentation is
versioned for a published package.

:::

## project_objects

[MP command](/mp-command-catalog/commands/instrument-operations-laser-projection#project-objects) · [gRPC contract](/api/grpc/instrument-operations-laser-projection#project-objects)

```python
async def project_objects(
    self,
    instrument: CollectionInstrumentId,
    objects_to_project: Iterable[CollectionObjectName],
) -> None: ...
```

SA may report partial success when only some objects are found.

## stop_projection

[MP command](/mp-command-catalog/commands/instrument-operations-laser-projection#stop-projection) · [gRPC contract](/api/grpc/instrument-operations-laser-projection#stop-projection)

```python
async def stop_projection(
    self,
    instrument: CollectionInstrumentId,
) -> None: ...
```

The client does not require ownership of the active projection or retain
projector workflow state. Neither call is automatically replayed.
