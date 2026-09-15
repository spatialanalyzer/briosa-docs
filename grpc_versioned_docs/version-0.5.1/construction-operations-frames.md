---
title: Construction Operations / Frames
description: Released gRPC contracts for selected frame-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Frames

All RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and are never automatically replayed.
Optional values map to the exact MP defaults described below.

## Shared Choice Types

```proto
enum FrameConstructionMethod {
  FRAME_CONSTRUCTION_METHOD_UNSPECIFIED = 0;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_X_XY = 1;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_X_XZ = 2;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_Y_YX = 3;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_Y_YZ = 4;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_Z_ZX = 5;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_X_ZY = 6;
}

enum AxisIdentifier {
  AXIS_IDENTIFIER_UNSPECIFIED = 0;
  AXIS_IDENTIFIER_POSITIVE_X = 1;
  AXIS_IDENTIFIER_NEGATIVE_X = 2;
  AXIS_IDENTIFIER_POSITIVE_Y = 3;
  AXIS_IDENTIFIER_NEGATIVE_Y = 4;
  AXIS_IDENTIFIER_POSITIVE_Z = 5;
  AXIS_IDENTIFIER_NEGATIVE_Z = 6;
}

enum FrameAxis {
  FRAME_AXIS_UNSPECIFIED = 0;
  FRAME_AXIS_X = 1;
  FRAME_AXIS_Y = 2;
  FRAME_AXIS_Z = 3;
}
```

These enums reproduce the exact MP choice domains; they are not additional
geometry validation.

## RPC Index

| MP Command | RPC | Operation ID | Validation |
| --- | --- | --- | --- |
| Construct Frame with Wizard | `ConstructFrameWithWizard` | `construction_operations.construct_frame_with_wizard` | At Risk - interactive fixture |
| Construct Frame | `ConstructFrame` | `construction_operations.construct_frame` | At Risk - fixture |
| Construct Frame From Transform In World | `ConstructFrameFromTransformInWorld` | `construction_operations.construct_frame_from_transform_in_world` | At Risk - fixture |
| Construct Frame on Instrument Base | `ConstructFrameOnInstrumentBase` | `construction_operations.construct_frame_on_instrument_base` | At Risk - instrument fixture |
| Construct Frame on Object | `ConstructFrameOnObject` | `construction_operations.construct_frame_on_object` | At Risk - fixture |
| Construct Frame, 3 Points | `ConstructFrameThreePoints` | `construction_operations.construct_frame_three_points` | At Risk - fixture |
| Construct Frame, at Point, with working Z, and clocked axis | `ConstructFrameAtPointWithWorkingZAndClockedAxis` | `construction_operations.construct_frame_at_point_with_working_z_and_clocked_axis` | At Risk - fixture |
| Construct Frame, Pick origin and point on X axis - clock Z along working Z | `ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZ` | `construction_operations.construct_frame_pick_origin_and_point_on_x_axis_clock_z_along_working_z` | At Risk - fixture |
| Construct Frame, Known Origin, Object Direction, Object Direction | `ConstructFrameKnownOriginObjectDirectionObjectDirection` | `construction_operations.construct_frame_known_origin_object_direction_object_direction` | At Risk - fixture |
| Construct Frame, 3 Planes | `ConstructFrameThreePlanes` | `construction_operations.construct_frame_three_planes` | At Risk - fixture |
| Construct Frame - Copy And Make Left Handed | `ConstructFrameCopyAndMakeLeftHanded` | `construction_operations.construct_frame_copy_and_make_left_handed` | At Risk - fixture |
| Construct Frame - Average of Other Object Frames | `ConstructFrameAverageOfOtherObjectFrames` | `construction_operations.construct_frame_average_of_other_object_frames` | At Risk - fixture |
| Construct Frame at Robot Link | `ConstructFrameAtRobotLink` | `construction_operations.construct_frame_at_robot_link` | At Risk - robot fixture |
| Construct Frame From Point Measurement Probing Frames | `ConstructFrameFromPointMeasurementProbingFrames` | `construction_operations.construct_frame_from_point_measurement_probing_frames` | At Risk - probing-data fixture |
| Construct Mirror Cube Frame | `ConstructMirrorCubeFrame` | `construction_operations.construct_mirror_cube_frame` | At Risk - mirror-measurement fixture |
| Construct Frames By Projecting Frames On Mesh Along Frame Direction | `ConstructFramesByProjectingFramesOnMeshAlongFrameDirection` | `construction_operations.construct_frames_by_projecting_frames_on_mesh_along_frame_direction` | At Risk - mesh fixture |
| Construct Frames By Projecting Frames On Mesh Along Reference Direction | `ConstructFramesByProjectingFramesOnMeshAlongReferenceDirection` | `construction_operations.construct_frames_by_projecting_frames_on_mesh_along_reference_direction` | At Risk - mesh fixture |
| Add Surface To Mesh Offset Along Reference Direction | `AddSurfaceToMeshOffsetAlongReferenceDirection` | `construction_operations.add_surface_to_mesh_offset_along_reference_direction` | At Risk - mesh and surface fixture |

