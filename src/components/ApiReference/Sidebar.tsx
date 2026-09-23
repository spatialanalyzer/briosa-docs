import React, {useState} from 'react';
import DocSidebarItems from '@theme/DocSidebarItems';
import type {PropSidebarItem, PropSidebarItemCategory} from '@docusaurus/plugin-content-docs';
import type {Navigation, PageData} from './types';
import {suffix} from './context';
import {SidebarControls} from './SidebarControls';

export default function Sidebar({navigation: nav, page}: {navigation: Navigation; page: PageData}): React.JSX.Element {
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState<Record<string, boolean>>({});
  const link = (id: string, label: string): PropSidebarItem => ({type: 'link', label, href: nav.base + suffix(id)});
  const category = (label: string, items: PropSidebarItem[], extra: Partial<PropSidebarItemCategory> = {}): PropSidebarItemCategory => ({type: 'category', label, items, collapsible: true, collapsed: true, ...extra});
  const control = (key: string): PropSidebarItem => ({type: 'html', value: '', customProps: {apiControl: key}});
  const controls: Record<string, React.ReactNode> = {
    filter: <label className="api-filter">Find a Command<input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Name or API spelling" /></label>,
  };

  type Branch = {key: string; title: string; group?: Navigation['groups'][number]; children: Branch[]};
  const roots: Branch[] = [];
  for (const group of nav.groups) {
    let children = roots;
    let key = '';
    const titles = [...group.parents, group.title.split(' / ').at(-1)!];
    for (const [index, title] of titles.entries()) {
      key += '/' + title;
      let branch = children.find((b) => b.key === key);
      if (!branch) { branch = {key, title, children: []}; children.push(branch); }
      if (index === titles.length - 1) branch.group = group;
      children = branch.children;
    }
  }
  const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const matches = (branch: Branch): boolean => !query || Boolean(branch.group?.methods.some((m) => clean(m.title).includes(clean(query)))) || branch.children.some(matches);
  function groupItem(branch: Branch): PropSidebarItem {
    const methods = branch.group?.methods.filter((m) => !query || clean(m.title).includes(clean(query))) ?? [];
    const currentIndex = Math.max(0, methods.findIndex((m) => m.id === page.id));
    const start = Math.max(0, Math.min(currentIndex - 5, methods.length - 11));
    const visible = query || showAll[branch.key] ? methods : methods.slice(start, start + 11);
    const items = visible.map((m) => link(m.id, m.title + (m.available ? '' : ' (Other SA Target)')));
    if (visible.length < methods.length) {
      controls[branch.key] = <button className="clean-btn menu__link api-show-all" type="button" onClick={() => setShowAll((all) => ({...all, [branch.key]: true}))}>Show All {methods.length} Commands</button>;
      items.push(control(branch.key));
    }
    items.push(...branch.children.filter(matches).map(groupItem));
    return category(branch.title, items, {
      href: branch.group ? nav.base + suffix(branch.group.id) : undefined,
      collapsed: !query,
      // Reset filtered branches without remounting the focused search input.
      customProps: {apiFilterKey: query},
    });
  }
  const items: PropSidebarItem[] = [link('overview', nav.label)];
  if (nav.discovery) items.push(link(nav.discovery, 'Server Discovery'));
  items.push(category('Lifecycle Methods', nav.lifecycle.map((l) => link(l.id, l.title))));
  items.push(category('First Calls', nav.firstCalls.map((l) => link(l.id, l.title))));
  if (nav.valueTypes) items.push(link('value-types', 'MP Value Types'));
  items.push(category('MP Commands', [control('filter'), ...roots.filter(matches).map(groupItem)], {collapsed: false}));

  return <SidebarControls.Provider value={controls}>
    <nav className="api-sidebar menu thin-scrollbar" aria-label="API Documentation">
      <ul className="theme-doc-sidebar-menu menu__list"><DocSidebarItems items={items} activePath={nav.base + suffix(page.id)} level={1} /></ul>
    </nav>
  </SidebarControls.Provider>;
}
