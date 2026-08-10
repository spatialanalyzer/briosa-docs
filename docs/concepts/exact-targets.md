---
title: Match Your SpatialAnalyzer Release
description: Choose the Briosa distribution built for your exact SpatialAnalyzer release.
---

# Match Briosa to Your SpatialAnalyzer Release

Every Briosa server distribution is built for one exact SpatialAnalyzer
release. Choosing the matching distribution is the most important compatibility
rule when setting up Briosa.

:::tip[The Simple Rule]

Your Briosa server, SA SDK, and running SpatialAnalyzer application must all
match the same exact release.

:::

## Why Exact Matching Matters

SpatialAnalyzer MP commands and their SDK bindings can change between releases.
A command may gain an input, return a different value, move to another group,
or behave differently even when its name stays familiar.

An exact Briosa target gives you:

- MP command contracts reviewed for your SpatialAnalyzer release
- Predictable inputs, outputs, defaults, and error behavior
- Documentation that matches the product running on your workstation
- Protection from accidentally automating a different installed release

Briosa does not guess that a nearby version is compatible or silently fall
back to another installation. If it cannot establish an exact match, it keeps
MP commands unavailable rather than risk running them against the wrong
environment.

## What You Need to Do

1. Confirm the exact SpatialAnalyzer release you intend to use
2. Install that release and its matching SA SDK
3. Use the Briosa distribution built for the same release
4. Start the matching SpatialAnalyzer application before starting Briosa

For the first-party client libraries, the client-managed startup flow is
designed to select and launch the correct local Briosa distribution for you. It
will not require your application to put a SpatialAnalyzer version into every
MP command call.

## Using Several SpatialAnalyzer Releases on One Machine

You may install multiple SpatialAnalyzer releases and their matching Briosa
distributions on the same workstation, but the installation order matters.

Windows keeps one active registration for the SA SDK COM server. Installing a
SpatialAnalyzer release replaces that registration instead of adding another
release alongside it. If you install an older SpatialAnalyzer release last,
Windows may therefore activate its older SDK even when you start a newer
SpatialAnalyzer application.

Newer SA SDK releases are currently designed to remain compatible with older
SpatialAnalyzer releases. That makes a multi-version workstation possible when
the latest installed SDK remains registered. Briosa does not yet treat this
backward compatibility as an exact-target match, however. Its current safety
checks require the activated SDK and the running SpatialAnalyzer application to
match the selected Briosa target.

:::caution[Check the Registered SDK Before Switching Releases]

Until Briosa has a reviewed cross-version SDK compatibility policy, switching
between exact targets may require repairing or re-registering the matching SA
SDK. Do not assume that starting a different SpatialAnalyzer application also
changes the SDK registered with Windows.

:::

Each running Briosa server still works with only one exact release and one
active SpatialAnalyzer instance at a time.

When you want to switch releases:

1. Stop the current Briosa session
2. Confirm that Windows is using the SDK required by the target
3. Start the SpatialAnalyzer release you want to use
4. Start the matching Briosa distribution

If several SpatialAnalyzer instances or SDK clients have been open, follow the
[clean startup guidance](../getting-started/prerequisites#use-a-clean-sdk-ownership-state)
before reconnecting.

## What Happens When Something Does Not Match?

Briosa verifies compatibility before it makes MP commands available. When the
loaded SA SDK or connected SpatialAnalyzer application does not match the
server's exact target:

- Briosa remains available for status and diagnostic information
- MP commands remain unavailable
- The client reports that startup or readiness could not be established
- No command is sent merely to test whether the mismatched combination happens
  to work

Select the correct Briosa distribution or restart the intended SpatialAnalyzer
release, then try starting Briosa again.

## Why the Version Stays Out of Your Command Calls

The SpatialAnalyzer release belongs to the installed Briosa distribution, not
to each MP method name. Your application calls familiar operations such as
`GetWorkingDirectory` without adding a release number to the call.

This keeps application code recognizable and consistent while Briosa handles
the release-specific implementation behind the client library.

## Current Target

The current baseline targets SpatialAnalyzer `2026.1.0529.7`. Its
[version-specific MP Command Catalog](/mp-command-catalog/2026.1.0529.7/overview)
shows the commands identified for that release and which ones Briosa currently
supports.

For the underlying readiness checks, see
[Readiness is more than connection](./readiness). The authoritative target
implementation lives in the
[Briosa server repository](https://github.com/spatialanalyzer/briosa/tree/main/targets/2026.1.0529.7).
