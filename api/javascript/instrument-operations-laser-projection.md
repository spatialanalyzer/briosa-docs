---
title: Instrument Operations / Laser Projection
description: Next Briosa JavaScript and TypeScript APIs for Laser Projection MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Laser Projection

:::note[Next JavaScript and TypeScript Contract]

These functions are not released support until this documentation is versioned
for a published package.

:::

## projectObjects

[MP command](/mp-command-catalog/commands/instrument-operations-laser-projection#project-objects) · [gRPC contract](/api/grpc/instrument-operations-laser-projection#project-objects)

```ts
export interface ProjectObjectsInput {
  readonly instrument: CollectionInstrumentId;
  readonly objectsToProject: readonly CollectionObjectName[];
}

function projectObjects(
  briosa: BriosaClient,
  input: ProjectObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

SA may report partial success when only some objects are found.

## stopProjection

[MP command](/mp-command-catalog/commands/instrument-operations-laser-projection#stop-projection) · [gRPC contract](/api/grpc/instrument-operations-laser-projection#stop-projection)

```ts
export interface StopProjectionInput {
  readonly instrument: CollectionInstrumentId;
}

function stopProjection(
  briosa: BriosaClient,
  input: StopProjectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The client does not require ownership of the active projection or retain
projector workflow state. Neither call is automatically replayed.
