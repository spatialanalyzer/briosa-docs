import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  javascriptSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Lifecycle',
      items: ['lifecycle'],
    },
    {
      type: 'category',
      label: 'File Operations',
      items: ['get-working-directory'],
    },
  ],
};

export default sidebars;
