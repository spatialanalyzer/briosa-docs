---
title: Installation Selection and Discovery
description: Client 0.2.0 server selectors, inert discovery, selection reports, and startup failures for SA 2024.1.0508.5.
---

# Installation Selection and Discovery

[SA 2026.1.0529.7](/api/javascript/installation-selection) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/installation-selection)

These APIs are released in client **0.2.0**. Import them from the same exact-target package as the client. Discovery reads local installation evidence without launching the server, SDK, or SpatialAnalyzer. It does not prove runtime readiness.

## Discovery and Resolution

```ts
export type InstallationScope = 'machine' | 'user' | 'portable';
export declare function discoverInstallations(selection?: BriosaServerSelection): Promise<BriosaDiscoveryReport>;
export declare function resolveInstallation(selection?: BriosaServerSelection): Promise<BriosaInstallation>;
```

Discovery returns structurally valid installations, diagnostics for rejected or inaccessible locations, the selected compatible installation if one exists, and a selection failure code otherwise. A discovered installation is not necessarily eligible. Resolve returns the selected installation or raises `BriosaStartupError` with the selection code. Invalid selector values raise `TypeError`.

## Selection Model

Set `serverSelection` on `BriosaStartOptions`; its default is `{}`. Executable path and installation ID are mutually exclusive. Paths, including package-store search roots and an explicit SA executable, must be absolute local paths, not UNC paths. Version constraints must be valid semantic versions; minimum is inclusive and maximum is exclusive. Exclusions remove individual versions. Scope lists must be nonempty and contain only machine, user, or portable.

Without constraints the client considers all three scopes, excludes prereleases, and chooses the highest compatible stable release. Exclusion and search-root lists default to empty. Prerelease and legacy environment override flags default to false. An invalid explicit selection fails without fallback. Search roots identify package stores containing the committed products layout, not arbitrary executable directories. Elevated automatic selection only admits protected machine installations.

The package requires contract major **1**, revision **at least 0**, for its exact SA target. The separately reviewed legacy exception admits Server **0.6.1** only at source revision `32a3b56ba4ae31ea5ec6ec3b2aa051eb61c866aa`. Generated artifacts remain pinned to Server 0.7.0; this build pin is not the runtime selection rule.

`BRIOSA_SERVER_PATH` is ignored unless the legacy override flag is enabled and no direct selector is supplied. Prefer per-application selection. The chosen installation stays fixed for the session and recovery. Startup checks the live server identity against the selected evidence before SDK or SA activity; contract compatibility never bypasses exact-target checks, policy, ownership, or readiness.

### `BriosaServerSelection`

```ts
export interface BriosaServerSelection {
  readonly executablePath?: string;
  readonly installationId?: string;
  readonly version?: string;
  readonly minimumVersion?: string;
  readonly maximumVersionExclusive?: string;
  readonly excludedVersions?: readonly string[];
  readonly searchRoots?: readonly string[];
  readonly allowedScopes?: readonly InstallationScope[];
  readonly allowPrerelease?: boolean;
  readonly useLegacyEnvironmentOverride?: boolean;
  readonly spatialAnalyzerExecutablePath?: string;
}
```

### `BriosaInstallation`

```ts
export interface BriosaInstallation {
  readonly installationId: string;
  readonly executablePath: string;
  readonly version: string;
  readonly sourceRevision: string;
  readonly spatialAnalyzerTarget: string;
  readonly runtimeIdentifier: string;
  readonly contractMajor: number;
  readonly contractRevision: number;
  readonly manifestSha256: string;
  readonly scope: InstallationScope;
}
```

### `BriosaDiscoveryDiagnostic`

```ts
export interface BriosaDiscoveryDiagnostic {
  readonly path: string;
  readonly code: string;
}
```

### `BriosaDiscoveryReport`

```ts
export interface BriosaDiscoveryReport {
  readonly installations: readonly BriosaInstallation[];
  readonly diagnostics: readonly BriosaDiscoveryDiagnostic[];
  readonly selected: BriosaInstallation | null;
  readonly diagnosticCode: string | null;
}
```

## Inspect a Selection Without Starting SA

```ts
import { discoverInstallations } from "briosa";

const report = await discoverInstallations({ minimumVersion: "0.7.0" });
for (const diagnostic of report.diagnostics) console.log(diagnostic.code);
console.log(report.selected?.version ?? report.diagnosticCode);
```

Diagnostic paths are explicitly requested local data. Avoid publishing them in logs or support reports. See [Installation Selection](/docs/deployment/installation-selection) and [Diagnostics](/docs/deployment/diagnostics) for deployment guidance.

[Released Source](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/installationModels.ts)
