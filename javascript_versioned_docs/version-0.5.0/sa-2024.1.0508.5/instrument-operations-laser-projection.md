---
title: Instrument Operations / Laser Projection
description: Released javascript 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Laser Projection

[SA 2026.1.0529.7](/api/javascript/instrument-operations-laser-projection) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/instrument-operations-laser-projection)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. A method that takes `BriosaCallOptions` can pass `onMpCompletion` to observe how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Project Objects {/* #project-objects */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-laser-projection#project-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-laser-projection#project-objects)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

```ts
export interface ProjectObjectsInput {
  readonly instrument: CollectionInstrumentId;
  readonly objectsToProject: Iterable<CollectionObjectName>;
}

export declare function projectObjects(
  briosa: BriosaClient,
  input: ProjectObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Projection {/* #stop-projection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-laser-projection#stop-projection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-laser-projection#stop-projection)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```ts
export interface StopProjectionInput {
  readonly instrument: CollectionInstrumentId;
}

export declare function stopProjection(
  briosa: BriosaClient,
  input: StopProjectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2024.1.0508.5)
