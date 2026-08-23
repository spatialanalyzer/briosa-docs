---
title: Google Sheets Operations / Google Sheets Read Operations Commands
description: Canonical MP command dispositions for the Google Sheets Read Operations subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Google Sheets Operations / Google Sheets Read Operations Commands

These entries cover the five commands observed under **Google Sheets
Operations → Google Sheets Read Operations** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>5</strong></div>
  <div><span>Current or Next</span><strong>0</strong></div>
  <div><span>Excluded or Unavailable</span><strong>5</strong></div>
</div>

<CatalogFilter scopedGroup="Google Sheets Operations / Google Sheets Read Operations" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Google Sheets Read Boolean" data-group="Google Sheets Operations / Google Sheets Read Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#google-sheets-read-boolean">Google Sheets Read Boolean</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Google Sheets Read Integer" data-group="Google Sheets Operations / Google Sheets Read Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#google-sheets-read-integer">Google Sheets Read Integer</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Google Sheets Read Double" data-group="Google Sheets Operations / Google Sheets Read Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#google-sheets-read-double">Google Sheets Read Double</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Google Sheets Read String" data-group="Google Sheets Operations / Google Sheets Read Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#google-sheets-read-string">Google Sheets Read String</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
<tr data-command="Google Sheets Read Variables" data-group="Google Sheets Operations / Google Sheets Read Operations" data-status="excluded" data-validation="not-applicable"><td><a href="#google-sheets-read-variables">Google Sheets Read Variables</a></td><td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Not applicable</td></tr>
</tbody>
</table>

## Google Sheets Read Boolean

<span className="catalog-status catalog-status--excluded">Excluded</span>

Reads a Boolean from the current cell in SpatialAnalyzer's stateful Google
Sheets session. Use an official Google Sheets client library to read an
explicit cell or range instead.

## Google Sheets Read Integer

<span className="catalog-status catalog-status--excluded">Excluded</span>

Reads an Integer from the current cell in SpatialAnalyzer's stateful Google
Sheets session. Use an official Google Sheets client library instead.

## Google Sheets Read Double

<span className="catalog-status catalog-status--excluded">Excluded</span>

Reads a Double from the current cell in SpatialAnalyzer's stateful Google
Sheets session. Use an official Google Sheets client library instead.

## Google Sheets Read String

<span className="catalog-status catalog-status--excluded">Excluded</span>

Reads a String from the current cell in SpatialAnalyzer's stateful Google
Sheets session. Use an official Google Sheets client library instead.

## Google Sheets Read Variables

<span className="catalog-status catalog-status--excluded">Excluded</span>

Walks named cells and assigns their values to matching stored MP variables.
The command returns no SDK result and is meaningful specifically to MP variable
state. Use an official Google Sheets client library to read the required data,
then retain it in the calling application's own variables.

These commands are available through the exact SA SDK, but Briosa excludes
them from the initial API because they duplicate ordinary Google Sheets access
while adding SA-maintained cursor, credential, and MP-variable state.
