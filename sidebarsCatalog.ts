import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  catalogSidebar: [
    'overview',
    {
      type: 'category',
      label: 'SA 2026.1.0529.7',
      link: {
        type: 'doc',
        id: '2026.1.0529.7/overview',
      },
      items: [
        '2026.1.0529.7/group-hierarchy',
        '2026.1.0529.7/file-operations',
      ],
    },
    {
      type: 'category',
      label: 'Command Reference',
      items: [
        'commands/file-operations',
      ],
    },
  ],
};

export default sidebars;
