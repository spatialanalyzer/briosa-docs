---
title: One Application at a Time
description: Understand how applications share a Briosa server and its connected SpatialAnalyzer session.
---

# One Application at a Time

A running Briosa server and its connected SpatialAnalyzer application are
intended to be controlled by one application at a time.

That application may create more than one client or coordinate work across
several of its own components. The important rule is that one trusted owner
must remain responsible for the shared SpatialAnalyzer state.

## Why This Matters

SpatialAnalyzer has active selections, collections, settings, and other state
that can affect later MP commands. Two unrelated applications using the same
Briosa server could unknowingly change that state for one another.

Briosa ensures that individual MP commands do not execute at the same time.
It does not give every caller a separate SpatialAnalyzer workspace, and it does
not reserve the application across a sequence of several commands.

For example, one caller could select a collection and expect its next command
to use that collection. Before the next command arrives, another caller could
change the active collection. Both commands would run one at a time, but the
first caller's workflow could still produce the wrong result.

## What You Should Do

- Let one application own each running Briosa and SpatialAnalyzer session
- Coordinate calls made by different parts of that application
- Avoid connecting unrelated automation tools to the same server
- Recheck important SpatialAnalyzer state before a command when the operation
  allows it

:::note[One Owner Does Not Mean One Client Object]

An application can use multiple client objects when it coordinates them safely.
The restriction is about independent callers competing over the same
SpatialAnalyzer state, not the number of client-library objects in memory.

:::

Workflows that need exclusive ownership across several MP commands are not yet
supported. Until Briosa provides that capability, keep those workflows inside
one coordinated application and prevent other callers from sharing the session.
