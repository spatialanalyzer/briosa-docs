import type {Manifest} from './types';
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
export function routeFor(manifest: Manifest, family: string, release: string, target: string, id: string): string | undefined {
  const ctx = manifest.contexts.find((c) => c.family === family && c.release === release && c.target === target);
  // Unavailable methods in a published target retain a compatibility page.
  if (!ctx || !manifest.contexts.some((c) => c.family === family && c.release === release && c.ids.includes(id))) return undefined;
  return ctx.base + suffix(id);
}
