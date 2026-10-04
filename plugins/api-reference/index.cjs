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

const escape = (text) => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// A former address as a static document: it costs a file, not a client route.
// Fragments, method anchors, and a remembered SA target are honored when
// JavaScript runs; otherwise the refresh and plain links reach the reference.
function redirectDocument({to, aliases = {}, prefix = '', choices, target}) {
  const data = JSON.stringify({to, aliases, prefix, choices, target}).replaceAll('<', '\\u003c');
  const links = Object.entries(aliases).map(([anchor, href]) => `<p id="${escape(anchor)}"><a href="${escape(href)}">${escape(anchor.replaceAll('-', ' '))}</a></p>`).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>API Reference Link | Briosa</title><meta name="robots" content="noindex, follow"><link rel="canonical" href="https://briosa.dev${escape(to)}"><script>(function(){var d=${data},t=d.to,a=d.aliases,h=location.hash.slice(1),own=function(o,k){return Object.prototype.hasOwnProperty.call(o,k)};try{h=decodeURIComponent(h)}catch(e){}try{if(d.target)sessionStorage.setItem('briosa.api.browsing-target',d.target)}catch(e){}try{var s=new URLSearchParams(location.search).get('sa')||sessionStorage.getItem('briosa.api.browsing-target')||localStorage.getItem('briosa.api.sa-target');if(d.choices&&s&&own(d.choices,s)){t=d.choices[s].to;a=d.choices[s].aliases}}catch(e){}if(h&&own(a,h))t=a[h];else if(h&&(d.prefix||t.indexOf('#')<0))t=t.split('#')[0]+'#'+d.prefix+h;location.replace(t)})()</script><meta http-equiv="refresh" content="0; url=${escape(to)}"></head><body><main><h1>API Reference</h1><p>This reference has a permanent address.</p><p><a href="${escape(to)}">Open the Reference</a></p>${links}</main></body></html>`;
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
      const write = async (route, html) => {
        const file = path.join(outDir, route.slice(1) + '.html');
        await fs.mkdir(path.dirname(file), {recursive: true});
        await fs.writeFile(file, html, {flag: 'wx'});
      };
      for (const [from, redirect] of Object.entries(content.redirects)) await write(from, redirectDocument(redirect));
      // Static hosts read a dotted final segment (an SA target or release) as a
      // file extension and never try its .html sibling, so supply a directory index.
      const index = async (dir) => {
        for (const entry of await fs.readdir(dir, {withFileTypes: true})) {
          const child = path.join(dir, entry.name);
          if (entry.isDirectory()) await index(child);
          else if (/\.\d+\.html$/.test(entry.name)) {
            const directory = child.slice(0, -'.html'.length);
            await fs.mkdir(directory, {recursive: true});
            await fs.copyFile(child, path.join(directory, 'index.html'), fs.constants.COPYFILE_EXCL);
          }
        }
      };
      await index(path.join(outDir, 'api'));
    },
    async contentLoaded({content, actions}) {
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
        routes.push({path: page.path, exact: true, component: '@site/src/components/ApiReference/Page.tsx', modules: {pages: pageFiles.get(page.path), navigation: navFiles[page.base]}, metadata: {sourceFilePath: page.source}, customData: {apiNoIndex: page.noindex}});
      }
      for (const [family, index] of Object.entries(content.index)) {
        const data = await actions.createData(`index-${family}.json`, JSON.stringify(index));
        routes.push({path: `/api/${family}`, exact: true, component: '@site/src/components/ApiReference/FamilyIndex.tsx', modules: {index: data}});
      }
      for (const route of routeTree(routes)) actions.addRoute(route);
      // Each SA target's current release, for search on release-independent addresses.
      actions.setGlobalData({current: Object.fromEntries(Object.entries(content.index).map(([family, index]) => [family, Object.fromEntries(index.targets.map((t) => [t.target, t.release]))]))});
      console.log(`[API] ${content.pages.length} reference and history pages; ${Object.keys(content.redirects).length} static redirect documents.`);
    },
  };
};
