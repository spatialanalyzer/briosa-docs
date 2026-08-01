---
title: GetWorkingDirectory
---

# GetWorkingDirectory

Implements the `Get Working Directory` MP for exact target `2026.1.0529.7`.

| Contract item | Value |
| --- | --- |
| Service | `briosa.FileOperations` |
| RPC | `GetWorkingDirectory` |
| Operation ID | `file_operations.get_working_directory` |
| Request | no fields |
| Result | optional string `directory` plus shared `execution` details |
| Classification | read only · global-state read · replay safe |

```powershell
grpcurl -plaintext -d '{}' 127.0.0.1:50051 briosa.FileOperations/GetWorkingDirectory
```

The returned path is application data. Briosa returns it to the caller but does
not log it by default.

The worker sets the MP step, executes it, retrieves the MP result, requires
result code `2`, and only then retrieves the `Directory` string. MP failure
prevents the getter from running; getter failure returns a data-loss outcome
instead of an empty directory.

[View the authoritative operation source](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/operations/get-working-directory.md).
