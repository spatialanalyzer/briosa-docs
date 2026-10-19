import React, {useRef, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import DocsColor from '@site/static/brand/suite/briosa-docs-color.svg';
import DocsInverse from '@site/static/brand/suite/briosa-docs-inverse.svg';
import {useCaliperReading} from '@site/src/components/Scanline/caliper';

// The brand pack's DOCS lockup, inlined (not an <img>) so the Caliper b jaw
// can take a reading on hover and keyboard focus. Each theme shows its variant.
export default function NavbarLogo(): ReactNode {
  const ref = useRef<HTMLAnchorElement>(null);
  const read = useCaliperReading(ref);
  return (
    <Link
      to="/"
      ref={ref}
      className="navbar__brand sl-brand"
      aria-label="Briosa home"
      onPointerEnter={read}
      onFocus={(event) => {
        if (event.currentTarget.matches(':focus-visible')) read();
      }}>
      <DocsColor className="sl-brand__art sl-brand__art--light" title="" aria-hidden="true" focusable="false" />
      <DocsInverse className="sl-brand__art sl-brand__art--dark" title="" aria-hidden="true" focusable="false" />
    </Link>
  );
}
