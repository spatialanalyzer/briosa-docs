---
title: Diagnostics and Recovery
---

# Diagnostics and Recovery

Start with safe state names from health and discovery. Do not capture complete
logs or application values in a public report.

| Observed State | Meaning | Action |
| --- | --- | --- |
| Liveness serves; readiness does not; connection is disconnected, connecting, or faulted | SpatialAnalyzer is absent, starting, unreachable, or the worker could not attach | Stop Briosa, start one licensed exact-target SA instance, wait for startup, then restart Briosa |
| Identity evidence is unavailable | Briosa cannot establish one exact runtime identity | Establish the missing claim; do not invent evidence |
| Either identity is a mismatch | Activated SDK or connected SA differs from the configured target | Correct installation, COM registration, connection target, or the evidence claim |
| Competing client suspected / operator recovery required | The execution-channel proof failed ambiguously | Close Briosa, all SDK clients, and all SA instances; start one clean exact-target instance; then restart Briosa |
| Operation is absent from capabilities | Current runtime policy does not admit it | Review policy; reflection is not authorization |

Safe reports can include the Briosa build coordinates, configured exact target,
operation ID, health state names, identity source/match states, execution
disposition, replay-safety classification, and timestamp.

Do not include hostnames, process IDs, SDK status codes, local paths,
credentials, license information, evidence contents, raw MP arguments, returned
values, or complete logs.
