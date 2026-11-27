---
title: Select Compatible Side-by-Side Installations
description: Discover exact-target Briosa installations and choose a compatible server separately for each application.
---

# Select Compatible Side-by-Side Installations

Clients 0.2.0 and later separate the protocol artifact used to build a
client from the Briosa server distribution it can run. One workstation can keep SA
2024.1.0508.5 and SA 2026.1.0529.7 products, including several Briosa versions
for either target. Each application makes its own selection.

:::note[Clients 0.5.1 and 0.5.2]

This guide describes Server 0.10.1 and the current clients, .NET and Python
0.5.1 and JavaScript/TypeScript 0.5.2, available for both exact SA targets. See
[Release Status](/docs/releases) for package links and validation. Client 0.4.0
keeps selecting Server 0.9.x (such as 0.9.2) and rejects Server 0.10.x, so keep
0.9.2 installed beside 0.10.1 until its applications migrate.
Published 0.1.1 clients keep their exact Server 0.6.1 pin; installing a newer
server does not change those clients.

:::

## Which Versions Must Match?

| Coordinate | Required Relationship |
| --- | --- |
| Client package SA target | Exactly matches the selected server product |
| Activated SDK and connected SA | Each exactly matches the server target before execution |
| Declared client compatibility | Server installation matches the exact SA target and declares support for this client (Clients 0.5.0, 0.5.1, and 0.5.2 work with Servers 0.10.0 and 0.10.1; Client 0.4.0 works with Server 0.9.x) |
| Server package version | Meets the application's optional version constraints |
| Generation artifact | Remains pinned for reproducible client builds |
| Running server provenance | Matches the selected installation's manifest |

Server-client compatibility covers lifecycle, errors, execution outcomes,
presence, capabilities, admission, and ownership. A matching protobuf package
or version number alone is insufficient. Clients **0.5.0** and **0.5.1**, and
JavaScript/TypeScript client **0.5.2**, work with Servers **0.10.0** and
**0.10.1**, and Client **0.4.0** works with Server **0.9.x** (0.9.0 through
0.9.2). Before launch, client 0.5.x
checks that the installation matches the exact SA target and declares support
for this client; it rejects Server 0.9.x and earlier, while client 0.4.0 rejects
Server 0.10.x. For server releases after 0.10.0, a patch update keeps the same
clients working; a minor update may require a client upgrade. Earlier pairings:
Servers **0.7.0** and **0.8.0** work with clients **0.2.0** and **0.3.0**, and
Server **0.6.0** works only with client **0.1.0**. Client 0.1.1 pins the exact
Server 0.6.1 build; clients 0.2.0 and 0.3.0 also accept that reviewed build as
an exception. Other servers without
compatibility metadata are rejected. Direct gRPC from the published protocol
artifact is also supported.

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
    Version = "0.10.1",
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

const serverSelection = { version: '0.10.1' };
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
import asyncio

from briosa import BriosaClient, BriosaServerSelection, BriosaStartOptions


async def main():
    selection = BriosaServerSelection(version="0.10.1")
    client = BriosaClient()
    try:
        await client.start(BriosaStartOptions(
            server_selection=selection,
            launch_spatial_analyzer=False,
        ))
        # Use required capabilities only after readiness succeeds.
    finally:
        await client.aclose()


asyncio.run(main())
```

Pass custom startup options to `start()` rather than entering `async with`,
which starts the client with default options.

These examples attach to an already-running eligible SA application. A separate
application targeting SA 2024 uses its SA 2024 package and its own selector.
Python environments and Node applications should each contain one target's
client. No global "active Briosa" setting is needed.

Selectors also support an installation ID or absolute executable path,
inclusive minimum/exclusive maximum versions, exclusions, permitted scopes, and
prerelease opt-in. An ID and executable path are mutually exclusive. Invalid
explicit choices fail; the client does not silently choose another installation.

The selection remains fixed for the session. Recovery uses the same distribution.
A newly installed release becomes eligible only on a fresh explicit startup. For
example, with Servers 0.10.0 and 0.10.1 both installed for the same target, the
published 0.5.0, 0.5.1, and 0.5.2 clients select 0.10.1 on a fresh start unless
the application selects a version explicitly. An application that pins
`0.10.0` keeps that server until you update its pin.

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
| 0.1.0 | Its exact pinned Server 0.6.0 build for the package's SA target (rejects Server 0.6.1) |
| 0.1.1 | Its exact pinned Server 0.6.1 build for the package's SA target |
| 0.2.0 | Servers 0.7.0 and 0.8.0, plus the reviewed Server 0.6.1 exception |
| 0.3.0 | Servers 0.7.0 and 0.8.0 (plus the reviewed Server 0.6.1 exception); [MP argument name migration](/docs/mp-argument-name-migration) |
| 0.4.0 | Servers 0.9.0 through 0.9.2 (`0.9.x`); [runtime redesign migration](/docs/runtime-redesign-migration) |
| 0.5.0 | Servers 0.10.0 and 0.10.1; [Server 0.10 and Client 0.5 migration](/docs/server-0-10-and-client-0-5-migration) |
| 0.5.1 | Servers 0.10.0 and 0.10.1; adds the Server 0.10.1 discovery and policy-denial details |
| 0.5.2 (JavaScript/TypeScript) | Servers 0.10.0 and 0.10.1; same API as 0.5.1 |

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
- Installations were found, but none matched the exact SA target, declared support for this client, and satisfied the application's selection constraints.
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

## API References and Inert Diagnostics

The [.NET](/api/dotnet/sa-2026.1.0529.7/installation-selection), [Python](/api/python/sa-2026.1.0529.7/installation-selection), and [JavaScript/TypeScript](/api/javascript/sa-2026.1.0529.7/installation-selection) references document every selector field, discovery report, and resolve API, with examples that inspect a selection without starting SA. Their SA 2024 counterparts are available in the target section of each reference. Discovery separates rejected candidate diagnostics from the overall selection failure; a structurally valid installation is not necessarily compatible.
