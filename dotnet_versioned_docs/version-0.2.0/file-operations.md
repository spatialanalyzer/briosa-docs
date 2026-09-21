---
title: File Operations
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# File Operations

[SA 2026.1.0529.7](/api/dotnet/file-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/file-operations)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Backup Now {/* #backup-now */}

[MP Catalog](/mp-command-catalog/commands/file-operations#backup-now) · [gRPC Contract](/api/grpc/file-operations#backup-now)

```csharp
public Task BackupNowAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy General File {/* #copy-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#copy-general-file) · [gRPC Contract](/api/grpc/file-operations#copy-general-file)

```csharp
public Task CopyGeneralFileAsync(
        FileReference sourceFileName,
        FileReference destinationFileName,
        bool overwrite = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete General File {/* #delete-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#delete-general-file) · [gRPC Contract](/api/grpc/file-operations#delete-general-file)

```csharp
public Task DeleteGeneralFileAsync(
        FileReference fileName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Direct CAD Access {/* #direct-cad-access */}

[MP Catalog](/mp-command-catalog/commands/file-operations#direct-cad-access) · [gRPC Contract](/api/grpc/file-operations#direct-cad-access)

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
        int surfaceNormalsMode1Or2 = 1,
        bool promptOnMissingComponents = true,
        bool selectiveImport = false,
        bool surfaceCompatibilityMode = true,
        bool explodeSurfaces = false,
        string cadFileUnitsLeaveBlankToUseTheUnitsSpecifiedInTheFile = "",
        bool buildCalloutViews = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Frame Set {/* #export-ascii-frame-set */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-frame-set) · [gRPC Contract](/api/grpc/file-operations#export-ascii-frame-set)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Frames {/* #export-ascii-frames */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-frames) · [gRPC Contract](/api/grpc/file-operations#export-ascii-frames)

```csharp
public Task ExportAsciiFramesAsync(
        FileReference asciiFilePath,
        IEnumerable<CollectionObjectName> objectList,
        string exportFrameMode = "Fixed XYZ",
        bool overwriteExistingFile = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Point Clouds {/* #export-ascii-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-point-clouds) · [gRPC Contract](/api/grpc/file-operations#export-ascii-point-clouds)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Point Set {/* #export-ascii-point-set */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-point-set) · [gRPC Contract](/api/grpc/file-operations#export-ascii-point-set)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Points {/* #export-ascii-points */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-points) · [gRPC Contract](/api/grpc/file-operations#export-ascii-points)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export DXF {/* #export-dxf */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-dxf) · [gRPC Contract](/api/grpc/file-operations#export-dxf)

```csharp
public Task ExportDxfAsync(
        FileReference dxfFilePath,
        IEnumerable<PointName> pointNames,
        IEnumerable<CollectionObjectName> cloudNames,
        bool includePointLabels = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Embedded File {/* #export-embedded-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-embedded-file) · [gRPC Contract](/api/grpc/file-operations#export-embedded-file)

```csharp
public Task ExportEmbeddedFileAsync(
        CollectionName embeddedFileCollectionName,
        string embeddedFileName,
        FileReference externalFileName,
        bool replaceExisting = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Hidden Point Bar XML File {/* #export-hidden-point-bar-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-hidden-point-bar-xml-file) · [gRPC Contract](/api/grpc/file-operations#export-hidden-point-bar-xml-file)

```csharp
public Task ExportHiddenPointBarXmlFileAsync(
        FileReference xmlFilePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export IGES File  - Entire Model {/* #export-iges-file----entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-iges-file----entire-model) · [gRPC Contract](/api/grpc/file-operations#export-iges-file----entire-model)

```csharp
public Task ExportIgesFileEntireModelAsync(
        FileReference igesFilePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export IGES File - Partial Model {/* #export-iges-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-iges-file---partial-model) · [gRPC Contract](/api/grpc/file-operations#export-iges-file---partial-model)

```csharp
public Task ExportIgesFilePartialModelAsync(
        FileReference igesFilePath,
        IEnumerable<CollectionObjectName> objectNameList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export PTX Point Clouds {/* #export-ptx-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ptx-point-clouds) · [gRPC Contract](/api/grpc/file-operations#export-ptx-point-clouds)

```csharp
public Task ExportPtxPointCloudsAsync(
        FileReference ptxFilePath,
        IEnumerable<CollectionObjectName> pointCloudList,
        bool overwriteExistingFile = false,
        bool showProgressDialog = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export QDAS Characteristics {/* #export-qdas-characteristics */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-qdas-characteristics) · [gRPC Contract](/api/grpc/file-operations#export-qdas-characteristics)

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
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export QDAS Data List {/* #export-qdas-data-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-qdas-data-list) · [gRPC Contract](/api/grpc/file-operations#export-qdas-data-list)

```csharp
public Task ExportQdasDataListAsync(
        FileReference qdasExportFilePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Scan Stripe Mesh to STL File {/* #export-scan-stripe-mesh-to-stl-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-scan-stripe-mesh-to-stl-file) · [gRPC Contract](/api/grpc/file-operations#export-scan-stripe-mesh-to-stl-file)

```csharp
public Task ExportScanStripeMeshToStlFileAsync(
        FileReference stlFilePath,
        CollectionObjectName mesh,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export STEP File - Entire Model {/* #export-step-file---entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-step-file---entire-model) · [gRPC Contract](/api/grpc/file-operations#export-step-file---entire-model)

```csharp
public Task ExportStepFileEntireModelAsync(
        FileReference stepFilePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export STEP File - Partial Model {/* #export-step-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-step-file---partial-model) · [gRPC Contract](/api/grpc/file-operations#export-step-file---partial-model)

```csharp
public Task ExportStepFilePartialModelAsync(
        FileReference stepFilePath,
        IEnumerable<CollectionObjectName> objectNameList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export VDA/FS File  - Entire Model {/* #export-vdafs-file----entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vdafs-file----entire-model) · [gRPC Contract](/api/grpc/file-operations#export-vdafs-file----entire-model)

```csharp
public Task ExportVdaFsFileEntireModelAsync(
        FileReference vdaFsFilePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export VDA/FS File - Partial Model {/* #export-vdafs-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vdafs-file---partial-model) · [gRPC Contract](/api/grpc/file-operations#export-vdafs-file---partial-model)

```csharp
public Task ExportVdaFsFilePartialModelAsync(
        FileReference vdaFsFilePath,
        IEnumerable<CollectionObjectName> objectNameList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Vector Container to ASCII File {/* #export-vector-container-to-ascii-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vector-container-to-ascii-file) · [gRPC Contract](/api/grpc/file-operations#export-vector-container-to-ascii-file)

```csharp
public Task ExportVectorContainerToAsciiFileAsync(
        FileReference asciiFilePath,
        IEnumerable<CollectionVectorGroupName> vectorGroupsToExport,
        bool overwriteExistingFileFalseAppend,
        bool useFullPrecisionScientificNotation,
        ExportVectorNameFormat vectorNameFormat,
        bool includeVectorLength = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Find Files in Directory {/* #find-files-in-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#find-files-in-directory) · [gRPC Contract](/api/grpc/file-operations#find-files-in-directory)

```csharp
public Task<string[]> FindFilesInDirectoryAsync(
        string directory = "",
        string fileNamePattern = "*.*",
        bool recursive = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Find Sub-Directories in Directory {/* #find-sub-directories-in-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#find-sub-directories-in-directory) · [gRPC Contract](/api/grpc/file-operations#find-sub-directories-in-directory)

```csharp
public Task<string[]> FindSubDirectoriesInDirectoryAsync(
        string directory = "",
        bool recursive = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Boolean From DataShare File {/* #get-boolean-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-boolean-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-boolean-from-datashare-file)

```csharp
public Task<bool> GetBooleanFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string booleanName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Double From DataShare File {/* #get-double-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-double-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-double-from-datashare-file)

```csharp
public Task<double> GetDoubleFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string doubleName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Integer From DataShare File {/* #get-integer-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-integer-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-integer-from-datashare-file)

```csharp
public Task<int> GetIntegerFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string integerName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get QDAS Catalog Entries {/* #get-qdas-catalog-entries */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-qdas-catalog-entries) · [gRPC Contract](/api/grpc/file-operations#get-qdas-catalog-entries)

```csharp
public Task<string[]> GetQdasCatalogEntriesAsync(
        string kFieldTarget = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String From DataShare File {/* #get-string-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-string-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-string-from-datashare-file)

```csharp
public Task<string> GetStringFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string stringName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform From DataShare File {/* #get-transform-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-transform-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-transform-from-datashare-file)

```csharp
public Task<Transform> GetTransformFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string transformName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector From DataShare File {/* #get-vector-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-vector-from-datashare-file) · [gRPC Contract](/api/grpc/file-operations#get-vector-from-datashare-file)

```csharp
public Task<Vector> GetVectorFromDataShareFileAsync(
        FileReference dataShareFilePath,
        string vectorName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Working Directory {/* #get-working-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-working-directory) · [gRPC Contract](/api/grpc/file-operations#get-working-directory)

```csharp
public Task<string> GetWorkingDirectoryAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import ASCII: Predefined Formats {/* #import-ascii-predefined-formats */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-ascii-predefined-formats) · [gRPC Contract](/api/grpc/file-operations#import-ascii-predefined-formats)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import ASCII: Predefined Frame Set Formats {/* #import-ascii-predefined-frame-set-formats */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-ascii-predefined-frame-set-formats) · [gRPC Contract](/api/grpc/file-operations#import-ascii-predefined-frame-set-formats)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import E57 File {/* #import-e57-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-e57-file) · [gRPC Contract](/api/grpc/file-operations#import-e57-file)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import File as Embedded File {/* #import-file-as-embedded-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-file-as-embedded-file) · [gRPC Contract](/api/grpc/file-operations#import-file-as-embedded-file)

```csharp
public Task ImportFileAsEmbeddedFileAsync(
        FileReference externalFileName,
        bool replaceExisting = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import File as Picture {/* #import-file-as-picture */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-file-as-picture) · [gRPC Contract](/api/grpc/file-operations#import-file-as-picture)

```csharp
public Task ImportFileAsPictureAsync(
        FileReference externalFileName,
        bool replaceExisting = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Hidden Point Bar XML File {/* #import-hidden-point-bar-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-hidden-point-bar-xml-file) · [gRPC Contract](/api/grpc/file-operations#import-hidden-point-bar-xml-file)

```csharp
public Task ImportHiddenPointBarXmlFileAsync(
        FileReference xmlFilePath,
        bool replaceExistingEntries = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import IGES File {/* #import-iges-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-iges-file) · [gRPC Contract](/api/grpc/file-operations#import-iges-file)

```csharp
public Task ImportIgesFileAsync(
        FileReference igesFilePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Leica GSI File {/* #import-leica-gsi-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-leica-gsi-file) · [gRPC Contract](/api/grpc/file-operations#import-leica-gsi-file)

```csharp
public Task ImportLeicaGsiFileAsync(
        CollectionInstrumentId instrumentId,
        CollectionObjectName groupName,
        FileReference filePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Leica SDB File {/* #import-leica-sdb-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-leica-sdb-file) · [gRPC Contract](/api/grpc/file-operations#import-leica-sdb-file)

```csharp
public Task ImportLeicaSdbFileAsync(
        CollectionInstrumentId instrumentId,
        CollectionObjectName scanCloudName,
        FileReference filePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import MP File as Embedded MP {/* #import-mp-file-as-embedded-mp */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-mp-file-as-embedded-mp) · [gRPC Contract](/api/grpc/file-operations#import-mp-file-as-embedded-mp)

```csharp
public Task ImportMpFileAsEmbeddedMpAsync(
        FileReference externalMpFileName,
        bool replaceExisting = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Nominals from XML File {/* #import-nominals-from-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-nominals-from-xml-file) · [gRPC Contract](/api/grpc/file-operations#import-nominals-from-xml-file)

```csharp
public Task ImportNominalsFromXmlFileAsync(
        FileReference filePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Polyworks File {/* #import-polyworks-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-polyworks-file) · [gRPC Contract](/api/grpc/file-operations#import-polyworks-file)

```csharp
public Task ImportPolyworksFileAsync(
        CollectionObjectName cloudName,
        FileReference filePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import QDAS Catalog File {/* #import-qdas-catalog-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-qdas-catalog-file) · [gRPC Contract](/api/grpc/file-operations#import-qdas-catalog-file)

```csharp
public Task ImportQdasCatalogFileAsync(
        FileReference qdasDfdFilePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import SA File {/* #import-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sa-file) · [gRPC Contract](/api/grpc/file-operations#import-sa-file)

```csharp
public Task ImportSaFileAsync(
        FileReference saFileName,
        bool allowOperatorSelections,
        IEnumerable<string> selectedCollectionsOptional,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import SA Windows Placement {/* #import-sa-windows-placement */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sa-windows-placement) · [gRPC Contract](/api/grpc/file-operations#import-sa-windows-placement)

```csharp
public Task ImportSaWindowsPlacementAsync(
        FileReference filePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import SAT File {/* #import-sat-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sat-file) · [gRPC Contract](/api/grpc/file-operations#import-sat-file)

```csharp
public Task ImportSatFileAsync(
        FileReference satFilePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import STEP File {/* #import-step-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-step-file) · [gRPC Contract](/api/grpc/file-operations#import-step-file)

```csharp
public Task ImportStepFileAsync(
        FileReference stepFilePath,
        bool displayEntityFilters = false,
        bool displayResiduals = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import STL File {/* #import-stl-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-stl-file) · [gRPC Contract](/api/grpc/file-operations#import-stl-file)

```csharp
public Task ImportStlFileAsync(
        FileReference stlFilePath,
        DistanceUnits units,
        bool importMesh = true,
        bool importPointCloud = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VDA/FS File {/* #import-vdafs-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vdafs-file) · [gRPC Contract](/api/grpc/file-operations#import-vdafs-file)

```csharp
public Task ImportVdaFsFileAsync(
        FileReference vdaFsFilePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VSTARS .xyz File {/* #import-vstars-xyz-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vstars-xyz-file) · [gRPC Contract](/api/grpc/file-operations#import-vstars-xyz-file)

```csharp
public Task ImportVstarsXyzFileAsync(
        FileReference filePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VSTARS Cameras {/* #import-vstars-cameras */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vstars-cameras) · [gRPC Contract](/api/grpc/file-operations#import-vstars-cameras)

```csharp
public Task ImportVstarsCamerasAsync(
        FileReference filePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load HTML Form {/* #load-html-form */}

[MP Catalog](/mp-command-catalog/commands/file-operations#load-html-form) · [gRPC Contract](/api/grpc/file-operations#load-html-form)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load HTML Form in Edge Browser {/* #load-html-form-in-edge-browser */}

[MP Catalog](/mp-command-catalog/commands/file-operations#load-html-form-in-edge-browser) · [gRPC Contract](/api/grpc/file-operations#load-html-form-in-edge-browser)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Embedded File Name List {/* #make-embedded-file-name-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#make-embedded-file-name-list) · [gRPC Contract](/api/grpc/file-operations#make-embedded-file-name-list)

```csharp
public Task<string[]> MakeEmbeddedFileNameListAsync(
        string collectionWildcardCriteria = "*",
        string fileNamePattern = "*.*",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Merge Measurements into XML File {/* #merge-measurements-into-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#merge-measurements-into-xml-file) · [gRPC Contract](/api/grpc/file-operations#merge-measurements-into-xml-file)

```csharp
public Task MergeMeasurementsIntoXmlFileAsync(
        FileReference filePath,
        CollectionObjectName groupName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## New SA File {/* #new-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#new-sa-file) · [gRPC Contract](/api/grpc/file-operations#new-sa-file)

```csharp
public Task NewSaFileAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Open SA File {/* #open-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#open-sa-file) · [gRPC Contract](/api/grpc/file-operations#open-sa-file)

```csharp
public Task OpenSaFileAsync(
        FileReference saFileName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Open Template File {/* #open-template-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#open-template-file) · [gRPC Contract](/api/grpc/file-operations#open-template-file)

```csharp
public Task OpenTemplateFileAsync(
        FileReference templateFileName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Pop PolyBay Analysis Window {/* #pop-polybay-analysis-window */}

[MP Catalog](/mp-command-catalog/commands/file-operations#pop-polybay-analysis-window) · [gRPC Contract](/api/grpc/file-operations#pop-polybay-analysis-window)

```csharp
public Task PopPolyBayAnalysisWindowAsync(
        string materialsFilePath = "",
        string bayFilePath = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Prepare QDAS Data List {/* #prepare-qdas-data-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#prepare-qdas-data-list) · [gRPC Contract](/api/grpc/file-operations#prepare-qdas-data-list)

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
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename General File {/* #rename-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#rename-general-file) · [gRPC Contract](/api/grpc/file-operations#rename-general-file)

```csharp
public Task RenameGeneralFileAsync(
        FileReference sourceFileName,
        FileReference destinationFileName,
        bool overwrite = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save {/* #save */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save) · [gRPC Contract](/api/grpc/file-operations#save)

```csharp
public Task SaveAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save As Read-Only Template {/* #save-as-read-only-template */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save-as-read-only-template) · [gRPC Contract](/api/grpc/file-operations#save-as-read-only-template)

```csharp
public Task SaveAsReadOnlyTemplateAsync(
        FileReference templateFileName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save As... {/* #save-as */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save-as) · [gRPC Contract](/api/grpc/file-operations#save-as)

```csharp
public Task SaveAsAsync(
        FileReference fileName,
        bool addSerialNumber = false,
        int optionalNumber = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Boolean In DataShare File {/* #set-boolean-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-boolean-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-boolean-in-datashare-file)

```csharp
public Task SetBooleanInDataShareFileAsync(
        FileReference dataShareFilePath,
        string booleanName = "",
        bool booleanValue = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Double In DataShare File {/* #set-double-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-double-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-double-in-datashare-file)

```csharp
public Task SetDoubleInDataShareFileAsync(
        FileReference dataShareFilePath,
        string doubleName = "",
        double doubleValue = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Integer In DataShare File {/* #set-integer-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-integer-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-integer-in-datashare-file)

```csharp
public Task SetIntegerInDataShareFileAsync(
        FileReference dataShareFilePath,
        string integerName = "",
        int integerValue = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String In DataShare File {/* #set-string-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-string-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-string-in-datashare-file)

```csharp
public Task SetStringInDataShareFileAsync(
        FileReference dataShareFilePath,
        string stringName = "",
        string stringValue = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform In DataShare File {/* #set-transform-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-transform-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-transform-in-datashare-file)

```csharp
public Task SetTransformInDataShareFileAsync(
        FileReference dataShareFilePath,
        string transformName,
        Transform transformValue,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector In DataShare File {/* #set-vector-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-vector-in-datashare-file) · [gRPC Contract](/api/grpc/file-operations#set-vector-in-datashare-file)

```csharp
public Task SetVectorInDataShareFileAsync(
        FileReference dataShareFilePath,
        string vectorName,
        Vector vectorValue,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Terminate All Running MPs {/* #terminate-all-running-mps */}

[MP Catalog](/mp-command-catalog/commands/file-operations#terminate-all-running-mps) · [gRPC Contract](/api/grpc/file-operations#terminate-all-running-mps)

```csharp
public Task TerminateAllRunningMPsAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Use NRKXML Library {/* #use-nrkxml-library */}

[MP Catalog](/mp-command-catalog/commands/file-operations#use-nrkxml-library) · [gRPC Contract](/api/grpc/file-operations#use-nrkxml-library)

```csharp
public Task UseNrkxmlLibraryAsync(
        bool useLibrary = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Verify General File Exists {/* #verify-general-file-exists */}

[MP Catalog](/mp-command-catalog/commands/file-operations#verify-general-file-exists) · [gRPC Contract](/api/grpc/file-operations#verify-general-file-exists)

```csharp
public Task VerifyGeneralFileExistsAsync(
        FileReference fileName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Verify MP File Exists {/* #verify-mp-file-exists */}

[MP Catalog](/mp-command-catalog/commands/file-operations#verify-mp-file-exists) · [gRPC Contract](/api/grpc/file-operations#verify-mp-file-exists)

```csharp
public Task VerifyMpFileExistsAsync(
        FileReference mpFileName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2026.1.0529.7)