Each route is `/briosa.ConstructionOperations/<RPC>`.

## Construct Frame with Wizard

```proto
message ConstructFrameWithWizardRequest {
  optional CollectionObjectName new_frame_name = 1;
  optional bool wait_for_completion = 2;
}
message ConstructFrameWithWizardResult { MpExecutionDetails execution = 1000; }
```

`new_frame_name` is required. Omitted `wait_for_completion` maps to `true`.
This is an operator-interactive operation.

## Construct Frame

```proto
message ConstructFrameRequest {
  optional CollectionObjectName new_frame_name = 1;
  optional Transform transform_in_working_coordinates = 2;
}
message ConstructFrameResult { MpExecutionDetails execution = 1000; }
```

The frame name is required; an omitted transform maps to identity.

## Construct Frame From Transform In World

```proto
message ConstructFrameFromTransformInWorldRequest {
  optional CollectionObjectName new_frame_name = 1;
  optional Transform transform_in_world_coordinates = 2;
}
message ConstructFrameFromTransformInWorldResult { MpExecutionDetails execution = 1000; }
```

The frame name is required; an omitted transform maps to identity.

## Construct Frame on Instrument Base

```proto
message ConstructFrameOnInstrumentBaseRequest {
  optional CollectionInstrumentId instrument_id = 1;
  optional string frame_name = 2;
}
message ConstructFrameOnInstrumentBaseResult { MpExecutionDetails execution = 1000; }
```

`instrument_id` is required. Omitted `frame_name` leaves the exact optional MP
argument unset.

## Construct Frame on Object

```proto
message ConstructFrameOnObjectRequest {
  optional CollectionObjectName reference_object = 1;
  optional CollectionObjectName frame_name = 2;
}
message ConstructFrameOnObjectResult { MpExecutionDetails execution = 1000; }
```

`reference_object` is required; `frame_name` is optional.

## Construct Frame, 3 Points

```proto
message ConstructFrameThreePointsRequest {
  optional FrameConstructionMethod construction_method = 1;
  optional PointName origin_point = 2;
  optional PointName primary_axis_point = 3;
  optional PointName secondary_axis_point = 4;
  optional string frame_name = 5;
}
message ConstructFrameThreePointsResult { MpExecutionDetails execution = 1000; }
```

The choice and all three points are required; `frame_name` is optional.

## Construct Frame, at Point, with working Z, and clocked axis

```proto
message ConstructFrameAtPointWithWorkingZAndClockedAxisRequest {
  optional PointName origin_point = 1;
  optional AxisIdentifier clocked_axis = 2;
  optional PointName clocking_point = 3;
  optional string frame_name = 4;
}
message ConstructFrameAtPointWithWorkingZAndClockedAxisResult {
  MpExecutionDetails execution = 1000;
}
```

The first three fields are required; `frame_name` is optional.

## Construct Frame, Pick origin and point on X axis - clock Z along working Z

```proto
message ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZRequest {
  optional PointName origin_point = 1;
  optional PointName point_on_x_axis = 2;
  optional string frame_name = 3;
}
message ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZResult {
  MpExecutionDetails execution = 1000;
}
```

Both points are required; `frame_name` is optional.

## Construct Frame, Known Origin, Object Direction, Object Direction

```proto
message ConstructFrameKnownOriginObjectDirectionObjectDirectionRequest {
  optional PointName known_point = 1;
  optional Vector known_point_value_in_new_frame = 2;
  optional CollectionObjectName primary_axis_object = 3;
  optional AxisIdentifier primary_axis_defines_which_axis = 4;
  optional CollectionObjectName secondary_axis_object = 5;
  optional AxisIdentifier secondary_axis_defines_which_axis = 6;
  optional CollectionObjectName frame_name = 7;
}
message ConstructFrameKnownOriginObjectDirectionObjectDirectionResult {
  MpExecutionDetails execution = 1000;
}
```

All fields except `frame_name` are required.

## Construct Frame, 3 Planes

```proto
message ConstructFrameThreePlanesRequest {
  optional CollectionObjectName x_plane = 1;
  optional double x_value_on_plane = 2;
  optional CollectionObjectName y_plane = 3;
  optional double y_value_on_plane = 4;
  optional CollectionObjectName z_plane = 5;
  optional double z_value_on_plane = 6;
  optional CollectionObjectName frame_name = 7;
}
message ConstructFrameThreePlanesResult { MpExecutionDetails execution = 1000; }
```

