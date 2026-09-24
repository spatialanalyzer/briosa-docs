---
title: Construction Operations / Frames
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Frames

[SA 2026.1.0529.7](/api/grpc/construction-operations-frames) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-frames)

This reference covers **SA 2024.1.0508.5**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Frame with Wizard {/* #construct-frame-with-wizard */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-with-wizard)

`/briosa.ConstructionOperations/ConstructFrameWithWizard` · Operation ID: `construction_operations.construct_frame_with_wizard`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_frame_name` | `optional CollectionObjectName` | New Frame Name | Required |
| Request | 2 | `wait_for_completion` | `optional bool` | Wait for Completion | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameWithWizard(ConstructFrameWithWizardRequest) returns (ConstructFrameWithWizardResult);

message ConstructFrameWithWizardRequest {
  optional CollectionObjectName new_frame_name = 1;
  optional bool wait_for_completion = 2;
}

message ConstructFrameWithWizardResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Frame {/* #construct-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame)

`/briosa.ConstructionOperations/ConstructFrame` · Operation ID: `construction_operations.construct_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_frame_name` | `optional CollectionObjectName` | New Frame Name | Required |
| Request | 2 | `transform_in_working_coordinates` | `optional Transform` | Transform in Working Coordinates | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrame(ConstructFrameRequest) returns (ConstructFrameResult);

message ConstructFrameRequest {
  optional CollectionObjectName new_frame_name = 1;
  optional Transform transform_in_working_coordinates = 2;
}

message ConstructFrameResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Frame From Transform In World {/* #construct-frame-from-transform-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-from-transform-in-world)

`/briosa.ConstructionOperations/ConstructFrameFromTransformInWorld` · Operation ID: `construction_operations.construct_frame_from_transform_in_world`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_frame_name` | `optional CollectionObjectName` | New Frame Name | Required |
| Request | 2 | `transform_in_world_coordinates` | `optional Transform` | Transform in World Coordinates | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameFromTransformInWorld(ConstructFrameFromTransformInWorldRequest) returns (ConstructFrameFromTransformInWorldResult);

message ConstructFrameFromTransformInWorldRequest {
  optional CollectionObjectName new_frame_name = 1;
  optional Transform transform_in_world_coordinates = 2;
}

message ConstructFrameFromTransformInWorldResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Frame on Instrument Base {/* #construct-frame-on-instrument-base */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-on-instrument-base)

`/briosa.ConstructionOperations/ConstructFrameOnInstrumentBase` · Operation ID: `construction_operations.construct_frame_on_instrument_base`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_id` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `frame_name` | `optional string` | Frame Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameOnInstrumentBase(ConstructFrameOnInstrumentBaseRequest) returns (ConstructFrameOnInstrumentBaseResult);

message ConstructFrameOnInstrumentBaseRequest {
  optional CollectionInstrumentId instrument_id = 1;
  optional string frame_name = 2;
}

message ConstructFrameOnInstrumentBaseResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Frame on Object {/* #construct-frame-on-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-on-object)

`/briosa.ConstructionOperations/ConstructFrameOnObject` · Operation ID: `construction_operations.construct_frame_on_object`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_object` | `optional CollectionObjectName` | Reference Object | Required |
| Request | 2 | `frame_name` | `optional CollectionObjectName` | Frame Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameOnObject(ConstructFrameOnObjectRequest) returns (ConstructFrameOnObjectResult);

message ConstructFrameOnObjectRequest {
  optional CollectionObjectName reference_object = 1;
  optional CollectionObjectName frame_name = 2;
}

message ConstructFrameOnObjectResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Frame, 3 Points {/* #construct-frame-3-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-3-points)

`/briosa.ConstructionOperations/ConstructFrameThreePoints` · Operation ID: `construction_operations.construct_frame_three_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `construction_method` | `optional FrameConstructionMethod` | Construction Method | Required |
| Request | 2 | `origin_point` | `optional PointName` | Origin Point | Required |
| Request | 3 | `primary_axis_point` | `optional PointName` | Primary Axis Point | Required |
| Request | 4 | `secondary_axis_point` | `optional PointName` | Secondary Axis Point | Required |
| Request | 5 | `frame_name` | `optional string` | Frame Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameThreePoints(ConstructFrameThreePointsRequest) returns (ConstructFrameThreePointsResult);

message ConstructFrameThreePointsRequest {
  optional FrameConstructionMethod construction_method = 1;
  optional PointName origin_point = 2;
  optional PointName primary_axis_point = 3;
  optional PointName secondary_axis_point = 4;
  optional string frame_name = 5;
}

message ConstructFrameThreePointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Frame, at Point, with working Z, and clocked axis {/* #construct-frame-at-point-with-working-z-and-clocked-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-at-point-with-working-z-and-clocked-axis)

`/briosa.ConstructionOperations/ConstructFrameAtPointWithWorkingZAndClockedAxis` · Operation ID: `construction_operations.construct_frame_at_point_with_working_z_and_clocked_axis`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `origin_point` | `optional PointName` | Origin Point | Required |
| Request | 2 | `clocked_axis` | `optional AxisIdentifier` | Clocked axis | Required |
| Request | 3 | `clocking_point` | `optional PointName` | Clocking Point | Required |
| Request | 4 | `frame_name` | `optional string` | Frame Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameAtPointWithWorkingZAndClockedAxis(ConstructFrameAtPointWithWorkingZAndClockedAxisRequest) returns (ConstructFrameAtPointWithWorkingZAndClockedAxisResult);

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

## Construct Frame, Pick origin and point on X axis - clock Z along working Z {/* #construct-frame-pick-origin-and-point-on-x-axis---clock-z-along-working-z */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-pick-origin-and-point-on-x-axis---clock-z-along-working-z)

`/briosa.ConstructionOperations/ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZ` · Operation ID: `construction_operations.construct_frame_pick_origin_and_point_on_x_axis_clock_z_along_working_z`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `origin_point` | `optional PointName` | Origin Point | Required |
| Request | 2 | `point_on_x_axis` | `optional PointName` | Point on X-Axis | Required |
| Request | 3 | `frame_name` | `optional string` | Frame Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZ(ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZRequest) returns (ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZResult);

message ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZRequest {
  optional PointName origin_point = 1;
  optional PointName point_on_x_axis = 2;
  optional string frame_name = 3;
}

message ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Frame, Known Origin, Object Direction, Object Direction {/* #construct-frame-known-origin-object-direction-object-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-known-origin-object-direction-object-direction)

`/briosa.ConstructionOperations/ConstructFrameKnownOriginObjectDirectionObjectDirection` · Operation ID: `construction_operations.construct_frame_known_origin_object_direction_object_direction`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `known_point` | `optional PointName` | Known Point | Required |
| Request | 2 | `known_point_value_in_new_frame` | `optional Vector` | Known Point Value in New Frame | Required |
| Request | 3 | `primary_axis_object` | `optional CollectionObjectName` | Primary Axis Object | Required |
| Request | 4 | `primary_axis_defines_which_axis` | `optional AxisIdentifier` | Primary Axis Defines Which Axis | Required |
| Request | 5 | `secondary_axis_object` | `optional CollectionObjectName` | Secondary Axis Object | Required |
| Request | 6 | `secondary_axis_defines_which_axis` | `optional AxisIdentifier` | Secondary Axis Defines Which Axis | Required |
| Request | 7 | `frame_name` | `optional CollectionObjectName` | Frame Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameKnownOriginObjectDirectionObjectDirection(ConstructFrameKnownOriginObjectDirectionObjectDirectionRequest) returns (ConstructFrameKnownOriginObjectDirectionObjectDirectionResult);

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

## Construct Frame, 3 Planes {/* #construct-frame-3-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-3-planes)

`/briosa.ConstructionOperations/ConstructFrameThreePlanes` · Operation ID: `construction_operations.construct_frame_three_planes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `x_plane` | `optional CollectionObjectName` | X Plane | Required |
| Request | 2 | `x_value_on_plane` | `optional double` | X Value on PLane | 0.000000 |
| Request | 3 | `y_plane` | `optional CollectionObjectName` | Y Plane | Required |
| Request | 4 | `y_value_on_plane` | `optional double` | Y Value on PLane | 0.000000 |
| Request | 5 | `z_plane` | `optional CollectionObjectName` | Z Plane | Required |
| Request | 6 | `z_value_on_plane` | `optional double` | Z Value on Plane | 0.000000 |
| Request | 7 | `frame_name` | `optional CollectionObjectName` | Frame Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameThreePlanes(ConstructFrameThreePlanesRequest) returns (ConstructFrameThreePlanesResult);

message ConstructFrameThreePlanesRequest {
  optional CollectionObjectName x_plane = 1;
  optional double x_value_on_plane = 2;
  optional CollectionObjectName y_plane = 3;
  optional double y_value_on_plane = 4;
  optional CollectionObjectName z_plane = 5;
  optional double z_value_on_plane = 6;
  optional CollectionObjectName frame_name = 7;
}

message ConstructFrameThreePlanesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Frame - Copy And Make Left Handed {/* #construct-frame---copy-and-make-left-handed */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame---copy-and-make-left-handed)

