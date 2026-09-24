---
title: Construction Operations / Callout Views and Callouts
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Callout Views and Callouts

[SA 2026.1.0529.7](/api/javascript/construction-operations-callout-views-and-callouts) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-callout-views-and-callouts)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Create Vector Callout {/* #create-vector-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-vector-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-vector-callout)

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

// Member of BriosaClient
interface BriosaClient {
  createVectorCallout(
    input: CreateVectorCalloutInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Min/Max Vector Group Callout {/* #create-minmax-vector-group-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-minmax-vector-group-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-minmax-vector-group-callout)

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

// Member of BriosaClient
interface BriosaClient {
  createMinMaxVectorGroupCallout(
    input: CreateMinMaxVectorGroupCalloutInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Point Callout {/* #create-point-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-point-callout)

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

// Member of BriosaClient
interface BriosaClient {
  createPointCallout(
    input: CreatePointCalloutInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `showX` | MP qualifier: R. |
| `showY` | MP qualifier: Theta. |
| `showZ` | MP qualifier: Phi. |
| `showUx` | MP qualifier: Ur. |
| `showUy` | MP qualifier: Utheta. |
| `showUz` | MP qualifier: Uphi. |

## Create Point Comparison Callout {/* #create-point-comparison-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-comparison-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-point-comparison-callout)

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

// Member of BriosaClient
interface BriosaClient {
  createPointComparisonCallout(
    input: CreatePointComparisonCalloutInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Relationship Callout {/* #create-relationship-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-relationship-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-relationship-callout)

```ts
export interface CreateRelationshipCalloutInput {
  readonly destinationCalloutView: CollectionItemName;
  readonly relationshipName: CollectionItemName;
  readonly viewXPosition?: number;
  readonly viewYPosition?: number;
  readonly additionalNotes?: Iterable<string>;
}

// Member of BriosaClient
interface BriosaClient {
  createRelationshipCallout(
    input: CreateRelationshipCalloutInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Picture Callout {/* #create-picture-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-picture-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-picture-callout)

```ts
export interface CreatePictureCalloutInput {
  readonly destinationCalloutView: CollectionItemName;
  readonly pictureName: CollectionItemName;
  readonly viewXPosition?: number;
  readonly viewYPosition?: number;
  readonly scaleImagePercent?: number;
  readonly objectForCalloutAnchorPoint?: CollectionItemName;
}

// Member of BriosaClient
interface BriosaClient {
  createPictureCallout(
    input: CreatePictureCalloutInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Text Callout {/* #create-text-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-text-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-text-callout)

```ts
export interface CreateTextCalloutInput {
  readonly destinationCalloutView: CollectionItemName;
  readonly text: Iterable<string>;
  readonly viewXPosition?: number;
  readonly viewYPosition?: number;
  readonly calloutAnchorPoint?: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  createTextCallout(
    input: CreateTextCalloutInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Callout View Ref List - WildCard Selection {/* #make-a-callout-view-ref-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#make-a-callout-view-ref-list---wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#make-a-callout-view-ref-list---wildcard-selection)

```ts
export interface MakeCalloutViewRefListWildcardSelectionInput {
  readonly collectionWildcardCriteria?: string;
  readonly calloutViewWildcardCriteria?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makeCalloutViewRefListWildcardSelection(
    input?: MakeCalloutViewRefListWildcardSelectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Default Callout View Properties {/* #set-default-callout-view-properties */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-default-callout-view-properties) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#set-default-callout-view-properties)

```ts
export interface SetDefaultCalloutViewPropertiesInput {
  readonly defaultCalloutViewName?: string;
  readonly properties?: CalloutViewProperties;
}

// Member of BriosaClient
interface BriosaClient {
  setDefaultCalloutViewProperties(
    input?: SetDefaultCalloutViewPropertiesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Callout View Properties {/* #set-callout-view-properties */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-callout-view-properties) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#set-callout-view-properties)

```ts
export interface SetCalloutViewPropertiesInput {
  readonly calloutViews: Iterable<CollectionItemName>;
  readonly properties?: CalloutViewProperties;
}

// Member of BriosaClient
interface BriosaClient {
  setCalloutViewProperties(
    input: SetCalloutViewPropertiesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Callout View {/* #delete-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#delete-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#delete-callout-view)

```ts
// Member of BriosaClient
interface BriosaClient {
  deleteCalloutView(
    calloutView: CollectionItemName,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Callout View {/* #rename-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#rename-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#rename-callout-view)

```ts
export interface RenameCalloutViewInput {
  readonly originalCalloutViewName: CollectionItemName;
  readonly newCalloutViewName: CollectionItemName;
  readonly overwriteIfExists?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  renameCalloutView(
    input: RenameCalloutViewInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Arrange Callout View {/* #auto-arrange-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#auto-arrange-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#auto-arrange-callout-view)

```ts
// Member of BriosaClient
interface BriosaClient {
  autoArrangeCalloutView(
    calloutView: CollectionItemName,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Callouts in Callout View {/* #get-number-of-callouts-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#get-number-of-callouts-in-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#get-number-of-callouts-in-callout-view)

```ts
// Member of BriosaClient
interface BriosaClient {
  getNumberOfCalloutsInCalloutView(
    calloutView: CollectionItemName,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get I-th Callout Position in Callout View {/* #get-i-th-callout-position-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#get-i-th-callout-position-in-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#get-i-th-callout-position-in-callout-view)

```ts
export interface GetIthCalloutPositionInCalloutViewInput {
  readonly calloutView: CollectionItemName;
  readonly calloutViewIndex: number;
}

// Member of BriosaClient
interface BriosaClient {
  getIthCalloutPositionInCalloutView(
    input: GetIthCalloutPositionInCalloutViewInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CalloutPosition>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set I-th Callout Position in Callout View {/* #set-i-th-callout-position-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-i-th-callout-position-in-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#set-i-th-callout-position-in-callout-view)

```ts
export interface SetIthCalloutPositionInCalloutViewInput {
  readonly calloutView: CollectionItemName;
  readonly calloutViewIndex: number;
  readonly xPosition: number;
  readonly yPosition: number;
}

// Member of BriosaClient
interface BriosaClient {
  setIthCalloutPositionInCalloutView(
    input: SetIthCalloutPositionInCalloutViewInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Callout Values {/* #shared-callout-values */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2026.1.0529.7)
