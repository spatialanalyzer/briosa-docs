import type {PrismTheme} from 'prism-react-renderer';

// Scanline syntax colors (the --sl-tok-* tokens). Each is opaque and readable on
// its code surface: white in the light theme, the terminal navy in the dark one.
export const lightCodeTheme: PrismTheme = {
  plain: {color: '#061A33', backgroundColor: '#FFFFFF'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#5E7591', fontStyle: 'italic'}},
    {types: ['keyword', 'atrule', 'attr-name', 'selector', 'tag', 'important'], style: {color: '#2E47D9'}},
    {types: ['string', 'char', 'attr-value', 'regex', 'url'], style: {color: '#9A5B00'}},
    {types: ['number', 'boolean', 'constant', 'symbol'], style: {color: '#C0244A'}},
    {types: ['function', 'function-variable'], style: {color: '#006DB6'}},
    {types: ['class-name', 'builtin', 'namespace', 'type-definition'], style: {color: '#0B7F66'}},
    {types: ['punctuation', 'operator'], style: {color: '#46607E'}},
    {types: ['property', 'variable', 'parameter'], style: {color: '#061A33'}},
    {types: ['inserted'], style: {color: '#0B7F66'}},
    {types: ['deleted'], style: {color: '#B81E40'}},
  ],
};

export const darkCodeTheme: PrismTheme = {
  plain: {color: '#EAF3FF', backgroundColor: '#060F1F'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#7E97B6', fontStyle: 'italic'}},
    {types: ['keyword', 'atrule', 'attr-name', 'selector', 'tag', 'important'], style: {color: '#7FA8FF'}},
    {types: ['string', 'char', 'attr-value', 'regex', 'url'], style: {color: '#FFD23F'}},
    {types: ['number', 'boolean', 'constant', 'symbol'], style: {color: '#FF8FA3'}},
    {types: ['function', 'function-variable'], style: {color: '#8BE7FF'}},
    {types: ['class-name', 'builtin', 'namespace', 'type-definition'], style: {color: '#34F5C5'}},
    {types: ['punctuation', 'operator'], style: {color: '#9DB3CF'}},
    {types: ['property', 'variable', 'parameter'], style: {color: '#EAF3FF'}},
    {types: ['inserted'], style: {color: '#34F5C5'}},
    {types: ['deleted'], style: {color: '#FF7E95'}},
  ],
};
