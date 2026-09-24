---
title: Instrument Operations / API - LADAR
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations / API - LADAR

[SA 2026.1.0529.7](/api/javascript/instrument-operations-api-ladar) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/instrument-operations-api-ladar)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Set LADAR AutoMeas Point {/* #set-ladar-automeas-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-point) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-point)

```ts
export interface SetLadarAutoMeasPointInput {
  readonly instrument: CollectionInstrumentId;
  readonly sampleTimeMilliseconds?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setLadarAutoMeasPoint(
    input: SetLadarAutoMeasPointInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR AutoMeas Sphere {/* #set-ladar-automeas-sphere */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-sphere) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-sphere)

```ts
export interface SetLadarAutoMeasSphereInput {
  readonly instrument: CollectionInstrumentId;
  readonly sphereRadius?: number;
  readonly scanLineSpacing?: number;
  readonly sendCenterPoint?: boolean;
  readonly sendSphere?: boolean;
  readonly sendMeasuredCloud?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  setLadarAutoMeasSphere(
    input: SetLadarAutoMeasSphereInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Sphere {/* #set-ladar-featuremeas-sphere */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-sphere) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-sphere)

```ts
export interface SetLadarFeatureMeasSphereInput {
  readonly instrument: CollectionInstrumentId;
  readonly scanLineSpacing?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setLadarFeatureMeasSphere(
    input: SetLadarFeatureMeasSphereInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Circle {/* #set-ladar-featuremeas-circle */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-circle) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-circle)

```ts
export interface SetLadarFeatureMeasCircleInput {
  readonly instrument: CollectionInstrumentId;
  readonly scanLineSpacing?: number;
  readonly widthOfExtraAreaAroundScan?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setLadarFeatureMeasCircle(
    input: SetLadarFeatureMeasCircleInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Slot {/* #set-ladar-featuremeas-slot */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-slot) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-slot)

```ts
export interface SetLadarFeatureMeasSlotInput {
  readonly instrument: CollectionInstrumentId;
  readonly scanLineSpacing?: number;
  readonly widthOfExtraAreaAroundScan?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setLadarFeatureMeasSlot(
    input: SetLadarFeatureMeasSlotInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Cylinder {/* #set-ladar-featuremeas-cylinder */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder)

```ts
export interface SetLadarFeatureMeasCylinderInput {
  readonly instrument: CollectionInstrumentId;
  readonly scanLineSpacing?: number;
  readonly widthOfExtraAreaAroundScan?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setLadarFeatureMeasCylinder(
    input: SetLadarFeatureMeasCylinderInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## setLadarAutoMeasPoint {/* #setladarautomeaspoint */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setLadarAutoMeasSphere {/* #setladarautomeassphere */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setLadarFeatureMeasSphere {/* #setladarfeaturemeassphere */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setLadarFeatureMeasCircle {/* #setladarfeaturemeascircle */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setLadarFeatureMeasSlot {/* #setladarfeaturemeasslot */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setLadarFeatureMeasCylinder {/* #setladarfeaturemeascylinder */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2026.1.0529.7)
