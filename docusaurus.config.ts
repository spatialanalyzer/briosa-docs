import {lightCodeTheme, darkCodeTheme} from './src/theme/prism';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as DocsPluginOptions} from '@docusaurus/plugin-content-docs';
import type {Options as RedirectsPluginOptions} from '@docusaurus/plugin-client-redirects';


// These are public browser connection settings, never an administration key.
const algolia = {
  appId: process.env.ALGOLIA_APP_ID?.trim(),
  apiKey: process.env.ALGOLIA_SEARCH_API_KEY?.trim(),
  indexName: process.env.ALGOLIA_INDEX_NAME?.trim(),
};
const searchEnabled = Object.values(algolia).every(Boolean);
if (Object.values(algolia).some(Boolean) && !searchEnabled) {
  throw new Error(
    'Set ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY, and ALGOLIA_INDEX_NAME together.',
  );
}

const config: Config = {
  title: 'Briosa',
  tagline: 'SpatialAnalyzer integration, simplified.',
  favicon: 'brand/icons/favicon.svg',
  future: {v4: true},
  url: 'https://briosa.dev',
  baseUrl: '/',
  organizationName: 'spatialanalyzer',
  projectName: 'briosa-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/spatialanalyzer/briosa-docs/edit/main/',
        },
        blog: false,
        sitemap: {
          ignorePatterns: ['/search', '/search/'],
          async createSitemapItems({defaultCreateSitemapItems, ...params}) {
            const items = await defaultCreateSitemapItems(params);
            const api = params.routes.filter((route) => route.path.startsWith('/api/'));
            const excluded = new Set(api.filter((route) => (route.customData as {apiNoIndex?: boolean} | undefined)?.apiNoIndex).map((route) => 'https://briosa.dev' + route.path));
            return items.filter((item) => !excluded.has(item.url));
          },
        },
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    './plugins/api-reference/index.cjs',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'catalog',
        path: 'mp-command-catalog',
        routeBasePath: 'mp-command-catalog',
        sidebarPath: './sidebarsCatalog.ts',
        editUrl: 'https://github.com/spatialanalyzer/briosa-docs/edit/main/',
      } satisfies DocsPluginOptions,
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: '/docs/operations/overview', to: '/api/grpc'},
          {from: '/docs/operations/get-working-directory', to: '/api/grpc/get-working-directory'},
          {from: '/docs/operations/get-number-of-collections', to: '/api/grpc/get-number-of-collections'},
          {from: '/docs/operations/get-i-th-collection-name', to: '/api/grpc/get-ith-collection-name'},
          {from: '/api/get-working-directory', to: '/api/grpc/get-working-directory'},
          {from: '/api/get-number-of-collections', to: '/api/grpc/get-number-of-collections'},
          {from: '/api/get-i-th-collection-name', to: '/api/grpc/get-ith-collection-name'},
          {from: '/api/grpc/get-i-th-collection-name', to: '/api/grpc/get-ith-collection-name'},
          {from: '/docs/mp-command-catalog/overview', to: '/mp-command-catalog'},
          {
            from: '/docs/mp-command-catalog/2026.1.0529.7/overview',
            to: '/mp-command-catalog/2026.1.0529.7/overview',
          },
          {
            from: '/docs/mp-command-catalog/2026.1.0529.7/group-hierarchy',
            to: '/mp-command-catalog/2026.1.0529.7/group-hierarchy',
          },
          {
            from: '/docs/mp-command-catalog/2026.1.0529.7/file-operations',
            to: '/mp-command-catalog/2026.1.0529.7/file-operations',
          },
        ],
      } satisfies RedirectsPluginOptions,
    ],
  ],
  themeConfig: {
    image: 'img/briosa-social.png',
    ...(searchEnabled && {
      algolia: {
        appId: algolia.appId!,
        apiKey: algolia.apiKey!,
        indexName: algolia.indexName!,
        contextualSearch: false,
        searchPagePath: 'search',
        placeholder: 'Search All Documentation',
        insights: false,
      },
    }),
    metadata: [
      {property: 'og:site_name', content: 'Briosa'},
      {property: 'og:image:alt', content: 'Briosa — SpatialAnalyzer integration, simplified.'},
      {name: 'twitter:image:alt', content: 'Briosa — SpatialAnalyzer integration, simplified.'},
      {name: 'algolia-site-verification', content: 'ECFE6AF781A92A7F'},
      {
        name: 'description',
        content:
          'Documentation for Briosa, the open-source gRPC bridge for Hexagon SpatialAnalyzer.',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Briosa home',
        src: 'brand/suite/briosa-docs-color.svg',
        srcDark: 'brand/suite/briosa-docs-inverse.svg',
        width: 180,
        height: 58,
      },
      items: [
        {to: '/install', label: 'Install', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'API Reference',
          to: '/api',
          items: [
            {to: '/api/grpc', label: 'gRPC API'},
            {to: '/api/dotnet', label: '.NET API'},
            {to: '/api/python', label: 'Python API'},
            {to: '/api/javascript', label: 'JavaScript and TypeScript API'},
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'catalogSidebar',
          docsPluginId: 'catalog',
          position: 'left',
          label: 'MP Catalog',
        },
        ...(searchEnabled ? [{type: 'search', position: 'right' as const}] : []),
        {
          href: 'https://discord.gg/kd2N3BmDNv',
          position: 'right',
          className: 'header-discord-link',
          'aria-label': 'Open SA Discord',
          title: 'Open SA Discord',
        },
        {
          href: 'https://github.com/spatialanalyzer/briosa',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'Briosa on GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Briosa home',
        src: 'brand/logos/briosa-horizontal-inverse.svg',
        href: '/',
        width: 180,
        height: 51,
      },
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Install Briosa', to: '/install'},
            {label: 'Get Started', to: '/docs/getting-started/prerequisites'},
            {label: 'API Reference', to: '/api'},
            {label: 'MP Command Catalog', to: '/mp-command-catalog'},
            {label: 'Runtime Model', to: '/docs/concepts/readiness'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Roadmap', href: 'https://github.com/orgs/spatialanalyzer/projects/1'},
            {label: 'Governance', href: 'https://github.com/spatialanalyzer/governance'},
          ],
        },
        {
          title: 'Repositories',
          items: [
            {label: 'Briosa Installer', href: 'https://github.com/spatialanalyzer/briosa-installer'},
            {label: 'Briosa Server', href: 'https://github.com/spatialanalyzer/briosa'},
            {label: '.NET Client', href: 'https://github.com/spatialanalyzer/briosa-dotnet'},
            {label: 'Python Client', href: 'https://github.com/spatialanalyzer/briosa-py'},
            {label: 'JavaScript Client', href: 'https://github.com/spatialanalyzer/briosa-js'},
            {label: 'Documentation', href: 'https://github.com/spatialanalyzer/briosa-docs'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Open SA Discord', href: 'https://discord.gg/kd2N3BmDNv'},
            {label: 'Discussions', href: 'https://github.com/orgs/spatialanalyzer/discussions'},
            {label: 'Report a Docs Issue', href: 'https://github.com/spatialanalyzer/briosa-docs/issues/new'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Briosa contributors. Apache-2.0.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['csharp', 'protobuf', 'python', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
