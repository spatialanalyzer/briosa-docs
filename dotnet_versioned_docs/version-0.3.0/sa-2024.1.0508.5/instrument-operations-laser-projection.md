---
title: Instrument Operations / Laser Projection
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Laser Projection

[SA 2026.1.0529.7](/api/dotnet/instrument-operations-laser-projection) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/instrument-operations-laser-projection)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Project Objects {/* #project-objects */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-laser-projection#project-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-laser-projection#project-objects)

```csharp
public Task ProjectObjectsAsync(
        CollectionInstrumentId instrument,
        IEnumerable<CollectionObjectName> objectsToProject,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Projection {/* #stop-projection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-laser-projection#stop-projection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-laser-projection#stop-projection)

```csharp
public Task StopProjectionAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2024.1.0508.5)
