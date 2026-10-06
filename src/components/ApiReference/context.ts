import type {Navigation, PageData} from './types';
export const preferenceKey = 'briosa.api.sa-target';
export const contextKey = 'briosa.api.browsing-target';
export function readTarget(): string | null {
  try { return sessionStorage.getItem(contextKey) || localStorage.getItem(preferenceKey); } catch { return null; }
}
export function rememberTarget(target: string, preference = false): void {
  try { sessionStorage.setItem(contextKey, target); if (preference) localStorage.setItem(preferenceKey, target); } catch { /* URL navigation also works without storage. */ }
}
// The release/SA pair being read across history pages in this tab.
export const pairKey = 'briosa.api.history-pair';
export type Pair = {release: string; target: string};
// Release numbers belong to one API family (Server 0.7.0 is not Client 0.7.0),
// so the pair is stored with its family and read back only within it. The SA
// target alone carries across families, through the browsing target.
export function readPair(family: string): Pair | null {
  try {
    const [stored, release, target] = (sessionStorage.getItem(pairKey) ?? '').split('|');
    return stored === family && release && target ? {release, target} : null;
  } catch { return null; }
}
export function rememberPair(family: string, pair: Pair | null): void {
  try { if (pair) sessionStorage.setItem(pairKey, `${family}|${pair.release}|${pair.target}`); else sessionStorage.removeItem(pairKey); } catch { /* The URL still carries the pair. */ }
}
export const suffix = (id: string): string => id === 'overview' ? '' : `/${id}`;
export function anchorOf(hash: string): string {
  try { return decodeURIComponent(hash.slice(1)); } catch { return hash.slice(1); }
}
// Current references render every method; an earlier release's methods live on
// their history page, anchored at the pair when that release documented them.
export function methodHref(nav: Navigation, method: {id: string; available: boolean}): string {
  if (nav.current) return nav.base + suffix(method.id);
  return `/api/${nav.family}/${method.id}${method.available ? `#release-${nav.release}-sa-${nav.target}` : `?release=${nav.release}&sa=${nav.target}`}`;
}
// The release/SA pair a history page is showing, from its per-pair anchor.
export function pairOf(hash: string): {release: string; target: string} | null {
  const match = anchorOf(hash).match(/^release-(.+?)-sa-(.+)$/);
  return match ? {release: match[1], target: match[2]} : null;
}
export type Selection = {release?: string; target?: string | null; missing?: boolean; replace: string | null; remember?: Pair};
// What a history page is showing, and the address that states it. The address
// decides: a pair anchor names the pair; a section anchor names a revision and
// keeps a query pair only when that pair published the revision; a query pair
// without a section names the pair, and is reported as missing when it was not
// documented. Only when the address names no pair does the pair already being
// read in this tab continue, and it continues even where it is not documented,
// so a request is never silently swapped for an older one. `replace` corrects a
// stale or absent query, so the address always agrees with the selectors;
// `remember` is the pair the tab carries to the next history page.
export function selection(page: PageData, hash: string, search: string, remembered: string | null, stored: Pair | null = null): Selection {
  const documented = (release?: string | null, target?: string | null) => release && target ? page.variants.find((v) => v.release === release && v.target === target && v.href) : undefined;
  const params = new URLSearchParams(search);
  const queried = params.get('release') && params.get('sa') ? {release: params.get('release')!, target: params.get('sa')!} : null;
  const address = (pair?: Pair | null) => {
    const next = new URLSearchParams(search);
    next.delete('release');
    next.delete('sa');
    if (pair) { next.set('release', pair.release); next.set('sa', pair.target); }
    const query = next.toString();
    const url = `${page.path}${query ? `?${query}` : ''}${hash}`;
    return url === `${page.path}${search}${hash}` ? null : url;
  };
  const show = (pair: Pair, inQuery: boolean): Selection => ({release: pair.release, target: pair.target, replace: address(inQuery ? pair : null), remember: {release: pair.release, target: pair.target}});
  const missing = (pair: Pair, replace: string | null): Selection => ({release: pair.release, target: pair.target, missing: true, replace, remember: {release: pair.release, target: pair.target}});
  const pair = pairOf(hash);
  if (pair) return documented(pair.release, pair.target) ? show(pair, false) : missing(pair, address(null));
  const section = anchorOf(hash).match(/^revision-(\d+)(?:-|$)/);
  if (section) {
    // A query that names another revision is stale; the pair read most recently decides the target.
    const target = stored?.target ?? params.get('sa') ?? remembered;
    const revision = Number(section[1]);
    const candidates = [queried, stored].filter((c): c is Pair => Boolean(c && documented(c.release, c.target)?.revision === revision));
    if (candidates.length) return show(candidates[0], true);
    const newest = page.variants.find((v) => v.revision === revision && v.href && v.target === target) ?? page.variants.find((v) => v.revision === revision && v.href);
    return newest ? show(newest, true) : {target, replace: address(null)};
  }
  if (queried) return documented(queried.release, queried.target) ? show(queried, true) : missing(queried, null);
  if (stored) return documented(stored.release, stored.target) ? show(stored, true) : missing(stored, address(stored));
  return {target: params.get('sa') ?? remembered, replace: null};
}
// The group page for the pair being read on a history page, or none.
export function historyGroupHref(page: PageData, selected: {release?: string; target?: string | null} | null): string | null {
  const variant = page.group && selected?.release ? page.variants.find((v) => v.release === selected.release && v.target === selected.target && v.href) : undefined;
  if (!variant) return null;
  return `/api/${page.family}/sa-${variant.target}${variant.current ? '' : `/${variant.release}`}/${page.group}`;
}
// Selector destinations follow from the documented variants of this page. On a
// history page, a change of release keeps the SA target being read (the pair
// shown, else the reader's target) and a change of target keeps the release;
// neither silently substitutes a different contract.
export function choices(page: PageData, nav: Navigation, selected: {release?: string; target?: string | null} | null = null): {targets: {value: string; href: string | null}[]; releases: {value: string; href: string | null; current: boolean}[]} {
  const absolute = (href?: string) => href ? (href.startsWith('#') ? page.path + href : href) : null;
  if (page.kind === 'history') {
    return {
      targets: nav.targets.map((target) => ({value: target, href: selected?.release
        ? absolute(page.variants.find((v) => v.release === selected.release && v.target === target && v.href)?.href)
        : page.compatibility?.targets.find((t) => t.target === target)?.href ?? null})),
      releases: nav.releases.map((release) => {
        const variant = page.variants.find((v) => v.release === release && v.href && (!selected?.target || v.target === selected.target));
        return {value: release, href: absolute(variant?.href), current: Boolean(variant?.current)};
      }),
    };
  }
  return {
    targets: nav.targets.map((target) => ({value: target, href: page.current
      ? page.compatibility?.targets.find((t) => t.target === target)?.href ?? page.variants.find((v) => v.current && v.target === target)?.href ?? null
      : page.variants.find((v) => v.release === page.release && v.target === target)?.href ?? null})),
    releases: nav.releases.map((release) => {
      const variant = page.variants.find((v) => v.release === release && v.target === page.target);
      return {value: release, href: absolute(variant?.href), current: Boolean(variant?.current)};
    }),
  };
}
// Search prefers results for the reference being read. Current references have
// release-independent addresses, so their release comes from the build's
// record of each target's current release, never from a URL segment.
export function searchFilters(pathname: string, current: Record<string, Record<string, string>> | undefined): string[] | undefined {
  const match = pathname.match(/^\/api\/(grpc|dotnet|python|javascript)(?:\/sa-([^/]+)(?:\/(\d+\.\d+\.\d+)(?=\/|$))?)?(?:\/|$)/);
  if (!match) return undefined;
  const [, family, target, release = target ? current?.[family]?.[target] : undefined] = match;
  return [`api_family:${family}`, target && `sa_target:${target}`, release && `api_release:${release}`].filter((filter): filter is string => Boolean(filter));
}
// Links and anchors in pre-rendered reference HTML, for the build's link checker.
export function htmlReferences(html: string): {links: string[]; anchors: string[]} {
  const links = [...html.matchAll(/ href="([/#][^"]*)"/g)].map((m) => m[1].replaceAll('&amp;', '&'));
  const anchors = [...html.matchAll(/ id="([^"]+)"/g)].map((m) => m[1].replaceAll('&amp;', '&'));
  return {links, anchors};
}
