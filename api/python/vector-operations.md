---
title: Vector Operations
description: Next Briosa Python APIs for supported Vector Operations MP commands.
toc_max_heading_level: 2
---

# Vector Operations

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Add a Vector To Vector Name Ref List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add a Vector To Vector Name Ref List](/mp-command-catalog/commands/vector-operations#add-a-vector-to-vector-name-ref-list) · [gRPC contract](/api/grpc/vector-operations#add-a-vector-to-vector-name-ref-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vector_name` | `str` | `Vector Name` | Empty |
| `vector_name_list` | `Iterable[VectorName]` | `Vector Name List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_a_vector_to_vector_name_ref_list(
    self,
    vector_group_name: CollectionObjectName,
    *,
    vector_name: str = '',
    vector_name_list: Iterable[VectorName],
) -> None: ...
```

```python
await briosa.add_a_vector_to_vector_name_ref_list(vector_group_name=..., vector_name_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Auto-Range and Set Vector Group Colorization (All)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Auto-Range and Set Vector Group Colorization (All)](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-all) · [gRPC contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-all)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `treat_individually` | `bool` | `Treat Individually?` | false |
| `colorization_options_uses_mode_only` | `Color` | `Colorization Options (Uses Mode Only)` | Red |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def auto_range_and_set_vector_group_colorization_all(
    self,
    *,
    treat_individually: bool = False,
    colorization_options_uses_mode_only: Color = Color.DEFAULT,
) -> None: ...
```

```python
await briosa.auto_range_and_set_vector_group_colorization_all()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Auto-Range and Set Vector Group Colorization (Selected)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Auto-Range and Set Vector Group Colorization (Selected)](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-selected) · [gRPC contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-selected)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_groups_to_be_set` | `Iterable[CollectionVectorGroupName]` | `Vector Groups to be Set` | Required |
| `treat_individually` | `bool` | `Treat Individually?` | false |
| `colorization_options_uses_mode_only` | `Color` | `Colorization Options (Uses Mode Only)` | Red |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def auto_range_and_set_vector_group_colorization_selected(
    self,
    vector_groups_to_be_set: Iterable[CollectionVectorGroupName],
    *,
    treat_individually: bool = False,
    colorization_options_uses_mode_only: Color = Color.DEFAULT,
) -> None: ...
```

```python
await briosa.auto_range_and_set_vector_group_colorization_selected(vector_groups_to_be_set=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete i-th Vector From Vector Group

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete i-th Vector From Vector Group](/mp-command-catalog/commands/vector-operations#delete-i-th-vector-from-vector-group) · [gRPC contract](/api/grpc/vector-operations#delete-i-th-vector-from-vector-group)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vector_index` | `int` | `Vector Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_ith_vector_from_vector_group(
    self,
    vector_group_name: CollectionObjectName,
    *,
    vector_index: int = 0,
) -> None: ...
```

```python
await briosa.delete_ith_vector_from_vector_group(vector_group_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete Vector by Name

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete Vector by Name](/mp-command-catalog/commands/vector-operations#delete-vector-by-name) · [gRPC contract](/api/grpc/vector-operations#delete-vector-by-name)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vector_name` | `str` | `Vector Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_vector_by_name(
    self,
    vector_group_name: CollectionObjectName,
    *,
    vector_name: str = '',
) -> None: ...
```

```python
await briosa.delete_vector_by_name(vector_group_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete Vectors

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete Vectors](/mp-command-catalog/commands/vector-operations#delete-vectors) · [gRPC contract](/api/grpc/vector-operations#delete-vectors)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_name_list` | `Iterable[VectorName]` | `Vector Name List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_vectors(
    self,
    vector_name_list: Iterable[VectorName],
) -> None: ...
```

```python
await briosa.delete_vectors(vector_name_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get i-th Vector From Vector Group

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get i-th Vector From Vector Group](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-group) · [gRPC contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-group)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vector_index` | `int` | `Vector Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `vector_name` | `str` | `Vector Name` |
| `begin_in_working` | `Vector` | `Begin in Working` |
| `end_in_working` | `Vector` | `End in Working` |
| `total_delta_in_working` | `Vector` | `Total Delta in Working` |
| `ijk_unit_vector_in_working` | `Vector` | `ijk Unit Vector in Working` |
| `magnitude` | `float` | `Magnitude` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetIthVectorFromVectorGroupResult:
    vector_name: str
    begin_in_working: Vector
    end_in_working: Vector
    total_delta_in_working: Vector
    ijk_unit_vector_in_working: Vector
    magnitude: float

async def get_ith_vector_from_vector_group(
    self,
    vector_group_name: CollectionObjectName,
    *,
    vector_index: int = 0,
) -> GetIthVectorFromVectorGroupResult: ...
```

```python
await briosa.get_ith_vector_from_vector_group(vector_group_name=...)
```

Returns the 6 MP outputs in the named `GetIthVectorFromVectorGroupResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get i-th Vector From Vector Name Ref List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get i-th Vector From Vector Name Ref List](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-name-ref-list) · [gRPC contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-name-ref-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_name_list` | `Iterable[VectorName]` | `Vector Name List` | Required |
| `vector_index` | `int` | `Vector Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `vector_group_name` | `CollectionObjectName` | `Vector Group Name` |
| `vector_name` | `str` | `Vector Name` |
| `begin_in_working` | `Vector` | `Begin in Working` |
| `end_in_working` | `Vector` | `End in Working` |
| `total_delta_in_working` | `Vector` | `Total Delta in Working` |
| `ijk_unit_vector_in_working` | `Vector` | `ijk Unit Vector in Working` |
| `magnitude` | `float` | `Magnitude` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetIthVectorFromVectorNameRefListResult:
    vector_group_name: CollectionObjectName
    vector_name: str
    begin_in_working: Vector
    end_in_working: Vector
    total_delta_in_working: Vector
    ijk_unit_vector_in_working: Vector
    magnitude: float

async def get_ith_vector_from_vector_name_ref_list(
    self,
    vector_name_list: Iterable[VectorName],
    *,
    vector_index: int = 0,
) -> GetIthVectorFromVectorNameRefListResult: ...
```

```python
await briosa.get_ith_vector_from_vector_name_ref_list(vector_name_list=...)
```

Returns the 7 MP outputs in the named `GetIthVectorFromVectorNameRefListResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Number of Vectors in Vector Group

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Number of Vectors in Vector Group](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-group) · [gRPC contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-group)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `total_count` | `int` | `Total Count` |

