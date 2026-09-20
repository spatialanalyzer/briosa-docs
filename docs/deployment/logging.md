---
title: Server Logging and Telemetry
description: Find Briosa logs, configure bounded retention, and enable optional metrics and tracing.
---

# Server Logging and Telemetry

Briosa writes structured JSON Lines (JSONL) logs for lifecycle transitions,
operations, failures, and timing. Hidden client-launched servers write the same
files as direct launches.

:::note Availability
These controls are included in Server **0.7.0** and first-party clients **0.2.0** for both exact targets.
They do not add a logging RPC or change SpatialAnalyzer's **Set Logging State** MP.
:::

## Find the Logs

The default directory includes the exact target:

```text
%LOCALAPPDATA%\Briosa\logs\2024.1.0508.5\
%LOCALAPPDATA%\Briosa\logs\2026.1.0529.7\
```

Each filename includes a random server-instance ID. Records include a UTC
timestamp, stable event name and ID, category, exact target, and applicable
operation, correlation, worker-generation, outcome, and timing metadata.

Logs are best-effort diagnostics. A full queue, failed disk, exhausted quota,
crash, or forced server termination can lose records. They are not a durable
audit ledger.

## Startup Controls

| Setting | Default |
| --- | --- |
| Minimum Severity | Information |
| Microsoft and gRPC Categories | Warning |
| Console / JSONL Files | Both Enabled |
| Maximum File Size | 20 MiB |
| Retained File Count | 10 |
| Maximum Age | 7 Days |
| Total Directory Budget | 200 MiB |
| File Queue Capacity | 4096 Records |
| Shutdown Drain Budget | 2 Seconds |

The server captures settings at startup. Use standard .NET configuration through
appsettings, environment variables, or command-line arguments. For example:

```powershell
.\Briosa.Server.exe --Logging:LogLevel:Briosa.Server=Debug --Briosa:Logging:ConsoleEnabled=false
```

First-party clients expose typed startup options:

- [.NET StartAsync](/api/dotnet/start#server-logging)
- [JavaScript/TypeScript start](/api/javascript/start#server-logging)
- [Python start](/api/python/start#server-logging)

Omitted client fields preserve the server configuration. Custom directories
must be absolute Windows paths. Invalid settings fail startup; a later sink
failure does not replace an operation result.

## Retention and Overload

File formatting, rotation, pruning, and writes run on a background consumer.
The bounded queue drops records instead of waiting for a slow sink.
Low-severity records stop entering the file queue at seven-eighths capacity,
leaving space for warnings and errors. Those records can also be lost if the
queue fills.

Age, count, and byte limits apply to closed Briosa logs across server instances
sharing a directory. A writer may close and reclaim its own file; it leaves
other instances' active files and unrelated files alone. Expired idle files are
pruned on the next write. Use the same retention policy for instances sharing a
directory, or give independent policies separate directories.

## Interpret Execution Records

An RPC response and the eventual SDK outcome are separate observations. After
client cancellation, `RpcFailed` can report an unknown execution outcome while a
later `ExecutionResolved` records a retrieved MP result. Correlate by
`CorrelationId`, `ServerInstanceId`, and `Generation`.

MP result code `2` indicates success only when result retrieval succeeded.
Output retrieval remains a separate outcome. Later log evidence does not change
the original response or authorize automatic replay.

Debug and Trace add metadata detail. They never enable request/response
payloads, geometry, returned values, paths, credentials, raw SDK exception text,
or ambient scopes. Follow [safe reporting guidance](./diagnostics.md) before
sharing diagnostics.

## Optional Metrics and Tracing

The server publishes a `Briosa.Server` Meter and ActivitySource. Metrics cover
RPC and SDK timing, admission and queue delays, worker exchange, queue depth,
readiness, identity, watchdogs, replacements, and logging failures or drops.
Metric callbacks read cached state and never call the SDK.

Export is disabled by default. Operators can enable bounded, sampled OTLP/gRPC
trace export and periodic metric export to their collector:

```json
{
  "Briosa": {
    "Telemetry": {
      "Enabled": true,
      "Endpoint": "http://localhost:4317",
      "SampleRatio": 0.1
    }
  }
}
```

The collector is optional. File logs remain local. Briosa exports only its
reviewed manual telemetry, without environment, host, or process metadata.
Collector failure does not change command results.

For complete configuration keys, event IDs, metric names, limits, and measured
performance evidence, see the
[server observability reference](https://github.com/spatialanalyzer/briosa/blob/b2e5bda/targets/2026.1.0529.7/docs/operations/server-observability.md).
