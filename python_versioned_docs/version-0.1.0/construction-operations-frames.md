---
title: Construction Operations / Frames
description: Briosa 0.1.0 Python APIs for selected frame-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Frames

These APIs preserve the exact MP inputs and defaults. They do not add geometry
validation, and the client never automatically replays any of these mutation
or interactive operations.

## Shared Choice Types

```python
class FrameConstructionMethod(Enum):
    ORIGIN_X_XY = "Origin,X,XY"
    ORIGIN_X_XZ = "Origin,X,XZ"
    ORIGIN_Y_YX = "Origin,Y,YX"
    ORIGIN_Y_YZ = "Origin,Y,YZ"
    ORIGIN_Z_ZX = "Origin,Z,ZX"
    ORIGIN_X_ZY = "Origin,X,ZY"

class AxisIdentifier(Enum):
    POSITIVE_X = "+X"
    NEGATIVE_X = "-X"
    POSITIVE_Y = "+Y"
    NEGATIVE_Y = "-Y"
    POSITIVE_Z = "+Z"
    NEGATIVE_Z = "-Z"

class FrameAxis(Enum):
    X = "X"
    Y = "Y"
    Z = "Z"
```

## Construct Frame with Wizard

```python
async def construct_frame_with_wizard(
    self,
    new_frame_name: CollectionObjectName,
    *,
    wait_for_completion: bool = True,
) -> None: ...
```

This opens SpatialAnalyzer's interactive wizard. Cancellation does not prove
that the wizard closed.

## Construct Frame

```python
async def construct_frame(
    self,
    new_frame_name: CollectionObjectName,
    transform_in_working_coordinates: Transform | None = None,
) -> None: ...
```

Omitting the transform uses the MP identity-transform default.

## Construct Frame From Transform In World

```python
async def construct_frame_from_transform_in_world(
    self,
    new_frame_name: CollectionObjectName,
    transform_in_world_coordinates: Transform | None = None,
) -> None: ...
```

Omitting the transform uses the MP identity-transform default.

## Construct Frame on Instrument Base

```python
async def construct_frame_on_instrument_base(
    self,
    instrument_id: CollectionInstrumentId,
    frame_name: str | None = None,
) -> None: ...
```

Omitting `frame_name` leaves the optional MP argument unset.

## Construct Frame on Object

```python
async def construct_frame_on_object(
    self,
    reference_object: CollectionObjectName,
    frame_name: CollectionObjectName | None = None,
) -> None: ...
```

## Construct Frame, 3 Points

```python
async def construct_frame_three_points(
    self,
    construction_method: FrameConstructionMethod,
    origin_point: PointName,
    primary_axis_point: PointName,
    secondary_axis_point: PointName,
    frame_name: str | None = None,
) -> None: ...
```

## Construct Frame, at Point, with working Z, and clocked axis

```python
async def construct_frame_at_point_with_working_z_and_clocked_axis(
    self,
    origin_point: PointName,
    clocked_axis: AxisIdentifier,
    clocking_point: PointName,
    frame_name: str | None = None,
) -> None: ...
```

## Construct Frame, Pick origin and point on X axis - clock Z along working Z

```python
async def construct_frame_pick_origin_and_point_on_x_axis_clock_z_along_working_z(
    self,
    origin_point: PointName,
    point_on_x_axis: PointName,
    frame_name: str | None = None,
) -> None: ...
```

## Construct Frame, Known Origin, Object Direction, Object Direction

```python
async def construct_frame_known_origin_object_direction_object_direction(
    self,
    known_point: PointName,
    known_point_value_in_new_frame: Vector,
    primary_axis_object: CollectionObjectName,
    primary_axis_defines_which_axis: AxisIdentifier,
    secondary_axis_object: CollectionObjectName,
    secondary_axis_defines_which_axis: AxisIdentifier,
    frame_name: CollectionObjectName | None = None,
) -> None: ...
```

## Construct Frame, 3 Planes

```python
async def construct_frame_three_planes(
    self,
    x_plane: CollectionObjectName,
    x_value_on_plane: float,
    y_plane: CollectionObjectName,
    y_value_on_plane: float,
    z_plane: CollectionObjectName,
    z_value_on_plane: float,
    frame_name: CollectionObjectName | None = None,
) -> None: ...
```

The server preserves the exact MP binding spellings for the X and Y values.

## Construct Frame - Copy And Make Left Handed

```python
async def construct_frame_copy_and_make_left_handed(
    self,
    reference_frame: CollectionObjectName,
    axis_to_reverse: FrameAxis,
    frame_name: CollectionObjectName | None = None,
) -> None: ...
```

`FrameAxis` is intentionally unsigned because the MP choice is X, Y, or Z.

## Construct Frame - Average of Other Object Frames

```python
async def construct_frame_average_of_other_object_frames(
    self,
    objects: Iterable[CollectionObjectName],
    frame_name: CollectionObjectName | None = None,
) -> None: ...
```

The client does not impose a minimum number of objects.

## Construct Frame at Robot Link

```python
async def construct_frame_at_robot_link(
    self,
    machine_id: CollectionMachineId,
    link_name: str,
    resulting_frame: CollectionObjectName,
) -> None: ...
```

## Construct Frame From Point Measurement Probing Frames

```python
async def construct_frame_from_point_measurement_probing_frames(
    self,
    point_list: Iterable[PointName],
    *,
    show_frame: bool = False,
) -> None: ...
```

The client does not impose a minimum list size.

## Construct Mirror Cube Frame

```python
async def construct_mirror_cube_frame(
    self,
    mirror_cube_frame_name: CollectionObjectName,
    point_name: PointName,
    *,
    use_current_measurements_marked_as_mirror_shots: bool = True,
    nominal_cube_face_angle: float = 90,
) -> float: ...
```

The returned `float` is the MP `Total Angular Error` output.

## Construct Frames By Projecting Frames On Mesh Along Frame Direction

```python
async def construct_frames_by_projecting_frames_on_mesh_along_frame_direction(
    self,
    reference_frame_names: Iterable[CollectionObjectName],
    base_name_for_projected_frames: CollectionObjectName,
    mesh_serving_as_projection_target: CollectionObjectName,
    *,
    bi_directional_projection: bool = True,
) -> list[CollectionObjectName]: ...
```

The returned list is the exact MP `Resultant Frame Name List` output.

## Construct Frames By Projecting Frames On Mesh Along Reference Direction

```python
async def construct_frames_by_projecting_frames_on_mesh_along_reference_direction(
    self,
    reference_frame_names: Iterable[CollectionObjectName],
    base_name_for_projected_frames: CollectionObjectName,
    object_providing_direction_reference: CollectionObjectName,
    mesh_serving_as_projection_target: CollectionObjectName,
    *,
    bi_directional_projection: bool = True,
) -> list[CollectionObjectName]: ...
```

## Add Surface To Mesh Offset Along Reference Direction

```python
async def add_surface_to_mesh_offset_along_reference_direction(
    self,
    reference_frame_names: Iterable[CollectionObjectName],
    surface_for_offset_distance_computation: CollectionObjectName,
    collection_for_result_frames: str,
    object_providing_direction_reference: CollectionObjectName,
    mesh_serving_as_projection_target: CollectionObjectName,
    *,
    surface_offset_range: float = 10,
    bi_directional_projection: bool = True,
) -> None: ...
```

All values are passed through without client-side geometry validation.

## Related References

[Catalog](/mp-command-catalog/commands/construction-operations-frames) ·
[gRPC](/api/grpc/construction-operations-frames)
