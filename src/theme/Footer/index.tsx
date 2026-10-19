import React, {useEffect, useRef, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ThemeClassNames, useThemeConfig} from '@docusaurus/theme-common';
import FooterLinkItem from '@theme/Footer/LinkItem';
import CompactInverse from '@site/static/brand/logos/briosa-horizontal-compact-inverse.svg';
import {takeReading} from '@site/src/components/Scanline/caliper';

type LinkItem = {label?: string; to?: string; href?: string; html?: string; className?: string};
type Column = {title: string | null; items: LinkItem[]};

// The always-dark footer band: a measurement grid with a slow scan, the Caliper b
// lockup over a vernier rule, and the link columns from themeConfig.footer.
export default function Footer(): ReactNode {
  const {footer} = useThemeConfig();
  const {siteConfig} = useDocusaurusContext();
  const brand = useRef<HTMLAnchorElement>(null);

  // The mark takes one reading when the footer comes into full view.
  useEffect(() => {
    const el = brand.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    let timer = 0;
    const io = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        io.disconnect();
        timer = window.setTimeout(() => takeReading(el), 250);
      }
    }, {threshold: 1});
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  if (!footer) return null;
  const columns = (footer.links ?? []) as Column[];
  return (
    <footer className={clsx(ThemeClassNames.layout.footer.container, 'footer footer--dark sl-foot')}>
      <div className="sl-spectral" aria-hidden="true" />
      <div className="container sl-foot__in">
        <div className="sl-foot__top">
          <div className="sl-foot__brand">
            <Link
              to="/"
              ref={brand}
              className="sl-foot__logo"
              aria-label="Briosa home"
              onPointerEnter={() => takeReading(brand.current)}>
              <CompactInverse className="sl-foot__art" title="" aria-hidden="true" focusable="false" />
              <span className="sl-foot__rule" aria-hidden="true" />
            </Link>
            <p className="sl-foot__slogan">{siteConfig.tagline}</p>
            <p className="sl-foot__about">An open-source gRPC bridge to the SpatialAnalyzer SDK.</p>
          </div>
          <nav className="sl-foot__cols" aria-label="Footer">
            {columns.map((column) => (
              <div key={column.title ?? 'links'} className="sl-foot__col">
                {column.title && <h2 className="sl-hud sl-foot__title">{column.title}</h2>}
                <ul>
                  {column.items.map((item) => (
                    <li key={item.href ?? item.to ?? item.label}>
                      <FooterLinkItem item={item as never} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        {footer.copyright && (
          <div className="sl-foot__bot">
            <p dangerouslySetInnerHTML={{__html: footer.copyright}} />
          </div>
        )}
      </div>
    </footer>
  );
}
