import type {ClientModule} from '@docusaurus/types';

// The navbar's spectral bar lights the segment under the active section.
// Position the reading head through CSS variables on .navbar.
let bound = false;
let frame = 0;

function place(): void {
  const navbar = document.querySelector<HTMLElement>('.navbar');
  if (!navbar) return;
  const active = navbar.querySelector<HTMLElement>(
    '.navbar__items:not(.navbar__items--right) .navbar__link--active:not(.dropdown__link)',
  );
  if (!active || active.getClientRects().length === 0) {
    navbar.style.setProperty('--sl-rh-o', '0');
    return;
  }
  const bar = navbar.getBoundingClientRect();
  const box = active.getBoundingClientRect();
  navbar.style.setProperty('--sl-rh-x', `${(box.left - bar.left + 6).toFixed(1)}px`);
  navbar.style.setProperty('--sl-rh-w', `${Math.max(0, box.width - 12).toFixed(1)}px`);
  navbar.style.setProperty('--sl-rh-o', '1');
}

function schedule(): void {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(place);
}

const navbarModule: ClientModule = {
  onRouteDidUpdate() {
    if (typeof window === 'undefined') return;
    if (!bound) {
      bound = true;
      window.addEventListener('resize', schedule);
      document.fonts?.ready.then(schedule).catch(() => {});
    }
    schedule();
    window.setTimeout(schedule, 150);
  },
};

export default navbarModule;
