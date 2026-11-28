import crypto from 'node:crypto';
import tls from 'node:tls';
import {parseArgs} from 'node:util';

// Reusable read-only verification script for briosa.dev hosting baselines,
// on-zone staging rehearsals, and post-cutover checks (#146).
const {values} = parseArgs({
  options: {
    origin: {type: 'string', default: 'https://briosa.dev'},
    www: {type: 'string', default: 'https://www.briosa.dev'},
    r2: {type: 'string', default: 'https://objects.briosa.dev'},
    mode: {type: 'string', default: 'workers'}, // 'pages' | 'workers'
    'skip-tls': {type: 'boolean', default: false},
    'skip-www': {type: 'boolean', default: false},
    'skip-downloads': {type: 'boolean', default: false},
    json: {type: 'boolean', default: false},
  },
});

const origin = values.origin.replace(/\/$/, '');
const wwwOrigin = values.www.replace(/\/$/, '');
const r2Origin = values.r2.replace(/\/$/, '');
const mode = values.mode;

if (mode !== 'pages' && mode !== 'workers') {
  console.error(`Invalid --mode "${mode}". Use "pages" or "workers".`);
  process.exit(2);
}

const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex');

function inspectTls(host, servername = host) {
  return new Promise((resolve) => {
    const sock = tls.connect({host, port: 443, servername, rejectUnauthorized: true, timeout: 8000}, () => {
      const cert = sock.getPeerCertificate();
      sock.end();
      resolve({
        ok: true,
        host,
        servername,
        subject: cert.subject?.CN,
        issuer: cert.issuer?.O || cert.issuer?.CN,
        validFrom: cert.valid_from,
        validTo: cert.valid_to,
        san: cert.subjectaltname,
      });
    });
    sock.on('error', (error) => resolve({ok: false, host, servername, error: error.message}));
    sock.on('timeout', () => {
      sock.destroy();
      resolve({ok: false, host, servername, error: 'timeout'});
    });
  });
}

async function req(url, options = {}) {
  const res = await fetch(url, {redirect: 'manual', ...options});
  const buf = Buffer.from(await res.arrayBuffer());
  const text = buf.subarray(0, 8192).toString('utf8');
  return {
    url,
    status: res.status,
    location: res.headers.get('location'),
    contentType: res.headers.get('content-type'),
    cacheControl: res.headers.get('cache-control'),
    cfCacheStatus: res.headers.get('cf-cache-status'),
    etag: res.headers.get('etag'),
    contentRange: res.headers.get('content-range'),
    contentLength: res.headers.get('content-length'),
    bytes: buf.length,
    sha256: sha256(buf),
    text,
    buf,
  };
}

const failures = [];
const check = (name, ok, detail) => {
  if (!ok) failures.push({name, detail});
  return {name, ok, detail};
};

const results = [];
const originHost = new URL(origin).hostname;

// 1. TLS
if (!values['skip-tls']) {
  const tlsCert = await inspectTls(originHost);
  results.push(check(`tls:${originHost}`, tlsCert.ok, tlsCert));
}

// 2. www redirect
if (!values['skip-www']) {
  for (const [path, expectedLocation] of [
    ['/', `${origin}/`],
    ['/install', `${origin}/install`],
    ['/install?sa=2026.1.0529.7', `${origin}/install?sa=2026.1.0529.7`],
  ]) {
    const r = await req(`${wwwOrigin}${path}`);
    results.push(
      check(
        `www:${path}`,
        r.status === 301 && r.location === expectedLocation,
        {status: r.status, location: r.location, expectedLocation},
      ),
    );
  }
}

// 3. Docs canonical URLs
for (const path of [
  '/',
  '/install',
  '/api/grpc/sa-2026.1.0529.7',
  '/api/grpc/sa-2026.1.0529.7/0.10.1',
  '/api/grpc/sa-2026.1.0529.7/file-operations/get-working-directory',
  '/sitemap.xml',
  '/robots.txt',
]) {
  const r = await req(`${origin}${path}`);
  results.push(check(`docs:${path}`, r.status === 200 && r.bytes > 0, {status: r.status, bytes: r.bytes}));
}

// 4. Non-canonical spellings & redirects
const installSlash = await req(`${origin}/install/`);
results.push(
  check(
    'docs:/install/',
    mode === 'pages'
      ? installSlash.status === 404
      : (installSlash.status === 307 || installSlash.status === 301 || installSlash.status === 308)
        && (installSlash.location === '/install' || installSlash.location === `${origin}/install`),
    {status: installSlash.status, location: installSlash.location},
  ),
);

const installHtml = await req(`${origin}/install.html`);
results.push(
  check(
    'docs:/install.html',
    mode === 'pages'
      ? installHtml.status === 200
      : (installHtml.status === 307 || installHtml.status === 301 || installHtml.status === 308)
        && (installHtml.location === '/install' || installHtml.location === `${origin}/install`),
    {status: installHtml.status, location: installHtml.location},
  ),
);

const dottedSlash = await req(`${origin}/api/grpc/sa-2026.1.0529.7/`);
results.push(
  check(
    'docs:/api/grpc/sa-2026.1.0529.7/',
    mode === 'pages'
      ? dottedSlash.status === 200
      : dottedSlash.status === 200
        || ((dottedSlash.status === 307 || dottedSlash.status === 301 || dottedSlash.status === 308)
          && (dottedSlash.location === '/api/grpc/sa-2026.1.0529.7'
            || dottedSlash.location === `${origin}/api/grpc/sa-2026.1.0529.7`)),
    {status: dottedSlash.status, location: dottedSlash.location},
  ),
);

