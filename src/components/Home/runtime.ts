/*
 * Browser-only helpers for the homepage animations. Call them from effects and
 * event handlers, never during render: Docusaurus renders pages at build time.
 * The one exception is getMotion, which React reads as the client snapshot of
 * useSyncExternalStore; the server reads serverMotion instead.
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

/** The IntersectionObserver entry that describes the latest state; a batch can hold several. */
export function latestEntry(entries: readonly IntersectionObserverEntry[]): IntersectionObserverEntry | undefined {
  return entries[entries.length - 1];
}

/*
 * Page motion: the OS reduced-motion preference combined with the visitor's
 * Pause Motion choice (WCAG 2.2.2). Every homepage animation subscribes here
 * instead of watching the media query itself, and stays still while either is
 * set. Under reduced motion the animations show a finished still; while paused
 * they stop where they are.
 */
export type Motion = {readonly reduced: boolean; readonly paused: boolean};

const MOTION_KEY = 'briosa-motion';
const PLAYING: Motion = {reduced: false, paused: false};
let current: Motion | null = null;
const listeners = new Set<(motion: Motion) => void>();

function storedPause(): boolean {
  try {
    return window.localStorage.getItem(MOTION_KEY) === 'paused';
  } catch {
    return false;
  }
}

function publish(next: Motion) {
  if (current && current.reduced === next.reduced && current.paused === next.paused) return;
  current = next;
  listeners.forEach((listener) => listener(next));
}

/** The current motion state. The snapshot object only changes when the state does. */
export function getMotion(): Motion {
  if (!current) {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    current = {reduced: query.matches, paused: storedPause()};
    query.addEventListener('change', () => publish({reduced: query.matches, paused: getMotion().paused}));
  }
  return current;
}

/** What the server renders: motion playing. */
export const serverMotion = (): Motion => PLAYING;

export const isStill = (motion: Motion): boolean => motion.reduced || motion.paused;

/** Records the visitor's choice for later visits; storage is optional. */
export function setMotionPaused(paused: boolean): void {
  try {
    window.localStorage.setItem(MOTION_KEY, paused ? 'paused' : 'playing');
  } catch {
    // Without storage the choice still holds for this page view.
  }
  publish({reduced: getMotion().reduced, paused});
}

/** Calls the listener after every motion change and returns the unsubscribe function. */
export function subscribeMotion(listener: (motion: Motion) => void): () => void {
  getMotion();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
