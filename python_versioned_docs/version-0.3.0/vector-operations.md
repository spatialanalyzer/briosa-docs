---
title: Vector Operations
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Vector Operations

[SA 2026.1.0529.7](/api/python/vector-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/vector-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add a Vector To Vector Name Ref List {/* #add-a-vector-to-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#add-a-vector-to-vector-name-ref-list) · [gRPC Contract](/api/grpc/vector-operations#add-a-vector-to-vector-name-ref-list)

```python
async def add_a_vector_to_vector_name_ref_list(
        self,
        vector_group_name: CollectionObjectName,
        *,
        vector_name: str = "",
        vector_name_list: Iterable[VectorName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Range and Set Vector Group Colorization (All) {/* #auto-range-and-set-vector-group-colorization-all */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-all) · [gRPC Contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-all)

```python
async def auto_range_and_set_vector_group_colorization_all(
        self,
        *,
        treat_individually: bool = False,
        colorization_options: ColorizationOptions = ColorizationOptions.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `colorization_options` | MP qualifier: Uses Mode Only. |

## Auto-Range and Set Vector Group Colorization (Selected) {/* #auto-range-and-set-vector-group-colorization-selected */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-selected) · [gRPC Contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-selected)

```python
async def auto_range_and_set_vector_group_colorization_selected(
        self,
        vector_groups_to_be_set: Iterable[CollectionVectorGroupName],
        *,
        treat_individually: bool = False,
        colorization_options: ColorizationOptions = ColorizationOptions.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `colorization_options` | MP qualifier: Uses Mode Only. |

## Delete i-th Vector From Vector Group {/* #delete-i-th-vector-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-i-th-vector-from-vector-group) · [gRPC Contract](/api/grpc/vector-operations#delete-i-th-vector-from-vector-group)

```python
async def delete_ith_vector_from_vector_group(
        self,
        vector_group_name: CollectionObjectName,
        *,
        vector_index: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Vector by Name {/* #delete-vector-by-name */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-vector-by-name) · [gRPC Contract](/api/grpc/vector-operations#delete-vector-by-name)

```python
async def delete_vector_by_name(
        self,
        vector_group_name: CollectionObjectName,
        *,
        vector_name: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Vectors {/* #delete-vectors */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-vectors) · [gRPC Contract](/api/grpc/vector-operations#delete-vectors)

```python
async def delete_vectors(
        self,
        vector_name_list: Iterable[VectorName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Vector From Vector Group {/* #get-i-th-vector-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-group) · [gRPC Contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-group)

```python
async def get_ith_vector_from_vector_group(
        self,
        vector_group_name: CollectionObjectName,
        *,
        vector_index: int = 0,
    ) -> GetIthVectorFromVectorGroupResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Vector From Vector Name Ref List {/* #get-i-th-vector-from-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-name-ref-list) · [gRPC Contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-name-ref-list)

```python
async def get_ith_vector_from_vector_name_ref_list(
        self,
        vector_name_list: Iterable[VectorName],
        *,
        vector_index: int = 0,
    ) -> GetIthVectorFromVectorNameRefListResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Vectors in Vector Group {/* #get-number-of-vectors-in-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-group) · [gRPC Contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-group)

```python
async def get_number_of_vectors_in_vector_group(
        self,
        vector_group_name: CollectionObjectName,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Vectors in Vector Name Ref List {/* #get-number-of-vectors-in-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-name-ref-list) · [gRPC Contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-name-ref-list)

```python
async def get_number_of_vectors_in_vector_name_ref_list(
        self,
        vector_name_list: Iterable[VectorName],
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector From Vector Group By Name {/* #get-vector-from-vector-group-by-name */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-vector-from-vector-group-by-name) · [gRPC Contract](/api/grpc/vector-operations#get-vector-from-vector-group-by-name)

```python
async def get_vector_from_vector_group_by_name(
        self,
        vector_group_name: CollectionObjectName,
        *,
        vector_name: str = "",
    ) -> GetVectorFromVectorGroupByNameResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Group Properties {/* #get-vector-group-properties */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-vector-group-properties) · [gRPC Contract](/api/grpc/vector-operations#get-vector-group-properties)

```python
async def get_vector_group_properties(
        self,
        vector_group_name: CollectionObjectName,
    ) -> GetVectorGroupPropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Colorization Options (All) {/* #set-vector-group-colorization-options-all */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-all) · [gRPC Contract](/api/grpc/vector-operations#set-vector-group-colorization-options-all)

```python
async def set_vector_group_colorization_options_all(
        self,
        *,
        colorization_options: ColorizationOptions = ColorizationOptions.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Colorization Options (Selected) {/* #set-vector-group-colorization-options-selected */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-selected) · [gRPC Contract](/api/grpc/vector-operations#set-vector-group-colorization-options-selected)

```python
async def set_vector_group_colorization_options_selected(
        self,
        vector_groups_to_be_set: Iterable[CollectionVectorGroupName],
        *,
        colorization_options: ColorizationOptions = ColorizationOptions.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Sort Vectors {/* #sort-vectors */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#sort-vectors) · [gRPC Contract](/api/grpc/vector-operations#sort-vectors)

```python
async def sort_vectors(
        self,
        source_vectors: Iterable[VectorName],
        *,
        sort_method: str = "Magnitude",
        coordinate_system: CoordinateSystemType = CoordinateSystemType.CARTESIAN,
        primary_sort_coordinate: str = "X (R)",
        secondary_sort_coordinate: str = "Y (Theta)",
        tertiary_sort_coordinate: str = "Z (Phi)",
        primary_coordinate_granularity: float = 0.000000,
        secondary_coordinate_granularity: float = 0.000000,
        tertiary_coordinate_granularity: float = 0.000000,
        ascending: bool = False,
    ) -> list[VectorName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2026.1.0529.7)
