---
title: Instrument Operations / API - LADAR
description: Unreleased Briosa JavaScript and TypeScript APIs for API - LADAR MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / API - LADAR

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## setLadarAutoMeasPoint

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-point) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-point)

```ts
export interface SetLadarAutoMeasPointInput {
  readonly instrument: CollectionInstrumentId;
  readonly sampleTimeMilliseconds?: number;
}

function setLadarAutoMeasPoint(
  briosa: BriosaClient,
  input: SetLadarAutoMeasPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Sample time defaults to exact MP value `0` despite the label documenting
`1–2000`.

## setLadarAutoMeasSphere

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-sphere) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-sphere)

```ts
export interface SetLadarAutoMeasSphereInput {
  readonly instrument: CollectionInstrumentId;
  readonly sphereRadius?: number;
  readonly scanLineSpacing?: number;
  readonly sendCenterPoint?: boolean;
  readonly sendSphere?: boolean;
  readonly sendMeasuredCloud?: boolean;
}

function setLadarAutoMeasSphere(
  briosa: BriosaClient,
  input: SetLadarAutoMeasSphereInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Defaults are `1.1875`, `0.05`, `true`, `false`, and `false` in field order.

## setLadarFeatureMeasSphere

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-sphere) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-sphere)

```ts
export interface SetLadarFeatureMeasSphereInput {
  readonly instrument: CollectionInstrumentId;
  readonly scanLineSpacing?: number;
}

function setLadarFeatureMeasSphere(
  briosa: BriosaClient,
  input: SetLadarFeatureMeasSphereInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Spacing defaults to `0.05`.

## setLadarFeatureMeasCircle

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-circle) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-circle)

```ts
export interface SetLadarFeatureMeasCircleInput {
  readonly instrument: CollectionInstrumentId;
  readonly scanLineSpacing?: number;
  readonly widthOfExtraAreaAroundScan?: number;
}

function setLadarFeatureMeasCircle(
  briosa: BriosaClient,
  input: SetLadarFeatureMeasCircleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## setLadarFeatureMeasSlot

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-slot) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-slot)

```ts
export interface SetLadarFeatureMeasSlotInput {
  readonly instrument: CollectionInstrumentId;
  readonly scanLineSpacing?: number;
  readonly widthOfExtraAreaAroundScan?: number;
}

function setLadarFeatureMeasSlot(
  briosa: BriosaClient,
  input: SetLadarFeatureMeasSlotInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## setLadarFeatureMeasCylinder

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder)

```ts
export interface SetLadarFeatureMeasCylinderInput {
  readonly instrument: CollectionInstrumentId;
  readonly scanLineSpacing?: number;
  readonly widthOfExtraAreaAroundScan?: number;
}

function setLadarFeatureMeasCylinder(
  briosa: BriosaClient,
  input: SetLadarFeatureMeasCylinderInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Circle, Slot, and Cylinder spacing defaults to `0.05`; extra width defaults to
`0.0`. Briosa does not convert units or add ranges. The calls are never
automatically replayed.
