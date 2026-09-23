const {readFileSync, existsSync} = require('node:fs');
const {join} = require('node:path');
const assert = require('node:assert/strict');
const {test} = require('node:test');
const {load} = require('cheerio');

const build = join(__dirname, '..', 'build');
const origin = 'https://briosa.dev';
const sitemap = load(readFileSync(join(build, 'sitemap.xml'), 'utf8'), {xmlMode: true});
const urls = sitemap('loc').toArray().map((element) => sitemap(element).text());
const html = (pathname) => load(readFileSync(join(build, pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`), 'utf8'));
const structuredData = ($) => $('script[type="application/ld+json"]').toArray().map((element) => JSON.parse($(element).html()));

test('sitemap pages have distinct titles, indexable content, and consistent canonical and breadcrumb URLs', () => {
  const canonicalUrls = new Set(urls);
  const titles = new Map();
  assert.equal(canonicalUrls.size, urls.length, 'duplicate sitemap URLs');
  assert.ok(canonicalUrls.has(`${origin}/`));
  for (const url of urls) {
    const address = new URL(url);
    assert.equal(address.origin, origin);
    const $ = html(address.pathname);
    assert.equal($('link[rel="canonical"]').length, 1, url);
    assert.equal($('link[rel="canonical"]').attr('href'), url, url);
    assert.doesNotMatch($('meta[name="robots"]').attr('content') ?? '', /noindex/i, url);
    assert.equal($('meta[http-equiv="refresh"]').length, 0, url);
    assert.equal($('h1').length, 1, url);
    assert.ok($('meta[name="description"]').attr('content')?.trim(), url);
    const title = $('title').text();
    assert.ok(title.trim(), url);
    assert.ok(!titles.has(title), `${url} shares its title with ${titles.get(title)}: ${title}`);
    titles.set(title, url);
    for (const data of structuredData($).filter((item) => item['@type'] === 'BreadcrumbList')) {
      for (const item of data.itemListElement) {
        assert.ok(canonicalUrls.has(item.item), `${url} has a noncanonical breadcrumb: ${item.item}`);
      }
    }
  }
});

test('API titles identify each language while retaining exact MP headings and anchors', () => {
  for (const [language, label] of Object.entries({grpc: 'gRPC', dotnet: '.NET', python: 'Python', javascript: 'JavaScript and TypeScript'})) {
    const $ = html(`/api/${language}/${language === 'grpc' ? '0.7.0' : '0.2.0'}/sa-2026.1.0529.7/analysis-operations`);
    assert.equal($('title').text(), `Analysis Operations — ${label} API ${language === 'grpc' ? '0.7.0' : '0.2.0'} · SA 2026.1.0529.7 | Briosa`);
    assert.equal($('h1').text(), 'Analysis Operations');
    const collections = html(`/api/${language}/${language === 'grpc' ? '0.7.0' : '0.2.0'}/sa-2026.1.0529.7/construction-operations-collections`);
    assert.equal(collections('#construct-collection').length, 1);
  }
});

test('homepage supplies a site identity and a real social preview image', () => {
  const $ = html('/');
  const websites = structuredData($).filter((item) => item['@type'] === 'WebSite');
  assert.equal(websites.length, 1);
  assert.equal(websites[0].name, 'Briosa');
  assert.equal(websites[0].url, `${origin}/`);
  assert.equal($('meta[property="og:site_name"]').attr('content'), 'Briosa');
  const image = $('meta[property="og:image"]').attr('content');
  assert.equal(image, `${origin}/img/briosa-social.png`);
  assert.equal($('meta[name="twitter:image"]').attr('content'), image);
  const png = readFileSync(join(build, new URL(image).pathname));
  assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
});

test('internal search is omitted from the sitemap and carries noindex when enabled', () => {
  assert.ok(!urls.some((url) => new URL(url).pathname.replace(/\/$/, '') === '/search'));
  const searchEnabled = ['ALGOLIA_APP_ID', 'ALGOLIA_SEARCH_API_KEY', 'ALGOLIA_INDEX_NAME'].every((name) => process.env[name]?.trim());
  const searchBuilt = existsSync(join(build, 'search.html'));
  if (searchEnabled) assert.ok(searchBuilt, 'search-enabled build must include the search route');
  if (searchBuilt) assert.match(html('/search')('meta[name="robots"]').attr('content'), /\bnoindex\b/);
  const robots = readFileSync(join(build, 'robots.txt'), 'utf8');
  assert.match(robots, /Sitemap: https:\/\/briosa\.dev\/sitemap\.xml/);
  assert.doesNotMatch(robots, /Disallow:\s*\/search/);
});
