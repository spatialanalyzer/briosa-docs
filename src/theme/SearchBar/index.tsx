import React from 'react';
import OriginalSearchBar from '@theme-original/SearchBar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';

export default function SearchBar(): React.JSX.Element | null {
  const {siteConfig} = useDocusaurusContext();
  const {pathname} = useLocation();
  const context = pathname.match(/^\/api\/(grpc|dotnet|python|javascript)\/([^/]+)\/sa-([^/]+)/);
  if (!siteConfig.themeConfig.algolia) return null;

  return (
    <OriginalSearchBar
      searchParameters={context ? {optionalFilters: [`api_family:${context[1]}`, `api_release:${context[2]}`, `sa_target:${context[3]}`]} : undefined}
      getMissingResultsUrl={({query}: {query: string}) =>
        `/mp-command-catalog/commands?q=${encodeURIComponent(query)}`
      }
      translations={{
        button: {buttonText: 'Search docs…', buttonAriaLabel: 'Search All Documentation'},
        modal: {
          noResultsScreen: {
            noResultsText: 'No results for',
            suggestedQueryText: 'Try a shorter phrase or an MP command label.',
            reportMissingResultsText: 'Looking for an MP command?',
            reportMissingResultsLinkText: 'Browse the Command Index',
          },
        },
      }}
    />
  );
}
