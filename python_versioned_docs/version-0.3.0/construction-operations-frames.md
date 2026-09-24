---
title: Construction Operations / Frames
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Frames

[SA 2026.1.0529.7](/api/python/construction-operations-frames) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-frames)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Frame with Wizard {/* #construct-frame-with-wizard */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-with-wizard) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-with-wizard)

```python
async def construct_frame_with_wizard(
        self,
        new_frame_name: CollectionObjectName,
        *,
        wait_for_completion: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame {/* #construct-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame)

```python
async def construct_frame(
        self,
        new_frame_name: CollectionObjectName,
        *,
        transform_in_working_coordinates: Transform | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame From Transform In World {/* #construct-frame-from-transform-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-from-transform-in-world) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-from-transform-in-world)

```python
async def construct_frame_from_transform_in_world(
        self,
        new_frame_name: CollectionObjectName,
        *,
        transform_in_world_coordinates: Transform | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame on Instrument Base {/* #construct-frame-on-instrument-base */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-on-instrument-base) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-on-instrument-base)

```python
async def construct_frame_on_instrument_base(
        self,
        instrument_id: CollectionInstrumentId,
        *,
        frame_name: str | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame on Object {/* #construct-frame-on-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-on-object) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-on-object)

```python
async def construct_frame_on_object(
        self,
        reference_object: CollectionObjectName,
        *,
        frame_name: CollectionObjectName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, 3 Points {/* #construct-frame-3-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-3-points) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-3-points)

```python
async def construct_frame_three_points(
        self,
        construction_method: FrameConstructionMethod,
        origin_point: PointName,
        primary_axis_point: PointName,
        secondary_axis_point: PointName,
        *,
        frame_name: str | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, at Point, with working Z, and clocked axis {/* #construct-frame-at-point-with-working-z-and-clocked-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-at-point-with-working-z-and-clocked-axis) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-at-point-with-working-z-and-clocked-axis)

```python
async def construct_frame_at_point_with_working_z_and_clocked_axis(
        self,
        origin_point: PointName,
        clocked_axis: AxisIdentifier,
        clocking_point: PointName,
        *,
        frame_name: str | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, Pick origin and point on X axis - clock Z along working Z {/* #construct-frame-pick-origin-and-point-on-x-axis---clock-z-along-working-z */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-pick-origin-and-point-on-x-axis---clock-z-along-working-z) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-pick-origin-and-point-on-x-axis---clock-z-along-working-z)

```python
async def construct_frame_pick_origin_and_point_on_x_axis_clock_z_along_working_z(
        self,
        origin_point: PointName,
        point_on_x_axis: PointName,
        *,
        frame_name: str | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, Known Origin, Object Direction, Object Direction {/* #construct-frame-known-origin-object-direction-object-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-known-origin-object-direction-object-direction) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-known-origin-object-direction-object-direction)

```python
async def construct_frame_known_origin_object_direction_object_direction(
        self,
        known_point: PointName,
        known_point_value_in_new_frame: Vector,
        primary_axis_object: CollectionObjectName,
        primary_axis_defines_which_axis: AxisIdentifier,
        secondary_axis_object: CollectionObjectName,
        secondary_axis_defines_which_axis: AxisIdentifier,
        *,
        frame_name: CollectionObjectName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, 3 Planes {/* #construct-frame-3-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-3-planes) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-3-planes)

```python
async def construct_frame_three_planes(
        self,
        x_plane: CollectionObjectName,
        x_value_on_plane: float,
        y_plane: CollectionObjectName,
        y_value_on_plane: float,
        z_plane: CollectionObjectName,
        z_value_on_plane: float,
        *,
        frame_name: CollectionObjectName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame - Copy And Make Left Handed {/* #construct-frame---copy-and-make-left-handed */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame---copy-and-make-left-handed) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame---copy-and-make-left-handed)

```python
async def construct_frame_copy_and_make_left_handed(
        self,
        reference_frame: CollectionObjectName,
        axis_to_reverse: FrameAxis,
        *,
        frame_name: CollectionObjectName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame - Average of Other Object Frames {/* #construct-frame---average-of-other-object-frames */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame---average-of-other-object-frames) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame---average-of-other-object-frames)

```python
async def construct_frame_average_of_other_object_frames(
        self,
        objects: Iterable[CollectionObjectName],
        *,
        frame_name: CollectionObjectName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame at Robot Link {/* #construct-frame-at-robot-link */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-at-robot-link) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-at-robot-link)

```python
async def construct_frame_at_robot_link(
        self,
        machine_id: CollectionMachineId,
        link_name: str,
        resulting_frame: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame From Point Measurement Probing Frames {/* #construct-frame-from-point-measurement-probing-frames */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-from-point-measurement-probing-frames) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-from-point-measurement-probing-frames)

```python
async def construct_frame_from_point_measurement_probing_frames(
        self,
        point_list: Iterable[PointName],
        *,
        show_frame: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Mirror Cube Frame {/* #construct-mirror-cube-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-mirror-cube-frame) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-mirror-cube-frame)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frames By Projecting Frames On Mesh Along Frame Direction {/* #construct-frames-by-projecting-frames-on-mesh-along-frame-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-frame-direction) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-frame-direction)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frames By Projecting Frames On Mesh Along Reference Direction {/* #construct-frames-by-projecting-frames-on-mesh-along-reference-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-reference-direction) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-reference-direction)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Surface To Mesh Offset Along Reference Direction {/* #add-surface-to-mesh-offset-along-reference-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#add-surface-to-mesh-offset-along-reference-direction) · [gRPC Contract](/api/grpc/construction-operations-frames#add-surface-to-mesh-offset-along-reference-direction)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Choice Types {/* #shared-choice-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2026.1.0529.7)
