import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as DocsPluginOptions} from '@docusaurus/plugin-content-docs';
import type {Options as RedirectsPluginOptions} from '@docusaurus/plugin-client-redirects';

const config: Config = {
  title: 'Briosa',
  tagline: 'Language-neutral access to SpatialAnalyzer MPs',
  favicon: 'img/briosa-mark.svg',
  future: {v4: true},
  url: 'https://spatialanalyzer.github.io',
  baseUrl: '/briosa-docs/',
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
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'grpc',
        path: 'api/grpc',
        routeBasePath: 'api/grpc',
        sidebarPath: './sidebarsGrpc.ts',
        editUrl: 'https://github.com/spatialanalyzer/briosa-docs/edit/main/',
      } satisfies DocsPluginOptions,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dotnet',
        path: 'api/dotnet',
        routeBasePath: 'api/dotnet',
        sidebarPath: './sidebarsDotnet.ts',
        editUrl: 'https://github.com/spatialanalyzer/briosa-docs/edit/main/',
      } satisfies DocsPluginOptions,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'python',
        path: 'api/python',
        routeBasePath: 'api/python',
        sidebarPath: './sidebarsPython.ts',
        editUrl: 'https://github.com/spatialanalyzer/briosa-docs/edit/main/',
      } satisfies DocsPluginOptions,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'javascript',
        path: 'api/javascript',
        routeBasePath: 'api/javascript',
        sidebarPath: './sidebarsJavascript.ts',
        editUrl: 'https://github.com/spatialanalyzer/briosa-docs/edit/main/',
      } satisfies DocsPluginOptions,
    ],
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
    metadata: [
      {
        name: 'description',
        content:
          'Documentation for Briosa, the open-source gRPC bridge for Hexagon SpatialAnalyzer.',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Briosa',
      logo: {
        alt: 'Briosa geometric bridge mark',
        src: 'img/briosa-mark.svg',
      },
      items: [
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
            {
              type: 'docSidebar',
              sidebarId: 'grpcSidebar',
              docsPluginId: 'grpc',
              label: 'gRPC API',
            },
            {
              type: 'docSidebar',
              sidebarId: 'dotnetSidebar',
              docsPluginId: 'dotnet',
              label: '.NET API',
            },
            {
              type: 'docSidebar',
              sidebarId: 'pythonSidebar',
              docsPluginId: 'python',
              label: 'Python API',
            },
            {
              type: 'docSidebar',
              sidebarId: 'javascriptSidebar',
              docsPluginId: 'javascript',
              label: 'JavaScript and TypeScript API',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'catalogSidebar',
          docsPluginId: 'catalog',
          position: 'left',
          label: 'MP Catalog',
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
      links: [
        {
          title: 'Learn',
          items: [
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
            {label: 'Discussions', href: 'https://github.com/orgs/spatialanalyzer/discussions'},
            {label: 'Report a Docs Issue', href: 'https://github.com/spatialanalyzer/briosa-docs/issues/new'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Briosa contributors. Apache-2.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'python', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
