---
title: Construction Operations / Collections
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Collections

[SA 2026.1.0529.7](/api/javascript/construction-operations-collections) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-collections)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Set (or construct) default collection {/* #set-or-construct-default-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#set-or-construct-default-collection) · [gRPC Contract](/api/grpc/construction-operations-collections#set-or-construct-default-collection)

```ts
export interface SetOrConstructDefaultCollectionInput {
  readonly collectionName: CollectionName;
}

// Member of BriosaClient
interface BriosaClient {
  setOrConstructDefaultCollection(
    input: SetOrConstructDefaultCollectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Collection {/* #construct-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#construct-collection) · [gRPC Contract](/api/grpc/construction-operations-collections#construct-collection)

```ts
export interface ConstructCollectionInput {
  readonly collectionName: CollectionName;
  readonly folderPath?: string;
  readonly makeDefaultCollection?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructCollection(
    input: ConstructCollectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Collection Name {/* #get-active-collection-name */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#get-active-collection-name) · [gRPC Contract](/api/grpc/construction-operations-collections#get-active-collection-name)

```ts
export declare function getActiveCollectionName(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Collection {/* #delete-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collection) · [gRPC Contract](/api/grpc/construction-operations-collections#delete-collection)

```ts
export interface DeleteCollectionInput {
  readonly collectionName: CollectionName;
}

// Member of BriosaClient
interface BriosaClient {
  deleteCollection(
    input: DeleteCollectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Collections by Wildcard {/* #delete-collections-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collections-by-wildcard) · [gRPC Contract](/api/grpc/construction-operations-collections#delete-collections-by-wildcard)

```ts
export interface DeleteCollectionsByWildcardInput {
  readonly searchString: string;
  readonly caseSensitiveSearch?: boolean;
  readonly allowDeletingAllCollections?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  deleteCollectionsByWildcard(
    input: DeleteCollectionsByWildcardInput,
    callOptions?: BriosaCallOptions,
  ): Promise<DeleteCollectionsByWildcardResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2026.1.0529.7)
