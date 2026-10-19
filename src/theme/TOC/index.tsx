import React, {useEffect, useRef, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import type {Props} from '@theme/TOC';

// The contents rail is a ruler: each heading is a tick, the section being read
// gets the jaw, and the ruler fills with laser light down to it.
export default function TOC({className, ...props}: Props): ReactNode {
  const ruler = useRef<HTMLDivElement>(null);
  const [mark, setMark] = useState<number | null>(null);

  useEffect(() => {
    const el = ruler.current;
    if (!el) return undefined;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const active = el.querySelector<HTMLElement>('.briosa-toc-link-active');
        if (!active) {
          setMark(null);
          return;
        }
        const top = active.getBoundingClientRect().top - el.getBoundingClientRect().top;
        setMark(Math.round(top + 15));
      });
    };
    const observer = new MutationObserver(update);
    observer.observe(el, {subtree: true, attributes: true, attributeFilter: ['class']});
    window.addEventListener('resize', update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <nav className={clsx('briosa-toc sl-toc thin-scrollbar', className)} aria-label="On This Page">
      <p className="sl-hud sl-toc__cap">On This Page</p>
      <div className="sl-toc__ruler" ref={ruler}>
        <span className="sl-toc__fill" style={{height: mark ?? 0}} aria-hidden="true" />
        <span className={clsx('sl-toc__jaw', mark !== null && 'is-on')} style={{transform: `translateY(${mark ?? 0}px)`}} aria-hidden="true" />
        <TOCItems {...props} className="briosa-toc-list" linkClassName="briosa-toc-link toc-highlight" linkActiveClassName="briosa-toc-link-active" />
      </div>
    </nav>
  );
}
