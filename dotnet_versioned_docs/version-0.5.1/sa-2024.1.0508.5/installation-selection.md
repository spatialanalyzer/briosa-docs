---
title: Installation Selection and Discovery
description: Client 0.5.1 server selectors, inert discovery, selection reports, startup failures, and the capability snapshot for SA 2024.1.0508.5.
---

# Installation Selection and Discovery

[SA 2026.1.0529.7](/api/dotnet/installation-selection) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/installation-selection)

These APIs are released in client **0.5.1**. Import them from the same exact-target package as the client. Discovery reads local installation evidence without launching the server, SDK, or SpatialAnalyzer. It does not prove runtime readiness.

## Discovery and Resolution

```csharp
public static BriosaDiscoveryReport Discover(BriosaServerSelection? selection = null);
public static BriosaInstallation Resolve(BriosaServerSelection? selection = null);
```

Discovery returns structurally valid installations, diagnostics for rejected or inaccessible locations, the selected compatible installation if one exists, and a selection failure code otherwise. A discovered installation is not necessarily eligible. Resolve returns the selected installation or raises `BriosaStartupException` with the selection code. Invalid selector values raise `ArgumentException` (or `ArgumentNullException` for null collections).

## Selection Model

Set `ServerSelection` on `BriosaStartOptions`; its default is `new BriosaServerSelection()`. Executable path and installation ID are mutually exclusive. Paths, including package-store search roots and an explicit SA executable, must be absolute local paths, not UNC paths. Version constraints must be valid semantic versions; minimum is inclusive and maximum is exclusive. Exclusions remove individual versions. Scope lists must be nonempty and contain only machine, user, or portable.

Without constraints the client considers all three scopes, excludes prereleases, and chooses the highest compatible stable release. Exclusion and search-root lists default to empty. Prerelease and legacy environment override flags default to false. An invalid explicit selection fails without fallback. Search roots identify package stores containing the committed products layout, not arbitrary executable directories. Elevated automatic selection only admits protected machine installations.

Clients 0.5.0 and 0.5.1 work with Servers 0.10.0 and 0.10.1 for their exact SA target. Before launch, the client checks that the installation matches the exact SA target and declares support for this client; a version number alone does not make an installation eligible. For server releases after 0.10.0, a patch update keeps the same clients working; a minor update may require a client upgrade. Incompatible servers, including Server 0.9.x and earlier (and Server 0.6.1), are rejected before launch; discovery reports `server-installation-incompatible` for them. Keep client 0.4.0 for applications that must run against Server 0.9.x; the two clients and servers install side by side. Generated artifacts are pinned to the protocol checkpoint `0.10.1-dev.1`, whose protobuf files are identical to the Server 0.10.1 release; this build pin is not the runtime selection rule.

`BRIOSA_SERVER_PATH` is ignored unless the legacy override flag is enabled and no direct selector is supplied. Prefer per-application selection. The chosen installation stays fixed for the session and recovery. Startup checks the live server identity against the selected evidence before SDK or SA activity; server-client compatibility never bypasses exact-target checks, policy, ownership, or readiness.

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

var report = BriosaInstallations.Discover(new BriosaServerSelection { MinimumVersion = "0.10.1" });
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
value from a later compatible server release maps to the enum's `Unknown` member instead
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

Client 0.5.1 also reads what Server 0.10.1 adds to discovery. Server 0.10.0
sends none of it, and each value below then reports that the server sent
nothing:

