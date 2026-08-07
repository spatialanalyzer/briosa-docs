---
sidebar_position: 1
title: What is Briosa?
description: Understand what Briosa provides, what it deliberately does not provide, and where its API is defined.
---

# What is Briosa?

Briosa is an open-source gRPC bridge around the Hexagon SpatialAnalyzer SDK. It
exposes selected MP commands as strongly typed, language-neutral RPCs and keeps
the OLE Automation/COM boundary inside a separately supervised Windows worker.

Use Briosa when you want an ordinary gRPC client to work with a reviewed
SpatialAnalyzer MP surface without owning COM state or SDK call sequencing.

:::important[Separate software and license]

Briosa does not contain SpatialAnalyzer, the SA SDK, or a license.
SpatialAnalyzer must be installed, licensed, and running separately.

:::

## Current supported surface

The current product targets exactly SpatialAnalyzer `2026.1.0529.7` and
implements six read-only MP operations:

| gRPC RPC | MP step | Input | Output |
| --- | --- | --- | --- |
| `FileOperations/GetWorkingDirectory` | `Get Working Directory` | none | `directory` |
| `AnalysisOperations/GetNumberOfCollections` | `Get Number of Collections` | none | `total_count` |
| `AnalysisOperations/GetIThCollectionName` | `Get i-th Collection Name` | `collection_index` | `resultant_name` |
| `ConstructionOperations/GetActiveCollectionName` | `Get Active Collection Name` | none | `currently_active_collection_name` |
| `UtilityOperations/GetActiveUnits` | `Get Active Units` | none | `length`, `angular`, `temperature` |
| `UtilityOperations/GetWorkingFrameProperties` | `Get Working Frame Properties` | none | `frame_name`, `collection_name`, `working_frame` |

That is the complete supported MP surface for this baseline. Inventory records,
reference evidence, historical code, and in-progress branches do not add
supported operations.

The [MP command catalog](./mp-command-catalog/overview.md) will document the
complete retained exact-target command surface, including commands Briosa does
not support.

## Where the contract lives

The committed
[protobuf contracts](https://github.com/spatialanalyzer/briosa/tree/main/targets/2026.1.0529.7/proto/briosa)
and handwritten
[operation registry](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/src/Briosa.Server/Operations/SpatialAnalyzerApi.cs)
in `spatialanalyzer/briosa` are authoritative. This website explains those
contracts but does not define them.

The wire package remains `briosa`; an SA release number never enters public
protobuf service, message, or RPC names.

## Runtime shape

One Briosa host supervises one worker. The worker owns one SDK connection and
one STA thread that serializes each complete MP sequence. Readiness requires
more than a successful SDK attachment: the activated SDK and connected
SpatialAnalyzer identities must match the exact target, followed by a bounded
execution-channel proof.

[Check the prerequisites →](./getting-started/prerequisites)
