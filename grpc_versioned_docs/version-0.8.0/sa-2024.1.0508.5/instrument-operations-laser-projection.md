---
title: Instrument Operations / Laser Projection
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Laser Projection

[SA 2026.1.0529.7](/api/grpc/instrument-operations-laser-projection) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/instrument-operations-laser-projection)

This reference covers **SA 2024.1.0508.5**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Project Objects {/* #project-objects */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-laser-projection#project-objects)

`/briosa.InstrumentOperations/ProjectObjects` · Operation ID: `instrument_operations.project_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `objects_to_project` | `repeated CollectionObjectName` | Objects To Project | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ProjectObjects(ProjectObjectsRequest) returns (ProjectObjectsResult);

message ProjectObjectsRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName objects_to_project = 2;
}

message ProjectObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

## Stop Projection {/* #stop-projection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-laser-projection#stop-projection)

`/briosa.InstrumentOperations/StopProjection` · Operation ID: `instrument_operations.stop_projection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc StopProjection(StopProjectionRequest) returns (StopProjectionResult);

message StopProjectionRequest {
  optional CollectionInstrumentId instrument = 1;
}

message StopProjectionResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2024.1.0508.5)
