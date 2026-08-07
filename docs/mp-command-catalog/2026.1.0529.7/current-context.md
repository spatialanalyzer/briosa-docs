---
title: Current application context
description: Supported SA 2026.1.0529.7 MP commands for reading the current working context.
---

# Current application context

These four read-only commands inspect the current SpatialAnalyzer application
context for exact target `2026.1.0529.7`. They do not establish workflow
isolation: another user or automation client can still change application-global
state between separate calls.

| MP command | Briosa RPC | Result | Status |
| --- | --- | --- | --- |
| [Get Working Directory](#get-working-directory) | `FileOperations/GetWorkingDirectory` | working directory | **Supported** |
| [Get Active Collection Name](#get-active-collection-name) | `ConstructionOperations/GetActiveCollectionName` | active collection name | **Supported** |
| [Get Active Units](#get-active-units) | `UtilityOperations/GetActiveUnits` | length, angular, and temperature units | **Supported** |
| [Get Working Frame Properties](#get-working-frame-properties) | `UtilityOperations/GetWorkingFrameProperties` | frame name, collection name, and working frame | **Supported** |

All four use global-state read scope and are safe to replay. Runtime policy can
still deny them.

## Get Working Directory

- **Status:** Supported
- **Operation ID:** `file_operations.get_working_directory`

`Get Working Directory` has no MP inputs and returns the `Directory` string.
Briosa exposes it as `briosa.FileOperations/GetWorkingDirectory`.

See the [operation guide](../../operations/get-working-directory.md) for a
request example and result-handling details. The
[authoritative protobuf](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/proto/briosa/file_operations.proto)
lives in the server repository.

## Get Active Collection Name

- **Status:** Supported
- **Operation ID:** `construction_operations.get_active_collection_name`

`Get Active Collection Name` has no MP inputs and returns the optional
`Currently Active Collection Name` string through
`briosa.ConstructionOperations/GetActiveCollectionName`.

The exact-target SDK evidence uses the string getter for this result. Briosa
does not import the different collection-name getter used by older secondary
evidence.

## Get Active Units

- **Status:** Supported
- **Operation ID:** `utility_operations.get_active_units`

`Get Active Units` has no MP inputs. The
`briosa.UtilityOperations/GetActiveUnits` result preserves the three optional
MP strings in SDK order: `Length`, `Angular`, and `Temperature`.

## Get Working Frame Properties

- **Status:** Supported
- **Operation ID:** `utility_operations.get_working_frame_properties`

`Get Working Frame Properties` has no MP inputs. The
`briosa.UtilityOperations/GetWorkingFrameProperties` result contains the
optional `Frame Name` and `Collection Name` strings followed by the typed
`Working Frame` value.

Live exact-target validation returned non-empty collection and object names for
the working frame without the normally embedded type literal. This operation
may supply the `Frame` type only in that specific omitted-literal case. An
embedded type still wins, and an unknown embedded type still fails closed.

The authoritative server documentation records the complete
[active-context SDK sequences and validation](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/operations/active-context.md).

:::caution[Returned values are application data]

Briosa returns context values to the caller but does not log them by default.
Do not include working directories, collection names, unit strings, frame
names, or structured object names in public validation evidence.

:::
