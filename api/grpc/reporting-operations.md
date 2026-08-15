---
title: Reporting Operations
description: Current and next gRPC contracts for supported Reporting Operations MP commands.
toc_max_heading_level: 2
---

# Reporting Operations

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Add Charts to Report Bar

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Charts to Report Bar](/mp-command-catalog/commands/reporting-operations#add-charts-to-report-bar) |
| Service | `briosa.ReportingOperations` |
| RPC | `AddChartsToReportBar` |
| Operation ID | `reporting_operations.add_charts_to_report_bar` |
| Route | `/briosa.ReportingOperations/AddChartsToReportBar` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `charts` | `repeated CollectionItemName` | `Chart(s)` | Required |
| Request | 2 | `clear_existing` | `bool` | `Clear Existing?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddChartsToReportBar(AddChartsToReportBarRequest) returns (AddChartsToReportBarResult);

message AddChartsToReportBarRequest {
  repeated CollectionItemName charts = 1;
  optional bool clear_existing = 2;
}

message AddChartsToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Add Custom Table to SA Report

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Custom Table to SA Report](/mp-command-catalog/commands/reporting-operations#add-custom-table-to-sa-report) |
| Service | `briosa.ReportingOperations` |
| RPC | `AddCustomTableToSaReport` |
| Operation ID | `reporting_operations.add_custom_table_to_sa_report` |
| Route | `/briosa.ReportingOperations/AddCustomTableToSaReport` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Request | 2 | `report_name` | `CollectionObjectName` | `Report Name` | Required |
| Request | 3 | `show_report` | `bool` | `Show Report?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddCustomTableToSaReport(AddCustomTableToSaReportRequest) returns (AddCustomTableToSaReportResult);

message AddCustomTableToSaReportRequest {
  optional CollectionObjectName table_name = 1;
  optional CollectionObjectName report_name = 2;
  optional bool show_report = 3;
}

message AddCustomTableToSaReportResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Add Custom Tables to Report Bar

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Custom Tables to Report Bar](/mp-command-catalog/commands/reporting-operations#add-custom-tables-to-report-bar) |
| Service | `briosa.ReportingOperations` |
| RPC | `AddCustomTablesToReportBar` |
| Operation ID | `reporting_operations.add_custom_tables_to_report_bar` |
| Route | `/briosa.ReportingOperations/AddCustomTablesToReportBar` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `custom_tables_to_report` | `repeated CollectionItemName` | `Custom Table(s) To Report` | Required |
| Request | 2 | `clear_existing` | `bool` | `Clear Existing?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddCustomTablesToReportBar(AddCustomTablesToReportBarRequest) returns (AddCustomTablesToReportBarResult);

message AddCustomTablesToReportBarRequest {
  repeated CollectionItemName custom_tables_to_report = 1;
  optional bool clear_existing = 2;
}

message AddCustomTablesToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Add Datums to Report Bar

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Datums to Report Bar](/mp-command-catalog/commands/reporting-operations#add-datums-to-report-bar) |
| Service | `briosa.ReportingOperations` |
| RPC | `AddDatumsToReportBar` |
| Operation ID | `reporting_operations.add_datums_to_report_bar` |
| Route | `/briosa.ReportingOperations/AddDatumsToReportBar` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `datums` | `repeated CollectionObjectName` | `Datum(s)` | Required |
| Request | 2 | `clear_existing` | `bool` | `Clear Existing?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddDatumsToReportBar(AddDatumsToReportBarRequest) returns (AddDatumsToReportBarResult);

message AddDatumsToReportBarRequest {
  repeated CollectionObjectName datums = 1;
  optional bool clear_existing = 2;
}

message AddDatumsToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Add Events to Report Bar

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Events to Report Bar](/mp-command-catalog/commands/reporting-operations#add-events-to-report-bar) |
| Service | `briosa.ReportingOperations` |
| RPC | `AddEventsToReportBar` |
| Operation ID | `reporting_operations.add_events_to_report_bar` |
| Route | `/briosa.ReportingOperations/AddEventsToReportBar` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `events` | `repeated CollectionItemName` | `Event(s)` | Required |
| Request | 2 | `clear_existing` | `bool` | `Clear Existing?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddEventsToReportBar(AddEventsToReportBarRequest) returns (AddEventsToReportBarResult);

message AddEventsToReportBarRequest {
  repeated CollectionItemName events = 1;
  optional bool clear_existing = 2;
}

message AddEventsToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Add Feature Checks to Report Bar

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Feature Checks to Report Bar](/mp-command-catalog/commands/reporting-operations#add-feature-checks-to-report-bar) |
| Service | `briosa.ReportingOperations` |
| RPC | `AddFeatureChecksToReportBar` |
| Operation ID | `reporting_operations.add_feature_checks_to_report_bar` |
| Route | `/briosa.ReportingOperations/AddFeatureChecksToReportBar` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_checks` | `repeated CollectionItemName` | `Feature Check(s)` | Required |
| Request | 2 | `clear_existing` | `bool` | `Clear Existing?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddFeatureChecksToReportBar(AddFeatureChecksToReportBarRequest) returns (AddFeatureChecksToReportBarResult);

message AddFeatureChecksToReportBarRequest {
  repeated CollectionItemName feature_checks = 1;
  optional bool clear_existing = 2;
}

message AddFeatureChecksToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Add Item to SA Report at Location

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Item to SA Report at Location](/mp-command-catalog/commands/reporting-operations#add-item-to-sa-report-at-location) |
| Service | `briosa.ReportingOperations` |
| RPC | `AddItemToSaReportAtLocation` |
| Operation ID | `reporting_operations.add_item_to_sa_report_at_location` |
| Route | `/briosa.ReportingOperations/AddItemToSaReportAtLocation` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `CollectionObjectName` | `Report Name` | Required |
| Request | 2 | `item_name` | `CollectionObjectName` | `Item Name` | Required |
| Request | 3 | `page_number` | `int32` | `Page Number` | 0 |
| Request | 4 | `horizontal_location` | `double` | `Horizontal Location` | 1.000000 |
| Request | 5 | `vertical_location` | `double` | `Vertical Location` | 1.000000 |
| Request | 6 | `show_report` | `bool` | `Show Report?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddItemToSaReportAtLocation(AddItemToSaReportAtLocationRequest) returns (AddItemToSaReportAtLocationResult);

message AddItemToSaReportAtLocationRequest {
  optional CollectionObjectName report_name = 1;
  optional CollectionObjectName item_name = 2;
  optional int32 page_number = 3;
  optional double horizontal_location = 4;
  optional double vertical_location = 5;
  optional bool show_report = 6;
}

message AddItemToSaReportAtLocationResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Add Objects to Report Bar

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Objects to Report Bar](/mp-command-catalog/commands/reporting-operations#add-objects-to-report-bar) |
| Service | `briosa.ReportingOperations` |
| RPC | `AddObjectsToReportBar` |
| Operation ID | `reporting_operations.add_objects_to_report_bar` |
| Route | `/briosa.ReportingOperations/AddObjectsToReportBar` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects` | `repeated CollectionObjectName` | `Object(s)` | Required |
| Request | 2 | `clear_existing` | `bool` | `Clear Existing?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddObjectsToReportBar(AddObjectsToReportBarRequest) returns (AddObjectsToReportBarResult);

message AddObjectsToReportBarRequest {
  repeated CollectionObjectName objects = 1;
  optional bool clear_existing = 2;
}

message AddObjectsToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Add Pictures to Report Bar

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Pictures to Report Bar](/mp-command-catalog/commands/reporting-operations#add-pictures-to-report-bar) |
| Service | `briosa.ReportingOperations` |
| RPC | `AddPicturesToReportBar` |
| Operation ID | `reporting_operations.add_pictures_to_report_bar` |
| Route | `/briosa.ReportingOperations/AddPicturesToReportBar` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `pictures` | `repeated CollectionItemName` | `Picture(s)` | Required |
| Request | 2 | `clear_existing` | `bool` | `Clear Existing?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddPicturesToReportBar(AddPicturesToReportBarRequest) returns (AddPicturesToReportBarResult);

message AddPicturesToReportBarRequest {
  repeated CollectionItemName pictures = 1;
  optional bool clear_existing = 2;
}

message AddPicturesToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Add Relationships to Report Bar

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Relationships to Report Bar](/mp-command-catalog/commands/reporting-operations#add-relationships-to-report-bar) |
| Service | `briosa.ReportingOperations` |
| RPC | `AddRelationshipsToReportBar` |
| Operation ID | `reporting_operations.add_relationships_to_report_bar` |
| Route | `/briosa.ReportingOperations/AddRelationshipsToReportBar` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationships` | `repeated CollectionItemName` | `Relationship(s)` | Required |
| Request | 2 | `clear_existing` | `bool` | `Clear Existing?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddRelationshipsToReportBar(AddRelationshipsToReportBarRequest) returns (AddRelationshipsToReportBarResult);

message AddRelationshipsToReportBarRequest {
  repeated CollectionItemName relationships = 1;
  optional bool clear_existing = 2;
}

message AddRelationshipsToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Append Items to SA Report

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Append Items to SA Report](/mp-command-catalog/commands/reporting-operations#append-items-to-sa-report) |
| Service | `briosa.ReportingOperations` |
| RPC | `AppendItemsToSaReport` |
| Operation ID | `reporting_operations.append_items_to_sa_report` |
| Route | `/briosa.ReportingOperations/AppendItemsToSaReport` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `CollectionObjectName` | `Report Name` | Required |
| Request | 2 | `items_to_report` | `repeated CollectionObjectName` | `Items To Report` | Required |
| Request | 3 | `show_report` | `bool` | `Show Report?` | false |
| Request | 4 | `begin_on_new_page` | `bool` | `Begin On New Page?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AppendItemsToSaReport(AppendItemsToSaReportRequest) returns (AppendItemsToSaReportResult);

message AppendItemsToSaReportRequest {
  optional CollectionObjectName report_name = 1;
  repeated CollectionObjectName items_to_report = 2;
  optional bool show_report = 3;
  optional bool begin_on_new_page = 4;
}

message AppendItemsToSaReportResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Capture Current View

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Capture Current View](/mp-command-catalog/commands/reporting-operations#capture-current-view) |
| Service | `briosa.ReportingOperations` |
| RPC | `CaptureCurrentView` |
| Operation ID | `reporting_operations.capture_current_view` |
| Route | `/briosa.ReportingOperations/CaptureCurrentView` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `picture_name` | `CollectionItemName` | `Picture Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CaptureCurrentView(CaptureCurrentViewRequest) returns (CaptureCurrentViewResult);

message CaptureCurrentViewRequest {
  optional CollectionItemName picture_name = 1;
}

message CaptureCurrentViewResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Capture Screen to File (BMP/JPG/PNG/GIF/TIFF)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Capture Screen to File (BMP/JPG/PNG/GIF/TIFF)](/mp-command-catalog/commands/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff) |
| Service | `briosa.ReportingOperations` |
| RPC | `CaptureScreenToFileBmpJpgPngGifTiff` |
| Operation ID | `reporting_operations.capture_screen_to_file_bmp_jpg_png_gif_tiff` |
| Route | `/briosa.ReportingOperations/CaptureScreenToFileBmpJpgPngGifTiff` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_to_save_to` | `FileReference` | `File to save to` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CaptureScreenToFileBmpJpgPngGifTiff(CaptureScreenToFileBmpJpgPngGifTiffRequest) returns (CaptureScreenToFileBmpJpgPngGifTiffResult);

message CaptureScreenToFileBmpJpgPngGifTiffRequest {
  optional FileReference file_to_save_to = 1;
}

message CaptureScreenToFileBmpJpgPngGifTiffResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Clear Custom Table

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Clear Custom Table](/mp-command-catalog/commands/reporting-operations#clear-custom-table) |
| Service | `briosa.ReportingOperations` |
| RPC | `ClearCustomTable` |
| Operation ID | `reporting_operations.clear_custom_table` |
| Route | `/briosa.ReportingOperations/ClearCustomTable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ClearCustomTable(ClearCustomTableRequest) returns (ClearCustomTableResult);

message ClearCustomTableRequest {
  optional CollectionObjectName table_name = 1;
}

message ClearCustomTableResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Close All Reports

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Close All Reports](/mp-command-catalog/commands/reporting-operations#close-all-reports) |
| Service | `briosa.ReportingOperations` |
| RPC | `CloseAllReports` |
| Operation ID | `reporting_operations.close_all_reports` |
| Route | `/briosa.ReportingOperations/CloseAllReports` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CloseAllReports(CloseAllReportsRequest) returns (CloseAllReportsResult);

message CloseAllReportsRequest {
  // No MP inputs.
}

message CloseAllReportsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Close HTML Display Board

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Close HTML Display Board](/mp-command-catalog/commands/reporting-operations#close-html-display-board) |
| Service | `briosa.ReportingOperations` |
| RPC | `CloseHtmlDisplayBoard` |
| Operation ID | `reporting_operations.close_html_display_board` |
| Route | `/briosa.ReportingOperations/CloseHtmlDisplayBoard` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CloseHtmlDisplayBoard(CloseHtmlDisplayBoardRequest) returns (CloseHtmlDisplayBoardResult);

message CloseHtmlDisplayBoardRequest {
  // No MP inputs.
}

message CloseHtmlDisplayBoardResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Combine SA Reports

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Combine SA Reports](/mp-command-catalog/commands/reporting-operations#combine-sa-reports) |
| Service | `briosa.ReportingOperations` |
| RPC | `CombineSaReports` |
| Operation ID | `reporting_operations.combine_sa_reports` |
| Route | `/briosa.ReportingOperations/CombineSaReports` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sa_reports_to_combine` | `repeated CollectionItemName` | `SA Reports to Combine` | Required |
| Request | 2 | `output_sa_report_name` | `CollectionObjectName` | `Output SA Report Name` | Required |
| Request | 3 | `show_report` | `bool` | `Show Report?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CombineSaReports(CombineSaReportsRequest) returns (CombineSaReportsResult);

message CombineSaReportsRequest {
  repeated CollectionItemName sa_reports_to_combine = 1;
  optional CollectionObjectName output_sa_report_name = 2;
  optional bool show_report = 3;
}

message CombineSaReportsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Create Chart from Vector Group

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Create Chart from Vector Group](/mp-command-catalog/commands/reporting-operations#create-chart-from-vector-group) |
| Service | `briosa.ReportingOperations` |
| RPC | `CreateChartFromVectorGroup` |
| Operation ID | `reporting_operations.create_chart_from_vector_group` |
| Route | `/briosa.ReportingOperations/CreateChartFromVectorGroup` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_chart_name` | `ChartName` | `New Chart Name` | Required |
| Request | 2 | `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| Request | 3 | `chart_type` | `ChartType` | `Chart Type` | Required |
| Request | 4 | `data_set_to_chart` | `DatasetType` | `Data Set to Chart` | Required |
| Request | 5 | `aux_data_set_to_chart` | `DatasetType` | `Aux Data Set to Chart` | Required |
| Request | 6 | `template_chart_name_optional` | `ChartName` | `Template Chart Name (optional)` | Required |
| Request | 7 | `show_interface` | `bool` | `Show Interface?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CreateChartFromVectorGroup(CreateChartFromVectorGroupRequest) returns (CreateChartFromVectorGroupResult);

message CreateChartFromVectorGroupRequest {
  optional ChartName new_chart_name = 1;
  optional CollectionObjectName vector_group_name = 2;
  optional ChartType chart_type = 3;
  optional DatasetType data_set_to_chart = 4;
  optional DatasetType aux_data_set_to_chart = 5;
  optional ChartName template_chart_name_optional = 6;
  optional bool show_interface = 7;
}

message CreateChartFromVectorGroupResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Define Report Template

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Define Report Template](/mp-command-catalog/commands/reporting-operations#define-report-template) |
| Service | `briosa.ReportingOperations` |
| RPC | `DefineReportTemplate` |
| Operation ID | `reporting_operations.define_report_template` |
| Route | `/briosa.ReportingOperations/DefineReportTemplate` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_template_name` | `CollectionObjectName` | `Report Template Name` | Required |
| Request | 2 | `title` | `repeated string` | `Title` | Required |
| Request | 3 | `graphical_view_options` | `ReportViewOptions` | `Graphical View Options` | Required |
| Request | 4 | `items_to_report` | `repeated CollectionObjectName` | `Items To Report` | Required |
| Request | 5 | `relationships_to_report` | `repeated CollectionItemName` | `Relationships To Report` | Required |
| Request | 6 | `events_to_report` | `repeated CollectionItemName` | `Events To Report` | Required |
| Request | 7 | `report_output_options` | `ReportOutputOptions` | `Report Output Options` | ::My Report |
| Request | 8 | `report_page_settings_sa_report_only` | `ReportPageSettings` | `Report Page Settings ( SA Report only )` | Portrait |
| Request | 9 | `generate_now` | `bool` | `Generate Now?` | false |
| Request | 10 | `show_generated_report` | `bool` | `Show Generated Report?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DefineReportTemplate(DefineReportTemplateRequest) returns (DefineReportTemplateResult);

message DefineReportTemplateRequest {
  optional CollectionObjectName report_template_name = 1;
  repeated string title = 2;
  optional ReportViewOptions graphical_view_options = 3;
  repeated CollectionObjectName items_to_report = 4;
  repeated CollectionItemName relationships_to_report = 5;
  repeated CollectionItemName events_to_report = 6;
  optional ReportOutputOptions report_output_options = 7;
  optional ReportPageSettings report_page_settings_sa_report_only = 8;
  optional bool generate_now = 9;
  optional bool show_generated_report = 10;
}

message DefineReportTemplateResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete Chart

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Chart](/mp-command-catalog/commands/reporting-operations#delete-chart) |
| Service | `briosa.ReportingOperations` |
| RPC | `DeleteChart` |
| Operation ID | `reporting_operations.delete_chart` |
| Route | `/briosa.ReportingOperations/DeleteChart` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `chart_name` | `CollectionObjectName` | `Chart Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteChart(DeleteChartRequest) returns (DeleteChartResult);

message DeleteChartRequest {
  optional CollectionObjectName chart_name = 1;
}

message DeleteChartResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete Custom Table

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Custom Table](/mp-command-catalog/commands/reporting-operations#delete-custom-table) |
| Service | `briosa.ReportingOperations` |
| RPC | `DeleteCustomTable` |
| Operation ID | `reporting_operations.delete_custom_table` |
| Route | `/briosa.ReportingOperations/DeleteCustomTable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteCustomTable(DeleteCustomTableRequest) returns (DeleteCustomTableResult);

message DeleteCustomTableRequest {
  optional CollectionObjectName table_name = 1;
}

message DeleteCustomTableResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete Picture

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Picture](/mp-command-catalog/commands/reporting-operations#delete-picture) |
| Service | `briosa.ReportingOperations` |
| RPC | `DeletePicture` |
| Operation ID | `reporting_operations.delete_picture` |
| Route | `/briosa.ReportingOperations/DeletePicture` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `picture_name` | `CollectionItemName` | `Picture Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeletePicture(DeletePictureRequest) returns (DeletePictureResult);

message DeletePictureRequest {
  optional CollectionItemName picture_name = 1;
}

message DeletePictureResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete SA Doc

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete SA Doc](/mp-command-catalog/commands/reporting-operations#delete-sa-doc) |
| Service | `briosa.ReportingOperations` |
| RPC | `DeleteSaDoc` |
| Operation ID | `reporting_operations.delete_sa_doc` |
| Route | `/briosa.ReportingOperations/DeleteSaDoc` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `doc_name` | `CollectionObjectName` | `Doc Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteSaDoc(DeleteSaDocRequest) returns (DeleteSaDocResult);

message DeleteSaDocRequest {
  optional CollectionObjectName doc_name = 1;
}

message DeleteSaDocResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete SA Report

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete SA Report](/mp-command-catalog/commands/reporting-operations#delete-sa-report) |
| Service | `briosa.ReportingOperations` |
| RPC | `DeleteSaReport` |
| Operation ID | `reporting_operations.delete_sa_report` |
| Route | `/briosa.ReportingOperations/DeleteSaReport` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `CollectionObjectName` | `Report Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteSaReport(DeleteSaReportRequest) returns (DeleteSaReportResult);

message DeleteSaReportRequest {
  optional CollectionObjectName report_name = 1;
}

message DeleteSaReportResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete SA Report Template

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete SA Report Template](/mp-command-catalog/commands/reporting-operations#delete-sa-report-template) |
| Service | `briosa.ReportingOperations` |
| RPC | `DeleteSaReportTemplate` |
| Operation ID | `reporting_operations.delete_sa_report_template` |
| Route | `/briosa.ReportingOperations/DeleteSaReportTemplate` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_template_name` | `CollectionObjectName` | `Report Template Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteSaReportTemplate(DeleteSaReportTemplateRequest) returns (DeleteSaReportTemplateResult);

message DeleteSaReportTemplateRequest {
  optional CollectionObjectName report_template_name = 1;
}

message DeleteSaReportTemplateResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Generate Quick Report from Tab Order

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Generate Quick Report from Tab Order](/mp-command-catalog/commands/reporting-operations#generate-quick-report-from-tab-order) |
| Service | `briosa.ReportingOperations` |
| RPC | `GenerateQuickReportFromTabOrder` |
| Operation ID | `reporting_operations.generate_quick_report_from_tab_order` |
| Route | `/briosa.ReportingOperations/GenerateQuickReportFromTabOrder` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_output_options` | `ReportOutputOptions` | `Report Output Options` | ::My Report |
| Request | 2 | `open_report` | `bool` | `Open Report?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GenerateQuickReportFromTabOrder(GenerateQuickReportFromTabOrderRequest) returns (GenerateQuickReportFromTabOrderResult);

message GenerateQuickReportFromTabOrderRequest {
  optional ReportOutputOptions report_output_options = 1;
  optional bool open_report = 2;
}

message GenerateQuickReportFromTabOrderResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Generate Standard HTML Report

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Generate Standard HTML Report](/mp-command-catalog/commands/reporting-operations#generate-standard-html-report) |
| Service | `briosa.ReportingOperations` |
| RPC | `GenerateStandardHtmlReport` |
| Operation ID | `reporting_operations.generate_standard_html_report` |
| Route | `/briosa.ReportingOperations/GenerateStandardHtmlReport` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `html_output_file` | `FileReference` | `HTML Output File` | Required |
| Request | 2 | `decimal_precision` | `int32` | `Decimal Precision` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GenerateStandardHtmlReport(GenerateStandardHtmlReportRequest) returns (GenerateStandardHtmlReportResult);

message GenerateStandardHtmlReportRequest {
  optional FileReference html_output_file = 1;
  optional int32 decimal_precision = 2;
}

message GenerateStandardHtmlReportResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Generate/Update Templated Report

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Generate/Update Templated Report](/mp-command-catalog/commands/reporting-operations#generateupdate-templated-report) |
| Service | `briosa.ReportingOperations` |
| RPC | `GenerateUpdateTemplatedReport` |
| Operation ID | `reporting_operations.generate_update_templated_report` |
| Route | `/briosa.ReportingOperations/GenerateUpdateTemplatedReport` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_template` | `CollectionObjectName` | `Report Template` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GenerateUpdateTemplatedReport(GenerateUpdateTemplatedReportRequest) returns (GenerateUpdateTemplatedReportResult);

message GenerateUpdateTemplatedReportRequest {
  optional CollectionObjectName report_template = 1;
}

message GenerateUpdateTemplatedReportResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Custom Table Cell Double

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Custom Table Cell Double](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-double) |
| Service | `briosa.ReportingOperations` |
| RPC | `GetCustomTableCellDouble` |
| Operation ID | `reporting_operations.get_custom_table_cell_double` |
| Route | `/briosa.ReportingOperations/GetCustomTableCellDouble` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Request | 2 | `row` | `int32` | `Row` | 0 |
| Request | 3 | `column` | `int32` | `Column` | 0 |
| Result | 1 | `value` | `double` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetCustomTableCellDouble(GetCustomTableCellDoubleRequest) returns (GetCustomTableCellDoubleResult);

message GetCustomTableCellDoubleRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
}

message GetCustomTableCellDoubleResult {
  optional double value = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Custom Table Cell String

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Custom Table Cell String](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-string) |
| Service | `briosa.ReportingOperations` |
| RPC | `GetCustomTableCellString` |
| Operation ID | `reporting_operations.get_custom_table_cell_string` |
| Route | `/briosa.ReportingOperations/GetCustomTableCellString` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Request | 2 | `row` | `int32` | `Row` | 0 |
| Request | 3 | `column` | `int32` | `Column` | 0 |
| Result | 1 | `value` | `string` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetCustomTableCellString(GetCustomTableCellStringRequest) returns (GetCustomTableCellStringResult);

message GetCustomTableCellStringRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
}

message GetCustomTableCellStringResult {
  optional string value = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Defined Report Tags

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Defined Report Tags](/mp-command-catalog/commands/reporting-operations#get-defined-report-tags) |
| Service | `briosa.ReportingOperations` |
| RPC | `GetDefinedReportTags` |
| Operation ID | `reporting_operations.get_defined_report_tags` |
| Route | `/briosa.ReportingOperations/GetDefinedReportTags` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `defined_tags` | `repeated string` | `Defined Tags` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetDefinedReportTags(GetDefinedReportTagsRequest) returns (GetDefinedReportTagsResult);

message GetDefinedReportTagsRequest {
  // No MP inputs.
}

message GetDefinedReportTagsResult {
  repeated string defined_tags = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Report Tag Value

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Report Tag Value](/mp-command-catalog/commands/reporting-operations#get-report-tag-value) |
| Service | `briosa.ReportingOperations` |
| RPC | `GetReportTagValue` |
| Operation ID | `reporting_operations.get_report_tag_value` |
| Route | `/briosa.ReportingOperations/GetReportTagValue` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tag_name` | `string` | `Tag Name` | Empty |
| Result | 1 | `tag_value_as_string` | `string` | `Tag Value As String` | — |
| Result | 2 | `tag_value_as_integer` | `int32` | `Tag Value As Integer` | — |
| Result | 3 | `tag_value_as_double` | `double` | `Tag Value As Double` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetReportTagValue(GetReportTagValueRequest) returns (GetReportTagValueResult);

message GetReportTagValueRequest {
  optional string tag_name = 1;
}

message GetReportTagValueResult {
  optional string tag_value_as_string = 1;
  optional int32 tag_value_as_integer = 2;
  optional double tag_value_as_double = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## HTML Display Board

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [HTML Display Board](/mp-command-catalog/commands/reporting-operations#html-display-board) |
| Service | `briosa.ReportingOperations` |
| RPC | `HtmlDisplayBoard` |
| Operation ID | `reporting_operations.html_display_board` |
| Route | `/briosa.ReportingOperations/HtmlDisplayBoard` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_html_file` | `FileReference` | `Input HTML File` | Required |
| Request | 2 | `show_board` | `bool` | `Show Board?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc HtmlDisplayBoard(HtmlDisplayBoardRequest) returns (HtmlDisplayBoardResult);

message HtmlDisplayBoardRequest {
  optional FileReference input_html_file = 1;
  optional bool show_board = 2;
}

message HtmlDisplayBoardResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Custom Table

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Custom Table](/mp-command-catalog/commands/reporting-operations#make-custom-table) |
| Service | `briosa.ReportingOperations` |
| RPC | `MakeCustomTable` |
| Operation ID | `reporting_operations.make_custom_table` |
| Route | `/briosa.ReportingOperations/MakeCustomTable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Request | 2 | `decimal_precision` | `int32` | `Decimal Precision` | 6 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakeCustomTable(MakeCustomTableRequest) returns (MakeCustomTableResult);

message MakeCustomTableRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 decimal_precision = 2;
}

message MakeCustomTableResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make New SA Report

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make New SA Report](/mp-command-catalog/commands/reporting-operations#make-new-sa-report) |
| Service | `briosa.ReportingOperations` |
| RPC | `MakeNewSaReport` |
| Operation ID | `reporting_operations.make_new_sa_report` |
| Route | `/briosa.ReportingOperations/MakeNewSaReport` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_sa_report_name` | `CollectionObjectName` | `New SA Report Name` | Required |
| Request | 2 | `sa_report_template_optional` | `CollectionObjectName` | `SA Report Template (optional)` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakeNewSaReport(MakeNewSaReportRequest) returns (MakeNewSaReportResult);

message MakeNewSaReportRequest {
  optional CollectionObjectName new_sa_report_name = 1;
  optional CollectionObjectName sa_report_template_optional = 2;
}

message MakeNewSaReportResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Utility Chart

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Utility Chart](/mp-command-catalog/commands/reporting-operations#make-utility-chart) |
| Service | `briosa.ReportingOperations` |
| RPC | `MakeUtilityChart` |
| Operation ID | `reporting_operations.make_utility_chart` |
| Route | `/briosa.ReportingOperations/MakeUtilityChart` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| Request | 2 | `chart_title_override` | `string` | `Chart Title Override` | Empty |
| Request | 3 | `output_picture_name` | `CollectionItemName` | `Output Picture Name` | Required |
| Request | 4 | `show_chart_dialog` | `bool` | `Show Chart Dialog?` | false |
| Request | 5 | `plot_additional_xy_value` | `bool` | `Plot Additional XY Value?` | false |
| Request | 6 | `x_value` | `double` | `X Value` | 0.000000 |
| Request | 7 | `y_value` | `double` | `Y Value` | 0.000000 |
| Result | 1 | `is_point_inside` | `bool` | `Is Point Inside?` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakeUtilityChart(MakeUtilityChartRequest) returns (MakeUtilityChartResult);

message MakeUtilityChartRequest {
  optional FileReference ascii_file_path = 1;
  optional string chart_title_override = 2;
  optional CollectionItemName output_picture_name = 3;
  optional bool show_chart_dialog = 4;
  optional bool plot_additional_xy_value = 5;
  optional double x_value = 6;
  optional double y_value = 7;
}

message MakeUtilityChartResult {
  optional bool is_point_inside = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Notify User Double

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Notify User Double](/mp-command-catalog/commands/reporting-operations#notify-user-double) |
| Service | `briosa.ReportingOperations` |
| RPC | `NotifyUserDouble` |
| Operation ID | `reporting_operations.notify_user_double` |
| Route | `/briosa.ReportingOperations/NotifyUserDouble` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `leading_text` | `string` | `Leading Text` | Empty |
| Request | 2 | `font` | `Font` | `Font` | MS Shell Dlg |
| Request | 3 | `reported_value` | `double` | `Reported Value` | 0.000000 |
| Request | 4 | `decimal_precision` | `int32` | `Decimal Precision` | 0 |
| Request | 5 | `display_timeout` | `int32` | `Display Timeout` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc NotifyUserDouble(NotifyUserDoubleRequest) returns (NotifyUserDoubleResult);

message NotifyUserDoubleRequest {
  optional string leading_text = 1;
  optional Font font = 2;
  optional double reported_value = 3;
  optional int32 decimal_precision = 4;
  optional int32 display_timeout = 5;
}

message NotifyUserDoubleResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Notify User HTML

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Notify User HTML](/mp-command-catalog/commands/reporting-operations#notify-user-html) |
| Service | `briosa.ReportingOperations` |
| RPC | `NotifyUserHtml` |
| Operation ID | `reporting_operations.notify_user_html` |
| Route | `/briosa.ReportingOperations/NotifyUserHtml` |
| Validation | Licensed validation completed |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `html_file` | `FileReference` | `HTML File` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc NotifyUserHtml(NotifyUserHtmlRequest) returns (NotifyUserHtmlResult);

message NotifyUserHtmlRequest {
  optional FileReference html_file = 1;
}

message NotifyUserHtmlResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Notify User Integer

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Notify User Integer](/mp-command-catalog/commands/reporting-operations#notify-user-integer) |
| Service | `briosa.ReportingOperations` |
| RPC | `NotifyUserInteger` |
| Operation ID | `reporting_operations.notify_user_integer` |
| Route | `/briosa.ReportingOperations/NotifyUserInteger` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `leading_text` | `string` | `Leading Text` | Empty |
| Request | 2 | `font` | `Font` | `Font` | MS Shell Dlg |
| Request | 3 | `reported_value` | `int32` | `Reported Value` | 0 |
| Request | 4 | `display_timeout` | `int32` | `Display Timeout` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc NotifyUserInteger(NotifyUserIntegerRequest) returns (NotifyUserIntegerResult);

message NotifyUserIntegerRequest {
  optional string leading_text = 1;
  optional Font font = 2;
  optional int32 reported_value = 3;
  optional int32 display_timeout = 4;
}

message NotifyUserIntegerResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Notify User Text Array

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Notify User Text Array](/mp-command-catalog/commands/reporting-operations#notify-user-text-array) |
| Service | `briosa.ReportingOperations` |
| RPC | `NotifyUserTextArray` |
| Operation ID | `reporting_operations.notify_user_text_array` |
| Route | `/briosa.ReportingOperations/NotifyUserTextArray` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `notification_text` | `repeated string` | `Notification Text` | Required |
| Request | 2 | `font` | `Font` | `Font` | MS Shell Dlg |
| Request | 3 | `auto_expand_to_fit_text` | `bool` | `Auto expand to fit text?` | false |
| Request | 4 | `display_timeout` | `int32` | `Display Timeout` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc NotifyUserTextArray(NotifyUserTextArrayRequest) returns (NotifyUserTextArrayResult);

message NotifyUserTextArrayRequest {
  repeated string notification_text = 1;
  optional Font font = 2;
  optional bool auto_expand_to_fit_text = 3;
  optional int32 display_timeout = 4;
}

message NotifyUserTextArrayResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Output SA Report to Excel

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Output SA Report to Excel](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-excel) |
| Service | `briosa.ReportingOperations` |
| RPC | `OutputSaReportToExcel` |
| Operation ID | `reporting_operations.output_sa_report_to_excel` |
| Route | `/briosa.ReportingOperations/OutputSaReportToExcel` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `CollectionObjectName` | `Report Name` | Required |
| Request | 2 | `file_name` | `FileReference` | `File Name` | Required |
| Request | 3 | `show_file` | `bool` | `Show File?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc OutputSaReportToExcel(OutputSaReportToExcelRequest) returns (OutputSaReportToExcelResult);

message OutputSaReportToExcelRequest {
  optional CollectionObjectName report_name = 1;
  optional FileReference file_name = 2;
  optional bool show_file = 3;
}

message OutputSaReportToExcelResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Output SA Report to PDF

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Output SA Report to PDF](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-pdf) |
| Service | `briosa.ReportingOperations` |
| RPC | `OutputSaReportToPdf` |
| Operation ID | `reporting_operations.output_sa_report_to_pdf` |
| Route | `/briosa.ReportingOperations/OutputSaReportToPdf` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `CollectionObjectName` | `Report Name` | Required |
| Request | 2 | `file_name` | `FileReference` | `File Name` | Required |
| Request | 3 | `show_pdf` | `bool` | `Show PDF?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc OutputSaReportToPdf(OutputSaReportToPdfRequest) returns (OutputSaReportToPdfResult);

message OutputSaReportToPdfRequest {
  optional CollectionObjectName report_name = 1;
  optional FileReference file_name = 2;
  optional bool show_pdf = 3;
}

message OutputSaReportToPdfResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Quick Report

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Quick Report](/mp-command-catalog/commands/reporting-operations#quick-report) |
| Service | `briosa.ReportingOperations` |
| RPC | `QuickReport` |
| Operation ID | `reporting_operations.quick_report` |
| Route | `/briosa.ReportingOperations/QuickReport` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `item_name` | `CollectionObjectName` | `Item Name` | Required |
| Request | 2 | `report_name_optional` | `string` | `Report Name (optional)` | Empty |
| Request | 3 | `open_report` | `bool` | `Open Report?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc QuickReport(QuickReportRequest) returns (QuickReportResult);

