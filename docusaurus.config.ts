import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

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
          to: '/docs/operations/overview',
          label: 'Operations',
          position: 'left',
        },
        {
          to: '/docs/mp-command-catalog/overview',
          label: 'MP catalog',
          position: 'left',
        },
        {
          href: 'https://github.com/spatialanalyzer/briosa',
          label: 'Server',
          position: 'right',
        },
        {
          href: 'https://github.com/spatialanalyzer/briosa-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Get started', to: '/docs/getting-started/prerequisites'},
            {label: 'Operations', to: '/docs/operations/overview'},
            {label: 'MP command catalog', to: '/docs/mp-command-catalog/overview'},
            {label: 'Runtime model', to: '/docs/concepts/readiness'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Briosa server', href: 'https://github.com/spatialanalyzer/briosa'},
            {label: 'Roadmap', href: 'https://github.com/orgs/spatialanalyzer/projects/1'},
            {label: 'Governance', href: 'https://github.com/spatialanalyzer/governance'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Discussions', href: 'https://github.com/orgs/spatialanalyzer/discussions'},
            {label: 'Report a docs issue', href: 'https://github.com/spatialanalyzer/briosa-docs/issues/new'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Briosa contributors. Apache-2.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
