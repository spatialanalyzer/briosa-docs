---
title: Google Sheets Operations / Google Sheets Write Operations Commands
description: Canonical MP command dispositions for the Google Sheets Write Operations subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Google Sheets Operations / Google Sheets Write Operations Commands

These entries cover the six commands observed under **Google Sheets Operations
→ Google Sheets Write Operations** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>6</strong></div>
  <div><span>Current or Next</span><strong>0</strong></div>
  <div><span>Excluded or Unavailable</span><strong>6</strong></div>
</div>

<CatalogFilter scopedGroup="Google Sheets Operations / Google Sheets Write Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Google Sheets Write Boolean" data-group="Google Sheets Operations / Google Sheets Write Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#google-sheets-write-boolean">Google Sheets Write Boolean</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Google Sheets Write Integer" data-group="Google Sheets Operations / Google Sheets Write Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#google-sheets-write-integer">Google Sheets Write Integer</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Google Sheets Write Double" data-group="Google Sheets Operations / Google Sheets Write Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#google-sheets-write-double">Google Sheets Write Double</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Google Sheets Write String" data-group="Google Sheets Operations / Google Sheets Write Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#google-sheets-write-string">Google Sheets Write String</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Google Sheets Write Image" data-group="Google Sheets Operations / Google Sheets Write Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#google-sheets-write-image">Google Sheets Write Image</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Google Sheets Write Variables" data-group="Google Sheets Operations / Google Sheets Write Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#google-sheets-write-variables">Google Sheets Write Variables</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
</tbody>
</table>

## Google Sheets Write Boolean

<span className="catalog-status catalog-status--excluded">Excluded</span>

Writes a Boolean to the current cell in SpatialAnalyzer's stateful Google
Sheets session. Use an official Google Sheets client library to write an
explicit cell or range instead.

## Google Sheets Write Integer

<span className="catalog-status catalog-status--excluded">Excluded</span>

Writes an Integer to the current cell in SpatialAnalyzer's stateful Google
Sheets session. Use an official Google Sheets client library instead.

## Google Sheets Write Double

<span className="catalog-status catalog-status--excluded">Excluded</span>

Writes a Double to the current cell in SpatialAnalyzer's stateful Google Sheets
session. Use an official Google Sheets client library instead.

## Google Sheets Write String

<span className="catalog-status catalog-status--excluded">Excluded</span>

Writes a String to the current cell in SpatialAnalyzer's stateful Google Sheets
session. Use an official Google Sheets client library instead.

## Google Sheets Write Image

<span className="catalog-status catalog-status--excluded">Excluded</span>

Writes an image URL and requested pixel dimensions through SpatialAnalyzer's
current-cell state. Use the Google Sheets and Google Drive APIs through an
official client library instead.

## Google Sheets Write Variables

<span className="catalog-status catalog-status--excluded">Excluded</span>

Walks stored MP variables and matching named cells. The command is coupled to
MP variable and cursor state and returns no SDK result. Use an official Google
Sheets client library to write values held by the calling application.

These commands are available through the exact SA SDK, but Briosa excludes
them from the initial API because they duplicate ordinary Google Sheets access
while adding SA-maintained cursor, credential, and MP-variable state.
