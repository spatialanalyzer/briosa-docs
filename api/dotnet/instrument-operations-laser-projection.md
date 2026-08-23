---
title: Instrument Operations / Laser Projection
description: Next Briosa .NET APIs for Laser Projection MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Laser Projection

:::note[Next .NET Contract]

These methods are not released support until this documentation is versioned
for a published package.

:::

## ProjectObjectsAsync

[MP command](/mp-command-catalog/commands/instrument-operations-laser-projection#project-objects) · [gRPC contract](/api/grpc/instrument-operations-laser-projection#project-objects)

```csharp
public Task ProjectObjectsAsync(
    CollectionInstrumentId instrument,
    IEnumerable<CollectionObjectName> objectsToProject,
    CancellationToken cancellationToken = default);
```

SA may report partial success when only some objects are found.

## StopProjectionAsync

[MP command](/mp-command-catalog/commands/instrument-operations-laser-projection#stop-projection) · [gRPC contract](/api/grpc/instrument-operations-laser-projection#stop-projection)

```csharp
public Task StopProjectionAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

The client does not require ownership of the active projection or retain
projector workflow state. Neither method is automatically replayed.
