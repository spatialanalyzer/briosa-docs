---
title: Instrument Operations / Advanced Instrument Operations
description: Next Briosa JavaScript and TypeScript APIs for Advanced Instrument Operations MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Advanced Instrument Operations

:::note[Next JavaScript and TypeScript Contract]

These functions are not released support until this documentation is versioned
for a published package.

:::

## issueInstrumentActuatorCommand

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command) · [gRPC contract](/api/grpc/instrument-operations-advanced-instrument-operations#issue-instrument-actuator-command)

```ts
export interface IssueInstrumentActuatorCommandInput {
  readonly instrument: CollectionInstrumentId;
  readonly command: string;
}

function issueInstrumentActuatorCommand(
  briosa: BriosaClient,
  input: IssueInstrumentActuatorCommandInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## setInstrumentAxes

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-instrument-axes) · [gRPC contract](/api/grpc/instrument-operations-advanced-instrument-operations#set-instrument-axes)

```ts
export interface SetInstrumentAxesInput {
  readonly instrumentToAdjust: CollectionInstrumentId;
  readonly axisValues: readonly number[];
  readonly numberOfSteps?: number;
}

function setInstrumentAxes(
  briosa: BriosaClient,
  input: SetInstrumentAxesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Animation steps default to `0`. Briosa adds no interface-specific axis-count,
range, or physical-motion validation.

## setAlignmentProjector

[MP command](/mp-command-catalog/commands/instrument-operations-advanced-instrument-operations#set-alignment-projector) · [gRPC contract](/api/grpc/instrument-operations-advanced-instrument-operations#set-alignment-projector)

```ts
export interface SetAlignmentProjectorInput {
  readonly instrument: CollectionInstrumentId;
  readonly projectorProfile: string;
  readonly userPrompt?: string;
}

function setAlignmentProjector(
  briosa: BriosaClient,
  input: SetAlignmentProjectorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The prompt defaults to an empty string. These functions retain no Briosa-owned
interface or motion state and are never automatically replayed.
