---
title: MP Subroutines
description: Unreleased Briosa .NET APIs for supported MP Subroutines MP commands.
toc_max_heading_level: 2
---

# MP Subroutines

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Run Subroutine

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

[Run Subroutine](/mp-command-catalog/commands/mp-subroutines#run-subroutine) · [gRPC contract](/api/grpc/mp-subroutines#run-subroutine)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mpSubroutineFilePath` | `FileReference` | `MP Subroutine File Path` | Required |
| `shareParentVariables` | `bool` | `Share Parent Variables?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task RunSubroutineAsync(
    FileReference mpSubroutineFilePath,
    bool shareParentVariables = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RunSubroutineAsync(mpSubroutineFilePath: mpSubroutineFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
