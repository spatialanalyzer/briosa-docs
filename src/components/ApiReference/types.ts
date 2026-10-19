export type Variant = {release: string; target: string; href?: string; available?: boolean; current?: boolean; same?: boolean; summary?: string; revision?: number};
export type Method = {id: string; title: string; anchor: string; available: boolean};
export type Choice = {value: string; href: string | null; current?: boolean};
export type Compatibility = {
  history: string | null; revisions: number;
  targets: {target: string; release: string; available: boolean; href: string | null; since: string | null}[];
};
// `title` is plain text; `heading`, when present, is the H1 with its inline code in backticks.
// `fields` counts a group's request and result fields from its parameter tables, and
// `firstDocumented` is the first release, up to this one, that documented one of its
// methods for this target.
export type PageData = {
  id: string; title: string; heading?: string; description: string; family: string; release: string; target: string;
  base: string; path: string; kind: 'method' | 'group' | 'guide' | 'history'; group?: string; groupHref: string | null;
  current: boolean; available: boolean; noindex: boolean; source: string; html: string; toc: {id: string; title: string}[];
  variants: Variant[]; compatibility: Compatibility | null; related: {family: string; href: string}[];
  fields?: {request: number; result: number; execution: number}; firstDocumented?: string;
};
// `sameContract` maps a release to later releases that serve its contract unchanged.
export type Navigation = {
  base: string; family: string; release: string; target: string; current: boolean; targets: string[]; releases: string[];
  label: string; discovery: string | null; valueTypes: boolean; sameContract?: Record<string, string[]>;
  lifecycle: {id: string; title: string; code?: boolean}[]; firstCalls: {id: string; title: string; available: boolean}[];
  groups: {id: string; title: string; parents: string[]; methods: Method[]}[];
};
export type FamilyIndex = {
  family: string; label: string; releaseLabel: string; sameContract?: Record<string, string[]>;
  targets: {target: string; release: string; href: string; methods: number}[];
  releases: {release: string; targets: {target: string; href: string; current: boolean}[]}[];
};
