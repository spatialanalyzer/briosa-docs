import type {Navigation, PageData} from './types';
export const preferenceKey = 'briosa.api.sa-target';
export const contextKey = 'briosa.api.browsing-target';
export function readTarget(): string | null {
  try { return sessionStorage.getItem(contextKey) || localStorage.getItem(preferenceKey); } catch { return null; }
}
export function rememberTarget(target: string, preference = false): void {
  try { sessionStorage.setItem(contextKey, target); if (preference) localStorage.setItem(preferenceKey, target); } catch { /* URL navigation also works without storage. */ }
}
export const suffix = (id: string): string => id === 'overview' ? '' : `/${id}`;
export function anchorOf(hash: string): string {
  try { return decodeURIComponent(hash.slice(1)); } catch { return hash.slice(1); }
}
// Current references render every method; an earlier release's methods live on
// their history page, anchored at the pair when that release documented them.
export function methodHref(nav: Navigation, method: {id: string; available: boolean}): string {
  if (nav.current) return nav.base + suffix(method.id);
  return `/api/${nav.family}/${method.id}${method.available ? `#release-${nav.release}-sa-${nav.target}` : ''}`;
}
// The release/SA pair a history page is showing, from its per-pair anchor.
export function pairOf(hash: string): {release: string; target: string} | null {
  const match = anchorOf(hash).match(/^release-(.+?)-sa-(.+)$/);
  return match ? {release: match[1], target: match[2]} : null;
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
