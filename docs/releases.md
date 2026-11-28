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
| Briosa Server and Control Center | [0.10.2](https://github.com/spatialanalyzer/briosa/releases/tag/v0.10.2) | Independent Windows distributions and protocols for SA 2024.1.0508.5 and SA 2026.1.0529.7; works with clients 0.5.0 and 0.5.1, JavaScript client 0.5.2, and direct gRPC from the protocol artifact. [0.9.2](https://github.com/spatialanalyzer/briosa/releases/tag/v0.9.2) remains available for client 0.4.0 applications |
| Briosa Installer | [0.4.1](https://github.com/spatialanalyzer/briosa-installer/releases/tag/v0.4.1) | Signed Windows setup and portable distribution; patched .NET runtime 10.0.15 |
| .NET client | [0.5.1](https://github.com/spatialanalyzer/briosa-dotnet/releases/tag/v0.5.1) | NuGet: [SA 2024](https://www.nuget.org/packages/Briosa.2024.1.0508.5/0.5.1), [SA 2026](https://www.nuget.org/packages/Briosa.2026.1.0529.7/0.5.1) |
| Python client | [0.5.1](https://github.com/spatialanalyzer/briosa-py/releases/tag/v0.5.1) | PyPI: [SA 2024](https://pypi.org/project/briosa-2024-1-0508-5/0.5.1/), [SA 2026](https://pypi.org/project/briosa-2026-1-0529-7/0.5.1/) |
| JavaScript/TypeScript client | [0.5.2](https://github.com/spatialanalyzer/briosa-js/releases/tag/v0.5.2) | npm: [SA 2024](https://www.npmjs.com/package/@spatialanalyzer/briosa-2024.1.0508.5/v/0.5.2), [SA 2026](https://www.npmjs.com/package/@spatialanalyzer/briosa-2026.1.0529.7/v/0.5.2). Same API as 0.5.1, with a larger HTTP/2 receive window; use 0.5.2 |

Use [Install Briosa](/install) to obtain the released Windows products and
[Install the Exact-Target Client](/docs/getting-started/run-the-server#install-the-exact-target-client)
for registry installation commands. A separately installed and licensed
SpatialAnalyzer environment remains required for MP execution. Connections
remain local and use loopback.

Each package name contains the exact SA target; its package version is
independent of SA and the server version. Clients **0.5.0** and **0.5.1**, and
JavaScript client **0.5.2**, work with Servers **0.10.0**, **0.10.1**, and
**0.10.2**, and Client **0.4.0** works with Server **0.9.x**. No new client
release accompanies Server 0.10.2, and published clients ignore the new response
and error fields. Before launch, client 0.5.x checks
that the installation matches the exact SA target and declares support for this
client, and rejects Server 0.9.x and earlier. For server releases after 0.10.0,
a patch update keeps the same clients working; a minor update may require a
client upgrade. Clients 0.5.1 and 0.5.2 are generated from protocol checkpoint
`0.10.1-dev.1`, whose protobuf files are identical to the Server 0.10.1 release;
client 0.5.0's generation artifact is pinned to the frozen Server 0.10.0
protocol. Client 0.4.0 rejects Server 0.10.x, so keep Server 0.9.2 installed
beside 0.10.2 until its applications migrate. Direct gRPC from the
published protocol artifact is also supported. C# uses `using Briosa;`, Python uses `import briosa`, and JavaScript uses
the npm alias `briosa`. Use separate environments or applications for different targets.
See [installation selection and migration](/docs/deployment/installation-selection).

## Server 0.10.2

Server [0.10.2](https://github.com/spatialanalyzer/briosa/releases/tag/v0.10.2),
released on November 28, 2026 from commit
[`5ca27a84`](https://github.com/spatialanalyzer/briosa/commit/5ca27a84ed7f80e7dd12cc0e6c0238e71090421e)
for both exact targets (`2024.1.0508.5` and `2026.1.0529.7`), is a compatible
update to Server 0.10.1. Choose the Windows x64 server package for your exact
installed SpatialAnalyzer release.

Server 0.10.2 works with the published 0.5.0 and 0.5.1 clients for .NET,
JavaScript/TypeScript, and Python, and with JavaScript/TypeScript client 0.5.2,
for the matching target. No new client release accompanies Server 0.10.2, and no
published first-party client exposes the three new features yet; published
clients ignore the new response and error fields. Clients 0.4.0 and earlier
reject Server 0.10.2 before launch; keep
[Server 0.9.2](https://github.com/spatialanalyzer/briosa/releases/tag/v0.9.2)
installed for applications that use client 0.4.0. Use JavaScript/TypeScript
client [0.5.2](https://github.com/spatialanalyzer/briosa-js/releases/tag/v0.5.2);
see [Known Issue](#known-issue-a-javascript-call-can-occasionally-receive-no-reply).

- **Field-level request validation details.** When a request fails field
  validation, the `OperationError` trailer (`briosa-operation-error-bin`) now
  includes optional `request_validation` (field `12`,
  `RequestValidationDetails`), naming the first invalid request field
  (`field_path`, exact protobuf field names separated by dots, omitting indices
  through repeated message fields) and the constraint it failed
  (`RequestFieldConstraint`: `REQUIRED`, `NOT_BLANK`, `NOT_EMPTY`,
  `ELEMENT_COUNT`, `RANGE`, `SUPPORTED_CHOICE`, or `ONEOF_REQUIRED`), with no
  request value. The server stops at the first invalid field it finds, and omits
  `request_validation` when a validation failure does not belong to one field
  (such as `request-encoding-rejected` or `caller-restriction-invalid`). Status
  `INVALID_ARGUMENT`, status text `The request is invalid.`, failure kind
  `OPERATION_FAILURE_KIND_VALIDATION`, diagnostic `request-validation-failed`,
  disposition `EXECUTION_DISPOSITION_NOT_STARTED`, guidance, and audit/telemetry
  fields are unchanged. See
  [Request Validation Details](/api/grpc/sa-2026.1.0529.7/discovery#request-validation-details).
- **MP command name in discovery and bundled protocol descriptor.**
  `DiscoveryService/ListCapabilities` sets `OperationCapability.mp_step` (field
  `14`) on every listed capability, admitted or denied, to the exact
  SpatialAnalyzer MP command name the operation executes (for example
  `Get Working Directory`). It carries no argument or result value, never
  affects admission, and leaves `policy_fingerprint` unchanged. Both Windows x64
  server packages also include `descriptor/briosa.protoset` as unsigned
  first-party data verified by `files.sha256`, byte-identical to
  `descriptor/briosa.protoset` in the protocol ZIP for the same release, so
  tools such as `grpcurl` can describe and call a packaged server without gRPC
  server reflection. Building packages from source now requires
  [Buf](https://buf.build).
- **Per-call caller restriction (`briosa-caller-restriction`).** An MP operation
  call can carry one ASCII gRPC metadata header, `briosa-caller-restriction`,
  with `profile=<profile>` and/or `deny=<flag>[,<flag>...]` separated by `"; "`
  to narrow admission for that single call after the server's own configuration
  admits it. It never widens server policy, ignores server `allow` flags and
  per-operation `allow` overrides, and applies to MP calls only
  (`ListCapabilities` ignores it; tracked in
  [briosa#463](https://github.com/spatialanalyzer/briosa/issues/463)). Denials
  by the restriction return `PERMISSION_DENIED` / `POLICY_DENIED` with
  diagnostic `caller-restriction-denied` (or
  `caller-restriction-option-denied`), `POLICY_DENIAL_RULE_CALLER_PROFILE` or
  `POLICY_DENIAL_RULE_CALLER_FLAG`, and `caller_admission_profile` or
  `caller_denied_flag` (plus `request_option_field` when a request option
  decided). Malformed, empty, repeated, or binary headers fail closed before
  policy with `INVALID_ARGUMENT`, `VALIDATION`, diagnostic
  `caller-restriction-invalid`, `NOT_STARTED`, and `DO_NOT_REPLAY`. **Warning:**
  Server 0.10.1 and earlier silently ignore `briosa-caller-restriction`. Any
  caller that relies on a restriction must first query
  `DiscoveryService/GetServerInfo` and verify that `compatibility.major` is `3`
  and `compatibility.revision` is `2` or later (Server 0.10.2 or later), and
  stop rather than falling back to an unrestricted call. See
  [Caller Restriction](/docs/deployment/operation-admission#caller-restriction).

Applications using automatic server selection and the packaged worker need no
configuration or client changes. With 0.10.2 installed alongside 0.10.1 or
0.10.0 for the same target, clients 0.5.0, 0.5.1, and JavaScript/TypeScript
0.5.2 select 0.10.2 on a fresh start unless the application selects a server
explicitly. If you pin the server version or executable path, update the pin to
select 0.10.2; if you set `Briosa:Worker:ExecutablePath`, point it to the
matching 0.10.2 worker. Moving directly from Server 0.10.0 also picks up all
Server 0.10.1 changes, including the 1 MiB worker response budget and the
bundled third-party license notices under `licenses/`. Direct gRPC bindings
generated from the 0.10.0 or 0.10.1 protocol artifact remain compatible;
regenerate from the 0.10.2 protocol artifact to read the new fields (sending
`briosa-caller-restriction` uses ordinary metadata and needs no regenerated
bindings). Keep a gRPC receive limit of at least 4 MiB. Use the Control Center
executable from the same package as the server: Control Center 0.10.0 displays
**Status unavailable** for Server 0.10.1 and later (including Server 0.10.2).
Server 0.10.2 reports `compatibility.major` `3` and `compatibility.revision` `2`
in `GetServerInfo` and package manifests (up from `revision` `1` in Server
0.10.1).

The ASP.NET Core `10.0.15` HTTP/2 issue
([briosa#450](https://github.com/spatialanalyzer/briosa/issues/450)) remains
open in Server 0.10.2; see
[Known Issue](#known-issue-a-javascript-call-can-occasionally-receive-no-reply).
In addition, `DiscoveryService/ListCapabilities` ignores
`briosa-caller-restriction`
([briosa#463](https://github.com/spatialanalyzer/briosa/issues/463)), so an
operation listed as admitted can still be denied at call time when a call sends
a caller restriction.

### Validation of Server 0.10.2

The release workflow
([run 46093557613](https://github.com/spatialanalyzer/briosa/actions/runs/46093557613),
from commit `5ca27a84`, with no job rerun) passed both targets' validation
(locked restore, protocol comparison with `v0.10.1`, build, and portable tests)
and built each Windows, protocol, and client conformance archive twice per
target with matching hashes, comparing `descriptor/briosa.protoset` with the
protocol artifact built at the same revision, checking license notices, and
running packaged client scenarios with a fake worker. All 20 client
compatibility gate cases across both targets passed: 14 compatible cases
(published 0.5.0 and 0.5.1 clients for .NET, JavaScript/TypeScript, and Python,
plus JavaScript/TypeScript 0.5.2, with `large-result` passing once in each) and
6 cases where published 0.4.0 clients rejected the server before launch. In each
final Windows server ZIP, all 14 signed first-party executables and DLLs carry
valid, timestamped Authenticode signatures, and `files.sha256` verifies 866
files (the other 852 unsigned files matched the same run's unsigned archive,
including `descriptor/briosa.protoset` matching the released protocol ZIP).

Before publication, the signed draft packages were checked on Windows on both
targets with the signed Installer 0.4.1 command line in an isolated package
store, without SpatialAnalyzer. For each target, 0.10.2 installed beside 0.10.1,
both verified, repair restored a deliberately altered file, and removing 0.10.2
left 0.10.1 unchanged. With both installed, the published 0.5.0 and 0.5.1
clients in all three languages, and JavaScript/TypeScript client 0.5.2, selected
0.10.2 automatically, accepted an explicit choice of either version, rejected
the other target, and selected 0.10.1 after 0.10.2 was removed; the published
0.4.0 clients rejected both versions. Starting the installed 0.10.2 server with
its worker stopped reported version `0.10.2` and `compatibility` major `3`,
revision `2` through `GetServerInfo`, and `ListCapabilities` returned a
non-empty `mp_step` on every capability (797 by default and 1,018 with
`include_denied` for `2026.1.0529.7`; 778 and 987 for `2024.1.0508.5`). The
Installer's window was not exercised.

Nothing in Server 0.10.2 was run against a licensed SpatialAnalyzer
installation. The release workflow runs against no licensed SpatialAnalyzer, and
no licensed client-library run is claimed. Portable tests cover all three new
features (field-level validation details, `mp_step` and bundled
`descriptor/briosa.protoset`, and `briosa-caller-restriction`).

## Server 0.10.1 and Clients 0.5.1 and 0.5.2

Server [0.10.1](https://github.com/spatialanalyzer/briosa/releases/tag/v0.10.1),
released on November 27, 2026 for both exact targets, is a compatible update to
Server 0.10.0. Use 0.10.1 for new installations and move existing 0.10.0
installations to it: its Windows packages include the third-party license
notices that the 0.10.0 packages omitted. Choose the Windows x64 server package
for your exact installed SpatialAnalyzer release.

Server 0.10.1 works with the published 0.5.0 and 0.5.1 clients for .NET,
JavaScript/TypeScript, and Python, and with JavaScript/TypeScript client 0.5.2,
for the matching target. Clients 0.5.0, 0.5.1, and 0.5.2 reject Server 0.9.x
and earlier, and clients 0.4.0 and earlier reject Server 0.10.x; keep
[Server 0.9.2](https://github.com/spatialanalyzer/briosa/releases/tag/v0.9.2)
installed for applications that use client 0.4.0. Use JavaScript/TypeScript
client [0.5.2](https://github.com/spatialanalyzer/briosa-js/releases/tag/v0.5.2);
see [Known Issue](#known-issue-a-javascript-call-can-occasionally-receive-no-reply).

- **Larger results.** Inbound requests stay limited to 64 KiB, and the worker's
  result budget rises from 64 KiB to 1 MiB (1,048,576 bytes). If the completed
  worker result frame exceeds 1 MiB, the call returns `DATA_LOSS` with
  disposition `COMPLETED`, replay guidance `DO_NOT_REPLAY`, and the original MP
  result code. When no output getter faulted, the failure kind is
  `OUTPUT_RETRIEVAL_FAILURE` with diagnostic `worker-output-encoding-rejected`.
  If an output getter also faulted, the failure kind is `SDK_CALL_FAULTED`.
  Outputs retained in the frame are reported as retrieved, and outputs dropped
  for size carry `worker-output-encoding-rejected`. The published 0.5.0 and 0.5.1
  clients receive results up to the new budget without extra configuration.
  Direct gRPC callers should set a receive limit of at least 4 MiB.
- **Typed policy denials and request options.** A policy-denied call carries
  which policy step denied it, the denied risk flag, the admission profile, or
  the request option field, never a request value. Discovery adds the same
  detail to denied entries and lists each operation's reviewed request options.
  Status codes, failure kinds, dispositions, guidance, diagnostic codes, and the
  policy fingerprint are unchanged. See
  [Server Discovery](/api/grpc/sa-2026.1.0529.7/discovery#policy-denial-details).
- **Lifecycle bounds and interaction mode.** `GetServerInfo` publishes the
  server's lifecycle wait allowances and the SpatialAnalyzer interaction mode it
  is configured to set. That mode is server configuration; SpatialAnalyzer's
  live mode is never read back.
- **Control Center.** After **Stop server**, Control Center waits for the
  server's published shutdown bound plus 5 seconds (110 seconds at the default
  settings, up from 45). Use the Control Center from the same package as the
  server: Control Center 0.10.0 shows **Status unavailable** for Server 0.10.1.
- **Readiness reporting.** When the worker's execution consumer fails, health
  checks, `GetServerInfo`, `GetSpatialAnalyzerSdkState`, and the `briosa.ready`
  gauge report not ready at once (`worker-execution-consumer-failed`).
- **License notices.** Both Windows server ZIPs include `licenses/README.md`
  and `licenses/index.json`. Most bundled .NET runtime files use the MIT
  license; the files listed under `perFileLicenses` fall under Microsoft's .NET
  Library License or Windows SDK License, which `licenses/README.md` describes
  in its Microsoft components section. Those files fall outside Briosa's
  Apache-2.0 license.
- **Diagnostics.** The server logs startup and lifecycle timing records, and
  can emit opt-in Debug records for each unary call. The client conformance
  package allows 240 seconds per fixture and can retain failure diagnostics.

Applications that use automatic server selection and the packaged worker need
no configuration change. If you pin the server version or executable path,
update the pin to select 0.10.1; if you set `Briosa:Worker:ExecutablePath`,
point it to the matching 0.10.1 worker. When 0.10.0 and 0.10.1 are both
installed for the same target, clients 0.5.0 and 0.5.1 select 0.10.1 on a fresh
start unless the application selects a server explicitly. Bindings generated
from the 0.10.0 protocol artifact remain compatible; regenerate from the 0.10.1
artifact to read the new fields. See
[Versioning and compatibility](https://github.com/spatialanalyzer/briosa/blob/main/docs/versioning.md):
a patch release stays compatible with the same client line, while a minor
release in `0.x` may require an updated client.

Client 0.5.1 adds access to the typed policy-denial details, the per-capability
request options, the lifecycle bounds, and the configured interaction mode in
all three languages. When the startup timeout is left unset, it sizes the
timeout from the server's published startup allowance plus 20 seconds, with a
two-minute minimum. With Server 0.10.0, which publishes none of these values,
each addition reports that the server sent nothing, and the startup timeout
stays two minutes. JavaScript/TypeScript client 0.5.2 has the same API as 0.5.1
and raises the HTTP/2 receive window from 65,535 bytes to 16 MiB. The client
references describe each addition: [.NET](/api/dotnet),
[Python](/api/python), and [JavaScript/TypeScript](/api/javascript).

### Known Issue: A JavaScript Call Can Occasionally Receive No Reply

This happened with Server 0.10.0 and with a Server 0.10.1 development build.
The observations are consistent with a
[known HTTP/2 defect in ASP.NET Core 10.0.15](https://github.com/dotnet/aspnetcore/issues/70124),
which Servers 0.10.0, 0.10.1, and 0.10.2 ship: if a response waits for the client's stream
window to reopen, a race can leave a later response on the same connection
unwritten. The capture could not establish the cause of the observed stall.

- **JavaScript/TypeScript clients 0.5.0 and 0.5.1** use a 65,535-byte window and
  request the capability listing (141 to 148 KB) during a default start, so they
  can meet the condition with Servers 0.10.0, 0.10.1, and 0.10.2. In hosted
  conformance runs, 2 JavaScript jobs stalled against at least 317 clean ones
  (about 0.6%), both with client 0.5.1. Client 0.5.2 raises the window to 16 MiB
  on each stream and on the connection. With one call at a time, that leaves
  room for the largest response the client accepts; concurrent large responses
  share the connection's window and can still have to wait. **Update JavaScript
  applications to 0.5.2.**
- **.NET clients 0.5.0 and 0.5.1** use a 65,535-byte stream window with a
  64 MiB connection window and can meet the condition in principle. No stall
  was observed with them.
- **Python clients** use 4 MiB windows, which these responses do not exceed.

The upstream fix was merged and backported to .NET 10 on November 16, 2026. As
of November 28, 2026, no released ASP.NET Core 10 runtime included it. See the
[Briosa investigation](https://github.com/spatialanalyzer/briosa/issues/450#issuecomment-7221078872).

### Validation of Server 0.10.1

The release workflow ran both targets' validation, including the protocol
comparison with Server 0.10.0, and produced two byte-identical unsigned builds
of each Windows, protocol, and client conformance archive before signing the
Windows packages. All 18 client gate jobs
passed: the published 0.5.0 and 0.5.1 clients in all three languages ran the
conformance scenarios against the release build with a fake worker on both
targets, and the published 0.4.0 clients rejected the server before launch.
JavaScript/TypeScript client 0.5.2 is not yet one of the clients the server's
release gate runs; it passed its own conformance suite against a Server 0.10.1
development build and selected 0.10.1 in the Installer acceptance below.
The first-party executables and DLLs in each Windows server ZIP carry valid,
timestamped Authenticode signatures.

Before publication, the signed draft packages were tested with the Installer
0.4.1 command line on Windows. For each target, 0.10.1 installed beside 0.10.0,
both verified, repair restored a deliberately altered file, and removing 0.10.1
left 0.10.0 unchanged. With both installed, the published 0.5.0 and 0.5.1
clients in all three languages, and JavaScript client 0.5.2, selected 0.10.1
automatically, honored an explicit choice of either version, and rejected the
other target's installation; after 0.10.1 was removed they selected 0.10.0. The
published 0.4.0 clients rejected both versions.

The release workflow runs against no licensed SpatialAnalyzer, and no licensed
client-library run is claimed. A licensed probe session on November 26, 2026,
using a 0.10.1 probe build, measured result sizes under the 1 MiB budget on
both targets: point-name lists of up to 10,000 elements succeeded, and a
20,000-element list returned `DATA_LOSS` with
`worker-output-encoding-rejected`. Discovery, policy-denial details, and
readiness reporting were tested without licensed SpatialAnalyzer.

## Server 0.10.0 and Clients 0.5.0

:::warning[Notice: Use Server 0.10.2]

The Server 0.10.0 Windows packages do not include the license notices for the
third-party components they ship, including files from Microsoft's .NET
runtime. Server 0.10.1 and later (currently
[Server 0.10.2](https://github.com/spatialanalyzer/briosa/releases/tag/v0.10.2))
include them under `licenses/` and work with the same client versions. Use
0.10.2 for new installations and move existing 0.10.0 installations to it. The
0.10.0 assets are unchanged.

:::

Server [0.10.0](https://github.com/spatialanalyzer/briosa/releases/tag/v0.10.0)
and the exact-target 0.5.0 clients are a breaking release for both exact
targets. Client 0.5.x works with Server 0.10.x (before launch, it checks that
the installation matches the exact SA target and declares support for this
client, and rejects Server 0.9.x and earlier), while Client 0.4.0 works with
Server 0.9.x (installed side by side) and rejects Server 0.10.x. The
[Server 0.10 and Client 0.5 migration guide](/docs/server-0-10-and-client-0-5-migration)
summarizes the changes for applications and links to each client's migration
notes. The versioned API references hold the individual signatures.

- **Operation admission.** A named profile replaces the `Allow` and `Deny`
  arrays, and the packaged `standard` default no longer admits device, motion,
  external IO, code execution, file deletion, operator UI, or exclusive
  workflows. The 11 surviving `Make*RuntimeSelect` operations on each target
  also moved from replay safety `Safe` to `Unsafe`, and operations with unknown
  replay safety are denied as unreviewed. Discovery reports the profile, a
  policy fingerprint, and each operation's risk flags, duration class,
  validation status, and admission.
  See [Operation Admission](/docs/deployment/operation-admission).
- **Request defaults.** Ten request defaults changed: the five
  `measure_immediately` defaults and `auto_start` became `true`, so measurement
  can begin without an operator prompt; `wait_for_complete` and the two
  `acknowledge_arrival` defaults became `true`, so those calls wait for
  completion or arrival; and CAD import's `prompt_on_missing_components` became
  `false` so it does not prompt on missing components.
- **Nine operations removed.** Eight failed to produce a usable result in
  licensed testing; the ninth, the vector name list runtime select, could not be
  verified. See [Replace Removed Operations](/docs/server-0-10-and-client-0-5-migration#replace-removed-operations).
- **Argument rules.** The server rejects omitted scale factors, joints, indexes,
  required names, and model-link parameters instead of sending `0`, `false`, or
  an empty string. Omitting the chart template, UI profile file, either
  bounding-plane name, fit seed, or USMN nominals group now skips its setter;
  explicit empty values are still rejected for the first four, an explicitly
  empty USMN nominal object name is sent blank, and an empty USMN
  `excluded_groups` list skips its setter. The clients require every input the
  server requires.
- **Typed outcomes.** MP code `4` is reported as a partial success with its
  outputs when all of them are retrieved, except for four documented
  operations that keep the failure mapping. An SA SDK exception has its own
  failure kind, `SdkCallFaulted`.
  Lifecycle failures gain caller-cancellation kinds, and an accepted lifecycle
  transition continues detached when its caller stops waiting.
- **Operator settings.** Execution budgets follow each operation's duration
  class, and `Briosa:SpatialAnalyzer:InteractionMode` can quiet blocking
  SpatialAnalyzer dialogs; a detectable modal dialog blocking an MP, readiness
  probe, or interaction-mode timeout reports `sa-modal-dialog-open`. See
  [Windows Deployment](/docs/deployment/windows#worker-time-bounds).

Portable CI ran the full server suites on both targets, the conformance package's
15 scenarios against the six published 0.5.0 client packages, and the release
protocol check against Server 0.9.2, which verified the nine reviewed
retirements. The published 0.4.0 clients reject the 0.10.0 servers as expected.
Licensed probe sessions on October 7, October 25, and November 9, 2026 decided
the removals and several argument rules; Server 0.10.0 itself was not run
against licensed SpatialAnalyzer.

Before publication, the signed 0.10.0 packages passed an acceptance run with the
signed Installer 0.4.1 and the published clients, without SpatialAnalyzer. From
a signed local catalog, both targets' 0.10.0 packages installed beside 0.9.2 and
were verified, repaired, and removed with the Installer command line, and the
SA 2026.1.0529.7 package again with the Installer app. In all three languages,
the 0.5.0 clients selected 0.10.0 and the 0.4.0 clients selected 0.9.2, each
rejecting the other server line and the other target. Control Center opened for 0.10.0
on both targets and for 0.9.2 on SA 2026.1.0529.7 without starting a server, and
removing 0.10.0 left 0.9.2 unchanged.

## Server 0.9.2 Corrections

Server [0.9.2](https://github.com/spatialanalyzer/briosa/releases/tag/v0.9.2),
released on October 4, 2026 for both exact targets, is a compatible correction
release. It keeps the Server 0.9.x compatibility line, works with the same
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
tests, and the retained-client gate against the published 0.4.0, 0.3.0, and
0.2.0 clients. The packaged 0.9.2 release did not undergo licensed testing. The
October 7, 2026 development-build probe session subsequently exercised three of
the 25 corrected SA 2026 step texts; the other 22, the SA 2024
`Make Pipe Relationship Cut` step, and the new SDK-exception reporting remain
without licensed validation.

## Server 0.9.1 Corrections

Server [0.9.1](https://github.com/spatialanalyzer/briosa/releases/tag/v0.9.1),
released on October 1, 2026 for both exact targets, is a compatible correction
release. It keeps the Server 0.9.x compatibility line, works with the same
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
- **Vector-group reference lists.** 0.9.1 changed the output mapping of
  `MakeCollectionVectorGroupNameRefListRuntimeSelect` to avoid a `DataLoss`
  error after MP success. Later licensed probes on October 25, 2026 disproved
  that as an end-to-end fix: on both targets, the getter still returned nothing
  after MP code `2`, and Server 0.10.0 removes the operation.
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
on both targets. With the `SetDoubleArg` call that Briosa sends instead, the
setters and `ExecuteStep` returned true, and SA then returned MP code -1 and
deleted no points.
The cloud list is not the cause: on October 25, 2026, the radial delete sent
the same list and deleted the expected point on both targets.

Only those two requests were tested. A request that omits all six bounds sends
no bound setter, and its effect has not been observed. If SA treats unset
bounds as unlimited, such a request with `delete_inside = true` deletes every
point in each named cloud. In 0.9.1 and 0.9.2 the operation remains destructive
and admitted by the default allowlist. Add it to
`Briosa:Security:Operations:Deny` if your application does not need it; see the
[command policy guide](https://github.com/spatialanalyzer/briosa/blob/v0.9.1/targets/2026.1.0529.7/docs/operations/command-policy-and-auditing.md).
Server 0.10.0 removes it ([briosa#320](https://github.com/spatialanalyzer/briosa/pull/320)).
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
tests, and the retained-client gate against the published 0.4.0, 0.3.0, and
0.2.0 clients. The 0.9.1 release workflow used no licensed SpatialAnalyzer. Later
development-build probe sessions exercised the Delete Cloud Points bounds and
the output retrievals, with the results described above.

## Example Applications

The [Briosa tutorials](https://github.com/spatialanalyzer/briosa-examples)
show how to create two points, read their coordinates, and measure their distance
in an empty SA 2026.1.0529.7 job. Choose .NET, TypeScript, Python, or direct gRPC;
each example is a short program that constructs its own demo points.
The language clients use their built-in server discovery and cleanup. The
gRPC example connects to a server prepared in Control Center.
All four ran successfully with Server 0.7.0 and licensed SA 2026.1.0529.7;
see the [validation record](https://github.com/spatialanalyzer/briosa-examples/blob/main/docs/evidence/licensed-2026-09-19.md).
With their client 0.4.0 and Server 0.9.0 pins, the tutorials passed 47 portable
fake-server scenarios; licensed execution of those release pins has not yet been
recorded. The tutorials' README names the client and server versions they use.
Use the versions named by the tutorial: Client 0.4.0 was tested with Server
0.9.x, and Client 0.5.0 was tested with Server 0.10.0. A later server is
eligible if it matches the exact SA target, declares support for the client,
and satisfies the application's constraints.
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

The [Server 0.10 and Client 0.5 migration guide](/docs/server-0-10-and-client-0-5-migration)
explains the Server 0.10.0 and client 0.5.0 upgrade, and the
[runtime redesign migration guide](/docs/runtime-redesign-migration) covers
Server 0.9.x and client 0.4.0. The current [gRPC reference](/api/grpc) documents **Server 0.10.2**;
the [.NET](/api/dotnet) and [Python](/api/python) references document
**client 0.5.1**, and the [JavaScript/TypeScript](/api/javascript) reference
documents **client 0.5.2**, which has the same API as JavaScript/TypeScript
client 0.5.1, so 0.5.1 has no separate JavaScript reference.
Each includes a separate SA 2024 section alongside SA 2026, and each method's
history page keeps every earlier contract. Servers 0.9.1 and 0.9.2 have the same
protobuf and public API schemas as 0.9.0, so the
[Server 0.9.0 reference](/api/grpc/sa-2026.1.0529.7/0.9.0) also describes their
services and messages; their runtime corrections are listed in
[Server 0.9.2 Corrections](#server-092-corrections) and
[Server 0.9.1 Corrections](#server-091-corrections).
Historical references include [Server 0.10.1](/api/grpc/sa-2026.1.0529.7/0.10.1),
[Server 0.10.0](/api/grpc/sa-2026.1.0529.7/0.10.0),
[client 0.5.0](/api/dotnet/sa-2026.1.0529.7/0.5.0),
[client 0.4.0](/api/dotnet/sa-2026.1.0529.7/0.4.0),
[Server 0.8.0](/api/grpc/sa-2026.1.0529.7/0.8.0),
[client 0.3.0](/api/dotnet/sa-2026.1.0529.7/0.3.0), [Server 0.7.0](/api/grpc/sa-2026.1.0529.7/0.7.0), and
[client 0.2.0](/api/dotnet/sa-2026.1.0529.7/0.2.0).

| Client Line | Server Selection | Reference Guidance |
| --- | --- | --- |
| 0.1.0 | Exact Server 0.6.0 build (rejects Server 0.6.1) | Retained 0.1.0 API |
| 0.1.1 | Exact Server 0.6.1 build | Same public schemas as 0.1.0; changed server pin |
| 0.2.0 | Servers 0.7.0 and 0.8.0, plus the exact reviewed Server 0.6.1 exception | Retained API, including discovery and selection |
| 0.3.0 | Servers 0.7.0 and 0.8.0, plus the exact reviewed Server 0.6.1 exception | Clean MP argument names; [migration guide](/docs/mp-argument-name-migration) |
| 0.4.0 | Servers 0.9.0 through 0.9.2 (`0.9.x`) | Retained API; [runtime redesign migration guide](/docs/runtime-redesign-migration) |
| 0.5.0 | Servers 0.10.0 through 0.10.2 | Retained API; [Server 0.10 and Client 0.5 migration guide](/docs/server-0-10-and-client-0-5-migration) |
| 0.5.1 | Servers 0.10.0 through 0.10.2 | Current .NET and Python API; adds policy-denial details, request options, lifecycle bounds, and the configured interaction mode |
| 0.5.2 (JavaScript/TypeScript) | Servers 0.10.0 through 0.10.2 | Current JavaScript/TypeScript API, the same as 0.5.1, with a 16 MiB HTTP/2 receive window |

The [public compatibility matrix](https://github.com/spatialanalyzer/briosa/blob/main/compatibility/matrix.json) records the tested package identities and their fake-SDK scenarios, distinguishing published artifacts from development candidates. This is compatibility evidence, not licensed validation of every MP operation. Preserve legacy installations until their consuming applications migrate. `BRIOSA_SERVER_PATH` requires explicit opt-in; prefer per-application selectors.
The product guides, installation instructions, release status, and MP catalog
remain unversioned so they can describe current availability across products.

Documentation publication does not promote a product to v1.0 or change its
validation status. Release availability, API implementation, runtime admission,
and validation evidence are separate claims.
