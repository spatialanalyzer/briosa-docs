import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import StructuredData from '@theme-original/DocBreadcrumbs/StructuredData';
import type {Props} from '@theme/DocBreadcrumbs/StructuredData';

export default function DocBreadcrumbsStructuredData(props: Props): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  // Docusaurus keeps a trailing slash on overview breadcrumb items even when
  // the published route and canonical URL use trailingSlash: false.
  const breadcrumbs = props.breadcrumbs.map((item) => ({
    ...item,
    href: siteConfig.trailingSlash === false && item.href?.startsWith('/') && item.href !== '/'
      ? item.href.replace(/\/$/, '')
      : item.href,
  }));
  return <StructuredData {...props} breadcrumbs={breadcrumbs} />;
}
