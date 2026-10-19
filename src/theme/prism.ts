import type {PrismTheme} from 'prism-react-renderer';

// Scanline syntax colors are the --sl-tok-* tokens, so one theme serves both color
// modes. Code rendered on the server for one mode is already right in the other,
// with no flash of the wrong palette before React re-renders it.
const tok = (name: string) => `var(--sl-tok-${name})`;

export const codeTheme: PrismTheme = {
  plain: {color: 'var(--sl-ink)', backgroundColor: 'var(--sl-term-solid)'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: tok('com'), fontStyle: 'italic'}},
    {types: ['keyword', 'atrule', 'attr-name', 'selector', 'tag', 'important'], style: {color: tok('kw')}},
    {types: ['string', 'char', 'attr-value', 'regex', 'url'], style: {color: tok('str')}},
    {types: ['number', 'boolean', 'constant', 'symbol'], style: {color: tok('num')}},
    {types: ['function', 'function-variable'], style: {color: tok('fn')}},
    {types: ['class-name', 'builtin', 'namespace', 'type-definition'], style: {color: tok('type')}},
    {types: ['punctuation', 'operator'], style: {color: tok('punc')}},
    {types: ['property', 'variable', 'parameter'], style: {color: 'var(--sl-ink)'}},
    {types: ['inserted'], style: {color: tok('type')}},
    {types: ['deleted'], style: {color: 'var(--sl-st-excluded)'}},
  ],
};
