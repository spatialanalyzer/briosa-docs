---
title: Diagnostics and Recovery
---

# Diagnostics and Recovery

Start with safe state names from health and discovery. Do not capture complete
logs or application values in a public report.

| Observed State | Meaning | Action |
| --- | --- | --- |
| Liveness serves; no SDK or SA application is active | A manually started Briosa server is control-ready | Start the SDK, optionally launch SA, and then connect |
| SA is running; SDK state is `STOPPED` | No SDK generation is active | Start the SDK generation |
| SDK is `RUNNING` and `DISCONNECTED` | The SDK is healthy but not attached to SpatialAnalyzer | Start or locate one eligible exact-target application, then connect |
| SDK state is `STARTING`, `CONNECTING`, `VERIFYING`, or `RECOVERING` | A lifecycle transition is still in progress | Wait within the documented bound, then refresh SDK state |
| SDK state is `FAULTED`; recovery is available | The SDK process, worker, or control channel was lost | Review `last_incident`, reconcile an unknown command outcome when present, recover without replay, then connect |
| SDK is healthy but its connection is lost | The current generation may be reused | Correct the underlying condition, then reconnect |
| SDK state is `FAULTED`; operator action is required | Briosa cannot safely replace the generation yet | Correct the condition identified by the diagnostic code, recover, and then connect |
| Identity evidence is unavailable | Briosa cannot establish one exact runtime identity | Establish the missing claim; do not invent evidence |
| Either identity is a mismatch | Activated SDK or connected SA differs from the configured target | Stop the SDK, correct installation, COM registration, or application selection, and then start it again |
| Competing client suspected / operator action required | The execution-channel proof failed ambiguously | Stop competing SDK clients, establish one clean exact-target application, then reconnect or recover and connect as directed |
| SDK incident disposition is `STARTED_OUTCOME_UNKNOWN` | A command may have reached SpatialAnalyzer before the SDK was lost | Reconcile application state before considering replay; SDK recovery does not resolve the command |
| Operation is absent from capabilities | Current runtime policy does not admit it | Review policy; reflection is not authorization |

Safe reports can include the Briosa build coordinates, configured exact target,
operation ID, application and SDK state names, SDK termination kind, identity
source/match states, execution disposition, replay-safety classification, and
timestamp.

Do not include hostnames, process IDs, SDK status codes, local paths,
credentials, license information, evidence contents, raw MP arguments, returned
values, or complete logs.
