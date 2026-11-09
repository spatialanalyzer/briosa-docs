---
title: Operation Admission
description: How Server 0.10.0 decides which MP operations it admits, from named profiles, risk flags, overrides, and request options.
---

# Operation Admission

Server 0.10.0 admits MP operations through a named **admission profile**. The
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
| `full` | Adds `external_io`, `code_execution`, and `filesystem_delete` | None | Everything except interactive operations and exclusive workflows |

| Target | Registered | `read-only` | `standard` | `device` | `full` | Exclusive Workflows | Interactive |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| SA 2026.1.0529.7 | 1,018 | 184 | 797 | 905 | 922 | 42 | 57 |
| SA 2024.1.0508.5 | 987 | 180 | 778 | 871 | 888 | 45 | 57 |

The seven device-configuration setters, such as the instrument scale factors,
the robot model-link parameters, and the robot calibration frames, carry
`device_config`, so only `device` and `full` admit them.

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
UI is admitted only with the **interactive opt-in**:
`Flags:interactive_ui=allow`, or a per-operation `allow` override. The other
flags of its row still need a profile that admits them, so an interactive device
operation needs `device` or `full` as well as the opt-in.

Some operations open operator UI only when a request option asks for it, such
as Show Interface, Show Results Dialog, Report Deviations, Pause MP Until
Closed, or an HTML prompt file. The server reads each request's reviewed options
before it maps or dispatches the request. A request that turns such an option on
also needs the interactive opt-in; without it the request is denied with
`operation-option-denied`. The operation's page names each such option.

These request defaults changed in Server 0.10.0 so that the waiting,
non-prompting behavior is the default:

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
`Deny` arrays are present. Names and values are exact and case-sensitive.
Policy is fixed for the process lifetime; restart the server after changing it.

A denied call returns the typed, value-free `PermissionDenied` outcome with a
`NotStarted` disposition. An operation without a complete reviewed
classification is denied under every setting.

## Duration Classes

The duration class selects the server's execution budget for a request. A
request that turns on operator UI runs under the interactive budget.

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

| Server 0.9.x | Server 0.10.0 |
| --- | --- |
| `Allow:0 … Allow:N` listing every registered operation (packaged) | `"Profile": "standard"` (packaged) |
| A missing `Allow` denied every operation | A missing `Profile` fails startup |
| `Deny:0=<service>.<operation>` | `Overrides:<service>:<operation>=deny` |
| Adding an ID to `Allow` | `Overrides:<service>:<operation>=allow`, or a wider profile |
| Narrowing by command only | `Flags:<risk_flag>=deny` narrows a whole risk family |
| `Briosa__Security__Operations__Deny__0` | `Briosa__Security__Operations__Overrides__<service>__<operation>=deny` |

To keep the previous behavior as closely as the new model allows, which is
everything except exclusive workflows:

```powershell
$env:Briosa__Security__Operations__Profile = "full"
$env:Briosa__Security__Operations__Flags__interactive_ui = "allow"
```

Compared with the previous default, `standard` stops admitting device sessions,
device configuration, and motion (use `device`); external IO, code execution,
and file deletion (use `full`); operations that open or block on operator UI
(use the interactive opt-in); and exclusive workflows, which nothing admits.
The operations that the client conformance scenarios and the
[Briosa tutorials](https://github.com/spatialanalyzer/briosa-examples) use all
stay admitted by `standard`.

The [authoritative policy guide](https://github.com/spatialanalyzer/briosa/blob/2960705eb3152646513dca2b5d2043cd7cfffb75/targets/2026.1.0529.7/docs/operations/command-policy-and-auditing.md)
gives the full precedence and the audit records.