`/briosa.ConstructionOperations/ConstructFrameCopyAndMakeLeftHanded` · Operation ID: `construction_operations.construct_frame_copy_and_make_left_handed`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_frame` | `optional CollectionObjectName` | Reference Frame | Required |
| Request | 2 | `frame_name` | `optional CollectionObjectName` | Frame Name (Optional) | Omitted |
| Request | 3 | `axis_to_reverse` | `optional FrameAxis` | Axis to reverse | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameCopyAndMakeLeftHanded(ConstructFrameCopyAndMakeLeftHandedRequest) returns (ConstructFrameCopyAndMakeLeftHandedResult);

message ConstructFrameCopyAndMakeLeftHandedRequest {
  optional CollectionObjectName reference_frame = 1;
  optional CollectionObjectName frame_name = 2;
  optional FrameAxis axis_to_reverse = 3;
}

message ConstructFrameCopyAndMakeLeftHandedResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Frame - Average of Other Object Frames {/* #construct-frame---average-of-other-object-frames */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame---average-of-other-object-frames)

`/briosa.ConstructionOperations/ConstructFrameAverageOfOtherObjectFrames` · Operation ID: `construction_operations.construct_frame_average_of_other_object_frames`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Request | 2 | `frame_name` | `optional CollectionObjectName` | Frame Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameAverageOfOtherObjectFrames(ConstructFrameAverageOfOtherObjectFramesRequest) returns (ConstructFrameAverageOfOtherObjectFramesResult);

message ConstructFrameAverageOfOtherObjectFramesRequest {
  repeated CollectionObjectName objects = 1;
  optional CollectionObjectName frame_name = 2;
}

message ConstructFrameAverageOfOtherObjectFramesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Frame at Robot Link {/* #construct-frame-at-robot-link */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-at-robot-link)

`/briosa.ConstructionOperations/ConstructFrameAtRobotLink` · Operation ID: `construction_operations.construct_frame_at_robot_link`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `machine_id` | `optional CollectionMachineId` | Machine ID | Required |
| Request | 2 | `link_name` | `optional string` | Link Name | Empty |
| Request | 3 | `resulting_frame` | `optional CollectionObjectName` | Resulting Frame | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameAtRobotLink(ConstructFrameAtRobotLinkRequest) returns (ConstructFrameAtRobotLinkResult);

message ConstructFrameAtRobotLinkRequest {
  optional CollectionMachineId machine_id = 1;
  optional string link_name = 2;
  optional CollectionObjectName resulting_frame = 3;
}

message ConstructFrameAtRobotLinkResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Frame From Point Measurement Probing Frames {/* #construct-frame-from-point-measurement-probing-frames */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-from-point-measurement-probing-frames)

`/briosa.ConstructionOperations/ConstructFrameFromPointMeasurementProbingFrames` · Operation ID: `construction_operations.construct_frame_from_point_measurement_probing_frames`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_list` | `repeated PointName` | Point List | Required |
| Request | 2 | `show_frame` | `optional bool` | Show Frame? (Hide = FALSE) | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFrameFromPointMeasurementProbingFrames(ConstructFrameFromPointMeasurementProbingFramesRequest) returns (ConstructFrameFromPointMeasurementProbingFramesResult);

message ConstructFrameFromPointMeasurementProbingFramesRequest {
  repeated PointName point_list = 1;
  optional bool show_frame = 2;
}

