---
title: Google Sheets Operations Commands
description: Canonical SpatialAnalyzer MP command dispositions for Google Sheets Operations.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Google Sheets Operations Commands

These canonical entries document the reviewed 2026.1.0529.7 command surface once. Current entries are included in Briosa Server 0.5.1; runtime policy and readiness still apply.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>8</strong></div>
  <div><span>Current Server Operations</span><strong>0</strong></div>
  <div><span>Excluded or Unavailable</span><strong>8</strong></div>
</div>

<CatalogFilter scopedGroup="Google Sheets Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Close All Google Sheets Spreadsheets" data-group="Google Sheets Operations" data-status="excluded" data-validation="not-applicable">
  <td><a href="#close-all-google-sheets-spreadsheets">Close All Google Sheets Spreadsheets</a></td>
  <td>Google Sheets Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Close Google Sheets Spreadsheet" data-group="Google Sheets Operations" data-status="excluded" data-validation="not-applicable">
  <td><a href="#close-google-sheets-spreadsheet">Close Google Sheets Spreadsheet</a></td>
  <td>Google Sheets Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Get Google Sheets Spreadsheet Cell Address" data-group="Google Sheets Operations" data-status="sdk-unavailable" data-validation="not-applicable">
  <td><a href="#get-google-sheets-spreadsheet-cell-address">Get Google Sheets Spreadsheet Cell Address</a></td>
  <td>Google Sheets Operations</td>
  <td><span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Google Sheets Insert Column" data-group="Google Sheets Operations" data-status="excluded" data-validation="not-applicable">
  <td><a href="#google-sheets-insert-column">Google Sheets Insert Column</a></td>
  <td>Google Sheets Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Google Sheets Insert Row" data-group="Google Sheets Operations" data-status="excluded" data-validation="not-applicable">
  <td><a href="#google-sheets-insert-row">Google Sheets Insert Row</a></td>
  <td>Google Sheets Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Google Sheets Run Script" data-group="Google Sheets Operations" data-status="excluded" data-validation="not-applicable">
  <td><a href="#google-sheets-run-script">Google Sheets Run Script</a></td>
  <td>Google Sheets Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Open Google Sheets Spreadsheet" data-group="Google Sheets Operations" data-status="excluded" data-validation="not-applicable">
  <td><a href="#open-google-sheets-spreadsheet">Open Google Sheets Spreadsheet</a></td>
  <td>Google Sheets Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
<tr data-command="Set Google Sheets Spreadsheet Cell Address" data-group="Google Sheets Operations" data-status="excluded" data-validation="not-applicable">
  <td><a href="#set-google-sheets-spreadsheet-cell-address">Set Google Sheets Spreadsheet Cell Address</a></td>
  <td>Google Sheets Operations</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td>
  <td>Not applicable</td>
</tr>
</tbody>
</table>

## Close All Google Sheets Spreadsheets

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Google Sheets Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| — | None | — | — | — |

### Briosa Disposition

Closes SA-maintained Google Sheets sessions that Briosa does not expose. Use an
official Google Sheets client library and manage its connections directly.

**Recommended Alternative:** Use an official Google Sheets client library.



## Close Google Sheets Spreadsheet

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Google Sheets Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Spreadsheet ID` | String | Empty | Not applicable |

### Briosa Disposition

Closes one SA-maintained Google Sheets session that Briosa does not expose. Use
an official Google Sheets client library and manage its connection directly.

**Recommended Alternative:** Use an official Google Sheets client library.



## Get Google Sheets Spreadsheet Cell Address

<span className="catalog-status catalog-status--sdk-unavailable">SDK Unavailable</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Google Sheets Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Spreadsheet ID` | String | Empty | Not applicable |
| Output | `Absolute Position Worksheet Name` | String | — | — |
| Output | `Absolute Position Column (A, B, C, ...)` | String | — | — |
| Output | `Absolute Position Row (1, 2, 3, ...)` | Integer | — | — |
| Output | `Named Cell/Range in Workbook` | String | — | — |
| Output | `Auto Move # Cells` | Integer | — | — |
| Output | `Active Cell Address` | String | — | — |

### Briosa Disposition

No complete useful exact-target SDK binding is available.

**Recommended Alternative:** Use an official Google Sheets client library.



## Google Sheets Insert Column

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Google Sheets Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Spreadsheet ID` | String | Empty | Not applicable |

### Briosa Disposition

Inserts a column relative to SA's current spreadsheet cell. Use an official
Google Sheets client library to address the intended sheet and column directly.

**Recommended Alternative:** Use an official Google Sheets client library.



## Google Sheets Insert Row

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Google Sheets Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Spreadsheet ID` | String | Empty | Not applicable |

### Briosa Disposition

Inserts a row relative to SA's current spreadsheet cell. Use an official Google
Sheets client library to address the intended sheet and row directly.

**Recommended Alternative:** Use an official Google Sheets client library.



## Google Sheets Run Script

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Google Sheets Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Spreadsheet ID` | String | Empty | Not applicable |
| Input | `Spreadsheet Function Script ID` | String | Empty | Not applicable |
| Input | `Function Name` | String | Empty | Not applicable |

### Briosa Disposition

Runs a Google Apps Script function through SA's Google Sheets session. Use the
Google Apps Script API through an official client library instead.

**Recommended Alternative:** Use an official Google Sheets client library.



## Open Google Sheets Spreadsheet

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Google Sheets Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Spreadsheet ID` | String | Empty | Not applicable |
| Input | `Spreadsheet Function Script ID` | String | Empty | Not applicable |
| Input | `Redirect URL Port` | Integer | 8080 | Not applicable |

### Briosa Disposition

Creates the SA-maintained authorization and spreadsheet session used by the
other Google Sheets MP commands. Briosa does not expose that integration; use
an official Google client library and its supported authentication flow.

**Recommended Alternative:** Use an official Google Sheets client library.



## Set Google Sheets Spreadsheet Cell Address

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Google Sheets Operations</strong></div>
  <div><span>Validation</span><strong>Not applicable</strong></div>
  <div><span>SDK Observation</span><strong>Present</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Spreadsheet ID` | String | Empty | Not applicable |
| Input | `Addressing Mode` | WorkbookAddressModeType | Absolute Position | Not applicable |
| Input | `Absolute Position Worksheet Name` | String | Empty | Not applicable |
| Input | `Absolute Position Column (A, B, C, ...)` | String | A | Not applicable |
| Input | `Absolute Position Row (1, 2, 3, ...)` | Integer | 1 | Not applicable |
| Input | `Relative Move Direction` | MoveDirectionType | Down | Not applicable |
| Input | `Relative Move # Cells` | Integer | 1 | Not applicable |
| Input | `Named Cell/Range in Workbook` | String | Empty | Not applicable |
| Input | `Write Mode` | WriteModeType | Overwrite | Not applicable |
| Input | `Auto Move Direction` | MoveDirectionType | Down | Not applicable |
| Input | `Auto Move # Cells` | Integer | 1 | Not applicable |
| Output | `Active Cell Address` | String | — | — |

### Briosa Disposition

Changes SA's stateful Google Sheets cursor and write behavior. Use explicit
sheet and range addressing through an official Google Sheets client library.

**Recommended Alternative:** Use an official Google Sheets client library.
