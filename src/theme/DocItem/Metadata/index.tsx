import type {ReactNode} from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useRouteContext from '@docusaurus/useRouteContext';

const apiLabels: Record<string, string> = {
  grpc: 'gRPC API',
  dotnet: '.NET API',
  python: 'Python API',
  javascript: 'JavaScript and TypeScript API',
};

export default function DocItemMetadata(): ReactNode {
  const {metadata, frontMatter, assets} = useDoc();
  const {plugin} = useRouteContext();
  const apiLabel = apiLabels[plugin.id];
  // Qualify search results without changing MP headings or sidebar labels.
  const title = apiLabel && !metadata.title.endsWith(apiLabel)
    ? `${metadata.title} — ${apiLabel}`
    : metadata.title;

  return (
    <PageMetadata
      title={title}
      description={metadata.description}
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image}
    />
  );
}
