---
title: File Operations
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# File Operations

[SA 2026.1.0529.7](/api/grpc/file-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/file-operations)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Backup Now {/* #backup-now */}

[MP Catalog](/mp-command-catalog/commands/file-operations#backup-now)

`/briosa.FileOperations/BackupNow` · Operation ID: `file_operations.backup_now`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc BackupNow(BackupNowRequest) returns (BackupNowResult);

message BackupNowRequest {
  // No MP inputs.
}

message BackupNowResult {
  MpExecutionDetails execution = 1000;
}
```

## Copy General File {/* #copy-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#copy-general-file)

`/briosa.FileOperations/CopyGeneralFile` · Operation ID: `file_operations.copy_general_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_file_name` | `optional FileReference` | Source File Name | Required |
| Request | 2 | `destination_file_name` | `optional FileReference` | Destination File Name | Required |
| Request | 3 | `overwrite` | `optional bool` | Overwrite? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CopyGeneralFile(CopyGeneralFileRequest) returns (CopyGeneralFileResult);

message CopyGeneralFileRequest {
  optional FileReference source_file_name = 1;
  optional FileReference destination_file_name = 2;
  optional bool overwrite = 3;
}

message CopyGeneralFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete General File {/* #delete-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#delete-general-file)

`/briosa.FileOperations/DeleteGeneralFile` · Operation ID: `file_operations.delete_general_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_name` | `optional FileReference` | File Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteGeneralFile(DeleteGeneralFileRequest) returns (DeleteGeneralFileResult);

message DeleteGeneralFileRequest {
  optional FileReference file_name = 1;
}

message DeleteGeneralFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Direct CAD Access {/* #direct-cad-access */}

[MP Catalog](/mp-command-catalog/commands/file-operations#direct-cad-access)

`/briosa.FileOperations/DirectCadAccess` · Operation ID: `file_operations.direct_cad_access`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cad_file_name` | `optional FileReference` | CAD File Name | Required |
| Request | 2 | `import_solids` | `optional bool` | Import Solids | true |
| Request | 3 | `import_surfaces` | `optional bool` | Import Surfaces | true |
| Request | 4 | `import_polygonized_surfaces` | `optional bool` | Import Polygonized Surfaces | true |
| Request | 5 | `import_annotations` | `optional bool` | Import Annotations | true |
| Request | 6 | `import_vectors` | `optional bool` | Import Vectors | true |
| Request | 7 | `import_points` | `optional bool` | Import Points | true |
| Request | 8 | `point_group_name` | `optional string` | Point Group Name | CAD pts |
| Request | 9 | `import_attributes_metadata` | `optional bool` | Import Attributes/Metadata | true |
| Request | 10 | `import_cooordinate_frames` | `optional bool` | Import Cooordinate Frames | true |
| Request | 11 | `import_planes` | `optional bool` | Import Planes | true |
| Request | 12 | `import_3d_curves_lines` | `optional bool` | Import 3D Curves - Lines | true |
| Request | 13 | `import_3d_curves_circles` | `optional bool` | Import 3D Curves - Circles | true |
| Request | 14 | `import_3d_curves_general_curves` | `optional bool` | Import 3D Curves - General Curves | true |
| Request | 15 | `import_construction_geometry` | `optional bool` | Import Construction Geometry | false |
| Request | 16 | `import_hidden_entities` | `optional bool` | Import Hidden Entities | false |
| Request | 17 | `import_all_surfaces_as_mesh_graphical_entities` | `optional bool` | Import all Surfaces as Mesh Graphical Entities | false |
| Request | 18 | `do_not_import_fillets` | `optional bool` | Do Not Import Fillets | false |
| Request | 19 | `do_not_import_dittos` | `optional bool` | Do Not Import Dittos | false |
| Request | 20 | `ditto_threshold` | `optional int32` | Ditto Threshold | 1 |
| Request | 21 | `center_view_on_imported_objects` | `optional bool` | Center View on Imported Objects | true |
| Request | 22 | `import_into_folders_matching_cad_file_hierarchy` | `optional bool` | Import into Folders matching CAD file hierarchy | false |
| Request | 23 | `remove_empty_folders` | `optional bool` | Remove Empty Folders | true |
| Request | 24 | `surface_normals_mode_1_or_2` | `optional int32` | Surface Normals Mode (1 or 2) | 1 |
| Request | 25 | `prompt_on_missing_components` | `optional bool` | Prompt on Missing Components | true |
| Request | 26 | `selective_import` | `optional bool` | Selective Import | false |
| Request | 27 | `surface_compatibility_mode` | `optional bool` | Surface Compatibility Mode | Required |
| Request | 28 | `explode_surfaces` | `optional bool` | Explode Surfaces | false |
| Request | 29 | `cad_file_units_leave_blank_to_use_the_units_specified_in_the_file` | `optional string` | CAD File Units (leave blank to use the units specified in the file) | Empty |
| Request | 30 | `build_callout_views` | `optional bool` | Build Callout Views | true |
| Result | 1 | `import_warnings` | `optional bool` | Import Warnings | — |
| Result | 2 | `import_warning_messages` | `optional string` | Import Warning Messages | — |
| Result | 3 | `extents_min` | `optional Vector` | Extents Min | — |
| Result | 4 | `extents_max` | `optional Vector` | Extents Max | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DirectCadAccess(DirectCadAccessRequest) returns (DirectCadAccessResult);

message DirectCadAccessRequest {
  optional FileReference cad_file_name = 1;
  optional bool import_solids = 2;
  optional bool import_surfaces = 3;
  optional bool import_polygonized_surfaces = 4;
  optional bool import_annotations = 5;
  optional bool import_vectors = 6;
  optional bool import_points = 7;
  optional string point_group_name = 8;
  optional bool import_attributes_metadata = 9;
  optional bool import_cooordinate_frames = 10;
  optional bool import_planes = 11;
  optional bool import_3d_curves_lines = 12;
  optional bool import_3d_curves_circles = 13;
  optional bool import_3d_curves_general_curves = 14;
  optional bool import_construction_geometry = 15;
  optional bool import_hidden_entities = 16;
  optional bool import_all_surfaces_as_mesh_graphical_entities = 17;
  optional bool do_not_import_fillets = 18;
  optional bool do_not_import_dittos = 19;
  optional int32 ditto_threshold = 20;
  optional bool center_view_on_imported_objects = 21;
  optional bool import_into_folders_matching_cad_file_hierarchy = 22;
  optional bool remove_empty_folders = 23;
  optional int32 surface_normals_mode_1_or_2 = 24;
  optional bool prompt_on_missing_components = 25;
  optional bool selective_import = 26;
  optional bool surface_compatibility_mode = 27;
  optional bool explode_surfaces = 28;
  optional string cad_file_units_leave_blank_to_use_the_units_specified_in_the_file = 29;
  optional bool build_callout_views = 30;
}

message DirectCadAccessResult {
  optional bool import_warnings = 1;
  optional string import_warning_messages = 2;
  optional Vector extents_min = 3;
  optional Vector extents_max = 4;
  MpExecutionDetails execution = 1000;
}
```

## Export ASCII Frame Set {/* #export-ascii-frame-set */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-frame-set)

`/briosa.FileOperations/ExportAsciiFrameSet` · Operation ID: `file_operations.export_ascii_frame_set`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `optional FileReference` | ASCII File Path | Required |
| Request | 2 | `frame_set_container` | `optional CollectionObjectName` | Frame Set Container | Required |
| Request | 3 | `data_delimiter` | `optional ExportDataDelimeterType` | Data Delimiter | Required |
| Request | 4 | `file_format` | `optional AsciiFileFormat` | File Format | Required |
| Request | 5 | `include_export_format_info` | `optional bool` | Include Export Format Info? | false |
| Request | 6 | `decimal_precision` | `optional int32` | Decimal Precision | 6 |
| Request | 7 | `append` | `optional bool` | Append? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportAsciiFrameSet(ExportAsciiFrameSetRequest) returns (ExportAsciiFrameSetResult);

message ExportAsciiFrameSetRequest {
  optional FileReference ascii_file_path = 1;
  optional CollectionObjectName frame_set_container = 2;
  optional ExportDataDelimeterType data_delimiter = 3;
  optional AsciiFileFormat file_format = 4;
  optional bool include_export_format_info = 5;
  optional int32 decimal_precision = 6;
  optional bool append = 7;
}

message ExportAsciiFrameSetResult {
  MpExecutionDetails execution = 1000;
}
```

## Export ASCII Frames {/* #export-ascii-frames */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-frames)

`/briosa.FileOperations/ExportAsciiFrames` · Operation ID: `file_operations.export_ascii_frames`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `optional FileReference` | ASCII File Path | Required |
| Request | 2 | `object_list` | `repeated CollectionObjectName` | Object List | Required |
| Request | 3 | `export_frame_mode` | `optional string` | Export Frame Mode | Fixed XYZ |
| Request | 4 | `overwrite_existing_file` | `optional bool` | Overwrite existing file? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportAsciiFrames(ExportAsciiFramesRequest) returns (ExportAsciiFramesResult);

message ExportAsciiFramesRequest {
  optional FileReference ascii_file_path = 1;
  repeated CollectionObjectName object_list = 2;
  optional string export_frame_mode = 3;
  optional bool overwrite_existing_file = 4;
}

message ExportAsciiFramesResult {
  MpExecutionDetails execution = 1000;
}
```

## Export ASCII Point Clouds {/* #export-ascii-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-point-clouds)

`/briosa.FileOperations/ExportAsciiPointClouds` · Operation ID: `file_operations.export_ascii_point_clouds`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `optional FileReference` | ASCII File Path | Required |
| Request | 2 | `point_cloud_list` | `repeated CollectionObjectName` | Point Cloud List | Required |
| Request | 3 | `data_delimiter` | `optional ExportDataDelimeterType` | Data Delimiter | Required |
| Request | 4 | `overwrite_existing_file` | `optional bool` | Overwrite existing file? | false |
| Request | 5 | `show_progress_dialog` | `optional bool` | Show Progress Dialog? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportAsciiPointClouds(ExportAsciiPointCloudsRequest) returns (ExportAsciiPointCloudsResult);

message ExportAsciiPointCloudsRequest {
  optional FileReference ascii_file_path = 1;
  repeated CollectionObjectName point_cloud_list = 2;
  optional ExportDataDelimeterType data_delimiter = 3;
  optional bool overwrite_existing_file = 4;
  optional bool show_progress_dialog = 5;
}

message ExportAsciiPointCloudsResult {
  MpExecutionDetails execution = 1000;
}
```

## Export ASCII Point Set {/* #export-ascii-point-set */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-point-set)

`/briosa.FileOperations/ExportAsciiPointSet` · Operation ID: `file_operations.export_ascii_point_set`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `optional FileReference` | ASCII File Path | Required |
| Request | 2 | `point_set_container` | `optional CollectionObjectName` | Point Set Container | Required |
| Request | 3 | `data_delimiter` | `optional ExportDataDelimeterType` | Data Delimiter | Required |
| Request | 4 | `target_name_format` | `optional ExportTargetNameFormat` | Target Name Format | Required |
| Request | 5 | `desired_coordinate_system` | `optional CoordinateSystemType` | Desired Coordinate System | Required |
| Request | 6 | `include_target_offsets` | `optional bool` | Include Target Offsets? | false |
| Request | 7 | `include_timestamps` | `optional bool` | Include Timestamps? | false |
| Request | 8 | `include_sa_version_and_frame_comments` | `optional bool` | Include SA version and frame comments? | false |
| Request | 9 | `include_axis_comments` | `optional bool` | Include Axis Comments? | false |
| Request | 10 | `include_export_format_info` | `optional bool` | Include Export Format Info? | false |
| Request | 11 | `maximum_precision_scientific_notation` | `optional bool` | Maximum Precision (Scientific Notation)? | false |
| Request | 12 | `decimal_precision` | `optional int32` | Decimal Precision | 6 |
| Request | 13 | `append` | `optional bool` | Append? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportAsciiPointSet(ExportAsciiPointSetRequest) returns (ExportAsciiPointSetResult);

message ExportAsciiPointSetRequest {
  optional FileReference ascii_file_path = 1;
  optional CollectionObjectName point_set_container = 2;
  optional ExportDataDelimeterType data_delimiter = 3;
  optional ExportTargetNameFormat target_name_format = 4;
  optional CoordinateSystemType desired_coordinate_system = 5;
  optional bool include_target_offsets = 6;
  optional bool include_timestamps = 7;
  optional bool include_sa_version_and_frame_comments = 8;
  optional bool include_axis_comments = 9;
  optional bool include_export_format_info = 10;
  optional bool maximum_precision_scientific_notation = 11;
  optional int32 decimal_precision = 12;
  optional bool append = 13;
}

message ExportAsciiPointSetResult {
  MpExecutionDetails execution = 1000;
}
```

## Export ASCII Points {/* #export-ascii-points */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-points)

`/briosa.FileOperations/ExportAsciiPoints` · Operation ID: `file_operations.export_ascii_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `optional FileReference` | ASCII File Path | Required |
| Request | 2 | `group_names_to_export` | `repeated CollectionGroupName` | Group Names to export | Required |
| Request | 3 | `data_delimiter` | `optional ExportDataDelimeterType` | Data Delimiter | Required |
| Request | 4 | `target_name_format` | `optional ExportTargetNameFormat` | Target Name Format | Required |
| Request | 5 | `desired_coordinate_system` | `optional CoordinateSystemType` | Desired Coordinate System | Required |
| Request | 6 | `include_target_offsets` | `optional bool` | Include Target Offsets? | false |
| Request | 7 | `include_target_comments` | `optional bool` | Include Target Comments? | false |
| Request | 8 | `include_timestamps` | `optional bool` | Include Timestamps? | false |
| Request | 9 | `include_tolerances` | `optional bool` | Include Tolerances? | false |
| Request | 10 | `include_coordinate_uncertainties` | `optional bool` | Include Coordinate Uncertainties? | false |
| Request | 11 | `include_sa_version_and_frame_comments` | `optional bool` | Include SA version and frame comments? | false |
| Request | 12 | `include_axis_comments` | `optional bool` | Include Axis Comments? | false |
| Request | 13 | `include_export_format_info` | `optional bool` | Include Export Format Info? | false |
| Request | 14 | `include_weights` | `optional bool` | Include Weights? | false |
| Request | 15 | `include_measurement_details` | `optional bool` | Include Measurement Details? | false |
| Request | 16 | `maximum_precision_scientific_notation` | `optional bool` | Maximum Precision (Scientific Notation)? | false |
| Request | 17 | `decimal_precision` | `optional int32` | Decimal Precision | 6 |
| Request | 18 | `append` | `optional bool` | Append? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportAsciiPoints(ExportAsciiPointsRequest) returns (ExportAsciiPointsResult);

message ExportAsciiPointsRequest {
  optional FileReference ascii_file_path = 1;
  repeated CollectionGroupName group_names_to_export = 2;
  optional ExportDataDelimeterType data_delimiter = 3;
  optional ExportTargetNameFormat target_name_format = 4;
  optional CoordinateSystemType desired_coordinate_system = 5;
  optional bool include_target_offsets = 6;
  optional bool include_target_comments = 7;
  optional bool include_timestamps = 8;
  optional bool include_tolerances = 9;
  optional bool include_coordinate_uncertainties = 10;
  optional bool include_sa_version_and_frame_comments = 11;
  optional bool include_axis_comments = 12;
  optional bool include_export_format_info = 13;
  optional bool include_weights = 14;
  optional bool include_measurement_details = 15;
  optional bool maximum_precision_scientific_notation = 16;
  optional int32 decimal_precision = 17;
  optional bool append = 18;
}

message ExportAsciiPointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Export DXF {/* #export-dxf */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-dxf)

`/briosa.FileOperations/ExportDxf` · Operation ID: `file_operations.export_dxf`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dxf_file_path` | `optional FileReference` | DXF File Path | Required |
| Request | 2 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 3 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 4 | `include_point_labels` | `optional bool` | Include Point Labels? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportDxf(ExportDxfRequest) returns (ExportDxfResult);

message ExportDxfRequest {
  optional FileReference dxf_file_path = 1;
  repeated PointName point_names = 2;
  repeated CollectionObjectName cloud_names = 3;
  optional bool include_point_labels = 4;
}

message ExportDxfResult {
  MpExecutionDetails execution = 1000;
}
```

## Export Embedded File {/* #export-embedded-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-embedded-file)

`/briosa.FileOperations/ExportEmbeddedFile` · Operation ID: `file_operations.export_embedded_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `embedded_file_collection_name` | `optional CollectionName` | Embedded File Collection Name | Required |
| Request | 2 | `embedded_file_name` | `optional string` | Embedded File Name | Empty |
| Request | 3 | `external_file_name` | `optional FileReference` | External File Name | Required |
| Request | 4 | `replace_existing` | `optional bool` | Replace Existing? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportEmbeddedFile(ExportEmbeddedFileRequest) returns (ExportEmbeddedFileResult);

message ExportEmbeddedFileRequest {
  optional CollectionName embedded_file_collection_name = 1;
  optional string embedded_file_name = 2;
  optional FileReference external_file_name = 3;
  optional bool replace_existing = 4;
}

message ExportEmbeddedFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Export Hidden Point Bar XML File {/* #export-hidden-point-bar-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-hidden-point-bar-xml-file)

`/briosa.FileOperations/ExportHiddenPointBarXmlFile` · Operation ID: `file_operations.export_hidden_point_bar_xml_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `xml_file_path` | `optional FileReference` | XML File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportHiddenPointBarXmlFile(ExportHiddenPointBarXmlFileRequest) returns (ExportHiddenPointBarXmlFileResult);

message ExportHiddenPointBarXmlFileRequest {
  optional FileReference xml_file_path = 1;
}

message ExportHiddenPointBarXmlFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Export IGES File  - Entire Model {/* #export-iges-file----entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-iges-file----entire-model)

`/briosa.FileOperations/ExportIgesFileEntireModel` · Operation ID: `file_operations.export_iges_file_entire_model`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `iges_file_path` | `optional FileReference` | IGES File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportIgesFileEntireModel(ExportIgesFileEntireModelRequest) returns (ExportIgesFileEntireModelResult);

message ExportIgesFileEntireModelRequest {
  optional FileReference iges_file_path = 1;
}

message ExportIgesFileEntireModelResult {
  MpExecutionDetails execution = 1000;
}
```

## Export IGES File - Partial Model {/* #export-iges-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-iges-file---partial-model)

`/briosa.FileOperations/ExportIgesFilePartialModel` · Operation ID: `file_operations.export_iges_file_partial_model`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `iges_file_path` | `optional FileReference` | IGES File Path | Required |
| Request | 2 | `object_name_list` | `repeated CollectionObjectName` | Object Name List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportIgesFilePartialModel(ExportIgesFilePartialModelRequest) returns (ExportIgesFilePartialModelResult);

message ExportIgesFilePartialModelRequest {
  optional FileReference iges_file_path = 1;
  repeated CollectionObjectName object_name_list = 2;
}

message ExportIgesFilePartialModelResult {
  MpExecutionDetails execution = 1000;
}
```

## Export PTX Point Clouds {/* #export-ptx-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ptx-point-clouds)

`/briosa.FileOperations/ExportPtxPointClouds` · Operation ID: `file_operations.export_ptx_point_clouds`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ptx_file_path` | `optional FileReference` | PTX File Path | Required |
| Request | 2 | `point_cloud_list` | `repeated CollectionObjectName` | Point Cloud List | Required |
| Request | 3 | `overwrite_existing_file` | `optional bool` | Overwrite existing file? | false |
| Request | 4 | `show_progress_dialog` | `optional bool` | Show Progress Dialog? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportPtxPointClouds(ExportPtxPointCloudsRequest) returns (ExportPtxPointCloudsResult);

message ExportPtxPointCloudsRequest {
  optional FileReference ptx_file_path = 1;
  repeated CollectionObjectName point_cloud_list = 2;
  optional bool overwrite_existing_file = 3;
  optional bool show_progress_dialog = 4;
}

message ExportPtxPointCloudsResult {
  MpExecutionDetails execution = 1000;
}
```

## Export QDAS Characteristics {/* #export-qdas-characteristics */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-qdas-characteristics)

`/briosa.FileOperations/ExportQdasCharacteristics` · Operation ID: `file_operations.export_qdas_characteristics`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `qdas_export_file_path` | `optional FileReference` | QDAS Export File Path | Required |
| Request | 2 | `k1001_part_number` | `optional string` | K1001: Part Number | Empty |
| Request | 3 | `k1002_part_description` | `optional string` | K1002: Part Description | Empty |
| Request | 4 | `k1071_supplier_number` | `optional string` | K1071: Supplier Number | Empty |
| Request | 5 | `k1072_supplier_description` | `optional string` | K1072: Supplier Description | Empty |
| Request | 6 | `k1203_reason_for_test` | `optional string` | K1203: Reason for Test | Empty |
| Request | 7 | `k1303_plant` | `optional string` | K1303: Plant | Empty |
| Request | 8 | `k1900_part_remark` | `optional string` | K1900: Part Remark | Empty |
| Request | 9 | `k0006_batch_number` | `optional string` | K0006: Batch Number | Empty |
| Request | 10 | `k0014_part_id` | `optional string` | K0014: Part ID | Empty |
| Request | 11 | `k0053_order_number` | `optional string` | K0053: Order Number | Empty |
| Request | 12 | `k0004_date_time_stamp` | `optional string` | K0004: Date Time Stamp | Required |
| Request | 13 | `k0008_operator_identifier` | `optional int32` | K0008: Operator Identifier | -1 |
| Request | 14 | `k0010_machine_identifier` | `optional int32` | K0010: Machine Identifier | -1 |
| Request | 15 | `k0012_gage_identifier` | `optional int32` | K0012: Gage Identifier | -1 |
| Request | 16 | `relationship_list` | `repeated CollectionItemName` | Relationship List | Required |
| Request | 17 | `feature_check_list` | `repeated CollectionItemName` | Feature Check List | Required |
| Request | 18 | `vector_group_list` | `repeated CollectionObjectName` | Vector Group List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportQdasCharacteristics(ExportQdasCharacteristicsRequest) returns (ExportQdasCharacteristicsResult);

message ExportQdasCharacteristicsRequest {
  optional FileReference qdas_export_file_path = 1;
  optional string k1001_part_number = 2;
  optional string k1002_part_description = 3;
  optional string k1071_supplier_number = 4;
  optional string k1072_supplier_description = 5;
  optional string k1203_reason_for_test = 6;
  optional string k1303_plant = 7;
  optional string k1900_part_remark = 8;
  optional string k0006_batch_number = 9;
  optional string k0014_part_id = 10;
  optional string k0053_order_number = 11;
  optional string k0004_date_time_stamp = 12;
  optional int32 k0008_operator_identifier = 13;
  optional int32 k0010_machine_identifier = 14;
  optional int32 k0012_gage_identifier = 15;
  repeated CollectionItemName relationship_list = 16;
  repeated CollectionItemName feature_check_list = 17;
  repeated CollectionObjectName vector_group_list = 18;
}

message ExportQdasCharacteristicsResult {
  MpExecutionDetails execution = 1000;
}
```

## Export QDAS Data List {/* #export-qdas-data-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-qdas-data-list)

`/briosa.FileOperations/ExportQdasDataList` · Operation ID: `file_operations.export_qdas_data_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `qdas_export_file_path` | `optional FileReference` | QDAS Export File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportQdasDataList(ExportQdasDataListRequest) returns (ExportQdasDataListResult);

message ExportQdasDataListRequest {
  optional FileReference qdas_export_file_path = 1;
}

message ExportQdasDataListResult {
  MpExecutionDetails execution = 1000;
}
```

## Export Scan Stripe Mesh to STL File {/* #export-scan-stripe-mesh-to-stl-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-scan-stripe-mesh-to-stl-file)

`/briosa.FileOperations/ExportScanStripeMeshToStlFile` · Operation ID: `file_operations.export_scan_stripe_mesh_to_stl_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `stl_file_path` | `optional FileReference` | STL File Path | Required |
| Request | 2 | `mesh` | `optional CollectionObjectName` | Mesh | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportScanStripeMeshToStlFile(ExportScanStripeMeshToStlFileRequest) returns (ExportScanStripeMeshToStlFileResult);

message ExportScanStripeMeshToStlFileRequest {
  optional FileReference stl_file_path = 1;
  optional CollectionObjectName mesh = 2;
}

message ExportScanStripeMeshToStlFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Export STEP File - Entire Model {/* #export-step-file---entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-step-file---entire-model)

`/briosa.FileOperations/ExportStepFileEntireModel` · Operation ID: `file_operations.export_step_file_entire_model`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `step_file_path` | `optional FileReference` | STEP File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportStepFileEntireModel(ExportStepFileEntireModelRequest) returns (ExportStepFileEntireModelResult);

message ExportStepFileEntireModelRequest {
  optional FileReference step_file_path = 1;
}

message ExportStepFileEntireModelResult {
  MpExecutionDetails execution = 1000;
}
```

## Export STEP File - Partial Model {/* #export-step-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-step-file---partial-model)

`/briosa.FileOperations/ExportStepFilePartialModel` · Operation ID: `file_operations.export_step_file_partial_model`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `step_file_path` | `optional FileReference` | STEP File Path | Required |
| Request | 2 | `object_name_list` | `repeated CollectionObjectName` | Object Name List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportStepFilePartialModel(ExportStepFilePartialModelRequest) returns (ExportStepFilePartialModelResult);

message ExportStepFilePartialModelRequest {
  optional FileReference step_file_path = 1;
  repeated CollectionObjectName object_name_list = 2;
}

message ExportStepFilePartialModelResult {
  MpExecutionDetails execution = 1000;
}
```

## Export VDA/FS File  - Entire Model {/* #export-vdafs-file----entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vdafs-file----entire-model)

`/briosa.FileOperations/ExportVdaFsFileEntireModel` · Operation ID: `file_operations.export_vda_fs_file_entire_model`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vda_fs_file_path` | `optional FileReference` | VDA/FS File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportVdaFsFileEntireModel(ExportVdaFsFileEntireModelRequest) returns (ExportVdaFsFileEntireModelResult);

message ExportVdaFsFileEntireModelRequest {
  optional FileReference vda_fs_file_path = 1;
}

message ExportVdaFsFileEntireModelResult {
  MpExecutionDetails execution = 1000;
}
```

## Export VDA/FS File - Partial Model {/* #export-vdafs-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vdafs-file---partial-model)

`/briosa.FileOperations/ExportVdaFsFilePartialModel` · Operation ID: `file_operations.export_vda_fs_file_partial_model`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vda_fs_file_path` | `optional FileReference` | VDA/FS File Path | Required |
| Request | 2 | `object_name_list` | `repeated CollectionObjectName` | Object Name List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportVdaFsFilePartialModel(ExportVdaFsFilePartialModelRequest) returns (ExportVdaFsFilePartialModelResult);

message ExportVdaFsFilePartialModelRequest {
  optional FileReference vda_fs_file_path = 1;
  repeated CollectionObjectName object_name_list = 2;
}

message ExportVdaFsFilePartialModelResult {
  MpExecutionDetails execution = 1000;
}
```

## Export Vector Container to ASCII File {/* #export-vector-container-to-ascii-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vector-container-to-ascii-file)

`/briosa.FileOperations/ExportVectorContainerToAsciiFile` · Operation ID: `file_operations.export_vector_container_to_ascii_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `optional FileReference` | Ascii File Path | Required |
| Request | 2 | `vector_groups_to_export` | `repeated CollectionVectorGroupName` | Vector group(s) to export | Required |
| Request | 3 | `overwrite_existing_file_false_append` | `optional bool` | Overwrite existing file? (FALSE = Append) | true |
| Request | 4 | `use_full_precision_scientific_notation` | `optional bool` | Use Full Precision (Scientific Notation)? | false |
| Request | 5 | `vector_name_format` | `optional ExportVectorNameFormat` | Vector Name Format | Required |
| Request | 6 | `include_vector_length` | `optional bool` | Include Vector Length? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportVectorContainerToAsciiFile(ExportVectorContainerToAsciiFileRequest) returns (ExportVectorContainerToAsciiFileResult);

message ExportVectorContainerToAsciiFileRequest {
  optional FileReference ascii_file_path = 1;
  repeated CollectionVectorGroupName vector_groups_to_export = 2;
  optional bool overwrite_existing_file_false_append = 3;
  optional bool use_full_precision_scientific_notation = 4;
  optional ExportVectorNameFormat vector_name_format = 5;
  optional bool include_vector_length = 6;
}

message ExportVectorContainerToAsciiFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Find Files in Directory {/* #find-files-in-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#find-files-in-directory)

`/briosa.FileOperations/FindFilesInDirectory` · Operation ID: `file_operations.find_files_in_directory`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `directory` | `optional string` | Directory | Empty |
| Request | 2 | `file_name_pattern` | `optional string` | File Name Pattern | *.* |
| Request | 3 | `recursive` | `optional bool` | Recursive? | false |
| Result | 1 | `files` | `repeated string` | Files | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FindFilesInDirectory(FindFilesInDirectoryRequest) returns (FindFilesInDirectoryResult);

message FindFilesInDirectoryRequest {
  optional string directory = 1;
  optional string file_name_pattern = 2;
  optional bool recursive = 3;
}

message FindFilesInDirectoryResult {
  repeated string files = 1;
  MpExecutionDetails execution = 1000;
}
```

## Find Sub-Directories in Directory {/* #find-sub-directories-in-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#find-sub-directories-in-directory)

`/briosa.FileOperations/FindSubDirectoriesInDirectory` · Operation ID: `file_operations.find_sub_directories_in_directory`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `directory` | `optional string` | Directory | Empty |
| Request | 2 | `recursive` | `optional bool` | Recursive? | false |
| Result | 1 | `sub_directories` | `repeated string` | Sub-Directories | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FindSubDirectoriesInDirectory(FindSubDirectoriesInDirectoryRequest) returns (FindSubDirectoriesInDirectoryResult);

message FindSubDirectoriesInDirectoryRequest {
  optional string directory = 1;
  optional bool recursive = 2;
}

message FindSubDirectoriesInDirectoryResult {
  repeated string sub_directories = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Boolean From DataShare File {/* #get-boolean-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-boolean-from-datashare-file)

`/briosa.FileOperations/GetBooleanFromDataShareFile` · Operation ID: `file_operations.get_boolean_from_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `boolean_name` | `optional string` | Boolean Name | Empty |
| Result | 1 | `boolean_value` | `optional bool` | Boolean Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetBooleanFromDataShareFile(GetBooleanFromDataShareFileRequest) returns (GetBooleanFromDataShareFileResult);

message GetBooleanFromDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string boolean_name = 2;
}

message GetBooleanFromDataShareFileResult {
  optional bool boolean_value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Double From DataShare File {/* #get-double-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-double-from-datashare-file)

`/briosa.FileOperations/GetDoubleFromDataShareFile` · Operation ID: `file_operations.get_double_from_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `double_name` | `optional string` | Double Name | Empty |
| Result | 1 | `double_value` | `optional double` | Double Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetDoubleFromDataShareFile(GetDoubleFromDataShareFileRequest) returns (GetDoubleFromDataShareFileResult);

message GetDoubleFromDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string double_name = 2;
}

message GetDoubleFromDataShareFileResult {
  optional double double_value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Integer From DataShare File {/* #get-integer-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-integer-from-datashare-file)

`/briosa.FileOperations/GetIntegerFromDataShareFile` · Operation ID: `file_operations.get_integer_from_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `integer_name` | `optional string` | Integer Name | Empty |
| Result | 1 | `integer_value` | `optional int32` | Integer Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetIntegerFromDataShareFile(GetIntegerFromDataShareFileRequest) returns (GetIntegerFromDataShareFileResult);

message GetIntegerFromDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string integer_name = 2;
}

message GetIntegerFromDataShareFileResult {
  optional int32 integer_value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get QDAS Catalog Entries {/* #get-qdas-catalog-entries */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-qdas-catalog-entries)

`/briosa.FileOperations/GetQdasCatalogEntries` · Operation ID: `file_operations.get_qdas_catalog_entries`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `k_field_target` | `optional string` | K-Field Target | Empty |
| Result | 1 | `catalog_entries` | `repeated string` | Catalog Entries | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetQdasCatalogEntries(GetQdasCatalogEntriesRequest) returns (GetQdasCatalogEntriesResult);

message GetQdasCatalogEntriesRequest {
  optional string k_field_target = 1;
}

message GetQdasCatalogEntriesResult {
  repeated string catalog_entries = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get String From DataShare File {/* #get-string-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-string-from-datashare-file)

`/briosa.FileOperations/GetStringFromDataShareFile` · Operation ID: `file_operations.get_string_from_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `string_name` | `optional string` | String Name | Empty |
| Result | 1 | `string_value` | `optional string` | String Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetStringFromDataShareFile(GetStringFromDataShareFileRequest) returns (GetStringFromDataShareFileResult);

message GetStringFromDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string string_name = 2;
}

message GetStringFromDataShareFileResult {
  optional string string_value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Transform From DataShare File {/* #get-transform-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-transform-from-datashare-file)

`/briosa.FileOperations/GetTransformFromDataShareFile` · Operation ID: `file_operations.get_transform_from_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `transform_name` | `optional string` | Transform Name | Empty |
| Result | 1 | `transform_value` | `optional Transform` | Transform Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetTransformFromDataShareFile(GetTransformFromDataShareFileRequest) returns (GetTransformFromDataShareFileResult);

message GetTransformFromDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string transform_name = 2;
}

message GetTransformFromDataShareFileResult {
  optional Transform transform_value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Vector From DataShare File {/* #get-vector-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-vector-from-datashare-file)

`/briosa.FileOperations/GetVectorFromDataShareFile` · Operation ID: `file_operations.get_vector_from_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `vector_name` | `optional string` | Vector Name | Empty |
| Result | 1 | `vector_value` | `optional Vector` | Vector Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetVectorFromDataShareFile(GetVectorFromDataShareFileRequest) returns (GetVectorFromDataShareFileResult);

message GetVectorFromDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string vector_name = 2;
}

message GetVectorFromDataShareFileResult {
  optional Vector vector_value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Working Directory {/* #get-working-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-working-directory)

`/briosa.FileOperations/GetWorkingDirectory` · Operation ID: `file_operations.get_working_directory`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `directory` | `optional string` | Directory | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetWorkingDirectory(GetWorkingDirectoryRequest) returns (GetWorkingDirectoryResult);

message GetWorkingDirectoryRequest {
  // No MP inputs.
}

message GetWorkingDirectoryResult {
  optional string directory = 1;
  MpExecutionDetails execution = 1000;
}
```

## Import ASCII: Predefined Formats {/* #import-ascii-predefined-formats */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-ascii-predefined-formats)

`/briosa.FileOperations/ImportAsciiPredefinedFormats` · Operation ID: `file_operations.import_ascii_predefined_formats`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `optional FileReference` | ASCII File Path | Required |
| Request | 2 | `file_format` | `optional AsciiFileFormat` | File Format | Required |
| Request | 3 | `units` | `optional DistanceUnits` | Units | Inches |
| Request | 4 | `angular_units` | `optional AngularUnits` | Angular Units | Degrees |
| Request | 5 | `group_name` | `optional CollectionObjectName` | Group Name | Required |
| Request | 6 | `import_as_cloud` | `optional bool` | Import as Cloud | false |
| Request | 7 | `ensure_new_point_group` | `optional bool` | Ensure New Point Group | true |
| Request | 8 | `ensure_unique_names` | `optional bool` | Ensure Unique Names | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportAsciiPredefinedFormats(ImportAsciiPredefinedFormatsRequest) returns (ImportAsciiPredefinedFormatsResult);

message ImportAsciiPredefinedFormatsRequest {
  optional FileReference ascii_file_path = 1;
  optional AsciiFileFormat file_format = 2;
  optional DistanceUnits units = 3;
  optional AngularUnits angular_units = 4;
  optional CollectionObjectName group_name = 5;
  optional bool import_as_cloud = 6;
  optional bool ensure_new_point_group = 7;
  optional bool ensure_unique_names = 8;
}

message ImportAsciiPredefinedFormatsResult {
  MpExecutionDetails execution = 1000;
}
```

## Import ASCII: Predefined Frame Set Formats {/* #import-ascii-predefined-frame-set-formats */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-ascii-predefined-frame-set-formats)

`/briosa.FileOperations/ImportAsciiPredefinedFrameSetFormats` · Operation ID: `file_operations.import_ascii_predefined_frame_set_formats`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `optional FileReference` | ASCII File Path | Required |
| Request | 2 | `file_format` | `optional AsciiFileFormat` | File Format | Required |
| Request | 3 | `units` | `optional DistanceUnits` | Units | Inches |
| Request | 4 | `angular_units` | `optional AngularUnits` | Angular Units | Degrees |
| Request | 5 | `frame_set_container_name` | `optional CollectionObjectName` | Frame Set Container Name | Required |
| Request | 6 | `ensure_unique_name` | `optional bool` | Ensure Unique Name | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportAsciiPredefinedFrameSetFormats(ImportAsciiPredefinedFrameSetFormatsRequest) returns (ImportAsciiPredefinedFrameSetFormatsResult);

message ImportAsciiPredefinedFrameSetFormatsRequest {
  optional FileReference ascii_file_path = 1;
  optional AsciiFileFormat file_format = 2;
  optional DistanceUnits units = 3;
  optional AngularUnits angular_units = 4;
  optional CollectionObjectName frame_set_container_name = 5;
  optional bool ensure_unique_name = 6;
}

message ImportAsciiPredefinedFrameSetFormatsResult {
  MpExecutionDetails execution = 1000;
}
```

## Import E57 File {/* #import-e57-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-e57-file)

`/briosa.FileOperations/ImportE57File` · Operation ID: `file_operations.import_e57_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `e57_file_path` | `optional FileReference` | E57 File Path | Required |
| Request | 2 | `save_converted_file` | `optional bool` | Save Converted File | false |
| Request | 3 | `use_square_root_of_intensity` | `optional bool` | Use Square Root of Intensity | true |
| Request | 4 | `automatically_close_converter` | `optional bool` | Automatically Close Converter | true |
| Request | 5 | `prioritize_color_over_intensity` | `optional bool` | Prioritize Color Over Intensity | true |
| Request | 6 | `import_scan_blocks_as_separate_clouds` | `optional bool` | Import Scan Blocks As Separate Clouds | false |
| Request | 7 | `units` | `optional DistanceUnits` | Units | Inches |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportE57File(ImportE57FileRequest) returns (ImportE57FileResult);

message ImportE57FileRequest {
  optional FileReference e57_file_path = 1;
  optional bool save_converted_file = 2;
  optional bool use_square_root_of_intensity = 3;
  optional bool automatically_close_converter = 4;
  optional bool prioritize_color_over_intensity = 5;
  optional bool import_scan_blocks_as_separate_clouds = 6;
  optional DistanceUnits units = 7;
}

message ImportE57FileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import File as Embedded File {/* #import-file-as-embedded-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-file-as-embedded-file)

`/briosa.FileOperations/ImportFileAsEmbeddedFile` · Operation ID: `file_operations.import_file_as_embedded_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `external_file_name` | `optional FileReference` | External File Name | Required |
| Request | 2 | `replace_existing` | `optional bool` | Replace Existing? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportFileAsEmbeddedFile(ImportFileAsEmbeddedFileRequest) returns (ImportFileAsEmbeddedFileResult);

message ImportFileAsEmbeddedFileRequest {
  optional FileReference external_file_name = 1;
  optional bool replace_existing = 2;
}

message ImportFileAsEmbeddedFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import File as Picture {/* #import-file-as-picture */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-file-as-picture)

`/briosa.FileOperations/ImportFileAsPicture` · Operation ID: `file_operations.import_file_as_picture`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `external_file_name` | `optional FileReference` | External File Name | Required |
| Request | 2 | `replace_existing` | `optional bool` | Replace Existing? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportFileAsPicture(ImportFileAsPictureRequest) returns (ImportFileAsPictureResult);

message ImportFileAsPictureRequest {
  optional FileReference external_file_name = 1;
  optional bool replace_existing = 2;
}

message ImportFileAsPictureResult {
  MpExecutionDetails execution = 1000;
}
```

## Import Hidden Point Bar XML File {/* #import-hidden-point-bar-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-hidden-point-bar-xml-file)

`/briosa.FileOperations/ImportHiddenPointBarXmlFile` · Operation ID: `file_operations.import_hidden_point_bar_xml_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `xml_file_path` | `optional FileReference` | XML File Path | Required |
| Request | 2 | `replace_existing_entries` | `optional bool` | Replace Existing Entries? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportHiddenPointBarXmlFile(ImportHiddenPointBarXmlFileRequest) returns (ImportHiddenPointBarXmlFileResult);

message ImportHiddenPointBarXmlFileRequest {
  optional FileReference xml_file_path = 1;
  optional bool replace_existing_entries = 2;
}

message ImportHiddenPointBarXmlFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import IGES File {/* #import-iges-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-iges-file)

`/briosa.FileOperations/ImportIgesFile` · Operation ID: `file_operations.import_iges_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `iges_file_path` | `optional FileReference` | IGES File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportIgesFile(ImportIgesFileRequest) returns (ImportIgesFileResult);

message ImportIgesFileRequest {
  optional FileReference iges_file_path = 1;
}

message ImportIgesFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import Leica GSI File {/* #import-leica-gsi-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-leica-gsi-file)

`/briosa.FileOperations/ImportLeicaGsiFile` · Operation ID: `file_operations.import_leica_gsi_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_id` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `group_name` | `optional CollectionObjectName` | Group Name | Required |
| Request | 3 | `file_path` | `optional FileReference` | File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportLeicaGsiFile(ImportLeicaGsiFileRequest) returns (ImportLeicaGsiFileResult);

message ImportLeicaGsiFileRequest {
  optional CollectionInstrumentId instrument_id = 1;
  optional CollectionObjectName group_name = 2;
  optional FileReference file_path = 3;
}

message ImportLeicaGsiFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import Leica SDB File {/* #import-leica-sdb-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-leica-sdb-file)

`/briosa.FileOperations/ImportLeicaSdbFile` · Operation ID: `file_operations.import_leica_sdb_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_id` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `scan_cloud_name` | `optional CollectionObjectName` | Scan Cloud Name | Required |
| Request | 3 | `file_path` | `optional FileReference` | File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportLeicaSdbFile(ImportLeicaSdbFileRequest) returns (ImportLeicaSdbFileResult);

message ImportLeicaSdbFileRequest {
  optional CollectionInstrumentId instrument_id = 1;
  optional CollectionObjectName scan_cloud_name = 2;
  optional FileReference file_path = 3;
}

message ImportLeicaSdbFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import MP File as Embedded MP {/* #import-mp-file-as-embedded-mp */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-mp-file-as-embedded-mp)

`/briosa.FileOperations/ImportMpFileAsEmbeddedMp` · Operation ID: `file_operations.import_mp_file_as_embedded_mp`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `external_mp_file_name` | `optional FileReference` | External MP File Name | Required |
| Request | 2 | `replace_existing` | `optional bool` | Replace Existing? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportMpFileAsEmbeddedMp(ImportMpFileAsEmbeddedMpRequest) returns (ImportMpFileAsEmbeddedMpResult);

message ImportMpFileAsEmbeddedMpRequest {
  optional FileReference external_mp_file_name = 1;
  optional bool replace_existing = 2;
}

message ImportMpFileAsEmbeddedMpResult {
  MpExecutionDetails execution = 1000;
}
```

## Import Nominals from XML File {/* #import-nominals-from-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-nominals-from-xml-file)

`/briosa.FileOperations/ImportNominalsFromXmlFile` · Operation ID: `file_operations.import_nominals_from_xml_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `optional FileReference` | File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportNominalsFromXmlFile(ImportNominalsFromXmlFileRequest) returns (ImportNominalsFromXmlFileResult);

message ImportNominalsFromXmlFileRequest {
  optional FileReference file_path = 1;
}

message ImportNominalsFromXmlFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import Polyworks File {/* #import-polyworks-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-polyworks-file)

`/briosa.FileOperations/ImportPolyworksFile` · Operation ID: `file_operations.import_polyworks_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_name` | `optional CollectionObjectName` | Cloud Name | Required |
| Request | 2 | `file_path` | `optional FileReference` | File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportPolyworksFile(ImportPolyworksFileRequest) returns (ImportPolyworksFileResult);

message ImportPolyworksFileRequest {
  optional CollectionObjectName cloud_name = 1;
  optional FileReference file_path = 2;
}

message ImportPolyworksFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import QDAS Catalog File {/* #import-qdas-catalog-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-qdas-catalog-file)

`/briosa.FileOperations/ImportQdasCatalogFile` · Operation ID: `file_operations.import_qdas_catalog_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `qdas_dfd_file_path` | `optional FileReference` | QDAS DFD File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportQdasCatalogFile(ImportQdasCatalogFileRequest) returns (ImportQdasCatalogFileResult);

message ImportQdasCatalogFileRequest {
  optional FileReference qdas_dfd_file_path = 1;
}

message ImportQdasCatalogFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import SA File {/* #import-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sa-file)

`/briosa.FileOperations/ImportSaFile` · Operation ID: `file_operations.import_sa_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sa_file_name` | `optional FileReference` | SA File Name | Required |
| Request | 2 | `allow_operator_selections` | `optional bool` | Allow Operator Selections | false |
| Request | 3 | `selected_collections_optional` | `repeated string` | Selected Collections (optional) | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportSaFile(ImportSaFileRequest) returns (ImportSaFileResult);

message ImportSaFileRequest {
  optional FileReference sa_file_name = 1;
  optional bool allow_operator_selections = 2;
  repeated string selected_collections_optional = 3;
}

message ImportSaFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import SA Windows Placement {/* #import-sa-windows-placement */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sa-windows-placement)

`/briosa.FileOperations/ImportSaWindowsPlacement` · Operation ID: `file_operations.import_sa_windows_placement`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `optional FileReference` | File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportSaWindowsPlacement(ImportSaWindowsPlacementRequest) returns (ImportSaWindowsPlacementResult);

message ImportSaWindowsPlacementRequest {
  optional FileReference file_path = 1;
}

message ImportSaWindowsPlacementResult {
  MpExecutionDetails execution = 1000;
}
```

## Import SAT File {/* #import-sat-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sat-file)

`/briosa.FileOperations/ImportSatFile` · Operation ID: `file_operations.import_sat_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sat_file_path` | `optional FileReference` | SAT File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportSatFile(ImportSatFileRequest) returns (ImportSatFileResult);

message ImportSatFileRequest {
  optional FileReference sat_file_path = 1;
}

message ImportSatFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import STEP File {/* #import-step-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-step-file)

`/briosa.FileOperations/ImportStepFile` · Operation ID: `file_operations.import_step_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `step_file_path` | `optional FileReference` | STEP File Path | Required |
| Request | 2 | `display_entity_filters` | `optional bool` | Display Entity Filters | false |
| Request | 3 | `display_residuals` | `optional bool` | Display Residuals | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportStepFile(ImportStepFileRequest) returns (ImportStepFileResult);

message ImportStepFileRequest {
  optional FileReference step_file_path = 1;
  optional bool display_entity_filters = 2;
  optional bool display_residuals = 3;
}

message ImportStepFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import STL File {/* #import-stl-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-stl-file)

`/briosa.FileOperations/ImportStlFile` · Operation ID: `file_operations.import_stl_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `stl_file_path` | `optional FileReference` | STL File Path | Required |
| Request | 2 | `units` | `optional DistanceUnits` | Units | Millimeters |
| Request | 3 | `import_mesh` | `optional bool` | Import Mesh | true |
| Request | 4 | `import_point_cloud` | `optional bool` | Import Point Cloud | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportStlFile(ImportStlFileRequest) returns (ImportStlFileResult);

message ImportStlFileRequest {
  optional FileReference stl_file_path = 1;
  optional DistanceUnits units = 2;
  optional bool import_mesh = 3;
  optional bool import_point_cloud = 4;
}

message ImportStlFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import VDA/FS File {/* #import-vdafs-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vdafs-file)

`/briosa.FileOperations/ImportVdaFsFile` · Operation ID: `file_operations.import_vda_fs_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vda_fs_file_path` | `optional FileReference` | VDA/FS File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportVdaFsFile(ImportVdaFsFileRequest) returns (ImportVdaFsFileResult);

message ImportVdaFsFileRequest {
  optional FileReference vda_fs_file_path = 1;
}

message ImportVdaFsFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import VSTARS .xyz File {/* #import-vstars-xyz-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vstars-xyz-file)

`/briosa.FileOperations/ImportVstarsXyzFile` · Operation ID: `file_operations.import_vstars_xyz_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `optional FileReference` | File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportVstarsXyzFile(ImportVstarsXyzFileRequest) returns (ImportVstarsXyzFileResult);

message ImportVstarsXyzFileRequest {
  optional FileReference file_path = 1;
}

message ImportVstarsXyzFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Import VSTARS Cameras {/* #import-vstars-cameras */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vstars-cameras)

`/briosa.FileOperations/ImportVstarsCameras` · Operation ID: `file_operations.import_vstars_cameras`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `optional FileReference` | File Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ImportVstarsCameras(ImportVstarsCamerasRequest) returns (ImportVstarsCamerasResult);

message ImportVstarsCamerasRequest {
  optional FileReference file_path = 1;
}

message ImportVstarsCamerasResult {
  MpExecutionDetails execution = 1000;
}
```

## Load HTML Form {/* #load-html-form */}

[MP Catalog](/mp-command-catalog/commands/file-operations#load-html-form)

`/briosa.FileOperations/LoadHtmlForm` · Operation ID: `file_operations.load_html_form`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_html_form_path` | `optional FileReference` | Input HTML Form Path | Required |
| Request | 2 | `window_width` | `optional int32` | Window Width | 1000 |
| Request | 3 | `window_height` | `optional int32` | Window Height | 800 |
| Request | 4 | `input_data_share_file_path` | `optional FileReference` | Input DataShare File Path | Required |
| Request | 5 | `output_data_share_file_path` | `optional FileReference` | Output DataShare File Path | Required |
| Request | 6 | `save_in_binary_format` | `optional bool` | Save in Binary Format? | false |
| Request | 7 | `save_button_text` | `optional string` | Save Button Text | Save |
| Request | 8 | `cancel_button_text` | `optional string` | Cancel Button Text | Cancel |
| Request | 9 | `hide_save_and_cancel_buttons` | `optional bool` | Hide Save and Cancel buttons? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LoadHtmlForm(LoadHtmlFormRequest) returns (LoadHtmlFormResult);

message LoadHtmlFormRequest {
  optional FileReference input_html_form_path = 1;
  optional int32 window_width = 2;
  optional int32 window_height = 3;
  optional FileReference input_data_share_file_path = 4;
  optional FileReference output_data_share_file_path = 5;
  optional bool save_in_binary_format = 6;
  optional string save_button_text = 7;
  optional string cancel_button_text = 8;
  optional bool hide_save_and_cancel_buttons = 9;
}

message LoadHtmlFormResult {
  MpExecutionDetails execution = 1000;
}
```

## Load HTML Form in Edge Browser {/* #load-html-form-in-edge-browser */}

[MP Catalog](/mp-command-catalog/commands/file-operations#load-html-form-in-edge-browser)

`/briosa.FileOperations/LoadHtmlFormInEdgeBrowser` · Operation ID: `file_operations.load_html_form_in_edge_browser`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_html_form_path` | `optional FileReference` | Input HTML Form Path | Required |
| Request | 2 | `window_width` | `optional int32` | Window Width | 1000 |
| Request | 3 | `window_height` | `optional int32` | Window Height | 800 |
| Request | 4 | `input_data_share_file_path` | `optional FileReference` | Input DataShare File Path | Required |
| Request | 5 | `output_data_share_file_path` | `optional FileReference` | Output DataShare File Path | Required |
| Request | 6 | `save_in_binary_format` | `optional bool` | Save in Binary Format? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LoadHtmlFormInEdgeBrowser(LoadHtmlFormInEdgeBrowserRequest) returns (LoadHtmlFormInEdgeBrowserResult);

message LoadHtmlFormInEdgeBrowserRequest {
  optional FileReference input_html_form_path = 1;
  optional int32 window_width = 2;
  optional int32 window_height = 3;
  optional FileReference input_data_share_file_path = 4;
  optional FileReference output_data_share_file_path = 5;
  optional bool save_in_binary_format = 6;
}

message LoadHtmlFormInEdgeBrowserResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Embedded File Name List {/* #make-embedded-file-name-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#make-embedded-file-name-list)

`/briosa.FileOperations/MakeEmbeddedFileNameList` · Operation ID: `file_operations.make_embedded_file_name_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_wildcard_criteria` | `optional string` | Collection Wildcard Criteria | * |
| Request | 2 | `file_name_pattern` | `optional string` | File Name Pattern | *.* |
| Result | 1 | `embedded_files` | `repeated string` | Embedded Files | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeEmbeddedFileNameList(MakeEmbeddedFileNameListRequest) returns (MakeEmbeddedFileNameListResult);

message MakeEmbeddedFileNameListRequest {
  optional string collection_wildcard_criteria = 1;
  optional string file_name_pattern = 2;
}

message MakeEmbeddedFileNameListResult {
  repeated string embedded_files = 1;
  MpExecutionDetails execution = 1000;
}
```

## Merge Measurements into XML File {/* #merge-measurements-into-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#merge-measurements-into-xml-file)

`/briosa.FileOperations/MergeMeasurementsIntoXmlFile` · Operation ID: `file_operations.merge_measurements_into_xml_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `optional FileReference` | File Path | Required |
| Request | 2 | `group_name` | `optional CollectionObjectName` | Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MergeMeasurementsIntoXmlFile(MergeMeasurementsIntoXmlFileRequest) returns (MergeMeasurementsIntoXmlFileResult);

message MergeMeasurementsIntoXmlFileRequest {
  optional FileReference file_path = 1;
  optional CollectionObjectName group_name = 2;
}

message MergeMeasurementsIntoXmlFileResult {
  MpExecutionDetails execution = 1000;
}
```

## New SA File {/* #new-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#new-sa-file)

`/briosa.FileOperations/NewSaFile` · Operation ID: `file_operations.new_sa_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc NewSaFile(NewSaFileRequest) returns (NewSaFileResult);

message NewSaFileRequest {
  // No MP inputs.
}

message NewSaFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Open SA File {/* #open-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#open-sa-file)

`/briosa.FileOperations/OpenSaFile` · Operation ID: `file_operations.open_sa_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sa_file_name` | `optional FileReference` | SA File Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc OpenSaFile(OpenSaFileRequest) returns (OpenSaFileResult);

message OpenSaFileRequest {
  optional FileReference sa_file_name = 1;
}

message OpenSaFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Open Template File {/* #open-template-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#open-template-file)

`/briosa.FileOperations/OpenTemplateFile` · Operation ID: `file_operations.open_template_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `template_file_name` | `optional FileReference` | Template File Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc OpenTemplateFile(OpenTemplateFileRequest) returns (OpenTemplateFileResult);

message OpenTemplateFileRequest {
  optional FileReference template_file_name = 1;
}

message OpenTemplateFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Pop PolyBay Analysis Window {/* #pop-polybay-analysis-window */}

[MP Catalog](/mp-command-catalog/commands/file-operations#pop-polybay-analysis-window)

`/briosa.FileOperations/PopPolyBayAnalysisWindow` · Operation ID: `file_operations.pop_poly_bay_analysis_window`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `materials_file_path` | `optional string` | Materials File Path | Empty |
| Request | 2 | `bay_file_path` | `optional string` | Bay File Path | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc PopPolyBayAnalysisWindow(PopPolyBayAnalysisWindowRequest) returns (PopPolyBayAnalysisWindowResult);

message PopPolyBayAnalysisWindowRequest {
  optional string materials_file_path = 1;
  optional string bay_file_path = 2;
}

message PopPolyBayAnalysisWindowResult {
  MpExecutionDetails execution = 1000;
}
```

## Prepare QDAS Data List {/* #prepare-qdas-data-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#prepare-qdas-data-list)

`/briosa.FileOperations/PrepareQdasDataList` · Operation ID: `file_operations.prepare_qdas_data_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `k1001_part_number` | `optional string` | K1001: Part Number | Empty |
| Request | 2 | `k1002_part_description` | `optional string` | K1002: Part Description | Empty |
| Request | 3 | `k1071_supplier_number` | `optional string` | K1071: Supplier Number | Empty |
| Request | 4 | `k1072_supplier_description` | `optional string` | K1072: Supplier Description | Empty |
| Request | 5 | `k1203_reason_for_test` | `optional string` | K1203: Reason for Test | Empty |
| Request | 6 | `k1303_plant` | `optional string` | K1303: Plant | Empty |
| Request | 7 | `k1900_part_remark` | `optional string` | K1900: Part Remark | Empty |
| Request | 8 | `k0006_batch_number` | `optional string` | K0006: Batch Number | Empty |
| Request | 9 | `k0014_part_id` | `optional string` | K0014: Part ID | Empty |
| Request | 10 | `k0053_order_number` | `optional string` | K0053: Order Number | Empty |
| Request | 11 | `k0004_date_time_stamp` | `optional string` | K0004: Date Time Stamp | Required |
| Request | 12 | `k0008_operator_identifier` | `optional int32` | K0008: Operator Identifier | -1 |
| Request | 13 | `k0010_machine_identifier` | `optional int32` | K0010: Machine Identifier | -1 |
| Request | 14 | `k0012_gage_identifier` | `optional int32` | K0012: Gage Identifier | -1 |
| Request | 15 | `relationship_list` | `repeated CollectionItemName` | Relationship List | Required |
| Request | 16 | `feature_check_list` | `repeated CollectionItemName` | Feature Check List | Required |
| Request | 17 | `vector_group_list` | `repeated CollectionObjectName` | Vector Group List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc PrepareQdasDataList(PrepareQdasDataListRequest) returns (PrepareQdasDataListResult);

message PrepareQdasDataListRequest {
  optional string k1001_part_number = 1;
  optional string k1002_part_description = 2;
  optional string k1071_supplier_number = 3;
  optional string k1072_supplier_description = 4;
  optional string k1203_reason_for_test = 5;
  optional string k1303_plant = 6;
  optional string k1900_part_remark = 7;
  optional string k0006_batch_number = 8;
  optional string k0014_part_id = 9;
  optional string k0053_order_number = 10;
  optional string k0004_date_time_stamp = 11;
  optional int32 k0008_operator_identifier = 12;
  optional int32 k0010_machine_identifier = 13;
  optional int32 k0012_gage_identifier = 14;
  repeated CollectionItemName relationship_list = 15;
  repeated CollectionItemName feature_check_list = 16;
  repeated CollectionObjectName vector_group_list = 17;
}

message PrepareQdasDataListResult {
  MpExecutionDetails execution = 1000;
}
```

## Rename General File {/* #rename-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#rename-general-file)

`/briosa.FileOperations/RenameGeneralFile` · Operation ID: `file_operations.rename_general_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_file_name` | `optional FileReference` | Source File Name | Required |
| Request | 2 | `destination_file_name` | `optional FileReference` | Destination File Name | Required |
| Request | 3 | `overwrite` | `optional bool` | Overwrite? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RenameGeneralFile(RenameGeneralFileRequest) returns (RenameGeneralFileResult);

message RenameGeneralFileRequest {
  optional FileReference source_file_name = 1;
  optional FileReference destination_file_name = 2;
  optional bool overwrite = 3;
}

message RenameGeneralFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Save {/* #save */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save)

`/briosa.FileOperations/Save` · Operation ID: `file_operations.save`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc Save(SaveRequest) returns (SaveResult);

message SaveRequest {
  // No MP inputs.
}

message SaveResult {
  MpExecutionDetails execution = 1000;
}
```

## Save As Read-Only Template {/* #save-as-read-only-template */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save-as-read-only-template)

`/briosa.FileOperations/SaveAsReadOnlyTemplate` · Operation ID: `file_operations.save_as_read_only_template`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `template_file_name` | `optional FileReference` | Template File Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SaveAsReadOnlyTemplate(SaveAsReadOnlyTemplateRequest) returns (SaveAsReadOnlyTemplateResult);

message SaveAsReadOnlyTemplateRequest {
  optional FileReference template_file_name = 1;
}

message SaveAsReadOnlyTemplateResult {
  MpExecutionDetails execution = 1000;
}
```

## Save As... {/* #save-as */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save-as)

`/briosa.FileOperations/SaveAs` · Operation ID: `file_operations.save_as`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_name` | `optional FileReference` | File Name | Required |
| Request | 2 | `add_serial_number` | `optional bool` | Add Serial Number? | false |
| Request | 3 | `optional_number` | `optional int32` | Optional Number | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SaveAs(SaveAsRequest) returns (SaveAsResult);

message SaveAsRequest {
  optional FileReference file_name = 1;
  optional bool add_serial_number = 2;
  optional int32 optional_number = 3;
}

message SaveAsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Boolean In DataShare File {/* #set-boolean-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-boolean-in-datashare-file)

`/briosa.FileOperations/SetBooleanInDataShareFile` · Operation ID: `file_operations.set_boolean_in_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `boolean_name` | `optional string` | Boolean Name | Empty |
| Request | 3 | `boolean_value` | `optional bool` | Boolean Value | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetBooleanInDataShareFile(SetBooleanInDataShareFileRequest) returns (SetBooleanInDataShareFileResult);

message SetBooleanInDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string boolean_name = 2;
  optional bool boolean_value = 3;
}

message SetBooleanInDataShareFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Double In DataShare File {/* #set-double-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-double-in-datashare-file)

`/briosa.FileOperations/SetDoubleInDataShareFile` · Operation ID: `file_operations.set_double_in_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `double_name` | `optional string` | Double Name | Empty |
| Request | 3 | `double_value` | `optional double` | Double Value | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetDoubleInDataShareFile(SetDoubleInDataShareFileRequest) returns (SetDoubleInDataShareFileResult);

message SetDoubleInDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string double_name = 2;
  optional double double_value = 3;
}

message SetDoubleInDataShareFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Integer In DataShare File {/* #set-integer-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-integer-in-datashare-file)

`/briosa.FileOperations/SetIntegerInDataShareFile` · Operation ID: `file_operations.set_integer_in_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `integer_name` | `optional string` | Integer Name | Empty |
| Request | 3 | `integer_value` | `optional int32` | Integer Value | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetIntegerInDataShareFile(SetIntegerInDataShareFileRequest) returns (SetIntegerInDataShareFileResult);

message SetIntegerInDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string integer_name = 2;
  optional int32 integer_value = 3;
}

message SetIntegerInDataShareFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Set String In DataShare File {/* #set-string-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-string-in-datashare-file)

`/briosa.FileOperations/SetStringInDataShareFile` · Operation ID: `file_operations.set_string_in_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `string_name` | `optional string` | String Name | Empty |
| Request | 3 | `string_value` | `optional string` | String Value | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetStringInDataShareFile(SetStringInDataShareFileRequest) returns (SetStringInDataShareFileResult);

message SetStringInDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string string_name = 2;
  optional string string_value = 3;
}

message SetStringInDataShareFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Transform In DataShare File {/* #set-transform-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-transform-in-datashare-file)

`/briosa.FileOperations/SetTransformInDataShareFile` · Operation ID: `file_operations.set_transform_in_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `transform_name` | `optional string` | Transform Name | Empty |
| Request | 3 | `transform_value` | `optional Transform` | Transform Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetTransformInDataShareFile(SetTransformInDataShareFileRequest) returns (SetTransformInDataShareFileResult);

message SetTransformInDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string transform_name = 2;
  optional Transform transform_value = 3;
}

message SetTransformInDataShareFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Vector In DataShare File {/* #set-vector-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-vector-in-datashare-file)

`/briosa.FileOperations/SetVectorInDataShareFile` · Operation ID: `file_operations.set_vector_in_data_share_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `optional FileReference` | DataShare File Path | Required |
| Request | 2 | `vector_name` | `optional string` | Vector Name | Empty |
| Request | 3 | `vector_value` | `optional Vector` | Vector Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetVectorInDataShareFile(SetVectorInDataShareFileRequest) returns (SetVectorInDataShareFileResult);

message SetVectorInDataShareFileRequest {
  optional FileReference data_share_file_path = 1;
  optional string vector_name = 2;
  optional Vector vector_value = 3;
}

message SetVectorInDataShareFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Terminate All Running MPs {/* #terminate-all-running-mps */}

[MP Catalog](/mp-command-catalog/commands/file-operations#terminate-all-running-mps)

`/briosa.FileOperations/TerminateAllRunningMPs` · Operation ID: `file_operations.terminate_all_running_mps`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc TerminateAllRunningMPs(TerminateAllRunningMPsRequest) returns (TerminateAllRunningMPsResult);

message TerminateAllRunningMPsRequest {
  // No MP inputs.
}

message TerminateAllRunningMPsResult {
  MpExecutionDetails execution = 1000;
}
```

## Verify General File Exists {/* #verify-general-file-exists */}

[MP Catalog](/mp-command-catalog/commands/file-operations#verify-general-file-exists)

`/briosa.FileOperations/VerifyGeneralFileExists` · Operation ID: `file_operations.verify_general_file_exists`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_name` | `optional FileReference` | File Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc VerifyGeneralFileExists(VerifyGeneralFileExistsRequest) returns (VerifyGeneralFileExistsResult);

message VerifyGeneralFileExistsRequest {
  optional FileReference file_name = 1;
}

message VerifyGeneralFileExistsResult {
  MpExecutionDetails execution = 1000;
}
```

## Verify MP File Exists {/* #verify-mp-file-exists */}

[MP Catalog](/mp-command-catalog/commands/file-operations#verify-mp-file-exists)

`/briosa.FileOperations/VerifyMpFileExists` · Operation ID: `file_operations.verify_mp_file_exists`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `mp_file_name` | `optional FileReference` | MP File Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc VerifyMpFileExists(VerifyMpFileExistsRequest) returns (VerifyMpFileExistsResult);

message VerifyMpFileExistsRequest {
  optional FileReference mp_file_name = 1;
}

message VerifyMpFileExistsResult {
  MpExecutionDetails execution = 1000;
}
```

## Use NRKXML Library {/* #use-nrkxml-library */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
