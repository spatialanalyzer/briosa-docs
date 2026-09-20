import type {ReactNode} from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useDoc, useDocsVersion} from '@docusaurus/plugin-content-docs/client';
import useRouteContext from '@docusaurus/useRouteContext';

const apiLabels: Record<string, string> = {
  grpc: 'gRPC API',
  dotnet: '.NET API',
  python: 'Python API',
  javascript: 'JavaScript and TypeScript API',
};

export default function DocItemMetadata(): ReactNode {
  const {metadata, frontMatter, assets} = useDoc();
  const version = useDocsVersion();
  const {plugin} = useRouteContext();
  const apiLabel = apiLabels[plugin.id];
  // Qualify search results without changing MP headings or sidebar labels.
  const target = metadata.permalink.includes('/sa-2024.1.0508.5')
    ? '2024.1.0508.5' : '2026.1.0529.7';
  const title = apiLabel
    ? `${metadata.title} — ${apiLabel} ${version.version} · SA ${target}`
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
