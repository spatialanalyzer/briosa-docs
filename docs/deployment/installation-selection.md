---
title: Select Compatible Side-by-Side Installations
description: Discover exact-target Briosa installations and choose a compatible server separately for each application.
---

# Select Compatible Side-by-Side Installations

The contract-aware client line separates the protocol artifact used to build a
client from the Briosa distribution it can run. One workstation can keep SA
2024.1.0508.5 and SA 2026.1.0529.7 products, including several Briosa versions
for either target. Each application makes its own selection.

:::note[Release Transition]

This guide describes the committed implementation for Server 0.7.0 and client
0.2.0. Check [Release Status](/docs/releases) for actual package availability.
Published 0.1.1 clients keep their exact Server 0.6.1 pin; installing a newer
server does not change those clients.

:::

## Which Versions Must Match?

| Coordinate | Required Relationship |
| --- | --- |
| Client package SA target | Exactly matches the selected server product |
| Activated SDK and connected SA | Each exactly matches the server target before execution |
| Behavioral contract | Same major; server revision meets the client's minimum |
| Server package version | Meets the application's optional version constraints |
| Generation artifact | Remains pinned for reproducible client builds |
| Running server provenance | Matches the selected installation's manifest |

Contract **1.0** covers lifecycle, errors, execution outcomes, presence,
capabilities, and ownership. A matching protobuf package alone is insufficient.
The initial client requires major 1, revision 0. A newer sufficient revision
within major 1 is eligible unless explicitly excluded.

The only legacy exception is the published Server **0.6.1** build at source
`32a3b56ba4ae31ea5ec6ec3b2aa051eb61c866aa`, for the exact target. Other servers
without contract metadata are rejected.

## Automatic Selection

Explicit startup reads the 64-bit Briosa Registry index and committed package
stores. Registry entries point to installations; receipts, manifests, and
integrity checks substantiate those hints. Canonical stores remain discoverable
when older installers have not registered them. Custom stores can be registered
with the installer or supplied as explicit search roots.

The client filters by exact target, Windows x64 product, compatibility, scope,
and application constraints, then chooses the highest eligible stable release.
Prereleases require opt-in. Identical copies prefer machine scope, then user
scope, then portable scope and a stable normalized-path order. Conflicting
provenance at the same release precedence is an ambiguity error.

An elevated client automatically considers only protected machine installations.
Discovery is offline and does not launch a server, activate COM, or contact SA.
Constructing a client also has no startup side effects.

## Select Per Application

For a .NET application referencing `Briosa.2026.1.0529.7`:

```csharp
using Briosa;

var selection = new BriosaServerSelection
{
    Version = "0.7.0",
    SearchRoots = [@"D:\Briosa Packages"],
};
var report = BriosaInstallations.Discover(selection);

await using var client = new BriosaClient();
await client.StartAsync(new BriosaStartOptions
{
    ServerSelection = selection,
    LaunchSpatialAnalyzer = false,
});
```

For Node.js with the exact-target package installed under the `briosa` alias:

```typescript
import { createBriosaClient, discoverInstallations } from 'briosa';

const serverSelection = { version: '0.7.0' };
const report = await discoverInstallations(serverSelection);
const client = createBriosaClient();
try {
  await client.start({ serverSelection, launchSpatialAnalyzer: false });
  // Use required capabilities only after readiness succeeds.
} finally {
  await client.stop();
}
```

For Python in an environment containing one exact-target distribution:

```python
from briosa import BriosaClient, BriosaServerSelection, BriosaStartOptions

async def run():
    selection = BriosaServerSelection(version="0.7.0")
    async with BriosaClient() as client:
        await client.start(BriosaStartOptions(
            server_selection=selection,
            launch_spatial_analyzer=False,
        ))
```

These examples attach to an already-running eligible SA application. A separate
application targeting SA 2024 uses its SA 2024 package and its own selector.
Python environments and Node applications should each contain one target's
client. No global "active Briosa" setting is needed.

Selectors also support an installation ID or absolute executable path,
inclusive minimum/exclusive maximum versions, exclusions, permitted scopes, and
prerelease opt-in. An ID and executable path are mutually exclusive. Invalid
explicit choices fail; the client does not silently choose another installation.

The selection remains fixed for the session. Recovery uses the same distribution.
A newly installed release becomes eligible only on a fresh explicit startup.

## Find the SpatialAnalyzer Application

The server resolves an exact-target installed SA executable from Windows
installation evidence and its file version. Multiple copies of the same exact
release require an explicit application path. Clients can pass that path as
per-process startup configuration; it is not an arbitrary executable-launch RPC.

Installed application evidence, activated SDK identity, and connected SA
identity are independent. Briosa does not run `/Regserver`, switch the registered
SDK, or close another SA window. See
[Several SpatialAnalyzer Releases](/docs/concepts/exact-targets#using-several-spatialanalyzer-releases-on-one-machine)
for SDK registration and execution ownership.

Side-by-side installation does not guarantee concurrent MP execution across SA
instances. Exact runtime identities and the bounded readiness probe remain
mandatory.

## Migrate Existing Scripts

Existing packages retain their original runtime requirements:

| Client Version | Server Selection |
| --- | --- |
| 0.1.0 | Its exact pinned Server 0.6.0 build for the package's SA target |
| 0.1.1 | Its exact pinned Server 0.6.1 build for the package's SA target |
| 0.2.0 | Contract-aware selection, plus the reviewed Server 0.6.1 exception |

Installing a new server does not broaden an old client's compatibility. Keep
the old distribution installed until applications using it have migrated.

Replace ambient `BRIOSA_SERVER_PATH` with a per-start selection option. The new
client line ignores that variable by default. A temporary explicit
`UseLegacyEnvironmentOverride` / `useLegacyEnvironmentOverride` /
`use_legacy_environment_override` option enables it; direct selectors take
precedence.

Keep each extracted portable distribution complete, including its manifest and
worker. Use an absolute server path or explicit search root. Use the installer's
registration rescan for committed custom stores rather than setting a shared
environment variable.

Keep old distributions while older applications depend on them. Rollback means
selecting a previous compatible installation for that application, or restoring
its previous client package. It never replaces a running session's distribution.

## Diagnose Selection Without Starting SA

The discovery report exposes validated installations, the selected descriptor,
and rejection codes. Distinguish:

- Nothing installed in the requested locations.
- Installations found, but none match the target, contract, or constraints.
- Conflicting installations with ambiguous provenance.
- Damaged or stale metadata.
- A launched server whose live identity differs from the selected manifest.

Detailed paths are available in explicitly requested discovery reports. Ordinary
operational logs continue to avoid sensitive paths and arguments. Verify
capabilities after server identity admission: generating a method does not prove
it is enabled in the current worker generation.

## Compatibility Evidence

The [authoritative matrix](https://github.com/spatialanalyzer/briosa/blob/main/compatibility/matrix.json)
distinguishes tested package pairs from declared compatibility. Packaged clients
run against packaged servers with fake SDK workers; licensed SA observations
are recorded separately. A future release is never described as already tested.

Server releases after the initial bootstrap must pass the
[retained published-client gate](https://github.com/spatialanalyzer/briosa/blob/main/compatibility/README.md).
Discovery and lifecycle behavior are defined by the
[shared contract](https://github.com/spatialanalyzer/briosa/blob/main/docs/architecture/installation-selection-and-compatibility.md).
