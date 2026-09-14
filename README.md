# Briosa documentation

This repository contains the public documentation site for
[Briosa](https://github.com/spatialanalyzer/briosa), an open-source gRPC bridge
around the Hexagon SpatialAnalyzer SDK.

The site is built with [Docusaurus](https://docusaurus.io/) and published to
[briosa.dev](https://briosa.dev/).

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

## Custom Domain and Deployment

The canonical site URL is `https://briosa.dev/`. Docusaurus uses
`url: 'https://briosa.dev'` and `baseUrl: '/'` so routes, assets, canonical links,
Open Graph URLs, and the generated sitemap use the domain root.
`static/robots.txt` advertises `https://briosa.dev/sitemap.xml`.

The domain is registered through Porkbun, DNS is managed through Cloudflare,
and GitHub Pages hosts the site. The repository's Pages settings hold the
`briosa.dev` custom domain with HTTPS enforcement enabled. The
[`deploy-pages.yml`](.github/workflows/deploy-pages.yml) workflow publishes
`build/` when changes reach `main`. This uses a custom GitHub Actions workflow;
[GitHub does not require or use a `CNAME` file for this publishing method](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

On September 14, 2026, HTTPS checks confirmed that GitHub Pages returns a `301`
from `https://spatialanalyzer.github.io/briosa-docs/` to `https://briosa.dev/`,
and from the old `/briosa-docs/docs/getting-started/prerequisites` URL to
`https://briosa.dev/docs/getting-started/prerequisites`. `https://www.briosa.dev/`
also returns a `301` to the apex domain. These redirects are supplied by
GitHub Pages. Recheck them after changes to DNS or Pages settings; Docusaurus
does not control redirects on the old hostname.

After deployment, verify the homepage, a documentation article, API reference,
and MP catalog, including their assets and canonical URLs. Check
`/sitemap.xml`, `/robots.txt`, and the old-host redirects as well.

### Rollback

To restore `https://spatialanalyzer.github.io/briosa-docs/`, revert the custom
domain change through a pull request. Restore `url` to
`https://spatialanalyzer.github.io`, `baseUrl` and the footer home link to
`/briosa-docs/`, and update or remove the custom-domain robots file. Run
`npm ci` and `npm run check` with Node.js 24, then coordinate deployment with
removing the custom domain in the repository's Pages settings. Verify the
restored project URL and its assets. Retain domain ownership and GitHub
organization verification; review the Cloudflare records that point at Pages.

Domain ownership, renewal, recovery, and monitoring work is tracked separately
in [issue #9](https://github.com/spatialanalyzer/briosa-docs/issues/9).

## Site Branding

The site uses the approved
[`briosa-brand@v1`](https://github.com/spatialanalyzer/briosa-brand/tree/v1)
identity. Committed artwork, the original Inter font, licenses, and provenance
live in [`static/brand/`](static/brand/README.md).

`src/css/custom.css` maps the shared palette to the documentation theme:
deep blue links and headings, graphite text, white and silver surfaces, and
cyan accents. Dark mode uses the darker navy page and section surfaces with
light text and cyan links, including the hero, navbar, mobile menu, and footer.
Status colors retain their distinct meanings. The navbar and API cards select
the supplied color or inverse artwork for the active theme; the hero and footer
use inverse artwork on deep blue in light mode and darker navy in dark mode.
Keep cyan off white for ordinary text.
`src/theme/prism.ts` provides matching syntax colors with readable contrast.

Use restrained borders, generous spacing, visible keyboard focus, and no
required animation. Verify the homepage, an article, API reference, and catalog
in both themes and at mobile widths when changing shared styles.

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
