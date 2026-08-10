---
sidebar_position: 1
title: Why Briosa?
description: Learn how Briosa brings familiar SpatialAnalyzer MP commands to the programming language and tools you already use.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use Familiar MP Commands from Any Programming Language

Briosa lets you build applications and scripts that work with SpatialAnalyzer
using the MP commands and terminology you already know. If you are comfortable
building Measurement Plans in SpatialAnalyzer, Briosa is designed to feel
familiar from the start.

Instead of limiting your integration to the languages that work most naturally
with the SA SDK's OLE Automation interface, Briosa makes supported MP commands
available through a consistent, language-neutral API. First-party client
libraries for .NET, Python, and JavaScript will make those commands feel at home
in three of the most widely used application runtimes. Other languages can use
the same API through standard gRPC tooling.

This makes it easier to bring SpatialAnalyzer into the rest of your software:

- Automate supported MP tasks from scripts and applications
- Use the same recognizable MP concepts across different programming languages
- Start with a first-party client in .NET, Python, or JavaScript instead of
  building directly on the raw protocol
- Give multiple applications a consistent way to work with SpatialAnalyzer
- Add SpatialAnalyzer capabilities without making every application an SA SDK
  integration project

## First-Party Clients for Popular Runtimes

Briosa is more than a server protocol. The project is building dedicated client
libraries for .NET, Python, and JavaScript so developers in those ecosystems
can install and use Briosa like a normal application dependency.

Each client will preserve the familiar MP command names and shared Briosa
behavior while presenting them in a form that suits its language:

- An idiomatic asynchronous .NET client
- An asynchronous Python client
- An idiomatic JavaScript client for Node.js applications

The clients will also provide a consistent experience for connecting to
Briosa, supplying command inputs, receiving typed results, and handling errors.
Developers will not need to assemble those pieces separately for every
application.

Because the clients share the same Briosa API, teams can choose the language
that best fits each application without creating three different
SpatialAnalyzer integrations. Languages without a dedicated Briosa client can
still use the standard gRPC contracts directly.

## The Same MP Command, Two Ways

Consider the current SpatialAnalyzer MP command `Get Working Directory`. With
the SA SDK directly, application code must structure and evaluate the complete
MP sequence. A simplified C# example, assuming the SDK is already activated and
connected correctly, looks like this:

```csharp title="Direct SA SDK"
sdk.SetStep("Get Working Directory");

if (!sdk.ExecuteStep())
{
    throw new InvalidOperationException("The SDK rejected ExecuteStep.");
}

var mpResultCode = 0;
if (!sdk.GetMPStepResult(ref mpResultCode))
{
    throw new InvalidOperationException("The MP result could not be retrieved.");
}

if (mpResultCode != 2)
{
    throw new InvalidOperationException($"The MP failed with result code {mpResultCode}.");
}

var directory = string.Empty;
if (!sdk.GetStringArg("Directory", ref directory))
{
    throw new InvalidOperationException("The Directory output could not be retrieved.");
}
```

The planned first-party clients turn that same MP command into an ordinary
asynchronous call in each language. Assuming the client has already started and
is ready, select a language to compare the intended call shape:

<Tabs groupId="briosa-client-language" queryString="client-language">
  <TabItem value="dotnet" label=".NET (C#)" default>

```csharp
string workingDirectory = await briosa.GetWorkingDirectoryAsync();
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
working_directory = await briosa.get_working_directory()
```

  </TabItem>
  <TabItem value="typescript" label="JavaScript / TypeScript">

```ts
const workingDirectory = await getWorkingDirectory(briosa);
```

  </TabItem>
</Tabs>

The command name remains recognizable, and the result is returned directly in
the form each application expects. Briosa owns the SDK sequence, checks the MP
result, retrieves the output, and translates failures into the selected
client's documented error model.

:::note[Client Libraries Are Under Development]

The Briosa calls above show the accepted direction for the first-party client
APIs. The .NET, Python, and JavaScript clients will be documented with complete
installation and usage examples as their packages become available.

:::

## If You Know MPs, You Already Know the Vocabulary

Briosa preserves SpatialAnalyzer's MP terminology wherever the target
programming language permits it. Commands remain organized around familiar SA
operation groups, and their inputs and outputs reflect the concepts shown in
the MP editor.

You do not need to learn a second Briosa-specific model for collections,
frames, units, instruments, relationships, or other SpatialAnalyzer concepts.
Briosa's role is to make those concepts easier to use from ordinary application
code.

## Why Use Briosa Instead of the SA SDK Directly?

The SA SDK remains a capable way to automate SpatialAnalyzer, especially from
.NET and Visual C++ applications designed around its OLE Automation interface.
It is less natural to consume from many other programming environments, and a
direct integration must take responsibility for the details of connecting to
and safely operating SpatialAnalyzer.

Briosa solves that integration problem once and gives each application a
simpler interface. The application chooses a programming language, uses the
matching Briosa client or a standard gRPC client, and calls the supported MP
operations it needs.

Briosa takes care of the shared responsibilities behind those calls, including:

- Connecting to a compatible SpatialAnalyzer environment
- Determining when SpatialAnalyzer is ready to accept work
- Coordinating individual MP commands so they do not overlap inside the SDK
- Reporting which MP operations are currently available
- Containing and recovering from failures at the SA SDK boundary

That shared boundary is especially valuable when several applications or teams
need to work with SpatialAnalyzer. They can build against the same operation
contracts instead of creating and maintaining separate SDK integrations.

:::important[SpatialAnalyzer Is Still Required]

Briosa does not contain or replace SpatialAnalyzer, the SA SDK, or a license.
You must install, license, and run a compatible SpatialAnalyzer release
separately.

:::

## A Deliberate, Documented Command Library

Briosa exposes reviewed MP operations rather than a generic pass-through to
every command. Each supported operation has a clear contract, tested behavior,
and user documentation, so applications do not need to interpret low-level MP
arguments and results for themselves.

The [MP Command Catalog](/mp-command-catalog) documents the
complete command catalog for each targeted SpatialAnalyzer release—not only the
commands Briosa currently supports. It shows which commands are Current, Next,
Undecided, Uncommitted, Excluded, or unavailable through the SDK, along with
the rationale and recommended alternatives where applicable.

The current baseline targets SpatialAnalyzer `2026.1.0529.7` and exposes six
read-only MP operations. See [Supported Operations](/api/grpc)
for the complete callable surface today.

## Get Started

- [Check the prerequisites](./getting-started/prerequisites)
- [Run the matching Briosa server](./getting-started/run-the-server)
- [Make the first request](./getting-started/first-request)
- [Browse the MP Command Catalog](/mp-command-catalog)

The committed API contracts and operation registry in the
[Briosa server repository](https://github.com/spatialanalyzer/briosa) define
the supported API. This site explains that behavior but does not define it.
