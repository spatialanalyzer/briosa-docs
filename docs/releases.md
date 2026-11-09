---
title: Release Status
description: Released Briosa products, client package availability, and remaining validation before v1.0.
---

# Release Status

Briosa continues to ship **v0.x releases** while validation and product adoption
progress. These releases include working implementations; a v0.x version does
not mean that every documented API is only a proposal.

## Available Products

| Product | Released Version | Availability |
| --- | --- | --- |
| Briosa Server and Control Center | [0.10.0](https://github.com/spatialanalyzer/briosa/releases/tag/v0.10.0){/* release-pending */} | Independent Windows distributions and protocols for SA 2024.1.0508.5 and SA 2026.1.0529.7; behavioral compatibility contract 3.0. [0.9.2](https://github.com/spatialanalyzer/briosa/releases/tag/v0.9.2) remains available for client 0.4.0 applications |
| Briosa Installer | [0.4.0](https://github.com/spatialanalyzer/briosa-installer/releases/tag/v0.4.0) | Signed Windows setup and portable distribution; patched .NET runtime 10.0.13 and the brand v2 design |
| .NET client | 0.5.0{/* release-pending */} | NuGet: [SA 2024](https://www.nuget.org/packages/Briosa.2024.1.0508.5/0.5.0), [SA 2026](https://www.nuget.org/packages/Briosa.2026.1.0529.7/0.5.0) |
| Python client | 0.5.0{/* release-pending */} | PyPI: [SA 2024](https://pypi.org/project/briosa-2024-1-0508-5/0.5.0/), [SA 2026](https://pypi.org/project/briosa-2026-1-0529-7/0.5.0/) |
| JavaScript/TypeScript client | 0.5.0{/* release-pending */} | npm: [SA 2024](https://www.npmjs.com/package/@spatialanalyzer/briosa-2024.1.0508.5/v/0.5.0), [SA 2026](https://www.npmjs.com/package/@spatialanalyzer/briosa-2026.1.0529.7/v/0.5.0) |

Use [Install Briosa](/install) to obtain the released Windows products and
[Install the Exact-Target Client](/docs/getting-started/run-the-server#install-the-exact-target-client)
for registry installation commands. A separately installed and licensed
SpatialAnalyzer environment remains required for MP execution. Connections
remain local and use loopback.

Each package name contains the exact SA target; its **0.5.0** package version is
independent of SA and the server version. Client 0.5.0 selects a server implementing
behavioral contract major 3 with revision at least 0. Its generation artifact is
pinned to the frozen Server 0.10.0 protocol. Client 0.4.0 keeps selecting a
major-2 server, so keep Server 0.9.2 installed beside 0.10.0 until its
applications migrate. C# uses `using Briosa;`, Python uses `import briosa`, and JavaScript uses
the npm alias `briosa`. Use separate environments or applications for different targets.
See [installation selection and migration](/docs/deployment/installation-selection).

## Server 0.10.0 and Clients 0.5.0

Server [0.10.0](https://github.com/spatialanalyzer/briosa/releases/tag/v0.10.0){/* release-pending */}
and the exact-target 0.5.0 clients introduce **behavioral contract major 3**,
revision 0, for both exact targets. This is a breaking release: client 0.5.0
selects only major-3 servers, and client 0.4.0 keeps working with Server 0.9.2
installed side by side. The [contract major 3 migration guide](/docs/contract-major-3-migration)
covers every change for applications.

- **Operation admission.** A named profile replaces the `Allow` and `Deny`
  arrays, and the packaged `standard` default no longer admits device, motion,
  external IO, code execution, file deletion, operator UI, or exclusive
  workflows. Discovery reports the profile, a policy fingerprint, and each
  operation's risk flags, duration class, validation status, and admission.
  See [Operation Admission](/docs/deployment/operation-admission).
- **Waiting defaults.** Ten request defaults changed so that measuring,
  starting, and arriving wait and CAD import does not prompt.
- **Nine operations removed.** Eight failed on both exact targets in licensed
  probe sessions, and no operator could complete the ninth, the vector name list
  runtime select. See [Replace Removed Operations](/docs/contract-major-3-migration#replace-removed-operations).
- **Argument rules.** The server rejects omitted scale factors, joints, indexes,
  required names, and model-link parameters instead of sending `0` or an empty
  string, and three optional inputs are now omitted when absent. The clients
  require every input the server requires.
- **Typed outcomes.** MP code `4` is reported as a partial success with its
  outputs. An SA SDK exception has its own failure kind, `SdkCallFaulted`.
  Lifecycle failures gain caller-cancellation kinds, and an accepted lifecycle
  transition continues detached when its caller stops waiting.
- **Operator settings.** Execution budgets follow each operation's duration
  class, and `Briosa:SpatialAnalyzer:InteractionMode` can quiet blocking
  SpatialAnalyzer dialogs; a dialog that still blocks a command reports
  `sa-modal-dialog-open`. See [Windows Deployment](/docs/deployment/windows#worker-time-bounds).

Portable CI ran the full server suites on both targets, the conformance package's
15 scenarios against the six 0.5.0 client candidates, and the release protocol
check against Server 0.9.2, which verified the nine reviewed retirements. The
published 0.4.0 clients reject the 0.10.0 servers as expected. Licensed probe
sessions on October 7, October 25, and November 9, 2026 decided the removals
and several argument rules; Server 0.10.0 itself was not run against licensed
SpatialAnalyzer. The release's acceptance pass on the signed packages, covering
installation, side-by-side discovery, Control Center navigation, and upgrade and
rollback, is recorded with the release.{/* release-pending */}

## Server 0.9.2 Corrections

Server [0.9.2](https://github.com/spatialanalyzer/briosa/releases/tag/v0.9.2),
released on October 4, 2026 for both exact targets, is a compatible correction
release. It keeps behavioral contract major 2, revision 0, works with the same
0.4.0 clients, and makes no protobuf or public API schema change. Default
operation admission is unchanged. Moving an application from 0.9.1 to 0.9.2
requires no client or generated-binding change.

- **Exact SDK step text.** 25 SA 2026 operations now send the step text shown
  by the SDK instead of the installed-documentation text. 13 differ in
  punctuation or spacing, such as `Save As...`, `Set SA's Window Pos` with a
  straight apostrophe, `(Rx,Ry,Rz)`, and two spaces before the hyphen in
  `Export IGES File  - Entire Model`; 12 differ only in letter case. Both
  targets now send `Make Pipe Relationship Cut`.
- **SDK exceptions no longer stop the worker.** When the SDK raises an
  exception during an MP sequence, Briosa now reports the phase it can prove,
  with a diagnostic code and no exception text, and keeps the worker in
  service. A fault before `ExecuteStep` is not started; a fault during
  execution or MP result retrieval leaves the outcome unknown; a fault in an
  output getter after MP success completes the command with that output
  unavailable. A fault before execution currently reports kind `Internal`, not
  started, and do not replay. Faults that leave the worker's STA untrustworthy
  still stop the worker. See
  [Understand MP Command Results](/docs/concepts/execution-outcomes#when-the-sdk-raises-an-exception).
- **Validation only.** All supervisor deadlines use the injected time provider,
  with unchanged production timeouts. New portable checks compare every
  implemented SA 2026 binding with the committed exact-target evidence and
  report protobuf differences between the two exact targets, and an opt-in
  harness prepares the licensed probe session. None of these changes runtime
  behavior.

:::warning[Most Corrected Step Text Is Still At Risk]

The licensed probe session ([briosa#277](https://github.com/spatialanalyzer/briosa/issues/277))
ran on October 7, 2026. On SA 2026.1.0529.7 it sent three of the 25 corrected
steps in both forms. `Compute Group to Group Orientation (Rx,Ry,Rz)` and
`Show / Hide Points` were accepted with either text, and
`Angle Between Two Planes' normals` succeeded only with the corrected SDK text.
The other 22 corrected steps and the SA 2024 `Make Pipe Relationship Cut` step
still have no licensed validation; treat them as **At Risk**.

:::

Portable CI and the release workflow ran the full server suites, package smoke
tests, and the retained-client gate against the published major-2 and major-1
clients. 0.9.2 was not run against licensed SpatialAnalyzer. The corrected step
text and the new SDK-exception reporting have no licensed validation.

## Server 0.9.1 Corrections

Server [0.9.1](https://github.com/spatialanalyzer/briosa/releases/tag/v0.9.1),
released on October 1, 2026 for both exact targets, is a compatible correction
release. It keeps behavioral contract major 2, revision 0, works with the same
0.4.0 clients, and makes no protobuf or public API schema change. Default
operation admission is unchanged. Moving an application from 0.9.0 to 0.9.1
requires no client or generated-binding change.

- **Exact SDK argument labels.** 0.9.0 sent 13 SA 2026 labels and 12 SA 2024
  labels differently from the exact-target SDK, such as `Z Uncertainty` instead
  of `Z Uncertainty)`. 0.9.1 restores the exact labels.
- **Delete Cloud Points by X Y Z Range.** 0.9.0 sent the wrong MP step and sent
  omitted bounds as `0`. 0.9.1 restores the 0.8.0 behavior: it sends the exact
  `Delete Cloud Points by X Y Z Range` step and sets each bound only when the
  caller supplies it. Later licensed probes found that requests with bounds
  still fail on both targets; see the October 25, 2026 correction below.
- **Vector-group reference lists.** `MakeCollectionVectorGroupNameRefListRuntimeSelect`
  now returns its result instead of a `DataLoss` error after the MP step succeeds.
- **Vector percentages.** `GetVectorGroupProperties` now reads tolerance
  percentages as doubles, so fractional values are no longer truncated.
- **Typed reconnect errors.** Reconnecting a generation that is connected but
  not ready for commands now returns `FAILED_PRECONDITION` with a typed SDK
  lifecycle error instead of gRPC `UNKNOWN`; see
  [Diagnose and Recover the SDK](/docs/concepts/client-lifecycle#diagnose-and-recover-the-sdk).
  Control Center reconnect actions report that diagnostic.
- **SA 2024 interop fingerprint.** SA 2024 packages 0.6.0 through 0.9.0
  reported the SA 2026 interop fingerprint in `GetServerInfo`, offline
  diagnostics, and support bundles. 0.9.1 reports the SA 2024 target's own
  `sha256:98F7CA51055497263B3C36384D390784920257ABF3D70C8F1A40CEB6A8FDCFE2`.
- **Hardening.** The server reads its packaged `appsettings.json`, including the
  operation allowlist, from the package directory rather than the caller's
  working directory; explicit content-root overrides still apply. The worker
  pipe now verifies the operating-system-reported client process.

:::warning[Correction (October 25, 2026): Delete Cloud Points by X Y Z Range Fails When Bounds Are Set]

The original 0.9.1 note below said that
`cloud_and_mesh_operations.delete_cloud_points_by_xyz_range` can delete cloud
points again. The tested requests did not. Licensed probes on October 7, 2026
called the operation through the public API on both exact targets, using a
server build whose operation code is identical to 0.9.1 and 0.9.2. Each call ran
against a disposable 8-point cloud, once with all six bounds and once with only
the X bounds. Every call returned MP code -1 (`FAILED_PRECONDITION`) and deleted
nothing: each cloud still held 8 points afterwards.

The bounds cause the failure. SA documents them as optional doubles, and the
exact-target SDK code marks the setter for that argument type as not supported
on both targets. SA rejects the `SetDoubleArg` call that Briosa sends instead.
The cloud list is not the cause: on October 25, 2026, the radial delete sent
the same list and deleted the expected point on both targets.

Only those two requests were tested. A request that omits all six bounds sends
no bound setter, and its effect has not been observed. If SA treats unset
bounds as unlimited, such a request with `delete_inside = true` deletes every
point in each named cloud. In 0.9.1 and 0.9.2 the operation remains destructive
and admitted by the default allowlist. Add it to
`Briosa:Security:Operations:Deny` if your application does not need it; see the
[command policy guide](https://github.com/spatialanalyzer/briosa/blob/v0.9.1/targets/2026.1.0529.7/docs/operations/command-policy-and-auditing.md).
Contract major 3 removes it ([briosa#320](https://github.com/spatialanalyzer/briosa/pull/320)).
The evidence is recorded in [briosa#307](https://github.com/spatialanalyzer/briosa/issues/307)
and [briosa#310](https://github.com/spatialanalyzer/briosa/issues/310).

<details>
<summary>Original Note, Published October 2, 2026</summary>

**Delete Cloud Points Can Delete Data Again.**
`cloud_and_mesh_operations.delete_cloud_points_by_xyz_range` is destructive,
not safe to replay, and admitted by the default allowlist. In 0.9.0 it most
likely failed outright; in 0.9.1 it can delete cloud points again. Its six
bound arguments remain **At Risk**: they have no licensed SA 2024 validation and
only a setter probe on SA 2026. Add the operation to
`Briosa:Security:Operations:Deny` if your application does not need it; see the
[command policy guide](https://github.com/spatialanalyzer/briosa/blob/v0.9.1/targets/2026.1.0529.7/docs/operations/command-policy-and-auditing.md).

</details>

:::

Portable CI and the release workflow ran the full server suites, package smoke
tests, and the retained-client gate against the published major-2 and major-1
clients. 0.9.1 was not run against licensed SpatialAnalyzer. The corrected
labels, the restored Delete Cloud Points bounds, and the new output retrievals
have no licensed validation.

## Example Applications

{/* release-pending */}The [Briosa tutorials](https://github.com/spatialanalyzer/briosa-examples)
show how to create two points, read their coordinates, and measure their distance
in an empty SA 2026.1.0529.7 job. Choose .NET, TypeScript, Python, or direct gRPC;
each example is a short program that constructs its own demo points.
The language clients use their built-in server discovery and cleanup. The
gRPC example connects to a server prepared in Control Center.
All four ran successfully with Server 0.7.0 and licensed SA 2026.1.0529.7;
see the [validation record](https://github.com/spatialanalyzer/briosa-examples/blob/main/docs/evidence/licensed-2026-09-19.md).
The updated 0.4.0/0.9.0 tutorials passed 47 portable fake-server scenarios;
licensed execution of those release pins has not yet been recorded.
SA 2024 qualification remains outstanding.

## Supported SpatialAnalyzer Targets

SA **2024.1.0508.5** and **2026.1.0529.7** have independent server and client
products. The [SA 2024 review notes](/mp-command-catalog/2024.1.0508.5/review-notes)
describe command differences. Six read-only operations and basic lifecycle
behavior have local licensed SA 2024 validation; broader runtime coverage
remains outstanding. See the [SA 2024 compatibility record](https://github.com/spatialanalyzer/briosa/blob/v0.6.1/targets/2024.1.0508.5/docs/development/sa2024-compatibility.md).
SA 2026 observations do not establish SA 2024 runtime validation.

## What Has Been Validated

Portable server, worker, protocol, client, and packaging tests exercise behavior
without requiring SpatialAnalyzer. Selected local licensed tests provide
additional evidence for specific operations and lifecycle paths. For example,
the [September 15 Control Center validation](https://github.com/spatialanalyzer/briosa/blob/v0.5.1/targets/2026.1.0529.7/docs/testing/evidence/control-center-local-2026-09-15.md)
records startup, identity gating, connection, read-only commands, and restart.

Those results do not establish that every operation or deployment environment
has been exercised. Individual API and catalog entries retain their validation
qualifications, including **At Risk** where fixtures or equipment are unavailable.

## Current v1.0 Gates

The following validation remains outstanding and currently holds the relevant
product below v1.0:

- **Server:** provision a protected Windows environment with licensed SA and
  complete the reviewed real-runtime validation scenarios. Repeatable fixtures,
  cleanup, and identity evidence are part of this work.
- **Installer:** validate enterprise deployment against a representative
  Artifactory/generic mirror, including applicable authentication, proxy,
  offline, and managed-workstation behavior. Remaining native Windows
  acceptance checks are tracked alongside this work.

These environments are currently unavailable. This does not block continued
v0.x development or releases, and it does not turn an unexecuted check into a
passing result. The v1.0 requirements are the current maintainer decision and
may be revisited explicitly.

Tracking: [licensed environment](https://github.com/spatialanalyzer/briosa/issues/20),
[runtime scenarios](https://github.com/spatialanalyzer/briosa/issues/69),
[repeatable SA fixtures](https://github.com/spatialanalyzer/briosa/issues/137), and
[enterprise and Windows acceptance](https://github.com/spatialanalyzer/briosa-installer/issues/11).

## Documentation Versions

The [contract major 3 migration guide](/docs/contract-major-3-migration)
explains the major-3 behavior and the client upgrade, and the
[runtime redesign migration guide](/docs/runtime-redesign-migration) covers
major 2. The current [gRPC reference](/api/grpc) documents **Server 0.10.0**;
the [.NET](/api/dotnet), [Python](/api/python), and
[JavaScript/TypeScript](/api/javascript) references document **client 0.5.0**.
Each includes a separate SA 2024 section alongside SA 2026, and each method's
history page keeps every earlier contract. Servers 0.9.1 and 0.9.2 have the same
protobuf and public API schemas as 0.9.0, so the
[Server 0.9.0 reference](/api/grpc/sa-2026.1.0529.7/0.9.0) also describes their
services and messages; their runtime corrections are listed in
[Server 0.9.2 Corrections](#server-092-corrections) and
[Server 0.9.1 Corrections](#server-091-corrections).
Historical references include [client 0.4.0](/api/dotnet/sa-2026.1.0529.7/0.4.0),
[Server 0.8.0](/api/grpc/sa-2026.1.0529.7/0.8.0),
[client 0.3.0](/api/dotnet/sa-2026.1.0529.7/0.3.0), [Server 0.7.0](/api/grpc/sa-2026.1.0529.7/0.7.0), and
[client 0.2.0](/api/dotnet/sa-2026.1.0529.7/0.2.0).

| Client Line | Server Selection | Reference Guidance |
| --- | --- | --- |
| 0.1.0 | Exact Server 0.6.0 build | Retained 0.1.0 API |
| 0.1.1 | Exact Server 0.6.1 build | Same public schemas as 0.1.0; changed server pin |
| 0.2.0 | Contract major 1, revision at least 0, plus the exact reviewed 0.6.1 exception | Retained API, including discovery and selection |
| 0.3.0 | Major 1 | Clean MP argument names; [migration guide](/docs/mp-argument-name-migration) |
| 0.4.0 | Major 2, revision at least 0 | Retained API; [runtime redesign migration guide](/docs/runtime-redesign-migration) |
| 0.5.0 | Major 3, revision at least 0 | Current API; [contract major 3 migration guide](/docs/contract-major-3-migration) |

The [public compatibility matrix](https://github.com/spatialanalyzer/briosa/blob/main/compatibility/matrix.json) records the tested package identities and their fake-SDK scenarios, distinguishing published artifacts from development candidates. This is compatibility evidence, not licensed validation of every MP operation. Preserve legacy installations until their consuming applications migrate. `BRIOSA_SERVER_PATH` requires explicit opt-in; prefer per-application selectors.
The product guides, installation instructions, release status, and MP catalog
remain unversioned so they can describe current availability across products.

Documentation publication does not promote a product to v1.0 or change its
validation status. Release availability, API implementation, runtime admission,
and validation evidence are separate claims.
