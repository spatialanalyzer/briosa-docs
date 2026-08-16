---
title: File Operations
description: Current and next gRPC contracts for supported File Operations MP commands.
toc_max_heading_level: 2
---

# File Operations

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Backup Now

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Backup Now](/mp-command-catalog/commands/file-operations#backup-now) |
| Service | `briosa.FileOperations` |
| RPC | `BackupNow` |
| Operation ID | `file_operations.backup_now` |
| Route | `/briosa.FileOperations/BackupNow` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc BackupNow(BackupNowRequest) returns (BackupNowResult);

message BackupNowRequest {
  // No MP inputs.
}

message BackupNowResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Copy General File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Copy General File](/mp-command-catalog/commands/file-operations#copy-general-file) |
| Service | `briosa.FileOperations` |
| RPC | `CopyGeneralFile` |
| Operation ID | `file_operations.copy_general_file` |
| Route | `/briosa.FileOperations/CopyGeneralFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_file_name` | `FileReference` | `Source File Name` | Required |
| Request | 2 | `destination_file_name` | `FileReference` | `Destination File Name` | Required |
| Request | 3 | `overwrite` | `bool` | `Overwrite?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete General File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete General File](/mp-command-catalog/commands/file-operations#delete-general-file) |
| Service | `briosa.FileOperations` |
| RPC | `DeleteGeneralFile` |
| Operation ID | `file_operations.delete_general_file` |
| Route | `/briosa.FileOperations/DeleteGeneralFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_name` | `FileReference` | `File Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteGeneralFile(DeleteGeneralFileRequest) returns (DeleteGeneralFileResult);

message DeleteGeneralFileRequest {
  optional FileReference file_name = 1;
}

message DeleteGeneralFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Direct CAD Access

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Direct CAD Access](/mp-command-catalog/commands/file-operations#direct-cad-access) |
| Service | `briosa.FileOperations` |
| RPC | `DirectCadAccess` |
| Operation ID | `file_operations.direct_cad_access` |
| Route | `/briosa.FileOperations/DirectCadAccess` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cad_file_name` | `FileReference` | `CAD File Name` | Required |
| Request | 2 | `import_solids` | `bool` | `Import Solids` | true |
| Request | 3 | `import_surfaces` | `bool` | `Import Surfaces` | true |
| Request | 4 | `import_polygonized_surfaces` | `bool` | `Import Polygonized Surfaces` | true |
| Request | 5 | `import_annotations` | `bool` | `Import Annotations` | true |
| Request | 6 | `import_vectors` | `bool` | `Import Vectors` | true |
| Request | 7 | `import_points` | `bool` | `Import Points` | true |
| Request | 8 | `point_group_name` | `string` | `Point Group Name` | CAD pts |
| Request | 9 | `import_attributes_metadata` | `bool` | `Import Attributes/Metadata` | true |
| Request | 10 | `import_cooordinate_frames` | `bool` | `Import Cooordinate Frames` | true |
| Request | 11 | `import_planes` | `bool` | `Import Planes` | true |
| Request | 12 | `import_3d_curves_lines` | `bool` | `Import 3D Curves - Lines` | true |
| Request | 13 | `import_3d_curves_circles` | `bool` | `Import 3D Curves - Circles` | true |
| Request | 14 | `import_3d_curves_general_curves` | `bool` | `Import 3D Curves - General Curves` | true |
| Request | 15 | `import_construction_geometry` | `bool` | `Import Construction Geometry` | false |
| Request | 16 | `import_hidden_entities` | `bool` | `Import Hidden Entities` | false |
| Request | 17 | `import_all_surfaces_as_mesh_graphical_entities` | `bool` | `Import all Surfaces as Mesh Graphical Entities` | false |
| Request | 18 | `do_not_import_fillets` | `bool` | `Do Not Import Fillets` | false |
| Request | 19 | `do_not_import_dittos` | `bool` | `Do Not Import Dittos` | false |
| Request | 20 | `ditto_threshold` | `int32` | `Ditto Threshold` | 1 |
| Request | 21 | `center_view_on_imported_objects` | `bool` | `Center View on Imported Objects` | true |
| Request | 22 | `import_into_folders_matching_cad_file_hierarchy` | `bool` | `Import into Folders matching CAD file hierarchy` | false |
| Request | 23 | `remove_empty_folders` | `bool` | `Remove Empty Folders` | true |
| Request | 24 | `surface_normals_mode_1_or_2` | `int32` | `Surface Normals Mode (1 or 2)` | 1 |
| Request | 25 | `prompt_on_missing_components` | `bool` | `Prompt on Missing Components` | true |
| Request | 26 | `selective_import` | `bool` | `Selective Import` | false |
| Request | 27 | `surface_compatibility_mode` | `bool` | `Surface Compatibility Mode` | true |
| Request | 28 | `explode_surfaces` | `bool` | `Explode Surfaces` | false |
| Request | 29 | `cad_file_units_leave_blank_to_use_the_units_specified_in_the_file` | `string` | `CAD File Units (leave blank to use the units specified in the file)` | Empty |
| Request | 30 | `build_callout_views` | `bool` | `Build Callout Views` | true |
| Result | 1 | `import_warnings` | `bool` | `Import Warnings` | — |
| Result | 2 | `import_warning_messages` | `string` | `Import Warning Messages` | — |
| Result | 3 | `extents_min` | `Vector` | `Extents Min` | — |
| Result | 4 | `extents_max` | `Vector` | `Extents Max` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export ASCII Frame Set

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export ASCII Frame Set](/mp-command-catalog/commands/file-operations#export-ascii-frame-set) |
| Service | `briosa.FileOperations` |
| RPC | `ExportAsciiFrameSet` |
| Operation ID | `file_operations.export_ascii_frame_set` |
| Route | `/briosa.FileOperations/ExportAsciiFrameSet` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| Request | 2 | `frame_set_container` | `CollectionObjectName` | `Frame Set Container` | Required |
| Request | 3 | `data_delimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| Request | 4 | `file_format` | `AsciiFileFormat` | `File Format` | Required |
| Request | 5 | `include_export_format_info` | `bool` | `Include Export Format Info?` | false |
| Request | 6 | `decimal_precision` | `int32` | `Decimal Precision` | 6 |
| Request | 7 | `append` | `bool` | `Append?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export ASCII Frames

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export ASCII Frames](/mp-command-catalog/commands/file-operations#export-ascii-frames) |
| Service | `briosa.FileOperations` |
| RPC | `ExportAsciiFrames` |
| Operation ID | `file_operations.export_ascii_frames` |
| Route | `/briosa.FileOperations/ExportAsciiFrames` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| Request | 2 | `object_list` | `repeated CollectionObjectName` | `Object List` | Required |
| Request | 3 | `export_frame_mode` | `string` | `Export Frame Mode` | Fixed XYZ |
| Request | 4 | `overwrite_existing_file` | `bool` | `Overwrite existing file?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export ASCII Point Clouds

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export ASCII Point Clouds](/mp-command-catalog/commands/file-operations#export-ascii-point-clouds) |
| Service | `briosa.FileOperations` |
| RPC | `ExportAsciiPointClouds` |
| Operation ID | `file_operations.export_ascii_point_clouds` |
| Route | `/briosa.FileOperations/ExportAsciiPointClouds` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| Request | 2 | `point_cloud_list` | `repeated CollectionObjectName` | `Point Cloud List` | Required |
| Request | 3 | `data_delimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| Request | 4 | `overwrite_existing_file` | `bool` | `Overwrite existing file?` | false |
| Request | 5 | `show_progress_dialog` | `bool` | `Show Progress Dialog?` | false |
| Request | 6 | `include_cloud_point_labeling` | `bool` | `Include Cloud Point Labeling?` | false |
| Request | 7 | `include_scan_direction_vector` | `bool` | `Include Scan Direction Vector?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ExportAsciiPointClouds(ExportAsciiPointCloudsRequest) returns (ExportAsciiPointCloudsResult);

message ExportAsciiPointCloudsRequest {
  optional FileReference ascii_file_path = 1;
  repeated CollectionObjectName point_cloud_list = 2;
  optional ExportDataDelimeterType data_delimiter = 3;
  optional bool overwrite_existing_file = 4;
  optional bool show_progress_dialog = 5;
  optional bool include_cloud_point_labeling = 6;
  optional bool include_scan_direction_vector = 7;
}

message ExportAsciiPointCloudsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export ASCII Point Set

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export ASCII Point Set](/mp-command-catalog/commands/file-operations#export-ascii-point-set) |
| Service | `briosa.FileOperations` |
| RPC | `ExportAsciiPointSet` |
| Operation ID | `file_operations.export_ascii_point_set` |
| Route | `/briosa.FileOperations/ExportAsciiPointSet` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| Request | 2 | `point_set_container` | `CollectionObjectName` | `Point Set Container` | Required |
| Request | 3 | `data_delimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| Request | 4 | `target_name_format` | `ExportTargetNameFormat` | `Target Name Format` | Required |
| Request | 5 | `desired_coordinate_system` | `CoordinateSystemType` | `Desired Coordinate System` | Required |
| Request | 6 | `include_target_offsets` | `bool` | `Include Target Offsets?` | false |
| Request | 7 | `include_timestamps` | `bool` | `Include Timestamps?` | false |
| Request | 8 | `include_sa_version_and_frame_comments` | `bool` | `Include SA version and frame comments?` | false |
| Request | 9 | `include_axis_comments` | `bool` | `Include Axis Comments?` | false |
| Request | 10 | `include_export_format_info` | `bool` | `Include Export Format Info?` | false |
| Request | 11 | `maximum_precision_scientific_notation` | `bool` | `Maximum Precision (Scientific Notation)?` | false |
| Request | 12 | `decimal_precision` | `int32` | `Decimal Precision` | 6 |
| Request | 13 | `append` | `bool` | `Append?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export ASCII Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export ASCII Points](/mp-command-catalog/commands/file-operations#export-ascii-points) |
| Service | `briosa.FileOperations` |
| RPC | `ExportAsciiPoints` |
| Operation ID | `file_operations.export_ascii_points` |
| Route | `/briosa.FileOperations/ExportAsciiPoints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| Request | 2 | `group_names_to_export` | `repeated CollectionGroupName` | `Group Names to export` | Required |
| Request | 3 | `data_delimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| Request | 4 | `target_name_format` | `ExportTargetNameFormat` | `Target Name Format` | Required |
| Request | 5 | `desired_coordinate_system` | `CoordinateSystemType` | `Desired Coordinate System` | Required |
| Request | 6 | `include_target_offsets` | `bool` | `Include Target Offsets?` | false |
| Request | 7 | `include_target_comments` | `bool` | `Include Target Comments?` | false |
| Request | 8 | `include_timestamps` | `bool` | `Include Timestamps?` | false |
| Request | 9 | `include_tolerances` | `bool` | `Include Tolerances?` | false |
| Request | 10 | `include_coordinate_uncertainties` | `bool` | `Include Coordinate Uncertainties?` | false |
| Request | 11 | `include_sa_version_and_frame_comments` | `bool` | `Include SA version and frame comments?` | false |
| Request | 12 | `include_axis_comments` | `bool` | `Include Axis Comments?` | false |
| Request | 13 | `include_export_format_info` | `bool` | `Include Export Format Info?` | false |
| Request | 14 | `include_weights` | `bool` | `Include Weights?` | false |
| Request | 15 | `include_measurement_details` | `bool` | `Include Measurement Details?` | false |
| Request | 16 | `maximum_precision_scientific_notation` | `bool` | `Maximum Precision (Scientific Notation)?` | false |
| Request | 17 | `decimal_precision` | `int32` | `Decimal Precision` | 6 |
| Request | 18 | `append` | `bool` | `Append?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export DXF

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export DXF](/mp-command-catalog/commands/file-operations#export-dxf) |
| Service | `briosa.FileOperations` |
| RPC | `ExportDxf` |
| Operation ID | `file_operations.export_dxf` |
| Route | `/briosa.FileOperations/ExportDxf` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dxf_file_path` | `FileReference` | `DXF File Path` | Required |
| Request | 2 | `point_names` | `repeated PointName` | `Point Names` | Required |
| Request | 3 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 4 | `include_point_labels` | `bool` | `Include Point Labels?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export Embedded File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export Embedded File](/mp-command-catalog/commands/file-operations#export-embedded-file) |
| Service | `briosa.FileOperations` |
| RPC | `ExportEmbeddedFile` |
| Operation ID | `file_operations.export_embedded_file` |
| Route | `/briosa.FileOperations/ExportEmbeddedFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `embedded_file_collection_name` | `CollectionName` | `Embedded File Collection Name` | Required |
| Request | 2 | `embedded_file_name` | `string` | `Embedded File Name` | Empty |
| Request | 3 | `external_file_name` | `FileReference` | `External File Name` | Required |
| Request | 4 | `replace_existing` | `bool` | `Replace Existing?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export Hidden Point Bar XML File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export Hidden Point Bar XML File](/mp-command-catalog/commands/file-operations#export-hidden-point-bar-xml-file) |
| Service | `briosa.FileOperations` |
| RPC | `ExportHiddenPointBarXmlFile` |
| Operation ID | `file_operations.export_hidden_point_bar_xml_file` |
| Route | `/briosa.FileOperations/ExportHiddenPointBarXmlFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `xml_file_path` | `FileReference` | `XML File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ExportHiddenPointBarXmlFile(ExportHiddenPointBarXmlFileRequest) returns (ExportHiddenPointBarXmlFileResult);

message ExportHiddenPointBarXmlFileRequest {
  optional FileReference xml_file_path = 1;
}

message ExportHiddenPointBarXmlFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export IGES File  - Entire Model

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export IGES File  - Entire Model](/mp-command-catalog/commands/file-operations#export-iges-file----entire-model) |
| Service | `briosa.FileOperations` |
| RPC | `ExportIgesFileEntireModel` |
| Operation ID | `file_operations.export_iges_file_entire_model` |
| Route | `/briosa.FileOperations/ExportIgesFileEntireModel` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `iges_file_path` | `FileReference` | `IGES File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ExportIgesFileEntireModel(ExportIgesFileEntireModelRequest) returns (ExportIgesFileEntireModelResult);

message ExportIgesFileEntireModelRequest {
  optional FileReference iges_file_path = 1;
}

message ExportIgesFileEntireModelResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export IGES File - Partial Model

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export IGES File - Partial Model](/mp-command-catalog/commands/file-operations#export-iges-file---partial-model) |
| Service | `briosa.FileOperations` |
| RPC | `ExportIgesFilePartialModel` |
| Operation ID | `file_operations.export_iges_file_partial_model` |
| Route | `/briosa.FileOperations/ExportIgesFilePartialModel` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `iges_file_path` | `FileReference` | `IGES File Path` | Required |
| Request | 2 | `object_name_list` | `repeated CollectionObjectName` | `Object Name List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export PTX Point Clouds

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export PTX Point Clouds](/mp-command-catalog/commands/file-operations#export-ptx-point-clouds) |
| Service | `briosa.FileOperations` |
| RPC | `ExportPtxPointClouds` |
| Operation ID | `file_operations.export_ptx_point_clouds` |
| Route | `/briosa.FileOperations/ExportPtxPointClouds` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ptx_file_path` | `FileReference` | `PTX File Path` | Required |
| Request | 2 | `point_cloud_list` | `repeated CollectionObjectName` | `Point Cloud List` | Required |
| Request | 3 | `overwrite_existing_file` | `bool` | `Overwrite existing file?` | false |
| Request | 4 | `show_progress_dialog` | `bool` | `Show Progress Dialog?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export QDAS Characteristics

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export QDAS Characteristics](/mp-command-catalog/commands/file-operations#export-qdas-characteristics) |
| Service | `briosa.FileOperations` |
| RPC | `ExportQdasCharacteristics` |
| Operation ID | `file_operations.export_qdas_characteristics` |
| Route | `/briosa.FileOperations/ExportQdasCharacteristics` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `qdas_export_file_path` | `FileReference` | `QDAS Export File Path` | Required |
| Request | 2 | `k1001_part_number` | `string` | `K1001: Part Number` | Empty |
| Request | 3 | `k1002_part_description` | `string` | `K1002: Part Description` | Empty |
| Request | 4 | `k1071_supplier_number` | `string` | `K1071: Supplier Number` | Empty |
| Request | 5 | `k1072_supplier_description` | `string` | `K1072: Supplier Description` | Empty |
| Request | 6 | `k1203_reason_for_test` | `string` | `K1203: Reason for Test` | Empty |
| Request | 7 | `k1303_plant` | `string` | `K1303: Plant` | Empty |
| Request | 8 | `k1900_part_remark` | `string` | `K1900: Part Remark` | Empty |
| Request | 9 | `k0006_batch_number` | `string` | `K0006: Batch Number` | Empty |
| Request | 10 | `k0014_part_id` | `string` | `K0014: Part ID` | Empty |
| Request | 11 | `k0053_order_number` | `string` | `K0053: Order Number` | Empty |
| Request | 12 | `k0004_date_time_stamp` | `string` | `K0004: Date Time Stamp` | 2026-07-20/16:32:22 |
| Request | 13 | `k0008_operator_identifier` | `int32` | `K0008: Operator Identifier` | -1 |
| Request | 14 | `k0010_machine_identifier` | `int32` | `K0010: Machine Identifier` | -1 |
| Request | 15 | `k0012_gage_identifier` | `int32` | `K0012: Gage Identifier` | -1 |
| Request | 16 | `relationship_list` | `repeated CollectionItemName` | `Relationship List` | Required |
| Request | 17 | `feature_check_list` | `repeated CollectionItemName` | `Feature Check List` | Required |
| Request | 18 | `vector_group_list` | `repeated CollectionObjectName` | `Vector Group List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export QDAS Data List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export QDAS Data List](/mp-command-catalog/commands/file-operations#export-qdas-data-list) |
| Service | `briosa.FileOperations` |
| RPC | `ExportQdasDataList` |
| Operation ID | `file_operations.export_qdas_data_list` |
| Route | `/briosa.FileOperations/ExportQdasDataList` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `qdas_export_file_path` | `FileReference` | `QDAS Export File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ExportQdasDataList(ExportQdasDataListRequest) returns (ExportQdasDataListResult);

message ExportQdasDataListRequest {
  optional FileReference qdas_export_file_path = 1;
}

message ExportQdasDataListResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export Scan Stripe Mesh to STL File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export Scan Stripe Mesh to STL File](/mp-command-catalog/commands/file-operations#export-scan-stripe-mesh-to-stl-file) |
| Service | `briosa.FileOperations` |
| RPC | `ExportScanStripeMeshToStlFile` |
| Operation ID | `file_operations.export_scan_stripe_mesh_to_stl_file` |
| Route | `/briosa.FileOperations/ExportScanStripeMeshToStlFile` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `stl_file_path` | `FileReference` | `STL File Path` | Required |
| Request | 2 | `mesh` | `CollectionObjectName` | `Mesh` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export STEP File - Entire Model

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export STEP File - Entire Model](/mp-command-catalog/commands/file-operations#export-step-file---entire-model) |
| Service | `briosa.FileOperations` |
| RPC | `ExportStepFileEntireModel` |
| Operation ID | `file_operations.export_step_file_entire_model` |
| Route | `/briosa.FileOperations/ExportStepFileEntireModel` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `step_file_path` | `FileReference` | `STEP File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ExportStepFileEntireModel(ExportStepFileEntireModelRequest) returns (ExportStepFileEntireModelResult);

message ExportStepFileEntireModelRequest {
  optional FileReference step_file_path = 1;
}

message ExportStepFileEntireModelResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export STEP File - Partial Model

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export STEP File - Partial Model](/mp-command-catalog/commands/file-operations#export-step-file---partial-model) |
| Service | `briosa.FileOperations` |
| RPC | `ExportStepFilePartialModel` |
| Operation ID | `file_operations.export_step_file_partial_model` |
| Route | `/briosa.FileOperations/ExportStepFilePartialModel` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `step_file_path` | `FileReference` | `STEP File Path` | Required |
| Request | 2 | `object_name_list` | `repeated CollectionObjectName` | `Object Name List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export VDA/FS File  - Entire Model

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export VDA/FS File  - Entire Model](/mp-command-catalog/commands/file-operations#export-vdafs-file----entire-model) |
| Service | `briosa.FileOperations` |
| RPC | `ExportVdaFsFileEntireModel` |
| Operation ID | `file_operations.export_vda_fs_file_entire_model` |
| Route | `/briosa.FileOperations/ExportVdaFsFileEntireModel` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vda_fs_file_path` | `FileReference` | `VDA/FS File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ExportVdaFsFileEntireModel(ExportVdaFsFileEntireModelRequest) returns (ExportVdaFsFileEntireModelResult);

message ExportVdaFsFileEntireModelRequest {
  optional FileReference vda_fs_file_path = 1;
}

message ExportVdaFsFileEntireModelResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export VDA/FS File - Partial Model

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export VDA/FS File - Partial Model](/mp-command-catalog/commands/file-operations#export-vdafs-file---partial-model) |
| Service | `briosa.FileOperations` |
| RPC | `ExportVdaFsFilePartialModel` |
| Operation ID | `file_operations.export_vda_fs_file_partial_model` |
| Route | `/briosa.FileOperations/ExportVdaFsFilePartialModel` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vda_fs_file_path` | `FileReference` | `VDA/FS File Path` | Required |
| Request | 2 | `object_name_list` | `repeated CollectionObjectName` | `Object Name List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export Vector Container to ASCII File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export Vector Container to ASCII File](/mp-command-catalog/commands/file-operations#export-vector-container-to-ascii-file) |
| Service | `briosa.FileOperations` |
| RPC | `ExportVectorContainerToAsciiFile` |
| Operation ID | `file_operations.export_vector_container_to_ascii_file` |
| Route | `/briosa.FileOperations/ExportVectorContainerToAsciiFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `FileReference` | `Ascii File Path` | Required |
| Request | 2 | `vector_groups_to_export` | `repeated CollectionVectorGroupName` | `Vector group(s) to export` | Required |
| Request | 3 | `overwrite_existing_file_false_append` | `bool` | `Overwrite existing file? (FALSE = Append)` | true |
| Request | 4 | `use_full_precision_scientific_notation` | `bool` | `Use Full Precision (Scientific Notation)?` | false |
| Request | 5 | `vector_name_format` | `ExportVectorNameFormat` | `Vector Name Format` | Required |
| Request | 6 | `include_vector_length` | `bool` | `Include Vector Length?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Find Files in Directory

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Find Files in Directory](/mp-command-catalog/commands/file-operations#find-files-in-directory) |
| Service | `briosa.FileOperations` |
| RPC | `FindFilesInDirectory` |
| Operation ID | `file_operations.find_files_in_directory` |
| Route | `/briosa.FileOperations/FindFilesInDirectory` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `directory` | `string` | `Directory` | Empty |
| Request | 2 | `file_name_pattern` | `string` | `File Name Pattern` | *.* |
| Request | 3 | `recursive` | `bool` | `Recursive?` | false |
| Result | 1 | `files` | `repeated string` | `Files` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Find Sub-Directories in Directory

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Find Sub-Directories in Directory](/mp-command-catalog/commands/file-operations#find-sub-directories-in-directory) |
| Service | `briosa.FileOperations` |
| RPC | `FindSubDirectoriesInDirectory` |
| Operation ID | `file_operations.find_sub_directories_in_directory` |
| Route | `/briosa.FileOperations/FindSubDirectoriesInDirectory` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `directory` | `string` | `Directory` | Empty |
| Request | 2 | `recursive` | `bool` | `Recursive?` | false |
| Result | 1 | `sub_directories` | `repeated string` | `Sub-Directories` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Boolean From DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Boolean From DataShare File](/mp-command-catalog/commands/file-operations#get-boolean-from-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `GetBooleanFromDataShareFile` |
| Operation ID | `file_operations.get_boolean_from_data_share_file` |
| Route | `/briosa.FileOperations/GetBooleanFromDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `boolean_name` | `string` | `Boolean Name` | Empty |
| Result | 1 | `boolean_value` | `bool` | `Boolean Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Double From DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Double From DataShare File](/mp-command-catalog/commands/file-operations#get-double-from-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `GetDoubleFromDataShareFile` |
| Operation ID | `file_operations.get_double_from_data_share_file` |
| Route | `/briosa.FileOperations/GetDoubleFromDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `double_name` | `string` | `Double Name` | Empty |
| Result | 1 | `double_value` | `double` | `Double Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Integer From DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Integer From DataShare File](/mp-command-catalog/commands/file-operations#get-integer-from-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `GetIntegerFromDataShareFile` |
| Operation ID | `file_operations.get_integer_from_data_share_file` |
| Route | `/briosa.FileOperations/GetIntegerFromDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `integer_name` | `string` | `Integer Name` | Empty |
| Result | 1 | `integer_value` | `int32` | `Integer Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get QDAS Catalog Entries

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get QDAS Catalog Entries](/mp-command-catalog/commands/file-operations#get-qdas-catalog-entries) |
| Service | `briosa.FileOperations` |
| RPC | `GetQdasCatalogEntries` |
| Operation ID | `file_operations.get_qdas_catalog_entries` |
| Route | `/briosa.FileOperations/GetQdasCatalogEntries` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `k_field_target` | `string` | `K-Field Target` | Empty |
| Result | 1 | `catalog_entries` | `repeated string` | `Catalog Entries` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get String From DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get String From DataShare File](/mp-command-catalog/commands/file-operations#get-string-from-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `GetStringFromDataShareFile` |
| Operation ID | `file_operations.get_string_from_data_share_file` |
| Route | `/briosa.FileOperations/GetStringFromDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `string_name` | `string` | `String Name` | Empty |
| Result | 1 | `string_value` | `string` | `String Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Transform From DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Transform From DataShare File](/mp-command-catalog/commands/file-operations#get-transform-from-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `GetTransformFromDataShareFile` |
| Operation ID | `file_operations.get_transform_from_data_share_file` |
| Route | `/briosa.FileOperations/GetTransformFromDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `transform_name` | `string` | `Transform Name` | Empty |
| Result | 1 | `transform_value` | `Transform` | `Transform Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Vector From DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Vector From DataShare File](/mp-command-catalog/commands/file-operations#get-vector-from-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `GetVectorFromDataShareFile` |
| Operation ID | `file_operations.get_vector_from_data_share_file` |
| Route | `/briosa.FileOperations/GetVectorFromDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `vector_name` | `string` | `Vector Name` | Empty |
| Result | 1 | `vector_value` | `Vector` | `Vector Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Working Directory

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Working Directory](/mp-command-catalog/commands/file-operations#get-working-directory) |
| Service | `briosa.FileOperations` |
| RPC | `GetWorkingDirectory` |
| Operation ID | `file_operations.get_working_directory` |
| Route | `/briosa.FileOperations/GetWorkingDirectory` |
| Validation | Released implementation |
| Automatic Replay | Safe for the current read-only operation |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `directory` | `string` | `Directory` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import ASCII: Predefined Formats

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import ASCII: Predefined Formats](/mp-command-catalog/commands/file-operations#import-ascii-predefined-formats) |
| Service | `briosa.FileOperations` |
| RPC | `ImportAsciiPredefinedFormats` |
| Operation ID | `file_operations.import_ascii_predefined_formats` |
| Route | `/briosa.FileOperations/ImportAsciiPredefinedFormats` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| Request | 2 | `file_format` | `AsciiFileFormat` | `File Format` | Required |
| Request | 3 | `units` | `DistanceUnits` | `Units` | Inches |
| Request | 4 | `angular_units` | `AngularUnits` | `Angular Units` | Degrees |
| Request | 5 | `group_name` | `CollectionObjectName` | `Group Name` | Required |
| Request | 6 | `import_as_cloud` | `bool` | `Import as Cloud` | false |
| Request | 7 | `ensure_new_point_group` | `bool` | `Ensure New Point Group` | true |
| Request | 8 | `ensure_unique_names` | `bool` | `Ensure Unique Names` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import ASCII: Predefined Frame Set Formats

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import ASCII: Predefined Frame Set Formats](/mp-command-catalog/commands/file-operations#import-ascii-predefined-frame-set-formats) |
| Service | `briosa.FileOperations` |
| RPC | `ImportAsciiPredefinedFrameSetFormats` |
| Operation ID | `file_operations.import_ascii_predefined_frame_set_formats` |
| Route | `/briosa.FileOperations/ImportAsciiPredefinedFrameSetFormats` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| Request | 2 | `file_format` | `AsciiFileFormat` | `File Format` | Required |
| Request | 3 | `units` | `DistanceUnits` | `Units` | Inches |
| Request | 4 | `angular_units` | `AngularUnits` | `Angular Units` | Degrees |
| Request | 5 | `frame_set_container_name` | `CollectionObjectName` | `Frame Set Container Name` | Required |
| Request | 6 | `ensure_unique_name` | `bool` | `Ensure Unique Name` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import E57 File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import E57 File](/mp-command-catalog/commands/file-operations#import-e57-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportE57File` |
| Operation ID | `file_operations.import_e57_file` |
| Route | `/briosa.FileOperations/ImportE57File` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `e57_file_path` | `FileReference` | `E57 File Path` | Required |
| Request | 2 | `save_converted_file` | `bool` | `Save Converted File` | false |
| Request | 3 | `use_square_root_of_intensity` | `bool` | `Use Square Root of Intensity` | true |
| Request | 4 | `automatically_close_converter` | `bool` | `Automatically Close Converter` | true |
| Request | 5 | `prioritize_color_over_intensity` | `bool` | `Prioritize Color Over Intensity` | true |
| Request | 6 | `import_scan_blocks_as_separate_clouds` | `bool` | `Import Scan Blocks As Separate Clouds` | false |
| Request | 7 | `units` | `DistanceUnits` | `Units` | Inches |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import File as Embedded File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import File as Embedded File](/mp-command-catalog/commands/file-operations#import-file-as-embedded-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportFileAsEmbeddedFile` |
| Operation ID | `file_operations.import_file_as_embedded_file` |
| Route | `/briosa.FileOperations/ImportFileAsEmbeddedFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `external_file_name` | `FileReference` | `External File Name` | Required |
| Request | 2 | `replace_existing` | `bool` | `Replace Existing?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import File as Picture

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import File as Picture](/mp-command-catalog/commands/file-operations#import-file-as-picture) |
| Service | `briosa.FileOperations` |
| RPC | `ImportFileAsPicture` |
| Operation ID | `file_operations.import_file_as_picture` |
| Route | `/briosa.FileOperations/ImportFileAsPicture` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `external_file_name` | `FileReference` | `External File Name` | Required |
| Request | 2 | `replace_existing` | `bool` | `Replace Existing?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import Hidden Point Bar XML File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import Hidden Point Bar XML File](/mp-command-catalog/commands/file-operations#import-hidden-point-bar-xml-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportHiddenPointBarXmlFile` |
| Operation ID | `file_operations.import_hidden_point_bar_xml_file` |
| Route | `/briosa.FileOperations/ImportHiddenPointBarXmlFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `xml_file_path` | `FileReference` | `XML File Path` | Required |
| Request | 2 | `replace_existing_entries` | `bool` | `Replace Existing Entries?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import IGES File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import IGES File](/mp-command-catalog/commands/file-operations#import-iges-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportIgesFile` |
| Operation ID | `file_operations.import_iges_file` |
| Route | `/briosa.FileOperations/ImportIgesFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `iges_file_path` | `FileReference` | `IGES File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ImportIgesFile(ImportIgesFileRequest) returns (ImportIgesFileResult);

message ImportIgesFileRequest {
  optional FileReference iges_file_path = 1;
}

message ImportIgesFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import Leica GSI File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import Leica GSI File](/mp-command-catalog/commands/file-operations#import-leica-gsi-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportLeicaGsiFile` |
| Operation ID | `file_operations.import_leica_gsi_file` |
| Route | `/briosa.FileOperations/ImportLeicaGsiFile` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_id` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `group_name` | `CollectionObjectName` | `Group Name` | Required |
| Request | 3 | `file_path` | `FileReference` | `File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import Leica SDB File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import Leica SDB File](/mp-command-catalog/commands/file-operations#import-leica-sdb-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportLeicaSdbFile` |
| Operation ID | `file_operations.import_leica_sdb_file` |
| Route | `/briosa.FileOperations/ImportLeicaSdbFile` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_id` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `scan_cloud_name` | `CollectionObjectName` | `Scan Cloud Name` | Required |
| Request | 3 | `file_path` | `FileReference` | `File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import MP File as Embedded MP

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import MP File as Embedded MP](/mp-command-catalog/commands/file-operations#import-mp-file-as-embedded-mp) |
| Service | `briosa.FileOperations` |
| RPC | `ImportMpFileAsEmbeddedMp` |
| Operation ID | `file_operations.import_mp_file_as_embedded_mp` |
| Route | `/briosa.FileOperations/ImportMpFileAsEmbeddedMp` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `external_mp_file_name` | `FileReference` | `External MP File Name` | Required |
| Request | 2 | `replace_existing` | `bool` | `Replace Existing?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import Nominals from XML File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import Nominals from XML File](/mp-command-catalog/commands/file-operations#import-nominals-from-xml-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportNominalsFromXmlFile` |
| Operation ID | `file_operations.import_nominals_from_xml_file` |
| Route | `/briosa.FileOperations/ImportNominalsFromXmlFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `FileReference` | `File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ImportNominalsFromXmlFile(ImportNominalsFromXmlFileRequest) returns (ImportNominalsFromXmlFileResult);

message ImportNominalsFromXmlFileRequest {
  optional FileReference file_path = 1;
}

message ImportNominalsFromXmlFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import Polyworks File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import Polyworks File](/mp-command-catalog/commands/file-operations#import-polyworks-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportPolyworksFile` |
| Operation ID | `file_operations.import_polyworks_file` |
| Route | `/briosa.FileOperations/ImportPolyworksFile` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_name` | `CollectionObjectName` | `Cloud Name` | Required |
| Request | 2 | `file_path` | `FileReference` | `File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import QDAS Catalog File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import QDAS Catalog File](/mp-command-catalog/commands/file-operations#import-qdas-catalog-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportQdasCatalogFile` |
| Operation ID | `file_operations.import_qdas_catalog_file` |
| Route | `/briosa.FileOperations/ImportQdasCatalogFile` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `qdas_dfd_file_path` | `FileReference` | `QDAS DFD File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ImportQdasCatalogFile(ImportQdasCatalogFileRequest) returns (ImportQdasCatalogFileResult);

message ImportQdasCatalogFileRequest {
  optional FileReference qdas_dfd_file_path = 1;
}

message ImportQdasCatalogFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import SA File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import SA File](/mp-command-catalog/commands/file-operations#import-sa-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportSaFile` |
| Operation ID | `file_operations.import_sa_file` |
| Route | `/briosa.FileOperations/ImportSaFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sa_file_name` | `FileReference` | `SA File Name` | Required |
| Request | 2 | `allow_operator_selections` | `bool` | `Allow Operator Selections` | false |
| Request | 3 | `selected_collections_optional` | `repeated string` | `Selected Collections (optional)` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import SA Windows Placement

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import SA Windows Placement](/mp-command-catalog/commands/file-operations#import-sa-windows-placement) |
| Service | `briosa.FileOperations` |
| RPC | `ImportSaWindowsPlacement` |
| Operation ID | `file_operations.import_sa_windows_placement` |
| Route | `/briosa.FileOperations/ImportSaWindowsPlacement` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `FileReference` | `File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ImportSaWindowsPlacement(ImportSaWindowsPlacementRequest) returns (ImportSaWindowsPlacementResult);

message ImportSaWindowsPlacementRequest {
  optional FileReference file_path = 1;
}

message ImportSaWindowsPlacementResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import SAT File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import SAT File](/mp-command-catalog/commands/file-operations#import-sat-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportSatFile` |
| Operation ID | `file_operations.import_sat_file` |
| Route | `/briosa.FileOperations/ImportSatFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sat_file_path` | `FileReference` | `SAT File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ImportSatFile(ImportSatFileRequest) returns (ImportSatFileResult);

message ImportSatFileRequest {
  optional FileReference sat_file_path = 1;
}

message ImportSatFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import STEP File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import STEP File](/mp-command-catalog/commands/file-operations#import-step-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportStepFile` |
| Operation ID | `file_operations.import_step_file` |
| Route | `/briosa.FileOperations/ImportStepFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `step_file_path` | `FileReference` | `STEP File Path` | Required |
| Request | 2 | `display_entity_filters` | `bool` | `Display Entity Filters` | false |
| Request | 3 | `display_residuals` | `bool` | `Display Residuals` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import STL File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import STL File](/mp-command-catalog/commands/file-operations#import-stl-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportStlFile` |
| Operation ID | `file_operations.import_stl_file` |
| Route | `/briosa.FileOperations/ImportStlFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `stl_file_path` | `FileReference` | `STL File Path` | Required |
| Request | 2 | `units` | `DistanceUnits` | `Units` | Millimeters |
| Request | 3 | `import_mesh` | `bool` | `Import Mesh` | true |
| Request | 4 | `import_point_cloud` | `bool` | `Import Point Cloud` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import VDA/FS File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import VDA/FS File](/mp-command-catalog/commands/file-operations#import-vdafs-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportVdaFsFile` |
| Operation ID | `file_operations.import_vda_fs_file` |
| Route | `/briosa.FileOperations/ImportVdaFsFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vda_fs_file_path` | `FileReference` | `VDA/FS File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ImportVdaFsFile(ImportVdaFsFileRequest) returns (ImportVdaFsFileResult);

message ImportVdaFsFileRequest {
  optional FileReference vda_fs_file_path = 1;
}

message ImportVdaFsFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import VSTARS .xyz File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import VSTARS .xyz File](/mp-command-catalog/commands/file-operations#import-vstars-xyz-file) |
| Service | `briosa.FileOperations` |
| RPC | `ImportVstarsXyzFile` |
| Operation ID | `file_operations.import_vstars_xyz_file` |
| Route | `/briosa.FileOperations/ImportVstarsXyzFile` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `FileReference` | `File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ImportVstarsXyzFile(ImportVstarsXyzFileRequest) returns (ImportVstarsXyzFileResult);

message ImportVstarsXyzFileRequest {
  optional FileReference file_path = 1;
}

message ImportVstarsXyzFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import VSTARS Cameras

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import VSTARS Cameras](/mp-command-catalog/commands/file-operations#import-vstars-cameras) |
| Service | `briosa.FileOperations` |
| RPC | `ImportVstarsCameras` |
| Operation ID | `file_operations.import_vstars_cameras` |
| Route | `/briosa.FileOperations/ImportVstarsCameras` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `FileReference` | `File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ImportVstarsCameras(ImportVstarsCamerasRequest) returns (ImportVstarsCamerasResult);

message ImportVstarsCamerasRequest {
  optional FileReference file_path = 1;
}

message ImportVstarsCamerasResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Load HTML Form

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Load HTML Form](/mp-command-catalog/commands/file-operations#load-html-form) |
| Service | `briosa.FileOperations` |
| RPC | `LoadHtmlForm` |
| Operation ID | `file_operations.load_html_form` |
| Route | `/briosa.FileOperations/LoadHtmlForm` |
| Validation | Licensed validation completed |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_html_form_path` | `FileReference` | `Input HTML Form Path` | Required |
| Request | 2 | `window_width` | `int32` | `Window Width` | 1000 |
| Request | 3 | `window_height` | `int32` | `Window Height` | 800 |
| Request | 4 | `input_data_share_file_path` | `FileReference` | `Input DataShare File Path` | Required |
| Request | 5 | `output_data_share_file_path` | `FileReference` | `Output DataShare File Path` | Required |
| Request | 6 | `save_in_binary_format` | `bool` | `Save in Binary Format?` | false |
| Request | 7 | `save_button_text` | `string` | `Save Button Text` | Save |
| Request | 8 | `cancel_button_text` | `string` | `Cancel Button Text` | Cancel |
| Request | 9 | `hide_save_and_cancel_buttons` | `bool` | `Hide Save and Cancel buttons?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Load HTML Form in Edge Browser

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Load HTML Form in Edge Browser](/mp-command-catalog/commands/file-operations#load-html-form-in-edge-browser) |
| Service | `briosa.FileOperations` |
| RPC | `LoadHtmlFormInEdgeBrowser` |
| Operation ID | `file_operations.load_html_form_in_edge_browser` |
| Route | `/briosa.FileOperations/LoadHtmlFormInEdgeBrowser` |
| Validation | Licensed validation completed |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_html_form_path` | `FileReference` | `Input HTML Form Path` | Required |
| Request | 2 | `window_width` | `int32` | `Window Width` | 1000 |
| Request | 3 | `window_height` | `int32` | `Window Height` | 800 |
| Request | 4 | `input_data_share_file_path` | `FileReference` | `Input DataShare File Path` | Required |
| Request | 5 | `output_data_share_file_path` | `FileReference` | `Output DataShare File Path` | Required |
| Request | 6 | `save_in_binary_format` | `bool` | `Save in Binary Format?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Embedded File Name List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Embedded File Name List](/mp-command-catalog/commands/file-operations#make-embedded-file-name-list) |
| Service | `briosa.FileOperations` |
| RPC | `MakeEmbeddedFileNameList` |
| Operation ID | `file_operations.make_embedded_file_name_list` |
| Route | `/briosa.FileOperations/MakeEmbeddedFileNameList` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_wildcard_criteria` | `string` | `Collection Wildcard Criteria` | * |
| Request | 2 | `file_name_pattern` | `string` | `File Name Pattern` | *.* |
| Result | 1 | `embedded_files` | `repeated string` | `Embedded Files` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Merge Measurements into XML File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Merge Measurements into XML File](/mp-command-catalog/commands/file-operations#merge-measurements-into-xml-file) |
| Service | `briosa.FileOperations` |
| RPC | `MergeMeasurementsIntoXmlFile` |
| Operation ID | `file_operations.merge_measurements_into_xml_file` |
| Route | `/briosa.FileOperations/MergeMeasurementsIntoXmlFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_path` | `FileReference` | `File Path` | Required |
| Request | 2 | `group_name` | `CollectionObjectName` | `Group Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## New SA File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [New SA File](/mp-command-catalog/commands/file-operations#new-sa-file) |
| Service | `briosa.FileOperations` |
| RPC | `NewSaFile` |
| Operation ID | `file_operations.new_sa_file` |
| Route | `/briosa.FileOperations/NewSaFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc NewSaFile(NewSaFileRequest) returns (NewSaFileResult);

message NewSaFileRequest {
  // No MP inputs.
}

message NewSaFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Open SA File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Open SA File](/mp-command-catalog/commands/file-operations#open-sa-file) |
| Service | `briosa.FileOperations` |
| RPC | `OpenSaFile` |
| Operation ID | `file_operations.open_sa_file` |
| Route | `/briosa.FileOperations/OpenSaFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sa_file_name` | `FileReference` | `SA File Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc OpenSaFile(OpenSaFileRequest) returns (OpenSaFileResult);

message OpenSaFileRequest {
  optional FileReference sa_file_name = 1;
}

message OpenSaFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Open Template File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Open Template File](/mp-command-catalog/commands/file-operations#open-template-file) |
| Service | `briosa.FileOperations` |
| RPC | `OpenTemplateFile` |
| Operation ID | `file_operations.open_template_file` |
| Route | `/briosa.FileOperations/OpenTemplateFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `template_file_name` | `FileReference` | `Template File Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc OpenTemplateFile(OpenTemplateFileRequest) returns (OpenTemplateFileResult);

message OpenTemplateFileRequest {
  optional FileReference template_file_name = 1;
}

message OpenTemplateFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Pop PolyBay Analysis Window

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Pop PolyBay Analysis Window](/mp-command-catalog/commands/file-operations#pop-polybay-analysis-window) |
| Service | `briosa.FileOperations` |
| RPC | `PopPolyBayAnalysisWindow` |
| Operation ID | `file_operations.pop_poly_bay_analysis_window` |
| Route | `/briosa.FileOperations/PopPolyBayAnalysisWindow` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `materials_file_path` | `string` | `Materials File Path` | Empty |
| Request | 2 | `bay_file_path` | `string` | `Bay File Path` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Prepare QDAS Data List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Prepare QDAS Data List](/mp-command-catalog/commands/file-operations#prepare-qdas-data-list) |
| Service | `briosa.FileOperations` |
| RPC | `PrepareQdasDataList` |
| Operation ID | `file_operations.prepare_qdas_data_list` |
| Route | `/briosa.FileOperations/PrepareQdasDataList` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `k1001_part_number` | `string` | `K1001: Part Number` | Empty |
| Request | 2 | `k1002_part_description` | `string` | `K1002: Part Description` | Empty |
| Request | 3 | `k1071_supplier_number` | `string` | `K1071: Supplier Number` | Empty |
| Request | 4 | `k1072_supplier_description` | `string` | `K1072: Supplier Description` | Empty |
| Request | 5 | `k1203_reason_for_test` | `string` | `K1203: Reason for Test` | Empty |
| Request | 6 | `k1303_plant` | `string` | `K1303: Plant` | Empty |
| Request | 7 | `k1900_part_remark` | `string` | `K1900: Part Remark` | Empty |
| Request | 8 | `k0006_batch_number` | `string` | `K0006: Batch Number` | Empty |
| Request | 9 | `k0014_part_id` | `string` | `K0014: Part ID` | Empty |
| Request | 10 | `k0053_order_number` | `string` | `K0053: Order Number` | Empty |
| Request | 11 | `k0004_date_time_stamp` | `string` | `K0004: Date Time Stamp` | 2026-07-20/16:32:22 |
| Request | 12 | `k0008_operator_identifier` | `int32` | `K0008: Operator Identifier` | -1 |
| Request | 13 | `k0010_machine_identifier` | `int32` | `K0010: Machine Identifier` | -1 |
| Request | 14 | `k0012_gage_identifier` | `int32` | `K0012: Gage Identifier` | -1 |
| Request | 15 | `relationship_list` | `repeated CollectionItemName` | `Relationship List` | Required |
| Request | 16 | `feature_check_list` | `repeated CollectionItemName` | `Feature Check List` | Required |
| Request | 17 | `vector_group_list` | `repeated CollectionObjectName` | `Vector Group List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Rename General File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Rename General File](/mp-command-catalog/commands/file-operations#rename-general-file) |
| Service | `briosa.FileOperations` |
| RPC | `RenameGeneralFile` |
| Operation ID | `file_operations.rename_general_file` |
| Route | `/briosa.FileOperations/RenameGeneralFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_file_name` | `FileReference` | `Source File Name` | Required |
| Request | 2 | `destination_file_name` | `FileReference` | `Destination File Name` | Required |
| Request | 3 | `overwrite` | `bool` | `Overwrite?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Save

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Save](/mp-command-catalog/commands/file-operations#save) |
| Service | `briosa.FileOperations` |
| RPC | `Save` |
| Operation ID | `file_operations.save` |
| Route | `/briosa.FileOperations/Save` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc Save(SaveRequest) returns (SaveResult);

message SaveRequest {
  // No MP inputs.
}

message SaveResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Save As Read-Only Template

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Save As Read-Only Template](/mp-command-catalog/commands/file-operations#save-as-read-only-template) |
| Service | `briosa.FileOperations` |
| RPC | `SaveAsReadOnlyTemplate` |
| Operation ID | `file_operations.save_as_read_only_template` |
| Route | `/briosa.FileOperations/SaveAsReadOnlyTemplate` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `template_file_name` | `FileReference` | `Template File Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SaveAsReadOnlyTemplate(SaveAsReadOnlyTemplateRequest) returns (SaveAsReadOnlyTemplateResult);

message SaveAsReadOnlyTemplateRequest {
  optional FileReference template_file_name = 1;
}

message SaveAsReadOnlyTemplateResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Save As...

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Save As...](/mp-command-catalog/commands/file-operations#save-as) |
| Service | `briosa.FileOperations` |
| RPC | `SaveAs` |
| Operation ID | `file_operations.save_as` |
| Route | `/briosa.FileOperations/SaveAs` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_name` | `FileReference` | `File Name` | Required |
| Request | 2 | `add_serial_number` | `bool` | `Add Serial Number?` | false |
| Request | 3 | `optional_number` | `int32` | `Optional Number` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Boolean In DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Boolean In DataShare File](/mp-command-catalog/commands/file-operations#set-boolean-in-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `SetBooleanInDataShareFile` |
| Operation ID | `file_operations.set_boolean_in_data_share_file` |
| Route | `/briosa.FileOperations/SetBooleanInDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `boolean_name` | `string` | `Boolean Name` | Empty |
| Request | 3 | `boolean_value` | `bool` | `Boolean Value` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Double In DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Double In DataShare File](/mp-command-catalog/commands/file-operations#set-double-in-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `SetDoubleInDataShareFile` |
| Operation ID | `file_operations.set_double_in_data_share_file` |
| Route | `/briosa.FileOperations/SetDoubleInDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `double_name` | `string` | `Double Name` | Empty |
| Request | 3 | `double_value` | `double` | `Double Value` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Integer In DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Integer In DataShare File](/mp-command-catalog/commands/file-operations#set-integer-in-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `SetIntegerInDataShareFile` |
| Operation ID | `file_operations.set_integer_in_data_share_file` |
| Route | `/briosa.FileOperations/SetIntegerInDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `integer_name` | `string` | `Integer Name` | Empty |
| Request | 3 | `integer_value` | `int32` | `Integer Value` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set String In DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set String In DataShare File](/mp-command-catalog/commands/file-operations#set-string-in-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `SetStringInDataShareFile` |
| Operation ID | `file_operations.set_string_in_data_share_file` |
| Route | `/briosa.FileOperations/SetStringInDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `string_name` | `string` | `String Name` | Empty |
| Request | 3 | `string_value` | `string` | `String Value` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Transform In DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Transform In DataShare File](/mp-command-catalog/commands/file-operations#set-transform-in-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `SetTransformInDataShareFile` |
| Operation ID | `file_operations.set_transform_in_data_share_file` |
| Route | `/briosa.FileOperations/SetTransformInDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `transform_name` | `string` | `Transform Name` | Empty |
| Request | 3 | `transform_value` | `Transform` | `Transform Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Vector In DataShare File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Vector In DataShare File](/mp-command-catalog/commands/file-operations#set-vector-in-datashare-file) |
| Service | `briosa.FileOperations` |
| RPC | `SetVectorInDataShareFile` |
| Operation ID | `file_operations.set_vector_in_data_share_file` |
| Route | `/briosa.FileOperations/SetVectorInDataShareFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `data_share_file_path` | `FileReference` | `DataShare File Path` | Required |
| Request | 2 | `vector_name` | `string` | `Vector Name` | Empty |
| Request | 3 | `vector_value` | `Vector` | `Vector Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Terminate All Running MPs

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Terminate All Running MPs](/mp-command-catalog/commands/file-operations#terminate-all-running-mps) |
| Service | `briosa.FileOperations` |
| RPC | `TerminateAllRunningMPs` |
| Operation ID | `file_operations.terminate_all_running_mps` |
| Route | `/briosa.FileOperations/TerminateAllRunningMPs` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc TerminateAllRunningMPs(TerminateAllRunningMPsRequest) returns (TerminateAllRunningMPsResult);

message TerminateAllRunningMPsRequest {
  // No MP inputs.
}

message TerminateAllRunningMPsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Use NRKXML Library

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Use NRKXML Library](/mp-command-catalog/commands/file-operations#use-nrkxml-library) |
| Service | `briosa.FileOperations` |
| RPC | `UseNrkxmlLibrary` |
| Operation ID | `file_operations.use_nrkxml_library` |
| Route | `/briosa.FileOperations/UseNrkxmlLibrary` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `use_library` | `bool` | `Use library?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc UseNrkxmlLibrary(UseNrkxmlLibraryRequest) returns (UseNrkxmlLibraryResult);

message UseNrkxmlLibraryRequest {
  optional bool use_library = 1;
}

message UseNrkxmlLibraryResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Verify General File Exists

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Verify General File Exists](/mp-command-catalog/commands/file-operations#verify-general-file-exists) |
| Service | `briosa.FileOperations` |
| RPC | `VerifyGeneralFileExists` |
| Operation ID | `file_operations.verify_general_file_exists` |
| Route | `/briosa.FileOperations/VerifyGeneralFileExists` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_name` | `FileReference` | `File Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc VerifyGeneralFileExists(VerifyGeneralFileExistsRequest) returns (VerifyGeneralFileExistsResult);

message VerifyGeneralFileExistsRequest {
  optional FileReference file_name = 1;
}

message VerifyGeneralFileExistsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Verify MP File Exists

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Verify MP File Exists](/mp-command-catalog/commands/file-operations#verify-mp-file-exists) |
| Service | `briosa.FileOperations` |
| RPC | `VerifyMpFileExists` |
| Operation ID | `file_operations.verify_mp_file_exists` |
| Route | `/briosa.FileOperations/VerifyMpFileExists` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `mp_file_name` | `FileReference` | `MP File Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc VerifyMpFileExists(VerifyMpFileExistsRequest) returns (VerifyMpFileExistsResult);

message VerifyMpFileExistsRequest {
  optional FileReference mp_file_name = 1;
}

message VerifyMpFileExistsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
