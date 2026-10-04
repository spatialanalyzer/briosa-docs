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
// Selector destinations follow from the documented variants of this page.
export function choices(page: PageData, nav: Navigation): {targets: {value: string; href: string | null}[]; releases: {value: string; href: string | null; current: boolean}[]} {
  const history = page.kind === 'history';
  return {
    targets: nav.targets.map((target) => ({value: target, href: (history || page.current)
      ? page.compatibility?.targets.find((t) => t.target === target)?.href ?? page.variants.find((v) => v.current && v.target === target)?.href ?? null
      : page.variants.find((v) => v.release === page.release && v.target === target)?.href ?? null})),
    releases: nav.releases.map((release) => {
      const variant = history ? page.variants.find((v) => v.release === release && v.href) : page.variants.find((v) => v.release === release && v.target === page.target);
      return {value: release, href: variant?.href ?? null, current: Boolean(variant?.current)};
    }),
  };
}
// Links and anchors in pre-rendered reference HTML, for the build's link checker.
export function htmlReferences(html: string): {links: string[]; anchors: string[]} {
  const links = [...html.matchAll(/ href="([/#][^"]*)"/g)].map((m) => m[1].replaceAll('&amp;', '&'));
  const anchors = [...html.matchAll(/ id="([^"]+)"/g)].map((m) => m[1].replaceAll('&amp;', '&'));
  return {links, anchors};
}
