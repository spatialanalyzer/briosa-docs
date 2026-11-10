---
title: Contract Major 3 Migration
description: Move an application from client 0.4.0 and Server 0.9.x to client 0.5.0 and Server 0.10.0, behavioral contract major 3.
---

# Contract Major 3 Migration

Server 0.10.0 and the exact-target .NET, Python, and JavaScript 0.5.0 clients
introduce behavioral contract major 3 for both SA targets.{/* release-pending */}
Several changes break callers on purpose: the default operation admission is
narrower, some request defaults changed, nine operations are gone, and inputs
the server always required are now required in the client signatures. Most
breaks surface as compile or type errors rather than at run time.

The current API references document Server 0.10.0 and client 0.5.0. Each
method's history page keeps the Server 0.9.0 and client 0.4.0 contracts. Each
client's own migration notes list every changed method:
[.NET](https://github.com/spatialanalyzer/briosa-dotnet/blob/main/docs/contract-major-3-migration.md),
[Python](https://github.com/spatialanalyzer/briosa-py/blob/main/targets/2026.1.0529.7/README.md#contract-major-3-050),
and [JavaScript/TypeScript](https://github.com/spatialanalyzer/briosa-js/blob/main/docs/contract-major-3-migration.md).{/* release-pending */}

## Upgrade the Client and Server Together

Client 0.5.0 selects and accepts only servers of contract major 3, and rejects
the major-2 Server 0.9 releases during installation selection. Client 0.4.0
keeps selecting a major-2 server and rejects Server 0.10.0. Install Server
0.10.0 beside 0.9.2 for each exact target, and keep 0.9.2 until every
application that uses client 0.4.0 has migrated. To roll an application back,
select the 0.9.2 and 0.4.0 pair explicitly; a rollback never replays MP work.
See [installation selection](/docs/deployment/installation-selection).

Raw gRPC applications regenerate their bindings from the Server 0.10.0
[protocol artifact](/docs/deployment/protocol-artifacts) of the exact target.

## Configure Operation Admission

Server 0.10.0 admits operations through a named profile instead of the indexed
`Briosa:Security:Operations:Allow` and `Deny` arrays, which now stop the server
at startup. The packaged default, `standard`, admits document automation but no
longer admits device sessions, device configuration and motion (`device`),
external IO, code execution and file deletion (`full`), operator UI (the
interactive opt-in), or exclusive workflows (nothing admits them).
[Operation Admission](/docs/deployment/operation-admission) explains the
profiles, the interactive opt-in, and the configuration that keeps the previous
behavior as closely as possible. Each operation's API page shows the profiles
that admit it.

Discovery reports the resolved profile, a value-free policy fingerprint, and
each operation's risk flags, duration class, validation status, and admission.
Compare the fingerprint only for equality. To see why an operation is
unavailable, ask for the denied operations as well:

| Client | Denied-Operations Listing |
| --- | --- |
| .NET | `GetDeniedOperationsAsync()`, which returns `BriosaDeniedOperationListing` with `AdmissionProfile`, `PolicyFingerprint`, and `Operations` |
| Python | `list_capabilities(include_denied=True)`, which returns a `BriosaCapabilityListing` with its admitted and denied views |
| JavaScript/TypeScript | `listCapabilities({ includeDenied: true })` |

A denied entry never becomes callable. The clients take admission from the
server and never recompute it or pre-validate request options.

## Send Old Request Defaults Explicitly

These request defaults changed so that waiting, not prompting, is the default.
The server denies the old values of the measure and prompt options without the
interactive opt-in, and denies the non-waiting values under every setting:

| Operation | Field | Old Default | New Default |
| --- | --- | --- | --- |
| `instrument_operations.measure_single_point_here` | `measure_immediately` | `false` | `true` |
| `instrument_operations.configure_and_measure` | `measure_immediately` | `false` | `true` |
| `instrument_operations.measure_existing_single_point` | `measure_immediately` | `false` | `true` |
| `instrument_operations.measure_existing_single_point_and_compare` | `measure_immediately` | `false` | `true` |
| `instrument_operations.measure_existing_single_point_manual_guide` | `measure_immediately` | `false` | `true` |
| `instrument_operations.auto_measure_points` | `auto_start` | `false` | `true` |
| `instrument_operations.auto_measure_specified_geometry` | `wait_for_complete` | `false` | `true` |
| `robot_operations.move_robot_machine_to_frame` | `acknowledge_arrival` | `false` | `true` |
| `robot_operations.move_robot_machine_to_named_destination` | `acknowledge_arrival` | `false` | `true` |
| `file_operations.direct_cad_access` | `prompt_on_missing_components` | `true` | `false` |

The clients use the language's naming for these fields, such as
`measureImmediately` in .NET and JavaScript.

## Replace Removed Operations

Contract major 3 removes nine operations from both exact targets. Their client
methods, protobuf messages, and the `CircleLineMode`, `MirrorFramePlane`, and
`MeshOrientationType` value types are gone, so code that used them stops
compiling. Their API pages remain, explain the removal, and link to the
contract that Server 0.9.2 and client 0.4.0 serve.

| Operation | Why It Was Removed | Instead |
| --- | --- | --- |
| Delete Cloud Points by X Y Z Range | With bounds set, SpatialAnalyzer returned MP code -1 on both targets and deleted no points. | No X Y Z box delete replaces it. Delete Cloud Points by Radial Distance from Points deletes by distance instead; its semantics differ, and it has no licensed validation yet. |
| Mirror Object(s) | SpatialAnalyzer returned MP code -1 on both targets. | No replacement. |
| Construct Circles (Lines) From Surfaces | SpatialAnalyzer returned MP code -1 for both modes on both targets. | No replacement. |
| Set Callout View Properties | SpatialAnalyzer returned MP code -1 on both targets. | Set Default Callout View Properties remains. |
| Make a Callout View Ref List - WildCard Selection | The callout view list could not be read back. | Make a Collection Item Name Reference List - WildCard Selection with the callout-view item type, which has not been observed on a licensed run. |
| Add Collection Instruments to a Ref List - WildCard Selection | The instrument list could not be read back. | Build the reference list in the client. |
| Construct Polygonized Surface from Point Clouds | SpatialAnalyzer reported an improper argument and the worker stalled. | No replacement. |
| Make a Collection Vector Group Name Ref List - Runtime Select | The selected vector groups could not be read back. | No replacement. |
| Make a Vector Name Ref List - Runtime Select | No operator could complete its selection in a licensed session, so it is unverified. It can return in a later 3.x revision. | Build the list in the client, or use Make a Vector Name Ref List From a Vector Group. |

## Pass Inputs the Server Requires

**Optional with no default.** When you omit one of these, the request leaves the
field unset and SpatialAnalyzer runs without it. An empty value is still
rejected.

- Create Chart from Vector Group: the template chart name. A name that matches
  no chart can open a blocking SpatialAnalyzer dialog.
- Set User Interface Profile: the profile file name.
- Fit Geometry to Point Group, Fit Geometry to Points, and Fit Geometry to
  Point Group Projected to Plane: the starting condition geometry.
- Construct Planes Bounding Point Group: the resulting plane names, for which
  SpatialAnalyzer then uses its default names.
- Locate Instruments (USMN): the nominals group, which is omitted when absent;
  an explicit empty name is sent blank, as SpatialAnalyzer documents for no
  nominals group. An empty list of excluded groups now skips that setting
  instead of being rejected.

**Required.** The server now rejects an omission that earlier releases sent as
`0`, `false`, or an empty string, before any SA call:

- scale factors, robot joints, observation and vector indexes, and the robot
  machine parameter value;
- names and patterns of delete operations, which must also not be empty or
  whitespace;
- the scalar parameters of Set Robot Machine Model Link Parameters;
- `set_automatically` of Set Instrument Weather Setting. The temperature,
  pressure, and humidity are required only when it is `false`; when it is
  `true`, SpatialAnalyzer ignores them.

**Required in the clients.** Every input the server requires on either target is
now required in the client signatures, with no fill-in such as an identity
transform, a default settings value, or an empty list. Omitting one is a
compile error, a type error, or a client argument error before any call. This
covers, among others:

- the relationship tolerance and constraint. The clients offer a named
  all-disabled value (`NoLimits`, `NO_LIMITS`, `noLimits`) that you pass
  explicitly;
- the robot machine parameter name;
- every member of `FilterProximitySettings`. The distances are in the job's
  units, so the clients assume none of them;
- the quick fit's other objects and the four Feature Inspection Auto Filter
  lists, which the server rejects when empty;
- transforms that earlier .NET overloads filled with an identity transform.
  Those overloads are gone; .NET adds `Transform.Identity` for callers who want
  the identity.

When you pass `ReportOutputOptions`, name exactly one destination, an external
path or an embedded file. An explicit `0`, `false`, or empty value is still
sent as given.

## Handle Partial Success

SpatialAnalyzer reports MP code `4` when a command did its work but not its
full intended effect. Server 0.10.0 reports it as a completed success with its
outputs, and the clients never throw for it or retry it. Do not replay the call
to change its outcome. Four operations keep code `4` as an MP failure, because
their documentation says the work was not done:
`construct_point_from_survey_target_center`, `open_sa_file`,
`open_template_file`, and `set_report_options_for_object`.

Return types do not change. To see whether a call fully or partly succeeded,
pass the per-call observer: `onMpCompletion` before the `CancellationToken` in
.NET, the keyword-only `on_mp_completion` in Python, or `onMpCompletion` in
JavaScript's `BriosaCallOptions`. Eleven JavaScript `gdtOperations` methods
that took no call options in 0.4.0, such as `makeFeatureChecks`, now take them
too; existing calls are unchanged. A .NET caller that passed its cancellation
token positionally must now name it. Every client checks each MP success,
observed or not, and reports a success without valid MP details as a protocol
error. See [Understand MP Command Results](/docs/concepts/execution-outcomes#when-a-command-partly-succeeds).

## Update Failure Handling

- **SDK call faults.** The new failure kind `SdkCallFaulted` reports an
  exception from the SA SDK, with the phase in the execution disposition. It
  replaces the interim Server 0.9.2 mappings, such as `Internal` for a fault
  before `ExecuteStep`.
- **MP details on failures.** The operation errors carry the MP execution
  details: .NET `BriosaOperationException.MpExecution`, Python
  `OperationFailure.mp_execution`, and JavaScript
  `BriosaOperationError.mpExecution`. A partial success whose output could not
  be read stays `PartialSuccess` there.
- **Blocking dialogs.** A command stalled by a SpatialAnalyzer modal dialog
  reports a watchdog timeout with diagnostic `sa-modal-dialog-open` and
  operator-intervention guidance. Dismiss the dialog before recovering the SDK.
  See [SpatialAnalyzer interaction mode](/docs/deployment/windows#spatialanalyzer-interaction-mode).
- **Lifecycle cancellation.** The lifecycle failure kinds gain
  `CALLER_CANCELLED` and `CALLER_DEADLINE_EXCEEDED`. An accepted lifecycle
  transition continues detached after its caller stops waiting, so refresh
  state after a cancelled lifecycle call, and treat
  `*-lifecycle-transition-in-progress` as refresh and retry later. See
  [lifecycle timeouts](/docs/concepts/client-lifecycle#timeouts-and-overlapping-calls).
- **Transport codes.** A transport failure without a typed detail now has the
  code `transport-` plus the gRPC status in lower kebab case, in every client.
  .NET changes its `grpc-<Status>` codes, for example `grpc-DeadlineExceeded`
  to `transport-deadline-exceeded`; Python and JavaScript already used this
  form.
- **Queued work.** A request still queued when its caller cancels is abandoned
  and never executed.
- **Manual connect.** After a manual connect, take a fresh server snapshot before
  MP calls, so the client sees the new generation's readiness.

## Review Execution Budgets

The single 30-second execution watchdog becomes one budget per duration class:
30 seconds for `quick`, 10 minutes for `long_running`, and 30 minutes for
`interactive` operations. The readiness probe keeps its own 30-second bound.
Operators who raised the old watchdog should review the
[worker time bounds](/docs/deployment/windows#worker-time-bounds).

## Check Corrected Results

The 0.5.0 clients also fix result and request mappings that failed in 0.4.0.
Among them:

- the quick fit's maximum error now maps in .NET and Python;
- the robot machine model link getter now maps its result in .NET and Python;
- the relationship and report-item reference-list getters now return
  collection item names in all three clients;
- eight Python facades that sent one argument twice and never sent another;
- in JavaScript, report output options now reach the server, and the 2D Auto
  Filter operation sends its settings and its own tolerance.

The client migration notes list every fix.

## Installer and Examples

Server 0.10.0 packages use the same schema-3 distribution format, so Briosa
Installer 0.3.0 or later installs them beside 0.9.2. The
[Briosa tutorials](https://github.com/spatialanalyzer/briosa-examples) move to
client 0.5.0 and Server 0.10.0 with this release.{/* release-pending */}
