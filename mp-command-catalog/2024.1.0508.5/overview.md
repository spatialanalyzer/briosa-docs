---
title: SA 2024.1.0508.5 Catalog
description: Reviewed MP commands and planned Briosa support for SpatialAnalyzer 2024.1.0508.5.
---

# SA 2024.1.0508.5 Catalog

This catalog documents **1,283 captured MP commands** across **79 command groups
and subgroups** in SpatialAnalyzer 2024.1.0508.5. Each command links to a canonical
entry with its exact-target group, disposition, signature, and reviewed differences.

**Briosa support for this target is planned. No 2024 server or client package has
been released, and no command is currently callable through a 2024 Briosa server.**

- [Browse the SpatialAnalyzer group hierarchy](./group-hierarchy.md)
- [Search the 2024 command index](/mp-command-catalog/commands?target=2024.1.0508.5)
- [Read the version differences and review notes](./review-notes.md)
- [Understand command statuses](../overview.md#how-to-read-status)

## Reviewed Dispositions

| Status | Commands | Meaning for This Target |
| --- | ---: | --- |
| Next | 996 | Selected for the planned 2024 implementation; not released. |
| Excluded | 171 | Existing product or workflow rationale also applies to 2024. |
| SDK Unavailable | 75 | No complete reviewed useful SDK mapping is available. |
| Uncommitted | 41 | Retained for reference, with no release commitment. |
| Current | 0 | A 2024 server implementation has not been released. |

The review matched every captured command to an existing canonical entry and
carried forward applicable 2026 decisions. Version differences were reviewed
individually or as a shared binding family. Repeated names remain separate when
their groups identify different commands, including the two `Save` commands.

## Signature and Validation Scope

The canonical entries identify narrower 2024 signatures and choices, changed
argument labels, and SDK mapping limitations. A 2026 API link or default is not
a promise of the same 2024 API. Exported sample values alone do not establish
defaults or omission behavior.

This is an evidence and SDK-interface review. It does not establish licensed
runtime success. Existing At Risk qualifications remain visible; fixture,
equipment, interaction, and external-software needs carry forward to the 2024
implementation. See [Release Status](/docs/releases) for the current v0.x
validation policy.

## Coverage

The catalog covers the complete supplied 2024 command-step capture. It does not
infer 2024 availability for commands known only from the 2026 catalog, and it
does not claim that an absent export proves a command absent from SpatialAnalyzer.
Private exports and vendor implementation are not distributed with these pages.
