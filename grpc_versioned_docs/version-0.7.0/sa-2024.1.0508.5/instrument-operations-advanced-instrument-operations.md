---
title: Instrument Operations / Advanced Instrument Operations
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Advanced Instrument Operations

[SA 2026.1.0529.7](/api/grpc/instrument-operations-advanced-instrument-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Issue Instrument Actuator Command {/* #issue-instrument-actuator-command */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command)

`/briosa.InstrumentOperations/IssueInstrumentActuatorCommand` · Operation ID: `instrument_operations.issue_instrument_actuator_command`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `command` | `optional string` | Command | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc IssueInstrumentActuatorCommand(IssueInstrumentActuatorCommandRequest) returns (IssueInstrumentActuatorCommandResult);

message IssueInstrumentActuatorCommandRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string command = 2;
}

message IssueInstrumentActuatorCommandResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Instrument Axes {/* #set-instrument-axes */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-instrument-axes)

`/briosa.InstrumentOperations/SetInstrumentAxes` · Operation ID: `instrument_operations.set_instrument_axes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_to_adjust` | `optional CollectionInstrumentId` | Instrument to Adjust | Required |
| Request | 2 | `axis_values` | `repeated double` | Axis Values | Required |
| Request | 3 | `number_of_steps` | `optional int32` | Number of Steps | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetInstrumentAxes(SetInstrumentAxesRequest) returns (SetInstrumentAxesResult);

message SetInstrumentAxesRequest {
  optional CollectionInstrumentId instrument_to_adjust = 1;
  repeated double axis_values = 2;
  optional int32 number_of_steps = 3;
}

message SetInstrumentAxesResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Alignment Projector {/* #set-alignment-projector */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-alignment-projector)

`/briosa.InstrumentOperations/SetAlignmentProjector` · Operation ID: `instrument_operations.set_alignment_projector`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `projector_profile` | `optional string` | Projector Profile | Empty |
| Request | 3 | `user_prompt` | `optional string` | User Prompt | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetAlignmentProjector(SetAlignmentProjectorRequest) returns (SetAlignmentProjectorResult);

message SetAlignmentProjectorRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string projector_profile = 2;
  optional string user_prompt = 3;
}

message SetAlignmentProjectorResult {
  MpExecutionDetails execution = 1000;
}
```

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
