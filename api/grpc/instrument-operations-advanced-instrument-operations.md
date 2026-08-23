---
title: Instrument Operations / Advanced Instrument Operations
description: Next gRPC contracts for Advanced Instrument Operations MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Advanced Instrument Operations

:::note[Next Contracts]

These contracts are not callable until released.

:::

All RPCs use `briosa.InstrumentOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Issue Instrument Actuator Command | `IssueInstrumentActuatorCommand` | `instrument_operations.issue_instrument_actuator_command` |
| Set Instrument Axes | `SetInstrumentAxes` | `instrument_operations.set_instrument_axes` |
| Set Alignment Projector | `SetAlignmentProjector` | `instrument_operations.set_alignment_projector` |

## Issue Instrument Actuator Command

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command)

```proto
rpc IssueInstrumentActuatorCommand(IssueInstrumentActuatorCommandRequest) returns (IssueInstrumentActuatorCommandResult);
message IssueInstrumentActuatorCommandRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string command = 2;
}
message IssueInstrumentActuatorCommandResult { MpExecutionDetails execution = 1000; }
```

Both fields are required. Briosa passes the interface-specific command through
without interpretation or validation.

## Set Instrument Axes

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-instrument-axes)

```proto
rpc SetInstrumentAxes(SetInstrumentAxesRequest) returns (SetInstrumentAxesResult);
message SetInstrumentAxesRequest {
  optional CollectionInstrumentId instrument_to_adjust = 1;
  repeated double axis_values = 2;
  optional int32 number_of_steps = 3;
}
message SetInstrumentAxesResult { MpExecutionDetails execution = 1000; }
```

Animation steps default to `0`. The server adds no interface-specific axis
count, axis range, or physical-motion validation.

## Set Alignment Projector

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-alignment-projector)

```proto
rpc SetAlignmentProjector(SetAlignmentProjectorRequest) returns (SetAlignmentProjectorResult);
message SetAlignmentProjectorRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string projector_profile = 2;
  optional string user_prompt = 3;
}
message SetAlignmentProjectorResult { MpExecutionDetails execution = 1000; }
```

The instrument and profile are required. The user prompt defaults to an empty
string. These commands retain no Briosa-owned interface or motion state.
