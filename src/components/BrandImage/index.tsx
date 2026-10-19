import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

type Product = 'server' | 'dotnet' | 'python' | 'js';

// Suite lockups share a 136-unit height; each width follows its product label.
const widths: Record<Product, number> = {server: 841, dotnet: 740, python: 845, js: 667};

export default function BrandImage({product}: {product: Product}) {
  return (
    <ThemedImage
      className="briosa-product-logo"
      alt=""
      width={widths[product]}
      height={136}
      sources={{
        light: useBaseUrl(`/brand/suite/briosa-${product}-color.svg`),
        dark: useBaseUrl(`/brand/suite/briosa-${product}-inverse.svg`),
      }}
    />
  );
}