```python
async def get_number_of_vectors_in_vector_group(
    self,
    vector_group_name: CollectionObjectName,
) -> int: ...
```

```python
await briosa.get_number_of_vectors_in_vector_group(vector_group_name=...)
```

Returns the MP output `Total Count` directly as `int`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Number of Vectors in Vector Name Ref List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Number of Vectors in Vector Name Ref List](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-name-ref-list) · [gRPC contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-name-ref-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_name_list` | `Iterable[VectorName]` | `Vector Name List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `total_count` | `int` | `Total Count` |

```python
async def get_number_of_vectors_in_vector_name_ref_list(
    self,
    vector_name_list: Iterable[VectorName],
) -> int: ...
```

```python
await briosa.get_number_of_vectors_in_vector_name_ref_list(vector_name_list=...)
```

Returns the MP output `Total Count` directly as `int`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Vector From Vector Group By Name

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Vector From Vector Group By Name](/mp-command-catalog/commands/vector-operations#get-vector-from-vector-group-by-name) · [gRPC contract](/api/grpc/vector-operations#get-vector-from-vector-group-by-name)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vector_name` | `str` | `Vector Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `begin_in_working` | `Vector` | `Begin in Working` |
| `end_in_working` | `Vector` | `End in Working` |
| `total_delta_in_working` | `Vector` | `Total Delta in Working` |
| `ijk_unit_vector_in_working` | `Vector` | `ijk Unit Vector in Working` |
| `magnitude` | `float` | `Magnitude` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetVectorFromVectorGroupByNameResult:
    begin_in_working: Vector
    end_in_working: Vector
    total_delta_in_working: Vector
    ijk_unit_vector_in_working: Vector
    magnitude: float

async def get_vector_from_vector_group_by_name(
    self,
    vector_group_name: CollectionObjectName,
    *,
    vector_name: str = '',
) -> GetVectorFromVectorGroupByNameResult: ...
```

```python
await briosa.get_vector_from_vector_group_by_name(vector_group_name=...)
```

Returns the 5 MP outputs in the named `GetVectorFromVectorGroupByNameResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Vector Group Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Vector Group Properties](/mp-command-catalog/commands/vector-operations#get-vector-group-properties) · [gRPC contract](/api/grpc/vector-operations#get-vector-group-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `total_vectors` | `int` | `Total Vectors` |
| `vectors_in_tolerance` | `int` | `Vectors In Tolerance` |
| `vectors_out_of_tolerance` | `int` | `Vectors Out Of Tolerance` |
| `invalid_vectors` | `int` | `Invalid Vectors` |
| `vectors_in_tolerance_2` | `float` | `% Vectors In Tolerance` |
| `vectors_out_of_tolerance_2` | `float` | `% Vectors Out Of Tolerance` |
| `absolute_max_magnitude` | `float` | `Absolute Max Magnitude` |
| `absolute_min_magnitude` | `float` | `Absolute Min Magnitude` |
| `max_magnitude` | `float` | `Max Magnitude` |
| `min_magnitude` | `float` | `Min Magnitude` |
| `standard_deviation_from_zero` | `float` | `Standard Deviation From Zero` |
| `standard_deviation_from_mean` | `float` | `Standard Deviation From Mean` |
| `avg_magnitude` | `float` | `Avg Magnitude` |
| `avg_of_abs_magnitude` | `float` | `Avg of Abs Magnitude` |
| `high_tolerance_value` | `float` | `High Tolerance Value` |
| `low_tolerance_value` | `float` | `Low Tolerance Value` |
| `rms_value` | `float` | `RMS Value` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetVectorGroupPropertiesResult:
    total_vectors: int
    vectors_in_tolerance: int
    vectors_out_of_tolerance: int
    invalid_vectors: int
    vectors_in_tolerance_2: float
    vectors_out_of_tolerance_2: float
    absolute_max_magnitude: float
    absolute_min_magnitude: float
    max_magnitude: float
    min_magnitude: float
    standard_deviation_from_zero: float
    standard_deviation_from_mean: float
    avg_magnitude: float
    avg_of_abs_magnitude: float
    high_tolerance_value: float
    low_tolerance_value: float
    rms_value: float

async def get_vector_group_properties(
    self,
    vector_group_name: CollectionObjectName,
) -> GetVectorGroupPropertiesResult: ...
```

```python
await briosa.get_vector_group_properties(vector_group_name=...)
```

Returns the 17 MP outputs in the named `GetVectorGroupPropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Vector Group Colorization Options (All)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Vector Group Colorization Options (All)](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-all) · [gRPC contract](/api/grpc/vector-operations#set-vector-group-colorization-options-all)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `colorization_options` | `Color` | `Colorization Options` | Red |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_vector_group_colorization_options_all(
    self,
    *,
    colorization_options: Color = Color.DEFAULT,
) -> None: ...
```

```python
await briosa.set_vector_group_colorization_options_all()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Vector Group Colorization Options (Selected)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Vector Group Colorization Options (Selected)](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-selected) · [gRPC contract](/api/grpc/vector-operations#set-vector-group-colorization-options-selected)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_groups_to_be_set` | `Iterable[CollectionVectorGroupName]` | `Vector Groups to be Set` | Required |
| `colorization_options` | `Color` | `Colorization Options` | Red |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_vector_group_colorization_options_selected(
    self,
    vector_groups_to_be_set: Iterable[CollectionVectorGroupName],
    *,
    colorization_options: Color = Color.DEFAULT,
) -> None: ...
```

```python
await briosa.set_vector_group_colorization_options_selected(vector_groups_to_be_set=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Sort Vectors

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Sort Vectors](/mp-command-catalog/commands/vector-operations#sort-vectors) · [gRPC contract](/api/grpc/vector-operations#sort-vectors)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `source_vectors` | `Iterable[VectorName]` | `Source Vectors` | Required |
| `sort_method` | `str` | `Sort Method` | Magnitude |
| `coordinate_system` | `CoordinateSystemType` | `Coordinate System` | Cartesian |
| `primary_sort_coordinate` | `str` | `Primary Sort Coordinate` | X (R) |
| `secondary_sort_coordinate` | `str` | `Secondary Sort Coordinate` | Y (Theta) |
| `tertiary_sort_coordinate` | `str` | `Tertiary Sort Coordinate` | Z (Phi) |
| `primary_coordinate_granularity` | `float` | `Primary Coordinate Granularity` | 0.000000 |
| `secondary_coordinate_granularity` | `float` | `Secondary Coordinate Granularity` | 0.000000 |
| `tertiary_coordinate_granularity` | `float` | `Tertiary Coordinate Granularity` | 0.000000 |
| `ascending` | `bool` | `Ascending?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `sorted_vectors` | `list[VectorName]` | `Sorted Vectors` |

```python
async def sort_vectors(
    self,
    source_vectors: Iterable[VectorName],
    *,
    sort_method: str = "Magnitude",
    coordinate_system: CoordinateSystemType = CoordinateSystemType.DEFAULT,
    primary_sort_coordinate: str = "X (R)",
    secondary_sort_coordinate: str = "Y (Theta)",
    tertiary_sort_coordinate: str = "Z (Phi)",
    primary_coordinate_granularity: float = 0.000000,
    secondary_coordinate_granularity: float = 0.000000,
    tertiary_coordinate_granularity: float = 0.000000,
    ascending: bool = False,
) -> list[VectorName]: ...
```

```python
await briosa.sort_vectors(source_vectors=...)
```

Returns the MP output `Sorted Vectors` directly as `list[VectorName]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
