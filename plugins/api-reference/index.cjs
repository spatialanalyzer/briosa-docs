const {createHash} = require('node:crypto');
const path = require('node:path');
const fs = require('node:fs/promises');
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
      for (const page of content.pages) {
        actions.addRoute({path: page.path, exact: true, component: '@site/src/components/ApiReference/Page.tsx', modules: {pages: pageFiles.get(page.path), navigation: navFiles[page.base], manifest}, metadata: {sourceFilePath: page.source}, customData: {apiNoIndex: !page.available}});
      }
      const redirectData = await actions.createData('redirects.json', JSON.stringify(content.redirects));
      for (const from of Object.keys(content.redirects)) {
        actions.addRoute({path: from, exact: true, component: '@site/src/components/ApiReference/Legacy.tsx', modules: {redirects: redirectData, manifest}, customData: {apiNoIndex: true}});
      }
      actions.setGlobalData({releases: content.manifest.releases});
      console.log(`[API] ${content.pages.length} static references/history pages; ${Object.keys(content.redirects).length} preserved entry routes.`);
    },
  };
};