// @docusaurus/plugin-client-redirects (index.html route)
const clientRedirect = await req(`${origin}/docs/contract-major-3-migration`);
const clientRedirectOk = mode === 'pages'
  ? clientRedirect.status === 301
  : clientRedirect.status === 200 && clientRedirect.text.includes('http-equiv="refresh"');
results.push(
  check('docs:/docs/contract-major-3-migration', clientRedirectOk, {
    status: clientRedirect.status,
    location: clientRedirect.location,
  }),
);

// Frozen API redirect document
const frozen = await req(`${origin}/api/grpc/sa-2024.1.0508.5/0.7.0/file-operations/direct-cad-access`);
results.push(
  check(
    'docs:frozen-redirect',
    frozen.status === 200
      && frozen.text.includes('window.briosaRedirect=')
      && frozen.text.includes('http-equiv="refresh"'),
    {status: frozen.status, bytes: frozen.bytes},
  ),
);

// 5. Docs 404 (with and without Sec-Fetch-Mode: navigate), /catalog.json, & excluded dotfiles
const notFoundChecks = [
  ['docs404:plain', '/definitely-does-not-exist-briosa-check', {}],
  ['docs404:navigate', '/definitely-does-not-exist-briosa-check', {'Sec-Fetch-Mode': 'navigate'}],
  ['docs404:/catalog.json', '/catalog.json', {}],
  ...(mode === 'workers' ? [
    ['docs404:/.nojekyll', '/.nojekyll', {}],
    ['docs404:/.assetsignore', '/.assetsignore', {}],
  ] : []),
];
for (const [label, path, headers] of notFoundChecks) {
  const r = await req(`${origin}${path}`, {headers});
  results.push(
    check(
      label,
      r.status === 404 && r.text.includes('Page Not Found'),
      {status: r.status, contentType: r.contentType, bytes: r.bytes},
    ),
  );
}

// 6. Downloads byte parity & headers
if (!values['skip-downloads']) {
const downloadChecks = [
  ['/downloads', '/index.html', true],
  ['/downloads/', '/index.html', true],
  ['/downloads/catalog.json', '/catalog.json', true],
  ['/downloads/catalog.json.signature.json', '/catalog.json.signature.json', true],
  ['/downloads/installer-setups.json', '/installer-setups.json', true],
  ['/downloads/hosting-check.txt', '/hosting-check.txt', false],
  ['/downloads/keys/catalog-public.pem', '/keys/catalog-public.pem', false],
  ['/downloads/keys/catalog-publisher-sha256.txt', '/keys/catalog-publisher-sha256.txt', false],
];

let samplePkg = null;
for (const [pubPath, r2Path, expectNoStore] of downloadChecks) {
  const pub = await req(`${origin}${pubPath}`);
  const r2 = await req(`${r2Origin}${r2Path}`);
  const noStoreOk = !expectNoStore || (pub.cacheControl ?? '').includes('no-store');
  results.push(
    check(
      `downloads:${pubPath}`,
      pub.status === 200 && r2.status === 200 && pub.sha256 === r2.sha256 && noStoreOk,
      {
        status: pub.status,
        bytes: pub.bytes,
        bytesMatch: pub.sha256 === r2.sha256,
        cacheControl: pub.cacheControl,
      },
    ),
  );
  if (pubPath === '/downloads/catalog.json' && pub.status === 200 && !samplePkg) {
    const match = pub.buf.toString('utf8').match(/"(packages\/[^"]+\.(?:zip|exe))"/);
    if (match) samplePkg = match[1];
  }
}

// 7. Package HEAD, Range (206), and ETag (304)
if (samplePkg) {
  const pubUrl = `${origin}/downloads/${samplePkg}`;
  const head = await req(pubUrl, {method: 'HEAD'});
  const range = await req(pubUrl, {headers: {Range: 'bytes=0-15'}});
  const r2Range = await req(`${r2Origin}/${samplePkg}`, {headers: {Range: 'bytes=0-15'}});
  const cond = head.etag ? await req(pubUrl, {headers: {'If-None-Match': head.etag}}) : null;
  results.push(
    check(
      `downloads:package:${samplePkg}`,
      head.status === 200
        && range.status === 206
        && range.bytes === 16
        && range.sha256 === r2Range.sha256
        && cond?.status === 304,
      {
        headStatus: head.status,
        rangeStatus: range.status,
        rangeBytes: range.bytes,
        rangeMatchesR2: range.sha256 === r2Range.sha256,
        ifNoneMatchStatus: cond?.status ?? null,
        cacheControl: head.cacheControl,
      },
    ),
  );
} else {
  results.push(check('downloads:package:discover', false, 'No package found in catalog.json'));
}

// 8. Missing package 404 (must be R2 404, never Docusaurus 404.html)
const missingPub = await req(`${origin}/downloads/packages/does-not-exist-briosa-check.zip`);
const missingR2 = await req(`${r2Origin}/packages/does-not-exist-briosa-check.zip`);
results.push(
  check(
    'downloads:missing-404',
    missingPub.status === 404
      && missingR2.status === 404
      && !missingPub.text.includes('Page Not Found')
      && !missingPub.text.includes('__docusaurus'),
    {
      status: missingPub.status,
      bytes: missingPub.bytes,
      r2Bytes: missingR2.bytes,
      cacheControl: missingPub.cacheControl,
    },
  ),
);
}

if (values.json) {
  console.log(JSON.stringify({origin, mode, passed: failures.length === 0, failures, results}, null, 2));
} else {
  for (const r of results) {
    console.log(`${r.ok ? 'PASS' : 'FAIL'} ${r.name} ${JSON.stringify(r.detail)}`);
  }
  console.log(`\n${results.length - failures.length}/${results.length} checks passed.`);
}

if (failures.length > 0) process.exit(1);
