---
title: MP Subroutines
description: Next Briosa JavaScript and TypeScript APIs for supported MP Subroutines MP commands.
toc_max_heading_level: 2
---

# MP Subroutines

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Run Subroutine

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Run Subroutine](/mp-command-catalog/commands/mp-subroutines#run-subroutine) · [gRPC contract](/api/grpc/mp-subroutines#run-subroutine)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mpSubroutineFilePath` | `FileReference` | `MP Subroutine File Path` | Required |
| `shareParentVariables` | `boolean` | `Share Parent Variables?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface RunSubroutineInput {
  readonly mpSubroutineFilePath: FileReference;
  readonly shareParentVariables?: boolean;
}

function runSubroutine(
  briosa: BriosaClient,
  input: RunSubroutineInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await runSubroutine(briosa, { mpSubroutineFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
