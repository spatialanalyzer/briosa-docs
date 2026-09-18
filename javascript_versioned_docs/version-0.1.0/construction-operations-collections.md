---
title: Construction Operations / Collections
description: Briosa 0.1.0 JavaScript and TypeScript APIs for selected collection-management MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Collections

The current server already exposes `Get Active Collection Name`. These
functions define its first-party wrapper and the four collection-mutation
functions. Mutation calls are never replayed automatically.

## Set (or construct) default collection

```ts
export interface SetOrConstructDefaultCollectionInput {
  readonly collectionName: CollectionName;
}

function setOrConstructDefaultCollection(
  briosa: BriosaClient,
  input: SetOrConstructDefaultCollectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Sets the default collection, constructing it when needed.

## Construct Collection

```ts
export interface ConstructCollectionInput {
  readonly collectionName: CollectionName;
  readonly folderPath?: string;
  readonly makeDefaultCollection?: boolean;
}

function constructCollection(
  briosa: BriosaClient,
  input: ConstructCollectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted `folderPath` and `makeDefaultCollection` values map to `''` and
`false`, respectively.

## Get Active Collection Name

```ts
function getActiveCollectionName(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<string>;
```

Resolves to the required `Currently Active Collection Name` string from the
current gRPC operation.

## Delete Collection

```ts
export interface DeleteCollectionInput {
  readonly collectionName: CollectionName;
}

function deleteCollection(
  briosa: BriosaClient,
  input: DeleteCollectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Deletes one explicitly named collection.

## Delete Collections by Wildcard

```ts
export interface DeleteCollectionsByWildcardInput {
  readonly searchString: string;
  readonly caseSensitiveSearch?: boolean;
  readonly allowDeletingAllCollections?: boolean;
}

export interface DeleteCollectionsByWildcardResult {
  readonly numDeleted: number;
  readonly numFailed: number;
}

function deleteCollectionsByWildcard(
  briosa: BriosaClient,
  input: DeleteCollectionsByWildcardInput,
  options?: BriosaCallOptions,
): Promise<DeleteCollectionsByWildcardResult>;
```

`searchString` is passed through without client-side value validation. Deleting
every collection requires an explicit `allowDeletingAllCollections: true`.
The result preserves both exact MP output counts.

[Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collections-by-wildcard) · [gRPC](/api/grpc/construction-operations-collections#delete-collections-by-wildcard)
