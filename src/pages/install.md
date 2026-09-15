---
title: Install Briosa
description: Get Briosa Installer and manage exact-target Briosa gRPC server installations on your Windows workstation.
---

# Install Briosa

Briosa Installer is the Windows desktop app for installing and maintaining
Briosa gRPC server packages. Use it to keep several server versions side by
side, inspect their exact SpatialAnalyzer targets, and verify, repair, or remove
individual installations.

Run the installer on each Windows host where you need Briosa. Its inventory and
SDK Setup describe that machine; it does not manage other hosts remotely.

:::info[Download Availability]

As of September 15, 2026, Briosa Installer is a functional review build. No
public installer release or usable public package catalog has been published.
Check the [Briosa Installer releases](https://github.com/spatialanalyzer/briosa-installer/releases)
for published downloads. There is no production download to select yet.

The instructions below describe the implemented workflow for an approved
review distribution and signed package source supplied by the project or your
organization. Contributors can use the
[installer build guide](https://github.com/spatialanalyzer/briosa-installer/blob/main/docs/development.md).

:::

## Before You Begin

You need a Windows x64 machine and access to the package source you intend to
use. The complete installer distribution includes its .NET runtime, so you do
not need to install .NET separately to open the app.

To execute MP commands, you also need a separately installed, running, and
licensed SpatialAnalyzer environment with the matching SDK. Installing Briosa
does not install SpatialAnalyzer, its SDK, or a license. You can open the
installer and manage packages before preparing that runtime environment.

Choose a server package for the **exact SpatialAnalyzer release** your
application uses. The Briosa server version and its SA target are separate
values; matching only an SA release year is insufficient. See
[Prerequisites](/docs/getting-started/prerequisites) for the current target and
SDK ownership requirements.

## Get and Open the App

Once a release is published, download its complete Windows x64 ZIP and adjacent
`.sha256` file from the installer releases page or your organization's approved
software portal. The archive is named
`briosa-installer-<version>-win-x64.zip`. For review access today, obtain that
complete distribution from the project or your organization.

1. Compare the archive's SHA-256 with its accompanying checksum before
   extracting it. In PowerShell, `Get-FileHash -Algorithm SHA256 <archive-path>`
   reports the archive's hash.
2. Extract the **entire** archive into a permanent folder. Keep the application,
   launcher, CLI, runtime, and other included files together.
3. Open **`Briosa.Launcher.exe`** from the extracted folder. Use this launcher
   for later starts so it can open the installer version you have selected.
4. Optionally run the included `Install-DesktopShortcut.ps1` to create a Start
   menu entry pointing at that launcher.

The release-signing configuration identifies **David Lucas** as the Windows
publisher for official signed distributions. Windows file properties let you
inspect their digital signatures. This release identity does not mean that a
local review build is a signed production release.

## Choose a Package Source

The app opens on **Installations**. When no source is configured, choose
**Configure package source**, or open **Settings → Package sources**.

1. Enter an approved HTTPS catalog URL, or browse to a catalog on a local disk
   or network share. Use a catalog supplied by the project or your organization,
   rather than a ZIP download URL.
2. Open **Access and publisher…** to choose the access method and configure
   the publisher's public key. Compare its fingerprint with the value supplied
   through a trusted project or administrator channel before approving it.
3. Choose **Test connection** to check the source without downloading packages.
4. Return to **Installations**. The saved source loads automatically;
   **Refresh** reloads the catalog and local inventory.

Settings save automatically. Credentials are kept in Windows Credential Manager
for the selected catalog. The app can browse unsigned metadata, but installation
requires an approved publisher and a valid signed catalog, followed by package
integrity verification.

Release packaging can supply public-source defaults. Until the public catalog
is published, use an approved review or internal source. You can select an
enterprise mirror before any public request; changing to an inaccessible mirror
does not cause a fallback to public hosting.

For offline use, your administrator must provide the catalog, its matching
signature, and all referenced packages and metadata. A cached catalog alone is
not a complete offline source. See the
[enterprise administration guide](https://github.com/spatialanalyzer/briosa-installer/blob/main/docs/administration.md)
for mirror preparation, authentication, and optional administrator policy.

## Install a Briosa Server

**Installations** groups available and installed server versions by exact SA
release. The search box and SA/status filters help narrow the list.

1. Check **Settings → Advanced → Installation scope**. **Current user** uses
   `%LOCALAPPDATA%\Briosa\Packages`. **All users** uses
   `%PROGRAMDATA%\Briosa\Packages` and requires an authorized administrator
   terminal for changes. The GUI does not elevate automatically for package
   installation. Changing scope changes the inventory you see; it does not move
   existing packages.
2. Select the required server version under the exact SA release your
   application needs, then choose **Install…**.
3. Review the Briosa version, SA target, source, destination, download size,
   and publisher verification before confirming **Install**.
4. Wait for the operation to finish. The installed version appears in the
   inventory. Select it and open **Details** to find its package location and
   provenance.

Each new version is installed independently alongside existing versions. Your
engineering team chooses when an application adopts it. The installer does not
update application configuration or install the .NET, Python, or JavaScript
client libraries for you.

### Start the Installed Server

Installing a package puts its files on disk; it does not launch the server,
activate the SDK, start SpatialAnalyzer, or establish MP readiness. The installer
does not need to remain open while you use Briosa.

Use the selected package's location from **Details** and follow
[Windows Deployment](/docs/deployment/windows) for diagnostics and manual server
startup. The [startup guide](/docs/getting-started/run-the-server) explains the
client and gRPC lifecycle workflows and their release status.

The server, SDK, and SpatialAnalyzer application run on the same host. Current
server releases use a local loopback endpoint. Installing Briosa on several
machines does not enable remote gRPC access or concurrent control of arbitrary
SA windows.

## Maintain Installed Servers

Select an installed version in **Installations** to reveal its maintenance
actions. Close applications using that package before repairing or removing it.

| Action | What It Does |
| --- | --- |
| **Verify files** | Checks installed files against their recorded hashes without downloading a package. |
| **Repair…** | Restores the exact installed artifact. The configured source must still provide that artifact with its original publisher and payload identity in a valid signed catalog. Repair does not upgrade the server. |
| **Remove…** | Removes the selected version while retaining other versions. Confirm with your team that no application still needs it. In-use files can prevent removal; the installer does not stop their processes for you. |
| **Refresh** | Reloads installed packages and available server versions. To adopt a newer server, install that version separately and update your application's selection deliberately. |

If an operation is interrupted, review **Activity** and its recovery guidance.
Use **Settings → Advanced → Recover interrupted operations…** when package
recovery is required. Let recovery complete before another package change;
do not manually edit managed package files or their receipts.

**Activity → Needs attention** helps locate failed operations. **View details**
shows the outcome and guidance; **Export support report…** creates a report
that omits credentials, source URLs, local paths, and SA job data.

## Check SpatialAnalyzer SDK Setup

Open **SDK Setup** to inspect installed SA releases and the configured SDK
registration. The page refreshes its local observations on each visit;
**Refresh** repeats the scan. Reading this page does not activate the SDK or
execute MP commands.

The **Registered** marker identifies the installation whose SDK path matches
the configured registration. It is not proof that a running Briosa session is
compatible or ready. Use the row's information icon for details and its folder
icon to open that SA installation directory.

When a registration change is needed, **Change SDK…** lets you choose an
installed SA release and review the change. Close SpatialAnalyzer, its SDK,
and Briosa servers first, coordinate with other users of the shared SDK, and
approve Windows elevation only after reviewing the selected installation.
The app uses the reviewed installed Hexagon registration procedure and checks
the result.

This changes shared registration for future SDK sessions. It does not switch
an existing session or relax the server's exact-target checks. An SDK marked
**Recommended** reflects local installation information, not a wider Briosa
compatibility guarantee; an older SDK may be required by your workflow. See
[SDK registration and recovery](https://github.com/spatialanalyzer/briosa-installer/blob/main/docs/sdk-registration.md)
before making the change.

## Update Briosa Installer

The management app has its own version, independent of installed server
versions. Its updates are under **Settings → Installer updates**.

1. Choose **Check for updates**.
2. When a newer version is available from your approved source, choose
   **Download update…** and review the selection. The app verifies the download
   and selects it for the next launch.
3. Choose **Restart to update…** when ready. Downloading and restarting are
   separate actions; settings and installed servers are preserved.

Installer updates use the server package source by default. To use a different
catalog, turn off **Use the same source as server packages** in **Settings →
Package sources** and configure the update source. An unavailable explicit
update source has no public fallback.

**Previous versions and recovery** lets you deliberately select an older
installer. **Downloaded installer versions** provides verification, repair,
removal, and selection for locally installed app versions. Continue launching
through `Briosa.Launcher.exe` so the selected version takes effect.

## Next Steps

- [Prepare the server and SpatialAnalyzer session](/docs/getting-started/run-the-server)
- [Make the first request](/docs/getting-started/first-request)
- [Understand exact-target compatibility](/docs/concepts/exact-targets)
- [Inspect health and discovery](/docs/deployment/health-and-discovery)

Briosa is an independent Apache-2.0 project. SpatialAnalyzer and the SA SDK are
Hexagon products; Briosa is not affiliated with, endorsed by, or supported by
Hexagon.
