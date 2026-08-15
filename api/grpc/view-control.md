---
title: View Control
description: Current and next gRPC contracts for supported View Control MP commands.
toc_max_heading_level: 2
---

# View Control

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Auto-Scale

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Auto-Scale](/mp-command-catalog/commands/view-control#auto-scale) |
| Service | `briosa.ViewControl` |
| RPC | `AutoScale` |
| Operation ID | `view_control.auto_scale` |
| Route | `/briosa.ViewControl/AutoScale` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AutoScale(AutoScaleRequest) returns (AutoScaleResult);

message AutoScaleRequest {
  // No MP inputs.
}

message AutoScaleResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Center Graphics About Object(s)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Center Graphics About Object(s)](/mp-command-catalog/commands/view-control#center-graphics-about-objects) |
| Service | `briosa.ViewControl` |
| RPC | `CenterGraphicsAboutObjects` |
| Operation ID | `view_control.center_graphics_about_objects` |
| Route | `/briosa.ViewControl/CenterGraphicsAboutObjects` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_type` | `ObjectType` | `Object Type` | Any |
| Request | 2 | `collection_wildcard_criteria` | `string` | `Collection Wildcard Criteria` | * |
| Request | 3 | `object_wildcard_criteria` | `string` | `Object Wildcard Criteria` | * |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Center Graphics About Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Center Graphics About Point](/mp-command-catalog/commands/view-control#center-graphics-about-point) |
| Service | `briosa.ViewControl` |
| RPC | `CenterGraphicsAboutPoint` |
| Operation ID | `view_control.center_graphics_about_point` |
| Route | `/briosa.ViewControl/CenterGraphicsAboutPoint` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `PointName` | `Point Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CenterGraphicsAboutPoint(CenterGraphicsAboutPointRequest) returns (CenterGraphicsAboutPointResult);

message CenterGraphicsAboutPointRequest {
  optional PointName point_name = 1;
}

message CenterGraphicsAboutPointResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Define point of view

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Define point of view](/mp-command-catalog/commands/view-control#define-point-of-view) |
| Service | `briosa.ViewControl` |
| RPC | `DefinePointOfView` |
| Operation ID | `view_control.define_point_of_view` |
| Route | `/briosa.ViewControl/DefinePointOfView` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `view_name` | `ViewName` | `View Name` | Required |
| Request | 2 | `rotation_x` | `double` | `Rotation (x)` | 0.000000 |
| Request | 3 | `rotation_y` | `double` | `Rotation (y)` | 0.000000 |
| Request | 4 | `rotation_z` | `double` | `Rotation (z)` | 0.000000 |
| Request | 5 | `restore_zoom_settings` | `bool` | `Restore Zoom Settings?` | false |
| Request | 6 | `scale_factor` | `double` | `Scale Factor` | 1.000000 |
| Request | 7 | `origin_x` | `double` | `Origin (x)` | 0.000000 |
| Request | 8 | `origin_y` | `double` | `Origin (y)` | 0.000000 |
| Request | 9 | `restore_render_mode` | `bool` | `Restore Render Mode?` | false |
| Request | 10 | `rendering_mode` | `RenderModeType` | `Rendering Mode` | Wireframe |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Active Clipping Planes

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Active Clipping Planes](/mp-command-catalog/commands/view-control#get-active-clipping-planes) |
| Service | `briosa.ViewControl` |
| RPC | `GetActiveClippingPlanes` |
| Operation ID | `view_control.get_active_clipping_planes` |
| Route | `/briosa.ViewControl/GetActiveClippingPlanes` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `objects` | `repeated CollectionObjectName` | `Objects` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get point of view parameters

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get point of view parameters](/mp-command-catalog/commands/view-control#get-point-of-view-parameters) |
| Service | `briosa.ViewControl` |
| RPC | `GetPointOfViewParameters` |
| Operation ID | `view_control.get_point_of_view_parameters` |
| Route | `/briosa.ViewControl/GetPointOfViewParameters` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `view_name` | `ViewName` | `View Name` | Required |
| Result | 1 | `rotation_x` | `double` | `Rotation (x)` | — |
| Result | 2 | `rotation_y` | `double` | `Rotation (y)` | — |
| Result | 3 | `rotation_z` | `double` | `Rotation (z)` | — |
| Result | 4 | `restore_zoom_settings` | `bool` | `Restore Zoom Settings?` | — |
| Result | 5 | `scale_factor` | `double` | `Scale Factor` | — |
| Result | 6 | `origin_x` | `double` | `Origin (x)` | — |
| Result | 7 | `origin_y` | `double` | `Origin (y)` | — |
| Result | 8 | `restore_render_mode` | `bool` | `Restore Render Mode?` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Hide All Callout Views

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Hide All Callout Views](/mp-command-catalog/commands/view-control#hide-all-callout-views) |
| Service | `briosa.ViewControl` |
| RPC | `HideAllCalloutViews` |
| Operation ID | `view_control.hide_all_callout_views` |
| Route | `/briosa.ViewControl/HideAllCalloutViews` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc HideAllCalloutViews(HideAllCalloutViewsRequest) returns (HideAllCalloutViewsResult);

message HideAllCalloutViewsRequest {
  // No MP inputs.
}

message HideAllCalloutViewsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Hide Objects

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Hide Objects](/mp-command-catalog/commands/view-control#hide-objects) |
| Service | `briosa.ViewControl` |
| RPC | `HideObjects` |
| Operation ID | `view_control.hide_objects` |
| Route | `/briosa.ViewControl/HideObjects` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_hide` | `repeated CollectionObjectName` | `Objects To Hide` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc HideObjects(HideObjectsRequest) returns (HideObjectsResult);

message HideObjectsRequest {
  repeated CollectionObjectName objects_to_hide = 1;
}

message HideObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Highlight Objects

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Highlight Objects](/mp-command-catalog/commands/view-control#highlight-objects) |
| Service | `briosa.ViewControl` |
| RPC | `HighlightObjects` |
| Operation ID | `view_control.highlight_objects` |
| Route | `/briosa.ViewControl/HighlightObjects` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_names_empty_to_clear_all` | `repeated CollectionObjectName` | `Object Names (Empty to clear all)` | Required |
| Request | 2 | `high_light_objects` | `bool` | `HighLight Objects?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Highlight Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Highlight Point](/mp-command-catalog/commands/view-control#highlight-point) |
| Service | `briosa.ViewControl` |
| RPC | `HighlightPoint` |
| Operation ID | `view_control.highlight_point` |
| Route | `/briosa.ViewControl/HighlightPoint` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_empty_to_clear_all` | `PointName` | `Point Name (Empty to clear all)` | Required |
| Request | 2 | `show_point` | `bool` | `Show Point?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Highlight Relationships

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Highlight Relationships](/mp-command-catalog/commands/view-control#highlight-relationships) |
| Service | `briosa.ViewControl` |
| RPC | `HighlightRelationships` |
| Operation ID | `view_control.highlight_relationships` |
| Route | `/briosa.ViewControl/HighlightRelationships` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationships_empty_to_clear_all` | `repeated CollectionObjectName` | `Relationships (Empty to clear all)` | Required |
| Request | 2 | `high_light_relationships` | `bool` | `HighLight Relationships?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc HighlightRelationships(HighlightRelationshipsRequest) returns (HighlightRelationshipsResult);

message HighlightRelationshipsRequest {
  repeated CollectionObjectName relationships_empty_to_clear_all = 1;
  optional bool high_light_relationships = 2;
}

message HighlightRelationshipsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Load Ribbon Bar from XML File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Load Ribbon Bar from XML File](/mp-command-catalog/commands/view-control#load-ribbon-bar-from-xml-file) |
| Service | `briosa.ViewControl` |
| RPC | `LoadRibbonBarFromXmlFile` |
| Operation ID | `view_control.load_ribbon_bar_from_xml_file` |
| Route | `/briosa.ViewControl/LoadRibbonBarFromXmlFile` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `FileReference` | `File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc LoadRibbonBarFromXmlFile(LoadRibbonBarFromXmlFileRequest) returns (LoadRibbonBarFromXmlFileResult);

message LoadRibbonBarFromXmlFileRequest {
  optional FileReference file_path = 1;
}

message LoadRibbonBarFromXmlFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Refresh Views

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Refresh Views](/mp-command-catalog/commands/view-control#refresh-views) |
| Service | `briosa.ViewControl` |
| RPC | `RefreshViews` |
| Operation ID | `view_control.refresh_views` |
| Route | `/briosa.ViewControl/RefreshViews` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc RefreshViews(RefreshViewsRequest) returns (RefreshViewsResult);

message RefreshViewsRequest {
  // No MP inputs.
}

message RefreshViewsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Reset Ribbon Bar to Default

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Reset Ribbon Bar to Default](/mp-command-catalog/commands/view-control#reset-ribbon-bar-to-default) |
| Service | `briosa.ViewControl` |
| RPC | `ResetRibbonBarToDefault` |
| Operation ID | `view_control.reset_ribbon_bar_to_default` |
| Route | `/briosa.ViewControl/ResetRibbonBarToDefault` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ResetRibbonBarToDefault(ResetRibbonBarToDefaultRequest) returns (ResetRibbonBarToDefaultResult);

message ResetRibbonBarToDefaultRequest {
  // No MP inputs.
}

message ResetRibbonBarToDefaultResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Save point of view

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Save point of view](/mp-command-catalog/commands/view-control#save-point-of-view) |
| Service | `briosa.ViewControl` |
| RPC | `SavePointOfView` |
| Operation ID | `view_control.save_point_of_view` |
| Route | `/briosa.ViewControl/SavePointOfView` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `view_name` | `ViewName` | `View Name` | Required |
| Request | 2 | `restore_zoom_settings` | `bool` | `Restore Zoom Settings?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Background Color

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Background Color](/mp-command-catalog/commands/view-control#set-background-color) |
| Service | `briosa.ViewControl` |
| RPC | `SetBackgroundColor` |
| Operation ID | `view_control.set_background_color` |
| Route | `/briosa.ViewControl/SetBackgroundColor` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `solid_color_name` | `Color` | `Solid Color Name` | RGB 255, 0, 0 |
| Request | 2 | `gradient_start_color_name` | `Color` | `Gradient Start Color Name` | RGB 255, 0, 0 |
| Request | 3 | `gradient_end_color_name` | `Color` | `Gradient End Color Name` | RGB 255, 0, 0 |
| Request | 4 | `highlight_color` | `Color` | `Highlight Color` | RGB 255, 0, 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set MP's Window State

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set MP's Window State](/mp-command-catalog/commands/view-control#set-mps-window-state) |
| Service | `briosa.ViewControl` |
| RPC | `SetMpWindowState` |
| Operation ID | `view_control.set_mp_window_state` |
| Route | `/briosa.ViewControl/SetMpWindowState` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `mp_window_state` | `WindowState` | `MP Window State` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetMpWindowState(SetMpWindowStateRequest) returns (SetMpWindowStateResult);

message SetMpWindowStateRequest {
  optional WindowState mp_window_state = 1;
}

message SetMpWindowStateResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Object(s) Color

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Object(s) Color](/mp-command-catalog/commands/view-control#set-objects-color) |
| Service | `briosa.ViewControl` |
| RPC | `SetObjectsColor` |
| Operation ID | `view_control.set_objects_color` |
| Route | `/briosa.ViewControl/SetObjectsColor` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_change` | `repeated CollectionObjectName` | `Objects to change` | Required |
| Request | 2 | `new_working_color_name` | `Color` | `New Working Color Name` | RGB 255, 0, 0 |
| Request | 3 | `auto_increment` | `bool` | `Auto Increment` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Object(s) Translucency

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Object(s) Translucency](/mp-command-catalog/commands/view-control#set-objects-translucency) |
| Service | `briosa.ViewControl` |
| RPC | `SetObjectsTranslucency` |
| Operation ID | `view_control.set_objects_translucency` |
| Route | `/briosa.ViewControl/SetObjectsTranslucency` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_change` | `repeated CollectionObjectName` | `Objects to change` | Required |
| Request | 2 | `rendering_type` | `TranslucencyType` | `Rendering Type` | Required |
| Request | 3 | `opacity_value` | `double` | `Opacity Value` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set point of view

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set point of view](/mp-command-catalog/commands/view-control#set-point-of-view) |
| Service | `briosa.ViewControl` |
| RPC | `SetPointOfView` |
| Operation ID | `view_control.set_point_of_view` |
| Route | `/briosa.ViewControl/SetPointOfView` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `view_name` | `ViewName` | `View Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetPointOfView(SetPointOfViewRequest) returns (SetPointOfViewResult);

message SetPointOfViewRequest {
  optional ViewName view_name = 1;
}

message SetPointOfViewResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Point of View from Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Point of View from Frame](/mp-command-catalog/commands/view-control#set-point-of-view-from-frame) |
| Service | `briosa.ViewControl` |
| RPC | `SetPointOfViewFromFrame` |
| Operation ID | `view_control.set_point_of_view_from_frame` |
| Route | `/briosa.ViewControl/SetPointOfViewFromFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame` | `CollectionObjectName` | `Frame` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetPointOfViewFromFrame(SetPointOfViewFromFrameRequest) returns (SetPointOfViewFromFrameResult);

message SetPointOfViewFromFrameRequest {
  optional CollectionObjectName frame = 1;
}

message SetPointOfViewFromFrameResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Point of View from Instrument Updates

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Point of View from Instrument Updates](/mp-command-catalog/commands/view-control#set-point-of-view-from-instrument-updates) |
| Service | `briosa.ViewControl` |
| RPC | `SetPointOfViewFromInstrumentUpdates` |
| Operation ID | `view_control.set_point_of_view_from_instrument_updates` |
| Route | `/briosa.ViewControl/SetPointOfViewFromInstrumentUpdates` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_id` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| Request | 2 | `display_view_control` | `bool` | `Display View Control` | true |
| Request | 3 | `enable_set_viewpoint_from_instrument_updates` | `bool` | `Enable Set Viewpoint From Instrument Updates` | false |
| Request | 4 | `update_view_percent` | `double` | `Update View Percent` | 75.000000 |
| Request | 5 | `clip_behind_probe` | `bool` | `Clip Behind Probe` | false |
| Request | 6 | `automatic_zoom_when_trapping` | `bool` | `Automatic Zoom When Trapping` | false |
| Request | 7 | `enable_directional_cloud_points` | `bool` | `Enable Directional Cloud Points` | false |
| Request | 8 | `angle_reset_threshold` | `double` | `Angle Reset Threshold` | 45.000000 |
| Request | 9 | `animation_steps` | `int32` | `Animation Steps` | 8 |
| Request | 10 | `reference_frame_object` | `CollectionObjectName` | `Reference Frame Object` | Required |
| Request | 11 | `use_scan_stripe_for_view_focus` | `bool` | `Use Scan Stripe for View Focus` | true |
| Request | 12 | `zoom_factor` | `double` | `Zoom Factor` | 1.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Render Mode Type

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Render Mode Type](/mp-command-catalog/commands/view-control#set-render-mode-type) |
| Service | `briosa.ViewControl` |
| RPC | `SetRenderModeType` |
| Operation ID | `view_control.set_render_mode_type` |
| Route | `/briosa.ViewControl/SetRenderModeType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `rendering_mode` | `RenderModeType` | `Rendering Mode` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRenderModeType(SetRenderModeTypeRequest) returns (SetRenderModeTypeResult);

message SetRenderModeTypeRequest {
  optional RenderModeType rendering_mode = 1;
}

message SetRenderModeTypeResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set SA's Window Pos

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set SA's Window Pos](/mp-command-catalog/commands/view-control#set-sas-window-pos) |
| Service | `briosa.ViewControl` |
| RPC | `SetSaWindowPos` |
| Operation ID | `view_control.set_sa_window_pos` |
| Route | `/briosa.ViewControl/SetSaWindowPos` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `pos_x` | `int32` | `Pos X` | 0 |
| Request | 2 | `pos_y` | `int32` | `Pos Y` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set SA's Window Size

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set SA's Window Size](/mp-command-catalog/commands/view-control#set-sas-window-size) |
| Service | `briosa.ViewControl` |
| RPC | `SetSaWindowSize` |
| Operation ID | `view_control.set_sa_window_size` |
| Route | `/briosa.ViewControl/SetSaWindowSize` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `width` | `int32` | `Width` | 0 |
| Request | 2 | `height` | `int32` | `Height` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set SA's Window State

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set SA's Window State](/mp-command-catalog/commands/view-control#set-sas-window-state) |
| Service | `briosa.ViewControl` |
| RPC | `SetSaWindowState` |
| Operation ID | `view_control.set_sa_window_state` |
| Route | `/briosa.ViewControl/SetSaWindowState` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sa_window_state` | `WindowState` | `SA Window State` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetSaWindowState(SetSaWindowStateRequest) returns (SetSaWindowStateResult);

message SetSaWindowStateRequest {
  optional WindowState sa_window_state = 1;
}

message SetSaWindowStateResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Target Labels Use Full Names

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Target Labels Use Full Names](/mp-command-catalog/commands/view-control#set-target-labels-use-full-names) |
| Service | `briosa.ViewControl` |
| RPC | `SetTargetLabelsUseFullNames` |
| Operation ID | `view_control.set_target_labels_use_full_names` |
| Route | `/briosa.ViewControl/SetTargetLabelsUseFullNames` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `use_full_names` | `bool` | `Use Full Names?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetTargetLabelsUseFullNames(SetTargetLabelsUseFullNamesRequest) returns (SetTargetLabelsUseFullNamesResult);

message SetTargetLabelsUseFullNamesRequest {
  optional bool use_full_names = 1;
}

message SetTargetLabelsUseFullNamesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Toolkit Visibility

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Toolkit Visibility](/mp-command-catalog/commands/view-control#set-toolkit-visibility) |
| Service | `briosa.ViewControl` |
| RPC | `SetToolkitVisibility` |
| Operation ID | `view_control.set_toolkit_visibility` |
| Route | `/briosa.ViewControl/SetToolkitVisibility` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `show_toolkit` | `bool` | `Show Toolkit?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetToolkitVisibility(SetToolkitVisibilityRequest) returns (SetToolkitVisibilityResult);

message SetToolkitVisibilityRequest {
  optional bool show_toolkit = 1;
}

message SetToolkitVisibilityResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set View Clipping Plane

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set View Clipping Plane](/mp-command-catalog/commands/view-control#set-view-clipping-plane) |
| Service | `briosa.ViewControl` |
| RPC | `SetViewClippingPlane` |
| Operation ID | `view_control.set_view_clipping_plane` |
| Route | `/briosa.ViewControl/SetViewClippingPlane` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object` | `CollectionObjectName` | `Object` | Required |
| Request | 2 | `remove_clipping_plane` | `bool` | `Remove Clipping Plane?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Working Color

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Working Color](/mp-command-catalog/commands/view-control#set-working-color) |
| Service | `briosa.ViewControl` |
| RPC | `SetWorkingColor` |
| Operation ID | `view_control.set_working_color` |
| Route | `/briosa.ViewControl/SetWorkingColor` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_working_color_name` | `Color` | `New Working Color Name` | RGB 255, 0, 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetWorkingColor(SetWorkingColorRequest) returns (SetWorkingColorResult);

message SetWorkingColorRequest {
  optional Color new_working_color_name = 1;
}

message SetWorkingColorResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Working Color Auto Increment

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Working Color Auto Increment](/mp-command-catalog/commands/view-control#set-working-color-auto-increment) |
| Service | `briosa.ViewControl` |
| RPC | `SetWorkingColorAutoIncrement` |
| Operation ID | `view_control.set_working_color_auto_increment` |
| Route | `/briosa.ViewControl/SetWorkingColorAutoIncrement` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `auto_increment` | `bool` | `Auto Increment` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetWorkingColorAutoIncrement(SetWorkingColorAutoIncrementRequest) returns (SetWorkingColorAutoIncrementResult);

message SetWorkingColorAutoIncrementRequest {
  optional bool auto_increment = 1;
}

message SetWorkingColorAutoIncrementResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show / Hide by Object Type

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show / Hide by Object Type](/mp-command-catalog/commands/view-control#show--hide-by-object-type) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHideByObjectType` |
| Operation ID | `view_control.show_hide_by_object_type` |
| Route | `/briosa.ViewControl/ShowHideByObjectType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `all_collections` | `bool` | `All Collections?` | false |
| Request | 2 | `specific_collection` | `CollectionName` | `Specific Collection` | Required |
| Request | 3 | `object_type_to_show_hide` | `ObjectType` | `Object Type To Show / Hide` | Any |
| Request | 4 | `hide_show_false` | `bool` | `Hide? (Show = FALSE)` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show / Hide Callout View

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show / Hide Callout View](/mp-command-catalog/commands/view-control#show--hide-callout-view) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHideCalloutView` |
| Operation ID | `view_control.show_hide_callout_view` |
| Route | `/briosa.ViewControl/ShowHideCalloutView` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `callout_view_to_show` | `CollectionObjectName` | `Callout View To Show` | Required |
| Request | 2 | `show_callout_view` | `bool` | `Show Callout View?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ShowHideCalloutView(ShowHideCalloutViewRequest) returns (ShowHideCalloutViewResult);

message ShowHideCalloutViewRequest {
  optional CollectionObjectName callout_view_to_show = 1;
  optional bool show_callout_view = 2;
}

message ShowHideCalloutViewResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show / Hide Dimension

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show / Hide Dimension](/mp-command-catalog/commands/view-control#show--hide-dimension) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHideDimension` |
| Operation ID | `view_control.show_hide_dimension` |
| Route | `/briosa.ViewControl/ShowHideDimension` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dimension_name` | `CollectionObjectName` | `Dimension Name` | Required |
| Request | 2 | `show_dimension` | `bool` | `Show Dimension?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ShowHideDimension(ShowHideDimensionRequest) returns (ShowHideDimensionResult);

message ShowHideDimensionRequest {
  optional CollectionObjectName dimension_name = 1;
  optional bool show_dimension = 2;
}

message ShowHideDimensionResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show / Hide Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show / Hide Points](/mp-command-catalog/commands/view-control#show--hide-points) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHidePoints` |
| Operation ID | `view_control.show_hide_points` |
| Route | `/briosa.ViewControl/ShowHidePoints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | `Point Names` | Required |
| Request | 2 | `show_hide_false` | `bool` | `Show? (Hide = FALSE)` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show by Object Type

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show by Object Type](/mp-command-catalog/commands/view-control#show-by-object-type) |
| Service | `briosa.ViewControl` |
| RPC | `ShowByObjectType` |
| Operation ID | `view_control.show_by_object_type` |
| Route | `/briosa.ViewControl/ShowByObjectType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_type_to_show` | `CollectionObjectName` | `Object Type To Show` | Required |
| Request | 2 | `all_collections` | `bool` | `All Collections?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show Items in Tree

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show Items in Tree](/mp-command-catalog/commands/view-control#show-items-in-tree) |
| Service | `briosa.ViewControl` |
| RPC | `ShowItemsInTree` |
| Operation ID | `view_control.show_items_in_tree` |
| Route | `/briosa.ViewControl/ShowItemsInTree` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collapse_all_other_items` | `bool` | `Collapse all other Items?` | true |
| Request | 2 | `points` | `repeated PointName` | `Points` | Required |
| Request | 3 | `objects` | `repeated CollectionObjectName` | `Objects` | Required |
| Request | 4 | `instruments` | `repeated CollectionInstrumentId` | `Instruments` | Required |
| Request | 5 | `feature_checks` | `repeated CollectionObjectName` | `Feature Checks` | Required |
| Request | 6 | `datums` | `repeated CollectionObjectName` | `Datums` | Required |
| Request | 7 | `collections` | `repeated string` | `Collections` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ShowItemsInTree(ShowItemsInTreeRequest) returns (ShowItemsInTreeResult);

message ShowItemsInTreeRequest {
  optional bool collapse_all_other_items = 1;
  repeated PointName points = 2;
  repeated CollectionObjectName objects = 3;
  repeated CollectionInstrumentId instruments = 4;
  repeated CollectionObjectName feature_checks = 5;
  repeated CollectionObjectName datums = 6;
  repeated string collections = 7;
}

message ShowItemsInTreeResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show Labels

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show Labels](/mp-command-catalog/commands/view-control#show-labels) |
| Service | `briosa.ViewControl` |
| RPC | `ShowLabels` |
| Operation ID | `view_control.show_labels` |
| Route | `/briosa.ViewControl/ShowLabels` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_labels_on` | `bool` | `Point Labels On?` | false |
| Request | 2 | `objects_labels_on` | `bool` | `Objects Labels On?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show Objects

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show Objects](/mp-command-catalog/commands/view-control#show-objects) |
| Service | `briosa.ViewControl` |
| RPC | `ShowObjects` |
| Operation ID | `view_control.show_objects` |
| Route | `/briosa.ViewControl/ShowObjects` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_show` | `repeated CollectionObjectName` | `Objects To Show` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ShowObjects(ShowObjectsRequest) returns (ShowObjectsResult);

message ShowObjectsRequest {
  repeated CollectionObjectName objects_to_show = 1;
}

message ShowObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show/Hide Annotations for Datums

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show/Hide Annotations for Datums](/mp-command-catalog/commands/view-control#showhide-annotations-for-datums) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHideAnnotationsForDatums` |
| Operation ID | `view_control.show_hide_annotations_for_datums` |
| Route | `/briosa.ViewControl/ShowHideAnnotationsForDatums` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `datum_name_list` | `repeated CollectionObjectName` | `Datum Name List` | Required |
| Request | 2 | `show` | `bool` | `Show?` | false |
| Request | 3 | `highlight` | `bool` | `Highlight?` | false |
| Request | 4 | `set_inspection_view` | `bool` | `Set Inspection View?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show/Hide Annotations for Feature Checks

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show/Hide Annotations for Feature Checks](/mp-command-catalog/commands/view-control#showhide-annotations-for-feature-checks) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHideAnnotationsForFeatureChecks` |
| Operation ID | `view_control.show_hide_annotations_for_feature_checks` |
| Route | `/briosa.ViewControl/ShowHideAnnotationsForFeatureChecks` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check_name_list` | `repeated CollectionObjectName` | `Feature Check Name List` | Required |
| Request | 2 | `show` | `bool` | `Show?` | false |
| Request | 3 | `highlight` | `bool` | `Highlight?` | false |
| Request | 4 | `set_inspection_view` | `bool` | `Set Inspection View?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ShowHideAnnotationsForFeatureChecks(ShowHideAnnotationsForFeatureChecksRequest) returns (ShowHideAnnotationsForFeatureChecksResult);

message ShowHideAnnotationsForFeatureChecksRequest {
  repeated CollectionObjectName feature_check_name_list = 1;
  optional bool show = 2;
  optional bool highlight = 3;
  optional bool set_inspection_view = 4;
}

message ShowHideAnnotationsForFeatureChecksResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show/Hide Inspection Bar

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show/Hide Inspection Bar](/mp-command-catalog/commands/view-control#showhide-inspection-bar) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHideInspectionBar` |
| Operation ID | `view_control.show_hide_inspection_bar` |
| Route | `/briosa.ViewControl/ShowHideInspectionBar` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `show_inspection_bar` | `bool` | `Show Inspection Bar?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ShowHideInspectionBar(ShowHideInspectionBarRequest) returns (ShowHideInspectionBarResult);

message ShowHideInspectionBarRequest {
  optional bool show_inspection_bar = 1;
}

message ShowHideInspectionBarResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show/Hide Instrument Interface

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show/Hide Instrument Interface](/mp-command-catalog/commands/view-control#showhide-instrument-interface) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHideInstrumentInterface` |
| Operation ID | `view_control.show_hide_instrument_interface` |
| Route | `/briosa.ViewControl/ShowHideInstrumentInterface` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_id` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| Request | 2 | `minimize_interface` | `bool` | `Minimize Interface?` | false |
| Request | 3 | `hide_interface` | `bool` | `Hide Interface?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show/Hide Instrument Probe Tip

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show/Hide Instrument Probe Tip](/mp-command-catalog/commands/view-control#showhide-instrument-probe-tip) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHideInstrumentProbeTip` |
| Operation ID | `view_control.show_hide_instrument_probe_tip` |
| Route | `/briosa.ViewControl/ShowHideInstrumentProbeTip` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `show_instrument_probe_tip` | `bool` | `Show Instrument Probe Tip?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ShowHideInstrumentProbeTip(ShowHideInstrumentProbeTipRequest) returns (ShowHideInstrumentProbeTipResult);

message ShowHideInstrumentProbeTipRequest {
  optional bool show_instrument_probe_tip = 1;
}

message ShowHideInstrumentProbeTipResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show/Hide Instruments

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show/Hide Instruments](/mp-command-catalog/commands/view-control#showhide-instruments) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHideInstruments` |
| Operation ID | `view_control.show_hide_instruments` |
| Route | `/briosa.ViewControl/ShowHideInstruments` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_i_ds` | `repeated CollectionInstrumentId` | `Instrument IDs` | Required |
| Request | 2 | `show_instruments` | `bool` | `Show Instruments?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show/Hide Relationship Report

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show/Hide Relationship Report](/mp-command-catalog/commands/view-control#showhide-relationship-report) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHideRelationshipReport` |
| Operation ID | `view_control.show_hide_relationship_report` |
| Route | `/briosa.ViewControl/ShowHideRelationshipReport` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_name` | `CollectionName` | `Collection Name` | Required |
| Request | 2 | `show_relationship_report` | `bool` | `Show Relationship Report` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show/Hide Relationship Watch

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show/Hide Relationship Watch](/mp-command-catalog/commands/view-control#showhide-relationship-watch) |
| Service | `briosa.ViewControl` |
| RPC | `ShowHideRelationshipWatch` |
| Operation ID | `view_control.show_hide_relationship_watch` |
| Route | `/briosa.ViewControl/ShowHideRelationshipWatch` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `show_relationship_watch` | `bool` | `Show Relationship Watch` | false |
| Request | 3 | `relationship_watch_window_properties` | `CollectionObjectName` | `Relationship Watch Window Properties` | Required |
| Request | 4 | `window_top_left_x_position` | `int32` | `Window Top Left X Position` | 0 |
| Request | 5 | `window_top_left_y_position` | `int32` | `Window Top Left Y Position` | 0 |
| Request | 6 | `window_width` | `int32` | `Window Width` | 0 |
| Request | 7 | `window_height` | `int32` | `Window Height` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
