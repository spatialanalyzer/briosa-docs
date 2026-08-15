import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  pythonSidebar: [
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
        'asynchronous-context-management',
      ],
    },
    {
      type: 'category',
      label: 'File Operations',
      items: ['get-working-directory'],
    },
    {
      type: 'category',
      label: 'Wave A MP Commands (Next)',
      collapsed: true,
      items: [
        'analysis-operations', 'dimension-operations', 'event-operations',
        'file-operations', 'mp-subroutines', 'mp-task-overview',
        'process-flow-operations', 'relationship-operations', 'reporting-operations', 'scale-bar-operations',
        'utility-operations', 'variables', 'vector-operations', 'view-control',
      ],
    },
  ],
};

export default sidebars;
