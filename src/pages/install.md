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

<div className="margin-bottom--md"><a className="button button--primary button--lg" href="https://github.com/spatialanalyzer/briosa-installer/releases/download/v0.3.0/briosa-installer-0.3.0-win-x64-setup.exe" download>Download Briosa Installer</a></div>

**Version 0.3.0 · Windows x64 · Complete offline setup**

[SHA-256 checksum](https://github.com/spatialanalyzer/briosa-installer/releases/download/v0.3.0/briosa-installer-0.3.0-win-x64-setup.exe.sha256)
· [Release notes](https://github.com/spatialanalyzer/briosa-installer/releases/tag/v0.3.0)
· [All downloads](https://briosa.dev/downloads)

Installer 0.3.0 and Server 0.8.0 include security-patched .NET runtime 10.0.12.
Update both the Installer and your installed server packages to receive the fixes;
installing a newer system-wide .NET runtime does not update these self-contained
packages.

## Before You Begin

Setup requires Windows x64 build 19045 or later. Acquiring server packages requires
access to your chosen package source. The installer includes its .NET runtime, so you do
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

## Install and Open the App

1. Select **Download Briosa Installer** above, or obtain the same setup package
   from your organization's approved software portal.
2. Open the downloaded `briosa-installer-0.3.0-win-x64-setup.exe` file.
3. Follow the setup wizard. It installs for your Windows account; the default
   location is `%LOCALAPPDATA%\Programs\Briosa Installer`.
4. Select **Launch Briosa Installer** when setup finishes. For later starts,
   open **Briosa Installer** from the Windows Start menu.

Setup, its uninstaller, and the application carry timestamped Windows signatures
with publisher **David Lucas**. You can inspect them through file properties.
The adjacent checksum provides an additional integrity check:
`Get-FileHash -Algorithm SHA256 <downloaded-setup-file>`.

The setup package includes the runtime and works offline. Access to a public,
internal, or complete offline catalog is needed when acquiring server packages.
Setup does not install SpatialAnalyzer or alter SDK registration.

### Portable and Managed Deployment

The [downloads index](https://briosa.dev/downloads) also provides a complete ZIP
for portable deployment and mirroring. Extract the entire ZIP into a permanent
folder and open `Briosa.Launcher.exe`; keep all included files together. The
optional `Install-DesktopShortcut.ps1` creates a Start menu shortcut for that copy.
For unattended setup and machine-store deployment, see the
[administration guide](https://github.com/spatialanalyzer/briosa-installer/blob/main/docs/administration.md).

## Choose a Package Source

The app opens on **Installations**. Choose **Use Briosa public source** to load
the published catalog with its bundled approved publisher key. Installer updates
use the same source by default.

For an enterprise mirror or offline catalog, choose **Configure package source**,
or open **Settings → Package sources**, before choosing the public source:

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

Opening the app, navigating, or changing appearance makes no public request
before you choose a source. The public catalog is
`https://briosa.dev/downloads/catalog.json`. An unchanged enterprise mirror uses
the same [publisher key](https://briosa.dev/downloads/keys/catalog-public.pem);
verify its fingerprint against the
[maintainer signing record](https://github.com/spatialanalyzer/briosa/blob/main/docs/maintainers/release-signing.md).
An inaccessible mirror never causes a fallback to public hosting.

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

With Briosa Installer **0.2.0** or later and a Briosa **0.5.1** or later server
package, select the installed version and choose **Open Control Center**. The
installer verifies the package and opens its status window. Choose **Start
server** when ready, then follow [Windows Control Center](/docs/deployment/control-center)
to set up version evidence, start the SDK, and connect to your running SA instance.

For manual startup, use the selected package's location from **Details** and
follow [Windows Deployment](/docs/deployment/windows). The
[startup guide](/docs/getting-started/run-the-server) explains the client and
gRPC lifecycle workflows and their release status.

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

## Upgrade or Uninstall the App

You can use **Settings → Installer updates** or run a newer setup package from
this page. Close Briosa Installer before running setup. Setup preserves your
settings and server packages, and retains a selected installer newer than the
setup version. The app displays its actual running version; Windows Installed
apps displays the setup version.

To uninstall, open **Windows Settings → Apps → Installed apps**, find **Briosa
Installer**, and choose **Uninstall**. The application and Start menu shortcut
are removed. Settings, credentials, and downloaded packages are retained so a
later installation can use them. Remove unwanted packages through Briosa
Installer before uninstalling it. SpatialAnalyzer and SDK registration are unchanged.

## Validation Scope

Automated tests cover source isolation, signed package maintenance, installer
selection, setup/reinstall/uninstall, upgrades, and preservation of user data.
Setup automation runs on GitHub-hosted Windows; native review used Windows 11
Pro build 26200.
Real Artifactory/proxy deployments, standard-user managed rollout, native
high-contrast/Narrator, and mixed-monitor DPI acceptance remain unverified.
Organizations should validate their own authentication and workstation policies
before deployment. See the
[validation record](https://github.com/spatialanalyzer/briosa-installer/blob/main/design-qa.md)
for the completed checks and their limits.

## Next Steps

- [Prepare the server and SpatialAnalyzer session](/docs/getting-started/run-the-server)
- [Make the first request](/docs/getting-started/first-request)
- [Understand exact-target compatibility](/docs/concepts/exact-targets)
- [Inspect health and discovery](/docs/deployment/health-and-discovery)

Briosa is an independent Apache-2.0 project. SpatialAnalyzer and the SA SDK are
Hexagon products; Briosa is not affiliated with, endorsed by, or supported by
Hexagon.

## Server Package Compatibility

Server 0.8.0 schema-3 distributions require **Briosa Installer 0.3.0** or later. Install each exact SA target independently. The installer does not supply SpatialAnalyzer or its license. See [Installation Selection](/docs/deployment/installation-selection) for client 0.3.0 discovery and migration.