- `LifecycleBounds` holds the server's lifecycle wait allowances as optional
  `TimeSpan` values, computed from the server's own configuration. The value is
  `null` when the server publishes none, and an allowance that is absent or
  zero is `null`: unavailable, never unbounded. `HostGracefulShutdown` is
  `Unavailable`, `Finite` with its `Limit`, or `Unbounded`. Each allowance
  covers only the server's own work and does not promise that a response
  arrives or a process exits within it. `StartupWithLaunch` and
  `StartupWithoutLaunch` size a startup of several requests; they are not
  server deadlines. An unset `StartupTimeout` is sized from them; see
  [Client Construction](./lifecycle.md#client-construction).
- `ConfiguredInteractionMode` is the SpatialAnalyzer interaction mode the server
  is configured to set after each Connect (`Briosa:SpatialAnalyzer:InteractionMode`).
  It is the server's configuration, never SpatialAnalyzer's live mode.
  `Unknown` stands for an unreported value, as from Server 0.10.0, and for a
  value this client does not recognize.
- `RequestOptions` lists each operation's reviewed request options: `null` when
  the server does not describe them (Server 0.10.0), and empty when none apply.
  Each `OperationRequestOption` names its protobuf field, its effect (operator
  UI or work left running), the condition and enum values that turn it on, what
  omitting it does, and what the policy decides for a request that turns on
  that option alone. The server still decides every request, and the client
  never pre-validates a request from this description.
- `PolicyDenial` on a denied capability, on a denied request option, and on a
  [`PolicyDenied` failure](./lifecycle.md#operation-failures) carries one
  `PolicyDenialDetails` value: the `PolicyDenialRule`, the denied risk flag of a
  flag denial, the admission profile of a profile denial, and the request field
  the server attributed the denial to. It holds names only, never a request
  value, and it never changes a capability's admission.

An unknown rule, effect, condition, omission, or admission value maps to its
enum's `Unknown` member. It is metadata only: it never admits anything and never
fails discovery. `BriosaServerSnapshot` and `BriosaOperationCapability` compare,
hash, and print as in client 0.5.0: the 0.5.1 members take no part in equality
or hashing, and `ToString()` shows them only when the server sent them.
Reflection-based serializers do see the 0.5.1 members.

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
    public LifecycleBounds? LifecycleBounds { get; init; }
    public ConfiguredSpatialAnalyzerInteractionMode ConfiguredInteractionMode { get; init; }

    public bool Supports(string fullyQualifiedMethod);
}

public sealed record LifecycleBounds
{
    public TimeSpan? StartSdk { get; init; }
    public TimeSpan? LaunchSpatialAnalyzer { get; init; }
    public TimeSpan? ConnectToSpatialAnalyzer { get; init; }
    public TimeSpan? RecoverSdk { get; init; }
    public TimeSpan? StopSdk { get; init; }
    public TimeSpan? CloseOwnedSpatialAnalyzer { get; init; }
    public TimeSpan? StartupWithLaunch { get; init; }
    public TimeSpan? StartupWithoutLaunch { get; init; }
    public GracefulShutdownBound HostGracefulShutdown { get; init; }
}

public sealed record GracefulShutdownBound
{
    public GracefulShutdownBoundKind Kind { get; init; }
    public TimeSpan? Limit { get; init; }
}

public enum GracefulShutdownBoundKind
{
    Unavailable = 0,
    Finite = 1,
    Unbounded = 2,
}

public enum ConfiguredSpatialAnalyzerInteractionMode
{
    Unknown = 0,
    Unchanged = 1,
    Silent = 2,
    Automatic = 3,
    Manual = 4,
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
    public PolicyDenialDetails? PolicyDenial { get; init; }
    public IReadOnlyList<OperationRequestOption>? RequestOptions { get; init; }
}

public sealed record OperationRequestOption
{
    public required string FieldName { get; init; }
    public OperationRequestOptionEffect Effect { get; init; }
    public OperationRequestOptionCondition Condition { get; init; }
    public IReadOnlyList<string> EnablingEnumValues { get; init; } = [];
    public OperationRequestOptionOmission Omission { get; init; }
    public OperationAdmission Admission { get; init; }
    public PolicyDenialDetails? PolicyDenial { get; init; }
}

public enum OperationRequestOptionEffect
{
    Unknown = -1,
    Unspecified = 0,
    InteractiveUi = 1,
    BackgroundWork = 2,
}

public enum OperationRequestOptionCondition
{
    Unknown = -1,
    Unspecified = 0,
    WhenTrue = 1,
    WhenFalse = 2,
    WhenPresent = 3,
    WhenNonEmpty = 4,
    WhenOneOf = 5,
}

public enum OperationRequestOptionOmission
{
    Unknown = -1,
    Unspecified = 0,
    DoesNotActivate = 1,
    Activates = 2,
    Required = 3,
}

public sealed record PolicyDenialDetails
{
    public PolicyDenialRule Rule { get; init; }
    public OperationRiskFlag? DeniedFlag { get; init; }
    public string? AdmissionProfile { get; init; }
    public string? RequestOptionField { get; init; }
}

public enum PolicyDenialRule
{
    Unknown = -1,
    Unspecified = 0,
    Profile = 1,
    Flag = 2,
    Override = 3,
    Exclusive = 4,
    Unreviewed = 5,
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

The server's packaged `standard` profile is narrower than the Server 0.9.x default.
The seven device-configuration setters (`SetAbsoluteInstrumentScaleFactorAsync`,
`SetMultiplyInstrumentScaleFactorAsync`, `SetRobotMachineModelLinkParametersAsync`,
`SetActiveRobotCalibrationAsync`, `SetRobotCalibrationToolFrameAsync`,
`SetRobotCalibrationMeasurementOffsetInToolFrameAsync`, and
`SetProbeOffsetFrameOfflineAsync`) need the `device` or `full` profile,
`Flags:device_config=allow`, or a per-operation `allow` override. Operations
that open or block on operator UI need the explicit interactive opt-in. The
facades of denied operations stay. The multi-call
device, trapping, watch, robot-interface, and appliance session workflows are
exclusive, and every profile, flag, and override denies them for now: a call
fails with `PolicyDenied` and `NotStarted`.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/blob/v0.5.1/targets/2024.1.0508.5/src/Briosa.Client/BriosaServerSelection.cs) · [Released Snapshot Source](https://github.com/spatialanalyzer/briosa-dotnet/blob/v0.5.1/targets/2024.1.0508.5/src/Briosa.Client/BriosaServerSnapshot.cs)
