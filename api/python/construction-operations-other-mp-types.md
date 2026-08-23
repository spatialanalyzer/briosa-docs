---
title: Construction Operations / Other MP Types
description: Next Briosa Python APIs for selected Other MP Types commands.
toc_max_heading_level: 2
---

# Construction Operations / Other MP Types

:::note[Next Python Contract]

These APIs are not released support until implemented and versioned.

:::

The client does not retain SpatialAnalyzer or MP state, and no call is
automatically replayed.

## Shared Values

```python
class SystemString(StrEnum):
    SA_VERSION = "SA Version"
    XIT_FILENAME = "XIT Filename"
    MP_FILENAME = "MP Filename"
    MP_FILENAME_FULL_PATH = "MP Filename (Full Path)"
    DATE_AND_TIME = "Date & Time"
    DATE = "Date"
    DATE_SHORT = "Date (Short)"
    TIME = "Time"
    KEY_SERIAL_NUMBER = "Key Serial Number"
    COMPANY_NAME = "Company Name"
    USER_NAME = "User Name"
    LICENSE_USER_NAME = "License User Name"
    WINDOWS_USER_NAME = "Windows User Name"
    COMPUTER_NAME = "Computer Name"

@dataclass(frozen=True)
class FixedXyzTransformComponents:
    x: float
    y: float
    z: float
    rx: float
    ry: float
    rz: float

@dataclass(frozen=True)
class FixedXyzTransformVectors:
    position_in_working: Vector
    orientation_in_working: Vector

@dataclass(frozen=True)
class TransformAxes:
    origin: Vector
    x_axis: Vector
    y_axis: Vector
    z_axis: Vector

@dataclass(frozen=True)
class WorldFixedXyzTransformComponents(FixedXyzTransformComponents):
    scale: float

@dataclass(frozen=True)
class EulerXyzTransformComponents:
    x: float
    y: float
    z: float
    rx: float
    ry: float
    rz: float

@dataclass(frozen=True)
class EulerZyxTransformComponents:
    x: float
    y: float
    z: float
    rz: float
    ry: float
    rx: float

@dataclass(frozen=True)
class EulerZyzTransformComponents:
    x: float
    y: float
    z: float
    first_rz: float
    ry: float
    second_rz: float

@dataclass(frozen=True)
class EulerZxzTransformComponents:
    x: float
    y: float
    z: float
    first_rz: float
    rx: float
    second_rz: float

@dataclass(frozen=True)
class WorldFixedXyzTransformVectors:
    position_in_working: Vector
    orientation_in_working: Vector
    scale: float
```

`ItemType`, `ObjectType`, `Color`, `Transform`, `WorldTransform`, and the
identity classes are shared Briosa values.

## Make a System String

```python
async def make_system_string(
    self,
    string_content: SystemString,
    *,
    format_string: str | None = None,
) -> str: ...
```

The returned string is never logged by default because some choices expose
user or license-registration information.

## Make a Collection Name - Runtime Select

```python
async def make_collection_name_runtime_select(
    self,
    *,
    user_prompt: str = "",
) -> CollectionName: ...
```

## Make a Collection Item Name Reference List - WildCard Selection

```python
async def make_collection_item_name_ref_list_wildcard_selection(
    self,
    *,
    collection_wildcard_criteria: str = "*",
    item_wildcard_criteria: str = "*",
    item_type: ItemType = ItemType.ANY,
) -> list[CollectionItemName]: ...
```

## Make a Collection Object Name - Runtime Select

```python
async def make_collection_object_name_runtime_select(
    self,
    *,
    user_prompt: str = "",
    object_type: ObjectType = ObjectType.ANY,
) -> CollectionObjectName: ...
```

## Make a Collection Object Name - Ensure Unique

```python
async def make_collection_object_name_ensure_unique(
    self,
    collection_object_name: CollectionObjectName,
    *,
    use_number_suffix: bool = False,
) -> CollectionObjectName: ...
```

The result is the MP's first argument after SpatialAnalyzer mutates it.

## Make a Collection Object Name Reference List- Runtime Select

```python
async def make_collection_object_name_ref_list_runtime_select(
    self,
    *,
    user_prompt: str = "",
    object_type: ObjectType = ObjectType.ANY,
) -> list[CollectionObjectName]: ...
```

## Make a Collection Object Name Reference List- WildCard Selection

```python
async def make_collection_object_name_ref_list_wildcard_selection(
    self,
    *,
    collection_wildcard_criteria: str = "*",
    object_wildcard_criteria: str = "*",
    object_type: ObjectType = ObjectType.ANY,
) -> list[CollectionObjectName]: ...
```

## Make a Collection Object Name Ref List - By Type

```python
async def make_collection_object_name_ref_list_by_type(
    self,
    collection: str,
    *,
    object_type: ObjectType = ObjectType.ANY,
) -> list[CollectionObjectName]: ...
```

## Make a Collection Object Name Ref List - By Type and Color

```python
async def make_collection_object_name_ref_list_by_type_and_color(
    self,
    collection: str,
    *,
    object_type: ObjectType = ObjectType.ANY,
    object_color: Color = Color(255, 0, 0),
) -> list[CollectionObjectName]: ...
```

## Make a Collection Object Name Ref List from all Groups in a Collection

```python
async def make_collection_object_name_ref_list_from_all_groups_in_collection(
    self,
    collection_name: CollectionName,
) -> list[CollectionObjectName]: ...
```

## Get Collection Instrument Ref List Variable

```python
async def get_collection_instrument_ref_list_variable(
    self,
    name: str,
) -> list[CollectionInstrumentId]: ...
```

The value is read from MP state on every call.

## Set Collection Instrument Ref List Variable

