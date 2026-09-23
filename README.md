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

The site has these documentation collections:

- `docs/` contains product guidance, setup, concepts, deployment, and contributing information
- `api/grpc/` contains the versionable Briosa server and gRPC reference
- `api/dotnet/`, `api/python/`, and `api/javascript/` contain independently
  versionable client-library references
- `mp-command-catalog/` contains the complete exact-target SpatialAnalyzer MP catalog and support dispositions

Product guidance and the MP catalog use the native Docusaurus docs plugin.
The four API families share `plugins/api-reference`, which splits committed
release snapshots into static method pages and retains each target's saved MP
group hierarchy. The `/api` route helps users choose a reference family.

## Documentation Search

Global search uses the Algolia integration already supplied by the Docusaurus
classic preset. The shared header provides Search and Ctrl/Cmd+K; `/search`
provides the full result list across versions. The API context bar links to
Search All Versions; the header search prefers the active API context while
keeping other versions and general documentation discoverable.
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

The crawler uses the standard Docusaurus DocSearch helper for product guides
and landing pages. Static API pages produce method and section records with
explicit `api_family`, `api_release`, `sa_target`, and `command_id` metadata,
alongside `language`, `version`, and `docusaurus_tag`. Result URLs pin both
release and SA target. API group indexes, history entry points, unavailable
views, and legacy aliases do not create competing search records. Historical
contracts remain searchable even when a newer target has no released API.

When deploying the API redesign, update the hosted extractor and add
`api_family`, `api_release`, and `sa_target` to the existing index's
`attributesForFaceting`. Then run a full recrawl and verify a target-only method
such as Run Crib Sheet, both Angle Between Line and Plane contracts, and
Direct CAD Access's different defaults. Local tests do not apply these hosted
changes. The sitemap already supplies the canonical routes; JavaScript
rendering is not required to extract their contracts.

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

Current defaults are Server **0.7.0** and clients **0.2.0**. Working `api/`
content is not published until snapshotted. The custom API plugin delegates
these commands to Docusaurus's snapshot implementation and records the
snapshot's default SA target in `plugins/api-reference/targets.json`.
Set `workingDefault` there before cutting a release for a new target; never
relabel an existing snapshot. Other exact targets remain in `sa-<target>/`
source folders. This file describes publication layout, not protocol support.

### API Routes And Authoring

An exact reference has a permanent address such as
`/api/grpc/0.7.0/sa-2024.1.0508.5/analysis-operations/angle-between-line-and-plane#request-parameters`.
Release and target are independent. Every exact view contains its contract,
metadata, and canonical link in static HTML. Short method URLs retain a
cross-version history and resolve a remembered target when one exists. Old
group URLs and command fragments retain HTML fallback links and migrate in
the browser. Unknown fragments display a recovery message.

The SA selector stores the explicit preference locally; following an exact
URL sets the current browsing context without overriding that saved default.
Both take precedence over the default target for a short entry URL. Storage
failure does not prevent exact-URL navigation. Copy Link pins the current
release, target, and section. Version Differences provides ordinary links
that work without JavaScript.

Keep authoring contracts in the existing grouped Markdown snapshots and
working sources. The renderer creates individual pages at build time, batches
their data by group, and shares the layout across all four families. It
preserves signatures, defaults, qualifications, shared types, and examples.
Existing canonical catalog links supply reviewed command anchors where
present; old heading anchors remain migration aliases. Do not merge renamed
or superseded identities or change a published command slug without reviewed
lineage evidence and retained aliases. The catalog itself is unchanged.
Older JavaScript aggregate `Functions` sections lack per-method lineage links;
their individual references retain a `functions/<function-name>` identity.
They are not automatically merged into newer catalog-linked commands merely
because a spelling resembles a newer function.

Explicit "No released signature is available" placeholders and methods absent
from a target render unavailable views with links to other references. They
are excluded from search and the sitemap; their historical contracts remain
indexable. Absence from a Briosa API snapshot never establishes that SA
removed a command. Document an SA removal only with reviewed evidence.

`tests/api-reference.test.cjs` checks every migrated contract and shared code
block, stable anchors, target-only methods, first-call walkthroughs, and legacy
links. Release, search, and SEO checks verify the built routes and metadata.
Browser checks must also exercise target persistence, shared links, release
switching, Back/Forward, mobile navigation, and keyboard access.

## Release Checklist

1. Verify published GitHub releases and package registries for both exact targets.
2. Compare tagged protobuf, runtime registration, capability policy, and handwritten client APIs; reconcile target-specific signatures, defaults, and values.
3. Update guides and every catalog representation without promoting validation claims.
4. Cut each product snapshot with its Docusaurus version command; update defaults and preserve historical API links.
5. Run Node.js 24 `npm ci` and `npm run check`; verify the search-enabled build, current/historical routes, target navigation, and representative released-package examples.
6. After merge and deployment, verify live routes and refresh the Algolia crawler/index. Local checks do not refresh deployed search.


## Search Engine Discovery

`static/robots.txt` allows crawling and advertises the generated sitemap.
Submit `https://briosa.dev/sitemap.xml` in the Google Search Console domain
property after the first deployment and verify that its status is successful.
Use URL Inspection for the homepage, introduction, installation guide, first
request, API overview, and MP catalog. Request indexing for new or changed
entry pages after verifying that the live URL can be indexed. A submission
does not guarantee indexing or ranking; allow time for Google to process it.

The docs metadata theme adds API language context to search titles while
preserving MP headings, sidebar labels, and stable anchors. The breadcrumb
wrapper normalizes overview URLs to the site's slash policy. The internal
search page stays crawlable so Google can read its `noindex` directive, and it
is excluded from the sitemap. Algolia's crawler configuration controls only
on-site search and does not control Google indexing.

`npm run check:seo` checks the built HTML, canonical and breadcrumb URLs,
unique titles, site identity, social image, and search indexing policy. Run
`npm run check` with all three public `ALGOLIA_*` variables to validate the
search-enabled production site. The CI and deployment workflows run these
checks using repository variables, without secrets.

Review Search Console coverage and branded and SpatialAnalyzer-related
impressions after changes have been processed. Keep exact-target catalog
indexes and canonical command sections intact; do not replace useful
version-specific content with blanket redirects or canonical links.

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
