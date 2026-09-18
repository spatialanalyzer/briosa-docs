---
title: Construction Operations / Callout Views and Callouts
description: Briosa 0.1.0 JavaScript and TypeScript APIs for selected callout-view MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Callout Views and Callouts

## Shared Callout Values

```ts
export interface Font {
  readonly fontName?: string; // "MS Shell Dlg"
  readonly size?: number; // 8
  readonly color?: Color; // RGB 0, 0, 0
}

export interface CalloutViewProperties {
  readonly lockViewPoint?: boolean;
  readonly recallWorkingFrame?: boolean;
  readonly recallVisibleLayer?: boolean;
  readonly calloutLeaderThickness?: number; // 2
  readonly calloutLeaderColor?: Color; // RGB 128, 128, 128
  readonly calloutBorderThickness?: number; // 2
  readonly calloutBorderColor?: Color; // RGB 0, 0, 255
  readonly divideTextWithLines?: boolean;
  readonly font?: Font;
}

export interface CalloutPosition {
  readonly xPosition: number;
  readonly yPosition: number;
  readonly xAnchorPosition: number;
  readonly yAnchorPosition: number;
  readonly calloutWidth: number;
  readonly calloutHeight: number;
}
```

## Create Vector Callout

```ts
export interface CreateVectorCalloutInput {
  readonly destinationCalloutView: CollectionItemName;
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorName: string;
  readonly viewXPosition?: number;
  readonly viewYPosition?: number;
  readonly showCollection?: boolean;
  readonly showVectorGroup?: boolean;
  readonly showVectorName?: boolean;
  readonly showDx?: boolean;
  readonly showDy?: boolean;
  readonly showDz?: boolean;
  readonly showDMag?: boolean;
  readonly showToleranceColor?: boolean;
  readonly showOutOfToleranceValue?: boolean;
  readonly showToleranceRange?: boolean;
  readonly showVectorColor?: boolean;
  readonly showStartPoint?: boolean;
  readonly showEndPoint?: boolean;
  readonly showUnits?: boolean;
  readonly additionalNotes?: Iterable<string>;
  readonly attachCalloutToEndPoint?: boolean;
  readonly useDefaultPlacement?: boolean;
}

function createVectorCallout(
  briosa: BriosaClient,
  input: CreateVectorCalloutInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Defaults follow the [catalog entry](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-vector-callout) and [gRPC contract](/api/grpc/construction-operations-callout-views-and-callouts#create-vector-callout).

## Create Min/Max Vector Group Callout

```ts
export interface CreateMinMaxVectorGroupCalloutInput {
  readonly destinationCalloutView: CollectionItemName;
  readonly vectorGroupName: CollectionObjectName;
  readonly numberOfVectorsWithHighestMag?: number;
  readonly numberOfVectorsWithLowestMag?: number;
  readonly showCollection?: boolean;
  readonly showVectorGroup?: boolean;
  readonly showVectorName?: boolean;
  readonly showDx?: boolean;
  readonly showDy?: boolean;
  readonly showDz?: boolean;
  readonly showDMag?: boolean;
  readonly showToleranceColor?: boolean;
  readonly toleranceColorBlueGreenRed?: boolean;
  readonly showOutOfToleranceValue?: boolean;
  readonly showToleranceRange?: boolean;
  readonly showVectorColor?: boolean;
  readonly showStartPoint?: boolean;
  readonly showEndPoint?: boolean;
  readonly showUnits?: boolean;
  readonly attachCalloutToEndPoint?: boolean;
  readonly useDefaultPlacement?: boolean;
}

