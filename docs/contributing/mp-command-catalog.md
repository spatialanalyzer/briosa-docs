---
title: Author MP command catalog pages
---

# Author MP command catalog pages

The MP command catalog will document every retained command identity for each
supported exact SpatialAnalyzer target. It includes commands Briosa supports,
commands still under review, and commands the project ultimately does not plan
to support.

The catalog is currently content-first. Work through real command groups before
introducing a permanent metadata model, generated index, or completeness
validator.

## Group related commands

Create pages around a coherent MP category, subcategory, or user workflow. A
page should contain several commands when they share enough context to be
understood together. Split a page when the commands have materially different
purposes or the result is difficult to navigate.

Do not create one page per retained command by default. A supported operation
may still have a separate usage guide when it needs request examples, response
semantics, or operational cautions beyond its catalog entry.

## Write each command section

Use the exact MP step as the section heading so Docusaurus produces a readable
command anchor. State the exact target and current public status. Then include
the facts a user needs:

- the Briosa RPC and operation ID when the command is supported;
- a concise project-authored explanation of what the command represents;
- the reviewed rationale when it is deferred, excluded, or SDK unavailable;
- a recommended alternative, workaround, or a clear statement that none is
  known when Briosa does not support it; and
- links to authoritative Briosa source, reviewed decisions, and safe curated
  evidence where they materially help the reader.

Avoid duplicating detailed operation guides. Link to them from the catalog
entry instead.

## Keep support language precise

Only a command implemented by the committed handwritten protobuf and operation
registry may be labeled **Supported**. **Selected for v1** means planned, not
callable. **Under review** is a temporary v0.x disposition, not API. **Deferred
beyond v1**, **Intentionally excluded**, and **SDK unavailable** are unsupported
statuses and need a useful explanation.

Catalog membership, retained inventory membership, and a passing documentation
build never create Briosa runtime behavior. `DiscoveryService/ListCapabilities`
remains the authority for what a running process currently admits.

## Preserve the evidence boundary

Write concise project-authored facts and explanations. Do not copy installed MP
documentation or generated SDK samples, and do not publish proprietary
binaries, local paths, credentials, raw arguments, returned application data,
or licensed customer data.
