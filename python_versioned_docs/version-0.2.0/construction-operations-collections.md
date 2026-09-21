---
title: Construction Operations / Collections
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Collections

[SA 2026.1.0529.7](/api/python/construction-operations-collections) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-collections)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Set (or construct) default collection {/* #set-or-construct-default-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#set-or-construct-default-collection) · [gRPC Contract](/api/grpc/construction-operations-collections#set-or-construct-default-collection)

```python
async def set_or_construct_default_collection(
        self,
        collection_name: CollectionName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Collection {/* #construct-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#construct-collection) · [gRPC Contract](/api/grpc/construction-operations-collections#construct-collection)

```python
async def construct_collection(
        self,
        collection_name: CollectionName,
        *,
        folder_path: str = "",
        make_default_collection: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Collection Name {/* #get-active-collection-name */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#get-active-collection-name) · [gRPC Contract](/api/grpc/construction-operations-collections#get-active-collection-name)

```python
async def get_active_collection_name(self) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Collection {/* #delete-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collection) · [gRPC Contract](/api/grpc/construction-operations-collections#delete-collection)

```python
async def delete_collection(
        self,
        collection_name: CollectionName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Collections by Wildcard {/* #delete-collections-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collections-by-wildcard) · [gRPC Contract](/api/grpc/construction-operations-collections#delete-collections-by-wildcard)

```python
async def delete_collections_by_wildcard(
        self,
        search_string: str,
        *,
        case_sensitive_search: bool = True,
        allow_deleting_all_collections: bool = False,
    ) -> DeleteCollectionsByWildcardResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2026.1.0529.7)
