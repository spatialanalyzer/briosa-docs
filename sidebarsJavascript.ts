import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  javascriptSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Lifecycle',
      items: [
        'lifecycle',
        'start',
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
        'stop',
        'async-dispose',
      ],
    },
    {
      type: 'category',
      label: 'File Operations',
      items: ['get-working-directory'],
    },
  ],
};

export default sidebars;
