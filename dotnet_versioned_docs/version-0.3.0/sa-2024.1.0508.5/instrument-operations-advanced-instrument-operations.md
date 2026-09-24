---
title: Instrument Operations / Advanced Instrument Operations
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Advanced Instrument Operations

[SA 2026.1.0529.7](/api/dotnet/instrument-operations-advanced-instrument-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Issue Instrument Actuator Command {/* #issue-instrument-actuator-command */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command)

```csharp
public Task IssueInstrumentActuatorCommandAsync(
        CollectionInstrumentId instrument,
        string command,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Axes {/* #set-instrument-axes */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-instrument-axes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-instrument-axes)

```csharp
public Task SetInstrumentAxesAsync(
        CollectionInstrumentId instrumentToAdjust,
        IEnumerable<double> axisValues,
        int numberOfSteps = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Alignment Projector {/* #set-alignment-projector */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-alignment-projector) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations#set-alignment-projector)

```csharp
public Task SetAlignmentProjectorAsync(
        CollectionInstrumentId instrument,
        string projectorProfile,
        string userPrompt = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## IssueInstrumentActuatorCommandAsync {/* #issueinstrumentactuatorcommandasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetInstrumentAxesAsync {/* #setinstrumentaxesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetAlignmentProjectorAsync {/* #setalignmentprojectorasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2024.1.0508.5)
