const {createHash} = require('node:crypto');
const path = require('node:path');
const fs = require('node:fs/promises');

function routeTree(routes) {
  const root = {children: new Map()};
  for (const route of routes) {
    let node = root;
    let prefix = '/api';
    for (const segment of route.path.split('/').slice(2)) {
      prefix += '/' + segment;
      if (!node.children.has(segment)) node.children.set(segment, {path: prefix, children: new Map()});
      node = node.children.get(segment);
    }
    if (node.route) throw new Error(`Duplicate API route: ${route.path}`);
    node.route = route;
  }
  const branch = (node) => node.children.size ? {
    path: node.path, exact: false, component: '@site/src/components/ApiReference/RouteBranch.tsx',
    routes: [...node.children.values()].map(branch).concat(node.route ? [node.route] : []),
  } : node.route;
  return [...root.children.values()].map(branch);
}

module.exports = function apiReference(context) {
  return {
    name: 'briosa-api-reference',
    getPathsToWatch: () => ['*_versions.json', '*_versioned_docs/**/*.md', '*_versioned_sidebars/*.json', 'plugins/api-reference/targets.json'].map((p) => `${context.siteDir}/${p}`),
    extendCli(cli) {
      // Retain Docusaurus's snapshot implementation and existing release commands.
      const {cliDocsVersionCommand} = require('@docusaurus/plugin-content-docs/lib/cli.js').default;
      for (const family of ['grpc', 'dotnet', 'python', 'javascript']) {
        cli.command(`docs:version:${family}`).arguments('<version>').description(`Tag a new API reference (${family})`).action(async (version) => {
          const targetsPath = path.join(__dirname, 'targets.json');
          const targets = JSON.parse(await fs.readFile(targetsPath, 'utf8'));
          await cliDocsVersionCommand(version, {id: family, path: `api/${family}`, sidebarPath: path.join(context.siteDir, `sidebars${family[0].toUpperCase() + family.slice(1)}.ts`)}, context);
          targets.snapshots[family][version] = targets.workingDefault;
          await fs.writeFile(targetsPath, JSON.stringify(targets, null, 2) + '\n');
        });
      }
    },
    async loadContent() {
      const {compileReference} = await import('./content.mjs');
      return compileReference(context.siteDir);
    },
    async postBuild({outDir, content}) {
      // Version roots also contain child pages. Supply directory indexes for
      // static hosts that resolve a directory before its sibling .html file.
      const roots = new Set([
        ...content.pages.filter((page) => page.id === 'overview').map((page) => page.path),
        ...Object.entries(content.redirects).filter(([, redirect]) => redirect.id === 'overview').map(([from]) => from),
      ]);
      for (const route of roots) {
        const destination = path.join(outDir, route.slice(1));
        await fs.mkdir(destination, {recursive: true});
        await fs.copyFile(`${destination}.html`, path.join(destination, 'index.html'));
      }
    },
    async contentLoaded({content, actions}) {
      const manifest = await actions.createData('manifest.json', JSON.stringify(content.manifest));
      const navFiles = {};
      for (const [base, nav] of Object.entries(content.navigation)) navFiles[base] = await actions.createData(`nav-${base.replaceAll('/', '-')}.json`, JSON.stringify(nav));
      const filename = (p) => createHash('sha256').update(p).digest('hex').slice(0, 24) + '.json';
      // Share one data module per command group. Thousands of individual modules
      // overwhelm server chunk emission without improving the public page granularity.
      const batches = new Map();
      for (const page of content.pages) {
        const key = `${page.kind === 'history' ? page.family + '/history' : page.base}/${page.group ?? page.id}`;
        if (!batches.has(key)) batches.set(key, {});
        batches.get(key)[page.path] = page;
      }
      const pageFiles = new Map();
      for (const [key, batch] of batches) {
        const data = await actions.createData(filename(key), JSON.stringify(batch));
        for (const path of Object.keys(batch)) pageFiles.set(path, data);
      }
      const routes = [];
      for (const page of content.pages) {
        routes.push({path: page.path, exact: true, component: '@site/src/components/ApiReference/Page.tsx', modules: {pages: pageFiles.get(page.path), navigation: navFiles[page.base], manifest}, metadata: {sourceFilePath: page.source}, customData: {apiNoIndex: !page.available}});
      }
      const redirectBatches = new Map();
      for (const [from, redirect] of Object.entries(content.redirects)) {
        const key = `${redirect.family}/${redirect.target}/${redirect.release}/${redirect.id.split('/')[0]}`;
        if (!redirectBatches.has(key)) redirectBatches.set(key, {});
        redirectBatches.get(key)[from] = redirect;
      }
      for (const [key, batch] of redirectBatches) {
        const data = await actions.createData(`redirect-${filename(key)}`, JSON.stringify(batch));
        for (const from of Object.keys(batch)) routes.push({path: from, exact: true, component: '@site/src/components/ApiReference/Legacy.tsx', modules: {redirects: data, manifest}, customData: {apiNoIndex: true}});
      }
      for (const route of routeTree(routes)) actions.addRoute(route);
      actions.setGlobalData({releases: content.manifest.releases});
      console.log(`[API] ${content.pages.length} static references/history pages; ${Object.keys(content.redirects).length} preserved entry routes.`);
    },
  };
};
