---
title: File Operations
description: Next Briosa Python APIs for supported File Operations MP commands.
toc_max_heading_level: 2
---

# File Operations

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Backup Now

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Backup Now](/mp-command-catalog/commands/file-operations#backup-now) · [gRPC contract](/api/grpc/file-operations#backup-now)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def backup_now(self) -> None: ...
```

```python
await briosa.backup_now()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Copy General File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Copy General File](/mp-command-catalog/commands/file-operations#copy-general-file) · [gRPC contract](/api/grpc/file-operations#copy-general-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `source_file_name` | `FileReference` | `Source File Name` | Required |
| `destination_file_name` | `FileReference` | `Destination File Name` | Required |
| `overwrite` | `bool` | `Overwrite?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def copy_general_file(
    self,
    source_file_name: FileReference,
    destination_file_name: FileReference,
    *,
    overwrite: bool = False,
) -> None: ...
```

```python
await briosa.copy_general_file(source_file_name=..., destination_file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete General File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete General File](/mp-command-catalog/commands/file-operations#delete-general-file) · [gRPC contract](/api/grpc/file-operations#delete-general-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `file_name` | `FileReference` | `File Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_general_file(
    self,
    file_name: FileReference,
) -> None: ...
```

```python
await briosa.delete_general_file(file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Direct CAD Access

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Direct CAD Access](/mp-command-catalog/commands/file-operations#direct-cad-access) · [gRPC contract](/api/grpc/file-operations#direct-cad-access)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cad_file_name` | `FileReference` | `CAD File Name` | Required |
| `import_solids` | `bool` | `Import Solids` | true |
| `import_surfaces` | `bool` | `Import Surfaces` | true |
| `import_polygonized_surfaces` | `bool` | `Import Polygonized Surfaces` | true |
| `import_annotations` | `bool` | `Import Annotations` | true |
| `import_vectors` | `bool` | `Import Vectors` | true |
| `import_points` | `bool` | `Import Points` | true |
| `point_group_name` | `str` | `Point Group Name` | CAD pts |
| `import_attributes_metadata` | `bool` | `Import Attributes/Metadata` | true |
| `import_cooordinate_frames` | `bool` | `Import Cooordinate Frames` | true |
| `import_planes` | `bool` | `Import Planes` | true |
| `import_3d_curves_lines` | `bool` | `Import 3D Curves - Lines` | true |
| `import_3d_curves_circles` | `bool` | `Import 3D Curves - Circles` | true |
| `import_3d_curves_general_curves` | `bool` | `Import 3D Curves - General Curves` | true |
| `import_construction_geometry` | `bool` | `Import Construction Geometry` | false |
| `import_hidden_entities` | `bool` | `Import Hidden Entities` | false |
| `import_all_surfaces_as_mesh_graphical_entities` | `bool` | `Import all Surfaces as Mesh Graphical Entities` | false |
| `do_not_import_fillets` | `bool` | `Do Not Import Fillets` | false |
| `do_not_import_dittos` | `bool` | `Do Not Import Dittos` | false |
| `ditto_threshold` | `int` | `Ditto Threshold` | 1 |
| `center_view_on_imported_objects` | `bool` | `Center View on Imported Objects` | true |
| `import_into_folders_matching_cad_file_hierarchy` | `bool` | `Import into Folders matching CAD file hierarchy` | false |
| `remove_empty_folders` | `bool` | `Remove Empty Folders` | true |
| `surface_normals_mode_1_or_2` | `int` | `Surface Normals Mode (1 or 2)` | 1 |
| `prompt_on_missing_components` | `bool` | `Prompt on Missing Components` | true |
| `selective_import` | `bool` | `Selective Import` | false |
| `surface_compatibility_mode` | `bool` | `Surface Compatibility Mode` | true |
| `explode_surfaces` | `bool` | `Explode Surfaces` | false |
| `cad_file_units_leave_blank_to_use_the_units_specified_in_the_file` | `str` | `CAD File Units (leave blank to use the units specified in the file)` | Empty |
| `build_callout_views` | `bool` | `Build Callout Views` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `import_warnings` | `bool` | `Import Warnings` |
| `import_warning_messages` | `str` | `Import Warning Messages` |
| `extents_min` | `Vector` | `Extents Min` |
| `extents_max` | `Vector` | `Extents Max` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class DirectCadAccessResult:
    import_warnings: bool
    import_warning_messages: str
    extents_min: Vector
    extents_max: Vector

async def direct_cad_access(
    self,
    cad_file_name: FileReference,
    *,
    import_solids: bool = True,
    import_surfaces: bool = True,
    import_polygonized_surfaces: bool = True,
    import_annotations: bool = True,
    import_vectors: bool = True,
    import_points: bool = True,
    point_group_name: str = "CAD pts",
    import_attributes_metadata: bool = True,
    import_cooordinate_frames: bool = True,
    import_planes: bool = True,
    import_3d_curves_lines: bool = True,
    import_3d_curves_circles: bool = True,
    import_3d_curves_general_curves: bool = True,
    import_construction_geometry: bool = False,
    import_hidden_entities: bool = False,
    import_all_surfaces_as_mesh_graphical_entities: bool = False,
    do_not_import_fillets: bool = False,
    do_not_import_dittos: bool = False,
    ditto_threshold: int = 1,
    center_view_on_imported_objects: bool = True,
    import_into_folders_matching_cad_file_hierarchy: bool = False,
    remove_empty_folders: bool = True,
    surface_normals_mode_1_or_2: int = 1,
    prompt_on_missing_components: bool = True,
    selective_import: bool = False,
    surface_compatibility_mode: bool = True,
    explode_surfaces: bool = False,
    cad_file_units_leave_blank_to_use_the_units_specified_in_the_file: str = '',
    build_callout_views: bool = True,
) -> DirectCadAccessResult: ...
```

```python
await briosa.direct_cad_access(cad_file_name=...)
```

Returns the 4 MP outputs in the named `DirectCadAccessResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export ASCII Frame Set

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export ASCII Frame Set](/mp-command-catalog/commands/file-operations#export-ascii-frame-set) · [gRPC contract](/api/grpc/file-operations#export-ascii-frame-set)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| `frame_set_container` | `CollectionObjectName` | `Frame Set Container` | Required |
| `data_delimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `file_format` | `AsciiFileFormat` | `File Format` | Required |
| `include_export_format_info` | `bool` | `Include Export Format Info?` | false |
| `decimal_precision` | `int` | `Decimal Precision` | 6 |
| `append` | `bool` | `Append?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_ascii_frame_set(
    self,
    ascii_file_path: FileReference,
    frame_set_container: CollectionObjectName,
    data_delimiter: ExportDataDelimeterType,
    file_format: AsciiFileFormat,
    *,
    include_export_format_info: bool = False,
    decimal_precision: int = 6,
    append: bool = False,
) -> None: ...
```

```python
await briosa.export_ascii_frame_set(ascii_file_path=..., frame_set_container=..., data_delimiter=..., file_format=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export ASCII Frames

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export ASCII Frames](/mp-command-catalog/commands/file-operations#export-ascii-frames) · [gRPC contract](/api/grpc/file-operations#export-ascii-frames)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| `object_list` | `Iterable[CollectionObjectName]` | `Object List` | Required |
| `export_frame_mode` | `str` | `Export Frame Mode` | Fixed XYZ |
| `overwrite_existing_file` | `bool` | `Overwrite existing file?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_ascii_frames(
    self,
    ascii_file_path: FileReference,
    object_list: Iterable[CollectionObjectName],
    *,
    export_frame_mode: str = "Fixed XYZ",
    overwrite_existing_file: bool = False,
) -> None: ...
```

```python
await briosa.export_ascii_frames(ascii_file_path=..., object_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export ASCII Point Clouds

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export ASCII Point Clouds](/mp-command-catalog/commands/file-operations#export-ascii-point-clouds) · [gRPC contract](/api/grpc/file-operations#export-ascii-point-clouds)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| `point_cloud_list` | `Iterable[CollectionObjectName]` | `Point Cloud List` | Required |
| `data_delimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `overwrite_existing_file` | `bool` | `Overwrite existing file?` | false |
| `show_progress_dialog` | `bool` | `Show Progress Dialog?` | false |
| `include_cloud_point_labeling` | `bool` | `Include Cloud Point Labeling?` | false |
| `include_scan_direction_vector` | `bool` | `Include Scan Direction Vector?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_ascii_point_clouds(
    self,
    ascii_file_path: FileReference,
    point_cloud_list: Iterable[CollectionObjectName],
    data_delimiter: ExportDataDelimeterType,
    *,
    overwrite_existing_file: bool = False,
    show_progress_dialog: bool = False,
    include_cloud_point_labeling: bool = False,
    include_scan_direction_vector: bool = False,
) -> None: ...
```

```python
await briosa.export_ascii_point_clouds(ascii_file_path=..., point_cloud_list=..., data_delimiter=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export ASCII Point Set

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export ASCII Point Set](/mp-command-catalog/commands/file-operations#export-ascii-point-set) · [gRPC contract](/api/grpc/file-operations#export-ascii-point-set)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| `point_set_container` | `CollectionObjectName` | `Point Set Container` | Required |
| `data_delimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `target_name_format` | `ExportTargetNameFormat` | `Target Name Format` | Required |
| `desired_coordinate_system` | `CoordinateSystemType` | `Desired Coordinate System` | Required |
| `include_target_offsets` | `bool` | `Include Target Offsets?` | false |
| `include_timestamps` | `bool` | `Include Timestamps?` | false |
| `include_sa_version_and_frame_comments` | `bool` | `Include SA version and frame comments?` | false |
| `include_axis_comments` | `bool` | `Include Axis Comments?` | false |
| `include_export_format_info` | `bool` | `Include Export Format Info?` | false |
| `maximum_precision_scientific_notation` | `bool` | `Maximum Precision (Scientific Notation)?` | false |
| `decimal_precision` | `int` | `Decimal Precision` | 6 |
| `append` | `bool` | `Append?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_ascii_point_set(
    self,
    ascii_file_path: FileReference,
    point_set_container: CollectionObjectName,
    data_delimiter: ExportDataDelimeterType,
    target_name_format: ExportTargetNameFormat,
    desired_coordinate_system: CoordinateSystemType,
    *,
    include_target_offsets: bool = False,
    include_timestamps: bool = False,
    include_sa_version_and_frame_comments: bool = False,
    include_axis_comments: bool = False,
    include_export_format_info: bool = False,
    maximum_precision_scientific_notation: bool = False,
    decimal_precision: int = 6,
    append: bool = False,
) -> None: ...
```

```python
await briosa.export_ascii_point_set(ascii_file_path=..., point_set_container=..., data_delimiter=..., target_name_format=..., desired_coordinate_system=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export ASCII Points

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export ASCII Points](/mp-command-catalog/commands/file-operations#export-ascii-points) · [gRPC contract](/api/grpc/file-operations#export-ascii-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| `group_names_to_export` | `Iterable[CollectionGroupName]` | `Group Names to export` | Required |
| `data_delimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `target_name_format` | `ExportTargetNameFormat` | `Target Name Format` | Required |
| `desired_coordinate_system` | `CoordinateSystemType` | `Desired Coordinate System` | Required |
| `include_target_offsets` | `bool` | `Include Target Offsets?` | false |
| `include_target_comments` | `bool` | `Include Target Comments?` | false |
| `include_timestamps` | `bool` | `Include Timestamps?` | false |
| `include_tolerances` | `bool` | `Include Tolerances?` | false |
| `include_coordinate_uncertainties` | `bool` | `Include Coordinate Uncertainties?` | false |
| `include_sa_version_and_frame_comments` | `bool` | `Include SA version and frame comments?` | false |
| `include_axis_comments` | `bool` | `Include Axis Comments?` | false |
| `include_export_format_info` | `bool` | `Include Export Format Info?` | false |
| `include_weights` | `bool` | `Include Weights?` | false |
| `include_measurement_details` | `bool` | `Include Measurement Details?` | false |
| `maximum_precision_scientific_notation` | `bool` | `Maximum Precision (Scientific Notation)?` | false |
| `decimal_precision` | `int` | `Decimal Precision` | 6 |
| `append` | `bool` | `Append?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_ascii_points(
    self,
    ascii_file_path: FileReference,
    group_names_to_export: Iterable[CollectionGroupName],
    data_delimiter: ExportDataDelimeterType,
    target_name_format: ExportTargetNameFormat,
    desired_coordinate_system: CoordinateSystemType,
    *,
    include_target_offsets: bool = False,
    include_target_comments: bool = False,
    include_timestamps: bool = False,
    include_tolerances: bool = False,
    include_coordinate_uncertainties: bool = False,
    include_sa_version_and_frame_comments: bool = False,
    include_axis_comments: bool = False,
    include_export_format_info: bool = False,
    include_weights: bool = False,
    include_measurement_details: bool = False,
    maximum_precision_scientific_notation: bool = False,
    decimal_precision: int = 6,
    append: bool = False,
) -> None: ...
```

```python
await briosa.export_ascii_points(ascii_file_path=..., group_names_to_export=..., data_delimiter=..., target_name_format=..., desired_coordinate_system=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export DXF

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export DXF](/mp-command-catalog/commands/file-operations#export-dxf) · [gRPC contract](/api/grpc/file-operations#export-dxf)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dxf_file_path` | `FileReference` | `DXF File Path` | Required |
| `point_names` | `Iterable[PointName]` | `Point Names` | Required |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `include_point_labels` | `bool` | `Include Point Labels?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_dxf(
    self,
    dxf_file_path: FileReference,
    point_names: Iterable[PointName],
    cloud_names: Iterable[CollectionObjectName],
    *,
    include_point_labels: bool = True,
) -> None: ...
```

```python
await briosa.export_dxf(dxf_file_path=..., point_names=..., cloud_names=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export Embedded File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export Embedded File](/mp-command-catalog/commands/file-operations#export-embedded-file) · [gRPC contract](/api/grpc/file-operations#export-embedded-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `embedded_file_collection_name` | `CollectionName` | `Embedded File Collection Name` | Required |
| `embedded_file_name` | `str` | `Embedded File Name` | Empty |
| `external_file_name` | `FileReference` | `External File Name` | Required |
| `replace_existing` | `bool` | `Replace Existing?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_embedded_file(
    self,
    embedded_file_collection_name: CollectionName,
    *,
    embedded_file_name: str = '',
    external_file_name: FileReference,
    replace_existing: bool = False,
) -> None: ...
```

```python
await briosa.export_embedded_file(embedded_file_collection_name=..., external_file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export Hidden Point Bar XML File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export Hidden Point Bar XML File](/mp-command-catalog/commands/file-operations#export-hidden-point-bar-xml-file) · [gRPC contract](/api/grpc/file-operations#export-hidden-point-bar-xml-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `xml_file_path` | `FileReference` | `XML File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_hidden_point_bar_xml_file(
    self,
    xml_file_path: FileReference,
) -> None: ...
```

```python
await briosa.export_hidden_point_bar_xml_file(xml_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export IGES File  - Entire Model

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export IGES File  - Entire Model](/mp-command-catalog/commands/file-operations#export-iges-file----entire-model) · [gRPC contract](/api/grpc/file-operations#export-iges-file----entire-model)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `iges_file_path` | `FileReference` | `IGES File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_iges_file_entire_model(
    self,
    iges_file_path: FileReference,
) -> None: ...
```

```python
await briosa.export_iges_file_entire_model(iges_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export IGES File - Partial Model

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export IGES File - Partial Model](/mp-command-catalog/commands/file-operations#export-iges-file---partial-model) · [gRPC contract](/api/grpc/file-operations#export-iges-file---partial-model)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `iges_file_path` | `FileReference` | `IGES File Path` | Required |
| `object_name_list` | `Iterable[CollectionObjectName]` | `Object Name List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_iges_file_partial_model(
    self,
    iges_file_path: FileReference,
    object_name_list: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.export_iges_file_partial_model(iges_file_path=..., object_name_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export PTX Point Clouds

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export PTX Point Clouds](/mp-command-catalog/commands/file-operations#export-ptx-point-clouds) · [gRPC contract](/api/grpc/file-operations#export-ptx-point-clouds)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ptx_file_path` | `FileReference` | `PTX File Path` | Required |
| `point_cloud_list` | `Iterable[CollectionObjectName]` | `Point Cloud List` | Required |
| `overwrite_existing_file` | `bool` | `Overwrite existing file?` | false |
| `show_progress_dialog` | `bool` | `Show Progress Dialog?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_ptx_point_clouds(
    self,
    ptx_file_path: FileReference,
    point_cloud_list: Iterable[CollectionObjectName],
    *,
    overwrite_existing_file: bool = False,
    show_progress_dialog: bool = False,
) -> None: ...
```

```python
await briosa.export_ptx_point_clouds(ptx_file_path=..., point_cloud_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export QDAS Characteristics

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export QDAS Characteristics](/mp-command-catalog/commands/file-operations#export-qdas-characteristics) · [gRPC contract](/api/grpc/file-operations#export-qdas-characteristics)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `qdas_export_file_path` | `FileReference` | `QDAS Export File Path` | Required |
| `k1001_part_number` | `str` | `K1001: Part Number` | Empty |
| `k1002_part_description` | `str` | `K1002: Part Description` | Empty |
| `k1071_supplier_number` | `str` | `K1071: Supplier Number` | Empty |
| `k1072_supplier_description` | `str` | `K1072: Supplier Description` | Empty |
| `k1203_reason_for_test` | `str` | `K1203: Reason for Test` | Empty |
| `k1303_plant` | `str` | `K1303: Plant` | Empty |
| `k1900_part_remark` | `str` | `K1900: Part Remark` | Empty |
| `k0006_batch_number` | `str` | `K0006: Batch Number` | Empty |
| `k0014_part_id` | `str` | `K0014: Part ID` | Empty |
| `k0053_order_number` | `str` | `K0053: Order Number` | Empty |
| `k0004_date_time_stamp` | `str` | `K0004: Date Time Stamp` | 2026-07-20/16:32:22 |
| `k0008_operator_identifier` | `int` | `K0008: Operator Identifier` | -1 |
| `k0010_machine_identifier` | `int` | `K0010: Machine Identifier` | -1 |
| `k0012_gage_identifier` | `int` | `K0012: Gage Identifier` | -1 |
| `relationship_list` | `Iterable[CollectionObjectName]` | `Relationship List` | Required |
| `feature_check_list` | `Iterable[CollectionObjectName]` | `Feature Check List` | Required |
| `vector_group_list` | `Iterable[CollectionObjectName]` | `Vector Group List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_qdas_characteristics(
    self,
    qdas_export_file_path: FileReference,
    *,
    k1001_part_number: str = '',
    k1002_part_description: str = '',
    k1071_supplier_number: str = '',
    k1072_supplier_description: str = '',
    k1203_reason_for_test: str = '',
    k1303_plant: str = '',
    k1900_part_remark: str = '',
    k0006_batch_number: str = '',
    k0014_part_id: str = '',
    k0053_order_number: str = '',
    k0004_date_time_stamp: str = "2026-07-20/16:32:22",
    k0008_operator_identifier: int = -1,
    k0010_machine_identifier: int = -1,
    k0012_gage_identifier: int = -1,
    relationship_list: Iterable[CollectionObjectName],
    feature_check_list: Iterable[CollectionObjectName],
    vector_group_list: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.export_qdas_characteristics(qdas_export_file_path=..., relationship_list=..., feature_check_list=..., vector_group_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export QDAS Data List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export QDAS Data List](/mp-command-catalog/commands/file-operations#export-qdas-data-list) · [gRPC contract](/api/grpc/file-operations#export-qdas-data-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `qdas_export_file_path` | `FileReference` | `QDAS Export File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_qdas_data_list(
    self,
    qdas_export_file_path: FileReference,
) -> None: ...
```

```python
await briosa.export_qdas_data_list(qdas_export_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export Scan Stripe Mesh to STL File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export Scan Stripe Mesh to STL File](/mp-command-catalog/commands/file-operations#export-scan-stripe-mesh-to-stl-file) · [gRPC contract](/api/grpc/file-operations#export-scan-stripe-mesh-to-stl-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stl_file_path` | `FileReference` | `STL File Path` | Required |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_scan_stripe_mesh_to_stl_file(
    self,
    stl_file_path: FileReference,
    mesh: CollectionObjectName,
) -> None: ...
```

```python
await briosa.export_scan_stripe_mesh_to_stl_file(stl_file_path=..., mesh=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export STEP File - Entire Model

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export STEP File - Entire Model](/mp-command-catalog/commands/file-operations#export-step-file---entire-model) · [gRPC contract](/api/grpc/file-operations#export-step-file---entire-model)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `step_file_path` | `FileReference` | `STEP File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_step_file_entire_model(
    self,
    step_file_path: FileReference,
) -> None: ...
```

```python
await briosa.export_step_file_entire_model(step_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export STEP File - Partial Model

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export STEP File - Partial Model](/mp-command-catalog/commands/file-operations#export-step-file---partial-model) · [gRPC contract](/api/grpc/file-operations#export-step-file---partial-model)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `step_file_path` | `FileReference` | `STEP File Path` | Required |
| `object_name_list` | `Iterable[CollectionObjectName]` | `Object Name List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_step_file_partial_model(
    self,
    step_file_path: FileReference,
    object_name_list: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.export_step_file_partial_model(step_file_path=..., object_name_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export VDA/FS File  - Entire Model

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export VDA/FS File  - Entire Model](/mp-command-catalog/commands/file-operations#export-vdafs-file----entire-model) · [gRPC contract](/api/grpc/file-operations#export-vdafs-file----entire-model)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vda_fs_file_path` | `FileReference` | `VDA/FS File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_vda_fs_file_entire_model(
    self,
    vda_fs_file_path: FileReference,
) -> None: ...
```

```python
await briosa.export_vda_fs_file_entire_model(vda_fs_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export VDA/FS File - Partial Model

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export VDA/FS File - Partial Model](/mp-command-catalog/commands/file-operations#export-vdafs-file---partial-model) · [gRPC contract](/api/grpc/file-operations#export-vdafs-file---partial-model)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vda_fs_file_path` | `FileReference` | `VDA/FS File Path` | Required |
| `object_name_list` | `Iterable[CollectionObjectName]` | `Object Name List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_vda_fs_file_partial_model(
    self,
    vda_fs_file_path: FileReference,
    object_name_list: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.export_vda_fs_file_partial_model(vda_fs_file_path=..., object_name_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export Vector Container to ASCII File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export Vector Container to ASCII File](/mp-command-catalog/commands/file-operations#export-vector-container-to-ascii-file) · [gRPC contract](/api/grpc/file-operations#export-vector-container-to-ascii-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ascii_file_path` | `FileReference` | `Ascii File Path` | Required |
| `vector_groups_to_export` | `Iterable[CollectionVectorGroupName]` | `Vector group(s) to export` | Required |
| `overwrite_existing_file_false_append` | `bool` | `Overwrite existing file? (FALSE = Append)` | true |
| `use_full_precision_scientific_notation` | `bool` | `Use Full Precision (Scientific Notation)?` | false |
| `vector_name_format` | `Vector` | `Vector Name Format` | Required |
| `include_vector_length` | `bool` | `Include Vector Length?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_vector_container_to_ascii_file(
    self,
    ascii_file_path: FileReference,
    vector_groups_to_export: Iterable[CollectionVectorGroupName],
    *,
    overwrite_existing_file_false_append: bool = True,
    use_full_precision_scientific_notation: bool = False,
    vector_name_format: Vector,
    include_vector_length: bool = True,
) -> None: ...
```

```python
await briosa.export_vector_container_to_ascii_file(ascii_file_path=..., vector_groups_to_export=..., vector_name_format=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Find Files in Directory

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Find Files in Directory](/mp-command-catalog/commands/file-operations#find-files-in-directory) · [gRPC contract](/api/grpc/file-operations#find-files-in-directory)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `directory` | `str` | `Directory` | Empty |
| `file_name_pattern` | `str` | `File Name Pattern` | *.* |
| `recursive` | `bool` | `Recursive?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `files` | `list[str]` | `Files` |

```python
async def find_files_in_directory(
    self,
    *,
    directory: str = '',
    file_name_pattern: str = "*.*",
    recursive: bool = False,
) -> list[str]: ...
```

```python
await briosa.find_files_in_directory()
```

Returns the MP output `Files` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Find Sub-Directories in Directory

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Find Sub-Directories in Directory](/mp-command-catalog/commands/file-operations#find-sub-directories-in-directory) · [gRPC contract](/api/grpc/file-operations#find-sub-directories-in-directory)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `directory` | `str` | `Directory` | Empty |
| `recursive` | `bool` | `Recursive?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `sub_directories` | `list[str]` | `Sub-Directories` |

```python
async def find_sub_directories_in_directory(
    self,
    *,
    directory: str = '',
    recursive: bool = False,
) -> list[str]: ...
```

```python
await briosa.find_sub_directories_in_directory()
```

Returns the MP output `Sub-Directories` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Boolean From DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Boolean From DataShare File](/mp-command-catalog/commands/file-operations#get-boolean-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-boolean-from-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `boolean_name` | `str` | `Boolean Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `boolean_value` | `bool` | `Boolean Value` |

```python
async def get_boolean_from_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    boolean_name: str = '',
) -> bool: ...
```

```python
await briosa.get_boolean_from_data_share_file(data_share_file_path=...)
```

Returns the MP output `Boolean Value` directly as `bool`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Double From DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Double From DataShare File](/mp-command-catalog/commands/file-operations#get-double-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-double-from-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `double_name` | `str` | `Double Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `double_value` | `float` | `Double Value` |

```python
async def get_double_from_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    double_name: str = '',
) -> float: ...
```

```python
await briosa.get_double_from_data_share_file(data_share_file_path=...)
```

Returns the MP output `Double Value` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Integer From DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Integer From DataShare File](/mp-command-catalog/commands/file-operations#get-integer-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-integer-from-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `integer_name` | `str` | `Integer Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `integer_value` | `int` | `Integer Value` |

```python
async def get_integer_from_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    integer_name: str = '',
) -> int: ...
```

```python
await briosa.get_integer_from_data_share_file(data_share_file_path=...)
```

Returns the MP output `Integer Value` directly as `int`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get QDAS Catalog Entries

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get QDAS Catalog Entries](/mp-command-catalog/commands/file-operations#get-qdas-catalog-entries) · [gRPC contract](/api/grpc/file-operations#get-qdas-catalog-entries)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `k_field_target` | `str` | `K-Field Target` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `catalog_entries` | `list[str]` | `Catalog Entries` |

```python
async def get_qdas_catalog_entries(
    self,
    *,
    k_field_target: str = '',
) -> list[str]: ...
```

```python
await briosa.get_qdas_catalog_entries()
```

Returns the MP output `Catalog Entries` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get String From DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get String From DataShare File](/mp-command-catalog/commands/file-operations#get-string-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-string-from-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `string_name` | `str` | `String Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `string_value` | `str` | `String Value` |

```python
async def get_string_from_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    string_name: str = '',
) -> str: ...
```

```python
await briosa.get_string_from_data_share_file(data_share_file_path=...)
```

Returns the MP output `String Value` directly as `str`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Transform From DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Transform From DataShare File](/mp-command-catalog/commands/file-operations#get-transform-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-transform-from-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `transform_name` | `str` | `Transform Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `transform_value` | `Transform` | `Transform Value` |

```python
async def get_transform_from_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    transform_name: str = '',
) -> Transform: ...
```

```python
await briosa.get_transform_from_data_share_file(data_share_file_path=...)
```

Returns the MP output `Transform Value` directly as `Transform`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Vector From DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Vector From DataShare File](/mp-command-catalog/commands/file-operations#get-vector-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-vector-from-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `vector_name` | `str` | `Vector Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `vector_value` | `Vector` | `Vector Value` |

```python
async def get_vector_from_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    vector_name: str = '',
) -> Vector: ...
```

```python
await briosa.get_vector_from_data_share_file(data_share_file_path=...)
```

Returns the MP output `Vector Value` directly as `Vector`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Working Directory

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Working Directory](/mp-command-catalog/commands/file-operations#get-working-directory) · [gRPC contract](/api/grpc/file-operations#get-working-directory)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `directory` | `str` | `Directory` |

```python
async def get_working_directory(self) -> str: ...
```

```python
await briosa.get_working_directory()
```

Returns the MP output `Directory` directly as `str`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import ASCII: Predefined Formats

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import ASCII: Predefined Formats](/mp-command-catalog/commands/file-operations#import-ascii-predefined-formats) · [gRPC contract](/api/grpc/file-operations#import-ascii-predefined-formats)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| `file_format` | `AsciiFileFormat` | `File Format` | Required |
| `units` | `DistanceUnits` | `Units` | Inches |
| `angular_units` | `AngularUnits` | `Angular Units` | Degrees |
| `group_name` | `CollectionObjectName` | `Group Name` | Required |
| `import_as_cloud` | `bool` | `Import as Cloud` | false |
| `ensure_new_point_group` | `bool` | `Ensure New Point Group` | true |
| `ensure_unique_names` | `bool` | `Ensure Unique Names` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_ascii_predefined_formats(
    self,
    ascii_file_path: FileReference,
    file_format: AsciiFileFormat,
    *,
    units: DistanceUnits = DistanceUnits.DEFAULT,
    angular_units: AngularUnits = AngularUnits.DEFAULT,
    group_name: CollectionObjectName,
    import_as_cloud: bool = False,
    ensure_new_point_group: bool = True,
    ensure_unique_names: bool = True,
) -> None: ...
```

```python
await briosa.import_ascii_predefined_formats(ascii_file_path=..., file_format=..., group_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import ASCII: Predefined Frame Set Formats

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import ASCII: Predefined Frame Set Formats](/mp-command-catalog/commands/file-operations#import-ascii-predefined-frame-set-formats) · [gRPC contract](/api/grpc/file-operations#import-ascii-predefined-frame-set-formats)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| `file_format` | `AsciiFileFormat` | `File Format` | Required |
| `units` | `DistanceUnits` | `Units` | Inches |
| `angular_units` | `AngularUnits` | `Angular Units` | Degrees |
| `frame_set_container_name` | `CollectionObjectName` | `Frame Set Container Name` | Required |
| `ensure_unique_name` | `bool` | `Ensure Unique Name` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_ascii_predefined_frame_set_formats(
    self,
    ascii_file_path: FileReference,
    file_format: AsciiFileFormat,
    *,
    units: DistanceUnits = DistanceUnits.DEFAULT,
    angular_units: AngularUnits = AngularUnits.DEFAULT,
    frame_set_container_name: CollectionObjectName,
    ensure_unique_name: bool = True,
) -> None: ...
```

```python
await briosa.import_ascii_predefined_frame_set_formats(ascii_file_path=..., file_format=..., frame_set_container_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import E57 File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import E57 File](/mp-command-catalog/commands/file-operations#import-e57-file) · [gRPC contract](/api/grpc/file-operations#import-e57-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `e57_file_path` | `FileReference` | `E57 File Path` | Required |
| `save_converted_file` | `bool` | `Save Converted File` | false |
| `use_square_root_of_intensity` | `bool` | `Use Square Root of Intensity` | true |
| `automatically_close_converter` | `bool` | `Automatically Close Converter` | true |
| `prioritize_color_over_intensity` | `bool` | `Prioritize Color Over Intensity` | true |
| `import_scan_blocks_as_separate_clouds` | `bool` | `Import Scan Blocks As Separate Clouds` | false |
| `units` | `DistanceUnits` | `Units` | Inches |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_e57_file(
    self,
    e57_file_path: FileReference,
    *,
    save_converted_file: bool = False,
    use_square_root_of_intensity: bool = True,
    automatically_close_converter: bool = True,
    prioritize_color_over_intensity: bool = True,
    import_scan_blocks_as_separate_clouds: bool = False,
    units: DistanceUnits = DistanceUnits.DEFAULT,
) -> None: ...
```

```python
await briosa.import_e57_file(e57_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import File as Embedded File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import File as Embedded File](/mp-command-catalog/commands/file-operations#import-file-as-embedded-file) · [gRPC contract](/api/grpc/file-operations#import-file-as-embedded-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `external_file_name` | `FileReference` | `External File Name` | Required |
| `replace_existing` | `bool` | `Replace Existing?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_file_as_embedded_file(
    self,
    external_file_name: FileReference,
    *,
    replace_existing: bool = False,
) -> None: ...
```

```python
await briosa.import_file_as_embedded_file(external_file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import File as Picture

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import File as Picture](/mp-command-catalog/commands/file-operations#import-file-as-picture) · [gRPC contract](/api/grpc/file-operations#import-file-as-picture)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `external_file_name` | `FileReference` | `External File Name` | Required |
| `replace_existing` | `bool` | `Replace Existing?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_file_as_picture(
    self,
    external_file_name: FileReference,
    *,
    replace_existing: bool = False,
) -> None: ...
```

```python
await briosa.import_file_as_picture(external_file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import Hidden Point Bar XML File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import Hidden Point Bar XML File](/mp-command-catalog/commands/file-operations#import-hidden-point-bar-xml-file) · [gRPC contract](/api/grpc/file-operations#import-hidden-point-bar-xml-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `xml_file_path` | `FileReference` | `XML File Path` | Required |
| `replace_existing_entries` | `bool` | `Replace Existing Entries?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_hidden_point_bar_xml_file(
    self,
    xml_file_path: FileReference,
    *,
    replace_existing_entries: bool = False,
) -> None: ...
```

```python
await briosa.import_hidden_point_bar_xml_file(xml_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import IGES File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import IGES File](/mp-command-catalog/commands/file-operations#import-iges-file) · [gRPC contract](/api/grpc/file-operations#import-iges-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `iges_file_path` | `FileReference` | `IGES File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_iges_file(
    self,
    iges_file_path: FileReference,
) -> None: ...
```

```python
await briosa.import_iges_file(iges_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import Leica GSI File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import Leica GSI File](/mp-command-catalog/commands/file-operations#import-leica-gsi-file) · [gRPC contract](/api/grpc/file-operations#import-leica-gsi-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument_id` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `group_name` | `CollectionObjectName` | `Group Name` | Required |
| `file_path` | `FileReference` | `File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_leica_gsi_file(
    self,
    instrument_id: CollectionInstrumentId,
    group_name: CollectionObjectName,
    file_path: FileReference,
) -> None: ...
```

```python
await briosa.import_leica_gsi_file(instrument_id=..., group_name=..., file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import Leica SDB File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import Leica SDB File](/mp-command-catalog/commands/file-operations#import-leica-sdb-file) · [gRPC contract](/api/grpc/file-operations#import-leica-sdb-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument_id` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `scan_cloud_name` | `CollectionObjectName` | `Scan Cloud Name` | Required |
| `file_path` | `FileReference` | `File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_leica_sdb_file(
    self,
    instrument_id: CollectionInstrumentId,
    scan_cloud_name: CollectionObjectName,
    file_path: FileReference,
) -> None: ...
```

```python
await briosa.import_leica_sdb_file(instrument_id=..., scan_cloud_name=..., file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import MP File as Embedded MP

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import MP File as Embedded MP](/mp-command-catalog/commands/file-operations#import-mp-file-as-embedded-mp) · [gRPC contract](/api/grpc/file-operations#import-mp-file-as-embedded-mp)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `external_mp_file_name` | `FileReference` | `External MP File Name` | Required |
| `replace_existing` | `bool` | `Replace Existing?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_mp_file_as_embedded_mp(
    self,
    external_mp_file_name: FileReference,
    *,
    replace_existing: bool = False,
) -> None: ...
```

```python
await briosa.import_mp_file_as_embedded_mp(external_mp_file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import Nominals from XML File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import Nominals from XML File](/mp-command-catalog/commands/file-operations#import-nominals-from-xml-file) · [gRPC contract](/api/grpc/file-operations#import-nominals-from-xml-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `file_path` | `FileReference` | `File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_nominals_from_xml_file(
    self,
    file_path: FileReference,
) -> None: ...
```

```python
await briosa.import_nominals_from_xml_file(file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import Polyworks File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import Polyworks File](/mp-command-catalog/commands/file-operations#import-polyworks-file) · [gRPC contract](/api/grpc/file-operations#import-polyworks-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_name` | `CollectionObjectName` | `Cloud Name` | Required |
| `file_path` | `FileReference` | `File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_polyworks_file(
    self,
    cloud_name: CollectionObjectName,
    file_path: FileReference,
) -> None: ...
```

```python
await briosa.import_polyworks_file(cloud_name=..., file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import QDAS Catalog File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import QDAS Catalog File](/mp-command-catalog/commands/file-operations#import-qdas-catalog-file) · [gRPC contract](/api/grpc/file-operations#import-qdas-catalog-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `qdas_dfd_file_path` | `FileReference` | `QDAS DFD File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_qdas_catalog_file(
    self,
    qdas_dfd_file_path: FileReference,
) -> None: ...
```

```python
await briosa.import_qdas_catalog_file(qdas_dfd_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import SA File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import SA File](/mp-command-catalog/commands/file-operations#import-sa-file) · [gRPC contract](/api/grpc/file-operations#import-sa-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sa_file_name` | `FileReference` | `SA File Name` | Required |
| `allow_operator_selections` | `bool` | `Allow Operator Selections` | false |
| `selected_collections_optional` | `Iterable[str]` | `Selected Collections (optional)` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_sa_file(
    self,
    sa_file_name: FileReference,
    *,
    allow_operator_selections: bool = False,
    selected_collections_optional: Iterable[str],
) -> None: ...
```

```python
await briosa.import_sa_file(sa_file_name=..., selected_collections_optional=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import SA Windows Placement

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import SA Windows Placement](/mp-command-catalog/commands/file-operations#import-sa-windows-placement) · [gRPC contract](/api/grpc/file-operations#import-sa-windows-placement)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `file_path` | `FileReference` | `File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_sa_windows_placement(
    self,
    file_path: FileReference,
) -> None: ...
```

```python
await briosa.import_sa_windows_placement(file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import SAT File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import SAT File](/mp-command-catalog/commands/file-operations#import-sat-file) · [gRPC contract](/api/grpc/file-operations#import-sat-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sat_file_path` | `FileReference` | `SAT File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_sat_file(
    self,
    sat_file_path: FileReference,
) -> None: ...
```

```python
await briosa.import_sat_file(sat_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import STEP File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import STEP File](/mp-command-catalog/commands/file-operations#import-step-file) · [gRPC contract](/api/grpc/file-operations#import-step-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `step_file_path` | `FileReference` | `STEP File Path` | Required |
| `display_entity_filters` | `bool` | `Display Entity Filters` | false |
| `display_residuals` | `bool` | `Display Residuals` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_step_file(
    self,
    step_file_path: FileReference,
    *,
    display_entity_filters: bool = False,
    display_residuals: bool = False,
) -> None: ...
```

```python
await briosa.import_step_file(step_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import STL File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import STL File](/mp-command-catalog/commands/file-operations#import-stl-file) · [gRPC contract](/api/grpc/file-operations#import-stl-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stl_file_path` | `FileReference` | `STL File Path` | Required |
| `units` | `DistanceUnits` | `Units` | Millimeters |
| `import_mesh` | `bool` | `Import Mesh` | true |
| `import_point_cloud` | `bool` | `Import Point Cloud` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_stl_file(
    self,
    stl_file_path: FileReference,
    *,
    units: DistanceUnits = DistanceUnits.DEFAULT,
    import_mesh: bool = True,
    import_point_cloud: bool = False,
) -> None: ...
```

```python
await briosa.import_stl_file(stl_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import VDA/FS File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import VDA/FS File](/mp-command-catalog/commands/file-operations#import-vdafs-file) · [gRPC contract](/api/grpc/file-operations#import-vdafs-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vda_fs_file_path` | `FileReference` | `VDA/FS File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_vda_fs_file(
    self,
    vda_fs_file_path: FileReference,
) -> None: ...
```

```python
await briosa.import_vda_fs_file(vda_fs_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import VSTARS .xyz File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import VSTARS .xyz File](/mp-command-catalog/commands/file-operations#import-vstars-xyz-file) · [gRPC contract](/api/grpc/file-operations#import-vstars-xyz-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `file_path` | `FileReference` | `File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_vstars_xyz_file(
    self,
    file_path: FileReference,
) -> None: ...
```

```python
await briosa.import_vstars_xyz_file(file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import VSTARS Cameras

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import VSTARS Cameras](/mp-command-catalog/commands/file-operations#import-vstars-cameras) · [gRPC contract](/api/grpc/file-operations#import-vstars-cameras)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `file_path` | `FileReference` | `File Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_vstars_cameras(
    self,
    file_path: FileReference,
) -> None: ...
```

```python
await briosa.import_vstars_cameras(file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Load HTML Form

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Load HTML Form](/mp-command-catalog/commands/file-operations#load-html-form) · [gRPC contract](/api/grpc/file-operations#load-html-form)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `input_html_form_path` | `FileReference` | `Input HTML Form Path` | Required |
| `window_width` | `int` | `Window Width` | 1000 |
| `window_height` | `int` | `Window Height` | 800 |
| `input_data_share_file_path` | `FileReference` | `Input DataShare File Path` | Required |
| `output_data_share_file_path` | `FileReference` | `Output DataShare File Path` | Required |
| `save_in_binary_format` | `bool` | `Save in Binary Format?` | false |
| `save_button_text` | `str` | `Save Button Text` | Save |
| `cancel_button_text` | `str` | `Cancel Button Text` | Cancel |
| `hide_save_and_cancel_buttons` | `bool` | `Hide Save and Cancel buttons?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def load_html_form(
    self,
    input_html_form_path: FileReference,
    *,
    window_width: int = 1000,
    window_height: int = 800,
    input_data_share_file_path: FileReference,
    output_data_share_file_path: FileReference,
    save_in_binary_format: bool = False,
    save_button_text: str = "Save",
    cancel_button_text: str = "Cancel",
    hide_save_and_cancel_buttons: bool = False,
) -> None: ...
```

```python
await briosa.load_html_form(input_html_form_path=..., input_data_share_file_path=..., output_data_share_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Load HTML Form in Edge Browser

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Load HTML Form in Edge Browser](/mp-command-catalog/commands/file-operations#load-html-form-in-edge-browser) · [gRPC contract](/api/grpc/file-operations#load-html-form-in-edge-browser)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `input_html_form_path` | `FileReference` | `Input HTML Form Path` | Required |
| `window_width` | `int` | `Window Width` | 1000 |
| `window_height` | `int` | `Window Height` | 800 |
| `input_data_share_file_path` | `FileReference` | `Input DataShare File Path` | Required |
| `output_data_share_file_path` | `FileReference` | `Output DataShare File Path` | Required |
| `save_in_binary_format` | `bool` | `Save in Binary Format?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def load_html_form_in_edge_browser(
    self,
    input_html_form_path: FileReference,
    *,
    window_width: int = 1000,
    window_height: int = 800,
    input_data_share_file_path: FileReference,
    output_data_share_file_path: FileReference,
    save_in_binary_format: bool = False,
) -> None: ...
```

```python
await briosa.load_html_form_in_edge_browser(input_html_form_path=..., input_data_share_file_path=..., output_data_share_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Embedded File Name List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Embedded File Name List](/mp-command-catalog/commands/file-operations#make-embedded-file-name-list) · [gRPC contract](/api/grpc/file-operations#make-embedded-file-name-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection_wildcard_criteria` | `str` | `Collection Wildcard Criteria` | * |
| `file_name_pattern` | `str` | `File Name Pattern` | *.* |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `embedded_files` | `list[str]` | `Embedded Files` |

```python
async def make_embedded_file_name_list(
    self,
    *,
    collection_wildcard_criteria: str = "*",
    file_name_pattern: str = "*.*",
) -> list[str]: ...
```

```python
await briosa.make_embedded_file_name_list()
```

Returns the MP output `Embedded Files` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Merge Measurements into XML File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Merge Measurements into XML File](/mp-command-catalog/commands/file-operations#merge-measurements-into-xml-file) · [gRPC contract](/api/grpc/file-operations#merge-measurements-into-xml-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `file_path` | `FileReference` | `File Path` | Required |
| `group_name` | `CollectionObjectName` | `Group Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def merge_measurements_into_xml_file(
    self,
    file_path: FileReference,
    group_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.merge_measurements_into_xml_file(file_path=..., group_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## New SA File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[New SA File](/mp-command-catalog/commands/file-operations#new-sa-file) · [gRPC contract](/api/grpc/file-operations#new-sa-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def new_sa_file(self) -> None: ...
```

```python
await briosa.new_sa_file()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Open SA File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Open SA File](/mp-command-catalog/commands/file-operations#open-sa-file) · [gRPC contract](/api/grpc/file-operations#open-sa-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sa_file_name` | `FileReference` | `SA File Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def open_sa_file(
    self,
    sa_file_name: FileReference,
) -> None: ...
```

```python
await briosa.open_sa_file(sa_file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Open Template File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Open Template File](/mp-command-catalog/commands/file-operations#open-template-file) · [gRPC contract](/api/grpc/file-operations#open-template-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `template_file_name` | `FileReference` | `Template File Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def open_template_file(
    self,
    template_file_name: FileReference,
) -> None: ...
```

```python
await briosa.open_template_file(template_file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Pop PolyBay Analysis Window

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Pop PolyBay Analysis Window](/mp-command-catalog/commands/file-operations#pop-polybay-analysis-window) · [gRPC contract](/api/grpc/file-operations#pop-polybay-analysis-window)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `materials_file_path` | `str` | `Materials File Path` | Empty |
| `bay_file_path` | `str` | `Bay File Path` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def pop_poly_bay_analysis_window(
    self,
    *,
    materials_file_path: str = '',
    bay_file_path: str = '',
) -> None: ...
```

```python
await briosa.pop_poly_bay_analysis_window()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Prepare QDAS Data List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Prepare QDAS Data List](/mp-command-catalog/commands/file-operations#prepare-qdas-data-list) · [gRPC contract](/api/grpc/file-operations#prepare-qdas-data-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `k1001_part_number` | `str` | `K1001: Part Number` | Empty |
| `k1002_part_description` | `str` | `K1002: Part Description` | Empty |
| `k1071_supplier_number` | `str` | `K1071: Supplier Number` | Empty |
| `k1072_supplier_description` | `str` | `K1072: Supplier Description` | Empty |
| `k1203_reason_for_test` | `str` | `K1203: Reason for Test` | Empty |
| `k1303_plant` | `str` | `K1303: Plant` | Empty |
| `k1900_part_remark` | `str` | `K1900: Part Remark` | Empty |
| `k0006_batch_number` | `str` | `K0006: Batch Number` | Empty |
| `k0014_part_id` | `str` | `K0014: Part ID` | Empty |
| `k0053_order_number` | `str` | `K0053: Order Number` | Empty |
| `k0004_date_time_stamp` | `str` | `K0004: Date Time Stamp` | 2026-07-20/16:32:22 |
| `k0008_operator_identifier` | `int` | `K0008: Operator Identifier` | -1 |
| `k0010_machine_identifier` | `int` | `K0010: Machine Identifier` | -1 |
| `k0012_gage_identifier` | `int` | `K0012: Gage Identifier` | -1 |
| `relationship_list` | `Iterable[CollectionObjectName]` | `Relationship List` | Required |
| `feature_check_list` | `Iterable[CollectionObjectName]` | `Feature Check List` | Required |
| `vector_group_list` | `Iterable[CollectionObjectName]` | `Vector Group List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def prepare_qdas_data_list(
    self,
    *,
    k1001_part_number: str = '',
    k1002_part_description: str = '',
    k1071_supplier_number: str = '',
    k1072_supplier_description: str = '',
    k1203_reason_for_test: str = '',
    k1303_plant: str = '',
    k1900_part_remark: str = '',
    k0006_batch_number: str = '',
    k0014_part_id: str = '',
    k0053_order_number: str = '',
    k0004_date_time_stamp: str = "2026-07-20/16:32:22",
    k0008_operator_identifier: int = -1,
    k0010_machine_identifier: int = -1,
    k0012_gage_identifier: int = -1,
    relationship_list: Iterable[CollectionObjectName],
    feature_check_list: Iterable[CollectionObjectName],
    vector_group_list: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.prepare_qdas_data_list(relationship_list=..., feature_check_list=..., vector_group_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Rename General File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Rename General File](/mp-command-catalog/commands/file-operations#rename-general-file) · [gRPC contract](/api/grpc/file-operations#rename-general-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `source_file_name` | `FileReference` | `Source File Name` | Required |
| `destination_file_name` | `FileReference` | `Destination File Name` | Required |
| `overwrite` | `bool` | `Overwrite?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def rename_general_file(
    self,
    source_file_name: FileReference,
    destination_file_name: FileReference,
    *,
    overwrite: bool = False,
) -> None: ...
```

```python
await briosa.rename_general_file(source_file_name=..., destination_file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Save

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Save](/mp-command-catalog/commands/file-operations#save) · [gRPC contract](/api/grpc/file-operations#save)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def save(self) -> None: ...
```

```python
await briosa.save()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Save As Read-Only Template

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Save As Read-Only Template](/mp-command-catalog/commands/file-operations#save-as-read-only-template) · [gRPC contract](/api/grpc/file-operations#save-as-read-only-template)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `template_file_name` | `FileReference` | `Template File Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def save_as_read_only_template(
    self,
    template_file_name: FileReference,
) -> None: ...
```

```python
await briosa.save_as_read_only_template(template_file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Save As...

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Save As...](/mp-command-catalog/commands/file-operations#save-as) · [gRPC contract](/api/grpc/file-operations#save-as)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `file_name` | `FileReference` | `File Name` | Required |
| `add_serial_number` | `bool` | `Add Serial Number?` | false |
| `optional_number` | `int` | `Optional Number` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def save_as(
    self,
    file_name: FileReference,
    *,
    add_serial_number: bool = False,
    optional_number: int = 0,
) -> None: ...
```

```python
await briosa.save_as(file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Boolean In DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Boolean In DataShare File](/mp-command-catalog/commands/file-operations#set-boolean-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-boolean-in-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `boolean_name` | `str` | `Boolean Name` | Empty |
| `boolean_value` | `bool` | `Boolean Value` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_boolean_in_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    boolean_name: str = '',
    boolean_value: bool = False,
) -> None: ...
```

```python
await briosa.set_boolean_in_data_share_file(data_share_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Double In DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Double In DataShare File](/mp-command-catalog/commands/file-operations#set-double-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-double-in-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `double_name` | `str` | `Double Name` | Empty |
| `double_value` | `float` | `Double Value` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_double_in_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    double_name: str = '',
    double_value: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_double_in_data_share_file(data_share_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Integer In DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Integer In DataShare File](/mp-command-catalog/commands/file-operations#set-integer-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-integer-in-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `integer_name` | `str` | `Integer Name` | Empty |
| `integer_value` | `int` | `Integer Value` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_integer_in_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    integer_name: str = '',
    integer_value: int = 0,
) -> None: ...
```

```python
await briosa.set_integer_in_data_share_file(data_share_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set String In DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set String In DataShare File](/mp-command-catalog/commands/file-operations#set-string-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-string-in-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `string_name` | `str` | `String Name` | Empty |
| `string_value` | `str` | `String Value` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_string_in_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    string_name: str = '',
    string_value: str = '',
) -> None: ...
```

```python
await briosa.set_string_in_data_share_file(data_share_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Transform In DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Transform In DataShare File](/mp-command-catalog/commands/file-operations#set-transform-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-transform-in-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `transform_name` | `str` | `Transform Name` | Empty |
| `transform_value` | `Transform` | `Transform Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_transform_in_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    transform_name: str = '',
    transform_value: Transform,
) -> None: ...
```

```python
await briosa.set_transform_in_data_share_file(data_share_file_path=..., transform_value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Vector In DataShare File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Vector In DataShare File](/mp-command-catalog/commands/file-operations#set-vector-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-vector-in-datashare-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| `vector_name` | `str` | `Vector Name` | Empty |
| `vector_value` | `Vector` | `Vector Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_vector_in_data_share_file(
    self,
    data_share_file_path: FileReference,
    *,
    vector_name: str = '',
    vector_value: Vector,
) -> None: ...
```

```python
await briosa.set_vector_in_data_share_file(data_share_file_path=..., vector_value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Terminate All Running MPs

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Terminate All Running MPs](/mp-command-catalog/commands/file-operations#terminate-all-running-mps) · [gRPC contract](/api/grpc/file-operations#terminate-all-running-mps)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def terminate_all_running_m_ps(self) -> None: ...
```

```python
await briosa.terminate_all_running_m_ps()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Use NRKXML Library

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Use NRKXML Library](/mp-command-catalog/commands/file-operations#use-nrkxml-library) · [gRPC contract](/api/grpc/file-operations#use-nrkxml-library)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `use_library` | `bool` | `Use library?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def use_nrkxml_library(
    self,
    *,
    use_library: bool = True,
) -> None: ...
```

```python
await briosa.use_nrkxml_library()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Verify General File Exists

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Verify General File Exists](/mp-command-catalog/commands/file-operations#verify-general-file-exists) · [gRPC contract](/api/grpc/file-operations#verify-general-file-exists)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `file_name` | `FileReference` | `File Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def verify_general_file_exists(
    self,
    file_name: FileReference,
) -> None: ...
```

```python
await briosa.verify_general_file_exists(file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Verify MP File Exists

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Verify MP File Exists](/mp-command-catalog/commands/file-operations#verify-mp-file-exists) · [gRPC contract](/api/grpc/file-operations#verify-mp-file-exists)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mp_file_name` | `FileReference` | `MP File Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def verify_mp_file_exists(
    self,
    mp_file_name: FileReference,
) -> None: ...
```

```python
await briosa.verify_mp_file_exists(mp_file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
