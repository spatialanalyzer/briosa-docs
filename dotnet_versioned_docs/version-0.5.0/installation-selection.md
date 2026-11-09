---
title: Installation Selection and Discovery
description: Client 0.5.0 server selectors, inert discovery, selection reports, startup failures, and the capability snapshot for SA 2026.1.0529.7.
---

# Installation Selection and Discovery

[SA 2026.1.0529.7](/api/dotnet/installation-selection) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/installation-selection)

These APIs are released in client **0.5.0**. Import them from the same exact-target package as the client. Discovery reads local installation evidence without launching the server, SDK, or SpatialAnalyzer. It does not prove runtime readiness.

## Discovery and Resolution

```csharp
public static BriosaDiscoveryReport Discover(BriosaServerSelection? selection = null);
public static BriosaInstallation Resolve(BriosaServerSelection? selection = null);
```

Discovery returns structurally valid installations, diagnostics for rejected or inaccessible locations, the selected compatible installation if one exists, and a selection failure code otherwise. A discovered installation is not necessarily eligible. Resolve returns the selected installation or raises `BriosaStartupException` with the selection code. Invalid selector values raise `ArgumentException` (or `ArgumentNullException` for null collections).

## Selection Model

Set `ServerSelection` on `BriosaStartOptions`; its default is `new BriosaServerSelection()`. Executable path and installation ID are mutually exclusive. Paths, including package-store search roots and an explicit SA executable, must be absolute local paths, not UNC paths. Version constraints must be valid semantic versions; minimum is inclusive and maximum is exclusive. Exclusions remove individual versions. Scope lists must be nonempty and contain only machine, user, or portable.

Without constraints the client considers all three scopes, excludes prereleases, and chooses the highest compatible stable release. Exclusion and search-root lists default to empty. Prerelease and legacy environment override flags default to false. An invalid explicit selection fails without fallback. Search roots identify package stores containing the committed products layout, not arbitrary executable directories. Elevated automatic selection only admits protected machine installations.

The package requires contract major **3**, revision **at least 0**, for its exact SA target. Servers of other contract majors, including the major-2 Server 0.9 releases, and servers without contract metadata, including Server 0.6.1, are rejected before launch; discovery reports `server-installation-incompatible` for them. Keep client 0.4.0 for applications that must run against Server 0.9.x; the two clients and servers install side by side. Generated artifacts are pinned to the Server 0.10.0 protocol checkpoint `0.10.0-dev.1`; this build pin is not the runtime selection rule.

`BRIOSA_SERVER_PATH` is ignored unless the legacy override flag is enabled and no direct selector is supplied. Prefer per-application selection. The chosen installation stays fixed for the session and recovery. Startup checks the live server identity against the selected evidence before SDK or SA activity; contract compatibility never bypasses exact-target checks, policy, ownership, or readiness.

### `BriosaServerSelection`

```csharp
public sealed record BriosaServerSelection
{
    /// <summary>Gets an absolute explicit server executable; invalid choices never fall back.</summary>
    public string? ExecutablePath { get; init; }
    /// <summary>Gets an explicit installation ID, mutually exclusive with ExecutablePath.</summary>
    public string? InstallationId { get; init; }
    /// <summary>Gets an exact server release constraint.</summary>
    public string? Version { get; init; }
    /// <summary>Gets an inclusive minimum server version.</summary>
    public string? MinimumVersion { get; init; }
    /// <summary>Gets an exclusive maximum server version.</summary>
    public string? MaximumVersionExclusive { get; init; }
    /// <summary>Gets explicitly excluded server versions.</summary>
    public IReadOnlyList<string> ExcludedVersions { get; init; } = [];
    /// <summary>Gets additional absolute package-store roots.</summary>
    public IReadOnlyList<string> SearchRoots { get; init; } = [];
    /// <summary>Gets allowed scopes: machine, user, and portable.</summary>
    public IReadOnlyList<string> AllowedScopes { get; init; } = ["machine", "user", "portable"];
    /// <summary>Gets whether prerelease servers are eligible.</summary>
    public bool AllowPrerelease { get; init; }
    /// <summary>Gets whether to honor BRIOSA_SERVER_PATH when no direct selector is set.</summary>
    public bool UseLegacyEnvironmentOverride { get; init; }
    /// <summary>Gets an optional absolute exact-target SA executable path.</summary>
    public string? SpatialAnalyzerExecutablePath { get; init; }

}
```

### `BriosaInstallation`

```csharp
public sealed record BriosaInstallation(
    string InstallationId, string ExecutablePath, string Version, string SourceRevision,
    string SpatialAnalyzerTarget, string RuntimeIdentifier, uint ContractMajor,
    uint ContractRevision, string ManifestSha256, string Scope);
```

### `BriosaDiscoveryDiagnostic`

```csharp
public sealed record BriosaDiscoveryDiagnostic(string Path, string Code);
```

### `BriosaDiscoveryReport`

```csharp
public sealed record BriosaDiscoveryReport(
    IReadOnlyList<BriosaInstallation> Installations,
    IReadOnlyList<BriosaDiscoveryDiagnostic> Diagnostics,
    BriosaInstallation? Selected, string? DiagnosticCode);
```

## Inspect a Selection Without Starting SA

```csharp
using Briosa;

var report = BriosaInstallations.Discover(new BriosaServerSelection { MinimumVersion = "0.10.0" });
foreach (var diagnostic in report.Diagnostics)
    Console.WriteLine(diagnostic.Code);
if (report.Selected is { } selected)
    Console.WriteLine(selected.Version);
else
    Console.WriteLine(report.DiagnosticCode);
```

