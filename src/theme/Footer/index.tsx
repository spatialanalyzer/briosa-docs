import React, {useEffect, useRef, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ThemeClassNames, isMultiColumnFooterLinks, useThemeConfig, type FooterColumnItem} from '@docusaurus/theme-common';
import FooterLinkItem from '@theme/Footer/LinkItem';
import CompactInverse from '@site/static/brand/logos/briosa-horizontal-compact-inverse.svg';
import BrandArt from '@site/src/components/Scanline/BrandArt';
import {takeReading} from '@site/src/components/Scanline/caliper';

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
  // A flat list of links renders as one untitled column.
  const links = footer.links ?? [];
  const columns: FooterColumnItem[] = isMultiColumnFooterLinks(links) ? links : [{title: null, items: links}];
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
              <BrandArt svg={CompactInverse} src="/brand/logos/briosa-horizontal-compact-inverse.svg" className="sl-foot__art" />
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
                  {column.items.map((item, i) =>
                    item.html ? (
                      // Site config provides this HTML, as with the upstream footer.
                      <li key={i} className={item.className} dangerouslySetInnerHTML={{__html: item.html}} />
                    ) : (
                      <li key={item.href ?? item.to ?? i}>
                        <FooterLinkItem item={item} />
                      </li>
                    ),
                  )}
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
