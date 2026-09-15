new Crawler({
  /*
   * Keep new Crawler as the first statement for the hosted editor's parser.
   * Replace the three placeholders in Algolia, never with private credentials
   * in this repository. Preserve the existing crawler schedule and safety checks.
   * Uses the standard DocSearch v3 record format (also used by UI v4/v5).
   * https://docsearch.algolia.com/docs/templates/#docusaurus-v2-and-later-template
   */
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_CRAWLER_API_KEY',
  indexPrefix: '',
  rateLimit: 8,
  maxDepth: 10,
  startUrls: ['https://briosa.dev/'],
  sitemaps: ['https://briosa.dev/sitemap.xml'],
  discoveryPatterns: ['https://briosa.dev/**'],
  exclusionPatterns: [
    'https://briosa.dev/search**',
    'https://briosa.dev/mp-command-catalog/2026.1.0529.7/**',
    'https://briosa.dev/mp-command-catalog/commands',
    'https://briosa.dev/mp-command-catalog/commands/',
    'https://briosa.dev/mp-command-catalog/commands/index**',
  ],
  actions: [{
    indexName: 'YOUR_INDEX_NAME',
    pathsToMatch: ['https://briosa.dev/**'],
    recordExtractor: ({$, url, helpers}) => {
      const path = url.pathname.replace(/\/$/, '');
      // Also enforce exclusions during extraction, including future SA targets.
      if (
        url.hostname !== 'briosa.dev' || url.search ||
        path === '/search' || path === '/404' || path === '/404.html' ||
        /^\/mp-command-catalog\/\d/.test(path) ||
        /^\/mp-command-catalog\/commands(?:\/index(?:\.html)?)?$/.test(path) ||
        $('meta[http-equiv="refresh"], meta[name="robots"][content*="noindex"]').length
      ) return [];

      // Older canonical pages state their target once in the introduction and
      // their reviewed group in the on-page table. Reuse that context without
      // making table rows into search records. Ambiguous targets require review.
      const groupsByAnchor = new Map();
      $('.catalog-command-table tbody tr').each((_, row) => {
        const link = $(row).find('a[href^="#"]').first().attr('href');
        if (link) groupsByAnchor.set(link.slice(1), $(row).attr('data-group'));
      });
      const title = $('article h1');
      const titleBlock = title.parent().is('header') ? title.parent() : title;
      const pageTargets = [...new Set((titleBlock.nextUntil('h2').text()
        .match(/\b\d{4}\.\d+\.\d{4}\.\d+\b/g) || []))];

      // Index article content, not repeated tables, filters, navigation or chrome.
      $('.hash-link, .catalog-command-table, .catalog-filter, .catalog-context-grid,' +
        ' nav, aside, .theme-doc-footer, .pagination-nav, .table-of-contents').remove();

      const text = (value) => value.replace(/\s+/g, ' ').trim();
      const meta = (name) => $(`meta[name="docsearch:${name}"]`).attr('content');
      // Search spellings are derived matching tokens, never new command identities.
      const spellings = (value) => [
        value.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase(),
        value.replace(/[^\p{L}\p{N}]+/gu, '_').replace(/^_|_$/g, '').toLowerCase(),
      ];

      if (path.startsWith('/mp-command-catalog/commands/')) {
        const records = [];
        $('article h2[id], article h3[id]').each((position, element) => {
          const heading = $(element);
          const leading = heading.nextUntil('h1, h2, h3, h4, h5, h6');
          const section = heading.nextUntil(heading.is('h2') ? 'h1, h2' : 'h1, h2, h3');
          const label = text(heading.text());
          const status = text(leading.find('.catalog-status')
            .add(leading.filter('.catalog-status')).first().text());
          if (!status && !groupsByAnchor.has(heading.attr('id'))) return;
          const details = {};
          section.find('.catalog-command-meta > div')
            .add(section.filter('.catalog-command-meta').children('div'))
            .each((_, detail) => {
              const name = text($(detail).children('span').text());
              const value = text($(detail).children('strong').text());
              if (details[name] && details[name] !== value) {
                throw new Error(`Ambiguous reviewed command context: ${path}#${heading.attr('id')}`);
              }
              details[name] = value;
            });
          const target = details['Reviewed SA Target'] ||
            (pageTargets.length === 1 ? pageTargets[0] : undefined);
          const group = details['MP Group Path'] || groupsByAnchor.get(heading.attr('id'));
          if (!status || !target || !group) {
            throw new Error(`Missing reviewed command context: ${path}#${heading.attr('id')}`);
          }

          const anchor = heading.attr('id');
          const pageUrl = `https://briosa.dev${path}`;
          const context = `${status} · SA ${target} · ${group}`;
          const body = section.not('.catalog-command-meta, .catalog-status').clone();
          body.find('.catalog-command-meta, .catalog-status').remove();
          records.push({
            objectID: `${pageUrl}#${anchor}`,
            url: `${pageUrl}#${anchor}`,
            url_without_anchor: pageUrl,
            anchor,
            type: 'lvl2',
            hierarchy: {
              lvl0: 'MP Catalog', lvl1: context, lvl2: label,
              lvl3: null, lvl4: null, lvl5: null, lvl6: null,
            },
            content: text(`${context}. ${body.toArray().map((node) => $(node).text()).join(' ')}`).slice(0, 3500),
            search_terms: spellings(label),
            language: meta('language') || 'en',
            lang: meta('language') || 'en',
            version: meta('version') || 'current',
            docusaurus_tag: meta('docusaurus_tag') || 'docs-catalog-current',
            weight: {pageRank: 0, level: 2, position},
          });
        });
        return records;
      }

      const sections = {
        grpc: 'gRPC API', dotnet: '.NET API', python: 'Python API',
        javascript: 'JavaScript and TypeScript API',
      };
      const apiMatch = path.match(/^\/api\/(grpc|dotnet|python|javascript)(?:\/|$)/);
      const apiSection = apiMatch && apiMatch[1];
      const versionLabel = text($('.theme-doc-version-badge').text());
      const section = apiSection
        ? `${sections[apiSection]}${versionLabel ? ` · ${versionLabel}` : ''}`
        : path === '/install' ? 'Install'
        : path.startsWith('/mp-command-catalog') ? 'MP Catalog'
        : path === '/api' ? 'API Reference'
        : path === '' ? 'Briosa' : 'Documentation';

      return helpers.docsearch({
        recordProps: {
          lvl0: {selectors: '', defaultValue: section},
          lvl1: 'header h1, main h1', lvl2: 'main h2', lvl3: 'main h3',
          lvl4: 'main h4', lvl5: 'main h5', lvl6: 'main h6',
          content: 'header:has(h1) p, main p, main li, main td, main pre',
        },
        indexHeadings: true,
        aggregateContent: true,
        recordVersion: 'v3',
      }).map((record) => ({
        ...record,
        search_terms: [...new Set(Object.values(record.hierarchy)
          .filter(Boolean).flatMap(spellings))],
      }));
    },
  }],
  initialIndexSettings: {
    YOUR_INDEX_NAME: {
      attributesForFaceting: ['type', 'lang', 'language', 'version', 'docusaurus_tag'],
      attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url', 'url_without_anchor', 'type'],
      attributesToHighlight: ['hierarchy', 'content'],
      attributesToSnippet: ['content:20'],
      camelCaseAttributes: ['hierarchy', 'content'],
      searchableAttributes: [
        'search_terms',
        'unordered(hierarchy.lvl2)', 'unordered(hierarchy.lvl1)',
        'unordered(hierarchy.lvl3)', 'unordered(hierarchy.lvl4)',
        'unordered(hierarchy.lvl5)', 'unordered(hierarchy.lvl6)',
        'unordered(hierarchy.lvl0)', 'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: ['desc(weight.pageRank)', 'desc(weight.level)', 'asc(weight.position)'],
      ranking: ['words', 'filters', 'typo', 'attribute', 'proximity', 'exact', 'custom'],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      ignorePlurals: true,
      advancedSyntax: true,
      removeWordsIfNoResults: 'none',
    },
  },
});
