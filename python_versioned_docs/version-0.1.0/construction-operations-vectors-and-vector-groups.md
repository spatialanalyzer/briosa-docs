---
title: Construction Operations / Vectors and Vector Groups
description: Briosa 0.1.0 Python APIs for selected vector and Vector Group construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Vectors and Vector Groups

## construct_vector_group_group_to_group_compare

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ConstructVectorGroupGroupToGroupCompareResult:
    vector_count: int
    rms_deviation: float
    max_absolute_deviation: float
    average_deviation: float

async def construct_vector_group_group_to_group_compare(
    self,
    vector_group_name: CollectionObjectName,
    group_a: CollectionObjectName,
    group_b: CollectionObjectName,
    *,
    rms_deviation_tolerance: float = 0.0,
    max_absolute_deviation_tolerance: float = 0.0,
    average_deviation_tolerance: float = 0.0,
) -> ConstructVectorGroupGroupToGroupCompareResult: ...
```

```python
comparison = await briosa.construction_operations.construct_vector_group_group_to_group_compare(
    vector_group_name,
    group_a,
    group_b,
)
```

Run this example inside an `async` function with a started `BriosaClient`
named `briosa`. The [complete example](./lifecycle.md#complete-example) shows
the `asyncio` setup.

## construct_vector_group_area_profile_check

```python
async def construct_vector_group_area_profile_check(
    self,
    reference_vectors: Iterable[VectorName],
    vector_groups_to_check: Iterable[CollectionVectorGroupName],
    resultant_vector_group_name: CollectionVectorGroupName,
    *,
    area_radius: float = 0.0,
    area_tolerance: float = 0.0,
) -> None: ...
```

```python
await briosa.construction_operations.construct_vector_group_area_profile_check(
    reference_vectors,
    vector_groups_to_check,
    resultant_vector_group_name,
)
```

Run this example inside an `async` function with a started `BriosaClient`
named `briosa`. The [complete example](./lifecycle.md#complete-example) shows
the `asyncio` setup.

## construct_vector_group_from_vector_name_ref_list

```python
async def construct_vector_group_from_vector_name_ref_list(
    self,
    vector_name_list: Iterable[VectorName],
    resultant_vector_group_name: CollectionVectorGroupName,
) -> None: ...
```

```python
await briosa.construction_operations.construct_vector_group_from_vector_name_ref_list(
    vector_names,
    resultant_vector_group_name,
)
```

Run this example inside an `async` function with a started `BriosaClient`
named `briosa`. The [complete example](./lifecycle.md#complete-example) shows
the `asyncio` setup.

## construct_vector_in_working_coordinates_begin_delta

```python
async def construct_vector_in_working_coordinates_begin_delta(
    self,
    vector_group_name: CollectionObjectName,
    new_vector_name: str,
    begin_in_working_coordinates: Vector,
    delta_in_working_coordinates: Vector,
    *,
    is_magnitude_negative: bool = False,
) -> None: ...
```

```python
await briosa.construction_operations.construct_vector_in_working_coordinates_begin_delta(
    vector_group_name,
    "Deviation 1",
    begin,
    delta,
)
```

Run this example inside an `async` function with a started `BriosaClient`
named `briosa`. The [complete example](./lifecycle.md#complete-example) shows
the `asyncio` setup.

## construct_vector_in_working_coordinates_begin_direction_magnitude

```python
async def construct_vector_in_working_coordinates_begin_direction_magnitude(
    self,
    vector_group_name: CollectionObjectName,
    new_vector_name: str,
    begin_in_working_coordinates: Vector,
    direction_in_working_coordinates: Vector,
    *,
    signed_magnitude: float = 0.0,
) -> None: ...
```

```python
await briosa.construction_operations.construct_vector_in_working_coordinates_begin_direction_magnitude(
    vector_group_name,
    "Deviation 2",
    begin,
    direction,
    signed_magnitude=5.0,
)
```

Run this example inside an `async` function with a started `BriosaClient`
named `briosa`. The [complete example](./lifecycle.md#complete-example) shows
the `asyncio` setup.

## construct_vector_group_from_relationship

```python
async def construct_vector_group_from_relationship(
    self,
    relationship_name: CollectionObjectName,
    vector_group_name: CollectionVectorGroupName,
) -> None: ...
```

```python
await briosa.construction_operations.construct_vector_group_from_relationship(
    relationship_name,
    vector_group_name,
)
```

Run this example inside an `async` function with a started `BriosaClient`
named `briosa`. The [complete example](./lifecycle.md#complete-example) shows
the `asyncio` setup.

## make_vector_name_ref_list_from_vector_group

```python
async def make_vector_name_ref_list_from_vector_group(
    self,
    vector_group_name: CollectionObjectName,
) -> list[VectorName]: ...
```

```python
vector_names = await briosa.construction_operations.make_vector_name_ref_list_from_vector_group(
    vector_group_name,
)
```

Run this example inside an `async` function with a started `BriosaClient`
named `briosa`. The [complete example](./lifecycle.md#complete-example) shows
the `asyncio` setup.

## make_vector_name_ref_list_runtime_select

```python
async def make_vector_name_ref_list_runtime_select(
    self,
    *,
    user_prompt: str = " Select Vectors (ENTER when done) ",
) -> list[VectorName]: ...
```

```python
selected_vectors = await briosa.construction_operations.make_vector_name_ref_list_runtime_select()
```

Run this example inside an `async` function with a started `BriosaClient`
named `briosa`. The [complete example](./lifecycle.md#complete-example) shows
the `asyncio` setup.

## make_collection_vector_group_name_ref_list_runtime_select

```python
async def make_collection_vector_group_name_ref_list_runtime_select(
    self,
    *,
    user_prompt: str = "",
) -> list[CollectionVectorGroupName]: ...
```

```python
selected_groups = await briosa.construction_operations.make_collection_vector_group_name_ref_list_runtime_select(
    user_prompt="Select vector groups",
)
```

Run this example inside an `async` function with a started `BriosaClient`
named `briosa`. The [complete example](./lifecycle.md#complete-example) shows
the `asyncio` setup.

Both runtime-selection coroutines are operator-interactive. Task cancellation
does not prove that the SA interaction stopped.

## make_vector_names_unique_in_vector_group

```python
async def make_vector_names_unique_in_vector_group(
    self,
    vector_group_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.construction_operations.make_vector_names_unique_in_vector_group(
    vector_group_name,
)
```

Run this example inside an `async` function with a started `BriosaClient`
named `briosa`. The [complete example](./lifecycle.md#complete-example) shows
the `asyncio` setup.

SpatialAnalyzer owns the mutation and resulting names. None of these calls is
automatically replayed after an unknown execution outcome.

The wildcard-selection command is SDK unavailable for this target. Construct,
decompose, and normalize `Vector` values directly in Python rather than making
an RPC.

[Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups) · [gRPC](/api/grpc/0.5.1/construction-operations-vectors-and-vector-groups)
