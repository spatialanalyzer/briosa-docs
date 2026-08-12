import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  grpcSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Lifecycle',
      items: [
        'lifecycle',
        {
          type: 'category',
          label: 'SpatialAnalyzer Application',
          items: [
            'get-spatial-analyzer-state',
            'launch-spatial-analyzer',
            'close-owned-spatial-analyzer',
          ],
        },
        {
          type: 'category',
          label: 'SpatialAnalyzer SDK',
          items: [
            'get-spatial-analyzer-sdk-state',
            'start-spatial-analyzer-sdk',
            'connect-to-spatial-analyzer',
            'reconnect-to-spatial-analyzer',
            'stop-spatial-analyzer-sdk',
            'recover-spatial-analyzer-sdk',
          ],
        },
      ],
    },
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
