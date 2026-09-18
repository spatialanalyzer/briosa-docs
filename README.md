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

## Documentation Search

Global search uses the Algolia integration already supplied by the Docusaurus
classic preset. The shared header provides Search and Ctrl/Cmd+K; `/search`
provides the full result list and API version selectors when snapshots exist.
The Command Index retains its independent group, status, and validation filters.

### Public Connection Settings

Set these three **GitHub Actions repository variables** together:

| Variable | Value |
| --- | --- |
| `ALGOLIA_APP_ID` | The approved Algolia application ID |
| `ALGOLIA_SEARCH_API_KEY` | A public search-only key restricted to the documentation index |
| `ALGOLIA_INDEX_NAME` | The exact index name configured in the crawler |

Both build workflows read these public variables. They become browser-visible
site configuration; never put an admin or crawler write key in them. PR builds
remain read-only, GitHub-hosted, and secret-free. Search is omitted while all
three values are unset, and incomplete configuration fails the build. This
allows the site to build during DocSearch onboarding without publishing a
nonfunctional Search button. Updating the variables requires a new site build.

For local development, set the same environment variables before `npm start`
or `npm run check`. Environment files are not automatically loaded by this
configuration. A production preview uses `npm run build` followed by
`npm run serve`; it queries the real hosted index when connection values exist.

### DocSearch Onboarding And Activation

1. A project maintainer applies for `https://briosa.dev/` through the
   [DocSearch onboarding process](https://docsearch.algolia.com/docs/who-can-apply/).
   Complete the provider's account, terms, eligibility, and domain-ownership
   verification steps. Algolia currently requires ownership verification within
   seven days of approval.
2. Create the documentation index and hosted crawler. Use
   [`search/algolia-crawler.cjs`](search/algolia-crawler.cjs) in the crawler editor,
   replacing `YOUR_APP_ID`, `YOUR_CRAWLER_API_KEY`, and **both** occurrences of
   `YOUR_INDEX_NAME` there. Keep the crawler key in Algolia; do not commit it.
   Preserve the existing crawler schedule and safety checks. Keep `new Crawler`
   at the beginning of the configuration and avoid optional chaining in the
   extractor: the hosted editor uses an older JavaScript parser.
3. Run a crawl and inspect sample records. The site's sitemap supplies routes;
   only public `briosa.dev` HTML is indexed. Use the crawler's schedule and
   trigger a recrawl after significant documentation changes.
4. Configure the index-restricted public search-only key and set the three
   repository variables. Rebuild and deploy through the normal Pages workflow.
5. Verify real queries and keyboard navigation on the deployed site before
   closing [issue #46](https://github.com/spatialanalyzer/briosa-docs/issues/46).

`initialIndexSettings` only initializes a new index. When changing settings for
an existing index, apply the corresponding settings in Algolia as well as the
crawler change, then recrawl. Do not assume editing the template updates an
existing index's settings.

### Indexing Rules

The crawler uses the standard Docusaurus DocSearch helper for guides, API
references, and landing pages. It keeps `language`, `version`, and
`docusaurus_tag` metadata. Docusaurus contextual search searches all documentation
instances, using the active version for the current reference and the preferred
or latest version for each other reference.

Canonical catalog sections produce one DocSearch record per existing command
anchor. The exact MP label is retained; breadcrumbs include the reviewed status,
SA target, and MP group. Nested command headings are supported. Older canonical
pages provide the target in their introduction and the reviewed group in their
summary table. Those values supply context only; table rows and exact-target
navigation pages never become additional command results. Missing or ambiguous
command context fails extraction instead of inventing a support claim.

The extractor removes duplicate command tables, filters, navigation, and page
chrome. It excludes exact-target indexes, the aggregate Command Index, query
URLs, redirects, and noindex pages. Matching tokens derived from labels allow
`GetWorkingDirectory` and `get_working_directory` to find `Get Working Directory`.
They do not merge lineages or create API identifiers. The hosted index is a
disposable search artifact, not a maintained catalog schema or protocol source.

`npm run check:search` checks the crawler against the built HTML, including
canonical-anchor coverage, duplicate results, status/target context, record size,
exclusions, and selectors across all documentation instances. It runs within
`npm run check` and both CI build jobs. It does not call Algolia and cannot
establish hosted ranking, typo tolerance, crawler scheduling, or service availability.

### Live Verification

- Search for `install`, `readiness`, `GetWorkingDirectory`,
  `Get Working Directory`, `get_working_directory`, `Get i-th Collection Name`,
  and a punctuation-heavy label such as `Get GD&T Options`.
- Verify all four API references and guides appear, and that command results
  open canonical anchors with accurate status and target context.
- Check the desktop and mobile Search controls, Ctrl/Cmd+K, arrows, Enter,
  Escape, focus return, empty results, and the Command Index recovery link.
- Check light and dark modes, zoom, and reduced-motion behavior. Inspect query
  errors and verify that old or excluded navigation pages do not reappear.

To disable global search, clear all three public variables and rebuild; the
normal site navigation and catalog filters remain available.

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

The gRPC reference currently serves the Server 0.5.1 snapshot by default.
Its working source is not published. Client references serve the 0.1.0
snapshots for the SA 2026 API, with explicit links to the SA 2024 differences. Docusaurus maintains independent
version and sidebar snapshots for each plugin instance. The site itself does
not take a shared product version.

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
