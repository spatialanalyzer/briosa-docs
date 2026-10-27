import React, {type ComponentProps, type ComponentType, type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useIsBrowser from '@docusaurus/useIsBrowser';

type Props = {
  svg: ComponentType<ComponentProps<'svg'> & {title?: string}>;
  src: string;
  className: string;
};

// Static HTML references the vendored brand file, which browsers cache once for
// the whole site. After hydration the inline SVG takes its place, so the Caliper
// b jaw can take a reading. Inlining it in every page's HTML cost about 15 KB a page.
export default function BrandArt({svg: Svg, src, className}: Props): ReactNode {
  const url = useBaseUrl(src);
  const browser = useIsBrowser();
  if (!browser) return <img className={className} src={url} alt="" />;
  return <Svg className={className} title="" aria-hidden="true" focusable="false" />;
}
