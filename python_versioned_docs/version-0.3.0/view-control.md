---
title: View Control
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# View Control

[SA 2026.1.0529.7](/api/python/view-control) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/view-control)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Auto-Scale {/* #auto-scale */}

[MP Catalog](/mp-command-catalog/commands/view-control#auto-scale) · [gRPC Contract](/api/grpc/view-control#auto-scale)

```python
async def auto_scale(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Center Graphics About Object(s) {/* #center-graphics-about-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#center-graphics-about-objects) · [gRPC Contract](/api/grpc/view-control#center-graphics-about-objects)

```python
async def center_graphics_about_objects(
        self,
        *,
        object_type: ObjectType = ObjectType.ANY,
        collection_wildcard_criteria: str = "*",
        object_wildcard_criteria: str = "*",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Center Graphics About Point {/* #center-graphics-about-point */}

[MP Catalog](/mp-command-catalog/commands/view-control#center-graphics-about-point) · [gRPC Contract](/api/grpc/view-control#center-graphics-about-point)

```python
async def center_graphics_about_point(
        self,
        point_name: PointName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Define point of view {/* #define-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#define-point-of-view) · [gRPC Contract](/api/grpc/view-control#define-point-of-view)

```python
async def define_point_of_view(
        self,
        view_name: ViewName,
        *,
        rotation_x: float = 0.000000,
        rotation_y: float = 0.000000,
        rotation_z: float = 0.000000,
        restore_zoom_settings: bool = False,
        scale_factor: float = 1.000000,
        origin_x: float = 0.000000,
        origin_y: float = 0.000000,
        restore_render_mode: bool = False,
        rendering_mode: RenderModeType = RenderModeType.WIREFRAME,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Clipping Planes {/* #get-active-clipping-planes */}

[MP Catalog](/mp-command-catalog/commands/view-control#get-active-clipping-planes) · [gRPC Contract](/api/grpc/view-control#get-active-clipping-planes)

```python
async def get_active_clipping_planes(self) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get point of view parameters {/* #get-point-of-view-parameters */}

[MP Catalog](/mp-command-catalog/commands/view-control#get-point-of-view-parameters) · [gRPC Contract](/api/grpc/view-control#get-point-of-view-parameters)

```python
async def get_point_of_view_parameters(
        self,
        view_name: ViewName,
    ) -> GetPointOfViewParametersResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Hide All Callout Views {/* #hide-all-callout-views */}

[MP Catalog](/mp-command-catalog/commands/view-control#hide-all-callout-views) · [gRPC Contract](/api/grpc/view-control#hide-all-callout-views)

```python
async def hide_all_callout_views(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Hide Objects {/* #hide-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#hide-objects) · [gRPC Contract](/api/grpc/view-control#hide-objects)

```python
async def hide_objects(
        self,
        objects_to_hide: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Highlight Objects {/* #highlight-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-objects) · [gRPC Contract](/api/grpc/view-control#highlight-objects)

```python
async def highlight_objects(
        self,
        object_names: Iterable[CollectionObjectName],
        *,
        high_light_objects: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `object_names` | An empty selection clears all highlights. |

## Highlight Point {/* #highlight-point */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-point) · [gRPC Contract](/api/grpc/view-control#highlight-point)

```python
async def highlight_point(
        self,
        point_name: PointName,
        *,
        show_point: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `point_name` | An empty selection clears all highlights. |

## Highlight Relationships {/* #highlight-relationships */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-relationships) · [gRPC Contract](/api/grpc/view-control#highlight-relationships)

```python
async def highlight_relationships(
        self,
        relationships: Iterable[CollectionItemName],
        *,
        high_light_relationships: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `relationships` | An empty selection clears all highlights. |

## Load Ribbon Bar from XML File {/* #load-ribbon-bar-from-xml-file */}

[MP Catalog](/mp-command-catalog/commands/view-control#load-ribbon-bar-from-xml-file) · [gRPC Contract](/api/grpc/view-control#load-ribbon-bar-from-xml-file)

```python
async def load_ribbon_bar_from_xml_file(
        self,
        file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Refresh Views {/* #refresh-views */}

[MP Catalog](/mp-command-catalog/commands/view-control#refresh-views) · [gRPC Contract](/api/grpc/view-control#refresh-views)

```python
async def refresh_views(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reset Ribbon Bar to Default {/* #reset-ribbon-bar-to-default */}

[MP Catalog](/mp-command-catalog/commands/view-control#reset-ribbon-bar-to-default) · [gRPC Contract](/api/grpc/view-control#reset-ribbon-bar-to-default)

```python
async def reset_ribbon_bar_to_default(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save point of view {/* #save-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#save-point-of-view) · [gRPC Contract](/api/grpc/view-control#save-point-of-view)

```python
async def save_point_of_view(
        self,
        view_name: ViewName,
        *,
        restore_zoom_settings: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Background Color {/* #set-background-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-background-color) · [gRPC Contract](/api/grpc/view-control#set-background-color)

```python
async def set_background_color(
        self,
        solid_color_name: Color,
        gradient_start_color_name: Color,
        gradient_end_color_name: Color,
        highlight_color: Color,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set MP's Window State {/* #set-mps-window-state */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-mps-window-state) · [gRPC Contract](/api/grpc/view-control#set-mps-window-state)

```python
async def set_mp_window_state(
        self,
        mp_window_state: WindowState,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object(s) Color {/* #set-objects-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-objects-color) · [gRPC Contract](/api/grpc/view-control#set-objects-color)

```python
async def set_objects_color(
        self,
        objects_to_change: Iterable[CollectionObjectName],
        new_working_color_name: Color,
        *,
        auto_increment: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object(s) Translucency {/* #set-objects-translucency */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-objects-translucency) · [gRPC Contract](/api/grpc/view-control#set-objects-translucency)

```python
async def set_objects_translucency(
        self,
        objects_to_change: Iterable[CollectionObjectName],
        rendering_type: TranslucencyType,
        *,
        opacity_value: float = 0.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set point of view {/* #set-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view) · [gRPC Contract](/api/grpc/view-control#set-point-of-view)

```python
async def set_point_of_view(
        self,
        view_name: ViewName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point of View from Frame {/* #set-point-of-view-from-frame */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view-from-frame) · [gRPC Contract](/api/grpc/view-control#set-point-of-view-from-frame)

```python
async def set_point_of_view_from_frame(
        self,
        frame: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point of View from Instrument Updates {/* #set-point-of-view-from-instrument-updates */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view-from-instrument-updates) · [gRPC Contract](/api/grpc/view-control#set-point-of-view-from-instrument-updates)

```python
async def set_point_of_view_from_instrument_updates(
        self,
        instrument_id: CollectionInstrumentId,
        *,
        display_view_control: bool = True,
        enable_set_viewpoint_from_instrument_updates: bool = False,
        update_view_percent: float = 75.000000,
        clip_behind_probe: bool = False,
        automatic_zoom_when_trapping: bool = False,
        enable_directional_cloud_points: bool = False,
        angle_reset_threshold: float = 45.000000,
        animation_steps: int = 8,
        reference_frame_object: CollectionObjectName,
        use_scan_stripe_for_view_focus: bool = True,
        zoom_factor: float = 1.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Render Mode Type {/* #set-render-mode-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-render-mode-type) · [gRPC Contract](/api/grpc/view-control#set-render-mode-type)

```python
async def set_render_mode_type(
        self,
        rendering_mode: RenderModeType,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set SA's Window Pos {/* #set-sas-window-pos */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-pos) · [gRPC Contract](/api/grpc/view-control#set-sas-window-pos)

```python
async def set_sa_window_pos(
        self,
        *,
        pos_x: int = 0,
        pos_y: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set SA's Window Size {/* #set-sas-window-size */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-size) · [gRPC Contract](/api/grpc/view-control#set-sas-window-size)

```python
async def set_sa_window_size(
        self,
        *,
        width: int = 0,
        height: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set SA's Window State {/* #set-sas-window-state */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-state) · [gRPC Contract](/api/grpc/view-control#set-sas-window-state)

```python
async def set_sa_window_state(
        self,
        sa_window_state: WindowState,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Target Labels Use Full Names {/* #set-target-labels-use-full-names */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-target-labels-use-full-names) · [gRPC Contract](/api/grpc/view-control#set-target-labels-use-full-names)

```python
async def set_target_labels_use_full_names(
        self,
        *,
        use_full_names: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Toolkit Visibility {/* #set-toolkit-visibility */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-toolkit-visibility) · [gRPC Contract](/api/grpc/view-control#set-toolkit-visibility)

```python
async def set_toolkit_visibility(
        self,
        *,
        show_toolkit: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set View Clipping Plane {/* #set-view-clipping-plane */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-view-clipping-plane) · [gRPC Contract](/api/grpc/view-control#set-view-clipping-plane)

```python
async def set_view_clipping_plane(
        self,
        object: CollectionObjectName,
        *,
        remove_clipping_plane: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Working Color {/* #set-working-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-working-color) · [gRPC Contract](/api/grpc/view-control#set-working-color)

```python
async def set_working_color(
        self,
        new_working_color_name: Color,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Working Color Auto Increment {/* #set-working-color-auto-increment */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-working-color-auto-increment) · [gRPC Contract](/api/grpc/view-control#set-working-color-auto-increment)

```python
async def set_working_color_auto_increment(
        self,
        *,
        auto_increment: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show / Hide by Object Type {/* #show--hide-by-object-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-by-object-type) · [gRPC Contract](/api/grpc/view-control#show--hide-by-object-type)

```python
async def show_hide_by_object_type(
        self,
        *,
        all_collections: bool = False,
        specific_collection: CollectionName,
        object_type_to_show_hide: ObjectType = ObjectType.ANY,
        hide: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `hide` | False shows the objects. |

## Show / Hide Callout View {/* #show--hide-callout-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-callout-view) · [gRPC Contract](/api/grpc/view-control#show--hide-callout-view)

```python
async def show_hide_callout_view(
        self,
        callout_view_to_show: CollectionItemName,
        *,
        show_callout_view: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show / Hide Dimension {/* #show--hide-dimension */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-dimension) · [gRPC Contract](/api/grpc/view-control#show--hide-dimension)

```python
async def show_hide_dimension(
        self,
        dimension_name: CollectionItemName,
        *,
        show_dimension: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show / Hide Points {/* #show--hide-points */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-points) · [gRPC Contract](/api/grpc/view-control#show--hide-points)

```python
async def show_hide_points(
        self,
        point_names: Iterable[PointName],
        *,
        show: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `show` | False hides the points. |

## Show by Object Type {/* #show-by-object-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-by-object-type) · [gRPC Contract](/api/grpc/view-control#show-by-object-type)

```python
async def show_by_object_type(
        self,
        object_type_to_show: CollectionObjectName,
        *,
        all_collections: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Items in Tree {/* #show-items-in-tree */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-items-in-tree) · [gRPC Contract](/api/grpc/view-control#show-items-in-tree)

```python
async def show_items_in_tree(
        self,
        *,
        collapse_all_other_items: bool = True,
        points: Iterable[PointName],
        objects: Iterable[CollectionObjectName],
        instruments: Iterable[CollectionInstrumentId],
        feature_checks: Iterable[CollectionItemName],
        datums: Iterable[CollectionObjectName],
        collections: Iterable[str],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Labels {/* #show-labels */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-labels) · [gRPC Contract](/api/grpc/view-control#show-labels)

```python
async def show_labels(
        self,
        *,
        point_labels_on: bool = False,
        objects_labels_on: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Objects {/* #show-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-objects) · [gRPC Contract](/api/grpc/view-control#show-objects)

```python
async def show_objects(
        self,
        objects_to_show: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Annotations for Datums {/* #showhide-annotations-for-datums */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-annotations-for-datums) · [gRPC Contract](/api/grpc/view-control#showhide-annotations-for-datums)

```python
async def show_hide_annotations_for_datums(
        self,
        datum_name_list: Iterable[CollectionObjectName],
        *,
        show: bool = False,
        highlight: bool = False,
        set_inspection_view: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Annotations for Feature Checks {/* #showhide-annotations-for-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-annotations-for-feature-checks) · [gRPC Contract](/api/grpc/view-control#showhide-annotations-for-feature-checks)

```python
async def show_hide_annotations_for_feature_checks(
        self,
        feature_check_name_list: Iterable[CollectionItemName],
        *,
        show: bool = False,
        highlight: bool = False,
        set_inspection_view: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Inspection Bar {/* #showhide-inspection-bar */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-inspection-bar) · [gRPC Contract](/api/grpc/view-control#showhide-inspection-bar)

```python
async def show_hide_inspection_bar(
        self,
        *,
        show_inspection_bar: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Instrument Interface {/* #showhide-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instrument-interface) · [gRPC Contract](/api/grpc/view-control#showhide-instrument-interface)

```python
async def show_hide_instrument_interface(
        self,
        instrument_id: CollectionInstrumentId,
        *,
        minimize_interface: bool = False,
        hide_interface: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Instrument Probe Tip {/* #showhide-instrument-probe-tip */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instrument-probe-tip) · [gRPC Contract](/api/grpc/view-control#showhide-instrument-probe-tip)

```python
async def show_hide_instrument_probe_tip(
        self,
        *,
        show_instrument_probe_tip: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Instruments {/* #showhide-instruments */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instruments) · [gRPC Contract](/api/grpc/view-control#showhide-instruments)

```python
async def show_hide_instruments(
        self,
        instrument_i_ds: Iterable[CollectionInstrumentId],
        *,
        show_instruments: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Relationship Report {/* #showhide-relationship-report */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-relationship-report) · [gRPC Contract](/api/grpc/view-control#showhide-relationship-report)

```python
async def show_hide_relationship_report(
        self,
        collection_name: CollectionName,
        *,
        show_relationship_report: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Relationship Watch {/* #showhide-relationship-watch */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-relationship-watch) · [gRPC Contract](/api/grpc/view-control#showhide-relationship-watch)

```python
async def show_hide_relationship_watch(
        self,
        relationship_name: CollectionObjectName,
        *,
        show_relationship_watch: bool = False,
        relationship_watch_window_properties: CollectionObjectName,
        window_top_left_x_position: int = 0,
        window_top_left_y_position: int = 0,
        window_width: int = 0,
        window_height: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2026.1.0529.7)
