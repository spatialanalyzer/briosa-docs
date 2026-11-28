---
title: Operation Admission
description: How Server 0.10.0 and later decide which MP operations they admit, from named profiles, risk flags, overrides, and request options.
---

# Operation Admission

Server 0.10.0 and later admit MP operations through a named **admission profile**. The
profile is applied to the reviewed classification of every registered operation
for the exact target: its risk flags, duration class, validation status, and
isolation class. The packaged default is the `standard` profile. Admission can
only narrow what the server implements; it never adds an operation.

Every operation page in the [API reference](/api) shows the profiles that admit
it, its risk flags, and its duration class. `DiscoveryService/ListCapabilities`
reports the same classification for the running server, together with the
resolved profile and a policy fingerprint; see
[Health and Discovery](./health-and-discovery.md#discovery).

Server 0.10.0 replaces the indexed `Briosa:Security:Operations:Allow` and `Deny`
arrays of earlier releases. A server that finds either array, or no `Profile`,
refuses to start. See
[Migrating From Allow and Deny](#migrating-from-allow-and-deny).

## Profiles

A profile admits an operation when every risk flag on the operation's reviewed
row is in the profile's set and the profile's effect filter passes. Each profile
admits everything the narrower ones do.

| Profile | Admitted Risk Flags | Effect Filter | Intended Use |
| --- | --- | --- | --- |
| `read-only` | `filesystem_metadata` | Read-only operations only | Dashboards, inspection, and CI probes |
| `standard` (packaged default) | Adds `filesystem_read`, `filesystem_write`, and `destructive` | None | Document automation: construct, analyze, relate, report, import, export, save, and delete model objects |
| `device` | Adds `device_session`, `device_config`, and `physical_motion` | None | Measurement, robot, and appliance automation on a station whose session the operator started in SpatialAnalyzer |
| `full` | Adds `external_io`, `code_execution`, and `filesystem_delete` | None | Reviewed standalone operations except interactive ones |

| Target | Registered | `read-only` | `standard` | `device` | `full` | Exclusive Workflows | Interactive |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| SA 2026.1.0529.7 | 1,018 | 184 | 797 | 905 | 922 | 42 | 57 |
| SA 2024.1.0508.5 | 987 | 180 | 778 | 871 | 888 | 45 | 57 |

The seven device-configuration setters, such as the instrument scale factors,
the robot model-link parameters, and the robot calibration frames, carry only
`device_config`. `device` and `full` admit them, `standard` admits them with
`Flags:device_config=allow`, and a per-operation `allow` override admits them
under any profile.

## Risk Flags

| Risk Flag | Meaning |
| --- | --- |
| `filesystem_metadata` | Reads paths or existence, never file content. |
| `filesystem_read` | Reads caller-named file content. |
| `filesystem_write` | Creates or overwrites caller-named files. |
| `filesystem_delete` | Deletes files. |
| `destructive` | Removes SpatialAnalyzer objects, or discards or replaces unsaved job state. |
| `code_execution` | Runs or stops MP code. |
| `physical_motion` | Can move hardware such as a tracker head, robot, or projector. |
| `device_session` | Requires or controls a live instrument, robot, or appliance session. |
| `device_config` | Changes configuration that a live device session consumes. |
| `interactive_ui` | Blocks on operator input or opens operator UI. |
| `external_io` | Talks to systems other than SpatialAnalyzer, such as OPC DA or an appliance IP address. |

The validation status of an operation (`no_recorded_gap`, `fixture_pending`, or
`at_risk_unvalidated`) is recorded for review and audit. It never affects
admission.

## Interactive Operations

`interactive_ui` is in no profile. An operation that opens or blocks on operator
UI is admitted only with the **interactive opt-in**, in one of two forms:

- `Flags:interactive_ui=allow` adds operator UI to what the profile admits. The
  other flags of the operation's row still need the profile or an `allow`
  setting of their own, and a `deny` setting on any of them still denies the
  operation. An interactive device operation therefore also needs `device`,
  `full`, or its device flags set to `allow`.
- `Overrides:<service>:<operation>=allow` admits that one operation under every
  profile and flag setting, because an override is decided before flags and the
  profile. Only four denials come first: unreviewed operations, requests the
  server can't classify against their reviewed options
  (`operation-request-unclassified`), exclusive workflows, and requests whose
  options leave work running after the call returns
  (`operation-option-isolation-unsupported`). See [Precedence](#precedence). For
  example, an `allow` override admits an interactive motion operation under
  `standard`, even with `Flags:physical_motion=deny`.

Some operations open operator UI only when a request option asks for it, such
as Show Interface, Show Results Dialog, Report Deviations, Pause MP Until
Closed, or an HTML prompt file. The server reads each request's reviewed options
before it maps or dispatches the request. A request that turns such an option on
also needs the interactive opt-in. Without it, the request is denied with
`operation-option-denied` when that option is the only reason. When the profile
doesn't admit the operation itself either, as for `measure_single_point_here` (a
device session) under `standard`, the denial is `operation-policy-denied`. Flag
`deny` settings are checked before the profile, so an explicit
`Flags:interactive_ui=deny` can make it `operation-option-denied` instead; see
[Precedence](#precedence). The operation's page names each such option.

These request defaults changed in Server 0.10.0. Five measurement operations
now measure immediately, and Auto Measure Points starts automatically, so none
of them waits for the operator. Three defaults wait for completion or arrival,
and CAD import skips its missing-component prompt:

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

A caller that relied on an old default must send the old value explicitly. For
`measure_immediately`, `auto_start`, and `prompt_on_missing_components`, that
also needs the interactive opt-in, because the operator then starts the
measurement or answers the prompt.

## Exclusive Workflows

Multi-call device, trapping, watch, robot-interface, and appliance session
lifecycles are exclusive workflows. They are denied under every profile, flag,
and override until an accepted lease design exists, and discovery never lists
them as admitted. A request that would let a call return while the instrument
measures or the robot moves, such as `wait_for_completion` or
`acknowledge_arrival` set to false, is treated the same way: it is denied under
every setting with `operation-option-isolation-unsupported`.

## Configure the Server

The packaged `appsettings.json` sets only `"Profile": "standard"`:

```jsonc
"Briosa": { "Security": { "Operations": {
  "Profile": "standard",                         // required: read-only, standard, device, or full
  "Flags": { "filesystem_write": "deny" },       // optional: <risk_flag> = allow | deny
  "Overrides": {                                 // optional: <service>:<operation> = allow | deny
    "mp_subroutines": { "run_subroutine": "allow" },
    "file_operations": { "get_working_directory": "deny" }
  }
}}}
```

Each key holds one value, so the last configuration provider wins, and a user
secret, environment variable, or command-line value can narrow or widen any
single decision without editing the package. An operation ID maps to an
override key by replacing `.` with `:`. Environment variables use `__`:

```powershell
$env:Briosa__Security__Operations__Profile = "device"
$env:Briosa__Security__Operations__Flags__interactive_ui = "allow"
$env:Briosa__Security__Operations__Overrides__file_operations__get_working_directory = "deny"
```

Startup fails, rather than ignoring a value, when `Profile` is missing or
unknown, when a flag, service, operation, or section name is unknown, when a
value is anything other than `allow` or `deny`, or when the retired `Allow` or
`Deny` arrays are present. Configuration section names (`Profile`, `Flags`,
`Overrides`) are case-insensitive, following .NET configuration keys; profile,
risk flag, service, and operation names and `allow`/`deny` values are exact and
case-sensitive. Policy is fixed for the process lifetime; restart the server
after changing it.

## Precedence

Steps 1 to 5 decide the server's own admission, where the first matching rule
decides. Any request the server admits (including by an `allow` override in
step 3) then continues to step 6 when the call carries a caller restriction:

1. An operation that is not registered for the exact target is unsupported
   (`Unimplemented`, `operation-unsupported`).
   An operation with missing or unreviewed risk, effect, or replay-safety
   metadata, including `Unknown` or `Unspecified` replay safety, is denied
   with `operation-risk-unreviewed`. An unknown or unspecified execution scope
   is denied with `operation-isolation-unreviewed`, and a request that cannot
   be read against its reviewed options is denied with
   `operation-request-unclassified`.
2. An exclusive workflow is denied with `operation-isolation-unsupported`, and
   a request whose options leave work running after the call returns is denied
   with `operation-option-isolation-unsupported`.
3. An override of the operation decides server admission next: `deny` denies
   it, and `allow` admits it under server policy without consulting the flags
   or the profile (still subject to step 6 if the call carries a caller
   restriction).
4. A `deny` setting on any of the request's flags denies it.
5. The profile admits the request under server policy when each of its flags
   is in the profile's set or set to `allow`, and the effect filter passes.
   Otherwise it is denied.
6. When steps 1 to 5 admit the request and the call carries a
   `briosa-caller-restriction` header (Server 0.10.2 and later), the server
   checks the caller's denied flags and then the caller's profile alone; see
   [Caller Restriction](#caller-restriction).

A request's flags are the risk flags of its operation's reviewed row, plus
`interactive_ui` when a request option turns on operator UI. Before dispatch,
the worker supervisor also enforces a duration-class safeguard, denying any
operation without a reviewed duration class with
`operation-duration-unreviewed`. No setting changes the first two rules.
An unregistered operation returns `Unimplemented`; policy denials return the
typed, value-free `PermissionDenied` outcome with a `NotStarted` disposition.
After admission, the server also checks that the mapped MP command matches its
registration. A mismatch fails request validation before dispatch
(`InvalidArgument`, `request-validation-failed`, `NotStarted`).

### Which Rule Denied a Call

From Server 0.10.1, a policy-denied call carries `PolicyDenialDetails` in its
typed operation error. It names the rule that decided (`PROFILE`, `FLAG`,
`OVERRIDE`, `EXCLUSIVE`, or `UNREVIEWED`, and from Server 0.10.2 `CALLER_PROFILE`
or `CALLER_FLAG`) and, where it applies, the first denied risk flag in
vocabulary order (`denied_flag` or `caller_denied_flag`), the active or caller
admission profile (`admission_profile` or `caller_admission_profile`), and the
request option field (`request_option_field`) the server attributed the denial
to. It never records a request value. Status codes, failure kinds, dispositions,
guidance, diagnostic codes for server denials, and the policy fingerprint are
unchanged.

`ListCapabilities` adds the same detail to every denied entry when
`include_denied` is set, and lists each operation's reviewed request options,
including for admitted operations in the default response. Each option reports
its field name, its effect (`INTERACTIVE_UI` or `BACKGROUND_WORK`), the
condition that activates it, and what omitting it does, with the admission of a
request that turns on that option alone. Discovery never reports `CALLER_PROFILE`
or `CALLER_FLAG` because `ListCapabilities` ignores the caller restriction
header. The first-party clients 0.5.1 and
0.5.2 expose the Server 0.10.1 values; the 0.5.0 clients ignore them. See
[Server Discovery](/api/grpc/sa-2026.1.0529.7/discovery#policy-denial-details).

## Caller Restriction

Server 0.10.2 and later accept one optional ASCII gRPC metadata header on MP
operation calls, `briosa-caller-restriction`, to narrow admission for that
single call. It can never widen what the server's own configuration admits.

:::warning[Older Servers Silently Ignore This Header]

Server 0.10.1 and earlier ignore `briosa-caller-restriction`, so on those
servers a call runs under the server's configuration alone. Any caller that
relies on a restriction must first query `DiscoveryService/GetServerInfo` and
verify that `compatibility.major` is `3` and `compatibility.revision` is `2` or
later (Server 0.10.2 or later). If live discovery fails or reports an earlier
revision, stop before sending the restricted call rather than falling back to
an unrestricted call.

:::

### Header Grammar and Malformed Headers

Send one ASCII metadata entry containing one or two case-sensitive clauses
separated by `"; "` (semicolon and one space), each clause at most once in
either order:

- `profile=<profile>`, where `<profile>` is `read-only`, `standard`, `device`,
  or `full`.
- `deny=<flag>[,<flag>...]`, where each `<flag>` appears at most once in any
  order from the 11 risk flags listed above.

No other whitespace, quoting, keys, or characters are accepted, and the maximum
accepted length is 256 characters (the longest valid value is 193 characters).
For example: `profile=read-only; deny=interactive_ui`.

The server inspects the header before policy, request mapping, or dispatch. An
empty value, more than one header field, a binary `briosa-caller-restriction-bin`
entry (never decoded), an unknown or repeated key, profile, or flag, wrong case,
extra whitespace, stray punctuation, or a value over 256 characters fails closed
with `INVALID_ARGUMENT` (`The request is invalid.`), failure kind `VALIDATION`,
diagnostic `caller-restriction-invalid`, disposition `NOT_STARTED`, and replay
guidance `DO_NOT_REPLAY`, with neither `request_validation` nor `policy_denial`
set. Header text is never repeated in errors or logs. Use the supported direct
loopback connection: the server distinguishes multiple entries only when it
receives them as separate header fields.

### Evaluation, Scope, and Auditing

When the server's own configuration admits the call, the server evaluates the
caller restriction on the same effective risk flags and effect (including
`interactive_ui` added by a request option, whether set or omitted). Server
`Flags:<flag>=allow` settings and per-operation `allow` overrides do not widen
the caller's limits, and exclusive workflows and unreviewed operations remain
denied. A wider caller profile is accepted and still limits on its own terms
(for example, `profile=full` still denies `interactive_ui`). The server checks
the caller's `deny` list first (`CALLER_FLAG`, reporting `caller_denied_flag`
in `risk_flags` order) and then the caller's `profile` (`CALLER_PROFILE`,
reporting `caller_admission_profile`), alongside `request_option_field` when a
request option decided. Caller denials return `PERMISSION_DENIED` /
`POLICY_DENIED` with `NOT_STARTED` and diagnostic `caller-restriction-denied`
(or `caller-restriction-option-denied` when only a request option caused the
caller's limits to deny).

The header applies to MP operation calls only; lifecycle, discovery, health,
and desktop RPCs ignore it. `ListCapabilities` does not read it
([briosa#463](https://github.com/spatialanalyzer/briosa/issues/463)), and
`policy_fingerprint` is unchanged. A caller restriction is a caller limiting
itself, not authentication: any local caller can omit it. On calls that carry a
restriction, `PolicyAllowed` (2002) and `PolicyRejected` (2003) audit events
add `CallerProfile`, `CallerDeniedFlags`, and `CallerRestrictionDecision`
(`admitted`, `denied`, or `not_evaluated`) using reviewed names only, and
record `caller.flag.<flag>` or `caller.profile.<profile>` (prefixed with
`option.<field>/` when a request option decided) only when that caller rule
denies the call.

## Duration Classes

The duration class selects the server's execution budget for a request. An
admitted request whose option turns on operator UI receives the longer of the
configured interactive budget and the operation's reviewed budget. For example,
a 60-minute `long_running` budget survives a 30-minute `interactive` setting.

| Duration Class | Configuration Key (Environment Variable Form) | Default | Maximum |
| --- | --- | --- | --- |
| `quick` | `Briosa__Worker__ExecutionWatchdogTimeout` | 30 seconds | 10 minutes |
| `long_running` | `Briosa__Worker__LongRunningExecutionWatchdogTimeout` | 10 minutes | 2 hours |
| `interactive` | `Briosa__Worker__InteractiveExecutionWatchdogTimeout` | 30 minutes | 8 hours |

The longer budgets may not be shorter than the quick budget. When a budget
expires after dispatch, the server terminates the worker and reports a watchdog
timeout whose outcome is unknown; see
[Understand MP Command Results](/docs/concepts/execution-outcomes). The readiness
probe, worker startup, and the application's launch and close keep their own
bounds; see [Windows Deployment](./windows.md#worker-time-bounds).

## Migrating From Allow and Deny

| Server 0.9.x | Server 0.10.x |
| --- | --- |
| `Allow:0 … Allow:N` listing every registered operation (packaged) | `"Profile": "standard"` (packaged) |
| A missing `Allow` denied every operation | A missing `Profile` fails startup |
| `Deny:0=<service>.<operation>` | `Overrides:<service>:<operation>=deny` |
| Adding an ID to `Allow` | `Overrides:<service>:<operation>=allow`, or a wider profile |
| Narrowing by command only | `Flags:<risk_flag>=deny` narrows a whole risk family, except operations with an `allow` override |
| `Briosa__Security__Operations__Deny__0` | `Briosa__Security__Operations__Overrides__<service>__<operation>=deny` |

To keep the previous behavior as closely as the new model allows:

```powershell
$env:Briosa__Security__Operations__Profile = "full"
$env:Briosa__Security__Operations__Flags__interactive_ui = "allow"
```

This admits reviewed standalone operations, including interactive ones.
Exclusive workflows, requests whose options leave work running after the call
returns, requests that cannot be classified against their reviewed options,
and operations with unreviewed metadata (including unknown replay safety)
still fail closed before overrides apply.

Compared with the previous default, `standard` stops admitting device sessions,
device configuration, and motion (use `device`); external IO, code execution,
and file deletion (use `full`); operations that open or block on operator UI
(use the interactive opt-in); and exclusive workflows, which nothing admits.
The operations that the client conformance scenarios and the
[Briosa tutorials](https://github.com/spatialanalyzer/briosa-examples) use all
stay admitted by `standard`.

**Replay safety.** Server 0.10.0 also tightens replay classification. The 11
surviving `Make*RuntimeSelect` operations on each target moved from replay
safety `Safe` to `Unsafe`, because replaying one prompts the operator again.
An operation whose replay safety is `Unknown` or `Unspecified` is denied as
unreviewed (`operation-risk-unreviewed`) under every setting.

The [authoritative policy guide](https://github.com/spatialanalyzer/briosa/blob/v0.10.2/targets/2026.1.0529.7/docs/operations/command-policy-and-auditing.md)
gives the full precedence and the audit records.
