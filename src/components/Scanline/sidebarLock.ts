/**
 * The docs sidebar reads as a measuring beam. This places a corner-bracket
 * "lock" on the current page's link, slides it to whichever link the pointer
 * or keyboard focus is on, and returns it when they leave. A point on the beam
 * marks the current page. Returns a cleanup function.
 */
export function attachSidebarLock(container: HTMLElement | null): () => void {
  const found = container?.querySelector<HTMLElement>('nav.menu');
  if (!found) return () => {};
  const nav: HTMLElement = found;
  const lock = document.createElement('span');
  const point = document.createElement('span');
  lock.className = 'sl-brk sl-sidebar__lock';
  point.className = 'sl-sidebar__point';
  lock.setAttribute('aria-hidden', 'true');
  point.setAttribute('aria-hidden', 'true');
  nav.append(lock, point);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let target: HTMLElement | null = null;
  let frame = 0;
  let intro = 0;

  const current = () => nav.querySelector<HTMLElement>('a.menu__link[aria-current="page"]');
  const visible = (el: HTMLElement | null) => !!el && el.offsetParent !== null && el.getClientRects().length > 0;

  function place(el: HTMLElement | null, ghost: boolean) {
    if (!visible(el)) {
      lock.classList.remove('is-on');
      point.classList.remove('is-on');
      return;
    }
    const navBox = nav.getBoundingClientRect();
    const box = el!.getBoundingClientRect();
    const top = box.top - navBox.top + nav.scrollTop;
    const left = box.left - navBox.left + nav.scrollLeft;
    lock.style.transform = `translate(${left.toFixed(1)}px, ${top.toFixed(1)}px)`;
    lock.style.width = `${box.width.toFixed(1)}px`;
    lock.style.height = `${box.height.toFixed(1)}px`;
    lock.classList.toggle('is-ghost', ghost);
    lock.classList.add('is-on');
    if (!ghost) {
      point.style.transform = `translateY(${(top + box.height / 2).toFixed(1)}px)`;
      point.classList.add('is-on');
    }
  }

  const refresh = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const active = current();
      place(target && target !== active ? target : active, !!target && target !== active);
    });
  };

  const onOver = (event: Event) => {
    const link = (event.target as Element).closest?.<HTMLElement>('a.menu__link');
    if (link && link !== target) {
      target = link;
      refresh();
    }
  };
  const onLeave = () => {
    target = null;
    refresh();
  };
  const onFocus = (event: FocusEvent) => {
    const link = (event.target as Element).closest?.<HTMLElement>('a.menu__link');
    if (link && link.matches(':focus-visible')) {
      target = link;
      refresh();
    }
  };

  // Start at the top of the beam, then slide onto the current page.
  if (!reduced.matches) {
    lock.style.transition = 'none';
    point.style.transition = 'none';
    lock.style.transform = 'translate(0px, 0px)';
    intro = requestAnimationFrame(() => {
      intro = requestAnimationFrame(() => {
        lock.style.transition = '';
        point.style.transition = '';
        refresh();
      });
    });
  } else {
    refresh();
  }

  nav.addEventListener('pointerover', onOver);
  nav.addEventListener('pointerleave', onLeave);
  nav.addEventListener('focusin', onFocus);
  nav.addEventListener('focusout', onLeave);
  nav.addEventListener('transitionend', refresh);
  window.addEventListener('resize', refresh);
  // The lock and point restyle themselves on every placement; reacting to those
  // changes would schedule a placement every frame.
  const observer = new MutationObserver((records) => {
    if (records.some((record) => record.target !== lock && record.target !== point)) refresh();
  });
  observer.observe(nav, {subtree: true, attributes: true, attributeFilter: ['class', 'style', 'aria-expanded', 'aria-current', 'hidden']});
  const sizes = 'ResizeObserver' in window ? new ResizeObserver(refresh) : null;
  sizes?.observe(nav);
  document.fonts?.ready.then(refresh).catch(() => {});

  // Keep the current page in view when the sidebar first opens on a long list.
  const active = current();
  if (active && nav.scrollHeight > nav.clientHeight) {
    const offset = active.getBoundingClientRect().top - nav.getBoundingClientRect().top;
    if (offset > nav.clientHeight - 60) nav.scrollTop += offset - nav.clientHeight / 3;
  }

  return () => {
    cancelAnimationFrame(frame);
    cancelAnimationFrame(intro);
    observer.disconnect();
    sizes?.disconnect();
    nav.removeEventListener('pointerover', onOver);
    nav.removeEventListener('pointerleave', onLeave);
    nav.removeEventListener('focusin', onFocus);
    nav.removeEventListener('focusout', onLeave);
    nav.removeEventListener('transitionend', refresh);
    window.removeEventListener('resize', refresh);
    lock.remove();
    point.remove();
  };
}
