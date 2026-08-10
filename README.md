# Briosa documentation

This repository contains the public documentation site for
[Briosa](https://github.com/spatialanalyzer/briosa), an open-source gRPC bridge
around the Hexagon SpatialAnalyzer SDK.

The site is built with [Docusaurus](https://docusaurus.io/) and published to
[spatialanalyzer.github.io/briosa-docs](https://spatialanalyzer.github.io/briosa-docs/).

## Local development

Use Node.js 24:

```powershell
npm ci
npm start
```

Build the same static output used by GitHub Pages:

```powershell
npm run check
```

The site has three documentation collections:

- `docs/` contains product guidance, setup, concepts, deployment, and contributing information
- `api/grpc/` contains the versionable Briosa server and gRPC reference
- `api/dotnet/`, `api/python/`, and `api/javascript/` contain independently
  versionable client-library references
- `mp-command-catalog/` contains the complete exact-target SpatialAnalyzer MP catalog and support dispositions

Each reference collection has its own Docusaurus plugin instance and sidebar.
The `/api` route is an unversioned landing page that helps users choose the
appropriate reference.

## API reference versions

The product guide and MP command catalog are intentionally unversioned. Each
API reference follows the release history of the product it documents. Cut a
reference snapshot only when that product release is ready to publish:

```powershell
npm run docusaurus docs:version:grpc <server-version>
npm run docusaurus docs:version:dotnet <dotnet-package-version>
npm run docusaurus docs:version:python <python-package-version>
npm run docusaurus docs:version:javascript <javascript-package-version>
```

Until the first snapshot exists, each API route represents the current
development surface. Docusaurus creates and maintains independent version and
sidebar snapshots for each plugin instance.

## Documentation boundary

The [Briosa server repository](https://github.com/spatialanalyzer/briosa) is the
source of truth for protobuf contracts, supported operations, runtime behavior,
and exact SpatialAnalyzer target compatibility. This repository explains that
surface; it must not define or broaden it.

SpatialAnalyzer and the SA SDK are Hexagon products. Briosa is an independent
open-source project and is not affiliated with, endorsed by, or supported by
Hexagon. A separately installed and licensed SpatialAnalyzer environment is
required for useful MP execution.

## License

Documentation source and site code are licensed under Apache-2.0. See
[LICENSE](LICENSE).
