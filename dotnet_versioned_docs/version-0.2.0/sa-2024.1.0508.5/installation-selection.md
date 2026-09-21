---
title: Installation Selection and Discovery
description: Client 0.2.0 server selectors, inert discovery, selection reports, and startup failures for SA 2024.1.0508.5.
---

# Installation Selection and Discovery

[SA 2026.1.0529.7](/api/dotnet/installation-selection) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/installation-selection)

These APIs are released in client **0.2.0**. Import them from the same exact-target package as the client. Discovery reads local installation evidence without launching the server, SDK, or SpatialAnalyzer. It does not prove runtime readiness.

## Discovery and Resolution

```csharp
public static BriosaDiscoveryReport Discover(BriosaServerSelection? selection = null);
public static BriosaInstallation Resolve(BriosaServerSelection? selection = null);
```

Discovery returns structurally valid installations, diagnostics for rejected or inaccessible locations, the selected compatible installation if one exists, and a selection failure code otherwise. A discovered installation is not necessarily eligible. Resolve returns the selected installation or raises `BriosaStartupException` with the selection code. Invalid selector values raise `ArgumentException` (or `ArgumentNullException` for null collections).

## Selection Model

Set `ServerSelection` on `BriosaStartOptions`; its default is `new BriosaServerSelection()`. Executable path and installation ID are mutually exclusive. Paths, including package-store search roots and an explicit SA executable, must be absolute local paths, not UNC paths. Version constraints must be valid semantic versions; minimum is inclusive and maximum is exclusive. Exclusions remove individual versions. Scope lists must be nonempty and contain only machine, user, or portable.

Without constraints the client considers all three scopes, excludes prereleases, and chooses the highest compatible stable release. Exclusion and search-root lists default to empty. Prerelease and legacy environment override flags default to false. An invalid explicit selection fails without fallback. Search roots identify package stores containing the committed products layout, not arbitrary executable directories. Elevated automatic selection only admits protected machine installations.

The package requires contract major **1**, revision **at least 0**, for its exact SA target. The separately reviewed legacy exception admits Server **0.6.1** only at source revision `32a3b56ba4ae31ea5ec6ec3b2aa051eb61c866aa`. Generated artifacts remain pinned to Server 0.7.0; this build pin is not the runtime selection rule.

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

var report = BriosaInstallations.Discover(new BriosaServerSelection { MinimumVersion = "0.7.0" });
foreach (var diagnostic in report.Diagnostics)
    Console.WriteLine(diagnostic.Code);
if (report.Selected is { } selected)
    Console.WriteLine(selected.Version);
else
    Console.WriteLine(report.DiagnosticCode);
```

Diagnostic paths are explicitly requested local data. Avoid publishing them in logs or support reports. See [Installation Selection](/docs/deployment/installation-selection) and [Diagnostics](/docs/deployment/diagnostics) for deployment guidance.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/blob/v0.2.0/targets/2024.1.0508.5/src/Briosa.Client/BriosaServerSelection.cs)
