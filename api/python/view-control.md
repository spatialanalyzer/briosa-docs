---
title: View Control
description: Next Briosa Python APIs for supported View Control MP commands.
toc_max_heading_level: 2
---

# View Control

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Auto-Scale

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Auto-Scale](/mp-command-catalog/commands/view-control#auto-scale) · [gRPC contract](/api/grpc/view-control#auto-scale)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def auto_scale(self) -> None: ...
```

```python
await briosa.auto_scale()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Center Graphics About Object(s)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Center Graphics About Object(s)](/mp-command-catalog/commands/view-control#center-graphics-about-objects) · [gRPC contract](/api/grpc/view-control#center-graphics-about-objects)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object_type` | `ObjectType` | `Object Type` | Any |
| `collection_wildcard_criteria` | `str` | `Collection Wildcard Criteria` | * |
| `object_wildcard_criteria` | `str` | `Object Wildcard Criteria` | * |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def center_graphics_about_objects(
    self,
    *,
    object_type: ObjectType = ObjectType.DEFAULT,
    collection_wildcard_criteria: str = "*",
    object_wildcard_criteria: str = "*",
) -> None: ...
```

```python
await briosa.center_graphics_about_objects()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Center Graphics About Point

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Center Graphics About Point](/mp-command-catalog/commands/view-control#center-graphics-about-point) · [gRPC contract](/api/grpc/view-control#center-graphics-about-point)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name` | `PointName` | `Point Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def center_graphics_about_point(
    self,
    point_name: PointName,
) -> None: ...
```

```python
await briosa.center_graphics_about_point(point_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Define point of view

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Define point of view](/mp-command-catalog/commands/view-control#define-point-of-view) · [gRPC contract](/api/grpc/view-control#define-point-of-view)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `view_name` | `ViewName` | `View Name` | Required |
| `rotation_x` | `float` | `Rotation (x)` | 0.000000 |
| `rotation_y` | `float` | `Rotation (y)` | 0.000000 |
| `rotation_z` | `float` | `Rotation (z)` | 0.000000 |
| `restore_zoom_settings` | `bool` | `Restore Zoom Settings?` | false |
| `scale_factor` | `float` | `Scale Factor` | 1.000000 |
| `origin_x` | `float` | `Origin (x)` | 0.000000 |
| `origin_y` | `float` | `Origin (y)` | 0.000000 |
| `restore_render_mode` | `bool` | `Restore Render Mode?` | false |
| `rendering_mode` | `RenderModeType` | `Rendering Mode` | Wireframe |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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
    rendering_mode: RenderModeType = RenderModeType.DEFAULT,
) -> None: ...
```

```python
await briosa.define_point_of_view(view_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Active Clipping Planes

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Active Clipping Planes](/mp-command-catalog/commands/view-control#get-active-clipping-planes) · [gRPC contract](/api/grpc/view-control#get-active-clipping-planes)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `objects` | `list[CollectionObjectName]` | `Objects` |

```python
async def get_active_clipping_planes(self) -> list[CollectionObjectName]: ...
```

```python
await briosa.get_active_clipping_planes()
```

Returns the MP output `Objects` directly as `list[CollectionObjectName]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get point of view parameters

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get point of view parameters](/mp-command-catalog/commands/view-control#get-point-of-view-parameters) · [gRPC contract](/api/grpc/view-control#get-point-of-view-parameters)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `view_name` | `ViewName` | `View Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `rotation_x` | `float` | `Rotation (x)` |
| `rotation_y` | `float` | `Rotation (y)` |
| `rotation_z` | `float` | `Rotation (z)` |
| `restore_zoom_settings` | `bool` | `Restore Zoom Settings?` |
| `scale_factor` | `float` | `Scale Factor` |
| `origin_x` | `float` | `Origin (x)` |
| `origin_y` | `float` | `Origin (y)` |
| `restore_render_mode` | `bool` | `Restore Render Mode?` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointOfViewParametersResult:
    rotation_x: float
    rotation_y: float
    rotation_z: float
    restore_zoom_settings: bool
    scale_factor: float
    origin_x: float
    origin_y: float
    restore_render_mode: bool

async def get_point_of_view_parameters(
    self,
    view_name: ViewName,
) -> GetPointOfViewParametersResult: ...
```

```python
await briosa.get_point_of_view_parameters(view_name=...)
```

Returns the 8 MP outputs in the named `GetPointOfViewParametersResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Hide All Callout Views

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Hide All Callout Views](/mp-command-catalog/commands/view-control#hide-all-callout-views) · [gRPC contract](/api/grpc/view-control#hide-all-callout-views)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def hide_all_callout_views(self) -> None: ...
```

```python
await briosa.hide_all_callout_views()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Hide Objects

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Hide Objects](/mp-command-catalog/commands/view-control#hide-objects) · [gRPC contract](/api/grpc/view-control#hide-objects)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects_to_hide` | `Iterable[CollectionObjectName]` | `Objects To Hide` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def hide_objects(
    self,
    objects_to_hide: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.hide_objects(objects_to_hide=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Highlight Objects

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Highlight Objects](/mp-command-catalog/commands/view-control#highlight-objects) · [gRPC contract](/api/grpc/view-control#highlight-objects)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object_names_empty_to_clear_all` | `Iterable[CollectionObjectName]` | `Object Names (Empty to clear all)` | Required |
| `high_light_objects` | `bool` | `HighLight Objects?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def highlight_objects(
    self,
    object_names_empty_to_clear_all: Iterable[CollectionObjectName],
    *,
    high_light_objects: bool = False,
) -> None: ...
```

```python
await briosa.highlight_objects(object_names_empty_to_clear_all=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Highlight Point

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Highlight Point](/mp-command-catalog/commands/view-control#highlight-point) · [gRPC contract](/api/grpc/view-control#highlight-point)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name_empty_to_clear_all` | `PointName` | `Point Name (Empty to clear all)` | Required |
| `show_point` | `bool` | `Show Point?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def highlight_point(
    self,
    point_name_empty_to_clear_all: PointName,
    *,
    show_point: bool = False,
) -> None: ...
```

```python
await briosa.highlight_point(point_name_empty_to_clear_all=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Highlight Relationships

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Highlight Relationships](/mp-command-catalog/commands/view-control#highlight-relationships) · [gRPC contract](/api/grpc/view-control#highlight-relationships)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships_empty_to_clear_all` | `Iterable[CollectionObjectName]` | `Relationships (Empty to clear all)` | Required |
| `high_light_relationships` | `bool` | `HighLight Relationships?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def highlight_relationships(
    self,
    relationships_empty_to_clear_all: Iterable[CollectionObjectName],
    *,
    high_light_relationships: bool = False,
) -> None: ...
```

```python
await briosa.highlight_relationships(relationships_empty_to_clear_all=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Load Ribbon Bar from XML File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Load Ribbon Bar from XML File](/mp-command-catalog/commands/view-control#load-ribbon-bar-from-xml-file) · [gRPC contract](/api/grpc/view-control#load-ribbon-bar-from-xml-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `file_path` | `FileReference` | `File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def load_ribbon_bar_from_xml_file(
    self,
    file_path: FileReference,
) -> None: ...
```

```python
await briosa.load_ribbon_bar_from_xml_file(file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Refresh Views

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Refresh Views](/mp-command-catalog/commands/view-control#refresh-views) · [gRPC contract](/api/grpc/view-control#refresh-views)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def refresh_views(self) -> None: ...
```

```python
await briosa.refresh_views()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Reset Ribbon Bar to Default

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Reset Ribbon Bar to Default](/mp-command-catalog/commands/view-control#reset-ribbon-bar-to-default) · [gRPC contract](/api/grpc/view-control#reset-ribbon-bar-to-default)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def reset_ribbon_bar_to_default(self) -> None: ...
```

```python
await briosa.reset_ribbon_bar_to_default()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Save point of view

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Save point of view](/mp-command-catalog/commands/view-control#save-point-of-view) · [gRPC contract](/api/grpc/view-control#save-point-of-view)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `view_name` | `ViewName` | `View Name` | Required |
| `restore_zoom_settings` | `bool` | `Restore Zoom Settings?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def save_point_of_view(
    self,
    view_name: ViewName,
    *,
    restore_zoom_settings: bool = True,
) -> None: ...
```

```python
await briosa.save_point_of_view(view_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Background Color

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Background Color](/mp-command-catalog/commands/view-control#set-background-color) · [gRPC contract](/api/grpc/view-control#set-background-color)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `solid_color_name` | `Color` | `Solid Color Name` | RGB 255, 0, 0 |
| `gradient_start_color_name` | `Color` | `Gradient Start Color Name` | RGB 255, 0, 0 |
| `gradient_end_color_name` | `Color` | `Gradient End Color Name` | RGB 255, 0, 0 |
| `highlight_color` | `Color` | `Highlight Color` | RGB 255, 0, 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_background_color(
    self,
    solid_color_name: Color,
    gradient_start_color_name: Color,
    gradient_end_color_name: Color,
    highlight_color: Color,
) -> None: ...
```

```python
await briosa.set_background_color()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set MP's Window State

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set MP's Window State](/mp-command-catalog/commands/view-control#set-mps-window-state) · [gRPC contract](/api/grpc/view-control#set-mps-window-state)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mp_window_state` | `WindowState` | `MP Window State` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_mp_window_state(
    self,
    mp_window_state: WindowState,
) -> None: ...
```

```python
await briosa.set_mp_window_state(mp_window_state=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Object(s) Color

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Object(s) Color](/mp-command-catalog/commands/view-control#set-objects-color) · [gRPC contract](/api/grpc/view-control#set-objects-color)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects_to_change` | `Iterable[CollectionObjectName]` | `Objects to change` | Required |
| `new_working_color_name` | `Color` | `New Working Color Name` | RGB 255, 0, 0 |
| `auto_increment` | `bool` | `Auto Increment` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_objects_color(
    self,
    objects_to_change: Iterable[CollectionObjectName],
    new_working_color_name: Color,
    *,
    auto_increment: bool = False,
) -> None: ...
```

```python
await briosa.set_objects_color(objects_to_change=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Object(s) Translucency

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Object(s) Translucency](/mp-command-catalog/commands/view-control#set-objects-translucency) · [gRPC contract](/api/grpc/view-control#set-objects-translucency)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects_to_change` | `Iterable[CollectionObjectName]` | `Objects to change` | Required |
| `rendering_type` | `TranslucencyType` | `Rendering Type` | Required |
| `opacity_value` | `float` | `Opacity Value` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_objects_translucency(
    self,
    objects_to_change: Iterable[CollectionObjectName],
    rendering_type: TranslucencyType,
    *,
    opacity_value: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_objects_translucency(objects_to_change=..., rendering_type=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set point of view

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set point of view](/mp-command-catalog/commands/view-control#set-point-of-view) · [gRPC contract](/api/grpc/view-control#set-point-of-view)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `view_name` | `ViewName` | `View Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_point_of_view(
    self,
    view_name: ViewName,
) -> None: ...
```

```python
await briosa.set_point_of_view(view_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Point of View from Frame

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Point of View from Frame](/mp-command-catalog/commands/view-control#set-point-of-view-from-frame) · [gRPC contract](/api/grpc/view-control#set-point-of-view-from-frame)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frame` | `CollectionObjectName` | `Frame` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_point_of_view_from_frame(
    self,
    frame: CollectionObjectName,
) -> None: ...
```

```python
await briosa.set_point_of_view_from_frame(frame=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Point of View from Instrument Updates

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Point of View from Instrument Updates](/mp-command-catalog/commands/view-control#set-point-of-view-from-instrument-updates) · [gRPC contract](/api/grpc/view-control#set-point-of-view-from-instrument-updates)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument_id` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| `display_view_control` | `bool` | `Display View Control` | true |
| `enable_set_viewpoint_from_instrument_updates` | `bool` | `Enable Set Viewpoint From Instrument Updates` | false |
| `update_view_percent` | `float` | `Update View Percent` | 75.000000 |
| `clip_behind_probe` | `bool` | `Clip Behind Probe` | false |
| `automatic_zoom_when_trapping` | `bool` | `Automatic Zoom When Trapping` | false |
| `enable_directional_cloud_points` | `bool` | `Enable Directional Cloud Points` | false |
| `angle_reset_threshold` | `float` | `Angle Reset Threshold` | 45.000000 |
| `animation_steps` | `int` | `Animation Steps` | 8 |
| `reference_frame_object` | `CollectionObjectName` | `Reference Frame Object` | Required |
| `use_scan_stripe_for_view_focus` | `bool` | `Use Scan Stripe for View Focus` | true |
| `zoom_factor` | `float` | `Zoom Factor` | 1.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```python
await briosa.set_point_of_view_from_instrument_updates(instrument_id=..., reference_frame_object=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Render Mode Type

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Render Mode Type](/mp-command-catalog/commands/view-control#set-render-mode-type) · [gRPC contract](/api/grpc/view-control#set-render-mode-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `rendering_mode` | `RenderModeType` | `Rendering Mode` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_render_mode_type(
    self,
    rendering_mode: RenderModeType,
) -> None: ...
```

```python
await briosa.set_render_mode_type(rendering_mode=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set SA's Window Pos

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set SA's Window Pos](/mp-command-catalog/commands/view-control#set-sas-window-pos) · [gRPC contract](/api/grpc/view-control#set-sas-window-pos)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pos_x` | `int` | `Pos X` | 0 |
| `pos_y` | `int` | `Pos Y` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_sa_window_pos(
    self,
    *,
    pos_x: int = 0,
    pos_y: int = 0,
) -> None: ...
```

```python
await briosa.set_sa_window_pos()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set SA's Window Size

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set SA's Window Size](/mp-command-catalog/commands/view-control#set-sas-window-size) · [gRPC contract](/api/grpc/view-control#set-sas-window-size)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `width` | `int` | `Width` | 0 |
| `height` | `int` | `Height` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_sa_window_size(
    self,
    *,
    width: int = 0,
    height: int = 0,
) -> None: ...
```

```python
await briosa.set_sa_window_size()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set SA's Window State

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set SA's Window State](/mp-command-catalog/commands/view-control#set-sas-window-state) · [gRPC contract](/api/grpc/view-control#set-sas-window-state)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sa_window_state` | `WindowState` | `SA Window State` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_sa_window_state(
    self,
    sa_window_state: WindowState,
) -> None: ...
```

```python
await briosa.set_sa_window_state(sa_window_state=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Target Labels Use Full Names

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Target Labels Use Full Names](/mp-command-catalog/commands/view-control#set-target-labels-use-full-names) · [gRPC contract](/api/grpc/view-control#set-target-labels-use-full-names)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `use_full_names` | `bool` | `Use Full Names?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_target_labels_use_full_names(
    self,
    *,
    use_full_names: bool = False,
) -> None: ...
```

```python
await briosa.set_target_labels_use_full_names()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Toolkit Visibility

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Toolkit Visibility](/mp-command-catalog/commands/view-control#set-toolkit-visibility) · [gRPC contract](/api/grpc/view-control#set-toolkit-visibility)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `show_toolkit` | `bool` | `Show Toolkit?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_toolkit_visibility(
    self,
    *,
    show_toolkit: bool = False,
) -> None: ...
```

```python
await briosa.set_toolkit_visibility()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set View Clipping Plane

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set View Clipping Plane](/mp-command-catalog/commands/view-control#set-view-clipping-plane) · [gRPC contract](/api/grpc/view-control#set-view-clipping-plane)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object` | `CollectionObjectName` | `Object` | Required |
| `remove_clipping_plane` | `bool` | `Remove Clipping Plane?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_view_clipping_plane(
    self,
    object: CollectionObjectName,
    *,
    remove_clipping_plane: bool = False,
) -> None: ...
```

```python
await briosa.set_view_clipping_plane(object=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Working Color

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Working Color](/mp-command-catalog/commands/view-control#set-working-color) · [gRPC contract](/api/grpc/view-control#set-working-color)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `new_working_color_name` | `Color` | `New Working Color Name` | RGB 255, 0, 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_working_color(
    self,
    new_working_color_name: Color,
) -> None: ...
```

```python
await briosa.set_working_color()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Working Color Auto Increment

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Working Color Auto Increment](/mp-command-catalog/commands/view-control#set-working-color-auto-increment) · [gRPC contract](/api/grpc/view-control#set-working-color-auto-increment)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `auto_increment` | `bool` | `Auto Increment` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_working_color_auto_increment(
    self,
    *,
    auto_increment: bool = False,
) -> None: ...
```

```python
await briosa.set_working_color_auto_increment()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show / Hide by Object Type

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show / Hide by Object Type](/mp-command-catalog/commands/view-control#show--hide-by-object-type) · [gRPC contract](/api/grpc/view-control#show--hide-by-object-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `all_collections` | `bool` | `All Collections?` | false |
| `specific_collection` | `CollectionName` | `Specific Collection` | Required |
| `object_type_to_show_hide` | `ObjectType` | `Object Type To Show / Hide` | Any |
| `hide_show_false` | `bool` | `Hide? (Show = FALSE)` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_hide_by_object_type(
    self,
    *,
    all_collections: bool = False,
    specific_collection: CollectionName,
    object_type_to_show_hide: ObjectType = ObjectType.DEFAULT,
    hide_show_false: bool = True,
) -> None: ...
```

```python
await briosa.show_hide_by_object_type(specific_collection=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show / Hide Callout View

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show / Hide Callout View](/mp-command-catalog/commands/view-control#show--hide-callout-view) · [gRPC contract](/api/grpc/view-control#show--hide-callout-view)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `callout_view_to_show` | `CollectionObjectName` | `Callout View To Show` | Required |
| `show_callout_view` | `bool` | `Show Callout View?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_hide_callout_view(
    self,
    callout_view_to_show: CollectionObjectName,
    *,
    show_callout_view: bool = True,
) -> None: ...
```

```python
await briosa.show_hide_callout_view(callout_view_to_show=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show / Hide Dimension

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show / Hide Dimension](/mp-command-catalog/commands/view-control#show--hide-dimension) · [gRPC contract](/api/grpc/view-control#show--hide-dimension)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimension_name` | `CollectionObjectName` | `Dimension Name` | Required |
| `show_dimension` | `bool` | `Show Dimension?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_hide_dimension(
    self,
    dimension_name: CollectionObjectName,
    *,
    show_dimension: bool = True,
) -> None: ...
```

```python
await briosa.show_hide_dimension(dimension_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show / Hide Points

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show / Hide Points](/mp-command-catalog/commands/view-control#show--hide-points) · [gRPC contract](/api/grpc/view-control#show--hide-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_names` | `Iterable[PointName]` | `Point Names` | Required |
| `show_hide_false` | `bool` | `Show? (Hide = FALSE)` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_hide_points(
    self,
    point_names: Iterable[PointName],
    *,
    show_hide_false: bool = False,
) -> None: ...
```

```python
await briosa.show_hide_points(point_names=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show by Object Type

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show by Object Type](/mp-command-catalog/commands/view-control#show-by-object-type) · [gRPC contract](/api/grpc/view-control#show-by-object-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object_type_to_show` | `CollectionObjectName` | `Object Type To Show` | Required |
| `all_collections` | `bool` | `All Collections?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_by_object_type(
    self,
    object_type_to_show: CollectionObjectName,
    *,
    all_collections: bool = False,
) -> None: ...
```

```python
await briosa.show_by_object_type(object_type_to_show=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show Items in Tree

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show Items in Tree](/mp-command-catalog/commands/view-control#show-items-in-tree) · [gRPC contract](/api/grpc/view-control#show-items-in-tree)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collapse_all_other_items` | `bool` | `Collapse all other Items?` | true |
| `points` | `Iterable[PointName]` | `Points` | Required |
| `objects` | `Iterable[CollectionObjectName]` | `Objects` | Required |
| `instruments` | `Iterable[CollectionInstrumentId]` | `Instruments` | Required |
| `feature_checks` | `Iterable[CollectionObjectName]` | `Feature Checks` | Required |
| `datums` | `Iterable[CollectionObjectName]` | `Datums` | Required |
| `collections` | `Iterable[str]` | `Collections` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_items_in_tree(
    self,
    *,
    collapse_all_other_items: bool = True,
    points: Iterable[PointName],
    objects: Iterable[CollectionObjectName],
    instruments: Iterable[CollectionInstrumentId],
    feature_checks: Iterable[CollectionObjectName],
    datums: Iterable[CollectionObjectName],
    collections: Iterable[str],
) -> None: ...
```

```python
await briosa.show_items_in_tree(points=..., objects=..., instruments=..., feature_checks=..., datums=..., collections=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show Labels

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show Labels](/mp-command-catalog/commands/view-control#show-labels) · [gRPC contract](/api/grpc/view-control#show-labels)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_labels_on` | `bool` | `Point Labels On?` | false |
| `objects_labels_on` | `bool` | `Objects Labels On?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_labels(
    self,
    *,
    point_labels_on: bool = False,
    objects_labels_on: bool = False,
) -> None: ...
```

```python
await briosa.show_labels()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show Objects

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show Objects](/mp-command-catalog/commands/view-control#show-objects) · [gRPC contract](/api/grpc/view-control#show-objects)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects_to_show` | `Iterable[CollectionObjectName]` | `Objects To Show` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_objects(
    self,
    objects_to_show: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.show_objects(objects_to_show=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show/Hide Annotations for Datums

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show/Hide Annotations for Datums](/mp-command-catalog/commands/view-control#showhide-annotations-for-datums) · [gRPC contract](/api/grpc/view-control#showhide-annotations-for-datums)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `datum_name_list` | `Iterable[CollectionObjectName]` | `Datum Name List` | Required |
| `show` | `bool` | `Show?` | false |
| `highlight` | `bool` | `Highlight?` | false |
| `set_inspection_view` | `bool` | `Set Inspection View?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```python
await briosa.show_hide_annotations_for_datums(datum_name_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show/Hide Annotations for Feature Checks

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show/Hide Annotations for Feature Checks](/mp-command-catalog/commands/view-control#showhide-annotations-for-feature-checks) · [gRPC contract](/api/grpc/view-control#showhide-annotations-for-feature-checks)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `feature_check_name_list` | `Iterable[CollectionObjectName]` | `Feature Check Name List` | Required |
| `show` | `bool` | `Show?` | false |
| `highlight` | `bool` | `Highlight?` | false |
| `set_inspection_view` | `bool` | `Set Inspection View?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_hide_annotations_for_feature_checks(
    self,
    feature_check_name_list: Iterable[CollectionObjectName],
    *,
    show: bool = False,
    highlight: bool = False,
    set_inspection_view: bool = False,
) -> None: ...
```

```python
await briosa.show_hide_annotations_for_feature_checks(feature_check_name_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show/Hide Inspection Bar

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show/Hide Inspection Bar](/mp-command-catalog/commands/view-control#showhide-inspection-bar) · [gRPC contract](/api/grpc/view-control#showhide-inspection-bar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `show_inspection_bar` | `bool` | `Show Inspection Bar?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_hide_inspection_bar(
    self,
    *,
    show_inspection_bar: bool = True,
) -> None: ...
```

```python
await briosa.show_hide_inspection_bar()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show/Hide Instrument Interface

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show/Hide Instrument Interface](/mp-command-catalog/commands/view-control#showhide-instrument-interface) · [gRPC contract](/api/grpc/view-control#showhide-instrument-interface)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument_id` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| `minimize_interface` | `bool` | `Minimize Interface?` | false |
| `hide_interface` | `bool` | `Hide Interface?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_hide_instrument_interface(
    self,
    instrument_id: CollectionInstrumentId,
    *,
    minimize_interface: bool = False,
    hide_interface: bool = False,
) -> None: ...
```

```python
await briosa.show_hide_instrument_interface(instrument_id=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show/Hide Instrument Probe Tip

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show/Hide Instrument Probe Tip](/mp-command-catalog/commands/view-control#showhide-instrument-probe-tip) · [gRPC contract](/api/grpc/view-control#showhide-instrument-probe-tip)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `show_instrument_probe_tip` | `bool` | `Show Instrument Probe Tip?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_hide_instrument_probe_tip(
    self,
    *,
    show_instrument_probe_tip: bool = False,
) -> None: ...
```

```python
await briosa.show_hide_instrument_probe_tip()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show/Hide Instruments

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show/Hide Instruments](/mp-command-catalog/commands/view-control#showhide-instruments) · [gRPC contract](/api/grpc/view-control#showhide-instruments)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument_i_ds` | `Iterable[CollectionInstrumentId]` | `Instrument IDs` | Required |
| `show_instruments` | `bool` | `Show Instruments?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_hide_instruments(
    self,
    instrument_i_ds: Iterable[CollectionInstrumentId],
    *,
    show_instruments: bool = False,
) -> None: ...
```

```python
await briosa.show_hide_instruments(instrument_i_ds=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show/Hide Relationship Report

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show/Hide Relationship Report](/mp-command-catalog/commands/view-control#showhide-relationship-report) · [gRPC contract](/api/grpc/view-control#showhide-relationship-report)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection_name` | `CollectionName` | `Collection Name` | Required |
| `show_relationship_report` | `bool` | `Show Relationship Report` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_hide_relationship_report(
    self,
    collection_name: CollectionName,
    *,
    show_relationship_report: bool = False,
) -> None: ...
```

```python
await briosa.show_hide_relationship_report(collection_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show/Hide Relationship Watch

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show/Hide Relationship Watch](/mp-command-catalog/commands/view-control#showhide-relationship-watch) · [gRPC contract](/api/grpc/view-control#showhide-relationship-watch)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `show_relationship_watch` | `bool` | `Show Relationship Watch` | false |
| `relationship_watch_window_properties` | `CollectionObjectName` | `Relationship Watch Window Properties` | Required |
| `window_top_left_x_position` | `int` | `Window Top Left X Position` | 0 |
| `window_top_left_y_position` | `int` | `Window Top Left Y Position` | 0 |
| `window_width` | `int` | `Window Width` | 0 |
| `window_height` | `int` | `Window Height` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```python
await briosa.show_hide_relationship_watch(relationship_name=..., relationship_watch_window_properties=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
