---
title: Construction Operations / Callout Views and Callouts
description: Unreleased Briosa Python APIs for selected callout-view MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Callout Views and Callouts

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## Shared Callout Values

```python
@dataclass(frozen=True, slots=True)
class Font:
    font_name: str = "MS Shell Dlg"
    size: int = 8
    color: Color = Color(0, 0, 0)


@dataclass(frozen=True, slots=True)
class CalloutViewProperties:
    lock_view_point: bool = False
    recall_working_frame: bool = False
    recall_visible_layer: bool = False
    callout_leader_thickness: int = 2
    callout_leader_color: Color = Color(128, 128, 128)
    callout_border_thickness: int = 2
    callout_border_color: Color = Color(0, 0, 255)
    divide_text_with_lines: bool = False
    font: Font = Font()


@dataclass(frozen=True, slots=True)
class CalloutPosition:
    x_position: int
    y_position: int
    x_anchor_position: int
    y_anchor_position: int
    callout_width: int
    callout_height: int
```

## Create Vector Callout

```python
async def create_vector_callout(
    self,
    destination_callout_view: CollectionItemName,
    vector_group_name: CollectionObjectName,
    vector_name: str,
    *,
    view_x_position: float = 0.0,
    view_y_position: float = 0.0,
    show_collection: bool = False,
    show_vector_group: bool = False,
    show_vector_name: bool = True,
    show_dx: bool = True,
    show_dy: bool = True,
    show_dz: bool = True,
    show_d_mag: bool = True,
    show_tolerance_color: bool = True,
    show_out_of_tolerance_value: bool = False,
    show_tolerance_range: bool = False,
    show_vector_color: bool = False,
    show_start_point: bool = False,
    show_end_point: bool = False,
    show_units: bool = False,
    additional_notes: Iterable[str] | None = None,
    attach_callout_to_end_point: bool = False,
    use_default_placement: bool = False,
) -> None: ...
```

[Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-vector-callout) · [gRPC](/api/grpc/construction-operations-callout-views-and-callouts#create-vector-callout)

## Create Min/Max Vector Group Callout

```python
async def create_min_max_vector_group_callout(
    self,
    destination_callout_view: CollectionItemName,
    vector_group_name: CollectionObjectName,
    *,
    number_of_vectors_with_highest_mag: int = 1,
    number_of_vectors_with_lowest_mag: int = 1,
    show_collection: bool = False,
    show_vector_group: bool = False,
    show_vector_name: bool = True,
    show_dx: bool = False,
    show_dy: bool = False,
    show_dz: bool = False,
    show_d_mag: bool = True,
    show_tolerance_color: bool = True,
    tolerance_color_blue_green_red: bool = False,
    show_out_of_tolerance_value: bool = True,
    show_tolerance_range: bool = False,
    show_vector_color: bool = True,
    show_start_point: bool = False,
    show_end_point: bool = False,
    show_units: bool = False,
    attach_callout_to_end_point: bool = True,
    use_default_placement: bool = False,
) -> None: ...
```

## Create Point Callout

```python
async def create_point_callout(
    self,
    destination_callout_view: CollectionItemName,
    point: PointName,
    *,
    view_x_position: float = 0.0,
    view_y_position: float = 0.0,
    show_point_collection: bool = False,
    show_point_group: bool = True,
    show_point_target: bool = True,
    show_x: bool = True,
    show_y: bool = True,
    show_z: bool = True,
    show_units: bool = False,
    show_ux: bool = False,
    show_uy: bool = False,
    show_uz: bool = False,
    show_u_mag: bool = False,
    desired_coordinate_system: CoordinateSystemType = CoordinateSystemType.CARTESIAN,
    notes: Iterable[str] | None = None,
    use_default_placement: bool = False,
) -> None: ...
```

## Create Point Comparison Callout

```python
async def create_point_comparison_callout(
    self,
    destination_callout_view: CollectionItemName,
    first_point: PointName,
    second_point: PointName,
    *,
    view_x_position: float = 0.0,
    view_y_position: float = 0.0,
    show_first_point_collection: bool = False,
    show_first_point_group: bool = True,
    show_first_point_target: bool = True,
    show_first_point_coordinates: bool = False,
    show_second_point_collection: bool = False,
    show_second_point_group: bool = True,
    show_second_point_target: bool = True,
    show_second_point_coordinates: bool = False,
    show_dx: bool = True,
    show_dy: bool = True,
    show_dz: bool = True,
    show_d_mag: bool = True,
    additional_x_comments: str | None = None,
    additional_y_comments: str | None = None,
    additional_z_comments: str | None = None,
    additional_notes: Iterable[str] | None = None,
    use_default_placement: bool = False,
) -> None: ...
```

## Create Relationship Callout

```python
async def create_relationship_callout(
    self,
    destination_callout_view: CollectionItemName,
    relationship_name: CollectionItemName,
    *,
    view_x_position: float = 0.0,
    view_y_position: float = 0.0,
    additional_notes: Iterable[str] | None = None,
) -> None: ...
```

## Create Picture Callout

```python
async def create_picture_callout(
    self,
    destination_callout_view: CollectionItemName,
    picture_name: CollectionItemName,
    *,
    view_x_position: float = 0.4,
    view_y_position: float = 0.6,
    scale_image_percent: int = 100,
    object_for_callout_anchor_point: CollectionObjectName | None = None,
) -> None: ...
```

`scale_image_percent` must be 10–200.

## Create Text Callout

```python
async def create_text_callout(
    self,
    destination_callout_view: CollectionItemName,
    text: Iterable[str],
    *,
    view_x_position: float = 0.4,
    view_y_position: float = 0.6,
    callout_anchor_point: PointName | None = None,
) -> None: ...
```

## Make a Callout View Ref List - WildCard Selection

```python
async def make_callout_view_ref_list_wildcard_selection(
    self,
    *,
    collection_wildcard_criteria: str = "*",
    callout_view_wildcard_criteria: str = "*",
) -> list[CollectionItemName]: ...
```

This queries live SA state and returns ordinary callout-view identities.

## Set Default Callout View Properties

```python
async def set_default_callout_view_properties(
    self,
    *,
    default_callout_view_name: str = "Callout 1",
    properties: CalloutViewProperties | None = None,
) -> None: ...
```

`None` applies the shared property defaults.

## Set Callout View Properties

```python
async def set_callout_view_properties(
    self,
    callout_views: Iterable[CollectionItemName],
    *,
    properties: CalloutViewProperties | None = None,
) -> None: ...
```

The list must not be empty. The exact-target list binding remains At Risk.

## Delete Callout View

```python
async def delete_callout_view(
    self,
    callout_view: CollectionItemName,
) -> None: ...
```

This destructive operation is never replayed automatically.

## Rename Callout View

```python
async def rename_callout_view(
    self,
    original_callout_view_name: CollectionItemName,
    new_callout_view_name: CollectionItemName,
    *,
    overwrite_if_exists: bool = False,
) -> None: ...
```

## Auto Arrange Callout View

```python
async def auto_arrange_callout_view(
    self,
    callout_view: CollectionItemName,
) -> None: ...
```

## Get Number of Callouts in Callout View

```python
async def get_number_of_callouts_in_callout_view(
    self,
    callout_view: CollectionItemName,
) -> int: ...
```

## Get I-th Callout Position in Callout View

```python
async def get_ith_callout_position_in_callout_view(
    self,
    callout_view: CollectionItemName,
    callout_view_index: int,
) -> CalloutPosition: ...
```

## Set I-th Callout Position in Callout View

```python
async def set_ith_callout_position_in_callout_view(
    self,
    callout_view: CollectionItemName,
    callout_view_index: int,
    x_position: int,
    y_position: int,
) -> None: ...
```

Both index-based methods reject a negative, zero-based index.
