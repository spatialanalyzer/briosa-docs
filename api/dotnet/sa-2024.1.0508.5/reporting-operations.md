---
title: Reporting Operations
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Reporting Operations

[SA 2026.1.0529.7](/api/dotnet/reporting-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/reporting-operations)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Add Charts to Report Bar {/* #add-charts-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-charts-to-report-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#add-charts-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AddChartsToReportBarAsync(
        IEnumerable<CollectionItemName> charts,
        bool clearExisting = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Custom Table to SA Report {/* #add-custom-table-to-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-custom-table-to-sa-report) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#add-custom-table-to-sa-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task AddCustomTableToSaReportAsync(
        CollectionObjectName tableName,
        CollectionObjectName reportName,
        bool showReport = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Custom Tables to Report Bar {/* #add-custom-tables-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-custom-tables-to-report-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#add-custom-tables-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AddCustomTablesToReportBarAsync(
        IEnumerable<CollectionItemName> customTablesToReport,
        bool clearExisting = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Datums to Report Bar {/* #add-datums-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-datums-to-report-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#add-datums-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AddDatumsToReportBarAsync(
        IEnumerable<CollectionObjectName> datums,
        bool clearExisting = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Events to Report Bar {/* #add-events-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-events-to-report-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#add-events-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AddEventsToReportBarAsync(
        IEnumerable<CollectionItemName> events,
        bool clearExisting = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Feature Checks to Report Bar {/* #add-feature-checks-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-feature-checks-to-report-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#add-feature-checks-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AddFeatureChecksToReportBarAsync(
        IEnumerable<CollectionItemName> featureChecks,
        bool clearExisting = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Item to SA Report at Location {/* #add-item-to-sa-report-at-location */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-item-to-sa-report-at-location) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#add-item-to-sa-report-at-location)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task AddItemToSaReportAtLocationAsync(
        CollectionObjectName reportName,
        CollectionObjectName itemName,
        int pageNumber = 0,
        double horizontalLocation = 1.000000,
        double verticalLocation = 1.000000,
        bool showReport = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Objects to Report Bar {/* #add-objects-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-objects-to-report-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#add-objects-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AddObjectsToReportBarAsync(
        IEnumerable<CollectionObjectName> objects,
        bool clearExisting = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Pictures to Report Bar {/* #add-pictures-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-pictures-to-report-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#add-pictures-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AddPicturesToReportBarAsync(
        IEnumerable<CollectionItemName> pictures,
        bool clearExisting = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Relationships to Report Bar {/* #add-relationships-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-relationships-to-report-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#add-relationships-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AddRelationshipsToReportBarAsync(
        IEnumerable<CollectionItemName> relationships,
        bool clearExisting = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Append Items to SA Report {/* #append-items-to-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#append-items-to-sa-report) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#append-items-to-sa-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task AppendItemsToSaReportAsync(
        CollectionObjectName reportName,
        IEnumerable<CollectionObjectName> itemsToReport,
        bool showReport = false,
        bool beginOnNewPage = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Capture Current View {/* #capture-current-view */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#capture-current-view) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#capture-current-view)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task CaptureCurrentViewAsync(
        CollectionItemName pictureName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Capture Screen to File (BMP/JPG/PNG/GIF/TIFF) {/* #capture-screen-to-file-bmpjpgpnggiftiff */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task CaptureScreenToFileBmpJpgPngGifTiffAsync(
        FileReference fileToSaveTo,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Custom Table {/* #clear-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#clear-custom-table) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#clear-custom-table)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task ClearCustomTableAsync(
        CollectionObjectName tableName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Close All Reports {/* #close-all-reports */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#close-all-reports) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#close-all-reports)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task CloseAllReportsAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Close HTML Display Board {/* #close-html-display-board */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#close-html-display-board) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#close-html-display-board)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task CloseHtmlDisplayBoardAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Combine SA Reports {/* #combine-sa-reports */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#combine-sa-reports) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#combine-sa-reports)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task CombineSaReportsAsync(
        IEnumerable<CollectionItemName> saReportsToCombine,
        CollectionObjectName outputSaReportName,
        bool showReport = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Chart from Vector Group {/* #create-chart-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#create-chart-from-vector-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#create-chart-from-vector-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showInterface` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task CreateChartFromVectorGroupAsync(
        ChartName newChartName,
        CollectionObjectName vectorGroupName,
        ChartType chartType,
        DatasetType dataSetToChart,
        DatasetType auxDataSetToChart,
        ChartName? templateChartName = null,
        bool showInterface = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `templateChartName` | Optional (major 3): omitted when absent; an empty name is rejected. On SA 2026.1.0529.7 a name that matched no chart opened a blocking SpatialAnalyzer dialog; that case is unverified on this target. |

## Define Report Template {/* #define-report-template */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#define-report-template) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#define-report-template)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showGeneratedReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

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
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `reportPageSettings` | MP qualifier: SA Report only. |

## Delete Chart {/* #delete-chart */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-chart) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#delete-chart)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteChartAsync(
        CollectionObjectName chartName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Custom Table {/* #delete-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-custom-table) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#delete-custom-table)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteCustomTableAsync(
        CollectionObjectName tableName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Picture {/* #delete-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-picture) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#delete-picture)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeletePictureAsync(
        CollectionItemName pictureName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Doc {/* #delete-sa-doc */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-doc) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#delete-sa-doc)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteSaDocAsync(
        CollectionObjectName docName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Report {/* #delete-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-report) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#delete-sa-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteSaReportAsync(
        CollectionObjectName reportName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Report Template {/* #delete-sa-report-template */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-report-template) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#delete-sa-report-template)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteSaReportTemplateAsync(
        CollectionObjectName reportTemplateName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Quick Report from Tab Order {/* #generate-quick-report-from-tab-order */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generate-quick-report-from-tab-order) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#generate-quick-report-from-tab-order)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `openReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task GenerateQuickReportFromTabOrderAsync(
        ReportOutputOptions reportOutputOptions,
        bool openReport = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Standard HTML Report {/* #generate-standard-html-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generate-standard-html-report) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#generate-standard-html-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task GenerateStandardHtmlReportAsync(
        FileReference htmlOutputFile,
        int decimalPrecision = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate/Update Templated Report {/* #generateupdate-templated-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generateupdate-templated-report) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#generateupdate-templated-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task GenerateUpdateTemplatedReportAsync(
        CollectionObjectName reportTemplate,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Custom Table Cell Double {/* #get-custom-table-cell-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#get-custom-table-cell-double)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<double> GetCustomTableCellDoubleAsync(
        CollectionObjectName tableName,
        int row = 0,
        int column = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Custom Table Cell String {/* #get-custom-table-cell-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#get-custom-table-cell-string)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string> GetCustomTableCellStringAsync(
        CollectionObjectName tableName,
        int row = 0,
        int column = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Defined Report Tags {/* #get-defined-report-tags */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-defined-report-tags) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#get-defined-report-tags)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string[]> GetDefinedReportTagsAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Report Tag Value {/* #get-report-tag-value */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-report-tag-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#get-report-tag-value)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetReportTagValueResult> GetReportTagValueAsync(
        string tagName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## HTML Display Board {/* #html-display-board */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#html-display-board) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#html-display-board)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `filesystem_read`, `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task HtmlDisplayBoardAsync(
        FileReference inputHtmlFile,
        bool showBoard = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Custom Table {/* #make-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-custom-table) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#make-custom-table)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeCustomTableAsync(
        CollectionObjectName tableName,
        int decimalPrecision = 6,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make New SA Report {/* #make-new-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-new-sa-report) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#make-new-sa-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeNewSaReportAsync(
        CollectionObjectName newSaReportName,
        CollectionObjectName saReportTemplate,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `saReportTemplate` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Make Utility Chart {/* #make-utility-chart */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-utility-chart) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#make-utility-chart)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

A request that sets `showChartDialog` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task<bool> MakeUtilityChartAsync(
        FileReference asciiFilePath,
        string chartTitleOverride,
        CollectionItemName outputPictureName,
        bool showChartDialog = false,
        bool plotAdditionalXyValue = false,
        double xValue = 0.000000,
        double yValue = 0.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Double {/* #notify-user-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#notify-user-double)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task NotifyUserDoubleAsync(
        string leadingText,
        Font font,
        double reportedValue = 0.000000,
        int decimalPrecision = 0,
        int displayTimeout = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User HTML {/* #notify-user-html */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-html) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#notify-user-html)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `filesystem_read`, `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task NotifyUserHtmlAsync(
        FileReference htmlFile,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Integer {/* #notify-user-integer */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-integer) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#notify-user-integer)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task NotifyUserIntegerAsync(
        string leadingText,
        Font font,
        int reportedValue = 0,
        int displayTimeout = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Text Array {/* #notify-user-text-array */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-text-array) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#notify-user-text-array)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task NotifyUserTextArrayAsync(
        IEnumerable<string> notificationText,
        Font font,
        bool autoExpandToFitText = false,
        int displayTimeout = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Output SA Report to Excel {/* #output-sa-report-to-excel */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-excel) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#output-sa-report-to-excel)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `long_running`

A request that sets `showFile` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task OutputSaReportToExcelAsync(
        CollectionObjectName reportName,
        FileReference fileName,
        bool showFile = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Output SA Report to PDF {/* #output-sa-report-to-pdf */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-pdf) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#output-sa-report-to-pdf)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `long_running`

A request that sets `showPdf` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task OutputSaReportToPdfAsync(
        CollectionObjectName reportName,
        FileReference fileName,
        bool showPdf = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Quick Report {/* #quick-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#quick-report) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#quick-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task QuickReportAsync(
        CollectionObjectName itemName,
        string reportName = "",
        bool openReport = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `reportName` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Refresh Callout Views in SA Report {/* #refresh-callout-views-in-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#refresh-callout-views-in-sa-report) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#refresh-callout-views-in-sa-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task RefreshCalloutViewsInSaReportAsync(
        CollectionItemName reportName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Refresh Report Bar {/* #refresh-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#refresh-report-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#refresh-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task RefreshReportBarAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Remove Report Tag {/* #remove-report-tag */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#remove-report-tag) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#remove-report-tag)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task RemoveReportTagAsync(
        string tagName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `tagName` | Required and not empty (major 3): an omitted, empty or whitespace-only value is rejected before dispatch. |

## Rename Picture {/* #rename-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#rename-picture) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#rename-picture)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task RenamePictureAsync(
        CollectionItemName originalPictureName,
        CollectionItemName newPictureName,
        bool overwriteIfExists = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Chart to JPeg file {/* #save-chart-to-jpeg-file */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#save-chart-to-jpeg-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#save-chart-to-jpeg-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task SaveChartToJPegFileAsync(
        ChartName chartToSave,
        FileReference fileToSaveTo,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Current View (BMP/JPG/PNG/GIF/TIFF) {/* #save-current-view-bmpjpgpnggiftiff */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#save-current-view-bmpjpgpnggiftiff) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#save-current-view-bmpjpgpnggiftiff)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task SaveCurrentViewBmpJpgPngGifTiffAsync(
        FileReference fileToSaveTo,
        double renderScaleFactor = 1.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `renderScaleFactor` | 1.0 uses the window size. |

## Set Custom Table Cell Color {/* #set-custom-table-cell-color */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-color) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-custom-table-cell-color)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCustomTableCellColorAsync(
        CollectionObjectName tableName,
        int row,
        int column,
        Color foregroundColorName,
        Color backgroundColorName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell Double {/* #set-custom-table-cell-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-custom-table-cell-double)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCustomTableCellDoubleAsync(
        CollectionObjectName tableName,
        int row = 0,
        int column = 0,
        double value = 0.000000,
        int span = 1,
        int decimalPrecision = -1,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell Font {/* #set-custom-table-cell-font */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-font) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-custom-table-cell-font)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCustomTableCellFontAsync(
        CollectionObjectName tableName,
        int row,
        int column,
        Font font,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell String {/* #set-custom-table-cell-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-custom-table-cell-string)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCustomTableCellStringAsync(
        CollectionObjectName tableName,
        int row = 0,
        int column = 0,
        string value = "",
        int span = 1,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Header Cell {/* #set-custom-table-header-cell */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-cell) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-custom-table-header-cell)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCustomTableHeaderCellAsync(
        CollectionObjectName tableName,
        int row = 0,
        int column = 0,
        string headerText = "",
        int span = 1,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Header Row {/* #set-custom-table-header-row */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-row) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-custom-table-header-row)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCustomTableHeaderRowAsync(
        CollectionObjectName tableName,
        int row = 0,
        string value = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Title {/* #set-custom-table-title */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-title) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-custom-table-title)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCustomTableTitleAsync(
        CollectionObjectName tableName,
        string titleLine1 = "",
        string titleLine2 = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Group Report Options {/* #set-point-group-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-point-group-report-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-point-group-report-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

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
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Report Options {/* #set-relationship-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-relationship-report-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-relationship-report-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipReportOptionsAsync(
        CollectionObjectName relationshipName,
        PointDeltaReportOptions reportOptions,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Bar Visibility {/* #set-report-bar-visibility */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-bar-visibility) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-report-bar-visibility)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetReportBarVisibilityAsync(
        bool showReportBar = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Options for Object {/* #set-report-options-for-object */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-options-for-object) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-report-options-for-object)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task SetReportOptionsForObjectAsync(
        CollectionObjectName @object,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From Double {/* #set-report-tag-value-from-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-report-tag-value-from-double)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetReportTagValueFromDoubleAsync(
        string tagName = "",
        double tagValue = 0.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From Integer {/* #set-report-tag-value-from-integer */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-integer) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-report-tag-value-from-integer)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetReportTagValueFromIntegerAsync(
        string tagName = "",
        int tagValue = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From String {/* #set-report-tag-value-from-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-report-tag-value-from-string)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetReportTagValueFromStringAsync(
        string tagName = "",
        string tagValue = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Scale for Picture {/* #set-scale-for-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-scale-for-picture) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-scale-for-picture)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetScaleForPictureAsync(
        CollectionItemName pictureName,
        double scale = 100.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Report Options {/* #set-vector-group-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-vector-group-report-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/reporting-operations#set-vector-group-report-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetVectorGroupReportOptionsAsync(
        CollectionObjectName vectorGroup,
        PointDeltaReportOptions reportOptions,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
