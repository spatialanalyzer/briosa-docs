---
title: File Operations
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# File Operations

[SA 2026.1.0529.7](/api/dotnet/file-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/file-operations)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Backup Now {/* #backup-now */}

[MP Catalog](/mp-command-catalog/commands/file-operations#backup-now) · [gRPC Contract](/api/grpc/file-operations#backup-now)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `long_running`

```csharp
public Task BackupNowAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy General File {/* #copy-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#copy-general-file) · [gRPC Contract](/api/grpc/file-operations#copy-general-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read`, `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task CopyGeneralFileAsync(
        FileReference sourceFileName,
        FileReference destinationFileName,
        bool overwrite = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete General File {/* #delete-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#delete-general-file) · [gRPC Contract](/api/grpc/file-operations#delete-general-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `filesystem_delete`, `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteGeneralFileAsync(
        FileReference fileName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Direct CAD Access {/* #direct-cad-access */}

[MP Catalog](/mp-command-catalog/commands/file-operations#direct-cad-access) · [gRPC Contract](/api/grpc/file-operations#direct-cad-access)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

A request that sets `promptOnMissingComponents` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

A request that sets `selectiveImport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
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
        int surfaceNormalsMode = 1,
        bool promptOnMissingComponents = false,
        bool selectiveImport = false,
        bool surfaceCompatibilityMode = true,
        bool explodeSurfaces = false,
        string cadFileUnits = "",
        bool buildCalloutViews = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `surfaceNormalsMode` | MP qualifier: 1 or 2. |
| `cadFileUnits` | An empty value uses the units specified in the file. |

## Export ASCII Frame Set {/* #export-ascii-frame-set */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-frame-set) · [gRPC Contract](/api/grpc/file-operations#export-ascii-frame-set)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportAsciiFrameSetAsync(
        FileReference asciiFilePath,
        CollectionObjectName frameSetContainer,
        ExportDataDelimeterType dataDelimiter,
        AsciiFileFormat fileFormat,
        bool includeExportFormatInfo = false,
        int decimalPrecision = 6,
        bool append = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Frames {/* #export-ascii-frames */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-frames) · [gRPC Contract](/api/grpc/file-operations#export-ascii-frames)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportAsciiFramesAsync(
        FileReference asciiFilePath,
        IEnumerable<CollectionObjectName> objectList,
        string exportFrameMode = "Fixed XYZ",
        bool overwriteExistingFile = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Point Clouds {/* #export-ascii-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-point-clouds) · [gRPC Contract](/api/grpc/file-operations#export-ascii-point-clouds)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportAsciiPointCloudsAsync(
        FileReference asciiFilePath,
        IEnumerable<CollectionObjectName> pointCloudList,
        ExportDataDelimeterType dataDelimiter,
        bool overwriteExistingFile = false,
        bool showProgressDialog = false,
        bool includeCloudPointLabeling = false,
        bool includeScanDirectionVector = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Point Set {/* #export-ascii-point-set */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-point-set) · [gRPC Contract](/api/grpc/file-operations#export-ascii-point-set)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

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
        bool maximumPrecision = false,
        int decimalPrecision = 6,
        bool append = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `maximumPrecision` | MP qualifier: Scientific Notation. |

## Export ASCII Points {/* #export-ascii-points */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-points) · [gRPC Contract](/api/grpc/file-operations#export-ascii-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

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
        bool maximumPrecision = false,
        int decimalPrecision = 6,
        bool append = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `maximumPrecision` | MP qualifier: Scientific Notation. |

## Export DXF {/* #export-dxf */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-dxf) · [gRPC Contract](/api/grpc/file-operations#export-dxf)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportDxfAsync(
        FileReference dxfFilePath,
        IEnumerable<PointName> pointNames,
        IEnumerable<CollectionObjectName> cloudNames,
        bool includePointLabels = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Embedded File {/* #export-embedded-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-embedded-file) · [gRPC Contract](/api/grpc/file-operations#export-embedded-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportEmbeddedFileAsync(
        CollectionName embeddedFileCollectionName,
        string embeddedFileName,
        FileReference externalFileName,
        bool replaceExisting = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Hidden Point Bar XML File {/* #export-hidden-point-bar-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-hidden-point-bar-xml-file) · [gRPC Contract](/api/grpc/file-operations#export-hidden-point-bar-xml-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportHiddenPointBarXmlFileAsync(
        FileReference xmlFilePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export IGES File  - Entire Model {/* #export-iges-file----entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-iges-file----entire-model) · [gRPC Contract](/api/grpc/file-operations#export-iges-file----entire-model)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportIgesFileEntireModelAsync(
        FileReference igesFilePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export IGES File - Partial Model {/* #export-iges-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-iges-file---partial-model) · [gRPC Contract](/api/grpc/file-operations#export-iges-file---partial-model)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportIgesFilePartialModelAsync(
        FileReference igesFilePath,
        IEnumerable<CollectionObjectName> objectNameList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export PTX Point Clouds {/* #export-ptx-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ptx-point-clouds) · [gRPC Contract](/api/grpc/file-operations#export-ptx-point-clouds)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportPtxPointCloudsAsync(
        FileReference ptxFilePath,
        IEnumerable<CollectionObjectName> pointCloudList,
        bool overwriteExistingFile = false,
        bool showProgressDialog = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export QDAS Characteristics {/* #export-qdas-characteristics */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-qdas-characteristics) · [gRPC Contract](/api/grpc/file-operations#export-qdas-characteristics)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

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
        IEnumerable<CollectionItemName> relationshipList,
        IEnumerable<CollectionItemName> featureCheckList,
        IEnumerable<CollectionObjectName> vectorGroupList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export QDAS Data List {/* #export-qdas-data-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-qdas-data-list) · [gRPC Contract](/api/grpc/file-operations#export-qdas-data-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportQdasDataListAsync(
        FileReference qdasExportFilePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Scan Stripe Mesh to STL File {/* #export-scan-stripe-mesh-to-stl-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-scan-stripe-mesh-to-stl-file) · [gRPC Contract](/api/grpc/file-operations#export-scan-stripe-mesh-to-stl-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportScanStripeMeshToStlFileAsync(
        FileReference stlFilePath,
        CollectionObjectName mesh,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export STEP File - Entire Model {/* #export-step-file---entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-step-file---entire-model) · [gRPC Contract](/api/grpc/file-operations#export-step-file---entire-model)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportStepFileEntireModelAsync(
        FileReference stepFilePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export STEP File - Partial Model {/* #export-step-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-step-file---partial-model) · [gRPC Contract](/api/grpc/file-operations#export-step-file---partial-model)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportStepFilePartialModelAsync(
        FileReference stepFilePath,
        IEnumerable<CollectionObjectName> objectNameList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export VDA/FS File  - Entire Model {/* #export-vdafs-file----entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vdafs-file----entire-model) · [gRPC Contract](/api/grpc/file-operations#export-vdafs-file----entire-model)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportVdaFsFileEntireModelAsync(
        FileReference vdaFsFilePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export VDA/FS File - Partial Model {/* #export-vdafs-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vdafs-file---partial-model) · [gRPC Contract](/api/grpc/file-operations#export-vdafs-file---partial-model)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportVdaFsFilePartialModelAsync(
        FileReference vdaFsFilePath,
        IEnumerable<CollectionObjectName> objectNameList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Vector Container to ASCII File {/* #export-vector-container-to-ascii-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vector-container-to-ascii-file) · [gRPC Contract](/api/grpc/file-operations#export-vector-container-to-ascii-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task ExportVectorContainerToAsciiFileAsync(
        FileReference asciiFilePath,
        IEnumerable<CollectionVectorGroupName> vectorGroupsToExport,
        bool overwriteExistingFile,
        bool useFullPrecision,
        ExportVectorNameFormat vectorNameFormat,
        bool includeVectorLength = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `overwriteExistingFile` | False fails if the file already exists; it does not append. |
| `useFullPrecision` | MP qualifier: Scientific Notation. |

## Find Files in Directory {/* #find-files-in-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#find-files-in-directory) · [gRPC Contract](/api/grpc/file-operations#find-files-in-directory)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_metadata` · **Duration Class:** `quick`

```csharp
public Task<string[]> FindFilesInDirectoryAsync(
        string directory = "",
        string fileNamePattern = "*.*",
        bool recursive = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Find Sub-Directories in Directory {/* #find-sub-directories-in-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#find-sub-directories-in-directory) · [gRPC Contract](/api/grpc/file-operations#find-sub-directories-in-directory)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_metadata` · **Duration Class:** `quick`

```csharp
public Task<string[]> FindSubDirectoriesInDirectoryAsync(
        string directory = "",
        bool recursive = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Boolean From DataShare File {/* #get-boolean-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-boolean-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-boolean-from-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task<bool> GetBooleanFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string booleanName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Double From DataShare File {/* #get-double-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-double-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-double-from-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task<double> GetDoubleFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string doubleName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Integer From DataShare File {/* #get-integer-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-integer-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-integer-from-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task<int> GetIntegerFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string integerName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get QDAS Catalog Entries {/* #get-qdas-catalog-entries */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-qdas-catalog-entries) · [gRPC Contract](/api/grpc/file-operations#get-qdas-catalog-entries)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string[]> GetQdasCatalogEntriesAsync(
        string kFieldTarget = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String From DataShare File {/* #get-string-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-string-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-string-from-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task<string> GetStringFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string stringName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform From DataShare File {/* #get-transform-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-transform-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-transform-from-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task<Transform> GetTransformFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string transformName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector From DataShare File {/* #get-vector-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-vector-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-vector-from-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task<Vector> GetVectorFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string vectorName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Working Directory {/* #get-working-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-working-directory) · [gRPC Contract](/api/grpc/file-operations#get-working-directory)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** `filesystem_metadata` · **Duration Class:** `quick`

```csharp
public Task<string> GetWorkingDirectoryAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import ASCII: Predefined Formats {/* #import-ascii-predefined-formats */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-ascii-predefined-formats) · [gRPC Contract](/api/grpc/file-operations#import-ascii-predefined-formats)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

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
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import ASCII: Predefined Frame Set Formats {/* #import-ascii-predefined-frame-set-formats */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-ascii-predefined-frame-set-formats) · [gRPC Contract](/api/grpc/file-operations#import-ascii-predefined-frame-set-formats)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportAsciiPredefinedFrameSetFormatsAsync(
        FileReference asciiFilePath,
        AsciiFileFormat fileFormat,
        DistanceUnits units,
        AngularUnits angularUnits,
        CollectionObjectName frameSetContainerName,
        bool ensureUniqueName = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import E57 File {/* #import-e57-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-e57-file) · [gRPC Contract](/api/grpc/file-operations#import-e57-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read`, `filesystem_write` · **Duration Class:** `long_running`

A request that sets `automaticallyCloseConverter` to false also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task ImportE57FileAsync(
        FileReference e57FilePath,
        bool saveConvertedFile,
        bool useSquareRootOfIntensity,
        bool automaticallyCloseConverter,
        bool prioritizeColorOverIntensity,
        bool importScanBlocksAsSeparateClouds,
        DistanceUnits units,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import File as Embedded File {/* #import-file-as-embedded-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-file-as-embedded-file) · [gRPC Contract](/api/grpc/file-operations#import-file-as-embedded-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read`, `destructive` · **Duration Class:** `quick`

```csharp
public Task ImportFileAsEmbeddedFileAsync(
        FileReference externalFileName,
        bool replaceExisting = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import File as Picture {/* #import-file-as-picture */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-file-as-picture) · [gRPC Contract](/api/grpc/file-operations#import-file-as-picture)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read`, `destructive` · **Duration Class:** `quick`

```csharp
public Task ImportFileAsPictureAsync(
        FileReference externalFileName,
        bool replaceExisting = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Hidden Point Bar XML File {/* #import-hidden-point-bar-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-hidden-point-bar-xml-file) · [gRPC Contract](/api/grpc/file-operations#import-hidden-point-bar-xml-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read`, `destructive` · **Duration Class:** `quick`

```csharp
public Task ImportHiddenPointBarXmlFileAsync(
        FileReference xmlFilePath,
        bool replaceExistingEntries = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import IGES File {/* #import-iges-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-iges-file) · [gRPC Contract](/api/grpc/file-operations#import-iges-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportIgesFileAsync(
        FileReference igesFilePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Leica GSI File {/* #import-leica-gsi-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-leica-gsi-file) · [gRPC Contract](/api/grpc/file-operations#import-leica-gsi-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportLeicaGsiFileAsync(
        CollectionInstrumentId instrumentId,
        CollectionObjectName groupName,
        FileReference filePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Leica SDB File {/* #import-leica-sdb-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-leica-sdb-file) · [gRPC Contract](/api/grpc/file-operations#import-leica-sdb-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportLeicaSdbFileAsync(
        CollectionInstrumentId instrumentId,
        CollectionObjectName scanCloudName,
        FileReference filePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import MP File as Embedded MP {/* #import-mp-file-as-embedded-mp */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-mp-file-as-embedded-mp) · [gRPC Contract](/api/grpc/file-operations#import-mp-file-as-embedded-mp)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read`, `destructive` · **Duration Class:** `quick`

```csharp
public Task ImportMpFileAsEmbeddedMpAsync(
        FileReference externalMpFileName,
        bool replaceExisting = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Nominals from XML File {/* #import-nominals-from-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-nominals-from-xml-file) · [gRPC Contract](/api/grpc/file-operations#import-nominals-from-xml-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportNominalsFromXmlFileAsync(
        FileReference filePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Polyworks File {/* #import-polyworks-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-polyworks-file) · [gRPC Contract](/api/grpc/file-operations#import-polyworks-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `long_running`

```csharp
public Task ImportPolyworksFileAsync(
        CollectionObjectName cloudName,
        FileReference filePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import QDAS Catalog File {/* #import-qdas-catalog-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-qdas-catalog-file) · [gRPC Contract](/api/grpc/file-operations#import-qdas-catalog-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportQdasCatalogFileAsync(
        FileReference qdasDfdFilePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import SA File {/* #import-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sa-file) · [gRPC Contract](/api/grpc/file-operations#import-sa-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

A request that sets `allowOperatorSelections` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task ImportSaFileAsync(
        FileReference saFileName,
        bool allowOperatorSelections,
        IEnumerable<string> selectedCollections,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `selectedCollections` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Import SA Windows Placement {/* #import-sa-windows-placement */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sa-windows-placement) · [gRPC Contract](/api/grpc/file-operations#import-sa-windows-placement)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportSaWindowsPlacementAsync(
        FileReference filePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import SAT File {/* #import-sat-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sat-file) · [gRPC Contract](/api/grpc/file-operations#import-sat-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportSatFileAsync(
        FileReference satFilePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import STEP File {/* #import-step-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-step-file) · [gRPC Contract](/api/grpc/file-operations#import-step-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

A request that sets `displayEntityFilters` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

A request that sets `displayResiduals` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task ImportStepFileAsync(
        FileReference stepFilePath,
        bool displayEntityFilters = false,
        bool displayResiduals = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import STL File {/* #import-stl-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-stl-file) · [gRPC Contract](/api/grpc/file-operations#import-stl-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportStlFileAsync(
        FileReference stlFilePath,
        DistanceUnits units,
        bool importMesh = true,
        bool importPointCloud = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VDA/FS File {/* #import-vdafs-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vdafs-file) · [gRPC Contract](/api/grpc/file-operations#import-vdafs-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportVdaFsFileAsync(
        FileReference vdaFsFilePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VSTARS .xyz File {/* #import-vstars-xyz-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vstars-xyz-file) · [gRPC Contract](/api/grpc/file-operations#import-vstars-xyz-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportVstarsXyzFileAsync(
        FileReference filePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VSTARS Cameras {/* #import-vstars-cameras */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vstars-cameras) · [gRPC Contract](/api/grpc/file-operations#import-vstars-cameras)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task ImportVstarsCamerasAsync(
        FileReference filePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load HTML Form {/* #load-html-form */}

[MP Catalog](/mp-command-catalog/commands/file-operations#load-html-form) · [gRPC Contract](/api/grpc/file-operations#load-html-form)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `filesystem_read`, `filesystem_write`, `interactive_ui` · **Duration Class:** `interactive`

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
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load HTML Form in Edge Browser {/* #load-html-form-in-edge-browser */}

[MP Catalog](/mp-command-catalog/commands/file-operations#load-html-form-in-edge-browser) · [gRPC Contract](/api/grpc/file-operations#load-html-form-in-edge-browser)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `filesystem_read`, `filesystem_write`, `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task LoadHtmlFormInEdgeBrowserAsync(
        FileReference inputHtmlFormPath,
        int windowWidth,
        int windowHeight,
        FileReference inputDataShareFilePath,
        FileReference outputDataShareFilePath,
        bool saveInBinaryFormat = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Embedded File Name List {/* #make-embedded-file-name-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#make-embedded-file-name-list) · [gRPC Contract](/api/grpc/file-operations#make-embedded-file-name-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string[]> MakeEmbeddedFileNameListAsync(
        string collectionWildcardCriteria = "*",
        string fileNamePattern = "*.*",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Merge Measurements into XML File {/* #merge-measurements-into-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#merge-measurements-into-xml-file) · [gRPC Contract](/api/grpc/file-operations#merge-measurements-into-xml-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read`, `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task MergeMeasurementsIntoXmlFileAsync(
        FileReference filePath,
        CollectionObjectName groupName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## New SA File {/* #new-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#new-sa-file) · [gRPC Contract](/api/grpc/file-operations#new-sa-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task NewSaFileAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Open SA File {/* #open-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#open-sa-file) · [gRPC Contract](/api/grpc/file-operations#open-sa-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read`, `destructive` · **Duration Class:** `long_running`

```csharp
public Task OpenSaFileAsync(
        FileReference saFileName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Open Template File {/* #open-template-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#open-template-file) · [gRPC Contract](/api/grpc/file-operations#open-template-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read`, `destructive` · **Duration Class:** `quick`

```csharp
public Task OpenTemplateFileAsync(
        FileReference templateFileName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Pop PolyBay Analysis Window {/* #pop-polybay-analysis-window */}

[MP Catalog](/mp-command-catalog/commands/file-operations#pop-polybay-analysis-window) · [gRPC Contract](/api/grpc/file-operations#pop-polybay-analysis-window)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `filesystem_read`, `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task PopPolyBayAnalysisWindowAsync(
        string materialsFilePath = "",
        string bayFilePath = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Prepare QDAS Data List {/* #prepare-qdas-data-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#prepare-qdas-data-list) · [gRPC Contract](/api/grpc/file-operations#prepare-qdas-data-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

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
        IEnumerable<CollectionItemName> relationshipList,
        IEnumerable<CollectionItemName> featureCheckList,
        IEnumerable<CollectionObjectName> vectorGroupList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename General File {/* #rename-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#rename-general-file) · [gRPC Contract](/api/grpc/file-operations#rename-general-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `filesystem_read`, `filesystem_write`, `filesystem_delete` · **Duration Class:** `quick`

```csharp
public Task RenameGeneralFileAsync(
        FileReference sourceFileName,
        FileReference destinationFileName,
        bool overwrite = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save {/* #save */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save) · [gRPC Contract](/api/grpc/file-operations#save)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `long_running`

```csharp
public Task SaveAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save As Read-Only Template {/* #save-as-read-only-template */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save-as-read-only-template) · [gRPC Contract](/api/grpc/file-operations#save-as-read-only-template)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task SaveAsReadOnlyTemplateAsync(
        FileReference templateFileName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save As... {/* #save-as */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save-as) · [gRPC Contract](/api/grpc/file-operations#save-as)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `long_running`

```csharp
public Task SaveAsAsync(
        FileReference fileName,
        bool addSerialNumber = false,
        int optionalNumber = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Boolean In DataShare File {/* #set-boolean-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-boolean-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-boolean-in-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task SetBooleanInDataShareFileAsync(
        FileReference dataShareFilePath,
        string booleanName = "",
        bool booleanValue = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Double In DataShare File {/* #set-double-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-double-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-double-in-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task SetDoubleInDataShareFileAsync(
        FileReference dataShareFilePath,
        string doubleName = "",
        double doubleValue = 0.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Integer In DataShare File {/* #set-integer-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-integer-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-integer-in-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task SetIntegerInDataShareFileAsync(
        FileReference dataShareFilePath,
        string integerName = "",
        int integerValue = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String In DataShare File {/* #set-string-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-string-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-string-in-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task SetStringInDataShareFileAsync(
        FileReference dataShareFilePath,
        string stringName = "",
        string stringValue = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform In DataShare File {/* #set-transform-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-transform-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-transform-in-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task SetTransformInDataShareFileAsync(
        FileReference dataShareFilePath,
        string transformName,
        Transform transformValue,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector In DataShare File {/* #set-vector-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-vector-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-vector-in-datashare-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task SetVectorInDataShareFileAsync(
        FileReference dataShareFilePath,
        string vectorName,
        Vector vectorValue,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Terminate All Running MPs {/* #terminate-all-running-mps */}

[MP Catalog](/mp-command-catalog/commands/file-operations#terminate-all-running-mps) · [gRPC Contract](/api/grpc/file-operations#terminate-all-running-mps)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `destructive`, `code_execution` · **Duration Class:** `quick`

```csharp
public Task TerminateAllRunningMPsAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Use NRKXML Library {/* #use-nrkxml-library */}

[MP Catalog](/mp-command-catalog/commands/file-operations#use-nrkxml-library) · [gRPC Contract](/api/grpc/file-operations#use-nrkxml-library)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task UseNrkxmlLibraryAsync(
        bool useLibrary = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Verify General File Exists {/* #verify-general-file-exists */}

[MP Catalog](/mp-command-catalog/commands/file-operations#verify-general-file-exists) · [gRPC Contract](/api/grpc/file-operations#verify-general-file-exists)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** `filesystem_metadata` · **Duration Class:** `quick`

```csharp
public Task VerifyGeneralFileExistsAsync(
        FileReference fileName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Verify MP File Exists {/* #verify-mp-file-exists */}

[MP Catalog](/mp-command-catalog/commands/file-operations#verify-mp-file-exists) · [gRPC Contract](/api/grpc/file-operations#verify-mp-file-exists)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** `filesystem_metadata` · **Duration Class:** `quick`

```csharp
public Task VerifyMpFileExistsAsync(
        FileReference mpFileName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7)
