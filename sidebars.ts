import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Get started',
      items: [
        'getting-started/prerequisites',
        'getting-started/run-the-server',
        'getting-started/first-request',
      ],
    },
    {
      type: 'category',
      label: 'Core concepts',
      items: [
        'concepts/exact-targets',
        'concepts/readiness',
        'concepts/execution-outcomes',
        'concepts/single-tenant-model',
      ],
    },
    {
      type: 'category',
      label: 'MP command catalog',
      items: [
        'mp-command-catalog/overview',
        {
          type: 'category',
          label: 'SA 2026.1.0529.7',
          link: {
            type: 'doc',
            id: 'mp-command-catalog/2026.1.0529.7/overview',
          },
          items: [
            'mp-command-catalog/2026.1.0529.7/group-hierarchy',
            'mp-command-catalog/2026.1.0529.7/analysis-operations',
            {
              type: 'category',
              label: 'Construction Operations',
              items: [
                'mp-command-catalog/2026.1.0529.7/construction-operations/collections',
              ],
            },
            'mp-command-catalog/2026.1.0529.7/file-operations',
            {
              type: 'category',
              label: 'Utility Operations',
              link: {
                type: 'doc',
                id: 'mp-command-catalog/2026.1.0529.7/utility-operations',
              },
              items: [
                'mp-command-catalog/2026.1.0529.7/utility-operations/units',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/overview',
        'operations/get-working-directory',
        'operations/get-number-of-collections',
        'operations/get-i-th-collection-name',
      ],
    },
    {
      type: 'category',
      label: 'Operate Briosa',
      items: [
        'deployment/windows',
        'deployment/health-and-discovery',
        'deployment/diagnostics',
      ],
    },
    {
      type: 'category',
      label: 'Contribute',
      items: [
        'contributing/documentation',
        'contributing/mp-command-catalog',
      ],
    },
  ],
};

export default sidebars;
