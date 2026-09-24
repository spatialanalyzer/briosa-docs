---
title: File Operations
description: Unreleased python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# File Operations

[SA 2026.1.0529.7](/api/python/file-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/file-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Backup Now {/* #backup-now */}

[MP Catalog](/mp-command-catalog/commands/file-operations#backup-now) · [gRPC Contract](/api/grpc/file-operations#backup-now)

```python
async def backup_now(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy General File {/* #copy-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#copy-general-file) · [gRPC Contract](/api/grpc/file-operations#copy-general-file)

```python
async def copy_general_file(
        self,
        source_file_name: FileReference,
        destination_file_name: FileReference,
        *,
        overwrite: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete General File {/* #delete-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#delete-general-file) · [gRPC Contract](/api/grpc/file-operations#delete-general-file)

```python
async def delete_general_file(
        self,
        file_name: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Direct CAD Access {/* #direct-cad-access */}

[MP Catalog](/mp-command-catalog/commands/file-operations#direct-cad-access) · [gRPC Contract](/api/grpc/file-operations#direct-cad-access)

```python
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
        surface_normals_mode: int = 1,
        prompt_on_missing_components: bool = True,
        selective_import: bool = False,
        surface_compatibility_mode: bool = True,
        explode_surfaces: bool = False,
        cad_file_units: str = "",
        build_callout_views: bool = True,
    ) -> DirectCadAccessResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `surface_normals_mode` | MP qualifier: 1 or 2. |
| `cad_file_units` | An empty value uses the units specified in the file. |

## Export ASCII Frame Set {/* #export-ascii-frame-set */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-frame-set) · [gRPC Contract](/api/grpc/file-operations#export-ascii-frame-set)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Frames {/* #export-ascii-frames */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-frames) · [gRPC Contract](/api/grpc/file-operations#export-ascii-frames)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Point Clouds {/* #export-ascii-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-point-clouds) · [gRPC Contract](/api/grpc/file-operations#export-ascii-point-clouds)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Point Set {/* #export-ascii-point-set */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-point-set) · [gRPC Contract](/api/grpc/file-operations#export-ascii-point-set)

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
        maximum_precision: bool = False,
        decimal_precision: int = 6,
        append: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `maximum_precision` | MP qualifier: Scientific Notation. |

## Export ASCII Points {/* #export-ascii-points */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-points) · [gRPC Contract](/api/grpc/file-operations#export-ascii-points)

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
        maximum_precision: bool = False,
        decimal_precision: int = 6,
        append: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `maximum_precision` | MP qualifier: Scientific Notation. |

## Export DXF {/* #export-dxf */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-dxf) · [gRPC Contract](/api/grpc/file-operations#export-dxf)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Embedded File {/* #export-embedded-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-embedded-file) · [gRPC Contract](/api/grpc/file-operations#export-embedded-file)

```python
async def export_embedded_file(
        self,
        embedded_file_collection_name: CollectionName,
        *,
        embedded_file_name: str = "",
        external_file_name: FileReference,
        replace_existing: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Hidden Point Bar XML File {/* #export-hidden-point-bar-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-hidden-point-bar-xml-file) · [gRPC Contract](/api/grpc/file-operations#export-hidden-point-bar-xml-file)

```python
async def export_hidden_point_bar_xml_file(
        self,
        xml_file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export IGES File  - Entire Model {/* #export-iges-file----entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-iges-file----entire-model) · [gRPC Contract](/api/grpc/file-operations#export-iges-file----entire-model)

```python
async def export_iges_file_entire_model(
        self,
        iges_file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export IGES File - Partial Model {/* #export-iges-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-iges-file---partial-model) · [gRPC Contract](/api/grpc/file-operations#export-iges-file---partial-model)

```python
async def export_iges_file_partial_model(
        self,
        iges_file_path: FileReference,
        object_name_list: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export PTX Point Clouds {/* #export-ptx-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ptx-point-clouds) · [gRPC Contract](/api/grpc/file-operations#export-ptx-point-clouds)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export QDAS Characteristics {/* #export-qdas-characteristics */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-qdas-characteristics) · [gRPC Contract](/api/grpc/file-operations#export-qdas-characteristics)

```python
async def export_qdas_characteristics(
        self,
        qdas_export_file_path: FileReference,
        *,
        k1001_part_number: str = "",
        k1002_part_description: str = "",
        k1071_supplier_number: str = "",
        k1072_supplier_description: str = "",
        k1203_reason_for_test: str = "",
        k1303_plant: str = "",
        k1900_part_remark: str = "",
        k0006_batch_number: str = "",
        k0014_part_id: str = "",
        k0053_order_number: str = "",
        k0004_date_time_stamp: str = "2026-07-20/16:32:22",
        k0008_operator_identifier: int = -1,
        k0010_machine_identifier: int = -1,
        k0012_gage_identifier: int = -1,
        relationship_list: Iterable[CollectionItemName],
        feature_check_list: Iterable[CollectionItemName],
        vector_group_list: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export QDAS Data List {/* #export-qdas-data-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-qdas-data-list) · [gRPC Contract](/api/grpc/file-operations#export-qdas-data-list)

```python
async def export_qdas_data_list(
        self,
        qdas_export_file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Scan Stripe Mesh to STL File {/* #export-scan-stripe-mesh-to-stl-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-scan-stripe-mesh-to-stl-file) · [gRPC Contract](/api/grpc/file-operations#export-scan-stripe-mesh-to-stl-file)

```python
async def export_scan_stripe_mesh_to_stl_file(
        self,
        stl_file_path: FileReference,
        mesh: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export STEP File - Entire Model {/* #export-step-file---entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-step-file---entire-model) · [gRPC Contract](/api/grpc/file-operations#export-step-file---entire-model)

```python
async def export_step_file_entire_model(
        self,
        step_file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export STEP File - Partial Model {/* #export-step-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-step-file---partial-model) · [gRPC Contract](/api/grpc/file-operations#export-step-file---partial-model)

```python
async def export_step_file_partial_model(
        self,
        step_file_path: FileReference,
        object_name_list: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export VDA/FS File  - Entire Model {/* #export-vdafs-file----entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vdafs-file----entire-model) · [gRPC Contract](/api/grpc/file-operations#export-vdafs-file----entire-model)

```python
async def export_vda_fs_file_entire_model(
        self,
        vda_fs_file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export VDA/FS File - Partial Model {/* #export-vdafs-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vdafs-file---partial-model) · [gRPC Contract](/api/grpc/file-operations#export-vdafs-file---partial-model)

```python
async def export_vda_fs_file_partial_model(
        self,
        vda_fs_file_path: FileReference,
        object_name_list: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Vector Container to ASCII File {/* #export-vector-container-to-ascii-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vector-container-to-ascii-file) · [gRPC Contract](/api/grpc/file-operations#export-vector-container-to-ascii-file)

```python
async def export_vector_container_to_ascii_file(
        self,
        ascii_file_path: FileReference,
        vector_groups_to_export: Iterable[CollectionVectorGroupName],
        *,
        overwrite_existing_file: bool = True,
        use_full_precision: bool = False,
        vector_name_format: ExportVectorNameFormat,
        include_vector_length: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overwrite_existing_file` | False appends to the existing file. |
| `use_full_precision` | MP qualifier: Scientific Notation. |

## Find Files in Directory {/* #find-files-in-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#find-files-in-directory) · [gRPC Contract](/api/grpc/file-operations#find-files-in-directory)

```python
async def find_files_in_directory(
        self,
        *,
        directory: str = "",
        file_name_pattern: str = "*.*",
        recursive: bool = False,
    ) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Find Sub-Directories in Directory {/* #find-sub-directories-in-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#find-sub-directories-in-directory) · [gRPC Contract](/api/grpc/file-operations#find-sub-directories-in-directory)

```python
async def find_sub_directories_in_directory(
        self,
        *,
        directory: str = "",
        recursive: bool = False,
    ) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Boolean From DataShare File {/* #get-boolean-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-boolean-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-boolean-from-datashare-file)

```python
async def get_boolean_from_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        boolean_name: str = "",
    ) -> bool: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Double From DataShare File {/* #get-double-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-double-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-double-from-datashare-file)

```python
async def get_double_from_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        double_name: str = "",
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Integer From DataShare File {/* #get-integer-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-integer-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-integer-from-datashare-file)

```python
async def get_integer_from_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        integer_name: str = "",
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get QDAS Catalog Entries {/* #get-qdas-catalog-entries */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-qdas-catalog-entries) · [gRPC Contract](/api/grpc/file-operations#get-qdas-catalog-entries)

```python
async def get_qdas_catalog_entries(
        self,
        *,
        k_field_target: str = "",
    ) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String From DataShare File {/* #get-string-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-string-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-string-from-datashare-file)

```python
async def get_string_from_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        string_name: str = "",
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform From DataShare File {/* #get-transform-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-transform-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-transform-from-datashare-file)

```python
async def get_transform_from_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        transform_name: str = "",
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector From DataShare File {/* #get-vector-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-vector-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-vector-from-datashare-file)

```python
async def get_vector_from_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        vector_name: str = "",
    ) -> Vector: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Working Directory {/* #get-working-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-working-directory) · [gRPC Contract](/api/grpc/file-operations#get-working-directory)

```python
async def get_working_directory(self, timeout: float | None = None) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import ASCII: Predefined Formats {/* #import-ascii-predefined-formats */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-ascii-predefined-formats) · [gRPC Contract](/api/grpc/file-operations#import-ascii-predefined-formats)

```python
async def import_ascii_predefined_formats(
        self,
        ascii_file_path: FileReference,
        file_format: AsciiFileFormat,
        *,
        units: DistanceUnits = DistanceUnits.INCHES,
        angular_units: AngularUnits = AngularUnits.DEGREES,
        group_name: CollectionObjectName,
        import_as_cloud: bool = False,
        ensure_new_point_group: bool = True,
        ensure_unique_names: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import ASCII: Predefined Frame Set Formats {/* #import-ascii-predefined-frame-set-formats */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-ascii-predefined-frame-set-formats) · [gRPC Contract](/api/grpc/file-operations#import-ascii-predefined-frame-set-formats)

```python
async def import_ascii_predefined_frame_set_formats(
        self,
        ascii_file_path: FileReference,
        file_format: AsciiFileFormat,
        *,
        units: DistanceUnits = DistanceUnits.INCHES,
        angular_units: AngularUnits = AngularUnits.DEGREES,
        frame_set_container_name: CollectionObjectName,
        ensure_unique_name: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import E57 File {/* #import-e57-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-e57-file) · [gRPC Contract](/api/grpc/file-operations#import-e57-file)

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
        units: DistanceUnits = DistanceUnits.INCHES,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import File as Embedded File {/* #import-file-as-embedded-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-file-as-embedded-file) · [gRPC Contract](/api/grpc/file-operations#import-file-as-embedded-file)

```python
async def import_file_as_embedded_file(
        self,
        external_file_name: FileReference,
        *,
        replace_existing: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import File as Picture {/* #import-file-as-picture */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-file-as-picture) · [gRPC Contract](/api/grpc/file-operations#import-file-as-picture)

```python
async def import_file_as_picture(
        self,
        external_file_name: FileReference,
        *,
        replace_existing: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Hidden Point Bar XML File {/* #import-hidden-point-bar-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-hidden-point-bar-xml-file) · [gRPC Contract](/api/grpc/file-operations#import-hidden-point-bar-xml-file)

```python
async def import_hidden_point_bar_xml_file(
        self,
        xml_file_path: FileReference,
        *,
        replace_existing_entries: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import IGES File {/* #import-iges-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-iges-file) · [gRPC Contract](/api/grpc/file-operations#import-iges-file)

```python
async def import_iges_file(
        self,
        iges_file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Leica GSI File {/* #import-leica-gsi-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-leica-gsi-file) · [gRPC Contract](/api/grpc/file-operations#import-leica-gsi-file)

```python
async def import_leica_gsi_file(
        self,
        instrument_id: CollectionInstrumentId,
        group_name: CollectionObjectName,
        file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Leica SDB File {/* #import-leica-sdb-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-leica-sdb-file) · [gRPC Contract](/api/grpc/file-operations#import-leica-sdb-file)

```python
async def import_leica_sdb_file(
        self,
        instrument_id: CollectionInstrumentId,
        scan_cloud_name: CollectionObjectName,
        file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import MP File as Embedded MP {/* #import-mp-file-as-embedded-mp */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-mp-file-as-embedded-mp) · [gRPC Contract](/api/grpc/file-operations#import-mp-file-as-embedded-mp)

```python
async def import_mp_file_as_embedded_mp(
        self,
        external_mp_file_name: FileReference,
        *,
        replace_existing: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Nominals from XML File {/* #import-nominals-from-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-nominals-from-xml-file) · [gRPC Contract](/api/grpc/file-operations#import-nominals-from-xml-file)

```python
async def import_nominals_from_xml_file(
        self,
        file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Polyworks File {/* #import-polyworks-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-polyworks-file) · [gRPC Contract](/api/grpc/file-operations#import-polyworks-file)

```python
async def import_polyworks_file(
        self,
        cloud_name: CollectionObjectName,
        file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import QDAS Catalog File {/* #import-qdas-catalog-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-qdas-catalog-file) · [gRPC Contract](/api/grpc/file-operations#import-qdas-catalog-file)

```python
async def import_qdas_catalog_file(
        self,
        qdas_dfd_file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import SA File {/* #import-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sa-file) · [gRPC Contract](/api/grpc/file-operations#import-sa-file)

```python
async def import_sa_file(
        self,
        sa_file_name: FileReference,
        *,
        allow_operator_selections: bool = False,
        selected_collections: Iterable[str],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `selected_collections` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Import SA Windows Placement {/* #import-sa-windows-placement */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sa-windows-placement) · [gRPC Contract](/api/grpc/file-operations#import-sa-windows-placement)

```python
async def import_sa_windows_placement(
        self,
        file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import SAT File {/* #import-sat-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sat-file) · [gRPC Contract](/api/grpc/file-operations#import-sat-file)

```python
async def import_sat_file(
        self,
        sat_file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import STEP File {/* #import-step-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-step-file) · [gRPC Contract](/api/grpc/file-operations#import-step-file)

```python
async def import_step_file(
        self,
        step_file_path: FileReference,
        *,
        display_entity_filters: bool = False,
        display_residuals: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import STL File {/* #import-stl-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-stl-file) · [gRPC Contract](/api/grpc/file-operations#import-stl-file)

```python
async def import_stl_file(
        self,
        stl_file_path: FileReference,
        *,
        units: DistanceUnits = DistanceUnits.MILLIMETERS,
        import_mesh: bool = True,
        import_point_cloud: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VDA/FS File {/* #import-vdafs-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vdafs-file) · [gRPC Contract](/api/grpc/file-operations#import-vdafs-file)

```python
async def import_vda_fs_file(
        self,
        vda_fs_file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VSTARS .xyz File {/* #import-vstars-xyz-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vstars-xyz-file) · [gRPC Contract](/api/grpc/file-operations#import-vstars-xyz-file)

```python
async def import_vstars_xyz_file(
        self,
        file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VSTARS Cameras {/* #import-vstars-cameras */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vstars-cameras) · [gRPC Contract](/api/grpc/file-operations#import-vstars-cameras)

```python
async def import_vstars_cameras(
        self,
        file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load HTML Form {/* #load-html-form */}

[MP Catalog](/mp-command-catalog/commands/file-operations#load-html-form) · [gRPC Contract](/api/grpc/file-operations#load-html-form)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load HTML Form in Edge Browser {/* #load-html-form-in-edge-browser */}

[MP Catalog](/mp-command-catalog/commands/file-operations#load-html-form-in-edge-browser) · [gRPC Contract](/api/grpc/file-operations#load-html-form-in-edge-browser)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Embedded File Name List {/* #make-embedded-file-name-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#make-embedded-file-name-list) · [gRPC Contract](/api/grpc/file-operations#make-embedded-file-name-list)

```python
async def make_embedded_file_name_list(
        self,
        *,
        collection_wildcard_criteria: str = "*",
        file_name_pattern: str = "*.*",
    ) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Merge Measurements into XML File {/* #merge-measurements-into-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#merge-measurements-into-xml-file) · [gRPC Contract](/api/grpc/file-operations#merge-measurements-into-xml-file)

```python
async def merge_measurements_into_xml_file(
        self,
        file_path: FileReference,
        group_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## New SA File {/* #new-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#new-sa-file) · [gRPC Contract](/api/grpc/file-operations#new-sa-file)

```python
async def new_sa_file(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Open SA File {/* #open-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#open-sa-file) · [gRPC Contract](/api/grpc/file-operations#open-sa-file)

```python
async def open_sa_file(
        self,
        sa_file_name: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Open Template File {/* #open-template-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#open-template-file) · [gRPC Contract](/api/grpc/file-operations#open-template-file)

```python
async def open_template_file(
        self,
        template_file_name: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Pop PolyBay Analysis Window {/* #pop-polybay-analysis-window */}

[MP Catalog](/mp-command-catalog/commands/file-operations#pop-polybay-analysis-window) · [gRPC Contract](/api/grpc/file-operations#pop-polybay-analysis-window)

```python
async def pop_poly_bay_analysis_window(
        self,
        *,
        materials_file_path: str = "",
        bay_file_path: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Prepare QDAS Data List {/* #prepare-qdas-data-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#prepare-qdas-data-list) · [gRPC Contract](/api/grpc/file-operations#prepare-qdas-data-list)

```python
async def prepare_qdas_data_list(
        self,
        *,
        k1001_part_number: str = "",
        k1002_part_description: str = "",
        k1071_supplier_number: str = "",
        k1072_supplier_description: str = "",
        k1203_reason_for_test: str = "",
        k1303_plant: str = "",
        k1900_part_remark: str = "",
        k0006_batch_number: str = "",
        k0014_part_id: str = "",
        k0053_order_number: str = "",
        k0004_date_time_stamp: str = "2026-07-20/16:32:22",
        k0008_operator_identifier: int = -1,
        k0010_machine_identifier: int = -1,
        k0012_gage_identifier: int = -1,
        relationship_list: Iterable[CollectionItemName],
        feature_check_list: Iterable[CollectionItemName],
        vector_group_list: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename General File {/* #rename-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#rename-general-file) · [gRPC Contract](/api/grpc/file-operations#rename-general-file)

```python
async def rename_general_file(
        self,
        source_file_name: FileReference,
        destination_file_name: FileReference,
        *,
        overwrite: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save {/* #save */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save) · [gRPC Contract](/api/grpc/file-operations#save)

```python
async def save(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save As Read-Only Template {/* #save-as-read-only-template */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save-as-read-only-template) · [gRPC Contract](/api/grpc/file-operations#save-as-read-only-template)

```python
async def save_as_read_only_template(
        self,
        template_file_name: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save As... {/* #save-as */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save-as) · [gRPC Contract](/api/grpc/file-operations#save-as)

```python
async def save_as(
        self,
        file_name: FileReference,
        *,
        add_serial_number: bool = False,
        optional_number: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Boolean In DataShare File {/* #set-boolean-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-boolean-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-boolean-in-datashare-file)

```python
async def set_boolean_in_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        boolean_name: str = "",
        boolean_value: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Double In DataShare File {/* #set-double-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-double-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-double-in-datashare-file)

```python
async def set_double_in_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        double_name: str = "",
        double_value: float = 0.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Integer In DataShare File {/* #set-integer-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-integer-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-integer-in-datashare-file)

```python
async def set_integer_in_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        integer_name: str = "",
        integer_value: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String In DataShare File {/* #set-string-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-string-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-string-in-datashare-file)

```python
async def set_string_in_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        string_name: str = "",
        string_value: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform In DataShare File {/* #set-transform-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-transform-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-transform-in-datashare-file)

```python
async def set_transform_in_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        transform_name: str = "",
        transform_value: Transform,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector In DataShare File {/* #set-vector-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-vector-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-vector-in-datashare-file)

```python
async def set_vector_in_data_share_file(
        self,
        data_share_file_path: FileReference,
        *,
        vector_name: str = "",
        vector_value: Vector,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Terminate All Running MPs {/* #terminate-all-running-mps */}

[MP Catalog](/mp-command-catalog/commands/file-operations#terminate-all-running-mps) · [gRPC Contract](/api/grpc/file-operations#terminate-all-running-mps)

```python
async def terminate_all_running_mps(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Use NRKXML Library {/* #use-nrkxml-library */}

[MP Catalog](/mp-command-catalog/commands/file-operations#use-nrkxml-library) · [gRPC Contract](/api/grpc/file-operations#use-nrkxml-library)

```python
async def use_nrkxml_library(
        self,
        *,
        use_library: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Verify General File Exists {/* #verify-general-file-exists */}

[MP Catalog](/mp-command-catalog/commands/file-operations#verify-general-file-exists) · [gRPC Contract](/api/grpc/file-operations#verify-general-file-exists)

```python
async def verify_general_file_exists(
        self,
        file_name: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Verify MP File Exists {/* #verify-mp-file-exists */}

[MP Catalog](/mp-command-catalog/commands/file-operations#verify-mp-file-exists) · [gRPC Contract](/api/grpc/file-operations#verify-mp-file-exists)

```python
async def verify_mp_file_exists(
        self,
        mp_file_name: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/62742ed39d1ce8508664c585c906948122e7517d/targets/2026.1.0529.7)