message QuickReportRequest {
  optional CollectionObjectName item_name = 1;
  optional string report_name_optional = 2;
  optional bool open_report = 3;
}

message QuickReportResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Refresh Callout Views in SA Report

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Refresh Callout Views in SA Report](/mp-command-catalog/commands/reporting-operations#refresh-callout-views-in-sa-report) |
| Service | `briosa.ReportingOperations` |
| RPC | `RefreshCalloutViewsInSaReport` |
| Operation ID | `reporting_operations.refresh_callout_views_in_sa_report` |
| Route | `/briosa.ReportingOperations/RefreshCalloutViewsInSaReport` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `CollectionItemName` | `Report Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc RefreshCalloutViewsInSaReport(RefreshCalloutViewsInSaReportRequest) returns (RefreshCalloutViewsInSaReportResult);

message RefreshCalloutViewsInSaReportRequest {
  optional CollectionItemName report_name = 1;
}

message RefreshCalloutViewsInSaReportResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Refresh Report Bar

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Refresh Report Bar](/mp-command-catalog/commands/reporting-operations#refresh-report-bar) |
| Service | `briosa.ReportingOperations` |
| RPC | `RefreshReportBar` |
| Operation ID | `reporting_operations.refresh_report_bar` |
| Route | `/briosa.ReportingOperations/RefreshReportBar` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc RefreshReportBar(RefreshReportBarRequest) returns (RefreshReportBarResult);

message RefreshReportBarRequest {
  // No MP inputs.
}

message RefreshReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Remove Report Tag

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Remove Report Tag](/mp-command-catalog/commands/reporting-operations#remove-report-tag) |
| Service | `briosa.ReportingOperations` |
| RPC | `RemoveReportTag` |
| Operation ID | `reporting_operations.remove_report_tag` |
| Route | `/briosa.ReportingOperations/RemoveReportTag` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tag_name` | `string` | `Tag Name` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc RemoveReportTag(RemoveReportTagRequest) returns (RemoveReportTagResult);

message RemoveReportTagRequest {
  optional string tag_name = 1;
}

message RemoveReportTagResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Rename Picture

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Rename Picture](/mp-command-catalog/commands/reporting-operations#rename-picture) |
| Service | `briosa.ReportingOperations` |
| RPC | `RenamePicture` |
| Operation ID | `reporting_operations.rename_picture` |
| Route | `/briosa.ReportingOperations/RenamePicture` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_picture_name` | `CollectionItemName` | `Original Picture Name` | Required |
| Request | 2 | `new_picture_name` | `CollectionItemName` | `New Picture Name` | Required |
| Request | 3 | `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc RenamePicture(RenamePictureRequest) returns (RenamePictureResult);

message RenamePictureRequest {
  optional CollectionItemName original_picture_name = 1;
  optional CollectionItemName new_picture_name = 2;
  optional bool overwrite_if_exists = 3;
}

message RenamePictureResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Save Chart to JPeg file

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Save Chart to JPeg file](/mp-command-catalog/commands/reporting-operations#save-chart-to-jpeg-file) |
| Service | `briosa.ReportingOperations` |
| RPC | `SaveChartToJPegFile` |
| Operation ID | `reporting_operations.save_chart_to_jpeg_file` |
| Route | `/briosa.ReportingOperations/SaveChartToJPegFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `chart_to_save` | `ChartName` | `Chart to Save` | Required |
| Request | 2 | `file_to_save_to` | `FileReference` | `File to save to` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SaveChartToJPegFile(SaveChartToJPegFileRequest) returns (SaveChartToJPegFileResult);

message SaveChartToJPegFileRequest {
  optional ChartName chart_to_save = 1;
  optional FileReference file_to_save_to = 2;
}

message SaveChartToJPegFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Save Current View (BMP/JPG/PNG/GIF/TIFF)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Save Current View (BMP/JPG/PNG/GIF/TIFF)](/mp-command-catalog/commands/reporting-operations#save-current-view-bmpjpgpnggiftiff) |
| Service | `briosa.ReportingOperations` |
| RPC | `SaveCurrentViewBmpJpgPngGifTiff` |
| Operation ID | `reporting_operations.save_current_view_bmp_jpg_png_gif_tiff` |
| Route | `/briosa.ReportingOperations/SaveCurrentViewBmpJpgPngGifTiff` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_to_save_to` | `FileReference` | `File to save to` | Required |
| Request | 2 | `render_scale_factor_1_0_uses_window_size` | `double` | `Render Scale Factor (1.0 uses window size)` | 1.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SaveCurrentViewBmpJpgPngGifTiff(SaveCurrentViewBmpJpgPngGifTiffRequest) returns (SaveCurrentViewBmpJpgPngGifTiffResult);

message SaveCurrentViewBmpJpgPngGifTiffRequest {
  optional FileReference file_to_save_to = 1;
  optional double render_scale_factor_1_0_uses_window_size = 2;
}

message SaveCurrentViewBmpJpgPngGifTiffResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Custom Table Cell Color

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Custom Table Cell Color](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-color) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetCustomTableCellColor` |
| Operation ID | `reporting_operations.set_custom_table_cell_color` |
| Route | `/briosa.ReportingOperations/SetCustomTableCellColor` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Request | 2 | `row` | `int32` | `Row` | 0 |
| Request | 3 | `column` | `int32` | `Column` | 0 |
| Request | 4 | `foreground_color_name` | `Color` | `Foreground Color Name` | RGB 255, 0, 0 |
| Request | 5 | `background_color_name` | `Color` | `Background Color Name` | RGB 255, 0, 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetCustomTableCellColor(SetCustomTableCellColorRequest) returns (SetCustomTableCellColorResult);

message SetCustomTableCellColorRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
  optional Color foreground_color_name = 4;
  optional Color background_color_name = 5;
}

message SetCustomTableCellColorResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Custom Table Cell Double

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Custom Table Cell Double](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-double) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetCustomTableCellDouble` |
| Operation ID | `reporting_operations.set_custom_table_cell_double` |
| Route | `/briosa.ReportingOperations/SetCustomTableCellDouble` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Request | 2 | `row` | `int32` | `Row` | 0 |
| Request | 3 | `column` | `int32` | `Column` | 0 |
| Request | 4 | `value` | `double` | `Value` | 0.000000 |
| Request | 5 | `span` | `int32` | `Span` | 1 |
| Request | 6 | `decimal_precision` | `int32` | `Decimal Precision` | -1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetCustomTableCellDouble(SetCustomTableCellDoubleRequest) returns (SetCustomTableCellDoubleResult);

message SetCustomTableCellDoubleRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
  optional double value = 4;
  optional int32 span = 5;
  optional int32 decimal_precision = 6;
}

message SetCustomTableCellDoubleResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Custom Table Cell Font

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Custom Table Cell Font](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-font) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetCustomTableCellFont` |
| Operation ID | `reporting_operations.set_custom_table_cell_font` |
| Route | `/briosa.ReportingOperations/SetCustomTableCellFont` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Request | 2 | `row` | `int32` | `Row` | 0 |
| Request | 3 | `column` | `int32` | `Column` | 0 |
| Request | 4 | `font` | `Font` | `Font` | MS Shell Dlg |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetCustomTableCellFont(SetCustomTableCellFontRequest) returns (SetCustomTableCellFontResult);

message SetCustomTableCellFontRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
  optional Font font = 4;
}

message SetCustomTableCellFontResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Custom Table Cell String

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Custom Table Cell String](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-string) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetCustomTableCellString` |
| Operation ID | `reporting_operations.set_custom_table_cell_string` |
| Route | `/briosa.ReportingOperations/SetCustomTableCellString` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Request | 2 | `row` | `int32` | `Row` | 0 |
| Request | 3 | `column` | `int32` | `Column` | 0 |
| Request | 4 | `value` | `string` | `Value` | Empty |
| Request | 5 | `span` | `int32` | `Span` | 1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetCustomTableCellString(SetCustomTableCellStringRequest) returns (SetCustomTableCellStringResult);

message SetCustomTableCellStringRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
  optional string value = 4;
  optional int32 span = 5;
}

message SetCustomTableCellStringResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Custom Table Header Cell

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Custom Table Header Cell](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-cell) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetCustomTableHeaderCell` |
| Operation ID | `reporting_operations.set_custom_table_header_cell` |
| Route | `/briosa.ReportingOperations/SetCustomTableHeaderCell` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Request | 2 | `row` | `int32` | `Row` | 0 |
| Request | 3 | `column` | `int32` | `Column` | 0 |
| Request | 4 | `header_text` | `string` | `Header Text` | Empty |
| Request | 5 | `span` | `int32` | `Span` | 1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetCustomTableHeaderCell(SetCustomTableHeaderCellRequest) returns (SetCustomTableHeaderCellResult);

message SetCustomTableHeaderCellRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
  optional string header_text = 4;
  optional int32 span = 5;
}

message SetCustomTableHeaderCellResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Custom Table Header Row

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Custom Table Header Row](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-row) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetCustomTableHeaderRow` |
| Operation ID | `reporting_operations.set_custom_table_header_row` |
| Route | `/briosa.ReportingOperations/SetCustomTableHeaderRow` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Request | 2 | `row` | `int32` | `Row` | 0 |
| Request | 3 | `value` | `string` | `Value` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetCustomTableHeaderRow(SetCustomTableHeaderRowRequest) returns (SetCustomTableHeaderRowResult);

message SetCustomTableHeaderRowRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional string value = 3;
}

message SetCustomTableHeaderRowResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Custom Table Title

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Custom Table Title](/mp-command-catalog/commands/reporting-operations#set-custom-table-title) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetCustomTableTitle` |
| Operation ID | `reporting_operations.set_custom_table_title` |
| Route | `/briosa.ReportingOperations/SetCustomTableTitle` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `CollectionObjectName` | `Table Name` | Required |
| Request | 2 | `title_line_1` | `string` | `Title Line 1` | Empty |
| Request | 3 | `title_line_2` | `string` | `Title Line 2` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetCustomTableTitle(SetCustomTableTitleRequest) returns (SetCustomTableTitleResult);

message SetCustomTableTitleRequest {
  optional CollectionObjectName table_name = 1;
  optional string title_line_1 = 2;
  optional string title_line_2 = 3;
}

message SetCustomTableTitleResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Point Group Report Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Point Group Report Options](/mp-command-catalog/commands/reporting-operations#set-point-group-report-options) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetPointGroupReportOptions` |
| Operation ID | `reporting_operations.set_point_group_report_options` |
| Route | `/briosa.ReportingOperations/SetPointGroupReportOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_group` | `CollectionObjectName` | `Point Group` | Required |
| Request | 2 | `coordinate_system` | `CoordinateSystemType` | `Coordinate System` | Cartesian |
| Request | 3 | `show_x_component` | `bool` | `Show X Component` | true |
| Request | 4 | `show_y_component` | `bool` | `Show Y Component` | true |
| Request | 5 | `show_z_component` | `bool` | `Show Z Component` | true |
| Request | 6 | `show_offsets` | `bool` | `Show Offsets` | false |
| Request | 7 | `show_uncertainty` | `bool` | `Show Uncertainty` | true |
| Request | 8 | `show_notes` | `bool` | `Show Notes` | false |
| Request | 9 | `show_measurements` | `bool` | `Show Measurements` | false |
| Request | 10 | `show_measurement_details` | `bool` | `Show Measurement Details` | false |
| Request | 11 | `show_pointing_error_worst_angle` | `bool` | `Show PointingError/Worst Angle` | false |
| Request | 12 | `sort_by_point_names` | `bool` | `Sort by Point Names` | true |
| Request | 13 | `make_default` | `bool` | `Make Default` | false |
| Request | 14 | `apply_to_all` | `bool` | `Apply to All` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetPointGroupReportOptions(SetPointGroupReportOptionsRequest) returns (SetPointGroupReportOptionsResult);

message SetPointGroupReportOptionsRequest {
  optional CollectionObjectName point_group = 1;
  optional CoordinateSystemType coordinate_system = 2;
  optional bool show_x_component = 3;
  optional bool show_y_component = 4;
  optional bool show_z_component = 5;
  optional bool show_offsets = 6;
  optional bool show_uncertainty = 7;
  optional bool show_notes = 8;
  optional bool show_measurements = 9;
  optional bool show_measurement_details = 10;
  optional bool show_pointing_error_worst_angle = 11;
  optional bool sort_by_point_names = 12;
  optional bool make_default = 13;
  optional bool apply_to_all = 14;
}

message SetPointGroupReportOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Report Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Report Options](/mp-command-catalog/commands/reporting-operations#set-relationship-report-options) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetRelationshipReportOptions` |
| Operation ID | `reporting_operations.set_relationship_report_options` |
| Route | `/briosa.ReportingOperations/SetRelationshipReportOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `report_options` | `PointDeltaReportOptions` | `Report Options` | Single |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipReportOptions(SetRelationshipReportOptionsRequest) returns (SetRelationshipReportOptionsResult);

message SetRelationshipReportOptionsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional PointDeltaReportOptions report_options = 2;
}

message SetRelationshipReportOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Report Bar Visibility

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Report Bar Visibility](/mp-command-catalog/commands/reporting-operations#set-report-bar-visibility) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetReportBarVisibility` |
| Operation ID | `reporting_operations.set_report_bar_visibility` |
| Route | `/briosa.ReportingOperations/SetReportBarVisibility` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `show_report_bar` | `bool` | `Show Report Bar?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetReportBarVisibility(SetReportBarVisibilityRequest) returns (SetReportBarVisibilityResult);

message SetReportBarVisibilityRequest {
  optional bool show_report_bar = 1;
}

message SetReportBarVisibilityResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Report Options for Object

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Report Options for Object](/mp-command-catalog/commands/reporting-operations#set-report-options-for-object) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetReportOptionsForObject` |
| Operation ID | `reporting_operations.set_report_options_for_object` |
| Route | `/briosa.ReportingOperations/SetReportOptionsForObject` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object` | `CollectionObjectName` | `Object` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetReportOptionsForObject(SetReportOptionsForObjectRequest) returns (SetReportOptionsForObjectResult);

message SetReportOptionsForObjectRequest {
  optional CollectionObjectName object = 1;
}

message SetReportOptionsForObjectResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Report Tag Value From Double

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Report Tag Value From Double](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-double) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetReportTagValueFromDouble` |
| Operation ID | `reporting_operations.set_report_tag_value_from_double` |
| Route | `/briosa.ReportingOperations/SetReportTagValueFromDouble` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tag_name` | `string` | `Tag Name` | Empty |
| Request | 2 | `tag_value` | `double` | `Tag Value` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetReportTagValueFromDouble(SetReportTagValueFromDoubleRequest) returns (SetReportTagValueFromDoubleResult);

message SetReportTagValueFromDoubleRequest {
  optional string tag_name = 1;
  optional double tag_value = 2;
}

message SetReportTagValueFromDoubleResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Report Tag Value From Integer

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Report Tag Value From Integer](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-integer) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetReportTagValueFromInteger` |
| Operation ID | `reporting_operations.set_report_tag_value_from_integer` |
| Route | `/briosa.ReportingOperations/SetReportTagValueFromInteger` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tag_name` | `string` | `Tag Name` | Empty |
| Request | 2 | `tag_value` | `int32` | `Tag Value` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetReportTagValueFromInteger(SetReportTagValueFromIntegerRequest) returns (SetReportTagValueFromIntegerResult);

message SetReportTagValueFromIntegerRequest {
  optional string tag_name = 1;
  optional int32 tag_value = 2;
}

message SetReportTagValueFromIntegerResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Report Tag Value From String

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Report Tag Value From String](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-string) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetReportTagValueFromString` |
| Operation ID | `reporting_operations.set_report_tag_value_from_string` |
| Route | `/briosa.ReportingOperations/SetReportTagValueFromString` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tag_name` | `string` | `Tag Name` | Empty |
| Request | 2 | `tag_value` | `string` | `Tag Value` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetReportTagValueFromString(SetReportTagValueFromStringRequest) returns (SetReportTagValueFromStringResult);

message SetReportTagValueFromStringRequest {
  optional string tag_name = 1;
  optional string tag_value = 2;
}

message SetReportTagValueFromStringResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Scale for Picture

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Scale for Picture](/mp-command-catalog/commands/reporting-operations#set-scale-for-picture) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetScaleForPicture` |
| Operation ID | `reporting_operations.set_scale_for_picture` |
| Route | `/briosa.ReportingOperations/SetScaleForPicture` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `picture_name` | `CollectionItemName` | `Picture Name` | Required |
| Request | 2 | `scale` | `double` | `Scale` | 100.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetScaleForPicture(SetScaleForPictureRequest) returns (SetScaleForPictureResult);

message SetScaleForPictureRequest {
  optional CollectionItemName picture_name = 1;
  optional double scale = 2;
}

message SetScaleForPictureResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Vector Group Report Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Vector Group Report Options](/mp-command-catalog/commands/reporting-operations#set-vector-group-report-options) |
| Service | `briosa.ReportingOperations` |
| RPC | `SetVectorGroupReportOptions` |
| Operation ID | `reporting_operations.set_vector_group_report_options` |
| Route | `/briosa.ReportingOperations/SetVectorGroupReportOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group` | `CollectionObjectName` | `Vector Group` | Required |
| Request | 2 | `report_options` | `PointDeltaReportOptions` | `Report Options` | Single |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetVectorGroupReportOptions(SetVectorGroupReportOptionsRequest) returns (SetVectorGroupReportOptionsResult);

message SetVectorGroupReportOptionsRequest {
  optional CollectionObjectName vector_group = 1;
  optional PointDeltaReportOptions report_options = 2;
}

message SetVectorGroupReportOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
