---
title: Construction Operations / Vectors and Vector Groups
description: Released javascript 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Vectors and Vector Groups

[SA 2026.1.0529.7](/api/javascript/construction-operations-vectors-and-vector-groups) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. A method that takes `BriosaCallOptions` can pass `onMpCompletion` to observe how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Construct a Vector Group - Group to Group Compare {/* #construct-a-vector-group---group-to-group-compare */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group---group-to-group-compare) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group---group-to-group-compare)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructVectorGroupGroupToGroupCompareInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly groupA: CollectionObjectName;
  readonly groupB: CollectionObjectName;
  readonly rmsDeviationTolerance?: number;
  readonly maxAbsoluteDeviationTolerance?: number;
  readonly averageDeviationTolerance?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructVectorGroupGroupToGroupCompare(
    input: ConstructVectorGroupGroupToGroupCompareInput,
    callOptions?: BriosaCallOptions,
  ): Promise<ConstructVectorGroupGroupToGroupCompareResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group - Area Profile Check {/* #construct-a-vector-group---area-profile-check */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group---area-profile-check) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group---area-profile-check)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructVectorGroupAreaProfileCheckInput {
  readonly referenceVectors: Iterable<VectorName>;
  readonly vectorGroupsToCheck: Iterable<CollectionVectorGroupName>;
  readonly resultantVectorGroupName: CollectionVectorGroupName;
  readonly areaRadius?: number;
  readonly areaTolerance?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructVectorGroupAreaProfileCheck(
    input: ConstructVectorGroupAreaProfileCheckInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group From Vector Name Ref List {/* #construct-a-vector-group-from-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-vector-name-ref-list) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-vector-name-ref-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructVectorGroupFromVectorNameRefListInput {
  readonly vectorNameList: Iterable<VectorName>;
  readonly resultantVectorGroupName: CollectionVectorGroupName;
}

// Member of BriosaClient
interface BriosaClient {
  constructVectorGroupFromVectorNameRefList(
    input: ConstructVectorGroupFromVectorNameRefListInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector in Working Coordinates(Begin/Delta) {/* #construct-a-vector-in-working-coordinatesbegindelta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindelta) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindelta)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructVectorInWorkingCoordinatesBeginDeltaInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly newVectorName: string;
  readonly beginInWorkingCoordinates: Vector;
  readonly deltaInWorkingCoordinates: Vector;
  readonly isMagnitudeNegative?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructVectorInWorkingCoordinatesBeginDelta(
    input: ConstructVectorInWorkingCoordinatesBeginDeltaInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector in Working Coordinates(Begin/Direction/Mag.) {/* #construct-a-vector-in-working-coordinatesbegindirectionmag */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindirectionmag) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindirectionmag)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly newVectorName: string;
  readonly beginInWorkingCoordinates: Vector;
  readonly directionInWorkingCoordinates: Vector;
  readonly signedMagnitude?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructVectorInWorkingCoordinatesBeginDirectionMagnitude(
    input: ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group From a Relationship {/* #construct-a-vector-group-from-a-relationship */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-a-relationship) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-a-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructVectorGroupFromRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly vectorGroupName: CollectionVectorGroupName;
}

// Member of BriosaClient
interface BriosaClient {
  constructVectorGroupFromRelationship(
    input: ConstructVectorGroupFromRelationshipInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Vector Name Ref List From a Vector Group {/* #make-a-vector-name-ref-list-from-a-vector-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list-from-a-vector-group) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list-from-a-vector-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface MakeVectorNameRefListFromVectorGroupInput {
  readonly vectorGroupName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  makeVectorNameRefListFromVectorGroup(
    input: MakeVectorNameRefListFromVectorGroupInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly VectorName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Vector Name Ref List - Runtime Select {/* #make-a-vector-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list---runtime-select)

Client 0.5.0 removed this method with behavioral contract major 3. No operator could complete its selection on either exact target in a licensed session, so it is unverified. SpatialAnalyzer never rejected it. It can return in a later 3.x revision once a licensed session verifies it. Build a vector name list directly, or from a vector group with Make a Vector Name Ref List From a Vector Group. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

## Make a Collection Vector Group Name Ref List - Runtime Select {/* #make-a-collection-vector-group-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-collection-vector-group-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-a-collection-vector-group-name-ref-list---runtime-select)

Client 0.5.0 removed this method with behavioral contract major 3. SpatialAnalyzer returned MP code 2 on both exact targets, but the selected vector groups could not be read back. No replacement selects vector groups at run time on these exact targets. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

## Make Vector Names Unique in Vector Group {/* #make-vector-names-unique-in-vector-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-vector-names-unique-in-vector-group) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-vector-names-unique-in-vector-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface MakeVectorNamesUniqueInVectorGroupInput {
  readonly vectorGroupName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  makeVectorNamesUniqueInVectorGroup(
    input: MakeVectorNamesUniqueInVectorGroupInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Types {/* #types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Functions {/* #functions */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Examples {/* #examples */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7)
