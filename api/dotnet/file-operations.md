---
title: File Operations
description: Next Briosa .NET APIs for supported File Operations MP commands.
toc_max_heading_level: 2
---

# File Operations

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Backup Now

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Backup Now](/mp-command-catalog/commands/file-operations#backup-now) · [gRPC contract](/api/grpc/file-operations#backup-now)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task BackupNowAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.BackupNowAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Copy General File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Copy General File](/mp-command-catalog/commands/file-operations#copy-general-file) · [gRPC contract](/api/grpc/file-operations#copy-general-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceFileName` | `FileReference` | `Source File Name` | Required |
| `destinationFileName` | `FileReference` | `Destination File Name` | Required |
| `overwrite` | `bool` | `Overwrite?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CopyGeneralFileAsync(
    FileReference sourceFileName,
    FileReference destinationFileName,
    bool overwrite = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CopyGeneralFileAsync(sourceFileName: sourceFileName, destinationFileName: destinationFileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete General File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete General File](/mp-command-catalog/commands/file-operations#delete-general-file) · [gRPC contract](/api/grpc/file-operations#delete-general-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fileName` | `FileReference` | `File Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteGeneralFileAsync(
    FileReference fileName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteGeneralFileAsync(fileName: fileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Direct CAD Access

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Direct CAD Access](/mp-command-catalog/commands/file-operations#direct-cad-access) · [gRPC contract](/api/grpc/file-operations#direct-cad-access)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cadFileName` | `FileReference` | `CAD File Name` | Required |
| `importSolids` | `bool` | `Import Solids` | true |
| `importSurfaces` | `bool` | `Import Surfaces` | true |
| `importPolygonizedSurfaces` | `bool` | `Import Polygonized Surfaces` | true |
| `importAnnotations` | `bool` | `Import Annotations` | true |
| `importVectors` | `bool` | `Import Vectors` | true |
| `importPoints` | `bool` | `Import Points` | true |
| `pointGroupName` | `string` | `Point Group Name` | CAD pts |
| `importAttributesMetadata` | `bool` | `Import Attributes/Metadata` | true |
| `importCooordinateFrames` | `bool` | `Import Cooordinate Frames` | true |
| `importPlanes` | `bool` | `Import Planes` | true |
| `import3DCurvesLines` | `bool` | `Import 3D Curves - Lines` | true |
| `import3DCurvesCircles` | `bool` | `Import 3D Curves - Circles` | true |
| `import3DCurvesGeneralCurves` | `bool` | `Import 3D Curves - General Curves` | true |
| `importConstructionGeometry` | `bool` | `Import Construction Geometry` | false |
| `importHiddenEntities` | `bool` | `Import Hidden Entities` | false |
| `importAllSurfacesAsMeshGraphicalEntities` | `bool` | `Import all Surfaces as Mesh Graphical Entities` | false |
| `doNotImportFillets` | `bool` | `Do Not Import Fillets` | false |
| `doNotImportDittos` | `bool` | `Do Not Import Dittos` | false |
| `dittoThreshold` | `int` | `Ditto Threshold` | 1 |
| `centerViewOnImportedObjects` | `bool` | `Center View on Imported Objects` | true |
| `importIntoFoldersMatchingCadFileHierarchy` | `bool` | `Import into Folders matching CAD file hierarchy` | false |
| `removeEmptyFolders` | `bool` | `Remove Empty Folders` | true |
| `surfaceNormalsMode1Or2` | `int` | `Surface Normals Mode (1 or 2)` | 1 |
| `promptOnMissingComponents` | `bool` | `Prompt on Missing Components` | true |
| `selectiveImport` | `bool` | `Selective Import` | false |
| `surfaceCompatibilityMode` | `bool` | `Surface Compatibility Mode` | true |
| `explodeSurfaces` | `bool` | `Explode Surfaces` | false |
| `cadFileUnitsLeaveBlankToUseTheUnitsSpecifiedInTheFile` | `string` | `CAD File Units (leave blank to use the units specified in the file)` | Empty |
| `buildCalloutViews` | `bool` | `Build Callout Views` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `ImportWarnings` | `bool` | `Import Warnings` |
| `ImportWarningMessages` | `string` | `Import Warning Messages` |
| `ExtentsMin` | `Vector` | `Extents Min` |
| `ExtentsMax` | `Vector` | `Extents Max` |

```csharp
public sealed record DirectCadAccessResult
{
    public required bool ImportWarnings { get; init; }

    public required string ImportWarningMessages { get; init; }

    public required Vector ExtentsMin { get; init; }

    public required Vector ExtentsMax { get; init; }
}

public Task<DirectCadAccessResult> DirectCadAccessAsync(
    FileReference cadFileName,
    bool importSolids = true,
    bool importSurfaces = true,
    bool importPolygonizedSurfaces = true,
    bool importAnnotations = true,
    bool importVectors = true,
    bool importPoints = true,
    string pointGroupName = "CAD pts",
    bool importAttributesMetadata = true,
    bool importCooordinateFrames = true,
    bool importPlanes = true,
    bool import3DCurvesLines = true,
    bool import3DCurvesCircles = true,
    bool import3DCurvesGeneralCurves = true,
    bool importConstructionGeometry = false,
    bool importHiddenEntities = false,
    bool importAllSurfacesAsMeshGraphicalEntities = false,
    bool doNotImportFillets = false,
    bool doNotImportDittos = false,
    int dittoThreshold = 1,
    bool centerViewOnImportedObjects = true,
    bool importIntoFoldersMatchingCadFileHierarchy = false,
    bool removeEmptyFolders = true,
    int surfaceNormalsMode1Or2 = 1,
    bool promptOnMissingComponents = true,
    bool selectiveImport = false,
    bool surfaceCompatibilityMode = true,
    bool explodeSurfaces = false,
    string cadFileUnitsLeaveBlankToUseTheUnitsSpecifiedInTheFile = "",
    bool buildCalloutViews = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DirectCadAccessAsync(cadFileName: cadFileName);
```

Returns the 4 MP outputs in the named `DirectCadAccessResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export ASCII Frame Set

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export ASCII Frame Set](/mp-command-catalog/commands/file-operations#export-ascii-frame-set) · [gRPC contract](/api/grpc/file-operations#export-ascii-frame-set)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `frameSetContainer` | `CollectionObjectName` | `Frame Set Container` | Required |
| `dataDelimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `fileFormat` | `AsciiFileFormat` | `File Format` | Required |
| `includeExportFormatInfo` | `bool` | `Include Export Format Info?` | false |
| `decimalPrecision` | `int` | `Decimal Precision` | 6 |
| `append` | `bool` | `Append?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportAsciiFrameSetAsync(
    FileReference asciiFilePath,
    CollectionObjectName frameSetContainer,
    ExportDataDelimeterType dataDelimiter,
    AsciiFileFormat fileFormat,
    bool includeExportFormatInfo = false,
    int decimalPrecision = 6,
    bool append = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportAsciiFrameSetAsync(asciiFilePath: asciiFilePath, frameSetContainer: frameSetContainer, dataDelimiter: dataDelimiter, fileFormat: fileFormat);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export ASCII Frames

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export ASCII Frames](/mp-command-catalog/commands/file-operations#export-ascii-frames) · [gRPC contract](/api/grpc/file-operations#export-ascii-frames)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `objectList` | `IEnumerable<CollectionObjectName>` | `Object List` | Required |
| `exportFrameMode` | `string` | `Export Frame Mode` | Fixed XYZ |
| `overwriteExistingFile` | `bool` | `Overwrite existing file?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportAsciiFramesAsync(
    FileReference asciiFilePath,
    IEnumerable<CollectionObjectName> objectList,
    string exportFrameMode = "Fixed XYZ",
    bool overwriteExistingFile = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportAsciiFramesAsync(asciiFilePath: asciiFilePath, objectList: objectList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export ASCII Point Clouds

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export ASCII Point Clouds](/mp-command-catalog/commands/file-operations#export-ascii-point-clouds) · [gRPC contract](/api/grpc/file-operations#export-ascii-point-clouds)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `pointCloudList` | `IEnumerable<CollectionObjectName>` | `Point Cloud List` | Required |
| `dataDelimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `overwriteExistingFile` | `bool` | `Overwrite existing file?` | false |
| `showProgressDialog` | `bool` | `Show Progress Dialog?` | false |
| `includeCloudPointLabeling` | `bool` | `Include Cloud Point Labeling?` | false |
| `includeScanDirectionVector` | `bool` | `Include Scan Direction Vector?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportAsciiPointCloudsAsync(
    FileReference asciiFilePath,
    IEnumerable<CollectionObjectName> pointCloudList,
    ExportDataDelimeterType dataDelimiter,
    bool overwriteExistingFile = false,
    bool showProgressDialog = false,
    bool includeCloudPointLabeling = false,
    bool includeScanDirectionVector = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportAsciiPointCloudsAsync(asciiFilePath: asciiFilePath, pointCloudList: pointCloudList, dataDelimiter: dataDelimiter);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export ASCII Point Set

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export ASCII Point Set](/mp-command-catalog/commands/file-operations#export-ascii-point-set) · [gRPC contract](/api/grpc/file-operations#export-ascii-point-set)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `pointSetContainer` | `CollectionObjectName` | `Point Set Container` | Required |
| `dataDelimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `targetNameFormat` | `ExportTargetNameFormat` | `Target Name Format` | Required |
| `desiredCoordinateSystem` | `CoordinateSystemType` | `Desired Coordinate System` | Required |
| `includeTargetOffsets` | `bool` | `Include Target Offsets?` | false |
| `includeTimestamps` | `bool` | `Include Timestamps?` | false |
| `includeSaVersionAndFrameComments` | `bool` | `Include SA version and frame comments?` | false |
| `includeAxisComments` | `bool` | `Include Axis Comments?` | false |
| `includeExportFormatInfo` | `bool` | `Include Export Format Info?` | false |
| `maximumPrecisionScientificNotation` | `bool` | `Maximum Precision (Scientific Notation)?` | false |
| `decimalPrecision` | `int` | `Decimal Precision` | 6 |
| `append` | `bool` | `Append?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportAsciiPointSetAsync(
    FileReference asciiFilePath,
    CollectionObjectName pointSetContainer,
    ExportDataDelimeterType dataDelimiter,
    ExportTargetNameFormat targetNameFormat,
    CoordinateSystemType desiredCoordinateSystem,
    bool includeTargetOffsets = false,
    bool includeTimestamps = false,
    bool includeSaVersionAndFrameComments = false,
    bool includeAxisComments = false,
    bool includeExportFormatInfo = false,
    bool maximumPrecisionScientificNotation = false,
    int decimalPrecision = 6,
    bool append = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportAsciiPointSetAsync(asciiFilePath: asciiFilePath, pointSetContainer: pointSetContainer, dataDelimiter: dataDelimiter, targetNameFormat: targetNameFormat, desiredCoordinateSystem: desiredCoordinateSystem);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export ASCII Points

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export ASCII Points](/mp-command-catalog/commands/file-operations#export-ascii-points) · [gRPC contract](/api/grpc/file-operations#export-ascii-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `groupNamesToExport` | `IEnumerable<CollectionGroupName>` | `Group Names to export` | Required |
| `dataDelimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `targetNameFormat` | `ExportTargetNameFormat` | `Target Name Format` | Required |
| `desiredCoordinateSystem` | `CoordinateSystemType` | `Desired Coordinate System` | Required |
| `includeTargetOffsets` | `bool` | `Include Target Offsets?` | false |
| `includeTargetComments` | `bool` | `Include Target Comments?` | false |
| `includeTimestamps` | `bool` | `Include Timestamps?` | false |
| `includeTolerances` | `bool` | `Include Tolerances?` | false |
| `includeCoordinateUncertainties` | `bool` | `Include Coordinate Uncertainties?` | false |
| `includeSaVersionAndFrameComments` | `bool` | `Include SA version and frame comments?` | false |
| `includeAxisComments` | `bool` | `Include Axis Comments?` | false |
| `includeExportFormatInfo` | `bool` | `Include Export Format Info?` | false |
| `includeWeights` | `bool` | `Include Weights?` | false |
| `includeMeasurementDetails` | `bool` | `Include Measurement Details?` | false |
| `maximumPrecisionScientificNotation` | `bool` | `Maximum Precision (Scientific Notation)?` | false |
| `decimalPrecision` | `int` | `Decimal Precision` | 6 |
| `append` | `bool` | `Append?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportAsciiPointsAsync(
    FileReference asciiFilePath,
    IEnumerable<CollectionGroupName> groupNamesToExport,
    ExportDataDelimeterType dataDelimiter,
    ExportTargetNameFormat targetNameFormat,
    CoordinateSystemType desiredCoordinateSystem,
    bool includeTargetOffsets = false,
    bool includeTargetComments = false,
    bool includeTimestamps = false,
    bool includeTolerances = false,
    bool includeCoordinateUncertainties = false,
    bool includeSaVersionAndFrameComments = false,
    bool includeAxisComments = false,
    bool includeExportFormatInfo = false,
    bool includeWeights = false,
    bool includeMeasurementDetails = false,
    bool maximumPrecisionScientificNotation = false,
    int decimalPrecision = 6,
    bool append = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportAsciiPointsAsync(asciiFilePath: asciiFilePath, groupNamesToExport: groupNamesToExport, dataDelimiter: dataDelimiter, targetNameFormat: targetNameFormat, desiredCoordinateSystem: desiredCoordinateSystem);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export DXF

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export DXF](/mp-command-catalog/commands/file-operations#export-dxf) · [gRPC contract](/api/grpc/file-operations#export-dxf)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dxfFilePath` | `FileReference` | `DXF File Path` | Required |
| `pointNames` | `IEnumerable<PointName>` | `Point Names` | Required |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `includePointLabels` | `bool` | `Include Point Labels?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportDxfAsync(
    FileReference dxfFilePath,
    IEnumerable<PointName> pointNames,
    IEnumerable<CollectionObjectName> cloudNames,
    bool includePointLabels = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportDxfAsync(dxfFilePath: dxfFilePath, pointNames: pointNames, cloudNames: cloudNames);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export Embedded File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export Embedded File](/mp-command-catalog/commands/file-operations#export-embedded-file) · [gRPC contract](/api/grpc/file-operations#export-embedded-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `embeddedFileCollectionName` | `CollectionName` | `Embedded File Collection Name` | Required |
| `embeddedFileName` | `string` | `Embedded File Name` | Empty |
| `externalFileName` | `FileReference` | `External File Name` | Required |
| `replaceExisting` | `bool` | `Replace Existing?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportEmbeddedFileAsync(
    CollectionName embeddedFileCollectionName,
    string embeddedFileName,
    FileReference externalFileName,
    bool replaceExisting = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportEmbeddedFileAsync(embeddedFileCollectionName: embeddedFileCollectionName, embeddedFileName: embeddedFileName, externalFileName: externalFileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export Hidden Point Bar XML File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export Hidden Point Bar XML File](/mp-command-catalog/commands/file-operations#export-hidden-point-bar-xml-file) · [gRPC contract](/api/grpc/file-operations#export-hidden-point-bar-xml-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `xmlFilePath` | `FileReference` | `XML File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportHiddenPointBarXmlFileAsync(
    FileReference xmlFilePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportHiddenPointBarXmlFileAsync(xmlFilePath: xmlFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export IGES File  - Entire Model

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export IGES File  - Entire Model](/mp-command-catalog/commands/file-operations#export-iges-file----entire-model) · [gRPC contract](/api/grpc/file-operations#export-iges-file----entire-model)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `igesFilePath` | `FileReference` | `IGES File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportIgesFileEntireModelAsync(
    FileReference igesFilePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportIgesFileEntireModelAsync(igesFilePath: igesFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export IGES File - Partial Model

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export IGES File - Partial Model](/mp-command-catalog/commands/file-operations#export-iges-file---partial-model) · [gRPC contract](/api/grpc/file-operations#export-iges-file---partial-model)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `igesFilePath` | `FileReference` | `IGES File Path` | Required |
| `objectNameList` | `IEnumerable<CollectionObjectName>` | `Object Name List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportIgesFilePartialModelAsync(
    FileReference igesFilePath,
    IEnumerable<CollectionObjectName> objectNameList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportIgesFilePartialModelAsync(igesFilePath: igesFilePath, objectNameList: objectNameList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export PTX Point Clouds

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export PTX Point Clouds](/mp-command-catalog/commands/file-operations#export-ptx-point-clouds) · [gRPC contract](/api/grpc/file-operations#export-ptx-point-clouds)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ptxFilePath` | `FileReference` | `PTX File Path` | Required |
| `pointCloudList` | `IEnumerable<CollectionObjectName>` | `Point Cloud List` | Required |
| `overwriteExistingFile` | `bool` | `Overwrite existing file?` | false |
| `showProgressDialog` | `bool` | `Show Progress Dialog?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportPtxPointCloudsAsync(
    FileReference ptxFilePath,
    IEnumerable<CollectionObjectName> pointCloudList,
    bool overwriteExistingFile = false,
    bool showProgressDialog = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportPtxPointCloudsAsync(ptxFilePath: ptxFilePath, pointCloudList: pointCloudList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export QDAS Characteristics

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export QDAS Characteristics](/mp-command-catalog/commands/file-operations#export-qdas-characteristics) · [gRPC contract](/api/grpc/file-operations#export-qdas-characteristics)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `qdasExportFilePath` | `FileReference` | `QDAS Export File Path` | Required |
| `k1001PartNumber` | `string` | `K1001: Part Number` | Empty |
| `k1002PartDescription` | `string` | `K1002: Part Description` | Empty |
| `k1071SupplierNumber` | `string` | `K1071: Supplier Number` | Empty |
| `k1072SupplierDescription` | `string` | `K1072: Supplier Description` | Empty |
| `k1203ReasonForTest` | `string` | `K1203: Reason for Test` | Empty |
| `k1303Plant` | `string` | `K1303: Plant` | Empty |
| `k1900PartRemark` | `string` | `K1900: Part Remark` | Empty |
| `k0006BatchNumber` | `string` | `K0006: Batch Number` | Empty |
| `k0014PartId` | `string` | `K0014: Part ID` | Empty |
| `k0053OrderNumber` | `string` | `K0053: Order Number` | Empty |
| `k0004DateTimeStamp` | `string` | `K0004: Date Time Stamp` | 2026-07-20/16:32:22 |
| `k0008OperatorIdentifier` | `int` | `K0008: Operator Identifier` | -1 |
| `k0010MachineIdentifier` | `int` | `K0010: Machine Identifier` | -1 |
| `k0012GageIdentifier` | `int` | `K0012: Gage Identifier` | -1 |
| `relationshipList` | `IEnumerable<CollectionObjectName>` | `Relationship List` | Required |
| `featureCheckList` | `IEnumerable<CollectionObjectName>` | `Feature Check List` | Required |
| `vectorGroupList` | `IEnumerable<CollectionObjectName>` | `Vector Group List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportQdasCharacteristicsAsync(
    FileReference qdasExportFilePath,
    string k1001PartNumber,
    string k1002PartDescription,
    string k1071SupplierNumber,
    string k1072SupplierDescription,
    string k1203ReasonForTest,
    string k1303Plant,
    string k1900PartRemark,
    string k0006BatchNumber,
    string k0014PartId,
    string k0053OrderNumber,
    string k0004DateTimeStamp,
    int k0008OperatorIdentifier,
    int k0010MachineIdentifier,
    int k0012GageIdentifier,
    IEnumerable<CollectionObjectName> relationshipList,
    IEnumerable<CollectionObjectName> featureCheckList,
    IEnumerable<CollectionObjectName> vectorGroupList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportQdasCharacteristicsAsync(qdasExportFilePath: qdasExportFilePath, k1001PartNumber: k1001PartNumber, k1002PartDescription: k1002PartDescription, k1071SupplierNumber: k1071SupplierNumber, k1072SupplierDescription: k1072SupplierDescription, k1203ReasonForTest: k1203ReasonForTest, k1303Plant: k1303Plant, k1900PartRemark: k1900PartRemark, k0006BatchNumber: k0006BatchNumber, k0014PartId: k0014PartId, k0053OrderNumber: k0053OrderNumber, k0004DateTimeStamp: k0004DateTimeStamp, k0008OperatorIdentifier: k0008OperatorIdentifier, k0010MachineIdentifier: k0010MachineIdentifier, k0012GageIdentifier: k0012GageIdentifier, relationshipList: relationshipList, featureCheckList: featureCheckList, vectorGroupList: vectorGroupList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export QDAS Data List

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export QDAS Data List](/mp-command-catalog/commands/file-operations#export-qdas-data-list) · [gRPC contract](/api/grpc/file-operations#export-qdas-data-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `qdasExportFilePath` | `FileReference` | `QDAS Export File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportQdasDataListAsync(
    FileReference qdasExportFilePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportQdasDataListAsync(qdasExportFilePath: qdasExportFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export Scan Stripe Mesh to STL File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export Scan Stripe Mesh to STL File](/mp-command-catalog/commands/file-operations#export-scan-stripe-mesh-to-stl-file) · [gRPC contract](/api/grpc/file-operations#export-scan-stripe-mesh-to-stl-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stlFilePath` | `FileReference` | `STL File Path` | Required |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportScanStripeMeshToStlFileAsync(
    FileReference stlFilePath,
    CollectionObjectName mesh,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportScanStripeMeshToStlFileAsync(stlFilePath: stlFilePath, mesh: mesh);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export STEP File - Entire Model

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export STEP File - Entire Model](/mp-command-catalog/commands/file-operations#export-step-file---entire-model) · [gRPC contract](/api/grpc/file-operations#export-step-file---entire-model)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stepFilePath` | `FileReference` | `STEP File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportStepFileEntireModelAsync(
    FileReference stepFilePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportStepFileEntireModelAsync(stepFilePath: stepFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export STEP File - Partial Model

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export STEP File - Partial Model](/mp-command-catalog/commands/file-operations#export-step-file---partial-model) · [gRPC contract](/api/grpc/file-operations#export-step-file---partial-model)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stepFilePath` | `FileReference` | `STEP File Path` | Required |
| `objectNameList` | `IEnumerable<CollectionObjectName>` | `Object Name List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportStepFilePartialModelAsync(
    FileReference stepFilePath,
    IEnumerable<CollectionObjectName> objectNameList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportStepFilePartialModelAsync(stepFilePath: stepFilePath, objectNameList: objectNameList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export VDA/FS File  - Entire Model

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export VDA/FS File  - Entire Model](/mp-command-catalog/commands/file-operations#export-vdafs-file----entire-model) · [gRPC contract](/api/grpc/file-operations#export-vdafs-file----entire-model)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vdaFsFilePath` | `FileReference` | `VDA/FS File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportVdaFsFileEntireModelAsync(
    FileReference vdaFsFilePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportVdaFsFileEntireModelAsync(vdaFsFilePath: vdaFsFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export VDA/FS File - Partial Model

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export VDA/FS File - Partial Model](/mp-command-catalog/commands/file-operations#export-vdafs-file---partial-model) · [gRPC contract](/api/grpc/file-operations#export-vdafs-file---partial-model)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vdaFsFilePath` | `FileReference` | `VDA/FS File Path` | Required |
| `objectNameList` | `IEnumerable<CollectionObjectName>` | `Object Name List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportVdaFsFilePartialModelAsync(
    FileReference vdaFsFilePath,
    IEnumerable<CollectionObjectName> objectNameList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportVdaFsFilePartialModelAsync(vdaFsFilePath: vdaFsFilePath, objectNameList: objectNameList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export Vector Container to ASCII File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Export Vector Container to ASCII File](/mp-command-catalog/commands/file-operations#export-vector-container-to-ascii-file) · [gRPC contract](/api/grpc/file-operations#export-vector-container-to-ascii-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `Ascii File Path` | Required |
| `vectorGroupsToExport` | `IEnumerable<CollectionVectorGroupName>` | `Vector group(s) to export` | Required |
| `overwriteExistingFileFalseAppend` | `bool` | `Overwrite existing file? (FALSE = Append)` | true |
| `useFullPrecisionScientificNotation` | `bool` | `Use Full Precision (Scientific Notation)?` | false |
| `vectorNameFormat` | `Vector` | `Vector Name Format` | Required |
| `includeVectorLength` | `bool` | `Include Vector Length?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportVectorContainerToAsciiFileAsync(
    FileReference asciiFilePath,
    IEnumerable<CollectionVectorGroupName> vectorGroupsToExport,
    bool overwriteExistingFileFalseAppend,
    bool useFullPrecisionScientificNotation,
    Vector vectorNameFormat,
    bool includeVectorLength = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportVectorContainerToAsciiFileAsync(asciiFilePath: asciiFilePath, vectorGroupsToExport: vectorGroupsToExport, overwriteExistingFileFalseAppend: overwriteExistingFileFalseAppend, useFullPrecisionScientificNotation: useFullPrecisionScientificNotation, vectorNameFormat: vectorNameFormat);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Find Files in Directory

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Find Files in Directory](/mp-command-catalog/commands/file-operations#find-files-in-directory) · [gRPC contract](/api/grpc/file-operations#find-files-in-directory)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `directory` | `string` | `Directory` | Empty |
| `fileNamePattern` | `string` | `File Name Pattern` | *.* |
| `recursive` | `bool` | `Recursive?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Files` | `string[]` | `Files` |

```csharp
public Task<string[]> FindFilesInDirectoryAsync(
    string directory = "",
    string fileNamePattern = "*.*",
    bool recursive = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FindFilesInDirectoryAsync();
```

Returns the MP output `Files` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Find Sub-Directories in Directory

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Find Sub-Directories in Directory](/mp-command-catalog/commands/file-operations#find-sub-directories-in-directory) · [gRPC contract](/api/grpc/file-operations#find-sub-directories-in-directory)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `directory` | `string` | `Directory` | Empty |
| `recursive` | `bool` | `Recursive?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `SubDirectories` | `string[]` | `Sub-Directories` |

```csharp
public Task<string[]> FindSubDirectoriesInDirectoryAsync(
    string directory = "",
    bool recursive = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FindSubDirectoriesInDirectoryAsync();
```

Returns the MP output `Sub-Directories` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Boolean From DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Boolean From DataShare File](/mp-command-catalog/commands/file-operations#get-boolean-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-boolean-from-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `booleanName` | `string` | `Boolean Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `BooleanValue` | `bool` | `Boolean Value` |

```csharp
public Task<bool> GetBooleanFromDataShareFileAsync(
    FileReference dataShareFilePath,
    string booleanName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetBooleanFromDataShareFileAsync(dataShareFilePath: dataShareFilePath);
```

Returns the MP output `Boolean Value` directly as `bool`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Double From DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Double From DataShare File](/mp-command-catalog/commands/file-operations#get-double-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-double-from-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `doubleName` | `string` | `Double Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `DoubleValue` | `double` | `Double Value` |

```csharp
public Task<double> GetDoubleFromDataShareFileAsync(
    FileReference dataShareFilePath,
    string doubleName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetDoubleFromDataShareFileAsync(dataShareFilePath: dataShareFilePath);
```

Returns the MP output `Double Value` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Integer From DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Integer From DataShare File](/mp-command-catalog/commands/file-operations#get-integer-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-integer-from-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `integerName` | `string` | `Integer Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `IntegerValue` | `int` | `Integer Value` |

```csharp
public Task<int> GetIntegerFromDataShareFileAsync(
    FileReference dataShareFilePath,
    string integerName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetIntegerFromDataShareFileAsync(dataShareFilePath: dataShareFilePath);
```

Returns the MP output `Integer Value` directly as `int`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get QDAS Catalog Entries

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get QDAS Catalog Entries](/mp-command-catalog/commands/file-operations#get-qdas-catalog-entries) · [gRPC contract](/api/grpc/file-operations#get-qdas-catalog-entries)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `kFieldTarget` | `string` | `K-Field Target` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `CatalogEntries` | `string[]` | `Catalog Entries` |

```csharp
public Task<string[]> GetQdasCatalogEntriesAsync(
    string kFieldTarget = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetQdasCatalogEntriesAsync();
```

Returns the MP output `Catalog Entries` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get String From DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get String From DataShare File](/mp-command-catalog/commands/file-operations#get-string-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-string-from-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `stringName` | `string` | `String Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `StringValue` | `string` | `String Value` |

```csharp
public Task<string> GetStringFromDataShareFileAsync(
    FileReference dataShareFilePath,
    string stringName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetStringFromDataShareFileAsync(dataShareFilePath: dataShareFilePath);
```

Returns the MP output `String Value` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Transform From DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Transform From DataShare File](/mp-command-catalog/commands/file-operations#get-transform-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-transform-from-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `transformName` | `string` | `Transform Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TransformValue` | `Transform` | `Transform Value` |

```csharp
public Task<Transform> GetTransformFromDataShareFileAsync(
    FileReference dataShareFilePath,
    string transformName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetTransformFromDataShareFileAsync(dataShareFilePath: dataShareFilePath);
```

Returns the MP output `Transform Value` directly as `Transform`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Vector From DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Vector From DataShare File](/mp-command-catalog/commands/file-operations#get-vector-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-vector-from-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `vectorName` | `string` | `Vector Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `VectorValue` | `Vector` | `Vector Value` |

```csharp
public Task<Vector> GetVectorFromDataShareFileAsync(
    FileReference dataShareFilePath,
    string vectorName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetVectorFromDataShareFileAsync(dataShareFilePath: dataShareFilePath);
```

Returns the MP output `Vector Value` directly as `Vector`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Working Directory

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Working Directory](/mp-command-catalog/commands/file-operations#get-working-directory) · [gRPC contract](/api/grpc/file-operations#get-working-directory)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Directory` | `string` | `Directory` |

```csharp
public Task<string> GetWorkingDirectoryAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetWorkingDirectoryAsync();
```

Returns the MP output `Directory` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import ASCII: Predefined Formats

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import ASCII: Predefined Formats](/mp-command-catalog/commands/file-operations#import-ascii-predefined-formats) · [gRPC contract](/api/grpc/file-operations#import-ascii-predefined-formats)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `fileFormat` | `AsciiFileFormat` | `File Format` | Required |
| `units` | `DistanceUnits` | `Units` | Inches |
| `angularUnits` | `AngularUnits` | `Angular Units` | Degrees |
| `groupName` | `CollectionObjectName` | `Group Name` | Required |
| `importAsCloud` | `bool` | `Import as Cloud` | false |
| `ensureNewPointGroup` | `bool` | `Ensure New Point Group` | true |
| `ensureUniqueNames` | `bool` | `Ensure Unique Names` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportAsciiPredefinedFormatsAsync(
    FileReference asciiFilePath,
    AsciiFileFormat fileFormat,
    DistanceUnits units,
    AngularUnits angularUnits,
    CollectionObjectName groupName,
    bool importAsCloud = false,
    bool ensureNewPointGroup = true,
    bool ensureUniqueNames = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportAsciiPredefinedFormatsAsync(asciiFilePath: asciiFilePath, fileFormat: fileFormat, units: units, angularUnits: angularUnits, groupName: groupName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import ASCII: Predefined Frame Set Formats

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import ASCII: Predefined Frame Set Formats](/mp-command-catalog/commands/file-operations#import-ascii-predefined-frame-set-formats) · [gRPC contract](/api/grpc/file-operations#import-ascii-predefined-frame-set-formats)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `fileFormat` | `AsciiFileFormat` | `File Format` | Required |
| `units` | `DistanceUnits` | `Units` | Inches |
| `angularUnits` | `AngularUnits` | `Angular Units` | Degrees |
| `frameSetContainerName` | `CollectionObjectName` | `Frame Set Container Name` | Required |
| `ensureUniqueName` | `bool` | `Ensure Unique Name` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportAsciiPredefinedFrameSetFormatsAsync(
    FileReference asciiFilePath,
    AsciiFileFormat fileFormat,
    DistanceUnits units,
    AngularUnits angularUnits,
    CollectionObjectName frameSetContainerName,
    bool ensureUniqueName = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportAsciiPredefinedFrameSetFormatsAsync(asciiFilePath: asciiFilePath, fileFormat: fileFormat, units: units, angularUnits: angularUnits, frameSetContainerName: frameSetContainerName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import E57 File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import E57 File](/mp-command-catalog/commands/file-operations#import-e57-file) · [gRPC contract](/api/grpc/file-operations#import-e57-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `e57FilePath` | `FileReference` | `E57 File Path` | Required |
| `saveConvertedFile` | `bool` | `Save Converted File` | false |
| `useSquareRootOfIntensity` | `bool` | `Use Square Root of Intensity` | true |
| `automaticallyCloseConverter` | `bool` | `Automatically Close Converter` | true |
| `prioritizeColorOverIntensity` | `bool` | `Prioritize Color Over Intensity` | true |
| `importScanBlocksAsSeparateClouds` | `bool` | `Import Scan Blocks As Separate Clouds` | false |
| `units` | `DistanceUnits` | `Units` | Inches |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportE57FileAsync(
    FileReference e57FilePath,
    bool saveConvertedFile,
    bool useSquareRootOfIntensity,
    bool automaticallyCloseConverter,
    bool prioritizeColorOverIntensity,
    bool importScanBlocksAsSeparateClouds,
    DistanceUnits units,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportE57FileAsync(e57FilePath: e57FilePath, saveConvertedFile: saveConvertedFile, useSquareRootOfIntensity: useSquareRootOfIntensity, automaticallyCloseConverter: automaticallyCloseConverter, prioritizeColorOverIntensity: prioritizeColorOverIntensity, importScanBlocksAsSeparateClouds: importScanBlocksAsSeparateClouds, units: units);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import File as Embedded File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import File as Embedded File](/mp-command-catalog/commands/file-operations#import-file-as-embedded-file) · [gRPC contract](/api/grpc/file-operations#import-file-as-embedded-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `externalFileName` | `FileReference` | `External File Name` | Required |
| `replaceExisting` | `bool` | `Replace Existing?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportFileAsEmbeddedFileAsync(
    FileReference externalFileName,
    bool replaceExisting = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportFileAsEmbeddedFileAsync(externalFileName: externalFileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import File as Picture

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import File as Picture](/mp-command-catalog/commands/file-operations#import-file-as-picture) · [gRPC contract](/api/grpc/file-operations#import-file-as-picture)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `externalFileName` | `FileReference` | `External File Name` | Required |
| `replaceExisting` | `bool` | `Replace Existing?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportFileAsPictureAsync(
    FileReference externalFileName,
    bool replaceExisting = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportFileAsPictureAsync(externalFileName: externalFileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import Hidden Point Bar XML File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import Hidden Point Bar XML File](/mp-command-catalog/commands/file-operations#import-hidden-point-bar-xml-file) · [gRPC contract](/api/grpc/file-operations#import-hidden-point-bar-xml-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `xmlFilePath` | `FileReference` | `XML File Path` | Required |
| `replaceExistingEntries` | `bool` | `Replace Existing Entries?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportHiddenPointBarXmlFileAsync(
    FileReference xmlFilePath,
    bool replaceExistingEntries = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportHiddenPointBarXmlFileAsync(xmlFilePath: xmlFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import IGES File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import IGES File](/mp-command-catalog/commands/file-operations#import-iges-file) · [gRPC contract](/api/grpc/file-operations#import-iges-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `igesFilePath` | `FileReference` | `IGES File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportIgesFileAsync(
    FileReference igesFilePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportIgesFileAsync(igesFilePath: igesFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import Leica GSI File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import Leica GSI File](/mp-command-catalog/commands/file-operations#import-leica-gsi-file) · [gRPC contract](/api/grpc/file-operations#import-leica-gsi-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrumentId` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `groupName` | `CollectionObjectName` | `Group Name` | Required |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportLeicaGsiFileAsync(
    CollectionInstrumentId instrumentId,
    CollectionObjectName groupName,
    FileReference filePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportLeicaGsiFileAsync(instrumentId: instrumentId, groupName: groupName, filePath: filePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import Leica SDB File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import Leica SDB File](/mp-command-catalog/commands/file-operations#import-leica-sdb-file) · [gRPC contract](/api/grpc/file-operations#import-leica-sdb-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrumentId` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `scanCloudName` | `CollectionObjectName` | `Scan Cloud Name` | Required |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportLeicaSdbFileAsync(
    CollectionInstrumentId instrumentId,
    CollectionObjectName scanCloudName,
    FileReference filePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportLeicaSdbFileAsync(instrumentId: instrumentId, scanCloudName: scanCloudName, filePath: filePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import MP File as Embedded MP

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import MP File as Embedded MP](/mp-command-catalog/commands/file-operations#import-mp-file-as-embedded-mp) · [gRPC contract](/api/grpc/file-operations#import-mp-file-as-embedded-mp)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `externalMpFileName` | `FileReference` | `External MP File Name` | Required |
| `replaceExisting` | `bool` | `Replace Existing?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportMpFileAsEmbeddedMpAsync(
    FileReference externalMpFileName,
    bool replaceExisting = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportMpFileAsEmbeddedMpAsync(externalMpFileName: externalMpFileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import Nominals from XML File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import Nominals from XML File](/mp-command-catalog/commands/file-operations#import-nominals-from-xml-file) · [gRPC contract](/api/grpc/file-operations#import-nominals-from-xml-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportNominalsFromXmlFileAsync(
    FileReference filePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportNominalsFromXmlFileAsync(filePath: filePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import Polyworks File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import Polyworks File](/mp-command-catalog/commands/file-operations#import-polyworks-file) · [gRPC contract](/api/grpc/file-operations#import-polyworks-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudName` | `CollectionObjectName` | `Cloud Name` | Required |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportPolyworksFileAsync(
    CollectionObjectName cloudName,
    FileReference filePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportPolyworksFileAsync(cloudName: cloudName, filePath: filePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import QDAS Catalog File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import QDAS Catalog File](/mp-command-catalog/commands/file-operations#import-qdas-catalog-file) · [gRPC contract](/api/grpc/file-operations#import-qdas-catalog-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `qdasDfdFilePath` | `FileReference` | `QDAS DFD File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportQdasCatalogFileAsync(
    FileReference qdasDfdFilePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportQdasCatalogFileAsync(qdasDfdFilePath: qdasDfdFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import SA File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import SA File](/mp-command-catalog/commands/file-operations#import-sa-file) · [gRPC contract](/api/grpc/file-operations#import-sa-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `saFileName` | `FileReference` | `SA File Name` | Required |
| `allowOperatorSelections` | `bool` | `Allow Operator Selections` | false |
| `selectedCollectionsOptional` | `IEnumerable<string>` | `Selected Collections (optional)` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportSaFileAsync(
    FileReference saFileName,
    bool allowOperatorSelections,
    IEnumerable<string> selectedCollectionsOptional,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportSaFileAsync(saFileName: saFileName, allowOperatorSelections: allowOperatorSelections, selectedCollectionsOptional: selectedCollectionsOptional);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import SA Windows Placement

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import SA Windows Placement](/mp-command-catalog/commands/file-operations#import-sa-windows-placement) · [gRPC contract](/api/grpc/file-operations#import-sa-windows-placement)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportSaWindowsPlacementAsync(
    FileReference filePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportSaWindowsPlacementAsync(filePath: filePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import SAT File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import SAT File](/mp-command-catalog/commands/file-operations#import-sat-file) · [gRPC contract](/api/grpc/file-operations#import-sat-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `satFilePath` | `FileReference` | `SAT File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportSatFileAsync(
    FileReference satFilePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportSatFileAsync(satFilePath: satFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import STEP File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import STEP File](/mp-command-catalog/commands/file-operations#import-step-file) · [gRPC contract](/api/grpc/file-operations#import-step-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stepFilePath` | `FileReference` | `STEP File Path` | Required |
| `displayEntityFilters` | `bool` | `Display Entity Filters` | false |
| `displayResiduals` | `bool` | `Display Residuals` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportStepFileAsync(
    FileReference stepFilePath,
    bool displayEntityFilters = false,
    bool displayResiduals = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportStepFileAsync(stepFilePath: stepFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import STL File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import STL File](/mp-command-catalog/commands/file-operations#import-stl-file) · [gRPC contract](/api/grpc/file-operations#import-stl-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stlFilePath` | `FileReference` | `STL File Path` | Required |
| `units` | `DistanceUnits` | `Units` | Millimeters |
| `importMesh` | `bool` | `Import Mesh` | true |
| `importPointCloud` | `bool` | `Import Point Cloud` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportStlFileAsync(
    FileReference stlFilePath,
    DistanceUnits units,
    bool importMesh = true,
    bool importPointCloud = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportStlFileAsync(stlFilePath: stlFilePath, units: units);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import VDA/FS File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import VDA/FS File](/mp-command-catalog/commands/file-operations#import-vdafs-file) · [gRPC contract](/api/grpc/file-operations#import-vdafs-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vdaFsFilePath` | `FileReference` | `VDA/FS File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportVdaFsFileAsync(
    FileReference vdaFsFilePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportVdaFsFileAsync(vdaFsFilePath: vdaFsFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import VSTARS .xyz File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import VSTARS .xyz File](/mp-command-catalog/commands/file-operations#import-vstars-xyz-file) · [gRPC contract](/api/grpc/file-operations#import-vstars-xyz-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportVstarsXyzFileAsync(
    FileReference filePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportVstarsXyzFileAsync(filePath: filePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import VSTARS Cameras

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import VSTARS Cameras](/mp-command-catalog/commands/file-operations#import-vstars-cameras) · [gRPC contract](/api/grpc/file-operations#import-vstars-cameras)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportVstarsCamerasAsync(
    FileReference filePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportVstarsCamerasAsync(filePath: filePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Load HTML Form

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Load HTML Form](/mp-command-catalog/commands/file-operations#load-html-form) · [gRPC contract](/api/grpc/file-operations#load-html-form)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `inputHtmlFormPath` | `FileReference` | `Input HTML Form Path` | Required |
| `windowWidth` | `int` | `Window Width` | 1000 |
| `windowHeight` | `int` | `Window Height` | 800 |
| `inputDataShareFilePath` | `FileReference` | `Input DataShare File Path` | Required |
| `outputDataShareFilePath` | `FileReference` | `Output DataShare File Path` | Required |
| `saveInBinaryFormat` | `bool` | `Save in Binary Format?` | false |
| `saveButtonText` | `string` | `Save Button Text` | Save |
| `cancelButtonText` | `string` | `Cancel Button Text` | Cancel |
| `hideSaveAndCancelButtons` | `bool` | `Hide Save and Cancel buttons?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task LoadHtmlFormAsync(
    FileReference inputHtmlFormPath,
    int windowWidth,
    int windowHeight,
    FileReference inputDataShareFilePath,
    FileReference outputDataShareFilePath,
    bool saveInBinaryFormat = false,
    string saveButtonText = "Save",
    string cancelButtonText = "Cancel",
    bool hideSaveAndCancelButtons = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.LoadHtmlFormAsync(inputHtmlFormPath: inputHtmlFormPath, windowWidth: windowWidth, windowHeight: windowHeight, inputDataShareFilePath: inputDataShareFilePath, outputDataShareFilePath: outputDataShareFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Load HTML Form in Edge Browser

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Load HTML Form in Edge Browser](/mp-command-catalog/commands/file-operations#load-html-form-in-edge-browser) · [gRPC contract](/api/grpc/file-operations#load-html-form-in-edge-browser)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `inputHtmlFormPath` | `FileReference` | `Input HTML Form Path` | Required |
| `windowWidth` | `int` | `Window Width` | 1000 |
| `windowHeight` | `int` | `Window Height` | 800 |
| `inputDataShareFilePath` | `FileReference` | `Input DataShare File Path` | Required |
| `outputDataShareFilePath` | `FileReference` | `Output DataShare File Path` | Required |
| `saveInBinaryFormat` | `bool` | `Save in Binary Format?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task LoadHtmlFormInEdgeBrowserAsync(
    FileReference inputHtmlFormPath,
    int windowWidth,
    int windowHeight,
    FileReference inputDataShareFilePath,
    FileReference outputDataShareFilePath,
    bool saveInBinaryFormat = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.LoadHtmlFormInEdgeBrowserAsync(inputHtmlFormPath: inputHtmlFormPath, windowWidth: windowWidth, windowHeight: windowHeight, inputDataShareFilePath: inputDataShareFilePath, outputDataShareFilePath: outputDataShareFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Embedded File Name List

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Embedded File Name List](/mp-command-catalog/commands/file-operations#make-embedded-file-name-list) · [gRPC contract](/api/grpc/file-operations#make-embedded-file-name-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collectionWildcardCriteria` | `string` | `Collection Wildcard Criteria` | * |
| `fileNamePattern` | `string` | `File Name Pattern` | *.* |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `EmbeddedFiles` | `string[]` | `Embedded Files` |

```csharp
public Task<string[]> MakeEmbeddedFileNameListAsync(
    string collectionWildcardCriteria = "*",
    string fileNamePattern = "*.*",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeEmbeddedFileNameListAsync();
```

Returns the MP output `Embedded Files` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Merge Measurements into XML File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Merge Measurements into XML File](/mp-command-catalog/commands/file-operations#merge-measurements-into-xml-file) · [gRPC contract](/api/grpc/file-operations#merge-measurements-into-xml-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |
| `groupName` | `CollectionObjectName` | `Group Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MergeMeasurementsIntoXmlFileAsync(
    FileReference filePath,
    CollectionObjectName groupName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MergeMeasurementsIntoXmlFileAsync(filePath: filePath, groupName: groupName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## New SA File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[New SA File](/mp-command-catalog/commands/file-operations#new-sa-file) · [gRPC contract](/api/grpc/file-operations#new-sa-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task NewSaFileAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.NewSaFileAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Open SA File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Open SA File](/mp-command-catalog/commands/file-operations#open-sa-file) · [gRPC contract](/api/grpc/file-operations#open-sa-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `saFileName` | `FileReference` | `SA File Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task OpenSaFileAsync(
    FileReference saFileName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.OpenSaFileAsync(saFileName: saFileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Open Template File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Open Template File](/mp-command-catalog/commands/file-operations#open-template-file) · [gRPC contract](/api/grpc/file-operations#open-template-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `templateFileName` | `FileReference` | `Template File Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task OpenTemplateFileAsync(
    FileReference templateFileName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.OpenTemplateFileAsync(templateFileName: templateFileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Pop PolyBay Analysis Window

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Pop PolyBay Analysis Window](/mp-command-catalog/commands/file-operations#pop-polybay-analysis-window) · [gRPC contract](/api/grpc/file-operations#pop-polybay-analysis-window)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `materialsFilePath` | `string` | `Materials File Path` | Empty |
| `bayFilePath` | `string` | `Bay File Path` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task PopPolyBayAnalysisWindowAsync(
    string materialsFilePath = "",
    string bayFilePath = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.PopPolyBayAnalysisWindowAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Prepare QDAS Data List

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Prepare QDAS Data List](/mp-command-catalog/commands/file-operations#prepare-qdas-data-list) · [gRPC contract](/api/grpc/file-operations#prepare-qdas-data-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `k1001PartNumber` | `string` | `K1001: Part Number` | Empty |
| `k1002PartDescription` | `string` | `K1002: Part Description` | Empty |
| `k1071SupplierNumber` | `string` | `K1071: Supplier Number` | Empty |
| `k1072SupplierDescription` | `string` | `K1072: Supplier Description` | Empty |
| `k1203ReasonForTest` | `string` | `K1203: Reason for Test` | Empty |
| `k1303Plant` | `string` | `K1303: Plant` | Empty |
| `k1900PartRemark` | `string` | `K1900: Part Remark` | Empty |
| `k0006BatchNumber` | `string` | `K0006: Batch Number` | Empty |
| `k0014PartId` | `string` | `K0014: Part ID` | Empty |
| `k0053OrderNumber` | `string` | `K0053: Order Number` | Empty |
| `k0004DateTimeStamp` | `string` | `K0004: Date Time Stamp` | 2026-07-20/16:32:22 |
| `k0008OperatorIdentifier` | `int` | `K0008: Operator Identifier` | -1 |
| `k0010MachineIdentifier` | `int` | `K0010: Machine Identifier` | -1 |
| `k0012GageIdentifier` | `int` | `K0012: Gage Identifier` | -1 |
| `relationshipList` | `IEnumerable<CollectionObjectName>` | `Relationship List` | Required |
| `featureCheckList` | `IEnumerable<CollectionObjectName>` | `Feature Check List` | Required |
| `vectorGroupList` | `IEnumerable<CollectionObjectName>` | `Vector Group List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task PrepareQdasDataListAsync(
    string k1001PartNumber,
    string k1002PartDescription,
    string k1071SupplierNumber,
    string k1072SupplierDescription,
    string k1203ReasonForTest,
    string k1303Plant,
    string k1900PartRemark,
    string k0006BatchNumber,
    string k0014PartId,
    string k0053OrderNumber,
    string k0004DateTimeStamp,
    int k0008OperatorIdentifier,
    int k0010MachineIdentifier,
    int k0012GageIdentifier,
    IEnumerable<CollectionObjectName> relationshipList,
    IEnumerable<CollectionObjectName> featureCheckList,
    IEnumerable<CollectionObjectName> vectorGroupList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.PrepareQdasDataListAsync(k1001PartNumber: k1001PartNumber, k1002PartDescription: k1002PartDescription, k1071SupplierNumber: k1071SupplierNumber, k1072SupplierDescription: k1072SupplierDescription, k1203ReasonForTest: k1203ReasonForTest, k1303Plant: k1303Plant, k1900PartRemark: k1900PartRemark, k0006BatchNumber: k0006BatchNumber, k0014PartId: k0014PartId, k0053OrderNumber: k0053OrderNumber, k0004DateTimeStamp: k0004DateTimeStamp, k0008OperatorIdentifier: k0008OperatorIdentifier, k0010MachineIdentifier: k0010MachineIdentifier, k0012GageIdentifier: k0012GageIdentifier, relationshipList: relationshipList, featureCheckList: featureCheckList, vectorGroupList: vectorGroupList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Rename General File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Rename General File](/mp-command-catalog/commands/file-operations#rename-general-file) · [gRPC contract](/api/grpc/file-operations#rename-general-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceFileName` | `FileReference` | `Source File Name` | Required |
| `destinationFileName` | `FileReference` | `Destination File Name` | Required |
| `overwrite` | `bool` | `Overwrite?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task RenameGeneralFileAsync(
    FileReference sourceFileName,
    FileReference destinationFileName,
    bool overwrite = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RenameGeneralFileAsync(sourceFileName: sourceFileName, destinationFileName: destinationFileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Save

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Save](/mp-command-catalog/commands/file-operations#save) · [gRPC contract](/api/grpc/file-operations#save)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SaveAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SaveAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Save As Read-Only Template

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Save As Read-Only Template](/mp-command-catalog/commands/file-operations#save-as-read-only-template) · [gRPC contract](/api/grpc/file-operations#save-as-read-only-template)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `templateFileName` | `FileReference` | `Template File Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SaveAsReadOnlyTemplateAsync(
    FileReference templateFileName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SaveAsReadOnlyTemplateAsync(templateFileName: templateFileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Save As...

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Save As...](/mp-command-catalog/commands/file-operations#save-as) · [gRPC contract](/api/grpc/file-operations#save-as)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fileName` | `FileReference` | `File Name` | Required |
| `addSerialNumber` | `bool` | `Add Serial Number?` | false |
| `optionalNumber` | `int` | `Optional Number` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SaveAsAsync(
    FileReference fileName,
    bool addSerialNumber = false,
    int optionalNumber = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SaveAsAsync(fileName: fileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Boolean In DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Boolean In DataShare File](/mp-command-catalog/commands/file-operations#set-boolean-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-boolean-in-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `booleanName` | `string` | `Boolean Name` | Empty |
| `booleanValue` | `bool` | `Boolean Value` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetBooleanInDataShareFileAsync(
    FileReference dataShareFilePath,
    string booleanName = "",
    bool booleanValue = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetBooleanInDataShareFileAsync(dataShareFilePath: dataShareFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Double In DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Double In DataShare File](/mp-command-catalog/commands/file-operations#set-double-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-double-in-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `doubleName` | `string` | `Double Name` | Empty |
| `doubleValue` | `double` | `Double Value` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetDoubleInDataShareFileAsync(
    FileReference dataShareFilePath,
    string doubleName = "",
    double doubleValue = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetDoubleInDataShareFileAsync(dataShareFilePath: dataShareFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Integer In DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Integer In DataShare File](/mp-command-catalog/commands/file-operations#set-integer-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-integer-in-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `integerName` | `string` | `Integer Name` | Empty |
| `integerValue` | `int` | `Integer Value` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetIntegerInDataShareFileAsync(
    FileReference dataShareFilePath,
    string integerName = "",
    int integerValue = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetIntegerInDataShareFileAsync(dataShareFilePath: dataShareFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set String In DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set String In DataShare File](/mp-command-catalog/commands/file-operations#set-string-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-string-in-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `stringName` | `string` | `String Name` | Empty |
| `stringValue` | `string` | `String Value` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetStringInDataShareFileAsync(
    FileReference dataShareFilePath,
    string stringName = "",
    string stringValue = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetStringInDataShareFileAsync(dataShareFilePath: dataShareFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Transform In DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Transform In DataShare File](/mp-command-catalog/commands/file-operations#set-transform-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-transform-in-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `transformName` | `string` | `Transform Name` | Empty |
| `transformValue` | `Transform` | `Transform Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetTransformInDataShareFileAsync(
    FileReference dataShareFilePath,
    string transformName,
    Transform transformValue,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetTransformInDataShareFileAsync(dataShareFilePath: dataShareFilePath, transformName: transformName, transformValue: transformValue);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Vector In DataShare File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Vector In DataShare File](/mp-command-catalog/commands/file-operations#set-vector-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-vector-in-datashare-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `vectorName` | `string` | `Vector Name` | Empty |
| `vectorValue` | `Vector` | `Vector Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetVectorInDataShareFileAsync(
    FileReference dataShareFilePath,
    string vectorName,
    Vector vectorValue,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetVectorInDataShareFileAsync(dataShareFilePath: dataShareFilePath, vectorName: vectorName, vectorValue: vectorValue);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Terminate All Running MPs

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Terminate All Running MPs](/mp-command-catalog/commands/file-operations#terminate-all-running-mps) · [gRPC contract](/api/grpc/file-operations#terminate-all-running-mps)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task TerminateAllRunningMPsAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.TerminateAllRunningMPsAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Use NRKXML Library

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Use NRKXML Library](/mp-command-catalog/commands/file-operations#use-nrkxml-library) · [gRPC contract](/api/grpc/file-operations#use-nrkxml-library)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `useLibrary` | `bool` | `Use library?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task UseNrkxmlLibraryAsync(
    bool useLibrary = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.UseNrkxmlLibraryAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Verify General File Exists

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Verify General File Exists](/mp-command-catalog/commands/file-operations#verify-general-file-exists) · [gRPC contract](/api/grpc/file-operations#verify-general-file-exists)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fileName` | `FileReference` | `File Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task VerifyGeneralFileExistsAsync(
    FileReference fileName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.VerifyGeneralFileExistsAsync(fileName: fileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Verify MP File Exists

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Verify MP File Exists](/mp-command-catalog/commands/file-operations#verify-mp-file-exists) · [gRPC contract](/api/grpc/file-operations#verify-mp-file-exists)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mpFileName` | `FileReference` | `MP File Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task VerifyMpFileExistsAsync(
    FileReference mpFileName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.VerifyMpFileExistsAsync(mpFileName: mpFileName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
