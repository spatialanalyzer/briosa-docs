---
title: Construction Operations / Collections
description: Briosa 0.1.0 Python APIs for selected collection-management MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Collections

The current server already exposes `Get Active Collection Name`. These
coroutines define its first-party wrapper and the four collection-mutation
methods. Mutation calls are never replayed automatically.

## Set (or construct) default collection

```python
async def set_or_construct_default_collection(
    self,
    collection_name: CollectionName,
) -> None: ...
```

Sets the default collection, constructing it when needed.

## Construct Collection

```python
async def construct_collection(
    self,
    collection_name: CollectionName,
    *,
    folder_path: str = "",
    make_default_collection: bool = False,
) -> None: ...
```

Constructs a collection with the reviewed MP defaults for folder placement and
default-collection selection.

## Get Active Collection Name

```python
async def get_active_collection_name(self) -> str: ...
```

Returns the required `Currently Active Collection Name` string from the
current gRPC operation.

## Delete Collection

```python
async def delete_collection(
    self,
    collection_name: CollectionName,
) -> None: ...
```

Deletes one explicitly named collection.

## Delete Collections by Wildcard

```python
@dataclass(frozen=True)
class DeleteCollectionsByWildcardResult:
    num_deleted: int
    num_failed: int

async def delete_collections_by_wildcard(
    self,
    search_string: str,
    *,
    case_sensitive_search: bool = True,
    allow_deleting_all_collections: bool = False,
) -> DeleteCollectionsByWildcardResult: ...
```

`search_string` is passed through without client-side value validation.
Deleting every collection requires an explicit
`allow_deleting_all_collections=True`. The result preserves both exact MP
output counts.

[Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collections-by-wildcard) · [gRPC](/api/grpc/construction-operations-collections#delete-collections-by-wildcard)