message ConstructFrameFromPointMeasurementProbingFramesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Mirror Cube Frame {/* #construct-mirror-cube-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-mirror-cube-frame)

`/briosa.ConstructionOperations/ConstructMirrorCubeFrame` · Operation ID: `construction_operations.construct_mirror_cube_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `mirror_cube_frame_name` | `optional CollectionObjectName` | Mirror Cube Frame Name | Required |
| Request | 2 | `point_name` | `optional PointName` | Point Name | Required |
| Request | 3 | `use_current_measurements_marked_as_mirror_shots` | `optional bool` | Use Current Measurements Marked as Mirror Shots | true |
| Request | 4 | `nominal_cube_face_angle` | `optional double` | Nominal Cube Face Angle | 90.000000 |
| Result | 1 | `total_angular_error` | `optional double` | Total Angular Error | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructMirrorCubeFrame(ConstructMirrorCubeFrameRequest) returns (ConstructMirrorCubeFrameResult);

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

## Construct Frames By Projecting Frames On Mesh Along Frame Direction {/* #construct-frames-by-projecting-frames-on-mesh-along-frame-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-frame-direction)

`/briosa.ConstructionOperations/ConstructFramesByProjectingFramesOnMeshAlongFrameDirection` · Operation ID: `construction_operations.construct_frames_by_projecting_frames_on_mesh_along_frame_direction`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_frame_names` | `repeated CollectionObjectName` | Reference Frame Names | Required |
| Request | 2 | `base_name_for_projected_frames` | `optional CollectionObjectName` | Base Name For Projected Frames | Required |
| Request | 3 | `bi_directional_projection` | `optional bool` | Bi-directional projection? | true |
| Request | 4 | `mesh_serving_as_projection_target` | `optional CollectionObjectName` | Mesh Serving As Projection Target | Required |
| Result | 1 | `resultant_frame_name_list` | `repeated CollectionObjectName` | Resultant Frame Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFramesByProjectingFramesOnMeshAlongFrameDirection(ConstructFramesByProjectingFramesOnMeshAlongFrameDirectionRequest) returns (ConstructFramesByProjectingFramesOnMeshAlongFrameDirectionResult);

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

## Construct Frames By Projecting Frames On Mesh Along Reference Direction {/* #construct-frames-by-projecting-frames-on-mesh-along-reference-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-reference-direction)

`/briosa.ConstructionOperations/ConstructFramesByProjectingFramesOnMeshAlongReferenceDirection` · Operation ID: `construction_operations.construct_frames_by_projecting_frames_on_mesh_along_reference_direction`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_frame_names` | `repeated CollectionObjectName` | Reference Frame Names | Required |
| Request | 2 | `base_name_for_projected_frames` | `optional CollectionObjectName` | Base Name For Projected Frames | Required |
| Request | 3 | `object_providing_direction_reference` | `optional CollectionObjectName` | Object Providing Direction Reference | Required |
| Request | 4 | `bi_directional_projection` | `optional bool` | Bi-directional projection? | true |
| Request | 5 | `mesh_serving_as_projection_target` | `optional CollectionObjectName` | Mesh Serving As Projection Target | Required |
| Result | 1 | `resultant_frame_name_list` | `repeated CollectionObjectName` | Resultant Frame Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFramesByProjectingFramesOnMeshAlongReferenceDirection(ConstructFramesByProjectingFramesOnMeshAlongReferenceDirectionRequest) returns (ConstructFramesByProjectingFramesOnMeshAlongReferenceDirectionResult);

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

## Add Surface To Mesh Offset Along Reference Direction {/* #add-surface-to-mesh-offset-along-reference-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#add-surface-to-mesh-offset-along-reference-direction)

`/briosa.ConstructionOperations/AddSurfaceToMeshOffsetAlongReferenceDirection` · Operation ID: `construction_operations.add_surface_to_mesh_offset_along_reference_direction`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_frame_names` | `repeated CollectionObjectName` | Reference Frame Names | Required |
| Request | 2 | `surface_for_offset_distance_computation` | `optional CollectionObjectName` | Surface for Offset Distance Computation | Required |
| Request | 3 | `surface_offset_range` | `optional double` | Surface Offset Range | 10.000000 |
| Request | 4 | `collection_for_result_frames` | `optional string` | Collection for Result Frames | Empty |
| Request | 5 | `object_providing_direction_reference` | `optional CollectionObjectName` | Object Providing Direction Reference | Required |
| Request | 6 | `bi_directional_projection` | `optional bool` | Bi-directional projection? | true |
| Request | 7 | `mesh_serving_as_projection_target` | `optional CollectionObjectName` | Mesh Serving As Projection Target | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddSurfaceToMeshOffsetAlongReferenceDirection(AddSurfaceToMeshOffsetAlongReferenceDirectionRequest) returns (AddSurfaceToMeshOffsetAlongReferenceDirectionResult);

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

## Shared Choice Types {/* #shared-choice-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2024.1.0508.5)
