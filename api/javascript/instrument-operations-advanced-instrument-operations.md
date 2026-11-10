---
title: Instrument Operations / Advanced Instrument Operations
description: Released javascript 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations / Advanced Instrument Operations

[SA 2026.1.0529.7](/api/javascript/instrument-operations-advanced-instrument-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/instrument-operations-advanced-instrument-operations)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. A method that takes `BriosaCallOptions` can pass `onMpCompletion` to observe how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Issue Instrument Actuator Command {/* #issue-instrument-actuator-command */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command) · [gRPC Contract](/api/grpc/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

```ts
export interface IssueInstrumentActuatorCommandInput {
  readonly instrument: CollectionInstrumentId;
  readonly command: string;
}

// Member of BriosaClient
interface BriosaClient {
  issueInstrumentActuatorCommand(
    input: IssueInstrumentActuatorCommandInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Axes {/* #set-instrument-axes */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-instrument-axes) · [gRPC Contract](/api/grpc/instrument-operations-advanced-instrument-operations#set-instrument-axes)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_session`, `device_config` · **Duration Class:** `long_running`

```ts
export interface SetInstrumentAxesInput {
  readonly instrumentToAdjust: CollectionInstrumentId;
  readonly axisValues: readonly number[];
  readonly numberOfSteps?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setInstrumentAxes(
    input: SetInstrumentAxesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Alignment Projector {/* #set-alignment-projector */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-alignment-projector) · [gRPC Contract](/api/grpc/instrument-operations-advanced-instrument-operations#set-alignment-projector)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

A request that sets a non-empty `userPrompt` also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface SetAlignmentProjectorInput {
  readonly instrument: CollectionInstrumentId;
  readonly projectorProfile: string;
  readonly userPrompt?: string;
}

// Member of BriosaClient
interface BriosaClient {
  setAlignmentProjector(
    input: SetAlignmentProjectorInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## issueInstrumentActuatorCommand {/* #issueinstrumentactuatorcommand */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setInstrumentAxes {/* #setinstrumentaxes */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setAlignmentProjector {/* #setalignmentprojector */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7)
