---
title: Reporting Operations
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Reporting Operations

[SA 2026.1.0529.7](/api/dotnet/reporting-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/reporting-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Charts to Report Bar {/* #add-charts-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-charts-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-charts-to-report-bar)

```csharp
public Task AddChartsToReportBarAsync(
        IEnumerable<CollectionItemName> charts,
        bool clearExisting = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Custom Table to SA Report {/* #add-custom-table-to-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-custom-table-to-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#add-custom-table-to-sa-report)

```csharp
public Task AddCustomTableToSaReportAsync(
        CollectionObjectName tableName,
        CollectionObjectName reportName,
        bool showReport = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Custom Tables to Report Bar {/* #add-custom-tables-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-custom-tables-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-custom-tables-to-report-bar)

```csharp
public Task AddCustomTablesToReportBarAsync(
        IEnumerable<CollectionItemName> customTablesToReport,
        bool clearExisting = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Datums to Report Bar {/* #add-datums-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-datums-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-datums-to-report-bar)

```csharp
public Task AddDatumsToReportBarAsync(
        IEnumerable<CollectionObjectName> datums,
        bool clearExisting = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Events to Report Bar {/* #add-events-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-events-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-events-to-report-bar)

```csharp
public Task AddEventsToReportBarAsync(
        IEnumerable<CollectionItemName> events,
        bool clearExisting = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Feature Checks to Report Bar {/* #add-feature-checks-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-feature-checks-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-feature-checks-to-report-bar)

```csharp
public Task AddFeatureChecksToReportBarAsync(
        IEnumerable<CollectionItemName> featureChecks,
        bool clearExisting = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Item to SA Report at Location {/* #add-item-to-sa-report-at-location */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-item-to-sa-report-at-location) · [gRPC Contract](/api/grpc/reporting-operations#add-item-to-sa-report-at-location)

```csharp
public Task AddItemToSaReportAtLocationAsync(
        CollectionObjectName reportName,
        CollectionObjectName itemName,
        int pageNumber = 0,
        double horizontalLocation = 1.000000,
        double verticalLocation = 1.000000,
        bool showReport = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Objects to Report Bar {/* #add-objects-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-objects-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-objects-to-report-bar)

```csharp
public Task AddObjectsToReportBarAsync(
        IEnumerable<CollectionObjectName> objects,
        bool clearExisting = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Pictures to Report Bar {/* #add-pictures-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-pictures-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-pictures-to-report-bar)

```csharp
public Task AddPicturesToReportBarAsync(
        IEnumerable<CollectionItemName> pictures,
        bool clearExisting = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Relationships to Report Bar {/* #add-relationships-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-relationships-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-relationships-to-report-bar)

```csharp
public Task AddRelationshipsToReportBarAsync(
        IEnumerable<CollectionItemName> relationships,
        bool clearExisting = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Append Items to SA Report {/* #append-items-to-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#append-items-to-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#append-items-to-sa-report)

```csharp
public Task AppendItemsToSaReportAsync(
        CollectionObjectName reportName,
        IEnumerable<CollectionObjectName> itemsToReport,
        bool showReport = false,
        bool beginOnNewPage = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Capture Current View {/* #capture-current-view */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#capture-current-view) · [gRPC Contract](/api/grpc/reporting-operations#capture-current-view)

```csharp
public Task CaptureCurrentViewAsync(
        CollectionItemName pictureName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Capture Screen to File (BMP/JPG/PNG/GIF/TIFF) {/* #capture-screen-to-file-bmpjpgpnggiftiff */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff) · [gRPC Contract](/api/grpc/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff)

```csharp
public Task CaptureScreenToFileBmpJpgPngGifTiffAsync(
        FileReference fileToSaveTo,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Custom Table {/* #clear-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#clear-custom-table) · [gRPC Contract](/api/grpc/reporting-operations#clear-custom-table)

```csharp
public Task ClearCustomTableAsync(
        CollectionObjectName tableName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Close All Reports {/* #close-all-reports */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#close-all-reports) · [gRPC Contract](/api/grpc/reporting-operations#close-all-reports)

```csharp
public Task CloseAllReportsAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Close HTML Display Board {/* #close-html-display-board */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#close-html-display-board) · [gRPC Contract](/api/grpc/reporting-operations#close-html-display-board)

```csharp
public Task CloseHtmlDisplayBoardAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Combine SA Reports {/* #combine-sa-reports */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#combine-sa-reports) · [gRPC Contract](/api/grpc/reporting-operations#combine-sa-reports)

```csharp
public Task CombineSaReportsAsync(
        IEnumerable<CollectionItemName> saReportsToCombine,
        CollectionObjectName outputSaReportName,
        bool showReport = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Chart from Vector Group {/* #create-chart-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#create-chart-from-vector-group) · [gRPC Contract](/api/grpc/reporting-operations#create-chart-from-vector-group)

```csharp
public Task CreateChartFromVectorGroupAsync(
        ChartName newChartName,
        CollectionObjectName vectorGroupName,
        ChartType chartType,
        DatasetType dataSetToChart,
        DatasetType auxDataSetToChart,
        ChartName templateChartName,
        bool showInterface = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `templateChartName` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Define Report Template {/* #define-report-template */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#define-report-template) · [gRPC Contract](/api/grpc/reporting-operations#define-report-template)

```csharp
public Task DefineReportTemplateAsync(
        CollectionObjectName reportTemplateName,
        IEnumerable<string> title,
        ReportViewOptions graphicalViewOptions,
        IEnumerable<CollectionObjectName> itemsToReport,
        IEnumerable<CollectionItemName> relationshipsToReport,
        IEnumerable<CollectionItemName> eventsToReport,
        ReportOutputOptions reportOutputOptions,
        ReportPageSettings reportPageSettings,
        bool generateNow = false,
        bool showGeneratedReport = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `reportPageSettings` | MP qualifier: SA Report only. |

## Delete Chart {/* #delete-chart */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-chart) · [gRPC Contract](/api/grpc/reporting-operations#delete-chart)

```csharp
public Task DeleteChartAsync(
        CollectionObjectName chartName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Custom Table {/* #delete-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-custom-table) · [gRPC Contract](/api/grpc/reporting-operations#delete-custom-table)

```csharp
public Task DeleteCustomTableAsync(
        CollectionObjectName tableName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Picture {/* #delete-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-picture) · [gRPC Contract](/api/grpc/reporting-operations#delete-picture)

```csharp
public Task DeletePictureAsync(
        CollectionItemName pictureName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Doc {/* #delete-sa-doc */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-doc) · [gRPC Contract](/api/grpc/reporting-operations#delete-sa-doc)

```csharp
public Task DeleteSaDocAsync(
        CollectionObjectName docName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Report {/* #delete-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#delete-sa-report)

```csharp
public Task DeleteSaReportAsync(
        CollectionObjectName reportName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Report Template {/* #delete-sa-report-template */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-report-template) · [gRPC Contract](/api/grpc/reporting-operations#delete-sa-report-template)

```csharp
public Task DeleteSaReportTemplateAsync(
        CollectionObjectName reportTemplateName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Quick Report from Tab Order {/* #generate-quick-report-from-tab-order */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generate-quick-report-from-tab-order) · [gRPC Contract](/api/grpc/reporting-operations#generate-quick-report-from-tab-order)

```csharp
public Task GenerateQuickReportFromTabOrderAsync(
        ReportOutputOptions reportOutputOptions,
        bool openReport = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Standard HTML Report {/* #generate-standard-html-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generate-standard-html-report) · [gRPC Contract](/api/grpc/reporting-operations#generate-standard-html-report)

```csharp
public Task GenerateStandardHtmlReportAsync(
        FileReference htmlOutputFile,
        int decimalPrecision = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate/Update Templated Report {/* #generateupdate-templated-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generateupdate-templated-report) · [gRPC Contract](/api/grpc/reporting-operations#generateupdate-templated-report)

```csharp
public Task GenerateUpdateTemplatedReportAsync(
        CollectionObjectName reportTemplate,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Custom Table Cell Double {/* #get-custom-table-cell-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-double) · [gRPC Contract](/api/grpc/reporting-operations#get-custom-table-cell-double)

```csharp
public Task<double> GetCustomTableCellDoubleAsync(
        CollectionObjectName tableName,
        int row = 0,
        int column = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Custom Table Cell String {/* #get-custom-table-cell-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-string) · [gRPC Contract](/api/grpc/reporting-operations#get-custom-table-cell-string)

```csharp
public Task<string> GetCustomTableCellStringAsync(
        CollectionObjectName tableName,
        int row = 0,
        int column = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Defined Report Tags {/* #get-defined-report-tags */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-defined-report-tags) · [gRPC Contract](/api/grpc/reporting-operations#get-defined-report-tags)

```csharp
public Task<string[]> GetDefinedReportTagsAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Report Tag Value {/* #get-report-tag-value */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-report-tag-value) · [gRPC Contract](/api/grpc/reporting-operations#get-report-tag-value)

```csharp
public Task<GetReportTagValueResult> GetReportTagValueAsync(
        string tagName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## HTML Display Board {/* #html-display-board */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#html-display-board) · [gRPC Contract](/api/grpc/reporting-operations#html-display-board)

```csharp
public Task HtmlDisplayBoardAsync(
        FileReference inputHtmlFile,
        bool showBoard = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Custom Table {/* #make-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-custom-table) · [gRPC Contract](/api/grpc/reporting-operations#make-custom-table)

```csharp
public Task MakeCustomTableAsync(
        CollectionObjectName tableName,
        int decimalPrecision = 6,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make New SA Report {/* #make-new-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-new-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#make-new-sa-report)

```csharp
public Task MakeNewSaReportAsync(
        CollectionObjectName newSaReportName,
        CollectionObjectName saReportTemplate,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `saReportTemplate` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Make Utility Chart {/* #make-utility-chart */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-utility-chart) · [gRPC Contract](/api/grpc/reporting-operations#make-utility-chart)

```csharp
public Task<bool> MakeUtilityChartAsync(
        FileReference asciiFilePath,
        string chartTitleOverride,
        CollectionItemName outputPictureName,
        bool showChartDialog = false,
        bool plotAdditionalXyValue = false,
        double xValue = 0.000000,
        double yValue = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Double {/* #notify-user-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-double) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-double)

```csharp
public Task NotifyUserDoubleAsync(
        string leadingText,
        Font font,
        double reportedValue = 0.000000,
        int decimalPrecision = 0,
        int displayTimeout = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User HTML {/* #notify-user-html */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-html) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-html)

```csharp
public Task NotifyUserHtmlAsync(
        FileReference htmlFile,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Integer {/* #notify-user-integer */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-integer) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-integer)

```csharp
public Task NotifyUserIntegerAsync(
        string leadingText,
        Font font,
        int reportedValue = 0,
        int displayTimeout = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Text Array {/* #notify-user-text-array */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-text-array) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-text-array)

```csharp
public Task NotifyUserTextArrayAsync(
        IEnumerable<string> notificationText,
        Font font,
        bool autoExpandToFitText = false,
        int displayTimeout = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Output SA Report to Excel {/* #output-sa-report-to-excel */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-excel) · [gRPC Contract](/api/grpc/reporting-operations#output-sa-report-to-excel)

```csharp
public Task OutputSaReportToExcelAsync(
        CollectionObjectName reportName,
        FileReference fileName,
        bool showFile = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Output SA Report to PDF {/* #output-sa-report-to-pdf */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-pdf) · [gRPC Contract](/api/grpc/reporting-operations#output-sa-report-to-pdf)

```csharp
public Task OutputSaReportToPdfAsync(
        CollectionObjectName reportName,
        FileReference fileName,
        bool showPdf = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Quick Report {/* #quick-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#quick-report) · [gRPC Contract](/api/grpc/reporting-operations#quick-report)

```csharp
public Task QuickReportAsync(
        CollectionObjectName itemName,
        string reportName = "",
        bool openReport = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `reportName` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Refresh Callout Views in SA Report {/* #refresh-callout-views-in-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#refresh-callout-views-in-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#refresh-callout-views-in-sa-report)

```csharp
public Task RefreshCalloutViewsInSaReportAsync(
        CollectionItemName reportName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Refresh Report Bar {/* #refresh-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#refresh-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#refresh-report-bar)

```csharp
public Task RefreshReportBarAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Remove Report Tag {/* #remove-report-tag */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#remove-report-tag) · [gRPC Contract](/api/grpc/reporting-operations#remove-report-tag)

```csharp
public Task RemoveReportTagAsync(
        string tagName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Picture {/* #rename-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#rename-picture) · [gRPC Contract](/api/grpc/reporting-operations#rename-picture)

```csharp
public Task RenamePictureAsync(
        CollectionItemName originalPictureName,
        CollectionItemName newPictureName,
        bool overwriteIfExists = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Chart to JPeg file {/* #save-chart-to-jpeg-file */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#save-chart-to-jpeg-file) · [gRPC Contract](/api/grpc/reporting-operations#save-chart-to-jpeg-file)

```csharp
public Task SaveChartToJPegFileAsync(
        ChartName chartToSave,
        FileReference fileToSaveTo,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Current View (BMP/JPG/PNG/GIF/TIFF) {/* #save-current-view-bmpjpgpnggiftiff */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#save-current-view-bmpjpgpnggiftiff) · [gRPC Contract](/api/grpc/reporting-operations#save-current-view-bmpjpgpnggiftiff)

```csharp
public Task SaveCurrentViewBmpJpgPngGifTiffAsync(
        FileReference fileToSaveTo,
        double renderScaleFactor = 1.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `renderScaleFactor` | 1.0 uses the window size. |

## Set Custom Table Cell Color {/* #set-custom-table-cell-color */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-color) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-color)

```csharp
public Task SetCustomTableCellColorAsync(
        CollectionObjectName tableName,
        int row,
        int column,
        Color foregroundColorName,
        Color backgroundColorName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell Double {/* #set-custom-table-cell-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-double) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-double)

```csharp
public Task SetCustomTableCellDoubleAsync(
        CollectionObjectName tableName,
        int row = 0,
        int column = 0,
        double value = 0.000000,
        int span = 1,
        int decimalPrecision = -1,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell Font {/* #set-custom-table-cell-font */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-font) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-font)

```csharp
public Task SetCustomTableCellFontAsync(
        CollectionObjectName tableName,
        int row,
        int column,
        Font font,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell String {/* #set-custom-table-cell-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-string) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-string)

```csharp
public Task SetCustomTableCellStringAsync(
        CollectionObjectName tableName,
        int row = 0,
        int column = 0,
        string value = "",
        int span = 1,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Header Cell {/* #set-custom-table-header-cell */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-cell) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-header-cell)

```csharp
public Task SetCustomTableHeaderCellAsync(
        CollectionObjectName tableName,
        int row = 0,
        int column = 0,
        string headerText = "",
        int span = 1,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Header Row {/* #set-custom-table-header-row */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-row) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-header-row)

```csharp
public Task SetCustomTableHeaderRowAsync(
        CollectionObjectName tableName,
        int row = 0,
        string value = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Title {/* #set-custom-table-title */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-title) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-title)

```csharp
public Task SetCustomTableTitleAsync(
        CollectionObjectName tableName,
        string titleLine1 = "",
        string titleLine2 = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Group Report Options {/* #set-point-group-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-point-group-report-options) · [gRPC Contract](/api/grpc/reporting-operations#set-point-group-report-options)

```csharp
public Task SetPointGroupReportOptionsAsync(
        CollectionObjectName pointGroup,
        CoordinateSystemType coordinateSystem,
        bool showXComponent = true,
        bool showYComponent = true,
        bool showZComponent = true,
        bool showOffsets = false,
        bool showUncertainty = true,
        bool showNotes = false,
        bool showMeasurements = false,
        bool showMeasurementDetails = false,
        bool showPointingErrorWorstAngle = false,
        bool sortByPointNames = true,
        bool makeDefault = false,
        bool applyToAll = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Report Options {/* #set-relationship-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-relationship-report-options) · [gRPC Contract](/api/grpc/reporting-operations#set-relationship-report-options)

```csharp
public Task SetRelationshipReportOptionsAsync(
        CollectionObjectName relationshipName,
        PointDeltaReportOptions reportOptions,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Bar Visibility {/* #set-report-bar-visibility */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-bar-visibility) · [gRPC Contract](/api/grpc/reporting-operations#set-report-bar-visibility)

```csharp
public Task SetReportBarVisibilityAsync(
        bool showReportBar = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Options for Object {/* #set-report-options-for-object */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-options-for-object) · [gRPC Contract](/api/grpc/reporting-operations#set-report-options-for-object)

```csharp
public Task SetReportOptionsForObjectAsync(
        CollectionObjectName @object,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From Double {/* #set-report-tag-value-from-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-double) · [gRPC Contract](/api/grpc/reporting-operations#set-report-tag-value-from-double)

```csharp
public Task SetReportTagValueFromDoubleAsync(
        string tagName = "",
        double tagValue = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From Integer {/* #set-report-tag-value-from-integer */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-integer) · [gRPC Contract](/api/grpc/reporting-operations#set-report-tag-value-from-integer)

```csharp
public Task SetReportTagValueFromIntegerAsync(
        string tagName = "",
        int tagValue = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From String {/* #set-report-tag-value-from-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-string) · [gRPC Contract](/api/grpc/reporting-operations#set-report-tag-value-from-string)

```csharp
public Task SetReportTagValueFromStringAsync(
        string tagName = "",
        string tagValue = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Scale for Picture {/* #set-scale-for-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-scale-for-picture) · [gRPC Contract](/api/grpc/reporting-operations#set-scale-for-picture)

```csharp
public Task SetScaleForPictureAsync(
        CollectionItemName pictureName,
        double scale = 100.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Report Options {/* #set-vector-group-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-vector-group-report-options) · [gRPC Contract](/api/grpc/reporting-operations#set-vector-group-report-options)

```csharp
public Task SetVectorGroupReportOptionsAsync(
        CollectionObjectName vectorGroup,
        PointDeltaReportOptions reportOptions,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2026.1.0529.7)
