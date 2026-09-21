import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

type ReferenceItem = string | {
  type: 'category';
  label: string;
  items: ReferenceItem[];
  link?: {type: 'doc'; id: string};
};

// Reuse the reference's authored grouping for the other exact target. This is
// navigation only; target contracts remain independently maintained documents.
export function withSa2024(sidebars: SidebarsConfig): SidebarsConfig {
  const prefix = 'sa-2024.1.0508.5/';
  const scoped = (items: ReferenceItem[]): ReferenceItem[] => items.map((item) =>
    typeof item === 'string'
      ? `${prefix}${item}`
      : {
          ...item,
          items: scoped(item.items),
          ...(item.link ? {link: {...item.link, id: `${prefix}${item.link.id}`}} : {}),
        },
  );
  return Object.fromEntries(Object.entries(sidebars).map(([name, items]) => {
    const reference = items as ReferenceItem[];
    return [name, [
      ...reference.slice(0, 3),
      {type: 'category', label: 'SA 2024.1.0508.5', items: scoped(reference)},
      ...reference.slice(3),
    ]];
  }));
}
