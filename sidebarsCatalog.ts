import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  catalogSidebar: [
    'overview',
    'commands/index',
    {
      type: 'category',
      label: 'SA 2026.1.0529.7',
      link: {
        type: 'doc',
        id: '2026.1.0529.7/overview',
      },
      items: [
        '2026.1.0529.7/group-hierarchy',
        '2026.1.0529.7/accumulator-math-operations',
        '2026.1.0529.7/analysis-operations',
        '2026.1.0529.7/cloud-and-mesh-operations',
        {
          type: 'category',
          label: 'Construction Operations',
          link: {
            type: 'doc',
            id: '2026.1.0529.7/construction-operations',
          },
          items: [
            '2026.1.0529.7/construction-operations-bsplines',
            '2026.1.0529.7/construction-operations-callout-views-and-callouts',
            '2026.1.0529.7/construction-operations-circles',
            '2026.1.0529.7/construction-operations-collections',
            '2026.1.0529.7/construction-operations-cones',
            '2026.1.0529.7/construction-operations-cylinders',
            '2026.1.0529.7/construction-operations-ellipses',
            '2026.1.0529.7/construction-operations-ellipsoids',
            '2026.1.0529.7/construction-operations-folders',
            '2026.1.0529.7/construction-operations-frames',
            '2026.1.0529.7/construction-operations-lines',
            '2026.1.0529.7/construction-operations-other-mp-types',
            '2026.1.0529.7/construction-operations-perimeters',
            '2026.1.0529.7/construction-operations-planes',
            '2026.1.0529.7/construction-operations-point-clouds',
            '2026.1.0529.7/construction-operations-points-and-groups',
            '2026.1.0529.7/construction-operations-polygonized-surfaces',
            '2026.1.0529.7/construction-operations-scale-bars',
            '2026.1.0529.7/construction-operations-spheres',
            '2026.1.0529.7/construction-operations-surfaces',
            '2026.1.0529.7/construction-operations-vectors-and-vector-groups',
          ],
        },
        {
          type: 'category',
          label: 'GDT Operations',
          items: [
            '2026.1.0529.7/gdt-analysis',
            '2026.1.0529.7/gdt-construction',
          ],
        },
        '2026.1.0529.7/dimension-operations',
        '2026.1.0529.7/event-operations',
        '2026.1.0529.7/excel-direct-connect',
        '2026.1.0529.7/file-operations',
        {
          type: 'category',
          label: 'Google Sheets Operations',
          link: {
            type: 'doc',
            id: '2026.1.0529.7/google-sheets-operations',
          },
          items: [
            '2026.1.0529.7/google-sheets-read-operations',
            '2026.1.0529.7/google-sheets-write-operations',
          ],
        },
        {
          type: 'category',
          label: 'Instrument Operations',
          link: {
            type: 'doc',
            id: '2026.1.0529.7/instrument-operations',
          },
          items: [
            '2026.1.0529.7/instrument-operations-advanced-instrument-operations',
            '2026.1.0529.7/instrument-operations-api-ladar',
            '2026.1.0529.7/instrument-operations-crib-sheet-operations',
            '2026.1.0529.7/instrument-operations-laser-projection',
            {
              type: 'category',
              label: 'Nikon Metrology Laser Radars LR',
              link: {
                type: 'doc',
                id: '2026.1.0529.7/instrument-operations-nikon-metrology-laser-radars-lr',
              },
              items: [
                '2026.1.0529.7/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations',
              ],
            },
            '2026.1.0529.7/instrument-operations-watch-window-operations',
          ],
        },
        '2026.1.0529.7/mp-subroutines',
        '2026.1.0529.7/mp-task-overview',
        '2026.1.0529.7/ms-office-reporting-operations',
        '2026.1.0529.7/process-flow-operations',
        '2026.1.0529.7/relationship-operations',
        '2026.1.0529.7/reporting-operations',
        '2026.1.0529.7/robot-calibration-appliance-node-operations',
        '2026.1.0529.7/robot-operations',
        '2026.1.0529.7/scalar-math-operations',
        '2026.1.0529.7/scale-bar-operations',
        '2026.1.0529.7/utility-operations',
        '2026.1.0529.7/variables',
        '2026.1.0529.7/vector-operations',
        '2026.1.0529.7/view-control',
      ],
    },
    {
      "type": "category",
      "label": "SA 2024.1.0508.5",
      "link": {
        "type": "doc",
        "id": "2024.1.0508.5/overview"
      },
      "items": [
        "2024.1.0508.5/group-hierarchy",
        "2024.1.0508.5/review-notes",
        "2024.1.0508.5/accumulator-math-operations",
        {
          "type": "category",
          "label": "Analysis Operations",
          "link": {
            "type": "doc",
            "id": "2024.1.0508.5/analysis-operations"
          },
          "items": [
            "2024.1.0508.5/analysis-operations-cloud-filters",
            "2024.1.0508.5/analysis-operations-dimensions",
            "2024.1.0508.5/analysis-operations-events",
            "2024.1.0508.5/analysis-operations-gdt-operations",
            "2024.1.0508.5/analysis-operations-geometry-fit-profiles",
            "2024.1.0508.5/analysis-operations-meshes",
            {
              "type": "category",
              "label": "Relationship Operations",
              "link": {
                "type": "doc",
                "id": "2024.1.0508.5/analysis-operations-relationship-operations"
              },
              "items": [
                "2024.1.0508.5/analysis-operations-relationship-operations-pipe-relationships",
                {
                  "type": "category",
                  "label": "Relationship Attributes",
                  "link": {
                    "type": "doc",
                    "id": "2024.1.0508.5/analysis-operations-relationship-operations-relationship-attributes"
                  },
                  "items": [
                    "2024.1.0508.5/analysis-operations-relationship-operations-relationship-attributes-relationship-attributes-scalar-types"
                  ]
                }
              ]
            },
            "2024.1.0508.5/analysis-operations-scale-bars"
          ]
        },
        "2024.1.0508.5/cloud-viewer-operations",
        {
          "type": "category",
          "label": "Construction Operations",
          "link": {
            "type": "doc",
            "id": "2024.1.0508.5/construction-operations"
          },
          "items": [
            "2024.1.0508.5/construction-operations-bsplines",
            "2024.1.0508.5/construction-operations-callout-views-and-callouts",
            "2024.1.0508.5/construction-operations-circles",
            "2024.1.0508.5/construction-operations-collections",
            "2024.1.0508.5/construction-operations-cones",
            "2024.1.0508.5/construction-operations-cylinders",
            "2024.1.0508.5/construction-operations-ellipsoids",
            "2024.1.0508.5/construction-operations-folders",
            "2024.1.0508.5/construction-operations-frames",
            "2024.1.0508.5/construction-operations-gdt",
            "2024.1.0508.5/construction-operations-lines",
            "2024.1.0508.5/construction-operations-other-mp-types",
            "2024.1.0508.5/construction-operations-perimeters",
            "2024.1.0508.5/construction-operations-planes",
            "2024.1.0508.5/construction-operations-point-clouds",
            "2024.1.0508.5/construction-operations-points-and-groups",
            "2024.1.0508.5/construction-operations-polygonized-surfaces",
            "2024.1.0508.5/construction-operations-scale-bars",
            "2024.1.0508.5/construction-operations-spheres",
            "2024.1.0508.5/construction-operations-surfaces",
            "2024.1.0508.5/construction-operations-vectors-and-vector-groups"
          ]
        },
        {
          "type": "category",
          "label": "Excel Direct Connect",
          "link": {
            "type": "doc",
            "id": "2024.1.0508.5/excel-direct-connect"
          },
          "items": [
            "2024.1.0508.5/excel-direct-connect-read",
            "2024.1.0508.5/excel-direct-connect-write"
          ]
        },
        {
          "type": "category",
          "label": "File Operations",
          "link": {
            "type": "doc",
            "id": "2024.1.0508.5/file-operations"
          },
          "items": [
            "2024.1.0508.5/file-operations-ascii-data-file-operations",
            "2024.1.0508.5/file-operations-data-share-operations",
            "2024.1.0508.5/file-operations-database-operations",
            {
              "type": "category",
              "label": "File Export",
              "link": {
                "type": "doc",
                "id": "2024.1.0508.5/file-operations-file-export"
              },
              "items": [
                {
                  "type": "category",
                  "label": "QDAS File Export",
                  "link": {
                    "type": "doc",
                    "id": "2024.1.0508.5/file-operations-file-export-qdas-file-export"
                  },
                  "items": [
                    "2024.1.0508.5/file-operations-file-export-qdas-file-export-qdas-catalog"
                  ]
                }
              ]
            },
            "2024.1.0508.5/file-operations-file-import",
            "2024.1.0508.5/file-operations-json",
            "2024.1.0508.5/file-operations-xml"
          ]
        },
        {
          "type": "category",
          "label": "Instrument Operations",
          "link": {
            "type": "doc",
            "id": "2024.1.0508.5/instrument-operations"
          },
          "items": [
            "2024.1.0508.5/instrument-operations-advanced-instrument-operations",
            "2024.1.0508.5/instrument-operations-crib-sheet-operations",
            "2024.1.0508.5/instrument-operations-laser-projection",
            "2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr"
          ]
        },
        "2024.1.0508.5/mp-subroutines",
        "2024.1.0508.5/mp-task-overview",
        "2024.1.0508.5/ms-office-reporting-operations",
        "2024.1.0508.5/process-flow-operations",
        {
          "type": "category",
          "label": "Reporting Operations",
          "link": {
            "type": "doc",
            "id": "2024.1.0508.5/reporting-operations"
          },
          "items": [
            "2024.1.0508.5/reporting-operations-custom-report-tables",
            "2024.1.0508.5/reporting-operations-report-bar"
          ]
        },
        "2024.1.0508.5/robot-calibration-appliance-node-operations",
        "2024.1.0508.5/robot-operations",
        "2024.1.0508.5/scalar-math-operations",
        {
          "type": "category",
          "label": "Utility Operations",
          "link": {
            "type": "doc",
            "id": "2024.1.0508.5/utility-operations"
          },
          "items": [
            "2024.1.0508.5/utility-operations-folders",
            "2024.1.0508.5/utility-operations-language",
            "2024.1.0508.5/utility-operations-network",
            "2024.1.0508.5/utility-operations-notes",
            "2024.1.0508.5/utility-operations-opc-da-server",
            "2024.1.0508.5/utility-operations-units"
          ]
        },
        "2024.1.0508.5/variables",
        "2024.1.0508.5/vector-math-operations",
        {
          "type": "category",
          "label": "View Control",
          "link": {
            "type": "doc",
            "id": "2024.1.0508.5/view-control"
          },
          "items": [
            "2024.1.0508.5/view-control-colors",
            "2024.1.0508.5/view-control-hide-show-operations",
            "2024.1.0508.5/view-control-highlight-operations",
            "2024.1.0508.5/view-control-point-of-view",
            "2024.1.0508.5/view-control-ribbon-bar"
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Command Reference',
      items: [
        'commands/accumulator-math-operations',
        'commands/analysis-operations',
        'commands/cloud-and-mesh-operations',
        {
          type: 'category',
          label: 'Construction Operations',
          link: {
            type: 'doc',
            id: 'commands/construction-operations',
          },
          items: [
            'commands/construction-operations-bsplines',
            'commands/construction-operations-callout-views-and-callouts',
            'commands/construction-operations-circles',
            'commands/construction-operations-collections',
            'commands/construction-operations-cones',
            'commands/construction-operations-cylinders',
            'commands/construction-operations-ellipses',
            'commands/construction-operations-ellipsoids',
            'commands/construction-operations-folders',
            'commands/construction-operations-frames',
            'commands/construction-operations-lines',
            'commands/construction-operations-other-mp-types',
            'commands/construction-operations-perimeters',
            'commands/construction-operations-planes',
            'commands/construction-operations-point-clouds',
            'commands/construction-operations-points-and-groups',
            'commands/construction-operations-polygonized-surfaces',
            'commands/construction-operations-scale-bars',
            'commands/construction-operations-spheres',
            'commands/construction-operations-surfaces',
            'commands/construction-operations-vectors-and-vector-groups',
          ],
        },
        {
          type: 'category',
          label: 'GDT Operations',
          items: ['commands/gdt-analysis', 'commands/gdt-construction'],
        },
        'commands/dimension-operations',
        'commands/event-operations',
        'commands/excel-direct-connect',
        'commands/file-operations',
        {
          type: 'category',
          label: 'Google Sheets Operations',
          link: {type: 'doc', id: 'commands/google-sheets-operations'},
          items: [
            'commands/google-sheets-read-operations',
            'commands/google-sheets-write-operations',
          ],
        },
        {
          type: 'category',
          label: 'Instrument Operations',
          link: {type: 'doc', id: 'commands/instrument-operations'},
          items: [
            'commands/instrument-operations-advanced-instrument-operations',
            'commands/instrument-operations-api-ladar',
            'commands/instrument-operations-crib-sheet-operations',
            'commands/instrument-operations-laser-projection',
            {
              type: 'category',
              label: 'Nikon Metrology Laser Radars LR',
              link: {
                type: 'doc',
                id: 'commands/instrument-operations-nikon-metrology-laser-radars-lr',
              },
              items: [
                'commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations',
              ],
            },
            'commands/instrument-operations-watch-window-operations',
          ],
        },
        'commands/mp-subroutines',
        'commands/mp-task-overview',
        'commands/ms-office-reporting-operations',
        'commands/process-flow-operations',
        'commands/relationship-operations',
        'commands/reporting-operations',
        'commands/robot-calibration-appliance-node-operations',
        'commands/robot-operations',
        'commands/scalar-math-operations',
        'commands/scale-bar-operations',
        'commands/utility-operations',
        'commands/variables',
        'commands/vector-operations',
        'commands/view-control',
      ],
    },
  ],
};

export default sidebars;
