---
title: Author MP Command Catalog Pages
---

# Author MP Command Catalog Pages

The MP command catalog will document every retained command identity across
the supported exact SpatialAnalyzer targets. It includes current commands,
undecided and uncommitted commands, and commands the project ultimately does
not plan to support.

The catalog is currently content-first. Work through real command groups before
introducing a permanent metadata model, generated index, or completeness
validator.

## Preserve the SpatialAnalyzer Group Path

SpatialAnalyzer already groups MP commands, and that hierarchy belongs to the
exact SA target. For SDK-observed commands, use the reviewed group path supplied
by the maintainers. A path may identify a root group, such as `Construction
Operations`, or add one or more subgroup levels, such as `Construction
Operations / BSplines`.

Preserve the exact MP editor label and punctuation in catalog prose. For
example, use `Instrument Operations / API - LADAR`, not a label inferred from a
URL slug or internal storage name. Never publish maintainer-only source paths
or filenames.

Use that hierarchy as the primary catalog navigation. Each exact-target group
page records the commands found at that location for one SA release and links
to their canonical command entries. A workflow page may link to commands from
several groups, but it must not replace or obscure their SpatialAnalyzer paths.

The group path plus MP step disambiguates repeated command names. Do not assume
that an MP step name is globally unique.

Use one lightweight index page per exact-target SA group path. Keep the full
command documentation on canonical pages that group related command entries;
do not create one page per retained command by default. A command keeps one
stable canonical anchor even if a later SA release moves it to another group.
Each exact-target index links to that anchor from the location observed in that
release.

A supported operation may still have a separate API reference when it needs
request examples, response semantics, or operational cautions beyond its
catalog entry.

Some documentation-only inventory records use installed-document categories
that do not exactly match the SDK-observed hierarchy. Keep their observed path
and raise the placement for review; do not silently normalize it into another
group.

## Write Each Canonical Command Section

Use the exact MP step as the section heading so Docusaurus produces a readable
and stable command anchor. Then include the facts a user needs:

- a concise project-authored explanation of what the command represents
- the reviewed SA releases where it appears and the exact group path in each
- separately identified signature revisions when its name, inputs, or outputs
  change
- the Briosa status for each applicable exact target
- the Briosa RPC and operation ID when the command is supported
- the reviewed rationale when it is uncommitted, excluded, or SDK unavailable
- a recommended alternative, workaround, or a clear statement that none is
  known when Briosa does not support it
- links to authoritative Briosa source, reviewed decisions, and safe curated
  evidence where they materially help the reader

Use **latest reviewed** rather than claiming that an unchanged command will
remain compatible with unreviewed future SA releases. A group-only move may
reference the same signature revision. A name, input, or output change requires
a distinct signature revision.

Merge renamed or superseded commands into one lineage only after maintainers
review them as the same conceptual operation. Otherwise keep separate canonical
entries and link them as predecessor and successor.

Avoid duplicating detailed operation guides. Link to them from the catalog
entry instead.

When site search is introduced, index canonical command sections and exclude
the lightweight exact-target group indexes. Searching an old command name or
alias should lead to the same canonical entry rather than one result per SA
release.

## Keep Support Language Precise

Only a command implemented by the committed handwritten protobuf and operation
registry may be labeled **Current**. **Next** means committed to the next
planned release, not callable in the current one. **Undecided** means the
command still needs a reviewed disposition. **Uncommitted** means it may be
useful but has no release commitment. **Excluded** and **SDK unavailable** are
unsupported statuses and need a useful explanation.

Catalog membership, retained inventory membership, and a passing documentation
build never create Briosa runtime behavior. `DiscoveryService/ListCapabilities`
remains the authority for what a running process currently admits.

## Preserve the Evidence Boundary

Write concise project-authored facts and explanations. Do not copy installed MP
documentation or generated SDK samples, and do not publish proprietary
binaries, local paths, credentials, raw arguments, returned application data,
or licensed customer data.
