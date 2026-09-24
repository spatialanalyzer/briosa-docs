---
title: GetWorkingDirectory
---

# GetWorkingDirectory

[SA 2026.1.0529.7](/api/grpc/get-working-directory) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/get-working-directory)

Implements the `Get Working Directory` MP for exact target `2024.1.0508.5`.

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Working Directory](/mp-command-catalog/commands/file-operations#get-working-directory) |
| SpatialAnalyzer Group | File Operations |
| Briosa Status | **Current** |
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

[View the authoritative operation source](https://github.com/spatialanalyzer/briosa/blob/v0.8.0/targets/2024.1.0508.5/docs/operations/get-working-directory.md).

## Client Library References

- [.NET `GetWorkingDirectoryAsync`](/api/dotnet/sa-2024.1.0508.5/get-working-directory)
- [Python `get_working_directory`](/api/python/sa-2024.1.0508.5/get-working-directory)
- [JavaScript and TypeScript `getWorkingDirectory`](/api/javascript/sa-2024.1.0508.5/get-working-directory)
