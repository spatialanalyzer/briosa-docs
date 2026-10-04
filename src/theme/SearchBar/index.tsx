import React from 'react';
import OriginalSearchBar from '@theme-original/SearchBar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import {usePluginData} from '@docusaurus/useGlobalData';
import {searchFilters} from '@site/src/components/ApiReference/context';

export default function SearchBar(): React.JSX.Element | null {
  const {siteConfig} = useDocusaurusContext();
  const {pathname} = useLocation();
  const reference = usePluginData('briosa-api-reference') as {current?: Record<string, Record<string, string>>} | undefined;
  const filters = searchFilters(pathname, reference?.current);
  if (!siteConfig.themeConfig.algolia) return null;

  return (
    <OriginalSearchBar
      searchParameters={filters ? {optionalFilters: filters} : undefined}
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
