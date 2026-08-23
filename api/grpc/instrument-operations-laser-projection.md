---
title: Instrument Operations / Laser Projection
description: Next gRPC contracts for Laser Projection MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Laser Projection

:::note[Next Contracts]

These contracts are not callable until released.

:::

Both RPCs use `briosa.InstrumentOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## Project Objects

[MP command](/mp-command-catalog/commands/instrument-operations-laser-projection#project-objects)

```proto
rpc ProjectObjects(ProjectObjectsRequest) returns (ProjectObjectsResult);
message ProjectObjectsRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName objects_to_project = 2;
}
message ProjectObjectsResult { MpExecutionDetails execution = 1000; }
```

SA can report partial success when only some objects are found.

## Stop Projection

[MP command](/mp-command-catalog/commands/instrument-operations-laser-projection#stop-projection)

```proto
rpc StopProjection(StopProjectionRequest) returns (StopProjectionResult);
message StopProjectionRequest {
  optional CollectionInstrumentId instrument = 1;
}
message StopProjectionResult { MpExecutionDetails execution = 1000; }
```

The server does not require caller or session ownership of the active
projection and retains no projector workflow state.
