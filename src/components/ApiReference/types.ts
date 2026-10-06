export type Variant = {release: string; target: string; href?: string; available?: boolean; current?: boolean; same?: boolean; summary?: string; revision?: number};
export type Method = {id: string; title: string; anchor: string; available: boolean};
export type Choice = {value: string; href: string | null; current?: boolean};
export type Compatibility = {
  history: string | null; revisions: number;
  targets: {target: string; release: string; available: boolean; href: string | null; since: string | null}[];
};
export type PageData = {
  id: string; title: string; description: string; family: string; release: string; target: string;
  base: string; path: string; kind: 'method' | 'group' | 'guide' | 'history'; group?: string; groupHref: string | null;
  current: boolean; available: boolean; noindex: boolean; source: string; html: string; toc: {id: string; title: string}[];
  variants: Variant[]; compatibility: Compatibility | null; related: {family: string; href: string}[];
};
export type Navigation = {
  base: string; family: string; release: string; target: string; current: boolean; targets: string[]; releases: string[];
  label: string; discovery: string | null; valueTypes: boolean;
  lifecycle: {id: string; title: string}[]; firstCalls: {id: string; title: string; available: boolean}[];
  groups: {id: string; title: string; parents: string[]; methods: Method[]}[];
};
export type FamilyIndex = {
  family: string; label: string; releaseLabel: string;
  targets: {target: string; release: string; href: string; methods: number}[];
  releases: {release: string; targets: {target: string; href: string; current: boolean}[]}[];
};
