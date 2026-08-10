import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'getting-started/prerequisites',
        'getting-started/run-the-server',
        'getting-started/first-request',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'concepts/exact-targets',
        'concepts/readiness',
        'concepts/execution-outcomes',
        'concepts/single-tenant-model',
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