function createMinMaxVectorGroupCallout(
  briosa: BriosaClient,
  input: CreateMinMaxVectorGroupCalloutInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The two vector counts default to 1. Other defaults follow the [gRPC contract](/api/grpc/construction-operations-callout-views-and-callouts#create-minmax-vector-group-callout).

## Create Point Callout

```ts
export interface CreatePointCalloutInput {
  readonly destinationCalloutView: CollectionItemName;
  readonly point: PointName;
  readonly viewXPosition?: number;
  readonly viewYPosition?: number;
  readonly showPointCollection?: boolean;
  readonly showPointGroup?: boolean;
  readonly showPointTarget?: boolean;
  readonly showX?: boolean;
  readonly showY?: boolean;
  readonly showZ?: boolean;
  readonly showUnits?: boolean;
  readonly showUx?: boolean;
  readonly showUy?: boolean;
  readonly showUz?: boolean;
  readonly showUMag?: boolean;
  readonly desiredCoordinateSystem?: CoordinateSystemType;
  readonly notes?: Iterable<string>;
  readonly useDefaultPlacement?: boolean;
}

function createPointCallout(
  briosa: BriosaClient,
  input: CreatePointCalloutInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The coordinate system defaults to Cartesian; other defaults follow the [gRPC contract](/api/grpc/construction-operations-callout-views-and-callouts#create-point-callout).

## Create Point Comparison Callout

```ts
export interface CreatePointComparisonCalloutInput {
  readonly destinationCalloutView: CollectionItemName;
  readonly firstPoint: PointName;
  readonly secondPoint: PointName;
  readonly viewXPosition?: number;
  readonly viewYPosition?: number;
  readonly showFirstPointCollection?: boolean;
  readonly showFirstPointGroup?: boolean;
  readonly showFirstPointTarget?: boolean;
  readonly showFirstPointCoordinates?: boolean;
  readonly showSecondPointCollection?: boolean;
  readonly showSecondPointGroup?: boolean;
  readonly showSecondPointTarget?: boolean;
  readonly showSecondPointCoordinates?: boolean;
  readonly showDx?: boolean;
  readonly showDy?: boolean;
  readonly showDz?: boolean;
  readonly showDMag?: boolean;
  readonly additionalXComments?: string;
  readonly additionalYComments?: string;
  readonly additionalZComments?: string;
  readonly additionalNotes?: Iterable<string>;
  readonly useDefaultPlacement?: boolean;
}

function createPointComparisonCallout(
  briosa: BriosaClient,
  input: CreatePointComparisonCalloutInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Defaults follow the [gRPC contract](/api/grpc/construction-operations-callout-views-and-callouts#create-point-comparison-callout).

## Create Relationship Callout

```ts
export interface CreateRelationshipCalloutInput {
  readonly destinationCalloutView: CollectionItemName;
  readonly relationshipName: CollectionItemName;
  readonly viewXPosition?: number;
  readonly viewYPosition?: number;
  readonly additionalNotes?: Iterable<string>;
}

function createRelationshipCallout(
  briosa: BriosaClient,
  input: CreateRelationshipCalloutInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Create Picture Callout

```ts
export interface CreatePictureCalloutInput {
  readonly destinationCalloutView: CollectionItemName;
  readonly pictureName: CollectionItemName;
  readonly viewXPosition?: number;
  readonly viewYPosition?: number;
  readonly scaleImagePercent?: number;
  readonly objectForCalloutAnchorPoint?: CollectionObjectName;
}

function createPictureCallout(
  briosa: BriosaClient,
  input: CreatePictureCalloutInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

X/Y default to 0.4/0.6; image scale defaults to 100 and must be 10–200.

## Create Text Callout

```ts
export interface CreateTextCalloutInput {
  readonly destinationCalloutView: CollectionItemName;
  readonly text: Iterable<string>;
  readonly viewXPosition?: number;
  readonly viewYPosition?: number;
  readonly calloutAnchorPoint?: PointName;
}

function createTextCallout(
  briosa: BriosaClient,
  input: CreateTextCalloutInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Make a Callout View Ref List - WildCard Selection

```ts
export interface MakeCalloutViewRefListWildcardSelectionInput {
  readonly collectionWildcardCriteria?: string;
  readonly calloutViewWildcardCriteria?: string;
}

function makeCalloutViewRefListWildcardSelection(
  briosa: BriosaClient,
  input?: MakeCalloutViewRefListWildcardSelectionInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionItemName[]>;
```

Both criteria default to `'*'`. This queries live SA state and returns ordinary
callout-view identities.

## Set Default Callout View Properties

```ts
export interface SetDefaultCalloutViewPropertiesInput {
  readonly defaultCalloutViewName?: string;
  readonly properties?: CalloutViewProperties;
}

function setDefaultCalloutViewProperties(
  briosa: BriosaClient,
  input?: SetDefaultCalloutViewPropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The name defaults to `'Callout 1'`; omitted properties use shared defaults.

## Set Callout View Properties

```ts
export interface SetCalloutViewPropertiesInput {
  readonly calloutViews: Iterable<CollectionItemName>;
  readonly properties?: CalloutViewProperties;
}

function setCalloutViewProperties(
  briosa: BriosaClient,
  input: SetCalloutViewPropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The list must not be empty. The exact-target list binding remains At Risk.

## Delete Callout View

```ts
function deleteCalloutView(
  briosa: BriosaClient,
  calloutView: CollectionItemName,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Rename Callout View

```ts
export interface RenameCalloutViewInput {
  readonly originalCalloutViewName: CollectionItemName;
  readonly newCalloutViewName: CollectionItemName;
  readonly overwriteIfExists?: boolean;
}

function renameCalloutView(
  briosa: BriosaClient,
  input: RenameCalloutViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Auto Arrange Callout View

```ts
function autoArrangeCalloutView(
  briosa: BriosaClient,
  calloutView: CollectionItemName,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Get Number of Callouts in Callout View

```ts
function getNumberOfCalloutsInCalloutView(
  briosa: BriosaClient,
  calloutView: CollectionItemName,
  options?: BriosaCallOptions,
): Promise<number>;
```

## Get I-th Callout Position in Callout View

```ts
export interface GetIthCalloutPositionInCalloutViewInput {
  readonly calloutView: CollectionItemName;
  readonly calloutViewIndex: number;
}

function getIthCalloutPositionInCalloutView(
  briosa: BriosaClient,
  input: GetIthCalloutPositionInCalloutViewInput,
  options?: BriosaCallOptions,
): Promise<CalloutPosition>;
```

## Set I-th Callout Position in Callout View

```ts
export interface SetIthCalloutPositionInCalloutViewInput {
  readonly calloutView: CollectionItemName;
  readonly calloutViewIndex: number;
  readonly xPosition: number;
  readonly yPosition: number;
}

function setIthCalloutPositionInCalloutView(
  briosa: BriosaClient,
  input: SetIthCalloutPositionInCalloutViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Both index-based functions require a non-negative, zero-based integer index.
