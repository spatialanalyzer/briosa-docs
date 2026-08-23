---
title: Briosa for JavaScript and TypeScript API
description: Reference documentation for the Briosa JavaScript and TypeScript client library.
slug: /
---

# Briosa for JavaScript and TypeScript API

This section follows the public API of the Briosa JavaScript and TypeScript
client library. Use it to look up client lifecycle, operation methods, result
types, errors, timeouts, and cancellation behavior for Node.js applications.

The first versioned reference will be published with the first supported client
package release. Until then, these pages describe the reviewed public contract
being implemented. Pre-release package checkouts may still expose temporary
bootstrap interfaces.

:::note[Local-Only in v1]

The JavaScript client launches Briosa only on the same Windows machine as
SpatialAnalyzer. Secure remote connections are
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

:::

Start with the [`BriosaClient` lifecycle](/api/javascript/lifecycle) to
understand default startup, explicit SDK and SA control, command admission,
recovery, stop, restart, and cleanup.

For task-oriented examples, start with
[Run your first MP command](/docs/getting-started/first-request). For the
underlying service contract, use the [gRPC API Reference](/api/grpc).

[View the JavaScript client repository](https://github.com/spatialanalyzer/briosa-js)

## Wave A Next APIs

The sidebar's **Wave A MP Commands (Next)** section defines the planned
JavaScript functions and TypeScript input/result shapes for all selected
commands, including reviewed defaults, examples, and gRPC links.

The **Wave B MP Commands (Next)** section currently adds the reviewed Cloud and
Mesh Operations functions, the Construction Operations root functions, and the
BSpines, Callout Views and Callouts, Circles, Collections, Cones, Cylinders,
Ellipses, Ellipsoids, Folders, Frames, Lines, Other MP Types, Perimeters,
Planes, Point Clouds, Points and Groups, Polygonized Surfaces, Scale Bars,
Spheres, Surfaces, and Vectors and Vector Groups subgroups, plus GDT Analysis,
GDT Construction, and 171 selected operations from 175 reviewed Instrument
Operations root and subgroup
commands, plus all twenty-five Robot Calibration Appliance Node Operations and
all thirty-three Robot Operations functions, plus fifty selected functions from
all fifty-five reviewed Wave B Relationship Operations root commands, plus four
final reconciled subgroup functions,
including their shared value types.
