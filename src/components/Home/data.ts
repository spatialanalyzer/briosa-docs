/*
 * Facts the homepage displays, kept in one module so a release or catalog
 * update touches one file. Every value is copied by hand from committed site
 * content; nothing is generated, and the pages below stay the source of truth.
 *
 * - Versions: docs/releases.md ("Available Products") and src/pages/install.md.
 * - SA 2026 operations: mp-command-catalog/2026.1.0529.7/overview.md
 *   ("The server registry includes 1,027 MP operations").
 * - SA 2024 dispositions: mp-command-catalog/2024.1.0508.5/overview.md
 *   (1,283 captured commands, 996 Current) and mp-command-catalog/overview.md.
 * - gRPC services: the gRPC 0.9.0 reference for SA 2026.1.0529.7
 *   (grpc_versioned_docs/version-0.9.0): 20 MP operation services plus
 *   DiscoveryService, SpatialAnalyzerLifecycle, and SpatialAnalyzerSdkLifecycle.
 * - MP root groups: mp-command-catalog/2026.1.0529.7/group-hierarchy.md, the
 *   observed SetStep count of each root group (1,360 in all).
 */

export const versions = {
  server: '0.9.2',
  clients: '0.4.0',
  installer: '0.3.0',
} as const;

export const targets = {
  sa2026: '2026.1.0529.7',
  sa2024: '2024.1.0508.5',
} as const;

export const grpcServices = 23;
export const currentOperations2026 = 1027;
export const currentOperations2024 = 996;
export const reviewedCommands2024 = 1283;

export type MpGroup = {readonly name: string; readonly n: number};

/** SA 2026.1.0529.7 MP root groups, largest first. */
export const mpGroups2026: readonly MpGroup[] = [
  {name: 'Construction Operations', n: 270},
  {name: 'Instrument Operations', n: 175},
  {name: 'File Operations', n: 125},
  {name: 'Analysis Operations', n: 122},
  {name: 'Relationship Operations', n: 114},
  {name: 'Utility Operations', n: 89},
  {name: 'Reporting Operations', n: 73},
  {name: 'View Control', n: 50},
  {name: 'GDT Operations', n: 43},
  {name: 'Variables', n: 41},
  {name: 'Robot Operations', n: 33},
  {name: 'Cloud and Mesh Operations', n: 28},
  {name: 'Robot Calibration Appliance Node Operations', n: 25},
  {name: 'Vector Operations', n: 25},
  {name: 'Process Flow Operations', n: 23},
  {name: 'Scalar Math Operations', n: 21},
  {name: 'Dimension Operations', n: 20},
  {name: 'Google Sheets Operations', n: 19},
  {name: 'Excel Direct Connect', n: 17},
  {name: 'MS Office Reporting Operations', n: 13},
  {name: 'MP Task Overview', n: 11},
  {name: 'Accumulator Math Operations', n: 8},
  {name: 'Event Operations', n: 6},
  {name: 'Scale Bar Operations', n: 5},
  {name: 'MP Subroutines', n: 4},
];

export const mpObservations2026 = mpGroups2026.reduce((sum, group) => sum + group.n, 0);

/** Client package names for one exact target. */
export function packagesFor(target: string) {
  return {
    nuget: `Briosa.${target}`,
    pypi: `briosa-${target.replaceAll('.', '-')}`,
    npm: `@spatialanalyzer/briosa-${target}`,
  } as const;
}

/** Thousands separators without Intl, so server and client render identically. */
export function formatCount(n: number): string {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const featuredOperations = [
  {
    service: 'FileOperations',
    rpc: 'GetWorkingDirectory',
    detail: 'Read the current SpatialAnalyzer working directory.',
    href: '/api/grpc/sa-2026.1.0529.7/file-operations/get-working-directory',
  },
  {
    service: 'AnalysisOperations',
    rpc: 'GetNumberOfCollections',
    detail: 'Read the number of collections in the active SA job.',
    href: '/api/grpc/sa-2026.1.0529.7/analysis-operations/get-number-of-collections',
  },
  {
    service: 'ConstructionOperations',
    rpc: 'ConstructCollection',
    detail: 'Create a named collection, with optional folder and default-collection settings.',
    href: '/api/grpc/sa-2026.1.0529.7/construction-operations-collections/construct-collection',
  },
  {
    service: 'ConstructionOperations',
    rpc: 'GetActiveCollectionName',
    detail: 'Read the name of the currently active collection.',
    href: '/api/grpc/sa-2026.1.0529.7/construction-operations-collections/get-active-collection-name',
  },
  {
    service: 'UtilityOperations',
    rpc: 'SetActiveUnits',
    detail: 'Set length, angular, and temperature units, including inch-fraction display settings.',
    href: '/api/grpc/sa-2026.1.0529.7/utility-operations/set-active-units',
  },
  {
    service: 'UtilityOperations',
    rpc: 'GetWorkingFrameProperties',
    detail: 'Read the current frame name, collection, and typed working frame.',
    href: '/api/grpc/sa-2026.1.0529.7/utility-operations/get-working-frame-properties',
  },
] as const;

/** Released RPC names for the decorative ticker; each exists in the gRPC 0.9.0 reference. */
export const tickerRpcs = [
  [
    'GetPointCoordinate', 'GetPointToPointDistance', 'ConstructPointInWorkingCoordinates',
    'ConstructCollection', 'GetWorkingDirectory', 'GetNumberOfCollections',
    'GetActiveCollectionName', 'SetActiveUnits', 'GetWorkingFrameProperties',
    'FitGeometryToPointGroupProjectedToPlane', 'MakeLineFitProfile', 'ReComputeCalculatedItems',
    'GetNumberOfPointsInGroup', 'GetPointTolerance', 'ConstructCone', 'ConstructSurfaceFromCylinder',
    'ConstructPolygonizedSurfaceFromPointClouds', 'ConstructBSplineFromIntersectionOfSurfaces',
    'CopyObjectsPointToPointDelta', 'SetInstrumentTargeting',
  ],
  [
    'WatchClosestPoint', 'GetCurrentTrappingStatus', 'FilterCloudsToSurface', 'GenerateGeneralMesh',
    'MeshVolume', 'DeleteCloudPointsByXYZRange', 'GetCloudRGBValues', 'EvaluateFeatureChecks',
    'GetDatumMeasurements', 'RefreshDatumsFeatureChecksFromAnnotations', 'SetGeomRelationshipCriteria',
    'MoveCollectionsByMinimizingRelationships', 'GenerateStandardHtmlReport', 'AddPicturesToReportBar',
    'ScaleObjects', 'GetPointNotes', 'StartSpatialAnalyzerSdk', 'ConnectToSpatialAnalyzer',
    'LaunchSpatialAnalyzer', 'ListCapabilities', 'GetServerInfo',
  ],
] as const;
