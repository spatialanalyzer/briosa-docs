import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

type Product = 'server' | 'dotnet' | 'python' | 'js';

export default function BrandImage({product}: {product: Product}) {
  return (
    <ThemedImage
      className="briosa-product-logo"
      alt=""
      width={200}
      height={64}
      sources={{
        light: useBaseUrl(`/brand/suite/briosa-${product}-color.svg`),
        dark: useBaseUrl(`/brand/suite/briosa-${product}-inverse.svg`),
      }}
    />
  );
}
