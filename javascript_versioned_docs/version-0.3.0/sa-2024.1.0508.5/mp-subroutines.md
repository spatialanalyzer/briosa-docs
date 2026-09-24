---
title: MP Subroutines
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# MP Subroutines

[SA 2026.1.0529.7](/api/javascript/mp-subroutines) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/mp-subroutines)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Run Subroutine {/* #run-subroutine */}

[MP Catalog](/mp-command-catalog/commands/mp-subroutines#run-subroutine) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-subroutines#run-subroutine)

```ts
export interface RunSubroutineInput {
  readonly mpSubroutineFilePath: FileReference;
  readonly shareParentVariables?: boolean;
}

export declare function runSubroutine(
  briosa: BriosaClient,
  input: RunSubroutineInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2024.1.0508.5)
