export type Variant = {release: string; target: string; href: string; available: boolean; same?: boolean; summary?: string};
export type Method = {id: string; title: string; anchor: string; available: boolean};
export type PageData = {
  id: string; title: string; description: string; family: string; release: string; target: string;
  base: string; path: string; kind: 'method' | 'group' | 'guide' | 'history'; group?: string;
  available: boolean; source: string; html: string; toc: {id: string; title: string}[];
  anchors?: string[]; links?: string[];
  variants: Variant[]; aliases: Record<string, string>; methods?: Method[];
};
export type Navigation = {
  base: string; family: string; release: string; target: string; label: string; discovery: string | null; valueTypes: boolean;
  lifecycle: {id: string; title: string}[]; firstCalls: {id: string; title: string}[];
  groups: {id: string; title: string; parents: string[]; methods: Method[]}[];
};
export type Manifest = {releases: Record<string, string[]>; contexts: {family: string; release: string; target: string; base: string; ids: string[]}[]};
