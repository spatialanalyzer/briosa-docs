---
title: File Operations in SA 2024.1.0508.5
sidebar_label: File Operations
description: Reviewed File Operations commands and released Briosa support for SpatialAnalyzer 2024.1.0508.5.
---

# File Operations

<p className="catalog-path">SA 2024.1.0508.5 <span aria-hidden="true">/</span> File Operations</p>

This group contains 34 reviewed command entries. **Current** means implemented
in Briosa Server 0.9.2 for this exact target. Runtime readiness and policy still apply. Follow a
command link for its exact-target signature, disposition, and version differences.

| MP Command | Status | Validation |
| --- | --- | --- |
| [Backup Now](/mp-command-catalog/commands/file-operations#backup-now) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Browse for Directory](/mp-command-catalog/commands/file-operations#browse-for-directory) | <span className="catalog-status catalog-status--uncommitted">Uncommitted</span> | Evidence review |
| [Browse for File](/mp-command-catalog/commands/file-operations#browse-for-file) | <span className="catalog-status catalog-status--uncommitted">Uncommitted</span> | Evidence review |
| [Copy Directory](/mp-command-catalog/commands/file-operations#copy-directory) | <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span> | Evidence review |
| [Copy General File](/mp-command-catalog/commands/file-operations#copy-general-file) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Delete Directory](/mp-command-catalog/commands/file-operations#delete-directory) | <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span> | Evidence review |
| [Delete General File](/mp-command-catalog/commands/file-operations#delete-general-file) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Directory Existence](/mp-command-catalog/commands/file-operations#directory-existence) | <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span> | Evidence review |
| [Exit Measurement Plan](/mp-command-catalog/commands/file-operations#exit-measurement-plan) | <span className="catalog-status catalog-status--uncommitted">Uncommitted</span> | Evidence review |
| [Find Files in Directory](/mp-command-catalog/commands/file-operations#find-files-in-directory) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Find Sub-Directories in Directory](/mp-command-catalog/commands/file-operations#find-sub-directories-in-directory) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Get Directory and Filename from Path](/mp-command-catalog/commands/file-operations#get-directory-and-filename-from-path) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Get Working Directory](/mp-command-catalog/commands/file-operations#get-working-directory) | <span className="catalog-status catalog-status--current">Current</span> | Limited local licensed smoke test |
| [Make Directory](/mp-command-catalog/commands/file-operations#make-directory) | <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span> | Evidence review |
| [Make Embedded File Name List](/mp-command-catalog/commands/file-operations#make-embedded-file-name-list) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [New SA File](/mp-command-catalog/commands/file-operations#new-sa-file) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Open SA File](/mp-command-catalog/commands/file-operations#open-sa-file) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Open Template File](/mp-command-catalog/commands/file-operations#open-template-file) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Pop PolyBay Analysis Window](/mp-command-catalog/commands/file-operations#pop-polybay-analysis-window) | <span className="catalog-status catalog-status--current">Current</span> | At Risk — no 2024 runtime validation |
| [Rename General File](/mp-command-catalog/commands/file-operations#rename-general-file) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Run Another Program](/mp-command-catalog/commands/file-operations#run-another-program) | <span className="catalog-status catalog-status--uncommitted">Uncommitted</span> | Evidence review |
| [Run Powershell Script](/mp-command-catalog/commands/file-operations#run-powershell-script) | <span className="catalog-status catalog-status--uncommitted">Uncommitted</span> | Evidence review |
| [Save](/mp-command-catalog/commands/file-operations#save) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Save As Read-Only Template](/mp-command-catalog/commands/file-operations#save-as-read-only-template) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Save As...](/mp-command-catalog/commands/file-operations#save-as) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Set Backup Directory](/mp-command-catalog/commands/file-operations#set-backup-directory) | <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span> | Evidence review |
| [Set Data Root Directory](/mp-command-catalog/commands/file-operations#set-data-root-directory) | <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span> | Evidence review |
| [Set Reports Directory](/mp-command-catalog/commands/file-operations#set-reports-directory) | <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span> | Evidence review |
| [Set Templates Directory](/mp-command-catalog/commands/file-operations#set-templates-directory) | <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span> | Evidence review |
| [Set Working Directory](/mp-command-catalog/commands/file-operations#set-working-directory) | <span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span> | Evidence review |
| [Shut Down SA](/mp-command-catalog/commands/file-operations#shut-down-sa) | <span className="catalog-status catalog-status--excluded">Excluded</span> | Evidence review |
| [Terminate All Running MPs](/mp-command-catalog/commands/file-operations#terminate-all-running-mps) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Verify General File Exists](/mp-command-catalog/commands/file-operations#verify-general-file-exists) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |
| [Verify MP File Exists](/mp-command-catalog/commands/file-operations#verify-mp-file-exists) | <span className="catalog-status catalog-status--current">Current</span> | Evidence review — no 2024 runtime validation |

## Subgroups

- [ASCII Data File Operations](./file-operations-ascii-data-file-operations.md)
- [Data Share Operations](./file-operations-data-share-operations.md)
- [Database Operations](./file-operations-database-operations.md)
- [File Export](./file-operations-file-export.md)
- [File Import](./file-operations-file-import.md)
- [JSON](./file-operations-json.md)
- [XML](./file-operations-xml.md)

[All 2024 Groups](./group-hierarchy.md) · [Review Notes](./review-notes.md)
