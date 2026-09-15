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
    {
      type: 'category',
      label: 'MP Commands',
      collapsed: true,
      items: [
        'analysis-operations', 'dimension-operations', 'event-operations',
        'file-operations', 'mp-subroutines', 'mp-task-overview',
        'process-flow-operations', 'relationship-operations', 'reporting-operations', 'scale-bar-operations',
        'utility-operations', 'variables', 'vector-operations', 'view-control',
        'cloud-and-mesh-operations',
        {
          type: 'category',
          label: 'Construction Operations',
          link: {type: 'doc', id: 'construction-operations'},
          items: [
            'construction-operations-bsplines',
            'construction-operations-callout-views-and-callouts',
            'construction-operations-circles',
            'construction-operations-collections',
            'construction-operations-cones',
            'construction-operations-cylinders',
            'construction-operations-ellipses',
            'construction-operations-ellipsoids',
            'construction-operations-folders',
            'construction-operations-frames',
            'construction-operations-lines',
            'construction-operations-other-mp-types',
            'construction-operations-perimeters',
            'construction-operations-planes',
            'construction-operations-point-clouds',
            'construction-operations-points-and-groups',
            'construction-operations-polygonized-surfaces',
            'construction-operations-scale-bars',
            'construction-operations-spheres',
            'construction-operations-surfaces',
            'construction-operations-vectors-and-vector-groups',
          ],
        },
        {
          type: 'category',
          label: 'GDT Operations',
          items: ['gdt-analysis', 'gdt-construction'],
        },
        {
          type: 'category',
          label: 'Instrument Operations',
          link: {type: 'doc', id: 'instrument-operations'},
          items: [
            'instrument-operations-advanced-instrument-operations',
            'instrument-operations-api-ladar',
            'instrument-operations-crib-sheet-operations',
            'instrument-operations-laser-projection',
            {
              type: 'category',
              label: 'Nikon Metrology Laser Radars LR',
              link: {type: 'doc', id: 'instrument-operations-nikon-metrology-laser-radars-lr'},
              items: [
                'instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations',
              ],
            },
            'instrument-operations-watch-window-operations',
          ],
        },
        'robot-calibration-appliance-node-operations',
        'robot-operations',
      ],
    },
  ],
};

export default sidebars;