Diagnostic paths are explicitly requested local data. Avoid publishing them in logs or support reports. See [Installation Selection](/docs/deployment/installation-selection) and [Diagnostics](/docs/deployment/diagnostics) for deployment guidance.

## Server Snapshot and Admission

```csharp
public Task<BriosaServerSnapshot> GetServerSnapshotAsync(
    CancellationToken cancellationToken = default);

public Task<BriosaDeniedOperationListing> GetDeniedOperationsAsync(
    CancellationToken cancellationToken = default);
```

`GetServerSnapshotAsync` returns an identity-validated snapshot of the owned
server. It reports the server's resolved admission profile (`read-only`,
`standard`, `device`, or `full`) and its opaque policy fingerprint; compare the
fingerprint only for equality, for example to tell whether a replacement
generation runs under the same policy. Each admitted operation carries its
reviewed risk flags (an ordered list, empty when no risk applies), duration
class, validation status, and admission, exactly as the server reports them. A
value from a later server revision maps to the enum's `Unknown` member instead
of failing discovery. The client never recomputes admission and never
pre-validates request options; a request option can still make the server deny
an admitted operation at call time.

`GetDeniedOperationsAsync` returns one diagnostic listing: the admission profile
and policy fingerprint it was taken under, and each operation the active policy
denies, with the precedence step that denied it in `Admission`. Denied
operations never join the snapshot, and the server still denies them when they
are called.

After a manual `ConnectToSpatialAnalyzerAsync` in control-plane-only mode, call
`GetServerSnapshotAsync` again before MP work: MP admission needs both the
snapshot and the SDK state to report readiness.

```csharp
public sealed record BriosaServerSnapshot
{
    public required string BriosaVersion { get; init; }
    public required string SourceRevision { get; init; }
    public required string ProtocolPackage { get; init; }
    public required string SpatialAnalyzerTarget { get; init; }
    public bool ReadyForMp { get; init; }
    public WorkerRuntimeState WorkerState { get; init; }
    public SpatialAnalyzerConnectionState ConnectionState { get; init; }
    public SpatialAnalyzerExecutionReadinessState ExecutionReadinessState { get; init; }
    public TargetIsolationMode TargetIsolationMode { get; init; }
    public string AdmissionProfile { get; init; } = string.Empty;
    public string PolicyFingerprint { get; init; } = string.Empty;
    public required IReadOnlyList<BriosaOperationCapability> Operations { get; init; }

    public bool Supports(string fullyQualifiedMethod);
}

public sealed record BriosaDeniedOperationListing
{
    public required string AdmissionProfile { get; init; }
    public required string PolicyFingerprint { get; init; }
    public required IReadOnlyList<BriosaOperationCapability> Operations { get; init; }
}

public sealed record BriosaOperationCapability
{
    public required string OperationId { get; init; }
    public required string GrpcService { get; init; }
    public required string Rpc { get; init; }
    public required string FullyQualifiedMethod { get; init; }
    public IReadOnlyList<OperationRiskFlag> RiskFlags { get; init; } = [];
    public OperationDurationClass DurationClass { get; init; }
    public OperationValidationStatus ValidationStatus { get; init; }
    public OperationAdmission Admission { get; init; }
}

public enum OperationRiskFlag
{
    Unknown = -1,
    Unspecified = 0,
    FilesystemMetadata = 1,
    FilesystemRead = 2,
    FilesystemWrite = 3,
    FilesystemDelete = 4,
    Destructive = 5,
    CodeExecution = 6,
    PhysicalMotion = 7,
    DeviceSession = 8,
    DeviceConfig = 9,
    InteractiveUi = 10,
    ExternalIo = 11,
}

public enum OperationDurationClass
{
    Unknown = -1,
    Unspecified = 0,
    Quick = 1,
    LongRunning = 2,
    Interactive = 3,
}

public enum OperationValidationStatus
{
    Unknown = -1,
    Unspecified = 0,
    NoRecordedGap = 1,
    FixturePending = 2,
    AtRiskUnvalidated = 3,
}

public enum OperationAdmission
{
    Unknown = -1,
    Unspecified = 0,
    Admitted = 1,
    DeniedProfile = 2,
    DeniedFlag = 3,
    DeniedOverride = 4,
    DeniedExclusive = 5,
    DeniedUnreviewed = 6,
}

public enum WorkerRuntimeState
{
    Unspecified,
    Stopped,
    Starting,
    Ready,
    Degraded,
    Stopping,
}

public enum TargetIsolationMode
{
    Unspecified,
    SingleTenant,
    LeaseIsolated,
}
```

The server's packaged `standard` profile is narrower than the major-2 default.
The seven device-configuration setters (`SetAbsoluteInstrumentScaleFactorAsync`,
`SetMultiplyInstrumentScaleFactorAsync`, `SetRobotMachineModelLinkParametersAsync`,
`SetActiveRobotCalibrationAsync`, `SetRobotCalibrationToolFrameAsync`,
`SetRobotCalibrationMeasurementOffsetInToolFrameAsync`, and
`SetProbeOffsetFrameOfflineAsync`) need the `device` or `full` profile or an
override. Operations that open or block on operator UI need the explicit
interactive opt-in. The facades of denied operations stay. The multi-call
device, trapping, watch, robot-interface, and appliance session workflows are
exclusive, and every profile, flag, and override denies them for now: a call
fails with `PolicyDenied` and `NotStarted`.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/BriosaServerSelection.cs) · [Candidate Snapshot Source](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/BriosaServerSnapshot.cs)