The three plane/value pairs are required; `frame_name` is optional. The worker
maps fields 2 and 4 to the exact `PLane` argument spelling.

## Construct Frame - Copy And Make Left Handed

```proto
message ConstructFrameCopyAndMakeLeftHandedRequest {
  optional CollectionObjectName reference_frame = 1;
  optional CollectionObjectName frame_name = 2;
  optional FrameAxis axis_to_reverse = 3;
}
message ConstructFrameCopyAndMakeLeftHandedResult { MpExecutionDetails execution = 1000; }
```

The reference frame and non-unspecified axis are required; the result name is
optional.

## Construct Frame - Average of Other Object Frames

```proto
message ConstructFrameAverageOfOtherObjectFramesRequest {
  repeated CollectionObjectName objects = 1;
  optional CollectionObjectName frame_name = 2;
}
message ConstructFrameAverageOfOtherObjectFramesResult {
  MpExecutionDetails execution = 1000;
}
```

The object-list field is part of the required input contract, but Briosa does
not impose a minimum list size. `frame_name` is optional.

## Construct Frame at Robot Link

```proto
message ConstructFrameAtRobotLinkRequest {
  optional CollectionMachineId machine_id = 1;
  optional string link_name = 2;
  optional CollectionObjectName resulting_frame = 3;
}
message ConstructFrameAtRobotLinkResult { MpExecutionDetails execution = 1000; }
```

All three fields are required and passed through to the exact MP setters.

## Construct Frame From Point Measurement Probing Frames

```proto
message ConstructFrameFromPointMeasurementProbingFramesRequest {
  repeated PointName point_list = 1;
  optional bool show_frame = 2;
}
message ConstructFrameFromPointMeasurementProbingFramesResult {
  MpExecutionDetails execution = 1000;
}
```

The point-list input is required; omitted `show_frame` maps to `false`.

## Construct Mirror Cube Frame

```proto
message ConstructMirrorCubeFrameRequest {
  optional CollectionObjectName mirror_cube_frame_name = 1;
  optional PointName point_name = 2;
  optional bool use_current_measurements_marked_as_mirror_shots = 3;
  optional double nominal_cube_face_angle = 4;
}
message ConstructMirrorCubeFrameResult {
  optional double total_angular_error = 1;
  MpExecutionDetails execution = 1000;
}
```

The names are required. Omitted values map to `true` and 90. The angular-error
result is required after successful execution.

## Construct Frames By Projecting Frames On Mesh Along Frame Direction

```proto
message ConstructFramesByProjectingFramesOnMeshAlongFrameDirectionRequest {
  repeated CollectionObjectName reference_frame_names = 1;
  optional CollectionObjectName base_name_for_projected_frames = 2;
  optional bool bi_directional_projection = 3;
  optional CollectionObjectName mesh_serving_as_projection_target = 4;
}
message ConstructFramesByProjectingFramesOnMeshAlongFrameDirectionResult {
  repeated CollectionObjectName resultant_frame_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

All inputs except the Boolean default are required. Omitted
`bi_directional_projection` maps to `true`.

## Construct Frames By Projecting Frames On Mesh Along Reference Direction

```proto
message ConstructFramesByProjectingFramesOnMeshAlongReferenceDirectionRequest {
  repeated CollectionObjectName reference_frame_names = 1;
  optional CollectionObjectName base_name_for_projected_frames = 2;
  optional CollectionObjectName object_providing_direction_reference = 3;
  optional bool bi_directional_projection = 4;
  optional CollectionObjectName mesh_serving_as_projection_target = 5;
}
message ConstructFramesByProjectingFramesOnMeshAlongReferenceDirectionResult {
  repeated CollectionObjectName resultant_frame_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

All inputs except the Boolean default are required. Omitted
`bi_directional_projection` maps to `true`.

## Add Surface To Mesh Offset Along Reference Direction

```proto
message AddSurfaceToMeshOffsetAlongReferenceDirectionRequest {
  repeated CollectionObjectName reference_frame_names = 1;
  optional CollectionObjectName surface_for_offset_distance_computation = 2;
  optional double surface_offset_range = 3;
  optional string collection_for_result_frames = 4;
  optional CollectionObjectName object_providing_direction_reference = 5;
  optional bool bi_directional_projection = 6;
  optional CollectionObjectName mesh_serving_as_projection_target = 7;
}
message AddSurfaceToMeshOffsetAlongReferenceDirectionResult {
  MpExecutionDetails execution = 1000;
}
```

Omitted `surface_offset_range` and `bi_directional_projection` map to 10 and
`true`. All other inputs are required and passed through without value
validation.
