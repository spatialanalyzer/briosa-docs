import {Prism, normalizeTokens, type PrismGrammar, type Token} from 'prism-react-renderer';

// The API reference plugin renders each released Markdown snapshot to HTML.
// Its code blocks are decorated here, during render, so the server and the
// browser produce identical markup without adding highlighting to the page
// data: a Scanline terminal with a language label, numbered lines, and syntax
// tokens in the sl-tk-* colors. The code text itself is never changed.
// Grammars come from the Prism instance Docusaurus extends with
// themeConfig.prism.additionalLanguages; a language without one stays plain.
const languages: Record<string, {grammar?: string; label?: string}> = {
  proto: {grammar: 'protobuf', label: 'Proto'},
  protobuf: {grammar: 'protobuf', label: 'Proto'},
  csharp: {grammar: 'csharp', label: 'C#'},
  python: {grammar: 'python', label: 'Python'},
  ts: {grammar: 'typescript', label: 'TypeScript'},
  typescript: {grammar: 'typescript', label: 'TypeScript'},
  json: {grammar: 'json', label: 'JSON'},
  powershell: {grammar: 'powershell', label: 'PowerShell'},
  text: {},
};

// Prism token types, most specific first, mapped to the Scanline token colors.
const tokenClasses: Record<string, string> = {
  comment: 'c', prolog: 'c', doctype: 'c', cdata: 'c',
  string: 's', char: 's', 'template-string': 's', regex: 's', 'attr-value': 's',
  number: 'n', boolean: 'n', constant: 'n', null: 'n', nil: 'n',
  keyword: 'k', important: 'k', atrule: 'k',
  'class-name': 't', builtin: 't', namespace: 't', annotation: 't', attribute: 't', decorator: 't',
  function: 'f', method: 'f', property: 'f',
  punctuation: 'p', operator: 'p',
};

// Long blocks scroll inside a fixed height until the reader expands them.
export const longBlock = 24;

const named: Record<string, string> = {amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00A0'};
const decode = (html: string) => html.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, ref: string) => {
  if (ref[0] !== '#') return named[ref.toLowerCase()] ?? entity;
  return String.fromCodePoint(ref[1] === 'x' || ref[1] === 'X' ? parseInt(ref.slice(2), 16) : parseInt(ref.slice(1), 10));
});
const escape = (text: string) => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function classOf(types: string[]): string | undefined {
  for (let i = types.length - 1; i >= 0; i--) if (tokenClasses[types[i]]) return tokenClasses[types[i]];
  return undefined;
}

function lines(code: string, grammar: string | undefined): string {
  const source = code.endsWith('\n') ? code.slice(0, -1) : code;
  const rules = grammar ? (Prism.languages as unknown as Record<string, PrismGrammar | undefined>)[grammar] : undefined;
  const tokens: Token[][] = rules ? normalizeTokens(Prism.tokenize(source, rules)) : source.split('\n').map((content) => [{types: ['plain'], content}]);
  // Each line keeps its own line feed, so the code's text is exactly the source.
  return tokens.map((line) => `<span class="api-ln">${line.map((token) => {
    const text = token.empty ? '' : escape(token.content);
    const name = text && classOf(token.types);
    return name ? `<span class="sl-tk-${name}">${text}</span>` : text;
  }).join('')}\n</span>`).join('');
}

// Wraps every `<pre><code>` block of rendered reference HTML in a terminal,
// and every table in a container that scrolls on its own on narrow screens.
export function decorateCode(html: string): string {
  return html.replace(/<pre><code(?: class="language-([\w#+-]+)")?>([\s\S]*?)<\/code><\/pre>/g, (_, language: string | undefined, body: string) => {
    const spec = language ? languages[language] ?? {label: language} : {};
    const code = decode(body);
    const count = code.replace(/\n$/, '').split('\n').length;
    const attributes = `${language ? ` data-language="${language}"` : ''} data-lines="${count}"${count > 2 ? ' data-numbered=""' : ''}${count > longBlock ? ' data-long=""' : ''}`;
    const label = spec.label ? `<span class="api-code-label sl-hud">${spec.label}</span>` : '';
    return `<div class="api-code"${attributes}><div class="api-code-bar">${label}</div>`
      + `<pre class="api-code-pre" tabindex="0"><code${language ? ` class="language-${language}"` : ''}>${lines(code, spec.grammar)}</code></pre></div>`;
  }).replace(/<table\b/g, '<div class="api-table-wrap"><table').replaceAll('</table>', '</table></div>');
}