```python
async def set_collection_instrument_ref_list_variable(
    self,
    name: str,
    value: Iterable[CollectionInstrumentId],
) -> None: ...
```

## Add Collection Instruments to a Ref List - WildCard Selection

```python
async def add_collection_instruments_to_ref_list_wildcard_selection(
    self,
    collection_instrument_ref_list: Iterable[CollectionInstrumentId],
    *,
    collection_wildcard_criteria: str = "*",
    instrument_wildcard_criteria: str = "*",
) -> list[CollectionInstrumentId]: ...
```

The returned list is the MP's first argument after mutation.

## Make a Collection Instrument Reference List- Runtime Select

```python
async def make_collection_instrument_ref_list_runtime_select(
    self,
    *,
    user_prompt: str = "",
) -> list[CollectionInstrumentId]: ...
```

## Make a Relationship Reference List- WildCard Selection

```python
async def make_relationship_ref_list_wildcard_selection(
    self,
    *,
    collection_wildcard_criteria: str = "*",
    relationship_wildcard_criteria: str = "*",
) -> list[CollectionItemName]: ...
```

The unavailable MP relationship-type filter is intentionally omitted.

## Make a Relationship Reference List- Runtime Select

```python
async def make_relationship_ref_list_runtime_select(
    self,
    *,
    user_prompt: str = "",
) -> list[CollectionItemName]: ...
```

## Make an Event Reference List- WildCard Selection

```python
async def make_event_ref_list_wildcard_selection(
    self,
    *,
    collection_wildcard_criteria: str = "*",
    event_wildcard_criteria: str = "*",
) -> list[CollectionItemName]: ...
```

## Make a Collection Instrument ID - Runtime Select

```python
async def make_collection_instrument_id_runtime_select(
    self,
    *,
    user_prompt: str = "",
) -> CollectionInstrumentId: ...
```

## Make a Report Ref List from a Collection

```python
async def make_report_ref_list_from_collection(
    self,
    collection_name: CollectionName,
) -> list[CollectionItemName]: ...
```

## Make a Report Ref List - Runtime Select

```python
async def make_report_ref_list_runtime_select(
    self,
    *,
    user_prompt: str = "",
) -> list[CollectionItemName]: ...
```

## Make a Picture Name Ref List - Runtime Select

```python
async def make_picture_name_ref_list_runtime_select(
    self,
    *,
    user_prompt: str = "",
) -> list[CollectionItemName]: ...
```

Runtime-selection coroutines are explicitly interactive. Cancelling the await
does not prove that the SpatialAnalyzer interaction stopped.

## Make a Transform from Doubles (Fixed XYZ)

```python
async def make_transform_from_doubles_fixed_xyz(
    self,
    *,
    x: float = 0,
    y: float = 0,
    z: float = 0,
    rx: float = 0,
    ry: float = 0,
    rz: float = 0,
) -> Transform: ...
```

## Make a Transform from Doubles (Euler Parameters)

```python
async def make_transform_from_doubles_euler_parameters(
    self,
    *,
    x: float = 0,
    y: float = 0,
    z: float = 0,
    e1: float = 0,
    e2: float = 0,
    e3: float = 0,
    e4: float = 0,
) -> Transform: ...
```

All defaults, including the four zero Euler parameters, match the MP editor.

## Get Working Transform of Object (Fixed XYZ)

```python
async def get_working_transform_of_object_fixed_xyz(
    self,
    object_name: CollectionObjectName,
) -> Transform: ...
```

## Invert Transform

```python
async def invert_transform(self, transform: Transform) -> Transform: ...
```

## Decompose Transform into Doubles (Fixed XYZ)

```python
async def decompose_transform_into_doubles_fixed_xyz(
    self,
    input_transform: Transform,
) -> FixedXyzTransformComponents: ...
```

## Decompose Transform into Vectors (Fixed XYZ)

```python
async def decompose_transform_into_vectors_fixed_xyz(
    self,
    input_transform: Transform,
) -> FixedXyzTransformVectors: ...
```

## Decompose Transform into Vectors (Origin and Axes)

```python
async def decompose_transform_into_vectors_origin_and_axes(
    self,
    transform: Transform,
) -> TransformAxes: ...
```

## Decompose World Transform Operator into Doubles (Fixed XYZ in World)

```python
async def decompose_world_transform_operator_into_doubles_fixed_xyz_in_world(
    self,
    input_world_transform_operator: WorldTransform,
) -> WorldFixedXyzTransformComponents: ...
```

## Decompose Transform into Doubles (Euler XYZ)

```python
async def decompose_transform_into_doubles_euler_xyz(
    self,
    input_transform: Transform,
) -> EulerXyzTransformComponents: ...
```

## Decompose Transform into Doubles (Euler ZYX)

```python
async def decompose_transform_into_doubles_euler_zyx(
    self,
    input_transform: Transform,
) -> EulerZyxTransformComponents: ...
```

## Decompose Transform into Doubles (Euler ZYZ)

```python
async def decompose_transform_into_doubles_euler_zyz(
    self,
    input_transform: Transform,
) -> EulerZyzTransformComponents: ...
```

`first_rz` and `second_rz` preserve the repeated MP output labels.

## Decompose Transform into Doubles (Euler ZXZ)

```python
async def decompose_transform_into_doubles_euler_zxz(
    self,
    input_transform: Transform,
) -> EulerZxzTransformComponents: ...
```

## Decompose World Transform Operator into Vectors (Fixed XYZ in World)

```python
async def decompose_world_transform_operator_into_vectors_fixed_xyz_in_world(
    self,
    input_world_transform_operator: WorldTransform,
) -> WorldFixedXyzTransformVectors: ...
```

## Related References

[Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types) ·
[gRPC](/api/grpc/construction-operations-other-mp-types)
