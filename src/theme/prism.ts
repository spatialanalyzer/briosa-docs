import type {PrismTheme} from 'prism-react-renderer';

// Use opaque colors with readable contrast on each code surface, including
// comments and namespaces. Cyan is reserved for syntax on dark backgrounds.
export const lightCodeTheme: PrismTheme = {
  plain: {color: '#585B62', backgroundColor: '#FFFFFF'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#585B62'}},
    {types: ['keyword', 'atrule', 'attr-name', 'selector', 'tag'], style: {color: '#003875'}},
    {types: ['string', 'char', 'attr-value', 'regex', 'inserted'], style: {color: '#126b5d'}},
    {types: ['number', 'boolean', 'constant', 'symbol', 'property', 'builtin'], style: {color: '#594184'}},
    {types: ['function', 'function-variable', 'class-name'], style: {color: '#003875'}},
    {types: ['deleted'], style: {color: '#7a3030'}},
  ],
};

export const darkCodeTheme: PrismTheme = {
  plain: {color: '#e2eaf2', backgroundColor: '#102f50'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#b5c7d9'}},
    {types: ['keyword', 'atrule', 'attr-name', 'selector', 'tag'], style: {color: '#00BAF1'}},
    {types: ['string', 'char', 'attr-value', 'regex', 'inserted'], style: {color: '#8cebd5'}},
    {types: ['number', 'boolean', 'constant', 'symbol', 'property', 'builtin'], style: {color: '#d0bff5'}},
    {types: ['function', 'function-variable', 'class-name'], style: {color: '#FFFFFF'}},
    {types: ['deleted'], style: {color: '#efb2bb'}},
  ],
};
