/*
 * Browser-only helpers for the homepage animations. Call them from effects and
 * event handlers, never during render: Docusaurus renders pages at build time.
 */

export type RGBA = [number, number, number, number];

export const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** A Scanline token's computed value, such as `--sl-laser`. */
export function token(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export function isDarkTheme(): boolean {
  return document.documentElement.getAttribute('data-theme') === 'dark';
}

let probe: CanvasRenderingContext2D | null = null;

/** Parses any CSS color the canvas understands into RGBA channels. */
export function parseColor(value: string): RGBA {
  probe ??= document.createElement('canvas').getContext('2d');
  if (!probe) return [0, 0, 0, 1];
  probe.fillStyle = '#000';
  probe.fillStyle = value || '#000';
  const v = String(probe.fillStyle);
  if (v.charAt(0) === '#') {
    return [parseInt(v.slice(1, 3), 16), parseInt(v.slice(3, 5), 16), parseInt(v.slice(5, 7), 16), 1];
  }
  const m = v.match(/[\d.]+/g) ?? ['0', '0', '0'];
  return [+m[0], +m[1], +m[2], m[3] !== undefined ? +m[3] : 1];
}

export function rgba(c: RGBA, a?: number): string {
  return `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${(a === undefined ? c[3] : a).toFixed(3)})`;
}

export function mix(a: RGBA, b: RGBA, t: number): RGBA {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t), lerp(a[3], b[3], t)];
}

export function reducedMotionQuery(): MediaQueryList {
  return window.matchMedia('(prefers-reduced-motion: reduce)');
}

/** Subscribes to reduced-motion changes and returns the unsubscribe function. */
export function onMotionChange(query: MediaQueryList, listener: () => void): () => void {
  query.addEventListener('change', listener);
  return () => query.removeEventListener('change', listener);
}
