const http = require('node:http');
const path = require('node:path');
const {createRequire} = require('node:module');
const {parseArgs} = require('node:util');

// Reuse Docusaurus's static server, correcting its dotted-directory lookup.
const coreRequire = createRequire(require.resolve('@docusaurus/core/package.json'));
const handler = coreRequire('serve-handler');
const {values} = parseArgs({options: {
  host: {type: 'string', default: '127.0.0.1'},
  port: {type: 'string', default: '3000'},
  dir: {type: 'string', default: 'build'},
  'no-open': {type: 'boolean'},
}});
const root = path.resolve(__dirname, '..', values.dir);
const versionRoot = /^\/api\/(?:grpc|dotnet|python|javascript)\/(?:sa-)?\d[\d.]*(?:\/(?:sa-)?\d[\d.]*)?\/?$/;
const server = http.createServer((request, response) => {
  const url = new URL(request.url, 'http://localhost');
  const exactRoot = versionRoot.test(url.pathname);
  // serve-handler stats paths containing dots before trying clean-URL HTML.
  // A matching directory otherwise masks an existing <release>.html file.
  if (exactRoot) request.url = url.pathname.replace(/\/$/, '') + '.html' + url.search;
  handler(request, response, {public: root, cleanUrls: !exactRoot, trailingSlash: false, directoryListing: false});
});
server.listen(Number(values.port), values.host, () => {
  console.log(`Serving ${root} at http://${values.host}:${server.address().port}`);
});
