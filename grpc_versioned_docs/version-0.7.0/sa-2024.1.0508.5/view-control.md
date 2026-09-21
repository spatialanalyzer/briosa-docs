---
title: View Control
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# View Control

[SA 2026.1.0529.7](/api/grpc/view-control) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/view-control)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Auto-Scale {/* #auto-scale */}

[MP Catalog](/mp-command-catalog/commands/view-control#auto-scale)

`/briosa.ViewControl/AutoScale` · Operation ID: `view_control.auto_scale`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoScale(AutoScaleRequest) returns (AutoScaleResult);

message AutoScaleRequest {
  // No MP inputs.
}

message AutoScaleResult {
  MpExecutionDetails execution = 1000;
}
```

## Center Graphics About Object(s) {/* #center-graphics-about-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#center-graphics-about-objects)

`/briosa.ViewControl/CenterGraphicsAboutObjects` · Operation ID: `view_control.center_graphics_about_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_type` | `optional ObjectType` | Object Type | Any |
| Request | 2 | `collection_wildcard_criteria` | `optional string` | Collection Wildcard Criteria | * |
| Request | 3 | `object_wildcard_criteria` | `optional string` | Object Wildcard Criteria | * |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CenterGraphicsAboutObjects(CenterGraphicsAboutObjectsRequest) returns (CenterGraphicsAboutObjectsResult);

message CenterGraphicsAboutObjectsRequest {
  optional ObjectType object_type = 1;
  optional string collection_wildcard_criteria = 2;
  optional string object_wildcard_criteria = 3;
}

message CenterGraphicsAboutObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

## Center Graphics About Point {/* #center-graphics-about-point */}

[MP Catalog](/mp-command-catalog/commands/view-control#center-graphics-about-point)

`/briosa.ViewControl/CenterGraphicsAboutPoint` · Operation ID: `view_control.center_graphics_about_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CenterGraphicsAboutPoint(CenterGraphicsAboutPointRequest) returns (CenterGraphicsAboutPointResult);

message CenterGraphicsAboutPointRequest {
  optional PointName point_name = 1;
}

message CenterGraphicsAboutPointResult {
  MpExecutionDetails execution = 1000;
}
```

## Define point of view {/* #define-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#define-point-of-view)

`/briosa.ViewControl/DefinePointOfView` · Operation ID: `view_control.define_point_of_view`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `view_name` | `optional ViewName` | View Name | Required |
| Request | 2 | `rotation_x` | `optional double` | Rotation (x) | 0.000000 |
| Request | 3 | `rotation_y` | `optional double` | Rotation (y) | 0.000000 |
| Request | 4 | `rotation_z` | `optional double` | Rotation (z) | 0.000000 |
| Request | 5 | `restore_zoom_settings` | `optional bool` | Restore Zoom Settings? | false |
| Request | 6 | `scale_factor` | `optional double` | Scale Factor | 1.000000 |
| Request | 7 | `origin_x` | `optional double` | Origin (x) | 0.000000 |
| Request | 8 | `origin_y` | `optional double` | Origin (y) | 0.000000 |
| Request | 9 | `restore_render_mode` | `optional bool` | Restore Render Mode? | false |
| Request | 10 | `rendering_mode` | `optional RenderModeType` | Rendering Mode | Wireframe |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DefinePointOfView(DefinePointOfViewRequest) returns (DefinePointOfViewResult);

message DefinePointOfViewRequest {
  optional ViewName view_name = 1;
  optional double rotation_x = 2;
  optional double rotation_y = 3;
  optional double rotation_z = 4;
  optional bool restore_zoom_settings = 5;
  optional double scale_factor = 6;
  optional double origin_x = 7;
  optional double origin_y = 8;
  optional bool restore_render_mode = 9;
  optional RenderModeType rendering_mode = 10;
}

message DefinePointOfViewResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Active Clipping Planes {/* #get-active-clipping-planes */}

[MP Catalog](/mp-command-catalog/commands/view-control#get-active-clipping-planes)

`/briosa.ViewControl/GetActiveClippingPlanes` · Operation ID: `view_control.get_active_clipping_planes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `objects` | `repeated CollectionObjectName` | Objects | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetActiveClippingPlanes(GetActiveClippingPlanesRequest) returns (GetActiveClippingPlanesResult);

message GetActiveClippingPlanesRequest {
  // No MP inputs.
}

message GetActiveClippingPlanesResult {
  repeated CollectionObjectName objects = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get point of view parameters {/* #get-point-of-view-parameters */}

[MP Catalog](/mp-command-catalog/commands/view-control#get-point-of-view-parameters)

`/briosa.ViewControl/GetPointOfViewParameters` · Operation ID: `view_control.get_point_of_view_parameters`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `view_name` | `optional ViewName` | View Name | Required |
| Result | 1 | `rotation_x` | `optional double` | Rotation (x) | — |
| Result | 2 | `rotation_y` | `optional double` | Rotation (y) | — |
| Result | 3 | `rotation_z` | `optional double` | Rotation (z) | — |
| Result | 4 | `restore_zoom_settings` | `optional bool` | Restore Zoom Settings? | — |
| Result | 5 | `scale_factor` | `optional double` | Scale Factor | — |
| Result | 6 | `origin_x` | `optional double` | Origin (x) | — |
| Result | 7 | `origin_y` | `optional double` | Origin (y) | — |
| Result | 8 | `restore_render_mode` | `optional bool` | Restore Render Mode? | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetPointOfViewParameters(GetPointOfViewParametersRequest) returns (GetPointOfViewParametersResult);

message GetPointOfViewParametersRequest {
  optional ViewName view_name = 1;
}

message GetPointOfViewParametersResult {
  optional double rotation_x = 1;
  optional double rotation_y = 2;
  optional double rotation_z = 3;
  optional bool restore_zoom_settings = 4;
  optional double scale_factor = 5;
  optional double origin_x = 6;
  optional double origin_y = 7;
  optional bool restore_render_mode = 8;
  MpExecutionDetails execution = 1000;
}
```

## Hide All Callout Views {/* #hide-all-callout-views */}

[MP Catalog](/mp-command-catalog/commands/view-control#hide-all-callout-views)

`/briosa.ViewControl/HideAllCalloutViews` · Operation ID: `view_control.hide_all_callout_views`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc HideAllCalloutViews(HideAllCalloutViewsRequest) returns (HideAllCalloutViewsResult);

message HideAllCalloutViewsRequest {
  // No MP inputs.
}

message HideAllCalloutViewsResult {
  MpExecutionDetails execution = 1000;
}
```

## Hide Objects {/* #hide-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#hide-objects)

`/briosa.ViewControl/HideObjects` · Operation ID: `view_control.hide_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_hide` | `repeated CollectionObjectName` | Objects To Hide | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc HideObjects(HideObjectsRequest) returns (HideObjectsResult);

message HideObjectsRequest {
  repeated CollectionObjectName objects_to_hide = 1;
}

message HideObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

## Highlight Objects {/* #highlight-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-objects)

`/briosa.ViewControl/HighlightObjects` · Operation ID: `view_control.highlight_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_names_empty_to_clear_all` | `repeated CollectionObjectName` | Object Names (Empty to clear all) | Required |
| Request | 2 | `high_light_objects` | `optional bool` | HighLight Objects? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc HighlightObjects(HighlightObjectsRequest) returns (HighlightObjectsResult);

message HighlightObjectsRequest {
  repeated CollectionObjectName object_names_empty_to_clear_all = 1;
  optional bool high_light_objects = 2;
}

message HighlightObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

## Highlight Point {/* #highlight-point */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-point)

`/briosa.ViewControl/HighlightPoint` · Operation ID: `view_control.highlight_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_empty_to_clear_all` | `optional PointName` | Point Name (Empty to clear all) | Required |
| Request | 2 | `show_point` | `optional bool` | Show Point? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc HighlightPoint(HighlightPointRequest) returns (HighlightPointResult);

message HighlightPointRequest {
  optional PointName point_name_empty_to_clear_all = 1;
  optional bool show_point = 2;
}

message HighlightPointResult {
  MpExecutionDetails execution = 1000;
}
```

## Highlight Relationships {/* #highlight-relationships */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-relationships)

`/briosa.ViewControl/HighlightRelationships` · Operation ID: `view_control.highlight_relationships`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationships_empty_to_clear_all` | `repeated CollectionItemName` | Relationships (Empty to clear all) | Required |
| Request | 2 | `high_light_relationships` | `optional bool` | HighLight Relationships? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc HighlightRelationships(HighlightRelationshipsRequest) returns (HighlightRelationshipsResult);

message HighlightRelationshipsRequest {
  repeated CollectionItemName relationships_empty_to_clear_all = 1;
  optional bool high_light_relationships = 2;
}

message HighlightRelationshipsResult {
  MpExecutionDetails execution = 1000;
}
```

## Load Ribbon Bar from XML File {/* #load-ribbon-bar-from-xml-file */}

[MP Catalog](/mp-command-catalog/commands/view-control#load-ribbon-bar-from-xml-file)

`/briosa.ViewControl/LoadRibbonBarFromXmlFile` · Operation ID: `view_control.load_ribbon_bar_from_xml_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `optional FileReference` | File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LoadRibbonBarFromXmlFile(LoadRibbonBarFromXmlFileRequest) returns (LoadRibbonBarFromXmlFileResult);

message LoadRibbonBarFromXmlFileRequest {
  optional FileReference file_path = 1;
}

message LoadRibbonBarFromXmlFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Refresh Views {/* #refresh-views */}

[MP Catalog](/mp-command-catalog/commands/view-control#refresh-views)

`/briosa.ViewControl/RefreshViews` · Operation ID: `view_control.refresh_views`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RefreshViews(RefreshViewsRequest) returns (RefreshViewsResult);

message RefreshViewsRequest {
  // No MP inputs.
}

message RefreshViewsResult {
  MpExecutionDetails execution = 1000;
}
```

## Reset Ribbon Bar to Default {/* #reset-ribbon-bar-to-default */}

[MP Catalog](/mp-command-catalog/commands/view-control#reset-ribbon-bar-to-default)

`/briosa.ViewControl/ResetRibbonBarToDefault` · Operation ID: `view_control.reset_ribbon_bar_to_default`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ResetRibbonBarToDefault(ResetRibbonBarToDefaultRequest) returns (ResetRibbonBarToDefaultResult);

message ResetRibbonBarToDefaultRequest {
  // No MP inputs.
}

message ResetRibbonBarToDefaultResult {
  MpExecutionDetails execution = 1000;
}
```

## Save point of view {/* #save-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#save-point-of-view)

`/briosa.ViewControl/SavePointOfView` · Operation ID: `view_control.save_point_of_view`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `view_name` | `optional ViewName` | View Name | Required |
| Request | 2 | `restore_zoom_settings` | `optional bool` | Restore Zoom Settings? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SavePointOfView(SavePointOfViewRequest) returns (SavePointOfViewResult);

message SavePointOfViewRequest {
  optional ViewName view_name = 1;
  optional bool restore_zoom_settings = 2;
}

message SavePointOfViewResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Background Color {/* #set-background-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-background-color)

`/briosa.ViewControl/SetBackgroundColor` · Operation ID: `view_control.set_background_color`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `solid_color_name` | `optional Color` | Solid Color Name | RGB 255, 0, 0 |
| Request | 2 | `gradient_start_color_name` | `optional Color` | Gradient Start Color Name | RGB 255, 0, 0 |
| Request | 3 | `gradient_end_color_name` | `optional Color` | Gradient End Color Name | RGB 255, 0, 0 |
| Request | 4 | `highlight_color` | `optional Color` | Highlight Color | RGB 255, 0, 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetBackgroundColor(SetBackgroundColorRequest) returns (SetBackgroundColorResult);

message SetBackgroundColorRequest {
  optional Color solid_color_name = 1;
  optional Color gradient_start_color_name = 2;
  optional Color gradient_end_color_name = 3;
  optional Color highlight_color = 4;
}

message SetBackgroundColorResult {
  MpExecutionDetails execution = 1000;
}
```

## Set MP's Window State {/* #set-mps-window-state */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-mps-window-state)

`/briosa.ViewControl/SetMpWindowState` · Operation ID: `view_control.set_mp_window_state`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `mp_window_state` | `optional WindowState` | MP Window State | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetMpWindowState(SetMpWindowStateRequest) returns (SetMpWindowStateResult);

message SetMpWindowStateRequest {
  optional WindowState mp_window_state = 1;
}

message SetMpWindowStateResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Object(s) Color {/* #set-objects-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-objects-color)

`/briosa.ViewControl/SetObjectsColor` · Operation ID: `view_control.set_objects_color`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_change` | `repeated CollectionObjectName` | Objects to change | Required |
| Request | 2 | `new_working_color_name` | `optional Color` | New Working Color Name | RGB 255, 0, 0 |
| Request | 3 | `auto_increment` | `optional bool` | Auto Increment | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetObjectsColor(SetObjectsColorRequest) returns (SetObjectsColorResult);

message SetObjectsColorRequest {
  repeated CollectionObjectName objects_to_change = 1;
  optional Color new_working_color_name = 2;
  optional bool auto_increment = 3;
}

message SetObjectsColorResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Object(s) Translucency {/* #set-objects-translucency */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-objects-translucency)

`/briosa.ViewControl/SetObjectsTranslucency` · Operation ID: `view_control.set_objects_translucency`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_change` | `repeated CollectionObjectName` | Objects to change | Required |
| Request | 2 | `rendering_type` | `optional TranslucencyType` | Rendering Type | Required |
| Request | 3 | `opacity_value` | `optional double` | Opacity Value | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetObjectsTranslucency(SetObjectsTranslucencyRequest) returns (SetObjectsTranslucencyResult);

message SetObjectsTranslucencyRequest {
  repeated CollectionObjectName objects_to_change = 1;
  optional TranslucencyType rendering_type = 2;
  optional double opacity_value = 3;
}

message SetObjectsTranslucencyResult {
  MpExecutionDetails execution = 1000;
}
```

## Set point of view {/* #set-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view)

`/briosa.ViewControl/SetPointOfView` · Operation ID: `view_control.set_point_of_view`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `view_name` | `optional ViewName` | View Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPointOfView(SetPointOfViewRequest) returns (SetPointOfViewResult);

message SetPointOfViewRequest {
  optional ViewName view_name = 1;
}

message SetPointOfViewResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Point of View from Frame {/* #set-point-of-view-from-frame */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view-from-frame)

`/briosa.ViewControl/SetPointOfViewFromFrame` · Operation ID: `view_control.set_point_of_view_from_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame` | `optional CollectionObjectName` | Frame | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPointOfViewFromFrame(SetPointOfViewFromFrameRequest) returns (SetPointOfViewFromFrameResult);

message SetPointOfViewFromFrameRequest {
  optional CollectionObjectName frame = 1;
}

message SetPointOfViewFromFrameResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Point of View from Instrument Updates {/* #set-point-of-view-from-instrument-updates */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view-from-instrument-updates)

`/briosa.ViewControl/SetPointOfViewFromInstrumentUpdates` · Operation ID: `view_control.set_point_of_view_from_instrument_updates`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_id` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `display_view_control` | `optional bool` | Display View Control | true |
| Request | 3 | `enable_set_viewpoint_from_instrument_updates` | `optional bool` | Enable Set Viewpoint From Instrument Updates | false |
| Request | 4 | `update_view_percent` | `optional double` | Update View Percent | 75.000000 |
| Request | 5 | `clip_behind_probe` | `optional bool` | Clip Behind Probe | false |
| Request | 6 | `automatic_zoom_when_trapping` | `optional bool` | Automatic Zoom When Trapping | false |
| Request | 7 | `enable_directional_cloud_points` | `optional bool` | Enable Directional Cloud Points | false |
| Request | 8 | `angle_reset_threshold` | `optional double` | Angle Reset Threshold | 45.000000 |
| Request | 9 | `animation_steps` | `optional int32` | Animation Steps | 8 |
| Request | 10 | `reference_frame_object` | `optional CollectionObjectName` | Reference Frame Object | Required |
| Request | 11 | `use_scan_stripe_for_view_focus` | `optional bool` | Use Scan Stripe for View Focus | true |
| Request | 12 | `zoom_factor` | `optional double` | Zoom Factor | 1.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPointOfViewFromInstrumentUpdates(SetPointOfViewFromInstrumentUpdatesRequest) returns (SetPointOfViewFromInstrumentUpdatesResult);

message SetPointOfViewFromInstrumentUpdatesRequest {
  optional CollectionInstrumentId instrument_id = 1;
  optional bool display_view_control = 2;
  optional bool enable_set_viewpoint_from_instrument_updates = 3;
  optional double update_view_percent = 4;
  optional bool clip_behind_probe = 5;
  optional bool automatic_zoom_when_trapping = 6;
  optional bool enable_directional_cloud_points = 7;
  optional double angle_reset_threshold = 8;
  optional int32 animation_steps = 9;
  optional CollectionObjectName reference_frame_object = 10;
  optional bool use_scan_stripe_for_view_focus = 11;
  optional double zoom_factor = 12;
}

message SetPointOfViewFromInstrumentUpdatesResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Render Mode Type {/* #set-render-mode-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-render-mode-type)

`/briosa.ViewControl/SetRenderModeType` · Operation ID: `view_control.set_render_mode_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `rendering_mode` | `optional RenderModeType` | Rendering Mode | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRenderModeType(SetRenderModeTypeRequest) returns (SetRenderModeTypeResult);

message SetRenderModeTypeRequest {
  optional RenderModeType rendering_mode = 1;
}

message SetRenderModeTypeResult {
  MpExecutionDetails execution = 1000;
}
```

## Set SA's Window Pos {/* #set-sas-window-pos */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-pos)

`/briosa.ViewControl/SetSaWindowPos` · Operation ID: `view_control.set_sa_window_pos`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `pos_x` | `optional int32` | Pos X | 0 |
| Request | 2 | `pos_y` | `optional int32` | Pos Y | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetSaWindowPos(SetSaWindowPosRequest) returns (SetSaWindowPosResult);

message SetSaWindowPosRequest {
  optional int32 pos_x = 1;
  optional int32 pos_y = 2;
}

message SetSaWindowPosResult {
  MpExecutionDetails execution = 1000;
}
```

## Set SA's Window Size {/* #set-sas-window-size */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-size)

`/briosa.ViewControl/SetSaWindowSize` · Operation ID: `view_control.set_sa_window_size`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `width` | `optional int32` | Width | 0 |
| Request | 2 | `height` | `optional int32` | Height | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetSaWindowSize(SetSaWindowSizeRequest) returns (SetSaWindowSizeResult);

message SetSaWindowSizeRequest {
  optional int32 width = 1;
  optional int32 height = 2;
}

message SetSaWindowSizeResult {
  MpExecutionDetails execution = 1000;
}
```

## Set SA's Window State {/* #set-sas-window-state */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-state)

`/briosa.ViewControl/SetSaWindowState` · Operation ID: `view_control.set_sa_window_state`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sa_window_state` | `optional WindowState` | SA Window State | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetSaWindowState(SetSaWindowStateRequest) returns (SetSaWindowStateResult);

message SetSaWindowStateRequest {
  optional WindowState sa_window_state = 1;
}

message SetSaWindowStateResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Target Labels Use Full Names {/* #set-target-labels-use-full-names */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-target-labels-use-full-names)

`/briosa.ViewControl/SetTargetLabelsUseFullNames` · Operation ID: `view_control.set_target_labels_use_full_names`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `use_full_names` | `optional bool` | Use Full Names? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetTargetLabelsUseFullNames(SetTargetLabelsUseFullNamesRequest) returns (SetTargetLabelsUseFullNamesResult);

message SetTargetLabelsUseFullNamesRequest {
  optional bool use_full_names = 1;
}

message SetTargetLabelsUseFullNamesResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Toolkit Visibility {/* #set-toolkit-visibility */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-toolkit-visibility)

`/briosa.ViewControl/SetToolkitVisibility` · Operation ID: `view_control.set_toolkit_visibility`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `show_toolkit` | `optional bool` | Show Toolkit? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetToolkitVisibility(SetToolkitVisibilityRequest) returns (SetToolkitVisibilityResult);

message SetToolkitVisibilityRequest {
  optional bool show_toolkit = 1;
}

message SetToolkitVisibilityResult {
  MpExecutionDetails execution = 1000;
}
```

## Set View Clipping Plane {/* #set-view-clipping-plane */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-view-clipping-plane)

`/briosa.ViewControl/SetViewClippingPlane` · Operation ID: `view_control.set_view_clipping_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object` | `optional CollectionObjectName` | Object | Required |
| Request | 2 | `remove_clipping_plane` | `optional bool` | Remove Clipping Plane? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetViewClippingPlane(SetViewClippingPlaneRequest) returns (SetViewClippingPlaneResult);

message SetViewClippingPlaneRequest {
  optional CollectionObjectName object = 1;
  optional bool remove_clipping_plane = 2;
}

message SetViewClippingPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Working Color {/* #set-working-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-working-color)

`/briosa.ViewControl/SetWorkingColor` · Operation ID: `view_control.set_working_color`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_working_color_name` | `optional Color` | New Working Color Name | RGB 255, 0, 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetWorkingColor(SetWorkingColorRequest) returns (SetWorkingColorResult);

message SetWorkingColorRequest {
  optional Color new_working_color_name = 1;
}

message SetWorkingColorResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Working Color Auto Increment {/* #set-working-color-auto-increment */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-working-color-auto-increment)

`/briosa.ViewControl/SetWorkingColorAutoIncrement` · Operation ID: `view_control.set_working_color_auto_increment`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `auto_increment` | `optional bool` | Auto Increment | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetWorkingColorAutoIncrement(SetWorkingColorAutoIncrementRequest) returns (SetWorkingColorAutoIncrementResult);

message SetWorkingColorAutoIncrementRequest {
  optional bool auto_increment = 1;
}

message SetWorkingColorAutoIncrementResult {
  MpExecutionDetails execution = 1000;
}
```

## Show / Hide by Object Type {/* #show--hide-by-object-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-by-object-type)

`/briosa.ViewControl/ShowHideByObjectType` · Operation ID: `view_control.show_hide_by_object_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `all_collections` | `optional bool` | All Collections? | false |
| Request | 2 | `specific_collection` | `optional CollectionName` | Specific Collection | Required |
| Request | 3 | `object_type_to_show_hide` | `optional ObjectType` | Object Type To Show / Hide | Any |
| Request | 4 | `hide_show_false` | `optional bool` | Hide? (Show = FALSE) | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHideByObjectType(ShowHideByObjectTypeRequest) returns (ShowHideByObjectTypeResult);

message ShowHideByObjectTypeRequest {
  optional bool all_collections = 1;
  optional CollectionName specific_collection = 2;
  optional ObjectType object_type_to_show_hide = 3;
  optional bool hide_show_false = 4;
}

message ShowHideByObjectTypeResult {
  MpExecutionDetails execution = 1000;
}
```

## Show / Hide Callout View {/* #show--hide-callout-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-callout-view)

`/briosa.ViewControl/ShowHideCalloutView` · Operation ID: `view_control.show_hide_callout_view`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `callout_view_to_show` | `optional CollectionItemName` | Callout View To Show | Required |
| Request | 2 | `show_callout_view` | `optional bool` | Show Callout View? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHideCalloutView(ShowHideCalloutViewRequest) returns (ShowHideCalloutViewResult);

message ShowHideCalloutViewRequest {
  optional CollectionItemName callout_view_to_show = 1;
  optional bool show_callout_view = 2;
}

message ShowHideCalloutViewResult {
  MpExecutionDetails execution = 1000;
}
```

## Show / Hide Dimension {/* #show--hide-dimension */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-dimension)

`/briosa.ViewControl/ShowHideDimension` · Operation ID: `view_control.show_hide_dimension`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dimension_name` | `optional CollectionItemName` | Dimension Name | Required |
| Request | 2 | `show_dimension` | `optional bool` | Show Dimension? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHideDimension(ShowHideDimensionRequest) returns (ShowHideDimensionResult);

message ShowHideDimensionRequest {
  optional CollectionItemName dimension_name = 1;
  optional bool show_dimension = 2;
}

message ShowHideDimensionResult {
  MpExecutionDetails execution = 1000;
}
```

## Show / Hide Points {/* #show--hide-points */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-points)

`/briosa.ViewControl/ShowHidePoints` · Operation ID: `view_control.show_hide_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 2 | `show_hide_false` | `optional bool` | Show? (Hide = FALSE) | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHidePoints(ShowHidePointsRequest) returns (ShowHidePointsResult);

message ShowHidePointsRequest {
  repeated PointName point_names = 1;
  optional bool show_hide_false = 2;
}

message ShowHidePointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Show by Object Type {/* #show-by-object-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-by-object-type)

`/briosa.ViewControl/ShowByObjectType` · Operation ID: `view_control.show_by_object_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_type_to_show` | `optional CollectionObjectName` | Object Type To Show | Required |
| Request | 2 | `all_collections` | `optional bool` | All Collections? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowByObjectType(ShowByObjectTypeRequest) returns (ShowByObjectTypeResult);

message ShowByObjectTypeRequest {
  optional CollectionObjectName object_type_to_show = 1;
  optional bool all_collections = 2;
}

message ShowByObjectTypeResult {
  MpExecutionDetails execution = 1000;
}
```

## Show Items in Tree {/* #show-items-in-tree */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-items-in-tree)

`/briosa.ViewControl/ShowItemsInTree` · Operation ID: `view_control.show_items_in_tree`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collapse_all_other_items` | `optional bool` | Collapse all other Items? | true |
| Request | 2 | `points` | `repeated PointName` | Points | Required |
| Request | 3 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Request | 4 | `instruments` | `repeated CollectionInstrumentId` | Instruments | Required |
| Request | 5 | `feature_checks` | `repeated CollectionItemName` | Feature Checks | Required |
| Request | 6 | `datums` | `repeated CollectionObjectName` | Datums | Required |
| Request | 7 | `collections` | `repeated string` | Collections | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowItemsInTree(ShowItemsInTreeRequest) returns (ShowItemsInTreeResult);

message ShowItemsInTreeRequest {
  optional bool collapse_all_other_items = 1;
  repeated PointName points = 2;
  repeated CollectionObjectName objects = 3;
  repeated CollectionInstrumentId instruments = 4;
  repeated CollectionItemName feature_checks = 5;
  repeated CollectionObjectName datums = 6;
  repeated string collections = 7;
}

message ShowItemsInTreeResult {
  MpExecutionDetails execution = 1000;
}
```

## Show Labels {/* #show-labels */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-labels)

`/briosa.ViewControl/ShowLabels` · Operation ID: `view_control.show_labels`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_labels_on` | `optional bool` | Point Labels On? | false |
| Request | 2 | `objects_labels_on` | `optional bool` | Objects Labels On? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowLabels(ShowLabelsRequest) returns (ShowLabelsResult);

message ShowLabelsRequest {
  optional bool point_labels_on = 1;
  optional bool objects_labels_on = 2;
}

message ShowLabelsResult {
  MpExecutionDetails execution = 1000;
}
```

## Show Objects {/* #show-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-objects)

`/briosa.ViewControl/ShowObjects` · Operation ID: `view_control.show_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_show` | `repeated CollectionObjectName` | Objects To Show | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowObjects(ShowObjectsRequest) returns (ShowObjectsResult);

message ShowObjectsRequest {
  repeated CollectionObjectName objects_to_show = 1;
}

message ShowObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

## Show/Hide Annotations for Datums {/* #showhide-annotations-for-datums */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-annotations-for-datums)

`/briosa.ViewControl/ShowHideAnnotationsForDatums` · Operation ID: `view_control.show_hide_annotations_for_datums`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `datum_name_list` | `repeated CollectionObjectName` | Datum Name List | Required |
| Request | 2 | `show` | `optional bool` | Show? | false |
| Request | 3 | `highlight` | `optional bool` | Highlight? | false |
| Request | 4 | `set_inspection_view` | `optional bool` | Set Inspection View? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHideAnnotationsForDatums(ShowHideAnnotationsForDatumsRequest) returns (ShowHideAnnotationsForDatumsResult);

message ShowHideAnnotationsForDatumsRequest {
  repeated CollectionObjectName datum_name_list = 1;
  optional bool show = 2;
  optional bool highlight = 3;
  optional bool set_inspection_view = 4;
}

message ShowHideAnnotationsForDatumsResult {
  MpExecutionDetails execution = 1000;
}
```

## Show/Hide Annotations for Feature Checks {/* #showhide-annotations-for-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-annotations-for-feature-checks)

`/briosa.ViewControl/ShowHideAnnotationsForFeatureChecks` · Operation ID: `view_control.show_hide_annotations_for_feature_checks`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check_name_list` | `repeated CollectionItemName` | Feature Check Name List | Required |
| Request | 2 | `show` | `optional bool` | Show? | false |
| Request | 3 | `highlight` | `optional bool` | Highlight? | false |
| Request | 4 | `set_inspection_view` | `optional bool` | Set Inspection View? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHideAnnotationsForFeatureChecks(ShowHideAnnotationsForFeatureChecksRequest) returns (ShowHideAnnotationsForFeatureChecksResult);

message ShowHideAnnotationsForFeatureChecksRequest {
  repeated CollectionItemName feature_check_name_list = 1;
  optional bool show = 2;
  optional bool highlight = 3;
  optional bool set_inspection_view = 4;
}

message ShowHideAnnotationsForFeatureChecksResult {
  MpExecutionDetails execution = 1000;
}
```

## Show/Hide Inspection Bar {/* #showhide-inspection-bar */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-inspection-bar)

`/briosa.ViewControl/ShowHideInspectionBar` · Operation ID: `view_control.show_hide_inspection_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `show_inspection_bar` | `optional bool` | Show Inspection Bar? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHideInspectionBar(ShowHideInspectionBarRequest) returns (ShowHideInspectionBarResult);

message ShowHideInspectionBarRequest {
  optional bool show_inspection_bar = 1;
}

message ShowHideInspectionBarResult {
  MpExecutionDetails execution = 1000;
}
```

## Show/Hide Instrument Interface {/* #showhide-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instrument-interface)

`/briosa.ViewControl/ShowHideInstrumentInterface` · Operation ID: `view_control.show_hide_instrument_interface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_id` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `minimize_interface` | `optional bool` | Minimize Interface? | false |
| Request | 3 | `hide_interface` | `optional bool` | Hide Interface? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHideInstrumentInterface(ShowHideInstrumentInterfaceRequest) returns (ShowHideInstrumentInterfaceResult);

message ShowHideInstrumentInterfaceRequest {
  optional CollectionInstrumentId instrument_id = 1;
  optional bool minimize_interface = 2;
  optional bool hide_interface = 3;
}

message ShowHideInstrumentInterfaceResult {
  MpExecutionDetails execution = 1000;
}
```

## Show/Hide Instrument Probe Tip {/* #showhide-instrument-probe-tip */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instrument-probe-tip)

`/briosa.ViewControl/ShowHideInstrumentProbeTip` · Operation ID: `view_control.show_hide_instrument_probe_tip`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `show_instrument_probe_tip` | `optional bool` | Show Instrument Probe Tip? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHideInstrumentProbeTip(ShowHideInstrumentProbeTipRequest) returns (ShowHideInstrumentProbeTipResult);

message ShowHideInstrumentProbeTipRequest {
  optional bool show_instrument_probe_tip = 1;
}

message ShowHideInstrumentProbeTipResult {
  MpExecutionDetails execution = 1000;
}
```

## Show/Hide Instruments {/* #showhide-instruments */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instruments)

`/briosa.ViewControl/ShowHideInstruments` · Operation ID: `view_control.show_hide_instruments`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_i_ds` | `repeated CollectionInstrumentId` | Instrument IDs | Required |
| Request | 2 | `show_instruments` | `optional bool` | Show Instruments? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHideInstruments(ShowHideInstrumentsRequest) returns (ShowHideInstrumentsResult);

message ShowHideInstrumentsRequest {
  repeated CollectionInstrumentId instrument_i_ds = 1;
  optional bool show_instruments = 2;
}

message ShowHideInstrumentsResult {
  MpExecutionDetails execution = 1000;
}
```

## Show/Hide Relationship Report {/* #showhide-relationship-report */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-relationship-report)

`/briosa.ViewControl/ShowHideRelationshipReport` · Operation ID: `view_control.show_hide_relationship_report`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_name` | `optional CollectionName` | Collection Name | Required |
| Request | 2 | `show_relationship_report` | `optional bool` | Show Relationship Report | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHideRelationshipReport(ShowHideRelationshipReportRequest) returns (ShowHideRelationshipReportResult);

message ShowHideRelationshipReportRequest {
  optional CollectionName collection_name = 1;
  optional bool show_relationship_report = 2;
}

message ShowHideRelationshipReportResult {
  MpExecutionDetails execution = 1000;
}
```

## Show/Hide Relationship Watch {/* #showhide-relationship-watch */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-relationship-watch)

`/briosa.ViewControl/ShowHideRelationshipWatch` · Operation ID: `view_control.show_hide_relationship_watch`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `show_relationship_watch` | `optional bool` | Show Relationship Watch | false |
| Request | 3 | `relationship_watch_window_properties` | `optional CollectionObjectName` | Relationship Watch Window Properties | Required |
| Request | 4 | `window_top_left_x_position` | `optional int32` | Window Top Left X Position | 0 |
| Request | 5 | `window_top_left_y_position` | `optional int32` | Window Top Left Y Position | 0 |
| Request | 6 | `window_width` | `optional int32` | Window Width | 0 |
| Request | 7 | `window_height` | `optional int32` | Window Height | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowHideRelationshipWatch(ShowHideRelationshipWatchRequest) returns (ShowHideRelationshipWatchResult);

message ShowHideRelationshipWatchRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool show_relationship_watch = 2;
  optional CollectionObjectName relationship_watch_window_properties = 3;
  optional int32 window_top_left_x_position = 4;
  optional int32 window_top_left_y_position = 5;
  optional int32 window_width = 6;
  optional int32 window_height = 7;
}

message ShowHideRelationshipWatchResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
