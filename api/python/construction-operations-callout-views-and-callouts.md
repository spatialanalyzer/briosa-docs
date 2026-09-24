---
title: Construction Operations / Callout Views and Callouts
description: Unreleased python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Callout Views and Callouts

[SA 2026.1.0529.7](/api/python/construction-operations-callout-views-and-callouts) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-callout-views-and-callouts)

This reference covers **SA 2026.1.0529.7**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Create Vector Callout {/* #create-vector-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-vector-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-vector-callout)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Min/Max Vector Group Callout {/* #create-minmax-vector-group-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-minmax-vector-group-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-minmax-vector-group-callout)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Point Callout {/* #create-point-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-point-callout)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `show_x` | MP qualifier: R. |
| `show_y` | MP qualifier: Theta. |
| `show_z` | MP qualifier: Phi. |
| `show_ux` | MP qualifier: Ur. |
| `show_uy` | MP qualifier: Utheta. |
| `show_uz` | MP qualifier: Uphi. |

## Create Point Comparison Callout {/* #create-point-comparison-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-comparison-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-point-comparison-callout)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Relationship Callout {/* #create-relationship-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-relationship-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-relationship-callout)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Picture Callout {/* #create-picture-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-picture-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-picture-callout)

```python
async def create_picture_callout(
        self,
        destination_callout_view: CollectionItemName,
        picture_name: CollectionItemName,
        *,
        view_x_position: float = 0.4,
        view_y_position: float = 0.6,
        scale_image_percent: int = 100,
        object_for_callout_anchor_point: CollectionItemName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Text Callout {/* #create-text-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-text-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-text-callout)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Callout View Ref List - WildCard Selection {/* #make-a-callout-view-ref-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#make-a-callout-view-ref-list---wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#make-a-callout-view-ref-list---wildcard-selection)

```python
async def make_callout_view_ref_list_wildcard_selection(
        self,
        *,
        collection_wildcard_criteria: str = "*",
        callout_view_wildcard_criteria: str = "*",
    ) -> list[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Default Callout View Properties {/* #set-default-callout-view-properties */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-default-callout-view-properties) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#set-default-callout-view-properties)

```python
async def set_default_callout_view_properties(
        self,
        *,
        default_callout_view_name: str = "Callout 1",
        properties: CalloutViewProperties | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Callout View Properties {/* #set-callout-view-properties */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-callout-view-properties) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#set-callout-view-properties)

```python
async def set_callout_view_properties(
        self,
        callout_views: Iterable[CollectionItemName],
        *,
        properties: CalloutViewProperties | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Callout View {/* #delete-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#delete-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#delete-callout-view)

```python
async def delete_callout_view(
        self,
        callout_view: CollectionItemName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Callout View {/* #rename-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#rename-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#rename-callout-view)

```python
async def rename_callout_view(
        self,
        original_callout_view_name: CollectionItemName,
        new_callout_view_name: CollectionItemName,
        *,
        overwrite_if_exists: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Arrange Callout View {/* #auto-arrange-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#auto-arrange-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#auto-arrange-callout-view)

```python
async def auto_arrange_callout_view(
        self,
        callout_view: CollectionItemName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Callouts in Callout View {/* #get-number-of-callouts-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#get-number-of-callouts-in-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#get-number-of-callouts-in-callout-view)

```python
async def get_number_of_callouts_in_callout_view(
        self,
        callout_view: CollectionItemName,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get I-th Callout Position in Callout View {/* #get-i-th-callout-position-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#get-i-th-callout-position-in-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#get-i-th-callout-position-in-callout-view)

```python
async def get_ith_callout_position_in_callout_view(
        self,
        callout_view: CollectionItemName,
        callout_view_index: int,
    ) -> CalloutPosition: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set I-th Callout Position in Callout View {/* #set-i-th-callout-position-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-i-th-callout-position-in-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#set-i-th-callout-position-in-callout-view)

```python
async def set_ith_callout_position_in_callout_view(
        self,
        callout_view: CollectionItemName,
        callout_view_index: int,
        x_position: int,
        y_position: int,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Callout Values {/* #shared-callout-values */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/62742ed39d1ce8508664c585c906948122e7517d/targets/2026.1.0529.7)
