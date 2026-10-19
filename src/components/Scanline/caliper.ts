import {useCallback, type RefObject} from 'react';

// Caliper b's jaw travels 60 of the mark's 208 drawing units up the beam.
const TRAVEL = 60 / 208;
const DURATION = 1000;
const OPEN = 0.4;

const easeOut = (t: number) => 1 - (1 - t) ** 3;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

function reduced(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Takes one reading with every Caliper b mark inside `root`: the jaw opens up
 * the beam and closes on the point. Works on the vendored brand SVGs (their
 * parts carry data-part attributes) whatever transforms SVGO left on them,
 * because the travel is measured on screen and converted to the jaw's own units.
 */
export function takeReading(root: Element | null): void {
  if (!root || reduced()) return;
  root.querySelectorAll<SVGGraphicsElement>('[data-part="jaw"]').forEach((jaw) => {
    const svg = jaw.ownerSVGElement;
    const beam = svg?.querySelector<SVGGraphicsElement>('[data-part="beam"]');
    const ctm = jaw.getScreenCTM();
    if (!svg || !beam || !ctm || jaw.dataset.reading) return;
    const travel = (TRAVEL * beam.getBoundingClientRect().height) / Math.abs(ctm.d || 1);
    if (!Number.isFinite(travel) || travel <= 0) return;
    const base = jaw.getAttribute('transform') ?? '';
    const start = performance.now();
    jaw.dataset.reading = 'on';
    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      const lift = t < OPEN ? easeOut(t / OPEN) : 1 - easeInOut((t - OPEN) / (1 - OPEN));
      jaw.setAttribute('transform', `${base} translate(0 ${(-travel * lift).toFixed(3)})`.trim());
      if (t < 1) {
        requestAnimationFrame(frame);
        return;
      }
      if (base) jaw.setAttribute('transform', base);
      else jaw.removeAttribute('transform');
      delete jaw.dataset.reading;
    };
    requestAnimationFrame(frame);
  });
}

/** A callback that takes a reading with the marks inside the referenced element. */
export function useCaliperReading(ref: RefObject<Element | null>): () => void {
  return useCallback(() => takeReading(ref.current), [ref]);
}
