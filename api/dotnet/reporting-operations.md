---
title: Reporting Operations
description: Next Briosa .NET APIs for supported Reporting Operations MP commands.
toc_max_heading_level: 2
---

# Reporting Operations

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Add Charts to Report Bar

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Charts to Report Bar](/mp-command-catalog/commands/reporting-operations#add-charts-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-charts-to-report-bar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `charts` | `IEnumerable<CollectionObjectName>` | `Chart(s)` | Required |
| `clearExisting` | `bool` | `Clear Existing?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddChartsToReportBarAsync(
    IEnumerable<CollectionObjectName> charts,
    bool clearExisting = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddChartsToReportBarAsync(charts: charts);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Add Custom Table to SA Report

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Custom Table to SA Report](/mp-command-catalog/commands/reporting-operations#add-custom-table-to-sa-report) · [gRPC contract](/api/grpc/reporting-operations#add-custom-table-to-sa-report)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |
| `showReport` | `bool` | `Show Report?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddCustomTableToSaReportAsync(
    CollectionObjectName tableName,
    CollectionObjectName reportName,
    bool showReport = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddCustomTableToSaReportAsync(tableName: tableName, reportName: reportName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Add Custom Tables to Report Bar

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Custom Tables to Report Bar](/mp-command-catalog/commands/reporting-operations#add-custom-tables-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-custom-tables-to-report-bar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `customTablesToReport` | `IEnumerable<CollectionObjectName>` | `Custom Table(s) To Report` | Required |
| `clearExisting` | `bool` | `Clear Existing?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddCustomTablesToReportBarAsync(
    IEnumerable<CollectionObjectName> customTablesToReport,
    bool clearExisting = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddCustomTablesToReportBarAsync(customTablesToReport: customTablesToReport);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Add Datums to Report Bar

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Datums to Report Bar](/mp-command-catalog/commands/reporting-operations#add-datums-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-datums-to-report-bar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `datums` | `IEnumerable<CollectionObjectName>` | `Datum(s)` | Required |
| `clearExisting` | `bool` | `Clear Existing?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddDatumsToReportBarAsync(
    IEnumerable<CollectionObjectName> datums,
    bool clearExisting = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddDatumsToReportBarAsync(datums: datums);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Add Events to Report Bar

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Events to Report Bar](/mp-command-catalog/commands/reporting-operations#add-events-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-events-to-report-bar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `events` | `IEnumerable<CollectionObjectName>` | `Event(s)` | Required |
| `clearExisting` | `bool` | `Clear Existing?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddEventsToReportBarAsync(
    IEnumerable<CollectionObjectName> events,
    bool clearExisting = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddEventsToReportBarAsync(events: events);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Add Feature Checks to Report Bar

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Feature Checks to Report Bar](/mp-command-catalog/commands/reporting-operations#add-feature-checks-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-feature-checks-to-report-bar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `featureChecks` | `IEnumerable<CollectionObjectName>` | `Feature Check(s)` | Required |
| `clearExisting` | `bool` | `Clear Existing?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddFeatureChecksToReportBarAsync(
    IEnumerable<CollectionObjectName> featureChecks,
    bool clearExisting = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddFeatureChecksToReportBarAsync(featureChecks: featureChecks);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Add Item to SA Report at Location

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Item to SA Report at Location](/mp-command-catalog/commands/reporting-operations#add-item-to-sa-report-at-location) · [gRPC contract](/api/grpc/reporting-operations#add-item-to-sa-report-at-location)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |
| `itemName` | `CollectionObjectName` | `Item Name` | Required |
| `pageNumber` | `int` | `Page Number` | 0 |
| `horizontalLocation` | `double` | `Horizontal Location` | 1.000000 |
| `verticalLocation` | `double` | `Vertical Location` | 1.000000 |
| `showReport` | `bool` | `Show Report?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```csharp
await briosa.AddItemToSaReportAtLocationAsync(reportName: reportName, itemName: itemName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Add Objects to Report Bar

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Objects to Report Bar](/mp-command-catalog/commands/reporting-operations#add-objects-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-objects-to-report-bar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `IEnumerable<CollectionObjectName>` | `Object(s)` | Required |
| `clearExisting` | `bool` | `Clear Existing?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddObjectsToReportBarAsync(
    IEnumerable<CollectionObjectName> objects,
    bool clearExisting = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddObjectsToReportBarAsync(objects: objects);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Add Pictures to Report Bar

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Pictures to Report Bar](/mp-command-catalog/commands/reporting-operations#add-pictures-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-pictures-to-report-bar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pictures` | `IEnumerable<CollectionObjectName>` | `Picture(s)` | Required |
| `clearExisting` | `bool` | `Clear Existing?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddPicturesToReportBarAsync(
    IEnumerable<CollectionObjectName> pictures,
    bool clearExisting = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddPicturesToReportBarAsync(pictures: pictures);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Add Relationships to Report Bar

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Relationships to Report Bar](/mp-command-catalog/commands/reporting-operations#add-relationships-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-relationships-to-report-bar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships` | `IEnumerable<CollectionObjectName>` | `Relationship(s)` | Required |
| `clearExisting` | `bool` | `Clear Existing?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddRelationshipsToReportBarAsync(
    IEnumerable<CollectionObjectName> relationships,
    bool clearExisting = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddRelationshipsToReportBarAsync(relationships: relationships);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Append Items to SA Report

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Append Items to SA Report](/mp-command-catalog/commands/reporting-operations#append-items-to-sa-report) · [gRPC contract](/api/grpc/reporting-operations#append-items-to-sa-report)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |
| `itemsToReport` | `IEnumerable<CollectionObjectName>` | `Items To Report` | Required |
| `showReport` | `bool` | `Show Report?` | false |
| `beginOnNewPage` | `bool` | `Begin On New Page?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AppendItemsToSaReportAsync(
    CollectionObjectName reportName,
    IEnumerable<CollectionObjectName> itemsToReport,
    bool showReport = false,
    bool beginOnNewPage = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AppendItemsToSaReportAsync(reportName: reportName, itemsToReport: itemsToReport);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Capture Current View

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Capture Current View](/mp-command-catalog/commands/reporting-operations#capture-current-view) · [gRPC contract](/api/grpc/reporting-operations#capture-current-view)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pictureName` | `CollectionObjectName` | `Picture Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CaptureCurrentViewAsync(
    CollectionObjectName pictureName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CaptureCurrentViewAsync(pictureName: pictureName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Capture Screen to File (BMP/JPG/PNG/GIF/TIFF)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Capture Screen to File (BMP/JPG/PNG/GIF/TIFF)](/mp-command-catalog/commands/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff) · [gRPC contract](/api/grpc/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fileToSaveTo` | `FileReference` | `File to save to` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CaptureScreenToFileBmpJpgPngGifTiffAsync(
    FileReference fileToSaveTo,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CaptureScreenToFileBmpJpgPngGifTiffAsync(fileToSaveTo: fileToSaveTo);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Clear Custom Table

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Clear Custom Table](/mp-command-catalog/commands/reporting-operations#clear-custom-table) · [gRPC contract](/api/grpc/reporting-operations#clear-custom-table)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ClearCustomTableAsync(
    CollectionObjectName tableName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ClearCustomTableAsync(tableName: tableName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Close All Reports

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Close All Reports](/mp-command-catalog/commands/reporting-operations#close-all-reports) · [gRPC contract](/api/grpc/reporting-operations#close-all-reports)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CloseAllReportsAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CloseAllReportsAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Close HTML Display Board

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Close HTML Display Board](/mp-command-catalog/commands/reporting-operations#close-html-display-board) · [gRPC contract](/api/grpc/reporting-operations#close-html-display-board)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CloseHtmlDisplayBoardAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CloseHtmlDisplayBoardAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Combine SA Reports

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Combine SA Reports](/mp-command-catalog/commands/reporting-operations#combine-sa-reports) · [gRPC contract](/api/grpc/reporting-operations#combine-sa-reports)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `saReportsToCombine` | `IEnumerable<CollectionObjectName>` | `SA Reports to Combine` | Required |
| `outputSaReportName` | `CollectionObjectName` | `Output SA Report Name` | Required |
| `showReport` | `bool` | `Show Report?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CombineSaReportsAsync(
    IEnumerable<CollectionObjectName> saReportsToCombine,
    CollectionObjectName outputSaReportName,
    bool showReport = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CombineSaReportsAsync(saReportsToCombine: saReportsToCombine, outputSaReportName: outputSaReportName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Create Chart from Vector Group

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Create Chart from Vector Group](/mp-command-catalog/commands/reporting-operations#create-chart-from-vector-group) · [gRPC contract](/api/grpc/reporting-operations#create-chart-from-vector-group)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `newChartName` | `ChartName` | `New Chart Name` | Required |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `chartType` | `ChartType` | `Chart Type` | Required |
| `dataSetToChart` | `DatasetType` | `Data Set to Chart` | Required |
| `auxDataSetToChart` | `DatasetType` | `Aux Data Set to Chart` | Required |
| `templateChartNameOptional` | `ChartName` | `Template Chart Name (optional)` | Required |
| `showInterface` | `bool` | `Show Interface?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CreateChartFromVectorGroupAsync(
    ChartName newChartName,
    CollectionObjectName vectorGroupName,
    ChartType chartType,
    DatasetType dataSetToChart,
    DatasetType auxDataSetToChart,
    ChartName templateChartNameOptional,
    bool showInterface = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CreateChartFromVectorGroupAsync(newChartName: newChartName, vectorGroupName: vectorGroupName, chartType: chartType, dataSetToChart: dataSetToChart, auxDataSetToChart: auxDataSetToChart, templateChartNameOptional: templateChartNameOptional);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Define Report Template

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Define Report Template](/mp-command-catalog/commands/reporting-operations#define-report-template) · [gRPC contract](/api/grpc/reporting-operations#define-report-template)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportTemplateName` | `CollectionObjectName` | `Report Template Name` | Required |
| `title` | `IEnumerable<string>` | `Title` | Required |
| `graphicalViewOptions` | `ReportViewOptions` | `Graphical View Options` | Required |
| `itemsToReport` | `IEnumerable<CollectionObjectName>` | `Items To Report` | Required |
| `relationshipsToReport` | `IEnumerable<CollectionObjectName>` | `Relationships To Report` | Required |
| `eventsToReport` | `IEnumerable<CollectionObjectName>` | `Events To Report` | Required |
| `reportOutputOptions` | `ReportOutputOptions` | `Report Output Options` | ::My Report |
| `reportPageSettingsSaReportOnly` | `ReportPageSettings` | `Report Page Settings ( SA Report only )` | Portrait |
| `generateNow` | `bool` | `Generate Now?` | false |
| `showGeneratedReport` | `bool` | `Show Generated Report?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DefineReportTemplateAsync(
    CollectionObjectName reportTemplateName,
    IEnumerable<string> title,
    ReportViewOptions graphicalViewOptions,
    IEnumerable<CollectionObjectName> itemsToReport,
    IEnumerable<CollectionObjectName> relationshipsToReport,
    IEnumerable<CollectionObjectName> eventsToReport,
    ReportOutputOptions reportOutputOptions,
    ReportPageSettings reportPageSettingsSaReportOnly,
    bool generateNow = false,
    bool showGeneratedReport = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DefineReportTemplateAsync(reportTemplateName: reportTemplateName, title: title, graphicalViewOptions: graphicalViewOptions, itemsToReport: itemsToReport, relationshipsToReport: relationshipsToReport, eventsToReport: eventsToReport, reportOutputOptions: reportOutputOptions, reportPageSettingsSaReportOnly: reportPageSettingsSaReportOnly);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete Chart

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Chart](/mp-command-catalog/commands/reporting-operations#delete-chart) · [gRPC contract](/api/grpc/reporting-operations#delete-chart)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `chartName` | `CollectionObjectName` | `Chart Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteChartAsync(
    CollectionObjectName chartName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteChartAsync(chartName: chartName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete Custom Table

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Custom Table](/mp-command-catalog/commands/reporting-operations#delete-custom-table) · [gRPC contract](/api/grpc/reporting-operations#delete-custom-table)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteCustomTableAsync(
    CollectionObjectName tableName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteCustomTableAsync(tableName: tableName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete Picture

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Picture](/mp-command-catalog/commands/reporting-operations#delete-picture) · [gRPC contract](/api/grpc/reporting-operations#delete-picture)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pictureName` | `CollectionObjectName` | `Picture Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeletePictureAsync(
    CollectionObjectName pictureName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeletePictureAsync(pictureName: pictureName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete SA Doc

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete SA Doc](/mp-command-catalog/commands/reporting-operations#delete-sa-doc) · [gRPC contract](/api/grpc/reporting-operations#delete-sa-doc)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `docName` | `CollectionObjectName` | `Doc Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteSaDocAsync(
    CollectionObjectName docName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteSaDocAsync(docName: docName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete SA Report

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete SA Report](/mp-command-catalog/commands/reporting-operations#delete-sa-report) · [gRPC contract](/api/grpc/reporting-operations#delete-sa-report)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteSaReportAsync(
    CollectionObjectName reportName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteSaReportAsync(reportName: reportName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete SA Report Template

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete SA Report Template](/mp-command-catalog/commands/reporting-operations#delete-sa-report-template) · [gRPC contract](/api/grpc/reporting-operations#delete-sa-report-template)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportTemplateName` | `CollectionObjectName` | `Report Template Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteSaReportTemplateAsync(
    CollectionObjectName reportTemplateName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteSaReportTemplateAsync(reportTemplateName: reportTemplateName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Generate Quick Report from Tab Order

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Generate Quick Report from Tab Order](/mp-command-catalog/commands/reporting-operations#generate-quick-report-from-tab-order) · [gRPC contract](/api/grpc/reporting-operations#generate-quick-report-from-tab-order)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportOutputOptions` | `ReportOutputOptions` | `Report Output Options` | ::My Report |
| `openReport` | `bool` | `Open Report?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task GenerateQuickReportFromTabOrderAsync(
    ReportOutputOptions reportOutputOptions,
    bool openReport = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GenerateQuickReportFromTabOrderAsync(reportOutputOptions: reportOutputOptions);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Generate Standard HTML Report

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Generate Standard HTML Report](/mp-command-catalog/commands/reporting-operations#generate-standard-html-report) · [gRPC contract](/api/grpc/reporting-operations#generate-standard-html-report)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `htmlOutputFile` | `FileReference` | `HTML Output File` | Required |
| `decimalPrecision` | `int` | `Decimal Precision` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task GenerateStandardHtmlReportAsync(
    FileReference htmlOutputFile,
    int decimalPrecision = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GenerateStandardHtmlReportAsync(htmlOutputFile: htmlOutputFile);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Generate/Update Templated Report

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Generate/Update Templated Report](/mp-command-catalog/commands/reporting-operations#generateupdate-templated-report) · [gRPC contract](/api/grpc/reporting-operations#generateupdate-templated-report)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportTemplate` | `CollectionObjectName` | `Report Template` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task GenerateUpdateTemplatedReportAsync(
    CollectionObjectName reportTemplate,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GenerateUpdateTemplatedReportAsync(reportTemplate: reportTemplate);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Custom Table Cell Double

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Custom Table Cell Double](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-double) · [gRPC contract](/api/grpc/reporting-operations#get-custom-table-cell-double)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `double` | `Value` |

```csharp
public Task<double> GetCustomTableCellDoubleAsync(
    CollectionObjectName tableName,
    int row = 0,
    int column = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetCustomTableCellDoubleAsync(tableName: tableName);
```

Returns the MP output `Value` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Custom Table Cell String

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Custom Table Cell String](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-string) · [gRPC contract](/api/grpc/reporting-operations#get-custom-table-cell-string)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `string` | `Value` |

```csharp
public Task<string> GetCustomTableCellStringAsync(
    CollectionObjectName tableName,
    int row = 0,
    int column = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetCustomTableCellStringAsync(tableName: tableName);
```

Returns the MP output `Value` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Defined Report Tags

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Defined Report Tags](/mp-command-catalog/commands/reporting-operations#get-defined-report-tags) · [gRPC contract](/api/grpc/reporting-operations#get-defined-report-tags)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `DefinedTags` | `string[]` | `Defined Tags` |

```csharp
public Task<string[]> GetDefinedReportTagsAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetDefinedReportTagsAsync();
```

Returns the MP output `Defined Tags` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Report Tag Value

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Report Tag Value](/mp-command-catalog/commands/reporting-operations#get-report-tag-value) · [gRPC contract](/api/grpc/reporting-operations#get-report-tag-value)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tagName` | `string` | `Tag Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TagValueAsString` | `string` | `Tag Value As String` |
| `TagValueAsInteger` | `int` | `Tag Value As Integer` |
| `TagValueAsDouble` | `double` | `Tag Value As Double` |

```csharp
public sealed record GetReportTagValueResult
{
    public required string TagValueAsString { get; init; }

    public required int TagValueAsInteger { get; init; }

    public required double TagValueAsDouble { get; init; }
}

public Task<GetReportTagValueResult> GetReportTagValueAsync(
    string tagName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetReportTagValueAsync();
```

Returns the 3 MP outputs in the named `GetReportTagValueResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## HTML Display Board

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[HTML Display Board](/mp-command-catalog/commands/reporting-operations#html-display-board) · [gRPC contract](/api/grpc/reporting-operations#html-display-board)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `inputHtmlFile` | `FileReference` | `Input HTML File` | Required |
| `showBoard` | `bool` | `Show Board?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task HtmlDisplayBoardAsync(
    FileReference inputHtmlFile,
    bool showBoard = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.HtmlDisplayBoardAsync(inputHtmlFile: inputHtmlFile);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Custom Table

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Custom Table](/mp-command-catalog/commands/reporting-operations#make-custom-table) · [gRPC contract](/api/grpc/reporting-operations#make-custom-table)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `decimalPrecision` | `int` | `Decimal Precision` | 6 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakeCustomTableAsync(
    CollectionObjectName tableName,
    int decimalPrecision = 6,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeCustomTableAsync(tableName: tableName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make New SA Report

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make New SA Report](/mp-command-catalog/commands/reporting-operations#make-new-sa-report) · [gRPC contract](/api/grpc/reporting-operations#make-new-sa-report)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `newSaReportName` | `CollectionObjectName` | `New SA Report Name` | Required |
| `saReportTemplateOptional` | `CollectionObjectName` | `SA Report Template (optional)` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakeNewSaReportAsync(
    CollectionObjectName newSaReportName,
    CollectionObjectName saReportTemplateOptional,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeNewSaReportAsync(newSaReportName: newSaReportName, saReportTemplateOptional: saReportTemplateOptional);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Utility Chart

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Utility Chart](/mp-command-catalog/commands/reporting-operations#make-utility-chart) · [gRPC contract](/api/grpc/reporting-operations#make-utility-chart)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `chartTitleOverride` | `string` | `Chart Title Override` | Empty |
| `outputPictureName` | `CollectionObjectName` | `Output Picture Name` | Required |
| `showChartDialog` | `bool` | `Show Chart Dialog?` | false |
| `plotAdditionalXyValue` | `bool` | `Plot Additional XY Value?` | false |
| `xValue` | `double` | `X Value` | 0.000000 |
| `yValue` | `double` | `Y Value` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `IsPointInside` | `bool` | `Is Point Inside?` |

```csharp
public Task<bool> MakeUtilityChartAsync(
    FileReference asciiFilePath,
    string chartTitleOverride,
    CollectionObjectName outputPictureName,
    bool showChartDialog = false,
    bool plotAdditionalXyValue = false,
    double xValue = 0.000000,
    double yValue = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeUtilityChartAsync(asciiFilePath: asciiFilePath, chartTitleOverride: chartTitleOverride, outputPictureName: outputPictureName);
```

Returns the MP output `Is Point Inside?` directly as `bool`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Notify User Double

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Notify User Double](/mp-command-catalog/commands/reporting-operations#notify-user-double) · [gRPC contract](/api/grpc/reporting-operations#notify-user-double)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `leadingText` | `string` | `Leading Text` | Empty |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `reportedValue` | `double` | `Reported Value` | 0.000000 |
| `decimalPrecision` | `int` | `Decimal Precision` | 0 |
| `displayTimeout` | `int` | `Display Timeout` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task NotifyUserDoubleAsync(
    string leadingText,
    Font font,
    double reportedValue = 0.000000,
    int decimalPrecision = 0,
    int displayTimeout = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.NotifyUserDoubleAsync(leadingText: leadingText, font: font);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Notify User HTML

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Notify User HTML](/mp-command-catalog/commands/reporting-operations#notify-user-html) · [gRPC contract](/api/grpc/reporting-operations#notify-user-html)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `htmlFile` | `FileReference` | `HTML File` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task NotifyUserHtmlAsync(
    FileReference htmlFile,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.NotifyUserHtmlAsync(htmlFile: htmlFile);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Notify User Integer

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Notify User Integer](/mp-command-catalog/commands/reporting-operations#notify-user-integer) · [gRPC contract](/api/grpc/reporting-operations#notify-user-integer)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `leadingText` | `string` | `Leading Text` | Empty |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `reportedValue` | `int` | `Reported Value` | 0 |
| `displayTimeout` | `int` | `Display Timeout` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task NotifyUserIntegerAsync(
    string leadingText,
    Font font,
    int reportedValue = 0,
    int displayTimeout = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.NotifyUserIntegerAsync(leadingText: leadingText, font: font);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Notify User Text Array

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Notify User Text Array](/mp-command-catalog/commands/reporting-operations#notify-user-text-array) · [gRPC contract](/api/grpc/reporting-operations#notify-user-text-array)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `notificationText` | `IEnumerable<string>` | `Notification Text` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `autoExpandToFitText` | `bool` | `Auto expand to fit text?` | false |
| `displayTimeout` | `int` | `Display Timeout` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task NotifyUserTextArrayAsync(
    IEnumerable<string> notificationText,
    Font font,
    bool autoExpandToFitText = false,
    int displayTimeout = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.NotifyUserTextArrayAsync(notificationText: notificationText, font: font);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Output SA Report to Excel

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Output SA Report to Excel](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-excel) · [gRPC contract](/api/grpc/reporting-operations#output-sa-report-to-excel)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |
| `fileName` | `FileReference` | `File Name` | Required |
| `showFile` | `bool` | `Show File?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task OutputSaReportToExcelAsync(
    CollectionObjectName reportName,
    FileReference fileName,
    bool showFile = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.OutputSaReportToExcelAsync(reportName: reportName, fileName: fileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Output SA Report to PDF

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Output SA Report to PDF](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-pdf) · [gRPC contract](/api/grpc/reporting-operations#output-sa-report-to-pdf)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |
| `fileName` | `FileReference` | `File Name` | Required |
| `showPdf` | `bool` | `Show PDF?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task OutputSaReportToPdfAsync(
    CollectionObjectName reportName,
    FileReference fileName,
    bool showPdf = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.OutputSaReportToPdfAsync(reportName: reportName, fileName: fileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Quick Report

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Quick Report](/mp-command-catalog/commands/reporting-operations#quick-report) · [gRPC contract](/api/grpc/reporting-operations#quick-report)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `itemName` | `CollectionObjectName` | `Item Name` | Required |
| `reportNameOptional` | `string` | `Report Name (optional)` | Empty |
| `openReport` | `bool` | `Open Report?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task QuickReportAsync(
    CollectionObjectName itemName,
    string reportNameOptional = "",
    bool openReport = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.QuickReportAsync(itemName: itemName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Refresh Callout Views in SA Report

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Refresh Callout Views in SA Report](/mp-command-catalog/commands/reporting-operations#refresh-callout-views-in-sa-report) · [gRPC contract](/api/grpc/reporting-operations#refresh-callout-views-in-sa-report)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task RefreshCalloutViewsInSaReportAsync(
    CollectionObjectName reportName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RefreshCalloutViewsInSaReportAsync(reportName: reportName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Refresh Report Bar

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Refresh Report Bar](/mp-command-catalog/commands/reporting-operations#refresh-report-bar) · [gRPC contract](/api/grpc/reporting-operations#refresh-report-bar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task RefreshReportBarAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RefreshReportBarAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Remove Report Tag

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Remove Report Tag](/mp-command-catalog/commands/reporting-operations#remove-report-tag) · [gRPC contract](/api/grpc/reporting-operations#remove-report-tag)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tagName` | `string` | `Tag Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task RemoveReportTagAsync(
    string tagName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RemoveReportTagAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Rename Picture

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Rename Picture](/mp-command-catalog/commands/reporting-operations#rename-picture) · [gRPC contract](/api/grpc/reporting-operations#rename-picture)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalPictureName` | `CollectionObjectName` | `Original Picture Name` | Required |
| `newPictureName` | `CollectionObjectName` | `New Picture Name` | Required |
| `overwriteIfExists` | `bool` | `Overwrite if exists?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task RenamePictureAsync(
    CollectionObjectName originalPictureName,
    CollectionObjectName newPictureName,
    bool overwriteIfExists = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RenamePictureAsync(originalPictureName: originalPictureName, newPictureName: newPictureName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Save Chart to JPeg file

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Save Chart to JPeg file](/mp-command-catalog/commands/reporting-operations#save-chart-to-jpeg-file) · [gRPC contract](/api/grpc/reporting-operations#save-chart-to-jpeg-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `chartToSave` | `ChartName` | `Chart to Save` | Required |
| `fileToSaveTo` | `FileReference` | `File to save to` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SaveChartToJPegFileAsync(
    ChartName chartToSave,
    FileReference fileToSaveTo,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SaveChartToJPegFileAsync(chartToSave: chartToSave, fileToSaveTo: fileToSaveTo);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Save Current View (BMP/JPG/PNG/GIF/TIFF)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Save Current View (BMP/JPG/PNG/GIF/TIFF)](/mp-command-catalog/commands/reporting-operations#save-current-view-bmpjpgpnggiftiff) · [gRPC contract](/api/grpc/reporting-operations#save-current-view-bmpjpgpnggiftiff)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fileToSaveTo` | `FileReference` | `File to save to` | Required |
| `renderScaleFactor10UsesWindowSize` | `double` | `Render Scale Factor (1.0 uses window size)` | 1.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SaveCurrentViewBmpJpgPngGifTiffAsync(
    FileReference fileToSaveTo,
    double renderScaleFactor10UsesWindowSize = 1.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SaveCurrentViewBmpJpgPngGifTiffAsync(fileToSaveTo: fileToSaveTo);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Custom Table Cell Color

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Custom Table Cell Color](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-color) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-color)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |
| `foregroundColorName` | `Color` | `Foreground Color Name` | RGB 255, 0, 0 |
| `backgroundColorName` | `Color` | `Background Color Name` | RGB 255, 0, 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCustomTableCellColorAsync(
    CollectionObjectName tableName,
    int row,
    int column,
    Color foregroundColorName,
    Color backgroundColorName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCustomTableCellColorAsync(tableName: tableName, row: row, column: column, foregroundColorName: foregroundColorName, backgroundColorName: backgroundColorName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Custom Table Cell Double

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Custom Table Cell Double](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-double) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-double)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |
| `value` | `double` | `Value` | 0.000000 |
| `span` | `int` | `Span` | 1 |
| `decimalPrecision` | `int` | `Decimal Precision` | -1 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```csharp
await briosa.SetCustomTableCellDoubleAsync(tableName: tableName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Custom Table Cell Font

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Custom Table Cell Font](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-font) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-font)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCustomTableCellFontAsync(
    CollectionObjectName tableName,
    int row,
    int column,
    Font font,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCustomTableCellFontAsync(tableName: tableName, row: row, column: column, font: font);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Custom Table Cell String

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Custom Table Cell String](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-string) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-string)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |
| `value` | `string` | `Value` | Empty |
| `span` | `int` | `Span` | 1 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCustomTableCellStringAsync(
    CollectionObjectName tableName,
    int row = 0,
    int column = 0,
    string value = "",
    int span = 1,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCustomTableCellStringAsync(tableName: tableName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Custom Table Header Cell

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Custom Table Header Cell](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-cell) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-header-cell)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |
| `headerText` | `string` | `Header Text` | Empty |
| `span` | `int` | `Span` | 1 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCustomTableHeaderCellAsync(
    CollectionObjectName tableName,
    int row = 0,
    int column = 0,
    string headerText = "",
    int span = 1,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCustomTableHeaderCellAsync(tableName: tableName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Custom Table Header Row

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Custom Table Header Row](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-row) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-header-row)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `value` | `string` | `Value` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCustomTableHeaderRowAsync(
    CollectionObjectName tableName,
    int row = 0,
    string value = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCustomTableHeaderRowAsync(tableName: tableName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Custom Table Title

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Custom Table Title](/mp-command-catalog/commands/reporting-operations#set-custom-table-title) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-title)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `titleLine1` | `string` | `Title Line 1` | Empty |
| `titleLine2` | `string` | `Title Line 2` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCustomTableTitleAsync(
    CollectionObjectName tableName,
    string titleLine1 = "",
    string titleLine2 = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCustomTableTitleAsync(tableName: tableName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Point Group Report Options

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Point Group Report Options](/mp-command-catalog/commands/reporting-operations#set-point-group-report-options) · [gRPC contract](/api/grpc/reporting-operations#set-point-group-report-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointGroup` | `CollectionObjectName` | `Point Group` | Required |
| `coordinateSystem` | `CoordinateSystemType` | `Coordinate System` | Cartesian |
| `showXComponent` | `bool` | `Show X Component` | true |
| `showYComponent` | `bool` | `Show Y Component` | true |
| `showZComponent` | `bool` | `Show Z Component` | true |
| `showOffsets` | `bool` | `Show Offsets` | false |
| `showUncertainty` | `bool` | `Show Uncertainty` | true |
| `showNotes` | `bool` | `Show Notes` | false |
| `showMeasurements` | `bool` | `Show Measurements` | false |
| `showMeasurementDetails` | `bool` | `Show Measurement Details` | false |
| `showPointingErrorWorstAngle` | `bool` | `Show PointingError/Worst Angle` | false |
| `sortByPointNames` | `bool` | `Sort by Point Names` | true |
| `makeDefault` | `bool` | `Make Default` | false |
| `applyToAll` | `bool` | `Apply to All` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```csharp
await briosa.SetPointGroupReportOptionsAsync(pointGroup: pointGroup, coordinateSystem: coordinateSystem);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Report Options

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Report Options](/mp-command-catalog/commands/reporting-operations#set-relationship-report-options) · [gRPC contract](/api/grpc/reporting-operations#set-relationship-report-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `reportOptions` | `PointDeltaReportOptions` | `Report Options` | Single |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipReportOptionsAsync(
    CollectionObjectName relationshipName,
    PointDeltaReportOptions reportOptions,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipReportOptionsAsync(relationshipName: relationshipName, reportOptions: reportOptions);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Report Bar Visibility

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Report Bar Visibility](/mp-command-catalog/commands/reporting-operations#set-report-bar-visibility) · [gRPC contract](/api/grpc/reporting-operations#set-report-bar-visibility)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `showReportBar` | `bool` | `Show Report Bar?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetReportBarVisibilityAsync(
    bool showReportBar = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetReportBarVisibilityAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Report Options for Object

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Report Options for Object](/mp-command-catalog/commands/reporting-operations#set-report-options-for-object) · [gRPC contract](/api/grpc/reporting-operations#set-report-options-for-object)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `@object` | `CollectionObjectName` | `Object` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetReportOptionsForObjectAsync(
    CollectionObjectName @object,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetReportOptionsForObjectAsync(@object: @object);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Report Tag Value From Double

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Report Tag Value From Double](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-double) · [gRPC contract](/api/grpc/reporting-operations#set-report-tag-value-from-double)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tagName` | `string` | `Tag Name` | Empty |
| `tagValue` | `double` | `Tag Value` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetReportTagValueFromDoubleAsync(
    string tagName = "",
    double tagValue = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetReportTagValueFromDoubleAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Report Tag Value From Integer

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Report Tag Value From Integer](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-integer) · [gRPC contract](/api/grpc/reporting-operations#set-report-tag-value-from-integer)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tagName` | `string` | `Tag Name` | Empty |
| `tagValue` | `int` | `Tag Value` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetReportTagValueFromIntegerAsync(
    string tagName = "",
    int tagValue = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetReportTagValueFromIntegerAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Report Tag Value From String

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Report Tag Value From String](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-string) · [gRPC contract](/api/grpc/reporting-operations#set-report-tag-value-from-string)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tagName` | `string` | `Tag Name` | Empty |
| `tagValue` | `string` | `Tag Value` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetReportTagValueFromStringAsync(
    string tagName = "",
    string tagValue = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetReportTagValueFromStringAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Scale for Picture

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Scale for Picture](/mp-command-catalog/commands/reporting-operations#set-scale-for-picture) · [gRPC contract](/api/grpc/reporting-operations#set-scale-for-picture)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pictureName` | `CollectionObjectName` | `Picture Name` | Required |
| `scale` | `double` | `Scale` | 100.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetScaleForPictureAsync(
    CollectionObjectName pictureName,
    double scale = 100.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetScaleForPictureAsync(pictureName: pictureName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Vector Group Report Options

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Vector Group Report Options](/mp-command-catalog/commands/reporting-operations#set-vector-group-report-options) · [gRPC contract](/api/grpc/reporting-operations#set-vector-group-report-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroup` | `CollectionObjectName` | `Vector Group` | Required |
| `reportOptions` | `PointDeltaReportOptions` | `Report Options` | Single |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetVectorGroupReportOptionsAsync(
    CollectionObjectName vectorGroup,
    PointDeltaReportOptions reportOptions,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetVectorGroupReportOptionsAsync(vectorGroup: vectorGroup, reportOptions: reportOptions);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
