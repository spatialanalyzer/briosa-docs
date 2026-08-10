import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  grpcSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Supported Operations',
      items: [
        'get-working-directory',
        'get-number-of-collections',
        'get-ith-collection-name',
      ],
    },
  ],
};

export default sidebars;
