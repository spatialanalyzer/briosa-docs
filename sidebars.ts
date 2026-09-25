import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'releases',
    'mp-argument-name-migration',
    'runtime-redesign-migration',
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'getting-started/prerequisites',
        {type: 'link', label: 'Install Briosa', href: '/install'},
        'getting-started/run-the-server',
        'getting-started/first-request',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'concepts/exact-targets',
        'concepts/client-lifecycle',
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
        'deployment/protocol-artifacts',
        'deployment/installation-selection',
        'deployment/control-center',
        'deployment/health-and-discovery',
        'deployment/logging',
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
