---
title: Instrument Operations / Advanced Instrument Operations
description: Next Briosa .NET APIs for Advanced Instrument Operations MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Advanced Instrument Operations

:::note[Next .NET Contract]

These methods are not released support until this documentation is versioned
for a published package.

:::

## IssueInstrumentActuatorCommandAsync

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command) · [gRPC contract](/api/grpc/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command)

```csharp
public Task IssueInstrumentActuatorCommandAsync(
    CollectionInstrumentId instrument,
    string command,
    CancellationToken cancellationToken = default);
```

Briosa passes the interface-specific command through without interpretation.

## SetInstrumentAxesAsync

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-instrument-axes) · [gRPC contract](/api/grpc/instrument-operations-advanced-instrument-operations#set-instrument-axes)

```csharp
public Task SetInstrumentAxesAsync(
    CollectionInstrumentId instrumentToAdjust,
    IEnumerable<double> axisValues,
    int numberOfSteps = 0,
    CancellationToken cancellationToken = default);
```

Axis values are interface-specific. Briosa adds no axis-count, range, or
physical-motion validation.

## SetAlignmentProjectorAsync

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-alignment-projector) · [gRPC contract](/api/grpc/instrument-operations-advanced-instrument-operations#set-alignment-projector)

```csharp
public Task SetAlignmentProjectorAsync(
    CollectionInstrumentId instrument,
    string projectorProfile,
    string userPrompt = "",
    CancellationToken cancellationToken = default);
```

These methods retain no Briosa-owned interface or motion state and are never
automatically replayed.
